// Check if a is greater than b
macros.gt = function ( a, b ) {
    
    var aAccessor = getAccessor( a );
    var bAccessor = getAccessor( b );
    
    return new ko.computed( function () {
        var a = aAccessor();
        var b = bAccessor();
        
        if ( typeof a !== typeof b )
            return false;
        
        return a > b;
    } );
};
