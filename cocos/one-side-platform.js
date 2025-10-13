var e = require;
var t = module;
cc.Class({
    extends: cc.Component,
    properties: {},
    onLoad: function() {
        this.pointVelPlatform = cc.v2(),
        this.pointVelOther = cc.v2(),
        this.relativeVel = cc.v2(),
        this.relativePoint = cc.v2()
    },
    public: function(e, t, a) {
        a.node.y < this.node.y && "lead" == a.node.group && (e.disabled = !0)
    },
    onBeginContact: function(e, t, a) {
        var o = this.node.y + this.node.height / 2;
        this.node.y < 0 && (o = this.node.y - this.node.height / 2),
        a.node.y + 7 < o && "lead" == a.node.group && (e.disabled = !0)
    },
    onEndContact: function() {},
    onPreSolve: function(e, t, a) {
        var o = this.node.y + this.node.height / 2;
        this.node.y < 0 && (o = this.node.y - this.node.height / 2),
        a.node.y + 7 < o && "lead" == a.node.group && (e.disabled = !0)
    }
})