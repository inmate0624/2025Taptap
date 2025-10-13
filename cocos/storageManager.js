var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
});
var o = function() {
    function e() {
        this.ls = cc.sys.localStorage
    }
    return e.init = function() {
        this.ins = new e
    },
    e.prototype.storageData = function(e, t) {
        this.ls.setItem(e, t)
    },
    e.prototype.getData = function(e) {
        return this.ls.getItem(e)
    },
    e.prototype.removeData = function(e) {
        this.ls.removeItem(e)
    },
    e.ins = null,
    e
} ();
a.default = o