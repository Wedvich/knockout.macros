describe( 'Array functions', function () {
    
    ko.computedMacros.inject();
    
    it( 'Should calculate the sum of numeric elements in an observable array', function () {
        
        var v = ko.observableArray();
        var computed = ko.computed.sum( v );
        
        v( [ 1, 2, 3 ] );
        expect( computed() ).toEqual( 6 );
        
        v.push( 4 );
        expect( computed() ).toEqual( 10 );
        
        v.push( 'not a number' );
        expect( computed() ).toEqual( 10 );
        
    } );
    
    it( 'Should calculate the mean of numeric elements in an observable array', function () {
        
        var v = ko.observableArray();
        var computed = ko.computed.mean( v );
        
        v( [ 1, 2, 3 ] );
        expect( computed() ).toEqual( 2 );
        
        v.push( 4 );
        expect( computed() ).toEqual( 2.5 );
        
        v.push( 'not a number' );
        expect( computed() ).toEqual( 2.5 );
        
        v.push( 5 );
        expect( computed() ).toEqual( 3 );
        
    } );
    
    it( 'Should check if an array contains a predefined value', function () {
        
        var v = ko.observableArray();
        var computed = ko.computed.any( v, 2 );
        
        v( [ 1, '2', 3 ] );
        expect( computed() ).toBe( false );
        
        v.push( 2 );
        expect( computed() ).toBe( true );
        
    } );
    
    it( 'Should check if an array contains an observable value', function () {
        
        var a = ko.observable();
        var v = ko.observableArray();
        var computed = ko.computed.any( v, a );
        
        a( 'cat' );
        v( [ 'fish', 'horse', 'dog' ] );
        expect( computed() ).toBe( false );
        
        v.push( 'cat' );
        expect( computed() ).toBe( true );
        
        a( 'unicorn' );
        expect( computed() ).toBe( false );
        
    } );
    
} );
