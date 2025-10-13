var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.ad_type = a.as_util = void 0;
var o = function() {
    function e() {
        this.iosClassPath = "jsCallJavaMager",
        this.video_callback = null
    }
    return Object.defineProperty(e, "Instance", {
        get: function() {
            return this._instace || (this._instace = new e),
            this._instace
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.getJsons = function(e) {
        return console.log("----------------getJsons url:", e),
        new Promise(function(t) {
            var a = new XMLHttpRequest;
            a.onreadystatechange = function() {
                if (4 == a.readyState && a.status >= 200 && a.status < 400) {
                    var o = a.responseText,
                    i = JSON.parse(o);
                    t(i)
                } else 4 == a.readyState && 200 != a.status && (console.error("jss网络请求错了啊"), console.log("jss readyState", a.readyState), console.log("jss status", a.status), console.log("jss 地址", e), t(null))
            },
            a.open("GET", e, !0),
            a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            a.send()
        })
    },
    e.prototype.show_jili_video = function(e) {
        console.log("显示激励视频类型"),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? (e && (this.video_callback = e), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jcjSdk/jsCallJavaMager", "callShowAd", "(I)V", 4)) : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? (e && (this.video_callback = e), jsb.reflection.callStaticMethod(this.iosClassPath, "callShowAd:", 4)) : e()
    },
    e.prototype.jili_video_reward = function() {
        console.log("激励视频发奖励"),
        this.video_callback && (this.video_callback(), this.video_callback = null)
    },
    e.prototype.jili_video_back = function() {
        console.log("激励视频被退出"),
        this.video_callback = null
    },
    e.prototype.back_ui = function() {
        console.log("弹出全屏"),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jcjSdk/jsCallJavaMager", "callShowAd", "(I)V", 1) : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(this.iosClassPath, "callShowAd:", 1)
    },
    e.prototype.show_banner = function() {
        console.log("显示原生banner"),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jcjSdk/jsCallJavaMager", "callShowAd", "(I)V", 2) : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(this.iosClassPath, "callShowAd:", 2)
    },
    e.prototype.hide_banner = function() {
        console.log("隐藏原生banner"),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jcjSdk/jsCallJavaMager", "callShowAd", "(I)V", 3) : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && jsb.reflection.callStaticMethod(this.iosClassPath, "callShowAd:", 3)
    },
    e.prototype.sendJavaGetChannel = function() {
        var e = "";
        return cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID && (e = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jcjSdk/jsCallJavaMager", "setSdk", "()Ljava/lang/String;"), console.log("渠道:", e)),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && (e = "IOS", console.log("渠道:", e)),
        e
    },
    e.prototype.sendJavaGetDeviceId = function() {
        var e = "";
        return cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID && (e = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jcjSdk/jsCallJavaMager", "getDeviceId", "()Ljava/lang/String;"), console.log("DeviceId:", e)),
        e
    },
    e.prototype.open = function(e) {
        console.log("url:", e);
        var t = cc.winSize;
        this.createWebView({
            url: e + "?time=" + new Date().getTime(),
            width: t.width,
            height: t.height - 50,
            parent: null
        },
        {
            btnUrl: "image/guanBi",
            width: 40,
            height: 40,
            x: t.width / 2 - 25 - 10,
            y: t.height / 2 - 25 - 5
        })
    },
    e.prototype.createWebView = function(e, t) {
        var a = new cc.Node;
        a.width = e.width,
        a.height = e.height,
        null != e.parent ? a.parent = e.parent: a.parent = cc.find("Canvas"),
        a.zIndex = 9999;
        var o = new cc.Node;
        o.width = e.width,
        o.height = e.height,
        o.parent = a,
        o.y = -30,
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
    e.prototype.createMask = function() {},
    e.prototype.createBtn = function(e, t) {
        var a = new cc.Node;
        a.width = t.width,
        a.height = t.height,
        a.x = t.x,
        a.y = t.y,
        a.parent = e;
        var o = a.addComponent(cc.Sprite);
        cc.resources.load(t.url, cc.SpriteFrame,
        function(e, i) {
            e ? console.log("按钮加载错误 err:" + e) : (o.spriteFrame = i, a.width = t.width, a.height = t.height)
        }),
        a.once(cc.Node.EventType.TOUCH_END, t.callBack)
    },
    e.prototype.createTextBtn = function(e, t, a) {
        var o = new cc.Node;
        o.color = cc.Color.BLACK.fromHEX(t.color ? t.color: "#51AAF6"),
        o.setPosition(t.pos),
        o.parent = e;
        var i = o.addComponent(cc.Label);
        i.fontSize = 28,
        i.enableUnderline = !0,
        i.string = t.str,
        o.on(cc.Node.EventType.TOUCH_END, a, this)
    },
    e
} ();
a.as_util = o.Instance,
function(e) {
    e[e.quanping = 0] = "quanping",
    e[e.chaping = 1] = "chaping",
    e[e.jili = 2] = "jili",
    e[e.back_ui = 3] = "back_ui",
    e[e.show_banner = 4] = "show_banner",
    e[e.hide_banner = 5] = "hide_banner",
    e[e.kaiping = 6] = "kaiping",
    e[e.yinsi = 100] = "yinsi",
    e[e.yonghu = 101] = "yonghu"
} (a.ad_type || (a.ad_type = {})),
window.as_util = a.as_util