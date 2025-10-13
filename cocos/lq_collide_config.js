//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.LQCollideConfig = a.LQCollideInfoList = void 0,
function(e) {
    e[e.default = 0] = "default",
    e[e.role = 1] = "role",
    e[e.role_bullet = 2] = "role_bullet",
    e[e.enemy = 3] = "enemy",
    e[e.enemy_bullet = 4] = "enemy_bullet",
    e[e.prop = 5] = "prop"
} (a.LQCollideInfoList || (a.LQCollideInfoList = {}));
var o = function() {
    function e() {}
    return e.switch_auto_run = !0,
    e.switch_print_log = !1,
    e.switch_quad_tree = !0,
    e.max_node_len = 10,
    e.per_frame = 60,
    e.max_node_level = 4,
    e.active_area_x = 0,
    e.active_area_y = 0,
    e.active_area_width = 1e3,
    e.active_area_height = 1e3,
    e.collide_group_map = {
        default: {
            id: 1,
            category: 1,
            index: 0,
            mask: 3
        },
        role: {
            id: 2,
            category: 2,
            index: 1,
            mask: 3
        },
        role_bullet: {
            id: 3,
            category: 4,
            index: 2,
            mask: 0
        },
        enemy: {
            id: 4,
            category: 8,
            index: 3,
            mask: 0
        },
        enemy_bullet: {
            id: 5,
            category: 16,
            index: 4,
            mask: 0
        },
        prop: {
            id: 6,
            category: 32,
            index: 5,
            mask: 0
        }
    },
    e
} ();
a.LQCollideConfig = o