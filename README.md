Macros for Knockout computed observables
========================================

This plugin adds a bunch of macros for shorthand creation of common Knockout computed observables, inspired by the ones found in Ember.

[Grunt](http://gruntjs.com) is being used as the build tool, and tests are done with [Jasmine](http://jasmine.github.io).

Example usage
-------------

Here's a plain way of creating a logical *and* computed, which is true when both of its inputs also evaluate to true:

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
- `ko.computed.and( a, b )` -- logical **and** between `a` and `b`
- `ko.computed.or( a, b )` -- logical **or** between `a` and `b`

Supported Knockout versions
---------------------------
It has only been tested with 3.1 so far, but there's nothing fancy so it should work with 3.0 and 2.3 as well.

License
-------
MIT ([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))
