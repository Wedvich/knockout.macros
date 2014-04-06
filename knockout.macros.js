!function(ko) {
    if (!ko) throw new Error("Knockout.macros requires Knockout");
    var macros = {};
    var getAccessor = function(obj) {
        return ko.isObservable(obj) ? obj : function() {
            return obj;
        };
    };
    macros.and = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            return aAccessor() && bAccessor();
        });
    };
    macros.equal = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            return aAccessor() === bAccessor();
        });
    };
    macros.gt = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            var a = aAccessor();
            var b = bAccessor();
            if (typeof a !== typeof b) return false;
            return a > b;
        });
    };
    macros.gte = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            var a = aAccessor();
            var b = bAccessor();
            if (typeof a !== typeof b) return false;
            return a >= b;
        });
    };
    macros.lt = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            var a = aAccessor();
            var b = bAccessor();
            if (typeof a !== typeof b) return false;
            return a < b;
        });
    };
    macros.lte = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            var a = aAccessor();
            var b = bAccessor();
            if (typeof a !== typeof b) return false;
            return a <= b;
        });
    };
    macros.or = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            return aAccessor() || bAccessor();
        });
    };
    ko.computedMacros = {
        enable: function(noConflict) {
            var target = noConflict !== true ? ko.computed : ko.computedMacros;
            var macro;
            for (var m in macros) {
                if (macros.hasOwnProperty(m)) target[m] = macros[m];
            }
        }
    };
}(ko);