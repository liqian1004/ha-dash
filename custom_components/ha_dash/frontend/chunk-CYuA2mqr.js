function e(e, t) {
	return `${Math.round(e * 400)},${Math.round(t * 400)}`;
}
function t(e, t) {
	let n = e.x2 - e.x1, r = e.y2 - e.y1, i = t.x2 - t.x1, a = t.y2 - t.y1, o = n * a - r * i;
	if (Math.abs(o) < 1e-9) return null;
	let s = t.x1 - e.x1, c = t.y1 - e.y1, l = (s * a - c * i) / o, u = (s * r - c * n) / o;
	return l < -1e-7 || l > 1.0000001 || u < -1e-7 || u > 1.0000001 ? null : [Math.max(0, Math.min(1, l)), Math.max(0, Math.min(1, u))];
}
function n(n) {
	let r = n.map(() => []);
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		if (!(!i || i.x1 === i.x2 && i.y1 === i.y2)) for (let a = e + 1; a < n.length; a++) {
			let o = t(i, n[a]);
			o && (r[e].push(o[0]), r[a].push(o[1]));
		}
	}
	let i = [], a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = (t, n) => {
		let r = e(t, n), o = a.get(r);
		return o === void 0 && (o = i.length, i.push({
			x: t,
			y: n
		}), a.set(r, o)), o;
	}, c = (e, t) => {
		if (e === t) return;
		let n = e < t ? `${e}>${t}` : `${t}>${e}`;
		o.has(n) || o.set(n, {
			a: e,
			b: t
		});
	};
	n.forEach((e, t) => {
		let n = Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
		if (n < 1e-6) return;
		let i = [
			0,
			1,
			...r[t]
		].sort((e, t) => e - t);
		for (let t = 0; t < i.length - 1; t++) {
			let r = i[t], a = i[t + 1];
			if ((a - r) * n < .005) continue;
			let o = s(e.x1 + (e.x2 - e.x1) * r, e.y1 + (e.y2 - e.y1) * r), l = s(e.x1 + (e.x2 - e.x1) * a, e.y1 + (e.y2 - e.y1) * a);
			c(o, l);
		}
	});
	let l = i.map(() => []);
	for (let { a: e, b: t } of o.values()) l[e].push(t), l[t].push(e);
	return l.forEach((e, t) => {
		e.sort((e, n) => Math.atan2(i[e].y - i[t].y, i[e].x - i[t].x) - Math.atan2(i[n].y - i[t].y, i[n].x - i[t].x));
	}), {
		verts: i,
		adj: l
	};
}
function r(e) {
	let t = 0;
	for (let n = 0, r = e.length; n < r; n++) {
		let [i, a] = e[n], [o, s] = e[(n + 1) % r];
		t += i * s - o * a;
	}
	return t / 2;
}
function i(e) {
	let { verts: t, adj: n } = e, i = /* @__PURE__ */ new Set(), a = [];
	for (let e = 0; e < n.length; e++) for (let o of n[e]) {
		if (i.has(`${e}>${o}`)) continue;
		let s = [], c = e, l = o, u = 0;
		for (; u++ < 4e3 && !i.has(`${c}>${l}`);) {
			i.add(`${c}>${l}`), s.push([t[c].x, t[c].y]);
			let e = Math.atan2(t[c].y - t[l].y, t[c].x - t[l].x), r = -1, a = Infinity;
			for (let i of n[l]) {
				let n = e - Math.atan2(t[i].y - t[l].y, t[i].x - t[l].x);
				for (; n <= 1e-9;) n += Math.PI * 2;
				n < a && (a = n, r = i);
			}
			if (r < 0) break;
			c = l, l = r;
		}
		s.length >= 3 && a.push({
			poly: s,
			area: r(s)
		});
	}
	return a;
}
function a(e) {
	return i(n(e));
}
var o = 2.5, s = .15, c = .06, l = {
	solid: "实体墙",
	virtual: "透明边界"
}, u = 0;
function d(e = "e") {
	return e + Date.now().toString(36) + (u++).toString(36);
}
function f(e = "我的家") {
	return {
		v: 2,
		name: e,
		wallHeight: o,
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
		walls: [],
		rooms: [],
		openings: [],
		furniture: [],
		devices: [],
		strips: []
	};
}
function p(e, t, n) {
	let r = m(t.x, t.y, n.x, n.y);
	if (r < .08) return {
		ok: !1,
		reason: "两点至少间隔 8 厘米"
	};
	let i = (n.x - t.x) / r, a = (n.y - t.y) / r, o = (e, n) => (e - t.x) * i + (n - t.y) * a, s = e.walls.filter((e) => {
		let n = (e, n) => Math.abs((e - t.x) * a - (n - t.y) * i);
		return n(e.x1, e.y1) < .015 && n(e.x2, e.y2) < .015;
	}).map((e) => ({
		w: e,
		lo: Math.min(o(e.x1, e.y1), o(e.x2, e.y2)),
		hi: Math.max(o(e.x1, e.y1), o(e.x2, e.y2))
	})).filter((e) => e.hi > .001 && e.lo < r - .001).sort((e, t) => e.lo - t.lo), c = 0;
	for (let e of s) {
		if (e.lo > c + .015) return {
			ok: !1,
			reason: "两点之间有空隙，请选择连续的同一直墙"
		};
		c = Math.max(c, e.hi);
	}
	if (c < r - .015) return {
		ok: !1,
		reason: "终点不在同一条连续直墙上"
	};
	let l = [], u = /* @__PURE__ */ new Map(), f = [];
	for (let { w: i } of s) {
		let a = b(i), s = x(i), c = (e) => (e.x - i.x1) * s.ux + (e.y - i.y1) * s.uy, p = [
			0,
			a,
			c(t),
			c(n)
		].filter((e) => e >= 0 && e <= a).sort((e, t) => e - t).filter((e, t, n) => !t || e - n[t - 1] > .001);
		for (let t of e.openings.filter((e) => e.wallId === i.id)) if (p.some((e) => e > .001 && e < a - .001 && e > t.offset - t.width / 2 + .001 && e < t.offset + t.width / 2 - .001)) return {
			ok: !1,
			reason: "切分点穿过门窗，请将点移到门窗两侧"
		};
		let m = [];
		for (let e = 1; e < p.length; e++) {
			let t = p[e - 1], n = p[e], a = S(i, t), s = S(i, n), c = {
				...i,
				id: d("w"),
				x1: a.x,
				y1: a.y,
				x2: s.x,
				y2: s.y
			};
			l.push(c), m.push({
				piece: c,
				start: t,
				end: n
			});
			let u = o((c.x1 + c.x2) / 2, (c.y1 + c.y2) / 2);
			u >= 0 && u <= r && f.push(c.id);
		}
		u.set(i.id, m);
	}
	e.walls = e.walls.filter((e) => !u.has(e.id)).concat(l);
	for (let t of e.openings) {
		let e = u.get(t.wallId)?.find((e) => t.offset >= e.start - .001 && t.offset <= e.end + .001);
		e && (t.wallId = e.piece.id, t.offset -= e.start);
	}
	return F(e), {
		ok: !0,
		ids: f
	};
}
var m = (e, t, n, r) => Math.hypot(n - e, r - t);
function h(e, t, n, r, i, a) {
	let o = i - n, s = a - r, c = o * o + s * s;
	if (c < 1e-12) return {
		t: 0,
		x: n,
		y: r,
		d: m(e, t, n, r)
	};
	let l = ((e - n) * o + (t - r) * s) / c;
	l = Math.max(0, Math.min(1, l));
	let u = n + o * l, d = r + s * l;
	return {
		t: l,
		x: u,
		y: d,
		d: m(e, t, u, d)
	};
}
function g(e) {
	let t = 0;
	for (let n = 0, r = e.length; n < r; n++) {
		let [i, a] = e[n], [o, s] = e[(n + 1) % r];
		t += i * s - o * a;
	}
	return Math.abs(t / 2);
}
function _(e) {
	let t = 0, n = 0, r = 0;
	for (let i = 0, a = e.length; i < a; i++) {
		let [o, s] = e[i], [c, l] = e[(i + 1) % a], u = o * l - c * s;
		t += u, n += (o + c) * u, r += (s + l) * u;
	}
	return Math.abs(t) < 1e-12 ? [e.reduce((e, t) => e + t[0], 0) / e.length, e.reduce((e, t) => e + t[1], 0) / e.length] : [n / (3 * t), r / (3 * t)];
}
function v(e, t, n) {
	let r = !1;
	for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
		let [o, s] = n[i], [c, l] = n[a];
		s > t != l > t && e < (c - o) * (t - s) / (l - s) + o && (r = !r);
	}
	return r;
}
function y(e, t, n) {
	for (let r = e.rooms.length - 1; r >= 0; r--) if (v(t, n, e.rooms[r].poly)) return e.rooms[r];
	return null;
}
function b(e) {
	return m(e.x1, e.y1, e.x2, e.y2);
}
function x(e) {
	let t = b(e) || 1e-9, n = (e.x2 - e.x1) / t, r = (e.y2 - e.y1) / t;
	return {
		ux: n,
		uy: r,
		nx: -r,
		ny: n,
		len: t,
		ang: Math.atan2(r, n)
	};
}
function S(e, t) {
	let n = x(e), r = n.len > 1e-9 ? Math.max(0, Math.min(1, t / n.len)) : 0;
	return {
		x: e.x1 + (e.x2 - e.x1) * r,
		y: e.y1 + (e.y2 - e.y1) * r,
		ux: n.ux,
		uy: n.uy,
		len: n.len,
		ang: n.ang
	};
}
function C(e, t, n, r, i = {}) {
	return {
		id: i.id || d("w"),
		x1: e,
		y1: t,
		x2: n,
		y2: r,
		t: i.t ?? .15,
		h: i.h ?? 0,
		kind: i.kind || "solid",
		color: i.color || ""
	};
}
var w = (e) => e && e.t > 0 ? e.t : s, T = (e, t) => t && t.h > 0 ? t.h : e?.wallHeight ?? 2.5;
function E(e) {
	let t = [];
	for (let n of e) t.push([n.x1, n.y1], [n.x2, n.y2]);
	return t;
}
function D(e, t = c) {
	let n = E(e).map(([e, t]) => ({
		x: e,
		y: t
	})), r = n.map(() => -1), i = [];
	for (let e = 0; e < n.length; e++) {
		for (let a = 0; a < i.length; a++) if (m(n[e].x, n[e].y, i[a].x, i[a].y) <= t) {
			r[e] = a;
			break;
		}
		r[e] < 0 && (r[e] = i.length, i.push({
			x: n[e].x,
			y: n[e].y
		}));
	}
	let a = i.map(() => ({
		x: 0,
		y: 0,
		n: 0
	}));
	n.forEach((e, t) => {
		let n = a[r[t]];
		n.x += e.x, n.y += e.y, n.n++;
	});
	let o = a.map((e) => ({
		x: e.x / e.n,
		y: e.y / e.n
	})), s = [];
	return e.forEach((e, t) => {
		let n = o[r[t * 2]], i = o[r[t * 2 + 1]];
		m(n.x, n.y, i.x, i.y) < 1e-4 || s.push({
			...e,
			x1: n.x,
			y1: n.y,
			x2: i.x,
			y2: i.y
		});
	}), s;
}
function O(e, t) {
	let n = (e.walls || []).filter((e) => e.id !== t), r = new Set(n.map((e) => e.id));
	return {
		walls: n,
		openings: (e.openings || []).filter((e) => e.wallId !== t && r.has(e.wallId))
	};
}
function k(e, t) {
	let n = b(e), r = (t.width || .9) / 2, i = Math.min(r, n / 2), a = Math.max(n - r, n / 2);
	return {
		...t,
		offset: Math.max(i, Math.min(a, t.offset))
	};
}
function A(e, t) {
	let n = (e?.walls || []).find((e) => e.id === t.wallId);
	if (!n) return null;
	let r = x(n);
	if (r.len < .02) return null;
	let i = (t.width ?? .9) / 2, a = S(n, t.offset);
	return {
		wall: n,
		len: r.len,
		ux: r.ux,
		uy: r.uy,
		nx: r.nx,
		ny: r.ny,
		ang: r.ang,
		cx: a.x,
		cy: a.y,
		half: i,
		ax: a.x - r.ux * i,
		ay: a.y - r.uy * i,
		bx: a.x + r.ux * i,
		by: a.y + r.uy * i,
		a: t.offset - i,
		b: t.offset + i
	};
}
function j(e, t, n, r = .35) {
	let i = null;
	for (let a of e) {
		let e = h(t, n, a.x1, a.y1, a.x2, a.y2);
		e.d <= r && (!i || e.d < i.d) && (i = {
			wall: a,
			...e
		});
	}
	return i;
}
var M = (e, t, n, r, i = c) => m(e, t, n, r) <= i;
function N(e) {
	let t = e.map(([e, t]) => `${Math.round(e * 100)},${Math.round(t * 100)}`), n = null;
	for (let e = 0; e < t.length; e++) {
		let r = t.slice(e).concat(t.slice(0, e)).join("|");
		(n === null || r < n) && (n = r);
	}
	let r = 5381;
	for (let e = 0; e < n.length; e++) r = (r * 33 ^ n.charCodeAt(e)) >>> 0;
	return "r" + r.toString(36);
}
function P(e, t = e?.walls, n = e?.rooms) {
	let r = (t || []).filter((e) => b(e) > .02).map((e) => ({
		x1: e.x1,
		y1: e.y1,
		x2: e.x2,
		y2: e.y2
	})), i = [];
	r.length >= 3 && (i = a(r).filter((e) => e.area > 0));
	let o = i.filter((e) => e.area >= .6), s = i.length - o.length, c = /* @__PURE__ */ new Set(), l = (n || []).filter((e) => Array.isArray(e.poly) && e.poly.length >= 3), u = [], d = o.map((e) => _(e.poly));
	o.forEach((e, t) => {
		for (let n of l) {
			let r = _(n.poly), i = v(r[0], r[1], e.poly) ? 2 : 0, a = +!!v(d[t][0], d[t][1], n.poly);
			(i || a) && u.push({
				fi: t,
				room: n,
				score: i + a,
				area: Math.abs(g(n.poly)),
				d: m(d[t][0], d[t][1], r[0], r[1])
			});
		}
	}), u.sort((e, t) => t.score - e.score || t.area - e.area || e.d - t.d);
	let f = /* @__PURE__ */ new Map();
	for (let e of u) f.has(e.fi) || c.has(e.room.id) || (f.set(e.fi, e.room), c.add(e.room.id));
	let p = 0;
	for (let e of l) {
		let t = /^房间\s*(\d+)$/.exec(e.name || "");
		t && (p = Math.max(p, +t[1]));
	}
	let h = o.map((e, t) => {
		let n = f.get(t);
		return n || (p += 1), {
			id: n?.id || N(e.poly),
			name: n?.name || `房间 ${p}`,
			poly: W(e.poly, .015),
			floor: n?.floor
		};
	});
	return h.sort((e, t) => Math.abs(g(t.poly)) - Math.abs(g(e.poly))), {
		rooms: h,
		tiny: s
	};
}
function F(e) {
	let { rooms: t, tiny: n } = P(e, e.walls, e.rooms);
	return e.rooms = t, {
		rooms: t,
		tiny: n
	};
}
function ee(e, t = {}) {
	return D((e || []).map((e) => C(e.x1, e.y1, e.x2, e.y2, t)).filter((e) => b(e) > .12), t.weld ?? .06);
}
function te(e) {
	let t = Array.isArray(e.rooms) ? e.rooms : [], n = [];
	for (let e of t) {
		let t = Array.isArray(e.poly) ? e.poly : [], r = t.length;
		for (let i = 0; i < r; i++) {
			let [a, o] = t[i], [s, c] = t[(i + 1) % r];
			m(a, o, s, c) < .02 || n.push({
				x1: a,
				y1: o,
				x2: s,
				y2: c,
				t: (Array.isArray(e.edgeT) ? e.edgeT[i] : e.wallT) ?? .15,
				h: (Array.isArray(e.edgeH) ? e.edgeH[i] : 0) || 0,
				kind: e.edgeK?.[i] === "virtual" ? "virtual" : "solid",
				color: e.edgeC?.[i] || "",
				roomId: e.id,
				edge: i
			});
		}
	}
	let r = [];
	for (let e of n) r.some((t) => M(t.x1, t.y1, e.x1, e.y1) && M(t.x2, t.y2, e.x2, e.y2) || M(t.x1, t.y1, e.x2, e.y2) && M(t.x2, t.y2, e.x1, e.y1)) || r.push(C(e.x1, e.y1, e.x2, e.y2, {
		t: e.t,
		h: e.h,
		kind: e.kind,
		color: e.color
	}));
	let i = D(r), a = [];
	for (let n of e.openings || []) {
		let e = t.find((e) => e.id === n.roomId)?.poly;
		if (!e || e.length < 2) continue;
		let r = e.length, o = ((n.edge | 0) % r + r) % r, [s, c] = e[o], [l, u] = e[(o + 1) % r], f = m(s, c, l, u);
		if (f < .05) continue;
		let p = i.find((e) => M(e.x1, e.y1, s, c) && M(e.x2, e.y2, l, u) || M(e.x1, e.y1, l, u) && M(e.x2, e.y2, s, c));
		if (!p) continue;
		let h = M(p.x1, p.y1, s, c), g = Number.isFinite(n.t) ? n.t : .5, _ = h ? g * f : (1 - g) * f, { swing: v, hinge: y } = I(e, s, c, l, u, _, h, n.width || n.w || .9);
		a.push({
			id: n.id || d("o"),
			type: n.type === "window" ? "window" : "door",
			wallId: p.id,
			offset: Math.max(0, Math.min(f, _)),
			width: n.w ?? n.width ?? .9,
			height: n.h ?? n.height ?? (n.type === "door" ? 2.1 : 1.2),
			bottom: n.type === "door" ? 0 : .9,
			windowStyle: "standard",
			hasLeaf: n.type === "door",
			doorStyle: "single",
			swing: v,
			hinge: y
		});
	}
	let o = {
		...e,
		v: 2,
		walls: i,
		openings: a,
		rooms: t
	}, { rooms: s } = P(o, o.walls, t);
	return o.rooms = s, o;
}
function I(e, t, n, r, i, a, o, s) {
	let c = m(t, n, r, i), l = (r - t) / (c || 1), u = (i - n) / (c || 1), d = t + l * a, f = n + u * a, p = -u, h = l, g = Math.min(.6, Math.max(.3, s)), y = v(d + p * g, f + h * g, e), b = v(d - p * g, f - h * g, e), x = y && !b, S = _(e), C = m(t, n, S[0], S[1]), w = m(r, i, S[0], S[1]);
	return {
		swing: x ? "inward" : "outward",
		hinge: (o ? C > w : w > C) ? "start" : "end"
	};
}
function L(e, t, n = "door", r = {}) {
	let i = b(e), a = r.width ?? (n === "door" ? .9 : 1.2), o = a / 2, s = Math.min(o, i / 2), c = Math.max(i - o, i / 2);
	return {
		id: r.id || d("o"),
		type: n,
		wallId: e.id,
		offset: Math.max(s, Math.min(c, t)),
		width: a,
		height: r.height ?? (n === "door" ? 2.1 : 1.2),
		bottom: r.bottom ?? (n === "door" ? 0 : .9),
		windowStyle: "standard",
		hasLeaf: !1,
		doorStyle: "single",
		swing: "inward",
		hinge: "start",
		entityId: r.entityId || ""
	};
}
function R(e, t, n, r = .1, i = .05, a = {}) {
	let o = a.from || null, s = a.px > 0 ? a.px : 0, c = a.skip || null, l = (e?.walls || []).filter((e) => !c || !c.has(e.id)), u = s ? Math.min(.2, Math.max(r, 12 * s)) : r, d = s ? Math.min(.26, Math.max(.06, 15 * s)) : r, f = [];
	for (let e of a.guides || []) f.push({
		x1: e.x1,
		y1: e.y1,
		x2: e.x2,
		y2: e.y2,
		src: "guide"
	});
	for (let e of l) f.push({
		x1: e.x1,
		y1: e.y1,
		x2: e.x2,
		y2: e.y2,
		src: "wall",
		wallId: e.id
	});
	let p = null;
	for (let e of l) for (let [r, i] of [[e.x1, e.y1], [e.x2, e.y2]]) {
		let e = m(t, n, r, i);
		e <= u && (!p || e < p.d) && (p = {
			x: r,
			y: i,
			d: e,
			kind: "vertex"
		});
	}
	if (p) return p;
	if (a.points?.length) {
		let e = null;
		for (let [r, i] of a.points) {
			let a = m(t, n, r, i);
			a <= u && (!e || a < e.d) && (e = {
				x: r,
				y: i,
				d: a,
				kind: "chain"
			});
		}
		if (e) return e;
	}
	let h = null, g = null, _ = d, v = d, y = null, b = null;
	for (let e of f) {
		let r = Math.min(e.x1, e.x2), i = Math.max(e.x1, e.x2), a = Math.min(e.y1, e.y2), o = Math.max(e.y1, e.y2);
		if (Math.abs(e.x2 - e.x1) < 1e-6) {
			if (n < a - d || n > o + d) continue;
			let r = Math.abs(t - e.x1);
			r <= _ && (h = e.x1, _ = r, y = e);
		} else if (Math.abs(e.y2 - e.y1) < 1e-6) {
			if (t < r - d || t > i + d) continue;
			let a = Math.abs(n - e.y1);
			a <= v && (g = e.y1, v = a, b = e);
		}
	}
	if (h !== null && g !== null) return {
		x: h,
		y: g,
		d: 0,
		kind: "corner",
		hot: B(y, b, _, v)
	};
	if (g !== null && h === null) {
		let e = null, n = u;
		for (let r of f) for (let [i, a] of [[r.x1, r.y1], [r.x2, r.y2]]) {
			if (Math.abs(a - g) > .03) continue;
			let r = Math.abs(i - t);
			r <= n && (e = i, n = r);
		}
		if (e !== null) return {
			x: e,
			y: g,
			d: 0,
			kind: "corner",
			hot: b
		};
	}
	if (h !== null && g === null) {
		let e = null, t = u;
		for (let r of f) for (let [i, a] of [[r.x1, r.y1], [r.x2, r.y2]]) {
			if (Math.abs(i - h) > .03) continue;
			let r = Math.abs(a - n);
			r <= t && (e = a, t = r);
		}
		if (e !== null) return {
			x: h,
			y: e,
			d: 0,
			kind: "corner",
			hot: y
		};
	}
	let x = h !== null || g !== null ? z(h === null ? b : y) : "free";
	if (o) {
		let e = .035, r = d * 2.5;
		for (let i of f) {
			let a = Math.min(i.y1, i.y2), s = Math.max(i.y1, i.y2), c = Math.min(i.x1, i.x2), l = Math.max(i.x1, i.x2);
			if (Math.abs(i.x2 - i.x1) < 1e-6) {
				if (Math.abs(o[0] - i.x1) > e || o[1] < a - e || o[1] > s + e || Math.abs(t - i.x1) > r) continue;
				h = i.x1, x = z(i);
				break;
			}
			if (Math.abs(i.y2 - i.y1) < 1e-6) {
				if (Math.abs(o[1] - i.y1) > e || o[0] < c - e || o[0] > l + e || Math.abs(n - i.y1) > r) continue;
				g = i.y1, x = z(i);
				break;
			}
		}
	}
	if (o) {
		let e = Math.abs(t - o[0]), i = Math.abs(n - o[1]), a = s ? Math.max(6 * s, .04) : Math.min(Math.max(r, .04), .12);
		e >= i ? g === null && i <= a && e > 1e-9 && (g = o[1], x === "free" && (x = "axis")) : h === null && e <= a && (h = o[0], x === "free" && (x = "axis"));
	}
	return h === null && (h = i > 0 ? Math.round(t / i) * i : t), g === null && (g = i > 0 ? Math.round(n / i) * i : n), x === "free" && i > 0 && (x = "grid"), {
		x: h,
		y: g,
		d: 0,
		kind: x,
		hot: y || b
	};
}
var z = (e) => e ? e.src === "wall" ? "edge" : "guide" : "free", B = (e, t, n, r) => n <= r ? e : t;
function V(e) {
	let t = e?.ppm || (e?.w ? e.w / 12 : 0);
	return {
		ppm: t,
		ww: t ? e.w / t : 0,
		wh: t ? e.h / t : 0
	};
}
function H(e, t, n) {
	let { ppm: r, ww: i } = V(e);
	if (!r) return [0, 0];
	let a = t / r;
	return [e.flipX ? i - a : a, n / r];
}
function U(e) {
	let t = e?.walls;
	if (!Array.isArray(t) || !t.length) return [];
	let n = [];
	for (let r of t) {
		if (!Array.isArray(r) || r.length < 4) continue;
		let [t, i] = H(e, r[0], r[1]), [a, o] = H(e, r[2], r[3]);
		n.push({
			x1: Math.min(t, a),
			y1: Math.min(i, o),
			x2: Math.max(t, a),
			y2: Math.max(i, o)
		});
	}
	return n;
}
function W(e, t = .02) {
	let n = [];
	for (let r of e) {
		let e = n[n.length - 1];
		(!e || m(e[0], e[1], r[0], r[1]) > t) && n.push([r[0], r[1]]);
	}
	for (; n.length > 3 && m(n[0][0], n[0][1], n[n.length - 1][0], n[n.length - 1][1]) <= t;) n.pop();
	if (n.length < 4) return n;
	let r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[(e - 1 + n.length) % n.length], a = n[e], o = n[(e + 1) % n.length], s = (a[0] - i[0]) * (o[1] - i[1]) - (a[1] - i[1]) * (o[0] - i[0]), c = m(i[0], i[1], o[0], o[1]) || 1;
		Math.abs(s) / c > t && r.push(a);
	}
	let i = [];
	for (let e of r) {
		let n = i[i.length - 1];
		(!n || m(n[0], n[1], e[0], e[1]) > t) && i.push(e);
	}
	for (; i.length > 3 && m(i[0][0], i[0][1], i[i.length - 1][0], i[i.length - 1][1]) <= t;) i.pop();
	return i.length >= 3 ? i : n;
}
function G(e) {
	return JSON.stringify(e);
}
function K(e) {
	let t = JSON.parse(e), n = f(), r = {
		...n,
		...t
	};
	r.base = {
		...n.base,
		...t.base || {}
	};
	for (let e of [
		"walls",
		"rooms",
		"openings",
		"furniture",
		"devices",
		"strips"
	]) Array.isArray(r[e]) || (r[e] = []);
	let i = r;
	((t.v | 0) < 2 || !r.walls.length && r.rooms.length) && (i = te(r));
	let { rooms: a } = P(i, i.walls, i.rooms);
	return i.rooms = a, i.v = 2, i.walls = i.walls.map((e) => ({
		id: e.id || d("w"),
		x1: +e.x1,
		y1: +e.y1,
		x2: +e.x2,
		y2: +e.y2,
		t: e.t > 0 ? +e.t : s,
		h: e.h > 0 ? +e.h : 0,
		kind: e.kind === "virtual" ? "virtual" : "solid",
		color: e.color || ""
	})), i.openings = i.openings.map((e) => ({
		id: e.id || d("o"),
		type: e.type === "window" ? "window" : "door",
		wallId: e.wallId,
		offset: +e.offset || 0,
		width: e.width ?? e.w ?? .9,
		height: e.height ?? e.h ?? (e.type === "window" ? 1.2 : 2.1),
		bottom: e.bottom ?? (e.type === "window" ? .9 : 0),
		windowStyle: e.windowStyle || "standard",
		hasLeaf: e.hasLeaf ?? e.type === "door",
		doorStyle: e.doorStyle || "single",
		swing: e.swing === "outward" ? "outward" : "inward",
		hinge: e.hinge === "end" ? "end" : "start",
		entityId: e.entityId || ""
	})).filter((e) => i.walls.some((t) => t.id === e.wallId)), i.strips = (r.strips || []).map((e) => re(e, i.rooms)).filter(Boolean), i;
}
var q = [
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
		kind: "coffee",
		name: "茶几",
		w: .9,
		d: .9
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
		kind: "wallcab",
		name: "吊柜",
		w: .9,
		d: .35
	},
	{
		kind: "plant",
		name: "绿植",
		w: .5,
		d: .5
	}
], J = [
	"#7dd3fc",
	"#a5b4fc",
	"#fca5a5",
	"#fcd34d",
	"#86efac",
	"#f9a8d4",
	"#fdba74",
	"#c4b5fd"
];
function Y(e) {
	return J[e % J.length];
}
function X(e) {
	if (!e || e.length < 2) return [];
	let t = [];
	for (let n = 0, r = e.length; n < r; n++) {
		let [i, a] = e[n], [o, s] = e[(n + 1) % r];
		t.push({
			x1: i,
			y1: a,
			x2: o,
			y2: s
		});
	}
	return t;
}
var Z = (e) => {
	let t = typeof e == "number" ? e : parseFloat(e);
	return Number.isFinite(t) ? t : null;
};
function Q(e, t, n, r, i, a) {
	let o = -(r - t), s = n - e, c = Math.hypot(o, s);
	if (!(c > 1e-9)) return null;
	o /= c, s /= c;
	let l = i - (e + n) / 2, u = a - (t + r) / 2;
	return o * l + s * u > 0 ? [o, s] : [-o, -s];
}
function ne(e, t = .14) {
	let n = (Array.isArray(e) ? e : []).map((e) => [Z(e?.[0]), Z(e?.[1])]).filter((e) => e[0] != null && e[1] != null);
	if (n.length < 3 || !(t > 0)) return null;
	let r = n.reduce((e, t) => e + t[0], 0) / n.length, i = n.reduce((e, t) => e + t[1], 0) / n.length, a = [];
	for (let e = 0, o = n.length; e < o; e++) {
		let [s, c] = n[e], [l, u] = n[(e - 1 + o) % o], [d, f] = n[(e + 1) % o], p = Q(l, u, s, c, r, i), m = Q(s, c, d, f, r, i);
		if (!p || !m) continue;
		let h = p[0] + m[0], g = p[1] + m[1], _ = Math.hypot(h, g);
		if (!(_ > 1e-6)) continue;
		h /= _, g /= _;
		let v = Math.max(.5, p[0] * h + p[1] * g);
		a.push([s + t / v * h, c + t / v * g]);
	}
	return a.length >= 3 ? a : null;
}
function re(e, t) {
	if (!e || typeof e != "object") return null;
	let n = e.y == null ? null : Z(e.y), r = Number.isFinite(+e.color) && +e.color > 0 ? e.color & 16777215 : 16768926, i = {
		id: e.id || d("st"),
		y: n == null ? null : Math.min(4, Math.max(0, n)),
		color: r,
		on: !!e.on,
		brightness: Number.isFinite(+e.brightness) ? Math.min(1, Math.max(.01, +e.brightness)) : 1,
		entity: typeof e.entity == "string" ? e.entity : ""
	};
	if (e.kind === "loop") {
		let t = (Array.isArray(e.poly) ? e.poly : []).map((e) => [Z(e?.[0]), Z(e?.[1])]).filter((e) => e[0] != null && e[1] != null);
		return t.length >= 3 ? {
			...i,
			kind: "loop",
			poly: t
		} : null;
	}
	if (e.kind === "segment") {
		let t = Z(e.ax), n = Z(e.ay), r = Z(e.bx), a = Z(e.by);
		return [
			t,
			n,
			r,
			a
		].some((e) => e == null) || Math.hypot(r - t, a - n) < .05 ? null : {
			...i,
			kind: "segment",
			ax: t,
			ay: n,
			bx: r,
			by: a
		};
	}
	if ((e.kind === "room-ring" || e.kind === "ring") && e.roomId) {
		let n = (t || []).find((t) => t.id === e.roomId), r = n ? ne(n.poly, .14) : null;
		return r ? {
			...i,
			kind: "loop",
			poly: r
		} : null;
	}
	return null;
}
var ie = {
	matte: {
		name: "柔光砖",
		tile: "stone",
		color: "#e8e2d6",
		roughness: .45
	},
	wood: {
		name: "木纹砖",
		tile: "oak",
		color: "#c9a06a",
		roughness: .62
	},
	gloss: {
		name: "亮光砖",
		tile: "stone",
		color: "#e6e4df",
		roughness: .1
	}
}, $ = {
	stone: {
		name: "素色",
		wood: !1,
		base: "#e8e2d6"
	},
	marble: {
		name: "大理石",
		wood: !1,
		base: "#ece7de"
	},
	oak: {
		name: "浅橡木",
		wood: !0,
		base: "#c9a06a"
	},
	walnut: {
		name: "胡桃木",
		wood: !0,
		base: "#7a5233"
	},
	teak: {
		name: "柚木",
		wood: !0,
		base: "#b07b45"
	},
	ash: {
		name: "灰木",
		wood: !0,
		base: "#a89a8a"
	}
}, ae = [
	{
		label: "80×80",
		w: .8,
		d: .8
	},
	{
		label: "60×120",
		w: .6,
		d: 1.2
	},
	{
		label: "30×60",
		w: .3,
		d: .6
	},
	{
		label: "15×90",
		w: .15,
		d: .9
	}
];
function oe(e, t) {
	let n = e?.floor;
	return n ? n.color ? n.color : ($[n.tile] || {}).base || Y(t) : Y(t);
}
export { Y as A, S as C, F as D, h as E, x as F, T as I, b as L, G as M, R as N, O, d as P, w as R, v as S, _ as T, X as _, o as a, j as b, c, k as d, K as f, U as g, oe as h, q as i, p as j, y as k, ee as l, f as m, $ as n, l as o, m as p, ie as r, s, ae as t, V as u, L as v, g as w, A as x, C as y };
