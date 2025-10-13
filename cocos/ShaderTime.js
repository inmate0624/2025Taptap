var e = require;
var t = module;
var a = exports;
var o, i = this && this.__extends || (o = function(e, t) {
    return (o = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array &&
    function(e, t) {
        e.__proto__ = t
    } ||
    function(e, t) {
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
    })(e, t)
},
function(e, t) {
    function a() {
        this.constructor = e
    }
    o(e, t),
    e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
}),
n = this && this.__decorate ||
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
});
var r = cc._decorator,
c = r.ccclass,
s = r.property,
d = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t._material = null,
        t._max = 1,
        t._start = 0,
        t
    }
    return i(t, e),
    Object.defineProperty(t.prototype, "max", {
        get: function() {
            return this._max
        },
        set: function(e) {
            this._max = e
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.update = function(e) {
        this._material = this.node.getComponent(cc.Sprite).getMaterial(0),
        this.node.active && this._material && this._setShaderTime(e)
    },
    t.prototype._setShaderTime = function() {
        var e = this._start;
        e > this.max && (e = 0),
        e += .002,
        this._material.setProperty("timeTest", e),
        this._start = e
    },
    n([s], t.prototype, "_max", void 0),
    n([s], t.prototype, "max", null),
    n([c], t)
} (cc.Component);
a.default = d