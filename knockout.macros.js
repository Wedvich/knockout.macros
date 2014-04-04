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
    var or = function(a, b) {
        var aAccessor = getAccessor(a);
        var bAccessor = getAccessor(b);
        return new ko.computed(function() {
            return aAccessor() || bAccessor();
        });
    };
    ko.computed.or = or;
}();