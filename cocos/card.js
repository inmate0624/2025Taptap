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
var r = e("classManger"),
c = e("gameDataManager"),
s = e("duidie_view"),
d = e("KEY"),
l = e("audioMager"),
u = e("poolNodeMager"),
p = e("EventTargetMager"),
h = e("NumberUtil"),
_ = e("commonFunction"),
f = e("lq_collide"),
g = e("cardUtil"),
m = e("shop"),
y = e("enum_type"),
v = e("game_ui"),
N = e("cardJinDu"),
w = e("selectcard_bolang"),
S = cc._decorator,
b = S.ccclass,
O = (S.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.card_icon = null,
        t.shadow = null,
        t.card_bg = null,
        t.box = null,
        t.priceIcon = null,
        t.hpIcon = null,
        t.baoshiduIcon = null,
        t.piaoArray = [y.cardNameOrId.中型岛屿, y.cardNameOrId.大型岛屿, y.cardNameOrId.海盗基地],
        t.is_desory = !1,
        t.cards = [],
        t.cloneCards = [],
        t.collisionCard = [],
        t.startPos = null,
        t.shop_node = null,
        t.schdeule = null,
        t.battleTarget = [],
        t.is_active = !0,
        t.is_siwang = !1,
        t.card_class = new r.card_class,
        t.card_index = 0,
        t.collision_nodes = [],
        t.paichiSwitch = !1,
        t.updateY = !1,
        t.is_move = !1,
        t.is_touch = !1,
        t.id = 0,
        t.crad_duidies = [],
        t.is_duidie = !0,
        t.intervalY = 30,
        t.crad_fly_id = 0,
        t.speed = 250,
        t.paiqi = !1,
        t.is_zuhe = !0,
        t.is_shopMove = !1,
        t.hechengList_class = null,
        t.DemandSatiety = 0,
        t.is_battle = !1,
        t.is_atk = !1,
        t.batterId = 0,
        t.cardId = 0,
        t.touch_id = -99,
        t.cardJinDu = null,
        t.cardJinDuGuang = null,
        t.carJinduTime = -1,
        t.carJinduTimeGuang = -1,
        t.card_attr_class = null,
        t.piaoLiuMoveSpeed = 0,
        t.piaoLiuAction = null,
        t.kaichuan = !1,
        t.dayNum = 0,
        t.guangSize = 0,
        t.guangTime = 0,
        t.guangArray = [y.cardNameOrId.萤火虫灯, y.cardNameOrId.灯泡, y.cardNameOrId.燃油灯, y.cardNameOrId.火把, y.cardNameOrId.篝火, y.cardNameOrId.火坑],
        t.guangSpeed = 0,
        t.isLueDuo = !1,
        t.dumoguTime = 0,
        t.maxLife = 0,
        t.selectcard_bolang = null,
        t
    }
    var a;
    return i(t, e),
    a = t,
    t.prototype.onOpen = function(e) {
        var t = this;
        if (void 0 === e && (e = null), this.node.active = !0, this.is_desory = !1, e.id && (this.id = e.id), e.position && (this.node.position = e.position), e.isLueDuo && 1 == e.isLueDuo && (this.isLueDuo = e.isLueDuo), e.cradId && (this.card_class.cradId = e.cradId, this.cardId = e.cradId), this.node_on(), this.copycardId = this.card_class.cradId, this.initData(), this.card_class.cradId == y.cardNameOrId.海盗船 && (this.node.width = 216, this.node.height = 264, this.card_icon.width = 216, this.card_icon.height = 264, this.card_icon.getChildByName("priceIcon").scale = 2.2), this.init_lq_collide(), this.update_size(this.node.width, this.node.height), this.box.height = this.node.height, this.is_active = !0, this.is_touch = !1, "cardItem" != this.node.name && this.card_class) {
            var o = c._gameStateData.StackableGroup[this.card_class.cradId];
            o ? this.crad_duidies = o.StackableGroup: console.log("到底啥啊这是", this.card_class)
        }
        if (e.crad_fly_id) if (this.crad_fly_id = e.crad_fly_id, 9 == this.crad_fly_id) {
            if ((n = g.default.jiance_tonglei(this, 300)).length > 0) {
                var i = g.default.screenNearest(n, this, this.crad_duidies);
                this.updateCardNodes(i)
            } else g.default.crad_fly_animation(this);
        } else {
            var n = g.default.jiance_tonglei(this, 300);
            this.card_class.Type == y.card_type.renlei && 2 == s._duidie_view.gameIndex && (n = []),
            n.length > 0 && (i = g.default.screenNearest(n, this, this.crad_duidies)) ? (this.crad_fly_id = 10, g.default.crad_fly_animation(this, i)) : g.default.crad_fly_animation(this)
        }
        if (this.node.name = this.card_class.CardName, this.node.getChildByName("name").getComponent(cc.Label).string = this.card_class.CardName, this.card_class.cradId == y.cardNameOrId.金币 && s._duidie_view.gold_num >= 25 && p._EventTargetMager.emit("updateRenWuList", 137), this.card_class.cradId == y.cardNameOrId.金币 && s._duidie_view.gold_num >= 4 && p._EventTargetMager.emit("updateRenWuList", 106), this.card_class.cradId == y.cardNameOrId.生肉 && p._EventTargetMager.emit("updateRenWuList", 317), this.card_class.cradId == y.cardNameOrId.鱼骨 && p._EventTargetMager.emit("updateRenWuList", 319), this.card_class.cradId == y.cardNameOrId.浆果) {
            for (var r = 0,
            f = 0; f < this.node.parent.children.length; f++) {
                var m = this.node.parent.children[f];
                m && m.active && m.getComponent(a) && m.getComponent(a).card_class && m.getComponent(a).card_class.cradId == y.cardNameOrId.浆果 && (r += 1)
            }
            r >= 3 && p._EventTargetMager.emit("updateRenWuList", 307)
        }
        if (s._duidie_view.haveFood_num >= 4 && p._EventTargetMager.emit("updateRenWuList", 117), this.card_class.Type == y.card_type.guaiwu && p._EventTargetMager.emit("updateRenWuList", 134), e.card_attr_class) {
            e.callBack && e.callBack(),
            this.card_attr_class = e.card_attr_class;
            var v = e.card_attr_class;
            for (var w in v) Object.prototype.hasOwnProperty.call(v, w) && (this[w] = v[w]);
            this.is_siwang || this.card_class.cradId == y.cardNameOrId.尸体 ? (_.commonTool.updateSprite("card/尸体", this.card_icon, null, s._duidie_view.gameIndex), _.commonTool.updateSprite("card/尸体", this.shadow, null, s._duidie_view.gameIndex)) : (_.commonTool.updateSprite("card/" + this.card_class.CardName, this.card_icon, null, s._duidie_view.gameIndex), _.commonTool.updateSprite("card/" + this.card_class.CardName, this.shadow, null, s._duidie_view.gameIndex)),
            this.showIcon()
        }
        if (this.card_class.Type != y.card_type.renlei && this.card_class.Type != y.card_type.guaiwu || p._EventTargetMager.emit("updateMoveTarget"), -1 != s._duidie_view.guangArray.indexOf(this.card_class.cradId) && p._EventTargetMager.emit("updateGuangCount"), this.card_class.cradId == y.cardNameOrId.剑士 && s._duidie_view.updateChengjiuMap("1"), this.card_class.cradId == y.cardNameOrId.狗 && s._duidie_view.updateChengjiuMap("9"), this.card_class.cradId == y.cardNameOrId.金币 && s._duidie_view.updateChengjiuMap("10"), this.card_class.cradId == y.cardNameOrId.煎饼 && s._duidie_view.updateChengjiuMap("12"), this.card_class.cradId != y.cardNameOrId.鸡 && this.card_class.cradId != y.cardNameOrId.牛 && this.card_class.cradId != y.cardNameOrId.兔子 || s._duidie_view.updateChengjiuMap("13"), this.card_class.cradId == y.cardNameOrId.房子 && s._duidie_view.updateChengjiuMap("14"), this.card_class.cradId == y.cardNameOrId.奶昔 && s._duidie_view.updateChengjiuMap("17"), this.card_class.cradId == y.cardNameOrId.鸡 && s._duidie_view.updateChengjiuMap("18"), this.card_class.cradId == y.cardNameOrId.牛 && s._duidie_view.updateChengjiuMap("19"), this.card_class.cradId == y.cardNameOrId.婴儿 && s._duidie_view.updateChengjiuMap("20"), this.card_class.cradId == y.cardNameOrId.尸体 && s._duidie_view.updateChengjiuMap("24"), this.card_class.cradId == y.cardNameOrId.数字 && p._EventTargetMager.emit("updateRenWuList", 205), this.card_class.cradId == y.cardNameOrId.火药 && p._EventTargetMager.emit("updateRenWuList", 211), -1 != [y.cardNameOrId["蓝图-大炮"], y.cardNameOrId["蓝图-龙骨"], y.cardNameOrId["蓝图-船帆"], y.cardNameOrId["蓝图-船锚"], y.cardNameOrId["蓝图-甲板"]].indexOf(this.card_class.cradId) && p._EventTargetMager.emit("updateRenWuList", 337), this.card_class.cradId, y.cardNameOrId.剑士, 3 == s._duidie_view.gameIndex) {
            if ( - 1 != s._duidie_view.piaoLiuArray.indexOf(this.card_class.cradId)) {
                var S = s._duidie_view.card_parent.width / 2 + h.NumberUtil.randomNum(70, 200),
                b = s._duidie_view.card_parent.height / 2 - 70,
                O = cc.v3(S, h.NumberUtil.randomNum( - b, b));
                0 == s._duidie_view.piaoliuNum && (O.y = 0, O.x = s._duidie_view.card_parent.width / 2),
                this.node.position = O,
                e.position && e.card_attr_class && (this.node.position = e.position),
                this.piaoLiuMoveSpeed = h.NumberUtil.randomNum(30, 50),
                this.piaoLiuMove(),
                u._poolNodeMager.getPoolNode(d.KEY.poolName.card_bolang, this.node),
                this.card_icon.zIndex = 1,
                s._duidie_view.piaoliuNum += 1
            } - 1 != this.piaoArray.indexOf(this.card_class.cradId) && this.scheduleOnce(function() {
                t.piaoLiuMoveSpeed = h.NumberUtil.randomNum(30, 50),
                t.piaoLiuMove(),
                u._poolNodeMager.getPoolNode(d.KEY.poolName.card_bolang, t.node),
                t.card_icon.zIndex = 1
            },
            .5)
        }
        var I = 0;
        this.card_class.cradId == y.cardNameOrId.烤肉 && (I = 318),
        this.card_class.cradId == y.cardNameOrId.鱼骨 && (I = 319),
        this.card_class.cradId == y.cardNameOrId.藤条 && (I = 320),
        this.card_class.cradId == y.cardNameOrId.绳子 && (I = 321),
        this.card_class.cradId == y.cardNameOrId.鱼竿 && (I = 322),
        this.card_class.cradId == y.cardNameOrId.渔夫 && (I = 323),
        this.card_class.cradId == y.cardNameOrId.塑料加工厂 && (I = 324),
        this.card_class.cradId == y.cardNameOrId.塑料桶 && (I = 325),
        this.card_class.cradId == y.cardNameOrId.钓鱼台 && (I = 326),
        this.card_class.cradId == y.cardNameOrId.鱼 && (I = 327),
        this.card_class.cradId == y.cardNameOrId.烤鱼 && (I = 328),
        this.card_class.cradId == y.cardNameOrId.纺织机 && (I = 330),
        this.card_class.cradId == y.cardNameOrId.地图 && (I = 331),
        this.card_class.cradId == y.cardNameOrId.中型岛屿 && (I = 332),
        this.card_class.cradId == y.cardNameOrId.大型岛屿 && (I = 333),
        this.card_class.cradId == y.cardNameOrId.海盗基地 && (I = 334),
        this.card_class.cradId == y.cardNameOrId.海盗船 && (I = 338),
        this.card_class.cradId == y.cardNameOrId.烂木 && (I = 403),
        this.card_class.cradId == y.cardNameOrId.蘑菇 && (I = 405),
        this.card_class.cradId == y.cardNameOrId.木棍 && (I = 407),
        this.card_class.cradId == y.cardNameOrId.火把 && (I = 409),
        this.card_class.cradId == y.cardNameOrId.地图 && (I = 411),
        this.card_class.cradId != y.cardNameOrId.工厂 && this.card_class.cradId != y.cardNameOrId.停车场 && this.card_class.cradId != y.cardNameOrId.医院 && this.card_class.cradId != y.cardNameOrId.警察局 && this.card_class.cradId != y.cardNameOrId.超市 || (I = 413),
        this.card_class.cradId == y.cardNameOrId.萤火虫 && (I = 415),
        this.card_class.cradId == y.cardNameOrId.萤火虫灯 && (I = 416),
        this.card_class.cradId == y.cardNameOrId.电子废料 && (I = 418),
        this.card_class.cradId == y.cardNameOrId.废铁 && (I = 419),
        this.card_class.cradId == y.cardNameOrId.燃油 && (I = 420),
        this.card_class.cradId == y.cardNameOrId.玻璃 && (I = 421),
        this.card_class.cradId == y.cardNameOrId.药物 && (I = 422),
        this.card_class.cradId == y.cardNameOrId.燃油灯 && (I = 423),
        this.card_class.cradId == y.cardNameOrId.工作台 && (I = 424),
        this.card_class.cradId == y.cardNameOrId.制药台 && (I = 425),
        this.card_class.cradId == y.cardNameOrId.熔炉 && (I = 426),
        this.card_class.cradId == y.cardNameOrId.电子元件 && (I = 427),
        this.card_class.cradId == y.cardNameOrId.电池 && (I = 428),
        this.card_class.cradId == y.cardNameOrId.灯泡 && (I = 429),
        this.card_class.cradId == y.cardNameOrId.疫苗 && (I = 430),
        this.card_class.cradId == y.cardNameOrId.枪手 && (I = 435),
        this.card_class.cradId == y.cardNameOrId.无限灯塔 && (I = 437),
        0 != I && p._EventTargetMager.emit("updateRenWuList", I),
        -1 != s._duidie_view.guangArray.indexOf(this.card_class.cradId) && (this.guangSize = g.default.getGuangSize(this.card_class.cradId), this.guangTime = g.default.getGuangTime(this.card_class.cradId), this.guangSpeed = (this.guangSize - 220) / this.guangTime, this.scheduleOnce(function() {
            var e = null;
            t.carJinduTimeGuang >= 0 && (e = t.carJinduTimeGuang, t.carJinduTimeGuang = -1, t.guangSize -= (t.guangTime - e) * t.guangSpeed, console.log("来咯", t.guangSize)),
            s._duidie_view.mask_graphics(t.guangSize, t.node.position),
            -1 != t.guangArray.indexOf(t.card_class.cradId) && u._poolNodeMager.getPoolNode(d.KEY.poolName.cardJinDu, t.node, !0, {
                maxTime: t.guangTime,
                callBack: function() {
                    t.card_class && t.card_class.cradId != y.cardNameOrId.燃油灯 && t.card_class.cradId != y.cardNameOrId.灯泡 && (l._audioMager.playAudioEff("huoyanximie"), t.onClose(1))
                },
                time: e
            },
            function(e) {
                t.cardJinDuGuang = e.getComponent(N.default)
            })
        },
        1)),
        this.card_class.cradId == y.cardNameOrId.无限灯塔 && u._poolNodeMager.getPoolNode(d.KEY.poolName.taskComplete_panel, null, !0, {
            callBack: function(e) {
                0 == e && (s._duidie_view.game_over = !0, s._duidie_view.onClose(1))
            }
        })
    },
    t.prototype.onClose = function(e) {
        var t = this;
        if (this.card_class && this.card_class.DemandSatiety > 0 && s._duidie_view.del_maxFood_num(this.card_class.DemandSatiety), this.card_class && this.card_class.Type == y.card_type.renlei && (s._duidie_view.Rennum -= 1, s._duidie_view.Rennum < 0 && (s._duidie_view.Rennum = 0)), 999 != e && "回收" != e && "炸死" != e) {
            if (this.stopBattle(), this.card_class && this.card_class.Type == y.card_type.renlei && this.card_class.cradId != y.cardNameOrId.尸体) {
                this.scheduleOnce(function() {
                    t.card_icon.angle = 0,
                    t.node.angle = 0
                },
                .3),
                u._poolNodeMager.getPoolNode(d.KEY.poolName.yanwu, s._duidie_view.card_effect, !0, {
                    position: this.node.position
                }),
                1 == this.card_class.isCardLimit && s._duidie_view.del_cardCount(),
                s._duidie_view.updateChengjiuMap("21"),
                _.commonTool.updateSprite("card/尸体", this.card_icon, null, s._duidie_view.gameIndex),
                _.commonTool.updateSprite("card/尸体", this.shadow, null, s._duidie_view.gameIndex),
                this.hpIcon.active = !1,
                this.is_siwang = !0,
                -1 != s._duidie_view.guangArray.indexOf(this.card_class.cradId) && (console.log("探照者死了啊:"), p._EventTargetMager.emit("updateGuangCount"), s._duidie_view.mask_graphics(this.guangSize, this.node.position, !0)),
                this.crad_duidies = c._gameStateData.StackableGroup[y.cardNameOrId.尸体].StackableGroup,
                this.card_class.cradId = y.cardNameOrId.尸体,
                3 == s._duidie_view.gameIndex && (this.card_class.isSellOut = 1, this.card_class.Price = 1, this.card_class.Life = 0, this.showIcon()),
                this.cards.splice(this.card_index, 1);
                var a = g.default.getTypeCard(this.card_class.Type);
                a < 2 && (s._duidie_view.cunminOpen = !1);
                for (var o = 0; o < this.cards.length; o++) this.cards[o].updateCard(this.cards.slice(), o);
                if (this.updateCard([this], 0), s._duidie_view.updateChengjiuMap("24"), "饿死" == e) return;
                if (a <= 0 && "毒死" == e) return this.destory(e),
                void u._poolNodeMager.getPoolNode(d.KEY.poolName.gameStop_panel, null, !0, {
                    callBack: function() {
                        s._duidie_view.onClose(1)
                    }
                });
                if ("毒死" == e) return this.destory(e);
                u._poolNodeMager.getPoolNode(d.KEY.poolName.fuhuo_panel, null, !0, {
                    callBack: function(o) {
                        e.callBack && e.callBack(o),
                        1 != o ? s._duidie_view.maxFood_num <= 0 && a <= 0 && (console.log("游戏借宿了哦"), s._duidie_view.game_over = !0, u._poolNodeMager.getPoolNode(d.KEY.poolName.gameStop_panel, null, !0, {
                            callBack: function() {
                                s._duidie_view.onClose(1)
                            }
                        })) : t.renlei_fuhuo()
                    }
                })
            } else this.destory(e);
        } else this.destory(e)
    },
    t.prototype.destory = function() {
        if (1 != this.is_desory) {
            this.is_desory = !0;
            var e = 0;
            if (this.card_class && this.card_class.cradId && (e = this.card_class.cradId), this.node && u._poolNodeMager.getPoolNode(d.KEY.poolName.yanwu, s._duidie_view.card_effect, !0, {
                position: this.node.position
            }), this.cards && this.cards.length > 1) {
                this.cards.splice(this.card_index, 1);
                for (var t = 0; t < this.cards.length; t++) this.cards[t].cards = this.cards.slice(),
                this.cards[t].card_index = t,
                this.cards[t].updateCard(this.cards.slice(), t)
            }
            this.card_class && 1 == this.card_class.isCardLimit && s._duidie_view.del_cardCount(),
            this.card_class && (this.card_class.Type == y.card_type.shiwu && s._duidie_view.del_haveFood_num(this.card_class.Satiety), this.card_class.cradId == y.cardNameOrId.金币 && s._duidie_view.del_gold(1), this.card_class.cradId == y.cardNameOrId.棚子 && s._duidie_view.del_cardMaxCount(4), this.card_class.cradId == y.cardNameOrId.仓库 && s._duidie_view.del_cardMaxCount(14)),
            -1 != c._gameStateData.guaiwuCard.indexOf(parseInt(this.card_class.cradId + "")) && this.node && this.node.getComponent("card_50004") && this.node.getComponent("card_50004").off(),
            this.is_enable = !1,
            this.is_active = !1,
            this.updateY_open(!1),
            this.paichiActionOpen(!1),
            this.disable_lq_collide(),
            this.node_off(),
            this.unscheduleAllCallbacks(),
            this.node.stopAllActions(),
            this.node.removeComponent(a),
            this.node.parent.removeChild(this.node),
            this.card_class && (this.card_class.cradId == y.cardNameOrId.恶魔 && 1 == s._duidie_view.gameIndex ? ( - 1 == c._userData.levelList.indexOf(1) && (c._userData.levelList.push(1), c.UserDataManger.preData()), s._duidie_view.updateChengjiuMap("15"), s._duidie_view.updateChengjiuMap("16"), p._EventTargetMager.emit("updateRenWuList", 152), u._poolNodeMager.getPoolNode(d.KEY.poolName.taskComplete_panel, null, !0, {
                callBack: function(e) {
                    0 == e && (s._duidie_view.game_over = !0, s._duidie_view.onClose(1))
                }
            })) : this.card_class.cradId == y.cardNameOrId.史莱姆 ? s._duidie_view.updateChengjiuMap("3") : this.card_class.cradId == y.cardNameOrId.狼 ? s._duidie_view.updateChengjiuMap("4") : this.card_class.cradId == y.cardNameOrId.熊 ? s._duidie_view.updateChengjiuMap("5") : this.card_class.cradId == y.cardNameOrId.骷髅 ? s._duidie_view.updateChengjiuMap("6") : this.card_class.cradId == y.cardNameOrId.小老鼠 ? s._duidie_view.updateChengjiuMap("7") : this.card_class.cradId == y.cardNameOrId.大老鼠 ? s._duidie_view.updateChengjiuMap("8") : this.card_class.cradId == y.cardNameOrId.海盗 ? p._EventTargetMager.emit("updateRenWuList", 335) : this.card_class.cradId == y.cardNameOrId.海盗船长 ? p._EventTargetMager.emit("updateRenWuList", 336) : this.card_class.cradId == y.cardNameOrId.大白鲨 ? p._EventTargetMager.emit("updateRenWuList", 316) : this.card_class.cradId == y.cardNameOrId.丧尸 ? p._EventTargetMager.emit("updateRenWuList", 417) : this.card_class.cradId == y.cardNameOrId.生化巨人 && p._EventTargetMager.emit("updateRenWuList", 436)),
            this.node.destroy(),
            -1 != s._duidie_view.guangArray.indexOf(e) && (p._EventTargetMager.emit("updateGuangCount"), s._duidie_view.mask_graphics(this.guangSize, this.node.position, !0))
        }
    },
    t.prototype.piaoLiuMove = function() {
        var e = this;
        this.cards.length > 1 || (this.piaoLiuAction = cc.repeatForever(cc.sequence(cc.moveBy(1, -this.piaoLiuMoveSpeed, 0), cc.callFunc(function() {
            1 == c._gameStateData.is_pause && e.node.stopAction(e.piaoLiuAction),
            e.node.x <= -(e.node.parent.width / 2 + 200) && e.onClose(1)
        }))), this.node.runAction(this.piaoLiuAction))
    },
    t.prototype.onLoad = function() {
        this.cards = [],
        this.cards.push(this)
    },
    t.prototype.update_is_zuhe = function(e) {
        this.is_zuhe = e
    },
    t.prototype.renlei_fuhuo = function() {
        this.card_class.cradId == y.cardNameOrId.尸体 && (this.card_icon.angle = 0, this.node.angle = 0, 0 == this.isLueDuo && (this.dayNum = 0), s._duidie_view.updateChengjiuMap("22"), this.is_siwang = !1, this.update_is_zuhe(!0), u._poolNodeMager.getPoolNode(d.KEY.poolName.yanwu, s._duidie_view.card_effect, !0, {
            position: this.node.position
        }), _.commonTool.updateSprite("card/" + this.card_class.CardName, this.card_icon, null, s._duidie_view.gameIndex), _.commonTool.updateSprite("card/" + this.card_class.CardName, this.shadow, null, s._duidie_view.gameIndex), this.crad_duidies = c._gameStateData.StackableGroup[this.copycardId].StackableGroup, this.card_class.cradId = this.copycardId, this.card_class.Price = 0, this.priceIcon.active = !1, this.initData(), -1 != s._duidie_view.guangArray.indexOf(this.card_class.cradId) && (p._EventTargetMager.emit("updateGuangCount"), s._duidie_view.mask_graphics(this.guangSize, this.node.position, !0)))
    },
    t.prototype.initData = function() {
        this.card_icon = this.node.getChildByName("card_icon"),
        this.box = this.node.getChildByName("box"),
        this.shadow = this.node.getChildByName("shadow"),
        this.card_bg = this.node.getChildByName("card_bg"),
        this.hpIcon = this.card_icon.getChildByName("hpIcon"),
        this.baoshiduIcon = this.card_icon.getChildByName("baoshiduIcon"),
        this.priceIcon = this.card_icon.getChildByName("priceIcon"),
        this.box.height = this.node.height;
        var e = c._gameStateData.CardsList[this.card_class.cradId];
        for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
            var a = e[t];
            this.card_class[t] = a
        }
        e && (this.maxLife = e.Life),
        this.card_class.Type == y.card_type.renlei && (s._duidie_view.Rennum += 1, s._duidie_view.Rennum < 0 && (s._duidie_view.Rennum = 0), s._duidie_view.Rennum > s._duidie_view.maxRennum && (s._duidie_view.maxRennum = s._duidie_view.Rennum)),
        2 == s._duidie_view.gameIndex && this.card_class.cradId == y.cardNameOrId.墓地 && (this.card_class.isSellOut = 0, this.card_class.Price = 0),
        this.card_class && -1 != c._gameStateData.guaiwuCard.indexOf(this.card_class.cradId) && 17 != this.card_class.Type && this.touch_off(),
        this.card_class && 1 != this.card_class.IsControlled && this.touch_off(),
        _.commonTool.updateSprite("card/" + this.card_class.CardName, this.card_icon, null, s._duidie_view.gameIndex),
        _.commonTool.updateSprite("card/" + this.card_class.CardName, this.shadow, null, s._duidie_view.gameIndex),
        this.card_class.Type == y.card_type.renlei && p._EventTargetMager.on("renlei_fuhuo", this.renlei_fuhuo, this),
        this.card_class.Satiety > 0 && s._duidie_view.add_haveFood_num(this.card_class.Satiety),
        this.card_class.DemandSatiety > 0 && s._duidie_view.add_maxFood_num(this.card_class.DemandSatiety),
        1 == this.card_class.isCardLimit && s._duidie_view.add_cardCount(),
        this.card_class.cradId == y.cardNameOrId.金币 && s._duidie_view.add_gold(1),
        this.card_class.cradId == y.cardNameOrId.棚子 && s._duidie_view.add_cardMaxCount(4),
        this.card_class.cradId == y.cardNameOrId.仓库 && s._duidie_view.add_cardMaxCount(14),
        this.showIcon(),
        this.card_class.isCardLimit && p._EventTargetMager.emit("init_uiData"),
        this.card_class.cradId == y.cardNameOrId.金币 && (this.card_class.Price = 1),
        this.card_class.Type == y.card_type.lantu && -1 == c._userData.lantu_data.indexOf(this.card_class.cradId) && (console.log("没来这里吗"), c._userData.lantu_data.push(this.card_class.cradId), c.UserDataManger.preData())
    },
    t.prototype.showIcon = function() {
        this.card_class.Satiety > 0 && (this.baoshiduIcon.active = !0, this.baoshiduIcon.getChildByName("num").getComponent(cc.Label).string = this.card_class.Satiety + ""),
        (this.card_class.Price > 0 || this.card_class.cradId == y.cardNameOrId.金币箱) && (this.priceIcon.active = !0, this.priceIcon.getChildByName("num").getComponent(cc.Label).string = this.card_class.Price + ""),
        this.card_class.Life > 0 && (this.hpIcon.active = !0, this.hpIcon.getChildByName("num").getComponent(cc.Label).string = this.card_class.Life + "")
    },
    t.prototype.updateCardIdList = function() {
        if (this.card_attr_class && this.card_attr_class.cardsIdList) {
            var e = [],
            t = 0;
            for (var a in this.card_attr_class.cardsIdList) if (Object.prototype.hasOwnProperty.call(this.card_attr_class.cardsIdList, a)) {
                this.card_attr_class.cardsIdList[a];
                var o = g.default.getCard(this.card_attr_class.cardsIdList[t]);
                o && (e.push(o), t += 1)
            }
            for (var a in t = 0,
            e.length > 0 && (this.cards = []), this.card_attr_class.cardsIdList) if (Object.prototype.hasOwnProperty.call(this.card_attr_class.cardsIdList, a)) {
                this.card_attr_class.cardsIdList[a];
                var i = g.default.getCard(this.card_attr_class.cardsIdList[t]);
                console.log(),
                i && (i.id == this.id && (this.card_index = t), this.cards.push(e[t]), t += 1)
            }
            for (var n = 0; n < this.cards.length; n++) this.cards[n].updateCard(this.cards.slice(), n)
        }
    },
    t.prototype.stoppiaoLiuMove = function() {
        this.node.stopAllActions(),
        this.piaoLiuAction = null,
        this.piaoLiuAction && this.node.stopAction(this.piaoLiuAction)
    },
    t.prototype.startpiaoLiuMove = function() {
        this.piaoLiuMove()
    },
    t.prototype.node_on = function() {
        this.touch_on(),
        p._EventTargetMager.on("updateCardIdList", this.updateCardIdList, this),
        p._EventTargetMager.on("update_is_zuhe", this.update_is_zuhe, this),
        p._EventTargetMager.on("closeAll", this.onClose, this),
        p._EventTargetMager.on("updateHeChengState", this.updateHeChengState, this),
        p._EventTargetMager.on("updateBatter", this.updateBatter, this),
        p._EventTargetMager.on("stoppiaoLiuMove", this.stoppiaoLiuMove, this),
        p._EventTargetMager.on("startpiaoLiuMove", this.startpiaoLiuMove, this)
    },
    t.prototype.node_off = function() {
        this.touch_off(),
        p._EventTargetMager.off("updateCardIdList", this.updateCardIdList, this),
        this.card_class.Type == y.card_type.renlei && p._EventTargetMager.off("renlei_fuhuo", this.renlei_fuhuo, this),
        p._EventTargetMager.off("update_is_zuhe", this.update_is_zuhe, this),
        p._EventTargetMager.off("closeAll", this.onClose, this),
        p._EventTargetMager.off("updateHeChengState", this.updateHeChengState, this),
        p._EventTargetMager.off("updateBatter", this.updateBatter, this),
        p._EventTargetMager.off("stoppiaoLiuMove", this.stoppiaoLiuMove, this),
        p._EventTargetMager.off("startpiaoLiuMove", this.startpiaoLiuMove, this)
    },
    t.prototype.touch_on = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.TOUCH_START, this),
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TOUCH_MOVE, this),
        this.node.on(cc.Node.EventType.TOUCH_END, this.TOUCH_END, this),
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.TOUCH_END, this)
    },
    t.prototype.touch_off = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.TOUCH_START, this),
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.TOUCH_MOVE, this),
        this.node.off(cc.Node.EventType.TOUCH_END, this.TOUCH_END, this),
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.TOUCH_END, this)
    },
    t.prototype.updateBatter = function(e, t, a) {
        if (e == this.batterId && t.id != this.id && t.card_class.Type != this.card_class.Type) if (1 == a) {
            for (var o = 0; o < this.battleTarget.length; o++) if (this.battleTarget[o].id == t.id) {
                this.battleTarget.splice(o, 1);
                break
            }
            this.battleTarget.length <= 0 && this.stopBattle()
        } else this.battleTarget.push(t)
    },
    t.prototype.TOUCH_START = function(e) {
        var t = this,
        a = e.getID();
        if ( - 99 == this.touch_id && (this.touch_id = a), a == this.touch_id && !(this.dumoguTime > 0)) {
            if (this.card_icon.angle = 0, this.node.angle = 0, this.stopBattle(), p._EventTargetMager.emit("clear_cardItem", this.id), this.startPos = this.node.position, this.collisionCard = [], this.is_touch = !0, g.default.cardEffect(this), this.card_index > 0) {
                var o = [],
                i = this.cards.slice();
                i = i.splice(0, this.card_index),
                o = this.cards.slice(this.card_index);
                for (var n = 0; n < i.length; n++) this.cards[n].updateCard(i, n);
                for (var r = 0; r < o.length; r++) o[r].updateCard(o, r)
            }
            for (r = 0; r < this.cards.length; r++) this.cards[r] && this.cards[r].node && (this.cards[r].node.scale = this.cards[r].node.scale + .05, this.cards[r].node.getChildByName("shadow").y -= 5, this.cards[r].node.zIndex = cc.macro.MAX_ZINDEX, this.cards[r].is_enable = !1);
            3 == s._duidie_view.gameIndex && (l._audioMager.playAudioEff("huadonshuihua", !0), s._duidie_view.ScrollView.enabled = !1, u._poolNodeMager.getPoolNode(d.KEY.poolName.selectcard_bolang, this.cards[this.cards.length - 1].node, !0, null,
            function(e) {
                t.selectcard_bolang = e,
                e.y = -45,
                e.x = -11;
                for (var a = 0; a < e.children.length; a++) e.children[a].scale = .5;
                if (t.card_class.cradId == y.cardNameOrId.海盗船) for (e.y = -90, e.x = -50, a = 0; a < e.children.length; a++) e.children[a].scale = .8
            })),
            4 == s._duidie_view.gameIndex && (s._duidie_view.ScrollView.enabled = !1),
            this.cards[0].is_enable = !0,
            g.default.addXuXian(this.cards, this.crad_duidies, this),
            this.touch_start(),
            "cardItem" != this.node.name && v._game_ui.select_ui(this, !0)
        }
    },
    t.prototype.TOUCH_MOVE = function(e) {
        var t = this;
        if (e.getID() == this.touch_id && !(this.dumoguTime > 0 || this.is_shopMove)) {
            this.node.stopAction(this.schdeule);
            var a = e.getPreviousLocation(),
            o = this.node.parent.convertToNodeSpaceAR(e.getLocation()),
            i = this.node.parent.convertToNodeSpaceAR(cc.v2(e.getPreviousLocation().x, e.getPreviousLocation().y - this.card_index * this.intervalY));
            this.node.setPosition(g.default.updatePos(o, this.node.parent, this.node, this.cards, a)),
            this.selectcard_bolang && (this.selectcard_bolang.scaleX = 1, i.x < o.x && (this.selectcard_bolang.scaleX = -1));
            for (var n = 1; n < this.cards.length; n++) this.cards[n].paiqi = !0; - 1 != s._duidie_view.guangArray.indexOf(this.card_class.cradId) && s._duidie_view.mask_graphics(this.guangSize, this.node.position, !0),
            this.schdeule = this.node.runAction(cc.sequence(cc.delayTime(.015 * (this.cards.length - 1)), cc.callFunc(function() {
                for (var e = 1; e < t.cards.length; e++) t.cards[e].paiqi = !0
            })))
        }
    },
    t.prototype.TOUCH_END = function(e) {
        var t = this;
        if (e.getID(), this.touch_id = -99, !(this.dumoguTime > 0)) {
            3 == s._duidie_view.gameIndex && (s._duidie_view.ScrollView.enabled = !0, l._audioMager.stopLoopAudioEff("huadonshuihua"), l._audioMager.stopAllAudioEff("huadonshuihua"), this.selectcard_bolang && this.selectcard_bolang.getComponent(w.default).onClose(1)),
            4 == s._duidie_view.gameIndex && (s._duidie_view.ScrollView.enabled = !0),
            p._EventTargetMager.emit("clear_card_xuxian"),
            this.is_touch = !1,
            g.default.cardEffect(this);
            for (var a = 0; a < this.cards.length; a++) this.cards[a] && this.cards[a].node && (this.cards[a].node.scale = this.cards[a].node.scale - .05, this.cards[a].node.getChildByName("shadow").y += 5, this.cards[a].node.zIndex = 0, this.cards[a].paiqi = !0);
            for (a = 0; a < this.cards.length; a++) this.cards[a].updateCard(this.cards.slice(), a);
            if (this.is_atk = !1, v._game_ui.select_ui(this, !1), this.card_class.Type == y.card_type.renlei && p._EventTargetMager.emit("updateMoveTarget"), this.shop_node) {
                u._poolNodeMager.getPoolNode(d.KEY.poolName.yanwu, s._duidie_view.card_effect, !0, {
                    position: this.shop_node.position
                });
                var o = this.shop_node.getComponent(m.default).data_string;
                return "-1" == o ? g.default.maichu(this) : (this.card_class.cradId == y.cardNameOrId.金币箱 && p._EventTargetMager.emit("updateRenWuList", 140), g.default.goumai(this, o)),
                this.shop_node && (this.shop_node.scale = 1),
                this.shop_node = null,
                void this.updateY_open()
            }
            if (this.updateY_open(), this.collisionCard.length > 0) {
                var i = !1;
                for (a = 0; a < this.collisionCard.length; a++) {
                    var n = this.collisionCard[a];
                    n && n.card_class && (n.card_class.Type == y.card_type.guaiwu && this.card_class.Type == y.card_type.renlei && this.card_class.cradId != y.cardNameOrId.婴儿 ? (this.battleTarget.push(n), i = !0) : this.card_class.cradId == y.cardNameOrId.尸体 && n.card_class.Type == y.card_type.guaiwu && (this.battleTarget.push(n), i = !0))
                }
                if (i) {
                    var r = g.default.screenNearestBatter(this.battleTarget, this),
                    c = this.card_class.Type;
                    if (r.is_battle ? this.batterId = r.batterId: (s._duidie_view.battleId += 1, this.batterId = s._duidie_view.battleId, r.batterId = this.batterId), r) {
                        for (r.startBattle(), a = 0; a < this.cards.length; a++) c == this.cards[a].card_class.Type && (this.cards[a].batterId = this.batterId);
                        for (a = 0; a < this.cards.length; a++) this.cards[a].startBattle();
                        this.scheduleOnce(function() {
                            t.Attack()
                        },
                        1),
                        this.startBattle(),
                        this.startAttack(),
                        p._EventTargetMager.emit("updateBatter", this.batterId, this, !1)
                    }
                    return
                }
                var _ = g.default.screenNearest(this.collisionCard, this, this.crad_duidies);
                _ ? (this.cards.length >= 3 ? l._audioMager.playAudioEff("zhongyi_0" + h.NumberUtil.randomNum(1, 4)) : l._audioMager.playAudioEff("qingyi_0" + h.NumberUtil.randomNum(1, 2)), this.updateCardNodes(_)) : this.paichiActionOpen(!0, this.collisionCard)
            } else for (a = 0; a < this.cards.length; a++) this.cards[a].updateCard(this.cards.slice(), a);
            this.touch_end(),
            this.tankai()
        }
    },
    t.prototype.tankai = function() {
        if ( - 1 != this.guangArray.indexOf(this.card_class.cradId)) for (var e = 0; e < this.node.parent.childrenCount; e++) {
            var t = this.node.parent.children[e],
            o = t.getComponent(a);
            if ((o.card_class.cradId == y.cardNameOrId.丧尸 || o.card_class.cradId == y.cardNameOrId.狂暴丧尸 || o.card_class.cradId == y.cardNameOrId.蜘蛛 || o.card_class.cradId == y.cardNameOrId.老鼠) && this.node.position.sub(t.position).len() < this.guangSize) {
                var i = t.getPosition().sub(this.node.getPosition()).normalize(),
                n = this.guangSize + 10,
                r = i.div(1 / n),
                c = t.getPosition().add(r);
                r = g.default.updatePos(c, t.parent, t, o.cards),
                t.runAction(cc.moveTo(.3, r))
            }
        }
    },
    t.prototype.huishou = function(e) {
        var t = this;
        this.is_active = !1,
        this.is_move = !1,
        this.updateY_open(!1),
        this.paichiActionOpen(!1),
        this.is_enable = !1,
        cc.tween(this.node).to(.25, {
            position: e
        },
        {
            easing: "backIn"
        }).call(function() {
            t.onClose("回收")
        }).start()
    },
    t.prototype.goldMoveAction = function(e, t, a) {
        var o, i = this;
        this.node.zIndex = cc.macro.MAX_ZINDEX,
        l._audioMager.playAudioEff("浆果丛_02"),
        this.is_active = !1,
        this.node_off(),
        this.is_enable = !1,
        this.updateY_open(!1),
        this.paichiActionOpen(!1),
        o = this.node.position.sub(e).mag() / 1300,
        cc.tween(this.node).to(o, {
            position: e
        },
        {
            easing: "backIn"
        }).call(function() {
            l._audioMager.playAudioEff("金币"),
            a && a(t),
            i.onClose(1)
        }).start()
    },
    t.prototype.diankuang = function() {
        var e = this;
        if (this.cards && this.cards.length > 1) {
            this.cards.splice(this.card_index, 1),
            console.log("我是多少", this.cards);
            for (var t = 0; t < this.cards.length; t++) this.cards[t].updateCard(this.cards.slice(), t);
            this.updateCard([this], 0)
        }
        this.node.runAction(cc.repeat(cc.sequence(cc.callFunc(function() {
            0 == c._gameStateData.is_pause && g.default.jump(e,
            function() {})
        }), cc.delayTime(1)), 15))
    },
    t.prototype.foodMoveAction = function(e, t, o, i) {
        var n = this;
        this.is_active = !1;
        var r = this.node.zIndex,
        c = this.node.position,
        p = t - this.card_class.Satiety;
        l._audioMager.playAudioEff("浆果丛_01"),
        this.node_off();
        var h = .15; (h = this.node.position.sub(e).mag() / 1200) > 2 && (h = 2),
        cc.tween(this.node).to(h, {
            position: e
        },
        {
            easing: "expoOut"
        }).call(function() {
            u._poolNodeMager.getPoolNode(d.KEY.poolName.yanwu, s._duidie_view.card_effect, !0, {
                position: e
            }),
            l._audioMager.playAudioEff("chi"),
            n.card_class.cradId == y.cardNameOrId.毒蘑菇 && i && i.getComponent(a) && (i.getComponent(a).dumoguTime = 15),
            p < 0 ? (s._duidie_view.del_haveFood_num(t), n.updateDataAttr("Satiety", -1 * t), n.scheduleOnce(function() {
                n.node.zIndex = r;
                for (var e = 0; e < n.cards.length; e++) e < n.card_index || (n.cards[e].node.zIndex = r)
            },
            .15), cc.tween(n.node).to(h, {
                position: c
            },
            {
                easing: "expoOut"
            }).call(function() {
                n.is_active = !0,
                n.node_on(),
                o && o(p)
            }).start()) : (n.onClose(1), o && o(p))
        }).start()
    },
    t.prototype.updateDataAttr = function(e, t) {
        this.card_class[e] += t,
        this.priceIcon.children[0].getComponent(cc.Label).string = this.card_class.Price + "",
        this.hpIcon.children[0].getComponent(cc.Label).string = this.card_class.Life + "",
        this.baoshiduIcon.children[0].getComponent(cc.Label).string = this.card_class.Satiety + "",
        this.showIcon()
    },
    t.prototype.updateY_open = function(e) {
        void 0 === e && (e = !0),
        this.updateY = e,
        e && this.collisionCard.length > 0 && this.paichiActionOpen(!0, this.collisionCard)
    },
    t.prototype.kapai_shousuo = function(e) {
        void 0 === e && (e = null);
        var t = this.node.getPosition();
        e && (t = e);
        for (var a = 0; a < this.cards.length; a++) cc.tween(this.cards[a].node).to(.15, {
            x: t.x,
            y: t.y - a * this.intervalY
        },
        {
            easing: "backIn"
        }).start()
    },
    t.prototype.on_collide = function(e) {
        var t = e; ! this.is_touch && this.is_active && !t.is_touch && t.is_active && this.paichiActionOpen(!0)
    },
    t.prototype.on_enter = function(e) {
        var t = this;
        if (e) if ("box" != e.node.name) {
            if ("shop" != e.node.name) {
                var a = e,
                o = this.collisionCard.indexOf(a),
                i = this.cards.indexOf(a),
                n = !1;
                for (m = 0; m < a.cards.length; m++) a.cards[m] && a.cards[m].card_class && a.cards[m].card_class.Type == y.card_type.renlei && (n = !0);
                var r = [y.cardNameOrId.丧尸, y.cardNameOrId.蜘蛛, y.cardNameOrId.老鼠, y.cardNameOrId.狂暴丧尸];
                if (4 == s._duidie_view.gameIndex && -1 != r.indexOf(this.card_class.cradId) && 0 == g.default.judgeGuangPos(a.node.position)) {
                    var d = this.node.getPosition().sub(a.node.getPosition()).normalize().div(1 / 70),
                    l = this.node.getPosition().add(d);
                    return d = g.default.updatePos(l, this.node.parent, this.node, this.cards),
                    void this.node.runAction(cc.moveTo(.3, d))
                }
                if (1 == n && this.card_class.Type == y.card_type.guaiwu && -1 != c._gameStateData.guaiwuCard.indexOf(this.card_class.cradId) && 0 == this.is_battle && 0 == this.is_touch && 0 == a.is_touch) {
                    for (console.log("来都不来啊11111111"), a.is_battle ? this.batterId = a.batterId: (s._duidie_view.battleId += 1, this.batterId = s._duidie_view.battleId), m = 0; m < a.cards.length; m++) a.cards[m].card_class.Type == y.card_type.renlei && (a.cards[m].batterId = this.batterId, this.battleTarget.push(a.cards[m]));
                    for (m = 0; m < a.cards.length; m++) a.cards[m].card_class.Type == y.card_type.renlei && a.cards[m].startBattle();
                    this.startBattle(),
                    this.battleTarget.length > 0 && (this.scheduleOnce(function() {
                        t.Attack()
                    },
                    1), this.startAttack(), p._EventTargetMager.emit("updateBatter", this.batterId, this, !1))
                } - 1 == o && -1 == i && 1 == a.is_active && 1 == a.is_duidie && this.collisionCard.push(a)
            }
        } else {
            var u = !1;
            if ("-1" == e.data_string ? g.default.maichu_jiance(this.card_index, this.cards) && (u = !0) : g.default.goumai_jiance(e.data_string, this.card_index, this.cards) && !s._duidie_view.jiesuan && (u = !0, g.default.jianceCardsType(y.cardNameOrId.金币, this) && this.cards.length >= 4 && "1" == e.data_string && p._EventTargetMager.emit("updateRenWuList", 108)), u && "cardItem" != this.node.name && 1 == this.cards[0].is_touch) {
                this.intervalY = 5,
                this.is_shopMove = !0,
                this.shop_node && (this.shop_node.scale = 1),
                this.shop_node = e.node.parent,
                this.shop_node && (this.shop_node.scale = 1.1);
                var h = this.shop_node.getPosition(),
                _ = this.shop_node.parent.convertToWorldSpaceAR(h),
                f = this.node.parent.convertToNodeSpaceAR(_);
                this.node.setPosition(f);
                for (var m = 1; m < this.cards.length; m++) this.cards[m].intervalY = 5,
                this.cards[m].paiqi = !0;
                this.scheduleOnce(function() {
                    t.is_shopMove = !1
                },
                .2)
            }
        }
    },
    t.prototype.on_exit = function(e) {
        if (e && e.node) if ("shop" == e.node.name && this.shop_node && e.node.uuid == this.shop_node.uuid) {
            if (this.shop_node) {
                this.intervalY = 30,
                this.shop_node && (this.shop_node.scale = 1),
                this.shop_node = null;
                for (var t = 1; t < this.cards.length; t++) this.cards[t].intervalY = 30
            }
        } else {
            var a = e,
            o = this.collisionCard.indexOf(a);
            for (t = 0; t < this.collisionCard.length; t++) if (this.collisionCard[t].id == a.id) {
                o = t;
                break
            } - 1 != o && this.collisionCard.splice(o, 1),
            this.collisionCard.length <= 0 && this.paichiActionOpen(!1)
        }
    },
    t.prototype.updateCard = function(e, t) {
        var o = this;
        if (0 != this.is_active) {
            this.card_index = t,
            this.cards = e;
            for (var i = 0; i < this.cards.length; i++) this.cards[i]._draw_collide = !1;
            for (i = 0; i < this.cards.length; i++) this.cards[i].is_duidie = !0;
            this.intervalY = 30,
            this.cards[0].update_size(e[0]._size.width, this.node.height + (e.length - 1) * this.intervalY);
            var n = -(this.cards.length - 1) * this.intervalY / 2;
            if (this.cards[0]._offset = new cc.Vec2(this.cards[0]._offset.x, n), this.cards[0].draw_shape(), this.paiqi = !0, this.is_enable = !0, -1 == s._duidie_view.piaoLiuArray.indexOf(this.card_class.cradId) && -1 == this.piaoArray.indexOf(this.card_class.cradId) || (this.piaoLiuAction && this.node.stopAction(this.piaoLiuAction), this.cards.length <= 1 && this.piaoLiuMove()), 0 != this.card_index && (this.is_enable = !1), 0 == this.card_index && (this.scheduleOnce(function() {
                p._EventTargetMager.emit("updateHeChengState", o.id),
                o.hecheng()
            },
            .01), this.card_class.cradId == y.cardNameOrId.火箭 && (1 == s._duidie_view.gameIndex || 2 == s._duidie_view.gameIndex))) {
                var r = !0;
                for (i = 1; i < this.cards.length; i++) this.cards[i].card_class.Type != y.card_type.renlei && (r = !1);
                var h = g.default.getTypeCard(y.card_type.renlei),
                _ = !1;
                if (1 == s._duidie_view.gameIndex) {
                    if (0 == (_ = h == this.cards.length - 1)) {
                        h = 0;
                        var f = this.node.parent.getBoundingBoxToWorld(),
                        m = this.node.parent.height / 2 - this.node.height / 2,
                        v = -m,
                        N = this.node.parent.width / 2 - this.node.width / 2,
                        w = -N;
                        for (console.log("相交嘛：", m, N), i = 0; i < s._duidie_view.card_parent.childrenCount; i++) {
                            var S = (I = s._duidie_view.card_parent.children[i]).getComponent(a).card_class.Type,
                            b = I.getBoundingBoxToWorld();
                            S == y.card_type.renlei && 0 == I.getComponent(a).is_siwang && f.intersects(b) && I.x > w && I.x < N && I.y > v && I.y < m && (h += 1)
                        }
                        console.log("最后人数是多少:", h),
                        _ = h == this.cards.length - 1
                    }
                } else 2 == s._duidie_view.gameIndex && (_ = 10 == this.cards.length);
                if (_ && r) {
                    for (p._EventTargetMager.emit("updateRenWuList", 217), i = 0; i < this.cards.length; i++) this.cards[i].touch_off();
                    console.error("火箭升空咯"),
                    s._duidie_view.node.getChildByName("huohjiantip" + s._duidie_view.gameIndex).active = !1,
                    this.is_enable = !1,
                    u._poolNodeMager.getPoolNode(d.KEY.poolName.cardJinDu, this.node, !0, {
                        maxTime: 1,
                        callBack: function() {
                            o.scheduleOnce(function() {
                                var e = cc.repeat(cc.sequence(cc.moveBy(.02, cc.v2(4, 4)), cc.moveBy(.04, cc.v2( - 8, -8)), cc.moveBy(.02, cc.v2(4, 4)), cc.callFunc(function() {
                                    s._duidie_view.node.setPosition(0, 0)
                                })), 12);
                                s._duidie_view.node.runAction(e)
                            },
                            .2);
                            for (var e = function(e) {
                                cc.tween(o.cards[e].node).by(1, {
                                    y: 1e3
                                },
                                {
                                    easing: "quintIn"
                                }).call(function() {
                                    if (e == o.cards.length - 1) if (1 == s._duidie_view.gameIndex) u._poolNodeMager.getPoolNode(d.KEY.poolName.taskComplete_panel2, null, !0, {
                                        callBack: function() { - 1 == c._userData.levelList.indexOf(2) && (c._userData.levelList.push(2), c.UserDataManger.preData()),
                                            s._duidie_view.onClose("清空")
                                        }
                                    });
                                    else {
                                        var t = o.cards.slice();
                                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (console.log("执行了几次", t.length), t[a].onClose("回收"))
                                    }
                                }).start()
                            },
                            t = 0; t < o.cards.length; t++) e(t)
                        }
                    }),
                    u._poolNodeMager.getPoolNode(d.KEY.poolName.huojianyanwu, this.node, !0, null)
                }
            }
            if (3 == s._duidie_view.gameIndex && this.card_class.cradId == y.cardNameOrId.海盗船) {
                for (var O in r = !0,
                this.cards) {
                    var I;
                    Object.prototype.hasOwnProperty.call(this.cards, O) && ((I = this.cards[O]).card_class.Type == y.card_type.renlei ? I.onClose("回收") : I.card_class.cradId != y.cardNameOrId.海盗船 && (r = !1))
                }
                this.cards && this.cards.length > 1 && (this.cards = [this]),
                _ = !1,
                (_ = (h = g.default.getTypeCard(y.card_type.renlei)) == this.cards.length - 1) && r && 0 == s._duidie_view.kaichuan && (s._duidie_view.kaichuan = !0, this.kaichuan = !0, this.touch_off(), this.is_enable = !1, this.node.zIndex = 1, s._duidie_view.node.getChildByName("huohjiantip" + s._duidie_view.gameIndex).active = !1, u._poolNodeMager.getPoolNode(d.KEY.poolName.selectcard_bolang, this.cards[this.cards.length - 1].node, !0, {
                    time: .15
                },
                function(e) {
                    e.y = -90,
                    e.x = -50,
                    e.scale = 1;
                    for (var t = 0; t < e.childrenCount; t++) e.children[t].scale = 1
                }), u._poolNodeMager.getPoolNode(d.KEY.poolName.cardJinDu, this.node, !0, {
                    maxTime: 1,
                    callBack: function() {
                        l._audioMager.playAudioEff("kaichuan");
                        var e = cc.repeat(cc.sequence(cc.moveBy(.02, cc.v2(4, 4)), cc.moveBy(.04, cc.v2( - 8, -8)), cc.moveBy(.02, cc.v2(4, 4)), cc.callFunc(function() {
                            s._duidie_view.node.setPosition(0, 0)
                        })), 7);
                        s._duidie_view.node.runAction(e),
                        cc.tween(o.node).to(3, {
                            x: -(o.node.parent.width / 2 + 200),
                            y: o.node.y
                        },
                        {
                            easing: "circIn"
                        }).call(function() {
                            o.node.opacity = 0,
                            u._poolNodeMager.getPoolNode(d.KEY.poolName.taskComplete_panel2, null, !0, {
                                callBack: function() { - 1 == c._userData.levelList.indexOf(4) && (c._userData.levelList.push(4), c.UserDataManger.preData()),
                                    s._duidie_view.onClose("清空")
                                }
                            })
                        }).start()
                    }
                }))
            } - 1 != s._duidie_view.guangArray.indexOf(this.card_class.cradId) && s._duidie_view.mask_graphics(this.guangSize, this.node.position, !0)
        }
    },
    t.prototype.updateCardNodes = function(e) {
        if (e) {
            var t = this.collisionCard.indexOf(e);
            if (e.card_class.cradId == y.cardNameOrId.动物围栏 && this.card_class.Type == y.card_type.guaiwu && p._EventTargetMager.emit("updateRenWuList", 136), e.card_class.cradId == y.cardNameOrId.金币箱 && g.default.jianceCardsType(y.cardNameOrId.金币, this)) {
                var a = 100;
                if (s._duidie_view.gameIndex >= 3 && (a = 1e3), e.card_class.Price >= a) return;
                u._poolNodeMager.getPoolNode(d.KEY.poolName.yanwu, s._duidie_view.card_effect, !0, {
                    position: e.node.position
                });
                var o = this.cards.slice();
                p._EventTargetMager.emit("updateRenWuList", 139);
                for (var i = 0; i < o.length; i++) {
                    if (e.card_class.Price >= a) return;
                    e.updateDataAttr("Price", 1),
                    o[i].onClose(1)
                }
                return
            }
            if ((e.card_class.cradId == y.cardNameOrId.海盗 || e.card_class.cradId == y.cardNameOrId.海盗精英) && this.card_class.cradId == y.cardNameOrId.金币箱) {
                a = 5,
                e.card_class.cradId == y.cardNameOrId.海盗精英 && (a = 10);
                var n = !1;
                return this.card_class.cradId == y.cardNameOrId.金币箱 && (this.card_class.Price >= a && (n = !0), u._poolNodeMager.getPoolNode(d.KEY.poolName.yanwu, s._duidie_view.card_effect, !0, {
                    position: e.node.position
                }), this.updateDataAttr("Price", -this.card_class.Price)),
                void(n && e.onClose(1))
            }
            if ((e.card_class.cradId == y.cardNameOrId.海盗 || e.card_class.cradId == y.cardNameOrId.海盗精英) && g.default.jianceCardsType(y.cardNameOrId.金币, this)) {
                if (a = 5, e.card_class.cradId == y.cardNameOrId.海盗精英 && (a = 10), n = !1, this.card_class.cradId == y.cardNameOrId.金币) {
                    this.cards.length >= a && (n = !0),
                    u._poolNodeMager.getPoolNode(d.KEY.poolName.yanwu, s._duidie_view.card_effect, !0, {
                        position: e.node.position
                    });
                    var r = this.cards.slice();
                    for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && r[l].onClose(1)
                }
                return void(n && e.onClose(1))
            }
            if (e.card_class.cradId == y.cardNameOrId.旅行马车 && this.card_class.cradId == y.cardNameOrId.金币箱) {
                if (n = !1, this.card_class.cradId == y.cardNameOrId.金币箱) {
                    if (this.card_class.Price < 5) return;
                    u._poolNodeMager.getPoolNode(d.KEY.poolName.yanwu, s._duidie_view.card_effect, !0, {
                        position: e.node.position
                    }),
                    this.updateDataAttr("Price", -5),
                    n = !0
                }
                if (n) {
                    for (var l in o = [], c._gameStateData.CardsList) if (Object.prototype.hasOwnProperty.call(c._gameStateData.CardsList, l)) {
                        var _ = c._gameStateData.CardsList[l];
                        _.Type != y.card_type.ziyuan && _.Type != y.card_type.shiwu || o.push(parseInt(l))
                    }
                    var f = h.NumberUtil.getRandomArrayElements(o, 1);
                    s._duidie_view.add_card(parseInt(f), e.node.position, h.NumberUtil.randomNum(1, 8), 1)
                }
                return
            }
            if (e.card_class.cradId == y.cardNameOrId.海盗基地 && this.card_class.cradId == y.cardNameOrId.金币箱) { (a = this.card_class.Price) > 11 && a < 1e3 && (a = 11);
                var m = new Map;
                m.set(y.cardNameOrId.海盗基地 + "", 1),
                m.set(y.cardNameOrId.金币 + "", a);
                var v = g.default.hecheng_jiance_utilFun(m);
                if (v && v.result.length > 0) {
                    var N = parseInt(v.result[0][0]);
                    return s._duidie_view.add_card(N, this.node.position, h.NumberUtil.randomNum(1, 8)),
                    void this.updateDataAttr("Price", -a)
                }
            }
            if (e.card_class.cradId == y.cardNameOrId.海盗船 && this.card_class.Type == y.card_type.renlei && u._poolNodeMager.getPoolNode(d.KEY.poolName.yanwu, s._duidie_view.card_effect, !0, {
                position: this.node.position
            }), e.card_class.Type == y.card_type.renlei && this.card_class.cradId == y.cardNameOrId.疫苗 && 1 == this.cards.length) return p._EventTargetMager.emit("updateRenWuList", 431),
            e.updateDataAttr("Life", 5),
            void this.onClose(1);
            if (e.card_class.cradId == y.cardNameOrId.流浪商人 && this.card_class.cradId == y.cardNameOrId.金币箱) {
                if (n = !1, this.card_class.cradId == y.cardNameOrId.金币箱) {
                    if (this.card_class.Price < 10) return;
                    u._poolNodeMager.getPoolNode(d.KEY.poolName.yanwu, s._duidie_view.card_effect, !0, {
                        position: e.node.position
                    }),
                    this.updateDataAttr("Price", -10),
                    n = !0
                }
                if (n) {
                    var w = c._gameStateData.CardSynthesis.get("100073"),
                    S = 0;
                    for (i = 0; i < w.result.length; i++) S += w.result[i][2];
                    var b = Math.random() * S,
                    O = 0;
                    for (f = null, i = 0; i < w.result.length; i++) if (b < (O += w.result[i][2])) {
                        f = w.result[i][0];
                        break
                    }
                    s._duidie_view.add_card(parseInt(f), e.node.position, h.NumberUtil.randomNum(1, 8), 1)
                }
                return
            }
            if (e.card_class.cradId == y.cardNameOrId.掠夺者 && this.card_class.cradId == y.cardNameOrId.金币箱) {
                if (n = !1, this.card_class.cradId == y.cardNameOrId.金币箱) {
                    if (this.card_class.Price < 20) return;
                    u._poolNodeMager.getPoolNode(d.KEY.poolName.yanwu, s._duidie_view.card_effect, !0, {
                        position: e.node.position
                    }),
                    this.updateDataAttr("Price", -20),
                    n = !0
                }
                return void(n && (p._EventTargetMager.emit("updateRenWuList", 434), w = {
                    cradId: y.cardNameOrId.求生者,
                    id: this.id,
                    crad_fly_id: null,
                    position: e.node.position,
                    isLueDuo: !0
                },
                u._poolNodeMager.getPoolNode(d.KEY.poolName.card, this.node.parent, !0, w), e.onClose(1)))
            }
            if (e.card_class.cradId == y.cardNameOrId.萤火虫灯 && -1 != [y.cardNameOrId.萤火虫].indexOf(this.card_class.cradId) && e.cardJinDuGuang) return e.cardJinDuGuang.delTime(e.guangTime),
            void this.onClose(1);
            if (e.card_class.cradId == y.cardNameOrId.燃油灯 && -1 != [y.cardNameOrId.燃油].indexOf(this.card_class.cradId) && e.cardJinDuGuang) return e.cardJinDuGuang.delTime(e.guangTime),
            void this.onClose(1);
            if (e.card_class.cradId == y.cardNameOrId.灯泡 && -1 != [y.cardNameOrId.电池].indexOf(this.card_class.cradId) && e.cardJinDuGuang) return e.cardJinDuGuang.delTime(e.guangTime),
            void this.onClose(1);
            if ((e.card_class.cradId == y.cardNameOrId.火把 || e.card_class.cradId == y.cardNameOrId.篝火 || e.card_class.cradId == y.cardNameOrId.火坑) && -1 != [y.cardNameOrId.废纸, y.cardNameOrId.烂木, y.cardNameOrId.干草, y.cardNameOrId.腐烂物, y.cardNameOrId.木板, y.cardNameOrId.绳子, y.cardNameOrId.肥料].indexOf(this.card_class.cradId) && e.cardJinDuGuang) return e.card_class.cradId == y.cardNameOrId.火把 && this.card_class.cradId == y.cardNameOrId.烂木 && p._EventTargetMager.emit("updateRenWuList", 438),
            e.cardJinDuGuang.delTime(e.guangTime),
            void this.onClose(1); - 1 != t && this.collisionCard.splice(t, 1);
            for (var I = e.cards[0].cards, C = 0; C < this.cards.length; C++) I.push(this.cards[C]);
            for (i = 0; i < I.length; i++) {
                var M = I[i];
                M.is_enable = !1,
                M.updateCard(I.slice(), i)
            }
            g.default.jianceCardsType(y.cardNameOrId.金币, this) && this.cards.length >= 4 && p._EventTargetMager.emit("updateRenWuList", 107)
        }
    },
    t.prototype.updateHeChengState = function(e) {
        if (void 0 === e && (e = null), null != this.hechengList_class) {
            var t = !1,
            a = this.hechengList_class.targetCard.cards,
            o = this.hechengList_class.selfCard.cards;
            if (!a || !o) return p._EventTargetMager.emit("clearJindu", this.hechengList_class.hecheng_class),
            this.hechengList_class = null,
            void(this.cardJinDu = null);
            if (e) {
                for (var i = 0; i < a.length; i++) if (a[i].id == e) {
                    t = !0;
                    break
                }
                for (i = 0; i < o.length; i++) if (o[i].id == e) {
                    t = !0;
                    break
                }
            }
            if (0 != t) {
                var n = g.default.duibiCards(a, o),
                r = !0;
                for (i = 0; i < a.length; i++) a[i].is_touch && (r = !1);
                for (i = 0; i < o.length; i++) o[i].is_touch && (r = !1);
                if (this.hechengList_class.type == y.hecheng_type.加工) {
                    var c = !0,
                    d = this.hechengList_class.cardList,
                    l = function(e) {
                        var t = a[e].id;
                        d.forEach(function() {
                            d.has(t) || (c = !1)
                        })
                    };
                    for (i = 0; i < a.length; i++) l(i);
                    a.length != d.size && (c = !1),
                    n && c ? p._EventTargetMager.emit("jindu_restart", this.hechengList_class.hecheng_class) : r ? (this.cloneCards = [], p._EventTargetMager.emit("clearJindu", this.hechengList_class.hecheng_class), this.hechengList_class = null, this.cardJinDu = null, this.hecheng()) : (this.cloneCards = this.cards, p._EventTargetMager.emit("jindu_suspend", this.hechengList_class.hecheng_class))
                } else if (n) p._EventTargetMager.emit("jindu_restart", this.hechengList_class.hecheng_class);
                else if (r) p._EventTargetMager.emit("clearJindu", this.hechengList_class.hecheng_class),
                this.hechengList_class = null,
                this.cardJinDu = null;
                else {
                    if (4 == s._duidie_view.gameIndex && this.hechengList_class.selfCard.dumoguTime > 0) return p._EventTargetMager.emit("clearJindu", this.hechengList_class.hecheng_class),
                    this.hechengList_class = null,
                    void(this.cardJinDu = null);
                    p._EventTargetMager.emit("jindu_suspend", this.hechengList_class.hecheng_class)
                }
            }
        }
    },
    t.prototype.hecheng = function(e) {
        void 0 === e && (e = !1);
        var t = g.default.hecheng_jiance(this);
        if (t.length > 0) for (var a = function(a) {
            var i = t[a];
            if (null == i.targetCard.hechengList_class || e) {
                if ((0 == i.targetCard.is_zuhe || 0 == i.selfCard.is_zuhe) && i.targetCard.card_class.Type != y.card_type.renlei && i.selfCard.card_class.Type != y.card_type.renlei) return {
                    value: void 0
                };
                if (i.targetCard.startHeCheng(), i.targetCard.hechengList_class = i, i.type == y.hecheng_type.加工) for (var n = 0; n < o.cards.length; n++) o.cards[n].is_duidie = !1;
                i.targetCard.card_class.cradId == y.cardNameOrId.树 && p._EventTargetMager.emit("updateRenWuList", 112),
                i.targetCard.card_class.cradId == y.cardNameOrId.浆果丛 && p._EventTargetMager.emit("updateRenWuList", 102),
                -1 != s._duidie_view.piaoLiuArray.indexOf(i.targetCard.card_class.cradId) && p._EventTargetMager.emit("updateRenWuList", 302),
                i.targetCard.card_class.cradId == y.cardNameOrId.小岛 && p._EventTargetMager.emit("updateRenWuList", 304),
                i.targetCard.card_class.cradId == y.cardNameOrId.岩石 && p._EventTargetMager.emit("updateRenWuList", 109),
                i.targetCard.card_class.cradId == y.cardNameOrId.房子 && 3 == o.cards.length && p._EventTargetMager.emit("updateRenWuList", 128),
                "100004" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 111),
                "109005" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 308),
                "100001" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 310),
                "100002" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 312),
                "109001" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 312),
                "101002" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 314),
                "100002" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 402),
                "100003" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 404),
                "100009" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 406),
                "100029" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 408),
                "100008" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 410),
                "100015" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 412),
                "100005" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 414),
                "100070" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 432),
                "100071" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 433),
                i.targetCard.card_class.cradId == y.cardNameOrId.木头 && i.selfCard.card_class.cradId == y.cardNameOrId.村民 && p._EventTargetMager.emit("updateRenWuList", 114),
                "300001" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 122),
                "300002" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 124),
                "700029" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 130),
                "900002" == i.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 151);
                var r = null;
                o.carJinduTime >= 0 && (r = o.carJinduTime, o.carJinduTime = -1),
                i.targetCard.card_class.cradId != y.cardNameOrId.狗 && i.selfCard.card_class.cradId != y.cardNameOrId.狗 || (i.hecheng_class.times *= .2),
                4 != s._duidie_view.gameIndex || i.targetCard.card_class.cradId != y.cardNameOrId.狗 && i.selfCard.card_class.cradId != y.cardNameOrId.狗 || (i.hecheng_class.times *= .7),
                i.targetCard.card_class.Type == y.card_type.renlei && 4 == s._duidie_view.gameIndex && s._duidie_view.dayNum >= 2 && g.default.judgeGuangPos(i.targetCard.node.position) && (i.hecheng_class.times *= 3),
                i.selfCard.card_class.Type == y.card_type.renlei && 4 == s._duidie_view.gameIndex && s._duidie_view.dayNum >= 2 && g.default.judgeGuangPos(i.selfCard.node.position) && (i.hecheng_class.times *= 3),
                u._poolNodeMager.getPoolNode(d.KEY.poolName.cardJinDu, i.targetCard.node, !0, {
                    hecheng_class: i.hecheng_class,
                    card: i.targetCard,
                    time: r
                },
                function(e) {
                    i.targetCard.cardJinDu = e.getComponent(N.default)
                })
            }
        },
        o = this, i = 0; i < t.length; i++) {
            var n = a(i);
            if ("object" == typeof n) return n.value
        }
    },
    t.prototype.updateUseTimes = function(e) {
        void 0 === e && (e = null);
        var t = !1;
        this.card_class.UseTimes > 0 ? (t = !0, this.card_class.UseTimes -= 1) : 0 == this.card_class.UseTimes && (t = !0),
        console.log("返回的是多少:", t),
        e(this.card_class.UseTimes, t),
        this.card_class.UseTimes <= 0 && this.onClose("回收")
    },
    t.prototype.hecheng_result = function(e) {
        var t = this;
        if (e && this.hechengList_class) {
            if ("406004" == this.hechengList_class.hecheng_class.id) return void g.default.baozha(this.node.position, 200, 80);
            u._poolNodeMager.getPoolNode(d.KEY.poolName.yanwu, s._duidie_view.card_effect, !0, {
                position: this.node.position
            });
            var a = this.hechengList_class.hecheng_class.result;
            this.hechengList_class.targetCard.card_class.cradId,
            this.hechengList_class.selfCard.card_class.cradId,
            this.cardJinDu = null;
            for (var o = !0,
            i = 0; i < c._gameStateData.lantuCardList.length; i++) - 1 == c._userData.lantu_data.indexOf(c._gameStateData.lantuCardList[i]) && (o = !1);
            var n = [y.cardNameOrId["蓝图-大炮"], y.cardNameOrId["蓝图-龙骨"], y.cardNameOrId["蓝图-船帆"], y.cardNameOrId["蓝图-船锚"], y.cardNameOrId["蓝图-甲板"], y.cardNameOrId["蓝图-海盗船"]];
            if (this.hechengList_class.hecheng_class.type == y.hecheng_type.加工) for (i = 0; i < this.cards.length; i++) this.cards[i].is_duidie = !0;
            var r = 0,
            _ = a.length;
            if (o) for (var f in a) if (Object.prototype.hasOwnProperty.call(a, f) && ((O = a[f][0]) == y.cardNameOrId.蓝图 || O == y.cardNameOrId.配方)) {
                var m = parseInt(f);
                a.splice(m, 1)
            }
            for (console.log("钓鱼台咯:", a), _ = a.length, "107004" == this.hechengList_class.hecheng_class.id && (g.default.randomLantu(1, n)[0] || (_ = 4)), i = 0; i < _; i++) r += a[i][2];
            var N = [],
            w = Math.random() * r,
            S = 0;
            for (i = 0; i < _; i++) if (w < (S += a[i][2])) { (N = a[i].slice())[0] != y.cardNameOrId.蓝图 && N[0] != y.cardNameOrId.配方 || (N[0] = g.default.randomLantu()[0], N[0] || 4 != s._duidie_view.gameIndex || (N[0] = y.cardNameOrId.地图));
                break
            }
            var b = [];
            for (var f in c._gameStateData.CardsList) {
                var O;
                Object.prototype.hasOwnProperty.call(c._gameStateData.CardsList, f) && ((O = c._gameStateData.CardsList[f]).Type != y.card_type.ziyuan && O.Type != y.card_type.shiwu || b.push(parseInt(f)))
            }
            if ("900001" == this.hechengList_class.hecheng_class.id || "800001" == this.hechengList_class.hecheng_class.id) {
                var I = h.NumberUtil.getRandomArrayElements(b, 1)[0];
                N[0] = I,
                N[1] = 1,
                "900001" == this.hechengList_class.hecheng_class.id && s._duidie_view.updateChengjiuMap("23")
            }
            if ("800001" == this.hechengList_class.hecheng_class.id && p._EventTargetMager.emit("updateRenWuList", 147), "900005" == this.hechengList_class.hecheng_class.id && s._duidie_view.updateChengjiuMap("27"), N) {
                var C = parseInt(N[0]),
                M = N[1];
                for (C == y.cardNameOrId.婴儿 && (M = g.default.yingerGailV()), i = 0; i < M; i++) {
                    if (I = parseInt(N[0]), console.log("所以到底是什么:", I), -1 != n.indexOf(I) && 3 == s._duidie_view.gameIndex) {
                        if (! (I = g.default.randomLantu(1, n)[0])) {
                            var A = [y.cardNameOrId.宝箱, y.cardNameOrId.矿石, y.cardNameOrId.石头, y.cardNameOrId.浆果, y.cardNameOrId.椰子];
                            I = h.NumberUtil.getRandomArrayElements(A, 1)[0]
                        }
                        p._EventTargetMager.emit("updateRenWuList", 337)
                    }
                    I == y.cardNameOrId.配方 && (I = y.cardNameOrId.地图),
                    this.hechengList_class.targetCard.card_class.cradId != y.cardNameOrId.地下墓穴 && this.hechengList_class.selfCard.card_class.cradId != y.cardNameOrId.地下墓穴 || 1 == this.hechengList_class.targetCard.getComponent("card_60001").is_openJinBei && (I = y.cardNameOrId.金杯, this.hechengList_class.targetCard.getComponent("card_60001").is_openJinBei = !1),
                    this.hechengList_class.selfCard.card_class.cradId == y.cardNameOrId.地下墓穴 && 1 == this.hechengList_class.selfCard.getComponent("card_60001").is_openJinBei && (I = y.cardNameOrId.金杯, this.hechengList_class.selfCard.getComponent("card_60001").is_openJinBei = !1),
                    this.hechengList_class.targetCard.card_class.cradId != y.cardNameOrId.小岛 && this.hechengList_class.selfCard.card_class.cradId != y.cardNameOrId.小岛 || (s._duidie_view.xiaoDaoIndex >= 11 && g.default.getTypeCard(y.card_type.renlei) < 2 && 0 == s._duidie_view.cunminOpen && (s._duidie_view.cunminOpen = !0, I = y.cardNameOrId.漂流者), s._duidie_view.xiaoDaoIndex += 1),
                    this.hechengList_class.targetCard.card_class.cradId != y.cardNameOrId.垃圾堆 && this.hechengList_class.selfCard.card_class.cradId != y.cardNameOrId.垃圾堆 || 4 == s._duidie_view.gameIndex && g.default.getTypeCard(y.card_type.renlei) < 2 && 0 == s._duidie_view.cunminOpen && s._duidie_view.dayNum >= 3 && (s._duidie_view.cunminOpen = !0, I = y.cardNameOrId.婴儿);
                    var E = c._gameStateData.CardsList[I + ""].CardName,
                    j = 0;
                    I == y.cardNameOrId.熟肉 && s._duidie_view.updateChengjiuMap("2"),
                    I == y.cardNameOrId.浆果 && (j = 103, 3 == s._duidie_view.gameIndex && (j = 305)),
                    I == y.cardNameOrId.木头 && (j = 113),
                    I == y.cardNameOrId.水果沙拉 && (j = 121),
                    I == y.cardNameOrId.篝火 && (j = 123, 3 == s._duidie_view.gameIndex && (j = 315)),
                    I == y.cardNameOrId.煎饼 && (j = 125),
                    I == y.cardNameOrId.房子 && (j = 127),
                    I == y.cardNameOrId.婴儿 && (j = 129),
                    I == y.cardNameOrId.村民 && (j = 131),
                    I == y.cardNameOrId.棚子 && (j = 132),
                    I == y.cardNameOrId.采石场 && (j = 133),
                    I == y.cardNameOrId.动物围栏 && (j = 135),
                    I == y.cardNameOrId.金币箱 && (j = 138),
                    I == y.cardNameOrId.矛 && (j = 141),
                    I == y.cardNameOrId.剑 && (j = 142),
                    I == y.cardNameOrId.民兵 && (j = 143),
                    I == y.cardNameOrId.剑士 && (j = 144),
                    I == y.cardNameOrId.煎饼 && (j = 145),
                    I == y.cardNameOrId.狗 && (j = 146),
                    I == y.cardNameOrId.地下墓穴 && (j = 148),
                    I == y.cardNameOrId.金杯 && (j = 149),
                    I == y.cardNameOrId.寺庙 && (j = 150),
                    I == y.cardNameOrId.石斧 && (j = 202),
                    I == y.cardNameOrId.工匠 && (j = 203),
                    I == y.cardNameOrId.科学家 && (j = 204),
                    I == y.cardNameOrId.几何学 && (j = 206),
                    I == y.cardNameOrId.物理学 && (j = 207),
                    I == y.cardNameOrId.化学 && (j = 208),
                    I == y.cardNameOrId.万有引力 && (j = 209),
                    I == y.cardNameOrId.钛合金 && (j = 210),
                    I == y.cardNameOrId.研究所 && (j = 212),
                    I == y.cardNameOrId.炸弹 && (j = 213),
                    I == y.cardNameOrId.燃烧剂 && (j = 214),
                    I == y.cardNameOrId.钻井平台 && (j = 215),
                    I == y.cardNameOrId.火箭 && (j = 216, s._duidie_view.node.getChildByName("huohjiantip" + s._duidie_view.gameIndex).active = !0),
                    I == y.cardNameOrId.湿木头 && (j = 303),
                    I == y.cardNameOrId.椰子 && (j = 306),
                    I == y.cardNameOrId.晾晒架 && (j = 309),
                    I == y.cardNameOrId.干木头 && (j = 311),
                    I == y.cardNameOrId.木棍 && (j = 313),
                    I == y.cardNameOrId.烤肉 && (j = 318),
                    I == y.cardNameOrId.鱼骨 && (j = 319),
                    I == y.cardNameOrId.藤条 && (j = 320),
                    I == y.cardNameOrId.绳子 && (j = 321),
                    I == y.cardNameOrId.鱼竿 && (j = 322),
                    I == y.cardNameOrId.渔夫 && (j = 323),
                    I == y.cardNameOrId.塑料加工厂 && (j = 324),
                    I == y.cardNameOrId.塑料桶 && (j = 325),
                    I == y.cardNameOrId.钓鱼台 && (j = 326),
                    I == y.cardNameOrId.鱼 && (j = 327),
                    I == y.cardNameOrId.烤鱼 && (j = 328),
                    I == y.cardNameOrId.纺织机 && (j = 330),
                    I == y.cardNameOrId.地图 && (j = 331),
                    I == y.cardNameOrId.中型岛屿 && (j = 332),
                    I == y.cardNameOrId.大型岛屿 && (j = 333),
                    I == y.cardNameOrId.海盗基地 && (j = 334),
                    I == y.cardNameOrId.海盗船 && (j = 338, s._duidie_view.node.getChildByName("huohjiantip" + s._duidie_view.gameIndex).active = !0),
                    I == y.cardNameOrId.棚子 && u._poolNodeMager.getPoolNode(d.KEY.poolName.hurt, this.node, !0, {
                        pos: this.node.position,
                        str: "卡牌上限+4"
                    }),
                    I == y.cardNameOrId.仓库 && (u._poolNodeMager.getPoolNode(d.KEY.poolName.hurt, this.node, !0, {
                        pos: this.node.position,
                        str: "卡牌上限+14"
                    }), 3 == s._duidie_view.gameIndex && (j = 329)),
                    I == parseInt(v._game_ui.lantuPeifangID + "") && p._EventTargetMager.emit("updateRenWuList", 120),
                    (y.cardNameOrId["蓝图 - " + E] && y.cardNameOrId["蓝图 - " + E] > 0 || y.cardNameOrId["蓝图-" + E]) && ( - 1 == c._userData.lantu_data.indexOf(y.cardNameOrId["蓝图 - " + E]) && (c._userData.lantu_data.push(y.cardNameOrId["蓝图 - " + E]), c.UserDataManger.preData()), -1 == c._userData.lantu_data.indexOf(y.cardNameOrId["蓝图-" + E]) && 3 == s._duidie_view.gameIndex && (c._userData.lantu_data.push(y.cardNameOrId["蓝图-" + E]), c.UserDataManger.preData())),
                    0 != j && p._EventTargetMager.emit("updateRenWuList", j);
                    var x = h.NumberUtil.randomNum(1, 8);
                    N[0] != y.cardNameOrId.剑士 && N[0] != y.cardNameOrId.民兵 || (x = null),
                    l._audioMager.playAudioEff("diaoluo_0" + h.NumberUtil.randomNum(1, 5)),
                    s._duidie_view.add_card(I, this.node.position, x, 1)
                }
            } else console.log("没拿到结果");
            var P = this.hechengList_class.hecheng_class.del,
            D = this.hechengList_class.cardList,
            F = !0,
            T = function(e) {
                for (var a = P[e], o = parseInt(a[0]), i = a[1], n = 0; n < i; n++) D.forEach(function(e, a) {
                    var i = !0,
                    n = t.hechengList_class.targetCard.card_class.cradId,
                    r = t.hechengList_class.selfCard.card_class.cradId;
                    n == y.cardNameOrId.集市 && r == y.cardNameOrId.集市 && (i = e.id == t.hechengList_class.selfCard.id),
                    e.card_class.cradId == o && i && e.updateUseTimes(function(e, t) {
                        F = t,
                        e <= 0 && t && D.delete(a)
                    })
                })
            };
            for (i = 0; i < P.length; i++) T(i);
            this.hechengList_class.type == y.hecheng_type.加工 ? (this.hechengList_class = null, this.cloneCards = []) : (this.hechengList_class.targetCard.card_class.UseTimes > 0 || F) && this.hecheng(!0),
            this.cardHeChengResult(!0)
        } else this.hechengList_class = null,
        this.cloneCards = [],
        this.cardHeChengResult(!1)
    },
    t.prototype.paichiActionOpen = function(e, t) {
        if (void 0 === t && (t = null), this.paichiSwitch = e, t) for (var a = 0; a < t.length; a++) t[a].paichiActionOpen(!0)
    },
    t.prototype.paichiAction = function(e) {
        if (this.is_touch || !this.is_active) return this.paichiActionOpen(!1);
        for (var t = this.collisionCard,
        a = 0; a < t.length; a++) t[a] && t[a].node && 0 != t[a].node.active || this.collisionCard.splice(a, 1);
        if (this.collisionCard.length > 0) {
            for (a = 0; a < t.length; a++) if (t[a] && t[a].node && !t[a].is_touch && (t[a].paichiActionOpen(!0), !this.updateY)) {
                var o = this.cards[0].node;
                if (o && o.active) {
                    var i = o.getPosition().sub(t[a].node.getPosition()).normalize(),
                    n = this.speed * e,
                    r = i.div(1 / n),
                    c = o.getPosition().add(r); - 1 != s._duidie_view.guangArray.indexOf(this.cards[0].card_class.cradId) && s._duidie_view.mask_graphics(this.guangSize, this.node.position, !0),
                    4 != s._duidie_view.gameIndex || this.cards[0].card_class.cradId != y.cardNameOrId.丧尸 && this.cards[0].card_class.cradId != y.cardNameOrId.狂暴丧尸 && this.cards[0].card_class.cradId != y.cardNameOrId.蜘蛛 && this.cards[0].card_class.cradId != y.cardNameOrId.老鼠 || 0 != g.default.judgeGuangPos(cc.v3(c.x, c.y), this.cards[0]) ? o.setPosition(g.default.updatePos(c, this.node.parent, o, this.cards)) : o.setPosition(g.default.updatePos(o.getPosition(), this.node.parent, o, this.cards));
                    for (var d = 1; d < this.cards.length; d++) this.cards[d] && (this.cards[d].paiqi = !0)
                }
            }
        } else this.paichiActionOpen(!1)
    },
    t.prototype.updateYFun = function(e) {
        if (! ( - 1 != s._duidie_view.piaoLiuArray.indexOf(this.card_class.cradId) || -1 != this.piaoArray.indexOf(this.card_class.cradId) || this.card_class.cradId == y.cardNameOrId.海盗船 && this.kaichuan) && this.cards[0] && this.cards[0].node) {
            var t = this.cards.length,
            a = this.node.parent.height / 2 - this.node.height / 2,
            o = -(this.node.parent.height / 2 - this.node.height / 2 - (t - 1) * this.intervalY),
            i = this.node.parent.width / 2 - this.node.width / 2,
            n = -i,
            r = null;
            if (this.cards[0].node.y > a ? r = cc.v2(this.node.x, a).sub(this.node.getPosition()).normalize() : this.cards[0].node.y < o ? r = cc.v2(this.node.x, o).sub(this.node.getPosition()).normalize() : this.cards[0].node.x < n ? r = cc.v2(n, this.node.y).sub(this.node.getPosition()).normalize() : this.cards[0].node.x > i ? r = cc.v2(i, this.node.y).sub(this.node.getPosition()).normalize() : (this.updateY = !1, this.paichiActionOpen(!0, this.collisionCard)), null != r) {
                var c = 3e3 * e,
                d = r.div(1 / c),
                l = this.node.getPosition().add(d);
                if (this.cards[0].node.setPosition(l), -1 != s._duidie_view.guangArray.indexOf(this.cards[0].card_class.cradId) && s._duidie_view.mask_graphics(this.guangSize, this.node.position, !0), this.cards.length > 1) for (var u = 1; u < this.cards.length; u++) this.cards[u] && (this.cards[u].node.x = this.cards[0].node.x, this.cards[u].node.y = this.cards[0].node.y - u * this.intervalY)
            }
        }
    },
    t.prototype.startAttack = function() {
        this.is_atk = !0,
        this.is_active && this.schedule(this.Attack, this.card_class.AttackCd + .4)
    },
    t.prototype.Attack = function() {
        var e = this;
        if (this.battleTarget[0] && this.battleTarget[0].node && this.battleTarget[0].node.active && 0 == this.battleTarget[0].is_siwang) {
            if (s._duidie_view.gamePause || c._gameStateData.is_pause || s._duidie_view.jiesuan) return;
            var t = this.battleTarget.slice(0, 1)[0],
            a = c._gameStateData.CardsList[this.card_class.cradId + ""].Attack,
            o = h.NumberUtil.randomNum(a[0], a[1]),
            i = 100 * this.card_class.HitRate;
            this.card_class.Type == y.card_type.renlei && g.default.judgeGuangPos(this.node.position) && (i -= Math.floor(i / 2)),
            i <= 0 && (i = 0);
            var n = h.NumberUtil.randomNum(1, 100);
            o = n < i ? o: 0;
            var r = t.node.position,
            d = this.node.position;
            this.is_enable = !1,
            this.card_icon.angle = 0,
            this.node.angle = 0,
            this.node.stopAllActions(),
            this.node.runAction(cc.sequence(cc.moveTo(.1, r.x, r.y), cc.callFunc(function() {
                l._audioMager.playAudioEff("gongji"),
                s._duidie_view.node.setPosition(0, 0),
                s._duidie_view.node.stopAllActions();
                var e = cc.repeat(cc.sequence(cc.moveBy(.02, cc.v2(4, 4)), cc.moveBy(.04, cc.v2( - 8, -8)), cc.moveBy(.02, cc.v2(4, 4)), cc.callFunc(function() {
                    s._duidie_view.node.setPosition(0, 0)
                })), 2);
                s._duidie_view.node.runAction(e)
            }), cc.callFunc(function() {
                t.node && t.node.active && 0 == t.is_siwang && t.hit(o, e,
                function(a) {
                    if (a <= 0 && (console.log("轮到我打你了吗", e.card_class.Type), e.card_class.Type == y.card_type.guaiwu && p._EventTargetMager.emit("updateMoveTarget"), e.battleTarget.splice(0, 1), e.card_class.Type == y.card_type.renlei && t.card_class.Type == y.card_type.guaiwu && 1 == e.card_class.Life && s._duidie_view.updateChengjiuMap("30")), e.battleTarget.length <= 0) e.stopBattle();
                    else {
                        var o = 0;
                        0 == t.is_atk && (o = .3),
                        0 == t.is_atk && e.scheduleOnce(function() {
                            t.startAttack()
                        },
                        o)
                    }
                })
            }), cc.moveTo(.1, d.x, d.y), cc.callFunc(function() {
                e.is_enable = !0,
                e.paichiActionOpen(!0)
            })))
        } else this.stopBattle()
    },
    t.prototype.stopAttack = function() {
        this.is_atk && (this.is_atk = !1, this.is_enable = !0, this.unschedule(this.Attack))
    },
    t.prototype.hit = function(e, t, a) {
        e > 0 && (this.card_class.Type == y.card_type.renlei || this.card_class.Type == y.card_type.guaiwu ? this.updateDataAttr("Life", -e) : this.card_class.Type == y.card_type.shiwu && this.updateDataAttr("Satiety", -1)),
        this.node.angle = 0,
        this.node.stopAllActions();
        var o = this.node.getChildByName("effect");
        o.active = !0,
        this.scheduleOnce(function() {
            o.active = !1
        },
        .1);
        var i = cc.repeat(cc.sequence(cc.rotateTo(.03, -8), cc.rotateTo(.03, 0), cc.rotateTo(.03, 8), cc.rotateTo(.03, 0)), 2);
        if (this.node.runAction(i), u._poolNodeMager.getPoolNode(d.KEY.poolName.hurt, this.node, !0, {
            pos: this.node.position,
            hurt: e
        }), this.card_class.cradId != y.cardNameOrId.尸体) {
            if (this.card_class.Life <= 0) {
                if (this.card_class.cradId == y.cardNameOrId.史莱姆) for (var n = 0; n < 3; n++) s._duidie_view.add_card(y.cardNameOrId.小史莱姆, this.node.position, h.NumberUtil.randomNum(1, 8));
                if (g.default.guaiwuBao(this), this.card_class.Type == y.card_type.renlei && s._duidie_view.updateChengjiuMap("25"), (t.card_class.cradId == y.cardNameOrId.病毒 || t.card_class.cradId == y.cardNameOrId.丧尸 && 4 != s._duidie_view.gameIndex || t.card_class.cradId == y.cardNameOrId.生化病毒) && this.card_class.Type == y.card_type.renlei) return s._duidie_view.add_card(y.cardNameOrId.丧尸, t.node.position, null),
                void this.onClose("毒死");
                this.onClose(1)
            }
            a && a(this.card_class.Life)
        }
    },
    t.prototype.baozha = function() {
        this.onClose("炸死")
    },
    t.prototype.update = function(e) {
        this.paichiSwitch && this.is_active && this.paichiAction(e),
        this.updateY && this.is_active && 3 != s._duidie_view.gameIndex && this.updateYFun(e),
        this.is_active && 0 == this.is_touch && 3 == s._duidie_view.gameIndex && this.updateYFun(e),
        this.paiqi && this.is_active && this.cards[0].node && (this.node.x = this.cards[0].node.x, this.node.y = this.cards[0].node.y - this.card_index * this.intervalY, Math.floor(this.cards[0].node.x) == Math.floor(this.node.x) && Math.floor(this.cards[0].node.y - this.card_index * this.intervalY) == Math.floor(this.node.y) && (this.paiqi = !1))
    },
    a = n([b], t)
} (f.LQCollide));
a.default = O