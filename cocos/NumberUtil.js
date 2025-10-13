var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.NumberUtil = void 0;
var o = function() {
    function e() {}
    return e.randomNum = function(e, t) {
        switch (arguments.length) {
            case 1:
                return parseInt((Math.random() * e).toString(), 10);
            case 2:
                return parseInt((Math.random() * (t - e + 1) + e).toString(), 10);
            default: return 0;
        }
    },
    e.randomArr = function(e, t, a, o) {
        var i = [];
        function n() {
            for (var e = parseInt((t * Math.random()).toString()), o = 0; o < i.length; o++) if (i[o] == e) return n();
            return i.push(e + a),
            e
        }
        arguments.length < 3 && (a = 0);
        for (var r = [], c = 0; c < e && c < t; c++) r.push(n());
        return r
    },
    e.getRandomArrayElements = function(e, t) {
        for (var a, o, i = e.slice(0), n = e.length, r = n - t; n-->r;) a = i[o = Math.floor((n + 1) * Math.random())],
        i[o] = i[n],
        i[n] = a;
        return i.slice(r)
    },
    e.rotate = function(e, t) {
        var a = Math.PI / 180 * e,
        o = Math.sin(a),
        i = Math.cos(a);
        i < .001 && i > -.001 && (i = 0),
        o < .001 && o > -.001 && (o = 0);
        var n = t.x;
        return t.x = i * n - o * t.y,
        t.y = o * n + i * t.y,
        t
    },
    e.judgeAnage = function(e, t) {
        var a = e.x,
        o = e.y,
        i = t.x,
        n = t.y,
        r = Math.abs(a - o),
        c = Math.abs(i - n),
        s = Math.sqrt(r * r + c * c);
        return Math.round(Math.asin(c / s) / Math.PI * 180)
    },
    e.getAngle = function(e, t, a) {
        void 0 === a && (a = cc.v2(0, 1));
        var o = t.x - e.x,
        i = t.y - e.y;
        return - cc.v2(o, i).signAngle(a) / Math.PI * 180
    },
    e.outOfOrder = function(e) {
        for (var t, a, o = e,
        i = o.length; i;) a = Math.floor(Math.random() * i--),
        t = o[i],
        o[i] = o[a],
        o[a] = t;
        return o
    },
    e.randomZFOne = function() {
        return 1 * Math.random() < .5 ? 1 : -1
    },
    e.prototype.createUserId = function() {
        var e = "",
        t = new Date().getTime().toString();
        if ((e = function() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return e() + e()
        } () + t.substring(t.length - 8)).length < 16) for (var a = e.length; a <= 16;) a++,
        e += "s";
        else e.length > 16 && (e = e.slice(0, 16))
    },
    e.prototype.createVideoId = function() {
        var e = new Date;
        e.getMonth(),
        e.getDate(),
        e.getDate(),
        e.getHours(),
        e.getHours(),
        e.getMinutes(),
        e.getMinutes();
        e.getSeconds(),
        e.getFullYear()
    },
    e
} ();
a.NumberUtil = o