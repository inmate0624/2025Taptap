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
c = e("winRootNode"),
s = e("KEY"),
d = e("audioMager"),
l = e("winNodeMager"),
u = e("mainScene"),
p = e("seletgame_view"),
h = cc._decorator,
_ = h.ccclass,
f = (h.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.data = null,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function(e) {
        this.node.children[1].active = !1,
        e.data && (this.data = e.data, this.node.children[1].active = !0),
        this.node.getChildByName("title").getComponent(cc.Label).string = "存档" + ["一", "二", "三"][e.index]
    },
    t.prototype.onClose = function() {
        p._seletgame_view.onClose(2),
        r._poolNodeMager.putPoolNode(this.node.name, this.node)
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.on_xincundang = function() {
        this.disableClick(),
        d._audioMager.playAudioEff(s.KEY.audioName.btn),
        l._winNodeMager.showWinNode(s.KEY.ViewName.duidie_view, u._mainScene.game),
        this.onClose(1)
    },
    t.prototype.on_laocundang = function() {
        this.disableClick(),
        d._audioMager.playAudioEff(s.KEY.audioName.btn),
        l._winNodeMager.showWinNode(s.KEY.ViewName.duidie_view, u._mainScene.game, !0, {}),
        this.onClose(1)
    },
    t.prototype.on_close = function() {
        var e = this;
        this.data = null,
        r._poolNodeMager.getPoolNode(s.KEY.poolName.closecundang_panel, null, !0, {
            callBack: function() {
                e.node.children[0].active = !1
            }
        })
    },
    n([_], t)
} (c.default));
a.default = f