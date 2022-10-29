window[window["TiktokAnalyticsObject"]]._env = {
    "env": "external"
};
window[window["TiktokAnalyticsObject"]]._variation_id = 'test_1';
window[window["TiktokAnalyticsObject"]]._plugins = {
    "AdvancedMatching": true,
    "AutoAdvancedMatching": true,
    "Callback": true,
    "Identify": true,
    "Monitor": false,
    "PerformanceInteraction": false,
    "Shopify": true,
    "WebFL": false
};
! function() {
    function i() {
        return window && window.TiktokAnalyticsObject || "ttq"
    }

    function n() {
        return window && window[i()]
    }
    var t, o, e, a, c, d = [{
            id: "Mi4wLjAuNjBfMA",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !1,
                Monitor: !1
            }
        }, {
            id: "Mi4wLjAuNjBfMQ",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !1,
                Monitor: !1
            }
        }, {
            id: "Mi4wLjAuNjBfMg",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !0,
                Monitor: !1
            }
        }, {
            id: "Mi4wLjAuNjBfMw",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !0,
                Monitor: !1
            }
        }, {
            id: "Mi4wLjAuNjBfNA",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !1,
                Monitor: !0
            }
        }, {
            id: "Mi4wLjAuNjBfNQ",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !1,
                Monitor: !0
            }
        }, {
            id: "Mi4wLjAuNjBfNg",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !0,
                Monitor: !0
            }
        }, {
            id: "Mi4wLjAuNjBfNw",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !0,
                Monitor: !0
            }
        }],
        r = {
            "info": {
                "pixelCode": "C56905G00UN7QUNFPNI0",
                "name": "Urban Sports DE",
                "status": 0,
                "setupMode": 0,
                "partner": "",
                "advertiserID": "6989743241524477953",
                "is_onsite": false,
                "firstPartyCookieEnabled": true
            },
            "plugins": {
                "Shopify": false,
                "AdvancedMatching": {
                    "email": true,
                    "phone_number": true
                },
                "AutoAdvancedMatching": {
                    "auto_email": true,
                    "auto_phone_number": true
                },
                "Callback": true,
                "Identify": true,
                "Monitor": true,
                "PerformanceInteraction": true,
                "WebFL": true
            },
            "rules": [{
                "code_id": 7014056953471188994,
                "pixel_event_id": 7014056953471188994,
                "trigger_type": "PAGEVIEW",
                "conditions": [{
                    "variable_type": "PAGE_URL",
                    "operator": "CONTAINS",
                    "value": "/payment"
                }],
                "code": "\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"C56905G00UN7QUNFPNI0\").track(\"AddPaymentInfo\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"
            }, {
                "code_id": 7014057094160580609,
                "pixel_event_id": 7014057094160580609,
                "trigger_type": "CLICK",
                "conditions": [{
                    "variable_type": "ELEMENT",
                    "operator": "EQUALS",
                    "value": "#intro \u003e :nth-child(1) \u003e :nth-child(1) \u003e :nth-child(2) \u003e :nth-child(3)"
                }],
                "code": "\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"C56905G00UN7QUNFPNI0\").track(\"InitiateCheckout\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"
            }, {
                "code_id": 7019209550783905793,
                "pixel_event_id": 7019209550783905793,
                "trigger_type": "PAGEVIEW",
                "conditions": [{
                    "variable_type": "PAGE_URL",
                    "operator": "CONTAINS",
                    "value": "/activities?city"
                }],
                "code": "\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"C56905G00UN7QUNFPNI0\").track(\"CompletePayment\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"
            }, {
                "code_id": 7075804712385134594,
                "pixel_event_id": 7075804712385134594,
                "trigger_type": "PAGEVIEW",
                "conditions": [{
                    "variable_type": "PAGE_URL",
                    "operator": "CONTAINS",
                    "value": "checkout/phone"
                }],
                "code": "\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"C56905G00UN7QUNFPNI0\").track(\"Contact\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"
            }, {
                "code_id": 7075807575232626689,
                "pixel_event_id": 7075807575232626689,
                "trigger_type": "CLICK",
                "conditions": [{
                    "variable_type": "ELEMENT",
                    "operator": "EQUALS",
                    "value": "body \u003e :nth-child(2) \u003e :nth-child(2) \u003e :nth-child(1) \u003e div \u003e a"
                }, {
                    "variable_type": "ELEMENT",
                    "operator": "EQUALS",
                    "value": "#cta \u003e :nth-child(1) \u003e :nth-child(1) \u003e div \u003e a"
                }, {
                    "variable_type": "ELEMENT",
                    "operator": "EQUALS",
                    "value": "#w-node-_9ac7a6ac-c4c0-51ed-bc8c-b421aa8c60b4-9dcb1f86 \u003e :nth-child(2) \u003e a"
                }, {
                    "variable_type": "ELEMENT",
                    "operator": "EQUALS",
                    "value": "#sports-offer \u003e :nth-child(1) \u003e :nth-child(1) \u003e :nth-child(2) \u003e :nth-child(1) \u003e :nth-child(3)"
                }],
                "code": "\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"C56905G00UN7QUNFPNI0\").track(\"ClickButton\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"
            }, {
                "code_id": 7011146376469807106,
                "pixel_event_id": 7011146376469807106,
                "trigger_type": "PAGEVIEW",
                "conditions": [{
                    "variable_type": "PAGE_URL",
                    "operator": "CONTAINS",
                    "value": "urbansportsclub.com"
                }],
                "code": "\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"C56905G00UN7QUNFPNI0\").track(\"ViewContent\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"
            }, {
                "code_id": 7014056953471172610,
                "pixel_event_id": 7014056953471172610,
                "trigger_type": "PAGEVIEW",
                "conditions": [{
                    "variable_type": "PAGE_URL",
                    "operator": "CONTAINS",
                    "value": "/register"
                }],
                "code": "\n\u003cscript\u003e\nwindow[window.TiktokAnalyticsObject].instance(\"C56905G00UN7QUNFPNI0\").track(\"CompleteRegistration\",{\"pixelMethod\":\"standard\"});\n\u003c/script\u003e\n"
            }]
        },
        u = "https://analytics.tiktok.com/i18n/pixel/static/",
        f = n();
    f || (f = [], window && (window[i()] = f)), Object.assign(r, {
            options: (t = r.info.pixelCode, (o = n()._o) && o[t] || {})
        }),
        function(i) {
            f._i || (f._i = {});
            var n = i.info.pixelCode;
            f._i[n] || (f._i[n] = []), Object.assign(f._i[n], i)
        }(r), e = function(i, n, t) {
            var o = 0 < arguments.length && void 0 !== i ? i : {},
                e = 1 < arguments.length ? n : void 0,
                n = 2 < arguments.length ? t : void 0,
                t = function(i, n) {
                    for (var t = 0; t < i.length; t++)
                        if (n.call(null, i[t], t)) return i[t]
                }(d, function(i) {
                    var n = i.map;
                    return function(i, n) {
                        for (var t = 0; t < i.length; t++)
                            if (!n.call(null, i[t], t)) return !1;
                        return !0
                    }(Object.keys(n), function(i) {
                        return !(!o[i] || !e[i]) === n[i]
                    })
                });
            return t ? n + "main.".concat(t.id, ".js") : n + "main.".concat(d[0].id, ".js")
        }(f._plugins, r.plugins, u), a = r.info.pixelCode, (c = document.createElement("script")).type = "text/javascript", c.async = !0, c.src = e, c.setAttribute("data-id", a), (a = document.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
}();