!function() {
    if (!ko) throw new Error("Knockout.macros requires Knockout");
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
    ko.computed.and = and;
    var equal = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            return aAccessor() === bAccessor();
        });
    };
    ko.computed.equal = equal;
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
    ko.computed.gt = gt;
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
    ko.computed.gte = gte;
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
    ko.computed.lt = lt;
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
    ko.computed.lte = lte;
    var or = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            return aAccessor() || bAccessor();
        });
    };
    ko.computed.or = or;
}();