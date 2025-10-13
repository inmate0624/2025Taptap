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
var r = e("gameDataManager"),
c = e("poolNodeMager"),
s = e("winRootNode"),
d = e("gameDataManager"),
l = cc._decorator,
u = l.ccclass,
p = (l.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.paretnCom = null,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function(e) {
        this.paretnCom = e.paretnCom;
        var t = !1;
        e.key && (t = -1 != r._userData.chengjiuList.indexOf(e.key), this.node.getChildByName("gou").active = t, this.node.getChildByName("miaoshu").getComponent(cc.Label).string = d._gameStateData.Achievement[e.key].Task, this.node.getChildByName("chenghao").getComponent(cc.Label).string = d._gameStateData.Achievement[e.key].Title)
    },
    t.prototype.onClose = function() {
        this.node.scale = 1,
        c._poolNodeMager.putPoolNode(this.node.name, this.node)
    },
    t.prototype.onClear = function() {},
    t.prototype.start = function() {},
    n([u], t)
} (s.default));
a.default = p