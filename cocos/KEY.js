var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.KEY = void 0,
function(e) {
    var t, a, o, i; (function(e) {
        e.seletgame_view = "seletgame_view",
        e.duidie_view = "duidie_view",
        e.reselectCard = "reselectCard"
    })(o = e.ViewName || (e.ViewName = {})),
    e.ViewCF = ((t = {})[o.seletgame_view] = {
        prefab: "seletgame_view",
        isCommonlyUsed: !1
    },
    t[o.duidie_view] = {
        prefab: "duidie_view",
        isCommonlyUsed: !1
    },
    t[o.reselectCard] = {
        prefab: "reselectCard",
        isCommonlyUsed: !1
    },
    t),
    function(e) {
        e.medalNode = "medalNode",
        e.tipNode = "tipNode",
        e.tipNode2 = "tipNode2",
        e.tipNode3 = "tipNode3",
        e.selectCard = "selectCard",
        e.chengjiu_item = "chengjiu_item",
        e.paihang_item = "paihang_item",
        e.card = "card",
        e.card_xuxian = "card_xuxian",
        e.card_bolang = "card_bolang",
        e.selectcard_bolang = "selectcard_bolang",
        e.lantu_item = "lantu_item",
        e.cardItem = "cardItem",
        e.cundang = "cundang",
        e.yanwu = "yanwu",
        e.cardJinDu = "cardJinDu",
        e.hurt = "hurt",
        e.baozha = "baozha",
        e.huojianyanwu = "huojianyanwu",
        e.suipian = "suipian",
        e.shiling_panel = "shiling_panel",
        e.setup_panel = "setup_panel",
        e.closecundang_panel = "closecundang_panel",
        e.lantu_panel = "lantu_panel",
        e.fuhuo_all_panel = "fuhuo_all_panel",
        e.fuhuo_panel = "fuhuo_panel",
        e.taskComplete_panel = "taskComplete_panel",
        e.taskComplete_panel2 = "taskComplete_panel2",
        e.gamePause_panel = "gamePause_panel",
        e.cardExcess_panel = "cardExcess_panel",
        e.day_result_panel = "day_result_panel",
        e.day_start_panel = "day_start_panel",
        e.gameStop_panel = "gameStop_panel",
        e.notice_panel = "notice_panel",
        e.chengjiu_panel = "chengjiu_panel",
        e.wanhuisunshi_panel = "wanhuisunshi_panel",
        e.levelOpen_panel = "levelOpen_panel",
        e.rank_panel = "rank_panel",
        e.duidiexiuxian_panel = "duidiexiuxian_panel"
    } (i = e.poolName || (e.poolName = {})),
    e.POOLCF = ((a = {})[i.medalNode] = {
        prefab: "common/medalNode",
        usePool: !0,
        maxCount: 10
    },
    a[i.tipNode] = {
        prefab: "common/tipNode",
        usePool: !0,
        maxCount: 3
    },
    a[i.tipNode2] = {
        prefab: "common/tipNode2",
        usePool: !0,
        maxCount: 3
    },
    a[i.tipNode3] = {
        prefab: "common/tipNode3",
        usePool: !0,
        maxCount: 3
    },
    a[i.selectCard] = {
        prefab: "ui/selectCard",
        usePool: !0,
        maxCount: 300
    },
    a[i.chengjiu_item] = {
        prefab: "ui/chengjiu_item",
        usePool: !0,
        maxCount: 300
    },
    a[i.paihang_item] = {
        prefab: "ui/paihang_item",
        usePool: !0,
        maxCount: 300
    },
    a[i.card] = {
        prefab: "game/card",
        usePool: !0,
        maxCount: 300
    },
    a[i.card_xuxian] = {
        prefab: "game/card_xuxian",
        usePool: !0,
        maxCount: 300
    },
    a[i.card_bolang] = {
        prefab: "game/card_bolang",
        usePool: !0,
        maxCount: 300
    },
    a[i.selectcard_bolang] = {
        prefab: "game/selectcard_bolang",
        usePool: !0,
        maxCount: 300
    },
    a[i.yanwu] = {
        prefab: "game/yanwu",
        usePool: !0,
        maxCount: 300
    },
    a[i.cardJinDu] = {
        prefab: "game/cardJinDu",
        usePool: !0,
        maxCount: 300
    },
    a[i.hurt] = {
        prefab: "game/hurt",
        usePool: !0,
        maxCount: 100
    },
    a[i.baozha] = {
        prefab: "game/baozha",
        usePool: !0,
        maxCount: 100
    },
    a[i.huojianyanwu] = {
        prefab: "game/huojianyanwu",
        usePool: !0,
        maxCount: 100
    },
    a[i.suipian] = {
        prefab: "game/suipian",
        usePool: !0,
        maxCount: 100
    },
    a[i.cardItem] = {
        prefab: "game/cardItem",
        usePool: !0,
        maxCount: 50
    },
    a[i.lantu_item] = {
        prefab: "game/lantu_panel/lantu_item",
        usePool: !0,
        maxCount: 100
    },
    a[i.cundang] = {
        prefab: "ui/cundang",
        usePool: !0,
        maxCount: 5
    },
    a[i.shiling_panel] = {
        prefab: "panel/shiling_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.setup_panel] = {
        prefab: "panel/setup_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.closecundang_panel] = {
        prefab: "panel/closecundang_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.lantu_panel] = {
        prefab: "panel/lantu_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.fuhuo_all_panel] = {
        prefab: "panel/fuhuo_all_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.fuhuo_panel] = {
        prefab: "panel/fuhuo_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.taskComplete_panel] = {
        prefab: "panel/taskComplete_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.taskComplete_panel2] = {
        prefab: "panel/taskComplete_panel2",
        usePool: !0,
        maxCount: 1
    },
    a[i.gamePause_panel] = {
        prefab: "panel/gamePause_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.cardExcess_panel] = {
        prefab: "panel/cardExcess_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.day_result_panel] = {
        prefab: "panel/day_result_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.day_start_panel] = {
        prefab: "panel/day_start_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.gameStop_panel] = {
        prefab: "panel/gameStop_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.notice_panel] = {
        prefab: "panel/notice_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.chengjiu_panel] = {
        prefab: "panel/chengjiu_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.wanhuisunshi_panel] = {
        prefab: "panel/wanhuisunshi_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.levelOpen_panel] = {
        prefab: "panel/levelOpen_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.rank_panel] = {
        prefab: "panel/rank_panel",
        usePool: !0,
        maxCount: 1
    },
    a[i.duidiexiuxian_panel] = {
        prefab: "panel/duidiexiuxian_panel",
        usePool: !0,
        maxCount: 1
    },
    a),
    function(e) {
        e.btn = "anjian_01",
        e.bgm = "beijing"
    } (e.audioName || (e.audioName = {}))
} (a.KEY || (a.KEY = {}))