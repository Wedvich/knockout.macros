Macros for Knockout computed observables
========================================
***beta version***

This plugin adds a bunch of macros for shorthand creation of common Knockout computed observables, inspired by the ones found in Ember.

Usage
-------------

The macros can be injected directly into the `ko.computed` object by calling `ko.computedMacros.inject()`. Otherwise, they'll be accessible through the `ko.computedMacros` object.

Here's an example of creating a logical **and** computed, which is true when both of its inputs evaluate to true:

    var Model = function () {
        this.a = ko.observable( false );
        this.b = ko.observable( true );
        
        this.bothAreTrue = ko.computed( function () {
            return this.a() && this.b();
        }.bind( this ) );
    };
  
And here's a shorthand way with **knockout.macros**:

    var Model = function () {
        this.a = ko.observable( false );
        this.b = ko.observable( true );
        
        this.bothAreTrue = ko.computed.and( this.a, this.b );
    };
    
Macro reference
---------------
**and** `ko.computed.and( a, b )`

Returns the result of a logical **and** between `a` and `b`. Both arguments can be either observables, functions or plain values, and can be of different types. Checks if the values are truthy/falsy, not strict boolean true/false.

---

**equal** `ko.computed.equal( a, b )`

Returns whether `a` and `b` are equal. Both arguments can be either observables, functions or plain values. Checks for strict equality (`===`).

---

**gt** `ko.computed.gt( a, b )`

Returns whether `a` is greater than `b`. Both arguments can be either observables, functions or plain values. Always returns `false` if the value types differ.

---

**gte** `ko.computed.gte( a, b )`

Returns whether `a` is greater than or equal to `b`. Both arguments can be either observables, functions or plain values. Always returns `false` if the value types differ.

---

**lt** `ko.computed.lt( a, b )`

Returns whether `a` is less than `b`. Both arguments can be either observables, functions or plain values. Always returns `false` if the value types differ.

---

**lte** `ko.computed.lte( a, b )`

Returns whether `a` is less than or equal to `b`. Both arguments can be either observables, functions or plain values. Always returns `false` if the value types differ.

---

**not** `ko.computed.not( a )`

Returns the result of a logical **not** on `a`. The argument can be either an observable, a function or a plain value. Checks if the value is truthy/falsy, not strict boolean true/false.

---

**or** `ko.computed.or( a, b )`

Returns the result of a logical **or** between `a` and `b`. Both arguments can be either observables, functions or plain values, and can be of different types. Checks if the values are truthy/falsy, not strict boolean true/false.

Supported Knockout versions
---------------------------
It's still in development, and has only been tested with Knockout 3.1 so far.

License
-------
MIT ([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))
