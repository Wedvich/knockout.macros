knockout.macros
===
Plugin with macros for shorthand creation of Knockout computed observables
---

This plugin adds a bunch of macros for shorthand creation of common Knockout computed observables.

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
    
Macro reference
---
All values passed as parameters can be either Knockout observables or plain functions/values.

Evaluates in pairs from left to right for variadic comparators.

---

**and** `ko.computed.and( value1, value2[, valueN...] )`

Performs a logical *and* between two or more values, using the truthiness of each value.

---

**eq** `ko.computed.eq( value1, value2[, valueN...] )` 

Tests two or more values for loose equality using `==`.

---

**gt** `ko.computed.gt( value1, value2[, valueN...] )`

Checks if the left value is greater than the right value for two or more values.

---

**gte** `ko.computed.gte( value1, value2[, valueN...] )`

Checks if the left value is greater than or equal the right value for two or more values.

---

**lt** `ko.computed.lt( value1, value2[, valueN...] )`

Checks if the left value is less than the right value for two or more values.

---

**lte** `ko.computed.lte( value1, value2[, valueN...] )`

Checks if the left value is less than or equal the right value for two or more values.

---

**neq** `ko.computed.neq( value1, value2[, valueN...] )` 

Tests two or more values for loose inequality using `!=`.

---

**not** `ko.computed.not( value )` 

Returns the inverse boolean value of the truthiness of the passed value.

---

**or** `ko.computed.or( value1, value2[, valueN...] )` 

Performs a logical *or* between two or more values, using the truthiness of each value.

---

**seq** `ko.computed.seq( value1, value2[, valueN...] )` 

Tests two or more values for strict equality using `===`.

---

**sneq** `ko.computed.sneq( value1, value2[, valueN...] )` 

Tests two or more values for strict inequality using `!==`.

Supported Knockout versions
---
It's still in early development, and has only been tested with Knockout 3.1 so far.

License
---
MIT ([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))
