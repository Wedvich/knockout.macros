describe( 'Equality', function () {
    
    var observable1 = ko.observable();
    var observable2 = ko.observable();
    
    var computed;
    
    ko.computedMacros.enable();
    
    it( 'Should return false when comparing different values', function () {
        computed = ko.computed.equal( observable1, observable2 );
        observable1( 'fish' );
        observable2( 'cat' );
        expect( computed() ).toEqual( false );
        observable2( 'fish' );
        expect( computed() ).toEqual( true );
        
        observable1( 0 );
        observable2( 42 );
        expect( computed() ).toEqual( false );
        observable1( 42 );
        expect( computed() ).toEqual( true );
    } );
    
    it( 'Should return false when comparing objects of different types', function () {
        computed = ko.computed.equal( observable1, 25 );
        observable1( '25' );
        expect( computed() ).toEqual( false );
        observable1( 25 );
        expect( computed() ).toEqual( true );
    } );
    
} );
