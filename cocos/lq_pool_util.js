var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.LQPoolUtil = void 0;
var o = cc.Animation,
i = cc.ParticleSystem,
n = cc.instantiate,
r = function() {
    function e() {}
    return e.reset_ani = function(e) {
        var t = e.getComponent(o);
        if (t) {
            var a = t.currentClip ? t.currentClip: t.defaultClip;
            if (!a) return;
            t.playOnLoad && a && a.wrapMode === cc.WrapMode.Normal && t.play(a.name)
        } else {
            var i = e.getComponent(sp.Skeleton);
            i && !i.loop && i.setAnimation(0, i.animation, !1)
        }
        for (var n = 0; n < e.childrenCount; n++) {
            var r = e.children[n];
            this.reset_ani(r)
        }
    },
    e.recursion_stop_particle = function(e, t) {
        var a = e.getComponent(i);
        a && (a.stopSystem(), t.has = !0, a.node.opacity = 0);
        for (var o = 0; o < e.childrenCount; o++) {
            var n = e.children[o];
            this.recursion_stop_particle(n, t)
        }
    },
    e.recursion_reset_particle = function(e) {
        if (e.isValid) {
            var t = e.getComponent(i);
            t && (t.resetSystem(), t.node.opacity = 255);
            for (var a = 0; a < e.childrenCount; a++) {
                var o = e.children[a];
                this.recursion_reset_particle(o)
            }
        }
    },
    e.get_node_from_pool = function(e, t) {
        var a = this.any_pool[t.uuid];
        a || (this.any_pool[t.uuid] = [], a = []);
        var o = a.pop();
        return o && o.isValid ? (o.active = !0, o.is_from_pool = !0, this.reset_ani(o)) : ((o = n(t)).recovery_uuid = t.uuid, o.is_from_pool = !1, e.addChild(o)),
        o
    },
    e.check_pool_push = function(e, t) {
        for (var a = 0; a < e.length; a++) if (e[a] === t) return void console.warn("池子不能重复添加节点", t.name, t.recovery_uuid);
        t.active = !1,
        e.push(t)
    },
    e.push_node_to_pool = function(e) {
        var t = this;
        if (e.recovery_uuid && this.any_pool[e.recovery_uuid]) {
            var a = {
                has: !1
            };
            if (this.recursion_stop_particle(e, a), a.has) {
                var o = e.opacity;
                e.opacity = 0,
                setTimeout(function() {
                    t.recursion_reset_particle(e),
                    e.opacity = o,
                    t.check_pool_push(t.any_pool[e.recovery_uuid], e)
                },
                500)
            } else this.check_pool_push(this.any_pool[e.recovery_uuid], e)
        } else e.isValid && e.destroy()
    },
    e.any_pool = {},
    e
} ();
a.LQPoolUtil = r