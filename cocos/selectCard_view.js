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
var r = e("KEY"),
c = e("winRootNode"),
s = e("audioMager"),
d = e("poolNodeMager"),
l = e("winNodeMager"),
u = e("gameDataManager"),
p = cc._decorator,
h = p.ccclass,
_ = p.property,
f = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.maxCotent = null,
        t.reselectCard = null,
        t.reselectCard_content = null,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function() {},
    t.prototype.onClose = function() {
        this.maxCotent.destroyAllChildren(),
        this.node.active = !1
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onLoad = function() {},
    t.prototype.on_show = function() {
        this.initData(),
        this.node.active = !0
    },
    t.prototype.on_hide = function() {
        this.maxCotent.destroyAllChildren(),
        this.node.active = !1
    },
    t.prototype.show_reselectCard = function() {
        s._audioMager.playAudioEff(r.KEY.audioName.btn),
        l._winNodeMager.showWinNode(r.KEY.ViewName.reselectCard, this.node)
    },
    t.prototype.cardBtn = function(e, t) {
        var a = t.parent.convertToWorldSpaceAR(t.position),
        o = this.node.parent.convertToNodeSpaceAR(a),
        i = new cc.Vec3(443, 302);
        u._gameStateData.selectCardLists.push(e),
        d._poolNodeMager.getPoolNode(r.KEY.poolName.selectCard, this.node.parent, !0, {
            pos: o,
            targetPos: i,
            cardId: e
        })
    },
    t.prototype.initData = function() {
        var e = u._gameStateData.CardsList;
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (e[t], d._poolNodeMager.getPoolNode(r.KEY.poolName.selectCard, this.maxCotent, !0, {
            cardId: parseInt(t),
            paretnCom: this
        }))
    },
    n([_(cc.Node)], t.prototype, "maxCotent", void 0),
    n([_(cc.Node)], t.prototype, "reselectCard", void 0),
    n([_(cc.Node)], t.prototype, "reselectCard_content", void 0),
    n([h], t)
} (c.default);
a.default = f