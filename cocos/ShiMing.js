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
var r = e("AndroidApi"),
c = cc._decorator,
s = c.ccclass,
d = (c.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.NameEditBox = null,
        t.IdEditBox = null,
        t.guangbiao1_1 = null,
        t.guangbiao1_2 = null,
        t.guangbiao2_1 = null,
        t.guangbiao2_2 = null,
        t
    }
    return i(t, e),
    t.prototype.onLoad = function() {
        this.NameEditBox = this.node.getChildByName("NameEditBox").getComponent(cc.EditBox),
        this.IdEditBox = this.node.getChildByName("IdEditBox").getComponent(cc.EditBox),
        this.guangbiao1_1 = this.node.getChildByName("guangbiao1_1"),
        this.guangbiao1_2 = this.node.getChildByName("guangbiao1_2"),
        this.guangbiao2_1 = this.node.getChildByName("guangbiao2_1"),
        this.guangbiao2_2 = this.node.getChildByName("guangbiao2_2")
    },
    t.prototype.showTip = function(e) {
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod(r.default.get().javaUrl, "showToask", "(Ljava/lang/String;)V", e)
    },
    t.prototype.click_submit = function() {
        var e = this;
        console.log("提交"),
        this.http("",
        function(t) {
            t ? (cc.sys.localStorage.setItem("shiMing", "yes"), cc.game.emit("shiMingComplete")) : e.showTip("验证失败，请输入正确的姓名和身份证号！")
        })
    },
    t.prototype.http = function(e, t) {
        var a = new XMLHttpRequest;
        a.open("GET", e + "?idcard=" + this.IdEditBox.string + "&name=" + this.NameEditBox.string, !0),
        a.setRequestHeader("Content-type", "application/json; charset=utf-8"),
        a.onreadystatechange = function() {
            if (console.log(" 实名当前返回的状态码:", a.readyState, a.status), 4 == a.readyState) {
                if (a.status >= 200 && a.status <= 207) {
                    var e = a.statusText,
                    o = JSON.parse(a.responseText);
                    console.log("Status: Got GET response! " + e),
                    console.log("获取回来的函数:", o);
                    var i = JSON.parse(o.data);
                    console.log("json:", i),
                    1e3 == i.code ? t(!0) : t(!1)
                } else t(!1);
            } else t(!1)
        },
        a.send(null)
    },
    t.prototype.select = function(e, t) {
        this.guangbiao1_2.active = "1" == t,
        this.guangbiao2_2.active = "2" == t
    },
    t.prototype.change = function() {},
    n([s], t)
} (cc.Component));
a.default = d