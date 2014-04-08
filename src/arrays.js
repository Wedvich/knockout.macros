    // Returns whether the array contains any value strictly matching the value argument
    var any = function ( arrayValue, argument ) {
        var i = 0,
            value;
        for ( ; i < arrayValue.length; ++i ) {
            value = arrayValue[ i ];
            if ( value === argument )
                return true;
        }
        return false;
    }; 

    // Returns the sum of numeric elements in the array
    var mean = function ( arrayValue ) {
        var i = 0,
            sum = 0,
            elements = 0,
            value;
        for ( ; i < arrayValue.length; ++i ) {
            value = arrayValue[ i ];
            if ( !isNaN( value ) ) {
                sum += value;
                ++elements;
            }
        }
        return sum / elements;
    };

    // Returns the sum of numeric elements in the array
    var sum = function ( arrayValue ) {
        var i = 0,
            sum = 0,
            value;
        for ( ; i < arrayValue.length; ++i ) {
            value = arrayValue[ i ];
            if ( !isNaN( value ) )
                sum += value;
        }
        return sum;
    };
