module.exports = function (grunt) {

    var utils = require('./utils.js')();

    utils.configureGrunt(grunt, './tasks/');

    grunt.registerTask('style', ['less']);

    grunt.registerTask('minify', ['requirejs', 'less', 'cssmin', 'copy:dist', 'uglify:dist', 'compress:gzip', 'compress:zip']);

    grunt.registerTask('dist', ['requirejs', 'less', 'cssmin', 'copy:dist', 'uglify:dist', 'compress:gzip', 'compress:zip']);

    grunt.registerTask('default', ['dist']);
};
