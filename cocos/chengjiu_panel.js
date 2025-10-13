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
var r = e("gameDataManager"),
c = e("winRootNode"),
s = e("KEY"),
d = e("audioMager"),
l = e("poolNodeMager"),
u = e("gameDataManager"),
p = e("platfrom_fun"),
h = e("AndroidApi"),
_ = e("IosApi"),
f = e("4399GameBox"),
g = cc._decorator,
m = g.ccclass,
y = g.property,
v = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.is_btn = !1,
        t.content = null,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function() {
        this.is_btn = !1;
        var e = this.node.getChildByName("node");
        e.y = cc.winSize.height + 200,
        this.moveShow(this.node.getChildByName("node"), cc.v3(0, 0), null),
        this.initData(),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? h.default.get().showBanner() : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? _.default.get().showBanner() : window.gamebox && f.default.get().showBanner(),
        e.getChildByName("jindu").getComponent(cc.Label).string = "完成进度:" + u._userData.chengjiuList.length + "/20"
    },
    t.prototype.onClose = function() {
        var e = this;
        this.content.destroyAllChildren(),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? h.default.get().hideBanner() : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? _.default.get().hideBanner() : window.gamebox && f.default.get().hideBanner(),
        this.moveHide(this.node.getChildByName("node"), cc.v3(0, cc.winSize.height + 200),
        function() {
            l._poolNodeMager.putPoolNode(e.node.name, e.node)
        })
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.on_close = function() {
        this.disableClick(),
        d._audioMager.playAudioEff(s.KEY.audioName.btn),
        this.is_btn || (this.is_btn = !0, this.onClose(!0), (cc.sys.isNative || window.kwaigame) && p.default.getInstance().showInterstitalAd())
    },
    t.prototype.initData = function() {
        for (var e in r._gameStateData.Achievement) Object.prototype.hasOwnProperty.call(r._gameStateData.Achievement, e) && (r._gameStateData.Achievement[e], l._poolNodeMager.getPoolNode(s.KEY.poolName.chengjiu_item, this.content, !0, {
            key: e
        }))
    },
    n([y(cc.Node)], t.prototype, "content", void 0),
    n([m], t)
} (c.default);
a.default = v