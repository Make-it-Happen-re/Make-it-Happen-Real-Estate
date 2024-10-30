(function() {
    var loopaSmartEvents = window._loopaSmartEvents;

    loopaSmartEvents.publisherData = {
        pubId: '5d7f032a1edb5721a47b7dcf',
        extraPublisherIds: '',
        siteScript: '\\n<img src="https://secure.adnxs.com/seg?add=19145721&t=2" width="1" height="1" />\\n\\n\\n\\n<img src="https://secure.adnxs.com/px?id=1157285&t=2" width="1" height="1" />\\n\\n\\n\\n<script>\\n    !function (f, b, e, v, n, t, s) {\\n        if (f.fbq) return; n = f.fbq = function () {\\n            n.callMethod ?\\n                n.callMethod.apply(n, arguments) : n.queue.push(arguments)\\n        };\\n        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = \'2.0\';\\n        n.queue = []; t = b.createElement(e); t.async = !0;\\n        t.src = v; s = b.getElementsByTagName(e)[0];\\n        s.parentNode.insertBefore(t, s)\\n    }(window, document, \'script\',\\n        \'https://connect.facebook.net/en_US/fbevents.js\');\\n    fbq(\'init\', \'466985510572128\');\\n    fbq(\'track\', \'PageView\');\\n</script>\\n\\n\\n\\n<script>\\n    !function (e, i) { if (!e.pixie) { var n = e.pixie = function (e, i, a) { n.actionQueue.push({ action: e, actionValue: i, params: a }) }; n.actionQueue = []; var a = i.createElement("script"); a.async = !0, a.src = "//acdn.adnxs.com/dmp/up/pixie.js"; var t = i.getElementsByTagName("head")[0]; t.insertBefore(a, t.firstChild) }  pixie(\'init\', \'0daf3a60-36c4-40d4-bc0b-a6463b1e02e0\'); pixie(\'event\', \'PageView\');}(window, document);       \\n</script>\\n\\n<script>\\n    if (document.querySelectorAll("a[href*=\'tel:\']") != null) {\\n        var t = document.querySelectorAll("a[href*=\'tel:\']");\\n        for (var i = 0; i < t.length; i++) {\\n            t[i].addEventListener("click", function (e) {\\n                loopa.push({\\n                    event: \'conversion\',\\n                    data: {\\n                        products: _loopaSmartEvents.productParsingData.productId(),\\n                        type: "Click-To-Call"\\n                    }\\n                });\\n            });\\n        }\\n    }\\n</script>\\n<script>\\n    if (document.querySelectorAll("a[href*=\'mailto:\']") != null) {\\n        var t = document.querySelectorAll("a[href*=\'mailto:\']");\\n        for (var i = 0; i < t.length; i++) {\\n            t[i].addEventListener("click", function (e) {\\n                loopa.push({\\n                    event: \'conversion\',\\n                    data: {\\n                        products: _loopaSmartEvents.productParsingData.productId(),\\n                        type: "Click-To-Email"\\n                    }\\n                });\\n            });\\n        }\\n    }\\n</script>\\n<script>\\n    if (document.querySelectorAll(".ofi-item") != null) {\\n        var t = document.querySelectorAll(".ofi-item");\\n        for (var i = 0; i < t.length; i++) {\\n            t[i].addEventListener("click", function (e) {\\n                loopa.push({\\n                    event: \'conversion\',\\n                    data: {\\n                        products: _loopaSmartEvents.productParsingData.productId(),\\n                        type: "AddToCalender"\\n                    }\\n                });\\n            });\\n        }\\n    }\\n</script>\\n<script>\\n    if (document.querySelector("#enquirypanel > div > form > div[class=\'fieldset submit\'] > button") != null) {\\n        document.querySelector("#enquirypanel > div > form > div[class=\'fieldset submit\'] > button").addEventListener("click", function (e) {\\n            loopa.push({\\n                event: \'conversion\',\\n                data: {\\n                    products: _loopaSmartEvents.productParsingData.productId(),\\n                    type: "Enquire-Now"\\n                }\\n            });\\n        });\\n    }\\n</script>\\n<script>\\n    if (document.querySelectorAll("a[href*=\'vcard\']") != null) {\\n        var t = document.querySelectorAll("a[href*=\'vcard\']");\\n        for (var i = 0; i < t.length; i++) {\\n            t[i].addEventListener("click", function (e) {\\n                loopa.push({\\n                    event: \'conversion\',\\n                    data: {\\n                        products: _loopaSmartEvents.productParsingData.productId(),\\n                        type: "Download-Contact-Agent"\\n                    }\\n                });\\n            });\\n        }\\n    }\\n</script>\\n<script>\\n    if (document.querySelector("#signupForm > div > button") != null) {\\n        document.querySelector("#signupForm > div > button").addEventListener("click", function (e) {\\n            loopa.push({\\n                event: \'conversion\',\\n                data: {\\n                    products: _loopaSmartEvents.productParsingData.productId(),\\n                    type: "Help-Me-Find-A-Property-Agent"\\n                }\\n            });\\n        });\\n    }\\n</script>\\n<script>\\n    if (document.querySelector("#appraisalpanel > div > form > .fieldset.submit > button") != null) {\\n        document.querySelector("#appraisalpanel > div > form > .fieldset.submit > button").addEventListener("click", function (e) {\\n            loopa.push({\\n                event: \'conversion\',\\n                data: {\\n                    products: _loopaSmartEvents.productParsingData.productId(),\\n                    type: "Request-An-Apraisal-Agent"\\n                }\\n            });\\n        });\\n    }\\n</script>\\n<script>\\n    if (document.querySelector("a[ga-event-action=\'ViewSOI\']") != null) {\\n        document.querySelector("a[ga-event-action=\'ViewSOI\']").addEventListener("click", function (e) {\\n            loopa.push({\\n                event: \'conversion\',\\n                data: {\\n                    products: _loopaSmartEvents.productParsingData.productId(),\\n                    type: "SOI-Download"\\n                }\\n            });\\n        });\\n    }\\n</script>\\n<script>\\nwindow.loopaSecondary=window.loopaSecondary||[];\\n!function () { if ("undefined" == typeof window._loopaSecondarySmartEvents) { window._loopaSecondarySmartEvents = {}; var e = "5ceb6928e3dad51fb08f64ad", t = function () { var t = document.createElement("script"); t.src = "//rtb.loopa.net.au/Pub/SmartEvents?smartEventsObjName=_loopaSecondarySmartEvents&pId=" + e, t.setAttribute("async", "true"), t.type = "text/javascript"; var a = document.createElement("script"); a.src = "//rtb.loopa.net.au/Scripts/Publisher/loopaSecondarySmartEvents.min.js", a.setAttribute("async", "true"), a.type = "text/javascript"; var n = document.getElementsByTagName("head")[0]; if (n || (n = document.getElementsByTagName("script")[0].parentNode), n.appendChild(t), n.appendChild(a), !document.getElementById("___lpHead")) { var d = document.createElement("span"); d.id = "___lpHead", d.setAttribute("style", "display:none;"), n = document.getElementsByTagName("body")[0], n || (n = document.getElementsByTagName("head")[0]), n.appendChild(d) } }; "complete" === document.readyState ? t() : window.addEventListener ? window.addEventListener("load", t, !1) : window.attachEvent ? window.attachEvent("onload", t) : t() } }();\\n</script>',
        productScript: '\\n<img src="https://secure.adnxs.com/seg?add=19145722&t=2" width="1" height="1" />\\n\\n\\n<script>\\n    _loopaSmartEvents.utils.addSpanToHead(\'<img s\' + \'rc="https://www.face\' + \'book.com/tr?id=466985510572128&ev=ViewContent&cd[content_ids]=\' + _loopaSmartEvents.productParsingData.productId() + \'&cd[price]=\' + _loopaSmartEvents.productParsingData.price() + \'&cd[housingType]=\' + _loopaSmartEvents.productParsingData.productType() + \'&cd[location]=\' + encodeURI(_loopaSmartEvents.productParsingData.customField4()) + \'&noscript=1" height="1" width="1" style="display:none"/>\');\\n</script>',
        conversionScript: '\\n<img src="https://secure.adnxs.com/px?id=1157284&t=2" width="1" height="1" />\\n\\n\\n<script>\\n    var conversionType = "[[TYPE]]";\\n    switch (conversionType) {\\n        case "Download-Contact-Agent":\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://www.facebook.com/tr?id=466985510572128&ev=Lead&noscript=1&cd[enquiryType]=DownloadContact-Agent" width="1" height="1" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://trc.taboola.com/1336235/log/3/unip?en=DownloadContactagentspage" width="0" height="0" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://secure.adnxs.com/px?id=1399329&t=2" width="1" height="1" />\');\\n            pixie(\'event\', \'Download-Contact-Agent\');\\n            break;\\n        case "Help-Me-Find-A-Property-Agent":\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://www.facebook.com/tr?id=466985510572128&ev=Lead&noscript=1&cd[enquiryType]=HelpMeFindAProperty-Agent" width="1" height="1" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://trc.taboola.com/1336235/log/3/unip?en=HelpMeFindAPropertyagentspage" width="0" height="0" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://secure.adnxs.com/px?id=1399328&t=2" width="1" height="1" />\');\\n            pixie(\'event\', \'Help-Me-Find-A-Property-Agent\');\\n            break;\\n        case "Request-An-Apraisal-Agent":\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://www.facebook.com/tr?id=466985510572128&ev=Lead&noscript=1&cd[enquiryType]=RequestAnApraisal-Agent" width="1" height="1" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://trc.taboola.com/1336235/log/3/unip?en=RequestAnApraisalagentspage" width="0" height="0" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://secure.adnxs.com/px?id=1399327&t=2" width="1" height="1" />\');\\n            pixie(\'event\', \'Request-An-Apraisal-Agent\');\\n            break;\\n        case "Property-Website":\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://www.facebook.com/tr?id=466985510572128&ev=Lead&noscript=1&cd[enquiryType]=PropertyWebsite" width="1" height="1" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://trc.taboola.com/1336235/log/3/unip?en=PropertyWebsite" width="0" height="0" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://secure.adnxs.com/px?id=1399326&t=2" width="1" height="1" />\');\\n            pixie(\'event\', \'Property-Website\');\\n            break;\\n        case "SOI-Download":\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://www.facebook.com/tr?id=466985510572128&ev=Lead&noscript=1&cd[enquiryType]=StatementofInformationDownload" width="1" height="1" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://trc.taboola.com/1336235/log/3/unip?en=SOI" width="0" height="0" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://secure.adnxs.com/px?id=1399325&t=2" width="1" height="1" />\');\\n            pixie(\'event\', \'SOI-Download\');\\n            break;\\n        case "Click-To-Email":\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://www.facebook.com/tr?id=466985510572128&ev=Lead&noscript=1&cd[enquiryType]=ClickToEmail" width="1" height="1" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://trc.taboola.com/1336235/log/3/unip?en=ClickToEmail" width="0" height="0" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://secure.adnxs.com/px?id=1399324&t=2" width="1" height="1" />\');\\n            pixie(\'event\', \'Click-To-Email\');\\n            break;\\n        case "Click-To-Call":\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://www.facebook.com/tr?id=466985510572128&ev=Lead&noscript=1&cd[enquiryType]=ClickToCall" width="1" height="1" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://trc.taboola.com/1336235/log/3/unip?en=ClicktoCall" width="0" height="0" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://secure.adnxs.com/px?id=1399323&t=2" width="1" height="1" />\');\\n            pixie(\'event\', \'Click-To-Call\');\\n            break;\\n        case "AddToCalender":\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://www.facebook.com/tr?id=466985510572128&ev=Lead&noscript=1&cd[enquiryType]=AddToCalender" width="1" height="1" />\');\\n            pixie(\'event\', \'Add-To-Calender\');\\n            break;\\n        case "Enquire-Now":\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://www.facebook.com/tr?id=466985510572128&ev=Lead&noscript=1&cd[enquiryType]=EnquireNow" width="1" height="1" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://trc.taboola.com/1336235/log/3/unip?en=EnquireNow" width="0" height="0" />\');\\n            window._loopaSmartEvents.utils.addSpanToHead(\'<im\' + \'g sr\' + \'c="https://secure.adnxs.com/px?id=1399322&t=2" width="1" height="1" />\');\\n            pixie(\'event\', \'Enquire-Now\');\\n            break;\\n    }\\n</script>',
        addToCartScript: '\\n<img src="https://secure.adnxs.com/seg?add=19145723&t=2" width="1" height="1" />\\n',
        genericActionScript: '',
        allowCookieMessage: false,
        messageSelector: '',
        includePostscribe: false,
        autoTriggerOnHashChange: false,
        enableEU: false,
        postParsedData: false,
        audienceSplitScript: '',
        enableActionTracking: false
    };

    loopaSmartEvents.productParsingData = {
        title: function() {
            return (function() {
                if (document.querySelector(".content-container .med-8 h3")) {
                    return document.querySelector(".content-container .med-8 h3").textContent
                } else
                    return "";
            }
            )();
        },
        itemUrl: function() {
            return _loopaSmartEvents.utils.getMetadataByProperty('og:url');
        },
        productId: function() {
            return (function() {
                var b = document.querySelectorAll('.blog');
                if (b == null || b.length < 1) {
                    if (typeof window.__lc.params !== "undefined" && window.__lc.params != null && window.__lc.params.length > 0 && window.__lc.params[0].name === "CRM Property ID") {
                        return "T" + window.__lc.params[0].value;
                    } else {
                        return (/\/(\d+)/).test(document.location) ? (/\/(\d+)/).exec(document.location)[1] : "";
                    }
                }
            }
            )();
        },
        description: function() {
            return _loopaSmartEvents.utils.getMetadataByName('description');
        },
        mainImage: function() {
            return ''
        },
        images: function() {
            return (function() {
                const imgs = document.querySelectorAll("[itemprop=photo] [itemprop=url]");
                let images_arr = [];
                const limit = 4;
                var i = 0;
                for (const img of imgs) {
                    if (i < limit) {
                        if ((/(http).*?(.jpg)/g).test(img.attributes.href.value)) {
                            images_arr.push(img.attributes.href.value);
                            i++;
                        } else if ((/(\/imagecache).*?(.jpg)/g).test(img.attributes.href.value)) {
                            img.attributes.href.value = "https://theagency.com.au" + img.attributes.href.value;
                            images_arr.push(img.attributes.href.value);
                            i++;
                        }
                    } else
                        break;
                }
                return images_arr;
            }
            )();
        },
        language: function() {
            return ''
        },
        price: function() {
            return (function() {
                var h4Elements = document.querySelectorAll("h4");
                var pricetext = '';
                for (var i = 0; i < h4Elements.length; i++) {
                    if (h4Elements[i].innerText.indexOf('Price') >= 0) {
                        pricetext = h4Elements[i].nextElementSibling.innerText
                    }
                }

                var indices = [];
                for (var i = 0; i < pricetext.length; i++) {
                    if (pricetext[i] === "$")
                        indices.push(i);
                }
                if (pricetext.indexOf('$') > -1) {
                    return pricetext.substring(indices[0], indices[1]).replace(/\D/g, '');
                } else {
                    return "500000";
                }
            }
            )();
        },
        rrp: function() {
            return ''
        },
        brandName: function() {
            return ''
        },
        colour: function() {
            return ''
        },
        stock: function() {
            return ''
        },
        category: function() {
            return (function() {
                var price = _loopaSmartEvents.productParsingData.price();
                var priceband = "priceband2";
                if (price < 500000) {
                    priceband = "priceband1";
                } else if (price > 1000000) {
                    priceband = "priceband3";
                }
                return "residential_" + priceband;
            }
            )();
        },
        subCategory: function() {
            return ''
        },
        mpn: function() {
            return document.querySelector('.icons > .icon-area') !== null && document.querySelector('.icons > .icon-area').innerText.length > 0 ? document.querySelector('.icons > .icon-area').innerText.replace((/\d+/g), '') : 0;
        },
        gtin: function() {
            return ''
        },
        productType: function() {
            return document.querySelector('.column.tiny-12.med-4.o3-tiny.o0-med > h3') != null && document.querySelector('.column.tiny-12.med-4.o3-tiny.o0-med > h3').textContent.length > 0 ? document.querySelector('.column.tiny-12.med-4.o3-tiny.o0-med > h3').textContent.trim() : "";
        },
        customField1: function() {
            return _loopaSmartEvents.utils.getMetadataByProperty('og:locality');
        },
        customField2: function() {
            return _loopaSmartEvents.utils.getMetadataByProperty('og:street-address');
        },
        customField3: function() {
            return document.querySelector('.icon-bed') != null ? document.querySelector('.icon-bed').textContent : "";
        },
        customField4: function() {
            return document.querySelector('.icon-bath') != null ? document.querySelector('.icon-bath').textContent : "";
        },
        customField5: function() {
            return (function() {
                var h4Elements = document.querySelectorAll("h4");
                var pricetext = '';
                for (var i = 0; i < h4Elements.length; i++) {
                    if (h4Elements[i].innerText.indexOf('Price') >= 0) {
                        pricetext = h4Elements[i].nextElementSibling.innerText
                    }
                }

                return pricetext;
            }
            )();
        },
        customField6: function() {
            return document.querySelector(".contact-info > li > a[itemprop='phone']") != null ? document.querySelector(".contact-info > li > a[itemprop='phone']").textContent : "";
        },
        customField7: function() {
            return (function() {
                var agentImage = "";
                if (document.querySelector(".agentTile [itemprop='image']") != null && document.querySelector(".agentTile [itemprop='image']").getAttribute('Content').length > 0) {
                    agentImage = document.querySelector(".agentTile [itemprop='image']").getAttribute('Content');
                    if (!(/(http).*?(.jpg)/g).test(agentImage)) {
                        agentImage = "https://theagency.com.au" + agentImage;
                    }
                }

                return agentImage;
            }
            )()
        },
        customField8: function() {
            return document.querySelector('.agent-name span') !== null ? document.querySelector('.agent-name span').textContent : "";
        },
        customField9: function() {
            return document.querySelector('.icons > .icon-area') !== null && document.querySelector('.icons > .icon-area').innerText.length > 0 ? document.querySelector('.icons > .icon-area').innerText.replace((/[^\d]/g), '') : 0;
        },
        customField10: function() {
            return ''
        },
        customField11: function() {
            return document.querySelector(".contact-info > li > a[itemprop='email']") != null ? document.querySelector(".contact-info > li > a[itemprop='email']").textContent : "";
        },
        customField12: function() {
            return ''
        },
        customField13: function() {
            return document.querySelector('.icon-car') != null ? document.querySelector('.icon-car').textContent : "";
        },
        customField14: function() {
            return ''
        },
        customField15: function() {
            return ''
        },
        customField16: function() {
            return ''
        },
        latitude: function() {
            return ''
        },
        longitude: function() {
            return ''
        }
    };

    loopaSmartEvents.gdprSettings = {
        mode: 'BlockEu',
        applyRulesOutsideEu: false,
        cookieAllowedCheckScript: function() {
            return false
        },
        cookieDisabledCheckScript: function() {
            return false
        }
    };

    loopaSmartEvents.userData = {
        hasCookie: false,
        userId: '',
        externalNetworks: []
    };

}());
