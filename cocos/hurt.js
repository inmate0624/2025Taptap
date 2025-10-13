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
var r = e("winRootNode"),
c = e("poolNodeMager"),
s = cc._decorator,
d = s.ccclass,
l = s.property,
u = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.num = null,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function(e) {
        var t = this;
        this.node.active = !0,
        this.node.x = 0,
        this.node.y = 60;
        var a = "miss",
        o = cc.color(255, 255, 255);
        e.hurt > 0 && (o = cc.color(255, 0, 0), a = "-" + e.hurt),
        e.str && (a = a),
        this.num.node.color = o,
        this.num.string = a,
        cc.tween(this.node).by(1, {
            y: 50
        },
        {
            easing: "expoOut"
        }).call(function() {
            t.onClose(1)
        }).start()
    },
    t.prototype.onClose = function() {
        this.unscheduleAllCallbacks(),
        c._poolNodeMager.putPoolNode(this.node.name, this.node)
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onLoad = function() {},
    n([l(cc.Label)], t.prototype, "num", void 0),
    n([d], t)
} (r.default);
a.default = u