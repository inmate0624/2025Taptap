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
c = cc._decorator,
s = c.ccclass,
d = c.property,
l = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.label = null,
        t.bgNode = null,
        t
    }
    return i(t, e),
    t.prototype.start = function() {},
    t.prototype.onOpen = function(e) {
        e.pos && (this.node.position = e.pos),
        e.color && (this.label.node.color = e.color),
        this.bgNode.width = this.label.node.width + 150,
        this.startAction(this.endAction.bind(this)),
        this.label.string = e.str
    },
    t.prototype.startAction = function(e) {
        this.node.opacity = 255,
        this.node.stopAllActions(),
        this.node.runAction(cc.sequence(cc.spawn(cc.moveBy(2, 0, 200), cc.fadeOut(2)), cc.callFunc(function() {
            e()
        })))
    },
    t.prototype.endAction = function() {
        r._poolNodeMager.putPoolNode(this.node.name, this.node)
    },
    n([d(cc.Label)], t.prototype, "label", void 0),
    n([d(cc.Node)], t.prototype, "bgNode", void 0),
    n([s], t)
} (cc.Component);
a.default = l