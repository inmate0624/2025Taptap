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
d = e("cardUtil"),
l = e("NumberUtil"),
u = e("gameDataManager"),
p = cc._decorator,
h = p.ccclass,
_ = (p.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.is_jump = !0,
        t.jump_time = 0,
        t.result_tme = 0,
        t.jump_max_time = 10,
        t.result_max_time = 30,
        t
    }
    return i(t, e),
    t.prototype.touch_start = function() {
        this.stop_Time()
    },
    t.prototype.touch_end = function() {
        this.is_jump = !0,
        this.cards[0].card_class.cradId == r.cardNameOrId.动物围栏 && (this.is_jump = !1),
        this.start_Time()
    },
    t.prototype.startHeCheng = function() {
        this.is_jump = !1
    },
    t.prototype.cardHeChengResult = function() {
        this.is_jump = !0
    },
    t.prototype.startBattle = function() {
        this.node.getChildByName("zhandouIcon").active = !0
    },
    t.prototype.stopBattle = function() {
        this.node.getChildByName("zhandouIcon").active = !1
    },
    t.prototype.start = function() {
        this.start_Time()
    },
    t.prototype.start_Time = function() {
        1 != s._duidie_view.jiesuan && this.schedule(this.update_Time, 1)
    },
    t.prototype.update_Time = function() {
        this.jump_time += 1,
        this.result_tme += 1,
        this.result_tme == this.result_max_time && (this.result_tme = 0, 0 == u._gameStateData.is_pause && s._duidie_view.add_card(r.cardNameOrId.大便, this.node.position, l.NumberUtil.randomNum(1, 8))),
        this.jump_time == this.jump_max_time && (this.jump_time = 0, this.is_jump && 0 == u._gameStateData.is_pause && d.default.jump(this,
        function() {}))
    },
    t.prototype.stop_Time = function() {
        this.unschedule(this.update_Time)
    },
    n([h], t)
} (c.default));
a.default = _