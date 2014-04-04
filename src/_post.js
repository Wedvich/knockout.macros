ko.computedMacros = {
    enable: function ( noConflict ) {
        var target = noConflict !== true ? ko.computed : ko.computedMacros;
        var macro;
        for ( var i = 0; i < macros.length; ++i ) {
            macro = macros[ i ];
            target[ macro.name ] = macro.func;
        }
    }
};

}( ko );
