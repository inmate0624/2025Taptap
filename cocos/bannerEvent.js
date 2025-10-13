var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
});
var o = function() {
    function e() {
        this.isShowBanner = !1,
        this.bannerHeight = 180,
        this.bannerIdIndex = 0,
        this.showTimes = 0,
        this.showBannerAd = function(e) {
            var t = this;
            if (cc.sys.platform == cc.sys.BYTEDANCE_GAME && tt.createBannerAd) {
                if (this.bannerAd) if (this.isShowBanner) {
                    if (2 == e) return this.showTimes++,
                    void this.bannerAd.show()
                } else this.bannerAd.hide(),
                this.bannerIdIndex++,
                this.bannerIdIndex >= this.bannerIdList.length && (this.bannerIdIndex = this.bannerIdIndex % this.bannerIdList.length),
                this.bannerAd.destroy();
                this.showTimes++;
                var a = this.bannerIdList[this.bannerIdIndex];
                this.bannerAd = tt.createBannerAd({
                    adUnitId: a,
                    adIntervals: 30,
                    style: {
                        left: 5,
                        top: 500,
                        width: this.screenIfon.screenHeight - 80
                    }
                }),
                this.bannerAd.onError(function() {}),
                this.bannerAd.onLoad(function() {}),
                this.bannerAd.onResize(function(e) {
                    t.bannerHeight = e.height,
                    t.bannerAd.style.left = (t.screenIfon.screenWidth - e.width) / 2,
                    t.bannerAd.style.top = t.screenIfon.screenHeight - e.height
                }),
                this.isShowBanner ? this.bannerAd.show() : this.bannerAd.hide()
            }
        }
    }
    return e.prototype.init = function(e) {
        this.bannerIdList = e,
        this.bannerIdIndex = Math.floor(Math.random() * this.bannerIdList.length),
        cc.sys.platform === cc.sys.BYTEDANCE_GAME && (this.systemIfon = tt.getSystemInfoSync())
    },
    e
} ();
a.default = o