const gulp = require('gulp')

const del = require('del')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const exec = require('child_process').exec
const nodemon = require('gulp-nodemon')
const preprocess = require('gulp-preprocess')
const [,, task, ...args] = process.argv


const context = {
    RELOAD_STYLES: task === 'style' || task === 'watch',
    RELOAD_JS: task === 'code' || task === 'watch'
}


gulp.task('clean', () => del(['build']))


gulp.task('html', () =>
    gulp.src('app/**/*.html')
        .pipe(preprocess({context}))
        .pipe(gulp.dest('build/app'))
)


gulp.task('sass', () =>
    gulp.src('app/styles/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/app/styles'))
)


function babelError({message, codeFrame}) {
    console.log(message)
    console.log(codeFrame)
    this.emit('end')
}

gulp.task('babel', () =>
    gulp.src('app/**/*.+(js|jsx)')
        .pipe(preprocess({context}))
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on('error', babelError)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/app'))
)


gulp.task('copy-res', () =>
    gulp.src('app/**/*.+(png|ttf)')
        .pipe(gulp.dest('build/app'))
)


gulp.task('build', ['html', 'copy-res', 'sass', 'babel'])


gulp.task('run', ['build'], () => exec('electron .'))


gulp.task('nodemon', ['build'], () =>
    nodemon({
        exec: ['electron', '.'],
        watch: './app',
        ext: 'js html',
        tasks: 'build'
    })
)


gulp.task('style', ['run'], () =>
    gulp.watch('app/styles/**', ['sass'])
)


gulp.task('code', ['run'], () =>
    gulp.watch('app/**', ['babel'])
)


gulp.task('watch', ['run'], () => {
    gulp.watch(['app/**', '!**/*.sass'], ['babel'])
    gulp.watch('app/styles/**', ['sass'])
})
