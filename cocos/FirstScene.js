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
var r = e("AndroidApi"),
c = e("IosApi"),
s = cc._decorator,
d = s.ccclass,
l = s.property,
u = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.XieYiNode = null,
        t.ShiMingNode = null,
        t.hotUpdateBg = null,
        t.hotUpdateView1 = null,
        t.isShowHotUpdate = !1,
        t.hotUpdateRun = !1,
        t.hotUpdateNum = 0,
        t.loadSubList = ["res"],
        t.loadNum = 0,
        t
    }
    return i(t, e),
    t.prototype.onLoad = function() {
        var e = this;
        this.XieYiNode.active = !1,
        this.ShiMingNode.active = !1,
        this.androidEvent();
        var t = r.default.get().sendJavaGetChannel();
        if ("OPPO" == t && (this.node.getChildByName("ruanzhu").active = !0), "VIVO" == t || "OPPO" == t || "IOS" == t || "MoMoYu" == t || "tongyong" == t) {
            if (null == cc.sys.localStorage.getItem("tongYiXieYi")) return void(this.XieYiNode.active = !0);
            this.hotUpdateRun = !0
        } else this.scheduleOnce(function() {
            e.hotUpdateRun = !0
        },
        .5)
    },
    t.prototype.loadSubpackage = function() {
        for (var e = this,
        t = function(t) {
            cc.assetManager.loadBundle(a.loadSubList[t],
            function(a) {
                a ? console.log(e.loadSubList[t] + "加载失败 err:", a) : e.addSubpackage()
            })
        },
        a = this, o = 0; o < this.loadSubList.length; o++) t(o)
    },
    t.prototype.addSubpackage = function() {
        this.loadNum++,
        this.loadNum >= this.loadSubList.length && (this.hotUpdateRun = !0)
    },
    t.prototype.androidEvent = function() {
        var e = this;
        cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID ? r.default.get().loadAdConfig() : cc.sys.os == cc.sys.OS_IOS && c.default.get().loadAdConfig(), cc.game.on("showMask",
        function() {
            console.log("接收显示mask"),
            window.MaskNode || cc.resources.load("prefab/prefabPool/common/Mask", cc.Prefab,
            function(e, t) {
                if (e) console.log("mask加载失败 err:" + e);
                else {
                    var a = cc.instantiate(t);
                    a.parent = cc.find("Canvas"),
                    window.MaskNode = a
                }
            })
        }), cc.game.on("hideMask",
        function() {
            console.log("接收隐藏mask"),
            window.MaskNode && (window.MaskNode.destroy(), window.MaskNode = null)
        }), cc.game.on("showShiMing",
        function() {
            console.log("接收 showShiMing"),
            e.scheduleOnce(function() {
                e.ShiMingNode.active = !0
            },
            .5)
        }), cc.game.on("shiMingComplete",
        function() {
            e.hotUpdateRun = !0,
            e.cehckHotUpdate()
        }), cc.game.on("hotUpdateComplete",
        function() {
            null != cc.sys.localStorage.getItem("tongYiXieYi") && e.startGame()
        }), cc.game.on("needHotUpdate",
        function() {
            console.log("监听到需要热"),
            e.isShowHotUpdate = !0
        }), cc.game.on("tip",
        function() {}))
    },
    t.prototype.startGame = function() {
        this.runScene(),
        this.sendJavaInitAndroidAd()
    },
    t.prototype.sendJavaInitAndroidAd = function() {
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod(r.default.get().javaUrl, "initAd", "()V") : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(c.default.get().ocUrl, "initAd")
    },
    t.prototype.runScene = function() {
        cc.director.loadScene("helloworld")
    },
    t.prototype.cehckHotUpdate = function() {
        console.log("cehckHotUpdate :", this.isShowHotUpdate),
        this.isShowHotUpdate ? (this.hotUpdateBg.active = !0, this.hotUpdateView1.active = !0, this.hotUpdateRun = !1) : (this.hotUpdateRun = !1, this.startGame())
    },
    t.prototype.update = function() {
        this.hotUpdateRun && (10 == this.hotUpdateNum ? (this.hotUpdateNum = 0, this.cehckHotUpdate()) : this.hotUpdateNum++)
    },
    n([l(cc.Node)], t.prototype, "XieYiNode", void 0),
    n([l(cc.Node)], t.prototype, "ShiMingNode", void 0),
    n([l(cc.Node)], t.prototype, "hotUpdateBg", void 0),
    n([l(cc.Node)], t.prototype, "hotUpdateView1", void 0),
    n([d], t)
} (cc.Component);
a.default = u