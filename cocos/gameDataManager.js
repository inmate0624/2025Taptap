var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a._gameStateData = a._userData = a.UserDataManger = void 0;
var o = e("enum_type"),
i = e("classManger"),
n = e("commonFunction"),
r = e("storageManager"),
c = e("DATA"),
s = e("classManger"),
d = function() {
    function e(e) {
        this.initUserData = c.DATA.userData,
        this.userData = c.DATA.userData,
        r.default.init();
        var t = r.default.ins.getData("userData:" + e);
        if (this.userData = JSON.parse(JSON.stringify(this.initUserData)), console.log("-----------用户数据3333333：", this.userData), t) {
            t = JSON.parse(t);
            for (var a = 0,
            o = Object.keys(t); a < o.length; a++) {
                var i = o[a];
                null != this.userData[i] && (this.userData[i] = t[i])
            }
        } else this.userData = this.initUserData,
        this.userData.username = e;
        this.getJsonData()
    }
    return e.getInstace = function() {
        return this._instace || (this._instace = new e("kgmh"), a._userData = this._instace.getUser()),
        this._instace
    },
    e.prototype.getUser = function() {
        return this.userData
    },
    e.prototype.getUsername = function() {
        return this.userData.username
    },
    e.prototype.getAllData = function() {
        return this.userData
    },
    e.prototype.updateUserData = function(e) {
        e = e.data;
        for (var t = 0,
        a = Object.keys(e); t < a.length; t++) {
            var o = a[t];
            e[o] && (this.userData[o] = e[o])
        }
        this.preseverData()
    },
    e.prototype.preseverData = function() {
        r.default.ins.storageData("userData:" + this.userData.username, JSON.stringify(this.userData))
    },
    e.preData = function() {
        e.getInstace().preseverData()
    },
    e.prototype.removeData = function(e) {
        r.default.ins.removeData(e)
    },
    e.prototype.initData = function() {
        this.userData = this.initUserData,
        this.preseverData()
    },
    e.prototype.clearData = function() {
        cc.sys.localStorage.clear(),
        this.initData()
    },
    e.prototype.getJsonData = function(e) {
        void 0 === e && (e = ""),
        cc.resources.load("json/EventTimeline", cc.JsonAsset,
        function(e, t) {
            if (e) return n.commonTool.appLog("加载EventTimeline.json文件出错:", e);
            a._gameStateData.EventTimeline = t.json
        }),
        cc.resources.load("json/EventList", cc.JsonAsset,
        function(e, t) {
            if (e) return n.commonTool.appLog("加载EventList.json文件出错:", e);
            a._gameStateData.EventList = t.json
        }),
        cc.resources.load("json/StrangeEntrance", cc.JsonAsset,
        function(e, t) {
            if (e) return n.commonTool.appLog("加载StrangeEntrance.json文件出错:", e);
            a._gameStateData.StrangeEntrance = t.json
        }),
        cc.resources.load("json/Achievement", cc.JsonAsset,
        function(e, t) {
            if (e) return n.commonTool.appLog("加载Achievement.json文件出错:", e);
            a._gameStateData.Achievement = t.json
        }),
        cc.resources.load("json/StackableGroup", cc.JsonAsset,
        function(e, t) {
            if (e) return n.commonTool.appLog("加载StackableGroup.json文件出错:", e);
            a._gameStateData.StackableGroup = t.json
        }),
        cc.resources.load("json/IdeaAttr", cc.JsonAsset,
        function(e, t) {
            if (e) return n.commonTool.appLog("加载IdeaAttr.json文件出错:", e);
            a._gameStateData.IdeaAttr = t.json
        }),
        cc.resources.load("json/CardSynthesis", cc.JsonAsset,
        function(e, t) {
            if (e) return n.commonTool.appLog("加载CardSynthesis.json文件出错:", e);
            var o = t.json;
            for (var i in o) if (Object.prototype.hasOwnProperty.call(o, i)) {
                var r = o[i],
                c = new s.hecheng_class;
                for (var d in r) if (Object.prototype.hasOwnProperty.call(r, d)) {
                    var l = r[d];
                    c[d] = l,
                    c.id = i
                }
                a._gameStateData.CardSynthesis.set(i, c)
            }
        }),
        cc.resources.load("json/CardsList", cc.JsonAsset,
        function(e, t) {
            if (e) return n.commonTool.appLog("加载CardsList.json文件出错:", e);
            a._gameStateData.CardsList = t.json
        }),
        cc.resources.load("json/CardAttri", cc.JsonAsset,
        function(e, t) {
            if (e) return n.commonTool.appLog("加载CardAttri.json文件出错:", e);
            a._gameStateData.CardAttri = t.json
        }),
        cc.resources.load("json/CardItemAttr", cc.JsonAsset,
        function(e, t) {
            if (e) return n.commonTool.appLog("加载CardItemAttr.json文件出错:", e);
            a._gameStateData.CardItemAttr = t.json
        }),
        cc.resources.load("json/TaskList", cc.JsonAsset,
        function(e, t) {
            if (e) return n.commonTool.appLog("加载TaskList.json文件出错:", e);
            var o = t.json;
            for (var r in o) if (Object.prototype.hasOwnProperty.call(o, r)) {
                var c = o[r],
                s = new i.renwu_class;
                for (var d in c) if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var l = c[d];
                    s[d] = l,
                    s.id = r
                }
                a._gameStateData.TaskList.set(r, s)
            }
        }),
        cc.resources.load("json/AnimalsDropItem", cc.JsonAsset,
        function(e, t) {
            if (e) return n.commonTool.appLog("加载AnimalsDropItem.json文件出错:", e);
            a._gameStateData.AnimalsDropItem = t.json
        })
    },
    e
} ();
a.UserDataManger = d,
a._userData = void 0,
a._gameStateData = new
function() {
    this.is_video = !0,
    this.isDouBtn = !1,
    this.isGongGao = !1,
    this.startGmaeTime = 0,
    this.sceneName = "mainScene",
    this.scene = null,
    this.node_result = 0,
    this.sceneId = 0,
    this.is_pause = !1,
    this.daySecond = 120,
    this.caozuo_state = 1,
    this.StackableGroup = null,
    this.IdeaAttr = null,
    this.CardSynthesis = new Map,
    this.TaskList = new Map,
    this.CardsList = null,
    this.CardAttri = null,
    this.CardItemAttr = null,
    this.EventList = null,
    this.EventTimeline = null,
    this.StrangeEntrance = null,
    this.AnimalsDropItem = null,
    this.lantuCardList = [],
    this.Achievement = [],
    this.lantuCardIdList = [o.cardNameOrId.仓库, o.cardNameOrId.伐木厂, o.cardNameOrId.农场, o.cardNameOrId.冶炼厂, o.cardNameOrId.剑, o.cardNameOrId.动物围栏, o.cardNameOrId.奶昔, o.cardNameOrId.婴儿, o.cardNameOrId.寺庙, o.cardNameOrId.房子, o.cardNameOrId.木板, o.cardNameOrId.树枝, o.cardNameOrId.棚子, o.cardNameOrId.水果沙拉, o.cardNameOrId.火炉, o.cardNameOrId.炖菜, o.cardNameOrId.煎蛋卷, o.cardNameOrId.煎饼, o.cardNameOrId.熟肉, o.cardNameOrId.矛, o.cardNameOrId.砖, o.cardNameOrId.砖厂, o.cardNameOrId.篝火, o.cardNameOrId.花园, o.cardNameOrId.采石场, o.cardNameOrId.采矿场, o.cardNameOrId.金币箱, o.cardNameOrId.铁棒, o.cardNameOrId.铁矿, o.cardNameOrId.锯木厂, o.cardNameOrId.集市, o.cardNameOrId.鸡],
    this.foodNameArray = ["熟肉", "奶昔", "煎饼", "水果沙拉", "煎蛋卷", "炖菜", "浆果", "牛奶", "洋葱", "蘑菇", "胡萝卜", "苹果", "干粮", "海藻", "鱼", "鱼干", "烤鱼", "浆果", "椰子", "鱼罐头", "鱼汤", "果汁", "烤肉", "树菇", "蘑菇汤", "烤蘑菇", "吃过的苹果", "饼干", "压缩干粮", "超级能量棒", "毒蘑菇"],
    this.teshuCard = [o.cardNameOrId.炸弹, o.cardNameOrId.奇怪的入口, o.cardNameOrId.丧尸, o.cardNameOrId.病毒, o.cardNameOrId.地下墓穴, o.cardNameOrId.鸡, o.cardNameOrId.牛, o.cardNameOrId.兔子, o.cardNameOrId.金币箱, o.cardNameOrId.熊, o.cardNameOrId.恶魔, o.cardNameOrId.大老鼠, o.cardNameOrId.哥布林, o.cardNameOrId.小老鼠, o.cardNameOrId.骷髅, o.cardNameOrId.史莱姆, o.cardNameOrId.小史莱姆, o.cardNameOrId.狼, o.cardNameOrId.食人鱼, o.cardNameOrId.虎鲨, o.cardNameOrId.大白鲨, o.cardNameOrId.噬人鲨, o.cardNameOrId.章鱼, o.cardNameOrId.虎鲸, o.cardNameOrId.海盗, o.cardNameOrId.海盗精英, o.cardNameOrId.海盗船长, o.cardNameOrId.暗流, o.cardNameOrId.蜘蛛, o.cardNameOrId.老鼠, o.cardNameOrId.生化巨人, o.cardNameOrId.生化病毒, o.cardNameOrId.疯狗, o.cardNameOrId.掠夺者, o.cardNameOrId.丧尸, o.cardNameOrId.狂暴丧尸],
    this.guaiwuCard = [o.cardNameOrId.熊, o.cardNameOrId.恶魔, o.cardNameOrId.大老鼠, o.cardNameOrId.哥布林, o.cardNameOrId.小老鼠, o.cardNameOrId.骷髅, o.cardNameOrId.史莱姆, o.cardNameOrId.小史莱姆, o.cardNameOrId.狼, o.cardNameOrId.丧尸, o.cardNameOrId.病毒, o.cardNameOrId.食人鱼, o.cardNameOrId.虎鲨, o.cardNameOrId.大白鲨, o.cardNameOrId.噬人鲨, o.cardNameOrId.章鱼, o.cardNameOrId.虎鲸, o.cardNameOrId.海盗, , o.cardNameOrId.海盗精英, o.cardNameOrId.海盗船长, o.cardNameOrId.蜘蛛, o.cardNameOrId.老鼠, o.cardNameOrId.生化巨人, o.cardNameOrId.生化病毒, o.cardNameOrId.疯狗, o.cardNameOrId.掠夺者, o.cardNameOrId.丧尸, o.cardNameOrId.狂暴丧尸],
    this.renwuIdArray = [],
    this.selectCardLists = [],
    this.userMaxDayNum = 0,
    this.userCardRenNum = 0
}