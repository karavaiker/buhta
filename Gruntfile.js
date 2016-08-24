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
        },
        imagemin: {
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'imgBig/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'img/'                  // Destination path prefix
                }]
            }
        }


    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['concat', 'uglify','imagemin']);

};