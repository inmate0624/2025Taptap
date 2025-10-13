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
            r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, a) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, a, o);
        else
            for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (r = (n < 3 ? i(r) : n > 3 ? i(t, a, r) : i(t, a)) || r);
        return n > 3 && r && Object.defineProperty(t, a, r),
            r
    };
Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.LQCollideBase = void 0;
var r = cc._decorator.ccclass,
    c = cc._decorator.executeInEditMode,
    s = (cc.PolygonCollider, cc._decorator.property),
    d = e("lq_collide"),
    l = (e("lq_const"),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.auto_update_point = !0,
                    t
            }
            return i(t, e),
                t.prototype.find_collide = function() {
                    var e = this.node.getComponent(d.LQCollide);
                    if (e) return e;
                    // console.error(this.node.name + ":没有找到LQCollide组件")
                },
                t.prototype.onLoad = function() {
                    var e = this.find_collide();
                    e && e.init_lq_collide()
                },
                t.prototype.onEnable = function() {
                    var e = this.find_collide();
                    e && e.enable_lq_collide()
                },
                t.prototype.onDisable = function() {
                    var e = this.find_collide();
                    e && e.disable_lq_collide()
                },
                t.prototype.onDestroy = function() {
                    this.find_collide()
                },
                t.prototype.onFocusInEditor = function() {
                    this.find_collide()
                },
                t.prototype.onLostFocusInEditor = function() {
                    this.find_collide()
                },
                t.prototype.resetInEditor = function() {
                    this.find_collide()
                },
                t.prototype.update = function() {},
                n([s({
                    tooltip: "多边形自动同步cocos PolygonCollider 组件中的碰撞点"
                })], t.prototype, "auto_update_point", void 0),
                n([r, c], t)
        }(cc.Component));
a.LQCollideBase = l