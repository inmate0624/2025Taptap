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
        this.javaUrl = "",
        this.isRelease = !0,
        this.closeBtnShowTime = 0,
        this.gameChaPingInterval_233 = 500,
        this.gamebox = null,
        this.videoAd = null,
        this.interstitialAd = null,
        this.bannerAd = null
    }
    return e.prototype.init = function() {
        console.log("初始化4399广告"),
        this.loadVideo(),
        this.loadBanner(),
        this.loadInterstitialAd()
    },
    e.get = function() {
        return null == e.instance && (e.instance = new e),
        null == e.instance.gamebox && (e.instance.gamebox = window.gamebox),
        e.instance
    },
    e.prototype.loadVideo = function() {
        var e = this;
        this.videoAd = this.gamebox.createRewardedVideoAd(),
        this.videoAd.load(),
        this.videoAd.onLoad(function(e) {
            console.info("RewardedVideo onLoad" + e)
        }),
        this.videoAd.onError(function(e) {
            console.info("RewardedVideo onError" + e)
        }),
        this.videoAd.onClose(function(t) {
            console.info("RewardedVideo onClose" + t),
            t.isEnded && e.callback && e.callback()
        }),
        this.videoAd.onCompleted(function(e) {
            console.info("RewardedVideo onCompleted" + e)
        })
    },
    e.prototype.loadInterstitialAd = function() {
        this.interstitialAd = this.gamebox.createInterstitialAd(),
        this.interstitialAd.onLoad(function(e) {
            console.info("InterstitialAd onLoad" + e)
        }),
        this.interstitialAd.onClose(function(e) {
            console.info("InterstitialAd onClose" + e)
        }),
        this.interstitialAd.onError(function(e) {
            console.info("InterstitialAd onError" + e)
        })
    },
    e.prototype.showInterstitialAd = function() {
        this.interstitialAd.show()
    },
    e.prototype.loadBanner = function() {
        var e = this.gamebox.getSystemInfoSync().pixelRatio,
        t = 320 * e,
        a = 50 * e,
        o = (this.gamebox.getSystemInfoSync().screenWidth * e - t) / 2,
        i = this.gamebox.getSystemInfoSync().screenHeight * e - a;
        this.bannerAd = this.gamebox.createBannerAd({
            style: {
                width: t,
                height: a,
                left: o,
                top: i
            }
        }),
        this.bannerAd.onLoad(function(e) {
            console.info("Banner onLoad" + e)
        }),
        this.bannerAd.onError(function(e) {
            console.info("Banner onError" + e)
        })
    },
    e.prototype.showBanner = function() {
        this.bannerAd.show()
    },
    e.prototype.hideBanner = function() {
        this.bannerAd.hide()
    },
    e.prototype.showVideoAd = function(e, t, a) {
        void 0 === t && (t = !0),
        this.callback = e,
        a && (this.failCallBack = a),
        this.t = new Date().getTime(),
        this.videoAd.show()
    },
    e.prototype.runCallBack = function() {
        this.e = new Date().getTime(),
        this.e - this.t > 5e3 && (this.callback && this.callback(), this.callback = null)
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
    e.instance = null,
    e
} ();
a.default = o,
window.GameBoxApiAd = o.get()