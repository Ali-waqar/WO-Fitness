! function(e) {
    var t = {};

    function s(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        e[i].call(n.exports, n, n.exports, s);
        n.l = !0;
        return n.exports
    }
    var i = [{
        name: "head-dlb/bundle.production.js",
        path: "head-dlb/static-1.234/bundle.production.js",
        ids: {}
    }];
    s.dlbpr = function(e, t) {
        var n = i[e];
        if (!n.r) {
            n.r = window["__webpack_require_" + n.name + "__"];
            if (!n.r) throw new Error("dlb " + n.name + " not loaded");
            n.r.linkDlb(s, n.ids)
        }
        return n.r(t)
    };
    s.m = e;
    s.c = t;
    s.d = function(e, t, i) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    };
    s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    s.t = function(e, t) {
        1 & t && (e = s(e));
        if (8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        s.r(i);
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        });
        if (2 & t && "string" != typeof e)
            for (var n in e) s.d(i, n, function(t) {
                return e[t]
            }.bind(null, n));
        return i
    };
    s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        s.d(t, "a", t);
        return t
    };
    s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    s.p = "//static.hsappstatic.net/conversations-embed/static-1.11084/";
    s(s.s = 0)
}([function(e, t, s) {
    "use strict";
    var i = s(1);
    (0, s(90).markStartPreDelay)();
    const n = () => {
        (0, i.startOnceReady)();
        document.removeEventListener("DOMContentLoaded", n)
    };
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : (0, i.startOnceReady)()
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.startOnceReady = b;
    var n = s(3),
        o = s(54),
        r = s(93),
        a = s(95),
        c = s(116),
        d = s(43),
        l = s(36),
        u = s(37),
        h = i(s(46)),
        f = s(44),
        p = i(s(45)),
        g = s(117),
        m = s(104);
    const E = () => {
            console.warn(`loadImmediately is set to false and widget.load() has not been called on window.${u.GLOBAL_VARIABLE} yet. Please call widget.load() first or set loadImmediately on window.${u.SETTINGS_VARIABLE} to true.`)
        },
        _ = () => {};

    function v({
        eventEmitter: e,
        logError: t = _
    }) {
        const s = (0, a.createEmbedScriptContext)(),
            i = new n.WidgetShell(s, e, t);
        if (window.hubspot_live_messages_running)(0, o.warn)("duplicate instance of live chat exists on page");
        else {
            window.hubspot_live_messages_running = !0;
            i.start()
        }
        return i
    }

    function I(e) {
        (0, r.loadWidgetCss)(document);
        if ((0, l.getExternalApiSettings)().loadImmediately) v({
            logError: e
        });
        else {
            const t = new h.default,
                s = new p.default;
            (0, d.setupExternalApi)({
                debug: E,
                on: t.on,
                off: t.off,
                clear: E,
                resetAndReloadWidget: E,
                widget: {
                    load: () => {
                        v({
                            eventEmitter: t,
                            logError: e
                        }).loadWidget()
                    },
                    remove: E,
                    open: E,
                    close: E,
                    refresh: E,
                    status: () => ({
                        loaded: !1
                    })
                }
            });
            (0, f.flushOnReadyCallbacks)({
                logger: s
            })
        }
    }

    function b() {
        if ((0, c.hasRequiredFeatures)(window)) {
            const e = new g.ErrorLogger;
            (0, m.getIsLocal)() ? I(): e.captureErrors(() => {
                I(e)
            })
        }
    }
}, function(e, t, s) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    e.exports = i
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.WidgetShell = void 0;
    var n = s(4),
        o = s(9),
        r = s(10),
        a = s(11),
        c = s(15),
        d = i(s(16)),
        l = s(18),
        u = s(19),
        h = s(21),
        f = i(s(20)),
        p = s(22),
        g = s(25),
        m = s(26),
        E = s(27),
        _ = s(28),
        v = s(29),
        I = s(33),
        b = s(42),
        T = s(43),
        O = s(44),
        S = i(s(45)),
        A = i(s(46)),
        y = s(52),
        M = s(53),
        P = s(56),
        C = s(57),
        R = s(58),
        k = s(35),
        L = i(s(60)),
        w = i(s(65)),
        N = s(66),
        D = s(68),
        x = s(70),
        U = s(71),
        W = s(24),
        j = s(73),
        H = s(74),
        G = s(76),
        F = s(79),
        B = s(80),
        q = s(81),
        V = s(82),
        $ = s(86),
        K = s(87),
        z = s(88),
        X = s(91),
        Y = s(92);
    const Q = "help-widget",
        Z = () => {};
    class J {
        constructor(e, t, s) {
            this.loadIFrame = () => {
                (0, n.isAnyMobile)() && document.documentElement.classList.add(g.MOBILE);
                const e = document.createElement("iframe");
                this.iframeSrc = this.embedScriptContext.getIFrameSrc();
                e.src = this.iframeSrc;
                e.title = "chat widget";
                e.addEventListener("load", this.handleIframeLoad);
                e.allowFullscreen = !0;
                if ((0, k.shouldEmbedInline)()) {
                    const t = document.querySelector((0, k.getInlineEmbedSelector)());
                    if (!t) {
                        this.devLogger.error(`cannot embed widget - element at \`${(0,k.getInlineEmbedSelector)()}\` cannot be found`);
                        return
                    }
                    const s = document.createElement("div");
                    s.id = b.INLINE_PARENT_ID;
                    e.id = b.INLINE_IFRAME_ID;
                    s.appendChild(e);
                    t.appendChild(s)
                } else {
                    if (!document.getElementById(b.PARENT_ID)) {
                        const t = document.createElement("div");
                        t.id = b.PARENT_ID;
                        const s = document.createElement("div");
                        s.className = g.SHADOW_CONTAINER;
                        const i = (0, _.isEmbeddedInProduct)(this.embedScriptContext);
                        if (i) {
                            t.classList.add(g.INTERNAL);
                            s.classList.add(g.INTERNAL)
                        }
                        t.appendChild(s);
                        i && (e.id = Q);
                        t.appendChild(e);
                        document.body.appendChild(t)
                    }
                    this.setFrameClass()
                }
            };
            this.setWidgetData = e => {
                this.widgetData = e;
                this.setFrameClass()
            };
            this.embedScriptContext = e;
            this.isOpen = (0, I.shouldWidgetStartOpen)();
            this.widgetData = null;
            this.iframeSrc = null;
            this.hasLoadedIframe = !1;
            this.isLoadingIframe = !1;
            this.requestWidgetOpen = this.requestWidgetOpen.bind(this);
            this.requestWidgetClose = this.requestWidgetClose.bind(this);
            this.requestWidgetRefresh = (0, C.throttle)(this.requestWidgetRefresh.bind(this), 1e3);
            this.handleWindowResize = this.handleWindowResize.bind(this);
            this.handleIframeLoad = this.handleIframeLoad.bind(this);
            this.handleResizeMessage = this.handleResizeMessage.bind(this);
            this.handleOpenChange = this.handleOpenChange.bind(this);
            this.handleStoreMessagesCookie = this.handleStoreMessagesCookie.bind(this);
            this.handleRequestWidget = this.handleRequestWidget.bind(this);
            this.handleWidgetRefresh = this.handleWidgetRefresh.bind(this);
            this.setWidgetNotLoaded = this.setWidgetNotLoaded.bind(this);
            this.removeIframe = this.removeIframe.bind(this);
            this.handleExternalApiEventMessage = this.handleExternalApiEventMessage.bind(this);
            this.loadWidget = (0, C.throttle)(this.loadWidget.bind(this), 1e3);
            this.resetAndReloadWidget = this.resetAndReloadWidget.bind(this);
            this.setWidgetOpenCookie = this.setWidgetOpenCookie.bind(this);
            this.getStatus = this.getStatus.bind(this);
            this.handleScroll = this.handleScroll.bind(this);
            this.handleExitIntent = this.handleExitIntent.bind(this);
            this.extendedClearCookiesFunction = this.extendedClearCookiesFunction.bind(this);
            this.openToNewThread = this.openToNewThread.bind(this);
            this.devLogger = new S.default;
            this.eventEmitter = t || new A.default;
            this.logError = s ? s.logError : Z;
            this.scrollPercentageTracker = new L.default({
                onScroll: this.handleScroll
            });
            this.exitIntentTracker = new w.default({
                onExitIntent: this.handleExitIntent
            });
            this.iframeMessage = (0, V.iframeMessagePool)({
                iframeSrc: this.embedScriptContext.getIFrameSrc()
            });
            this.apiUsageTracker = new j.ApiUsageTracker({
                postMessageToIframe: this.iframeMessage.post
            });
            const i = new H.PostMessageApiClient(this.iframeMessage.post),
                r = new d.default;
            this.postMessageReceiver = new a.PostMessageReceiver({
                [c.SHOW_PAGE_TITLE_NOTIFICATION]: r.handleShow,
                [c.CLEAR_PAGE_TITLE_NOTIFICATION]: r.handleClear,
                [o.REQUEST_WIDGET]: this.handleRequestWidget,
                [o.IFRAME_RESIZE]: this.handleResizeMessage,
                [o.OPEN_CHANGE]: this.handleOpenChange,
                [o.CLOSED_WELCOME_MESSAGE]: $.hideWelcomeMessage,
                [o.STORE_MESSAGES_COOKIE]: this.handleStoreMessagesCookie,
                [o.EXTERNAL_API_EVENT]: this.handleExternalApiEventMessage,
                [o.API_REQUEST]: i.makeApiRequest
            }, {
                allowedOrigin: this.embedScriptContext.getIFrameDomain(),
                iframeUuid: this.embedScriptContext.iframeUuid
            });
            this.exitIntentTracker.registerPostMessageReceivers(this.postMessageReceiver);
            this.scrollPercentageTracker.registerPostMessageReceivers(this.postMessageReceiver)
        }
        handleExternalApiEventMessage(e) {
            (0, y.handleExternalApiEventMessage)(e, {
                eventEmitter: this.eventEmitter
            })
        }
        handleScroll({
            scrollPercentage: e
        }) {
            this.iframeMessage.post(r.SCROLL_PERCENTAGE_CHANGE, {
                scrollPercentage: e
            })
        }
        handleExitIntent() {
            this.iframeMessage.post(r.EXIT_INTENT)
        }
        getStatus() {
            return {
                loaded: this.hasLoadedIframe,
                pending: this.isLoadingIframe
            }
        }
        handleIframeLoad() {
            this.handleWindowResize();
            this.hasLoadedIframe = !0;
            this.isLoadingIframe = !1;
            (0, N.markEndPostDelay)();
            this.postPerfAttributes(this.embedScriptContext.getPerfAttributes())
        }
        postPerfAttributes(e) {
            Math.random() < .5 && this.iframeMessage.post(r.PERF_ATTRIBUTES, {
                perfAttributes: e
            })
        }
        resetAndReloadWidget() {
            this.removeIframe();
            (0, U.resetAndLaunchWidget)()
        }
        removeIframe() {
            const e = (0, k.shouldEmbedInline)() ? document.getElementById(b.INLINE_PARENT_ID) : document.getElementById(b.PARENT_ID);
            e && e.remove();
            this.iframeSrc = null;
            this.hasLoadedIframe = !1;
            this.isLoadingIframe = !1
        }
        handleResizeMessage({
            data: {
                height: e,
                width: t
            } = {}
        }) {
            (0, K.resizeWidgetIframe)({
                height: e,
                width: t,
                isOpen: this.isOpen
            })
        }
        setWidgetOpenCookie({
            isOpen: e
        }) {
            (0, u.setCookie)(h.cookies.IS_OPEN, e, f.default.THIRTY_MINUTES)
        }
        handleOpenChange({
            data: {
                isOpen: e,
                isUser: t
            }
        }) {
            const s = document.documentElement,
                i = document.getElementById(b.PARENT_ID).getElementsByClassName(g.SHADOW_CONTAINER)[0];
            this.isOpen = e;
            t && this.setWidgetOpenCookie({
                isOpen: this.isOpen
            });
            if (this.isOpen) {
                s.classList.add(g.ACTIVE);
                i.classList.add("active")
            } else {
                s.classList.remove(g.ACTIVE);
                i.classList.remove("active")
            }
            if ((0, n.isAnyMobile)() && this.isOpen) {
                const e = window.innerHeight,
                    t = window.innerWidth;
                (0, K.resizeWidgetIframe)({
                    height: e,
                    width: t,
                    isOpen: this.isOpen
                })
            }
        }
        handleRequestWidget({
            source: e
        }) {
            (0, G.sendWidgetDataToIframe)({
                source: e,
                widgetData: this.widgetData,
                embedScriptContext: this.embedScriptContext,
                apiUsageTracker: this.apiUsageTracker
            })
        }
        handleStoreMessagesCookie({
            data: e
        }) {
            this.iframeMessage.post(r.FIRST_VISITOR_SESSION, {
                isFirstVisitorSession: !1
            });
            "yes" === (0, X.getGlobalCookieOptOut)() && this.widgetData.gdprConsentOptions.cookieConsentPrompt !== Y.NEVER && window._hsp.push(["showBanner"]);
            (0, E.setMessagesUtk)(e)
        }
        requestWidgetOpen() {
            this.isOpen ? this.devLogger.log("cannot open the widget, it is already open.") : this.iframeMessage.post(r.REQUEST_OPEN)
        }
        requestWidgetClose() {
            this.isOpen ? this.iframeMessage.post(r.REQUEST_CLOSE) : this.devLogger.log("cannot close the widget, it is already closed")
        }
        handleWindowResize() {
            const e = {
                height: window.innerHeight,
                width: window.innerWidth
            };
            this.iframeMessage.post(r.BROWSER_WINDOW_RESIZE, e)
        }
        requestWidgetRefresh({
            openToNewThread: e
        } = {}) {
            const {
                portalId: t
            } = this.embedScriptContext;
            if (this.hasLoadedIframe || !this.isLoadingIframe)
                if (this.hasLoadedIframe) {
                    const s = this.embedScriptContext.getInitialRequestUrl();
                    (0, M.fetchWidgetData)({
                        requestUrl: s,
                        portalId: t
                    }, t => {
                        this.handleWidgetRefresh(t);
                        e && this.openToNewThread()
                    })
                } else {
                    this.loadWidget();
                    e && this.openToNewThread()
                }
            else this.devLogger.log("Cannot refresh the widget - it is currently loading.")
        }
        openToNewThread() {
            this.iframeMessage.post(r.OPEN_TO_NEW_THREAD)
        }
        extendedClearCookiesFunction(e) {
            e && e[W.RESET_WIDGET] && this.removeIframe();
            (0, p.clearCookies)(e)
        }
        handleWidgetRefresh(e) {
            this.setWidgetData(e);
            (0, l.getWidgetDataResponseType)(this.widgetData) === m.HIDE_WIDGET ? this.removeIframe() : this.iframeMessage.post(r.REFRESH_WIDGET_DATA, Object.assign({}, this.widgetData, {}, (0, R.getIframeQueryParams)(this.embedScriptContext)))
        }
        setWidgetNotLoaded() {
            this.hasLoadedIframe = !1;
            this.isLoadingIframe = !1
        }
        loadWidget(e = {}) {
            const {
                portalId: t
            } = this.embedScriptContext;
            if (this.isLoadingIframe) {
                this.devLogger.log("Cannot load the widget - The widget is already being loaded.");
                this.logError("load widget called while public widget request is pending")
            } else if (this.hasLoadedIframe) this.devLogger.log("Cannot load the widget - the widget has already loaded.");
            else {
                this.isLoadingIframe = !0;
                e.widgetOpen && this.setWidgetOpenCookie({
                    isOpen: !0
                });
                (0, M.fetchWidgetData)({
                    requestUrl: this.embedScriptContext.getInitialRequestUrl(),
                    portalId: t
                }, (0, z.handleTargetingAndDelay)(this.setWidgetData, this.loadIFrame, this.setWidgetNotLoaded), () => {
                    P.EVENTS.messagesInitialized({
                        messageWillRender: !1
                    })
                })
            }
        }
        start() {
            const {
                shouldRender: e
            } = (0, v.shouldRenderWidget)(this.embedScriptContext);
            if (e) {
                (0, T.setupExternalApi)({
                    debug: this.devLogger.debug,
                    on: (e, t) => {
                        this.eventEmitter.on(e, t);
                        this.apiUsageTracker.trackEventListener(e)
                    },
                    off: this.eventEmitter.off,
                    clear: (...e) => {
                        this.extendedClearCookiesFunction(...e);
                        this.apiUsageTracker.trackMethod("clear")
                    },
                    resetAndReloadWidget: this.resetAndReloadWidget,
                    widget: {
                        load: (...e) => {
                            this.loadWidget(...e);
                            this.apiUsageTracker.trackMethod("load")
                        },
                        remove: () => {
                            this.removeIframe();
                            this.apiUsageTracker.trackMethod("remove")
                        },
                        open: () => {
                            this.requestWidgetOpen();
                            this.apiUsageTracker.trackMethod("open")
                        },
                        close: () => {
                            this.requestWidgetClose();
                            this.apiUsageTracker.trackMethod("close")
                        },
                        refresh: (...e) => {
                            this.requestWidgetRefresh(...e);
                            this.apiUsageTracker.trackMethod("refresh")
                        },
                        status: () => {
                            this.apiUsageTracker.trackMethod("status");
                            return this.getStatus()
                        }
                    }
                }, this.embedScriptContext);
                (0, O.flushOnReadyCallbacks)({
                    logger: this.devLogger,
                    trackCallback: this.apiUsageTracker.trackOnReady
                });
                (0, B.registerHashChangeListener)({
                    requestWidgetOpen: this.requestWidgetOpen,
                    isOpen: this.isOpen
                });
                (0, q.registerWindowResizeListener)({
                    resizeCallbackFn: this.handleWindowResize
                });
                (0, F.registerCookieListeners)({
                    postMessageToIframe: this.iframeMessage.post
                });
                (0, k.shouldLoadImmediately)() && this.loadWidget()
            } else try {
                P.EVENTS.messagesInitialized({
                    messageWillRender: !1
                })
            } catch (e) {
                this.devLogger.log("widget load aborted")
            }
        }
        setFrameClass() {
            const e = document.getElementById(b.PARENT_ID);
            if (!e) return;
            const t = this.widgetData[x.WIDGET_LOCATION];
            (0, D.setClassInClassList)({
                widgetLocation: t,
                classList: e.classList
            })
        }
    }
    t.WidgetShell = J
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getMobileState = a;
    t.isAnyMobile = c;
    t.isMobileSafari = d;
    t.isWindowsMobile = l;
    t.isOperaMini = u;
    t.isIE10 = h;
    t.isIE11 = f;
    var n = i(s(5));
    const o = /WebKit/i;

    function r(e, t) {
        return e.test(t)
    }

    function a(e = window.navigator.userAgent) {
        let t = e,
            s = t.split("[FBAN");
        void 0 !== s[1] && (t = s[0]);
        s = t.split("Twitter");
        void 0 !== s[1] && (t = s[0]);
        const i = new n.default(t);
        i.other.webkit = r(o, t);
        i.safari = i.apple.device && i.other.webkit && !i.other.opera && !i.other.chrome;
        return i
    }

    function c() {
        const e = a();
        return e.any && !e.tablet
    }

    function d() {
        return a().safari
    }

    function l() {
        return a().windows.phone
    }

    function u() {
        return a().other.opera
    }

    function h() {
        const e = window.navigator.userAgent,
            t = e.indexOf("MSIE ");
        return t > 0 && parseInt(e.substring(t + 5, e.indexOf(".", t)), 10)
    }

    function f() {
        return window.navigator.userAgent.indexOf("Trident/") > 0
    }
}, function(e, t, s) {
    "use strict";
    var i = s(6);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {};
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return o.default
        }
    });
    var o = i(s(8));
    Object.keys(o).forEach((function(e) {
        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return o[e]
            }
        }))
    }))
}, function(e, t, s) {
    "use strict";
    var i = s(7);

    function n() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        n = function() {
            return e
        };
        return e
    }

    function o(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== i(e) && "function" != typeof e) return {
            default: e
        };
        var t = n();
        if (t && t.has(e)) return t.get(e);
        var s = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
                var a = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                a && (a.get || a.set) ? Object.defineProperty(s, r, a) : s[r] = e[r]
            }
        s.default = e;
        t && t.set(e, s);
        return s
    }
    e.exports = o
}, function(e, t, s) {
    "use strict";

    function i(t) {
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = i = function(e) {
            return typeof e
        } : e.exports = i = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        return i(t)
    }
    e.exports = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = I;
    var i = /iPhone/i,
        n = /iPod/i,
        o = /iPad/i,
        r = /\biOS-universal(?:.+)Mac\b/i,
        a = /\bAndroid(?:.+)Mobile\b/i,
        c = /Android/i,
        d = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
        l = /Silk/i,
        u = /Windows Phone/i,
        h = /\bWindows(?:.+)ARM\b/i,
        f = /BlackBerry/i,
        p = /BB10/i,
        g = /Opera Mini/i,
        m = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        E = /Mobile(?:.+)Firefox\b/i,
        _ = function(e) {
            return void 0 !== e && "MacIntel" === e.platform && "number" == typeof e.maxTouchPoints && e.maxTouchPoints > 1 && "undefined" == typeof MSStream
        };

    function v(e) {
        return function(t) {
            return t.test(e)
        }
    }

    function I(e) {
        var t = {
            userAgent: "",
            platform: "",
            maxTouchPoints: 0
        };
        e || "undefined" == typeof navigator ? "string" == typeof e ? t.userAgent = e : e && e.userAgent && (t = {
            userAgent: e.userAgent,
            platform: e.platform,
            maxTouchPoints: e.maxTouchPoints || 0
        }) : t = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
        var s = t.userAgent,
            I = s.split("[FBAN");
        void 0 !== I[1] && (s = I[0]);
        void 0 !== (I = s.split("Twitter"))[1] && (s = I[0]);
        var b = v(s),
            T = {
                apple: {
                    phone: b(i) && !b(u),
                    ipod: b(n),
                    tablet: !b(i) && (b(o) || _(t)) && !b(u),
                    universal: b(r),
                    device: (b(i) || b(n) || b(o) || b(r) || _(t)) && !b(u)
                },
                amazon: {
                    phone: b(d),
                    tablet: !b(d) && b(l),
                    device: b(d) || b(l)
                },
                android: {
                    phone: !b(u) && b(d) || !b(u) && b(a),
                    tablet: !b(u) && !b(d) && !b(a) && (b(l) || b(c)),
                    device: !b(u) && (b(d) || b(l) || b(a) || b(c)) || b(/\bokhttp\b/i)
                },
                windows: {
                    phone: b(u),
                    tablet: b(h),
                    device: b(u) || b(h)
                },
                other: {
                    blackberry: b(f),
                    blackberry10: b(p),
                    opera: b(g),
                    firefox: b(E),
                    chrome: b(m),
                    device: b(f) || b(p) || b(g) || b(E) || b(m)
                },
                any: !1,
                phone: !1,
                tablet: !1
            };
        T.any = T.apple.device || T.android.device || T.windows.device || T.other.device;
        T.phone = T.apple.phone || T.android.phone || T.windows.phone;
        T.tablet = T.apple.tablet || T.android.tablet || T.windows.tablet;
        return T
    }
    e.exports = t.default
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.API_REQUEST = t.STOP_TRACK_EXIT_INTENT = t.START_TRACK_EXIT_INTENT = t.STOP_TRACK_SCROLL_PERCENTAGE = t.START_TRACK_SCROLL_PERCENTAGE = t.EXTERNAL_API_EVENT = t.STORE_MESSAGES_COOKIE = t.REQUEST_WIDGET = t.CLOSED_WELCOME_MESSAGE = t.OPEN_CHANGE = t.IFRAME_RESIZE = void 0;
    const i = "iframe-resize";
    t.IFRAME_RESIZE = i;
    const n = "open-change";
    t.OPEN_CHANGE = n;
    const o = "closed-welcome-message";
    t.CLOSED_WELCOME_MESSAGE = o;
    const r = "request-widget";
    t.REQUEST_WIDGET = r;
    const a = "store-messages-cookie";
    t.STORE_MESSAGES_COOKIE = a;
    const c = "external-api-event";
    t.EXTERNAL_API_EVENT = c;
    const d = "start-track-scroll-percentage";
    t.START_TRACK_SCROLL_PERCENTAGE = d;
    const l = "stop-track-scroll-percentage";
    t.STOP_TRACK_SCROLL_PERCENTAGE = l;
    const u = "start-track-exit-intent";
    t.START_TRACK_EXIT_INTENT = u;
    const h = "stop-track-exit-intent";
    t.STOP_TRACK_EXIT_INTENT = h;
    const f = "api-request";
    t.API_REQUEST = f
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.API_REQUEST_RESULT = t.OPEN_TO_NEW_THREAD = t.TRACK_API_USAGE = t.PERF_ATTRIBUTES = t.EXIT_INTENT = t.SCROLL_PERCENTAGE_CHANGE = t.BROWSER_WINDOW_RESIZE = t.REQUEST_CLOSE = t.REQUEST_OPEN = t.REFRESH_WIDGET_DATA = t.FIRST_VISITOR_SESSION = t.GLOBAL_COOKIE_OPT_OUT = t.HUBSPOT_UTK = t.WIDGET_DATA = void 0;
    const i = "widget-data";
    t.WIDGET_DATA = i;
    const n = "hubspot-utk";
    t.HUBSPOT_UTK = n;
    const o = "global-cookie-opt-out";
    t.GLOBAL_COOKIE_OPT_OUT = o;
    const r = "first-visitor-session";
    t.FIRST_VISITOR_SESSION = r;
    const a = "refresh-widget-data";
    t.REFRESH_WIDGET_DATA = a;
    const c = "request-open";
    t.REQUEST_OPEN = c;
    const d = "request-close";
    t.REQUEST_CLOSE = d;
    const l = "browser-window-resize";
    t.BROWSER_WINDOW_RESIZE = l;
    const u = "scroll-percentage-change";
    t.SCROLL_PERCENTAGE_CHANGE = u;
    const h = "exit-intent";
    t.EXIT_INTENT = h;
    const f = "perf-attributes";
    t.PERF_ATTRIBUTES = f;
    const p = "track-api-usage";
    t.TRACK_API_USAGE = p;
    const g = "open-to-new-thread";
    t.OPEN_TO_NEW_THREAD = g;
    const m = "api-request-result";
    t.API_REQUEST_RESULT = m
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.PostMessageReceiver = void 0;
    var i = s(12),
        n = s(14);
    class o {
        constructor(e, {
            allowedOrigin: t,
            iframeUuid: s
        }) {
            (0, n.objectInvariant)(e);
            (0, i.stringInvariant)(t);
            (0, i.stringInvariant)(s);
            this.allowedOrigin = t;
            this.iframeUuid = s;
            this._handlers = e;
            this.handleMessage = this.handleMessage.bind(this);
            window.addEventListener("message", this.handleMessage)
        }
        isOriginAllowed(e) {
            return e === this.allowedOrigin
        }
        handleMessage(e) {
            const {
                data: t,
                origin: s,
                source: i
            } = e;
            if (this.isOriginAllowed(s)) try {
                const e = JSON.parse(t);
                if (e.uuid !== this.iframeUuid) return;
                const {
                    type: s,
                    data: n
                } = e, o = this._handlers[s];
                "function" == typeof o && o({
                    data: n,
                    source: i
                })
            } catch (e) {
                return
            }
        }
        register(e, t) {
            this._handlers[e] = t
        }
    }
    t.PostMessageReceiver = o
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.stringInvariant = void 0;
    var n = i(s(13));
    const o = (e, t = "") => (0, n.default)("string" == typeof e, "Expected %s to be a string, not a %s", t || e, typeof e);
    t.stringInvariant = o
}, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    var s = (e, t, s, i, n, o, r, a) => {
        if (!e) {
            let e;
            if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                const c = [s, i, n, o, r, a];
                let d = 0;
                e = new Error("Invariant Violation: " + t.replace(/%s/g, () => c[d++]))
            }
            e.framesToPop = 1;
            throw e
        }
    };
    t.default = s;
    e.exports = t.default
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.objectInvariant = void 0;
    var n = i(s(13));
    const o = (e, t = "") => (0, n.default)("object" == typeof e && null !== e, "Expected %s to be an object", t || e);
    t.objectInvariant = o
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.CLEAR_PAGE_TITLE_NOTIFICATION = t.SHOW_PAGE_TITLE_NOTIFICATION = void 0;
    const i = "show-page-title-notification";
    t.SHOW_PAGE_TITLE_NOTIFICATION = i;
    const n = "clear-page-title-notification";
    t.CLEAR_PAGE_TITLE_NOTIFICATION = n
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    var i = s(12),
        n = s(17);
    class o {
        constructor() {
            this.handleShow = this.handleShow.bind(this);
            this.handleClear = this.handleClear.bind(this);
            this.notificationIntervalId = null;
            this.notificationMessageIsInPageTitle = !1;
            this.cachedOriginalDocumentTitle = null
        }
        clearNotificationInterval() {
            clearInterval(this.notificationIntervalId)
        }
        notificationIntervalIsRunning() {
            return Boolean(this.notificationIntervalId)
        }
        start({
            title: e
        }) {
            if (!this.notificationIntervalIsRunning()) {
                this.cachedOriginalDocumentTitle = document.title;
                this.togglePageTitle({
                    notificationTitle: e
                });
                this.notificationIntervalId = setInterval(() => {
                    this.togglePageTitle({
                        notificationTitle: e
                    })
                }, n.NOTIFICATION_INTERVAL_MS)
            }
        }
        stop() {
            this.clearNotificationInterval();
            this.updatePageTitle(this.cachedOriginalDocumentTitle);
            this.notificationIntervalId = null;
            this.notificationMessageIsInPageTitle = !1;
            this.cachedOriginalDocumentTitle = null
        }
        togglePageTitle({
            notificationTitle: e
        }) {
            if (this.notificationMessageIsInPageTitle) {
                this.updatePageTitle(this.cachedOriginalDocumentTitle);
                this.notificationMessageIsInPageTitle = !1
            } else {
                this.updatePageTitle(e);
                this.notificationMessageIsInPageTitle = !0
            }
        }
        handleShow({
            data: e
        }) {
            this.start({
                title: e.title
            })
        }
        handleClear() {
            this.stop()
        }
        updatePageTitle(e) {
            (0, i.stringInvariant)(e);
            document.title = e
        }
    }
    var r = o;
    t.default = r;
    e.exports = t.default
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.NOTIFICATION_INTERVAL_MS = void 0;
    const i = 1250;
    t.NOTIFICATION_INTERVAL_MS = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getWidgetDataResponseType = n;
    const i = "@type";

    function n(e) {
        return e && "object" == typeof e ? e[i] : void 0
    }
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getCookie = r;
    t.getHostnameWithoutWww = a;
    t.setCookie = c;
    var n = i(s(20));
    let o = !1;

    function r(e) {
        let t = null;
        if (document.cookie && "" !== document.cookie) {
            const s = document.cookie.split(";");
            for (let i = 0; i < s.length; i++) {
                const n = s[i].trim();
                if (n.substring(0, e.length + 1) === e + "=") {
                    t = n.substring(e.length + 1);
                    break
                }
            }
        }
        return t
    }

    function a() {
        return window.location.hostname.replace(/^www\./, "")
    }

    function c(e, t, s = n.default.SIX_MONTHS) {
        const i = [`${e}=${t}`, "expires=" + new Date(Date.now() + s).toGMTString(), "domain=" + ("." + a()), "path=/", "SameSite=Lax"];
        if (window.location.protocol.indexOf("https") > -1) i.push("Secure");
        else if (!o) {
            console.warn("HubSpot Conversations: You are using conversations on a non-https site! Not using https puts your visitor's data at risk, please enforce using https.");
            o = !0
        }
        const r = i.join(";");
        document.cookie = r
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    const i = 864e5;
    var n = {
        TWO_MINUTES: 12e4,
        THIRTY_MINUTES: 18e5,
        ONE_DAY: i,
        SIX_MONTHS: 30 * i * 6
    };
    t.default = n;
    e.exports = t.default
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.cookieValues = t.cookies = void 0;
    const i = {
        HUBSPOT: "hubspotutk",
        MESSAGES: "messagesUtk",
        IS_OPEN: "hs-messages-is-open",
        HIDE_WELCOME_MESSAGE: "hs-messages-hide-welcome-message",
        HUBSPOT_API_CSRF: "hubspotapi-csrf",
        HSTC: "__hstc",
        HSSC: "__hssc",
        GLOBAL_COOKIE_OPT_OUT: "__hs_opt_out"
    };
    t.cookies = i;
    const n = {
        GLOBAL_COOKIE_OPT_OUT_YES: "yes",
        GLOBAL_COOKIE_OPT_OUT_NO: "no"
    };
    t.cookieValues = n
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.clearCookies = a;
    var i = s(21),
        n = s(23),
        o = s(1),
        r = s(24);

    function a(e) {
        (0, n.deleteCookie)(i.cookies.MESSAGES);
        (0, n.deleteCookie)(i.cookies.IS_OPEN);
        (0, n.deleteCookie)(i.cookies.HIDE_WELCOME_MESSAGE);
        if (e && e[r.RESET_WIDGET]) {
            window.hubspot_live_messages_running = !1;
            (0, o.startOnceReady)()
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.deleteCookie = n;
    var i = s(19);

    function n(e) {
        (0, i.setCookie)(e, "", -1)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.RESET_WIDGET = void 0;
    const i = "resetWidget";
    t.RESET_WIDGET = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.ALIGNED_RIGHT_CLASS = t.ALIGNED_LEFT_CLASS = t.INTERNAL = t.SHADOW_CONTAINER = t.MOBILE = t.ACTIVE = void 0;
    const i = "hs-messages-widget-open";
    t.ACTIVE = i;
    const n = "hs-messages-mobile";
    t.MOBILE = n;
    const o = "shadow-container";
    t.SHADOW_CONTAINER = o;
    const r = "internal";
    t.INTERNAL = r;
    const a = "widget-align-left";
    t.ALIGNED_LEFT_CLASS = a;
    const c = "widget-align-right";
    t.ALIGNED_RIGHT_CLASS = c
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.HIDE_WIDGET = t.V1 = void 0;
    const i = "V1";
    t.V1 = i;
    const n = "HIDE_WIDGET";
    t.HIDE_WIDGET = n
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setMessagesUtk = o;
    var i = s(19),
        n = s(21);

    function o(e) {
        (0, i.setCookie)(n.cookies.MESSAGES, e)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.isEmbeddedInProduct = d;
    const i = 53,
        n = 99535353,
        o = /^(?:app|local)\.hubspot(?:qa)?\.com$/,
        r = /(?:pricing)\/[0-9]+/,
        a = /signup-hubspot/,
        c = "pricing";

    function d({
        portalId: e,
        hostname: t = window.location.hostname,
        pathname: s = window.location.pathname
    }) {
        const d = -1 !== s.indexOf(c) && !r.test(s),
            l = a.test(s);
        return !(!o.test(t) || d || l) && (-1 !== t.indexOf("qa") ? e === i || e === n : e === i)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.shouldRenderWidget = void 0;
    var i = s(4),
        n = s(28),
        o = s(30),
        r = s(31);
    const a = ({
        portalId: e
    }) => {
        let t = !1;
        (0, o.getPortalIdFromPath)(window.location.pathname) && (t = !0);
        const s = (0, n.isEmbeddedInProduct)({
                portalId: e
            }) && !t,
            a = window.disabledHsPopups && window.disabledHsPopups.indexOf("LIVE_CHAT") > -1;
        return (0, i.isIE10)() ? {
            shouldRender: !1,
            reason: "IE_10"
        } : (0, i.isIE11)() ? {
            shouldRender: !1,
            reason: "IE_11"
        } : (0, i.isWindowsMobile)() ? {
            shouldRender: !1,
            reason: "WINDOWS_PHONE"
        } : (0, i.isOperaMini)() ? {
            shouldRender: !1,
            reason: "OPERA_MINI"
        } : (0, r.isUsingUnsupportedFramework)() ? {
            shouldRender: !1,
            reason: "UNSUPPORTED_FRAMEWORK"
        } : s ? {
            shouldRender: !1,
            reason: "MISSING_PORTAL_ID"
        } : a ? {
            shouldRender: !1,
            reason: "IS_EMBEDDED_MEETINGS"
        } : {
            shouldRender: !0
        }
    };
    t.shouldRenderWidget = a
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getPortalIdFromPath = n;
    const i = /^\/(?:[A-Za-z0-9-_]*)\/(\d+)(?:\/|$)/;

    function n(e) {
        try {
            return i.exec(e)[1]
        } catch (e) {
            return ""
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.isUsingUnsupportedFramework = void 0;
    var i = s(32);
    const n = () => {
        const e = i.METHODS.filter(e => !!e).length;
        return Boolean(e)
    };
    t.isUsingUnsupportedFramework = n
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.METHODS = void 0;
    const i = [Object.prototype.toJSON, Array.prototype.toJSON, String.prototype.toJSON];
    t.METHODS = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.shouldWidgetStartOpen = d;
    var i = s(34),
        n = s(19),
        o = s(35),
        r = s(21),
        a = s(40),
        c = s(41);

    function d() {
        const e = (0, o.shouldEmbedInline)();
        if (!e && (0, i.cookieIsSet)(r.cookies.IS_OPEN)) {
            const e = (0, n.getCookie)(r.cookies.IS_OPEN);
            return (0, c.stringToBoolean)(e)
        }
        return e || (0, a.urlHasHsChatHashLink)(window.location.href) || void 0
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.cookieIsSet = void 0;
    var i = s(19);
    const n = e => null !== (0, i.getCookie)(e);
    t.cookieIsSet = n
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getIdentificationToken = t.getIdentificationEmail = t.getEnableWidgetCookieBanner = t.shouldDisableAttachment = t.shouldEmbedInline = t.getInlineEmbedSelector = t.shouldBeFullscreen = t.shouldLoadImmediately = void 0;
    var i = s(36);
    const n = () => !!(0, i.getExternalApiSettings)().loadImmediately;
    t.shouldLoadImmediately = n;
    const o = () => !!(0, i.getExternalApiSettings)().isFullscreen;
    t.shouldBeFullscreen = o;
    const r = () => (0, i.getExternalApiSettings)().inlineEmbedSelector;
    t.getInlineEmbedSelector = r;
    const a = () => !!(0, i.getExternalApiSettings)().inlineEmbedSelector;
    t.shouldEmbedInline = a;
    const c = () => !!(0, i.getExternalApiSettings)().disableAttachment;
    t.shouldDisableAttachment = c;
    const d = () => (0, i.getExternalApiSettings)().enableWidgetCookieBanner;
    t.getEnableWidgetCookieBanner = d;
    const l = () => (0, i.getExternalApiSettings)().identificationEmail;
    t.getIdentificationEmail = l;
    const u = () => (0, i.getExternalApiSettings)().identificationToken;
    t.getIdentificationToken = u
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getExternalApiSettings = c;
    var i = s(37),
        n = s(38),
        o = s(12),
        r = s(39);
    const a = {
        loadImmediately: !0,
        isFullscreen: !1,
        inlineEmbedSelector: "",
        disableAttachment: !1,
        enableWidgetCookieBanner: !1,
        identificationEmail: "",
        identificationToken: ""
    };

    function c() {
        const e = window[i.SETTINGS_VARIABLE],
            t = Object.assign({}, a, e);
        (0, n.booleanInvariant)(t.loadImmediately, "mergedSettings.loadImmediately");
        (0, n.booleanInvariant)(t.isFullscreen, "mergedSettings.isFullscreen");
        (0, n.booleanInvariant)(t.disableAttachment, "mergedSettings.disableAttachment");
        (0, r.oneOfListInvariant)(t.enableWidgetCookieBanner, "mergedSettings.enableWidgetCookieBanner", [!1, !0, i.ON_WIDGET_LOAD, i.ON_EXIT_INTENT]);
        (0, o.stringInvariant)(t.inlineEmbedSelector, "mergedSettings.inlineEmbedSelector");
        (0, o.stringInvariant)(t.identificationEmail, "mergedSettings.identificationEmail");
        (0, o.stringInvariant)(t.identificationToken, "mergedSettings.identificationToken");
        return t
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.ON_WIDGET_LOAD = t.ON_EXIT_INTENT = t.SETTINGS_VARIABLE = t.ON_READY_CALLBACKS = t.GLOBAL_VARIABLE = void 0;
    const i = "HubSpotConversations";
    t.GLOBAL_VARIABLE = i;
    const n = "hsConversationsOnReady";
    t.ON_READY_CALLBACKS = n;
    const o = "hsConversationsSettings";
    t.SETTINGS_VARIABLE = o;
    const r = "ON_EXIT_INTENT";
    t.ON_EXIT_INTENT = r;
    const a = "ON_WIDGET_LOAD";
    t.ON_WIDGET_LOAD = a
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.booleanInvariant = void 0;
    var n = i(s(13));
    const o = (e, t) => (0, n.default)(!0 === e || !1 === e, "Expected %s to be a boolean but received a %s", t || e, typeof e);
    t.booleanInvariant = o
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.oneOfListInvariant = void 0;
    var n = i(s(13));
    const o = (e, t, s) => (0, n.default)(s.indexOf(e) > -1, `Expected %s to be one of ${s.toString()} but got %s`, t, e);
    t.oneOfListInvariant = o
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.urlHasHsChatHashLink = void 0;
    const i = new RegExp("" + "#hs-chat-open", "i"),
        n = e => i.test(e);
    t.urlHasHsChatHashLink = n
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.stringToBoolean = void 0;
    const i = e => "true" === e;
    t.stringToBoolean = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.INLINE_IFRAME_ID = t.INLINE_PARENT_ID = t.PARENT_ID = void 0;
    const i = "hubspot-messages-iframe-container";
    t.PARENT_ID = i;
    const n = "hubspot-conversations-inline-parent";
    t.INLINE_PARENT_ID = n;
    const o = "hubspot-conversations-inline-iframe";
    t.INLINE_IFRAME_ID = o
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setupExternalApi = n;
    var i = s(37);

    function n(e) {
        window[i.GLOBAL_VARIABLE] = e
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.flushOnReadyCallbacks = n;
    var i = s(37);

    function n({
        logger: e,
        trackCallback: t
    }) {
        const s = window[i.ON_READY_CALLBACKS];
        if (Array.isArray(s)) {
            t && t();
            s.forEach(t => {
                try {
                    t()
                } catch (t) {
                    e.error(t.message)
                }
            })
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    const i = "HubSpot Conversations log:";
    class n {
        constructor({
            debug: e
        } = {}) {
            this._debug = Boolean(e);
            this.debug = this.debug.bind(this)
        }
        _isDebugMode() {
            return this._debug
        }
        debug(e) {
            this._debug = e
        }
        log(e) {
            this._isDebugMode() && console.log(`${i} ${e}`)
        }
        error(e) {
            this._isDebugMode() && console.error(`${i} ${e}`)
        }
    }
    var o = n;
    t.default = o;
    e.exports = t.default
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    var n = i(s(47)),
        o = s(12),
        r = s(48),
        a = s(49),
        c = s(50);
    class d {
        constructor() {
            this._eventEmitter = new n.default;
            this._namespacedEventType = this._namespacedEventType.bind(this);
            this.on = this.on.bind(this);
            this.off = this.off.bind(this);
            this.trigger = this.trigger.bind(this)
        }
        _namespacedEventType(e) {
            return `${a.EVENT_NAMESPACE}:${e}`
        }
        on(e, t) {
            (0, o.stringInvariant)(e);
            (0, r.functionInvariant)(t);
            if (!e.length) return;
            const s = this._namespacedEventType(e);
            this._eventEmitter.addListener(s, t)
        }
        off(e, t) {
            (0, o.stringInvariant)(e);
            (0, r.functionInvariant)(t);
            if (!e.length) return;
            const s = this._namespacedEventType(e);
            this._eventEmitter.removeListener(s, t)
        }
        trigger(e, t) {
            (0, c.eventTypeInvariant)(e);
            const s = this._namespacedEventType(e);
            this._eventEmitter.emit(s, t)
        }
    }
    var l = d;
    t.default = l;
    e.exports = t.default
}, function(e, t, s) {
    "use strict";
    var i, n;
    n = function() {
        return function e(t, s, n) {
            function o(a, c) {
                if (!s[a]) {
                    if (!t[a]) {
                        if (!c && "function" == typeof i && i) return i(a, !0);
                        if (r) return r(a, !0);
                        var d = new Error("Cannot find module '" + a + "'");
                        throw d.code = "MODULE_NOT_FOUND", d
                    }
                    var l = s[a] = {
                        exports: {}
                    };
                    t[a][0].call(l.exports, (function(e) {
                        return o(t[a][1][e] || e)
                    }), l, l.exports, e, t, s, n)
                }
                return s[a].exports
            }
            for (var r = "function" == typeof i && i, a = 0; a < n.length; a++) o(n[a]);
            return o
        }({
            1: [function(e, t, s) {
                var i = Object.prototype.hasOwnProperty,
                    n = "~";

                function o() {}

                function r(e, t, s) {
                    this.fn = e, this.context = t, this.once = s || !1
                }

                function a(e, t, s, i, o) {
                    if ("function" != typeof s) throw new TypeError("The listener must be a function");
                    var a = new r(s, i || e, o),
                        c = n ? n + t : t;
                    return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], a] : e._events[c].push(a) : (e._events[c] = a, e._eventsCount++), e
                }

                function c(e, t) {
                    0 == --e._eventsCount ? e._events = new o : delete e._events[t]
                }

                function d() {
                    this._events = new o, this._eventsCount = 0
                }
                Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (n = !1)), d.prototype.eventNames = function() {
                    var e, t, s = [];
                    if (0 === this._eventsCount) return s;
                    for (t in e = this._events) i.call(e, t) && s.push(n ? t.slice(1) : t);
                    return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(e)) : s
                }, d.prototype.listeners = function(e) {
                    var t = n ? n + e : e,
                        s = this._events[t];
                    if (!s) return [];
                    if (s.fn) return [s.fn];
                    for (var i = 0, o = s.length, r = new Array(o); i < o; i++) r[i] = s[i].fn;
                    return r
                }, d.prototype.listenerCount = function(e) {
                    var t = n ? n + e : e,
                        s = this._events[t];
                    return s ? s.fn ? 1 : s.length : 0
                }, d.prototype.emit = function(e, t, s, i, o, r) {
                    var a = n ? n + e : e;
                    if (!this._events[a]) return !1;
                    var c, d, l = this._events[a],
                        u = arguments.length;
                    if (l.fn) {
                        switch (l.once && this.removeListener(e, l.fn, void 0, !0), u) {
                            case 1:
                                return l.fn.call(l.context), !0;
                            case 2:
                                return l.fn.call(l.context, t), !0;
                            case 3:
                                return l.fn.call(l.context, t, s), !0;
                            case 4:
                                return l.fn.call(l.context, t, s, i), !0;
                            case 5:
                                return l.fn.call(l.context, t, s, i, o), !0;
                            case 6:
                                return l.fn.call(l.context, t, s, i, o, r), !0
                        }
                        for (d = 1, c = new Array(u - 1); d < u; d++) c[d - 1] = arguments[d];
                        l.fn.apply(l.context, c)
                    } else {
                        var h, f = l.length;
                        for (d = 0; d < f; d++) switch (l[d].once && this.removeListener(e, l[d].fn, void 0, !0), u) {
                            case 1:
                                l[d].fn.call(l[d].context);
                                break;
                            case 2:
                                l[d].fn.call(l[d].context, t);
                                break;
                            case 3:
                                l[d].fn.call(l[d].context, t, s);
                                break;
                            case 4:
                                l[d].fn.call(l[d].context, t, s, i);
                                break;
                            default:
                                if (!c)
                                    for (h = 1, c = new Array(u - 1); h < u; h++) c[h - 1] = arguments[h];
                                l[d].fn.apply(l[d].context, c)
                        }
                    }
                    return !0
                }, d.prototype.on = function(e, t, s) {
                    return a(this, e, t, s, !1)
                }, d.prototype.once = function(e, t, s) {
                    return a(this, e, t, s, !0)
                }, d.prototype.removeListener = function(e, t, s, i) {
                    var o = n ? n + e : e;
                    if (!this._events[o]) return this;
                    if (!t) return c(this, o), this;
                    var r = this._events[o];
                    if (r.fn) r.fn !== t || i && !r.once || s && r.context !== s || c(this, o);
                    else {
                        for (var a = 0, d = [], l = r.length; a < l; a++)(r[a].fn !== t || i && !r[a].once || s && r[a].context !== s) && d.push(r[a]);
                        d.length ? this._events[o] = 1 === d.length ? d[0] : d : c(this, o)
                    }
                    return this
                }, d.prototype.removeAllListeners = function(e) {
                    var t;
                    return e ? (t = n ? n + e : e, this._events[t] && c(this, t)) : (this._events = new o, this._eventsCount = 0), this
                }, d.prototype.off = d.prototype.removeListener, d.prototype.addListener = d.prototype.on, d.prefixed = n, d.EventEmitter = d, void 0 !== t && (t.exports = d)
            }, {}]
        }, {}, [1])(1)
    }, e.exports = n()
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.functionInvariant = void 0;
    var n = i(s(13));
    const o = e => (0, n.default)("function" == typeof e && null !== e, "Expected %s to be a function", e);
    t.functionInvariant = o
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.EVENT_NAMESPACE = void 0;
    const i = "HubSpotConversations";
    t.EVENT_NAMESPACE = i
}, function(e, t, s) {
    "use strict";
    var i = s(6),
        n = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.eventTypeInvariant = void 0;
    var o = n(s(13)),
        r = i(s(51));
    const a = Object.keys(r).map(e => r[e]),
        c = e => (0, o.default)(-1 !== a.indexOf(e), "Expected a valid event type but received %s. Valid event types include %s.", e, a);
    t.eventTypeInvariant = c
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.CONTACT_ASSOCIATED = t.INPUT_STAGING = t.UNREAD_CONVERSATION_COUNT_CHANGED = t.CONVERSATION_CLOSED = t.CONVERSATION_STARTED = void 0;
    const i = "conversationStarted";
    t.CONVERSATION_STARTED = i;
    const n = "conversationClosed";
    t.CONVERSATION_CLOSED = n;
    const o = "unreadConversationCountChanged";
    t.UNREAD_CONVERSATION_COUNT_CHANGED = o;
    const r = "inputStaging";
    t.INPUT_STAGING = r;
    const a = "contactAssociated";
    t.CONTACT_ASSOCIATED = a
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.handleExternalApiEventMessage = void 0;
    var i = s(14),
        n = s(12);
    const o = ({
        data: e
    }, {
        eventEmitter: t
    }) => {
        (0, n.stringInvariant)(e.eventType);
        (0, i.objectInvariant)(e.payload);
        t.trigger(e.eventType, e.payload)
    };
    t.handleExternalApiEventMessage = o
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.fetchWidgetData = f;
    t.EXPECTED_WIDGET_WILL_NOT_LOAD_CODES = t.WIDGET_WILL_LOAD_CODES = void 0;
    var i = s(28),
        n = s(54),
        o = s(55);
    const r = "X-HubSpot-Messages-Uri",
        a = 4,
        c = [200, 304];
    t.WIDGET_WILL_LOAD_CODES = c;
    const d = [204, 404];
    t.EXPECTED_WIDGET_WILL_NOT_LOAD_CODES = d;
    const l = e => c.indexOf(e) > -1,
        u = e => !l(e) && d.indexOf(e) < 0,
        h = () => {};

    function f({
        requestUrl: e,
        portalId: t
    }, s, c = h) {
        const d = new XMLHttpRequest;
        d.addEventListener("readystatechange", () => {
            if (d.readyState === a)
                if (l(d.status)) try {
                    const e = JSON.parse(d.responseText);
                    s(e)
                } catch (e) {
                    (0, n.warn)("Initial messages API response is invalid");
                    c()
                } else {
                    u(d.status) && (0, n.warn)("Initial messages API call failed");
                    c()
                }
        });
        d.open("GET", e);
        const f = "about:srcdoc" === window.location.href ? window.top.location.href : window.location.href;
        d.setRequestHeader(r, f);
        (0, i.isEmbeddedInProduct)({
            portalId: t
        }) && (0, o.addAuthToRequest)(d);
        d.send()
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.warn = i;

    function i(e) {
        window.console && console.warn(e)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.addAuthToRequest = t.addCsrfHeader = void 0;
    var i = s(19),
        n = s(21);
    const o = e => {
        e.setRequestHeader("X-HubSpot-CSRF-hubspotapi", (0, i.getCookie)(n.cookies.HUBSPOT_API_CSRF))
    };
    t.addCsrfHeader = o;
    const r = e => {
        o(e);
        e.withCredentials = !0
    };
    t.addAuthToRequest = r
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.triggerEvent = n;
    t.EVENTS = void 0;
    const i = "hubspot:messages:";

    function n(e, t) {
        let s;
        const n = `${i}${e}`;
        if ("function" == typeof window.Event) s = Object.assign(new Event(n), t);
        else {
            s = Object.assign(document.createEvent("Event"), t);
            s.initEvent(n, !0, !0)
        }
        window.dispatchEvent(s)
    }
    const o = {
        messagesInitialized: ({
            messageWillRender: e,
            reason: t
        }) => {
            n("initialized", {
                messageWillRender: e,
                reason: t
            })
        }
    };
    t.EVENTS = o
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.throttle = i;

    function i(e, t) {
        let s = !1,
            i = null;
        return (...n) => {
            if (s) i = () => {
                e(...n)
            };
            else {
                s = !0;
                e(...n);
                setTimeout(() => {
                    s = !1;
                    "function" == typeof i && i();
                    i = null
                }, t)
            }
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getIframeQueryParams = d;
    var i = s(19),
        n = s(4),
        o = s(28),
        r = s(59),
        a = s(33),
        c = s(35);

    function d({
        messagesUtk: e,
        hubspotUtk: t,
        portalId: s,
        iframeUuid: d,
        globalCookieOptOut: l,
        isFirstVisitorSession: u,
        hstc: h,
        isInCMS: f
    }) {
        const p = (0, n.isAnyMobile)(),
            g = (0, c.shouldEmbedInline)(),
            m = (0, a.shouldWidgetStartOpen)(),
            E = {
                uuid: d,
                mobile: p,
                mobileSafari: (0, n.isMobileSafari)(),
                hideWelcomeMessage: (0, r.shouldHideWelcomeMessage)(),
                hstc: h,
                domain: (0, i.getHostnameWithoutWww)(),
                inApp53: (0, o.isEmbeddedInProduct)({
                    portalId: s
                }),
                messagesUtk: e,
                url: encodeURIComponent(window.location.href),
                inline: g,
                isFullscreen: (0, c.shouldBeFullscreen)(),
                globalCookieOptOut: l,
                isFirstVisitorSession: u,
                isAttachmentDisabled: (0, c.shouldDisableAttachment)(),
                enableWidgetCookieBanner: (0, c.getEnableWidgetCookieBanner)(),
                isInCMS: f
            };
        void 0 !== m && (E.startOpen = m);
        t && (E.hubspotUtk = t);
        return E
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.shouldHideWelcomeMessage = o;
    var i = s(19),
        n = s(21);

    function o() {
        return !!(0, i.getCookie)(n.cookies.HIDE_WELCOME_MESSAGE) || !1
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    var i = s(61),
        n = s(62),
        o = s(63),
        r = s(64),
        a = s(9);
    class c {
        constructor({
            onScroll: e
        }) {
            this._onScroll = e;
            this._handleScroll = this._handleScroll.bind(this);
            this.add = this.add.bind(this);
            this.remove = this.remove.bind(this)
        }
        _handleScroll() {
            const e = (0, r.getPageHeight)() - (0, o.getViewportHeight)();
            if (0 === e) return;
            const t = 100 * (0, n.getBodyScrollTop)() / e;
            this._onScroll({
                scrollPercentage: t
            })
        }
        _add() {
            const e = !0;
            (0, i.passiveEventListenerSupported)() ? window.addEventListener("scroll", this._handleScroll, {
                capture: e,
                passive: !0
            }): window.addEventListener("scroll", this._handleScroll, e)
        }
        add() {
            this.remove();
            this._add()
        }
        remove() {
            const e = !0;
            (0, i.passiveEventListenerSupported)() ? window.removeEventListener("scroll", this._handleScroll, {
                capture: e,
                passive: !0
            }): window.removeEventListener("scroll", this._handleScroll, e)
        }
        registerPostMessageReceivers(e) {
            e.register(a.START_TRACK_SCROLL_PERCENTAGE, this.add);
            e.register(a.STOP_TRACK_SCROLL_PERCENTAGE, this.remove)
        }
    }
    var d = c;
    t.default = d;
    e.exports = t.default
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.passiveEventListenerSupported = void 0;
    const i = () => {
        let e = !1;
        try {
            const t = {
                get passive() {
                    e = !0
                }
            };
            window.addEventListener("test", t, t);
            window.removeEventListener("test", t, t)
        } catch (t) {
            e = !1
        }
        return e
    };
    t.passiveEventListenerSupported = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getBodyScrollTop = void 0;
    const i = () => document.body.scrollTop || document.documentElement.scrollTop;
    t.getBodyScrollTop = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getViewportHeight = void 0;
    const i = () => Math.max(window.innerHeight || 0, document.documentElement.clientHeight);
    t.getViewportHeight = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getPageHeight = void 0;
    const i = () => Math.max(document.body.offsetHeight, document.body.scrollHeight);
    t.getPageHeight = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    var i = s(9);
    class n {
        constructor({
            onExitIntent: e
        }) {
            this._onExitIntent = e;
            this._handleMouseOut = this._handleMouseOut.bind(this);
            this._isExitIntent = this._isExitIntent.bind(this);
            this.add = this.add.bind(this);
            this.remove = this.remove.bind(this)
        }
        _isExitIntent(e) {
            if (!e) return !1;
            const t = e.relatedTarget || e.toElement;
            return (!t || "HTML" === t.nodeName) && e.clientY < 100
        }
        _handleMouseOut(e) {
            this._isExitIntent(e) && this._onExitIntent()
        }
        _add() {
            window.document.addEventListener("mouseout", this._handleMouseOut)
        }
        add() {
            this.remove();
            this._add()
        }
        remove() {
            window.document.removeEventListener("mouseout", this._handleMouseOut)
        }
        addExitIntentTracker() {
            this.exitIntentTracker.add()
        }
        removeExitIntentTracker() {
            this.exitIntentTracker.remove()
        }
        registerPostMessageReceivers(e) {
            e.register(i.START_TRACK_EXIT_INTENT, this.add);
            e.register(i.STOP_TRACK_EXIT_INTENT, this.remove)
        }
    }
    var o = n;
    t.default = o;
    e.exports = t.default
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.markEndPostDelay = n;
    t.markEndPreDelay = o;
    var i = s(67);

    function n() {
        try {
            performance.mark(i.END_MARK_POST_DELAY)
        } catch (e) {}
    }

    function o() {
        try {
            performance.mark(i.END_MARK_PRE_DELAY)
        } catch (e) {}
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.EXECUTION_MEASUREMENT_PRE_DELAY = t.EXECUTION_MEASUREMENT_POST_DELAY = t.END_MARK_POST_DELAY = t.START_MARK_POST_DELAY = t.END_MARK_PRE_DELAY = t.START_MARK_PRE_DELAY = void 0;
    const i = "embed-script-start-pre-delay";
    t.START_MARK_PRE_DELAY = i;
    const n = "embed-script-end-pre-delay";
    t.END_MARK_PRE_DELAY = n;
    const o = "embed-script-start-post-delay";
    t.START_MARK_POST_DELAY = o;
    const r = "embed-script-end-post-delay";
    t.END_MARK_POST_DELAY = r;
    const a = "embed-script-load-time-post-delay";
    t.EXECUTION_MEASUREMENT_POST_DELAY = a;
    const c = "embed-script-load-time-pre-delay";
    t.EXECUTION_MEASUREMENT_PRE_DELAY = c
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setClassInClassList = void 0;
    var i = s(69),
        n = s(25);
    const o = {
            [i.LEFT_ALIGNED]: n.ALIGNED_LEFT_CLASS,
            [i.RIGHT_ALIGNED]: n.ALIGNED_RIGHT_CLASS
        },
        r = ({
            widgetLocation: e,
            classList: t
        }) => {
            const s = o[e];
            if (!t.contains(s)) {
                Object.keys(o).filter(t => t !== e).forEach(e => {
                    t.remove(e)
                });
                t.add(s)
            }
        };
    t.setClassInClassList = r
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.RIGHT_ALIGNED = t.LEFT_ALIGNED = void 0;
    const i = "LEFT_ALIGNED";
    t.LEFT_ALIGNED = i;
    const n = "RIGHT_ALIGNED";
    t.RIGHT_ALIGNED = n
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.WIDGET_LOCATION = void 0;
    const i = "widgetLocation";
    t.WIDGET_LOCATION = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.resetAndLaunchWidget = void 0;
    var i = s(22),
        n = s(1),
        o = s(72);
    const r = () => {
        (0, i.clearCookies)();
        window[o.USER_TOKEN_KEY] = "";
        window.hubspot_live_messages_running = !1;
        (0, n.startOnceReady)()
    };
    t.resetAndLaunchWidget = r
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.USER_TOKEN_KEY = void 0;
    const i = "__hsUserToken";
    t.USER_TOKEN_KEY = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.ApiUsageTracker = void 0;
    var i = s(10);
    class n {
        constructor({
            postMessageToIframe: e
        }) {
            if ("function" != typeof e) throw new TypeError("ApiUsageTracker: postMessageToIframe was not a function");
            this._postMessageToIframe = e;
            this.sendEventToTracker = this.sendEventToTracker.bind(this);
            this.trackSettingsUsed = this.trackSettingsUsed.bind(this);
            this.trackMethod = this.trackMethod.bind(this);
            this.trackEventListener = this.trackEventListener.bind(this);
            this.trackOnReady = this.trackOnReady.bind(this)
        }
        sendEventToTracker(e, t = {}) {
            this._postMessageToIframe(i.TRACK_API_USAGE, {
                eventName: e,
                properties: t
            })
        }
        trackSettingsUsed(e) {
            const t = {};
            !1 === e.loadImmediately && (t.loadImmediately = !0);
            e.inlineEmbedSelector && (t.inlineEmbedSelector = !0);
            e.enableWidgetCookieBanner && (t.enableWidgetCookieBanner = !0);
            e.disableAttachment && (t.disableAttachment = !0);
            Object.keys(t).length > 0 && this.sendEventToTracker("HubspotConversations-hsConversationsSettings-used", t)
        }
        trackMethod(e) {
            this.sendEventToTracker("HubspotConversations-api-method-used", {
                method: e
            })
        }
        trackEventListener(e) {
            this.sendEventToTracker("HubspotConversations-api-event-listener-registered", {
                event: e
            })
        }
        trackOnReady() {
            this.sendEventToTracker("HubspotConversations-hsConversationsOnReady-used", {
                method: "hsConversationsOnReady"
            })
        }
    }
    t.ApiUsageTracker = n
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.PostMessageApiClient = void 0;
    var i = s(75),
        n = s(10);
    class o {
        constructor(e) {
            this.makeApiRequest = ({
                data: e
            }) => {
                const {
                    type: t,
                    url: s,
                    data: o
                } = e, r = "/_hcms" + s;
                this.currentRequest && this.currentRequest.readyState !== i.DONE_STATE && this.abortCurrentApiRequest();
                this.currentRequest = (0, i.doRequest)(t)(r, o)((e, t) => {
                    t ? this.postMessage(n.API_REQUEST_RESULT, {
                        result: "failed",
                        data: t,
                        url: s
                    }) : this.postMessage(n.API_REQUEST_RESULT, {
                        result: "succeeded",
                        data: e,
                        url: s
                    })
                })
            };
            this.postMessage = e;
            this.currentRequest = null
        }
        abortCurrentApiRequest() {
            this.currentRequest.abort()
        }
    }
    t.PostMessageApiClient = o
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.put = t.post = t.get = t.doRequest = t.DONE_STATE = void 0;
    const i = 4;
    t.DONE_STATE = i;
    const n = e => e >= 300,
        o = e => (t, s) => o => {
            const r = new XMLHttpRequest;
            r.addEventListener("readystatechange", () => {
                if (r.readyState === i) try {
                    const e = JSON.parse(r.responseText);
                    n(r.status) ? o(null, e) : o(e)
                } catch (e) {
                    o(null, "Invalid api response")
                }
            });
            r.open(e, t);
            r.send(s);
            return r
        };
    t.doRequest = o;
    const r = o("GET");
    t.get = r;
    const a = o("POST");
    t.post = a;
    const c = o("PUT");
    t.put = c
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.sendWidgetDataToIframe = void 0;
    var i = s(77),
        n = s(78),
        o = s(36),
        r = s(58),
        a = s(10);
    const c = ({
        source: e,
        widgetData: t,
        embedScriptContext: s,
        apiUsageTracker: c
    }) => {
        e.postMessage(JSON.stringify({
            type: a.WIDGET_DATA,
            data: Object.assign({}, t, {}, (0, r.getIframeQueryParams)(s))
        }), "*");
        (0, i.getIsUngatedForDontThrottleInitialMessageInApp)(t) || (0, n.throttleInProductInitialMessagePopups)(s);
        c.trackSettingsUsed((0, o.getExternalApiSettings)())
    };
    t.sendWidgetDataToIframe = c
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getIsUngatedForDontThrottleInitialMessageInApp = void 0;
    const i = e => e && e.gates && e.gates["Conversations:Visitor:DontThrottleInitialMessageWhileInApp"];
    t.getIsUngatedForDontThrottleInitialMessageInApp = i
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.throttleInProductInitialMessagePopups = d;
    var n = s(19),
        o = s(21),
        r = i(s(20)),
        a = s(28),
        c = s(59);

    function d({
        portalId: e
    }) {
        (0, a.isEmbeddedInProduct)({
            portalId: e
        }) && !(0, c.shouldHideWelcomeMessage)() && (0, n.setCookie)(o.cookies.HIDE_WELCOME_MESSAGE, !0, r.default.ONE_DAY)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.registerCookieListeners = void 0;
    var i = s(10),
        n = s(21),
        o = s(23);
    const r = ({
        postMessageToIframe: e
    }) => {
        const t = t => {
            const s = t.categories ? t.categories.functionality : t.allowed,
                r = s ? n.cookieValues.GLOBAL_COOKIE_OPT_OUT_NO : n.cookieValues.GLOBAL_COOKIE_OPT_OUT_YES;
            e(i.GLOBAL_COOKIE_OPT_OUT, {
                globalCookieOptOut: r
            });
            s || (0, o.deleteCookie)(n.cookies.MESSAGES)
        };
        window._hsq = window._hsq || [];
        window._hsq.push(["addPrivacyConsentListener", t]);
        window._hsq.push(["addUserTokenListener", t => e(i.HUBSPOT_UTK, {
            utk: t
        })])
    };
    t.registerCookieListeners = r
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.registerHashChangeListener = void 0;
    var i = s(40);
    const n = ({
        requestWidgetOpen: e,
        isOpen: t
    }) => {
        window.addEventListener("hashchange", () => {
            (0, i.urlHasHsChatHashLink)(window.location.href) && !t && e()
        })
    };
    t.registerHashChangeListener = n
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.registerWindowResizeListener = void 0;
    const i = ({
        resizeCallbackFn: e
    }) => {
        window.addEventListener("resize", e, {
            passive: !0
        })
    };
    t.registerWindowResizeListener = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.iframeMessagePool = t.createQueue = void 0;
    var i = s(83),
        n = s(84),
        o = s(85);
    const r = () => {
        const e = [];
        return {
            enqueue: t => e.unshift(t),
            dequeue: () => e.shift(),
            peek: () => e[0]
        }
    };
    t.createQueue = r;
    const a = ({
        iframeSrc: e
    }) => {
        const t = r();
        return {
            post: (s, r = {}) => {
                const a = (0, i.getIframeFromDocumentQuery)();
                if (a) {
                    (0, n.postMessageToIframe)({
                        iframe: a,
                        iframeSrc: e,
                        type: s,
                        data: r
                    });
                    (0, o.executeAllIframeMessageQueueEvents)({
                        iframe: a,
                        iframeSrc: e,
                        eventQueue: t
                    })
                } else t.enqueue({
                    type: s,
                    data: r
                })
            }
        }
    };
    t.iframeMessagePool = a
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getIframeFromDocumentQuery = void 0;
    var i = s(35),
        n = s(42);
    const o = () => {
        const e = (0, i.shouldEmbedInline)() ? (0, i.getInlineEmbedSelector)() : "#" + n.PARENT_ID;
        return document.querySelector(e + " iframe")
    };
    t.getIframeFromDocumentQuery = o
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.postMessageToIframe = void 0;
    const i = ({
        iframe: e,
        iframeSrc: t,
        type: s,
        data: i
    }) => {
        e.contentWindow.postMessage(JSON.stringify({
            type: s,
            data: i
        }), t)
    };
    t.postMessageToIframe = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.executeAllIframeMessageQueueEvents = void 0;
    var i = s(84);
    const n = ({
        iframe: e,
        iframeSrc: t,
        eventQueue: s
    }) => {
        do {
            const n = s.dequeue();
            if (n) {
                const {
                    type: s,
                    data: o
                } = n;
                (0, i.postMessageToIframe)({
                    iframe: e,
                    iframeSrc: t,
                    type: s,
                    data: o
                })
            }
        } while (s.peek() && 0 !== Object.keys(s.peek()))
    };
    t.executeAllIframeMessageQueueEvents = n
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.hideWelcomeMessage = void 0;
    var n = s(21),
        o = s(19),
        r = i(s(20));
    const a = () => {
        (0, o.setCookie)(n.cookies.HIDE_WELCOME_MESSAGE, !0, r.default.THIRTY_MINUTES)
    };
    t.hideWelcomeMessage = a
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.resizeWidgetIframe = void 0;
    var i = s(42),
        n = s(4);
    const o = ({
        height: e,
        width: t,
        isOpen: s
    }) => {
        const o = document.getElementById(i.PARENT_ID);
        if ((0, n.isAnyMobile)() && s) {
            o.style.width = "100%";
            o.style.height = "100%"
        } else if (e && t) {
            o.style.width = t + "px";
            o.style.height = e + "px"
        }
    };
    t.resizeWidgetIframe = o
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.handleTargetingAndDelay = void 0;
    var i = s(4),
        n = s(18),
        o = s(26),
        r = s(89),
        a = s(56),
        c = s(66),
        d = s(90);
    const l = (e, t, s) => l => {
        const u = !((0, n.getWidgetDataResponseType)(l) === o.HIDE_WIDGET) && !!l.sessionId;
        if (u) {
            const {
                shouldDelayLoadingIframe: s,
                timeDelay: n
            } = (0, r.getDelayLoadingWidgetIframe)(l, (0, i.isAnyMobile)());
            (0, c.markEndPreDelay)();
            if (s) setTimeout(() => {
                e(l);
                (0, d.markStartPostDelay)();
                t()
            }, n);
            else {
                e(l);
                (0, d.markStartPostDelay)();
                t()
            }
        } else s();
        a.EVENTS.messagesInitialized({
            messageWillRender: u
        })
    };
    t.handleTargetingAndDelay = l
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getDelayLoadingWidgetIframe = void 0;
    const i = (e, t) => {
        const {
            message: s
        } = e, {
            popOpenWelcomeMessage: i,
            popOpenWidget: n,
            popMessageOnSmallScreens: o,
            clientTriggers: r
        } = s, {
            displayOnTimeDelay: a
        } = r, {
            enabled: c,
            timeDelaySeconds: d
        } = a, l = 1e3 * d;
        return t ? {
            shouldDelayLoadingIframe: !o && c,
            timeDelay: l
        } : {
            shouldDelayLoadingIframe: !n && !i && c,
            timeDelay: l
        }
    };
    t.getDelayLoadingWidgetIframe = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.markStartPreDelay = n;
    t.markStartPostDelay = o;
    var i = s(67);

    function n() {
        try {
            performance.mark(i.START_MARK_PRE_DELAY)
        } catch (e) {}
    }

    function o() {
        try {
            performance.mark(i.START_MARK_POST_DELAY)
        } catch (e) {}
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getGlobalCookieOptOut = o;
    var i = s(19),
        n = s(21);

    function o() {
        return (0, i.getCookie)(n.cookies.GLOBAL_COOKIE_OPT_OUT)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.ON_EXIT_INTENT = t.ON_WIDGET_LOAD = t.NEVER = void 0;
    const i = "NEVER";
    t.NEVER = i;
    const n = "ON_WIDGET_LOAD";
    t.ON_WIDGET_LOAD = n;
    const o = "ON_EXIT_INTENT";
    t.ON_EXIT_INTENT = o
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.loadWidgetCss = i;

    function i(e) {
        const t = s(94),
            i = e.createElement("style");
        i.setAttribute("type", "text/css");
        if (i.styleSheet) i.styleSheet.cssText = t;
        else {
            const e = document.createTextNode(t);
            i.appendChild(e)
        }
        const n = e.body.childNodes[0];
        e.body.insertBefore(i, n)
    }
}, function(e, t) {
    e.exports = 'html.hs-messages-widget-open.hs-messages-mobile,html.hs-messages-widget-open.hs-messages-mobile body{overflow:hidden!important;position:relative!important}html.hs-messages-widget-open.hs-messages-mobile body{height:100%!important;margin:0!important}#hubspot-messages-iframe-container{display:initial!important;z-index:2147483647;position:fixed!important;bottom:0!important}#hubspot-messages-iframe-container.widget-align-left{left:0!important}#hubspot-messages-iframe-container.widget-align-right{right:0!important}#hubspot-messages-iframe-container.internal{z-index:1016}#hubspot-messages-iframe-container.internal iframe{min-width:108px}#hubspot-messages-iframe-container .shadow-container{display:initial!important;z-index:-1;position:absolute;width:0;height:0;bottom:0;content:""}#hubspot-messages-iframe-container .shadow-container.internal{display:none!important}#hubspot-messages-iframe-container .shadow-container.active{width:400px;height:400px}#hubspot-messages-iframe-container iframe{display:initial!important;width:100%!important;height:100%!important;border:none!important;position:absolute!important;bottom:0!important;right:0!important;background:transparent!important}'
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createEmbedScriptContext = d;
    var n = s(96),
        o = s(97),
        r = s(104),
        a = i(s(105)),
        c = s(35);

    function d() {
        const {
            messagesEnv: e,
            portalId: t,
            messagesHublet: s
        } = (0, r.getScriptEnvParams)();
        let i = !1;
        try {
            i = localStorage && "true" === localStorage["live-chat-local-toggle"]
        } catch (e) {}
        const d = "undefined" != typeof messagesConfig && messagesConfig.iFrameDomain,
            l = (0, n.getUuid)(),
            u = encodeURIComponent(document.referrer),
            {
                messagesUtk: h,
                hubspotUtk: f,
                hstc: p,
                hssc: g,
                globalCookieOptOut: m,
                isFirstVisitorSession: E
            } = (0, o.prepareVisitorIdentifiers)();
        return new a.default({
            messagesHublet: s,
            globalCookieOptOut: m,
            hubspotUtk: f,
            hstc: p,
            hssc: g,
            iFrameDomainOverride: d,
            iframeUuid: l,
            isFirstVisitorSession: E,
            messagesEnv: e,
            messagesUtk: h,
            referrer: u,
            portalId: t,
            useLocalBuild: i,
            identificationEmail: (0, c.getIdentificationEmail)(),
            identificationToken: (0, c.getIdentificationToken)()
        })
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getUuid = o;

    function i() {
        let e = (new Date).getTime();
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, t => {
            const s = (e + 16 * Math.random()) % 16 | 0;
            e = Math.floor(e / 16);
            return ("x" === t ? s : 3 & s | 8).toString(16)
        })
    }

    function n() {
        const e = window.crypto || window.msCrypto,
            t = new Uint16Array(8);
        e.getRandomValues(t);
        const s = e => {
            let t = e.toString(16);
            for (; t.length < 4;) t = "0" + t;
            return t
        };
        return s(t[0]) + s(t[1]) + s(t[2]) + s(t[3]) + s(t[4]) + s(t[5]) + s(t[6]) + s(t[7])
    }

    function o() {
        const e = window.crypto || window.msCrypto;
        return void 0 !== e && void 0 !== e.getRandomValues && void 0 === window.Uint16Array ? n() : i()
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.prepareVisitorIdentifiers = void 0;
    var i = s(98),
        n = s(99),
        o = s(101),
        r = s(91),
        a = s(102),
        c = s(103),
        d = s(27);
    const l = () => {
        const e = (0, n.getMessagesUtkFromCookie)();
        e && (0, d.setMessagesUtk)(e);
        const t = (0, o.getHubSpotUtkFromCookie)(),
            s = (0, a.getHstcFromCookie)(),
            l = (0, c.getHsscFromCookie)(),
            u = (0, r.getGlobalCookieOptOut)(),
            {
                messagesUtk: h,
                isFirstVisitorSession: f
            } = (0, i.chooseMessagesUtk)({
                existingMessagesUtk: e
            });
        return {
            messagesUtk: h,
            hubspotUtk: t,
            hstc: s,
            hssc: l,
            globalCookieOptOut: u,
            isFirstVisitorSession: f
        }
    };
    t.prepareVisitorIdentifiers = l
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.chooseMessagesUtk = n;
    var i = s(96);

    function n({
        existingMessagesUtk: e
    } = {}) {
        let t, s = !1;
        if (e) t = e;
        else {
            s = !0;
            t = (0, i.getUuid)()
        }
        return {
            messagesUtk: t,
            isFirstVisitorSession: s
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getMessagesUtkFromCookie = r;
    var i = s(19),
        n = s(100),
        o = s(21);

    function r() {
        const e = (0, i.getCookie)(o.cookies.MESSAGES);
        return (0, n.isUtk)(e) ? e : void 0
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.isUtk = n;
    t.UTK_REGEX = void 0;
    const i = /[a-zA-Z\d]{32}/;
    t.UTK_REGEX = i;

    function n(e) {
        return i.test(e)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getHubSpotUtkFromCookie = o;
    var i = s(21),
        n = s(19);

    function o() {
        return (0, n.getCookie)(i.cookies.HUBSPOT)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getHstcFromCookie = o;
    var i = s(21),
        n = s(19);

    function o() {
        return (0, n.getCookie)(i.cookies.HSTC)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getHsscFromCookie = o;
    var i = s(21),
        n = s(19);

    function o() {
        return (0, n.getCookie)(i.cookies.HSSC)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getScriptEnvParams = a;
    t.getIsLocal = t.getMessagesHublet = t.getMessagesEnv = t.getPortalId = void 0;
    const i = () => {
        const e = document.getElementById("hubspot-messages-loader");
        return parseInt(e.getAttribute("data-hsjs-portal"), 10)
    };
    t.getPortalId = i;
    const n = () => document.getElementById("hubspot-messages-loader").getAttribute("data-hsjs-env");
    t.getMessagesEnv = n;
    const o = () => document.getElementById("hubspot-messages-loader").getAttribute("data-hsjs-hublet");
    t.getMessagesHublet = o;
    const r = () => "true" === document.getElementById("hubspot-messages-loader").getAttribute("data-hsjs-local");
    t.getIsLocal = r;

    function a() {
        return {
            ungatedFor: document.getElementById("hubspot-messages-loader").getAttribute("ungated-for"),
            portalId: i(),
            messagesEnv: n(),
            messagesHublet: o(),
            isLocal: r()
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    var i = s(106),
        n = s(12),
        o = s(28),
        r = s(107),
        a = s(110),
        c = s(58),
        d = s(111),
        l = s(112),
        u = s(35);
    class h {
        constructor(e) {
            const {
                globalCookieOptOut: t,
                hubspotUtk: s,
                hstc: o,
                hssc: r,
                iFrameDomainOverride: a,
                iframeUuid: c,
                isFirstVisitorSession: d,
                messagesEnv: l,
                messagesUtk: u,
                referrer: h,
                portalId: f,
                useLocalBuild: p,
                identificationEmail: g,
                identificationToken: m,
                messagesHublet: E
            } = e;
            (0, n.stringInvariant)(c, "iframeUuid");
            (0, n.stringInvariant)(l, "messagesEnv");
            (0, n.stringInvariant)(u, "messagesUtk");
            (0, i.numberInvariant)(f, "portalId");
            this.globalCookieOptOut = t;
            this.hubspotUtk = s;
            this.hstc = o;
            this.hssc = r;
            this.iFrameDomainOverride = a;
            this.iframeUuid = c;
            this.isFirstVisitorSession = d;
            this.messagesEnv = l;
            this.messagesUtk = u;
            this.referrer = h;
            this.portalId = f;
            this.useLocalBuild = p;
            this.identificationEmail = g;
            this.identificationToken = m;
            this.messagesHublet = E;
            this.getIFrameDomain = this.getIFrameDomain.bind(this);
            this.getIFrameSrc = this.getIFrameSrc.bind(this);
            this.getInitialRequestUrl = this.getInitialRequestUrl.bind(this)
        }
        getIFrameDomain() {
            const e = "qa" === this.messagesEnv ? "qa" : "",
                t = "na1" !== this.messagesHublet && this.messagesHublet ? "-" + this.messagesHublet : "";
            return this.iFrameDomainOverride ? this.iFrameDomainOverride : this.useLocalBuild ? `https://local${t}.hubspot${e}.com` : `https://app${t}.hubspot${e}.com`
        }
        getIFrameSrc() {
            const e = (0, a.serializeQueryParameters)((0, c.getIframeQueryParams)({
                messagesUtk: this.messagesUtk,
                hubspotUtk: this.hubspotUtk,
                portalId: this.portalId,
                iframeUuid: this.iframeUuid,
                globalCookieOptOut: this.globalCookieOptOut,
                isFirstVisitorSession: this.isFirstVisitorSession,
                hstc: this.hstc,
                isInCMS: (0, d.isInCMS)()
            }));
            return `${this.getIFrameDomain()}/conversations-visitor/${this.portalId}/threads/utk/${this.messagesUtk}?${e}`
        }
        getEncodedIdentificationEmail() {
            let e = this.identificationEmail;
            e.includes("@") || (e = decodeURIComponent(e));
            return encodeURIComponent(e)
        }
        getInitialRequestUrl() {
            return (0, d.isInCMS)() ? (0, r.getCMSRequestUrl)({
                messagesEnv: this.messagesEnv,
                messagesUtk: this.messagesUtk,
                hubspotUtk: this.hubspotUtk,
                portalId: this.portalId,
                referrer: this.referrer,
                hstc: this.hstc,
                hssc: this.hssc,
                email: this.identificationEmail && this.getEncodedIdentificationEmail(),
                identificationToken: this.identificationToken
            }) : (0, o.isEmbeddedInProduct)({
                portalId: this.portalId
            }) ? (0, r.getInternalRequestUrl)({
                messagesHublet: this.messagesHublet,
                messagesEnv: this.messagesEnv,
                messagesUtk: this.messagesUtk,
                portalId: this.portalId
            }) : (0, r.getPublicRequestUrl)({
                messagesHublet: this.messagesHublet,
                messagesEnv: this.messagesEnv,
                messagesUtk: this.messagesUtk,
                hubspotUtk: this.hubspotUtk,
                portalId: this.portalId,
                referrer: this.referrer,
                hstc: this.hstc,
                hssc: this.hssc,
                email: this.identificationEmail && this.getEncodedIdentificationEmail(),
                identificationToken: this.identificationToken
            })
        }
        getPerfAttributes() {
            const e = (0, l.getPerfAttributes)({
                portalId: this.portalId,
                messagesEnv: this.messagesEnv
            });
            if ((0, u.shouldLoadImmediately)() && e) return e
        }
    }
    var f = h;
    t.default = f;
    e.exports = t.default
}, function(e, t, s) {
    "use strict";
    var i = s(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.numberInvariant = void 0;
    var n = i(s(13));
    const o = (e, t = "") => (0, n.default)("number" == typeof e, "Expected %s to be a number, not a %s", t || e, typeof e);
    t.numberInvariant = o
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getInternalRequestUrl = a;
    t.getCMSRequestUrl = d;
    t.getPublicRequestUrl = l;
    var i = s(108),
        n = s(109),
        o = s(30),
        r = s(4);

    function a({
        messagesEnv: e,
        portalId: t,
        messagesUtk: s,
        messagesHublet: i
    }) {
        const a = (0, o.getPortalIdFromPath)(window.location.pathname);
        return `${(0,n.getApiDomain)(e,i)}/livechat/v1/message/public/hubspot-app?portalId=${a}&mobile=${(0,r.isAnyMobile)()}&embeddedPortalId=${t}&traceId=${s}`
    }

    function c({
        messagesUtk: e,
        hubspotUtk: t,
        portalId: s,
        referrer: n,
        hstc: o,
        hssc: a,
        email: c,
        identificationToken: d
    }) {
        let l = `?portalId=${s}&${i.bender.project}=${i.bender.depVersions[i.bender.project]}&mobile=${(0,r.isAnyMobile)()}`;
        e && (l = `${l}&messagesUtk=${e}&traceId=${e}`);
        t && (l = `${l}&hubspotUtk=${t}`);
        o && (l = `${l}&__hstc=${o}`);
        a && (l = `${l}&__hssc=${a}`);
        n && (l = `${l}&referrer=${n}`);
        d && (l = `${l}&identificationToken=${d}`);
        c && (l = `${l}&email=${c}`);
        return l
    }

    function d({
        messagesUtk: e,
        hubspotUtk: t,
        portalId: s,
        referrer: i,
        hstc: n,
        hssc: o,
        email: r,
        identificationToken: a
    }) {
        return "/_hcms/livechat/widget" + c({
            messagesUtk: e,
            hubspotUtk: t,
            portalId: s,
            referrer: i,
            hstc: n,
            hssc: o,
            email: r,
            identificationToken: a
        })
    }

    function l({
        messagesHublet: e,
        messagesEnv: t,
        messagesUtk: s,
        hubspotUtk: i,
        portalId: o,
        referrer: r,
        hstc: a,
        hssc: d,
        email: l,
        identificationToken: u
    }) {
        return `${(0,n.getApiDomain)(t,e)}/livechat-public/v1/message/public${c({messagesUtk:s,hubspotUtk:i,portalId:o,referrer:r,hstc:a,hssc:d,email:l,identificationToken:u})}`
    }
}, function(e, t) {
    e.exports = {
        mode: "compressed",
        staticDomainPrefix: "//static.hsappstatic.net",
        bender: {
            depVersions: {
                "conversations-embed": "static-1.11084",
                isMobile: "static-1.4",
                StyleGuideUI: "static-3.274",
                "conversations-internal-schema": "static-1.7840",
                "head-dlb": "static-1.234",
                jasmine: "static-3.110",
                "jasmine-runner": "static-1.96",
                quartz: "static-1.60",
                react: "static-7.90",
                "react-dom": "static-7.59",
                sinon: "static-1.6",
                enviro: "static-4.62",
                "hs-promise-rejection-tracking": "static-1.72",
                PortalIdParser: "static-2.56",
                raven: "static-3.19",
                "raven-hubspot": "static-1.165"
            },
            depPathPrefixes: {
                "conversations-embed": "/conversations-embed/static-1.11084",
                isMobile: "/isMobile/static-1.4",
                StyleGuideUI: "/StyleGuideUI/static-3.274",
                "conversations-internal-schema": "/conversations-internal-schema/static-1.7840",
                "head-dlb": "/head-dlb/static-1.234",
                jasmine: "/jasmine/static-3.110",
                "jasmine-runner": "/jasmine-runner/static-1.96",
                quartz: "/quartz/static-1.60",
                react: "/react/static-7.90",
                "react-dom": "/react-dom/static-7.59",
                sinon: "/sinon/static-1.6",
                enviro: "/enviro/static-4.62",
                "hs-promise-rejection-tracking": "/hs-promise-rejection-tracking/static-1.72",
                PortalIdParser: "/PortalIdParser/static-2.56",
                raven: "/raven/static-3.19",
                "raven-hubspot": "/raven-hubspot/static-1.165"
            },
            project: "conversations-embed",
            staticDomain: "//static.hsappstatic.net",
            staticDomainPrefix: "//static.hsappstatic.net"
        }
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getApiDomain = i;

    function i(e, t) {
        return `https://api${"na1"!==t&&t?"-"+t:""}.hubspot${"qa"===e?"qa":""}.com`
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.serializeQueryParameters = i;

    function i(e) {
        return Object.keys(e).reduce((t, s) => {
            t.push(`${s}=${e[s]}`);
            return t
        }, []).join("&")
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.isInCMS = void 0;
    const i = () => void 0 !== window.hsVars;
    t.isInCMS = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getPerfAttributes = a;
    var i = s(67),
        n = s(113),
        o = s(114),
        r = s(115);

    function a({
        portalId: e,
        messagesEnv: t
    }) {
        const s = "qa" === t ? "qa" : "",
            a = (0, r.buildNonCmsScriptLoaderPath)({
                env: s,
                portalId: e
            }),
            c = (0, n.buildCmsScriptLoaderSrc)({
                portalId: e
            }),
            d = (0, o.buildCmsScriptLoaderPath)({
                portalId: e
            }),
            l = `https://js.usemessages${s}.com/conversations-embed.js`,
            u = Boolean(document.querySelector(`script[src="${c}"]`));
        try {
            performance.measure(i.EXECUTION_MEASUREMENT_PRE_DELAY, i.START_MARK_PRE_DELAY, i.END_MARK_PRE_DELAY);
            performance.measure(i.EXECUTION_MEASUREMENT_POST_DELAY, i.START_MARK_POST_DELAY, i.END_MARK_POST_DELAY);
            const e = performance.getEntriesByName(i.EXECUTION_MEASUREMENT_PRE_DELAY)[0],
                t = performance.getEntriesByName(i.EXECUTION_MEASUREMENT_POST_DELAY)[0],
                s = e.duration + t.duration,
                n = performance.getEntriesByName(a)[0],
                o = performance.getEntriesByName(d)[0],
                r = (u ? o : n).duration,
                c = performance.getEntriesByName(l)[0].duration;
            if (s && r && c) return {
                iframeLoadTime: s,
                scriptLoaderScriptTime: r,
                embedScriptTime: c
            }
        } catch (e) {}
        return null
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.buildCmsScriptLoaderSrc = void 0;
    const i = ({
        portalId: e
    }) => `/hs/scriptloader/${e}.js`;
    t.buildCmsScriptLoaderSrc = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.buildCmsScriptLoaderPath = void 0;
    var i = s(113);
    const n = ({
        portalId: e
    }) => {
        const t = (0, i.buildCmsScriptLoaderSrc)({
            portalId: e
        });
        return `${document.location.origin}${t}`
    };
    t.buildCmsScriptLoaderPath = n
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.buildNonCmsScriptLoaderPath = void 0;
    const i = ({
        env: e = "",
        portalId: t
    }) => `${document.location.protocol}//js.hs-scripts${e}.com/${t}.js`;
    t.buildNonCmsScriptLoaderPath = i
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.hasRequiredFeatures = i;

    function i(e) {
        return ["function" == typeof e.WeakMap, "function" == typeof e.requestAnimationFrame].every(e => !0 === e)
    }
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.ErrorLogger = void 0;
    var i = s(54),
        n = s(118),
        o = s(104);
    const r = "https://exceptions.hubspot.com/api/1/store/?sentry_key=7ab6425e7a7c4b01b71fdb51e76514bf&sentry_version=7",
        a = 4;

    function c() {
        return Date.now() / 1e3
    }

    function d() {
        const e = window.crypto || window.msCrypto;
        if (void 0 !== typeof e && e.getRandomValues) {
            const t = new Uint16Array(8);
            e.getRandomValues(t);
            t[3] = 4095 & t[3] | 16384;
            t[4] = 16383 & t[4] | 32768;
            const s = function(e) {
                let t = e.toString(16);
                for (; t.length < 4;) t = "0" + t;
                return t
            };
            return s(t[0]) + s(t[1]) + s(t[2]) + s(t[3]) + s(t[4]) + s(t[5]) + s(t[6]) + s(t[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, e => {
            const t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }

    function l(e) {
        const t = new XMLHttpRequest;
        t.addEventListener("readystatechange", () => {
            t.readyState === a && t.status >= 300 && (0, i.warn)("Failed logging HSConversations error")
        });
        t.open("POST", r);
        t.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        t.send(JSON.stringify(e))
    }
    class u {
        constructor() {
            this.config = {
                environment: (0, o.getMessagesEnv)(),
                tags: {
                    portalId: (0, o.getPortalId)(),
                    env: (0, o.getMessagesEnv)()
                },
                logger: "javascript",
                platform: "javascript",
                request: {
                    headers: {
                        "User-Agent": navigator.userAgent
                    },
                    url: window.location.href
                }
            };
            this.logError = this.logError.bind(this)
        }
        logError(e) {
            const t = c();
            l(Object.assign({}, this.config, {
                event_id: d(),
                transaction: "conversations embed error",
                level: "error",
                exception: {
                    values: [{
                        mechanism: {
                            handled: !0,
                            type: "generic"
                        },
                        type: e,
                        value: e
                    }]
                },
                timestamp: t
            }))
        }
        captureErrors(e) {
            try {
                e()
            } catch (e) {
                const t = c();
                if ("Aborting: redirection in progress" !== e.message) {
                    const s = (0, n.computeStackTrace)(e);
                    l(Object.assign({}, this.config, {
                        event_id: d(),
                        transaction: s.stack[0].filename,
                        level: "error",
                        exception: {
                            values: [{
                                mechanism: {
                                    handled: !0,
                                    type: "generic"
                                },
                                type: s.name,
                                value: s.message,
                                stacktrace: {
                                    frames: s.stack.reverse()
                                }
                            }]
                        },
                        timestamp: t
                    }))
                }
                throw e
            }
        }
    }
    t.ErrorLogger = u
}, function(e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.computeStackTrace = d;
    const i = "?";

    function n() {
        return "undefined" == typeof document || null == document.location ? "" : document.location.href
    }

    function o() {
        return "undefined" == typeof document || null == document.location ? "" : document.location.origin ? document.location.origin : `${document.location.protocol}//${document.location.hostname}${document.location.port?":"+document.location.port:""}`
    }

    function r(e) {
        if (void 0 === e.stack || !e.stack) return null;
        const t = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            r = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
            a = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
            c = /\((\S*)(?::(\d+))(?::(\d+))\)/,
            d = e.stack.split("\n"),
            l = [];
        let u, h, f;
        for (let n = 0, p = d.length; n < p; ++n) {
            if (h = t.exec(d[n])) {
                const e = h[2] && 0 === h[2].indexOf("native");
                if (h[2] && 0 === h[2].indexOf("eval") && (u = c.exec(h[2]))) {
                    h[2] = u[1];
                    h[3] = u[2];
                    h[4] = u[3]
                }
                f = {
                    filename: e ? null : h[2],
                    function: h[1] || i,
                    args: e ? [h[2]] : [],
                    lineno: h[3] ? +h[3] : null,
                    colno: h[4] ? +h[4] : null
                }
            } else if (h = s.exec(d[n])) f = {
                filename: h[2],
                function: h[1] || i,
                args: [],
                lineno: +h[3],
                colno: h[4] ? +h[4] : null
            };
            else {
                if (!(h = r.exec(d[n]))) continue;
                if (h[3] && h[3].indexOf(" > eval") > -1 && (u = a.exec(h[3]))) {
                    h[3] = u[1];
                    h[4] = u[2];
                    h[5] = null
                } else 0 !== n || h[5] || void 0 === e.columnNumber || (l[0].column = e.columnNumber + 1);
                f = {
                    filename: h[3],
                    function: h[1] || i,
                    args: h[2] ? h[2].split(",") : [],
                    lineno: h[4] ? +h[4] : null,
                    colno: h[5] ? +h[5] : null
                }
            }!f.function && f.line && (f.function = i);
            if (f.filename && "blob:" === f.filename.substr(0, 5)) {
                const e = new XMLHttpRequest;
                e.open("GET", f.filename, !1);
                e.send(null);
                if (200 === e.status) {
                    let t = e.responseText || "";
                    t = t.slice(-300);
                    const s = t.match(/\/\/# sourceMappingURL=(.*)$/);
                    if (s) {
                        let e = s[1];
                        "~" === e.charAt(0) && (e = o() + e.slice(1));
                        f.url = e.slice(0, -4)
                    }
                }
            }
            l.push(f)
        }
        return l.length ? {
            name: e.name,
            message: e.message,
            url: n(),
            stack: l
        } : null
    }

    function a(e, t, s) {
        const n = {
            filename: t,
            lineno: s
        };
        if (n.filename && n.lineno) {
            e.incomplete = !1;
            n.function || (n.function = i);
            if (e.stack.length > 0 && e.stack[0].filename === n.filename) {
                if (e.stack[0].lineno === n.lineno) return !1;
                if (!e.stack[0].lineno && e.stack[0].function === n.function) {
                    e.stack[0].lineno = n.lineno;
                    return !1
                }
            }
            e.stack.unshift(n);
            e.partial = !0;
            return !0
        }
        e.incomplete = !0;
        return !1
    }

    function c(e, t) {
        const s = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
            o = [],
            r = {};
        let l, u, h = !1;
        for (let e = c.caller; e && !h; e = e.caller)
            if (e !== d) {
                u = {
                    filename: null,
                    function: i,
                    lineno: null,
                    colno: null
                };
                e.name ? u.function = e.name : (l = s.exec(e.toString())) && (u.function = l[1]);
                if (void 0 === u.function) try {
                    u.function = l.input.substring(0, l.input.indexOf("{"))
                } catch (e) {}
                r["" + e] ? h = !0 : r["" + e] = !0;
                o.push(u)
            }
        t && o.splice(0, t);
        const f = {
            name: e.name,
            message: e.message,
            filename: n(),
            stack: o
        };
        a(f, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description);
        return f
    }

    function d(e, t) {
        let s = null;
        t = null == t ? 0 : +t;
        try {
            s = r(e);
            if (s) return s
        } catch (e) {}
        try {
            s = c(e, t + 1);
            if (s) return s
        } catch (e) {}
        return {
            name: e.name,
            message: e.message,
            filename: n()
        }
    }
}]);
//# sourceMappingURL=project.js.map