!function(l, p) {
    "use strict";
    var e;
    function c(t) {
        this.time = t.time,
        this.target = t.target,
        this.rootBounds = t.rootBounds,
        this.boundingClientRect = t.boundingClientRect,
        this.intersectionRect = t.intersectionRect || i(),
        this.isIntersecting = !!t.intersectionRect;
        var e = this.boundingClientRect
          , t = e.width * e.height
          , e = this.intersectionRect
          , e = e.width * e.height;
        this.intersectionRatio = t ? e / t : this.isIntersecting ? 1 : 0
    }
    function t(t, e) {
        var n, o, i, e = e || {};
        if ("function" != typeof t)
            throw new Error("callback must be a function");
        if (e.root && 1 != e.root.nodeType)
            throw new Error("root must be an Element");
        this._checkForIntersections = (n = this._checkForIntersections.bind(this),
        o = this.THROTTLE_TIMEOUT,
        i = null,
        function() {
            i = i || setTimeout(function() {
                n(),
                i = null
            }, o)
        }
        ),
        this._callback = t,
        this._observationTargets = [],
        this._queuedEntries = [],
        this._rootMarginValues = this._parseRootMargin(e.rootMargin),
        this.thresholds = this._initThresholds(e.threshold),
        this.root = e.root || null,
        this.rootMargin = this._rootMarginValues.map(function(t) {
            return t.value + t.unit
        }).join(" ")
    }
    function n(t, e, n, o) {
        "function" == typeof t.addEventListener ? t.addEventListener(e, n, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
    }
    function o(t, e, n, o) {
        "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
    }
    function f(t) {
        var e;
        try {
            e = t.getBoundingClientRect()
        } catch (t) {}
        return e ? e.width && e.height ? e : {
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            width: e.right - e.left,
            height: e.bottom - e.top
        } : i()
    }
    function i() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }
    }
    function r(t, e) {
        for (var n = e; n; ) {
            if (n == t)
                return !0;
            n = d(n)
        }
        return !1
    }
    function d(t) {
        t = t.parentNode;
        return t && 11 == t.nodeType && t.host ? t.host : t
    }
    "IntersectionObserver"in l && "IntersectionObserverEntry"in l && "intersectionRatio"in l.IntersectionObserverEntry.prototype ? "isIntersecting"in l.IntersectionObserverEntry.prototype || Object.defineProperty(l.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function() {
            return 0 < this.intersectionRatio
        }
    }) : (e = [],
    t.prototype.THROTTLE_TIMEOUT = 100,
    t.prototype.POLL_INTERVAL = null,
    t.prototype.USE_MUTATION_OBSERVER = !0,
    t.prototype.observe = function(e) {
        if (!this._observationTargets.some(function(t) {
            return t.element == e
        })) {
            if (!e || 1 != e.nodeType)
                throw new Error("target must be an Element");
            this._registerInstance(),
            this._observationTargets.push({
                element: e,
                entry: null
            }),
            this._monitorIntersections(),
            this._checkForIntersections()
        }
    }
    ,
    t.prototype.unobserve = function(e) {
        this._observationTargets = this._observationTargets.filter(function(t) {
            return t.element != e
        }),
        this._observationTargets.length || (this._unmonitorIntersections(),
        this._unregisterInstance())
    }
    ,
    t.prototype.disconnect = function() {
        this._observationTargets = [],
        this._unmonitorIntersections(),
        this._unregisterInstance()
    }
    ,
    t.prototype.takeRecords = function() {
        var t = this._queuedEntries.slice();
        return this._queuedEntries = [],
        t
    }
    ,
    t.prototype._initThresholds = function(t) {
        t = t || [0];
        return (t = !Array.isArray(t) ? [t] : t).sort().filter(function(t, e, n) {
            if ("number" != typeof t || isNaN(t) || t < 0 || 1 < t)
                throw new Error("threshold must be a number between 0 and 1 inclusively");
            return t !== n[e - 1]
        })
    }
    ,
    t.prototype._parseRootMargin = function(t) {
        t = (t || "0px").split(/\s+/).map(function(t) {
            t = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
            if (!t)
                throw new Error("rootMargin must be specified in pixels or percent");
            return {
                value: parseFloat(t[1]),
                unit: t[2]
            }
        });
        return t[1] = t[1] || t[0],
        t[2] = t[2] || t[0],
        t[3] = t[3] || t[1],
        t
    }
    ,
    t.prototype._monitorIntersections = function() {
        this._monitoringIntersections || (this._monitoringIntersections = !0,
        this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (n(l, "resize", this._checkForIntersections, !0),
        n(p, "scroll", this._checkForIntersections, !0),
        this.USE_MUTATION_OBSERVER && "MutationObserver"in l && (this._domObserver = new MutationObserver(this._checkForIntersections),
        this._domObserver.observe(p, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    }
    ,
    t.prototype._unmonitorIntersections = function() {
        this._monitoringIntersections && (this._monitoringIntersections = !1,
        clearInterval(this._monitoringInterval),
        this._monitoringInterval = null,
        o(l, "resize", this._checkForIntersections, !0),
        o(p, "scroll", this._checkForIntersections, !0),
        this._domObserver && (this._domObserver.disconnect(),
        this._domObserver = null))
    }
    ,
    t.prototype._checkForIntersections = function() {
        var s = this._rootIsInDom()
          , h = s ? this._getRootRect() : i();
        this._observationTargets.forEach(function(t) {
            var e = t.element
              , n = f(e)
              , o = this._rootContainsTarget(e)
              , i = t.entry
              , r = s && o && this._computeTargetAndRootIntersection(e, h)
              , r = t.entry = new c({
                time: l.performance && performance.now && performance.now(),
                target: e,
                boundingClientRect: n,
                rootBounds: h,
                intersectionRect: r
            });
            i ? s && o ? this._hasCrossedThreshold(i, r) && this._queuedEntries.push(r) : i && i.isIntersecting && this._queuedEntries.push(r) : this._queuedEntries.push(r)
        }, this),
        this._queuedEntries.length && this._callback(this.takeRecords(), this)
    }
    ,
    t.prototype._computeTargetAndRootIntersection = function(t, e) {
        if ("none" != l.getComputedStyle(t).display) {
            for (var n, o, i, r, s = f(t), h = d(t), c = !1; !c; ) {
                var u = null
                  , a = 1 == h.nodeType ? l.getComputedStyle(h) : {};
                if ("none" == a.display)
                    return;
                if (h == this.root || h == p ? (c = !0,
                u = e) : h != p.body && h != p.documentElement && "visible" != a.overflow && (u = f(h)),
                u && (n = u,
                o = s,
                u = a = r = i = void 0,
                i = Math.max(n.top, o.top),
                r = Math.min(n.bottom, o.bottom),
                a = Math.max(n.left, o.left),
                u = Math.min(n.right, o.right),
                o = r - i,
                !(s = 0 <= (n = u - a) && 0 <= o && {
                    top: i,
                    bottom: r,
                    left: a,
                    right: u,
                    width: n,
                    height: o
                })))
                    break;
                h = d(h)
            }
            return s
        }
    }
    ,
    t.prototype._getRootRect = function() {
        var t, e;
        return e = this.root ? f(this.root) : (t = p.documentElement,
        e = p.body,
        {
            top: 0,
            left: 0,
            right: t.clientWidth || e.clientWidth,
            width: t.clientWidth || e.clientWidth,
            bottom: t.clientHeight || e.clientHeight,
            height: t.clientHeight || e.clientHeight
        }),
        this._expandRectByRootMargin(e)
    }
    ,
    t.prototype._expandRectByRootMargin = function(n) {
        var t = this._rootMarginValues.map(function(t, e) {
            return "px" == t.unit ? t.value : t.value * (e % 2 ? n.width : n.height) / 100
        })
          , t = {
            top: n.top - t[0],
            right: n.right + t[1],
            bottom: n.bottom + t[2],
            left: n.left - t[3]
        };
        return t.width = t.right - t.left,
        t.height = t.bottom - t.top,
        t
    }
    ,
    t.prototype._hasCrossedThreshold = function(t, e) {
        var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1
          , o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
        if (n !== o)
            for (var i = 0; i < this.thresholds.length; i++) {
                var r = this.thresholds[i];
                if (r == n || r == o || r < n != r < o)
                    return !0
            }
    }
    ,
    t.prototype._rootIsInDom = function() {
        return !this.root || r(p, this.root)
    }
    ,
    t.prototype._rootContainsTarget = function(t) {
        return r(this.root || p, t)
    }
    ,
    t.prototype._registerInstance = function() {
        e.indexOf(this) < 0 && e.push(this)
    }
    ,
    t.prototype._unregisterInstance = function() {
        var t = e.indexOf(this);
        -1 != t && e.splice(t, 1)
    }
    ,
    l.IntersectionObserver = t,
    l.IntersectionObserverEntry = c)
}(window, document);
