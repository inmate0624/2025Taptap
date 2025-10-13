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
u = cc._decorator,
p = u.ccclass,
h = (u.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.isbtn = !1,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function() {
        this.isbtn = !1;
        var e = this.node.getChildByName("node");
        e.y = cc.winSize.height + 200,
        this.moveShow(this.node.getChildByName("node"), cc.v3(0, 0), null),
        l._userData.isBgm_Open ? (e.getChildByName("bgm_shadow").children[0].active = !1, e.getChildByName("bgm_shadow").children[1].active = !0, s._audioMager.playBGM(c.KEY.audioName.bgm)) : (e.getChildByName("bgm_shadow").children[0].active = !0, e.getChildByName("bgm_shadow").children[1].active = !1, s._audioMager.stopBGM()),
        l._userData.isEffect_Open ? (e.getChildByName("effect_shadow").children[0].active = !1, e.getChildByName("effect_shadow").children[1].active = !0) : (e.getChildByName("effect_shadow").children[0].active = !0, e.getChildByName("effect_shadow").children[1].active = !1),
        (window.tt && "preview" != this.version() || cc.sys.isNative || window.kwaigame || window.hasOwnProperty("h5api")) && (e.getChildByName("lantu_shadow").active = !1),
        l._userData.lantuOpen ? (e.getChildByName("lantu_shadow").children[0].active = !1, e.getChildByName("lantu_shadow").children[1].active = !0) : (e.getChildByName("lantu_shadow").children[0].active = !0, e.getChildByName("lantu_shadow").children[1].active = !1)
    },
    t.prototype.version = function() {
        return tt.env.VERSION || "preview"
    },
    t.prototype.onClose = function() {
        var e = this;
        this.moveHide(this.node.getChildByName("node"), cc.v3(0, cc.winSize.height + 200),
        function() {
            d._poolNodeMager.putPoolNode(e.node.name, e.node)
        })
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.bgm_fun = function() {
        var e = this.node.getChildByName("node");
        l._userData.isBgm_Open ? (e.getChildByName("bgm_shadow").children[0].active = !1, e.getChildByName("bgm_shadow").children[1].active = !0, s._audioMager.playBGM(c.KEY.audioName.bgm)) : (e.getChildByName("bgm_shadow").children[0].active = !0, e.getChildByName("bgm_shadow").children[1].active = !1, s._audioMager.stopBGM())
    },
    t.prototype.on_bgm = function() {
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        l._userData.isBgm_Open = !l._userData.isBgm_Open,
        l.UserDataManger.preData(),
        this.bgm_fun()
    },
    t.prototype.on_effect = function() {
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        l._userData.isEffect_Open = !l._userData.isEffect_Open,
        l.UserDataManger.preData(),
        this.effect_fun()
    },
    t.prototype.effect_fun = function() {
        var e = this.node.getChildByName("node");
        l._userData.isEffect_Open ? (e.getChildByName("effect_shadow").children[0].active = !1, e.getChildByName("effect_shadow").children[1].active = !0) : (e.getChildByName("effect_shadow").children[0].active = !0, e.getChildByName("effect_shadow").children[1].active = !1)
    },
    t.prototype.on_lantu = function() {
        this.disableClick(),
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        l._userData.lantuOpen = !l._userData.lantuOpen;
        var e = this.node.getChildByName("node");
        l._userData.lantuOpen ? (e.getChildByName("lantu_shadow").children[0].active = !1, e.getChildByName("lantu_shadow").children[1].active = !0) : (e.getChildByName("lantu_shadow").children[0].active = !0, e.getChildByName("lantu_shadow").children[1].active = !1, l._userData.lantu_data = []),
        console.log("hhhhhhhhhhhhh"),
        l.UserDataManger.preData()
    },
    t.prototype.on_return = function() {
        this.isbtn || (this.isbtn = !0, this.disableClick(), s._audioMager.playAudioEff(c.KEY.audioName.btn), this.onClose(1))
    },
    n([p], t)
} (r.default));
a.default = h