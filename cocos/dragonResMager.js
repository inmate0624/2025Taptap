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
});
Object.defineProperty(a, "__esModule", {
    value: !0
});
var n = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.boneRes = {},
        t.amdisAtla = null,
        t.amdisAsset = null,
        t
    }
    return i(t, e),
    t.prototype.init = function() {},
    t.prototype.getBoneRes = function(e, t) {
        void 0 === e && (e = "renwu"),
        null != this.boneRes[e] ? t(this.boneRes[e].dragonAssets, this.boneRes[e].dragonAtlas) : cc.resources.load("ske/renwu/" + e + "_tex", dragonBones.DragonBonesAtlasAsset,
        function(a, o) {
            cc.resources.load("ske/renwu/" + e + "_ske", dragonBones.DragonBonesAsset,
            function(e, a) {
                t(o, a)
            })
        })
    },
    t.prototype.removeBoneRes = function() {},
    t
} (cc.Component);
a.default = n