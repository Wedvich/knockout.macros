var getAccessor = function ( obj ) {
    return ko.isObservable( obj ) ? obj : function () { return obj; };
};
