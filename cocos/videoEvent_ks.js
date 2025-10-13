var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
});
var o = e("KEY"),
i = e("poolNodeMager"),
n = function() {
    function e() {
        this.videoAd = void 0,
        this.failCb = void 0,
        this.successCb = void 0,
        this.videoLoad = !1,
        this.autoAgainPlayTimes = 0,
        this.autoPlayFlag = !1,
        this.adId = "",
        this.isDisable = !1,
        this.idDebug = !1,
        this.onInitVedio = function() {
            if (window.kwaigame && kwaigame.createRewardedVideoAd) {
                if (this.videoAd = kwaigame.createRewardedVideoAd({
                    adUnitId: this.adId
                }), !this.videoAd) return void console.log("广告组件出现问题");
                var e = this;
                this.videoAd.onClose(function(e) {
                    e && e.isEnded || i._poolNodeMager.getPoolNode(o.KEY.poolName.tipNode, void 0, !0, {
                        str: "观看完整视频才能获得奖励"
                    })
                }),
                e.videoAd.onReward(function() {
                    if (e.successCb && e.successCb(), 0 == e.autoAgainPlayTimes && e.autoPlayFlag) return e.autoAgainPlayTimes++,
                    e.successCb = void 0,
                    e.failCb = void 0,
                    void e.startVideoAd()
                })
            }
        },
        this.startVideoAd = function() {
            var e = this;
            this.isDisable || (this.isDisable = !0, setTimeout(function() {
                e.isDisable = !1
            },
            800), window.kwaigame ? this.videoAd ? this.videoAd.show({
                success: function() {},
                fail: function() {
                    this.showToast("视频显示失败, 稍后重试", "none")
                }
            }) : this.autoPlayFlag || i._poolNodeMager.getPoolNode(o.KEY.poolName.tipNode, void 0, !0, {
                str: "广告获取失败,请重试"
            }) : this.successCb && this.successCb())
        }
    }
    return e.prototype.init = function(e) {
        this.adId = e,
        this.onInitVedio()
    },
    e.prototype.loadViedeo = function() {},
    e
} ();
a.default = n