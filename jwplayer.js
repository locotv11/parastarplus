(()=>{
    var e, t, n = {
        696: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>r
            });
            const r = {
                advertising: {
                    admessage: "This ad will end in xx",
                    cuetext: "Advertisement",
                    displayHeading: "Advertisement",
                    loadingAd: "Loading ad",
                    podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
                    skipmessage: "Skip ad in xx",
                    skiptext: "Skip"
                },
                airplay: "AirPlay",
                audioTracks: "Audio Tracks",
                auto: "Auto",
                buffer: "Loading",
                cast: "Chromecast",
                cc: "Closed Captions",
                close: "Close",
                errors: {
                    badConnection: "This video cannot be played because of a problem with your internet connection.",
                    cantLoadPlayer: "Sorry, the video player failed to load.",
                    cantPlayInBrowser: "The video cannot be played in this browser.",
                    cantPlayVideo: "This video file cannot be played.",
                    errorCode: "Error Code",
                    liveStreamDown: "The live stream is either down or has ended.",
                    protectedContent: "There was a problem providing access to protected content.",
                    technicalError: "This video cannot be played because of a technical error."
                },
                exitFullscreen: "Exit Fullscreen",
                fullscreen: "Fullscreen",
                hd: "Quality",
                liveBroadcast: "Live",
                logo: "Logo",
                mute: "Mute",
                next: "Next",
                nextUp: "Next Up",
                notLive: "Not Live",
                off: "Off",
                pause: "Pause",
                pipIcon: "Picture in Picture (PiP)",
                play: "Play",
                playback: "Play",
                playbackRates: "Playback Rates",
                player: "Video Player",
                poweredBy: "Powered by",
                prev: "Previous",
                related: {
                    autoplaymessage: "Next up in xx",
                    heading: "More Videos"
                },
                replay: "Replay",
                rewind: "Rewind 10 Seconds",
                settings: "Settings",
                sharing: {
                    copied: "Copied",
                    email: "Email",
                    embed: "Embed",
                    heading: "Share",
                    link: "Link"
                },
                slider: "Seek",
                stop: "Stop",
                unmute: "Unmute",
                videoInfo: "About This Video",
                volume: "Volume",
                volumeSlider: "Volume",
                shortcuts: {
                    playPause: "Play/Pause",
                    volumeToggle: "Mute/Unmute",
                    fullscreenToggle: "Fullscreen/Exit Fullscreen",
                    seekPercent: "Seek %",
                    keyboardShortcuts: "Keyboard Shortcuts",
                    increaseVolume: "Increase Volume",
                    decreaseVolume: "Decrease Volume",
                    seekForward: "Seek Forward",
                    seekBackward: "Seek Backward",
                    spacebar: "SPACE",
                    captionsToggle: "Captions On/Off"
                },
                captionsStyles: {
                    subtitleSettings: "Subtitle Settings",
                    color: "Font Color",
                    fontOpacity: "Font Opacity",
                    userFontScale: "Font Size",
                    fontFamily: "Font Family",
                    edgeStyle: "Character Edge",
                    backgroundColor: "Background Color",
                    backgroundOpacity: "Background Opacity",
                    windowColor: "Window Color",
                    windowOpacity: "Window Opacity",
                    white: "White",
                    black: "Black",
                    red: "Red",
                    green: "Green",
                    blue: "Blue",
                    yellow: "Yellow",
                    magenta: "Magenta",
                    cyan: "Cyan",
                    none: "None",
                    raised: "Raised",
                    depressed: "Depressed",
                    uniform: "Uniform",
                    dropShadow: "Drop Shadow"
                },
                disabled: "Disabled",
                enabled: "Enabled",
                reset: "Reset"
            }
        }
        ,
        9128: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>function(e, t, n) {
                    function o() {
                        for (; 0 < r.length; ) {
                            var {command: t, args: n} = r.shift();
                            (i[t] || e[t]).apply(e, n)
                        }
                    }
                    const r = []
                      , i = {};
                    t.forEach(t=>{
                        const s = e[t];
                        i[t] = s,
                        e[t] = function(...e) {
                            n() ? r.push({
                                command: t,
                                args: e
                            }) : (o(),
                            s && s.apply(this, e))
                        }
                    }
                    ),
                    Object.defineProperty(this, "queue", {
                        enumerable: !0,
                        get: ()=>r
                    }),
                    this.flush = o,
                    this.empty = function() {
                        r.length = 0
                    }
                    ,
                    this.off = function() {
                        t.forEach(t=>{
                            var n = i[t];
                            n && (e[t] = n,
                            delete i[t])
                        }
                        )
                    }
                    ,
                    this.destroy = function() {
                        this.off(),
                        this.empty()
                    }
                }
            })
        }
        ,
        4742: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>r
            });
            const r = {
                debug: !1
            }
        }
        ,
        5191: (e,t,n)=>{
            "use strict";
            n.d(t, {
                R: ()=>i,
                a: ()=>r
            });
            const r = function(e) {
                return e = e.slice && "px" === e.slice(-2) ? e.slice(0, -2) : e
            }
              , i = function(e, t) {
                var r;
                return -1 !== t.toString().indexOf("%") && "string" == typeof e && e ? /^\d*\.?\d+%$/.test(e) ? e : -1 === (t = e.indexOf(":")) || (r = parseFloat(e.substr(0, t)),
                e = parseFloat(e.substr(t + 1)),
                r <= 0) || e <= 0 ? 0 : e / r * 100 + "%" : 0
            }
        }
        ,
        5083: (e,t,n)=>{
            "use strict";
            n.d(t, {
                G0: ()=>d,
                ZP: ()=>p,
                ke: ()=>u
            });
            var r = n(5191)
              , i = n(1569)
              , o = n(9888)
              , s = n(6042)
              , a = n(8348)
              , l = n(696)
              , c = n(8518);
            const u = {
                autoPause: {
                    viewability: !1,
                    pauseAds: !1
                },
                autostart: !1,
                allowFullscreen: !0,
                bandwidthEstimate: null,
                bitrateSelection: null,
                castAvailable: !1,
                controls: !0,
                cues: [],
                defaultPlaybackRate: 1,
                displaydescription: !0,
                displaytitle: !0,
                displayPlaybackLabel: !1,
                enableShortcuts: !0,
                height: 360,
                intl: {},
                item: 0,
                language: "en",
                liveTimeout: null,
                localization: l.Z,
                mute: !1,
                nextUpDisplay: !0,
                playbackRateControls: !1,
                playbackRates: [.5, 1, 1.25, 1.5, 2],
                renderCaptionsNatively: !1,
                repeat: !1,
                stretching: "uniform",
                volume: 90,
                width: 640
            }
              , d = function(e) {
                return e < 5 ? 5 : e
            }
              , p = function(e, t) {
                var p = Object.assign({}, null == (p = window) || null == (p = p.jwplayer) ? void 0 : p.defaults, t, e)
                  , t = (!function(e) {
                    Object.keys(e).forEach(t=>{
                        "id" !== t && (e[t] = (0,
                        o.serialize)(e[t]))
                    }
                    )
                }(p),
                p.forceLocalizationDefaults ? u.language : (0,
                c.G3)())
                  , e = (0,
                c.tK)(p.intl)
                  , y = (p.localization = (0,
                c.Mh)(l.Z, (0,
                c.Pm)(p, e, t)),
                Object.assign({}, u, p))
                  , t = ("." === y.base && (y.base = (0,
                i.getScriptPath)("jwplayer.js")),
                y.base = (y.base || (0,
                i.loadFrom)()).replace(/\/?$/, "/"),
                n.p = y.base,
                y.width = (0,
                r.a)(y.width),
                y.height = (0,
                r.a)(y.height),
                y.aspectratio = (0,
                r.R)(y.aspectratio, y.width),
                "string" == typeof y.volume && (y.volume = parseFloat(y.volume)),
                y.volume = (0,
                s.qh)(y.volume) ? Math.min(Math.max(0, y.volume), 100) : u.volume,
                y.mute = Boolean(y.mute),
                y.language = t,
                y.intl = e,
                y.playlistIndex)
                  , e = (t && (y.item = t),
                (0,
                s.hj)(y.item) || (y.item = 0),
                p.autoPause)
                  , t = (e && (y.autoPause.viewability = !("viewability"in e) || Boolean(e.viewability)),
                y.playbackRateControls);
                if (t) {
                    let e = y.playbackRates;
                    (e = (e = Array.isArray(t) ? t : e).filter(e=>(0,
                    s.hj)(e) && .25 <= e && e <= 4).map(e=>Math.round(100 * e) / 100)).indexOf(1) < 0 && e.push(1),
                    e.sort(),
                    y.playbackRateControls = !0,
                    y.playbackRates = e
                }
                (!y.playbackRateControls || y.playbackRates.indexOf(y.defaultPlaybackRate) < 0) && (y.defaultPlaybackRate = 1),
                y.playbackRate = y.defaultPlaybackRate,
                y.aspectratio || delete y.aspectratio;
                p = y.playlist;
                if (p)
                    Array.isArray(p.playlist) && (y.feedData = p,
                    y.playlist = p.playlist);
                else {
                    const e = (0,
                    s.ei)(y, ["title", "description", "type", "mediaid", "image", "images", "file", "sources", "tracks", "preload", "duration", "chapters"]);
                    y.playlist = [e]
                }
                y.qualityLabels = y.qualityLabels || y.hlslabels,
                delete y.duration;
                let j = y.liveTimeout;
                null !== j && ((0,
                s.qh)(j) ? 0 !== j && (j = Math.max(30, j)) : j = null,
                y.liveTimeout = j);
                e = parseFloat(y.bandwidthEstimate),
                t = parseFloat(y.bitrateSelection);
                return y.bandwidthEstimate = (0,
                s.qh)(e) ? e : function(e) {
                    e = parseFloat(e);
                    return (0,
                    s.qh)(e) ? Math.max(e, 1) : u.bandwidthEstimate
                }(y.defaultBandwidthEstimate),
                y.bitrateSelection = (0,
                s.qh)(t) ? t : u.bitrateSelection,
                y.liveSyncDuration = d(y.liveSyncDuration),
                y.backgroundLoading = ((0,
                s.jn)(y.backgroundLoading) ? y : a.Features).backgroundLoading,
                y
            }
        }
        ,
        2894: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Ep: ()=>o,
                Jt: ()=>s,
                Tr: ()=>i,
                Zq: ()=>a
            });
            var r = n(4446);
            const i = {}
              , o = function(e, t) {
                return ()=>{
                    throw new r.rG(r.pJ,e,t)
                }
            }
              , s = function(e, t) {
                return ()=>{
                    throw new r.rG(null,e,t)
                }
            }
              , a = function() {
                return n.e(681).then(function(e) {
                    return n(2739).default
                }
                .bind(null, n)).catch(o(r.fU + 101))
            }
        }
        ,
        623: (e,t,n)=>{
            "use strict";
            n.d(t, {
                ZP: ()=>ne,
                c2: ()=>ee
            });
            var r = n(9128)
              , i = n(2445)
              , o = n(2894)
              , s = n(393)
              , a = n(8320)
              , l = n(2963)
              , c = n(670)
              , u = n(4601)
              , d = n(4446)
              , p = n(8348);
            let h = null;
            function f() {
                var e = window.IntersectionObserverEntry;
                return !(e && "IntersectionObserver"in window && "intersectionRatio"in e.prototype)
            }
            function g() {
                return (f() ? n.e(943).then(function(e) {
                    return n(6337)
                }
                .bind(null, n)).catch((0,
                o.Ep)(d.fU + 120)) : Promise.resolve()).then(o.Zq)
            }
            const m = function(e) {
                var t = e.get("controls")
                  , r = f()
                  , e = function(e) {
                    const n = e.get("playlist");
                    if (Array.isArray(n) && n.length) {
                        var r = (0,
                        a.bx)(e.get("item"), n.length)
                          , i = (0,
                        a.T5)((0,
                        s.Z)(n[r]), e);
                        for (let n = 0; n < i.length; n++) {
                            const r = i[n]
                              , o = e.getProviders();
                            for (let e = 0; e < l.B.length; e++) {
                                const n = l.B[e];
                                if (o.providerSupports(n, r))
                                    return "html5" === n.name
                            }
                        }
                    }
                    return !1
                }(e);
                return p.OS.tizen ? g() : t && r && e ? function() {
                    var e = n.e(605).then(function(e) {
                        n(6337);
                        var t = n(2739).default;
                        return u.v.controls = n(4646).default,
                        (0,
                        c.Z)(n(9181).default),
                        t
                    }
                    .bind(null, n)).catch((0,
                    o.Ep)(d.fU + 105));
                    return o.Tr.html5 = e
                }() : t && e ? function() {
                    var e = n.e(207).then(function(e) {
                        var t = n(2739).default;
                        return u.v.controls = n(4646).default,
                        (0,
                        c.Z)(n(9181).default),
                        t
                    }
                    .bind(null, n)).catch((0,
                    o.Ep)(d.fU + 104));
                    return o.Tr.html5 = e
                }() : t && r ? n.e(493).then(function(e) {
                    n(6337);
                    var t = n(2739).default;
                    return u.v.controls = n(4646).default,
                    t
                }
                .bind(null, n)).catch((0,
                o.Ep)(d.fU + 103)) : t ? n.e(581).then(function(e) {
                    var t = n(2739).default;
                    return u.v.controls = n(4646).default,
                    t
                }
                .bind(null, n)).catch((0,
                o.Ep)(d.fU + 102)) : g()
            };
            var y = n(1643)
              , v = n(7263)
              , b = n(676)
              , w = n(8518)
              , k = n(1241)
              , j = n(8381);
            function C(e, t, n) {
                (e = e.attributes).playlist = (0,
                a.ZP)(t),
                e.feedData = n
            }
            function P(e) {
                const t = e.get("playlist");
                return new Promise((n,r)=>{
                    if ("string" != typeof t) {
                        const r = e.get("feedData") || {};
                        return C(e, t, r),
                        n()
                    }
                    var i = new v.Z;
                    i.on(y.Ow, function(t) {
                        var r = t.playlist;
                        delete t.playlist,
                        C(e, r, t),
                        n()
                    }),
                    i.on(y.pn, t=>{
                        C(e, [], {}),
                        r((0,
                        d.l9)(t, d.xk))
                    }
                    ),
                    i.load(t)
                }
                )
            }
            function S(e) {
                return e.attributes._destroyed
            }
            var x = n(1918)
              , O = n(6599)
              , E = n(7010);
            function N(e) {
                let t;
                this.start = function(n) {
                    const r = I(e, n)
                      , i = Promise.all([(n = e,
                    h = h || m(n)), L(e), r, Z(e), M(e), T(e), B(e)]);
                    n = new Promise((e,n)=>{
                        t = setTimeout(()=>{
                            n(new d.rG(d.pJ,d.T6))
                        }
                        , 6e4);
                        var r = ()=>{
                            clearTimeout(t),
                            setTimeout(e, 6e4)
                        }
                        ;
                        i.then(r).catch(r)
                    }
                    );
                    return Promise.race([i, n]).catch(e=>{
                        var t = ()=>{
                            throw e
                        }
                        ;
                        return r.then(t).catch(t)
                    }
                    ).then(e=>function(e) {
                        var t;
                        return e && e.length ? (t = e.reduce((e,t)=>e.concat(t), []).filter(e=>null == e ? void 0 : e.code),
                        {
                            core: e[0],
                            warnings: t
                        }) : {
                            core: null,
                            warnings: []
                        }
                    }(e))
                }
                ,
                this.destroy = function() {
                    clearTimeout(t),
                    e.set("_destroyed", !0),
                    e = null
                }
            }
            const T = function(e) {
                var t = e.get("skin") ? e.get("skin").url : void 0;
                if ("string" != typeof t || function(e) {
                    var t = document.styleSheets;
                    for (let n = 0, r = t.length; n < r; n++)
                        if (t[n].href === e)
                            return 1
                }(t))
                    return Promise.resolve();
                {
                    const e = !0;
                    return new b.ZP(t,!0).load().catch(e=>e)
                }
            }
              , A = e=>{
                e = e.get("advertising");
                return Boolean(null == e ? void 0 : e.outstream)
            }
              , Z = e=>A(e) ? Promise.resolve() : P(e).then(()=>{
                if (e.get("drm") || (0,
                x.w0)(e.get("playlist")))
                    return (0,
                    x.lD)(e.get("edition"))
            }
            ).then(()=>{
                return P(t = e).then(()=>{
                    if (!S(t)) {
                        var e = (0,
                        a.s7)(t.get("playlist"), t);
                        t.attributes.playlist = e;
                        try {
                            (0,
                            a._)(e)
                        } catch (e) {
                            throw e.code += d.xk,
                            e
                        }
                        var n = t.getProviders()
                          , r = (0,
                        a.bx)(t.get("item"), e.length)
                          , {provider: r, name: s} = n.choose(e[r].sources[0]);
                        return "function" == typeof r ? r : o.Tr.html5 && "html5" === s ? o.Tr.html5 : n.load(s).catch(e=>{
                            throw (0,
                            d.l9)(e, d.y4)
                        }
                        )
                    }
                }
                );
                var t
            }
            )
              , M = (e,t)=>{
                var n = [(e=>{
                    const t = e.attributes
                      , n = t.error;
                    if (n && n.code === O.u5) {
                        const e = t.pid
                          , n = t.ph
                          , r = new O.ZP(t.key);
                        if (0 < n && n < 4 && e && -7776e6 < r.duration())
                            return new b.ZP(`//content.jwplatform.com/libraries/${e}.js`).load().then(()=>{
                                var e = window.jwplayer.defaults.key
                                  , n = new O.ZP(e);
                                n.error() || n.token() !== r.token() || (t.key = e,
                                t.edition = n.edition(),
                                t.error = n.error())
                            }
                            ).catch(()=>{}
                            )
                    }
                    return Promise.resolve()
                }
                )(e)];
                return A(e) || n.push(Promise.resolve()),
                Promise.all(n)
            }
              , F = (e,t)=>function(e, t) {
                return n.e(168).then((r=>new (n(5545).default)(t).setup(e)).bind(null, n)).catch((0,
                o.Ep)(d.fU + 130))
            }(e, t).then(()=>T(e))
              , I = (e,t)=>{
                var n = ()=>function(e, t) {
                    return (0,
                    k.Z)(e, t)
                }(e, t);
                return (0,
                E.Z)() ? F(e, t).then(n).catch(n) : n()
            }
              , B = function(e) {
                const t = e["attributes"]
                  , {language: n, base: r, setupConfig: i, intl: o} = t
                  , s = (0,
                w.Pm)(i, o, n);
                return !(0,
                w.q2)(n) || (0,
                w.dl)(s) ? Promise.resolve() : new Promise(i=>(0,
                w.Dq)(r, n).then(({response: n})=>{
                    if (!S(e)) {
                        if (!n)
                            throw new d.rG(null,d.wH);
                        t.localization = (0,
                        w.Mh)(n, s),
                        i()
                    }
                }
                ).catch(e=>{
                    i(e.code === d.wH ? e : (0,
                    d.l9)(e, d.A6))
                }
                ))
            }
              , L = e=>new Promise(t=>{
                var n;
                return 45 < e.attributes.liveSyncDuration ? t((0,
                d.l9)(new Error, d.wM)) : null != (n = Array.isArray(e.attributes.playlist) && e.attributes.playlist.map(e=>e.chapters)) && n.length ? (0,
                j.T2)(n, t) : t()
            }
            );
            var D = n(2303)
              , $ = n(7411)
              , R = n(9888)
              , q = n(4742);
            let z = {
                removeItem(e) {}
            };
            try {
                z = window.localStorage || z
            } catch (e) {}
            const U = class {
                constructor(e, t) {
                    this.namespace = e,
                    this.items = t
                }
                getAllItems() {
                    return this.items.reduce((e,t)=>{
                        var n = z[this.namespace + "." + t];
                        return n && (e[t] = "captions" !== t ? (0,
                        R.serialize)(n) : JSON.parse(n)),
                        e
                    }
                    , {})
                }
                track(e) {
                    this.items.forEach(t=>{
                        e.on("change:" + t, (e,n)=>{
                            try {
                                "captions" === t && (n = JSON.stringify(n)),
                                z[this.namespace + "." + t] = n
                            } catch (e) {
                                q.Z.debug && console.error(e)
                            }
                        }
                        )
                    }
                    )
                }
                clear() {
                    this.items.forEach(e=>{
                        z.removeItem(this.namespace + "." + e)
                    }
                    )
                }
            }
            ;
            var H = n(7753)
              , V = n(9918)
              , t = n(328)
              , W = n(4225)
              , K = n(7683)
              , Q = n(4609)
              , X = n(5882);
            n(4671),
            n(9926);
            function J(e, t) {
                t && t.code && (t.sourceError && console.error(t.sourceError),
                console.error(d.rG.logMessage(t.code)))
            }
            function Y(e) {
                e && e.code && console.warn(d.rG.logMessage(e.code))
            }
            function te(e) {
                this._events = {},
                this.modelShim = new H.Z,
                this.modelShim._qoeItem = new $.Z,
                this.mediaShim = {},
                this.setup = new N(this.modelShim),
                this.currentContainer = this.originalContainer = e,
                this.apiQueue = new r.Z(this,["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "preload", "setAllowFullscreen", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "setPip", "requestPip", "addButton", "removeButton", "castToggle", "requestCast", "setMute", "setVolume", "setPlaybackRate", "addCues", "setCues", "getCues", "setPlaylistItem", "stopCasting", "getChapters", "getCurrentChapter", "setChapter", "resize", "setCaptions", "setControls"],()=>!0)
            }
            const ee = function(e, t) {
                if (!document.body.contains(e.currentContainer)) {
                    const t = document.getElementById(e.get("id"));
                    t && (e.currentContainer = t)
                }
                e.currentContainer.parentElement && e.currentContainer.parentElement.replaceChild(t, e.currentContainer),
                e.currentContainer = t
            }
              , ne = (Object.assign(te.prototype, {
                on: t.ZP.on,
                once: t.ZP.once,
                off: t.ZP.off,
                trigger: t.ZP.trigger,
                init(e, t) {
                    const n = this.modelShim
                      , r = new U("jwplayer",["volume", "mute", "captionLabel", "captions", "bandwidthEstimate", "bitrateSelection", "qualityLabel", "enableShortcuts"])
                      , o = null == r ? void 0 : r.getAllItems()
                      , s = (n.attributes = n.attributes || {},
                    Object.assign(this.mediaShim, V.L4),
                    e)
                      , a = (0,
                    i.ZP)(Object.assign({}, e), o);
                    a.id = t.id,
                    a.setupConfig = s,
                    Object.assign(n.attributes, a, V.bv),
                    n.getProviders = function() {
                        return new D.Z(a)
                    }
                    ,
                    n.setProvider = function() {}
                    ;
                    let l = (0,
                    K.Z)();
                    {
                        n.get("backgroundLoading") || (l = (0,
                        Q.Z)(l.getPrimedElement(), l));
                        const e = this.primeUi = new X.ZP((0,
                        X.GU)(this.originalContainer)).once("gesture", ()=>{
                            l.prime(),
                            this.preload(),
                            e.destroy()
                        }
                        )
                    }
                    return n.on("change:errorEvent", J),
                    this.setup.start(t).then(e=>{
                        var i = e.core;
                        if (!i)
                            throw (0,
                            d.l9)(null, d.y7);
                        if (this.setup) {
                            this.on(y.cM, Y),
                            e.warnings.forEach(e=>{
                                this.trigger(y.cM, e)
                            }
                            );
                            e = this.modelShim.clone();
                            if (e.error)
                                throw e.error;
                            var s = this.apiQueue.queue.slice(0)
                              , i = (this.apiQueue.destroy(),
                            Object.assign(this, i.prototype),
                            this.playerSetup(e, t, this.originalContainer, this._events, s, l),
                            this._model);
                            return n.off("change:errorEvent", J),
                            i.on("change:errorEvent", J),
                            r.track(i),
                            this.updatePlaylist(i.get("playlist"), i.get("feedData")).catch(e=>{
                                var t = e.code === d._M ? d.IB : d.xk;
                                throw (0,
                                d.l9)(e, t)
                            }
                            )
                        }
                    }
                    ).then(()=>{
                        this.setup && this.playerReady()
                    }
                    ).catch(e=>{
                        this.setup && function(e, t, n) {
                            Promise.resolve().then(()=>{
                                var r = (0,
                                d.Mm)(d.ud, d.nk, n)
                                  , i = e._model || e.modelShim
                                  , o = (r.message = r.message || i.get("localization").errors[r.key],
                                delete r.key,
                                i.get("contextual"));
                                if (!o) {
                                    const t = (0,
                                    W.Z)(e, r);
                                    W.Z.cloneIcon && t.querySelector(".jw-icon").appendChild(W.Z.cloneIcon("error")),
                                    ee(e, t)
                                }
                                i.set("errorEvent", r),
                                i.set("state", y.Vy),
                                e.trigger(y.HH, r),
                                o && t.remove()
                            }
                            )
                        }(this, t, e)
                    }
                    )
                },
                playerDestroy() {
                    this.destroy && this.destroy(),
                    this.apiQueue && this.apiQueue.destroy(),
                    this.setup && this.setup.destroy(),
                    this.primeUi && this.primeUi.destroy(),
                    this.currentContainer !== this.originalContainer && ee(this, this.originalContainer),
                    this.off(),
                    this._events = this._model = this.modelShim = this.apiQueue = this.primeUi = this.setup = null
                },
                getContainer() {
                    return this.currentContainer
                },
                get(e) {
                    if (this.modelShim)
                        return e in this.mediaShim ? this.mediaShim[e] : this.modelShim.get(e)
                },
                getItemQoe() {
                    return this.modelShim._qoeItem
                },
                getItemPromise: ()=>null,
                setItemCallback(e) {
                    this.modelShim && (this.modelShim.attributes.playlistItemCallback = e)
                },
                getConfig() {
                    return Object.assign({}, this.modelShim.attributes, this.mediaShim)
                },
                getCurrentCaptions() {
                    return this.get("captionsIndex")
                },
                getWidth() {
                    return this.get("containerWidth")
                },
                getHeight() {
                    return this.get("containerHeight")
                },
                getMute() {
                    return this.get("mute")
                },
                getProvider() {
                    return this.get("provider")
                },
                getState() {
                    return this.get("state")
                },
                getAbsolutePosition: ()=>null,
                getAudioTracks: ()=>null,
                getCaptionsList: ()=>null,
                getQualityLevels: ()=>null,
                getVisualQuality: ()=>null,
                getCurrentQuality: ()=>-1,
                getCurrentAudioTrack: ()=>-1,
                getSafeRegion: ()=>({
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }),
                isBeforeComplete: ()=>!1,
                isBeforePlay: ()=>!1,
                createInstream: ()=>null,
                skipAd() {},
                getMediaElement() {},
                attachMedia() {},
                detachMedia() {}
            }),
            te)
        }
        ,
        4446: (e,t,n)=>{
            "use strict";
            n.d(t, {
                A6: ()=>w,
                DD: ()=>d,
                EY: ()=>m,
                H4: ()=>O,
                IB: ()=>c,
                MD: ()=>C,
                Mm: ()=>A,
                Sp: ()=>x,
                T6: ()=>o,
                Y7: ()=>b,
                YQ: ()=>u,
                _M: ()=>g,
                aD: ()=>v,
                fU: ()=>a,
                l9: ()=>Z,
                nk: ()=>i,
                nm: ()=>_,
                o2: ()=>f,
                pJ: ()=>P,
                rG: ()=>T,
                tJ: ()=>h,
                ud: ()=>E,
                ul: ()=>j,
                wH: ()=>k,
                wM: ()=>y,
                xk: ()=>l,
                y4: ()=>p,
                y7: ()=>s,
                zO: ()=>S
            });
            var r = n(6042);
            const i = 1e5
              , o = 100001
              , s = 100002
              , a = 101e3
              , l = 102e3
              , c = 102700
              , u = 200001
              , d = 202e3
              , p = 104e3
              , h = 203e3
              , f = 203640
              , g = 203700
              , m = 204e3
              , y = 300100
              , v = 300200
              , b = 306e3
              , w = 308e3
              , k = 308640
              , j = "cantPlayVideo"
              , C = "badConnection"
              , P = "cantLoadPlayer"
              , S = "cantPlayInBrowser"
              , x = "liveStreamDown"
              , O = "protectedContent"
              , E = "technicalError";
            class T {
                constructor(e, t, n) {
                    this.code = (0,
                    r.qh)(t) ? t : 0,
                    this.sourceError = n || null,
                    e ? this.key = e : delete this.key
                }
                static logMessage(e) {
                    var t = e % 1e3
                      , n = Math.floor((e - t) / 1e3);
                    let r = e.toString();
                    return `JW Player ${299999 < e && e < 4e5 ? "Warning" : "Error"} ${e}. For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#` + (r = 400 <= t && t < 600 ? n + `400-${n}599` : r)
                }
            }
            const A = function(e, t, n) {
                return n instanceof T && n.code ? n : new T(e,t,n)
            }
              , Z = function(e, t) {
                var n = A(E, t, e);
                return n.code = (e && e instanceof T && e.code || 0) + t,
                n
            }
              , _ = function(e) {
                var {name: e, message: n} = e;
                switch (e) {
                case "AbortError":
                    return /pause/.test(n) ? 303213 : /load/.test(n) ? 303212 : 303210;
                case "NotAllowedError":
                    return 303220;
                case "NotSupportedError":
                    return 303230;
                default:
                    return 303200
                }
            }
        }
        ,
        6391: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>r
            });
            const r = []
        }
        ,
        7411: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>l
            });
            var r = n(5004);
            const i = window.performance || {
                timing: {}
            }
              , o = i.timing.navigationStart || (0,
            r.z)()
              , s = ("now"in i || (i.now = ()=>(0,
            r.z)() - o),
            ()=>o + i.now());
            const l = class {
                constructor() {
                    this.startTimes = {},
                    this.sum = {},
                    this.counts = {},
                    this.ticks = {}
                }
                start(e) {
                    this.startTimes[e] = s(),
                    this.counts[e] = this.counts[e] + 1 || 1
                }
                end(e) {
                    var t;
                    this.startTimes[e] && (t = s() - this.startTimes[e],
                    delete this.startTimes[e],
                    this.sum[e] = this.sum[e] + t || t)
                }
                dump() {
                    var n, e = Object.assign({}, this.sum);
                    for (const t in this.startTimes)
                        !function(e, t) {
                            if (null == e)
                                throw new TypeError("Cannot convert undefined or null to object");
                            return Object.prototype.hasOwnProperty.call(Object(e), t)
                        }(this.startTimes, t) || (n = s() - this.startTimes[t],
                        e[t] = e[t] + n || n);
                    return {
                        counts: Object.assign({}, this.counts),
                        sums: e,
                        events: Object.assign({}, this.ticks)
                    }
                }
                tick(e) {
                    this.ticks[e] = s()
                }
                clear(e) {
                    delete this.ticks[e]
                }
                between(e, t) {
                    return this.ticks[t] && this.ticks[e] ? this.ticks[t] - this.ticks[e] : null
                }
            }
        }
        ,
        4601: (e,t,n)=>{
            "use strict";
            n.d(t, {
                v: ()=>s,
                z: ()=>a
            });
            var r = n(2894)
              , i = n(8348);
            let o = null;
            const s = {}
              , a = function() {
                return o = o || (i.OS.tizenApp ? n.e(74).then(function(e) {
                    var t = n(3112).default;
                    return s.controls = t
                }
                .bind(null, n)).catch(function() {
                    (o = null,
                    r.Jt)(301133)()
                }) : n.e(716).then(function(e) {
                    var t = n(4646).default;
                    return s.controls = t
                }
                .bind(null, n)).catch(function() {
                    (o = null,
                    r.Jt)(301130)()
                }))
            }
        }
        ,
        8348: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                Browser: ()=>a,
                Features: ()=>c,
                OS: ()=>l
            });
            var r = n(2268);
            const i = (e,t)=>{
                e = e.exec(t);
                if (e && 1 < e.length)
                    return e[1]
            }
              , o = navigator.userAgent
              , s = ()=>{}
              , a = {
                get androidNative() {
                    return (0,
                    r.O7)()
                },
                get chrome() {
                    return (0,
                    r.i7)()
                },
                get edge() {
                    return (0,
                    r.un)()
                },
                get facebook() {
                    return (0,
                    r.DF)()
                },
                get firefox() {
                    return (0,
                    r.pZ)()
                },
                get ie() {
                    return (0,
                    r.w1)()
                },
                get msie() {
                    return (0,
                    r.A)()
                },
                get safari() {
                    return (0,
                    r.G6)()
                },
                get version() {
                    return ((e,t)=>{
                        let n, r, i, o;
                        if (e.chrome)
                            n = -1 !== t.indexOf("Chrome") ? t.substring(t.indexOf("Chrome") + 7) : t.substring(t.indexOf("CriOS") + 6);
                        else if (e.safari)
                            n = t.substring(t.indexOf("Version") + 8);
                        else if (e.firefox)
                            n = t.substring(t.indexOf("Firefox") + 8);
                        else if (e.edge) {
                            let e = t.indexOf("Edge");
                            -1 === e ? e = t.indexOf("Edg") + 4 : e += 5,
                            n = t.substring(e)
                        } else
                            e.ie && (-1 !== t.indexOf("rv:") ? n = t.substring(t.indexOf("rv:") + 3) : -1 !== t.indexOf("MSIE") && (n = t.substring(t.indexOf("MSIE") + 5)));
                        return n && (-1 !== (o = (n = -1 !== (o = (n = -1 !== (o = n.indexOf(";")) ? n.substring(0, o) : n).indexOf(" ")) ? n.substring(0, o) : n).indexOf(")")) && (n = n.substring(0, o)),
                        r = parseInt(n, 10),
                        i = parseInt(n.split(".")[1], 10)),
                        {
                            version: n,
                            major: r,
                            minor: i
                        }
                    }
                    )(this, o)
                }
            }
              , l = {
                get android() {
                    return (0,
                    r.Dt)()
                },
                get iOS() {
                    return (0,
                    r.gn)()
                },
                get mobile() {
                    return (0,
                    r.tq)()
                },
                get mac() {
                    return (0,
                    r.id)()
                },
                get iPad() {
                    return (0,
                    r.zc)()
                },
                get iPhone() {
                    return (0,
                    r.xb)()
                },
                get windows() {
                    return -1 < o.indexOf("Windows")
                },
                get tizen() {
                    return (0,
                    r.yS)()
                },
                get tizenApp() {
                    return (0,
                    r.Q6)()
                },
                get version() {
                    return ((e,t)=>{
                        let n, r, o;
                        if (e.windows)
                            switch (n = i(/Windows(?: NT|)? ([._\d]+)/, t),
                            n) {
                            case "6.1":
                                n = "7.0";
                                break;
                            case "6.2":
                                n = "8.0";
                                break;
                            case "6.3":
                                n = "8.1"
                            }
                        else
                            e.android ? n = i(/Android ([._\d]+)/, t) : e.iOS ? n = i(/OS ([._\d]+)/, t) : e.mac ? n = i(/Mac OS X ([._\d]+)/, t) : e.tizen && (n = i(/Tizen ([._\d]+)/, t));
                        if (n) {
                            r = parseInt(n, 10);
                            const e = n.split(/[._]/);
                            e && (o = parseInt(e[1], 10))
                        }
                        return {
                            version: n,
                            major: r,
                            minor: o
                        }
                    }
                    )(this, o)
                }
            }
              , c = {
                get flash() {
                    return (0,
                    r.NO)()
                },
                get flashVersion() {
                    return (0,
                    r.dI)()
                },
                get iframe() {
                    return (0,
                    r.cL)()
                },
                get passiveEvents() {
                    {
                        let e = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: ()=>e = !0
                            });
                            window.addEventListener("testPassive", s, t),
                            window.removeEventListener("testPassive", s, t)
                        } catch (e) {}
                        return e
                    }
                },
                get backgroundLoading() {
                    return !(l.iOS || a.safari || l.tizen)
                }
            }
        }
        ,
        1643: (e,t,n)=>{
            "use strict";
            n.d(t, {
                $_: ()=>C,
                $j: ()=>_,
                AQ: ()=>I,
                Ax: ()=>P,
                B1: ()=>m,
                Bs: ()=>be,
                Ew: ()=>D,
                FU: ()=>$,
                Gj: ()=>me,
                HH: ()=>U,
                Hy: ()=>re,
                Ib: ()=>he,
                Je: ()=>q,
                Jl: ()=>F,
                K5: ()=>v,
                Kb: ()=>r,
                Ms: ()=>T,
                NZ: ()=>Z,
                O1: ()=>J,
                Ow: ()=>ae,
                P: ()=>g,
                QF: ()=>pe,
                R2: ()=>G,
                RF: ()=>je,
                Rc: ()=>A,
                Rt: ()=>j,
                SL: ()=>fe,
                Sv: ()=>h,
                TJ: ()=>W,
                U3: ()=>b,
                UF: ()=>de,
                UW: ()=>ie,
                UZ: ()=>ee,
                V$: ()=>L,
                Vy: ()=>l,
                WE: ()=>S,
                Wp: ()=>d,
                Z_: ()=>ge,
                _5: ()=>s,
                _B: ()=>ce,
                aM: ()=>te,
                aQ: ()=>z,
                bc: ()=>i,
                cM: ()=>k,
                cq: ()=>R,
                cy: ()=>B,
                gO: ()=>se,
                gy: ()=>X,
                h7: ()=>we,
                ik: ()=>c,
                j0: ()=>le,
                jt: ()=>ue,
                k3: ()=>x,
                l5: ()=>ve,
                nQ: ()=>u,
                nv: ()=>p,
                oZ: ()=>K,
                ot: ()=>f,
                pi: ()=>N,
                pn: ()=>w,
                qG: ()=>ke,
                r0: ()=>a,
                rx: ()=>Y,
                s$: ()=>M,
                sF: ()=>oe,
                t6: ()=>Ce,
                tP: ()=>y,
                uL: ()=>O,
                uT: ()=>V,
                uc: ()=>H,
                ug: ()=>ne,
                wh: ()=>E,
                xQ: ()=>o,
                xf: ()=>ye,
                yH: ()=>Q
            });
            const r = "buffering"
              , i = "idle"
              , o = "complete"
              , s = "paused"
              , a = "playing"
              , l = "error"
              , c = "loading"
              , u = "stalled"
              , d = "drag"
              , p = "dragStart"
              , h = "dragEnd"
              , f = "click"
              , g = "doubleClick"
              , m = "over"
              , y = "move"
              , v = "enter"
              , b = "out"
              , w = l
              , k = "warning"
              , j = "adClick"
              , C = "mediaLoaded"
              , P = "adPause"
              , S = "adPlay"
              , x = "adSkipped"
              , O = "adTime"
              , E = "autostartNotAllowed"
              , T = o
              , A = "ready"
              , Z = "seek"
              , _ = "beforePlay"
              , M = "beforeComplete"
              , F = "bufferFull"
              , I = "absolutePositionReady"
              , B = "displayClick"
              , L = "playlistComplete"
              , N = "cast"
              , D = "mediaError"
              , $ = "firstFrame"
              , R = "playAttempt"
              , q = "playAttemptFailed"
              , z = "seeked"
              , U = "setupError"
              , H = "state"
              , V = "bufferChange"
              , G = "time"
              , W = "ratechange"
              , K = "mediaType"
              , Q = "volume"
              , X = "mute"
              , J = "metadataCueParsed"
              , Y = "meta"
              , ee = "levels"
              , te = "levelsChanged"
              , ne = "visualQuality"
              , re = "controls"
              , ie = "fullscreen"
              , oe = "resize"
              , se = "playlistItem"
              , ae = "playlist"
              , le = "audioTracks"
              , ce = "audioTrackChanged"
              , ue = "subtitlesTracks"
              , de = "subtitlesTrackChanged"
              , pe = "playbackRateChanged"
              , he = "logoClick"
              , fe = "captionsList"
              , ge = "captionsChanged"
              , me = "providerFirstFrame"
              , ye = "userAction"
              , ve = "instreamClick"
              , be = "breakpoint"
              , we = "fullscreenchange"
              , ke = "bandwidthEstimate"
              , je = "float"
              , Ce = "chapter"
        }
        ,
        9918: (e,t,n)=>{
            "use strict";
            n.d(t, {
                L4: ()=>i,
                OG: ()=>s,
                bv: ()=>r,
                ni: ()=>o
            });
            const r = {
                audioMode: !1,
                itemMeta: {},
                playbackRate: 1,
                playRejected: !1,
                state: n(1643).bc,
                itemReady: !1,
                controlsEnabled: !1
            }
              , i = {
                position: 0,
                duration: 0,
                buffer: 0,
                currentTime: 0
            }
              , o = 120
              , s = 25
        }
        ,
        7753: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>i
            });
            class i extends n(328).ZP {
                constructor() {
                    super(),
                    this.attributes = Object.create(null)
                }
                addAttributes(e) {
                    Object.keys(e).forEach(t=>{
                        this.add(t, e[t])
                    }
                    )
                }
                add(e, t) {
                    Object.defineProperty(this, e, {
                        get: ()=>this.attributes[e],
                        set: t=>{
                            this.set(e, t)
                        }
                        ,
                        enumerable: !1
                    }),
                    this.attributes[e] = t
                }
                get(e) {
                    return this.attributes[e]
                }
                set(e, t) {
                    var n;
                    this.attributes[e] !== t && (n = this.attributes[e],
                    this.attributes[e] = t,
                    this.trigger("change:" + e, this, t, n))
                }
                clone() {
                    var e = {}
                      , t = this.attributes;
                    if (t)
                        for (const n in t)
                            e[n] = t[n];
                    return e
                }
                change(e, t, n) {
                    this.on("change:" + e, t, n);
                    e = this.get(e);
                    return t.call(n, this, e, e),
                    this
                }
            }
        }
        ,
        7941: (e,t,n)=>{
            "use strict";
            n.d(t, {
                dZ: ()=>o,
                my: ()=>a,
                qk: ()=>s,
                r1: ()=>i
            });
            var r = n(2957);
            const i = e=>{
                let t = "";
                return e && (e.localName ? t = e.localName : e.baseName && (t = e.baseName)),
                t
            }
              , o = e=>{
                let t = "";
                return e && (e.textContent ? t = (0,
                r.fy)(e.textContent) : e.text && (t = (0,
                r.fy)(e.text))),
                t
            }
              , s = (e,t)=>e.childNodes[t]
              , a = e=>e.childNodes ? e.childNodes.length : 0
        }
        ,
        6769: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>function(e) {
                    var t = [];
                    t.feedData = {};
                    for (let n = 0; n < (0,
                    r.my)(e); n++) {
                        var i = (0,
                        r.qk)(e, n);
                        if ("channel" === (0,
                        r.r1)(i).toLowerCase())
                            for (let e = 0; e < (0,
                            r.my)(i); e++) {
                                const n = (0,
                                r.qk)(i, e)
                                  , o = (0,
                                r.r1)(n).toLowerCase();
                                "item" === o ? t.push(p(n)) : o && (t.feedData[o] = (0,
                                r.dZ)(n))
                            }
                    }
                    return t
                }
            });
            var r = n(7941)
              , i = n(2957);
            function a(e, t) {
                const n = [];
                for (let l = 0; l < (0,
                r.my)(e); l++) {
                    var c = e.childNodes[l];
                    if ("media" === c.prefix && (0,
                    r.r1)(c))
                        switch ((0,
                        r.r1)(c).toLowerCase()) {
                        case "content":
                            if ((0,
                            i.Dc)(c, "duration") && (t.duration = (0,
                            i.m9)((0,
                            i.Dc)(c, "duration"))),
                            (0,
                            i.Dc)(c, "url")) {
                                t.sources || (t.sources = []);
                                const e = {
                                    file: (0,
                                    i.Dc)(c, "url"),
                                    type: (0,
                                    i.Dc)(c, "type"),
                                    width: (0,
                                    i.Dc)(c, "width"),
                                    label: (0,
                                    i.Dc)(c, "label")
                                }
                                  , n = (e=>{
                                    var t = [];
                                    for (let n = 0; n < (0,
                                    r.my)(e); n++) {
                                        var i = e.childNodes[n];
                                        "jwplayer" === i.prefix && "mediatypes" === (0,
                                        r.r1)(i).toLowerCase() && t.push((0,
                                        r.dZ)(i))
                                    }
                                    return t
                                }
                                )(c);
                                n.length && (e.mediaTypes = n),
                                t.sources.push(e)
                            }
                            0 < (0,
                            r.my)(c) && (t = a(c, t));
                            break;
                        case "title":
                            t.title = (0,
                            r.dZ)(c);
                            break;
                        case "description":
                            t.description = (0,
                            r.dZ)(c);
                            break;
                        case "guid":
                            t.mediaid = (0,
                            r.dZ)(c);
                            break;
                        case "thumbnail":
                            t.image || (t.image = (0,
                            i.Dc)(c, "url"));
                            break;
                        case "group":
                            a(c, t);
                            break;
                        case "subtitle":
                            {
                                const e = {
                                    file: (0,
                                    i.Dc)(c, "url"),
                                    kind: "captions"
                                };
                                0 < (0,
                                i.Dc)(c, "lang").length && (e.label = (e=>{
                                    var t = {
                                        zh: "Chinese",
                                        nl: "Dutch",
                                        en: "English",
                                        fr: "French",
                                        de: "German",
                                        it: "Italian",
                                        ja: "Japanese",
                                        pt: "Portuguese",
                                        ru: "Russian",
                                        es: "Spanish"
                                    };
                                    return t[e] || e
                                }
                                )((0,
                                i.Dc)(c, "lang"))),
                                n.push(e);
                                break
                            }
                        }
                }
                t.tracks || (t.tracks = []);
                for (let e = 0; e < n.length; e++)
                    t.tracks.push(n[e]);
                return t
            }
            const l = a;
            var c = n(9888);
            var d = n(393);
            const p = e=>{
                var t = {};
                for (let n = 0; n < e.childNodes.length; n++) {
                    var o = e.childNodes[n]
                      , s = (0,
                    r.r1)(o);
                    if (s)
                        switch (s.toLowerCase()) {
                        case "enclosure":
                            t.file = (0,
                            i.Dc)(o, "url");
                            break;
                        case "title":
                            t.title = (0,
                            r.dZ)(o);
                            break;
                        case "guid":
                            t.mediaid = (0,
                            r.dZ)(o);
                            break;
                        case "pubdate":
                            t.date = (0,
                            r.dZ)(o);
                            break;
                        case "description":
                            t.description = (0,
                            r.dZ)(o);
                            break;
                        case "link":
                            t.link = (0,
                            r.dZ)(o);
                            break;
                        case "category":
                            t.tags ? t.tags += (0,
                            r.dZ)(o) : t.tags = (0,
                            r.dZ)(o)
                        }
                }
                return new d.Z(function(e, t) {
                    var n = "default"
                      , o = "label"
                      , s = "file"
                      , a = []
                      , l = []
                      , u = t;
                    for (let u = 0; u < e.childNodes.length; u++) {
                        var d = e.childNodes[u];
                        if ("jwplayer" === d.prefix) {
                            const e = (0,
                            r.r1)(d);
                            "source" === e ? (delete t.sources,
                            a.push({
                                file: (0,
                                i.Dc)(d, s),
                                default: (0,
                                i.Dc)(d, n),
                                label: (0,
                                i.Dc)(d, o),
                                type: (0,
                                i.Dc)(d, "type")
                            })) : "track" === e ? (delete t.tracks,
                            l.push({
                                file: (0,
                                i.Dc)(d, s),
                                default: (0,
                                i.Dc)(d, n),
                                kind: (0,
                                i.Dc)(d, "kind"),
                                label: (0,
                                i.Dc)(d, o)
                            })) : (t[e] = (0,
                            c.serialize)((0,
                            r.dZ)(d)),
                            "file" === e && t.sources && delete t.sources)
                        }
                        t[s] || (t[s] = t.link)
                    }
                    if (a.length) {
                        t.sources = [];
                        for (let e = 0; e < a.length; e++) {
                            const t = a[e];
                            0 < t.file.length && (t[n] = "true" === a[e][n],
                            t.label || delete t.label,
                            u.sources.push(t))
                        }
                    }
                    if (l.length) {
                        t.tracks = [];
                        for (let e = 0; e < l.length; e++) {
                            const t = l[e];
                            t.file && 0 < t.file.length && (t[n] = "true" === l[e][n],
                            t.kind = l[e].kind.length ? l[e].kind : "captions",
                            t.label || delete t.label,
                            u.tracks.push(t))
                        }
                    }
                    return u
                }(e, l(e, t)))
            }
        }
        ,
        2557: (e,t,n)=>{
            "use strict";
            n.d(t, {
                t: ()=>r,
                u: ()=>i
            });
            class r {
                constructor(e, t) {
                    this.defaultLanguage = e,
                    this.timestamps = t
                }
            }
            class i {
                constructor({title: e={}, group: t, time: n, image: r}) {
                    this.title = {},
                    this.time = n,
                    this.group = t,
                    this.image = r,
                    Object.keys(e).forEach(t=>{
                        var n = e[t];
                        this.addTitle(t, n)
                    }
                    )
                }
                addTitle(e, t) {
                    this.title[e] = t
                }
            }
        }
        ,
        393: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>l
            });
            var r = n(6053);
            function o(e) {
                var n;
                if (e && e.file)
                    return (e = Object.assign({}, {
                        kind: "captions",
                        default: !1
                    }, e)).kind = (n = e.kind,
                    -1 !== i.indexOf(n) ? e.kind : "captions"),
                    e.default = Boolean(e.default),
                    e
            }
            const i = ["captions", "metadata", "thumbnails", "chapters"];
            var s = n(9918);
            const a = Array.isArray
              , l = function(e) {
                a((e = e || {}).tracks) || delete e.tracks;
                var t = Object.assign({}, {
                    sources: [],
                    tracks: [],
                    minDvrWindow: s.ni
                }, e);
                t.sources !== Object(t.sources) || a(t.sources) || (t.sources = [(0,
                r.Z)(t.sources)]),
                a(t.sources) && 0 !== t.sources.length || (e.levels ? t.sources = e.levels : t.sources = [(0,
                r.Z)(e)]);
                for (let e = 0; e < t.sources.length; e++) {
                    var i, n = t.sources[e];
                    n && (i = n.default,
                    n.default = !!i && "true" === i.toString(),
                    t.sources[e].label || (t.sources[e].label = e.toString()),
                    t.sources[e] = (0,
                    r.Z)(t.sources[e]))
                }
                return t.sources = t.sources.filter(Boolean),
                a(t.tracks) || (t.tracks = []),
                a(t.captions) && (t.tracks = t.tracks.concat(t.captions),
                delete t.captions),
                t.tracks = t.tracks.map(o).filter(Boolean),
                t
            }
        }
        ,
        7263: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>c
            });
            var r = n(1643)
              , i = n(7941)
              , o = n(6769)
              , s = n(6886)
              , a = n(328)
              , l = n(4446);
            const c = function() {
                function n(n) {
                    try {
                        const t = n.responseXML ? n.responseXML.childNodes : null;
                        let s, a = null;
                        if (t) {
                            for (let e = 0; e < t.length && 8 === (a = t[e]).nodeType; e++)
                                ;
                            if ((a = a && "xml" === (0,
                            i.r1)(a) ? a.nextSibling : a) && "rss" === (0,
                            i.r1)(a)) {
                                const e = (0,
                                o.Z)(a);
                                s = Object.assign({
                                    playlist: e
                                }, e.feedData)
                            }
                        }
                        if (!s)
                            try {
                                const e = JSON.parse(n.responseText);
                                if (Array.isArray(e))
                                    s = {
                                        playlist: e
                                    };
                                else {
                                    if (!Array.isArray(e.playlist))
                                        throw Error("Playlist is not an array");
                                    s = e
                                }
                            } catch (e) {
                                throw new l.rG(l.ul,621,e)
                            }
                        e.trigger(r.Ow, s)
                    } catch (e) {
                        t(e)
                    }
                }
                const e = Object.assign(this, a.ZP)
                  , t = function(t) {
                    t instanceof l.rG && !t.code && (t = new l.rG(l.ul,0)),
                    e.trigger(r.pn, t)
                };
                this.load = function(e) {
                    (0,
                    s.h)(e, n, (e,n,r,i)=>{
                        t(i)
                    }
                    )
                }
                ,
                this.destroy = function() {
                    this.off()
                }
            }
        }
        ,
        8320: (e,t,n)=>{
            "use strict";
            n.d(t, {
                ZP: ()=>v,
                s7: ()=>f,
                T5: ()=>y,
                YF: ()=>h,
                _: ()=>g,
                bx: ()=>m
            });
            const r = {
                none: !0,
                metadata: !0,
                auto: !0
            }
              , i = (e,t)=>r[e] ? e : r[t] ? t : "metadata";
            var o = n(393)
              , s = n(6053)
              , a = n(2303)
              , l = n(4446);
            const c = (e,t)=>void 0 === e ? t : e
              , u = (e,t,n)=>{
                n in t && (e[n] = t[n])
            }
              , d = (e,t)=>{
                const n = t["attributes"]
                  , {sources: r, allSources: o, preload: a, drm: l} = e
                  , d = c(e.withCredentials, n.withCredentials);
                return (o || r).map(function(t) {
                    if (t !== Object(t))
                        return null;
                    u(t, n, "androidhls"),
                    u(t, n, "hlsjsdefault"),
                    u(t, n, "safarihlsjs"),
                    ((e,t,n)=>{
                        e.liveSyncDuration || (t = t.liveSyncDuration ? t : n,
                        u(e, t, "liveSyncDuration"))
                    }
                    )(t, e, n),
                    u(t, n, "_hlsjsProgressive"),
                    t.preload = i(t.preload, a);
                    var r = t.drm || l || n.drm
                      , r = (r && (t.drm = r),
                    c(t.withCredentials, d));
                    return void 0 !== r && (t.withCredentials = r),
                    (0,
                    s.Z)(t)
                }).filter(Boolean)
            }
              , p = (e,t)=>{
                var n = ((e,t)=>{
                    for (let n = 0; n < e.length; n++) {
                        var r = e[n]
                          , i = t.choose(r)["providerToCheck"];
                        if (i)
                            return {
                                type: r.type,
                                provider: i
                            }
                    }
                    return null
                }
                )(e, t = t && t.choose ? t : new a.Z);
                if (!n)
                    return [];
                const r = n.provider
                  , i = n.type;
                return e.filter(function(e) {
                    return e.type === i && t.providerSupports(r, e)
                })
            }
              , h = (e,t,n)=>{
                var r = e.getProviders()
                  , o = e.get("preload")
                  , s = e.get("jwStart")
                  , a = Object.assign({}, t);
                if (a.preload = i(t.preload, o),
                a.allSources = d(a, e),
                a.sources = p(a.allSources, r),
                a.sources.length)
                    return a.file = a.sources[0].file,
                    a.feedData = n,
                    s && -1 !== s && e.get("generateSEOMetadata") && (a.starttime = s),
                    (e=>{
                        var t = e.sources[0].liveSyncDuration;
                        return t && (e.liveSyncDuration = e.dvrSeekLimit = t),
                        e
                    }
                    )(a)
            }
              , f = (e,t,n)=>{
                const r = Object.assign({}, n);
                return delete r.playlist,
                e.map(e=>h(t, e, r)).filter(Boolean)
            }
              , g = e=>{
                if (!Array.isArray(e) || 0 === e.length)
                    throw new l.rG(l.ul,630)
            }
              , m = (e,t)=>{
                let n = (parseInt(e, 10) || 0) % t;
                return n < 0 && (n += t),
                n
            }
              , y = (e,t)=>p(d(e, t), t.getProviders())
              , v = function(e) {
                return (Array.isArray(e) ? e : [e]).map(o.Z)
            }
        }
        ,
        6053: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>o
            });
            var r = n(7034)
              , i = n(2957);
            const o = function(e) {
                if (e && e.file) {
                    const t = Object.assign({}, {
                        default: !1,
                        type: ""
                    }, e);
                    t.file = (0,
                    i.fy)("" + t.file);
                    var e = /^[^/]+\/(?:x-)?([^/]+)$/
                      , o = t.type;
                    if (e.test(o) && (t.mimeType = o,
                    t.type = o.replace(e, "$1")),
                    (0,
                    r.isYouTube)(t.file) ? t.type = "youtube" : (0,
                    r.isRtmp)(t.file) ? t.type = "rtmp" : t.type || (t.type = (0,
                    i.AO)(t.file)),
                    t.type) {
                        switch (t.type) {
                        case "m3u8":
                        case "vnd.apple.mpegurl":
                            t.type = "hls";
                            break;
                        case "dash+xml":
                            t.type = "dash";
                            break;
                        case "m4a":
                            t.type = "aac";
                            break;
                        case "smil":
                            t.type = "rtmp"
                        }
                        return Object.keys(t).forEach(function(e) {
                            "" === t[e] && delete t[e]
                        }),
                        t
                    }
                }
            }
        }
        ,
        4101: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>u
            });
            var r = n(676)
              , i = n(9888)
              , o = n(2957)
              , s = n(4446)
              , a = n(3487);
            function l(e) {
                var t, n;
                if ("string" == typeof e)
                    return 0 < (t = (e = e.split("?")[0]).indexOf("://")) ? 0 : (n = e.indexOf("/"),
                    e = (0,
                    o.AO)(e),
                    !(t < 0 && n < 0) || e && isNaN(e) ? 1 : 2)
            }
            function c(e) {
                this.url = e,
                this.promise_ = null
            }
            Object.defineProperties(c.prototype, {
                promise: {
                    get() {
                        return this.load()
                    },
                    set() {}
                }
            }),
            Object.assign(c.prototype, {
                load() {
                    let e = this.promise_;
                    if (!e) {
                        if (2 === l(this.url))
                            return Promise.resolve(this);
                        var t = new r.ZP((e=>{
                            switch (l(e)) {
                            case 0:
                                return e;
                            case 1:
                                return (0,
                                i.getAbsolutePath)(e, window.location.href)
                            }
                        }
                        )(this.url));
                        this.loader = t,
                        e = t.load().then(()=>this),
                        this.promise_ = e
                    }
                    return e
                },
                registerPlugin(e, t, n) {
                    this.name = e,
                    this.target = t,
                    this.js = n
                },
                getNewInstance(e, t, n) {
                    var r = this.js;
                    if ("function" != typeof r)
                        throw new s.rG(null,(0,
                        a.bX)(this.url) + 100);
                    const i = new r(e,t,n);
                    return i.addToPlayer = function() {
                        var e = this.getContainer().querySelector(".jw-overlays");
                        e && (n.left = e.style.left,
                        n.top = e.style.top,
                        e.appendChild(n))
                    }
                    ,
                    i.resizeHandler = function() {
                        var e = this.getContainer().querySelector(".jw-overlays");
                        e && i.resize(e.clientWidth, e.clientHeight)
                    }
                    ,
                    i
                }
            });
            const u = c
        }
        ,
        1241: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>function(e, t) {
                    var n = e.get("plugins");
                    return window.jwplayerPluginJsonp = u,
                    (e.pluginLoader = e.pluginLoader || new o).load(t, c, n, e).then(t=>{
                        if (!e.attributes._destroyed)
                            return delete window.jwplayerPluginJsonp,
                            t
                    }
                    )
                }
                ,
                f: ()=>u
            });
            var r = n(4446)
              , i = n(3487);
            const o = function() {
                this.load = function(e, t, n, o) {
                    return n && "object" == typeof n ? Promise.all(Object.keys(n).filter(e=>e).map(s=>{
                        const a = n[s];
                        return t.setupPlugin(s).then(t=>{
                            if (!o.attributes._destroyed)
                                return (0,
                                i.MK)(t, a, e)
                        }
                        ).catch(e=>(t.removePlugin(s),
                        e.code ? e : new r.rG(null,(0,
                        i.bX)(s),e)))
                    }
                    )) : Promise.resolve()
                }
            };
            var s = n(4101)
              , a = n(5499);
            const l = {}
              , c = new class {
                setupPlugin(e) {
                    var t = this.getPlugin(e);
                    return t ? (t.url !== e && (0,
                    a.c)(`JW Plugin "${(0,
                    i.Nq)(e)}" already loaded from "${t.url}". Ignoring "${e}."`),
                    t.promise) : this.addPlugin(e).load()
                }
                addPlugin(e) {
                    var t = (0,
                    i.Nq)(e);
                    let n = l[t];
                    return n || (n = new s.Z(e),
                    l[t] = n),
                    n
                }
                getPlugin(e) {
                    return l[(0,
                    i.Nq)(e)]
                }
                removePlugin(e) {
                    delete l[(0,
                    i.Nq)(e)]
                }
                getPlugins() {
                    return l
                }
            }
              , u = function(e, t, n) {
                var r = c.addPlugin(e);
                r.js || r.registerPlugin(e, t, n)
            }
        }
        ,
        7164: (e,t,n)=>{
            "use strict";
            n.d(t, {
                MK: ()=>s,
                Nq: ()=>i,
                bX: ()=>o
            });
            var r = n(5950);
            const i = function(e) {
                var t = /\/((.(?!\/))+?)\.js/i.exec(e)
                  , t = (null == t ? void 0 : t[1]) || e;
                return t && "jwpsrv-dnt" === t ? "jwpsrv" : t
            }
              , o = e=>305e3
              , s = (e,t,n)=>{
                var i = e.name
                  , t = Object.assign({}, t, (0,
                r.vl)(e.url))
                  , s = document.createElement("div")
                  , e = (s.id = n.id + "_" + i,
                s.className = "jw-plugin jw-reset",
                e.getNewInstance(n, t, s));
                return n.addPlugin(i, e),
                e
            }
        }
        ,
        7683: (e,t,n)=>{
            "use strict";
            n.d(t, {
                V: ()=>o,
                Z: ()=>function() {
                    const e = r.Jx
                      , t = []
                      , n = [];
                    for (let r = 0; r < e; r++) {
                        const e = o();
                        t.push(e),
                        n.push(e),
                        i(e)
                    }
                    const s = n.shift()
                      , a = n.shift();
                    let l = !1;
                    return {
                        primed: ()=>l,
                        prime() {
                            t.forEach(i),
                            l = !0
                        },
                        played() {
                            l = !0
                        },
                        getPrimedElement: ()=>n.shift() || null,
                        getAdElement: ()=>s,
                        getTestElement: ()=>a,
                        clean(e) {
                            if (e.src) {
                                e.removeAttribute("src");
                                try {
                                    e.load()
                                } catch (e) {}
                            }
                        },
                        recycle(e) {
                            e && !n.some(t=>t === e) && (this.clean(e),
                            n.push(e))
                        },
                        syncVolume(e) {
                            const n = Math.min(Math.max(0, e / 100), 1);
                            t.forEach(e=>{
                                e.volume = n
                            }
                            )
                        },
                        syncMute(e) {
                            t.forEach(t=>{
                                t.muted = e
                            }
                            )
                        }
                    }
                }
            });
            var r = n(658);
            const i = e=>{
                e.src || e.load()
            }
              , o = e=>{
                const t = document.createElement("video");
                return t.className = "jw-video jw-reset",
                t.setAttribute("tabindex", "-1"),
                t.setAttribute("disableRemotePlayback", ""),
                t.setAttribute("webkit-playsinline", ""),
                t.setAttribute("playsinline", ""),
                e && Object.keys(e).forEach(n=>{
                    t.setAttribute(n, e[n])
                }
                ),
                t
            }
        }
        ,
        658: (e,t,n)=>{
            "use strict";
            n.d(t, {
                HB: ()=>o,
                Jx: ()=>r,
                l_: ()=>i
            });
            const r = 4
              , i = 5
              , o = 1
        }
        ,
        4609: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>function(e, t) {
                    return Object.assign({}, t, {
                        prime() {
                            e.src || e.load()
                        },
                        getPrimedElement: ()=>e,
                        clean() {
                            t.clean(e)
                        },
                        recycle() {
                            t.clean(e)
                        }
                    })
                }
            })
        }
        ,
        6528: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>l
            });
            var r = n(1643)
              , i = n(1384);
            function o() {}
            const s = ()=>!1
              , a = {
                name: "default"
            }
              , l = {
                supports: s,
                play: o,
                pause: o,
                preload: o,
                load: o,
                stop: o,
                volume: o,
                mute: o,
                seek: o,
                resize: o,
                remove: o,
                destroy: o,
                setVisibility: o,
                setFullscreen(e) {
                    return (0,
                    i.CX)(this, e)
                },
                getFullscreen: s,
                supportsFullscreen: s,
                getContainer: o,
                setContainer: o,
                getName: ()=>a,
                getQualityLevels: o,
                getCurrentQuality: o,
                setCurrentQuality: o,
                getAudioTracks: o,
                getCurrentAudioTrack: o,
                setCurrentAudioTrack: o,
                getSeekRange() {
                    return {
                        start: 0,
                        end: this.getDuration()
                    }
                },
                setPlaybackRate: o,
                getPlaybackRate: ()=>1,
                getBandwidthEstimate: ()=>null,
                getLiveLatency: ()=>null,
                attachMedia: o,
                detachMedia: o,
                init: o,
                setState(e) {
                    this.state = e,
                    this.trigger(r.uc, {
                        newstate: e
                    })
                },
                sendMediaType(e) {
                    var {type: e, mimeType: n} = e[0]
                      , e = "aac" === e || "mp3" === e || "mpeg" === e || n && 0 === n.indexOf("audio/");
                    this.trigger(r.oZ, {
                        mediaType: e ? "audio" : "video"
                    })
                },
                getDuration: ()=>0,
                trigger: o
            }
        }
        ,
        1628: (e,t,n)=>{
            "use strict";
            n.d(t, {
                V: ()=>i
            });
            var r = n(8348);
            const i = e=>"hls" === e.type && r.OS.android ? !1 !== e.androidhls && !r.Browser.firefox && 4.4 <= parseFloat(r.OS.version.version || "0") : null
        }
        ,
        12: (e,t,n)=>{
            "use strict";
            n.d(t, {
                U: ()=>r
            });
            const r = {}
        }
        ,
        670: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>function(e) {
                    var t = e.getName().name;
                    if (!r.U[t]) {
                        if (!(0,
                        s.sE)(i.B, (0,
                        s.wB)({
                            name: t
                        }))) {
                            if (!(0,
                            s.mf)(e.supports))
                                throw new Error("Tried to register a provider with an invalid object");
                            i.B.unshift({
                                name: t,
                                supports: e.supports
                            })
                        }
                        (0,
                        s.ce)(e.prototype, o.Z),
                        r.U[t] = e
                    }
                }
            });
            var r = n(12)
              , i = n(2963)
              , o = n(6528)
              , s = n(6042);
            n(328)
        }
        ,
        6593: (e,t,n)=>{
            "use strict";
            n.d(t, {
                B: ()=>l,
                H: ()=>a
            });
            var r = n(1628)
              , i = n(7034)
              , o = n(9025);
            const s = {
                aac: "audio/mp4",
                mp4: "video/mp4",
                f4v: "video/mp4",
                m4v: "video/mp4",
                mov: "video/mp4",
                mp3: "audio/mpeg",
                mpeg: "audio/mpeg",
                ogv: "video/ogg",
                ogg: "video/ogg",
                oga: "video/ogg",
                vorbis: "video/ogg",
                webm: "video/webm",
                f4a: "video/aac",
                m3u8: "application/vnd.apple.mpegurl",
                m3u: "application/vnd.apple.mpegurl",
                hls: "application/vnd.apple.mpegurl"
            }
              , a = e=>{
                if (!o.Z || !o.Z.canPlayType)
                    return !1;
                if (!1 === (0,
                r.V)(e))
                    return !1;
                var t = e.file
                  , n = e.type;
                if ((0,
                i.isRtmp)(t, n))
                    return !1;
                let a = e.mimeType || s[n];
                return !!a && (null != (t = e.mediaTypes) && t.length && (a = [a].concat(t.slice()).join("; ")),
                Boolean(o.Z.canPlayType(a)))
            }
              , l = [{
                name: "html5",
                supports: a
            }]
        }
        ,
        1384: (e,t,n)=>{
            "use strict";
            n.d(t, {
                CX: ()=>l,
                IP: ()=>d,
                If: ()=>a,
                Nm: ()=>u
            });
            var r = n(1643);
            let i, o, s = !1;
            function c(e, t, n) {
                s = n,
                e.trigger(r.h7, {
                    target: t.target,
                    jwstate: n
                })
            }
            const a = ()=>s
              , l = function(e, t) {
                if (t = Boolean(t)) {
                    try {
                        const t = e.video.webkitEnterFullscreen || e.video.webkitEnterFullScreen;
                        t && t.apply(e.video)
                    } catch (e) {
                        return !1
                    }
                    return e.getFullscreen()
                }
                var n = e.video.webkitExitFullscreen || e.video.webkitExitFullScreen;
                return n && n.apply(e.video),
                t
            }
              , u = function(e, t) {
                i = t=>c(e, t, !0),
                o = t=>c(e, t, !1),
                t.addEventListener("webkitbeginfullscreen", i),
                t.addEventListener("webkitendfullscreen", o)
            }
              , d = e=>{
                e.removeEventListener("webkitbeginfullscreen", i),
                e.removeEventListener("webkitendfullscreen", o)
            }
        }
        ,
        6875: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>r
            });
            const r = "hidden"in document ? function() {
                return !document.hidden
            }
            : "webkitHidden"in document ? function() {
                return !document.webkitHidden
            }
            : function() {
                return !0
            }
        }
        ,
        6886: (e,t,n)=>{
            "use strict";
            n.d(t, {
                E: ()=>a,
                h: ()=>p
            });
            var r = n(9888)
              , i = n(7034)
              , o = n(4446);
            function s() {}
            const a = e=>{
                e.onload = null,
                e.onprogress = null,
                e.onreadystatechange = null,
                e.onerror = null,
                "abort"in e && e.abort()
            }
              , l = (e,t,n,r)=>{
                e.onerror(t, e.url, e.xhr, new o.rG(t,n,r))
            }
              , c = (e,t,n)=>{
                var r = t.documentElement;
                if (!n.requireValidXML || "parsererror" !== r.nodeName && !r.getElementsByTagName("parsererror").length)
                    return e.responseXML || (e = Object.assign({}, e, {
                        responseXML: t
                    })),
                    n.oncomplete(e);
                l(n, o.ul, 601)
            }
              , u = e=>function(t) {
                var n = t.currentTarget || e.xhr;
                if (clearTimeout(e.timeoutId),
                e.responseType) {
                    if ("json" === e.responseType)
                        return ((e,t)=>{
                            if (!e.response || "string" == typeof e.response && '"' !== e.responseText.substr(1))
                                try {
                                    e = Object.assign({}, e, {
                                        response: JSON.parse(e.responseText)
                                    })
                                } catch (e) {
                                    return void l(t, o.ul, 611, e)
                                }
                            return t.oncomplete(e)
                        }
                        )(n, e)
                } else {
                    let t, s = n.responseXML;
                    if (s)
                        try {
                            t = s.firstChild
                        } catch (e) {}
                    if (s && t)
                        return c(n, s, e);
                    if (e.useDomParser && n.responseText && !s && null != (s = (0,
                    r.parseXML)(n.responseText)) && s.firstChild)
                        return c(n, s, e);
                    if (e.requireValidXML)
                        return void l(e, o.ul, 602)
                }
                e.oncomplete(n)
            }
            ;
            let d;
            const p = (e,t,n,r)=>{
                let p;
                e === Object(e) && (e = (r = e).url);
                const h = Object.assign({
                    xhr: null,
                    url: e,
                    withCredentials: !1,
                    retryWithoutCredentials: !1,
                    timeout: 6e4,
                    timeoutId: -1,
                    oncomplete: t || s,
                    onerror: n || s,
                    mimeType: r && !r.responseType ? "text/xml" : "",
                    requireValidXML: !1,
                    responseType: null != r && r.plainText ? "text" : "",
                    useDomParser: !1,
                    requestFilter: null
                }, r)
                  , f = d("Error loading file", h);
                if ("XMLHttpRequest"in window) {
                    if (p = h.xhr = h.xhr || new window.XMLHttpRequest,
                    "function" == typeof h.requestFilter) {
                        let t;
                        try {
                            t = h.requestFilter({
                                url: e,
                                xhr: p
                            })
                        } catch (e) {
                            return f(e, 5),
                            p
                        }
                        t && "open"in t && "send"in t && (p = h.xhr = t)
                    }
                    p.onreadystatechange = (e=>function(t) {
                        var n = t.currentTarget || e.xhr;
                        if (4 === n.readyState) {
                            clearTimeout(e.timeoutId);
                            n = n.status;
                            if (!(400 <= n))
                                return 200 === n ? u(e)(t) : void (0 === n && (0,
                                i.isFileProtocol)() && !/^[a-z][a-z0-9+.-]*:/.test(e.url) && l(e, o.ul, 7));
                            l(e, o.ul, n < 600 ? n : 6)
                        }
                    }
                    )(h),
                    p.onerror = f,
                    "overrideMimeType"in p ? h.mimeType && p.overrideMimeType(h.mimeType) : h.useDomParser = !0;
                    try {
                        e = e.replace(/#.*$/, ""),
                        p.open("GET", e, !0)
                    } catch (e) {
                        return f(e, 3),
                        p
                    }
                    if (h.responseType)
                        try {
                            p.responseType = h.responseType
                        } catch (e) {}
                    h.timeout && (h.timeoutId = setTimeout(function() {
                        a(p),
                        l(h, o.ud, 1)
                    }, h.timeout),
                    p.onabort = function() {
                        clearTimeout(h.timeoutId)
                    }
                    );
                    try {
                        h.withCredentials && "withCredentials"in p && (p.withCredentials = !0),
                        p.send()
                    } catch (e) {
                        f(e, 4)
                    }
                    return p
                }
                l(h, o.ud, 2)
            }
            ;
            d = (e,t)=>function(e, n) {
                var r = e.currentTarget || t.xhr;
                if (clearTimeout(t.timeoutId),
                t.retryWithoutCredentials && t.xhr.withCredentials) {
                    a(r);
                    const e = Object.assign({}, t, {
                        xhr: null,
                        withCredentials: !1,
                        retryWithoutCredentials: !1
                    });
                    p(e)
                } else
                    !n && 400 <= r.status && r.status < 600 && (n = r.status),
                    l(t, n ? o.ul : o.ud, n || 6, e)
            }
        }
        ,
        328: (e,t,n)=>{
            "use strict";
            n.d(t, {
                IH: ()=>c,
                S1: ()=>u,
                X$: ()=>d,
                ZP: ()=>a,
                on: ()=>l,
                wj: ()=>p
            });
            var r = function(e, t) {
                if (null == e)
                    throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(e), t)
            };
            const i = (e,t,n,r)=>{
                let i = -1;
                const o = e.length;
                for (; ++i < o; ) {
                    const o = e[i];
                    if (r)
                        try {
                            o.callback.apply(o.context || n, t)
                        } catch (e) {
                            console.log(`Error in "${r}" event handler:`, e)
                        }
                    else
                        o.callback.apply(o.context || n, t)
                }
            }
              , o = /\s+/
              , s = (e,t,n,i)=>{
                if (n) {
                    if ("object" == typeof n) {
                        for (const o in n)
                            r(n, o) && e[t].apply(e, [o, n[o]].concat(i));
                        return !1
                    }
                    if (o.test(n)) {
                        const r = n.split(o);
                        for (let n = 0, o = r.length; n < o; n++)
                            e[t].apply(e, [r[n]].concat(i));
                        return !1
                    }
                }
                return !0
            }
            ;
            class a {
                on(e, t, n) {
                    var r;
                    return s(this, "on", e, [t, n]) && t && ((r = this._events || (this._events = {}))[e] || (r[e] = [])).push({
                        callback: t,
                        context: n
                    }),
                    this
                }
                once(e, t, n) {
                    if (!s(this, "once", e, [t, n]) || !t)
                        return this;
                    let r = 0;
                    function o() {
                        r++ || (i.off(e, o),
                        t.apply(this, arguments))
                    }
                    const i = this;
                    return o._callback = t,
                    this.on(e, o, n)
                }
                off(e, t, n) {
                    if (this._events && s(this, "off", e, [t, n]))
                        if (e || t || n) {
                            const r = e ? [e] : Object.keys(this._events);
                            for (let i = 0, o = r.length; i < o; i++) {
                                e = r[i];
                                const o = this._events[e];
                                if (o) {
                                    const r = this._events[e] = [];
                                    if (t || n)
                                        for (let e = 0, i = o.length; e < i; e++) {
                                            const i = o[e];
                                            (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && r.push(i)
                                        }
                                    r.length || delete this._events[e]
                                }
                            }
                        } else
                            delete this._events;
                    return this
                }
                trigger(e, ...t) {
                    var r;
                    return this._events && s(this, "trigger", e, t) && (e = this._events[e],
                    r = this._events.all,
                    e && i(e, t, this),
                    r) && i(r, arguments, this),
                    this
                }
                triggerSafe(e, ...t) {
                    var n, r;
                    return this._events && s(this, "trigger", e, t) && (n = this._events[e],
                    r = this._events.all,
                    n && i(n, t, this, e),
                    r) && i(r, arguments, this, e),
                    this
                }
            }
            const l = a.prototype.on
              , c = a.prototype.once
              , u = a.prototype.off
              , d = a.prototype.trigger
              , p = a.prototype.triggerSafe;
            a.on = l,
            a.once = c,
            a.off = u,
            a.trigger = d
        }
        ,
        2268: (e,t,n)=>{
            "use strict";
            n.d(t, {
                A: ()=>d,
                DF: ()=>c,
                Dt: ()=>v,
                G6: ()=>m,
                NO: ()=>j,
                O7: ()=>b,
                Q6: ()=>h,
                cL: ()=>k,
                dI: ()=>C,
                gn: ()=>y,
                i7: ()=>f,
                id: ()=>l,
                pZ: ()=>o,
                tq: ()=>w,
                un: ()=>u,
                w1: ()=>g,
                xb: ()=>s,
                yS: ()=>p,
                zc: ()=>a
            });
            const r = e=>null !== navigator.userAgent.match(e)
              , i = ()=>"MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints
              , o = ()=>r(/firefox\//i)
              , s = ()=>r(/iP(hone|od)/i)
              , a = ()=>r(/iPad/i) || i()
              , l = ()=>r(/Macintosh/i) && !i()
              , c = ()=>r(/FBAV/i)
              , u = ()=>r(/\sEdge?\/\d+/i)
              , d = ()=>r(/msie/i)
              , p = ()=>r(/SMART-TV/)
              , h = ()=>p() && !r(/SamsungBrowser/)
              , f = ()=>r(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !u() && !r(/UCBrowser/i)
              , g = ()=>!r(/\sEdg\/\d+/i) && (u() || r(/trident\/.+rv:\s*11/i) || d())
              , m = ()=>r(/safari/i) && !r(/(?:Chrome|CriOS|chromium|android|phantom)/i) && !p()
              , y = ()=>r(/iP(hone|ad|od)/i) || i()
              , v = function() {
                return "boolean" == typeof v.mock_ ? v.mock_ : r(/Android/i) && !r(/Windows Phone/i)
            }
              , b = ()=>!(r(/chrome\/[123456789]/i) && !r(/chrome\/18/i) && !o()) && v()
              , w = (v.mock_ = null,
            ()=>y() || v() || r(/Windows Phone/i))
              , k = function() {
                if ("boolean" == typeof k.mock_)
                    return k.mock_;
                try {
                    return window.self !== window.top
                } catch (e) {
                    return !0
                }
            }
              , j = (k.mock_ = null,
            ()=>!1)
              , C = ()=>0
        }
        ,
        8381: (e,t,n)=>{
            "use strict";
            n.d(t, {
                $W: ()=>a,
                Mf: ()=>c,
                T2: ()=>u,
                _b: ()=>l
            });
            var r = n(8518)
              , i = n(2557)
              , o = n(4446);
            const a = function(e, t) {
                const n = [];
                if (e && e.timestamps && e.timestamps.length) {
                    const i = e.timestamps.sort((e,t)=>e.begin - t.begin);
                    i.forEach((o,a)=>{
                        var l = ((e,t="en")=>{
                            let n = (0,
                            r.G3)();
                            for (var i = Object.keys(e.title), o = i[0]; !e.title[n]; ) {
                                const e = i.find((e=>t=>0 === t.indexOf(e))(n));
                                if (e) {
                                    n = e;
                                    break
                                }
                                const t = n.lastIndexOf("-");
                                if (t <= 0) {
                                    n = null;
                                    break
                                }
                                n = n.slice(0, t)
                            }
                            return n || (0 <= i.indexOf(t) ? t : o)
                        }
                        )(o, e.defaultLanguage)
                          , l = o.title[l]
                          , u = o.time
                          , o = o.image;
                        let p = t;
                        u = {
                            begin: u,
                            end: p = a + 1 < i.length ? i[a + 1].time : p,
                            text: l,
                            cueType: "chapters"
                        };
                        o && (u.image = o),
                        n.push(u)
                    }
                    )
                }
                return n
            }
              , l = function(e, t) {
                const n = (0,
                r.G3)()
                  , o = e.reduce(function(e, t) {
                    var r;
                    return t && t.cueType && "chapters" !== t.cueType || ((r = new i.u({
                        time: t.begin,
                        image: t.image
                    })).addTitle(n, t.text),
                    e.push(r)),
                    e
                }, []);
                return t ? (t.timestamps = o,
                t) : new i.t(n,o)
            }
              , c = function(e, t) {
                if ("number" != typeof e || e < 0 || !t || !t.length)
                    return null;
                let n = null;
                for (let r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.time > e || (!n || i.time > n.time) && (n = i)
                }
                return n
            }
              , u = function(e, t) {
                let n = !0;
                return e.forEach(e=>{
                    !e || e.defaultLanguage && e.timestamps && !e.timestamps.some(e=>!e.title || null === e.time || void 0 === e.time) || (n = !1)
                }
                ),
                t(n ? null : (0,
                o.l9)(new Error, o.aD))
            }
        }
        ,
        974: (e,t,n)=>{
            "use strict";
            n.d(t, {
                HY: ()=>f,
                iv: ()=>d,
                oB: ()=>u,
                oI: ()=>a,
                vs: ()=>p
            });
            function s(e, t) {
                if (null == e)
                    throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(e), t)
            }
            var r = n(2957)
              , t = n(9563)
              , o = n.n(t);
            const a = o().clear
              , c = (e,t)=>"" === t || null == t ? "" : "string" == typeof t && isNaN(t) ? /png|gif|jpe?g/i.test(t) && t.indexOf("url") < 0 ? `url(${t})` : t : 0 === t || "z-index" === e || "opacity" === e ? "" + t : /color/i.test(e) ? "#" + (0,
            r.vk)(t.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(t) + "px"
              , u = (e,t)=>{
                if (null != e) {
                    let n;
                    void 0 === e.length && (e = [e]);
                    var r = {};
                    for (n in t)
                        s(t, n) && (r[n] = c(n, t[n]));
                    for (let t = 0; t < e.length; t++) {
                        var o, i = e[t];
                        if (null != i)
                            for (n in r)
                                s(r, n) && (o = (e=>{
                                    e = e.split("-");
                                    for (let t = 1; t < e.length; t++)
                                        e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
                                    return e.join("")
                                }
                                )(n),
                                i.style[o] !== r[n]) && (i.style[o] = r[n])
                    }
                }
            }
              , d = (e,t,n,r)=>{
                n = n || "all-players";
                let i = "";
                if ("object" == typeof t) {
                    const e = document.createElement("div");
                    u(e, t);
                    let n = e.style.cssText;
                    s(t, "content") && (n = n && `${n} content: "${t.content}";`),
                    r && (n = n && n.replace(/;/g, " !important;")),
                    i = `{${n}}`
                } else
                    "string" == typeof t && (i = t);
                "" !== i && "{}" !== i ? o().style([[e, e + i]], n) : o().clear(n, e)
            }
              , p = (e,t)=>{
                u(e, {
                    transform: t
                })
            }
            ;
            let h;
            const f = (e,t)=>{
                let n = "rgb";
                var r = void 0 !== t && 100 !== t;
                if (r && (n += "a"),
                !h) {
                    const e = document.createElement("canvas");
                    e.height = 1,
                    e.width = 1,
                    h = e.getContext("2d", {
                        willReadFrequently: !0
                    })
                }
                e ? isNaN(parseInt(e, 16)) || (e = "#" + e) : e = "#000000",
                h.clearRect(0, 0, 1, 1),
                h.fillStyle = e,
                h.fillRect(0, 0, 1, 1);
                e = h.getImageData(0, 0, 1, 1).data;
                return n += `(${e[0]}, ${e[1]}, ` + e[2],
                r && (n += ", " + t / 100),
                n + ")"
            }
        }
        ,
        5004: (e,t,n)=>{
            "use strict";
            n.d(t, {
                z: ()=>r
            });
            const r = Date.now || function() {
                return (new Date).getTime()
            }
        }
        ,
        2799: (e,t,n)=>{
            "use strict";
            n.d(t, {
                A8: ()=>T,
                AH: ()=>Z,
                EU: ()=>m,
                FK: ()=>v,
                IV: ()=>C,
                L_: ()=>P,
                P$: ()=>x,
                SH: ()=>A,
                UM: ()=>F,
                Ww: ()=>I,
                az: ()=>g,
                bJ: ()=>f,
                cS: ()=>E,
                cn: ()=>j,
                gB: ()=>h,
                i3: ()=>_,
                kq: ()=>O,
                nG: ()=>M,
                nh: ()=>y,
                oH: ()=>d,
                og: ()=>S,
                pv: ()=>c,
                s1: ()=>k
            });
            var r = n(2957)
              , i = n(6042)
              , o = n(8348);
            const s = window.DOMParser;
            let a, l = !0;
            const c = (e,t)=>e.classList.contains(t)
              , d = e=>{
                var t = e.querySelectorAll("script,object,iframe,meta");
                for (let e = t.length; e--; ) {
                    var n = t[e];
                    n.parentNode.removeChild(n)
                }
                return e
            }
              , p = /^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/
              , h = e=>{
                var t = e.attributes;
                for (let n = t.length; n--; ) {
                    var i, r = t[n].name;
                    /^on/.test(r) && e.removeAttribute(r),
                    /href/.test(r) && (i = t[n].value,
                    !/javascript:|javascript&colon;/.test(i) && p.test(i) || (e.removeAttribute(r),
                    console.warn("Invalid or unsafe URL")))
                }
                return e
            }
              , f = e=>{
                const t = (e=>{
                    var t;
                    return a || (a = new s,
                    l = (()=>{
                        try {
                            if (a.parseFromString("", "text/html"))
                                return !0
                        } catch (e) {}
                        return !1
                    }
                    )()),
                    (l ? a.parseFromString(e, "text/html") : (t = document.implementation.createHTMLDocument(""),
                    -1 < e.toLowerCase().indexOf("<!doctype") ? t.documentElement.innerHTML = e : t.body.innerHTML = e,
                    t)).body
                }
                )(e);
                d(t);
                var n = t.querySelectorAll("*");
                for (let e = n.length; e--; ) {
                    const t = n[e];
                    h(t)
                }
                return t
            }
              , g = e=>f(e).firstChild
              , m = e=>{
                for (; e.firstChild; )
                    e.removeChild(e.firstChild)
            }
              , y = (e,t)=>{
                m(e),
                ((e,t)=>{
                    if (t) {
                        var n = document.createDocumentFragment()
                          , r = f(t).childNodes;
                        for (let e = 0; e < r.length; e++)
                            n.appendChild(r[e].cloneNode(!0));
                        e.appendChild(n)
                    }
                }
                )(e, t)
            }
              , v = e=>e + (0 < e.toString().indexOf("%") ? "" : "px")
              , b = e=>(0,
            i.HD)(e.className) ? e.className.split(" ") : []
              , w = (e,t)=>{
                t = (0,
                r.fy)(t),
                e.className !== t && (e.className = t)
            }
              , k = e=>e.classList || b(e)
              , j = (e,t)=>{
                const n = b(e);
                (Array.isArray(t) ? t : t.split(" ")).forEach(function(e) {
                    (0,
                    i.r3)(n, e) || n.push(e)
                }),
                w(e, n.join(" "))
            }
              , C = (e,t)=>{
                var n = b(e)
                  , t = Array.isArray(t) ? t : t.split(" ");
                w(e, (0,
                i.e5)(n, t).join(" "))
            }
              , P = (e,t,n)=>{
                let r = e.className || "";
                t.test(r) ? r = r.replace(t, n) : n && (r += " " + n),
                w(e, r)
            }
              , S = (e,t,n)=>{
                var r = c(e, t);
                (n = (0,
                i.jn)(n) ? n : !r) !== r && (n ? j : C)(e, t)
            }
              , x = (e,t,n)=>{
                e.setAttribute(t, n)
            }
              , O = e=>{
                var t = document.createElement("link");
                t.rel = "stylesheet",
                t.href = e,
                document.getElementsByTagName("head")[0].appendChild(t)
            }
              , E = e=>{
                e && m(e)
            }
              , T = e=>{
                var r, i, t = {
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    top: 0,
                    bottom: 0
                };
                return e && document.body.contains(e) && (e = e.getBoundingClientRect(),
                r = window.pageYOffset,
                i = window.pageXOffset,
                e.width || e.height || e.left || e.top) && (t.left = e.left + i,
                t.right = e.right + i,
                t.top = e.top + r,
                t.bottom = e.bottom + r,
                t.width = e.right - e.left,
                t.height = e.bottom - e.top),
                t
            }
              , A = (e,t)=>{
                e.insertBefore(t, e.firstChild)
            }
              , Z = e=>e.nextElementSibling
              , _ = e=>e.previousElementSibling
              , M = (e,t,n={},r=document)=>{
                if (p.test(e)) {
                    let i = r.createElement("a");
                    i.href = e,
                    i.target = t,
                    i = h(Object.assign(i, n)),
                    o.Browser.firefox ? i.dispatchEvent(new MouseEvent("click",{
                        bubbles: !0,
                        cancelable: !0,
                        view: window
                    })) : i.click()
                }
            }
              , F = ()=>{
                var e = window.screen.orientation;
                return !!e && ("landscape-primary" === e.type || "landscape-secondary" === e.type) || 90 === window.orientation || -90 === window.orientation
            }
              , I = e=>(e=>{
                var t = document.createElement("textarea");
                return t.innerHTML = e,
                t.value
            }
            )(e).replace(/&|<|>|"|''/gm, function(e) {
                return `&#${e.charCodeAt(0)};`
            }).replace(/&#60;(\/?)(b|strong|i|em|p|br|ul|ol|li|h.)&#62;/gim, "<$1$2>")
        }
        ,
        4429: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>b
            });
            var t = n(1569)
              , i = n(7034)
              , o = n(9888)
              , s = n(2957)
              , a = n(7411)
              , l = n(4742);
            function c(e, t) {
                this.name = e,
                this.message = t.message || t.toString(),
                this.error = t
            }
            var u = n(6042)
              , d = n(2268)
              , p = n(2799)
              , h = n(974)
              , f = n(6886)
              , g = n(1261)
              , m = n(5499)
              , n = n(6234);
            const b = Object.assign({}, o, i, t, {
                addClass: p.cn,
                hasClass: p.pv,
                removeClass: p.IV,
                replaceClass: p.L_,
                toggleClass: p.og,
                classList: p.s1,
                styleDimension: p.FK,
                createElement: p.az,
                emptyElement: p.EU,
                addStyleSheet: p.kq,
                bounds: p.A8,
                openLink: p.nG,
                replaceInnerHtml: p.nh,
                css: h.iv,
                clearCss: h.oI,
                style: h.oB,
                transform: h.vs,
                getRgba: h.HY,
                ajax: f.h,
                crossdomain: e=>{
                    var t = window.URL;
                    try {
                        var n = new t(e,location.origin);
                        return location.protocol + "//" + location.host != n.protocol + "//" + n.host
                    } catch (e) {}
                    return !0
                }
                ,
                tryCatch: function(e, t, n=[]) {
                    if (l.Z.debug)
                        return e.apply(t || this, n);
                    try {
                        return e.apply(t || this, n)
                    } catch (t) {
                        return new c(e.name,t)
                    }
                },
                Error: c,
                Timer: a.Z,
                log: m.c,
                genId: n.B,
                between: g.v,
                foreach: function(e, t) {
                    for (const n in e)
                        !function(e, t) {
                            if (null == e)
                                throw new TypeError("Cannot convert undefined or null to object");
                            return Object.prototype.hasOwnProperty.call(Object(e), t)
                        }(e, n) || t(n, e[n])
                },
                flashVersion: d.dI,
                isIframe: d.cL,
                indexOf: u.cq,
                trim: s.fy,
                pad: s.vk,
                extension: s.AO,
                hms: s.WZ,
                seconds: s.m9,
                prefix: s.O4,
                suffix: s.uA,
                noop: ()=>{}
            })
        }
        ,
        7543: (e,t,n)=>{
            "use strict";
            n.d(t, {
                C: ()=>r
            });
            const r = e=>!!(e = e || window.event) && Boolean(e) && /^(?:mouse|pointer|touch|gesture|click|key)/.test(e.type)
        }
        ,
        8518: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Cq: ()=>g,
                Dq: ()=>P,
                G3: ()=>y,
                Mh: ()=>x,
                Pm: ()=>j,
                dl: ()=>C,
                id: ()=>f,
                q2: ()=>w,
                t6: ()=>b,
                tK: ()=>h
            });
            var t = n(6042)
              , i = n(2268)
              , o = n(6886)
              , s = n(7034)
              , a = n(696);
            const l = {}
              , c = {
                aa: "Afar",
                ab: "Abkhazian",
                ae: "Avestan",
                af: "Afrikaans",
                ak: "Akan",
                am: "Amharic",
                ar: "Arabic",
                an: "Aragonese",
                as: "Assamese",
                av: "Avaric",
                ay: "Aymara",
                az: "Azerbaijani",
                ba: "Bashkir",
                be: "Belarusian",
                bg: "Bulgarian",
                bh: "Bihari languages",
                bi: "Bislama",
                bm: "Bambara",
                bn: "Bengali",
                bo: "Tibetan",
                br: "Breton",
                bs: "Bosnian",
                ca: "Catalan",
                ce: "Chechen",
                ch: "Chamorro",
                co: "Corsican",
                cr: "Cree",
                cs: "Czech",
                cu: "Church Slavic",
                cv: "Chuvash",
                cy: "Welsh",
                da: "Danish",
                de: "German",
                dv: "Divehi",
                dz: "Dzongkha",
                ee: "Ewe",
                el: "Greek",
                en: "English",
                eo: "Esperanto",
                es: "Spanish",
                et: "Estonian",
                eu: "Basque",
                fa: "Persian",
                ff: "Fulah",
                fi: "Finnish",
                fj: "Fijian",
                fo: "Faroese",
                fr: "French",
                fy: "Western Frisian",
                ga: "Irish",
                gd: "Gaelic",
                gl: "Galician",
                gn: "Guarani",
                gu: "Gujarati",
                gv: "Manx",
                ha: "Hausa",
                he: "Hebrew",
                hi: "Hindi",
                ho: "Hiri Motu",
                hr: "Croatian",
                ht: "Haitian",
                hu: "Hungarian",
                hy: "Armenian",
                hz: "Herero",
                ia: "Interlingua",
                id: "Indonesian",
                ie: "Interlingue",
                ig: "Igbo",
                ii: "Sichuan Yi",
                ik: "Inupiaq",
                io: "Ido",
                is: "Icelandic",
                it: "Italian",
                iu: "Inuktitut",
                ja: "Japanese",
                jv: "Javanese",
                ka: "Georgian",
                kg: "Kongo",
                ki: "Kikuyu",
                kj: "Kuanyama",
                kk: "Kazakh",
                kl: "Kalaallisut",
                km: "Central Khmer",
                kn: "Kannada",
                ko: "Korean",
                kr: "Kanuri",
                ks: "Kashmiri",
                ku: "Kurdish",
                kv: "Komi",
                kw: "Cornish",
                ky: "Kirghiz",
                la: "Latin",
                lb: "Luxembourgish",
                lg: "Ganda",
                li: "Limburgan",
                lo: "Lao",
                ln: "Lingala",
                lt: "Lithuanian",
                lu: "Luba-Katanga",
                lv: "Latvian",
                mg: "Malagasy",
                mh: "Marshallese",
                mi: "Maori",
                mk: "Macedonian",
                ml: "Malayalam",
                mn: "Mongolian",
                mr: "Marathi",
                ms: "Malay",
                mt: "Maltese",
                my: "Burmese",
                na: "Nauru",
                nb: "Bokmål",
                nd: "Ndebele",
                ne: "Nepali",
                ng: "Ndonga",
                nl: "Dutch",
                nn: "Norwegian Nynorsk",
                no: "Norwegian",
                nr: "Ndebele",
                nv: "Navajo",
                ny: "Chichewa",
                oc: "Occitan",
                oj: "Ojibwa",
                om: "Oromo",
                or: "Oriya",
                os: "Ossetian",
                pa: "Panjabi",
                pi: "Pali",
                pl: "Polish",
                pt: "Portuguese",
                ps: "Pushto",
                qu: "Quechua",
                rm: "Romansh",
                rn: "Rundi",
                ro: "Romanian",
                ru: "Russian",
                rw: "Kinyarwanda",
                sa: "Sanskrit",
                sc: "Sardinian",
                sd: "Sindhi",
                se: "Northern Sami",
                sg: "Sango",
                si: "Sinhala",
                sk: "Slovak",
                sl: "Slovenian",
                sm: "Samoan",
                sn: "Shona",
                so: "Somali",
                sq: "Albanian",
                sr: "Serbian",
                ss: "Swati",
                st: "Sotho",
                su: "Sundanese",
                sw: "Swahili",
                sv: "Swedish",
                ta: "Tamil",
                te: "Telugu",
                tg: "Tajik",
                th: "Thai",
                ti: "Tigrinya",
                tk: "Turkmen",
                tl: "Tagalog",
                tn: "Tswana",
                to: "Tonga",
                tr: "Turkish",
                ts: "Tsonga",
                tt: "Tatar",
                tw: "Twi",
                ty: "Tahitian",
                ug: "Uighur",
                uk: "Ukrainian",
                ur: "Urdu",
                uz: "Uzbek",
                ve: "Venda",
                vi: "Vietnamese",
                vo: "Volapük",
                wa: "Walloon",
                wo: "Wolof",
                xh: "Xhosa",
                yi: "Yiddish",
                yo: "Yoruba",
                za: "Zhuang",
                zh: "Chinese",
                zu: "Zulu"
            }
              , u = (0,
            t.U_)(c)
              , d = e=>e.toLowerCase().replace("-", "_")
              , p = e=>{
                var e = d(e)
                  , n = e.indexOf("_");
                return -1 === n ? e : e.substring(0, n)
            }
              , h = e=>e ? Object.keys(e).reduce((t,n)=>(t[d(n)] = e[n],
            t), {}) : {}
              , f = e=>{
                if (e)
                    return 3 !== e.length && c[p(e)] || e
            }
              , g = e=>u[e] || ""
              , m = e=>{
                e = e.querySelector("html");
                return e ? e.getAttribute("lang") : null
            }
              , y = function() {
                if ("string" == typeof y.mock_)
                    return y.mock_;
                let e = m(document);
                if (!e && (0,
                i.cL)())
                    try {
                        e = m(window.top.document)
                    } catch (e) {}
                return e || navigator.language || "en"
            }
              , v = (y.mock_ = null,
            ["ar", "da", "de", "el", "es", "fi", "fr", "he", "id", "it", "ja", "ko", "nb", "nl", "nn", "no", "oc", "pt", "ro", "ru", "sl", "sv", "th", "tr", "vi", "zh"])
              , b = e=>8207 === e.charCodeAt(0) || /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(e)
              , w = function(e) {
                return "boolean" == typeof w.mock_ ? w.mock_ : 0 <= v.indexOf(p(e))
            }
              , k = (w.mock_ = null,
            (e,t,n)=>{
                t = e[n] || t[n];
                t && (e[n] = t)
            }
            )
              , j = (e,t,n)=>Object.assign({}, (e=>{
                var {advertising: t, related: n, sharing: r, abouttext: i} = e
                  , o = Object.assign({}, e.localization)
                  , t = (t && (o.advertising = o.advertising || {},
                k(o.advertising, t, "admessage"),
                k(o.advertising, t, "cuetext"),
                k(o.advertising, t, "loadingAd"),
                k(o.advertising, t, "podmessage"),
                k(o.advertising, t, "skipmessage"),
                k(o.advertising, t, "skiptext")),
                "string" == typeof o.related ? o.related = {
                    heading: o.related
                } : o.related = o.related || {},
                n && k(o.related, n, "autoplaymessage"),
                r && (o.sharing = o.sharing || {},
                k(o.sharing, r, "heading"),
                k(o.sharing, r, "copied")),
                i && k(o, e, "abouttext"),
                o.close || o.nextUpClose);
                return t && (o.close = t),
                o
            }
            )(e), t[p(n)], t[d(n)])
              , C = function(e) {
                return "boolean" == typeof C.mock_ ? C.mock_ : (0,
                s.isDeepKeyCompliant)(a.Z, e, (e,t)=>"string" == typeof t[e])
            }
              , P = (C.mock_ = null,
            function(e, t) {
                if ("function" == typeof P.mock_)
                    return P.mock_;
                let n = l[t];
                if (!n) {
                    const i = `${e}translations/${e = p(t),
                    /^n[bn]$/.test(e) ? "no" : e}.json`;
                    l[t] = n = new Promise((e,n)=>{
                        (0,
                        o.h)({
                            url: i,
                            oncomplete: e,
                            onerror: (e,r,i,o)=>{
                                l[t] = null,
                                n(o)
                            }
                            ,
                            responseType: "json"
                        })
                    }
                    )
                }
                return n
            }
            )
              , S = (P.mock_ = null,
            (e,t,n,r)=>{
                e[t] = Object.assign({}, n[t], r[t])
            }
            )
              , x = (e,t)=>{
                var n = Object.assign({}, e, t);
                return S(n, "errors", e, t),
                S(n, "related", e, t),
                S(n, "sharing", e, t),
                S(n, "advertising", e, t),
                S(n, "shortcuts", e, t),
                S(n, "captionsStyles", e, t),
                n
            }
        }
        ,
        5499: (e,t,n)=>{
            "use strict";
            n.d(t, {
                c: ()=>r
            });
            const r = "function" == typeof console.log ? console.log.bind(console) : ()=>{}
        }
        ,
        1261: (e,t,n)=>{
            "use strict";
            n.d(t, {
                v: ()=>r
            });
            const r = function(e, t, n) {
                return Math.max(Math.min(e, n), t)
            }
        }
        ,
        9888: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                getAbsolutePath: ()=>s,
                isAbsolutePath: ()=>o,
                parseDimension: ()=>c,
                parseXML: ()=>a,
                serialize: ()=>l,
                timeFormat: ()=>u,
                timeFormatAria: ()=>d
            });
            var r = n(6042)
              , i = n(5950);
            const o = e=>/^(?:(?:https?|file):)?\/\//.test(e)
              , s = (e,t)=>(0,
            i.kd)(e, t)
              , a = e=>{
                let t = null;
                try {
                    (t = (new window.DOMParser).parseFromString(e, "text/xml")).querySelector("parsererror") && (t = null)
                } catch (e) {}
                return t
            }
              , l = e=>{
                if (void 0 === e)
                    return null;
                if ("string" == typeof e && e.length < 6) {
                    var t = e.toLowerCase();
                    if ("true" === t)
                        return !0;
                    if ("false" === t)
                        return !1;
                    if (!(0,
                    r.i2)(Number(e)) && !(0,
                    r.i2)(parseFloat(e)))
                        return Number(e)
                }
                return e
            }
              , c = e=>(0,
            r.qh)(e) ? e : "" === e ? 0 : -1 < e.lastIndexOf("%") ? e : parseInt(e.replace("px", ""), 10)
              , u = (e,t)=>{
                return (0,
                r.i2)(e) && (e = parseInt(e.toString(), 10)),
                (0,
                r.i2)(e) || !isFinite(e) || e <= 0 && !t ? "00:00" : (t = e < 0 ? "-" : "",
                e = Math.abs(e),
                t + ((t = Math.floor(e / 3600)) ? t + ":" : "") + ((t = Math.floor((e - 3600 * t) / 60)) < 10 ? "0" : "") + t + ":" + ((t = Math.floor(e % 60)) < 10 ? "0" : "") + t)
            }
              , d = e=>{
                var t;
                return (0,
                r.i2)(e) && (e = parseInt(e.toString(), 10)),
                (0,
                r.i2)(e) || !isFinite(e) || e <= 0 ? "0 seconds" : ((t = Math.floor(e / 3600)) ? t + (1 <= t ? ` hour${1 < t ? "s" : ""}, ` : "") : "") + ((t = Math.floor((e - 3600 * t) / 60)) ? t + (1 <= t ? ` minute${1 < t ? "s" : ""}, ` : "") : "") + (t = Math.floor(e % 60)) + (1 <= t ? " second" + (1 < t ? "s" : "") : "")
            }
        }
        ,
        1569: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                getScriptPath: ()=>o,
                loadFrom: ()=>l,
                repo: ()=>s,
                versionCheck: ()=>a
            });
            var r = n(6601)
              , i = n(7034);
            const o = function(e) {
                var t = document.getElementsByTagName("script");
                for (let n = 0; n < t.length; n++) {
                    var r = t[n].src;
                    if (r) {
                        const t = r.lastIndexOf("/" + e);
                        if (0 <= t)
                            return r.substr(0, t + 1)
                    }
                }
                return ""
            }
              , s = function() {
                return ((0,
                i.isFileProtocol)() ? "https:" : "") + "/js"
            }
              , a = function(e) {
                var e = ("0" + e).split(/\W/)
                  , n = r.i.split(/\W/)
                  , i = parseFloat(e[0])
                  , o = parseFloat(n[0]);
                return !(o < i || i === o && parseFloat("0" + e[1]) > parseFloat(n[1]))
            }
              , l = function() {
                return s()
            }
        }
        ,
        6234: (e,t,n)=>{
            "use strict";
            n.d(t, {
                B: ()=>o,
                F: ()=>r
            });
            const r = 12
              , o = e=>{
                let t = "";
                for (; t.length < e; )
                    t += (()=>{
                        try {
                            var e = window.crypto || window.msCrypto;
                            if (null != e && e.getRandomValues)
                                return e.getRandomValues(new Uint32Array(1))[0].toString(36)
                        } catch (e) {}
                        return Math.random().toString(36).slice(2, 9)
                    }
                    )();
                return t.slice(0, e)
            }
        }
        ,
        1776: (e,t,n)=>{
            "use strict";
            n.d(t, {
                U: ()=>r,
                W: ()=>i
            });
            const r = window.requestAnimationFrame || (e=>setTimeout(e, 17))
              , i = window.cancelAnimationFrame || clearTimeout
        }
        ,
        676: (e,t,n)=>{
            "use strict";
            n.d(t, {
                ZP: ()=>c
            });
            var t = n(328)
              , i = n(1643);
            function l(e, t, n) {
                const r = this;
                let l = 0;
                const c = e=>{
                    l = 2,
                    r.trigger(i.pn, e).off()
                }
                  , u = e=>{
                    l = 3,
                    r.trigger(i.xQ, e).off()
                }
                ;
                this.getStatus = function() {
                    return l
                }
                ,
                this.load = function() {
                    let r = o[e];
                    return 0 === l && (r && r.then(u).catch(c),
                    l = 1,
                    r = new Promise((r,i)=>{
                        const o = (t ? e=>{
                            var t = document.createElement("link");
                            return t.type = "text/css",
                            t.rel = "stylesheet",
                            t.href = e,
                            t
                        }
                        : (e,t)=>{
                            var n = document.createElement("script");
                            return n.type = "text/javascript",
                            n.charset = "utf-8",
                            n.async = !0,
                            n.timeout = t || 45e3,
                            n.src = e,
                            n
                        }
                        )(e, n);
                        let l;
                        function p(e) {
                            d(),
                            c(e),
                            i(e)
                        }
                        const d = function() {
                            o.onerror = o.onload = null,
                            clearTimeout(l)
                        };
                        l = setTimeout(()=>{
                            p(new Error("Network timeout " + e))
                        }
                        , 45e3),
                        o.onerror = function() {
                            p(new Error("Failed to load " + e))
                        }
                        ,
                        o.onload = function(e) {
                            d(),
                            u(e),
                            r(e)
                        }
                        ;
                        var h = document.getElementsByTagName("head")[0] || document.documentElement;
                        h.insertBefore(o, h.firstChild)
                    }
                    ),
                    o[e] = r),
                    r
                }
            }
            const o = {}
              , c = (Object.assign(l.prototype, t.ZP),
            l)
        }
        ,
        2957: (e,t,n)=>{
            "use strict";
            n.d(t, {
                AO: ()=>l,
                Dc: ()=>a,
                O4: ()=>p,
                U5: ()=>d,
                WZ: ()=>c,
                fy: ()=>o,
                m9: ()=>u,
                uA: ()=>h,
                vk: ()=>s,
                zz: ()=>f
            });
            var r = n(6042);
            const i = window.parseFloat
              , o = e=>e.replace(/^\s+|\s+$/g, "")
              , s = (e,t,n)=>{
                for (e = "" + e,
                n = n || "0"; e.length < t; )
                    e = n + e;
                return e
            }
              , a = (e,t)=>{
                var n = e.attributes;
                for (let e = 0; e < n.length; e++)
                    if (n[e].name && n[e].name.toLowerCase() === t.toLowerCase())
                        return n[e].value.toString();
                return ""
            }
              , l = e=>{
                var t;
                return e && "rtmp" !== e.substr(0, 4) ? (t = /[(,]format=(m3u8|mpd)-/i.exec(e)) ? t[1] : (t = e.replace(/^.+?\.(\w+)(?:[;].*)?(?:[?#].*)?$/, "$1")) !== e ? t.toLowerCase() : -1 < (e = e.split("?")[0].split("#")[0]).lastIndexOf(".") ? e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase() : "" : ""
            }
              , c = e=>{
                var t = (e / 60 | 0) % 60
                  , n = e % 60;
                return `${s((e / 3600 | 0).toString(), 2)}:${s(t.toString(), 2)}:` + s(n.toFixed(3), 6)
            }
              , u = (e,t)=>{
                if (!e)
                    return 0;
                if ((0,
                r.qh)(e))
                    return e;
                var e = e.replace(",", ".")
                  , o = e.slice(-1)
                  , s = e.split(":")
                  , a = s.length;
                let l = 0;
                if ("s" === o)
                    l = i(e);
                else if ("m" === o)
                    l = 60 * i(e);
                else if ("h" === o)
                    l = 3600 * i(e);
                else if (1 < a) {
                    let e = a - 1;
                    4 === a && (t && (l = i(s[e]) / t),
                    --e),
                    l = (l += i(s[e])) + 60 * i(s[e - 1]),
                    3 <= a && (l += 3600 * i(s[e - 2]))
                } else
                    l = i(e);
                return (0,
                r.qh)(l) ? l : 0
            }
              , d = (e,t,n)=>{
                if ((0,
                r.HD)(e) && "%" === e.slice(-1)) {
                    const n = i(e);
                    return t && (0,
                    r.qh)(t) && (0,
                    r.qh)(n) ? t * n / 100 : null
                }
                return u(e, n)
            }
              , p = (e,t)=>e.map(e=>t + e)
              , h = (e,t)=>e.map(e=>e + t)
              , f = e=>Boolean(e) && (0,
            r.HD)(e) && "%" === e.slice(-1)
        }
        ,
        5882: (e,t,n)=>{
            "use strict";
            n.d(t, {
                GU: ()=>k,
                ZP: ()=>F,
                dO: ()=>S
            });
            var r = n(8348)
              , i = n(1643)
              , t = n(328)
              , s = n(5004)
              , a = n(2799);
            const l = "ontouchstart"in window
              , c = "PointerEvent"in window && !r.OS.android
              , u = !(c || l && r.OS.mobile)
              , d = "window"
              , p = "init"
              , h = "select"
              , f = "keydown"
              , g = r.Features["passiveEvents"]
              , m = !!g && {
                passive: !0
            };
            let y, v;
            const b = (e,t,n)=>{
                var r = e["el"]
                  , n = ((e,t,n)=>{
                    var {target: r, touches: i, changedTouches: o} = t;
                    let s, a = t["pointerType"];
                    a = i || o ? (s = (null != i && i.length ? i : o)[0],
                    a || "touch") : (s = t,
                    a || "mouse");
                    var {pageX: i, pageY: o} = s;
                    return {
                        type: e,
                        pointerType: a,
                        pageX: i,
                        pageY: o,
                        sourceEvent: t,
                        currentTarget: n,
                        target: r
                    }
                }
                )(t, n, r);
                e.trigger(t, n)
            }
              , w = (e,t,n)=>{
                var r = e["el"]
                  , i = n["target"];
                e.trigger(t, {
                    type: t,
                    sourceEvent: n,
                    currentTarget: r,
                    target: i
                })
            }
              , k = e=>{
                e = e.ownerDocument || e;
                return e.defaultView || e.parentWindow || window
            }
              , j = (e,t,n,r,i=m)=>{
                let o = e.handlers[t]
                  , s = e.options[t];
                if (o || (o = e.handlers[t] = {},
                s = e.options[t] = {}),
                o[n])
                    throw new Error(t + ` ${n} already registered`);
                o[n] = r,
                s[n] = i;
                e = e.el,
                t = t === d ? k(e) : e;
                t && t.addEventListener(n, r, i)
            }
              , C = e=>{
                var t = e["el"];
                null !== e.pointerId && (t.releasePointerCapture(e.pointerId),
                e.pointerId = null)
            }
              , P = (e,t)=>{
                const {el: n, handlers: r, options: i} = e
                  , o = t === d ? k(n) : n
                  , s = r[t]
                  , a = i[t];
                s && (Object.keys(s).forEach(e=>{
                    var t = a[e];
                    "boolean" == typeof t ? o.removeEventListener(e, s[e], t) : o.removeEventListener(e, s[e])
                }
                ),
                r[t] = null,
                i[t] = null)
            }
              , S = e=>!(!Boolean(e.ctrlKey) || "click" !== e.type) || ("which"in e ? 3 === e.which : "button"in e && 2 === e.button)
              , x = (e,t)=>{
                if (v = v || new F(document).on("interaction"),
                !e.handlers[p] && !e.handlers[h]) {
                    const n = e["el"];
                    j(e, t, "blur", ()=>{
                        (0,
                        a.IV)(n, "jw-tab-focus"),
                        e.clicking = !1
                    }
                    ),
                    j(e, t, "focus", ()=>{
                        v.event && v.event.type === f && (0,
                        a.cn)(n, "jw-tab-focus")
                    }
                    )
                }
            }
              , O = (e,t,n,r)=>{
                c ? j(e, t, "pointerdown", n, r) : (u && j(e, t, "mousedown", n, r),
                j(e, t, "touchstart", n, r))
            }
              , E = e=>{
                if (!e.handlers[h]) {
                    const t = e["el"];
                    x(e, h),
                    O(e, h, n=>{
                        var r = n["target"];
                        S(n) || Boolean(e.directSelect) && r !== t || (n.isPrimary && "BUTTON" === r.tagName && r.focus(),
                        e.lastStart = (0,
                        s.z)(),
                        e.clicking = !0)
                    }
                    ),
                    j(e, h, "click", n=>{
                        S(n) || Boolean(e.directSelect) && n.target !== t || (500 < (0,
                        s.z)() - e.lastStart && !0 === e.clicking || (((e,t)=>{
                            e.enableDoubleClick && ((0,
                            s.z)() - e.lastClick < 300 ? (b(e, i.P, t),
                            e.lastClick = 0) : e.lastClick = (0,
                            s.z)())
                        }
                        )(e, n),
                        b(e, i.ot, n)),
                        e.clicking = !1)
                    }
                    )
                }
            }
              , T = e=>0 === e.type.indexOf("touch") ? (e.originalEvent || e).changedTouches[0] : e
              , A = e=>{
                if (!e.handlers[p]) {
                    const {el: t, passive: n} = e
                      , r = !!g && {
                        passive: n
                    }
                      , o = t=>{
                        if (e.dragged)
                            b(e, i.Wp, t);
                        else {
                            const {pageX: n, pageY: r} = T(t)
                              , o = n - e.startX
                              , s = r - e.startY;
                            36 < o * o + s * s && (b(e, i.nv, t),
                            e.dragged = !0,
                            b(e, i.Wp, t))
                        }
                        var r;
                        n || "touchmove" !== t.type || t.preventDefault && t.preventDefault()
                    }
                      , s = t=>{
                        clearTimeout(y),
                        e.el && (C(e),
                        P(e, d),
                        e.dragged) && (e.dragged = !1,
                        b(e, i.Sv, t))
                    }
                    ;
                    x(e, p),
                    O(e, p, i=>{
                        if ((0,
                        a.IV)(t, "jw-tab-focus"),
                        !S(i)) {
                            var {target: l, type: c} = i;
                            if (!e.directSelect || l === t) {
                                var {pageX: l, pageY: p} = T(i);
                                if (e.dragged = !1,
                                e.startX = l,
                                e.startY = p,
                                P(e, d),
                                "pointerdown" === c && i.isPrimary) {
                                    if (!n) {
                                        const n = i["pointerId"];
                                        e.pointerId = n,
                                        t.setPointerCapture(n)
                                    }
                                    j(e, d, "pointermove", o, r),
                                    j(e, d, "pointercancel", s),
                                    j(e, d, "pointerup", s)
                                } else
                                    "mousedown" === c ? (j(e, d, "mousemove", o, r),
                                    j(e, d, "mouseup", s)) : "touchstart" === c && (j(e, d, "touchmove", o, r),
                                    j(e, d, "touchcancel", s),
                                    j(e, d, "touchend", s))
                            }
                        }
                    }
                    , r)
                }
            }
              , Z = {
                drag(e) {
                    A(e)
                },
                dragStart(e) {
                    A(e)
                },
                dragEnd(e) {
                    A(e)
                },
                click(e) {
                    E(e)
                },
                doubleClick(e) {
                    e.enableDoubleClick = !0,
                    E(e)
                },
                longPress(e) {
                    const t = "longPress";
                    if (r.OS.iOS) {
                        const n = ()=>{
                            clearTimeout(y)
                        }
                        ;
                        j(e, t, "touchstart", r=>{
                            n(),
                            y = setTimeout(()=>{
                                b(e, t, r)
                            }
                            , 500)
                        }
                        ),
                        j(e, t, "touchmove", n),
                        j(e, t, "touchcancel", n),
                        j(e, t, "touchend", n)
                    } else
                        e.el.oncontextmenu = n=>(b(e, t, n),
                        !1)
                },
                focus(e) {
                    const t = "focus";
                    j(e, t, t, n=>{
                        w(e, t, n)
                    }
                    )
                },
                blur(e) {
                    const t = "blur";
                    j(e, t, t, n=>{
                        w(e, t, n)
                    }
                    )
                },
                over(e) {
                    (c || u) && j(e, i.B1, c ? "pointerover" : "mouseover", t=>{
                        "touch" !== t.pointerType && b(e, i.B1, t)
                    }
                    )
                },
                out(e) {
                    if (c) {
                        const t = e["el"];
                        j(e, i.U3, "pointerout", n=>{
                            var r;
                            "touch" !== n.pointerType && "clientX"in n && (r = document.elementFromPoint(n.clientX, n.clientY),
                            t.contains(r) || b(e, i.U3, n))
                        }
                        )
                    } else
                        u && j(e, i.U3, "mouseout", t=>{
                            b(e, i.U3, t)
                        }
                        )
                },
                move(e) {
                    (c || u) && j(e, i.tP, c ? "pointermove" : "mousemove", t=>{
                        "touch" !== t.pointerType && b(e, i.tP, t)
                    }
                    )
                },
                enter(e) {
                    j(e, i.K5, f, t=>{
                        "Enter" !== t.key && 13 !== t.keyCode || (t.stopPropagation(),
                        w(e, i.K5, t))
                    }
                    )
                },
                keydown(e) {
                    j(e, f, f, t=>{
                        w(e, f, t)
                    }
                    , !1)
                },
                gesture(e) {
                    const t = "gesture"
                      , n = n=>b(e, t, n);
                    j(e, t, "click", n),
                    j(e, t, f, n)
                },
                interaction(e) {
                    var t = "interaction"
                      , n = t=>{
                        e.event = t
                    }
                    ;
                    j(e, t, "mousedown", n, !0),
                    j(e, t, f, n, !0)
                },
                tap() {},
                doubleTap() {}
            }
              , _ = /\s+/
              , M = e=>e && !(_.test(e) || "object" == typeof e);
            class F extends t.ZP {
                constructor(e, t) {
                    super();
                    var n = !(t = t || {}).preventScrolling;
                    this.directSelect = Boolean(t.directSelect),
                    this.dragged = !1,
                    this.enableDoubleClick = !1,
                    this.el = e,
                    this.handlers = {},
                    this.options = {},
                    this.lastClick = 0,
                    this.lastStart = 0,
                    this.passive = n,
                    this.pointerId = null,
                    this.startX = 0,
                    this.startY = 0,
                    this.event = null,
                    this.clicking = !1
                }
                on(e, t, n) {
                    return !M(e) || this.handlers[e] || Z[e](this),
                    super.on(e, t, n)
                }
                off(e, t, n) {
                    if (M(e))
                        P(this, e);
                    else if (!e) {
                        const e = this["handlers"];
                        Object.keys(e).forEach(e=>{
                            P(this, e)
                        }
                        )
                    }
                    return super.off(e, t, n)
                }
                destroy() {
                    this.el && (this.off(),
                    c && C(this),
                    this.el = null)
                }
            }
        }
        ,
        6042: (e,t,n)=>{
            "use strict";
            n.d(t, {
                $6: ()=>X,
                Cb: ()=>ie,
                HD: ()=>F,
                Kn: ()=>S,
                P2: ()=>je,
                S6: ()=>O,
                UI: ()=>L,
                U_: ()=>Ce,
                Yj: ()=>H,
                ZP: ()=>Te,
                _e: ()=>ge,
                a9: ()=>Oe,
                ar: ()=>fe,
                ce: ()=>Pe,
                cq: ()=>ue,
                dp: ()=>Y,
                e1: ()=>ce,
                e5: ()=>me,
                ei: ()=>xe,
                hX: ()=>K,
                hj: ()=>M,
                i2: ()=>B,
                jn: ()=>ne,
                l7: ()=>Se,
                mf: ()=>_,
                o8: ()=>re,
                qh: ()=>Ee,
                r3: ()=>de,
                sE: ()=>G,
                u4: ()=>R,
                vM: ()=>ae,
                wB: ()=>he,
                xV: ()=>te,
                yR: ()=>U
            });
            t = n(5004);
            function x(e) {
                if (!S(e))
                    return [];
                if (k)
                    return k(e);
                var t = [];
                for (const n in e)
                    P(e, n) && t.push(n);
                return t
            }
            function $(e, t, ...n) {
                if (j && e.bind === j)
                    return j.apply(e, [t].concat(n));
                if (_(e))
                    return r;
                throw new TypeError;
                function r(...i) {
                    if (!(this instanceof r))
                        return e.apply(t, n.concat(i));
                    D.prototype = e.prototype;
                    var o = new D
                      , i = (D.prototype = null,
                    e.apply(o, n.concat(i)));
                    return Object(i) === i ? i : o
                }
            }
            function ee(e, t) {
                let n;
                return function(...r) {
                    return 0 < --e && (n = t.apply(this, r)),
                    e <= 1 && (t = null),
                    n
                }
            }
            function oe(e) {
                return null == e ? U : _(e) ? e : ie(e)
            }
            function se(e) {
                return function(t, n, r) {
                    const i = {};
                    return n = oe(n),
                    O(t, function(o, s) {
                        s = n.call(r, o, s, t);
                        e(i, s, o)
                    }),
                    i
                }
            }
            function ye(e, ...t) {
                return function(...n) {
                    let r = 0;
                    var i = t.slice();
                    for (let e = 0, t = i.length; e < t; e++)
                        P(i[e], "partial") && (i[e] = n[r++]);
                    for (; r < arguments.length; )
                        i.push(n[r++]);
                    return e.apply(this, i)
                }
            }
            function be(e, t, ...n) {
                return setTimeout(function() {
                    return e.apply(null, n)
                }, t)
            }
            const o = {}
              , s = Array.prototype
              , a = Object.prototype
              , l = Function.prototype
              , c = s.slice
              , u = s.concat
              , d = a.toString
              , p = a.hasOwnProperty
              , h = s.map
              , f = s.reduce
              , g = s.forEach
              , m = s.filter
              , y = s.every
              , v = s.some
              , b = s.indexOf
              , w = Array.isArray
              , k = Object.keys
              , j = l.bind
              , C = window.isFinite
              , P = function(e, t) {
                return p.call(e, t)
            }
              , S = function(e) {
                return e === Object(e)
            }
              , O = function(e, t, n) {
                let r, i;
                if (null != e)
                    if (g && e.forEach === g)
                        e.forEach(t, n);
                    else if (e.length === Number(e.length)) {
                        for (r = 0,
                        i = e.length; r < i; r++)
                            if (t.call(n, e[r], r, e) === o)
                                return
                    } else {
                        var s = x(e);
                        for (r = 0,
                        i = s.length; r < i; r++)
                            if (t.call(n, e[s[r]], s[r], e) === o)
                                return
                    }
                return e
            }
              , E = O
              , T = []
              , A = (O(["Function", "String", "Number", "Date", "RegExp"], function(e) {
                T[e] = function(t) {
                    return d.call(t) == `[object ${e}]`
                }
            }),
            T.Date)
              , Z = T.RegExp
              , _ = T.Function
              , M = T.Number
              , F = T.String
              , I = w || function(e) {
                return "[object Array]" == d.call(e)
            }
              , B = function(e) {
                return M(e) && e != Number(e)
            }
              , L = function(e, t, n) {
                const r = [];
                return null == e ? r : h && e.map === h ? e.map(t, n) : (O(e, function(e, i, o) {
                    r.push(t.call(n, e, i, o))
                }),
                r)
            }
              , N = L
              , D = function() {}
              , R = function(e, t, n, r) {
                let i = 2 < arguments.length;
                if (null == e && (e = []),
                f && e.reduce === f)
                    return r && (t = $(t, r)),
                    i ? e.reduce(t, n) : e.reduce(t);
                if (O(e, function(e, o, s) {
                    i ? n = t.call(r, n, e, o, s) : (n = e,
                    i = !0)
                }),
                i)
                    return n;
                throw new TypeError("Reduce of empty array with no initial value")
            }
              , q = R
              , z = R
              , U = function(e) {
                return e
            }
              , H = function(e, t, n) {
                t = t || U;
                let r = !1;
                return null == e ? r : v && e.some === v ? e.some(t, n) : (O(e, function(e, i, s) {
                    if (r = r || t.call(n, e, i, s))
                        return o
                }),
                Boolean(r))
            }
              , V = H
              , G = function(e, t, n) {
                let r;
                return H(e, function(e, i, o) {
                    if (t.call(n, e, i, o))
                        return r = e,
                        !0
                }),
                r
            }
              , W = G
              , K = function(e, t, n) {
                const r = [];
                return null == e ? r : m && e.filter === m ? e.filter(t, n) : (O(e, function(e, i, o) {
                    t.call(n, e, i, o) && r.push(e)
                }),
                r)
            }
              , Q = K
              , X = function(e, t, n) {
                t = t || U;
                let r = !0;
                return null == e ? r : y && e.every === y ? e.every(t, n) : (O(e, function(e, i, s) {
                    if (!(r = r && t.call(n, e, i, s)))
                        return o
                }),
                Boolean(r))
            }
              , J = X
              , Y = function(e) {
                return null == e ? 0 : (e.length === Number(e.length) ? e : x(e)).length
            }
              , te = (T.Function = function(e) {
                return "function" == typeof e
            }
            ,
            function(e) {
                return C(e) && !B(parseFloat(e))
            }
            )
              , ne = function(e) {
                return !0 === e || !1 === e || "[object Boolean]" == d.call(e)
            }
              , re = function(e) {
                return void 0 === e
            }
              , ie = function(e) {
                return function(t) {
                    return t[e]
                }
            }
              , ae = se(function(e, t, n) {
                P(e, t) ? e[t].push(n) : e[t] = [n]
            })
              , le = se(function(e, t, n) {
                e[t] = n
            })
              , ce = function(e, t, n, r) {
                var i = (n = oe(n)).call(r, t);
                let o = 0
                  , s = e.length;
                for (; o < s; ) {
                    const t = o + s >>> 1;
                    n.call(r, e[t]) < i ? o = 1 + t : s = t
                }
                return o
            }
              , ue = function(e, t, n) {
                if (null != e) {
                    let r = 0;
                    var i = e.length;
                    if (n) {
                        if ("number" != typeof n)
                            return e[r = ce(e, t)] === t ? r : -1;
                        r = n < 0 ? Math.max(0, i + n) : n
                    }
                    if (b && e.indexOf === b)
                        return e.indexOf(t, n);
                    for (; r < i; r++)
                        if (e[r] === t)
                            return r
                }
                return -1
            }
              , de = function(e, t) {
                return null != e && (e.length !== Number(e.length) && (e = function(e) {
                    var t = x(e)
                      , n = x.length
                      , r = Array(n);
                    for (let i = 0; i < n; i++)
                        r[i] = e[t[i]];
                    return r
                }(e)),
                0 <= ue(e, t))
            }
              , pe = de
              , he = function(e) {
                return function(t) {
                    if (t !== e)
                        for (const n in e)
                            if (e[n] !== t[n])
                                return !1;
                    return !0
                }
            }
              , fe = function(e, t) {
                return K(e, he(t))
            }
              , ge = function(e, t) {
                return G(e, he(t))
            }
              , me = function(e, ...t) {
                const n = u.apply(s, t);
                return K(e, function(e) {
                    return !de(n, e)
                })
            }
              , ve = ye(ee, 2)
              , we = ye(be, {
                partial: ye
            }, 1)
              , ke = t.z
              , je = function(e, t, n) {
                let r, i, o, s = null, a = 0;
                n = n || {};
                function l() {
                    a = !1 === n.leading ? 0 : ke(),
                    s = null,
                    o = e.apply(r, i),
                    r = i = null
                }
                return function(...c) {
                    var u = ke()
                      , d = (a || !1 !== n.leading || (a = u),
                    t - (u - a));
                    return r = this,
                    i = c,
                    d <= 0 ? (clearTimeout(s),
                    s = null,
                    a = u,
                    o = e.apply(r, i),
                    r = i = null) : s || !1 === n.trailing || (s = setTimeout(l, d)),
                    o
                }
            }
              , Ce = function(e) {
                var t = {}
                  , n = x(e);
                for (let r = 0, i = n.length; r < i; r++)
                    t[e[n[r]]] = n[r];
                return t
            }
              , Pe = function(e, ...t) {
                return O(t, function(t) {
                    if (t)
                        for (const n in t)
                            void 0 === e[n] && (e[n] = t[n])
                }),
                e
            }
              , Se = Object.assign || function(e, ...t) {
                return O(t, function(t) {
                    if (t)
                        for (const n in t)
                            !function(e, t) {
                                if (null == e)
                                    throw new TypeError("Cannot convert undefined or null to object");
                                return Object.prototype.hasOwnProperty.call(Object(e), t)
                            }(t, n) || (e[n] = t[n])
                }),
                e
            }
              , xe = function(e, ...t) {
                const n = {};
                return t = [].concat(...t),
                O(t, function(t) {
                    t in e && (n[t] = e[t])
                }),
                n
            }
              , Oe = function(e) {
                return function() {
                    return e
                }
            }
              , Ee = e=>M(e) && !B(e)
              , Te = {
                after: function(e, t) {
                    return function(...n) {
                        if (--e < 1)
                            return t.apply(this, n)
                    }
                },
                all: X,
                any: H,
                before: ee,
                bind: $,
                clone: function(e) {
                    return S(e) ? I(e) ? e.slice() : Se({}, e) : e
                },
                collect: N,
                compact: function(e) {
                    return K(e, U)
                },
                constant: Oe,
                contains: de,
                debounce: (e,t=100)=>{
                    let n;
                    return function(...r) {
                        clearTimeout(n),
                        n = setTimeout(()=>{
                            e.apply(this, r)
                        }
                        , t)
                    }
                }
                ,
                defaults: Pe,
                defer: we,
                delay: be,
                detect: W,
                difference: me,
                each: O,
                every: J,
                extend: Se,
                filter: K,
                find: G,
                findWhere: ge,
                foldl: q,
                forEach: E,
                groupBy: ae,
                has: P,
                identity: U,
                include: pe,
                indexBy: le,
                indexOf: ue,
                inject: z,
                invert: Ce,
                isArray: I,
                isBoolean: ne,
                isDate: A,
                isFinite: te,
                isFunction: _,
                isNaN: B,
                isNull: function(e) {
                    return null === e
                },
                isNumber: M,
                isObject: S,
                isRegExp: Z,
                isString: F,
                isUndefined: re,
                isValidNumber: Ee,
                keys: x,
                last: function(e, t, n) {
                    if (null != e)
                        return null == t || n ? e[e.length - 1] : c.call(e, Math.max(e.length - t, 0))
                },
                map: L,
                matches: he,
                max: function(e, t, n) {
                    if (!t && I(e) && e[0] === Number(e[0]) && e.length < 65535)
                        return Math.max(...e);
                    let r = -1 / 0
                      , i = -1 / 0;
                    return O(e, function(e, o, s) {
                        o = t ? t.call(n, e, o, s) : e;
                        o > i && (r = e,
                        i = o)
                    }),
                    r
                },
                memoize: function(e, t) {
                    const n = {};
                    return t = t || U,
                    function(...r) {
                        var i = t.apply(this, r);
                        return P(n, i) ? n[i] : n[i] = e.apply(this, r)
                    }
                },
                now: ke,
                omit: function(e, ...t) {
                    var n = {};
                    for (const r in e)
                        de(t, r) || (n[r] = e[r]);
                    return n
                },
                once: ve,
                partial: ye,
                pick: xe,
                pluck: function(e, t) {
                    return L(e, ie(t))
                },
                property: ie,
                propertyOf: function(e) {
                    return null == e ? function() {}
                    : function(t) {
                        return e[t]
                    }
                },
                reduce: R,
                reject: function(e, t, n) {
                    return K(e, function(e, r, i) {
                        return !t.call(n, e, r, i)
                    }, n)
                },
                result: function(e, t) {
                    if (null != e)
                        return t = e[t],
                        _(t) ? t.call(e) : t
                },
                select: Q,
                size: Y,
                some: V,
                sortedIndex: ce,
                throttle: je,
                where: fe,
                without: function(e, ...t) {
                    return me(e, t)
                }
            }
        }
        ,
        5950: (e,t,n)=>{
            "use strict";
            n.d(t, {
                O9: ()=>a,
                _N: ()=>s,
                kd: ()=>u,
                ke: ()=>l,
                vl: ()=>o
            });
            const r = /^[^:/?#]+:?\/\/[^/?#]+/
              , o = function(e) {
                if (!e)
                    return {};
                var r, t = (e=>{
                    if (e)
                        return new URL(e,window.location)
                }
                )(e), n = {};
                for (const e of t.searchParams.keys())
                    n[e] || (r = t.searchParams.getAll(e),
                    n[e] = 1 === r.length ? r[0] : r);
                return n
            }
              , s = function(e) {
                return !e || (e = new URLSearchParams(e).get("jw_start") || -1,
                isNaN(e)) || e < -1 ? -1 : Number(e)
            }
              , a = function(e, t="{seek_to_second_number}") {
                if (e)
                    return (e = new URL(e)).searchParams.set("jw_start", t),
                    e.toString()
            }
              , l = (e,t)=>{
                if (e)
                    return new URLSearchParams(e).has(t)
            }
              , c = e=>!!e && null !== e.match(r)
              , u = (e,t)=>(t = t || document.location.href,
            e && c(t) ? c(e) ? e : new URL(e,t).toString() : "")
        }
        ,
        7034: (e,t,n)=>{
            "use strict";
            n.r(t),
            n.d(t, {
                exists: ()=>i,
                isDeepKeyCompliant: ()=>u,
                isFileProtocol: ()=>s,
                isHTTPS: ()=>o,
                isRtmp: ()=>a,
                isYouTube: ()=>l,
                typeOf: ()=>c
            });
            const r = window.location.protocol
              , i = e=>{
                switch (typeof e) {
                case "string":
                    return 0 < e.length;
                case "object":
                    return null !== e;
                case "undefined":
                    return !1;
                default:
                    return !0
                }
            }
              , o = ()=>"https:" === r
              , s = ()=>"file:" === r
              , a = (e,t)=>0 === e.indexOf("rtmp:") || "rtmp" === t
              , l = (e,t)=>"youtube" === t || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)
              , c = e=>{
                var t;
                return null === e ? "null" : "object" == (t = typeof e) && Array.isArray(e) ? "array" : t
            }
              , u = (e,t,n)=>{
                var r = Object.keys(e);
                return Object.keys(t).length >= r.length && r.every(r=>{
                    var i = e[r]
                      , o = t[r];
                    return i && "object" == typeof i ? !(!o || "object" != typeof o) && u(i, o, n) : n(r, e)
                }
                )
            }
        }
        ,
        9025: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>r
            });
            const r = document.createElement("video")
        }
        ,
        6601: (e,t,n)=>{
            "use strict";
            n.d(t, {
                i: ()=>r
            });
            const r = "8.27.1+commercial_master.532.hls.js@1.4.3.jwplayer@mono.jwplayer-ads-dai@mono.jwplayer-ads-freewheel@mono.jwplayer-ads-googima@mono.jwplayer-ads-header-bidding@github:jwplayer/jwplayer-ads-header-bidding#v7.2.0.jwplayer-ads-vast@mono.jwplayer-analytics@v3.42.2.jwplayer-analytics-kraken@v0.0.4.jwplayer-plugin-gapro@mono"
        }
        ,
        4225: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>function(e, t) {
                    var {message: t, code: s} = t
                      , t = r(e.get("id"), t, e.get("localization").errors.errorCode, s.toString())
                      , s = e.get("width")
                      , e = e.get("height")
                      , t = (0,
                    i.az)(t);
                    return (0,
                    o.oB)(t, {
                        width: 0 < s.toString().indexOf("%") ? s : s + "px",
                        height: 0 < e.toString().indexOf("%") ? e : e + "px"
                    }),
                    t
                }
            });
            const r = (e,t,n,r)=>`<div id="${e}" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="${e}"].jw-error{background:#000;overflow:hidden;position:relative}[id="${e}"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="${e}"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset-text" dir="auto" data-nosnippet>${t || ""}<span class="jw-break jw-reset"></span>${r ? `(${n}: ${r})`.replace(/\s+/g, "&nbsp;") : ""}</div></div></div></div>`;
            var i = n(2799)
              , o = n(974)
        }
        ,
        9926: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>c
            });
            var r = n(1776)
              , i = n(2799)
              , o = n(974);
            const s = [];
            let a = -1;
            const l = ()=>{
                (0,
                r.W)(a),
                a = (0,
                r.U)(()=>{
                    s.forEach(e=>{
                        e.view.updateBounds();
                        var t = e.view.model.get("containerWidth");
                        e.resized = e.width !== t,
                        e.width = t
                    }
                    ),
                    s.forEach(e=>{
                        e.contractElement.scrollLeft = 2 * e.width
                    }
                    ),
                    s.forEach(e=>{
                        (0,
                        o.oB)(e.expandChild, {
                            width: e.width + 1
                        }),
                        e.resized && e.view.model.get("visibility") && e.view.updateStyles()
                    }
                    ),
                    s.forEach(e=>{
                        e.expandElement.scrollLeft = e.width + 1
                    }
                    ),
                    s.forEach(e=>{
                        e.resized && e.view.checkResized()
                    }
                    )
                }
                )
            }
            ;
            class c {
                constructor(e, t, n) {
                    var r = {
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }
                      , a = {
                        width: "100%",
                        height: "100%"
                    }
                      , c = (0,
                    i.az)('<div style="opacity:0;visibility:hidden;overflow:hidden;"><div><div style="height:1px;"></div></div><div class="jw-contract-trigger"></div></div>')
                      , u = c.firstChild
                      , d = u.firstChild
                      , p = u.nextSibling;
                    (0,
                    o.oB)([u, p], Object.assign({
                        overflow: "auto"
                    }, r, a)),
                    (0,
                    o.oB)(c, Object.assign({}, r, a)),
                    this.expandElement = u,
                    this.expandChild = d,
                    this.contractElement = p,
                    this.hiddenElement = c,
                    this.element = e,
                    this.view = t,
                    this.model = n,
                    this.width = 0,
                    this.resized = !1,
                    e.firstChild ? e.insertBefore(c, e.firstChild) : e.appendChild(c),
                    e.addEventListener("scroll", l, !0),
                    s.push(this),
                    l()
                }
                destroy() {
                    var e;
                    this.view && (-1 !== (e = s.indexOf(this)) && s.splice(e, 1),
                    this.element.removeEventListener("scroll", l, !0),
                    this.element.removeChild(this.hiddenElement),
                    this.view = this.model = null)
                }
            }
        }
        ,
        4671: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>b
            });
            var r = n(6875)
              , t = n(8348)
              , o = n(2799);
            const s = []
              , a = []
              , l = []
              , c = {}
              , u = "screen"in window && "orientation"in window.screen
              , d = t.OS.android && t.Browser.chrome;
            let p, h = !1;
            const f = (e,t)=>{
                for (let n = t.length; n--; ) {
                    var r = t[n];
                    if (e.target === r.getContainer()) {
                        r.setIntersection(e);
                        break
                    }
                }
            }
              , g = ()=>{
                s.forEach(e=>{
                    var r, t = e.model;
                    t.get("audioMode") || t.get("isFloating") || !t.get("controls") || t.get("visibility") < .75 || (t = t.get("state"),
                    !(r = (0,
                    o.UM)()) && "paused" === t && e.api.getFullscreen() ? e.api.setFullscreen(!1) : "playing" === t && e.api.setFullscreen(r))
                }
                )
            }
              , m = ()=>{
                s.forEach(e=>{
                    e.model.set("activeTab", (0,
                    r.Z)())
                }
                )
            }
              , y = (e,t)=>{
                e = t.indexOf(e);
                -1 !== e && t.splice(e, 1)
            }
              , v = e=>{
                l.forEach(t=>{
                    t(e)
                }
                )
            }
              , b = (document.addEventListener("visibilitychange", m),
            document.addEventListener("webkitvisibilitychange", m),
            d && u && window.screen.orientation.addEventListener("change", g),
            window.addEventListener("beforeunload", ()=>{
                document.removeEventListener("visibilitychange", m),
                document.removeEventListener("webkitvisibilitychange", m),
                window.removeEventListener("scroll", v),
                d && u && window.screen.orientation.removeEventListener("change", g)
            }
            ),
            {
                add(e) {
                    s.push(e)
                },
                remove(e) {
                    y(e, s)
                },
                addScrollHandler(e) {
                    h || (h = !0,
                    window.addEventListener("scroll", v)),
                    l.push(e)
                },
                removeScrollHandler(e) {
                    e = l.indexOf(e);
                    -1 !== e && l.splice(e, 1)
                },
                addWidget(e) {
                    a.push(e)
                },
                removeWidget(e) {
                    y(e, a)
                },
                size: ()=>s.length,
                observe(e) {
                    (()=>{
                        var e = window.IntersectionObserver;
                        p = p || new e(e=>{
                            if (null != e && e.length)
                                for (let t = e.length; t--; ) {
                                    var n = e[t];
                                    f(n, s),
                                    f(n, a)
                                }
                        }
                        ,{
                            threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                        })
                    }
                    )(),
                    c[e.id] || (c[e.id] = !0,
                    p.observe(e))
                },
                unobserve(e) {
                    p && c[e.id] && (delete c[e.id],
                    p.unobserve(e))
                }
            })
        }
        ,
        2445: (e,t,n)=>{
            "use strict";
            n.d(t, {
                ZP: ()=>k,
                qG: ()=>w
            });
            var r = n(5083)
              , i = n(1569)
              , o = n(6042)
              , s = n(7034)
              , a = n(576)
              , l = n(6599)
              , c = n(386);
            const u = "__CONTEXTUAL__"
              , d = (e,t)=>{
                e = e.querySelector(t);
                if (e)
                    return e.getAttribute("content")
            }
            ;
            var t = n(4737)
              , h = n.n(t)
              , f = n(67);
            const g = e=>"string" == typeof e && /^\/\/(?:content\.jwplatform|cdn\.jwplayer)\.com\//.test(e)
              , m = e=>"https:" + e
              , y = e=>{
                var t = (0,
                c.Z)(e.edition)
                  , n = e.related
                  , t = !t("discovery") || n !== Object(n)
                  , i = !n || "none" !== n.displayMode
                  , o = n || {};
                let s = void 0 === o.oncomplete ? "none" : o.oncomplete
                  , a = o.autoplaytimer;
                !1 === s || e.repeat ? s = "hide" : "none" === s && (a = 0);
                o = "autoplay" === s && a <= 0 || "none" === s;
                return Object.assign({}, n, {
                    disableRelated: t,
                    showButton: i,
                    oncomplete: s,
                    autoplaytimer: a,
                    shouldAutoAdvance: o
                })
            }
              , v = e=>{
                var t = "file:" === window.location.protocol ? "https:" : ""
                  , e = {
                    bidding: "/js/bidding.js",
                    jwpsrv: "/js/jwpsrv.js",
                    dai: "/js/dai.js",
                    vast: "/js/vast.js",
                    googima: "/js/googima.js",
                    freewheel: "/js/freewheel.js",
                    gapro: "/js/gapro.js",
                    interactive: "/js/interactive.js"
                }[e];
                return e ? t + e : ""
            }
              , b = (e,t,n)=>{
                t && delete (e[t.client || v(n)] = t).client
            }
              , w = e=>{
                const t = Object.assign({}, e.plugins)
                  , n = (0,
                c.Z)(e.edition);
                if (n("ads")) {
                    const n = Object.assign({}, e.advertising)
                      , r = n.client;
                    r && delete (t[v(r) || r] = n).client,
                    n.bids && b(t, n.bids, "bidding")
                }
                if (n("jwpsrv")) {
                    let n = e.analytics;
                    n !== Object(n) && (n = {}),
                    b(t, n, "jwpsrv")
                }
                return b(t, e.ga, "gapro"),
                b(t, e.interactive, "interactive"),
                t
            }
              , k = function(e, t) {
                let c = (0,
                r.ZP)(e, t);
                var e = c.key || a.default.key
                  , t = new l.ZP(e)
                  , b = t.edition();
                if ((c = "free" === t.edition() ? Object.assign({
                    skin: {
                        active: "#ff0046",
                        timeslider: {
                            progress: "none"
                        }
                    },
                    logo: {
                        position: "control-bar",
                        file: h()
                    }
                }, r.ke, (0,
                o.ei)(c, ["analytics", "aspectratio", "base", "file", "height", "playlist", "sources", "timeSlider", "width"])) : c).key = e,
                c.edition = b,
                c.error = t.error(),
                c.generateSEOMetadata = c.generateSEOMetadata || !1,
                "unlimited" === b) {
                    const e = (0,
                    i.getScriptPath)("jwplayer.js");
                    if (!e)
                        throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
                    n.p = e
                }
                if (c.related = y(c),
                c.ab && (c.ab = (e=>{
                    let t = e.ab;
                    return t.clone && (t = t.clone()),
                    Object.keys(t.tests).forEach(n=>{
                        t.tests[n].forEach(t=>{
                            t.addConfig && t.addConfig(e, t.selection)
                        }
                        )
                    }
                    ),
                    t
                }
                )(c)),
                c.plugins = w(c),
                e = c.playlist,
                (0,
                o.HD)(e) && -1 < e.indexOf(u) && (c.playlist = ((e,t)=>{
                    var n = null == e || null == e.querySelector || null == (n = e.querySelector("title")) ? void 0 : n.textContent
                      , i = d(e, 'meta[property="og:title"]');
                    let o = encodeURIComponent(i || n || "");
                    i = d(e, 'meta[property="og:description"]') || d(e, 'meta[name="description"]');
                    return i && (o += "&page_description=" + encodeURIComponent(i)),
                    t.replace(u, o)
                }
                )(document, c.playlist),
                c.contextual = !0),
                (0,
                s.isFileProtocol)()) {
                    const {playlist: e, related: t} = c;
                    g(e) && (c.playlist = m(e)),
                    t && g(t.file) && (t.file = m(t.file))
                }
                return c.__abSendDomainToFeeds && (t = c.playlist,
                /\.jwplatform.com|\.jwplayer.com/.test(t)) && (c.playlist = (b = c.playlist) + (`${-1 !== b.indexOf("?") ? "&" : "?"}page_domain=` + encodeURIComponent((0,
                f.X)()))),
                c
            }
        }
        ,
        576: (e,t,n)=>{
            "use strict";
            n.d(t, {
                default: ()=>Q
            });
            var t = n(1096)
              , t = n.n(t)
              , t = (window.Promise || (window.Promise = t()),
            n(1569))
              , s = n(6391)
              , a = n(2963)
              , l = n(670)
              , a = {
                availableProviders: a.B,
                registerProvider: l.Z
            }
              , u = n(1241);
            a.registerPlugin = function(e, t, n) {
                "jwpsrv" !== e && (0,
                u.f)(e, t, n)
            }
            ;
            const d = a;
            var p = n(6601)
              , h = n(4742)
              , f = n(8348)
              , g = n(623)
              , m = n(1643)
              , y = n(7411)
              , v = n(328)
              , b = n(4429)
              , w = n(6042);
            let k = 0;
            function j(e, t) {
                return (t = new g.ZP(t)).on(m.Rc, t=>{
                    e._qoe.tick("ready"),
                    t.setupTime = e._qoe.between("setup", "ready")
                }
                ),
                t.on("all", (t,n)=>{
                    e.trigger(t, n)
                }
                ),
                t
            }
            function C(e, t) {
                const n = e.plugins
                  , r = Object.keys(n).map(e=>{
                    var t = n[e];
                    return delete n[e],
                    t
                }
                );
                t.get("setupConfig") && e.trigger("remove"),
                e.off(),
                t.playerDestroy(),
                r.forEach(e=>{
                    if (e.destroy)
                        try {
                            e.destroy()
                        } catch (e) {}
                }
                ),
                t.getContainer().removeAttribute("data-jwplayer-id")
            }
            function P(e) {
                const t = ++k
                  , n = e.id || "player-" + t
                  , r = new y.Z
                  , i = {};
                let o = j(this, e);
                r.tick("init"),
                e.setAttribute("data-jwplayer-id", n),
                Object.defineProperties(this, {
                    id: {
                        enumerable: !0,
                        get: ()=>n
                    },
                    uniqueId: {
                        enumerable: !0,
                        get: ()=>t
                    },
                    plugins: {
                        enumerable: !0,
                        get: ()=>i
                    },
                    _qoe: {
                        enumerable: !0,
                        get: ()=>r
                    },
                    version: {
                        enumerable: !0,
                        get: ()=>p.i
                    },
                    Events: {
                        enumerable: !0,
                        get: ()=>v.ZP
                    },
                    utils: {
                        enumerable: !0,
                        get: ()=>b.Z
                    },
                    _: {
                        enumerable: !0,
                        get: ()=>w.ZP
                    }
                }),
                Object.assign(this, {
                    _events: {},
                    setup(t) {
                        return r.clear("ready"),
                        r.tick("setup"),
                        o && C(this, o),
                        (o = j(this, e)).init(t, this),
                        this.on(t.events, null, this)
                    },
                    remove() {
                        this.getPip() && this.setPip(!1);
                        var e = this;
                        for (let t = s.Z.length; t--; )
                            if (s.Z[t].uniqueId === e.uniqueId) {
                                s.Z.splice(t, 1);
                                break
                            }
                        return o && C(this, o),
                        Object.keys(i).forEach(e=>{
                            delete i[e]
                        }
                        ),
                        this
                    },
                    qoe() {
                        var e = o.getItemQoe();
                        return {
                            setupTime: this._qoe.between("setup", "ready"),
                            firstFrame: e.getFirstFrame ? e.getFirstFrame() : null,
                            player: this._qoe.dump(),
                            item: e.dump()
                        }
                    },
                    addCues(e) {
                        return Array.isArray(e) && o.addCues(e),
                        this
                    },
                    getAudioTracks: ()=>o.getAudioTracks(),
                    getBuffer: ()=>o.get("buffer"),
                    getCaptions: ()=>o.get("captions"),
                    getCaptionsList: ()=>o.getCaptionsList(),
                    getConfig: ()=>o.getConfig(),
                    getContainer: ()=>o.getContainer(),
                    getControls: ()=>o.get("controls"),
                    getAll: ()=>o,
                    getCues: ()=>o.getCues(),
                    getCurrentAudioTrack: ()=>o.getCurrentAudioTrack(),
                    getCurrentCaptions: ()=>o.getCurrentCaptions(),
                    getCurrentQuality: ()=>o.getCurrentQuality(),
                    getCurrentTime: ()=>o.get("currentTime"),
                    getAbsolutePosition: ()=>o.getAbsolutePosition(),
                    getDuration: ()=>o.get("duration"),
                    getEnvironment: ()=>f,
                    getFullscreen: ()=>o.get("fullscreen"),
                    getHeight: ()=>o.getHeight(),
                    getItemMeta: ()=>o.get("itemMeta") || {},
                    getMute: ()=>o.getMute(),
                    getPercentViewable: ()=>o.get("visibility"),
                    getPip: ()=>o.get("pip"),
                    getPlaybackRate: ()=>o.get("playbackRate"),
                    getPlaylist: ()=>o.get("playlist"),
                    getPlaylistIndex: ()=>o.get("item"),
                    getPlaylistItem(e) {
                        var t;
                        return b.Z.exists(e) ? (t = this.getPlaylist()) ? t[e] : null : o.get("playlistItem")
                    },
                    getPosition: ()=>o.get("position"),
                    getProvider: ()=>o.getProvider(),
                    getQualityLevels: ()=>o.getQualityLevels(),
                    getSafeRegion: (e=!0)=>o.getSafeRegion(e),
                    getState: ()=>o.getState(),
                    getStretching: ()=>o.get("stretching"),
                    getViewable: ()=>o.get("viewable"),
                    getVisualQuality: ()=>o.getVisualQuality(),
                    getVolume: ()=>o.get("volume"),
                    getWidth: ()=>o.getWidth(),
                    setCaptions(e) {
                        return o.setCaptions(e),
                        this
                    },
                    setConfig(e) {
                        return o.setConfig(e),
                        this
                    },
                    setControls(e) {
                        return o.setControls(e),
                        this
                    },
                    setCurrentAudioTrack(e) {
                        o.setCurrentAudioTrack(e)
                    },
                    setCurrentCaptions(e) {
                        o.setCurrentCaptions(e)
                    },
                    setCurrentQuality(e) {
                        o.setCurrentQuality(e)
                    },
                    setFullscreen(e) {
                        return o.setFullscreen(e),
                        this
                    },
                    setAllowFullscreen(e) {
                        return o.setAllowFullscreen(e),
                        this
                    },
                    setMute(e) {
                        return o.setMute(e),
                        this
                    },
                    setPip(e) {
                        return o.setPip(e),
                        this
                    },
                    setPlaybackRate(e) {
                        return o.setPlaybackRate(e),
                        this
                    },
                    setPlaylistItem(e, t) {
                        return o.setPlaylistItem(e, t),
                        this
                    },
                    setCues(e) {
                        return Array.isArray(e) && o.setCues(e),
                        this
                    },
                    setVolume(e) {
                        return o.setVolume(e),
                        this
                    },
                    load(e, t) {
                        return o.load(e, t),
                        this
                    },
                    play(e) {
                        return o.play(e),
                        this
                    },
                    pause(e) {
                        return o.pause(e),
                        this
                    },
                    playToggle(e) {
                        switch (this.getState()) {
                        case m.r0:
                        case m.Kb:
                            return this.pause(e);
                        default:
                            return this.play(e)
                        }
                    },
                    seek(e, t) {
                        return o.seek(e, t),
                        this
                    },
                    playlistItem(e, t) {
                        return o.playlistItem(e, t),
                        this
                    },
                    playlistNext(e) {
                        return o.playlistNext(e),
                        this
                    },
                    playlistPrev(e) {
                        return o.playlistPrev(e),
                        this
                    },
                    next(e) {
                        return o.next(e),
                        this
                    },
                    requestPip(e) {
                        return o.requestPip(e),
                        this
                    },
                    castToggle() {
                        return o.castToggle(),
                        this
                    },
                    stopCasting() {
                        return o.stopCasting(),
                        this
                    },
                    requestCast(e) {
                        return o.requestCast(e),
                        this
                    },
                    createInstream: ()=>o.createInstream(),
                    stop() {
                        return o.stop(),
                        this
                    },
                    resize(e, t) {
                        return o.resize(e, t),
                        this
                    },
                    addButton(e, t, n, r, i) {
                        return o.addButton(e, t, n, r, i),
                        this
                    },
                    removeButton(e) {
                        return o.removeButton(e),
                        this
                    },
                    getMediaElement: ()=>o.getMediaElement(),
                    attachMedia() {
                        return o.attachMedia(),
                        this
                    },
                    detachMedia() {
                        return o.detachMedia(),
                        this
                    },
                    isBeforeComplete: ()=>o.isBeforeComplete(),
                    isBeforePlay: ()=>o.isBeforePlay(),
                    setPlaylistItemCallback(e, t) {
                        o.setItemCallback(e, t)
                    },
                    removePlaylistItemCallback() {
                        o.setItemCallback(null)
                    },
                    getPlaylistItemPromise: e=>o.getItemPromise(e),
                    getFloating: ()=>Boolean(o.get("isFloating")),
                    setFloating(e) {
                        o.setConfig({
                            floating: {
                                mode: e ? "always" : "never"
                            }
                        })
                    },
                    getChapters: ()=>o.getChapters(),
                    getCurrentChapter: ()=>o.getCurrentChapter(),
                    setChapter: e=>o.setChapter(e)
                })
            }
            Object.assign(P.prototype, {
                on(e, t, n) {
                    return v.on.call(this, e, t, n)
                },
                once(e, t, n) {
                    return v.IH.call(this, e, t, n)
                },
                off(e, t, n) {
                    return v.S1.call(this, e, t, n)
                },
                trigger(e, t) {
                    return (t = w.ZP.isObject(t) ? Object.assign({}, t) : {}).type = e,
                    (h.Z.debug ? v.X$ : v.wj).call(this, e, t)
                },
                getPlugin(e) {
                    return this.plugins[e]
                },
                addPlugin(e, t) {
                    this.plugins[e] = t,
                    this.on("ready", t.addToPlayer),
                    t.resize && this.on("resize", t.resizeHandler)
                },
                registerPlugin(e, t, n) {
                    (0,
                    u.f)(e, t, n)
                },
                getAdBlock: ()=>!1,
                playAd(e) {},
                pauseAd(e) {},
                skipAd() {}
            }),
            n.p = (0,
            t.loadFrom)();
            function x(e) {
                let t, n;
                if (e ? "string" == typeof e ? (t = S(e)) || (n = document.getElementById(e)) : "number" == typeof e ? t = s.Z[e] : e.nodeType && (n = e,
                t = S(n.id || n.getAttribute("data-jwplayer-id"))) : t = s.Z[0],
                t)
                    return t;
                if (n) {
                    const e = new P(n);
                    return s.Z.push(e),
                    e
                }
                return {
                    registerPlugin: u.f
                }
            }
            const S = e=>{
                for (let t = 0; t < s.Z.length; t++)
                    if (s.Z[t].id === e)
                        return s.Z[t];
                return null
            }
              , O = e=>{
                Object.defineProperties(e, {
                    api: {
                        get: ()=>d,
                        set() {}
                    },
                    version: {
                        get: ()=>p.i,
                        set() {}
                    },
                    debug: {
                        get: ()=>h.Z.debug,
                        set(e) {
                            h.Z.debug = Boolean(e)
                        }
                    }
                })
            }
              , E = (O(x),
            x);
            var l = n(5882)
              , a = n(6599)
              , t = n(676)
              , _ = n(5592)
              , M = n(6769)
              , F = n(9025)
              , I = w.ZP.extend
              , B = {}
              , a = (B._ = w.ZP,
            B.utils = Object.assign(b.Z, {
                key: a.ZP,
                extend: I,
                scriptloader: t.ZP,
                rssparser: {
                    parse: M.Z
                },
                tea: _.p,
                UI: l.ZP
            }),
            B.utils.css.style = B.utils.style,
            B.vid = F.Z,
            B)
              , N = n(7543);
            function V(e) {
                var t = {};
                H(this, e, e, t),
                H(this, e, P.prototype, t)
            }
            function W(e) {
                return (e = E(e)).uniqueId ? e._publicApi || (e._publicApi = new V(e)) : e
            }
            const D = /^(?:on(?:ce)?|off|trigger)$/
              , $ = e=>{
                console.warn(`The API method jwplayer().${e}() is disabled in the free edition of JW Player.`)
            }
              , q = (e,t)=>{
                if (t.length) {
                    const n = e.getPlugin("jwpsrv");
                    null != n && n.trackExternalAPIUsage && (t.forEach(e=>{
                        ((e,t,n)=>{
                            try {
                                var r = ((e,t)=>{
                                    switch (e) {
                                    case "setup":
                                        return Boolean(t);
                                    case "getSafeRegion":
                                    case "pauseAd":
                                    case "setControls":
                                    case "setFullscreen":
                                    case "setMute":
                                        return Boolean(t) === t ? t : void 0;
                                    case "setPlaylistItem":
                                    case "getPlaylistItem":
                                        return (0 | t) === t ? t : void 0;
                                    case "setPlaybackRate":
                                    case "setVolume":
                                        return Number(t);
                                    case "setConfig":
                                        return Object.keys(Object(t)).join(",");
                                    case "on":
                                    case "once":
                                    case "off":
                                    case "trigger":
                                    case "getPlugin":
                                    case "addPlugin":
                                    case "registerPlugin":
                                        return "" + t
                                    }
                                    return null
                                }
                                )(t, n);
                                e.trackExternalAPIUsage(t, r)
                            } catch (e) {
                                h.Z.debug && console.warn(e)
                            }
                        }
                        )(n, e[0], e[1])
                    }
                    ),
                    t.length = 0)
                }
            }
              , z = (e,t,n,r,i)=>function(...o) {
                const s = o[0]
                  , a = t._trackCallQueue || (t._trackCallQueue = [])
                  , l = D.test(n)
                  , c = l && o[1] && o[1]._callback
                  , u = i.edition || ((e,t,n)=>{
                    e = e.getConfig()[n];
                    return t[n] = e
                }
                )(t, i, "edition");
                if ("free" === u) {
                    if (-1 < ["addButton", "addCues", "detachMedia", "load", "next", "pause", "play", "playlistItem", "playlistNext", "playlistPrev", "playToggle", "resize", "seek", "setCaptions", "setConfig", "setControls", "setCues", "setFullscreen", "setMute", "setPlaybackRate", "setPlaylistItem", "setVolume", "stop"].indexOf(n))
                        return $(n),
                        e;
                    if (-1 < ["createInstream", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality"].indexOf(n))
                        return $(n),
                        null
                }
                if (c || a.push([n, s]),
                l)
                    return q(t, a),
                    t[n].apply(e, o);
                ((e,t)=>{
                    var n = {
                        reason: "play" !== e && "seek" !== e && "pause" !== e && (0,
                        N.C)() ? "interaction" : "external"
                    };
                    switch (e) {
                    case "play":
                    case "pause":
                    case "playToggle":
                    case "playlistNext":
                    case "playlistPrev":
                    case "next":
                        t[0] = n;
                        break;
                    case "seek":
                    case "playlistItem":
                        t[1] = n
                    }
                }
                )(n, o);
                o = t[n](...o);
                return "remove" === n ? t.off.call(e) : "setup" === n && (t.off.call(e),
                t.off(s.events, null, t),
                t.on.call(e, s.events, null, e),
                t.on("all", (n,o)=>{
                    if ("ready" === n) {
                        const n = Object.keys(t).filter(e=>"_" !== e[0] && -1 === r.indexOf(e) && "function" == typeof t[e])
                          , o = r.concat(n);
                        n.forEach(n=>{
                            e[n] = z(e, t, n, o, i)
                        }
                        )
                    }
                    t.trigger.call(e, n, o),
                    q(t, a)
                }
                )),
                q(t, a),
                o === t ? e : o
            }
              , U = ["getMediaElement"]
              , H = (e,t,n,r)=>{
                const i = Object.keys(n);
                i.forEach(o=>{
                    var s = n[o];
                    -1 === U.indexOf(o) && ("function" == typeof s && "Events" !== o ? e[o] = z(e, t, o, i, r) : "_events" === o ? e._events = {} : Object.defineProperty(e, o, {
                        enumerable: !0,
                        get: ()=>n[o]
                    }))
                }
                )
            }
              , G = window;
            Object.assign(E, a);
            Object.assign(W, a),
            O(W),
            "function" == typeof G.define && G.define.amd && G.define([], function() {
                return W
            });
            let K = W;
            const Q = K = G.jwplayer ? G.jwplayer : K
        }
        ,
        3487: (e,t,n)=>{
            "use strict";
            n.d(t, {
                MK: ()=>i,
                Nq: ()=>o,
                bX: ()=>s
            });
            var r = n(7164);
            const i = r.MK
              , o = r.Nq
              , s = function(e) {
                let t = (0,
                r.bX)(e);
                if (e)
                    switch ((0,
                    r.Nq)(e)) {
                    case "jwpsrv":
                        t = 305001;
                        break;
                    case "googima":
                        t = 305002;
                        break;
                    case "vast":
                        t = 305003;
                        break;
                    case "freewheel":
                        t = 305004;
                        break;
                    case "dai":
                        t = 305005;
                        break;
                    case "gapro":
                        t = 305006;
                        break;
                    case "bidding":
                        t = 305007
                    }
                return t
            }
        }
        ,
        1918: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Gb: ()=>u,
                d3: ()=>d,
                lD: ()=>c,
                w0: ()=>l
            });
            var r = n(386);
            const i = [{
                configName: "clearkey",
                keyName: "org.w3.clearkey"
            }]
              , o = []
              , s = {};
            let a;
            const l = e=>e.some(e=>Boolean(e.drm) || e.sources.some(e=>Boolean(e.drm)))
              , c = e=>a || ((Boolean(navigator.requestMediaKeySystemAccess) && Boolean(window.MediaKeySystemAccess.prototype.getConfiguration) || Boolean(window.MSMediaKeys)) && (0,
            r.Z)(e)("drm") ? (i.forEach(e=>{
                n = e.keyName;
                var n, t = (navigator.requestMediaKeySystemAccess ? navigator.requestMediaKeySystemAccess(n, [{
                    initDataTypes: ["cenc"],
                    videoCapabilities: [{
                        contentType: 'video/mp4;codecs="avc1.4d401e"'
                    }],
                    audioCapabilities: [{
                        contentType: 'audio/mp4;codecs="mp4a.40.2"'
                    }]
                }]) : new Promise((e,t)=>{
                    let r;
                    try {
                        r = new window.MSMediaKeys(n)
                    } catch (e) {
                        return void t(e)
                    }
                    e(r)
                }
                )).then(function() {
                    s[e.configName] = !0
                }).catch(function() {
                    s[e.configName] = !1
                });
                o.push(t)
            }
            ),
            a = Promise.all(o)) : Promise.resolve())
              , u = e=>s[e]
              , d = e=>{
                if (a)
                    return Object.keys(e).some(e=>u(e))
            }
        }
        ,
        2963: (e,t,n)=>{
            "use strict";
            n.d(t, {
                B: ()=>u
            });
            var r = n(6593)
              , i = n(8348)
              , o = n(386)
              , s = n(6042)
              , a = n(1918)
              , l = n(9025);
            const c = (e=['video/mp4;codecs="avc1.4d400d,mp4a.40.2"'])=>{
                const t = window.MediaSource;
                return !(!t || !t.isTypeSupported) && (0,
                s.$6)(e, e=>t.isTypeSupported(e))
            }
            ;
            {
                const e = (0,
                s.sE)(r.B, (0,
                s.wB)({
                    name: "html5"
                }))
                  , t = e.supports;
                e.supports = function(...e) {
                    var [n,r] = e
                      , e = t.apply(this, e);
                    if (e && n.drm && "hls" === n.type) {
                        const e = (0,
                        o.Z)(r)("drm");
                        if (e && n.drm.fairplay) {
                            const e = window.WebKitMediaKeys;
                            return null == e || null == e.isTypeSupported ? void 0 : e.isTypeSupported("com.apple.fps.1_0", "video/mp4")
                        }
                        return e
                    }
                    return e
                }
                ,
                r.B.push({
                    name: "shaka",
                    supports(e) {
                        return !(e.drm && !(0,
                        a.d3)(e.drm)) && !(!window.HTMLVideoElement || !window.MediaSource) && c(e.mediaTypes) && ("hls" === e.type || "dash" === e.type || "mpd" === e.type || -1 < (e.file || "").indexOf("mpd-time-csf"))
                    }
                }),
                r.B.unshift({
                    name: "hlsjs",
                    supports: e=>(e=>{
                        var n, t, a, u;
                        return !e.drm && (t = -1 < e.file.indexOf(".m3u8"),
                        n = "hls" === e.type || "m3u8" === e.type,
                        t || n) && (n = !(t = Boolean(null == l.Z || null == l.Z.canPlayType ? void 0 : l.Z.canPlayType("application/vnd.apple.mpegURL"))) || i.OS.android || i.OS.tizen,
                        t = i.Browser.safari && !t,
                        a = i.OS.android && !1 === e.hlsjsdefault,
                        u = i.Browser.safari && Boolean(e.safarihlsjs),
                        c(e.mediaTypes || ['video/mp4;codecs="avc1.4d400d,mp4a.40.2"'])) && (n || u || t) && !a
                    }
                    )(e)
                })
            }
            const u = r.B
        }
        ,
        2303: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>d
            });
            var r = n(2963)
              , i = n(12)
              , o = n(670)
              , s = n(2894)
              , t = {
                html5: ()=>n.e(250).then(function(e) {
                    var t = n(9181).default;
                    return (0,
                    o.Z)(t),
                    t
                }
                .bind(null, n)).catch((0,
                s.Ep)(152))
            };
            Object.assign(t, {
                shaka: ()=>n.e(371).then(function(e) {
                    var t = n(2287).default;
                    return (0,
                    o.Z)(t),
                    t
                }
                .bind(null, n)).catch((0,
                s.Ep)(154)),
                hlsjs: ()=>n.e(98).then(function(e) {
                    var t = n(9054).default;
                    return (0,
                    o.Z)(t),
                    t
                }
                .bind(null, n)).catch((0,
                s.Ep)(153))
            });
            function c(e) {
                this.config = e || {}
            }
            const l = t;
            Object.assign(c.prototype, {
                load(e) {
                    const t = l[e]
                      , n = ()=>Promise.reject(new Error("Failed to load media"));
                    return t ? t().then(()=>{
                        return i.U[e] || n()
                    }
                    ) : n()
                },
                providerSupports: (e,t)=>e.supports(t),
                choose(e) {
                    if (e === Object(e)) {
                        var t = r.B.length;
                        for (let n = 0; n < t; n++) {
                            var o = r.B[n];
                            if (this.providerSupports(o, e))
                                return {
                                    priority: t - n - 1,
                                    name: o.name,
                                    type: e.type,
                                    providerToCheck: o,
                                    provider: i.U[o.name]
                                }
                        }
                    }
                    return {}
                }
            });
            t = c;
            t.prototype.providerSupports = function(e, t) {
                return e.supports(t, this.config.edition)
            }
            ;
            const d = t
        }
        ,
        5140: (e,t,n)=>{
            "use strict";
            n.d(t, {
                t: ()=>r
            });
            const r = window.atob;
            window.btoa
        }
        ,
        386: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>function(e) {
                    const t = {
                        setup: [r, i, o, s, a, l, u, d, p, c],
                        drm: [a, l, u, d, p],
                        ads: [u, d, p, c, a, l, o],
                        jwpsrv: [r, i, o, s, a, l, u, p, c, h],
                        discovery: [u, a, l, p, d]
                    };
                    return function(n) {
                        return t[n] && -1 < t[n].indexOf(e)
                    }
                }
            });
            const r = "free"
              , i = "starter"
              , o = "business"
              , s = "premium"
              , a = "enterprise"
              , l = "developer"
              , c = "platinum"
              , u = "ads"
              , d = "unlimited"
              , p = "trial"
              , h = "invalid"
        }
        ,
        7010: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>function() {
                    return i(window, document.location.search)
                }
            });
            var r = n(5950);
            const i = function(e, t) {
                return e.location !== e.parent.location && (0,
                r.ke)(t, "isAMP")
            }
        }
        ,
        560: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>i
            });
            const r = ()=>r._iframe
              , i = (r.mock = e=>{
                r._iframe = e
            }
            ,
            r.unmock = ()=>{
                r._iframe = r._original
            }
            ,
            r._iframe = window.top !== window.self,
            r._original = r._iframe,
            r)
        }
        ,
        6599: (e,t,n)=>{
            "use strict";
            n.d(t, {
                ZP: ()=>c,
                u5: ()=>a
            });
            var r = n(5592)
              , i = n(386)
              , o = n(5140)
              , s = n(4446);
            const a = 100013
              , l = "invalid"
              , c = class {
                constructor(e) {
                    this.keyData = (e=>{
                        let t, n, s;
                        try {
                            var a = (0,
                            r.p)(e || "", (0,
                            o.t)("NDh2aU1Cb0NHRG5hcDFRZQ==")).split("/");
                            if ("pro" === (t = a[0]) && (t = "premium"),
                            (0,
                            i.Z)(t)("setup") || (t = l),
                            2 < a.length) {
                                n = a[1];
                                const e = parseInt(a[2], 10);
                                0 < e && (s = new Date).setTime(e)
                            }
                        } catch (e) {
                            t = l
                        }
                        return {
                            edition: t,
                            token: n,
                            expiration: s
                        }
                    }
                    )(e),
                    this.edition = function() {
                        return this.keyData.edition
                    }
                    ,
                    this.token = function() {
                        return this.keyData.token
                    }
                    ,
                    this.expiration = function() {
                        return this.keyData.expiration
                    }
                    ,
                    this.duration = function() {
                        return this.keyData.expiration ? this.keyData.expiration.getTime() - (new Date).getTime() : 0
                    }
                    ,
                    this.error = function() {
                        let t;
                        return void 0 === e ? t = 100011 : this.keyData.edition !== l && this.keyData.token ? this.duration() < 0 && (t = a) : t = 100012,
                        t ? new s.rG(s.pJ,t) : null
                    }
                }
            }
        }
        ,
        67: (e,t,n)=>{
            "use strict";
            n.d(t, {
                X: ()=>i
            });
            var r = n(560);
            const i = ()=>{
                let e = window.location.host;
                if ((0,
                r.Z)()) {
                    e = (document.referrer ? (e=>{
                        var t = document.createElement("a");
                        return t.href = e,
                        t
                    }
                    )(document.referrer) : {}).host;
                    try {
                        e = e || window.top.location.host
                    } catch (e) {}
                }
                return e
            }
        }
        ,
        5592: (e,t,n)=>{
            "use strict";
            n.d(t, {
                p: ()=>a
            });
            var r = n(5140);
            const o = e=>{
                var t = new Array(Math.ceil(e.length / 4));
                for (let n = 0; n < t.length; n++)
                    t[n] = e.charCodeAt(4 * n) + (e.charCodeAt(4 * n + 1) << 8) + (e.charCodeAt(4 * n + 2) << 16) + (e.charCodeAt(4 * n + 3) << 24);
                return t
            }
              , a = function(e, t) {
                if (e = String(e),
                t = String(t),
                0 === e.length)
                    return "";
                var n = o((0,
                r.t)(e))
                  , a = o((e=>unescape(encodeURIComponent(e)))(t).slice(0, 16))
                  , l = n.length
                  , c = 2654435769;
                let u, d, p = void n[l - 1], h = n[0], f = Math.floor(6 + 52 / l) * c;
                for (; f; ) {
                    d = f >>> 2 & 3;
                    for (let e = l - 1; 0 <= e; e--)
                        u = ((p = n[0 < e ? e - 1 : l - 1]) >>> 5 ^ h << 2) + (h >>> 3 ^ p << 4) ^ (f ^ h) + (a[3 & e ^ d] ^ p),
                        h = n[e] -= u;
                    f -= c
                }
                return (e=>{
                    try {
                        return decodeURIComponent(escape(e))
                    } catch (t) {
                        return e
                    }
                }
                )((e=>{
                    var t = new Array(e.length);
                    for (let n = 0; n < e.length; n++)
                        t[n] = String.fromCharCode(255 & e[n], e[n] >>> 8 & 255, e[n] >>> 16 & 255, e[n] >>> 24 & 255);
                    return t.join("")
                }
                )(n).replace(/\0+$/, ""))
            }
        }
        ,
        1096: function(e) {
            e.exports = function() {
                "use strict";
                function e() {}
                function t(e) {
                    if (!(this instanceof t))
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e)
                        throw new TypeError("not a function");
                    this._state = 0,
                    this._handled = !1,
                    this._value = void 0,
                    this._deferreds = [],
                    s(e, this)
                }
                function n(e, n) {
                    for (; 3 === e._state; )
                        e = e._value;
                    0 !== e._state ? (e._handled = !0,
                    t._immediateFn(function() {
                        var o, t = 1 === e._state ? n.onFulfilled : n.onRejected;
                        if (null !== t) {
                            try {
                                o = t(e._value)
                            } catch (e) {
                                return void i(n.promise, e)
                            }
                            r(n.promise, o)
                        } else
                            (1 === e._state ? r : i)(n.promise, e._value)
                    })) : e._deferreds.push(n)
                }
                function r(e, n) {
                    try {
                        if (n === e)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (n && ("object" == typeof n || "function" == typeof n)) {
                            var r = n.then;
                            if (n instanceof t)
                                return e._state = 3,
                                e._value = n,
                                o(e);
                            if ("function" == typeof r)
                                return s(function(e, t) {
                                    return function() {
                                        e.apply(t, arguments)
                                    }
                                }(r, n), e)
                        }
                        e._state = 1,
                        e._value = n,
                        o(e)
                    } catch (t) {
                        i(e, t)
                    }
                }
                function i(e, t) {
                    e._state = 2,
                    e._value = t,
                    o(e)
                }
                function o(e) {
                    2 === e._state && 0 === e._deferreds.length && t._immediateFn(function() {
                        e._handled || t._unhandledRejectionFn(e._value)
                    });
                    for (var r = 0, i = e._deferreds.length; r < i; r++)
                        n(e, e._deferreds[r]);
                    e._deferreds = null
                }
                function s(e, t) {
                    var n = !1;
                    try {
                        e(function(e) {
                            n || (n = !0,
                            r(t, e))
                        }, function(e) {
                            n || (n = !0,
                            i(t, e))
                        })
                    } catch (e) {
                        n || (n = !0,
                        i(t, e))
                    }
                }
                var a = setTimeout;
                return t.prototype.catch = function(e) {
                    return this.then(null, e)
                }
                ,
                t.prototype.then = function(t, r) {
                    var i = new this.constructor(e);
                    return n(this, new function(e, t, n) {
                        this.onFulfilled = "function" == typeof e ? e : null,
                        this.onRejected = "function" == typeof t ? t : null,
                        this.promise = n
                    }
                    (t,r,i)),
                    i
                }
                ,
                t.prototype.finally = function(e) {
                    var t = this.constructor;
                    return this.then(function(n) {
                        return t.resolve(e()).then(function() {
                            return n
                        })
                    }, function(n) {
                        return t.resolve(e()).then(function() {
                            return t.reject(n)
                        })
                    })
                }
                ,
                t.all = function(e) {
                    return new t(function(t, n) {
                        if (!e || void 0 === e.length)
                            throw new TypeError("Promise.all accepts an array");
                        var i = Array.prototype.slice.call(e);
                        if (0 === i.length)
                            return t([]);
                        for (var o = i.length, s = 0; i.length > s; s++)
                            !function r(e, s) {
                                try {
                                    if (s && ("object" == typeof s || "function" == typeof s)) {
                                        var a = s.then;
                                        if ("function" == typeof a)
                                            return a.call(s, function(t) {
                                                r(e, t)
                                            }, n)
                                    }
                                    i[e] = s,
                                    0 == --o && t(i)
                                } catch (e) {
                                    n(e)
                                }
                            }(s, i[s])
                    }
                    )
                }
                ,
                t.resolve = function(e) {
                    return e && "object" == typeof e && e.constructor === t ? e : new t(function(t) {
                        t(e)
                    }
                    )
                }
                ,
                t.reject = function(e) {
                    return new t(function(t, n) {
                        n(e)
                    }
                    )
                }
                ,
                t.race = function(e) {
                    return new t(function(t, n) {
                        for (var r = 0, i = e.length; r < i; r++)
                            e[r].then(t, n)
                    }
                    )
                }
                ,
                t._immediateFn = "function" == typeof setImmediate ? function(e) {
                    setImmediate(e)
                }
                : function(e) {
                    a(e, 0)
                }
                ,
                t._unhandledRejectionFn = function(e) {
                    void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                }
                ,
                t
            }()
        },
        9563: e=>{
            var t, n, r = {}, i = {}, o = (t = function() {
                return document.head || document.getElementsByTagName("head")[0]
            }
            ,
            function() {
                return n = void 0 === n ? t.apply(this, arguments) : n
            }
            );
            function s(e) {
                var t = document.createElement("style");
                return t.type = "text/css",
                t.setAttribute("data-jwplayer-id", e),
                function(e) {
                    o().appendChild(e)
                }(t),
                t
            }
            function a(e, t) {
                var r, a = i[e], l = (a = a || (i[e] = {
                    element: s(e),
                    counter: 0
                })).counter++, n = a.element, o = function() {
                    u(n, l, "")
                };
                return (r = function(e) {
                    u(n, l, e)
                }
                )(t.css),
                function(e) {
                    e ? e.css === t.css && e.media === t.media || r((t = e).css) : o()
                }
            }
            e.exports = {
                style: function(e, t) {
                    !function(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n]
                              , o = (r[e] || {})[i.id];
                            if (o) {
                                for (var s = 0; s < o.parts.length; s++)
                                    o.parts[s](i.parts[s]);
                                for (; s < i.parts.length; s++)
                                    o.parts.push(a(e, i.parts[s]))
                            } else {
                                for (var l = [], s = 0; s < i.parts.length; s++)
                                    l.push(a(e, i.parts[s]));
                                r[e] = r[e] || {},
                                r[e][i.id] = {
                                    id: i.id,
                                    parts: l
                                }
                            }
                        }
                    }(t, function(e) {
                        for (var t = [], n = {}, r = 0; r < e.length; r++) {
                            var i = e[r]
                              , o = i[0]
                              , i = {
                                css: i[1],
                                media: i[2]
                            };
                            n[o] ? n[o].parts.push(i) : t.push(n[o] = {
                                id: o,
                                parts: [i]
                            })
                        }
                        return t
                    }(e))
                },
                clear: function(e, t) {
                    var n = r[e];
                    if (n)
                        if (t) {
                            var i = n[t];
                            if (i)
                                for (var o = 0; o < i.parts.length; o += 1)
                                    i.parts[o]()
                        } else {
                            for (var s = Object.keys(n), a = 0; a < s.length; a += 1)
                                for (var l = n[s[a]], c = 0; c < l.parts.length; c += 1)
                                    l.parts[c]();
                            delete r[e]
                        }
                }
            };
            l = [];
            var l, c = function(e, t) {
                return l[e] = t,
                l.filter(Boolean).join("\n")
            };
            function u(e, t, n) {
                e.styleSheet ? e.styleSheet.cssText = c(t, n) : (n = document.createTextNode(n),
                (t = e.childNodes[t]) ? e.replaceChild(n, t) : e.appendChild(n))
            }
        }
        ,
        4737: e=>{
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 29.3" class="jw-svg-icon jw-svg-icon-watermark" focusable="false"><path d="M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z"></path><polygon points="58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61"></polygon><path d="M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z"></path><path d="M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z"></path><polygon points="113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18"></polygon><polygon points="123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29"></polygon><path d="M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z"></path><path d="M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z"></path></svg>'
        }
    }, r = {};
    function i(e) {
        var t = r[e];
        return void 0 !== t || (t = r[e] = {
            id: e,
            loaded: !1,
            exports: {}
        },
        n[e].call(t.exports, t, t.exports, i),
        t.loaded = !0),
        t.exports
    }
    i.m = n,
    i.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return i.d(t, {
            a: t
        }),
        t
    }
    ,
    i.d = (e,t)=>{
        for (var n in t)
            i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    i.f = {},
    i.e = e=>Promise.all(Object.keys(i.f).reduce((t,n)=>(i.f[n](e, t),
    t), [])),
    i.u = e=>({
        63: "polyfills.webvtt",
        74: "jwplayer.controls.tizen",
        98: "provider.hlsjs",
        168: "jwplayer.amp",
        207: "jwplayer.core.controls.html5",
        250: "provider.html5",
        347: "vttparser",
        365: "related",
        371: "provider.shaka",
        493: "jwplayer.core.controls.polyfills",
        520: "provider.airplay",
        581: "jwplayer.core.controls",
        605: "jwplayer.core.controls.polyfills.html5",
        681: "jwplayer.core",
        716: "jwplayer.controls",
        926: "jwplayer.stats",
        943: "polyfills.intersection-observer",
        977: "provider.cast"
    })[e] + ".js",
    i.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    e = {},
    t = "jwplayer:",
    i.l = (n,r,o,s)=>{
        if (e[n])
            e[n].push(r);
        else {
            var a, l;
            if (void 0 !== o)
                for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var d = c[u];
                    if (d.getAttribute("src") == n || d.getAttribute("data-webpack") == t + o) {
                        a = d;
                        break
                    }
                }
            a || (l = !0,
            (a = document.createElement("script")).charset = "utf-8",
            a.timeout = 55,
            i.nc && a.setAttribute("nonce", i.nc),
            a.setAttribute("data-webpack", t + o),
            a.src = n),
            e[n] = [r];
            var r = (t,r)=>{
                a.onerror = a.onload = null,
                clearTimeout(h);
                var i = e[n];
                if (delete e[n],
                a.parentNode && a.parentNode.removeChild(a),
                i && i.forEach(e=>e(r)),
                t)
                    return t(r)
            }
              , h = setTimeout(r.bind(null, void 0, {
                type: "timeout",
                target: a
            }), 55e3);
            a.onerror = r.bind(null, a.onerror),
            a.onload = r.bind(null, a.onload),
            l && document.head.appendChild(a)
        }
    }
    ,
    i.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.nmd = e=>(e.paths = [],
    e.children || (e.children = []),
    e),
    i.p = "",
    (()=>{
        var e = {
            313: 0
        }
          , t = (i.f.j = (t,n)=>{
            var o, a, r = i.o(e, t) ? e[t] : void 0;
            0 !== r && (r ? n.push(r[2]) : (o = new Promise((n,i)=>r = e[t] = [n, i]),
            n.push(r[2] = o),
            n = i.p + i.u(t),
            a = new Error,
            i.l(n, n=>{
                var o;
                i.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                r) && (o = n && ("load" === n.type ? "missing" : n.type),
                n = n && n.target && n.target.src,
                a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")",
                a.name = "ChunkLoadError",
                a.type = o,
                a.request = n,
                r[1](a))
            }
            , "chunk-" + t, t)))
        }
        ,
        (t,n)=>{
            var r, o, [s,a,l] = n, c = 0;
            if (s.some(t=>0 !== e[t])) {
                for (r in a)
                    i.o(a, r) && (i.m[r] = a[r]);
                l && l(i)
            }
            for (t && t(n); c < s.length; c++)
                o = s[c],
                i.o(e, o) && e[o] && e[o][0](),
                e[o] = 0
        }
        )
          , n = self.webpackChunkjwplayer = self.webpackChunkjwplayer || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }
    )(),
    i.nc = void 0;
    var o = i(576);
    window.jwplayer = o.default
}
)();
let jwDefaults = {
    base: "/js/",
    aspectratio: "16:9",
    autostart: !0,
    controls: !0,
    displaydescription: !0,
    displaytitle: !0,
    width: "100%",
    height: 360,
    key: "XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo",
    mute: !1,
    ph: 1,
    playbackRateControls: !0,
    preload: "metadata",
    repeat: !1,
    stretching: "uniform"
};
jwplayer.defaults = jwDefaults;
