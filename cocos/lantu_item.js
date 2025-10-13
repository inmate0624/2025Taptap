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
c = e("KEY"),
s = e("winRootNode"),
d = e("audioMager"),
l = e("gameDataManager"),
u = cc._decorator,
p = u.ccclass,
h = (u.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.data = null,
        t.parent_com = null,
        t.is_open = !1,
        t.lantuId = 0,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function(e) {
        e.data && (this.data = e.data),
        e.parent_com && (this.parent_com = e.parent_com),
        e.lantuId && (this.lantuId = parseInt(e.lantuId));
        var t = this.node.getChildByName("text");
        t.zIndex = 1,
        ( - 1 != l._userData.lantu_data.indexOf(parseInt(e.lantuId)) || l._userData.lantuOpen && !window.tt) && (this.is_open = !0, t.getComponent(cc.Label).string = this.data.IdeaName, -1 == l._userData.lantu_data.indexOf(this.lantuId) && (l._userData.lantu_data.push(this.lantuId), r.UserDataManger.preData())),
        1 == e.index && this.parent_com.update_data(this)
    },
    t.prototype.onClose = function() {},
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.on_btn = function() {
        this.disableClick(),
        d._audioMager.playAudioEff(c.KEY.audioName.btn),
        this.parent_com.update_data(this)
    },
    t.prototype.show = function() {
        this.node.getChildByName("text").getComponent(cc.Label).string = this.data.IdeaName
    },
    n([p], t)
} (s.default));
a.default = h