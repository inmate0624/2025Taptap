var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.card_attr_class = a._duidie_view_class = a.renwu_class = a.hechengList_class = a.hecheng_class = a.card_class = a.cardItem_class = void 0;
a.cardItem_class = function() {
    this.TypeNumber = [],
    this.clear = [],
    this.ItemID = []
};
var o = function() {
    this.cradId = 0,
    this.CardName = "",
    this.Type = 0,
    this.isCardLimit = 0,
    this.isSellOut = 0,
    this.Price = 0,
    this.Life = 0,
    this.Satiety = 0,
    this.DemandSatiety = 0,
    this.UseTimes = 0,
    this.IsAttack = 0,
    this.Attack = 0,
    this.AttackCd = 0,
    this.HitRate = 0,
    this.isActivelyLookingForTarget = 0,
    this.TargetType = 0,
    this.IsControlled = 1,
    this.ProcessingCoefficient = 0,
    this.ExplorationCoefficient = 0,
    this.AcquisitionCoefficient = 0
};
a.card_class = o;
a.hecheng_class = function() {
    this.peifang = [],
    this.result = [],
    this.del = [],
    this.type = 1
};
a.hechengList_class = function(e, t, a, o, i) {
    this.type = 0,
    this.hecheng_class = null,
    this.targetCard = null,
    this.selfCard = null,
    this.cardList = null,
    this.type = e,
    this.hecheng_class = t,
    this.targetCard = a,
    this.selfCard = o,
    this.cardList = i
};
a.renwu_class = function() {
    this.Reward = null,
    this.is_result = !1
};
a._duidie_view_class = function() {
    this.cradId = 10001,
    this.id = 0,
    this.is_all_fuhuo = 0,
    this.dayNum = 1,
    this.daySecond = 5,
    this.time = 5,
    this.xiaoDaoIndex = 0,
    this.gamePause = !1,
    this.startGame = !0,
    this.cunminOpen = !1,
    this.cardItemNum = 0,
    this.is_openJinBei = !1,
    this.battleId = 0,
    this.rukou_index = 0,
    this.cardList = [],
    this.cardItemList = [],
    this.TaskList = new Map,
    this.renwu_index = 0,
    this.renwuId = null,
    this.renwu_class = null,
    this.chengjiuMap = new Map
};
a.card_attr_class = function() {
    this.copycardId = 0,
    this.is_active = !0,
    this.is_enable = !1,
    this.dayNum = 0,
    this.guangSize = 0,
    this.guangTime = 0,
    this.isLueDuo = !1,
    this.dumoguTime = 0,
    this.is_siwang = !1,
    this.positionX = 0,
    this.positionY = 0,
    this.cardsIdList = [],
    this.battleTargetIdList = [],
    this.card_class = new o,
    this.card_index = 0,
    this.paichiSwitch = !1,
    this.updateY = !1,
    this.is_move = !1,
    this.is_touch = !1,
    this.id = 0,
    this.is_duidie = !0,
    this.paiqi = !1,
    this.is_zuhe = !0,
    this.is_shopMove = !1,
    this.DemandSatiety = 0,
    this.carJinduTime = -1,
    this.carJinduTimeGuang = -1
}