var e = require;
var t = module;
var a = exports;
Object.defineProperty(a, "__esModule", {
    value: !0
}),
a.AStar = void 0;
var o = function() {
    function e() {
        this._straightCost = 1,
        this._heuristic = this.manhattan
    }
    return e.prototype.findPath = function(e) {
        return this._grid = e,
        this._open = [],
        this._closed = [],
        this._startNode = this._grid.startNode,
        this._endNode = this._grid.endNode,
        this._startNode.g = 0,
        this._startNode.h = this._heuristic(this._startNode),
        this._startNode.f = this._startNode.g + this._startNode.h,
        this.search()
    },
    e.prototype.search = function() {
        for (var e = this._startNode; e != this._endNode;) {
            for (var t = Math.max(0, e.x - 1), a = Math.min(this._grid.numCols - 1, e.x + 1), o = Math.max(0, e.y - 1), i = Math.min(this._grid.numRows - 1, e.y + 1), n = t; n <= a; n++) for (var r = o; r <= i; r++) if (n == e.x || r == e.y) {
                var c = this._grid.getNode(n, r);
                if (c != e && c.walkable && this._grid.getNode(e.x, c.y).walkable && this._grid.getNode(c.x, e.y).walkable) {
                    var s = this._straightCost,
                    d = e.g + s * c.costMultiplier,
                    l = this._heuristic(c),
                    u = d + l;
                    this.isOpen(c) || this.isClosed(c) ? c.f > u && (c.f = u, c.g = d, c.h = l, c.parent = e) : (c.f = u, c.g = d, c.h = l, c.parent = e, this._open.push(c))
                }
            }
            if (this._closed.push(e), 0 == this._open.length) return ! 1;
            for (var p = this._open.length,
            h = 0; h < p; h++) for (var _ = h + 1; _ < p; _++) if (this._open[h].f > this._open[_].f) {
                var f = this._open[h];
                this._open[h] = this._open[_],
                this._open[_] = f
            }
            e = this._open.shift()
        }
        for (this._path = new Array, e = this._endNode, this._path.push(e); e != this._startNode;) e = e.parent,
        this._path.unshift(e);
        return ! 0
    },
    Object.defineProperty(e.prototype, "path", {
        get: function() {
            return this._path
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.isOpen = function(e) {
        for (var t = 0; t < this._open.length; t++) if (this._open[t] == e) return ! 0;
        return ! 1
    },
    e.prototype.isClosed = function(e) {
        for (var t = 0; t < this._closed.length; t++) if (this._closed[t] == e) return ! 0;
        return ! 1
    },
    e.prototype.manhattan = function(e) {
        return Math.abs(e.x - this._endNode.x) * this._straightCost + Math.abs(e.y + this._endNode.y) * this._straightCost
    },
    Object.defineProperty(e.prototype, "visited", {
        get: function() {
            return this._closed.concat(this._open)
        },
        enumerable: !1,
        configurable: !0
    }),
    e
} ();
a.AStar = o