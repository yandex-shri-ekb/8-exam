module.exports = function(grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        /*watch: {
            files: ['Gruntfile.js', 'js*//*.js'],
            tasks: ['jshint']
        },*/
        jshint : {
            files : ['Gruntfile.js', 'js/main.js', 'js/app/*.js', 'js/**/*.js'],
            options : {
                validthis: true,
                laxcomma: true,
                laxbreak: true,
                browser: true,
                eqnull: true,
                debug: true,
                devel: true,
                boss: true,
                expr: true,
                asi: true,
                globals: {
                    jQuery : true
                }
            }
        },
        copy: {
            build: {
                files: {
                    'build.html': ['index.html']
                }
            }
        },
        // https://github.com/yeoman/grunt-usemin
        useminPrepare: {
            html: 'build.html',
            options: {
                dest: 'build'
            }
        },
        usemin: {
            html: 'build.html',
            options: {
                dest: 'build'
            }
        },
        // https://github.com/jrburke/r.js/blob/master/build/example.build.js
        requirejs: {
            compile: {
                options: {
                    baseUrl: "js",
                    paths: {
                        jquery: "empty:",
                        app: 'app'
                    },
                    name: "main",
                    out: "build/app.js"
                }
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery']
                }
            },
            my_target: {
                options: {
                    sourceMap: 'build/app.min.map'
                },
                files: {
                    'build/app.min.js': ['build/app.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('default', ['copy', 'jshint', 'useminPrepare', 'usemin', 'concat', 'cssmin', 'requirejs', 'uglify']);
};