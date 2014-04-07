module.exports = function ( grunt ) {
    
    grunt.initConfig( {
        
        concat: {
            all: {
                src: [
                    'src/_head.js',
                    'src/logical.js',
                    'src/relative.js',
                    'src/_tail.js'
                ],
                dest: 'knockout.macros.js'
            }
        },
        
        jasmine: {
            all: {
                src: 'knockout.macros.js',
                options: {
                    specs: 'test/*.spec.js',
                    vendor: 'test/lib/*.js'
                }
            }
        },
        
        uglify: {
            beautify: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: {
                    'knockout.macros.js': 'knockout.macros.js'
                }
            },
            minify: {
                files: {
                    'knockout.macros.min.js': 'knockout.macros.js'
                }
            }
        }
    } );
    
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-jasmine' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    
    grunt.registerTask( 'default', [ 'concat', 'uglify:beautify', 'uglify:minify', 'jasmine:all' ]  );
};
