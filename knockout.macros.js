!function(ko) {
    if (!ko) throw new Error("Knockout.macros requires Knockout");
    ko.computedMacros = {};
    var getAccessor = function(obj) {
        return ko.isObservable(obj) ? obj : function() {
            return obj;
        };
    };
    ko.computedMacros.and = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            return aAccessor() && bAccessor();
        });
    };
    ko.computedMacros.equal = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            return aAccessor() === bAccessor();
        });
    };
    ko.computedMacros.gt = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            var a = aAccessor();
            var b = bAccessor();
            if (typeof a !== typeof b) return false;
            return a > b;
        });
    };
    ko.computedMacros.gte = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            var a = aAccessor();
            var b = bAccessor();
            if (typeof a !== typeof b) return false;
            return a >= b;
        });
    };
    ko.computedMacros.lt = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            var a = aAccessor();
            var b = bAccessor();
            if (typeof a !== typeof b) return false;
            return a < b;
        });
    };
    ko.computedMacros.lte = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            var a = aAccessor();
            var b = bAccessor();
            if (typeof a !== typeof b) return false;
            return a <= b;
        });
    };
    ko.computedMacros.not = function(value) {
        var valueAccessor = getAccessor(value);
        return new ko.computed(function() {
            return !valueAccessor();
        });
    };
    ko.computedMacros.or = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            return aAccessor() || bAccessor();
        });
    };
    ko.computedMacros.inject = function() {
        for (var m in ko.computedMacros) {
            if (ko.computedMacros.hasOwnProperty(m) && m !== this) ko.computed[m] = ko.computedMacros[m];
        }
    };
}(ko);