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
c = e("winRootNode"),
s = e("KEY"),
d = e("audioMager"),
l = e("poolNodeMager"),
u = e("platfrom_fun"),
p = e("AndroidApi"),
h = e("4399GameBox"),
_ = cc._decorator,
f = _.ccclass,
g = (_.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.callBack = null,
        t
    }
    return i(t, e),
    t.prototype.inint = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.onOpen = function(e) {
        this.node.getChildByName("node").y = cc.winSize.height + 200,
        this.moveShow(this.node.getChildByName("node"), cc.v3(0, 0), null),
        e.callBack && (this.callBack = e.callBack),
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? p.default.get().showBanner() : window.gamebox && h.default.get().showBanner()
    },
    t.prototype.onClose = function() {
        var e = this;
        r._duidie_view.is_wanhui = !1,
        cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? p.default.get().hideBanner() : window.gamebox && h.default.get().hideBanner(),
        r._duidie_view.baozhaCardList.clear(),
        r._duidie_view.baozhaCardItemList.clear(),
        this.moveHide(this.node.getChildByName("node"), cc.v3(0, cc.winSize.height + 200),
        function() {
            l._poolNodeMager.putPoolNode(e.node.name, e.node)
        })
    },
    t.prototype.onClear = function() {
        throw new Error("Method not implemented.")
    },
    t.prototype.on_close = function() {
        this.disableClick(),
        d._audioMager.playAudioEff(s.KEY.audioName.btn),
        this.callBack && this.callBack(!1),
        this.onClose(!0),
        (cc.sys.isNative || window.kwaigame) && u.default.getInstance().showInterstitalAd()
    },
    t.prototype.on_wanhui = function() {
        var e = this;
        this.disableClick(),
        d._audioMager.playAudioEff(s.KEY.audioName.btn),
        u.default.getInstance().showAdVideo(function() {
            u.default.getInstance().add_reportAnalytics("event_TotalVedioCount"),
            u.default.getInstance().add_reportAnalytics("event_WanHuiVedio"),
            r._duidie_view.baozhaCardList.forEach(function(e, t) {
                var a = e,
                o = {
                    cradId: a.card_class.cradId,
                    id: parseInt(t),
                    crad_fly_id: null,
                    position: cc.v3(a.positionX, a.positionY),
                    card_attr_class: a
                };
                l._poolNodeMager.getPoolNode(s.KEY.poolName.card, r._duidie_view.card_parent, !0, o)
            }),
            r._duidie_view.baozhaCardItemList.forEach(function(e) {
                r._duidie_view.add_cardItem(e[4], cc.v3(e[2], e[3]), null)
            }),
            e.callBack && e.callBack(!0),
            e.onClose(1)
        })
    },
    n([f], t)
} (c.default));
a.default = g