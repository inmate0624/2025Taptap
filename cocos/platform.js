var e = require;
var t = module;
var a = exports;
var o;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.platform = a.platform_data = a.platform_type = void 0,
function(e) {
    e[e.is_tt = 0] = "is_tt",
    e[e.is_233_lianyun = 1] = "is_233_lianyun",
    e[e.is_233_mailiang = 2] = "is_233_mailiang",
    e[e.is_vivo = 3] = "is_vivo",
    e[e.is_taptap = 4] = "is_taptap",
    e[e.is_topon = 5] = "is_topon",
    e[e.is_xiaomi = 6] = "is_xiaomi",
    e[e.is_native = 7] = "is_native"
} (o = a.platform_type || (a.platform_type = {}));
var i = function() {
    this.fanhui_time = 0,
    this.fanhui_AD = 0,
    this.quanpingshiping_to_jilishiping = 5,
    this.first_time_quanpingshiping_AD = 0,
    this.interval_time_quanpingshiping_AD = 0,
    this.chaping_AD = 0
};
a.platform_data = i;
var n = function() {
    function e() {
        this.now_platform = o.is_tt,
        this.rank_channel = "",
        this.data = new i
    }
    return Object.defineProperty(e, "Instance", {
        get: function() {
            return this._instace || (this._instace = new e),
            this._instace
        },
        enumerable: !1,
        configurable: !0
    }),
    e
} ();
a.platform = n.Instance