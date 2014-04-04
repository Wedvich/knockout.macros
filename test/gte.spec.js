describe( 'Greater than or equal', function () {
    
    var observable1 = ko.observable();
    var observable2 = ko.observable();
    
    var computed;
    
    it( 'Should return false if comparing different types', function () {
        computed = ko.computed.gte( observable1, observable2 );
        observable1( 25 );
        observable2( '1' );
        expect( computed() ).toEqual( false );
        observable2( 1 );
        expect( computed() ).toEqual( true );
    } );
    
    it( 'Should return true if left >= right', function () {
        computed = ko.computed.gte( observable1, 42 );
        observable1( 41 );
        expect( computed() ).toEqual( false );
        observable1( 42 );
        expect( computed() ).toEqual( true );
        observable1( 9001 );
        expect( computed() ).toEqual( true );
        
        computed = ko.computed.gte( observable1, observable2 );
        observable1( 'a' );
        observable2( 'b' );
        expect( computed() ).toEqual( false );
        observable1( 'c' );
        expect( computed() ).toEqual( true );
    } );
    
} );
