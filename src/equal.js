var equal = function ( a, b ) {
    
    var aAccessor = getAccessor( a );
    var bAccessor = getAccessor( b );
    
    return new ko.computed( function () {
        return aAccessor() === bAccessor();
    } );
};

macros.push( { name: 'equal', func: equal } );
