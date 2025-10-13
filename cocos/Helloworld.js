var e = require;
var t = module;
var a = exports;
var o, i = this && this.__extends || (o = function(e, t) {
    return (o = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array &&
    function(e, t) {
        e.__proto__ = t
    } ||
    function(e, t) {
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
    })(e, t)
},
function(e, t) {
    function a() {
        this.constructor = e
    }
    o(e, t),
    e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
}),
n = this && this.__decorate ||
function(e, t, a, o) {
    var i, n = arguments.length,
    r = n < 3 ? t: null === o ? o = Object.getOwnPropertyDescriptor(t, a) : o;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, a, o);
    else for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (r = (n < 3 ? i(r) : n > 3 ? i(t, a, r) : i(t, a)) || r);
    return n > 3 && r && Object.defineProperty(t, a, r),
    r
};
Object.defineProperty(a, "__esModule", {
    value: !0
});
var r = e("gameDataManager"),
c = e("commonFunction"),
s = cc._decorator,
d = s.ccclass,
l = (s.property, e("EventTargetMager")),
u = e("platfrom_fun"),
p = e("lq_collide_system"),
h = e("AndroidApi"),
_ = e("poolNodeMager"),
f = e("KEY"),
g = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.timeFlag = 0,
        t._resCount = 2,
        t._finishCount = 0,
        t.is_game = !1,
        t
    }
    return i(t, e),
    t.prototype.onLoad = function() {
        c.commonTool.fit_number(),
        window.kwaigame && kwaigame.readyGo(),
        r.UserDataManger.getInstace(),
        l._EventTargetMager.on("loadingRes", this.loadingEnd, this),
        l._EventTargetMager.on("runMainScene", this.runMainScene, this),
        this._resCount = 1,
        u.default.getInstance().init(),
        console.log("进入游戏掐蓝帆"),
        p.LQCollideSystem.is_enable = !0;
        var e = cc.director.getCollisionManager();
        e.enabled = !0,
        e.enabledDebugDraw = !0
    },
    t.prototype.runScene = function() {
        cc.assetManager.loadBundle("resources",
        function(e) {
            e && console.error("----------远程加载resources文件夹资源失败:", e),
            cc.assetManager.loadBundle("res",
            function(e) {
                e && console.error("----------加载res文件夹资源失败:", e),
                l._EventTargetMager.emit("runMainScene")
            })
        })
    },
    t.prototype.loadingEnd = function() {
        this._finishCount++,
        this._finishCount == this._resCount && (this._finishCount = 0, this.is_game = !0, this.runScene())
    },
    t.prototype.runMainScene = function() {
        if (window.tt) {
            var e = tt.getUpdateManager();
            e.onUpdateReady(function() {
                tt.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启小游戏？",
                    success: function(t) {
                        t.confirm && e.applyUpdate()
                    }
                })
            }),
            e.onUpdateFailed(function(e) {
                console.log("版本下载失败原因", e),
                tt.showToast({
                    title: "新版本下载失败，请稍后再试",
                    icon: "none"
                })
            })
        }
        cc.director.loadScene("mainScene",
        function() {
            var e = h.default.get().sendJavaGetChannel();
            "VIVO" != e && "OPPO" != e || _._poolNodeMager.getPoolNode(f.KEY.poolName.notice_panel)
        })
    },
    n([d], t)
} (cc.Component);
a.default = g