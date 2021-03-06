    // Helper function that wraps a plain value in a function to create a uniform accessor
    var getAccessor = function ( obj ) {
        return typeof obj === 'function' ? obj : function () { return obj; };
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
    
    // Helper function that returns a computed observable filter for a single parameter
    var getUnaryFilter = function ( filter ) {
        return function () {
            var accessor = getAccessor( arguments[ 0 ] );
            return ko.computed( function () {
                return filter( accessor() );
            } );
        };
    };

    // Helper function that returns a computed observable filter for two parameters
    var getBinaryFilter = function ( filter ) {
        return function () {
            var accessor1 = getAccessor( arguments[ 0 ] );
            var accessor2 = getAccessor( arguments[ 1 ] );
            return ko.computed( function () {
                return filter( accessor1(), accessor2() );
            } );
        };
    };
