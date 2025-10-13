var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.LQConst = a.LQOperateType = a.LQLevelStatus = a.LQAdErrStr = a.LQCallAd = a.LQCallBase = a.LQAnalysisTag = a.LQByteDanceType = a.LQPlatformType = a.LQHttpDataType = a.LQHttpRequestType = a.LQEasing = a.LQCollideStatus = a.LQFollowTargetMode = a.LQCollideShape = a.LQBulletEmitterStatus = a.LQRecordStatus = void 0;
var o = cc.Vec2; (function(e) {
    e[e.Idle = 0] = "Idle",
    e[e.Start = 1] = "Start",
    e[e.Pause = 2] = "Pause"
})(a.LQRecordStatus || (a.LQRecordStatus = {})),
function(e) {
    e[e.Idle = 0] = "Idle",
    e[e.Start = 1] = "Start",
    e[e.End = 2] = "End"
} (a.LQBulletEmitterStatus || (a.LQBulletEmitterStatus = {})),
function(e) {
    e[e.Rect = 1] = "Rect",
    e[e.Circle = 2] = "Circle",
    e[e.Polygon = 3] = "Polygon"
} (a.LQCollideShape || (a.LQCollideShape = {})),
function(e) {
    e[e.Always = 0] = "Always",
    e[e.Once = 1] = "Once",
    e[e.Pass = 2] = "Pass"
} (a.LQFollowTargetMode || (a.LQFollowTargetMode = {})),
function(e) {
    e[e.Idle = 0] = "Idle",
    e[e.Live = 1] = "Live"
} (a.LQCollideStatus || (a.LQCollideStatus = {})),
function(e) {
    e.BackIn = "backIn",
    e.BackOut = "backOut",
    e.quadIn = "quadIn",
    e.quadOut = "quadOut",
    e.quadInOut = "quadInOut",
    e.cubicIn = "cubicIn",
    e.expoOut = "expoOut"
} (a.LQEasing || (a.LQEasing = {})),
function(e) {
    e.Get = "get",
    e.Post = "post"
} (a.LQHttpRequestType || (a.LQHttpRequestType = {})),
function(e) {
    e[e.Text = 0] = "Text",
    e[e.Binary = 1] = "Binary"
} (a.LQHttpDataType || (a.LQHttpDataType = {})),
function(e) {
    e.unknown = "未知平台",
    e.all = "全平台",
    e.wx = "微信",
    e.tt = "字节跳动",
    e.oppo = "oppo",
    e.vivo = "vivo",
    e.qq = "qq",
    e.baidu = "百度",
    e.kwaigame = "快手",
    e.android = "安卓",
    e.ios = "苹果",
    e.browser = "浏览器"
} (a.LQPlatformType || (a.LQPlatformType = {})),
function(e) {
    e.tt = "头条",
    e.tt_lite = "头条极速版",
    e.douyin = "抖音",
    e.douyin_lite = "抖音极速版",
    e.ppx = "皮皮虾",
    e.devtools = "字节开发工具"
} (a.LQByteDanceType || (a.LQByteDanceType = {})),
function(e) {
    e.VideoComplete = "video_complete",
    e.VideoBegin = "video_begin",
    e.VideoInterrupt = "video_interrupt",
    e.InterstitialShow = "interstitial_show",
    e.BannerShow = "banner_show",
    e.ExportShow = "export_show",
    e.NativeShow = "native_show",
    e.NativeClick = "native_show"
} (a.LQAnalysisTag || (a.LQAnalysisTag = {})),
function(e) {
    e[e.InitSdk = 0] = "InitSdk",
    e[e.KeepScreenOn = 1] = "KeepScreenOn",
    e[e.Vibrate = 2] = "Vibrate",
    e[e.GetVersionCode = 3] = "GetVersionCode",
    e[e.GetVersionName = 4] = "GetVersionName",
    e[e.OpenUrl = 5] = "OpenUrl",
    e[e.DeleteDir = 6] = "DeleteDir",
    e[e.DeleteFile = 7] = "DeleteFile"
} (a.LQCallBase || (a.LQCallBase = {})),
function(e) {
    e[e.ShowBanner = 0] = "ShowBanner",
    e[e.HideBanner = 1] = "HideBanner",
    e[e.ShowVideo = 2] = "ShowVideo",
    e[e.ShowInterstitial = 3] = "ShowInterstitial",
    e[e.ShowNative = 4] = "ShowNative",
    e[e.CacheAd = 5] = "CacheAd"
} (a.LQCallAd || (a.LQCallAd = {})),
function(e) {
    e.Unsupported = "不支持",
    e.NoParameters = "没有配置参数",
    e.NoAD = "暂无广告",
    e.VersionOld = "版本过低",
    e.VideoInterrupt = "中断播放",
    e.InstanceErr = "实例为空",
    e.AlreadyExist = "已经存在",
    e.IntervalTooShort = "间隔太短"
} (a.LQAdErrStr || (a.LQAdErrStr = {})),
function(e) {
    e[e.Begin = 0] = "Begin",
    e[e.Failed = 1] = "Failed",
    e[e.Complete = 2] = "Complete"
} (a.LQLevelStatus || (a.LQLevelStatus = {})),
function(e) {
    e[e.ClickNode = 0] = "ClickNode",
    e[e.ClickScreen = 1] = "ClickScreen",
    e[e.Move = 2] = "Move",
    e[e.Null = 3] = "Null"
} (a.LQOperateType || (a.LQOperateType = {}));
var i = function() {
    function e() {}
    return e.VEC_ZERO = o.ZERO,
    e
} ();
a.LQConst = i