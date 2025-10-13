var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a._poolNodeMager = void 0;
var o = e("enum_type"),
i = e("commonFunction"),
n = e("KEY"),
r = e("gameDataManager"),
c = e("kapai"),
s = function() {
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
        var a = this,
        o = this,
        i = void 0;
        cc.loader.loadRes("prefab/prefabPool/" + n.KEY.POOLCF[e].prefab,
        function(r, c) {
            if (r) console.error("--------对象池加载预制失败:", r);
            else if (c) {
                o.nodes[e] = c;
                var s = i = cc.instantiate(c);
                n.KEY.POOLCF[e].usePool && !o.nodes[e + "Pool"] && (o.nodes[e + "Pool"] = new cc.NodePool, o.nodes[e + "Pool"].put(i), s = a.nodes[e + "Pool"].get()),
                t(s)
            }
        })
    },
    e.prototype.getPoolNode = function(e, t, a, s, d) {
        void 0 === t && (t = r._gameStateData.scene),
        void 0 === a && (a = !0),
        null == t && (t = r._gameStateData.scene);
        var l = function(n) {
            if (t && n && t.isValid) {
                var l = e;
                "card" == e && (l = "kapai", -1 != r._gameStateData.teshuCard.indexOf(parseInt(s.cradId + "")) ? (l = "card_" + s.cradId, parseInt(s.cradId + "") != o.cardNameOrId.牛 && parseInt(s.cradId + "") != o.cardNameOrId.鸡 && parseInt(s.cradId + "") != o.cardNameOrId.兔子 || (l = "card_50001"), -1 != r._gameStateData.guaiwuCard.indexOf(parseInt(s.cradId + "")) && (l = "card_50004"), n.addComponent(l)) : n.addComponent(c.default)),
                t.addChild(n),
                n.getComponent(l) && a ? n.getComponent(l).onOpen(s) : i.commonTool.appLog(l + "预制脚本找不到")
            }
            d && d(n)
        },
        u = void 0;
        null != this.nodes[e] && n.KEY.POOLCF[e].usePool && this.nodes[e + "Pool"].size() > 0 ? (u = this.nodes[e + "Pool"].get(), l(u)) : this.load(e,
        function(e) {
            l(e)
        })
    },
    e.prototype.getCountPoolNode = function(e, t, a) {
        for (var o = [], i = 0; i < t; i++) if (null != this.nodes[e]) {
            if (n.KEY.POOLCF[e].usePool) {
                if (this.nodes[e + "Pool"].size() > 0) {
                    var r = this.nodes[e + "Pool"].get();
                    o.push(r),
                    o.length == t && a && a(o)
                } else this.load(e,
                function(e) {
                    o.push(e),
                    o.length == t && a && a(o)
                });
            } else this.load(e,
            function(e) {
                o.push(e),
                o.length == t && a && a(o)
            });
        } else this.load(e,
        function(e) {
            o.push(e),
            o.length == t && a && a(o)
        });
        return o
    },
    e.prototype.putPoolNode = function(e, t) {
        t.getComponent(e) && t.getComponent(e).unscheduleAllCallbacks(),
        n.KEY.POOLCF[e] && n.KEY.POOLCF[e].usePool && n.KEY.POOLCF[e].maxCount > this.nodes[e + "Pool"].size() ? this.nodes[e + "Pool"].put(t) : t.destroy()
    },
    e
} ();
a.default = s,
a._poolNodeMager = s.Instace