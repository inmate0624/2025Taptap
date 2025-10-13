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
p = e("commonFunction"),
h = e("EventTargetMager"),
_ = e("AndroidApi"),
f = e("IosApi"),
g = e("4399GameBox"),
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
        h._EventTargetMager.emit("gamePauseFun", !0);
        var t = this.node.getChildByName("node");
        if (t.y = cc.winSize.height + 200, this.moveShow(this.node.getChildByName("node"), cc.v3(0, 0), null), e.callBack && (this.callBack = e.callBack), t.getChildByName("on_share"), t.getChildByName("title").getComponent(cc.Label).string = "第 " + u._duidie_view.dayNum + " 天", cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? _.default.get().showBanner() : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? f.default.get().showBanner() : window.gamebox && g.default.get().showBanner(), window.hasOwnProperty("h5api")) {
            t.getChildByName("zi2").active = !1;
            var a = new cc.Node;
            a.y = 10,
            a.parent = t,
            a.color = cc.color(0, 0, 0);
            var o = a.addComponent(cc.Label);
            o.string = "所有人类全部挂掉了",
            o.enableBold = !0
        }
    },
    t.prototype.onClose = function(e) {
        var t = this;
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? _.default.get().hideBanner() : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? f.default.get().hideBanner() : window.gamebox && g.default.get().hideBanner(),
        (cc.sys.isNative || window.kwaigame) && l.default.getInstance().showInterstitalAd(),
        0 == e && d._poolNodeMager.getPoolNode(c.KEY.poolName.gameStop_panel, null, !0, {
            callBack: this.callBack
        }),
        this.moveHide(this.node.getChildByName("node"), cc.v3(0, cc.winSize.height + 200),
        function() {
            0 == u._duidie_view.jiesuan && h._EventTargetMager.emit("gamePauseFun", !1),
            d._poolNodeMager.putPoolNode(t.node.name, t.node),
            1 == e && t.callBack && t.callBack(e)
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
    t.prototype.on_fuhuo_all = function() {
        var e = this;
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        l.default.getInstance().showAdVideo(function() {
            u._duidie_view.is_all_fuhuo += 1,
            l.default.getInstance().add_reportAnalytics("event_AllReviveVedioCount"),
            l.default.getInstance().add_reportAnalytics("event_TotalVedioCount"),
            e.onClose(!0)
        })
    },
    t.prototype.on_share = function() {
        var e = this;
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        this.judgeVideo || l.default.getInstance().onShareVideo(function(t) {
            e.judgeVideo = !1,
            t ? (e.judgeVideo = !0, p.commonTool.appLog("分享成功！！！"), e.scheduleOnce(function() {
                e.onClose(!1)
            },
            2)) : p.commonTool.appLog("分享失败！！！")
        })
    },
    n([y], t)
} (r.default));
a.default = v