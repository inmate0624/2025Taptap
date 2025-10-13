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
a._mainScene = void 0;
var r = e("winNodeMager"),
c = e("KEY"),
s = e("audioMager"),
d = e("poolNodeMager"),
l = e("gameDataManager"),
u = e("enum_type"),
p = e("commonFunction"),
h = e("platfrom_fun"),
_ = e("IosApi"),
f = e("AndroidApi"),
g = e("getDataFromServer"),
m = cc._decorator,
y = m.ccclass,
v = m.property;
a._mainScene = null;
var N = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.game = null,
        t.ui = null,
        t
    }
    return i(t, e),
    t.prototype.onLoad = function() {
        h.default.getInstance().loadViedeo(),
        l._gameStateData.scene = this.node,
        a._mainScene = this,
        s._audioMager.playBGM(c.KEY.audioName.bgm),
        this.getLanTuData(),
        window.tt && h.default.getInstance().appName && h.default.getInstance().appName === h.default.getInstance().appNames[0] && (this.ui.getChildByName("tianjaizuomian").active = !0, this.ui.getChildByName("guanzhuwomen").active = !0),
        (cc.sys.isNative || window.hasOwnProperty("h5api")) && (this.ui.getChildByName("600").active = !1),
        cc.sys.isNative && "4399" == f.default.get().sendJavaGetChannel() ? this.ui.getChildByName("on_shiling").active = !0 : cc.sys.isNative && "OPPO" == f.default.get().sendJavaGetChannel() && (this.ui.getChildByName("oppoMoreBtn").active = !0),
        window.kwaigame && (this.ui.getChildByName("on_setup").getComponent(cc.Widget).top = 85),
        "" == l._userData.openId && g.default.getOpenId(null),
        this.getOpenTting()
    },
    t.prototype.getOpenTting = function() {
        window.tt && tt.getSetting({
            success: function(e) {
                0 == e.authSetting["scope.userInfo"] && tt.authorize({
                    scope: "scope.userInfo",
                    success: function() {
                        tt.getUserInfo({
                            success: function(e) {
                                l._userData.gameName = e.userInfo.nickName,
                                l._userData.headIconUrl = e.userInfo.avatarUrl,
                                l.UserDataManger.preData()
                            },
                            fail: function() {}
                        })
                    }
                })
            },
            fail: function() {
                console.log("getSetting 调用失败")
            }
        })
    },
    t.prototype.getLanTuData = function() {
        var e = l._gameStateData.CardsList;
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && e[t].Type == u.card_type.lantu && l._gameStateData.lantuCardList.push(parseInt(t));
        cc.resources.load("json/TaskList", cc.JsonAsset,
        function(e, t) {
            if (e) return p.commonTool.appLog("加载TaskList.json文件出错:", e);
            var a = t.json;
            for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && l._gameStateData.renwuIdArray.push(o)
        })
    },
    t.prototype.on_setup = function() {
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        d._poolNodeMager.getPoolNode(c.KEY.poolName.setup_panel)
    },
    t.prototype.on_chengjiu = function() {
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        d._poolNodeMager.getPoolNode(c.KEY.poolName.chengjiu_panel)
    },
    t.prototype.on_shiling = function() {
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        d._poolNodeMager.getPoolNode(c.KEY.poolName.shiling_panel)
    },
    t.prototype.start = function() {
        cc.macro.ENABLE_MULTI_TOUCH = !1
    },
    t.prototype.update_ui_active = function(e) {
        this.ui.active = e
    },
    t.prototype.on_startGame = function() {
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        this.update_ui_active(!1),
        r._winNodeMager.showWinNode(c.KEY.ViewName.seletgame_view, this.node),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? f.default.get().hideBanner() : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && _.default.get().hideBanner()
    },
    t.prototype.douyinguanzhu = function() {
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        h.default.getInstance().openAwemeUserProfile(this.guanzhuFun.bind(this))
    },
    t.prototype.guanzhuFun = function(e) {
        1 == e || (2 == e ? d._poolNodeMager.getPoolNode("tipNode", void 0, !0, {
            str: "关注失败"
        }) : d._poolNodeMager.getPoolNode("tipNode", void 0, !0, {
            str: "请在抖音平台关注"
        }))
    },
    t.prototype.tianjia = function() {
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        window.tt ? tt.addShortcut({
            success: function() {
                d._poolNodeMager.getPoolNode("tipNode", void 0, !0, {
                    str: "添加桌面成功"
                })
            },
            fail: function(e) {
                console.log("添加桌面失败", e.errMsg),
                d._poolNodeMager.getPoolNode("tipNode", void 0, !0, {
                    str: "添加桌面失败"
                })
            }
        }) : d._poolNodeMager.getPoolNode("tipNode", void 0, !0, {
            str: "添加桌面成功"
        })
    },
    t.prototype.duidiexiuxian = function() {
        s._audioMager.playAudioEff(c.KEY.audioName.btn),
        d._poolNodeMager.getPoolNode(c.KEY.poolName.duidiexiuxian_panel)
    },
    t.prototype.onOPPOMoreBtn = function() {
        f.default.instance.oppoMore()
    },
    n([v({
        type: cc.Node,
        tooltip: "游戏视图父节点"
    })], t.prototype, "game", void 0),
    n([v({
        type: cc.Node,
        tooltip: "ui父节点"
    })], t.prototype, "ui", void 0),
    n([y], t)
} (cc.Component);
a.default = N