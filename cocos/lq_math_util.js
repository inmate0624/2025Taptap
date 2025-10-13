var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.LQMathUtil = void 0;
var o = function() {
    function e() {}
    return e.random = function(e, t) {
        return e === t ? e: e < t ? Math.random() * (t - e) + e: Math.random() * (e - t) + t
    },
    e.random_int = function(e, t) {
        return Math.floor(this.random(e, t))
    },
    e.get_radians = function(e, t) {
        var a = Math.atan2(t.y - e.y, t.x - e.x);
        return a > 0 ? a: a + 6.28
    },
    e.intersects_rect = function(e, t) {
        return Math.abs(e.x - t.x) < e.half_width + t.half_width && Math.abs(e.y - t.y) < e.half_height + t.half_height
    },
    e.intersects_point_rect = function(e, t) {
        return e.x > t.x - .5 * t.width && e.x < t.x + .5 * t.width && e.y > t.y - .5 * t.height && e.y < t.y + .5 * t.height
    },
    e.intersects_point_circle = function(e, t, a) {
        return e.sub(t).magSqr() < a * a
    },
    e.intersects_circle = function(e, t, a, o) {
        return e.sub(a).mag() < t + o
    },
    e.intersects_circle_rect = function(e, t, a) {
        var o = e.x - a.x,
        i = e.y - a.y,
        n = Math.min(o, a.half_width),
        r = Math.max(n, -a.half_width),
        c = Math.min(i, a.half_height),
        s = Math.max(c, -a.half_height);
        return (r - o) * (r - o) + (s - i) * (s - i) <= t * t
    },
    e
} ();
a.LQMathUtil = o