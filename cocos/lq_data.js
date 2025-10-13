var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.LQPlatformData = a.LQShareData = a.LQNativeComponent = a.LQRect = void 0;
var o = cc.Vec2,
i = cc.Rect,
n = function() {
    function e(e, t, a, o) {
        this.x = e,
        this.y = t,
        this.width = a,
        this.height = o,
        this.half_width = .5 * a,
        this.half_height = .5 * o
    }
    return e.prototype.top_left = function() {
        return new o(this.x - this.half_width, this.y + this.half_height)
    },
    e.prototype.top_right = function() {
        return new o(this.x + this.half_width, this.y + this.half_height)
    },
    e.prototype.bottom_left = function() {
        return new o(this.x - this.half_width, this.y - this.half_height)
    },
    e.prototype.bottom_right = function() {
        return new o(this.x + this.half_width, this.y - this.half_height)
    },
    e.prototype.pos = function() {
        return new o(this.x, this.y)
    },
    e.prototype.sub = function(e) {
        return new o(e.x - this.x, e.y - this.y)
    },
    e.prototype.add = function(e) {
        return new o(e.x + this.x, e.y + this.y)
    },
    e.prototype.to_cocos_rect = function() {
        return new i(this.x - this.half_width, this.y - this.half_height, this.width, this.height)
    },
    e
} ();
a.LQRect = n;
a.LQNativeComponent = function() {
    this.node_btn_arr = []
};
a.LQShareData = function(e) {
    e.title && (this.title = e.title),
    e.remote_url && (this.remote_url = e.remote_url),
    e.url_id && (this.url_id = e.url_id),
    e.query && (this.query = e.query),
    e.content && (this.content = e.content),
    e.extra && (this.extra = e.extra),
    e.type && (this.type = e.type)
};
a.LQPlatformData = function() {}