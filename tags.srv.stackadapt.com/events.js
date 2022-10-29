(function(w) {
    // Begin doc

    var is_dev = false;

    if (false) {
        is_dev = true;
    }

    var disable_sync = false;

    if (true) {
        disable_sync = true
    }

    var tip = "suAG4Gtax2r53vXLJ8kpLdQ2S8BFPJD3zYjGs4_ziOY"

    var userIdCookieValue = "s%3A0-27945b0b-ddf0-4fa4-4565-2a85adffd482.vN4YFyOCj6mjF4p2jKlUva7LnqE12Bsx2NKssA%2B9i98"
    var userIdV2CookieValue = "s%3A0-27945b0b-ddf0-4fa4-4565-2a85adffd482%24ip%24121.52.154.72.ROpm86fcddBVVtPeYQaPjn1XezHkraQkta81HIX0%2Fp4"
    var campCookieName = ""
    var campCookieValue = ""
    var campaignCookieLiveDuration = 7776000
    var userIdCookiesLiveDuration = 31536000

    var globals = {
            load_num: 0,
            init: !1,
            addr: is_dev ? "http://127.0.0.1" : "https://tags.srv.stackadapt.com",
            aid: "",
            impid: "",
            default_params: "",
            landing_page: "",
            secs_passed: 0,
            tec_secs_passed: 0,
            hidden: !1,
            host: window.location.protocol + "//" + window.location.host,
            sa_debug_key: "sa_debug"
        },
        hidden = "hidden",
        window_status = "visible";

    function onhiddenchange(e) {
        var o = "visible",
            t = "hidden",
            n = {
                focus: o,
                focusin: o,
                pageshow: o,
                blur: t,
                focusout: t,
                pagehide: t
            };
        e = e || window.event, window_status = e.type in n ? n[e.type] : this[hidden] ? "hidden" : "visible"
    }
    hidden in document ? document.addEventListener("visibilitychange", onhiddenchange) : (hidden = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", onhiddenchange) : (hidden = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", onhiddenchange) : (hidden = "msHidden") in document ? document.addEventListener("msvisibilitychange", onhiddenchange) : "onfocusin" in document ? document.onfocusin = document.onfocusout = onhiddenchange : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onhiddenchange, void 0 !== document[hidden] && onhiddenchange({
        type: document[hidden] ? "blur" : "focus"
    });
    var Cookies = function(e, o, t) {
        return 1 === arguments.length ? Cookies.get(e) : Cookies.set(e, o, t)
    };

    function currentLandingURL() {
        var e = getBasePageUrl(),
            o = e.split(/\?(.+)?/)[0],
            t = e.split(/\?(.+)?/)[1] || "prev_window_param=none";
        return [o = o.replace(/#/g, ""), t = t.replace(/#/g, ""), e]
    }

    function getBasePageUrl() {
        try {
            if (window.location.href && window.location.href.indexOf("fls.doubleclick.net/") > 0 && window.location.href.indexOf("~oref=") > 0 && (oref_arr = window.location.href.split("~oref="), oref_arr.length > 1)) return decodeURIComponent(oref_arr[1].split(";")[0])
        } catch (e) {}
        var e = window.location.ancestorOrigins;
        if (e && e.length > 1) {
            var o = e[e.length - 1];
            if (o) return o
        }
        return window.self !== window.top && window.document.referrer ? window.document.referrer : e && e[0] ? e[0] : window.location.href
    }

    function currentLandingURLKeepGet() {
        if (window.self !== window.top) var e = document.referrer;
        else e = window.location.href;
        return e = e.replace(/#/g, "")
    }

    function getTitle() {
        var e = "";
        try {
            e = encodeURIComponent(document.title)
        } catch (e) {}
        return e
    }

    function loadConv(e, o) {
        var t = new Image;
        res = currentLandingURL();
        var n = res[0];

        function a() {
            document.body.removeChild(t)
        }
        if (current_window_url_param = res[1], e) {
            var r = sa_url + "/conv?cid=" + e + "&url=" + encodeURIComponent(n) + "&is_js=true&rnd=" + Math.random() + "&t=" + getTitle() + "&tip=" + tip;
            if (o)
                for (var i in o) {
                    var s = o[i];
                    0 != i.indexOf("sa_conv_data_") && (i = "sa_conv_data_" + i), r += "&" + encodeURIComponent(i), r += "=" + encodeURIComponent(s)
                }
            current_window_url_param && current_window_url_param.indexOf(globals.sa_debug_key) > -1 && console.log("SA/conv"), t.onerror = a, t.onload = a, t.src = r;
            try {
                var c = appendSaCookiesToUrl(r);
                c[1] ? t.src = c[0] : t.src = appendSaLocalStorageToUrl(r)
            } catch (e) {}
            return document.body.appendChild(t), !0
        }
    }

    function loadRt(e) {
        return loadRtHelper(sa_url, e), !0
    }

    function loadRtHelper(e, o) {
        var t = new Image;
        res = currentLandingURL();
        var n = res[0];

        function a() {
            document.body.removeChild(t)
        }
        current_window_url_param = res[1], o && (t.onerror = a, t.onload = a, t.src = e + "/rt?sid=" + o + "&url=" + encodeURIComponent(n) + "&t=" + getTitle() + "&tip=" + tip, document.body.appendChild(t), current_window_url_param && current_window_url_param.indexOf(globals.sa_debug_key) > -1 && console.log("SA/RT"))
    }

    function loadLal(e) {
        return loadLalHelper(sa_url, e), !0
    }

    function loadLalHelper(e, o) {
        var t = new Image;
        res = currentLandingURL();
        var n = res[0];

        function a() {
            document.body.removeChild(t)
        }
        current_window_url_param = res[1], o && (t.onerror = a, t.onload = a, t.src = e + "/lal?sid=" + o + "&url=" + encodeURIComponent(n) + "&t=" + getTitle() + "&tip=" + tip, document.body.appendChild(t), current_window_url_param && current_window_url_param.indexOf(globals.sa_debug_key) > -1 && console.log("SA/LAL"))
    }

    function loadDrt(e, o) {
        return loadDrtHelper(sa_url, e, o), !0
    }

    function loadDrtHelper(e, o, t) {
        var n = new Image,
            a = currentLandingURLKeepGet();

        function r() {
            document.body.removeChild(n)
        }
        t && (n.onerror = r, n.onload = r, n.src = e + "/rt?drt=true&sid=" + o + "&url=" + encodeURIComponent(a) + "&t=" + getTitle() + "&tip=" + tip + "&args=" + encodeURIComponent(JSON.stringify(t)), document.body.appendChild(n))
    }

    function loadTs(e, o) {
        if (loadUniversalPixel(e, o), document.tsPixelLoaded || (document.tsPixelLoaded = {}), !document.tsPixelLoaded.sa_pixel_loaded) {
            document.tsPixelLoaded.sa_pixel_loaded = !0;
            var t = "",
                n = "",
                a = "",
                r = !1,
                i = Cookies.get("sa_aid_pv"),
                s = Cookies.get("sa_" + i + "_sid");
            !i || t && n && (t != i || n != s) || (t = Cookies.get("sa_aid_pv"), n = Cookies.get("sa_" + t + "_sid"), a = Cookies.get("sa_" + t + "_adurl"), r = !0), is_dev && (a = "http://127.0.0.1"), a && !is_dev && (a = a.indexOf("eu.srv.stackadapt.com") > -1 ? "https://eu.srv.stackadapt.com" : a.indexOf("uw.srv.stackadapt.com") > -1 ? "https://uw.srv.stackadapt.com" : a.indexOf("ap.srv.stackadapt.com") > -1 ? "https://ap.srv.stackadapt.com" : "https://east.srv.stackadapt.com"), document.referrer || (document.referrer = "");
            document.referrer;
            res = currentLandingURL();
            res[0];
            if (current_window_url_param = res[1], e = e.replace(/#/g, ""), current_window_url_param && current_window_url_param.indexOf(globals.sa_debug_key) > -1 && console.log("SA/TS"), t && n) {
                globals.default_params = "aid=" + t + "&imp=" + n;
                setInterval(function() {
                    globals.secs_passed > 3600 || "visible" == window_status && (globals.secs_passed++, makeCorsRequest(globals.addr + "/ifr_ts?" + globals.default_params + "&first=false&is_js=true&host=" + globals.host + "&destination=" + encodeURIComponent(a)))
                }, 1e3), r ? makeCorsRequest(globals.addr + "/ifr_pv?" + globals.default_params + "&is_js=true&host=" + globals.host + "&destination=" + encodeURIComponent(a)) : (Cookies.set("sa_aid_pv", t, {
                    expires: 3600
                }), Cookies.set("sa_" + t + "_sid", n, {
                    expires: 3600
                }), Cookies.set("sa_" + t + "_adurl", a, {
                    expires: 3600
                })), makeCorsRequest(globals.addr + "/ifr_ts?" + globals.default_params + "&first=true&is_js=true&host=" + globals.host + "&uid=" + encodeURIComponent(e) + "&destination=" + encodeURIComponent(a))
            }
        }
    }

    function loadUniversalPixel(e, o) {
        if (e) {
            var t = "";
            if (o)
                for (var n in o) t += "&" + encodeURIComponent("sa_conv_data_" + n), t += "=" + encodeURIComponent(o[n]);
            var a = currentLandingURL()[2],
                r = (is_dev ? globals.addr : "https://tags.srv.stackadapt.com") + "/saq_pxl?uid=" + e + "&is_js=true&landing_url=" + encodeURIComponent(a) + "&t=" + getTitle() + "&tip=" + tip + "&host=" + globals.host + t;
            try {
                var i = appendSaCookiesToUrl(r);
                r = i[1] ? i[0] : appendSaLocalStorageToUrl(r)
            } catch (e) {}
            createCORSRequest("GET", r, function(e) {}, function(e) {})
        }
    }

    function loadSyncPixelHelper(e) {
        return sync_pixel_map.forEach(function(o) {
            if (!e[o.partner]) {
                var t = "";
                if ("plain" == o.encoding ? t = "" : "b64" == o.encoding && (t = "J5RbC93wT6RFZSqFrf_Ugnk0mkg"), t.length > 0) try {
                    var n = new Image;

                    function a() {
                        n.parentNode === document.body && document.body.removeChild(n)
                    }
                    n.onerror = a, n.onload = a, n.src = o.url + t, document.body.appendChild(n)
                } catch (e) {
                    console.log(e)
                }
            }
        }), !0
    }

    function setCampaignCookie() {
        Cookies.set(campCookieName, campCookieValue, {
            expires: campaignCookieLiveDuration
        })
    }

    function setUserIdCookie() {
        Cookies.set("sa-user-id", userIdCookieValue, {
            expires: userIdCookiesLiveDuration
        })
    }

    function setUserIdCookieV2() {
        Cookies.set("sa-user-id-v2", userIdV2CookieValue, {
            expires: userIdCookiesLiveDuration
        })
    }

    function appendSaCookiesToUrl(e) {
        res = e, saCookies = Cookies.getSA();
        for (var o = !1, t = 0; t < saCookies.length; t++) {
            try {
                res += "&" + encodeURIComponent(saCookies[t]) + "=" + encodeURIComponent(Cookies.get(saCookies[t]))
            } catch (e) {
                continue
            }
            o = !0
        }
        return [res, o]
    }

    function setCampaignLocalStorage() {
        var e = {
            campValue: campCookieValue,
            ttl: Math.floor(Date.now() / 1e3) + campaignCookieLiveDuration
        };
        localStorage.setItem(campCookieName, JSON.stringify(e));
        var o = !0,
            t = localStorage.getItem("sa-camp-list-localStorage");
        (t == campCookieName || t.includes(";" + campCookieName)) && (o = !1), o && ("" != t && (t += ";"), t += campCookieName, localStorage.setItem("sa-camp-list-localStorage", t))
    }

    function setUserIdsLocalStorage() {
        localStorage.setItem("sa-user-id", userIdCookieValue), localStorage.setItem("sa-user-id-v2", userIdV2CookieValue)
    }

    function expireCampaignLocalStorage() {
        var e = localStorage.getItem("sa-camp-list-localStorage");
        if ("" !== e) {
            for (var o = e.split(";"), t = "", n = 0; n < o.length; n++) {
                var a;
                try {
                    localStoredCamp = localStorage.getItem(o[n]), "" !== localStoredCamp && (a = JSON.parse(localStoredCamp))
                } catch (e) {
                    try {
                        localStorage.removeItem(o[n])
                    } catch (e) {}
                    continue
                }
                if (a.ttl > Math.floor(Date.now() / 1e3)) "" != t && (t += ";"), t += o[n];
                else try {
                    localStorage.removeItem(o[n])
                } catch (e) {}
            }
            t != e && localStorage.setItem("sa-camp-list-localStorage", t)
        }
    }

    function appendSaLocalStorageToUrl(e) {
        var o = e;
        try {
            userid = localStorage.getItem("sa-user-id"), useridv2 = localStorage.getItem("sa-user-id-v2"), "" != userid && (o += "&" + encodeURIComponent("sa-user-id") + "=" + encodeURIComponent(userid)), "" != useridv2 && (o += "&" + encodeURIComponent("sa-user-id-v2") + "=" + encodeURIComponent(useridv2));
            var t = localStorage.getItem("sa-camp-list-localStorage");
            if ("" == t) return o;
            for (var n = t.split(";"), a = 0; a < n.length; a++) {
                var r;
                try {
                    localStoredCamp = localStorage.getItem(n[a]), "" !== localStoredCamp && (r = JSON.parse(localStoredCamp))
                } catch (e) {
                    continue
                }
                "" != r.campValue && (o += "&" + encodeURIComponent(n[a]) + "=" + encodeURIComponent(r.campValue))
            }
        } catch (e) {}
        return o
    }

    function jsPing(e, o) {
        var t = currentLandingURL()[0],
            n = "https://tags.srv.stackadapt.com/js_tracking?url=" + encodeURIComponent(t) + "&uid=" + encodeURIComponent(e) + "&host=" + globals.host;
        is_dev && (n = globals.addr + "/js_tracking?url=" + encodeURIComponent(t) + "&uid=" + encodeURIComponent(e) + "&host=" + globals.host + "&t=" + getTitle()), o && (n += "&aid=" + o), makeCorsRequest(n)
    }

    function createCORSRequest(e, o, t, n) {
        var a;
        try {
            a = new XMLHttpRequest
        } catch (e) {}
        a && "withCredentials" in a ? (a.open(e, o, !0), a.withCredentials = !0) : "undefined" != typeof XDomainRequest ? (a = new XDomainRequest).open(e, o) : "undefined" != typeof ActiveXObject ? (a = new ActiveXObject("Microsoft.XMLHTTP")).open(e, o) : a = null, a && (a.onload = function() {
            t(a)
        }, a.onerror = function() {
            n(a)
        }, setTimeout(function() {
            a.send()
        }, 0))
    }

    function makeCorsRequest(e) {
        createCORSRequest("GET", e, function(e) {}, function(e) {})
    }

    function getCSSValue() {
        return new Promise(function(e) {
            if (document.getElementById("sa-css")) return e(window.getComputedStyle(document.head).getPropertyValue("--sa-uid"));
            var o = document.createElement("link");
            o.id = "sa-css", o.rel = "stylesheet", o.type = "text/css", o.href = "https://tags.srv.stackadapt.com/sa.css", o.media = "all", o.onload = function() {
                var o = window.getComputedStyle(document.head).getPropertyValue("--sa-uid");
                return e(o)
            }, o.onerror = function() {
                return e("")
            }, document.head.appendChild(o)
        })
    }

    function getImageValue() {
        return new Promise(function(e) {
            return fetch("https://tags.srv.stackadapt.com/sa.jpeg", {
                cache: "force-cache"
            }).then(function(e) {
                return e.blob()
            }).then(function(o) {
                var t = new FileReader;
                t.onload = function() {
                    var o = this.result,
                        t = o.indexOf(","),
                        n = o.substr(t + 1),
                        a = window.atob(n);
                    return e(ascii_to_hexa(a))
                }, t.readAsDataURL(o)
            }).catch(function() {
                return e("")
            })
        })
    }

    function ascii_to_hexa(e) {
        for (var o = [], t = 0, n = e.length; t < n; t++) {
            var a = e.charCodeAt(t).toString(16);
            1 === a.length && (a = "0" + a), o.push(a)
        }
        return o.join("")
    }

    function detectIE() {
        try {
            var e = window.navigator.userAgent,
                o = e.indexOf("MSIE ");
            if (o > 0) return parseInt(e.substring(o + 5, e.indexOf(".", o)), 10);
            if (e.indexOf("Trident/") > 0) {
                var t = e.indexOf("rv:");
                return parseInt(e.substring(t + 3, e.indexOf(".", t)), 10)
            }
            var n = e.indexOf("Edge/");
            if (n > 0) return parseInt(e.substring(n + 5, e.indexOf(".", n)), 10)
        } catch (e) {
            console.log(e.stack)
        }
        return !1
    }
    Cookies._document = document, Cookies._navigator = navigator, Cookies.defaults = {
        path: "/"
    }, Cookies.get = function(e) {
        return Cookies._cachedDocumentCookie !== Cookies._document.cookie && Cookies._renewCache(), Cookies._cache[e]
    }, Cookies.getSA = function() {
        var e = [];
        for (var o in Cookies._cache) o.includes("sa-camp-") && Cookies._cache[o].includes("campaign_id") ? e.push(o) : "sa-user-id" !== o && "sa-user-id-v2" !== o || e.unshift(o);
        return e
    }, Cookies.set = function(e, o, t) {
        return (t = Cookies._getExtendedOptions(t)).expires = Cookies._getExpiresDate(void 0 === o ? -1 : t.expires), Cookies._document.cookie = Cookies._generateCookieString(e, o, t), Cookies._cache[e] = o, Cookies
    }, Cookies.expire = function(e, o) {
        Cookies.set(e, void 0, o), Cookies._cache.delete(e)
    }, Cookies.expireCampaignCookies = function(e) {
        Cookies._cachedDocumentCookie !== Cookies._document.cookie && Cookies._renewCache();
        var o = 0;
        for (var t in Cookies._cache) t.includes("sa-camp-") && Cookies._cache[t].includes("campaign_id") && o++, o > e && Cookies.expire(t)
    }, Cookies._getExtendedOptions = function(e) {
        return {
            path: e && e.path || Cookies.defaults.path,
            domain: e && e.domain || Cookies.defaults.domain,
            expires: e && e.expires || Cookies.defaults.expires,
            secure: e && void 0 !== e.secure ? e.secure : Cookies.defaults.secure
        }
    }, Cookies._isValidDate = function(e) {
        return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
    }, Cookies._getExpiresDate = function(e, o) {
        switch (o = o || new Date, typeof e) {
            case "number":
                e = new Date(o.getTime() + 1e3 * e);
                break;
            case "string":
                e = new Date(e)
        }
        if (e && !Cookies._isValidDate(e)) throw new Error("`expires` parameter cannot be converted to a valid Date instance");
        return e
    }, Cookies._generateCookieString = function(e, o, t) {
        var n = (e = (e = e.replace(/[^#$&+\^`|]/g, encodeURIComponent)).replace(/\(/g, "%28").replace(/\)/g, "%29")) + "=" + (o = (o + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent));
        return n += (t = t || {}).path ? ";path=" + t.path : "", n += t.domain ? ";domain=" + t.domain : "", n += t.expires ? ";expires=" + t.expires.toUTCString() : "", n += t.secure ? ";secure" : ""
    }, Cookies._getCookieObjectFromString = function(e) {
        for (var o = {}, t = e ? e.split("; ") : [], n = 0; n < t.length; n++) {
            var a = Cookies._getKeyValuePairFromCookieString(t[n]);
            void 0 === o[a.key] && (o[a.key] = a.value)
        }
        return o
    }, Cookies._getKeyValuePairFromCookieString = function(e) {
        var o = e.indexOf("=");
        o = o < 0 ? e.length : o;
        try {
            return {
                key: decodeURIComponent(e.substr(0, o)),
                value: decodeURIComponent(e.substr(o + 1))
            }
        } catch (t) {
            return {
                key: decodeURIComponent(e.substr(0, o)),
                value: e.substr(o + 1)
            }
        }
    }, Cookies._renewCache = function() {
        Cookies._cache = Cookies._getCookieObjectFromString(Cookies._document.cookie), Cookies._cachedDocumentCookie = Cookies._document.cookie
    };
    var _this = void 0;

    function _slicedToArray(e, o) {
        return _arrayWithHoles(e) || _iterableToArrayLimit(e, o) || _unsupportedIterableToArray(e, o) || _nonIterableRest()
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function _unsupportedIterableToArray(e, o) {
        if (e) {
            if ("string" == typeof e) return _arrayLikeToArray(e, o);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(e, o) : void 0
        }
    }

    function _arrayLikeToArray(e, o) {
        (null == o || o > e.length) && (o = e.length);
        for (var t = 0, n = new Array(o); t < o; t++) n[t] = e[t];
        return n
    }

    function _iterableToArrayLimit(e, o) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var t = [],
                n = !0,
                a = !1,
                r = void 0;
            try {
                for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (t.push(i.value), !o || t.length !== o); n = !0);
            } catch (e) {
                a = !0, r = e
            } finally {
                try {
                    n || null == s.return || s.return()
                } finally {
                    if (a) throw r
                }
            }
            return t
        }
    }

    function _arrayWithHoles(e) {
        if (Array.isArray(e)) return e
    }
    try {
        var sa_url = "https://srv.stackadapt.com",
            sync_pixel_map = [];
        is_dev && (sa_url = "http://127.0.0.1");
        var sa_params = w.saq,
            bus = Array.prototype.slice,
            landing_url = currentLandingURL()[0],
            blacklisted_partners = {};
        if ("" != campCookieName) try {
            Cookies.expireCampaignCookies(15), setCampaignCookie(), expireCampaignLocalStorage(), setCampaignLocalStorage()
        } catch (e) {}
        if ("" != userIdCookieValue && Cookies.get("sa-user-id") != userIdCookieValue) try {
            setUserIdCookie(), setUserIdCookieV2(), setUserIdsLocalStorage()
        } catch (e) {}
        disable_sync || loadSyncPixelHelper(blacklisted_partners), sa_params.callMethod = function(e) {
            var o = bus.call(arguments);
            if (1 === o.length && "undefined" != typeof i && i.isArray(o[0]) && (o = o[0]), "conv" != (e = o.shift()) && "ts" != e) switch (e) {
                case "rt":
                    return loadRt.apply(this, o);
                case "drt":
                    return loadDrt.apply(this, o);
                case "lal":
                    return loadLal.apply(this, o);
                default:
                    console.log("unknown function")
            } else {
                var t = detectIE();
                if (!1 === t || t > 11) try {
                    var n = new Promise(function(e) {
                            return setTimeout(e, 500)
                        }),
                        a = Promise.all([getCSSValue(), getImageValue()]).then(function(e) {
                            var t = _slicedToArray(e, 2),
                                n = t[0],
                                a = t[1];
                            o.length > 1 ? (o[1].css_value = n, o[1].image_value = a) : o.push({
                                css_value: n,
                                image_value: a
                            })
                        }).catch(function(e) {
                            console.log(e.stack)
                        });
                    Promise.race([n, a]).then(function() {
                        switch (e) {
                            case "conv":
                                return loadConv.apply(_this, o);
                            case "ts":
                                return loadTs.apply(_this, o);
                            default:
                                console.log("unknown function")
                        }
                    })
                } catch (t) {
                    switch (e) {
                        case "conv":
                            return loadConv.apply(this, o);
                        case "ts":
                            return loadTs.apply(this, o);
                        default:
                            console.log("unknown function")
                    }
                    console.log(t.stack)
                } else switch (e) {
                    case "conv":
                        return loadConv.apply(this, o);
                    case "ts":
                        return loadTs.apply(this, o);
                    default:
                        console.log("unknown function")
                }
            }
        };
        for (var x = sa_params.queue.slice(), y = 0, z = x.length; y < z; y++) sa_params.callMethod.apply(sa_params, x[y])
    } catch (e) {
        console.log(e.stack)
    }
})(window, document, location, history);