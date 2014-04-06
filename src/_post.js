ko.computedMacros = {
    enable: function ( noConflict ) {
        var target = noConflict !== true ? ko.computed : ko.computedMacros;
        var macro;
        for ( var m in macros ) {
            if ( macros.hasOwnProperty( m ) )
                target[ m ] = macros[ m ];
        }
    }
};

}( ko );
