var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
});
var o = e("KEY"),
i = e("as_util"),
n = e("gameDataManager"),
r = e("poolNodeMager"),
c = function() {
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
            var e = this;
            window.tt && tt.createRewardedVideoAd && (this.videoAd = tt.createRewardedVideoAd({
                adUnitId: this.adId
            }), this.videoAd.onLoad(function() {
                e.videoLoad = !0,
                console.log("---------------window.globalData.comFunVideo 加载成功!")
            }), this.videoAd.onError(function(t) {
                e.videoLoad = !1,
                console.log("---------------window.globalData.comFunVideo 加载失败!", t)
            }), this.videoAd.onClose(function(t) {
                if (e.videoAd.load().then(function() {
                    console.log("手动加载成功"),
                    e.videoLoad = !0
                }).
                catch(function(t) {
                    console.log("广告组件出现问题", t),
                    e.videoAd.load().then(function() {
                        e.videoLoad = !0,
                        console.log("手动加载成功")
                    })
                }), t.isEnded) {
                    if (e.successCb && e.successCb(), 0 == e.autoAgainPlayTimes && e.autoPlayFlag) return e.autoAgainPlayTimes++,
                    e.successCb = void 0,
                    e.failCb = void 0,
                    void e.startVideoAd()
                } else e.autoPlayFlag && 0 == e.autoAgainPlayTimes ? (e.autoAgainPlayTimes++, e.startVideoAd()) : (e.failCb && e.failCb(), r._poolNodeMager.getPoolNode(o.KEY.poolName.tipNode, void 0, !0, {
                    str: "观看完整视频才能获得奖励"
                }), e.successCb = void 0, e.failCb = void 0)
            }))
        },
        this.startVideoAd = function() {
            var e = this;
            if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) return console.log("显示激励视频"),
            void jsb.reflection.callStaticMethod("org/cocos2dx/javascript/jcjSdk/jsCallJavaMager", "callShowAd", "(I)V", 4);
            if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) return console.log("ios显示激励视频"),
            void jsb.reflection.callStaticMethod(i.as_util.iosClassPath, "callShowAd:", 4);
            if (window.tt) {
                if (!n._gameStateData.is_video) return void r._poolNodeMager.getPoolNode(o.KEY.poolName.tipNode, void 0, !0, {
                    str: "广告获取失败!"
                });
                if (!tt.createRewardedVideoAd || "preview" === this.version()) return this.successCb();
                if (this.idDebug) return void(this.successCb && this.successCb());
                this.videoLoad ? this.videoAd.show() : (this.autoPlayFlag || r._poolNodeMager.getPoolNode(o.KEY.poolName.tipNode, void 0, !0, {
                    str: "广告获取失败,请重试"
                }), this.videoAd.load().then(function() {
                    if (console.log("手动加载成功"), e.videoLoad = !0, e.autoPlayFlag) return e.videoAd.show()
                }).
                catch(function(t) {
                    console.log("广告组件出现问题", t),
                    e.videoAd.load().then(function() {
                        if (console.log("手动加载成功"), e.videoLoad = !0, e.autoPlayFlag) return e.videoAd.show()
                    })
                }))
            } else this.successCb && this.successCb()
        }
    }
    return e.prototype.init = function(e) {
        this.adId = e,
        this.onInitVedio()
    },
    e.prototype.loadViedeo = function() {
        var e = this;
        window.tt && (console.log("预加载广告"), this.videoAd.load().then(function() {
            console.log("手动加载成功"),
            e.videoLoad = !0
        }).
        catch(function(t) {
            console.log("广告组件出现问题", t),
            e.videoAd.load().then(function() {
                console.log("手动加载成功"),
                e.videoLoad = !0
            })
        }))
    },
    e.prototype.version = function() {
        return tt.env.VERSION || "preview"
    },
    e
} ();
a.default = c