describe( 'Equality (eq, neq, seq, sneq)', function () {
    
    ko.computedMacros.inject();
    
    it( 'Should coerce values when testing for loose equality', function () {
        
        var a = ko.observable();
        var b = ko.observable();
        var eq = ko.computed.eq( a, b );
        var neq = ko.computed.neq( a, b );
        
        a( '' );
        b( '0' );
        expect( eq() ).toBe( false );
        expect( neq() ).toEqual( !eq() );
        
        a( 0 );
        b( '' );
        expect( eq() ).toBe( true );
        expect( neq() ).toEqual( !eq() );
        
        a( 0 );
        b( '0' );
        expect( eq() ).toBe( true );
        expect( neq() ).toEqual( !eq() );
        
        a( false );
        b( 'false' );
        expect( eq() ).toBe( false );
        expect( neq() ).toEqual( !eq() );
        
        a( false );
        b( '0' );
        expect( eq() ).toBe( true );
        expect( neq() ).toEqual( !eq() );
        
        a( false );
        b( undefined );
        expect( eq() ).toBe( false );
        expect( neq() ).toEqual( !eq() );
        
        a( false );
        b( null );
        expect( eq() ).toBe( false );
        expect( neq() ).toEqual( !eq() );
        
        a( null );
        b( undefined );
        expect( eq() ).toBe( true );
        expect( neq() ).toEqual( !eq() );
        
        a( ' \t\r\n' );
        b( 0 );
        expect( eq() ).toBe( true );
        expect( neq() ).toEqual( !eq() );
        
    } );
    
    it( 'Should not coerce values when testing for strict equality', function () {
        
        var a = ko.observable();
        var b = ko.observable();
        var seq = ko.computed.seq( a, b );
        var sneq = ko.computed.sneq( a, b );
        
        a( '' );
        b( '0' );
        expect( seq() ).toBe( false );
        expect( sneq() ).toEqual( !seq() );
        
        a( 0 );
        b( '' );
        expect( seq() ).toBe( false );
        expect( sneq() ).toEqual( !seq() );
        
        a( 0 );
        b( '0' );
        expect( seq() ).toBe( false );
        expect( sneq() ).toEqual( !seq() );
        
        a( false );
        b( 'false' );
        expect( seq() ).toBe( false );
        expect( sneq() ).toEqual( !seq() );
        
        a( false );
        b( '0' );
        expect( seq() ).toBe( false );
        expect( sneq() ).toEqual( !seq() );
        
        a( false );
        b( undefined );
        expect( seq() ).toBe( false );
        expect( sneq() ).toEqual( !seq() );
        
        a( false );
        b( null );
        expect( seq() ).toBe( false );
        expect( sneq() ).toEqual( !seq() );
        
        a( null );
        b( undefined );
        expect( seq() ).toBe( false );
        expect( sneq() ).toEqual( !seq() );
        
        a( ' \t\r\n' );
        b( 0 );
        expect( seq() ).toBe( false );
        expect( sneq() ).toEqual( !seq() );
        
    } );
    
} );
