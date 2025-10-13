//电子邮件puhalskijsemen@gmail.com
//源码网站 开vpn全局模式打开 http://web3incubators.com/
//电报https://t.me/gamecode999
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
a._game_ui = void 0;
var r = e("enum_type"),
c = e("NumberUtil"),
s = e("poolNodeMager"),
d = e("KEY"),
l = e("duidie_view"),
u = e("winRootNode"),
p = e("audioMager"),
h = e("commonFunction"),
_ = e("EventTargetMager"),
f = e("gameDataManager"),
g = e("card"),
m = cc._decorator,
y = m.ccclass,
v = m.property;
a._game_ui = null;
var N = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.food_num_label = null,
        t.gold_num_label = null,
        t.card_num_label = null,
        t.day_num_label = null,
        t.daytime_label = null,
        t.lantu_peifang = null,
        t.jindutiao = null,
        t.cardExcess_tips = null,
        t.renwu_tips = null,
        t.renwu_lingqu = null,
        t.select_tips = null,
        t.jindutiao_vector = 0,
        t.renwu_index = 0,
        t.renwuId = null,
        t.renwu_class = null,
        t.lantuPeifangID = 0,
        t.jinduAction = null,
        t.dealyTime = 5,
        t.liqngqu = !0,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function() {},
    t.prototype.onClose = function() {
        this.node_off(),
        this.unscheduleAllCallbacks()
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onLoad = function() {
        a._game_ui = this,
        this.node_on()
    },
    t.prototype.start = function() {
        var e = cc.find("luxiang", this.node); (cc.sys.isNative || window.hasOwnProperty("h5api")) && (e.active = !1),
        l._duidie_view.gameIndex < 4 && (this.renwu_tips.node.color = cc.color(0, 0, 0)),
        4 == l._duidie_view.gameIndex && (this.renwu_tips.node.parent.zIndex = 1)
    },
    t.prototype.node_on = function() {
        _._EventTargetMager.on("update_lantuPeifang", this.update_lantuPeifang, this),
        _._EventTargetMager.on("init_uiData", this.init_uiData, this),
        _._EventTargetMager.on("update_datTime", this.update_datTime, this),
        _._EventTargetMager.on("updateRenWuList", this.updateRenWuList, this),
        _._EventTargetMager.on("closeAll", this.onClose, this)
    },
    t.prototype.node_off = function() {
        _._EventTargetMager.off("update_lantuPeifang", this.update_lantuPeifang, this),
        _._EventTargetMager.off("init_uiData", this.init_uiData, this),
        _._EventTargetMager.off("update_datTime", this.update_datTime, this),
        _._EventTargetMager.off("updateRenWuList", this.updateRenWuList, this),
        _._EventTargetMager.off("closeAll", this.onClose, this)
    },
    t.prototype.clear_jindutiao = function() {
        this.jindutiao.fillRange = 0
    },
    t.prototype.updateRenWuList = function(e) {
        if (void 0 === e && (e = null), !(this.renwu_index >= f._gameStateData.renwuIdArray.length)) {
            if (this.renwuId = f._gameStateData.renwuIdArray[this.renwu_index], this.renwu_class = f._gameStateData.TaskList.get(this.renwuId), e) {
                var t = "R" + e,
                a = f._gameStateData.TaskList.get(t);
                a && (a.is_result = !0, f._gameStateData.TaskList.set(t, a)),
                t == this.renwuId && (p._audioMager.playAudioEff("tishi"), this.renwu_lingqu.node.active = !0),
                134 == e && console.log("最终人物完成!!!!")
            } else this.renwu_class.is_result && (this.renwu_lingqu.node.active = !0);
            this.renwu_index >= f._gameStateData.renwuIdArray.length && (this.renwu_tips.node.parent.active = !1),
            "点击左上角的“一切的开始”购买一个卡包" == this.renwu_class.Content && cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS && (this.renwu_class.Content = "点击左上角的“一切的开始”获得一个卡包"),
            this.renwu_tips.string = "任务：" + this.renwu_class.Content,
            this.renwu_lingqu.string = "未完成",
            l._duidie_view.gameIndex < 4 && (this.renwu_tips.node.color = cc.color(0, 0, 0)),
            this.renwu_lingqu.node.color = cc.color(113, 113, 113),
            this.renwu_class.is_result && (this.renwu_lingqu.string = "领取", this.renwu_lingqu.node.color = cc.color(250, 0, 255))
        }
    },
    t.prototype.init_uiData = function() {
        var e = [0, 0, 0];
        4 == l._duidie_view.gameIndex && (e = [255, 255, 255]),
        this.gold_num_label.string = l._duidie_view.gold_num + "",
        this.card_num_label.string = l._duidie_view.cardNum + "/" + l._duidie_view.maxCardNum,
        this.day_num_label.string = "第" + l._duidie_view.dayNum + "天",
        4 == l._duidie_view.gameIndex && (this.day_num_label.node.color = cc.color(255, 255, 255)),
        this.card_num_label.node.parent.getChildByName("day_icon").color = cc.color(e[0], e[1], e[2]),
        this.food_num_label.string = l._duidie_view.haveFood_num + "/" + l._duidie_view.maxFood_num,
        this.food_num_label.node.color = cc.color(33, 33, 33),
        4 == l._duidie_view.gameIndex && (this.food_num_label.node.color = cc.color(255, 255, 255)),
        this.gold_num_label.node.color = cc.color(e[0], e[1], e[2]),
        this.card_num_label.node.parent.getChildByName("gold_icon").color = cc.color(e[0], e[1], e[2]),
        this.food_num_label.node.stopAllActions();
        var t = this.card_num_label.node.parent.getChildByName("food_icon");
        t.color = cc.color(e[0], e[1], e[2]),
        t.stopAllActions(),
        l._duidie_view.haveFood_num < l._duidie_view.maxFood_num && (this.food_num_label.node.runAction(cc.repeatForever(cc.sequence(cc.tintTo(.3, 255, 0, 0), cc.tintTo(.3, e[0], e[1], e[2])))), t.runAction(cc.repeatForever(cc.sequence(cc.tintTo(.3, 255, 0, 0), cc.tintTo(.3, e[0], e[1], e[2]))))),
        this.card_num_label.node.color = cc.color(33, 33, 33),
        4 == l._duidie_view.gameIndex && (this.card_num_label.node.color = cc.color(255, 255, 255));
        var a = this.card_num_label.node.parent.getChildByName("card_icon");
        a.color = cc.color(e[0], e[1], e[2]),
        this.card_num_label.node.stopAllActions(),
        a.stopAllActions(),
        l._duidie_view.cardNum > l._duidie_view.maxCardNum && (this.card_num_label.node.runAction(cc.repeatForever(cc.sequence(cc.tintTo(.3, 255, 0, 0), cc.tintTo(.3, e[0], e[1], e[2])))), a.runAction(cc.repeatForever(cc.sequence(cc.tintTo(.3, 255, 0, 0), cc.tintTo(.3, e[0], e[1], e[2])))));
        var o = h.commonTool.formatSeconds(l._duidie_view.daySecond);
        this.daytime_label.string = "(" + o + ")",
        l._duidie_view.daySecond < 30 ? this.daytime_label.node.color = cc.color(255, 0, 0) : (this.daytime_label.node.color = cc.color(33, 33, 33), 4 == l._duidie_view.gameIndex && (this.daytime_label.node.color = cc.color(255, 255, 255))),
        this.jindutiao.fillRange = 10 * this.jindutiao_vector * (f._gameStateData.daySecond - l._duidie_view.daySecond),
        this.updateRenWuList()
    },
    t.prototype.update_datTime = function(e) {
        var t = this;
        void 0 === e && (e = 0),
        this.jinduAction = cc.tween(this.jindutiao).by(.1, {
            fillRange: this.jindutiao_vector
        }).call(function() {
            if (l._duidie_view.time -= 1, l._duidie_view.time % 10 == 0) {
                l._duidie_view.daySecond -= 1;
                var e = h.commonTool.formatSeconds(l._duidie_view.daySecond);
                t.daytime_label.string = "(" + e + ")",
                l._duidie_view.daySecond < 30 ? t.daytime_label.node.color = cc.color(255, 0, 0) : (t.daytime_label.node.color = cc.color(0, 0, 0), 4 == l._duidie_view.gameIndex && (t.daytime_label.node.color = cc.color(255, 255, 255)));
                for (var a = 0; a < l._duidie_view.card_parent.children.length; a++) {
                    var o = l._duidie_view.card_parent.children[a].getComponent(g.default);
                    o.dumoguTime > 0 && (o.dumoguTime -= 1)
                }
                4 == l._duidie_view.gameIndex && (l._duidie_view.node.getChildByName("huohjiantip4").active = !1, 1 == l._duidie_view.dayNum && (l._duidie_view.node.getChildByName("huohjiantip4").active = !0, l._duidie_view.node.getChildByName("huohjiantip4").children[1].getComponent(cc.RichText).string = "<color=#FFFFFF >距离黑夜还有:< /c><color=#FF0000>" + l._duidie_view.daySecond + "<color=#FFFFFF>秒</color >"))
            }
            if (l._duidie_view.time % (10 * t.dealyTime) == 0 && 3 == l._duidie_view.gameIndex && 0 == f._gameStateData.is_pause) {
                if ( - 1 != l._duidie_view.piaoLiuArray.indexOf(r.cardNameOrId.漂流瓶)) {
                    var i = !0;
                    for (a = 0; a < f._gameStateData.lantuCardList.length; a++) - 1 == f._userData.lantu_data.indexOf(f._gameStateData.lantuCardList[a]) && (i = !1);
                    if (i) {
                        var n = l._duidie_view.piaoLiuArray.indexOf(r.cardNameOrId.漂流瓶);
                        l._duidie_view.piaoLiuArray.splice(n, 1)
                    }
                }
                var s = c.NumberUtil.getRandomArrayElements(l._duidie_view.piaoLiuArray, 1)[0];
                l._duidie_view.add_card(s, cc.v3(0, 0), null),
                t.dealyTime = c.NumberUtil.randomNum(10, 30)
            }
            l._duidie_view.time <= 0 ? (l._duidie_view.stopSchedule(), l._duidie_view.day_jiesuan()) : t.update_datTime()
        }).start()
    },
    t.prototype.update_lantuPeifang = function(e, t, a) {
        this.lantu_peifang.node.active = e,
        this.lantu_peifang.string = t,
        this.lantuPeifangID = a,
        this.lantu_peifang.node.color = cc.color(0, 0, 0),
        4 == l._duidie_view.gameIndex && (this.lantu_peifang.node.color = cc.color(255, 255, 255))
    },
    t.prototype.on_lantu = function(e) {
        void 0 === e && (e = null),
        this.disableClick(),
        p._audioMager.playAudioEff(d.KEY.audioName.btn),
        this.jinduAction && this.jinduAction.stop(),
        _._EventTargetMager.emit("gamePauseFun", !0),
        s._poolNodeMager.getPoolNode(d.KEY.poolName.lantu_panel),
        _._EventTargetMager.emit("updateRenWuList", 118)
    },
    t.prototype.on_rank = function(e) {
        void 0 === e && (e = null),
        this.disableClick(),
        p._audioMager.playAudioEff(d.KEY.audioName.btn),
        window.tt ? (this.jinduAction && this.jinduAction.stop(), _._EventTargetMager.emit("gamePauseFun", !0), s._poolNodeMager.getPoolNode(d.KEY.poolName.rank_panel)) : s._poolNodeMager.getPoolNode(d.KEY.poolName.tipNode, void 0, !0, {
            str: "暂不支持!"
        })
    },
    t.prototype.on_suspend = function() {
        var e = this;
        this.disableClick(),
        p._audioMager.playAudioEff(d.KEY.audioName.btn),
        _._EventTargetMager.emit("gamePauseFun", !0),
        this.jinduAction && this.jinduAction.stop(),
        s._poolNodeMager.getPoolNode(d.KEY.poolName.gamePause_panel, null, !0, {
            callBack: function() {
                e.onClose(1)
            }
        })
    },
    t.prototype.showCardExcess_tipsTpis = function(e) {
        var t = "<color=#FFFFFF>还要出售 </c><color=#FFE600>" + (l._duidie_view.cardNum - l._duidie_view.maxCardNum) + " <color=#FFFFFF> 张卡牌才能继续游戏</color>",
        a = this.cardExcess_tips.getChildByName("text");
        a.getComponent(cc.RichText).string = t;
        var o = 255;
        e || (o = 0),
        a.active = e,
        this.cardExcess_tips.active = !0,
        this.cardExcess_tips.opacity = o
    },
    t.prototype.on_lingqu = function() {
        this.disableClick(),
        p._audioMager.playAudioEff(d.KEY.audioName.btn),
        0 != this.renwu_class.is_result && this.liqngqu && (this.liqngqu = !1, this.renwu_lingqu.node.active = !1, l._duidie_view.add_card(r.cardNameOrId.金币, cc.v3(0, 230), c.NumberUtil.randomNum(6, 8)), this.liqngqu = !0, this.renwu_index += 1, this.renwu_index >= f._gameStateData.renwuIdArray.length ? this.renwu_lingqu.node.parent.active = !1 : this.updateRenWuList())
    },
    t.prototype.select_ui = function(e, t, a) {
        if (void 0 === a && (a = null), a) return this.select_tips.string = a,
        void this.select_tips.node.runAction(cc.fadeOut(3));
        this.select_tips.node.stopAllActions(),
        this.select_tips.node.opacity = 255;
        for (var o = new Map,
        i = 0; i < e.cards.length; i++) if (e.cards[i]) {
            var n = e.cards[i].card_class.CardName;
            if (o.has(n)) {
                var r = o.get(n);
                r += 1,
                o.set(n, r)
            } else o.set(n, 1)
        }
        var c = "[已选择]\n";
        o.forEach(function(e, t) {
            c += t + "x" + e
        }),
        this.select_tips.string = c,
        this.select_tips.node.active = t,
        this.select_tips.node.parent.active = t
    },
    t.prototype.update = function() {},
    n([v({
        type: cc.Label,
        tooltip: "饱食度ui"
    })], t.prototype, "food_num_label", void 0),
    n([v({
        type: cc.Label,
        tooltip: "金币数ui"
    })], t.prototype, "gold_num_label", void 0),
    n([v({
        type: cc.Label,
        tooltip: "卡牌数ui"
    })], t.prototype, "card_num_label", void 0),
    n([v({
        type: cc.Label,
        tooltip: "游戏天数ui"
    })], t.prototype, "day_num_label", void 0),
    n([v({
        type: cc.Label,
        tooltip: "每天倒计时ui"
    })], t.prototype, "daytime_label", void 0),
    n([v({
        type: cc.Label,
        tooltip: "蓝图配方"
    })], t.prototype, "lantu_peifang", void 0),
    n([v({
        type: cc.Sprite,
        tooltip: "进度条ui"
    })], t.prototype, "jindutiao", void 0),
    n([v({
        type: cc.Node,
        tooltip: "卡牌超出上限提示框"
    })], t.prototype, "cardExcess_tips", void 0),
    n([v({
        type: cc.Label,
        tooltip: "任务描述"
    })], t.prototype, "renwu_tips", void 0),
    n([v({
        type: cc.Label,
        tooltip: "任务领取"
    })], t.prototype, "renwu_lingqu", void 0),
    n([v({
        type: cc.Label,
        tooltip: "任务领取"
    })], t.prototype, "select_tips", void 0),
    n([y], t)
} (u.default);
a.default = N