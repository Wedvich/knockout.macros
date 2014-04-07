// Perform a logical NOT for value
ko.computedMacros.not = function ( value ) {
    
    var valueAccessor = getAccessor( value );
    
    return new ko.computed( function () {
        return !valueAccessor();
    } );
};
