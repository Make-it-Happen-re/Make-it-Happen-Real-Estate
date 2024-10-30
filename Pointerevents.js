/*!
 * PEP v0.4.3 | https://github.com/jquery/PEP
 * Copyright jQuery Foundation and other contributors | http://jquery.org/license
 */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.PointerEventsPolyfill = e()
}(this, function() {
    "use strict";
    var o = ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget", "pageX", "pageY"]
      , s = [!1, !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0];
    function r(t, e) {
        e = e || Object.create(null);
        var n = document.createEvent("Event");
        n.initEvent(t, e.bubbles || !1, e.cancelable || !1);
        for (var i, r = 2; r < o.length; r++)
            n[i = o[r]] = e[i] || s[r];
        n.buttons = e.buttons || 0;
        t = 0,
        t = e.pressure && n.buttons ? e.pressure : n.buttons ? .5 : 0;
        return n.x = n.clientX,
        n.y = n.clientY,
        n.pointerId = e.pointerId || 0,
        n.width = e.width || 0,
        n.height = e.height || 0,
        n.pressure = t,
        n.tiltX = e.tiltX || 0,
        n.tiltY = e.tiltY || 0,
        n.twist = e.twist || 0,
        n.tangentialPressure = e.tangentialPressure || 0,
        n.pointerType = e.pointerType || "",
        n.hwTimestamp = e.hwTimestamp || 0,
        n.isPrimary = e.isPrimary || !1,
        n
    }
    var t = window.Map && window.Map.prototype.forEach ? Map : e;
    function e() {
        this.array = [],
        this.size = 0
    }
    var a = ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget", "buttons", "pointerId", "width", "height", "pressure", "tiltX", "tiltY", "pointerType", "hwTimestamp", "isPrimary", "type", "target", "currentTarget", "which", "pageX", "pageY", "timeStamp"]
      , u = [!(e.prototype = {
        set: function(t, e) {
            if (void 0 === e)
                return this.delete(t);
            this.has(t) || this.size++,
            this.array[t] = e
        },
        has: function(t) {
            return void 0 !== this.array[t]
        },
        delete: function(t) {
            this.has(t) && (delete this.array[t],
            this.size--)
        },
        get: function(t) {
            return this.array[t]
        },
        clear: function() {
            this.array.length = 0,
            this.size = 0
        },
        forEach: function(n, i) {
            return this.array.forEach(function(t, e) {
                n.call(i, t, e, this)
            }, this)
        }
    }), !1, null, null, 0, 0, 0, 0, !1, !1, !1, !1, 0, null, 0, 0, 0, 0, 0, 0, 0, "", 0, !1, "", null, null, 0, 0, 0, 0]
      , n = {
        pointerover: 1,
        pointerout: 1,
        pointerenter: 1,
        pointerleave: 1
    }
      , c = "undefined" != typeof SVGElementInstance
      , h = {
        pointermap: new t,
        eventMap: Object.create(null),
        captureInfo: Object.create(null),
        eventSources: Object.create(null),
        eventSourceList: [],
        registerSource: function(t, e) {
            var n = e
              , e = n.events;
            e && (e.forEach(function(t) {
                n[t] && (this.eventMap[t] = n[t].bind(n))
            }, this),
            this.eventSources[t] = n,
            this.eventSourceList.push(n))
        },
        register: function(t) {
            for (var e, n = this.eventSourceList.length, i = 0; i < n && (e = this.eventSourceList[i]); i++)
                e.register.call(e, t)
        },
        unregister: function(t) {
            for (var e, n = this.eventSourceList.length, i = 0; i < n && (e = this.eventSourceList[i]); i++)
                e.unregister.call(e, t)
        },
        contains: function(t, e) {
            try {
                return t.contains(e)
            } catch (t) {
                return !1
            }
        },
        down: function(t) {
            t.bubbles = !0,
            this.fireEvent("pointerdown", t)
        },
        move: function(t) {
            t.bubbles = !0,
            this.fireEvent("pointermove", t)
        },
        up: function(t) {
            t.bubbles = !0,
            this.fireEvent("pointerup", t)
        },
        enter: function(t) {
            t.bubbles = !1,
            this.fireEvent("pointerenter", t)
        },
        leave: function(t) {
            t.bubbles = !1,
            this.fireEvent("pointerleave", t)
        },
        over: function(t) {
            t.bubbles = !0,
            this.fireEvent("pointerover", t)
        },
        out: function(t) {
            t.bubbles = !0,
            this.fireEvent("pointerout", t)
        },
        cancel: function(t) {
            t.bubbles = !0,
            this.fireEvent("pointercancel", t)
        },
        leaveOut: function(t) {
            this.out(t),
            this.propagate(t, this.leave, !1)
        },
        enterOver: function(t) {
            this.over(t),
            this.propagate(t, this.enter, !0)
        },
        eventHandler: function(t) {
            var e;
            t._handledByPE || (e = t.type,
            (e = this.eventMap && this.eventMap[e]) && e(t),
            t._handledByPE = !0)
        },
        listen: function(e, t) {
            t.forEach(function(t) {
                this.addEvent(e, t)
            }, this)
        },
        unlisten: function(e, t) {
            t.forEach(function(t) {
                this.removeEvent(e, t)
            }, this)
        },
        addEvent: function(t, e) {
            t.addEventListener(e, this.boundHandler)
        },
        removeEvent: function(t, e) {
            t.removeEventListener(e, this.boundHandler)
        },
        makeEvent: function(t, e) {
            this.captureInfo[e.pointerId] && (e.relatedTarget = null);
            t = new r(t,e);
            return e.preventDefault && (t.preventDefault = e.preventDefault),
            t._target = t._target || e.target,
            t
        },
        fireEvent: function(t, e) {
            e = this.makeEvent(t, e);
            return this.dispatchEvent(e)
        },
        cloneEvent: function(t) {
            for (var e, n = Object.create(null), i = 0; i < a.length; i++)
                n[e = a[i]] = t[e] || u[i],
                !c || "target" !== e && "relatedTarget" !== e || n[e]instanceof SVGElementInstance && (n[e] = n[e].correspondingUseElement);
            return t.preventDefault && (n.preventDefault = function() {
                t.preventDefault()
            }
            ),
            n
        },
        getTarget: function(t) {
            var e = this.captureInfo[t.pointerId];
            return e ? t._target !== e && t.type in n ? void 0 : e : t._target
        },
        propagate: function(e, n, t) {
            for (var i = e.target, r = []; i !== document && !i.contains(e.relatedTarget); )
                if (r.push(i),
                !(i = i.parentNode))
                    return;
            t && r.reverse(),
            r.forEach(function(t) {
                e.target = t,
                n.call(this, e)
            }, this)
        },
        setCapture: function(t, e, n) {
            this.captureInfo[t] && this.releaseCapture(t, n),
            this.captureInfo[t] = e,
            this.implicitRelease = this.releaseCapture.bind(this, t, n),
            document.addEventListener("pointerup", this.implicitRelease),
            document.addEventListener("pointercancel", this.implicitRelease);
            var i = new r("gotpointercapture");
            i.pointerId = t,
            i._target = e,
            n || this.asyncDispatchEvent(i)
        },
        releaseCapture: function(t, e) {
            var n, i = this.captureInfo[t];
            i && (this.captureInfo[t] = void 0,
            document.removeEventListener("pointerup", this.implicitRelease),
            document.removeEventListener("pointercancel", this.implicitRelease),
            (n = new r("lostpointercapture")).pointerId = t,
            n._target = i,
            e || this.asyncDispatchEvent(n))
        },
        dispatchEvent: function(t) {
            var e = this.getTarget(t);
            if (e)
                return e.dispatchEvent(t)
        },
        asyncDispatchEvent: function(t) {
            requestAnimationFrame(this.dispatchEvent.bind(this, t))
        }
    };
    h.boundHandler = h.eventHandler.bind(h);
    var i = {
        shadow: function(t) {
            if (t)
                return t.shadowRoot || t.webkitShadowRoot
        },
        canTarget: function(t) {
            return t && Boolean(t.elementFromPoint)
        },
        targetingShadow: function(t) {
            t = this.shadow(t);
            if (this.canTarget(t))
                return t
        },
        olderShadow: function(t) {
            var e = t.olderShadowRoot;
            return e || (t = t.querySelector("shadow")) && (e = t.olderShadowRoot),
            e
        },
        allShadows: function(t) {
            for (var e = [], n = this.shadow(t); n; )
                e.push(n),
                n = this.olderShadow(n);
            return e
        },
        searchRoot: function(t, e, n) {
            if (t) {
                for (var i, t = t.elementFromPoint(e, n), r = this.targetingShadow(t); r; ) {
                    if (i = r.elementFromPoint(e, n)) {
                        var o = this.targetingShadow(i);
                        return this.searchRoot(o, e, n) || i
                    }
                    r = this.olderShadow(r)
                }
                return t
            }
        },
        owner: function(t) {
            for (var e = t; e.parentNode; )
                e = e.parentNode;
            return e = e.nodeType !== Node.DOCUMENT_NODE && e.nodeType !== Node.DOCUMENT_FRAGMENT_NODE ? document : e
        },
        findTarget: function(t) {
            var e = t.clientX
              , n = t.clientY
              , t = this.owner(t.target);
            return t.elementFromPoint(e, n) || (t = document),
            this.searchRoot(t, e, n)
        }
    }
      , l = Array.prototype.forEach.call.bind(Array.prototype.forEach)
      , p = Array.prototype.map.call.bind(Array.prototype.map)
      , d = Array.prototype.slice.call.bind(Array.prototype.slice)
      , v = Array.prototype.filter.call.bind(Array.prototype.filter)
      , f = window.MutationObserver || window.WebKitMutationObserver
      , m = {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0,
        attributeFilter: ["touch-action"]
    };
    function E(t, e, n, i) {
        this.addCallback = t.bind(i),
        this.removeCallback = e.bind(i),
        this.changedCallback = n.bind(i),
        f && (this.observer = new f(this.mutationWatcher.bind(this)))
    }
    function b(t) {
        return "body /shadow-deep/ " + T(t)
    }
    function T(t) {
        return '[touch-action="' + t + '"]'
    }
    function y(t) {
        return "{ -ms-touch-action: " + t + "; touch-action: " + t + "; }"
    }
    E.prototype = {
        watchSubtree: function(t) {
            this.observer && i.canTarget(t) && this.observer.observe(t, m)
        },
        enableOnSubtree: function(t) {
            this.watchSubtree(t),
            t === document && "complete" !== document.readyState ? this.installOnLoad() : this.installNewSubtree(t)
        },
        installNewSubtree: function(t) {
            l(this.findElements(t), this.addElement, this)
        },
        findElements: function(t) {
            return t.querySelectorAll ? t.querySelectorAll("[touch-action]") : []
        },
        removeElement: function(t) {
            this.removeCallback(t)
        },
        addElement: function(t) {
            this.addCallback(t)
        },
        elementChanged: function(t, e) {
            this.changedCallback(t, e)
        },
        concatLists: function(t, e) {
            return t.concat(d(e))
        },
        installOnLoad: function() {
            document.addEventListener("readystatechange", function() {
                "complete" === document.readyState && this.installNewSubtree(document)
            }
            .bind(this))
        },
        isElement: function(t) {
            return t.nodeType === Node.ELEMENT_NODE
        },
        flattenMutationTree: function(t) {
            var e = p(t, this.findElements, this);
            return e.push(v(t, this.isElement)),
            e.reduce(this.concatLists, [])
        },
        mutationWatcher: function(t) {
            t.forEach(this.mutationHandler, this)
        },
        mutationHandler: function(t) {
            "childList" === t.type ? (this.flattenMutationTree(t.addedNodes).forEach(this.addElement, this),
            this.flattenMutationTree(t.removedNodes).forEach(this.removeElement, this)) : "attributes" === t.type && this.elementChanged(t.target, t.oldValue)
        }
    };
    var g = ["none", "auto", "pan-x", "pan-y", {
        rule: "pan-x pan-y",
        selectors: ["pan-x pan-y", "pan-y pan-x"]
    }]
      , w = ""
      , P = window.PointerEvent || window.MSPointerEvent
      , S = !window.ShadowDOMPolyfill && document.head.createShadowRoot;
    var O = h.pointermap
      , I = [1, 4, 2, 8, 16]
      , M = !1;
    try {
        M = 1 === new MouseEvent("test",{
            buttons: 1
        }).buttons
    } catch (t) {}
    var C = {
        POINTER_ID: 1,
        POINTER_TYPE: "mouse",
        events: ["mousedown", "mousemove", "mouseup", "mouseover", "mouseout"],
        register: function(t) {
            h.listen(t, this.events)
        },
        unregister: function(t) {
            h.unlisten(t, this.events)
        },
        lastTouches: [],
        isEventSimulatedFromTouch: function(t) {
            for (var e, n = this.lastTouches, i = t.clientX, r = t.clientY, o = 0, s = n.length; o < s && (e = n[o]); o++) {
                var a = Math.abs(i - e.x)
                  , u = Math.abs(r - e.y);
                if (a <= 25 && u <= 25)
                    return !0
            }
        },
        prepareEvent: function(t) {
            var e = h.cloneEvent(t)
              , n = e.preventDefault;
            return e.preventDefault = function() {
                t.preventDefault(),
                n()
            }
            ,
            e.pointerId = this.POINTER_ID,
            e.isPrimary = !0,
            e.pointerType = this.POINTER_TYPE,
            e
        },
        prepareButtonsForMove: function(t, e) {
            var n = O.get(this.POINTER_ID);
            0 !== e.which && n ? t.buttons = n.buttons : t.buttons = 0,
            e.buttons = t.buttons
        },
        mousedown: function(t) {
            var e, n;
            this.isEventSimulatedFromTouch(t) || (e = O.get(this.POINTER_ID),
            n = this.prepareEvent(t),
            M || (n.buttons = I[n.button],
            e && (n.buttons |= e.buttons),
            t.buttons = n.buttons),
            O.set(this.POINTER_ID, t),
            e && 0 !== e.buttons ? h.move(n) : h.down(n))
        },
        mousemove: function(t) {
            var e;
            this.isEventSimulatedFromTouch(t) || (e = this.prepareEvent(t),
            M || this.prepareButtonsForMove(e, t),
            e.button = -1,
            O.set(this.POINTER_ID, t),
            h.move(e))
        },
        mouseup: function(t) {
            var e, n, i;
            this.isEventSimulatedFromTouch(t) || (e = O.get(this.POINTER_ID),
            n = this.prepareEvent(t),
            M || (i = I[n.button],
            n.buttons = e ? e.buttons & ~i : 0,
            t.buttons = n.buttons),
            O.set(this.POINTER_ID, t),
            n.buttons &= ~I[n.button],
            0 === n.buttons ? h.up(n) : h.move(n))
        },
        mouseover: function(t) {
            var e;
            this.isEventSimulatedFromTouch(t) || (e = this.prepareEvent(t),
            M || this.prepareButtonsForMove(e, t),
            e.button = -1,
            O.set(this.POINTER_ID, t),
            h.enterOver(e))
        },
        mouseout: function(t) {
            var e;
            this.isEventSimulatedFromTouch(t) || (e = this.prepareEvent(t),
            M || this.prepareButtonsForMove(e, t),
            e.button = -1,
            h.leaveOut(e))
        },
        cancel: function(t) {
            t = this.prepareEvent(t);
            h.cancel(t),
            this.deactivateMouse()
        },
        deactivateMouse: function() {
            O.delete(this.POINTER_ID)
        }
    }
      , R = h.captureInfo
      , Y = i.findTarget.bind(i)
      , N = i.allShadows.bind(i)
      , _ = h.pointermap
      , D = "touch-action"
      , L = {
        events: ["touchstart", "touchmove", "touchend", "touchcancel"],
        register: function(t) {
            X.enableOnSubtree(t)
        },
        unregister: function() {},
        elementAdded: function(t) {
            var e = t.getAttribute(D)
              , n = this.touchActionToScrollType(e);
            n && (t._scrollType = n,
            h.listen(t, this.events),
            N(t).forEach(function(t) {
                t._scrollType = n,
                h.listen(t, this.events)
            }, this))
        },
        elementRemoved: function(t) {
            t._scrollType = void 0,
            h.unlisten(t, this.events),
            N(t).forEach(function(t) {
                t._scrollType = void 0,
                h.unlisten(t, this.events)
            }, this)
        },
        elementChanged: function(t, e) {
            var n = t.getAttribute(D)
              , i = this.touchActionToScrollType(n)
              , e = this.touchActionToScrollType(e);
            i && e ? (t._scrollType = i,
            N(t).forEach(function(t) {
                t._scrollType = i
            }, this)) : e ? this.elementRemoved(t) : i && this.elementAdded(t)
        },
        scrollTypes: {
            EMITTER: "none",
            XSCROLLER: "pan-x",
            YSCROLLER: "pan-y",
            SCROLLER: /^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/
        },
        touchActionToScrollType: function(t) {
            var e = this.scrollTypes;
            return "none" === t ? "none" : t === e.XSCROLLER ? "X" : t === e.YSCROLLER ? "Y" : e.SCROLLER.exec(t) ? "XY" : void 0
        },
        POINTER_TYPE: "touch",
        firstTouch: null,
        isPrimaryTouch: function(t) {
            return this.firstTouch === t.identifier
        },
        setPrimaryTouch: function(t) {
            (0 === _.size || 1 === _.size && _.has(1)) && (this.firstTouch = t.identifier,
            this.firstXY = {
                X: t.clientX,
                Y: t.clientY
            },
            this.scrolling = !1,
            this.cancelResetClickCount())
        },
        removePrimaryPointer: function(t) {
            t.isPrimary && (this.firstTouch = null,
            this.firstXY = null,
            this.resetClickCount())
        },
        clickCount: 0,
        resetId: null,
        resetClickCount: function() {
            var t = function() {
                this.clickCount = 0,
                this.resetId = null
            }
            .bind(this);
            this.resetId = setTimeout(t, 200)
        },
        cancelResetClickCount: function() {
            this.resetId && clearTimeout(this.resetId)
        },
        typeToButtons: function(t) {
            return "touchstart" !== t && "touchmove" !== t ? 0 : 1
        },
        touchToPointer: function(t) {
            var e = this.currentTouchEvent
              , n = h.cloneEvent(t)
              , i = n.pointerId = t.identifier + 2;
            n.target = R[i] || Y(n),
            n.bubbles = !0,
            n.cancelable = !0,
            n.detail = this.clickCount,
            n.button = 0,
            n.buttons = this.typeToButtons(e.type),
            n.width = 2 * (t.radiusX || t.webkitRadiusX || 0),
            n.height = 2 * (t.radiusY || t.webkitRadiusY || 0),
            n.pressure = t.force || t.webkitForce || .5,
            n.isPrimary = this.isPrimaryTouch(t),
            n.pointerType = this.POINTER_TYPE,
            n.altKey = e.altKey,
            n.ctrlKey = e.ctrlKey,
            n.metaKey = e.metaKey,
            n.shiftKey = e.shiftKey;
            var r = this;
            return n.preventDefault = function() {
                r.scrolling = !1,
                r.firstXY = null,
                e.preventDefault()
            }
            ,
            n
        },
        processTouches: function(t, e) {
            var n = t.changedTouches;
            this.currentTouchEvent = t;
            for (var i, r = 0; r < n.length; r++)
                i = n[r],
                e.call(this, this.touchToPointer(i))
        },
        shouldScroll: function(t) {
            if (this.firstXY) {
                var e, n, i = t.currentTarget._scrollType;
                return n = "none" !== i && ("XY" === i || (e = t.changedTouches[0],
                t = "Y" === i ? "X" : "Y",
                n = Math.abs(e["client" + i] - this.firstXY[i]),
                Math.abs(e["client" + t] - this.firstXY[t]) <= n)),
                this.firstXY = null,
                n
            }
        },
        findTouch: function(t, e) {
            for (var n, i = 0, r = t.length; i < r && (n = t[i]); i++)
                if (n.identifier === e)
                    return !0
        },
        vacuumTouches: function(t) {
            var n, i = t.touches;
            _.size >= i.length && (n = [],
            _.forEach(function(t, e) {
                1 === e || this.findTouch(i, e - 2) || (t = t.out,
                n.push(t))
            }, this),
            n.forEach(this.cancelOut, this))
        },
        touchstart: function(t) {
            this.vacuumTouches(t),
            this.setPrimaryTouch(t.changedTouches[0]),
            this.dedupSynthMouse(t),
            this.scrolling || (this.clickCount++,
            this.processTouches(t, this.overDown))
        },
        overDown: function(t) {
            _.set(t.pointerId, {
                target: t.target,
                out: t,
                outTarget: t.target
            }),
            h.enterOver(t),
            h.down(t)
        },
        touchmove: function(t) {
            this.scrolling || (this.shouldScroll(t) ? (this.scrolling = !0,
            this.touchcancel(t)) : (t.preventDefault(),
            this.processTouches(t, this.moveOverOut)))
        },
        moveOverOut: function(t) {
            var e, n = t, i = _.get(n.pointerId);
            i && (e = i.out,
            t = i.outTarget,
            h.move(n),
            e && t !== n.target && (e.relatedTarget = n.target,
            n.relatedTarget = t,
            e.target = t,
            n.target ? (h.leaveOut(e),
            h.enterOver(n)) : (n.target = t,
            n.relatedTarget = null,
            this.cancelOut(n))),
            i.out = n,
            i.outTarget = n.target)
        },
        touchend: function(t) {
            this.dedupSynthMouse(t),
            this.processTouches(t, this.upOut)
        },
        upOut: function(t) {
            this.scrolling || (h.up(t),
            h.leaveOut(t)),
            this.cleanUpPointer(t)
        },
        touchcancel: function(t) {
            this.processTouches(t, this.cancelOut)
        },
        cancelOut: function(t) {
            h.cancel(t),
            h.leaveOut(t),
            this.cleanUpPointer(t)
        },
        cleanUpPointer: function(t) {
            _.delete(t.pointerId),
            this.removePrimaryPointer(t)
        },
        dedupSynthMouse: function(t) {
            var e = C.lastTouches
              , t = t.changedTouches[0];
            this.isPrimaryTouch(t) && (t = {
                x: t.clientX,
                y: t.clientY
            },
            e.push(t),
            t = function(t, e) {
                e = t.indexOf(e);
                -1 < e && t.splice(e, 1)
            }
            .bind(null, e, t),
            setTimeout(t, 2500))
        }
    }
      , X = new E(L.elementAdded,L.elementRemoved,L.elementChanged,L)
      , k = h.pointermap
      , A = window.MSPointerEvent && "number" == typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE
      , F = {
        events: ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerOut", "MSPointerOver", "MSPointerCancel", "MSGotPointerCapture", "MSLostPointerCapture"],
        register: function(t) {
            h.listen(t, this.events)
        },
        unregister: function(t) {
            h.unlisten(t, this.events)
        },
        POINTER_TYPES: ["", "unavailable", "touch", "pen", "mouse"],
        prepareEvent: function(t) {
            var e = t;
            return A && ((e = h.cloneEvent(t)).pointerType = this.POINTER_TYPES[t.pointerType]),
            e
        },
        cleanup: function(t) {
            k.delete(t)
        },
        MSPointerDown: function(t) {
            k.set(t.pointerId, t);
            t = this.prepareEvent(t);
            h.down(t)
        },
        MSPointerMove: function(t) {
            t = this.prepareEvent(t);
            h.move(t)
        },
        MSPointerUp: function(t) {
            var e = this.prepareEvent(t);
            h.up(e),
            this.cleanup(t.pointerId)
        },
        MSPointerOut: function(t) {
            t = this.prepareEvent(t);
            h.leaveOut(t)
        },
        MSPointerOver: function(t) {
            t = this.prepareEvent(t);
            h.enterOver(t)
        },
        MSPointerCancel: function(t) {
            var e = this.prepareEvent(t);
            h.cancel(e),
            this.cleanup(t.pointerId)
        },
        MSLostPointerCapture: function(t) {
            t = h.makeEvent("lostpointercapture", t);
            h.dispatchEvent(t)
        },
        MSGotPointerCapture: function(t) {
            t = h.makeEvent("gotpointercapture", t);
            h.dispatchEvent(t)
        }
    };
    var x, K, j, B, U, z = window.navigator;
    function H(t) {
        if (!h.pointermap.has(t)) {
            t = new Error("InvalidPointerId");
            throw t.name = "InvalidPointerId",
            t
        }
    }
    function G(t) {
        for (var e = t.parentNode; e && e !== t.ownerDocument; )
            e = e.parentNode;
        if (!e) {
            var n = new Error("InvalidStateError");
            throw n.name = "InvalidStateError",
            n
        }
    }
    function q(t) {
        return 0 !== h.pointermap.get(t).buttons
    }
    return K = z.msPointerEnabled ? (x = function(t) {
        H(t),
        G(this),
        q(t) && (h.setCapture(t, this, !0),
        this.msSetPointerCapture(t))
    }
    ,
    function(t) {
        H(t),
        h.releaseCapture(t, !0),
        this.msReleasePointerCapture(t)
    }
    ) : (x = function(t) {
        H(t),
        G(this),
        q(t) && h.setCapture(t, this)
    }
    ,
    function(t) {
        H(t),
        h.releaseCapture(t)
    }
    ),
    j = function(t) {
        return !!h.captureInfo[t]
    }
    ,
    P && (g.forEach(function(t) {
        String(t) === t ? (w += T(t) + y(t) + "\n",
        S && (w += b(t) + y(t) + "\n")) : (w += t.selectors.map(T) + y(t.rule) + "\n",
        S && (w += t.selectors.map(b) + y(t.rule) + "\n"))
    }),
    (B = document.createElement("style")).textContent = w,
    document.head.appendChild(B)),
    window.PointerEvent || (window.PointerEvent = r,
    window.navigator.msPointerEnabled ? (U = window.navigator.msMaxTouchPoints,
    Object.defineProperty(window.navigator, "maxTouchPoints", {
        value: U,
        enumerable: !0
    }),
    h.registerSource("ms", F)) : (Object.defineProperty(window.navigator, "maxTouchPoints", {
        value: 0,
        enumerable: !0
    }),
    h.registerSource("mouse", C),
    void 0 !== window.ontouchstart && h.registerSource("touch", L)),
    h.register(document)),
    window.Element && !Element.prototype.setPointerCapture && Object.defineProperties(Element.prototype, {
        setPointerCapture: {
            value: x
        },
        releasePointerCapture: {
            value: K
        },
        hasPointerCapture: {
            value: j
        }
    }),
    {
        dispatcher: h,
        Installer: E,
        PointerEvent: r,
        PointerMap: t,
        targetFinding: i
    }
});
