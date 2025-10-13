var e = require;
var t = module;
cc.Class({
    extends: cc.Component,
    properties: {
        camera: null,
        video: null,
        detector: null,
        frame: 0,
        videoSprite: cc.Sprite,
        videoTexture: {
            type: cc.Texture2D,
            default: null
        }
    },
    onLoad: function() {
        this._moveFlag = 0,
        this._jumpFlag = 0,
        window.videoCon = this,
        this.videoSprite = this.node.getComponent(cc.Sprite),
        this.startCamera(),
        this.handleDetectionResult(),
        this.judgeMove()
    },
    onDisable: function() {
        this.camera && this.camera.destroy()
    },
    startCamera: function() {
        var e = this;
        this.camera = tt.createCamera(),
        this.detector = tt.createFaceDetector(),
        tt.setKeepScreenOn(),
        this.camera.start("back", !0).then(function(t) {
            e.video = t,
            e.initVideo()
        }).
        catch(function(e) {
            tt.showToast({
                title: "摄像机需要授权"
            }),
            console.log(e)
        }),
        this.camera.setBeautifyParam(.5, .5, .5, .5)
    },
    initVideo: function() {
        this.videoTexture = new cc.Texture2D,
        this.videoTexture.initWithElement(this.video),
        this.videoTexture.handleLoadedTexture(),
        this.videoSprite.spriteFrame = new cc.SpriteFrame(this.videoTexture),
        this.setVideoWidth(cc.view.getVisibleSize().width),
        this.videoSprite.node.width = this.video.width,
        this.videoSprite.node.height = this.video.height
    },
    startDetector: function() {
        var e = this;
        this.detector && this.video && this.detector.detectFaces(this.video).then(function(t) {
            if (t && t.length > 0 && t[0].actions) {
                if (1 == t[0].actions.mouth_ah) {
                    if (1 == e._jumpFlag) return;
                    return 2 == e._moveFlag && window.videoCatNode.changeEndMove(),
                    e._moveFlag = 2,
                    e._jumpFlag = 1,
                    void window.videoCatNode.jumpCall()
                }
                if (1 == t[0].actions.mouth_pout) {
                    if (2 == e._moveFlag) return;
                    return 1 == e._jumpFlag && window.videoCatNode.changeEndJump(),
                    e._moveFlag = 2,
                    void(e._jumpFlag = 0)
                }
                1 != t[0].actions.mouth_ah && 1 != t[0].actions.mouth_pout && (1 == e._jumpFlag && window.videoCatNode.changeEndJump(), 2 == e._moveFlag && window.videoCatNode.changeEndMove(), e._jumpFlag = 0, e._moveFlag = 0)
            } else 1 == e._jumpFlag && window.videoCatNode.changeEndJump(),
            2 == e._moveFlag && window.videoCatNode.changeEndMove(),
            e._jumpFlag = 0,
            e._moveFlag = 0
        })
    },
    handleDetectionResult: function() {},
    setVideoWidth: function(e) {
        this.video && (this.video.width = e, this.video.height = this.video.videoHeight / this.video.videoWidth * e)
    },
    judgeMove: function() {
        tt.onAccelerometerChange(function(e) {
            console.log("x轴数据：" + e.x),
            console.log("y轴数据：" + e.y),
            console.log("z轴数据：" + e.z)
        })
    },
    update: function() {
        this.videoTexture && this.video && this.videoTexture.update({
            image: this.video,
            flipY: !1
        })
    }
})