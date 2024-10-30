var p = Object.defineProperty
  , y = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var d = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty
  , h = Object.prototype.propertyIsEnumerable;
var u = (n, t, o) => t in n ? p(n, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: o
}) : n[t] = o
  , w = (n, t) => {
    for (var o in t || (t = {}))
        f.call(t, o) && u(n, o, t[o]);
    if (d)
        for (var o of d(t))
            h.call(t, o) && u(n, o, t[o]);
    return n
}
  , m = (n, t) => y(n, I(t));
var l = (n, t, o) => new Promise( (a, r) => {
    var i = c => {
        try {
            s(o.next(c))
        } catch (x) {
            r(x)
        }
    }
      , e = c => {
        try {
            s(o.throw(c))
        } catch (x) {
            r(x)
        }
    }
      , s = c => c.done ? a(c.value) : Promise.resolve(c.value).then(i, e);
    s((o = o.apply(n, t)).next())
}
);
(function() {
    "use strict";
    const n = "https://commversion-public-functions.vercel.app/api/geolocation"
      , t = (i, e) => l(this, null, function*() {
        const s = `${e}?visitor=${i}`;
        return yield fetch(s).then(x => x.json()).catch( () => ({}))
    })
      , o = x => l(this, [x], function*({allowedCountries: i, disallowedCountries: e, visitor: s, geolocationAPI: c=n}) {
        const {LiveChatWidget: g} = window
          , {country: v} = yield t(s, c);
        if (i && !i.includes(v)) {
            g.call("destroy");
            return
        }
        if (e && e.includes(v)) {
            g.call("destroy");
            return
        }
    })
      , a = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(i) {
        const e = Math.random() * 16 | 0;
        return (i == "x" ? e : e & 3 | 8).toString(16)
    })
      , r = () => {
        var e, s, c;
        const i = (s = (e = window.localStorage) == null ? void 0 : e.getItem("cv-geoblock-visitorid")) != null ? s : a();
        return (c = window.localStorage) == null || c.setItem("cv-geoblock-visitorid", i),
        i
    }
    ;
    window.commversion = window.commversion || {},
    o(m(w({}, window.commversion), {
        visitor: r()
    }))
}
)();
