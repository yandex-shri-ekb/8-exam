module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    jshint : {
        files : ['Gruntfile.js', 'src/js/main.js', 'src/js/app/*.js'],
        options : {
            eqnull: true,
            debug: true,
            globals: {
                jQuery : true
            }
        }
    },
    requirejs: {
        compile: {
            options: {
                baseUrl: "src/js",
                mainConfigFile: "app.js",
                out: "dist/js/app.js"
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
                sourceMap: 'dist/js/app.min.map'
            },
            files: {
                'dist/js/app.min.js': ['dist/js/app.js']
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['jshint', 'concat', 'requirejs', 'uglify']);
};