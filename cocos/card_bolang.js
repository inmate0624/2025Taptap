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
var r = e("poolNodeMager"),
c = e("winRootNode"),
s = cc._decorator,
d = s.ccclass,
l = (s.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.index = 0,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function() {
        this.index = 0,
        this.action()
    },
    t.prototype.onClose = function(e) {
        void 0 === e && (e = null),
        this.node.stopAllActions(),
        r._poolNodeMager.putPoolNode(this.node.name, this.node)
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onLoad = function() {},
    t.prototype.action = function() {
        var e = this;
        this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(.07), cc.callFunc(function() {
            e.node.children[e.index].active = !1,
            e.index += 1,
            e.index > 7 && (e.index = 0),
            e.node.children[e.index].active = !0
        }))))
    },
    n([d], t)
} (c.default));
a.default = l