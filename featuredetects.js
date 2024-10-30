!function(s, u, c) {
    function l(e, t) {
        return typeof e === t
    }
    function d(e) {
        return "function" != typeof u.createElement ? u.createElement(e) : g ? u.createElementNS.call(u, "http://www.w3.org/2000/svg", e) : u.createElement.apply(u, arguments)
    }
    function m(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }
    function a(e, t, n) {
        var o, r;
        for (r in e)
            if (e[r]in t)
                return !1 === n ? e[r] : (o = t[e[r]],
                l(o, "function") ? function(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                }(o, n || t) : o);
        return !1
    }
    function r(e, t, n, o) {
        var r, i, s, l = "modernizr", a = d("div"), f = ((s = u.body) || ((s = d(g ? "svg" : "body")).fake = !0),
        s);
        if (parseInt(n, 10))
            for (; n--; )
                (r = d("div")).id = o ? o[n] : l + (n + 1),
                a.appendChild(r);
        return (s = d("style")).type = "text/css",
        s.id = "s" + l,
        (f.fake ? f : a).appendChild(s),
        f.appendChild(a),
        s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(u.createTextNode(e)),
        a.id = l,
        f.fake && (f.style.background = "",
        f.style.overflow = "hidden",
        i = y.style.overflow,
        y.style.overflow = "hidden",
        y.appendChild(f)),
        e = t(a, e),
        f.fake ? (f.parentNode.removeChild(f),
        y.style.overflow = i,
        y.offsetHeight) : a.parentNode.removeChild(a),
        !!e
    }
    function i(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function h(e, t) {
        var n = e.length;
        if ("CSS"in s && "supports"in s.CSS) {
            for (; n--; )
                if (s.CSS.supports(i(e[n]), t))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in s) {
            for (var o = []; n--; )
                o.push("(" + i(e[n]) + ":" + t + ")");
            return r("@supports (" + (o = o.join(" or ")) + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == (t = e,
                n = null,
                o = "position",
                "getComputedStyle"in s ? (r = getComputedStyle.call(s, t, n),
                e = s.console,
                null !== r ? o && (r = r.getPropertyValue(o)) : e && e[e.error ? "error" : "log"].call(e, "getComputedStyle returning null, its possible modernizr test results are inaccurate")) : r = !n && t.currentStyle && t.currentStyle[o],
                r);
                var t, n, o, r
            })
        }
        return c
    }
    function o(e, t, n, o, r) {
        var i = e.charAt(0).toUpperCase() + e.slice(1)
          , s = (e + " " + S.join(i + " ") + i).split(" ");
        return l(t, "string") || void 0 === t ? function(e, t, n, o) {
            function r() {
                s && (delete b.style,
                delete b.modElem)
            }
            if (o = void 0 !== o && o,
            void 0 !== n) {
                var i = h(e, n);
                if (void 0 !== i)
                    return i
            }
            for (var s, l, a, f, u, p = ["modernizr", "tspan", "samp"]; !b.style && p.length; )
                s = !0,
                b.modElem = d(p.shift()),
                b.style = b.modElem.style;
            for (a = e.length,
            l = 0; l < a; l++)
                if (f = e[l],
                u = b.style[f],
                ~("" + f).indexOf("-") && (f = m(f)),
                b.style[f] !== c) {
                    if (o || void 0 === n)
                        return r(),
                        "pfx" != t || f;
                    try {
                        b.style[f] = n
                    } catch (e) {}
                    if (b.style[f] != u)
                        return r(),
                        "pfx" != t || f
                }
            return r(),
            !1
        }(s, t, o, r) : a(s = (e + " " + w.join(i + " ") + i).split(" "), t, n)
    }
    var f = []
      , p = []
      , e = {
        _version: "3.5.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e])
            }, 0)
        },
        addTest: function(e, t, n) {
            p.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            p.push({
                name: null,
                fn: e
            })
        }
    }
      , v = function() {};
    v.prototype = e,
    (v = new v).addTest("geolocation", "geolocation"in navigator);
    var y = u.documentElement
      , g = "svg" === y.nodeName.toLowerCase()
      , C = e._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    e._prefixes = C,
    v.addTest("csspositionsticky", function() {
        var e = "position:"
          , t = d("a").style;
        return t.cssText = e + C.join("sticky;" + e).slice(0, -e.length),
        -1 !== t.position.indexOf("sticky")
    });
    var t = "Moz O ms Webkit"
      , S = e._config.usePrefixes ? t.split(" ") : [];
    e._cssomPrefixes = S;
    function x(e) {
        var t, n = C.length, o = s.CSSRule;
        if (void 0 === o)
            return c;
        if (!e)
            return !1;
        if ((t = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE")in o)
            return "@" + e;
        for (var r = 0; r < n; r++) {
            var i = C[r];
            if (i.toUpperCase() + "_" + t in o)
                return "@-" + i.toLowerCase() + "-" + e
        }
        return !1
    }
    e.atRule = x;
    var w = e._config.usePrefixes ? t.toLowerCase().split(" ") : [];
    e._domPrefixes = w;
    var n = e.testStyles = r;
    v.addTest("touchevents", function() {
        var t, e;
        return "ontouchstart"in s || s.DocumentTouch && u instanceof DocumentTouch ? t = !0 : (e = ["@media (", C.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join(""),
        n(e, function(e) {
            t = 9 === e.offsetTop
        })),
        t
    });
    var _ = {
        elem: d("modernizr")
    };
    v._q.push(function() {
        delete _.elem
    });
    var b = {
        style: _.elem.style
    };
    v._q.unshift(function() {
        delete b.style
    }),
    e.testAllProps = o;
    var P, T, z, j, k, t = e.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? x(e) : (-1 != e.indexOf("-") && (e = m(e)),
        t ? o(e, t, n) : o(e, "pfx"))
    }
    ;
    (P = v).addTest("clip-path-support", function() {
        if ("CSS"in window && "supports"in window.CSS) {
            for (var e = 0; e < P._prefixes.length; e++) {
                var t = P._prefixes[e] + "clip-path";
                if (window.CSS.supports(t, "polygon(50% 0%, 0% 100%, 100% 100%)"))
                    return !0
            }
            return !1
        }
        return P.testStyles("#modernizr { " + P._prefixes.join("clip-path:polygon(50% 0%, 0% 100%, 100% 100%); ") + " }", function(e, t) {
            var n = getComputedStyle(e);
            if (!(o = n.clipPath) || "none" == o)
                for (var o = !1, r = 0; r < P._domPrefixes.length; r++)
                    if (test = P._domPrefixes[r] + "ClipPath",
                    n[test] && "none" !== n[test]) {
                        o = !0;
                        break
                    }
            return P.testProp("clipPath") && o
        })
    }),
    v.addTest("fullscreen", !(!t("exitFullscreen", u, !1) && !t("cancelFullScreen", u, !1))),
    function() {
        var e, t, n, o, r, i, s;
        for (s in p)
            if (p.hasOwnProperty(s)) {
                if (e = [],
                (t = p[s]).name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (o = l(t.fn, "function") ? t.fn() : t.fn,
                r = 0; r < e.length; r++)
                    1 === (i = e[r].split(".")).length ? v[i[0]] = o : (!v[i[0]] || v[i[0]]instanceof Boolean || (v[i[0]] = new Boolean(v[i[0]])),
                    v[i[0]][i[1]] = o),
                    f.push((o ? "" : "no-") + i.join("-"))
            }
    }(),
    T = f,
    j = y.className,
    k = v._config.classPrefix || "",
    g && (j = j.baseVal),
    v._config.enableJSClass && (z = new RegExp("(^|\\s)" + k + "no-js(\\s|$)"),
    j = j.replace(z, "$1" + k + "js$2")),
    v._config.enableClasses && (j += " " + k + T.join(" " + k),
    g ? y.className.baseVal = j : y.className = j),
    delete e.addTest,
    delete e.addAsyncTest;
    for (var E = 0; E < v._q.length; E++)
        v._q[E]();
    s.Modernizr = v
}(window, document);
