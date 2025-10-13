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
c = cc._decorator,
s = c.ccclass,
d = c.property,
l = ["angleChange", "breathAction", "minbreathAction", "upanddownAction", "rotateAction", "fadeAction", "scaleBigShow", "moveShow", "fadeIn", "showTopPopUp", "itemShowScaleBig", "scaleSmallHide", "moveHide", "fadeOut"],
u = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.cycleAction = 9,
        t.showActionType = 1,
        t.showEndPos = new cc.Vec3,
        t.hideActionType = 6,
        t.hideEndPos = new cc.Vec3,
        t.isJudge = !1,
        t.scale = 99,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onClose = function(e) {
        this.hideActionType > 6 && this[l[this.hideActionType]](this.hideEndPos, e)
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onLoad = function() {},
    t.prototype.start = function() {},
    t.prototype.onEnable = function() {
        99 == this.scale && (this.scale = this.node.scale),
        this.node.scale = this.scale,
        this.showActionType > 1 ? this[l[this.showActionType]](this.node, this.showEndPos, this.startCycleAction.bind(this)) : this.startCycleAction()
    },
    t.prototype.startCycleAction = function(e) {
        var t = this.cycleAction;
        e && (t = e),
        t < 10 && this[l[t]](this.node)
    },
    n([d({
        displayName: "循环播放的动画类型",
        type: cc.Enum({
            non: 10,
            angleChange: 0,
            breathAction: 1,
            minbreathAction: 2,
            upanddownAction: 3,
            rotateAction: 4,
            fadeAction: 5
        })
    })], t.prototype, "cycleAction", void 0),
    n([d({
        displayName: "出现时播放的动画类型",
        type: cc.Enum({
            non: 1,
            scaleBigShow: 2,
            moveShow: 3,
            fadeIn: 4,
            showTopPopUp: 5,
            itemShowScaleBig: 6
        })
    })], t.prototype, "showActionType", void 0),
    n([d({
        displayName: "最终出现位置"
    })], t.prototype, "showEndPos", void 0),
    n([d({
        displayName: "隐藏时播放的动画类型",
        type: cc.Enum({
            non: 6,
            scaleSmallHide: 7,
            moveHide: 8,
            fadeOut: 9
        })
    })], t.prototype, "hideActionType", void 0),
    n([d({
        displayName: "最终隐藏位置"
    })], t.prototype, "hideEndPos", void 0),
    n([s], t)
} (r.default);
a.default = u