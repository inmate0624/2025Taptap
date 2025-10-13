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
p = e("AndroidApi"),
h = e("IosApi"),
_ = e("4399GameBox"),
f = cc._decorator,
g = f.ccclass,
m = (f.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.callBack = null,
        t.isbtn = !1,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function(e) {
        this.isbtn = !1;
        var t = this.node.getChildByName("node"),
        a = u._duidie_view.cardNum - u._duidie_view.maxCardNum;
        t.getChildByName("text").getComponent(cc.RichText).string = "<color=#FFFFFF>请出售</c><color=#FF0000> " + a + " <color=#FFFFFF>张卡牌</color>",
        e.callBack && (this.callBack = e.callBack),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? p.default.get().showBanner() : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? h.default.get().showBanner() : window.gamebox && _.default.get().showBanner()
    },
    t.prototype.onClose = function() {
        d._poolNodeMager.putPoolNode(this.node.name, this.node),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? p.default.get().hideBanner() : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? h.default.get().hideBanner() : window.gamebox && _.default.get().hideBanner()
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.on_chushou = function() {
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        this.callBack && this.callBack(!1),
        this.onClose(1)
    },
    t.prototype.on_buchushou = function() {
        var e = this;
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        this.isbtn || (this.isbtn = !0, this.scheduleOnce(function() {
            e.isbtn = !1
        },
        2), l.default.getInstance().showAdVideo(function() {
            e.callBack && e.callBack(!0),
            l.default.getInstance().add_reportAnalytics("event_NotSellCardVedioCount"),
            l.default.getInstance().add_reportAnalytics("event_TotalVedioCount"),
            e.onClose(1)
        }))
    },
    n([g], t)
} (r.default));
a.default = m