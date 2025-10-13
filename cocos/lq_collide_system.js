var e = require;
var t = module;
var a = exports;
a.__esModule = !0,
a.LQCollideSystem = void 0;
var o = e("lq_const"),
i = e("lq_math_util"),
n = e("lq_collide_config"),
r = e("lq_data"),
c = cc.Vec2,
s = cc.game,
d = cc.director,
l = cc.Scheduler,
u = cc.misc,
p = function() {
    function e(e, t, a, o) {
        this.collide_arr = [],
        this.node_arr = [],
        this.max_object = t || 10,
        this.max_level = a || 4,
        this.level = o || 0,
        this.rect = e,
        this.collide_arr = [],
        this.node_arr = []
    }
    return e.prototype.split = function() {
        var t = this.level + 1,
        a = .5 * this.rect.width,
        o = .5 * this.rect.height,
        i = this.rect.x,
        n = this.rect.y;
        this.node_arr[0] = new e(new r.LQRect(i + a, n, a, o), this.max_object, this.max_level, t),
        this.node_arr[1] = new e(new r.LQRect(i, n, a, o), this.max_object, this.max_level, t),
        this.node_arr[2] = new e(new r.LQRect(i, n + o, a, o), this.max_object, this.max_level, t),
        this.node_arr[3] = new e(new r.LQRect(i + a, n + o, a, o), this.max_object, this.max_level, t)
    },
    e.prototype.get_index = function(e) {
        var t = [],
        a = this.rect.x + this.rect.half_width,
        o = this.rect.y + this.rect.half_height,
        i = e.world_rect.y + e.world_rect.half_height > o,
        n = e.world_rect.x - e.world_rect.half_width < a,
        r = e.world_rect.x + e.world_rect.half_width > a,
        c = e.world_rect.y - e.world_rect.half_height < o;
        return r && i && t.push(0),
        n && i && t.push(1),
        n && c && t.push(2),
        c && r && t.push(3),
        t
    },
    e.prototype.insert = function(e) {
        var t;
        if (this.node_arr.length) {
            t = this.get_index(e);
            for (var a = 0; a < t.length; a++) this.node_arr[t[a]].insert(e)
        } else if (this.collide_arr.push(e), this.collide_arr.length > this.max_object && this.level < this.max_level) {
            for (this.node_arr.length || this.split(), a = 0; a < this.collide_arr.length; a++) {
                var o = this.collide_arr[a];
                t = this.get_index(o);
                for (var i = 0; i < t.length; i++) this.node_arr[t[i]].insert(o)
            }
            this.collide_arr = []
        }
    },
    e.prototype.retrieve = function(t) {
        var a, o = this.get_index(t);
        if (this.collide_arr.length && (a = e.temp_collide_arr).push.apply(a, this.collide_arr), this.node_arr.length) for (var i = 0; i < o.length; i++) this.node_arr[o[i]].retrieve(t)
    },
    e.prototype.get_all_area = function() {
        if (this.collide_arr.length && e.all_collide_arr.push(this.collide_arr), this.node_arr.length) for (var t = 0; t < 4; t++) this.node_arr[t].get_all_area()
    },
    e.prototype.clear = function() {
        this.collide_arr = [];
        for (var e = 0; e < this.node_arr.length; e++) this.node_arr.length && this.node_arr[e].clear();
        this.node_arr = []
    },
    e.temp_collide_arr = [],
    e.all_collide_arr = [],
    e
} (),
h = function() {
    function e() {}
    return e.cache_polygon = function(e) {
        if (e._collide_shape === o.LQCollideShape.Rect) {
            e.cache_polygon_points = [];
            var t = e.world_rect.top_left();
            e.cache_polygon_points.push(t.x),
            e.cache_polygon_points.push(t.y),
            t = e.world_rect.bottom_left(),
            e.cache_polygon_points.push(t.x),
            e.cache_polygon_points.push(t.y),
            t = e.world_rect.bottom_right(),
            e.cache_polygon_points.push(t.x),
            e.cache_polygon_points.push(t.y),
            t = e.world_rect.top_right(),
            e.cache_polygon_points.push(t.x),
            e.cache_polygon_points.push(t.y)
        } else if (e._collide_shape === o.LQCollideShape.Polygon) if (e.cache_polygon_points = [], 0 == e.node.angle) for (var a = 0; a < e._polygon_points.length; a++) t = e.world_rect.add(e._polygon_points[a]),
        e.cache_polygon_points.push(t.x),
        e.cache_polygon_points.push(t.y);
        else {
            var i = u.degreesToRadians(e.node.angle),
            n = Math.sin(i),
            r = Math.cos(i);
            for (a = 0; a < e._polygon_points.length; a++) s = e._polygon_points[a],
            t = new c(s.x * r - s.y * n + e.world_rect.x, s.x * n + s.y * r + e.world_rect.y),
            e.cache_polygon_points.push(t.x),
            e.cache_polygon_points.push(t.y)
        }
        var s
    }, e._updateWorldMatrix = function(t) {
        if (t._parent && e._updateWorldMatrix(t._parent), t._worldMatDirty) {
            this.tmp_bool = !0,
            t._calculWorldMatrix();
            for (var a = t._children,
            o = 0,
            i = a.length; o < i; o++) a[o]._worldMatDirty = !0
        }
    },
    e.transformMat4 = function(e, t, a) {
        var o = a.m;
        return e.x = o[0] * t.x + o[4] * t.y + o[12],
        e.y = o[1] * t.x + o[5] * t.y + o[13],
        e
    },
    e.update_world_rect = function(t) {
        t.world_rect && (this.tmp_bool = !1, this._updateWorldMatrix(t.node), this.tmp_bool && (t.cache_polygon_points = void 0), e.transformMat4(t.world_rect, t._offset, t.node._worldMatrix))
    },
    e.update_collide_logic = function(e) {
        if (e.is_open_func) for (var t in e.collide_map) {
            var a = e.collide_map[t];
            1 === a.status ? a.status = 2 : (delete e.collide_map[t], e.on_exit(a.collide))
        }
        e.update_lq_collide()
    },
    e.collide_other = function(e, t) {
        if (e.is_open_func) {
            var a = e.collide_map[t.collide_id];
            a ? a.status = 1 : (e.collide_map[t.collide_id] = {
                collide: t,
                status: 1
            },
            e.on_enter(t))
        }
        if (t.is_open_func) {
            var o = t.collide_map[e.collide_id];
            o ? o.status = 1 : (t.collide_map[e.collide_id] = {
                collide: e,
                status: 1
            },
            t.on_enter(e))
        }
        e.on_collide(t),
        t.on_collide(e)
    },
    e.add_collide = function(e) {
        this.update_world_rect(e),
        this.collide_arr.push(e)
    },
    e.remove_collide = function(e) {
        for (var t = this.collide_arr.length - 1; t >= 0; t--) if (this.collide_arr[t].collide_id === e.collide_id) {
            this.collide_arr.splice(t, 1);
            break
        }
    },
    e.line_point = function(e, t, a, o, i, n) {
        return Math.abs(this.distanceSquared(e, t, a, o) - (this.distanceSquared(e, t, i, n) + this.distanceSquared(a, o, i, n))) <= 1
    },
    e.distanceSquared = function(e, t, a, o) {
        return Math.sqrt(Math.pow(e - a, 2) + Math.pow(t - o, 2))
    },
    e.polygon_point = function(e, t, a) {
        var o, i, n = e.length,
        r = !1;
        for (o = 0, i = n - 2; o < n; o += 2) e[o + 1] > a != e[i + 1] > a && t < (e[i] - e[o]) * (a - e[o + 1]) / (e[i + 1] - e[o + 1]) + e[o] && (r = !r),
        i = o;
        if (r) return ! 0;
        for (o = 0; o < n; o += 2) {
            var c = e[o],
            s = e[o + 1],
            d = void 0,
            l = void 0;
            if (o === n - 2 ? (d = e[0], l = e[1]) : (d = e[o + 2], l = e[o + 3]), this.line_point(c, s, d, l, t, a)) return ! 0
        }
        return ! 1
    },
    e.polygon_circle = function(e, t, a, o) {
        if (this.polygon_point(e, t, a)) return ! 0;
        for (var i = e.length,
        n = 0; n < i - 2; n += 2) if (this.line_circle(e[n], e[n + 1], e[n + 2], e[n + 3], t, a, o)) return ! 0;
        return this.line_circle(e[0], e[1], e[i - 2], e[i - 1], t, a, o)
    },
    e.line_circle = function(e, t, a, o, i, n, r) {
        var c = [i - e, n - t],
        s = [a - e, o - t],
        d = this.dot(s, s),
        l = this.dot(c, s) / d,
        u = [s[0] * (l = (l = l < 0 ? 0 : l) > 1 ? 1 : l) + e - i, s[1] * l + t - n];
        return this.dot(u, u) <= r * r
    },
    e.dot = function(e, t) {
        return e[0] * t[0] + e[1] * t[1]
    },
    e.update_logic = function() {
        if (this.is_enable) if (n.LQCollideConfig.switch_quad_tree) {
            this.quad_tree.clear();
            for (var e = this.collide_arr.length - 1; e >= 0; e--) {
                if (! (s = this.collide_arr[e])) return;
                s.isValid ? (this.update_collide_logic(s), s.is_enable && (this.update_world_rect(s), this.quad_tree.insert(s))) : this.collide_arr.splice(e, 1)
            }
            p.all_collide_arr = [],
            this.quad_tree.get_all_area();
            for (var t = 0; t < p.all_collide_arr.length; t++) {
                var a = p.all_collide_arr[t];
                for (e = 0; e < a.length; e++) for (var o = a[e], r = e + 1; r < a.length; r++) {
                    var c = a[r];
                    o.collide_category & c.collide_mask && o !== c && (1 === o._collide_shape && 1 === c._collide_shape ? i.LQMathUtil.intersects_rect(o.world_rect, c.world_rect) && this.collide_other(o, c) : 1 === o._collide_shape && 2 === c._collide_shape ? i.LQMathUtil.intersects_circle_rect(c.world_rect, c.radius, o.world_rect) && this.collide_other(o, c) : 2 === o._collide_shape && 1 === c._collide_shape ? i.LQMathUtil.intersects_circle_rect(o.world_rect, o.radius, c.world_rect) && this.collide_other(o, c) : 2 === o._collide_shape && 2 === c._collide_shape ? i.LQMathUtil.intersects_circle(o.world_rect, o.radius, c.world_rect, c.radius) && this.collide_other(o, c) : 3 == o._collide_shape && 2 == c._collide_shape ? (o.cache_polygon_points || this.cache_polygon(o), this.polygon_circle(o.cache_polygon_points, c.world_rect.x, c.world_rect.y, c.radius) && this.collide_other(o, c)) : 2 == o._collide_shape && 3 == c._collide_shape ? (c.cache_polygon_points || this.cache_polygon(c), this.polygon_circle(c.cache_polygon_points, o.world_rect.x, o.world_rect.y, o.radius) && this.collide_other(o, c)) : (o.cache_polygon_points || this.cache_polygon(o), c.cache_polygon_points || this.cache_polygon(c), this.polygon_polygon(o.cache_polygon_points, c.cache_polygon_points) && this.collide_other(o, c)))
                }
            }
        } else {
            for (a = [], e = this.collide_arr.length - 1; e >= 0; e--) {
                var s;
                if (! (s = this.collide_arr[e])) return;
                s.isValid ? (this.update_collide_logic(s), s.is_enable && (this.update_world_rect(s), a.push(s))) : this.collide_arr.splice(e, 1)
            }
            var d = a.length;
            for (e = 0; e < d; e++) for (o = a[e], r = e + 1; r < d; r++) c = a[r],
            o.collide_category & c.collide_mask && (1 === o._collide_shape && 1 === c._collide_shape ? i.LQMathUtil.intersects_rect(o.world_rect, c.world_rect) && this.collide_other(o, c) : 1 === o._collide_shape && 2 === c._collide_shape ? i.LQMathUtil.intersects_circle_rect(c.world_rect, c.radius, o.world_rect) && this.collide_other(o, c) : 2 === o._collide_shape && 1 === c._collide_shape ? i.LQMathUtil.intersects_circle_rect(o.world_rect, o.radius, c.world_rect) && this.collide_other(o, c) : 2 === o._collide_shape && 2 === c._collide_shape ? i.LQMathUtil.intersects_circle(o.world_rect, o.radius, c.world_rect, c.radius) && this.collide_other(o, c) : 3 == o._collide_shape && 2 == c._collide_shape ? (o.cache_polygon_points || this.cache_polygon(o), this.polygon_circle(o.cache_polygon_points, c.world_rect.x, c.world_rect.y, c.radius) && this.collide_other(o, c)) : 2 == o._collide_shape && 3 == c._collide_shape ? (c.cache_polygon_points || this.cache_polygon(c), this.polygon_circle(c.cache_polygon_points, o.world_rect.x, o.world_rect.y, o.radius) && this.collide_other(o, c)) : (o.cache_polygon_points || this.cache_polygon(o), c.cache_polygon_points || this.cache_polygon(c), this.polygon_polygon(o.cache_polygon_points, c.cache_polygon_points) && this.collide_other(o, c)))
        }
    },
    e.polygon_polygon = function(e, t) {
        for (var a, o, i, n, r, c, s = e,
        d = t,
        l = [s, d], u = 0; u < l.length; u++) for (var p = l[u], h = 0; h < p.length; h += 2) {
            var _ = (h + 2) % p.length,
            f = {
                x: p[_ + 1] - p[h + 1],
                y: p[h] - p[_]
            };
            for (a = null, o = null, c = 0; c < s.length; c += 2) i = f.x * s[c] + f.y * s[c + 1],
            (null === a || i < a) && (a = i),
            (null === o || i > o) && (o = i);
            for (n = null, r = null, c = 0; c < d.length; c += 2) i = f.x * d[c] + f.y * d[c + 1],
            (null === n || i < n) && (n = i),
            (null === r || i > r) && (r = i);
            if (o < n || r < a) return ! 1
        }
        return ! 0
    },
    e.get_group_by_index = function(e) {
        for (var t in n.LQCollideConfig.collide_group_map) {
            var a = n.LQCollideConfig.collide_group_map[t];
            if (a.index === e) return a
        }
    },
    e.get_info_by_id = function(e) {
        var t;
        for (var a in n.LQCollideConfig.collide_group_map) {
            var o = n.LQCollideConfig.collide_group_map[a];
            if (o.id === e) return o;
            t || (t = o)
        }
        return t
    },
    e.find_nearest_collide = function(t) {
        for (var a = [], o = e.collide_arr.length - 1; o >= 0; o--) {
            var i = e.collide_arr[o];
            t !== i && i.is_enable && (t.follow_target_category ? i.collide_category === t.follow_target_category && a.push(i) : 0 != (i.collide_category & t.collide_mask) && a.push(i))
        }
        return a.sort(function(e, a) {
            return t.world_rect.sub(e.world_rect).magSqr() - t.world_rect.sub(a.world_rect).magSqr()
        }),
        a[0]
    },
    e.clear = function(e) {
        if (void 0 === e && (e = !1), e) for (var t = this.collide_arr.length - 1; t >= 0; t--) {
            var a = this.collide_arr[t];
            a.isValid && a.node.destroy()
        }
        this.collide_arr = []
    },
    e.check_collide = function(e) {
        var t, a = [];
        n.LQCollideConfig.switch_quad_tree ? (p.temp_collide_arr = [], this.quad_tree.retrieve(e), t = p.temp_collide_arr) : t = this.collide_arr;
        for (var o = 0; o < t.length; o++) {
            var r = t[o];
            e !== r && e.collide_category & r.collide_mask && (1 === e._collide_shape && 1 === r._collide_shape ? i.LQMathUtil.intersects_rect(e.world_rect, r.world_rect) && a.push(r) : 1 === e._collide_shape && 2 === r._collide_shape ? i.LQMathUtil.intersects_circle_rect(r.world_rect, r.radius, e.world_rect) && a.push(r) : 2 === e._collide_shape && 1 === r._collide_shape ? i.LQMathUtil.intersects_circle_rect(e.world_rect, e.radius, r.world_rect) && a.push(r) : 2 === e._collide_shape && 2 === r._collide_shape ? i.LQMathUtil.intersects_circle(e.world_rect, e.radius, r.world_rect, r.radius) && a.push(r) : this.polygon_polygon(e, r) && a.push(r))
        }
        return a
    },
    e.is_enable = !1,
    e.collide_arr = [],
    e.quad_tree = new p(new r.LQRect(n.LQCollideConfig.active_area_x, n.LQCollideConfig.active_area_y, n.LQCollideConfig.active_area_width, n.LQCollideConfig.active_area_height), n.LQCollideConfig.max_node_len, n.LQCollideConfig.max_node_level),
    e
} ();
a.LQCollideSystem = h;
var _ = function() {
    function e() {
        this.flag = !0
    }
    return e.prototype.update = function(e) {
        60 === n.LQCollideConfig.per_frame ? h.update_logic(e) : this.flag ? (this.flag = !1, h.update_logic(e)) : this.flag = !0
    },
    e
} ();
s.on(s.EVENT_GAME_INITED,
function() {
    if (n.LQCollideConfig.switch_auto_run) {
        var e = new _;
        d.getScheduler().enableForTarget(e),
        d.getScheduler().scheduleUpdate(e, l.PRIORITY_SYSTEM, !1)
    }
})