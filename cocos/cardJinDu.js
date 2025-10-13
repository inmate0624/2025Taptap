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
var r = e("NumberUtil"),
c = e("duidie_view"),
s = e("gameDataManager"),
d = e("winRootNode"),
l = e("poolNodeMager"),
u = e("EventTargetMager"),
p = e("card"),
h = e("cardUtil"),
_ = cc._decorator,
f = _.ccclass,
g = _.property,
m = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.hecheng_class = null,
        t.maxTime = 0,
        t.time = 0,
        t.bar = null,
        t.tween = null,
        t._vector = 0,
        t.card = null,
        t.callBack = null,
        t.isAction = !1,
        t.is_open = !1,
        t.baozhaTime = 0,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function(e) {
        var t = this;
        this.is_open = !1,
        this.node.active = !0,
        this.node.y = 65,
        e.hecheng_class && (this.hecheng_class = e.hecheng_class, this.maxTime = this.hecheng_class.times),
        e.maxTime && (this.maxTime = e.maxTime),
        this.bar.node.parent.width = this.node.parent.width,
        this.bar.node.width = this.node.parent.width,
        this.node.y = this.node.parent.height / 2 + 10,
        this.bar.fillRange = 0,
        this.time = this.maxTime,
        this._vector = 1 / this.time,
        e.time && (this.time = e.time),
        this.bar.fillRange = this._vector * (this.maxTime - this.time),
        this.isAction = !1,
        this.startSchedule(),
        c._duidie_view.gamePause && this.stopSchedule(),
        this.baozhaTime = 0;
        var a = r.NumberUtil.randomNum(0, 1);
        this.bar.node.color = cc.color(255, 255, 255),
        this.bar.node.stopAllActions(),
        this.hecheng_class && "406002" == this.hecheng_class.id && (a > 0 && (this.baozhaTime = r.NumberUtil.randomNum(1, this.maxTime - 1)), this.bar.node.color = cc.color(255, 0, 0), this.bar.node.runAction(cc.repeatForever(cc.blink(.4, 2)))),
        e.card && (this.card = e.card),
        e.callBack && (this.callBack = e.callBack),
        this.time < 1 && this.scheduleOnce(function() {
            t.card && t.card.hecheng_result(!0),
            t.onClose(1)
        },
        this.time)
    },
    t.prototype.onClose = function() {
        this.stopSchedule(),
        this.unscheduleAllCallbacks(),
        l._poolNodeMager.putPoolNode(this.node.name, this.node)
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onLoad = function() {
        this.node_on()
    },
    t.prototype.node_on = function() {
        u._EventTargetMager.on("startSchedule", this.startSchedule, this),
        u._EventTargetMager.on("stopSchedule", this.stopSchedule, this),
        u._EventTargetMager.on("jindu_suspend", this.jindu_suspend, this),
        u._EventTargetMager.on("jindu_restart", this.jindu_restart, this),
        u._EventTargetMager.on("closeAll", this.onClose, this),
        u._EventTargetMager.on("clearJindu", this.clearJindu, this)
    },
    t.prototype.node_off = function() {
        u._EventTargetMager.off("startSchedule", this.startSchedule, this),
        u._EventTargetMager.off("stopSchedule", this.stopSchedule, this),
        u._EventTargetMager.off("jindu_suspend", this.jindu_suspend, this),
        u._EventTargetMager.off("jindu_restart", this.jindu_restart, this),
        u._EventTargetMager.off("closeAll", this.onClose, this),
        u._EventTargetMager.off("clearJindu", this.clearJindu, this)
    },
    t.prototype.clearJindu = function(e) {
        void 0 === e && (e = null),
        this.hecheng_class === e && (this.card && this.card.hecheng_result(!1), this.onClose(1))
    },
    t.prototype.jindu_suspend = function(e) {
        void 0 === e && (e = null),
        this.hecheng_class === e && this.stopSchedule()
    },
    t.prototype.jindu_restart = function(e) {
        void 0 === e && (e = null),
        this.hecheng_class === e && this.startSchedule()
    },
    t.prototype.startSchedule = function() {
        1 == this.isAction || s._gameStateData.is_pause || (this.isAction = !0, this.tweenAction(), this.updateTime, this.schedule(this.updateTime, 1))
    },
    t.prototype.updateTime = function() {
        if (this.time -= 1, this.tweenAction(), this.node && this.node.parent && cc.isValid(this.node.parent) && this.node.parent.getComponent(p.default)) {
            var e = this.node.parent.getComponent(p.default); - 1 != e.guangArray.indexOf(e.card_class.cradId) && e.guangSize > 220 && e.cardJinDuGuang && this == e.cardJinDuGuang && (e.guangSize -= e.guangSpeed, e.guangSize < 220 && (e.guangSize = 220), c._duidie_view.mask_graphics(e.guangSize, e.node.position, !0))
        }
        this.time <= 0 && 0 == this.is_open && (this.is_open = !0, this.card && this.card.hecheng_result(!0), this.callBack && this.callBack(), this.onClose(1))
    },
    t.prototype.stopSchedule = function() {
        this.isAction = !1,
        this.tween && this.tween.stop(),
        this.unschedule(this.updateTime)
    },
    t.prototype.tweenAction = function() {
        this.tween = cc.tween(this.bar).by(1, {
            fillRange: this._vector
        }).start()
    },
    t.prototype.delTime = function(e) {
        this.time += e,
        this.time > this.maxTime && (this.time = this.maxTime);
        var t = this.bar.fillRange - e * this._vector;
        if (this.node.parent && this.node.parent.getComponent(p.default)) {
            var a = this.node.parent.getComponent(p.default);
            if ( - 1 != a.guangArray.indexOf(a.card_class.cradId)) {
                var o = h.default.getGuangSize(a.card_class.cradId);
                a.guangSize = o,
                c._duidie_view.mask_graphics(a.guangSize, a.node.position, !0)
            }
        }
        t <= 0 && (t = 0),
        this.tween && this.tween.stop(),
        this.tween = cc.tween(this.bar).to(.1, {
            fillRange: 0
        }).start()
    },
    n([g(cc.Sprite)], t.prototype, "bar", void 0),
    n([f], t)
} (d.default);
a.default = m