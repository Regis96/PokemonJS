module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                esversion: 6
            },
            all: {
                src: ['spas/**/*.js']
            },
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    livereload: true,
                    middleware: function (connect, options, middlewares) {
                        // inject a custom middleware
                        middlewares.unshift(function (req, res, next) {
                            res.setHeader('Access-Control-Allow-Origin', '*');
                            res.setHeader('Access-Control-Allow-Methods', '*');
                            //a console.log('foo') here is helpful to see if it runs
                            return next();
                        });

                        return middlewares;
                    },
                    open: true
                }
            }
        },
        watch: {
            files: ['spas/**/*.js','spas/**/*.html','*.js','*.html'],
            tasks: ['build'],
            options: {
                reload: true,
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint','connect','watch']);
    grunt.registerTask('build',['jshint']);
}