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
a._seletgame_view = void 0;
var r = e("gameDataManager"),
c = e("poolNodeMager"),
s = e("audioMager"),
d = e("winNodeMager"),
l = e("KEY"),
u = e("winRootNode"),
p = e("mainScene"),
h = e("AndroidApi"),
_ = e("platfrom_fun"),
f = e("cardUtil"),
g = e("selectCard_view"),
m = e("4399GameBox"),
y = cc._decorator,
v = y.ccclass,
N = y.property;
a._seletgame_view = null;
var w = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.content = null,
        t.is_btn = !1,
        t.gameIndex = 0,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function() {
        if (this.is_btn = !1, this.init_data(), window.kwaigame && (this.node.getChildByName("on_return").getComponent(cc.Widget).top = 80), cc.sys.isNative || window.hasOwnProperty("h5api")) for (var e = 0; e < this.content.childrenCount; e++) {
            var t = this.content.children[e];
            "堆叠修仙" == t.getChildByName("text").getComponent(cc.Label).string && (t.active = !1);
            var a = t.getChildByName("title").getComponent(cc.Label);
            "第六卷" == a.string && (a.string = "第五卷")
        }
    },
    t.prototype.onClose = function(e) {
        d._winNodeMager.hideWinNode(this.node.name),
        1 == e && p._mainScene.update_ui_active(!0)
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onLoad = function() {
        a._seletgame_view = this
    },
    t.prototype.version = function() {
        return tt.env.VERSION || "preview"
    },
    t.prototype.start = function() {},
    t.prototype.init_data = function() {},
    t.prototype.on_return = function() {
        this.disableClick(),
        s._audioMager.playAudioEff(l.KEY.audioName.btn),
        this.onClose(1),
        (cc.sys.isNative || window.kwaigame) && _.default.getInstance().showInterstitalAd(),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? h.default.get().showBanner() : window.gamebox && m.default.get().showBanner()
    },
    t.prototype.update_view = function() {},
    t.prototype.on_btn = function(e, t) {
        var a = this;
        this.disableClick(),
        s._audioMager.playAudioEff(l.KEY.audioName.btn);
        var o = parseInt(t);
        if (4 != o) {
            console.log("index:a", o),
            5 == o && (o = 4),
            console.log("index:a2222222", o),
            this.gameIndex = o,
            console.log("index:a33333", o, this.gameIndex);
            for (var i = 0; i < this.content.childrenCount; i++) this.content.children[i].getChildByName("on_laocundang").active = !1;
            this.node.getChildByName("btnNodes").getChildByName("xin").active = !0,
            e.target.getChildByName("on_laocundang").active = !0,
            -1 != r._userData.levelList.indexOf(o) || this.gameIndex >= 0 ? (this.initData(), this.showbtnNodes(o), window.tt && "preview" != this.version() || (this.node.getChildByName("selectCard").active = !0), cc.sys.isNative && (this.node.getChildByName("selectCard").active = !1), window.kwaigame && (this.node.getChildByName("selectCard").active = !1), window.hasOwnProperty("h5api") && (this.node.getChildByName("selectCard").active = !1)) : (this.node.getChildByName("btnNodes").getChildByName("lao").active = !1, this.node.getChildByName("btnNodes").getChildByName("xin").active = !1, c._poolNodeMager.getPoolNode(l.KEY.poolName.levelOpen_panel, null, !0, {
                callBack: function(e) {
                    e && (a.node.getChildByName("btnNodes").getChildByName("xin").active = !0, a.initData(), a.showbtnNodes(o), window.tt && "preview" != a.version() || (a.node.getChildByName("selectCard").active = !0), cc.sys.isNative && (a.node.getChildByName("selectCard").active = !1), window.kwaigame && (a.node.getChildByName("selectCard").active = !1), window.hasOwnProperty("h5api") && (a.node.getChildByName("selectCard").active = !1))
                },
                gameIndex: this.gameIndex
            }))
        } else c._poolNodeMager.getPoolNode(l.KEY.poolName.duidiexiuxian_panel)
    },
    t.prototype.showbtnNodes = function(e) {
        this.node.getChildByName("btnNodes").active = !0;
        var t = this.node.getChildByName("btnNodes").getChildByName("lao");
        t.active = !1,
        e >= r._userData.gameCun.length || r._userData.gameCun[e] && (t.active = !0)
    },
    t.prototype.on_lao = function() {
        1 != this.is_btn && (this.is_btn = !0, this.disableClick(), s._audioMager.playAudioEff(l.KEY.audioName.btn), r._userData.gameCun[this.gameIndex] && r._userData.gameCun[this.gameIndex], d._winNodeMager.showWinNode(l.KEY.ViewName.duidie_view, p._mainScene.game, !0, {
            _duidie_view_class: r._userData.gameCun[this.gameIndex],
            gameIndex: this.gameIndex
        }), this.onClose(2))
    },
    t.prototype.on_xin = function() {
        1 != this.is_btn && (this.is_btn = !0, this.disableClick(), s._audioMager.playAudioEff(l.KEY.audioName.btn), this.gameIndex < r._userData.gameCun.length && r._userData.gameCun[this.gameIndex] && (r._userData.gameCun[this.gameIndex] = null, r.UserDataManger.preData()), d._winNodeMager.showWinNode(l.KEY.ViewName.duidie_view, p._mainScene.game, !0, {
            _duidie_view_class: null,
            gameIndex: this.gameIndex
        }), this.onClose(2))
    },
    t.prototype.on_selectCard = function() {
        this.disableClick(),
        s._audioMager.playAudioEff(l.KEY.audioName.btn),
        this.node.getChildByName("selectCard_view").getComponent(g.default).on_show()
    },
    t.prototype.on_selectCard_hide = function() {
        this.disableClick(),
        s._audioMager.playAudioEff(l.KEY.audioName.btn),
        this.node.getChildByName("selectCard_view").getComponent(g.default).on_hide()
    },
    t.prototype.initData = function() {
        var e = this.gameIndex + 1;
        1 != e ? (this.gameIndex >= 2 && (e = this.gameIndex), f.default.getDataJson(e + "")) : f.default.getDataJson()
    },
    t.prototype.topBtn = function() {
        var e = this;
        this.disableClick(),
        s._audioMager.playAudioEff(l.KEY.audioName.btn),
        this.content.parent.parent.getComponent(cc.ScrollView).enabled = !1;
        var t = -200;
        this.content.y + t < 305 && (t = -(this.content.y - 305)),
        console.log("y等于", t),
        this.content.runAction(cc.sequence(cc.moveBy(.15, 0, t), cc.callFunc(function() {
            e.content.parent.parent.getComponent(cc.ScrollView).enabled = !0
        })))
    },
    t.prototype.xiaBtn = function() {
        var e = this;
        this.disableClick(),
        s._audioMager.playAudioEff(l.KEY.audioName.btn),
        this.content.parent.parent.getComponent(cc.ScrollView).enabled = !1;
        var t = 200;
        this.content.y + t > this.content.height - 285 && (t = this.content.height - 285 - this.content.y),
        this.content.runAction(cc.sequence(cc.moveBy(.15, 0, t), cc.callFunc(function() {
            e.content.parent.parent.getComponent(cc.ScrollView).enabled = !0
        })))
    },
    n([N({
        type: cc.Node,
        tooltip: "存档父节点"
    })], t.prototype, "content", void 0),
    n([v], t)
} (u.default);
a.default = w