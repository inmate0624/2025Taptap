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
l = (s.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.clickJuJueNum = 0,
        t
    }
    return i(t, e),
    t.prototype.click_tongyi = function() {
        cc.sys.localStorage.setItem("tongYiXieYi", "yes");
        var e = r.default.get().sendJavaGetChannel();
        "VIVO" == e || "OPPO" == e || "IOS" == e || "MoMoYu" == e || "tongyong" == e ? this.showHotUpdate() : this.showShiMing(),
        this.node.active = !1
    },
    t.prototype.click_jujue = function() {
        cc.game.end()
    },
    t.prototype.click_yonghu = function() {
        var e = r.default.get().sendJavaGetChannel();
        "ShanWan" == e || "7723" == e || "XiaZaiZhan" == e || "XiaZaiZhan2" == e || "XiaZaiZhan3" == e || "XiaZaiZhan4" == e ? this.open("") : "MoMoYu" == e ? r.default.get().showMoMoYuXieYi(1) : this.open("")
    },
    t.prototype.click_yinsi = function() {
        var e = r.default.get().sendJavaGetChannel();
        "ShanWan" == e || "7723" == e || "XiaZaiZhan" == e || "XiaZaiZhan2" == e || "XiaZaiZhan3" == e || "XiaZaiZhan4" == e ? this.open("") : "MoMoYu" == e ? r.default.get().showMoMoYuXieYi(2) : this.open("")
    },
    t.prototype.open = function(e) {
        if (console.log("url:", e), cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) c.default.get().open(e);
        else {
            var t = cc.winSize;
            this.createWebView({
                url: e + "?time=" + new Date().getTime(),
                width: t.width,
                height: t.height - 70,
                parent: null
            },
            {
                btnUrl: "texture/androidViewCloseBtn",
                width: 50,
                height: 50,
                x: t.width / 2 - 25 - 10,
                y: t.height / 2 - 25 - 15
            })
        }
    },
    t.prototype.createWebView = function(e, t) {
        var a = new cc.Node;
        a.width = e.width,
        a.height = e.height,
        null != e.parent ? a.parent = e.parent: a.parent = cc.find("Canvas");
        var o = new cc.Node;
        o.width = e.width,
        o.height = e.height,
        o.parent = a,
        o.y = -35,
        o.addComponent(cc.WebView).url = e.url,
        this.createMask(a),
        this.createBtn(a, {
            url: t.btnUrl,
            width: t.width,
            height: t.height,
            x: t.x,
            y: t.y,
            callBack: function() {
                a.destroy()
            }
        })
    },
    t.prototype.createMask = function() {},
    t.prototype.createBtn = function(e, t) {
        var a = new cc.Node;
        a.width = t.width,
        a.height = t.height,
        a.x = t.x,
        a.y = t.y,
        a.parent = e;
        var o = a.addComponent(cc.Sprite);
        cc.resources.load(t.url, cc.SpriteFrame,
        function(e, i) {
            e ? console.log("按钮加载错误 err:" + e) : (o.spriteFrame = i, a.width = t.width, a.height = t.height, console.log("node:", a))
        }),
        a.once(cc.Node.EventType.TOUCH_END, t.callBack)
    },
    t.prototype.showShiMing = function() {
        console.log("发送"),
        cc.game.emit("showShiMing")
    },
    t.prototype.showHotUpdate = function() {
        cc.game.emit("shiMingComplete")
    },
    n([d], t)
} (cc.Component));
a.default = l