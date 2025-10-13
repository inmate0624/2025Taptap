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
a._duidie_view = void 0;
var r = e("classManger"),
c = e("game_ui"),
s = e("gameDataManager"),
d = e("poolNodeMager"),
l = e("audioMager"),
u = e("winNodeMager"),
p = e("commonFunction"),
h = e("KEY"),
_ = e("winRootNode"),
f = e("NumberUtil"),
g = e("mainScene"),
m = e("EventTargetMager"),
y = e("enum_type"),
v = e("cardUtil"),
N = e("platfrom_fun"),
w = e("card"),
S = e("AndroidApi"),
b = e("getDataFromServer"),
O = e("shop"),
I = cc._decorator,
C = I.ccclass,
M = I.property;
a._duidie_view = null;
var A = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.card_parent = null,
        t.card_effect = null,
        t.shop_parent = null,
        t.bg = null,
        t.camera = null,
        t.mask = null,
        t.ScrollView = null,
        t.content = null,
        t.bg2 = null,
        t.bg3 = null,
        t.mask2 = null,
        t.cradId = 10001,
        t.id = 0,
        t.is_all_fuhuo = 0,
        t.dayNum = 1,
        t.daySecond = 120,
        t.time = 120,
        t.gold_num = 0,
        t.maxFood_num = 0,
        t.haveFood_num = 0,
        t.maxCardNum = 20,
        t.cardNum = 0,
        t.gamePause = !1,
        t.cunminOpen = !1,
        t.cardItemNum = 0,
        t.is_openJinBei = !1,
        t.battleId = 0,
        t.rukou_index = 1,
        t.jiesuan = !1,
        t.renEatFoodIndex = 0,
        t.renNodes = [],
        t.is_chushou = !1,
        t.fun = null,
        t.is_btn = !1,
        t.cardList = [],
        t.cardItemList = [],
        t.TaskList = new Map,
        t.gameIndex = 0,
        t.renwu_index = 0,
        t.renwuId = null,
        t.renwu_class = null,
        t.chengjiuMap = null,
        t.baozhaCardList = new Map,
        t.baozhaCardItemList = new Map,
        t.is_wanhui = !1,
        t.game_over = !1,
        t.siwang_num = 0,
        t.maxRennum = 0,
        t.Rennum = 0,
        t.rankData = [],
        t.xiaoDaoIndex = 0,
        t.levelGameTime = 0,
        t.touch_id = 0,
        t.startGame = !1,
        t.piaoliuNum = 0,
        t.guangArray = [y.cardNameOrId.探照者, y.cardNameOrId.萤火虫群, y.cardNameOrId.萤火虫灯, y.cardNameOrId.灯泡, y.cardNameOrId.无限灯塔, y.cardNameOrId.燃油灯, y.cardNameOrId.火把, y.cardNameOrId.篝火, y.cardNameOrId.火坑],
        t.piaoLiuArray = [y.cardNameOrId.海洋垃圾, y.cardNameOrId.漂流木, y.cardNameOrId.漂流瓶, y.cardNameOrId.木桶, y.cardNameOrId.漂浮海藻, y.cardNameOrId.小岛],
        t.kaichuan = !1,
        t.guaiwuNum = 0,
        t.timeOpen = !1,
        t._finish = !1,
        t.tempDrawPoints = [],
        t.maskOpen = !1,
        t.calcDebugger = !1,
        t.polygonPointsList = [],
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function(e) {
        var t = this;
        if (this.reset(), this.ScrollView.enabled = !1, s._gameStateData.is_pause = !1, this.game_over = !1, this.gamePause = !1, a._duidie_view = this, N.default.getInstance().stopCreateVideo(), N.default.getInstance().startCreateVideo(), this.scheduleOnce(function() {
            N.default.getInstance().stopCreateVideo()
        },
        20), (e.gameIndex || 0 == e.gameIndex) && (this.gameIndex = e.gameIndex), this.init_data(e._duidie_view_class), this.chengjiuMap = new Map, v.default.parent = this.card_parent, e.gameIndex || 0 == e.gameIndex) {
            this.gameIndex = e.gameIndex,
            2 == this.gameIndex && (c._game_ui.renwu_tips.node.parent.active = !1, this.getRankData()),
            this.bg2.active = !1,
            this.bg.active = !0;
            var o = this.node.getChildByName("cardItem");
            if (o.children[0].getComponent(O.default).updateSprite(), this.card_parent.y = -60, this.gameIndex >= 3) {
                3 == this.gameIndex ? (l._audioMager.stopBGM(), l._audioMager.playBGM("bgm3"), this.bg2.active = !0, this.bg2.width = 1.5 * cc.winSize.width, this.bg2.height = 2 * cc.winSize.height) : (this.bg3.active = !0, this.bg3.width = 1.5 * cc.winSize.width, this.bg3.height = 2 * cc.winSize.height),
                this.ScrollView.enabled = !0,
                this.bg.active = !1,
                this.content.getComponent(cc.Widget).enabled = !1,
                this.card_parent.getComponent(cc.Widget).enabled = !1,
                this.card_effect.getComponent(cc.Widget).enabled = !1,
                this.content.width = 1.5 * cc.winSize.width,
                this.content.height = 2 * cc.winSize.height,
                this.card_parent.y = 0,
                this.card_parent.width = 1.5 * cc.winSize.width,
                this.card_parent.height = 2 * cc.winSize.height,
                this.card_effect.y = 0,
                this.card_effect.width = 1.5 * cc.winSize.width,
                this.card_effect.height = 2 * cc.winSize.height;
                for (var i = 1; i < this.shop_parent.childrenCount; i++) this.shop_parent.children[i].active = !1;
                o.children[0].getComponent(O.default).updateSprite("chushoukapian3")
            } else this.piaoLiuArray = [];
            if (this.mask2.node.active = !1, 4 == this.gameIndex && (l._audioMager.stopBGM(), l._audioMager.playBGM("bgm4"), (!window.tt || window.tt && !tt.env.VERSION) && (this.mask2.node.active = !0), this.dayNum >= 2 && (this.mask2.node.active = !0), c._game_ui.renwu_lingqu.node.parent.y = 270), !e._duidie_view_class && (2 == this.gameIndex || 3 == this.gameIndex || 4 == this.gameIndex)) {
                this.shop_parent.active = !1,
                c._game_ui.node.active = !1,
                c._game_ui.renwu_tips.node.parent.active = !1;
                var n = 10;
                window.tt || (n = 1),
                this.node.getChildByName("tip" + this.gameIndex).active = !0,
                3 == this.gameIndex && this.node.getChildByName("tip" + this.gameIndex).getChildByName("shouzhi").runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, 200, 0), cc.moveBy(1, -200, 0)))),
                this.schedule(function() {
                    n -= 1,
                    t.node.getChildByName("tip" + t.gameIndex).getChildByName("time").getComponent(cc.Label).string = "(" + n + "秒)",
                    0 == n && (t.add_cardItem(8, cc.v3(0, 0)), c._game_ui.node.active = !0, t.shop_parent.active = !0, t.node.getChildByName("tip" + t.gameIndex).active = !1, c._game_ui.renwu_tips.node.parent.active = !0, t.gameIndex >= 3 && o.children[0].getComponent(O.default).updateSprite("chushoukapian3"))
                },
                1, n)
            }
            window.tt && N.default.getInstance().add_reportAnalytics("event_Level" + (this.gameIndex + 1) + "StartCount"),
            2 == a._duidie_view.gameIndex && (c._game_ui.node.getChildByName("right").getChildByName("on_rank").active = !0)
        }
        cc.sys.isNative && "233" == S.default.get().sendJavaGetChannel() && this.schedule(function() {
            N.default.getInstance().showInterstitalAd(!0)
        },
        S.default.get().gameChaPingInterval_233),
        this.start_gameTiming()
    },
    t.prototype.onClose = function(e) {
        this.game_over = !0,
        this.gameIndex >= 3 && (l._audioMager.stopAllAudioEff("huadonshuihua"), l._audioMager.stopBGM(), l._audioMager.playBGM(h.KEY.audioName.bgm)),
        this.stop_gameTiming(),
        this.cardNum > 0 && this.preData(),
        "清空" == e && (s._userData.gameCun[this.gameIndex] = null, s.UserDataManger.preData()),
        c._game_ui.onClose(1),
        this.node_off(),
        this.unscheduleAllCallbacks(),
        s._gameStateData.selectCardLists = [],
        u._winNodeMager.hideWinNode(this.node.name),
        g._mainScene.update_ui_active(!0)
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.touchScrollView = function() {
        this.bg2.position = this.content.position,
        this.bg3.position = this.content.position
    },
    t.prototype.start_gameTiming = function() {
        this.levelGameTime = 0,
        this.schedule(this.gameTiming, 1)
    },
    t.prototype.gameTiming = function() {
        this.levelGameTime += 1
    },
    t.prototype.stop_gameTiming = function() {
        this.unschedule(this.gameTiming),
        window.tt && N.default.getInstance().add_reportAnalytics("event_Level" + (this.gameIndex + 1) + "Time", "time", this.levelGameTime)
    },
    t.prototype.updateChengjiuMap = function(e) {
        var t = 1;
        this.chengjiuMap && this.chengjiuMap.size > 0 && this.chengjiuMap.has(e) && (t = this.chengjiuMap.get(e) + 1),
        this.chengjiuMap.set(e, t);
        var a = 1;
        switch (e) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "11":
            case "12":
            case "13":
            case "14":
            case "17":
            case "24":
            case "27":
                a = 100;
            break;
            case "10":
                a = 1e4;
            break;
            case "15":
            case "26":
                a = 1;
            break;
            case "16":
            case "20":
            case "23":
                a = 20;
            break;
            case "18":
            case "25":
                a = 50;
            break;
            case "19":
                a = 30;
            break;
            case "21":
            case "22":
            case "28":
            case "29":
                a = 10;
        }
        if (t >= a && -1 == s._userData.chengjiuList.indexOf(e)) {
            s._userData.chengjiuList.push(e);
            var o = s._gameStateData.Achievement[e].Title;
            o = o.substring(3),
            d._poolNodeMager.getPoolNode(h.KEY.poolName.tipNode3, null, !0, {
                str: o
            })
        }
        s.UserDataManger.preData()
    },
    t.prototype.onLoad = function() {
        a._duidie_view = this,
        this.node_on()
    },
    t.prototype.node_on = function() {
        m._EventTargetMager.on("add_cardItem", this.add_cardItem, this),
        m._EventTargetMager.on("add_card", this.add_card, this),
        m._EventTargetMager.on("del_card", this.del_cardCount, this),
        m._EventTargetMager.on("gamePauseFun", this.gamePauseFun, this),
        m._EventTargetMager.on("startSchedule", this.startSchedule, this),
        m._EventTargetMager.on("stopSchedule", this.stopSchedule, this)
    },
    t.prototype.node_off = function() {
        m._EventTargetMager.off("add_cardItem", this.add_cardItem, this),
        m._EventTargetMager.off("add_card", this.add_card, this),
        m._EventTargetMager.off("del_card", this.del_cardCount, this),
        m._EventTargetMager.off("gamePauseFun", this.gamePauseFun, this),
        m._EventTargetMager.off("startSchedule", this.startSchedule, this),
        m._EventTargetMager.off("stopSchedule", this.stopSchedule, this)
    },
    t.prototype.gamePauseFun = function(e) {
        this.gamePause = e,
        0 == e && console.log("啥时候进来的"),
        e ? (s._gameStateData.is_pause = !0, m._EventTargetMager.emit("stopSchedule"), m._EventTargetMager.emit("stoppiaoLiuMove")) : this.startGame && (s._gameStateData.is_pause = !1, m._EventTargetMager.emit("startSchedule"), m._EventTargetMager.emit("startpiaoLiuMove")),
        m._EventTargetMager.emit("cardGamePauseFun", e)
    },
    t.prototype.init_data = function(e) {
        var t = this;
        if (void 0 === e && (e = null), this.daySecond = s._gameStateData.daySecond, c._game_ui.jindutiao_vector = 1 / (10 * s._gameStateData.daySecond), e) {
            for (var a in e.TaskList.size > 0 && e.TaskList.forEach(function(e, t) {
                s._gameStateData.TaskList.set(t, e)
            }), e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                var o = e[a];
                this[a] = o
            }
            c._game_ui.renwu_index = this.renwu_index,
            c._game_ui.renwu_class = this.renwu_class,
            c._game_ui.renwuId = this.renwuId,
            this.gamePause = !1,
            s._gameStateData.TaskList.set(this.renwuId, this.renwu_class),
            this.startGame = !0;
            for (var i = function(e) {
                var a = n.cardList[e],
                o = {
                    cradId: a.card_class.cradId,
                    id: n.id,
                    crad_fly_id: null,
                    position: cc.v3(a.positionX, a.positionY),
                    card_attr_class: a,
                    callBack: function() {
                        t.mask.active = !0,
                        e == t.cardList.length - 1 && t.scheduleOnce(function() {
                            m._EventTargetMager.emit("updateCardIdList"),
                            t.scheduleOnce(function() {
                                t.mask.active = !1
                            },
                            .5)
                        },
                        .5)
                    }
                };
                d._poolNodeMager.getPoolNode(h.KEY.poolName.card, n.card_parent, !0, o)
            },
            n = this, r = 0; r < this.cardList.length; r++) i(r);
            if (this.cardItemList.length > 0) for (r = 0; r < this.cardItemList.length; r++) {
                var l = this.cardItemList[r];
                this.add_cardItem(l[3], cc.v3(l[1], l[2]), !1, null, l[0])
            }
            c._game_ui.init_uiData(),
            this.mask.active = !0,
            this.scheduleOnce(function() {
                t.mask.active = !1,
                t.startSchedule()
            },
            1)
        } else s._gameStateData.TaskList.forEach(function(e) {
            e.is_result = !1
        }),
        this.time = 10 * this.daySecond,
        this.gameIndex < 2 && this.add_cardItem(8, cc.v3(0, 0));
        for (r = 0; r < s._gameStateData.selectCardLists.length; r++) {
            var u = s._gameStateData.selectCardLists[r];
            this.add_card(u, cc.v3(0, 0), f.NumberUtil.randomNum(1, 8))
        }
        var _ = this.node.getChildByName("cardItem");
        for (r = 1; r < _.children.length; r++) {
            var g = s._gameStateData.CardAttri[r - 1 + ""].CardName;
            p.commonTool.updateSprite("shopcard/" + g, _.children[r])
        }
    },
    t.prototype.on_return = function() {
        var e = this;
        this.disableClick(),
        l._audioMager.playAudioEff(h.KEY.audioName.btn),
        this.gamePauseFun(!0),
        d._poolNodeMager.getPoolNode(h.KEY.poolName.gamePause_panel, null, !0, {
            callBack: function() {
                e.onClose(1)
            }
        })
    },
    t.prototype.TOUCH_START = function() {},
    t.prototype.TOUCH_MOVE = function(e) {
        var t = e.getTouches();
        if (2 == t.length) {
            var a = t[0],
            o = t[1],
            i = a.getDelta(),
            n = o.getDelta(),
            r = this.node.parent.convertToNodeSpaceAR(a.getLocation()),
            c = this.node.parent.convertToNodeSpaceAR(o.getLocation()),
            s = r.sub(c),
            d = i.sub(n),
            l = 1;
            l = Math.abs(s.x) > Math.abs(s.y) ? (s.x + d.x) / s.x * this.camera.getComponent(cc.Camera).zoomRatio: (s.y + d.y) / s.y * this.camera.getComponent(cc.Camera).zoomRatio,
            (l = Math.abs(s.x) > Math.abs(s.y) ? (s.x + d.x) / s.x * this.card_parent.scale: (s.y + d.y) / s.y * this.card_parent.scale) >= 1.3 && (l = 1.3),
            this.card_parent.scale = l <= 1 ? 1 : l
        }
    },
    t.prototype.on_kabao = function(e, t) {
        var a = this,
        o = e.target;
        if (this.disableClick(), l._audioMager.playAudioEff(h.KEY.audioName.btn), o.scale = 1.1, this.scheduleOnce(function() {
            o.scale = 1
        },
        .1), !this.jiesuan && !this.is_btn) {
            m._EventTargetMager.emit("clear_cardItem", 0),
            this.is_btn = !0;
            var i = parseInt(t),
            n = s._gameStateData.CardAttri[i + ""].Price;
            console.log("要多少钱", n);
            for (var r = 0,
            c = 0,
            d = [], u = [], p = o.parent.convertToWorldSpaceAR(o.position), _ = this.card_parent.convertToNodeSpaceAR(p), f = 0; f < this.card_parent.childrenCount; f++) {
                var g = this.card_parent.children[f].getComponent(w.default).card_class,
                v = g.cradId;
                v != y.cardNameOrId.金币 && v != y.cardNameOrId.金币箱 || (v == y.cardNameOrId.金币 ? (d.push(this.card_parent.children[f]), r += 1) : (c += g.Price, u.push(this.card_parent.children[f])))
            }
            if (r + c >= n ? (this.is_btn = !0, 0 == i && m._EventTargetMager.emit("updateRenWuList", 104)) : this.is_btn = !1, r >= n) {
                var N = 0;
                for (f = 0; f < d.length - 1; f++) for (var S = 0; S < d.length - 1 - f; S++) if (d[S].getComponent(w.default).card_index < d[S + 1].getComponent(w.default).card_index) {
                    var b = d[S];
                    d[S] = d[S + 1],
                    d[S + 1] = b
                }
                for (d.splice(n), f = 0; f < d.length; f++) if ((j = d[f].getComponent(w.default)).is_enable = !1, j.cards.length > 1) {
                    j.cards.splice(j.card_index, 1);
                    for (var O = 0; O < j.cards.length; O++) j.cards[O].cards = j.cards.slice(),
                    j.cards[O].card_index = O,
                    j.cards[O].updateCard(j.cards.slice(), O)
                }
                var I = 1 / d.length,
                C = function(e) {
                    M.scheduleOnce(function() {
                        var i = d[e];
                        N += i.getComponent(w.default).card_class.Price,
                        i.getComponent(w.default).goldMoveAction(_, N,
                        function(e) {
                            if (e >= n && a.is_btn) return a.scheduleOnce(function() {
                                a.is_btn = !1
                            },
                            1),
                            void a.add_cardItem(parseInt(t), o.position, !0)
                        })
                    },
                    I * e)
                },
                M = this;
                for (f = 0; f < d.length; f++) C(f)
            } else if (r + c >= n) {
                var A = d.length,
                E = 0;
                for (I = 0, d.length > 0 && (I = 1 / d.length), f = 0; f < d.length; f++) {
                    var j;
                    if ((j = d[f].getComponent(w.default)).is_enable = !1, j.cards.length > 1) {
                        j.cards.splice(j.card_index, 1);
                        for (var x = 0; x < j.cards.length; x++) j.cards[x].cards = j.cards.slice(),
                        j.cards[x].card_index = x,
                        j.cards[x].updateCard(j.cards.slice(), x)
                    }
                }
                var P = function(e) {
                    D.scheduleOnce(function() {
                        d[e].getComponent(w.default).goldMoveAction(_, A, null)
                    },
                    I * e)
                },
                D = this;
                for (f = 0; f < d.length; f++) P(f);
                for (f = 0; f < u.length - 1; f++) for (S = 0; S < u.length - 1 - f; S++) if (u[S].getComponent(w.default).card_class.Price > u[S + 1].getComponent(w.default).card_class.Price) {
                    var F = u[S];
                    u[S] = u[S + 1],
                    u[S + 1] = F
                }
                this.scheduleOnce(function() {
                    E = n - A;
                    for (var e = function(e) {
                        var o, i = u[e].getComponent(w.default).card_class.Price;
                        if (o = i - E >= 0 ? E: i, E > 0) {
                            u[e].getComponent(w.default).updateDataAttr("Price", -1 * o),
                            E -= o;
                            for (var n = 1 / o,
                            r = function(i) {
                                a.scheduleOnce(function() {
                                    a.add_card(y.cardNameOrId.金币, u[e].position, null, 1,
                                    function(e) {
                                        e.getComponent(w.default).goldMoveAction(_, E,
                                        function(n) {
                                            if (n <= 0 && a.is_btn && i == o - 1) return a.is_btn = !1,
                                            void a.add_cardItem(parseInt(t), e.position, !0)
                                        })
                                    })
                                },
                                n * i)
                            },
                            c = 0; c < o; c++) r(c)
                        }
                    },
                    o = 0; o < u.length; o++) e(o)
                },
                I)
            }
        }
    },
    t.prototype.startSchedule = function() {
        this.timeOpen = !0,
        c._game_ui.update_datTime(this.time)
    },
    t.prototype.updateTime = function() {
        this.time -= 1,
        c._game_ui.update_datTime(this.time),
        this.time <= 0 && (this.stopSchedule(), this.day_jiesuan())
    },
    t.prototype.stopSchedule = function() {
        this.timeOpen = !1,
        c._game_ui.jinduAction && c._game_ui.jinduAction.stop()
    },
    t.prototype.add_card = function(e, t, a, o, i) {
        var n = this;
        if (void 0 === e && (e = 0), void 0 === a && (a = null), void 0 === o && (o = 1), void 0 === i && (i = null), -1 == this.piaoLiuArray.indexOf(e) && l._audioMager.playAudioEff("diaoluo_0" + f.NumberUtil.randomNum(1, 5)), this.id += 1, 1 == o) {
            var r = {
                cradId: e,
                id: this.id,
                crad_fly_id: a,
                position: t
            };
            d._poolNodeMager.getPoolNode(h.KEY.poolName.card, this.card_parent, !0, r, i)
        } else d._poolNodeMager.getCountPoolNode(h.KEY.poolName.card, o,
        function(o) {
            for (var i = 0; i < o.length; i++) {
                o[i].parent = n.card_parent;
                var r = {
                    cradId: e,
                    id: n.id,
                    crad_fly_id: a,
                    position: t,
                    cards: o.slice(),
                    card_index: i
                };
                o[i].getComponent(w.default).onOpen(r)
            }
        })
    },
    t.prototype.add_cardItem = function(e, t, a, o, i) {
        void 0 === a && (a = !1),
        void 0 === o && (o = []),
        void 0 === i && (i = 0),
        this.id += 1;
        var n = this.id;
        i > 0 && (n = i),
        d._poolNodeMager.getPoolNode(h.KEY.poolName.cardItem, this.card_parent, !0, {
            cardItemId: e,
            id: n,
            is_move: a,
            position: t,
            result: o
        })
    },
    t.prototype.add_cardMaxCount = function(e) {
        e = Math.abs(e),
        this.maxCardNum += e,
        this.maxCardNum < 0 && (this.maxCardNum = 0),
        m._EventTargetMager.emit("init_uiData")
    },
    t.prototype.del_cardMaxCount = function(e) {
        e = Math.abs(e),
        this.maxCardNum -= e,
        this.maxCardNum < 0 && (this.maxCardNum = 0),
        m._EventTargetMager.emit("init_uiData")
    },
    t.prototype.add_cardCount = function() {
        this.cardNum += 1,
        m._EventTargetMager.emit("init_uiData")
    },
    t.prototype.del_cardCount = function() {
        this.cardNum -= 1,
        m._EventTargetMager.emit("init_uiData")
    },
    t.prototype.add_gold = function(e) {
        void 0 === e && (e = 1),
        e = Math.abs(e),
        this.gold_num += e,
        this.gold_num < 0 && (this.gold_num = 0),
        m._EventTargetMager.emit("init_uiData")
    },
    t.prototype.del_gold = function(e) {
        void 0 === e && (e = 1),
        e = Math.abs(e),
        this.gold_num -= e,
        this.gold_num < 0 && (this.gold_num = 0),
        m._EventTargetMager.emit("init_uiData")
    },
    t.prototype.add_maxFood_num = function(e) {
        void 0 === e && (e = 2),
        e = Math.abs(e),
        this.maxFood_num += e,
        this.maxFood_num < 0 && (this.maxFood_num = 0),
        m._EventTargetMager.emit("init_uiData")
    },
    t.prototype.del_maxFood_num = function(e) {
        void 0 === e && (e = 2),
        e = Math.abs(e),
        this.maxFood_num -= e,
        this.maxFood_num < 0 && (this.maxFood_num = 0),
        m._EventTargetMager.emit("init_uiData")
    },
    t.prototype.add_haveFood_num = function(e) {
        void 0 === e && (e = 1),
        e = Math.abs(e),
        this.haveFood_num += e,
        this.haveFood_num < 0 && (this.haveFood_num = 0),
        m._EventTargetMager.emit("init_uiData")
    },
    t.prototype.del_haveFood_num = function(e) {
        void 0 === e && (e = 1),
        e = Math.abs(e),
        this.haveFood_num -= e,
        this.haveFood_num < 0 && (this.haveFood_num = 0),
        m._EventTargetMager.emit("init_uiData")
    },
    t.prototype.sellCard = function(e) {
        for (var t = 0; t < e; t++) this.add_card(y.cardNameOrId.金币, this.shop_parent.children[0].position, 9);
        console.log("执行了几次"),
        this.cardNum <= this.maxCardNum ? (this.is_chushou && (this.is_chushou = !1, this.xiayitian()), c._game_ui.showCardExcess_tipsTpis(this.is_chushou), m._EventTargetMager.emit("update_is_zuhe", !0)) : this.is_chushou && c._game_ui.showCardExcess_tipsTpis(this.is_chushou)
    },
    t.prototype.day_jiesuan = function() {
        var e = this;
        if (!this.jiesuan) {
            this.preData(),
            this.jiesuan = !0,
            this.mask.active = !0,
            l._audioMager.playAudioEff("lingsheng"),
            m._EventTargetMager.emit("gamePauseFun", !0),
            d._poolNodeMager.getPoolNode(h.KEY.poolName.day_result_panel, null, !0, {
                callBack: function() {
                    e.renNodes = [],
                    e.renEatFoodIndex = 0;
                    for (var t = e.card_parent.height / 2 - 66,
                    a = -t,
                    o = e.card_parent.width / 2 - 54,
                    i = -o,
                    n = 0; n < e.card_parent.childrenCount; n++) {
                        var r = e.card_parent.children[n],
                        c = r.getComponent(w.default);
                        c.card_class.Type != y.card_type.renlei || c.is_siwang || c.card_class.cradId == y.cardNameOrId.尸体 || (c.DemandSatiety = c.card_class.DemandSatiety, e.renNodes.push(r)),
                        (r.x < i || r.x > o || r.y < a || r.y > t) && -1 == e.piaoLiuArray.indexOf(c.card_class.cradId) && c.card_class.cradId != y.cardNameOrId.中型岛屿 && c.card_class.cradId != y.cardNameOrId.大型岛屿 && c.card_class.cradId != y.cardNameOrId.海盗基地 && c.card_class.cradId != y.cardNameOrId.暗流 && r.setPosition(cc.v3(0, 0))
                    }
                    e.scheduleOnce(function() {
                        e.eatFood()
                    },
                    .5)
                }
            });
            for (var t = 0; t < this.card_parent.childrenCount; t++) {
                var a = this.card_parent.children[t].getComponent(w.default);
                a.card_class.cradId != y.cardNameOrId.旅行马车 && a.card_class.cradId != y.cardNameOrId.流浪商人 || (l._audioMager.playAudioEff("tishi"), a.onClose(1))
            }
        }
    },
    t.prototype.getFood = function() {
        for (var e = [], t = [], a = [], o = 0; o < this.card_parent.childrenCount; o++) {
            var i = (d = this.card_parent.children[o].getComponent(w.default)).card_class; - 1 != s._gameStateData.foodNameArray.indexOf(i.CardName) && (0 == d.is_duidie ? a.push(this.card_parent.children[o]) : t.push(this.card_parent.children[o]))
        }
        var n = [],
        r = [];
        for (o = 0; o < s._gameStateData.foodNameArray.length; o++) for (var c = 0; c < t.length; c++) {
            var d = t[c].getComponent(w.default);
            if (s._gameStateData.foodNameArray[o] == d.card_class.CardName) {
                for (var l = !1,
                u = 0; u < n.length; u++) if (n[u].getComponent(w.default).id == d.id) {
                    l = !0;
                    break
                }
                0 == l && n.push(d.node)
            }
        }
        for (o = 0; o < s._gameStateData.foodNameArray.length; o++) for (c = 0; c < a.length; c++) if (d = a[c].getComponent(w.default), s._gameStateData.foodNameArray[o] == d.card_class.CardName) {
            for (l = !1, u = 0; u < r.length; u++) if (r[u].getComponent(w.default).id == d.id) {
                l = !0;
                break
            }
            0 == l && r.push(d.node)
        }
        for (o = 0; o < n.length; o++) e.push(n[o]);
        for (o = 0; o < r.length; o++) e.push(r[o]);
        return e
    },
    t.prototype.eatFood = function() {
        var e = this;
        if (this.renEatFoodIndex >= this.renNodes.length) this.cardNum > this.maxCardNum ? this.card_chaochu() : this.xiayitian();
        else {
            var t = this.renNodes[this.renEatFoodIndex],
            a = t.getComponent(w.default).DemandSatiety,
            o = this.getFood();
            if (o.length > 0) {
                var i = o[0].getComponent(w.default),
                n = i.card_class.Satiety;
                t.getComponent(w.default).DemandSatiety -= n,
                i.foodMoveAction(t.position, a,
                function(t) {
                    t < 0 ? (e.renEatFoodIndex += 1, e.eatFood()) : 0 == t ? (e.renEatFoodIndex += 1, e.eatFood()) : e.eatFood()
                },
                t)
            } else {
                for (var r = this.renEatFoodIndex; r < this.renNodes.length; r++) this.renNodes[r].getComponent(w.default).onClose("饿死");
                this.renEatFoodIndex <= 0 ? d._poolNodeMager.getPoolNode(h.KEY.poolName.fuhuo_all_panel, null, !0, {
                    callBack: function(t) {
                        1 == t ? (console.log("饿死所有", t), m._EventTargetMager.emit("renlei_fuhuo"), e.cardNum > e.maxCardNum ? e.card_chaochu() : e.xiayitian()) : e.onClose(1)
                    }
                }) : d._poolNodeMager.getPoolNode(h.KEY.poolName.fuhuo_panel, null, !0, {
                    callBack: function(t) {
                        1 == t ? (m._EventTargetMager.emit("renlei_fuhuo"), e.cardNum > e.maxCardNum ? e.card_chaochu() : e.xiayitian()) : e.cardNum > e.maxCardNum ? e.card_chaochu() : e.xiayitian()
                    }
                })
            }
        }
    },
    t.prototype.card_chaochu = function() {
        var e = this;
        this.mask.active = !1,
        this.is_chushou = !0,
        d._poolNodeMager.getPoolNode(h.KEY.poolName.cardExcess_panel, null, !0, {
            callBack: function(t) {
                t ? (e.is_chushou = !1, c._game_ui.showCardExcess_tipsTpis(e.is_chushou), e.xiayitian()) : c._game_ui.showCardExcess_tipsTpis(e.is_chushou)
            }
        })
    },
    t.prototype.xiayitian = function() {
        var e = this;
        l._audioMager.playAudioEff("lingsheng"),
        this.siwang_num = 0,
        d._poolNodeMager.getPoolNode(h.KEY.poolName.day_start_panel, null, !0, {
            callBack: function() {
                e.mask.active = !1,
                e.dayNum += 1,
                m._EventTargetMager.emit("updateRenWuList", 110),
                e.dayNum >= 5 && m._EventTargetMager.emit("updateRenWuList", 126),
                e.dayNum >= 100 && a._duidie_view.updateChengjiuMap("11"),
                e.daySecond = s._gameStateData.daySecond,
                e.time = 10 * e.daySecond,
                c._game_ui.clear_jindutiao(),
                m._EventTargetMager.emit("init_uiData"),
                m._EventTargetMager.emit("gamePauseFun", !1),
                e.baocun(),
                e.shijian(),
                e.jiesuan = !1,
                e.updateDayData()
            }
        })
    },
    t.prototype.updateDayData = function(e) {
        if (void 0 === e && (e = null), 2 == this.gameIndex && (a._duidie_view.dayNum > s._gameStateData.userMaxDayNum || a._duidie_view.maxRennum > s._gameStateData.userCardRenNum)) {
            var t = a._duidie_view.dayNum;
            a._duidie_view.dayNum - s._gameStateData.userMaxDayNum > 1 && (t = a._duidie_view.dayNum - (s._gameStateData.userMaxDayNum + (a._duidie_view.dayNum - s._gameStateData.userMaxDayNum)) - 1);
            var o = {
                dayNum: t,
                cardRenNum: a._duidie_view.maxRennum
            };
            b.default.setUserData(o,
            function(t) {
                t && (a._duidie_view.dayNum > s._gameStateData.userMaxDayNum && (s._gameStateData.userMaxDayNum = a._duidie_view.dayNum), a._duidie_view.maxRennum > s._gameStateData.userCardRenNum && (s._gameStateData.userCardRenNum = a._duidie_view.maxRennum)),
                e && e()
            })
        }
    },
    t.prototype.shijian = function() {
        var e = 5,
        t = 3,
        o = 1;
        if (this.gameIndex > 0 && 3 != this.gameIndex && 4 != this.gameIndex && (e = 10, t = 5, o = 0), this.dayNum == e || (this.dayNum + o) % t == 0 && this.dayNum > e + 1) {
            var i = this.card_parent.width / 2 - this.card_parent.children[0].width / 2,
            n = this.card_parent.height / 2 - this.card_parent.children[0].height / 2,
            r = cc.v3(f.NumberUtil.randomNum( - i, i), f.NumberUtil.randomNum( - n, n)),
            c = y.cardNameOrId.奇怪的入口;
            3 == this.gameIndex && (c = y.cardNameOrId.暗流),
            4 == this.gameIndex && (c = y.cardNameOrId.掠夺者),
            this.add_card(c, r, null)
        }
        if (this.gameIndex < 3) for (var d in s._gameStateData.EventTimeline) if (Object.prototype.hasOwnProperty.call(s._gameStateData.EventTimeline, d) && (m = s._gameStateData.EventTimeline[d]) && f.NumberUtil.randomNum(0, 100) < m.Rate) for (var l = m.EventID,
        u = s._gameStateData.EventList[l + ""].CreateCardID, p = s._gameStateData.EventList[l + ""].Number, h = 0; h < p; h++) i = this.card_parent.width / 2 - this.card_parent.children[0].width / 2,
        n = this.card_parent.height / 2 - this.card_parent.children[0].height / 2,
        r = cc.v3(f.NumberUtil.randomNum( - i, i), f.NumberUtil.randomNum( - n, n)),
        this.add_card(u, r, null);
        if (2 == a._duidie_view.gameIndex) for (h = 0; h < this.card_parent.children.length; h++)(N = (m = this.card_parent.children[h]).getComponent(w.default)).card_class.Type == y.card_type.renlei && 0 == N.is_siwang && this.add_card(N.card_class.cradId, m.position, f.NumberUtil.randomNum(1, 8));
        if (4 == this.gameIndex) {
            if (this.calcProgress(), this.shuaxinziyuan(), 50 == this.dayNum && (i = this.card_parent.width / 2 - this.card_parent.children[0].width / 2, n = this.card_parent.height / 2 - this.card_parent.children[0].height / 2, r = cc.v3(f.NumberUtil.randomNum( - i, i), f.NumberUtil.randomNum( - n, n)), this.add_card(y.cardNameOrId.生化巨人, r, null)), this.dayNum >= 2) {
                a._duidie_view.node.getChildByName("huohjiantip4").active = !1,
                this.mask2.node.active = !0;
                var _ = [y.cardNameOrId.丧尸, y.cardNameOrId.疯狗, y.cardNameOrId.蜘蛛, y.cardNameOrId.老鼠];
                if (this.dayNum >= 20 && (_ = [y.cardNameOrId.丧尸, y.cardNameOrId.疯狗, y.cardNameOrId.蜘蛛, y.cardNameOrId.老鼠, y.cardNameOrId.狂暴丧尸, y.cardNameOrId.生化病毒]), this.maskOpen) {
                    var g = [y.cardNameOrId.丧尸, y.cardNameOrId.蜘蛛, y.cardNameOrId.老鼠, y.cardNameOrId.狂暴丧尸];
                    for (h = 0; h < g.length; h++) - 1 != _.indexOf(g[h]) && _.splice(_.indexOf(g[h]), 1)
                }
                for (h = 0; h < this.card_parent.children.length; h++) {
                    var m, N;
                    if ((N = (m = this.card_parent.children[h]).getComponent(w.default)).card_class.cradId == y.cardNameOrId.无限灯塔) {
                        var S = _.indexOf(y.cardNameOrId.丧尸); - 1 != S && _.splice(S, 1)
                    }
                }
                for (h = 0; h < 1; h++) c = f.NumberUtil.getRandomArrayElements(_, 1)[0],
                (r = v.default.randomPos(c)) && this.add_card(c, r, null)
            }
            f.NumberUtil.randomNum(1, 100) < 21 && (i = this.card_parent.width / 2 - this.card_parent.children[0].width / 2, n = this.card_parent.height / 2 - this.card_parent.children[0].height / 2, r = cc.v3(f.NumberUtil.randomNum( - i, i), f.NumberUtil.randomNum( - n, n)), this.add_card(y.cardNameOrId.流浪商人, r, null))
        }
    },
    t.prototype.baocun = function() {
        var e = "第" + this.dayNum + "天\n进度已保存";
        c._game_ui.select_ui(null, !0, e)
    },
    t.prototype.preData = function() {
        if (!this.is_chushou) {
            var e = new r._duidie_view_class;
            for (var t in this.cardList = [], e) Object.prototype.hasOwnProperty.call(e, t) && (e[t] = this[t]);
            e.TaskList = s._gameStateData.TaskList,
            e.renwuId = c._game_ui.renwuId,
            e.renwu_class = c._game_ui.renwu_class,
            e.renwu_index = c._game_ui.renwu_index,
            this.cardItemList.length > 0 && (this.cardItemList = []);
            for (var a = 0; a < this.card_parent.childrenCount; a++) {
                var o = this.card_parent.children[a];
                "cardItem" != o.name ? this.cardList.push(v.default.cardDataPre(o)) : 0 == o.getChildByName("shuaxin").active && this.cardItemList.push([o.getComponent("cardItem").id, o.x, o.y, o.getComponent("cardItem").cardItem_class.cardItemId]),
                a == this.card_parent.childrenCount - 1 && (e.cardList = this.cardList, s._userData.gameCun[this.gameIndex] = e, this.maxFood_num <= 0 && v.default.getTypeCard(y.card_type.renlei) <= 0 && (s._userData.gameCun[this.gameIndex] = null), s.UserDataManger.preData())
            }
        }
    },
    t.prototype.getRankData = function(e) {
        void 0 === e && (e = null),
        console.log("为什么来了");
        var t = {
            userName: s._userData.gameName,
            headIconUrl: s._userData.headIconUrl,
            dayNum: a._duidie_view.dayNum,
            cardRenNum: a._duidie_view.maxRennum
        },
        o = this;
        b.default.getRank(t,
        function(t, a) {
            e && e(t, a),
            t && a.length > 0 && (o.rankData = a)
        })
    },
    t.prototype.shuaxinziyuan = function() {
        var e = [y.cardNameOrId.垃圾堆, y.cardNameOrId.建筑残骸, y.cardNameOrId.土坡, y.cardNameOrId.遗弃背包, y.cardNameOrId.萤火虫群],
        t = [];
        for (var a in this.card_parent.children) if (Object.prototype.hasOwnProperty.call(this.card_parent.children, a)) {
            var o = this.card_parent.children[a].getComponent(w.default),
            i = o.card_class.cradId;
            if ( - 1 != e.indexOf(i) && t.push(this.card_parent.children[a]), i == y.cardNameOrId.尸体 && (o.dayNum += 1, o.dayNum >= 3)) {
                var n = o.node.position;
                o.onClose("回收"),
                this.add_card(y.cardNameOrId.丧尸, n, null)
            }
            i == y.cardNameOrId.求生者 && 1 == o.isLueDuo && (o.dayNum += 1, o.dayNum >= 3 && o.onClose("回收")),
            o.dumoguTime > 0 && o.diankuang()
        }
        for (var r = 0; r < t.length; r++)(i = t[r]).getComponent(w.default).cardJinDu || i.getComponent(w.default).onClose(1);
        for (r = 0; r < e.length; r++) {
            i = e[r];
            var c = f.NumberUtil.randomNum(1, 100),
            s = 1;
            c < 50 && (s = 2),
            i == y.cardNameOrId.萤火虫群 && c <= 5 && (s = 3),
            i == y.cardNameOrId.遗弃背包 && (s = 1);
            for (var d = 0; d < s; d++) {
                var l = this.card_parent.width / 2 - this.card_parent.children[0].width / 2,
                u = this.card_parent.height / 2 - this.card_parent.children[0].height / 2;
                n = cc.v3(f.NumberUtil.randomNum( - l, l), f.NumberUtil.randomNum( - u, u)),
                this.add_card(i, n, null)
            }
        }
        f.NumberUtil.randomNum(1, 100) < 5 && (l = this.card_parent.width / 2 - this.card_parent.children[0].width / 2, u = this.card_parent.height / 2 - this.card_parent.children[0].height / 2, n = cc.v3(f.NumberUtil.randomNum( - l, l), f.NumberUtil.randomNum( - u, u)), this.add_card(y.cardNameOrId.补给箱, n, null))
    },
    t.prototype.mask_graphics = function(e, t, a) {
        if (void 0 === a && (a = !1), a) {
            if (this.mask2.node.active) {
                this.mask2._graphics.clear(),
                this.reset();
                for (var o = [y.cardNameOrId.探照者, y.cardNameOrId.萤火虫群, y.cardNameOrId.萤火虫灯, y.cardNameOrId.灯泡, y.cardNameOrId.无限灯塔, y.cardNameOrId.燃油灯, y.cardNameOrId.火把, y.cardNameOrId.篝火, y.cardNameOrId.火坑], i = 0; i < this.card_parent.children.length; i++) {
                    var n = this.card_parent.children[i];
                    if ( - 1 != o.indexOf(n.getComponent(w.default).card_class.cradId)) {
                        if (n.getComponent(w.default).card_class.cradId == y.cardNameOrId.探照者 && n.getComponent(w.default).is_siwang) continue;
                        var r = n.getComponent(w.default).guangSize;
                        this.mask2._graphics.circle(n.x, n.y, r),
                        this.mask2._graphics.fill(),
                        this.clearMask(t, r)
                    }
                }
            }
        } else this.mask2.node.active && (this.mask2._graphics.circle(t.x, t.y, e), this.mask2._graphics.fill(), this.clearMask(t, e))
    },
    t.prototype.clearMask = function(e, t) {
        this.mask2._graphics,
        this.tempDrawPoints.push(e),
        this.polygonPointsList.forEach(function(a) {
            a.isHit || cc.v3(a.rect.x, a.rect.y).sub(e).len() - E / 2 <= t && (a.isHit = !0)
        }),
        this.calcProgress()
    },
    t.prototype.calcProgress = function() {
        var e = 0;
        this.polygonPointsList.forEach(function(t) {
            t.isHit && (e += 1)
        }),
        this.polygonPointsList.length,
        Math.ceil(e / this.polygonPointsList.length * 100) >= 99 ? (this.maskOpen = !0, this._finish = !0) : (this._finish = !1, this.maskOpen = !1)
    },
    t.prototype.reset = function() {
        this.tempDrawPoints = [],
        this.polygonPointsList = [];
        for (var e = this.mask2.node.children[0], t = 0; t < e.width; t += E) for (var a = 0; a < e.height; a += E) this.polygonPointsList.push({
            rect: cc.rect(t - e.width / 2, a - e.height / 2, E, E),
            isHit: !1
        })
    },
    n([M({
        type: cc.Node,
        tooltip: "卡牌父节点"
    })], t.prototype, "card_parent", void 0),
    n([M({
        type: cc.Node,
        tooltip: "卡牌特效父节点"
    })], t.prototype, "card_effect", void 0),
    n([M({
        type: cc.Node,
        tooltip: "商店父节点"
    })], t.prototype, "shop_parent", void 0),
    n([M({
        type: cc.Node,
        tooltip: "背景图"
    })], t.prototype, "bg", void 0),
    n([M({
        type: cc.Node,
        tooltip: "攝像機"
    })], t.prototype, "camera", void 0),
    n([M({
        type: cc.Node,
        tooltip: "遮罩"
    })], t.prototype, "mask", void 0),
    n([M({
        type: cc.ScrollView,
        tooltip: "滑动视图"
    })], t.prototype, "ScrollView", void 0),
    n([M({
        type: cc.Node,
        tooltip: "滑动内容"
    })], t.prototype, "content", void 0),
    n([M({
        type: cc.Node,
        tooltip: "滑动内容"
    })], t.prototype, "bg2", void 0),
    n([M({
        type: cc.Node,
        tooltip: "滑动内容"
    })], t.prototype, "bg3", void 0),
    n([M({
        type: cc.Mask,
        tooltip: "第四关遮罩"
    })], t.prototype, "mask2", void 0),
    n([C], t)
} (_.default);
a.default = A;
var E = 120