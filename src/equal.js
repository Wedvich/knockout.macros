// Check if a and b are equal (===)
ko.computedMacros.equal = function ( a, b ) {
    
    var aAccessor = getAccessor( a );
    var bAccessor = getAccessor( b );
    
    return new ko.computed( function () {
        return aAccessor() === bAccessor();
    } );
};
