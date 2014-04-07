describe( 'Logical NOT', function () {
    
    var booleanObservable = ko.observable();
    
    var computed;
    
    ko.computedMacros.inject();
    
    it( 'Should return the inverse boolean value', function () {
        computed = ko.computed.not( booleanObservable );
        booleanObservable( false );
        expect( computed() ).toEqual( true );
        booleanObservable( true );
        expect( computed() ).toEqual( false );
    } );
    
} );
