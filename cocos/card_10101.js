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
c = e("card"),
s = e("duidie_view"),
d = e("NumberUtil"),
l = e("gameDataManager"),
u = e("KEY"),
p = cc._decorator,
h = p.ccclass,
_ = (p.property,
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
        var e = this,
        t = .15 * l._gameStateData.daySecond;
        this.node.position,
        r._poolNodeMager.getPoolNode(u.KEY.poolName.cardJinDu, this.node, !0, {
            maxTime: t,
            callBack: function() {
                var t = s._duidie_view.rukou_index;
                t > 8 && (t = 8);
                var a = l._gameStateData.StrangeEntrance[t];
                if (a && 1 == e.is_open) {
                    e.is_open = !1;
                    for (var o = a.GeneratedContent,
                    i = a.Number,
                    n = 0; n < i; n++) {
                        var r = o[d.NumberUtil.randomNum(0, o.length - 1)];
                        s._duidie_view.add_card(r, e.node.position, d.NumberUtil.randomNum(1, 8))
                    }
                    s._duidie_view.rukou_index += 1
                }
                e.onClose(1)
            }
        })
    },
    n([h], t)
} (c.default));
a.default = _