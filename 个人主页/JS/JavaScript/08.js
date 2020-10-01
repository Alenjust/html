! function(t) {
	function e(n) {
		if (i[n]) return i[n].exports;
		var r = i[n] = {
			"i": n,
			"l": !1,
			"exports": {}
		};
		return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
	}
	var n = window.webpackJsonp;
	window.webpackJsonp = function(i, s, o) {
		for (var a, u, c, l = 0, h = []; l < i.length; l++) u = i[l], r[u] && h.push(r[u][0]), r[u] = 0;
		for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]);
		for (n && n(i, s, o); h.length;) h.shift()();
		if (o)
			for (l = 0; l < o.length; l++) c = e(e.s = o[l]);
		return c
	};
	var i = {},
		r = {
			"1": 0
		};
	e.e = function(t) {
		function n() {
			a.onerror = a.onload = null, clearTimeout(u);
			var e = r[t];
			0 !== e && (e && e[1](new Error("Loading chunk " + t + " failed.")), r[t] = undefined)
		}
		var i = r[t];
		if (0 === i) return new Promise(function(t) {
			t()
		});
		if (i) return i[2];
		var s = new Promise(function(e, n) {
			i = r[t] = [e, n]
		});
		i[2] = s;
		var o = document.getElementsByTagName("head")[0],
			a = document.createElement("script");
		a.type = "text/javascript", a.charset = "utf-8", a.async = !0, a.timeout = 12e4, e.nc && a.setAttribute("nonce", e.nc),
			a.src = e.p + "" + t + ".built.js";
		var u = setTimeout(n, 12e4);
		return a.onerror = a.onload = n, o.appendChild(a), s
	}, e.m = t, e.c = i, e.d = function(t, n, i) {
		e.o(t, n) || Object.defineProperty(t, n, {
			"configurable": !1,
			"enumerable": !0,
			"get": i
		})
	}, e.n = function(t) {
		var n = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return e.d(n, "a", n), n
	}, e.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, e.p = "", e.oe = function(t) {
		throw t
	}, e(e.s = 14)
}([function(t, e) {
	t.exports = jQuery
}, , , function(t, e, n) {
	"use strict";
	(function(e) {
		t.exports = e._ = n(15)
	}).call(e, n(8))
}, function(t, e, n) {
	"use strict";
	(function(e) {
		t.exports = e.Backbone = n(16)
	}).call(e, n(8))
}, , function(t, e, n) {
	"use strict";
	var i, r, s, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
		return typeof t
	} : function(t) {
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	};
	! function(a, u) {
		function c(t, e) {
			t.event.bindDom = function(t, n, i) {
				e(t).on(n, function(t) {
					var e = t.originalEvent || t;
					e.pageX === u && (e.pageX = t.pageX, e.pageY = t.pageY), e.target || (e.target = t.target), e.which === u &&
						(e.which = e.button), e.preventDefault || (e.preventDefault = t.preventDefault), e.stopPropagation || (e.stopPropagation =
							t.stopPropagation), i.call(this, e)
				})
			}, t.Instance.prototype.on = function(t, n) {
				return e(this.element).on(t, n)
			}, t.Instance.prototype.off = function(t, n) {
				return e(this.element).off(t, n)
			}, t.Instance.prototype.trigger = function(t, n) {
				var i = e(this.element);
				return i.has(n.target).length && (i = e(n.target)), i.trigger({
					"type": t,
					"gesture": n
				})
			}, e.fn.hammer = function(n) {
				return this.each(function() {
					var i = e(this),
						r = i.data("hammer");
					r ? "reset" == n ? t.detection.current = null : r && n && t.utils.extend(r.options, n) : i.data("hammer", new t(
						this, n || {}))
				})
			}
		}
		"object" == o(n(9)) && n(9) ? (r = [n(17), n(0)], i = c, (s = "function" == typeof i ? i.apply(e, r) : i) !== u &&
			(t.exports = s)) : c(a.Hammer, a.jQuery || a.Zepto)
	}(undefined)
}, function(t, e, n) {
	"use strict";
	! function(t) {
		function e(t) {
			if (t in l.style) return t;
			var e = ["Moz", "Webkit", "O", "ms"],
				n = t.charAt(0).toUpperCase() + t.substr(1);
			if (t in l.style) return t;
			for (var i = 0; i < e.length; ++i) {
				var r = e[i] + n;
				if (r in l.style) return r
			}
		}

		function n(t) {
			return "string" == typeof t && this.parse(t), this
		}

		function i(t, e, n) {
			!0 === e ? t.queue(n) : e ? t.queue(e, n) : n()
		}

		function r(e) {
			var n = [];
			return t.each(e, function(e) {
				e = t.camelCase(e), e = t.transit.propertyMap[e] || t.cssProps[e] || e, e = a(e), -1 === t.inArray(e, n) && n.push(
					e)
			}), n
		}

		function s(e, n, i, s) {
			var o = r(e);
			t.cssEase[i] && (i = t.cssEase[i]);
			var a = c(n) + " " + i;
			parseInt(s, 10) > 0 && (a += " " + c(s));
			var u = [];
			return t.each(o, function(t, e) {
				u.push(e + " " + a)
			}), u.join(", ")
		}

		function o(e, n) {
			n || (t.cssNumber[e] = !0), t.transit.propertyMap[e] = h.transform, t.cssHooks[e] = {
				"get": function(n) {
					return t(n).css("transit:transform").get(e)
				},
				"set": function(n, i) {
					var r = t(n).css("transit:transform");
					r.setFromString(e, i), t(n).css({
						"transit:transform": r
					})
				}
			}
		}

		function a(t) {
			return t.replace(/([A-Z])/g, function(t) {
				return "-" + t.toLowerCase()
			})
		}

		function u(t, e) {
			return "string" != typeof t || t.match(/^[\-0-9\.]+$/) ? "" + t + e : t
		}

		function c(e) {
			var n = e;
			return t.fx.speeds[n] && (n = t.fx.speeds[n]), u(n, "ms")
		}
		t.transit = {
			"version": "0.9.9",
			"propertyMap": {
				"marginLeft": "margin",
				"marginRight": "margin",
				"marginBottom": "margin",
				"marginTop": "margin",
				"paddingLeft": "padding",
				"paddingRight": "padding",
				"paddingBottom": "padding",
				"paddingTop": "padding"
			},
			"enabled": !0,
			"useTransitionEnd": !1
		};
		var l = document.createElement("div"),
			h = {},
			f = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
		h.transition = e("transition"), h.transitionDelay = e("transitionDelay"), h.transform = e("transform"), h.transformOrigin =
			e("transformOrigin"), h.transform3d = function() {
				return l.style[h.transform] = "", l.style[h.transform] = "rotateY(90deg)", "" !== l.style[h.transform]
			}();
		var p = {
				"transition": "transitionEnd",
				"MozTransition": "transitionend",
				"OTransition": "oTransitionEnd",
				"WebkitTransition": "webkitTransitionEnd",
				"msTransition": "MSTransitionEnd"
			},
			d = h.transitionEnd = p[h.transition] || null;
		for (var g in h) h.hasOwnProperty(g) && "undefined" == typeof t.support[g] && (t.support[g] = h[g]);
		l = null, t.cssEase = {
			"_default": "ease",
			"in": "ease-in",
			"out": "ease-out",
			"in-out": "ease-in-out",
			"snap": "cubic-bezier(0,1,.5,1)",
			"easeOutCubic": "cubic-bezier(.215,.61,.355,1)",
			"easeInOutCubic": "cubic-bezier(.645,.045,.355,1)",
			"easeInCirc": "cubic-bezier(.6,.04,.98,.335)",
			"easeOutCirc": "cubic-bezier(.075,.82,.165,1)",
			"easeInOutCirc": "cubic-bezier(.785,.135,.15,.86)",
			"easeInExpo": "cubic-bezier(.95,.05,.795,.035)",
			"easeOutExpo": "cubic-bezier(.19,1,.22,1)",
			"easeInOutExpo": "cubic-bezier(1,0,0,1)",
			"easeInQuad": "cubic-bezier(.55,.085,.68,.53)",
			"easeOutQuad": "cubic-bezier(.25,.46,.45,.94)",
			"easeInOutQuad": "cubic-bezier(.455,.03,.515,.955)",
			"easeInQuart": "cubic-bezier(.895,.03,.685,.22)",
			"easeOutQuart": "cubic-bezier(.165,.84,.44,1)",
			"easeInOutQuart": "cubic-bezier(.77,0,.175,1)",
			"easeInQuint": "cubic-bezier(.755,.05,.855,.06)",
			"easeOutQuint": "cubic-bezier(.23,1,.32,1)",
			"easeInOutQuint": "cubic-bezier(.86,0,.07,1)",
			"easeInSine": "cubic-bezier(.47,0,.745,.715)",
			"easeOutSine": "cubic-bezier(.39,.575,.565,1)",
			"easeInOutSine": "cubic-bezier(.445,.05,.55,.95)",
			"easeInBack": "cubic-bezier(.6,-.28,.735,.045)",
			"easeOutBack": "cubic-bezier(.175, .885,.32,1.275)",
			"easeInOutBack": "cubic-bezier(.68,-.55,.265,1.55)",
			"epubOut": "cubic-bezier(.3,1,.0,1)"
		}, t.cssHooks["transit:transform"] = {
			"get": function(e) {
				return t(e).data("transform") || new n
			},
			"set": function(e, i) {
				var r = i;
				r instanceof n || (r = new n(r)), "WebkitTransform" !== h.transform || f ? e.style[h.transform] = r.toString() :
					e.style[h.transform] = r.toString(!0), t(e).data("transform", r)
			}
		}, t.cssHooks.transform = {
			"set": t.cssHooks["transit:transform"].set
		}, t.fn.jquery < "1.8" && (t.cssHooks.transformOrigin = {
			"get": function(t) {
				return t.style[h.transformOrigin]
			},
			"set": function(t, e) {
				t.style[h.transformOrigin] = e
			}
		}, t.cssHooks.transition = {
			"get": function(t) {
				return t.style[h.transition]
			},
			"set": function(t, e) {
				t.style[h.transition] = e
			}
		}), o("scale"), o("translate"), o("translateZ"), o("rotate"), o("rotateX"), o("rotateY"), o("rotate3d"), o(
			"perspective"), o("skewX"), o("skewY"), o("x", !0), o("y", !0), n.prototype = {
			"setFromString": function(t, e) {
				var i = "string" == typeof e ? e.split(",") : e.constructor === Array ? e : [e];
				i.unshift(t), n.prototype.set.apply(this, i)
			},
			"set": function(t) {
				var e = Array.prototype.slice.apply(arguments, [1]);
				this.setter[t] ? this.setter[t].apply(this, e) : this[t] = e.join(",")
			},
			"get": function(t) {
				return this.getter[t] ? this.getter[t].apply(this) : this[t] || 0
			},
			"setter": {
				"rotate": function(t) {
					this.rotate = u(t, "deg")
				},
				"rotateX": function(t) {
					this.rotateX = u(t, "deg")
				},
				"rotateY": function(t) {
					this.rotateY = u(t, "deg")
				},
				"scale": function(t, e) {
					e === undefined && (e = t), this.scale = t + "," + e
				},
				"skewX": function(t) {
					this.skewX = u(t, "deg")
				},
				"skewY": function(t) {
					this.skewY = u(t, "deg")
				},
				"perspective": function(t) {
					this.perspective = u(t, "px")
				},
				"x": function(t) {
					this.set("translate", t, null)
				},
				"y": function(t) {
					this.set("translate", null, t)
				},
				"translate": function(t, e) {
					this._translateX === undefined && (this._translateX = 0), this._translateY === undefined && (this._translateY =
						0), null !== t && t !== undefined && (this._translateX = u(t, "px")), null !== e && e !== undefined && (this
						._translateY = u(e, "px")), this.translate = this._translateX + "," + this._translateY
				},
				"translateZ": function(t) {
					this.translateZ = u(t, "px")
				}
			},
			"getter": {
				"x": function() {
					return this._translateX || 0
				},
				"y": function() {
					return this._translateY || 0
				},
				"translateZ": function() {
					return this.translateZ || 0
				},
				"scale": function() {
					var t = (this.scale || "1,1").split(",");
					return t[0] && (t[0] = parseFloat(t[0])), t[1] && (t[1] = parseFloat(t[1])), t[0] === t[1] ? t[0] : t
				},
				"rotate3d": function() {
					for (var t = (this.rotate3d || "0,0,0,0deg").split(","), e = 0; e <= 3; ++e) t[e] && (t[e] = parseFloat(t[e]));
					return t[3] && (t[3] = u(t[3], "deg")), t
				}
			},
			"parse": function(t) {
				var e = this;
				t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(t, n, i) {
					e.setFromString(n, i)
				})
			},
			"toString": function(t) {
				var e = [];
				for (var n in this)
					if (this.hasOwnProperty(n)) {
						if (!h.transform3d && ("rotateX" === n || "rotateY" === n || "translateZ" === n || "perspective" === n ||
								"transformOrigin" === n)) continue;
						"_" !== n[0] && (t && "scale" === n ? e.push(n + "3d(" + this[n] + ",1)") : t && "translate" === n ? e.push(n +
							"3d(" + this[n] + ",0)") : e.push(n + "(" + this[n] + ")"))
					} return e.join(" ")
			}
		}, t.fn.transition = t.fn.transit = function(e, n, r, o) {
			var a = this,
				u = 0,
				l = !0;
			"function" == typeof n && (o = n, n = undefined), "function" == typeof r && (o = r, r = undefined), "undefined" !=
				typeof e.easing && (r = e.easing, delete e.easing), "undefined" != typeof e.duration && (n = e.duration, delete e
					.duration), "undefined" != typeof e.complete && (o = e.complete, delete e.complete), "undefined" != typeof e.queue &&
				(l = e.queue, delete e.queue), "undefined" != typeof e.delay && (u = e.delay, delete e.delay), void 0 === n && (
					n = t.fx.speeds._default), void 0 === r && (r = t.cssEase._default), t.fx.off && (n = 0), n = c(n);
			var f = s(e, n, r, u),
				p = t.transit.enabled && h.transition,
				g = p ? parseInt(n, 10) + parseInt(u, 10) : 0;
			if (0 === g) {
				return i(a, l, function(t) {
					a.css(e), o && o.apply(a), t && t()
				}), a
			}
			var v = {},
				m = function(n) {
					var i = !1,
						r = function s() {
							i && a.unbind(d, s), g > 0 && a.each(function() {
								this.style[h.transition] = v[this] || null
							}), "function" == typeof o && o.apply(a), "function" == typeof n && n()
						};
					g > 0 && d && t.transit.useTransitionEnd ? (i = !0, a.bind(d, r)) : window.setTimeout(r, g), a.each(function() {
						g > 0 && (this.style[h.transition] = f), t(this).css(e)
					})
				};
			return i(a, l, function(t) {
				this.offsetWidth, m(t)
			}), this
		}, t.transit.getTransitionValue = s
	}(jQuery)
}, function(t, e) {
	var n;
	n = function() {
		return this
	}();
	try {
		n = n || Function("return this")() || (0, eval)("this")
	} catch (i) {
		"object" == typeof window && (n = window)
	}
	t.exports = n
}, function(t, e) {
	(function(e) {
		t.exports = e
	}).call(e, {})
}, function(t, e, n) {
	"use strict";
	var i, r, s;
	"function" == typeof Symbol && Symbol.iterator;
	! function(o) {
		r = [n(0)], i = o, (s = "function" == typeof i ? i.apply(e, r) : i) !== undefined && (t.exports = s)
	}(function(t) {
		function e(e) {
			var o = e || window.event,
				a = u.call(arguments, 1),
				c = 0,
				h = 0,
				f = 0,
				p = 0,
				d = 0,
				g = 0;
			if (e = t.event.fix(o), e.type = "mousewheel", "detail" in o && (f = -1 * o.detail), "wheelDelta" in o && (f = o.wheelDelta),
				"wheelDeltaY" in o && (f = o.wheelDeltaY), "wheelDeltaX" in o && (h = -1 * o.wheelDeltaX), "axis" in o && o.axis ===
				o.HORIZONTAL_AXIS && (h = -1 * f, f = 0), c = 0 === f ? h : f, "deltaY" in o && (f = -1 * o.deltaY, c = f),
				"deltaX" in o && (h = o.deltaX, 0 === f && (c = -1 * h)), 0 !== f || 0 !== h) {
				if (1 === o.deltaMode) {
					var v = t.data(this, "mousewheel-line-height");
					c *= v, f *= v, h *= v
				} else if (2 === o.deltaMode) {
					var m = t.data(this, "mousewheel-page-height");
					c *= m, f *= m, h *= m
				}
				if (p = Math.max(Math.abs(f), Math.abs(h)), (!s || p < s) && (s = p, i(o, p) && (s /= 40)), i(o, p) && (c /= 40,
						h /= 40, f /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / s), h = Math[h >= 1 ? "floor" : "ceil"](h / s), f =
					Math[f >= 1 ? "floor" : "ceil"](f / s), l.settings.normalizeOffset && this.getBoundingClientRect) {
					var y = this.getBoundingClientRect();
					d = e.clientX - y.left, g = e.clientY - y.top
				}
				return e.deltaX = h, e.deltaY = f, e.deltaFactor = s, e.offsetX = d, e.offsetY = g, e.deltaMode = 0, a.unshift(e,
					c, h, f), r && clearTimeout(r), r = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, a)
			}
		}

		function n() {
			s = null
		}

		function i(t, e) {
			return l.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
		}
		var r, s, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
			a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll",
				"MozMousePixelScroll"
			],
			u = Array.prototype.slice;
		if (t.event.fixHooks)
			for (var c = o.length; c;) t.event.fixHooks[o[--c]] = t.event.mouseHooks;
		var l = t.event.special.mousewheel = {
			"version": "3.1.12",
			"setup": function() {
				if (this.addEventListener)
					for (var n = a.length; n;) this.addEventListener(a[--n], e, !1);
				else this.onmousewheel = e;
				t.data(this, "mousewheel-line-height", l.getLineHeight(this)), t.data(this, "mousewheel-page-height", l.getPageHeight(
					this))
			},
			"teardown": function() {
				if (this.removeEventListener)
					for (var n = a.length; n;) this.removeEventListener(a[--n], e, !1);
				else this.onmousewheel = null;
				t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
			},
			"getLineHeight": function(e) {
				var n = t(e),
					i = n["offsetParent" in t.fn ? "offsetParent" : "parent"]();
				return i.length || (i = t("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
			},
			"getPageHeight": function(e) {
				return t(e).height()
			},
			"settings": {
				"adjustOldDeltas": !0,
				"normalizeOffset": !0
			}
		};
		t.fn.extend({
			"mousewheel": function(t) {
				return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
			},
			"unmousewheel": function(t) {
				return this.unbind("mousewheel", t)
			}
		})
	})
}, , , , function(t, e, n) {
	n(3), n(4), n(6), n(7), t.exports = n(10)
}, function(t, e, n) {
	(function() {
		var n = this,
			i = n._,
			r = {},
			s = Array.prototype,
			o = Object.prototype,
			a = Function.prototype,
			u = s.push,
			c = s.slice,
			l = s.concat,
			h = o.toString,
			f = o.hasOwnProperty,
			p = s.forEach,
			d = s.map,
			g = s.reduce,
			v = s.reduceRight,
			m = s.filter,
			y = s.every,
			_ = s.some,
			E = s.indexOf,
			b = s.lastIndexOf,
			T = Array.isArray,
			w = Object.keys,
			x = a.bind,
			O = function(t) {
				return t instanceof O ? t : this instanceof O ? void(this._wrapped = t) : new O(t)
			};
		void 0 !== t && t.exports && (e = t.exports = O), e._ = O, O.VERSION = "1.4.4";
		var N = O.each = O.forEach = function(t, e, n) {
			if (null != t)
				if (p && t.forEach === p) t.forEach(e, n);
				else if (t.length === +t.length) {
				for (var i = 0, s = t.length; i < s; i++)
					if (e.call(n, t[i], i, t) === r) return
			} else
				for (var o in t)
					if (O.has(t, o) && e.call(n, t[o], o, t) === r) return
		};
		O.map = O.collect = function(t, e, n) {
			var i = [];
			return null == t ? i : d && t.map === d ? t.map(e, n) : (N(t, function(t, r, s) {
				i[i.length] = e.call(n, t, r, s)
			}), i)
		};
		var S = "Reduce of empty array with no initial value";
		O.reduce = O.foldl = O.inject = function(t, e, n, i) {
			var r = arguments.length > 2;
			if (null == t && (t = []), g && t.reduce === g) return i && (e = O.bind(e, i)), r ? t.reduce(e, n) : t.reduce(e);
			if (N(t, function(t, s, o) {
					r ? n = e.call(i, n, t, s, o) : (n = t, r = !0)
				}), !r) throw new TypeError(S);
			return n
		}, O.reduceRight = O.foldr = function(t, e, n, i) {
			var r = arguments.length > 2;
			if (null == t && (t = []), v && t.reduceRight === v) return i && (e = O.bind(e, i)), r ? t.reduceRight(e, n) : t
				.reduceRight(e);
			var s = t.length;
			if (s !== +s) {
				var o = O.keys(t);
				s = o.length
			}
			if (N(t, function(a, u, c) {
					u = o ? o[--s] : --s, r ? n = e.call(i, n, t[u], u, c) : (n = t[u], r = !0)
				}), !r) throw new TypeError(S);
			return n
		}, O.find = O.detect = function(t, e, n) {
			var i;
			return I(t, function(t, r, s) {
				if (e.call(n, t, r, s)) return i = t, !0
			}), i
		}, O.filter = O.select = function(t, e, n) {
			var i = [];
			return null == t ? i : m && t.filter === m ? t.filter(e, n) : (N(t, function(t, r, s) {
				e.call(n, t, r, s) && (i[i.length] = t)
			}), i)
		}, O.reject = function(t, e, n) {
			return O.filter(t, function(t, i, r) {
				return !e.call(n, t, i, r)
			}, n)
		}, O.every = O.all = function(t, e, n) {
			e || (e = O.identity);
			var i = !0;
			return null == t ? i : y && t.every === y ? t.every(e, n) : (N(t, function(t, s, o) {
				if (!(i = i && e.call(n, t, s, o))) return r
			}), !!i)
		};
		var I = O.some = O.any = function(t, e, n) {
			e || (e = O.identity);
			var i = !1;
			return null == t ? i : _ && t.some === _ ? t.some(e, n) : (N(t, function(t, s, o) {
				if (i || (i = e.call(n, t, s, o))) return r
			}), !!i)
		};
		O.contains = O.include = function(t, e) {
			return null != t && (E && t.indexOf === E ? -1 != t.indexOf(e) : I(t, function(t) {
				return t === e
			}))
		}, O.invoke = function(t, e) {
			var n = c.call(arguments, 2),
				i = O.isFunction(e);
			return O.map(t, function(t) {
				return (i ? e : t[e]).apply(t, n)
			})
		}, O.pluck = function(t, e) {
			return O.map(t, function(t) {
				return t[e]
			})
		}, O.where = function(t, e, n) {
			return O.isEmpty(e) ? n ? null : [] : O[n ? "find" : "filter"](t, function(t) {
				for (var n in e)
					if (e[n] !== t[n]) return !1;
				return !0
			})
		}, O.findWhere = function(t, e) {
			return O.where(t, e, !0)
		}, O.max = function(t, e, n) {
			if (!e && O.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
			if (!e && O.isEmpty(t)) return -Infinity;
			var i = {
				"computed": -Infinity,
				"value": -Infinity
			};
			return N(t, function(t, r, s) {
				var o = e ? e.call(n, t, r, s) : t;
				o >= i.computed && (i = {
					"value": t,
					"computed": o
				})
			}), i.value
		}, O.min = function(t, e, n) {
			if (!e && O.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
			if (!e && O.isEmpty(t)) return Infinity;
			var i = {
				"computed": Infinity,
				"value": Infinity
			};
			return N(t, function(t, r, s) {
				var o = e ? e.call(n, t, r, s) : t;
				o < i.computed && (i = {
					"value": t,
					"computed": o
				})
			}), i.value
		}, O.shuffle = function(t) {
			var e, n = 0,
				i = [];
			return N(t, function(t) {
				e = O.random(n++), i[n - 1] = i[e], i[e] = t
			}), i
		};
		var D = function(t) {
			return O.isFunction(t) ? t : function(e) {
				return e[t]
			}
		};
		O.sortBy = function(t, e, n) {
			var i = D(e);
			return O.pluck(O.map(t, function(t, e, r) {
				return {
					"value": t,
					"index": e,
					"criteria": i.call(n, t, e, r)
				}
			}).sort(function(t, e) {
				var n = t.criteria,
					i = e.criteria;
				if (n !== i) {
					if (n > i || void 0 === n) return 1;
					if (n < i || void 0 === i) return -1
				}
				return t.index < e.index ? -1 : 1
			}), "value")
		};
		var M = function(t, e, n, i) {
			var r = {},
				s = D(e || O.identity);
			return N(t, function(e, o) {
				var a = s.call(n, e, o, t);
				i(r, a, e)
			}), r
		};
		O.groupBy = function(t, e, n) {
			return M(t, e, n, function(t, e, n) {
				(O.has(t, e) ? t[e] : t[e] = []).push(n)
			})
		}, O.countBy = function(t, e, n) {
			return M(t, e, n, function(t, e) {
				O.has(t, e) || (t[e] = 0), t[e]++
			})
		}, O.sortedIndex = function(t, e, n, i) {
			n = null == n ? O.identity : D(n);
			for (var r = n.call(i, e), s = 0, o = t.length; s < o;) {
				var a = s + o >>> 1;
				n.call(i, t[a]) < r ? s = a + 1 : o = a
			}
			return s
		}, O.toArray = function(t) {
			return t ? O.isArray(t) ? c.call(t) : t.length === +t.length ? O.map(t, O.identity) : O.values(t) : []
		}, O.size = function(t) {
			return null == t ? 0 : t.length === +t.length ? t.length : O.keys(t).length
		}, O.first = O.head = O.take = function(t, e, n) {
			if (null != t) return null == e || n ? t[0] : c.call(t, 0, e)
		}, O.initial = function(t, e, n) {
			return c.call(t, 0, t.length - (null == e || n ? 1 : e))
		}, O.last = function(t, e, n) {
			if (null != t) return null == e || n ? t[t.length - 1] : c.call(t, Math.max(t.length - e, 0))
		}, O.rest = O.tail = O.drop = function(t, e, n) {
			return c.call(t, null == e || n ? 1 : e)
		}, O.compact = function(t) {
			return O.filter(t, O.identity)
		};
		var P = function(t, e, n) {
			return N(t, function(t) {
				O.isArray(t) ? e ? u.apply(n, t) : P(t, e, n) : n.push(t)
			}), n
		};
		O.flatten = function(t, e) {
			return P(t, e, [])
		}, O.without = function(t) {
			return O.difference(t, c.call(arguments, 1))
		}, O.uniq = O.unique = function(t, e, n, i) {
			O.isFunction(e) && (i = n, n = e, e = !1);
			var r = n ? O.map(t, n, i) : t,
				s = [],
				o = [];
			return N(r, function(n, i) {
				(e ? i && o[o.length - 1] === n : O.contains(o, n)) || (o.push(n), s.push(t[i]))
			}), s
		}, O.union = function() {
			return O.uniq(l.apply(s, arguments))
		}, O.intersection = function(t) {
			var e = c.call(arguments, 1);
			return O.filter(O.uniq(t), function(t) {
				return O.every(e, function(e) {
					return O.indexOf(e, t) >= 0
				})
			})
		}, O.difference = function(t) {
			var e = l.apply(s, c.call(arguments, 1));
			return O.filter(t, function(t) {
				return !O.contains(e, t)
			})
		}, O.zip = function() {
			for (var t = c.call(arguments), e = O.max(O.pluck(t, "length")), n = new Array(e), i = 0; i < e; i++) n[i] = O.pluck(
				t, "" + i);
			return n
		}, O.object = function(t, e) {
			if (null == t) return {};
			for (var n = {}, i = 0, r = t.length; i < r; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
			return n
		}, O.indexOf = function(t, e, n) {
			if (null == t) return -1;
			var i = 0,
				r = t.length;
			if (n) {
				if ("number" != typeof n) return i = O.sortedIndex(t, e), t[i] === e ? i : -1;
				i = n < 0 ? Math.max(0, r + n) : n
			}
			if (E && t.indexOf === E) return t.indexOf(e, n);
			for (; i < r; i++)
				if (t[i] === e) return i;
			return -1
		}, O.lastIndexOf = function(t, e, n) {
			if (null == t) return -1;
			var i = null != n;
			if (b && t.lastIndexOf === b) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
			for (var r = i ? n : t.length; r--;)
				if (t[r] === e) return r;
			return -1
		}, O.range = function(t, e, n) {
			arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
			for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, s = new Array(i); r < i;) s[r++] = t, t += n;
			return s
		}, O.bind = function(t, e) {
			if (t.bind === x && x) return x.apply(t, c.call(arguments, 1));
			var n = c.call(arguments, 2);
			return function() {
				return t.apply(e, n.concat(c.call(arguments)))
			}
		}, O.partial = function(t) {
			var e = c.call(arguments, 1);
			return function() {
				return t.apply(this, e.concat(c.call(arguments)))
			}
		}, O.bindAll = function(t) {
			var e = c.call(arguments, 1);
			return 0 === e.length && (e = O.functions(t)), N(e, function(e) {
				t[e] = O.bind(t[e], t)
			}), t
		}, O.memoize = function(t, e) {
			var n = {};
			return e || (e = O.identity),
				function() {
					var i = e.apply(this, arguments);
					return O.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
				}
		}, O.delay = function(t, e) {
			var n = c.call(arguments, 2);
			return setTimeout(function() {
				return t.apply(null, n)
			}, e)
		}, O.defer = function(t) {
			return O.delay.apply(O, [t, 1].concat(c.call(arguments, 1)))
		}, O.throttle = function(t, e) {
			var n, i, r, s, o = 0,
				a = function() {
					o = new Date, r = null, s = t.apply(n, i)
				};
			return function() {
				var u = new Date,
					c = e - (u - o);
				return n = this, i = arguments, c <= 0 ? (clearTimeout(r), r = null, o = u, s = t.apply(n, i)) : r || (r =
					setTimeout(a, c)), s
			}
		}, O.debounce = function(t, e, n) {
			var i, r;
			return function() {
				var s = this,
					o = arguments,
					a = function() {
						i = null, n || (r = t.apply(s, o))
					},
					u = n && !i;
				return clearTimeout(i), i = setTimeout(a, e), u && (r = t.apply(s, o)), r
			}
		}, O.once = function(t) {
			var e, n = !1;
			return function() {
				return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
			}
		}, O.wrap = function(t, e) {
			return function() {
				var n = [t];
				return u.apply(n, arguments), e.apply(this, n)
			}
		}, O.compose = function() {
			var t = arguments;
			return function() {
				for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
				return e[0]
			}
		}, O.after = function(t, e) {
			return t <= 0 ? e() : function() {
				if (--t < 1) return e.apply(this, arguments)
			}
		}, O.keys = w || function(t) {
			if (t !== Object(t)) throw new TypeError("Invalid object");
			var e = [];
			for (var n in t) O.has(t, n) && (e[e.length] = n);
			return e
		}, O.values = function(t) {
			var e = [];
			for (var n in t) O.has(t, n) && e.push(t[n]);
			return e
		}, O.pairs = function(t) {
			var e = [];
			for (var n in t) O.has(t, n) && e.push([n, t[n]]);
			return e
		}, O.invert = function(t) {
			var e = {};
			for (var n in t) O.has(t, n) && (e[t[n]] = n);
			return e
		}, O.functions = O.methods = function(t) {
			var e = [];
			for (var n in t) O.isFunction(t[n]) && e.push(n);
			return e.sort()
		}, O.extend = function(t) {
			return N(c.call(arguments, 1), function(e) {
				if (e)
					for (var n in e) t[n] = e[n]
			}), t
		}, O.pick = function(t) {
			var e = {},
				n = l.apply(s, c.call(arguments, 1));
			return N(n, function(n) {
				n in t && (e[n] = t[n])
			}), e
		}, O.omit = function(t) {
			var e = {},
				n = l.apply(s, c.call(arguments, 1));
			for (var i in t) O.contains(n, i) || (e[i] = t[i]);
			return e
		}, O.defaults = function(t) {
			return N(c.call(arguments, 1), function(e) {
				if (e)
					for (var n in e) null == t[n] && (t[n] = e[n])
			}), t
		}, O.clone = function(t) {
			return O.isObject(t) ? O.isArray(t) ? t.slice() : O.extend({}, t) : t
		}, O.tap = function(t, e) {
			return e(t), t
		};
		var k = function(t, e, n, i) {
			if (t === e) return 0 !== t || 1 / t == 1 / e;
			if (null == t || null == e) return t === e;
			t instanceof O && (t = t._wrapped), e instanceof O && (e = e._wrapped);
			var r = h.call(t);
			if (r != h.call(e)) return !1;
			switch (r) {
				case "[object String]":
					return t == String(e);
				case "[object Number]":
					return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
				case "[object Date]":
				case "[object Boolean]":
					return +t == +e;
				case "[object RegExp]":
					return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
			}
			if ("object" != typeof t || "object" != typeof e) return !1;
			for (var s = n.length; s--;)
				if (n[s] == t) return i[s] == e;
			n.push(t), i.push(e);
			var o = 0,
				a = !0;
			if ("[object Array]" == r) {
				if (o = t.length, a = o == e.length)
					for (; o-- && (a = k(t[o], e[o], n, i)););
			} else {
				var u = t.constructor,
					c = e.constructor;
				if (u !== c && !(O.isFunction(u) && u instanceof u && O.isFunction(c) && c instanceof c)) return !1;
				for (var l in t)
					if (O.has(t, l) && (o++, !(a = O.has(e, l) && k(t[l], e[l], n, i)))) break;
				if (a) {
					for (l in e)
						if (O.has(e, l) && !o--) break;
					a = !o
				}
			}
			return n.pop(), i.pop(), a
		};
		O.isEqual = function(t, e) {
			return k(t, e, [], [])
		}, O.isEmpty = function(t) {
			if (null == t) return !0;
			if (O.isArray(t) || O.isString(t)) return 0 === t.length;
			for (var e in t)
				if (O.has(t, e)) return !1;
			return !0
		}, O.isElement = function(t) {
			return !(!t || 1 !== t.nodeType)
		}, O.isArray = T || function(t) {
			return "[object Array]" == h.call(t)
		}, O.isObject = function(t) {
			return t === Object(t)
		}, N(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
			O["is" + t] = function(e) {
				return h.call(e) == "[object " + t + "]"
			}
		}), O.isArguments(arguments) || (O.isArguments = function(t) {
			return !(!t || !O.has(t, "callee"))
		}), O.isFunction = function(t) {
			return "function" == typeof t
		}, O.isFinite = function(t) {
			return isFinite(t) && !isNaN(parseFloat(t))
		}, O.isNaN = function(t) {
			return O.isNumber(t) && t != +t
		}, O.isBoolean = function(t) {
			return !0 === t || !1 === t || "[object Boolean]" == h.call(t)
		}, O.isNull = function(t) {
			return null === t
		}, O.isUndefined = function(t) {
			return void 0 === t
		}, O.has = function(t, e) {
			return f.call(t, e)
		}, O.noConflict = function() {
			return n._ = i, this
		}, O.identity = function(t) {
			return t
		}, O.times = function(t, e, n) {
			for (var i = Array(t), r = 0; r < t; r++) i[r] = e.call(n, r);
			return i
		}, O.random = function(t, e) {
			return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
		};
		var A = {
			"escape": {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#x27;",
				"/": "&#x2F;"
			}
		};
		A.unescape = O.invert(A.escape);
		var R = {
			"escape": new RegExp("[" + O.keys(A.escape).join("") + "]", "g"),
			"unescape": new RegExp("(" + O.keys(A.unescape).join("|") + ")", "g")
		};
		O.each(["escape", "unescape"], function(t) {
			O[t] = function(e) {
				return null == e ? "" : ("" + e).replace(R[t], function(e) {
					return A[t][e]
				})
			}
		}), O.result = function(t, e) {
			if (null == t) return null;
			var n = t[e];
			return O.isFunction(n) ? n.call(t) : n
		}, O.mixin = function(t) {
			N(O.functions(t), function(e) {
				var n = O[e] = t[e];
				O.prototype[e] = function() {
					var t = [this._wrapped];
					return u.apply(t, arguments), Y.call(this, n.apply(O, t))
				}
			})
		};
		var j = 0;
		O.uniqueId = function(t) {
			var e = ++j + "";
			return t ? t + e : e
		}, O.templateSettings = {
			"evaluate": /<%([\s\S]+?)%>/g,
			"interpolate": /<%=([\s\S]+?)%>/g,
			"escape": /<%-([\s\S]+?)%>/g
		};
		var C = /(.)^/,
			V = {
				"'": "'",
				"\\": "\\",
				"\r": "r",
				"\n": "n",
				"\t": "t",
				"\u2028": "u2028",
				"\u2029": "u2029"
			},
			H = /\\|'|\r|\n|\t|\u2028|\u2029/g;
		O.template = function(t, e, n) {
			if (O.isFunction(t)) return e ? t(e) : t;
			var i;
			n = O.defaults({}, n, O.templateSettings);
			var r = new RegExp([(n.escape || C).source, (n.interpolate || C).source, (n.evaluate || C).source].join("|") +
					"|$", "g"),
				s = 0,
				o = "__p+='",
				a = t;
			t.replace(r, function(e, n, i, r, a) {
					return o += t.slice(s, a).replace(H, function(t) {
						return "\\" + V[t]
					}), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (o += "'+\n((__t=(" + i +
						"))==null?'':__t)+\n'"), r && (o += "';\n" + r + "\n__p+='"), s = a + e.length, e
				}), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o =
				"var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o +
				"return __p;\n";
			try {
				i = new Function(n.variable || "obj", "_", o)
			} catch (c) {
				throw c.source = o, c
			}
			if (e) return i(e, O);
			var u = function(t) {
				return i.call(this, t, O)
			};
			return u.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", u.textsource = a, u
		}, O.chain = function(t) {
			return O(t).chain()
		};
		var Y = function(t) {
			return this._chain ? O(t).chain() : t
		};
		O.mixin(O), N(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
			var e = s[t];
			O.prototype[t] = function() {
				var n = this._wrapped;
				return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], Y.call(this, n)
			}
		}), N(["concat", "join", "slice"], function(t) {
			var e = s[t];
			O.prototype[t] = function() {
				return Y.call(this, e.apply(this._wrapped, arguments))
			}
		}), O.extend(O.prototype, {
			"chain": function() {
				return this._chain = !0, this
			},
			"value": function() {
				return this._wrapped
			}
		})
	}).call(this)
}, function(t, e, n) {
	(function() {
		var t, i = window || this,
			r = i.Backbone,
			s = [],
			o = s.push,
			a = s.slice,
			u = s.splice;
		t = e, t.VERSION = "0.9.10";
		var c = i._;
		c || (c = n(3)), t.$ = i.jQuery || i.Zepto || i.ender, t.noConflict = function() {
			return i.Backbone = r, this
		}, t.emulateHTTP = !1, t.emulateJSON = !1;
		var l = /\s+/,
			h = function(t, e, n, i) {
				if (!n) return !0;
				if ("object" == typeof n)
					for (var r in n) t[e].apply(t, [r, n[r]].concat(i));
				else {
					if (!l.test(n)) return !0;
					for (var s = n.split(l), o = 0, a = s.length; o < a; o++) t[e].apply(t, [s[o]].concat(i))
				}
			},
			f = function(t, e) {
				var n, i = -1,
					r = t.length;
				switch (e.length) {
					case 0:
						for (; ++i < r;)(n = t[i]).callback.call(n.ctx);
						return;
					case 1:
						for (; ++i < r;)(n = t[i]).callback.call(n.ctx, e[0]);
						return;
					case 2:
						for (; ++i < r;)(n = t[i]).callback.call(n.ctx, e[0], e[1]);
						return;
					case 3:
						for (; ++i < r;)(n = t[i]).callback.call(n.ctx, e[0], e[1], e[2]);
						return;
					default:
						for (; ++i < r;)(n = t[i]).callback.apply(n.ctx, e)
				}
			},
			p = t.Events = {
				"on": function(t, e, n) {
					return h(this, "on", t, [e, n]) && e ? (this._events || (this._events = {}), (this._events[t] || (this._events[
						t] = [])).push({
						"callback": e,
						"context": n,
						"ctx": n || this
					}), this) : this
				},
				"once": function(t, e, n) {
					if (!h(this, "once", t, [e, n]) || !e) return this;
					var i = this,
						r = c.once(function() {
							i.off(t, r), e.apply(this, arguments)
						});
					return r._callback = e, this.on(t, r, n), this
				},
				"off": function(t, e, n) {
					var i, r, s, o, a, u, l, f;
					if (!this._events || !h(this, "off", t, [e, n])) return this;
					if (!t && !e && !n) return this._events = {}, this;
					for (o = t ? [t] : c.keys(this._events), a = 0, u = o.length; a < u; a++)
						if (t = o[a], i = this._events[t]) {
							if (s = [], e || n)
								for (l = 0, f = i.length; l < f; l++) r = i[l], (e && e !== r.callback && e !== r.callback._callback || n &&
									n !== r.context) && s.push(r);
							this._events[t] = s
						} return this
				},
				"trigger": function(t) {
					if (!this._events) return this;
					var e = a.call(arguments, 1);
					if (!h(this, "trigger", t, e)) return this;
					var n = this._events[t],
						i = this._events.all;
					return n && f(n, e), i && f(i, arguments), this
				},
				"listenTo": function(t, e, n) {
					return (this._listeners || (this._listeners = {}))[t._listenerId || (t._listenerId = c.uniqueId("l"))] = t, t.on(
						e, "object" == typeof e ? this : n, this), this
				},
				"stopListening": function(t, e, n) {
					var i = this._listeners;
					if (i) {
						if (t) t.off(e, "object" == typeof e ? this : n, this), e || n || delete i[t._listenerId];
						else {
							"object" == typeof e && (n = this);
							for (var r in i) i[r].off(e, n, this);
							this._listeners = {}
						}
						return this
					}
				}
			};
		p.bind = p.on, p.unbind = p.off, c.extend(t, p);
		var d = t.Model = function(t, e) {
			var n, i = t || {};
			this.cid = c.uniqueId("c"), this.attributes = {}, e && e.collection && (this.collection = e.collection), e && e.parse &&
				(i = this.parse(i, e) || {}), (n = c.result(this, "defaults")) && (i = c.defaults({}, i, n)), this.set(i, e),
				this.changed = {}, this.initialize.apply(this, arguments)
		};
		c.extend(d.prototype, p, {
			"changed": null,
			"idAttribute": "id",
			"initialize": function() {},
			"toJSON": function(t) {
				return c.clone(this.attributes)
			},
			"sync": function() {
				return t.sync.apply(this, arguments)
			},
			"get": function(t) {
				return this.attributes[t]
			},
			"escape": function(t) {
				return c.escape(this.get(t))
			},
			"has": function(t) {
				return null != this.get(t)
			},
			"set": function(t, e, n) {
				var i, r, s, o, a, u, l, h;
				if (null == t) return this;
				if ("object" == typeof t ? (r = t, n = e) : (r = {})[t] = e, n || (n = {}), !this._validate(r, n)) return !1;
				s = n.unset, a = n.silent, o = [], u = this._changing, this._changing = !0, u || (this._previousAttributes =
						c.clone(this.attributes), this.changed = {}), h = this.attributes, l = this._previousAttributes, this.idAttribute in
					r && (this.id = r[this.idAttribute]);
				for (i in r) e = r[i], c.isEqual(h[i], e) || o.push(i), c.isEqual(l[i], e) ? delete this.changed[i] : this.changed[
					i] = e, s ? delete h[i] : h[i] = e;
				if (!a) {
					o.length && (this._pending = !0);
					for (var f = 0, p = o.length; f < p; f++) this.trigger("change:" + o[f], this, h[o[f]], n)
				}
				if (u) return this;
				if (!a)
					for (; this._pending;) this._pending = !1, this.trigger("change", this, n);
				return this._pending = !1, this._changing = !1, this
			},
			"unset": function(t, e) {
				return this.set(t, void 0, c.extend({}, e, {
					"unset": !0
				}))
			},
			"clear": function(t) {
				var e = {};
				for (var n in this.attributes) e[n] = void 0;
				return this.set(e, c.extend({}, t, {
					"unset": !0
				}))
			},
			"hasChanged": function(t) {
				return null == t ? !c.isEmpty(this.changed) : c.has(this.changed, t)
			},
			"changedAttributes": function(t) {
				if (!t) return !!this.hasChanged() && c.clone(this.changed);
				var e, n = !1,
					i = this._changing ? this._previousAttributes : this.attributes;
				for (var r in t) c.isEqual(i[r], e = t[r]) || ((n || (n = {}))[r] = e);
				return n
			},
			"previous": function(t) {
				return null != t && this._previousAttributes ? this._previousAttributes[t] : null
			},
			"previousAttributes": function() {
				return c.clone(this._previousAttributes)
			},
			"fetch": function(t) {
				t = t ? c.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
				var e = t.success;
				return t.success = function(t, n, i) {
					if (!t.set(t.parse(n, i), i)) return !1;
					e && e(t, n, i)
				}, this.sync("read", this, t)
			},
			"save": function(t, e, n) {
				var i, r, s, o, a = this.attributes;
				return null == t || "object" == typeof t ? (i = t, n = e) : (i = {})[t] = e, !!(!i || n && n.wait || this.set(
					i, n)) && (n = c.extend({
					"validate": !0
				}, n), !!this._validate(i, n) && (i && n.wait && (this.attributes = c.extend({}, a, i)), void 0 === n.parse &&
					(n.parse = !0), r = n.success, n.success = function(t, e, n) {
						t.attributes = a;
						var s = t.parse(e, n);
						if (n.wait && (s = c.extend(i || {}, s)), c.isObject(s) && !t.set(s, n)) return !1;
						r && r(t, e, n)
					}, s = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === s && (n.attrs = i), o = this.sync(
						s, this, n), i && n.wait && (this.attributes = a), o))
			},
			"destroy": function(t) {
				t = t ? c.clone(t) : {};
				var e = this,
					n = t.success,
					i = function() {
						e.trigger("destroy", e, e.collection, t)
					};
				if (t.success = function(t, e, r) {
						(r.wait || t.isNew()) && i(), n && n(t, e, r)
					}, this.isNew()) return t.success(this, null, t), !1;
				var r = this.sync("delete", this, t);
				return t.wait || i(), r
			},
			"url": function() {
				var t = c.result(this, "urlRoot") || c.result(this.collection, "url") || A();
				return this.isNew() ? t : t + ("/" === t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id)
			},
			"parse": function(t, e) {
				return t
			},
			"clone": function() {
				return new this.constructor(this.attributes)
			},
			"isNew": function() {
				return null == this.id
			},
			"isValid": function(t) {
				return !this.validate || !this.validate(this.attributes, t)
			},
			"_validate": function(t, e) {
				if (!e.validate || !this.validate) return !0;
				t = c.extend({}, this.attributes, t);
				var n = this.validationError = this.validate(t, e) || null;
				return !n || (this.trigger("invalid", this, n, e || {}), !1)
			}
		});
		var g = t.Collection = function(t, e) {
			e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator),
				this.models = [], this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, c.extend({
					"silent": !0
				}, e))
		};
		c.extend(g.prototype, p, {
			"model": d,
			"initialize": function() {},
			"toJSON": function(t) {
				return this.map(function(e) {
					return e.toJSON(t)
				})
			},
			"sync": function() {
				return t.sync.apply(this, arguments)
			},
			"add": function(t, e) {
				t = c.isArray(t) ? t.slice() : [t], e || (e = {});
				var n, i, r, s, a, l, h, f, p, d;
				for (h = [], f = e.at, p = this.comparator && null == f && 0 != e.sort, d = c.isString(this.comparator) ?
					this.comparator : null, n = 0, i = t.length; n < i; n++)(r = this._prepareModel(s = t[n], e)) ? (a = this.get(
						r)) ? e.merge && (a.set(s === r ? r.attributes : s, e), p && !l && a.hasChanged(d) && (l = !0)) : (h.push(r),
						r.on("all", this._onModelEvent, this), this._byId[r.cid] = r, null != r.id && (this._byId[r.id] = r)) :
					this.trigger("invalid", this, s, e);
				if (h.length && (p && (l = !0), this.length += h.length, null != f ? u.apply(this.models, [f, 0].concat(h)) :
						o.apply(this.models, h)), l && this.sort({
						"silent": !0
					}), e.silent) return this;
				for (n = 0, i = h.length; n < i; n++)(r = h[n]).trigger("add", r, this, e);
				return l && this.trigger("sort", this, e), this
			},
			"remove": function(t, e) {
				t = c.isArray(t) ? t.slice() : [t], e || (e = {});
				var n, i, r, s;
				for (n = 0, i = t.length; n < i; n++)(s = this.get(t[n])) && (delete this._byId[s.id], delete this._byId[s.cid],
					r = this.indexOf(s), this.models.splice(r, 1), this.length--, e.silent || (e.index = r, s.trigger("remove",
						s, this, e)), this._removeReference(s));
				return this
			},
			"push": function(t, e) {
				return t = this._prepareModel(t, e), this.add(t, c.extend({
					"at": this.length
				}, e)), t
			},
			"pop": function(t) {
				var e = this.at(this.length - 1);
				return this.remove(e, t), e
			},
			"unshift": function(t, e) {
				return t = this._prepareModel(t, e), this.add(t, c.extend({
					"at": 0
				}, e)), t
			},
			"shift": function(t) {
				var e = this.at(0);
				return this.remove(e, t), e
			},
			"slice": function(t, e) {
				return this.models.slice(t, e)
			},
			"get": function(t) {
				if (null != t) return this._idAttr || (this._idAttr = this.model.prototype.idAttribute), this._byId[t.id || t
					.cid || t[this._idAttr] || t]
			},
			"at": function(t) {
				return this.models[t]
			},
			"where": function(t) {
				return c.isEmpty(t) ? [] : this.filter(function(e) {
					for (var n in t)
						if (t[n] !== e.get(n)) return !1;
					return !0
				})
			},
			"sort": function(t) {
				if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
				return t || (t = {}), c.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(
					this.comparator, this) : this.models.sort(c.bind(this.comparator, this)), t.silent || this.trigger("sort",
					this, t), this
			},
			"pluck": function(t) {
				return c.invoke(this.models, "get", t)
			},
			"update": function(t, e) {
				e = c.extend({
					"add": !0,
					"merge": !0,
					"remove": !0
				}, e), e.parse && (t = this.parse(t, e));
				var n, i, r, s, o = [],
					a = [],
					u = {};
				if (c.isArray(t) || (t = t ? [t] : []), e.add && !e.remove) return this.add(t, e);
				for (i = 0, r = t.length; i < r; i++) n = t[i], s = this.get(n), e.remove && s && (u[s.cid] = !0), (e.add &&
					!s || e.merge && s) && o.push(n);
				if (e.remove)
					for (i = 0, r = this.models.length; i < r; i++) n = this.models[i], u[n.cid] || a.push(n);
				return a.length && this.remove(a, e), o.length && this.add(o, e), this
			},
			"reset": function(t, e) {
				e || (e = {}), e.parse && (t = this.parse(t, e));
				for (var n = 0, i = this.models.length; n < i; n++) this._removeReference(this.models[n]);
				return e.previousModels = this.models.slice(), this._reset(), t && this.add(t, c.extend({
					"silent": !0
				}, e)), e.silent || this.trigger("reset", this, e), this
			},
			"fetch": function(t) {
				t = t ? c.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
				var e = t.success;
				return t.success = function(t, n, i) {
					t[i.update ? "update" : "reset"](n, i), e && e(t, n, i)
				}, this.sync("read", this, t)
			},
			"create": function(t, e) {
				if (e = e ? c.clone(e) : {}, !(t = this._prepareModel(t, e))) return !1;
				e.wait || this.add(t, e);
				var n = this,
					i = e.success;
				return e.success = function(t, e, r) {
					r.wait && n.add(t, r), i && i(t, e, r)
				}, t.save(null, e), t
			},
			"parse": function(t, e) {
				return t
			},
			"clone": function() {
				return new this.constructor(this.models)
			},
			"_reset": function() {
				this.length = 0, this.models.length = 0, this._byId = {}
			},
			"_prepareModel": function(t, e) {
				if (t instanceof d) return t.collection || (t.collection = this), t;
				e || (e = {}), e.collection = this;
				var n = new this.model(t, e);
				return !!n._validate(t, e) && n
			},
			"_removeReference": function(t) {
				this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
			},
			"_onModelEvent": function(t, e, n, i) {
				("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, i), e && t === "change:" +
					e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)),
					this.trigger.apply(this, arguments))
			},
			"sortedIndex": function(t, e, n) {
				e || (e = this.comparator);
				var i = c.isFunction(e) ? e : function(t) {
					return t.get(e)
				};
				return c.sortedIndex(this.models, t, i, n)
			}
		});
		var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find",
			"detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max",
			"min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without",
			"indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"
		];
		c.each(v, function(t) {
			g.prototype[t] = function() {
				var e = a.call(arguments);
				return e.unshift(this.models), c[t].apply(c, e)
			}
		});
		var m = ["groupBy", "countBy", "sortBy"];
		c.each(m, function(t) {
			g.prototype[t] = function(e, n) {
				var i = c.isFunction(e) ? e : function(t) {
					return t.get(e)
				};
				return c[t](this.models, i, n)
			}
		});
		var y = t.Router = function(t) {
				t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
			},
			_ = /\((.*?)\)/g,
			E = /(\(\?)?:\w+/g,
			b = /\*\w+/g,
			T = /[\-{}\[\]+?.,\\\^$|#\s]/g;
		c.extend(y.prototype, p, {
			"initialize": function() {},
			"route": function(e, n, i) {
				return c.isRegExp(e) || (e = this._routeToRegExp(e)), i || (i = this[n]), t.history.route(e, c.bind(function(
					r) {
					var s = this._extractParameters(e, r);
					i && i.apply(this, s), this.trigger.apply(this, ["route:" + n].concat(s)), this.trigger("route", n, s), t
						.history.trigger("route", this, n, s)
				}, this)), this
			},
			"navigate": function(e, n) {
				return t.history.navigate(e, n), this
			},
			"_bindRoutes": function() {
				if (this.routes)
					for (var t, e = c.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
			},
			"_routeToRegExp": function(t) {
				return t = t.replace(T, "\\$&").replace(_, "(?:$1)?").replace(E, function(t, e) {
					return e ? t : "([^/]+)"
				}).replace(b, "(.*?)"), new RegExp("^" + t + "$")
			},
			"_extractParameters": function(t, e) {
				return t.exec(e).slice(1)
			}
		});
		var w = t.History = function() {
				this.handlers = [], c.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location,
					this.history = window.history)
			},
			x = /^[#\/]|\s+$/g,
			O = /^\/+|\/+$/g,
			N = /msie [\w.]+/,
			S = /\/$/;
		w.started = !1, c.extend(w.prototype, p, {
			"interval": 50,
			"getHash": function(t) {
				var e = (t || this).location.href.match(/#(.*)$/);
				return e ? e[1] : ""
			},
			"getFragment": function(t, e) {
				if (null == t)
					if (this._hasPushState || !this._wantsHashChange || e) {
						t = this.location.pathname;
						var n = this.root.replace(S, "");
						t.indexOf(n) || (t = t.substr(n.length))
					} else t = this.getHash();
				return t.replace(x, "")
			},
			"start": function(e) {
				if (w.started) throw new Error("Backbone.history has already been started");
				w.started = !0, this.options = c.extend({}, {
						"root": "/"
					}, this.options, e), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange,
					this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history &&
						this.history.pushState);
				var n = this.getFragment(),
					i = document.documentMode,
					r = N.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
				this.root = ("/" + this.root + "/").replace(O, "/"), r && this._wantsHashChange && (this.iframe = t.$(
						'<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(n)),
					this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in
					window && !r ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval =
						setInterval(this.checkUrl, this.interval)), this.fragment = n;
				var s = this.location,
					o = s.pathname.replace(/[^\/]$/, "$&/") === this.root;
				return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !o ? (this.fragment = this.getFragment(
					null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState &&
					this._hasPushState && o && s.hash && (this.fragment = this.getHash().replace(x, ""), this.history.replaceState({},
						document.title, this.root + this.fragment + s.search)), this.options.silent ? void 0 : this.loadUrl())
			},
			"stop": function() {
				t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval),
					w.started = !1
			},
			"route": function(t, e) {
				this.handlers.unshift({
					"route": t,
					"callback": e
				})
			},
			"checkUrl": function(t) {
				var e = this.getFragment();
				if (e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment)
					return !1;
				this.iframe && this.navigate(e), this.loadUrl() || this.loadUrl(this.getHash())
			},
			"loadUrl": function(t) {
				var e = this.fragment = this.getFragment(t);
				return c.any(this.handlers, function(t) {
					if (t.route.test(e)) return t.callback(e), !0
				})
			},
			"navigate": function(t, e) {
				if (!w.started) return !1;
				if (e && !0 !== e || (e = {
						"trigger": e
					}), t = this.getFragment(t || ""), this.fragment !== t) {
					this.fragment = t;
					var n = this.root + t;
					if (this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
					else {
						if (!this._wantsHashChange) return this.location.assign(n);
						this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) &&
							(e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
					}
					e.trigger && this.loadUrl(t)
				}
			},
			"_updateHash": function(t, e, n) {
				if (n) {
					var i = t.href.replace(/(javascript:|#).*$/, "");
					t.replace(i + "#" + e)
				} else t.hash = "#" + e
			}
		}), t.history = new w;
		var I = t.View = function(t) {
				this.cid = c.uniqueId("view"), this._configure(t || {}), this._ensureElement(), this.initialize.apply(this,
					arguments), this.delegateEvents()
			},
			D = /^(\S+)\s*(.*)$/,
			M = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
		c.extend(I.prototype, p, {
			"tagName": "div",
			"$": function(t) {
				return this.$el.find(t)
			},
			"initialize": function() {},
			"render": function() {
				return this
			},
			"remove": function() {
				return this.$el.remove(), this.stopListening(), this
			},
			"setElement": function(e, n) {
				return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0],
					!1 !== n && this.delegateEvents(), this
			},
			"delegateEvents": function(t) {
				if (t || (t = c.result(this, "events"))) {
					this.undelegateEvents();
					for (var e in t) {
						var n = t[e];
						if (c.isFunction(n) || (n = this[t[e]]), !n) throw new Error('Method "' + t[e] + '" does not exist');
						var i = e.match(D),
							r = i[1],
							s = i[2];
						n = c.bind(n, this), r += ".delegateEvents" + this.cid, "" === s ? this.$el.on(r, n) : this.$el.on(r, s, n)
					}
				}
			},
			"undelegateEvents": function() {
				this.$el.off(".delegateEvents" + this.cid)
			},
			"_configure": function(t) {
				this.options && (t = c.extend({}, c.result(this, "options"), t)), c.extend(this, c.pick(t, M)), this.options =
					t
			},
			"_ensureElement": function() {
				if (this.el) this.setElement(c.result(this, "el"), !1);
				else {
					var e = c.extend({}, c.result(this, "attributes"));
					this.id && (e.id = c.result(this, "id")), this.className && (e["class"] = c.result(this, "className"));
					var n = t.$("<" + c.result(this, "tagName") + ">").attr(e);
					this.setElement(n, !1)
				}
			}
		});
		var P = {
			"create": "POST",
			"update": "PUT",
			"patch": "PATCH",
			"delete": "DELETE",
			"read": "GET"
		};
		t.sync = function(e, n, i) {
			var r = P[e];
			c.defaults(i || (i = {}), {
				"emulateHTTP": t.emulateHTTP,
				"emulateJSON": t.emulateJSON
			});
			var s = {
				"type": r,
				"dataType": "json"
			};
			if (i.url || (s.url = c.result(n, "url") || A()), null != i.data || !n || "create" !== e && "update" !== e &&
				"patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(i.attrs || n.toJSON(i))), i.emulateJSON &&
				(s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
					"model": s.data
				} : {}), i.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
				s.type = "POST", i.emulateJSON && (s.data._method = r);
				var o = i.beforeSend;
				i.beforeSend = function(t) {
					if (t.setRequestHeader("X-HTTP-Method-Override", r), o) return o.apply(this, arguments)
				}
			}
			"GET" === s.type || i.emulateJSON || (s.processData = !1);
			var a = i.success;
			i.success = function(t) {
				a && a(n, t, i), n.trigger("sync", n, t, i)
			};
			var u = i.error;
			i.error = function(t) {
				u && u(n, t, i), n.trigger("error", n, t, i)
			};
			var l = i.xhr = t.ajax(c.extend(s, i));
			return n.trigger("request", n, l, i), l
		}, t.ajax = function() {
			return t.$.ajax.apply(t.$, arguments)
		};
		var k = function(t, e) {
			var n, i = this;
			n = t && c.has(t, "constructor") ? t.constructor : function() {
				return i.apply(this, arguments)
			}, c.extend(n, i, e);
			var r = function() {
				this.constructor = n
			};
			return r.prototype = i.prototype, n.prototype = new r, t && c.extend(n.prototype, t), n.__super__ = i.prototype,
				n
		};
		d.extend = g.extend = y.extend = I.extend = w.extend = k;
		var A = function() {
			throw new Error('A "url" property or function must be specified')
		}
	}).call(this)
}, function(t, e) {
	"use strict";
	var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
		return typeof t
	} : function(t) {
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	};
	! function(e, i) {
		function r() {
			s.READY || (s.event.determineEventTypes(), s.utils.each(s.gestures, function(t) {
				s.detection.register(t)
			}), s.event.onTouch(s.DOCUMENT, s.EVENT_MOVE, s.detection.detect), s.event.onTouch(s.DOCUMENT, s.EVENT_END, s.detection
				.detect), s.READY = !0)
		}
		var s = function c(t, e) {
			return new c.Instance(t, e || {})
		};
		s.defaults = {
				"stop_browser_behavior": {
					"userSelect": "none",
					"touchAction": "none",
					"touchCallout": "none",
					"contentZooming": "none",
					"userDrag": "none",
					"tapHighlightColor": "rgba(0,0,0,0)"
				}
			}, s.HAS_POINTEREVENTS = e.navigator.pointerEnabled || e.navigator.msPointerEnabled, s.HAS_TOUCHEVENTS =
			"ontouchstart" in e, s.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android|silk/i, s.NO_MOUSEEVENTS = s.HAS_TOUCHEVENTS &&
			e.navigator.userAgent.match(s.MOBILE_REGEX), s.EVENT_TYPES = {}, s.DIRECTION_DOWN = "down", s.DIRECTION_LEFT =
			"left", s.DIRECTION_UP = "up", s.DIRECTION_RIGHT = "right", s.POINTER_MOUSE = "mouse", s.POINTER_TOUCH = "touch",
			s.POINTER_PEN = "pen", s.EVENT_START = "start", s.EVENT_MOVE = "move", s.EVENT_END = "end", s.DOCUMENT = e.document,
			s.plugins = s.plugins || {}, s.gestures = s.gestures || {}, s.READY = !1, s.utils = {
				"extend": function(t, e, n) {
					for (var r in e) t[r] !== i && n || (t[r] = e[r]);
					return t
				},
				"each": function(t, e, n) {
					var r, s;
					if ("forEach" in t) t.forEach(e, n);
					else if (t.length !== i) {
						for (r = 0, s = t.length; s > r; r++)
							if (!1 === e.call(n, t[r], r, t)) return
					} else
						for (r in t)
							if (t.hasOwnProperty(r) && !1 === e.call(n, t[r], r, t)) return
				},
				"hasParent": function(t, e) {
					for (; t;) {
						if (t == e) return !0;
						t = t.parentNode
					}
					return !1
				},
				"getCenter": function(t) {
					var e = [],
						n = [];
					return s.utils.each(t, function(t) {
						e.push("undefined" != typeof t.clientX ? t.clientX : t.pageX), n.push("undefined" != typeof t.clientY ? t.clientY :
							t.pageY)
					}), {
						"pageX": (Math.min.apply(Math, e) + Math.max.apply(Math, e)) / 2,
						"pageY": (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2
					}
				},
				"getVelocity": function(t, e, n) {
					return {
						"x": Math.abs(e / t) || 0,
						"y": Math.abs(n / t) || 0
					}
				},
				"getAngle": function(t, e) {
					var n = e.pageY - t.pageY,
						i = e.pageX - t.pageX;
					return 180 * Math.atan2(n, i) / Math.PI
				},
				"getDirection": function(t, e) {
					return Math.abs(t.pageX - e.pageX) >= Math.abs(t.pageY - e.pageY) ? t.pageX - e.pageX > 0 ? s.DIRECTION_LEFT :
						s.DIRECTION_RIGHT : t.pageY - e.pageY > 0 ? s.DIRECTION_UP : s.DIRECTION_DOWN
				},
				"getDistance": function(t, e) {
					var n = e.pageX - t.pageX,
						i = e.pageY - t.pageY;
					return Math.sqrt(n * n + i * i)
				},
				"getScale": function(t, e) {
					return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1
				},
				"getRotation": function(t, e) {
					return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0
				},
				"isVertical": function(t) {
					return t == s.DIRECTION_UP || t == s.DIRECTION_DOWN
				},
				"stopDefaultBrowserBehavior": function(t, e) {
					e && t && t.style && (s.utils.each(["webkit", "khtml", "moz", "Moz", "ms", "o", ""], function(n) {
						s.utils.each(e, function(e, i) {
							n && (i = n + i.substring(0, 1).toUpperCase() + i.substring(1)), i in t.style && (t.style[i] = e)
						})
					}), "none" == e.userSelect && (t.onselectstart = function() {
						return !1
					}), "none" == e.userDrag && (t.ondragstart = function() {
						return !1
					}))
				}
			}, s.Instance = function(t, e) {
				var n = this;
				return r(), this.element = t, this.enabled = !0, this.options = s.utils.extend(s.utils.extend({}, s.defaults), e ||
						{}), this.options.stop_browser_behavior && s.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior),
					s.event.onTouch(t, s.EVENT_START, function(t) {
						n.enabled && s.detection.startDetect(n, t)
					}), this
			}, s.Instance.prototype = {
				"on": function(t, e) {
					var n = t.split(" ");
					return s.utils.each(n, function(t) {
						this.element.addEventListener(t, e, !1)
					}, this), this
				},
				"off": function(t, e) {
					var n = t.split(" ");
					return s.utils.each(n, function(t) {
						this.element.removeEventListener(t, e, !1)
					}, this), this
				},
				"trigger": function(t, e) {
					e || (e = {});
					var n = s.DOCUMENT.createEvent("Event");
					n.initEvent(t, !0, !0), n.gesture = e;
					var i = this.element;
					return s.utils.hasParent(e.target, i) && (i = e.target), i.dispatchEvent(n), this
				},
				"enable": function(t) {
					return this.enabled = t, this
				}
			};
		var o = null,
			a = !1,
			u = !1;
		s.event = {
			"bindDom": function(t, e, n) {
				var i = e.split(" ");
				s.utils.each(i, function(e) {
					t.addEventListener(e, n, !1)
				})
			},
			"onTouch": function(t, e, n) {
				var i = this;
				this.bindDom(t, s.EVENT_TYPES[e], function(r) {
					var c = r.type.toLowerCase();
					if (!c.match(/mouse/) || !u) {
						c.match(/touch/) || c.match(/pointerdown/) || c.match(/mouse/) && 1 === r.which ? a = !0 : c.match(/mouse/) &&
							!r.which && (a = !1), c.match(/touch|pointer/) && (u = !0);
						var l = 0;
						a && (s.HAS_POINTEREVENTS && e != s.EVENT_END ? l = s.PointerEvent.updatePointer(e, r) : c.match(/touch/) ?
							l = r.touches.length : u || (l = c.match(/up/) ? 0 : 1), l > 0 && e == s.EVENT_END ? e = s.EVENT_MOVE : l ||
							(e = s.EVENT_END), (l || null === o) && (o = r), n.call(s.detection, i.collectEventData(t, e, i.getTouchList(
								o, e), r)), s.HAS_POINTEREVENTS && e == s.EVENT_END && (l = s.PointerEvent.updatePointer(e, r))), l || (
							o = null, a = !1, u = !1, s.PointerEvent.reset())
					}
				})
			},
			"determineEventTypes": function() {
				var t;
				t = s.HAS_POINTEREVENTS ? s.PointerEvent.getEvents() : s.NO_MOUSEEVENTS ? ["touchstart", "touchmove",
						"touchend touchcancel"
					] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], s.EVENT_TYPES[s.EVENT_START] =
					t[0], s.EVENT_TYPES[s.EVENT_MOVE] = t[1], s.EVENT_TYPES[s.EVENT_END] = t[2]
			},
			"getTouchList": function(t) {
				return s.HAS_POINTEREVENTS ? s.PointerEvent.getTouchList() : t.touches ? t.touches : (t.identifier = 1, [t])
			},
			"collectEventData": function(t, e, n, i) {
				var r = s.POINTER_TOUCH;
				return (i.type.match(/mouse/) || s.PointerEvent.matchType(s.POINTER_MOUSE, i)) && (r = s.POINTER_MOUSE), {
					"center": s.utils.getCenter(n),
					"timeStamp": (new Date).getTime(),
					"target": i.target,
					"touches": n,
					"eventType": e,
					"pointerType": r,
					"srcEvent": i,
					"preventDefault": function() {
						this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault &&
							this.srcEvent.preventDefault()
					},
					"stopPropagation": function() {
						this.srcEvent.stopPropagation()
					},
					"stopDetect": function() {
						return s.detection.stopDetect()
					}
				}
			}
		}, s.PointerEvent = {
			"pointers": {},
			"getTouchList": function() {
				var t = this,
					e = [];
				return s.utils.each(t.pointers, function(t) {
					e.push(t)
				}), e
			},
			"updatePointer": function(t, e) {
				return t == s.EVENT_END ? this.pointers = {} : (e.identifier = e.pointerId, this.pointers[e.pointerId] = e),
					Object.keys(this.pointers).length
			},
			"matchType": function(t, e) {
				if (!e.pointerType) return !1;
				var n = e.pointerType,
					i = {};
				return i[s.POINTER_MOUSE] = n === e.MSPOINTER_TYPE_MOUSE || n === s.POINTER_MOUSE, i[s.POINTER_TOUCH] = n ===
					e.MSPOINTER_TYPE_TOUCH || n === s.POINTER_TOUCH, i[s.POINTER_PEN] = n === e.MSPOINTER_TYPE_PEN || n === s.POINTER_PEN,
					i[t]
			},
			"getEvents": function() {
				return ["pointerdown MSPointerDown", "pointermove MSPointerMove",
					"pointerup pointercancel MSPointerUp MSPointerCancel"
				]
			},
			"reset": function() {
				this.pointers = {}
			}
		}, s.detection = {
			"gestures": [],
			"current": null,
			"previous": null,
			"stopped": !1,
			"startDetect": function(t, e) {
				this.current || (this.stopped = !1, this.current = {
					"inst": t,
					"startEvent": s.utils.extend({}, e),
					"lastEvent": !1,
					"name": ""
				}, this.detect(e))
			},
			"detect": function(t) {
				if (this.current && !this.stopped) {
					t = this.extendEventData(t);
					var e = this.current.inst.options;
					return s.utils.each(this.gestures, function(n) {
							return this.stopped || !1 === e[n.name] || !1 !== n.handler.call(n, t, this.current.inst) ? void 0 : (this.stopDetect(),
								!1)
						}, this), this.current && (this.current.lastEvent = t), t.eventType == s.EVENT_END && !t.touches.length - 1 &&
						this.stopDetect(), t
				}
			},
			"stopDetect": function() {
				this.previous = s.utils.extend({}, this.current), this.current = null, this.stopped = !0
			},
			"extendEventData": function(t) {
				var e = this.current.startEvent;
				!e || t.touches.length == e.touches.length && t.touches !== e.touches || (e.touches = [], s.utils.each(t.touches,
					function(t) {
						e.touches.push(s.utils.extend({}, t))
					}));
				var n, i, r = t.timeStamp - e.timeStamp,
					o = t.center.pageX - e.center.pageX,
					a = t.center.pageY - e.center.pageY,
					u = s.utils.getVelocity(r, o, a);
				return "end" === t.eventType ? (n = this.current.lastEvent && this.current.lastEvent.interimAngle, i = this.current
					.lastEvent && this.current.lastEvent.interimDirection) : (n = this.current.lastEvent && s.utils.getAngle(this
					.current.lastEvent.center, t.center), i = this.current.lastEvent && s.utils.getDirection(this.current.lastEvent
					.center, t.center)), s.utils.extend(t, {
					"deltaTime": r,
					"deltaX": o,
					"deltaY": a,
					"velocityX": u.x,
					"velocityY": u.y,
					"distance": s.utils.getDistance(e.center, t.center),
					"angle": s.utils.getAngle(e.center, t.center),
					"interimAngle": n,
					"direction": s.utils.getDirection(e.center, t.center),
					"interimDirection": i,
					"scale": s.utils.getScale(e.touches, t.touches),
					"rotation": s.utils.getRotation(e.touches, t.touches),
					"startEvent": e
				}), t
			},
			"register": function(t) {
				var e = t.defaults || {};
				return e[t.name] === i && (e[t.name] = !0), s.utils.extend(s.defaults, e, !0), t.index = t.index || 1e3, this.gestures
					.push(t), this.gestures.sort(function(t, e) {
						return t.index < e.index ? -1 : t.index > e.index ? 1 : 0
					}), this.gestures
			}
		}, s.gestures.Drag = {
			"name": "drag",
			"index": 50,
			"defaults": {
				"drag_min_distance": 10,
				"correct_for_drag_min_distance": !0,
				"drag_max_touches": 1,
				"drag_block_horizontal": !1,
				"drag_block_vertical": !1,
				"drag_lock_to_axis": !1,
				"drag_lock_min_distance": 25
			},
			"triggered": !1,
			"handler": function(t, e) {
				if (s.detection.current.name != this.name && this.triggered) return e.trigger(this.name + "end", t), void(this.triggered = !
					1);
				if (!(e.options.drag_max_touches > 0 && t.touches.length > e.options.drag_max_touches)) switch (t.eventType) {
					case s.EVENT_START:
						this.triggered = !1;
						break;
					case s.EVENT_MOVE:
						if (t.distance < e.options.drag_min_distance && s.detection.current.name != this.name) return;
						if (s.detection.current.name != this.name && (s.detection.current.name = this.name, e.options.correct_for_drag_min_distance &&
								t.distance > 0)) {
							var n = Math.abs(e.options.drag_min_distance / t.distance);
							s.detection.current.startEvent.center.pageX += t.deltaX * n, s.detection.current.startEvent.center.pageY +=
								t.deltaY * n, t = s.detection.extendEventData(t)
						}(s.detection.current.lastEvent.drag_locked_to_axis || e.options.drag_lock_to_axis && e.options.drag_lock_min_distance <=
							t.distance) && (t.drag_locked_to_axis = !0);
						var i = s.detection.current.lastEvent.direction;
						t.drag_locked_to_axis && i !== t.direction && (t.direction = s.utils.isVertical(i) ? t.deltaY < 0 ? s.DIRECTION_UP :
								s.DIRECTION_DOWN : t.deltaX < 0 ? s.DIRECTION_LEFT : s.DIRECTION_RIGHT), this.triggered || (e.trigger(this
								.name + "start", t), this.triggered = !0), e.trigger(this.name, t), e.trigger(this.name + t.direction, t),
							(e.options.drag_block_vertical && s.utils.isVertical(t.direction) || e.options.drag_block_horizontal && !s.utils
								.isVertical(t.direction)) && t.preventDefault();
						break;
					case s.EVENT_END:
						this.triggered && e.trigger(this.name + "end", t), this.triggered = !1
				}
			}
		}, s.gestures.Hold = {
			"name": "hold",
			"index": 10,
			"defaults": {
				"hold_timeout": 500,
				"hold_threshold": 1
			},
			"timer": null,
			"handler": function(t, e) {
				switch (t.eventType) {
					case s.EVENT_START:
						clearTimeout(this.timer), s.detection.current.name = this.name, this.timer = setTimeout(function() {
							"hold" == s.detection.current.name && e.trigger("hold", t)
						}, e.options.hold_timeout);
						break;
					case s.EVENT_MOVE:
						t.distance > e.options.hold_threshold && clearTimeout(this.timer);
						break;
					case s.EVENT_END:
						clearTimeout(this.timer)
				}
			}
		}, s.gestures.Release = {
			"name": "release",
			"index": 1 / 0,
			"handler": function(t, e) {
				t.eventType == s.EVENT_END && e.trigger(this.name, t)
			}
		}, s.gestures.Swipe = {
			"name": "swipe",
			"index": 40,
			"defaults": {
				"swipe_min_touches": 1,
				"swipe_max_touches": 1,
				"swipe_velocity": .7
			},
			"handler": function(t, e) {
				if (t.eventType == s.EVENT_END) {
					if (e.options.swipe_max_touches > 0 && t.touches.length < e.options.swipe_min_touches && t.touches.length > e.options
						.swipe_max_touches) return;
					(t.velocityX > e.options.swipe_velocity || t.velocityY > e.options.swipe_velocity) && (e.trigger(this.name, t),
						e.trigger(this.name + t.direction, t))
				}
			}
		}, s.gestures.Tap = {
			"name": "tap",
			"index": 100,
			"defaults": {
				"tap_max_touchtime": 250,
				"tap_max_distance": 10,
				"tap_always": !0,
				"doubletap_distance": 20,
				"doubletap_interval": 300
			},
			"handler": function(t, e) {
				if (t.eventType == s.EVENT_END && "touchcancel" != t.srcEvent.type) {
					var n = s.detection.previous,
						i = !1;
					if (t.deltaTime > e.options.tap_max_touchtime || t.distance > e.options.tap_max_distance) return;
					n && "tap" == n.name && t.timeStamp - n.lastEvent.timeStamp < e.options.doubletap_interval && t.distance < e.options
						.doubletap_distance && (e.trigger("doubletap", t), i = !0), (!i || e.options.tap_always) && (s.detection.current
							.name = "tap", e.trigger(s.detection.current.name, t))
				}
			}
		}, s.gestures.Touch = {
			"name": "touch",
			"index": -1 / 0,
			"defaults": {
				"prevent_default": !1,
				"prevent_mouseevents": !1
			},
			"handler": function(t, e) {
				return e.options.prevent_mouseevents && t.pointerType == s.POINTER_MOUSE ? void t.stopDetect() : (e.options.prevent_default &&
					t.preventDefault(), void(t.eventType == s.EVENT_START && e.trigger(this.name, t)))
			}
		}, s.gestures.Transform = {
			"name": "transform",
			"index": 45,
			"defaults": {
				"transform_min_scale": .01,
				"transform_min_rotation": 1,
				"transform_always_block": !1
			},
			"triggered": !1,
			"handler": function(t, e) {
				if (s.detection.current.name != this.name && this.triggered) return e.trigger(this.name + "end", t), void(this.triggered = !
					1);
				if (!(t.touches.length < 2)) switch (e.options.transform_always_block && t.preventDefault(), t.eventType) {
					case s.EVENT_START:
						this.triggered = !1;
						break;
					case s.EVENT_MOVE:
						var n = Math.abs(1 - t.scale),
							i = Math.abs(t.rotation);
						if (n < e.options.transform_min_scale && i < e.options.transform_min_rotation) return;
						s.detection.current.name = this.name, this.triggered || (e.trigger(this.name + "start", t), this.triggered = !
								0), e.trigger(this.name, t), i > e.options.transform_min_rotation && e.trigger("rotate", t), n > e.options
							.transform_min_scale && (e.trigger("pinch", t), e.trigger("pinch" + (t.scale < 1 ? "in" : "out"), t));
						break;
					case s.EVENT_END:
						this.triggered && e.trigger(this.name + "end", t), this.triggered = !1
				}
			}
		}, "function" == typeof define && define.amd ? define(function() {
			return s
		}) : "object" == (void 0 === t ? "undefined" : n(t)) && t.exports ? t.exports = s : e.Hammer = s
	}(window)
}]);
