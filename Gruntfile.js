module.exports = function(grunt) {
    grunt.initConfig({
        csscomb: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/blocks/common',
                        src: ['**/*.css'],
                        dest: 'src/blocks/common',
                        filter: 'isFile'
                    }
                ]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version', '> 1%', 'ie >= 7', 'ff >= 3.6', 'opera >= 9']
            },

            main: {
                expand: true,
                cwd: 'src/blocks/common',
                src: '**/*.css',
                dest: 'src/blocks/common'
            }
        },

        enb: {
            production: {
                targets: ['src/pages/index/'],
                env: {YENV: 'production'}
            },
            development: {
                targets: ['src/pages/index/']
            }
        },

        imgo: {
            images: {
                src: 'dist/images/**/*.*',
                options: '-m -b'
            }
        },

        copy: {
            images: {
                expand: true,
                cwd: 'src/',
                src: 'images/**',
                dest: 'dist/'
            },
            pages: {
                expand: true,
                cwd: 'src/pages/index/',
                src: ['_index*.css', '_index.js', 'index.html'],
                dest: 'dist/'
            }
        },

        rename: {
            dist: {
                files: [
                    {src: 'dist/_index.js', dest: 'dist/scripts.js'},
                    {src: 'dist/_index.css', dest: 'dist/styles.css'},
                    {src: 'dist/_index.ie.css', dest: 'dist/styles.ie.css'}
                ]
            }
        },

        replace: {
            html: {
                src: ['dist/*.html', 'dist/*.css'],
                overwrite: true,
                replacements: [
                    {from: '../../images/', to: './images/'},
                    {from: '_index.css', to: 'styles.css'},
                    {from: '_index.ie.css', to: 'styles.ie.css'},
                    {from: '_index.js', to: 'scripts.js'}
                ]
            }
        },

        clean: {
            dist: {src: 'dist/*.*'}
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var tasks = {
        production: 'enb:production clean:dist copy:pages rename:dist replace',
        css: 'autoprefixer csscomb'
    };

    grunt.registerTask('default', tasks.production.split(' '));
    grunt.registerTask('css', tasks.css.split(' '));
};
