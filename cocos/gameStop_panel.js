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
p = e("mainScene"),
h = e("commonFunction"),
_ = e("EventTargetMager"),
f = e("AndroidApi"),
g = e("IosApi"),
m = cc._decorator,
y = m.ccclass,
v = (m.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.callBack = null,
        t.judgeVideo = !1,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function(e) {
        var t = this;
        2 == u._duidie_view.gameIndex && (u._duidie_view.updateDayData(function() {}), this.scheduleOnce(function() {
            d._poolNodeMager.getPoolNode(c.KEY.poolName.rank_panel)
        },
        .1)),
        this.judgeVideo = !1,
        l.default.getInstance().stopCreateVideo(),
        _._EventTargetMager.emit("gamePauseFun", !0);
        var a = this.node.getChildByName("node");
        a.y = cc.winSize.height + 200,
        this.scheduleOnce(function() {
            t.moveShow(t.node.getChildByName("node"), cc.v3(0, 0), null)
        },
        .3),
        e.callBack && (this.callBack = e.callBack),
        u._duidie_view.dayNum <= 1 && u._duidie_view.updateChengjiuMap("26"),
        a.getChildByName("content").getComponent(cc.Label).string = "生存了 " + u._duidie_view.dayNum + " 天",
        cc.sys.isNative && (cc.find("on_share", a).active = !1, cc.find("on_close", a).x = 0),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? f.default.get().showBanner() : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && g.default.get().showBanner()
    },
    t.prototype.onClose = function(e) {
        var t = this;
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? f.default.get().hideBanner() : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && g.default.get().hideBanner(),
        (cc.sys.isNative || window.kwaigame) && l.default.getInstance().showInterstitalAd(),
        this.moveHide(this.node.getChildByName("node"), cc.v3(0, cc.winSize.height + 200),
        function() {
            0 == e && p._mainScene.update_ui_active(!0),
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
        this.onClose(!1)
    },
    t.prototype.on_share = function() {
        var e = this;
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        this.judgeVideo || (this.judgeVideo = !0, l.default.getInstance().onShareVideo(function(t) {
            e.judgeVideo = !1,
            t ? (h.commonTool.appLog("分享成功！！！"), console.log("分享陈宫咯"), d._poolNodeMager.getPoolNode(c.KEY.poolName.tipNode, null, !0, {
                str: "分享成功！"
            })) : (console.log("分享失败Loi"), d._poolNodeMager.getPoolNode(c.KEY.poolName.tipNode, null, !0, {
                str: "分享失败！"
            }))
        }))
    },
    n([y], t)
} (r.default));
a.default = v