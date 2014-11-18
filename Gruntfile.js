/* jshint node: true */

module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: '<json:package.json>',
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: './',
                    keepalive: true
                }
            }
        }
    });

    //Grunt Server
    grunt.registerTask('start', ['connect:server']);
};
