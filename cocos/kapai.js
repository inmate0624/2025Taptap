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
var r = e("card"),
c = e("EventTargetMager"),
s = cc._decorator,
d = s.ccclass,
l = (s.property,
function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }
    return i(t, e),
    t.prototype.touch_start = function() {},
    t.prototype.touch_end = function() {},
    t.prototype.startHeCheng = function() {},
    t.prototype.cardHeChengResult = function() {},
    t.prototype.startBattle = function() {
        if (this.is_battle = !0, this.is_duidie = !1, this.node.getChildByName("zhandouIcon").active = !0, c._EventTargetMager.emit("clear_cardItem", this.id), this.cards.length > 1) {
            this.cards.splice(this.card_index, 1);
            for (var e = 0; e < this.cards.length; e++) this.cards[e].updateCard(this.cards.slice(), e);
            this.updateCard([this], 0)
        }
    },
    t.prototype.stopBattle = function() {
        this.stopAttack(),
        this.is_battle = !1,
        this.is_duidie = !0,
        this.battleTarget.length > 0 && (c._EventTargetMager.emit("updateBatter", this.batterId, this, !0), this.battleTarget = []),
        this.node && this.node.active && (this.node.getChildByName("zhandouIcon").active = !1)
    },
    t.prototype.start = function() {},
    n([d], t)
} (r.default));
a.default = l