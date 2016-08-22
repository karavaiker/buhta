module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'js/libs/*.js', // Все JS в папке libs
                    'js/*.js'  // Конкретный файл
                ],
                dest: 'build/production.js'
            }
        },
        uglify: {
            build: {
                src: 'build/production.js',
                dest:'build/production.min.js'
            }
        }


    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['concat', 'uglify']);

};