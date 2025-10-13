var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.LogWrap = void 0;
var o = function() {
    function e() {}
    return e.getDateString = function() {
        var e = new Date,
        t = e.getHours().toString(),
        a = "";
        return a += (1 == t.length ? "0" + t: t) + ":",
        a += (1 == (t = e.getMinutes().toString()).length ? "0" + t: t) + ":",
        1 == (t = e.getMilliseconds().toString()).length && (t = "00" + t),
        2 == t.length && (t = "0" + t),
        "[" + (a += t) + "]"
    },
    e.stack = function(e) {
        var t = new Error().stack.split("\n");
        t.shift();
        var a = [];
        t.forEach(function(e) {
            var t, o = (e = e.substring(7)).split(" ");
            o.length < 2 ? a.push(o[0]) : a.push(((t = {})[o[0]] = o[1], t))
        });
        var o = [];
        if (e < a.length - 1) for (var i in a[e]) o.push(i);
        var n = o[0].split(".");
        return n[0] + ".js->" + n[1] + ": "
    },
    e.log = function() {
        for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
        var o = console.log || cc.log;
        o.call(this, "%s%s:" + cc.js.formatStr.apply(cc, arguments), e.stack(2), e.getDateString())
    },
    e.info = function() {
        for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
        var o = console.log || cc.log;
        o.call(this, "%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:#00CD00;", e.stack(2), e.getDateString())
    },
    e.warn = function() {
        for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
        var o = console.log || cc.log;
        o.call(this, "%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:#ee7700;", e.stack(2), e.getDateString())
    },
    e.err = function() {
        for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
        var o = console.log || cc.log;
        o.call(this, "%c%s%s:" + cc.js.formatStr.apply(cc, arguments), "color:red", e.stack(2), e.getDateString())
    },
    e
} ();
a.LogWrap = o