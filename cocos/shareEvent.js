var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
});
var o = function() {
    function e() {
        this.onShare = function() {
            cc.sys.platform === cc.sys.BYTEDANCE_GAME && (tt.showShareMenu({
                withShareTicket: !0
            }), tt.aldShareAppMessage({
                title: "你能生存多少天?",
                imageUrl: "./share.jpg"
            }))
        },
        this.judgeReward = function() {
            cc.sys.platform == cc.sys.BYTEDANCE_GAME && (tt.showShareMenu({
                withShareTicket: !1
            }), tt.onShareAppMessage(function() {
                return {
                    title: "你能生存多少天",
                    imageUrl: "./share.jpg",
                    query: "k1=v1&ke=v2"
                }
            }), tt.onShow(function(e) {
                console.log("启动参数如下：", e.query),
                console.log("来源信息如下：", e.refererInfo),
                e.query && e.query.roomid && e.query.roomid && cc.director.loadScene("pvpScene")
            }))
        }
    }
    return e.prototype.init = function() {
        this.judgeReward()
    },
    e
} ();
a.default = o