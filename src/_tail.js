ko.computedMacros = {
    
    // Export macros
    and: getVariadicComparator( and ),
    gt: getVariadicComparator( gt ),
    gte: getVariadicComparator( gte ),
    lt: getVariadicComparator( lt ),
    lte: getVariadicComparator( lte ),
    not: getUnaryEvaluator( not ),
    or: getVariadicComparator( or, true ),
    
    // Inject macros into ko.computed
    inject: function () {
        for ( var m in ko.computedMacros )
            if ( ko.computedMacros.hasOwnProperty( m ) && m !== this )
                ko.computed[ m ] = ko.computedMacros[ m ];
    }
};

}( ko );
