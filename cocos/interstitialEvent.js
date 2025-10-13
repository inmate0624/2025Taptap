var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
});
var o = e("AndroidApi"),
i = e("IosApi"),
n = function() {
    function e() {
        this.interstitialAd = void 0,
        this.adId = "",
        this.judge = !1,
        this.createrAd = function() {
            if (window.tt && tt.createInterstitialAd) {
                var e = this;
                this.interstitialAd = tt.createInterstitialAd({
                    adUnitId: e.adId
                }),
                console.log("准备插屏广告！", this.interstitialAd),
                this.interstitialAd.onError(function(e) {
                    console.log("插屏广告异常！", e)
                })
            } else window.kwaigame && window.kwaigame.createInterstitialAd && (e = this, this.interstitialAd = window.kwaigame.createInterstitialAd({
                adUnitId: e.adId
            }), console.log("准备插屏广告！", this.interstitialAd), this.interstitialAd.onError(function(e) {
                console.log("插屏广告异常！", e)
            }))
        },
        this.showAd = function() {
            var e = this;
            if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) return console.log("显示全屏视频类型"),
            void o.default.instance.showInterstitialAd();
            if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) return console.log("ios显示全屏视频类型"),
            void setTimeout(function() {
                i.default.instance.showInterstitialAd()
            },
            500);
            if (window.kwaigame) {
                if (!this.judge || !this.interstitialAd) return;
                return this.judge = !1,
                console.log("---------------this.interstitialAd:", this.interstitialAd),
                this.interstitialAd.show(),
                void setTimeout(function() {
                    e.judge = !0,
                    e.createrAd()
                },
                6e4)
            }
            this.judge && window.tt && this.interstitialAd && (this.judge = !1, console.log("---------------this.interstitialAd:", this.interstitialAd), this.interstitialAd.show(), setTimeout(function() {
                e.judge = !0,
                e.createrAd()
            },
            6e4))
        }
    }
    return e.prototype.init = function(e) {
        var t = this;
        this.adId = e,
        window.tt && "development" != tt.env.VERSION ? (this.createrAd(), setTimeout(function() {
            t.judge = !0
        },
        6e4)) : window.kwaigame && (this.createrAd(), setTimeout(function() {
            t.judge = !0
        },
        6e4))
    },
    e
} ();
a.default = n