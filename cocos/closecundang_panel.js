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
l = e("AndroidApi"),
u = e("IosApi"),
p = e("4399GameBox"),
h = cc._decorator,
_ = h.ccclass,
f = (h.property,
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
        this.node.getChildByName("node").y = cc.winSize.height + 200,
        this.moveShow(this.node.getChildByName("node"), cc.v3(0, 0), null),
        e.callBack && (this.callBack = e.callBack),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? l.default.get().showBanner() : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? u.default.get().showBanner() : window.gamebox && p.default.get().showBanner()
    },
    t.prototype.onClose = function(e) {
        var t = this;
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? l.default.get().hideBanner() : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? u.default.get().hideBanner() : window.gamebox && p.default.get().hideBanner(),
        this.moveHide(this.node.getChildByName("node"), cc.v3(0, cc.winSize.height + 200),
        function() {
            d._poolNodeMager.putPoolNode(t.node.name, t.node),
            2 == e && t.callBack && t.callBack()
        })
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.on_close = function() {
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        this.onClose(1)
    },
    t.prototype.on_clear = function() {
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        this.onClose(2)
    },
    n([_], t)
} (r.default));
a.default = f