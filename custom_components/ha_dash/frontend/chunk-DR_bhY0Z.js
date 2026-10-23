// src/floor3d/floor3d.css?inline
var e = 1.2, t = .24, n = .06, r = 0;
function i(e = "e") {
	return e + Date.now().toString(36) + (r++).toString(36);
}
function a(t = "我的家") {
	return {
		v: 1,
		name: t,
		wallHeight: e,
		ceiling: 2.8,
		base: {
			src: "",
			w: 0,
			h: 0,
			opacity: .14,
			flipX: !1,
			ppm: 0,
			ox: 0,
			oy: 0,
			walls: [],
			wallsV: 0,
			wallsPpm: 0
		},
		rooms: [],
		openings: [],
		furniture: [],
		devices: []
	};
}
var o = (e, t, n, r) => Math.hypot(n - e, r - t);
function s(e, t, n, r, i, a) {
	let s = i - n, c = a - r, l = s * s + c * c;
	if (l < 1e-12) return {
		t: 0,
		x: n,
		y: r,
		d: o(e, t, n, r)
	};
	let u = ((e - n) * s + (t - r) * c) / l;
	u = Math.max(0, Math.min(1, u));
	let d = n + s * u, f = r + c * u;
	return {
		t: u,
		x: d,
		y: f,
		d: o(e, t, d, f)
	};
}
function c(e) {
	let t = 0;
	for (let n = 0, r = e.length; n < r; n++) {
		let [i, a] = e[n], [o, s] = e[(n + 1) % r];
		t += i * s - o * a;
	}
	return Math.abs(t / 2);
}
function l(e) {
	let t = 0, n = 0, r = 0;
	for (let i = 0, a = e.length; i < a; i++) {
		let [o, s] = e[i], [c, l] = e[(i + 1) % a], u = o * l - c * s;
		t += u, n += (o + c) * u, r += (s + l) * u;
	}
	return Math.abs(t) < 1e-12 ? [e.reduce((e, t) => e + t[0], 0) / e.length, e.reduce((e, t) => e + t[1], 0) / e.length] : [n / (3 * t), r / (3 * t)];
}
function u(e, t, n) {
	let r = !1;
	for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
		let [o, s] = n[i], [c, l] = n[a];
		s > t != l > t && e < (c - o) * (t - s) / (l - s) + o && (r = !r);
	}
	return r;
}
function d(e, t, n) {
	for (let r = e.rooms.length - 1; r >= 0; r--) if (u(t, n, e.rooms[r].poly)) return e.rooms[r];
	return null;
}
function f(e) {
	let t = [];
	return e.forEach((e) => {
		let n = e.poly;
		for (let r = 0; r < n.length; r++) {
			let [i, a] = n[r], [s, c] = n[(r + 1) % n.length], l = o(i, a, s, c);
			l < .02 || t.push({
				id: `${e.id}:${r}`,
				x1: i,
				y1: a,
				x2: s,
				y2: c,
				len: l,
				ang: Math.atan2(c - a, s - i),
				roomId: e.id,
				edge: r,
				t: (Array.isArray(e.edgeT) ? e.edgeT[r] : e.wallT) ?? .24,
				kind: e.edgeK?.[r] === "virtual" ? "virtual" : "solid"
			});
		}
	}), t;
}
function p(e, t, n, r = .35) {
	let i = null;
	for (let a of e) {
		let e = s(t, n, a.x1, a.y1, a.x2, a.y2);
		e.d <= r && (!i || e.d < i.d) && (i = {
			wall: a,
			...e
		});
	}
	return i;
}
var m = (e) => typeof e == "number" && Number.isFinite(e) ? e : null;
function h(n, r, i) {
	let a = r?.poly?.length || 0;
	if (!a) return {
		t,
		h: e,
		kind: "solid",
		color: null,
		len: 0
	};
	let s = (i % a + a) % a, c = r.poly[s], l = r.poly[(s + 1) % a];
	return {
		t: m(r.edgeT?.[s]) ?? m(r.wallT) ?? .24,
		h: m(r.edgeH?.[s]) ?? m(n?.wallHeight) ?? 1.2,
		kind: r.edgeK?.[s] === "virtual" ? "virtual" : "solid",
		color: r.edgeC?.[s] || null,
		len: o(c[0], c[1], l[0], l[1]),
		a: c,
		b: l
	};
}
function g(e, t, r = n) {
	let i = o(e[0][0], e[0][1], t[0][0], t[0][1]) <= r && o(e[1][0], e[1][1], t[1][0], t[1][1]) <= r, a = o(e[0][0], e[0][1], t[1][0], t[1][1]) <= r && o(e[1][0], e[1][1], t[0][0], t[0][1]) <= r;
	return i || a;
}
function _(e, t, n, r) {
	let i = e.poly.length, a = Array.isArray(e[t]) ? e[t].slice() : Array(i).fill(void 0);
	for (; a.length < i;) a.push(void 0);
	a[n] = r, e[t] = a;
}
function v(e, t, r, i, a = n) {
	let o = e.rooms.find((e) => e.id === t);
	if (!o) return [];
	let s = o.poly.length, c = (r % s + s) % s, l = [o.poly[c], o.poly[(c + 1) % s]], u = [];
	for (let t of e.rooms) {
		let e = t.poly.length;
		for (let n = 0; n < e; n++) g(l, [t.poly[n], t.poly[(n + 1) % e]], a) && ("t" in i && _(t, "edgeT", n, i.t), "h" in i && _(t, "edgeH", n, i.h), "kind" in i && _(t, "edgeK", n, i.kind), "color" in i && _(t, "edgeC", n, i.color), u.push({
			roomId: t.id,
			edge: n
		}));
	}
	return u;
}
function y(e, t, r = n) {
	let i = t.poly.length, a = {
		edgeT: [],
		edgeH: [],
		edgeK: [],
		edgeC: []
	}, o = e.rooms.filter((e) => e !== t);
	for (let n = 0; n < i; n++) {
		let s = [t.poly[n], t.poly[(n + 1) % i]], c = null;
		for (let t of o) {
			let n = t.poly.length;
			for (let i = 0; i < n; i++) {
				if (!g(s, [t.poly[i], t.poly[(i + 1) % n]], r)) continue;
				let a = h(e, t, i);
				c = {
					t: a.t,
					h: a.h,
					k: a.kind,
					c: a.color
				};
				break;
			}
			if (c) break;
		}
		a.edgeT.push(c ? c.t : void 0), a.edgeH.push(c ? c.h : void 0), a.edgeK.push(c ? c.k : void 0), a.edgeC.push(c ? c.c : void 0);
	}
	return Object.assign(t, a), t;
}
function ee(e, t, n = .08) {
	return t.length ? e.map(([e, r]) => {
		let i = null, a = null, o = n, s = n;
		for (let c of t) {
			let t = Math.min(c.x1, c.x2), l = Math.max(c.x1, c.x2), u = Math.min(c.y1, c.y2), d = Math.max(c.y1, c.y2);
			if (Math.abs(c.x2 - c.x1) < 1e-6) {
				if (r < u - n || r > d + n) continue;
				let t = Math.abs(e - c.x1);
				t <= o && (i = c.x1, o = t);
			} else if (Math.abs(c.y2 - c.y1) < 1e-6) {
				if (e < t - n || e > l + n) continue;
				let i = Math.abs(r - c.y1);
				i <= s && (a = c.y1, s = i);
			}
		}
		return [i ?? e, a ?? r];
	}) : e;
}
function b(e, t) {
	let n = e.rooms.find((e) => e.id === t.roomId);
	if (!n) return null;
	let r = n.poly, i = t.edge, a = r.length, [s, c] = r[i % a], [l, u] = r[(i + 1) % a], d = o(s, c, l, u);
	if (d < 1e-6) return null;
	let f = (l - s) / d, p = (u - c) / d, m = s + f * d * t.t, h = c + p * d * t.t, g = t.w / 2;
	return {
		cx: m,
		cy: h,
		ux: f,
		uy: p,
		len: d,
		angle: Math.atan2(p, f),
		ax: m - f * g,
		ay: h - p * g,
		bx: m + f * g,
		by: h + p * g,
		t: t.t,
		w: t.w
	};
}
function x(e, t, n, r = .1, i = .05, a = {}) {
	let s = a.from || null, c = a.px > 0 ? a.px : 0, l = c ? Math.min(.2, Math.max(r, 12 * c)) : r, u = c ? Math.min(.26, Math.max(.06, 15 * c)) : r, d = [];
	for (let e of a.guides || []) d.push({
		x1: e.x1,
		y1: e.y1,
		x2: e.x2,
		y2: e.y2,
		src: "guide"
	});
	for (let t of e?.rooms || []) {
		let e = t.poly.length;
		for (let n = 0; n < e; n++) {
			let r = t.poly[n], i = t.poly[(n + 1) % e];
			d.push({
				x1: r[0],
				y1: r[1],
				x2: i[0],
				y2: i[1],
				src: "wall",
				roomId: t.id,
				edge: n
			});
		}
	}
	let f = null;
	for (let r of e?.rooms || []) for (let [e, i] of r.poly) {
		let r = o(t, n, e, i);
		r <= l && (!f || r < f.d) && (f = {
			x: e,
			y: i,
			d: r,
			kind: "vertex"
		});
	}
	if (f) return f;
	if (a.points?.length) {
		let e = null;
		for (let [r, i] of a.points) {
			let a = o(t, n, r, i);
			a <= l && (!e || a < e.d) && (e = {
				x: r,
				y: i,
				d: a,
				kind: "chain"
			});
		}
		if (e) return e;
	}
	let p = null, m = null, h = u, g = u, _ = null, v = null;
	for (let e of d) {
		let r = Math.min(e.x1, e.x2), i = Math.max(e.x1, e.x2), a = Math.min(e.y1, e.y2), o = Math.max(e.y1, e.y2);
		if (Math.abs(e.x2 - e.x1) < 1e-6) {
			if (n < a - u || n > o + u) continue;
			let r = Math.abs(t - e.x1);
			r <= h && (p = e.x1, h = r, _ = e);
		} else if (Math.abs(e.y2 - e.y1) < 1e-6) {
			if (t < r - u || t > i + u) continue;
			let a = Math.abs(n - e.y1);
			a <= g && (m = e.y1, g = a, v = e);
		}
	}
	if (p !== null && m !== null) return {
		x: p,
		y: m,
		d: 0,
		kind: "corner",
		hot: C(_, v, h, g)
	};
	if (m !== null && p === null) {
		let e = null, n = l;
		for (let r of d) for (let [i, a] of [[r.x1, r.y1], [r.x2, r.y2]]) {
			if (Math.abs(a - m) > .03) continue;
			let r = Math.abs(i - t);
			r <= n && (e = i, n = r);
		}
		if (e !== null) return {
			x: e,
			y: m,
			d: 0,
			kind: "corner",
			hot: v
		};
	}
	if (p !== null && m === null) {
		let e = null, t = l;
		for (let r of d) for (let [i, a] of [[r.x1, r.y1], [r.x2, r.y2]]) {
			if (Math.abs(i - p) > .03) continue;
			let r = Math.abs(a - n);
			r <= t && (e = a, t = r);
		}
		if (e !== null) return {
			x: p,
			y: e,
			d: 0,
			kind: "corner",
			hot: _
		};
	}
	let y = p !== null || m !== null ? S(p === null ? v : _) : "free";
	if (s) {
		let e = .035, r = u * 2.5;
		for (let i of d) {
			let a = Math.min(i.y1, i.y2), o = Math.max(i.y1, i.y2), c = Math.min(i.x1, i.x2), l = Math.max(i.x1, i.x2);
			if (Math.abs(i.x2 - i.x1) < 1e-6) {
				if (Math.abs(s[0] - i.x1) > e || s[1] < a - e || s[1] > o + e || Math.abs(t - i.x1) > r) continue;
				p = i.x1, y = S(i);
				break;
			}
			if (Math.abs(i.y2 - i.y1) < 1e-6) {
				if (Math.abs(s[1] - i.y1) > e || s[0] < c - e || s[0] > l + e || Math.abs(n - i.y1) > r) continue;
				m = i.y1, y = S(i);
				break;
			}
		}
	}
	if (s) {
		let e = Math.abs(t - s[0]), i = Math.abs(n - s[1]), a = c ? Math.max(6 * c, .04) : Math.min(Math.max(r, .04), .12);
		e >= i ? m === null && i <= a && e > 1e-9 && (m = s[1], y === "free" && (y = "axis")) : p === null && e <= a && (p = s[0], y === "free" && (y = "axis"));
	}
	return p === null && (p = i > 0 ? Math.round(t / i) * i : t), m === null && (m = i > 0 ? Math.round(n / i) * i : n), y === "free" && i > 0 && (y = "grid"), {
		x: p,
		y: m,
		d: 0,
		kind: y,
		hot: _ || v
	};
}
var S = (e) => e ? e.src === "wall" ? "edge" : "guide" : "free", C = (e, t, n, r) => n <= r ? e : t;
function w(e) {
	let t = e?.ppm || (e?.w ? e.w / 12 : 0);
	return {
		ppm: t,
		ww: t ? e.w / t : 0,
		wh: t ? e.h / t : 0
	};
}
function T(e, t, n) {
	let { ppm: r, ww: i } = w(e);
	if (!r) return [0, 0];
	let a = t / r;
	return [e.flipX ? i - a : a, n / r];
}
function te(e) {
	let t = e?.walls;
	if (!Array.isArray(t) || !t.length) return [];
	let n = [];
	for (let r of t) {
		if (!Array.isArray(r) || r.length < 4) continue;
		let [t, i] = T(e, r[0], r[1]), [a, o] = T(e, r[2], r[3]);
		n.push({
			x1: Math.min(t, a),
			y1: Math.min(i, o),
			x2: Math.max(t, a),
			y2: Math.max(i, o)
		});
	}
	return n;
}
function ne(e, t, n = .12) {
	for (let r = 0; r < e.length - 1; r++) {
		if (o(e[r][0], e[r][1], t[0], t[1]) > n) continue;
		let i = e.slice(r);
		if (!(i.length < 3)) return {
			poly: i,
			keep: r === 0 ? [] : e.slice(0, r + 1)
		};
	}
	return null;
}
function E(e, t = .02) {
	let n = [];
	for (let r of e) {
		let e = n[n.length - 1];
		(!e || o(e[0], e[1], r[0], r[1]) > t) && n.push([r[0], r[1]]);
	}
	for (; n.length > 3 && o(n[0][0], n[0][1], n[n.length - 1][0], n[n.length - 1][1]) <= t;) n.pop();
	if (n.length < 4) return n;
	let r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[(e - 1 + n.length) % n.length], a = n[e], s = n[(e + 1) % n.length], c = (a[0] - i[0]) * (s[1] - i[1]) - (a[1] - i[1]) * (s[0] - i[0]), l = o(i[0], i[1], s[0], s[1]) || 1;
		Math.abs(c) / l > t && r.push(a);
	}
	return r.length >= 3 ? r : n;
}
function D(e) {
	return JSON.stringify(e);
}
function O(e) {
	let t = JSON.parse(e), n = a(), r = {
		...n,
		...t
	};
	r.base = {
		...n.base,
		...t.base || {}
	};
	for (let e of [
		"rooms",
		"openings",
		"furniture",
		"devices"
	]) Array.isArray(r[e]) || (r[e] = []);
	return r;
}
var k = [
	{
		kind: "bed",
		name: "双人床",
		w: 1.8,
		d: 2
	},
	{
		kind: "bed1",
		name: "单人床",
		w: 1.2,
		d: 2
	},
	{
		kind: "sofa",
		name: "沙发",
		w: 2.1,
		d: .9
	},
	{
		kind: "table",
		name: "餐桌",
		w: 1.4,
		d: .8
	},
	{
		kind: "desk",
		name: "书桌",
		w: 1.2,
		d: .6
	},
	{
		kind: "chair",
		name: "椅子",
		w: .45,
		d: .45
	},
	{
		kind: "wardrobe",
		name: "衣柜",
		w: 1.8,
		d: .6
	},
	{
		kind: "tv",
		name: "电视柜",
		w: 1.6,
		d: .4
	},
	{
		kind: "fridge",
		name: "冰箱",
		w: .7,
		d: .7
	},
	{
		kind: "washer",
		name: "洗衣机",
		w: .6,
		d: .6
	},
	{
		kind: "toilet",
		name: "马桶",
		w: .4,
		d: .7
	},
	{
		kind: "sink",
		name: "洗手台",
		w: .8,
		d: .5
	},
	{
		kind: "counter",
		name: "橱柜",
		w: 1.8,
		d: .6
	},
	{
		kind: "plant",
		name: "绿植",
		w: .5,
		d: .5
	}
], A = [
	"#7dd3fc",
	"#a5b4fc",
	"#fca5a5",
	"#fcd34d",
	"#86efac",
	"#f9a8d4",
	"#fdba74",
	"#c4b5fd"
];
function j(e) {
	return A[e % A.length];
}
// src/floor3d/editor.js
var M = {
	bg: "#070a10",
	grid: "rgba(120,150,200,.07)",
	gridBold: "rgba(120,150,200,.13)",
	wall: "#c9d6e8",
	wallSide: "rgba(120,150,200,.30)",
	sel: "#5eead4",
	draft: "#fbbf24",
	guide: "rgba(94,234,212,.34)",
	guideHot: "#5eead4",
	door: "#f0a45c",
	window: "#6fd3ff",
	text: "rgba(230,240,255,.86)",
	textDim: "rgba(160,180,210,.55)",
	device: "#8ab4f8"
}, N = {
	vertex: "墙角",
	corner: "墙线端点",
	chain: "折线点",
	guide: "墙线",
	edge: "已有墙",
	axis: "正交",
	grid: "网格",
	free: ""
}, P = class {
	constructor(e) {
		this.host = e, this.plan = null, this.hass = null, this.tool = "select", this.chain = [], this.cursor = null, this.sel = null, this.guides = [], this.showGuides = !0, this.hot = null, this.view = {
			k: 60,
			tx: 0,
			ty: 0
		}, this.listeners = {
			change: [],
			sel: [],
			chain: [],
			tool: []
		}, this._drag = null, this._pan = null, this._press = null, this._raf = 0, this._imgs = /* @__PURE__ */ new Map();
		let t = document.createElement("canvas");
		t.className = "fe-canvas", t.tabIndex = 0, e.appendChild(t), this.cv = t, this.ctx = t.getContext("2d"), this._bind(), this._resize(), this._ro = new ResizeObserver(() => this._resize()), this._ro.observe(e);
	}
	destroy() {
		this._ro?.disconnect(), cancelAnimationFrame(this._raf), window.removeEventListener("keydown", this._kd), this.cv.remove();
	}
	on(e, t) {
		var n;
		return ((n = this.listeners)[e] || (n[e] = [])).push(t), this;
	}
	emit(e, ...t) {
		(this.listeners[e] || []).forEach((e) => e(...t));
	}
	setPlan(e) {
		return this.plan = e, this.chain = [], this.sel = null, this.refreshGuides(), this.requestRender(), this;
	}
	setHass(e) {
		this.hass = e, this.requestRender();
	}
	refreshGuides() {
		return this.guides = te(this.plan?.base), this.requestRender(), this.guides;
	}
	setTool(e) {
		this.tool !== e && (this.tool = e, e !== "calibrate" && (this.calibPts = []), this.emit("tool", e), this.requestRender());
	}
	flushChain() {
		return this.chain.length >= 3 ? (this._addRoom(this.chain.map((e) => [...e]), []), !0) : (this.chain.length && this._clearChain(!0), !1);
	}
	select(e) {
		this.sel = e, this.emit("sel", e), this.requestRender();
	}
	_resize() {
		let e = this.host.getBoundingClientRect(), t = Math.min(2, window.devicePixelRatio || 1);
		this.dpr = t, this.cv.width = Math.max(1, Math.round(e.width * t)), this.cv.height = Math.max(1, Math.round(e.height * t)), this.cv.style.width = e.width + "px", this.cv.style.height = e.height + "px", this.w = e.width, this.h = e.height, this._fitted || this.fitView(), this.requestRender();
	}
	fitView(e = 40) {
		let t = this.plan, n = null, r = (e, t) => {
			n ? (n.x1 = Math.min(n.x1, e), n.y1 = Math.min(n.y1, t), n.x2 = Math.max(n.x2, e), n.y2 = Math.max(n.y2, t)) : n = {
				x1: e,
				y1: t,
				x2: e,
				y2: t
			};
		};
		for (let e of t?.rooms || []) e.poly.forEach(([e, t]) => r(e, t));
		for (let e of t?.furniture || []) r(e.x, e.y);
		for (let e of this.guides) r(e.x1, e.y1), r(e.x2, e.y2);
		if (!n && t?.base?.src && t.base.w) {
			let { ww: e, wh: n } = w(t.base);
			r(0, 0), r(e, n);
		}
		if (!n) {
			this.view = {
				k: 60,
				tx: this.w / 2,
				ty: this.h / 2
			}, this._fitted = !0;
			return;
		}
		let i = Math.max(.5, n.x2 - n.x1), a = Math.max(.5, n.y2 - n.y1), o = Math.min((this.w - e * 2) / i, (this.h - e * 2) / a);
		this.view = {
			k: o,
			tx: this.w / 2 - (n.x1 + n.x2) / 2 * o,
			ty: this.h / 2 - (n.y1 + n.y2) / 2 * o
		}, this._fitted = !0, this.requestRender();
	}
	zoomAt(e, t, n) {
		let r = this.view, i = Math.max(8, Math.min(600, r.k * n)), a = (e - r.tx) / r.k, o = (t - r.ty) / r.k;
		r.k = i, r.tx = e - a * i, r.ty = t - o * i, this.requestRender();
	}
	toWorld(e, t) {
		let n = this.view;
		return [(e - n.tx) / n.k, (t - n.ty) / n.k];
	}
	toScreen(e, t) {
		let n = this.view;
		return [e * n.k + n.tx, t * n.k + n.ty];
	}
	requestRender() {
		this._raf || (this._raf = requestAnimationFrame(() => {
			this._raf = 0, this.render();
		}));
	}
	render() {
		let { ctx: e, cv: t, dpr: n } = this;
		e && (e.setTransform(n, 0, 0, n, 0, 0), e.clearRect(0, 0, this.w, this.h), e.fillStyle = M.bg, e.fillRect(0, 0, this.w, this.h), this._drawGrid(), this._drawBase(), this.plan && (this._drawGuides(), this._drawRooms(), this._drawHot(), this._drawOpenings(), this._drawFurniture(), this._drawDevices(), this._drawLabels(), this._drawChain(), this._drawCalib(), this._drawScaleHint()));
	}
	_drawCalib() {
		if (this.tool !== "calibrate" || !this.calibPts?.length) return;
		let { ctx: e } = this, [t, n] = this.calibPts[0], [r, i] = this.toScreen(t, n), [a, o] = this.cursor ? this.toScreen(this.cursor.x, this.cursor.y) : [r, i];
		e.save(), e.strokeStyle = M.draft, e.lineWidth = 2, e.setLineDash([7, 5]), e.beginPath(), e.moveTo(r, i), e.lineTo(a, o), e.stroke(), e.setLineDash([]);
		for (let [t, n] of [[r, i], [a, o]]) e.beginPath(), e.arc(t, n, 5, 0, Math.PI * 2), e.fillStyle = M.draft, e.fill();
		e.restore();
	}
	_drawGrid() {
		let { ctx: e } = this, t = this.view, n = .5;
		for (let e of [
			.1,
			.2,
			.5,
			1,
			2,
			5,
			10
		]) {
			if (e * t.k >= 40) {
				n = e;
				break;
			}
			n = e;
		}
		let r = Math.floor(-t.tx / t.k / n) * n, i = Math.floor(-t.ty / t.k / n) * n, a = (this.w - t.tx) / t.k, o = (this.h - t.ty) / t.k;
		e.lineWidth = 1;
		for (let i = r; i <= a; i += n) {
			let n = Math.round(i * t.k + t.tx) + .5;
			e.strokeStyle = Math.abs(i % 1) < 1e-6 ? M.gridBold : M.grid, e.beginPath(), e.moveTo(n, 0), e.lineTo(n, this.h), e.stroke();
		}
		for (let r = i; r <= o; r += n) {
			let n = Math.round(r * t.k + t.ty) + .5;
			e.strokeStyle = Math.abs(r % 1) < 1e-6 ? M.gridBold : M.grid, e.beginPath(), e.moveTo(0, n), e.lineTo(this.w, n), e.stroke();
		}
	}
	_drawBase() {
		let e = this.plan?.base;
		if (!e?.src) return;
		let t = this._img(e.src);
		if (!t.complete || !t.naturalWidth) {
			t.onload = () => this.requestRender();
			return;
		}
		let { ww: n, wh: r } = w(e), [i, a] = this.toScreen(0, 0), [o, s] = this.toScreen(n, r);
		this.ctx.save(), this.ctx.globalAlpha = e.opacity, e.flipX ? (this.ctx.translate(i, a), this.ctx.scale(-1, 1), this.ctx.drawImage(t, 0, 0, i - o, s - a)) : this.ctx.drawImage(t, i, a, o - i, s - a), this.ctx.restore();
	}
	_img(e) {
		if (this._imgs.has(e)) return this._imgs.get(e);
		let t = new Image();
		return t.src = e, this._imgs.set(e, t), t;
	}
	_drawGuides() {
		if (!this.showGuides || !this.guides.length) return;
		let { ctx: e } = this;
		e.save(), e.strokeStyle = M.guide, e.lineWidth = 1.6, e.lineCap = "round", e.shadowColor = "rgba(94,234,212,.45)", e.shadowBlur = 5, e.beginPath();
		for (let t of this.guides) {
			let [n, r] = this.toScreen(t.x1, t.y1), [i, a] = this.toScreen(t.x2, t.y2);
			e.moveTo(n, r), e.lineTo(i, a);
		}
		e.stroke(), e.restore();
	}
	_pathPoly(e) {
		let { ctx: t } = this;
		t.beginPath(), e.forEach(([e, n], r) => {
			let [i, a] = this.toScreen(e, n);
			r ? t.lineTo(i, a) : t.moveTo(i, a);
		}), t.closePath();
	}
	_drawRooms() {
		let { ctx: e } = this, t = this.view;
		this.plan.rooms.forEach((n, r) => {
			let i = this.sel?.type === "room" && this.sel.id === n.id, a = j(r);
			this._pathPoly(n.poly), e.fillStyle = i ? "rgba(94,234,212,.18)" : this._tint(a, .11), e.fill();
			let o = n.poly.length;
			e.lineCap = "square", e.lineJoin = "miter";
			for (let r = 0; r < o; r++) {
				let a = h(this.plan, n, r), s = n.poly[r], c = n.poly[(r + 1) % o], [l, u] = this.toScreen(s[0], s[1]), [d, f] = this.toScreen(c[0], c[1]), p = a.kind === "virtual";
				e.lineWidth = p ? 1.6 : Math.max(2, a.t * t.k), e.setLineDash(p ? [6, 5] : []), i ? e.strokeStyle = "rgba(94,234,212,.85)" : p ? e.strokeStyle = "rgba(150,185,215,.5)" : e.strokeStyle = a.color || M.wall, e.beginPath(), e.moveTo(l, u), e.lineTo(d, f), e.stroke();
			}
			e.setLineDash([]), (i || this._shouldShowHandles()) && n.poly.forEach(([t, n]) => {
				let [r, i] = this.toScreen(t, n);
				e.beginPath(), e.arc(r, i, 4.5, 0, Math.PI * 2), e.fillStyle = "#0b1220", e.fill(), e.strokeStyle = a, e.lineWidth = 2, e.stroke();
			});
		});
	}
	_drawHot() {
		let { ctx: e } = this, t = [];
		if (this.hot && this.tool === "wall" && t.push({
			seg: this.hot,
			w: 3.2,
			handles: !1,
			col: this.hot.src === "wall" ? M.draft : M.guideHot
		}), this.sel?.type === "wall") {
			let e = this.plan.rooms.find((e) => e.id === this.sel.roomId);
			if (e) {
				let n = e.poly.length, r = this.sel.edge % n, i = e.poly[r], a = e.poly[(r + 1) % n];
				t.push({
					seg: {
						x1: i[0],
						y1: i[1],
						x2: a[0],
						y2: a[1]
					},
					w: 3.6,
					col: M.sel,
					handles: !0
				});
			}
		}
		if (t.length) {
			e.save();
			for (let n of t) {
				let [t, r] = this.toScreen(n.seg.x1, n.seg.y1), [i, a] = this.toScreen(n.seg.x2, n.seg.y2);
				if (e.strokeStyle = n.col, e.lineWidth = n.w, e.lineCap = "round", e.shadowColor = n.col, e.shadowBlur = 8, e.beginPath(), e.moveTo(t, r), e.lineTo(i, a), e.stroke(), e.shadowBlur = 0, n.handles) for (let [o, s] of [[t, r], [i, a]]) e.beginPath(), e.rect(o - 4, s - 4, 8, 8), e.fillStyle = "#0b1220", e.fill(), e.strokeStyle = n.col, e.lineWidth = 2, e.stroke();
			}
			e.restore();
		}
	}
	_shouldShowHandles() {
		return this.tool === "select" && this.plan.rooms.length <= 12;
	}
	_tint(e, t) {
		let n = parseInt(e.slice(1), 16);
		return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${t})`;
	}
	_drawOpenings() {
		let { ctx: e } = this;
		for (let t of this.plan.openings) {
			let n = b(this.plan, t);
			if (!n) continue;
			let [r, i] = this.toScreen(n.ax, n.ay), [a, s] = this.toScreen(n.bx, n.by), c = this.sel?.type === "opening" && this.sel.id === t.id;
			if (t.type === "window") {
				e.strokeStyle = c ? M.sel : M.window, e.lineWidth = 3, e.beginPath(), e.moveTo(r, i), e.lineTo(a, s), e.stroke();
				let t = -(s - i), n = a - r, o = Math.hypot(t, n) || 1;
				e.lineWidth = 1, e.beginPath(), e.moveTo(r - t / o * 3, i - n / o * 3), e.lineTo(a - t / o * 3, s - n / o * 3), e.stroke();
			} else {
				e.strokeStyle = c ? M.sel : M.door, e.lineWidth = 2.5, e.beginPath(), e.moveTo(r, i), e.lineTo(a, s), e.stroke();
				let d = this.plan.rooms.find((e) => e.id === t.roomId), f = Math.hypot(a - r, s - i), p = Math.atan2(s - i, a - r), m = 1;
				if (d) {
					let [e, t] = l(d.poly), r = (e) => [n.ax + Math.cos(p + e * Math.PI / 4) * f, n.ay + Math.sin(p + e * Math.PI / 4) * f], i = r(1), a = r(-1), s = u(i[0], i[1], d.poly), c = u(a[0], a[1], d.poly);
					m = s && !c ? 1 : c && !s ? -1 : o(i[0], i[1], e, t) <= o(a[0], a[1], e, t) ? 1 : -1;
				}
				e.beginPath(), e.arc(r, i, f, p, p + m * Math.PI / 2, m < 0), e.strokeStyle = this._tint(c ? M.sel : M.door, .45), e.lineWidth = 1.2, e.stroke();
			}
		}
	}
	_drawFurniture() {
		let { ctx: e } = this;
		for (let t of this.plan.furniture) {
			let [n, r] = this.toScreen(t.x, t.y), i = t.w * this.view.k, a = t.d * this.view.k;
			e.save(), e.translate(n, r), e.rotate((t.rot || 0) * Math.PI / 180);
			let o = this.sel?.type === "furniture" && this.sel.id === t.id;
			e.fillStyle = o ? "rgba(94,234,212,.22)" : "rgba(150,170,200,.16)", e.strokeStyle = o ? M.sel : "rgba(160,185,215,.55)", e.lineWidth = 1.4, this._roundRect(-i / 2, -a / 2, i, a, Math.min(6, Math.min(i, a) * .18)), e.fill(), e.stroke(), this.view.k > 26 && (e.fillStyle = M.textDim, e.textAlign = "center", e.font = "10px system-ui,sans-serif", e.fillText(t.name || "", 0, 3)), e.restore();
		}
	}
	_roundRect(e, t, n, r, i) {
		let a = this.ctx;
		a.beginPath(), a.moveTo(e + i, t), a.arcTo(e + n, t, e + n, t + r, i), a.arcTo(e + n, t + r, e, t + r, i), a.arcTo(e, t + r, e, t, i), a.arcTo(e, t, e + n, t, i), a.closePath();
	}
	_drawDevices() {
		let { ctx: e } = this, t = this.hass?.states || {};
		for (let n of this.plan.devices) {
			let [r, i] = this.toScreen(n.x, n.y), a = t[n.entity]?.state, o = a === "on" || a && ![
				"off",
				"unavailable",
				"unknown"
			].includes(a), s = this.sel?.type === "device" && this.sel.id === n.id, c = Math.max(9, Math.min(18, this.view.k * .18));
			if (o) {
				let t = e.createRadialGradient(r, i, 0, r, i, c * 2.1);
				t.addColorStop(0, "rgba(120,200,255,.30)"), t.addColorStop(1, "rgba(120,200,255,0)"), e.fillStyle = t, e.beginPath(), e.arc(r, i, c * 2.1, 0, Math.PI * 2), e.fill();
			}
			e.beginPath(), e.arc(r, i, c, 0, Math.PI * 2), e.fillStyle = o ? "rgba(110,190,255,.22)" : "rgba(140,160,190,.13)", e.fill(), e.strokeStyle = s ? M.sel : o ? "rgba(130,200,255,.85)" : "rgba(150,170,200,.5)", e.lineWidth = s ? 2.4 : 1.6, e.stroke(), this._deviceGlyph(n.art || n.dom, r, i, c * .62, o ? "#a8dcff" : "rgba(180,195,220,.7)"), n.name && this.view.k > 22 && (e.fillStyle = M.textDim, e.textAlign = "center", e.font = "10px system-ui,sans-serif", e.fillText(n.name, r, i + c + 12));
		}
	}
	_deviceGlyph(e, t, n, r, i) {
		let a = this.ctx;
		if (a.save(), a.strokeStyle = i, a.fillStyle = i, a.lineWidth = 1.6, a.lineCap = "round", e === "climate") a.strokeRect(t - r, n - r * .55, r * 2, r * 1.1), a.beginPath(), a.moveTo(t - r * .5, n + r * .7), a.lineTo(t - r * .5, n + r), a.moveTo(t + r * .2, n + r * .7), a.lineTo(t + r * .2, n + r), a.stroke();
		else if (e === "purifier") a.strokeRect(t - r * .55, n - r, r * 1.1, r * 2), a.beginPath(), a.arc(t, n, r * .22, 0, Math.PI * 2), a.stroke();
		else if (e === "cam") a.beginPath(), a.arc(t, n, r * .55, 0, Math.PI * 2), a.stroke(), a.beginPath(), a.arc(t, n, r * .18, 0, Math.PI * 2), a.fill();
		else if (e === "washer") a.strokeRect(t - r * .75, n - r, r * 1.5, r * 2), a.beginPath(), a.arc(t, n + r * .15, r * .45, 0, Math.PI * 2), a.stroke();
		else {
			a.beginPath(), a.arc(t, n, r * .42, 0, Math.PI * 2), a.stroke();
			for (let e = 0; e < 6; e++) {
				let i = e / 6 * Math.PI * 2;
				a.beginPath(), a.moveTo(t + Math.cos(i) * r * .68, n + Math.sin(i) * r * .68), a.lineTo(t + Math.cos(i) * r, n + Math.sin(i) * r), a.stroke();
			}
		}
		a.restore();
	}
	_drawLabels() {
		let { ctx: e } = this, t = this.view;
		if (!(t.k * .6 <= 9)) for (let n of this.plan.rooms) {
			let [r, i] = l(n.poly), [a, o] = this.toScreen(r, i), s = c(n.poly), u = this.sel?.type === "room" && this.sel.id === n.id;
			e.textAlign = "center", e.lineWidth = 3, e.strokeStyle = "rgba(6,9,14,.75)", e.font = `500 ${Math.min(15, Math.max(10, t.k * .22))}px system-ui,-apple-system,sans-serif`, e.strokeText(n.name, a, o - 2), e.fillStyle = u ? M.sel : M.text, e.fillText(n.name, a, o - 2), e.font = `400 ${Math.min(12, Math.max(9, t.k * .16))}px system-ui,-apple-system,sans-serif`, e.strokeText(s.toFixed(1) + " m²", a, o + 13), e.fillStyle = M.textDim, e.fillText(s.toFixed(1) + " m²", a, o + 13);
		}
	}
	_drawChain() {
		let e = this.chain;
		if (!e.length) return;
		let { ctx: n } = this, r = this.view.k, i = Math.max(3, t * r);
		n.globalAlpha = this.tool === "wall" ? 1 : .45, e.length > 1 && (n.save(), n.lineCap = "butt", n.lineJoin = "miter", n.strokeStyle = "rgba(251,191,36,.20)", n.lineWidth = i, n.beginPath(), e.forEach(([e, t], r) => {
			let [i, a] = this.toScreen(e, t);
			r ? n.lineTo(i, a) : n.moveTo(i, a);
		}), n.stroke(), n.strokeStyle = "rgba(251,191,36,.92)", n.lineWidth = 1.8, n.beginPath(), e.forEach(([e, t], r) => {
			let [i, a] = this.toScreen(e, t);
			r ? n.lineTo(i, a) : n.moveTo(i, a);
		}), n.stroke(), n.restore());
		let a = e[e.length - 1];
		if (this.cursor) {
			let [e, t] = this.toScreen(a[0], a[1]), [r, i] = this.toScreen(this.cursor.x, this.cursor.y), s = o(a[0], a[1], this.cursor.x, this.cursor.y);
			n.save(), n.strokeStyle = M.draft, n.lineWidth = 2, n.setLineDash([7, 5]), n.beginPath(), n.moveTo(e, t), n.lineTo(r, i), n.stroke(), n.setLineDash([]);
			let c = s.toFixed(2) + " m", l = N[this.cursor.kind] || "";
			n.font = "600 11px ui-monospace,Menlo,monospace";
			let u = n.measureText(c).width, d = u + (l ? n.measureText(l).width + 20 : 14), f = r + 14, p = i - 26;
			n.fillStyle = "rgba(12,14,20,.92)", this._roundRect(f, p, d, 21, 6), n.fill(), n.strokeStyle = "rgba(251,191,36,.35)", n.lineWidth = 1, n.stroke(), n.fillStyle = M.draft, n.textAlign = "left", n.fillText(c, f + 7, p + 14), l && (n.fillStyle = "rgba(94,234,212,.9)", n.font = "500 10px system-ui,sans-serif", n.fillText(l, f + 11 + u, p + 14)), n.restore();
		}
		let s = e.length >= 3 && this.cursor && o(this.cursor.x, this.cursor.y, e[0][0], e[0][1]) * r < 16;
		e.forEach(([e, t], r) => {
			let [i, a] = this.toScreen(e, t);
			n.beginPath(), n.arc(i, a, 3.5, 0, Math.PI * 2), n.fillStyle = "#0b1220", n.fill(), n.strokeStyle = M.draft, n.lineWidth = 2, n.stroke(), r === 0 && (n.beginPath(), n.arc(i, a, s ? 11 : 7, 0, Math.PI * 2), n.strokeStyle = s ? "#5eead4" : "rgba(251,191,36,.6)", n.lineWidth = s ? 2.4 : 1.4, n.stroke(), s && (n.fillStyle = "#5eead4", n.font = "600 11px system-ui,sans-serif", n.textAlign = "center", n.fillText("点击闭合", i, a - 16)));
		}), n.globalAlpha = 1;
	}
	_drawScaleHint() {
		let { ctx: e } = this, t = this.view, n = 1;
		for (let e of [
			.2,
			.5,
			1,
			2,
			5,
			10
		]) if (n = e, e * t.k >= 70) break;
		let r = n * t.k, i = this.h - 22;
		e.strokeStyle = "rgba(180,200,225,.55)", e.lineWidth = 1.5, e.beginPath(), e.moveTo(18, i), e.lineTo(18 + r, i), e.moveTo(18, i - 4), e.lineTo(18, i + 4), e.moveTo(18 + r, i - 4), e.lineTo(18 + r, i + 4), e.stroke(), e.fillStyle = M.textDim, e.font = "11px system-ui,sans-serif", e.textAlign = "center", e.fillText(n + " m", 18 + r / 2, i - 8);
	}
	_bind() {
		let e = this.cv;
		e.addEventListener("pointerdown", (e) => this._down(e)), e.addEventListener("pointermove", (e) => this._move(e)), e.addEventListener("pointerup", (e) => this._up(e)), e.addEventListener("pointercancel", (e) => this._up(e)), e.addEventListener("pointerleave", () => {
			this.cursor = null, this.requestRender();
		}), e.addEventListener("wheel", (t) => {
			t.preventDefault();
			let n = e.getBoundingClientRect();
			this.zoomAt(t.clientX - n.left, t.clientY - n.top, t.deltaY < 0 ? 1.12 : 1 / 1.12);
		}, { passive: !1 }), e.addEventListener("dblclick", () => {
			this.tool === "wall" && this.chain.length >= 3 && this._closeChain();
		}), e.addEventListener("contextmenu", (e) => e.preventDefault()), window.addEventListener("keydown", this._kd = (e) => this._key(e));
	}
	_local(e) {
		let t = this.cv.getBoundingClientRect();
		return [e.clientX - t.left, e.clientY - t.top];
	}
	_hitTest(e, t) {
		let n = this.plan;
		if (!n) return null;
		let r = this.view.k > 0 ? 1 / this.view.k : .02, i = Math.max(.05, 9 * r), a = Math.max(.05, 8 * r), c = null;
		for (let r of n.rooms) for (let n = 0; n < r.poly.length; n++) {
			let a = o(e, t, r.poly[n][0], r.poly[n][1]);
			a <= i && (!c || a < c.d) && (c = {
				type: "vertex",
				id: r.id,
				roomId: r.id,
				index: n,
				d: a
			});
		}
		if (c) return c;
		for (let r of n.openings) {
			let a = b(n, r);
			if (a && s(e, t, a.ax, a.ay, a.bx, a.by).d <= i) return {
				type: "opening",
				id: r.id,
				roomId: r.roomId,
				edge: r.edge
			};
		}
		for (let r of n.devices) if (o(e, t, r.x, r.y) <= .34) return {
			type: "device",
			id: r.id
		};
		for (let r of n.furniture) {
			let n = -(r.rot || 0) * Math.PI / 180, i = e - r.x, a = t - r.y, o = i * Math.cos(n) - a * Math.sin(n), s = i * Math.sin(n) + a * Math.cos(n);
			if (Math.abs(o) <= r.w / 2 && Math.abs(s) <= r.d / 2) return {
				type: "furniture",
				id: r.id
			};
		}
		let l = p(f(n.rooms), e, t, .6);
		if (l) {
			let e = Math.max(a, (l.wall.t || .24) / 2 + 2 * r);
			if (l.d <= e) return {
				type: "wall",
				id: `${l.wall.roomId}:${l.wall.edge}`,
				roomId: l.wall.roomId,
				edge: l.wall.edge
			};
		}
		let u = d(n, e, t);
		return u ? {
			type: "room",
			id: u.id
		} : null;
	}
	_snapAt(e, t) {
		let n = this.chain, r = n.length ? n[n.length - 1] : null, i = this.view.k > 0 ? 1 / this.view.k : 0, a = x(this.plan, e, t, .1, .02, {
			guides: this.guides,
			from: r,
			px: i,
			points: n.length > 1 ? n.slice(0, -1) : []
		});
		return this.hot = a.hot || null, a;
	}
	_down(e) {
		let [t, n] = this._local(e);
		try {
			this.cv.setPointerCapture?.(e.pointerId);
		} catch {}
		if (e.button === 2) {
			if (this.tool === "wall" && this.chain.length) {
				this._undoStep();
				return;
			}
			this._pan = {
				sx: t,
				sy: n,
				tx: this.view.tx,
				ty: this.view.ty
			}, this.cv.style.cursor = "grabbing";
			return;
		}
		if (e.button === 1 || this._space) {
			this._pan = {
				sx: t,
				sy: n,
				tx: this.view.tx,
				ty: this.view.ty
			}, this.cv.style.cursor = "grabbing";
			return;
		}
		if (e.button !== 0) return;
		let [r, a] = this.toWorld(t, n);
		if (this.tool === "calibrate") {
			if (this.calibPts = this.calibPts || [], this.calibPts.length >= 2 && (this.calibPts = []), this.calibPts.push([r, a]), this.calibPts.length === 2) {
				let [e, t] = this.calibPts[0];
				this.emit("calibrated", o(e, t, r, a));
			}
			this.requestRender();
			return;
		}
		if (this.tool === "wall") {
			this._press = {
				sx: t,
				sy: n,
				n: this.chain.length
			}, this._commit(r, a);
			return;
		}
		if (this.tool === "door" || this.tool === "window") {
			let e = p(f(this.plan.rooms), r, a, .5);
			if (e) {
				let t = {
					id: i("o"),
					roomId: e.wall.roomId,
					edge: e.wall.edge,
					t: e.t,
					w: this.tool === "door" ? .9 : 1.4,
					type: this.tool,
					h: this.tool === "door" ? 2.1 : 1.4
				};
				this.plan.openings.push(t), this.select({
					type: "opening",
					id: t.id
				}), this._changed();
			}
			return;
		}
		let s = this._hitTest(r, a);
		if (s) {
			if (this.select(s), s.type === "vertex") this._drag = {
				kind: "vertex",
				...s,
				ox: r,
				oy: a
			};
			else if (s.type === "room") {
				let e = this.plan.rooms.find((e) => e.id === s.id);
				this._drag = {
					kind: "room",
					id: s.id,
					ox: r,
					oy: a,
					poly: e.poly.map((e) => [...e])
				};
			} else if (s.type === "furniture" || s.type === "device") {
				let e = (s.type === "furniture" ? this.plan.furniture : this.plan.devices).find((e) => e.id === s.id);
				this._drag = {
					kind: s.type,
					id: s.id,
					ox: r,
					oy: a,
					x0: e.x,
					y0: e.y
				};
			} else if (s.type === "opening") {
				let e = this.plan.openings.find((e) => e.id === s.id);
				e && (this._drag = {
					kind: "opening",
					id: s.id,
					wall: s.wall,
					t0: e.t,
					w: e.w
				});
			}
		} else this.select(null), this._pan = {
			sx: t,
			sy: n,
			tx: this.view.tx,
			ty: this.view.ty
		};
	}
	_move(e) {
		let [t, n] = this._local(e), [r, i] = this.toWorld(t, n);
		if (this._pan) this.view.tx = this._pan.tx + (t - this._pan.sx), this.view.ty = this._pan.ty + (n - this._pan.sy), this.requestRender();
		else if (this.tool === "wall" || this.tool === "calibrate") {
			let e = this.tool === "wall" ? this._snapAt(r, i) : {
				x: r,
				y: i,
				kind: "free"
			};
			this.cursor = {
				x: e.x,
				y: e.y,
				kind: e.kind
			}, this.cv.style.cursor = "crosshair", this.requestRender();
		} else if (this._drag) {
			let e = this._drag;
			if (e.kind === "vertex") {
				let t = this.plan.rooms.find((t) => t.id === e.roomId);
				if (t) {
					let n = x(this.plan, r, i, .1, .02, {
						guides: this.guides,
						px: 1 / this.view.k
					});
					t.poly[e.index] = [n.x, n.y];
				}
			} else if (e.kind === "room") {
				let t = r - e.ox, n = i - e.oy, a = this.plan.rooms.find((t) => t.id === e.id);
				a && (a.poly = e.poly.map(([e, r]) => [e + t, r + n]));
			} else if (e.kind === "furniture" || e.kind === "device") {
				let t = (e.kind === "furniture" ? this.plan.furniture : this.plan.devices).find((t) => t.id === e.id);
				t && (t.x = e.x0 + (r - e.ox), t.y = e.y0 + (i - e.oy));
			} else if (e.kind === "opening") {
				let t = e.wall, n = s(r, i, t.x1, t.y1, t.x2, t.y2), a = this.plan.openings.find((t) => t.id === e.id);
				a && (a.t = Math.max(.02, Math.min(.98, n.t)));
			}
			this.requestRender();
		} else if (this.tool === "select") this.cv.style.cursor = this._hitTest(r, i) ? "pointer" : "default";
		else if (this.tool === "door" || this.tool === "window") {
			let e = p(f(this.plan.rooms), r, i, .5);
			this.cv.style.cursor = e ? "copy" : "default";
		}
	}
	_up(e) {
		if (this._pan) this._pan = null, this.cv.style.cursor = "", this.requestRender();
		else if (this._drag) this._drag = null, this._changed();
		else if (this._press && this.tool === "wall") {
			let t = this._press;
			if (this._press = null, e) {
				let [n, r] = this._local(e);
				if (Math.hypot(n - t.sx, r - t.sy) > 10) {
					let [e, t] = this.toWorld(n, r);
					this._commit(e, t);
				}
			}
		}
	}
	_key(e) {
		if (!this.cv.isConnected) return;
		let t = (e.target?.tagName || "").toLowerCase();
		t !== "input" && t !== "textarea" && (e.key === " " && (this._space = !0), e.key === "Escape" && (this.chain.length ? this._clearChain(!0) : this.select(null)), e.key === "Enter" && this.tool === "wall" && this.chain.length >= 3 && this._closeChain(), (e.key === "Delete" || e.key === "Backspace") && this.sel && (e.preventDefault(), this.deleteSelected()));
	}
	_commit(e, t) {
		let n = this._snapAt(e, t), r = this.chain;
		if (!r.length) {
			r.push([n.x, n.y]), this.emit("chain", r), this.requestRender();
			return;
		}
		let i = r[r.length - 1], a = Math.max(.02, 5 / this.view.k);
		if (o(i[0], i[1], n.x, n.y) < a) return;
		let s = Math.max(.06, 16 / this.view.k), c = ne(r, [n.x, n.y], s);
		c ? this._addRoom(c.poly, c.keep) : (r.push([n.x, n.y]), this.emit("chain", r), this.requestRender());
	}
	_undoStep() {
		this.chain.length && (this.chain.pop(), this.emit("chain", this.chain), this.requestRender());
	}
	_clearChain(e) {
		this.chain.length && (this.chain = [], this.emit("chain", this.chain, e ? "cancel" : "clear"), this.requestRender());
	}
	_closeChain() {
		this.chain.length < 3 || this._addRoom(this.chain.map((e) => [...e]), []);
	}
	_addRoom(e, t) {
		let n = Math.max(.015, 2 / this.view.k), r = E(e, n), a = c(r);
		if (r.length < 3 || a < .4) {
			this.emit("chain", this.chain, "tiny"), this.chain = t || [], this.requestRender();
			return;
		}
		r = ee(r, f(this.plan.rooms)), c(r) >= .4 && (r = E(r, n));
		let o = {
			id: i("r"),
			name: "房间" + (this.plan.rooms.length + 1),
			poly: r
		};
		this.plan.rooms.push(o), y(this.plan, o), this.chain = t || [], this.emit("chain", this.chain, "closed"), this.select({
			type: "room",
			id: o.id
		}), this._changed(), this.emit("room-added", o);
	}
	deleteSelected() {
		let e = this.sel;
		if (!e) return;
		let t = this.plan;
		if (e.type === "room") t.rooms = t.rooms.filter((t) => t.id !== e.id), t.openings = t.openings.filter((t) => t.roomId !== e.id), t.devices = t.devices.filter((t) => !t.roomId || t.roomId !== e.id);
		else if (e.type === "opening") t.openings = t.openings.filter((t) => t.id !== e.id);
		else if (e.type === "furniture") t.furniture = t.furniture.filter((t) => t.id !== e.id);
		else if (e.type === "device") t.devices = t.devices.filter((t) => t.id !== e.id);
		else if (e.type === "vertex") {
			let n = t.rooms.find((t) => t.id === e.roomId);
			n && n.poly.length > 3 && n.poly.splice(e.index, 1);
		}
		this.select(null), this._changed();
	}
	addFurniture(e, t, n) {
		let r = k.find((t) => t.kind === e);
		if (!r) return;
		let a = {
			id: i("f"),
			kind: e,
			name: r.name,
			x: t ?? 0,
			y: n ?? 0,
			rot: 0,
			w: r.w,
			d: r.d
		};
		return this.plan.furniture.push(a), this.select({
			type: "furniture",
			id: a.id
		}), this._changed(), a;
	}
	addDevice(e, t, n, r) {
		let a = {
			id: i("d"),
			entity: e,
			name: t?.name || e,
			art: t?.art || "lamp",
			dom: t?.dom || "switch",
			x: n ?? 0,
			y: r ?? 0,
			rot: 0
		};
		return this.plan.devices.push(a), this.select({
			type: "device",
			id: a.id
		}), this._changed(), a;
	}
	applyCalibration(e, t) {
		if (!(t > 0) || !(e > 0)) return;
		let n = e / t;
		Math.abs(n - 1) < 1e-4 || (F(this.plan, 1 / n), this.plan.base.ppm && (this.plan.base.ppm *= n), this.refreshGuides(), this._changed(), this.requestRender());
	}
	rotateSelected(e) {
		let t = this.sel;
		if (!t) return;
		let n = (t.type === "furniture" ? this.plan.furniture : t.type === "device" ? this.plan.devices : null)?.find((e) => e.id === t.id);
		n && (n.rot = ((n.rot || 0) + e) % 360, this._changed(), this.requestRender());
	}
	_changed() {
		this.emit("change", this.plan), this.requestRender();
	}
};
function F(e, t) {
	for (let n of e.rooms) n.poly = n.poly.map(([e, n]) => [e * t, n * t]);
	for (let n of e.furniture) n.x *= t, n.y *= t, n.w *= t, n.d *= t;
	for (let n of e.devices) n.x *= t, n.y *= t;
	return e;
}
// src/floor3d/extract.js
function I(e, t, n) {
	let r = new Uint8Array(t * n);
	for (let t = 0, n = 0; n < r.length; t += 4, n++) r[n] = e[t] * 77 + e[t + 1] * 150 + e[t + 2] * 29 >> 8;
	return r;
}
function L(e, t, n) {
	let r = t + 1, i = new Float64Array(r * (n + 1));
	for (let a = 0; a < n; a++) {
		let n = 0, o = a * t, s = (a + 1) * r, c = a * r;
		for (let r = 0; r < t; r++) n += e[o + r], i[s + r + 1] = i[c + r + 1] + n;
	}
	return i;
}
function re(e, t, n, r, i, a) {
	let o = t + 1, s = Math.max(0, r - a), c = Math.min(t, r + a + 1), l = Math.max(0, i - a), u = Math.min(n, i + a + 1);
	return (e[u * o + c] - e[l * o + c] - e[u * o + s] + e[l * o + s]) / ((c - s) * (u - l));
}
function R(e, t, n, r, i) {
	let a = new Uint8Array(t * n), o = new Uint8Array(t * n), s = (e, t) => +(i ? e > 0 : e === t);
	for (let i = 0; i < n; i++) {
		let n = i * t, o = 0;
		for (let i = 0; i <= Math.min(r, t - 1); i++) o += e[n + i];
		for (let i = 0; i < t; i++) {
			let c = Math.min(t - 1, i + r) - Math.max(0, i - r) + 1;
			a[n + i] = s(o, c);
			let l = i + r + 1, u = i - r;
			l < t && (o += e[n + l]), u >= 0 && (o -= e[n + u]);
		}
	}
	for (let e = 0; e < t; e++) {
		let i = 0;
		for (let o = 0; o <= Math.min(r, n - 1); o++) i += a[o * t + e];
		for (let c = 0; c < n; c++) {
			let l = Math.min(n - 1, c + r) - Math.max(0, c - r) + 1;
			o[c * t + e] = s(i, l);
			let u = c + r + 1, d = c - r;
			u < n && (i += a[u * t + e]), d >= 0 && (i -= a[d * t + e]);
		}
	}
	return o;
}
var z = (e, t, n, r) => R(R(e, t, n, r, !0), t, n, r, !1);
function B(e, t, n, r, i, a) {
	let o = new Float64Array(t * n);
	for (let i = 0; i < t * n; i++) o[i] = +(e[i] < r);
	let s = L(o, t, n), c = new Uint8Array(t * n);
	for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) c[e * t + r] = +(re(s, t, n, r, e, i) > a);
	return c;
}
function V(e, t, n, r = {}) {
	let i = Math.max(.5, t / 1e3), a = Math.max(4, Math.min(16, r.radius ?? Math.round(7 * i)));
	return z(B(e, t, n, r.dark ?? 238, a, r.density ?? .42), t, n, 2);
}
function H(e, t, n, r = {}) {
	let i = r.ppm || t / 12, a = Math.max(.5, t / 1e3), o = Math.max(4, Math.min(16, r.radiusLines ?? Math.round(5 * a)));
	return z(B(e, t, n, r.darkLines ?? 170, o, r.densityLines ?? .16), t, n, Math.max(2, Math.round(r.close ?? .22 * i)));
}
function U(e, t, n, r = {}) {
	let i = V(e, t, n, r), a = H(e, t, n, r), o = new Uint8Array(t * n);
	for (let e = 0; e < t * n; e++) o[e] = i[e] | a[e] ? 1 : 0;
	return o;
}
function W(e, t, n, r = {}) {
	let i = r.ppm || 100, a = (r.minLen ?? .55) * i, o = Math.max(2, (r.bandTol ?? .05) * i), s = (r.maxThick ?? .9) * i, c = e, l = t, u = n;
	if (r.axis === "v") {
		c = new Uint8Array(t * n);
		for (let r = 0; r < n; r++) for (let i = 0; i < t; i++) c[i * n + r] = e[r * t + i];
		l = n, u = t;
	}
	let d = [], f = [];
	for (let e = 0; e < u; e++) {
		let t = e * l, n = [], r = 0;
		for (; r < l;) if (c[t + r]) {
			let e = r;
			for (; r < l && c[t + r];) r++;
			r - e >= a && n.push([e, r]);
		} else r++;
		for (let e of d) e.hit = !1;
		for (let [t, r] of n) {
			let n = null;
			for (let i of d) if (!(i.hit || e - i.ylast > 1) && Math.abs(i.a - t) <= o && Math.abs(i.b - r) <= o) {
				n = i;
				break;
			}
			n ? (n.hit = !0, n.ylast = e, n.sum += e, n.n++, n.a = t, n.b = r) : d.push({
				a: t,
				b: r,
				ylast: e,
				sum: e,
				n: 1,
				hit: !0
			});
		}
		let i = e === u - 1;
		for (let e = d.length - 1; e >= 0; e--) {
			let t = d[e];
			(!t.hit || i) && (t.n >= 2 && t.n <= s && f.push({
				a: t.a,
				b: t.b,
				c: t.sum / t.n,
				t: t.n
			}), d.splice(e, 1));
		}
	}
	return f.map((e) => r.axis === "v" ? {
		x1: e.c,
		y1: e.a,
		x2: e.c,
		y2: e.b,
		t: e.t
	} : {
		x1: e.a,
		y1: e.c,
		x2: e.b,
		y2: e.c,
		t: e.t
	});
}
function G(e, t = {}) {
	let n = t.ppm || 100, r = (t.maxGap ?? .3) * n, i = Math.max(2, (t.cTol ?? .13) * n), a = [];
	for (let t of ["h", "v"]) {
		let o = [];
		for (let n of e) {
			let e = Math.abs(n.y1 - n.y2) < 1e-6;
			if (t === "h" !== e) continue;
			let r = e ? Math.min(n.x1, n.x2) : Math.min(n.y1, n.y2), i = e ? Math.max(n.x1, n.x2) : Math.max(n.y1, n.y2);
			o.push({
				a: r,
				b: i,
				c: e ? n.y1 : n.x1,
				t: n.t,
				w: i - r
			});
		}
		o.sort((e, t) => e.c - t.c || e.a - t.a);
		let s = [], c = () => {
			if (!s.length) return;
			let e = s.reduce((e, t) => e + t.w, 0), i = s.reduce((e, t) => e + t.c * t.w, 0) / e;
			s.sort((e, t) => e.a - t.a);
			let o = {
				a: s[0].a,
				b: s[0].b,
				t: s[0].t
			}, c = [];
			for (let e = 1; e < s.length; e++) {
				let t = s[e];
				t.a <= o.b + r ? (o.b = Math.max(o.b, t.b), o.t = Math.max(o.t, t.t)) : (c.push(o), o = {
					a: t.a,
					b: t.b,
					t: t.t
				});
			}
			c.push(o);
			for (let e of c) e.b - e.a < .2 * n || a.push(t === "h" ? {
				x1: e.a,
				y1: i,
				x2: e.b,
				y2: i,
				t: e.t
			} : {
				x1: i,
				y1: e.a,
				x2: i,
				y2: e.b,
				t: e.t
			});
			s = [];
		}, l = null;
		for (let e of o) l != null && Math.abs(e.c - l) > i && c(), s.length || (l = e.c), s.push(e);
		c();
	}
	return K(a, t);
}
function K(e, t = {}) {
	let n = t.ppm || 100, r = (t.fuseC ?? .45) * n, i = (t.fuseRange ?? .25) * n, a = e.length;
	if (!a) return e;
	let o = e.map((e) => {
		let t = Math.abs(e.y1 - e.y2) < 1e-6;
		return {
			hz: t,
			t: e.t,
			a: t ? Math.min(e.x1, e.x2) : Math.min(e.y1, e.y2),
			b: t ? Math.max(e.x1, e.x2) : Math.max(e.y1, e.y2),
			c: t ? e.y1 : e.x1,
			used: !1
		};
	}), s = [];
	for (let e = 0; e < a; e++) {
		let t = o[e];
		if (t.used) continue;
		let n = [t];
		t.used = !0;
		for (let s = e + 1; s < a; s++) {
			let e = o[s];
			e.used || e.hz !== t.hz || Math.abs(e.a - t.a) > i || Math.abs(e.b - t.b) > i || Math.abs(e.c - t.c) > r || (n.push(e), e.used = !0);
		}
		let c = n.reduce((e, t) => e + t.t, 0) || 1, l = n.reduce((e, t) => e + t.c * t.t, 0) / c, u = Math.min(...n.map((e) => e.a)), d = Math.max(...n.map((e) => e.b));
		s.push(t.hz ? {
			x1: u,
			y1: l,
			x2: d,
			y2: l,
			t: Math.min(...n.map((e) => e.t))
		} : {
			x1: l,
			y1: u,
			x2: l,
			y2: d,
			t: Math.min(...n.map((e) => e.t))
		});
	}
	return s;
}
function q(e, t) {
	let n = Math.abs(e.y1 - e.y2) < 1e-6, r = Math.abs(t.y1 - t.y2) < 1e-6;
	if (n && r) {
		let n = Math.max(0, Math.max(Math.min(e.x1, e.x2), Math.min(t.x1, t.x2)) - Math.min(Math.max(e.x1, e.x2), Math.max(t.x1, t.x2)));
		return Math.hypot(n, Math.abs(e.y1 - t.y1));
	}
	if (!n && !r) {
		let n = Math.max(0, Math.max(Math.min(e.y1, e.y2), Math.min(t.y1, t.y2)) - Math.min(Math.max(e.y1, e.y2), Math.max(t.y1, t.y2)));
		return Math.hypot(Math.abs(e.x1 - t.x1), n);
	}
	let i = n ? e : t, a = n ? t : e, o = Math.min(i.x1, i.x2), s = Math.max(i.x1, i.x2), c = Math.min(a.y1, a.y2), l = Math.max(a.y1, a.y2), u = Math.max(0, Math.max(o - a.x1, a.x1 - s)), d = Math.max(0, Math.max(c - i.y1, i.y1 - l));
	return Math.hypot(u, d);
}
function J(e, t = {}) {
	let n = t.ppm || 100, r = (t.reach ?? .25) * n, i = (t.minClusterLen ?? 2) * n, a = e.length, o = (e) => Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
	if (a < 2) return e.filter((e) => o(e) >= i);
	let s = new Int32Array(a);
	for (let e = 0; e < a; e++) s[e] = e;
	let c = (e) => {
		for (; s[e] !== e;) s[e] = s[s[e]], e = s[e];
		return e;
	};
	for (let t = 0; t < a; t++) for (let n = t + 1; n < a; n++) {
		if (q(e[t], e[n]) > r) continue;
		let i = c(t), a = c(n);
		i !== a && (s[i] = a);
	}
	let l = /* @__PURE__ */ new Map();
	for (let t = 0; t < a; t++) {
		let n = c(t);
		l.set(n, (l.get(n) || 0) + o(e[t]));
	}
	return e.filter((e, t) => (l.get(c(t)) || 0) >= i);
}
function Y(e, t, n, r) {
	let i = [...W(e, t, n, {
		...r,
		axis: "h"
	}), ...W(e, t, n, {
		...r,
		axis: "v"
	})];
	return i = G(i, r), J(i, r);
}
var X = (e) => Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
function ie(e, t, n, r = {}) {
	let i = r.ppm && r.ppm > 0 ? r.ppm : t / 12, a = {
		...r,
		ppm: i
	}, o = r.path || "auto", s;
	o === "lines" ? s = Y(H(e, t, n, a), t, n, a) : o === "fill" ? s = Y(V(e, t, n, a), t, n, a) : (s = Y(V(e, t, n, a), t, n, a), s.reduce((e, t) => e + X(t), 0) < 4 * i && (s = Y(U(e, t, n, a), t, n, a))), s.sort((e, t) => X(t) - X(e));
	let c = r.maxSegs ?? 600;
	return s.length > c && (s = s.slice(0, c)), s.map((e) => ({
		x1: Math.round(e.x1 * 10) / 10,
		y1: Math.round(e.y1 * 10) / 10,
		x2: Math.round(e.x2 * 10) / 10,
		y2: Math.round(e.y2 * 10) / 10,
		t: Math.round(e.t * 10) / 10
	}));
}
// src/floor3d/index.js
var Z = "ha-dash.floorplan.v1", ae = 1600, oe = 1400, se = [
	{
		key: "select",
		label: "选择",
		icon: "<path d=\"m5 3 14 8-6 1.6L10 19z\"/>"
	},
	{
		key: "wall",
		label: "描墙",
		icon: "<path d=\"M3 6h18v3H3z\"/><path d=\"M6 9v11M18 9v11\"/>"
	},
	{
		key: "door",
		label: "门",
		icon: "<path d=\"M5 21V4h11v17\"/><circle cx=\"13\" cy=\"13\" r=\"1\"/>"
	},
	{
		key: "window",
		label: "窗",
		icon: "<rect x=\"3\" y=\"6\" width=\"18\" height=\"12\" rx=\"1\"/><path d=\"M12 6v12\"/>"
	},
	{
		key: "furniture",
		label: "家具",
		icon: "<path d=\"M3 10V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3\"/><path d=\"M3 10v7h18v-7\"/>"
	},
	{
		key: "device",
		label: "设备",
		icon: "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 3v3M12 18v3M3 12h3M18 12h3\"/>"
	},
	{
		key: "calibrate",
		label: "标定",
		icon: "<path d=\"M4 16 16 4l4 4L8 20H4z\"/>"
	}
], ce = class {
	constructor(e, t = {}) {
		this.host = e, this.opts = t, this.mode = "edit", this.tool = "select", this.plan = ue(), this.editor = null, this.scene = null, this.sel = null, this._hass = null, this._calibDist = 0, this._wallHint = "", this._showGuides = !0, this._busy = !1, this.el = document.createElement("div"), this.el.className = "fh", this.el.innerHTML = "\n      <style>.fh{z-index:20;background:var(--bg);color:var(--text);animation:fhIn .28s var(--ease);flex-direction:column;display:flex;position:absolute;top:0;bottom:0;left:0;right:0}.fh[hidden]{display:none}@keyframes fhIn{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}.fh-top{border-bottom:1px solid var(--line);background:linear-gradient(#131316,#0c0c0e);flex:none;align-items:center;gap:10px;height:54px;padding:0 14px;display:flex}.fh-seg{border:1px solid var(--line);background:#0e0e10;border-radius:11px;gap:2px;padding:3px;display:flex}.fh-seg button{color:var(--text-2);cursor:pointer;transition:.18s var(--ease);background:0 0;border:0;border-radius:8px;padding:7px 13px;font:500 12.5px/1 inherit}.fh-seg button.on{color:var(--text);background:#26262b;box-shadow:inset 0 1px #ffffff0d}.fh-seg button:hover:not(.on){color:var(--text)}.fh-tools{align-items:center;gap:3px;display:flex}.fh-tools[hidden]{display:none}.fh-tools[data-for=edit] button{white-space:nowrap;color:var(--text-3);cursor:pointer;transition:.16s var(--ease);background:0 0;border:1px solid #0000;border-radius:10px;flex-direction:column;flex:none;align-items:center;gap:3px;padding:5px 9px;font:400 10px/1 inherit;display:flex}.fh-tools[data-for=edit] button svg{fill:none;stroke:currentColor;stroke-width:1.7px;stroke-linecap:round;stroke-linejoin:round;width:17px;height:17px}.fh-tools[data-for=edit] button:hover{color:var(--text-2);background:#ffffff0a}.fh-tools[data-for=edit] button.on{color:var(--warm);background:#ffd9a01a;border-color:#ffd9a038}.fh-tools[data-for=view] button{border:1px solid var(--line);color:var(--text-2);cursor:pointer;background:#141417;border-radius:9px;padding:8px 12px;font:500 12px/1 inherit}.fh-spacer{flex:1}.fh-btn{border:1px solid var(--line);color:var(--text-2);cursor:pointer;background:#141417;border-radius:10px;width:34px;height:34px;font-size:16px}.fh-btn:hover{color:var(--text);border-color:var(--line-2)}.fh-body{flex:1;min-height:0;display:flex;position:relative}.fh-stage{background:#06070b;flex:1;min-width:0;position:relative;overflow:hidden}.fh-stage canvas{display:block;position:absolute;top:0;bottom:0;left:0;right:0}.fe-canvas{outline:none}.fh-loading{color:var(--text-3);place-items:center;font-size:13px;display:grid;position:absolute;top:0;bottom:0;left:0;right:0}.fh-panel{overscroll-behavior:contain;border-left:1px solid var(--line);background:#0d0d0f;flex:0 0 270px;width:270px;padding:14px 14px 60px;overflow-y:auto}.fh-panel[hidden]{display:none}.fh-sec{margin-bottom:20px}.fh-sec h4{color:var(--text-2);letter-spacing:.04em;margin-bottom:10px;font:600 12px/1 inherit}.fh-note{color:var(--text-3);margin-bottom:10px;font-size:11.5px;line-height:1.7}.fh-note b{color:var(--text-2);font-weight:600}.fh-mini{margin:-2px 0 8px;font-size:10.5px;line-height:1.55}.fh-keys{flex-wrap:wrap;gap:6px;display:flex}.fh-keys span{border:1px solid var(--line);color:var(--text-3);background:#131316;border-radius:8px;align-items:center;gap:5px;padding:5px 8px;font:400 10.5px/1 inherit;display:inline-flex}.fh-keys i{color:var(--warm);background:#ffd9a01a;border-radius:5px;padding:3px 5px;font:600 10px/1 ui-monospace,Menlo,monospace}.fh-wide[disabled]{opacity:.45;cursor:default}.fh-kv{border-bottom:1px solid #ffffff0a;justify-content:space-between;align-items:baseline;gap:10px;padding:7px 0;font-size:12px;display:flex}.fh-kv span{color:var(--text-3)}.fh-kv b{color:var(--text);font-weight:500}.fh-kv b.mono{text-overflow:ellipsis;white-space:nowrap;max-width:150px;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;overflow:hidden}.fh-field{color:var(--text-3);flex-direction:column;gap:7px;margin:12px 0;font-size:12px;display:flex}.fh-field input[type=range]{width:100%;accent-color:var(--warm-deep)}.fh-field input[type=checkbox]{width:16px;height:16px;accent-color:var(--warm-deep)}.fh-input{border:1px solid var(--line-2);width:100%;color:var(--text);background:#131316;border-radius:9px;outline:none;padding:8px 10px;font:500 13px/1.3 inherit}.fh-input:focus{border-color:#ffd9a066}.fh-wide{cursor:pointer;border:1px solid var(--line-2);width:100%;color:var(--text-2);transition:.16s var(--ease);background:#17171a;border-radius:10px;margin-top:6px;padding:10px;font:500 12.5px/1 inherit}.fh-wide:hover{color:var(--text);background:#1d1d21}.fh-wide.primary{color:#20170a;background:linear-gradient(#f0c78b,#d9a762);border-color:#0000;font-weight:600}.fh-danger{cursor:pointer;color:#ff9a9a;background:#ff5a5a14;border:1px solid #ff787838;border-radius:10px;width:100%;margin-top:10px;padding:9px;font:500 12px/1 inherit}.fh-danger:hover{background:#ff5a5a24}.fh-row2{gap:8px;margin:10px 0;display:flex}.fh-row2 button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);background:#17171a;border-radius:9px;flex:1;padding:8px;font:500 12px/1 inherit}.fh-row2 button:hover{color:var(--text);background:#1d1d21}.fh-grid2{grid-template-columns:1fr 1fr;gap:6px;display:grid}.fh-chip{cursor:pointer;text-align:left;border:1px solid var(--line);color:var(--text-2);transition:.14s var(--ease);background:#131316;border-radius:10px;flex-direction:column;align-items:flex-start;gap:3px;padding:9px 10px;font:500 12px/1.2 inherit;display:flex}.fh-chip i{color:var(--text-3);font-size:10px;font-style:normal}.fh-chip:hover{border-color:var(--line-2);color:var(--text);background:#1a1a1e}.fh-list{flex-direction:column;gap:4px;display:flex}.fh-row{cursor:pointer;text-align:left;width:100%;color:var(--text-2);background:#121215;border:1px solid #0000;border-radius:9px;align-items:center;gap:8px;padding:9px 10px;font:500 12px/1 inherit;display:flex}.fh-row:hover{color:var(--text);background:#19191d}.fh-row .dot{background:#4a5568;border-radius:50%;flex:none;width:6px;height:6px}.fh-row.done .dot{background:var(--ok)}.fh-row .nm{text-overflow:ellipsis;white-space:nowrap;flex:1;overflow:hidden}.fh-row .rm{color:var(--text-3);font-size:10.5px}.fh-stats{border-top:1px solid var(--line);grid-template-columns:repeat(3,1fr);gap:8px;padding-top:12px;display:grid}.fh-stats div{text-align:center}.fh-stats b{color:var(--text);font:600 17px/1 inherit;display:block}.fh-stats span{color:var(--text-3);font-size:10.5px}.fh-hint{border:1px solid var(--line-2);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);max-width:min(560px,100% - 300px);color:var(--text-2);opacity:0;pointer-events:none;transition:.24s var(--ease);background:#141418eb;border-radius:99px;padding:9px 16px;font:450 12px/1.4 inherit;position:absolute;bottom:18px;left:50%;transform:translate(-50%,10px)}.fh-hint.on{opacity:1;transform:translate(-50%)}.fh-menu{z-index:40;border:1px solid var(--line-2);background:#151518;border-radius:12px;flex-direction:column;min-width:168px;padding:5px;display:flex;position:absolute;top:58px;right:14px;box-shadow:0 16px 40px #0009}.fh-menu[hidden]{display:none}.fh-menu button{text-align:left;cursor:pointer;color:var(--text-2);background:0 0;border:0;border-radius:8px;padding:9px 11px;font:500 12.5px/1 inherit}.fh-menu button:hover{color:var(--text);background:#1e1e22}.fh-menu button.danger{color:#ff9a9a}.fh-menu button.danger:hover{background:#ff5a5a1f}.fh-calib{z-index:50;border:1px solid var(--line-2);color:var(--text-2);background:#16161a;border-radius:12px;align-items:center;gap:8px;padding:10px 12px;font:450 12.5px/1 inherit;display:flex;position:absolute;bottom:70px;left:50%;transform:translate(-50%);box-shadow:0 16px 40px #0009}.fh-calib input{border:1px solid var(--line-2);width:90px;color:var(--text);background:#0f0f12;border-radius:8px;outline:none;padding:7px 9px;font:500 13px/1 inherit}.fh-calib button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);background:#1d1d21;border-radius:8px;padding:7px 13px;font:500 12px/1 inherit}.fh-calib button.primary{color:#20170a;background:linear-gradient(#f0c78b,#d9a762);border-color:#0000;font-weight:600}.fh-dev{z-index:30;border:1px solid var(--line-2);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);width:230px;animation:devIn .22s var(--ease);background:#121216f0;border-radius:16px;padding:14px;position:absolute;bottom:16px;right:16px;box-shadow:0 18px 44px #0000008c}@keyframes devIn{0%{opacity:0;transform:translateY(8px)scale(.98)}to{opacity:1;transform:none}}.fh-dev[hidden]{display:none}.fh-dev-head{justify-content:space-between;align-items:center;margin-bottom:4px;display:flex}.fh-dev-head b{font:600 13.5px/1 inherit}.fh-dev-head button{color:var(--text-3);cursor:pointer;background:0 0;border:0;padding:2px 4px;font-size:13px}.fh-dev-head button:hover{color:var(--text)}.fh-dev-sub{color:var(--text-3);margin-bottom:12px;font-size:11.5px}.floor3d-canvas{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0}.fh-seg2{gap:6px;display:flex}.fh-seg2 button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);transition:.14s var(--ease);background:#17171a;border-radius:9px;flex:1;padding:8px 6px;font:500 12px/1 inherit}.fh-seg2 button:hover{color:var(--text);background:#1d1d21}.fh-seg2 button.on{color:var(--warm);background:#ffd9a021;border-color:#ffd9a075}.fh-num{align-items:center;gap:8px;display:flex}.fh-num input[type=number]{border:1px solid var(--line-2);min-width:0;color:var(--text);background:#101014;border-radius:8px;flex:1;padding:7px 9px;font:500 12px/1 ui-monospace,Menlo,monospace}.fh-num input[type=number]:focus{border-color:#ffd9a066;outline:none}.fh-num em{color:var(--text-3);flex:none;font-size:11px;font-style:normal}.fh-num input[type=color]{border:1px solid var(--line-2);cursor:pointer;background:#101014;border-radius:8px;flex:none;width:40px;height:30px;padding:0}.fh-pick{color:var(--warm);border-color:#ffd9a066}</style>\n      <header class=\"fh-top\">\n        <div class=\"fh-seg\">\n          <button data-mode=\"edit\" class=\"on\">编辑户型</button>\n          <button data-mode=\"view\">3D 展示</button>\n        </div>\n        <div class=\"fh-tools\" data-for=\"edit\"></div>\n        <div class=\"fh-spacer\"></div>\n        <div class=\"fh-tools\" data-for=\"view\" hidden>\n          <button data-act=\"fit\" title=\"居中\">⤢ 居中</button>\n        </div>\n        <button class=\"fh-btn\" data-act=\"menu\" title=\"更多\">⋯</button>\n      </header>\n      <div class=\"fh-body\">\n        <div class=\"fh-stage\"></div>\n        <aside class=\"fh-panel\"></aside>\n      </div>\n      <div class=\"fh-hint\"></div>\n      <div class=\"fh-menu\" hidden>\n        <button data-act=\"base\">导入参考底图</button>\n        <button data-act=\"export\">导出 JSON</button>\n        <button data-act=\"import\">导入 JSON</button>\n        <button data-act=\"clear\" class=\"danger\">清空户型</button>\n      </div>\n      <input type=\"file\" accept=\"image/*\" class=\"fh-file img\" hidden>\n      <input type=\"file\" accept=\"application/json,.json\" class=\"fh-file json\" hidden>\n      <div class=\"fh-dev\" hidden></div>\n    ", e.appendChild(this.el), this.el.__fh = this, this.$stage = this.el.querySelector(".fh-stage"), this.$panel = this.el.querySelector(".fh-panel"), this.$hint = this.el.querySelector(".fh-hint"), this.$menu = this.el.querySelector(".fh-menu"), this.$dev = this.el.querySelector(".fh-dev"), this._bindChrome(), this._renderTools(), this.enterEdit(), this.renderPanel();
	}
	setHass(e) {
		this._hass = e, this.editor?.setHass(e), this.scene?.setHass(e), this.sel?.type === "device" && this._paintDeviceCard();
	}
	destroy() {
		this.editor?.destroy(), this.scene?.dispose(), this.el.remove();
	}
	_bindChrome() {
		this.el.querySelectorAll("[data-mode]").forEach((e) => {
			e.onclick = () => this.setMode(e.dataset.mode);
		}), this.el.querySelector("[data-act=\"menu\"]").onclick = (e) => {
			e.stopPropagation(), this.$menu.hidden = !this.$menu.hidden;
		}, document.addEventListener("click", this._docClick = (e) => {
			!this.$menu.hidden && !this.$menu.contains(e.target) && (this.$menu.hidden = !0);
		}), this.$menu.querySelectorAll("[data-act]").forEach((e) => {
			e.onclick = () => {
				this.$menu.hidden = !0, this._menuAction(e.dataset.act);
			};
		}), this.el.querySelector("[data-act=\"fit\"]").onclick = () => this.scene?.fitView();
		let e = this.el.querySelector(".fh-file.img");
		e.onchange = () => this._importImage(e.files?.[0]);
		let t = this.el.querySelector(".fh-file.json");
		t.onchange = () => this._importJson(t.files?.[0]);
	}
	_renderTools() {
		let e = this.el.querySelector(".fh-tools[data-for=\"edit\"]");
		e.innerHTML = se.map((e) => `
      <button data-tool="${e.key}" title="${e.label}" class="${e.key === this.tool ? "on" : ""}">
        <svg viewBox="0 0 24 24">${e.icon}</svg><span>${e.label}</span>
      </button>`).join(""), e.querySelectorAll("[data-tool]").forEach((e) => {
			e.onclick = () => this.setTool(e.dataset.tool);
		});
	}
	setTool(e) {
		this.mode !== "edit" && this.setMode("edit"), this.tool = e, this.el.querySelectorAll(".fh-tools[data-for=\"edit\"] [data-tool]").forEach((t) => t.classList.toggle("on", t.dataset.tool === e)), this.editor?.setTool(e), e === "calibrate" ? this._hint("在底图上点两个点，量一段已知长度的墙") : e === "wall" ? this._hint("左键点一下落点 → 移动 → 再点一下完成一段；回到起点自动闭合成房间") : e === "door" || e === "window" ? this._hint("点一下已有的墙，把" + (e === "door" ? "门" : "窗") + "插进去") : this._hint(""), this.renderPanel();
	}
	setMode(e) {
		e === this.mode && (e === "edit" ? this.editor : this.scene) || (this.mode = e, this.el.querySelectorAll("[data-mode]").forEach((t) => t.classList.toggle("on", t.dataset.mode === e)), this.el.querySelector(".fh-tools[data-for=\"edit\"]").hidden = e !== "edit", this.el.querySelector(".fh-tools[data-for=\"view\"]").hidden = e !== "view", e === "edit" ? this.enterEdit() : this.enterView(), this.renderPanel());
	}
	enterEdit() {
		this.exitView(), this.$stage.innerHTML = "", this.editor = new P(this.$stage), this.editor.setPlan(this.plan), this.editor.setHass(this._hass), this.editor.showGuides = this._showGuides, this.editor.setTool(this.tool), this.editor.on("change", (e) => {
			this.plan = e, $(e);
		}), this.editor.on("sel", (e) => {
			this.sel = e, this.renderPanel();
		}), this.editor.on("calibrated", (e) => this._askCalib(e)), this.editor.on("room-added", (e) => {
			this._hint(`「${e.name}」已生成，${c(e.poly).toFixed(1)} m²`), this.renderPanel(), setTimeout(() => this.$panel.querySelector("[data-room-name]")?.focus(), 60);
		}), this.editor.on("chain", (e) => {
			this.tool === "wall" && e.length && this._hint(e.length === 1 ? "移动鼠标定第二点；右键取消" : `已画 ${e.length - 1} 段，回到起点闭合 · 右键撤销一段 · Esc 取消`);
		}), this.editor.fitView();
		let e = this.plan.base;
		e?.src && (!e.walls?.length || e.wallsV !== 3) && this._extractBase();
	}
	exitEdit() {
		this.editor?.flushChain() && this._hint("画了一半的墙已首尾相连成房间，觉得不对可以删掉"), this.editor?.destroy(), this.editor = null;
	}
	async enterView() {
		this.exitEdit(), this.$stage.innerHTML = "<div class=\"fh-loading\">正在准备 3D 场景…</div>";
		try {
			let { FloorScene: e } = await import("./chunk-HzwLETaQ.js");
			this.$stage.innerHTML = "", this.scene = new e(this.$stage), this.scene.setPlan(this.plan), this.scene.setHass(this._hass), this.scene.onSelect = (e) => {
				this.sel = e, e?.type === "device" ? (this._paintDeviceCard(), this.scene.highlight(e.id)) : this._hideDeviceCard();
			};
		} catch (e) {
			this.$stage.innerHTML = `<div class="fh-loading">3D 场景加载失败：${String(e.message || e)}</div>`;
		}
	}
	exitView() {
		this.scene?.dispose(), this.scene = null, this._hideDeviceCard();
	}
	renderPanel() {
		if (this.mode === "view") {
			this.$panel.hidden = !0;
			return;
		}
		this.$panel.hidden = !1;
		let e = this.plan, t = this.sel, n = "";
		if (this.tool === "furniture") n = `<div class="fh-sec"><h4>家具库</h4>
        <p class="fh-note">点一项放进当前视野中心，再拖动摆位</p>
        <div class="fh-grid2">${k.map((e) => `<button class="fh-chip" data-furn="${e.kind}">${e.name}<i>${e.w}×${e.d}</i></button>`).join("")}
        </div></div>`;
		else if (this.tool === "device") n = `<div class="fh-sec"><h4>设备</h4>
        <p class="fh-note">点一项放进当前视野中心</p>
        <div class="fh-list">${(this.opts.devices || []).map((t) => `<button class="fh-row ${e.devices.some((e) => e.entity === t.id) ? "done" : ""}" data-dev="${t.id}">
            <span class="dot"></span><span class="nm">${Q(t.name)}</span>
            <span class="rm">${Q(t.room || "")}</span></button>`).join("")}</div></div>`;
		else if (t?.type === "room") {
			let r = e.rooms.find((e) => e.id === t.id);
			r && (n = `<div class="fh-sec"><h4>房间</h4>
          <label class="fh-field"><span>名称</span>
            <input class="fh-input" data-room-name value="${Q(r.name)}" placeholder="客厅 / 主卧 / 厨房…"></label>
          <div class="fh-kv"><span>面积</span><b>${c(r.poly).toFixed(2)} m²</b></div>
          <div class="fh-kv"><span>墙体</span><b>${r.poly.length} 段</b></div>
          <button class="fh-danger" data-act="del">删除这个房间</button>
        </div>`);
		} else if (t?.type === "wall") {
			let r = e.rooms.find((e) => e.id === t.roomId);
			if (r) {
				let i = h(e, r, t.edge), a = r.poly.length, o = t.edge % a, s = [r.poly[o], r.poly[(o + 1) % a]], c = e.rooms.filter((e) => {
					if (e === r) return !1;
					let t = e.poly.length;
					for (let n = 0; n < t; n++) if (g(s, [e.poly[n], e.poly[(n + 1) % t]])) return !0;
					return !1;
				});
				n = `<div class="fh-sec"><h4>墙体</h4>
          <div class="fh-kv"><span>长度</span><b>${i.len.toFixed(2)} m</b></div>
          <label class="fh-field"><span>墙厚</span>
            <div class="fh-num">
              <input type="number" min="0.06" max="0.6" step="0.01" value="${i.t.toFixed(2)}" data-wall-t>
              <em>m</em>
            </div>
          </label>
          <label class="fh-field"><span>墙高</span>
            <div class="fh-num">
              <input type="number" min="0.5" max="3" step="0.05" value="${i.h.toFixed(2)}" data-wall-h>
              <em>m</em>
            </div>
          </label>
          <div class="fh-field"><span>类型</span>
            <div class="fh-seg2">
              <button data-wall-kind="solid" class="${i.kind === "solid" ? "on" : ""}">实体墙</button>
              <button data-wall-kind="virtual" class="${i.kind === "virtual" ? "on" : ""}">透明边界</button>
            </div>
          </div>
          <label class="fh-field"><span>墙面颜色</span>
            <div class="fh-num">
              <input type="color" value="${i.color || "#c9d6e8"}" data-wall-color>
              <em>${i.color ? "自定义" : "默认"}</em>
            </div>
          </label>
          <p class="fh-note fh-mini">透明边界用来切开放区域（客餐厅）：参与房间围合，但 3D 里不砌墙。</p>
          ${c.length ? `<p class="fh-note fh-mini">这堵墙同时也是「${c.map((e) => Q(e.name)).join("、")}」的边界，改哪边都一样。</p>` : ""}
        </div>`;
			}
		} else if (t?.type === "furniture") {
			let r = e.furniture.find((e) => e.id === t.id);
			r && (n = `<div class="fh-sec"><h4>家具</h4>
          <div class="fh-kv"><span>类型</span><b>${Q(r.name || r.kind)}</b></div>
          <div class="fh-kv"><span>尺寸</span><b>${r.w.toFixed(2)} × ${r.d.toFixed(2)} m</b></div>
          <div class="fh-row2">
            <button data-act="rot-l">↺ 左转 15°</button>
            <button data-act="rot-r">↻ 右转 15°</button>
          </div>
          <button class="fh-danger" data-act="del">删除</button>
        </div>`);
		} else if (t?.type === "device") {
			let r = e.devices.find((e) => e.id === t.id);
			r && (n = `<div class="fh-sec"><h4>设备</h4>
          <div class="fh-kv"><span>名称</span><b>${Q(r.name)}</b></div>
          <div class="fh-kv"><span>实体</span><b class="mono">${Q(r.entity)}</b></div>
          <div class="fh-row2">
            <button data-act="rot-l">↺</button>
            <button data-act="rot-r">↻</button>
          </div>
          <button class="fh-danger" data-act="del">从户型中移除</button>
        </div>`);
		} else if (t?.type === "opening") {
			let r = e.openings.find((e) => e.id === t.id);
			r && (n = `<div class="fh-sec"><h4>${r.type === "door" ? "门" : "窗"}</h4>
          <div class="fh-kv"><span>宽度</span><b>${r.w.toFixed(2)} m</b></div>
          <label class="fh-field"><span>调整宽度</span>
            <input type="range" min="0.5" max="3" step="0.05" value="${r.w}" data-op-w></label>
          <button class="fh-danger" data-act="del">删除</button>
        </div>`);
		} else if (this.tool === "calibrate") {
			let t = e.base.ppm;
			n = `<div class="fh-sec"><h4>比例尺</h4>
        <p class="fh-note">在底图上点两个点，量一段有标注的墙，然后填真实长度。</p>
        ${t ? `<div class="fh-kv"><span>当前</span><b>${t.toFixed(1)} px/m</b></div>` : ""}
      </div>`;
		} else n = e.rooms.length ? `<div class="fh-sec"><h4>房间</h4>
        <p class="fh-note">点一个房间可以改名、看面积</p>
        <div class="fh-list">${e.rooms.map((e, t) => `
          <button class="fh-row" data-pick-room="${e.id}">
            <span class="dot" style="background:${j(t)}"></span>
            <span class="nm">${Q(e.name)}</span>
            <span class="rm">${c(e.poly).toFixed(1)} m²</span>
          </button>`).join("")}</div>
      </div>` : e.base.src ? "<div class=\"fh-sec\"><h4>开始</h4>\n        <p class=\"fh-note\">底图就位。切到「描墙」，照着青色墙线一段段点过去。</p>\n      </div>" : "<div class=\"fh-sec\"><h4>开始</h4>\n        <p class=\"fh-note\">① 导入户型图当参考底图<br>② 标定比例尺<br>③ 用「描墙」沿着墙一段段点<br>④ 切到 3D 展示</p>\n        <button class=\"fh-wide primary\" data-act=\"base\">导入参考底图</button>\n      </div>";
		if (this.tool === "wall" && (n += "<div class=\"fh-sec\"><h4>描墙</h4>\n        <p class=\"fh-note\">\n          左键<b>点一下</b>落点 → 移动鼠标 → <b>再点一下</b>这段墙就定了，<br>\n          端点自动接上一段。<br>\n          回到起点会<b>自动闭合</b>，围出来的就是一个房间。\n        </p>\n        <div class=\"fh-keys\">\n          <span><i>右键</i>撤销一段</span>\n          <span><i>Esc</i>整条取消</span>\n          <span><i>回车</i>强制闭合</span>\n        </div>\n      </div>"), e.base.src) {
			let t = e.base.walls?.length || 0;
			n += `<div class="fh-sec"><h4>参考底图</h4>
        <label class="fh-field"><span>显示识别出的墙线</span>
          <input type="checkbox" data-guide-show ${this._showGuides ? "checked" : ""}></label>
        <div class="fh-kv"><span>自动提墙</span><b>${this._busy ? "识别中…" : t ? t + " 段" : "未识别"}</b></div>
        ${this._wallHint ? `<p class="fh-note fh-mini">${Q(this._wallHint)}</p>` : ""}
        <button class="fh-wide" data-act="redetect" ${this._busy ? "disabled" : ""}>${t ? "重新识别墙线" : "识别墙线"}</button>
        <label class="fh-field"><span>透明度</span>
          <input type="range" min="0" max="1" step="0.02" value="${e.base.opacity}" data-base-op></label>
        <label class="fh-field"><span>左右翻转</span>
          <input type="checkbox" data-base-flip ${e.base.flipX ? "checked" : ""}></label>
        <button class="fh-wide" data-act="base">更换底图</button>
      </div>`;
		}
		n += `<div class="fh-sec fh-stats">
      <div><b>${e.rooms.length}</b><span>房间</span></div>
      <div><b>${e.devices.length}</b><span>设备</span></div>
      <div><b>${e.furniture.length}</b><span>家具</span></div>
    </div>`, this.$panel.innerHTML = n, this._bindPanel();
	}
	_bindPanel() {
		let e = this.plan, t = this.sel;
		this.$panel.querySelectorAll("[data-pick-room]").forEach((e) => {
			e.onclick = () => {
				this.editor?.select({
					type: "room",
					id: e.dataset.pickRoom
				});
			};
		}), this.$panel.querySelectorAll("[data-furn]").forEach((e) => {
			e.onclick = () => {
				let t = this._viewCenter();
				this.editor.addFurniture(e.dataset.furn, t[0], t[1]), this.renderPanel();
			};
		}), this.$panel.querySelectorAll("[data-dev]").forEach((e) => {
			e.onclick = () => {
				let t = e.dataset.dev, n = (this.opts.devices || []).find((e) => e.id === t), r = this._viewCenter();
				this.editor.addDevice(t, n, r[0], r[1]), this.renderPanel();
			};
		});
		let n = this.$panel.querySelector("[data-room-name]");
		n && (n.oninput = () => {
			let r = e.rooms.find((e) => e.id === t.id);
			r && (r.name = n.value, $(e), this.editor?.requestRender());
		});
		let r = this.$panel.querySelector("[data-op-w]");
		r && (r.oninput = () => {
			let n = e.openings.find((e) => e.id === t.id);
			n && (n.w = parseFloat(r.value), $(e), this.editor?.requestRender());
		});
		let i = (e, t) => {
			this.setWallProp(e).length > 1 && this._hint(`${t}已同步到相邻房间的同一堵墙`);
		}, a = this.$panel.querySelector("[data-wall-t]");
		a && (a.onchange = () => {
			let n = parseFloat(a.value), r = e.rooms.find((e) => e.id === t.roomId);
			Number.isFinite(n) && n >= .04 && n <= 1 ? i({ t: Math.round(n * 1e3) / 1e3 }, "墙厚") : r && (a.value = h(e, r, t.edge).t.toFixed(2));
		});
		let o = this.$panel.querySelector("[data-wall-h]");
		o && (o.onchange = () => {
			let n = parseFloat(o.value), r = e.rooms.find((e) => e.id === t.roomId);
			Number.isFinite(n) && n >= .3 && n <= 4 ? i({ h: Math.round(n * 100) / 100 }, "墙高") : r && (o.value = h(e, r, t.edge).h.toFixed(2));
		}), this.$panel.querySelectorAll("[data-wall-kind]").forEach((e) => {
			e.onclick = () => i({ kind: e.dataset.wallKind }, "墙体类型");
		});
		let s = this.$panel.querySelector("[data-wall-color]");
		s && (s.onchange = () => i({ color: s.value }, "墙面颜色"));
		let c = this.$panel.querySelector("[data-base-op]");
		c && (c.oninput = () => {
			e.base.opacity = parseFloat(c.value), $(e), this.editor?.requestRender();
		});
		let l = this.$panel.querySelector("[data-base-flip]");
		l && (l.onchange = () => {
			e.base.flipX = l.checked, $(e), this.editor?.refreshGuides(), this.editor?.requestRender();
		});
		let u = this.$panel.querySelector("[data-guide-show]");
		u && (u.onchange = () => {
			this._showGuides = u.checked, this.editor && (this.editor.showGuides = u.checked, this.editor.requestRender());
		}), this.$panel.querySelectorAll("[data-act]").forEach((e) => {
			let t = e.dataset.act;
			e.onclick = () => {
				t === "del" ? this.editor?.deleteSelected() : t === "rot-l" ? this.editor?.rotateSelected(-15) : t === "rot-r" ? this.editor?.rotateSelected(15) : t === "base" ? this._menuAction("base") : t === "redetect" && this._extractBase(!0), this.renderPanel();
			};
		});
	}
	_viewCenter() {
		let e = this.editor;
		return e ? e.toWorld(e.w / 2, e.h / 2) : [0, 0];
	}
	setWallProp(e) {
		let t = this.sel;
		if (t?.type !== "wall") return [];
		let n = v(this.plan, t.roomId, t.edge, e);
		return $(this.plan), this.editor?.requestRender(), this.renderPanel(), n;
	}
	async _extractBase(e) {
		let t = this.plan.base;
		if (t?.src && !this._busy && (e || !t.walls?.length || t.wallsV !== 3)) {
			this._busy = !0, this._wallHint = "", this._hint("正在识别底图里的墙体…"), this.renderPanel(), await new Promise((e) => setTimeout(e, 24));
			try {
				let e = await le(t.src, t.ppm || t.w / 12);
				t.walls = e.map((e) => [
					Math.round(e.x1),
					Math.round(e.y1),
					Math.round(e.x2),
					Math.round(e.y2)
				]), t.wallsV = 3, t.wallsPpm = t.ppm || 0, $(this.plan), this.editor?.refreshGuides(), this._wallHint = e.length ? "青色线就是认出来的墙，描墙时会自动吸过去" : "这张图没认出墙线，可以直接手描", this._hint(e.length ? `识别到 ${e.length} 段墙线` : "没认出墙线，可以直接手描"), this.renderPanel();
			} catch (e) {
				this._wallHint = "识别失败：" + String(e.message || e), this.renderPanel();
			} finally {
				this._busy = !1;
			}
		}
	}
	_menuAction(e) {
		if (e === "base") this.el.querySelector(".fh-file.img").click();
		else if (e === "import") this.el.querySelector(".fh-file.json").click();
		else if (e === "export") this._exportJson();
		else if (e === "clear") {
			if (!confirm("清空整个户型？底图也会一起清掉。")) return;
			this.plan = a(), $(this.plan), this.editor?.setPlan(this.plan), this.renderPanel();
		}
	}
	async _importImage(e) {
		if (!e) return;
		let t = await de(e, ae), n = new Image();
		n.onload = () => {
			this.plan.base = {
				src: t,
				w: n.naturalWidth,
				h: n.naturalHeight,
				opacity: .16,
				flipX: !1,
				ppm: 0,
				walls: [],
				wallsV: 0,
				wallsPpm: 0
			}, $(this.plan), this.mode !== "edit" && this.setMode("edit"), this.editor?.setPlan(this.plan), this.editor?.fitView(), this.setTool("calibrate"), this._hint("底图已就位。先标定比例尺：在图上点两个点，量一段有尺寸标注的墙"), this._extractBase();
		}, n.src = t;
	}
	_askCalib(e) {
		this._calibDist = e;
		let t = document.createElement("div");
		t.className = "fh-calib", t.innerHTML = "<span>这段墙实际多长？</span>\n      <input type=\"number\" step=\"0.01\" min=\"0.1\" placeholder=\"米\" autofocus>\n      <button class=\"primary\">确定</button>\n      <button data-x>取消</button>", this.el.appendChild(t);
		let n = t.querySelector("input");
		n.focus();
		let r = () => {
			let e = parseFloat(n.value), r = !1;
			if (e > 0) {
				let t = this.plan.base.ppm;
				this.editor.applyCalibration(this._calibDist, e), this.plan = this.editor.plan, r = Math.abs(this.plan.base.ppm - t) / (t || 1) > .2, $(this.plan), this._hint(`比例尺已标定：1 米 ≈ ${(e > 0 ? this._calibDist / e : 0).toFixed(1)} 世界单位`);
			}
			t.remove(), this.setTool("select"), this.renderPanel(), r && this._extractBase(!0);
		};
		t.querySelector(".primary").onclick = r, t.querySelector("[data-x]").onclick = () => t.remove(), n.onkeydown = (e) => {
			e.key === "Enter" && r();
		};
	}
	_exportJson() {
		let e = new Blob([D(this.plan)], { type: "application/json" }), t = document.createElement("a");
		t.href = URL.createObjectURL(e), t.download = (this.plan.name || "floorplan") + ".json", t.click(), setTimeout(() => URL.revokeObjectURL(t.href), 2e3);
	}
	_importJson(e) {
		if (!e) return;
		let t = new FileReader();
		t.onload = () => {
			try {
				this.plan = O(String(t.result)), $(this.plan), this.editor?.setPlan(this.plan), this.editor?.fitView(), this.renderPanel();
			} catch (e) {
				alert("这个文件解析不了：" + e.message);
			}
		}, t.readAsText(e);
	}
	_paintDeviceCard() {
		let e = this.sel;
		if (e?.type !== "device") return;
		let t = this.plan.devices.find((t) => t.id === e.id);
		if (!t) return;
		let n = this._hass?.states?.[t.entity], r = n?.state === "on" || n && ![
			"off",
			"unavailable",
			"unknown"
		].includes(n.state) && t.dom === "climate", i = n && n.state !== "unavailable", a = n?.attributes?.brightness, o = n?.attributes?.color_temp_kelvin;
		this.$dev.hidden = !1, this.$dev.innerHTML = `
      <div class="fh-dev-head"><b>${Q(t.name)}</b>
        <button data-act="close">✕</button></div>
      <div class="fh-dev-sub">${i ? r ? "已开启" : "已关闭" : "离线"}</div>
      ${n?.attributes?.brightness == null ? "" : `
        <label class="fh-field"><span>亮度</span>
          <input type="range" min="1" max="255" value="${a ?? 128}" data-bright></label>`}
      ${o == null ? "" : `
        <label class="fh-field"><span>色温</span>
          <input type="range" min="2000" max="6500" step="50" value="${o}" data-kt></label>`}
      <button class="fh-wide ${r ? "" : "primary"}" data-act="toggle">${r ? "关闭" : "开启"}</button>
    `, this.$dev.querySelector("[data-act=\"close\"]").onclick = () => this._hideDeviceCard(), this.$dev.querySelector("[data-act=\"toggle\"]").onclick = () => {
			let e = t.entity.split(".")[0], r = n?.state === "on" ? "turn_off" : "turn_on";
			this.opts.callService?.(e, r, { entity_id: t.entity });
		};
		let s = this.$dev.querySelector("[data-bright]");
		s && (s.oninput = () => this.opts.callService?.("light", "turn_on", {
			entity_id: t.entity,
			brightness: parseInt(s.value, 10)
		}));
		let c = this.$dev.querySelector("[data-kt]");
		c && (c.oninput = () => this.opts.callService?.("light", "turn_on", {
			entity_id: t.entity,
			color_temp_kelvin: parseInt(c.value, 10)
		}));
	}
	_hideDeviceCard() {
		this.$dev && (this.$dev.hidden = !0);
	}
	_hint(e) {
		this.$hint.textContent = e || "", this.$hint.classList.toggle("on", !!e);
	}
};
function Q(e) {
	return String(e ?? "").replace(/[&<>"']/g, (e) => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	})[e]);
}
function le(e, t) {
	return new Promise((n, r) => {
		let i = new Image();
		i.onerror = () => r(/* @__PURE__ */ Error("底图读不出来")), i.onload = () => {
			try {
				let e = i.naturalWidth, r = i.naturalHeight, a = Math.min(1, oe / Math.max(e, r)), o = Math.max(8, Math.round(e * a)), s = Math.max(8, Math.round(r * a)), c = document.createElement("canvas");
				c.width = o, c.height = s;
				let l = c.getContext("2d", { willReadFrequently: !0 });
				l.drawImage(i, 0, 0, o, s);
				let u = l.getImageData(0, 0, o, s).data, d = ie(I(u, o, s), o, s, { ppm: (t || e / 12) * (o / e) }), f = e / o;
				n(d.map((e) => ({
					x1: e.x1 * f,
					y1: e.y1 * f,
					x2: e.x2 * f,
					y2: e.y2 * f,
					t: e.t * f
				})));
			} catch (e) {
				r(e);
			}
		}, i.src = e;
	});
}
function $(e) {
	try {
		localStorage.setItem(Z, D(e));
	} catch {}
}
function ue() {
	try {
		let e = localStorage.getItem(Z);
		if (e) return O(e);
	} catch {}
	return a();
}
function de(e, t) {
	return new Promise((n, r) => {
		let i = new FileReader();
		i.onerror = r, i.onload = () => {
			let e = new Image();
			e.onerror = r, e.onload = () => {
				let r = Math.min(1, t / Math.max(e.naturalWidth, e.naturalHeight)), i = Math.round(e.naturalWidth * r), a = Math.round(e.naturalHeight * r), o = document.createElement("canvas");
				o.width = i, o.height = a, o.getContext("2d").drawImage(e, 0, 0, i, a), n(o.toDataURL("image/jpeg", .86));
			}, e.src = String(i.result);
		}, i.readAsDataURL(e);
	});
}
export { ce as FloorHome, l as a, c as i, h as n, j as o, u as r, o as t };
