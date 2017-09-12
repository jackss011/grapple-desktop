const gulp = require('gulp')

const del = require('del')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const exec = require('child_process').exec
const nodemon = require('gulp-nodemon')

gulp.task('clean', () => del(['build']))

gulp.task('sass', () =>
    gulp.src('app/styles/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/app/styles'))
)

gulp.task('babel', () =>
    gulp.src('app/**/*.+(js|jsx)')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/app'))
)

gulp.task('copy-res', () =>
    gulp.src('app/**/*.+(html|ttf)')
        .pipe(gulp.dest('build/app'))
)

gulp.task('build', ['copy-res', 'sass', 'babel'])

gulp.task('run', ['build'], () => exec('electron .'))

gulp.task('nodemon', ['build'], () =>
    nodemon({
        exec: ['electron', '.'],
        watch: './app',
        tasks: 'build'
    })
)
