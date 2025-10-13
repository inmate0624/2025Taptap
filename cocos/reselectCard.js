//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
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
var r = e("KEY"),
c = e("winRootNode"),
s = e("poolNodeMager"),
d = e("winNodeMager"),
l = e("gameDataManager"),
u = cc._decorator,
p = u.ccclass,
h = u.property,
_ = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.content = null,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function() {},
    t.prototype.onClose = function() {
        d._winNodeMager.hideWinNode(this.node.name)
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onLoad = function() {
        this.initData()
    },
    t.prototype.initData = function() {
        for (var e = 0; e < l._gameStateData.selectCardLists.length; e++) {
            var t = l._gameStateData.selectCardLists[e];
            s._poolNodeMager.getPoolNode(r.KEY.poolName.selectCard, this.content, !0, {
                cardId: t,
                paretnCom: this
            })
        }
    },
    n([h(cc.Node)], t.prototype, "content", void 0),
    n([p], t)
} (c.default);
a.default = _