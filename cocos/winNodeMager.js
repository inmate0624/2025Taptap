var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a._winNodeMager = void 0;
var o = e("gameDataManager"),
i = e("KEY"),
n = function() {
    function e() {
        this.nodes = {}
    }
    return Object.defineProperty(e, "Instace", {
        get: function() {
            return this._instace || (this._instace = new e),
            this._instace
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.load = function(e, t) {
        var a = this;
        cc.loader.loadRes("prefab/prefabView/" + i.KEY.ViewCF[e].prefab, cc.Prefab,
        function(o, i) {
            o ? console.error("--------游戏视图加载失败:", o) : i && (a.nodes[e] = cc.instantiate(i), t(a.nodes[e]))
        })
    },
    e.prototype.showWinNode = function(e, t, a, i, n) {
        if (void 0 === t && (t = o._gameStateData.scene), void 0 === a && (a = !0), t && null != t || (t = o._gameStateData.scene), null != this.nodes[e]) {
            var r = this.nodes[e];
            r.parent = t,
            r.getComponent(e) && a && r.getComponent(e).onOpen(i),
            n && n(r)
        } else this.load(e,
        function(o) {
            o.parent = t,
            o.getComponent(e) && a && o.getComponent(e).onOpen(i),
            n && n(o)
        })
    },
    e.prototype.hideWinNode = function(e) {
        this.nodes[e] && this.nodes[e].getComponent(e) && this.nodes[e].getComponent(e).unscheduleAllCallbacks(),
        this.nodes[e] && (i.KEY.ViewCF[e].isCommonlyUsed ? (this.nodes[e].removeFromParent(), this.nodes[e].active = !1) : (this.nodes[e].destroy(), this.nodes[e] = void 0, console.log("销毁视图:", e)))
    },
    e
} ();
a.default = n,
a._winNodeMager = n.Instace