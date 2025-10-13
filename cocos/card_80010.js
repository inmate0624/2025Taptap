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
c = e("enum_type"),
s = e("card"),
d = e("cardUtil"),
l = e("KEY"),
u = cc._decorator,
p = u.ccclass,
h = (u.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.is_open = !0,
        t
    }
    return i(t, e),
    t.prototype.touch_start = function() {},
    t.prototype.touch_end = function() {},
    t.prototype.startHeCheng = function() {},
    t.prototype.cardHeChengResult = function() {},
    t.prototype.startBattle = function() {},
    t.prototype.stopBattle = function() {},
    t.prototype.start = function() {
        var e = this;
        this.node.position,
        this.node.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.03, cc.v2(4, 4)), cc.moveBy(.03, cc.v2( - 4, -4)), cc.moveBy(.03, cc.v2(4, 4)), cc.moveBy(.03, cc.v2( - 4, -4))))),
        r._poolNodeMager.getPoolNode(l.KEY.poolName.cardJinDu, this.node, !0, {
            maxTime: 10,
            callBack: function() {
                var t = 396;
                e.card_class.cradId == c.cardNameOrId.炸弹 && (t *= 2),
                d.default.baozha(e.node.position, t, 200)
            }
        })
    },
    n([p], t)
} (s.default));
a.default = h