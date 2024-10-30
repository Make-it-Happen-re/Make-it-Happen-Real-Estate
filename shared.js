window.addEvent("domready", function() {
    window.addEvent("htmlform_success", function(t, e, a) {
        if (window.dispatchEvent(new CustomEvent("htmlform_success",{
            detail: {
                theform: t
            }
        })),
        "" != a && null != a)
            try {
                var o = new URL(a,window.location.origin);
                window.location.href = o
            } catch (t) {
                alert(e)
            }
        else
            alert(e)
    }),
    window.addEvent("htmlform_error", function(t, e) {
        alert(e)
    }),
    $$(".faq>div.question").addEvent("click", function(t) {
        $(t.event.currentTarget).toggleClass("active"),
        t.preventDefault(),
        t.stopPropagation()
    }),
    null !== $("print") && $("print").addEvent("click", function(t) {
        t.preventDefault(),
        window.print()
    }),
    new PushWidgets.WFScrollMonitor($$("#site-header")).addEvent("scrolled", function(t, e, a) {
        50 < e ? t.addClass("scrolled") : t.removeClass("scrolled")
    }),
    $$("ul.collapse-menu").addEvent("click:relay(.hasChildren>a)", function(t, e) {
        t.preventDefault(),
        e.toggleClass("active")
    }),
    $$("ul.collapse-menu li.ancestor>a").addClass("active"),
    $$(".sidenav-right").setStyle("margin-right", -document.getScrollbarWidth() + "px"),
    $$('nav li a[href="#"]').addEvent("click", function(t) {
        t.preventDefault()
    }),
    $$(".hidden-phone").addEvent("click", function(t) {
        "A" != t.target.tagName.toUpperCase() || t.target.parentElement.hasClass("active") ? t.target.addClass("active") : (t.preventDefault(),
        t.target.parentElement.addClass("active"))
    }),
    window.addEvent("load", function() {
        $(document.body).setAttribute("data-loadstate", "loaded")
    }),
    window.setTimeout(function() {
        $(document.body).setAttribute("data-loadstate", "loaded")
    }, 3e3),
    $("user-state") && $("user-state").addEvent("click:relay(#stateMenu a)", function(t, e) {
        e = e.get("data-state"),
        new MooRequest.HTML({
            url: "/cns/refunctions/changegeolocation",
            update: "user-state",
            onSuccess: function() {
                window.fireEvent("state-dropdown-changed", $("stateSelect").get("data-current-state"))
            }
        }).post("state=" + e);
        t.preventDefault()
    })
});
var gmapDefaults = {
    defaultMapStyles: "undefined" != typeof SR_GOOGLE_MAP_STYLES && SR_GOOGLE_MAP_STYLES || [{
        featureType: "poi.business",
        stylers: [{
            visibility: "off"
        }, {
            hue: "#00FF6A"
        }, {
            saturation: -5
        }, {
            lightness: 10
        }]
    }],
    defaultMarkerClustererOptions: {
        gridSize: 42,
        minimumClusterSize: 2,
        zoomOnClick: !1,
        styles: [{
            textColor: "white",
            textSize: 16,
            fontFamily: "sans-serif",
            url: "/img/map_cluster.png",
            height: 42,
            width: 42
        }]
    },
    defaultInfoBoxOptions: {
        alignBottom: !0,
        maxWidth: 160,
        pane: "floatPane",
        closeBoxURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAAAnRSTlMAAHaTzTgAAABISURBVHjaY2BABcbogAFdwX9UQCMFxmvBcmuNcSlYC1YBIbFbAZKDyONyA1AWag8uR8LkyTWBkBsI+oJgONA6Lgilh1EwrAEAOs3WXA82aG0AAAAASUVORK5CYII=",
        pixelOffset: {
            width: -80,
            height: -64
        },
        enableEventPropagation: !1
    }
};
function LoadMap(e, t, a) {
    try {
        if ("undefined" != typeof google && (google.maps,
        1))
            return LoadGoogleMap(e, t, a);
        if ("undefined" != typeof L && void 0 !== L.map)
            return LoadLeafletMap(e, t, a)
    } catch (t) {
        console.warn && console.warn("No mapping API available.", t),
        e.set("text", "No mapping provider is available.")
    }
}
function LoadGoogleMap(r, l, a) {
    if (void 0 === google.maps)
        return !1;
    google.maps.Polygon.prototype.getBounds || (google.maps.Polygon.prototype.getBounds = function() {
        var a = new google.maps.LatLngBounds;
        return this.getPath().forEach(function(t, e) {
            a.extend(t)
        }),
        a
    }
    );
    var t = r.getElements(".marker")
      , e = new google.maps.LatLng(parseFloat(r.getAttribute("data-lat")),parseFloat(r.getAttribute("data-lng")))
      , d = new google.maps.LatLngBounds;
    r.getAttribute("data-lat") && r.getAttribute("data-lng") && d.extend(e);
    var u, g = new google.maps.Map(r,{
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: parseInt(r.getAttribute("data-zoom")) || 16,
        center: e,
        styles: JSON.parse(r.getAttribute("data-mapstyle")) || gmapDefaults.defaultMapStyles,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
            position: google.maps.ControlPosition.TOP_LEFT
        },
        mapTypeControl: !1,
        zoomControl: !0,
        streetViewControl: !1,
        minZoom: 4,
        maxZoom: 20,
        scrollwheel: PushWidgets.hasTouch,
        draggable: !PushWidgets.hasTouch
    }), e = JSON.parse(r.getAttribute("data-options")) || {};
    e && g.setOptions(e),
    "undefined" == typeof InfoBox ? u = new google.maps.InfoWindow({
        content: ""
    }) : (u = new InfoBox(gmapDefaults.defaultInfoBoxOptions),
    google.maps.event.addListener(g, "click", function(t) {
        u.close()
    }),
    google.maps.event.addListener(g, "zoom_changed", function(t) {
        u.close()
    })),
    "undefined" != typeof MarkerClusterer && 1 == l && (clusterManager = new MarkerClusterer(g,[],gmapDefaults.defaultMarkerClustererOptions),
    !1 === gmapDefaults.defaultMarkerClustererOptions.zoomOnClick && clusterManager.addListener("click", function(t) {
        g.setCenter(t.getCenter()),
        g.setZoom(g.getZoom() + 2)
    })),
    t.each(function(t, e) {
        var a, o, n, i, s = {};
        t.getAttribute("data-lat") && t.getAttribute("data-lng") && (a = new google.maps.LatLng(parseFloat(t.getAttribute("data-lat")),parseFloat(t.getAttribute("data-lng"))),
        d.extend(a),
        t.getAttribute("data-image") && (s.url = t.getAttribute("data-image") || "/img/map_marker.png"),
        t.getAttribute("data-image-size") && (o = t.getAttribute("data-image-size").split("x"),
        s.size = new google.maps.Size(parseInt(o[0]),parseInt(o[1]),"px","px"),
        s.scaledSize = new google.maps.Size(parseInt(o[0]),parseInt(o[1]),"px","px")),
        t.getAttribute("data-image-anchor") && (o = t.getAttribute("data-image-anchor").split(","),
        s.anchor = new google.maps.Point(parseInt(o[0]),parseInt(o[1]))),
        n = new google.maps.Marker({
            position: a,
            icon: s
        }),
        "undefined" == typeof MarkerClusterer || 1 != l || t.hasAttribute("data-nocluster") ? n.setMap(g) : clusterManager.addMarker(n),
        (i = t.getElement("figcaption")) && (i.addClass("mapbox"),
        n.addListener("click", function() {
            u.close(),
            r.addClass("ib_hidden"),
            u.setContent(i),
            u.open(g, n),
            setTimeout(function() {
                var t = $(i).measure(function() {
                    return -.5 * this.getWidth()
                });
                u.setOptions({
                    pixelOffset: {
                        width: t,
                        height: -n.getIcon().size.height - 16
                    }
                }),
                r.removeClass("ib_hidden")
            }, 50)
        })),
        t.setStyle("display", "none"))
    }),
    a && a.setMap(g);
    e = function(t) {
        if (g.getBounds() && d) {
            var e = d;
            if (a && e.union(a.getBounds()),
            !e.intersects(g.getBounds()))
                return t ? g.panToBounds(e) : g.fitBounds(e)
        }
    }
    ;
    return 1 < t.length || a ? g.fitBounds(d) : g.setCenter(d.getCenter()),
    window.addEvent("resize", e.bind(this, [!1]).debounce(500, !1)),
    window.fireEvent("resize"),
    google.maps.event.addListener(g, "idle", e.bind(this, [!0]).debounce(100, !1)),
    g
}
function LoadLeafletMap(t, e, a) {
    if (void 0 === L.map)
        return !1;
    var o, n = t.addClass("map-loading").getElements(".marker[data-lat][data-lng]"), r = L.latLngBounds();
    t.getAttribute("data-lat") ? (o = L.latLng(parseFloat(t.getAttribute("data-lat")), parseFloat(t.getAttribute("data-lng"))),
    r.extend(o)) : o = [-33, 151];
    var i = t.getAttribute("data-zoom") || 12
      , l = new L.map(t,{
        minZoom: 3,
        maxZoom: 16,
        zoom: 10,
        detectRetina: !1,
        center: o,
        scrollWheelZoom: !!PushWidgets.hasTouch,
        attributionControl: !1,
        zoomControl: !1
    });
    L.control.attribution({
        prefix: !1
    }).addTo(l),
    L.control.zoom({
        position: "bottomleft"
    }).addTo(l);
    var d = [];
    a && (a.addTo(l),
    r = a.getBounds());
    var u, g = new L.popup({
        alignBottom: !0,
        maxWidth: screen.width < 300 ? 270 : 290,
        closeButton: !0,
        offset: L.point([0, -33])
    });
    e && (u = L.markerClusterGroup({
        polygonOptions: {
            color: "#f2b838",
            fillColor: "#f2b838"
        }
    }),
    l.addLayer(u),
    g.bindPopup(u),
    l.on("resize", function() {
        u.closePopup()
    }
    .bind(this).debounce(200, !1))),
    l.on("zoomstart", function() {
        l.closePopup()
    }
    .bind(this));
    var p = [];
    return n.each(function(t, e) {
        var a, o, n, i, s = {};
        t.getAttribute("data-lat") && t.getAttribute("data-lng") && (a = L.latLng(parseFloat(t.getAttribute("data-lat")), parseFloat(t.getAttribute("data-lng"))),
        t.hasAttribute("data-nobounds") || r.extend(L.latLng(t.getAttribute("data-lat"), t.getAttribute("data-lng"))),
        t.getAttribute("data-image") && (s.iconUrl = t.getAttribute("data-image") || "/img/map_marker.png"),
        t.getAttribute("data-image-size") && (o = t.getAttribute("data-image-size").split("x"),
        s.iconSize = L.point(parseInt(o[0]), parseInt(o[1])),
        s.iconAnchor = L.point(s.iconSize.x / 2, s.iconSize.y)),
        t.getAttribute("data-image-anchor") && (o = t.getAttribute("data-image-anchor").split(","),
        s.iconAnchor = L.point(parseInt(o[0]), parseInt(o[1]))),
        n = L.marker(a, {
            icon: L.icon(s)
        }),
        u && !t.hasAttribute("data-nocluster") ? p.push(n) : l.addLayer(n),
        d.push(n),
        (i = t.getElement("figcaption")) && (i.addClass("mapbox"),
        n.on("click", function() {
            g.closePopup(),
            g.setLatLng(n.getLatLng()).setContent(i).openOn(l)
        }
        .bind(this))),
        t.setStyle("display", "none"))
    }),
    0 < p.length && u && u.addLayers(p),
    1 < n.length || a ? l.fitBounds(r, {
        animate: !1
    }) : l.panTo(r.getCenter(), {
        animate: !1
    }),
    r && r.isValid() ? 1 == d.length ? (a = d[0].getLatLng(),
    a = L.latLngBounds([a.lat - .05, a.lng - .05], [a.lat + .05, a.lng + .05]),
    l.setMaxBounds(a),
    l.fitBounds(a),
    l.setMinZoom(i - 1 || l.getBoundsZoom(a, !1) - 1),
    l.setZoom(i || l.getBoundsZoom(a, !1) - 1)) : (l.setMaxBounds(r.pad(2)),
    l.setZoom(Math.min(l.getBoundsZoom(r, !1), 16))) : l.setMaxBounds(L.latLngBounds([-10.512491630618763, 111.35894182463358], [-43.087221461176576, 159.17144182463352])),
    L.tileLayer("//maptiles-{s}.pushcreative.com.au/bwland/{z}/{x}/{y}.png", {
        attribution: '&copy; <a target="_blank" rel="nofollow" href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        className: "basemap",
        detectRetina: !1
    }).addTo(l),
    L.tileLayer("//maptiles-{s}.pushcreative.com.au/bwlabels/{z}/{x}/{y}.png", {
        attribution: '&copy; <a target="_blank" rel="nofollow" href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        className: "labels",
        detectRetina: !1
    }).addTo(l),
    l
}
function stopYouTubes() {
    try {
        $$('iframe[src*="vimeo"],iframe[src*="youtube"]').each(function(t) {
            var e = t.src;
            t.src = e
        })
    } catch (t) {}
    return !1
}
function playYouTubes() {
    try {
        $$('iframe[src*="youtube"]').each(function(t) {
            t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        })
    } catch (t) {}
    return !1
}
window.async_load("mapping", function() {
    window.addEvent("load", function() {
        $$('[data-ui-role="map"]').each(function(t) {
            LoadMap(t, !0)
        })
    })
}),
window._runAfterEvent("load", function() {
    PushWidgets.attachAll()
});
