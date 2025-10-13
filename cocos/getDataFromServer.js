var e = require;
var t = module;
var a = exports;
var o = this && this.__decorate ||
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
var i = e("gameDataManager"),
n = cc._decorator,
r = n.ccclass,
c = (n.property,
function() {
    function e() {}
    var t;
    return t = e,
    e.setUserData = function(e, a) {
        console.log("设置用户数据");
        var o = "",
        n = this;
        if (n.openId ? o = n.openId: i._userData.openId ? o = i._userData.openId: t.getOpenId(function(e) {
            e && (o = n.openId)
        }), !o) return console.log("openID是空的:");
        var r = {
            userName: i._userData.gameName,
            headIconUrl: i._userData.headIconUrl,
            dayNum: e.dayNum,
            cardRenNum: e.cardRenNum,
            platform: "zijie_dddl",
            openId: o
        },
        c = cc.loader.getXMLHttpRequest();
        c.open("POST", "", !0),
        c.setRequestHeader("Content-type", "application/json; charset=utf-8"),
        c.onreadystatechange = function() {
            if (console.log("setUserData当前返回的状态码:", c.readyState, c.status), 4 == c.readyState) if (c.status >= 200 && c.status <= 207) {
                c.statusText;
                var e = JSON.parse(c.responseText);
                console.log("2 setUserData 获取回来的函数:", e),
                0 == e.errno ? a && a(!0) : a && a(!1)
            } else a && a(!1)
        },
        console.log("setUserData请求的竖格式:", r),
        c.send(JSON.stringify(r))
    },
    e.getUserData = function(e) {
        console.log("读取用户数据");
        var a = "",
        o = this;
        if (o.openId ? a = o.openId: i._userData.openId ? a = i._userData.openId: t.getOpenId(function(e) {
            e && (a = o.openId)
        }), !a) return console.log("openID是空的:");
        var n = {
            platform: "zijie_dddl",
            openId: a
        },
        r = cc.loader.getXMLHttpRequest();
        r.open("POST", "", !0),
        r.setRequestHeader("Content-type", "application/json; charset=utf-8"),
        r.onreadystatechange = function() {
            if (console.log("getUserData 当前返回的状态码:", r.readyState, r.status), 4 == r.readyState) if (r.status >= 200 && r.status <= 207) {
                r.statusText;
                var t = JSON.parse(r.responseText);
                console.log("2 getUserData 获取回来的函数:", t.data),
                0 == t.errno ? (i._gameStateData.userMaxDayNum = t.data.dayNum, i._gameStateData.userCardRenNum = t.data.cardRenNum, e && e(!0), console.log("获取回来的数据:", i._gameStateData.userMaxDayNum, i._gameStateData.userCardRenNum)) : e && e(!1)
            } else e && e(!1)
        },
        console.log("getUserData请求的竖格式:", n),
        r.send(JSON.stringify(n))
    },
    e.getOpenId = function(e) {
        var t = this;
        window.tt ? tt.login({
            success: function(a) {
                var o = new XMLHttpRequest;
                o.open("POST", "", !0);
                var n = {
                    code: a.code,
                    appid: "ttaee4d85931da5b4a02"
                };
                console.log("登录的code:", a.code),
                o.setRequestHeader("Content-type", "application/json; charset=utf-8"),
                o.onreadystatechange = function() {
                    if (console.log(" getOpenId当前返回的状态码:", o.readyState, o.status), 4 == o.readyState) if (o.status >= 200 && o.status <= 207) {
                        var a = o.statusText,
                        n = JSON.parse(o.responseText);
                        console.log("Status: Got GET response! " + a),
                        console.log("获取回来的函数:", n),
                        n.openId && 0 == n.errno ? (i._userData.openId = n.openId, i.UserDataManger.preData(), t.openId = n.openId, e && e(!0)) : e && e(!1)
                    } else e && e(!1)
                },
                console.log("请求的竖格式:", n),
                o.send(JSON.stringify(n))
            },
            fail: function(e) {
                console.log("login 调用失败", e.errMsg)
            }
        }) : e && e(!1)
    },
    e.getRank = function(e, a) {
        console.log("获取排行榜数据");
        var o = "",
        n = this;
        if (n.openId ? o = n.openId: i._userData.openId ? o = i._userData.openId: t.getOpenId(function(e) {
            e && (o = n.openId)
        }), !o) return console.log("openID是空的:");
        var r = {
            dayNum: e.dayNum,
            cardRenNum: e.cardRenNum,
            platform: "zijie_dddl",
            openId: o
        },
        c = cc.loader.getXMLHttpRequest();
        c.open("POST", "", !0),
        c.setRequestHeader("Content-type", "application/json; charset=utf-8"),
        c.onreadystatechange = function() {
            if (4 == c.readyState) if (c.status >= 200 && c.status <= 207) {
                c.statusText;
                var e = JSON.parse(c.responseText);
                console.log("2 getRank 获取回来的函数:", e),
                e.data && 0 == e.errno ? a && a(!0, e.data) : a && a(!1)
            } else a && a(!1)
        },
        c.send(JSON.stringify(r))
    },
    e.openId = "",
    t = o([r], e)
} ());
a.default = c