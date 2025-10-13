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
var r = e("gameDataManager"),
c = e("winRootNode"),
s = e("KEY"),
d = e("audioMager"),
l = e("poolNodeMager"),
u = e("gameDataManager"),
p = e("platfrom_fun"),
h = e("duidie_view"),
_ = e("AndroidApi"),
f = e("getDataFromServer"),
g = e("EventTargetMager"),
m = cc._decorator,
y = m.ccclass,
v = m.property,
N = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.callBack = null,
        t.userName = null,
        t.userHeadUrl = null,
        t.paihang_item = null,
        t.content = null,
        t.rankData = [],
        t.userRankNum = 0,
        t.is_btn = !1,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function() {
        this.is_btn = !1,
        this.node.getChildByName("node").y = cc.winSize.height + 200,
        this.moveShow(this.node.getChildByName("node"), cc.v3(0, 30), null),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID && _.default.get().showBanner(),
        this.initData()
    },
    t.prototype.onClose = function() {
        var e = this;
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID && _.default.get().hideBanner(),
        this.moveHide(this.node.getChildByName("node"), cc.v3(0, cc.winSize.height + 200),
        function() {
            0 == h._duidie_view.jiesuan && g._EventTargetMager.emit("gamePauseFun", !1),
            l._poolNodeMager.putPoolNode(e.node.name, e.node)
        })
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.on_close = function() {
        this.disableClick(),
        d._audioMager.playAudioEff(s.KEY.audioName.btn),
        this.is_btn || (this.is_btn = !0, this.onClose(!0), (cc.sys.isNative || window.kwaigame) && p.default.getInstance().showInterstitalAd())
    },
    t.prototype.on_return = function() {
        this.disableClick(),
        d._audioMager.playAudioEff(s.KEY.audioName.btn),
        this.updateData()
    },
    t.prototype.initData = function() {
        var e = this;
        this.paihang_item.getChildByName("dayNum_label").getComponent(cc.Label).string = r._gameStateData.userMaxDayNum + "",
        this.paihang_item.getChildByName("cardRenNum_label").getComponent(cc.Label).string = r._gameStateData.userCardRenNum + "",
        this.paihang_item.getChildByName("ranking_label").getComponent(cc.Label).string = "未上榜",
        window.tt && (h._duidie_view.rankData.length > 0 ? this.getRanKData() : tt.getSetting({
            success: function(t) {
                0 == t.authSetting["scope.userInfo"] ? tt.authorize({
                    scope: "scope.userInfo",
                    success: function() {
                        tt.login({
                            success: function() {
                                console.log("登录成功"),
                                tt.getUserInfo({
                                    success: function(t) {
                                        e.success_callback(t),
                                        e.getRanKData()
                                    },
                                    fail: function() {
                                        e.rankData.length > 0 ? e.getRanKData() : (e.node.getChildByName("node").getChildByName("on_open").active = !0, e.node.getChildByName("node").getChildByName("rank").active = !1)
                                    }
                                })
                            }
                        })
                    }
                }) : tt.login({
                    success: function() {
                        console.log("登录成功"),
                        tt.getUserInfo({
                            success: function(t) {
                                e.success_callback(t),
                                e.getRanKData()
                            },
                            fail: function() {
                                e.rankData.length > 0 && e.getRanKData(),
                                e.node.getChildByName("node").getChildByName("on_open").active = !0,
                                e.node.getChildByName("node").getChildByName("rank").active = !1
                            }
                        })
                    }
                })
            },
            fail: function() {
                console.log("getSetting 调用失败")
            }
        }))
    },
    t.prototype.updateData = function() {
        if (window.tt) {
            var e = this;
            tt.authorize({
                scope: "scope.userInfo",
                success: function() {
                    tt.login({
                        success: function() {
                            console.log("登录成功"),
                            tt.getUserInfo({
                                success: function(t) {
                                    e.success_callback(t),
                                    h._duidie_view.rankData.length > 0 ? e.getRanKData() : h._duidie_view.getRankData(function(t, a) {
                                        t && a.length > 0 ? e.getRanKData() : (e.node.getChildByName("node").getChildByName("on_open").active = !0, e.node.getChildByName("node").getChildByName("rank").active = !1, l._poolNodeMager.getPoolNode(s.KEY.poolName.tipNode, null, !0, {
                                            str: "排行榜数据获取失败,请稍后再试!"
                                        }))
                                    })
                                },
                                fail: function() {
                                    h._duidie_view.rankData.length > 0 ? e.getRanKData() : h._duidie_view.getRankData(function(t, a) {
                                        t && a.length > 0 ? e.getRanKData() : (e.node.getChildByName("node").getChildByName("on_open").active = !0, e.node.getChildByName("node").getChildByName("rank").active = !1, l._poolNodeMager.getPoolNode(s.KEY.poolName.tipNode, null, !0, {
                                            str: "排行榜数据获取失败,请稍后再试!"
                                        }))
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    },
    t.prototype.success_callback = function(e) {
        console.log("登录是成功了吧", e),
        this.node.getChildByName("node").getChildByName("on_open").active = !1,
        this.node.getChildByName("node").getChildByName("rank").active = !0,
        this.userName = e.userInfo.nickName,
        this.paihang_item.getChildByName("userName_label").getComponent(cc.Label).string = e.userInfo.nickName,
        this.userHeadUrl = e.userInfo.avatarUrl,
        u._userData.gameName = this.userName,
        u._userData.headIconUrl = this.userHeadUrl,
        u.UserDataManger.preData()
    },
    t.prototype.getRanKData = function() {
        var e = this;
        if (f.default.getUserData(function() {
            e.paihang_item.getChildByName("dayNum_label").getComponent(cc.Label).string = r._gameStateData.userMaxDayNum + "",
            e.paihang_item.getChildByName("cardRenNum_label").getComponent(cc.Label).string = r._gameStateData.userCardRenNum + ""
        }), h._duidie_view.rankData.length > 0) {
            this.node.getChildByName("node").getChildByName("on_open").active = !1,
            this.node.getChildByName("node").getChildByName("rank").active = !0,
            this.paihang_item.getChildByName("userName_label").getComponent(cc.Label).string = u._userData.gameName;
            var t = h._duidie_view.rankData;
            e.rankData = t,
            e.content.destroyAllChildren();
            for (var a = 0; a < t.length; a++) t[a].openId == u._userData.openId && (e.userRankNum = a + 1, e.paihang_item.getChildByName("dayNum_label").getComponent(cc.Label).string = t[a].dayNum + "", e.paihang_item.getChildByName("cardRenNum_label").getComponent(cc.Label).string = t[a].cardRenNum + "", e.paihang_item.getChildByName("ranking_label").getComponent(cc.Label).string = a + 1 + ""),
            l._poolNodeMager.getPoolNode(s.KEY.poolName.paihang_item, e.content, !0, {
                data: t[a],
                index: a + 1
            })
        }
    },
    n([v(cc.Node)], t.prototype, "paihang_item", void 0),
    n([v(cc.Node)], t.prototype, "content", void 0),
    n([y], t)
} (c.default);
a.default = N