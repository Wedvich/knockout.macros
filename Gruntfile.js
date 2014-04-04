module.exports = function ( grunt ) {
    
    grunt.initConfig( {
        
        concat: {
            all: {
                src: [
                    'src/_pre.js',
                    'src/_helpers.js',
                    'src/and.js',
                    'src/equal.js',
                    'src/gt.js',
                    'src/gte.js',
                    'src/lt.js',
                    'src/lte.js',
                    'src/or.js',
                    'src/_post.js'
                ],
                dest: 'knockout.macros.js'
            }
        },
        
        jasmine: {
            all: {
                src: 'knockout.macros.min.js',
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
