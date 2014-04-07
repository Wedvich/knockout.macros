describe( 'Logical comparators', function () {
    
    var a = ko.observable();
    var b = ko.observable();
    var c = ko.observable();
    
    var computed;
    
    ko.computedMacros.inject();
    
    it( 'Should return true only if a && b && c for and', function () {
        
        computed = ko.computed.and( a, b, c );
        
        a( true );
        b( 'true' );
        c( 0 );
        expect( computed() ).toBe( false );
        
        b( true );
        expect( computed() ).toBe( false );
        
        c( true );
        expect( computed() ).toBe( true );
        
    } );
    
    it( 'Should return the inverse boolean of the truthiness/falsiness of a', function () {
        
        computed = ko.computed.not( a );
        
        a( false );
        expect( computed() ).toBe( true );
        
        a( 0 );
        expect( computed() ).toBe( true );
        
        a( 1 );
        expect( computed() ).toBe( false );
        
    } );
    
    it( 'Should return true if a || b || c for or', function () {
        
        computed = ko.computed.or( a, b, c );
        
        a( true );
        b( 'true' );
        c( 0 );
        expect( computed() ).toBe( true );
        
        a( false );
        expect( computed() ).toBe( false );
        
        b( null );
        expect( computed() ).toBe( false );
        
    } );
    
} );
         