var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.LQGameUtil = void 0;
var o = cc.SpriteFrame,
i = cc.director,
n = cc.tween,
r = cc.visibleRect,
c = cc.find,
s = function() {
    function e() {}
    return e.get_image = function(e, t, a) {
        var i = this;
        void 0 === a && (a = !0),
        e && "" !== e ? this.image_cache[e] ? t(!0, this.image_cache[e]) : cc.loader.load({
            url: e,
            type: "png"
        },
        function(n, r) {
            if (n) return console.error("err:" + n),
            void t(!1, void 0);
            var c = new o(r);
            t(!0, c),
            a && (i.image_cache[e] = c)
        }) : t(!1, void 0)
    },
    e.canvas_policy = function(e, t, a) {
        return r.height / r.width > a / t ? (e.fitHeight = !1, e.fitWidth = !0) : (e.fitHeight = !0, e.fitWidth = !1),
        e.fitHeight
    },
    e.recursion_node_property = function(e, t) {
        e.parent && (t.value *= e.parent[t.key], this.recursion_node_property(e.parent, t))
    },
    e.find_node = function(e) {
        if (!e || e.length <= 0) console.warn("路径不正确");
        else {
            var t = e.split("/"),
            a = c(t[0]);
            if (a) {
                for (var o = a,
                i = 1; i < t.length; i++) {
                    var n = o.getChildByName(t[i]);
                    if (!n) return void console.warn("没找到节点:" + t[i]);
                    o = n
                }
                return o
            }
            console.warn("没找到节点:" + t[0])
        }
    },
    e.wait = function(e) {
        return new Promise(function(t) {
            n(i.getScene()).delay(e).call(function() {
                t()
            }).start()
        })
    },
    e.set_clip = function(e, t, a, o) {
        for (var i = function(e) {
            for (var i = 0; i < e.length; i++) i % 2 == 0 ? (a && (e[i] = -e[i]), e[i] += t.x) : (o && (e[i] = -e[i]), e[i] += t.y)
        },
        n = e.curveData.props.position, r = 0; r < n.length; r++) {
            var c = n[r].motionPath,
            s = n[r].value;
            if (c) for (var d = 0; d < c.length; d++) i(c[d]);
            i(s)
        }
    },
    e.scroll_layout = function(e, t) {
        void 0 === t && (t = 50),
        e.updateLayout();
        var a = (e.type === cc.Layout.Type.HORIZONTAL ? e.node.width: e.node.height) / t;
        if (e.type === cc.Layout.Type.HORIZONTAL) {
            var o = 1 === e.node.anchorX ? .5 * e.node.width: .5 * -e.node.width;
            e.node.runAction(cc.repeatForever(cc.sequence(cc.moveBy(a, cc.v2(o, 0)), cc.callFunc(function() {
                e.node.x -= o
            }))))
        } else if (e.type === cc.Layout.Type.VERTICAL || e.type === cc.Layout.Type.GRID) {
            var i = 1 === e.node.anchorY ? .5 * e.node.height: .5 * -e.node.height;
            e.node.runAction(cc.repeatForever(cc.sequence(cc.moveBy(a, cc.v2(0, i)), cc.callFunc(function() {
                e.node.y -= i
            }))))
        }
    },
    e.image_cache = {},
    e
} ();
a.LQGameUtil = s