var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
});
var o = e("IosApi"),
i = function() {
    function e() {
        this.enabled = !1,
        this.isCreating = !1,
        this.channel = "",
        this.javaUrl = "org/cocos2dx/javascript/jcjSdk/jsCallJavaMager",
        this.isRelease = !0,
        this.closeBtnShowTime = 0,
        this.gameChaPingInterval_233 = 500
    }
    return e.get = function() {
        return null == e.instance && (e.instance = new e),
        e.instance
    },
    e.prototype.reLoadVideo = function() {},
    e.prototype.createInterstitialAd = function() {},
    e.prototype.showInterstitialAd = function() {
        this.showAd(1)
    },
    e.prototype.showInterstitialAd2 = function() {
        this.showAd(7)
    },
    e.prototype.showBanner = function() {
        this.showAd(2)
    },
    e.prototype.hideBanner = function() {
        this.showAd(3)
    },
    e.prototype.showVideoAd = function(e, t) {
        this.callback = e,
        t && (this.failCallBack = t),
        this.showAd(4)
    },
    e.prototype.showNativeAdType = function() {
        this.showAd(6)
    },
    e.prototype.showAd = function(e) {
        switch (e) {
            case 1:
                console.log("插屏广告类型");
            break;
            case 2:
                console.log("显示banner");
            break;
            case 3:
                console.log("隐藏banner");
            break;
            case 4:
                console.log("激励视频");
            break;
            case 6:
                console.log("原生广告");
            break;
            case 7:
                console.log("独立控制插屏广告");
        }
        this.t = new Date().getTime(),
        cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative && jsb.reflection.callStaticMethod(this.javaUrl, "callShowAd", "(I)V", e)
    },
    e.prototype.runCallBack = function() {
        this.e = new Date().getTime(),
        this.e - this.t > 12e3 && (this.callback && this.callback(), this.callback = null)
    },
    e.prototype.runFailCallBack = function() {
        this.failCallBack && this.failCallBack(),
        this.failCallBack = null
    },
    e.prototype.oppoMore = function() {
        cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative && jsb.reflection.callStaticMethod(this.javaUrl, "oppoJumpMore", "()V")
    },
    e.prototype.showToast = function(e, t, a) {
        void 0 === t && (t = "none"),
        void 0 === a && (a = 2e3),
        cc.game.emit("tip", e)
    },
    e.prototype.loadVideoAd = function() {},
    e.prototype.onShareAppMessage = function() {},
    e.prototype.onShareAppVideo = function() {},
    e.prototype.openAwemeUserProfile = function() {},
    e.prototype.onShow = function() {},
    e.prototype.showShareMenu = function() {},
    e.prototype.startRecordVideo = function() {},
    e.prototype.clearVideo = function() {},
    e.prototype.stopRecordVideo = function() {},
    e.prototype.isRecordVideo = function() {
        return this.isCreating
    },
    e.prototype.setFrameRate = function() {},
    e.prototype.isPlatform = function() {
        return ! 0
    },
    e.prototype.loadRecordVideo = function() {},
    e.prototype.reportAnalytics = function() {},
    e.prototype.showXieYiAndYongHuBtn = function(t) {
        var a = this,
        o = t;
        e.get().createTextBtn(o, {
            str: "《用户协议》",
            pos: cc.v2( - 110, -190)
        },
        function() {
            console.log("用户协议");
            var t = e.get().sendJavaGetChannel();
            "ShanWan" == t || "7723" == t || "XiaZaiZhan" == t || "XiaZaiZhan2" == t || "XiaZaiZhan3" == t || "XiaZaiZhan4" == t ? e.get().open("") : "MoMoYu" == t ? a.showMoMoYuXieYi(1) : e.get().open("")
        }),
        e.get().createTextBtn(o, {
            str: "《隐私协议》",
            pos: cc.v2(110, -190)
        },
        function() {
            console.log("隐私协议");
            var t = e.get().sendJavaGetChannel();
            "233" == e.get().sendJavaGetChannel() ? e.get().open("") : "ShanWan" == t || "7723" == t || "XiaZaiZhan" == t || "XiaZaiZhan2" == t || "XiaZaiZhan3" == t || "XiaZaiZhan4" == t ? e.get().open("") : "MoMoYu" == t ? a.showMoMoYuXieYi(2) : e.get().open("")
        });
        var i = new cc.Node;
        i.color = cc.Color.BLACK.fromHEX("#32130D"),
        i.y = -130,
        i.parent = o;
        var n = i.addComponent(cc.Label);
        n.fontSize = 30,
        n.lineHeight = 30,
        "taptap" == e.get().sendJavaGetChannel() || "VIVO" != e.get().sendJavaGetChannel() && "OPPO" != e.get().sendJavaGetChannel() || (n.string = "客服QQ：3356565961")
    },
    e.prototype.loadAdConfig = function() {
        var e = this;
        if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
            var t = jsb.reflection.callStaticMethod(this.javaUrl, "getJsonPath", "()Ljava/lang/String;");
            if (null == t || null == t || "" == t) return;
            t += ".json?time=" + new Date().getTime(),
            console.log("请求path:" + t),
            cc.assetManager.loadRemote(t, cc.JsonAsset,
            function(t, a) {
                if (t) console.log("加载远程广告配置失败 err:" + t);
                else {
                    var o = a.json,
                    i = JSON.stringify(o);
                    console.log("读取到的json:" + i),
                    null != o.fanhui_time && (console.log("设置按钮延迟时间:", o.fanhui_time), e.closeBtnShowTime = o.fanhui_time),
                    null != o.gameChaPingInterval && (console.log("设置间隔时间 ", o.gameChaPingInterval), e.gameChaPingInterval_233 = o.gameChaPingInterval),
                    cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative && jsb.reflection.callStaticMethod(e.javaUrl, "initAdConfig", "(Ljava/lang/String;)V", i)
                }
            })
        }
    },
    e.prototype.open = function(e) {
        if (console.log("url:", e), cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) jsb.reflection.callStaticMethod(o.default.get().ocUrl, "showUrl:", e);
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
    e.prototype.createWebView = function(e, t) {
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
    e.prototype.sendJavaGetChannel = function() {
        return "" == this.channel && cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative ? (this.channel = jsb.reflection.callStaticMethod(this.javaUrl, "getSdkChannel", "()Ljava/lang/String;"), console.log("sdk渠道:", this.channel)) : "" == this.channel && cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative && (this.channel = "IOS", console.log("sdk渠道:", this.channel)),
        this.channel
    },
    e.prototype.showMoMoYuXieYi = function(t) {
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod(e.get().javaUrl, "showMoMoYuXieYi", "(I)V", t)
    },
    e.instance = null,
    e
} ();
a.default = i,
window.AndroidAd = i.get()