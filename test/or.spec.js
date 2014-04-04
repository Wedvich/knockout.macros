describe( 'Logical OR', function () {
    
    var booleanObservable1 = ko.observable();
    var booleanObservable2 = ko.observable();
    
    var computed;
    
    beforeEach( function () {
        booleanObservable1( false );
        booleanObservable2( false );
    } );
    
    it( 'Should return true unless both supplied observables are falsy', function () {
        computed = ko.computed.or( booleanObservable1, booleanObservable2 );
        expect( computed() ).toEqual( false );
        booleanObservable1( true );
        expect( computed() ).toEqual( true );
        booleanObservable2( true );
        expect( computed() ).toEqual( true );
        booleanObservable1( false );
        expect( computed() ).toEqual( true );
        booleanObservable2( false );
        expect( computed() ).toEqual( false );
    } );
    
    it( 'Should return true unless both supplied arguments are falsy', function () {
        computed = ko.computed.or( booleanObservable1, false );
        expect( computed() ).toEqual( false );
        booleanObservable1( true );
        expect( computed() ).toEqual( true );
        booleanObservable1( false );
        expect( computed() ).toEqual( false );
    } );
    
} );
