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
}),
a.LQCollide = void 0;
var r = cc._decorator.ccclass,
c = cc._decorator.property,
s = cc._decorator.requireComponent,
d = cc._decorator.menu,
l = cc.Component,
u = cc.Enum,
p = cc.Size,
h = cc.Vec2,
_ = cc.Graphics,
f = cc.Node,
g = cc.macro,
m = cc.Color,
y = e("lq_const"),
v = e("lq_collide_config"),
N = e("lq_collide_system"),
w = e("lq_data"),
S = e("lq_collide_base"),
b = e("lq_game_util"),
O = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t._draw_collide = !1,
        t._collide_shape = y.LQCollideShape.Rect,
        t._collide_group_index = -1,
        t.collide_group_id = 0,
        t._radius = 50,
        t._size = new p(100, 100),
        t._polygon_points = [new h( - 45, -45), new h(45, -45), new h(60, 40), new h(0, 70), new h( - 60, 40)],
        t._offset = new h(0, 0),
        t.data_string = "",
        t.collide_id = 0,
        t.collide_status = y.LQCollideStatus.Idle,
        t.is_enable = !1,
        t.is_open_func = !0,
        t.collide_category = 0,
        t.collide_mask = 0,
        t.collide_map = {},
        t
    }
    var a;
    return i(t, e),
    a = t,
    Object.defineProperty(t.prototype, "draw_collide", {
        get: function() {
            return this._draw_collide
        },
        set: function(e) {
            this._draw_collide = e,
            this.draw_shape()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "collide_shape", {
        get: function() {
            return this._collide_shape
        },
        set: function(e) {
            this._collide_shape = e,
            this.draw_shape()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "collide_group_index", {
        get: function() {
            return - 1 === this._collide_group_index && (this._collide_group_index = N.LQCollideSystem.get_info_by_id(this.collide_group_id).index),
            this._collide_group_index
        },
        set: function(e) {
            this._collide_group_index !== e && (this._collide_group_index = e, this.collide_group_id = N.LQCollideSystem.get_group_by_index(e).id)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "radius", {
        get: function() {
            return this._radius
        },
        set: function(e) {
            this._radius = e,
            this.draw_shape()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this._size
        },
        set: function(e) {
            this._size = e,
            this.world_rect && (this.world_rect.width = e.width, this.world_rect.height = e.height, this.world_rect.half_width = .5 * e.width, this.world_rect.half_height = .5 * e.height),
            this.draw_shape()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "offset", {
        get: function() {
            return this._offset
        },
        set: function(e) {
            this._offset = e,
            this.draw_shape()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "polygon_points", {
        get: function() {
            return this._polygon_points
        },
        set: function(e) {
            this._polygon_points = e,
            this.draw_shape()
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.checkDebugDrawValid = function() {
        if (!this._debugDrawer || !this._debugDrawer.isValid) {
            var e = this.node.getChildByName("Collide");
            e ? this._debugDrawer = e.getComponent(_) : ((e = new f("Collide")).zIndex = g.MAX_ZINDEX, this.node.addChild(e), e._objFlags = 1096, this._debugDrawer = e.addComponent(_), this._debugDrawer.lineWidth = 3, this._debugDrawer.strokeColor = new m(255, 0, 0), this._debugDrawer.fillColor = new m(255, 0, 0))
        }
    },
    t.prototype.draw_shape = function() {
        if (this._draw_collide) {
            this.checkDebugDrawValid(),
            this._debugDrawer.clear();
            var e = {
                key: "scaleX",
                value: this.node.scaleX
            },
            t = {
                key: "scaleY",
                value: this.node.scaleY
            };
            if (b.LQGameUtil.recursion_node_property(this.node, e), b.LQGameUtil.recursion_node_property(this.node, t), 0 !== e.value && 0 !== t.value) switch (this._debugDrawer.node.scaleX = 1 / e.value, this._debugDrawer.node.scaleY = 1 / t.value, this._collide_shape) {
                case y.LQCollideShape.Circle:
                    this._debugDrawer.circle( + this._offset.x, +this._offset.y, this._radius),
                this._debugDrawer.stroke();
                break;
                case y.LQCollideShape.Rect:
                    this._debugDrawer.moveTo(.5 * -this._size.width + this._offset.x, .5 * -this._size.height + this._offset.y),
                this._debugDrawer.lineTo(.5 * -this._size.width + this._offset.x, .5 * +this._size.height + this._offset.y),
                this._debugDrawer.lineTo(.5 * this._size.width + this._offset.x, .5 * +this._size.height + this._offset.y),
                this._debugDrawer.lineTo(.5 * this._size.width + this._offset.x, .5 * -this._size.height + this._offset.y),
                this._debugDrawer.lineTo(.5 * -this._size.width + this._offset.x, .5 * -this._size.height + this._offset.y),
                this._debugDrawer.stroke();
                break;
                case y.LQCollideShape.Polygon:
                    this._debugDrawer.moveTo(this._polygon_points[0].x + this._offset.x, this._polygon_points[0].y + this._offset.y);
                for (var a = 1; a < this._polygon_points.length; a++) this._debugDrawer.lineTo(this._polygon_points[a].x + this._offset.x, this._polygon_points[a].y + this._offset.y);
                this._debugDrawer.lineTo(this._polygon_points[0].x + this._offset.x, this._polygon_points[0].y + this._offset.y),
                this._debugDrawer.stroke();
            }
        } else this._debugDrawer && this._debugDrawer.clear()
    },
    t.prototype.update_size = function(e, t) {
        e *= this.node.scale,
        t *= this.node.scale,
        this._size.width = e,
        this.world_rect.width = e,
        this.world_rect.half_width = .5 * e,
        this._size.height = t,
        this.world_rect.height = t,
        this.world_rect.half_height = .5 * t,
        this.draw_shape()
    },
    t.prototype.init_lq_collide = function() {
        this.world_rect = new w.LQRect(0, 0, this._size.width, this._size.height),
        this.draw_shape();
        var e = N.LQCollideSystem.get_info_by_id(this.collide_group_id);
        this.collide_mask = e.mask,
        this.collide_category = e.category,
        this.collide_id = a.id_maker++
    },
    t.prototype.enable_lq_collide = function() {
        this.collide_status !== y.LQCollideStatus.Live ? (this.is_enable = !0, this.collide_status = y.LQCollideStatus.Live, N.LQCollideSystem.add_collide(this)) : console.warn(this.node.name + "重复添加")
    },
    t.prototype.disable_lq_collide = function() {
        this.collide_status === y.LQCollideStatus.Live && (this.is_enable = !1, this.collide_status = y.LQCollideStatus.Idle, N.LQCollideSystem.remove_collide(this))
    },
    t.prototype.update_lq_collide = function() {},
    t.prototype.on_collide = function() {
        v.LQCollideConfig.switch_print_log && console.log(this.node.name + " collide")
    },
    t.prototype.on_enter = function() {
        v.LQCollideConfig.switch_print_log && console.log(this.node.name + " on_enter")
    },
    t.prototype.on_exit = function() {
        v.LQCollideConfig.switch_print_log && console.log(this.node.name + " on_exit")
    },
    t.id_maker = 1,
    n([c({
        displayName: "绘制形状"
    })], t.prototype, "draw_collide", null),
    n([c], t.prototype, "_draw_collide", void 0),
    n([c({
        tooltip: "碰撞形状，None就是无敌，不参与碰撞",
        type: u(y.LQCollideShape),
        displayName: "碰撞形状"
    })], t.prototype, "collide_shape", null),
    n([c()], t.prototype, "_collide_shape", void 0),
    n([c({
        type: u(v.LQCollideInfoList),
        tooltip: "碰撞类别",
        displayName: "碰撞类别"
    })], t.prototype, "collide_group_index", null),
    n([c({
        serializable: !1
    })], t.prototype, "_collide_group_index", void 0),
    n([c({
        visible: !1
    })], t.prototype, "collide_group_id", void 0),
    n([c({
        tooltip: "collide半径",
        visible: function() {
            return this._collide_shape === y.LQCollideShape.Circle
        },
        displayName: "半径"
    })], t.prototype, "radius", null),
    n([c()], t.prototype, "_radius", void 0),
    n([c({
        tooltip: "collide长宽",
        visible: function() {
            return this._collide_shape === y.LQCollideShape.Rect
        },
        displayName: "长宽"
    })], t.prototype, "size", null),
    n([c()], t.prototype, "_size", void 0),
    n([c({
        displayName: "位置偏移"
    })], t.prototype, "offset", null),
    n([c({
        type: h,
        visible: function() {
            return this._collide_shape === y.LQCollideShape.Polygon
        },
        displayName: "多边形碰撞点"
    })], t.prototype, "polygon_points", null),
    n([c()], t.prototype, "_polygon_points", void 0),
    n([c()], t.prototype, "_offset", void 0),
    n([c({
        displayName: "自定义字符串"
    })], t.prototype, "data_string", void 0),
    a = n([r, s(S.LQCollideBase), d("lq/collide")], t)
} (l);
a.LQCollide = O