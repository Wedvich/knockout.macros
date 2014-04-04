!function(ko) {
    if (!ko) throw new Error("Knockout.macros requires Knockout");
    var macros = [];
    var getAccessor = function(obj) {
        return ko.isObservable(obj) ? obj : function() {
            return obj;
        };
    };
    var and = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            return aAccessor() && bAccessor();
        });
    };
    macros.push({
        name: "and",
        func: and
    });
    var equal = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            return aAccessor() === bAccessor();
        });
    };
    macros.push({
        name: "equal",
        func: equal
    });
    var gt = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            var a = aAccessor();
            var b = bAccessor();
            if (typeof a !== typeof b) return false;
            return a > b;
        });
    };
    macros.push({
        name: "gt",
        func: gt
    });
    var gte = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            var a = aAccessor();
            var b = bAccessor();
            if (typeof a !== typeof b) return false;
            return a >= b;
        });
    };
    macros.push({
        name: "gte",
        func: gte
    });
    var lt = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            var a = aAccessor();
            var b = bAccessor();
            if (typeof a !== typeof b) return false;
            return a < b;
        });
    };
    macros.push({
        name: "lt",
        func: lt
    });
    var lte = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            var a = aAccessor();
            var b = bAccessor();
            if (typeof a !== typeof b) return false;
            return a <= b;
        });
    };
    macros.push({
        name: "lte",
        func: lte
    });
    var or = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            return aAccessor() || bAccessor();
        });
    };
    macros.push({
        name: "or",
        func: or
    });
    ko.computedMacros = {
        enable: function(noConflict) {
            var target = noConflict !== true ? ko.computed : ko.computedMacros;
            var macro;
            for (var i = 0; i < macros.length; ++i) {
                macro = macros[i];
                target[macro.name] = macro.func;
            }
        }
    };
}(ko);