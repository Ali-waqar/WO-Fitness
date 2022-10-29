/** 
 * onetrust-banner-sdk
 * v6.21.0
 * by OneTrust LLC
 * Copyright 2021 
 */
! function() {
    "use strict";
    var o = function(e, t) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            })(e, t)
    };
    var v, e, r = function() {
        return (r = Object.assign || function(e) {
            for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };

    function a(s, i, l, a) {
        return new(l = l || Promise)(function(e, t) {
            function o(e) {
                try {
                    r(a.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function n(e) {
                try {
                    r(a.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function r(t) {
                t.done ? e(t.value) : new l(function(e) {
                    e(t.value)
                }).then(o, n)
            }
            r((a = a.apply(s, i || [])).next())
        })
    }

    function u(o, n) {
        var r, s, i, e, l = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }), e;

        function t(t) {
            return function(e) {
                return function(t) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; l;) try {
                        if (r = 1, s && (i = 2 & t[0] ? s.return : t[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, t[1])).done) return i;
                        switch (s = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                            case 0:
                            case 1:
                                i = t;
                                break;
                            case 4:
                                return l.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                l.label++, s = t[1], t = [0];
                                continue;
                            case 7:
                                t = l.ops.pop(), l.trys.pop();
                                continue;
                            default:
                                if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    l = 0;
                                    continue
                                }
                                if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                    l.label = t[1];
                                    break
                                }
                                if (6 === t[0] && l.label < i[1]) {
                                    l.label = i[1], i = t;
                                    break
                                }
                                if (i && l.label < i[2]) {
                                    l.label = i[2], l.ops.push(t);
                                    break
                                }
                                i[2] && l.ops.pop(), l.trys.pop();
                                continue
                        }
                        t = n.call(o, l)
                    } catch (e) {
                        t = [6, e], s = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }([t, e])
            }
        }
    }

    function g() {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
        var n = Array(e),
            r = 0;
        for (t = 0; t < o; t++)
            for (var s = arguments[t], i = 0, l = s.length; i < l; i++, r++) n[r] = s[i];
        return n
    }(e = v = v || {})[e.ACTIVE = 0] = "ACTIVE", e[e.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE", e[e.EXPIRED = 2] = "EXPIRED", e[e.NO_CONSENT = 3] = "NO_CONSENT", e[e.OPT_OUT = 4] = "OPT_OUT", e[e.PENDING = 5] = "PENDING", e[e.WITHDRAWN = 6] = "WITHDRAWN";
    var t = setTimeout;

    function c(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function n() {}

    function s(e) {
        if (!(this instanceof s)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], C(e, this)
    }

    function i(o, n) {
        for (; 3 === o._state;) o = o._value;
        0 !== o._state ? (o._handled = !0, s._immediateFn(function() {
            var e = 1 === o._state ? n.onFulfilled : n.onRejected;
            if (null !== e) {
                var t;
                try {
                    t = e(o._value)
                } catch (e) {
                    return void d(n.promise, e)
                }
                l(n.promise, t)
            } else(1 === o._state ? l : d)(n.promise, o._value)
        })) : o._deferreds.push(n)
    }

    function l(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var o = e.then;
                if (e instanceof s) return t._state = 3, t._value = e, void p(t);
                if ("function" == typeof o) return void C((n = o, r = e, function() {
                    n.apply(r, arguments)
                }), t)
            }
            t._state = 1, t._value = e, p(t)
        } catch (e) {
            d(t, e)
        }
        var n, r
    }

    function d(e, t) {
        e._state = 2, e._value = t, p(e)
    }

    function p(e) {
        2 === e._state && 0 === e._deferreds.length && s._immediateFn(function() {
            e._handled || s._unhandledRejectionFn(e._value)
        });
        for (var t = 0, o = e._deferreds.length; t < o; t++) i(e, e._deferreds[t]);
        e._deferreds = null
    }

    function h(e, t, o) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = o
    }

    function C(e, t) {
        var o = !1;
        try {
            e(function(e) {
                o || (o = !0, l(t, e))
            }, function(e) {
                o || (o = !0, d(t, e))
            })
        } catch (e) {
            if (o) return;
            o = !0, d(t, e)
        }
    }

    function y() {}
    s.prototype.catch = function(e) {
        return this.then(null, e)
    }, s.prototype.then = function(e, t) {
        var o = new this.constructor(n);
        return i(this, new h(e, t, o)), o
    }, s.prototype.finally = function(t) {
        var o = this.constructor;
        return this.then(function(e) {
            return o.resolve(t()).then(function() {
                return e
            })
        }, function(e) {
            return o.resolve(t()).then(function() {
                return o.reject(e)
            })
        })
    }, s.all = function(t) {
        return new s(function(n, r) {
            if (!c(t)) return r(new TypeError("Promise.all accepts an array"));
            var s = Array.prototype.slice.call(t);
            if (0 === s.length) return n([]);
            var i = s.length;

            function l(t, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var o = e.then;
                        if ("function" == typeof o) return void o.call(e, function(e) {
                            l(t, e)
                        }, r)
                    }
                    s[t] = e, 0 == --i && n(s)
                } catch (e) {
                    r(e)
                }
            }
            for (var e = 0; e < s.length; e++) l(e, s[e])
        })
    }, s.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === s ? t : new s(function(e) {
            e(t)
        })
    }, s.reject = function(o) {
        return new s(function(e, t) {
            t(o)
        })
    }, s.race = function(r) {
        return new s(function(e, t) {
            if (!c(r)) return t(new TypeError("Promise.race accepts an array"));
            for (var o = 0, n = r.length; o < n; o++) s.resolve(r[o]).then(e, t)
        })
    }, s._immediateFn = "function" == typeof setImmediate ? function(e) {
        setImmediate(e)
    } : function(e) {
        t(e, 0)
    }, s._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var f, k, b, m, P, A, w, T, S, _, I, L, B, E, K, x, V, G, O, N, H, D, F, R, q, M, j, U, z, W, J, X, Y, $, Q, Z, ee, te, oe, ne, re, se, ie, le, ae, ce, de, pe, ue, he, ge, Ce, ye, fe = new(y.prototype.initPolyfill = function() {
        this.initArrayIncludesPolyfill(), this.initObjectAssignPolyfill(), this.initArrayFillPolyfill(), this.initClosestPolyfill(), this.initIncludesPolyfill(), this.initEndsWithPoly(), this.initCustomEventPolyfill(), this.promisesPolyfil()
    }, y.prototype.initArrayIncludesPolyfill = function() {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e) {
                for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
                var n = Object(this),
                    r = parseInt(n.length, 10) || 0;
                if (0 === r) return !1;
                var s, i, l = t[1] || 0;
                for (0 <= l ? s = l : (s = r + l) < 0 && (s = 0); s < r;) {
                    if (e === (i = n[s]) || e != e && i != i) return !0;
                    s++
                }
                return !1
            },
            writable: !0,
            configurable: !0
        })
    }, y.prototype.initEndsWithPoly = function() {
        String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
            value: function(e, t) {
                return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
            },
            writable: !0,
            configurable: !0
        })
    }, y.prototype.initClosestPolyfill = function() {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || Object.defineProperty(Element.prototype, "closest", {
            value: function(e) {
                var t = this;
                do {
                    if (t.matches(e)) return t;
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType);
                return null
            },
            writable: !0,
            configurable: !0
        })
    }, y.prototype.initIncludesPolyfill = function() {
        String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
            value: function(e, t) {
                return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
            },
            writable: !0,
            configurable: !0
        })
    }, y.prototype.initObjectAssignPolyfill = function() {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var o = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (null != r)
                        for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (o[s] = r[s])
                }
                return o
            },
            writable: !0,
            configurable: !0
        })
    }, y.prototype.initArrayFillPolyfill = function() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(e) {
                if (null == this) throw new TypeError("this is null or not defined");
                for (var t = Object(this), o = t.length >>> 0, n = arguments[1] >> 0, r = n < 0 ? Math.max(o + n, 0) : Math.min(n, o), s = arguments[2], i = void 0 === s ? o : s >> 0, l = i < 0 ? Math.max(o + i, 0) : Math.min(i, o); r < l;) t[r] = e, r++;
                return t
            }
        })
    }, y.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent) return !1;

        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }, y.prototype.insertViewPortTag = function() {
        var e = document.querySelector('meta[name="viewport"]'),
            t = document.createElement("meta");
        t.name = "viewport", t.content = "width=device-width, initial-scale=1", e || document.head.appendChild(t)
    }, y.prototype.promisesPolyfil = function() {
        "undefined" == typeof Promise && (window.Promise = s)
    }, y);
    (k = f = f || {})[k.Unknown = 0] = "Unknown", k[k.BannerCloseButton = 1] = "BannerCloseButton", k[k.ConfirmChoiceButton = 2] = "ConfirmChoiceButton", k[k.AcceptAll = 3] = "AcceptAll", k[k.RejectAll = 4] = "RejectAll", k[k.BannerSaveSettings = 5] = "BannerSaveSettings", (m = b = b || {})[m.Purpose = 1] = "Purpose", m[m.SpecialFeature = 2] = "SpecialFeature", (A = P = P || {}).Legal = "legal", A.UserFriendly = "user_friendly", (T = w = w || {}).Top = "top", T.Bottom = "bottom", (_ = S = S || {})[_.Banner = 0] = "Banner", _[_.PrefCenterHome = 1] = "PrefCenterHome", _[_.VendorList = 2] = "VendorList", _[_.CookieList = 3] = "CookieList", (L = I = I || {})[L.RightArrow = 39] = "RightArrow", L[L.LeftArrow = 37] = "LeftArrow", (E = B = B || {}).AfterTitle = "AfterTitle", E.AfterDescription = "AfterDescription", E.AfterDPD = "AfterDPD", (x = K = K || {}).PlusMinus = "Plusminus", x.Caret = "Caret", x.NoAccordion = "NoAccordion", (G = V = V || {}).Consent = "Consent", G.LI = "LI", G.AddtlConsent = "AddtlConsent", (N = O = O || {}).Iab1Pub = "eupubconsent", N.Iab2Pub = "eupubconsent-v2", N.Iab1Eu = "euconsent", N.Iab2Eu = "euconsent-v2", (D = H = H || {})[D.Disabled = 0] = "Disabled", D[D.Consent = 1] = "Consent", D[D.LegInt = 2] = "LegInt", (R = F = F || {})[R["Banner - Allow All"] = 1] = "Banner - Allow All", R[R["Banner - Reject All"] = 2] = "Banner - Reject All", R[R["Banner - Close"] = 3] = "Banner - Close", R[R["Preference Center - Allow All"] = 4] = "Preference Center - Allow All", R[R["Preference Center - Reject All"] = 5] = "Preference Center - Reject All", R[R["Preference Center - Confirm"] = 6] = "Preference Center - Confirm", (M = q = q || {}).Active = "1", M.InActive = "0", (U = j = j || {}).Host = "Host", U.GenVendor = "GenVen", (W = z = z || {})[W.Host = 1] = "Host", W[W.GenVen = 2] = "GenVen", W[W.HostAndGenVen = 3] = "HostAndGenVen", (X = J = J || {})[X.minDays = 1] = "minDays", X[X.maxDays = 30] = "maxDays", X[X.maxYear = 31536e3] = "maxYear", X[X.maxSecToDays = 86400] = "maxSecToDays", ($ = Y = Y || {})[$.RTL = 0] = "RTL", $[$.LTR = 1] = "LTR", (Z = Q = Q || {})[Z.GoogleVendor = 1] = "GoogleVendor", Z[Z.GeneralVendor = 2] = "GeneralVendor", (te = ee = ee || {})[te.Days = 1] = "Days", te[te.Weeks = 7] = "Weeks", te[te.Months = 30] = "Months", te[te.Years = 365] = "Years", (ne = oe = oe || {}).Checkbox = "Checkbox", ne.Toggle = "Toggle", (se = re = re || {}).SlideIn = "Slide_In", se.FadeIn = "Fade_In", se.RemoveAnimation = "Remove_Animation", (le = ie = ie || {}).Link = "Link", le.Icon = "Icon", (ce = ae = ae || {}).consent = "consent", ce.set = "set", (pe = de = de || {}).update = "update", pe.default = "default", pe.ads_data_redaction = "ads_data_redaction", (he = ue = ue || {}).analytics_storage = "analytics_storage", he.ad_storage = "ad_storage", he.region = "region", he.wait_for_update = "wait_for_update", (Ce = ge = ge || {}).granted = "granted", Ce.denied = "denied";
    var ke = "AwaitingReconsent",
        ve = "consentId",
        be = "geolocation",
        me = "interactionCount",
        Pe = "isIABGlobal",
        Ae = "NotLandingPage",
        Te = "isGpcEnabled",
        Se = {
            ADDITIONAL_CONSENT_STRING: "OTAdditionalConsentString",
            ALERT_BOX_CLOSED: "OptanonAlertBoxClosed",
            OPTANON_CONSENT: "OptanonConsent",
            EU_PUB_CONSENT: "eupubconsent-v2",
            EU_CONSENT: "euconsent-v2",
            SELECTED_VARIANT: "OTVariant",
            OT_PREVIEW: "otpreview"
        },
        _e = "CONFIRMED",
        Ie = "OPT_OUT",
        Le = "NO_CHOICE",
        we = "NOTGIVEN",
        Be = "always active",
        Ee = "active",
        xe = "inactive landingpage",
        Ve = "inactive",
        Ge = "dnt",
        Oe = "LOCAL",
        Ne = "TEST",
        He = "LOCAL_TEST",
        De = "data-language",
        Fe = "otCookieSettingsButton.json",
        Re = "otCookieSettingsButtonRtl.json",
        qe = "otCenterRounded",
        Me = "otFlat",
        je = "otFloatingRoundedCorner",
        Ue = "otFloatingFlat",
        ze = "otFloatingRoundedIcon",
        Ke = "otFloatingRounded",
        We = "otChoicesBanner",
        Je = "otNoBanner",
        Xe = "otPcCenter",
        Ye = "otPcList",
        $e = "otPcPanel",
        Qe = "otPcPopup",
        Ze = "otPcTab",
        et = "hidebanner",
        tt = ((ye = {})[ee.Days] = "PCenterVendorListLifespanDay", ye[ee.Weeks] = "LfSpnWk", ye[ee.Months] = "PCenterVendorListLifespanMonth", ye[ee.Years] = "LfSpnYr", ye),
        ot = new function() {
            this.otSDKVersion = "6.21.0", this.isAMP = !1, this.ampData = {}, this.otCookieData = window.OneTrust && window.OneTrust.otCookieData || [], this.syncRequired = !1, this.isIabSynced = !1, this.grpsSynced = [], this.syncedValidGrp = !1, this.groupsConsent = [], this.hostsConsent = [], this.genVendorsConsent = {}, this.vendors = {
                list: [],
                searchParam: "",
                vendorTemplate: null,
                selectedVendors: [],
                selectedPurpose: [],
                selectedLegInt: [],
                selectedLegIntVendors: [],
                selectedSpecialFeatures: []
            }, this.oneTrustIABConsent = {
                purpose: [],
                legimateInterest: [],
                features: [],
                specialFeatures: [],
                specialPurposes: [],
                vendors: [],
                legIntVendors: [],
                vendorList: null,
                IABCookieValue: ""
            }, this.addtlVendors = {
                vendorConsent: [],
                vendorSelected: {}
            }, this.addtlConsentVersion = "1~", this.isAddtlConsent = !1, this.currentGlobalFilteredList = [], this.filterByIABCategories = [], this.filterByCategories = [], this.hosts = {
                hostTemplate: null,
                hostCookieTemplate: null
            }, this.generalVendors = {
                gvTemplate: null,
                gvCookieTemplate: null
            }, this.oneTrustAlwaysActiveHosts = [], this.alwaysActiveGenVendors = [], this.softOptInGenVendors = [], this.optInGenVendors = [], this.optanonHostList = [], this.srcExecGrps = [], this.htmlExecGrps = [], this.srcExecGrpsTemp = [], this.htmlExecGrpsTemp = [], this.isPCVisible = !1, this.dataGroupState = [], this.userLocation = {
                country: "",
                state: ""
            }, this.vendorsSetting = {}, this.dsParams = {}, this.isV2Stub = !1, this.fireOnetrustGrp = !1, this.showGeneralVendors = !1, this.genVenOptOutEnabled = !1, this.bAsset = {}, this.pcAsset = {}, this.csBtnAsset = {}, this.cStyles = {}, this.vendorDomInit = !1, this.genVendorDomInit = !1, this.syncNtfyContent = {}, this.ntfyRequired = !1, this.skipAddingHTML = !1, this.bnrAnimationInProg = !1, this.isPreview = !1, this.geoFromUrl = "", this.hideBanner = !1, this.setAttributePolyfillIsActive = !1
        },
        nt = new function() {},
        rt = "BRANCH",
        st = "COOKIE",
        it = "IAB2_FEATURE",
        lt = "IAB2_PURPOSE",
        at = "IAB2_SPL_FEATURE",
        ct = "IAB2_SPL_PURPOSE",
        dt = "IAB2_STACK",
        pt = ["IAB2_PURPOSE", "IAB2_STACK", "IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2_SPL_FEATURE"],
        ut = ["COOKIE", "BRANCH", "IAB2_STACK"],
        ht = ["IAB2_PURPOSE", "IAB2_SPL_FEATURE"],
        gt = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE"],
        Ct = ["IAB2_PURPOSE", "IAB2_SPL_PURPOSE", "IAB2_FEATURE", "IAB2_SPL_FEATURE"],
        yt = (ft.prototype.setRegionRule = function(e) {
            this.rule = e
        }, ft.prototype.getRegionRule = function() {
            return this.rule
        }, ft.prototype.getRegionRuleType = function() {
            return this.multiVariantTestingEnabled && this.selectedVariant ? this.selectedVariant.TemplateType : this.rule.Type
        }, ft.prototype.initVariables = function() {
            this.consentableGrps = [], this.consentableIabGrps = [], this.iabGrps = [], this.iabGrpIdMap = {}, this.domainGrps = {}, this.iabGroups = {
                purposes: {},
                legIntPurposes: {},
                specialPurposes: {},
                features: {},
                specialFeatures: {}
            }
        }, ft.prototype.init = function(e) {
            this.getGPCSignal(), this.initVariables();
            var t = e.DomainData;
            this.setPublicDomainData(JSON.parse(JSON.stringify(t))), this.domainDataMapper(t), this.commonDataMapper(e.CommonData), vt.NtfyConfig = e.NtfyConfig || {}, this.setBannerName(), this.setPcName(), this.populateGPCSignal(), vt.gCEnable && this.initGCM()
        }, ft.prototype.getGPCSignal = function() {
            this.gpcEnabled = !0 === navigator.globalPrivacyControl
        }, ft.prototype.isValidConsentNoticeGroup = function(e, t) {
            if (!e.ShowInPopup) return !1;
            var o = e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length,
                n = !1,
                r = !1,
                s = !1;
            if (e && !e.Parent) {
                e.SubGroups.length && (n = e.SubGroups.some(function(e) {
                    return e.GroupName && e.ShowInPopup && e.FirstPartyCookies.length
                }), r = e.SubGroups.some(function(e) {
                    return e.GroupName && e.ShowInPopup && (e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length)
                }), !t || e.FirstPartyCookies.length && e.Hosts.length || (s = !e.SubGroups.some(function(e) {
                    return -1 === pt.indexOf(e.Type)
                })));
                var i = e.SubGroups.some(function(e) {
                    return -1 < pt.indexOf(e.Type)
                });
                (-1 < pt.indexOf(e.Type) || i) && (e.ShowVendorList = !0), (e.Hosts.length || r || n) && (e.ShowHostList = !0)
            }
            return o || -1 < pt.indexOf(e.Type) || n || r || s
        }, ft.prototype.extractGroupIdForIabGroup = function(e) {
            return -1 < e.indexOf("ISPV2_") ? e = e.replace("ISPV2_", "") : -1 < e.indexOf("IABV2_") ? e = e.replace("IABV2_", "") : -1 < e.indexOf("IFEV2_") ? e = e.replace("IFEV2_", "") : -1 < e.indexOf("ISFV2_") && (e = e.replace("ISFV2_", "")), e
        }, ft.prototype.populateGroups = function(e, r) {
            var s = this,
                i = {},
                l = [];
            e.forEach(function(e) {
                var t = e.CustomGroupId;
                if (void 0 !== e.HasConsentOptOut && e.IsIabPurpose || (e.HasConsentOptOut = !0), !(!r.IsIabEnabled && -1 < pt.indexOf(e.Type) || "IAB2" === s.iabType && (e.Type === lt || e.Type === dt) && !e.HasConsentOptOut && !e.HasLegIntOptOut || e.Type === at && !e.HasConsentOptOut) && (t !== kt.purposeOneGrpId || e.ShowInPopup || (s.purposeOneTreatment = !0), s.grpContainLegalOptOut = e.HasLegIntOptOut || s.grpContainLegalOptOut, e.SubGroups = [], e.Parent ? l.push(e) : i[t] = e, "IAB2" === s.iabType && -1 < pt.indexOf(e.Type))) {
                    var o = s.extractGroupIdForIabGroup(t);
                    s.iabGrpIdMap[t] = o, e.IabGrpId = o;
                    var n = {
                        description: e.GroupDescription,
                        descriptionLegal: e.DescriptionLegal,
                        id: Number(o),
                        name: e.GroupName
                    };
                    switch (e.Type) {
                        case lt:
                            s.iabGroups.purposes[o] = n;
                            break;
                        case ct:
                            s.iabGroups.specialPurposes[o] = n;
                            break;
                        case it:
                            s.iabGroups.features[o] = n;
                            break;
                        case at:
                            s.iabGroups.specialFeatures[o] = n
                    }
                }
            }), l.forEach(function(e) {
                i[e.Parent] && e.ShowInPopup && (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || -1 < pt.indexOf(e.Type)) && i[e.Parent].SubGroups.push(e)
            });
            var t = [];
            return Object.keys(i).forEach(function(e) {
                s.isValidConsentNoticeGroup(i[e], r.IsIabEnabled) && (i[e].SubGroups.sort(function(e, t) {
                    return e.Order - t.Order
                }), t.push(i[e]))
            }), this.initGrpVar(t), t.sort(function(e, t) {
                return e.Order - t.Order
            })
        }, ft.prototype.initGrpVar = function(e) {
            var o = this,
                n = !0,
                r = !0;
            e.forEach(function(e) {
                g([e], e.SubGroups).forEach(function(e) {
                    var t;
                    e.Type !== st && e.Type !== lt && e.Type !== at || (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId), -1 < ut.indexOf(e.Type) && o.consentableGrps.push(e), -1 < ht.indexOf(e.Type) && o.consentableIabGrps.push(e), -1 === ut.indexOf(e.Type) && o.iabGrps.push(e), o.gpcEnabled && e.IsGpcEnabled && (e.Status = Ve), (t = o.DNTEnabled && e.IsDntEnabled ? Ge : e.Status.toLowerCase()) !== Ee && t !== xe && t !== Ge || (n = !1), t !== xe && t !== Be && (r = !1), o.gpcForAGrpEnabled || (o.gpcForAGrpEnabled = e.IsGpcEnabled)
                })
            }), this.isOptInMode = n, this.isSoftOptInMode = r
        }, ft.prototype.domainDataMapper = function(e) {
            var t = {
                cctId: e.cctId,
                MainText: e.MainText,
                MainInfoText: e.MainInfoText,
                AboutText: e.AboutText,
                AboutCookiesText: e.AboutCookiesText,
                ConfirmText: e.ConfirmText,
                AllowAllText: e.PreferenceCenterConfirmText,
                ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
                CookiesUsedText: e.CookiesUsedText,
                AboutLink: e.AboutLink,
                ActiveText: e.ActiveText,
                AlwaysActiveText: e.AlwaysActiveText,
                AlertNoticeText: e.AlertNoticeText,
                AlertCloseText: e.AlertCloseText,
                AlertMoreInfoText: e.AlertMoreInfoText,
                AlertAllowCookiesText: e.AlertAllowCookiesText,
                AdvancedAnalyticsCategory: e.AdvancedAnalyticsCategory || "",
                CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
                BannerTitle: e.BannerTitle,
                BannerFocus: e.BannerFocus,
                BannerRelativeFontSizesToggle: e.BannerRelativeFontSizesToggle,
                ForceConsent: e.ForceConsent,
                LastReconsentDate: e.LastReconsentDate,
                InactiveText: e.InactiveText,
                CookiesText: e.CookiesText || "Cookies",
                CategoriesText: e.CategoriesText || "Categories",
                CookieSettingButtonText: e.CookieSettingButtonText,
                IsLifespanEnabled: e.IsLifespanEnabled,
                LifespanText: e.LifespanText || "Lifespan",
                Groups: this.populateGroups(e.Groups, e),
                Language: e.Language,
                showBannerCloseButton: e.showBannerCloseButton,
                ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
                FooterDescriptionText: e.FooterDescriptionText,
                CustomJs: e.CustomJs,
                LifespanTypeText: e.LifespanTypeText || "Session",
                LifespanDurationText: e.LifespanDurationText || "days",
                CloseText: e.CloseText,
                BannerCloseButtonText: e.BannerCloseButtonText,
                HideToolbarCookieList: e.HideToolbarCookieList,
                AlertLayout: e.AlertLayout,
                AddLinksToCookiepedia: e.AddLinksToCookiepedia,
                ShowAlertNotice: e.ShowAlertNotice,
                IsIabEnabled: e.IsIabEnabled,
                IabType: e.IabType,
                BannerPosition: e.BannerPosition,
                PreferenceCenterPosition: e.PreferenceCenterPosition,
                ReconsentFrequencyDays: e.ReconsentFrequencyDays,
                VendorLevelOptOut: e.IsIabEnabled,
                ConsentModel: {
                    Name: e.ConsentModel
                },
                VendorConsentModel: e.VendorConsentModel,
                IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
                IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
                ScrollCloseBanner: e.ScrollCloseBanner,
                ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
                OnClickCloseBanner: e.OnClickCloseBanner,
                OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
                NextPageCloseBanner: e.NextPageCloseBanner,
                NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
                VendorListText: e.VendorListText,
                ThirdPartyCookieListText: e.ThirdPartyCookieListText,
                CookieListDescription: e.CookieListDescription,
                CookieListTitle: e.CookieListTitle,
                NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
                PCCookiePolicyLinkScreenReader: e.PCCookiePolicyLinkScreenReader,
                PCOpensCookiesDetailsAlert: e.PCOpensCookiesDetailsAlert,
                PCOpensVendorDetailsAlert: e.PCOpensVendorDetailsAlert,
                Flat: e.Flat,
                FloatingFlat: e.FloatingFlat,
                FloatingRoundedCorner: e.FloatingRoundedCorner,
                FloatingRoundedIcon: e.FloatingRoundedIcon,
                FloatingRounded: e.FloatingRounded,
                CenterRounded: e.CenterRounded,
                Center: e.Center,
                Panel: e.Panel,
                Popup: e.Popup,
                List: e.List,
                Tab: e.Tab,
                BannerPurposeTitle: e.BannerPurposeTitle,
                BannerPurposeDescription: e.BannerPurposeDescription,
                BannerFeatureTitle: e.BannerFeatureTitle,
                BannerFeatureDescription: e.BannerFeatureDescription,
                BannerInformationTitle: e.BannerInformationTitle,
                BannerInformationDescription: e.BannerInformationDescription,
                BannerIABPartnersLink: e.BannerIABPartnersLink,
                BannerShowRejectAllButton: e.BannerShowRejectAllButton,
                BannerRejectAllButtonText: e.BannerRejectAllButtonText,
                PCenterShowRejectAllButton: e.PCenterShowRejectAllButton,
                PCenterRejectAllButtonText: e.PCenterRejectAllButtonText,
                PCCloseButtonType: e.PCCloseButtonType,
                PCContinueText: e.PCContinueText,
                BCloseButtonType: e.BCloseButtonType,
                BContinueText: e.BContinueText,
                BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
                BannerDPDTitle: e.BannerDPDTitle || "",
                BannerDPDDescription: e.BannerDPDDescription || [],
                BannerDPDDescriptionFormat: e.BannerDPDDescriptionFormat || "",
                PCFirstPartyCookieListText: e.PCFirstPartyCookieListText || "First Party Cookies",
                PCViewCookiesText: e.PCViewCookiesText,
                PCenterBackText: e.PCenterBackText,
                PCenterVendorsListText: e.PCenterVendorsListText,
                PCenterVendorListDescText: e.PCenterVendorListDescText,
                PCenterViewPrivacyPolicyText: e.PCenterViewPrivacyPolicyText,
                PCenterClearFiltersText: e.PCenterClearFiltersText,
                PCenterApplyFiltersText: e.PCenterApplyFiltersText,
                PCenterEnableAccordion: e.PCenterEnableAccordion,
                PCLogoAria: e.PCLogoScreenReader,
                PCGrpDescType: e.PCGrpDescType,
                PCGrpDescLinkPosition: e.PCGrpDescLinkPosition,
                PCVendorFullLegalText: e.PCVendorFullLegalText,
                PCAccordionStyle: K.Caret,
                PCenterAllowAllConsentText: e.PCenterAllowAllConsentText,
                PCenterCookiesListText: e.PCenterCookiesListText,
                PCenterCancelFiltersText: e.PCenterCancelFiltersText,
                PCenterSelectAllVendorsText: e.PCenterSelectAllVendorsText,
                PCenterFilterText: e.PCenterFilterText,
                Vendors: e.Vendors,
                OverriddenVendors: e.OverriddenVendors,
                Publisher: e.publisher,
                BannerAdditionalDescription: e.BannerAdditionalDescription,
                BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
                PCShowConsentLabels: !(!e.Tab || !e.PCTemplateUpgrade) && e.PCShowConsentLabels,
                PCActiveText: e.PCActiveText,
                PCShowPersistentCookiesHoverButton: e.PCShowPersistentCookiesHoverButton || !1,
                PCInactiveText: e.PCInactiveText,
                UseGoogleVendors: !!e.PCTemplateUpgrade && this.rule.UseGoogleVendors,
                OverridenGoogleVendors: e.OverridenGoogleVendors,
                PCGoogleVendorsText: e.PCGoogleVendorsText,
                PCIABVendorsText: e.PCIABVendorsText,
                PCTemplateUpgrade: e.PCTemplateUpgrade,
                GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
                GlobalRestrictions: e.GlobalRestrictions,
                GeneralVendors: e.GeneralVendors,
                GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
                PCenterGeneralVendorsText: e.PCenterGeneralVendorsText,
                GenVenOptOut: e.PCenterAllowVendorOptout,
                GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
                BannerNonIABVendorListText: e.BannerNonIABVendorListText,
                PCenterVendorListLifespan: e.PCenterVendorListLifespan,
                PCenterVendorListDisclosure: e.PCenterVendorListDisclosure,
                PCenterVendorListNonCookieUsage: e.PCenterVendorListNonCookieUsage,
                PCenterVendorListStorageIdentifier: e.PCenterVendorListStorageIdentifier,
                PCenterVendorListStorageType: e.PCenterVendorListStorageType,
                PCenterVendorListStoragePurposes: e.PCenterVendorListStoragePurposes,
                PCenterVendorListStorageDomain: e.PCenterVendorListStorageDomain,
                PCenterVendorListLifespanDay: e.PCenterVendorListLifespanDay,
                PCenterVendorListLifespanDays: e.PCenterVendorListLifespanDays,
                PCenterVendorListLifespanMonth: e.PCenterVendorListLifespanMonth,
                PCenterVendorListLifespanMonths: e.PCenterVendorListLifespanMonths,
                LfSpnWk: e.PCLifeSpanWk,
                LfSpnWks: e.PCLifeSpanWks,
                LfSpnYr: e.PCLifeSpanYr,
                LfSpnYrs: e.PCLifeSpanYrs,
                LfSpanSecs: e.PCLifeSpanSecs,
                PCCookiePolicyText: e.PCCookiePolicyText,
                PCGVenPolicyTxt: e.PCGeneralVendorsPolicyText,
                ChoicesBanner: e.ChoicesBanner,
                NoBanner: e.NoBanner,
                BShowSaveBtn: e.BShowSaveBtn,
                BSaveBtnTxt: e.BSaveBtnText,
                firstPartyTxt: e.CookieFirstPartyText,
                thirdPartyTxt: e.CookieThirdPartyText,
                PublisherCC: e.PublisherCC,
                gCEnable: e.GCEnable,
                gCAnalyticsStorage: e.GCAnalyticsStorage,
                gCAdStorage: e.GCAdStorage,
                gCWaitTime: e.GCWaitTime,
                gCRedactEnable: e.GCRedactEnable,
                AriaOpenPreferences: e.AriaOpenPreferences,
                AriaClosePreferences: e.AriaClosePreferences,
                AriaPrivacy: e.AriaPrivacy
            };
            e.PCTemplateUpgrade && (e.Center || e.Panel) && e.PCAccordionStyle === K.PlusMinus && (t.PCAccordionStyle = e.PCAccordionStyle), t.PCenterEnableAccordion = e.PCAccordionStyle !== K.NoAccordion, this.legIntSettings = e.LegIntSettings || {}, void 0 === this.legIntSettings.PAllowLI && (this.legIntSettings.PAllowLI = !0), nt.moduleInitializer.MobileSDK || (this.pagePushedDown = e.BannerPushesDownPage), vt = r(r({}, vt), t)
        }, ft.prototype.commonDataMapper = function(e) {
            var t = {
                iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
                optanonHideAcceptButton: e.OptanonHideAcceptButton,
                optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
                optanonStyle: e.OptanonStyle,
                optanonStaticContentLocation: e.OptanonStaticContentLocation,
                bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ""),
                pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ""),
                textColor: e.TextColor,
                buttonColor: e.ButtonColor,
                buttonTextColor: e.ButtonTextColor,
                bannerMPButtonColor: e.BannerMPButtonColor,
                bannerMPButtonTextColor: e.BannerMPButtonTextColor,
                backgroundColor: e.BackgroundColor,
                bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
                BContinueColor: e.BContinueColor,
                PCContinueColor: e.PCContinueColor,
                pcTextColor: e.PcTextColor,
                pcButtonColor: e.PcButtonColor,
                pcButtonTextColor: e.PcButtonTextColor,
                pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
                pcLinksTextColor: e.PcLinksTextColor,
                bannerLinksTextColor: e.BannerLinksTextColor,
                pcEnableToggles: e.PcEnableToggles,
                pcBackgroundColor: e.PcBackgroundColor,
                pcMenuColor: e.PcMenuColor,
                pcMenuHighLightColor: e.PcMenuHighLightColor,
                legacyBannerLayout: e.LegacyBannerLayout,
                optanonLogo: e.OptanonLogo,
                oneTrustFtrLogo: e.OneTrustFooterLogo,
                optanonCookieDomain: e.OptanonCookieDomain,
                optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
                optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
                optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
                optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
                optanonShowSubGroupCookies: e.ShowSubGroupCookies,
                useRTL: e.UseRTL,
                showBannerCookieSettings: e.ShowBannerCookieSettings,
                showBannerAcceptButton: e.ShowBannerAcceptButton,
                showCookieList: e.ShowCookieList,
                allowHostOptOut: e.AllowHostOptOut,
                CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
                cookieListTitleColor: e.CookieListTitleColor,
                cookieListGroupNameColor: e.CookieListGroupNameColor,
                cookieListTableHeaderColor: e.CookieListTableHeaderColor,
                CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
                cookieListPrimaryColor: e.CookieListPrimaryColor,
                cookieListCustomCss: e.CookieListCustomCss,
                pcShowCookieHost: e.PCShowCookieHost,
                pcShowCookieDuration: e.PCShowCookieDuration,
                pcShowCookieType: e.PCShowCookieType,
                pcShowCookieCategory: e.PCShowCookieCategory,
                pcShowCookieDescription: e.PCShowCookieDescription,
                ConsentIntegration: e.ConsentIntegration,
                ConsentPurposesText: e.BConsentPurposesText || "Consent Purposes",
                FeaturesText: e.BFeaturesText || "Features",
                LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
                ConsentText: e.BConsentText || "Consent",
                LegitInterestText: e.BLegitInterestText || "Legit. Interest",
                pcDialogClose: e.PCDialogClose || "dialog closed",
                pCFooterLogoUrl: e.PCFooterLogoUrl,
                SpecialFeaturesText: e.BSpecialFeaturesText || "Special Features",
                SpecialPurposesText: e.BSpecialPurposesText || "Special Purposes",
                pcCListName: e.PCCListName || "Name",
                pcCListHost: e.PCCListHost || "Host",
                pcCListDuration: e.PCCListDuration || "Duration",
                pcCListType: e.PCCListType || "Type",
                pcCListCategory: e.PCCListCategory || "Category",
                pcCListDescription: e.PCCListDescription || "Description",
                IabLegalTextUrl: e.IabLegalTextUrl,
                pcLegIntButtonColor: e.PcLegIntButtonColor,
                pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
                PCenterExpandToViewText: e.PCenterExpandToViewText,
                BCategoryContainerColor: e.BCategoryContainerColor,
                BCategoryStyleColor: e.BCategoryStyleColor,
                BLineBreakColor: e.BLineBreakColor,
                BSaveBtnColor: e.BSaveBtnColor,
                BCategoryStyle: e.BCategoryStyle,
                BAnimation: e.BAnimation
            };
            vt = r(r({}, vt), t)
        }, ft.prototype.setPublicDomainData = function(r) {
            this.pubDomainData = {
                cctId: r.cctId,
                MainText: r.MainText,
                MainInfoText: r.MainInfoText,
                AboutText: r.AboutText,
                AboutCookiesText: r.AboutCookiesText,
                ConfirmText: r.ConfirmText,
                AllowAllText: r.PreferenceCenterConfirmText,
                ManagePreferenceText: r.PreferenceCenterManagePreferencesText,
                CookiesUsedText: r.CookiesUsedText,
                AboutLink: r.AboutLink,
                ActiveText: r.ActiveText,
                AlwaysActiveText: r.AlwaysActiveText,
                AlertNoticeText: r.AlertNoticeText,
                AlertCloseText: r.AlertCloseText,
                AlertMoreInfoText: r.AlertMoreInfoText,
                AlertAllowCookiesText: r.AlertAllowCookiesText,
                CloseShouldAcceptAllCookies: r.CloseShouldAcceptAllCookies,
                BannerTitle: r.BannerTitle,
                BannerFocus: r.BannerFocus,
                BannerRelativeFontSizesToggle: r.BannerRelativeFontSizesToggle,
                ForceConsent: r.ForceConsent,
                LastReconsentDate: r.LastReconsentDate,
                InactiveText: r.InactiveText,
                CookiesText: r.CookiesText,
                CookieSettingButtonText: r.CookieSettingButtonText,
                CategoriesText: r.CategoriesText,
                IsLifespanEnabled: r.IsLifespanEnabled,
                LifespanText: r.LifespanText,
                GeneralVendors: r.GeneralVendors,
                Groups: null,
                Language: r.Language,
                showBannerCloseButton: r.showBannerCloseButton,
                ShowPreferenceCenterCloseButton: r.ShowPreferenceCenterCloseButton,
                FooterDescriptionText: r.FooterDescriptionText,
                CustomJs: r.CustomJs,
                LifespanTypeText: r.LifespanTypeText,
                LifespanDurationText: r.LifespanDurationText,
                CloseText: r.CloseText,
                BannerCloseButtonText: r.BannerCloseButtonText,
                HideToolbarCookieList: r.HideToolbarCookieList,
                AlertLayout: r.AlertLayout,
                AddLinksToCookiepedia: r.AddLinksToCookiepedia,
                ShowAlertNotice: r.ShowAlertNotice,
                IsIABEnabled: r.IsIabEnabled,
                IabType: r.IabType,
                BannerPosition: r.BannerPosition,
                PreferenceCenterPosition: r.PreferenceCenterPosition,
                VendorLevelOptOut: r.IsIabEnabled,
                ConsentModel: {
                    Name: r.ConsentModel
                },
                VendorConsentModel: r.VendorConsentModel,
                IsConsentLoggingEnabled: r.IsConsentLoggingEnabled,
                IsIabThirdPartyCookieEnabled: r.IsIabThirdPartyCookieEnabled,
                ScrollCloseBanner: r.ScrollCloseBanner,
                ScrollAcceptAllCookies: r.ScrollAcceptAllCookies,
                OnClickCloseBanner: r.OnClickCloseBanner,
                OnClickAcceptAllCookies: r.OnClickAcceptAllCookies,
                NextPageCloseBanner: r.NextPageCloseBanner,
                NextPageAcceptAllCookies: r.NextPageAcceptAllCookies,
                VendorListText: r.VendorListText,
                ThirdPartyCookieListText: r.ThirdPartyCookieListText,
                CookieListDescription: r.CookieListDescription,
                CookieListTitle: r.CookieListTitle,
                BannerPurposeTitle: r.BannerPurposeTitle,
                BannerPurposeDescription: r.BannerPurposeDescription,
                BannerFeatureTitle: r.BannerFeatureTitle,
                BannerFeatureDescription: r.BannerFeatureDescription,
                BannerInformationTitle: r.BannerInformationTitle,
                BannerInformationDescription: r.BannerInformationDescription,
                BannerIABPartnersLink: r.BannerIABPartnersLink,
                BannerShowRejectAllButton: r.BannerShowRejectAllButton,
                BannerRejectAllButtonText: r.BannerRejectAllButtonText,
                PCenterShowRejectAllButton: r.PCenterShowRejectAllButton,
                PCenterRejectAllButtonText: r.PCenterRejectAllButtonText,
                PCCloseButtonType: r.PCCloseButtonType,
                PCContinueText: r.PCContinueText,
                BCloseButtonType: r.BCloseButtonType,
                BContinueText: r.BContinueText,
                BannerSettingsButtonDisplayLink: r.BannerSettingsButtonDisplayLink,
                BannerDPDTitle: r.BannerDPDTitle || "",
                BannerDPDDescription: r.BannerDPDDescription || [],
                BannerDPDDescriptionFormat: r.BannerDPDDescriptionFormat || "",
                ConsentIntegrationData: null,
                PCFirstPartyCookieListText: r.PCFirstPartyCookieListText,
                PCViewCookiesText: r.PCViewCookiesText,
                IsBannerLoaded: !1,
                PCenterBackText: r.PCenterBackText,
                PCenterVendorsListText: r.PCenterVendorsListText,
                PCenterVendorListDescText: r.PCenterVendorListDescText,
                PCenterViewPrivacyPolicyText: r.PCenterViewPrivacyPolicyText,
                PCenterClearFiltersText: r.PCenterClearFiltersText,
                PCenterApplyFiltersText: r.PCenterApplyFiltersText,
                PCenterEnableAccordion: r.PCenterEnableAccordion,
                PCLogoAria: r.PCLogoScreenReader,
                PCGrpDescType: r.PCGrpDescType,
                PCGrpDescLinkPosition: r.PCGrpDescLinkPosition,
                PCVendorFullLegalText: r.PCVendorFullLegalText,
                PCAccordionStyle: K.Caret,
                PCenterExpandToViewText: r.PCenterExpandToViewText,
                PCenterAllowAllConsentText: r.PCenterAllowAllConsentText,
                PCenterCookiesListText: r.PCenterCookiesListText,
                PCenterCancelFiltersText: r.PCenterCancelFiltersText,
                PCenterSelectAllVendorsText: r.PCenterSelectAllVendorsText,
                PCShowPersistentCookiesHoverButton: r.PCShowPersistentCookiesHoverButton,
                PCenterFilterText: r.PCenterFilterText,
                UseGoogleVendors: !!r.PCTemplateUpgrade && this.rule.UseGoogleVendors,
                OverridenGoogleVendors: r.OverridenGoogleVendors,
                PCGoogleVendorsText: r.PCGoogleVendorsText,
                PCIABVendorsText: r.PCIABVendorsText,
                PCTemplateUpgrade: r.PCTemplateUpgrade,
                BCategoryContainerColor: r.BCategoryContainerColor,
                BCategoryStyleColor: r.BCategoryStyleColor,
                BLineBreakColor: r.BLineBreakColor,
                BSaveBtnColor: r.BSaveBtnColor,
                BCategoryStyle: r.BCategoryStyle,
                ChoicesBanner: r.ChoicesBanner,
                NoBanner: r.NoBanner,
                BShowSaveBtn: r.BShowSaveBtn,
                BSaveBtnTxt: r.BSaveBtnText,
                BAnimation: r.BAnimation,
                Domain: nt.moduleInitializer.Domain,
                PCOpensCookiesDetailsAlert: r.PCOpensCookiesDetailsAlert,
                PCOpensVendorDetailsAlert: r.PCOpensVendorDetailsAlert
            }, r.PCTemplateUpgrade && (r.Center || r.Panel) && r.PCAccordionStyle !== K.NoAccordion && (this.pubDomainData.PCAccordionStyle = r.PCAccordionStyle), this.pubDomainData.PCenterEnableAccordion = r.PCAccordionStyle !== K.NoAccordion;
            var s = [];
            r.Groups.forEach(function(e) {
                var t, o;
                if (r.IsIabEnabled || !e.IsIabPurpose) {
                    e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies));
                    var n = null === (o = e.Hosts) || void 0 === o ? void 0 : o.reduce(function(e, t) {
                        return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
                    }, []);
                    (t = e.Cookies).push.apply(t, n), s.push(e)
                }
            }), this.pubDomainData.Groups = s
        }, ft.prototype.setBannerScriptElement = function(e) {
            this.bannerScriptElement = e, this.setDomainElementAttributes()
        }, ft.prototype.setDomainElementAttributes = function() {
            this.bannerScriptElement && (this.bannerScriptElement.hasAttribute("data-document-language") && this.setUseDocumentLanguage("true" === this.bannerScriptElement.getAttribute("data-document-language")), this.bannerScriptElement.hasAttribute("data-ignore-ga") && (this.ignoreGoogleAnlyticsCall = "true" === this.bannerScriptElement.getAttribute("data-ignore-ga")), this.bannerScriptElement.hasAttribute("data-ignore-html") && (this.ignoreInjectingHtmlCss = "true" === this.bannerScriptElement.getAttribute("data-ignore-html")))
        }, ft.prototype.setUseDocumentLanguage = function(e) {
            this.useDocumentLanguage = e
        }, ft.prototype.setPcName = function() {
            vt.Center ? this.pcName = Xe : vt.Panel ? this.pcName = $e : vt.Popup ? this.pcName = Qe : vt.List ? this.pcName = Ye : vt.Tab && (this.pcName = Ze)
        }, ft.prototype.setBannerName = function() {
            vt.Flat ? this.bannerName = Me : vt.FloatingRoundedCorner ? this.bannerName = je : vt.FloatingFlat ? this.bannerName = Ue : vt.FloatingRounded ? this.bannerName = Ke : vt.FloatingRoundedIcon ? this.bannerName = ze : vt.CenterRounded ? this.bannerName = qe : vt.ChoicesBanner ? this.bannerName = We : vt.NoBanner && (this.bannerName = Je)
        }, ft.prototype.populateGPCSignal = function() {
            this.gpcForAGrpEnabled && Pt.writeCookieParam(Se.OPTANON_CONSENT, Te, this.gpcForAGrpEnabled && this.gpcEnabled ? "1" : "0")
        }, ft.prototype.initGCM = function() {
            var o = [];
            Object.keys(this.rule.States).forEach(function(t) {
                kt.rule.States[t].forEach(function(e) {
                    o.push((t + "-" + e).toUpperCase())
                })
            });
            var e = kt.rule.Countries.map(function(e) {
                return e.toUpperCase()
            });
            kt.gcmCountries = e.concat(o)
        }, ft);

    function ft() {
        var t = this;
        this.DNTEnabled = "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack, this.gpcEnabled = !1, this.gpcForAGrpEnabled = !1, this.pagePushedDown = !1, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }, this.iabType = null, this.grpContainLegalOptOut = !1, this.purposeOneTreatment = !1, this.ignoreInjectingHtmlCss = !1, this.ignoreGoogleAnlyticsCall = !1, this.mobileOnlineURL = [], this.iabGrpIdMap = {}, this.iabGrps = [], this.consentableGrps = [], this.consentableIabGrps = [], this.domainGrps = {}, this.thirdPartyiFrameLoaded = !1, this.thirdPartyiFrameResolve = null, this.thirdPartyiFramePromise = new Promise(function(e) {
            t.thirdPartyiFrameResolve = e
        }), this.isOptInMode = !1, this.isSoftOptInMode = !1, this.purposeOneGrpId = "IABV2_1"
    }
    var kt, vt = {};

    function bt(e, t, o) {
        void 0 === o && (o = !1);

        function n(e) {
            if (!e) return null;
            var t = e.trim();
            return ";" !== t.charAt(t.length - 1) && (t += ";"), t.trim()
        }
        var s = n(e.getAttribute("style")),
            i = n(t),
            r = "";
        r = o && s ? function() {
            for (var e = s.split(";").concat(i.split(";")).filter(function(e) {
                    return 0 !== e.length
                }), t = "", o = "", n = e.length - 1; 0 <= n; n--) {
                var r = e[n].substring(0, e[n].indexOf(":")).trim();
                t.indexOf(r) < 0 && (t += r, o += e[n] + ";")
            }
            return o
        }() : i, e.setAttribute("style", r)
    }

    function mt() {}
    var Pt, At = new(mt.prototype.convertKeyValueLowerCase = function(e) {
            for (var t in e) e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t.toLowerCase()] = e[t].toLowerCase(), delete e[t]);
            return e
        }, mt.prototype.arrToStr = function(e) {
            return e.toString()
        }, mt.prototype.strToArr = function(e) {
            return e ? e.split(",") : []
        }, mt.prototype.empty = function(e) {
            var t = document.getElementById(e);
            if (t)
                for (; t.hasChildNodes();) t.removeChild(t.lastChild)
        }, mt.prototype.show = function(e) {
            var t = document.getElementById(e);
            t && bt(t, "display: block;", !0)
        }, mt.prototype.remove = function(e) {
            var t = document.getElementById(e);
            t && t.parentNode && t.parentNode.removeChild(t)
        }, mt.prototype.appendTo = function(e, t) {
            var o, n = document.getElementById(e);
            n && ((o = document.createElement("div")).innerHTML = t, n.appendChild(o))
        }, mt.prototype.contains = function(e, t) {
            var o;
            for (o = 0; o < e.length; o += 1)
                if (e[o].toString().toLowerCase() === t.toString().toLowerCase()) return !0;
            return !1
        }, mt.prototype.indexOf = function(e, t) {
            var o;
            for (o = 0; o < e.length; o += 1)
                if (e[o] === t) return o;
            return -1
        }, mt.prototype.endsWith = function(e, t) {
            return -1 !== e.indexOf(t, e.length - t.length)
        }, mt.prototype.generateUUID = function() {
            var o = (new Date).getTime();
            return "undefined" != typeof performance && "function" == typeof performance.now && (o += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = (o + 16 * Math.random()) % 16 | 0;
                return o = Math.floor(o / 16), ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }, mt.prototype.getActiveIdArray = function(e) {
            return e.filter(function(e) {
                return "true" === e.split(":")[1]
            }).map(function(e) {
                return parseInt(e.split(":")[0])
            })
        }, mt.prototype.distinctArray = function(e) {
            var t = new Array;
            return e.forEach(function(e) {
                t.indexOf(e) < 0 && t.push(e)
            }), t
        }, mt.prototype.findIndex = function(e, t) {
            for (var o = -1, n = 0; n < e.length; n++)
                if (void 0 !== e[n] && t(e[n], n)) {
                    o = n;
                    break
                }
            return o
        }, mt.prototype.getURL = function(e) {
            var t = document.createElement("a");
            return t.href = e, t
        }, mt.prototype.removeURLPrefixes = function(e) {
            return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
        }, mt.prototype.removeChild = function(e) {
            if (e)
                if (e instanceof NodeList || e instanceof Array)
                    for (var t = 0; t < e.length; t++) e[t].parentElement.removeChild(e[t]);
                else e.parentElement.removeChild(e)
        }, mt.prototype.getRelativeURL = function(e, t, o) {
            if (void 0 === o && (o = !1), t) {
                var n = "./" + e.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/").replace(".json", "");
                return o ? n : n + ".js"
            }
            return e
        }, mt.prototype.setCheckedAttribute = function(e, t, o) {
            e && (t = document.querySelector(e)), t && (t.setAttribute("aria-checked", o.toString()), o ? t.setAttribute("checked", "") : t.removeAttribute("checked"), t.checked = o)
        }, mt.prototype.setDisabledAttribute = function(e, t, o) {
            e && (t = document.querySelector(e)), t && (o ? t.setAttribute("disabled", o.toString()) : t.removeAttribute("disabled"))
        }, mt.prototype.setHtmlAttributes = function(e, t) {
            for (var o in t) e.setAttribute(o, t[o]), e[o] = t[o]
        }, mt.prototype.calculateCookieLifespan = function(e) {
            if (e < 0) return vt.LifespanTypeText;
            var t = Math.floor(e / J.maxSecToDays);
            if (t < J.minDays) return "< 1 " + vt.PCenterVendorListLifespanDay;
            if (t < J.maxDays) return t + " " + vt.PCenterVendorListLifespanDays;
            var o = Math.floor(t / J.maxDays);
            return 1 === o ? o + " " + vt.PCenterVendorListLifespanMonth : o + " " + vt.PCenterVendorListLifespanMonths
        }, mt.prototype.insertElement = function(e, t, o) {
            e && t && e.insertAdjacentElement(o, t)
        }, mt),
        Tt = (St.prototype.removeAlertBox = function() {
            null !== this.getCookie(Se.ALERT_BOX_CLOSED) && this.setCookie(Se.ALERT_BOX_CLOSED, "", 0, !0)
        }, St.prototype.removeIab1 = function() {
            null !== this.getCookie(O.Iab1Pub) && this.setCookie(O.Iab1Pub, "", 0, !0)
        }, St.prototype.removeIab2 = function() {
            null !== this.getCookie(O.Iab2Pub) && this.setCookie(O.Iab2Pub, "", 0, !0)
        }, St.prototype.removeAddtlStr = function() {
            null !== this.getCookie(Se.ADDITIONAL_CONSENT_STRING) && this.setCookie(Se.ADDITIONAL_CONSENT_STRING, "", 0, !0)
        }, St.prototype.removeVariant = function() {
            null !== this.getCookie(Se.SELECTED_VARIANT) && this.setCookie(Se.SELECTED_VARIANT, "", 0, !0)
        }, St.prototype.removeOptanon = function() {
            null !== this.getCookie(Se.OPTANON_CONSENT) && this.setCookie(Se.OPTANON_CONSENT, "", 0, !0)
        }, St.prototype.removePreview = function() {
            null !== this.getCookie(Se.OT_PREVIEW) && this.setCookie(Se.OT_PREVIEW, "", 0, !0)
        }, St.prototype.writeCookieParam = function(e, t, o) {
            var n, r, s, i, l = {},
                a = this.getCookie(e);
            if (a)
                for (r = a.split("&"), n = 0; n < r.length; n += 1) s = r[n].split("="), l[decodeURIComponent(s[0])] = decodeURIComponent(s[1]).replace(/\+/g, " ");
            l[t] = o;
            var c = nt.moduleInitializer.TenantFeatures;
            c && c.CookieV2CookieDateTimeInISO ? l.datestamp = (new Date).toISOString() : l.datestamp = (new Date).toString(), l.version = ot.otSDKVersion, i = this.param(l), this.setCookie(e, i, vt.ReconsentFrequencyDays)
        }, St.prototype.readCookieParam = function(e, t) {
            var o, n, r, s, i = this.getCookie(e);
            if (i) {
                for (n = {}, r = i.split("&"), o = 0; o < r.length; o += 1) s = r[o].split("="), n[decodeURIComponent(s[0])] = decodeURIComponent(s[1]).replace(/\+/g, " ");
                return t && n[t] ? n[t] : t && !n[t] ? "" : n
            }
            return ""
        }, St.prototype.getCookie = function(e) {
            if (nt && nt.moduleInitializer && nt.moduleInitializer.MobileSDK) {
                var t = this.getCookieDataObj(e);
                if (t) return t.value
            }
            if (ot.isAMP && (ot.ampData = JSON.parse(localStorage.getItem(ot.dataDomainId)) || {}, ot.ampData)) return ot.ampData[e] || null;
            var o, n, r = e + "=",
                s = document.cookie.split(";");
            for (o = 0; o < s.length; o += 1) {
                for (n = s[o];
                    " " === n.charAt(0);) n = n.substring(1, n.length);
                if (0 === n.indexOf(r)) return n.substring(r.length, n.length)
            }
            return null
        }, St.prototype.setAmpStorage = function() {
            window.localStorage.setItem(ot.dataDomainId, JSON.stringify(ot.ampData))
        }, St.prototype.removeAmpStorage = function() {
            window.localStorage.removeItem(ot.dataDomainId)
        }, St.prototype.handleAmp = function(e, t) {
            "" !== t ? ot.ampData[e] = t : delete ot.ampData[e], 0 === Object.keys(ot.ampData).length ? this.removeAmpStorage() : this.setAmpStorage()
        }, St.prototype.setCookie = function(e, t, o, n, r) {
            if (void 0 === n && (n = !1), void 0 === r && (r = new Date), ot.isAMP) this.handleAmp(e, t);
            else {
                var s = void 0;
                s = o ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3), "; expires=" + r.toUTCString()) : n ? "; expires=" + new Date(0).toUTCString() : "";
                var i = nt.moduleInitializer,
                    l = i && i.Domain ? i.Domain.split("/") : [],
                    a = "",
                    c = i.TenantFeatures;
                l.length <= 1 ? l[1] = "" : a = l.slice(1).join("/");
                var d = "Samesite=Lax";
                c && c.CookiesSameSiteNone && (d = "Samesite=None; Secure");
                var p = i.ScriptType === Ne || i.ScriptType === He;
                if (ot.isPreview || !p && !i.MobileSDK) u = t + s + "; path=/" + a + "; domain=." + l[0] + "; " + d, document.cookie = e + "=" + u;
                else {
                    var u = t + s + "; path=/; " + d;
                    i.MobileSDK ? this.setCookieDataObj({
                        name: e,
                        value: t,
                        expires: s,
                        date: r,
                        domainAndPath: l
                    }) : document.cookie = e + "=" + u
                }
            }
        }, St.prototype.setCookieDataObj = function(t) {
            if (t) {
                ot.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? ot.otCookieData = window.OneTrust.otCookieData : ot.otCookieData = []);
                var e = At.findIndex(ot.otCookieData, function(e) {
                    return e.name === t.name
                }); - 1 < e ? ot.otCookieData[e] = t : ot.otCookieData.push(t)
            }
        }, St.prototype.getCookieDataObj = function(t) {
            ot.otCookieData && 0 !== ot.otCookieData.length || (window.OneTrust && window.OneTrust.otCookieData ? ot.otCookieData = window.OneTrust.otCookieData : ot.otCookieData = []);
            var e = At.findIndex(ot.otCookieData, function(e) {
                return e.name === t
            });
            if (0 <= e) {
                var o = ot.otCookieData[e];
                if (o.date) return new Date(o.date) < new Date ? (ot.otCookieData.splice(e, 1), null) : o
            }
            return null
        }, St.prototype.param = function(e) {
            var t, o = "";
            for (t in e) e.hasOwnProperty(t) && ("" !== o && (o += "&"), o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+"));
            return o
        }, St);

    function St() {}
    var _t = (It.insertAfter = function(e, t) {
        t.parentNode.insertBefore(e, t.nextSibling)
    }, It.insertBefore = function(e, t) {
        t.parentNode.insertBefore(e, t)
    }, It.inArray = function(e, t) {
        return t.indexOf(e)
    }, It.ajax = function(e) {
        var t, o, n, r, s, i, l = null,
            a = new XMLHttpRequest;
        t = e.type, o = e.url, e.dataType, n = e.contentType, r = e.data, s = e.success, l = e.error, i = e.sync, a.open(t, o, !i), a.setRequestHeader("Content-Type", n), a.onload = function() {
            if (200 <= this.status && this.status < 400) {
                var e = JSON.parse(this.responseText);
                s(e)
            } else l({
                message: "Error Loading Data",
                statusCode: this.status
            })
        }, a.onerror = function(e) {
            l(e)
        }, "post" === t.toLowerCase() || "put" === t.toLowerCase() ? a.send(r) : a.send()
    }, It.prevNextHelper = function(o, e, n) {
        var r = [];

        function s(e, t, o) {
            t[e] && o ? o.includes(".") ? (t[e].classList[0] || t[e].classList.value && t[e].classList.value.includes(o.split(".")[1])) && r.push(t[e]) : o.includes("#") ? t[e].id === o.split("#")[1] && r.push(t[e]) : t[e].tagName === document.createElement(o.trim()).tagName && r.push(t[e]) : t[e] && r.push(t[e])
        }
        return "string" == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function(e, t) {
            s(o, e, n)
        }) : s(o, e, n), r
    }, It.browser = function() {
        var e, t, o;
        return navigator.sayswho = (t = navigator.userAgent, o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(o[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]), o.join(" "))), {
            version: parseInt(navigator.sayswho.split(" ")[1]),
            type: navigator.sayswho.split(" ")[0],
            userAgent: navigator.userAgent
        }
    }, It.isNodeList = function(e) {
        var t = Object.prototype.toString.call(e);
        return "[object NodeList]" === t || "[object Array]" === t
    }, It.prototype.fadeOut = function(e) {
        var t = this;
        if (void 0 === e && (e = 60), 1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++) {
                var n = "\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: visibility 0s " + e + "ms, opacity " + e + "ms linear;\n                ";
                bt(this.el[o], n, !0)
            }
        var r = setInterval(function() {
            if (1 <= t.el.length)
                for (var e = 0; e < t.el.length; e++) t.el[e].style.opacity <= 0 && (bt(t.el[e], "display: none;", !0), clearInterval(r), "optanon-popup-bg" === t.el[e].id && t.el[e].removeAttribute("style"))
        }, e);
        return this
    }, It.prototype.hide = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++) bt(this.el[e], "display: none;", !0);
        else It.isNodeList(this.el) || bt(this.el, "display: none;", !0);
        return this
    }, It.prototype.show = function(e) {
        if (void 0 === e && (e = "block"), 1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) bt(this.el[t], "display: " + e + ";", !0);
        else It.isNodeList(this.el) || bt(this.el, "display: " + e + ";", !0);
        return this
    }, It.prototype.remove = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++) this.el[e].parentNode.removeChild(this.el[e]);
        else this.el.parentNode.removeChild(this.el);
        return this
    }, It.prototype.css = function(e) {
        if (e)
            if (1 <= this.el.length) {
                if (!e.includes(":")) return this.el[0].style[e];
                for (var t = 0; t < this.el.length; t++) bt(this.el[t], e)
            } else {
                if (!e.includes(":")) return this.el.style[e];
                bt(this.el, e)
            }
        return this
    }, It.prototype.removeClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        else this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        return this
    }, It.prototype.addClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += " " + e;
        else this.el.classList ? this.el.classList.add(e) : this.el.className += " " + e;
        return this
    }, It.prototype.on = function(r, s, i) {
        var e = this;
        if ("string" != typeof s)
            if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
                    case "load":
                        window.onload = s;
                        break;
                    case "resize":
                        window.onresize = s;
                        break;
                    case "scroll":
                        window.onscroll = s
                } else if (this.el && 1 <= this.el.length)
                    for (var t = 0; t < this.el.length; t++) this.el[t].addEventListener(r, s);
                else this.el && this.el instanceof Element && this.el.addEventListener(r, s);
        else if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
            case "load":
                window.onload = i;
                break;
            case "resize":
                window.onresize = i;
                break;
            case "scroll":
                window.onscroll = i
        } else {
            var l = function(o) {
                var n = o.target;
                e.el.eventExecuted = !0, Array.prototype.forEach.call(document.querySelectorAll(s), function(e, t) {
                    Bt["" + r + s] && delete Bt["" + r + s], e.addEventListener(r, i), e === n && i && i.call(e, o)
                }), e.el && e.el[0] ? e.el[0].removeEventListener(r, l) : e.el && e.el instanceof Element && e.el.removeEventListener(r, l)
            };
            if (this.el && 1 <= this.el.length)
                for (t = 0; t < this.el.length; t++) this.el[t].eventExecuted = !1, this.el[t].eventExecuted || this.el[t].addEventListener(r, l);
            else this.el && (this.el.eventExecuted = !1, !this.el.eventExecuted && this.el instanceof Element && (Bt["" + r + s] || (Bt["" + r + s] = !0, this.el.addEventListener(r, l))))
        }
        return this
    }, It.prototype.off = function(e, t) {
        if (1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++) this.el[o].removeEventListener(e, t);
        else this.el.removeEventListener(e, t);
        return this
    }, It.prototype.one = function(t, o) {
        var n = this;
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++) this.el[e].addEventListener(t, function(e) {
                e.stopPropagation(), e.currentTarget.dataset.triggered || (o(), e.currentTarget.dataset.triggered = !0)
            });
        else {
            var r = function(e) {
                e.stopPropagation(), o(), n.off(t, r)
            };
            this.el.addEventListener(t, r)
        }
        return this
    }, It.prototype.trigger = function(e) {
        var t = new CustomEvent(e, {
            customEvent: "yes"
        });
        return this.el.dispatchEvent(t), this
    }, It.prototype.focus = function() {
        return 1 <= this.el.length ? this.el[0].focus() : this.el.focus(), this
    }, It.prototype.attr = function(e, t) {
        return 1 <= this.el.length ? t ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t), this) : this.el[0].getAttribute(e) : t ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t), this) : this.el.getAttribute(e)
    }, It.prototype.html = function(e) {
        if (null == e) return 1 <= this.el.length ? this.el[0].innerHTML : this.el.innerHTML;
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) this.el[t].innerHTML = e;
        else this.el.innerHTML = e;
        return this
    }, It.prototype.append = function(o) {
        if ("string" != typeof o || o.includes("<") || o.includes(">"))
            if (Array.isArray(o)) {
                var n = this;
                Array.prototype.forEach.call(o, function(e, t) {
                    document.querySelector(n.selector).appendChild(new It(e, "ce").el)
                })
            } else if ("string" == typeof o || Array.isArray(o))
            if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(new It(o, "ce").el);
            else if (this.useEl) {
            var r = document.createDocumentFragment(),
                s = !(!o.includes("<th") && !o.includes("<td"));
            if (s) {
                var e = o.split(" ")[0].split("<")[1];
                r.appendChild(document.createElement(e)), r.firstChild.innerHTML = o
            }
            Array.prototype.forEach.call(this.el, function(e, t) {
                s ? e.appendChild(r.firstChild) : e.appendChild(new It(o, "ce").el)
            })
        } else this.selector.appendChild(new It(o, "ce").el);
        else if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(o);
        else if (1 <= o.length)
            for (var t = 0; t < o.length; t++) this.selector.appendChild(o[t]);
        else this.selector.appendChild(o);
        else this.el.insertAdjacentText("beforeend", o);
        return this
    }, It.prototype.text = function(o) {
        if (this.el) {
            if (1 <= this.el.length) {
                if (!o) return this.el[0].textContent;
                Array.prototype.forEach.call(this.el, function(e, t) {
                    e.textContent = o
                })
            } else {
                if (!o) return this.el.textContent;
                this.el.textContent = o
            }
            return this
        }
    }, It.prototype.data = function(o, n) {
        if (this.el.length < 1) return this;
        if (!(1 <= this.el.length)) return r(this.el, n);

        function r(e, t) {
            if (!t) return JSON.parse(e.getAttribute("data-" + o));
            "object" == typeof t ? e.setAttribute("data-" + o, JSON.stringify(t)) : e.setAttribute("data-" + o, t)
        }
        return Array.prototype.forEach.call(this.el, function(e, t) {
            r(e, n)
        }), this
    }, It.prototype.height = function(e) {
        this.el.length && (this.el = this.el[0]);
        for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-top").split("px")[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-bottom").split("px")[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top").split("px")[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom").split("px")[0]), s = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("height").split("px")[0]), i = [t, o, n, r], l = 0, a = 0; a < i.length; a++) 0 < i[a] && (l += i[a]);
        if (!e) return this.selector === document ? s : this.el.clientHeight - l;
        var c = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : "px",
            d = "number" == typeof e ? e : parseInt(e.toString().split(c)[0]);
        return (c && "px" === c || "%" === c || "em" === c || "rem" === c) && (0 < d ? bt(this.el, "height: " + (l + d + c) + ";", !0) : "auto" === e && bt(this.el, "height: " + e + ";", !0)), this
    }, It.prototype.each = function(e) {
        var t = !1;
        return void 0 === this.el.length && (this.el = [this.el], t = !0), Array.prototype.forEach.call(this.el, e), t && (this.el = this.el[0]), this
    }, It.prototype.is = function(e) {
        return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e)
    }, It.prototype.filter = function(e) {
        return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e), this
    }, It.prototype.animate = function(i, l) {
        var a, c = this;
        for (var e in this.el = document.querySelector(this.selector), i) a = e,
            function() {
                var e = parseInt(i[a]),
                    t = i[a].split(parseInt(i[a]))[1] ? i[a].split(parseInt(i[a]))[1] : "px",
                    o = "\n                      @keyframes slide-" + ("top" === a ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === a ? "top" : "bottom") + ": " + ("top" === a ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === a ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-webkit-keyframes slide-" + ("top" === a ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === a ? "top" : "bottom") + ": " + ("top" === a ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === a ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-moz-keyframes slide-" + ("top" === a ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === a ? "top" : "bottom") + ": " + ("top" === a ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === a ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      ",
                    n = document.head.querySelector("#onetrust-style");
                if (n ? n.innerHTML += o : ((s = document.createElement("style")).id = "onetrust-legacy-style", s.type = "text/css", s.innerHTML = o, document.head.appendChild(s)), It.browser().type = It.browser().version <= 8) {
                    var r = "top" === a ? "-webkit-animation: slide-up-custom " : "-webkit-animation: slide-down-custom " + l + "ms ease-out forwards;";
                    bt(c.el, r)
                } else {
                    var s = "\n                        animation-name: " + ("top" === a ? "slide-up-custom" : "slide-down-custom") + ";\n                        animation-duration: " + l + "ms;\n                        animation-fill-mode: forwards;\n                        animation-timing-function: ease-out;\n                    ";
                    bt(c.el, s, !0)
                }
            }();
        return this
    }, It.prototype.scrollTop = function() {
        return this.el.scrollTop
    }, It);

    function It(e, t) {
        switch (void 0 === t && (t = ""), this.selector = e, this.useEl = !1, t) {
            case "ce":
                var o = It.browser().type.toLowerCase(),
                    n = It.browser().version;
                if (n < 10 && "safari" === o || "chrome" === o && n <= 44 || n <= 40 && "firefox" === o) {
                    var r = document.implementation.createHTMLDocument();
                    r.body.innerHTML = e, this.el = r.body.children[0]
                } else {
                    var s = document.createRange().createContextualFragment(e);
                    this.el = s.firstChild
                }
                this.length = 1;
                break;
            case "":
                this.el = e === document || e === window ? document.documentElement : "string" != typeof e ? e : document.querySelectorAll(e), this.length = e === document || e === window || "string" != typeof e ? 1 : this.el.length;
                break;
            default:
                this.length = 0
        }
    }

    function Lt(e, t) {
        return void 0 === t && (t = ""), new _t(e, t)
    }
    var wt, Bt = {},
        Et = (xt.prototype.addLogoUrls = function() {
            wt.checkMobileOfflineRequest(wt.getBannerVersionUrl()) || (kt.mobileOnlineURL.push(wt.updateCorrectUrl(vt.optanonLogo)), kt.mobileOnlineURL.push(wt.updateCorrectUrl(vt.oneTrustFtrLogo)))
        }, xt.prototype.getCookieLabel = function(e, t, o) {
            if (void 0 === o && (o = !0), !e) return "";
            var n = e.Name;
            return t && (n = '\n                <a  class="cookie-label"\n                    href="' + (o ? "http://cookiepedia.co.uk/cookies/" : "http://cookiepedia.co.uk/host/") + e.Name + '"\n                    rel="noopener"\n                    target="_blank"\n                >\n                    ' + e.Name + '&nbsp;<span class="ot-scrn-rdr">' + vt.NewWinTxt + "</span>\n                </a>\n            "), n
        }, xt.prototype.getBannerSDKAssestsUrl = function() {
            return this.getBannerVersionUrl() + "/assets"
        }, xt.prototype.getBannerVersionUrl = function() {
            var e = kt.bannerScriptElement.getAttribute("src");
            return "" + (-1 !== e.indexOf("/consent/") ? e.split("consent/")[0] + "scripttemplates/" : e.split("otSDKStub")[0]) + nt.moduleInitializer.Version
        }, xt.prototype.checkMobileOfflineRequest = function(e) {
            return nt.moduleInitializer.MobileSDK && new RegExp("^file://", "i").test(e)
        }, xt.prototype.updateCorrectIABUrl = function(e) {
            var t = nt.moduleInitializer.ScriptType;
            if (t === Oe || t === He) {
                var o = At.getURL(e),
                    n = kt.bannerScriptElement,
                    r = n && n.getAttribute("src") ? At.getURL(n.getAttribute("src")) : null;
                r && o && r.hostname !== o.hostname && (e = (e = (r = "" + kt.bannerDataParentURL) + o.pathname.split("/").pop().replace(/(^\/?)/, "/")).replace(o.hostname, r.hostname))
            }
            return e
        }, xt.prototype.updateCorrectUrl = function(e, t) {
            void 0 === t && (t = !1);
            var o = At.getURL(e),
                n = kt.bannerScriptElement,
                r = n && n.getAttribute("src") ? At.getURL(n.getAttribute("src")) : null;
            if (r && o && r.hostname !== o.hostname) {
                var s = nt.moduleInitializer.ScriptType;
                if (s === Oe || s === He) {
                    if (t) return e;
                    e = (r = kt.bannerDataParentURL + "/" + kt.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, "/")
                } else e = e.replace(o.hostname, r.hostname)
            }
            return e
        }, xt.prototype.isBundleOrStackActive = function(n, r) {
            void 0 === r && (r = null);
            var s = ot.oneTrustIABConsent,
                i = !0;
            r = r || ot.groupsConsent;
            for (var l = 0, e = function() {
                    var t = n.SubGroups[l];
                    if (t.Type === st)(-1 < (e = At.findIndex(r, function(e) {
                        return e.split(":")[0] === t.CustomGroupId
                    })) && "0" === r[e].split(":")[1] || !r.length) && (i = !1);
                    else {
                        var e, o = t.Type === at ? s.specialFeatures : s.purpose;
                        (-1 < (e = At.findIndex(o, function(e) {
                            return e.split(":")[0] === t.IabGrpId
                        })) && "false" === o[e].split(":")[1] || !o.length) && (i = !1)
                    }
                    l++
                }; e(), i && l < n.SubGroups.length;);
            return i
        }, xt.prototype.otFetchOfflineFile = function(r) {
            return a(this, void 0, void 0, function() {
                var t, o, n;
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return r = r.replace(".json", ".js"), t = r.split("/"), o = t[t.length - 1], n = o.split(".js")[0], [4, new Promise(function(e) {
                                function t() {
                                    e(window[n])
                                }
                                wt.jsonp(r, t, t)
                            })];
                        case 1:
                            return [2, e.sent()]
                    }
                })
            })
        }, xt.prototype.jsonp = function(e, t, o) {
            wt.checkMobileOfflineRequest(e) || kt.mobileOnlineURL.push(e);
            var n = document.createElement("script"),
                r = document.getElementsByTagName("head")[0];

            function s() {
                t()
            }
            n.onreadystatechange = function() {
                "loaded" !== this.readyState && "complete" !== this.readyState || s()
            }, n.onload = s, n.onerror = function() {
                o()
            }, n.type = "text/javascript", n.async = !0, n.src = e, ot.crossOrigin && n.setAttribute("crossorigin", ot.crossOrigin), r.appendChild(n)
        }, xt.prototype.isCookiePolicyPage = function(e) {
            var t = !1,
                o = At.removeURLPrefixes(window.location.href),
                n = Lt("<div></div>", "ce").el;
            Lt(n).html(e);
            for (var r = n.querySelectorAll("a"), s = 0; s < r.length; s++)
                if (At.removeURLPrefixes(r[s].href) === o) {
                    t = !0;
                    break
                }
            return t
        }, xt.prototype.isBannerVisible = function() {
            var e = !1,
                t = document.getElementById("onetrust-banner-sdk");
            return t && t.getAttribute("style") && (e = -1 !== t.getAttribute("style").indexOf("display: none") || -1 !== t.getAttribute("style").indexOf("display:none")), e
        }, xt.prototype.hideBanner = function() {
            var e = this;
            ot.bnrAnimationInProg ? setTimeout(function() {
                return e.hideBanner()
            }, 100) : Lt("#onetrust-banner-sdk").fadeOut(400)
        }, xt.prototype.resetFocusToBody = function() {
            document.activeElement && document.activeElement.blur()
        }, xt.prototype.getDuration = function(e) {
            var t = e.Length,
                o = e.DurationType,
                n = "";
            if (!t || 0 === parseInt(t)) return vt.LfSpanSecs;
            var r = parseInt(t);
            if (o) {
                var s = 1 < (r = this.round_to_precision(r / o, .5)) ? tt[o] + "s" : tt[o];
                n = r + " " + vt[s]
            } else n = this.getDurationText(r);
            return n
        }, xt.prototype.isDateCurrent = function(e) {
            var t = e.split("/"),
                o = parseInt(t[1]),
                n = parseInt(t[0]),
                r = parseInt(t[2]),
                s = new Date,
                i = s.getDate(),
                l = s.getFullYear(),
                a = s.getMonth() + 1;
            return l < r || r === l && a < n || r === l && n === a && i <= o
        }, xt.prototype.insertFooterLogo = function(e) {
            var t = Lt(e).el;
            if (t.length && vt.oneTrustFtrLogo) {
                var o = wt.updateCorrectUrl(vt.oneTrustFtrLogo);
                wt.checkMobileOfflineRequest(wt.getBannerVersionUrl()) && (o = At.getRelativeURL(o, !0, !0));
                for (var n = 0; n < t.length; n++) Lt(t[n]).attr("href", vt.pCFooterLogoUrl), Lt(t[n]).attr("style", 'background-image: url("' + o + '");'), Lt(t[n]).attr("aria-label", "Powered by OneTrust " + vt.NewWinTxt)
            }
        }, xt.prototype.getDurationText = function(e) {
            return 365 <= e ? (e /= 365, (e = this.round_to_precision(e, .5)) + " " + (1 < e ? vt.LfSpnYrs : vt.LfSpnYr)) : e + " " + (1 < e ? vt.PCenterVendorListLifespanDays : vt.PCenterVendorListLifespanDay)
        }, xt.prototype.round_to_precision = function(e, t) {
            var o = +e + (void 0 === t ? .5 : t / 2);
            return o - o % (void 0 === t ? 1 : +t)
        }, xt);

    function xt() {}
    var Vt, Gt = {
            P_Content: "#ot-pc-content",
            P_Logo: ".ot-pc-logo",
            P_Title: "#ot-pc-title",
            P_Policy_Txt: "#ot-pc-desc",
            P_Vendor_Title_Elm: "#ot-lst-title",
            P_Vendor_Title: "#ot-lst-title span",
            P_Manage_Cookies_Txt: "#ot-category-title",
            P_Label_Txt: ".ot-label-txt",
            P_Category_Header: ".ot-cat-header",
            P_Category_Grp: ".ot-cat-grp",
            P_Category_Item: ".ot-cat-item",
            P_Vendor_List: "#ot-pc-lst",
            P_Vendor_Content: "#ot-lst-cnt",
            P_Vendor_Container: "#ot-ven-lst",
            P_Ven_Bx: "ot-ven-box",
            P_Ven_Name: ".ot-ven-name",
            P_Ven_Link: ".ot-ven-link",
            P_Ven_Ctgl: "ot-ven-ctgl",
            P_Ven_Ltgl: "ot-ven-litgl",
            P_Ven_Ltgl_Only: "ot-ven-litgl-only",
            P_Ven_Opts: ".ot-ven-opts",
            P_Triangle: "#ot-anchor",
            P_Fltr_Modal: "#ot-fltr-modal",
            P_Fltr_Options: ".ot-fltr-opts",
            P_Fltr_Option: ".ot-fltr-opt",
            P_Select_Cntr: "#ot-sel-blk",
            P_Host_Cntr: "#ot-host-lst",
            P_Host_Hdr: ".ot-host-hdr",
            P_Host_Desc: ".ot-host-desc",
            P_Li_Hdr: ".ot-pli-hdr",
            P_Li_Title: ".ot-li-title",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Host_Title: ".ot-host-name",
            P_Leg_Select_All: ".ot-sel-all-hdr",
            P_Leg_Header: ".ot-li-hdr",
            P_Acc_Header: ".ot-acc-hdr",
            P_Cnsnt_Header: ".ot-consent-hdr",
            P_Tgl_Cntr: ".ot-tgl-cntr",
            P_CBx_Cntr: ".ot-chkbox",
            P_Sel_All_Host_El: "ot-selall-hostcntr",
            P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
            P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
            P_c_Name: "ot-c-name",
            P_c_Host: "ot-c-host",
            P_c_Duration: "ot-c-duration",
            P_c_Type: "ot-c-type",
            P_c_Category: "ot-c-category",
            P_c_Desc: "ot-c-description",
            P_Host_View_Cookies: ".ot-host-expand",
            P_Host_Opt: ".ot-host-opt",
            P_Host_Info: ".ot-host-info",
            P_Arrw_Cntr: ".ot-arw-cntr",
            P_Acc_Txt: ".ot-acc-txt",
            P_Vendor_CheckBx: "ot-ven-chkbox",
            P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
            P_Host_UI: "ot-hosts-ui",
            P_Host_Cnt: "ot-host-cnt",
            P_Host_Bx: "ot-host-box",
            P_Ven_Dets: ".ot-ven-dets",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Close_Btn: ".ot-close-icon",
            P_Ven_Lst_Cntr: ".ot-vlst-cntr",
            P_Host_Lst_cntr: ".ot-hlst-cntr",
            P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
            P_Subgrp_Desc: ".ot-subgrp-desc",
            P_Subgp_ul: ".ot-subgrps",
            P_Subgrp_li: ".ot-subgrp",
            P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
            P_Grp_Container: ".ot-grps-cntr",
            P_Privacy_Txt: "#ot-pvcy-txt",
            P_Privacy_Hdr: "#ot-pvcy-hdr",
            P_Active_Menu: "ot-active-menu",
            P_Desc_Container: ".ot-desc-cntr",
            P_Tab_Grp_Hdr: "ot-grp-hdr1",
            P_Search_Cntr: "#ot-search-cntr",
            P_Clr_Fltr_Txt: "#clear-filters-handler",
            P_Acc_Grp_Desc: ".ot-acc-grpdesc",
            P_Acc_Container: ".ot-acc-grpcntr",
            P_Line_Through: "line-through"
        },
        Ot = {
            P_Grp_Container: ".groups-container",
            P_Content: "#ot-content",
            P_Category_Header: ".category-header",
            P_Desc_Container: ".description-container",
            P_Label_Txt: ".label-text",
            P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
            P_Leg_Int_Hdr: ".leg-int-header",
            P_Not_Always_Active: "p:not(.ot-always-active)",
            P_Category_Grp: ".category-group",
            P_Category_Item: ".category-item",
            P_Sub_Grp_Cntr: ".cookie-subgroups-container",
            P_Acc_Container: ".ot-accordion-pc-container",
            P_Close_Btn: ".pc-close-button",
            P_Logo: ".pc-logo",
            P_Title: "#pc-title",
            P_Privacy_Txt: "#privacy-text",
            P_Privacy_Hdr: "#pc-privacy-header",
            P_Policy_Txt: "#pc-policy-text",
            P_Manage_Cookies_Txt: "#manage-cookies-text",
            P_Vendor_Title: "#vendors-list-title",
            P_Vendor_Title_Elm: "#vendors-list-title",
            P_Vendor_List: "#vendors-list",
            P_Vendor_Content: "#vendor-list-content",
            P_Vendor_Container: "#vendors-list-container",
            P_Ven_Bx: "vendor-box",
            P_Ven_Name: ".vendor-title",
            P_Ven_Link: ".vendor-privacy-notice",
            P_Ven_Ctgl: "ot-vendor-consent-tgl",
            P_Ven_Ltgl: "ot-leg-int-tgl",
            P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
            P_Ven_Opts: ".vendor-options",
            P_Triangle: "#ot-triangle",
            P_Fltr_Modal: "#ot-filter-modal",
            P_Fltr_Options: ".ot-group-options",
            P_Fltr_Option: ".ot-group-option",
            P_Select_Cntr: "#select-all-container",
            P_Host_Cntr: "#hosts-list-container",
            P_Host_Hdr: ".host-info",
            P_Host_Desc: ".host-description",
            P_Host_Opt: ".host-option-group",
            P_Host_Info: ".vendor-host",
            P_Ven_Dets: ".vendor-purpose-groups",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Arrw_Cntr: ".ot-arrow-container",
            P_Li_Hdr: ".leg-int-header",
            P_Li_Title: ".leg-int-title",
            P_Acc_Txt: ".accordion-text",
            P_Tgl_Cntr: ".ot-toggle-group",
            P_CBx_Cntr: ".ot-chkbox-container",
            P_Host_Title: ".host-title",
            P_Leg_Select_All: ".leg-int-sel-all-hdr",
            P_Leg_Header: ".leg-int-hdr",
            P_Cnsnt_Header: ".consent-hdr",
            P_Acc_Header: ".accordion-header",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Sel_All_Host_El: "select-all-hosts-input-container",
            P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
            P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
            P_c_Name: "cookie-name-container",
            P_c_Host: "cookie-host-container",
            P_c_Duration: "cookie-duration-container",
            P_c_Type: "cookie-type-container",
            P_c_Category: "cookie-category-container",
            P_c_Desc: "cookie-description-container",
            P_Host_View_Cookies: ".host-view-cookies",
            P_Vendor_CheckBx: "vendor-chkbox",
            P_Vendor_LegCheckBx: "vendor-leg-chkbox",
            P_Host_UI: "hosts-list",
            P_Host_Cnt: "host-list-content",
            P_Host_Bx: "host-box",
            P_Ven_Lst_Cntr: ".category-vendors-list-container",
            P_Host_Lst_cntr: ".category-host-list-container",
            P_Subgrp_Desc: ".cookie-subgroups-description-legal",
            P_Subgp_ul: ".cookie-subgroups",
            P_Subgrp_li: ".cookie-subgroup",
            P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
            P_Active_Menu: "active-group",
            P_Tab_Grp_Hdr: "group-toggle",
            P_Search_Cntr: "#search-container",
            P_Clr_Fltr_Txt: "#clear-filters-handler p"
        };

    function Nt() {}
    var Ht, Dt = new(Nt.prototype.initializeBannerVariables = function(e) {
            var t, o = e.DomainData;
            kt.iabType = o.IabType, t = o.PCTemplateUpgrade, Vt = t ? Gt : Ot, kt.init(e), ot.showGeneralVendors = vt.GeneralVendorsEnabled && vt.GeneralVendors.length && vt.PCTemplateUpgrade, ot.genVenOptOutEnabled = ot.showGeneralVendors && vt.GenVenOptOut, wt.addLogoUrls(), this.setGeolocationInCookies(), this.setOrUpdate3rdPartyIABConsentFlag()
        }, Nt.prototype.initializeVendorInOverriddenVendors = function(e) {
            vt.OverriddenVendors[e] = {
                disabledCP: [],
                disabledLIP: [],
                active: !0,
                legInt: !1,
                consent: !1
            }
        }, Nt.prototype.applyGlobalRestrictionsonNewVendor = function(e, t, o, n) {
            var r = vt.GlobalRestrictions,
                s = vt.OverriddenVendors;
            switch (s[t] || this.initializeVendorInOverriddenVendors(t), s[t].disabledCP || (s[t].disabledCP = []), s[t].disabledLIP || (s[t].disabledLIP = []), r[o]) {
                case H.Disabled:
                    n ? s[t].disabledCP.push(o) : s[t].disabledLIP.push(o);
                    break;
                case H.Consent:
                    n ? s[t].consent = !0 : (s[t].disabledLIP.push(o), this.checkFlexiblePurpose(e, t, o, !1));
                    break;
                case H.LegInt:
                    n ? (s[t].disabledCP.push(o), this.checkFlexiblePurpose(e, t, o, !0)) : s[t].legInt = !0
            }
        }, Nt.prototype.checkFlexiblePurpose = function(e, t, o, n) {
            e.flexiblePurposes.includes(o) ? (n ? vt.OverriddenVendors[t].legInt = !0 : vt.OverriddenVendors[t].consent = !0, vt.Publisher.restrictions[o][t] = n ? H.LegInt : H.Consent) : vt.Publisher.restrictions[o][t] = H.Disabled
        }, Nt.prototype.removeInActiveVendorsForTcf = function(s) {
            var i = this,
                l = ot.iabData.vendorListVersion,
                e = vt.Publisher,
                a = vt.GlobalRestrictionEnabled,
                c = !(0 === Object.keys(e).length || e && 0 === Object.keys(e.restrictions).length);
            Object.keys(s.vendors).forEach(function(t) {
                var o = s.vendors[t];
                a && o.iab2GVLVersion > l && (o.purposes.forEach(function(e) {
                    i.applyGlobalRestrictionsonNewVendor(o, t, e, !0)
                }), o.legIntPurposes.forEach(function(e) {
                    i.applyGlobalRestrictionsonNewVendor(o, t, e, !1)
                }));
                var e = !1;
                vt.IsIabThirdPartyCookieEnabled || (kt.legIntSettings.PAllowLI ? vt.OverriddenVendors[t] && !vt.OverriddenVendors[t].active && (e = !0) : -1 < vt.Vendors.indexOf(Number(t)) && (e = !0));
                var n = !o.purposes.length && !o.flexiblePurposes.length;
                vt.OverriddenVendors[t] && !vt.OverriddenVendors[t].consent && (n = !0);
                var r = !0;
                kt.legIntSettings.PAllowLI && (!o.legIntPurposes.length || vt.OverriddenVendors[t] && !vt.OverriddenVendors[t].legInt || (r = !1)), !n || !r || o.specialPurposes.length || o.features.length || o.specialFeatures.length || (e = !0), !a && c && o.iab2GVLVersion > l && (e = !0), e && delete s.vendors[t]
            })
        }, Nt.prototype.setPublisherRestrictions = function() {
            var e = vt.Publisher;
            if (e && e.restrictions) {
                var i = this.iabStringSDK(),
                    t = e.restrictions,
                    l = ot.iabData,
                    a = ot.oneTrustIABConsent.vendorList.vendors;
                Object.keys(t).forEach(function(n) {
                    var r, s = t[n],
                        e = kt.iabGroups.purposes[n];
                    e && (r = {
                        description: e.description,
                        purposeId: e.id,
                        purposeName: e.name
                    }), Object.keys(s).forEach(function(e) {
                        if (ot.vendorsSetting[e]) {
                            var t = ot.vendorsSetting[e].arrIndex;
                            1 === s[e] && -1 === a[e].purposes.indexOf(Number(n)) ? l.vendors[t].purposes.push(r) : 2 === s[e] && -1 === a[e].legIntPurposes.indexOf(Number(n)) && l.vendors[t].legIntPurposes.push(r);
                            var o = i.purposeRestriction(Number(n), s[e]);
                            ot.tcModel.publisherRestrictions.add(Number(e), o)
                        }
                    })
                })
            }
        }, Nt.prototype.populateVendorListTCF = function() {
            return a(this, void 0, void 0, function() {
                var t, o, n, r, s, i, l, a, c;
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = this.iabStringSDK(), o = ot.iabData, n = wt.updateCorrectIABUrl(o.globalVendorListUrl), r = !this.isIABCrossConsentEnabled(), wt.checkMobileOfflineRequest(wt.getBannerVersionUrl()) ? [3, 1] : (kt.mobileOnlineURL.push(n), s = t.gvl(n, ot.gvlObj), [3, 3]);
                        case 1:
                            return l = (i = t).gvl, a = [null], [4, wt.otFetchOfflineFile(At.getRelativeURL(n, !0))];
                        case 2:
                            s = l.apply(i, a.concat([e.sent()])), e.label = 3;
                        case 3:
                            return this.removeInActiveVendorsForTcf(s), ot.oneTrustIABConsent.vendorList = s, this.assignIABDataWithGlobalVendorList(s), c = ot, [4, t.tcModel(s)];
                        case 4:
                            c.tcModel = e.sent(), r && this.setPublisherRestrictions(), ot.tcModel.cmpId = parseInt(o.cmpId), ot.tcModel.cmpVersion = parseInt(o.cmpVersion);
                            try {
                                ot.tcModel.consentLanguage = ot.consentLanguage
                            } catch (e) {
                                ot.tcModel.consentLanguage = "EN"
                            }
                            return ot.tcModel.consentScreen = parseInt(o.consentScreen), ot.tcModel.isServiceSpecific = r, ot.tcModel.purposeOneTreatment = kt.purposeOneTreatment, vt.PublisherCC ? ot.tcModel.publisherCountryCode = vt.PublisherCC : ot.userLocation.country && (ot.tcModel.publisherCountryCode = ot.userLocation.country), ot.cmpApi = t.cmpApi(ot.tcModel.cmpId, ot.tcModel.cmpVersion, r, vt.UseGoogleVendors ? {
                                getTCData: this.addtlConsentString,
                                getInAppTCData: this.addtlConsentString,
                                addEventListener: this.addtlConsentString
                            } : void 0), null !== this.alertBoxCloseDate() && !this.needReconsent() || this.resetTCModel(), [2]
                    }
                })
            })
        }, Nt.prototype.resetTCModel = function() {
            var e = this.iabStringSDK(),
                t = ot.tcModel.clone();
            if (t.unsetAll(), kt.legIntSettings.PAllowLI) {
                var o = kt.consentableIabGrps.filter(function(e) {
                        return e.HasLegIntOptOut && e.Type === lt
                    }).map(function(e) {
                        return parseInt(kt.iabGrpIdMap[e.CustomGroupId])
                    }),
                    n = Object.keys(ot.vendorsSetting).filter(function(e) {
                        return ot.vendorsSetting[e].legInt
                    }).map(function(e) {
                        return parseInt(e)
                    });
                t.purposeLegitimateInterests.set(o), t.vendorLegitimateInterests.set(n), t.isServiceSpecific && t.publisherLegitimateInterests.set(o)
            }
            ot.cmpApi.update(e.tcString().encode(t), !0)
        }, Nt.prototype.addtlConsentString = function(e, t, o) {
            t && (t.addtlConsent = "" + ot.addtlConsentVersion + (ot.isAddtlConsent ? ot.addtlVendors.vendorConsent.join(".") : "")), "function" == typeof e ? e(t, o) : console.error("__tcfapi received invalid parameters.")
        }, Nt.prototype.setIabData = function() {
            ot.iabData = nt.moduleInitializer.IabV2Data, ot.iabData.consentLanguage = ot.consentLanguage
        }, Nt.prototype.assignIABDataWithGlobalVendorList = function(o) {
            var r = vt.OverriddenVendors;
            ot.iabData.vendorListVersion = o.vendorListVersion, ot.iabData.vendors = [], Object.keys(o.vendors).forEach(function(n) {
                ot.vendorsSetting[n] = {
                    consent: !0,
                    legInt: !0,
                    arrIndex: 0
                };
                var e = {},
                    t = o.vendors[n];
                e.vendorId = n, e.vendorName = t.name, e.policyUrl = t.policyUrl, e.cookieMaxAge = At.calculateCookieLifespan(t.cookieMaxAgeSeconds), e.usesNonCookieAccess = t.usesNonCookieAccess, e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null, kt.legIntSettings.PAllowLI && (!r[n] || r[n].legInt) && (r[n] || t.legIntPurposes.length) || (ot.vendorsSetting[n].legInt = !1), r[n] && !r[n].consent || !r[n] && !t.purposes.length && !t.flexiblePurposes.length ? ot.vendorsSetting[n].consent = !1 : t.purposes.length || t.flexiblePurposes.length || (ot.vendorsSetting[n].consent = !1), e.features = t.features.map(function(e) {
                    var t, o = kt.iabGroups.features[e];
                    return o && (t = {
                        description: o.description,
                        featureId: o.id,
                        featureName: o.name
                    }), t
                }), e.specialFeatures = o.vendors[n].specialFeatures.reduce(function(e, t) {
                    var o = kt.iabGroups.specialFeatures[t];
                    return o && e.push({
                        description: o.description,
                        featureId: o.id,
                        featureName: o.name
                    }), e
                }, []), e.purposes = o.vendors[n].purposes.reduce(function(e, t) {
                    var o = kt.iabGroups.purposes[t];
                    return !o || r[n] && r[n].disabledCP && -1 !== r[n].disabledCP.indexOf(t) || e.push({
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name
                    }), e
                }, []), e.legIntPurposes = o.vendors[n].legIntPurposes.reduce(function(e, t) {
                    var o = kt.iabGroups.purposes[t];
                    return !o || r[n] && r[n].disabledLIP && -1 !== r[n].disabledLIP.indexOf(t) || e.push({
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name
                    }), e
                }, []), e.specialPurposes = t.specialPurposes.map(function(e) {
                    var t, o = kt.iabGroups.specialPurposes[e];
                    return o && (t = {
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name
                    }), t
                }), ot.iabData.vendors.push(e), ot.vendorsSetting[n].arrIndex = ot.iabData.vendors.length - 1
            })
        }, Nt.prototype.populateIABCookies = function() {
            return a(this, void 0, void 0, function() {
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (!this.isIABCrossConsentEnabled()) return [3, 5];
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, this.setIAB3rdPartyCookie(Se.EU_CONSENT, "", 0, !0)];
                        case 2:
                            return e.sent(), [3, 4];
                        case 3:
                            return e.sent(), this.setIABCookieData(), this.updateCrossConsentCookie(!1), [3, 4];
                        case 4:
                            return [3, 6];
                        case 5:
                            Dt.needReconsent() || this.setIABCookieData(), e.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }, Nt.prototype.setIAB3rdPartyCookie = function(e, t, o, n) {
            var r = vt.iabThirdPartyConsentUrl;
            try {
                if (r && document.body) return this.updateThirdPartyConsent(r, e, t, o, n);
                throw new ReferenceError
            } catch (e) {
                throw e
            }
        }, Nt.prototype.setIABCookieData = function() {
            ot.oneTrustIABConsent.IABCookieValue = Pt.getCookie(Se.EU_PUB_CONSENT)
        }, Nt.prototype.updateThirdPartyConsent = function(n, r, s, i, l) {
            return a(this, void 0, void 0, function() {
                var t, o;
                return u(this, function(e) {
                    return t = window.location.protocol + "//" + n + "/?name=" + r + "&value=" + s + "&expire=" + i + "&isFirstRequest=" + l, document.getElementById("onetrustIabCookie") ? (document.getElementById("onetrustIabCookie").contentWindow.location.replace(t), [2]) : (bt(o = document.createElement("iframe"), "display: none;", !0), o.id = "onetrustIabCookie", o.setAttribute("title", "OneTrust IAB Cookie"), o.src = t, document.body.appendChild(o), [2, new Promise(function(e) {
                        o.onload = function() {
                            kt.thirdPartyiFrameResolve(), kt.thirdPartyiFrameLoaded = !0, e()
                        }, o.onerror = function() {
                            throw kt.thirdPartyiFrameResolve(), kt.thirdPartyiFrameLoaded = !0, e(), new URIError
                        }
                    })])
                })
            })
        }, Nt.prototype.setIABVendor = function(n) {
            if (void 0 === n && (n = !0), ot.iabData.vendors.forEach(function(e) {
                    var t = e.vendorId;
                    if (kt.legIntSettings.PAllowLI) {
                        var o = !ot.vendorsSetting[t].consent;
                        ot.oneTrustIABConsent.vendors.push(t.toString() + ":" + (o ? "false" : n)), ot.oneTrustIABConsent.legIntVendors.push(t.toString() + ":" + ot.vendorsSetting[t].legInt)
                    } else ot.oneTrustIABConsent.legIntVendors = [], ot.oneTrustIABConsent.vendors.push(t.toString() + ":" + n)
                }), vt.UseGoogleVendors) {
                var t = ot.addtlVendors;
                Object.keys(ot.addtlVendorsList).forEach(function(e) {
                    n && (t.vendorSelected["" + e.toString()] = !0, t.vendorConsent.push("" + e.toString()))
                })
            }
        }, Nt.prototype.setOrUpdate3rdPartyIABConsentFlag = function() {
            var e = this.getIABCrossConsentflagData();
            vt.IsIabEnabled ? e && !this.needReconsent() || this.updateCrossConsentCookie(vt.IsIabThirdPartyCookieEnabled) : e && !this.reconsentRequired() && "true" !== e || this.updateCrossConsentCookie(!1)
        }, Nt.prototype.isIABCrossConsentEnabled = function() {
            return "true" === this.getIABCrossConsentflagData()
        }, Nt.prototype.getIABCrossConsentflagData = function() {
            return Pt.readCookieParam(Se.OPTANON_CONSENT, Pe)
        }, Nt.prototype.setGeolocationInCookies = function() {
            var e = Pt.readCookieParam(Se.OPTANON_CONSENT, be);
            if (ot.userLocation && !e && this.isAlertBoxClosedAndValid()) {
                var t = ot.userLocation.country + ";" + ot.userLocation.state;
                this.setUpdateGeolocationCookiesData(t)
            } else this.reconsentRequired() && e && this.setUpdateGeolocationCookiesData("")
        }, Nt.prototype.iabStringSDK = function() {
            var e = nt.moduleInitializer.otIABModuleData;
            if (vt.IsIabEnabled && e) return {
                gvl: e.tcfSdkRef.gvl,
                tcModel: e.tcfSdkRef.tcModel,
                tcString: e.tcfSdkRef.tcString,
                cmpApi: e.tcfSdkRef.cmpApi,
                purposeRestriction: e.tcfSdkRef.purposeRestriction
            }
        }, Nt.prototype.setUpdateGeolocationCookiesData = function(e) {
            Pt.writeCookieParam(Se.OPTANON_CONSENT, be, e)
        }, Nt.prototype.reconsentRequired = function() {
            return (nt.moduleInitializer.MobileSDK || this.awaitingReconsent()) && this.needReconsent()
        }, Nt.prototype.awaitingReconsent = function() {
            return "true" === Pt.readCookieParam(Se.OPTANON_CONSENT, ke)
        }, Nt.prototype.needReconsent = function() {
            var e = this.alertBoxCloseDate(),
                t = vt.LastReconsentDate;
            return e && t && new Date(t) > new Date(e)
        }, Nt.prototype.updateCrossConsentCookie = function(e) {
            Pt.writeCookieParam(Se.OPTANON_CONSENT, Pe, e)
        }, Nt.prototype.alertBoxCloseDate = function() {
            return Pt.getCookie(Se.ALERT_BOX_CLOSED)
        }, Nt.prototype.isAlertBoxClosedAndValid = function() {
            return null !== this.alertBoxCloseDate() && !this.reconsentRequired()
        }, Nt.prototype.generateLegIntButtonElements = function(e, t, o) {
            void 0 === o && (o = !1);
            var n = e ? "display:none;" : "";
            return '<div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + o + '">\n                    <button class="ot-obj-leg-btn-handler ' + (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") + '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' + vt.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                        <span>' + (e ? kt.legIntSettings.PObjectLegIntText : kt.legIntSettings.PObjectionAppliedText) + '\n                        </span>\n                    </button>\n                    <button\n                        class="ot-remove-objection-handler"\n                            data-style="color:' + vt.pcButtonColor + "; " + n + '"\n                    >\n                        ' + kt.legIntSettings.PRemoveObjectionText + "\n                    </button>\n                </div>"
        }, Nt.prototype.syncAlertBoxCookie = function(e) {
            var t = vt.ReconsentFrequencyDays;
            Pt.setCookie(Se.ALERT_BOX_CLOSED, e, t, !1, new Date(e))
        }, Nt.prototype.syncCookieExpiry = function() {
            if (ot.syncRequired) {
                var e = vt.ReconsentFrequencyDays,
                    t = Pt.getCookie(Se.ALERT_BOX_CLOSED),
                    o = Pt.getCookie(Se.OPTANON_CONSENT);
                Pt.setCookie(Se.OPTANON_CONSENT, o, e, !1, new Date(t)), Dt.needReconsent() && Pt.removeAlertBox();
                var n = Pt.getCookie(Se.EU_PUB_CONSENT);
                n && (Dt.isIABCrossConsentEnabled() ? Pt.removeIab2() : Pt.setCookie(Se.EU_PUB_CONSENT, n, e, !1, new Date(t)));
                var r = Pt.getCookie(Se.ADDITIONAL_CONSENT_STRING);
                r && Pt.setCookie(Se.ADDITIONAL_CONSENT_STRING, r, e, !1, new Date(t))
            }
        }, Nt.prototype.syncOtPreviewCookie = function() {
            var e = Pt.getCookie(Se.OT_PREVIEW);
            e && Pt.setCookie(Se.OT_PREVIEW, e, vt.ReconsentFrequencyDays, !1)
        }, Nt.prototype.dispatchConsentEvent = function() {
            window.dispatchEvent(new CustomEvent("OTConsentApplied", {
                OTConsentApplied: "yes"
            }))
        }, Nt),
        Ft = (Rt.prototype.isAlwaysActiveGroup = function(e) {
            if (this.getGrpStatus(e)) {
                var t = this.getGrpStatus(e).toLowerCase();
                return e.Parent && t !== Be && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === Be
            }
            return !0
        }, Rt.prototype.getGrpStatus = function(e) {
            return e && e.Status ? kt.DNTEnabled && e.IsDntEnabled ? Ge : e.Status : ""
        }, Rt.prototype.getParentGroup = function(t) {
            if (t) {
                var e = vt.Groups.filter(function(e) {
                    return e.OptanonGroupId === t
                });
                return 0 < e.length ? e[0] : null
            }
            return null
        }, Rt.prototype.checkIfGroupHasConsent = function(t) {
            var e = ot.groupsConsent,
                o = At.findIndex(e, function(e) {
                    return e.split(":")[0] === t.CustomGroupId
                });
            return -1 < o && "1" === e[o].split(":")[1]
        }, Rt.prototype.checkIsActiveByDefault = function(e) {
            if (this.getGrpStatus(e)) {
                var t = this.getGrpStatus(e).toLowerCase();
                return e.Parent && t !== Be && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === Be || t === xe || t === Ee || t === Ge && !kt.DNTEnabled
            }
            return !0
        }, Rt.prototype.getGroupById = function(e) {
            for (var t = null, o = 0, n = vt.Groups; o < n.length; o++) {
                for (var r = n[o], s = 0, i = g(r.SubGroups, [r]); s < i.length; s++) {
                    var l = i[s];
                    if (l.CustomGroupId === e) {
                        t = l;
                        break
                    }
                }
                if (t) break
            }
            return t
        }, Rt.prototype.isSoftOptInGrp = function(e) {
            if (e) {
                var t = e && !e.Parent ? e : Ht.getParentGroup(e.Parent);
                return "inactive landingpage" === Ht.getGrpStatus(t).toLowerCase()
            }
            return !1
        }, Rt.prototype.isOptInGrp = function(e) {
            return !!e && "inactive" === Ht.getGrpStatus(e).toLowerCase()
        }, Rt);

    function Rt() {}
    var qt, Mt = (jt.prototype.ensureConsentId = function(e, t) {
        var o, n = !1,
            r = Pt.readCookieParam(Se.OPTANON_CONSENT, ve);
        if (o = !e && t ? (n = !0, 1) : 0, r) {
            var s = parseInt(Pt.readCookieParam(Se.OPTANON_CONSENT, me), 10);
            isNaN(s) || (o = t ? ++s : s, n = !1)
        } else r = At.generateUUID(), Pt.writeCookieParam(Se.OPTANON_CONSENT, ve, r);
        return Pt.writeCookieParam(Se.OPTANON_CONSENT, me, o), {
            id: r,
            count: o,
            addDfltInt: n
        }
    }, jt.prototype.isAnonymousConsent = function() {
        var e = !0,
            t = ot.dsParams;
        return t && t.hasOwnProperty("isAnonymous") && (e = t.isAnonymous), e
    }, jt.prototype.isAuthUsr = function(e) {
        ot.consentPreferences ? Pt.writeCookieParam(Se.OPTANON_CONSENT, "iType", "") : Pt.writeCookieParam(Se.OPTANON_CONSENT, "iType", "" + F[e])
    }, jt.prototype.createConsentTxn = function(e, t, o, n) {
        void 0 === t && (t = ""), void 0 === o && (o = !1), void 0 === n && (n = !0);
        var r = this.ensureConsentId(e, n),
            s = vt.ConsentIntegration;
        if (s.ConsentApi && s.RequestInformation && r.id) {
            var i = nt.moduleInitializer,
                l = {
                    requestInformation: s.RequestInformation,
                    identifier: r.id,
                    customPayload: {
                        Interaction: r.count,
                        AddDefaultInteraction: r.addDfltInt
                    },
                    isAnonymous: this.isAnonymousConsent(),
                    test: i.ScriptType === Ne || i.ScriptType === He,
                    purposes: this.getConsetPurposes(e),
                    dsDataElements: {}
                };
            ot.isV2Stub && (l.syncGroup = ot.syncGrpId, "IAB2" !== kt.iabType || Dt.isIABCrossConsentEnabled() || (l.tcStringV2 = Pt.getCookie(Se.EU_PUB_CONSENT)));
            var a = Ht.getGroupById(vt.AdvancedAnalyticsCategory);
            if (a && this.canSendAdvancedAnalytics(l.purposes, a) && (l.dsDataElements = {
                    InteractionType: t,
                    Country: ot && ot.userLocation ? ot.userLocation.country : "",
                    UserAgent: window.navigator.userAgent
                }), !i.MobileSDK && n && l.purposes.length) {
                var c = JSON.stringify(l);
                e && navigator.sendBeacon ? (navigator.sendBeacon(s.ConsentApi, c), Dt.dispatchConsentEvent()) : !o && ot.consentInteractionType === t || (ot.isV2Stub && t && this.isAuthUsr(t), _t.ajax({
                    url: s.ConsentApi,
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(l),
                    sync: e,
                    success: function() {
                        Dt.dispatchConsentEvent()
                    },
                    error: function() {
                        Dt.dispatchConsentEvent()
                    }
                }))
            }
            kt.pubDomainData.ConsentIntegrationData = {
                consentApi: s.ConsentApi,
                consentPayload: l
            }
        }
        ot.consentInteractionType = t
    }, jt.prototype.getGrpDetails = function(e, s) {
        var i = [];
        return e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = "true" === t[1] ? "1" : "0",
                r = qt.getOptanonIdForIabGroup(o, s);
            i.push(r + ":" + n)
        }), i
    }, jt.prototype.getOptanonIdForIabGroup = function(e, t) {
        var o;
        return t === b.Purpose ? o = "IABV2_" + e : t === b.SpecialFeature && (o = "ISFV2_" + e), o
    }, jt.prototype.getConsetPurposes = function(r) {
        var e, t, s = this,
            i = [],
            o = [],
            n = ot.oneTrustIABConsent;
        return e = n && n.purpose ? this.getGrpDetails(n.purpose, b.Purpose) : [], t = n && n.specialFeatures ? this.getGrpDetails(n.specialFeatures, b.SpecialFeature) : [], o = g(n.specialPurposes, n.features), g(ot.groupsConsent, e, t).forEach(function(e) {
            var t = e.split(":"),
                o = Ht.getGroupById(t[0]);
            if (o && o.PurposeId) {
                var n = void 0;
                n = o.Status === Be ? Le : ot.bannerCloseSource === f.BannerCloseButton && o.Status === Ve || r ? we : s.getTxnType(t[1]), i.push({
                    Id: o.PurposeId,
                    TransactionType: n
                })
            }
        }), o.forEach(function(e) {
            e.purposeId && i.push({
                Id: e.purposeId,
                TransactionType: Le
            })
        }), ot.bannerCloseSource = f.Unknown, i
    }, jt.prototype.getTxnType = function(e) {
        return "0" === e ? Ie : _e
    }, jt.prototype.isPurposeConsentedTo = function(e, t) {
        var o = [_e, Le];
        return e.some(function(e) {
            return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType)
        })
    }, jt.prototype.canSendAdvancedAnalytics = function(t, e) {
        var o = this;
        return "BRANCH" === e.Type || "IAB2_STACK" === e.Type ? e.SubGroups.length && e.SubGroups.every(function(e) {
            return o.isPurposeConsentedTo(t, e)
        }) : this.isPurposeConsentedTo(t, e)
    }, jt);

    function jt() {}
    var Ut, zt = (Kt.prototype.isIabCookieValid = function() {
        var e = null;
        switch (kt.iabType) {
            case "IAB2":
                e = Pt.getCookie("eupubconsent-v2")
        }
        return null !== e
    }, Kt.prototype.iabTypeIsChanged = function() {
        this.isIabCookieValid() || (Pt.removeAlertBox(), Pt.removeIab1())
    }, Kt.prototype.initializeIABModule = function() {
        return a(this, void 0, void 0, function() {
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return vt.IsIabEnabled ? (nt.moduleInitializer.otIABModuleData = window.otIabModule, Dt.setIabData(), [4, Dt.populateVendorListTCF()]) : [3, 2];
                    case 1:
                        return e.sent(), Dt.isIABCrossConsentEnabled() || this.iabTypeIsChanged(), Dt.populateIABCookies(), vt.UseGoogleVendors && this.removeInActiveAddtlVendors(), [3, 3];
                    case 2:
                        Pt.removeIab1(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, Kt.prototype.removeInActiveAddtlVendors = function() {
        var e = vt.OverridenGoogleVendors;
        for (var t in ot.addtlVendorsList) e && e[t] && !e[t].active && delete ot.addtlVendorsList[t]
    }, Kt.prototype.getIABConsentData = function() {
        var e = ot.oneTrustIABConsent,
            t = Dt.iabStringSDK().tcString();
        ot.tcModel.unsetAllPurposeConsents(), ot.tcModel.unsetAllVendorConsents(), ot.tcModel.unsetAllVendorLegitimateInterests(), ot.tcModel.unsetAllSpecialFeatureOptins(), ot.tcModel.unsetAllPurposeLegitimateInterests(), ot.tcModel.publisherConsents.empty(), ot.tcModel.publisherLegitimateInterests.empty(), ot.tcModel.purposeConsents.set(At.getActiveIdArray(e.purpose)), ot.tcModel.publisherConsents.set(At.getActiveIdArray(e.purpose));
        var o = kt.legIntSettings.PAllowLI ? At.getActiveIdArray(e.legimateInterest) : [];
        ot.tcModel.purposeLegitimateInterests.set(o), ot.tcModel.publisherLegitimateInterests.set(o), ot.tcModel.vendorConsents.set(At.getActiveIdArray(At.distinctArray(e.vendors))), kt.legIntSettings.PAllowLI && !o.length && (e.legIntVendors = []), ot.tcModel.vendorLegitimateInterests.set(At.getActiveIdArray(At.distinctArray(e.legIntVendors))), ot.tcModel.specialFeatureOptins.set(At.getActiveIdArray(e.specialFeatures));
        var n = t.encode(ot.tcModel);
        return ot.cmpApi.update(n, !1), n
    }, Kt.prototype.decodeTCString = function(e) {
        return Dt.iabStringSDK().tcString().decode(e)
    }, Kt.prototype.getVendorConsentsRequestV2 = function(e) {
        var o;
        return window.__tcfapi("getInAppTCData", 2, function(e, t) {
            o = [e, t]
        }), e.apply(this, o)
    }, Kt.prototype.getPingRequestForTcf = function(e) {
        var t;
        return window.__tcfapi("ping", 2, function(e) {
            t = [e]
        }), e.apply(this, t)
    }, Kt.prototype.populateVendorAndPurposeFromCookieData = function() {
        var r = ot.oneTrustIABConsent,
            e = Ut.decodeTCString(r.IABCookieValue),
            s = {},
            i = {};
        kt.iabGrps.forEach(function(e) {
            e.Type === lt ? s[kt.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === at && (i[kt.iabGrpIdMap[e.CustomGroupId]] = e)
        });
        var l = [];
        e.vendorConsents.forEach(function(e, t) {
            var o = e;
            ot.vendorsSetting[t] && ot.vendorsSetting[t].consent || !e || (l.push(t), o = !1), r.vendors.push(t + ":" + o)
        }), e.vendorConsents.unset(l), l = [], e.vendorLegitimateInterests.forEach(function(e, t) {
            var o = e;
            ot.vendorsSetting[t] && ot.vendorsSetting[t].legInt || !e || (l.push(t), o = !1), r.legIntVendors.push(t + ":" + o)
        }), e.vendorLegitimateInterests.unset(l), l = [], e.purposeConsents.forEach(function(e, o) {
            var t = e;
            s[o] && s[o].HasConsentOptOut || !e || (l.push(o), t = !1);
            var n = At.findIndex(r.purpose, function(e, t) {
                return e.split(":")[0] === o.toString()
            }); - 1 === n ? r.purpose.push(o + ":" + t) : r.purpose[n] = o + ":" + t
        }), e.purposeConsents.unset(l), e.publisherConsents.unset(l), l = [], e.specialFeatureOptins.forEach(function(e, o) {
            var t = e;
            i[o] && i[o].HasConsentOptOut || !e || (l.push(o), t = !1);
            var n = At.findIndex(r.specialFeatures, function(e, t) {
                return e.split(":")[0] === o.toString()
            }); - 1 === n ? r.specialFeatures.push(o + ":" + t) : r.specialFeatures[n] = o + ":" + t
        }), e.specialFeatureOptins.unset(l), l = [], e.purposeLegitimateInterests.forEach(function(e, o) {
            var t = e;
            s[o] && s[o].HasLegIntOptOut && kt.legIntSettings.PAllowLI || !e || (l.push(o), t = !1);
            var n = At.findIndex(r.legimateInterest, function(e, t) {
                return e.split(":")[0] === o.toString()
            }); - 1 === n ? r.legimateInterest.push(o + ":" + t) : r.legimateInterest[n] = o + ":" + t
        }), e.purposeLegitimateInterests.unset(l), e.publisherLegitimateInterests.unset(l), this.syncBundleAndStack(), e.gvl = ot.tcModel.gvl, e.isServiceSpecific = !Dt.isIABCrossConsentEnabled(), ot.tcModel = e;
        var t = Dt.iabStringSDK().tcString().encode(e);
        Dt.isAlertBoxClosedAndValid() ? (r.IABCookieValue !== t && (r.IABCookieValue = t, Dt.isIABCrossConsentEnabled() ? Dt.setIAB3rdPartyCookie(Se.EU_CONSENT, r.IABCookieValue, vt.ReconsentFrequencyDays, !1) : Pt.setCookie(Se.EU_PUB_CONSENT, r.IABCookieValue, vt.ReconsentFrequencyDays)), ot.cmpApi.update(t, !1)) : Dt.resetTCModel()
    }, Kt.prototype.syncBundleAndStack = function() {
        var e = Pt.readCookieParam(Se.OPTANON_CONSENT, "groups");
        ot.groupsConsent = At.strToArr(e), vt.Groups.forEach(function(t) {
            if (t.Type === rt || t.Type === dt) {
                var e = wt.isBundleOrStackActive(t),
                    o = At.findIndex(ot.groupsConsent, function(e) {
                        return e.split(":")[0] === t.CustomGroupId
                    }),
                    n = t.CustomGroupId + ":" + Number(e); - 1 < o ? ot.groupsConsent[o] = n : ot.groupsConsent.push(n)
            }
        }), Pt.writeCookieParam(Se.OPTANON_CONSENT, "groups", ot.groupsConsent.join(","))
    }, Kt.prototype.populateGoogleConsent = function() {
        if (vt.UseGoogleVendors) {
            var e = Pt.getCookie(Se.ADDITIONAL_CONSENT_STRING);
            e && (ot.isAddtlConsent = !0, ot.addtlVendors.vendorConsent = e.replace(ot.addtlConsentVersion, "").split("."))
        }
    }, Kt.prototype.isInitIABCookieData = function(e) {
        return "init" === e || Dt.needReconsent()
    }, Kt.prototype.updateFromGlobalConsent = function(e) {
        var t = ot.oneTrustIABConsent;
        t.IABCookieValue = e, t.purpose = t.purpose || [], t.specialFeatures = t.specialFeatures || [], t.legIntVendors = [], t.legimateInterest = t.legimateInterest || [], t.vendors = [], Ut.populateVendorAndPurposeFromCookieData(), Pt.setCookie(Se.EU_PUB_CONSENT, "", -1)
    }, Kt);

    function Kt() {}
    var Wt, Jt = (Xt.prototype.writeHstParam = function(e, t) {
        void 0 === t && (t = null), Pt.writeCookieParam(e, "hosts", At.arrToStr(t || ot.hostsConsent))
    }, Xt.prototype.writeGenVenCookieParam = function(e) {
        var t = vt.GeneralVendors,
            o = ot.genVendorsConsent,
            n = "";
        t.forEach(function(e) {
            n += e.VendorCustomId + ":" + (o[e.VendorCustomId] ? "1" : "0") + ","
        }), Pt.writeCookieParam(e, "genVendors", n)
    }, Xt.prototype.updateGroupsInCookie = function(e, t) {
        void 0 === t && (t = null), Pt.writeCookieParam(e, "groups", At.arrToStr(t || ot.groupsConsent))
    }, Xt.prototype.writeGrpParam = function(e, t) {
        void 0 === t && (t = null), this.updateGroupsInCookie(e, t), vt.IsIabEnabled && Dt.isAlertBoxClosedAndValid() && this.insertOrUpdateIabCookies()
    }, Xt.prototype.insertOrUpdateIabCookies = function() {
        var e = ot.oneTrustIABConsent;
        if (e.purpose && e.vendors) {
            ot.isAddtlConsent = vt.UseGoogleVendors, e.IABCookieValue = Ut.getIABConsentData();
            var t = vt.ReconsentFrequencyDays;
            Dt.isIABCrossConsentEnabled() ? Dt.setIAB3rdPartyCookie(Se.EU_CONSENT, e.IABCookieValue, t, !1) : (Pt.setCookie(Se.EU_PUB_CONSENT, e.IABCookieValue, t), vt.UseGoogleVendors && Pt.setCookie(Se.ADDITIONAL_CONSENT_STRING, "" + ot.addtlConsentVersion + ot.addtlVendors.vendorConsent.join("."), t))
        }
    }, Xt);

    function Xt() {}
    var Yt, $t = (Qt.prototype.initGenVendorConsent = function() {
        var n = this;
        if (vt.GenVenOptOut) {
            var e = kt.consentableGrps,
                t = Pt.readCookieParam(Se.OPTANON_CONSENT, "genVendors");
            t ? (ot.genVendorsConsent = {}, t.split(",").forEach(function(e) {
                if (e) {
                    var t = e.split(":");
                    "1" === t[1] && (ot.genVendorsConsent[t[0]] = !0)
                }
            })) : (ot.genVendorsConsent = {}, e.forEach(function(e) {
                var o = ot.syncRequired ? Ht.checkIfGroupHasConsent(e) : Ht.checkIsActiveByDefault(e);
                e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                    ot.genVendorsConsent[e] = t || o
                })
            }))
        } else ot.genVendorsConsent = {}, Wt.writeGenVenCookieParam(Se.OPTANON_CONSENT)
    }, Qt.prototype.populateGenVendorLists = function() {
        kt.consentableGrps.forEach(function(e) {
            e.GeneralVendorsIds && (Ht.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function(e) {
                ot.alwaysActiveGenVendors.push(e)
            }) : Ht.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function(e) {
                ot.optInGenVendors.push(e)
            }) : Ht.isSoftOptInGrp(e) && e.GeneralVendorsIds.forEach(function(e) {
                ot.optInGenVendors.includes(e) || ot.softOptInGenVendors.push(e)
            }))
        })
    }, Qt.prototype.updateGenVendorStatus = function(e, t) {
        ot.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e)
    }, Qt.prototype.isGenVenPartOfAlwaysActiveGroup = function(e) {
        return ot.alwaysActiveGenVendors.includes(e)
    }, Qt);

    function Qt() {}
    var Zt, eo = (to.prototype.synchroniseCookieGroupData = function(e) {
        var t = Pt.readCookieParam(Se.OPTANON_CONSENT, "groups"),
            i = At.strToArr(t),
            l = At.strToArr(t.replace(/:0|:1/g, "")),
            a = Dt.needReconsent(),
            c = !Dt.isAlertBoxClosedAndValid(),
            d = !1,
            p = !1;
        e.forEach(function(e) {
            var t = e.CustomGroupId,
                o = e.Type === rt || e.Type === dt;
            if (-1 === At.indexOf(l, t)) {
                if (o && vt.IsIabEnabled) return;
                var n;
                n = e.Type === rt ? wt.isBundleOrStackActive(e, i) : (d = !0, Ht.checkIsActiveByDefault(e)), p = !0, i.push(t + (n ? ":1" : ":0"))
            } else if (kt.gpcEnabled && e.IsGpcEnabled && (c || a) && -1 < (r = i.indexOf(t + ":1")) && (p = !0, i[r] = t + ":0}"), a && "false" === Dt.getIABCrossConsentflagData() && o) {
                var r, s = wt.isBundleOrStackActive(e, i); - 1 < (r = i.indexOf(t + ":" + (s ? "0" : "1"))) && (p = !0, i[r] = t + (s ? ":1" : ":0"))
            }
        });
        for (var o = i.length, n = function() {
                var t = i[o].replace(/:0|:1/g, "");
                vt.Groups.some(function(e) {
                    return (!a || e.Type !== dt) && (e.CustomGroupId === t || e.SubGroups.some(function(e) {
                        return e.CustomGroupId === t
                    }))
                }) || (p = !0, i.splice(o, 1))
            }; o--;) n();
        p && (ot.fireOnetrustGrp = !0, Wt.updateGroupsInCookie(Se.OPTANON_CONSENT, i), ot.syncRequired && d && Pt.removeAlertBox())
    }, to.prototype.groupHasConsent = function(t) {
        var e = At.strToArr(Pt.readCookieParam(Se.OPTANON_CONSENT, "groups")),
            o = At.findIndex(e, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            });
        return -1 < o && "1" === e[o].split(":")[1]
    }, to.prototype.synchroniseCookieHostData = function() {
        var n = this,
            e = Pt.readCookieParam(Se.OPTANON_CONSENT, "hosts"),
            r = At.strToArr(e),
            s = At.strToArr(e.replace(/:0|:1/g, "")),
            i = !1;
        vt.Groups.forEach(function(e) {
            g(e.SubGroups, [e]).forEach(function(o) {
                o.Hosts.length && o.Hosts.forEach(function(e) {
                    if (-1 === At.indexOf(s, e.HostId)) {
                        i = !0;
                        var t = ot.syncRequired ? n.groupHasConsent(o) : Ht.checkIsActiveByDefault(o);
                        r.push(e.HostId + (t ? ":1" : ":0"))
                    }
                })
            })
        });
        for (var o = r.length, t = function() {
                var t = r[o].replace(/:0|:1/g, "");
                vt.Groups.some(function(e) {
                    return g(e.SubGroups, [e]).some(function(e) {
                        return e.Hosts.some(function(e) {
                            return e.HostId === t
                        })
                    })
                }) || (i = !0, r.splice(o, 1))
            }; o--;) t();
        i && (ot.fireOnetrustGrp = !0, Wt.writeHstParam(Se.OPTANON_CONSENT, r))
    }, to.prototype.toggleGroupHosts = function(e, t) {
        var o = this;
        e.Hosts.forEach(function(e) {
            o.updateHostStatus(e, t)
        })
    }, to.prototype.toggleGroupGenVendors = function(e, t) {
        e.GeneralVendorsIds.forEach(function(e) {
            Yt.updateGenVendorStatus(e, t)
        })
    }, to.prototype.updateHostStatus = function(t, e) {
        var o = At.findIndex(ot.hostsConsent, function(e) {
            return !t.isActive && t.HostId === e.replace(/:0|:1/g, "")
        });
        if (-1 < o) {
            var n = e || this.isHostPartOfAlwaysActiveGroup(t.HostId);
            ot.hostsConsent[o] = t.HostId + ":" + (n ? "1" : "0")
        }
    }, to.prototype.isHostPartOfAlwaysActiveGroup = function(e) {
        return ot.oneTrustAlwaysActiveHosts.includes(e)
    }, to);

    function to() {}
    var oo, no = function() {
            this.assets = function() {
                return {
                    name: "otCookiePolicy",
                    html: '<div class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h5 class="cookies-used-header">Cookies Used</h5>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description"><span\n                            class="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section class="subgroup">\n        <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n        <p class="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 class="cookies-used-header">Cookies Used</h6>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\x3c!-- New Cookies policy Link--\x3e\n<div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section class="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n                    <p class="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="ot-table-header ot-host">Host</th>\n                    <th scope="col" class="ot-table-header ot-host-description">Host Description</th>\n                    <th scope="col" class="ot-table-header ot-cookies">Cookies</th>\n                    <th scope="col" class="ot-table-header ot-cookies-type">Type</th>\n                    <th scope="col" class="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="ot-host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="ot-host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="ot-cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td class="ot-cookies-type" data-label="Type">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td class="ot-life-span-td" data-label="Life Span">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
                    css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
                    cssRTL: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}"
                }
            }
        },
        ro = (so.prototype.isLandingPage = function() {
            var e = Pt.readCookieParam(Se.OPTANON_CONSENT, "landingPath");
            return !e || e === location.href
        }, so.prototype.setLandingPathParam = function(e) {
            Pt.writeCookieParam(Se.OPTANON_CONSENT, "landingPath", e)
        }, so);

    function so() {}
    var io, lo = "#onetrust-banner-sdk",
        ao = "#onetrust-pc-sdk",
        co = (po.prototype.BannerPushDownHandler = function() {
            this.checkIsBrowserIE11OrBelow() || (io.pushPageDown(lo), Lt(window).on("resize", function() {
                "none" !== Lt(lo).css("display") && io.pushPageDown(lo)
            }))
        }, po.prototype.pushPageUp = function() {
            Lt("body").css("top: 0;")
        }, po.prototype.checkIsBrowserIE11OrBelow = function() {
            var e = window.navigator.userAgent;
            return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/")
        }, po.prototype.pushPageDown = function(e) {
            var t = Lt(e).height() + "px";
            Lt(e).show().css("\n            bottom: auto;\n            position: absolute;\n            top: -" + t + ";\n        "), Lt("body").css("\n            position: relative;\n            top: " + t + ";\n        ")
        }, po);

    function po() {}
    var uo, ho = (go.prototype.loadBanner = function() {
        nt.moduleInitializer.ScriptDynamicLoadEnabled ? "complete" === document.readyState ? Lt(window).trigger("otloadbanner") : window.addEventListener("load", function(e) {
            Lt(window).trigger("otloadbanner")
        }) : "loading" !== document.readyState ? Lt(window).trigger("otloadbanner") : window.addEventListener("DOMContentLoaded", function(e) {
            Lt(window).trigger("otloadbanner")
        }), kt.pubDomainData.IsBannerLoaded = !0
    }, go.prototype.OnConsentChanged = function(e) {
        var t = e.toString();
        uo.consentChangedEventMap[t] || (uo.consentChangedEventMap[t] = !0, window.addEventListener("consent.onetrust", e))
    }, go.prototype.triggerGoogleAnalyticsEvent = function(e, t, o, n) {
        kt.ignoreGoogleAnlyticsCall || (void 0 !== window._gaq && window._gaq.push(["_trackEvent", e, t, o, n]), "function" == typeof window.ga && window.ga("send", "event", e, t, o, n)), void 0 !== window.dataLayer && window.dataLayer.constructor === Array && window.dataLayer.push({
            event: "trackOptanonEvent",
            optanonCategory: e,
            optanonAction: t,
            optanonLabel: o,
            optanonValue: n
        })
    }, go.prototype.setAlertBoxClosed = function(e) {
        var t = (new Date).toISOString();
        e ? Pt.setCookie(Se.ALERT_BOX_CLOSED, t, vt.ReconsentFrequencyDays) : Pt.setCookie(Se.ALERT_BOX_CLOSED, t, 0), kt.pagePushedDown && !io.checkIsBrowserIE11OrBelow() && io.pushPageUp();
        var o = Lt(".onetrust-pc-dark-filter").el[0];
        o && "none" !== getComputedStyle(o).getPropertyValue("display") && Lt(".onetrust-pc-dark-filter").fadeOut(400)
    }, go.prototype.updateConsentFromCookie = function(t) {
        return a(this, void 0, void 0, function() {
            return u(this, function(e) {
                return t ? (Ut.isInitIABCookieData(t) || Ut.updateFromGlobalConsent(t), "init" === t && (Pt.removeIab1(), Dt.isAlertBoxClosedAndValid() && Dt.resetTCModel(), Pt.removeAlertBox())) : (Dt.resetTCModel(), Dt.updateCrossConsentCookie(!1), Dt.setIABCookieData()), uo.assetPromise.then(function() {
                    uo.loadBanner()
                }), [2]
            })
        })
    }, go);

    function go() {
        var t = this;
        this.consentChangedEventMap = {}, this.assetResolve = null, this.assetPromise = new Promise(function(e) {
            t.assetResolve = e
        })
    }
    var Co, yo = "opt-out",
        fo = "OneTrust Cookie Consent",
        ko = "Banner Auto Close",
        vo = "Banner Close Button",
        bo = "Banner Preferences Saved",
        mo = "Preferences Close Button",
        Po = "Preference Center Opened From Banner",
        Ao = "Preference Center Opened From Button",
        To = "Preference Center Opened From Function",
        So = "Preferences Save Settings",
        _o = "Vendors List Opened From Function",
        Io = "Floating Cookie Settings Open Button",
        Lo = "Floating Cookie Settings Close Button",
        wo = "Preferences Toggle On",
        Bo = "Preferences Toggle Off",
        Eo = "General Vendor Toggle On",
        xo = "General Vendor Toggle Off",
        Vo = "Host Toggle On",
        Go = "Host Toggle Off",
        Oo = "Preferences Legitimate Interest Objection",
        No = "Preferences Legitimate Interest Remove Objection",
        Ho = "IAB Vendor Toggle ON",
        Do = "IAB Vendor Toggle Off",
        Fo = "IAB Vendor Legitimate Interest Objection",
        Ro = "IAB Vendor Legitimate Interest Remove Objection",
        qo = (Mo.prototype.getDataLanguageCulture = function() {
            var e = kt.bannerScriptElement;
            return e && e.getAttribute(De) ? this.checkAndTansformLangCodeWithUnderdscore(e.getAttribute(De).toLowerCase()) : this.detectDocumentOrBrowserLanguage().toLowerCase()
        }, Mo.prototype.checkAndTansformLangCodeWithUnderdscore = function(e) {
            return e.replace(/\_/, "-")
        }, Mo.prototype.detectDocumentOrBrowserLanguage = function() {
            var e = At.convertKeyValueLowerCase(kt.langSwitcherPldr),
                t = this.getUserLanguage().toLowerCase(),
                o = "";
            if (!(o = e[t] || e[t + "-" + t] || (e.default === t ? e.default : null)))
                if (2 === t.length)
                    for (var n = 0; n < Object.keys(e).length; n += 1) {
                        var r = Object.keys(e)[n];
                        if (r.substr(0, 2) === t) {
                            o = e[r];
                            break
                        }
                    } else 2 < t.length && (o = e[t.substr(0, 2)]);
            return o = o || e.default
        }, Mo.prototype.getUserLanguage = function() {
            return kt.useDocumentLanguage ? this.checkAndTansformLangCodeWithUnderdscore(document.documentElement.lang) : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage
        }, Mo.prototype.isValidLanguage = function(e, t) {
            var o = At.convertKeyValueLowerCase(kt.langSwitcherPldr);
            return !(!o[t] && !o[t + "-" + t] && o.default !== t)
        }, Mo.prototype.getLangJsonUrl = function(e) {
            void 0 === e && (e = null);
            var t = kt.getRegionRule();
            if (e) {
                if (e = e.toLowerCase(), !this.isValidLanguage(t, e)) return null
            } else e = this.getDataLanguageCulture();
            ot.lang = e, ot.consentLanguage = e.substr(0, 2);
            var o = kt.bannerDataParentURL + "/" + t.Id + "/" + e;
            return kt.multiVariantTestingEnabled && (o = kt.bannerDataParentURL + "/" + t.Id + "/variants/" + kt.selectedVariant.Id + "/" + e), o
        }, Mo.prototype.populateLangSwitcherPlhdr = function() {
            var e = kt.getRegionRule(),
                t = e.Variants;
            if (kt.multiVariantTestingEnabled && t) {
                var o = Pt.getCookie(Se.SELECTED_VARIANT),
                    n = void 0;
                o ? n = t[At.findIndex(t, function(e) {
                    return e.Id === o
                })] : o && n || (n = t[Math.floor(Math.random() * t.length)]), kt.langSwitcherPldr = n.LanguageSwitcherPlaceholder, kt.selectedVariant = n
            } else kt.langSwitcherPldr = e.LanguageSwitcherPlaceholder
        }, Mo);

    function Mo() {}
    var jo, Uo = (zo.prototype.getLangJson = function(e) {
        void 0 === e && (e = null);
        var t = Co.getLangJsonUrl(e);
        return t ? jo.otFetch(t + ".json") : Promise.resolve(null)
    }, zo.prototype.fetchGvlObj = function() {
        return this.otFetch(nt.moduleInitializer.IabV2Data.globalVendorListUrl)
    }, zo.prototype.fetchGoogleVendors = function() {
        var e = wt.updateCorrectIABUrl(nt.moduleInitializer.GoogleData.googleVendorListUrl);
        return wt.checkMobileOfflineRequest(wt.getBannerVersionUrl()) ? wt.otFetchOfflineFile(At.getRelativeURL(e, !0)) : (kt.mobileOnlineURL.push(e), this.otFetch(e))
    }, zo.prototype.getStorageDisclosure = function(t) {
        return a(this, void 0, void 0, function() {
            return u(this, function(e) {
                return [2, this.otFetch(t)]
            })
        })
    }, zo.prototype.loadCMP = function() {
        var o = this;
        return new Promise(function(e) {
            var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
            wt.jsonp(wt.getBannerVersionUrl() + "/" + t + ".js", e, e)
        })
    }, zo.prototype.getCSBtnContent = function() {
        return a(this, void 0, void 0, function() {
            var t, o, n, r;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = vt.useRTL ? Y.RTL : Y.LTR, ot.csBtnAsset[t] ? [3, 2] : (o = wt.getBannerSDKAssestsUrl() + "/" + (vt.useRTL ? Re : Fe), n = ot.csBtnAsset, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, ot.csBtnAsset[t]]
                }
            })
        })
    }, zo.prototype.getPcContent = function(i) {
        return void 0 === i && (i = !1), a(this, void 0, void 0, function() {
            var t, o, n, r, s;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = vt.useRTL ? Y.RTL : Y.LTR, ot.pcAsset[t] && !i ? [3, 2] : (o = wt.getBannerSDKAssestsUrl(), vt.PCTemplateUpgrade && (o += "/v2"), n = o + "/" + kt.pcName + (vt.useRTL ? "Rtl" : "") + ".json", r = ot.pcAsset, s = t, [4, this.otFetch(n)]);
                    case 1:
                        r[s] = e.sent(), e.label = 2;
                    case 2:
                        return [2, ot.pcAsset[t]]
                }
            })
        })
    }, zo.prototype.getBannerContent = function(s) {
        return void 0 === s && (s = !1), a(this, void 0, void 0, function() {
            var t, o, n, r;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = vt.useRTL ? Y.RTL : Y.LTR, ot.bAsset[t] && !s ? [3, 2] : (o = wt.getBannerSDKAssestsUrl() + "/" + kt.bannerName + (vt.useRTL ? "Rtl" : "") + ".json", n = ot.bAsset, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, ot.bAsset[t]]
                }
            })
        })
    }, zo.prototype.getCommonStyles = function(s) {
        return void 0 === s && (s = !1), a(this, void 0, void 0, function() {
            var t, o, n, r;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = vt.useRTL ? Y.RTL : Y.LTR, ot.cStyles[t] && !s ? [3, 2] : (o = wt.getBannerSDKAssestsUrl() + "/otCommonStyles" + (vt.useRTL ? "Rtl" : "") + ".css", n = ot.cStyles, r = t, [4, this.otFetch(o, !0)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, ot.cStyles[t]]
                }
            })
        })
    }, zo.prototype.getSyncNtfyContent = function() {
        return a(this, void 0, void 0, function() {
            var t, o, n, r;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = vt.useRTL ? Y.RTL : Y.LTR, ot.syncNtfyContent[t] ? [3, 2] : (o = wt.getBannerSDKAssestsUrl() + "/otSyncNotification" + (vt.useRTL ? "Rtl" : "") + ".json", n = ot.syncNtfyContent, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, ot.syncNtfyContent[t]]
                }
            })
        })
    }, zo.prototype.getConsentProfile = function(e, t) {
        var o = this,
            n = {
                Identifier: e,
                TenantId: ot.tenantId,
                Authorization: t
            };
        return new Promise(function(e) {
            o.getJSON(ot.consentApi, n, e, e)
        })
    }, zo.prototype.checkIfRequiresPollyfill = function() {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/") || "undefined" == typeof Set
    }, zo.prototype.otFetch = function(r, s) {
        return void 0 === s && (s = !1), a(this, void 0, void 0, function() {
            var t, o, n = this;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return wt.checkMobileOfflineRequest(r) ? [4, wt.otFetchOfflineFile(r)] : [3, 2];
                    case 1:
                        return [2, e.sent()];
                    case 2:
                        return e.trys.push([2, 9, , 10]), kt.mobileOnlineURL.push(r), "undefined" != typeof fetch ? [3, 3] : [2, new Promise(function(e) {
                            n.getJSON(r, null, e, e, s)
                        })];
                    case 3:
                        return [4, fetch(r)];
                    case 4:
                        return t = e.sent(), s ? [4, t.text()] : [3, 6];
                    case 5:
                        return [2, e.sent()];
                    case 6:
                        return [4, t.json()];
                    case 7:
                        return [2, e.sent()];
                    case 8:
                        return [3, 10];
                    case 9:
                        return o = e.sent(), console.log("Error in fetch URL : " + r + " Exception :" + o), [3, 10];
                    case 10:
                        return [2]
                }
            })
        })
    }, zo.prototype.getJSON = function(e, t, o, n, r) {
        void 0 === t && (t = null), void 0 === r && (r = !1);
        var s = new XMLHttpRequest;
        if (s.open("GET", e, !0), t)
            for (var i in t) s.setRequestHeader(i, t[i]);
        s.onload = function() {
            if (200 <= this.status && this.status < 400 && this.responseText) {
                var e = void 0;
                e = r ? this.responseText : JSON.parse(this.responseText), o(e)
            } else n({
                message: "Error Loading Data",
                statusCode: this.status
            })
        }, s.onerror = function(e) {
            n(e)
        }, s.send()
    }, zo);

    function zo() {}
    var Ko, Wo = (new no).assets(),
        Jo = (Xo.prototype.initializeFeaturesAndSpecialPurposes = function() {
            ot.oneTrustIABConsent.features = [], ot.oneTrustIABConsent.specialPurposes = [], vt.Groups.forEach(function(e) {
                if ("IAB2_FEATURE" === e.Type || "IAB2_SPL_PURPOSE" === e.Type) {
                    var t = {};
                    t.groupId = e.OptanonGroupId, t.purposeId = e.PurposeId, t.value = !0, "IAB2_FEATURE" === e.Type ? ot.oneTrustIABConsent.features.push(t) : ot.oneTrustIABConsent.specialPurposes.push(t)
                }
            })
        }, Xo.prototype.initGrpsAndHosts = function() {
            this.initializeGroupData(kt.consentableGrps), vt.showCookieList && (vt.allowHostOptOut || ot.genVenOptOutEnabled) ? this.initializeHostData(kt.consentableGrps) : (ot.hostsConsent = [], Wt.writeHstParam(Se.OPTANON_CONSENT))
        }, Xo.prototype.ensureHtmlGroupDataInitialised = function() {
            if (this.initGrpsAndHosts(), ot.showGeneralVendors && (Yt.populateGenVendorLists(), Yt.initGenVendorConsent()), vt.IsIabEnabled && (this.initializeIABData(), this.initializeFeaturesAndSpecialPurposes()), Dt.setOrUpdate3rdPartyIABConsentFlag(), Dt.setGeolocationInCookies(), vt.IsConsentLoggingEnabled) {
                var e = window.OneTrust.dataSubjectParams || {},
                    t = Pt.readCookieParam(Se.OPTANON_CONSENT, "iType"),
                    o = "",
                    n = !1;
                t && ot.isV2Stub && e.id && e.token && (n = !0, o = F[t]), qt.createConsentTxn(!1, o, !1, n)
            }
        }, Xo.prototype.initializeGroupData = function(e) {
            var t = Pt.readCookieParam(Se.OPTANON_CONSENT, "groups");
            t ? (Zt.synchroniseCookieGroupData(e), t = Pt.readCookieParam(Se.OPTANON_CONSENT, "groups"), ot.groupsConsent = At.strToArr(t)) : (ot.groupsConsent = [], e.forEach(function(e) {
                ot.groupsConsent.push(e.CustomGroupId + (Ht.checkIsActiveByDefault(e) && e.HasConsentOptOut ? ":1" : ":0"))
            }), vt.IsConsentLoggingEnabled && window.addEventListener("beforeunload", this.consentDefaulCall))
        }, Xo.prototype.initializeHostData = function(e) {
            var t = Pt.readCookieParam(Se.OPTANON_CONSENT, "hosts");
            if (t) Zt.synchroniseCookieHostData(), t = Pt.readCookieParam(Se.OPTANON_CONSENT, "hosts"), ot.hostsConsent = At.strToArr(t), e.forEach(function(e) {
                Ht.isAlwaysActiveGroup(e) && e.Hosts.length && e.Hosts.forEach(function(e) {
                    ot.oneTrustAlwaysActiveHosts.push(e.HostId)
                })
            });
            else {
                ot.hostsConsent = [];
                var r = {};
                e.forEach(function(e) {
                    var o = Ht.isAlwaysActiveGroup(e),
                        n = ot.syncRequired ? Zt.groupHasConsent(e) : Ht.checkIsActiveByDefault(e);
                    e.Hosts.length && e.Hosts.forEach(function(e) {
                        if (r[e.HostId]) Zt.updateHostStatus(e, n);
                        else {
                            r[e.HostId] = !0, o && ot.oneTrustAlwaysActiveHosts.push(e.HostId);
                            var t = Zt.isHostPartOfAlwaysActiveGroup(e.HostId);
                            ot.hostsConsent.push(e.HostId + (t || n ? ":1" : ":0"))
                        }
                    })
                })
            }
        }, Xo.prototype.consentDefaulCall = function() {
            var e = parseInt(Pt.readCookieParam(Se.OPTANON_CONSENT, me), 10);
            !isNaN(e) && 0 !== e || (uo.triggerGoogleAnalyticsEvent(fo, "Click", "No interaction"), vt.IsConsentLoggingEnabled && qt.createConsentTxn(!0), window.removeEventListener("beforeunload", Ko.consentDefaulCall))
        }, Xo.prototype.fetchAssets = function() {
            return a(this, void 0, void 0, function() {
                var t, o, n, r, s, i, l, a, c, d, p;
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return s = nt.moduleInitializer, i = Dt.isAlertBoxClosedAndValid(), l = !s.IsSuppressBanner || vt.ShowAlertNotice && !i && s.IsSuppressBanner && !Lt("#onetrust-banner-sdk").length, a = Lt("#ot-sdk-btn").length || Lt(".ot-sdk-show-settings").length || Lt(".optanon-show-settings").length, c = "IAB2" === vt.IabType ? !s.TenantFeatures.CookieV2RemoveSettingsIcon && !a : vt.PCShowPersistentCookiesHoverButton, d = "true" === ot.urlParams.get(et), ot.hideBanner = d, [4, Promise.all([!l || vt.NoBanner || d ? Promise.resolve(null) : jo.getBannerContent(), !s.IsSuppressPC || ot.isPCVisible ? jo.getPcContent() : Promise.resolve(null), c ? jo.getCSBtnContent() : Promise.resolve(null), jo.getCommonStyles()])];
                        case 1:
                            return p = e.sent(), t = p[0], o = p[1], n = p[2], r = p[3], t && (this.bannerGroup = {
                                name: t.name,
                                html: atob(t.html),
                                css: t.css
                            }), o && (this.preferenceCenterGroup = {
                                name: o.name,
                                html: atob(o.html),
                                css: o.css
                            }, nt.isV2Template = vt.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(o.name)), r && (this.commonStyles = r), this.cookieListGroup = {
                                name: Wo.name,
                                html: Wo.html,
                                css: vt.useRTL ? Wo.cssRTL : Wo.css
                            }, n && (this.csBtnGroup = {
                                name: "CookieSettingsButton",
                                html: atob(n.html),
                                css: n.css
                            }), [2]
                    }
                })
            })
        }, Xo.prototype.initializeIabPurposeConsentOnReload = function() {
            var t = this;
            kt.consentableIabGrps.forEach(function(e) {
                t.setIABConsent(e, !1), e.IsLegIntToggle = !0, t.setIABConsent(e, !1)
            })
        }, Xo.prototype.initializeIABData = function(o, n) {
            var r = this;
            void 0 === o && (o = !1), void 0 === n && (n = !1);
            var e = ot.oneTrustIABConsent;
            if (e.purpose = [], e.vendors = [], e.legIntVendors = [], e.specialFeatures = [], e.legimateInterest = [], ot.addtlVendors.vendorConsent = [], !e.IABCookieValue || o || n || Dt.reconsentRequired()) {
                kt.consentableIabGrps.forEach(function(e) {
                    if (n) r.setIABConsent(e, Ht.isAlwaysActiveGroup(e));
                    else {
                        var t = o && e.HasConsentOptOut;
                        r.setIABConsent(e, t), "IAB2_PURPOSE" === e.Type && (e.IsLegIntToggle = !0, r.setIABConsent(e, e.HasLegIntOptOut))
                    }
                });
                var t = o || !n && vt.VendorConsentModel === yo;
                Dt.setIABVendor(t), !Dt.reconsentRequired() || o || n || Dt.resetTCModel()
            } else this.initializeIabPurposeConsentOnReload(), Ut.populateGoogleConsent(), Ut.populateVendorAndPurposeFromCookieData()
        }, Xo.prototype.canSoftOptInInsertForGroup = function(e) {
            var t = Ht.getGroupById(e);
            if (t) {
                var o = t && !t.Parent ? t : Ht.getParentGroup(t.Parent);
                return "inactive landingpage" !== Ht.getGrpStatus(o).toLowerCase() || !oo.isLandingPage()
            }
        }, Xo.prototype.setIABConsent = function(e, t) {
            e.Type === at ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t), e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t)
        }, Xo.prototype.setIabPurposeConsent = function(o, n) {
            var r = !1;
            ot.oneTrustIABConsent.purpose = ot.oneTrustIABConsent.purpose.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || ot.oneTrustIABConsent.purpose.push(o.IabGrpId + ":" + n)
        }, Xo.prototype.setIabLegIntConsent = function(o, n) {
            var r = !1;
            ot.oneTrustIABConsent.legimateInterest = ot.oneTrustIABConsent.legimateInterest.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || ot.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ":" + n)
        }, Xo.prototype.setIabSpeciFeatureConsent = function(o, n) {
            var r = !1;
            ot.oneTrustIABConsent.specialFeatures = ot.oneTrustIABConsent.specialFeatures.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || ot.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ":" + n)
        }, Xo);

    function Xo() {}
    var Yo, $o = (Qo.prototype.getAllowAllButton = function() {
        return Lt("#onetrust-pc-sdk #accept-recommended-btn-handler")
    }, Qo.prototype.getSelectedVendors = function() {
        return Lt("#onetrust-pc-sdk " + Vt.P_Tgl_Cntr + " .ot-checkbox input:checked")
    }, Qo);

    function Qo() {}
    var Zo, en = (tn.prototype.setBannerFocus = function() {
        var e = Array.prototype.slice.call(Lt("#onetrust-banner-sdk .onetrust-vendors-list-handler").el),
            t = Array.prototype.slice.call(Lt('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el),
            o = Array.prototype.slice.call(Lt("#onetrust-banner-sdk .ot-bnr-save-handler").el),
            n = Array.prototype.slice.call(Lt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el),
            r = Array.prototype.concat.call(Array.prototype.slice.call(Lt("#onetrust-banner-sdk .category-switch-handler:not([disabled])").el), Array.prototype.slice.call(Lt("#onetrust-banner-sdk .ot-cat-lst button").el), e),
            s = Array.prototype.concat.call(t, r),
            i = Array.prototype.slice.call(Lt("#onetrust-banner-sdk .onetrust-close-btn-handler").el);
        kt.bannerName === Ue && (s = Array.prototype.concat.call(e, t));
        var l = Array.prototype.slice.call(Lt("#onetrust-banner-sdk #onetrust-accept-btn-handler").el),
            a = Array.prototype.slice.call(Lt("#onetrust-banner-sdk #onetrust-reject-all-handler").el),
            c = Array.prototype.concat.call(o, l, a, n);
        (kt.bannerName !== Me || vt.IsIabEnabled) && kt.bannerName !== qe && kt.bannerName !== Ke || (c = Array.prototype.concat.call(n, a, l));
        var d = Array.prototype.slice.call(Lt("#onetrust-banner-sdk .ot-gv-list-handler").el);
        kt.bannerName === We ? (s = Array.prototype.concat.call(d, s), c = Array.prototype.slice.call(Lt("#onetrust-banner-sdk #onetrust-button-group button").el)) : s = Array.prototype.concat.call(s, d), this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(Lt("#onetrust-banner-sdk #onetrust-cookie-btn").el), s, Array.prototype.slice.call(Lt("#onetrust-banner-sdk .banner-option-input").el), c, Array.prototype.slice.call(Lt("#onetrust-banner-sdk .ot-bnr-footer-logo a").el), i), this.banner = Lt("#onetrust-banner-sdk").el[0], nt.fp.CookieV2NoCursorFocus && !vt.ForceConsent || (vt.BannerFocus ? this.banner.focus() : this.bannerEl[0].focus())
    }, tn.prototype.handleBannerFocus = function(e, t) {
        var o = e.target,
            n = Zo.bannerEl,
            r = n.indexOf(o),
            s = n.length - 1,
            i = null;
        if (!vt.ForceConsent && vt.BannerFocus && (t && 0 === r || !t && r === s)) wt.resetFocusToBody();
        else if (this.banner === o) t && vt.ForceConsent ? i = n[s] : t || (i = n[0]);
        else
            for (; !i;) {
                var l = void 0;
                0 !== (l = t ? 0 === r ? n[s] : n[r - 1] : r === s ? n[0] : n[r + 1]).clientHeight || 0 !== l.offsetHeight ? i = l : t ? r-- : r++
            }
        i && (e.preventDefault(), i.focus())
    }, tn.prototype.setPCFocus = function(e) {
        if (e && !(e.length <= 0)) {
            for (var t = 0; t < e.length; t++) e[t].setAttribute("tabindex", "0");
            this.setFirstAndLast(e);
            var o = vt.ShowPreferenceCenterCloseButton,
                n = o ? this.getElementForFocus(e, vt.Popup ? 2 : 1, !0) : null,
                r = {
                    preventScroll: !0
                };
            this.firstItem ? o ? n.focus(r) : this.firstItem.focus(r) : e[0].focus(), this.firstItem && Lt(this.firstItem).on("keydown", Zo.firstItemHandler), this.lastItem && Lt(this.lastItem).on("keydown", Zo.lastItemHandler)
        }
    }, tn.prototype.setFirstAndLast = function(e) {
        this.firstItem = this.getElementForFocus(e, 0, !0), this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null
    }, tn.prototype.setLastItem = function() {
        var e = this.getPCElements(),
            t = this.getElementForFocus(e, e.length - 1, !1);
        t !== this.lastItem && (Lt(this.lastItem).off("keydown", Zo.lastItemHandler), this.lastItem = t, Lt(t).on("keydown", Zo.lastItemHandler))
    }, tn.prototype.getPCElements = function() {
        var e = "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk ." + Vt.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk .ot-pc-refuse-all-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
        return ot.pcLayer === S.CookieList ? e += " ,#onetrust-pc-sdk " + Vt.P_Content + " .powered-by-logo" : e += ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo", Array.prototype.slice.call(Lt(e).el)
    }, tn.prototype.getActiveTab = function() {
        return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]')
    }, tn.prototype.getElementForFocus = function(e, t, o) {
        for (var n = e[t]; o ? n && null === n.offsetParent && t < e.length - 1 : n && null === n.offsetParent && 0 < t;) n = e[t], o ? ++t : --t;
        return n
    }, tn.prototype.firstItemHandler = function(e) {
        var t = document.getElementById("onetrust-banner-sdk");
        if (9 === e.keyCode && e.shiftKey && Zo.firstItem !== t) e.preventDefault(), Zo.lastItem.focus();
        else {
            var o = "close-pc-btn-handler" === e.target.id && ("13" === e.keyCode || "32" === e.keyCode || "Enter" === e.code || "Space" === e.code);
            if (vt.Tab && ot.pcLayer === S.PrefCenterHome && !o) {
                var n = Zo.getActiveTab();
                n && (e.preventDefault(), n.focus())
            }
        }
    }, tn.prototype.lastItemHandler = function(e) {
        if (9 === e.keyCode && !e.shiftKey) {
            e.preventDefault();
            var t = ot.pcLayer === S.VendorList || ot.pcLayer === S.CookieList;
            vt.Tab && ot.isPCVisible && !vt.ShowPreferenceCenterCloseButton && !t ? Zo.getActiveTab().focus() : Zo.firstItem.focus()
        }
    }, tn);

    function tn() {
        this.bannerEl = []
    }
    var on, nn = (rn.prototype.getAllGroupElements = function() {
        return document.querySelectorAll("div#onetrust-pc-sdk " + Vt.P_Category_Grp + " " + Vt.P_Category_Item)
    }, rn.prototype.toggleGrpElements = function(e, t, o) {
        kt.pcName === Ze && vt.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var n = e.querySelectorAll('input[class*="category-switch-handler"]'), r = 0; r < n.length; r++) At.setCheckedAttribute(null, n[r], o), n[r] && vt.PCShowConsentLabels && (n[r].parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? vt.PCActiveText : vt.PCInactiveText);
        kt.legIntSettings.PAllowLI && kt.legIntSettings.PShowLegIntBtn && t.Type === lt && t.HasLegIntOptOut && on.updateLegIntBtnElement(e.querySelector(".ot-leg-btn-container"), o)
    }, rn.prototype.toogleAllSubGrpElements = function(e, t) {
        if (e.ShowSubgroup) {
            var o = e.CustomGroupId,
                n = this.getGroupElementByOptanonGroupId(o.toString());
            on.toogleSubGroupElement(n, t, e.IsLegIntToggle)
        } else this.updateHiddenSubGroupData(e, t)
    }, rn.prototype.toogleSubGroupElement = function(e, t, o, n) {
        void 0 === o && (o = !1), void 0 === n && (n = !1), kt.pcName === Ze && vt.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var r = e.querySelectorAll("li" + Vt.P_Subgrp_li), s = 0; s < r.length; s++) {
            var i = Ht.getGroupById(r[s].getAttribute("data-optanongroupid")),
                l = i.OptanonGroupId,
                a = Ht.getParentGroup(i.Parent);
            kt.legIntSettings.PAllowLI && kt.legIntSettings.PShowLegIntBtn && o && i.Type === lt && i.HasLegIntOptOut && a.ShowSubgroupToggle && on.updateLegIntBtnElement(r[s], t);
            var c = o ? "[id='ot-sub-group-id-" + l + "-leg-out']" : "[id='ot-sub-group-id-" + l + "']",
                d = r[s].querySelector('input[class*="cookie-subgroup-handler"]' + c);
            At.setCheckedAttribute(null, d, t), d && vt.PCShowConsentLabels && (d.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = t ? vt.PCActiveText : vt.PCInactiveText), n || (i.IsLegIntToggle = o, on.toggleGrpStatus(i, t), i.IsLegIntToggle = !1, Zt.toggleGroupHosts(i, t), ot.genVenOptOutEnabled && Zt.toggleGroupGenVendors(i, t))
        }
    }, rn.prototype.toggleGrpStatus = function(e, t) {
        var o = e.IsLegIntToggle && e.Type === lt ? t ? No : Oo : t ? wo : Bo;
        uo.triggerGoogleAnalyticsEvent(fo, o, e.GroupName + ": " + e.OptanonGroupId), t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e)
    }, rn.prototype.setInputID = function(e, t, o, n, r) {
        Lt(e).attr("id", t), Lt(e).attr("name", t), Lt(e).data("optanonGroupId", o), At.setCheckedAttribute(null, e, n), Lt(e).attr("aria-labelledby", r)
    }, rn.prototype.updateEnabledGroupData = function(e) {
        if (-1 < ht.indexOf(e.Type)) this.updateIabGroupData(e, !0);
        else {
            var t = on.getGroupVariable(),
                o = At.indexOf(t, e.CustomGroupId + ":0"); - 1 !== o && (t[o] = e.CustomGroupId + ":1")
        }
    }, rn.prototype.updateDisabledGroupData = function(e) {
        if (-1 < ht.indexOf(e.Type)) this.updateIabGroupData(e, !1);
        else if (e.Status !== Be) {
            var t = on.getGroupVariable(),
                o = At.indexOf(t, e.CustomGroupId + ":1"); - 1 !== o && (t[o] = e.CustomGroupId + ":0")
        }
    }, rn.prototype.updateIabGroupData = function(e, t) {
        if (e.Type === at) this.updateIabSpecialFeatureData(e.IabGrpId, t);
        else {
            var o = e.IsLegIntToggle ? ot.vendors.selectedLegInt : ot.vendors.selectedPurpose;
            this.updateIabPurposeData(e.IabGrpId, t, o)
        }
    }, rn.prototype.isAllSubgroupsDisabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return on.isGroupActive(e)
        })
    }, rn.prototype.isAllSubgroupsEnabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return on.IsGroupInActive(e)
        })
    }, rn.prototype.toggleGroupHtmlElement = function(e, t, o) {
        if (kt.legIntSettings.PAllowLI && kt.legIntSettings.PShowLegIntBtn && e.Type === lt && e.HasLegIntOptOut) {
            var n = document.querySelector("[data-el-id=" + t + "]");
            n && this.updateLegIntBtnElement(n, o)
        }
        var r = Lt("#ot-group-id-" + t).el[0];
        At.setCheckedAttribute(null, r, o), r && vt.PCShowConsentLabels && (r.parentElement.querySelector(".ot-label-status").innerHTML = o ? vt.PCActiveText : vt.PCInactiveText)
    }, rn.prototype.updateLegIntBtnElement = function(e, t) {
        var o = kt.legIntSettings,
            n = e.querySelector(".ot-obj-leg-btn-handler"),
            r = e.querySelector(".ot-remove-objection-handler");
        t ? (n.classList.add("ot-inactive-leg-btn"), n.classList.add("ot-leg-int-enabled"), n.classList.remove("ot-active-leg-btn")) : (n.classList.add("ot-active-leg-btn"), n.classList.remove("ot-inactive-leg-btn"), n.classList.remove("ot-leg-int-enabled")), n.querySelector("span").innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText, bt(r, "display: " + (t ? "none" : "inline-block") + ";", !0)
    }, rn.prototype.isGroupActive = function(e) {
        return -1 < ht.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== _t.inArray(e.CustomGroupId + ":1", on.getGroupVariable())
    }, rn.prototype.safeFormattedGroupDescription = function(e) {
        return e && e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, "<br>") : ""
    }, rn.prototype.canInsertForGroup = function(e, t) {
        void 0 === t && (t = !1);
        var o, n = null != e && void 0 !== e,
            r = Pt.readCookieParam(Se.OPTANON_CONSENT, "groups"),
            s = ot.groupsConsent.join(","),
            i = Pt.readCookieParam(Se.OPTANON_CONSENT, "hosts"),
            l = ot.hostsConsent.join(",");
        if (t) return !0;
        r === s && i === l || Ko.ensureHtmlGroupDataInitialised(), o = At.contains(ot.groupsConsent.concat(ot.hostsConsent), e + ":1");
        var a = this.doesHostExist(e),
            c = this.doesGroupExist(e),
            d = !!a || o && Ko.canSoftOptInInsertForGroup(e);
        return !(!n || !(o && d || !c && !a))
    }, rn.prototype.setAllowAllButton = function() {
        var t = 0,
            e = vt.Groups.some(function(e) {
                if (-1 === gt.indexOf(e.Type)) return on.IsGroupInActive(e) && t++, e.SubGroups.some(function(e) {
                    return on.IsGroupInActive(e)
                }) && t++, 1 <= t
            }),
            o = Yo.getAllowAllButton();
        return e ? o.show("inline-block") : o.hide(), Zo.lastItem && Zo.setLastItem(), e
    }, rn.prototype.getGroupVariable = function() {
        return ot.groupsConsent
    }, rn.prototype.IsGroupInActive = function(e) {
        return -1 < ht.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : !(-1 < gt.indexOf(e.Type)) && -1 === _t.inArray(e.CustomGroupId + ":1", on.getGroupVariable())
    }, rn.prototype.updateIabPurposeData = function(t, e, o) {
        var n = At.findIndex(o, function(e) {
            return e.split(":")[0] === t
        });
        o[n = -1 === n ? Number(t) : n] = t + ":" + e
    }, rn.prototype.updateIabSpecialFeatureData = function(t, e) {
        var o = At.findIndex(ot.vendors.selectedSpecialFeatures, function(e) {
            return e.split(":")[0] === t
        });
        o = -1 === o ? Number(t) : o, ot.vendors.selectedSpecialFeatures[o] = t + ":" + e
    }, rn.prototype.getGroupElementByOptanonGroupId = function(e) {
        return document.querySelector("#onetrust-pc-sdk " + Vt.P_Category_Grp + " " + Vt.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]')
    }, rn.prototype.updateHiddenSubGroupData = function(e, t) {
        e.SubGroups.forEach(function(e) {
            on.toggleGrpStatus(e, t), Zt.toggleGroupHosts(e, t), ot.genVenOptOutEnabled && Zt.toggleGroupGenVendors(e, t)
        })
    }, rn.prototype.isIabPurposeActive = function(e) {
        var t;
        return t = e.Type === at ? ot.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? ot.vendors.selectedLegInt : ot.vendors.selectedPurpose, _t.inArray(e.IabGrpId + ":true", t)
    }, rn.prototype.doesGroupExist = function(e) {
        return !!Ht.getGroupById(e)
    }, rn.prototype.doesHostExist = function(e) {
        var t = ot.hostsConsent;
        return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1")
    }, rn);

    function rn() {}
    var sn, ln = (an.prototype.insertCookiePolicyHtml = function() {
        if (Lt(this.ONETRUST_COOKIE_POLICY).length) {
            var e, t = document.createDocumentFragment();
            if (Ko.cookieListGroup) {
                var o = vt.CookiesV2NewCookiePolicy ? ".ot-sdk-cookie-policy" : "#ot-sdk-cookie-policy-v2",
                    n = document.createElement("div");
                Lt(n).html(Ko.cookieListGroup.html), n.removeChild(n.querySelector(o)), e = n.querySelector(".ot-sdk-cookie-policy"), vt.useRTL && Lt(e).attr("dir", "rtl")
            }
            e.querySelector("#cookie-policy-title").innerHTML = vt.CookieListTitle || "", e.querySelector("#cookie-policy-description").innerHTML = vt.CookieListDescription || "";
            var r = e.querySelector("section"),
                s = e.querySelector("section tbody tr"),
                i = null,
                l = null;
            vt.CookiesV2NewCookiePolicy || (i = e.querySelector("section.subgroup"), l = e.querySelector("section.subgroup tbody tr"), Lt(e).el.removeChild(e.querySelector("section.subgroup"))), Lt(e).el.removeChild(e.querySelector("section")), !Lt("#ot-sdk-cookie-policy").length && Lt("#optanon-cookie-policy").length ? Lt("#optanon-cookie-policy").append('<div id="ot-sdk-cookie-policy"></div>') : (Lt("#ot-sdk-cookie-policy").html(""), Lt("#optanon-cookie-policy").html(""));
            for (var a = 0; a < vt.Groups.length; a++)
                if (vt.CookiesV2NewCookiePolicy) this.insertGroupHTMLV2(vt, vt.Groups, r, a, s, e, t);
                else if (this.insertGroupHTML(vt, vt.Groups, r, a, s, e, t), vt.Groups[a].ShowSubgroup)
                for (var c = 0; c < vt.Groups[a].SubGroups.length; c++) this.insertGroupHTML(vt, vt.Groups[a].SubGroups, i, c, l, e, t)
        }
    }, an.prototype.insertGroupHTMLV2 = function(l, e, t, o, a, n, r) {
        var s, c, d, i = this;

        function p(e) {
            return u.querySelector(e)
        }
        s = e[o];
        var u = t.cloneNode(!0),
            h = e[o].SubGroups;
        Lt(p("tbody")).html("");
        var g = s.Hosts.slice(),
            C = s.FirstPartyCookies.slice(),
            y = g.length || C.length ? s.GroupName : "";
        if (e[o].ShowSubgroup && h.length) {
            var f = u.querySelector("section.ot-sdk-subgroup ul li");
            h.forEach(function(e) {
                var t = f.cloneNode(!0);
                g = g.concat(e.Hosts), C = C.concat(e.FirstPartyCookies), (e.Hosts.length || e.FirstPartyCookies.length) && (y += "," + e.GroupName), Lt(t.querySelector(".ot-sdk-cookie-policy-group")).html(e.GroupName), Lt(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(i.groupsClass.safeFormattedGroupDescription(e)), Lt(f.parentElement).append(t)
            }), u.querySelector("section.ot-sdk-subgroup ul").removeChild(f)
        } else u.removeChild(u.querySelector("section.ot-sdk-subgroup"));
        l.IsLifespanEnabled ? Lt(p("th.ot-life-span")).el.innerHTML = l.LifespanText : Lt(p("thead tr")).el.removeChild(Lt(p("th.ot-life-span")).el), Lt(p("th.ot-cookies")).el.innerHTML = l.CookiesText, Lt(p("th.ot-host")).el.innerHTML = l.CategoriesText, Lt(p("th.ot-cookies-type")).el.innerHTML = l.CookiesUsedText, c = this.transformFirstPartyCookies(C, g);
        var k = !1;
        c.some(function(e) {
            return e.Description
        }) ? k = !0 : Lt(p("thead tr")).el.removeChild(Lt(p("th.ot-host-description")).el), Lt(p(".ot-sdk-cookie-policy-group")).html(s.GroupName), Lt(p(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(s));
        for (var v = function(e) {
                function t(e) {
                    return o.querySelector(e)
                }
                var o = a.cloneNode(!0);
                Lt(t(".ot-cookies-td span")).text(""), Lt(t(".ot-life-span-td span")).text(""), Lt(t(".ot-cookies-type span")).text(""), Lt(t(".ot-cookies-td .ot-cookies-td-content")).html(""), Lt(t(".ot-host-td")).html(""), Lt(t(".ot-host-description-td")).html('<span class="ot-mobile-border"></span><p>' + c[e].Description + "</p> ");
                for (var n = [], r = [], s = 0; s < c[e].Cookies.length; s++)(d = c[e].Cookies[s]).IsSession ? n.push(l.LifespanTypeText) : n.push(wt.getDuration(d)), r.push(c[e].Type ? '<a href="https://cookiepedia.co.uk/cookies/' + d.Name + '" rel="noopener" target="_blank" aria-label="' + d.Name + " " + vt.NewWinTxt + '">' + d.Name + "</a>" : d.Name);
                Lt(t(".ot-host-td")).append('<span class="ot-mobile-border"></span>'), t(".ot-host-td").setAttribute("data-label", l.CategoriesText), t(".ot-cookies-td").setAttribute("data-label", l.CookiesText), t(".ot-cookies-type").setAttribute("data-label", l.CookiesUsedText), t(".ot-life-span-td").setAttribute("data-label", l.LifespanText);
                var i = c[e].DisplayName || c[e].HostName;
                Lt(t(".ot-host-td")).append(c[e].Type ? i : '<a href="https://cookiepedia.co.uk/host/' + d.Host + '" rel="noopener" target="_blank" aria-label="' + i + " " + vt.NewWinTxt + '">' + i + "</a>"), t(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML("beforeend", r.join(", ")), t(".ot-life-span-td .ot-life-span-td-content").innerText = n.join(", "), t(".ot-cookies-type .ot-cookies-type-td-content").innerText = c[e].Type ? vt.firstPartyTxt : vt.thirdPartyTxt, l.IsLifespanEnabled || o.removeChild(t("td.ot-life-span-td")), k || o.removeChild(t("td.ot-host-description-td")), Lt(p("tbody")).append(o)
            }, b = 0; b < c.length; b++) v(b);
        0 === c.length ? u.removeChild(u.querySelector("table")) : Lt(p("caption")).el.innerHTML = y, Lt(n).append(u), Lt(r).append(n), Lt("#ot-sdk-cookie-policy").append(r)
    }, an.prototype.insertGroupHTML = function(l, e, t, o, a, n, r) {
        var s, i, c, d;

        function p(e) {
            return u.querySelector(e)
        }
        s = e[o];
        var u = t.cloneNode(!0);
        Lt(p("caption")).el.innerHTML = s.GroupName, Lt(p("tbody")).html(""), Lt(p("thead tr")), l.IsLifespanEnabled ? Lt(p("th.life-span")).el.innerHTML = l.LifespanText : Lt(p("thead tr")).el.removeChild(Lt(p("th.life-span")).el), Lt(p("th.cookies")).el.innerHTML = l.CookiesText, Lt(p("th.host")).el.innerHTML = l.CategoriesText;
        var h = !1;
        if (s.Hosts.some(function(e) {
                return e.description
            }) ? h = !0 : Lt(p("thead tr")).el.removeChild(Lt(p("th.host-description")).el), Lt(p(".ot-sdk-cookie-policy-group")).html(s.GroupName), Lt(p(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(s)), 0 < s.FirstPartyCookies.length) {
            Lt(p(".cookies-used-header")).html(l.CookiesUsedText), Lt(p(".cookies-list")).html("");
            for (var g = 0; g < s.FirstPartyCookies.length; g++) i = s.FirstPartyCookies[g], Lt(p(".cookies-list")).append("<li> " + wt.getCookieLabel(i, l.AddLinksToCookiepedia) + " <li>")
        } else u.removeChild(p(".cookies-used-header")), u.removeChild(p(".cookies-list"));
        c = s.Hosts;
        for (var C = function(e) {
                function t(e) {
                    return o.querySelector(e)
                }
                var o = a.cloneNode(!0);
                Lt(t(".cookies-td ul")).html(""), Lt(t(".life-span-td ul")).html(""), Lt(t(".host-td")).html(""), Lt(t(".host-description-td")).html('<span class="ot-mobile-border"></span><p>' + c[e].Description + "</p> ");
                for (var n = 0; n < c[e].Cookies.length; n++) {
                    var r = "";
                    r = (d = c[e].Cookies[n]).IsSession ? l.LifespanTypeText : 0 === d.Length ? "<1 " + l.LifespanDurationText : d.Length + " " + l.LifespanDurationText;
                    var s = l.IsLifespanEnabled ? "&nbsp;(" + r + ")" : "";
                    if (Lt(t(".cookies-td ul")).append("<li> " + d.Name + " " + s + " </li>"), l.IsLifespanEnabled) {
                        var i = d.Length ? d.Length + " days" : "N/A";
                        Lt(t(".life-span-td ul")).append("<li>" + i + "</li>")
                    }
                    0 === n && (Lt(t(".host-td")).append('<span class="ot-mobile-border"></span>'), Lt(t(".host-td")).append('<a href="https://cookiepedia.co.uk/host/' + d.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (c[e].DisplayName || c[e].HostName) + " " + vt.NewWinTxt + '">' + (c[e].DisplayName || c[e].HostName) + "</a>"))
                }
                h || o.removeChild(t("td.host-description-td")), Lt(p("tbody")).append(o)
            }, y = 0; y < c.length; y++) C(y);
        0 === c.length && Lt(p("table")).el.removeChild(Lt(p("thead")).el), Lt(n).append(u), Lt(r).append(n), Lt("#ot-sdk-cookie-policy").append(r)
    }, an.prototype.transformFirstPartyCookies = function(e, t) {
        var o = t.slice();
        return e.forEach(function(t) {
            o.some(function(e) {
                if (e.HostName === t.Host) return e.Cookies.push(t), !0
            }) || o.unshift({
                HostName: t.Host,
                DisplayName: t.Host,
                HostId: "",
                Description: "",
                Type: vt.firstPartyTxt,
                Cookies: [t]
            })
        }), o
    }, an);

    function an() {
        this.groupsClass = on, this.ONETRUST_COOKIE_POLICY = "#ot-sdk-cookie-policy, #optanon-cookie-policy"
    }
    var cn, dn = function() {};
    var pn, un = (hn.prototype.updateFilterSelection = function(e) {
        var t, o;
        void 0 === e && (e = !1), o = e ? (t = ot.filterByCategories, "data-optanongroupid") : (t = ot.filterByIABCategories, "data-purposeid");
        for (var n = Lt("#onetrust-pc-sdk .category-filter-handler").el, r = 0; r < n.length; r++) {
            var s = n[r].getAttribute(o); - 1 < t.indexOf(s) ? n[r].checked = !0 : n[r].checked = !1
        }
    }, hn.prototype.cancelHostFilter = function() {
        for (var e = Lt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid");
            e[t].checked && ot.filterByCategories.indexOf(o) < 0 && (e[t].checked = "")
        }
    }, hn.prototype.updateHostFilterList = function() {
        for (var e = Lt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid");
            if (e[t].checked && ot.filterByCategories.indexOf(o) < 0) ot.filterByCategories.push(o);
            else if (!e[t].checked && -1 < ot.filterByCategories.indexOf(o)) {
                var n = ot.filterByCategories;
                ot.filterByCategories.splice(n.indexOf(o), 1)
            }
        }
        return ot.filterByCategories
    }, hn.prototype.InitializeHostList = function() {
        ot.hosts.hostTemplate = Lt(Vt.P_Vendor_List + " " + Vt.P_Host_Cntr + " li").el[0].cloneNode(!0), ot.hosts.hostCookieTemplate = Lt(Vt.P_Vendor_List + " " + Vt.P_Host_Cntr + " " + Vt.P_Host_Opt + " li").el[0].cloneNode(!0)
    }, hn.prototype.getCookiesForGroup = function(t) {
        var o = [],
            n = [];
        return t.FirstPartyCookies.length && t.FirstPartyCookies.forEach(function(e) {
            n.push(r(r({}, e), {
                groupName: t.GroupName
            }))
        }), t.Hosts.length && t.Hosts.forEach(function(e) {
            o.push(r(r({}, e), {
                isActive: "always active" === Ht.getGrpStatus(t).toLowerCase(),
                groupName: t.GroupName,
                Type: j.Host
            }))
        }), {
            firstPartyCookiesList: n,
            thirdPartyCookiesList: o
        }
    }, hn.prototype.reactivateSrcTag = function(e) {
        var t = ["src"];
        e.setAttribute(t[0], e.getAttribute("data-" + t[0])), e.removeAttribute("data-src")
    }, hn.prototype.reactivateScriptTag = function(e) {
        var t = e.parentNode,
            o = document.createElement(e.tagName);
        o.innerHTML = e.innerHTML;
        var n = e.attributes;
        if (0 < n.length)
            for (var r = 0; r < n.length; r++) "type" !== n[r].name ? o.setAttribute(n[r].name, n[r].value, !0) : o.setAttribute("type", "text/javascript", !0);
        t.appendChild(o), t.removeChild(e)
    }, hn.prototype.reactivateTag = function(e, t) {
        var o = e.className.match(/optanon-category(-[a-zA-Z0-9]+)+($|\s)/)[0].split(/optanon-category-/i)[1].split("-"),
            n = !0;
        if (o && 0 < o.length) {
            for (var r = 0; r < o.length; r++)
                if (!on.canInsertForGroup(o[r].trim())) {
                    n = !1;
                    break
                }
            n && (t ? this.reactivateSrcTag(e) : this.reactivateScriptTag(e))
        }
    }, hn.prototype.substitutePlainTextScriptTags = function() {
        var t = this,
            e = [].slice.call(document.querySelectorAll('script[class*="optanon-category"]')),
            o = document.querySelectorAll('*[class*="optanon-category"]');
        Array.prototype.forEach.call(o, function(e) {
            "SCRIPT" !== e.tagName && e.hasAttribute("data-src") && t.reactivateTag(e, !0)
        }), Array.prototype.forEach.call(e, function(e) {
            e.hasAttribute("type") && "text/plain" === e.getAttribute("type") && t.reactivateTag(e, !1)
        })
    }, hn);

    function hn() {}
    var gn, Cn = (yn.prototype.getSearchQuery = function(e) {
        var t = this,
            o = e.trim().split(/\s+/g);
        return new RegExp(o.map(function(e) {
            return t.escapeRegExp(e)
        }).join("|") + "(.+)?", "gi")
    }, yn.prototype.escapeRegExp = function(e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    }, yn.prototype.setGlobalFilteredList = function(e) {
        return ot.currentGlobalFilteredList = e
    }, yn.prototype.filterList = function(t, e, n) {
        var o = n && n.length;
        if ("" === t && !o) return this.setGlobalFilteredList(e);
        if (o) {
            var r = Lt("#onetrust-pc-sdk " + Vt.P_Fltr_Options + " input").el.length,
                s = [],
                i = !1;
            r !== n.length ? e.forEach(function(o) {
                i = !0, o.vendorName && n.forEach(function(e) {
                    var t = parseInt(kt.iabGrpIdMap[e]); - 1 < e.indexOf("IFEV2_") ? (o.features || []).forEach(function(e) {
                        e.featureId === t && s.push(o)
                    }) : -1 < e.indexOf("ISFV2_") ? o.specialFeatures.forEach(function(e) {
                        e.featureId === t && s.push(o)
                    }) : -1 < e.indexOf("ISPV2_") ? (o.specialPurposes || []).forEach(function(e) {
                        e.purposeId === t && s.push(o)
                    }) : (o.purposes.forEach(function(e) {
                        e.purposeId === t && s.push(o)
                    }), o.legIntPurposes.forEach(function(e) {
                        e.purposeId === t && s.push(o)
                    }))
                })
            }) : s = e, i && (s = s.filter(function(e, t, o) {
                return o.indexOf(e) === t
            })), this.setGlobalFilteredList(s)
        }
        return "" === t ? ot.currentGlobalFilteredList : ot.currentGlobalFilteredList.filter(function(e) {
            if (e.vendorName) return e.vendorName.toLowerCase().includes(t.toLowerCase())
        })
    }, yn.prototype.loadVendorList = function(e, t) {
        void 0 === e && (e = "");
        var o = ot.vendors;
        ot.currentGlobalFilteredList = o.list, e ? (o.searchParam = e, ot.filterByIABCategories = [], pn.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = "" : t = ot.filterByIABCategories;
        var n = this.filterList(o.searchParam, o.list, t);
        Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Content).el[0].scrollTop = 0, this.initVendorsData(e, n)
    }, yn.prototype.searchVendors = function(e, t, o, n) {
        if (n) {
            var r = this.getSearchQuery(n),
                s = 0;
            for (var i in t)
                if (i) {
                    var l = o === Q.GoogleVendor ? i : t[i].VendorCustomId,
                        a = Lt("" + e.vendorAccBtn + l).el[0].parentElement;
                    r.lastIndex = 0, r.test(t[i][e.name]) ? (a.setAttribute("data-display", "show"), bt(a, this._displayNull, !0), s++) : bt(a, "display: none;", !0)
                }
            0 === s ? (Lt(e.accId).hide(), o === Q.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === Q.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0, Lt(e.accId).show()), this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, n)
        } else
            for (var c = Lt(" " + e.venListId + ' li[style^="display"]').el, d = 0; d < c.length; d++) c[d].setAttribute("data-display", "show"), bt(c[d], this._displayNull, !0);
        var p = Lt("#onetrust-pc-sdk " + e.selectAllEvntHndlr).el[0];
        document.querySelector(e.venListId + ' li[data-display^="show"] ' + e.ctgl + " > input[checked]") ? At.setCheckedAttribute("", p, !0) : At.setCheckedAttribute("", p, !1), document.querySelector(e.venListId + ' li[data-display^="show"] ' + e.ctgl + " > input:not([checked])") ? p.parentElement.classList.add("line-through") : p.parentElement.classList.remove("line-through")
    }, yn.prototype.initGoogleVendors = function() {
        this.populateAddtlVendors(ot.addtlVendorsList), this.venAdtlSelAllTglEvent()
    }, yn.prototype.initGenVendors = function() {
        this.populateGeneralVendors(), vt.GenVenOptOut && vt.GeneralVendors && vt.GeneralVendors.length && this.genVenSelectAllTglEvent()
    }, yn.prototype.resetAddtlVendors = function() {
        gn.searchVendors(gn.googleSearchSelectors, ot.addtlVendorsList, Q.GoogleVendor), this.showConsentHeader()
    }, yn.prototype.venAdtlSelAllTglEvent = function() {
        gn.selectAllEventHandler({
            vendorsList: '#ot-addtl-venlst li[data-display^="show"] .ot-ven-adtlctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-adtlvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-adtlven-handler"
        })
    }, yn.prototype.genVenSelectAllTglEvent = function() {
        var e = {
            vendorsList: Vt.P_Gven_List + " .ot-ven-gvctgl input",
            selAllCntr: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-gnven-handler"
        };
        gn.selectAllEventHandler(e)
    }, yn.prototype.selectAllEventHandler = function(e) {
        for (var t = Lt(e.vendorsList).el, o = Lt(e.selAllCntr).el[0], n = Lt(e.selAllChkbox).el[0], r = !0, s = 0; s < t.length; s++) {
            if (!t[s].checked) {
                r = !1;
                break
            }
            r = !0
        }
        o && (r ? o.classList.remove("line-through") : o.classList.add("line-through")), n.checked = !0;
        for (var i = 0; i < t.length && !t[i].checked; i++) i !== t.length - 1 || t[i].checked || (n.checked = !1);
        At.setCheckedAttribute("", n, n.checked)
    }, yn.prototype.vendorLegIntToggleEvent = function() {
        for (var e = Lt(Vt.P_Vendor_Container + ' li[data-display^="show"] .' + Vt.P_Ven_Ltgl + " input").el, t = Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Vendor_Leg_El).el[0], o = Lt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var s = 0; s < e.length && !e[s].checked; s++) s !== e.length - 1 || e[s].checked || (o.checked = !1);
        At.setCheckedAttribute("", o, o.checked)
    }, yn.prototype.vendorsListEvent = function() {
        for (var e = Lt(Vt.P_Vendor_Container + ' li[data-display^="show"] .' + Vt.P_Ven_Ctgl + " input").el, t = Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Vendor_Consent_El).el[0], o = Lt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var s = 0; s < e.length && !e[s].checked; s++) s !== e.length - 1 || e[s].checked || (o.checked = !1);
        At.setCheckedAttribute("", o, o.checked)
    }, yn.prototype.showEmptyResults = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = Lt("#onetrust-pc-sdk #no-results");
        e ? this.setNoResultsContent(t, o) : (Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Content).removeClass("no-results"), n.length && n.remove())
    }, yn.prototype.playSearchStatus = function(e) {
        var t = e ? document.querySelectorAll(Vt.P_Host_Cntr + " > li") : document.querySelectorAll(Vt.P_Vendor_Container + ' li:not([style$="none;"]),' + Vt.P_Gven_List + ' li:not([style$="none;"])'),
            o = t.length,
            n = Lt('#onetrust-pc-sdk [role="status"]');
        o ? n.text(t.length + " " + (e ? "host" : "vendor") + (1 < o ? "s" : "") + " returned.") : n.el[0].textContent = ""
    }, yn.prototype.setNoResultsContent = function(e, t) {
        void 0 === t && (t = !1);
        var o = Lt("#onetrust-pc-sdk #no-results").el[0];
        if (!o) {
            var n = document.createElement("div"),
                r = document.createElement("p"),
                s = document.createTextNode(" did not match any " + (t ? "hosts." : "vendors.")),
                i = document.createElement("span");
            return n.id = "no-results", i.id = "user-text", i.innerText = e, r.appendChild(i), r.appendChild(s), n.appendChild(r), Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Content).addClass("no-results"), Lt("#vendor-search-handler").el[0].setAttribute("aria-describedby", n.id), Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Content).append(n)
        }
        o.querySelector("span").innerText = e
    }, yn.prototype.searchHostList = function(e) {
        var t = ot.currentGlobalFilteredList;
        e && (t = this.searchList(e, t)), this.initHostData(e, t)
    }, yn.prototype.searchList = function(e, t) {
        var o = this.getSearchQuery(e);
        return t.filter(function(e) {
            return o.lastIndex = 0, o.test(e.DisplayName || e.HostName)
        })
    }, yn.prototype.initHostData = function(e, d) {
        var p = this;
        ot.optanonHostList = d;
        var u = nt.isV2Template,
            h = kt.pcName,
            g = ot.cookieListType === z.GenVen || ot.cookieListType === z.HostAndGenVen ? vt.GenVenOptOut : vt.allowHostOptOut,
            C = !1;
        this.setBackBtnTxt(), Lt(Vt.P_Vendor_List + " #select-all-text-container p").html(vt.PCenterAllowAllConsentText), Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Content + " ul" + Vt.P_Host_Cntr).html(""), this.showEmptyResults(d && 0 === d.length, e, !0), !nt.isV2Template && h === Ze || Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Title).html(vt.PCenterCookiesListText), nt.isV2Template && Lt("#ot-sel-blk span:first-child").html(vt.PCenterAllowAllConsentText || vt.ConsentText);
        for (var t = function(o) {
                var n = ot.hosts.hostTemplate.cloneNode(!0),
                    e = n.querySelector("." + Vt.P_Host_Bx),
                    t = d[o].DisplayName || d[o].HostName;
                e && At.setHtmlAttributes(e, {
                    id: "host-" + o,
                    name: "host-" + o,
                    "aria-label": t + " " + vt.PCViewCookiesText,
                    "aria-controls": "ot-host-acc-txt-" + o
                });
                var r = n.querySelector(Vt.P_Acc_Txt);
                if (r && At.setHtmlAttributes(r, {
                        id: "ot-host-acc-txt-" + o,
                        role: "region",
                        "aria-labelledby": e.id
                    }), !g || d[o].isFirstParty) {
                    var s = n.querySelector(".ot-host-tgl");
                    s && s.parentElement.removeChild(s)
                } else {
                    var i = void 0;
                    u ? ((i = cn.chkboxEl.cloneNode(!0)).classList.add("ot-host-tgl"), i.querySelector("input").classList.add("host-checkbox-handler"), h === Ze ? n.querySelector(Vt.P_Host_Hdr).insertAdjacentElement("beforeBegin", i) : n.querySelector(Vt.P_Tgl_Cntr).insertAdjacentElement("beforeEnd", i)) : i = n.querySelector(".ot-host-tgl"), At.setHtmlAttributes(i.querySelector("input"), {
                        id: "ot-host-chkbox-" + o,
                        "aria-label": t,
                        hostId: d[o].HostId,
                        ckType: d[o].Type
                    }), i.querySelector("label").setAttribute("for", "ot-host-chkbox-" + o), (d[o].Type === j.GenVendor ? ot.genVendorsConsent[d[o].HostId] : -1 !== ot.hostsConsent.indexOf(d[o].HostId + ":1")) ? (At.setCheckedAttribute(null, i.querySelector("input"), !0), d[o].isActive ? At.setDisabledAttribute(null, i.querySelector("input"), !0) : C = C || !0) : (C = !0, At.setCheckedAttribute(null, i.querySelector("input"), !1)), i.querySelector(Vt.P_Label_Txt).innerText = t
                }
                if (vt.PCAccordionStyle === K.PlusMinus) n.querySelector(Vt.P_Acc_Header).insertAdjacentElement("afterBegin", cn.plusMinusEl.cloneNode(!0));
                else if (u) {
                    var l = cn.arrowEl.cloneNode(!0);
                    h === Ze ? n.querySelector(Vt.P_Host_View_Cookies).insertAdjacentElement("afterend", l) : n.querySelector(Vt.P_Tgl_Cntr).insertAdjacentElement("beforeEnd", l)
                }
                vt.AddLinksToCookiepedia && !d[o].isFirstParty && (t = '\n                    <a  class="cookie-label"\n                        href="http://cookiepedia.co.uk/host/' + d[o].HostName + '"\n                        rel="noopener"\n                        target="_blank"\n                    >\n                        ' + t + '&nbsp;<span class="ot-scrn-rdr">' + vt.NewWinTxt + "</span>\n                    </a>\n                "), n.querySelector(Vt.P_Host_Title).innerHTML = t, n.querySelector(Vt.P_Host_Desc).innerText = d[o].Description, d[o].PrivacyPolicy && vt.pcShowCookieHost && n.querySelector(Vt.P_Host_Desc).insertAdjacentHTML("afterend", '<a href="' + d[o].PrivacyPolicy + '" rel="noopener" target="_blank">' + (u ? vt.PCGVenPolicyTxt : vt.PCCookiePolicyText) + '&nbsp;<span class="ot-scrn-rdr">' + vt.NewWinTxt + "</span></a>");
                var a = n.querySelector(Vt.P_Host_View_Cookies);
                if (ot.showGeneralVendors && !d[o].Cookies.length ? (At.removeChild(a), Lt(n).addClass("ot-hide-acc")) : vt.PCViewCookiesText && (a.innerHTML = vt.PCViewCookiesText), !d[o].Description || !vt.pcShowCookieHost) {
                    var c = n.querySelector(Vt.P_Host_Desc);
                    c.parentElement.removeChild(c)
                }
                Lt(n.querySelector(Vt.P_Host_Opt)).html(""), d[o].Cookies.forEach(function(e) {
                    var t = p.getCookieElement(e, d[o]);
                    Lt(n.querySelector(Vt.P_Host_Opt)).append(t)
                }), Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Content + " ul" + Vt.P_Host_Cntr).append(n)
            }, o = 0; o < d.length; o++) t(o);
        var n = 1 === d.length && d[0].HostName === vt.PCFirstPartyCookieListText;
        if (!vt.allowHostOptOut && !ot.genVenOptOutEnabled || n) Lt("#onetrust-pc-sdk " + Vt.P_Select_Cntr).addClass("ot-hide");
        else {
            At.setDisabledAttribute("#onetrust-pc-sdk #select-all-hosts-groups-handler", null, !C);
            for (var r = Lt("#onetrust-pc-sdk " + Vt.P_Host_Cntr + " .ot-host-tgl input").el, s = 0; s < r.length; s++) r[s].addEventListener("click", this.hostsListEvent);
            Lt("#onetrust-pc-sdk " + Vt.P_Select_Cntr).removeClass("ot-hide"), this.hostsListEvent()
        }
    }, yn.prototype.hostsListEvent = function() {
        for (var e = Lt("#onetrust-pc-sdk " + Vt.P_Host_Cntr + " .ot-host-tgl input").el, t = Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Host_El).el[0], o = Lt("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0], n = Lt("#onetrust-pc-sdk " + Vt.P_Cnsnt_Header).el[0], r = !0, s = 0; s < e.length; s++) {
            if (!e[s].checked) {
                r = !1;
                break
            }
            r = !0
        }
        r ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        At.setCheckedAttribute("", o, o.checked), o && n && o.setAttribute("aria-label", n.textContent + " " + vt.PCenterSelectAllVendorsText)
    }, yn.prototype.loadHostList = function(e, o) {
        void 0 === e && (e = "");
        var n = [],
            r = [],
            t = [];
        if (ot.cookieListType !== z.GenVen && (vt.Groups.forEach(function(e) {
                g(e.SubGroups, [e]).forEach(function(e) {
                    if (o.length) {
                        if (-1 !== o.indexOf(e.CustomGroupId)) {
                            var t = pn.getCookiesForGroup(e);
                            r = g(r, t.firstPartyCookiesList), n = g(n, t.thirdPartyCookiesList)
                        }
                    } else t = pn.getCookiesForGroup(e), r = g(r, t.firstPartyCookiesList), n = g(n, t.thirdPartyCookiesList)
                })
            }), r.length && n.unshift({
                HostName: vt.PCFirstPartyCookieListText,
                DisplayName: vt.PCFirstPartyCookieListText,
                HostId: "first-party-cookies-group",
                isFirstParty: !0,
                Cookies: r,
                Description: ""
            })), ot.showGeneralVendors) {
            var s = this.getFilteredGenVendorsList(o),
                i = this.mapGenVendorListToHostFormat(s);
            t = g(n, i)
        } else t = n;
        ot.currentGlobalFilteredList = t, this.initHostData(e, t)
    }, yn.prototype.mapGenVendorListToHostFormat = function(e) {
        return e.map(function(e) {
            return {
                Cookies: e.Cookies,
                DisplayName: e.Name,
                HostName: e.Name,
                HostId: e.VendorCustomId,
                Description: e.Description,
                Type: j.GenVendor,
                PrivacyPolicy: e.PrivacyPolicyUrl,
                isActive: -1 < ot.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
            }
        })
    }, yn.prototype.mapGenVendorToHostFormat = function(e) {
        return {
            Cookies: e.Cookies,
            DisplayName: e.Name,
            HostName: e.Name,
            HostId: e.VendorCustomId,
            Description: e.Description,
            Type: j.GenVendor
        }
    }, yn.prototype.getFilteredGenVendorsList = function(t) {
        var o = [],
            e = [];
        if (t.length) {
            vt.Groups.forEach(function(e) {
                g(e.SubGroups, [e]).forEach(function(e) {
                    -1 !== t.indexOf(e.CustomGroupId) && e.GeneralVendorsIds && e.GeneralVendorsIds.forEach(function(e) {
                        o.push(e)
                    })
                })
            });
            var n = vt.GeneralVendors;
            return o.length && (e = n.filter(function(e) {
                if (-1 < o.indexOf(e.VendorCustomId)) return e
            })), e
        }
        return vt.GeneralVendors
    }, yn.prototype.initVendorsData = function(e, t) {
        var o = this,
            n = t,
            r = ot.vendors.list;
        if (this.setBackBtnTxt(), Lt(Vt.P_Vendor_List + " #select-all-text-container p").html(vt.PCenterAllowAllConsentText), nt.isV2Template && (Lt("#ot-sel-blk span:first-child").html(vt.PCenterAllowAllConsentText || vt.ConsentText), Lt("#ot-sel-blk span:last-child").html(vt.LegitInterestText), kt.legIntSettings.PAllowLI && !kt.legIntSettings.PShowLegIntBtn || bt(Lt("#ot-sel-blk span:first-child").el[0], "max-width: 100%;", !0)), this.hasIabVendors = 0 < n.length, this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, e, !1), 0 === n.length ? Lt("#ot-lst-cnt .ot-acc-cntr").hide() : Lt("#ot-lst-cnt .ot-acc-cntr").show(), Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Container + " ." + Vt.P_Ven_Bx).length !== r.length && this.attachVendorsToDOM(), n.length !== r.length) r.forEach(function(e) {
            var t = Lt(Vt.P_Vendor_Container + " #IAB" + e.vendorId).el[0].parentElement; - 1 === n.indexOf(e) ? bt(t, "display: none;", !0) : (t.setAttribute("data-display", "show"), bt(t, o._displayNull, !0))
        });
        else
            for (var s = Lt(Vt.P_Vendor_Container + ' li[style^="display"]').el, i = 0; i < s.length; i++) s[i].setAttribute("data-display", "show"), bt(s[i], this._displayNull, !0);
        !nt.isV2Template && kt.pcName === Ze || Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Title).html(vt.PCenterVendorsListText);
        var l = document.querySelector("#vdr-lst-dsc");
        if (!l && vt.PCenterVendorListDescText)
            if ((l = document.createElement("p")).id = "vdr-lst-dsc", Lt(l).html(vt.PCenterVendorListDescText), kt.pcName !== Ze && kt.pcName !== Ye) {
                var a = document.querySelector("#onetrust-pc-sdk " + Vt.P_Vendor_Title_Elm);
                a && a.insertAdjacentElement("afterend", l)
            } else {
                var c = document.querySelector(Vt.P_Vendor_Content + " .ot-sdk-row");
                c && c.insertAdjacentElement("beforebegin", l)
            }
        Lt("#onetrust-pc-sdk " + Vt.P_Select_Cntr).removeClass("ot-hide"), this.vendorsListEvent(), kt.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent()
    }, yn.prototype.updateVendorsDOMToggleStatus = function(e) {
        for (var t = Lt(Vt.P_Vendor_Container + " " + Vt.P_Tgl_Cntr).el, o = 0; o < t.length; o++) {
            var n = t[o].querySelector("." + Vt.P_Ven_Ctgl + " input"),
                r = t[o].querySelector("." + Vt.P_Ven_Ltgl + " input");
            n && At.setCheckedAttribute("", n, e), r && At.setCheckedAttribute("", r, e)
        }
        var s = Lt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        s && (s.parentElement.classList.remove("line-through"), At.setCheckedAttribute("", s, e));
        var i = Lt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        i && (i.parentElement.classList.remove("line-through"), At.setCheckedAttribute("", i, e)), vt.UseGoogleVendors && this.updateGoogleCheckbox(e), ot.showGeneralVendors && vt.GenVenOptOut && this.updateGenVenCheckbox(e)
    }, yn.prototype.updateGenVenCheckbox = function(e) {
        for (var t = Lt(Vt.P_Gven_List + " .ot-ven-gvctgl input").el, o = 0; o < t.length; o++) At.setCheckedAttribute("", t[o], e);
        var n = Lt("#onetrust-pc-sdk #ot-selall-gnven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), At.setCheckedAttribute("", n, e))
    }, yn.prototype.updateGoogleCheckbox = function(e) {
        for (var t = Lt("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0; o < t.length; o++) At.setCheckedAttribute("", t[o], e);
        var n = Lt("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), At.setCheckedAttribute("", n, e))
    }, yn.prototype.updateVendorDisclosure = function(e, t) {
        var o = Lt(Vt.P_Vendor_Container + " #IAB" + e).el[0].parentElement;
        if (t && t.disclosures) {
            var r = o.querySelector(Vt.P_Ven_Dets),
                s = o.querySelector(Vt.P_Ven_Disc).cloneNode(!0),
                n = s.cloneNode(!0);
            n.innerHTML = "<p><b>" + vt.PCenterVendorListDisclosure + ": </b></p>", r.insertAdjacentElement("beforeend", n), t.disclosures.forEach(function(e) {
                var t = s.cloneNode(!0),
                    o = "<p>" + vt.PCenterVendorListStorageIdentifier + " </p> <p>" + (e.name || e.identifier) + " </p>";
                if (e.type && (o += "<p>" + vt.PCenterVendorListStorageType + " </p> <p>" + e.type + " </p>"), e.maxAgeSeconds) {
                    var n = At.calculateCookieLifespan(e.maxAgeSeconds);
                    o += "<p>" + vt.PCenterVendorListLifespan + " </p> <p>" + n + " </p>"
                }
                e.domain && (o += "<p>" + vt.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.purposes && (o += "<p>" + vt.PCenterVendorListStoragePurposes + " </p> <p>" + e.purposes + " </p>"), t.innerHTML = o, r.insertAdjacentElement("beforeend", t)
            })
        }
    }, yn.prototype.attachVendorsToDOM = function() {
        var F, R, q = ot.vendors.list,
            M = vt.IabType,
            j = kt.pcName,
            U = ot.vendors.vendorTemplate.cloneNode(!0);
        ot.discVendors = {}, nt.isV2Template && (F = U.querySelector(".ot-ven-pur").cloneNode(!0), R = U.querySelector(Vt.P_Ven_Disc).cloneNode(!0), Lt(U.querySelector(".ot-ven-dets")).html(""));
        for (var e = function(e) {
                var t = U.cloneNode(!0),
                    o = q[e].vendorId,
                    n = q[e].vendorName,
                    r = t.querySelector("." + Vt.P_Ven_Bx),
                    s = ot.vendorsSetting[o];
                At.setHtmlAttributes(r, {
                    id: "IAB" + o,
                    name: "IAB" + o,
                    "aria-controls": "IAB-ACC-TXT" + o,
                    "aria-label": n
                }), r.nextElementSibling.setAttribute("for", "IAB" + o), t.querySelector(Vt.P_Ven_Name).innerText = n, At.setHtmlAttributes(t.querySelector(Vt.P_Ven_Link), {
                    href: q[e].policyUrl,
                    rel: "noopener",
                    target: "_blank"
                }), t.querySelector(Vt.P_Ven_Link).innerHTML = vt.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + n + " " + vt.NewWinTxt + "</span>";
                var i = nt.isV2Template ? cn.chkboxEl.cloneNode(!0) : t.querySelector(".ot-checkbox"),
                    l = i.cloneNode(!0),
                    a = i.cloneNode(!0),
                    c = t.querySelector(Vt.P_Tgl_Cntr);
                nt.isV2Template || i.parentElement.removeChild(i);
                var d = t.querySelector(Vt.P_Arrw_Cntr);
                if (s.consent) {
                    a.classList.add(Vt.P_Ven_Ctgl);
                    var p = -1 !== _t.inArray(o + ":true", ot.vendors.selectedVendors),
                        u = a.querySelector("input");
                    if (nt.isV2Template) {
                        u.classList.add("vendor-checkbox-handler");
                        var h = a.querySelector(".ot-label-status");
                        vt.PCShowConsentLabels ? h.innerHTML = p ? vt.PCActiveText : vt.PCInactiveText : At.removeChild(h)
                    }
                    At.setCheckedAttribute("", u, p), At.setHtmlAttributes(u, {
                        id: Vt.P_Vendor_CheckBx + "-" + e,
                        vendorid: o,
                        "aria-label": n
                    }), a.querySelector("label").setAttribute("for", Vt.P_Vendor_CheckBx + "-" + e), a.querySelector(Vt.P_Label_Txt).textContent = n, j === Ze ? vt.PCTemplateUpgrade ? c.insertAdjacentElement("beforeend", a) : Lt(c).append(a) : c.insertBefore(a, d)
                }
                if (s.legInt) {
                    var g = -1 !== _t.inArray(o + ":true", ot.vendors.selectedLegIntVendors);
                    if (kt.legIntSettings.PShowLegIntBtn) {
                        var C = Dt.generateLegIntButtonElements(g, o, !0);
                        t.querySelector(Vt.P_Acc_Txt).insertAdjacentHTML("beforeend", C);
                        var y = t.querySelector(".ot-remove-objection-handler");
                        y && bt(y, y.getAttribute("data-style"))
                    } else u = l.querySelector("input"), nt.isV2Template && (u.classList.add("vendor-checkbox-handler"), h = l.querySelector(".ot-label-status"), vt.PCShowConsentLabels ? h.innerHTML = g ? vt.PCActiveText : vt.PCInactiveText : At.removeChild(h)), l.classList.add(Vt.P_Ven_Ltgl), u.classList.remove("vendor-checkbox-handler"), u.classList.add("vendor-leg-checkbox-handler"), At.setCheckedAttribute("", u, g), At.setHtmlAttributes(u, {
                        id: Vt.P_Vendor_LegCheckBx + "-" + e,
                        "leg-vendorid": o,
                        "aria-label": n
                    }), l.querySelector("label").setAttribute("for", Vt.P_Vendor_LegCheckBx + "-" + e), l.querySelector(Vt.P_Label_Txt).textContent = n, t.querySelector("." + Vt.P_Ven_Ctgl) && (d = t.querySelector("." + Vt.P_Ven_Ctgl)), j !== Ze || c.children.length ? c.insertBefore(l, d) : Lt(c).append(l), s.consent || j !== Ze || l.classList.add(Vt.P_Ven_Ltgl_Only)
                }
                nt.isV2Template && (c.insertAdjacentElement("beforeend", cn.arrowEl.cloneNode(!0)), vt.PCAccordionStyle !== K.Caret && t.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", cn.plusMinusEl.cloneNode(!0)));
                var f = t.querySelector(Vt.P_Acc_Txt);
                if (f && At.setHtmlAttributes(f, {
                        id: "IAB-ACC-TXT" + o,
                        "aria-labelledby": "IAB-ACC-TXT" + o,
                        role: "region"
                    }), q[e].deviceStorageDisclosureUrl && (At.setHtmlAttributes(r, {
                        "disc-vid": o
                    }), ot.discVendors[o] = {
                        isFetched: !1,
                        disclosureUrl: q[e].deviceStorageDisclosureUrl
                    }), nt.isV2Template) z.populateVendorDetailsHtml(t, F, q[e], R);
                else {
                    var k = t.querySelector(".vendor-option-purpose"),
                        v = t.querySelector(".vendor-consent-group"),
                        b = t.querySelector(".legitimate-interest"),
                        m = t.querySelector(".legitimate-interest-group"),
                        P = t.querySelector(".spl-purpose"),
                        A = t.querySelector(".spl-purpose-grp"),
                        T = t.querySelector(".vendor-feature"),
                        S = t.querySelector(".vendor-feature-group"),
                        _ = t.querySelector(".vendor-spl-feature"),
                        I = t.querySelector(".vendor-spl-feature-grp"),
                        L = v.cloneNode(!0),
                        w = m.cloneNode(!0),
                        B = A.cloneNode(!0),
                        E = S.cloneNode(!0),
                        x = I.cloneNode(!0);
                    R = t.querySelector(Vt.P_Ven_Disc);
                    var V = t.querySelector(Vt.P_Ven_Dets),
                        G = R.cloneNode(!0);
                    R.parentElement.removeChild(R), z.attachVendorDisclosure(G, q[e]), V.insertAdjacentElement("afterbegin", G), v.parentElement.removeChild(v), s.consent && (Lt(k.querySelector("p")).text(vt.ConsentPurposesText), q[e].purposes.forEach(function(e) {
                        Lt(L.querySelector(".consent-category")).text(e.purposeName);
                        var t = L.querySelector(".consent-status");
                        t && L.removeChild(t), b.insertAdjacentHTML("beforebegin", L.outerHTML)
                    })), s.consent || k.parentElement.removeChild(k);
                    var O = w.querySelector(".vendor-opt-out-handler");
                    "IAB2" === vt.IabType && O.parentElement.removeChild(O), m.parentElement.removeChild(m), s.legInt && (Lt(b.querySelector("p")).text(vt.LegitimateInterestPurposesText), kt.legIntSettings.PAllowLI && "IAB2" === vt.IabType && q[e].legIntPurposes.forEach(function(e) {
                        Lt(w.querySelector(".consent-category")).text(e.purposeName), b.insertAdjacentHTML("afterend", w.outerHTML)
                    })), s.legInt || b.parentElement.removeChild(b), A.parentElement.removeChild(A), "IAB2" === M && q[e].specialPurposes.forEach(function(e) {
                        Lt(B.querySelector(".consent-category")).text(e.purposeName), P.insertAdjacentHTML("afterend", B.outerHTML)
                    }), 0 === q[e].specialPurposes.length ? P.parentElement.removeChild(P) : Lt(P.querySelector("p")).text(vt.SpecialPurposesText), S.parentElement.removeChild(S), Lt(T.querySelector("p")).text(vt.FeaturesText), q[e].features.forEach(function(e) {
                        Lt(E.querySelector(".consent-category")).text(e.featureName), T.insertAdjacentHTML("afterend", E.outerHTML)
                    }), 0 === q[e].features.length && T.parentElement.removeChild(T), _.parentElement.removeChild(I), "IAB2" === M && q[e].specialFeatures.forEach(function(e) {
                        Lt(x.querySelector(".consent-category")).text(e.featureName), _.insertAdjacentHTML("afterend", x.outerHTML)
                    }), 0 === q[e].specialFeatures.length ? _.parentElement.removeChild(_) : Lt(_.querySelector("p")).text(vt.SpecialFeaturesText);
                    var N = r.parentElement.querySelector(".vendor-purposes p");
                    N.parentElement.removeChild(N)
                }
                Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Container).append(t);
                var H = Lt("#onetrust-pc-sdk " + Vt.P_Sel_All_Vendor_Consent_Handler).el[0];
                H && H.setAttribute("aria-label", vt.PCenterSelectAllVendorsText + " " + vt.LegitInterestText);
                var D = Lt("#onetrust-pc-sdk " + Vt.P_Sel_All_Vendor_Leg_Handler).el[0];
                D && D.setAttribute("aria-label", vt.PCenterSelectAllVendorsText + " " + vt.ConsentText)
            }, z = this, t = 0; t < q.length; t++) e(t)
    }, yn.prototype.populateVendorDetailsHtml = function(e, t, o, n) {
        var r = e.querySelector(".ot-ven-dets"),
            s = ot.vendorsSetting[o.vendorId],
            i = n.cloneNode(!0);
        if (this.attachVendorDisclosure(i, o), r.insertAdjacentElement("beforeEnd", i), s.consent) {
            var l = t.cloneNode(!0),
                a = "<p>" + vt.ConsentPurposesText + "</p>";
            o.purposes.forEach(function(e) {
                a += "<p>" + e.purposeName + "</p>"
            }), l.innerHTML = a, r.insertAdjacentElement("beforeEnd", l)
        }
        if (s.legInt && o.legIntPurposes.length) {
            var c = t.cloneNode(!0),
                d = "<p>" + vt.LegitimateInterestPurposesText + "</p>";
            o.legIntPurposes.forEach(function(e) {
                d += "<p>" + e.purposeName + "</p>"
            }), c.innerHTML = d, r.insertAdjacentElement("beforeEnd", c)
        }
        if ("IAB2" === kt.iabType && o.specialPurposes.length) {
            var p = t.cloneNode(!0),
                u = "<p>" + vt.SpecialPurposesText + "</p>";
            o.specialPurposes.forEach(function(e) {
                u += "<p>" + e.purposeName + "</p>"
            }), p.innerHTML = u, r.insertAdjacentElement("beforeEnd", p)
        }
        if (o.features.length) {
            var h = t.cloneNode(!0),
                g = "<p>" + vt.FeaturesText + "</p>";
            o.features.forEach(function(e) {
                g += "<p>" + e.featureName + "</p>"
            }), h.innerHTML = g, r.insertAdjacentElement("beforeEnd", h)
        }
        if ("IAB2" === kt.iabType && o.specialFeatures.length) {
            var C = t.cloneNode(!0),
                y = "<p>" + vt.SpecialFeaturesText + "</p>";
            o.specialFeatures.forEach(function(e) {
                y += "<p>" + e.featureName + "</p>"
            }), C.innerHTML = y, r.insertAdjacentElement("beforeEnd", C)
        }
    }, yn.prototype.InitializeVendorList = function() {
        if (ot.vendors.list = ot.iabData ? ot.iabData.vendors : null, ot.vendors.vendorTemplate = Lt(Vt.P_Vendor_Container + " li").el[0].cloneNode(!0), Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Container).html(""), !nt.isV2Template && kt.pcName === Ze) {
            var e, t = ot.vendors.vendorTemplate.querySelectorAll(Vt.P_Acc_Header);
            kt.legIntSettings.PAllowLI && "IAB2" === kt.iabType ? (e = t[0]).parentElement.removeChild(e) : (e = t[1]).parentElement.removeChild(e)
        }
    }, yn.prototype.cancelVendorFilter = function() {
        for (var e = Lt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid");
            e[t].checked && ot.filterByIABCategories.indexOf(o) < 0 && (e[t].checked = "")
        }
    }, yn.prototype.attachVendorDisclosure = function(e, t) {
        var o = "<p><b>" + vt.PCenterVendorListLifespan + " :</b> " + t.cookieMaxAge + "</p>";
        t.usesNonCookieAccess && (o += "<p>" + vt.PCenterVendorListNonCookieUsage + "</p>"), e.innerHTML = o
    }, yn.prototype.updateVendorFilterList = function() {
        for (var e = Lt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid");
            if (e[t].checked && ot.filterByIABCategories.indexOf(o) < 0) ot.filterByIABCategories.push(o);
            else if (!e[t].checked && -1 < ot.filterByIABCategories.indexOf(o)) {
                var n = ot.filterByIABCategories;
                ot.filterByIABCategories.splice(n.indexOf(o), 1)
            }
        }
        return ot.filterByIABCategories
    }, yn.prototype.saveVendorStatus = function() {
        var e = ot.vendors,
            t = ot.oneTrustIABConsent;
        t.purpose = e.selectedPurpose.slice(), t.legimateInterest = e.selectedLegInt.slice(), t.vendors = e.selectedVendors.slice(), t.legIntVendors = e.selectedLegIntVendors.slice(), t.specialFeatures = e.selectedSpecialFeatures.slice();
        var o = ot.addtlVendors;
        o.vendorConsent = Object.keys(o.vendorSelected)
    }, yn.prototype.updateIabVariableReference = function() {
        var e = ot.oneTrustIABConsent,
            t = ot.vendors;
        t.selectedPurpose = e.purpose.slice(), t.selectedLegInt = e.legimateInterest.slice(), t.selectedVendors = e.vendors.slice(), t.selectedLegIntVendors = e.legIntVendors.slice(), t.selectedSpecialFeatures = e.specialFeatures.slice();
        var o = ot.addtlVendors;
        o.vendorSelected = {}, o.vendorConsent.forEach(function(e) {
            o.vendorSelected[e] = !0
        })
    }, yn.prototype.allowAllhandler = function() {
        Ko.initializeIABData(!0, !1)
    }, yn.prototype.rejectAllHandler = function() {
        Ko.initializeIABData(!1, !0)
    }, yn.prototype.populateAddtlVendors = function(e) {
        var t = vt.PCAccordionStyle === K.Caret ? cn.arrowEl.cloneNode(!0) : cn.plusMinusEl.cloneNode(!0),
            o = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            n = o.cloneNode(!0);
        At.removeChild(n.querySelector("#ot-selall-hostcntr")), At.removeChild(o.querySelector("#ot-selall-vencntr")), At.removeChild(o.querySelector("#ot-selall-licntr"));
        var r = cn.accordionEl.cloneNode(!0);
        r.classList.add("ot-iab-acc"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)), r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + vt.PCIABVendorsText + "</div>"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), r.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", Lt("#ot-ven-lst").el[0]), Lt("#ot-lst-cnt .ot-sdk-column").append(r), r.querySelector("button").setAttribute("aria-label", vt.PCIABVendorsText), this.iabAccInit = !0;
        var s = n.cloneNode(!0);
        At.removeChild(s.querySelector("#ot-selall-licntr")), s.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr", s.querySelector("input").id = "ot-selall-adtlven-handler", s.querySelector("label").setAttribute("for", "ot-selall-adtlven-handler");
        var i = cn.accordionEl.cloneNode(!0);
        i.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)), i.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + vt.PCGoogleVendorsText + "</div>"), i.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", s), i.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-addtl-venlst'></ul>"), i.classList.add("ot-adtlv-acc"), i.querySelector("button").setAttribute("aria-label", vt.PCGoogleVendorsText);
        var l = ot.vendors.vendorTemplate.cloneNode(!0);
        for (var a in l.querySelector("button").classList.remove("ot-ven-box"), l.querySelector("button").classList.add("ot-addtl-venbox"), At.removeChild(l.querySelector(".ot-acc-txt")), e)
            if (e[a]) {
                var c = l.cloneNode(!0),
                    d = e[a].name;
                c.querySelector(Vt.P_Ven_Name).innerText = d;
                var p = c.querySelector("button");
                At.setHtmlAttributes(p, {
                    id: "Adtl-IAB" + a
                }), At.setHtmlAttributes(c.querySelector(Vt.P_Ven_Link), {
                    href: e[a].policyUrl,
                    rel: "noopener",
                    target: "_blank"
                }), c.querySelector(Vt.P_Ven_Link).innerHTML = vt.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + d + " " + vt.NewWinTxt + "</span>";
                var u = cn.chkboxEl.cloneNode(!0);
                u.classList.remove("ot-ven-ctgl"), u.classList.add("ot-ven-adtlctgl");
                var h = Boolean(ot.addtlVendors.vendorSelected[a]),
                    g = u.querySelector("input");
                g.classList.add("ot-addtlven-chkbox-handler");
                var C = u.querySelector(".ot-label-status");
                vt.PCShowConsentLabels ? C.innerHTML = h ? vt.PCActiveText : vt.PCInactiveText : At.removeChild(C), At.setCheckedAttribute("", g, h), At.setHtmlAttributes(g, {
                    id: "ot-addtlven-chkbox-" + a,
                    "addtl-vid": a,
                    "aria-label": d
                }), u.querySelector("label").setAttribute("for", "ot-addtlven-chkbox-" + a), u.querySelector(Vt.P_Label_Txt).textContent = d;
                var y = c.querySelector(Vt.P_Tgl_Cntr);
                Lt(y).append(u), y.insertAdjacentElement("beforeend", cn.arrowEl.cloneNode(!0)), vt.PCAccordionStyle !== K.Caret && c.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", cn.plusMinusEl.cloneNode(!0)), Lt(i.querySelector("#ot-addtl-venlst")).append(c)
            }
        Lt("#ot-lst-cnt .ot-sdk-column").append(i), Lt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            At.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader()
    }, yn.prototype.populateGeneralVendors = function() {
        var p = this,
            e = vt.GeneralVendors,
            t = document.querySelector(".ot-gv-acc"),
            u = !!t;
        if (!e.length) return this.hasGenVendors = !1, void(t && Lt(t).hide());
        this.hasGenVendors = !0, t && Lt(t).show();
        var o = vt.PCAccordionStyle === K.Caret ? cn.arrowEl.cloneNode(!0) : cn.plusMinusEl.cloneNode(!0);
        this.iabAccInit || this.addIabAccordion();
        var n = document.createElement("div");
        n.setAttribute("class", "ot-sel-all-chkbox");
        var r = cn.chkboxEl.cloneNode(!0);
        r.id = "ot-selall-gnvencntr", r.querySelector("input").id = "ot-selall-gnven-handler", r.querySelector("label").setAttribute("for", "ot-selall-gnven-handler"), Lt(n).append(r);
        var h = cn.accordionEl.cloneNode(!0);
        h.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o.cloneNode(!0)), h.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + vt.PCenterGeneralVendorsText + "</div>"), vt.GenVenOptOut && h.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), h.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-gn-venlst'></ul>"), h.classList.add("ot-gv-acc"), h.querySelector("button").setAttribute("aria-label", vt.PCenterGeneralVendorsText);
        var g = ot.vendors.vendorTemplate.cloneNode(!0);
        g.querySelector("button").classList.remove("ot-ven-box"), g.querySelector("button").classList.add("ot-gv-venbox"), Lt(g.querySelector(".ot-acc-txt")).html('<ul class="ot-host-opt"></ul>'), u && Lt("" + Vt.P_Gven_List).html("");
        var C = !0;
        e.forEach(function(e) {
            var o = p.mapGenVendorToHostFormat(e),
                n = g.cloneNode(!0),
                t = e.VendorCustomId,
                r = e.Name;
            n.querySelector(Vt.P_Ven_Name).innerText = r;
            var s = n.querySelector("button");
            if (At.setHtmlAttributes(s, {
                    id: "Gn-" + t
                }), e.PrivacyPolicyUrl ? (At.setHtmlAttributes(n.querySelector(Vt.P_Ven_Link), {
                    href: e.PrivacyPolicyUrl,
                    rel: "noopener",
                    target: "_blank"
                }), n.querySelector(Vt.P_Ven_Link).innerHTML = vt.PCGVenPolicyTxt + "&nbsp;<span class='ot-scrn-rdr'>" + r + " " + vt.NewWinTxt + "</span>") : n.querySelector(Vt.P_Ven_Link).classList.add("ot-hide"), vt.GenVenOptOut) {
                var i = cn.chkboxEl.cloneNode(!0);
                i.classList.remove("ot-ven-ctgl"), i.classList.add("ot-ven-gvctgl");
                var l = Boolean(ot.genVendorsConsent[t]),
                    a = i.querySelector("input");
                a.classList.add("ot-gnven-chkbox-handler");
                var c = i.querySelector(".ot-label-status");
                vt.PCShowConsentLabels ? c.innerHTML = l ? vt.PCActiveText : vt.PCInactiveText : At.removeChild(c), At.setCheckedAttribute("", a, l), At.setHtmlAttributes(a, {
                    id: "ot-gnven-chkbox-" + t,
                    "gn-vid": t,
                    "aria-label": r
                }), Yt.isGenVenPartOfAlwaysActiveGroup(t) ? At.setDisabledAttribute(null, a, !0) : C = !1, i.querySelector("label").setAttribute("for", "ot-gnven-chkbox-" + t), i.querySelector(Vt.P_Label_Txt).textContent = r;
                var d = n.querySelector(Vt.P_Tgl_Cntr);
                Lt(d).append(i), d.insertAdjacentElement("beforeend", cn.arrowEl.cloneNode(!0))
            }
            vt.PCAccordionStyle !== K.Caret && n.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", cn.plusMinusEl.cloneNode(!0)), e.Cookies.length || Lt(n).addClass("ot-hide-acc"), e.Cookies.forEach(function(e) {
                var t = p.getCookieElement(e, o);
                Lt(n.querySelector(".ot-host-opt")).append(t)
            }), u ? Lt("" + Vt.P_Gven_List).append(n) : Lt(h.querySelector("" + Vt.P_Gven_List)).append(n)
        }), u || Lt("#ot-lst-cnt .ot-sdk-column").append(h), Lt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            At.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader(), C && At.setDisabledAttribute("#ot-selall-gnven-handler", null, !0)
    }, yn.prototype.addIabAccordion = function() {
        var e = vt.PCAccordionStyle === K.Caret ? cn.arrowEl.cloneNode(!0) : cn.plusMinusEl.cloneNode(!0),
            t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            o = t.cloneNode(!0);
        At.removeChild(o.querySelector("#ot-selall-hostcntr")), At.removeChild(t.querySelector("#ot-selall-vencntr")), At.removeChild(t.querySelector("#ot-selall-licntr"));
        var n = cn.accordionEl.cloneNode(!0);
        n.classList.add("ot-iab-acc"), n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)), n.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + vt.PCIABVendorsText + "</div>"), n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o), n.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", Lt("#ot-ven-lst").el[0]), Lt("#ot-lst-cnt .ot-sdk-column").append(n), n.querySelector("button").setAttribute("aria-label", vt.PCIABVendorsText), this.iabAccInit = !0
    }, yn.prototype.showConsentHeader = function() {
        var e = kt.legIntSettings;
        Lt("#onetrust-pc-sdk .ot-sel-all-hdr").show(), e.PAllowLI && !e.PShowLegIntBtn || Lt("#onetrust-pc-sdk .ot-li-hdr").hide()
    }, yn.prototype.setBackBtnTxt = function() {
        nt.isV2Template ? (Lt(Vt.P_Vendor_List + " .back-btn-handler").attr("aria-label", vt.PCenterBackText), Lt(Vt.P_Vendor_List + " .back-btn-handler title").html(vt.PCenterBackText)) : Lt(Vt.P_Vendor_List + " .back-btn-handler .pc-back-button-text").html(vt.PCenterBackText)
    }, yn.prototype.getCookieElement = function(e, t) {
        var o = ot.hosts.hostCookieTemplate.cloneNode(!0),
            n = o.querySelector("div").cloneNode(!0);
        n.classList.remove("cookie-name-container"), Lt(o).html("");
        var r = e.Name;
        vt.AddLinksToCookiepedia && t.isFirstParty && (r = wt.getCookieLabel(e, vt.AddLinksToCookiepedia));
        var s = n.cloneNode(!0);
        if (s.classList.add(Vt.P_c_Name), s.querySelector("div:nth-child(1)").innerHTML = vt.pcCListName, s.querySelector("div:nth-child(2)").innerHTML = r, Lt(o).append(s), vt.pcShowCookieHost) {
            var i = n.cloneNode(!0);
            i.classList.add(Vt.P_c_Host), i.querySelector("div:nth-child(1)").innerHTML = vt.pcCListHost, i.querySelector("div:nth-child(2)").innerHTML = e.Host, Lt(o).append(i)
        }
        if (vt.pcShowCookieDuration) {
            var l = n.cloneNode(!0);
            l.classList.add(Vt.P_c_Duration), l.querySelector("div:nth-child(1)").innerHTML = vt.pcCListDuration, l.querySelector("div:nth-child(2)").innerHTML = e.IsSession ? vt.LifespanTypeText : wt.getDuration(e), Lt(o).append(l)
        }
        if (vt.pcShowCookieType) {
            var a = t.Type === j.GenVendor ? !e.isThirdParty : t.isFirstParty,
                c = n.cloneNode(!0);
            c.classList.add(Vt.P_c_Type), c.querySelector("div:nth-child(1)").innerHTML = vt.pcCListType, c.querySelector("div:nth-child(2)").innerHTML = a ? vt.firstPartyTxt : vt.thirdPartyTxt, Lt(o).append(c)
        }
        if (vt.pcShowCookieCategory) {
            var d = void 0;
            if (d = t.Type === j.GenVendor ? e.category : t.isFirstParty ? e.groupName : t.groupName) {
                var p = n.cloneNode(!0);
                p.classList.add(Vt.P_c_Category), p.querySelector("div:nth-child(1)").innerHTML = vt.pcCListCategory, p.querySelector("div:nth-child(2)").innerHTML = d, Lt(o).append(p)
            }
        }
        if (vt.pcShowCookieDescription && e.description) {
            var u = n.cloneNode(!0);
            u.classList.add(Vt.P_c_Desc), u.querySelector("div:nth-child(1)").innerHTML = vt.pcCListDescription, u.querySelector("div:nth-child(2)").innerHTML = e.description, Lt(o).append(u)
        }
        return o
    }, yn);

    function yn() {
        this.hasIabVendors = !1, this.hasGoogleVendors = !1, this.hasGenVendors = !1, this.iabAccInit = !1, this._displayNull = "display: '';", this.googleSearchSelectors = {
            vendorAccBtn: "#ot-addtl-venlst #Adtl-IAB",
            name: "name",
            accId: ".ot-adtlv-acc",
            selectAllEvntHndlr: "#ot-selall-adtlven-handler",
            venListId: "#ot-addtl-venlst",
            ctgl: ".ot-ven-adtlctgl"
        }, this.genVendorSearchSelectors = {
            vendorAccBtn: "#ot-gn-venlst #Gn-",
            name: "Name",
            accId: ".ot-gv-acc",
            selectAllEvntHndlr: "#ot-selall-gnven-handler",
            venListId: "#ot-gn-venlst",
            ctgl: ".ot-ven-gvctgl"
        }
    }
    var fn, kn = (vn.prototype.updateGtmMacros = function(e) {
        void 0 === e && (e = !0);
        var n = [];
        ot.groupsConsent.forEach(function(e) {
            var t = e.replace(":1", ""),
                o = Ht.getGrpStatus(Ht.getGroupById(t)).toLowerCase() === Be;
            At.endsWith(e, ":1") && (Ko.canSoftOptInInsertForGroup(t) || o) && n.push(t)
        }), ot.hostsConsent.forEach(function(e) {
            At.endsWith(e, ":1") && n.push(e.replace(":1", ""))
        }), ot.showGeneralVendors && vt.GenVenOptOut && vt.GeneralVendors.forEach(function(e) {
            ot.genVendorsConsent[e.VendorCustomId] && (ot.softOptInGenVendors.includes(e.VendorCustomId) && oo.isLandingPage() || n.push(e.VendorCustomId))
        });
        var t, o, r = "," + At.arrToStr(n) + ",";
        window.OnetrustActiveGroups = r, window.OptanonActiveGroups = r, void 0 !== window.dataLayer ? window.dataLayer.constructor === Array && (window.dataLayer.push({
            event: "OneTrustLoaded",
            OnetrustActiveGroups: r
        }), window.dataLayer.push({
            event: "OptanonLoaded",
            OptanonActiveGroups: r
        })) : window.dataLayer = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: r
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: r
        }], e && (t = new CustomEvent("consent.onetrust", {
            detail: n
        })), this.updateGCMTags(n, e);
        var s = Pt.readCookieParam(Se.OPTANON_CONSENT, "groups");
        !ot.fireOnetrustGrp && s && !e || (ot.fireOnetrustGrp = !1, window.dataLayer.constructor === Array && window.dataLayer.push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: r
        }), o = new CustomEvent("OneTrustGroupsUpdated", {
            detail: n
        })), setTimeout(function() {
            t && window.dispatchEvent(t), o && window.dispatchEvent(o)
        })
    }, vn.prototype.updateGCMTags = function(e, t) {
        var o, n = e.includes(vt.gCAdStorage) ? ge.granted : ge.denied,
            r = e.includes(vt.gCAnalyticsStorage) ? ge.granted : ge.denied,
            s = Pt.getCookie(Se.ALERT_BOX_CLOSED),
            i = kt.getRegionRule().Global;
        if ("function" != typeof window.gtag && vt.gCEnable && (window.gtag = function(e, t, o) {
                window.dataLayer.push(arguments)
            }), "function" == typeof window.gtag && vt.gCEnable && s) {
            var l = ((o = {})[ue.ad_storage] = n, o[ue.analytics_storage] = r, o);
            i || (l[ue.region] = kt.gcmCountries), window.gtag(ae.consent, de.update, l)
        }
    }, vn);

    function vn() {}
    var bn, mn = "Banner",
        Pn = "Preference Center",
        An = "Close",
        Tn = "Allow All",
        Sn = "Reject All",
        _n = "Confirm",
        In = (Ln.prototype.showConsentNotice = function() {
            switch (!vt.NoBanner || vt.ForceConsent ? Lt(".onetrust-pc-dark-filter").removeClass("ot-hide") : Lt(".onetrust-pc-dark-filter").addClass("ot-hide"), Lt("#onetrust-pc-sdk").removeClass("ot-hide"), kt.pcName) {
                case $e:
                    Lt("#onetrust-pc-sdk").el[0].classList.contains("ot-animated") || Lt("#onetrust-pc-sdk").addClass("ot-animated");
                    var e = vt.PreferenceCenterPosition,
                        t = vt.useRTL,
                        o = t ? "right" : "left",
                        n = t ? "left" : "right";
                    Lt("#onetrust-pc-sdk").el[0].classList.contains("ot-slide-out-" + ("right" === e ? n : o)) && Lt("#onetrust-pc-sdk").removeClass("ot-slide-out-" + ("right" === e ? n : o)), Lt("#onetrust-pc-sdk").addClass("ot-slide-in-" + ("right" === e ? n : o))
            }
            on.setAllowAllButton(), Zo.setPCFocus(Zo.getPCElements()), vt.NoBanner && vt.ScrollCloseBanner || this.pcHasScroll()
        }, Ln.prototype.hideConsentNoticeV2 = function() {
            if (0 !== Lt("" + this.ONETRUST_PC_SDK).length) {
                if (nt.isV2Template && this.closePCText(), vt.ForceConsent && !wt.isCookiePolicyPage(vt.AlertNoticeText) && !Dt.isAlertBoxClosedAndValid() && vt.ShowAlertNotice ? Lt("" + this.ONETRUST_PC_DARK_FILTER).css("z-index: 2147483645;").show() : Lt("" + this.ONETRUST_PC_DARK_FILTER).fadeOut(vt.Panel ? 500 : 400), vt.Panel) {
                    var e = vt.PreferenceCenterPosition,
                        t = vt.useRTL,
                        o = t ? "right" : "left",
                        n = t ? "left" : "right";
                    Lt("" + this.ONETRUST_PC_SDK).removeClass("ot-slide-in-" + ("right" === e ? n : o)), Lt("" + this.ONETRUST_PC_SDK).addClass("ot-slide-out-" + ("right" === e ? n : o))
                }
                if (Lt("" + this.ONETRUST_PC_SDK).fadeOut(vt.Panel ? 500 : 400), ot.isPCVisible = !1, vt.NoBanner && vt.ScrollCloseBanner || (bt(Lt("html").el[0], "overflow: " + (this.htmlScrollProp || "") + ";", !0), bt(Lt("body").el[0], "overflow: " + (this.bodyScrollProp || "") + ";", !0)), ot.pcLayer = S.Banner, ot.pcSource || Dt.isAlertBoxClosedAndValid())
                    if (ot.pcSource) ot.pcSource.focus(), ot.pcSource = null;
                    else if (vt.BannerFocus) wt.resetFocusToBody();
                else {
                    var r = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
                    r.length && r[0].focus()
                } else {
                    var s = Lt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0];
                    s && s.focus()
                }
            }
        }, Ln.prototype.closePCText = function() {
            var e = document.querySelector("#onetrust-pc-sdk span[aria-live]"),
                t = vt.AboutCookiesText;
            e.innerText = t + " " + vt.pcDialogClose
        }, Ln.prototype.pcHasScroll = function() {
            var e = Lt(Vt.P_Grp_Container).el[0] || Lt("#onetrust-pc-sdk " + Vt.P_Content).el[0];
            e.scrollHeight > e.clientHeight && (this.bodyScrollProp = Lt("body").el[0].style.overflow, this.htmlScrollProp = Lt("html").el[0].style.overflow, bt(Lt("html").el[0], "overflow: hidden;", !0), bt(Lt("body").el[0], "overflow: hidden;", !0))
        }, Ln);

    function Ln() {
        this.bodyScrollProp = "", this.htmlScrollProp = "", this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }
    var wn, Bn = (En.prototype.init = function() {
        this.insertHtml(), this.insertCss(), this.showNty(), this.initHandler()
    }, En.prototype.getContent = function() {
        return a(this, void 0, void 0, function() {
            return u(this, function(e) {
                return [2, jo.getSyncNtfyContent().then(function(e) {
                    ot.syncNtfyGrp = {
                        name: e.name,
                        html: atob(e.html),
                        css: e.css
                    }
                })]
            })
        })
    }, En.prototype.insertHtml = function() {
        function e(e) {
            return t.querySelector(e)
        }
        this.removeHtml();
        var t = document.createDocumentFragment(),
            o = document.createElement("div");
        Lt(o).html(ot.syncNtfyGrp.html);
        var n = o.querySelector(this.El);
        vt.BannerRelativeFontSizesToggle && Lt(n).addClass("otRelFont"), vt.useRTL && Lt(n).attr("dir", "rtl"), Lt(t).append(n);
        var r = vt.NtfyConfig;
        this.initHtml("Sync", r.Sync, e, t.querySelector(this.El)), r.ShowCS ? Lt(e(".ot-pc-handler")).html(r.CSTxt) : (Lt(n).addClass("ot-hide-csbtn"), e(".ot-sync-btncntr").parentElement.removeChild(e(".ot-sync-btncntr")));
        var s = document.createElement("div");
        Lt(s).append(t), Lt("#onetrust-consent-sdk").append(s.firstChild)
    }, En.prototype.initHandler = function() {
        Lt(this.El + " .ot-sync-close-handler").on("click", function() {
            return wn.close()
        })
    }, En.prototype.showNty = function() {
        var e = Lt(this.El);
        e.css("bottom: -300px;"), e.animate({
            bottom: "1em;"
        }, 1e3), setTimeout(function() {
            e.css("bottom: 1rem;")
        }, 1e3), e.focus()
    }, En.prototype.changeState = function() {
        setTimeout(function() {
            wn.refreshState()
        }, 1500)
    }, En.prototype.refreshState = function() {
        function e(e) {
            return t.querySelector(e)
        }
        var t = Lt(this.El).el[0];
        t.classList.add("ot-nty-complete"), t.classList.remove("ot-nty-sync");
        var o = vt.NtfyConfig;
        this.initHtml("Complete", o.Complete, e, t), o.ShowCS && ("LINK" === o.CSType && Lt(e(".ot-pc-handler")).addClass("ot-pc-link"), Lt(".ot-sync-btncntr").show("inline-block"), this.alignContent(), Lt(window).on("resize", function() {
            return wn.resizeEvent
        })), setTimeout(function() {
            wn.close()
        }, 1e3 * vt.NtfyConfig.NtfyDuration)
    }, En.prototype.insertCss = function() {
        var e = document.getElementById("onetrust-style");
        e.innerHTML += ot.syncNtfyGrp.css, e.innerHTML += this.addCustomStyles()
    }, En.prototype.addCustomStyles = function() {
        var e = vt.NtfyConfig,
            t = e.Sync,
            o = e.Complete,
            n = e.CSButton,
            r = e.CSLink;
        return "\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color: " + t.BgColor + ";\n            border: 1px solid " + t.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh>g {\n            fill: " + t.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align: " + t.TitleAlign + ";\n            color: " + t.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align: " + t.DescAlign + ";\n            color: " + t.DescColor + "; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color: " + o.BgColor + ";\n            border: 1px solid " + o.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check>g {\n            fill: " + o.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align: " + o.TitleAlign + ";\n            color: " + o.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align: " + o.DescAlign + ";\n            color: " + o.DescColor + "; \n        }\n        " + ("BUTTON" === e.CSType ? "\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color: " + n.BgColor + ";\n            border: 1px solid " + n.BdrColor + ";\n            color: " + n.Color + ";\n            text-align: " + n.Align + ";\n        }" : " #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color: " + r.Color + ";\n            text-align: " + r.Align + ";\n        }") + "\n        "
    }, En.prototype.initHtml = function(e, t, o, n) {
        var r = "Sync" === e ? ".ot-sync-refresh" : ".ot-sync-check",
            s = "Complete" === e ? ".ot-sync-refresh" : ".ot-sync-check";
        t.ShowIcon ? (Lt(o(r)).show(), Lt(o(s)).hide(), Lt(o(".ot-sync-icon")).show("inline-block"), n.classList.remove("ot-hide-icon")) : (Lt(o(".ot-sync-icon")).hide(), n.classList.add("ot-hide-icon")), t.Title ? Lt(o("#ot-sync-title")).html(t.Title) : Lt(o("#ot-sync-title")).hide(), t.Desc ? Lt(o(".ot-sync-desc")).html(t.Desc) : Lt(o(".ot-sync-desc")).hide(), t.ShowClose ? (Lt(o(".ot-sync-close-handler")).show("inline-block"), Lt(o(".ot-close-icon")).attr("aria-label", t.CloseAria), n.classList.remove("ot-hide-close")) : (Lt(o(".ot-sync-close-handler")).hide(), n.classList.add("ot-hide-close"))
    }, En.prototype.close = function() {
        this.hideSyncNtfy(), wt.resetFocusToBody()
    }, En.prototype.hideSyncNtfy = function() {
        vt.NtfyConfig.ShowCS && window.removeEventListener("resize", wn.resizeEvent), Lt("#ot-sync-ntfy").fadeOut(400)
    }, En.prototype.removeHtml = function() {
        var e = Lt(this.El).el;
        e && At.removeChild(e)
    }, En.prototype.alignContent = function() {
        Lt(".ot-sync-btncntr").el[0].clientHeight > Lt(".ot-sync-titlecntr").el[0].clientHeight && (Lt(".ot-sync-titlecntr").addClass("ot-pos-abs"), Lt(".ot-sync-btncntr").addClass("ot-pos-rel"))
    }, En.prototype.resizeEvent = function() {
        window.innerWidth <= 896 && wn.alignContent()
    }, En);

    function En() {
        this.El = "#ot-sync-ntfy"
    }
    var xn, Vn = (Gn.prototype.closeBanner = function(e) {
        this.closeOptanonAlertBox(), e ? this.allowAll(!1) : this.close(!1)
    }, Gn.prototype.allowAll = function(e, t) {
        void 0 === t && (t = !1), nt.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t)
    }, Gn.prototype.bannerActionsHandler = function(t, n) {
        oo.setLandingPathParam(Ae), ot.groupsConsent = [], ot.hostsConsent = [], ot.genVendorsConsent = {};
        var r = {};
        vt.Groups.forEach(function(e) {
            if (e.IsAboutGroup) return !1;
            g(e.SubGroups, [e]).forEach(function(e) {
                var o = !!t || !!n && Ht.isAlwaysActiveGroup(e); - 1 < ut.indexOf(e.Type) && ot.groupsConsent.push(e.CustomGroupId + ":" + (o && e.HasConsentOptOut ? "1" : "0")), e.Hosts.length && (vt.allowHostOptOut || ot.genVenOptOutEnabled) && e.Hosts.forEach(function(e) {
                    if (r[e.HostId]) Zt.updateHostStatus(e, o);
                    else {
                        r[e.HostId] = !0;
                        var t = Zt.isHostPartOfAlwaysActiveGroup(e.HostId) || o;
                        ot.hostsConsent.push(e.HostId + ":" + (t ? "1" : "0"))
                    }
                }), ot.genVenOptOutEnabled && e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    Yt.updateGenVendorStatus(e, o)
                })
            })
        }), vt.IsIabEnabled && (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler()), bn.hideConsentNoticeV2(), Wt.writeGrpParam(Se.OPTANON_CONSENT), Wt.writeHstParam(Se.OPTANON_CONSENT), ot.genVenOptOutEnabled && Wt.writeGenVenCookieParam(Se.OPTANON_CONSENT), pn.substitutePlainTextScriptTags(), fn.updateGtmMacros(), this.executeOptanonWrapper()
    }, Gn.prototype.nextPageCloseBanner = function() {
        oo.isLandingPage() || Dt.isAlertBoxClosedAndValid() || this.closeBanner(vt.NextPageAcceptAllCookies)
    }, Gn.prototype.rmScrollAndClickBodyEvents = function() {
        vt.ScrollCloseBanner && window.removeEventListener("scroll", this.scrollCloseBanner), vt.OnClickCloseBanner && document.body.removeEventListener("click", this.bodyClickEvent)
    }, Gn.prototype.onClickCloseBanner = function(e) {
        Dt.isAlertBoxClosedAndValid() || (uo.triggerGoogleAnalyticsEvent(fo, ko), this.closeBanner(vt.OnClickAcceptAllCookies), e.stopPropagation()), xn.rmScrollAndClickBodyEvents()
    }, Gn.prototype.scrollCloseBanner = function() {
        var e = Lt(document).height() - Lt(window).height();
        0 === e && (e = Lt(window).height());
        var t = 100 * Lt(window).scrollTop() / e;
        t <= 0 && (t = 100 * (document.scrollingElement && document.scrollingElement.scrollTop || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop) / (document.scrollingElement && document.scrollingElement.scrollHeight || document.documentElement && document.documentElement.scrollHeight || document.body && document.body.scrollHeight)), 25 < t && !Dt.isAlertBoxClosedAndValid() && (!ot.isPCVisible || vt.NoBanner) ? (uo.triggerGoogleAnalyticsEvent(fo, ko), xn.closeBanner(vt.ScrollAcceptAllCookies), xn.rmScrollAndClickBodyEvents()) : Dt.isAlertBoxClosedAndValid() && xn.rmScrollAndClickBodyEvents()
    }, Gn.prototype.AllowAllV2 = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
            var r = Ht.getGroupById(o[n].getAttribute("data-optanongroupid"));
            this.groupsClass.toggleGrpElements(o[n], r, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0)
        }
        this.bannerActionsHandler(!0, !1), this.consentTransactions(e, !0, t), vt.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!0), this.updateVendorLegBtns(!0))
    }, Gn.prototype.rejectAll = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = t ? F[5] : F[2], n = this.groupsClass.getAllGroupElements(), r = 0; r < n.length; r++) {
            var s = Ht.getGroupById(n[r].getAttribute("data-optanongroupid"));
            "always active" !== Ht.getGrpStatus(s).toLowerCase() && (on.toggleGrpElements(n[r], s, !1), this.groupsClass.toogleSubGroupElement(n[r], !1, !1, !0), this.groupsClass.toogleSubGroupElement(n[r], !1, !0, !0))
        }
        this.bannerActionsHandler(!1, !0), o !== ot.consentInteractionType && this.consentTransactions(e, !1, t), vt.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!1), this.updateVendorLegBtns(!1))
    }, Gn.prototype.executeCustomScript = function() {
        vt.CustomJs && new Function(vt.CustomJs)()
    }, Gn.prototype.updateConsentData = function(e) {
        oo.setLandingPathParam(Ae), vt.IsIabEnabled && !e && this.iab.saveVendorStatus(), Wt.writeGrpParam(Se.OPTANON_CONSENT), Wt.writeHstParam(Se.OPTANON_CONSENT), ot.showGeneralVendors && vt.GenVenOptOut && Wt.writeGenVenCookieParam(Se.OPTANON_CONSENT), pn.substitutePlainTextScriptTags(), fn.updateGtmMacros()
    }, Gn.prototype.close = function(e, t) {
        void 0 === t && (t = !1), bn.hideConsentNoticeV2(), this.updateConsentData(e), vt.IsConsentLoggingEnabled ? qt.createConsentTxn(!1, (t ? Pn : mn) + " - " + (t ? _n : An), t) : Dt.dispatchConsentEvent(), this.executeOptanonWrapper()
    }, Gn.prototype.executeOptanonWrapper = function() {
        try {
            if (this.executeCustomScript(), "function" == typeof window.OptanonWrapper && "undefined" !== window.OptanonWrapper) {
                window.OptanonWrapper();
                for (var e = 0, t = ot.srcExecGrpsTemp; e < t.length; e++) {
                    var o = t[e]; - 1 === ot.srcExecGrps.indexOf(o) && ot.srcExecGrps.push(o)
                }
                ot.srcExecGrpsTemp = [];
                for (var n = 0, r = ot.htmlExecGrpsTemp; n < r.length; n++) o = r[n], -1 === ot.htmlExecGrps.indexOf(o) && ot.htmlExecGrps.push(o);
                ot.htmlExecGrpsTemp = []
            }
        } catch (e) {
            console.warn("Error in Optanon wrapper, please review your code. " + e)
        }
    }, Gn.prototype.updateVendorLegBtns = function(e) {
        if (kt.legIntSettings.PAllowLI && kt.legIntSettings.PShowLegIntBtn)
            for (var t = Lt(Vt.P_Vendor_Container + " .ot-leg-btn-container").el, o = 0; o < t.length; o++) this.groupsClass.updateLegIntBtnElement(t[o], e)
    }, Gn.prototype.showFltgCkStgButton = function() {
        var e = Lt("#ot-sdk-btn-floating");
        e.removeClass("ot-hide"), e.removeClass("ot-pc-open"), Lt(".ot-floating-button__front svg").attr("aria-hidden", ""), Lt(".ot-floating-button__back svg").attr("aria-hidden", "true")
    }, Gn.prototype.consentTransactions = function(e, t, o) {
        void 0 === o && (o = !1), qt && !e && vt.IsConsentLoggingEnabled ? qt.createConsentTxn(!1, (o ? Pn : mn) + " - " + (t ? Tn : Sn), o) : Dt.dispatchConsentEvent()
    }, Gn);

    function Gn() {
        var o = this;
        this.iab = gn, this.groupsClass = on, this.closeOptanonAlertBox = function() {
            wt.hideBanner(), vt.NtfyConfig.ShowNtfy && wn.hideSyncNtfy(), !kt.isOptInMode && (kt.isOptInMode || Dt.isAlertBoxClosedAndValid()) || uo.setAlertBoxClosed(!0), Ko.csBtnGroup && o.showFltgCkStgButton()
        }, this.bodyClickEvent = function(e) {
            var t = e.target;
            t.closest("#onetrust-banner-sdk") || t.closest("#onetrust-pc-sdk") || t.closest(".onetrust-pc-dark-filter") || t.closest(".ot-sdk-show-settings") || t.closest(".optanon-show-settings") || t.closest(".optanon-toggle-display") || xn.onClickCloseBanner(e)
        }, this.bannerCloseButtonHandler = function(e) {
            if (void 0 === e && (e = !1), xn.closeOptanonAlertBox(), nt.moduleInitializer.MobileSDK) window.OneTrust.Close();
            else {
                var t = ot.bannerCloseSource === f.ConfirmChoiceButton;
                xn.close(e, t)
            }
            return !1
        }, this.allowAllEventHandler = function(e) {
            void 0 === e && (e = !1);
            var t = e ? "Preferences Allow All" : "Banner Accept Cookies";
            uo.triggerGoogleAnalyticsEvent(fo, t), o.allowAllEvent(!1, e)
        }, this.allowAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), o.closeOptanonAlertBox(), xn.allowAll(e, t)
        }, this.rejectAllEventHandler = function(e) {
            void 0 === e && (e = !1);
            var t = e ? "Preferences Reject All" : "Banner Reject All";
            uo.triggerGoogleAnalyticsEvent(fo, t), nt.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : o.rejectAllEvent(!1, e)
        }, this.rejectAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), o.closeOptanonAlertBox(), Dt.isIABCrossConsentEnabled() ? kt.thirdPartyiFrameLoaded ? o.rejectAll(e, t) : kt.thirdPartyiFramePromise.then(function() {
                o.rejectAll(e, t)
            }) : o.rejectAll(e, t)
        }
    }
    var On, Nn = (Hn.prototype.setFilterList = function(t) {
        var o = this,
            n = Lt("#onetrust-pc-sdk " + Vt.P_Fltr_Modal + " " + Vt.P_Fltr_Option).el[0].cloneNode(!0);
        Lt("#onetrust-pc-sdk " + Vt.P_Fltr_Modal + " " + Vt.P_Fltr_Options).html(""), (nt.isV2Template || vt.Popup) && Lt("#onetrust-pc-sdk #filter-cancel-handler").html(vt.PCenterCancelFiltersText || "Cancel"), !nt.isV2Template && vt.Popup || (Lt("#onetrust-pc-sdk " + Vt.P_Clr_Fltr_Txt).html(vt.PCenterClearFiltersText), Lt("#filter-btn-handler").el[0].setAttribute("aria-label", vt.PCenterFilterText)), Lt("#onetrust-pc-sdk #filter-apply-handler").html(vt.PCenterApplyFiltersText), t ? kt.consentableGrps.forEach(function(e) {
            (ot.cookieListType === z.GenVen || ot.cookieListType === z.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length) && o.filterGroupOptionSetter(n, e, t)
        }) : kt.iabGrps.forEach(function(e) {
            o.filterGroupOptionSetter(n, e, t)
        })
    }, Hn.prototype.filterGroupOptionSetter = function(e, t, o) {
        var n = t.CustomGroupId,
            r = n + "-filter",
            s = e.cloneNode(!0);
        Lt(Vt.P_Fltr_Modal + " " + Vt.P_Fltr_Options).append(s), Lt(s.querySelector("input")).attr("id", r), Lt(s.querySelector("label")).attr("for", r), nt.isV2Template ? Lt(s.querySelector(Vt.P_Label_Txt)).html(t.GroupName) : Lt(s.querySelector("label span")).html(t.GroupName), Lt(s.querySelector("input")).attr(o ? "data-optanongroupid" : "data-purposeid", n)
    }, Hn);

    function Hn() {
        this.bodyScrollProp = "", this.htmlScrollProp = "", this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }
    var Dn, Fn = (Rn.prototype.initialiseCssReferences = function() {
        var e, t = "";
        document.getElementById("onetrust-style") ? e = document.getElementById("onetrust-style") : ((e = document.createElement("style")).id = "onetrust-style", nt.fp.CookieV2CSP && ot.nonce && e.setAttribute("nonce", ot.nonce)), Ko.commonStyles && (t += Ko.commonStyles), Ko.bannerGroup && (t += Ko.bannerGroup.css, t += this.addCustomBannerCSS()), Ko.preferenceCenterGroup && (t += Ko.preferenceCenterGroup.css, t += this.addCustomPreferenceCenterCSS()), Ko.cookieListGroup && (t += Ko.cookieListGroup.css, t += this.addCustomCookieListCSS()), this.processedCSS = t, kt.ignoreInjectingHtmlCss || (e.textContent = t, Lt(document.head).append(e))
    }, Rn);

    function Rn() {
        this.processedCSS = "", this.addCustomBannerCSS = function() {
            var e = vt.backgroundColor,
                t = vt.buttonColor,
                o = vt.textColor,
                n = vt.buttonTextColor,
                r = vt.bannerMPButtonColor,
                s = vt.bannerMPButtonTextColor,
                i = vt.bannerAccordionBackgroundColor,
                l = vt.BSaveBtnColor,
                a = vt.BCategoryContainerColor,
                c = vt.BLineBreakColor,
                d = vt.BCategoryStyleColor,
                p = vt.bannerLinksTextColor,
                u = "\n        " + (kt.bannerName === Ue ? e ? "#onetrust-consent-sdk #onetrust-banner-sdk > .ot-sdk-container {\n                    background-color: " + e + ";}" : "" : e ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " + e + ";}" : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header {\n                        color: " + o + ";\n                    }" : "") + "\n            " + (i ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " + i + ";}" : "") + "\n            " + (p ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,\n                    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: " + p + ";\n                        }" : "");
            if ((t || n) && (u += "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                            " + (n ? "color: " + n + ";" : "") + "\n                        }"), (s || r) && (u += "\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                " + (s ? "color: " + s + "; border-color: " + s + ";" : "") + "\n                background-color: \n                " + (r && !vt.BannerSettingsButtonDisplayLink ? r : e) + ";\n            }"), kt.bannerName === We) {
                var h = void 0,
                    g = void 0,
                    C = void 0,
                    y = void 0,
                    f = void 0;
                l && (h = "color: " + n + ";border-color: " + n + ";background-color: " + l + ";"), a && (g = "background-color: " + a + ";"), c && (C = "border-color: " + c + ";"), d && (y = "background-color: " + d + ";", f = "border-color: " + d + ";"), u += "#onetrust-banner-sdk .ot-bnr-save-handler {" + h + "}#onetrust-banner-sdk .ot-cat-lst {" + g + "}#onetrust-banner-sdk .ot-cat-bdr {" + C + "}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {" + y + "}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {" + f + "}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}"
            }
            return vt.BCloseButtonType === ie.Link && (u += "#onetrust-banner-sdk.ot-close-btn-link .banner-close-button {color: " + vt.BContinueColor + "}"), vt.bannerCustomCSS && (u += vt.bannerCustomCSS), u
        }, this.addCustomPreferenceCenterCSS = function() {
            var e = vt.pcBackgroundColor,
                t = vt.pcButtonColor,
                o = vt.pcTextColor,
                n = vt.pcButtonTextColor,
                r = vt.pcLinksTextColor,
                s = vt.PCenterEnableAccordion,
                i = vt.pcAccordionBackgroundColor,
                l = vt.pcMenuColor,
                a = vt.pcMenuHighLightColor,
                c = vt.pcLegIntButtonColor,
                d = vt.pcLegIntButtonTextColor,
                p = "\n            " + (e ? (kt.pcName === Ye ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container, \n                        #onetrust-pc-sdk " + Vt.P_Vendor_List : "#onetrust-consent-sdk #onetrust-pc-sdk") + ",\n                #onetrust-consent-sdk " + Vt.P_Search_Cntr + ",\n                " + (s && kt.pcName === Ye ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" + Vt.P_Category_Item : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Tab_Grp_Hdr + " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Title + ":after\n                " + (nt.isV2Template ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Triangle : "") + " {\n                    background-color: " + e + ";\n                }\n               " : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Vendor_Container + " " + Vt.P_Ven_Opts + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Policy_Txt + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Li_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Leg_Select_All + " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Host_Cntr + " " + Vt.P_Host_Info + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Fltr_Modal + " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Vendor_List + " " + Vt.P_Select_Cntr + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Vendor_List + " " + Vt.P_Vendor_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Vendor_List + " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Vendor_List + " " + Vt.P_Ven_Name + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Vendor_List + " " + Vt.P_Vendor_Container + " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler \n                {\n                    color: " + o + ";\n                }" : "") + "\n            " + (r ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Ven_Link + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Host_Cntr + " " + Vt.P_Host_Title + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Host_Cntr + " " + Vt.P_Acc_Header + " " + Vt.P_Host_View_Cookies + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Host_Cntr + " " + Vt.P_Host_Info + " a\n                    {\n                        color: " + r + ";\n                    }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { opacity: .7;}\n            " + (s && i ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Acc_Container + Vt.P_Acc_Txt + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Acc_Txt + " " + Vt.P_Subgrp_Tgl_Cntr + " .ot-switch.ot-toggle\n             {\n                background-color: " + i + ";\n            }" : "") + "\n            " + (i ? " #onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Host_Cntr + " " + Vt.P_Host_Info + ",\n                    " + (nt.isV2Template ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Acc_Txt + " .ot-ven-dets" : "#onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Acc_Txt + " " + Vt.P_Ven_Opts) + "\n                            {\n                                background-color: " + i + ";\n                            }" : "") + "\n        ";
            return (t || n) && (p += "#onetrust-consent-sdk #onetrust-pc-sdk \n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." + Vt.P_Active_Menu + " {\n                " + (t ? "border-color: " + t + ";" : "") + "\n            }\n            " + (kt.pcName === Ye ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Vt.P_Category_Item + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " + Vt.P_Li_Hdr + "{\n                border-color: " + t + ";\n            }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border: 1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " + (c ? "background-color: " + c + ";" : "") + "\n                " + (d ? "color: " + d + "; border-color: " + d + ";" : "") + "\n            }\n            "), vt.PCCloseButtonType === ie.Link && (p += "#onetrust-pc-sdk.ot-close-btn-link .ot-close-icon {color: " + vt.PCContinueColor + "}"), kt.pcName === Ze && (l && (p += "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " + l + "\n                }"), a && (p += "#onetrust-consent-sdk #onetrust-pc-sdk ." + Vt.P_Active_Menu + " {\n                    background-color: " + a + "\n                }")), vt.pcCustomCSS && (p += vt.pcCustomCSS), p
        }, this.addCustomCookieListCSS = function() {
            var e = vt.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : "",
                t = "\n                " + (vt.cookieListPrimaryColor ? "\n                    #ot-sdk-cookie-policy" + e + " h5,\n                    #ot-sdk-cookie-policy" + e + " h6,\n                    #ot-sdk-cookie-policy" + e + " li,\n                    #ot-sdk-cookie-policy" + e + " p,\n                    #ot-sdk-cookie-policy" + e + " a,\n                    #ot-sdk-cookie-policy" + e + " span,\n                    #ot-sdk-cookie-policy" + e + " td,\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-description {\n                        color: " + vt.cookieListPrimaryColor + ";\n                    }" : "") + "\n                    " + (vt.cookieListTableHeaderColor ? "#ot-sdk-cookie-policy" + e + " th {\n                        color: " + vt.cookieListTableHeaderColor + ";\n                    }" : "") + "\n                    " + (vt.cookieListGroupNameColor ? "#ot-sdk-cookie-policy" + e + " .ot-sdk-cookie-policy-group {\n                        color: " + vt.cookieListGroupNameColor + ";\n                    }" : "") + "\n                    " + (vt.cookieListTitleColor ? "\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-title {\n                            color: " + vt.cookieListTitleColor + ";\n                        }\n                    " : "") + "\n            " + (e && vt.CookieListTableHeaderBackgroundColor ? "\n                    #ot-sdk-cookie-policy" + e + " table th {\n                            background-color: " + vt.CookieListTableHeaderBackgroundColor + ";\n                        }\n                    " : "") + "\n            ";
            return vt.cookieListCustomCss && (t += vt.cookieListCustomCss), t
        }
    }
    var qn, Mn = (jn.prototype.insertPcHtml = function() {
        qn.jsonAddAboutCookies(vt);
        var t = document.createDocumentFragment();
        if (Ko.preferenceCenterGroup) {
            var e = document.createElement("div");
            Lt(e).html(Ko.preferenceCenterGroup.html);
            var o = e.querySelector("#onetrust-pc-sdk");
            /Chrome|Safari/i.test(navigator.userAgent) && /Google Inc|Apple Computer/i.test(navigator.vendor) || Lt(o).addClass("ot-sdk-not-webkit"), vt.useRTL && Lt(o).attr("dir", "rtl"), kt.legIntSettings.PAllowLI && "IAB2" === kt.iabType && (Lt(o).addClass("ot-leg-opt-out"), kt.legIntSettings.PShowLegIntBtn && Lt(o).addClass("ot-leg-btn")), vt.BannerRelativeFontSizesToggle && Lt(o).addClass("otRelFont"), vt.PCShowConsentLabels && Lt(o).addClass("ot-tgl-with-label"), (vt.UseGoogleVendors || ot.showGeneralVendors) && Lt(o).addClass("ot-addtl-vendors"), "right" === vt.PreferenceCenterPosition && Lt(o).addClass(vt.useRTL ? "right-rtl" : "right"), Lt(t).append(o);
            var n = function(e) {
                    return t.querySelector(e)
                },
                r = function(e) {
                    return t.querySelectorAll(e)
                },
                s = Lt(r(Vt.P_Close_Btn)).el;
            if (vt.ShowPreferenceCenterCloseButton)
                for (vt.CloseText || (vt.CloseText = "Close Preference Center"), i = 0; i < s.length; i++) vt.PCCloseButtonType === ie.Link && vt.PCTemplateUpgrade ? (Lt(s[i]).html(vt.PCContinueText), Lt(o).addClass("ot-close-btn-link"), Lt(s[i]).el.removeAttribute("aria-label")) : Lt(s[i]).el.setAttribute("aria-label", vt.CloseText);
            else
                for (var i = 0; i < s.length; i++) Lt(s[i].parentElement).el.removeChild(s[i]);
            vt.Language && vt.Language.Culture && Lt(n("#onetrust-pc-sdk")).attr("lang", vt.Language.Culture);
            var l = n(Vt.P_Logo);
            if (l && vt.optanonLogo) {
                var a = wt.updateCorrectUrl(vt.optanonLogo);
                wt.checkMobileOfflineRequest(wt.getBannerVersionUrl()) && (a = At.getRelativeURL(a, !0, !0)), Lt(l).attr("style", 'background-image: url("' + a + '");\n                    background-position: ' + (vt.useRTL ? "right" : "left") + ";"), vt.PCLogoAria && Lt(l).attr("aria-label", vt.PCLogoAria)
            }
            wt.insertFooterLogo(r(".ot-pc-footer-logo a")), Lt(n(Vt.P_Title)).html(vt.MainText), Lt(n(ao)).attr("aria-label", vt.MainText), kt.pcName === Ze && (Lt(n(Vt.P_Privacy_Txt)).html(vt.AboutCookiesText), Lt(n(Vt.P_Privacy_Hdr)).html(vt.AboutCookiesText)), Lt(n(Vt.P_Policy_Txt)).html(vt.MainInfoText), vt.AboutText && Lt(n(Vt.P_Policy_Txt)).html(Lt(n(Vt.P_Policy_Txt)).html() + '\n                <br/><a href="' + vt.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                        aria-label="' + vt.PCCookiePolicyLinkScreenReader + '">' + vt.AboutText + "</a>"), vt.ConfirmText.trim() ? Lt(n("#accept-recommended-btn-handler")).html(vt.ConfirmText) : n("#accept-recommended-btn-handler").parentElement.removeChild(n("#accept-recommended-btn-handler"));
            var c = r(".save-preference-btn-handler");
            for (i = 0; i < c.length; i++) Lt(c[i]).html(vt.AllowAllText);
            var d = r(".ot-pc-refuse-all-handler");
            if (vt.PCenterShowRejectAllButton && vt.PCenterRejectAllButtonText.trim())
                for (i = 0; i < d.length; i++) Lt(d[i]).html(vt.PCenterRejectAllButtonText);
            else At.removeChild(d);
            if (n(Vt.P_Manage_Cookies_Txt) && Lt(n(Vt.P_Manage_Cookies_Txt)).html(vt.ManagePreferenceText), qn.initializePreferenceCenterGroups(n, t), !vt.IsIabEnabled) {
                var p = n(Vt.P_Vendor_Container);
                p && p.parentElement.removeChild(p)
            }
            if (!vt.showCookieList && !ot.showGeneralVendors) {
                var u = n(Vt.P_Host_Cntr);
                u && u.parentElement.removeChild(u)
            }
        }
        var h = document.createElement("iframe");
        h.setAttribute("class", "ot-text-resize"), h.setAttribute("title", "onetrust-text-resize"), bt(h, "position: absolute; top: -50000px; width: 100em;"), h.setAttribute(this._ariaHidden, "true"), Lt(t.querySelector("#onetrust-pc-sdk")).append(h);
        var g = document.getElementById("onetrust-consent-sdk");
        Lt(g).append(t), kt.ignoreInjectingHtmlCss || Lt(document.body).append(g), (vt.showCookieList || ot.showGeneralVendors) && pn.InitializeHostList()
    }, jn.prototype.setParentGroupName = function(e, t, o, n) {
        var r = e.querySelector(".category-header,.ot-cat-header,.category-menu-switch-handler>h3");
        Lt(r).html(t), Lt(r).attr("id", o), kt.pcName === Ze && (e.querySelector(Vt.P_Category_Header).innerHTML = t, e.querySelector("" + Vt.P_Desc_Container).setAttribute("id", n), e.querySelector(".category-menu-switch-handler").setAttribute("aria-controls", n))
    }, jn.prototype.setLegIntButton = function(e, t, o, n) {
        void 0 === o && (o = !1);
        var r = !0; - 1 < ot.vendors.selectedLegInt.indexOf(t.IabGrpId + ":false") && (r = !1);
        var s = Dt.generateLegIntButtonElements(r, t.OptanonGroupId);
        o ? n.insertAdjacentHTML("afterend", s) : e.insertAdjacentHTML("beforeend", s);
        var i = e.querySelector(".ot-remove-objection-handler");
        i && bt(i, i.getAttribute("data-style"))
    }, jn.prototype.setParentGroupDescription = function(e, t, o, n, r) {
        var s = on.safeFormattedGroupDescription(t),
            i = e.querySelector("p:not(.ot-always-active)"),
            l = e.querySelector(Vt.P_Acc_Grp_Desc),
            a = i || l;
        return -1 < Ct.indexOf(t.Type) && o.PCGrpDescType === P.Legal ? s = t.DescriptionLegal : a.classList.add("ot-category-desc"), kt.legIntSettings.PAllowLI && !kt.legIntSettings.PShowLegIntBtn && (t.SubGroups.some(function(e) {
            return e.HasLegIntOptOut
        }) || t.HasLegIntOptOut ? a.parentElement.classList.add("ot-leg-border-color") : At.removeChild(e.querySelector(Vt.P_Li_Hdr))), kt.pcName !== Ze && a.setAttribute("id", n), Lt(a).html(s), t.Type === dt && At.removeChild(a), a
    }, jn.prototype.cloneOtHtmlEls = function(e) {
        var t = /otPcPanel|otPcCenter/;
        cn.toggleEl = Lt(e(".ot-tgl")).el.cloneNode(!0), cn.arrowEl = Lt(e("#onetrust-pc-sdk > " + Vt.P_Arrw_Cntr)).el.cloneNode(!0), cn.subGrpEl = Lt(e(Vt.P_Sub_Grp_Cntr)).el.cloneNode(!0), cn.vListEl = Lt(e(Vt.P_Ven_Lst_Cntr)).el.cloneNode(!0), cn.cListEl = Lt(e(Vt.P_Host_Lst_cntr)).el.cloneNode(!0), cn.chkboxEl = Lt(e(Vt.P_CBx_Cntr)).el.cloneNode(!0), cn.accordionEl = Lt(e(".ot-acc-cntr")).el.cloneNode(!0), t.test(kt.pcName) && (cn.plusMinusEl = Lt(e(".ot-plus-minus")).el.cloneNode(!0)), At.removeChild(e(".ot-tgl")), At.removeChild(e("#onetrust-pc-sdk > " + Vt.P_Arrw_Cntr)), At.removeChild(e(Vt.P_Sub_Grp_Cntr)), At.removeChild(e(Vt.P_Ven_Lst_Cntr)), At.removeChild(e(Vt.P_Host_Lst_cntr)), At.removeChild(e(Vt.P_CBx_Cntr)), At.removeChild(e(".ot-acc-cntr")), t.test(kt.pcName) && At.removeChild(e(".ot-plus-minus"))
    }, jn.prototype.insertSelectAllEls = function(e) {
        var t = e(Vt.P_Select_Cntr + " .ot-sel-all-chkbox"),
            o = cn.chkboxEl.cloneNode(!0);
        o.id = Vt.P_Sel_All_Host_El, o.querySelector("input").id = "select-all-hosts-groups-handler", o.querySelector("label").setAttribute("for", "select-all-hosts-groups-handler"), Lt(t).append(o);
        var n = cn.chkboxEl.cloneNode(!0);
        n.id = Vt.P_Sel_All_Vendor_Consent_El, n.querySelector("input").id = "select-all-vendor-groups-handler", n.querySelector("label").setAttribute("for", "select-all-vendor-groups-handler"), Lt(t).append(n);
        var r = cn.chkboxEl.cloneNode(!0);
        r.id = Vt.P_Sel_All_Vendor_Leg_El, r.querySelector("input").id = "select-all-vendor-leg-handler", r.querySelector("label").setAttribute("for", "select-all-vendor-leg-handler"), Lt(t).append(r)
    }, jn.prototype.initializePreferenceCenterGroups = function(e, t) {
        var o = kt.pcName;
        if (nt.isV2Template) {
            qn.cloneOtHtmlEls(e);
            var n = cn.chkboxEl.cloneNode(!0);
            n.querySelector("input").classList.add("category-filter-handler"), Lt(e(Vt.P_Fltr_Modal + " " + Vt.P_Fltr_Option)).append(n), qn.insertSelectAllEls(e)
        }
        var r = Lt(e("#onetrust-pc-sdk " + Vt.P_Category_Grp));
        o === Xe || o === $e || o === Ye ? vt.PCenterEnableAccordion ? At.removeChild(r.el.querySelector(Vt.P_Category_Item + ":not(.ot-accordion-layout)")) : At.removeChild(r.el.querySelector(Vt.P_Category_Item + ".ot-accordion-layout")) : o === Ze && (vt.PCenterEnableAccordion = !1);
        var s, i = e("#onetrust-pc-sdk " + Vt.P_Category_Item),
            l = nt.isV2Template ? cn.subGrpEl.cloneNode(!0) : Lt(e(Vt.P_Sub_Grp_Cntr)),
            a = nt.isV2Template ? "" : Lt(e(Vt.P_Acc_Container + " " + Vt.P_Sub_Grp_Cntr));
        vt.PCTemplateUpgrade && /otPcTab/.test(o) && (s = e(".ot-abt-tab").cloneNode(!0), At.removeChild(e(".ot-abt-tab"))), r.el.removeChild(i), nt.isV2Template ? vt.PCAccordionStyle === K.Caret && (Lt(e("#onetrust-pc-sdk " + Vt.P_Vendor_List)).addClass("ot-enbl-chr"), vt.PCenterEnableAccordion && Lt(e("#onetrust-pc-sdk " + Vt.P_Content)).addClass("ot-enbl-chr")) : Lt(i.querySelector(Vt.P_Sub_Grp_Cntr)).remove();
        var c = vt.Groups.filter(function(e) {
                return e.Order
            }),
            d = 0 === r.el.children.length,
            p = e(Vt.P_Li_Hdr) || i.querySelector(Vt.P_Li_Hdr);
        kt.legIntSettings.PAllowLI && kt.grpContainLegalOptOut && "IAB2" === vt.IabType && !kt.legIntSettings.PShowLegIntBtn ? (p.querySelector("span:first-child").innerText = vt.ConsentText, p.querySelector("span:last-child").innerText = vt.LegitInterestText, vt.PCenterEnableAccordion && p ? p.classList.add("ot-leg-border-color") : "otPcList" === o && i.insertAdjacentElement("afterbegin", p)) : (At.removeChild(e("#onetrust-pc-sdk " + Vt.P_Li_Hdr)), At.removeChild(i.querySelector(Vt.P_Li_Hdr)));
        for (var u = e(".ot-tab-desc"), h = 0; h < c.length; h++) {
            var g = c[h],
                C = g.GroupName,
                y = g.CustomGroupId,
                f = i.cloneNode(!0),
                k = "ot-group-id-" + y,
                v = "ot-header-id-" + y,
                b = "ot-desc-id-" + y;
            (f = Lt(f).el).setAttribute("data-optanongroupid", y);
            var m = f.querySelector("input,button");
            m && (m.setAttribute("aria-controls", b), m.setAttribute("aria-labelledby", v)), qn.setParentGroupName(f, C, v, b), o === Qe && (g.ShowVendorList && "IAB2" === vt.IabType ? (At.removeChild(f.querySelector("p:not(.ot-always-active)")), At.removeChild(f.querySelector(Vt.P_Acc_Txt + ":not(" + Vt.P_Acc_Container + ")")), g.SubGroups.length || nt.isV2Template || At.removeChild(f.querySelector(Vt.P_Sub_Grp_Cntr))) : At.removeChild(f.querySelector(Vt.P_Acc_Container)));
            var P = qn.setParentGroupDescription(f, g, vt, b, k);
            nt.isV2Template ? qn.setToggle(f, P, g, k, v) : qn.setToggleProps(f, P, g, k, v);
            var A = !!e("#onetrust-pc-sdk " + Vt.P_Category_Grp).querySelector(Vt.P_Category_Item),
                T = r.el.querySelectorAll(Vt.P_Category_Item);
            if (T = T[T.length - 1], d ? r.append(f) : A ? _t.insertAfter(f, T) : _t.insertAfter(f, r.el.querySelector(Vt.P_Li_Hdr) || r.el.querySelector("h3")), 0 < g.SubGroups.length && g.ShowSubgroup) {
                var S = o === Qe && g.ShowVendorList && "IAB2" === vt.IabType && !vt.PCTemplateUpgrade;
                qn.setSubGrps(g, S ? a : l, f, vt)
            }
            var _ = vt.PCGrpDescLinkPosition === w.Top;
            g.Type === dt && _ && (P = f.querySelector(Vt.P_Sub_Grp_Cntr));
            var I = _ ? P : null;
            qn.setVendorListBtn(f, e, t, g, I, vt), qn.setHostListBtn(f, e, t, g), ot.dataGroupState.push(g)
        }
        if ("otPcTab" === o)
            if (s && e("#onetrust-pc-sdk " + Vt.P_Category_Grp).insertAdjacentElement("afterbegin", s), u && 640 < window.innerWidth && Lt(u).append(t.querySelectorAll("#onetrust-pc-sdk " + Vt.P_Desc_Container)), vt.IsIabEnabled) e(Vt.P_Desc_Container + " .category-vendors-list-handler").innerHTML = vt.VendorListText + "&#x200E;";
            else {
                var L = e(Vt.P_Desc_Container + " .category-vendors-list-handler");
                L && L.parentElement.removeChild(L)
            }
    }, jn.prototype.jsonAddAboutCookies = function(e) {
        var t = {};
        return t.GroupName = e.AboutCookiesText, t.GroupDescription = e.MainInfoText, t.ShowInPopup = !0, t.Order = 0, t.IsAboutGroup = !0, t
    }, jn.prototype.setVendorListBtn = function(e, t, o, n, r, s) {
        var i = kt.pcName;
        if (n.ShowVendorList) {
            var l = void 0,
                a = void 0;
            if (nt.isV2Template ? l = (a = cn.vListEl.cloneNode(!0)).querySelector(".category-vendors-list-handler") : a = (l = e.querySelector(".category-vendors-list-handler")).parentElement, l.innerHTML = s.VendorListText + "&#x200E;", l.setAttribute("aria-label", s.VendorListText + " " + vt.PCOpensVendorDetailsAlert), l.setAttribute("data-parent-id", n.CustomGroupId), s.PCGrpDescType === P.UserFriendly && l.insertAdjacentHTML("afterend", "<a href='" + vt.IabLegalTextUrl + "?lang=" + ot.consentLanguage + "' rel=\"noopener\" target='_blank'>&nbsp;|&nbsp;" + s.PCVendorFullLegalText + '&nbsp;<span class="ot-scrn-rdr">' + vt.NewWinTxt + "</span></a>"), nt.isV2Template) {
                var c = e;
                i === Ze ? c = e.querySelector("" + Vt.P_Desc_Container) : s.PCenterEnableAccordion && (c = e.querySelector(Vt.P_Acc_Txt)), c.insertAdjacentElement("beforeend", a)
            }
            r && r.insertAdjacentElement("beforebegin", a)
        } else if (!nt.isV2Template) {
            if (i !== $e && i !== Xe || s.PCenterEnableAccordion) {
                if (i === Qe || i === $e || i === Xe && s.PCenterEnableAccordion) {
                    var d = t("#vendor-list-container"),
                        p = e.querySelector(Vt.P_Acc_Txt);
                    d && o.querySelector("" + Vt.P_Content).removeChild(d), nt.isV2Template || Lt(p).el.removeChild(p.querySelector(Vt.P_Ven_Lst_Cntr))
                }
            } else At.removeChild(e.querySelector(Vt.P_Ven_Lst_Cntr));
            if (i === Ze || i === Ye) {
                var u = e.querySelector(Vt.P_Ven_Lst_Cntr);
                u && u.parentElement.removeChild(u)
            }
        }
    }, jn.prototype.setHostListBtn = function(e, t, o, n) {
        var r = kt.pcName,
            s = !1;
        vt.showCookieList && (s = -1 < At.findIndex(g(n.SubGroups, [n]), function(e) {
            return -1 === pt.indexOf(e.Type) && e.FirstPartyCookies.length
        }));
        var i = ot.showGeneralVendors && n.GeneralVendorsIds && n.GeneralVendorsIds.length;
        if ((vt.showCookieList || ot.showGeneralVendors) && (n.ShowHostList || s || i)) {
            var l = void 0;
            if (nt.isV2Template) {
                var a = cn.cListEl.cloneNode(!0);
                l = a.querySelector(".category-host-list-handler");
                var c = e;
                r === Ze ? c = e.querySelector("" + Vt.P_Desc_Container) : vt.PCenterEnableAccordion && (c = e.querySelector(Vt.P_Acc_Txt)), c.insertAdjacentElement("beforeend", a)
            } else l = e.querySelector(".category-host-list-handler");
            if (l) {
                var d = ot.showGeneralVendors ? vt.GroupGenVenListLabel : vt.ThirdPartyCookieListText;
                l.innerHTML = d + "&#x200E;", l.setAttribute("aria-label", d + " " + vt.PCOpensCookiesDetailsAlert), l.setAttribute("data-parent-id", n.CustomGroupId)
            }
        } else if (r === Qe) {
            var p = t("#vendor-list-container"),
                u = e.querySelector(Vt.P_Acc_Txt);
            p && o.querySelector("" + Vt.P_Content).removeChild(p), u.querySelector(Vt.P_Host_Lst_cntr) && Lt(u).el.removeChild(u.querySelector(Vt.P_Host_Lst_cntr))
        } else {
            var h = e.querySelector(Vt.P_Host_Lst_cntr);
            h && h.parentElement.removeChild(h)
        }
    }, jn.prototype.setSubGrps = function(A, T, S, _) {
        var I = this,
            L = kt.pcName,
            w = _.PCGrpDescType === P.Legal,
            B = g(ht, ut),
            E = L === Qe && A.ShowVendorList && "IAB2" === _.IabType;
        if (E && !vt.PCTemplateUpgrade) {
            var e = S.querySelector(Vt.P_Sub_Grp_Cntr);
            e.parentElement.removeChild(e)
        }
        A.SubGroups.forEach(function(e) {
            var t;
            "IAB2" !== kt.iabType || e.Type !== lt || e.HasConsentOptOut || (t = !0);
            var o, n, r = nt.isV2Template ? T.cloneNode(!0) : T.el.cloneNode(!0),
                s = r.querySelector(Vt.P_Subgrp_li).cloneNode(!0),
                i = e.CustomGroupId,
                l = "ot-sub-group-id-" + i,
                a = Ht.getGrpStatus(e).toLowerCase(),
                c = Ht.getGrpStatus(A).toLowerCase(),
                d = s.querySelector(".cookie-subgroup>h4, .cookie-subgroup>h5, .cookie-subgroup>h6, .ot-subgrp>h4, .ot-subgrp>h5, .ot-subgrp>h6"),
                p = s.querySelector(Vt.P_Tgl_Cntr);
            s.setAttribute("data-optanongroupid", i), nt.isV2Template ? ((n = cn.toggleEl.cloneNode(!0)).querySelector("input").setAttribute("data-optanongroupid", i), n.querySelector("input").classList.add("cookie-subgroup-handler"), o = n.cloneNode(!0), p.insertAdjacentElement("beforeend", o)) : (o = s.querySelector(".ot-toggle")).querySelector("input").setAttribute("data-optanongroupid", i), Lt(r.querySelector(Vt.P_Subgp_ul)).html(""), Lt(d).html(e.GroupName), o.querySelector("input").setAttribute("id", l), o.querySelector("input").setAttribute("aria-label", e.GroupName), o.querySelector("label").setAttribute("for", l);
            var u = Lt(s.querySelector(Vt.P_Subgrp_Desc));
            if (E) {
                var h = e.DescriptionLegal && w ? e.DescriptionLegal : e.GroupDescription;
                u.html(h)
            } else {
                h = on.safeFormattedGroupDescription(e);
                var g = !1; - 1 < Ct.indexOf(e.Type) && w && (g = !0, h = e.DescriptionLegal), _.PCenterEnableAccordion && g || (u = Lt(s.querySelector("p"))), A.ShowSubGroupDescription ? u.html(h) : u.html("")
            }
            if (A.ShowSubgroupToggle && -1 < B.indexOf(e.Type)) {
                var C = on.isGroupActive(e);
                C && (s.querySelector("input").setAttribute("checked", ""), "always active" === c && -1 === Ct.indexOf(e.Type) && (s.querySelector("input").disabled = !0, s.querySelector("input").setAttribute("disabled", !0)));
                var y = p.querySelector(".ot-label-status");
                if (vt.PCShowConsentLabels ? y.innerHTML = C ? vt.PCActiveText : vt.PCInactiveText : At.removeChild(y), kt.legIntSettings.PAllowLI && e.Type === lt && e.HasLegIntOptOut)
                    if (kt.legIntSettings.PShowLegIntBtn) qn.setLegIntButton(s, e);
                    else {
                        var f = p.cloneNode(!0);
                        p.insertAdjacentElement("afterend", f);
                        var k = f.querySelector(".ot-label-status"),
                            v = f.querySelector("input");
                        v.setAttribute("id", l + "-leg-out"), f.querySelector("label").setAttribute("for", l + "-leg-out"), e.IsLegIntToggle = !0;
                        var b = on.isGroupActive(e);
                        vt.PCShowConsentLabels ? k.innerHTML = b ? vt.PCActiveText : vt.PCInactiveText : At.removeChild(k), At.setCheckedAttribute(null, v, b), e.IsLegIntToggle = !1
                    }
            } else "always active" === a && (A.ShowSubgroupToggle || -1 === gt.indexOf(e.Type)) || (t = !0);
            if (t && (o.classList.add("ot-hide-tgl"), o.querySelector("input").setAttribute(I._ariaHidden, !0)), "always active" !== a || t || (o && o.parentElement.removeChild(o), s.querySelector(Vt.P_Tgl_Cntr).classList.add("ot-always-active-subgroup"), qn.setAlwaysActive(s, !0)), "COOKIE" === e.Type && -1 !== e.Parent.indexOf("STACK") && bt(r, "display: none;"), Lt(r.querySelector(Vt.P_Subgp_ul)).append(s), nt.isV2Template) {
                var m = S;
                "otPcTab" === L ? m = S.querySelector("" + Vt.P_Desc_Container) : _.PCenterEnableAccordion && (m = S.querySelector(Vt.P_Acc_Txt)), m.insertAdjacentElement("beforeend", r)
            } else {
                var P = S.querySelector(Vt.P_Category_Item + " " + Vt.P_Ven_Lst_Cntr);
                P && P.insertAdjacentElement("beforebegin", r)
            }
        })
    }, jn.prototype.setToggle = function(e, t, o, n, r) {
        var s = cn.toggleEl.cloneNode(!0);
        s.querySelector("input").classList.add("category-switch-handler");
        var i = s.querySelector("input"),
            l = e.querySelector(Vt.P_Category_Header),
            a = on.isGroupActive(o),
            c = "always active" === Ht.getGrpStatus(o).toLowerCase(),
            d = o.OptanonGroupId.toString(),
            p = !0;
        if ("IAB2" !== kt.iabType || o.Type !== lt && o.Type !== dt || o.HasConsentOptOut || (p = !1), Lt(s.querySelector("label")).attr("for", n), Lt(s.querySelector(".ot-label-txt")).html(o.GroupName), kt.legIntSettings.PAllowLI && o.Type === lt && o.HasLegIntOptOut)
            if (kt.legIntSettings.PShowLegIntBtn) qn.setLegIntButton(e, o, !0, t);
            else {
                var u = s.cloneNode(!0);
                o.IsLegIntToggle = !0;
                var h = on.isGroupActive(o),
                    g = u.querySelector(".ot-label-status");
                vt.PCShowConsentLabels ? g.innerHTML = h ? vt.PCActiveText : vt.PCInactiveText : At.removeChild(g), o.IsLegIntToggle = !1, on.setInputID(u.querySelector("input"), n + "-leg-out", d, h, r), Lt(u.querySelector("label")).attr("for", n + "-leg-out"), l.insertAdjacentElement("afterend", u)
            }
        var C = s.querySelector(".ot-label-status");
        vt.PCShowConsentLabels ? C.innerHTML = a ? vt.PCActiveText : vt.PCInactiveText : At.removeChild(C), !c && p || (s.classList.add("ot-hide-tgl"), s.querySelector("input").setAttribute(this._ariaHidden, !0)), p && (c ? qn.setAlwaysActive(e) : (l.insertAdjacentElement("afterend", s), on.setInputID(i, n, d, a, r))), vt.PCenterEnableAccordion && (vt.PCAccordionStyle === K.Caret ? l.insertAdjacentElement("afterend", cn.arrowEl.cloneNode(!0)) : l.insertAdjacentElement("beforebegin", cn.plusMinusEl.cloneNode(!0)))
    }, jn.prototype.setToggleProps = function(e, t, o, n, r) {
        var s = e.querySelectorAll("input:not(.cookie-subgroup-handler)"),
            i = e.querySelectorAll("label"),
            l = on.isGroupActive(o),
            a = o.CustomGroupId,
            c = e.querySelector(".label-text");
        c && Lt(c).html(o.GroupName);
        for (var d = 0; d < s.length; d++)
            if (i[d] && Lt(i[d]).attr("for", n), 2 <= s.length && 0 === d) Lt(s[d]).attr("id", n + "-toggle");
            else {
                var p = !0;
                if ("IAB2" !== kt.iabType || o.Type !== lt && o.Type !== dt || o.HasConsentOptOut || (p = !1), kt.legIntSettings.PAllowLI && o.Type === lt && o.HasLegIntOptOut)
                    if (kt.legIntSettings.PShowLegIntBtn) qn.setLegIntButton(e, o, !0, t);
                    else {
                        var u = e.querySelector(Vt.P_Tgl_Cntr + ":not(" + Vt.P_Subgrp_Tgl_Cntr + ")") || e.querySelector(".ot-toggle"),
                            h = u.cloneNode(!0);
                        u.insertAdjacentElement("afterend", h);
                        var g = h.querySelector("input");
                        o.IsLegIntToggle = !0;
                        var C = on.isGroupActive(o);
                        o.IsLegIntToggle = !1, on.setInputID(g, n + "-leg-out", a, C, r), Lt(h.querySelector("label")).attr("for", n + "-leg-out"), At.removeChild(h.querySelector(Vt.P_Arrw_Cntr))
                    }
                var y = "always active" === Ht.getGrpStatus(o).toLowerCase();
                if (y || !p) {
                    var f = s[d].closest(".ot-toggle");
                    f && (f.classList.add("ot-hide-tgl"), f.querySelector("input").setAttribute(this._ariaHidden, !0))
                }
                p && (y && qn.setAlwaysActive(e), on.setInputID(s[d], n, a, l, r))
            }
    }, jn.prototype.setAlwaysActive = function(e, t) {
        void 0 === t && (t = !1);
        var o = kt.pcName;
        if (o === Qe || o === Ze || t) e.querySelector(Vt.P_Tgl_Cntr).insertAdjacentElement("afterbegin", Lt("<div class='ot-always-active'>" + vt.AlwaysActiveText + "</div>", "ce").el);
        else {
            var n = e.querySelector(Vt.P_Category_Header);
            !nt.isV2Template && vt.PCenterEnableAccordion && (n = e.querySelector(Vt.P_Arrw_Cntr)), Lt(n).el.insertAdjacentElement("afterend", Lt("<div class='ot-always-active'>" + vt.AlwaysActiveText + "</div>", "ce").el)
        }
        if (vt.PCenterEnableAccordion) {
            var r = e.querySelector(Vt.P_Acc_Header);
            r && r.classList.add("ot-always-active-group")
        } else {
            var s = e.querySelector("" + Vt.P_Desc_Container);
            s && s.classList.add("ot-always-active-group"), e.classList.add("ot-always-active-group")
        }
    }, jn);

    function jn() {
        this._ariaHidden = "aria-hidden"
    }
    var Un, zn = (Kn.prototype.showBanner = function() {
        var e = kt.bannerName,
            t = Lt(this.El);
        ot.skipAddingHTML && "none" === getComputedStyle(t.el[0]).getPropertyValue("display") && e !== je && e !== Me && e !== Ke ? t.css("display: block;") : vt.BAnimation === re.SlideIn ? this.slideInAnimation(t, e) : vt.BAnimation === re.FadeIn && t.addClass("ot-fade-in")
    }, Kn.prototype.insertAlertHtml = function() {
        function e(e) {
            return s.querySelector(e)
        }

        function t(e) {
            return s.querySelectorAll(e)
        }
        var o = this,
            n = [{
                type: "purpose",
                titleKey: "BannerPurposeTitle",
                descriptionKey: "BannerPurposeDescription",
                identifier: "purpose-option"
            }, {
                type: "feature",
                titleKey: "BannerFeatureTitle",
                descriptionKey: "BannerFeatureDescription",
                identifier: "feature-option"
            }, {
                type: "information",
                titleKey: "BannerInformationTitle",
                descriptionKey: "BannerInformationDescription",
                identifier: "information-option"
            }],
            r = vt.BannerPurposeTitle || vt.BannerPurposeDescription || vt.BannerFeatureTitle || vt.BannerFeatureDescription || vt.BannerInformationTitle || vt.BannerInformationDescription,
            s = document.createDocumentFragment();
        if (Ko.bannerGroup) {
            var i = kt.bannerName,
                l = document.createElement("div");
            Lt(l).html(Ko.bannerGroup.html);
            var a = l.querySelector("#onetrust-banner-sdk");
            vt.BannerRelativeFontSizesToggle && Lt(a).addClass("otRelFont"), vt.BannerFocus && a.setAttribute("tabindex", "0"), vt.useRTL && Lt(a).attr("dir", "rtl"), "IAB2" === kt.iabType && vt.BannerDPDDescription.length && Lt(a).addClass("ot-iab-2");
            var c = vt.BannerPosition;
            if (c && ("bottom-left" === c ? Lt(a).addClass("ot-bottom-left") : "bottom-right" === c ? Lt(a).addClass("ot-bottom-right") : Lt(a).addClass(c)), Lt(s).append(a), vt.BannerTitle ? (Lt(e("#onetrust-policy-title")).html(vt.BannerTitle), Lt(e('[role="alertdialog"]')).attr("aria-label", vt.BannerTitle)) : (At.removeChild(e("#onetrust-policy-title")), Lt(e("#onetrust-banner-sdk")).addClass("ot-wo-title"), Lt(e('[role="alertdialog"]')).attr("aria-label", vt.AriaPrivacy)), !vt.IsIabEnabled && ot.showGeneralVendors && vt.BannerNonIABVendorListText) {
                var d = document.createElement("div");
                d.setAttribute("id", "ot-gv-link-ctnr"), Lt(d).html('<button class="ot-link-btn ot-gv-list-handler">' + vt.BannerNonIABVendorListText + "</button>"), Lt(e("#onetrust-policy")).el.appendChild(d)
            }
            Lt(e("#onetrust-policy-text")).html(vt.AlertNoticeText), "IAB2" === vt.IabType && vt.BannerDPDDescription.length && i !== We ? (Lt(e(".ot-dpd-container .ot-dpd-title")).html(vt.BannerDPDTitle), Lt(e(".ot-dpd-container .ot-dpd-desc")).html(vt.BannerDPDDescription.join(",&nbsp;"))) : At.removeChild(e(".ot-dpd-container"));
            var p = Lt(e("#onetrust-group-container"));
            "IAB2" === kt.iabType && vt.BannerAdditionalDescription.trim() && this.setAdditionalDesc(e);
            var u = "IAB2" === vt.IabType && vt.BannerDPDDescription.length ? i !== We ? Lt(e(".ot-dpd-container .ot-dpd-desc")) : p : Lt(e("#onetrust-policy-text"));
            vt.IsIabEnabled && vt.BannerIABPartnersLink && u.append('<button class="ot-link-btn onetrust-vendors-list-handler">\n                ' + vt.BannerIABPartnersLink + "\n                </button>"), vt.showBannerAcceptButton ? (this._acceptBtn = e("#onetrust-accept-btn-handler"), Lt(this._acceptBtn).html(vt.AlertAllowCookiesText), i !== Ke || vt.showBannerCookieSettings || vt.BannerShowRejectAllButton || Lt(this._acceptBtn.parentElement).addClass("accept-btn-only")) : At.removeChild(e("#onetrust-accept-btn-handler")), vt.BannerShowRejectAllButton && vt.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e("#onetrust-reject-all-handler"), Lt(this._rejectBtn).html(vt.BannerRejectAllButtonText), e("#onetrust-button-group-parent").classList.add("has-reject-all-button")) : (At.removeChild(e("#onetrust-reject-all-handler")), At.removeChild(e("#onetrust-reject-btn-container")));
            var h = Lt(e("#onetrust-pc-btn-handler"));
            vt.showBannerCookieSettings ? (h.html(vt.AlertMoreInfoText), vt.BannerSettingsButtonDisplayLink && h.addClass("cookie-setting-link"), i !== Ke || vt.showBannerAcceptButton || h.addClass("cookie-settings-btn-only")) : At.removeChild(h.el);
            var g = !vt.showBannerAcceptButton && !vt.showBannerCookieSettings && !vt.BannerShowRejectAllButton;
            g && e("#onetrust-button-group-parent").parentElement.removeChild(e("#onetrust-button-group-parent"));
            var C = vt.showBannerCloseButton,
                y = Lt(t(".banner-close-button")).el,
                f = e("#onetrust-button-group"),
                k = vt.BCloseButtonType === ie.Link;
            if (C)
                for (v = 0; v < y.length; v++) k ? (Lt(y[v]).html(vt.BContinueText), Lt(a).addClass("ot-close-btn-link"), Lt(y[v]).removeClass("onetrust-close-btn-ui"), Lt(y[v]).removeClass("ot-close-icon"), i !== Ue && i !== ze || (f.insertAdjacentElement("afterbegin", e(".onetrust-close-btn-handler").parentElement), Lt(y[v]).attr("tabindex", "1"))) : Lt(y[v]).el.setAttribute("aria-label", vt.BannerCloseButtonText || "Close Cookie Banner");
            else {
                for (var v = 0; v < y.length; v++) Lt(y[v].parentElement).el.removeChild(y[v]);
                i !== Me && i !== ze || At.removeChild(e("#onetrust-close-btn-container-mobile"))
            }
            if (i === Me && ("IAB2" === kt.iabType && (p.removeClass("ot-sdk-eight"), vt.showBannerAcceptButton && f.insertAdjacentElement("afterbegin", this._acceptBtn), vt.showBannerCookieSettings && f.insertAdjacentElement("beforeend", e("#onetrust-pc-btn-handler"))), C && !g && "IAB2" === kt.iabType ? p.addClass("ot-sdk-nine") : C && g ? p.addClass("ot-sdk-eleven") : !C && g ? p.addClass("ot-sdk-twelve") : C || g || "IAB2" !== kt.iabType || (p.addClass("ot-sdk-ten"), Lt(e("#onetrust-button-group-parent")).addClass("ot-sdk-two"), Lt(e("#onetrust-button-group-parent")).removeClass("ot-sdk-three"))), C && i === Ue && "IAB2" === kt.iabType && !k) {
                var b = e(".banner-close-btn-container");
                b.parentElement.removeChild(b), Lt(a).el.insertAdjacentElement("beforeEnd", b), Lt(e("#onetrust-banner-sdk .ot-sdk-container")).addClass("ot-top-cntr")
            }
            var m = Lt(e("#banner-options")).el;
            r ? (i === ze ? this.setFloatingRoundedIconBannerCmpOptions(e, n) : (this.setCmpBannerOptions(e, n), i === We && p.el.insertAdjacentElement("beforeend", m)), Lt(window).on("resize", function() {
                window.innerWidth <= 896 && o.setBannerOptionContent()
            })) : (kt.bannerName === Ue && (m = Lt(e(".banner-options-card")).el), At.removeChild(m))
        }
        kt.bannerName === We && (this._fourBtns = vt.BannerShowRejectAllButton && vt.showBannerAcceptButton && vt.showBannerCookieSettings && vt.BShowSaveBtn, this._saveBtn = e(".ot-bnr-save-handler"), this._settingsBtn = e("#onetrust-pc-btn-handler"), this._btnsCntr = e(".banner-actions-container"), vt.BShowSaveBtn ? Lt(this._saveBtn).html(vt.BSaveBtnTxt) : (At.removeChild(this._saveBtn), this._saveBtn = null), wt.insertFooterLogo(t(".ot-bnr-footer-logo a")), this._descriptCntr = e(".ot-cat-lst"), this.setBannerBtn(), window.addEventListener("resize", function() {
            o.setBannerBtn()
        }), this._fourBtns && Lt(e("#onetrust-banner-sdk")).addClass("has-reject-all-button"), this.insertGrps(e));
        var P = document.createElement("div");
        Lt(P).append(s), kt.ignoreInjectingHtmlCss || (Lt("#onetrust-consent-sdk").append(P.firstChild), r && this.setBannerOptionContent());
        var A = Lt("#onetrust-group-container").el,
            T = Lt("#onetrust-button-group-parent").el;
        (A.length && A[0].clientHeight) < (T.length && T[0].clientHeight) ? Lt("#onetrust-banner-sdk").removeClass("vertical-align-content"): Lt("#onetrust-banner-sdk").addClass("vertical-align-content");
        var S = document.querySelector("#onetrust-button-group-parent button:first-of-type"),
            _ = document.querySelector("#onetrust-button-group-parent button:last-of-type");
        _ && S && 1 < Math.abs(_.offsetTop - S.offsetTop) && Lt("#onetrust-banner-sdk").addClass("ot-buttons-fw")
    }, Kn.prototype.slideInAnimation = function(e, t) {
        t === Me ? "bottom" === vt.BannerPosition ? (e.css("bottom: -99px;"), e.animate({
            bottom: "0px"
        }, 1e3), ot.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 0px;"), ot.bnrAnimationInProg = !1
        }, 1e3)) : (e.css("top: -99px; bottom: auto;"), kt.pagePushedDown && !io.checkIsBrowserIE11OrBelow() ? io.BannerPushDownHandler() : (e.animate({
            top: "0"
        }, 1e3), ot.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("top: 0px; bottom: auto;"), ot.bnrAnimationInProg = !1
        }, 1e3))) : t !== je && t !== Ke || (e.css("bottom: -300px;"), e.animate({
            bottom: "1em"
        }, 2e3), ot.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 1rem;"), ot.bnrAnimationInProg = !1
        }, 2e3))
    }, Kn.prototype.setBannerBtn = function() {
        window.innerWidth <= 600 ? (At.insertElement(this._btnsCntr, this._settingsBtn, "afterbegin"), At.insertElement(this._btnsCntr, this._saveBtn, "afterbegin"), At.insertElement(this._btnsCntr, this._acceptBtn, "afterbegin"), At.insertElement(this._btnsCntr, this._rejectBtn, "afterbegin")) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement("beforeend", this._settingsBtn), this._acceptBtn.insertAdjacentElement("beforebegin", this._rejectBtn), this._btnsCntr.insertAdjacentElement("beforebegin", this._saveBtn)) : (At.insertElement(this._btnsCntr, this._settingsBtn, "beforebegin"), At.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? "afterbegin" : "beforebegin"), At.insertElement(this._btnsCntr, this._rejectBtn, "beforeend"), At.insertElement(this._btnsCntr, this._acceptBtn, "beforeend"))
    }, Kn.prototype.setCmpBannerOptions = function(s, e) {
        var i = Lt(s("#banner-options .banner-option")).el.cloneNode(!0);
        Lt(s("#banner-options")).html("");
        var l = 1;
        e.forEach(function(e) {
            var t = i.cloneNode(!0),
                o = vt[e.titleKey],
                n = vt[e.descriptionKey];
            if (o || n) {
                t.querySelector(".banner-option-header :first-child").innerHTML = o;
                var r = t.querySelector(".banner-option-details");
                n ? (r.setAttribute("id", "option-details-" + l++), r.innerHTML = n) : r.parentElement.removeChild(r), Lt(s("#banner-options")).el.appendChild(t)
            }
        })
    }, Kn.prototype.setFloatingRoundedIconBannerCmpOptions = function(r, e) {
        var s = Lt(r("#banner-options button")).el.cloneNode(!0),
            n = Lt(r(".banner-option-details")).el.cloneNode(!0);
        Lt(r("#banner-options")).html(""), e.forEach(function(e) {
            var t = s.cloneNode(!0),
                o = vt[e.titleKey],
                n = vt[e.descriptionKey];
            (o || n) && (t.setAttribute("id", e.identifier), t.querySelector(".banner-option-header :first-child").innerHTML = o, Lt(r("#banner-options")).el.appendChild(t))
        }), e.forEach(function(e) {
            var t = vt[e.descriptionKey];
            if (t) {
                var o = n.cloneNode(!0);
                o.innerHTML = t, o.classList.add(e.identifier), Lt(r("#banner-options")).el.appendChild(o)
            }
        })
    }, Kn.prototype.setBannerOptionContent = function() {
        kt.bannerName !== Me && kt.bannerName !== ze || setTimeout(function() {
            if (window.innerWidth < 769) {
                var e = Lt("#banner-options").el[0];
                Lt("#onetrust-group-container").el[0].appendChild(e)
            } else e = Lt("#banner-options").el[0], kt.bannerName === ze ? Lt(".banner-content").el[0].appendChild(e) : Lt("#onetrust-banner-sdk .ot-sdk-container").el[0].appendChild(e)
        })
    }, Kn.prototype.setAdditionalDesc = function(e) {
        var t = vt.BannerAdditionalDescPlacement,
            o = document.createElement("span");
        o.classList.add("ot-b-addl-desc"), o.innerHTML = vt.BannerAdditionalDescription;
        var n = e("#onetrust-policy-text");
        if (t === B.AfterTitle) n.insertAdjacentElement("beforeBegin", o);
        else if (t === B.AfterDescription) n.insertAdjacentElement("afterEnd", o);
        else if (t === B.AfterDPD) {
            var r = e(".ot-dpd-container .ot-dpd-desc");
            vt.ChoicesBanner && (r = e("#onetrust-group-container")), r.insertAdjacentElement("beforeEnd", o)
        }
    }, Kn.prototype.insertGrps = function(e) {
        var u = e(".ot-cat-item").cloneNode(!0);
        At.removeChild(e(".ot-cat-item")), vt.BCategoryStyle === oe.Checkbox ? At.removeChild(u.querySelector(".ot-tgl")) : (At.removeChild(u.querySelector(".ot-chkbox")), Lt(u).addClass("ot-cat-bdr"));
        var h = e(".ot-cat-lst ul");
        vt.Groups.forEach(function(e) {
            var t = u.cloneNode(!0),
                o = t.querySelector(".ot-tgl,.ot-chkbox"),
                n = e.GroupName,
                r = e.CustomGroupId,
                s = "ot-bnr-grp-id-" + r,
                i = "ot-bnr-hdr-id-" + r,
                l = -1 !== gt.indexOf(e.Type),
                a = Ht.getGrpStatus(e).toLowerCase() === Be || l,
                c = on.isGroupActive(e) || l;
            Lt(o.querySelector("label")).attr("for", s), Lt(o.querySelector(".ot-label-txt")).html(e.GroupName);
            var d = o.querySelector("input");
            a && (vt.BCategoryStyle === oe.Toggle ? (At.removeChild(o), t.insertAdjacentElement("beforeend", Lt("<div class='ot-always-active'>" + vt.AlwaysActiveText + "</div>", "ce").el)) : Lt(d).attr("disabled", !0)), d.classList.add("category-switch-handler"), on.setInputID(d, s, r, c, i);
            var p = t.querySelector("h4");
            Lt(p).html(n), Lt(p).attr("id", i), Lt(h).append(t)
        })
    }, Kn);

    function Kn() {
        this.El = "#onetrust-banner-sdk", this._saveBtn = null, this._settingsBtn = null, this._acceptBtn = null, this._rejectBtn = null, this._descriptCntr = null, this._btnsCntr = null, this._fourBtns = !1
    }
    var Wn, Jn = (Xn.prototype.initCookieSettingHandlers = function() {
        Lt(document).on("click", ".optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler", this.cookieSettingsBoundListner)
    }, Xn.prototype.initFlgtCkStgBtnEventHandlers = function() {
        Lt(".ot-floating-button__open").on("click", Wn.floatingCookieSettingOpenBtnClicked), Lt(".ot-floating-button__close").on("click", Wn.floatingCookieSettingCloseBtnClicked)
    }, Xn.prototype.floatingCookieSettingOpenBtnClicked = function(e) {
        Lt(Wn.fltgBtnSltr).addClass("ot-pc-open"), Lt(Wn.fltgBtnFSltr).attr("aria-hidden", "true"), Lt(Wn.fltgBtnBSltr).attr("aria-hidden", ""), Lt(Wn.fltgBtnFrontBtn).el[0].setAttribute("aria-label", ""), Lt(Wn.fltgBtnFrontBtn).el[0].setAttribute("aria-hidden", !0), Lt(Wn.fltgBtnBackBtn).el[0].setAttribute("aria-label", vt.AriaClosePreferences), Lt(Wn.fltgBtnBackBtn).el[0].setAttribute("aria-hidden", !1), uo.triggerGoogleAnalyticsEvent(fo, Io), Wn.showCookieSettingsHandler(e)
    }, Xn.prototype.floatingCookieSettingCloseBtnClicked = function(e) {
        Lt(Wn.fltgBtnFrontBtn).el[0].setAttribute("aria-label", vt.AriaOpenPreferences), Lt(Wn.fltgBtnFrontBtn).el[0].setAttribute("aria-hidden", !1), Lt(Wn.fltgBtnBackBtn).el[0].setAttribute("aria-label", ""), Lt(Wn.fltgBtnBackBtn).el[0].setAttribute("aria-hidden", !0), e && (uo.triggerGoogleAnalyticsEvent(fo, Lo), Wn.hideCookieSettingsHandler(e))
    }, Xn.prototype.initialiseLegIntBtnHandlers = function() {
        Lt(document).on("click", ".ot-obj-leg-btn-handler", Wn.onLegIntButtonClick), Lt(document).on("click", ".ot-remove-objection-handler", Wn.onLegIntButtonClick)
    }, Xn.prototype.initialiseAddtlVenHandler = function() {
        Lt("#onetrust-pc-sdk #ot-addtl-venlst").on("click", Wn.selectVendorsGroupHandler), Lt("#onetrust-pc-sdk #ot-selall-adtlven-handler").on("click", Wn.selAllAdtlVenHandler)
    }, Xn.prototype.initializeGenVenHandlers = function() {
        Lt("#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler").on("click", Wn.genVendorToggled), Lt("#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox").on("click", Wn.genVendorDetails), Lt("#onetrust-pc-sdk #ot-selall-gnven-handler").on("click", Wn.selectAllGenVenHandler)
    }, Xn.prototype.initialiseConsentNoticeHandlers = function() {
        var t = 37,
            o = 39;
        if (kt.pcName === Ze && Wn.categoryMenuSwitchHandler(), Lt("#onetrust-pc-sdk .onetrust-close-btn-handler").on("click", Wn.bannerCloseButtonHandler), Lt("#onetrust-pc-sdk #accept-recommended-btn-handler").on("click", xn.allowAllEventHandler.bind(this, !0)), Lt("#onetrust-pc-sdk .ot-pc-refuse-all-handler").on("click", xn.rejectAllEventHandler.bind(this, !0)), Lt("#onetrust-pc-sdk #close-pc-btn-handler").on("click", Wn.hideCookieSettingsHandler), Lt(document).on("keydown", function(e) {
                var t = document.getElementById("onetrust-pc-sdk");
                if (27 === e.keyCode && t && "none" !== window.getComputedStyle(t).display) {
                    var o = Lt("#onetrust-pc-sdk " + Vt.P_Fltr_Modal).el[0];
                    "block" === o.style.display || "0px" < o.style.width ? (Wn.closeFilter(), Lt("#onetrust-pc-sdk #filter-btn-handler").focus()) : vt.NoBanner && !vt.ShowPreferenceCenterCloseButton || Wn.hideCookieSettingsHandler(), Wn.confirmPC()
                }
            }), Lt("#onetrust-pc-sdk #vendor-close-pc-btn-handler").on("click", Wn.hideCookieSettingsHandler), Lt("#onetrust-pc-sdk .category-switch-handler").on("click", Wn.toggleV2Category), Lt("#onetrust-pc-sdk .cookie-subgroup-handler").on("click", Wn.toggleSubCategory), Lt("#onetrust-pc-sdk .category-menu-switch-handler").on("keydown", function(e) {
                kt.pcName === Ze && (e.keyCode !== t && e.keyCode !== o || (vt.PCTemplateUpgrade ? Wn.changeSelectedTabV2(e) : Wn.changeSelectedTab(e)))
            }), Lt("#onetrust-pc-sdk").on("click", Vt.P_Category_Item + " > input:first-child," + Vt.P_Category_Item + " > button:first-child", Wn.onCategoryItemToggle.bind(this)), (vt.showCookieList || ot.showGeneralVendors) && (Lt("#onetrust-pc-sdk .category-host-list-handler").on("click", function(e) {
                ot.showGeneralVendors && vt.showCookieList ? ot.cookieListType = z.HostAndGenVen : ot.showGeneralVendors ? ot.cookieListType = z.GenVen : ot.cookieListType = z.Host, Wn.pcLinkSource = e.target, Wn.loadCookieList(e.target)
            }), vt.allowHostOptOut || ot.genVenOptOutEnabled ? (Lt("#onetrust-pc-sdk #select-all-hosts-groups-handler").on("click", Wn.selectAllHostsGroupsHandler), Lt("#onetrust-pc-sdk " + Vt.P_Host_Cntr).on("click", Wn.selectHostsGroupHandler)) : Lt("#onetrust-pc-sdk " + Vt.P_Host_Cntr).on("click", Wn.toggleAccordionStatus)), vt.IsIabEnabled && (Lt("#onetrust-pc-sdk .category-vendors-list-handler").on("click", function(e) {
                Wn.pcLinkSource = e.target, Wn.showVendorsList(e.target)
            }), Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Container).on("click", Wn.selectVendorsGroupHandler), vt.UseGoogleVendors || Wn.bindSelAllHandlers(), Wn.initialiseLegIntBtnHandlers()), vt.IsIabEnabled || vt.showCookieList || ot.showGeneralVendors) {
            Lt(document).on("click", ".back-btn-handler", Wn.backBtnHandler), Lt("#onetrust-pc-sdk #vendor-search-handler").on("keyup", function(e) {
                var t = e.target.value.trim();
                Wn.isCookieList ? gn.searchHostList(t) : (gn.loadVendorList(t, []), vt.UseGoogleVendors && gn.searchVendors(gn.googleSearchSelectors, ot.addtlVendorsList, Q.GoogleVendor, t), ot.showGeneralVendors && gn.searchVendors(gn.genVendorSearchSelectors, vt.GeneralVendors, Q.GeneralVendor, t)), gn.playSearchStatus(Wn.isCookieList)
            }), Lt("#onetrust-pc-sdk #filter-btn-handler").on("click", Wn.toggleVendorFiltersHandler), Lt("#onetrust-pc-sdk #filter-apply-handler").on("click", Wn.applyFilterHandler), Lt("#onetrust-pc-sdk " + Vt.P_Fltr_Modal).on("click", Wn.tglFltrOptionHandler), !nt.isV2Template && kt.pcName !== Qe || Lt("#onetrust-pc-sdk #filter-cancel-handler").on("click", Wn.cancelFilterHandler), !nt.isV2Template && kt.pcName === Qe || Lt("#onetrust-pc-sdk #clear-filters-handler").on("click", Wn.clearFiltersHandler), nt.isV2Template ? Lt("#onetrust-pc-sdk #filter-cancel-handler").on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), Lt("#onetrust-pc-sdk #clear-filters-handler").el[0].focus())
            }) : Lt("#onetrust-pc-sdk #filter-apply-handler").on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), Lt("#onetrust-pc-sdk .category-filter-handler").el[0].focus())
            });
            var e = Lt("#onetrust-pc-sdk .category-filter-handler").el;
            Lt(e[0]).on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || !e.shiftKey || (e.preventDefault(), Lt("#onetrust-pc-sdk #filter-apply-handler").el[0].focus())
            })
        }
        vt.NoBanner && (vt.OnClickCloseBanner && document.body.addEventListener("click", xn.bodyClickEvent), vt.ScrollCloseBanner && window.addEventListener("scroll", xn.scrollCloseBanner))
    }, Xn.prototype.bindSelAllHandlers = function() {
        Lt("#onetrust-pc-sdk #select-all-vendor-leg-handler").on("click", Wn.selectAllVendorsLegIntHandler), Lt("#onetrust-pc-sdk #select-all-vendor-groups-handler").on("click", Wn.SelectAllVendorConsentHandler)
    }, Xn.prototype.hideCookieSettingsHandler = function(e) {
        return void 0 === e && (e = window.event), uo.triggerGoogleAnalyticsEvent(fo, mo), bn.hideConsentNoticeV2(), Wn.getResizeElement().removeEventListener("resize", Wn.setCenterLayoutFooterHeight), window.removeEventListener("resize", Wn.setCenterLayoutFooterHeight), !nt.isV2Template && kt.pcName !== Qe || Wn.closeFilter(!1), kt.pcName === Ye && Lt("#onetrust-pc-sdk " + Vt.P_Content).removeClass("ot-hide"), Wn.hideVendorsList(), Ko.csBtnGroup && (Lt(Wn.fltgBtnSltr).removeClass("ot-pc-open"), Wn.floatingCookieSettingCloseBtnClicked(null)), Wn.confirmPC(e), !1
    }, Xn.prototype.selectAllHostsGroupsHandler = function(e) {
        var t = e.target.checked,
            o = Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Host_El).el[0],
            n = o.classList.contains("line-through"),
            r = Lt("#onetrust-pc-sdk .host-checkbox-handler").el;
        At.setCheckedAttribute("#select-all-hosts-groups-handler", null, t);
        for (var s = 0; s < r.length; s++) r[s].getAttribute("disabled") || At.setCheckedAttribute(null, r[s], t);
        ot.optanonHostList.forEach(function(e) {
            Zt.updateHostStatus(e, t)
        }), vt.GeneralVendors.forEach(function(e) {
            Yt.updateGenVendorStatus(e.VendorCustomId, t)
        }), n && o.classList.remove("line-through")
    }, Xn.prototype.selectHostsGroupHandler = function(e) {
        Wn.toggleAccordionStatus(e);
        var t = e.target.getAttribute("hostId"),
            o = e.target.getAttribute("ckType"),
            n = e.target.checked;
        if (null !== t) {
            if (o === j.GenVendor) {
                var r = vt.GeneralVendors.find(function(e) {
                    return e.VendorCustomId === t
                }).Name;
                uo.triggerGoogleAnalyticsEvent(fo, n ? Eo : xo, r + ": VEN_" + t), Yt.updateGenVendorStatus(t, n)
            } else {
                var s = At.findIndex(ot.optanonHostList, function(e) {
                        return e.HostId === t
                    }),
                    i = ot.optanonHostList[s];
                Wn.toggleHostStatus(i, n)
            }
            At.setCheckedAttribute(null, e.target, n)
        }
    }, Xn.prototype.onCategoryItemToggle = function(e) {
        kt.pcName === Ye && this.setPcListContainerHeight(), Wn.toggleAccordionStatus(e)
    }, Xn.prototype.toggleAccordionStatus = function(e) {
        var t = e.target;
        if (t && t.getAttribute("aria-expanded")) {
            var o = "true" === t.getAttribute("aria-expanded") ? "false" : "true";
            t.setAttribute("aria-expanded", o)
        }
    }, Xn.prototype.toggleHostStatus = function(e, t) {
        uo.triggerGoogleAnalyticsEvent(fo, t ? Vo : Go, e.HostName + ": H_" + e.HostId), Zt.updateHostStatus(e, t)
    }, Xn.prototype.toggleBannerOptions = function(e) {
        Lt(".banner-option-input").each(function(e) {
            Lt(e).el.setAttribute("aria-expanded", !1)
        }), Wn.toggleAccordionStatus(e)
    }, Xn.prototype.bannerCloseButtonHandler = function(e) {
        if (e && e.target && e.target.className) {
            var t = e.target.className; - 1 < t.indexOf("save-preference-btn-handler") ? (ot.bannerCloseSource = f.ConfirmChoiceButton, uo.triggerGoogleAnalyticsEvent(fo, So)) : -1 < t.indexOf("banner-close-button") ? (ot.bannerCloseSource = f.BannerCloseButton, uo.triggerGoogleAnalyticsEvent(fo, vo)) : -1 < t.indexOf("ot-bnr-save-handler") && (ot.bannerCloseSource = f.BannerSaveSettings, uo.triggerGoogleAnalyticsEvent(fo, bo))
        }
        return Wn.hideVendorsList(), xn.bannerCloseButtonHandler()
    }, Xn.prototype.onLegIntButtonClick = function(e) {
        if (e) {
            var t = e.currentTarget,
                o = "true" === t.parentElement.getAttribute("is-vendor"),
                n = t.parentElement.getAttribute("data-group-id"),
                r = !t.classList.contains("ot-leg-int-enabled");
            if (o) Wn.onVendorToggle(n, V.LI);
            else {
                var s = Ht.getGroupById(n);
                s.Parent ? Wn.updateSubGroupToggles(s, r, !0) : Wn.updateGroupToggles(s, r, !0)
            }
            on.updateLegIntBtnElement(t.parentElement, r)
        }
    }, Xn.prototype.updateGroupToggles = function(e, t, o) {
        Zt.toggleGroupHosts(e, t), ot.genVenOptOutEnabled && Zt.toggleGroupGenVendors(e, t), e.IsLegIntToggle = o, on.toggleGrpStatus(e, t), e.SubGroups && e.SubGroups.length && on.toogleAllSubGrpElements(e, t), this.allowAllVisible(on.setAllowAllButton()), e.IsLegIntToggle = !1
    }, Xn.prototype.updateSubGroupToggles = function(e, t, o) {
        Zt.toggleGroupHosts(e, t), ot.genVenOptOutEnabled && Zt.toggleGroupGenVendors(e, t);
        var n = Ht.getGroupById(e.Parent);
        e.IsLegIntToggle = o, n.IsLegIntToggle = e.IsLegIntToggle;
        var r = on.isGroupActive(n);
        t ? (on.toggleGrpStatus(e, !0), on.isAllSubgroupsEnabled(n) && !r && (on.toggleGrpStatus(n, !0), Zt.toggleGroupHosts(n, t), ot.genVenOptOutEnabled && Zt.toggleGroupGenVendors(n, t), on.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !0))) : (on.toggleGrpStatus(e, !1), on.isAllSubgroupsDisabled(n) && r ? (on.toggleGrpStatus(n, !1), Zt.toggleGroupHosts(n, t), ot.genVenOptOutEnabled && Zt.toggleGroupGenVendors(n, t), on.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), t)) : (on.toggleGrpStatus(n, !1), Zt.toggleGroupHosts(n, !1), ot.genVenOptOutEnabled && Zt.toggleGroupGenVendors(n, t), on.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !1))), this.allowAllVisible(on.setAllowAllButton()), e.IsLegIntToggle = !1, n.IsLegIntToggle = e.IsLegIntToggle
    }, Xn.prototype.hideCategoryContainer = function(e) {
        void 0 === e && (e = !1);
        var t = kt.pcName,
            o = nt.isV2Template;
        this.isCookieList = e, vt.PCTemplateUpgrade ? Lt("#onetrust-pc-sdk " + Vt.P_Content).addClass("ot-hide") : Lt("#onetrust-pc-sdk .ot-main-content").hide(), Lt("#onetrust-pc-sdk " + Vt.P_Vendor_List).removeClass("ot-hide"), t !== Qe && t !== Ye && Lt("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(), t === Ye && bt(Lt("#onetrust-pc-sdk").el[0], 'height: "";', !0), e ? (Lt(Vt.P_Vendor_List + " #select-all-text-container").show("inline-block"), Lt("#onetrust-pc-sdk " + Vt.P_Host_Cntr).show(), vt.allowHostOptOut || ot.genVenOptOutEnabled ? Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Host_El).show("inline-block") : Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Host_El).hide(), Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Vendor_Leg_El).hide(), Lt("#onetrust-pc-sdk " + Vt.P_Leg_Header).hide(), o || Lt("#onetrust-pc-sdk " + Vt.P_Leg_Select_All).hide(), Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Vendor_Consent_El).hide(), Lt("#onetrust-pc-sdk  " + Vt.P_Vendor_Container).hide(), (vt.UseGoogleVendors || ot.showGeneralVendors) && Lt("#onetrust-pc-sdk .ot-acc-cntr").hide(), Lt("#onetrust-pc-sdk " + Vt.P_Vendor_List).addClass(Vt.P_Host_UI), Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Content).addClass(Vt.P_Host_Cnt)) : (Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Container).show(), Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Vendor_Consent_El).show("inline-block"), vt.UseGoogleVendors && Lt("#onetrust-pc-sdk .ot-acc-cntr").show(), kt.legIntSettings.PAllowLI && "IAB2" === kt.iabType ? (Lt("#onetrust-pc-sdk " + Vt.P_Select_Cntr).show(nt.isV2Template ? void 0 : "inline-block"), Lt("#onetrust-pc-sdk " + Vt.P_Leg_Select_All).show("inline-block"), Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Vendor_Leg_El).show("inline-block"), Lt(Vt.P_Vendor_List + " #select-all-text-container").hide(), kt.legIntSettings.PShowLegIntBtn ? (Lt("#onetrust-pc-sdk " + Vt.P_Leg_Header).hide(), Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Vendor_Leg_El).hide()) : Lt("#onetrust-pc-sdk " + Vt.P_Leg_Header).show()) : (Lt("#onetrust-pc-sdk " + Vt.P_Select_Cntr).show(), Lt(Vt.P_Vendor_List + " #select-all-text-container").show("inline-block"), Lt("#onetrust-pc-sdk " + Vt.P_Leg_Select_All).hide(), Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Vendor_Leg_El).hide()), Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Host_El).hide(), Lt("#onetrust-pc-sdk " + Vt.P_Host_Cntr).hide(), Lt("#onetrust-pc-sdk " + Vt.P_Vendor_List).removeClass(Vt.P_Host_UI), Lt("#onetrust-pc-sdk " + Vt.P_Vendor_Content).removeClass(Vt.P_Host_Cnt)), On.setFilterList(e)
    }, Xn.prototype.showAllVendors = function(t) {
        return a(this, void 0, void 0, function() {
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, Wn.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), Wn.showVendorsList(null, !0), [4, Wn.showCookieSettingsHandler(t)];
                    case 2:
                        return e.sent(), [2]
                }
            })
        })
    }, Xn.prototype.fetchAndSetupPC = function() {
        return a(this, void 0, void 0, function() {
            var t, o;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return nt.moduleInitializer.IsSuppressPC && 0 === Lt("#onetrust-pc-sdk").length ? [4, jo.getPcContent()] : [3, 2];
                    case 1:
                        t = e.sent(), Ko.preferenceCenterGroup = {
                            name: t.name,
                            html: atob(t.html),
                            css: t.css
                        }, nt.isV2Template = vt.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name), (o = document.getElementById("onetrust-style")).innerHTML += Ko.preferenceCenterGroup.css, o.innerHTML += Dn.addCustomPreferenceCenterCSS(), qn.insertPcHtml(), Wn.initialiseConsentNoticeHandlers(), vt.IsIabEnabled && gn.InitializeVendorList(), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, Xn.prototype.setVendorContent = function() {
        Lt("#onetrust-pc-sdk #filter-count").text(ot.filterByIABCategories.length.toString()), gn.loadVendorList("", ot.filterByIABCategories), vt.UseGoogleVendors && (ot.vendorDomInit ? gn.resetAddtlVendors() : (gn.initGoogleVendors(), Lt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", Wn.toggleAccordionStatus.bind(this)))), ot.vendorDomInit || (ot.vendorDomInit = !0, Wn.initialiseLegIntBtnHandlers(), vt.UseGoogleVendors && (Wn.initialiseAddtlVenHandler(), Wn.bindSelAllHandlers())), ot.showGeneralVendors && !ot.genVendorDomInit && (ot.genVendorDomInit = !0, gn.initGenVendors(), Wn.initializeGenVenHandlers(), vt.UseGoogleVendors || (Wn.bindSelAllHandlers(), Lt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", Wn.toggleAccordionStatus.bind(this))))
    }, Xn.prototype.showVendorsList = function(e, t) {
        if (void 0 === t && (t = !1), Wn.hideCategoryContainer(!1), !t) {
            var o = e.getAttribute("data-parent-id");
            if (o) {
                var n = Ht.getGroupById(o);
                if (n) {
                    var r = g(n.SubGroups, [n]).reduce(function(e, t) {
                        return -1 < pt.indexOf(t.Type) && e.push(t.CustomGroupId), e
                    }, []);
                    ot.filterByIABCategories = g(ot.filterByIABCategories, r)
                }
            }
        }
        return Wn.setVendorContent(), pn.updateFilterSelection(!1), Wn.setBackButtonFocus(), ot.pcLayer = S.VendorList, e && Zo.setPCFocus(Zo.getPCElements()), !1
    }, Xn.prototype.loadCookieList = function(e) {
        ot.filterByCategories = [], Wn.hideCategoryContainer(!0);
        var t = e && e.getAttribute("data-parent-id");
        if (t) {
            var o = Ht.getGroupById(t);
            ot.filterByCategories.push(t), o.SubGroups.length && o.SubGroups.forEach(function(e) {
                if (-1 === pt.indexOf(e.Type)) {
                    var t = e.CustomGroupId;
                    ot.filterByCategories.indexOf(t) < 0 && ot.filterByCategories.push(t)
                }
            })
        }
        return gn.loadHostList("", ot.filterByCategories), Lt("#onetrust-pc-sdk #filter-count").text(ot.filterByCategories.length.toString()), pn.updateFilterSelection(!0), Wn.setBackButtonFocus(), ot.pcLayer = S.CookieList, Zo.setPCFocus(Zo.getPCElements()), !1
    }, Xn.prototype.selectAllVendorsLegIntHandler = function(e) {
        var t = Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Vendor_Leg_El).el[0],
            o = t.classList.contains("line-through"),
            n = Lt(Vt.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-leg-checkbox-handler').el,
            r = e.target.checked,
            s = {};
        ot.vendors.selectedLegIntVendors.map(function(e, t) {
            s[e.split(":")[0]] = t
        });
        for (var i = 0; i < n.length; i++) {
            At.setCheckedAttribute(null, n[i], r), vt.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? vt.PCActiveText : vt.PCInactiveText);
            var l = n[i].getAttribute("leg-vendorid"),
                a = s[l];
            void 0 === a && (a = l), ot.vendors.selectedLegIntVendors[a] = l + ":" + r
        }
        o && t.classList.remove("line-through"), At.setCheckedAttribute(null, e.target, r)
    }, Xn.prototype.selAllAdtlVenHandler = function(e) {
        for (var t = Lt("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0], o = t.classList.contains("line-through"), n = Lt("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el, r = e.target.checked, s = 0; s < n.length; s++) At.setCheckedAttribute(null, n[s], r), vt.PCShowConsentLabels && (n[s].parentElement.querySelector(".ot-label-status").innerHTML = r ? vt.PCActiveText : vt.PCInactiveText);
        r ? vt.UseGoogleVendors && Object.keys(ot.addtlVendorsList).forEach(function(e) {
            ot.addtlVendors.vendorSelected[e] = !0
        }) : ot.addtlVendors.vendorSelected = {}, o && t.classList.remove("line-through")
    }, Xn.prototype.selectAllGenVenHandler = function(e) {
        var t = e.target.checked;
        Wn.selectAllHandler({
            selAllEl: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            vendorBoxes: "#onetrust-pc-sdk .ot-gnven-chkbox-handler"
        }, "genven", t)
    }, Xn.prototype.selectAllHandler = function(e, t, o) {
        for (var n = Lt(e.selAllEl).el[0], r = n.classList.contains("line-through"), s = Lt(e.vendorBoxes).el, i = 0; i < s.length; i++) "genven" === t && !o && ot.alwaysActiveGenVendors.includes(s[i].getAttribute("gn-vid")) ? (At.setDisabledAttribute(null, s[i], !0), At.setCheckedAttribute(null, s[i], !0)) : At.setCheckedAttribute(null, s[i], o), vt.PCShowConsentLabels && (s[i].parentElement.querySelector(".ot-label-status").innerHTML = o ? vt.PCActiveText : vt.PCInactiveText);
        o ? "googleven" === t && vt.UseGoogleVendors ? Object.keys(ot.addtlVendorsList).forEach(function(e) {
            ot.addtlVendors.vendorSelected[e] = !0
        }) : "genven" === t && ot.showGeneralVendors && vt.GeneralVendors.forEach(function(e) {
            ot.genVendorsConsent[e.VendorCustomId] = !0
        }) : "googleven" === t ? ot.addtlVendors.vendorSelected = {} : (ot.genVendorsConsent = {}, ot.alwaysActiveGenVendors.forEach(function(e) {
            ot.genVendorsConsent[e] = !0
        })), r && n.classList.remove("line-through")
    }, Xn.prototype.SelectAllVendorConsentHandler = function(e) {
        var t = Lt("#onetrust-pc-sdk #" + Vt.P_Sel_All_Vendor_Consent_El).el[0],
            o = t.classList.contains("line-through"),
            n = Lt(Vt.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-checkbox-handler').el,
            r = e.target.checked,
            s = {};
        ot.vendors.selectedVendors.map(function(e, t) {
            s[e.split(":")[0]] = t
        });
        for (var i = 0; i < n.length; i++) {
            At.setCheckedAttribute(null, n[i], r), vt.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? vt.PCActiveText : vt.PCInactiveText);
            var l = n[i].getAttribute("vendorid"),
                a = s[l];
            void 0 === a && (a = l), ot.vendors.selectedVendors[a] = l + ":" + r
        }
        o && t.classList.remove("line-through"), At.setCheckedAttribute(null, e.target, r)
    }, Xn.prototype.onVendorToggle = function(n, e) {
        var t = ot.vendors,
            o = ot.addtlVendors,
            r = e === V.LI ? t.selectedLegIntVendors : e === V.AddtlConsent ? [] : t.selectedVendors,
            s = !1,
            i = Number(n);
        r.some(function(e, t) {
            var o = e.split(":");
            if (o[0] === n) return i = t, s = "true" === o[1], !0
        }), e === V.LI ? (uo.triggerGoogleAnalyticsEvent(fo, s ? Fo : Ro, t.list.find(function(e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n), t.selectedLegIntVendors[i] = n + ":" + !s, kt.legIntSettings.PShowLegIntBtn || gn.vendorLegIntToggleEvent()) : e === V.AddtlConsent ? (o.vendorSelected[n] ? delete o.vendorSelected[n] : o.vendorSelected[n] = !0, gn.venAdtlSelAllTglEvent()) : (uo.triggerGoogleAnalyticsEvent(fo, s ? Do : Ho, t.list.find(function(e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n), t.selectedVendors[i] = n + ":" + !s, gn.vendorsListEvent())
    }, Xn.prototype.onVendorDisclosure = function(n) {
        return a(this, void 0, void 0, function() {
            var t, o;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = ot.discVendors)[n].isFetched ? [3, 2] : (t[n].isFetched = !0, [4, jo.getStorageDisclosure(t[n].disclosureUrl)]);
                    case 1:
                        o = e.sent(), gn.updateVendorDisclosure(n, o), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, Xn.prototype.tglFltrOptionHandler = function(e) {
        e && e.target.classList.contains("category-filter-handler") && At.setCheckedAttribute(null, e.target, e.target.checked)
    }, Xn.prototype.selectVendorsGroupHandler = function(e) {
        Wn.toggleAccordionStatus(e);
        var t = e.target.getAttribute("leg-vendorid"),
            o = e.target.getAttribute("vendorid"),
            n = e.target.getAttribute("addtl-vid"),
            r = e.target.getAttribute("disc-vid");
        t ? Wn.onVendorToggle(t, V.LI) : o ? Wn.onVendorToggle(o, V.Consent) : n && Wn.onVendorToggle(n, V.AddtlConsent), r && Wn.onVendorDisclosure(r), (t || o || n) && (At.setCheckedAttribute(null, e.target, e.target.checked), vt.PCShowConsentLabels && (e.target.parentElement.querySelector(".ot-label-status").innerHTML = e.target.checked ? vt.PCActiveText : vt.PCInactiveText))
    }, Xn.prototype.toggleVendorFiltersHandler = function() {
        var e = !1,
            t = Lt("#onetrust-pc-sdk " + Vt.P_Fltr_Modal).el[0];
        switch (kt.pcName) {
            case $e:
            case Xe:
            case Ye:
            case Ze:
                if (e = "block" === t.style.display) Wn.closeFilter();
                else {
                    var o = Lt("#onetrust-pc-sdk " + Vt.P_Triangle).el[0];
                    Lt(o).attr("style", "display: block;"), Lt(t).attr("style", "display: block;");
                    var n = Array.prototype.slice.call(t.querySelectorAll("[href], input, button"));
                    Zo.setPCFocus(n)
                }
                break;
            case Qe:
                896 < window.innerWidth || 896 < window.screen.height ? bt(t, "width: 400px;", !0) : bt(t, "height: 100%; width: 100%;"), t.querySelector(".ot-checkbox input").focus();
                break;
            default:
                return
        }
        nt.isV2Template && !e && (Lt("#onetrust-pc-sdk").addClass("ot-shw-fltr"), Lt("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0)
    }, Xn.prototype.clearFiltersHandler = function() {
        for (var e = Lt("#onetrust-pc-sdk " + Vt.P_Fltr_Modal + " input").el, t = 0; t < e.length; t++) e[t].checked && (e[t].checked = !1);
        Wn.isCookieList ? ot.filterByCategories = [] : ot.filterByIABCategories = []
    }, Xn.prototype.cancelFilterHandler = function() {
        Wn.isCookieList ? pn.cancelHostFilter() : gn.cancelVendorFilter(), Wn.closeFilter(), Lt("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, Xn.prototype.applyFilterHandler = function() {
        var e;
        Wn.isCookieList ? (e = pn.updateHostFilterList(), gn.loadHostList("", e)) : (e = gn.updateVendorFilterList(), gn.loadVendorList("", e)), Lt("#onetrust-pc-sdk #filter-count").text(String(e.length)), Wn.closeFilter(), Lt("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, Xn.prototype.setPcListContainerHeight = function() {
        Lt("#onetrust-pc-sdk " + Vt.P_Content).el[0].classList.contains("ot-hide") ? bt(Lt("#onetrust-pc-sdk").el[0], 'height: "";', !0) : setTimeout(function() {
            var e = window.innerHeight;
            768 <= window.innerWidth && 600 <= window.innerHeight && (e = .8 * window.innerHeight), !Lt("#onetrust-pc-sdk " + Vt.P_Content).el[0].scrollHeight || Lt("#onetrust-pc-sdk " + Vt.P_Content).el[0].scrollHeight >= e ? bt(Lt("#onetrust-pc-sdk").el[0], "height: " + e + "px;", !0) : bt(Lt("#onetrust-pc-sdk").el[0], "height: auto;", !0)
        })
    }, Xn.prototype.changeSelectedTab = function(e) {
        var t, o = Lt("#onetrust-pc-sdk .category-menu-switch-handler"),
            n = 0,
            r = Lt(o.el[0]);
        o.each(function(e, t) {
            Lt(e).el.classList.contains(Vt.P_Active_Menu) && (n = t, Lt(e).el.classList.remove(Vt.P_Active_Menu), r = Lt(e))
        }), e.keyCode === I.RightArrow ? t = n + 1 >= o.el.length ? Lt(o.el[0]) : Lt(o.el[n + 1]) : e.keyCode === I.LeftArrow && (t = Lt(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])), this.tabMenuToggle(t, r)
    }, Xn.prototype.changeSelectedTabV2 = function(e) {
        var t, o = e.target.parentElement;
        e.keyCode === I.RightArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === I.LeftArrow && (t = o.previousElementSibling || o.parentElement.lastChild);
        var n = t.querySelector(".category-menu-switch-handler");
        n.focus(), this.groupTabClick(n)
    }, Xn.prototype.categoryMenuSwitchHandler = function() {
        for (var t = this, e = Lt("#onetrust-pc-sdk .category-menu-switch-handler").el, o = 0; o < e.length; o++) e[o].addEventListener("click", this.groupTabClick), e[o].addEventListener("keydown", function(e) {
            if (32 === e.keyCode || "space" === e.code) return t.groupTabClick(e.currentTarget), e.preventDefault(), !1
        })
    }, Xn.prototype.groupTabClick = function(e) {
        var t = Lt("#onetrust-pc-sdk " + Vt.P_Grp_Container).el[0],
            o = t.querySelector("." + Vt.P_Active_Menu),
            n = e.currentTarget || e,
            r = n.getAttribute("aria-controls");
        o.setAttribute("tabindex", -1), o.setAttribute("aria-selected", !1), o.classList.remove(Vt.P_Active_Menu), t.querySelector(Vt.P_Desc_Container + ":not(.ot-hide)").classList.add("ot-hide"), t.querySelector("#" + r).classList.remove("ot-hide"), n.setAttribute("tabindex", 0), n.setAttribute("aria-selected", !0), n.classList.add(Vt.P_Active_Menu)
    }, Xn.prototype.tabMenuToggle = function(e, t) {
        e.el.setAttribute("tabindex", 0), e.el.setAttribute("aria-selected", !0), t.el.setAttribute("tabindex", -1), t.el.setAttribute("aria-selected", !1), e.focus(), t.el.parentElement.parentElement.querySelector("" + Vt.P_Desc_Container).classList.add("ot-hide"), e.el.parentElement.parentElement.querySelector("" + Vt.P_Desc_Container).classList.remove("ot-hide"), e.el.classList.add(Vt.P_Active_Menu)
    }, Xn.prototype.hideVendorsList = function() {
        Lt("#onetrust-pc-sdk").length && (vt.PCTemplateUpgrade ? Lt("#onetrust-pc-sdk " + Vt.P_Content).removeClass("ot-hide") : Lt("#onetrust-pc-sdk .ot-main-content").show(), Lt("#onetrust-pc-sdk #close-pc-btn-handler.main").show(), Lt("#onetrust-pc-sdk " + Vt.P_Vendor_List).addClass("ot-hide"))
    }, Xn.prototype.closeFilter = function(e) {
        void 0 === e && (e = !0);
        var t = Lt("#onetrust-pc-sdk " + Vt.P_Fltr_Modal).el[0],
            o = Lt("#onetrust-pc-sdk " + Vt.P_Triangle).el[0];
        kt.pcName === Qe ? 896 < window.innerWidth || 896 < window.screen.height ? bt(t, "width: 0;", !0) : bt(t, "height: 0;") : bt(t, "display: none;"), o && Lt(o).attr("style", "display: none;"), nt.isV2Template && Lt("#onetrust-pc-sdk").removeClass("ot-shw-fltr"), e && Zo.setFirstAndLast(Zo.getPCElements())
    }, Xn.prototype.setBackButtonFocus = function() {
        Lt("#onetrust-pc-sdk .back-btn-handler").el[0].focus()
    }, Xn.prototype.setCenterLayoutFooterHeight = function() {
        var e = Wn.pc;
        if (Wn.setMainContentHeight(), kt.pcName === Ze && e) {
            var t = e.querySelectorAll("" + Vt.P_Desc_Container),
                o = e.querySelectorAll("li .category-menu-switch-handler");
            if (!e.querySelector(".category-menu-switch-handler + " + Vt.P_Desc_Container) && window.innerWidth < 640)
                for (var n = 0; n < t.length; n++) o[n].insertAdjacentElement("afterend", t[n]);
            else e.querySelector(".category-menu-switch-handler + " + Vt.P_Desc_Container) && 640 < window.innerWidth && Lt(e.querySelector(".ot-tab-desc")).append(t)
        }
    }, Xn.prototype.setMainContentHeight = function() {
        var e = this.pc,
            t = e.querySelector(".ot-pc-footer"),
            o = e.querySelector(".ot-pc-header"),
            n = e.querySelectorAll(".ot-pc-footer button"),
            r = n[n.length - 1];
        if (e.classList.remove("ot-ftr-stacked"), n[0] && r && 1 < Math.abs(n[0].offsetTop - r.offsetTop) && e.classList.add("ot-ftr-stacked"), !vt.PCTemplateUpgrade && !vt.Center) {
            var s = e.clientHeight - t.clientHeight - o.clientHeight - 3;
            if (vt.PCTemplateUpgrade && !vt.Tab && vt.PCenterVendorListDescText) {
                var i = Lt("#vdr-lst-dsc").el;
                s = s - (i.length && i[0].clientHeight) - 10
            }
            bt(e.querySelector("" + Vt.P_Vendor_List), "height: " + s + "px;", !0)
        }
        var l = e.querySelector("" + Vt.P_Content);
        if (vt.PCTemplateUpgrade && vt.Center) {
            var a = 600 < window.innerWidth && 475 < window.innerHeight;
            if (!this.pcBodyHeight && a && (this.pcBodyHeight = l.scrollHeight), a) {
                var c = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20;
                c > .8 * window.innerHeight || 0 === this.pcBodyHeight ? bt(e, "height: " + .8 * window.innerHeight + "px;", !0) : bt(e, "height: " + c + "px;", !0)
            } else bt(e, "height: 100%;", !0)
        } else bt(e.querySelector("" + Vt.P_Content), "height: " + (e.clientHeight - t.clientHeight - o.clientHeight - 3) + "px;", !0)
    }, Xn.prototype.allowAllVisible = function(e) {
        e !== this.allowVisible && vt.Tab && vt.PCTemplateUpgrade && (this.pc && this.setMainContentHeight(), this.allowVisible = e)
    }, Xn.prototype.restorePc = function() {
        ot.pcLayer === S.CookieList ? (Wn.hideCategoryContainer(!0), gn.loadHostList("", ot.filterByCategories), Lt("#onetrust-pc-sdk #filter-count").text(ot.filterByCategories.length.toString())) : ot.pcLayer === S.VendorList && (Wn.hideCategoryContainer(!1), Wn.setVendorContent()), ot.isPCVisible = !1, Wn.toggleInfoDisplay(), ot.pcLayer !== S.VendorList && ot.pcLayer !== S.CookieList || (pn.updateFilterSelection(ot.pcLayer === S.CookieList), Wn.setBackButtonFocus(), Zo.setPCFocus(Zo.getPCElements()))
    }, Xn.prototype.toggleInfoDisplay = function() {
        return a(this, void 0, void 0, function() {
            var t, o;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return Ko.csBtnGroup && (Lt(Wn.fltgBtnSltr).addClass("ot-pc-open"), Lt(Wn.fltgBtnFSltr).attr("aria-hidden", "true"), Lt(Wn.fltgBtnBSltr).attr("aria-hidden", "")), [4, Wn.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), kt.pcName === Ye && this.setPcListContainerHeight(), void 0 !== ot.pcLayer && ot.pcLayer !== S.Banner || (ot.pcLayer = S.PrefCenterHome), t = Lt("#onetrust-pc-sdk").el[0], Lt(".onetrust-pc-dark-filter").el[0].removeAttribute("style"), t.removeAttribute("style"), ot.isPCVisible || (bn.showConsentNotice(), ot.isPCVisible = !0, vt.PCTemplateUpgrade && (this.pc = t, o = t.querySelector("#accept-recommended-btn-handler"), this.allowVisible = o && 0 < o.clientHeight, this.setCenterLayoutFooterHeight(), Wn.getResizeElement().addEventListener("resize", Wn.setCenterLayoutFooterHeight), window.addEventListener("resize", Wn.setCenterLayoutFooterHeight))), window.dispatchEvent(new CustomEvent("OneTrustPCLoaded", {
                            OneTrustPCLoaded: "yes"
                        })), [2]
                }
            })
        })
    }, Xn.prototype.close = function(e) {
        xn.bannerCloseButtonHandler(e), Wn.getResizeElement().removeEventListener("resize", Wn.setCenterLayoutFooterHeight), window.removeEventListener("resize", Wn.setCenterLayoutFooterHeight)
    }, Xn.prototype.closePreferenceCenter = function(e) {
        e && e.preventDefault(), window.location.href = "http://otsdk//consentChanged"
    }, Xn.prototype.initializeAlartHtmlAndHandler = function() {
        ot.skipAddingHTML = 0 < Lt("#onetrust-banner-sdk").length, ot.skipAddingHTML || Un.insertAlertHtml(), this.initialiseAlertHandlers()
    }, Xn.prototype.initialiseAlertHandlers = function() {
        var e = this;
        Un.showBanner(), vt.ForceConsent && !wt.isCookiePolicyPage(vt.AlertNoticeText) && Lt(".onetrust-pc-dark-filter").removeClass("ot-hide").css("z-index:2147483645;"), vt.OnClickCloseBanner && document.body.addEventListener("click", xn.bodyClickEvent), vt.ScrollCloseBanner && (window.addEventListener("scroll", xn.scrollCloseBanner), Lt(document).on("click", ".onetrust-close-btn-handler", xn.rmScrollAndClickBodyEvents), Lt(document).on("click", "#onetrust-accept-btn-handler", xn.rmScrollAndClickBodyEvents), Lt(document).on("click", "#accept-recommended-btn-handler", xn.rmScrollAndClickBodyEvents)), (vt.IsIabEnabled || vt.UseGoogleVendors || ot.showGeneralVendors) && Lt(document).on("click", ".onetrust-vendors-list-handler", Wn.showAllVendors), vt.FloatingRoundedIcon && Lt("#onetrust-banner-sdk #onetrust-cookie-btn").on("click", function(e) {
            ot.pcSource = e.currentTarget, Wn.showCookieSettingsHandler(e)
        }), Lt("#onetrust-banner-sdk .onetrust-close-btn-handler, #onetrust-banner-sdk .ot-bnr-save-handler").on("click", Wn.bannerCloseButtonHandler), Lt("#onetrust-banner-sdk #onetrust-pc-btn-handler").on("click", Wn.showCookieSettingsHandler), Lt("#onetrust-banner-sdk #onetrust-accept-btn-handler").on("click", xn.allowAllEventHandler.bind(this, !1)), Lt("#onetrust-banner-sdk #onetrust-reject-all-handler").on("click", xn.rejectAllEventHandler.bind(this, !1)), Lt("#onetrust-banner-sdk .banner-option-input").on("click", kt.bannerName === ze ? Wn.toggleBannerOptions : Wn.toggleAccordionStatus), Lt("#onetrust-banner-sdk .ot-gv-list-handler").on("click", function(t) {
            return a(e, void 0, void 0, function() {
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return ot.cookieListType = z.GenVen, [4, Wn.fetchAndSetupPC()];
                        case 1:
                            return e.sent(), Wn.loadCookieList(t.target), Wn.showCookieSettingsHandler(t), [2]
                    }
                })
            })
        }), Lt("#onetrust-banner-sdk .category-switch-handler").on("click", Wn.toggleBannerCategory), Lt("#onetrust-banner-sdk").on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || Zo.handleBannerFocus(e, e.shiftKey)
        })
    }, Xn.prototype.getResizeElement = function() {
        var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
        return e.contentWindow || e || document
    }, Xn.prototype.insertCookieSettingText = function() {
        for (var e = vt.CookieSettingButtonText, t = Lt(".ot-sdk-show-settings").el, o = 0; o < t.length; o++) Lt(t[o]).text(e);
        Wn.initCookieSettingHandlers()
    }, Xn.prototype.genVendorToggled = function(e) {
        var t = e.target.getAttribute("gn-vid");
        Yt.updateGenVendorStatus(t, e.target.checked);
        var o = vt.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        }).Name;
        uo.triggerGoogleAnalyticsEvent(fo, e.target.checked ? Eo : xo, o + ": VEN_" + t), gn.genVenSelectAllTglEvent()
    }, Xn.prototype.genVendorDetails = function(e) {
        Wn.toggleAccordionStatus(e)
    }, Xn.prototype.confirmPC = function(e) {
        var t = Dt.isAlertBoxClosedAndValid();
        vt.NoBanner && vt.ShowPreferenceCenterCloseButton && !t && xn.bannerCloseButtonHandler();
        var o = wt.isBannerVisible();
        !nt.moduleInitializer.MobileSDK || !t && o || Wn.closePreferenceCenter(e)
    }, Xn);

    function Xn() {
        var e = this;
        this.fltgBtnSltr = "#ot-sdk-btn-floating", this.fltgBtnFrontBtn = ".ot-floating-button__front button", this.fltgBtnBackBtn = ".ot-floating-button__back button", this.fltgBtnFSltr = ".ot-floating-button__front svg", this.fltgBtnBSltr = ".ot-floating-button__back svg", this.pc = null, this.allowVisible = !1, this.pcLinkSource = null, this.isCookieList = !1, this.showCookieSettingsHandler = function(s) {
            return a(e, void 0, void 0, function() {
                var t, o, n, r;
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return s && s.stopPropagation(), s && s.target && (t = s.target.className, o = "onetrust-pc-btn-handler" === s.target.id, n = "ot-sdk-show-settings" === t, (o || n) && (r = o ? Po : Ao, uo.triggerGoogleAnalyticsEvent(fo, r)), ot.pcSource = s.target), [4, Wn.toggleInfoDisplay()];
                        case 1:
                            return e.sent(), [2, !1]
                    }
                })
            })
        }, this.cookieSettingsBoundListner = this.showCookieSettingsHandler.bind(this), this.backBtnHandler = function() {
            return e.hideVendorsList(), kt.pcName === Ye && (Lt("#onetrust-pc-sdk " + Vt.P_Content).removeClass("ot-hide"), Lt("#onetrust-pc-sdk").el[0].removeAttribute("style"), e.setPcListContainerHeight()), Lt("#onetrust-pc-sdk #filter-count").text("0"), Lt("#onetrust-pc-sdk #vendor-search-handler").length && (Lt("#onetrust-pc-sdk #vendor-search-handler").el[0].value = ""), ot.currentGlobalFilteredList = [], ot.filterByCategories = [], ot.filterByIABCategories = [], ot.vendors.searchParam = "", Wn.closeFilter(), ot.pcLayer = S.PrefCenterHome, e.pcLinkSource ? (e.pcLinkSource.focus(), e.pcLinkSource = null) : Zo.setPCFocus(Zo.getPCElements()), !1
        }, this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this), this.toggleV2Category = function(e, t, o, n) {
            var r, s = this;
            if (!t) {
                var i = At.findIndex(ot.dataGroupState, function(e) {
                    return "function" == typeof s.getAttribute && e.CustomGroupId === s.getAttribute("data-optanongroupid")
                });
                t = ot.dataGroupState[i]
            }
            void 0 === o && (o = Lt(this).is(":checked")), vt.ChoicesBanner && At.setCheckedAttribute("#ot-bnr-grp-id-" + t.CustomGroupId, null, o), n ? document.querySelector("#ot-group-id-" + n) && (At.setCheckedAttribute("#ot-group-id-" + n, null, o), r = document.querySelector("#ot-group-id-" + n)) : (r = this, At.setCheckedAttribute(null, this, o)), vt.PCShowConsentLabels && (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? vt.PCActiveText : vt.PCInactiveText);
            var l = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            Wn.updateGroupToggles(t, o, l)
        }, this.toggleBannerCategory = function() {
            var t = this,
                e = At.findIndex(ot.dataGroupState, function(e) {
                    return "function" == typeof t.getAttribute && e.CustomGroupId === t.getAttribute("data-optanongroupid")
                }),
                o = ot.dataGroupState[e],
                n = Lt(t).is(":checked");
            Wn.toggleV2Category(null, o, n, o.CustomGroupId)
        }, this.toggleSubCategory = function(e, t, o, n) {
            t = t || this.getAttribute("data-optanongroupid");
            var r, s = Ht.getGroupById(t);
            void 0 === o && (o = Lt(this).is(":checked")), n ? (At.setCheckedAttribute("#ot-sub-group-id-" + n, null, o), r = document.querySelector("#ot-sub-group-id-" + n)) : (r = this, At.setCheckedAttribute(null, this, o)), vt.PCShowConsentLabels && (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? vt.PCActiveText : vt.PCInactiveText);
            var i = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            Wn.updateSubGroupToggles(s, o, i)
        }
    }
    var Yn, $n = (Qn.prototype.initBanner = function() {
        this.canImpliedConsentLandingPage(), nt.moduleInitializer.CookieSPAEnabled ? Lt(window).on("otloadbanner", this.windowLoadBanner.bind(this)) : Lt(window).one("otloadbanner", this.windowLoadBanner.bind(this))
    }, Qn.prototype.insertCSBtnHtmlAndCss = function(e) {
        document.getElementById("onetrust-style").innerHTML += Ko.csBtnGroup.css;
        var t = document.createElement("div");
        Lt(t).html(Ko.csBtnGroup.html);
        var o = t.querySelector("#ot-sdk-btn-floating");
        e && o && Lt(o).removeClass("ot-hide"), Lt("#onetrust-consent-sdk").append(o)
    }, Qn.prototype.canImpliedConsentLandingPage = function() {
        this.isImpliedConsent() && !oo.isLandingPage() && "true" === Pt.readCookieParam(Se.OPTANON_CONSENT, ke) && this.checkForRefreshCloseImplied()
    }, Qn.prototype.isImpliedConsent = function() {
        return vt.ConsentModel && "implied consent" === vt.ConsentModel.Name.toLowerCase()
    }, Qn.prototype.checkForRefreshCloseImplied = function() {
        xn.closeOptanonAlertBox(), xn.close(!0)
    }, Qn.prototype.hideCustomHtml = function() {
        var e = document.getElementById("onetrust-banner-sdk");
        e && bt(e, "display: none;")
    }, Qn.prototype.windowLoadBanner = function() {
        return a(this, void 0, void 0, function() {
            var t, o, n, r, s, i, l, a;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return this.core.substitutePlainTextScriptTags(), t = nt.moduleInitializer, Lt("#onetrust-consent-sdk").length ? n = document.getElementById("onetrust-consent-sdk") : (n = document.createElement("div"), Lt(n).attr("id", "onetrust-consent-sdk"), Lt(document.body).append(n)), Lt(".onetrust-pc-dark-filter").length || (o = document.createElement("div"), Lt(o).attr("class", "onetrust-pc-dark-filter"), Lt(o).attr("class", "ot-hide"), Lt(o).attr("class", "ot-fade-in"), n.firstChild ? n.insertBefore(o, n.firstChild) : Lt(n).append(o)), vt.IsIabEnabled && this.iab.updateIabVariableReference(), t.IsSuppressPC || (qn.insertPcHtml(), Wn.initialiseConsentNoticeHandlers(), vt.IsIabEnabled && this.iab.InitializeVendorList()), r = Dt.isAlertBoxClosedAndValid(), s = vt.ShowAlertNotice && !r && !vt.NoBanner && !ot.hideBanner, i = vt.ShowAlertNotice && !r && vt.NoBanner, ot.ntfyRequired ? (this.hideCustomHtml(), wn.init(), wn.changeState()) : s ? Wn.initializeAlartHtmlAndHandler() : this.hideCustomHtml(), this.insertCSBtn(!s), i ? [4, Wn.toggleInfoDisplay()] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return Wn.insertCookieSettingText(), l = Lt(this.FLOATING_COOKIE_BTN), a = Lt(this.FLOATIN_COOKIE_FRONT_BTN), l.length && (l.attr("title", vt.CookieSettingButtonText), a.el[0].setAttribute("aria-label", vt.AriaOpenPreferences)), sn.insertCookiePolicyHtml(), xn.executeOptanonWrapper(), Pt.readCookieParam(Se.OPTANON_CONSENT, "groups") || Wt.writeGrpParam(Se.OPTANON_CONSENT), Pt.readCookieParam(Se.OPTANON_CONSENT, "hosts") || Wt.writeHstParam(Se.OPTANON_CONSENT), s && Zo.setBannerFocus(), [2]
                }
            })
        })
    }, Qn.prototype.insertCSBtn = function(e) {
        Ko.csBtnGroup && (this.insertCSBtnHtmlAndCss(e), Wn.initFlgtCkStgBtnEventHandlers())
    }, Qn);

    function Qn() {
        this.iab = gn, this.core = pn, this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating", this.FLOATIN_COOKIE_FRONT_BTN = "#ot-sdk-btn-floating .ot-floating-button__front .ot-floating-button__open"
    }
    var Zn, er = (tr.prototype.initialiseLandingPath = function() {
        if (oo.isLandingPage()) oo.setLandingPathParam(location.href);
        else {
            if (Dt.needReconsent() && !Dt.awaitingReconsent()) return oo.setLandingPathParam(location.href), void Pt.writeCookieParam(Se.OPTANON_CONSENT, ke, !0);
            oo.setLandingPathParam(Ae), Pt.writeCookieParam(Se.OPTANON_CONSENT, ke, !1), kt.isSoftOptInMode && !nt.moduleInitializer.MobileSDK && uo.setAlertBoxClosed(!0), vt.NextPageCloseBanner && vt.ShowAlertNotice && xn.nextPageCloseBanner()
        }
    }, tr);

    function tr() {}
    var or, nr = (rr.prototype.IsAlertBoxClosedAndValid = function() {
        return Dt.isAlertBoxClosedAndValid()
    }, rr.prototype.LoadBanner = function() {
        uo.loadBanner()
    }, rr.prototype.Init = function(e) {
        void 0 === e && (e = !1), fe.insertViewPortTag(), Ko.ensureHtmlGroupDataInitialised(), fn.updateGtmMacros(!1), Zn.initialiseLandingPath(), e || Dn.initialiseCssReferences()
    }, rr.prototype.FetchAndDownloadPC = function() {
        Wn.fetchAndSetupPC()
    }, rr.prototype.ToggleInfoDisplay = function() {
        uo.triggerGoogleAnalyticsEvent(fo, To), Wn.toggleInfoDisplay()
    }, rr.prototype.Close = function(e) {
        Wn.close(e)
    }, rr.prototype.AllowAll = function(e) {
        xn.allowAllEvent(e)
    }, rr.prototype.RejectAll = function(e) {
        xn.rejectAllEvent(e)
    }, rr.prototype.setDataSubjectIdV2 = function(e, t) {
        void 0 === t && (t = !1), e && e.trim() && (Pt.writeCookieParam(Se.OPTANON_CONSENT, ve, e), ot.dsParams.isAnonymous = t)
    }, rr.prototype.getDataSubjectId = function() {
        return Pt.readCookieParam(Se.OPTANON_CONSENT, ve)
    }, rr.prototype.synchroniseCookieWithPayload = function(s) {
        var e = Pt.readCookieParam(Se.OPTANON_CONSENT, "groups"),
            t = At.strToArr(e),
            i = [];
        t.forEach(function(e) {
            var t = e.split(":"),
                o = Ht.getGroupById(t[0]),
                n = At.findIndex(s, function(e) {
                    return e.Id === o.PurposeId
                }),
                r = s[n];
            r ? r.TransactionType === _e ? (i.push(t[0] + ":1"), o.Parent ? Wn.toggleSubCategory(null, o.CustomGroupId, !0, o.CustomGroupId) : Wn.toggleV2Category(null, o, !0, o.CustomGroupId)) : (i.push(t[0] + ":0"), o.Parent ? Wn.toggleSubCategory(null, o.CustomGroupId, !1, o.CustomGroupId) : Wn.toggleV2Category(null, o, !1, o.CustomGroupId)) : i.push(t[0] + ":" + t[1])
        }), Wt.writeGrpParam(Se.OPTANON_CONSENT, i)
    }, rr.prototype.getGeolocationData = function() {
        return ot.userLocation
    }, rr.prototype.TriggerGoogleAnalyticsEvent = function(e, t, o, n) {
        uo.triggerGoogleAnalyticsEvent(e, t, o, n)
    }, rr.prototype.ReconsentGroups = function() {
        var r = !1,
            e = Pt.readCookieParam(Se.OPTANON_CONSENT, "groups"),
            s = At.strToArr(e),
            i = At.strToArr(e.replace(/:0|:1/g, "")),
            l = !1,
            t = Pt.readCookieParam(Se.OPTANON_CONSENT, "hosts"),
            a = At.strToArr(t),
            c = At.strToArr(t.replace(/:0|:1/g, "")),
            d = ["inactive", "inactive landingpage", "do not track"];
        e && (vt.Groups.forEach(function(e) {
            g(e.SubGroups, [e]).forEach(function(e) {
                var t = e.CustomGroupId,
                    o = At.indexOf(i, t);
                if (-1 !== o) {
                    var n = Ht.getGrpStatus(e).toLowerCase(); - 1 < d.indexOf(n) && (r = !0, s[o] = t + ("inactive landingpage" === n ? ":1" : ":0"))
                }
            })
        }), r && Wt.writeGrpParam(Se.OPTANON_CONSENT, s)), t && (vt.Groups.forEach(function(e) {
            g(e.SubGroups, [e]).forEach(function(n) {
                n.Hosts.forEach(function(e) {
                    var t = At.indexOf(c, e.HostId);
                    if (-1 !== t) {
                        var o = Ht.getGrpStatus(n).toLowerCase(); - 1 < d.indexOf(o) && (l = !0, a[t] = e.HostId + ("inactive landingpage" === o ? ":1" : ":0"))
                    }
                })
            })
        }), l && Wt.writeHstParam(Se.OPTANON_CONSENT, a))
    }, rr.prototype.SetAlertBoxClosed = function(e) {
        uo.setAlertBoxClosed(e)
    }, rr.prototype.GetDomainData = function() {
        return kt.pubDomainData
    }, rr.prototype.setGeoLocation = function(e, t) {
        void 0 === t && (t = ""), ot.userLocation = {
            country: e,
            state: t
        }
    }, rr.prototype.changeLang = function(t) {
        if (t !== ot.lang) {
            var o = nt.moduleInitializer;
            jo.getLangJson(t).then(function(e) {
                e ? (kt.init(e), Ko.fetchAssets().then(function() {
                    var e = document.getElementById("onetrust-style");
                    e && (e.textContent = ""), Dn.initialiseCssReferences(), o.IsSuppressPC && !ot.isPCVisible || (At.removeChild(Lt("#onetrust-pc-sdk").el), ot.vendorDomInit = !1, ot.genVendorDomInit = !1, qn.insertPcHtml(), Wn.initialiseConsentNoticeHandlers(), vt.IsIabEnabled && gn.InitializeVendorList(), ot.isPCVisible && Wn.restorePc());
                    var t = !0;
                    Dt.isAlertBoxClosedAndValid() || o.IsSuppressBanner && (!o.IsSuppressBanner || ot.skipAddingHTML) || vt.NoBanner || (At.removeChild(Lt("#onetrust-banner-sdk").el), Wn.initializeAlartHtmlAndHandler(), t = !1), or.initCookiePolicyAndSettings(), At.removeChild(Lt("#ot-sdk-btn-floating").el), Yn.insertCSBtn(t), or.processedHtml = null
                })) : console.error("Language:" + t + " doesn't exist for the geo rule")
            })
        }
    }, rr.prototype.initCookiePolicyAndSettings = function() {
        sn.insertCookiePolicyHtml(), Wn.insertCookieSettingText()
    }, rr.prototype.showVendorsList = function() {
        ot.pcLayer !== S.VendorList && (Wn.showAllVendors(), uo.triggerGoogleAnalyticsEvent(fo, _o))
    }, rr.prototype.getTestLogData = function() {
        var e = vt.Groups,
            t = kt.pubDomainData;
        console.info("%cWelcome to OneTrust Log", "padding: 8px; background-color: #43c233; color: white; font-style: italic; border: 1px solid black; font-size: 1.5em;"), console.info("Script is for: %c" + (t.Domain ? t.Domain : vt.optanonCookieDomain), "padding: 4px 6px; font-style: italic; border: 2px solid #43c233; font-size: 12px;"), console.info("The consent model is: " + t.ConsentModel.Name);
        var o = null !== Dt.alertBoxCloseDate();
        console.info("Consent has " + (o ? "" : "not ") + "been given " + (o ? "👍" : "🛑"));
        var n = [];
        e.forEach(function(e) {
            var t = "";
            t = e.Status && "always active" === e.Status.toLowerCase() ? "Always Active" : on.isGroupActive(e) ? "Active" : "Inactive", n.push({
                CustomGroupId: e.CustomGroupId,
                GroupName: e.GroupName,
                Status: t
            })
        }), console.groupCollapsed("Current Category Status"), console.table(n), console.groupEnd();
        var r = [];
        t.GeneralVendors.forEach(function(e) {
            r.push({
                CustomGroupId: e.VendorCustomId,
                Name: e.Name,
                Status: or.isCategoryActive(e.VendorCustomId) ? "active" : "inactive"
            })
        }), console.groupCollapsed("General Vendor Ids"), console.table(r), console.groupEnd();
        var s = kt.getRegionRule(),
            i = ot.userLocation,
            l = nt.moduleInitializer.GeoRuleGroupName;
        console.groupCollapsed("Geolocation and Template"), ot.userLocation.country && console.info("The Geolocation is " + i.country.toUpperCase()), console.info("The Geolocation rule is " + s.Name), console.info("The GeolocationRuleGroup is " + l), console.info("The TemplateName is " + s.TemplateName), console.groupEnd();
        var a = e.filter(function(e) {
            return on.isGroupActive(e) && "COOKIE" === e.Type
        });
        console.groupCollapsed("The cookies expected to be active if blocking has been implemented are"), a.forEach(function(e) {
            console.groupCollapsed(e.GroupName);
            var t = or.getAllFormatCookiesForAGroup(e);
            console.table(t, ["Name", "Host", "description"]), console.groupEnd()
        }), console.groupEnd()
    }, rr.prototype.isCategoryActive = function(e) {
        return -1 !== window.OptanonActiveGroups.indexOf(e)
    }, rr.prototype.getAllFormatCookiesForAGroup = function(e) {
        var t, o = [];
        return e.FirstPartyCookies.forEach(function(e) {
            return o.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), (null === (t = e.Hosts) || void 0 === t ? void 0 : t.reduce(function(e, t) {
            return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
        }, [])).forEach(function(e) {
            return o.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), o
    }, rr);

    function rr() {
        this.processedHtml = "", this.useGeoLocationService = !0, this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid, this.InitializeBanner = function() {
            return Yn.initBanner()
        }, this.getHTML = function() {
            return document.getElementById("onetrust-banner-sdk") || (qn.insertPcHtml(), Un.insertAlertHtml()), or.processedHtml || (or.processedHtml = document.querySelector("#onetrust-consent-sdk").outerHTML), or.processedHtml
        }, this.getCSS = function() {
            return Dn.processedCSS
        }, this.setConsentProfile = function(e) {
            if (e.customPayload) {
                var t = e.customPayload;
                t.Interaction && Pt.writeCookieParam(Se.OPTANON_CONSENT, me, t.Interaction)
            }
            or.setDataSubjectIdV2(e.identifier, e.isAnonymous), or.synchroniseCookieWithPayload(e.purposes), xn.executeOptanonWrapper()
        }, this.InsertScript = function(e, t, o, n, r, s) {
            var i, l = null != n && void 0 !== n,
                a = l && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (on.canInsertForGroup(r, a) && !At.contains(ot.srcExecGrps, r)) {
                ot.srcExecGrpsTemp.push(r), l && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && At.empty(t);
                var c = document.createElement("script");
                switch (null != o && void 0 !== o && (i = !1, c.onload = c.onreadystatechange = function() {
                    i || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (i = !0, o())
                }), c.type = "text/javascript", c.src = e, s && (c.async = s), t) {
                    case "head":
                        document.getElementsByTagName("head")[0].appendChild(c);
                        break;
                    case "body":
                        document.getElementsByTagName("body")[0].appendChild(c);
                        break;
                    default:
                        var d = document.getElementById(t);
                        d && (d.appendChild(c), l && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && At.show(t))
                }
                if (l && void 0 !== n.makeElementsVisible)
                    for (var p = 0, u = n.makeElementsVisible; p < u.length; p++) {
                        var h = u[p];
                        At.show(h)
                    }
                if (l && void 0 !== n.deleteElements)
                    for (var g = 0, C = n.deleteElements; g < C.length; g++) {
                        h = C[g];
                        At.remove(h)
                    }
            }
        }, this.InsertHtml = function(e, t, o, n, r) {
            var s = null != n && void 0 !== n,
                i = s && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (on.canInsertForGroup(r, i) && !At.contains(ot.htmlExecGrps, r)) {
                if (ot.htmlExecGrpsTemp.push(r), s && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && At.empty(t), At.appendTo(t, e), s && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && At.show(t), s && void 0 !== n.makeElementsVisible)
                    for (var l = 0, a = n.makeElementsVisible; l < a.length; l++) {
                        var c = a[l];
                        At.show(c)
                    }
                if (s && void 0 !== n.deleteElements)
                    for (var d = 0, p = n.deleteElements; d < p.length; d++) {
                        c = p[d];
                        At.remove(c)
                    }
                null != o && void 0 !== o && o()
            }
        }, this.BlockGoogleAnalytics = function(e, t) {
            window["ga-disable-" + e] = !on.canInsertForGroup(t)
        }
    }
    var sr, ir, lr, ar, cr = (o(ir = pr, lr = sr = nr), ir.prototype = null === lr ? Object.create(lr) : (dr.prototype = lr.prototype, new dr), pr.prototype.Close = function(e) {
        xn.closeBanner(!1), window.location.href = "http://otsdk//consentChanged"
    }, pr.prototype.RejectAll = function(e) {
        xn.rejectAllEvent(), window.location.href = "http://otsdk//consentChanged"
    }, pr.prototype.AllowAll = function(e) {
        xn.AllowAllV2(e), window.location.href = "http://otsdk//consentChanged"
    }, pr.prototype.ToggleInfoDisplay = function() {
        Wn.toggleInfoDisplay()
    }, pr);

    function dr() {
        this.constructor = ir
    }

    function pr() {
        var e = null !== sr && sr.apply(this, arguments) || this;
        return e.mobileOnlineURL = kt.mobileOnlineURL, e
    }
    var ur, hr = (gr.prototype.toggleVendorConsent = function(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = null), e.length || (e = ot.oneTrustIABConsent.vendors), e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = t[1],
                r = Lt(Vt.P_Vendor_Container + " ." + Vt.P_Ven_Ctgl + ' [vendorid="' + o + '"]').el[0];
            r && At.setCheckedAttribute("", r, "true" === n)
        });
        var o = Lt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        if (o) {
            var n = At.getActiveIdArray(At.distinctArray(e));
            null === t && (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(Gt.P_Line_Through) : o.parentElement.classList.add(Gt.P_Line_Through), At.setCheckedAttribute("", o, t)
        }
    }, gr.prototype.toggleVendorLi = function(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = null), e.length || (e = ot.oneTrustIABConsent.legIntVendors), e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = t[1],
                r = Lt(Vt.P_Vendor_Container + " ." + Vt.P_Ven_Ltgl + ' [leg-vendorid="' + o + '"]').el[0];
            r && At.setCheckedAttribute("", r, "true" === n)
        });
        var o = Lt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        if (o) {
            var n = At.getActiveIdArray(At.distinctArray(e));
            null === t && (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(Gt.P_Line_Through) : o.parentElement.classList.add(Gt.P_Line_Through), At.setCheckedAttribute("", o, t)
        }
    }, gr.prototype.updateVendorLegBtns = function(e) {
        void 0 === e && (e = []), e.length || (e = ot.oneTrustIABConsent.legIntVendors), e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = t[1],
                r = Lt(Vt.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + o + '"]').el[0];
            r && on.updateLegIntBtnElement(r, "true" === n)
        })
    }, gr);

    function gr() {}
    var Cr, yr = (fr.prototype.syncConsentProfile = function(e, t, o) {
        void 0 === o && (o = !1), e ? (ot.dsParams.id = e.trim(), or.setDataSubjectIdV2(e)) : e = ot.dsParams.id, o && (ot.dsParams.isAnonymous = o), t = t || ot.dsParams.token, e && t && jo.getConsentProfile(e, t).then(function(e) {
            return Cr.consentProfileCallback(e)
        })
    }, fr.prototype.getConsentValue = function(e) {
        var t = null;
        switch (e) {
            case v[v.ACTIVE]:
            case v[v.ALWAYS_ACTIVE]:
                t = q.Active;
                break;
            case v[v.EXPIRED]:
            case v[v.OPT_OUT]:
            case v[v.PENDING]:
            case v[v.WITHDRAWN]:
                t = q.InActive
        }
        return t
    }, fr.prototype.isCookieGroup = function(e) {
        return !/IABV2|ISPV2|IFEV2|ISFV2/.test(e)
    }, fr.prototype.syncPreferences = function(e, t) {
        void 0 === t && (t = !1);
        var o = Pt.getCookie(Se.ALERT_BOX_CLOSED),
            n = o,
            r = !1,
            s = !0,
            i = !1,
            l = At.strToArr(Pt.readCookieParam(Se.OPTANON_CONSENT, "groups"));
        if (e && e.preferences.length)
            for (var a = 0, c = e.preferences; a < c.length; a++) {
                var d = c[a],
                    p = d.status === v[v.NO_CONSENT],
                    u = kt.domainGrps[d.id];
                if (u)
                    if (-1 < ot.grpsSynced.indexOf(u) && (ot.syncedValidGrp = !0), p && l.length) {
                        for (var h = -1, g = 0; g < l.length; g++)
                            if (l[g].split(":")[0] === u) {
                                h = g;
                                break
                            } - 1 < h && (l.splice(h, 1), ot.grpsSynced.push(u))
                    } else if (!p && (!o || new Date(d.consentDate) > new Date(n))) {
                    var C = this.getConsentValue(d.status);
                    if (i = !0, o = d.consentDate, !t && this.isCookieGroup(u)) {
                        var y = u + ":" + C,
                            f = -1;
                        for (g = 0; g < l.length; g++) {
                            var k = l[g].split(":");
                            if (k[0] === u) {
                                k[1] !== C && (l[g] = y, r = !0), f = g;
                                break
                            }
                        } - 1 === f && (l.push(y), r = !0)
                    }
                }
            } else s = !1;
        return {
            alertBoxCookieVal: o,
            groupsConsent: l,
            profileFound: s,
            syncRequired: r,
            syncOnlyDate: i = i && !r
        }
    }, fr.prototype.hideBannerAndPc = function() {
        var e = wt.isBannerVisible();
        e && wt.hideBanner(), (e || ot.isPCVisible) && bn.hideConsentNoticeV2()
    }, fr.prototype.setOptanonConsentCookie = function(e, t) {
        if (e.syncRequired) {
            Pt.writeCookieParam(Se.OPTANON_CONSENT, "groups", e.groupsConsent.toString());
            var o = Pt.getCookie(Se.OPTANON_CONSENT);
            Pt.setCookie(Se.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal))
        }
    }, fr.prototype.setIabCookie = function(e, t, o) {
        o.syncGroups && o.syncGroups[ot.syncGrpId] && o.syncGroups[ot.syncGrpId].tcStringV2 ? Pt.getCookie(Se.EU_PUB_CONSENT) !== o.syncGroups[ot.syncGrpId].tcStringV2 && (e.syncRequired = !0, Pt.setCookie(Se.EU_PUB_CONSENT, o.syncGroups[ot.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))) : e.profileFound = !1
    }, fr.prototype.setAddtlVendorsCookie = function(e, t) {
        vt.UseGoogleVendors && (Pt.getCookie(Se.ADDITIONAL_CONSENT_STRING) || Pt.setCookie(Se.ADDITIONAL_CONSENT_STRING, ot.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal)))
    }, fr.prototype.createTrans = function() {
        var e = Pt.readCookieParam(Se.OPTANON_CONSENT, "iType");
        qt.createConsentTxn(!1, F[e], !1, !0)
    }, fr.prototype.updateGrpsDom = function() {
        for (var e = function(e) {
                var t = e.getAttribute("data-optanongroupid"),
                    o = Ht.getGroupById(t),
                    n = !0,
                    r = At.findIndex(ot.groupsConsent, function(e) {
                        return e.split(":")[0] === t
                    }); - 1 < r && ot.groupsConsent[r].split(":")[1] === q.InActive && (n = !1), on.toggleGrpElements(e, o, n), on.toogleSubGroupElement(e, n, !1, !0), on.toogleSubGroupElement(e, n, !0, !0)
            }, t = 0, o = on.getAllGroupElements(); t < o.length; t++) e(o[t])
    }, fr.prototype.updateVendorsDom = function() {
        vt.IsIabEnabled && (gn.updateIabVariableReference(), ur.toggleVendorConsent(), kt.legIntSettings.PAllowLI && (kt.legIntSettings.PShowLegIntBtn ? ur.updateVendorLegBtns() : ur.toggleVendorLi()))
    }, fr.prototype.consentProfileCallback = function(r) {
        return a(this, void 0, void 0, function() {
            var t, o, n;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = this.syncPreferences(r), o = vt.ReconsentFrequencyDays, n = Dt.isIABCrossConsentEnabled(), this.setOptanonConsentCookie(t, o), vt.IsIabEnabled && !n && this.setIabCookie(t, o, r), t.syncOnlyDate && (Dt.syncAlertBoxCookie(t.alertBoxCookieVal), Dt.syncCookieExpiry()), t.syncRequired && t.profileFound ? (ot.syncRequired = t.syncRequired, Dt.syncAlertBoxCookie(t.alertBoxCookieVal), this.setAddtlVendorsCookie(t, o), this.hideBannerAndPc(), Ko.initGrpsAndHosts(), !n && vt.NtfyConfig.ShowNtfy && Dt.isAlertBoxClosedAndValid() ? [4, wn.getContent()] : [3, 2]) : [3, 3];
                    case 1:
                        e.sent(), wn.init(), wn.changeState(), e.label = 2;
                    case 2:
                        return vt.IsIabEnabled && (Dt.setIABCookieData(), Ut.populateVendorAndPurposeFromCookieData()), this.updateGrpsDom(), this.updateVendorsDom(), oo.setLandingPathParam(Ae), pn.substitutePlainTextScriptTags(), fn.updateGtmMacros(!0), xn.executeOptanonWrapper(), [3, 4];
                    case 3:
                        !t.profileFound && t.alertBoxCookieVal && this.createTrans(), e.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }, fr);

    function fr() {}
    var kr, vr = (br.prototype.removeCookies = function() {
        Pt.removePreview(), Pt.removeOptanon(), Pt.removeAlertBox(), Pt.removeIab2(), Pt.removeAddtlStr(), Pt.removeVariant(), ot.isPreview && kr.setPreviewCookie(), ot.urlParams.get("otreset") && ot.urlParams.set("otreset", "false");
        var e = window.location.pathname + "?" + ot.urlParams.toString() + window.location.hash;
        kr.replaceHistory(e)
    }, br.prototype.setPreviewCookie = function() {
        var e = new Date;
        e.setTime(e.getTime() + 864e5);
        var t = ot.geoFromUrl ? "&geo=" + ot.geoFromUrl : "",
            o = "expiry=" + e.toISOString() + t;
        Pt.setCookie(Se.OT_PREVIEW, o, 365, !1)
    }, br.prototype.bindStopPreviewEvent = function() {
        (window.attachEvent || window.addEventListener)("message", function(e) {
            return kr.onMessage(e)
        })
    }, br.prototype.replaceHistory = function(e) {
        history.pushState({}, "", e), location.reload()
    }, br.prototype.onMessage = function(e) {
        "string" == typeof e.data && e.data === kr.CLEAR_COOKIES && (kr.removeCookies(), e.source && e.source.postMessage && e.source.postMessage(kr.CLEARED_COOKIES, e.origin))
    }, br);

    function br() {
        this.CLEAR_COOKIES = "CLEAR_OT_COOKIES", this.CLEARED_COOKIES = "CLEARED_OT_COOKIES"
    }
    fe.initPolyfill(), Pt = new Tt, wt = new Et, kt = new yt, Co = new qo, kr = new vr,
        function() {
            var e = window.otStubData;
            if (e) {
                nt.moduleInitializer = e.domainData, nt.fp = nt.moduleInitializer.TenantFeatures, ot.isAMP = e.isAmp, ot.dataDomainId = e.domainId, ot.isPreview = e.isPreview, ot.urlParams = e.urlParams, ot.isV2Stub = e.isV2Stub || !1, e.isReset ? kr.removeCookies() : e.isPreview && kr.setPreviewCookie(), kt.setBannerScriptElement(e.stubElement), kt.setRegionRule(e.regionRule), ot.userLocation = e.userLocation, ot.crossOrigin = e.crossOrigin, kt.bannerDataParentURL = e.bannerBaseDataURL, kt.mobileOnlineURL = g(kt.mobileOnlineURL, e.mobileOnlineURL);
                var t = kt.getRegionRule();
                kt.multiVariantTestingEnabled = nt.moduleInitializer.MultiVariantTestingEnabled && 0 < t.Variants.length && wt.isDateCurrent(t.TestEndTime), ot.grpsSynced = e.grpsSynced || [], ot.isIabSynced = e.isIabSynced, ot.syncRequired = e.isIabSynced || e.grpsSynced && 0 < e.grpsSynced.length, ot.consentPreferences = e.preferences, ot.syncGrpId = e.syncGrpId, ot.consentApi = e.consentApi, ot.tenantId = e.tenantId, ot.geoFromUrl = e.geoFromUrl, ot.nonce = e.nonce, ot.setAttributePolyfillIsActive = e.setAttributePolyfillIsActive, Co.populateLangSwitcherPlhdr(), window.otStubData = {
                    userLocation: ot.userLocation
                }, window.OneTrustStub = null
            }
        }(),
        function() {
            a(this, void 0, void 0, function() {
                var t, o, n, r, s;
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return Ht = new Ft, on = new nn, Yo = new $o, gn = new Cn, pn = new un, xn = new Vn, Wn = new Jn, qn = new Mn, Un = new zn, Yn = new $n, sn = new ln, Dn = new Fn, Yt = new $t, Ko = new Jo, fn = new kn, Zn = new er, uo = new ho, cn = new dn, Cr = new yr, ur = new hr, jo = new Uo, Zo = new en, bn = new In, nt.moduleInitializer.MobileSDK ? ar = new cr : or = new nr, Ut = new zt, t = kt.getRegionRule(), "IAB2" !== kt.getRegionRuleType() ? [3, 2] : [4, Promise.all([jo.getLangJson(), jo.fetchGvlObj(), t.UseGoogleVendors ? jo.fetchGoogleVendors() : Promise.resolve(null), jo.loadCMP()])];
                        case 1:
                            return s = e.sent(), o = s[0], n = s[1], r = s[2], ot.gvlObj = n, ot.addtlVendorsList = r ? r.vendors : null, [3, 4];
                        case 2:
                            return [4, jo.getLangJson()];
                        case 3:
                            o = e.sent(), e.label = 4;
                        case 4:
                            return function(r) {
                                a(this, void 0, void 0, function() {
                                    var t, o, n;
                                    return u(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function(e) {
                                                        var t, o = nt.moduleInitializer.MobileSDK;
                                                        t = o ? ar : or;
                                                        var n = {
                                                            AllowAll: t.AllowAll,
                                                            BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                                            Close: t.Close,
                                                            getCSS: t.getCSS,
                                                            GetDomainData: t.GetDomainData,
                                                            getGeolocationData: t.getGeolocationData,
                                                            getHTML: t.getHTML,
                                                            Init: t.Init,
                                                            InitializeBanner: t.InitializeBanner,
                                                            initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                                            InsertHtml: t.InsertHtml,
                                                            InsertScript: t.InsertScript,
                                                            IsAlertBoxClosed: t.IsAlertBoxClosed,
                                                            IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                                            LoadBanner: t.LoadBanner,
                                                            OnConsentChanged: uo.OnConsentChanged,
                                                            ReconsentGroups: t.ReconsentGroups,
                                                            RejectAll: t.RejectAll,
                                                            SetAlertBoxClosed: t.SetAlertBoxClosed,
                                                            setGeoLocation: t.setGeoLocation,
                                                            ToggleInfoDisplay: t.ToggleInfoDisplay,
                                                            TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                                            useGeoLocationService: t.useGeoLocationService,
                                                            FetchAndDownloadPC: t.FetchAndDownloadPC,
                                                            changeLanguage: t.changeLang,
                                                            testLog: t.getTestLogData
                                                        };
                                                        e.IsConsentLoggingEnabled && (n.getDataSubjectId = t.getDataSubjectId, n.setConsentProfile = t.setConsentProfile, n.setDataSubjectId = t.setDataSubjectIdV2, ot.isV2Stub && (n.syncConsentProfile = Cr.syncConsentProfile));
                                                        o && (n.mobileOnlineURL = t.mobileOnlineURL, n.otCookieData = ot.otCookieData);
                                                        e.IsIabEnabled && (n.updateConsentFromCookies = uo.updateConsentFromCookie, n.getPingRequest = Ut.getPingRequestForTcf, n.getVendorConsentsRequestV2 = Ut.getVendorConsentsRequestV2, n.showVendorsList = t.showVendorsList);
                                                        return n
                                                    }(r.DomainData)), Dt.initializeBannerVariables(r), Wt = new Jt, Zt = new eo, qt = new Mt, io = new co, oo = new ro, On = new Nn, wn = new Bn,
                                                    function() {
                                                        var o = window.OTExternalConsent;
                                                        if (o && o.consentedDate && (o.groups || o.tcString || o.addtlString)) {
                                                            var n = [],
                                                                e = o.groups.split(",");
                                                            e.forEach(function(e) {
                                                                var t = e.split(":");
                                                                n.push({
                                                                    consentDate: o.consentedDate,
                                                                    status: "1" === t[1] ? v[v.ACTIVE] : v[v.OPT_OUT],
                                                                    id: t[0]
                                                                }), ot.grpsSynced.push(t[0])
                                                            }), ot.consentPreferences = {
                                                                preferences: n,
                                                                syncGroups: null
                                                            }, ot.syncRequired = !0, Wt.updateGroupsInCookie(Se.OPTANON_CONSENT, e), Pt.setCookie(Se.ALERT_BOX_CLOSED, o.consentedDate, 365), o.tcString && (ot.isIabSynced = !0, Pt.setCookie(Se.EU_PUB_CONSENT, o.tcString, 365)), o.addtlString && Pt.setCookie(Se.ADDITIONAL_CONSENT_STRING, "" + ot.addtlConsentVersion + o.addtlString, 365)
                                                        }
                                                    }(), ot.isPreview && (Dt.syncOtPreviewCookie(), kr.bindStopPreviewEvent()), t = Cr.syncPreferences(ot.consentPreferences, !0), (ot.syncRequired || t.syncRequired) && Dt.syncAlertBoxCookie(t.alertBoxCookieVal), Dt.syncCookieExpiry(), o = window.OneTrust.dataSubjectParams || {}, (ot.dsParams = o).id && or.setDataSubjectIdV2(o.id, o.isAnonymous), kt.multiVariantTestingEnabled && kt.selectedVariant && Pt.setCookie(Se.SELECTED_VARIANT, kt.selectedVariant.Id, vt.ReconsentFrequencyDays), [4, Ut.initializeIABModule()];
                                            case 1:
                                                return e.sent(), window.OneTrust.Init(!0), [4, Ko.fetchAssets()];
                                            case 2:
                                                return (e.sent(), Yn.initBanner(), uo.assetResolve(!0), Dn.initialiseCssReferences(), n = Dt.isIABCrossConsentEnabled(), (ot.syncedValidGrp || ot.isIabSynced) && !n && vt.NtfyConfig.ShowNtfy && Dt.isAlertBoxClosedAndValid()) ? (ot.ntfyRequired = !0, [4, wn.getContent()]) : [3, 4];
                                            case 3:
                                                e.sent(), e.label = 4;
                                            case 4:
                                                return n || window.OneTrust.LoadBanner(), [2]
                                        }
                                    })
                                })
                            }(o), [2]
                    }
                })
            })
        }()
}();