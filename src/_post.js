ko.computedMacros.inject = function () {
    for ( var m in ko.computedMacros ) {
        if ( ko.computedMacros.hasOwnProperty( m ) && m !== this )
            ko.computed[ m ] = ko.computedMacros[ m ];
    }
};

}( ko );
