var e = require;
var t = module;
var a = exports;
var o = this && this.__decorate ||
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
var i = e("KEY"),
n = e("card"),
r = e("audioMager"),
c = e("EventTargetMager"),
s = e("poolNodeMager"),
d = e("gameDataManager"),
l = e("NumberUtil"),
u = e("duidie_view"),
p = e("classManger"),
h = e("enum_type"),
_ = e("commonFunction"),
f = cc._decorator,
g = f.ccclass,
m = (f.property,
function() {
    function e() {}
    var t;
    return t = e,
    e.addXuXian = function(e, t, a) {
        for (var o = !1,
        r = !1,
        c = [], d = 0; d < u._duidie_view.card_parent.children.length; d++) {
            var l = u._duidie_view.card_parent.children[d];
            if (l && l.active) {
                var p = l.getComponent(n.default).cards,
                _ = p[p.length - 1];
                if (_ && _.node && _.node.active) {
                    o = -1 != e.indexOf(_);
                    for (var f = 0; f < c.length; f++) r = -1 != c.indexOf(_);
                    if (!o && !r && (c.push(_), _.card_class.cradId && _.is_duidie)) if ( - 1 != t.indexOf(parseInt(_.card_class.cradId + ""))) s._poolNodeMager.getPoolNode(i.KEY.poolName.card_xuxian, _.node, !0, {
                        position: _.node.position
                    });
                    else {
                        var g = a.card_class.cradId,
                        m = parseInt(_.card_class.cradId + "");
                        g != h.cardNameOrId.鸡 && g != h.cardNameOrId.牛 && g != h.cardNameOrId.兔子 || m != h.cardNameOrId.鸡 && m != h.cardNameOrId.牛 && m != h.cardNameOrId.兔子 || _.cards[0].card_class.cradId != h.cardNameOrId.动物围栏 || !(_.cards.length < 6) || s._poolNodeMager.getPoolNode(i.KEY.poolName.card_xuxian, _.node, !0, {
                            position: _.node.position
                        })
                    }
                }
            }
        }
    },
    e.jump = function(e) {
        var t = l.NumberUtil.randomNum(1, 5);
        r._audioMager.playAudioEff("diaoluo_0" + t);
        var a = [100, 50, 7, -7, 5, -5],
        o = [90, 10, 7, 7, 5, 3],
        i = l.NumberUtil.randomNum(1, 8);
        switch (e.card_bg, e.is_touch = !0, e.node.zIndex = 1, i) {
            case 1:
                o = [ - 90, -10, -7, -7, -5, -3];
            break;
            case 2:
                o = [0, 0, 0, 0, 0, 0];
            break;
            case 3:
                break;
            case 4:
                a = [100, -50, 7, -7, 5, -5],
            o = [ - 90, -10, -7, -7, -5, -3];
            break;
            case 5:
                a = [100, 100, 7, -7, 5, -5];
            break;
            case 6:
                a = [ - 100, -10, -7, -7, -5, -3],
            o = [ - 90, -10, -7, -7, -5, -3];
            break;
            case 7:
                a = [ - 100, -10, -7, -7, -5, -3],
            o = [0, 0, 0, 0, 0, 0];
            break;
            case 8:
                a = [ - 100, -10, -7, -7, -5, -3];
        }
        for (var n = u._duidie_view.card_parent.width / 2 - e.node.width / 2 - 10,
        c = u._duidie_view.card_parent.height / 2 - e.node.height / 2 - 10,
        s = 0; s < o.length; s++) {
            var d = o[s];
            e.node.x + d > n && (o[s] = n - e.node.x),
            e.node.x + d < -n && (o[s] = -(n - Math.abs(e.node.x)))
        }
        for (s = 0; s < a.length; s++) d = a[s],
        e.node.y + d > c && (a[s] = c - e.node.y),
        e.node.y + d < -c && (a[s] = -(c - Math.abs(e.node.y)));
        cc.tween(e.node).by(.2, {
            scale: .3,
            y: a[0],
            x: o[0]
        }).by(.2, {
            scale: -.3,
            y: a[1],
            x: o[1]
        }).by(.15, {
            scale: .1,
            y: a[2],
            x: o[2]
        }).by(.15, {
            scale: -.1,
            y: a[3],
            x: o[3]
        }).by(.1, {
            scale: .05,
            y: a[4],
            x: o[4]
        }).by(.1, {
            scale: -.05,
            y: a[5],
            x: o[5]
        }).start(),
        cc.tween(e.card_icon).to(.3, {
            scaleY: 1
        }).to(.15, {
            angle: 5
        }).to(.15, {
            angle: -5
        }).to(.1, {
            angle: 3
        }).to(.1, {
            angle: -2
        }).to(.05, {
            angle: 0
        }).call(function() {
            e.node.zIndex = 0,
            e.is_touch = !1,
            e.is_enable = !0,
            e.updateY_open()
        }).start()
    },
    e.move = function(e) {
        if (e.moveTarget && e.moveTarget.node) {
            var a = e.moveTarget.node.position.sub(e.node.position).normalize().div(1 / e.moveDis),
            o = e.node.position.add(a);
            0 != t.judgeGuangPos(o, e) || 4 != u._duidie_view.gameIndex || e.card_class.cradId != h.cardNameOrId.丧尸 && e.card_class.cradId != h.cardNameOrId.狂暴丧尸 && e.card_class.cradId != h.cardNameOrId.蜘蛛 && e.card_class.cradId != h.cardNameOrId.老鼠 || (o = e.node.position),
            e.node.runAction(cc.sequence(cc.spawn(cc.sequence(cc.scaleTo(.05, 1.1), cc.scaleTo(.05, 1)), cc.moveTo(.1, o.x, o.y).easing(cc.easeCircleActionOut())), cc.callFunc(function() {})))
        }
    },
    e.screenNearest = function(e, t, a) {
        for (var o = null,
        i = 99999,
        n = 0; n < e.length; n++) if (e[n] && e[n].node) {
            var r = e[n].node,
            c = r.position.sub(r.position).mag(),
            s = e[n].cards.length - 1,
            d = e[n].cards[s],
            l = parseInt(d.card_class.cradId + "");
            if ( - 1 == a.indexOf(l) || !d.is_duidie) {
                var u = t.card_class.cradId;
                if (u != h.cardNameOrId.鸡 && u != h.cardNameOrId.牛 && u != h.cardNameOrId.兔子 || l != h.cardNameOrId.鸡 && l != h.cardNameOrId.牛 && l != h.cardNameOrId.兔子 || d.cards[0].card_class.cradId != h.cardNameOrId.动物围栏 || !(d.cards.length < 6)) continue
            }
            c < i && e[n].cards.length + t.cards.length <= 16 && (i = c, o = e[n])
        }
        return o
    },
    e.screenNearestBatter = function(e) {
        for (var t = null,
        a = 99999,
        o = 0; o < e.length; o++) if (e[o] && e[o].node) {
            var i = e[o].node,
            n = i.position.sub(i.position).mag();
            n < a && (a = n, t = e[o])
        }
        return t
    },
    e.updatePos = function(e, t, a, o, i) {
        if (void 0 === o && (o = []), void 0 === i && (i = null), -1 != u._duidie_view.piaoLiuArray.indexOf(a.getComponent(n.default).card_class.cradId)) return e;
        var r = o.length,
        c = t.width / 2 - a.width / 2,
        s = t.height / 2 - a.height / 2,
        d = -(t.height / 2 - a.height / 2 - (r - 1) * o[0].intervalY);
        return o.length <= 0 && (r = 1),
        a.getComponent(n.default).is_touch && 3 != u._duidie_view.gameIndex && (s += 120),
        e.x < -c && (e.x = -c),
        e.x > c && (e.x = c),
        e.y < d && (e.y = d),
        e.y > s && (e.y = s),
        e
    },
    e.crad_fly_animation = function(e, t) {
        void 0 === t && (t = null),
        e.card_icon.scaleY = 0;
        var a = e.card_bg;
        a.active = !0;
        var o = [100, 50, 7, -7, 5, -5],
        i = [90, 10, 7, 7, 5, 3];
        switch (e.crad_fly_id) {
            case 1:
                i = [ - 90, -10, -7, -7, -5, -3];
            break;
            case 2:
                i = [0, 0, 0, 0, 0, 0];
            break;
            case 3:
                break;
            case 4:
                o = [100, -50, 7, -7, 5, -5],
            i = [ - 90, -10, -7, -7, -5, -3];
            break;
            case 5:
                o = [100, 100, 7, -7, 5, -5];
            break;
            case 6:
                o = [ - 100, -10, -7, -7, -5, -3],
            i = [ - 90, -10, -7, -7, -5, -3];
            break;
            case 7:
                o = [ - 100, -10, -7, -7, -5, -3],
            i = [0, 0, 0, 0, 0, 0];
            break;
            case 8:
                o = [ - 100, -10, -7, -7, -5, -3];
            break;
            case 9:
                return a.active = !1,
            e.card_icon.scaleY = 1,
            void(0 == e.card_index && e.updateY_open());
            case 10:
                e.is_enable = !1;
            var n = t.cards[t.cards.length - 1].node.position;
            n.y -= e.intervalY;
            var c = e.node.position.sub(n).mag() / 1200;
            return e.updateCardNodes(t),
            cc.tween(e.node).parallel(cc.tween(e.node).to(c, {
                position: n
            },
            {
                easing: "CircOut"
            }).start(), cc.tween(e.node).to(c / 2, {
                scale: 1.4
            }).to(c / 2, {
                scale: 1
            })).start(),
            void cc.tween(a).to(.15, {
                scaleY: 0
            }).call(function() {
                cc.tween(e.card_icon).to(.15, {
                    scaleY: 1
                }).call(function() {
                    e.cards[0].updateY_open(!0),
                    e.paiqi = !0,
                    3 == u._duidie_view.gameIndex && r._audioMager.playAudioEff("luoshui")
                }).start(),
                cc.tween(e.shadow).to(.15, {
                    scaleY: -1
                }).start()
            }).start();
        }
        e.is_enable = !1,
        cc.tween(e.node).by(.1, {
            scale: .3,
            y: o[0],
            x: i[0]
        }).by(.1, {
            scale: -.3,
            y: o[1],
            x: i[1]
        }).by(.05, {
            scale: .1,
            y: o[2],
            x: i[2]
        }).by(.05, {
            scale: -.1,
            y: o[3],
            x: i[3]
        }).by(.02, {
            scale: .05,
            y: o[4],
            x: i[4]
        }).by(.02, {
            scale: -.05,
            y: o[5],
            x: i[5]
        }).start(),
        cc.tween(a).to(.1, {
            scaleY: 0
        }).call(function() {
            cc.tween(e.card_icon).to(.1, {
                scaleY: 1
            }).to(.07, {
                angle: 5
            }).to(.07, {
                angle: -5
            }).to(.05, {
                angle: 3
            }).to(.05, {
                angle: -2
            }).to(.02, {
                angle: 0
            }).call(function() {
                e.is_enable = !0,
                e.updateY_open(),
                3 == u._duidie_view.gameIndex && r._audioMager.playAudioEff("luoshui")
            }).start()
        }).start()
    },
    e.jiance_tonglei = function(e, t) {
        void 0 === t && (t = 150);
        for (var a = [], o = 0; o < e.node.parent.children.length; o++) if (0 != e.node.parent.children[o].active) {
            var i = e.node.parent.children[o].getComponent(n.default);
            if (i) {
                var r = i.cards.length - 1,
                c = i.cards[r];
                if (c.node && c.is_active && c.card_class) {
                    for (var s = c,
                    d = e.node.getPosition().sub(c.node.getPosition()).mag(), l = !1, p = 0; p < e.cards.length; p++) if (s.id == e.cards[p].id) {
                        l = !0;
                        break
                    }
                    for (p = 0; p < a.length; p++) {
                        for (var _ = a[p], f = 0; f < _.cards.length; f++) {
                            var g = _.cards[f];
                            if (s.id == g.id) {
                                l = !0;
                                break
                            }
                        }
                        if (l) break
                    }
                    if (d < t && !l) if (s.card_class.cradId == e.card_class.cradId) 0 == s.cards[0].is_touch && a.push(c);
                    else {
                        var m = 100;
                        u._duidie_view.gameIndex >= 3 && (m = 1e3),
                        s.card_class.cradId == h.cardNameOrId.金币箱 && e.card_class.cradId == h.cardNameOrId.金币 && 11 != e.crad_fly_id && s.card_class.Price < m && a.push(c)
                    }
                }
            }
        }
        return a
    },
    e.maichu_jiance = function(e, t) {
        for (var a = e; a < t.length; a++) if (0 == t[a].card_class.isSellOut) return ! 1;
        return ! 0
    },
    e.goumai_jiance = function(e, t, a) {
        for (var o = d._gameStateData.CardAttri[e].Price, i = 0, n = t; n < a.length; n++) if (! (n < t)) {
            var r = a[n].card_class,
            c = r.cradId;
            if (c != h.cardNameOrId.金币 && c != h.cardNameOrId.金币箱) return ! 1;
            c == h.cardNameOrId.金币 ? i += 1 : i += r.Price
        }
        return ! (i < o)
    },
    e.paichiAction = function(e, a, o, i, n, r) {
        if (void 0 === r && (r = []), o.length > 0) {
            for (var c = o,
            s = 0; s < c.length; s++) if (c[s] && (c[s].paichiActionOpen(!0), !a.updateY)) {
                var d = i * e,
                l = n.getPosition().sub(c[s].node.getPosition()).normalize().div(1 / d),
                u = n.getPosition().add(l),
                p = r[0].node;
                r.length <= 0 && (p = n),
                p.setPosition(t.updatePos(u, n.parent, p, r));
                for (var h = 1; h < r.length; h++) r[h] && (r[h].paiqi = !0)
            }
        } else a.paichiActionOpen(!1)
    },
    e.goumai = function(e, t) {
        var a = e.shop_node.parent.convertToWorldSpaceAR(e.shop_node.getPosition()),
        o = e.node.parent.convertToNodeSpaceAR(a),
        i = d._gameStateData.CardAttri[t].Price;
        if (e.card_class.cradId == h.cardNameOrId.金币) {
            for (var n = e.cards.slice(), r = n.splice(e.card_index, i), c = 0; c < n.length; c++) n[c].updateY_open();
            for (c = 0; c < r.length; c++) r[c].onClose(1)
        } else e.updateDataAttr("Price", -1 * i);
        u._duidie_view.add_cardItem(parseInt(t), cc.v3(o.x, o.y), !0)
    },
    e.maichu = function(e) {
        r._audioMager.playAudioEff("金币");
        for (var t = 0,
        a = 0; a < e.cards.length; a++) t += e.cards[a].card_class.Price;
        var o = e.cards.slice();
        for (a = 0; a < o.length; a++) o[a].onClose(1);
        c._EventTargetMager.emit("updateRenWuList", 105),
        e.card_class.cradId == h.cardNameOrId.树枝 && c._EventTargetMager.emit("updateRenWuList", 115),
        u._duidie_view.sellCard(t)
    },
    e.hecheng_jiance = function(e) {
        for (var a = new Map,
        o = new Map,
        i = 0; i < e.cards.length; i++) if (e.cards[i].node && e.cards[i].node.active && 0 != e.cards[i].is_active && e.cards[i].card_class) {
            var n = e.cards[i].card_class.cradId + "";
            if (a.has(n)) {
                var r = a.get(n);
                r += 1,
                a.set(n, r),
                o.set(e.cards[i].id, e.cards[i])
            } else a.set(n, 1),
            o.set(e.cards[i].id, e.cards[i])
        }
        var c = t.hecheng_jiance_utilFun(a),
        s = [];
        if (null == c) {
            if (e.cards.length > 2) for (i = e.cards.length - 1; i > 0; i--) {
                var d = new Map,
                l = new Map,
                u = e.cards[i],
                _ = i - 1;
                if (_ < 0) break;
                var f = e.cards[_];
                if (u && 0 != !u.node.active && u.card_class && u.node) {
                    var g = u.card_class.cradId + "";
                    l.set(g, 1);
                    var m = f.card_class.cradId + "";
                    l.set(m, 1);
                    var y = t.hecheng_jiance_utilFun(l);
                    if (y && y.type != h.hecheng_type.加工) {
                        d.set(u.id, u),
                        d.set(f.id, f);
                        var v = new p.hechengList_class(y.type, y, f, u, d);
                        s.push(v)
                    }
                }
            }
        } else v = new p.hechengList_class(c.type, c, e.cards[0], e.cards[e.cards.length - 1], o),
        s.push(v);
        return s
    },
    e.hecheng_jiance_utilFun = function(e) {
        var a = d._gameStateData.CardSynthesis,
        o = null,
        i = 0,
        n = 0,
        r = !1,
        c = "",
        s = [h.cardNameOrId.村民, h.cardNameOrId.探险者, h.cardNameOrId.民兵, h.cardNameOrId.剑士, h.cardNameOrId.工匠, h.cardNameOrId.科学家, h.cardNameOrId.枪手, h.cardNameOrId.火枪手, h.cardNameOrId.渔夫, h.cardNameOrId.漂流者, h.cardNameOrId.水手, h.cardNameOrId.勇士, h.cardNameOrId.求生者, h.cardNameOrId.探索者, h.cardNameOrId.探照者, h.cardNameOrId.砍刀手, h.cardNameOrId.工程师, h.cardNameOrId.枪手, h.cardNameOrId.狗],
        l = e.has(h.cardNameOrId.探索者 + ""),
        _ = e.has(h.cardNameOrId.狗 + "");
        if (e.forEach(function(e, t) {
            n += e,
            -1 != s.indexOf(parseInt(t)) && (c = t, r = !0)
        }), a.forEach(function(t) {
            var a = t,
            r = !0;
            i = 0;
            for (var s = 0; s < a.peifang.length; s++) {
                var l = a.peifang[s];
                i += l[1],
                0 != e.has(l[0]) && e.get(l[0]) == l[1] || (r = !1)
            }
            if (r && i == n) {
                for (var u in o = new p.hecheng_class,
                a) if (Object.prototype.hasOwnProperty.call(a, u)) {
                    var _ = a[u];
                    o[u] = _
                }
                if ("" != c) {
                    var f = d._gameStateData.CardsList[c + ""],
                    g = "";
                    o.type == h.hecheng_type.探险 && (g = "ExplorationCoefficient"),
                    o.type == h.hecheng_type.加工 && (g = "ProcessingCoefficient"),
                    o.type == h.hecheng_type.采集 && (g = "AcquisitionCoefficient"),
                    o.times *= f[g]
                }
                return o
            }
        }), null == o && u._duidie_view.gameIndex >= 1 && (e.forEach(function(t, a) {
            if ( - 1 != s.indexOf(parseInt(a))) {
                if (r = !0, e.has(h.cardNameOrId.人 + "")) {
                    var o = e.get(h.cardNameOrId.人 + "") + 1;
                    e.set(h.cardNameOrId.人 + "", o)
                } else e.set(h.cardNameOrId.人 + "", t);
                e.delete(a)
            }
        }), r && a.forEach(function(t) {
            var a = t,
            r = !0;
            i = 0;
            for (var s = 0; s < a.peifang.length; s++) {
                var l = a.peifang[s];
                i += l[1],
                0 != e.has(l[0]) && e.get(l[0]) == l[1] || (r = !1)
            }
            if (r && i == n) {
                for (var f in o = new p.hecheng_class,
                a) if (Object.prototype.hasOwnProperty.call(a, f)) {
                    var g = a[f];
                    o[f] = g
                }
                if ("" != c) {
                    var m = d._gameStateData.CardsList[c + ""],
                    y = "";
                    o.type == h.hecheng_type.探险 && (y = "ExplorationCoefficient"),
                    o.type == h.hecheng_type.加工 && (y = "ProcessingCoefficient"),
                    o.type == h.hecheng_type.采集 && (y = "AcquisitionCoefficient"),
                    o.times *= m[y]
                }
                return 4 == u._duidie_view.gameIndex && o && "100074" == o.id && _ && (o = null),
                o
            }
        })), 2 == u._duidie_view.gameIndex && o && "200056" == o.id && (o = null), 4 == u._duidie_view.gameIndex && o && l) {
            console.log("来着了");
            for (var f = t.deepClone(o), g = 0; g < f.result.length; g++) {
                var m = f.result[g][0]; - 1 != d._gameStateData.guaiwuCard.indexOf(m) && (f.result[g][2] -= 20, f.result[g][2] < 0 && (f.result[g][2] = 0))
            }
            if ("" != c && f) {
                var y = d._gameStateData.CardsList[c + ""],
                v = "";
                f.type == h.hecheng_type.探险 && (v = "ExplorationCoefficient"),
                f.type == h.hecheng_type.加工 && (v = "ProcessingCoefficient"),
                f.type == h.hecheng_type.采集 && (v = "AcquisitionCoefficient"),
                f.times *= y[v]
            }
            return f
        }
        return o
    },
    e.duibiCards = function(e, t) {
        if (!e || !t || e.length <= 0 || t.length <= 0) return ! 1;
        if (e.length != t.length) return ! 1;
        for (var a = 0; a < e.length; a++) if (e[a].id != t[a].id) return ! 1;
        return ! 0
    },
    e.randomLantu = function(e, t) {
        void 0 === e && (e = 1),
        void 0 === t && (t = null);
        var a = [],
        o = d._gameStateData.lantuCardList.slice();
        t && (o = t.slice());
        for (var i = [], n = 0; n < o.length; n++) {
            var r = o[n]; - 1 == d._userData.lantu_data.indexOf(r) && i.push(r)
        }
        return i.length > 0 && (a = l.NumberUtil.getRandomArrayElements(i, e)),
        a
    },
    e.jianceCardsType = function(e, t) {
        for (var a = 0; a < t.cards.length; a++) if (t.cards[a].card_class.cradId != e) return ! 1;
        return ! 0
    },
    e.cardEffect = function(e) {
        if (e.card_class.IsControlled) {
            var t = "动物围栏";
            switch (e.card_class.Type) {
                case h.card_type.ziyuan:
                    switch (t = "尸体", e.card_class.cradId) {
                    case h.cardNameOrId.骨头:
                    case h.cardNameOrId.砖:
                    case h.cardNameOrId.燧石:
                    case h.cardNameOrId.铁棒:
                    case h.cardNameOrId.木板:
                    case h.cardNameOrId.大便:
                    case h.cardNameOrId.树枝:
                    case h.cardNameOrId.石头:
                    case h.cardNameOrId.木头:
                        t = "骨头";
                    break;
                    case h.cardNameOrId.金币:
                        t = "金币";
                    break;
                    case h.cardNameOrId.铁矿:
                        t = "动物围栏";
                    break;
                    case h.cardNameOrId.宝箱:
                    case h.cardNameOrId.旧书:
                    case h.cardNameOrId.剑:
                    case h.cardNameOrId.矛:
                    case h.cardNameOrId.地图:
                        t = "浆果丛_0" + l.NumberUtil.randomNum(1, 3);
                }
                break;
                case h.card_type.didian:
                    t = "动物围栏";
                break;
                case h.card_type.renlei:
                    switch (t = "探索者", e.card_class.cradId) {
                    case h.cardNameOrId.狗:
                        t = "狗";
                    break;
                    case h.cardNameOrId.婴儿:
                        t = "浆果丛_0" + l.NumberUtil.randomNum(1, 3);
                }
                break;
                case h.card_type.jiegou:
                    switch (t = "动物围栏", e.card_class.cradId) {
                    case h.cardNameOrId.浆果丛:
                    case h.cardNameOrId.金币箱:
                    case h.cardNameOrId.旅行马车:
                    case h.cardNameOrId.仓库:
                        t = "浆果丛_0" + l.NumberUtil.randomNum(1, 3);
                }
                r._audioMager.playAudioEff(t);
                break;
                case h.card_type.shiwu:
                    t = "骨头";
                break;
                case h.card_type.guaiwu:
                case h.card_type.lantu:
                    t = "浆果丛_0" + l.NumberUtil.randomNum(1, 3);
            }
            r._audioMager.playAudioEff(t)
        }
    },
    e.cardIdOrLantuId = function(e) {
        switch (e) {
            case h.cardNameOrId.仓库:
        }
    },
    e.battleQueue = function(e) {
        if (e.battleTarget.length > 0) {
            for (var t = [], a = [], o = e.battleTarget[0].battleTarget.slice(), i = e.battleTarget.slice(), n = 0; n < o.length; n++)(r = o[n]).card_class.Type == h.card_type.renlei && t.push(r),
            r.card_class.Type == h.card_type.guaiwu && a.push(r);
            for (n = 0; n < i.length; n++) {
                var r; (r = i[n]).card_class.Type == h.card_type.renlei && t.push(r),
                r.card_class.Type == h.card_type.guaiwu && a.push(r)
            }
            for (n = 0; n < a.length; n++) a[n].node.position = a[0].node.position,
            a[n].node.x += a[0].node.x + 70 * n;
            for (n = 0; n < t.length; n++) t[n].node.position = t[0].node.position,
            t[n].node.x += t[0].node.x + 70 * n
        }
    },
    e.guaiwuBao = function(e) {
        if (e && e.node) {
            var t = e.node.position,
            a = d._gameStateData.AnimalsDropItem,
            o = null;
            for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && e.card_class.cradId == parseInt(i) && (o = a[i]);
            if (o) {
                for (var n = 0,
                r = 0; r < o.result.length; r++) n += o.result[r][1];
                var c = [];
                for (r = 0; r < o.number; r++) for (var s = Math.random() * n, p = 0, h = 0; h < o.result.length; h++) if (s < (p += o.result[h][1])) {
                    var _ = parseInt(o.result[h][0]);
                    c.push(_),
                    u._duidie_view.add_card(_, t, l.NumberUtil.randomNum(1, 8));
                    break
                }
            }
        }
    },
    e.getCard = function(e) {
        for (var t = 0; t < u._duidie_view.card_parent.childrenCount; t++) {
            var a = u._duidie_view.card_parent.children[t];
            if (a.getComponent(n.default).id == e) return a.getComponent(n.default)
        }
        return null
    },
    e.getTypeCard = function(e, t) {
        void 0 === t && (t = !1);
        for (var a = 0,
        o = 0; o < u._duidie_view.card_parent.childrenCount; o++) {
            var i = u._duidie_view.card_parent.children[o];
            i.getComponent(n.default).card_class.Type == e && 0 == i.getComponent(n.default).is_siwang && (a += 1)
        }
        return a
    },
    e.cardDataPre = function(e) {
        var a = e.getComponent(n.default),
        o = new p.card_attr_class;
        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (o[i] = a[i]);
        if (o.cardsIdList = [], o.battleTargetIdList = [], a.cards.length > 1) for (var r = 0; r < a.cards.length; r++) o.cardsIdList.push(a.cards[r].id);
        if (a.battleTarget.length > 0) for (r = 0; r < a.battleTarget.length; r++) o.battleTargetIdList.push(a.battleTarget[r].id);
        return a.cardJinDu && (o.carJinduTime = a.cardJinDu.time),
        a.cardJinDuGuang && (o.carJinduTimeGuang = a.cardJinDuGuang.time),
        o.positionX = e.x,
        o.positionY = e.y,
        t.deepClone(o)
    },
    e.yingerGailV = function() {
        for (var e = [[1, 90], [2, 3], [4, 2], [6, 1], [8, 1], [10, 1], [15, 1], [20, 1]], t = 0, a = 0; a < e.length; a++) if (100 * Math.random() < (t += e[a][1])) return e[a][0];
        return 1
    },
    e.getDataJson = function(e) {
        void 0 === e && (e = ""),
        cc.resources.load("json/TaskList" + e, cc.JsonAsset,
        function(e, t) {
            if (e) return _.commonTool.appLog("加载TaskList.json文件出错:", e);
            var a = t.json;
            for (var o in d._gameStateData.TaskList.clear(), d._gameStateData.renwuIdArray = [], a) Object.prototype.hasOwnProperty.call(a, o) && d._gameStateData.renwuIdArray.push(o);
            for (var o in a) if (Object.prototype.hasOwnProperty.call(a, o)) {
                var i = a[o],
                n = new p.renwu_class;
                for (var r in i) if (Object.prototype.hasOwnProperty.call(i, r)) {
                    var c = i[r];
                    n[r] = c,
                    n.id = o
                }
                d._gameStateData.TaskList.set(o, n)
            }
        }),
        cc.resources.load("json/StackableGroup" + e, cc.JsonAsset,
        function(e, t) {
            if (e) return _.commonTool.appLog("加载StackableGroup.json文件出错:", e);
            d._gameStateData.StackableGroup = t.json
        }),
        cc.resources.load("json/IdeaAttr" + e, cc.JsonAsset,
        function(e, t) {
            if (e) return _.commonTool.appLog("加载IdeaAttr.json文件出错:", e);
            d._gameStateData.IdeaAttr = t.json
        }),
        cc.resources.load("json/CardSynthesis" + e, cc.JsonAsset,
        function(e, t) {
            if (e) return _.commonTool.appLog("加载CardSynthesis.json文件出错:", e);
            d._gameStateData.CardSynthesis.clear();
            var a = t.json;
            for (var o in a) if (Object.prototype.hasOwnProperty.call(a, o)) {
                var i = a[o],
                n = new p.hecheng_class;
                for (var r in i) if (Object.prototype.hasOwnProperty.call(i, r)) {
                    var c = i[r];
                    n[r] = c,
                    n.id = o
                }
                d._gameStateData.CardSynthesis.set(o, n)
            }
        }),
        cc.resources.load("json/CardsList" + e, cc.JsonAsset,
        function(e, t) {
            if (e) return _.commonTool.appLog("加载CardsList.json文件出错:", e);
            d._gameStateData.CardsList = t.json;
            var a = d._gameStateData.CardsList;
            for (var o in d._gameStateData.lantuCardList = [], a) Object.prototype.hasOwnProperty.call(a, o) && a[o].Type == h.card_type.lantu && d._gameStateData.lantuCardList.push(parseInt(o))
        }),
        "3" != e && "4" != e && (cc.resources.load("json/CardAttri" + e, cc.JsonAsset,
        function(e, t) {
            if (e) return _.commonTool.appLog("加载CardAttri.json文件出错:", e);
            d._gameStateData.CardAttri = t.json
        }), cc.resources.load("json/CardItemAttr" + e, cc.JsonAsset,
        function(e, t) {
            if (e) return _.commonTool.appLog("加载CardItemAttr.json文件出错:", e);
            d._gameStateData.CardItemAttr = t.json
        })),
        "3" == e && cc.resources.load("json/StrangeEntrance3", cc.JsonAsset,
        function(e, t) {
            if (e) return _.commonTool.appLog("加载StrangeEntrance.json文件出错:", e);
            d._gameStateData.StrangeEntrance = t.json
        }),
        cc.resources.load("json/AnimalsDropItem" + e, cc.JsonAsset,
        function(e, t) {
            if (e) return _.commonTool.appLog("加载AnimalsDropItem.json文件出错:", e);
            d._gameStateData.AnimalsDropItem = t.json
        })
    },
    e.zhengping = function() {
        u._duidie_view.node.stopAllActions();
        var e = cc.repeat(cc.sequence(cc.moveBy(.02, cc.v2(4, 4)), cc.moveBy(.04, cc.v2( - 8, -8)), cc.moveBy(.02, cc.v2(4, 4)), cc.callFunc(function() {
            u._duidie_view.node.setPosition(0, 0)
        })), 1);
        u._duidie_view.node.runAction(e)
    },
    e.baozha = function(e, a, o) {
        void 0 === a && (a = 396),
        void 0 === o && (o = 200);
        var c = a,
        l = cc.repeat(cc.sequence(cc.moveBy(.02, cc.v2(4, 4)), cc.moveBy(.04, cc.v2( - 8, -8)), cc.moveBy(.02, cc.v2(4, 4)), cc.callFunc(function() {
            u._duidie_view.node.setPosition(0, 0)
        })), 2);
        r._audioMager.playAudioEff("baozha"),
        u._duidie_view.node.runAction(l);
        for (var p = u._duidie_view.card_parent.childrenCount,
        _ = [], f = 0; f < p; f++) if ((N = u._duidie_view.card_parent.children[f]) && N.active && N.getComponent(n.default) && e.sub(N.position).mag() < c) {
            var g = [N.getComponent(n.default).id, N.getComponent(n.default).card_class.cradId, N.x, N.y];
            if ("cardItem" == N.name) u._duidie_view.baozhaCardItemList.has(N.getComponent(n.default).id + "") || (g.push(N.getComponent("cardItem").cardItem_class.cardItemId), u._duidie_view.baozhaCardItemList.set(N.getComponent(n.default).id + "", g));
            else if (!u._duidie_view.baozhaCardList.has(N.getComponent(n.default).id + "") && N.getComponent(n.default).card_class.cradId != h.cardNameOrId.炸弹) {
                var m = t.cardDataPre(N);
                u._duidie_view.baozhaCardList.set(N.getComponent(n.default).id + "", m)
            }
            _.push(g)
        }
        if (0 == u._duidie_view.is_wanhui && _.length > 0 && (u._duidie_view.is_wanhui = !0, !d._gameStateData.scene.getChildByName("wanhuisunshi_panel"))) var y = setTimeout(function() {
            clearTimeout(y),
            s._poolNodeMager.getPoolNode(i.KEY.poolName.wanhuisunshi_panel, null, !0, {
                callBack: function(e) { ! e && u._duidie_view && u._duidie_view.node && t.getTypeCard(h.card_type.renlei) <= 0 && s._poolNodeMager.getPoolNode(i.KEY.poolName.gameStop_panel, null, !0, {
                        callBack: function() {
                            u._duidie_view.onClose(1)
                        }
                    })
                }
            })
        },
        500);
        for (var v = 0; v < 9; v++) s._poolNodeMager.getPoolNode(i.KEY.poolName.suipian, u._duidie_view.card_effect, !0, {
            pos: e,
            number: v,
            _vector: o
        });
        for (f = 0; f < _.length; f++) for (v = 0; v < p; v++) {
            var N;
            if ((N = u._duidie_view.card_parent.children[v]) && N.active && N.getComponent(n.default) && N.getComponent(n.default).id == _[f][0]) {
                N.getComponent(n.default).baozha();
                break
            }
        }
    },
    e.deepClone = function(e) {
        var t = new WeakMap;
        function a(e) {
            return "object" == typeof e && e || "function" == typeof e
        }
        return function e(o) {
            if (!a(o)) return o;
            if ([Date, RegExp].includes(o.constructor)) return new o.constructor(o);
            if ("function" == typeof o) return new Function("return " + o.toString())();
            var i = t.get(o);
            if (i) return i;
            if (o instanceof Map) {
                var n = new Map;
                return t.set(o, n),
                o.forEach(function(t, o) {
                    a(t) ? n.set(o, e(t)) : n.set(o, t)
                }),
                n
            }
            if (o instanceof Set) {
                var r = new Set;
                return t.set(o, r),
                o.forEach(function(t) {
                    a(t) ? r.add(e(t)) : r.add(t)
                }),
                r
            }
            var c = Reflect.ownKeys(o),
            s = Object.getOwnPropertyDescriptors(o),
            d = Object.create(Object.getPrototypeOf(o), s);
            return t.set(o, d),
            c.forEach(function(t) {
                var i = o[t];
                a(i) ? d[t] = e(i) : d[t] = i
            }),
            d
        } (e)
    },
    e.getGuangSize = function(e) {
        var t = 220;
        switch (e) {
            case h.cardNameOrId.萤火虫群:
            case h.cardNameOrId.探照者:
                t = 150;
            break;
            case h.cardNameOrId.萤火虫灯:
            case h.cardNameOrId.火把:
                t = 400;
            break;
            case h.cardNameOrId.篝火:
                t = 450;
            break;
            case h.cardNameOrId.火坑:
                t = 500;
            break;
            case h.cardNameOrId.燃油灯:
                t = 700;
            break;
            case h.cardNameOrId.灯泡:
                t = 600;
            break;
            case h.cardNameOrId.无限灯塔:
                t = 2560;
        }
        return t
    },
    e.getGuangTime = function(e) {
        var t = 120;
        switch (e) {
            case h.cardNameOrId.萤火虫灯:
                t *= 2;
            break;
            case h.cardNameOrId.火把:
                t /= 2;
            break;
            case h.cardNameOrId.篝火:
                t = t;
            break;
            case h.cardNameOrId.火坑:
                t *= 1.5;
            break;
            case h.cardNameOrId.燃油灯:
            case h.cardNameOrId.灯泡:
                t *= 4;
            break;
            case h.cardNameOrId.无限灯塔:
                t = u._duidie_view.card_parent.width;
        }
        return t
    },
    e.judgeGuangPos = function(e, t) {
        void 0 === t && (t = null);
        var a = 0;
        t && (a = 65);
        for (var o = 0; o < u._duidie_view.card_parent.children.length; o++) {
            var i = u._duidie_view.card_parent.children[o].getComponent(n.default);
            if ( - 1 != u._duidie_view.guangArray.indexOf(i.card_class.cradId) && e.sub(i.node.position).len() + a < i.guangSize) return ! 1
        }
        return ! 0
    },
    e.randomPos = function(e) {
        var a = u._duidie_view.card_parent.width / 2 - u._duidie_view.card_parent.children[0].width / 2,
        o = u._duidie_view.card_parent.height / 2 - u._duidie_view.card_parent.children[0].height / 2,
        i = cc.v3(l.NumberUtil.randomNum( - a, a), l.NumberUtil.randomNum( - o, o));
        return - 1 == [h.cardNameOrId.丧尸, h.cardNameOrId.蜘蛛, h.cardNameOrId.老鼠, h.cardNameOrId.狂暴丧尸].indexOf(e) ? i: t.judgeGuangPos(i) ? i: u._duidie_view.maskOpen ? i: void t.randomPos(e)
    },
    e.parent = null,
    t = o([g], e)
} ());
a.default = m