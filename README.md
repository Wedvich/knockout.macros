knockout.macros
===
This plugin adds a bunch of macros for shorthand creation of Knockout computed observables.

Usage
---

The macros can be injected directly into the `ko.computed` object by calling `ko.computedMacros.inject()`. Otherwise, they'll be accessible through the `ko.computedMacros` object.

Here's an example of creating a logical **and** computed, which is true when all of its inputs evaluate to true:

    var Model = function () {
        this.a = ko.observable( false );
        this.b = ko.observable( true );
        this.c = ko.observable( false );
        
        this.everythingIsTrue = ko.computed( function () {
            return this.a() && this.b() && this.c();
        }.bind( this ) );
    };
  
And here's a shorthand way with **knockout.macros**:

    var Model = function () {
        this.a = ko.observable( false );
        this.b = ko.observable( true );
        this.c = ko.observable( false );
        
        this.everythingIsTrue = ko.computed.and( this.a, this.b, this.c );
    };
    
Value macros
---
All values passed as parameters can be either Knockout observables or plain functions/values.

Evaluates in pairs from left to right for variadic comparators.

---

**and** `ko.computed.and( value1, value2[, valueN...] )`

Performs a logical *and* between two or more values, using the truthiness of each value.

---

**eq** `ko.computed.eq( value1, value2[, valueN...] )` 

Tests two or more values for loose equality.

---

**gt** `ko.computed.gt( value1, value2[, valueN...] )`

Checks if the left value is greater than the right value for two or more values.

---

**gte** `ko.computed.gte( value1, value2[, valueN...] )`

Checks if the left value is greater than or equal to the right value for two or more values.

---

**lt** `ko.computed.lt( value1, value2[, valueN...] )`

Checks if the left value is less than the right value for two or more values.

---

**lte** `ko.computed.lte( value1, value2[, valueN...] )`

Checks if the left value is less than or equal to the right value for two or more values.

---

**neq** `ko.computed.neq( value1, value2[, valueN...] )` 

Tests two or more values for loose inequality.

---

**not** `ko.computed.not( value )` 

Returns the inverse boolean value of the truthiness of the passed value.

---

**or** `ko.computed.or( value1, value2[, valueN...] )` 

Performs a logical *or* between two or more values, using the truthiness of each value.

---

**seq** `ko.computed.seq( value1, value2[, valueN...] )` 

Tests two or more values for strict equality.

---

**sneq** `ko.computed.sneq( value1, value2[, valueN...] )` 

Tests two or more values for strict inequality.

Array macros
---
The `arrayValue` parameter can be either a Knockout observable array or a plain array.

Any additional values passed as parameters can be either Knockout observables or plain functions/values.

---

**any** `ko.computed.any( arrayValue, matchValue )`

Returns true if the array contains any element that strictly matches `matchValue`.

---

**mean** `ko.computed.mean( arrayValue )`

Calculates the average mean of all numeric elements of the array. Ignores elements for which `isNaN` is true.

---

**none** `ko.computed.none( arrayValue, matchValue )`

Returns true if the array does not contain any element that strictly matches `matchValue`.

---

**sum** `ko.computed.sum( arrayValue )`

Calculates the sum of all numeric elements of the array. Ignores elements for which `isNaN` is true.

Support
---
Tested with Knockout 3.2 beta, 3.1, 3.0 and 2.3.

License
---
MIT ([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))
