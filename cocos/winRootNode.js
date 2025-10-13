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
});
Object.defineProperty(a, "__esModule", {
    value: !0
});
var n = e("KEY"),
r = e("audioMager"),
c = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.clickTimer = !1,
        t.isRunningAction = !1,
        t
    }
    return i(t, e),
    t.prototype.disableClick = function() {
        var e = this;
        r._audioMager.playAudioEff(n.KEY.audioName.btn),
        this.isRunningAction = !0,
        setTimeout(function() {
            e.isRunningAction = !1
        },
        500)
    },
    t.prototype.btnClickFun = function(e, t) {
        var a = this;
        this.isRunningAction || this.clickTimer || (this.clickTimer = !0, setTimeout(function() {
            a.clickTimer = !1
        },
        200), this[t](e))
    },
    t
} (e("baseNodeAction").default);
a.default = c