( function ( factory ) {
    'use strict';
    
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'knockout' ], factory );
    } else {
        factory( ko );
    }
} ( function ( ko ) {   
    'use strict';
