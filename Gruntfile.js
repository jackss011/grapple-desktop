const buildDir = "build/app"

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            files: {
                cwd: 'app',
                src: ['**/*.js', '**/*.html'],
                dest: buildDir,
                expand: true
            }
        },

        babel: {
            options: {
                sourceMap: true
            },
            files: {
                cwd: 'app',
                src: ['src/**/*.js', 'src/**/*.jsx'],
                dest: buildDir,
                ext: '.js',
                expand: true
            }
        },

        sass: {
            options: {},
            files: {
                cwd: 'app',
                src: ['**/*.sass'],
                dest: buildDir,
                ext: '.css',
                expand: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['copy', 'babel', 'sass']);
}
