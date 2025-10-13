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
c = e("KEY"),
s = e("audioMager"),
d = e("poolNodeMager"),
l = e("platfrom_fun"),
u = e("duidie_view"),
p = e("EventTargetMager"),
h = e("AndroidApi"),
_ = e("IosApi"),
f = e("4399GameBox"),
g = cc._decorator,
m = g.ccclass,
y = (g.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.callBack = null,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function(e) {
        p._EventTargetMager.emit("gamePauseFun", !0);
        var t = this.node.getChildByName("node");
        t.y = cc.winSize.height + 200,
        this.moveShow(this.node.getChildByName("node"), cc.v3(0, 0), null),
        e.callBack && (this.callBack = e.callBack),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? h.default.get().showBanner() : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? _.default.get().showBanner() : window.gamebox && f.default.get().showBanner(),
        window.hasOwnProperty("h5api") && (t.getChildByName("title").getComponent(cc.Label).string = "有 村 民 挂 掉 了")
    },
    t.prototype.onClose = function(e) {
        var t = this;
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? h.default.get().hideBanner() : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? _.default.get().hideBanner() : window.gamebox && f.default.get().hideBanner(),
        this.moveHide(this.node.getChildByName("node"), cc.v3(0, cc.winSize.height + 200),
        function() {
            0 == u._duidie_view.jiesuan && p._EventTargetMager.emit("gamePauseFun", !1),
            t.callBack && t.callBack(e),
            d._poolNodeMager.putPoolNode(t.node.name, t.node)
        })
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.on_close = function() {
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        this.onClose(!1),
        (cc.sys.isNative || window.kwaigame) && l.default.getInstance().showInterstitalAd()
    },
    t.prototype.on_fuhuo = function() {
        var e = this;
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        l.default.getInstance().showAdVideo(function() {
            l.default.getInstance().add_reportAnalytics("event_PartReviveVedioCount"),
            l.default.getInstance().add_reportAnalytics("event_TotalVedioCount"),
            e.onClose(!0)
        })
    },
    n([m], t)
} (r.default));
a.default = y