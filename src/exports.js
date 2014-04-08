    // Export the macros
    ko.computedMacros = {
        
        and: getVariadicComparator( and ),
        eq: getVariadicComparator( eq ),
        gt: getVariadicComparator( gt ),
        gte: getVariadicComparator( gte ),
        lt: getVariadicComparator( lt ),
        lte: getVariadicComparator( lte ),
        neq: getVariadicComparator( neq ),
        not: getUnaryFilter( not ),
        or: getVariadicComparator( or, true ),
        seq: getVariadicComparator( seq ),
        sneq: getVariadicComparator( sneq ),
        
        any: getBinaryFilter( any ),
        mean: getUnaryFilter( mean ),
        none: getBinaryFilter( none ),
        sum: getUnaryFilter( sum ),
        
        // Inject macros into ko.computed
        inject: function () {
            for ( var m in ko.computedMacros )
                if ( ko.computedMacros.hasOwnProperty( m ) && m !== this )
                    ko.computed[ m ] = ko.computedMacros[ m ];
        }
    };
