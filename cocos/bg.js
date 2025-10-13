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
var r = cc._decorator,
c = r.ccclass,
s = (r.property,
function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }
    return i(t, e),
    t.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.TOUCH_START, this),
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TOUCH_MOVE, this),
        this.node.on(cc.Node.EventType.TOUCH_END, this.TOUCH_END, this),
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TOUCH_END, this)
    },
    t.prototype.start = function() {},
    t.prototype.TOUCH_START = function(e) {
        e.getID()
    },
    t.prototype.TOUCH_MOVE = function(e) {
        e.getID();
        var t = this.node.parent.convertToNodeSpaceAR(e.getLocation());
        t = this.updatePos(t),
        this.node.setPosition(t)
    },
    t.prototype.TOUCH_END = function(e) {
        e.getID()
    },
    t.prototype.updatePos = function(e) {
        var t = this.node.width / 2 - this.node.parent.width / 2,
        a = this.node.height / 2 - this.node.parent.height / 2;
        return e.x > t ? e.x = t: e.x < -t ? e.x = -t: e.y < -a ? e.y = -a: e.y > a && (e.y = a),
        e
    },
    n([c], t)
} (cc.Component));
a.default = s