// Perform a logical AND between a and b
ko.computedMacros.and = function ( a, b ) {
    
    var aAccessor = getAccessor( a );
    var bAccessor = getAccessor( b );
    
    return new ko.computed( function () {
        return aAccessor() && bAccessor();
    } );
};
