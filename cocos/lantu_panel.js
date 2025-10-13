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
});
var r = e("duidie_view"),
c = e("enum_type"),
s = e("game_ui"),
d = e("poolNodeMager"),
l = e("gameDataManager"),
u = e("winRootNode"),
p = e("KEY"),
h = e("audioMager"),
_ = e("gameDataManager"),
f = e("enum_type"),
g = e("commonFunction"),
m = e("EventTargetMager"),
y = e("platfrom_fun"),
v = cc._decorator,
N = v.ccclass,
w = v.property,
S = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.callBack = null,
        t.toogle = null,
        t.content = null,
        t.shadow = null,
        t.card_dec = null,
        t.card_demand = null,
        t.card = null,
        t.is_btn = !1,
        t.lantuId = 0,
        t.lantu_item = null,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function() {
        var e = this;
        this.is_btn = !0;
        var t = this.node.getChildByName("node");
        t.x = -(cc.winSize.width + t.width);
        var a = -(cc.winSize.width / 2 - t.width / 2);
        this.moveShow(this.node.getChildByName("node"), cc.v3(a + 30, 0),
        function() {
            e.is_btn = !1
        }),
        this.init_data()
    },
    t.prototype.onClose = function(e) {
        var t = this;
        this.shadow.parent = null;
        var a = this.node.getChildByName("node"),
        o = -(cc.winSize.width + a.width);
        this.moveHide(a, cc.v3(o, 0),
        function() {
            0 == r._duidie_view.jiesuan && m._EventTargetMager.emit("gamePauseFun", !1),
            t.clear_data(),
            d._poolNodeMager.putPoolNode(t.node.name, t.node),
            2 == e && t.callBack && t.callBack()
        })
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.on_close = function() {
        this.is_btn || (this.is_btn = !0, this.disableClick(), h._audioMager.playAudioEff(p.KEY.audioName.btn), this.onClose(1), (cc.sys.isNative || window.kwaigame) && y.default.getInstance().showInterstitalAd())
    },
    t.prototype.on_show = function() {
        if (this.disableClick(), h._audioMager.playAudioEff(p.KEY.audioName.btn), "? ? ? ? ? ?" != this.card_demand.string) {
            var e = l._gameStateData.CardSynthesis.get(this.lantu_item.data.SynthesisID).result[0][0],
            t = parseInt(e);
            this.lantuId = t,
            m._EventTargetMager.emit("updateRenWuList", 119),
            m._EventTargetMager.emit("update_lantuPeifang", this.toogle.isChecked, this.card_demand.string, t)
        }
    },
    t.prototype.update_data = function(e) {
        this.shadow.parent = e.node,
        this.shadow.setPosition( - 90, 0),
        this.card_demand.string = "? ? ? ? ? ?",
        this.toogle.isChecked = !1,
        this.lantu_item = e,
        this.card_dec.string = e.data.Content,
        this.card.color = cc.color(255, 255, 255),
        g.commonTool.updateSprite("card/" + e.data.IdeaName, this.card, null, r._duidie_view.gameIndex);
        var t = this.node.getChildByName("node").getChildByName("buchushou");
        if (t.active = !0, e.is_open) {
            t.active = !1;
            for (var a = l._gameStateData.CardSynthesis.get(e.data.SynthesisID).peifang, o = e.data.IdeaName.slice(3) + " = ", i = 0; i < a.length; i++) o += l._gameStateData.CardsList[a[i][0]].CardName + "x" + a[i][1] + "  ";
            this.card_demand.string = o,
            this.card.color = cc.color(255, 255, 255),
            o == s._game_ui.lantu_peifang.string ? this.toogle.isChecked = !0 : this.toogle.isChecked = !1
        }
    },
    t.prototype.init_data = function() {
        var e = l._gameStateData.IdeaAttr,
        t = 0;
        for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) for (var o in f.lantu_type) Object.prototype.hasOwnProperty.call(f.lantu_type, o) && e[a].IdeaType == f.lantu_type[o] && (t += 1, e[a].SynthesisID += "", d._poolNodeMager.getPoolNode(p.KEY.poolName.lantu_item, this.content.getChildByName(o), !0, {
            data: e[a],
            lantuId: a,
            parent_com: this,
            index: t
        }))
    },
    t.prototype.clear_data = function() {
        for (var e = 0; e < this.content.children.length; e++) for (var t = 1; t < this.content.children[e].children.length; t++) this.content.children[e].children[t].destroy()
    },
    t.prototype.jiesuo = function() {
        var e = this;
        y.default.getInstance().showAdVideo(function() {
            var t = e.lantu_item.lantuId;
            t && -1 == _._userData.lantu_data.indexOf(t) && (y.default.getInstance().add_reportAnalytics("event_TotalVedioCount"), y.default.getInstance().add_reportAnalytics("event_PeiFangVedioCount"), _._userData.lantu_data.push(t), _.UserDataManger.preData(), e.node.getChildByName("node").getChildByName("buchushou").active = !1, e.lantu_item.is_open = !0, e.lantu_item.show(), e.update_data(e.lantu_item), -1 != [c.cardNameOrId["蓝图-大炮"], c.cardNameOrId["蓝图-龙骨"], c.cardNameOrId["蓝图-船帆"], c.cardNameOrId["蓝图-船锚"], c.cardNameOrId["蓝图-甲板"]].indexOf(t) && m._EventTargetMager.emit("updateRenWuList", 337))
        })
    },
    n([w({
        type: cc.Toggle,
        tooltip: "复选框"
    })], t.prototype, "toogle", void 0),
    n([w({
        type: cc.Node,
        tooltip: "滚动式图"
    })], t.prototype, "content", void 0),
    n([w({
        type: cc.Node,
        tooltip: "红色阴影框"
    })], t.prototype, "shadow", void 0),
    n([w({
        type: cc.Label,
        tooltip: "蓝图描述"
    })], t.prototype, "card_dec", void 0),
    n([w({
        type: cc.Label,
        tooltip: "蓝图配方"
    })], t.prototype, "card_demand", void 0),
    n([w({
        type: cc.Node,
        tooltip: "蓝图卡牌"
    })], t.prototype, "card", void 0),
    n([N], t)
} (u.default);
a.default = S