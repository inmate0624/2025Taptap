var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.LQPlatformUtil = void 0;
var o = e("lq_const"),
i = function() {
    function e() {}
    return e.init = function() {
        if ("undefined" != typeof qq) this.platform_type = o.LQPlatformType.qq;
        else if ("undefined" != typeof swan) this.platform_type = o.LQPlatformType.baidu;
        else if ("undefined" != typeof tt) switch (this.platform_type = o.LQPlatformType.tt, tt.getSystemInfoSync().appName) {
            case "Toutiao":
                this.byte_dance_type = o.LQByteDanceType.tt;
            break;
            case "news_article_lite":
                this.byte_dance_type = o.LQByteDanceType.tt_lite;
            break;
            case "Douyin":
                this.byte_dance_type = o.LQByteDanceType.douyin;
            break;
            case "douyin_lite":
                this.byte_dance_type = o.LQByteDanceType.douyin_lite;
            break;
            case "PPX":
                this.byte_dance_type = o.LQByteDanceType.ppx;
            break;
            case "devtools":
                this.byte_dance_type = o.LQByteDanceType.devtools;
        } else "undefined" != typeof qg ? qg.getBattle ? this.platform_type = o.LQPlatformType.oppo: this.platform_type = o.LQPlatformType.vivo: "undefined" != typeof wx ? this.platform_type = o.LQPlatformType.wx: "undefined" != typeof jsb ? cc.sys.os === cc.sys.OS_ANDROID ? this.platform_type = o.LQPlatformType.android: cc.sys.os === cc.sys.OS_IOS ? this.platform_type = o.LQPlatformType.ios: this.platform_type = o.LQPlatformType.unknown: cc.sys.isBrowser && (this.platform_type = o.LQPlatformType.browser)
    },
    e.get_platform = function() {
        return this.platform_type
    },
    e.get_byte_dance = function() {
        return this.byte_dance_type
    },
    e.is_wx = function() {
        return this.platform_type === o.LQPlatformType.wx
    },
    e.is_tt = function() {
        return this.platform_type === o.LQPlatformType.tt
    },
    e.is_oppo = function() {
        return this.platform_type === o.LQPlatformType.oppo
    },
    e.is_vivo = function() {
        return this.platform_type === o.LQPlatformType.vivo
    },
    e.is_ov = function() {
        return this.platform_type === o.LQPlatformType.oppo || this.platform_type === o.LQPlatformType.vivo
    },
    e.is_browser = function() {
        return this.platform_type === o.LQPlatformType.browser
    },
    e.is_android = function() {
        return this.platform_type === o.LQPlatformType.android
    },
    e.is_ios = function() {
        return this.platform_type === o.LQPlatformType.ios
    },
    e.is_native = function() {
        return this.platform_type === o.LQPlatformType.android || this.platform_type === o.LQPlatformType.ios
    },
    e.is_qq = function() {
        return this.platform_type === o.LQPlatformType.qq
    },
    e.is_baidu = function() {
        return this.platform_type === o.LQPlatformType.baidu
    },
    e.is_kwaigame = function() {
        return this.platform_type === o.LQPlatformType.kwaigame
    },
    e
} ();
a.LQPlatformUtil = i,
i.init(),
i.is_tt() ? console.log("---------当前平台:" + i.get_byte_dance()) : console.log("---------当前平台:" + i.get_platform())