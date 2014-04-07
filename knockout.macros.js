( function ( ko ) {
    
    'use strict';
    
    if ( !ko )
        throw new Error( 'Knockout.macros requires Knockout' );
    
    // Helper function that wraps a plain value in a function to create a uniform accessor
    var getAccessor = function ( obj ) {
        return typeof obj === typeof Function ? obj : function () { return obj; };
    };
    
    // Helper function that returns a computed observable comparator with variadic parameters
    var getVariadicComparator = function ( comparator, deferred ) {
        return function () {
            
            // Get accessors for the passed arguments
            var i = 0,
                accessors = [];
            for ( ; i < arguments.length; ++i ) 
                accessors.push( getAccessor( arguments[ i ] ) );
            
            // Build the observable, optionally deferring return until all value pairs have been evaluated
            return !deferred ? ko.computed( function () {
                for ( var j = 0; j < accessors.length - 1; ++j )
                    if ( !comparator( accessors[ j ](), accessors[ j + 1 ]() ) )
                        return false;
                return true;
            } ) : ko.computed( function () {
                var result;
                for ( var j = 0; j < accessors.length - 1; ++j )
                    result = result || comparator( accessors[ j ](), accessors[ j + 1 ]() );
                return result;
            } );
        };
    };
    
    // Helper function that returns a computed observable evaluator for a single parameter
    var getUnaryEvaluator = function ( evaluator ) {
        return function () {
            var accessor = getAccessor( arguments[ 0 ] );
            return ko.computed( function () {
                return evaluator( accessor() );
            } );
        };
    };

    // Return the truthiness of a && b
    var and = function ( a, b ) {
        return !!( a && b );
    };

    // Return the inverse boolean value of the truthiness of a
    var not = function ( a ) {
        return !a;
    };
    
    // Return the truthiness of a || b 
    var or = function ( a, b ) {
        return !!( a || b );
    };

    // Return the loose equality of a and b
    var eq = function ( a, b ) {
        return a == b;
    };
    
    // Return whether a is greater than b
    var gt = function( a, b ) {
        return a > b;
    };
    
    // Return whether a is greater than or equal to b
    var gte = function( a, b ) {
        return a >= b;
    };
    
    // Return whether a is less than b
    var lt = function( a, b ) {
        return a < b;
    };
    
    // Return whether a is less than or equal to b
    var lte = function( a, b ) {
        return a <= b;
    };
    
    // Return the loose inequality of a and b
    var neq = function ( a, b ) {
        return a != b;
    };
    
    // Return the strict equality of a and b
    var seq = function ( a, b ) {
        return a === b;
    };
    
    // Return the strict inequality of a and b
    var sneq = function ( a, b ) {
        return a !== b;
    };

    // Export the macros
    ko.computedMacros = {
        
        and: getVariadicComparator( and ),
        eq: getVariadicComparator( eq ),
        gt: getVariadicComparator( gt ),
        gte: getVariadicComparator( gte ),
        lt: getVariadicComparator( lt ),
        lte: getVariadicComparator( lte ),
        neq: getVariadicComparator( neq ),
        not: getUnaryEvaluator( not ),
        or: getVariadicComparator( or, true ),
        seq: getVariadicComparator( seq ),
        sneq: getVariadicComparator( sneq ),
        
        // Inject macros into ko.computed
        inject: function () {
            for ( var m in ko.computedMacros )
                if ( ko.computedMacros.hasOwnProperty( m ) && m !== this )
                    ko.computed[ m ] = ko.computedMacros[ m ];
        }
    };

} )( ko );
