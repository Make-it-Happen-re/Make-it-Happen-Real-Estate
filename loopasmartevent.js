!function() {
    var e = window._loopaSmartEvents
      , t = 300
      , n = !1
      , r = "";
    e.publisherIds = [],
    e.init = function() {
        try {
            t--;
            var i = !1;
            "undefined" == typeof this.publisherData || this.publisherData.includePostscribe && "undefined" == typeof postscribe || !this.gdprHandling.checkIfAllowedToTrack() || (i = !0,
            "undefined" == typeof e.initialised && (e.initialised = !0,
            null != typeof this.publisherData.extraPublisherIds && this.publisherData.extraPublisherIds.length > 0 && (e.publisherIds = this.publisherData.extraPublisherIds.split(",")),
            e.publisherIds.push(this.publisherData.pubId),
            this.initLocalCookie(),
            this.checkPageView(),
            this.parseProduct(),
            this.checkProductView(),
            this.syncExternalNetworks(),
            e.handleEvent(),
            window.loopa.push = function() {
                Array.prototype.push.apply(this, arguments),
                e.handleEvent()
            }
            ,
            this.publisherData.autoTriggerOnHashChange && (e.currentPage = window.location.href,
            setInterval(function() {
                _loopaSmartEvents.currentPage !== window.location.href && (_loopaSmartEvents.currentPage = window.location.href,
                setTimeout(function() {
                    _loopaSmartEvents.processPageChange()
                }, 2e3))
            }, 500)))),
            t > 0 && !i && ("undefined" != typeof this.publisherData && this.publisherData.includePostscribe && (n || "undefined" != typeof postscribe || e.utils.addSpanToHead('<script src="https://cdnjs.cloudflare.com/ajax/libs/postscribe/2.0.6/postscribe.min.js" ></script>'),
            n = !0),
            setTimeout("window._loopaSmartEvents.init()", 500))
        } catch (t) {
            t && e.utils.reportError("Smart Events Error: " + t)
        }
    }
    ,
    e.handleEvent = function() {
        for (; window.loopa.length > 0; )
            try {
                var t = window.loopa.shift();
                if (null !== t && "undefined" != typeof t && null !== t.event && null !== t.data) {
                    var n = t.data;
                    switch (t.event) {
                    case "conversion":
                        e.eventHandlers.conversion(n.transactionId, n.value, n.products, n.type, n.currency);
                        break;
                    case "addToCart":
                        e.eventHandlers.addToCart(n.productId);
                        break;
                    case "productView":
                        e.eventHandlers.saveProductView(n.productId, n.language);
                        break;
                    case "pageView":
                        e.eventHandlers.recordAction(1, n.pageUrl.replace("#", "%23"));
                        break;
                    case "userData":
                        e.eventHandlers.userPubData(n.key, n.value);
                        break;
                    case "userIdentifier":
                        e.eventHandlers.userPubData("UserNameHash", this.utils.sha256(n.identifer));
                        break;
                    case "action":
                        e.genericAction(0, n);
                        break;
                    case "allowCookies":
                        e.gdprHandling.permissionGrantedCallback();
                        break;
                    case "denyCookies":
                        e.gdprHandling.permissionDeniedCallback()
                    }
                }
            } catch (t) {
                t && e.utils.reportError("Smart Events Handling Error: " + t)
            }
    }
    ,
    e.parseProduct = function() {
        try {
            var t = this.productParsingData
              , n = t.productId();
            if ("undefined" != typeof n && null !== n && n.length > 0) {
                var i = t.price()
                  , r = t.title()
                  , o = t.mainImage();
                if (i && i.length >= 0 && r && r.length > 0 && o && o.length > 0)
                    for (var a = 0; a < e.publisherIds.length; a++) {
                        var d = Math.round((new Date).getTime() / 1e3)
                          , s = "ptId=" + e.publisherIds[a] + "&cb=" + d + "&price=" + i + "&title=" + encodeURIComponent(r) + "&mainImage=" + (o.length > 1 && o.indexOf("?") > -1 ? encodeURIComponent(o.substring(0, o.indexOf("?"))) : o) + "&productId=" + encodeURIComponent(t.productId()) + "&itemUrl=" + encodeURIComponent(t.itemUrl()) + "&language=" + encodeURIComponent(t.language()) + "&rrp=" + t.rrp() + "&brandName=" + encodeURIComponent(t.brandName()) + "&colour=" + encodeURIComponent(t.colour()) + "&stock=" + encodeURIComponent(t.stock()) + "&category=" + encodeURIComponent(t.category()) + "&subCategory=" + encodeURIComponent(t.subCategory()) + "&mpn=" + encodeURIComponent(t.mpn()) + "&gtin=" + encodeURIComponent(t.gtin()) + "&productType=" + encodeURIComponent(t.productType()) + "&c1=" + encodeURIComponent(t.customField1()) + "&c2=" + encodeURIComponent(t.customField2()) + "&c3=" + encodeURIComponent(t.customField3()) + "&c4=" + encodeURIComponent(t.customField4()) + "&c5=" + encodeURIComponent(t.customField5()) + "&c6=" + encodeURIComponent(t.customField6()) + "&c7=" + encodeURIComponent(t.customField7()) + "&c8=" + encodeURIComponent(t.customField8()) + "&c9=" + t.customField9() + "&c10=" + t.customField10() + "&c11=" + encodeURIComponent(t.customField11()) + "&c12=" + encodeURIComponent(t.customField12()) + "&c13=" + encodeURIComponent(t.customField13()) + "&c14=" + encodeURIComponent(t.customField14()) + "&c15=" + encodeURIComponent(t.customField15()) + "&c16=" + encodeURIComponent(t.customField16()) + "&lat=" + encodeURIComponent(t.latitude()) + "&lng=" + encodeURIComponent(t.longitude()) + "&description=" + encodeURIComponent(t.description())
                          , l = t.images();
                        if ("undefined" != typeof l && l.length > 0 && (l[1] && (s += "&image1=" + (l[1] && l[1].length > 1 && l[1].indexOf("?") > -1 ? encodeURIComponent(l[1].substring(0, l[1].indexOf("?"))) : l[1])),
                        l[2] && (s += "&image2=" + (l[2] && l[2].length > 1 && l[2].indexOf("?") > -1 ? encodeURIComponent(l[2].substring(0, l[2].indexOf("?"))) : l[2])),
                        l[3] && (s += "&image3=" + (l[3] && l[3].length > 1 && l[3].indexOf("?") > -1 ? encodeURIComponent(l[3].substring(0, l[3].indexOf("?"))) : l[3]))),
                        "undefined" != typeof this.publisherData.postParsedData && this.publisherData.postParsedData) {
                            var c = new XMLHttpRequest;
                            c.open("POST", "https://rtb.loopa.net.au/Pub/Save"),
                            c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                            c.onload = function() {
                                200 === c.status
                            }
                            ,
                            c.send(s)
                        } else
                            e.utils.addSpanToHead('<img src="//rtb.loopa.net.au/Pub/Save?' + s.replace(/"/g, "&quot;") + '" alt="">')
                    }
            }
        } catch (t) {
            e.utils.reportError("Product Parse Error: " + t.toString())
        }
    }
    ,
    e.checkProductView = function() {
        var e = this.productParsingData
          , t = e.productId();
        t && t.length > 0 && this.eventHandlers.saveProductView(t, encodeURIComponent(e.language()))
    }
    ,
    e.checkPageView = function() {
        "undefined" != typeof document.location && "undefined" != typeof document.location.href && (e.publisherData.enableActionTracking && e.eventHandlers.recordAction(1, document.location.href.replace("#", "%23").replace(/\&/g, "%26")),
        e.publisherData.siteScript && e.publisherData.siteScript.length > 0 && e.utils.addSpanToHead(e.publisherData.siteScript),
        e.publisherData.audienceSplitScript && e.publisherData.audienceSplitScript.length > 0 && e.utils.addSpanToHead(e.publisherData.audienceSplitScript))
    }
    ,
    e.syncExternalNetworks = function() {
        if (this.userData.externalNetworks && this.userData.externalNetworks.length > 0)
            var t = 200
              , n = setInterval(function() {
                if (t--,
                !document.querySelector || document.querySelector('img[src*="/Pixel"]') && document.querySelector('img[src*="/Pixel"]').complete)
                    for (clearInterval(n),
                    i = 0; i < e.userData.externalNetworks.length; i++)
                        for (var r = e.userData.externalNetworks[i], o = 0; o < e.publisherIds.length; o++)
                            e.utils.addSpanToHead('<img src="' + r.Url.replace("[LOOPA_URL]", "https://rtb.loopa.net.au/Pixel/Match?publisherId=" + e.publisherIds[o] + "&externalNetworkId=" + r.Id) + '" alt="">');
                else
                    t <= 0 && clearInterval(n)
            }, 500)
    }
    ,
    e.genericAction = function(t, n) {
        if (e.eventHandlers.recordAction(t, n),
        e.publisherData.genericActionScript && e.publisherData.genericActionScript.length > 0) {
            var i = e.publisherData.genericActionScript.replace("[[DATA]]", n);
            e.utils.addSpanToHead(i)
        }
    }
    ,
    e.initLocalCookie = function() {
        r = e.utils.getUrlParameter("___lp3UId"),
        "undefined" != typeof r && null !== r && 0 !== r.length || ("undefined" != typeof e.userData.userId && e.userData.userId && e.userData.userId.length > 0 && (r = e.userData.userId),
        "undefined" != typeof r && null !== r && 0 !== r.length || (r = e.utils.readCookie("___lp3UId"))),
        "undefined" != typeof r && null !== r && r.length > 0 ? document.cookie = "___lp3UId=" + r + ";path=/;max-age=15552000" : r = ""
    }
    ,
    e.processPageChange = function(n) {
        if ("undefined" != typeof n && null !== n && "undefined" !== n && "undefined" !== e.publisherData && null !== e.publisherData && e.publisherData.pubId !== n) {
            e.publisherData = null,
            e.utils.removeHeadSpan();
            var i = document.createElement("script");
            i.src = "//rtb.loopa.net.au/Pub/SmartEvents?pId=" + n,
            i.setAttribute("async", "true"),
            i.type = "text/javascript";
            var r = document.getElementsByTagName("head")[0];
            return r || (r = document.getElementsByTagName("script")[0].parentNode),
            r.appendChild(i),
            t = 300,
            e.initialised = void 0,
            e.publisherIds = [],
            void setTimeout(function() {
                try {
                    window._loopaSmartEvents.init()
                } catch (e) {}
            }, 1e3)
        }
        "undefined" != typeof e && "undefined" != typeof e.initialised && e.initialised && (e.utils.removeHeadSpan(),
        e.checkPageView(),
        e.parseProduct(),
        e.checkProductView())
    }
    ,
    e.getLocalCookieQueryString = function() {
        return null !== r && r.length > 0 ? "&uid=" + r : ""
    }
    ,
    e.eventHandlers = {},
    e.eventHandlers.saveProductView = function(t, n) {
        if (t && 0 !== t.length) {
            for (var i = 0; i < e.publisherIds.length; i++)
                e.utils.addSpanToHead('<img src="//rtb.loopa.net.au/Pixel?productId=' + t + "&publisherId=" + e.publisherIds[i] + "&language=" + n + e.getLocalCookieQueryString() + '" alt="">');
            if (e.publisherData.productScript && e.publisherData.productScript.length > 0) {
                var r = e.publisherData.productScript.replace("[[PRODUCT_ID]]", t);
                e.utils.addSpanToHead(r)
            }
        }
    }
    ,
    e.eventHandlers.recordAction = function(t, n) {
        for (var i = 0; i < e.publisherIds.length; i++)
            e.utils.addSpanToHead('<img src="//rtb.loopa.net.au/Pixel/RecordAction?publisherId=' + e.publisherIds[i] + "&actionType=" + t + e.getLocalCookieQueryString() + "&data=" + encodeURI(n) + '" alt="">')
    }
    ,
    e.eventHandlers.userPubData = function(t, n) {
        for (var i = 0; i < e.publisherIds.length; i++)
            e.utils.addSpanToHead('<img src="//rtb.loopa.net.au/Pixel/AddData?publisherId=' + e.publisherIds[i] + "&key=" + t + e.getLocalCookieQueryString() + "&data=" + encodeURI(n) + '" alt="">')
    }
    ,
    e.eventHandlers.conversion = function(t, n, i, r, o) {
        var a = e.productParsingData.productId();
        ("undefined" == typeof i || "undefined" === i || null === i || "" === i) && null !== a && a.length > 0 && (i = a),
        "undefined" != typeof r && "undefined" !== r && null !== r || (r = ""),
        "undefined" != typeof t && "undefined" !== t && null !== t || (t = ""),
        "undefined" != typeof n && "undefined" !== n && null !== n && 0 !== n.length || (n = "0"),
        "undefined" != typeof o && "undefined" !== o && null !== o && 0 !== o.length || (o = "AUD");
        for (var d = 0; d < e.publisherIds.length; d++)
            e.utils.addSpanToHead('<img src="//rtb.loopa.net.au/Conversion?pId=' + e.publisherIds[d] + "&tId=" + t + "&value=" + n + "&productids=" + i + "&conversionType=" + r + "&currency=" + o + e.getLocalCookieQueryString() + '" alt="">');
        if (e.publisherData.conversionScript && e.publisherData.conversionScript.length > 0) {
            n = n.toString().replace(/[^0-9\.]/gi, "");
            var s = e.publisherData.conversionScript.replace(/\[\[TRANSACTION_ID\]\]/gi, t).replace(/\[\[VALUE\]\]/gi, n).replace(/\[\[PRODUCT_IDS\]\]/gi, i).replace(/\[\[TYPE\]\]/gi, r).replace(/\[\[CURRENCY\]\]/gi, o);
            e.utils.addSpanToHead(s)
        }
    }
    ,
    e.eventHandlers.addToCart = function(t) {
        if (this.recordAction(2, t),
        e.publisherData.addToCartScript && e.publisherData.addToCartScript.length > 0) {
            var n = e.publisherData.addToCartScript.replace("[[PRODUCT_ID]]", t);
            e.utils.addSpanToHead(n)
        }
    }
    ,
    e.gdprHandling = e.gdprHandling || {},
    e.gdprHandling.euCheckAdded = !1,
    e.gdprHandling.euFirstPageCookieAdded = !1,
    e.gdprHandling.trackingDenied = !1,
    e.gdprHandling.trackingPermitted = !1,
    e.gdprHandling.iabVendorNumber = 1e4,
    e.gdprHandling.checkIfAllowedToTrack = function() {
        if (!e.gdprSettings.applyRulesOutsideEu)
            if (this.euCheckAdded) {
                if (!this.userInEU())
                    return !0
            } else
                this.addEuDetect();
        if (this.trackingDenied)
            return !1;
        if (this.trackingPermitted)
            return !0;
        switch (e.gdprSettings.mode) {
        case "BlockEu":
            return this.euCheckAdded ? !this.userInEU() : (this.addEuDetect(),
            !1);
        case "LoadAfterFirstPage":
            return !!this.checkEuFirstPageCookie() || (this.euFirstPageCookieAdded || (this.addEuFirstPageCookie(),
            this.euFirstPageCookieAdded = !0,
            this.trackingDenied = !0),
            !1);
        case "IabConsent":
            return "undefined" != typeof __tcfapi && __tcfapi("getTCData", 2, function(t, n) {
                try {
                    if ("undefined" != typeof t && null !== t && n)
                        if (t.gdprApplies) {
                            if ("undefined" != typeof t.purpose && "undefined" != typeof t.purpose.consents) {
                                for (var i = !1, r = 1; r <= 10; r++)
                                    "undefined" == typeof t.purpose.consents[r.toString()] || t.purpose.consents[r.toString()] || (i = !0);
                                i || (e.gdprHandling.trackingPermitted = !0,
                                e.gdprHandling.initLoopaIfNeeded())
                            }
                        } else
                            e.gdprHandling.trackingPermitted = !0
                } catch (t) {
                    t && e.utils.reportError("Smart Events IAB Consent Error: " + t)
                }
            }),
            !1;
        case "CustomScript":
            return this.trackingDenied = e.gdprSettings.cookieDisabledCheckScript(),
            !this.trackingDenied && e.gdprSettings.cookieAllowedCheckScript();
        case "Callback":
            for (i = 0; i < loopa.length; i++)
                null !== loopa[i] && null !== loopa[i].event && ("allowCookies" === loopa[i].event ? this.permissionGrantedCallback() : "denyCookies" === loopa[i].event && this.permissionDeniedCallback());
            return this.getEuConsentCookieAllowed()
        }
    }
    ,
    e.gdprHandling.userInEU = function() {
        return "undefined" == typeof window.__LpEuDetect || /.*___lpEU/i.test(document.location)
    }
    ,
    e.gdprHandling.addEuDetect = function() {
        e.utils.addSpanToHead('<script src="https://looparesources.azureedge.net/resources.js" ></script>'),
        this.euCheckAdded = !0
    }
    ,
    e.gdprHandling.addEuFirstPageCookie = function() {
        e.utils.setCookie("___lpVp1", "true")
    }
    ,
    e.gdprHandling.checkEuFirstPageCookie = function() {
        return null !== e.utils.readCookie("___lpVp1")
    }
    ,
    e.gdprHandling.setEuConsentCookie = function(t) {
        e.utils.setCookie("___lpEuC", t)
    }
    ,
    e.gdprHandling.getEuConsentCookieAllowed = function() {
        var t = e.utils.readCookie("___lpEuC");
        return null !== t && "1" === t
    }
    ,
    e.gdprHandling.permissionGrantedCallback = function() {
        this.trackingPermitted = !0,
        this.setEuConsentCookie(1),
        this.initLoopaIfNeeded()
    }
    ,
    e.gdprHandling.permissionDeniedCallback = function() {
        this.trackingDenied = !0,
        this.setEuConsentCookie(0)
    }
    ,
    e.gdprHandling.initLoopaIfNeeded = function() {
        t <= 0 && window._loopaSmartEvents.init()
    }
    ,
    e.utils = e.utils || {},
    e.utils.getMetadataByName = function(e) {
        var t;
        e = e.toLowerCase();
        var n = document.getElementsByTagName("meta");
        for (t = 0; t < n.length; t++)
            if (n[t].name && n[t].name.toLowerCase() === e)
                return n[t].content;
        return ""
    }
    ,
    e.utils.getMetadataByProperty = function(e) {
        e = e.toLowerCase();
        var t = document.getElementsByTagName("meta");
        for (var n in t)
            if (t[n].attributes && t[n].attributes.length > 1)
                for (var i in t[n].attributes)
                    if (t[n].attributes[i].name && "property" === t[n].attributes[i].name.toLowerCase() && t[n].attributes[i].value.toLowerCase() === e)
                        return t[n].content;
        return ""
    }
    ,
    e.utils.getDomElementByClassName = function(e, t) {
        var n = document.getElementsByTagName(e);
        for (var i in n)
            if ((" " + n[i].className + " ").indexOf(" " + t + " ") > -1)
                return n[i];
        return null
    }
    ,
    e.utils.getDomElementByInnerClassName = function(e, t, n) {
        var i = e.getElementsByTagName(t);
        for (var r in i)
            if ((" " + i[r].className + " ").indexOf(" " + n + " ") > -1)
                return i[r];
        return null
    }
    ,
    e.utils.readCookie = function(e) {
        for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
            for (var r = n[i]; " " === r.charAt(0); )
                r = r.substring(1, r.length);
            if (0 === r.indexOf(t))
                return r.substring(t.length, r.length)
        }
        return null
    }
    ,
    e.utils.setCookie = function(e, t) {
        var n = e + "=" + t + "; SameSite=None; path=/";
        0 === document.location.href.indexOf("https://") && (n += "; Secure"),
        document.cookie = n
    }
    ,
    e.utils.getUrlParameter = function(e) {
        var t = new RegExp("[?&]" + encodeURIComponent(e) + "=([^&]*)").exec(location.search);
        return t ? decodeURIComponent(t[1]) : ""
    }
    ,
    e.utils.addSpanToHead = function(t, n) {
        try {
            if (!document.getElementById("___lpHead")) {
                var i = document.createElement("span");
                i.id = "___lpHead",
                i.setAttribute("style", "display:none;"),
                p = document.getElementsByTagName("body")[0],
                p || (p = document.getElementsByTagName("head")[0]),
                p.appendChild(i)
            }
            var r = document.getElementById("___lpHead");
            if (r) {
                t = t.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, e.utils.scriptExtraction),
                t = t.replace(/<loopascript[^>]*>([\s\S]*?)<\/loopascript>/gi, e.utils.scriptExtraction);
                var o = document.createElement("span");
                o.setAttribute("style", "display:none;"),
                o.innerHTML = t,
                o.innerHTML = o.innerHTML.replace(/\\n/gi, "\n"),
                r.appendChild(o)
            }
        } catch (e) {
            "undefined" != typeof reportError && n || reportError(e)
        }
    }
    ,
    e.utils.scriptExtraction = function(e, t) {
        var i = document.createElement("script")
          , r = document.getElementById("___lpHead")
          , o = /<(loopascript|script)[^>]*src\s*=\s*["']([^"']*)["']/gi.exec(e);
        if (o && o.length > 0)
            "undefined" != typeof postscribe && null !== postscribe && n ? postscribe("#___lpHead", '<script src="' + o[2] + '"></script>') : i.src = o[2];
        else {
            var a = "try {" + t.replace(/\\n/gi, "\n") + "\r\n} catch (loopaEx) { _loopaSmartEvents.utils.reportError('Added Page Script Error: ' + loopaEx.toString());}";
            i.text = a
        }
        return r.appendChild(i),
        ""
    }
    ,
    e.utils.removeHeadSpan = function() {
        try {
            var e = document.getElementById("___lpHead");
            "undefined" != typeof e && null !== e && e.remove()
        } catch (e) {}
    }
    ,
    e.utils.sha256 = function e(t) {
        function n(e, t) {
            return e >>> t | e << 32 - t
        }
        for (var i, r, o = Math.pow, a = o(2, 32), d = "length", s = "", l = [], c = 8 * t[d], u = e.h = e.h || [], p = e.k = e.k || [], g = p[d], h = {}, f = 2; g < 64; f++)
            if (!h[f]) {
                for (i = 0; i < 313; i += f)
                    h[i] = f;
                u[g] = o(f, .5) * a | 0,
                p[g++] = o(f, 1 / 3) * a | 0
            }
        for (t += ""; t[d] % 64 - 56; )
            t += "\0";
        for (i = 0; i < t[d]; i++) {
            if (r = t.charCodeAt(i),
            r >> 8)
                return;
            l[i >> 2] |= r << (3 - i) % 4 * 8
        }
        for (l[l[d]] = c / a | 0,
        l[l[d]] = c,
        r = 0; r < l[d]; ) {
            var m = l.slice(r, r += 16)
              , C = u;
            for (u = u.slice(0, 8),
            i = 0; i < 64; i++) {
                var b = m[i - 15]
                  , v = m[i - 2]
                  , I = u[0]
                  , y = u[4]
                  , k = u[7] + (n(y, 6) ^ n(y, 11) ^ n(y, 25)) + (y & u[5] ^ ~y & u[6]) + p[i] + (m[i] = i < 16 ? m[i] : m[i - 16] + (n(b, 7) ^ n(b, 18) ^ b >>> 3) + m[i - 7] + (n(v, 17) ^ n(v, 19) ^ v >>> 10) | 0)
                  , S = (n(I, 2) ^ n(I, 13) ^ n(I, 22)) + (I & u[1] ^ I & u[2] ^ u[1] & u[2]);
                u = [k + S | 0].concat(u),
                u[4] = u[4] + k | 0
            }
            for (i = 0; i < 8; i++)
                u[i] = u[i] + C[i] | 0
        }
        for (i = 0; i < 8; i++)
            for (r = 3; r + 1; r--) {
                var D = u[i] >> 8 * r & 255;
                s += (D < 16 ? 0 : "") + D.toString(16)
            }
        return s
    }
    ,
    e.utils.getSafeUrl = function() {
        var e = document.location.href.indexOf("?") > 0 ? document.location.href.substring(0, document.location.href.indexOf("?")) : document.location.href;
        return e = e.indexOf("#") > 0 ? e.substring(0, e.indexOf("#")) : e
    }
    ,
    e.utils.reportError = function(t) {
        try {
            e.utils.addSpanToHead('<img src="https://logs-01.loggly.com/inputs/ad5033bf-1cc2-473e-b364-d3e8a8162cea.gif?source=smart-events&error=' + encodeURIComponent(t.toString().replace(/"/g, "'")) + '" alt=""/>', !0)
        } catch (e) {}
    }
    ,
    setTimeout(function() {
        try {
            window._loopaSmartEvents.init()
        } catch (e) {}
    }, 1e3)
}();
