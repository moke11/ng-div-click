/**
 * Created by rmokros on 12/24/15.
 */
module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            default: {
                options: {
                    preserveComments: 'some',
                    sourceMap: 'ng-div-click.min.map',
                    sourceMappingURL: 'ng-div-click.min.map'
                },
                files: {
                    'angular-clickout.min.js': 'ng-div-click.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};