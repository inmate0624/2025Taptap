var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.commonTool = void 0;
var o = e("gameDataManager");
a.commonTool = new(function() {
    function e() {
        this.spriteUrl = "image/",
        this.prefabUrl = "prefab/"
    }
    return e.prototype.updateSprite = function(e, t, a, o) {
        void 0 === o && (o = null),
        "card/" == e.substring(0, 5) && 3 == o && (e = e.replace("card/", "card/3/")),
        cc.loader.loadRes(this.spriteUrl + e, cc.SpriteFrame,
        function(o, i) {
            o && console.log("------------加载本地图片失败 错误 :", e),
            t && t.activeInHierarchy && (t.getComponent(cc.Sprite).spriteFrame = i),
            a && a()
        }.bind(this))
    },
    e.prototype.updateHttpSprite = function(e, t) {
        cc.assetManager.loadRemote(e,
        function(e, a) {
            var o = new cc.SpriteFrame(a);
            t.getComponent(cc.Sprite).spriteFrame = o
        })
    },
    e.prototype.pingmuDouDong = function(e) {
        var t = cc.repeatForever(cc.sequence(cc.moveBy(.02, cc.v2(4, 4)), cc.moveBy(.04, cc.v2( - 8, -8)), cc.moveBy(.02, cc.v2(4, 4))));
        e.runAction(t);
        var a = setTimeout(function() {
            e.stopAllActions(),
            e.setPosition(0, 0),
            clearTimeout(a)
        },
        300)
    },
    e.prototype.loadSpine = function(e, t) {
        new Promise(function(a) {
            cc.resources.load("meinv/" + t, sp.SkeletonData,
            function(t, o) {
                t ? console.error("骨骼数据加载失败") : (e.skeletonData = o, a(o))
            })
        }).then(function() {
            e.setAnimation(0, "daiji", !0)
        })
    },
    e.prototype.appLog = function(e, t) {
        t ? console.log("🎄🎄🎄🎄🎄🎄🎄🎄:", e, ":", t) : console.log("🎄🎄🎄🎄🎄🎄🎄🎄:", e)
    },
    e.prototype.fit = function(e) {
        var t = cc.view.getVisibleSize(),
        a = cc.view.getDesignResolutionSize(),
        o = t.width / a.width;
        o = o >= 1 ? 1 : o,
        e.scale = o
    },
    e.prototype.fit_number = function() {
        var e = cc.view.getVisibleSize(),
        t = cc.view.getDesignResolutionSize(),
        a = e.width / t.width;
        a = a >= 1 ? 1 : a,
        o._gameStateData.node_result = a
    },
    e.prototype.bindClickEvent = function(e, t, a, o, i) {
        void 0 === i && (i = null);
        var n = new cc.Component.EventHandler;
        n.target = e,
        n.component = t,
        n.handler = o,
        n.customEventData = i,
        a.clickEvents.push(n)
    },
    e.prototype.getChildIndex = function(e) {
        for (var t = e.parent,
        a = 0; a < t.childrenCount; a++) if (t.children[a] == e) return a;
        return null
    },
    e.prototype.get_version = function() {
        return tt.env.VERSION || "preview"
    },
    e.prototype.number_conversion = function(e) {
        var t = e,
        a = (e = Math.abs(e)) + "";
        if (e >= 1e4 && e < 1e8) a = (e / 1e4).toFixed(1) + "万";
        else if (e >= 1e8) {
            var o = e / 1e8;
            a = e >= 1e4 && e < 1e8 ? (e / 1e4).toFixed(1) + "万亿": o.toFixed(1) + "亿"
        } else a = e + "";
        return t < 0 && (a = "-" + a),
        a
    },
    e.prototype.getConvertToWorld = function(e, t) {
        var a = e.parent.convertToWorldSpaceAR(cc.v2(e.x, e.y)),
        o = t.parent.convertToNodeSpaceAR(a);
        return cc.v3(o.x, o.y)
    },
    e.prototype.getServerTimeStamp = function() {
        return new Date().getTime()
    },
    e.prototype.formatSeconds = function(e) {
        var t = e,
        a = (Math.floor(t / 3600), Math.floor(t / 3600), Math.floor(t / 60 % 60) < 10 ? "0" + Math.floor(t / 60 % 60) : Math.floor(t / 60 % 60)),
        o = "";
        return (o += "00" !== a ? a + ":": "00:") + "" + (Math.floor(t % 60) < 10 ? "0" + Math.floor(t % 60) : Math.floor(t % 60))
    },
    e.prototype.addZero = function(e) {
        return e < 10 ? "0" + e: e
    },
    e
} ())