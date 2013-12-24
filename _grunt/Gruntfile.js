module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            compass: {
                files: ['../css/sass/*.scss'],
                tasks: ['compass:development']
            }
        },
        compass: {
            development: {
                options: {
                    sassDir: '../css/sass',
                    cssDir: '../css/development',
                    imagesDir: '../img',
                    generatedImagesDir: '../img/spritegen',
                    javascriptsDir: '../js',
                    outputStyle: 'expanded',
                    debugInfo: true,
                    relativeAssets: true
                }
            },
            control: {
                options: {
                    sassDir: '../css/sass',
                    cssDir: '../css/control',
                    imagesDir: '../img',
                    generatedImagesDir: '../img/spritegen',
                    javascriptsDir: '../js',
                    outputStyle: 'expanded',
                    debugInfo: false,
                    relativeAssets: true
                }
            },
            production: {
                options: {
                    sassDir: '../css/sass',
                    cssDir: '../css/production',
                    imagesDir: '../img',
                    generatedImagesDir: '../img/spritegen',
                    javascriptsDir: '../js',
                    outputStyle: 'compressed',
                    debugInfo: false,
                    relativeAssets: true
                }
            }
        },
        concat: {
            production: {
                src: [
                    '../css/vendor/normalize.css',
                    '../css/vendor/anygrid_compatibility.css',
                    '../css/production/fonts.css',
                    '../css/production/base.css',
                    '../css/production/main.css',
                    '../css/production/yellow.css',
                    '../css/production/red.css',
                    '../css/production/blue.css'
                ],
                dest: '../css/production/all.css'
            },
            control: {
                src: [
                    '../css/vendor/normalize.css',
                    '../css/vendor/anygrid_compatibility.css',
                    '../css/production/fonts.css',
                    '../css/control/base.css',
                    '../css/control/main.css',
                    '../css/control/yellow.css',
                    '../css/control/red.css',
                    '../css/control/blue.css'
                ],
                dest: '../css/control/all.css'
            }
        },
        csscomb: {
            options: {
                sortOrder: '.csscomb.json'
            },
            production: {
                files: {
                    '../css/production/all.css': ['../css/production/all.css']
                }
            },
            control: {
                files: {
                    '../css/control/all.css': ['../css/control/all.css']
                }
            }
        },
        cssmin: {
            production: {
                expand: true,
                keepSpecialComments: 0,
                cwd: '../css/production/',
                src: ['all.css'],
                dest: '../css/production/',
                ext: '.min.css'
            }
        },
        uglify: {
            production: {
                files: {
                    '../js/main.min.js': ['../js/main.js']
                }
            }
        },
        htmlclean: {
            production: {
                expand: true,
                cwd: '../',
                src: 'main.html',
                dest: '../html_clear'
            }
        },
        compress: {
            production: {
                options: {
                    mode: 'gzip'
                },
                files: [
                    {
                        expand: true,
                        src: ['../js/main.min.js'],
                        dest: '../js/',
                        ext: '.gz.js'
                    },
                    {
                        expand: true,
                        src: ['../css/production/all.min.css'],
                        dest: '../css/',
                        ext: '.gz.css'
                    }
                ]
            }
        },
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 3
                },
                files: [
                    {
                        expand: true,
                        cwd: '../img/',
                        src: ['*.png'],
                        dest: '../img/compress/'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '../img/',
                        src: ['*.jpg'],
                        dest: '../img/compress/'
                    }
                ]
            }
        },
        pngmin: {
            compile: {
                options: {
                    concurrency: 8,
                    ext: '.png',
                    quality: '65-80',
                    speed: 10
                },
                files: [
                    {
                        expand: true,
                        src: ['**/*.png'],
                        cwd: '../img/',
                        dest: '../img/'
                    }
                ]
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', [
        'compass:development',
        'watch'
    ]);

    grunt.registerTask('control', [
        'compass:control',
        'concat:control',
        'csscomb:control'
    ]);

    grunt.registerTask('production', [
        'compass:production',
        'concat:production',
        'csscomb:production',
        'cssmin:production',
        'htmlclean',
        'uglify',
        'compress'
    ]);

    grunt.registerTask('img_compress', [
        'imagemin'
    ]);

    grunt.registerTask('pngmin', [
        'pngmin'
    ]);
};