!function() {
    "use strict";
    function e(e, t) {
        return e + t
    }
    const {hasOwnProperty: t} = {};
    function n(e, n) {
        return t.call(n, e)
    }
    function i() {
        return (i = Object.assign || function(e) {
            for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; t > o; o++)
                i[o - 1] = arguments[o];
            return i.forEach((t => {
                for (const i in t)
                    n(i, t) && (e[i] = t[i])
            }
            )),
            e
        }
        ).apply(void 0, arguments)
    }
    function o(e) {
        return Array.isArray(e)
    }
    function r(e) {
        return "object" == typeof e && null !== e && !o(e)
    }
    function a(e) {
        if ("keys"in Object && "function" == typeof Object.keys)
            return Object.keys(e);
        const t = [];
        for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t
    }
    function s(e, t) {
        return a(t).reduce(( (n, i) => (n[i] = e(t[i]),
        n)), {})
    }
    function c(e) {
        return o(e) ? e.map(c) : r(e) ? s(c, e) : e
    }
    function l(e) {
        return o(e) ? e.filter((e => null != e && !Number.isNaN(e))) : Object.keys(e).reduce(( (t, n) => {
            const i = e[n];
            return null == i || Number.isNaN(i) || (t[n] = i),
            t
        }
        ), {})
    }
    function d(e, t) {
        for (let n = 0; t.length > n; n++) {
            const i = t[n];
            if (e(i))
                return i
        }
    }
    function u(e, t) {
        for (let n = t.length - 1; n >= 0; n--)
            if (e(t[n]))
                return t[n]
    }
    function p(e) {
        return e
    }
    function m(e, t) {
        return a(t).forEach((n => {
            e(t[n], n)
        }
        ))
    }
    function h() {
        return Math.random().toString(36).substring(2)
    }
    function f(e) {
        const t = h();
        return n(t, e) ? f(e) : t
    }
    function g(e, t, n) {
        const i = function(e, t) {
            const n = "string" == typeof e ? e.split(".") : e;
            let i = 0
              , o = t;
            for (; o && n.length > i; )
                o = o[n[i++]];
            return o
        }(t, n);
        return null != i ? i : e
    }
    function v(e, t) {
        return -1 !== t.indexOf(e)
    }
    function _(e) {
        return 0 === (o(e) ? e : Object.keys(e)).length
    }
    function w(e) {
        return !e
    }
    function y(e) {
        return !!e
    }
    function b(e) {
        return e.length > 0 ? e[e.length - 1] : void 0
    }
    function k(e, t) {
        return a(t).reduce(( (n, i) => (Object.defineProperty(n, e(i), {
            value: t[i],
            enumerable: !0
        }),
        n)), {})
    }
    function I(e, t) {
        if (_(t))
            return e;
        const i = {};
        return m(( (a, s) => {
            if (n(s, t))
                if (r(e[s]) && r(t[s]))
                    i[s] = I(e[s], t[s]);
                else if (o(e[s]) && o(t[s])) {
                    const n = Math.max(e[s].length, t[s].length);
                    i[s] = Array(n);
                    for (let o = 0; n > o; o++)
                        o in t[s] ? i[s][o] = t[s][o] : o in e[s] && (i[s][o] = e[s][o])
                } else
                    i[s] = t[s];
            else
                i[s] = e[s]
        }
        ), e),
        m(( (e, o) => {
            n(o, i) || (i[o] = t[o])
        }
        ), t),
        i
    }
    function C(e) {
        if (0 === e.length)
            return {};
        const [t,...n] = e;
        return n.reduce(( (e, t) => I(e, t)), t)
    }
    function x(e) {
        return function(e, t) {
            const i = {};
            return function() {
                const o = e.apply(void 0, arguments);
                if (n(o, i))
                    return i[o];
                const r = t.apply(void 0, arguments);
                return i[o] = r,
                r
            }
        }(p, e)
    }
    function E() {}
    function L(e, t) {
        return e.reduce(( (e, n) => (e[n] = t[n],
        e)), {})
    }
    function A(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
    }
    function P(e, t) {
        if (A(e, t))
            return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1;
        const i = Object.keys(e);
        if (i.length !== Object.keys(t).length)
            return !1;
        for (let o = 0; i.length > o; o++)
            if (!n(i[o], t) || !A(e[i[o]], t[i[o]]))
                return !1;
        return !0
    }
    function T(t) {
        return t.reduce(e, 0)
    }
    function z(e) {
        return Array.prototype.slice.call(e)
    }
    function O(e) {
        return a(e).map((t => [t, e[t]]))
    }
    const S = "not_ready"
      , M = "ready"
      , N = "bootstrapped";
    var j = Object.freeze({
        __proto__: null,
        FRA_A: "fra-a",
        FRA_B: "fra-b",
        FRA: "fra",
        DAL: "dal"
    });
    const D = e => (e => {
        const t = "string" == typeof e ? parseInt(e, 10) : e;
        return (e => "number" == typeof e && e >= 0)(t) ? t : null
    }
    )(void 0 !== e.group ? e.group : e.skill);
    var q = "__test_storage_support__"
      , W = "@@test"
      , B = function(e) {
        void 0 === e && (e = "local");
        try {
            var t = "session" === e ? window.sessionStorage : window.localStorage;
            return t.setItem(q, W),
            t.getItem(q) !== W ? !1 : (t.removeItem(q),
            !0)
        } catch (e) {
            return !1
        }
    }
      , F = function() {
        var e = Object.create(null);
        return {
            getItem: function(t) {
                var n = e[t];
                return "string" == typeof n ? n : null
            },
            setItem: function(t, n) {
                e[t] = n
            },
            removeItem: function(t) {
                delete e[t]
            },
            clear: function() {
                e = Object.create(null)
            }
        }
    }();
    const H = e => O(e).map((e => e.map(encodeURIComponent).join("="))).join("&")
      , V = e => function(e) {
        return e.reduce(( (e, t) => {
            let[n,i] = t;
            return e[n] = i,
            e
        }
        ), {})
    }(e.split("&").filter(Boolean).map((e => e.split("=").map((e => decodeURIComponent(e.replace("+", "%20")))))).map((e => 2 === e.length ? e : [e[0], ""])))
      , R = /(?:[^:]+:\/\/)?([^/\s]+)/;
    const G = /[^:]+:\/\/[^(/|?)\s]+/
      , U = e => {
        const t = e.match(G);
        return t && t[0]
    }
      , J = /.*?\?([^#]+)/
      , X = e => {
        const t = e.match(J);
        return t ? "?" + t[1] : ""
    }
      , Y = e => e.replace(/^\?/, "")
      , $ = e => {
        if (null === U(e))
            return V(Y(e));
        const t = Y(X(e));
        return t ? V(t) : {}
    }
      , K = /^(?:https?:)?\/\/[^/]+\/([^?#]+)/
      , Q = e => {
        const t = e.match(K);
        return "/" + (t && t[1] || "")
    }
      , Z = e => e.replace(/\w/g, "$&[\\r\\n\\t]*")
      , ee = (RegExp("^[\0-]*(" + Z("javascript") + "|" + Z("data") + "):", "i"),
    /^((http(s)?:)?\/\/)/)
      , te = (e, t) => {
        if (-1 === e.indexOf("?"))
            return e;
        const n = $(e);
        if (_(n))
            return e;
        if (Object.keys(n).every((e => !t.includes(e))))
            return e;
        t.forEach((e => delete n[e]));
        const [i] = e.split("?")
          , o = ( (e, t) => {
            if (0 === Object.keys(t).length)
                return e;
            const n = U(e)
              , i = Q(e)
              , o = X(e) ? $(e) : {}
              , r = H({
                ...o,
                ...t
            });
            return e.indexOf("#") > -1 ? "" + n + i + "?" + r + "#" + e.split("#")[1] : "" + n + i + "?" + r
        }
        )(i, n);
        return e.indexOf("#") > -1 ? o + "#" + e.split("#")[1] : o
    }
      , ne = e => "https://" + (e => e.replace(ee, ""))(e)
      , ie = () => {
        return e = "cw_configurator",
        t = window.location.search,
        $(t)[e] || B("session") && !!window.sessionStorage.getItem("cw_configurator");
        var e, t
    }
    ;
    var oe = e => (t, n) => {
        if (0 !== t)
            return;
        if ("function" != typeof e)
            return n(0, ( () => {}
            )),
            void n(2);
        let i, o = !1;
        n(0, (e => {
            o || (o = 2 === e,
            o && "function" == typeof i && i())
        }
        )),
        o || (i = e((e => {
            o || n(1, e)
        }
        ), (e => {
            o || void 0 === e || (o = !0,
            n(2, e))
        }
        ), ( () => {
            o || (o = !0,
            n(2))
        }
        )))
    }
    ;
    const re = e => (t, n) => {
        if (0 !== t)
            return;
        let i, o;
        function r(e, t) {
            1 === e && (o || i)(1, t),
            2 === e && (o && o(2),
            i && i(2))
        }
        e(0, ( (e, t) => {
            if (0 === e)
                i = t,
                n(0, r);
            else if (1 === e) {
                const e = t;
                o && o(2),
                e(0, ( (e, t) => {
                    0 === e ? (o = t,
                    o(1)) : 1 === e ? n(1, t) : 2 === e && t ? (i && i(2),
                    n(2, t)) : 2 === e && (i ? (o = void 0,
                    i(1)) : n(2))
                }
                ))
            } else
                2 === e && t ? (o && o(2),
                n(2, t)) : 2 === e && (o ? i = void 0 : n(2))
        }
        ))
    }
    ;
    var ae = function(e, t) {
        return e === t
    };
    function se(e) {
        return void 0 === e && (e = ae),
        function(t) {
            return function(n, i) {
                if (0 === n) {
                    var o, r, a = !1;
                    t(0, (function(t, n) {
                        0 === t && (r = n),
                        1 === t ? a && e(o, n) ? r(1) : (a = !0,
                        o = n,
                        i(1, n)) : i(t, n)
                    }
                    ))
                }
            }
        }
    }
    var ce = e => t => (n, i) => {
        if (0 !== n)
            return;
        let o;
        t(0, ( (t, n) => {
            0 === t ? (o = n,
            i(t, n)) : 1 === t ? e(n) ? i(t, n) : o(1) : i(t, n)
        }
        ))
    }
    ;
    var le = e => t => {
        let n;
        t(0, ( (t, i) => {
            0 === t && (n = i),
            1 === t && e(i),
            1 !== t && 0 !== t || n(1)
        }
        ))
    }
    ;
    const de = (e, t, n) => (i, o) => {
        if (0 !== i)
            return;
        let r = !1;
        const a = e => {
            o(1, e)
        }
        ;
        o(0, (i => {
            2 === i && (r = !0,
            e.removeEventListener(t, a, n))
        }
        )),
        r || e.addEventListener(t, a, n)
    }
    ;
    var ue = function() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
            t[n] = arguments[n];
        return (e, n) => {
            if (0 !== e)
                return;
            const i = t.length
              , o = Array(i);
            let r = 0
              , a = 0;
            const s = e => {
                if (0 !== e)
                    for (let t = 0; i > t; t++)
                        o[t] && o[t](e)
            }
            ;
            for (let e = 0; i > e; e++)
                t[e](0, ( (t, c) => {
                    0 === t ? (o[e] = c,
                    1 == ++r && n(0, s)) : 2 === t ? (o[e] = void 0,
                    ++a === i && n(2)) : n(t, c)
                }
                ))
        }
    };
    function pe(e, t) {
        return oe((n => (e.on(t, n),
        () => {
            e.off(t, n)
        }
        )))
    }
    !function(e) {
        var t, n = e.Symbol;
        "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"),
        n.observable = t) : t = "@@observable"
    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")());
    var me = function() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
            t[n] = arguments[n];
        let i = t[0];
        for (let e = 1, n = t.length; n > e; e++)
            i = t[e](i);
        return i
    };
    var he = e => t => (n, i) => {
        if (0 !== n)
            return;
        let o;
        t(0, ( (t, n) => {
            0 === t ? (o = n,
            i(0, ( (e, t) => {
                0 !== e && o(e, t)
            }
            )),
            i(1, e)) : i(t, n)
        }
        ))
    }
    ;
    var fe = e => t => (n, i) => {
        0 === n && t(0, ( (t, n) => {
            i(t, 1 === t ? e(n) : n)
        }
        ))
    }
    ;
    function ge(e) {
        return t => re(fe(e)(t))
    }
    var ve = function() {};
    function _e(e, t) {
        0 === e && t(0, ve)
    }
    function we() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
            t[n] = arguments[n];
        return function(e, n) {
            if (0 === e) {
                var i = !1;
                for (n(0, (function(e) {
                    2 === e && (i = !0,
                    t.length = 0)
                }
                )); 0 !== t.length; )
                    n(1, t.shift());
                i || n(2)
            }
        }
    }
    function ye(e) {
        return function(t, n) {
            if (0 === t) {
                var i, o, r, a = 0;
                e(0, (function(e, t) {
                    if (0 === e && (r = t),
                    1 === e) {
                        var s = [o, t];
                        i = s[0],
                        o = s[1],
                        2 > ++a ? r(1) : n(1, [i, o])
                    } else
                        n(e, t)
                }
                ))
            }
        }
    }
    var be = function() {}
      , ke = {};
    function Ie(e) {
        var t, n, i = [], o = !1, r = ke;
        return function(a, s) {
            if (0 === a) {
                if (r !== ke)
                    return s(0, be),
                    o && s(1, n),
                    void s(2, r);
                i.push(s);
                var c = function(e, n) {
                    if (2 !== e)
                        r === ke && t(e, n);
                    else {
                        var o = i.indexOf(s);
                        -1 !== o && i.splice(o, 1)
                    }
                };
                1 !== i.length ? (s(0, c),
                o && r === ke && s(1, n)) : e(0, (function(e, a) {
                    if (0 === e)
                        return t = a,
                        void s(0, c);
                    1 === e && (o = !0,
                    n = a);
                    var l = i.slice(0);
                    2 === e && (r = a,
                    i = null),
                    l.forEach((function(t) {
                        t(e, a)
                    }
                    ))
                }
                ))
            }
        }
    }
    var Ce = e => t => (n, i) => {
        if (0 !== n)
            return;
        let o, r = 0;
        t(0, ( (t, n) => {
            0 === t ? (o = n,
            i(t, n)) : 1 === t && e > r ? (r++,
            o(1)) : i(t, n)
        }
        ))
    }
    ;
    const xe = function(e) {
        return void 0 === e && (e = {}),
        t => {
            "function" == typeof e && (e = {
                next: e
            });
            let n, {next: i, error: o, complete: r} = e;
            t(0, ( (e, t) => {
                0 === e && (n = t),
                1 === e && i && i(t),
                1 !== e && 0 !== e || n(1),
                2 === e && !t && r && r(),
                2 === e && t && o && o(t)
            }
            ));
            return () => {
                n && n(2)
            }
        }
    };
    var Ee = e => t => (n, i) => {
        if (0 !== n)
            return;
        let o, r = 0;
        function a(t, n) {
            e > r && o(t, n)
        }
        t(0, ( (t, n) => {
            0 === t ? (o = n,
            i(0, a)) : 1 === t ? e > r && (r++,
            i(t, n),
            r === e && (i(2),
            o(2))) : i(t, n)
        }
        ))
    }
    ;
    const Le = {}
      , Ae = e => t => (n, i) => {
        if (0 !== n)
            return;
        let o, r, a = !1, s = Le;
        t(0, ( (t, n) => {
            if (0 === t)
                return o = n,
                e(0, ( (e, t) => 0 === e ? (r = t,
                void r(1)) : 1 === e ? (s = void 0,
                r(2),
                o(2),
                void (a && i(2))) : void (2 === e && (r = null,
                t && (s = t,
                o(2),
                a && i(e, t)))))),
                a = !0,
                i(0, ( (e, t) => {
                    s === Le && (2 === e && r && r(2),
                    o(e, t))
                }
                )),
                void (s !== Le && i(2, s));
            2 === t && r(2),
            i(t, n)
        }
        ))
    }
    ;
    function Pe(e) {
        return new Promise((function(t, n) {
            xe({
                next: t,
                error: n,
                complete: function() {
                    var e = Error("No elements in sequence.");
                    e.code = "NO_ELEMENTS",
                    n(e)
                }
            })(function(e) {
                return function(t, n) {
                    if (0 === t) {
                        var i, o, r = !1, a = !1;
                        e(0, (function(e, t) {
                            return 0 === e ? (i = t,
                            void n(0, (function(e, t) {
                                2 === e && (a = !0),
                                i(e, t)
                            }
                            ))) : 1 === e ? (r = !0,
                            o = t,
                            void i(1)) : void (2 === e && !t && r && (n(1, o),
                            a) || n(e, t))
                        }
                        ))
                    }
                }
            }(e))
        }
        ))
    }
    var Te = function(e, t, n) {
        return e(n = {
            path: t,
            exports: {},
            require: function(e, t) {
                return function() {
                    throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }()
            }
        }, n.exports),
        n.exports
    }((function(e, t) {
        function n(e, t) {
            return e === t
        }
        function i(e, t, n) {
            if (null === t || null === n || t.length !== n.length)
                return !1;
            for (var i = t.length, o = 0; i > o; o++)
                if (!e(t[o], n[o]))
                    return !1;
            return !0
        }
        function o(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n
              , o = null
              , r = null;
            return function() {
                return i(t, o, arguments) || (r = e.apply(null, arguments)),
                o = arguments,
                r
            }
        }
        function r(e) {
            var t = Array.isArray(e[0]) ? e[0] : e;
            if (!t.every((function(e) {
                return "function" == typeof e
            }
            ))) {
                var n = t.map((function(e) {
                    return typeof e
                }
                )).join(", ");
                throw Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]")
            }
            return t
        }
        function a(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++)
                n[i - 1] = arguments[i];
            return function() {
                for (var t = arguments.length, i = Array(t), a = 0; t > a; a++)
                    i[a] = arguments[a];
                var s = 0
                  , c = i.pop()
                  , l = r(i)
                  , d = e.apply(void 0, [function() {
                    return s++,
                    c.apply(null, arguments)
                }
                ].concat(n))
                  , u = o((function() {
                    for (var e = [], t = l.length, n = 0; t > n; n++)
                        e.push(l[n].apply(null, arguments));
                    return d.apply(null, e)
                }
                ));
                return u.resultFunc = c,
                u.recomputations = function() {
                    return s
                }
                ,
                u.resetRecomputations = function() {
                    return s = 0
                }
                ,
                u
            }
        }
        t.__esModule = !0,
        t.defaultMemoize = o,
        t.createSelectorCreator = a,
        t.createStructuredSelector = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
            if ("object" != typeof e)
                throw Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
            var n = Object.keys(e);
            return t(n.map((function(t) {
                return e[t]
            }
            )), (function() {
                for (var e = arguments.length, t = Array(e), i = 0; e > i; i++)
                    t[i] = arguments[i];
                return t.reduce((function(e, t, i) {
                    return e[n[i]] = t,
                    e
                }
                ), {})
            }
            ))
        }
        ;
        var s = t.createSelector = a(o)
    }
    ))
      , ze = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , Oe = function() {
        function e() {
            ze(this, e),
            this._cache = {}
        }
        return e.prototype.set = function(e, t) {
            this._cache[e] = t
        }
        ,
        e.prototype.get = function(e) {
            return this._cache[e]
        }
        ,
        e.prototype.remove = function(e) {
            delete this._cache[e]
        }
        ,
        e.prototype.clear = function() {
            this._cache = {}
        }
        ,
        e
    }();
    (function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = t.cacheSize;
            if (ze(this, e),
            void 0 === n)
                throw Error("Missing the required property `cacheSize`.");
            if (!Number.isInteger(n) || 0 >= n)
                throw Error("The `cacheSize` property must be a positive integer value.");
            this._cache = {},
            this._cacheOrdering = [],
            this._cacheSize = n
        }
        e.prototype.set = function(e, t) {
            (this._cache[e] = t,
            this._cacheOrdering.push(e),
            this._cacheOrdering.length > this._cacheSize) && this.remove(this._cacheOrdering[0])
        }
        ,
        e.prototype.get = function(e) {
            return this._cache[e]
        }
        ,
        e.prototype.remove = function(e) {
            var t = this._cacheOrdering.indexOf(e);
            t > -1 && this._cacheOrdering.splice(t, 1),
            delete this._cache[e]
        }
        ,
        e.prototype.clear = function() {
            this._cache = {},
            this._cacheOrdering = []
        }
    }
    )(),
    function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = t.cacheSize;
            if (ze(this, e),
            void 0 === n)
                throw Error("Missing the required property `cacheSize`.");
            if (!Number.isInteger(n) || 0 >= n)
                throw Error("The `cacheSize` property must be a positive integer value.");
            this._cache = {},
            this._cacheOrdering = [],
            this._cacheSize = n
        }
        e.prototype.set = function(e, t) {
            (this._cache[e] = t,
            this._registerCacheHit(e),
            this._cacheOrdering.length > this._cacheSize) && this.remove(this._cacheOrdering[0])
        }
        ,
        e.prototype.get = function(e) {
            return this._registerCacheHit(e),
            this._cache[e]
        }
        ,
        e.prototype.remove = function(e) {
            this._deleteCacheHit(e),
            delete this._cache[e]
        }
        ,
        e.prototype.clear = function() {
            this._cache = {},
            this._cacheOrdering = []
        }
        ,
        e.prototype._registerCacheHit = function(e) {
            this._deleteCacheHit(e),
            this._cacheOrdering.push(e)
        }
        ,
        e.prototype._deleteCacheHit = function(e) {
            var t = this._cacheOrdering.indexOf(e);
            t > -1 && this._cacheOrdering.splice(t, 1)
        }
    }();
    function Se() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
            t[n] = arguments[n];
        var i = Oe;
        return function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , o = void 0
              , r = void 0;
            "function" == typeof n ? (console.warn('[re-reselect] Deprecation warning: "selectorCreator" argument is discouraged and will be removed in the upcoming major release. Please use "options.selectorCreator" instead.'),
            o = new i,
            r = n) : (o = n.cacheObject || new i,
            r = n.selectorCreator || Te.createSelector);
            var a = function() {
                var n = e.apply(void 0, arguments);
                if ("string" == typeof n || "number" == typeof n) {
                    var i = o.get(n);
                    return void 0 === i && (i = r.apply(void 0, t),
                    o.set(n, i)),
                    i.apply(void 0, arguments)
                }
            };
            return a.getMatchingSelector = function() {
                var t = e.apply(void 0, arguments);
                return o.get(t)
            }
            ,
            a.removeMatchingSelector = function() {
                var t = e.apply(void 0, arguments);
                o.remove(t)
            }
            ,
            a.clearCache = function() {
                o.clear()
            }
            ,
            a.resultFunc = t[t.length - 1],
            a
        }
    }
    const Me = (e, t) => t
      , Ne = (e, t) => (e => e.entities.chats.byIds)(e)[t]
      , je = Se([ (e, t) => Ne(e, t).events.orderedIds, (e, t) => Ne(e, t).events.byIds], ( (e, t) => e.map((e => t[e]))))(Me)
      , De = Se([Ne, je], ( (e, t) => ({
        ...e,
        events: t
    })))(Me)
      , qe = e => e.entities.users.byIds
      , We = e => qe(e)[(e => e.session.id)(e)]
      , Be = (e, t) => qe(e)[t]
      , Fe = e => We(e).id
      , He = (Se([je, Fe], ( (e, t) => u((e => {
        let {delivered: n, author: i} = e;
        return n && i === t
    }
    ), e)))(Me),
    Se([je, Fe], ( (e, t) => u((e => {
        let {seen: n, author: i} = e;
        return n && i === t
    }
    ), e)))(Me),
    {
        boosters: !0,
        form: !0,
        system_message: !0
    });
    Te.createSelector([je, e => We(e).id], ( (e, t) => {
        return function(e, t, n) {
            for (let i = t; i >= 0; i--)
                if (e(n[i]))
                    return i;
            return -1
        }((e => e.author === t && "message" === e.type && !(e.properties && "file" === e.properties.serverType) || !0 === e.seen && !He[e.type] && !!e.serverId), (n = e).length - 1, n);
        var n
    }
    )),
    Se([ (e, t) => Ne(e, t).participants, qe], ( (e, t) => e.map((e => t[e]))))(Me);
    function Ve(e, t) {
        if (void 0 === t)
            return e.application;
        return e.application[t]
    }
    var Re = (e, t) => {
        m(( (e, n) => {
            t.style[n] = e
        }
        ), e)
    }
      , Ge = (e, t) => {
        m(( (e, n) => {
            "style" !== n ? t.setAttribute(n, e) : Re(e, t)
        }
        ), e)
    }
    ;
    const Ue = () => !!document.documentElement.currentStyle
      , Je = (e, t) => {
        const i = window.getComputedStyle(t)
          , o = "border-box" === i.boxSizing
          , r = L(e, i);
        if (Ue() && o && n("width", r) && null !== r.width) {
            r.width = T([r.width, i.paddingLeft, i.paddingRight, i.borderLeftWidth, i.borderRightWidth].map(parseFloat)) + "px"
        }
        if (Ue() && o && n("height", r) && null !== r.height) {
            r.height = T([r.height, i.paddingTop, i.paddingBottom, i.borderTopWidth, i.borderBottomWidth].map(parseFloat)) + "px"
        }
        return r
    }
    ;
    function Xe() {
        return new Promise((e => {
            const t = () => {
                document.body ? e(document.body) : setTimeout(t, 100)
            }
            ;
            t()
        }
        ))
    }
    function Ye(e) {
        const {parentNode: t} = e;
        t && t.removeChild(e)
    }
    const $e = (e, t) => {
        const n = document.createElement(e);
        return Ge(t, n),
        n
    }
      , Ke = "chat-widget"
      , Qe = "chat-widget-minimized"
      , Ze = "LiveChat chat widget"
      , et = "OpenWidget widget"
      , tt = {
        opacity: 0,
        visibility: "hidden",
        zIndex: -1
    }
      , nt = {
        opacity: 1,
        visibility: "visible",
        zIndex: 2147483639
    }
      , it = {
        id: Ke + "-container",
        style: {
            ...tt,
            position: "fixed",
            bottom: 0,
            width: 0,
            height: 0,
            maxWidth: "100%",
            maxHeight: "100%",
            minHeight: 0,
            minWidth: 0,
            backgroundColor: "transparent",
            border: 0,
            overflow: "hidden"
        }
    }
      , ot = {
        id: "livechat-eye-catcher",
        style: {
            position: "fixed",
            visibility: "visible",
            zIndex: 2147483639,
            background: "transparent",
            border: 0,
            padding: "10px 10px 0 0",
            float: "left",
            marginRight: "-10px",
            webkitBackfaceVisibility: "hidden"
        }
    }
      , rt = {
        style: {
            position: "absolute",
            display: "none",
            top: "-5px",
            right: "-5px",
            width: "16px",
            lineHeight: "16px",
            textAlign: "center",
            cursor: "pointer",
            textDecoration: "none",
            color: "#000",
            fontSize: "20px",
            fontFamily: "Arial, sans-serif",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.5)"
        }
    }
      , at = {
        id: "livechat-eye-catcher-img",
        style: {
            display: "block",
            overflow: "hidden",
            cursor: "pointer"
        }
    }
      , st = {
        alt: "",
        style: {
            display: "block",
            border: 0,
            float: "right"
        }
    }
      , ct = {
        position: "absolute",
        top: "0px",
        left: "0px",
        bottom: "0px",
        right: "0px"
    }
      , lt = {
        id: Ke,
        name: Ke,
        title: Ze,
        style: {
            width: "100%",
            height: "100%",
            "min-height": "0px",
            "min-width": "0px",
            margin: "0px",
            padding: "0px",
            "background-image": "none",
            "background-position-x": "0%",
            "background-position-y": "0%",
            "background-size": "initial",
            "background-attachment": "scroll",
            "background-origin": "initial",
            "background-clip": "initial",
            "background-color": "rgba(0, 0, 0, 0)",
            "border-width": "0px",
            float: "none",
            "color-scheme": "normal"
        }
    }
      , dt = {
        ...lt,
        id: Qe,
        name: Qe
    }
      , ut = e => "lc-aria-announcer-" + e;
    function pt(e) {
        if ("Google Inc." !== navigator.vendor || "Win32" !== navigator.platform)
            return;
        const {frame: t} = e
          , n = function(e, t) {
            let n;
            return function() {
                clearTimeout(n);
                for (var i = arguments.length, o = Array(i), r = 0; i > r; r++)
                    o[r] = arguments[r];
                n = setTimeout.apply(void 0, [t, e].concat(o))
            }
        }(100, ( () => {
            Re(Je(["width"], t), t),
            requestAnimationFrame(( () => {
                Re({
                    width: lt.style.width
                }, t)
            }
            ))
        }
        ));
        document.addEventListener("scroll", n);
        const i = () => {
            e.off("unbind", i),
            document.removeEventListener("scroll", n)
        }
        ;
        e.on("unbind", i)
    }
    function mt() {
        return e = /^Mac/,
        null != window.navigator && e.test(window.navigator.platform);
        var e
    }
    const ht = e => {
        let t = !1
          , n = null;
        function i(t) {
            e.state.application.visibility.interactionModality === t && t === n || (e.call("setInteractionModality", t),
            n = t)
        }
        function o(e) {
            t = !0,
            function(e) {
                return !(e.metaKey || !mt() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || "Alt-Meta" === e.key)
            }(e) && i("keyboard")
        }
        function r(e) {
            i("pointer"),
            "mousedown" !== e.type && "pointerdown" !== e.type || (t = !0)
        }
        function a(e) {
            e.target !== window && e.target !== document && (t || i("keyboard"),
            t = !1)
        }
        function s() {
            t = !1
        }
        return document.addEventListener("keydown", o, !0),
        document.addEventListener("keyup", o, !0),
        window.addEventListener("focus", a, !0),
        window.addEventListener("blur", s, !1),
        "undefined" != typeof PointerEvent ? (document.addEventListener("pointerdown", r, !0),
        document.addEventListener("pointermove", r, !0),
        document.addEventListener("pointerup", r, !0)) : (document.addEventListener("mousedown", r, !0),
        document.addEventListener("mousemove", r, !0),
        document.addEventListener("mouseup", r, !0)),
        () => {
            document.removeEventListener("keydown", o, !0),
            document.removeEventListener("keyup", o, !0),
            window.removeEventListener("focus", a, !0),
            window.removeEventListener("blur", s, !1),
            "undefined" != typeof PointerEvent ? (document.removeEventListener("pointerdown", r, !0),
            document.removeEventListener("pointermove", r, !0),
            document.removeEventListener("pointerup", r, !0)) : (document.removeEventListener("mousedown", r, !0),
            document.removeEventListener("mousemove", r, !0),
            document.removeEventListener("mouseup", r, !0))
        }
    }
      , ft = function(e, t) {
        return void 0 === t && (t = !1),
        t && e.__unsafeProperties.group.hasCustomMobileSettings
    }
      , gt = (e, t) => {
        const n = e.__unsafeProperties.group;
        return ft(e, t) ? n.screenPositionOnMobile : n.screenPosition
    }
      , vt = (e, t) => {
        const n = e.__unsafeProperties.group;
        return ft(e, t) ? {
            x: n.offsetXOnMobile,
            y: n.offsetYOnMobile
        } : {
            x: n.offsetX,
            y: n.offsetY
        }
    }
    ;
    const _t = "new_message"
      , wt = e => "function" == typeof e.start && "function" == typeof e.stop
      , yt = e => {
        wt(e) ? e.start(0) : e.noteOn(0)
    }
      , bt = () => {
        const e = new (window.AudioContext || window.webkitAudioContext);
        let t = !0
          , n = [];
        const i = t => new Promise(( (n, i) => {
            e.decodeAudioData(t, n, i)
        }
        ))
          , o = t => ({
            play: () => {
                const n = e.createBufferSource();
                n.connect(e.destination),
                n.buffer = t;
                return {
                    playback: new Promise(( (t, i) => {
                        if (n.onended = () => t(),
                        yt(n),
                        "running" !== e.state) {
                            const t = Error("Playback failed, AudioContext is in incorrect state '" + e.state + "'");
                            t.name = "PlaybackError",
                            i(t)
                        }
                    }
                    )),
                    stop() {
                        (e => {
                            wt(e) ? e.stop(0) : e.noteOff(0)
                        }
                        )(n)
                    }
                }
            }
        });
        return {
            preload: e => (e => new Promise(( (t, n) => {
                const i = new XMLHttpRequest;
                i.onload = () => {
                    t(i.response)
                }
                ,
                i.onerror = n,
                i.open("GET", e),
                i.responseType = "arraybuffer",
                i.send()
            }
            )))(e).then(i).then(o),
            playSound: e => {
                const i = e.play();
                return t && n.push(i),
                i.playback
            }
            ,
            unlock: () => new Promise((i => {
                const o = () => {
                    document.removeEventListener("click", o, !0),
                    t && (n.forEach((e => {
                        e.stop()
                    }
                    )),
                    n = [],
                    t = !1),
                    e.resume(),
                    ( () => {
                        const t = e.createBuffer(1, 1, 22050)
                          , n = e.createBufferSource();
                        n.buffer = t,
                        n.connect(e.destination),
                        yt(n)
                    }
                    )(),
                    i()
                }
                ;
                document.addEventListener("click", o, !0)
            }
            ))
        }
    }
    ;
    const kt = /\.(\w+)$/i
      , It = new Audio
      , Ct = {
        mp3: "audio/mpeg",
        ogg: "audio/ogg"
    }
      , xt = e => {
        const t = (e => {
            const t = e.match(kt);
            return t ? t[1].toLowerCase() : ""
        }
        )(e);
        return t in Ct && "" !== It.canPlayType(Ct[t])
    }
      , Et = e => new Promise(( (t, n) => {
        const i = new Audio(e);
        i.onloadeddata = () => {
            t(i)
        }
        ,
        i.onerror = n
    }
    ))
      , Lt = e => {
        const t = e.play();
        return (n = t) && "function" == typeof n.then ? t : Promise.resolve();
        var n
    }
    ;
    const At = () => "function" == typeof window.webkitAudioContext || "function" == typeof window.AudioContext ? ( () => {
        const e = bt()
          , t = x((t => {
            const n = e.preload(t);
            return n.catch(E),
            n
        }
        ));
        return {
            play: n => {
                const i = t(n).then(e.playSound);
                return i.catch(E),
                i
            }
            ,
            preload: t,
            unlock: () => e.unlock()
        }
    }
    )() : ( () => {
        const e = x(Et);
        return {
            play: t => e(t).then(Lt),
            preload: e,
            unlock: () => Promise.resolve()
        }
    }
    )()
      , Pt = e => Object.keys(e).reduce(( (t, n) => {
        const i = d((e => xt(e)), o(r = e[n]) ? r : [r]);
        var r;
        return t[n] = i,
        t
    }
    ), {});
    const Tt = () => {
        const e = (e => {
            const t = At()
              , n = Pt(e);
            return {
                play: e => {
                    t.play(n[e]).then(E, E)
                }
                ,
                preload: e => {
                    t.preload(n[e]).then(E, E)
                }
                ,
                unlock: () => t.unlock()
            }
        }
        )({
            [_t]: ["https://cdn.livechatinc.com/widget/static/media/new_message.CTorF0S8.ogg", "https://cdn.livechatinc.com/widget/static/media/new_message.C32z5SiC.mp3"]
        });
        return e.unlock().then(( () => function(e, t) {
            let n = 0;
            return function() {
                const i = Date.now();
                e > i - n || (n = Date.now(),
                t.apply(void 0, arguments))
            }
        }(2e3, (t => {
            e.play(t)
        }
        ))))
    }
      , zt = e => !!e && /native code/.test(e + "")
      , Ot = () => v(navigator.platform, ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"]) && v("Version/15", navigator.userAgent)
      , St = () => /mobile/gi.test(navigator.userAgent) && !("MacIntel" === navigator.platform && v("iPad", navigator.userAgent))
      , Mt = () => v("Chrome", navigator.userAgent)
      , Nt = () => {
        const e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        return e ? parseInt(e[2], 10) : 0
    }
      , jt = () => /Firefox/.test(navigator.userAgent)
      , Dt = (e, t) => Ve(e, "visibility").state === t;
    !function(e) {
        const t = function(e) {
            try {
                return window.localStorage
            } catch (t) {
                return "SecurityError" === t.name && e ? e : B() ? window.localStorage : F
            }
        }(e)
    }();
    const qt = () => {
        const {all: e, ...t} = {
            all: n = n || new Map,
            on: function(e, t) {
                var i = n.get(e);
                i ? i.push(t) : n.set(e, [t])
            },
            off: function(e, t) {
                var i = n.get(e);
                i && (t ? i.splice(i.indexOf(t) >>> 0, 1) : n.set(e, []))
            },
            emit: function(e, t) {
                var i = n.get(e);
                i && i.slice().map((function(e) {
                    e(t)
                }
                )),
                (i = n.get("*")) && i.slice().map((function(n) {
                    n(e, t)
                }
                ))
            }
        };
        var n;
        return {
            ...t,
            off: (n, i) => {
                n ? t.off(n, i) : e.clear()
            }
            ,
            once: (e, n) => {
                t.on(e, (function i(o, r) {
                    t.off(e, i),
                    n(o, r)
                }
                ))
            }
        }
    }
    ;
    function Wt(e, t) {
        let {retriesCount: n=1 / 0, minTime: i=100, maxTime: o=1e4} = void 0 === t ? {} : t;
        const r = (e => {
            let {min: t=1e3, max: n=5e3, jitter: i=.5} = e
              , o = 0;
            return {
                duration: () => {
                    let e = t * Math.pow(2, o++);
                    if (i) {
                        const t = Math.random()
                          , n = Math.floor(t * i * e);
                        e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
                    }
                    return 0 | Math.min(e, n)
                }
                ,
                reset: () => {
                    o = 0
                }
            }
        }
        )({
            min: i,
            max: o,
            jitter: 0
        });
        return new Promise(( (t, i) => {
            let o = 0;
            const a = () => e().then(t, ( () => {
                n === 1 / 0 || o++ < n ? setTimeout(a, r.duration()) : i(Error("Maximum retries count (" + n + ") reached"))
            }
            ));
            a()
        }
        ))
    }
    Object.freeze({
        success: !0
    });
    const Bt = e => e.map((e => {
        switch (e.type) {
        case "group_chooser":
            return {
                ...e,
                options: e.options.map((e => {
                    let {group_id: t, ...n} = e;
                    return {
                        ...n,
                        groupId: t
                    }
                }
                ))
            };
        case "rating":
            {
                const {comment_label: t, ...n} = e;
                return {
                    ...n,
                    commentLabel: t
                }
            }
        default:
            return e
        }
    }
    ))
      , Ft = e => {
        const t = e.map(( (e, t) => ({
            ...e,
            id: t + ""
        })));
        return Bt(t)
    }
      , Ht = e => ({
        id: e.id,
        fields: !("id"in e.fields[0]) ? Ft(e.fields) : Bt(e.fields)
    })
      , Vt = {};
    function Rt(e, t) {
        let {query: n={}, jsonpParam: i="jsonp", callbackName: o} = void 0 === t ? {} : t;
        return new Promise(( (t, r) => {
            Xe().then((a => {
                const s = document.createElement("script")
                  , c = o || f(Vt);
                Vt[c] = !0;
                const l = "__" + c;
                window[l] = e => {
                    delete Vt[c],
                    delete window[l],
                    Ye(s),
                    t(e)
                }
                ,
                s.src = e + "?" + H({
                    ...n,
                    [i]: l
                }),
                s.addEventListener("error", ( () => {
                    setTimeout(( () => r(Error("JSONP request failed."))), 100)
                }
                )),
                a.appendChild(s)
            }
            ))
        }
        ))
    }
    const Gt = /\.([a-z]{1,})$/i
      , Ut = e => {
        let {__priv: t} = e;
        const n = {
            enabled: !0,
            x: parseInt(t.group["embedded_chat.eye_grabber.x"]) + 15,
            y: parseInt(t.group["embedded_chat.eye_grabber.y"]),
            src: ne(t.group["embedded_chat.eye_grabber.path"])
        };
        if (-1 !== n.src.indexOf("/default/eyeCatchers/")) {
            const e = n.src.match(Gt)[1];
            n.srcset = {
                "1x": n.src,
                "2x": n.src.replace(RegExp("\\." + e, "i"), "-2x." + e)
            }
        }
        return n
    }
      , Jt = (e, t) => {
        const n = "get_dynamic_configuration" === e ? "v3.6" : "v3.4";
        return (e => {
            let {licenseId: t, region: n} = e;
            return "https://api" + (e => e && "dal" !== e ? "-" + e : "")(n) + (e => 1520 === e ? ".staging" : "")(t) + ".livechatinc.com"
        }
        )(t) + "/" + n + "/customer/action/" + e
    }
      , Xt = function(e, t) {
        let {validateDefaultWidget: n=!0} = void 0 === t ? {} : t;
        return Rt(Jt("get_dynamic_configuration", e), {
            query: {
                license_id: e.licenseId,
                client_id: null != "c5e4f61e1a6c3b1521b541bc5c5a2ac5" ? "c5e4f61e1a6c3b1521b541bc5c5a2ac5" : "",
                url: te(e.url, ["cw_configurator"]),
                ..."number" == typeof e.groupId && {
                    group_id: e.groupId
                },
                ...e.channelType && {
                    channel_type: e.channelType
                },
                ...e.skipCodeInstallationTracking && {
                    test: 1
                },
                ...e.productName && {
                    origin: e.productName
                },
                ...e.integrationName && {
                    implementation_type: e.integrationName
                }
            }
        }).then((t => {
            if (t.error)
                switch (t.error.type) {
                case "misdirected_request":
                    return Xt({
                        ...e,
                        region: t.error.data.region
                    });
                case "license_not_found":
                    {
                        if ("direct_link" === e.channelType) {
                            const t = H({
                                utm_source: "expired_chat_link",
                                utm_medium: "referral",
                                utm_campaign: "lc_" + e.licenseId
                            });
                            window.location.replace("https://www.livechat.com/expired-chat-link/?" + t)
                        }
                        const t = Error("License not found");
                        throw t.code = "LICENSE_NOT_FOUND",
                        t
                    }
                default:
                    {
                        const e = Error(t.error.message);
                        throw e.code = t.error.type.toUpperCase(),
                        e
                    }
                }
            if (n && "livechat" !== t.default_widget) {
                const e = Error("The 'default_widget' is not 'livechat', but instead: '" + t.default_widget + "'");
                throw e.code = "DEFAULT_WIDGET_NOT_LIVECHAT",
                e.organizationId = t.organization_id,
                e.defaultWidget = t.default_widget,
                e
            }
            if (!t.livechat_active) {
                if ("direct_link" === e.channelType) {
                    const t = H({
                        utm_source: "expired_chat_link",
                        utm_medium: "referral",
                        utm_campaign: "lc_" + e.licenseId
                    });
                    window.location.replace("https://www.livechat.com/expired-chat-link/?" + t)
                }
                const t = Error("License expired");
                throw t.code = "LICENSE_EXPIRED",
                t
            }
            if (!t.livechat.domain_allowed) {
                const e = Error("Current domain is not added to the allowlist.");
                throw e.code = "DOMAIN_NOT_ALLOWED",
                e
            }
            return {
                organizationId: (i = t).organization_id,
                groupId: i.livechat.group_id,
                clientLimitExceeded: i.livechat.client_limit_exceeded,
                configVersion: i.livechat.config_version,
                localizationVersion: i.livechat.localization_version,
                onlineGroupIds: i.livechat.online_group_ids || [],
                region: e.region || null,
                language: i.livechat.language
            };
            var i
        }
        ))
    }
      , Yt = e => {
        var t, n;
        const i = "feade1d6c3f17748ae4c8d917a1e1068"
          , o = !!(null == (t = e.properties.group[i]) ? void 0 : t.forwardTicketFormToHelpdesk)
          , r = null == (n = e.properties.license[i]) ? void 0 : n.hdLicenseID;
        return "number" == typeof r && r > -1 && (o || "1" === e.__priv.license["helpdesk.inbound_forwarding"])
    }
      , $t = e => {
        const {buttons: t, allowed_domains: n, prechat_form: i, ticket_form: o, __priv: r, properties: a, ...s} = e
          , c = "0" === r.group.tickets_enabled
          , l = !!!r.disable_native_tickets && !!o
          , d = Yt(e)
          , u = c || d || l;
        return {
            ...s,
            ...i && {
                prechatForm: Ht(i)
            },
            ...u && o && {
                ticketForm: Ht(o)
            },
            properties: a,
            buttons: t.map((e => "image" === e.type ? {
                id: e.id,
                type: e.type,
                onlineValue: ne(e.online_value),
                offlineValue: ne(e.offline_value)
            } : {
                id: e.id,
                type: e.type,
                onlineValue: e.online_value,
                offlineValue: e.offline_value
            })),
            ...n && {
                allowedDomains: n
            },
            __unsafeProperties: {
                ...r.s && {
                    s: !0
                },
                group: {
                    chatBoosters: r.group.chat_boosters,
                    disabledMinimized: "1" === r.group["chat_window.disable_minimized"],
                    disabledMinimizedOnMobile: "1" === r.group["chat_window.mobile_disable_minimized"],
                    disabledOnMobile: "1" === r.group["chat_window.hide_on_mobile"],
                    eyeCatcher: "1" === r.group["embedded_chat.display_eye_catcher"] ? Ut(e) : {
                        enabled: !1
                    },
                    hasAgentAvatarsEnabled: "1" === r.group["chat_window.display_avatar"],
                    hasCustomMobileSettings: "1" === r.group["chat_window.custom_mobile_settings"],
                    hasHiddenTrademark: "1" === r.group["chat_window.hide_trademark"],
                    hasSoundsEnabled: "0" === r.group["chat_window.disable_sounds"],
                    initiallyHidden: "1" === r.group["chat_window.hide_on_init"] || "1" === r.group["chat_window.disable_minimized"],
                    initiallyHiddenOnMobile: "1" === r.group["chat_window.mobile_hide_on_init"] || "1" === r.group["chat_window.mobile_disable_minimized"],
                    hideOnInit: "1" === r.group["chat_window.hide_on_init"],
                    language: r.group.language,
                    linksUnfurlingEnabled: "1" === r.group.links_unfurling,
                    logo: "1" === r.group["chat_window.display_logo"] ? {
                        enabled: !0,
                        src: r.group["chat_window.logo_path"]
                    } : {
                        enabled: !1
                    },
                    minimizedType: r.group["chat_window.theme.minimized"],
                    minimizedTypeOnMobile: r.group["chat_window.mobile_minimized_theme"],
                    offlineMessagesEnabled: c,
                    offsetX: parseInt(r.group["chat_window.offset_x"]),
                    offsetXOnMobile: parseInt(r.group["chat_window.mobile_offset_x"]),
                    offsetY: parseInt(r.group["chat_window.offset_y"]),
                    offsetYOnMobile: parseInt(r.group["chat_window.mobile_offset_y"]),
                    prechatFormAfterGreetingEnabled: "1" === r.group.pre_chat_survey_after_greeting,
                    ratingEnabled: "1" === r.group["rate_me.enabled"],
                    screenPosition: r.group["chat_window.screen_position"],
                    screenPositionOnMobile: r.group["chat_window.mobile_screen_position"],
                    transcriptButtonEnabled: "1" === r.group["chat_window.display_transcript_button"],
                    theme: {
                        name: r.group["chat_window.new_theme.name"],
                        variant: r.group["chat_window.new_theme.variant"] || "light",
                        customJson: r.group["chat_window.new_theme.custom_json"],
                        agentbarBackgroundColor: r.group["chat_window.new_theme.agentbar_background_color"],
                        agentbarText: r.group["chat_window.new_theme.agentbar_text"],
                        agentMessageColorBackground: r.group["chat_window.new_theme.agent_message_color_background"],
                        agentMessageColorText: r.group["chat_window.new_theme.agent_message_color_text"],
                        backgroundColor: r.group["chat_window.new_theme.background_color"],
                        ctaColor: r.group["chat_window.new_theme.cta_color"],
                        minimizedColorBackground: r.group["chat_window.new_theme.minimized_color_background"],
                        minimizedColorIcon: r.group["chat_window.new_theme.minimized_color_icon"],
                        minimizedColorText: r.group["chat_window.new_theme.minimized_color_text"],
                        systemMessageColor: r.group["chat_window.new_theme.system_message_color"],
                        titlebarBackgroundColor: r.group["chat_window.new_theme.titlebar_background_color"],
                        titlebarText: r.group["chat_window.new_theme.titlebar_text"],
                        visitorMessageColorBackground: r.group["chat_window.new_theme.visitor_message_color_background"],
                        visitorMessageColorText: r.group["chat_window.new_theme.visitor_message_color_text"]
                    }
                },
                license: {
                    creditCardMaskingEnabled: "1" === r.license.mask_credit_cards,
                    nonProfit: "1" === r.license.non_profit,
                    licenseinboundForwardingToHelpdeskEnabled: "1" === r.license["helpdesk.inbound_forwarding"]
                },
                helpdeskIntegrationEnabled: d,
                ticketFormMode: (p = e,
                Yt(p) ? "helpdesk" : "0" === p.__priv.group.tickets_enabled ? "offline_message" : "livechat")
            }
        };
        var p
    }
      , Kt = e => {
        const t = Jt("get_localization", e);
        return (n = t + "?" + H({
            organization_id: e.organizationId,
            version: e.version,
            language: e.language,
            ..."number" == typeof e.groupId && {
                group_id: e.groupId
            }
        }),
        i = i || {},
        new Promise((function(e, t) {
            var o = new XMLHttpRequest
              , r = []
              , a = []
              , s = {}
              , c = function() {
                return {
                    ok: 2 == (o.status / 100 | 0),
                    statusText: o.statusText,
                    status: o.status,
                    url: o.responseURL,
                    text: function() {
                        return Promise.resolve(o.responseText)
                    },
                    json: function() {
                        return Promise.resolve(o.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([o.response]))
                    },
                    clone: c,
                    headers: {
                        keys: function() {
                            return r
                        },
                        entries: function() {
                            return a
                        },
                        get: function(e) {
                            return s[e.toLowerCase()]
                        },
                        has: function(e) {
                            return e.toLowerCase()in s
                        }
                    }
                }
            };
            for (var l in o.open(i.method || "get", n, !0),
            o.onload = function() {
                o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, t, n) {
                    r.push(t = t.toLowerCase()),
                    a.push([t, n]),
                    s[t] = s[t] ? s[t] + "," + n : n
                }
                )),
                e(c())
            }
            ,
            o.onerror = t,
            o.withCredentials = "include" == i.credentials,
            i.headers)
                o.setRequestHeader(l, i.headers[l]);
            o.send(i.body || null)
        }
        ))).then((e => e.json())).then((e => k((e => e.toLowerCase()), e)));
        var n, i
    }
      , Qt = (e, t, n, i) => {
        const o = "https://api.openwidget.com/v1.0/configuration/" + e;
        return Wt(( () => Rt(o, {
            callbackName: "ow_config",
            query: {
                ...t && {
                    integration_name: t
                },
                ...n && {
                    tid: n
                },
                ...i && {
                    test: !0
                }
            }
        }).then((t => {
            let {staticConfig: i, localization: o, ...r} = t;
            return {
                ...r,
                ...$t(i),
                localization: k((e => e.toLowerCase()), o),
                organizationId: e,
                templateId: null != n ? n : 0
            }
        }
        ))), {
            minTime: 500,
            maxTime: 5e3,
            retriesCount: 20
        })
    }
      , Zt = e => {
        const t = document.createElement("textarea");
        t.value = e,
        t.style.position = "fixed",
        t.style.top = "0",
        t.style.left = "0",
        t.style.opacity = "0",
        document.body.appendChild(t),
        t.select(),
        document.execCommand("copy"),
        document.body.removeChild(t)
    }
      , en = "data-lc-focus"
      , tn = "data-lc-event"
      , nn = "data-lc-prop"
      , on = "data-lc-action"
      , rn = "data-lc-action-value"
      , an = "data-lc-action-success";
    let sn = E;
    const cn = e => {
        let {allowAutoplay: t, allowVideoConferencing: n, allowClipboardWrite: i, allowDisplayCapture: o} = e
          , r = ["clipboard-read; clipboard-write;"];
        if (t && !jt() && r.push("autoplay;"),
        o && r.push("display-capture *;"),
        n) {
            const e = {
                "display-capture *;": !Mt() || Nt() >= 94,
                "picture-in-picture *;": "PictureInPictureEvent"in window,
                "fullscreen *;": "function" == typeof Element.prototype.requestFullscreen
            };
            r = [].concat(r, ["microphone *;", "camera *;"], Object.keys((s = Boolean,
            a(c = e).reduce(( (e, t) => (s(c[t]) && (e[t] = c[t]),
            e)), {}))))
        }
        var s, c;
        return i && !jt() && r.push("clipboard-write *;"),
        r.join(" ")
    }
      , ln = e => e.replace(/\?+$/, "");
    function dn(e, t) {
        return re((n = () => me(pe(e, "state_diff"), fe(( () => e.state)), he(e.state), fe(t), se(P), Ae(pe(e, "unbind"))),
        (e, t) => {
            if (0 === e) {
                let e = !1;
                t(0, (t => {
                    2 === t && (e = !0)
                }
                )),
                t(1, n()),
                e || t(2)
            }
        }
        ));
        var n
    }
    const un = (e, t) => me(dn(e, t), Ce(1))
      , pn = ["maximize", "minimize"]
      , mn = {
        maximize: ["feature", "messageDraft"],
        minimize: []
    }
      , hn = (e, t) => {
        const n = e.target;
        if (!(n instanceof Element))
            return;
        const i = n.closest("[data-openwidget-action]");
        if (!i)
            return;
        const o = i.getAttribute("data-openwidget-action");
        if (!o)
            return void console.error("OpenWidget: Action attribute value not found.");
        if (!(e => v(e, pn))(o))
            return void console.error('OpenWidget: Action "' + o + '" is not allowed. Allowed actions: ' + pn.join(", "));
        const r = ( (e, t) => {
            const n = {}
              , i = mn[t];
            return i && i.forEach((t => {
                const i = e.getAttribute("data-openwidget-" + t);
                i && (n[t] = i)
            }
            )),
            n
        }
        )(i, o);
        t[o](r)
    }
    ;
    let fn = null;
    const gn = () => {
        if (fn)
            throw Error("Title notification service already initialized");
        fn = ( () => {
            try {
                let e = document.title
                  , t = null
                  , n = void 0;
                const i = document.querySelector("title");
                return i && new MutationObserver((n => {
                    const i = n[0].target.textContent;
                    i && ![e, t].includes(i) && (e = i)
                }
                )).observe(i, {
                    subtree: !0,
                    characterData: !0,
                    childList: !0
                }),
                {
                    setTitleNotification: i => {
                        i !== t && (t = i,
                        e = document.title,
                        document.title = t,
                        clearInterval(n),
                        n = window.setInterval(( () => {
                            document.title = document.title === e && t ? t : e
                        }
                        ), 2e3))
                    }
                    ,
                    clearTitleNotification: () => {
                        document.title = e,
                        clearInterval(n),
                        t = null
                    }
                    ,
                    getOriginalPageTitle: () => e
                }
            } catch (e) {
                return console.error("Error while creating title notification service", e),
                null
            }
        }
        )()
    }
      , vn = () => {
        if (!fn)
            throw Error("Title notification service not initialized");
        return fn
    }
      , _n = () => ({
        title: fn ? fn.getOriginalPageTitle() : document.title,
        url: ln(document.location + ""),
        referrer: document.referrer
    })
      , wn = e => {
        me(function(e, t) {
            return oe((n => {
                const i = new MutationObserver(n);
                return i.observe(e, t),
                () => {
                    i.disconnect()
                }
            }
            ))
        }(document.body, {
            childList: !0,
            subtree: !0
        }), fe(_n), se(( (e, t) => e.url === t.url)), Ae(pe(e, "unbind")), le((t => {
            e.call("storeMethod", ["setApplicationState", {
                page: t
            }])
        }
        )))
    }
    ;
    var yn = "application/x-postmate-v1+json"
      , bn = 0
      , kn = {
        handshake: 1,
        "handshake-reply": 1,
        call: 1,
        emit: 1,
        reply: 1,
        request: 1
    }
      , In = function(e, t) {
        return ("string" != typeof t || e.origin === t) && (!!e.data && ("object" == typeof e.data && ("postmate"in e.data && (e.data.type === yn && !!kn[e.data.postmate]))))
    }
      , Cn = function() {
        function e(e) {
            var t = this;
            this.parent = e.parent,
            this.frame = e.frame,
            this.child = e.child,
            this.childOrigin = e.childOrigin,
            this.events = {},
            this.listener = function(e) {
                if (!In(e, t.childOrigin))
                    return !1;
                var n = ((e || {}).data || {}).value || {}
                  , i = n.name;
                "emit" === e.data.postmate && i in t.events && t.events[i].call(t, n.data)
            }
            ,
            this.parent.addEventListener("message", this.listener, !1)
        }
        var t = e.prototype;
        return t.get = function(e) {
            var t = this;
            return new En.Promise((function(n) {
                var i = ++bn;
                t.parent.addEventListener("message", (function e(o) {
                    o.data.uid === i && "reply" === o.data.postmate && (t.parent.removeEventListener("message", e, !1),
                    n(o.data.value))
                }
                ), !1),
                t.child.postMessage({
                    postmate: "request",
                    type: yn,
                    property: e,
                    uid: i
                }, t.childOrigin)
            }
            ))
        }
        ,
        t.call = function(e, t) {
            this.child.postMessage({
                postmate: "call",
                type: yn,
                property: e,
                data: t
            }, this.childOrigin)
        }
        ,
        t.on = function(e, t) {
            this.events[e] = t
        }
        ,
        t.destroy = function() {
            window.removeEventListener("message", this.listener, !1),
            this.frame.parentNode.removeChild(this.frame)
        }
        ,
        e
    }()
      , xn = function() {
        function e(e) {
            var t = this;
            this.model = e.model,
            this.parent = e.parent,
            this.parentOrigin = e.parentOrigin,
            this.child = e.child,
            this.child.addEventListener("message", (function(e) {
                if (In(e, t.parentOrigin)) {
                    var n = e.data
                      , i = n.property
                      , o = n.uid
                      , r = n.data;
                    "call" !== e.data.postmate ? function(e, t) {
                        var n = "function" == typeof e[t] ? e[t]() : e[t];
                        return En.Promise.resolve(n)
                    }(t.model, i).then((function(t) {
                        return e.source.postMessage({
                            property: i,
                            postmate: "reply",
                            type: yn,
                            uid: o,
                            value: t
                        }, e.origin)
                    }
                    )) : i in t.model && "function" == typeof t.model[i] && t.model[i].call(t, r)
                }
            }
            ))
        }
        return e.prototype.emit = function(e, t) {
            this.parent.postMessage({
                postmate: "emit",
                type: yn,
                value: {
                    name: e,
                    data: t
                }
            }, this.parentOrigin)
        }
        ,
        e
    }()
      , En = function() {
        function e(e) {
            var t = e.container
              , n = void 0 === t ? void 0 !== n ? n : document.body : t
              , i = e.model
              , o = e.url
              , r = e.iframeAllowedProperties;
            return this.parent = window,
            this.frame = document.createElement("iframe"),
            r && (this.frame.allow = r),
            n.appendChild(this.frame),
            this.child = this.frame.contentWindow || this.frame.contentDocument.parentWindow,
            this.model = i || {},
            this.sendHandshake(o)
        }
        return e.prototype.sendHandshake = function(t) {
            var n, i = this, o = function(e) {
                var t = document.createElement("a");
                t.href = e;
                var n = t.protocol.length > 4 ? t.protocol : window.location.protocol
                  , i = t.host.length ? "80" === t.port || "443" === t.port ? t.hostname : t.host : window.location.host;
                return t.origin || n + "//" + i
            }(t), r = 0;
            return new e.Promise((function(e, a) {
                i.parent.addEventListener("message", (function t(r) {
                    return !!In(r, o) && ("handshake-reply" === r.data.postmate ? (clearInterval(n),
                    i.parent.removeEventListener("message", t, !1),
                    i.childOrigin = r.origin,
                    e(new Cn(i))) : a("Failed handshake"))
                }
                ), !1);
                var s = function() {
                    r++,
                    i.child.postMessage({
                        postmate: "handshake",
                        type: yn,
                        model: i.model
                    }, o),
                    5 === r && clearInterval(n)
                }
                  , c = function() {
                    s(),
                    n = setInterval(s, 500)
                };
                i.frame.attachEvent ? i.frame.attachEvent("onload", c) : i.frame.addEventListener("load", c),
                i.frame.src = t
            }
            ))
        }
        ,
        e
    }();
    En.debug = !1,
    En.Promise = function() {
        try {
            return window ? window.Promise : Promise
        } catch (e) {
            return null
        }
    }(),
    En.Model = function() {
        function e(e) {
            return this.child = window,
            this.model = e,
            this.parent = this.child.parent,
            this.sendHandshakeReply()
        }
        return e.prototype.sendHandshakeReply = function() {
            var e = this;
            return new En.Promise((function(t, n) {
                e.child.addEventListener("message", (function i(o) {
                    if (o.data.postmate) {
                        if ("handshake" === o.data.postmate) {
                            e.child.removeEventListener("message", i, !1),
                            o.source.postMessage({
                                postmate: "handshake-reply",
                                type: yn
                            }, o.origin),
                            e.parentOrigin = o.origin;
                            var r = o.data.model;
                            return r && Object.keys(r).forEach((function(t) {
                                e.model[t] = r[t]
                            }
                            )),
                            t(new xn(e))
                        }
                        return n("Handshake Reply Failed")
                    }
                }
                ), !1)
            }
            ))
        }
        ,
        e
    }(),
    En.Promise = Promise;
    let Ln = function(e) {
        let {methods: t, ...n} = e;
        return new En(n).then((e => {
            const n = e.on
              , o = e.call
              , r = function() {
                for (var t = arguments.length, n = Array(t), i = 0; t > i; i++)
                    n[i] = arguments[i];
                return o.apply(e, n)
            }
              , a = qt()
              , s = {}
              , c = {};
            return t.resolveRemoteCall = e => {
                let {id: t, value: n} = e;
                const i = c[t];
                delete c[t],
                i(n)
            }
            ,
            e.on = (t, i) => {
                a.on(t, i),
                s[t] || (s[t] = !0,
                function() {
                    for (var t = arguments.length, i = Array(t), o = 0; t > o; o++)
                        i[o] = arguments[o];
                    n.apply(e, i)
                }(t, (e => {
                    a.emit(t, e)
                }
                )))
            }
            ,
            e.off = a.off,
            e.on("remote-call", (n => {
                let {id: i, method: o, args: a} = n;
                const s = "function" == typeof t[o] ? t[o].apply(e, a) : void 0;
                s && "function" == typeof s.then ? s.then((e => {
                    r("resolveRemoteCall", {
                        id: i,
                        value: e
                    })
                }
                )) : r("resolveRemoteCall", {
                    id: i,
                    value: s
                })
            }
            )),
            e.emit = (e, t) => {
                r("emitEvent", {
                    event: e,
                    data: t
                })
            }
            ,
            e._emit = a.emit,
            e.call = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++)
                    n[i - 1] = arguments[i];
                return new Promise((t => {
                    const i = f(c);
                    c[i] = t,
                    r("remoteCall", {
                        id: i,
                        method: e,
                        args: n
                    })
                }
                ))
            }
            ,
            i(e, t)
        }
        ))
    };
    const An = window.Wix;
    var Pn = () => new Promise((e => {
        An.getSiteInfo((t => {
            let n = t.url;
            const i = t.referrer || t.referer || "";
            t.baseUrl && -1 === n.indexOf(t.baseUrl) && (n = t.baseUrl);
            e({
                title: t.pageTitle,
                referrer: i,
                url: n
            })
        }
        ))
    }
    ));
    const Tn = Promise.resolve()
      , zn = e => {
        Tn.then(e)
    }
      , On = e => zn(( () => {
        throw e
    }
    ));
    function Sn(e) {
        return me(dn(e, (e => Ve(e, "availability"))), ce(y))
    }
    const Mn = "liveChatChatId";
    function Nn(e) {
        return me(dn(e, (e => De(e, Mn).active)), Ce(1), ge((t => t ? me(dn(e, (e => De(e, Mn).properties.currentAgent)), ce(Boolean), fe(( () => t)), Ee(1)) : we(t))))
    }
    function jn(e, t) {
        return me(pe(e, "state_diff"), fe(( () => Ve(e.state, "readyState"))), ce((e => e === t)), Ee(1), Ie)
    }
    function Dn(e, t) {
        return me(jn(e, M), ge(t))
    }
    function qn(e, t) {
        return me(jn(e, N), ge(t))
    }
    function Wn(e, t) {
        return me(dn(e, (e => Ve(e, "invitation"))), fe((e => e[t])), ce(y), ye, ce((e => {
            let[t,n] = e;
            return n.length > t.length
        }
        )), fe((e => {
            let[,t] = e;
            return b(t)
        }
        )))
    }
    const Bn = () => window.GoogleAnalyticsObject || "ga"
      , Fn = e => {
        let {event: t, label: n, nonInteraction: i, trackerName: o} = e;
        const r = window[Bn()];
        r && "function" == typeof r && r([o, "send"].filter(Boolean).join("."), {
            hitType: "event",
            eventCategory: "LiveChat",
            eventAction: t,
            eventLabel: n,
            nonInteraction: i
        })
    }
      , Hn = {
        ga: Fn,
        gaAll: e => {
            const t = window[Bn()];
            if (!t || "function" != typeof t.getAll)
                return;
            const n = t.getAll();
            o(n) && n.forEach((t => {
                Fn({
                    ...e,
                    trackerName: t && "function" == typeof t.get ? t.get("name") : null
                })
            }
            ))
        }
        ,
        gaq: e => {
            let {event: t, label: n, nonInteraction: i} = e;
            const o = window._gaq;
            o && "function" == typeof o.push && o.push(["_trackEvent", "LiveChat", t, n, null, i])
        }
        ,
        gtm: e => {
            let {event: t, label: n, nonInteraction: i} = e;
            const o = window.dataLayer;
            o && "function" == typeof o.push && o.push({
                event: "LiveChat",
                eventCategory: "LiveChat",
                eventAction: t,
                eventLabel: n,
                nonInteraction: i
            })
        }
        ,
        pageTracker: e => {
            let {event: t, label: n, nonInteraction: i} = e;
            const o = window.pageTracker;
            o && "function" == typeof o._trackEvent && o._trackEvent("LiveChat", t, n, null, i)
        }
        ,
        urchinTracker: e => {
            let {event: t} = e;
            const n = window.urchinTracker;
            n && "function" == typeof n && n(t)
        }
        ,
        gtag: e => {
            let {event: t, label: n, nonInteraction: i} = e;
            const o = window.gtag;
            o && "function" == typeof o && o("event", t, {
                event_category: "LiveChat",
                event_label: n,
                non_interaction: i
            })
        }
    }
      , Vn = e => {
        let {version: t, omitGtm: n, sendToAll: i} = e;
        if (t && "function" == typeof Hn[t])
            return i && "ga" === t ? "gaAll" : t;
        if ("object" == typeof window.pageTracker && "function" == typeof window.pageTracker._trackEvent)
            return "pageTracker";
        if ("function" == typeof window.urchinTracker)
            return "urchinTracker";
        if ("function" == typeof window.gtag)
            return "gtag";
        if (!n && "object" == typeof window.dataLayer && "function" == typeof window.dataLayer.push)
            return "gtm";
        if ("object" == typeof window._gaq)
            return "gaq";
        if (window.GoogleAnalyticsObject && "string" == typeof window.GoogleAnalyticsObject)
            return i ? "gaAll" : "ga";
        if ("function" == typeof window.ga) {
            let e = !1;
            if (window.ga((t => {
                e = "object" == typeof t
            }
            )),
            e)
                return i ? "gaAll" : "ga"
        }
        return null
    }
      , Rn = {
        Chat: "LiveChat Chat started",
        "Automated greeting": "LiveChat Automated greeting displayed",
        "Ticket form": "LiveChat Ticket form displayed",
        "Ticket form filled in": "LiveChat Ticket form filled in",
        "Pre-chat survey": "LiveChat Pre-chat survey displayed",
        "Pre-chat survey filled in": "LiveChat Pre-chat survey filled in",
        "Post-chat survey": "LiveChat Post-chat survey displayed",
        "Post-chat survey filled in": "LiveChat Post-chat survey filled in"
    }
      , Gn = () => window.mixpanel && "function" == typeof window.mixpanel.track && "function" == typeof window.mixpanel.register
      , Un = {
        googleAnalytics: e => {
            let {trackerName: t} = e;
            return t ? Hn[t] : null
        }
        ,
        kissmetrics: () => null,
        mixpanel: () => {
            if (!Gn())
                return null;
            return e => {
                let {event: t, eventData: n, persistentData: i} = e;
                if (!Gn())
                    return;
                const {mixpanel: o} = window;
                i && (o.register(i),
                !Gn()) || t in Rn && o.track(Rn[t], n)
            }
        }
    };
    var Jn = (e, t) => {
        let {analytics: n} = t;
        const i = Object.keys(n).filter((e => n[e].enabled)).map((e => {
            const t = n[e]
              , i = Un[e];
            try {
                return i(t)
            } catch (e) {
                return On(e),
                null
            }
        }
        )).filter(Boolean);
        if (0 === i.length)
            return;
        const o = function(t, n) {
            let {group: o=Ve(e.state, "group"), nonInteraction: r=!1, eventData: a={}, persistentData: s=null, useDataAsLabel: c=!1} = void 0 === n ? {} : n;
            const l = 0 !== o ? "Group ID: " + o : "(no group)"
              , d = c ? O(a).map((e => {
                let[t,n] = e;
                return t + ": " + n
            }
            )).join(", ") : l;
            i.forEach((e => {
                try {
                    e({
                        event: t,
                        nonInteraction: r,
                        label: d,
                        eventData: {
                            ...a,
                            group: l
                        },
                        persistentData: s
                    })
                } catch (e) {
                    On(e)
                }
            }
            ))
        };
        me(dn(e, (e => Ve(e, "readyState"))), ce((e => e === M)), Ee(1), ge(( () => Nn(e))), ce(Boolean), le(( () => {
            const {email: t, name: n} = We(e.state);
            o("Chat", {
                eventData: {
                    email: t,
                    name: n
                },
                persistentData: {
                    "performed chat": !0
                }
            })
        }
        ))),
        e.on("add_event", (e => {
            let {event: {properties: t}} = e;
            t.invitation && t.receivedFirstTime && o("Automated greeting", {
                nonInteraction: !0
            })
        }
        )),
        e.on("on_chat_booster_launched", (e => {
            let {id: t, title: n} = e;
            o("Chat Booster Launched: " + n, {
                eventData: {
                    appId: t,
                    title: n
                }
            })
        }
        )),
        e.on("on_prechat_survey_submitted", ( () => {
            o("Pre-chat survey filled in")
        }
        )),
        e.on("on_postchat_survey_submitted", ( () => {
            o("Post-chat survey filled in")
        }
        )),
        e.on("on_ticket_created", (e => {
            let {visitor_email: t} = e;
            o("Ticket form filled in", {
                eventData: {
                    email: t
                }
            })
        }
        )),
        e.on("rich_greeting_button_clicked", (e => {
            let {button: t, event: n} = e;
            o("Rich greeting button clicked", {
                eventData: {
                    buttonText: t.text,
                    greetingId: n.properties.id
                },
                useDataAsLabel: !0
            })
        }
        )),
        ["prechat", "postchat", "ticket", "offline"].forEach((t => {
            var n;
            me(ue(pe(e, "set_default_view"), pe(e, "set_current_view")), ce((e => e.viewInfo && "Chat" === e.viewInfo.view && e.viewInfo.default === t)), Ae(pe(e, "unbind")), (n = () => {
                const [n,i] = {
                    prechat: ["on_prechat_survey_submitted", "Pre-chat survey"],
                    postchat: ["on_postchat_survey_submitted", "Post-chat survey"],
                    ticket: ["on_ticket_created", "Ticket form"],
                    offline: ["on_ticket_created", "Ticket form"]
                }[t];
                return me(function() {
                    for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
                        t[n] = arguments[n];
                    return (e, n) => {
                        if (0 !== e)
                            return;
                        const i = t.length;
                        if (0 === i)
                            return n(0, ( () => {}
                            )),
                            void n(2);
                        let o, r = 0;
                        const a = (e, t) => {
                            o(e, t)
                        }
                        ;
                        !function e() {
                            r !== i ? t[r](0, ( (t, i) => {
                                0 === t ? (o = i,
                                0 === r ? n(0, a) : o(1)) : 2 === t && i ? n(2, i) : 2 === t ? (r++,
                                e()) : n(t, i)
                            }
                            )) : n(2)
                        }()
                    }
                }(we(i), _e), (o = me(dn(e, (e => Dt(e, "maximized"))), ce(Boolean)),
                s = void 0 === (a = (void 0 === r ? {} : r).size) ? 100 : a,
                function(e) {
                    return function(t, n) {
                        var i = [];
                        if (0 === t) {
                            var r, a, c = !1;
                            e(0, (function(e, t) {
                                if (0 === e && (r = t,
                                o(0, (function(e, t) {
                                    if (0 === e)
                                        (a = t)(1);
                                    else if (1 === e) {
                                        c = !0,
                                        a(2);
                                        var o = i.slice();
                                        i.length = 0,
                                        o.forEach((function(e) {
                                            return n(1, e)
                                        }
                                        ))
                                    }
                                }
                                ))),
                                1 === e)
                                    return c ? void n(1, t) : (i.push(t),
                                    i.length > s && i.shift(),
                                    void r(1));
                                n(e, t)
                            }
                            ))
                        }
                    }
                }
                ), Ae(pe(e, n)));
                var o, r, a, s
            }
            ,
            function(e) {
                return function(t, i) {
                    if (0 === t) {
                        var o, r = null, a = function(e, t) {
                            if (0 !== e)
                                return 1 === e ? (i(1, t),
                                void r(1)) : void (2 === e && (r = null));
                            (r = t)(1)
                        }, s = function(e, t) {
                            2 === e && null !== r && r(2, t),
                            o(e, t)
                        };
                        e(0, (function(e, t) {
                            if (0 === e)
                                return o = t,
                                void i(0, s);
                            if (1 !== e) {
                                if (2 === e) {
                                    if (i(2, t),
                                    null === r)
                                        return;
                                    r(2, t)
                                }
                            } else {
                                if (null !== r)
                                    return;
                                n(t)(0, a)
                            }
                        }
                        ))
                    }
                }
            }
            ), le((e => {
                o(e)
            }
            )))
        }
        ))
    }
    ;
    const Xn = e => {
        let {actingAsDirectLink: t, isInCustomContainer: n} = e;
        return t || n
    }
      , Yn = () => {
        const e = "lc_get_time_" + h();
        window.performance && "function" == typeof window.performance.mark && window.performance.mark(e);
        const [{startTime: t}] = performance.getEntriesByName(e);
        return performance.clearMarks(e),
        t
    }
      , $n = () => {
        if ("undefined" == typeof PerformanceObserver)
            return null;
        const e = Yn()
          , t = []
          , n = new PerformanceObserver((e => {
            t.push.apply(t, e.getEntries())
        }
        ));
        n.observe({
            entryTypes: ["longtask"]
        });
        const i = () => {
            const n = b(t);
            return n ? (i = n,
            Yn() - i.startTime + i.duration) : Yn() - e;
            var i
        }
        ;
        return {
            disconnect: () => n.disconnect(),
            getLongTasks: () => [].concat(t),
            waitForIdle: e => new Promise((o => {
                const r = () => {
                    t.push.apply(t, n.takeRecords());
                    const a = i();
                    e > a ? setTimeout(r, Math.ceil(e - a)) : o()
                }
                ;
                r()
            }
            ))
        }
    }
      , Kn = function(e) {
        void 0 === e && (e = "first-contentful-paint");
        const t = $n();
        return t ? (n = e,
        new Promise((e => {
            const t = performance.getEntriesByName(n);
            if (!_(t))
                return void e(t[0]);
            if ("undefined" == typeof PerformanceObserver)
                return void e(null);
            const i = setTimeout(( () => {
                o.disconnect(),
                e(null)
            }
            ), 6e4)
              , o = new PerformanceObserver((t => {
                const r = d((e => e.name === n), t.getEntries());
                r && (o.disconnect(),
                clearTimeout(i),
                e(r))
            }
            ));
            o.observe({
                entryTypes: ["paint"]
            })
        }
        ))).then((e => e ? t.waitForIdle(5e3).then(( () => (t.disconnect(),
        t.getLongTasks()))) : null)) : Promise.resolve(null);
        var n
    }
      , Qn = e => {
        const t = performance.getEntriesByName(e);
        return 1 !== t.length ? null : t[0]
    }
      , Zn = (e, t) => e && t ? Math.abs(t.startTime - e.startTime) : null
      , ei = e => {
        if (!e)
            return null;
        const t = performance.getEntriesByType("navigation");
        return e.startTime - (_(t) ? performance.timing.domContentLoadedEventStart - performance.timing.navigationStart : t[0].domContentLoadedEventStart)
    }
      , ti = () => {
        if (Math.floor(1e3 * Math.random()))
            return;
        const e = Kn().then((e => e ? T(e.filter((e => v(".livechatinc.com", e.attribution[0].containerSrc))).map((e => e.duration))) : null));
        return {
            getLogs: () => e.then((e => {
                const t = ( () => {
                    const e = performance.getEntriesByType("resource").filter((e => /livechatinc\.com\/(.+\/)?tracking.js/.test(e.name)));
                    return 1 !== e.length ? null : e[0]
                }
                )()
                  , n = Qn("lc_bridge_init")
                  , i = Qn("lc_bridge_ready");
                return s((e => e && Number(e.toFixed(2))), {
                    timeFromTrackingStart: Zn(t, i),
                    timeFromBridgeInit: Zn(n, i),
                    timeFromDomContentLoaded: ei(i),
                    totalBlockingTimeContributedToOurScript: e
                })
            }
            ))
        }
    }
      , ni = e => {
        e.innerHTML = ""
    }
    ;
    var ii = (e, t) => {
        const n = document.querySelectorAll(".livechat_button")
          , i = v(t.groupId, t.onlineGroupIds || []);
        [].forEach.call(n, (n => {
            const o = n.getAttribute("data-id")
              , r = d((e => e.id === o), t.buttons);
            if (!r)
                return;
            const a = g("#", "0.href", n);
            "image" === r.type ? ( (e, t) => {
                let {text: n, url: i, src: o} = e;
                ni(t);
                const r = $e("a", {
                    href: i
                })
                  , a = $e("img", {
                    src: o,
                    alt: n,
                    title: n
                });
                r.appendChild(a),
                t.appendChild(r)
            }
            )({
                url: a,
                text: n.textContent,
                src: i ? r.onlineValue : r.offlineValue
            }, n) : ( (e, t) => {
                let {text: n, url: i} = e;
                ni(t);
                const o = $e("a", {
                    href: i
                });
                o.appendChild(document.createTextNode(n)),
                t.appendChild(o)
            }
            )({
                url: a,
                text: i ? r.onlineValue : r.offlineValue
            }, n),
            n.children[0].addEventListener("click", (t => {
                t.preventDefault(),
                e.maximize()
            }
            ))
        }
        ))
    }
    ;
    const oi = (e, t) => {
        const n = () => {
            t() || Re(tt, e)
        }
          , i = () => {
            t() || Re(nt, e)
        }
        ;
        if ("onbeforeprint"in window)
            window.addEventListener("beforeprint", n),
            window.addEventListener("afterprint", i);
        else if (zt(window.matchMedia)) {
            const e = window.matchMedia("print");
            e && e.addListener((e => {
                e.matches ? n() : i()
            }
            ))
        }
    }
    ;
    var ri = (e, t, n) => {
        const {eyeCatcher: i} = t.__unsafeProperties.group;
        if (!i.enabled || ( (e, t) => {
            const n = e.__unsafeProperties.group;
            return ft(e, t) ? n.disabledMinimizedOnMobile : n.disabledMinimized
        }
        )(t))
            return;
        let o, r;
        const a = e => {
            const {visibility: t, eyeCatcher: n, availability: i, readyState: o} = Ve(e);
            return n.hidden || "minimized" !== t.state || "online" !== i || o === S
        }
          , s = () => {
            o && (Ye(o),
            o = null),
            clearTimeout(r)
        }
          , c = () => {
            const o = $e("div", ot)
              , r = gt(t);
            Re({
                bottom: i.y + "px",
                [r]: i.x + "px"
            }, o);
            const c = $e("div", rt);
            15 > i.x && "right" === r && Re({
                [r]: 10 - i.x + "px"
            }, c),
            c.innerHTML = "&times;";
            const l = $e("div", at)
              , d = {
                ...st,
                src: i.src,
                alt: n.embedded_chat_now
            };
            i.srcset && (d.srcset = O(i.srcset).map((e => {
                let[t,n] = e;
                return n + " " + t
            }
            )).join(", "));
            const u = $e("img", d);
            return l.appendChild(u),
            u.addEventListener("load", ( () => {
                const {width: e, height: t} = u;
                Re({
                    width: e + "px",
                    height: t + "px"
                }, u)
            }
            )),
            u.addEventListener("error", s),
            o.appendChild(c),
            o.appendChild(l),
            oi(o, ( () => a(e.state))),
            document.body.appendChild(o),
            ( () => {
                if (zt(window.matchMedia))
                    return !window.matchMedia("(hover: none)").matches;
                return !0
            }
            )() ? (o.addEventListener("mouseover", ( () => {
                Re({
                    display: "block"
                }, c)
            }
            )),
            o.addEventListener("mouseout", ( () => {
                Re({
                    display: "none"
                }, c)
            }
            ))) : Re({
                display: "block"
            }, c),
            o.addEventListener("click", (t => {
                t.stopPropagation(),
                t.preventDefault(),
                e.maximize()
            }
            )),
            c.addEventListener("mouseover", ( () => {
                Re({
                    color: "#444"
                }, c)
            }
            )),
            c.addEventListener("mouseout", ( () => {
                Re({
                    color: "#000"
                }, c)
            }
            )),
            c.addEventListener("click", (t => {
                t.preventDefault(),
                t.stopPropagation(),
                e.call("hideEyeCatcher")
            }
            )),
            o
        }
        ;
        me(dn(e, a), xe({
            next: e => {
                e ? s() : r = setTimeout(( () => {
                    o = c()
                }
                ), 430)
            }
            ,
            complete: s
        }))
    }
      , ai = e => {
        me(function() {
            const e = (t = () => !!document.hasFocus && document.hasFocus(),
            (e, n) => {
                if (0 === e) {
                    let e = !1;
                    n(0, (t => {
                        2 === t && (e = !0)
                    }
                    )),
                    n(1, t()),
                    e || n(2)
                }
            }
            );
            var t;
            const n = fe(( () => !0))(de(window, "focus"))
              , i = fe(( () => !1))(de(window, "blur"));
            return ue(e, n, i)
        }(), Ae(pe(e, "unbind")), le((t => {
            e.emit("focus", t)
        }
        )))
    }
    ;
    const si = St()
      , ci = (e, t) => {
        if (e.iframeAddress)
            return e.iframeAddress;
        if (window.__ow)
            return "https://cdn.livechatinc.com/widget/openwidget.html";
        let n = "https://secure" + ((1520 === e.licenseId ? "-lc" : "") + ".livechatinc.com");
        return t.region && (n = n.replace("secure", "secure-" + t.region)),
        n + "/customer/action/open_chat"
    }
      , li = (e, t, n) => {
        const i = !!e.customContainer;
        return {
            page: t,
            license: e.licenseId,
            region: n.region,
            group: n.groupId,
            requestedGroup: e.requestedGroupId,
            customer: e.customer,
            hidden: !(e.actingAsDirectLink || i) && (e => {
                const t = e.__unsafeProperties.group;
                return si && t.hasCustomMobileSettings ? t.initiallyHiddenOnMobile : t.initiallyHidden
            }
            )(n),
            uniqueGroups: e.uniqueGroups,
            analytics: {
                googleAnalytics: {
                    enabled: !!n.integrations.analytics,
                    trackerName: Vn(e.gaParams)
                },
                kissmetrics: {
                    enabled: !!n.integrations.kissmetrics
                },
                mixpanel: {
                    enabled: !!n.integrations.mixpanel
                }
            },
            actingAsDirectLink: e.actingAsDirectLink,
            initMaximized: e.initMaximized,
            isInCustomContainer: i,
            clientLimitExceeded: n.clientLimitExceeded,
            integrationName: e.integrationName,
            productName: e.productName,
            initialView: e.initialView,
            iframeAddress: ci(e, n)
        }
    }
      , di = "chat-widget-exit-intent-overlay";
    let ui;
    const pi = e => {
        const t = document.getElementById(di);
        if (!t)
            return;
        t.style.opacity = "0";
        const n = () => {
            t.remove(),
            t.removeEventListener("transitionend", n)
        }
        ;
        t.addEventListener("transitionend", n),
        e.call("storeMethod", ["setApplicationState", {
            isExitIntentShadeDisplayed: !1
        }]),
        window.removeEventListener("mouseover", ui)
    }
    ;
    let mi;
    var hi = (e, t) => {
        if (!e)
            return !0;
        const n = function(e) {
            const t = e.match(R);
            return t && t[1]
        }(t);
        return !!n && [].concat(e, ["livechatinc.com", "lc.chat"]).some((e => {
            const t = n.length - e.length;
            return -1 !== n.indexOf(e, t) && (n.length === e.length || "." === n.charAt(t - 1))
        }
        ))
    }
    ;
    const fi = e => t => {
        const n = window.LC_API || {};
        if ("function" == typeof t && t(n),
        "function" == typeof n[e])
            try {
                n[e]()
            } catch (e) {
                On(e)
            }
    }
    ;
    let gi = [];
    const vi = function(e) {
        30 > gi.length || (gi = gi.slice(1));
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++)
            n[i - 1] = arguments[i];
        gi.push({
            name: e,
            args: n
        })
    }
      , _i = "always visible"
      , wi = "always hide"
      , yi = "hide until it gets activated";
    function bi(e, t, n) {
        return function(i) {
            var o;
            let {prettyPrint: r=!0} = void 0 === i ? {} : i;
            const {trackerName: s} = t.analytics.googleAnalytics
              , c = !hi(n.allowedDomains, document.location.href)
              , l = [["window.open", !/native code/.test(window.open)], ["document.domain", window.location.hostname !== document.domain], ["window.frames", window.frames !== window], ["JSON.stringify", !/native code/.test(window.JSON.stringify)], ["JSON.parse", !/native code/.test(window.JSON.parse)], ["Object.keys", !/native code/.test(Object.keys)], ["console.log", !/native code/.test(console.log)]].filter((e => {
                let[,t] = e;
                return t
            }
            )).map((e => {
                let[t] = e;
                return t
            }
            ))
              , d = a(lt.style).some((t => e.frame.style.getPropertyValue(t) !== lt.style[t]))
              , {desktopVisibility: u, mobileVisibility: p} = (e => {
                let {disabledMinimized: t, disabledMinimizedOnMobile: n, hasCustomMobileSettings: i, hiddenOnMobile: o, initiallyHidden: r, initiallyHiddenOnMobile: a} = e
                  , s = ""
                  , c = "";
                return s = r ? t ? wi : yi : _i,
                c = i ? o ? wi : a ? n ? wi : yi : _i : s,
                {
                    desktopVisibility: s,
                    mobileVisibility: c
                }
            }
            )(n.__unsafeProperties.group)
              , m = [{
                msg: "language: " + n.__unsafeProperties.group.language
            }, {
                msg: "region: " + n.region
            }, {
                msg: "license number: " + window.__lc.license
            }, {
                msg: "group id: " + e.state.application.group
            }, {
                msg: "hidden: " + (e.state.application.hidden ? "yes" : "no")
            }, {
                msg: "tracker name: " + s
            }, {
                msg: "desktop visibility: " + u,
                isNotStandard: u !== _i
            }, {
                msg: "mobile visibility: " + p,
                isNotStandard: p !== _i
            }, {
                msg: "chat between groups: " + (window.__lc.chat_between_groups ? "yes" : "no")
            }, {
                msg: "is iframe inline style modified: " + (d ? "yes" : "no"),
                isNotStandard: d
            }, {
                msg: "is current domain not allowed by the allowed domains: " + (c ? "yes" : "no"),
                isNotStandard: c
            }, {
                msg: "overrides: " + (l.length > 0 ? l.join(",\n") : "none"),
                isNotStandard: l.length > 0
            }, {
                msg: "call history: " + (gi.length > 0 ? gi.map((e => {
                    let {name: t, args: n} = e;
                    return t + "(" + n.join(", ") + ")"
                }
                )).join(",\n") : "none"),
                isNotStandard: gi.length > 0
            }];
            if (!r)
                return m;
            const h = m.filter((e => {
                let {isNotStandard: t} = e;
                return t
            }
            ))
              , f = m.filter((e => {
                let {isNotStandard: t} = e;
                return !t
            }
            ))
              , g = [].concat(h, f);
            return -1 !== l.indexOf("console.log") ? g.map((e => {
                let {msg: t} = e;
                return t
            }
            )).join("\n\n") : ((o = console).log.apply(o, [g.map((e => {
                let {msg: t} = e;
                return "%c" + t
            }
            )).join("\n\n")].concat(g.map((e => {
                let {isNotStandard: t} = e;
                return t ? "color: red;" : ""
            }
            )))),
            "")
        }
    }
    function ki(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++)
            n[i - 1] = arguments[i];
        return () => {
            "function" == typeof e && e.apply(void 0, n)
        }
    }
    function Ii(e, t, n) {
        return me(pe(e, n), le((e => zn(ki(t[n], e)))))
    }
    function Ci(e) {
        return C(e.filter(Boolean).map((e => {
            let {name: t, value: n} = e;
            return {
                [t]: n + ""
            }
        }
        )))
    }
    function xi(e, t) {
        const i = d((e => {
            let[t,n] = e;
            return !n
        }
        ), O((o = t,
        ["name", "email"].reduce(( (e, t) => (n(t, o) && (e[t] = o[t]),
        e)), {}))));
        var o;
        if (i) {
            const [e,t] = i;
            console.error("[LiveChatWidget] Customer " + e + " cannot be set to " + ("" === t ? "empty string" : t))
        } else
            e.call("storeMethod", ["requestUpdateUser", Fe(e.state), t])
    }
    function Ei(e, t) {
        e.call("storeMethod", ["requestSetUserProperties", Fe(e.state), t])
    }
    function Li(e) {
        return null != e ? e + "" : null
    }
    const Ai = "liveChatChatId"
      , Pi = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++)
            n[i - 1] = arguments[i];
        return zn(ki.apply(void 0, [e].concat(n)))
    };
    function Ti(e, t, n) {
        window.LC_API = window.LC_API || {};
        const i = window.LC_API;
        me(function(e) {
            return me(dn(e, (e => Dt(e, "maximized"))), ce(y))
        }(e), le(( () => Pi(i.on_chat_window_opened)))),
        me(qn(e, ( () => function(e) {
            return me(dn(e, (e => Dt(e, "minimized"))), Ce(1), ce(y))
        }(e))), le(( () => Pi(i.on_chat_window_minimized)))),
        me(function(e) {
            return me(dn(e, (e => Dt(e, "hidden"))), ce(y))
        }(e), le(( () => Pi(i.on_chat_window_hidden)))),
        me(Sn(e), le((e => Pi(i.on_chat_state_changed, {
            state: "online" === e ? "online_for_chat" : "offline"
        })))),
        me(qn(e, ( () => Nn(e))), ce(y), le(( () => Pi(i.on_chat_started, {
            agent_name: Be(e.state, De(e.state, Ai).properties.currentAgent).name
        })))),
        me(qn(e, ( () => Nn(e))), ce(w), le(( () => Pi(i.on_chat_ended)))),
        me(qn(e, ( () => pe(e, "on_message"))), le((e => Pi(i.on_message, e)))),
        me(pe(e, "widget_resize"), le((e => {
            let {size: t} = e;
            return Pi(i.on_widget_resize, t)
        }
        ))),
        me(function(e) {
            return me(pe(e, "add_event"), ce((e => {
                let {event: t} = e;
                return t.properties.invitation
            }
            )), fe((t => {
                let {event: n} = t;
                return {
                    event: n,
                    author: Be(e.state, n.author)
                }
            }
            )))
        }(e), le((e => {
            let {author: t, event: {timestamp: n, properties: {text: o, receivedFirstTime: r}}} = e;
            Pi(i.on_message, {
                text: o,
                timestamp: n,
                invitation: !0,
                user_type: "agent",
                agent_login: t.id,
                agent_name: t.name,
                received_first_time: r
            })
        }
        ))),
        Ii(e, i, "on_postchat_survey_submitted"),
        Ii(e, i, "on_prechat_survey_submitted"),
        Ii(e, i, "on_rating_comment_submitted"),
        Ii(e, i, "on_rating_submitted"),
        Ii(e, i, "on_ticket_created"),
        i.set_custom_variables = t => {
            vi("LC_API.set_custom_variables", t),
            Ei(e, Ci(t))
        }
        ,
        i.update_custom_variables = t => {
            vi("LC_API.update_custom_variables", t),
            xi(e, {
                properties: Ci(t)
            })
        }
        ,
        i.set_visitor_name = t => {
            vi("LC_API.set_visitor_name", t),
            xi(e, {
                name: Li(t)
            })
        }
        ,
        i.set_visitor_email = t => {
            vi("LC_API.set_visitor_email", t),
            xi(e, {
                email: Li(t)
            })
        }
        ,
        i.open_chat_window = i.show_full_view = i.open_mobile_window = () => {
            vi("LC_API.open_chat_window"),
            e.maximize()
        }
        ,
        i.minimize_chat_window = () => {
            vi("LC_API.minimize_chat_window"),
            Xn(t) || e.minimize()
        }
        ,
        i.hide_eye_catcher = () => {
            vi("LC_API.hide_eye_catcher"),
            e.call("hideEyeCatcher")
        }
        ,
        i.hide_chat_window = () => {
            vi("LC_API.hide_chat_window"),
            Xn(t) || e.hide()
        }
        ,
        i.agents_are_available = () => (vi("LC_API.agents_are_available"),
        "online" === Ve(e.state, "availability")),
        i.chat_window_maximized = () => (vi("LC_API.chat_window_maximized"),
        Dt(e.state, "maximized")),
        i.chat_window_minimized = () => (vi("LC_API.chat_window_minimized"),
        Dt(e.state, "minimized")),
        i.chat_window_hidden = () => (vi("LC_API.chat_window_hidden"),
        Dt(e.state, "hidden")),
        i.visitor_queued = () => (vi("LC_API.visitor_queued"),
        De(e.state, Ai).properties.queued),
        i.chat_running = () => (vi("LC_API.chat_running"),
        De(e.state, Ai).active),
        i.visitor_engaged = () => (vi("LC_API.visitor_engaged"),
        i.visitor_queued() || i.chat_running() || !!De(e.state, Ai).properties.fakeAgentMessageId),
        i.get_window_type = () => (vi("LC_API.get_window_type"),
        "embedded"),
        i.close_chat = () => {
            vi("LC_API.close_chat"),
            e.call("storeMethod", ["requestUpdateChat", Ai, {
                active: !1
            }])
        }
        ,
        i.diagnose = bi(e, t, n),
        i.get_last_visit_timestamp = () => Ve(e.state).clientLastVisitTimestamp,
        i.get_visits_number = () => Ve(e.state).clientVisitNumber,
        i.get_page_views_number = () => Ve(e.state).clientPageViewsCount,
        i.get_chats_number = () => Ve(e.state).clientChatNumber,
        i.get_visitor_id = () => We(e.state).serverId,
        i.get_chat_id = () => De(e.state, Ai).serverId,
        i.trigger_sales_tracker = (e, t) => {
            const n = o(t) ? t : [];
            "string" == typeof e && "" !== e && i.set_custom_variables([].concat(n, [{
                name: "__sales_tracker_" + e,
                value: "1"
            }]))
        }
        ,
        i.scriptTagVersion = () => "LiveChatWidget"in window ? window.LiveChatWidget._v : "1.0",
        ["on", "off", "call", "get"].forEach((e => {
            i[e] = () => {
                const t = "LiveChatWidget"in window ? 'call it on the new "LiveChatWidget" global object.' : "upgrade your snippet code. You can do it by going to: https://my.livechatinc.com/settings/code";
                console.warn('[LiveChatWidget] In order to use "' + e + '" function you need to ' + t)
            }
        }
        )),
        i.disable_sounds = E
    }
    const zi = {
        handler: null,
        setHandler(e) {
            this.handler = e
        },
        navigate(e, t) {
            void 0 === t && (t = "_blank"),
            zn(( () => {
                window.location.origin === U(e) && "function" == typeof this.handler ? this.handler(Q(e)) : window.open(e, t)
            }
            ))
        }
    }
      , Oi = "liveChatChatId"
      , Si = e => {
        let {trackerId: t, orderId: n, orderPrice: i, ...o} = e;
        return _(o) || console.warn("When using trigger_sales_tracker, you can only pass 'trackerId', 'orderId' and 'orderPrice' as keys"),
        s(String, l({
            ["__sales_tracker_" + t]: "1",
            __order_id: n,
            __order_price: i
        }))
    }
      , Mi = e => {
        let {uniqueId: t, id: n} = e;
        return {
            uniqueId: t,
            ...n && {
                id: n
            }
        }
    }
      , Ni = (e, t) => g(null, "properties", u((e => {
        let {properties: n} = e;
        return n.uniqueId === t
    }
    ), je(e.state, Oi)))
      , ji = e => {
        return t = e => {
            let[t,[n]] = e;
            if ("call" !== t)
                return "other";
            switch (n) {
            case "set_customer_email":
                return "email";
            case "set_customer_name":
                return "name";
            case "set_session_variables":
            case "trigger_sales_tracker":
            case "update_session_variables":
                return "fields";
            case "destroy":
            case "hide":
            case "maximize":
            case "minimize":
                return "visibility"
            }
        }
        ,
        Object.keys(n = e).reduce(( (e, i) => {
            const o = n[i]
              , r = t(o);
            return e[r] = e[r] || [],
            e[r].push(o),
            e
        }
        ), {});
        var t, n
    }
    ;
    function Di(e, t, n) {
        const i = qt()
          , o = window.LiveChatWidget || window.OpenWidget
          , r = (e, t) => {
            var n;
            return (n = {
                get: _,
                call: w,
                on: h,
                once: f,
                off: i.off
            })[e].apply(n, t)
        }
          , a = (e, t) => zn(( () => i.emit(e, t)))
          , l = function(e) {
            void 0 === e && (e = []);
            const t = b(e);
            if (!t)
                return;
            const [,[n,i]] = t;
            w(n, i)
        }
          , u = ji(o._q);
        var p;
        function m(t, n, o) {
            switch (n) {
            case "new_event":
            case "form_submitted":
            case "greeting_hidden":
            case "rating_submitted":
            case "visibility_changed":
            case "greeting_displayed":
            case "availability_changed":
            case "customer_status_changed":
            case "rich_message_button_clicked":
                return void i[t](n, o);
            case "ready":
                return void (Ve(e.state, "readyState") !== S ? zn(( () => o({
                    state: g("state"),
                    customerData: g("customer_data")
                }))) : i[t](n, o));
            default:
                return void console.error('[LiveChatWidget] callback "' + n + '" does not exist.')
            }
        }
        function h(e, t) {
            vi("LiveChatWidget.on", "'" + e + "'", t),
            m("on", e, t)
        }
        function f(e, t) {
            vi("LiveChatWidget.once", "'" + e + "'", t),
            m("once", e, t)
        }
        function g(t) {
            switch (t) {
            case "state":
                {
                    const {availability: t, visibility: n} = Ve(e.state);
                    return {
                        availability: t,
                        visibility: n.state
                    }
                }
            case "chat_data":
                {
                    const {serverId: t, active: n, properties: i} = De(e.state, Oi);
                    return {
                        chatId: t || null,
                        threadId: (n || i.ended) && i.lastThread || null
                    }
                }
            case "customer_data":
                {
                    const {serverId: t, name: n, email: i, properties: o} = We(e.state)
                      , {isReturning: r} = Ve(e.state)
                      , {active: a, properties: s, events: c} = De(e.state, Oi)
                      , {queued: l, fakeAgentMessageId: u} = s
                      , p = d((e => {
                        let {id: t} = e;
                        return t === u
                    }
                    ), c)
                      , m = p && p.properties.invitation;
                    return {
                        name: n,
                        email: i,
                        isReturning: r,
                        sessionVariables: o,
                        id: t,
                        status: l ? "queued" : a ? "chatting" : m ? "invited" : "browsing"
                    }
                }
            case "features":
                return c(Ve(e.state).config.features);
            default:
                return void console.error('[LiveChatWidget] property "' + t + '" not exists.')
            }
        }
        function _(e) {
            return vi("LiveChatWidget.get", "'" + e + "'"),
            g(e)
        }
        function w(n, i) {
            switch (vi.apply(void 0, ["LiveChatWidget.call", "'" + n + "'"].concat(i)),
            n) {
            case "hide":
            case "maximize":
            case "minimize":
                if (Xn(t))
                    return;
                return void e[n](i);
            case "destroy":
                return e.kill(),
                delete window.__lc_inited,
                delete window.LC_API,
                void delete window.LiveChatWidget;
            case "set_session_variables":
                return void Ei(e, s(String, i));
            case "set_customer_name":
                return void xi(e, {
                    name: Li(i)
                });
            case "set_customer_email":
                return void xi(e, {
                    email: Li(i)
                });
            case "update_session_variables":
                return void xi(e, {
                    properties: s(String, i)
                });
            case "trigger_sales_tracker":
                return void Ei(e, Si(i));
            case "hide_greeting":
                return void e.call("hideGreeting");
            case "set_navigation_handler":
                return void zi.setHandler(i);
            default:
                return void console.error('[LiveChatWidget] method "' + n + '" not exists.')
            }
        }
        void 0 === (p = u.other) && (p = []),
        p.forEach((e => {
            const [t,n] = e;
            r(t, n)
        }
        )),
        l(u.visibility),
        l(u.name),
        l(u.email),
        (e => {
            const {mode: t, properties: n} = (void 0 === (i = e) && (i = []),
            i.reduce(( (e, t) => {
                let[,[n,i]] = t;
                switch (n) {
                case "set_session_variables":
                    return e.mode = "set",
                    e.properties = i,
                    e;
                case "trigger_sales_tracker":
                    return e.mode = "set",
                    e.properties = Si(i),
                    e;
                case "update_session_variables":
                    return "none" === e.mode && (e.mode = "update"),
                    e.properties = {
                        ...e.properties,
                        ...i
                    },
                    e
                }
            }
            ), {
                mode: "none"
            }));
            var i;
            "none" !== t && w(t + "_session_variables", n)
        }
        )(u.fields),
        o._q = [],
        o._h = r,
        o.scriptTagVersion = () => o._v,
        o.diagnose = bi(e, t, n),
        me(jn(e, N), le(( () => {
            !function() {
                const e = e => "function" == typeof e && zn(( () => e(o)));
                Array.isArray(window.__lc_onready) && (window.__lc_onready.forEach(e),
                window.__lc_onready = {
                    push: e
                })
            }(),
            a("ready", {
                state: g("state"),
                customerData: g("customer_data")
            })
        }
        ))),
        me(qn(e, ( () => Sn(e))), le((e => a("availability_changed", {
            availability: e
        })))),
        me(qn(e, ( () => un(e, ( () => g("state").visibility)))), le((e => {
            a("visibility_changed", {
                visibility: e
            })
        }
        ))),
        me(qn(e, ( () => un(e, ( () => g("customer_data").status)))), le((e => a("customer_status_changed", {
            status: e
        })))),
        me(qn(e, ( () => Wn(e, "hiddenIds"))), fe((t => Ni(e, t))), ce(y), le((e => a("greeting_hidden", Mi(e))))),
        me(qn(e, ( () => Wn(e, "displayedIds"))), fe((t => Ni(e, t))), ce(y), le((e => a("greeting_displayed", Mi(e))))),
        me(pe(e, "on_rating_submitted"), le((e => a("rating_submitted", e)))),
        me(ue(pe(e, "add_event"), pe(e, "send_event")), ce((e => {
            let {event: t} = e;
            return v(t.type, ["message", "emoji", "rich_message", "file"])
        }
        )), fe((t => {
            let {event: n} = t;
            const {author: i, timestamp: o, properties: r} = n
              , a = Be(e.state, i)
              , s = !0 === r.invitation;
            return {
                timestamp: o,
                type: n.type,
                author: {
                    id: a.serverId,
                    type: a.id === Fe(e.state) ? "customer" : "agent"
                },
                ...s && {
                    greeting: Mi(r)
                }
            }
        }
        )), le((e => a("new_event", e)))),
        me(ue(me(pe(e, "send_event"), fe((e => {
            let {event: t} = e;
            const {type: n, properties: i} = t;
            if ("rich_message_postback" === n) {
                const {eventId: e} = i;
                return {
                    postbackId: "postback"in i ? i.postback.id : i.id,
                    eventId: e
                }
            }
            if ("message" === n && i.triggeredBy) {
                const {event: e, button: t} = i.triggeredBy
                  , {postbackId: n} = t;
                return {
                    postbackId: n,
                    eventId: e
                }
            }
            return null
        }
        )), ce(y)), me(pe(e, "rich_greeting_button_clicked"), fe((e => {
            let {event: t, button: n} = e;
            const {id: i, properties: o} = t
              , {postbackId: r} = n;
            return {
                eventId: i,
                postbackId: r,
                greeting: Mi(o)
            }
        }
        )))), le((e => a("rich_message_button_clicked", e)))),
        me(ue(me(pe(e, "on_ticket_created"), fe(( () => "ticket"))), me(pe(e, "on_prechat_survey_submitted"), fe(( () => "prechat"))), me(pe(e, "on_postchat_survey_submitted"), fe(( () => "postchat")))), le((e => a("form_submitted", {
            type: e
        }))))
    }
    const qi = {
        position: Ot() ? "absolute" : "fixed",
        height: Ot() ? "calc(100vh - env(safe-area-inset-bottom))" : "100%",
        width: "100%",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflowY: "hidden"
    };
    var Wi = e => {
        const t = document.querySelector('meta[name="viewport"]') || ( () => {
            const e = $e("meta", {
                name: "viewport"
            });
            return document.getElementsByTagName("head")[0].appendChild(e),
            e
        }
        )();
        let n = null;
        const i = () => {
            const e = t.content
              , i = (o = document.body,
            Object.keys(qi).reduce(( (e, t) => (e[t] = o.style[t],
            e)), {}));
            var o;
            const {scrollTop: r} = document.documentElement;
            return t.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0",
            Re(qi, document.body),
            () => {
                n = null,
                Re(i, document.body),
                t.content = e,
                document.documentElement.scrollTop = r
            }
        }
        ;
        Dt(e.state, "maximized") && (n = i()),
        me(dn(e, (e => Dt(e, "maximized"))), ye, xe({
            next: e => {
                let[,t] = e;
                t ? n = i() : n()
            }
            ,
            complete: () => {
                n && n()
            }
        }))
    }
      , Bi = e => {
        var t;
        me((t = 2e3,
        (e, n) => {
            if (0 !== e)
                return;
            let i = 0;
            const o = setInterval(( () => {
                n(1, i++)
            }
            ), t);
            n(0, (e => {
                2 === e && clearInterval(o)
            }
            ))
        }
        ), fe(_n), se(( (e, t) => e.url === t.url)), Ae(pe(e, "unbind")), le((t => {
            e.call("storeMethod", ["setApplicationState", {
                page: t
            }])
        }
        )))
    }
    ;
    const Fi = () => {
        const e = undefined[0];
        return JSON.stringify(e)
    }
      , Hi = e => {
        me(Dn(e, ( () => pe(e, "add_event"))), ce((e => {
            let {event: t} = e;
            return "custom" === t.type && t.properties.customId && -1 !== t.properties.customId.indexOf("cyber-finger-snapshot-request-")
        }
        )), le((t => {
            let {event: n} = t;
            const i = n.properties.customId.replace("cyber-finger-snapshot-request-", "");
            try {
                const t = Fi();
                e.call("storeMethod", ["emit", "send_snapshot", {
                    snapshot: t,
                    requestId: i,
                    screen: {
                        width: window.innerWidth,
                        height: window.innerHeight,
                        scrollY: window.pageYOffset,
                        scrollX: window.pageXOffset
                    }
                }])
            } catch (e) {}
        }
        )))
    }
    ;
    function Vi(e, t) {
        return null != t && null != e && "object" == typeof t && "object" == typeof e ? Ri(t, e) : e
    }
    function Ri(e, t) {
        let i;
        if (Array.isArray(e)) {
            i = e.slice(0, t.length);
            for (let e = 0; t.length > e; e++)
                void 0 !== t[e] && (i[e] = Vi(t[e], i[e]))
        } else {
            i = {
                ...e
            };
            for (const e in t)
                n(e, t) && (void 0 === t[e] ? delete i[e] : i[e] = Vi(t[e], i[e]))
        }
        return i
    }
    var Gi = e => new Promise((t => {
        const n = i => {
            e.off("state", n),
            e.state = i,
            t(i)
        }
        ;
        e.on("state", n),
        e.on("state_diff", (t => {
            e.state = Ri(e.state, t)
        }
        )),
        e.on("store_event", (t => {
            let[n,i] = t;
            e._emit(n, i)
        }
        )),
        e.call("startStateSync")
    }
    ));
    const Ui = St()
      , Ji = e => Ui ? {
        width: "100%",
        height: "100%"
    } : "modern" === e.__unsafeProperties.group.theme.name ? {
        width: "400px",
        height: "465px"
    } : {
        width: "392px",
        height: "714px"
    }
      , Xi = (e, t) => Object.keys(e.properties.license).some((n => e.properties.license[n][t]))
      , Yi = (e, t, n) => {
        const i = vt(t, Ui);
        return !e && n ? {
            [gt(t, Ui)]: "0",
            bottom: i.y + "px",
            maxHeight: "100%"
        } : Ui && e ? {
            [gt(t, Ui)]: "0",
            bottom: "0",
            maxHeight: "100%"
        } : {
            [gt(t, Ui)]: i.x + "px",
            bottom: i.y + "px",
            maxHeight: "calc(100% - " + i.y + "px)"
        }
    }
      , $i = e => e.style.setProperty("transition", "none", "important")
      , Ki = e => {
        const t = document.createElement("div");
        return Ge((e => ({
            "aria-live": e,
            id: ut(e),
            tabIndex: -1,
            style: {
                "clip-path": "rect(0px, 0px, 0px, 0px)",
                height: "1px",
                width: "1px",
                margin: "-1px",
                overflow: "hidden",
                "white-space": "nowrap",
                border: "0px",
                padding: "0px",
                position: "absolute"
            }
        }))(e), t),
        t
    }
      , Qi = (e, t) => {
        const n = $e("div", it)
          , i = vt(e, Ui)
          , o = Yi(t, e)
          , {width: r, height: a} = Ji(e);
        return Re({
            width: r,
            height: a,
            [gt(e, Ui)]: i.x + "px",
            ...o
        }, n),
        n
    }
      , Zi = (e, t, n, i, o, r, a) => {
        var s, c;
        let u = H(l({
            license_id: t.license,
            group: t.group,
            embedded: 1,
            widget_version: 3,
            initial_view: t.initialView,
            unique_groups: Number(t.uniqueGroups),
            ...!!i && {
                custom_identity_provider: 1
            },
            ...!!o && {
                use_parent_storage: 1
            },
            ...!!r && {
                features: r
            },
            ..."openwidget" === a ? {
                organizationId: t.organizationId
            } : {}
        }));
        gn();
        const p = {
            kill() {
                this._emit("widget_resize", {
                    size: {
                        width: "0px",
                        height: "0px"
                    }
                }),
                this.unbind(),
                e.custom || Ye(e.element)
            },
            applyHiddenStyles() {
                Re(tt, e.element)
            },
            isFocused: () => !!document.hasFocus && document.hasFocus(),
            resize(t) {
                let {width: i, height: o, maximized: r, ignoreHorizontalOffset: a} = void 0 === t ? {} : t;
                const s = {
                    width: i,
                    height: o
                }
                  , c = Yi(r, n, a);
                Re({
                    ...s,
                    ...c
                }, e.element);
                const l = Je(["width", "height"], e.element);
                this._emit("widget_resize", {
                    size: s,
                    computedSize: l
                })
            },
            show() {
                Re(nt, e.element)
            },
            hide() {
                this.call("hide")
            },
            focusMinimized() {
                const e = document.getElementById(Qe);
                if (e && e.contentDocument) {
                    const t = e.contentDocument.querySelector("button");
                    t && t.focus()
                }
            },
            minimize() {
                this.call("minimize")
            },
            maximize(e) {
                const {activeElement: t} = document
                  , n = window.event && window.event.isTrusted ? window.event.type : null
                  , i = () => {
                    t.removeEventListener("blur", i),
                    this.emit("host_focus_shifted")
                }
                ;
                t.addEventListener("blur", i),
                this.call("maximize", n, e)
            },
            unbind() {
                this.hide(),
                this.destroy(),
                this._emit("unbind"),
                this.off(),
                this.call = E,
                Object.keys(p).forEach((e => {
                    this[e] = E
                }
                ))
            },
            callIdentityProvider: e => null == i ? void 0 : i[e](),
            callParentStorageMethod(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++)
                    n[i - 1] = arguments[i];
                return null == o ? void 0 : o[e].apply(o, n)
            },
            applyFramesStyle(e) {
                let {minimizedFrameStyle: t, maximizedFrameStyle: n} = e;
                const i = document.getElementById(Ke)
                  , o = document.getElementById(Qe);
                i && Re(n, i),
                o && Re(t, o)
            },
            setLiveAnnouncerMessage(e) {
                let {message: t, ariaLevel: n} = e;
                const i = document.getElementById(ut(n));
                i ? i.textContent = t : console.error('[LiveChat] Aria announcer element with level "' + n + '" not found')
            },
            renderCrossFrameMarkup(t) {
                let[n,i] = t
                  , o = document.getElementById(Qe);
                o || (o = document.createElement("iframe"),
                Ge({
                    ...dt,
                    title: "openwidget" === a ? et : Ze
                }, o),
                e.element.appendChild(o),
                e.element.appendChild(Ki("polite")),
                e.element.appendChild(Ki("assertive")),
                o.contentDocument.fonts.ready.then(( () => this.emit("minimized_frame_fonts_ready"))).catch(E)),
                function(e, t, n, i) {
                    var o;
                    const r = n.contentDocument
                      , a = null != (o = i.state.application.language) ? o : "en";
                    if (null === r)
                        throw Error("Parameter `frame` needs to be inserted into any document before rendering");
                    Mt() ? (r.documentElement.lang = a,
                    r.head.innerHTML = e,
                    r.body.innerHTML = t) : (r.open(),
                    r.write('\n\t\t\t<!DOCTYPE html>\n\t\t\t<html lang="' + a + '">\n\t\t\t\t<head>' + e + "</head>\n\t\t\t\t<body>" + t + "</body>\n\t\t\t</html>\n\t\t"),
                    r.close());
                    const s = r.documentElement
                      , c = z(s.querySelectorAll("[" + tn + "]"));
                    for (const e of c) {
                        const t = e.getAttribute(tn);
                        if ("string" == typeof t)
                            for (const n of t.split(";")) {
                                const [t,o] = n.split(":");
                                t && o && (e.removeAttribute(tn),
                                e.addEventListener(t, (n => {
                                    var r, a, s, c, l, d, u, p, m, h;
                                    n.stopPropagation();
                                    const f = {
                                        type: n.type,
                                        bubbles: !0,
                                        isTrusted: n.isTrusted,
                                        cancelBubble: n.cancelBubble,
                                        cancelable: n.cancelable,
                                        composed: n.composed,
                                        defaultPrevented: n.defaultPrevented,
                                        eventPhase: n.eventPhase,
                                        timeStamp: n.timeStamp,
                                        currentTarget: {
                                            value: null == (r = n.currentTarget) ? void 0 : r.value,
                                            checked: null == (a = n.currentTarget) ? void 0 : a.checked,
                                            disabled: null == (s = n.currentTarget) ? void 0 : s.disabled,
                                            draggable: null == (c = n.currentTarget) ? void 0 : c.draggable,
                                            hidden: null == (l = n.currentTarget) ? void 0 : l.hidden
                                        },
                                        target: {
                                            value: null == (d = n.target) ? void 0 : d.value,
                                            checked: null == (u = n.target) ? void 0 : u.checked,
                                            disabled: null == (p = n.target) ? void 0 : p.disabled,
                                            draggable: null == (m = n.target) ? void 0 : m.draggable,
                                            hidden: null == (h = n.target) ? void 0 : h.hidden
                                        }
                                    };
                                    if ("click" === t && "copy" === e.getAttribute(on))
                                        return g = e.getAttribute(rn),
                                        navigator.clipboard ? navigator.clipboard.writeText(g).catch(Zt) : Zt(g),
                                        void (e.innerHTML = e.getAttribute(an));
                                    var g;
                                    i.call("crossFrameEvent", o, JSON.stringify(f))
                                }
                                )))
                            }
                    }
                    const l = s.querySelector("[" + en + "]");
                    l && (l.removeAttribute(en),
                    l.focus(),
                    "INPUT" === l.nodeName) && l.setSelectionRange(l.value.length, l.value.length);
                    const d = []
                      , u = z(s.querySelectorAll("[" + nn + "]"));
                    for (const e of u) {
                        const t = e.getAttribute(nn);
                        if ("string" != typeof t)
                            continue;
                        e.removeAttribute(nn);
                        const [n,i] = t.split(":");
                        d.push((t => {
                            var o;
                            let r = null == (o = t.views) || null == (o = o.minimized) ? void 0 : o[i.replace("!", "")];
                            "string" == typeof r && (r = r.trim()),
                            "disabled" === n && (r = i.includes("!") ? !r : !!r),
                            "boolean" == typeof r ? e.toggleAttribute(n, r) : r ? e.setAttribute(n, r) : e.removeAttribute(n)
                        }
                        ))
                    }
                    d.forEach((e => e(i.state))),
                    i.off("state_diff", sn),
                    sn = e => {
                        var t;
                        null != e && null != (t = e.views) && t.minimized && d.forEach((t => t(e)))
                    }
                    ,
                    i.on("state_diff", sn)
                }(n, i, o, this)
            },
            getMinimizedDimensions() {
                const e = document.getElementById(Qe).contentDocument.querySelector('[role="main"]');
                return Je(["width", "height"], e)
            },
            callElementMethod(e) {
                var t, n;
                let[i,o,...r] = e;
                null == (t = document.getElementById(Qe).contentDocument.querySelector(i)) || null == (n = t[o]) || n.call.apply(n, [t].concat(r))
            },
            getElementProperties(e) {
                let[t,n] = e;
                const i = document.getElementById(Qe)
                  , o = i && i.contentDocument.querySelector(t);
                return o ? L(n, o) : {}
            },
            setTitleNotification(e) {
                const t = vn();
                e ? t.setTitleNotification(e) : t.clearTitleNotification()
            }
        }
          , m = t.iframeAddress + "?" + u
          , h = new MutationObserver((t => t.forEach((t => {
            const n = d((e => "IFRAME" === e.tagName && e.getAttribute("src") === m), t.addedNodes);
            n && ( (e, t, n) => {
                Ge({
                    ...lt,
                    title: "openwidget" === n ? et : Ze
                }, t),
                e.custom || Re(ct, t)
            }
            )(e, n, a)
        }
        ))));
        return h.observe(e.element, {
            childList: !0
        }),
        new Ln({
            container: e.element,
            url: m,
            methods: p,
            iframeAllowedProperties: cn({
                allowAutoplay: !0,
                allowVideoConferencing: Xi(n, "microphone"),
                allowClipboardWrite: Xi(n, "clipboard_write"),
                allowDisplayCapture: 1520 === t.license || !1
            }),
            model: {
                ...t,
                fullWidth: null == (s = e.size) ? void 0 : s.width,
                fullHeight: null == (c = e.size) ? void 0 : c.height,
                serverConfig: n,
                parentWidth: window.innerWidth,
                parentHeight: window.innerHeight,
                defaultWidget: a
            }
        }).then((e => Promise.all([e, Gi(e)]))).then((e => {
            let[t] = e;
            return h.disconnect(),
            t
        }
        ))
    }
      , eo = (e, t, n, i, o, r) => {
        e.call("storeMethod", ["setLocalization", i]),
        ht(e),
        n.custom || oi(n.element, ( () => Dt(e.state, "hidden"))),
        Ui || "wix" === t.integrationName || ri(e, o, i),
        $i(e.frame),
        function(e, t, n) {
            Ti(e, t, n),
            ("LiveChatWidget"in window || "OpenWidget"in window) && Di(e, t, n)
        }(e, t, o),
        Jn(e, t),
        me(Dn(e, ( () => ((e => {
            let t = !1;
            e.on("iframe_sound_unlocked", ( () => t = !0)),
            Tt().then((n => {
                t || (e.emit("bridge_sound_unlocked"),
                e.on("add_event", (t => {
                    let {event: i} = t;
                    Ve(e.state, "muted") || ( (e, t) => "system" !== e.author && !e.properties.welcomeMessage && e.author !== t && "custom" !== e.type)(i, Fe(e.state)) && n(_t)
                }
                )),
                e.on("reaction_received", (t => {
                    let {event: i} = t;
                    Ve(e.state, "muted") || Fe(e.state) === i.author && n(_t)
                }
                )))
            }
            ))
        }
        )(e),
        _e))), le(E)),
        "wix" === t.integrationName ? (e => {
            An.addEventListener(An.Events.PAGE_NAVIGATION, ( () => {
                Pn().then((t => e.call("storeMethod", ["setApplicationState", {
                    page: t
                }])))
            }
            ))
        }
        )(e) : (Bi(e),
        "openwidget" === r && (wn(e),
        (e => {
            const t = t => hn(t, e);
            me(dn(e, (e => e.application.readyState)), ce((e => e === M)), Ee(1), le(( () => {
                document.addEventListener("click", t)
            }
            ))),
            me(pe(e, "unbind"), le(( () => {
                document.removeEventListener("click", t)
            }
            )))
        }
        )(e))),
        ai(e);
        t.actingAsDirectLink || n.custom || function(e) {
            me(dn(e, (e => Dt(e, "hidden"))), Ce(1), le((t => {
                t ? e.applyHiddenStyles() : e.show()
            }
            )))
        }(e),
        pt(e),
        function(e) {
            const t = () => {
                setTimeout(( () => {
                    document.addEventListener("touchstart", E),
                    setTimeout(( () => {
                        document.removeEventListener("touchstart", E)
                    }
                    ), 500)
                }
                ), 500)
            }
            ;
            window.addEventListener("orientationchange", t);
            const n = () => {
                e.off("unbind", n),
                window.removeEventListener("orientationchange", t)
            }
            ;
            e.on("unbind", n)
        }(e),
        ii(e, o),
        Ui && Wi(e),
        Hi(e),
        e.on("rich_greeting_button_clicked", (e => {
            let {button: t} = e;
            "url" === t.type && zi.navigate(t.value, "current" === t.target ? "_parent" : "_blank")
        }
        )),
        e.on("open_in_new_tab", (e => {
            zi.navigate(e)
        }
        )),
        e.on("register_exit_intent_listener", ( () => {
            const t = ( (e, t) => {
                const n = n => {
                    n.currentTarget && n.relatedTarget || (e.call("storeMethod", ["emit", "exit_intent_detected"]),
                    t())
                }
                ;
                return window && (mi && window.removeEventListener("mouseout", mi),
                window.addEventListener("mouseout", n),
                mi = n),
                () => {
                    window && window.removeEventListener("mouseout", n)
                }
            }
            )(e, ( () => {
                t()
            }
            ))
        }
        )),
        e.on("apply_exit_intent_shade", ( () => {
            ( (e, t) => {
                t.call("storeMethod", ["setApplicationState", {
                    isExitIntentShadeDisplayed: !0
                }]);
                const n = document.createElement("div");
                n.id = di,
                Re((e => ({
                    position: "fixed",
                    bottom: "0",
                    [e]: "0",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to " + ("left" === e ? "right" : "left") + " top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
                    zIndex: 999999,
                    "pointer-events": "none",
                    opacity: 0,
                    transition: "opacity 100ms ease-in-out"
                }))(e), n),
                document.body.appendChild(n),
                setTimeout(( () => {
                    n.style.opacity = "1"
                }
                ), 0),
                ui && window.removeEventListener("mouseover", ui),
                ui = () => pi(t),
                window.addEventListener("mouseover", ui)
            }
            )(gt(o, !1), e)
        }
        )),
        e.on("remove_exit_intent_shade", ( () => {
            pi(e)
        }
        ))
    }
    ;
    var to = (e, t) => {
        window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bridge_init");
        let n = !1
          , i = e;
        window.LC_API = window.LC_API || {},
        window.LC_API.is_loaded = () => n;
        const {region: o, licenseId: r, organizationId: a, requestedGroupId: s, actingAsDirectLink: c, skipCodeInstallationTracking: d, integrationName: u, productName: p, customIdentityProviderInitializer: m, templateId: h} = t
          , f = {
            licenseId: r,
            skipCodeInstallationTracking: d,
            productName: p,
            integrationName: u,
            channelType: c ? "direct_link" : "code",
            url: ln(document.location + ""),
            ..."number" == typeof s && {
                groupId: s
            },
            ..."string" == typeof o && {
                region: o
            }
        }
          , g = "livechat" === i ? (e => Xt(e).then((t => {
            return Promise.all([t, (n = {
                organizationId: t.organizationId,
                licenseId: e.licenseId,
                groupId: t.groupId,
                region: t.region,
                version: t.configVersion
            },
            Rt(Jt("get_configuration", n), {
                callbackName: "lc_static_config",
                query: {
                    organization_id: n.organizationId,
                    version: n.version,
                    ..."number" == typeof n.groupId && {
                        group_id: n.groupId
                    }
                }
            }).then((e => $t(e))))]).then((e => {
                let[t,n] = e;
                return {
                    ...t,
                    ...n
                }
            }
            ));
            var n
        }
        )))(f).catch((e => {
            if ("DEFAULT_WIDGET_NOT_LIVECHAT" === e.code && "openwidget" === e.defaultWidget)
                return i = e.defaultWidget,
                window.__ow = window.__ow || {},
                window.__ow.organizationId = e.organizationId,
                window.OpenWidget = {
                    ...window.LiveChatWidget
                },
                Qt(e.organizationId);
            throw e
        }
        )) : Qt(a, u, h, d);
        Promise.all([g, "wix" === u ? Pn() : _n(), Xe()]).then((e => {
            let[o,r,s] = e;
            if (!hi(o.allowedDomains, window.top === window ? window.location.hostname : document.referrer))
                return void console.log("[LiveChat] Current domain is not added to the allowed domains. LiveChat has been disabled.");
            if ("openwidget" === i && !1 === o.isWidgetEnabled)
                return;
            if (Ui && o.__unsafeProperties.group.disabledOnMobile && !t.actingAsDirectLink)
                return;
            const c = ti()
              , d = (e => {
                if (null === e)
                    return null;
                const t = e();
                return "object" != typeof t || "function" != typeof t.getToken || "function" != typeof t.getFreshToken || "function" != typeof t.hasToken || "function" != typeof t.invalidate ? (console.error("custom_identity_provider() does not return proper handlers. ({getFreshToken: () => Promise<Token>, getToken: () => Promise<Token>, hasToken: () => Promise<boolean>, invalidate: () => Promise<void> })"),
                null) : t
            }
            )(m)
              , u = window.localStorage
              , p = li(t, r, o)
              , h = ( (e, t) => e.customContainer ? {
                custom: !0,
                element: e.customContainer
            } : {
                custom: !1,
                element: Qi(t, e.actingAsDirectLink),
                size: Ji(t)
            })(t, o)
              , f = {};
            let g = !1;
            const v = fi("on_before_load")
              , _ = fi("on_after_load");
            v((e => {
                e.disable_sounds = E,
                e.mobile_is_detected = () => Ui,
                e.chat_running = () => !1,
                e.visitor_engaged = () => !1,
                e.agents_are_available = () => -1 !== o.onlineGroupIds.indexOf(o.groupId),
                e.get_window_type = () => "embedded",
                e.hide_chat_window = Xn(p) ? E : () => g = !0,
                e.set_visitor_name = e => f.name = Li(e),
                e.set_visitor_email = e => f.email = Li(e),
                e.set_custom_variables = e => f.properties = e ? Ci(e) : {},
                e.update_custom_variables = e => {
                    e && (f.properties = {
                        ...f.properties,
                        ...Ci(e)
                    })
                }
            }
            ));
            const w = {
                ...p,
                ...o.licenseId && {
                    license: o.licenseId
                },
                customer: {
                    ...p.customer,
                    ...f
                },
                hidden: p.hidden || g,
                ...a ? {
                    organizationId: a
                } : {
                    organizationId: o.organizationId
                }
            };
            var y;
            h.custom || s.appendChild(h.element),
            window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bind_child"),
            Promise.all([Zi(h, w, o, d, u, null, i), "openwidget" === i ? Promise.resolve(o.localization) : (y = {
                organizationId: w.organizationId,
                licenseId: w.license,
                groupId: w.group,
                region: w.region,
                version: o.localizationVersion,
                language: o.__unsafeProperties.group.language
            },
            Rt(Jt("get_localization", y), {
                callbackName: "lc_localization",
                query: {
                    organization_id: y.organizationId,
                    version: y.version,
                    language: y.language,
                    ..."number" == typeof y.groupId && {
                        group_id: y.groupId
                    }
                }
            }).then((e => k((e => e.toLowerCase()), e))))]).then((e => {
                let[t,n] = e;
                return h.custom || $i(h.element),
                eo(t, w, h, n, o, i),
                me(dn(t, (e => Ve(e, "readyState"))), ce((e => e === M)), Ee(1), fe(( () => t)), Pe)
            }
            )).then((e => {
                window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bridge_ready"),
                c && c.getLogs().then((t => {
                    e.call("logInfo", "loading_time_measured", l(t))
                }
                )),
                _(( () => n = !0)),
                "openwidget" === i || Math.floor(10 * Math.random()) || setTimeout(( () => {
                    Kt({
                        organizationId: w.organizationId,
                        licenseId: p.license,
                        groupId: p.group,
                        region: p.region,
                        version: o.localizationVersion,
                        language: o.__unsafeProperties.group.language
                    }).catch(( () => {
                        e.call("logInfo", "potential_csp_problem", {
                            url: window.location + ""
                        })
                    }
                    ))
                }
                ), 1e4)
            }
            ))
        }
        )).catch((e => {
            switch (null == e ? void 0 : e.code) {
            case "ACCESS_NOT_RESOLVED":
            case "CUSTOMER_BANNED":
                return void console.warn("[LiveChat] " + e.message);
            default:
                throw e
            }
        }
        ))
    }
    ;
    function no() {
        Xe().then((e => {
            ["https://cdn.livechatinc.com/widget/static/js/configurator.DQ7cKF8m.js"].forEach((t => {
                ( (e, t) => {
                    const n = document.createElement("script");
                    Ge({
                        src: t,
                        type: "module",
                        charset: "utf-8"
                    }, n),
                    e.appendChild(n)
                }
                )(e.ownerDocument.head, t)
            }
            ))
        }
        ))
    }
    const io = (e, t) => {
        const n = {
            name: null,
            email: null,
            properties: {}
        };
        if ("object" == typeof e && e) {
            const t = e.name
              , i = e.email;
            "string" == typeof t && (n.name = t),
            "string" == typeof i && (n.email = i)
        }
        return Array.isArray(t) && (n.properties = Ci(t)),
        n
    }
      , oo = e => {
        if (e.wix)
            return "wix";
        if ("string" == typeof e.integration_name)
            return e.integration_name;
        if ("google_tag_manager"in window)
            try {
                if (void 0 !== Array.from(document.getElementsByTagName("script")).find((e => {
                    var t;
                    return null == (t = e.textContent) ? void 0 : t.startsWith("window.__lc")
                }
                )))
                    return "potentially_gtm"
            } catch {}
        return null
    }
      , ro = () => {
        if (window.__lc_inited = !0,
        "msCrypto"in window)
            return void console.error("[LiveChat] We no longer support Internet Explorer");
        if (3 !== [1].reduce(( (e, t) => e + t), 2))
            return void console.error("[LiveChat] This site has overriden Array.prototype.reduce (for example by using Prototype library) to a version that is not compatible with Web standards. LiveChat code couldn't be initialized because of this.");
        const e = (t = window.__lc,
        {
            licenseId: parseInt(t.license),
            requestedGroupId: D(t),
            uniqueGroups: !1 === t.chat_between_groups,
            customer: io(t.visitor, t.params),
            skipCodeInstallationTracking: 1 === t.test,
            integrationName: oo(t),
            productName: t.product_name || null,
            actingAsDirectLink: !0 === t.direct_link,
            initMaximized: !0 === t.init_maximized,
            initialView: "string" == typeof t.initial_view ? t.initial_view : null,
            customContainer: t.custom_container || null,
            gaParams: {
                version: "string" == typeof t.ga_version ? t.ga_version : null,
                omitGtm: !!t.ga_omit_gtm,
                sendToAll: !!t.ga_send_to_all_trackers
            },
            customIdentityProviderInitializer: "function" == typeof t.custom_identity_provider ? t.custom_identity_provider : null,
            iframeAddress: null,
            region: v(t.region, (n = j,
            a(n).map((e => n[e])))) ? t.region + "" : null
        });
        var t, n;
        e.actingAsDirectLink || !ie() ? to("livechat", e) : no()
    }
    ;
    window.__lc_inited || ro()
}();
