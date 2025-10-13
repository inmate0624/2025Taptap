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
        this.manager = void 0,
        this.videoPath = void 0,
        this.isCreateVing = void 0,
        this.startCreateVideoTime = void 0,
        this.initManager = function() {
            var e = this;
            this.manager = kwaigame.getGameRecorder(),
            this.manager.on("start",
            function() {
                console.log("-------------开始录屏------------");
                var t = new Date;
                e.startCreateVideoTime = Number(t.getTime().toString()),
                e.videoPath = void 0
            }),
            this.manager.on("stop",
            function(t) {
                var a = new Date;
                e.endCreateVideoTime = Number(a.getTime().toString()),
                e.endCreateVideoTime - e.startCreateVideoTime > 4e3 ? (e.videoPath = t.videoID, console.log("-------------结束录屏------------", t.videoID)) : console.log("-------------视频录制时间过短！------------")
            })
        },
        this.startCreate = function() {
            this.manager && (this.isCreateVing || (this.isCreateVing = !0, this.manager.start()))
        },
        this.stopCreate = function() {
            this.manager && (this.isCreateVing = !1, this.manager.stop())
        },
        this.onShareVideo = function(e) {
            if (null == this.videoPath) return i._poolNodeMager.getPoolNode(o.KEY.poolName.tipNode, void 0, !0, {
                str: "暂无可分享的录屏!"
            }),
            void e(!0);
            this.manager.publishVideo({
                video: this.videoPath,
                callback: function(t) {
                    t ? (console.log("发布录屏失败： " + JSON.stringify(t)), e && e(!1)) : (console.log("发布录屏成功"), e && e(!0))
                }
            })
        }
    }
    return e.prototype.init = function() {
        this.initManager()
    },
    e
} ();
a.default = n