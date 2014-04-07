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
        
        jshint: {
            all: [ 'knockout.macros.js' ],
            options: {
                es3: true,
                forin: true,
                freeze: true,
                immed: true,
                latedef: true,
                newcap: true,
                strict: true,
                undef: true,
                
                globals: {
                    ko: true
                }
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
            minify: {
                files: {
                    'knockout.macros.min.js': 'knockout.macros.js'
                }
            }
        }
    } );
    
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-jasmine' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    
    grunt.registerTask( 'default', [ 'concat', 'jshint', 'uglify:minify'/*, 'jasmine:all'*/ ]  );
};
