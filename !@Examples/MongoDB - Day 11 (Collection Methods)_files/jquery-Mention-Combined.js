﻿//     Underscore.js 1.5.0
//     http://underscorejs.org
//     (c) 2009-2011 Jeremy Ashkenas, DocumentCloud Inc.
//     (c) 2011-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function() { var n = this, t = n._, r = {}, e = Array.prototype, u = Object.prototype, i = Function.prototype, a = e.push, o = e.slice, c = e.concat, l = u.toString, f = u.hasOwnProperty, s = e.forEach, p = e.map, v = e.reduce, h = e.reduceRight, d = e.filter, g = e.every, m = e.some, y = e.indexOf, b = e.lastIndexOf, x = Array.isArray, _ = Object.keys, w = i.bind, j = function(n) { return n instanceof j ? n : this instanceof j ? (this._wrapped = n, void 0) : new j(n) }; "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : n._ = j, j.VERSION = "1.5.0"; var A = j.each = j.forEach = function(n, t, e) { if (null != n) if (s && n.forEach === s) n.forEach(t, e); else if (n.length === +n.length) { for (var u = 0, i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return } else for (var a in n) if (j.has(n, a) && t.call(e, n[a], a, n) === r) return }; j.map = j.collect = function(n, t, r) { var e = []; return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) { e.push(t.call(r, n, u, i)) }), e) }; var E = "Reduce of empty array with no initial value"; j.reduce = j.foldl = j.inject = function(n, t, r, e) { var u = arguments.length > 2; if (null == n && (n = []), v && n.reduce === v) return e && (t = j.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t); if (A(n, function(n, i, a) { u ? r = t.call(e, r, n, i, a) : (r = n, u = !0) }), !u) throw new TypeError(E); return r }, j.reduceRight = j.foldr = function(n, t, r, e) { var u = arguments.length > 2; if (null == n && (n = []), h && n.reduceRight === h) return e && (t = j.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t); var i = n.length; if (i !== +i) { var a = j.keys(n); i = a.length } if (A(n, function(o, c, l) { c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0) }), !u) throw new TypeError(E); return r }, j.find = j.detect = function(n, t, r) { var e; return O(n, function(n, u, i) { return t.call(r, n, u, i) ? (e = n, !0) : void 0 }), e }, j.filter = j.select = function(n, t, r) { var e = []; return null == n ? e : d && n.filter === d ? n.filter(t, r) : (A(n, function(n, u, i) { t.call(r, n, u, i) && e.push(n) }), e) }, j.reject = function(n, t, r) { return j.filter(n, function(n, e, u) { return !t.call(r, n, e, u) }, r) }, j.every = j.all = function(n, t, e) { t || (t = j.identity); var u = !0; return null == n ? u : g && n.every === g ? n.every(t, e) : (A(n, function(n, i, a) { return (u = u && t.call(e, n, i, a)) ? void 0 : r }), !!u) }; var O = j.some = j.any = function(n, t, e) { t || (t = j.identity); var u = !1; return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) { return u || (u = t.call(e, n, i, a)) ? r : void 0 }), !!u) }; j.contains = j.include = function(n, t) { return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : O(n, function(n) { return n === t }) }, j.invoke = function(n, t) { var r = o.call(arguments, 2), e = j.isFunction(t); return j.map(n, function(n) { return (e ? t : n[t]).apply(n, r) }) }, j.pluck = function(n, t) { return j.map(n, function(n) { return n[t] }) }, j.where = function(n, t, r) { return j.isEmpty(t) ? r ? void 0 : [] : j[r ? "find" : "filter"](n, function(n) { for (var r in t) if (t[r] !== n[r]) return !1; return !0 }) }, j.findWhere = function(n, t) { return j.where(n, t, !0) }, j.max = function(n, t, r) { if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n); if (!t && j.isEmpty(n)) return -1 / 0; var e = { computed: -1 / 0, value: -1 / 0 }; return A(n, function(n, u, i) { var a = t ? t.call(r, n, u, i) : n; a > e.computed && (e = { value: n, computed: a }) }), e.value }, j.min = function(n, t, r) { if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n); if (!t && j.isEmpty(n)) return 1 / 0; var e = { computed: 1 / 0, value: 1 / 0 }; return A(n, function(n, u, i) { var a = t ? t.call(r, n, u, i) : n; a < e.computed && (e = { value: n, computed: a }) }), e.value }, j.shuffle = function(n) { var t, r = 0, e = []; return A(n, function(n) { t = j.random(r++), e[r - 1] = e[t], e[t] = n }), e }; var F = function(n) { return j.isFunction(n) ? n : function(t) { return t[n] } }; j.sortBy = function(n, t, r) { var e = F(t); return j.pluck(j.map(n, function(n, t, u) { return { value: n, index: t, criteria: e.call(r, n, t, u)} }).sort(function(n, t) { var r = n.criteria, e = t.criteria; if (r !== e) { if (r > e || r === void 0) return 1; if (e > r || e === void 0) return -1 } return n.index < t.index ? -1 : 1 }), "value") }; var k = function(n, t, r, e) { var u = {}, i = F(null == t ? j.identity : t); return A(n, function(t, a) { var o = i.call(r, t, a, n); e(u, o, t) }), u }; j.groupBy = function(n, t, r) { return k(n, t, r, function(n, t, r) { (j.has(n, t) ? n[t] : n[t] = []).push(r) }) }, j.countBy = function(n, t, r) { return k(n, t, r, function(n, t) { j.has(n, t) || (n[t] = 0), n[t]++ }) }, j.sortedIndex = function(n, t, r, e) { r = null == r ? j.identity : F(r); for (var u = r.call(e, t), i = 0, a = n.length; a > i; ) { var o = i + a >>> 1; r.call(e, n[o]) < u ? i = o + 1 : a = o } return i }, j.toArray = function(n) { return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : [] }, j.size = function(n) { return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length }, j.first = j.head = j.take = function(n, t, r) { return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t) }, j.initial = function(n, t, r) { return o.call(n, 0, n.length - (null == t || r ? 1 : t)) }, j.last = function(n, t, r) { return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0)) }, j.rest = j.tail = j.drop = function(n, t, r) { return o.call(n, null == t || r ? 1 : t) }, j.compact = function(n) { return j.filter(n, j.identity) }; var R = function(n, t, r) { return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function(n) { j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n) }), r) }; j.flatten = function(n, t) { return R(n, t, []) }, j.without = function(n) { return j.difference(n, o.call(arguments, 1)) }, j.uniq = j.unique = function(n, t, r, e) { j.isFunction(t) && (e = r, r = t, t = !1); var u = r ? j.map(n, r, e) : n, i = [], a = []; return A(u, function(r, e) { (t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e])) }), i }, j.union = function() { return j.uniq(j.flatten(arguments, !0)) }, j.intersection = function(n) { var t = o.call(arguments, 1); return j.filter(j.uniq(n), function(n) { return j.every(t, function(t) { return j.indexOf(t, n) >= 0 }) }) }, j.difference = function(n) { var t = c.apply(e, o.call(arguments, 1)); return j.filter(n, function(n) { return !j.contains(t, n) }) }, j.zip = function() { return j.unzip.apply(j, o.call(arguments)) }, j.unzip = function() { for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = j.pluck(arguments, "" + r); return t }, j.object = function(n, t) { if (null == n) return {}; for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1]; return r }, j.indexOf = function(n, t, r) { if (null == n) return -1; var e = 0, u = n.length; if (r) { if ("number" != typeof r) return e = j.sortedIndex(n, t), n[e] === t ? e : -1; e = 0 > r ? Math.max(0, u + r) : r } if (y && n.indexOf === y) return n.indexOf(t, r); for (; u > e; e++) if (n[e] === t) return e; return -1 }, j.lastIndexOf = function(n, t, r) { if (null == n) return -1; var e = null != r; if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t); for (var u = e ? r : n.length; u--; ) if (n[u] === t) return u; return -1 }, j.range = function(n, t, r) { arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1; for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u; ) i[u++] = n, n += r; return i }; var M = function() { }; j.bind = function(n, t) { var r, e; if (w && n.bind === w) return w.apply(n, o.call(arguments, 1)); if (!j.isFunction(n)) throw new TypeError; return r = o.call(arguments, 2), e = function() { if (!(this instanceof e)) return n.apply(t, r.concat(o.call(arguments))); M.prototype = n.prototype; var u = new M; M.prototype = null; var i = n.apply(u, r.concat(o.call(arguments))); return Object(i) === i ? i : u } }, j.partial = function(n) { var t = o.call(arguments, 1); return function() { return n.apply(this, t.concat(o.call(arguments))) } }, j.bindAll = function(n) { var t = o.call(arguments, 1); if (0 === t.length) throw new Error("bindAll must be passed function names"); return A(t, function(t) { n[t] = j.bind(n[t], n) }), n }, j.memoize = function(n, t) { var r = {}; return t || (t = j.identity), function() { var e = t.apply(this, arguments); return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments) } }, j.delay = function(n, t) { var r = o.call(arguments, 2); return setTimeout(function() { return n.apply(null, r) }, t) }, j.defer = function(n) { return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1))) }, j.throttle = function(n, t, r) { var e, u, i, a = null, o = 0; r || (r = {}); var c = function() { o = new Date, a = null, i = n.apply(e, u) }; return function() { var l = new Date; o || r.leading !== !1 || (o = l); var f = t - (l - o); return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) : a || r.trailing === !1 || (a = setTimeout(c, f)), i } }, j.debounce = function(n, t, r) { var e, u = null; return function() { var i = this, a = arguments, o = function() { u = null, r || (e = n.apply(i, a)) }, c = r && !u; return clearTimeout(u), u = setTimeout(o, t), c && (e = n.apply(i, a)), e } }, j.once = function(n) { var t, r = !1; return function() { return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t) } }, j.wrap = function(n, t) { return function() { var r = [n]; return a.apply(r, arguments), t.apply(this, r) } }, j.compose = function() { var n = arguments; return function() { for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)]; return t[0] } }, j.after = function(n, t) { return function() { return --n < 1 ? t.apply(this, arguments) : void 0 } }, j.keys = _ || function(n) { if (n !== Object(n)) throw new TypeError("Invalid object"); var t = []; for (var r in n) j.has(n, r) && t.push(r); return t }, j.values = function(n) { var t = []; for (var r in n) j.has(n, r) && t.push(n[r]); return t }, j.pairs = function(n) { var t = []; for (var r in n) j.has(n, r) && t.push([r, n[r]]); return t }, j.invert = function(n) { var t = {}; for (var r in n) j.has(n, r) && (t[n[r]] = r); return t }, j.functions = j.methods = function(n) { var t = []; for (var r in n) j.isFunction(n[r]) && t.push(r); return t.sort() }, j.extend = function(n) { return A(o.call(arguments, 1), function(t) { if (t) for (var r in t) n[r] = t[r] }), n }, j.pick = function(n) { var t = {}, r = c.apply(e, o.call(arguments, 1)); return A(r, function(r) { r in n && (t[r] = n[r]) }), t }, j.omit = function(n) { var t = {}, r = c.apply(e, o.call(arguments, 1)); for (var u in n) j.contains(r, u) || (t[u] = n[u]); return t }, j.defaults = function(n) { return A(o.call(arguments, 1), function(t) { if (t) for (var r in t) n[r] === void 0 && (n[r] = t[r]) }), n }, j.clone = function(n) { return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n }, j.tap = function(n, t) { return t(n), n }; var S = function(n, t, r, e) { if (n === t) return 0 !== n || 1 / n == 1 / t; if (null == n || null == t) return n === t; n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped); var u = l.call(n); if (u != l.call(t)) return !1; switch (u) { case "[object String]": return n == String(t); case "[object Number]": return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t; case "[object Date]": case "[object Boolean]": return +n == +t; case "[object RegExp]": return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase } if ("object" != typeof n || "object" != typeof t) return !1; for (var i = r.length; i--; ) if (r[i] == n) return e[i] == t; var a = n.constructor, o = t.constructor; if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o)) return !1; r.push(n), e.push(t); var c = 0, f = !0; if ("[object Array]" == u) { if (c = n.length, f = c == t.length) for (; c-- && (f = S(n[c], t[c], r, e)); ); } else { for (var s in n) if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e)))) break; if (f) { for (s in t) if (j.has(t, s) && !c--) break; f = !c } } return r.pop(), e.pop(), f }; j.isEqual = function(n, t) { return S(n, t, [], []) }, j.isEmpty = function(n) { if (null == n) return !0; if (j.isArray(n) || j.isString(n)) return 0 === n.length; for (var t in n) if (j.has(n, t)) return !1; return !0 }, j.isElement = function(n) { return !(!n || 1 !== n.nodeType) }, j.isArray = x || function(n) { return "[object Array]" == l.call(n) }, j.isObject = function(n) { return n === Object(n) }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) { j["is" + n] = function(t) { return l.call(t) == "[object " + n + "]" } }), j.isArguments(arguments) || (j.isArguments = function(n) { return !(!n || !j.has(n, "callee")) }), "function" != typeof /./ && (j.isFunction = function(n) { return "function" == typeof n }), j.isFinite = function(n) { return isFinite(n) && !isNaN(parseFloat(n)) }, j.isNaN = function(n) { return j.isNumber(n) && n != +n }, j.isBoolean = function(n) { return n === !0 || n === !1 || "[object Boolean]" == l.call(n) }, j.isNull = function(n) { return null === n }, j.isUndefined = function(n) { return n === void 0 }, j.has = function(n, t) { return f.call(n, t) }, j.noConflict = function() { return n._ = t, this }, j.identity = function(n) { return n }, j.times = function(n, t, r) { for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u); return e }, j.random = function(n, t) { return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1)) }; var I = { escape: { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;"} }; I.unescape = j.invert(I.escape); var T = { escape: new RegExp("[" + j.keys(I.escape).join("") + "]", "g"), unescape: new RegExp("(" + j.keys(I.unescape).join("|") + ")", "g") }; j.each(["escape", "unescape"], function(n) { j[n] = function(t) { return null == t ? "" : ("" + t).replace(T[n], function(t) { return I[n][t] }) } }), j.result = function(n, t) { if (null == n) return void 0; var r = n[t]; return j.isFunction(r) ? r.call(n) : r }, j.mixin = function(n) { A(j.functions(n), function(t) { var r = j[t] = n[t]; j.prototype[t] = function() { var n = [this._wrapped]; return a.apply(n, arguments), D.call(this, r.apply(j, n)) } }) }; var N = 0; j.uniqueId = function(n) { var t = ++N + ""; return n ? n + t : t }, j.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }; var q = /(.)^/, B = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "	": "t", "\u2028": "u2028", "\u2029": "u2029" }, z = /\\|'|\r|\n|\t|\u2028|\u2029/g; j.template = function(n, t, r) { var e; r = j.defaults({}, r, j.templateSettings); var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"), i = 0, a = "__p+='"; n.replace(u, function(t, r, e, u, o) { return a += n.slice(i, o).replace(z, function(n) { return "\\" + B[n] }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n"; try { e = new Function(r.variable || "obj", "_", a) } catch (o) { throw o.source = a, o } if (t) return e(t, j); var c = function(n) { return e.call(this, n, j) }; return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c }, j.chain = function(n) { return j(n).chain() }; var D = function(n) { return this._chain ? j(n).chain() : n }; j.mixin(j), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) { var t = e[n]; j.prototype[n] = function() { var r = this._wrapped; return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], D.call(this, r) } }), A(["concat", "join", "slice"], function(n) { var t = e[n]; j.prototype[n] = function() { return D.call(this, t.apply(this._wrapped, arguments)) } }), j.extend(j.prototype, { chain: function() { return this._chain = !0, this }, value: function() { return this._wrapped } }) } .call(this);

/**
*	@name							Elastic
*	@descripton						Elastic is jQuery plugin that grow and shrink your textareas automatically
*	@version						1.6.11
*	@requires						jQuery 1.2.6+
*
*	@author							Jan Jarfalk
*	@author-email					jan.jarfalk@unwrongest.com
*	@author-website					http://www.unwrongest.com
*
*	@licence						MIT License - http://www.opensource.org/licenses/mit-license.php
*/

(function($) {
    jQuery.fn.extend({
        elastic: function() {
            //	We will create a div clone of the textarea
            //	by copying these attributes from the textarea to the div.
            var mimics = [
				'paddingTop',
				'paddingRight',
				'paddingBottom',
				'paddingLeft',
				'fontSize',
				'lineHeight',
				'fontFamily',
				'width',
				'fontWeight',
				'border-top-width',
				'border-right-width',
				'border-bottom-width',
				'border-left-width',
				'borderTopStyle',
				'borderTopColor',
				'borderRightStyle',
				'borderRightColor',
				'borderBottomStyle',
				'borderBottomColor',
				'borderLeftStyle',
				'borderLeftColor'
				];

            return this.each(function() {
                // Elastic only works on textareas
                if (this.type !== 'textarea') {
                    return false;
                }
                var $textarea = jQuery(this),
				$twin = jQuery('<div />').css({
				    'position': 'absolute',
				    'display': 'none',
				    'word-wrap': 'break-word',
				    'white-space': 'pre-wrap'
				}),
				lineHeight = parseInt($textarea.css('line-height'), 10) || parseInt($textarea.css('font-size'), '10'),
				minheight = parseInt($textarea.css('height'), 10) || lineHeight * 3, // 
				maxheight = parseInt($textarea.css('max-height'), 10) || Number.MAX_VALUE,
				goalheight = 0;

                // Opera returns max-height of -1 if not set
                if (maxheight < 0) { maxheight = Number.MAX_VALUE; }

                // Append the twin to the DOM
                // We are going to meassure the height of this, not the textarea.
                $twin.appendTo($textarea.parent());

                // Copy the essential styles (mimics) from the textarea to the twin
                var i = mimics.length;
                while (i--) {
                    $twin.css(mimics[i].toString(), $textarea.css(mimics[i].toString()));
                }

                // Updates the width of the twin. (solution for textareas with widths in percent)
                function setTwinWidth() {
                    var curatedWidth = Math.floor(parseInt($textarea.width(), 10));
                    if ($twin.width() !== curatedWidth) {
                        $twin.css({ 'width': curatedWidth + 'px' });

                        // Update height of textarea
                        update(true);
                    }
                }

                // Sets a given height and overflow state on the textarea
                function setHeightAndOverflow(height, overflow) {
                    var curratedHeight = Math.floor(parseInt(height, 10));
                    if ($textarea.height() !== curratedHeight) {
                        $textarea.css({ 'height': curratedHeight + 'px', 'overflow': overflow });
                    }
                }

                // This function will update the height of the textarea if necessary
                function update(forced) {
                    // Get curated content from the textarea.
                    var textareaContent = $textarea.val().replace(/&/g, '&amp;').replace(/ {2}/g, '&nbsp;').replace(/<|>/g, '&gt;').replace(/\n/g, '<br />');

                    // Compare curated content with curated twin.
                    var twinContent = $twin.html().replace(/<br>/ig, '<br />');

                    if (forced || textareaContent + '&nbsp;' !== twinContent) {

                        // Add an extra white space so new rows are added when you are at the end of a row.
                        $twin.html(textareaContent + '&nbsp;');
                        // Change textarea height if twin plus the height of one line differs more than 3 pixel from textarea height
                        var goalheight = $twin.height() + lineHeight;
                        if (Math.abs($twin.height() + lineHeight - $textarea.height()) > 3) {
                            if (goalheight >= maxheight) {
                                setHeightAndOverflow(maxheight, 'auto');
                            } else if (goalheight <= minheight) {
                                setHeightAndOverflow(minheight, 'hidden');
                            }
                            else {
                                setHeightAndOverflow(goalheight, 'hidden');
                            }

                        }
                    }

                }

                // Hide scrollbars
                $textarea.css({ 'overflow': 'hidden' });

                // Update textarea size on keyup, change, cut and paste
                $textarea.bind('keyup change cut paste', function() {
                    update();
                });

                // Update width of twin if browser or textarea is resized (solution for textareas with widths in percent)
                $(window).bind('resize', setTwinWidth);
                $textarea.bind('resize', setTwinWidth);
                $textarea.bind('update', update);

                // Compact textarea on blur
                $textarea.bind('blur', function() {
                    //                    if ($twin.height() < maxheight) {
                    //                        if ($twin.height() > minheight) {
                    //                            $textarea.height($twin.height());
                    //                        } else {
                    //                            $textarea.height(minheight);
                    //                        }
                    //                    }
                    update(true);
                });

                // And this line is to catch the browser paste event
                $textarea.bind('input paste', function(e) { setTimeout(update, 250); });

                // Run update once when elastic is initialized
                update();

            });

        }
    });
})(jQuery);


/*
* Mentions Input
* Version 1.0.1
* Written by: Kenneth Auchenberg (Podio)
*
* Using underscore.js
*
* License: MIT License - http://www.opensource.org/licenses/mit-license.php
*/

(function($, _, undefined) {

    // Settings
    var KEY = { BACKSPACE: 8, TAB: 9, RETURN: 13, ESC: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, COMMA: 188, SPACE: 32, HOME: 36, END: 35 }; // Keys "enum"
    var defaultSettings = {
        triggerChar: '@',
        onDataRequest: $.noop,
        minChars: 2,
        showAvatars: true,
        classes: {
            autoCompleteItemActive: "active"
        },
        templates: {
            wrapper: _.template('<div class="mentions-input-box"></div>'),
            autocompleteList: _.template('<div class="mentions-autocomplete-list"></div>'),
            autocompleteListItem: _.template('<li data-ref-id="<%= id %>" data-ref-type="<%= type %>" data-display="<%= display %>"><%= content %></li>'),
            autocompleteListItemAvatar: _.template('<img  src="<%= avatar %>" />'),
            autocompleteListItemIcon: _.template('<div class="icon <%= icon %>"></div>'),
            mentionsOverlay: _.template('<div class="mentions"><div></div></div>'),
            mentionItemSyntax: _.template('@[<%= value %>](<%= type %>:<%= id %>)'),
            mentionItemHighlight: _.template('<strong><span><%= value %></span></strong>')
        }
    };

    var utils = {
        htmlEncode: function(str) {
            return _.escape(str);
        },
        highlightTerm: function(value, term) {
            if (!term && !term.length) {
                return value;
            }
            return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<b>$1</b>");
        },
        setCaratPosition: function(domNode, caretPos) {
            if (domNode.createTextRange) {
                var range = domNode.createTextRange();
                range.move('character', caretPos);
                range.select();
            } else {
                if (domNode.selectionStart) {
                    domNode.focus();
                    domNode.setSelectionRange(caretPos, caretPos);
                } else {
                    domNode.focus();
                }
            }
        },
        rtrim: function(string) {
            return string.replace(/\s+$/, "");
        }
    };

    var MentionsInput = function(input) {
        var settings;
        var elmInputBox, elmInputWrapper, elmAutocompleteList, elmWrapperBox, elmMentionsOverlay, elmActiveAutoCompleteItem;
        var mentionsCollection = [];
        var inputBuffer = [];
        var currentDataQuery;

        function initTextarea() {
            elmInputBox = $(input);

            if (elmInputBox.attr('data-mentions-input') == 'true') {
                return;
            }

            elmInputWrapper = elmInputBox.parent();
            elmWrapperBox = $(settings.templates.wrapper());
            elmInputBox.wrapAll(elmWrapperBox);
            elmWrapperBox = elmInputWrapper.find('> div');

            elmInputBox.attr('data-mentions-input', 'true');
            elmInputBox.bind('keydown', onInputBoxKeyDown);
            elmInputBox.bind('keypress', onInputBoxKeyPress);
            elmInputBox.bind('input', onInputBoxInput);
            elmInputBox.bind('click', onInputBoxClick);

            elmInputBox.elastic();
        }

        function initAutocomplete() {
            elmAutocompleteList = $(settings.templates.autocompleteList());
            elmAutocompleteList.appendTo(elmWrapperBox);
            elmAutocompleteList.delegate('li', 'click', onAutoCompleteItemClick);
        }

        function initMentionsOverlay() {
            elmMentionsOverlay = $(settings.templates.mentionsOverlay());
            elmMentionsOverlay.prependTo(elmWrapperBox);
        }

        function updateValues() {
            var syntaxMessage = getInputBoxValue();

            _.each(mentionsCollection, function(mention) {
                var textSyntax = settings.templates.mentionItemSyntax({ value: mention.value, type: mention.type, id: mention.id });
                syntaxMessage = syntaxMessage.replace(mention.value, textSyntax);
            });

            var mentionText = utils.htmlEncode(syntaxMessage);

            _.each(mentionsCollection, function(mention) {
                var textSyntax = settings.templates.mentionItemSyntax({ value: utils.htmlEncode(mention.value), type: mention.type, id: mention.id });
                var textHighlight = settings.templates.mentionItemHighlight({ value: utils.htmlEncode(mention.value) });

                mentionText = mentionText.replace(textSyntax, textHighlight);
            });

            mentionText = mentionText.replace(/\n/g, '<br />');
            mentionText = mentionText.replace(/ {2}/g, '&nbsp; ');

            elmInputBox.data('messageText', syntaxMessage);
            elmMentionsOverlay.find('div').html(mentionText);
        }

        function resetBuffer() {
            inputBuffer = [];
        }

        function updateMentionsCollection() {
            var inputText = getInputBoxValue();

            mentionsCollection = _.reject(mentionsCollection, function(mention, index) {
                return !mention.value || inputText.indexOf(mention.value) == -1;
            });
            mentionsCollection = _.compact(mentionsCollection);
        }

        function addMention(value, id, type) {
            var currentMessage = getInputBoxValue();

            // Using a regex to figure out positions
            var regex = new RegExp("\\" + settings.triggerChar + currentDataQuery, "gi");
            regex.exec(currentMessage);

            var startCaretPosition = regex.lastIndex - currentDataQuery.length - 1;
            var currentCaretPosition = regex.lastIndex;

            var start = currentMessage.substr(0, startCaretPosition);
            var end = currentMessage.substr(currentCaretPosition, currentMessage.length);
            var startEndIndex = (start + value).length;

            var updatedMessageText = start + value + end;

            mentionsCollection.push({
                id: id,
                type: type,
                value: value
            });

            // Cleaning before inserting the value, otherwise auto-complete would be triggered with "old" inputbuffer
            resetBuffer();
            currentDataQuery = '';
            hideAutoComplete();

            // Mentions & syntax message
            elmInputBox.val(updatedMessageText);
            updateValues();

            // Set correct focus and selection
            elmInputBox.focus();
            utils.setCaratPosition(elmInputBox[0], startEndIndex);
        }

        function getInputBoxValue() {
            return $.trim(elmInputBox.val());
        }

        function onAutoCompleteItemClick(e) {
            var elmTarget = $(this);

            addMention(elmTarget.attr('data-display'), elmTarget.attr('data-ref-id'), elmTarget.attr('data-ref-type'));

            return false;
        }

        function onInputBoxClick(e) {
            resetBuffer();
        }

        function onInputBoxInput(e) {
            updateValues();
            updateMentionsCollection();
            hideAutoComplete();

            var triggerCharIndex = _.lastIndexOf(inputBuffer, settings.triggerChar);
            if (triggerCharIndex > -1) {
                currentDataQuery = inputBuffer.slice(triggerCharIndex + 1).join('');
                currentDataQuery = utils.rtrim(currentDataQuery);

                _.defer(_.bind(doSearch, this, currentDataQuery));
            }
        }

        function onInputBoxKeyPress(e) {
            var typedValue = String.fromCharCode(e.which || e.keyCode);
            inputBuffer.push(typedValue);
        }

        function onInputBoxKeyDown(e) {

            // This also matches HOME/END on OSX which is CMD+LEFT, CMD+RIGHT
            if (e.keyCode == KEY.LEFT || e.keyCode == KEY.RIGHT || e.keyCode == KEY.HOME || e.keyCode == KEY.END) {
                // Defer execution to ensure carat pos has changed after HOME/END keys
                _.defer(resetBuffer);
                return;
            }

            if (e.keyCode == KEY.BACKSPACE) {
                inputBuffer = inputBuffer.slice(0, -1 + inputBuffer.length); // Can't use splice, not available in IE
                return;
            }

            if (!elmAutocompleteList.is(':visible')) {
                return true;
            }

            switch (e.keyCode) {
                case KEY.UP:
                case KEY.DOWN:
                    var elmCurrentAutoCompleteItem = null;
                    if (e.keyCode == KEY.DOWN) {
                        if (elmActiveAutoCompleteItem && elmActiveAutoCompleteItem.length) {
                            elmCurrentAutoCompleteItem = elmActiveAutoCompleteItem.next();
                        } else {
                            elmCurrentAutoCompleteItem = elmAutocompleteList.find('li').first();
                        }
                    } else {
                        elmCurrentAutoCompleteItem = $(elmActiveAutoCompleteItem).prev();
                    }

                    if (elmCurrentAutoCompleteItem.length) {
                        selectAutoCompleteItem(elmCurrentAutoCompleteItem);
                    }

                    return false;

                case KEY.RETURN:
                case KEY.TAB:
                    if (elmActiveAutoCompleteItem && elmActiveAutoCompleteItem.length) {
                        elmActiveAutoCompleteItem.click();
                        return false;
                    }

                    break;
            }

            return true;
        }

        function hideAutoComplete() {
            elmActiveAutoCompleteItem = null;
            elmAutocompleteList.empty().hide();
        }

        function selectAutoCompleteItem(elmItem) {
            elmItem.addClass(settings.classes.autoCompleteItemActive);
            elmItem.siblings().removeClass(settings.classes.autoCompleteItemActive);

            elmActiveAutoCompleteItem = elmItem;
        }

        function populateDropdown(query, results) {
            elmAutocompleteList.show();

            // Filter items that has already been mentioned
            var mentionValues = _.pluck(mentionsCollection, 'value');
            results = _.reject(results, function(item) {
                return _.include(mentionValues, item.name);
            });

            if (!results.length) {
                hideAutoComplete();
                return;
            }

            elmAutocompleteList.empty();
            var elmDropDownList = $("<ul>").appendTo(elmAutocompleteList).hide();

            _.each(results, function(item, index) {
                var elmListItem = $(settings.templates.autocompleteListItem({
                    'id': utils.htmlEncode(item.id),
                    'display': utils.htmlEncode(item.name),
                    'type': utils.htmlEncode(item.type),
                    'content': utils.highlightTerm(utils.htmlEncode((item.name)), query)
                }));

                if (index === 0) {
                    selectAutoCompleteItem(elmListItem);
                }

                if (settings.showAvatars) {
                    var elmIcon;

                    if (item.avatar) {
                        elmIcon = $(settings.templates.autocompleteListItemAvatar({ avatar: item.avatar }));
                    } else {
                        elmIcon = $(settings.templates.autocompleteListItemIcon({ icon: item.icon }));
                    }
                    elmIcon.prependTo(elmListItem);
                }
                elmListItem = elmListItem.appendTo(elmDropDownList);
            });

            elmAutocompleteList.show();
            elmDropDownList.show();
        }

        function doSearch(query) {
            if (query && query.length && query.length >= settings.minChars) {
                settings.onDataRequest.call(this, 'search', query, function(responseData) {
                    populateDropdown(query, responseData);
                });
            }
        }

        // Public methods
        return {
            init: function(options) {
                settings = options;

                initTextarea();
                initAutocomplete();
                initMentionsOverlay();
            },

            val: function(callback) {
                if (!_.isFunction(callback)) {
                    return;
                }

                var value = mentionsCollection.length ? elmInputBox.data('messageText') : getInputBoxValue();
                callback.call(this, value);
            },

            reset: function() {
                elmInputBox.val('');
                mentionsCollection = [];
                updateValues();
            },

            getMentions: function(callback) {
                if (!_.isFunction(callback)) {
                    return;
                }

                callback.call(this, mentionsCollection);
            }
        };
    };

    $.fn.mentionsInput = function(method, settings) {

        if (typeof method === 'object' || !method) {
            settings = $.extend(true, {}, defaultSettings, method);
        }

        var outerArguments = arguments;

        return this.each(function() {
            var instance = $.data(this, 'mentionsInput') || $.data(this, 'mentionsInput', new MentionsInput(this));

            if (_.isFunction(instance[method])) {
                return instance[method].apply(this, Array.prototype.slice.call(outerArguments, 1));

            } else if (typeof method === 'object' || !method) {
                return instance.init.call(this, settings);

            } else {
                $.error('Method ' + method + ' does not exist');
            }

        });
    };

})(jQuery, _);



