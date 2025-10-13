var e = require;
var t = module;
var a = exports;
function o(e, t) {
    var a = [e, t];
    if (e.length < t.length) return a[0] = t,
    a[1] = e,
    a[2] = "not",
    a;
    if (e.length == t.length) for (var o = 0; o < e.length; o++) {
        if (a[0][o] > a[1][o]) return a[0] = e,
        a[1] = t,
        a;
        if (a[0][o] < a[1][o]) return a[0] = t,
        a[1] = e,
        a[2] = "not",
        a;
        if (o == e.length - 1) return a
    }
    return e.length > t.length ? a: void 0
}
function i(e) {
    if (0 == e) return 0;
    for (var t = (e = e.split("")).length, a = 0; a < t && 0 == e[0]; a++) e.splice(0, 1);
    return e
}
a.__esModule = !0,
a.NumberUtil = void 0;
for (var n = ["", "K", "M", "B", "T"], r = 0; r < 2; r++) for (var c = 0; c < 26; c++) n.push(String.fromCharCode(65 + r) + String.fromCharCode(65 + c));
var s = {
    unit_format: function(e) {
        var t = "";
        if ((e = e.toString()).length > 6) {
            var a = parseInt(e.length / 3),
            o = e.length % 3;
            t = n[a -= 0 == o ? 2 : 1],
            e = e.substr(0, e.length - 3 * a)
        }
        return this.number_format(e, 0, ",") + t
    },
    number_format: function(e, t, a) {
        e = (e + "").replace(/[^0-9+-Ee.]/g, "");
        var o = isFinite( + e) ? +e: 0,
        i = isFinite( + t) ? Math.abs(t) : 0,
        n = void 0 === a ? ",": a,
        r = "";
        r = (i ?
        function(e, t) {
            var a = Math.pow(10, t);
            return "" + Math.ceil(e * a) / a
        } (o, i) : "" + Math.round(o)).split(".");
        for (var c = /(-?\d+)(\d{3})/; c.test(r[0]);) r[0] = r[0].replace(c, "$1" + n + "$2");
        return (r[1] || "").length < i && (r[1] = r[1] || "", r[1] += new Array(i - r[1].length + 1).join("0")),
        r.join(".")
    },
    setNumberLength: function(e, t) {
        for (e = e.toString(); e.length < t;) e = "0" + e;
        return e
    },
    time_format: function(e) {
        var t = this.setNumberLength(Math.floor(e / 3600), 2);
        return e %= 3600,
        t + ":" + this.setNumberLength(Math.floor(e / 60), 2) + ":" + this.setNumberLength(e % 60, 2)
    },
    sortByType: function(e, t) {
        return e.sort(function(e) {
            return function(t, a) {
                var o, i;
                if ("object" == typeof t && "object" == typeof a && t && a) return (o = t[e]) === (i = a[e]) ? 0 : typeof o == typeof i ? o < i ? -1 : 1 : typeof o < typeof i ? -1 : 1;
                throw "error"
            }
        } (t))
    },
    countTime: function(e, t) {
        t(e);
        var a = setInterval(function() {--e >= 0 ? t(e) : (cc.log("stop Interval=" + a), clearInterval(a))
        }.bind(this), 1e3);
        return a
    },
    clearInterval: function(e) {
        function t(t) {
            return e.apply(this, arguments)
        }
        return t.toString = function() {
            return e.toString()
        },
        t
    } (function(e) {
        cc.log("clearInterval=" + e),
        clearInterval(e)
    }),
    isOneDay: function(e, t) {
        var a = new Date(parseInt(e)),
        o = new Date(parseInt(t));
        return a.getFullYear() == o.getFullYear() && a.getMonth() == o.getMonth() && a.getDate() == o.getDate()
    },
    randomNum: function(e, t) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * e + 1, 10);
            case 2:
                return parseInt(Math.random() * (t - e + 1) + e, 10);
            default: return 0;
        }
    },
    galaxyAdd: function(e, t) {
        var a, i = [String(e), String(t)],
        n = []; (i = o(i[0], i[1]))[0] = i[0].split(""),
        i[1] = i[1].split(""),
        i[0].length != i[1].length && (a = new Array(i[0].length - i[1].length + 1).join("0"), i[1] = a.split("").concat(i[1]));
        for (var r = 0,
        c = i[0].length - 1; c >= 0; c--) {
            var s = Number(i[0][c]) + Number(i[1][c]) + r;
            n.unshift(s % 10),
            r = Math.floor(s / 10),
            0 == c && 0 != r && n.unshift(r)
        }
        return n.join("")
    },
    galaxySub: function(e, t) {
        var a, n = [String(e), String(t)],
        r = [];
        if (3 == (n = o(n[0], n[1])).length) return ! 1;
        n[0] = n[0].split(""),
        n[1] = n[1].split(""),
        n[0].length != n[1].length && (a = new Array(n[0].length - n[1].length + 1).join("0"), n[1] = a.split("").concat(n[1]));
        for (var c = 0,
        s = n[0].length - 1; s >= 0; s--) {
            var d = Number(n[0][s]) - Number(n[1][s]) - c;
            c = 0,
            d < 0 && (d += 10, c = 1),
            r.unshift(d % 10)
        }
        var l = r.join("");
        0 == l[0] && (l = i(l));
        for (var u = "",
        p = 0; p < l.length; p++) u += "" + l[p];
        return "" == u && (u = "0"),
        u
    },
    galaxyMut: function(e, t) {
        var a, n = "number" == typeof(a = t) ? null != a.toString().split(".")[1] ? a.toString().split(".")[1].length: 0 : "string" == typeof a ? null != a.split(".")[1] ? a.split(".")[1].length: 0 : void 0;
        n > 0 && (t = String(t).replace(".", ""));
        var r = [String(e), String(t)],
        c = [];
        if ((r = o(r[0], r[1]))[0] = r[0].split(""), r[1] = r[1].split(""), -1 != r[0].indexOf("N") || -1 != r[1].indexOf("N")) return e;
        for (var s = r[1].length - 1; s >= 0; s--) {
            for (var d, l = 0,
            u = [], p = r[0].length - 1; p >= 0; p--) {
                var h = Number(r[0][p]) * Number(r[1][s]) + l;
                u.unshift(h % 10),
                l = Math.floor(h / 10),
                0 == p && 0 != l && u.unshift(l)
            }
            d = new Array(r[1].length - (s + 1) + 1).join("0"),
            u.push(d),
            c[s] = u.join("")
        }
        for (var _ = c.length,
        f = 1; f < _; f++) {
            var g = this.galaxyAdd(c[0], c[1]);
            c.splice(0, 2, g)
        }
        var m = c.join("");
        0 == m[0] && (m = i(m));
        for (var y = "",
        v = 0; v < m.length - n; v++) parseInt(m[v]) >= 0 && (y += "" + m[v]);
        return "" == y && (y = "0"),
        y
    },
    galaxyDiv: function(e, t) {
        e = String(e),
        t = String(t);
        for (var a = e.length,
        o = (t.length, 0), i = 0, n = [], r = 0, c = 0; c < a; c++)(r = 10 * i + parseInt(e[c])) < t ? (i = r, n.push(0)) : (o = parseInt(r / t), i = r % t, n.push(o));
        return [o = "" == (o = n.join("").replace(/\b(0+)/gi, "")) ? "0": o, i]
    },
    cmpBigInt: function(e, t) {
        if (e = String(e), t = String(t), e.length > t.length) return 1;
        if (e.length < t.length) return - 1;
        for (var a = 0; a < e.length; a++) {
            if (e[a] > t[a]) return 1;
            if (e[a] < t[a]) return - 1
        }
        return 0
    },
    compare: function(e, t) {
        return this.cmpBigInt(e, t) >= 0
    },
    millisecondToDate: function(e) {
        e < 500 && (e = 0);
        var t = parseFloat(e) / 1e3,
        a = parseInt(t / 3600),
        o = parseInt(60 * (parseFloat(t / 3600) - parseInt(t / 3600))),
        i = parseInt(60 * (parseFloat(60 * (parseFloat(t / 3600) - parseInt(t / 3600))) - parseInt(60 * (parseFloat(t / 3600) - parseInt(t / 3600)))));
        return (a = a < 10 ? "0" + a: a) + ":" + (o = o < 10 ? "0" + o: o) + ":" + (i < 10 ? "0" + i: i)
    },
    millisecondToMinute: function(e) {
        e < 500 && (e = 0);
        var t = parseFloat(e) / 1e3,
        a = parseInt((t / 60).toString()),
        o = parseInt((t - 60 * a).toString());
        return (a < 10 ? "0" + a: a) + ":" + (o < 10 ? "0" + o: o)
    },
    format: function(e, t) {
        if (e && "object" == typeof t) for (var a in t) if (null != t[a]) {
            var o = new RegExp("({" + a + "})", "g");
            e = e.replace(o, t[a])
        }
        return e
    },
    webCopyString: function(e) {
        var t = e + "",
        a = document.createElement("textarea");
        a.value = t,
        a.setAttribute("readonly", ""),
        a.style.contain = "strict",
        a.style.position = "absolute",
        a.style.left = "-9999px",
        a.style.fontSize = "12pt";
        var o = getSelection(),
        i = !1;
        o.rangeCount > 0 && (i = o.getRangeAt(0)),
        document.body.appendChild(a),
        a.select(),
        a.selectionStart = 0,
        a.selectionEnd = t.length;
        var n = !1;
        try {
            n = document.execCommand("copy")
        } catch(r) {}
        return document.body.removeChild(a),
        i && (o.removeAllRanges(), o.addRange(i)),
        n
    }
};
a.NumberUtil = s