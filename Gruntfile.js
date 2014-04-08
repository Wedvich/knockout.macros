module.exports = function ( grunt ) {
    
    grunt.initConfig( {
        
        concat: {
            all: {
                src: [
                    'src/_head.js',
                    'src/arrays.js',
                    'src/functions.js',
                    'src/logical.js',
                    'src/relative.js',
                    'src/exports.js',
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
                    define: true,
                    ko: true
                }
            }
        },
        
        jasmine: {
            knockout23: {
                src: 'knockout.macros.js',
                options: {
                    specs: 'spec/*.spec.js',
                    vendor: 'spec/lib/knockout-2.3.0.debug.js',
                    template: require( 'grunt-template-jasmine-istanbul' ),
                    templateOptions: {
                        coverage: 'coverage/coverage.json',
                        report: 'coverage'
                    }
                }
            },
            knockout30: {
                src: 'knockout.macros.js',
                options: {
                    specs: 'spec/*.spec.js',
                    vendor: 'spec/lib/knockout-3.0.0.debug.js',
                    template: require( 'grunt-template-jasmine-istanbul' ),
                    templateOptions: {
                        coverage: 'coverage/coverage.json',
                        report: 'coverage'
                    }
                }
            },
            knockout31: {
                src: 'knockout.macros.js',
                options: {
                    specs: 'spec/*.spec.js',
                    vendor: 'spec/lib/knockout-3.1.0.debug.js',
                    template: require( 'grunt-template-jasmine-istanbul' ),
                    templateOptions: {
                        coverage: 'coverage/coverage.json',
                        report: 'coverage'
                    }
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
    
    grunt.registerTask( 'default', [ 'concat', 'jshint', 'jasmine:knockout23', 'jasmine:knockout30', 'jasmine:knockout31', 'uglify:minify' ]  );
};
