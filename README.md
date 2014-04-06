Macros for Knockout computed observables
========================================
***beta version***

This plugin adds a bunch of macros for shorthand creation of common Knockout computed observables, inspired by the ones found in Ember.

[Grunt](http://gruntjs.com) is used as the build tool, and tests are done with [Jasmine](http://jasmine.github.io).

Example usage
-------------

The macros can be enabled by calling `ko.computedMacros.enable()`, after which they can be accessed directly through the `ko.computed` object. To avoid conflicts you can also pass `true` as an argument to the `ko.computedMacros.enable()` function. The macros will then be accessible through the `ko.computedMacros` object instead, leaving `ko.computed` untouched.

Here's a plain way of creating a logical **and** computed, which is true when both of its inputs evaluate to true:

    var Model = function () {
        this.boolA = ko.observable( false );
        this.boolB = ko.observable( true );
        
        this.bothBoolsAreTrue = ko.computed( function () {
            return this.boolA() && this.boolB();
        }.bind( this ) );
    };
  
And here's a shorthand way with **knockout.macros**:

    var Model = function () {
        this.boolA = ko.observable( false );
        this.boolB = ko.observable( true );
        
        this.bothBoolsAreTrue = ko.computed.and( this.boolA, this.boolB );
    };
    
Supported macros
----------------
Both `a` and `b` can be either a Knockout observable or a value/function that returns a value.

- `ko.computed.and( a, b )` -- returns the result of a logical **and** between `a` and `b`.
- `ko.computed.equal( a, b )` -- returns whether `a` and `b` are equal (`===`).
- `ko.computed.gt( a, b )` -- returns whether `a` is greater than `b`. Will return `false` if the types differ.
- `ko.computed.gte( a, b )` -- returns whether `a` is greater than or equal to `b`. Will return `false` if the types differ.
- `ko.computed.lt( a, b )` -- returns whether `a` is less than `b`. Will return `false` if the types differ.
- `ko.computed.lte( a, b )` -- returns whether `a` is less than or equal to `b`. Will return `false` if the types differ.
- `ko.computed.or( a, b )` -- returns the result of a logical **or** between `a` and `b`.

Supported Knockout versions
---------------------------
It has only been tested with 3.1 so far, but there's nothing fancy so it should work with 3.0 and 2.3 as well.

License
-------
MIT ([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))
