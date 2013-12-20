module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            compass: {
                files: ['../css/sass/*.scss'],
                tasks: ['compass']
            }
        },
        compass: {
            main: {
                options: {
                    sassDir: '../css/sass',
                    cssDir: '../css',
                    imagesDir: '../img',
                    javascriptsDir: '../js',
                    outputStyle: 'expanded',
                    debugInfo: true
                }
            }
        },
        csscomb: {
            main: {
                options: {
                    sortOrder: '.csscomb.json'
                },
                files: {
                    '../css/main.css': ['../css/main.css'],
//                    '../css/sass/main.scss': ['../css/sass/main.scss']
                }
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['compass', 'csscomb', 'watch']);
};