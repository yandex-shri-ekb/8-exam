module.exports = function(grunt) {
    grunt.initConfig({

        csscomb: {
            dist: {
                files: {
                    'css/style.css': ['css/style.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-csscomb');
    grunt.registerTask('default', ['csscomb']);
};
