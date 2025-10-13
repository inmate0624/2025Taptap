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
            cc.sys.platform === cc.sys.BYTEDANCE_GAME && tt.getGameRecorderManager && (this.manager = tt.getGameRecorderManager(), this.manager.onStart(function() {
                console.log("-------------开始录屏------------");
                var t = new Date;
                e.startCreateVideoTime = Number(t.getTime().toString()),
                e.videoPath = void 0
            }), this.manager.onStop(function(t) {
                var a = new Date;
                e.endCreateVideoTime = Number(a.getTime().toString()),
                e.endCreateVideoTime - e.startCreateVideoTime > 4e3 && (e.videoPath = t.videoPath, console.log("-------------结束录屏------------", t.videoPath))
            }))
        },
        this.startCreate = function() {
            cc.sys.platform == cc.sys.BYTEDANCE_GAME && this.manager && (this.isCreateVing || (this.isCreateVing = !0, this.manager.start({
                duration: 200
            })))
        },
        this.stopCreate = function() {
            cc.sys.platform == cc.sys.BYTEDANCE_GAME && this.manager && (this.isCreateVing = !1, this.manager.stop())
        },
        this.onShareVideo = function(e) {
            if (null == this.videoPath) return i._poolNodeMager.getPoolNode(o.KEY.poolName.tipNode, cc.find("Canvas"), !0, {
                str: "暂无录屏可分享!"
            }),
            void e(!1);
            tt.shareAppMessage({
                channel: "video",
                title: "堆叠大陆",
                desc: "来试试你能生存多少天!",
                imageUrl: "",
                templateId: "",
                query: "",
                extra: {
                    videoPath: this.videoPath,
                    videoTopics: ["堆叠大陆"],
                    hashtag_list: ["堆叠大陆"],
                    video_title: "来试试你能生存多少天!"
                },
                success: function() {
                    console.log("分享视频成功"),
                    e && e(!0)
                },
                fail: function() {
                    console.log("分享视频失败"),
                    e && e(!1)
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