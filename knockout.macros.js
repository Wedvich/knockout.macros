!function(ko) {
    if (!ko) throw new Error("Knockout.macros requires Knockout");
    var getAccessor = function(obj) {
        return typeof obj === typeof Function ? obj : function() {
            return obj;
        };
    };
    var getVariadicComparator = function(comparator, deferred) {
        return function() {
            var i = 0, accessors = [];
            for (;i < arguments.length; ++i) accessors.push(getAccessor(arguments[i]));
            return !deferred ? ko.computed(function() {
                for (var j = 0; j < accessors.length - 1; ++j) if (!comparator(accessors[j](), accessors[j + 1]())) return false;
                return true;
            }) : ko.computed(function() {
                var result;
                for (var j = 0; j < accessors.length - 1; ++j) result = result || comparator(accessors[j](), accessors[j + 1]());
                return result;
            });
        };
    };
    var getUnaryEvaluator = function(evaluator) {
        return function() {
            var accessor = getAccessor(arguments[0]);
            return ko.computed(function() {
                return evaluator(accessor());
            });
        };
    };
    var and = function(a, b) {
        return a == true && b == true;
    };
    var not = function(a) {
        return !a;
    };
    var or = function(a, b) {
        return a == true || b == true;
    };
    var gt = function(a, b) {
        return a > b;
    };
    var gte = function(a, b) {
        return a >= b;
    };
    var lt = function(a, b) {
        return a < b;
    };
    var lte = function(a, b) {
        return a <= b;
    };
    ko.computedMacros = {
        and: getVariadicComparator(and),
        gt: getVariadicComparator(gt),
        gte: getVariadicComparator(gte),
        lt: getVariadicComparator(lt),
        lte: getVariadicComparator(lte),
        not: getUnaryEvaluator(not),
        or: getVariadicComparator(or, true),
        inject: function() {
            for (var m in ko.computedMacros) if (ko.computedMacros.hasOwnProperty(m) && m !== this) ko.computed[m] = ko.computedMacros[m];
        }
    };
}(ko);