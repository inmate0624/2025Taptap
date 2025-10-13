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
var r = cc._decorator,
c = r.ccclass,
s = (r.property,
function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.actionType = {
            breathAction: "breathAction",
            minbreathAction: "minbreathAction",
            upanddownAction: "upanddownAction",
            rotateAction: "rotateAction",
            fadeAction: "fadeAction",
            scaleSmallHide: "scaleSmallHide",
            moveHide: "moveHide",
            fadeOut: "fadeOut",
            scaleBigShow: "scaleBigShow",
            moveShow: "moveShow",
            fadeIn: "fadeIn",
            showTopPopUp: "showTopPopUp",
            itemShowScaleBig: "itemShowScaleBig",
            angleChange: "angleChange"
        },
        t
    }
    return i(t, e),
    t.prototype.hideAction = function(e, t, a) {
        this[e](t, a)
    },
    t.prototype.showAction = function(e, t, a) {
        this[e](t, a)
    },
    t.prototype.nodeAction = function(e, t) {
        this[e](t)
    },
    t.prototype.breathAction = function(e) {
        var t = e.scale;
        cc.tween(e).sequence(cc.tween().to(1.2, {
            scaleX: e.scaleX + .2,
            scaleY: e.scaleY + .1
        },
        {
            easing: "sineOut",
            number: 1.3
        }), cc.tween().to(.5, {
            scaleX: e.scaleX + .18,
            scaleY: e.scaleY + .16
        }), cc.tween().to(.8, {
            scaleX: t,
            scaleY: t
        },
        {
            easing: "sineIn",
            number: 1.3
        })).repeatForever().start()
    },
    t.prototype.rotateAction = function(e) {
        e.scale,
        cc.tween(e).sequence(cc.tween().by(3, {
            angle: -180
        }), cc.tween().by(3, {
            angle: -180
        })).repeatForever().start()
    },
    t.prototype.fadeAction = function(e) {
        e.scale,
        e.runAction(cc.repeatForever(cc.sequence(cc.fadeOut(.6), cc.fadeIn(.6))))
    },
    t.prototype.minbreathAction = function(e) {
        var t = e.scale;
        cc.tween(e).sequence(cc.tween().to(1.2, {
            scaleX: e.scaleX + .1,
            scaleY: e.scaleY + .05
        },
        {
            easing: "sineOut",
            number: 1.3
        }), cc.tween().to(.5, {
            scaleX: e.scaleX + .09,
            scaleY: e.scaleY + .08
        }), cc.tween().to(.8, {
            scaleX: t,
            scaleY: t
        },
        {
            easing: "sineIn",
            number: 1.3
        })).repeatForever().start()
    },
    t.prototype.itemShowScaleBig = function(e, t, a) {
        e.stopAllActions(),
        e.setScale(.1),
        cc.tween(e).to(.2, {
            scale: t
        },
        {
            easing: "sineIn",
            number: 5
        }).to(.1, {
            angle: 5
        }).to(.2, {
            angle: -5
        }).to(.1, {
            angle: 3
        }).to(.1, {
            angle: 0
        }).call(function() {
            a && a()
        }).start()
    },
    t.prototype.angleChange = function(e) {
        e.angle = -5,
        cc.tween(e).sequence(cc.tween().to(1, {
            angle: 5
        },
        {
            easing: "sineOut"
        }), cc.tween().to(1, {
            angle: -5
        },
        {
            easing: "sineInOut"
        })).repeatForever().start()
    },
    t.prototype.upanddownAction = function(e) {
        e.angle,
        cc.tween(e).sequence(cc.tween().by(1, {
            y: 15
        },
        {
            easing: "sineOut"
        }), cc.tween().by(.8, {
            y: -15
        },
        {
            easing: "sineInOut"
        })).repeatForever().start()
    },
    t.prototype.scaleBigShow = function(e, t, a) {
        e.scale = .5,
        e.opacity = 0,
        e.setScale(0),
        e.stopAllActions(),
        e.runAction(cc.sequence(cc.spawn(cc.sequence(cc.scaleTo(.2, 1.1), cc.scaleTo(.1, 1)), cc.fadeIn(.2)), cc.callFunc(function() {
            a && a()
        })))
    },
    t.prototype.scaleSmallHide = function(e, t, a) {
        e.stopAllActions(),
        e.runAction(cc.sequence(cc.spawn(cc.sequence(cc.scaleTo(.1, 1.1), cc.scaleTo(.2, 0)), cc.fadeOut(.2)), cc.callFunc(function() {
            a && a()
        })))
    },
    t.prototype.moveHide = function(e, t, a, o) {
        void 0 === o && (o = "backIn"),
        o && "" != o || (o = "backIn"),
        e.stopAllActions(),
        cc.tween(e).to(.7, {
            position: t
        },
        {
            easing: o
        }).call(function() {
            a && a()
        }).start()
    },
    t.prototype.moveShow = function(e, t, a, o) {
        void 0 === o && (o = "backOut"),
        o && "" != o || (o = "backOut"),
        e.stopAllActions(),
        cc.tween(e).to(.7, {
            position: t
        },
        {
            easing: o
        }).call(function() {
            a && a()
        }).start()
    },
    t.prototype.fadeIn = function(e, t, a) {
        e.opacity = 0,
        cc.tween(e).to(.6, {
            opacity: 255
        },
        {
            easing: "sineIn"
        }).call(function() {
            a && a()
        }).start()
    },
    t.prototype.fadeOut = function(e, t, a) {
        cc.tween(e).to(.5, {
            opacity: 0
        },
        {
            easing: "sineIn"
        }).call(function() {
            a && a()
        }).start()
    },
    t.prototype.showTopPopUp = function(e, t, a) {
        e.setPosition(cc.v2(0, cc.winSize.height)),
        e.stopAllActions(),
        cc.tween(e).to(1, {
            position: t
        },
        {
            easing: "backOut"
        }).call(function() {
            a && a()
        }).start()
    },
    n([c], t)
} (cc.Component));
a.default = s