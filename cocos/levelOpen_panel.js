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
l = e("gameDataManager"),
u = e("platfrom_fun"),
p = e("commonFunction"),
h = e("AndroidApi"),
_ = e("4399GameBox"),
f = cc._decorator,
g = f.ccclass,
m = (f.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.callBack = null,
        t.gameIndex = 0,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function(e) {
        var t = this.node.getChildByName("node");
        t.y = cc.winSize.height + 200,
        this.moveShow(this.node.getChildByName("node"), cc.v3(0, 0), null),
        e.callBack && (this.callBack = e.callBack),
        e.gameIndex && (this.gameIndex = e.gameIndex),
        p.commonTool.updateSprite("levelOpenIcon/" + this.gameIndex, t.getChildByName("icon"));
        var a = ["", "第一卷击败恶魔后解锁", "第二卷飞向太空后解锁"][this.gameIndex];
        t.getChildByName("content").getComponent(cc.Label).string = a,
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? h.default.get().showBanner() : window.gamebox && _.default.get().showBanner()
    },
    t.prototype.onClose = function() {
        var e = this;
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? h.default.get().hideBanner() : window.gamebox && _.default.get().hideBanner(),
        this.moveHide(this.node.getChildByName("node"), cc.v3(0, cc.winSize.height + 200),
        function() {
            d._poolNodeMager.putPoolNode(e.node.name, e.node)
        })
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.on_close = function() {
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        this.callBack && this.callBack(!1),
        this.onClose(!0),
        (cc.sys.isNative || window.kwaigame) && u.default.getInstance().showInterstitalAd()
    },
    t.prototype.on_wanhui = function() {
        var e = this;
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        this.gameIndex <= 0 || u.default.getInstance().showAdVideo(function() {
            u.default.getInstance().add_reportAnalytics("event_TotalVedioCount"),
            u.default.getInstance().add_reportAnalytics("event_JieSuoLevel" + (e.gameIndex + 1) + "VedioCount"),
            -1 == l._userData.levelList.indexOf(e.gameIndex) && (l._userData.levelList.push(e.gameIndex), l.UserDataManger.preData()),
            e.callBack && e.callBack(!0),
            e.onClose(1)
        })
    },
    n([g], t)
} (r.default));
a.default = m