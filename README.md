Macros for Knockout computed observables
========================================
***beta version***

This plugin adds a bunch of macros for shorthand creation of common Knockout computed observables.

Usage
-------------

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
---------------
All values passed as parameters can be either Knockout observables or plain functions/values.

Evaluates in pairs from left to right for variadic comparators.

---

**and** `ko.computed.and( value1, value2[, valueN...] )`

Performs a logical *and* between 2 or more values, using the truthiness of each value.

---

**gt** `ko.computed.gt( value1, value2[, valueN...] )`

Checks if the left value is greater than the right value for 2 or more values.

---

**gte** `ko.computed.gte( value1, value2[, valueN...] )`

Checks if the left value is greater than or equal the right value for 2 or more values.

---

**lt** `ko.computed.lt( value1, value2[, valueN...] )`

Checks if the left value is less than the right value for 2 or more values.

---

**lte** `ko.computed.lte( value1, value2[, valueN...] )`

Checks if the left value is less than or equal the right value for 2 or more values.

---

**not** `ko.computed.not( value )` 

Returns the inverse boolean value of the truthiness of the passed value.

---

**or** `ko.computed.or( value1, value2[, valueN...] )` 

Performs a logical *or* between 2 or more values, using the truthiness of each value.

Supported Knockout versions
---------------------------
It's still in development, and has only been tested with Knockout 3.1 so far.

License
-------
MIT ([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))
