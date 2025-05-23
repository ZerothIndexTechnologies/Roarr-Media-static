!function() {
    "use strict";
    const t = "/_hcms/perf/v2"
        , e = window
        , n = Math.pow(2, 31);
    var i = {
        mode: "compressed",
        staticDomainPrefix: "//static.hsappstatic.net",
        bender: {
            depVersions: {
                "content-cwv-embed": "static-1.1293",
                "browserslist-config-hubspot": "static-1.114",
                csstype: "static-1.8",
                "head-dlb": "static-1.1074",
                HeadJS: "static-2.440",
                "hoist-non-react-statics": "static-3.9",
                "hs-test-utils": "static-1.3276",
                "hub-http": "static-1.2011",
                "hub-http-janus": "static-1.493",
                "hub-http-rxjs": "static-1.463",
                HubStyleTokens: "static-2.6808",
                jasmine: "static-4.425",
                "jasmine-runner": "static-1.1821",
                "metrics-js": "static-1.4705",
                msw: "static-1.39",
                quartz: "static-1.2288",
                react: "static-7.123",
                "react-dom": "static-7.85",
                "react-redux": "static-7.16",
                redux: "static-4.16",
                "redux-thunk": "static-2.17",
                rxjs: "static-5.10",
                StyleGuideUI: "static-3.401",
                "testing-library": "static-1.99",
                "webpack-env": "static-1.4",
                enviro: "static-4.230",
                "hs-promise-rejection-tracking": "static-1.903",
                PortalIdParser: "static-2.218",
                raven: "static-3.863",
                "raven-hubspot": "static-1.1170"
            },
            depPathPrefixes: {
                "content-cwv-embed": "/content-cwv-embed/static-1.1293",
                "browserslist-config-hubspot": "/browserslist-config-hubspot/static-1.114",
                csstype: "/csstype/static-1.8",
                "head-dlb": "/head-dlb/static-1.1074",
                HeadJS: "/HeadJS/static-2.440",
                "hoist-non-react-statics": "/hoist-non-react-statics/static-3.9",
                "hs-test-utils": "/hs-test-utils/static-1.3276",
                "hub-http": "/hub-http/static-1.2011",
                "hub-http-janus": "/hub-http-janus/static-1.493",
                "hub-http-rxjs": "/hub-http-rxjs/static-1.463",
                HubStyleTokens: "/HubStyleTokens/static-2.6808",
                jasmine: "/jasmine/static-4.425",
                "jasmine-runner": "/jasmine-runner/static-1.1821",
                "metrics-js": "/metrics-js/static-1.4705",
                msw: "/msw/static-1.39",
                quartz: "/quartz/static-1.2288",
                react: "/react/static-7.123",
                "react-dom": "/react-dom/static-7.85",
                "react-redux": "/react-redux/static-7.16",
                redux: "/redux/static-4.16",
                "redux-thunk": "/redux-thunk/static-2.17",
                rxjs: "/rxjs/static-5.10",
                StyleGuideUI: "/StyleGuideUI/static-3.401",
                "testing-library": "/testing-library/static-1.99",
                "webpack-env": "/webpack-env/static-1.4",
                enviro: "/enviro/static-4.230",
                "hs-promise-rejection-tracking": "/hs-promise-rejection-tracking/static-1.903",
                PortalIdParser: "/PortalIdParser/static-2.218",
                raven: "/raven/static-3.863",
                "raven-hubspot": "/raven-hubspot/static-1.1170"
            },
            project: "content-cwv-embed",
            staticDomain: "//static.hsappstatic.net",
            staticDomainPrefix: "//static.hsappstatic.net"
        }
    };
    function r() {
        const t = document.getElementById("hs-script-loader");
        return t && "SCRIPT" === t.tagName
    }
    function a() {
        return Array.prototype.slice.apply(document.querySelectorAll('script[data-loader="hs-scriptloader"], script#hs-analytics')).filter((t => t.src)).map((t => t.id))
    }
    function o() {
        if (!r())
            return {
                usesScriptLoader: !1,
                embedIdsPresent: []
            };
        return {
            usesScriptLoader: !0,
            embedIdsPresent: a()
        }
    }
    function c() {
        const t = navigator
            , e = t.connection || t.mozConnection || t.webkitConnection;
        return e ? {
            type: e.type,
            effectiveType: e.effectiveType,
            downlink: e.downlink,
            rtt: e.rtt
        } : {}
    }
    let s = {};
    function u(t) {
        const e = t.navigationType;
        "navigate" !== e && "reload" !== e && "prerender" !== e || (s[t.name] = t.value)
    }
    function d() {
        const t = s;
        s = {};
        return t
    }
    function f(t, e) {
        return Math.floor(Math.round(t / e) * e)
    }
    function p() {
        return performance.timing.toJSON()
    }
    function l() {
        return performance.getEntriesByType("navigation")[0]
    }
    function m() {
        const t = l();
        return {
            startTime: t.startTime,
            requestStart: t.requestStart,
            responseStart: t.responseStart,
            responseEnd: t.responseEnd,
            domComplete: t.domComplete,
            decodedBodySize: t.decodedBodySize,
            encodedBodySize: t.encodedBodySize,
            activationStart: t.activationStart,
            deliveryType: t.deliveryType
        }
    }
    function h() {
        const t = e.hsVars;
        t || console.warn("Cannot collect HS CMS performance data, hsVars are missing");
        const n = i.bender.depVersions[i.bender.project].replace(/static-/, "")
            , r = "static" === n;
        return {
            url: location.href,
            portal: t.portal_id,
            content: t.page_id,
            group: t.content_group_id,
            renderId: t.render_id,
            embedPackageVersion: r ? void 0 : n
        }
    }
    function v() {
        return Object.assign({}, h(), {
            visibleOnScriptLoad: !1
        })
    }
    function g() {
        const t = Object.assign({}, h(), {
            visibleOnScriptLoad: !0,
            connection: c(),
            timing: p(),
            navTiming: m(),
            scriptLoader: o()
        })
            , {width: i, height: r} = b();
        i && r && (t.viewport = {
            width: i,
            height: r
        });
        if (e.hsVideoApi && "function" == typeof e.hsVideoApi.getPerformanceMetrics) {
            const {embedType: i, embedVersion: r, firstVideoLoadedAt: a, firstVideoReadyAt: o, firstVideoPlayedAt: c, numHsVideos: s, numAutoplay: u, numInitiallyVisible: d, numInteractedWith: f, secondsOfVideoPlayed: p} = e.hsVideoApi.getPerformanceMetrics();
            if (s > 0) {
                t.hsVideo = {
                    embedType: i,
                    embedVersion: r,
                    numHsVideos: s,
                    numAutoplay: u,
                    numInitiallyVisible: d,
                    numInteractedWith: f,
                    secondsOfVideoPlayed: p
                };
                a && (t.hsVideo.firstVideoLoadedAt = Math.min(a, n));
                o && (t.hsVideo.firstVideoReadyAt = Math.min(o, n));
                c && (t.hsVideo.firstVideoPlayedAt = Math.min(c, n))
            }
        }
        if (e.leadflows && e.leadflows.perfMetrics && "function" == typeof e.leadflows.perfMetrics.getPerformanceMetrics) {
            const {numConfigured: n, numEmbedsPresent: i, numMatchingCurrentUrl: r, numRendered: a} = e.leadflows.perfMetrics.getPerformanceMetrics();
            n > 0 && (t.leadflows = {
                numConfigured: n,
                numEmbedsPresent: i,
                numMatchingCurrentUrl: r,
                numRendered: a
            })
        }
        if (e.hsCookieBanner && "function" == typeof e.hsCookieBanner.getPerfMetrics) {
            const n = e.hsCookieBanner.getPerfMetrics();
            if (n) {
                const {numSettings: e, bannerInitAt: i, bannerStartAt: r, bannerReadyAt: a, matchedBannerType: o, usesGpc: c, geolocationRequestInCriticalPath: s, geolocationRequestDuration: u, bannerRendered: d} = n;
                t.cookieBanner = {
                    numSettings: e,
                    bannerInitAt: i,
                    bannerStartAt: r,
                    bannerReadyAt: a,
                    matchedBannerType: o,
                    usesGpc: c,
                    geolocationRequestInCriticalPath: s,
                    geolocationRequestDuration: u,
                    bannerRendered: d
                }
            }
        }
        return t
    }
    function y() {
        const t = g()
            , e = d();
        e && (t.cwv = e);
        return t
    }
    function b() {
        const t = window.innerWidth
            , e = window.innerHeight;
        return t > 0 && e > 0 ? {
            width: f(t, 25),
            height: f(e, 25)
        } : {}
    }
    let w, S = !1;
    function T(e) {
        const n = new XMLHttpRequest;
        n.open("POST", t, !0);
        n.setRequestHeader("Content-type", "application/json");
        n.onreadystatechange = function() {}
        ;
        n.send(JSON.stringify(e));
        S = !0
    }
    function E(e) {
        S = navigator.sendBeacon(`${t}?viaBeacon=true`, new Blob([JSON.stringify(e)],{
            type: "application/json"
        }))
    }
    function C(t) {
        try {
            navigator.sendBeacon ? E(t) : T(t)
        } catch (t) {
            console.warn("Error sending HSCMS perf data", t)
        }
    }
    function P() {
        S || C(y())
    }
    function A() {
        S || C(v())
    }
    function L(t) {
        const e = () => {
                if ("hidden" === document.visibilityState) {
                    t();
                    removeEventListener("visibilitychange", e, !0)
                }
            }
        ;
        addEventListener("visibilitychange", e, !0);
        addEventListener("pagehide", t, {
            capture: !0,
            once: !0
        });
        w = () => {
            removeEventListener("visibilitychange", e, !0);
            removeEventListener("pagehide", t, {
                capture: !0
            })
        }
    }
    function I() {
        L(P)
    }
    function M() {
        L(A)
    }
    var j, k, V, x, B, R = -1, H = function(t) {
        addEventListener("pageshow", (function(e) {
                e.persisted && (R = e.timeStamp,
                    t(e))
            }
        ), !0)
    }, q = function() {
        return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
    }, O = function() {
        var t = q();
        return t && t.activationStart || 0
    }, D = function(t, e) {
        var n = q()
            , i = "navigate";
        R >= 0 ? i = "back-forward-cache" : n && (document.prerendering || O() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : n.type && (i = n.type.replace(/_/g, "-")));
        return {
            name: t,
            value: void 0 === e ? -1 : e,
            rating: "good",
            delta: 0,
            entries: [],
            id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
            navigationType: i
        }
    }, z = function(t, e, n) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                var i = new PerformanceObserver((function(t) {
                        Promise.resolve().then((function() {
                                e(t.getEntries())
                            }
                        ))
                    }
                ));
                return i.observe(Object.assign({
                    type: t,
                    buffered: !0
                }, n || {})),
                    i
            }
        } catch (t) {}
    }, F = function(t, e, n, i) {
        var r, a;
        return function(o) {
            e.value >= 0 && (o || i) && ((a = e.value - (r || 0)) || void 0 === r) && (r = e.value,
                e.delta = a,
                e.rating = function(t, e) {
                    return t > e[1] ? "poor" : t > e[0] ? "needs-improvement" : "good"
                }(e.value, n),
                t(e))
        }
    }, _ = function(t) {
        requestAnimationFrame((function() {
                return requestAnimationFrame((function() {
                        return t()
                    }
                ))
            }
        ))
    }, J = function(t) {
        var e = function(e) {
            "pagehide" !== e.type && "hidden" !== document.visibilityState || t(e)
        };
        addEventListener("visibilitychange", e, !0),
            addEventListener("pagehide", e, !0)
    }, N = function(t) {
        var e = !1;
        return function(n) {
            e || (t(n),
                e = !0)
        }
    }, G = -1, U = function() {
        return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
    }, W = function(t) {
        "hidden" === document.visibilityState && G > -1 && (G = "visibilitychange" === t.type ? t.timeStamp : 0,
            $())
    }, X = function() {
        addEventListener("visibilitychange", W, !0),
            addEventListener("prerenderingchange", W, !0)
    }, $ = function() {
        removeEventListener("visibilitychange", W, !0),
            removeEventListener("prerenderingchange", W, !0)
    }, K = function() {
        return G < 0 && (G = U(),
            X(),
            H((function() {
                    setTimeout((function() {
                            G = U(),
                                X()
                        }
                    ), 0)
                }
            ))),
            {
                get firstHiddenTime() {
                    return G
                }
            }
    }, Q = function(t) {
        document.prerendering ? addEventListener("prerenderingchange", (function() {
                return t()
            }
        ), !0) : t()
    }, Y = [1800, 3e3], Z = function(t, e) {
        e = e || {},
            Q((function() {
                    var n, i = K(), r = D("FCP"), a = z("paint", (function(t) {
                            t.forEach((function(t) {
                                    "first-contentful-paint" === t.name && (a.disconnect(),
                                    t.startTime < i.firstHiddenTime && (r.value = Math.max(t.startTime - O(), 0),
                                        r.entries.push(t),
                                        n(!0)))
                                }
                            ))
                        }
                    ));
                    a && (n = F(t, r, Y, e.reportAllChanges),
                        H((function(i) {
                                r = D("FCP"),
                                    n = F(t, r, Y, e.reportAllChanges),
                                    _((function() {
                                            r.value = performance.now() - i.timeStamp,
                                                n(!0)
                                        }
                                    ))
                            }
                        )))
                }
            ))
    }, tt = [.1, .25], et = function(t, e) {
        e = e || {},
            Z(N((function() {
                    var n, i = D("CLS", 0), r = 0, a = [], o = function(t) {
                        t.forEach((function(t) {
                                if (!t.hadRecentInput) {
                                    var e = a[0]
                                        , n = a[a.length - 1];
                                    r && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (r += t.value,
                                        a.push(t)) : (r = t.value,
                                        a = [t])
                                }
                            }
                        )),
                        r > i.value && (i.value = r,
                            i.entries = a,
                            n())
                    }, c = z("layout-shift", o);
                    c && (n = F(t, i, tt, e.reportAllChanges),
                        J((function() {
                                o(c.takeRecords()),
                                    n(!0)
                            }
                        )),
                        H((function() {
                                r = 0,
                                    i = D("CLS", 0),
                                    n = F(t, i, tt, e.reportAllChanges),
                                    _((function() {
                                            return n()
                                        }
                                    ))
                            }
                        )),
                        setTimeout(n, 0))
                }
            )))
    }, nt = {
        passive: !0,
        capture: !0
    }, it = new Date, rt = function(t, e) {
        j || (j = e,
            k = t,
            V = new Date,
            ct(removeEventListener),
            at())
    }, at = function() {
        if (k >= 0 && k < V - it) {
            var t = {
                entryType: "first-input",
                name: j.type,
                target: j.target,
                cancelable: j.cancelable,
                startTime: j.timeStamp,
                processingStart: j.timeStamp + k
            };
            x.forEach((function(e) {
                    e(t)
                }
            )),
                x = []
        }
    }, ot = function(t) {
        if (t.cancelable) {
            var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
            "pointerdown" == t.type ? function(t, e) {
                var n = function() {
                    rt(t, e),
                        r()
                }
                    , i = function() {
                    r()
                }
                    , r = function() {
                    removeEventListener("pointerup", n, nt),
                        removeEventListener("pointercancel", i, nt)
                };
                addEventListener("pointerup", n, nt),
                    addEventListener("pointercancel", i, nt)
            }(e, t) : rt(e, t)
        }
    }, ct = function(t) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(e) {
                return t(e, ot, nt)
            }
        ))
    }, st = [100, 300], ut = function(t, e) {
        e = e || {},
            Q((function() {
                    var n, i = K(), r = D("FID"), a = function(t) {
                        t.startTime < i.firstHiddenTime && (r.value = t.processingStart - t.startTime,
                            r.entries.push(t),
                            n(!0))
                    }, o = function(t) {
                        t.forEach(a)
                    }, c = z("first-input", o);
                    n = F(t, r, st, e.reportAllChanges),
                    c && J(N((function() {
                            o(c.takeRecords()),
                                c.disconnect()
                        }
                    ))),
                    c && H((function() {
                            var i;
                            r = D("FID"),
                                n = F(t, r, st, e.reportAllChanges),
                                x = [],
                                k = -1,
                                j = null,
                                ct(addEventListener),
                                i = a,
                                x.push(i),
                                at()
                        }
                    ))
                }
            ))
    }, dt = 0, ft = 1 / 0, pt = 0, lt = function(t) {
        t.forEach((function(t) {
                t.interactionId && (ft = Math.min(ft, t.interactionId),
                    pt = Math.max(pt, t.interactionId),
                    dt = pt ? (pt - ft) / 7 + 1 : 0)
            }
        ))
    }, mt = function() {
        return B ? dt : performance.interactionCount || 0
    }, ht = function() {
        "interactionCount"in performance || B || (B = z("event", lt, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
        }))
    }, vt = [200, 500], gt = 0, yt = function() {
        return mt() - gt
    }, bt = [], wt = {}, St = function(t) {
        var e = bt[bt.length - 1]
            , n = wt[t.interactionId];
        if (n || bt.length < 10 || t.duration > e.latency) {
            if (n)
                n.entries.push(t),
                    n.latency = Math.max(n.latency, t.duration);
            else {
                var i = {
                    id: t.interactionId,
                    latency: t.duration,
                    entries: [t]
                };
                wt[i.id] = i,
                    bt.push(i)
            }
            bt.sort((function(t, e) {
                    return e.latency - t.latency
                }
            )),
                bt.splice(10).forEach((function(t) {
                        delete wt[t.id]
                    }
                ))
        }
    }, Tt = function(t, e) {
        e = e || {},
            Q((function() {
                    var n;
                    ht();
                    var i, r = D("INP"), a = function(t) {
                        t.forEach((function(t) {
                                (t.interactionId && St(t),
                                "first-input" === t.entryType) && !bt.some((function(e) {
                                        return e.entries.some((function(e) {
                                                return t.duration === e.duration && t.startTime === e.startTime
                                            }
                                        ))
                                    }
                                )) && St(t)
                            }
                        ));
                        var e, n = (e = Math.min(bt.length - 1, Math.floor(yt() / 50)),
                            bt[e]);
                        n && n.latency !== r.value && (r.value = n.latency,
                            r.entries = n.entries,
                            i())
                    }, o = z("event", a, {
                        durationThreshold: null !== (n = e.durationThreshold) && void 0 !== n ? n : 40
                    });
                    i = F(t, r, vt, e.reportAllChanges),
                    o && ("PerformanceEventTiming"in window && "interactionId"in PerformanceEventTiming.prototype && o.observe({
                        type: "first-input",
                        buffered: !0
                    }),
                        J((function() {
                                a(o.takeRecords()),
                                r.value < 0 && yt() > 0 && (r.value = 0,
                                    r.entries = []),
                                    i(!0)
                            }
                        )),
                        H((function() {
                                bt = [],
                                    gt = mt(),
                                    r = D("INP"),
                                    i = F(t, r, vt, e.reportAllChanges)
                            }
                        )))
                }
            ))
    }, Et = [2500, 4e3], Ct = {}, Pt = function(t, e) {
        e = e || {},
            Q((function() {
                    var n, i = K(), r = D("LCP"), a = function(t) {
                        var e = t[t.length - 1];
                        e && e.startTime < i.firstHiddenTime && (r.value = Math.max(e.startTime - O(), 0),
                            r.entries = [e],
                            n())
                    }, o = z("largest-contentful-paint", a);
                    if (o) {
                        n = F(t, r, Et, e.reportAllChanges);
                        var c = N((function() {
                                Ct[r.id] || (a(o.takeRecords()),
                                    o.disconnect(),
                                    Ct[r.id] = !0,
                                    n(!0))
                            }
                        ));
                        ["keydown", "click"].forEach((function(t) {
                                addEventListener(t, (function() {
                                        return setTimeout(c, 0)
                                    }
                                ), !0)
                            }
                        )),
                            J(c),
                            H((function(i) {
                                    r = D("LCP"),
                                        n = F(t, r, Et, e.reportAllChanges),
                                        _((function() {
                                                r.value = performance.now() - i.timeStamp,
                                                    Ct[r.id] = !0,
                                                    n(!0)
                                            }
                                        ))
                                }
                            ))
                    }
                }
            ))
    }, At = [800, 1800], Lt = function t(e) {
        document.prerendering ? Q((function() {
                return t(e)
            }
        )) : "complete" !== document.readyState ? addEventListener("load", (function() {
                return t(e)
            }
        ), !0) : setTimeout(e, 0)
    }, It = function(t, e) {
        e = e || {};
        var n = D("TTFB")
            , i = F(t, n, At, e.reportAllChanges);
        Lt((function() {
                var r = q();
                if (r) {
                    var a = r.responseStart;
                    if (a <= 0 || a > performance.now())
                        return;
                    n.value = Math.max(a - O(), 0),
                        n.entries = [r],
                        i(!0),
                        H((function() {
                                n = D("TTFB", 0),
                                    (i = F(t, n, At, e.reportAllChanges))(!0)
                            }
                        ))
                }
            }
        ))
    };
    function Mt() {
        if ("hidden" !== document.visibilityState) {
            et(u, {
                reportAllChanges: !0
            });
            Tt(u, {
                reportAllChanges: !0
            });
            ut(u);
            Z(u);
            Pt(u);
            It(u);
            I()
        } else
            M()
    }
    function jt() {
        !!document.prerendering ? document.addEventListener("prerenderingchange", Mt, {
            once: !0
        }) : Mt()
    }
    jt()
}();
