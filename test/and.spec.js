describe( 'Logical AND', function () {
    
    var booleanObservable1 = ko.observable();
    var booleanObservable2 = ko.observable();
    
    var computed;
    
    beforeEach( function () {
        booleanObservable1( false );
        booleanObservable2( false );
    } );
    
    it( 'Should return false unless both supplied observables are truthy', function () {
        computed = ko.computed.and( booleanObservable1, booleanObservable2 );
        expect( computed() ).toEqual( false );
        booleanObservable1( true );
        expect( computed() ).toEqual( false );
        booleanObservable2( true );
        expect( computed() ).toEqual( true );
        booleanObservable1( false );
        expect( computed() ).toEqual( false );
    } );
    
    it( 'Should return false unless both supplied arguments are truthy', function () {
        computed = ko.computed.and( booleanObservable1, true );
        expect( computed() ).toEqual( false );
        booleanObservable1( true );
        expect( computed() ).toEqual( true );
        booleanObservable1( false );
        expect( computed() ).toEqual( false );
    } );
    
} );
