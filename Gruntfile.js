module.exports = function( grunt ) {

    grunt.initConfig({
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src : ['**/*.html', '**/*.jpg', '**/*.png', '**/*.js'], dest: 'site/'}
                ]
            }
        },
        watch : {
            build: {
                files: ['src/**'],
                tasks: ['default']
            }
        },
        sass : {
            main : {
                files : {
                    'site/assets/css/site.css' : 'src/assets/sass/site.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['copy:main', 'sass:main']);
};