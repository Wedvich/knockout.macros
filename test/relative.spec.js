describe( 'Relative comparators', function () {
    
    var a = ko.observable();
    var b = ko.observable();
    var c = ko.observable();
    
    var computed;
    
    ko.computedMacros.inject();
    
    it( 'Should return true only if a > b > c for greater than', function () {
        
        computed = ko.computed.gt( a, b, c );
        
        a( 1 );
        b( 2 );
        c( 3 );
        expect( computed() ).toBe( false );
        
        a( 5 );
        b( 4 );
        c( 3 );
        expect( computed() ).toBe( true );
        
        a( 4 );
        expect( computed() ).toBe( false );
        
    } );
    
    it( 'Should return true only if a >= b >= c for greater than or equal', function () {
        
        computed = ko.computed.gte( a, b, c );
        
        a( 1 );
        b( 2 );
        c( 3 );
        expect( computed() ).toBe( false );
        
        a( 5 );
        b( 4 );
        c( 3 );
        expect( computed() ).toBe( true );
        
        a( 4 );
        expect( computed() ).toBe( true );
        
        c( 4 );
        expect( computed() ).toBe( true );
        
    } );
    
        it( 'Should return true only if a < b < c for less than', function () {
        
        computed = ko.computed.lt( a, b, c );
        
        a( 1 );
        b( 2 );
        c( 3 );
        expect( computed() ).toBe( true );
        
        a( 5 );
        b( 4 );
        c( 3 );
        expect( computed() ).toBe( false );
        
        c( 4 );
        expect( computed() ).toBe( false );
        
    } );
    
    it( 'Should return true only if a <= b <= c for less than or equal', function () {
        
        computed = ko.computed.lte( a, b, c );
        
        a( 1 );
        b( 2 );
        c( 3 );
        expect( computed() ).toBe( true );
        
        a( 5 );
        b( 4 );
        c( 3 );
        expect( computed() ).toBe( false );
        
        a( 4 );
        expect( computed() ).toBe( false );
        
        c( 4 );
        expect( computed() ).toBe( true );
        
    } );
    
} );
