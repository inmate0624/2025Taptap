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
var r = e("winRootNode"),
c = cc._decorator,
s = c.ccclass,
d = (c.property,
function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function(e) {
        this.init(e.pos, e.number, e._vector)
    },
    t.prototype.onClose = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.start = function() {},
    t.prototype.init = function(e, t, a) {
        var o = this;
        this.node.setPosition(e),
        this.node.angle = 0,
        this.node.opacity = 255;
        var i = this.node.getComponent(cc.Sprite);
        i.spriteFrame = null;
        var n = "image/card/丧尸";
        cc.resources.load(n, cc.Texture2D,
        function(e, r) {
            if (e) console.error("爆炸特效图片没找到", n);
            else if (o.node) {
                var c = 0,
                s = 0,
                d = r.width / 3,
                l = r.height / 3;
                switch (t) {
                    case 0:
                        c = 0,
                    s = 0;
                    break;
                    case 1:
                        c = d,
                    s = 0;
                    break;
                    case 2:
                        c = 2 * d,
                    s = 0;
                    break;
                    case 3:
                        c = 0,
                    s = l;
                    break;
                    case 4:
                        c = d,
                    s = l;
                    break;
                    case 5:
                        c = 2 * d,
                    s = l;
                    break;
                    case 6:
                        c = 0,
                    s = 2 * l;
                    break;
                    case 7:
                        c = d,
                    s = 2 * l;
                    break;
                    case 8:
                        c = 2 * d,
                    s = 2 * l;
                }
                var u = new cc.Rect(c, s, d, l),
                p = new cc.SpriteFrame(r, u);
                i.spriteFrame = p;
                var h = c - r.width / 3,
                _ = -(s - r.height / 3),
                f = o.node.x + h,
                g = o.node.y + _;
                o.node.setPosition(f, g);
                var m, y, v = a;
                m = h < 0 ? -(Math.random() * v + v) : 0 == h ? Math.random() * v - v: Math.random() * v + v,
                y = _ < 0 ? -(Math.random() * v + v) : 0 == _ ? Math.random() * v - v: Math.random() * v + v;
                var N = 180 * Math.random() + 90;
                Math.random() < .5 && (N = -N);
                var w = 180 * Math.random() + 90;
                Math.random() < .5 && (w = -w);
                var S = 180 * Math.random() + 90;
                Math.random() < .5 && (S = -S),
                cc.tween(o.node).by(1, {
                    position: cc.v3(m, y),
                    opacity: -255,
                    eulerAngles: cc.v3(N, w, S)
                },
                {
                    easing: "quadOut"
                }).call(function() {}).start()
            }
        })
    },
    n([s], t)
} (r.default));
a.default = d