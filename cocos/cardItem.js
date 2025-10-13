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
c = e("classManger"),
s = e("KEY"),
d = e("card"),
l = e("audioMager"),
u = e("gameDataManager"),
p = e("NumberUtil"),
h = e("EventTargetMager"),
_ = e("platfrom_fun"),
f = e("commonFunction"),
g = e("enum_type"),
m = e("cardUtil"),
y = cc._decorator,
v = y.ccclass,
N = y.property,
w = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.cardNum = null,
        t.card_icon = null,
        t.pos = null,
        t.card = null,
        t.cardItem_class = new c.cardItem_class,
        t.cardId_array = [],
        t.card_num = 0,
        t.result = [],
        t.cardNodes = [],
        t.lantu_array = [],
        t.is_lantu = !1,
        t.isbtn = !0,
        t.shauxin = !1,
        t
    }
    return i(t, e),
    t.prototype.touch_start = function() {},
    t.prototype.touch_end = function() {
        this.on_cardItembtn()
    },
    t.prototype.startHeCheng = function() {},
    t.prototype.cardHeChengResult = function() {},
    t.prototype.startBattle = function() {},
    t.prototype.stopBattle = function() {},
    t.prototype.inint = function() {},
    t.prototype.onOpen = function(e) {
        var t = this;
        this.node.active = !0,
        this.id = e.id,
        this.node_on(),
        this.node.getChildByName("effect").active = !1,
        e.position && (this.node.position = e.position),
        e.result && (this.result = e.result),
        (e.cardItemId || 0 == e.cardItemId) && (this.cardItem_class.cardItemId = parseInt(e.cardItemId)),
        l._audioMager.playAudioEff("diaoluo_0" + p.NumberUtil.randomNum(1, 5)),
        e.is_move && (this.is_enable = !1, cc.tween(this.node).to(.3, {
            y: 210
        },
        {
            easing: "sineOut"
        }).call(function() {
            t.is_enable = !0,
            t.paichiActionOpen(!0)
        }).start()),
        this.initData();
        var a = this.cardItem_class.cardItemId + 1 + "";
        a = u._gameStateData.CardAttri[this.cardItem_class.cardItemId + ""].CardName,
        8 == this.cardItem_class.cardItemId ? a = "一个新的世界": 9 == this.cardItem_class.cardItemId && (a = "renwujiangli"),
        f.commonTool.updateSprite("cardItem/" + a, this.card_icon)
    },
    t.prototype.onClose = function() {
        this.is_lantu = !1,
        this.card_num = 0,
        this.node.stopAllActions(),
        this.node_off(),
        h._EventTargetMager.off("clear_cardItem", this.clear_cardItem, this),
        this.node.active = !1,
        this.node.destroy()
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.clear_cardItem = function(e) {
        if (void 0 === e && (e = 0), e != this.id && !this.shauxin) {
            if (this.cardId_array.length > 0) for (var t = 0; t < this.cardId_array.length; t++) this.cardId_array[t] == g.cardNameOrId.村民 && (r._duidie_view.cunminOpen = !0, h._EventTargetMager.emit("updateRenWuList", 116));
            this.onClose(1)
        }
    },
    t.prototype.randomCrad = function(e, t, a) {
        void 0 === a && (a = 1);
        for (var o = 0; o < t; o++) {
            var i = e[p.NumberUtil.randomNum(0, e.length - 1)];
            if (0 == i) {
                var n = m.default.randomLantu(a);
                this.lantu_array = n;
                for (var r = 0; r < n.length; r++) this.cardId_array.push(n[r])
            } else this.cardId_array.push(i)
        }
    },
    t.prototype.initData1 = function() {
        var e = u._gameStateData.CardAttri[this.cardItem_class.cardItemId];
        for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
            var a = e[t];
            this.cardItem_class[t] = a
        }
        this.cardId_array = [];
        var o = [g.cardNameOrId.浆果丛, g.cardNameOrId.岩石, g.cardNameOrId.树],
        i = [g.cardNameOrId.木头, g.cardNameOrId.石头, g.cardNameOrId.树枝, g.cardNameOrId.燧石, g.cardNameOrId.大便, g.cardNameOrId.金币, 0],
        n = [g.cardNameOrId.木头, g.cardNameOrId.石头, g.cardNameOrId.树枝, g.cardNameOrId.燧石, g.cardNameOrId.大便, g.cardNameOrId.金币, 0];
        switch (this.cardItem_class.cardItemId) {
            case 0:
                for (var c = [], s = u._gameStateData.CardAttri[this.cardItem_class.cardItemId + ""].ItemID, d = 0, l = 0; l < s.length; l++) c.push(u._gameStateData.CardItemAttr[s[l] + ""]),
            d += u._gameStateData.CardItemAttr[s[l] + ""].Rate;
            for (var p = 0; p < this.cardItem_class.Number; p++) {
                var h = Math.random() * d,
                _ = 0;
                for (l = 0; l < c.length; l++) if (h < (_ += c[l].Rate)) {
                    this.lantu_array = m.default.randomLantu(),
                    parseInt(c[l].CardID) == g.cardNameOrId.小老鼠 && (c[l].CardID = g.cardNameOrId.木头),
                    0 == c[l].CardID ? this.cardId_array.push(this.lantu_array[0]) : this.cardId_array.push(c[l].CardID);
                    break
                }
            }
            break;
            case 1:
                i = [g.cardNameOrId.木头, g.cardNameOrId.石头, g.cardNameOrId.树枝, g.cardNameOrId.燧石, g.cardNameOrId.大便, g.cardNameOrId.金币, 0],
            this.randomCrad(o, 3),
            this.randomCrad(i, 1);
            break;
            case 2:
                i = [g.cardNameOrId.浆果, g.cardNameOrId.苹果, g.cardNameOrId.生肉, g.cardNameOrId.胡萝卜],
            n = [g.cardNameOrId.鸡, g.cardNameOrId.牛, g.cardNameOrId.兔子, g.cardNameOrId.土壤, 0],
            this.randomCrad(o, 2),
            this.randomCrad(i, 1),
            this.randomCrad(n, 1);
            break;
            case 3:
                i = [g.cardNameOrId.浆果, g.cardNameOrId.苹果, g.cardNameOrId.生肉, g.cardNameOrId.胡萝卜],
            n = [g.cardNameOrId.蘑菇, g.cardNameOrId.洋葱, g.cardNameOrId.鸡蛋, g.cardNameOrId.牛奶, g.cardNameOrId.马铃薯, 0],
            this.randomCrad(o, 1),
            this.randomCrad(i, 1),
            this.randomCrad(n, 1);
            break;
            case 4:
                i = [g.cardNameOrId.木板, g.cardNameOrId.砖, g.cardNameOrId.铁矿, 0],
            this.randomCrad(o, 3),
            this.randomCrad(i, 1);
            break;
            case 5:
                i = [g.cardNameOrId.木头, g.cardNameOrId.石头, g.cardNameOrId.树枝, g.cardNameOrId.燧石, g.cardNameOrId.大便, g.cardNameOrId.金币],
            n = [g.cardNameOrId.山, g.cardNameOrId.森林, g.cardNameOrId.平原, g.cardNameOrId.古村落, 0],
            this.randomCrad(o, 1),
            this.randomCrad(i, 1),
            this.randomCrad(n, 1);
            break;
            case 6:
                o = [g.cardNameOrId.浆果丛, g.cardNameOrId.岩石, g.cardNameOrId.树, g.cardNameOrId.铁矿床],
            i = [g.cardNameOrId.木板, g.cardNameOrId.砖, g.cardNameOrId.铁矿, 0],
            this.randomCrad(o, 3),
            this.randomCrad(i, 1);
            break;
            case 7:
                o = [g.cardNameOrId.浆果丛, g.cardNameOrId.岩石, g.cardNameOrId.树],
            i = [g.cardNameOrId.浆果, g.cardNameOrId.苹果, g.cardNameOrId.生肉, g.cardNameOrId.胡萝卜],
            n = [g.cardNameOrId.鸡, g.cardNameOrId.牛, g.cardNameOrId.兔子, g.cardNameOrId.土壤, 0],
            this.randomCrad(o, 2),
            this.randomCrad(i, 1),
            this.randomCrad(n, 1);
            break;
            case 8:
                this.cardId_array = [30006, g.cardNameOrId.浆果丛, g.cardNameOrId.岩石, g.cardNameOrId.木头, g.cardNameOrId.金币];
            break;
            case 9:
                if (this.result.length > 0) for (this.cardId_array = [], l = 0; l < this.result.length; l++) {
                var f = this.result[l];
                for (p = 0; p < f[1]; p++) this.cardId_array.push(parseInt(f[0]))
            }
        }
        for (this.cardNum.string = this.cardId_array.length + "", !r._duidie_view.cunminOpen && r._duidie_view.cardItemNum >= 5 && this.cardItem_class.cardItemId < 8 && (this.cardId_array[0] = 30006), this.node.children[0].active = !1, l = 2; l < this.node.children.length; l++)"effect" != this.node.children[l].name && (this.node.children[l].active = !0)
    },
    t.prototype.initData = function() {
        if (8 != this.cardItem_class.cardItemId) {
            var e = u._gameStateData.CardAttri[this.cardItem_class.cardItemId + ""];
            for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
                var a = e[t];
                this.cardItem_class[t] = a
            }
            this.cardId_array = [];
            for (var o = [], i = e.ItemID, n = 0, c = 0; c < i.length; c++) o.push(u._gameStateData.CardItemAttr[i[c] + ""]),
            n += u._gameStateData.CardItemAttr[i[c] + ""].Rate;
            g.cardNameOrId.木头,
            g.cardNameOrId.石头,
            g.cardNameOrId.树枝,
            g.cardNameOrId.树,
            g.cardNameOrId.浆果,
            g.cardNameOrId.苹果,
            g.cardNameOrId.岩石,
            g.cardNameOrId.燧石;
            for (var s = 0; s < this.cardItem_class.Number; s++) {
                var d = Math.random() * n,
                l = 0;
                for (c = 0; c < o.length; c++) if (d < (l += o[c].Rate)) {
                    this.lantu_array = m.default.randomLantu();
                    var p = parseInt(o[c].CardID);
                    if (0 == p && 0 == this.is_lantu && this.lantu_array.length > 0) {
                        this.is_lantu = !0;
                        var h = this.lantu_array[0];
                        if (0 == h) {
                            s--;
                            break
                        }
                        o.splice(c, 1),
                        this.cardId_array.push(h)
                    } else {
                        if (0 == p) {
                            s--;
                            break
                        }
                        this.cardId_array.push(p)
                    }
                    break
                }
            }
        } else this.cardId_array = [g.cardNameOrId.村民, g.cardNameOrId.浆果丛, g.cardNameOrId.岩石, g.cardNameOrId.木头, g.cardNameOrId.金币],
        3 == r._duidie_view.gameIndex && (this.cardId_array = [g.cardNameOrId.漂流者, g.cardNameOrId.干粮, g.cardNameOrId.干粮, g.cardNameOrId.干粮]),
        4 == r._duidie_view.gameIndex && (this.cardId_array = [g.cardNameOrId.求生者, g.cardNameOrId.蘑菇, g.cardNameOrId.蘑菇, g.cardNameOrId.废纸, g.cardNameOrId.烂木]);
        for (this.cardNum.string = this.cardId_array.length + "", m.default.getTypeCard(g.card_type.renlei) < 2 && !r._duidie_view.cunminOpen && r._duidie_view.cardItemNum >= 5 && this.cardItem_class.cardItemId < 8 && 2 != r._duidie_view.gameIndex && (this.cardId_array[0] = g.cardNameOrId.村民), this.node.children[0].active = !1, c = 2; c < this.node.children.length; c++)"effect" != this.node.children[c].name && (this.node.children[c].active = !0)
    },
    t.prototype.on_cardItembtn = function() {
        0 != this.isbtn && (l._audioMager.playAudioEff("putongyi_0" + p.NumberUtil.randomNum(1, 3)), 1 == this.isbtn && this.node.position.sub(this.startPos).mag() < 30 && (this.shauxin = !0, this.node_off(), 8 == this.cardItem_class.cardItemId && (h._EventTargetMager.emit("updateRenWuList", 101), h._EventTargetMager.emit("updateRenWuList", 201), h._EventTargetMager.emit("updateRenWuList", 301), h._EventTargetMager.emit("updateRenWuList", 401), 4 == r._duidie_view.gameIndex && r._duidie_view.shuaxinziyuan()), this.cardItemOpen()))
    },
    t.prototype.cardItemOpen = function(e) {
        var t = this;
        void 0 === e && (e = !1),
        this.is_touch = !1,
        this.is_touch = !0,
        this.isbtn = !1,
        m.default.zhengping();
        var a = this.node.getChildByName("effect");
        a.active = !0,
        this.scheduleOnce(function() {
            a.active = !1
        },
        .1);
        var o = [1, 7, 8, 9, 3];
        switch (this.cardItem_class.Number) {
            case 1:
                o = [p.NumberUtil.randomNum(1, 9)];
            break;
            case 2:
                o = [4, 6];
            break;
            case 3:
                o = [1, 8, 6];
            break;
            case 4:
                o = [2, 4, 6, 8];
            break;
            default: o = [1, 6, 7, 8, 3];
        }
        if (this.cardItem_class.Type == g.card_type.lantu && h._EventTargetMager.emit("updateRenWuList", 136), r._duidie_view.add_card(this.cardId_array[this.card_num], this.node.position, o[this.card_num], 1,
        function(e) {
            t.cardNodes.push(e)
        }), this.card_num += 1, this.cardNum.string = this.cardId_array.length - this.card_num + "", this.card_num >= this.cardId_array.length) {
            this.node.children[0].getComponent(cc.Button).interactable = !1,
            r._duidie_view.cardItemNum += 1,
            this.scheduleOnce(function() {
                if (8 == t.cardItem_class.cardItemId) return t.onClose(1);
                t.node.zIndex = cc.macro.MAX_ZINDEX,
                t.node.children[0].active = !0,
                t.node.children[0].getComponent(cc.Button).interactable = !0,
                t.shauxin = !1,
                h._EventTargetMager.on("clear_cardItem", t.clear_cardItem, t)
            },
            .5);
            for (var i = 1; i < this.node.children.length; i++) this.node.children[i].active = !1
        } else this.scheduleOnce(function() {
            t.cardItemOpen()
        },
        .4);
        8 == this.cardItem_class.cardItemId && 1 == this.card_num && (r._duidie_view.startGame = !0, h._EventTargetMager.emit("gamePauseFun", !1))
    },
    t.prototype.on_shuaxin = function() {
        var e = this;
        1 != this.shauxin && (this.shauxin = !0, r._duidie_view.mask.active = !0, this.scheduleOnce(function() {
            e.shauxin = !1
        },
        2), this.scheduleOnce(function() {
            r._duidie_view.mask.active = !1
        },
        3), l._audioMager.playAudioEff(s.KEY.audioName.btn), _.default.getInstance().showAdVideo(function() {
            _.default.getInstance().add_reportAnalytics("event_CardBaoRefreshVedioCount"),
            _.default.getInstance().add_reportAnalytics("event_TotalVedioCount");
            for (var t = function(t) {
                e.cardNodes[t] && e.cardNodes[t].active && e.scheduleOnce(function() {
                    e.cardNodes[t].getComponent(d.default).huishou(e.node.position)
                },
                .01 * t)
            },
            a = 0; a < e.cardNodes.length; a++) t(a);
            e.scheduleOnce(function() {
                r._duidie_view.add_cardItem(e.cardItem_class.cardItemId, e.node.position),
                r._duidie_view.mask.active = !1,
                e.onClose(1)
            },
            .35)
        },
        function() {
            r._duidie_view.mask.active = !1
        }))
    },
    t.prototype.start = function() {},
    n([N({
        type: cc.Label,
        tooltip: "可开出卡牌的数量"
    })], t.prototype, "cardNum", void 0),
    n([N({
        type: cc.Node,
        tooltip: "卡包图片"
    })], t.prototype, "card_icon", void 0),
    n([v], t)
} (d.default);
a.default = w