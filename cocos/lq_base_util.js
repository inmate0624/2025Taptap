var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.LQBaseUtil = void 0;
var o = e("lq_platform_util"),
i = e("lq_const"),
n = cc.view,
r = function() {
    function e() {}
    return e.has_value = function(e, t) {
        for (var a = !1,
        o = 0; o < e.length; o++) if (e[o] === t) {
            a = !0;
            break
        }
        return a
    },
    e.get_value_by_duration = function(e, t) {
        if (0 === t.length) return 1;
        for (var a = -1,
        o = 1; o < t.length; o++) if (t[o].x > e) {
            a = o;
            break
        }
        if ( - 1 === a) return t[t.length - 1].y;
        var i = a - 1;
        return t[i].y + (t[a].y - t[i].y) * ((e - t[i].x) / (t[a].x - t[i].x))
    },
    e.number_to_counting = function(e) {
        return e < 1e3 ? e + "": e < 1e6 ? Math.floor(e / 1e3) + "K": e < 1e9 ? Math.floor(e / 1e6) + "M": e < 1e12 ? Math.floor(e / 1e9) + "B": Math.floor(e / 1e12) + "T"
    },
    e.number_to_time = function(e) {
        var t = Math.floor(e / 3600);
        e -= 3600 * t;
        var a = t.toString(),
        o = Math.floor(e / 60).toString(),
        i = (e % 60).toString();
        return 1 === a.length && (a = "0" + a),
        1 === o.length && (o = "0" + o),
        1 === i.length && (i = "0" + i),
        [a, o, i]
    },
    e.set_normal_angle = function(e) {
        for (; e > 360;) e -= 360;
        for (; e < 0;) e += 360;
        return e
    },
    e.compare_version = function(e, t) {
        for (var a = e.split("."), o = t.split("."), i = Math.max(a.length, o.length); a.length < i;) a.push("0");
        for (; o.length < i;) o.push("0");
        for (var n = 0; n < i; n++) {
            var r = parseInt(a[n]),
            c = parseInt(o[n]);
            if (r > c) return 1;
            if (r < c) return - 1
        }
        return 0
    },
    e.is_today = function(e) {
        var t, a = new Date;
        return e && "" !== e ? t = new Date(e) : (t = new Date).setDate(t.getDate() - 1),
        a.getFullYear() === t.getFullYear() && a.getMonth() === t.getMonth() && a.getDate() === t.getDate()
    },
    e.is_safe_area = function() {
        var e = function(e, t) {
            return 2280 === e && 1080 === t || 1792 === e && 828 === t || 2436 === e && 1125 === t || 2688 === e && 1242 === t
        };
        switch (o.LQPlatformUtil.get_platform()) {
            case i.LQPlatformType.baidu:
                var t = swan.getSystemInfoSync();
            return e(t.pixelRatio * t.screenWidth, t.pixelRatio * t.screenHeight);
            case i.LQPlatformType.qq:
                var a = qq.getSystemInfoSync();
            return e(a.pixelRatio * a.screenWidth, a.pixelRatio * a.screenHeight);
            case i.LQPlatformType.tt:
                var r = tt.getSystemInfoSync();
            return e(r.pixelRatio * r.screenWidth, r.pixelRatio * r.screenHeight);
            case i.LQPlatformType.oppo:
            case i.LQPlatformType.vivo:
                var c = qg.getSystemInfoSync();
            return e(c.pixelRatio * c.screenWidth, c.pixelRatio * c.screenHeight);
            case i.LQPlatformType.wx:
                var s = wx.getSystemInfoSync();
            return e(s.pixelRatio * s.screenWidth, s.pixelRatio * s.screenHeight);
            case i.LQPlatformType.android:
                break;
            case i.LQPlatformType.ios:
                var d = n.getFrameSize();
            return e(d.width, d.height);
        }
        return ! 1
    },
    e.deep_clone = function(e) {
        if ("object" != typeof e) return e;
        var t = e instanceof Array ? [] : {};
        for (var a in e)"object" == typeof e[a] ? t[a] = this.deep_clone(e[a]) : t[a] = e[a];
        return t
    },
    e
} ();
a.LQBaseUtil = r