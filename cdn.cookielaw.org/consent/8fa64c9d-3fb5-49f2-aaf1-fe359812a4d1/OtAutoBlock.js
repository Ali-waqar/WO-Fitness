! function() {
    function h(b) {
        for (var k, a, e, d, c = [], f = 0; f < q.length; f++) {
            var n = q[f];
            if (n.Tag === b) {
                c = n.CategoryId;
                break
            }
            var g = (k = n.Tag, d = e = a = void 0, a = -1 !== (d = k).indexOf("http:") ? d.replace("http:", "") : d.replace("https:", ""), -1 !== (e = a.indexOf("?")) ? a.replace(a.substring(e), "") : a);
            if (b && (-1 !== b.indexOf(g) || -1 !== n.Tag.indexOf(b))) {
                c = n.CategoryId;
                break
            }
        }
        if (!c.length && t) {
            var u = function(a) {
                var c = document.createElement("a");
                c.href = a;
                a = c.hostname.split(".");
                return -1 !== a.indexOf("www") || 2 < a.length ? a.slice(1).join(".") :
                    c.hostname
            }(b);
            v.some(function(a) {
                return a === u
            }) && (c = ["C0004"])
        }
        return c
    }

    function g(b) {
        return b && window.OptanonActiveGroups && b.every(function(b) {
            return -1 !== window.OptanonActiveGroups.indexOf(b)
        })
    }

    function l(b) {
        return -1 !== (b.getAttribute("class") || "").indexOf("optanon-category")
    }

    function m(b) {
        return b.hasAttribute("data-ot-ignore")
    }
    var q = JSON.parse('[{"Host":"urbansportsclub.com","Tag":"https://static.zdassets.com/web_widget/latest/chat-sdk.34475bc42f3df2dfabe9.chunk.js","CategoryId":["C0003"]},{"Host":"urbansportsclub.com","Tag":"https://sc-static.net/scevent.min.js","CategoryId":["C0002","C0004"]},{"Host":"urbansportsclub.com","Tag":"https://script.hotjar.com/modules.d34b9b5fcf97212d2a3d.js","CategoryId":["C0002"]},{"Host":"snapchat.com","Tag":"https://tr.snapchat.com/p","CategoryId":["C0002"]},{"Host":"urbansportsclub.com","Tag":"https://script.hotjar.com/modules.4a09f48ff74a1e01337f.js","CategoryId":["C0002"]},{"Host":"urbansportsclub.com","Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002","C0004"]},{"Host":"atdmt.com","Tag":"https://cx.atdmt.com/","CategoryId":["C0004"]},{"Host":"urbansportsclub.com","Tag":"https://www.google-analytics.com/gtm/js","CategoryId":["C0002"]},{"Host":"urbansportsclub.com","Tag":"https://assets.squarespace.com/universal/scripts-compressed/commerce-cart-5335bb573b547dabcfe7b-min.en-US.js","CategoryId":["C0002"]},{"Host":"nr-data.net","Tag":"https://bam-cell.nr-data.net/1/b979154238","CategoryId":["C0002"]},{"Host":"script.hotjar.com","Tag":"https://script.hotjar.com/modules.9b073f1a2e6018f76c6a.js","CategoryId":["C0002"]},{"Host":"bing.com","Tag":"https://bat.bing.com/bat.js","CategoryId":["C0004"]},{"Host":"urbansportsclub.com","Tag":"https://urbansportsclub.com/build/frontend/venue-address.cac6f936b96c16150ed6.js","CategoryId":["C0002","C0004"]},{"Host":"urbansportsclub.com","Tag":"https://bat.bing.com/bat.js","CategoryId":["C0002","C0004"]},{"Host":"script.hotjar.com","Tag":"https://script.hotjar.com/modules.d34b9b5fcf97212d2a3d.js","CategoryId":["C0002"]},{"Host":"urbansportsclub.com","Tag":"https://static.zdassets.com/web_widget/latest/lazy/web_widget.df767bc7a1ab781662a9.chunk.js","CategoryId":["C0002"]},{"Host":"facebook.com","Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"]},{"Host":"youtube.com","Tag":"https://www.youtube.com/embed/k8pQrhFjRfY","CategoryId":["C0004"]},{"Host":"urbansportsclub.com","Tag":"https://connect.facebook.net/signals/config/241436849629566","CategoryId":["C0004"]},{"Host":"ads.linkedin.com","Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0004"]},{"Host":"urbansportsclub.com","Tag":"https://assets.squarespace.com/universal/scripts-compressed/commerce-cart-3f276769953b5bf9fe49b-min.en-US.js","CategoryId":["C0004"]},{"Host":"www.facebook.com","Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"]},{"Host":"urbansportsclub.com","Tag":"https://www.google-analytics.com/plugins/ua/ec.js","CategoryId":["C0002"]},{"Host":"urbansportsclub.com","Tag":"https://urbansportsclub.com/build/frontend/search.cac6f936b96c16150ed6.js","CategoryId":["C0002"]},{"Host":"script.hotjar.com","Tag":"https://script.hotjar.com/modules.4a09f48ff74a1e01337f.js","CategoryId":["C0002"]},{"Host":"urbansportsclub.com","Tag":"https://urbansportsclub.com/build/frontend/search.14900d78b02a181996c6.js","CategoryId":["C0002"]},{"Host":"youtube.com","Tag":"https://www.youtube.com/iframe_api","CategoryId":["C0004"]},{"Host":"linkedin.com","Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0004"]},{"Host":"static.zdassets.com","Tag":"https://static.zdassets.com/web_widget/latest/chat-sdk.34475bc42f3df2dfabe9.chunk.js","CategoryId":["C0003"]},{"Host":"urbansportsclub.com","Tag":"https://static.zdassets.com/web_widget/latest/lazy/web_widget.928077f1faf7a7ba0f28.chunk.js","CategoryId":["C0002"]},{"Host":"urbansportsclub.com","Tag":"https://ajax.cloudflare.com/cdn-cgi/scripts/7089c43e/cloudflare-static/rocket-loader.min.js","CategoryId":["C0002"]},{"Host":"urbansportsclub.com","Tag":"https://script.hotjar.com/modules.9b073f1a2e6018f76c6a.js","CategoryId":["C0002"]},{"Host":"urbansportsclub.com","Tag":"https://www.googletagmanager.com/gtm.js","CategoryId":["C0002"]},{"Host":"www.linkedin.com","Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0004"]},{"Host":"linkedin.com","Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0004"]},{"Host":"urbansportsclub.com","Tag":"https://urbansportsclub.com/build/frontend/venue-address.14900d78b02a181996c6.js","CategoryId":["C0002","C0004"]}]'),
        t = JSON.parse("false"),
        v = "addthis.com addtoany.com adsrvr.org amazon-adsystem.com bing.com bounceexchange.com bouncex.net criteo.com criteo.net dailymotion.com doubleclick.net everesttech.net facebook.com facebook.net googleadservices.com googlesyndication.com krxd.net liadm.com linkedin.com outbrain.com rubiconproject.com sharethis.com taboola.com twitter.com vimeo.com yahoo.com youtube.com".split(" "),
        p = ["embed", "iframe", "img", "script"];
    (new MutationObserver(function(b) {
        Array.prototype.forEach.call(b,
            function(b) {
                Array.prototype.forEach.call(b.addedNodes, function(a) {
                    var c, b;
                    if (1 === a.nodeType && -1 !== p.indexOf(a.tagName.toLowerCase()) && !l(a) && !m(a))
                        if ("script" === a.tagName.toLowerCase()) {
                            if ((b = h(c = a.src || "")).length) {
                                var d = b.join("-"); - 1 === (f = a.getAttribute("class") ? a.getAttribute("class") : "").indexOf("optanon-category-" + d) && a.setAttribute("class", "optanon-category-" + d + " " + f);
                                g(b) || (a.type = "text/plain");
                                var e = function(b) {
                                    "text/plain" === a.getAttribute("type") && b.preventDefault();
                                    a.removeEventListener("beforescriptexecute",
                                        e)
                                };
                                a.addEventListener("beforescriptexecute", e)
                            }
                        } else if ((b = h(c = a.src || "")).length) {
                        var f;
                        d = b.join("-"); - 1 === (f = a.getAttribute("class") ? a.getAttribute("class") : "").indexOf("optanon-category-" + d) && a.setAttribute("class", "optanon-category-" + d + " " + f);
                        g(b) || (a.removeAttribute("src"), a.setAttribute("data-src", c))
                    }
                });
                var a = b.target;
                if (b.attributeName && (!l(a) || !m(a)))
                    if ("script" === a.nodeName.toLowerCase()) {
                        if ((c = h(d = a.src || "")).length) {
                            b = c.join("-"); - 1 === (f = a.getAttribute("class") ? a.getAttribute("class") :
                                "").indexOf("optanon-category-" + b) && a.setAttribute("class", "optanon-category-" + b + " " + f + " ");
                            g(c) || (a.type = "text/plain");
                            var e = function(b) {
                                "text/plain" === a.getAttribute("type") && b.preventDefault();
                                a.removeEventListener("beforescriptexecute", e)
                            };
                            a.addEventListener("beforescriptexecute", e)
                        }
                    } else if (-1 !== p.indexOf(b.target.nodeName.toLowerCase())) {
                    var d, c;
                    if ((c = h(d = a.src || "")).length) {
                        var f;
                        b = c.join("-"); - 1 === (f = a.getAttribute("class") ? a.getAttribute("class") : "").indexOf("optanon-category-" + b) && a.setAttribute("class",
                            "optanon-category-" + b + " " + f);
                        g(c) || (a.removeAttribute("src"), a.setAttribute("data-src", d))
                    }
                }
            })
    })).observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["src"]
    });
    var r = document.createElement;
    document.createElement = function() {
        for (var b = [], k = 0; k < arguments.length; k++) b[k] = arguments[k];
        if ("script" !== b[0].toLowerCase() && -1 === p.indexOf(b[0].toLowerCase())) return r.bind(document).apply(void 0, b);
        var a = r.bind(document).apply(void 0, b),
            e = a.setAttribute.bind(a);
        return Object.defineProperties(a, {
            src: {
                get: function() {
                    return a.getAttribute("src") || ""
                },
                set: function(d) {
                    var c = "";
                    "string" == typeof d ? c = d : d instanceof Object && (c = d.toString());
                    c = h(c);
                    !c.length || "script" !== b[0].toLowerCase() || l(a) || g(c) || m(a) ? !c.length || -1 === p.indexOf(b[0].toLowerCase()) || l(a) || g(c) || m(a) ? e("src", d) : (a.removeAttribute("src"), e("data-src", d), a.getAttribute("class") || e("class", "optanon-category-" + c)) : (e("type", "text/plain"), e("src", d));
                    return !0
                }
            },
            type: {
                set: function(b) {
                    var c = h(a.src || "");
                    b = !c.length || l(a) || g(c) || m(a) ?
                        b : "text/plain";
                    return e("type", b), !0
                }
            },
            class: {
                set: function(b) {
                    var c = h(a.src);
                    !c.length || l(a) || g(c) || m(a) ? e("class", b) : (c = c.join("-"), e("class", "optanon-category-" + c + " " + b));
                    return !0
                }
            }
        }), a.setAttribute = function(b, c, f) {
            "type" !== b && "src" !== b || f ? e(b, c) : a[b] = c
        }, a
    }
}();