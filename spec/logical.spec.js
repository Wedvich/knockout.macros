describe( 'Logical operations (and, not, or)', function () {
    
    ko.computedMacros.inject();
    
    it( 'Should correctly validate a && b && c', function () {
        
        var a = ko.observable();
        var b = ko.observable();
        var c = ko.observable();
        var computed = ko.computed.and( a, b, c );   
        
        a( true );
        b( 'non-empty string' );
        c( 1 );
        expect( computed() ).toBe( true );
        
        c( 0 );
        expect( computed() ).toBe( false );
        
    } );
    
    it( 'Should correctly validate a || b || c', function () {
        
        var a = ko.observable();
        var b = ko.observable();
        var c = ko.observable();
        var computed = ko.computed.or( a, b, c );   
        
        a( true );
        b( 'non-empty string' );
        c( 1 );
        expect( computed() ).toBe( true );
        
        c( 0 );
        expect( computed() ).toBe( true );
        
        b( '' );
        expect( computed() ).toBe( true );
        
        a( false );
        expect( computed() ).toBe( false );
        
    } );
    
    it( 'Should return true from not(a) for all falsy values of a', function () {
        
        var a = ko.observable();
        var computed = ko.computed.not( a );
        
        a( false );
        expect( computed() ).toBe( true );
        
        a( 0 );
        expect( computed() ).toBe( true );
        
        a( '' );
        expect( computed() ).toBe( true );
        
        a( null );
        expect( computed() ).toBe( true );
        
        a( undefined );
        expect( computed() ).toBe( true );
        
        a( NaN );
        expect( computed() ).toBe( true );
        
    } );
    
    it( 'Should return false from not(a) if a is truthy', function () {
        
        var a = ko.observable();
        var computed = ko.computed.not( a );
        
        a( {} );
        expect( computed() ).toBe( false );
        
        a( [] );
        expect( computed() ).toBe( false );
        
        a( 1 );
        expect( computed() ).toBe( false );
        
        a( 'non-empty string' );
        expect( computed() ).toBe( false );
        
        a( function () {} );
        expect( computed() ).toBe( false );
        
    } );
    
} );
