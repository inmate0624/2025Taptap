var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a._audioMager = void 0;
var o = e("gameDataManager"),
i = function() {
    function e() {
        this.audioMap = {},
        this.audioEngine = cc.audioEngine,
        this._flagTime = !1,
        this._oldName = "",
        this._audioIdMap = new Map,
        this._audioId = void 0
    }
    return Object.defineProperty(e, "_Instace", {
        get: function() {
            return this._instace || (this._instace = new e),
            this._instace
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.load = function(e, t) {
        var a = this;
        cc.loader.loadRes("audio/" + e, cc.AudioClip,
        function(o, i) {
            o && console.error("音频加载失败路径:", o),
            a.audioMap[e] = i,
            t(i)
        })
    },
    e.prototype.playAudioEff = function(e, t, a, i) {
        var n = this;
        void 0 === e && (e = "btn"),
        void 0 === t && (t = !1),
        void 0 === a && (a = 1),
        void 0 === i && (i = null),
        this._oldName = e,
        !this._flagTime && o._userData.isEffect_Open && (this.audioMap[e] ? (this._audioId = this.audioEngine.play(this.audioMap[e], t, a), this._audioIdMap.set(e, this._audioId), i && i(this.audioMap[e].duration)) : this.load(e,
        function(o) {
            n._audioId = n.audioEngine.play(o, t, a),
            n._audioIdMap.set(e, n._audioId),
            i && i(o.duration)
        }))
    },
    e.prototype.stopAudioEff = function() {
        this.audioEngine.stop(this._audioId)
    },
    e.prototype.stopLoopAudioEff = function(e) {
        var t = this._audioIdMap.get(e);
        this.audioEngine.stop(t)
    },
    e.prototype.stopAllAudioEff = function() {
        this.audioEngine.stopAllEffects()
    },
    e.prototype.playBGM = function(e) {
        var t = this;
        this.audioEngine.isMusicPlaying() || o._userData.isBgm_Open && this.load(e,
        function(a) {
            t.audioMap[e] = a,
            t.audioEngine.setMusicVolume(.7),
            t.audioEngine && (t.bgmId = t.audioEngine.playMusic(t.audioMap[e], !0))
        })
    },
    e.prototype.stopBGM = function() {
        this.audioEngine.isMusicPlaying() && this.audioEngine.stopMusic(this.bgmId)
    },
    e
} ();
a.default = i,
a._audioMager = i._Instace