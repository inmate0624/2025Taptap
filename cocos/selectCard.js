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
c = e("KEY"),
s = e("winRootNode"),
d = e("audioMager"),
l = e("gameDataManager"),
u = e("commonFunction"),
p = e("seletgame_view"),
h = cc._decorator,
_ = h.ccclass,
f = (h.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.cardId = 0,
        t.paretnCom = null,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function(e) {
        var t = this;
        this.cardId = e.cardId,
        this.paretnCom = e.paretnCom;
        var a = l._gameStateData.CardsList[this.cardId].CardName;
        this.node.children[1].getComponent(cc.Label).string = a,
        u.commonTool.updateSprite("card/" + a, this.node.children[0],
        function() {},
        p._seletgame_view.gameIndex),
        this.node.scale = 1,
        e.pos && (this.node.position = e.pos, cc.tween(this.node).to(.5, {
            position: e.targetPos,
            scale: .1
        },
        {
            easing: "backOut"
        }).call(function() {
            t.onClose(1)
        }).start()),
        this.node.getComponent(cc.Button).interactable = !0,
        "content" != this.node.parent.name && (this.node.getComponent(cc.Button).interactable = !1)
    },
    t.prototype.onClose = function() {
        this.node.scale = 1,
        r._poolNodeMager.putPoolNode(this.node.name, this.node)
    },
    t.prototype.onClear = function() {},
    t.prototype.start = function() {},
    t.prototype.on_btn = function() {
        "content" == this.node.parent.name && (d._audioMager.playAudioEff(c.KEY.audioName.btn), this.paretnCom.cardBtn(this.cardId, this.node))
    },
    n([_], t)
} (s.default));
a.default = f