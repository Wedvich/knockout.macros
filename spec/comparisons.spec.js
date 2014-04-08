describe( 'Relative comparisons (gt, gte, lt, lte)', function () {
    
    ko.computedMacros.inject();
    
    it( 'Should correctly validate a > b > c', function () {
        
        var a = ko.observable();
        var b = ko.observable();
        var c = ko.observable();
        var computed = ko.computed.gt( a, b, c );
        
        a( 3 );
        b( 2 );
        c( 1 );
        expect( computed() ).toBe( true );
        
        c( 2 );
        expect( computed() ).toBe( false );
        
        a( 4 );
        b( 3 );
        expect( computed() ).toBe( true );
        
    } );
    
    it( 'Should correctly validate a >= b >= c', function () {
        
        var a = ko.observable();
        var b = ko.observable();
        var c = ko.observable();
        var computed = ko.computed.gte( a, b, c );
        
        a( 3 );
        b( 2 );
        c( 1 );
        expect( computed() ).toBe( true );
        
        c( 2 );
        expect( computed() ).toBe( true );
        
        a( 2 );
        expect( computed() ).toBe( true );
        
    } );
    
    it( 'Should correctly validate a < b < c', function () {
        
        var a = ko.observable();
        var b = ko.observable();
        var c = ko.observable();
        var computed = ko.computed.lt( a, b, c );
        
        a( 1 );
        b( 2 );
        c( 3 );
        expect( computed() ).toBe( true );
        
        c( 2 );
        expect( computed() ).toBe( false );
        
        a( 0 );
        b( 1 );
        expect( computed() ).toBe( true );
        
    } );
    
    it( 'Should correctly validate a <= b <= c', function () {
        
        var a = ko.observable();
        var b = ko.observable();
        var c = ko.observable();
        var computed = ko.computed.lte( a, b, c );
        
        a( 1 );
        b( 2 );
        c( 3 );
        expect( computed() ).toBe( true );
        
        c( 2 );
        expect( computed() ).toBe( true );
        
        a( 2 );
        expect( computed() ).toBe( true );
        
    } );

} );
