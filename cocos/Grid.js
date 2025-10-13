var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.Grid = void 0;
var o = e("Point"),
i = function() {
    function e(e, t) {
        this._numCols = e,
        this._numRows = t,
        this._nodes = [];
        for (var a = 0; a < e; a++) {
            this._nodes[a] = [];
            for (var i = 0; i < t; i++) this._nodes[a][i] = new o.Point(a, i)
        }
    }
    return e.prototype.getNode = function(e, t) {
        return this._nodes[e][t]
    },
    e.prototype.setGridNode = function(e, t, a, o) {
        this._endNode = this._nodes[a][o],
        this._startNode = this._nodes[e][t]
    },
    e.prototype.setWalkable = function(e, t, a) {
        this._nodes[e][t].walkable = a
    },
    Object.defineProperty(e.prototype, "startNode", {
        get: function() {
            return this._startNode
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "endNode", {
        get: function() {
            return this._endNode
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "numCols", {
        get: function() {
            return this._numCols
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "numRows", {
        get: function() {
            return this._numRows
        },
        enumerable: !1,
        configurable: !0
    }),
    e
} ();
a.Grid = i