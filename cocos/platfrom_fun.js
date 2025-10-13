var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
});
var o = e("poolNodeMager"),
i = e("videoEvent"),
n = e("bannerEvent"),
r = e("interstitialEvent"),
c = e("shareEvent"),
s = e("createVideo"),
d = e("videoEvent_ks"),
l = e("createVideo_ks"),
u = e("KEY"),
p = e("EventTargetMager"),
h = e("AndroidApi"),
_ = e("IosApi"),
f = e("4399GameBox"),
g = function() {
    function e() {
        this.channel = "",
        this.appNames = ["Douyin", "Toutiao", "news_article_lite"],
        this.appName = null,
        this.classSchedulCom = null
    }
    return e.getInstance = function() {
        return this.instance || (this.instance = new e),
        this.instance
    },
    e.prototype.init = function() {
        var e = "1ffklcjd18ge5djn9g",
        t = ["de8h6ka30jn7l77g0n"],
        a = "rtdd7q9pce3gfk3j20";
        console.log("hhhhh"),
        window.tt ? (console.log("11111"), this.systemIfon = tt.getSystemInfoSync(), this.screenIfon = tt.getLaunchOptionsSync(), this.ad_videoEvent = new i.default, this.createVideoEvent = new s.default, this.systemIfon && (this.appName = this.systemIfon.appName)) : window.kwaigame ? (console.log("2222222"), kwaigame.readyGo(), e = "2300002931_01", t = [""], a = "2300002931_02", this.ad_videoEvent = new d.default, this.createVideoEvent = new l.default) : window.gamebox ? (f.default.get().init(), window.gamebox.login({
            success: function(e) {
                e.code ? console.log("登录成功" + e) : console.log("登录失败！" + e.errMsg)
            }
        }), this.ad_videoEvent = new i.default, this.createVideoEvent = new s.default) : (this.ad_videoEvent = new i.default, this.createVideoEvent = new s.default),
        this.ad_videoEvent.init(e),
        this.ad_bannerEvent = new n.default,
        this.ad_bannerEvent.init(t),
        this.ad_interstitial = new r.default,
        this.ad_interstitial.init(a),
        this.shareEvent = new c.default,
        this.shareEvent.init(),
        this.createVideoEvent.init(),
        p._EventTargetMager.emit("loadingRes")
    },
    e.prototype.loadViedeo = function() {
        this.ad_videoEvent.loadViedeo()
    },
    e.prototype.add_reportAnalytics = function(e, t, a) {
        if (window.tt) {
            var o = {};
            if (!tt.reportAnalytics) return;
            a || (a = e),
            t ? o[t] = a: t = e,
            tt.reportAnalytics(e, o)
        }
    },
    e.prototype.getTime = function(e) {
        return new Promise(function(t) {
            e ? t(e) : cc.assetManager.loadRemote("",
            function(a, o) {
                console.log(a, o),
                a ? (console.log("---------获取服务器时间失败！"), e = new Date().getTime()) : o && (console.log("---------获取服务器时间成功！", new Date(JSON.parse(o._$nativeAsset).sysTime2).getTime()), e = new Date(JSON.parse(o._$nativeAsset).sysTime2).getTime()),
                t(e)
            })
        })
    },
    e.prototype.showAdVideo = function(e, t, a) {
        if (void 0 === t && (t = void 0), void 0 === a && (a = !1), cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) h.default.instance.showVideoAd(e, t);
        else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) _.default.instance.showVideoAd(e, t);
        else if (window.hasOwnProperty("gamebox")) f.default.get().showVideoAd(e, !0, t);
        else if (window.hasOwnProperty("h5api")) {
            console.log("4399 h5");
            var o = function(a) {
                console.log("代码:" + a.code + ",消息:" + a.message),
                1e4 === a.code ? (console.log("开始播放"), cc.director.pause()) : 10001 === a.code ? (console.log("播放结束"), cc.director.resume(), e && e()) : (console.log("广告异常"), cc.director.resume(), t && t())
            };
            window.h5api.canPlayAd(function(e) {
                console.log("是否可播放广告", e.canPlayAd, "剩余次数", e.remain),
                window.h5api.playAd(o)
            })
        } else this.ad_videoEvent.autoAgainPlayTimes = 0,
        this.ad_videoEvent.autoPlayFlag = a,
        this.ad_videoEvent.successCb = e,
        this.ad_videoEvent.failCb = t,
        this.ad_videoEvent.startVideoAd(e, t)
    },
    e.prototype.showBanner = function(e) {
        void 0 === e && (e = 2),
        this.ad_bannerEvent.isShowBanner = !0,
        cc.sys.platform === cc.sys.BYTEDANCE_GAME && this.ad_bannerEvent.showBannerAd(e)
    },
    e.prototype.updateBanner = function() {
        cc.sys.platform === cc.sys.BYTEDANCE_GAME && this.ad_bannerEvent.showBannerAd(4)
    },
    e.prototype.hideBanner = function() {
        this.ad_bannerEvent.isShowBanner = !1,
        cc.sys.platform === cc.sys.BYTEDANCE_GAME && this.ad_bannerEvent.showBannerAd()
    },
    e.prototype.showInterstitalAd = function(e) {
        if (window.gamebox) f.default.get().showInterstitialAd();
        else if (e) {
            if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) return console.log("显示全屏视频类型"),
            void h.default.instance.showInterstitialAd2();
            if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) return console.log("ios显示全屏视频类型"),
            void setTimeout(function() {},
            500)
        } else this.ad_interstitial.showAd()
    },
    e.prototype.startCreateVideo = function() {
        console.log("开始录制"),
        this.createVideoEvent.startCreate()
    },
    e.prototype.stopCreateVideo = function() {
        console.log("结束录制"),
        this.createVideoEvent.stopCreate()
    },
    e.prototype.onShare = function() {
        this.shareEvent.onShare()
    },
    e.prototype.onShareVideo = function(e) {
        if (!window.tt && !window.kwaigame) return e(!0);
        this.createVideoEvent.onShareVideo(e)
    },
    e.prototype.openAwemeUserProfile = function(e) {
        this.appName === this.appNames[0] ? cc.sys.platform == cc.sys.BYTEDANCE_GAME ? tt.openAwemeUserProfile({
            success: function(t) {
                t.hasFollowed && e && e(1)
            },
            fail: function(e) {
                console.log(e)
            }
        }) : e && e(1) : e(3)
    },
    e
} ();
a.default = g,
window._pl_fun = g,
window.showTip = function(e) {
    console.log("text:", e),
    o._poolNodeMager.getPoolNode(u.KEY.poolName.tipNode, void 0, !0, {
        str: e
    })
},
window.showMask = function() {
    cc.game.emit("showMask")
},
window.hideMask = function() {
    cc.game.emit("hideMask")
},
window.exitGame = function() {
    cc.game.end()
},
window.runGame = function() {
    cc.game.emit("runGame")
}