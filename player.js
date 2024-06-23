/**
 * Video Player MPD/M3U8/M3U/EPG
 *
 * @author Sharkiller
 * @license Video Player MPD/M3U8/M3U/EPG © 2023 by Sharkiller is licensed under CC BY-NC-ND 4.0.
 * To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/
 */
!function() {
    class e extends Error {
    }
    class i extends e {
        constructor(e) {
            super("Invalid DateTime: " + e.toMessage())
        }
    }
    class q extends e {
        constructor(e) {
            super("Invalid Interval: " + e.toMessage())
        }
    }
    class P extends e {
        constructor(e) {
            super("Invalid Duration: " + e.toMessage())
        }
    }
    class j extends e {
    }
    class z extends e {
        constructor(e) {
            super("Invalid unit " + e)
        }
    }
    class o extends e {
    }
    class r extends e {
        constructor() {
            super("Zone is an abstract class")
        }
    }
    const R = {
        year: t = "numeric",
        month: t,
        day: t
    }
      , Z = {
        year: t,
        month: a = "short",
        day: t
    }
      , U = {
        year: t,
        month: a,
        day: t,
        weekday: a
    }
      , H = {
        year: t,
        month: n = "long",
        day: t
    }
      , W = {
        year: t,
        month: n,
        day: t,
        weekday: n
    }
      , $ = {
        hour: t,
        minute: t
    }
      , J = {
        hour: t,
        minute: t,
        second: t
    }
      , X = {
        hour: t,
        minute: t,
        second: t,
        timeZoneName: a
    }
      , K = {
        hour: t,
        minute: t,
        second: t,
        timeZoneName: n
    }
      , Y = {
        hour: t,
        minute: t,
        hourCycle: "h23"
    }
      , G = {
        hour: t,
        minute: t,
        second: t,
        hourCycle: "h23"
    }
      , Q = {
        hour: t,
        minute: t,
        second: t,
        hourCycle: "h23",
        timeZoneName: a
    }
      , B = {
        hour: t,
        minute: t,
        second: t,
        hourCycle: "h23",
        timeZoneName: n
    }
      , ee = {
        year: t,
        month: t,
        day: t,
        hour: t,
        minute: t
    }
      , te = {
        year: t,
        month: t,
        day: t,
        hour: t,
        minute: t,
        second: t
    }
      , re = {
        year: t,
        month: a,
        day: t,
        hour: t,
        minute: t
    }
      , ne = {
        year: t,
        month: a,
        day: t,
        hour: t,
        minute: t,
        second: t
    }
      , ae = {
        year: t,
        month: a,
        day: t,
        weekday: a,
        hour: t,
        minute: t
    }
      , se = {
        year: t,
        month: n,
        day: t,
        hour: t,
        minute: t,
        timeZoneName: a
    }
      , ie = {
        year: t,
        month: n,
        day: t,
        hour: t,
        minute: t,
        second: t,
        timeZoneName: a
    }
      , oe = {
        year: t,
        month: n,
        day: t,
        weekday: n,
        hour: t,
        minute: t,
        timeZoneName: n
    }
      , le = {
        year: t,
        month: n,
        day: t,
        weekday: n,
        hour: t,
        minute: t,
        second: t,
        timeZoneName: n
    };
    class ue {
        get type() {
            throw new r
        }
        get name() {
            throw new r
        }
        get ianaName() {
            return this.name
        }
        get isUniversal() {
            throw new r
        }
        offsetName(e, t) {
            throw new r
        }
        formatOffset(e, t) {
            throw new r
        }
        offset(e) {
            throw new r
        }
        equals(e) {
            throw new r
        }
        get isValid() {
            throw new r
        }
    }
    let ce = null;
    class de extends ue {
        static get instance() {
            return ce = null === ce ? new de : ce
        }
        get type() {
            return "system"
        }
        get name() {
            return (new Intl.DateTimeFormat).resolvedOptions().timeZone
        }
        get isUniversal() {
            return !1
        }
        offsetName(e, {format: t, locale: r}) {
            return it(e, t, r)
        }
        formatOffset(e, t) {
            return ct(this.offset(e), t)
        }
        offset(e) {
            return -new Date(e).getTimezoneOffset()
        }
        equals(e) {
            return "system" === e.type
        }
        get isValid() {
            return !0
        }
    }
    let he = {};
    function me(e) {
        return he[e] || (he[e] = new Intl.DateTimeFormat("en-US",{
            hour12: !1,
            timeZone: e,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            era: "short"
        })),
        he[e]
    }
    const fe = {
        year: 0,
        month: 1,
        day: 2,
        era: 3,
        hour: 4,
        minute: 5,
        second: 6
    };
    function pe(e, t) {
        var e = e.format(t).replace(/\u200E/g, "")
          , [,t,e,r,n,a,s,i] = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(e);
        return [r, t, e, n, a, s, i]
    }
    function ye(e, t) {
        var r = e.formatToParts(t)
          , n = [];
        for (let e = 0; e < r.length; e++) {
            var {type: a, value: s} = r[e]
              , i = fe[a];
            "era" === a ? n[i] = s : v(i) || (n[i] = parseInt(s, 10))
        }
        return n
    }
    let ge = {};
    class l extends ue {
        static create(e) {
            return ge[e] || (ge[e] = new l(e)),
            ge[e]
        }
        static resetCache() {
            ge = {},
            he = {}
        }
        static isValidSpecifier(e) {
            return this.isValidZone(e)
        }
        static isValidZone(e) {
            if (!e)
                return !1;
            try {
                return new Intl.DateTimeFormat("en-US",{
                    timeZone: e
                }).format(),
                !0
            } catch (e) {
                return !1
            }
        }
        constructor(e) {
            super(),
            this.zoneName = e,
            this.valid = l.isValidZone(e)
        }
        get type() {
            return "iana"
        }
        get name() {
            return this.zoneName
        }
        get isUniversal() {
            return !1
        }
        offsetName(e, {format: t, locale: r}) {
            return it(e, t, r, this.name)
        }
        formatOffset(e, t) {
            return ct(this.offset(e), t)
        }
        offset(e) {
            var t, r, n, a, s, i, o, l;
            return e = new Date(e),
            isNaN(e) ? NaN : ([t,r,n,a,s,i,o] = ((l = me(this.name)).formatToParts ? ye : pe)(l, e),
            e = (l = +e) % 1e3,
            (nt({
                year: t = "BC" === a ? 1 - Math.abs(t) : t,
                month: r,
                day: n,
                hour: 24 === s ? 0 : s,
                minute: i,
                second: o,
                millisecond: 0
            }) - (l - (0 <= e ? e : 1e3 + e))) / 6e4)
        }
        equals(e) {
            return "iana" === e.type && e.name === this.name
        }
        get isValid() {
            return this.valid
        }
    }
    let ve = {};
    function we(e, t={}) {
        var r = JSON.stringify([e, t]);
        let n = ve[r];
        return n || (n = new Intl.ListFormat(e,t),
        ve[r] = n),
        n
    }
    let be = {};
    function Te(e, t={}) {
        var r = JSON.stringify([e, t]);
        let n = be[r];
        return n || (n = new Intl.DateTimeFormat(e,t),
        be[r] = n),
        n
    }
    let Se = {};
    function ke(e, t={}) {
        var r = JSON.stringify([e, t]);
        let n = Se[r];
        return n || (n = new Intl.NumberFormat(e,t),
        Se[r] = n),
        n
    }
    let Oe = {};
    function Ee(e, t={}) {
        const {base: r, ...n} = t;
        var a = JSON.stringify([e, n]);
        let s = Oe[a];
        return s || (s = new Intl.RelativeTimeFormat(e,t),
        Oe[a] = s),
        s
    }
    let Ne = null;
    function Me() {
        return Ne = Ne || (new Intl.DateTimeFormat).resolvedOptions().locale
    }
    function xe(n) {
        if (-1 === (a = (n = -1 !== (a = n.indexOf("-x-")) ? n.substring(0, a) : n).indexOf("-u-")))
            return [n];
        {
            let t, r;
            try {
                t = Te(n).resolvedOptions(),
                r = n
            } catch (e) {
                n = n.substring(0, a),
                t = Te(n).resolvedOptions(),
                r = n
            }
            var {numberingSystem: a, calendar: n} = t;
            return [r, a, n]
        }
    }
    function _e(e, t, r) {
        return (r || t) && (e.includes("-u-") || (e += "-u"),
        r && (e += "-ca-" + r),
        t) && (e += "-nu-" + t),
        e
    }
    function Le(t) {
        var r = [];
        for (let e = 1; e <= 12; e++) {
            var n = _.utc(2009, e, 1);
            r.push(t(n))
        }
        return r
    }
    function De(t) {
        var r = [];
        for (let e = 1; e <= 7; e++) {
            var n = _.utc(2016, 11, 13 + e);
            r.push(t(n))
        }
        return r
    }
    function Ie(e, t, r, n) {
        return "error" === (e = e.listingMode()) ? null : ("en" === e ? r : n)(t)
    }
    function Ce(e) {
        return (!e.numberingSystem || "latn" === e.numberingSystem) && ("latn" === e.numberingSystem || !e.locale || e.locale.startsWith("en") || "latn" === new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)
    }
    class Ve {
        constructor(e, t, r) {
            this.padTo = r.padTo || 0,
            this.floor = r.floor || !1;
            const {padTo: n, floor: a, ...s} = r;
            (!t || 0 < Object.keys(s).length) && (t = {
                useGrouping: !1,
                ...r
            },
            0 < r.padTo && (t.minimumIntegerDigits = r.padTo),
            this.inf = ke(e, t))
        }
        format(e) {
            var t;
            return this.inf ? (t = this.floor ? Math.floor(e) : e,
            this.inf.format(t)) : h(this.floor ? Math.floor(e) : Be(e, 3), this.padTo)
        }
    }
    class Ae {
        constructor(e, t, r) {
            this.opts = r;
            let n = this.originalZone = void 0;
            this.opts.timeZone ? this.dt = e : "fixed" === e.zone.type ? (r = 0 <= (r = e.offset / 60 * -1) ? "Etc/GMT+" + r : "Etc/GMT" + r,
            0 !== e.offset && l.create(r).valid ? (n = r,
            this.dt = e) : (n = "UTC",
            this.dt = 0 === e.offset ? e : e.setZone("UTC").plus({
                minutes: e.offset
            }),
            this.originalZone = e.zone)) : "system" === e.zone.type ? this.dt = e : "iana" === e.zone.type ? (this.dt = e,
            n = e.zone.name) : (n = "UTC",
            this.dt = e.setZone("UTC").plus({
                minutes: e.offset
            }),
            this.originalZone = e.zone),
            (r = {
                ...this.opts
            }).timeZone = r.timeZone || n,
            this.dtf = Te(t, r)
        }
        format() {
            return this.originalZone ? this.formatToParts().map(({value: e})=>e).join("") : this.dtf.format(this.dt.toJSDate())
        }
        formatToParts() {
            var e = this.dtf.formatToParts(this.dt.toJSDate());
            return this.originalZone ? e.map(e=>{
                var t;
                return "timeZoneName" === e.type ? (t = this.originalZone.offsetName(this.dt.ts, {
                    locale: this.dt.locale,
                    format: this.opts.timeZoneName
                }),
                {
                    ...e,
                    value: t
                }) : e
            }
            ) : e
        }
        resolvedOptions() {
            return this.dtf.resolvedOptions()
        }
    }
    class Fe {
        constructor(e, t, r) {
            this.opts = {
                style: "long",
                ...r
            },
            !t && Xe() && (this.rtf = Ee(e, r))
        }
        format(e, t) {
            return this.rtf ? this.rtf.format(e, t) : _t(t, e, this.opts.numeric, "long" !== this.opts.style)
        }
        formatToParts(e, t) {
            return this.rtf ? this.rtf.formatToParts(e, t) : []
        }
    }
    class p {
        static fromOpts(e) {
            return p.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN)
        }
        static create(e, t, r, n=!1) {
            return n = (e = e || g.defaultLocale) || (n ? "en-US" : Me()),
            t = t || g.defaultNumberingSystem,
            r = r || g.defaultOutputCalendar,
            new p(n,t,r,e)
        }
        static resetCache() {
            Ne = null,
            be = {},
            Se = {},
            Oe = {}
        }
        static fromObject({locale: e, numberingSystem: t, outputCalendar: r}={}) {
            return p.create(e, t, r)
        }
        constructor(e, t, r, n) {
            var [e,a,s] = xe(e);
            this.locale = e,
            this.numberingSystem = t || a || null,
            this.outputCalendar = r || s || null,
            this.intl = _e(this.locale, this.numberingSystem, this.outputCalendar),
            this.weekdaysCache = {
                format: {},
                standalone: {}
            },
            this.monthsCache = {
                format: {},
                standalone: {}
            },
            this.meridiemCache = null,
            this.eraCache = {},
            this.specifiedLocale = n,
            this.fastNumbersCached = null
        }
        get fastNumbers() {
            return null == this.fastNumbersCached && (this.fastNumbersCached = Ce(this)),
            this.fastNumbersCached
        }
        listingMode() {
            var e = this.isEnglish()
              , t = !(null !== this.numberingSystem && "latn" !== this.numberingSystem || null !== this.outputCalendar && "gregory" !== this.outputCalendar);
            return e && t ? "en" : "intl"
        }
        clone(e) {
            return e && 0 !== Object.getOwnPropertyNames(e).length ? p.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, e.defaultToEN || !1) : this
        }
        redefaultToEN(e={}) {
            return this.clone({
                ...e,
                defaultToEN: !0
            })
        }
        redefaultToSystem(e={}) {
            return this.clone({
                ...e,
                defaultToEN: !1
            })
        }
        months(r, n=!1) {
            return Ie(this, r, pt, ()=>{
                const t = n ? {
                    month: r,
                    day: "numeric"
                } : {
                    month: r
                }
                  , e = n ? "format" : "standalone";
                return this.monthsCache[e][r] || (this.monthsCache[e][r] = Le(e=>this.extract(e, t, "month"))),
                this.monthsCache[e][r]
            }
            )
        }
        weekdays(r, n=!1) {
            return Ie(this, r, wt, ()=>{
                const t = n ? {
                    weekday: r,
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                } : {
                    weekday: r
                }
                  , e = n ? "format" : "standalone";
                return this.weekdaysCache[e][r] || (this.weekdaysCache[e][r] = De(e=>this.extract(e, t, "weekday"))),
                this.weekdaysCache[e][r]
            }
            )
        }
        meridiems() {
            return Ie(this, void 0, ()=>bt, ()=>{
                if (!this.meridiemCache) {
                    const t = {
                        hour: "numeric",
                        hourCycle: "h12"
                    };
                    this.meridiemCache = [_.utc(2016, 11, 13, 9), _.utc(2016, 11, 13, 19)].map(e=>this.extract(e, t, "dayperiod"))
                }
                return this.meridiemCache
            }
            )
        }
        eras(e) {
            return Ie(this, e, Ot, ()=>{
                const t = {
                    era: e
                };
                return this.eraCache[e] || (this.eraCache[e] = [_.utc(-40, 1, 1), _.utc(2017, 1, 1)].map(e=>this.extract(e, t, "era"))),
                this.eraCache[e]
            }
            )
        }
        extract(e, t, r) {
            return (e = this.dtFormatter(e, t).formatToParts().find(e=>e.type.toLowerCase() === r)) ? e.value : null
        }
        numberFormatter(e={}) {
            return new Ve(this.intl,e.forceSimple || this.fastNumbers,e)
        }
        dtFormatter(e, t={}) {
            return new Ae(e,this.intl,t)
        }
        relFormatter(e={}) {
            return new Fe(this.intl,this.isEnglish(),e)
        }
        listFormatter(e={}) {
            return we(this.intl, e)
        }
        isEnglish() {
            return "en" === this.locale || "en-us" === this.locale.toLowerCase() || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
        }
        equals(e) {
            return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar
        }
    }
    let qe = null;
    class d extends ue {
        static get utcInstance() {
            return qe = null === qe ? new d(0) : qe
        }
        static instance(e) {
            return 0 === e ? d.utcInstance : new d(e)
        }
        static parseSpecifier(e) {
            return (e = e && e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i)) ? new d(ot(e[1], e[2])) : null
        }
        constructor(e) {
            super(),
            this.fixed = e
        }
        get type() {
            return "fixed"
        }
        get name() {
            return 0 === this.fixed ? "UTC" : "UTC" + ct(this.fixed, "narrow")
        }
        get ianaName() {
            return 0 === this.fixed ? "Etc/UTC" : "Etc/GMT" + ct(-this.fixed, "narrow")
        }
        offsetName() {
            return this.name
        }
        formatOffset(e, t) {
            return ct(this.fixed, t)
        }
        get isUniversal() {
            return !0
        }
        offset() {
            return this.fixed
        }
        equals(e) {
            return "fixed" === e.type && e.fixed === this.fixed
        }
        get isValid() {
            return !0
        }
    }
    class Pe extends ue {
        constructor(e) {
            super(),
            this.zoneName = e
        }
        get type() {
            return "invalid"
        }
        get name() {
            return this.zoneName
        }
        get isUniversal() {
            return !1
        }
        offsetName() {
            return null
        }
        formatOffset() {
            return ""
        }
        offset() {
            return NaN
        }
        equals() {
            return !1
        }
        get isValid() {
            return !1
        }
    }
    function y(e, t) {
        var r;
        return v(e) || null === e ? t : e instanceof ue ? e : "string" == typeof e ? "default" === (r = e.toLowerCase()) ? t : "local" === r || "system" === r ? de.instance : "utc" === r || "gmt" === r ? d.utcInstance : d.parseSpecifier(r) || l.create(e) : u(e) ? d.instance(e) : "object" == typeof e && "offset"in e && "function" == typeof e.offset ? e : new Pe(e)
    }
    let je = ()=>Date.now(), ze = "system", Re = null, Ze = null, Ue = null, He = 60, We;
    class g {
        static get now() {
            return je
        }
        static set now(e) {
            je = e
        }
        static set defaultZone(e) {
            ze = e
        }
        static get defaultZone() {
            return y(ze, de.instance)
        }
        static get defaultLocale() {
            return Re
        }
        static set defaultLocale(e) {
            Re = e
        }
        static get defaultNumberingSystem() {
            return Ze
        }
        static set defaultNumberingSystem(e) {
            Ze = e
        }
        static get defaultOutputCalendar() {
            return Ue
        }
        static set defaultOutputCalendar(e) {
            Ue = e
        }
        static get twoDigitCutoffYear() {
            return He
        }
        static set twoDigitCutoffYear(e) {
            He = e % 100
        }
        static get throwOnInvalid() {
            return We
        }
        static set throwOnInvalid(e) {
            We = e
        }
        static resetCaches() {
            p.resetCache(),
            l.resetCache()
        }
    }
    function v(e) {
        return void 0 === e
    }
    function u(e) {
        return "number" == typeof e
    }
    function $e(e) {
        return "number" == typeof e && e % 1 == 0
    }
    function Je(e) {
        return "[object Date]" === Object.prototype.toString.call(e)
    }
    function Xe() {
        try {
            return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat
        } catch (e) {
            return !1
        }
    }
    function Ke(e) {
        return Array.isArray(e) ? e : [e]
    }
    function Ye(e, r, n) {
        if (0 !== e.length)
            return e.reduce((e,t)=>(t = [r(t), t],
            e && n(e[0], t[0]) === e[0] ? e : t), null)[1]
    }
    function Ge(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function c(e, t, r) {
        return $e(e) && t <= e && e <= r
    }
    function h(e, t=2) {
        return e < 0 ? "-" + ("" + -e).padStart(t, "0") : ("" + e).padStart(t, "0")
    }
    function m(e) {
        if (!v(e) && null !== e && "" !== e)
            return parseInt(e, 10)
    }
    function f(e) {
        if (!v(e) && null !== e && "" !== e)
            return parseFloat(e)
    }
    function Qe(e) {
        if (!v(e) && null !== e && "" !== e)
            return e = 1e3 * parseFloat("0." + e),
            Math.floor(e)
    }
    function Be(e, t, r=!1) {
        return t = 10 ** t,
        (r ? Math.trunc : Math.round)(e * t) / t
    }
    function et(e) {
        return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
    }
    function tt(e) {
        return et(e) ? 366 : 365
    }
    function rt(e, t) {
        var r = (r = t - 1) - 12 * Math.floor(r / 12) + 1;
        return 2 == r ? et(e + (t - r) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1]
    }
    function nt(e) {
        let t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
        return e.year < 100 && 0 <= e.year && (t = new Date(t)).setUTCFullYear(e.year, e.month - 1, e.day),
        +t
    }
    function at(e) {
        var t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7
          , e = ((e = e - 1) + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7;
        return 4 == t || 3 == e ? 53 : 52
    }
    function st(e) {
        return 99 < e ? e : e > g.twoDigitCutoffYear ? 1900 + e : 2e3 + e
    }
    function it(e, t, r, n=null) {
        var e = new Date(e)
          , a = {
            hourCycle: "h23",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        }
          , n = (n && (a.timeZone = n),
        {
            timeZoneName: t,
            ...a
        });
        return (t = new Intl.DateTimeFormat(r,n).formatToParts(e).find(e=>"timezonename" === e.type.toLowerCase())) ? t.value : null
    }
    function ot(e, t) {
        let r = parseInt(e, 10);
        return Number.isNaN(r) && (r = 0),
        e = parseInt(t, 10) || 0,
        t = r < 0 || Object.is(r, -0) ? -e : e,
        60 * r + t
    }
    function lt(e) {
        var t = Number(e);
        if ("boolean" == typeof e || "" === e || Number.isNaN(t))
            throw new o("Invalid unit value " + e);
        return t
    }
    function ut(e, t) {
        var r, n = {};
        for (const a in e)
            Ge(e, a) && null != (r = e[a]) && (n[t(a)] = lt(r));
        return n
    }
    function ct(e, t) {
        var r = Math.trunc(Math.abs(e / 60))
          , n = Math.trunc(Math.abs(e % 60))
          , a = 0 <= e ? "+" : "-";
        switch (t) {
        case "short":
            return a + h(r, 2) + ":" + h(n, 2);
        case "narrow":
            return a + r + (0 < n ? ":" + n : "");
        case "techie":
            return a + h(r, 2) + h(n, 2);
        default:
            throw new RangeError(`Value format ${t} is out of range for property format`)
        }
    }
    function dt(e) {
        return r = e,
        ["hour", "minute", "second", "millisecond"].reduce((e,t)=>(e[t] = r[t],
        e), {});
        var r
    }
    const ht = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      , mt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      , ft = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    function pt(e) {
        switch (e) {
        case "narrow":
            return [...ft];
        case "short":
            return [...mt];
        case "long":
            return [...ht];
        case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        case "2-digit":
            return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        default:
            return null
        }
    }
    const yt = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      , gt = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      , vt = ["M", "T", "W", "T", "F", "S", "S"];
    function wt(e) {
        switch (e) {
        case "narrow":
            return [...vt];
        case "short":
            return [...gt];
        case "long":
            return [...yt];
        case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7"];
        default:
            return null
        }
    }
    const bt = ["AM", "PM"]
      , Tt = ["Before Christ", "Anno Domini"]
      , St = ["BC", "AD"]
      , kt = ["B", "A"];
    function Ot(e) {
        switch (e) {
        case "narrow":
            return [...kt];
        case "short":
            return [...St];
        case "long":
            return [...Tt];
        default:
            return null
        }
    }
    function Et(e) {
        return bt[e.hour < 12 ? 0 : 1]
    }
    function Nt(e, t) {
        return wt(t)[e.weekday - 1]
    }
    function Mt(e, t) {
        return pt(t)[e.month - 1]
    }
    function xt(e, t) {
        return Ot(t)[e.year < 0 ? 0 : 1]
    }
    function _t(e, t, r="always", n=!1) {
        var a = {
            years: ["year", "yr."],
            quarters: ["quarter", "qtr."],
            months: ["month", "mo."],
            weeks: ["week", "wk."],
            days: ["day", "day", "days"],
            hours: ["hour", "hr."],
            minutes: ["minute", "min."],
            seconds: ["second", "sec."]
        }
          , s = -1 === ["hours", "minutes", "seconds"].indexOf(e);
        if ("auto" === r && s) {
            var i = "days" === e;
            switch (t) {
            case 1:
                return i ? "tomorrow" : "next " + a[e][0];
            case -1:
                return i ? "yesterday" : "last " + a[e][0];
            case 0:
                return i ? "today" : "this " + a[e][0]
            }
        }
        var r = Object.is(t, -0) || t < 0
          , t = 1 === (s = Math.abs(t))
          , o = a[e]
          , n = n ? !t && o[2] || o[1] : t ? a[e][0] : e;
        return r ? s + ` ${n} ago` : `in ${s} ` + n
    }
    function Lt(e, t) {
        let r = "";
        for (const n of e)
            n.literal ? r += n.val : r += t(n.val);
        return r
    }
    const Dt = {
        D: R,
        DD: Z,
        DDD: H,
        DDDD: W,
        t: $,
        tt: J,
        ttt: X,
        tttt: K,
        T: Y,
        TT: G,
        TTT: Q,
        TTTT: B,
        f: ee,
        ff: re,
        fff: se,
        ffff: oe,
        F: te,
        FF: ne,
        FFF: ie,
        FFFF: le
    };
    class w {
        static create(e, t={}) {
            return new w(e,t)
        }
        static parseFormat(t) {
            let r = null
              , n = ""
              , a = !1;
            var s = [];
            for (let e = 0; e < t.length; e++) {
                var i = t.charAt(e);
                "'" === i ? (0 < n.length && s.push({
                    literal: a || /^\s+$/.test(n),
                    val: n
                }),
                r = null,
                n = "",
                a = !a) : a || i === r ? n += i : (0 < n.length && s.push({
                    literal: /^\s+$/.test(n),
                    val: n
                }),
                n = i,
                r = i)
            }
            return 0 < n.length && s.push({
                literal: a || /^\s+$/.test(n),
                val: n
            }),
            s
        }
        static macroTokenToFormatOpts(e) {
            return Dt[e]
        }
        constructor(e, t) {
            this.opts = t,
            this.loc = e,
            this.systemLoc = null
        }
        formatWithSystemDefault(e, t) {
            return null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem()),
            this.systemLoc.dtFormatter(e, {
                ...this.opts,
                ...t
            }).format()
        }
        dtFormatter(e, t={}) {
            return this.loc.dtFormatter(e, {
                ...this.opts,
                ...t
            })
        }
        formatDateTime(e, t) {
            return this.dtFormatter(e, t).format()
        }
        formatDateTimeParts(e, t) {
            return this.dtFormatter(e, t).formatToParts()
        }
        formatInterval(e, t) {
            return this.dtFormatter(e.start, t).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate())
        }
        resolvedOptions(e, t) {
            return this.dtFormatter(e, t).resolvedOptions()
        }
        num(e, t=0) {
            var r;
            return this.opts.forceSimple ? h(e, t) : (r = {
                ...this.opts
            },
            0 < t && (r.padTo = t),
            this.loc.numberFormatter(r).format(e))
        }
        formatDateTimeFromString(r, e) {
            const n = "en" === this.loc.listingMode()
              , t = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar
              , a = (e,t)=>this.loc.extract(r, e, t)
              , s = e=>r.isOffsetFixed && 0 === r.offset && e.allowZ ? "Z" : r.isValid ? r.zone.formatOffset(r.ts, e.format) : ""
              , i = (e,t)=>n ? Mt(r, e) : a(t ? {
                month: e
            } : {
                month: e,
                day: "numeric"
            }, "month")
              , o = (e,t)=>n ? Nt(r, e) : a(t ? {
                weekday: e
            } : {
                weekday: e,
                month: "long",
                day: "numeric"
            }, "weekday")
              , l = e=>{
                var t = w.macroTokenToFormatOpts(e);
                return t ? this.formatWithSystemDefault(r, t) : e
            }
              , u = e=>n ? xt(r, e) : a({
                era: e
            }, "era");
            return Lt(w.parseFormat(e), e=>{
                switch (e) {
                case "S":
                    return this.num(r.millisecond);
                case "u":
                case "SSS":
                    return this.num(r.millisecond, 3);
                case "s":
                    return this.num(r.second);
                case "ss":
                    return this.num(r.second, 2);
                case "uu":
                    return this.num(Math.floor(r.millisecond / 10), 2);
                case "uuu":
                    return this.num(Math.floor(r.millisecond / 100));
                case "m":
                    return this.num(r.minute);
                case "mm":
                    return this.num(r.minute, 2);
                case "h":
                    return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12);
                case "hh":
                    return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12, 2);
                case "H":
                    return this.num(r.hour);
                case "HH":
                    return this.num(r.hour, 2);
                case "Z":
                    return s({
                        format: "narrow",
                        allowZ: this.opts.allowZ
                    });
                case "ZZ":
                    return s({
                        format: "short",
                        allowZ: this.opts.allowZ
                    });
                case "ZZZ":
                    return s({
                        format: "techie",
                        allowZ: this.opts.allowZ
                    });
                case "ZZZZ":
                    return r.zone.offsetName(r.ts, {
                        format: "short",
                        locale: this.loc.locale
                    });
                case "ZZZZZ":
                    return r.zone.offsetName(r.ts, {
                        format: "long",
                        locale: this.loc.locale
                    });
                case "z":
                    return r.zoneName;
                case "a":
                    return n ? Et(r) : a({
                        hour: "numeric",
                        hourCycle: "h12"
                    }, "dayperiod");
                case "d":
                    return t ? a({
                        day: "numeric"
                    }, "day") : this.num(r.day);
                case "dd":
                    return t ? a({
                        day: "2-digit"
                    }, "day") : this.num(r.day, 2);
                case "c":
                    return this.num(r.weekday);
                case "ccc":
                    return o("short", !0);
                case "cccc":
                    return o("long", !0);
                case "ccccc":
                    return o("narrow", !0);
                case "E":
                    return this.num(r.weekday);
                case "EEE":
                    return o("short", !1);
                case "EEEE":
                    return o("long", !1);
                case "EEEEE":
                    return o("narrow", !1);
                case "L":
                    return t ? a({
                        month: "numeric",
                        day: "numeric"
                    }, "month") : this.num(r.month);
                case "LL":
                    return t ? a({
                        month: "2-digit",
                        day: "numeric"
                    }, "month") : this.num(r.month, 2);
                case "LLL":
                    return i("short", !0);
                case "LLLL":
                    return i("long", !0);
                case "LLLLL":
                    return i("narrow", !0);
                case "M":
                    return t ? a({
                        month: "numeric"
                    }, "month") : this.num(r.month);
                case "MM":
                    return t ? a({
                        month: "2-digit"
                    }, "month") : this.num(r.month, 2);
                case "MMM":
                    return i("short", !1);
                case "MMMM":
                    return i("long", !1);
                case "MMMMM":
                    return i("narrow", !1);
                case "y":
                    return t ? a({
                        year: "numeric"
                    }, "year") : this.num(r.year);
                case "yy":
                    return t ? a({
                        year: "2-digit"
                    }, "year") : this.num(r.year.toString().slice(-2), 2);
                case "yyyy":
                    return t ? a({
                        year: "numeric"
                    }, "year") : this.num(r.year, 4);
                case "yyyyyy":
                    return t ? a({
                        year: "numeric"
                    }, "year") : this.num(r.year, 6);
                case "G":
                    return u("short");
                case "GG":
                    return u("long");
                case "GGGGG":
                    return u("narrow");
                case "kk":
                    return this.num(r.weekYear.toString().slice(-2), 2);
                case "kkkk":
                    return this.num(r.weekYear, 4);
                case "W":
                    return this.num(r.weekNumber);
                case "WW":
                    return this.num(r.weekNumber, 2);
                case "o":
                    return this.num(r.ordinal);
                case "ooo":
                    return this.num(r.ordinal, 3);
                case "q":
                    return this.num(r.quarter);
                case "qq":
                    return this.num(r.quarter, 2);
                case "X":
                    return this.num(Math.floor(r.ts / 1e3));
                case "x":
                    return this.num(r.ts);
                default:
                    return l(e)
                }
            }
            )
        }
        formatDurationFromString(e, t) {
            const r = e=>{
                switch (e[0]) {
                case "S":
                    return "millisecond";
                case "s":
                    return "second";
                case "m":
                    return "minute";
                case "h":
                    return "hour";
                case "d":
                    return "day";
                case "w":
                    return "week";
                case "M":
                    return "month";
                case "y":
                    return "year";
                default:
                    return null
                }
            }
              , n = w.parseFormat(t)
              , a = n.reduce((e,{literal: t, val: r})=>t ? e : e.concat(r), [])
              , s = e.shiftTo(...a.map(r).filter(e=>e));
            return Lt(n, (i = s,
            e=>{
                var t = r(e);
                return t ? this.num(i.get(t), e.length) : e
            }
            ));
            var i
        }
    }
    class b {
        constructor(e, t) {
            this.reason = e,
            this.explanation = t
        }
        toMessage() {
            return this.explanation ? this.reason + ": " + this.explanation : this.reason
        }
    }
    function It(...e) {
        return e = e.reduce((e,t)=>e + t.source, ""),
        RegExp(`^${e}$`)
    }
    function Ct(...e) {
        return s=>e.reduce(([e,t,r],n)=>{
            var [n,r,a] = n(s, r);
            return [{
                ...e,
                ...n
            }, r || t, a]
        }
        , [{}, null, 1]).slice(0, 2)
    }
    function Vt(e, ...t) {
        if (null != e)
            for (var [r,n] of t)
                if (r = r.exec(e))
                    return n(r);
        return [null, null]
    }
    function At(...a) {
        return (e,t)=>{
            var r = {};
            let n;
            for (n = 0; n < a.length; n++)
                r[a[n]] = m(e[t + n]);
            return [r, null, t + n]
        }
    }
    a = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
    var t = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/
      , n = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/
      , Ft = RegExp(n.source + `(?:${t.source}?(?:\\[(${a.source})\\])?)?`)
      , qt = RegExp(`(?:T${Ft.source})?`)
      , Pt = At("weekYear", "weekNumber", "weekDay")
      , jt = At("year", "ordinal")
      , t = RegExp(n.source + ` ?(?:${t.source}|(${a.source}))?`)
      , a = RegExp(`(?: ${t.source})?`);
    function zt(e, t, r) {
        return v(e = e[t]) ? r : m(e)
    }
    function Rt(e, t) {
        return [{
            hours: zt(e, t, 0),
            minutes: zt(e, t + 1, 0),
            seconds: zt(e, t + 2, 0),
            milliseconds: Qe(e[t + 3])
        }, null, t + 4]
    }
    function Zt(e, t) {
        var r = !e[t] && !e[t + 1]
          , e = ot(e[t + 1], e[t + 2]);
        return [{}, r ? null : d.instance(e), t + 3]
    }
    function Ut(e, t) {
        return [{}, e[t] ? l.create(e[t]) : null, t + 1]
    }
    const Ht = RegExp(`^T?${n.source}$`)
      , Wt = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
    function $t(e) {
        var [e,t,r,n,a,s,i,o,l] = e;
        const u = "-" === e[0];
        var e = o && "-" === o[0]
          , c = (e,t=!1)=>void 0 !== e && (t || e && u) ? -e : e;
        return [{
            years: c(f(t)),
            months: c(f(r)),
            weeks: c(f(n)),
            days: c(f(a)),
            hours: c(f(s)),
            minutes: c(f(i)),
            seconds: c(f(o), "-0" === o),
            milliseconds: c(Qe(l), e)
        }]
    }
    const Jt = {
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    function Xt(e, t, r, n, a, s, i) {
        return t = {
            year: 2 === t.length ? st(m(t)) : m(t),
            month: mt.indexOf(r) + 1,
            day: m(n),
            hour: m(a),
            minute: m(s)
        },
        i && (t.second = m(i)),
        e && (t.weekday = 3 < e.length ? yt.indexOf(e) + 1 : gt.indexOf(e) + 1),
        t
    }
    const Kt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
    function Yt(e) {
        var [,e,t,r,n,a,s,i,o,l,u,c] = e
          , e = Xt(e, n, r, t, a, s, i)
          , n = o ? Jt[o] : l ? 0 : ot(u, c);
        return [e, new d(n)]
    }
    const Gt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/
      , Qt = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/
      , Bt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
    function er(e) {
        var [,e,t,r,n,a,s,i] = e;
        return [Xt(e, n, r, t, a, s, i), d.utcInstance]
    }
    function tr(e) {
        var [,e,t,r,n,a,s,i] = e;
        return [Xt(e, i, t, r, n, a, s), d.utcInstance]
    }
    const rr = It(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, qt)
      , nr = It(/(\d{4})-?W(\d\d)(?:-?(\d))?/, qt)
      , ar = It(/(\d{4})-?(\d{3})/, qt)
      , sr = It(Ft)
      , ir = Ct(function(e, t) {
        return [{
            year: zt(e, t),
            month: zt(e, t + 1, 1),
            day: zt(e, t + 2, 1)
        }, null, t + 3]
    }, Rt, Zt, Ut)
      , or = Ct(Pt, Rt, Zt, Ut)
      , lr = Ct(jt, Rt, Zt, Ut)
      , ur = Ct(Rt, Zt, Ut);
    function cr(e) {
        return Vt(e, [rr, ir], [nr, or], [ar, lr], [sr, ur])
    }
    function dr(e) {
        return Vt(e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim(), [Kt, Yt])
    }
    function hr(e) {
        return Vt(e, [Gt, er], [Qt, er], [Bt, tr])
    }
    function mr(e) {
        return Vt(e, [Wt, $t])
    }
    const fr = Ct(Rt);
    function pr(e) {
        return Vt(e, [Ht, fr])
    }
    const yr = It(/(\d{4})-(\d\d)-(\d\d)/, a)
      , gr = It(t)
      , vr = Ct(Rt, Zt, Ut);
    function wr(e) {
        return Vt(e, [yr, ir], [gr, vr])
    }
    const br = "Invalid Duration"
      , Tr = {
        weeks: {
            days: 7,
            hours: 168,
            minutes: 10080,
            seconds: 604800,
            milliseconds: 6048e5
        },
        days: {
            hours: 24,
            minutes: 1440,
            seconds: 86400,
            milliseconds: 864e5
        },
        hours: {
            minutes: 60,
            seconds: 3600,
            milliseconds: 36e5
        },
        minutes: {
            seconds: 60,
            milliseconds: 6e4
        },
        seconds: {
            milliseconds: 1e3
        }
    }
      , Sr = {
        years: {
            quarters: 4,
            months: 12,
            weeks: 52,
            days: 365,
            hours: 8760,
            minutes: 525600,
            seconds: 31536e3,
            milliseconds: 31536e6
        },
        quarters: {
            months: 3,
            weeks: 13,
            days: 91,
            hours: 2184,
            minutes: 131040,
            seconds: 7862400,
            milliseconds: 78624e5
        },
        months: {
            weeks: 4,
            days: 30,
            hours: 720,
            minutes: 43200,
            seconds: 2592e3,
            milliseconds: 2592e6
        },
        ...Tr
    }
      , kr = 365.2425
      , Or = 30.436875
      , Er = {
        years: {
            quarters: 4,
            months: 12,
            weeks: kr / 7,
            days: kr,
            hours: 24 * kr,
            minutes: 525949.2,
            seconds: 525949.2 * 60,
            milliseconds: 525949.2 * 60 * 1e3
        },
        quarters: {
            months: 3,
            weeks: kr / 28,
            days: kr / 4,
            hours: 24 * kr / 4,
            minutes: 131487.3,
            seconds: 525949.2 * 60 / 4,
            milliseconds: 7889237999.999999
        },
        months: {
            weeks: Or / 7,
            days: Or,
            hours: 24 * Or,
            minutes: 43829.1,
            seconds: 2629746,
            milliseconds: 2629746e3
        },
        ...Tr
    }
      , Nr = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"]
      , Mr = Nr.slice(0).reverse();
    function T(e, t, r=!1) {
        return r = {
            values: r ? t.values : {
                ...e.values,
                ...t.values || {}
            },
            loc: e.loc.clone(t.loc),
            conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
            matrix: t.matrix || e.matrix
        },
        new S(r)
    }
    function xr(e, t) {
        let r = t.milliseconds ?? 0;
        for (const n of Mr.slice(1))
            t[n] && (r += t[n] * e[n].milliseconds);
        return r
    }
    function _r(a, s) {
        const i = xr(a, s) < 0 ? -1 : 1;
        Mr.reduce((e,t)=>{
            var r, n;
            return v(s[t]) ? e : (e && (n = s[e] * i,
            r = a[t][e],
            n = Math.floor(n / r),
            s[t] += n * i,
            s[e] -= n * r * i),
            t)
        }
        , null)
    }
    function Lr(e) {
        var t, r, n = {};
        for ([t,r] of Object.entries(e))
            0 !== r && (n[t] = r);
        return n
    }
    class S {
        constructor(e) {
            var t = "longterm" === e.conversionAccuracy || !1;
            let r = t ? Er : Sr;
            e.matrix && (r = e.matrix),
            this.values = e.values,
            this.loc = e.loc || p.create(),
            this.conversionAccuracy = t ? "longterm" : "casual",
            this.invalid = e.invalid || null,
            this.matrix = r,
            this.isLuxonDuration = !0
        }
        static fromMillis(e, t) {
            return S.fromObject({
                milliseconds: e
            }, t)
        }
        static fromObject(e, t={}) {
            if (null == e || "object" != typeof e)
                throw new o("Duration.fromObject: argument expected to be an object, got " + (null === e ? "null" : typeof e));
            return new S({
                values: ut(e, S.normalizeUnit),
                loc: p.fromObject(t),
                conversionAccuracy: t.conversionAccuracy,
                matrix: t.matrix
            })
        }
        static fromDurationLike(e) {
            if (u(e))
                return S.fromMillis(e);
            if (S.isDuration(e))
                return e;
            if ("object" == typeof e)
                return S.fromObject(e);
            throw new o(`Unknown duration argument ${e} of type ` + typeof e)
        }
        static fromISO(e, t) {
            var [r] = mr(e);
            return r ? S.fromObject(r, t) : S.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
        }
        static fromISOTime(e, t) {
            var [r] = pr(e);
            return r ? S.fromObject(r, t) : S.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
        }
        static invalid(e, t=null) {
            if (!e)
                throw new o("need to specify a reason the Duration is invalid");
            if (e = e instanceof b ? e : new b(e,t),
            g.throwOnInvalid)
                throw new P(e);
            return new S({
                invalid: e
            })
        }
        static normalizeUnit(e) {
            var t = {
                year: "years",
                years: "years",
                quarter: "quarters",
                quarters: "quarters",
                month: "months",
                months: "months",
                week: "weeks",
                weeks: "weeks",
                day: "days",
                days: "days",
                hour: "hours",
                hours: "hours",
                minute: "minutes",
                minutes: "minutes",
                second: "seconds",
                seconds: "seconds",
                millisecond: "milliseconds",
                milliseconds: "milliseconds"
            }[e && e.toLowerCase()];
            if (t)
                return t;
            throw new z(e)
        }
        static isDuration(e) {
            return e && e.isLuxonDuration || !1
        }
        get locale() {
            return this.isValid ? this.loc.locale : null
        }
        get numberingSystem() {
            return this.isValid ? this.loc.numberingSystem : null
        }
        toFormat(e, t={}) {
            return t = {
                ...t,
                floor: !1 !== t.round && !1 !== t.floor
            },
            this.isValid ? w.create(this.loc, t).formatDurationFromString(this, e) : br
        }
        toHuman(r={}) {
            var e;
            return this.isValid ? (e = Nr.map(e=>{
                var t = this.values[e];
                return v(t) ? null : this.loc.numberFormatter({
                    style: "unit",
                    unitDisplay: "long",
                    ...r,
                    unit: e.slice(0, -1)
                }).format(t)
            }
            ).filter(e=>e),
            this.loc.listFormatter({
                type: "conjunction",
                style: r.listStyle || "narrow",
                ...r
            }).format(e)) : br
        }
        toObject() {
            return this.isValid ? {
                ...this.values
            } : {}
        }
        toISO() {
            if (!this.isValid)
                return null;
            let e = "P";
            return 0 !== this.years && (e += this.years + "Y"),
            0 === this.months && 0 === this.quarters || (e += this.months + 3 * this.quarters + "M"),
            0 !== this.weeks && (e += this.weeks + "W"),
            0 !== this.days && (e += this.days + "D"),
            0 === this.hours && 0 === this.minutes && 0 === this.seconds && 0 === this.milliseconds || (e += "T"),
            0 !== this.hours && (e += this.hours + "H"),
            0 !== this.minutes && (e += this.minutes + "M"),
            0 === this.seconds && 0 === this.milliseconds || (e += Be(this.seconds + this.milliseconds / 1e3, 3) + "S"),
            "P" === e && (e += "T0S"),
            e
        }
        toISOTime(e={}) {
            var t;
            return !this.isValid || (t = this.toMillis()) < 0 || 864e5 <= t ? null : (e = {
                suppressMilliseconds: !1,
                suppressSeconds: !1,
                includePrefix: !1,
                format: "extended",
                ...e,
                includeOffset: !1
            },
            _.fromMillis(t, {
                zone: "UTC"
            }).toISOTime(e))
        }
        toJSON() {
            return this.toISO()
        }
        toString() {
            return this.toISO()
        }
        toMillis() {
            return this.isValid ? xr(this.matrix, this.values) : NaN
        }
        valueOf() {
            return this.toMillis()
        }
        plus(e) {
            if (!this.isValid)
                return this;
            var t = S.fromDurationLike(e)
              , r = {};
            for (const n of Nr)
                (Ge(t.values, n) || Ge(this.values, n)) && (r[n] = t.get(n) + this.get(n));
            return T(this, {
                values: r
            }, !0)
        }
        minus(e) {
            return this.isValid ? (e = S.fromDurationLike(e),
            this.plus(e.negate())) : this
        }
        mapUnits(e) {
            if (!this.isValid)
                return this;
            var t = {};
            for (const r of Object.keys(this.values))
                t[r] = lt(e(this.values[r], r));
            return T(this, {
                values: t
            }, !0)
        }
        get(e) {
            return this[S.normalizeUnit(e)]
        }
        set(e) {
            return this.isValid ? T(this, {
                values: {
                    ...this.values,
                    ...ut(e, S.normalizeUnit)
                }
            }) : this
        }
        reconfigure({locale: e, numberingSystem: t, conversionAccuracy: r, matrix: n}={}) {
            return e = this.loc.clone({
                locale: e,
                numberingSystem: t
            }),
            T(this, {
                loc: e,
                matrix: n,
                conversionAccuracy: r
            })
        }
        as(e) {
            return this.isValid ? this.shiftTo(e).get(e) : NaN
        }
        normalize() {
            var e;
            return this.isValid ? (e = this.toObject(),
            _r(this.matrix, e),
            T(this, {
                values: e
            }, !0)) : this
        }
        rescale() {
            var e;
            return this.isValid ? (e = Lr(this.normalize().shiftToAll().toObject()),
            T(this, {
                values: e
            }, !0)) : this
        }
        shiftTo(...e) {
            if (!this.isValid)
                return this;
            if (0 === e.length)
                return this;
            e = e.map(e=>S.normalizeUnit(e));
            var t = {}
              , r = {}
              , n = this.toObject();
            let a;
            for (const i of Nr)
                if (0 <= e.indexOf(i)) {
                    a = i;
                    let e = 0;
                    for (const o in r)
                        e += this.matrix[o][i] * r[o],
                        r[o] = 0;
                    u(n[i]) && (e += n[i]);
                    var s = Math.trunc(e);
                    t[i] = s,
                    r[i] = (1e3 * e - 1e3 * s) / 1e3
                } else
                    u(n[i]) && (r[i] = n[i]);
            for (const l in r)
                0 !== r[l] && (t[a] += l === a ? r[l] : r[l] / this.matrix[a][l]);
            return _r(this.matrix, t),
            T(this, {
                values: t
            }, !0)
        }
        shiftToAll() {
            return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this
        }
        negate() {
            if (!this.isValid)
                return this;
            var e = {};
            for (const t of Object.keys(this.values))
                e[t] = 0 === this.values[t] ? 0 : -this.values[t];
            return T(this, {
                values: e
            }, !0)
        }
        get years() {
            return this.isValid ? this.values.years || 0 : NaN
        }
        get quarters() {
            return this.isValid ? this.values.quarters || 0 : NaN
        }
        get months() {
            return this.isValid ? this.values.months || 0 : NaN
        }
        get weeks() {
            return this.isValid ? this.values.weeks || 0 : NaN
        }
        get days() {
            return this.isValid ? this.values.days || 0 : NaN
        }
        get hours() {
            return this.isValid ? this.values.hours || 0 : NaN
        }
        get minutes() {
            return this.isValid ? this.values.minutes || 0 : NaN
        }
        get seconds() {
            return this.isValid ? this.values.seconds || 0 : NaN
        }
        get milliseconds() {
            return this.isValid ? this.values.milliseconds || 0 : NaN
        }
        get isValid() {
            return null === this.invalid
        }
        get invalidReason() {
            return this.invalid ? this.invalid.reason : null
        }
        get invalidExplanation() {
            return this.invalid ? this.invalid.explanation : null
        }
        equals(e) {
            if (!this.isValid || !e.isValid)
                return !1;
            if (!this.loc.equals(e.loc))
                return !1;
            for (const n of Nr)
                if (t = this.values[n],
                r = e.values[n],
                !(void 0 === t || 0 === t ? void 0 === r || 0 === r : t === r))
                    return !1;
            var t, r;
            return !0
        }
    }
    const Dr = "Invalid Interval";
    function Ir(e, t) {
        return e && e.isValid ? t && t.isValid ? t < e ? k.invalid("end before start", `The end of an interval must be after its start, but you had start=${e.toISO()} and end=` + t.toISO()) : null : k.invalid("missing or invalid end") : k.invalid("missing or invalid start")
    }
    class k {
        constructor(e) {
            this.s = e.start,
            this.e = e.end,
            this.invalid = e.invalid || null,
            this.isLuxonInterval = !0
        }
        static invalid(e, t=null) {
            if (!e)
                throw new o("need to specify a reason the Interval is invalid");
            if (e = e instanceof b ? e : new b(e,t),
            g.throwOnInvalid)
                throw new q(e);
            return new k({
                invalid: e
            })
        }
        static fromDateTimes(e, t) {
            var r = Ir(e = Cn(e), t = Cn(t));
            return null == r ? new k({
                start: e,
                end: t
            }) : r
        }
        static after(e, t) {
            return t = S.fromDurationLike(t),
            e = Cn(e),
            k.fromDateTimes(e, e.plus(t))
        }
        static before(e, t) {
            return t = S.fromDurationLike(t),
            e = Cn(e),
            k.fromDateTimes(e.minus(t), e)
        }
        static fromISO(e, a) {
            var [s,i] = (e || "").split("/", 2);
            if (s && i) {
                let e, t;
                try {
                    e = _.fromISO(s, a),
                    t = e.isValid
                } catch (i) {
                    t = !1
                }
                let r, n;
                try {
                    r = _.fromISO(i, a),
                    n = r.isValid
                } catch (i) {
                    n = !1
                }
                if (t && n)
                    return k.fromDateTimes(e, r);
                if (t) {
                    var o = S.fromISO(i, a);
                    if (o.isValid)
                        return k.after(e, o)
                } else if (n && (o = S.fromISO(s, a)).isValid)
                    return k.before(r, o)
            }
            return k.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
        }
        static isInterval(e) {
            return e && e.isLuxonInterval || !1
        }
        get start() {
            return this.isValid ? this.s : null
        }
        get end() {
            return this.isValid ? this.e : null
        }
        get isValid() {
            return null === this.invalidReason
        }
        get invalidReason() {
            return this.invalid ? this.invalid.reason : null
        }
        get invalidExplanation() {
            return this.invalid ? this.invalid.explanation : null
        }
        length(e="milliseconds") {
            return this.isValid ? this.toDuration(e).get(e) : NaN
        }
        count(e="milliseconds") {
            var t, r;
            return this.isValid ? (t = this.start.startOf(e),
            r = this.end.startOf(e),
            Math.floor(r.diff(t, e).get(e)) + (r.valueOf() !== this.end.valueOf())) : NaN
        }
        hasSame(e) {
            return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
        }
        isEmpty() {
            return this.s.valueOf() === this.e.valueOf()
        }
        isAfter(e) {
            return !!this.isValid && this.s > e
        }
        isBefore(e) {
            return !!this.isValid && this.e <= e
        }
        contains(e) {
            return !!this.isValid && this.s <= e && this.e > e
        }
        set({start: e, end: t}={}) {
            return this.isValid ? k.fromDateTimes(e || this.s, t || this.e) : this
        }
        splitAt(...e) {
            if (!this.isValid)
                return [];
            var t = e.map(Cn).filter(e=>this.contains(e)).sort()
              , r = [];
            let n = this.s
              , a = 0;
            for (; n < this.e; ) {
                var s = +(s = t[a] || this.e) > +this.e ? this.e : s;
                r.push(k.fromDateTimes(n, s)),
                n = s,
                a += 1
            }
            return r
        }
        splitBy(e) {
            var t = S.fromDurationLike(e);
            if (!this.isValid || !t.isValid || 0 === t.as("milliseconds"))
                return [];
            let r = this.s, n = 1, a;
            for (var s = []; r < this.e; ) {
                var i = this.start.plus(t.mapUnits(e=>e * n));
                a = +i > +this.e ? this.e : i,
                s.push(k.fromDateTimes(r, a)),
                r = a,
                n += 1
            }
            return s
        }
        divideEqually(e) {
            return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : []
        }
        overlaps(e) {
            return this.e > e.s && this.s < e.e
        }
        abutsStart(e) {
            return !!this.isValid && +this.e == +e.s
        }
        abutsEnd(e) {
            return !!this.isValid && +e.e == +this.s
        }
        engulfs(e) {
            return !!this.isValid && this.s <= e.s && this.e >= e.e
        }
        equals(e) {
            return !(!this.isValid || !e.isValid) && this.s.equals(e.s) && this.e.equals(e.e)
        }
        intersection(e) {
            var t;
            return this.isValid ? (t = (this.s > e.s ? this : e).s,
            (e = (this.e < e.e ? this : e).e) <= t ? null : k.fromDateTimes(t, e)) : this
        }
        union(e) {
            var t;
            return this.isValid ? (t = (this.s < e.s ? this : e).s,
            e = (this.e > e.e ? this : e).e,
            k.fromDateTimes(t, e)) : this
        }
        static merge(e) {
            var [e,t] = e.sort((e,t)=>e.s - t.s).reduce(([e,t],r)=>t ? t.overlaps(r) || t.abutsStart(r) ? [e, t.union(r)] : [e.concat([t]), r] : [e, r], [[], null]);
            return t && e.push(t),
            e
        }
        static xor(e) {
            let t = null
              , r = 0;
            var n = []
              , e = e.map(e=>[{
                time: e.s,
                type: "s"
            }, {
                time: e.e,
                type: "e"
            }]);
            for (const a of Array.prototype.concat(...e).sort((e,t)=>e.time - t.time))
                r += "s" === a.type ? 1 : -1,
                t = 1 === r ? a.time : (t && +t != +a.time && n.push(k.fromDateTimes(t, a.time)),
                null);
            return k.merge(n)
        }
        difference(...e) {
            return k.xor([this].concat(e)).map(e=>this.intersection(e)).filter(e=>e && !e.isEmpty())
        }
        toString() {
            return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Dr
        }
        toLocaleString(e=R, t={}) {
            return this.isValid ? w.create(this.s.loc.clone(t), e).formatInterval(this) : Dr
        }
        toISO(e) {
            return this.isValid ? this.s.toISO(e) + "/" + this.e.toISO(e) : Dr
        }
        toISODate() {
            return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : Dr
        }
        toISOTime(e) {
            return this.isValid ? this.s.toISOTime(e) + "/" + this.e.toISOTime(e) : Dr
        }
        toFormat(e, {separator: t=" – "}={}) {
            return this.isValid ? "" + this.s.toFormat(e) + t + this.e.toFormat(e) : Dr
        }
        toDuration(e, t) {
            return this.isValid ? this.e.diff(this.s, e, t) : S.invalid(this.invalidReason)
        }
        mapEndpoints(e) {
            return k.fromDateTimes(e(this.s), e(this.e))
        }
    }
    class Cr {
        static hasDST(e=g.defaultZone) {
            var t = _.now().setZone(e).set({
                month: 12
            });
            return !e.isUniversal && t.offset !== t.set({
                month: 6
            }).offset
        }
        static isValidIANAZone(e) {
            return l.isValidZone(e)
        }
        static normalizeZone(e) {
            return y(e, g.defaultZone)
        }
        static months(e="long", {locale: t=null, numberingSystem: r=null, locObj: n=null, outputCalendar: a="gregory"}={}) {
            return (n || p.create(t, r, a)).months(e)
        }
        static monthsFormat(e="long", {locale: t=null, numberingSystem: r=null, locObj: n=null, outputCalendar: a="gregory"}={}) {
            return (n || p.create(t, r, a)).months(e, !0)
        }
        static weekdays(e="long", {locale: t=null, numberingSystem: r=null, locObj: n=null}={}) {
            return (n || p.create(t, r, null)).weekdays(e)
        }
        static weekdaysFormat(e="long", {locale: t=null, numberingSystem: r=null, locObj: n=null}={}) {
            return (n || p.create(t, r, null)).weekdays(e, !0)
        }
        static meridiems({locale: e=null}={}) {
            return p.create(e).meridiems()
        }
        static eras(e="short", {locale: t=null}={}) {
            return p.create(t, null, "gregory").eras(e)
        }
        static features() {
            return {
                relative: Xe()
            }
        }
    }
    function Vr(e, t) {
        var r = e=>e.toUTC(0, {
            keepLocalTime: !0
        }).startOf("day").valueOf()
          , t = r(t) - r(e);
        return Math.floor(S.fromMillis(t).as("days"))
    }
    function Ar(e, t, r, n) {
        let[a,s,i,o] = function(e, t, r) {
            var n, a, s = {}, i = e;
            let o, l;
            for ([n,a] of [["years", (e,t)=>t.year - e.year], ["quarters", (e,t)=>t.quarter - e.quarter + 4 * (t.year - e.year)], ["months", (e,t)=>t.month - e.month + 12 * (t.year - e.year)], ["weeks", (e,t)=>((e = Vr(e, t)) - e % 7) / 7], ["days", Vr]])
                0 <= r.indexOf(n) && (s[o = n] = a(e, t),
                (l = i.plus(s)) > t ? (s[n]--,
                t < (e = i.plus(s)) && (l = e,
                s[n]--,
                e = i.plus(s))) : e = l);
            return [e, s, l, o]
        }(e, t, r);
        return e = t - a,
        0 === (r = r.filter(e=>0 <= ["hours", "minutes", "seconds", "milliseconds"].indexOf(e))).length && (i = i < t ? a.plus({
            [o]: 1
        }) : i) !== a && (s[o] = (s[o] || 0) + e / (i - a)),
        t = S.fromObject(s, n),
        0 < r.length ? S.fromMillis(e, n).shiftTo(...r).plus(t) : t
    }
    const Fr = {
        arab: "[٠-٩]",
        arabext: "[۰-۹]",
        bali: "[᭐-᭙]",
        beng: "[০-৯]",
        deva: "[०-९]",
        fullwide: "[０-９]",
        gujr: "[૦-૯]",
        hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
        khmr: "[០-៩]",
        knda: "[೦-೯]",
        laoo: "[໐-໙]",
        limb: "[᥆-᥏]",
        mlym: "[൦-൯]",
        mong: "[᠐-᠙]",
        mymr: "[၀-၉]",
        orya: "[୦-୯]",
        tamldec: "[௦-௯]",
        telu: "[౦-౯]",
        thai: "[๐-๙]",
        tibt: "[༠-༩]",
        latn: "\\d"
    }
      , qr = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881]
    }
      , Pr = Fr.hanidec.replace(/[\[|\]]/g, "").split("");
    function O({numberingSystem: e}, t="") {
        return new RegExp("" + Fr[e || "latn"] + t)
    }
    const jr = "missing Intl.DateTimeFormat.formatToParts support";
    function E(e, t=e=>e) {
        return {
            regex: e,
            deser: ([e])=>t(function(t) {
                let r = parseInt(t, 10);
                if (isNaN(r)) {
                    r = "";
                    for (let e = 0; e < t.length; e++) {
                        var n = t.charCodeAt(e);
                        if (-1 !== t[e].search(Fr.hanidec))
                            r += Pr.indexOf(t[e]);
                        else
                            for (const i in qr) {
                                var [a,s] = qr[i];
                                a <= n && n <= s && (r += n - a)
                            }
                    }
                    return parseInt(r, 10)
                }
                return r
            }(e))
        }
    }
    const zr = `[ ${String.fromCharCode(160)}]`
      , Rr = new RegExp(zr,"g");
    function Zr(e) {
        return e.replace(/\./g, "\\.?").replace(Rr, zr)
    }
    function Ur(e) {
        return e.replace(/\./g, "").replace(Rr, " ").toLowerCase()
    }
    function N(e, r) {
        return null === e ? null : {
            regex: RegExp(e.map(Zr).join("|")),
            deser: ([t])=>e.findIndex(e=>Ur(t) === Ur(e)) + r
        }
    }
    function Hr(e, t) {
        return {
            regex: e,
            deser: ([,e,t])=>ot(e, t),
            groups: t
        }
    }
    function Wr(e) {
        return {
            regex: e,
            deser: ([e])=>e
        }
    }
    const $r = {
        year: {
            "2-digit": "yy",
            numeric: "yyyyy"
        },
        month: {
            numeric: "M",
            "2-digit": "MM",
            short: "MMM",
            long: "MMMM"
        },
        day: {
            numeric: "d",
            "2-digit": "dd"
        },
        weekday: {
            short: "EEE",
            long: "EEEE"
        },
        dayperiod: "a",
        dayPeriod: "a",
        hour12: {
            numeric: "h",
            "2-digit": "hh"
        },
        hour24: {
            numeric: "H",
            "2-digit": "HH"
        },
        minute: {
            numeric: "m",
            "2-digit": "mm"
        },
        second: {
            numeric: "s",
            "2-digit": "ss"
        },
        timeZoneName: {
            long: "ZZZZZ",
            short: "ZZZ"
        }
    };
    let Jr = null;
    function Xr(e, r) {
        return Array.prototype.concat(...e.map(e=>{
            return t = r,
            e.literal || null == (t = Gr(w.macroTokenToFormatOpts(e.val), t)) || t.includes(void 0) ? e : t;
            var t
        }
        ))
    }
    function Kr(p, e, t) {
        t = Xr(w.parseFormat(t), p);
        if (r = (o = t.map(e=>{
            {
                var t = e
                  , r = p;
                const n = O(r)
                  , a = O(r, "{2}")
                  , s = O(r, "{3}")
                  , i = O(r, "{4}")
                  , o = O(r, "{6}")
                  , l = O(r, "{1,2}")
                  , u = O(r, "{1,3}")
                  , c = O(r, "{1,6}")
                  , d = O(r, "{1,9}")
                  , h = O(r, "{2,4}")
                  , m = O(r, "{4,6}")
                  , f = e=>({
                    regex: RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")),
                    deser: ([e])=>e,
                    literal: !0
                });
                return (e = (e=>{
                    if (t.literal)
                        return f(e);
                    switch (e.val) {
                    case "G":
                        return N(r.eras("short"), 0);
                    case "GG":
                        return N(r.eras("long"), 0);
                    case "y":
                        return E(c);
                    case "yy":
                        return E(h, st);
                    case "yyyy":
                        return E(i);
                    case "yyyyy":
                        return E(m);
                    case "yyyyyy":
                        return E(o);
                    case "M":
                        return E(l);
                    case "MM":
                        return E(a);
                    case "MMM":
                        return N(r.months("short", !0), 1);
                    case "MMMM":
                        return N(r.months("long", !0), 1);
                    case "L":
                        return E(l);
                    case "LL":
                        return E(a);
                    case "LLL":
                        return N(r.months("short", !1), 1);
                    case "LLLL":
                        return N(r.months("long", !1), 1);
                    case "d":
                        return E(l);
                    case "dd":
                        return E(a);
                    case "o":
                        return E(u);
                    case "ooo":
                        return E(s);
                    case "HH":
                        return E(a);
                    case "H":
                        return E(l);
                    case "hh":
                        return E(a);
                    case "h":
                        return E(l);
                    case "mm":
                        return E(a);
                    case "m":
                    case "q":
                        return E(l);
                    case "qq":
                        return E(a);
                    case "s":
                        return E(l);
                    case "ss":
                        return E(a);
                    case "S":
                        return E(u);
                    case "SSS":
                        return E(s);
                    case "u":
                        return Wr(d);
                    case "uu":
                        return Wr(l);
                    case "uuu":
                        return E(n);
                    case "a":
                        return N(r.meridiems(), 0);
                    case "kkkk":
                        return E(i);
                    case "kk":
                        return E(h, st);
                    case "W":
                        return E(l);
                    case "WW":
                        return E(a);
                    case "E":
                    case "c":
                        return E(n);
                    case "EEE":
                        return N(r.weekdays("short", !1), 1);
                    case "EEEE":
                        return N(r.weekdays("long", !1), 1);
                    case "ccc":
                        return N(r.weekdays("short", !0), 1);
                    case "cccc":
                        return N(r.weekdays("long", !0), 1);
                    case "Z":
                    case "ZZ":
                        return Hr(new RegExp(`([+-]${l.source})(?::(${a.source}))?`), 2);
                    case "ZZZ":
                        return Hr(new RegExp(`([+-]${l.source})(${a.source})?`), 2);
                    case "z":
                        return Wr(/[a-z_+-/]{1,256}?/i);
                    case " ":
                        return Wr(/[^\S\n\r]/);
                    default:
                        return f(e)
                    }
                }
                )(t) || {
                    invalidReason: jr
                }).token = t,
                e
            }
        }
        )).find(e=>e.invalidReason))
            return {
                input: e,
                tokens: t,
                invalidReason: r.invalidReason
            };
        var [o,r] = [`^${(r = o).map(e=>e.regex).reduce((e,t)=>`${e}(${t.source})`, "")}$`, r]
          , o = RegExp(o, "i")
          , [r,n] = function(t) {
            var r = e.match(o);
            if (r) {
                var n, a, s = {};
                let e = 1;
                for (const i in t)
                    Ge(t, i) && (a = (n = t[i]).groups ? n.groups + 1 : 1,
                    !n.literal && n.token && (s[n.token.val[0]] = n.deser(r.slice(e, e + a))),
                    e += a);
                return [r, s]
            }
            return [r, {}]
        }(r)
          , [a,s,i] = n ? function(n) {
            let e = null, t;
            return v(n.z) || (e = l.create(n.z)),
            v(n.Z) || (e = e || new d(n.Z),
            t = n.Z),
            v(n.q) || (n.M = 3 * (n.q - 1) + 1),
            v(n.h) || (n.h < 12 && 1 === n.a ? n.h += 12 : 12 === n.h && 0 === n.a && (n.h = 0)),
            0 === n.G && n.y && (n.y = -n.y),
            v(n.u) || (n.S = Qe(n.u)),
            [Object.keys(n).reduce((e,t)=>{
                var r = (()=>{
                    switch (t) {
                    case "S":
                        return "millisecond";
                    case "s":
                        return "second";
                    case "m":
                        return "minute";
                    case "h":
                    case "H":
                        return "hour";
                    case "d":
                        return "day";
                    case "o":
                        return "ordinal";
                    case "L":
                    case "M":
                        return "month";
                    case "y":
                        return "year";
                    case "E":
                    case "c":
                        return "weekday";
                    case "W":
                        return "weekNumber";
                    case "k":
                        return "weekYear";
                    case "q":
                        return "quarter";
                    default:
                        return null
                    }
                }
                )();
                return r && (e[r] = n[t]),
                e
            }
            , {}), e, t]
        }(n) : [null, null, void 0];
        if (Ge(n, "a") && Ge(n, "H"))
            throw new j("Can't include meridiem when specifying 24-hour format");
        return {
            input: e,
            tokens: t,
            regex: o,
            rawMatches: r,
            matches: n,
            result: a,
            zone: s,
            specificOffset: i
        }
    }
    function Yr(e, t, r) {
        var {result: e, zone: t, specificOffset: r, invalidReason: n} = Kr(e, t, r);
        return [e, t, r, n]
    }
    function Gr(o, e) {
        if (!o)
            return null;
        var t = (e = w.create(e, o).dtFormatter(Jr = Jr || _.fromMillis(1555555555555))).formatToParts();
        const l = e.resolvedOptions();
        return t.map(r=>{
            {
                var n = o
                  , a = l
                  , {type: r, value: s} = r;
                if ("literal" === r)
                    return {
                        literal: !(i = /^\s+$/.test(s)),
                        val: i ? " " : s
                    };
                var i = n[r];
                let e = r
                  , t = ("hour" === r && (e = null != n.hour12 ? n.hour12 ? "hour12" : "hour24" : null != n.hourCycle ? "h11" === n.hourCycle || "h12" === n.hourCycle ? "hour12" : "hour24" : a.hour12 ? "hour12" : "hour24"),
                $r[e]);
                return (t = "object" == typeof t ? t[i] : t) ? {
                    literal: !1,
                    val: t
                } : void 0
            }
        }
        )
    }
    const Qr = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
      , Br = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    function M(e, t) {
        return new b("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)
    }
    function en(e, t, r) {
        return t = new Date(Date.UTC(e, t - 1, r)),
        e < 100 && 0 <= e && t.setUTCFullYear(t.getUTCFullYear() - 1900),
        0 === (r = t.getUTCDay()) ? 7 : r
    }
    function tn(e, t, r) {
        return r + (et(e) ? Br : Qr)[t - 1]
    }
    function rn(e, t) {
        var r = (e = et(e) ? Br : Qr).findIndex(e=>e < t);
        return {
            month: r + 1,
            day: t - e[r]
        }
    }
    function nn(e) {
        var {year: t, month: r, day: n} = e
          , a = tn(t, r, n)
          , r = en(t, r, n);
        let s = Math.floor((a - r + 10) / 7), i;
        return s < 1 ? (i = t - 1,
        s = at(i)) : s > at(t) ? (i = t + 1,
        s = 1) : i = t,
        {
            weekYear: i,
            weekNumber: s,
            weekday: r,
            ...dt(e)
        }
    }
    function an(e) {
        var {weekYear: t, weekNumber: r, weekday: n} = e
          , a = en(t, 1, 4)
          , s = tt(t);
        let i = 7 * r + n - a - 3, o;
        i < 1 ? (o = t - 1,
        i += tt(o)) : i > s ? (o = t + 1,
        i -= tt(t)) : o = t;
        var {month: r, day: n} = rn(o, i);
        return {
            year: o,
            month: r,
            day: n,
            ...dt(e)
        }
    }
    function sn(e) {
        var {year: t, month: r, day: n} = e;
        return {
            year: t,
            ordinal: tn(t, r, n),
            ...dt(e)
        }
    }
    function on(e) {
        var {year: t, ordinal: r} = e
          , {month: r, day: n} = rn(t, r);
        return {
            year: t,
            month: r,
            day: n,
            ...dt(e)
        }
    }
    function ln(e) {
        var t = $e(e.weekYear)
          , r = c(e.weekNumber, 1, at(e.weekYear))
          , n = c(e.weekday, 1, 7);
        return t ? r ? !n && M("weekday", e.weekday) : M("week", e.week) : M("weekYear", e.weekYear)
    }
    function un(e) {
        var t = $e(e.year)
          , r = c(e.ordinal, 1, tt(e.year));
        return t ? !r && M("ordinal", e.ordinal) : M("year", e.year)
    }
    function cn(e) {
        var t = $e(e.year)
          , r = c(e.month, 1, 12)
          , n = c(e.day, 1, rt(e.year, e.month));
        return t ? r ? !n && M("day", e.day) : M("month", e.month) : M("year", e.year)
    }
    function dn(e) {
        var {hour: e, minute: t, second: r, millisecond: n} = e
          , a = c(e, 0, 23) || 24 === e && 0 === t && 0 === r && 0 === n
          , s = c(t, 0, 59)
          , i = c(r, 0, 59)
          , o = c(n, 0, 999);
        return a ? s ? i ? !o && M("millisecond", n) : M("second", r) : M("minute", t) : M("hour", e)
    }
    const hn = "Invalid DateTime";
    function mn(e) {
        return new b("unsupported zone",`the zone "${e.name}" is not supported`)
    }
    function fn(e) {
        return null === e.weekData && (e.weekData = nn(e.c)),
        e.weekData
    }
    function x(e, t) {
        return e = {
            ts: e.ts,
            zone: e.zone,
            c: e.c,
            o: e.o,
            loc: e.loc,
            invalid: e.invalid
        },
        new _({
            ...e,
            ...t,
            old: e
        })
    }
    function pn(e, t, r) {
        var n = e - 60 * t * 1e3
          , a = r.offset(n);
        return t === a ? [n, t] : a === (r = r.offset(n -= 60 * (a - t) * 1e3)) ? [n, a] : [e - 60 * Math.min(a, r) * 1e3, Math.max(a, r)]
    }
    function yn(e, t) {
        return e += 60 * t * 1e3,
        {
            year: (t = new Date(e)).getUTCFullYear(),
            month: t.getUTCMonth() + 1,
            day: t.getUTCDate(),
            hour: t.getUTCHours(),
            minute: t.getUTCMinutes(),
            second: t.getUTCSeconds(),
            millisecond: t.getUTCMilliseconds()
        }
    }
    function gn(e, t, r) {
        return pn(nt(e), t, r)
    }
    function vn(e, t) {
        var r = e.o
          , n = e.c.year + Math.trunc(t.years)
          , a = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters)
          , n = {
            ...e.c,
            year: n,
            month: a,
            day: Math.min(e.c.day, rt(n, a)) + Math.trunc(t.days) + 7 * Math.trunc(t.weeks)
        }
          , a = S.fromObject({
            years: t.years - Math.trunc(t.years),
            quarters: t.quarters - Math.trunc(t.quarters),
            months: t.months - Math.trunc(t.months),
            weeks: t.weeks - Math.trunc(t.weeks),
            days: t.days - Math.trunc(t.days),
            hours: t.hours,
            minutes: t.minutes,
            seconds: t.seconds,
            milliseconds: t.milliseconds
        }).as("milliseconds");
        let[s,i] = pn(nt(n), r, e.zone);
        return 0 !== a && (s += a,
        i = e.zone.offset(s)),
        {
            ts: s,
            o: i
        }
    }
    function wn(e, t, r, n, a, s) {
        var {setZone: i, zone: o} = r;
        return e && 0 !== Object.keys(e).length || t ? (t = t || o,
        e = _.fromObject(e, {
            ...r,
            zone: t,
            specificOffset: s
        }),
        i ? e : e.setZone(o)) : _.invalid(new b("unparsable",`the input "${a}" can't be parsed as ` + n))
    }
    function bn(e, t, r=!0) {
        return e.isValid ? w.create(p.create("en-US"), {
            allowZ: r,
            forceSimple: !0
        }).formatDateTimeFromString(e, t) : null
    }
    function Tn(e, t) {
        var r = 9999 < e.c.year || e.c.year < 0;
        let n = "";
        return r && 0 <= e.c.year && (n += "+"),
        n += h(e.c.year, r ? 6 : 4),
        n = t ? (n = (n += "-") + h(e.c.month) + "-") + h(e.c.day) : (n += h(e.c.month)) + h(e.c.day)
    }
    function Sn(e, t, r, n, a, s) {
        let i = h(e.c.hour);
        return t ? (i = (i += ":") + h(e.c.minute),
        0 === e.c.millisecond && 0 === e.c.second && r || (i += ":")) : i += h(e.c.minute),
        0 === e.c.millisecond && 0 === e.c.second && r || (i += h(e.c.second),
        0 === e.c.millisecond && n) || (i = (i += ".") + h(e.c.millisecond, 3)),
        a && (e.isOffsetFixed && 0 === e.offset && !s ? i += "Z" : i = e.o < 0 ? (i = (i += "-") + h(Math.trunc(-e.o / 60)) + ":") + h(Math.trunc(-e.o % 60)) : (i = (i += "+") + h(Math.trunc(e.o / 60)) + ":") + h(Math.trunc(e.o % 60))),
        s && (i += "[" + e.zone.ianaName + "]"),
        i
    }
    const kn = {
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    }
      , On = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    }
      , En = {
        ordinal: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
    }
      , Nn = ["year", "month", "day", "hour", "minute", "second", "millisecond"]
      , Mn = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"]
      , xn = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
    function _n(e) {
        var t = {
            year: "year",
            years: "year",
            month: "month",
            months: "month",
            day: "day",
            days: "day",
            hour: "hour",
            hours: "hour",
            minute: "minute",
            minutes: "minute",
            quarter: "quarter",
            quarters: "quarter",
            second: "second",
            seconds: "second",
            millisecond: "millisecond",
            milliseconds: "millisecond",
            weekday: "weekday",
            weekdays: "weekday",
            weeknumber: "weekNumber",
            weeksnumber: "weekNumber",
            weeknumbers: "weekNumber",
            weekyear: "weekYear",
            weekyears: "weekYear",
            ordinal: "ordinal"
        }[e.toLowerCase()];
        if (t)
            return t;
        throw new z(e)
    }
    function Ln(e, t) {
        var r = y(t.zone, g.defaultZone)
          , t = p.fromObject(t)
          , n = g.now();
        let a, s;
        if (v(e.year))
            a = n;
        else {
            for (const o of Nn)
                v(e[o]) && (e[o] = kn[o]);
            var i = cn(e) || dn(e);
            if (i)
                return _.invalid(i);
            i = r.offset(n),
            [a,s] = gn(e, i, r)
        }
        return new _({
            ts: a,
            zone: r,
            loc: t,
            o: s
        })
    }
    function Dn(t, r, n) {
        const a = !!v(n.round) || n.round
          , e = (e,t)=>(e = Be(e, a || n.calendary ? 0 : 2, !0),
        r.loc.clone(n).relFormatter(n).format(e, t))
          , s = e=>n.calendary ? r.hasSame(t, e) ? 0 : r.startOf(e).diff(t.startOf(e), e).get(e) : r.diff(t, e).get(e);
        if (n.unit)
            return e(s(n.unit), n.unit);
        for (const o of n.units) {
            var i = s(o);
            if (1 <= Math.abs(i))
                return e(i, o)
        }
        return e(r < t ? -0 : 0, n.units[n.units.length - 1])
    }
    function In(e) {
        let t = {}, r;
        return r = 0 < e.length && "object" == typeof e[e.length - 1] ? (t = e[e.length - 1],
        Array.from(e).slice(0, e.length - 1)) : Array.from(e),
        [t, r]
    }
    class _ {
        constructor(e) {
            var t, r = e.zone || g.defaultZone;
            let n = e.invalid || (Number.isNaN(e.ts) ? new b("invalid input") : null) || (r.isValid ? null : mn(r))
              , a = (this.ts = v(e.ts) ? g.now() : e.ts,
            null)
              , s = null;
            n || (e.old && e.old.ts === this.ts && e.old.zone.equals(r) ? [a,s] = [e.old.c, e.old.o] : (t = r.offset(this.ts),
            a = yn(this.ts, t),
            n = Number.isNaN(a.year) ? new b("invalid input") : null,
            a = n ? null : a,
            s = n ? null : t)),
            this._zone = r,
            this.loc = e.loc || p.create(),
            this.invalid = n,
            this.weekData = null,
            this.c = a,
            this.o = s,
            this.isLuxonDateTime = !0
        }
        static now() {
            return new _({})
        }
        static local() {
            var [e,t] = In(arguments)
              , [t,r,n,a,s,i,o] = t;
            return Ln({
                year: t,
                month: r,
                day: n,
                hour: a,
                minute: s,
                second: i,
                millisecond: o
            }, e)
        }
        static utc() {
            var [e,t] = In(arguments)
              , [t,r,n,a,s,i,o] = t;
            return e.zone = d.utcInstance,
            Ln({
                year: t,
                month: r,
                day: n,
                hour: a,
                minute: s,
                second: i,
                millisecond: o
            }, e)
        }
        static fromJSDate(e, t={}) {
            var r, e = Je(e) ? e.valueOf() : NaN;
            return Number.isNaN(e) ? _.invalid("invalid input") : (r = y(t.zone, g.defaultZone)).isValid ? new _({
                ts: e,
                zone: r,
                loc: p.fromObject(t)
            }) : _.invalid(mn(r))
        }
        static fromMillis(e, t={}) {
            if (u(e))
                return e < -864e13 || 864e13 < e ? _.invalid("Timestamp out of range") : new _({
                    ts: e,
                    zone: y(t.zone, g.defaultZone),
                    loc: p.fromObject(t)
                });
            throw new o(`fromMillis requires a numerical input, but received a ${typeof e} with value ` + e)
        }
        static fromSeconds(e, t={}) {
            if (u(e))
                return new _({
                    ts: 1e3 * e,
                    zone: y(t.zone, g.defaultZone),
                    loc: p.fromObject(t)
                });
            throw new o("fromSeconds requires a numerical input")
        }
        static fromObject(e, t={}) {
            e = e || {};
            var r = y(t.zone, g.defaultZone);
            if (!r.isValid)
                return _.invalid(mn(r));
            var n = g.now()
              , a = v(t.specificOffset) ? r.offset(n) : t.specificOffset
              , s = ut(e, _n)
              , i = !v(s.ordinal)
              , o = !v(s.year)
              , l = !v(s.month) || !v(s.day)
              , o = o || l
              , u = s.weekYear || s.weekNumber
              , t = p.fromObject(t);
            if ((o || i) && u)
                throw new j("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
            if (l && i)
                throw new j("Can't mix ordinal dates with month/day");
            l = u || s.weekday && !o;
            let c, d, h = yn(n, a), m = (l ? (c = Mn,
            d = On,
            h = nn(h)) : i ? (c = xn,
            d = En,
            h = sn(h)) : (c = Nn,
            d = kn),
            !1);
            for (const f of c)
                v(s[f]) ? m ? s[f] = d[f] : s[f] = h[f] : m = !0;
            return (u = (l ? ln : i ? un : cn)(s) || dn(s)) ? _.invalid(u) : ([n,u] = gn(l ? an(s) : i ? on(s) : s, a, r),
            l = new _({
                ts: n,
                zone: r,
                o: u,
                loc: t
            }),
            s.weekday && o && e.weekday !== l.weekday ? _.invalid("mismatched weekday", `you can't specify both a weekday of ${s.weekday} and a date of ` + l.toISO()) : l)
        }
        static fromISO(e, t={}) {
            var [r,n] = cr(e);
            return wn(r, n, t, "ISO 8601", e)
        }
        static fromRFC2822(e, t={}) {
            var [r,n] = dr(e);
            return wn(r, n, t, "RFC 2822", e)
        }
        static fromHTTP(e, t={}) {
            var [e,r] = hr(e);
            return wn(e, r, t, "HTTP", t)
        }
        static fromFormat(e, t, r={}) {
            if (v(e) || v(t))
                throw new o("fromFormat requires an input string and a format");
            var {locale: n=null, numberingSystem: a=null} = r
              , [n,a,s,i] = Yr(p.fromOpts({
                locale: n,
                numberingSystem: a,
                defaultToEN: !0
            }), e, t);
            return i ? _.invalid(i) : wn(n, a, r, "format " + t, e, s)
        }
        static fromString(e, t, r={}) {
            return _.fromFormat(e, t, r)
        }
        static fromSQL(e, t={}) {
            var [r,n] = wr(e);
            return wn(r, n, t, "SQL", e)
        }
        static invalid(e, t=null) {
            if (!e)
                throw new o("need to specify a reason the DateTime is invalid");
            if (e = e instanceof b ? e : new b(e,t),
            g.throwOnInvalid)
                throw new i(e);
            return new _({
                invalid: e
            })
        }
        static isDateTime(e) {
            return e && e.isLuxonDateTime || !1
        }
        static parseFormatForOpts(e, t={}) {
            return (e = Gr(e, p.fromObject(t))) ? e.map(e=>e ? e.val : null).join("") : null
        }
        static expandFormat(e, t={}) {
            return Xr(w.parseFormat(e), p.fromObject(t)).map(e=>e.val).join("")
        }
        get(e) {
            return this[e]
        }
        get isValid() {
            return null === this.invalid
        }
        get invalidReason() {
            return this.invalid ? this.invalid.reason : null
        }
        get invalidExplanation() {
            return this.invalid ? this.invalid.explanation : null
        }
        get locale() {
            return this.isValid ? this.loc.locale : null
        }
        get numberingSystem() {
            return this.isValid ? this.loc.numberingSystem : null
        }
        get outputCalendar() {
            return this.isValid ? this.loc.outputCalendar : null
        }
        get zone() {
            return this._zone
        }
        get zoneName() {
            return this.isValid ? this.zone.name : null
        }
        get year() {
            return this.isValid ? this.c.year : NaN
        }
        get quarter() {
            return this.isValid ? Math.ceil(this.c.month / 3) : NaN
        }
        get month() {
            return this.isValid ? this.c.month : NaN
        }
        get day() {
            return this.isValid ? this.c.day : NaN
        }
        get hour() {
            return this.isValid ? this.c.hour : NaN
        }
        get minute() {
            return this.isValid ? this.c.minute : NaN
        }
        get second() {
            return this.isValid ? this.c.second : NaN
        }
        get millisecond() {
            return this.isValid ? this.c.millisecond : NaN
        }
        get weekYear() {
            return this.isValid ? fn(this).weekYear : NaN
        }
        get weekNumber() {
            return this.isValid ? fn(this).weekNumber : NaN
        }
        get weekday() {
            return this.isValid ? fn(this).weekday : NaN
        }
        get ordinal() {
            return this.isValid ? sn(this.c).ordinal : NaN
        }
        get monthShort() {
            return this.isValid ? Cr.months("short", {
                locObj: this.loc
            })[this.month - 1] : null
        }
        get monthLong() {
            return this.isValid ? Cr.months("long", {
                locObj: this.loc
            })[this.month - 1] : null
        }
        get weekdayShort() {
            return this.isValid ? Cr.weekdays("short", {
                locObj: this.loc
            })[this.weekday - 1] : null
        }
        get weekdayLong() {
            return this.isValid ? Cr.weekdays("long", {
                locObj: this.loc
            })[this.weekday - 1] : null
        }
        get offset() {
            return this.isValid ? +this.o : NaN
        }
        get offsetNameShort() {
            return this.isValid ? this.zone.offsetName(this.ts, {
                format: "short",
                locale: this.locale
            }) : null
        }
        get offsetNameLong() {
            return this.isValid ? this.zone.offsetName(this.ts, {
                format: "long",
                locale: this.locale
            }) : null
        }
        get isOffsetFixed() {
            return this.isValid ? this.zone.isUniversal : null
        }
        get isInDST() {
            return !this.isOffsetFixed && (this.offset > this.set({
                month: 1,
                day: 1
            }).offset || this.offset > this.set({
                month: 5
            }).offset)
        }
        getPossibleOffsets() {
            var e, t, r, n;
            return this.isValid && !this.isOffsetFixed && (e = nt(this.c),
            r = this.zone.offset(e - 864e5),
            n = this.zone.offset(e + 864e5),
            (r = this.zone.offset(e - 6e4 * r)) !== (n = this.zone.offset(e - 6e4 * n))) && (t = e - 6e4 * n,
            r = yn(e -= 6e4 * r, r),
            n = yn(t, n),
            r.hour === n.hour) && r.minute === n.minute && r.second === n.second && r.millisecond === n.millisecond ? [x(this, {
                ts: e
            }), x(this, {
                ts: t
            })] : [this]
        }
        get isInLeapYear() {
            return et(this.year)
        }
        get daysInMonth() {
            return rt(this.year, this.month)
        }
        get daysInYear() {
            return this.isValid ? tt(this.year) : NaN
        }
        get weeksInWeekYear() {
            return this.isValid ? at(this.weekYear) : NaN
        }
        resolvedLocaleOptions(e={}) {
            var {locale: e, numberingSystem: t, calendar: r} = w.create(this.loc.clone(e), e).resolvedOptions(this);
            return {
                locale: e,
                numberingSystem: t,
                outputCalendar: r
            }
        }
        toUTC(e=0, t={}) {
            return this.setZone(d.instance(e), t)
        }
        toLocal() {
            return this.setZone(g.defaultZone)
        }
        setZone(t, {keepLocalTime: r=!1, keepCalendarTime: n=!1}={}) {
            if ((t = y(t, g.defaultZone)).equals(this.zone))
                return this;
            if (t.isValid) {
                let e = this.ts;
                return (r || n) && (r = t.offset(this.ts),
                n = this.toObject(),
                [e] = gn(n, r, t)),
                x(this, {
                    ts: e,
                    zone: t
                })
            }
            return _.invalid(mn(t))
        }
        reconfigure({locale: e, numberingSystem: t, outputCalendar: r}={}) {
            return e = this.loc.clone({
                locale: e,
                numberingSystem: t,
                outputCalendar: r
            }),
            x(this, {
                loc: e
            })
        }
        setLocale(e) {
            return this.reconfigure({
                locale: e
            })
        }
        set(e) {
            if (!this.isValid)
                return this;
            var t = !v((e = ut(e, _n)).weekYear) || !v(e.weekNumber) || !v(e.weekday)
              , r = !v(e.ordinal)
              , n = !v(e.year)
              , a = !v(e.month) || !v(e.day)
              , s = e.weekYear || e.weekNumber;
            if ((n || a || r) && s)
                throw new j("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
            if (a && r)
                throw new j("Can't mix ordinal dates with month/day");
            let i;
            t ? i = an({
                ...nn(this.c),
                ...e
            }) : v(e.ordinal) ? (i = {
                ...this.toObject(),
                ...e
            },
            v(e.day) && (i.day = Math.min(rt(i.year, i.month), i.day))) : i = on({
                ...sn(this.c),
                ...e
            });
            var [n,s] = gn(i, this.o, this.zone);
            return x(this, {
                ts: n,
                o: s
            })
        }
        plus(e) {
            return this.isValid ? x(this, vn(this, S.fromDurationLike(e))) : this
        }
        minus(e) {
            return this.isValid ? x(this, vn(this, S.fromDurationLike(e).negate())) : this
        }
        startOf(e) {
            if (!this.isValid)
                return this;
            var t = {};
            switch (e = S.normalizeUnit(e)) {
            case "years":
                t.month = 1;
            case "quarters":
            case "months":
                t.day = 1;
            case "weeks":
            case "days":
                t.hour = 0;
            case "hours":
                t.minute = 0;
            case "minutes":
                t.second = 0;
            case "seconds":
                t.millisecond = 0
            }
            return "weeks" === e && (t.weekday = 1),
            "quarters" === e && (e = Math.ceil(this.month / 3),
            t.month = 3 * (e - 1) + 1),
            this.set(t)
        }
        endOf(e) {
            return this.isValid ? this.plus({
                [e]: 1
            }).startOf(e).minus(1) : this
        }
        toFormat(e, t={}) {
            return this.isValid ? w.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : hn
        }
        toLocaleString(e=R, t={}) {
            return this.isValid ? w.create(this.loc.clone(t), e).formatDateTime(this) : hn
        }
        toLocaleParts(e={}) {
            return this.isValid ? w.create(this.loc.clone(e), e).formatDateTimeParts(this) : []
        }
        toISO({format: e="extended", suppressSeconds: t=!1, suppressMilliseconds: r=!1, includeOffset: n=!0, extendedZone: a=!1}={}) {
            var s;
            return this.isValid ? (s = Tn(this, e = "extended" === e),
            (s += "T") + Sn(this, e, t, r, n, a)) : null
        }
        toISODate({format: e="extended"}={}) {
            return this.isValid ? Tn(this, "extended" === e) : null
        }
        toISOWeekDate() {
            return bn(this, "kkkk-'W'WW-c")
        }
        toISOTime({suppressMilliseconds: e=!1, suppressSeconds: t=!1, includeOffset: r=!0, includePrefix: n=!1, extendedZone: a=!1, format: s="extended"}={}) {
            return this.isValid ? (n ? "T" : "") + Sn(this, "extended" === s, t, e, r, a) : null
        }
        toRFC2822() {
            return bn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1)
        }
        toHTTP() {
            return bn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'")
        }
        toSQLDate() {
            return this.isValid ? Tn(this, !0) : null
        }
        toSQLTime({includeOffset: e=!0, includeZone: t=!1, includeOffsetSpace: r=!0}={}) {
            let n = "HH:mm:ss.SSS";
            return (t || e) && (r && (n += " "),
            t ? n += "z" : e && (n += "ZZ")),
            bn(this, n, !0)
        }
        toSQL(e={}) {
            return this.isValid ? this.toSQLDate() + " " + this.toSQLTime(e) : null
        }
        toString() {
            return this.isValid ? this.toISO() : hn
        }
        valueOf() {
            return this.toMillis()
        }
        toMillis() {
            return this.isValid ? this.ts : NaN
        }
        toSeconds() {
            return this.isValid ? this.ts / 1e3 : NaN
        }
        toUnixInteger() {
            return this.isValid ? Math.floor(this.ts / 1e3) : NaN
        }
        toJSON() {
            return this.toISO()
        }
        toBSON() {
            return this.toJSDate()
        }
        toObject(e={}) {
            var t;
            return this.isValid ? (t = {
                ...this.c
            },
            e.includeConfig && (t.outputCalendar = this.outputCalendar,
            t.numberingSystem = this.loc.numberingSystem,
            t.locale = this.loc.locale),
            t) : {}
        }
        toJSDate() {
            return new Date(this.isValid ? this.ts : NaN)
        }
        diff(e, t="milliseconds", r={}) {
            var n;
            return this.isValid && e.isValid ? (r = {
                locale: this.locale,
                numberingSystem: this.numberingSystem,
                ...r
            },
            t = Ke(t).map(S.normalizeUnit),
            e = Ar((n = e.valueOf() > this.valueOf()) ? this : e, n ? e : this, t, r),
            n ? e.negate() : e) : S.invalid("created by diffing an invalid DateTime")
        }
        diffNow(e="milliseconds", t={}) {
            return this.diff(_.now(), e, t)
        }
        until(e) {
            return this.isValid ? k.fromDateTimes(this, e) : this
        }
        hasSame(e, t) {
            var r;
            return !!this.isValid && (r = e.valueOf(),
            (e = this.setZone(e.zone, {
                keepLocalTime: !0
            })).startOf(t) <= r) && r <= e.endOf(t)
        }
        equals(e) {
            return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc)
        }
        toRelative(e={}) {
            if (!this.isValid)
                return null;
            var t = e.base || _.fromObject({}, {
                zone: this.zone
            })
              , r = e.padding ? this < t ? -e.padding : e.padding : 0;
            let n = ["years", "months", "days", "hours", "minutes", "seconds"]
              , a = e.unit;
            return Array.isArray(e.unit) && (n = e.unit,
            a = void 0),
            Dn(t, this.plus(r), {
                ...e,
                numeric: "always",
                units: n,
                unit: a
            })
        }
        toRelativeCalendar(e={}) {
            return this.isValid ? Dn(e.base || _.fromObject({}, {
                zone: this.zone
            }), this, {
                ...e,
                numeric: "auto",
                units: ["years", "months", "days"],
                calendary: !0
            }) : null
        }
        static min(...e) {
            if (e.every(_.isDateTime))
                return Ye(e, e=>e.valueOf(), Math.min);
            throw new o("min requires all arguments be DateTimes")
        }
        static max(...e) {
            if (e.every(_.isDateTime))
                return Ye(e, e=>e.valueOf(), Math.max);
            throw new o("max requires all arguments be DateTimes")
        }
        static fromFormatExplain(e, t, r={}) {
            var {locale: r=null, numberingSystem: n=null} = r;
            return Kr(p.fromOpts({
                locale: r,
                numberingSystem: n,
                defaultToEN: !0
            }), e, t)
        }
        static fromStringExplain(e, t, r={}) {
            return _.fromFormatExplain(e, t, r)
        }
        static get DATE_SHORT() {
            return R
        }
        static get DATE_MED() {
            return Z
        }
        static get DATE_MED_WITH_WEEKDAY() {
            return U
        }
        static get DATE_FULL() {
            return H
        }
        static get DATE_HUGE() {
            return W
        }
        static get TIME_SIMPLE() {
            return $
        }
        static get TIME_WITH_SECONDS() {
            return J
        }
        static get TIME_WITH_SHORT_OFFSET() {
            return X
        }
        static get TIME_WITH_LONG_OFFSET() {
            return K
        }
        static get TIME_24_SIMPLE() {
            return Y
        }
        static get TIME_24_WITH_SECONDS() {
            return G
        }
        static get TIME_24_WITH_SHORT_OFFSET() {
            return Q
        }
        static get TIME_24_WITH_LONG_OFFSET() {
            return B
        }
        static get DATETIME_SHORT() {
            return ee
        }
        static get DATETIME_SHORT_WITH_SECONDS() {
            return te
        }
        static get DATETIME_MED() {
            return re
        }
        static get DATETIME_MED_WITH_SECONDS() {
            return ne
        }
        static get DATETIME_MED_WITH_WEEKDAY() {
            return ae
        }
        static get DATETIME_FULL() {
            return se
        }
        static get DATETIME_FULL_WITH_SECONDS() {
            return ie
        }
        static get DATETIME_HUGE() {
            return oe
        }
        static get DATETIME_HUGE_WITH_SECONDS() {
            return le
        }
    }
    function Cn(e) {
        if (_.isDateTime(e))
            return e;
        if (e && e.valueOf && u(e.valueOf()))
            return _.fromJSDate(e);
        if (e && "object" == typeof e)
            return _.fromObject(e);
        throw new o(`Unknown datetime argument: ${e}, of type ` + typeof e)
    }
    function L(e) {
        let t, r;
        var n = (e = e.replace(/[\s]/g, "")).replace(/\D+/g, "");
        if (n.length <= 8) {
            if (8 === n.length)
                return s = parseInt(n.slice(0, 4), 10),
                i = parseInt(n.slice(4, 6), 10) - 1 || 0,
                a = parseInt(n.slice(6, 8), 10) || 1,
                new Date(Date.UTC(s, i, a));
            if (6 === n.length)
                return s = parseInt(n.slice(0, 4), 10),
                i = parseInt(n.slice(4, 6), 10) - 1 || 0,
                new Date(Date.UTC(s, i));
            if (4 === n.length)
                return new Date(n)
        }
        r = e.endsWith("Z") ? (t = e.slice(0, -1),
        null) : (t = e.slice(0, -5),
        e.slice(-5));
        var a = t.replace(/[-:Zz]/g, "")
          , s = parseInt(a.slice(0, 4), 10)
          , i = parseInt(a.slice(4, 6), 10) - 1 || 0
          , n = parseInt(a.slice(6, 8), 10) || 1
          , e = parseInt(a.slice(8, 10), 10) || 0
          , o = parseInt(a.slice(10, 12), 10) || 0
          , a = parseInt(a.slice(12, 14), 10) || 0
          , s = new Date(Date.UTC(s, i, n, e, o, a));
        return r && (i = r.slice(0, 1),
        n = 60 * parseInt(r.slice(1, 3), 10) + parseInt(r.slice(3, 5), 10),
        "+" === i ? s.setUTCMinutes(s.getUTCMinutes() - n) : "-" === i && s.setUTCMinutes(s.getUTCMinutes() + n)),
        s
    }
    function Vn(e) {
        var t, r, n = new Map;
        for ([t,r] of e.entries())
            n.set(r, t);
        return n
    }
    const An = ["actor", "adapter", "aspect", "audio", "category", "channel", "colour", "commentator", "composer", "country", "credits", "date", "desc", "director", "display-name", "editor", "episode-num", "guest", "icon", "image", "keyword", "language", "last-chance", "length", "new", "orig-language", "premiere", "present", "presenter", "previously-shown", "producer", "programme", "quality", "rating", "review", "star-rating", "stereo", "sub-title", "subtitles", "title", "tv", "url", "value", "video", "writer"]
      , Fn = ["channel", "clumpidx", "date", "generator-info-name", "generator-info-url", "guest", "height", "id", "lang", "orient", "pdc-start", "reviewer", "role", "showview", "size", "source-data-url", "source-info-name", "source-info-url", "source", "src", "start", "stop", "system", "type", "units", "videoplus", "vps-start", "width"]
      , qn = new Map([...An.map(e=>[e, e])])
      , Pn = new Map([...Fn.map(e=>[e, e])])
      , jn = Vn(qn)
      , zn = Vn(Pn);
    function s(e, t) {
        if (!An.includes(e))
            throw new Error("Invalid tag: " + e);
        var r = qn
          , n = jn;
        r && n && (r.set(e, t),
        n.set(t, e))
    }
    function Rn(e, t) {
        if (!Fn.includes(e))
            throw new Error("Invalid attribute: " + e);
        var r = Pn
          , n = zn;
        r && n && (r.set(e, t),
        n.set(t, e))
    }
    function Zn(i) {
        let o = 0;
        const s = "<"
          , l = ">"
          , u = s.charCodeAt(0)
          , c = l.charCodeAt(0)
          , d = "-".charCodeAt(0)
          , h = "/".charCodeAt(0)
          , m = "!".charCodeAt(0)
          , f = "'".charCodeAt(0)
          , p = '"'.charCodeAt(0)
          , y = "[".charCodeAt(0)
          , g = "]".charCodeAt(0)
          , v = "?".charCodeAt(0)
          , t = `\r
	>/= `
          , w = ["new", "icon", "previously-shown"];
        function b(e) {
            for (var r = []; i[o]; )
                if (i.charCodeAt(o) == u) {
                    if (i.charCodeAt(o + 1) === h) {
                        var t = o + 2;
                        if (o = i.indexOf(l, o),
                        -1 == i.substring(t, o).indexOf(e))
                            throw t = i.substring(0, o).split(`
`),
                            new Error(`Unexpected close tag
Line: ` + (t.length - 1) + `
Column: ` + (t[t.length - 1].length + 1) + `
Char: ` + i[o]);
                        return o + 1 && (o += 1),
                        r
                    }
                    if (i.charCodeAt(o + 1) === m) {
                        if (i.charCodeAt(o + 2) == d) {
                            for (; -1 !== o && (i.charCodeAt(o) !== c || i.charCodeAt(o - 1) != d || i.charCodeAt(o - 2) != d || -1 == o); )
                                o = i.indexOf(l, o + 1);
                            -1 === o && (o = i.length)
                        } else {
                            t = o + 1;
                            o += 2;
                            let e = !1;
                            for (; (i.charCodeAt(o) !== c || !0 === e) && i[o]; )
                                i.charCodeAt(o) === y ? e = !0 : !0 === e && i.charCodeAt(o) === g && (e = !1),
                                o++;
                            r.push(i.substring(t, o))
                        }
                        o++;
                        continue
                    }
                    var n = function() {
                        o++;
                        var r = T()
                          , n = {};
                        let a = [];
                        for (; i.charCodeAt(o) !== c && i[o]; ) {
                            var s = i.charCodeAt(o);
                            if (64 < s && s < 91 || 96 < s && s < 123) {
                                s = T();
                                let e = i.charCodeAt(o), t;
                                for (; e && e !== f && e !== p && !(64 < e && e < 91 || 96 < e && e < 123) && e !== c; )
                                    o++,
                                    e = i.charCodeAt(o);
                                if (e === f || e === p) {
                                    if (t = function() {
                                        var e = i[o]
                                          , t = o + 1;
                                        return o = i.indexOf(e, t),
                                        i.slice(t, o)
                                    }(),
                                    -1 === o)
                                        return {
                                            tagName: r,
                                            attributes: n,
                                            children: a
                                        }
                                } else
                                    t = null,
                                    o--;
                                n[s] = t
                            }
                            o++
                        }
                        return i.charCodeAt(o - 1) !== h && -1 === w.indexOf(r) ? (o++,
                        a = b(r)) : o++,
                        "date" === r ? {
                            tagName: r,
                            attributes: n,
                            children: a.map(e=>{
                                return e = L(e),
                                "" + (t = e=>e < 10 ? "0" + e : e.toString())(e.getUTCFullYear()) + t(e.getUTCMonth() + 1) + t(e.getUTCDate()) + t(e.getUTCHours()) + t(e.getUTCMinutes()) + t(e.getUTCSeconds()) + " +0000";
                                var t
                            }
                            )
                        } : {
                            tagName: r,
                            attributes: n,
                            children: a
                        }
                    }();
                    if (r.push(n),
                    n.tagName.charCodeAt(0) === v && n.children) {
                        for (let e = 0, t = n.children.length; e < t; e++)
                            r.push(n.children[e]);
                        n.children = []
                    }
                } else {
                    a = void 0,
                    a = o,
                    -2 == (o = i.indexOf(s, o) - 1) && (o = i.length);
                    var a = i.slice(a, o + 1).trim();
                    0 < a.length && r.push(a),
                    o++
                }
            return r
        }
        function T() {
            for (var e = o; -1 === t.indexOf(i[o]) && i[o]; )
                o++;
            return i.slice(e, o)
        }
        return b("")
    }
    s("display-name", "displayName"),
    s("episode-num", "episodeNum"),
    s("last-chance", "lastChance"),
    s("orig-language", "origLanguage"),
    s("previously-shown", "previouslyShown"),
    s("star-rating", "starRating"),
    s("sub-title", "subTitle"),
    s("channel", "channels"),
    s("programme", "programmes"),
    Rn("generator-info-name", "generatorInfoName"),
    Rn("generator-info-url", "generatorInfoUrl"),
    Rn("pdc-start", "pdcStart"),
    Rn("vps-start", "vpsStart"),
    Rn("source-data-url", "sourceDataUrl"),
    Rn("source-info-name", "sourceInfoName"),
    Rn("source-info-url", "sourceInfoUrl");
    const Un = "?".charCodeAt(0)
      , Hn = ["credits", "date", "language", "orig-language", "length", "country", "previously-shown", "premiere", "last-chance", "new", "video", "audio", "present", "colour", "aspect", "quality", "present", "stereo", "value"]
      , Wn = ["date", "value", "aspect", "present", "colour", "quality", "stereo"];
    function $n(e, t={
        asDom: !1
    }) {
        e = Zn(e);
        return t.asDom ? e : function n(a, s={
            tagName: "tv",
            attributes: {},
            children: []
        }) {
            let i = {};
            if (a.length) {
                if (1 === a.length && "string" == typeof a[0] && ("yes" === a[0] || "no" === a[0]))
                    return "yes" === a[0];
                if (1 === a.length && "string" == typeof a[0] && "string" != typeof s)
                    return Object.keys(s.attributes).length ? {
                        _value: a[0]
                    } : a[0];
                for (let e = 0, t = a.length; e < t; e++) {
                    let r = a[e];
                    if ("string" != typeof s && "actor" === s.tagName && "string" == typeof r && (i._value = r),
                    "object" == typeof r && r.tagName.charCodeAt(0) !== Un)
                        if ("new" === r.tagName)
                            i[r.tagName] = !0;
                        else {
                            "tv" === r.tagName && (i = {});
                            var o, l = qn.get(r.tagName) || r.tagName;
                            i[l] || -1 !== Hn.indexOf(r.tagName) || (i[l] = []);
                            let e = n(r.children || [], r);
                            Object.keys(r.attributes).length && !Array.isArray(e) && (r.attributes.size && (r.attributes.size = Number(r.attributes.size)),
                            "programmes" === l ? (r.attributes.stop && (r.attributes.stop = L(r.attributes.stop)),
                            r.attributes["pdc-start"] && (r.attributes["pdc-start"] = L(r.attributes["pdc-start"])),
                            r.attributes["vps-start"] && (r.attributes["vps-start"] = L(r.attributes["vps-start"]))) : "icon" === l ? (r.attributes.width && (r.attributes.width = Number(r.attributes.width)),
                            r.attributes.height && (r.attributes.height = Number(r.attributes.height))) : r.attributes.units ? e._value = Number(e._value) : r.attributes.guest && (r.attributes.guest = "yes" === r.attributes.guest),
                            r.attributes.date && (r.attributes.date = L(r.attributes.date)),
                            r.attributes.start && (r.attributes.start = L(r.attributes.start)),
                            o = Object.keys(r.attributes).reduce((e,t)=>(e[Pn.get(t) || t] = r.attributes[t],
                            e), {}),
                            Object.assign(e, o)),
                            "subtitles" === l ? ("string" == typeof e.language && (e.language = {
                                _value: e.language
                            }),
                            i[l].push(e)) : "tv" === l ? i = e : "date" === l ? i[l] = L(e) : ("string" == typeof e && -1 === Wn.indexOf(r.tagName) && (e = {
                                _value: e
                            }),
                            Array.isArray(i[l]) ? i[l].push(e) : i[l] = e)
                        }
                }
            }
            return i
        }(e)
    }
    class Jn {
        constructor(e) {
            this.playlist = e,
            this.NON_QUOTED_COMMA = /,(?=(?:[^"]|"[^"]*")*$)/
        }
        parse() {
            let r = this.playlist.toString().trim().split("\n");
            if (!r.length || !r[0].startsWith("#EXTM3U"))
                return !1;
            let n = this.parseHeader(r[0]);
            r = r.slice(1);
            var a, s, i = [];
            let o = {};
            for (let t = 0; t < r.length; ++t) {
                let e = r[t].trim();
                e.startsWith("#. ") || (e.startsWith("#EXTM3U") ? n = this.mergeHeader(n, e) : e.startsWith("#") ? !1 !== (e = this.transform(e)) && (a = Object.keys(e)[0],
                o.hasOwnProperty(a) ? (s = Object.keys(e[a])[0],
                o[a].hasOwnProperty(s) ? Array.isArray(o[a][s]) ? o[a][s].push(e[a][s]) : o[a][s] = [o[a][s], e[a][s]] : Object.assign(o[a], e[a])) : "EXTINF" === a ? o[a] = e[a] : Object.assign(o, e)) : 0 < e.length && 0 < Object.keys(o).length && e.startsWith("http") && o.hasOwnProperty("EXTINF") && (o.URL = this.split(e, "|")[0],
                i.push(o),
                o = {}))
            }
            return {
                header: n,
                channels: i
            }
        }
        transform(e) {
            var t = this.split(e)
              , r = {}
              , n = this.normalize(t[0]);
            switch (n) {
            case "EXTINF":
                r[n] = 1 < t.length ? this.parseInf(t[1]) : void 0;
                break;
            case "KODIPROP":
            case "EXTVLCOPT":
                r[n] = 1 < t.length ? this.parseKodi(t[1]) : void 0;
                break;
            case "EXTHTTP":
                r[n] = 1 < t.length ? this.parseExtHTTP(t[1]) : void 0;
                break;
            default:
                return !1
            }
            return r
        }
        mergeHeader(e, t) {
            var r, n, t = this.parseHeader(t);
            for ([r,n] of Object.entries(t))
                "url-tvg" === r && e.hasOwnProperty(r) ? e[r] += "," + n : "player-buffer" === r && e.hasOwnProperty(r) && parseInt(e[r]) > parseInt(n) || (e[r] = n);
            return e
        }
        parseHeader(e) {
            e = e.split(this.NON_QUOTED_COMMA);
            let t = {};
            return [...e[0].matchAll(/([^=\s]+)="?([^"]*)/g)].forEach(e=>{
                t[e[1]] = e[2].trim()
            }
            ),
            t
        }
        parseInf(e) {
            e = e.split(this.NON_QUOTED_COMMA);
            let t = {};
            return [...e[0].matchAll(/([^=\s]+)="?([^"]*)/g)].forEach(e=>{
                t[e[1]] = e[2].trim()
            }
            ),
            t["channel-name"] = e[1].trim(),
            t
        }
        parseKodi(e) {
            var t = e.indexOf("=")
              , e = [e.slice(0, t), e.slice(t + 1)]
              , t = {};
            return t[e[0]] = e[1].trim(),
            t
        }
        parseExtHTTP(e) {
            try {
                return JSON.parse(e)
            } catch (e) {
                return !1
            }
        }
        normalize(e) {
            return e.startsWith("#EXT-X-") ? e.slice("#EXT-X-".length) : e.startsWith("#") ? e.slice(1) : e
        }
        split(e, t=":") {
            t = e.indexOf(t);
            return 0 < t ? [e.slice(0, t), e.slice(t + 1)] : [e]
        }
        filter(t) {
            let r = 0;
            for (let e = 0; e < t.length; ++e)
                t[r] = t[e].trim(),
                t[r] && (r += 1);
            return t.length = r,
            t
        }
    }
    function D(e) {
        return chrome.i18n.getMessage(e)
    }
    document.querySelector("html").setAttribute("lang", D("@@ui_locale"));
    let I = {
        autoLowLatency: !0,
        audioLang: "es",
        epgEnabled: !0,
        compressorEnabled: !1,
        customWV: !1,
        customWV_data: "",
        customCK: !1,
        customCK_data: "",
        extra: {
            widevine: !1,
            clearkeys: !1,
            playlist: {}
        }
    }, C = !1, Xn = [], Kn = !1, Yn = !1, Gn = 0, Qn = 30 <= _.now().minute ? 30 : 0, Bn, ea, V = new URL(window.location.href), ta = "";
    window.urlCk = !1;
    n = chrome.runtime.getManifest();
    let A = jwplayer("player")
      , F = {
        playlist: [{
            sources: [{
                file: "",
                default: !0
            }]
        }],
        width: "100%",
        height: "100%",
        stretching: "uniform",
        aspectratio: "16:9",
        autostart: !0,
        liveSyncDuration: 5,
        liveTimeout: 0,
        preload: "auto",
        playbackRateControls: !0,
        playbackRates: [.25, .5, .75, .9, 1, 1.1, 1.25, 1.5],
        abouttext: n.name + " v" + n.version,
        aboutlink: "https://chrome.google.com/webstore/detail/" + chrome.runtime.id,
        skin: {
            name: "extension",
            url: "jwp.min.css"
        }
    };
    function ra(e) {
        e = e.replaceAll("-", "+").replaceAll("_", "/");
        let t = atob(e)
          , r = (t = t.split(""),
        "");
        return t.forEach(e=>{
            r += e.codePointAt(0).toString(16).padStart(2, "0")
        }
        ),
        r
    }
    function na(e) {
        if (/[ {"']*([0-9a-f]{32})[ "']*:[ "']*([0-9a-f]{32})[ }"']*/i.test(e)) {
            var t = {};
            for (const r of e.matchAll(/[ {"']*([0-9a-f]{32})[ "']*:[ "']*([0-9a-f]{32})[ }"']*/gi))
                t[r[1]] = r[2];
            return t
        }
        return !1
    }
    function aa(e) {
        let r = {};
        try {
            r = JSON.parse(e)
        } catch (e) {
            return !1
        }
        if (Array.isArray(r?.keys)) {
            let t = {};
            return r.keys.forEach(e=>{
                t[ra(e.kid)] = ra(e.k)
            }
            ),
            t
        }
        return !1
    }
    function sa(e) {
        var t, r = na(e);
        return (r || !!(r = aa(e))) && (t = Object.entries(r)[0],
        I.extra.clearkeys = {
            drm: {
                clearKeys: r
            }
        },
        {
            clearkey: {
                keyId: t[0],
                key: t[1]
            }
        })
    }
    function ia(e, r) {
        if (void 0 !== r) {
            let e = r["inputstream.adaptive.license_type"] || !1
              , t = r["inputstream.adaptive.license_key"] || !1;
            var n, r = r["inputstream.adaptive.server_certificate"] || "";
            if (!1 !== e && !1 !== t) {
                if (e = e.toLowerCase().trim(),
                t = t.trim(),
                "clearkey" === e || "org.w3.clearkey" === e)
                    return /^https?/.test(t) ? !1 === (n = function(e) {
                        var t = new XMLHttpRequest;
                        t.open("GET", e, !1);
                        try {
                            if (t.send(),
                            200 !== t.status)
                                return !1;
                            if (!1 === na(t.responseText) && !1 === aa(t.responseText))
                                return !1
                        } catch (e) {
                            return !1
                        }
                        return t.responseText
                    }(t)) ? (window.urlCk = t,
                    !!/m3u8/i.test(ta) && {
                        clearkey: {
                            keyId: "",
                            key: ""
                        }
                    }) : sa(n) : sa(t);
                "widevine" !== e && "com.widevine.alpha" !== e || (I.extra.widevine = {
                    drm: {
                        servers: {
                            "com.widevine.alpha": t
                        },
                        advanced: {
                            "com.widevine.alpha": {
                                videoRobustness: "SW_SECURE_CRYPTO",
                                audioRobustness: "SW_SECURE_CRYPTO",
                                serverCertificateUri: r
                            }
                        }
                    }
                })
            }
        }
        return !1
    }
    function oa(n, e) {
        if ("keydown" !== e.type || "Enter" === e.key) {
            e.currentTarget.focus(),
            I.extra.widevine = !1,
            I.extra.clearkeys = !1,
            I.extra.buffer = !1,
            window.urlCk = !1,
            ta = n.URL;
            var t = n.EXTINF
              , a = n.KODIPROP
              , s = n.EXTVLCOPT
              , i = n.EXTHTTP
              , o = (F.playlist = [{
                title: t["channel-name"],
                image: t["tvg-logo"] || "https://i.imgur.com/qu2uE1z.png",
                sources: [{
                    file: ta,
                    default: !0
                }]
            }],
            t["group-title"] && (F.playlist[0].description = t["group-title"]),
            t["tvg-name"] && (F.playlist[0].mediaid = t["tvg-name"]),
            ia(0, a))
              , o = (!1 !== o && (F.playlist[0].sources[0].drm = o),
            void 0 !== a && a["inputstream.adaptive.file_type"] && (F.playlist[0].sources[0].type = a["inputstream.adaptive.file_type"]),
            void 0 !== a && a["inputstream.adaptive.manifest_type"] && (F.playlist[0].sources[0].type = a["inputstream.adaptive.manifest_type"]),
            document.querySelector(".channel.active"));
            null !== o && o.classList.remove("active"),
            e.currentTarget.classList.add("active");
            let r = !1;
            if (void 0 !== a && a["inputstream.adaptive.stream_headers"]) {
                let e = a["inputstream.adaptive.stream_headers"];
                "string" == typeof e && 3 < e.length && (e = [e]),
                Array.isArray(e) && (r = [],
                e.forEach(e=>{
                    let t;
                    (t = -1 !== e.indexOf("&") ? e.split("&") : [e]).forEach(e=>{
                        var t = e.indexOf("=");
                        -1 !== t && r.push({
                            operation: "set",
                            header: decodeURI(e.slice(0, t)),
                            value: decodeURI(e.slice(t + 1)).replaceAll('"', "")
                        })
                    }
                    )
                }
                ))
            }
            if (t["player-buffer"] && (I.extra.buffer = t["player-buffer"]),
            void 0 !== s && (s["http-referrer"] && (r = !1 === r ? [] : r).push({
                operation: "set",
                header: "referer",
                value: s["http-referrer"]
            }),
            s["http-origin"] && (r = !1 === r ? [] : r).push({
                operation: "set",
                header: "origin",
                value: s["http-origin"]
            }),
            s["http-user-agent"]) && (r = !1 === r ? [] : r).push({
                operation: "set",
                header: "user-agent",
                value: s["http-user-agent"]
            }),
            void 0 !== i)
                for (var [l,u] of Object.entries(i))
                    r.push({
                        operation: "set",
                        header: l,
                        value: u
                    });
            chrome.runtime.sendMessage({
                cmd: "updateHeadersRules",
                requestHeaders: r
            }).then(e=>{
                clearTimeout(ea),
                void 0 !== A.getState() ? (A.load(F.playlist).play(!0),
                I.epgEnabled && (document.querySelector("#player").classList.add("jw-changed-channel"),
                clearTimeout(Bn),
                Bn = window.setTimeout(()=>{
                    document.querySelector("#player").classList.remove("jw-changed-channel")
                }
                , 5e3),
                Yn = n,
                ha(!0))) : A.setup(F).on("ready", ()=>{
                    var e, t;
                    A.addButton('<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon btn-compressor-off" viewBox="0 0 640 512"><path d="M352 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM544 96c0-17.7-14.3-32-32-32s-32 14.3-32 32V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96zM256 128c0-17.7-14.3-32-32-32s-32 14.3-32 32V384c0 17.7 14.3 32 32 32s32-14.3 32-32V128zm192 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V352c0 17.7 14.3 32 32 32s32-14.3 32-32V160zM160 224c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V224zM0 256a32 32 0 1 0 64 0A32 32 0 1 0 0 256zm576 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z"/></svg>', D("player_compressor_turn_on"), pa, "btn-compressor", "btn-compressor"),
                    document.querySelector(".jw-icon.jw-icon-volume").after(document.querySelector(".jw-icon.btn-compressor")),
                    I.compressorEnabled && document.querySelector(".jw-icon.btn-compressor").click(),
                    I.epgEnabled && (Yn = n,
                    e = Yn.EXTINF["tvg-logo"] || "tv-icon.png",
                    (t = document.createElement("div")).classList.add("jw-title-left"),
                    t.innerHTML = `<div class="jw-title-logo"><img src="${e}" alt="Logo"></div>`,
                    (e = document.createElement("div")).classList.add("jw-title-right", "no-program"),
                    e.innerHTML = '<div class="jw-title-program jw-reset-text">' + D("iptv_epg_no_data") + '</div><div class="jw-title-information jw-reset-text"><div class="jw-title-time"></div><div class="jw-title-progress"><progress value="0" max="100"></progress></div><div class="jw-title-time-left"></div><div class="jw-title-quality"></div></div><div class="jw-title-description jw-reset-text"></div>',
                    document.querySelector(".jw-title").prepend(t, e),
                    document.querySelector(".jw-title-left").append(document.querySelector(".jw-title-primary"), document.querySelector(".jw-title-secondary")))
                }
                ).on("error", e=>{}
                ).on("play", e=>{
                    "playing" === e.newstate && "buffering" === e.oldstate && clearTimeout(ea)
                }
                ).on("buffer", e=>{
                    "buffering" === e.newstate && "playing" === e.oldstate && "stalled" === e.reason && (ea = window.setTimeout(()=>{
                        "buffering" === A.getState() && A.load(A.getPlaylist())
                    }
                    , 1e4))
                }
                ).on("levels", a=>{
                    var e;
                    "Auto" !== a.levels[a.currentQuality].label && ("shaka" === A.getProvider().name && "object" == typeof shakadata ? (e = shakadata.shakaPlayer.getVariantTracks().find(e=>e.id === a.levels[a.currentQuality].shakaId),
                    ma(a.levels[a.currentQuality], e)) : "hlsjs" === A.getProvider().name && "object" == typeof hlsdata && (e = hlsdata.levelController.levels.at(a.levels[a.currentQuality].hlsjsIndex),
                    ma(a.levels[a.currentQuality], e))),
                    document.querySelectorAll("#jw-player-settings-submenu-quality button").forEach((t,r)=>{
                        if (0 !== r) {
                            let e = "";
                            var n;
                            "shaka" === A.getProvider().name && "object" == typeof shakadata ? (n = shakadata.shakaPlayer.getVariantTracks().find(e=>e.id === a.levels[r].shakaId))?.frameRate && (e = " " + parseFloat(Number(n.frameRate).toFixed(2)) + " fps") : "hlsjs" === A.getProvider().name && "object" == typeof hlsdata && (n = hlsdata.levelController.levels.at(a.levels[r].hlsjsIndex))?.attrs["FRAME-RATE"] && (e = " " + parseFloat(Number(n.attrs["FRAME-RATE"]).toFixed(2)) + " fps"),
                            t.innerHTML = a.levels[r].height + "p (" + Math.floor(a.levels[r].bitrate / 1e3) + " kbps" + e + ")"
                        }
                    }
                    )
                }
                ).on("levelsChanged", t=>{
                    var e;
                    0 === t.currentQuality && "Auto" === t.levels[t.currentQuality].label && (t.currentQuality = A.getVisualQuality().level.index),
                    "shaka" === A.getProvider().name && "object" == typeof shakadata ? (e = shakadata.shakaPlayer.getVariantTracks().find(e=>e.id === t.levels[t.currentQuality].shakaId),
                    ma(t.levels[t.currentQuality], e)) : "hlsjs" === A.getProvider().name && "object" == typeof hlsdata && (e = hlsdata.levelController.currentLevel,
                    ma(t.levels[t.currentQuality], e))
                }
                ).on("visualQuality", t=>{
                    var e;
                    "shaka" === A.getProvider().name && "object" == typeof shakadata ? (e = shakadata.shakaPlayer.getVariantTracks().find(e=>e.id === t.jwLevel.shakaId),
                    ma(t.level, e)) : "hlsjs" === A.getProvider().name && "object" == typeof hlsdata && (e = hlsdata.levelController.levels.at(t.jwLevel.hlsjsIndex),
                    ma(t.level, e))
                }
                )
            }
            )
        }
    }
    function la(e) {
        "keydown" === e.type && "Enter" !== e.key || (e.currentTarget.classList.contains("start") ? ua(-13200) : e.currentTarget.classList.contains("left") ? ua(-1200) : e.currentTarget.classList.contains("right") ? ua(1200) : e.currentTarget.classList.contains("last") && ua(13200))
    }
    function ua(e) {
        13200 < (Gn = (Gn += e) < 0 ? 0 : Gn) && (Gn = 13200),
        document.querySelector("#playlist").style.setProperty("--epg-shift", Gn)
    }
    function ca() {
        Kn = [];
        const l = _.now().plus({
            days: 1
        }).toJSDate()
          , u = _.now().set({
            minute: 0,
            second: 0
        }).toJSDate();
        let c = 0;
        C.channels.forEach((n,a)=>{
            const s = n.EXTINF["tvg-id"]?.toString().trim().toLowerCase()
              , i = n.EXTINF["tvg-name"]?.toString().trim().toLowerCase();
            if (s || i) {
                let r = !1;
                for (let t = 0; t < Xn.length; t++) {
                    const o = Xn[t]?.channels?.find(e=>e.id.trim().toLowerCase() === s || e.displayName.find(e=>e._value.trim().toLowerCase() === i));
                    if (o) {
                        let e = Xn[t].programmes.filter(e=>e.channel === o.id && e.start < l && e.stop > u);
                        Array.isArray(e) ? (c++,
                        e.sort((e,t)=>e.start === t.start ? 0 : e.start < t.start ? -1 : 1)) : e = [],
                        Kn.push({
                            channel_id: a,
                            extinf: n.EXTINF,
                            channel_info: o,
                            programmes: e
                        }),
                        r = !0;
                        break
                    }
                }
                r || Kn.push({
                    channel_id: a,
                    extinf: n.EXTINF,
                    channel_info: !1,
                    programmes: []
                })
            } else
                Kn.push({
                    channel_id: a,
                    extinf: n.EXTINF,
                    channel_info: !1,
                    programmes: []
                })
        }
        ),
        0 === c ? I.epgEnabled = !1 : (function n(e=!1) {
            let t = ""
              , r = _.now().set({
                minute: Qn,
                second: 0
            });
            for (let e = 0; e < 50; e++) {
                var a = r.hasSame(_.now(), "day") ? r.toLocaleString(_.TIME_24_SIMPLE) : r.toLocaleString({
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric"
                });
                t += '<div class="timeline-block">' + a + "</div>",
                r = r.plus({
                    minutes: 30
                })
            }
            e ? ((e = document.createElement("div")).classList.add("timeline-header"),
            e.innerHTML = '<div class="current-time"></div><div class="current-date"></div><div class="timeline">' + t + "</div>",
            (s = document.createElement("div")).classList.add("timebar"),
            s.innerHTML = '<div class="timebar-time"></div><div class="timebar-bar"></div>',
            document.querySelector("#playlist .action-bar").after(e, s),
            setInterval(()=>{
                var e, t, r = 30 <= _.now().minute ? 30 : 0;
                r !== Qn ? (Qn = r,
                n()) : (r = _.now(),
                e = _.now().set({
                    minute: Qn,
                    second: 0
                }),
                e = k.fromDateTimes(e, r).length("minutes"),
                e = Math.floor(10 * e),
                (t = document.querySelector(".timebar")).style.setProperty("--epg-timebar", e),
                t.querySelector(".timebar-time").innerText = r.toLocaleString(_.TIME_24_SIMPLE),
                document.querySelector("#playlist .current-time").innerText = r.toLocaleString(_.TIME_24_WITH_SECONDS),
                document.querySelector("#playlist .current-date").innerText = r.toLocaleString({
                    weekday: "long",
                    month: "long",
                    day: "numeric"
                }))
            }
            , 500),
            (e = document.createElement("div")).classList.add("shift-buttons"),
            e.innerHTML = '<i class="fas start fa-left-long-to-line" tabindex="0"></i><i class="fas left fa-left-long" tabindex="0"></i><i class="fas right fa-right-long" tabindex="0"></i><i class="fas last fa-right-long-to-line" tabindex="0"></i>',
            document.querySelector("#playlist .action-bar").append(e),
            document.querySelectorAll("#playlist .shift-buttons .fas").forEach(e=>{
                e.addEventListener("click", la),
                e.addEventListener("keydown", la)
            }
            ),
            document.querySelector("#playlist").classList.add("epg"),
            document.querySelector("#player").classList.add("jw-epg")) : document.querySelector("#playlist .timeline").innerHTML = t;
            var s = document.querySelectorAll("#playlist > .channel");
            for (const m of s) {
                const f = parseInt(m.dataset.id);
                if (void 0 !== f) {
                    var i = Kn.find(e=>e.channel_id === f);
                    if (void 0 !== i) {
                        const p = _.now().set({
                            minute: Qn,
                            second: 0
                        }).toJSDate();
                        i = i.programmes.filter(e=>p < e.stop);
                        let a = document.createElement("div");
                        if (a.classList.add("epg-channel"),
                        m.querySelector(".epg-channel") && ((a = m.querySelector(".epg-channel")).innerHTML = ""),
                        void 0 === i || 0 === i.length) {
                            var o = document.createElement("div");
                            o.classList.add("epg-program"),
                            o.innerHTML = '<div class="epg-title no-information">' + D("iptv_epg_no_data") + "</div>",
                            o.style.width = Math.round(576) + "px";
                            for (let e = 0; e < 25; e++)
                                a.appendChild(o.cloneNode(!0))
                        } else {
                            let r = !0
                              , n = _.now().set({
                                minute: Qn,
                                second: 0
                            });
                            for (const y of i) {
                                var l, u = _.fromJSDate(y.start), c = _.fromJSDate(y.stop), d = document.createElement("div"), h = (d.classList.add("epg-program"),
                                k.fromDateTimes(n, u).length("minutes"));
                                1 < h && ((l = d.cloneNode()).style.width = Math.round(10 * h - 22 - 2) + "px",
                                l.innerHTML = '<div class="epg-title no-information">' + D("iptv_epg_no_data") + "</div>",
                                a.appendChild(l)),
                                n = c;
                                let e = y.title.at(0)._value
                                  , t = (Array.isArray(y.subTitle) && y.subTitle[0]?._value && (e += ": " + y.subTitle[0]._value),
                                y.episodeNum?.find(e=>["common", "onscreen"].includes(e.system)) && (e += " " + y.episodeNum.find(e=>["common", "onscreen"].includes(e.system))._value),
                                d.innerHTML = `<div class="epg-title">${e}</div>`,
                                k.fromDateTimes(u, c).length("minutes"));
                                r && (h = _.now().set({
                                    minute: Qn,
                                    second: 0
                                }),
                                0 < (l = k.fromDateTimes(u, h).length("minutes")) && l < t && (t -= l),
                                r = !1),
                                d.style.width = Math.round(10 * t - 22 - 2) + "px",
                                d.title = e + "\n" + D("iptv_epg_schedule") + ":\t" + u.toLocaleString(_.TIME_24_SIMPLE) + " - " + c.toLocaleString(_.TIME_24_SIMPLE) + "\n" + D("iptv_epg_duration") + ":\t" + c.diff(u, ["hours", "minutes"]).toFormat("hh:mm"),
                                a.appendChild(d)
                            }
                        }
                        m.appendChild(a)
                    }
                }
            }
        }(!0),
        ha(!(Xn = void 0)),
        window.setInterval(ha, 1e4))
    }
    async function da(e) {
        if (!e)
            return I.epgEnabled = !1;
        var r = document.createElement("div");
        r.classList.add("epg_log"),
        r.innerHTML = '<div class="header">' + D("iptv_epg_loading_title") + "</div>",
        e = e.split(",");
        for (let t = 0; t < e.length; t++) {
            var n = e[t].trim();
            if (n.startsWith("http")) {
                let e;
                try {
                    e = new URL(n)
                } catch (e) {
                    continue
                }
                var n = e.pathname.split("/").pop()
                  , a = document.createElement("div");
                a.classList.add("epg_row"),
                a.dataset.id = t.toString(),
                a.innerHTML = '<i class="fas fa-spinner fa-spin-pulse"></i> <span>' + D("iptv_epg_loading") + ":</span> " + n,
                r.append(a)
            }
        }
        document.querySelector("body").prepend(r);
        for (let t = 0; t < e.length; t++) {
            var s = e[t].trim();
            if (s.startsWith("http")) {
                let e;
                try {
                    e = new URL(s)
                } catch (e) {
                    continue
                }
                var i = e.pathname.split("/").pop()
                  , s = await async function(e) {
                    e = await fetch(e.trim());
                    if (200 !== e.status)
                        return !1;
                    e = await e.blob();
                    if ("application/x-gzip" !== e.type && "application/octet-stream" !== e.type)
                        return e.text();
                    e = e.stream().pipeThrough(new window.DecompressionStream("gzip")),
                    e = await new Response(e).blob();
                    return e.text()
                }(s)
                  , o = document.querySelector('.epg_log .epg_row[data-id="' + t + '"]');
                if ("string" == typeof s) {
                    s = new $n(s);
                    if ("object" == typeof s && 0 < s.channels?.length && 0 < s.programmes?.length) {
                        Xn.push(s),
                        o.innerHTML = '<i class="fas success fa-file-check"></i> <span>' + D("iptv_epg_loaded") + ":</span> " + i + " <span>(" + D("iptv_epg_loaded_data").replace("_NUM_CHANNELS_", s.channels.length.toString()).replace("_NUM_PROGRAMS_", s.programmes.length.toString()) + ")</span>";
                        continue
                    }
                }
                o.innerHTML = '<i class="fas error fa-hexagon-exclamation"></i> <span>' + D("iptv_epg_error") + ":</span> " + i
            }
        }
        return document.querySelector(".epg_log").classList.add("hide"),
        setTimeout(()=>{
            document.querySelector(".epg_log").remove()
        }
        , 8e3),
        0 === Xn.length ? I.epgEnabled = !1 : (ca(),
        !0)
    }
    function ha(e=0) {
        if (!1 !== Yn) {
            let t = document.querySelector(".channel.active");
            t = parseInt(t.dataset.id);
            var r = Kn.find(e=>e.channel_id === t);
            if (void 0 === r)
                document.querySelector(".jw-title-program").innerText = D("iptv_epg_no_data"),
                document.querySelector(".jw-title-right").classList.add("no-program");
            else {
                var n = Yn.EXTINF["tvg-logo"] || r.channel_info.icon?.find(e=>e.src.startsWith("http")) || "tv-icon.png"
                  , n = (document.querySelector(".jw-title-logo img").setAttribute("src", n),
                r.programmes.find(e=>e.start < Date.now() && e.stop > Date.now()));
                if (void 0 === n)
                    document.querySelector(".jw-title-program").innerText = D("iptv_epg_no_data"),
                    document.querySelector(".jw-title-right").classList.add("no-program");
                else {
                    var r = k.fromDateTimes(n.start, n.stop).length("minutes").toFixed(2).toString()
                      , a = k.fromDateTimes(n.start, _.now()).length("minutes").toFixed(2).toString()
                      , s = S.fromObject({
                        hours: 0,
                        minutes: (n.stop.valueOf() - Date.now()) / 1e3 / 60
                    }).normalize()
                      , i = _.fromJSDate(n.start).toLocaleString(_.TIME_24_SIMPLE) + " - " + _.fromJSDate(n.stop).toLocaleString(_.TIME_24_SIMPLE);
                    let e = n.title.at(0)._value
                      , t = (Array.isArray(n.subTitle) && n.subTitle[0]?._value && (e += ": " + n.subTitle[0]._value),
                    n.episodeNum?.find(e=>["common", "onscreen"].includes(e.system)) && (e += " " + n.episodeNum.find(e=>["common", "onscreen"].includes(e.system))._value),
                    document.querySelector(".jw-title-program").innerHTML = e,
                    "");
                    0 < n.desc?.length && "string" == typeof n.desc[0]._value && (t = n.desc[0]._value),
                    document.querySelector(".jw-title-description").innerText = t,
                    document.querySelector(".jw-title-time").innerHTML = '<i class="fas fa-clock"></i> ' + i,
                    document.querySelector(".jw-title-progress progress").setAttribute("value", a),
                    document.querySelector(".jw-title-progress progress").setAttribute("max", r),
                    document.querySelector(".jw-title-time-left").innerHTML = '<i class="fas fa-timer"></i> ' + s.toFormat("hh:mm"),
                    document.querySelector(".jw-title-right").classList.remove("no-program")
                }
            }
        }
    }
    function ma(s, i) {
        if (document.querySelector(".jw-title-quality")) {
            let e, t, r, n;
            if ("shaka" === A.getProvider()?.name && "object" == typeof shakadata)
                e = i.width + "x" + i.height,
                t = parseFloat(Number(i.frameRate).toFixed(2)) + " FPS",
                r = Math.floor(i.videoBandwidth / 1e3) + " KBPS",
                n = i.channelsCount;
            else {
                if ("hlsjs" !== A.getProvider()?.name || "object" != typeof hlsdata)
                    return;
                e = i.attrs.RESOLUTION || s.width + "x" + s.height,
                i.attrs["FRAME-RATE"] && (t = parseFloat(Number(i.attrs["FRAME-RATE"]).toFixed(2)) + " FPS"),
                r = (r = i.attrs["AVERAGE-BANDWIDTH"] || i.attrs.BANDWIDTH || !1) && Math.floor(r / 1e3) + " KBPS",
                n = 0
            }
            let a = "";
            "0x0" !== e && (a = `<div class="label label-resolution">${e}</div>`),
            t && (a += `<div class="label label-framerate">${t}</div>`),
            r && (a += `<div class="label label-bitrate">${r}</div>`),
            2 === n ? a += '<div class="label label-audio">STEREO</div>' : 1 === n ? a += '<div class="label label-audio">MONO</div>' : 2 < n && (a += '<div class="label label-audio">SURROUND</div>'),
            document.querySelector(".jw-title-quality").innerHTML = a
        }
    }
    function fa(e) {
        var a = document.querySelector("video");
        if (!0 === e) {
            let e, t, r, n;
            n = a._extension_source && a._extension_compressor && a._extension_gain ? (e = a._extension_source.context,
            t = a._extension_source,
            r = a._extension_compressor,
            a._extension_gain) : (e = new window.AudioContext,
            t = new window.MediaElementAudioSourceNode(e,{
                mediaElement: a
            }),
            r = new window.DynamicsCompressorNode(e),
            new window.GainNode(e,{
                gain: 2
            })),
            r.threshold.value = -50,
            r.knee.value = 40,
            r.ratio.value = 12,
            r.attack.value = 0,
            r.release.value = .25,
            t.connect(r),
            r.connect(n),
            n.connect(e.destination),
            a._extension_source = t,
            a._extension_compressor = r,
            a._extension_gain = n
        } else
            a._extension_source && (a._extension_compressor.disconnect(),
            a._extension_gain.disconnect(),
            (e = a._extension_source).disconnect(),
            e.connect(e.context.destination))
    }
    function pa(e) {
        var t = document.createElement("template")
          , r = (t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon btn-compressor-off" viewBox="0 0 640 512"><path d="M352 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM544 96c0-17.7-14.3-32-32-32s-32 14.3-32 32V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96zM256 128c0-17.7-14.3-32-32-32s-32 14.3-32 32V384c0 17.7 14.3 32 32 32s32-14.3 32-32V128zm192 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V352c0 17.7 14.3 32 32 32s32-14.3 32-32V160zM160 224c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32V224zM0 256a32 32 0 1 0 64 0A32 32 0 1 0 0 256zm576 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z"/></svg>',
        document.createElement("template"))
          , e = (r.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon btn-compressor-on" viewBox="0 0 640 512"><path d="M320 0c12 0 22.1 8.8 23.8 20.7l42 304.4L424.3 84.2c1.9-11.7 12-20.3 23.9-20.2s21.9 8.9 23.6 20.6l28.2 197.3 20.5-102.6c2.2-10.8 11.3-18.7 22.3-19.3s20.9 6.4 24.2 16.9L593.7 264H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H576c-10.5 0-19.8-6.9-22.9-16.9l-4.1-13.4-29.4 147c-2.3 11.5-12.5 19.6-24.2 19.3s-21.4-9-23.1-20.6L446.7 248.3l-39 243.5c-1.9 11.7-12.1 20.3-24 20.2s-21.9-8.9-23.5-20.7L320 199.6 279.8 491.3c-1.6 11.8-11.6 20.6-23.5 20.7s-22.1-8.5-24-20.2l-39-243.5L167.8 427.4c-1.7 11.6-11.4 20.3-23.1 20.6s-21.9-7.8-24.2-19.3l-29.4-147-4.1 13.4C83.8 305.1 74.5 312 64 312H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H46.3l26.8-87.1c3.2-10.5 13.2-17.5 24.2-16.9s20.2 8.5 22.3 19.3l20.5 102.6L168.2 84.6c1.7-11.7 11.7-20.5 23.6-20.6s22 8.5 23.9 20.2l38.5 240.9 42-304.4C297.9 8.8 308 0 320 0z"/></svg>',
        e.currentTarget);
        e.querySelector("svg").classList.contains("btn-compressor-off") ? (e.querySelector("svg").replaceWith(r.content.firstChild),
        e.querySelector(".jw-text").innerText = D("player_compressor_turn_off"),
        fa(!0)) : (e.querySelector("svg").replaceWith(t.content.firstChild),
        e.querySelector(".jw-text").innerText = D("player_compressor_turn_on"),
        fa(!1))
    }
    function ya(e, t) {
        let r = e.EXTINF["group-title"] || e.EXTINF["tvg-group"] || !1
          , n = t.EXTINF["group-title"] || t.EXTINF["tvg-group"] || !1;
        return !1 === r || !1 === n ? 0 : (r = r.toLowerCase().trim(),
        n = n.toLowerCase().trim(),
        /^\d/.test(r) && !/^\d/.test(n) || (/^\d/.test(r) || !/^\d/.test(n)) && (r > n || r === n && e.EXTINF["channel-name"] > t.EXTINF["channel-name"]) ? 1 : -1)
    }
    function ga() {
        let s = document.querySelector("#deep_search").checked;
        var t = document.querySelector("#search_channels").value.trim().normalize("NFD").replace(/\p{Diacritic}/gu, "");
        if (0 < t.length) {
            let r = t;
            try {
                r = new RegExp(t,"i")
            } catch (e) {
                r = t
            }
            document.querySelectorAll("#playlist > .group.filtered").forEach(e=>{
                e.classList.remove("filtered")
            }
            );
            let n = "";
            document.querySelectorAll("#playlist > .channel, #playlist > .group").forEach(t=>{
                if (t.classList.contains("group"))
                    n = t.innerText.trim().normalize("NFD").replace(/\p{Diacritic}/gu, "");
                else {
                    let e;
                    e = (s ? t : t.querySelector(".name")).innerText.trim().normalize("NFD").replace(/\p{Diacritic}/gu, ""),
                    e += n;
                    try {
                        -1 !== e.search(r) ? t.classList.remove("filtered") : t.classList.add("filtered")
                    } catch (e) {
                        t.classList.remove("filtered")
                    }
                }
            }
            );
            let a;
            document.querySelectorAll("#playlist > .group,#playlist > .channel:not(.filtered)").forEach((e,t,r)=>{
                e.classList.contains("group") ? (a && a.classList.contains("group") && a.classList.add("filtered"),
                t === r.length - 1 ? e.classList.add("filtered") : a = e) : a = null
            }
            )
        } else
            document.querySelectorAll("#playlist > .filtered").forEach(e=>{
                e.classList.remove("filtered")
            }
            )
    }
    function va(e=!0, t=!1) {
        return document.querySelector("#player").innerHTML = '<div class="m3u-error">' + (e ? '<div class="error"><i class="fas fa-triangle-exclamation"></i> ' + D("player_invalid_playlist") + "</div>" : "") + (t ? '<div class="error"><i class="fas fa-triangle-exclamation"></i> ' + D("player_error_no_file_access") + ' <a class="extension_setting" href="#"><i class="fas fa-arrow-up-right-from-square"></i> ' + D("chrome_extension_settings") + "</a></div>" : "") + '<div class="upload"><i class="fas fa-upload"></i></div><button id="open_playlist">' + D("player_open_local_playlists") + '</button><div class="drop">' + D("player_drop_local_playlists") + "</div></div>",
        document.querySelector("#open_playlist").addEventListener("click", async()=>{
            var e = await window.showOpenFilePicker({
                types: [{
                    description: "m3u Playlists",
                    accept: {
                        "Playlist/*": [".m3u", ".txt"]
                    }
                }],
                excludeAcceptAllOption: !1,
                multiple: !0
            });
            wa((await Promise.all(e.map(async e=>{
                return (await e.getFile()).text()
            }
            ))).join("\n"))
        }
        ),
        t && document.querySelector("a.extension_setting").addEventListener("click", e=>{
            e.preventDefault(),
            chrome.runtime.sendMessage({
                cmd: "openExtensionSetting"
            })
        }
        ),
        document.querySelector(".m3u-error").addEventListener("dragenter", e=>{
            e.currentTarget.classList.add("drag-active")
        }
        ),
        document.querySelector(".m3u-error").addEventListener("dragleave", e=>{
            null !== e.relatedTarget && null !== e.relatedTarget.closest(".m3u-error") || e.currentTarget.classList.remove("drag-active")
        }
        ),
        document.querySelector("body").addEventListener("dragover", e=>{
            e.preventDefault()
        }
        ),
        document.querySelector("body").addEventListener("drop", e=>{
            e.preventDefault()
        }
        ),
        document.querySelector(".m3u-error").addEventListener("dragover", e=>{
            e.preventDefault()
        }
        ),
        document.querySelector(".m3u-error").addEventListener("drop", async e=>{
            var t;
            e.preventDefault();
            let r = "";
            for await(const n of [...e.dataTransfer.items].filter(e=>"file" === e.kind).map(e=>e.getAsFileSystemHandle()))
                "file" === n.kind && (t = await (await n.getFile()).text(),
                r += "\n\n" + t);
            wa(r)
        }
        ),
        !1
    }
    async function wa(e=!1) {
        let t;
        if ("" !== V.hash) {
            var r = new XMLHttpRequest;
            try {
                if ((V = new URL(V.hash.slice(1))).href.startsWith("file://") && !1 === await chrome.extension.isAllowedFileSchemeAccess())
                    return va(!1, !0);
                r.open("GET", V.href, !1),
                r.setRequestHeader("Cache-Control", "no-cache"),
                r.send(null)
            } catch (e) {
                return va()
            }
            if (t = r.responseText.trim(),
            200 !== r.status || !t.startsWith("#EXTM3U"))
                return va()
        } else {
            if (!1 === e)
                return va(!1);
            t = e
        }
        let s = document.querySelector("#playlist");
        try {
            C = new Jn(t).parse()
        } catch (e) {
            return va()
        }
        if (!1 === C || !Array.isArray(C.channels) || 0 === C.channels.length)
            return va();
        (V.searchParams.has("ordenar") || V.searchParams.has("m3u-order")) && C.channels.sort(ya),
        V.searchParams.has("disable-epg") ? I.epgEnabled = !1 : V.searchParams.has("custom-epg") ? (I.epgEnabled = !0,
        r = V.searchParams.get("custom-epg").replace(" ", "+"),
        da(r = window.atob(r)).then(e=>{}
        )) : (I.epgEnabled || V.searchParams.has("enable-epg")) && (I.epgEnabled = !0,
        da(C.header["url-tvg"]).then(e=>{}
        )),
        C.header["player-buffer"] && (I.extra.playlist.buffer = C.header["player-buffer"]);
        e = document.createElement("div");
        e.classList.add("action-bar"),
        e.innerHTML = '<div class="search-title">' + D("iptv_channels") + '</div><div class="search-input"><input id="search_channels" type="text" placeholder="&#xf002; ' + D("iptv_search_channels") + '"><label title="' + D("iptv_deep_search_channels") + '"><i class="fas fa-magnifying-glass-plus"></i><input id="deep_search" type="checkbox"></label></div>',
        s.appendChild(e),
        document.querySelector("#search_channels").addEventListener("keyup", ga),
        document.querySelector("#deep_search").addEventListener("change", ga);
        let i = "";
        C.channels.forEach((t,e)=>{
            var r = t.EXTINF["group-title"] || t.EXTINF["tvg-group"] || !1
              , r = ("string" == typeof r && r.toLowerCase().trim() !== i.toLowerCase().trim() && (i = r,
            (n = document.createElement("div")).classList.add("group"),
            n.innerText = r,
            s.appendChild(n)),
            document.createElement("div"))
              , n = (r.classList.add("channel"),
            r.setAttribute("tabindex", "0"),
            r.dataset.id = e.toString(),
            r.onclick = e=>{
                oa(t, e)
            }
            ,
            r.onkeydown = e=>{
                oa(t, e)
            }
            ,
            document.createElement("div"));
            n.classList.add("logo");
            let a = t.EXTINF["tvg-logo"] || "";
            /^https?:/.test(a) || (a = "tv-icon.png");
            e = document.createElement("img"),
            e.src = a,
            e.alt = t.EXTINF["channel-name"],
            e.onerror = e=>{
                e.target.src = "tv-icon.png"
            }
            ,
            n.appendChild(e),
            r.appendChild(n),
            e = document.createElement("div");
            e.classList.add("name"),
            e.innerText = t.EXTINF["channel-name"],
            r.appendChild(e),
            s.appendChild(r)
        }
        ),
        document.querySelector(".channel").click()
    }
    document.addEventListener("hlsdataReady", ()=>{
        if ("object" != typeof hlsdata)
            return !1;
        0 < I.extra.buffer ? hlsdata.config.liveSyncDuration = I.extra.buffer : 0 < I.extra.playlist.buffer && (hlsdata.config.liveSyncDuration = I.extra.playlist.buffer),
        !1 !== I.extra.widevine && (hlsdata.config.drmSystems = {
            "com.widevine.alpha": {
                licenseUrl: I.extra.widevine.drm.servers["com.widevine.alpha"]
            }
        },
        hlsdata.config.drmSystemOptions = {
            audioRobustness: "SW_SECURE_CRYPTO",
            videoRobustness: "SW_SECURE_CRYPTO"
        },
        hlsdata.config.emeEnabled = !0)
    }
    ),
    document.addEventListener("shakadataReady", ()=>{
        if ("object" != typeof shakadata)
            return !1;
        if (shakadata.shakaPlayer.configure("drm.clearKeys", void 0),
        shakadata.shakaPlayer.configure({
            preferredAudioLanguage: I.audioLang,
            preferredTextLanguage: I.audioLang,
            streaming: {
                autoLowLatencyMode: I.autoLowLatency
            }
        }),
        0 < I.extra.buffer ? (shakadata.shakaPlayer.configure("manifest.dash.ignoreMinBufferTime", !0),
        shakadata.shakaPlayer.configure("manifest.defaultPresentationDelay", parseInt(I.extra.buffer))) : 0 < I.extra.playlist.buffer ? (shakadata.shakaPlayer.configure("manifest.dash.ignoreMinBufferTime", !0),
        shakadata.shakaPlayer.configure("manifest.defaultPresentationDelay", parseInt(I.extra.playlist.buffer))) : (shakadata.shakaPlayer.configure("manifest.dash.ignoreMinBufferTime", !1),
        shakadata.shakaPlayer.configure("manifest.defaultPresentationDelay", 0)),
        I.customWV) {
            let t = !1
              , r = !1;
            if (I.customWV_data.split(/\r?\n/).forEach(e=>{
                var e = e.trim();
                0 < e.length && (e = e.split(">"),
                RegExp(e[0], "i").test(ta)) && 3 === (t = e).length && "ck" === e[2] && (r = !0)
            }
            ),
            !1 !== t) {
                let e;
                e = r ? {
                    "org.w3.clearkey": t[1]
                } : {
                    "com.widevine.alpha": t[1]
                },
                shakadata.shakaPlayer.configure({
                    drm: {
                        servers: e
                    }
                })
            }
        }
        I.customCK && !1 === I.extra.widevine && 0 < Object.keys(I.customCK_data).length && shakadata.shakaPlayer.configure({
            drm: {
                clearKeys: I.customCK_data
            }
        }),
        !1 !== I.extra.widevine && shakadata.shakaPlayer.configure(I.extra.widevine),
        !1 !== I.extra.clearkeys && shakadata.shakaPlayer.configure(I.extra.clearkeys)
    }
    ),
    window.getLicense = e=>{
        var t = new XMLHttpRequest;
        t.open("POST", window.urlCk, !1);
        try {
            t.send(e)
        } catch (e) {
            return !1
        }
        return 200 === t.status && t.responseText
    }
    ,
    document.addEventListener("keydown", function(r) {
        var n = r.key;
        if (["ArrowUp", "ArrowDown", "S"].includes(n)) {
            r.preventDefault(),
            r.stopImmediatePropagation();
            let t = document.querySelector(".channel.active");
            if (null !== t) {
                t = parseInt(t.dataset.id, 10);
                let e = !1;
                switch (n) {
                case "ArrowUp":
                    (e = [...document.querySelectorAll(".channel:not(.filtered)")].findLast(e=>e.dataset.id < t)) && e.click();
                    break;
                case "ArrowDown":
                    (e = [...document.querySelectorAll(".channel:not(.filtered)")].find(e=>e.dataset.id > t)) && e.click();
                    break;
                case "S":
                    if (r.ctrlKey && r.shiftKey) {
                        let r = "";
                        C.channels.forEach(e=>{
                            var t = new URL(e.URL);
                            if (e.KODIPROP && e.KODIPROP["inputstream.adaptive.license_type"] && e.KODIPROP["inputstream.adaptive.license_key"] && (["clearkey", "org.w3.clearkey"].includes(e.KODIPROP["inputstream.adaptive.license_type"]) ? t.searchParams.set("ck", window.btoa(e.KODIPROP["inputstream.adaptive.license_key"])) : ["widevine", "com.widevine.alpha"].includes(e.KODIPROP["inputstream.adaptive.license_type"]) && (t.searchParams.set("wv", window.btoa(e.KODIPROP["inputstream.adaptive.license_key"])),
                            e.KODIPROP["inputstream.adaptive.server_certificate"]) && t.searchParams.set("wvc", window.btoa(e.KODIPROP["inputstream.adaptive.server_certificate"]))),
                            e.KODIPROP && e.KODIPROP["inputstream.adaptive.stream_headers"]) {
                                var n, a = e.KODIPROP["inputstream.adaptive.stream_headers"];
                                let r = {};
                                Array.isArray(a) ? a.forEach(e=>{
                                    var t = e.indexOf("=")
                                      , e = [e.slice(0, t), e.slice(t + 1)];
                                    r[e[0]] = e[1].replaceAll('"', "")
                                }
                                ) : (n = a.indexOf("="),
                                a = [a.slice(0, n), a.slice(n + 1)],
                                r[a[0]] = a[1].replaceAll('"', "")),
                                t.searchParams.set("headers", window.btoa(JSON.stringify(r)))
                            }
                            e.KODIPROP && e.KODIPROP["inputstream.adaptive.file_type"] && t.searchParams.set("manifest_type", e.KODIPROP["inputstream.adaptive.file_type"]),
                            e.KODIPROP && e.KODIPROP["inputstream.adaptive.manifest_type"] && t.searchParams.set("manifest_type", e.KODIPROP["inputstream.adaptive.manifest_type"]),
                            e.EXTINF && e.EXTINF["tvg-logo"] && t.searchParams.set("image", window.btoa(e.EXTINF["tvg-logo"])),
                            e.EXTINF && e.EXTINF["channel-name"] && (t.searchParams.set("title", e.EXTINF["channel-name"]),
                            r += e.EXTINF["channel-name"] + "\n"),
                            r += t.toString() + "\n"
                        }
                        ),
                        navigator.clipboard.writeText(r)
                    }
                }
            }
        }
    }, {
        capture: !0
    }),
    window.addEventListener("hashchange", ()=>{
        location.reload()
    }
    ),
    chrome.storage.local.get(null, e=>{
        "boolean" == typeof e.autoLowLatency && (I.autoLowLatency = e.autoLowLatency),
        "string" == typeof e.audioLang && (I.audioLang = e.audioLang),
        "boolean" == typeof e.epgEnabled && (I.epgEnabled = e.epgEnabled),
        "boolean" == typeof e.compressorEnabled && (I.compressorEnabled = e.compressorEnabled),
        "boolean" == typeof e.customWV && (I.customWV = e.customWV),
        "string" == typeof e.customWV_data && (I.customWV_data = e.customWV_data),
        "boolean" == typeof e.customCK && (I.customCK = e.customCK),
        "object" == typeof e.customCK_data && (I.customCK_data = e.customCK_data),
        wa()
    }
    )
}("undefined" == typeof m3u && (m3u = {}));
