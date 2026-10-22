// src/floor3d/floor3d.css?inline
var e = 0;
function t(t = "e") {
	return t + Date.now().toString(36) + (e++).toString(36);
}
function n(e = "我的家") {
	return {
		v: 1,
		name: e,
		wallHeight: 1.2,
		ceiling: 2.8,
		base: {
			src: "",
			w: 0,
			h: 0,
			opacity: .14,
			flipX: !1,
			ppm: 0,
			ox: 0,
			oy: 0
		},
		rooms: [],
		openings: [],
		furniture: [],
		devices: []
	};
}
var r = (e, t, n, r) => Math.hypot(n - e, r - t);
function i(e, t, n, i, a, o) {
	let s = a - n, c = o - i, l = s * s + c * c;
	if (l < 1e-12) return {
		t: 0,
		x: n,
		y: i,
		d: r(e, t, n, i)
	};
	let u = ((e - n) * s + (t - i) * c) / l;
	u = Math.max(0, Math.min(1, u));
	let d = n + s * u, f = i + c * u;
	return {
		t: u,
		x: d,
		y: f,
		d: r(e, t, d, f)
	};
}
function a(e) {
	let t = 0;
	for (let n = 0, r = e.length; n < r; n++) {
		let [i, a] = e[n], [o, s] = e[(n + 1) % r];
		t += i * s - o * a;
	}
	return Math.abs(t / 2);
}
function o(e) {
	let t = 0, n = 0, r = 0;
	for (let i = 0, a = e.length; i < a; i++) {
		let [o, s] = e[i], [c, l] = e[(i + 1) % a], u = o * l - c * s;
		t += u, n += (o + c) * u, r += (s + l) * u;
	}
	return Math.abs(t) < 1e-12 ? [e.reduce((e, t) => e + t[0], 0) / e.length, e.reduce((e, t) => e + t[1], 0) / e.length] : [n / (3 * t), r / (3 * t)];
}
function s(e, t, n) {
	let r = !1;
	for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
		let [o, s] = n[i], [c, l] = n[a];
		s > t != l > t && e < (c - o) * (t - s) / (l - s) + o && (r = !r);
	}
	return r;
}
function c(e, t, n) {
	for (let r = e.rooms.length - 1; r >= 0; r--) if (s(t, n, e.rooms[r].poly)) return e.rooms[r];
	return null;
}
function l(e) {
	let t = [];
	return e.forEach((e) => {
		let n = e.poly;
		for (let i = 0; i < n.length; i++) {
			let [a, o] = n[i], [s, c] = n[(i + 1) % n.length], l = r(a, o, s, c);
			l < .02 || t.push({
				id: `${e.id}:${i}`,
				x1: a,
				y1: o,
				x2: s,
				y2: c,
				len: l,
				ang: Math.atan2(c - o, s - a),
				roomId: e.id,
				edge: i,
				t: e.wallT || .24
			});
		}
	}), t;
}
function u(e, t, n, r = .35) {
	let a = null;
	for (let o of e) {
		let e = i(t, n, o.x1, o.y1, o.x2, o.y2);
		e.d <= r && (!a || e.d < a.d) && (a = {
			wall: o,
			...e
		});
	}
	return a;
}
function d(e, t) {
	let n = e.rooms.find((e) => e.id === t.roomId);
	if (!n) return null;
	let i = n.poly, a = t.edge, o = i.length, [s, c] = i[a % o], [l, u] = i[(a + 1) % o], d = r(s, c, l, u);
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
function f(e, t, n, i = .1, a = .05) {
	let o = null;
	for (let a of e.rooms) for (let [e, s] of a.poly) {
		let a = r(t, n, e, s);
		a <= i && (!o || a < o.d) && (o = {
			x: e,
			y: s,
			d: a,
			kind: "vertex"
		});
	}
	if (o) return o;
	let s = u(l(e.rooms), t, n, i);
	return s ? {
		x: s.x,
		y: s.y,
		d: s.d,
		kind: "edge"
	} : a > 0 ? {
		x: Math.round(t / a) * a,
		y: Math.round(n / a) * a,
		d: i,
		kind: "grid"
	} : {
		x: t,
		y: n,
		d: 0,
		kind: "free"
	};
}
function p(e) {
	return JSON.stringify(e);
}
function m(e) {
	let t = JSON.parse(e), r = n(), i = {
		...r,
		...t
	};
	i.base = {
		...r.base,
		...t.base || {}
	};
	for (let e of [
		"rooms",
		"openings",
		"furniture",
		"devices"
	]) Array.isArray(i[e]) || (i[e] = []);
	return i;
}
var h = [
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
], g = [
	"#7dd3fc",
	"#a5b4fc",
	"#fca5a5",
	"#fcd34d",
	"#86efac",
	"#f9a8d4",
	"#fdba74",
	"#c4b5fd"
];
function _(e) {
	return g[e % g.length];
}
// src/floor3d/editor.js
var v = {
	bg: "#070a10",
	grid: "rgba(120,150,200,.07)",
	gridBold: "rgba(120,150,200,.13)",
	wall: "#c9d6e8",
	wallSide: "rgba(120,150,200,.30)",
	roomFill: "rgba(125,211,252,.09)",
	sel: "#5eead4",
	draft: "#fbbf24",
	door: "#f0a45c",
	window: "#6fd3ff",
	text: "rgba(230,240,255,.86)",
	textDim: "rgba(160,180,210,.55)",
	device: "#8ab4f8"
}, y = class {
	constructor(e) {
		this.host = e, this.plan = null, this.hass = null, this.tool = "select", this.pending = [], this.cursor = null, this.sel = null, this.view = {
			k: 60,
			tx: 0,
			ty: 0
		}, this.listeners = {
			change: [],
			sel: []
		}, this._drag = null, this._pan = null, this._raf = 0, this._imgs = /* @__PURE__ */ new Map();
		let t = document.createElement("canvas");
		t.className = "fe-canvas", t.tabIndex = 0, e.appendChild(t), this.cv = t, this.ctx = t.getContext("2d"), this._bind(), this._resize(), this._ro = new ResizeObserver(() => this._resize()), this._ro.observe(e);
	}
	destroy() {
		this._ro?.disconnect(), cancelAnimationFrame(this._raf), this.cv.remove();
	}
	on(e, t) {
		var n;
		return ((n = this.listeners)[e] || (n[e] = [])).push(t), this;
	}
	emit(e, ...t) {
		(this.listeners[e] || []).forEach((e) => e(...t));
	}
	setPlan(e) {
		return this.plan = e, this.pending = [], this.sel = null, this.requestRender(), this;
	}
	setHass(e) {
		this.hass = e, this.requestRender();
	}
	setTool(e) {
		this.tool !== e && (this.tool = e, e !== "room" && (this.pending = []), e !== "calibrate" && (this.calibPts = []), this.emit("tool", e), this.requestRender());
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
		if (!n && t?.base?.src && t.base.ppm && (r(0, 0), r(t.base.w / t.base.ppm, t.base.h / t.base.ppm)), !n) {
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
		e && (e.setTransform(n, 0, 0, n, 0, 0), e.clearRect(0, 0, this.w, this.h), e.fillStyle = v.bg, e.fillRect(0, 0, this.w, this.h), this._drawGrid(), this._drawBase(), this.plan && (this._drawRooms(), this._drawOpenings(), this._drawFurniture(), this._drawDevices(), this._drawLabels(), this._drawDraft(), this._drawCalib(), this._drawScaleHint()));
	}
	_drawCalib() {
		if (this.tool !== "calibrate" || !this.calibPts?.length) return;
		let { ctx: e } = this, [t, n] = this.calibPts[0], [r, i] = this.toScreen(t, n), [a, o] = this.cursor ? this.toScreen(this.cursor.x, this.cursor.y) : [r, i];
		e.save(), e.strokeStyle = v.draft, e.lineWidth = 2, e.setLineDash([7, 5]), e.beginPath(), e.moveTo(r, i), e.lineTo(a, o), e.stroke(), e.setLineDash([]);
		for (let [t, n] of [[r, i], [a, o]]) e.beginPath(), e.arc(t, n, 5, 0, Math.PI * 2), e.fillStyle = v.draft, e.fill();
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
			e.strokeStyle = Math.abs(i % 1) < 1e-6 ? v.gridBold : v.grid, e.beginPath(), e.moveTo(n, 0), e.lineTo(n, this.h), e.stroke();
		}
		for (let r = i; r <= o; r += n) {
			let n = Math.round(r * t.k + t.ty) + .5;
			e.strokeStyle = Math.abs(r % 1) < 1e-6 ? v.gridBold : v.grid, e.beginPath(), e.moveTo(0, n), e.lineTo(this.w, n), e.stroke();
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
		let n = e.ppm || e.w / 12, r = e.w / n, i = e.h / n, [a, o] = this.toScreen(0, 0), [s, c] = this.toScreen(r, i);
		this.ctx.save(), this.ctx.globalAlpha = e.opacity, e.flipX ? (this.ctx.translate(a, o), this.ctx.scale(-1, 1), this.ctx.drawImage(t, 0, 0, a - s, c - o)) : this.ctx.drawImage(t, a, o, s - a, c - o), this.ctx.restore();
	}
	_img(e) {
		if (this._imgs.has(e)) return this._imgs.get(e);
		let t = new Image();
		return t.src = e, this._imgs.set(e, t), t;
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
			let i = this.sel?.type === "room" && this.sel.id === n.id, a = _(r);
			this._pathPoly(n.poly), e.fillStyle = i ? "rgba(94,234,212,.18)" : this._tint(a, .11), e.fill();
			let o = Math.max(2.5, (n.wallT || .24) * t.k);
			e.strokeStyle = i ? "rgba(94,234,212,.95)" : v.wall, e.lineWidth = o, e.lineJoin = "miter", e.stroke(), (i || this._shouldShowHandles()) && n.poly.forEach(([t, n]) => {
				let [r, i] = this.toScreen(t, n);
				e.beginPath(), e.arc(r, i, 4.5, 0, Math.PI * 2), e.fillStyle = "#0b1220", e.fill(), e.strokeStyle = a, e.lineWidth = 2, e.stroke();
			});
		});
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
			let n = d(this.plan, t);
			if (!n) continue;
			let [i, a] = this.toScreen(n.ax, n.ay), [c, l] = this.toScreen(n.bx, n.by), u = this.sel?.type === "opening" && this.sel.id === t.id;
			if (t.type === "window") {
				e.strokeStyle = u ? v.sel : v.window, e.lineWidth = 3, e.beginPath(), e.moveTo(i, a), e.lineTo(c, l), e.stroke();
				let t = -(l - a), n = c - i, r = Math.hypot(t, n) || 1;
				e.lineWidth = 1, e.beginPath(), e.moveTo(i - t / r * 3, a - n / r * 3), e.lineTo(c - t / r * 3, l - n / r * 3), e.stroke();
			} else {
				e.strokeStyle = u ? v.sel : v.door, e.lineWidth = 2.5, e.beginPath(), e.moveTo(i, a), e.lineTo(c, l), e.stroke();
				let d = this.plan.rooms.find((e) => e.id === t.roomId), f = Math.hypot(c - i, l - a), p = Math.atan2(l - a, c - i), m = 1;
				if (d) {
					let [e, t] = o(d.poly), i = (e) => [n.ax + Math.cos(p + e * Math.PI / 4) * f, n.ay + Math.sin(p + e * Math.PI / 4) * f], a = i(1), c = i(-1), l = r(a[0], a[1], e, t), u = r(c[0], c[1], e, t), h = s(a[0], a[1], d.poly), g = s(c[0], c[1], d.poly);
					m = h && !g ? 1 : g && !h ? -1 : l <= u ? 1 : -1;
				}
				e.beginPath(), e.arc(i, a, f, p, p + m * Math.PI / 2, m < 0), e.strokeStyle = this._tint(u ? v.sel : v.door, .45), e.lineWidth = 1.2, e.stroke();
			}
		}
	}
	_drawFurniture() {
		let { ctx: e } = this;
		for (let t of this.plan.furniture) {
			let [n, r] = this.toScreen(t.x, t.y), i = t.w * this.view.k, a = t.d * this.view.k;
			e.save(), e.translate(n, r), e.rotate((t.rot || 0) * Math.PI / 180);
			let o = this.sel?.type === "furniture" && this.sel.id === t.id;
			e.fillStyle = o ? "rgba(94,234,212,.22)" : "rgba(150,170,200,.16)", e.strokeStyle = o ? v.sel : "rgba(160,185,215,.55)", e.lineWidth = 1.4, this._roundRect(-i / 2, -a / 2, i, a, Math.min(6, Math.min(i, a) * .18)), e.fill(), e.stroke(), this.view.k > 26 && (e.fillStyle = v.textDim, e.textAlign = "center", e.font = "10px system-ui,sans-serif", e.fillText(t.name || "", 0, 3)), e.restore();
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
			e.beginPath(), e.arc(r, i, c, 0, Math.PI * 2), e.fillStyle = o ? "rgba(110,190,255,.22)" : "rgba(140,160,190,.13)", e.fill(), e.strokeStyle = s ? v.sel : o ? "rgba(130,200,255,.85)" : "rgba(150,170,200,.5)", e.lineWidth = s ? 2.4 : 1.6, e.stroke(), this._deviceGlyph(n.art || n.dom, r, i, c * .62, o ? "#a8dcff" : "rgba(180,195,220,.7)"), n.name && this.view.k > 22 && (e.fillStyle = v.textDim, e.textAlign = "center", e.font = "10px system-ui,sans-serif", e.fillText(n.name, r, i + c + 12));
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
			let [r, i] = o(n.poly), [s, c] = this.toScreen(r, i), l = a(n.poly), u = this.sel?.type === "room" && this.sel.id === n.id;
			e.textAlign = "center", e.lineWidth = 3, e.strokeStyle = "rgba(6,9,14,.75)", e.font = `500 ${Math.min(15, Math.max(10, t.k * .22))}px system-ui,-apple-system,sans-serif`, e.strokeText(n.name, s, c - 2), e.fillStyle = u ? v.sel : v.text, e.fillText(n.name, s, c - 2), e.font = `400 ${Math.min(12, Math.max(9, t.k * .16))}px system-ui,-apple-system,sans-serif`, e.strokeText(l.toFixed(1) + " m²", s, c + 13), e.fillStyle = v.textDim, e.fillText(l.toFixed(1) + " m²", s, c + 13);
		}
	}
	_drawDraft() {
		if (this.tool !== "room" || !this.pending.length) return;
		let { ctx: e } = this, t = this.pending;
		if (e.strokeStyle = v.draft, e.lineWidth = 2, e.setLineDash([6, 4]), e.beginPath(), t.forEach(([t, n], r) => {
			let [i, a] = this.toScreen(t, n);
			r ? e.lineTo(i, a) : e.moveTo(i, a);
		}), this.cursor) {
			let [t, n] = this.toScreen(this.cursor.x, this.cursor.y);
			e.lineTo(t, n);
		}
		if (e.stroke(), e.setLineDash([]), t.forEach(([t, n], r) => {
			let [i, a] = this.toScreen(t, n);
			e.beginPath(), e.arc(i, a, r === 0 ? 6 : 4, 0, Math.PI * 2), e.fillStyle = r === 0 ? v.draft : "#0b1220", e.fill(), e.strokeStyle = v.draft, e.lineWidth = 2, e.stroke();
		}), t.length && this.cursor) {
			let [n, i] = t[t.length - 1], a = r(n, i, this.cursor.x, this.cursor.y), [o, s] = this.toScreen(this.cursor.x, this.cursor.y);
			e.fillStyle = v.draft, e.font = "11px system-ui,sans-serif", e.textAlign = "left", e.fillText(a.toFixed(2) + " m", o + 10, s - 8);
		}
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
		e.strokeStyle = "rgba(180,200,225,.55)", e.lineWidth = 1.5, e.beginPath(), e.moveTo(18, i), e.lineTo(18 + r, i), e.moveTo(18, i - 4), e.lineTo(18, i + 4), e.moveTo(18 + r, i - 4), e.lineTo(18 + r, i + 4), e.stroke(), e.fillStyle = v.textDim, e.font = "11px system-ui,sans-serif", e.textAlign = "center", e.fillText(n + " m", 18 + r / 2, i - 8);
	}
	_bind() {
		let e = this.cv;
		e.addEventListener("pointerdown", (e) => this._down(e)), e.addEventListener("pointermove", (e) => this._move(e)), e.addEventListener("pointerup", (e) => this._up(e)), e.addEventListener("pointercancel", (e) => this._up(e)), e.addEventListener("wheel", (t) => {
			t.preventDefault();
			let n = e.getBoundingClientRect();
			this.zoomAt(t.clientX - n.left, t.clientY - n.top, t.deltaY < 0 ? 1.12 : 1 / 1.12);
		}, { passive: !1 }), e.addEventListener("dblclick", (e) => {
			this.tool === "room" && this.pending.length >= 3 && this._closeRoom();
		}), e.addEventListener("contextmenu", (e) => e.preventDefault()), window.addEventListener("keydown", this._kd = (e) => this._key(e));
	}
	_local(e) {
		let t = this.cv.getBoundingClientRect();
		return [e.clientX - t.left, e.clientY - t.top];
	}
	_down(e) {
		let [n, i] = this._local(e);
		if (this.cv.setPointerCapture?.(e.pointerId), e.button === 1 || e.button === 2 || this._space) {
			this._pan = {
				sx: n,
				sy: i,
				tx: this.view.tx,
				ty: this.view.ty
			}, this.cv.style.cursor = "grabbing";
			return;
		}
		if (e.button !== 0) return;
		let [a, o] = this.toWorld(n, i);
		if (this.tool === "calibrate") {
			if (this.calibPts = this.calibPts || [], this.calibPts.length >= 2 && (this.calibPts = []), this.calibPts.push([a, o]), this.calibPts.length === 2) {
				let [e, t] = this.calibPts[0];
				this.emit("calibrated", r(e, t, a, o));
			}
			this.requestRender();
			return;
		}
		if (this.tool === "room") {
			let e = f(this.plan, a, o);
			if (this.pending.length >= 3) {
				let [t, n] = this.pending[0];
				if (r(e.x, e.y, t, n) * this.view.k < 14) {
					this._closeRoom();
					return;
				}
			}
			this.pending.push([e.x, e.y]), this.requestRender();
			return;
		}
		if (this.tool === "door" || this.tool === "window") {
			let e = u(l(this.plan.rooms), a, o, .5);
			if (e) {
				let n = {
					id: t("o"),
					roomId: e.wall.roomId,
					edge: e.wall.edge,
					t: e.t,
					w: this.tool === "door" ? .9 : 1.4,
					type: this.tool,
					h: this.tool === "door" ? 2.1 : 1.4
				};
				this.plan.openings.push(n), this.select({
					type: "opening",
					id: n.id
				}), this._changed();
			}
			return;
		}
		let s = this._hitTest(a, o);
		if (s) {
			if (this.select(s), s.type === "vertex") this._drag = {
				kind: "vertex",
				...s,
				ox: a,
				oy: o
			};
			else if (s.type === "room") this._drag = {
				kind: "room",
				id: s.id,
				ox: a,
				oy: o,
				poly: this.plan.rooms.find((e) => e.id === s.id).poly.map((e) => [...e])
			};
			else if (s.type === "furniture" || s.type === "device") {
				let e = (s.type === "furniture" ? this.plan.furniture : this.plan.devices).find((e) => e.id === s.id);
				this._drag = {
					kind: s.type,
					id: s.id,
					ox: a,
					oy: o,
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
			sx: n,
			sy: i,
			tx: this.view.tx,
			ty: this.view.ty
		};
	}
	_move(e) {
		let [t, n] = this._local(e), [r, a] = this.toWorld(t, n);
		if (this._pan) this.view.tx = this._pan.tx + (t - this._pan.sx), this.view.ty = this._pan.ty + (n - this._pan.sy), this.requestRender();
		else if (this.tool === "room") {
			let e = f(this.plan, r, a);
			this.cursor = {
				x: e.x,
				y: e.y,
				kind: e.kind
			}, this.requestRender();
		} else if (this.tool === "calibrate") this.cursor = {
			x: r,
			y: a,
			kind: "free"
		}, this.requestRender();
		else if (this._drag) {
			let e = this._drag;
			if (e.kind === "vertex") {
				let t = this.plan.rooms.find((t) => t.id === e.roomId);
				t && (t.poly[e.index] = [r, a]);
			} else if (e.kind === "room") {
				let t = r - e.ox, n = a - e.oy, i = this.plan.rooms.find((t) => t.id === e.id);
				i && (i.poly = e.poly.map(([e, r]) => [e + t, r + n]));
			} else if (e.kind === "furniture" || e.kind === "device") {
				let t = (e.kind === "furniture" ? this.plan.furniture : this.plan.devices).find((t) => t.id === e.id);
				t && (t.x = e.x0 + (r - e.ox), t.y = e.y0 + (a - e.oy));
			} else if (e.kind === "opening") {
				let t = e.wall, n = i(r, a, t.x1, t.y1, t.x2, t.y2), o = this.plan.openings.find((t) => t.id === e.id);
				o && (o.t = Math.max(.02, Math.min(.98, n.t)));
			}
			this.requestRender();
		} else if (this.tool === "select") this.cv.style.cursor = this._hitTest(r, a) ? "pointer" : "default";
		else if (this.tool === "door" || this.tool === "window") {
			let e = u(l(this.plan.rooms), r, a, .5);
			this.cv.style.cursor = e ? "copy" : "default";
		} else this.cv.style.cursor = "crosshair";
	}
	_up() {
		this._pan ? (this._pan = null, this.cv.style.cursor = "", this.requestRender()) : this._drag && (this._drag = null, this._changed());
	}
	_key(e) {
		this.cv.isConnected && (e.key === " " && (this._space = !0), e.key === "Escape" && (this.pending.length ? (this.pending.pop(), this.requestRender()) : this.select(null)), e.key === "Enter" && this.tool === "room" && this.pending.length >= 3 && this._closeRoom(), (e.key === "Delete" || e.key === "Backspace") && this.sel && (e.preventDefault(), this.deleteSelected()));
	}
	_hitTest(e, t) {
		let n = this.plan, a = 9 / this.view.k;
		if (this._shouldShowHandles() || this.sel?.type === "room") for (let i of n.rooms) for (let n = 0; n < i.poly.length; n++) {
			let [o, s] = i.poly[n];
			if (r(o, s, e, t) <= a) return {
				type: "vertex",
				roomId: i.id,
				index: n,
				id: i.id + ":" + n
			};
		}
		for (let i = n.devices.length - 1; i >= 0; i--) {
			let a = n.devices[i];
			if (r(a.x, a.y, e, t) <= Math.max(.25, 18 / this.view.k)) return {
				type: "device",
				id: a.id
			};
		}
		for (let r = n.furniture.length - 1; r >= 0; r--) {
			let i = n.furniture[r], a = (i.rot || 0) * Math.PI / 180, o = e - i.x, s = t - i.y, c = o * Math.cos(-a) - s * Math.sin(-a), l = o * Math.sin(-a) + s * Math.cos(-a);
			if (Math.abs(c) <= i.w / 2 && Math.abs(l) <= i.d / 2) return {
				type: "furniture",
				id: i.id
			};
		}
		for (let r of n.openings) {
			let a = d(n, r);
			if (a && i(e, t, a.ax, a.ay, a.bx, a.by).d <= Math.max(.2, 10 / this.view.k)) return {
				type: "opening",
				id: r.id
			};
		}
		let o = c(n, e, t);
		if (o) return {
			type: "room",
			id: o.id
		};
		for (let r of n.rooms) for (let n = 0; n < r.poly.length; n++) {
			let [a, o] = r.poly[n], [s, c] = r.poly[(n + 1) % r.poly.length];
			if (i(e, t, a, o, s, c).d <= Math.max(.15, 7 / this.view.k)) return {
				type: "room",
				id: r.id
			};
		}
		return null;
	}
	_closeRoom() {
		if (this.pending.length < 3) return;
		let e = this.pending.map((e) => [...e]), n = this.plan.rooms.length, r = {
			id: t("r"),
			name: "房间" + (n + 1),
			poly: e,
			wallT: .24
		};
		this.plan.rooms.push(r), this.pending = [], this.select({
			type: "room",
			id: r.id
		}), this._changed(), this.emit("room-added", r);
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
	addFurniture(e, n, r) {
		let i = h.find((t) => t.kind === e);
		if (!i) return;
		let a = {
			id: t("f"),
			kind: e,
			name: i.name,
			x: n ?? 0,
			y: r ?? 0,
			rot: 0,
			w: i.w,
			d: i.d
		};
		return this.plan.furniture.push(a), this.select({
			type: "furniture",
			id: a.id
		}), this._changed(), a;
	}
	addDevice(e, n, r, i) {
		let a = {
			id: t("d"),
			entity: e,
			name: n?.name || e,
			art: n?.art || "lamp",
			dom: n?.dom || "switch",
			x: r ?? 0,
			y: i ?? 0,
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
		Math.abs(n - 1) < 1e-4 || (b(this.plan, 1 / n), this.plan.base.ppm && (this.plan.base.ppm *= n), this._changed(), this.requestRender());
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
function b(e, t) {
	for (let n of e.rooms) n.poly = n.poly.map(([e, n]) => [e * t, n * t]);
	for (let n of e.furniture) n.x *= t, n.y *= t, n.w *= t, n.d *= t;
	for (let n of e.devices) n.x *= t, n.y *= t;
	return e;
}
// src/floor3d/index.js
var x = "ha-dash.floorplan.v1", S = 1600, C = [
	{
		key: "select",
		label: "选择",
		icon: "<path d=\"m5 3 14 8-6 1.6L10 19z\"/>"
	},
	{
		key: "room",
		label: "描房间",
		icon: "<path d=\"M4 4h10v6h6v10H4z\"/>"
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
], w = class {
	constructor(e, t = {}) {
		this.host = e, this.opts = t, this.mode = "edit", this.tool = "select", this.plan = D(), this.editor = null, this.scene = null, this.sel = null, this._hass = null, this._calibDist = 0, this.el = document.createElement("div"), this.el.className = "fh", this.el.innerHTML = "\n      <style>.fh{z-index:20;background:var(--bg);color:var(--text);animation:fhIn .28s var(--ease);flex-direction:column;display:flex;position:absolute;top:0;bottom:0;left:0;right:0}.fh[hidden]{display:none}@keyframes fhIn{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}.fh-top{border-bottom:1px solid var(--line);background:linear-gradient(#131316,#0c0c0e);flex:none;align-items:center;gap:10px;height:54px;padding:0 14px;display:flex}.fh-seg{border:1px solid var(--line);background:#0e0e10;border-radius:11px;gap:2px;padding:3px;display:flex}.fh-seg button{color:var(--text-2);cursor:pointer;transition:.18s var(--ease);background:0 0;border:0;border-radius:8px;padding:7px 13px;font:500 12.5px/1 inherit}.fh-seg button.on{color:var(--text);background:#26262b;box-shadow:inset 0 1px #ffffff0d}.fh-seg button:hover:not(.on){color:var(--text)}.fh-tools{align-items:center;gap:3px;display:flex}.fh-tools[hidden]{display:none}.fh-tools[data-for=edit] button{white-space:nowrap;color:var(--text-3);cursor:pointer;transition:.16s var(--ease);background:0 0;border:1px solid #0000;border-radius:10px;flex-direction:column;flex:none;align-items:center;gap:3px;padding:5px 9px;font:400 10px/1 inherit;display:flex}.fh-tools[data-for=edit] button svg{fill:none;stroke:currentColor;stroke-width:1.7px;stroke-linecap:round;stroke-linejoin:round;width:17px;height:17px}.fh-tools[data-for=edit] button:hover{color:var(--text-2);background:#ffffff0a}.fh-tools[data-for=edit] button.on{color:var(--warm);background:#ffd9a01a;border-color:#ffd9a038}.fh-tools[data-for=view] button{border:1px solid var(--line);color:var(--text-2);cursor:pointer;background:#141417;border-radius:9px;padding:8px 12px;font:500 12px/1 inherit}.fh-spacer{flex:1}.fh-btn{border:1px solid var(--line);color:var(--text-2);cursor:pointer;background:#141417;border-radius:10px;width:34px;height:34px;font-size:16px}.fh-btn:hover{color:var(--text);border-color:var(--line-2)}.fh-body{flex:1;min-height:0;display:flex;position:relative}.fh-stage{background:#06070b;flex:1;min-width:0;position:relative;overflow:hidden}.fh-stage canvas{display:block;position:absolute;top:0;bottom:0;left:0;right:0}.fe-canvas{outline:none}.fh-loading{color:var(--text-3);place-items:center;font-size:13px;display:grid;position:absolute;top:0;bottom:0;left:0;right:0}.fh-panel{overscroll-behavior:contain;border-left:1px solid var(--line);background:#0d0d0f;flex:0 0 270px;width:270px;padding:14px 14px 60px;overflow-y:auto}.fh-panel[hidden]{display:none}.fh-sec{margin-bottom:20px}.fh-sec h4{color:var(--text-2);letter-spacing:.04em;margin-bottom:10px;font:600 12px/1 inherit}.fh-note{color:var(--text-3);margin-bottom:10px;font-size:11.5px;line-height:1.7}.fh-kv{border-bottom:1px solid #ffffff0a;justify-content:space-between;align-items:baseline;gap:10px;padding:7px 0;font-size:12px;display:flex}.fh-kv span{color:var(--text-3)}.fh-kv b{color:var(--text);font-weight:500}.fh-kv b.mono{text-overflow:ellipsis;white-space:nowrap;max-width:150px;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;overflow:hidden}.fh-field{color:var(--text-3);flex-direction:column;gap:7px;margin:12px 0;font-size:12px;display:flex}.fh-field input[type=range]{width:100%;accent-color:var(--warm-deep)}.fh-field input[type=checkbox]{width:16px;height:16px;accent-color:var(--warm-deep)}.fh-input{border:1px solid var(--line-2);width:100%;color:var(--text);background:#131316;border-radius:9px;outline:none;padding:8px 10px;font:500 13px/1.3 inherit}.fh-input:focus{border-color:#ffd9a066}.fh-wide{cursor:pointer;border:1px solid var(--line-2);width:100%;color:var(--text-2);transition:.16s var(--ease);background:#17171a;border-radius:10px;margin-top:6px;padding:10px;font:500 12.5px/1 inherit}.fh-wide:hover{color:var(--text);background:#1d1d21}.fh-wide.primary{color:#20170a;background:linear-gradient(#f0c78b,#d9a762);border-color:#0000;font-weight:600}.fh-danger{cursor:pointer;color:#ff9a9a;background:#ff5a5a14;border:1px solid #ff787838;border-radius:10px;width:100%;margin-top:10px;padding:9px;font:500 12px/1 inherit}.fh-danger:hover{background:#ff5a5a24}.fh-row2{gap:8px;margin:10px 0;display:flex}.fh-row2 button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);background:#17171a;border-radius:9px;flex:1;padding:8px;font:500 12px/1 inherit}.fh-row2 button:hover{color:var(--text);background:#1d1d21}.fh-grid2{grid-template-columns:1fr 1fr;gap:6px;display:grid}.fh-chip{cursor:pointer;text-align:left;border:1px solid var(--line);color:var(--text-2);transition:.14s var(--ease);background:#131316;border-radius:10px;flex-direction:column;align-items:flex-start;gap:3px;padding:9px 10px;font:500 12px/1.2 inherit;display:flex}.fh-chip i{color:var(--text-3);font-size:10px;font-style:normal}.fh-chip:hover{border-color:var(--line-2);color:var(--text);background:#1a1a1e}.fh-list{flex-direction:column;gap:4px;display:flex}.fh-row{cursor:pointer;text-align:left;width:100%;color:var(--text-2);background:#121215;border:1px solid #0000;border-radius:9px;align-items:center;gap:8px;padding:9px 10px;font:500 12px/1 inherit;display:flex}.fh-row:hover{color:var(--text);background:#19191d}.fh-row .dot{background:#4a5568;border-radius:50%;flex:none;width:6px;height:6px}.fh-row.done .dot{background:var(--ok)}.fh-row .nm{text-overflow:ellipsis;white-space:nowrap;flex:1;overflow:hidden}.fh-row .rm{color:var(--text-3);font-size:10.5px}.fh-stats{border-top:1px solid var(--line);grid-template-columns:repeat(3,1fr);gap:8px;padding-top:12px;display:grid}.fh-stats div{text-align:center}.fh-stats b{color:var(--text);font:600 17px/1 inherit;display:block}.fh-stats span{color:var(--text-3);font-size:10.5px}.fh-hint{border:1px solid var(--line-2);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);max-width:min(560px,100% - 300px);color:var(--text-2);opacity:0;pointer-events:none;transition:.24s var(--ease);background:#141418eb;border-radius:99px;padding:9px 16px;font:450 12px/1.4 inherit;position:absolute;bottom:18px;left:50%;transform:translate(-50%,10px)}.fh-hint.on{opacity:1;transform:translate(-50%)}.fh-menu{z-index:40;border:1px solid var(--line-2);background:#151518;border-radius:12px;flex-direction:column;min-width:168px;padding:5px;display:flex;position:absolute;top:58px;right:14px;box-shadow:0 16px 40px #0009}.fh-menu[hidden]{display:none}.fh-menu button{text-align:left;cursor:pointer;color:var(--text-2);background:0 0;border:0;border-radius:8px;padding:9px 11px;font:500 12.5px/1 inherit}.fh-menu button:hover{color:var(--text);background:#1e1e22}.fh-menu button.danger{color:#ff9a9a}.fh-menu button.danger:hover{background:#ff5a5a1f}.fh-calib{z-index:50;border:1px solid var(--line-2);color:var(--text-2);background:#16161a;border-radius:12px;align-items:center;gap:8px;padding:10px 12px;font:450 12.5px/1 inherit;display:flex;position:absolute;bottom:70px;left:50%;transform:translate(-50%);box-shadow:0 16px 40px #0009}.fh-calib input{border:1px solid var(--line-2);width:90px;color:var(--text);background:#0f0f12;border-radius:8px;outline:none;padding:7px 9px;font:500 13px/1 inherit}.fh-calib button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);background:#1d1d21;border-radius:8px;padding:7px 13px;font:500 12px/1 inherit}.fh-calib button.primary{color:#20170a;background:linear-gradient(#f0c78b,#d9a762);border-color:#0000;font-weight:600}.fh-dev{z-index:30;border:1px solid var(--line-2);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);width:230px;animation:devIn .22s var(--ease);background:#121216f0;border-radius:16px;padding:14px;position:absolute;bottom:16px;right:16px;box-shadow:0 18px 44px #0000008c}@keyframes devIn{0%{opacity:0;transform:translateY(8px)scale(.98)}to{opacity:1;transform:none}}.fh-dev[hidden]{display:none}.fh-dev-head{justify-content:space-between;align-items:center;margin-bottom:4px;display:flex}.fh-dev-head b{font:600 13.5px/1 inherit}.fh-dev-head button{color:var(--text-3);cursor:pointer;background:0 0;border:0;padding:2px 4px;font-size:13px}.fh-dev-head button:hover{color:var(--text)}.fh-dev-sub{color:var(--text-3);margin-bottom:12px;font-size:11.5px}.floor3d-canvas{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0}</style>\n      <header class=\"fh-top\">\n        <div class=\"fh-seg\">\n          <button data-mode=\"edit\" class=\"on\">编辑户型</button>\n          <button data-mode=\"view\">3D 展示</button>\n        </div>\n        <div class=\"fh-tools\" data-for=\"edit\"></div>\n        <div class=\"fh-spacer\"></div>\n        <div class=\"fh-tools\" data-for=\"view\" hidden>\n          <button data-act=\"fit\" title=\"居中\">⤢ 居中</button>\n        </div>\n        <button class=\"fh-btn\" data-act=\"menu\" title=\"更多\">⋯</button>\n      </header>\n      <div class=\"fh-body\">\n        <div class=\"fh-stage\"></div>\n        <aside class=\"fh-panel\"></aside>\n      </div>\n      <div class=\"fh-hint\"></div>\n      <div class=\"fh-menu\" hidden>\n        <button data-act=\"base\">导入参考底图</button>\n        <button data-act=\"export\">导出 JSON</button>\n        <button data-act=\"import\">导入 JSON</button>\n        <button data-act=\"clear\" class=\"danger\">清空户型</button>\n      </div>\n      <input type=\"file\" accept=\"image/*\" class=\"fh-file img\" hidden>\n      <input type=\"file\" accept=\"application/json,.json\" class=\"fh-file json\" hidden>\n      <div class=\"fh-dev\" hidden></div>\n    ", e.appendChild(this.el), this.$stage = this.el.querySelector(".fh-stage"), this.$panel = this.el.querySelector(".fh-panel"), this.$hint = this.el.querySelector(".fh-hint"), this.$menu = this.el.querySelector(".fh-menu"), this.$dev = this.el.querySelector(".fh-dev"), this._bindChrome(), this._renderTools(), this.enterEdit(), this.renderPanel();
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
		e.innerHTML = C.map((e) => `
      <button data-tool="${e.key}" title="${e.label}" class="${e.key === this.tool ? "on" : ""}">
        <svg viewBox="0 0 24 24">${e.icon}</svg><span>${e.label}</span>
      </button>`).join(""), e.querySelectorAll("[data-tool]").forEach((e) => {
			e.onclick = () => this.setTool(e.dataset.tool);
		});
	}
	setTool(e) {
		this.mode !== "edit" && this.setMode("edit"), this.tool = e, this.el.querySelectorAll(".fh-tools[data-for=\"edit\"] [data-tool]").forEach((t) => t.classList.toggle("on", t.dataset.tool === e)), this.editor?.setTool(e), e === "calibrate" ? this._hint("在底图上点两个点，量一段已知长度的墙") : e === "room" ? this._hint("沿房间轮廓逐点单击，点回起点（或双击）闭合") : e === "door" || e === "window" ? this._hint("点一下已有的墙，把" + (e === "door" ? "门" : "窗") + "插进去") : this._hint(""), this.renderPanel();
	}
	setMode(e) {
		e === this.mode && (e === "edit" ? this.editor : this.scene) || (this.mode = e, this.el.querySelectorAll("[data-mode]").forEach((t) => t.classList.toggle("on", t.dataset.mode === e)), this.el.querySelector(".fh-tools[data-for=\"edit\"]").hidden = e !== "edit", this.el.querySelector(".fh-tools[data-for=\"view\"]").hidden = e !== "view", e === "edit" ? this.enterEdit() : this.enterView(), this.renderPanel());
	}
	enterEdit() {
		this.exitView(), this.$stage.innerHTML = "", this.editor = new y(this.$stage), this.editor.setPlan(this.plan), this.editor.setHass(this._hass), this.editor.setTool(this.tool), this.editor.on("change", (e) => {
			this.plan = e, E(e);
		}), this.editor.on("sel", (e) => {
			this.sel = e, this.renderPanel();
		}), this.editor.on("calibrated", (e) => this._askCalib(e)), this.editor.fitView();
	}
	exitEdit() {
		this.editor?.destroy(), this.editor = null;
	}
	async enterView() {
		this.exitEdit(), this.$stage.innerHTML = "<div class=\"fh-loading\">正在准备 3D 场景…</div>";
		try {
			let { FloorScene: e } = await import("./chunk-Qh9nE-QW.js");
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
        <div class="fh-grid2">${h.map((e) => `<button class="fh-chip" data-furn="${e.kind}">${e.name}<i>${e.w}×${e.d}</i></button>`).join("")}
        </div></div>`;
		else if (this.tool === "device") n = `<div class="fh-sec"><h4>设备</h4>
        <p class="fh-note">点一项放进当前视野中心</p>
        <div class="fh-list">${(this.opts.devices || []).map((t) => `<button class="fh-row ${e.devices.some((e) => e.entity === t.id) ? "done" : ""}" data-dev="${t.id}">
            <span class="dot"></span><span class="nm">${T(t.name)}</span>
            <span class="rm">${T(t.room || "")}</span></button>`).join("")}</div></div>`;
		else if (t?.type === "room") {
			let r = e.rooms.find((e) => e.id === t.id);
			r && (n = `<div class="fh-sec"><h4>房间</h4>
          <label class="fh-field"><span>名称</span>
            <input class="fh-input" data-room-name value="${T(r.name)}"></label>
          <div class="fh-kv"><span>面积</span><b>${a(r.poly).toFixed(2)} m²</b></div>
          <div class="fh-kv"><span>墙体</span><b>${r.poly.length} 段</b></div>
          <button class="fh-danger" data-act="del">删除这个房间</button>
        </div>`);
		} else if (t?.type === "furniture") {
			let r = e.furniture.find((e) => e.id === t.id);
			r && (n = `<div class="fh-sec"><h4>家具</h4>
          <div class="fh-kv"><span>类型</span><b>${T(r.name || r.kind)}</b></div>
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
          <div class="fh-kv"><span>名称</span><b>${T(r.name)}</b></div>
          <div class="fh-kv"><span>实体</span><b class="mono">${T(r.entity)}</b></div>
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
		} else e.rooms.length ? (n = `<div class="fh-sec"><h4>房间</h4>
        <p class="fh-note">点一个房间可以改名、看面积</p>
        <div class="fh-list">${e.rooms.map((e, t) => `
          <button class="fh-row" data-pick-room="${e.id}">
            <span class="dot" style="background:${_(t)}"></span>
            <span class="nm">${T(e.name)}</span>
            <span class="rm">${a(e.poly).toFixed(1)} m²</span>
          </button>`).join("")}</div>
      </div>`, e.base.src && (n += `<div class="fh-sec"><h4>参考底图</h4>
          <label class="fh-field"><span>透明度</span>
            <input type="range" min="0" max="1" step="0.02" value="${e.base.opacity}" data-base-op></label>
          <button class="fh-wide" data-act="base">更换底图</button>
        </div>`)) : n = e.base.src ? `<div class="fh-sec"><h4>参考底图</h4>
        <label class="fh-field"><span>透明度</span>
          <input type="range" min="0" max="1" step="0.02" value="${e.base.opacity}" data-base-op></label>
        <label class="fh-field"><span>左右翻转</span>
          <input type="checkbox" data-base-flip ${e.base.flipX ? "checked" : ""}></label>
        <button class="fh-wide" data-act="base">更换底图</button>
      </div>` : "<div class=\"fh-sec\"><h4>开始</h4>\n        <p class=\"fh-note\">① 导入户型图当参考底图<br>② 标定比例尺<br>③ 沿房间轮廓描墙<br>④ 切到 3D 展示</p>\n        <button class=\"fh-wide primary\" data-act=\"base\">导入参考底图</button>\n      </div>";
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
			r && (r.name = n.value, E(e), this.editor?.requestRender());
		});
		let r = this.$panel.querySelector("[data-op-w]");
		r && (r.oninput = () => {
			let n = e.openings.find((e) => e.id === t.id);
			n && (n.w = parseFloat(r.value), E(e), this.editor?.requestRender());
		});
		let i = this.$panel.querySelector("[data-base-op]");
		i && (i.oninput = () => {
			e.base.opacity = parseFloat(i.value), E(e), this.editor?.requestRender();
		});
		let a = this.$panel.querySelector("[data-base-flip]");
		a && (a.onchange = () => {
			e.base.flipX = a.checked, E(e), this.editor?.requestRender();
		}), this.$panel.querySelectorAll("[data-act]").forEach((e) => {
			let t = e.dataset.act;
			e.onclick = () => {
				t === "del" ? this.editor?.deleteSelected() : t === "rot-l" ? this.editor?.rotateSelected(-15) : t === "rot-r" ? this.editor?.rotateSelected(15) : t === "base" && this._menuAction("base"), this.renderPanel();
			};
		});
	}
	_viewCenter() {
		let e = this.editor;
		return e ? e.toWorld(e.w / 2, e.h / 2) : [0, 0];
	}
	_menuAction(e) {
		if (e === "base") this.el.querySelector(".fh-file.img").click();
		else if (e === "import") this.el.querySelector(".fh-file.json").click();
		else if (e === "export") this._exportJson();
		else if (e === "clear") {
			if (!confirm("清空整个户型？底图也会一起清掉。")) return;
			this.plan = n(), E(this.plan), this.editor?.setPlan(this.plan), this.renderPanel();
		}
	}
	async _importImage(e) {
		if (!e) return;
		let t = await O(e, S), n = new Image();
		n.onload = () => {
			this.plan.base = {
				src: t,
				w: n.naturalWidth,
				h: n.naturalHeight,
				opacity: .16,
				flipX: !1,
				ppm: 0
			}, E(this.plan), this.mode !== "edit" && this.setMode("edit"), this.editor?.setPlan(this.plan), this.editor?.fitView(), this.setTool("calibrate"), this._hint("底图已就位。先标定比例尺：在图上点两个点，量一段有尺寸标注的墙");
		}, n.src = t;
	}
	_askCalib(e) {
		this._calibDist = e;
		let t = document.createElement("div");
		t.className = "fh-calib", t.innerHTML = "<span>这段墙实际多长？</span>\n      <input type=\"number\" step=\"0.01\" min=\"0.1\" placeholder=\"米\" autofocus>\n      <button class=\"primary\">确定</button>\n      <button data-x>取消</button>", this.el.appendChild(t);
		let n = t.querySelector("input");
		n.focus();
		let r = () => {
			let e = parseFloat(n.value);
			e > 0 && (this.editor.applyCalibration(this._calibDist, e), this.plan = this.editor.plan, E(this.plan), this._hint(`比例尺已标定：1 米 ≈ ${(e > 0 ? this._calibDist / e : 0).toFixed(1)} 世界单位`)), t.remove(), this.setTool("select"), this.renderPanel();
		};
		t.querySelector(".primary").onclick = r, t.querySelector("[data-x]").onclick = () => t.remove(), n.onkeydown = (e) => {
			e.key === "Enter" && r();
		};
	}
	_exportJson() {
		let e = new Blob([p(this.plan)], { type: "application/json" }), t = document.createElement("a");
		t.href = URL.createObjectURL(e), t.download = (this.plan.name || "floorplan") + ".json", t.click(), setTimeout(() => URL.revokeObjectURL(t.href), 2e3);
	}
	_importJson(e) {
		if (!e) return;
		let t = new FileReader();
		t.onload = () => {
			try {
				this.plan = m(String(t.result)), E(this.plan), this.editor?.setPlan(this.plan), this.editor?.fitView(), this.renderPanel();
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
      <div class="fh-dev-head"><b>${T(t.name)}</b>
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
function T(e) {
	return String(e ?? "").replace(/[&<>"']/g, (e) => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	})[e]);
}
function E(e) {
	try {
		localStorage.setItem(x, p(e));
	} catch {}
}
function D() {
	try {
		let e = localStorage.getItem(x);
		if (e) return m(e);
	} catch {}
	return n();
}
function O(e, t) {
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
export { w as FloorHome, _ as a, o as i, s as n, a as r, r as t };
