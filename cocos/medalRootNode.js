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
var r = e("poolNodeMager"),
c = e("EventTargetMager"),
s = e("KEY"),
d = cc._decorator,
l = d.ccclass,
u = (d.property,
function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }
    return i(t, e),
    t.prototype.onLoad = function() {
        var e = this;
        this.node.zIndex = 9,
        c._EventTargetMager.on("updateMedalCount",
        function(t, a, o) {
            e.startAction(t, a, o)
        },
        this)
    },
    t.prototype.start = function() {},
    t.prototype.startAction = function(e) {
        var t = this.node.getChildByName("money_node").getPosition();
        66666 == (e = Math.floor(e)) || this.scheduleOnce(function() {
            c._EventTargetMager.emit("updateMoney", e)
        },
        .4);
        var a = 30;
        e > 30 && (a = 30);
        var o = Math.floor(360 / a);
        t.x -= 60;
        for (var i = 0; i < a; i++) r._poolNodeMager.getPoolNode(s.KEY.poolName.medalNode, this.node, {
            endPos: t,
            angle: i * o,
            index: i
        })
    },
    n([l], t)
} (cc.Component));
a.default = u