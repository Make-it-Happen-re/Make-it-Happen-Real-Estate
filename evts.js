!function(g, e) {
    "use strict";
    function i() {
        return "undefined" == typeof fbq ? o : function(t) {
            return fbq("trackCustom", t)
        }
    }
    var o = console.info || {};
    g.dataLayer = g.dataLayer || [],
    g.addEvent("domready", function() {
        g.addEvent("htmlform_success", function(t) {
            try {
                i()("trackCustom", "ContactForm-" + t.getAttribute("data-form-name").replace(/\s/g, "")),
                g.dataLayer.push({
                    event: "leadcaptureform_success",
                    "ga-event.category": "Form Submitted: Success",
                    "ga-event.action": t.getAttribute("ga-event-action") || t.getAttribute("href") || t.getAttribute("action") || "",
                    "ga-event.label": t.getAttribute("data-form-name") || t.getAttribute("title") || e.title,
                    "ga-event.type": "submit"
                })
            } catch (t) {
                o(t)
            }
        }
        .debounce(250, !0));
        var t = function(t, e) {
            var a, n, r;
            if (e.getAttribute("ga-event-category"))
                try {
                    ("undefined" == typeof gtag ? o : function(t, e, a) {
                        return !!gtag && gtag("event", e, {
                            event_category: t,
                            event_label: a
                        })
                    }
                    )(e.getAttribute("ga-event-category") || e.getAttribute("ga-event-key"), e.getAttribute("ga-event-action") || e.getAttribute("href") || e.getAttribute("action") || "", e.getAttribute("ga-event-label") || e.getAttribute("title") || ""),
                    i()((e.getAttribute("ga-event-category") || e.getAttribute("ga-event-key")).replace(/\s/g, "")),
                    g.dataLayer.push({
                        event: "ga_event_" + t.type,
                        "ga-event.category": e.getAttribute("ga-event-category") || e.getAttribute("ga-event-key"),
                        "ga-event.action": e.getAttribute("ga-event-action") || e.getAttribute("href") || e.getAttribute("action") || "",
                        "ga-event.label": e.getAttribute("ga-event-label") || e.getAttribute("title") || "",
                        "ga-event.type": t.type || ""
                    }),
                    "property-action" == e.getAttribute("ga-event-category") && (r = g.dataLayer.find(function(t) {
                        return !!t.propertyInfo
                    }),
                    a = e.getAttribute("ga-event-action") || "",
                    n = r.propertyInfo.id,
                    new MooRequest({
                        url: "/cns/refunctions/logevt",
                        method: "post"
                    }).send({
                        data: {
                            evt: a,
                            pid: n
                        }
                    }))
                } catch (t) {
                    o(t)
                }
        }
        .debounce(250, !0);
        e.addEvent("click:relay([ga-event-category],[ga-event-key])", t)
    })
}(window, document);
