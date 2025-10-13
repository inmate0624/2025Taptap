var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
});
var o = function() {
    function e() {}
    return e.get = function() {
        return this._instance || (this._instance = new this),
        this._instance
    },
    e.prototype.timer = function() {
        return new Promise(function(e, t) {
            e(t)
        })
    },
    e
} ();
a.default = o