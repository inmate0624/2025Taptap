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
var r = e("enum_type"),
c = e("card"),
s = e("duidie_view"),
d = cc._decorator,
l = d.ccclass,
u = (d.property,
function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }
    return i(t, e),
    t.prototype.touch_start = function() {},
    t.prototype.touch_end = function() {
        this.on_cardItembtn()
    },
    t.prototype.startHeCheng = function() {},
    t.prototype.cardHeChengResult = function() {},
    t.prototype.startBattle = function() {},
    t.prototype.stopBattle = function() {},
    t.prototype.on_cardItembtn = function() {
        if (this.node.position.sub(this.startPos).mag() < 30) {
            var e = this.card_class.Price,
            t = 5;
            e < 5 && (t = e),
            this.updateDataAttr("Price", -1 * t),
            t > 0 && this.cardItemOpen(t)
        }
    },
    t.prototype.cardItemOpen = function(e) {
        for (var t = this,
        a = 0; a < e; a++) this.scheduleOnce(function() {
            s._duidie_view.add_card(r.cardNameOrId.金币, t.node.position, 11, 1)
        },
        .4 * a)
    },
    n([l], t)
} (c.default));
a.default = u