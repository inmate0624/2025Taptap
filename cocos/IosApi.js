var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
});
var o = function() {
    function e() {
        this.enabled = !1,
        this.isCreating = !1,
        this.channel = "",
        this.ocUrl = "jsCallJavaMager",
        this.isRelease = !0,
        this.closeBtnShowTime = 0,
        this.isdebug = !1
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
    e.prototype.showBanner = function() {
        this.showAd(2)
    },
    e.prototype.hideBanner = function() {
        this.showAd(3)
    },
    e.prototype.showVideoAd = function(e, t) {
        this.isdebug ? e && e() : (this.callback = e, t && (this.failCallBack = t), this.showAd(4))
    },
    e.prototype.showNativeAdType = function() {
        this.showAd(6)
    },
    e.prototype.showAd = function(e) {
        switch (e) {
            case 1:
                console.log("ios插屏广告类型");
            break;
            case 2:
                console.log("ios显示banner");
            break;
            case 3:
                console.log("ios隐藏banner");
            break;
            case 4:
                console.log("ios激励视频");
            break;
            case 6:
                console.log("ios原生广告");
        }
        this.t = new Date().getTime(),
        cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative && jsb.reflection.callStaticMethod(this.ocUrl, "callShowAd:", e)
    },
    e.prototype.runCallBack = function() {
        this.e = new Date().getTime(),
        this.e - this.t > 12e3 && (this.callback && this.callback(), this.callback = null)
    },
    e.prototype.runFailCallBack = function() {
        this.failCallBack && this.failCallBack(),
        this.failCallBack = null
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
    e.prototype.loadAdConfig = function() {
        var t = this;
        if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative) {
            var a = "" + new Date().getTime();
            cc.assetManager.loadRemote(a, cc.JsonAsset,
            function(a, o) {
                if (a) console.log("加载远程广告配置失败 err:" + a);
                else {
                    var i = o.json,
                    n = JSON.stringify(i);
                    console.log("读取到的json:" + n),
                    null != i.fanhui_time && (console.log("设置按钮延迟时间:", i.fanhui_time), t.closeBtnShowTime = i.fanhui_time);
                    var r = Number(i.fanhui_AD),
                    c = i.interval_time_AD.toFixed(1),
                    s = Number(i.yuansheng_mubanxuanran_AD),
                    d = Number(i.quanpingshiping_AD);
                    null != i.isdebug && (t.isdebug = i.isdebug),
                    cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative && jsb.reflection.callStaticMethod(e.get().ocUrl, "initAdConfig:interval_time_AD:yuansheng_mubanxuanran_AD:quanpingshiping_AD:", r, c, s, d)
                }
            })
        }
    },
    e.prototype.open = function(t) {
        if (console.log("url:", t), cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) jsb.reflection.callStaticMethod(e.get().ocUrl, "showUrl:", t);
        else {
            var a = cc.winSize;
            this.createWebView({
                url: t + "?time=" + new Date().getTime(),
                width: a.width,
                height: a.height - 70,
                parent: null
            },
            {
                btnUrl: "texture/androidViewCloseBtn",
                width: 50,
                height: 50,
                x: a.width / 2 - 25 - 10,
                y: a.height / 2 - 25 - 15
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
        return "" == this.channel && cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative && (this.channel = jsb.reflection.callStaticMethod(this.ocUrl, "getSdkChannel", "()Ljava/lang/String;"), console.log("sdk渠道:", this.channel)),
        this.channel
    },
    e.instance = null,
    e
} ();
a.default = o,
window.IosApi = o.get()