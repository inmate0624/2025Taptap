var e = require;
var t = module;
cc.Class({
    extends: cc.Component,
    properties: {
        manifestUrl: {
            type: cc.Asset,
            default: null
        },
        info: {
            type: cc.Label,
            default: null
        },
        byteProgress: {
            type: cc.Sprite,
            default: null
        },
        hotUpdateBg: {
            type: cc.Node,
            default: null
        },
        view1: {
            type: cc.Node,
            default: null
        },
        view2: {
            type: cc.Node,
            default: null
        },
        _updating: !1,
        _canRetry: !1,
        _storagePath: "",
        lastValue: 0
    },
    onload: function() {
        this.info = this.node.getChildByName("view2").getChildByName("info")
    },
    checkCb: function(e) {
        cc.log("Code: " + e.getEventCode()),
        cc.log("this.info:", this.info);
        var t = !1;
        switch (e.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.info.string = "没有找到本地清单文件，跳过了热更新。",
            console.log("没有找到本地清单文件，跳过了热更新。"),
            t = !0;
            break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                this.info.string = "未能下载清单文件，跳过热更新。",
            console.log("未能下载清单文件，跳过热更新。"),
            t = !0;
            break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                this.info.string = "已经是最新的版本。",
            console.log("已经是最新的版本。"),
            t = !0;
            break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                this.info.string = "找到新版本，正在更新资源。",
            console.log("找到新版本，正在更新资源。"),
            cc.game.emit("needHotUpdate");
            break;
            default: return;
        }
        t && (this._am.setEventCallback(null), this._updateListener = null, this._updating = !1, cc.game.emit("hotUpdateComplete", !0))
    },
    getPercent: function(e, t) {
        return Math.round(e / t * 100) / 100 + "%"
    },
    updateCb: function(e) {
        var t = !1,
        a = !1,
        o = null,
        i = null;
        switch (e.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.info.string = "未找到本地清单文件，跳过了热更新",
            a = !0;
            break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                o || (o = e.getDownloadedBytes() / 1048576, i = e.getTotalBytes() / 1048576),
            this.info.string = "正在更新资源" + o.toFixed(2) + "MB/" + i.toFixed(2) + "MB。",
            this.byteProgress.fillRange = e.getPercent();
            break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                this.info.string = "未能下载清单文件，跳过热更新",
            console.log("未能下载清单文件，跳过热更新"),
            a = !0;
            break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                this.info.string = "已更新到最新远程版本",
            console.log("已更新到最新远程版本"),
            a = !0;
            break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                this.info.string = "更新完成",
            console.log("更新完成"),
            t = !0;
            break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                this.info.string = "更新失败",
            console.log("更新失败"),
            this._updating = !1,
            this._canRetry = !0;
            break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                this.info.string = "资源更新错误",
            console.log("资源更新错误");
            break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                this.info.string = "解压文件错误",
            console.log("解压文件错误");
        }
        if (a && (this._am.setEventCallback(null), this._updateListener = null, this._updating = !1), t) {
            this._am.setEventCallback(null),
            this._updateListener = null;
            var n = jsb.fileUtils.getSearchPaths(),
            r = this._am.getLocalManifest().getSearchPaths();
            Array.prototype.unshift.apply(n, r),
            cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(n)),
            jsb.fileUtils.setSearchPaths(n),
            cc.game.restart(),
            console.log("热更完成")
        }
    },
    retry: function() { ! this._updating && this._canRetry && (this._canRetry = !1, this.info.string = "Retry failed Assets...", this._am.downloadFailedAssets())
    },
    checkUpdate: function() {
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var e = this.manifestUrl.nativeUrl;
            cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e)),
            this._am.loadLocalManifest(e)
        }
        this._am.getLocalManifest() && this._am.getLocalManifest().isLoaded() ? (console.log("检测热更"), this._am.setEventCallback(this.checkCb.bind(this)), this._am.checkUpdate()) : this.info.string = "检查更新,加载本地清单失败"
    },
    hotUpdate: function() {
        if (console.log("点击开始"), this._am && !this._updating) {
            if (this.view1.active = !1, this.view2.active = !0, this._am.setEventCallback(this.updateCb.bind(this)), this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                var e = this.manifestUrl.nativeUrl;
                cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e)),
                this._am.loadLocalManifest(e)
            }
            this._am.update(),
            this._updating = !0
        }
    },
    start: function() {
        if (console.log("update start"), !cc.sys.isNative) return console.log("没进热更"),
        void cc.game.emit("hotUpdateComplete");
        this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "blackjack-remote-asset",
        this.versionCompareHandle = function(e, t) {
            console.log("JS Custom Version Compare: version A is " + e + ", version B is " + t);
            for (var a = e.split("."), o = t.split("."), i = 0; i < a.length; ++i) {
                var n = parseInt(a[i]),
                r = parseInt(o[i] || 0);
                if (n !== r) return n - r
            }
            return o.length > a.length ? -1 : 0
        },
        this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle),
        this._am.setVerifyCallback(function() {
            return ! 0
        }),
        cc.sys.os === cc.sys.OS_ANDROID && this._am.setMaxConcurrentTask(5),
        this.byteProgress.progress = 0,
        this.checkUpdate()
    },
    onDestroy: function() {
        this._updateListener && (this._am.setEventCallback(null), this._updateListener = null)
    }
})