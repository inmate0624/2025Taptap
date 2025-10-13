var e = require;
var t = module;
var a = exports;
var o = this && this.__decorate ||
function(e, t, a, o) {
    var i, n = arguments.length,
    r = n < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, a) : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, a, o);
    else for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (r = (n < 3 ? i(r) : n > 3 ? i(t, a, r) : i(t, a)) || r);
    return n > 3 && r && Object.defineProperty(t, a, r),
    r
};
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a._EventTargetMager = void 0;
var i = cc._decorator,
n = i.ccclass,
r = (i.property,
function() {
    function e() {}
    return Object.defineProperty(e, "Instace", {
        get: function() {
            return this._instace || (this._instace = new cc.EventTarget),
            this._instace
        },
        enumerable: !1,
        configurable: !0
    }),
    o([n], e)
} ());
a._EventTargetMager = r.Instace