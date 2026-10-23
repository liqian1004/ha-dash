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
var o = .15, s = .06, c = {
	solid: "实体墙",
	virtual: "透明边界"
}, l = 0;
function u(e = "e") {
	return e + Date.now().toString(36) + (l++).toString(36);
}
function d(e = "我的家") {
	return {
		v: 2,
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
			oy: 0,
			walls: [],
			wallsV: 0,
			wallsPpm: 0
		},
		walls: [],
		rooms: [],
		openings: [],
		furniture: [],
		devices: []
	};
}
var f = (e, t, n, r) => Math.hypot(n - e, r - t);
function p(e, t, n, r, i, a) {
	let o = i - n, s = a - r, c = o * o + s * s;
	if (c < 1e-12) return {
		t: 0,
		x: n,
		y: r,
		d: f(e, t, n, r)
	};
	let l = ((e - n) * o + (t - r) * s) / c;
	l = Math.max(0, Math.min(1, l));
	let u = n + o * l, d = r + s * l;
	return {
		t: l,
		x: u,
		y: d,
		d: f(e, t, u, d)
	};
}
function m(e) {
	let t = 0;
	for (let n = 0, r = e.length; n < r; n++) {
		let [i, a] = e[n], [o, s] = e[(n + 1) % r];
		t += i * s - o * a;
	}
	return Math.abs(t / 2);
}
function h(e) {
	let t = 0, n = 0, r = 0;
	for (let i = 0, a = e.length; i < a; i++) {
		let [o, s] = e[i], [c, l] = e[(i + 1) % a], u = o * l - c * s;
		t += u, n += (o + c) * u, r += (s + l) * u;
	}
	return Math.abs(t) < 1e-12 ? [e.reduce((e, t) => e + t[0], 0) / e.length, e.reduce((e, t) => e + t[1], 0) / e.length] : [n / (3 * t), r / (3 * t)];
}
function g(e, t, n) {
	let r = !1;
	for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
		let [o, s] = n[i], [c, l] = n[a];
		s > t != l > t && e < (c - o) * (t - s) / (l - s) + o && (r = !r);
	}
	return r;
}
function _(e, t, n) {
	for (let r = e.rooms.length - 1; r >= 0; r--) if (g(t, n, e.rooms[r].poly)) return e.rooms[r];
	return null;
}
function v(e) {
	return f(e.x1, e.y1, e.x2, e.y2);
}
function y(e) {
	let t = v(e) || 1e-9, n = (e.x2 - e.x1) / t, r = (e.y2 - e.y1) / t;
	return {
		ux: n,
		uy: r,
		nx: -r,
		ny: n,
		len: t,
		ang: Math.atan2(r, n)
	};
}
function b(e, t) {
	let n = y(e), r = n.len > 1e-9 ? Math.max(0, Math.min(1, t / n.len)) : 0;
	return {
		x: e.x1 + (e.x2 - e.x1) * r,
		y: e.y1 + (e.y2 - e.y1) * r,
		ux: n.ux,
		uy: n.uy,
		len: n.len,
		ang: n.ang
	};
}
function x(e, t, n, r, i = {}) {
	return {
		id: i.id || u("w"),
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
var S = (e) => e && e.t > 0 ? e.t : o, C = (e, t) => t && t.h > 0 ? t.h : e?.wallHeight ?? 1.2;
function w(e) {
	let t = [];
	for (let n of e) t.push([n.x1, n.y1], [n.x2, n.y2]);
	return t;
}
function T(e, t = s) {
	let n = w(e).map(([e, t]) => ({
		x: e,
		y: t
	})), r = n.map(() => -1), i = [];
	for (let e = 0; e < n.length; e++) {
		for (let a = 0; a < i.length; a++) if (f(n[e].x, n[e].y, i[a].x, i[a].y) <= t) {
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
	})), c = [];
	return e.forEach((e, t) => {
		let n = o[r[t * 2]], i = o[r[t * 2 + 1]];
		f(n.x, n.y, i.x, i.y) < 1e-4 || c.push({
			...e,
			x1: n.x,
			y1: n.y,
			x2: i.x,
			y2: i.y
		});
	}), c;
}
function ee(e, t) {
	let n = (e.walls || []).filter((e) => e.id !== t), r = new Set(n.map((e) => e.id));
	return {
		walls: n,
		openings: (e.openings || []).filter((e) => e.wallId !== t && r.has(e.wallId))
	};
}
function E(e, t) {
	let n = v(e), r = (t.width || .9) / 2, i = Math.min(r, n / 2), a = Math.max(n - r, n / 2);
	return {
		...t,
		offset: Math.max(i, Math.min(a, t.offset))
	};
}
function D(e, t) {
	let n = (e?.walls || []).find((e) => e.id === t.wallId);
	if (!n) return null;
	let r = y(n);
	if (r.len < .02) return null;
	let i = (t.width ?? .9) / 2, a = b(n, t.offset);
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
function O(e, t, n, r = .35) {
	let i = null;
	for (let a of e) {
		let e = p(t, n, a.x1, a.y1, a.x2, a.y2);
		e.d <= r && (!i || e.d < i.d) && (i = {
			wall: a,
			...e
		});
	}
	return i;
}
var k = (e, t, n, r, i = s) => f(e, t, n, r) <= i;
function te(e) {
	let t = e.map(([e, t]) => `${Math.round(e * 100)},${Math.round(t * 100)}`), n = null;
	for (let e = 0; e < t.length; e++) {
		let r = t.slice(e).concat(t.slice(0, e)).join("|");
		(n === null || r < n) && (n = r);
	}
	let r = 5381;
	for (let e = 0; e < n.length; e++) r = (r * 33 ^ n.charCodeAt(e)) >>> 0;
	return "r" + r.toString(36);
}
function A(e, t = e?.walls, n = e?.rooms) {
	let r = (t || []).filter((e) => v(e) > .02).map((e) => ({
		x1: e.x1,
		y1: e.y1,
		x2: e.x2,
		y2: e.y2
	})), i = [];
	r.length >= 3 && (i = a(r).filter((e) => e.area > 0));
	let o = i.filter((e) => e.area >= .6), s = i.length - o.length, c = /* @__PURE__ */ new Set(), l = (n || []).filter((e) => Array.isArray(e.poly) && e.poly.length >= 3), u = [], d = o.map((e) => h(e.poly));
	o.forEach((e, t) => {
		for (let n of l) {
			let r = h(n.poly), i = g(r[0], r[1], e.poly) ? 2 : 0, a = +!!g(d[t][0], d[t][1], n.poly);
			(i || a) && u.push({
				fi: t,
				room: n,
				score: i + a,
				area: Math.abs(m(n.poly)),
				d: f(d[t][0], d[t][1], r[0], r[1])
			});
		}
	}), u.sort((e, t) => t.score - e.score || t.area - e.area || e.d - t.d);
	let p = /* @__PURE__ */ new Map();
	for (let e of u) p.has(e.fi) || c.has(e.room.id) || (p.set(e.fi, e.room), c.add(e.room.id));
	let _ = 0;
	for (let e of l) {
		let t = /^房间\s*(\d+)$/.exec(e.name || "");
		t && (_ = Math.max(_, +t[1]));
	}
	let y = o.map((e, t) => {
		let n = p.get(t);
		return n || (_ += 1), {
			id: n?.id || te(e.poly),
			name: n?.name || `房间 ${_}`,
			poly: se(e.poly, .015)
		};
	});
	return y.sort((e, t) => Math.abs(m(t.poly)) - Math.abs(m(e.poly))), {
		rooms: y,
		tiny: s
	};
}
function j(e) {
	let { rooms: t, tiny: n } = A(e, e.walls, e.rooms);
	return e.rooms = t, {
		rooms: t,
		tiny: n
	};
}
function ne(e, t = {}) {
	return T((e || []).map((e) => x(e.x1, e.y1, e.x2, e.y2, t)).filter((e) => v(e) > .12), t.weld ?? .06);
}
function re(e) {
	let t = Array.isArray(e.rooms) ? e.rooms : [], n = [];
	for (let e of t) {
		let t = Array.isArray(e.poly) ? e.poly : [], r = t.length;
		for (let i = 0; i < r; i++) {
			let [a, o] = t[i], [s, c] = t[(i + 1) % r];
			f(a, o, s, c) < .02 || n.push({
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
	for (let e of n) r.some((t) => k(t.x1, t.y1, e.x1, e.y1) && k(t.x2, t.y2, e.x2, e.y2) || k(t.x1, t.y1, e.x2, e.y2) && k(t.x2, t.y2, e.x1, e.y1)) || r.push(x(e.x1, e.y1, e.x2, e.y2, {
		t: e.t,
		h: e.h,
		kind: e.kind,
		color: e.color
	}));
	let i = T(r), a = [];
	for (let n of e.openings || []) {
		let e = t.find((e) => e.id === n.roomId)?.poly;
		if (!e || e.length < 2) continue;
		let r = e.length, o = ((n.edge | 0) % r + r) % r, [s, c] = e[o], [l, d] = e[(o + 1) % r], p = f(s, c, l, d);
		if (p < .05) continue;
		let m = i.find((e) => k(e.x1, e.y1, s, c) && k(e.x2, e.y2, l, d) || k(e.x1, e.y1, l, d) && k(e.x2, e.y2, s, c));
		if (!m) continue;
		let h = k(m.x1, m.y1, s, c), g = Number.isFinite(n.t) ? n.t : .5, _ = h ? g * p : (1 - g) * p, { swing: v, hinge: y } = ie(e, s, c, l, d, _, h, n.width || n.w || .9);
		a.push({
			id: n.id || u("o"),
			type: n.type === "window" ? "window" : "door",
			wallId: m.id,
			offset: Math.max(0, Math.min(p, _)),
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
	}, { rooms: s } = A(o, o.walls, t);
	return o.rooms = s, o;
}
function ie(e, t, n, r, i, a, o, s) {
	let c = f(t, n, r, i), l = (r - t) / (c || 1), u = (i - n) / (c || 1), d = t + l * a, p = n + u * a, m = -u, _ = l, v = Math.min(.6, Math.max(.3, s)), y = g(d + m * v, p + _ * v, e), b = g(d - m * v, p - _ * v, e), x = y && !b, S = h(e), C = f(t, n, S[0], S[1]), w = f(r, i, S[0], S[1]);
	return {
		swing: x ? "inward" : "outward",
		hinge: (o ? C > w : w > C) ? "start" : "end"
	};
}
function ae(e, t, n = "door", r = {}) {
	let i = v(e), a = r.width ?? (n === "door" ? .9 : 1.2), o = a / 2, s = Math.min(o, i / 2), c = Math.max(i - o, i / 2);
	return {
		id: r.id || u("o"),
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
function M(e, t, n, r = .1, i = .05, a = {}) {
	let o = a.from || null, s = a.px > 0 ? a.px : 0, c = a.skip || null, l = (e?.walls || []).filter((e) => !c || !c.has(e.id)), u = s ? Math.min(.2, Math.max(r, 12 * s)) : r, d = s ? Math.min(.26, Math.max(.06, 15 * s)) : r, p = [];
	for (let e of a.guides || []) p.push({
		x1: e.x1,
		y1: e.y1,
		x2: e.x2,
		y2: e.y2,
		src: "guide"
	});
	for (let e of l) p.push({
		x1: e.x1,
		y1: e.y1,
		x2: e.x2,
		y2: e.y2,
		src: "wall",
		wallId: e.id
	});
	let m = null;
	for (let e of l) for (let [r, i] of [[e.x1, e.y1], [e.x2, e.y2]]) {
		let e = f(t, n, r, i);
		e <= u && (!m || e < m.d) && (m = {
			x: r,
			y: i,
			d: e,
			kind: "vertex"
		});
	}
	if (m) return m;
	if (a.points?.length) {
		let e = null;
		for (let [r, i] of a.points) {
			let a = f(t, n, r, i);
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
	for (let e of p) {
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
		hot: oe(y, b, _, v)
	};
	if (g !== null && h === null) {
		let e = null, n = u;
		for (let r of p) for (let [i, a] of [[r.x1, r.y1], [r.x2, r.y2]]) {
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
		for (let r of p) for (let [i, a] of [[r.x1, r.y1], [r.x2, r.y2]]) {
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
	let x = h !== null || g !== null ? N(h === null ? b : y) : "free";
	if (o) {
		let e = .035, r = d * 2.5;
		for (let i of p) {
			let a = Math.min(i.y1, i.y2), s = Math.max(i.y1, i.y2), c = Math.min(i.x1, i.x2), l = Math.max(i.x1, i.x2);
			if (Math.abs(i.x2 - i.x1) < 1e-6) {
				if (Math.abs(o[0] - i.x1) > e || o[1] < a - e || o[1] > s + e || Math.abs(t - i.x1) > r) continue;
				h = i.x1, x = N(i);
				break;
			}
			if (Math.abs(i.y2 - i.y1) < 1e-6) {
				if (Math.abs(o[1] - i.y1) > e || o[0] < c - e || o[0] > l + e || Math.abs(n - i.y1) > r) continue;
				g = i.y1, x = N(i);
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
var N = (e) => e ? e.src === "wall" ? "edge" : "guide" : "free", oe = (e, t, n, r) => n <= r ? e : t;
function P(e) {
	let t = e?.ppm || (e?.w ? e.w / 12 : 0);
	return {
		ppm: t,
		ww: t ? e.w / t : 0,
		wh: t ? e.h / t : 0
	};
}
function F(e, t, n) {
	let { ppm: r, ww: i } = P(e);
	if (!r) return [0, 0];
	let a = t / r;
	return [e.flipX ? i - a : a, n / r];
}
function I(e) {
	let t = e?.walls;
	if (!Array.isArray(t) || !t.length) return [];
	let n = [];
	for (let r of t) {
		if (!Array.isArray(r) || r.length < 4) continue;
		let [t, i] = F(e, r[0], r[1]), [a, o] = F(e, r[2], r[3]);
		n.push({
			x1: Math.min(t, a),
			y1: Math.min(i, o),
			x2: Math.max(t, a),
			y2: Math.max(i, o)
		});
	}
	return n;
}
function se(e, t = .02) {
	let n = [];
	for (let r of e) {
		let e = n[n.length - 1];
		(!e || f(e[0], e[1], r[0], r[1]) > t) && n.push([r[0], r[1]]);
	}
	for (; n.length > 3 && f(n[0][0], n[0][1], n[n.length - 1][0], n[n.length - 1][1]) <= t;) n.pop();
	if (n.length < 4) return n;
	let r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[(e - 1 + n.length) % n.length], a = n[e], o = n[(e + 1) % n.length], s = (a[0] - i[0]) * (o[1] - i[1]) - (a[1] - i[1]) * (o[0] - i[0]), c = f(i[0], i[1], o[0], o[1]) || 1;
		Math.abs(s) / c > t && r.push(a);
	}
	let i = [];
	for (let e of r) {
		let n = i[i.length - 1];
		(!n || f(n[0], n[1], e[0], e[1]) > t) && i.push(e);
	}
	for (; i.length > 3 && f(i[0][0], i[0][1], i[i.length - 1][0], i[i.length - 1][1]) <= t;) i.pop();
	return i.length >= 3 ? i : n;
}
function L(e) {
	return JSON.stringify(e);
}
function R(e) {
	let t = JSON.parse(e), n = d(), r = {
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
		"devices"
	]) Array.isArray(r[e]) || (r[e] = []);
	let i = r;
	((t.v | 0) < 2 || !r.walls.length && r.rooms.length) && (i = re(r));
	let { rooms: a } = A(i, i.walls, i.rooms);
	return i.rooms = a, i.v = 2, i.walls = i.walls.map((e) => ({
		id: e.id || u("w"),
		x1: +e.x1,
		y1: +e.y1,
		x2: +e.x2,
		y2: +e.y2,
		t: e.t > 0 ? +e.t : o,
		h: e.h > 0 ? +e.h : 0,
		kind: e.kind === "virtual" ? "virtual" : "solid",
		color: e.color || ""
	})), i.openings = i.openings.map((e) => ({
		id: e.id || u("o"),
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
	})).filter((e) => i.walls.some((t) => t.id === e.wallId)), i;
}
var z = [
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
], B = [
	"#7dd3fc",
	"#a5b4fc",
	"#fca5a5",
	"#fcd34d",
	"#86efac",
	"#f9a8d4",
	"#fdba74",
	"#c4b5fd"
];
function V(e) {
	return B[e % B.length];
}
// src/floor3d/editor.js
var H = {
	bg: "#070a10",
	grid: "rgba(120,150,200,.07)",
	gridBold: "rgba(120,150,200,.13)",
	wall: "#c9d6e8",
	wallSide: "rgba(120,150,200,.30)",
	sel: "#5eead4",
	wallSel: "#fbbf24",
	draft: "#fbbf24",
	guide: "rgba(94,234,212,.34)",
	guideHot: "#5eead4",
	door: "#f0a45c",
	window: "#6fd3ff",
	text: "rgba(230,240,255,.86)",
	textDim: "rgba(160,180,210,.55)",
	device: "#8ab4f8"
}, ce = {
	vertex: "墙角",
	corner: "墙角",
	guide: "底图墙线",
	edge: "已有墙",
	axis: "已锁直",
	grid: "网格",
	free: ""
}, le = 11, ue = 10, de = 8, fe = class {
	constructor(e) {
		this.host = e, this.plan = null, this.hass = null, this.tool = "select", this.draft = {
			from: null,
			ids: []
		}, this.cursor = null, this.sel = null, this.guides = [], this.showGuides = !0, this.hot = null, this.wallT = o, this.view = {
			k: 60,
			tx: 0,
			ty: 0
		}, this.listeners = {
			change: [],
			sel: [],
			draft: [],
			tool: [],
			rooms: []
		}, this._drag = null, this._pan = null, this._press = null, this._raf = 0, this._imgs = /* @__PURE__ */ new Map();
		let t = document.createElement("canvas");
		t.className = "fe-canvas", t.tabIndex = 0, e.appendChild(t), this.cv = t, this.ctx = t.getContext("2d"), this._bind(), this._resize(), this._ro = new ResizeObserver(() => this._resize()), this._ro.observe(e);
	}
	destroy() {
		this._ro?.disconnect(), cancelAnimationFrame(this._raf), window.removeEventListener("keydown", this._kd), window.removeEventListener("keyup", this._ku), this.cv.remove();
	}
	on(e, t) {
		var n;
		return ((n = this.listeners)[e] || (n[e] = [])).push(t), this;
	}
	emit(e, ...t) {
		(this.listeners[e] || []).forEach((e) => e(...t));
	}
	setPlan(e) {
		return this.plan = e, this.draft = {
			from: null,
			ids: []
		}, this.sel = null, this.refreshGuides(), this.requestRender(), this;
	}
	setHass(e) {
		this.hass = e, this.requestRender();
	}
	refreshGuides() {
		return this.guides = I(this.plan?.base), this.requestRender(), this.guides;
	}
	setTool(e) {
		this.tool !== e && (this.tool = e, this.draft = {
			from: null,
			ids: []
		}, e !== "calibrate" && (this.calibPts = []), this.emit("tool", e), this.requestRender());
	}
	endDraft() {
		return this.draft.from ? (this.draft = {
			from: null,
			ids: []
		}, this.emit("draft", this.draft), this.requestRender(), !0) : !1;
	}
	flushChain() {
		return this.endDraft();
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
		for (let e of t?.walls || []) r(e.x1, e.y1), r(e.x2, e.y2);
		for (let e of t?.rooms || []) e.poly.forEach(([e, t]) => r(e, t));
		for (let e of t?.furniture || []) r(e.x, e.y);
		for (let e of this.guides) r(e.x1, e.y1), r(e.x2, e.y2);
		if (!n && t?.base?.src && t.base.w) {
			let { ww: e, wh: n } = P(t.base);
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
		e && (e.setTransform(n, 0, 0, n, 0, 0), e.clearRect(0, 0, this.w, this.h), e.fillStyle = H.bg, e.fillRect(0, 0, this.w, this.h), this._drawGrid(), this._drawBase(), this.plan && (this._drawGuides(), this._drawRooms(), this._drawWalls(), this._drawHot(), this._drawOpenings(), this._drawFurniture(), this._drawDevices(), this._drawLabels(), this._drawDraft(), this._drawCalib(), this._drawScaleHint()));
	}
	_drawCalib() {
		if (this.tool !== "calibrate" || !this.calibPts?.length) return;
		let { ctx: e } = this, [t, n] = this.calibPts[0], [r, i] = this.toScreen(t, n), [a, o] = this.cursor ? this.toScreen(this.cursor.x, this.cursor.y) : [r, i];
		e.save(), e.strokeStyle = H.draft, e.lineWidth = 2, e.setLineDash([7, 5]), e.beginPath(), e.moveTo(r, i), e.lineTo(a, o), e.stroke(), e.setLineDash([]);
		for (let [t, n] of [[r, i], [a, o]]) e.beginPath(), e.arc(t, n, 5, 0, Math.PI * 2), e.fillStyle = H.draft, e.fill();
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
			e.strokeStyle = Math.abs(i % 1) < 1e-6 ? H.gridBold : H.grid, e.beginPath(), e.moveTo(n, 0), e.lineTo(n, this.h), e.stroke();
		}
		for (let r = i; r <= o; r += n) {
			let n = Math.round(r * t.k + t.ty) + .5;
			e.strokeStyle = Math.abs(r % 1) < 1e-6 ? H.gridBold : H.grid, e.beginPath(), e.moveTo(0, n), e.lineTo(this.w, n), e.stroke();
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
		let { ww: n, wh: r } = P(e), [i, a] = this.toScreen(0, 0), [o, s] = this.toScreen(n, r);
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
		e.save(), e.strokeStyle = H.guide, e.lineWidth = 1.6, e.lineCap = "round", e.shadowColor = "rgba(94,234,212,.45)", e.shadowBlur = 5, e.beginPath();
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
		let { ctx: e } = this;
		this.plan.rooms.forEach((t, n) => {
			let r = this.sel?.type === "room" && this.sel.id === t.id, i = V(n);
			this._pathPoly(t.poly), e.fillStyle = r ? "rgba(94,234,212,.18)" : this._tint(i, .11), e.fill(), r && (e.strokeStyle = "rgba(94,234,212,.5)", e.lineWidth = 1.2, e.setLineDash([4, 4]), e.stroke(), e.setLineDash([]));
		});
	}
	_drawWalls() {
		let { ctx: e } = this, t = this.view.k;
		e.lineCap = "square", e.lineJoin = "miter";
		for (let n of this.plan.walls) {
			let r = this.sel?.type === "wall" && this.sel.id === n.id, i = n.kind === "virtual", [a, o] = this.toScreen(n.x1, n.y1), [s, c] = this.toScreen(n.x2, n.y2);
			e.lineWidth = i ? 1.6 : Math.max(2, S(n) * t), e.setLineDash(i ? [6, 5] : []), e.strokeStyle = r ? H.wallSel : i ? "rgba(150,185,215,.5)" : n.color || H.wall, e.beginPath(), e.moveTo(a, o), e.lineTo(s, c), e.stroke();
		}
		if (e.setLineDash([]), this.tool === "select" && t >= 24 && this.plan.walls.length <= 80) for (let t of this.plan.walls) for (let [n, r] of [[t.x1, t.y1], [t.x2, t.y2]]) {
			let [t, i] = this.toScreen(n, r);
			e.beginPath(), e.arc(t, i, 3.2, 0, Math.PI * 2), e.fillStyle = "#0b1220", e.fill(), e.strokeStyle = "rgba(201,214,232,.75)", e.lineWidth = 1.6, e.stroke();
		}
		if (this.sel?.type === "wall") {
			let t = this.plan.walls.find((e) => e.id === this.sel.id);
			if (t) for (let [n, r] of [[t.x1, t.y1], [t.x2, t.y2]]) {
				let [t, i] = this.toScreen(n, r);
				e.beginPath(), e.rect(t - 4.5, i - 4.5, 9, 9), e.fillStyle = "#0b1220", e.fill(), e.strokeStyle = H.wallSel, e.lineWidth = 2, e.stroke();
			}
		}
	}
	_drawHot() {
		let { ctx: e } = this, t = [];
		if (this.hot && this.tool === "wall" && t.push({
			seg: this.hot,
			w: 3.2,
			col: this.hot.src === "wall" ? H.draft : H.guideHot
		}), this.sel?.type === "wall") {
			let e = this.plan.walls.find((e) => e.id === this.sel.id);
			e && t.push({
				seg: {
					x1: e.x1,
					y1: e.y1,
					x2: e.x2,
					y2: e.y2
				},
				w: 3.6,
				col: H.wallSel
			});
		}
		if (t.length) {
			e.save();
			for (let n of t) {
				let [t, r] = this.toScreen(n.seg.x1, n.seg.y1), [i, a] = this.toScreen(n.seg.x2, n.seg.y2);
				e.strokeStyle = n.col, e.lineWidth = n.w, e.lineCap = "round", e.shadowColor = n.col, e.shadowBlur = 8, e.beginPath(), e.moveTo(t, r), e.lineTo(i, a), e.stroke(), e.shadowBlur = 0;
			}
			e.restore();
		}
	}
	_tint(e, t) {
		let n = parseInt(e.slice(1), 16);
		return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${t})`;
	}
	_drawOpenings() {
		let { ctx: e } = this, t = this.view.k;
		for (let n of this.plan.openings) {
			let r = D(this.plan, n);
			if (!r) continue;
			let i = this.sel?.type === "opening" && this.sel.id === n.id, [a, o] = this.toScreen(r.ax, r.ay), [s, c] = this.toScreen(r.bx, r.by), l = Math.max(2, S(r.wall) * t), u = n.entityId ? this.hass?.states?.[n.entityId]?.state : null, d = i ? H.sel : u === "on" ? "#fbbf24" : n.type === "window" ? H.window : H.door;
			e.save(), e.lineCap = "butt", e.strokeStyle = H.bg, e.lineWidth = l, e.beginPath(), e.moveTo(a, o), e.lineTo(s, c), e.stroke();
			let f = -(c - o), p = s - a, m = Math.hypot(f, p) || 1, h = f / m, g = p / m;
			if (n.type === "window") {
				let t = l * .34;
				e.strokeStyle = d, e.lineWidth = 1.6, e.beginPath(), e.moveTo(a - h * t, o - g * t), e.lineTo(s - h * t, c - g * t), e.moveTo(a + h * t, o + g * t), e.lineTo(s + h * t, c + g * t), e.stroke(), e.strokeStyle = this._tint(i ? H.sel : H.window, .55), e.lineWidth = 1, e.beginPath(), e.moveTo(a, o), e.lineTo(s, c), e.stroke(), n.windowStyle === "sliding" && (e.beginPath(), e.moveTo((a + s) / 2 - h * t, (o + c) / 2 - g * t), e.lineTo((a + s) / 2 + h * t, (o + c) / 2 + g * t), e.stroke());
			} else if (e.strokeStyle = this._tint(d, .85), e.lineWidth = 2, e.beginPath(), e.moveTo(a, o), e.lineTo(s, c), e.stroke(), n.hasLeaf !== !1 && n.doorStyle === "sliding") {
				let t = l * .2, n = (a + s) / 2, r = (o + c) / 2;
				e.strokeStyle = d, e.lineWidth = 2.4, e.beginPath(), e.moveTo(a - h * t, o - g * t), e.lineTo(n - h * t, r - g * t), e.moveTo(n + h * t, r + g * t), e.lineTo(s + h * t, c + g * t), e.stroke(), e.lineWidth = 1.2, e.beginPath(), e.moveTo(n - h * t, r - g * t), e.lineTo(n - h * t - f / m * 3, r - g * t - p / m * 3), e.moveTo(n + h * t, r + g * t), e.lineTo(n + h * t + f / m * 3, r + g * t + p / m * 3), e.stroke();
			} else if (n.hasLeaf !== !1) {
				let a = Math.min(.7, Math.max(.35, n.width)), o = r.cx + r.nx * a, s = r.cy + r.ny * a, c = _(this.plan, o, s) ? 1 : -1, l = (n.swing === "outward" ? -1 : 1) * c, u = n.doorStyle === "double" ? [{
					hx: r.ax,
					hy: r.ay,
					tx: r.bx,
					ty: r.by,
					len: n.width / 2
				}, {
					hx: r.bx,
					hy: r.by,
					tx: r.ax,
					ty: r.ay,
					len: n.width / 2
				}] : [{
					hx: n.hinge === "end" ? r.bx : r.ax,
					hy: n.hinge === "end" ? r.by : r.ay,
					tx: n.hinge === "end" ? r.ax : r.bx,
					ty: n.hinge === "end" ? r.ay : r.by,
					len: n.width
				}];
				for (let n of u) {
					let a = n.hx + r.nx * l * n.len, o = n.hy + r.ny * l * n.len, [s, c] = this.toScreen(n.hx, n.hy), [u, f] = this.toScreen(a, o);
					e.strokeStyle = d, e.lineWidth = 2.4, e.beginPath(), e.moveTo(s, c), e.lineTo(u, f), e.stroke();
					let p = Math.atan2(f - c, u - s), [m, h] = this.toScreen(n.tx, n.ty), g = Math.atan2(h - c, m - s) - p;
					for (; g > Math.PI;) g -= Math.PI * 2;
					for (; g < -Math.PI;) g += Math.PI * 2;
					e.strokeStyle = this._tint(i ? H.sel : H.door, .5), e.lineWidth = 1.2, e.setLineDash([3, 3]), e.beginPath(), e.arc(s, c, n.len * t, p, p + g, g < 0), e.stroke(), e.setLineDash([]);
				}
			} else {
				e.strokeStyle = this._tint(d, .5), e.lineWidth = 1.2, e.setLineDash([4, 3]);
				let t = l * .3;
				e.beginPath(), e.moveTo(a - h * t, o - g * t), e.lineTo(s - h * t, c - g * t), e.moveTo(a + h * t, o + g * t), e.lineTo(s + h * t, c + g * t), e.stroke(), e.setLineDash([]);
			}
			if (i) for (let [t, n] of [[a, o], [s, c]]) e.beginPath(), e.arc(t, n, 3.5, 0, Math.PI * 2), e.fillStyle = H.sel, e.fill();
			e.restore();
		}
	}
	_drawFurniture() {
		let { ctx: e } = this;
		for (let t of this.plan.furniture) {
			let [n, r] = this.toScreen(t.x, t.y), i = t.w * this.view.k, a = t.d * this.view.k;
			e.save(), e.translate(n, r), e.rotate((t.rot || 0) * Math.PI / 180);
			let o = this.sel?.type === "furniture" && this.sel.id === t.id;
			e.fillStyle = o ? "rgba(94,234,212,.22)" : "rgba(150,170,200,.16)", e.strokeStyle = o ? H.sel : "rgba(160,185,215,.55)", e.lineWidth = 1.4, this._roundRect(-i / 2, -a / 2, i, a, Math.min(6, Math.min(i, a) * .18)), e.fill(), e.stroke(), this.view.k > 26 && (e.fillStyle = H.textDim, e.textAlign = "center", e.font = "10px system-ui,sans-serif", e.fillText(t.name || "", 0, 3)), e.restore();
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
			e.beginPath(), e.arc(r, i, c, 0, Math.PI * 2), e.fillStyle = o ? "rgba(110,190,255,.22)" : "rgba(140,160,190,.13)", e.fill(), e.strokeStyle = s ? H.sel : o ? "rgba(130,200,255,.85)" : "rgba(150,170,200,.5)", e.lineWidth = s ? 2.4 : 1.6, e.stroke(), this._deviceGlyph(n.art || n.dom, r, i, c * .62, o ? "#a8dcff" : "rgba(180,195,220,.7)"), n.name && this.view.k > 22 && (e.fillStyle = H.textDim, e.textAlign = "center", e.font = "10px system-ui,sans-serif", e.fillText(n.name, r, i + c + 12));
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
			let [r, i] = h(n.poly), [a, o] = this.toScreen(r, i), s = m(n.poly), c = this.sel?.type === "room" && this.sel.id === n.id;
			e.textAlign = "center", e.lineWidth = 3, e.strokeStyle = "rgba(6,9,14,.75)", e.font = `500 ${Math.min(15, Math.max(10, t.k * .22))}px system-ui,-apple-system,sans-serif`, e.strokeText(n.name, a, o - 2), e.fillStyle = c ? H.sel : H.text, e.fillText(n.name, a, o - 2), e.font = `400 ${Math.min(12, Math.max(9, t.k * .16))}px system-ui,-apple-system,sans-serif`, e.strokeText(s.toFixed(1) + " m²", a, o + 13), e.fillStyle = H.textDim, e.fillText(s.toFixed(1) + " m²", a, o + 13);
		}
	}
	_drawDraft() {
		let e = this.draft.from;
		if (!e) return;
		let { ctx: t } = this, n = this.view.k, r = Math.max(3, (this.wallT || .15) * n), [i, a] = this.toScreen(e[0], e[1]);
		if (t.globalAlpha = this.tool === "wall" ? 1 : .4, t.beginPath(), t.arc(i, a, 5, 0, Math.PI * 2), t.fillStyle = "#0b1220", t.fill(), t.strokeStyle = H.draft, t.lineWidth = 2.2, t.stroke(), this.cursor) {
			let [n, o] = this.toScreen(this.cursor.x, this.cursor.y);
			t.save(), t.lineCap = "butt", t.strokeStyle = "rgba(251,191,36,.20)", t.lineWidth = r, t.beginPath(), t.moveTo(i, a), t.lineTo(n, o), t.stroke(), t.strokeStyle = H.draft, t.lineWidth = 1.8, t.setLineDash([7, 5]), t.beginPath(), t.moveTo(i, a), t.lineTo(n, o), t.stroke(), t.setLineDash([]);
			let s = f(e[0], e[1], this.cursor.x, this.cursor.y).toFixed(2) + " m", c = ce[this.cursor.kind] || "";
			t.font = "600 11px ui-monospace,Menlo,monospace";
			let l = t.measureText(s).width, u = l + (c ? t.measureText(c).width + 20 : 14), d = n + 14, p = o - 26;
			t.fillStyle = "rgba(12,14,20,.92)", this._roundRect(d, p, u, 21, 6), t.fill(), t.strokeStyle = "rgba(251,191,36,.35)", t.lineWidth = 1, t.stroke(), t.fillStyle = H.draft, t.textAlign = "left", t.fillText(s, d + 7, p + 14), c && (t.fillStyle = "rgba(94,234,212,.9)", t.font = "500 10px system-ui,sans-serif", t.fillText(c, d + 11 + l, p + 14)), t.restore();
		}
		t.globalAlpha = 1;
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
		e.strokeStyle = "rgba(180,200,225,.55)", e.lineWidth = 1.5, e.beginPath(), e.moveTo(18, i), e.lineTo(18 + r, i), e.moveTo(18, i - 4), e.lineTo(18, i + 4), e.moveTo(18 + r, i - 4), e.lineTo(18 + r, i + 4), e.stroke(), e.fillStyle = H.textDim, e.font = "11px system-ui,sans-serif", e.textAlign = "center", e.fillText(n + " m", 18 + r / 2, i - 8);
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
			this.tool === "wall" && this.endDraft();
		}), e.addEventListener("contextmenu", (e) => e.preventDefault()), window.addEventListener("keydown", this._kd = (e) => this._key(e)), window.addEventListener("keyup", this._ku = (e) => this._keyUp(e));
	}
	_local(e) {
		let t = this.cv.getBoundingClientRect();
		return [e.clientX - t.left, e.clientY - t.top];
	}
	_hitTest(e, t) {
		let n = this.plan;
		if (!n) return null;
		let r = this.view.k > 0 ? 1 / this.view.k : .02, i = le * r, a = ue * r, o = de * r, s = null;
		for (let r of n.walls) for (let n of [0, 1]) {
			let a = f(e, t, n ? r.x2 : r.x1, n ? r.y2 : r.y1);
			a <= i && (!s || a < s.d) && (s = {
				type: "wall-end",
				id: r.id,
				which: n,
				d: a
			});
		}
		if (s) return s;
		for (let i of n.openings) {
			let o = D(n, i);
			if (o && p(e, t, o.ax, o.ay, o.bx, o.by).d <= Math.max(a, S(o.wall) / 2 + 2 * r)) return {
				type: "opening",
				id: i.id,
				wallId: i.wallId
			};
		}
		for (let r of n.devices) if (f(e, t, r.x, r.y) <= .34) return {
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
		let c = O(n.walls, e, t, .6);
		if (c) {
			let e = Math.max(o, S(c.wall) / 2 + 2 * r);
			if (c.d <= e) return {
				type: "wall",
				id: c.wall.id
			};
		}
		let l = _(n, e, t);
		return l ? {
			type: "room",
			id: l.id
		} : null;
	}
	_snapAt(e, t) {
		let n = this.view.k > 0 ? 1 / this.view.k : 0, r = M(this.plan, e, t, .1, .02, {
			guides: this.guides,
			from: this.draft.from,
			px: n
		});
		return this.hot = r.hot || null, r;
	}
	_down(e) {
		let [t, n] = this._local(e);
		try {
			this.cv.setPointerCapture?.(e.pointerId);
		} catch {}
		if (e.button === 2) {
			if (this.tool === "wall" && this._undoSegment()) return;
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
		let [r, i] = this.toWorld(t, n);
		if (this.tool === "calibrate") {
			if (this.calibPts = this.calibPts || [], this.calibPts.length >= 2 && (this.calibPts = []), this.calibPts.push([r, i]), this.calibPts.length === 2) {
				let [e, t] = this.calibPts[0];
				this.emit("calibrated", f(e, t, r, i));
			}
			this.requestRender();
			return;
		}
		if (this.tool === "wall") {
			this._press = {
				sx: t,
				sy: n
			}, this._commit(r, i);
			return;
		}
		if (this.tool === "door" || this.tool === "window") {
			let e = O(this.plan.walls, r, i, .5);
			if (!e) {
				this.emit("notice", "没点中墙：把门/窗放在墙上才能开洞");
				return;
			}
			let t = e.wall, n = ae(t, e.t * v(t), this.tool, { width: this.tool === "door" ? .9 : 1.2 });
			this.plan.openings.push(n), this.select({
				type: "opening",
				id: n.id
			}), this._changed(), this.emit("notice", this.tool === "door" ? "门洞已开；要装门扇就在右侧打开「显示门扇」" : "窗已放上；离地高度可按需调整");
			return;
		}
		let a = this._hitTest(r, i);
		if (a) {
			if (this.select(a.type === "wall-end" ? {
				type: "wall",
				id: a.id
			} : a), a.type === "wall-end") {
				let e = this.plan.walls.find((e) => e.id === a.id), t = a.which === 0 ? e.x1 : e.x2, n = a.which === 0 ? e.y1 : e.y2, r = this.plan.walls.filter((e) => f(e.x1, e.y1, t, n) <= .06 || f(e.x2, e.y2, t, n) <= .06).map((e) => e.id);
				this._drag = {
					kind: "wall-end",
					id: a.id,
					which: a.which,
					x0: t,
					y0: n,
					mates: r
				};
			} else if (a.type === "furniture" || a.type === "device") {
				let e = (a.type === "furniture" ? this.plan.furniture : this.plan.devices).find((e) => e.id === a.id);
				this._drag = {
					kind: a.type,
					id: a.id,
					ox: r,
					oy: i,
					x0: e.x,
					y0: e.y
				};
			} else a.type === "opening" && (this._drag = {
				kind: "opening",
				id: a.id
			});
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
			if (e.kind === "wall-end") {
				let t = M(this.plan, r, i, .1, .02, {
					guides: this.guides,
					px: 1 / this.view.k,
					skip: new Set(e.mates || [e.id])
				});
				for (let n of this.plan.walls) (e.mates || [e.id]).includes(n.id) && (f(n.x1, n.y1, e.x0, e.y0) <= .06 && (n.x1 = t.x, n.y1 = t.y), f(n.x2, n.y2, e.x0, e.y0) <= .06 && (n.x2 = t.x, n.y2 = t.y));
				j(this.plan);
			} else if (e.kind === "furniture" || e.kind === "device") {
				let t = (e.kind === "furniture" ? this.plan.furniture : this.plan.devices).find((t) => t.id === e.id);
				t && (t.x = e.x0 + (r - e.ox), t.y = e.y0 + (i - e.oy));
			} else if (e.kind === "opening") {
				let t = this.plan.openings.find((t) => t.id === e.id), n = t && this.plan.walls.find((e) => e.id === t.wallId);
				if (t && n) {
					let e = p(r, i, n.x1, n.y1, n.x2, n.y2);
					t.offset = E(n, {
						...t,
						offset: e.t * v(n)
					}).offset;
				}
			}
			this.requestRender();
		} else if (this.tool === "select") {
			let e = this._hitTest(r, i);
			this.cv.style.cursor = e ? e.type === "wall-end" ? "move" : e.type === "opening" ? "ew-resize" : "pointer" : "default";
		} else (this.tool === "door" || this.tool === "window") && (this.cv.style.cursor = O(this.plan.walls, r, i, .5) ? "copy" : "default");
	}
	_up(e) {
		if (this._pan) this._pan = null, this.cv.style.cursor = "", this.requestRender();
		else if (this._drag) {
			let e = this._drag.kind;
			if (this._drag = null, this._changed(), e === "wall-end") {
				let { rooms: e, tiny: t } = j(this.plan);
				this.emit("rooms", {
					rooms: e.length,
					tiny: t,
					reason: "topology"
				});
			}
		} else if (this._press && this.tool === "wall") {
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
		t !== "input" && t !== "textarea" && t !== "select" && (e.key === "Shift" ? this._shift = !0 : e.key === " " ? (this._space = !0, e.preventDefault()) : e.key === "Escape" ? this.endDraft() || this.select(null) : e.key === "Enter" ? this.endDraft() : (e.key === "Delete" || e.key === "Backspace") && this.sel && (e.preventDefault(), this.deleteSelected()));
	}
	_keyUp(e) {
		e.key === "Shift" && (this._shift = !1), e.key === " " && (this._space = !1);
	}
	_commit(e, t) {
		let n = this._snapAt(e, t), r = this.plan, i = this.draft;
		if (!i.from) {
			i.from = [n.x, n.y], i.ids = [], this.emit("draft", i), this.requestRender();
			return;
		}
		let a = Math.max(.03, 6 / this.view.k);
		if (f(i.from[0], i.from[1], n.x, n.y) < a) return;
		r.walls.push(x(i.from[0], i.from[1], n.x, n.y, { t: this.wallT || .15 })), i.ids.push(r.walls[r.walls.length - 1].id), i.from = [n.x, n.y];
		let o = r.rooms.length, s = new Set(r.rooms.map((e) => e.id)), { rooms: c, tiny: l } = j(r), u = c.filter((e) => !s.has(e.id));
		u.length && (u.sort((e, t) => Math.abs(m(t.poly)) - Math.abs(m(e.poly))), this.select({
			type: "room",
			id: u[0].id
		})), this.emit("draft", i), this._changed(), c.length === o ? l && this.emit("rooms", {
			rooms: c.length,
			added: 0,
			tiny: l,
			reason: "tiny"
		}) : this.emit("rooms", {
			rooms: c.length,
			added: c.length - o,
			tiny: l,
			fresh: u.map((e) => e.id),
			reason: "draw"
		});
	}
	_undoSegment() {
		let e = this.draft;
		if (!e.ids?.length) return !1;
		let t = e.ids.pop(), n = this.plan.walls.findIndex((e) => e.id === t);
		if (n >= 0) {
			let r = this.plan.walls[n];
			e.from = [r.x1, r.y1], this.plan.walls.splice(n, 1), this.plan.openings = this.plan.openings.filter((e) => e.wallId !== t), j(this.plan);
		}
		return this.emit("draft", e), this._changed(), !0;
	}
	adoptGuides() {
		let e = this.guides;
		if (!e?.length) return {
			ok: !1,
			reason: "no-guides"
		};
		let t = ne(e, { t: this.wallT || .15 });
		if (!t.length) return {
			ok: !1,
			reason: "empty"
		};
		this.plan.walls = t, this.plan.openings = [], this.draft = {
			from: null,
			ids: []
		}, this.sel = null;
		let { rooms: n, tiny: r } = j(this.plan);
		return this._changed(), {
			ok: !0,
			walls: t.length,
			rooms: n.length,
			tiny: r
		};
	}
	applyWallT(e) {
		let t = Math.max(.06, Math.min(.6, Number(e) || .15));
		this.wallT = t;
		let n = 0;
		for (let e of this.plan.walls) e.t = t, n++;
		return this._changed(), n;
	}
	deleteWall(e) {
		let t = this.plan.rooms.length, { walls: n, openings: r } = ee(this.plan, e), i = this.plan.openings.length - r.length;
		this.plan.walls = n, this.plan.openings = r;
		let { rooms: a, tiny: o } = j(this.plan);
		return this.sel?.type === "wall" && this.sel.id === e && this.select(null), this._changed(), {
			ok: !0,
			wallId: e,
			lostOps: i,
			before: t,
			after: a.length,
			tiny: o
		};
	}
	deleteSelected() {
		let e = this.sel;
		if (!e) return;
		let t = this.plan;
		if (e.type === "wall") {
			let t = this.deleteWall(e.id);
			this.emit("wall-removed", t);
		} else e.type === "opening" ? t.openings = t.openings.filter((t) => t.id !== e.id) : e.type === "furniture" ? t.furniture = t.furniture.filter((t) => t.id !== e.id) : e.type === "device" ? t.devices = t.devices.filter((t) => t.id !== e.id) : e.type === "room" && this.emit("notice", "房间是墙围出来的结果，不能直接删 —— 想合并就删中间那堵墙"), this.select(null), this._changed();
	}
	addFurniture(e, t, n) {
		let r = z.find((t) => t.kind === e);
		if (!r) return;
		let i = {
			id: u("f"),
			kind: e,
			name: r.name,
			x: t ?? 0,
			y: n ?? 0,
			rot: 0,
			w: r.w,
			d: r.d
		};
		return this.plan.furniture.push(i), this.select({
			type: "furniture",
			id: i.id
		}), this._changed(), i;
	}
	addDevice(e, t, n, r) {
		let i = {
			id: u("d"),
			entity: e,
			name: t?.name || e,
			art: t?.art || "lamp",
			dom: t?.dom || "switch",
			x: n ?? 0,
			y: r ?? 0,
			rot: 0
		};
		return this.plan.devices.push(i), this.select({
			type: "device",
			id: i.id
		}), this._changed(), i;
	}
	applyCalibration(e, t) {
		if (!(t > 0) || !(e > 0)) return;
		let n = e / t;
		Math.abs(n - 1) < 1e-4 || (pe(this.plan, 1 / n), this.plan.base.ppm && (this.plan.base.ppm *= n), j(this.plan), this.refreshGuides(), this._changed(), this.requestRender());
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
function pe(e, t) {
	for (let n of e.walls || []) n.x1 *= t, n.y1 *= t, n.x2 *= t, n.y2 *= t, n.t = (n.t || .15) * t;
	for (let n of e.openings || []) n.offset *= t, n.width *= t, n.height *= t, n.bottom *= t;
	for (let n of e.furniture) n.x *= t, n.y *= t, n.w *= t, n.d *= t;
	for (let n of e.devices) n.x *= t, n.y *= t;
	for (let n of e.rooms) n.poly = n.poly.map(([e, n]) => [e * t, n * t]);
	return e;
}
// src/floor3d/extract.js
function me(e, t, n) {
	let r = new Uint8Array(t * n);
	for (let t = 0, n = 0; n < r.length; t += 4, n++) r[n] = e[t] * 77 + e[t + 1] * 150 + e[t + 2] * 29 >> 8;
	return r;
}
function he(e, t, n) {
	let r = t + 1, i = new Float64Array(r * (n + 1));
	for (let a = 0; a < n; a++) {
		let n = 0, o = a * t, s = (a + 1) * r, c = a * r;
		for (let r = 0; r < t; r++) n += e[o + r], i[s + r + 1] = i[c + r + 1] + n;
	}
	return i;
}
function ge(e, t, n, r, i, a) {
	let o = t + 1, s = Math.max(0, r - a), c = Math.min(t, r + a + 1), l = Math.max(0, i - a), u = Math.min(n, i + a + 1);
	return (e[u * o + c] - e[l * o + c] - e[u * o + s] + e[l * o + s]) / ((c - s) * (u - l));
}
function U(e, t, n, r, i) {
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
var W = (e, t, n, r) => U(U(e, t, n, r, !0), t, n, r, !1);
function G(e, t, n, r, i, a) {
	let o = new Float64Array(t * n);
	for (let i = 0; i < t * n; i++) o[i] = +(e[i] < r);
	let s = he(o, t, n), c = new Uint8Array(t * n);
	for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) c[e * t + r] = +(ge(s, t, n, r, e, i) > a);
	return c;
}
function K(e, t, n, r = {}) {
	let i = Math.max(.5, t / 1e3), a = Math.max(4, Math.min(16, r.radius ?? Math.round(7 * i)));
	return W(G(e, t, n, r.dark ?? 238, a, r.density ?? .42), t, n, 2);
}
function q(e, t, n, r = {}) {
	let i = r.ppm || t / 12, a = Math.max(.5, t / 1e3), o = Math.max(4, Math.min(16, r.radiusLines ?? Math.round(5 * a)));
	return W(G(e, t, n, r.darkLines ?? 170, o, r.densityLines ?? .16), t, n, Math.max(2, Math.round(r.close ?? .22 * i)));
}
function _e(e, t, n, r = {}) {
	let i = K(e, t, n, r), a = q(e, t, n, r), o = new Uint8Array(t * n);
	for (let e = 0; e < t * n; e++) o[e] = i[e] | a[e] ? 1 : 0;
	return o;
}
function J(e, t, n, r = {}) {
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
function ve(e, t = {}) {
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
	return ye(a, t);
}
function ye(e, t = {}) {
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
function be(e, t) {
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
function xe(e, t = {}) {
	let n = t.ppm || 100, r = (t.reach ?? .25) * n, i = (t.minClusterLen ?? 2) * n, a = e.length, o = (e) => Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
	if (a < 2) return e.filter((e) => o(e) >= i);
	let s = new Int32Array(a);
	for (let e = 0; e < a; e++) s[e] = e;
	let c = (e) => {
		for (; s[e] !== e;) s[e] = s[s[e]], e = s[e];
		return e;
	};
	for (let t = 0; t < a; t++) for (let n = t + 1; n < a; n++) {
		if (be(e[t], e[n]) > r) continue;
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
	let i = [...J(e, t, n, {
		...r,
		axis: "h"
	}), ...J(e, t, n, {
		...r,
		axis: "v"
	})];
	return i = ve(i, r), xe(i, r);
}
var X = (e) => Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
function Se(e, t, n, r = {}) {
	let i = r.ppm && r.ppm > 0 ? r.ppm : t / 12, a = {
		...r,
		ppm: i
	}, o = r.path || "auto", s;
	o === "lines" ? s = Y(q(e, t, n, a), t, n, a) : o === "fill" ? s = Y(K(e, t, n, a), t, n, a) : (s = Y(K(e, t, n, a), t, n, a), s.reduce((e, t) => e + X(t), 0) < 4 * i && (s = Y(_e(e, t, n, a), t, n, a))), s.sort((e, t) => X(t) - X(e));
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
var Z = "ha-dash.floorplan.v1", Ce = 1600, we = 1400, Te = [
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
], Ee = class {
	constructor(e, t = {}) {
		this.host = e, this.opts = t, this.mode = "edit", this.tool = "select", this.plan = Oe(), this.editor = null, this.scene = null, this.sel = null, this._hass = null, this._calibDist = 0, this._wallHint = "", this._showGuides = !0, this._busy = !1, this.el = document.createElement("div"), this.el.className = "fh", this.el.innerHTML = "\n      <style>.fh{z-index:20;background:var(--bg);color:var(--text);animation:fhIn .28s var(--ease);flex-direction:column;display:flex;position:absolute;top:0;bottom:0;left:0;right:0}.fh[hidden]{display:none}@keyframes fhIn{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}.fh-top{border-bottom:1px solid var(--line);background:linear-gradient(#131316,#0c0c0e);flex:none;align-items:center;gap:10px;height:54px;padding:0 14px;display:flex}.fh-seg{border:1px solid var(--line);background:#0e0e10;border-radius:11px;gap:2px;padding:3px;display:flex}.fh-seg button{color:var(--text-2);cursor:pointer;transition:.18s var(--ease);background:0 0;border:0;border-radius:8px;padding:7px 13px;font:500 12.5px/1 inherit}.fh-seg button.on{color:var(--text);background:#26262b;box-shadow:inset 0 1px #ffffff0d}.fh-seg button:hover:not(.on){color:var(--text)}.fh-tools{align-items:center;gap:3px;display:flex}.fh-tools[hidden]{display:none}.fh-tools[data-for=edit] button{white-space:nowrap;color:var(--text-3);cursor:pointer;transition:.16s var(--ease);background:0 0;border:1px solid #0000;border-radius:10px;flex-direction:column;flex:none;align-items:center;gap:3px;padding:5px 9px;font:400 10px/1 inherit;display:flex}.fh-tools[data-for=edit] button svg{fill:none;stroke:currentColor;stroke-width:1.7px;stroke-linecap:round;stroke-linejoin:round;width:17px;height:17px}.fh-tools[data-for=edit] button:hover{color:var(--text-2);background:#ffffff0a}.fh-tools[data-for=edit] button.on{color:var(--warm);background:#ffd9a01a;border-color:#ffd9a038}.fh-tools[data-for=view] button{border:1px solid var(--line);color:var(--text-2);cursor:pointer;background:#141417;border-radius:9px;padding:8px 12px;font:500 12px/1 inherit}.fh-spacer{flex:1}.fh-btn{border:1px solid var(--line);color:var(--text-2);cursor:pointer;background:#141417;border-radius:10px;width:34px;height:34px;font-size:16px}.fh-btn:hover{color:var(--text);border-color:var(--line-2)}.fh-body{flex:1;min-height:0;display:flex;position:relative}.fh-stage{background:#06070b;flex:1;min-width:0;position:relative;overflow:hidden}.fh-stage canvas{display:block;position:absolute;top:0;bottom:0;left:0;right:0}.fe-canvas{outline:none}.fh-loading{color:var(--text-3);place-items:center;font-size:13px;display:grid;position:absolute;top:0;bottom:0;left:0;right:0}.fh-panel{overscroll-behavior:contain;border-left:1px solid var(--line);background:#0d0d0f;flex:0 0 270px;width:270px;padding:14px 14px 60px;overflow-y:auto}.fh-panel[hidden]{display:none}.fh-sec{margin-bottom:20px}.fh-sec h4{color:var(--text-2);letter-spacing:.04em;margin-bottom:10px;font:600 12px/1 inherit}.fh-note{color:var(--text-3);margin-bottom:10px;font-size:11.5px;line-height:1.7}.fh-note b{color:var(--text-2);font-weight:600}.fh-mini{margin:-2px 0 8px;font-size:10.5px;line-height:1.55}.fh-keys{flex-wrap:wrap;gap:6px;display:flex}.fh-keys span{border:1px solid var(--line);color:var(--text-3);background:#131316;border-radius:8px;align-items:center;gap:5px;padding:5px 8px;font:400 10.5px/1 inherit;display:inline-flex}.fh-keys i{color:var(--warm);background:#ffd9a01a;border-radius:5px;padding:3px 5px;font:600 10px/1 ui-monospace,Menlo,monospace}.fh-wide[disabled]{opacity:.45;cursor:default}.fh-kv{border-bottom:1px solid #ffffff0a;justify-content:space-between;align-items:baseline;gap:10px;padding:7px 0;font-size:12px;display:flex}.fh-kv span{color:var(--text-3)}.fh-kv b{color:var(--text);font-weight:500}.fh-kv b.mono{text-overflow:ellipsis;white-space:nowrap;max-width:150px;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;overflow:hidden}.fh-field{color:var(--text-3);flex-direction:column;gap:7px;margin:12px 0;font-size:12px;display:flex}.fh-field input[type=range]{width:100%;accent-color:var(--warm-deep)}.fh-field input[type=checkbox]{width:16px;height:16px;accent-color:var(--warm-deep)}.fh-input{border:1px solid var(--line-2);width:100%;color:var(--text);background:#131316;border-radius:9px;outline:none;padding:8px 10px;font:500 13px/1.3 inherit}.fh-input:focus{border-color:#ffd9a066}.fh-wide{cursor:pointer;border:1px solid var(--line-2);width:100%;color:var(--text-2);transition:.16s var(--ease);background:#17171a;border-radius:10px;margin-top:6px;padding:10px;font:500 12.5px/1 inherit}.fh-wide:hover{color:var(--text);background:#1d1d21}.fh-wide.primary{color:#20170a;background:linear-gradient(#f0c78b,#d9a762);border-color:#0000;font-weight:600}.fh-danger{cursor:pointer;color:#ff9a9a;background:#ff5a5a14;border:1px solid #ff787838;border-radius:10px;width:100%;margin-top:10px;padding:9px;font:500 12px/1 inherit}.fh-danger:hover{background:#ff5a5a24}.fh-danger[disabled]{cursor:not-allowed;opacity:.45;color:#b98a8a;background:#ff5a5a0a;border-color:#ff787824}.fh-danger[disabled]:hover{background:#ff5a5a0a}.fh-row2{gap:8px;margin:10px 0;display:flex}.fh-row2 button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);background:#17171a;border-radius:9px;flex:1;padding:8px;font:500 12px/1 inherit}.fh-row2 button:hover{color:var(--text);background:#1d1d21}.fh-grid2{grid-template-columns:1fr 1fr;gap:6px;display:grid}.fh-chip{cursor:pointer;text-align:left;border:1px solid var(--line);color:var(--text-2);transition:.14s var(--ease);background:#131316;border-radius:10px;flex-direction:column;align-items:flex-start;gap:3px;padding:9px 10px;font:500 12px/1.2 inherit;display:flex}.fh-chip i{color:var(--text-3);font-size:10px;font-style:normal}.fh-chip:hover{border-color:var(--line-2);color:var(--text);background:#1a1a1e}.fh-list{flex-direction:column;gap:4px;display:flex}.fh-row{cursor:pointer;text-align:left;width:100%;color:var(--text-2);background:#121215;border:1px solid #0000;border-radius:9px;align-items:center;gap:8px;padding:9px 10px;font:500 12px/1 inherit;display:flex}.fh-row:hover{color:var(--text);background:#19191d}.fh-row .dot{background:#4a5568;border-radius:50%;flex:none;width:6px;height:6px}.fh-row.done .dot{background:var(--ok)}.fh-row .nm{text-overflow:ellipsis;white-space:nowrap;flex:1;overflow:hidden}.fh-row .rm{color:var(--text-3);font-size:10.5px}.fh-stats{border-top:1px solid var(--line);grid-template-columns:repeat(3,1fr);gap:8px;padding-top:12px;display:grid}.fh-stats div{text-align:center}.fh-stats b{color:var(--text);font:600 17px/1 inherit;display:block}.fh-stats span{color:var(--text-3);font-size:10.5px}.fh-hint{border:1px solid var(--line-2);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);max-width:min(560px,100% - 300px);color:var(--text-2);opacity:0;pointer-events:none;transition:.24s var(--ease);background:#141418eb;border-radius:99px;padding:9px 16px;font:450 12px/1.4 inherit;position:absolute;bottom:18px;left:50%;transform:translate(-50%,10px)}.fh-hint.on{opacity:1;transform:translate(-50%)}.fh-menu{z-index:40;border:1px solid var(--line-2);background:#151518;border-radius:12px;flex-direction:column;min-width:168px;padding:5px;display:flex;position:absolute;top:58px;right:14px;box-shadow:0 16px 40px #0009}.fh-menu[hidden]{display:none}.fh-menu button{text-align:left;cursor:pointer;color:var(--text-2);background:0 0;border:0;border-radius:8px;padding:9px 11px;font:500 12.5px/1 inherit}.fh-menu button:hover{color:var(--text);background:#1e1e22}.fh-menu button.danger{color:#ff9a9a}.fh-menu button.danger:hover{background:#ff5a5a1f}.fh-calib{z-index:50;border:1px solid var(--line-2);color:var(--text-2);background:#16161a;border-radius:12px;align-items:center;gap:8px;padding:10px 12px;font:450 12.5px/1 inherit;display:flex;position:absolute;bottom:70px;left:50%;transform:translate(-50%);box-shadow:0 16px 40px #0009}.fh-calib input{border:1px solid var(--line-2);width:90px;color:var(--text);background:#0f0f12;border-radius:8px;outline:none;padding:7px 9px;font:500 13px/1 inherit}.fh-calib button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);background:#1d1d21;border-radius:8px;padding:7px 13px;font:500 12px/1 inherit}.fh-calib button.primary{color:#20170a;background:linear-gradient(#f0c78b,#d9a762);border-color:#0000;font-weight:600}.fh-dev{z-index:30;border:1px solid var(--line-2);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);width:230px;animation:devIn .22s var(--ease);background:#121216f0;border-radius:16px;padding:14px;position:absolute;bottom:16px;right:16px;box-shadow:0 18px 44px #0000008c}@keyframes devIn{0%{opacity:0;transform:translateY(8px)scale(.98)}to{opacity:1;transform:none}}.fh-dev[hidden]{display:none}.fh-dev-head{justify-content:space-between;align-items:center;margin-bottom:4px;display:flex}.fh-dev-head b{font:600 13.5px/1 inherit}.fh-dev-head button{color:var(--text-3);cursor:pointer;background:0 0;border:0;padding:2px 4px;font-size:13px}.fh-dev-head button:hover{color:var(--text)}.fh-dev-sub{color:var(--text-3);margin-bottom:12px;font-size:11.5px}.floor3d-canvas{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0}.fh-seg2{gap:6px;display:flex}.fh-seg2 button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);transition:.14s var(--ease);background:#17171a;border-radius:9px;flex:1;padding:8px 6px;font:500 12px/1 inherit}.fh-seg2 button:hover{color:var(--text);background:#1d1d21}.fh-seg2 button.on{color:var(--warm);background:#ffd9a021;border-color:#ffd9a075}.fh-num{align-items:center;gap:8px;display:flex}.fh-num input[type=number]{border:1px solid var(--line-2);min-width:0;color:var(--text);background:#101014;border-radius:8px;flex:1;padding:7px 9px;font:500 12px/1 ui-monospace,Menlo,monospace}.fh-num input[type=number]:focus{border-color:#ffd9a066;outline:none}.fh-num em{color:var(--text-3);flex:none;font-size:11px;font-style:normal}.fh-num input[type=color]{border:1px solid var(--line-2);cursor:pointer;background:#101014;border-radius:8px;flex:none;width:40px;height:30px;padding:0}.fh-pick{color:var(--warm);border-color:#ffd9a066}.fh-stage{position:relative}.fh3d-info{z-index:6;pointer-events:none;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#e2eeffe6;background:#0d0f16b8;border:1px solid #8caadc29;border-radius:12px;flex-wrap:wrap;align-items:center;gap:10px;max-width:calc(100% - 28px);padding:9px 14px;font:500 12.5px/1.4 inherit;display:flex;position:absolute;top:14px;left:14px;box-shadow:0 4px 18px #00000059}.fh3d-info b{color:#fff;letter-spacing:.02em;font-size:13px}.fh3d-info i{color:#bed0ebd9;border-left:1px solid #8caadc33;align-items:center;padding-left:10px;font-style:normal;display:inline-flex}.fh3d-info i:first-of-type{border-left:none;padding-left:0}.fh3d-tools{z-index:6;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:#0d0f16c7;border:1px solid #8caadc2e;border-radius:12px;align-items:center;gap:8px;padding:8px 12px;display:flex;position:absolute;bottom:16px;left:50%;transform:translate(-50%);box-shadow:0 4px 18px #0006}.fh3d-tools button{color:#e2eeffe6;cursor:pointer;background:#ffffff0d;border:1px solid #8caadc33;border-radius:9px;width:34px;height:32px;font:600 14px/1 inherit;transition:all .12s}.fh3d-tools button:hover{background:#ffd9a026;border-color:#ffd9a073}.fh3d-tools button.del:hover{background:#f871712e;border-color:#f8717180}.fh3d-tools label{color:#bed0ebd9;align-items:center;gap:6px;font-size:12px;display:flex}.fh3d-tools input[type=range]{accent-color:#fbbf24;width:110px}.fh3d-tools b{color:#fbbf24;min-width:34px;font:600 12px/1 ui-monospace,Menlo,monospace}.fh3d-tools[hidden],.fh3d-info[hidden]{display:none}</style>\n      <header class=\"fh-top\">\n        <div class=\"fh-seg\">\n          <button data-mode=\"edit\" class=\"on\">编辑户型</button>\n          <button data-mode=\"view\">3D 展示</button>\n        </div>\n        <div class=\"fh-tools\" data-for=\"edit\"></div>\n        <div class=\"fh-spacer\"></div>\n        <div class=\"fh-tools\" data-for=\"view\" hidden>\n          <button data-act=\"fit\" title=\"居中\">⤢ 居中</button>\n        </div>\n        <button class=\"fh-btn\" data-act=\"menu\" title=\"更多\">⋯</button>\n      </header>\n      <div class=\"fh-body\">\n        <div class=\"fh-stage\"></div>\n        <aside class=\"fh-panel\"></aside>\n      </div>\n      <div class=\"fh-hint\"></div>\n      <div class=\"fh-menu\" hidden>\n        <button data-act=\"base\">导入参考底图</button>\n        <button data-act=\"export\">导出 JSON</button>\n        <button data-act=\"import\">导入 JSON</button>\n        <button data-act=\"clear\" class=\"danger\">清空户型</button>\n      </div>\n      <input type=\"file\" accept=\"image/*\" class=\"fh-file img\" hidden>\n      <input type=\"file\" accept=\"application/json,.json\" class=\"fh-file json\" hidden>\n      <div class=\"fh-dev\" hidden></div>\n    ", e.appendChild(this.el), this.el.__fh = this, this.$stage = this.el.querySelector(".fh-stage"), this.$panel = this.el.querySelector(".fh-panel"), this.$hint = this.el.querySelector(".fh-hint"), this.$menu = this.el.querySelector(".fh-menu"), this.$dev = this.el.querySelector(".fh-dev"), this._bindChrome(), this._renderTools(), this.enterEdit(), this.renderPanel();
	}
	setHass(e) {
		this._hass = e, this.editor?.setHass(e), this.scene?.setHass(e), this.sel?.type === "device" && this._paintDeviceCard(), this.mode === "view" && this._renderInfo();
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
		e.innerHTML = Te.map((e) => `
      <button data-tool="${e.key}" title="${e.label}" class="${e.key === this.tool ? "on" : ""}">
        <svg viewBox="0 0 24 24">${e.icon}</svg><span>${e.label}</span>
      </button>`).join(""), e.querySelectorAll("[data-tool]").forEach((e) => {
			e.onclick = () => this.setTool(e.dataset.tool);
		});
	}
	setTool(e) {
		this.mode !== "edit" && this.setMode("edit"), this.tool = e, this.el.querySelectorAll(".fh-tools[data-for=\"edit\"] [data-tool]").forEach((t) => t.classList.toggle("on", t.dataset.tool === e)), this.editor?.setTool(e), e === "calibrate" ? this._hint("在底图上点两个点，量一段已知长度的墙") : e === "wall" ? this._hint("点一下落点 → 移动 → 再点一下成一段；围起来就自动出房间，不用点回起点") : e === "door" || e === "window" ? this._hint("点一下已有的墙，把" + (e === "door" ? "门" : "窗") + "插进去") : this._hint(""), this.renderPanel();
	}
	setMode(e) {
		e === this.mode && (e === "edit" ? this.editor : this.scene) || (this.mode = e, this.el.querySelectorAll("[data-mode]").forEach((t) => t.classList.toggle("on", t.dataset.mode === e)), this.el.querySelector(".fh-tools[data-for=\"edit\"]").hidden = e !== "edit", this.el.querySelector(".fh-tools[data-for=\"view\"]").hidden = e !== "view", e === "edit" ? this.enterEdit() : this.enterView(), this.renderPanel());
	}
	enterEdit() {
		this.exitView(), this.$stage.innerHTML = "", this.editor = new fe(this.$stage), this.editor.setPlan(this.plan), this.editor.setHass(this._hass), this.editor.showGuides = this._showGuides, this.editor.setTool(this.tool), this.editor.on("change", (e) => {
			this.plan = e, $(e);
		}), this.editor.on("sel", (e) => {
			this.sel = e, this.renderPanel();
		}), this.editor.on("calibrated", (e) => this._askCalib(e)), this.editor.on("notice", (e) => this._hint(e)), this.editor.on("wall-removed", (e) => {
			let t = e.lostOps ? `，墙上的 ${e.lostOps} 个门窗一并移除` : "";
			e.after < e.before ? this._hint(`墙已拆除：${e.before} 间房合成 ${e.after} 间${t}`) : this._hint(`墙已拆除${t}；没围出新的房间（剩下的墙不闭合）`), this.renderPanel();
		}), this.editor.on("rooms", (e) => {
			e.reason === "tiny" ? this._hint(`有 ${e.tiny} 处墙没接上，围不出房间（小于 0.6 m² 的碎块已忽略）`) : e.added > 0 ? (this._hint(`围出了 ${e.added} 个新房间，现在一共 ${e.rooms} 间`), this.renderPanel(), e.fresh?.length && setTimeout(() => this.$panel.querySelector("[data-room-name]")?.select?.(), 60)) : (e.added < 0 && this._hint(`打通了 ${-e.added} 处，现在一共 ${e.rooms} 间`), this.renderPanel());
		}), this.editor.on("draft", (e) => {
			this.tool === "wall" && e.from && this._hint("移动鼠标定下一点；右键撤掉这一段 · Esc 结束这一笔");
		}), this.editor.fitView();
		let e = this.plan.base;
		e?.src && (!e.walls?.length || e.wallsV !== 3) && this._extractBase();
	}
	exitEdit() {
		this.editor?.endDraft(), this.editor?.destroy(), this.editor = null;
	}
	async enterView() {
		this.exitEdit(), this.$stage.innerHTML = "<div class=\"fh-loading\">正在准备 3D 场景…</div>";
		try {
			let { FloorScene: e } = await import("./chunk-XB8gjd5d.js");
			this.$stage.innerHTML = "", this.scene = new e(this.$stage), this.scene.setPlan(this.plan), this.scene.setHass(this._hass), this.scene.onChange = () => $(this.plan), this.scene.onSelect = (e) => {
				this.sel = e, e?.type === "device" ? (this._paintDeviceCard(), this.scene.highlight(e)) : e?.type === "furniture" ? (this._hideDeviceCard(), this.scene.highlight(e)) : (this._hideDeviceCard(), this.scene.highlight(null)), this._syncTools();
			}, this.$info = document.createElement("div"), this.$info.className = "fh3d-info", this.$stage.appendChild(this.$info), this._renderInfo(), this.$tools = document.createElement("div"), this.$tools.className = "fh3d-tools", this.$tools.hidden = !0, this.$tools.innerHTML = "\n        <button data-t=\"rot-l\" title=\"左转 45°\">↺</button>\n        <button data-t=\"rot-r\" title=\"右转 45°\">↻</button>\n        <label title=\"放大 / 缩小\">🔍<input type=\"range\" min=\"0.4\" max=\"3\" step=\"0.05\" data-t=\"scale\">\n          <b data-t=\"sv\">1.0×</b></label>\n        <button class=\"del\" data-t=\"del\" title=\"删除\">🗑</button>", this.$stage.appendChild(this.$tools), this.$tools.querySelector("[data-t=\"rot-l\"]").onclick = () => {
				this.scene.rotateSelected(-45), this.scene.highlight(this.sel);
			}, this.$tools.querySelector("[data-t=\"rot-r\"]").onclick = () => {
				this.scene.rotateSelected(45), this.scene.highlight(this.sel);
			};
			let t = this.$tools.querySelector("[data-t=\"scale\"]");
			t.oninput = () => {
				let e = parseFloat(t.value);
				this.$tools.querySelector("[data-t=\"sv\"]").textContent = e.toFixed(1) + "×", this.scene.scaleSelected(e), this.scene.highlight(this.sel);
			}, this.$tools.querySelector("[data-t=\"del\"]").onclick = () => {
				this.scene.deleteSelected() && (this.sel = null, this._hideDeviceCard(), this._syncTools());
			};
		} catch (e) {
			this.$stage.innerHTML = `<div class="fh-loading">3D 场景加载失败：${String(e.message || e)}</div>`;
		}
	}
	_syncTools() {
		if (!this.$tools) return;
		let e = this.sel, t = e && (e.type === "device" || e.type === "furniture");
		if (this.$tools.hidden = !t, !t) return;
		let n = (e.type === "device" ? this.plan.devices : this.plan.furniture).find((t) => t.id === e.id);
		if (n) {
			let e = n.scale || 1;
			this.$tools.querySelector("[data-t=\"scale\"]").value = e, this.$tools.querySelector("[data-t=\"sv\"]").textContent = e.toFixed(1) + "×";
		}
	}
	_renderInfo() {
		if (!this.$info) return;
		let e = this._hass?.states || {}, t = Object.values(e), n = {
			"clear-night": "晴",
			sunny: "晴",
			partlycloudy: "多云",
			cloudy: "阴",
			fog: "雾",
			hail: "冰雹",
			lightning: "雷雨",
			"lightning-rainy": "雷雨",
			poury: "暴雨",
			rainy: "雨",
			snowy: "雪",
			"snowy-rainy": "雨夹雪",
			windy: "大风",
			"windy-variant": "大风",
			exceptional: "异常"
		}, r = t.find((e) => e.entity_id?.startsWith("weather.")), i = t.find((e) => e.entity_id?.startsWith("climate.")), a = t.filter((e) => e.entity_id?.startsWith("person.")), o = (e, t = "") => Number.isFinite(+e) ? (+e).toFixed(1) + t : null, s = [];
		if (r) {
			let e = o(r.attributes?.temperature, "°"), t = n[r.state] || r.state;
			e && s.push(`<span>室外 ${e} ${t}</span>`);
			let i = o(r.attributes?.humidity, "%");
			i && s.push(`<span>湿度 ${i}</span>`);
		}
		let c = o(i?.attributes?.current_temperature, "°");
		if (c && s.push(`<span>室内 ${c}</span>`), a.length) {
			let e = a.filter((e) => e.state === "home").length;
			s.push(`<span>在家 ${e}/${a.length}</span>`);
		}
		s.length ? (this.$info.hidden = !1, this.$info.innerHTML = `<b>${Q(this.plan?.name || "我的家")}</b>${s.map((e) => `<i>${e}</i>`).join("")}`) : this.$info.hidden = !0;
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
        <div class="fh-grid2">${z.map((e) => `<button class="fh-chip" data-furn="${e.kind}">${e.name}<i>${e.w}×${e.d}</i></button>`).join("")}
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
          <div class="fh-kv"><span>面积</span><b>${m(r.poly).toFixed(2)} m²</b></div>
          <div class="fh-kv"><span>轮廓</span><b>${r.poly.length} 个角</b></div>
          <p class="fh-note fh-mini">房间是墙围出来的结果，不是画出来的。改名会跟着这块地方走；
            想改形状就拖墙的端点，想合并/拆分就加减墙。</p>
        </div>`);
		} else if (t?.type === "wall") {
			let r = e.walls.find((e) => e.id === t.id);
			if (r) {
				let t = v(r), i = e.openings.filter((e) => e.wallId === r.id);
				n = `<div class="fh-sec"><h4>墙体</h4>
          <div class="fh-kv"><span>长度</span><b>${t.toFixed(2)} m</b></div>
          <label class="fh-field"><span>墙厚</span>
            <div class="fh-num">
              <input type="number" min="0.06" max="0.6" step="0.01" value="${S(r).toFixed(2)}" data-wall-t>
              <em>m</em>
            </div>
          </label>
          <label class="fh-field"><span>墙高</span>
            <div class="fh-num">
              <input type="number" min="0.5" max="3" step="0.05" value="${C(e, r).toFixed(2)}" data-wall-h>
              <em>m</em>
            </div>
          </label>
          <div class="fh-field"><span>类型</span>
            <div class="fh-seg2">
              ${Object.entries(c).map(([e, t]) => `<button data-wall-kind="${e}" class="${(r.kind || "solid") === e ? "on" : ""}">${t}</button>`).join("")}
            </div>
          </div>
          <label class="fh-field"><span>墙面颜色</span>
            <div class="fh-num">
              <input type="color" value="${r.color || "#c9d6e8"}" data-wall-color>
              <em>${r.color ? "自定义" : "默认"}</em>
            </div>
          </label>
          <div class="fh-kv"><span>墙上门窗</span><b>${i.length ? i.length + " 个" : "无"}</b></div>
          <p class="fh-note fh-mini">透明边界参与房间围合，但 3D 里不砌墙 —— 用来切开放区域（客餐厅）。</p>
          <button class="fh-danger" data-act="del">删除这堵墙</button>
          <p class="fh-note fh-mini">删墙就是把这段从数据里拿掉：两侧的房间自然合成一间，
            挂在上面的门窗一起消失。不用手工合并，几何自己会算。</p>
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
			let r = e.openings.find((e) => e.id === t.id), i = r && e.walls.find((e) => e.id === r.wallId);
			if (r && i) {
				let e = v(i), t = (r.width || .9) / 2, a = Math.min(t, e / 2), o = Math.max(e - t, e / 2), s = r.type === "door", c = r.hasLeaf !== !1;
				n = `<div class="fh-sec"><h4>${s ? "门" : "窗"}</h4>
          <div class="fh-field"><span>类型</span>
            <div class="fh-seg2">
              <button data-op-type="door" class="${s ? "on" : ""}">门</button>
              <button data-op-type="window" class="${s ? "" : "on"}">窗</button>
            </div>
          </div>
          <div class="fh-kv"><span>所在墙</span><b>${e.toFixed(2)} m</b></div>
          <label class="fh-field"><span>距墙起点</span>
            <div class="fh-num">
              <input type="number" min="${a.toFixed(2)}" max="${o.toFixed(2)}" step="0.01"
                     value="${r.offset.toFixed(2)}" data-op-off>
              <em>m</em>
            </div>
          </label>
          <label class="fh-field"><span>宽度</span>
            <div class="fh-num">
              <input type="number" min="0.3" max="${Math.max(.3, e).toFixed(2)}" step="0.05"
                     value="${r.width.toFixed(2)}" data-op-w>
              <em>m</em>
            </div>
          </label>
          <label class="fh-field"><span>高度</span>
            <div class="fh-num">
              <input type="number" min="0.3" max="3" step="0.05" value="${r.height.toFixed(2)}" data-op-h>
              <em>m</em>
            </div>
          </label>
          ${s ? "" : `
          <label class="fh-field"><span>离地</span>
            <div class="fh-num">
              <input type="number" min="0" max="2.4" step="0.05" value="${(r.bottom || 0).toFixed(2)}" data-op-b>
              <em>m</em>
            </div>
          </label>
          <label class="fh-field"><span>窗型</span>
            <select class="fh-input" data-op-wstyle>
              <option value="standard" ${r.windowStyle === "sliding" ? "" : "selected"}>普通窗</option>
              <option value="sliding" ${r.windowStyle === "sliding" ? "selected" : ""}>推拉窗</option>
            </select>
          </label>`}
          ${s ? `
          <label class="fh-field"><span>显示门扇</span>
            <input type="checkbox" data-op-leaf ${c ? "checked" : ""}></label>
          ${c ? `
          <label class="fh-field"><span>门型</span>
            <select class="fh-input" data-op-dstyle>
              <option value="single" ${r.doorStyle !== "double" && r.doorStyle !== "sliding" ? "selected" : ""}>单开门</option>
              <option value="double" ${r.doorStyle === "double" ? "selected" : ""}>双开门</option>
              <option value="sliding" ${r.doorStyle === "sliding" ? "selected" : ""}>推拉门</option>
            </select>
          </label>
          <div class="fh-field"><span>开向</span>
            <div class="fh-seg2">
              <button data-op-swing="inward" class="${r.swing === "outward" ? "" : "on"}">朝内开</button>
              <button data-op-swing="outward" class="${r.swing === "outward" ? "on" : ""}">朝外开</button>
            </div>
          </div>
          <div class="fh-field"><span>铰链</span>
            <div class="fh-seg2">
              <button data-op-hinge="start" class="${r.hinge === "end" ? "" : "on"}">左端</button>
              <button data-op-hinge="end" class="${r.hinge === "end" ? "on" : ""}">右端</button>
            </div>
          </div>
          ${c && r.doorStyle !== "double" ? "<button class=\"fh-wide\" data-act=\"flip-door\">⇄ 翻转门扇（换一侧开）</button>" : ""}
          ${c && r.doorStyle === "double" ? "<p class=\"fh-note fh-mini\">双开门左右对称，翻转没有意义，所以这里不显示。</p>" : ""}` : "<p class=\"fh-note fh-mini\">门洞只开洞、不装门扇 —— 开向不会画错。需要门扇就勾上「显示门扇」。</p>"}
          <label class="fh-field"><span>门磁</span>
            <select class="fh-input" data-op-ent>
              <option value="">不绑定</option>
              ${this._sensorOptions(r.entityId)}
            </select>
          </label>
          <p class="fh-note fh-mini">绑一个开合传感器后，这里和 3D 都会显示开关状态。</p>` : ""}
          <button class="fh-danger" data-act="del">删除${s ? "这扇门" : "这扇窗"}</button>
        </div>`;
			}
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
            <span class="dot" style="background:${V(t)}"></span>
            <span class="nm">${Q(e.name)}</span>
            <span class="rm">${m(e.poly).toFixed(1)} m²</span>
          </button>`).join("")}</div>
      </div>` : e.base.src ? "<div class=\"fh-sec\"><h4>开始</h4>\n        <p class=\"fh-note\">底图就位，墙线也认出来了。切到「描墙」可以一段段手描，\n          也可以直接用「一键成墙」整批生成。</p>\n      </div>" : "<div class=\"fh-sec\"><h4>开始</h4>\n        <p class=\"fh-note\">① 导入户型图当参考底图<br>② 标定比例尺<br>③ 用「描墙」沿着墙一段段点<br>④ 切到 3D 展示</p>\n        <button class=\"fh-wide primary\" data-act=\"base\">导入参考底图</button>\n      </div>";
		if (this.tool === "wall" && (n += `<div class="fh-sec"><h4>描墙</h4>
        <p class="fh-note">
          左键<b>点一下</b>落点 → 移动鼠标 → <b>再点一下</b>这段墙就定了，<br>
          端点自动接上一段，可以连着画一圈。<br>
          <b>不用点回起点</b>：墙一闭合，房间自己就出来了。
        </p>
        <div class="fh-keys">
          <span><i>右键</i>撤掉这一段</span>
          <span><i>Esc</i>结束这一笔</span>
          <span><i>双击</i>也算结束</span>
        </div>
      </div>
      <div class="fh-sec"><h4>墙厚</h4>
        <div class="fh-num">
          <input type="number" min="0.06" max="0.6" step="0.01" value="${(this._tDraft ?? this.editor?.wallT ?? .15).toFixed(2)}" data-all-t>
          <em>m</em>
        </div>
        <button class="fh-wide" data-act="apply-t">应用到所有墙</button>
        <p class="fh-mini">新墙默认 ${o.toFixed(2)} m；老墙要一起改就点上面</p>
      </div>
      ${this._guides().length ? `<div class="fh-sec"><h4>一键成墙</h4>
        <p class="fh-note">底图认出了 ${this._guides().length} 段墙线，可以直接整批变成墙，
          端点会按 6cm 焊接起来。手画的墙会被替换掉。</p>
        <button class="fh-wide primary" data-act="adopt">一键成墙（${this._guides().length} 段）</button>
        <p class="fh-note fh-mini">结果不满意可以删墙重来，或者手动描。</p>
      </div>` : ""}`), e.base.src) {
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
      <div><b>${e.walls.length}</b><span>墙</span></div>
      <div><b>${e.openings.length}</b><span>门窗</span></div>
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
		let r = () => t?.type === "opening" ? e.openings.find((e) => e.id === t.id) : null, i = (t, n) => {
			let i = r();
			if (!i) return;
			Object.assign(i, t);
			let a = e.walls.find((e) => e.id === i.wallId);
			a && Object.assign(i, E(a, i)), $(e), this.editor?.requestRender(), n || this.renderPanel();
		}, a = (e, t, n, a) => {
			let o = this.$panel.querySelector(e);
			o && (o.onchange = () => {
				let e = parseFloat(o.value);
				if (Number.isFinite(e) && e >= n && e <= a) i({ [t]: Math.round(e * 100) / 100 });
				else {
					let e = r();
					e && (o.value = Number(e[t]).toFixed(2));
				}
			});
		};
		a("[data-op-off]", "offset", 0, 100), a("[data-op-w]", "width", .2, 20), a("[data-op-h]", "height", .2, 4), a("[data-op-b]", "bottom", 0, 3), this.$panel.querySelectorAll("[data-op-type]").forEach((e) => {
			e.onclick = () => {
				let t = r();
				if (!t) return;
				let n = e.dataset.opType;
				n !== t.type && i({
					type: n,
					width: n === "door" ? .9 : 1.2,
					height: n === "door" ? 2.1 : 1.2,
					bottom: n === "door" ? 0 : .9,
					hasLeaf: !1,
					doorStyle: "single"
				});
			};
		});
		let o = this.$panel.querySelector("[data-op-leaf]");
		o && (o.onchange = () => i({ hasLeaf: o.checked }));
		let s = this.$panel.querySelector("[data-op-wstyle]");
		s && (s.onchange = () => i({ windowStyle: s.value }));
		let c = this.$panel.querySelector("[data-op-dstyle]");
		c && (c.onchange = () => i({ doorStyle: c.value })), this.$panel.querySelectorAll("[data-op-swing]").forEach((e) => {
			e.onclick = () => i({ swing: e.dataset.opSwing });
		}), this.$panel.querySelectorAll("[data-op-hinge]").forEach((e) => {
			e.onclick = () => i({ hinge: e.dataset.opHinge });
		});
		let l = this.$panel.querySelector("[data-op-ent]");
		l && (l.onchange = () => {
			let e = l.value || "", t = r();
			if (!t) return;
			let n = { entityId: e };
			e && t.type === "door" && t.hasLeaf === !1 && (n.hasLeaf = !0), i(n);
		});
		let u = (n) => {
			let r = e.walls.find((e) => e.id === t.id);
			r && (Object.assign(r, n), $(e), this.editor?.requestRender(), this.renderPanel());
		}, d = this.$panel.querySelector("[data-wall-t]");
		d && (d.onchange = () => {
			let n = parseFloat(d.value);
			if (Number.isFinite(n) && n >= .04 && n <= .8) u({ t: Math.round(n * 1e3) / 1e3 });
			else {
				let n = e.walls.find((e) => e.id === t.id);
				n && (d.value = S(n).toFixed(2));
			}
		});
		let f = this.$panel.querySelector("[data-wall-h]");
		f && (f.onchange = () => {
			let n = parseFloat(f.value);
			if (Number.isFinite(n) && n >= .3 && n <= 4) u({ h: Math.round(n * 100) / 100 });
			else {
				let n = e.walls.find((e) => e.id === t.id);
				n && (f.value = C(e, n).toFixed(2));
			}
		}), this.$panel.querySelectorAll("[data-wall-kind]").forEach((e) => {
			e.onclick = () => u({ kind: e.dataset.wallKind });
		});
		let p = this.$panel.querySelector("[data-wall-color]");
		p && (p.onchange = () => u({ color: p.value }));
		let m = this.$panel.querySelector("[data-base-op]");
		m && (m.oninput = () => {
			e.base.opacity = parseFloat(m.value), $(e), this.editor?.requestRender();
		});
		let h = this.$panel.querySelector("[data-base-flip]");
		h && (h.onchange = () => {
			e.base.flipX = h.checked, $(e), this.editor?.refreshGuides(), this.editor?.requestRender();
		});
		let g = this.$panel.querySelector("[data-guide-show]");
		g && (g.onchange = () => {
			this._showGuides = g.checked, this.editor && (this.editor.showGuides = g.checked, this.editor.requestRender());
		}), this.$panel.querySelectorAll("[data-act]").forEach((e) => {
			let t = e.dataset.act;
			e.onclick = () => {
				if (t === "del") this.editor?.deleteSelected();
				else if (t === "rot-l") this.editor?.rotateSelected(-15);
				else if (t === "rot-r") this.editor?.rotateSelected(15);
				else if (t === "base") this._menuAction("base");
				else if (t === "redetect") this._extractBase(!0);
				else if (t === "apply-t") this._applyWallT();
				else if (t === "flip-door") {
					let e = r();
					e && i({
						hinge: e.hinge === "end" ? "start" : "end",
						swing: e.swing === "outward" ? "inward" : "outward"
					});
				} else t === "adopt" && this._adoptGuides();
				this.renderPanel();
			};
		});
	}
	_applyWallT() {
		let e = this.$panel.querySelector("[data-all-t]"), t = Math.max(.06, Math.min(.6, Number(e?.value) || .15));
		this._tDraft = t;
		let n = this.editor?.applyWallT(t) ?? 0;
		$(this.plan), this._hint(n ? `${n} 堵墙的墙厚已统一为 ${t} m` : "还没有墙");
	}
	_guides() {
		return this.editor?.guides ?? I(this.plan.base);
	}
	_adoptGuides() {
		let e = this.editor?.adoptGuides();
		e?.ok ? ($(this.plan), this._hint(`已生成 ${e.walls} 堵墙、${e.rooms} 个房间${e.tiny ? `（另有 ${e.tiny} 处碎块被忽略）` : ""}`)) : this._hint("没有可用的墙线：先识别底图，或者直接手描");
	}
	_sensorOptions(e) {
		let t = this._hass?.states || {}, n = Object.keys(t).filter((e) => e.startsWith("binary_sensor.")).map((e) => ({
			id: e,
			name: t[e]?.attributes?.friendly_name || e.split(".")[1]
		})).sort((e, t) => e.name.localeCompare(t.name, "zh"));
		return e && !n.some((t) => t.id === e) && n.unshift({
			id: e,
			name: e.split(".")[1] + "（未在 HA 里找到）"
		}), n.map((t) => `<option value="${Q(t.id)}" ${t.id === e ? "selected" : ""}>${Q(t.name)}</option>`).join("");
	}
	_viewCenter() {
		let e = this.editor;
		return e ? e.toWorld(e.w / 2, e.h / 2) : [0, 0];
	}
	async _extractBase(e) {
		let t = this.plan.base;
		if (t?.src && !this._busy && (e || !t.walls?.length || t.wallsV !== 3)) {
			this._busy = !0, this._wallHint = "", this._hint("正在识别底图里的墙体…"), this.renderPanel(), await new Promise((e) => setTimeout(e, 24));
			try {
				let e = await De(t.src, t.ppm || t.w / 12);
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
			this.plan = d(), $(this.plan), this.editor?.setPlan(this.plan), this.renderPanel();
		}
	}
	async _importImage(e) {
		if (!e) return;
		let t = await ke(e, Ce), n = new Image();
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
		let e = new Blob([L(this.plan)], { type: "application/json" }), t = document.createElement("a");
		t.href = URL.createObjectURL(e), t.download = (this.plan.name || "floorplan") + ".json", t.click(), setTimeout(() => URL.revokeObjectURL(t.href), 2e3);
	}
	_importJson(e) {
		if (!e) return;
		let t = new FileReader();
		t.onload = () => {
			try {
				this.plan = R(String(t.result)), $(this.plan), this.editor?.setPlan(this.plan), this.editor?.fitView(), this.renderPanel();
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
function De(e, t) {
	return new Promise((n, r) => {
		let i = new Image();
		i.onerror = () => r(/* @__PURE__ */ Error("底图读不出来")), i.onload = () => {
			try {
				let e = i.naturalWidth, r = i.naturalHeight, a = Math.min(1, we / Math.max(e, r)), o = Math.max(8, Math.round(e * a)), s = Math.max(8, Math.round(r * a)), c = document.createElement("canvas");
				c.width = o, c.height = s;
				let l = c.getContext("2d", { willReadFrequently: !0 });
				l.drawImage(i, 0, 0, o, s);
				let u = l.getImageData(0, 0, o, s).data, d = Se(me(u, o, s), o, s, { ppm: (t || e / 12) * (o / e) }), f = e / o;
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
		localStorage.setItem(Z, L(e));
	} catch {}
}
function Oe() {
	try {
		let e = localStorage.getItem(Z);
		if (e) return R(e);
	} catch {}
	return d();
}
function ke(e, t) {
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
export { Ee as FloorHome, y as a, S as c, V as i, m as n, C as o, h as r, v as s, g as t };
