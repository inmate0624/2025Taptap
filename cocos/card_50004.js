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
u = e("EventTargetMager"),
p = e("gameDataManager"),
h = cc._decorator,
_ = h.ccclass,
f = (h.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.is_jump = !0,
        t.jump_time = 0,
        t.result_tme = 0,
        t.jump_max_time = 5,
        t.result_max_time = 30,
        t.moveTarget = null,
        t.moveDis = 70,
        t.attkDealyTime = 0,
        t.attk = 0,
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
        this.is_jump = !1,
        this.is_battle = !0,
        u._EventTargetMager.emit("clear_cardItem", this.id),
        this.node.getChildByName("zhandouIcon").active = !0
    },
    t.prototype.stopBattle = function() {
        this.stopAttack(),
        this.is_jump = !0,
        this.is_battle = !1,
        this.battleTarget.length > 0 && (u._EventTargetMager.emit("updateBatter", this.batterId, this, !0), this.battleTarget = []),
        this.node.getChildByName("zhandouIcon").active = !1
    },
    t.prototype.start = function() {
        this.start_Time(),
        this.findMoveTarget(),
        this.moveDis = l.NumberUtil.randomNum(70, 100),
        this.moveDis = l.NumberUtil.randomNum(70, 100),
        this.on()
    },
    t.prototype.on = function() {
        var e = this;
        this.scheduleOnce(function() {
            e.updateGuangCount()
        },
        1),
        u._EventTargetMager.on("updateMoveTarget", this.findMoveTarget, this),
        u._EventTargetMager.on("updateGuangCount", this.updateGuangCount, this)
    },
    t.prototype.off = function() {
        u._EventTargetMager.off("updateMoveTarget", this.findMoveTarget, this),
        u._EventTargetMager.off("updateGuangCount", this.updateGuangCount, this)
    },
    t.prototype.updateGuangCount = function() {
        if (this.card_class.Type != r.card_type.lantu) {
            for (var e = 0,
            t = 0; t < s._duidie_view.card_parent.children.length; t++) {
                var a = s._duidie_view.card_parent.children[t].getComponent(c.default);
                a.card_class.cradId == r.cardNameOrId.探照者 && 1 == a.is_siwang || -1 != s._duidie_view.guangArray.indexOf(a.card_class.cradId) && (e += 1)
            }
            0 == e ? (console.log("狂暴啦卧槽"), this.jump_max_time = 2, this.attkDealyTime = this.card_class.AttackCd, this.attk = this.card_class.Attack, this.card_class.AttackCd /= 2, this.card_class.Attack *= 2) : (console.log("哎呦狂暴取消"), this.jump_max_time = 5, this.attk > 0 && (this.card_class.Attack = this.attk), this.attkDealyTime > 0 && (this.card_class.AttackCd = this.attkDealyTime))
        }
    },
    t.prototype.findMoveTarget = function() {
        if (this.card_class.Type != r.card_type.lantu) {
            for (var e = [], t = 0; t < this.node.parent.children.length; t++) if (this.node.parent.children[t] && this.node.parent.children[t].active) {
                var a = (s = this.node.parent.children[t]).getComponent(c.default);
                a.card_class.Type == r.card_type.renlei && 0 == a.is_siwang && e.push(s)
            }
            var o = this.node.position,
            i = 9999,
            n = null;
            for (t = 0; t < e.length; t++) {
                var s, d = (s = e[t]).position.sub(o).mag();
                d < i && (i = d, n = s.getComponent(c.default))
            }
            n && (this.moveTarget = n)
        }
    },
    t.prototype.start_Time = function() {
        this.schedule(this.update_Time, 1)
    },
    t.prototype.update_Time = function() {
        if (this.card_class.Type == r.card_type.lantu) return this.stop_Time();
        this.is_enable = !0,
        1 != s._duidie_view.jiesuan && (this.jump_time += 1, this.result_tme += 1, this.jump_time > this.jump_max_time && (this.jump_time = 0), this.jump_time == this.jump_max_time && (this.jump_time = 0, this.is_jump && 0 == p._gameStateData.is_pause && 0 == this.is_battle && d.default.move(this,
        function() {})))
    },
    t.prototype.stop_Time = function() {
        this.unschedule(this.update_Time)
    },
    n([_], t)
} (c.default));
a.default = f