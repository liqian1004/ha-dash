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
function f(e, t, n) {
	let r = p(t.x, t.y, n.x, n.y);
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
	let l = [], d = /* @__PURE__ */ new Map(), f = [];
	for (let { w: i } of s) {
		let a = y(i), s = b(i), c = (e) => (e.x - i.x1) * s.ux + (e.y - i.y1) * s.uy, p = [
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
			let t = p[e - 1], n = p[e], a = x(i, t), s = x(i, n), c = {
				...i,
				id: u("w"),
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
			let d = o((c.x1 + c.x2) / 2, (c.y1 + c.y2) / 2);
			d >= 0 && d <= r && f.push(c.id);
		}
		d.set(i.id, m);
	}
	e.walls = e.walls.filter((e) => !d.has(e.id)).concat(l);
	for (let t of e.openings) {
		let e = d.get(t.wallId)?.find((e) => t.offset >= e.start - .001 && t.offset <= e.end + .001);
		e && (t.wallId = e.piece.id, t.offset -= e.start);
	}
	return j(e), {
		ok: !0,
		ids: f
	};
}
var p = (e, t, n, r) => Math.hypot(n - e, r - t);
function m(e, t, n, r, i, a) {
	let o = i - n, s = a - r, c = o * o + s * s;
	if (c < 1e-12) return {
		t: 0,
		x: n,
		y: r,
		d: p(e, t, n, r)
	};
	let l = ((e - n) * o + (t - r) * s) / c;
	l = Math.max(0, Math.min(1, l));
	let u = n + o * l, d = r + s * l;
	return {
		t: l,
		x: u,
		y: d,
		d: p(e, t, u, d)
	};
}
function h(e) {
	let t = 0;
	for (let n = 0, r = e.length; n < r; n++) {
		let [i, a] = e[n], [o, s] = e[(n + 1) % r];
		t += i * s - o * a;
	}
	return Math.abs(t / 2);
}
function g(e) {
	let t = 0, n = 0, r = 0;
	for (let i = 0, a = e.length; i < a; i++) {
		let [o, s] = e[i], [c, l] = e[(i + 1) % a], u = o * l - c * s;
		t += u, n += (o + c) * u, r += (s + l) * u;
	}
	return Math.abs(t) < 1e-12 ? [e.reduce((e, t) => e + t[0], 0) / e.length, e.reduce((e, t) => e + t[1], 0) / e.length] : [n / (3 * t), r / (3 * t)];
}
function _(e, t, n) {
	let r = !1;
	for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
		let [o, s] = n[i], [c, l] = n[a];
		s > t != l > t && e < (c - o) * (t - s) / (l - s) + o && (r = !r);
	}
	return r;
}
function v(e, t, n) {
	for (let r = e.rooms.length - 1; r >= 0; r--) if (_(t, n, e.rooms[r].poly)) return e.rooms[r];
	return null;
}
function y(e) {
	return p(e.x1, e.y1, e.x2, e.y2);
}
function b(e) {
	let t = y(e) || 1e-9, n = (e.x2 - e.x1) / t, r = (e.y2 - e.y1) / t;
	return {
		ux: n,
		uy: r,
		nx: -r,
		ny: n,
		len: t,
		ang: Math.atan2(r, n)
	};
}
function x(e, t) {
	let n = b(e), r = n.len > 1e-9 ? Math.max(0, Math.min(1, t / n.len)) : 0;
	return {
		x: e.x1 + (e.x2 - e.x1) * r,
		y: e.y1 + (e.y2 - e.y1) * r,
		ux: n.ux,
		uy: n.uy,
		len: n.len,
		ang: n.ang
	};
}
function S(e, t, n, r, i = {}) {
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
var C = (e) => e && e.t > 0 ? e.t : o, w = (e, t) => t && t.h > 0 ? t.h : e?.wallHeight ?? 1.2;
function T(e) {
	let t = [];
	for (let n of e) t.push([n.x1, n.y1], [n.x2, n.y2]);
	return t;
}
function E(e, t = s) {
	let n = T(e).map(([e, t]) => ({
		x: e,
		y: t
	})), r = n.map(() => -1), i = [];
	for (let e = 0; e < n.length; e++) {
		for (let a = 0; a < i.length; a++) if (p(n[e].x, n[e].y, i[a].x, i[a].y) <= t) {
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
		p(n.x, n.y, i.x, i.y) < 1e-4 || c.push({
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
function D(e, t) {
	let n = y(e), r = (t.width || .9) / 2, i = Math.min(r, n / 2), a = Math.max(n - r, n / 2);
	return {
		...t,
		offset: Math.max(i, Math.min(a, t.offset))
	};
}
function te(e, t) {
	let n = (e?.walls || []).find((e) => e.id === t.wallId);
	if (!n) return null;
	let r = b(n);
	if (r.len < .02) return null;
	let i = (t.width ?? .9) / 2, a = x(n, t.offset);
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
		let e = m(t, n, a.x1, a.y1, a.x2, a.y2);
		e.d <= r && (!i || e.d < i.d) && (i = {
			wall: a,
			...e
		});
	}
	return i;
}
var k = (e, t, n, r, i = s) => p(e, t, n, r) <= i;
function ne(e) {
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
	let r = (t || []).filter((e) => y(e) > .02).map((e) => ({
		x1: e.x1,
		y1: e.y1,
		x2: e.x2,
		y2: e.y2
	})), i = [];
	r.length >= 3 && (i = a(r).filter((e) => e.area > 0));
	let o = i.filter((e) => e.area >= .6), s = i.length - o.length, c = /* @__PURE__ */ new Set(), l = (n || []).filter((e) => Array.isArray(e.poly) && e.poly.length >= 3), u = [], d = o.map((e) => g(e.poly));
	o.forEach((e, t) => {
		for (let n of l) {
			let r = g(n.poly), i = _(r[0], r[1], e.poly) ? 2 : 0, a = +!!_(d[t][0], d[t][1], n.poly);
			(i || a) && u.push({
				fi: t,
				room: n,
				score: i + a,
				area: Math.abs(h(n.poly)),
				d: p(d[t][0], d[t][1], r[0], r[1])
			});
		}
	}), u.sort((e, t) => t.score - e.score || t.area - e.area || e.d - t.d);
	let f = /* @__PURE__ */ new Map();
	for (let e of u) f.has(e.fi) || c.has(e.room.id) || (f.set(e.fi, e.room), c.add(e.room.id));
	let m = 0;
	for (let e of l) {
		let t = /^房间\s*(\d+)$/.exec(e.name || "");
		t && (m = Math.max(m, +t[1]));
	}
	let v = o.map((e, t) => {
		let n = f.get(t);
		return n || (m += 1), {
			id: n?.id || ne(e.poly),
			name: n?.name || `房间 ${m}`,
			poly: le(e.poly, .015),
			floor: n?.floor
		};
	});
	return v.sort((e, t) => Math.abs(h(t.poly)) - Math.abs(h(e.poly))), {
		rooms: v,
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
function re(e, t = {}) {
	return E((e || []).map((e) => S(e.x1, e.y1, e.x2, e.y2, t)).filter((e) => y(e) > .12), t.weld ?? .06);
}
function ie(e) {
	let t = Array.isArray(e.rooms) ? e.rooms : [], n = [];
	for (let e of t) {
		let t = Array.isArray(e.poly) ? e.poly : [], r = t.length;
		for (let i = 0; i < r; i++) {
			let [a, o] = t[i], [s, c] = t[(i + 1) % r];
			p(a, o, s, c) < .02 || n.push({
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
	for (let e of n) r.some((t) => k(t.x1, t.y1, e.x1, e.y1) && k(t.x2, t.y2, e.x2, e.y2) || k(t.x1, t.y1, e.x2, e.y2) && k(t.x2, t.y2, e.x1, e.y1)) || r.push(S(e.x1, e.y1, e.x2, e.y2, {
		t: e.t,
		h: e.h,
		kind: e.kind,
		color: e.color
	}));
	let i = E(r), a = [];
	for (let n of e.openings || []) {
		let e = t.find((e) => e.id === n.roomId)?.poly;
		if (!e || e.length < 2) continue;
		let r = e.length, o = ((n.edge | 0) % r + r) % r, [s, c] = e[o], [l, d] = e[(o + 1) % r], f = p(s, c, l, d);
		if (f < .05) continue;
		let m = i.find((e) => k(e.x1, e.y1, s, c) && k(e.x2, e.y2, l, d) || k(e.x1, e.y1, l, d) && k(e.x2, e.y2, s, c));
		if (!m) continue;
		let h = k(m.x1, m.y1, s, c), g = Number.isFinite(n.t) ? n.t : .5, _ = h ? g * f : (1 - g) * f, { swing: v, hinge: y } = ae(e, s, c, l, d, _, h, n.width || n.w || .9);
		a.push({
			id: n.id || u("o"),
			type: n.type === "window" ? "window" : "door",
			wallId: m.id,
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
	}, { rooms: s } = A(o, o.walls, t);
	return o.rooms = s, o;
}
function ae(e, t, n, r, i, a, o, s) {
	let c = p(t, n, r, i), l = (r - t) / (c || 1), u = (i - n) / (c || 1), d = t + l * a, f = n + u * a, m = -u, h = l, v = Math.min(.6, Math.max(.3, s)), y = _(d + m * v, f + h * v, e), b = _(d - m * v, f - h * v, e), x = y && !b, S = g(e), C = p(t, n, S[0], S[1]), w = p(r, i, S[0], S[1]);
	return {
		swing: x ? "inward" : "outward",
		hinge: (o ? C > w : w > C) ? "start" : "end"
	};
}
function oe(e, t, n = "door", r = {}) {
	let i = y(e), a = r.width ?? (n === "door" ? .9 : 1.2), o = a / 2, s = Math.min(o, i / 2), c = Math.max(i - o, i / 2);
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
function se(e, t, n, r = .1, i = .05, a = {}) {
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
	let m = null;
	for (let e of l) for (let [r, i] of [[e.x1, e.y1], [e.x2, e.y2]]) {
		let e = p(t, n, r, i);
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
			let a = p(t, n, r, i);
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
		hot: ce(y, b, _, v)
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
	let x = h !== null || g !== null ? M(h === null ? b : y) : "free";
	if (o) {
		let e = .035, r = d * 2.5;
		for (let i of f) {
			let a = Math.min(i.y1, i.y2), s = Math.max(i.y1, i.y2), c = Math.min(i.x1, i.x2), l = Math.max(i.x1, i.x2);
			if (Math.abs(i.x2 - i.x1) < 1e-6) {
				if (Math.abs(o[0] - i.x1) > e || o[1] < a - e || o[1] > s + e || Math.abs(t - i.x1) > r) continue;
				h = i.x1, x = M(i);
				break;
			}
			if (Math.abs(i.y2 - i.y1) < 1e-6) {
				if (Math.abs(o[1] - i.y1) > e || o[0] < c - e || o[0] > l + e || Math.abs(n - i.y1) > r) continue;
				g = i.y1, x = M(i);
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
var M = (e) => e ? e.src === "wall" ? "edge" : "guide" : "free", ce = (e, t, n, r) => n <= r ? e : t;
function N(e) {
	let t = e?.ppm || (e?.w ? e.w / 12 : 0);
	return {
		ppm: t,
		ww: t ? e.w / t : 0,
		wh: t ? e.h / t : 0
	};
}
function P(e, t, n) {
	let { ppm: r, ww: i } = N(e);
	if (!r) return [0, 0];
	let a = t / r;
	return [e.flipX ? i - a : a, n / r];
}
function F(e) {
	let t = e?.walls;
	if (!Array.isArray(t) || !t.length) return [];
	let n = [];
	for (let r of t) {
		if (!Array.isArray(r) || r.length < 4) continue;
		let [t, i] = P(e, r[0], r[1]), [a, o] = P(e, r[2], r[3]);
		n.push({
			x1: Math.min(t, a),
			y1: Math.min(i, o),
			x2: Math.max(t, a),
			y2: Math.max(i, o)
		});
	}
	return n;
}
function le(e, t = .02) {
	let n = [];
	for (let r of e) {
		let e = n[n.length - 1];
		(!e || p(e[0], e[1], r[0], r[1]) > t) && n.push([r[0], r[1]]);
	}
	for (; n.length > 3 && p(n[0][0], n[0][1], n[n.length - 1][0], n[n.length - 1][1]) <= t;) n.pop();
	if (n.length < 4) return n;
	let r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[(e - 1 + n.length) % n.length], a = n[e], o = n[(e + 1) % n.length], s = (a[0] - i[0]) * (o[1] - i[1]) - (a[1] - i[1]) * (o[0] - i[0]), c = p(i[0], i[1], o[0], o[1]) || 1;
		Math.abs(s) / c > t && r.push(a);
	}
	let i = [];
	for (let e of r) {
		let n = i[i.length - 1];
		(!n || p(n[0], n[1], e[0], e[1]) > t) && i.push(e);
	}
	for (; i.length > 3 && p(i[0][0], i[0][1], i[i.length - 1][0], i[i.length - 1][1]) <= t;) i.pop();
	return i.length >= 3 ? i : n;
}
function I(e) {
	return JSON.stringify(e);
}
function L(e) {
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
	((t.v | 0) < 2 || !r.walls.length && r.rooms.length) && (i = ie(r));
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
var R = [
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
], z = [
	"#7dd3fc",
	"#a5b4fc",
	"#fca5a5",
	"#fcd34d",
	"#86efac",
	"#f9a8d4",
	"#fdba74",
	"#c4b5fd"
];
function B(e) {
	return z[e % z.length];
}
var V = {
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
}, H = {
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
}, ue = [
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
function de(e, t) {
	let n = e?.floor;
	return n ? n.color ? n.color : (H[n.tile] || {}).base || B(t) : B(t);
}
// src/floor3d/palettes.js
var U = {
	blackgold: {
		name: "黑金 · 建筑沙盘",
		bg: 1381913,
		ground: 1842464,
		wall: 12169635,
		wallSide: 9142642,
		floor: 8483939,
		floorMix: .94,
		base: 2434345,
		accent: 13215850
	},
	plan: {
		name: "方案原色",
		bg: 15331061,
		ground: 15002097,
		wall: 14081512,
		wallSide: 11845840,
		floor: 16054008,
		floorMix: .78
	},
	cream: {
		name: "奶油白",
		bg: 16117734,
		ground: 15722200,
		wall: 15260872,
		wallSide: 13812906,
		floor: 16447214,
		floorMix: .85
	},
	wood: {
		name: "原木",
		bg: 15656664,
		ground: 14931648,
		wall: 14469544,
		wallSide: 12626046,
		floor: 15392196,
		floorMix: .7
	},
	morandi: {
		name: "莫兰迪",
		bg: 15131616,
		ground: 14473170,
		wall: 13617604,
		wallSide: 11906470,
		floor: 15460322,
		floorMix: .82
	},
	wabi: {
		name: "侘寂",
		bg: 15262940,
		ground: 14538441,
		wall: 13880249,
		wallSide: 12103061,
		floor: 15394265,
		floorMix: .8
	},
	nordic: {
		name: "北欧",
		bg: 15265264,
		ground: 14542057,
		wall: 14673900,
		wallSide: 12635348,
		floor: 15791350,
		floorMix: .84
	},
	midcentury: {
		name: "中古",
		bg: 15525076,
		ground: 14734524,
		wall: 14206628,
		wallSide: 12163692,
		floor: 15392194,
		floorMix: .68
	},
	chinese: {
		name: "新中式",
		bg: 15393752,
		ground: 14603200,
		wall: 14010029,
		wallSide: 12298888,
		floor: 15327179,
		floorMix: .74
	},
	french: {
		name: "法式",
		bg: 15788264,
		ground: 15195099,
		wall: 14996692,
		wallSide: 13416118,
		floor: 16117486,
		floorMix: .85
	},
	industrial: {
		name: "工业风",
		bg: 2764081,
		ground: 2369323,
		wall: 3817028,
		wallSide: 3093304,
		floor: 3356477,
		floorMix: .35
	},
	mono: {
		name: "极简黑白",
		bg: 15790320,
		ground: 15263976,
		wall: 14869218,
		wallSide: 13224393,
		floor: 16119285,
		floorMix: .92
	},
	coastal: {
		name: "海风",
		bg: 15134964,
		ground: 14214892,
		wall: 14084334,
		wallSide: 12112088,
		floor: 15660792,
		floorMix: .84
	},
	dusk: {
		name: "深色夜景",
		bg: 1580070,
		ground: 1316897,
		wall: 2304310,
		wallSide: 1777707,
		floor: 1975344,
		floorMix: .4
	}
};
function fe(e) {
	return U[e] || U.plan;
}
function pe() {
	return Object.entries(U).map(([e, t]) => ({
		id: e,
		name: t.name
	}));
}
// src/floor3d/editor.js
var W = {
	bg: "#f4f5f2",
	grid: "rgba(60,70,75,.05)",
	gridBold: "rgba(60,70,75,.10)",
	wall: "#3f444a",
	wallSide: "rgba(40,46,52,.16)",
	sel: "#4d94ff",
	wallSel: "#4d94ff",
	draft: "#4d94ff",
	guide: "rgba(77,148,255,.34)",
	guideHot: "#4d94ff",
	door: "#c9822e",
	window: "#3f8fe0",
	text: "#202225",
	textDim: "#94999d",
	device: "#4d94ff"
}, me = {
	vertex: "墙角",
	corner: "墙角",
	guide: "底图墙线",
	edge: "已有墙",
	axis: "已锁直",
	grid: "网格",
	free: ""
}, he = 11, ge = 10, _e = 8, ve = class {
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
		return this.guides = F(this.plan?.base), this.requestRender(), this.guides;
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
			let { ww: e, wh: n } = N(t.base);
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
		e && (e.setTransform(n, 0, 0, n, 0, 0), e.clearRect(0, 0, this.w, this.h), e.fillStyle = W.bg, e.fillRect(0, 0, this.w, this.h), this._drawGrid(), this._drawBase(), this.plan && (this._drawGuides(), this._drawRooms(), this._drawWalls(), this._drawHot(), this._drawOpenings(), this._drawFurniture(), this._drawDevices(), this._drawLabels(), this._drawDraft(), this._drawCalib(), this._drawScaleHint()));
	}
	_drawCalib() {
		if (this.tool !== "calibrate" || !this.calibPts?.length) return;
		let { ctx: e } = this, [t, n] = this.calibPts[0], [r, i] = this.toScreen(t, n), [a, o] = this.cursor ? this.toScreen(this.cursor.x, this.cursor.y) : [r, i];
		e.save(), e.strokeStyle = W.draft, e.lineWidth = 2, e.setLineDash([7, 5]), e.beginPath(), e.moveTo(r, i), e.lineTo(a, o), e.stroke(), e.setLineDash([]);
		for (let [t, n] of [[r, i], [a, o]]) e.beginPath(), e.arc(t, n, 5, 0, Math.PI * 2), e.fillStyle = W.draft, e.fill();
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
			e.strokeStyle = Math.abs(i % 1) < 1e-6 ? W.gridBold : W.grid, e.beginPath(), e.moveTo(n, 0), e.lineTo(n, this.h), e.stroke();
		}
		for (let r = i; r <= o; r += n) {
			let n = Math.round(r * t.k + t.ty) + .5;
			e.strokeStyle = Math.abs(r % 1) < 1e-6 ? W.gridBold : W.grid, e.beginPath(), e.moveTo(0, n), e.lineTo(this.w, n), e.stroke();
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
		let { ww: n, wh: r } = N(e), [i, a] = this.toScreen(0, 0), [o, s] = this.toScreen(n, r);
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
		e.save(), e.strokeStyle = W.guide, e.lineWidth = 1.6, e.lineCap = "round", e.shadowColor = "rgba(77,148,255,.45)", e.shadowBlur = 5, e.beginPath();
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
			let r = this.sel?.type === "room" && this.sel.id === t.id, i = de(t, n);
			this._pathPoly(t.poly), e.fillStyle = r ? "rgba(77,148,255,.18)" : this._tint(i, .11), e.fill(), r && (e.strokeStyle = "rgba(77,148,255,.5)", e.lineWidth = 1.2, e.setLineDash([4, 4]), e.stroke(), e.setLineDash([]));
		});
	}
	_drawWalls() {
		let { ctx: e } = this, t = this.view.k;
		e.lineCap = "square", e.lineJoin = "miter";
		for (let n of this.plan.walls) {
			let r = this.sel?.type === "wall" && this.sel.id === n.id || this.sel?.ids?.includes(n.id), i = n.kind === "virtual", [a, o] = this.toScreen(n.x1, n.y1), [s, c] = this.toScreen(n.x2, n.y2);
			e.lineWidth = i ? 1.6 : Math.max(2, C(n) * t), e.setLineDash(i ? [6, 5] : []), e.strokeStyle = r ? W.wallSel : i ? "rgba(120,140,160,.5)" : n.color || W.wall, e.beginPath(), e.moveTo(a, o), e.lineTo(s, c), e.stroke();
		}
		if (e.setLineDash([]), this.tool === "select" && t >= 24 && this.plan.walls.length <= 80) for (let t of this.plan.walls) for (let [n, r] of [[t.x1, t.y1], [t.x2, t.y2]]) {
			let [t, i] = this.toScreen(n, r);
			e.beginPath(), e.arc(t, i, 3.2, 0, Math.PI * 2), e.fillStyle = "#ffffff", e.fill(), e.strokeStyle = "rgba(63,68,74,.78)", e.lineWidth = 1.6, e.stroke();
		}
		if (this.sel?.type === "wall") {
			let t = this.plan.walls.find((e) => e.id === this.sel.id);
			if (t) for (let [n, r] of [[t.x1, t.y1], [t.x2, t.y2]]) {
				let [t, i] = this.toScreen(n, r);
				e.beginPath(), e.rect(t - 4.5, i - 4.5, 9, 9), e.fillStyle = "#ffffff", e.fill(), e.strokeStyle = W.wallSel, e.lineWidth = 2, e.stroke();
			}
		}
	}
	_drawHot() {
		let { ctx: e } = this, t = [];
		if (this.hot && this.tool === "wall" && t.push({
			seg: this.hot,
			w: 3.2,
			col: this.hot.src === "wall" ? W.draft : W.guideHot
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
				col: W.wallSel
			});
		}
		e.save();
		for (let n of t) {
			let [t, r] = this.toScreen(n.seg.x1, n.seg.y1), [i, a] = this.toScreen(n.seg.x2, n.seg.y2);
			e.strokeStyle = n.col, e.lineWidth = n.w, e.lineCap = "round", e.shadowColor = n.col, e.shadowBlur = 8, e.beginPath(), e.moveTo(t, r), e.lineTo(i, a), e.stroke(), e.shadowBlur = 0;
		}
		e.restore(), this._drawXformHandles();
	}
	_tint(e, t) {
		let n = parseInt(e.slice(1), 16);
		return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${t})`;
	}
	_drawOpenings() {
		let { ctx: e } = this, t = this.view.k;
		for (let n of this.plan.openings) {
			let r = te(this.plan, n);
			if (!r) continue;
			let i = this.sel?.type === "opening" && this.sel.id === n.id, [a, o] = this.toScreen(r.ax, r.ay), [s, c] = this.toScreen(r.bx, r.by), l = Math.max(2, C(r.wall) * t), u = n.entityId ? this.hass?.states?.[n.entityId]?.state : null, d = i ? W.sel : u === "on" ? "#4d94ff" : n.type === "window" ? W.window : W.door;
			e.save(), e.lineCap = "butt", e.strokeStyle = W.bg, e.lineWidth = l, e.beginPath(), e.moveTo(a, o), e.lineTo(s, c), e.stroke();
			let f = -(c - o), p = s - a, m = Math.hypot(f, p) || 1, h = f / m, g = p / m;
			if (n.type === "window") {
				let t = l * .34;
				e.strokeStyle = d, e.lineWidth = 1.6, e.beginPath(), e.moveTo(a - h * t, o - g * t), e.lineTo(s - h * t, c - g * t), e.moveTo(a + h * t, o + g * t), e.lineTo(s + h * t, c + g * t), e.stroke(), e.strokeStyle = this._tint(i ? W.sel : W.window, .55), e.lineWidth = 1, e.beginPath(), e.moveTo(a, o), e.lineTo(s, c), e.stroke(), n.windowStyle === "sliding" && (e.beginPath(), e.moveTo((a + s) / 2 - h * t, (o + c) / 2 - g * t), e.lineTo((a + s) / 2 + h * t, (o + c) / 2 + g * t), e.stroke());
			} else if (e.strokeStyle = this._tint(d, .85), e.lineWidth = 2, e.beginPath(), e.moveTo(a, o), e.lineTo(s, c), e.stroke(), n.hasLeaf !== !1 && n.doorStyle === "sliding") {
				let t = l * .2, n = (a + s) / 2, r = (o + c) / 2;
				e.strokeStyle = d, e.lineWidth = 2.4, e.beginPath(), e.moveTo(a - h * t, o - g * t), e.lineTo(n - h * t, r - g * t), e.moveTo(n + h * t, r + g * t), e.lineTo(s + h * t, c + g * t), e.stroke(), e.lineWidth = 1.2, e.beginPath(), e.moveTo(n - h * t, r - g * t), e.lineTo(n - h * t - f / m * 3, r - g * t - p / m * 3), e.moveTo(n + h * t, r + g * t), e.lineTo(n + h * t + f / m * 3, r + g * t + p / m * 3), e.stroke();
			} else if (n.hasLeaf !== !1) {
				let a = Math.min(.7, Math.max(.35, n.width)), o = r.cx + r.nx * a, s = r.cy + r.ny * a, c = v(this.plan, o, s) ? 1 : -1, l = (n.swing === "outward" ? -1 : 1) * c, u = n.doorStyle === "double" ? [{
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
					e.strokeStyle = d, e.lineWidth = Math.max(3, this.view.k * .04), e.beginPath(), e.moveTo(s, c), e.lineTo(u, f), e.stroke();
					let p = s + (u - s) * .82, m = c + (f - c) * .82;
					e.fillStyle = "#c9822e", e.fillRect(p + 1, m - 2, 4, 4);
					let h = Math.atan2(f - c, u - s), [g, _] = this.toScreen(n.tx, n.ty), v = Math.atan2(_ - c, g - s) - h;
					for (; v > Math.PI;) v -= Math.PI * 2;
					for (; v < -Math.PI;) v += Math.PI * 2;
					e.strokeStyle = this._tint(i ? W.sel : W.door, .5), e.lineWidth = 1.2, e.setLineDash([3, 3]), e.beginPath(), e.arc(s, c, n.len * t, h, h + v, v < 0), e.stroke(), e.setLineDash([]);
				}
			} else {
				e.strokeStyle = this._tint(d, .5), e.lineWidth = 1.2, e.setLineDash([4, 3]);
				let t = l * .3;
				e.beginPath(), e.moveTo(a - h * t, o - g * t), e.lineTo(s - h * t, c - g * t), e.moveTo(a + h * t, o + g * t), e.lineTo(s + h * t, c + g * t), e.stroke(), e.setLineDash([]);
			}
			if (i) for (let [t, n] of [[a, o], [s, c]]) e.beginPath(), e.arc(t, n, 3.5, 0, Math.PI * 2), e.fillStyle = W.sel, e.fill();
			e.restore();
		}
	}
	_drawFurniture() {
		let { ctx: e } = this;
		for (let t of this.plan.furniture) {
			let [n, r] = this.toScreen(t.x, t.y), i = t.scale || 1, a = t.w * i * this.view.k, o = t.d * i * this.view.k;
			e.save(), e.translate(n, r), e.rotate((t.rot || 0) * Math.PI / 180);
			let s = this.sel?.type === "furniture" && this.sel.id === t.id;
			e.fillStyle = s ? "rgba(77,148,255,.22)" : "rgba(120,140,160,.16)", e.strokeStyle = s ? W.sel : "rgba(120,140,160,.55)", e.lineWidth = 1.4, this._roundRect(-a / 2, -o / 2, a, o, Math.min(6, Math.min(a, o) * .18)), e.fill(), e.stroke(), this.view.k > 26 && (e.fillStyle = W.textDim, e.textAlign = "center", e.font = "10px system-ui,sans-serif", e.fillText(t.name || "", 0, 3)), e.restore();
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
			].includes(a), s = this.sel?.type === "device" && this.sel.id === n.id, c = Math.max(9, Math.min(40, Math.min(18, this.view.k * .18) * (n.scale || 1)));
			if (o) {
				let t = e.createRadialGradient(r, i, 0, r, i, c * 2.1);
				t.addColorStop(0, "rgba(77,148,255,.30)"), t.addColorStop(1, "rgba(77,148,255,0)"), e.fillStyle = t, e.beginPath(), e.arc(r, i, c * 2.1, 0, Math.PI * 2), e.fill();
			}
			e.beginPath(), e.arc(r, i, c, 0, Math.PI * 2), e.fillStyle = o ? "rgba(77,148,255,.22)" : "rgba(110,160,220,.13)", e.fill(), e.strokeStyle = s ? W.sel : o ? "rgba(77,148,255,.85)" : "rgba(110,160,220,.5)", e.lineWidth = s ? 2.4 : 1.6, e.stroke(), this._deviceGlyph(n.art || n.dom, r, i, c * .62, o ? "#4d94ff" : "rgba(110,160,220,.7)"), n.name && this.view.k > 22 && (e.fillStyle = W.textDim, e.textAlign = "center", e.font = "10px system-ui,sans-serif", e.fillText(n.name, r, i + c + 12));
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
			let [r, i] = g(n.poly), [a, o] = this.toScreen(r, i), s = h(n.poly), c = this.sel?.type === "room" && this.sel.id === n.id;
			e.textAlign = "center", e.lineWidth = 3, e.strokeStyle = "rgba(255,255,255,.9)", e.font = `500 ${Math.min(15, Math.max(10, t.k * .22))}px system-ui,-apple-system,sans-serif`, e.strokeText(n.name, a, o - 2), e.fillStyle = c ? W.sel : W.text, e.fillText(n.name, a, o - 2), e.font = `400 ${Math.min(12, Math.max(9, t.k * .16))}px system-ui,-apple-system,sans-serif`, e.strokeText(s.toFixed(1) + " m²", a, o + 13), e.fillStyle = W.textDim, e.fillText(s.toFixed(1) + " m²", a, o + 13);
		}
	}
	_drawDraft() {
		let e = this.draft.from;
		if (!e) return;
		let { ctx: t } = this, n = this.view.k, r = Math.max(3, (this.wallT || .15) * n), [i, a] = this.toScreen(e[0], e[1]);
		if (t.globalAlpha = this.tool === "wall" ? 1 : .4, t.beginPath(), t.arc(i, a, 5, 0, Math.PI * 2), t.fillStyle = "#ffffff", t.fill(), t.strokeStyle = W.draft, t.lineWidth = 2.2, t.stroke(), this.cursor) {
			let [n, o] = this.toScreen(this.cursor.x, this.cursor.y);
			t.save(), t.lineCap = "butt", t.strokeStyle = "rgba(77,148,255,.20)", t.lineWidth = r, t.beginPath(), t.moveTo(i, a), t.lineTo(n, o), t.stroke(), t.strokeStyle = W.draft, t.lineWidth = 1.8, t.setLineDash([7, 5]), t.beginPath(), t.moveTo(i, a), t.lineTo(n, o), t.stroke(), t.setLineDash([]);
			let s = p(e[0], e[1], this.cursor.x, this.cursor.y).toFixed(2) + " m", c = me[this.cursor.kind] || "";
			t.font = "600 11px ui-monospace,Menlo,monospace";
			let l = t.measureText(s).width, u = l + (c ? t.measureText(c).width + 20 : 14), d = n + 14, f = o - 26;
			t.fillStyle = "rgba(255,255,255,.94)", this._roundRect(d, f, u, 21, 6), t.fill(), t.strokeStyle = "rgba(77,148,255,.35)", t.lineWidth = 1, t.stroke(), t.fillStyle = W.draft, t.textAlign = "left", t.fillText(s, d + 7, f + 14), c && (t.fillStyle = "rgba(77,148,255,.9)", t.font = "500 10px system-ui,sans-serif", t.fillText(c, d + 11 + l, f + 14)), t.restore();
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
		e.strokeStyle = "rgba(120,140,160,.55)", e.lineWidth = 1.5, e.beginPath(), e.moveTo(18, i), e.lineTo(18 + r, i), e.moveTo(18, i - 4), e.lineTo(18, i + 4), e.moveTo(18 + r, i - 4), e.lineTo(18 + r, i + 4), e.stroke(), e.fillStyle = W.textDim, e.font = "11px system-ui,sans-serif", e.textAlign = "center", e.fillText(n + " m", 18 + r / 2, i - 8);
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
		if (this._handles && this.sel) {
			let [n, r] = this.toScreen(e, t), [i, a] = this._handles.rot, [o, s] = this._handles.scale;
			if (Math.hypot(n - i, r - a) <= 14) return { type: "handle-rot" };
			if (Math.hypot(n - o, r - s) <= 12) return { type: "handle-scale" };
		}
		let n = this.plan;
		if (!n) return null;
		let r = this.view.k > 0 ? 1 / this.view.k : .02, i = he * r, a = ge * r, o = _e * r, s = null;
		for (let r of n.walls) for (let n of [0, 1]) {
			let a = p(e, t, n ? r.x2 : r.x1, n ? r.y2 : r.y1);
			a <= i && (!s || a < s.d) && (s = {
				type: "wall-end",
				id: r.id,
				which: n,
				d: a
			});
		}
		if (s) return s;
		for (let i of n.openings) {
			let o = te(n, i);
			if (o && m(e, t, o.ax, o.ay, o.bx, o.by).d <= Math.max(a, C(o.wall) / 2 + 2 * r)) return {
				type: "opening",
				id: i.id,
				wallId: i.wallId
			};
		}
		for (let r of n.devices) if (p(e, t, r.x, r.y) <= .34) return {
			type: "device",
			id: r.id
		};
		for (let r of n.furniture) {
			let n = -(r.rot || 0) * Math.PI / 180, i = e - r.x, a = t - r.y, o = i * Math.cos(n) - a * Math.sin(n), s = i * Math.sin(n) + a * Math.cos(n), c = r.scale || 1;
			if (Math.abs(o) <= r.w * c / 2 && Math.abs(s) <= r.d * c / 2) return {
				type: "furniture",
				id: r.id
			};
		}
		let c = O(n.walls, e, t, .6);
		if (c) {
			let e = Math.max(o, C(c.wall) / 2 + 2 * r);
			if (c.d <= e) return {
				type: "wall",
				id: c.wall.id
			};
		}
		let l = v(n, e, t);
		return l ? {
			type: "room",
			id: l.id
		} : null;
	}
	_xformItem() {
		let e = this.sel;
		if (!e || e.type !== "furniture" && e.type !== "device") return null;
		let t = (e.type === "furniture" ? this.plan.furniture : this.plan.devices).find((t) => t.id === e.id);
		if (!t) return null;
		let n = t.scale || 1, r = e.type === "furniture" ? {
			w: t.w,
			d: t.d
		} : {
			w: .6,
			d: .6
		};
		return {
			kind: e.type,
			it: t,
			w: r.w * n,
			d: r.d * n
		};
	}
	_drawXformHandles() {
		let e = this._xformItem();
		if (!e) {
			this._handles = null;
			return;
		}
		let { ctx: t } = this, n = (e.it.rot || 0) * Math.PI / 180, [r, i] = this.toScreen(e.it.x, e.it.y), a = e.w / 2 * this.view.k, o = e.d / 2 * this.view.k, s = Math.cos(n), c = Math.sin(n);
		t.save(), t.translate(r, i), t.rotate(n), t.strokeStyle = W.sel, t.lineWidth = 1.2, t.setLineDash([5, 4]), t.strokeRect(-a, -o, a * 2, o * 2), t.setLineDash([]), t.restore();
		let l = r + s * (a + 22), u = i + c * (a + 22);
		t.strokeStyle = W.sel, t.lineWidth = 1.2, t.beginPath(), t.moveTo(r + s * a, i + c * a), t.lineTo(l, u), t.stroke(), t.beginPath(), t.arc(l, u, 6.5, 0, Math.PI * 2), t.fillStyle = W.bg, t.fill(), t.lineWidth = 2, t.stroke();
		let d = r + s * -a - c * -o, f = i + c * -a + s * -o;
		t.beginPath(), t.rect(d - 5.5, f - 5.5, 11, 11), t.fillStyle = W.bg, t.fill(), t.lineWidth = 2, t.stroke(), this._handles = {
			rot: [l, u],
			scale: [d, f]
		};
	}
	_snapAt(e, t) {
		let n = this.view.k > 0 ? 1 / this.view.k : 0, r = se(this.plan, e, t, .1, .02, {
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
		if (this.tool === "span") {
			let e = O(this.plan.walls, r, i, Math.max(.15, 12 / this.view.k));
			if (!e) {
				this.emit("notice", "请点在已有墙线上，可选端点、交点或任意位置");
				return;
			}
			let t = x(e.wall, e.t * y(e.wall));
			if (!this.draft.from) this.draft.from = [t.x, t.y], this.emit("notice", "起点已选，请在同一直墙上点终点；Esc 取消");
			else {
				let e = f(this.plan, {
					x: this.draft.from[0],
					y: this.draft.from[1]
				}, t);
				if (!e.ok) {
					this.emit("notice", e.reason);
					return;
				}
				this.draft.from = null, this.select({
					type: "wall-span",
					ids: e.ids
				}), this._changed(), this.emit("notice", "墙段已选，请在右侧设置实体墙或透明墙");
			}
			this.requestRender();
			return;
		}
		if (this.tool === "calibrate") {
			if (this.calibPts = this.calibPts || [], this.calibPts.length >= 2 && (this.calibPts = []), this.calibPts.push([r, i]), this.calibPts.length === 2) {
				let [e, t] = this.calibPts[0];
				this.emit("calibrated", p(e, t, r, i));
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
			let t = e.wall, n = oe(t, e.t * y(t), this.tool, { width: this.tool === "door" ? .9 : 1.2 }), a = this.tool === "door";
			a && (n.hasLeaf = !0), this.plan.openings.push(n), this.select({
				type: "opening",
				id: n.id
			}), this._changed(), this.emit("notice", a ? "门已放置；切回「选择」点门洞，在右侧调整门宽、样式和开向" : "窗已放上；离地高度可按需调整");
			return;
		}
		let a = this._hitTest(r, i);
		if (a && (a.type === "handle-rot" || a.type === "handle-scale")) {
			let e = this._xformItem();
			e && (this._drag = {
				kind: a.type,
				id: e.it.id,
				kindItem: e.kind,
				rot0: e.it.rot || 0,
				s0: e.it.scale || 1,
				d0: Math.max(.15, p(r, i, e.it.x, e.it.y))
			});
		} else if (a) {
			if (this.select(a.type === "wall-end" ? {
				type: "wall",
				id: a.id
			} : a), a.type === "wall-end") {
				let e = this.plan.walls.find((e) => e.id === a.id), t = a.which === 0 ? e.x1 : e.x2, n = a.which === 0 ? e.y1 : e.y2, r = this.plan.walls.filter((e) => p(e.x1, e.y1, t, n) <= .06 || p(e.x2, e.y2, t, n) <= .06).map((e) => e.id);
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
			if (e.kind === "handle-rot" || e.kind === "handle-scale") {
				let t = (e.kindItem === "furniture" ? this.plan.furniture : this.plan.devices).find((t) => t.id === e.id);
				t && (e.kind === "handle-rot" ? t.rot = Math.round(Math.atan2(i - t.y, r - t.x) * 180 / Math.PI) : t.scale = Math.round(Math.max(.3, Math.min(4, e.s0 * p(r, i, t.x, t.y) / e.d0)) * 100) / 100, this.requestRender());
				return;
			}
			if (e.kind === "wall-end") {
				let t = se(this.plan, r, i, .1, .02, {
					guides: this.guides,
					px: 1 / this.view.k,
					skip: new Set(e.mates || [e.id])
				});
				for (let n of this.plan.walls) (e.mates || [e.id]).includes(n.id) && (p(n.x1, n.y1, e.x0, e.y0) <= .06 && (n.x1 = t.x, n.y1 = t.y), p(n.x2, n.y2, e.x0, e.y0) <= .06 && (n.x2 = t.x, n.y2 = t.y));
				j(this.plan);
			} else if (e.kind === "furniture" || e.kind === "device") {
				let t = (e.kind === "furniture" ? this.plan.furniture : this.plan.devices).find((t) => t.id === e.id);
				t && (t.x = e.x0 + (r - e.ox), t.y = e.y0 + (i - e.oy));
			} else if (e.kind === "opening") {
				let t = this.plan.openings.find((t) => t.id === e.id), n = t && this.plan.walls.find((e) => e.id === t.wallId);
				if (t && n) {
					let e = m(r, i, n.x1, n.y1, n.x2, n.y2);
					t.offset = D(n, {
						...t,
						offset: e.t * y(n)
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
		if (p(i.from[0], i.from[1], n.x, n.y) < a) return;
		r.walls.push(S(i.from[0], i.from[1], n.x, n.y, { t: this.wallT || .15 })), i.ids.push(r.walls[r.walls.length - 1].id), i.from = [n.x, n.y];
		let o = r.rooms.length, s = new Set(r.rooms.map((e) => e.id)), { rooms: c, tiny: l } = j(r), u = c.filter((e) => !s.has(e.id));
		u.length && (u.sort((e, t) => Math.abs(h(t.poly)) - Math.abs(h(e.poly))), this.select({
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
		let t = re(e, { t: this.wallT || .15 });
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
		let r = R.find((t) => t.kind === e);
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
		Math.abs(n - 1) < 1e-4 || (ye(this.plan, 1 / n), this.plan.base.ppm && (this.plan.base.ppm *= n), j(this.plan), this.refreshGuides(), this._changed(), this.requestRender());
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
function ye(e, t) {
	for (let n of e.walls || []) n.x1 *= t, n.y1 *= t, n.x2 *= t, n.y2 *= t, n.t = (n.t || .15) * t;
	for (let n of e.openings || []) n.offset *= t, n.width *= t, n.height *= t, n.bottom *= t;
	for (let n of e.furniture) n.x *= t, n.y *= t, n.w *= t, n.d *= t;
	for (let n of e.devices) n.x *= t, n.y *= t;
	for (let n of e.rooms) n.poly = n.poly.map(([e, n]) => [e * t, n * t]);
	return e;
}
// src/floor3d/extract.js
function be(e, t, n) {
	let r = new Uint8Array(t * n);
	for (let t = 0, n = 0; n < r.length; t += 4, n++) r[n] = e[t] * 77 + e[t + 1] * 150 + e[t + 2] * 29 >> 8;
	return r;
}
function xe(e, t, n) {
	let r = t + 1, i = new Float64Array(r * (n + 1));
	for (let a = 0; a < n; a++) {
		let n = 0, o = a * t, s = (a + 1) * r, c = a * r;
		for (let r = 0; r < t; r++) n += e[o + r], i[s + r + 1] = i[c + r + 1] + n;
	}
	return i;
}
function Se(e, t, n, r, i, a) {
	let o = t + 1, s = Math.max(0, r - a), c = Math.min(t, r + a + 1), l = Math.max(0, i - a), u = Math.min(n, i + a + 1);
	return (e[u * o + c] - e[l * o + c] - e[u * o + s] + e[l * o + s]) / ((c - s) * (u - l));
}
function G(e, t, n, r, i) {
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
var K = (e, t, n, r) => G(G(e, t, n, r, !0), t, n, r, !1);
function q(e, t, n, r, i, a) {
	let o = new Float64Array(t * n);
	for (let i = 0; i < t * n; i++) o[i] = +(e[i] < r);
	let s = xe(o, t, n), c = new Uint8Array(t * n);
	for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) c[e * t + r] = +(Se(s, t, n, r, e, i) > a);
	return c;
}
function J(e, t, n, r = {}) {
	let i = Math.max(.5, t / 1e3), a = Math.max(4, Math.min(16, r.radius ?? Math.round(7 * i)));
	return K(q(e, t, n, r.dark ?? 238, a, r.density ?? .42), t, n, 2);
}
function Ce(e, t, n, r = {}) {
	let i = r.ppm || t / 12, a = Math.max(.5, t / 1e3), o = Math.max(4, Math.min(16, r.radiusLines ?? Math.round(5 * a)));
	return K(q(e, t, n, r.darkLines ?? 170, o, r.densityLines ?? .16), t, n, Math.max(2, Math.round(r.close ?? .22 * i)));
}
function we(e, t, n, r = {}) {
	let i = J(e, t, n, r), a = Ce(e, t, n, r), o = new Uint8Array(t * n);
	for (let e = 0; e < t * n; e++) o[e] = i[e] | a[e] ? 1 : 0;
	return o;
}
function Te(e, t, n, r = {}) {
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
function Ee(e, t = {}) {
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
	return De(a, t);
}
function De(e, t = {}) {
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
function Oe(e, t) {
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
function ke(e, t = {}) {
	let n = t.ppm || 100, r = (t.reach ?? .25) * n, i = (t.minClusterLen ?? 2) * n, a = e.length, o = (e) => Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
	if (a < 2) return e.filter((e) => o(e) >= i);
	let s = new Int32Array(a);
	for (let e = 0; e < a; e++) s[e] = e;
	let c = (e) => {
		for (; s[e] !== e;) s[e] = s[s[e]], e = s[e];
		return e;
	};
	for (let t = 0; t < a; t++) for (let n = t + 1; n < a; n++) {
		if (Oe(e[t], e[n]) > r) continue;
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
	let i = [...Te(e, t, n, {
		...r,
		axis: "h"
	}), ...Te(e, t, n, {
		...r,
		axis: "v"
	})];
	return i = Ee(i, r), ke(i, r);
}
var X = (e) => Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
function Ae(e, t, n, r = {}) {
	let i = r.ppm && r.ppm > 0 ? r.ppm : t / 12, a = {
		...r,
		ppm: i
	}, o = r.path || "auto", s;
	o === "lines" ? s = Y(Ce(e, t, n, a), t, n, a) : o === "fill" ? s = Y(J(e, t, n, a), t, n, a) : (s = Y(J(e, t, n, a), t, n, a), s.reduce((e, t) => e + X(t), 0) < 4 * i && (s = Y(we(e, t, n, a), t, n, a))), s.sort((e, t) => X(t) - X(e));
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
var je = "ha-dash.floorplan.v1", Me = 1600, Ne = 1400, Pe = [
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
		key: "span",
		label: "选墙段",
		icon: "<path d=\"M4 12h16\"/><circle cx=\"4\" cy=\"12\" r=\"2\"/><circle cx=\"20\" cy=\"12\" r=\"2\"/>"
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
], Fe = {
	CLEAR_DAY: "晴",
	CLEAR_NIGHT: "晴",
	PARTLY_CLOUDY_DAY: "多云",
	PARTLY_CLOUDY_NIGHT: "多云",
	CLOUDY: "阴",
	FOG: "雾",
	LIGHT_HAZE: "轻度霾",
	MODERATE_HAZE: "中度霾",
	HEAVY_HAZE: "重度霾",
	LIGHT_RAIN: "小雨",
	MODERATE_RAIN: "中雨",
	HEAVY_RAIN: "大雨",
	STORM_RAIN: "暴雨",
	LIGHT_SNOW: "小雪",
	MODERATE_SNOW: "中雪",
	HEAVY_SNOW: "大雪",
	STORM_SNOW: "暴雪",
	WIND: "大风",
	DUST: "浮尘",
	SAND: "沙尘"
}, Ie = {
	"clear-night": "晴",
	sunny: "晴",
	partlycloudy: "多云",
	cloudy: "阴",
	fog: "雾",
	hail: "冰雹",
	lightning: "雷雨",
	"lightning-rainy": "雷雨",
	pouring: "暴雨",
	rainy: "雨",
	snowy: "雪",
	"snowy-rainy": "雨夹雪",
	windy: "大风",
	"windy-variant": "大风",
	exceptional: "异常"
}, Le = {
	"clear-night": "🌙",
	sunny: "☀️",
	partlycloudy: "⛅",
	cloudy: "☁️",
	fog: "🌫️",
	hail: "🌨️",
	lightning: "⛈️",
	"lightning-rainy": "⛈️",
	pouring: "🌧️",
	rainy: "🌧️",
	snowy: "❄️",
	"snowy-rainy": "🌨️",
	windy: "💨",
	"windy-variant": "💨",
	exceptional: "🌡️"
};
function Re(e, t) {
	if (t === 0) return "今天";
	if (t === 1) return "明天";
	if (t === 2) return "后天";
	let n = new Date(e);
	return Number.isNaN(n.getTime()) ? "" : "周" + "日一二三四五六"[n.getDay()];
}
var ze = {
	off: "关闭",
	cool: "制冷",
	heat: "制热",
	heat_cool: "自动",
	auto: "自动",
	dry: "除湿",
	fan_only: "送风"
}, Be = {
	auto: "自动",
	low: "低",
	middle: "中",
	medium: "中",
	high: "高",
	quiet: "静音",
	silent: "静音",
	turbo: "强劲",
	strong: "强劲",
	baby: "婴儿"
}, Ve = {
	on: "开",
	off: "关",
	vertical: "上下",
	horizontal: "左右",
	both: "上下+左右"
}, He = {
	auto: "自动",
	sleep: "睡眠",
	favorite: "最爱",
	normal: "标准",
	none: "无"
}, Ue = [
	[
		255,
		214,
		170
	],
	[
		255,
		150,
		90
	],
	[
		255,
		90,
		90
	],
	[
		255,
		120,
		200
	],
	[
		190,
		120,
		255
	],
	[
		90,
		140,
		255
	],
	[
		80,
		220,
		220
	],
	[
		120,
		255,
		160
	]
];
function We(e, t) {
	let n = t / 100 * 1, r = n * (1 - Math.abs(e / 60 % 2 - 1)), i = .5 - n / 2;
	return (e < 60 ? [
		n,
		r,
		0
	] : e < 120 ? [
		r,
		n,
		0
	] : e < 180 ? [
		0,
		n,
		r
	] : e < 240 ? [
		0,
		r,
		n
	] : e < 300 ? [
		r,
		0,
		n
	] : [
		n,
		0,
		r
	]).map((e) => Math.round((e + i) * 255));
}
var Ge = (e) => [
	"on",
	"cool",
	"heat",
	"heat_cool",
	"auto",
	"fan_only",
	"dry",
	"open",
	"unlocked"
].includes(e);
function Ke(e, t) {
	return e === "unavailable" ? "离线" : e === "unknown" ? "未知" : t === "climate" ? e === "off" ? "已关闭" : (ze[e] || e) + "中" : t === "lock" ? e === "locked" ? "已上锁" : "已解锁" : e === "on" ? "已开启" : e === "off" ? "已关闭" : e;
}
var Z = [
	"light",
	"switch",
	"fan",
	"climate",
	"camera",
	"media_player",
	"lock",
	"cover",
	"vacuum",
	"humidifier"
], qe = {
	light: "灯光",
	switch: "开关",
	fan: "风扇",
	climate: "空调",
	camera: "摄像头",
	media_player: "影音",
	lock: "门锁",
	cover: "窗帘",
	vacuum: "扫地机",
	humidifier: "加湿器"
}, Je = class {
	constructor(e, t = {}) {
		this.host = e, this.opts = t, this.mode = "edit", this.tool = "select", this.plan = Xe(), this.editor = null, this.scene = null, this.sel = null, this._hass = null, this._calibDist = 0, this._wallHint = "", this._showGuides = !0, this._busy = !1, this.el = document.createElement("div"), this.el.className = "fh", this.el.innerHTML = "\n      <style>.fh{z-index:20;--bg:#f4f5f2;--text:#202225;--text-2:#4a5054;--text-3:#94999d;--line:#e3e5e1;--line-2:#d0d3ce;--warm:#4d94ff;--warm-deep:#2f78e3;--ok:#268663;background:var(--bg);color:var(--text);animation:fhIn .28s var(--ease);flex-direction:column;display:flex;position:absolute;top:0;bottom:0;left:0;right:0}.fh[hidden]{display:none}@keyframes fhIn{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}.fh-top{border-bottom:1px solid var(--line);background:linear-gradient(#131316,#0c0c0e);flex:none;align-items:center;gap:10px;height:54px;padding:0 14px;display:flex}.fh-seg{border:1px solid var(--line);background:#0e0e10;border-radius:11px;gap:2px;padding:3px;display:flex}.fh-seg button{color:var(--text-2);cursor:pointer;transition:.18s var(--ease);background:0 0;border:0;border-radius:8px;padding:7px 13px;font:500 12.5px/1 inherit}.fh-seg button:hover:not(.on){color:var(--text)}.fh-tools{align-items:center;gap:3px;display:flex}.fh-tools[hidden]{display:none}.fh-tools[data-for=edit] button{white-space:nowrap;color:var(--text-3);cursor:pointer;transition:.16s var(--ease);background:0 0;border:1px solid #0000;border-radius:10px;flex-direction:column;flex:none;align-items:center;gap:3px;padding:5px 9px;font:400 10px/1 inherit;display:flex}.fh-tools[data-for=edit] button svg{fill:none;stroke:currentColor;stroke-width:1.7px;stroke-linecap:round;stroke-linejoin:round;width:17px;height:17px}.fh-tools[data-for=edit] button:hover{color:var(--text-2);background:#ffffff0a}.fh-tools[data-for=edit] button.on{color:var(--warm);background:#ffd9a01a;border-color:#ffd9a038}.fh-tools[data-for=view] button{border:1px solid var(--line);color:var(--text-2);cursor:pointer;background:#141417;border-radius:9px;padding:8px 12px;font:500 12px/1 inherit}.fh-spacer{flex:1}.fh-btn{border:1px solid var(--line);color:var(--text-2);cursor:pointer;background:#141417;border-radius:10px;width:34px;height:34px;font-size:16px}.fh-btn:hover{color:var(--text);border-color:var(--line-2)}.fh-body{flex:1;min-height:0;display:flex;position:relative}.fh-stage{background:#06070b;flex:1;min-width:0;position:relative;overflow:hidden}.fh-stage canvas{display:block;position:absolute;top:0;bottom:0;left:0;right:0}.fe-canvas{outline:none}.fh-loading{color:var(--text-3);place-items:center;font-size:13px;display:grid;position:absolute;top:0;bottom:0;left:0;right:0}.fh-panel{overscroll-behavior:contain;border-left:1px solid var(--line);background:#0d0d0f;flex:0 0 270px;width:270px;padding:14px 14px 60px;overflow-y:auto}.fh-panel[hidden]{display:none}.fh-sec{margin-bottom:20px}.fh-sec h4{color:var(--text-2);letter-spacing:.04em;margin-bottom:10px;font:600 12px/1 inherit}.fh-note{color:var(--text-3);margin-bottom:10px;font-size:11.5px;line-height:1.7}.fh-note b{color:var(--text-2);font-weight:600}.fh-mini{margin:-2px 0 8px;font-size:10.5px;line-height:1.55}.fh-keys{flex-wrap:wrap;gap:6px;display:flex}.fh-keys span{border:1px solid var(--line);color:var(--text-3);background:#131316;border-radius:8px;align-items:center;gap:5px;padding:5px 8px;font:400 10.5px/1 inherit;display:inline-flex}.fh-keys i{color:var(--warm);background:#ffd9a01a;border-radius:5px;padding:3px 5px;font:600 10px/1 ui-monospace,Menlo,monospace}.fh-wide[disabled]{opacity:.45;cursor:default}.fh-kv{border-bottom:1px solid #ffffff0a;justify-content:space-between;align-items:baseline;gap:10px;padding:7px 0;font-size:12px;display:flex}.fh-kv span{color:var(--text-3)}.fh-kv b{color:var(--text);font-weight:500}.fh-kv b.mono{text-overflow:ellipsis;white-space:nowrap;max-width:150px;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;overflow:hidden}.fh-field{color:var(--text-3);flex-direction:column;gap:7px;margin:12px 0;font-size:12px;display:flex}.fh-field input[type=range]{width:100%;accent-color:var(--warm-deep)}.fh-field input[type=checkbox]{width:16px;height:16px;accent-color:var(--warm-deep)}.fh-input{border:1px solid var(--line-2);width:100%;color:var(--text);background:#131316;border-radius:9px;outline:none;padding:8px 10px;font:500 13px/1.3 inherit}.fh-input:focus{border-color:#ffd9a066}.fh-wide{cursor:pointer;border:1px solid var(--line-2);width:100%;color:var(--text-2);transition:.16s var(--ease);background:#17171a;border-radius:10px;margin-top:6px;padding:10px;font:500 12.5px/1 inherit}.fh-wide:hover{color:var(--text);background:#1d1d21}.fh-wide.primary{color:#20170a;background:linear-gradient(#f0c78b,#d9a762);border-color:#0000;font-weight:600}.fh-danger{cursor:pointer;color:#ff9a9a;background:#ff5a5a14;border:1px solid #ff787838;border-radius:10px;width:100%;margin-top:10px;padding:9px;font:500 12px/1 inherit}.fh-danger[disabled]{cursor:not-allowed;opacity:.45;color:#b98a8a;background:#ff5a5a0a;border-color:#ff787824}.fh-danger[disabled]:hover{background:#ff5a5a0a}.fh-row2{gap:8px;margin:10px 0;display:flex}.fh-row2 button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);background:#17171a;border-radius:9px;flex:1;padding:8px;font:500 12px/1 inherit}.fh-row2 button:hover{color:var(--text);background:#1d1d21}.fh-grid2{grid-template-columns:1fr 1fr;gap:6px;display:grid}.fh-chip{cursor:pointer;text-align:left;border:1px solid var(--line);color:var(--text-2);transition:.14s var(--ease);background:#131316;border-radius:10px;flex-direction:column;align-items:flex-start;gap:3px;padding:9px 10px;font:500 12px/1.2 inherit;display:flex}.fh-chip i{color:var(--text-3);font-size:10px;font-style:normal}.fh-chip:hover{border-color:var(--line-2);color:var(--text);background:#1a1a1e}.fh-list{flex-direction:column;gap:4px;display:flex}.fh-row{cursor:pointer;text-align:left;width:100%;color:var(--text-2);background:#121215;border:1px solid #0000;border-radius:9px;align-items:center;gap:8px;padding:9px 10px;font:500 12px/1 inherit;display:flex}.fh-row:hover{color:var(--text);background:#19191d}.fh-row .dot{background:#4a5568;border-radius:50%;flex:none;width:6px;height:6px}.fh-row.done .dot{background:var(--ok)}.fh-row .nm{text-overflow:ellipsis;white-space:nowrap;flex:1;overflow:hidden}.fh-row .rm{color:var(--text-3);font-size:10.5px}.fh-stats{border-top:1px solid var(--line);grid-template-columns:repeat(3,1fr);gap:8px;padding-top:12px;display:grid}.fh-stats div{text-align:center}.fh-stats b{color:var(--text);font:600 17px/1 inherit;display:block}.fh-stats span{color:var(--text-3);font-size:10.5px}.fh-hint{border:1px solid var(--line-2);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);max-width:min(560px,100% - 300px);color:var(--text-2);opacity:0;pointer-events:none;transition:.24s var(--ease);background:#141418eb;border-radius:99px;padding:9px 16px;font:450 12px/1.4 inherit;position:absolute;bottom:18px;left:50%;transform:translate(-50%,10px)}.fh-hint.on{opacity:1;transform:translate(-50%)}.fh-menu{z-index:40;border:1px solid var(--line-2);background:#151518;border-radius:12px;flex-direction:column;min-width:168px;padding:5px;display:flex;position:absolute;top:58px;right:14px;box-shadow:0 16px 40px #0009}.fh-menu[hidden]{display:none}.fh-menu button{text-align:left;cursor:pointer;color:var(--text-2);background:0 0;border:0;border-radius:8px;padding:9px 11px;font:500 12.5px/1 inherit}.fh-menu button:hover{color:var(--text);background:#1e1e22}.fh-calib{z-index:50;border:1px solid var(--line-2);color:var(--text-2);background:#16161a;border-radius:12px;align-items:center;gap:8px;padding:10px 12px;font:450 12.5px/1 inherit;display:flex;position:absolute;bottom:70px;left:50%;transform:translate(-50%);box-shadow:0 16px 40px #0009}.fh-calib input{border:1px solid var(--line-2);width:90px;color:var(--text);background:#0f0f12;border-radius:8px;outline:none;padding:7px 9px;font:500 13px/1 inherit}.fh-calib button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);background:#1d1d21;border-radius:8px;padding:7px 13px;font:500 12px/1 inherit}.fh-calib button.primary{color:#20170a;background:linear-gradient(#f0c78b,#d9a762);border-color:#0000;font-weight:600}.fh-dev{z-index:30;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);overscroll-behavior:contain;color:#eef4ffeb;width:272px;animation:devIn .22s var(--ease);background:#151e2ef5;border:1px solid #e2ecff14;border-radius:20px;padding:18px 20px;position:absolute;top:14px;bottom:14px;right:14px;overflow-y:auto;box-shadow:0 18px 44px #0006}@keyframes devIn{0%{opacity:0;transform:translate(8px)}to{opacity:1;transform:none}}.fh-dev[hidden]{display:none}.fh-dev-head{justify-content:space-between;align-items:center;margin-bottom:4px;display:flex}.fh-dev-head b{color:#fff;font:600 15px/1 inherit}.fh-dev-head button{color:#e7eeff99;cursor:pointer;background:0 0;border:0;padding:2px 4px;font-size:13px}.fh-dev-head button:hover{color:#fff}.fh-dev-sub{color:#e7eeff8c;margin-bottom:12px;font-size:11.5px}.fh-dev .fh-field{color:#e7eeffad;background:#ffffff0a;border:1px solid #e2ecff12;border-radius:12px;margin:8px 0;padding:12px}.fh-dev .fh-field span{color:#e7eeffad}.fh-dev .fh-kv{color:#eef4ffe6;border-bottom:1px solid #e2ecff14}.fh-dev .fh-kv b{color:#fff}.fh-dev .fh-wide,.fh-dev .fh-seg2 button,.fh-dev .fh-seg3 button{color:#eef4ffe6;background:#ffffff0f;border-color:#e2ecff1a}.fh-dev .fh-wide:hover,.fh-dev .fh-seg2 button:hover,.fh-dev .fh-seg3 button:hover{background:#ffffff1c}.fh-dev .fh-seg2 button.on,.fh-dev .fh-seg3 button.on{color:#9cc4ff;background:#4d94ff38;border-color:#4d94ff80}.fh-dev .fh-num input{color:#fff;background:#ffffff0f;border-color:#e2ecff1a}.fh-dev input[type=range]{accent-color:#4d94ff;min-height:24px}.fh-dev .fh-wide.primary{color:#fff;background:linear-gradient(#5aa0ff,#4d94ff)}.fh-swatches{grid-template-columns:repeat(4,1fr);gap:8px;display:grid}.fh-swatch{aspect-ratio:1;cursor:pointer;transition:.14s var(--ease);border:2px solid #0000;border-radius:50%;box-shadow:0 1px 3px #00000059}.fh-swatch.on{border-color:#4d94ff;box-shadow:0 0 0 3px #4d94ff40}.fh-dev .fh-field input[type=checkbox]{accent-color:#4d94ff;width:18px;height:18px}.floor3d-canvas{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0}.fh-seg2{gap:6px;display:flex}.fh-seg2 button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);transition:.14s var(--ease);background:#17171a;border-radius:9px;flex:1;padding:8px 6px;font:500 12px/1 inherit}.fh-seg2 button:hover{color:var(--text);background:#1d1d21}.fh-seg2 button.on{color:var(--warm);background:#ffd9a021;border-color:#ffd9a075}.fh-seg3{gap:6px;display:flex}.fh-seg3 button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);transition:.14s var(--ease);background:#17171a;border-radius:9px;flex:1;padding:8px 4px;font:500 12px/1 inherit}.fh-seg3 button:hover{color:var(--text);background:#1d1d21}.fh-seg3 button.on{color:var(--warm);background:#ffd9a021;border-color:#ffd9a075}.fh-floor{border-top:1px solid var(--line-2);margin-top:8px;padding-top:4px}.fh-field input[type=color]{border:1px solid var(--line-2);cursor:pointer;background:#101014;border-radius:8px;width:100%;height:34px;padding:2px}.fh-row2 .fh-field{flex:1;min-width:0}.fh-row2 .fh-field input[type=color]{width:100%;height:34px}.fh-grid2 button{white-space:nowrap}.fh-num{align-items:center;gap:8px;display:flex}.fh-num input[type=number]{border:1px solid var(--line-2);min-width:0;color:var(--text);background:#101014;border-radius:8px;flex:1;padding:7px 9px;font:500 12px/1 ui-monospace,Menlo,monospace}.fh-num input[type=number]:focus{border-color:#ffd9a066;outline:none}.fh-num em{color:var(--text-3);flex:none;font-size:11px;font-style:normal}.fh-num input[type=color]{border:1px solid var(--line-2);cursor:pointer;background:#101014;border-radius:8px;flex:none;width:40px;height:30px;padding:0}.fh-pick{color:var(--warm);border-color:#ffd9a066}.fh-stage{position:relative}.fh3d-info{z-index:6;pointer-events:none;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#e2eeffe6;background:#0d0f16b8;border:1px solid #8caadc29;border-radius:12px;flex-wrap:wrap;align-items:center;gap:10px;max-width:calc(100% - 28px);padding:9px 14px;font:500 12.5px/1.4 inherit;display:flex;position:absolute;top:14px;left:14px;box-shadow:0 4px 18px #00000059}.fh3d-info b{color:#fff;letter-spacing:.02em;font-size:13px}.fh3d-info i{color:#bed0ebd9;border-left:1px solid #8caadc33;align-items:center;padding-left:10px;font-style:normal;display:inline-flex}.fh3d-info i:first-of-type{border-left:none;padding-left:0}.fh3d-tools{z-index:6;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:#0d0f16c7;border:1px solid #8caadc2e;border-radius:12px;align-items:center;gap:8px;padding:8px 12px;display:flex;position:absolute;bottom:16px;left:50%;transform:translate(-50%);box-shadow:0 4px 18px #0006}.fh3d-tools button{color:#e2eeffe6;cursor:pointer;background:#ffffff0d;border:1px solid #8caadc33;border-radius:9px;width:34px;height:32px;font:600 14px/1 inherit;transition:all .12s}.fh3d-tools button:hover{background:#ffd9a026;border-color:#ffd9a073}.fh3d-tools button.del:hover{background:#f871712e;border-color:#f8717180}.fh3d-tools label{color:#bed0ebd9;align-items:center;gap:6px;font-size:12px;display:flex}.fh3d-tools input[type=range]{accent-color:#fbbf24;width:110px}.fh3d-tools b{color:#fbbf24;min-width:34px;font:600 12px/1 ui-monospace,Menlo,monospace}.fh3d-tools[hidden],.fh3d-info[hidden]{display:none}.fh3d-style{z-index:6;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:#0d0f16b8;border:1px solid #8caadc2e;border-radius:12px;align-items:center;gap:8px;padding:7px 10px;display:flex;position:absolute;top:14px;right:14px;box-shadow:0 4px 18px #00000059}.fh3d-style select{color:#e2eeffeb;cursor:pointer;background:#101014;border:1px solid #8caadc40;border-radius:8px;outline:none;padding:6px 8px;font:500 12px/1 inherit}.fh3d-style label{color:#bed0ebd9;cursor:pointer;white-space:nowrap;align-items:center;gap:5px;font-size:12px;display:flex}.fh3d-style input[type=checkbox]{accent-color:#c9a86a;cursor:pointer}.fh-stage{--scene-panel:#1b1a18eb;--scene-text:#f2eadc;--scene-muted:#c2b8a5;--scene-gold:#d2b47c}.fh3d-info,.fh3d-style,.fh3d-tools{background:var(--scene-panel);color:var(--scene-text);border-color:#d2b47c4d;border-radius:8px}.fh3d-info{gap:10px 16px;max-width:calc(100% - 320px);padding:14px 18px}.fh3d-info b{color:var(--scene-gold);flex-basis:100%;font-family:Noto Serif SC,Source Han Serif SC,serif;font-size:18px;font-weight:500}.fh3d-info i,.fh3d-style label,.fh3d-tools label{color:var(--scene-muted)}.fh3d-style select{max-width:190px;min-height:44px;color:var(--scene-text);border-color:#d2b47c59}.fh3d-style label{min-height:44px;padding:0 6px}.fh3d-tools button{min-width:44px;min-height:44px}.fh3d-tools input[type=range]{min-height:44px;accent-color:var(--scene-gold)}.fh3d-tools b{color:var(--scene-gold)}.fh3d-style select:focus-visible{outline:2px solid var(--scene-gold);outline-offset:3px}.fh3d-style input:focus-visible{outline:2px solid var(--scene-gold);outline-offset:3px}.fh3d-tools :focus-visible{outline:2px solid var(--scene-gold);outline-offset:3px}@media (max-width:768px){.fh3d-info{gap:6px 12px;max-width:calc(100% - 20px);padding:10px 12px;top:10px;left:10px}.fh3d-style{max-width:calc(100% - 20px);top:auto;bottom:12px;right:10px}.fh3d-tools{flex-wrap:wrap;justify-content:center;max-width:calc(100% - 32px);bottom:84px}.fh3d-tools input[type=range]{width:85px}}@media (prefers-reduced-motion:reduce){.fh3d-tools button{transition:none}}.fh-top{border-bottom:1px solid var(--line);background:linear-gradient(#fff,#ffffffdb)}.fh-seg{border-color:var(--line);background:#eceeea}.fh-seg button.on{color:var(--text);background:#fff;box-shadow:0 1px 2px #2226231a,inset 0 0 0 1px #ffffffb3}.fh-tools[data-for=edit] button:hover{background:#3c464b0f}.fh-tools[data-for=edit] button.on{background:#edf5ff;border-color:#4d94ff42}.fh-tools[data-for=view] button,.fh-btn{background:#fff}.fh-stage{background:#f4f5f2}.fh-panel{border-left:1px solid var(--line);background:#fff}.fh-keys span{background:#f2f3f0}.fh-keys i{background:#4d94ff1a}.fh-kv{border-bottom:1px solid #eef0ec}.fh-input,.fh-num input[type=number],.fh-num input[type=color],.fh-field input[type=color]{background:#fff}.fh-input:focus,.fh-num input[type=number]:focus{border-color:#4d94ff73}.fh-wide,.fh-row2 button,.fh-seg2 button,.fh-seg3 button{background:#fff}.fh-wide:hover,.fh-row2 button:hover,.fh-seg2 button:hover,.fh-seg3 button:hover{background:#f0f1ee}.fh-wide.primary,.fh-calib button.primary{color:#fff;background:linear-gradient(#5aa0ff,#4d94ff)}.fh-danger{color:#c64a43;background:#fff2f0;border-color:#c64a4338}.fh-danger:hover{background:#fbeae7}.fh-danger[disabled]{color:#c9a3a1;background:#fdf4f2;border-color:#c64a4324}.fh-chip{background:#fff}.fh-chip:hover{background:#f0f1ee}.fh-row{background:#f7f8f5}.fh-row:hover{background:#f0f1ee}.fh-row .dot{background:#b7bfc7}.fh-hint{color:#4a5054;border-color:var(--line-2);background:#ffffffeb;box-shadow:0 12px 34px #22262324}.fh-menu{border-color:var(--line-2);background:#fff;box-shadow:0 16px 40px #22262329}.fh-menu button:hover{background:#f0f1ee}.fh-menu button.danger{color:#c64a43}.fh-menu button.danger:hover{background:#fbeae7}.fh-calib{border-color:var(--line-2);background:#fff;box-shadow:0 16px 40px #22262329}.fh-calib input{background:#fff}.fh-calib button{background:#f2f3f0}.fh-seg2 button.on,.fh-seg3 button.on{color:#2f78e3;background:#edf5ff;border-color:#4d94ff66}.fh-pick{border-color:#4d94ff66}.fh3d-info{flex-direction:column;align-items:stretch;gap:8px}.wx-title{color:#fff;align-items:baseline;gap:10px;font-size:31px;font-weight:400;line-height:1;display:flex}.wx-pill{align-items:center;gap:5px;display:flex}.wx-meta{color:#e7eeffad;flex-wrap:wrap;gap:4px 16px;font-size:14px;display:flex}.wx-item{align-items:center;gap:6px;display:flex}.wx-days{color:#ecf4ffe6;gap:8px;margin-top:4px;display:flex}.wx-day{grid-template-rows:auto auto;grid-template-columns:auto auto;place-items:center start;gap:0 3px;padding:1px 2px;display:grid}.wx-day i{color:#e7eeff99;border-left:none;grid-column:1/-1;padding-left:0;font-size:9px;font-style:normal}.wx-icon{font-size:12px;line-height:1}.wx-day b{color:#ecf4ffe6;letter-spacing:0;flex-basis:auto;font-family:inherit;font-size:12px}.wx-day em{color:#96b4dcb3;font-size:8.5px;font-style:normal}</style>\n      <header class=\"fh-top\">\n        <div class=\"fh-seg\">\n          <button data-mode=\"edit\" class=\"on\">编辑户型</button>\n          <button data-mode=\"view\">3D 展示</button>\n        </div>\n        <div class=\"fh-tools\" data-for=\"edit\"></div>\n        <div class=\"fh-spacer\"></div>\n        <div class=\"fh-tools\" data-for=\"view\" hidden>\n          <button data-act=\"fit\" title=\"居中\">⤢ 居中</button>\n        </div>\n        <button class=\"fh-btn\" data-act=\"menu\" title=\"更多\">⋯</button>\n      </header>\n      <div class=\"fh-body\">\n        <div class=\"fh-stage\"></div>\n        <aside class=\"fh-panel\"></aside>\n      </div>\n      <div class=\"fh-hint\"></div>\n      <div class=\"fh-menu\" hidden>\n        <button data-act=\"base\">导入参考底图</button>\n        <button data-act=\"export\">导出 JSON</button>\n        <button data-act=\"import\">导入 JSON</button>\n        <button data-act=\"clear\" class=\"danger\">清空户型</button>\n      </div>\n      <input type=\"file\" accept=\"image/*\" class=\"fh-file img\" hidden>\n      <input type=\"file\" accept=\"application/json,.json\" class=\"fh-file json\" hidden>\n      <div class=\"fh-dev\" hidden></div>\n    ", e.appendChild(this.el), this.el.__fh = this, this.$stage = this.el.querySelector(".fh-stage"), this.$panel = this.el.querySelector(".fh-panel"), this.$hint = this.el.querySelector(".fh-hint"), this.$menu = this.el.querySelector(".fh-menu"), this.$dev = this.el.querySelector(".fh-dev"), this._bindChrome(), this._renderTools(), this.enterEdit(), this.renderPanel();
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
		e.innerHTML = Pe.map((e) => `
      <button data-tool="${e.key}" title="${e.label}" class="${e.key === this.tool ? "on" : ""}">
        <svg viewBox="0 0 24 24">${e.icon}</svg><span>${e.label}</span>
      </button>`).join(""), e.querySelectorAll("[data-tool]").forEach((e) => {
			e.onclick = () => this.setTool(e.dataset.tool);
		});
	}
	setTool(e) {
		this.mode !== "edit" && this.setMode("edit"), this.tool = e, this.sel = null, this.editor?.select(null), this.el.querySelectorAll(".fh-tools[data-for=\"edit\"] [data-tool]").forEach((t) => t.classList.toggle("on", t.dataset.tool === e)), this.editor?.setTool(e), e === "calibrate" ? this._hint("在底图上点两个点，量一段已知长度的墙") : e === "wall" ? this._hint("点一下落点 → 移动 → 再点一下成一段；围起来就自动出房间，不用点回起点") : e === "door" || e === "window" ? this._hint("点一下已有的墙，把" + (e === "door" ? "门" : "窗") + "插进去") : this._hint(""), this.renderPanel();
	}
	setMode(e) {
		e === this.mode && (e === "edit" ? this.editor : this.scene) || (this.mode = e, this.el.querySelectorAll("[data-mode]").forEach((t) => t.classList.toggle("on", t.dataset.mode === e)), this.el.querySelector(".fh-tools[data-for=\"edit\"]").hidden = e !== "edit", this.el.querySelector(".fh-tools[data-for=\"view\"]").hidden = e !== "view", e === "edit" ? this.enterEdit() : this.enterView(), this.renderPanel());
	}
	enterEdit() {
		this.exitView(), this.$stage.innerHTML = "", this.editor = new ve(this.$stage), this.editor.setPlan(this.plan), this.editor.setHass(this._hass), this.editor.showGuides = this._showGuides, this.editor.setTool(this.tool), this.editor.on("change", (e) => {
			this.plan = e, $(e);
		}), this.editor.on("sel", (e) => {
			this.sel = e, e?.type === "opening" && ["door", "window"].includes(this.tool) && (this.tool = "select", this.editor.setTool("select"), this.el.querySelectorAll("[data-tool]").forEach((e) => e.classList.toggle("on", e.dataset.tool === "select"))), this.renderPanel();
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
			let { FloorScene: e } = await import("./chunk-CzdbZWf8.js");
			this.$stage.innerHTML = "", this.scene = new e(this.$stage);
			let t = this.plan.look || {
				palette: "blackgold",
				diorama: !0
			};
			this.scene.setPalette(t.palette || "blackgold"), this.scene.setPlan(this.plan), this.scene.setDiorama(t.diorama !== !1), this.scene.setHass(this._hass), this.scene.onChange = () => $(this.plan), this.$stage.dataset.palette = this.scene._palette, this.scene.onSelect = (e) => {
				this.sel = e, e?.type === "device" ? (this._paintDeviceCard(), this.scene.highlight(e), this.scene.focusSelected()) : e?.type === "furniture" ? (this._hideDeviceCard(), this.scene.highlight(e), this.scene.focusSelected()) : (this._hideDeviceCard(), this.scene.highlight(null)), this._syncTools();
			}, this.$info = document.createElement("div"), this.$info.className = "fh3d-info", this.$stage.appendChild(this.$info), this._renderInfo(), this.$style = document.createElement("div"), this.$style.className = "fh3d-style", this.$style.innerHTML = `
        <select data-s="palette">${pe().map((e) => `<option value="${e.id}">${e.name}</option>`).join("")}</select>
        <label title="沙盘风格（微缩模型感）">
          <input type="checkbox" data-s="diorama">沙盘</label>`, this.$stage.appendChild(this.$style);
			let n = this.$style.querySelector("[data-s=\"palette\"]"), r = this.$style.querySelector("[data-s=\"diorama\"]");
			n.setAttribute("aria-label", "场景色板"), n.value = this.scene._palette, r.checked = this.scene._diorama;
			let i = () => {
				this.plan.look = {
					palette: n.value,
					diorama: r.checked
				}, $(this.plan);
			};
			n.onchange = () => {
				this.scene.setPalette(n.value), i();
			}, r.onchange = () => {
				this.scene.setDiorama(r.checked), i();
			}, this.$tools = document.createElement("div"), this.$tools.className = "fh3d-tools", this.$tools.hidden = !0, this.$tools.innerHTML = "\n        <label title=\"旋转（任意角度）\">⟳<input type=\"range\" min=\"0\" max=\"360\" step=\"1\" data-t=\"rot\">\n          <b data-t=\"rv\">0°</b></label>\n        <label title=\"放大 / 缩小\">🔍<input type=\"range\" min=\"0.4\" max=\"3\" step=\"0.05\" data-t=\"scale\">\n          <b data-t=\"sv\">1.0×</b></label>\n        <button class=\"del\" data-t=\"del\" title=\"删除\">🗑</button>", this.$stage.appendChild(this.$tools);
			let a = this.$tools.querySelector("[data-t=\"rot\"]");
			a.oninput = () => {
				let e = parseFloat(a.value);
				this.$tools.querySelector("[data-t=\"rv\"]").textContent = Math.round(e) + "°", this.scene.rotateTo(e);
			};
			let o = this.$tools.querySelector("[data-t=\"scale\"]");
			o.oninput = () => {
				let e = parseFloat(o.value);
				this.$tools.querySelector("[data-t=\"sv\"]").textContent = e.toFixed(1) + "×", this.scene.scaleSelected(e);
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
			let t = ((n.rot || 0) % 360 + 360) % 360;
			this.$tools.querySelector("[data-t=\"rot\"]").value = t, this.$tools.querySelector("[data-t=\"rv\"]").textContent = Math.round(t) + "°";
		}
	}
	async _renderInfo() {
		if (!this.$info) return;
		let e = this._hass?.states || {}, t = Object.values(e), n = t.find((e) => e.entity_id?.startsWith("weather.") && e.attributes?.aqi != null) || t.find((e) => e.entity_id?.startsWith("weather.")), r = t.find((e) => e.entity_id?.startsWith("climate.")), i = t.filter((e) => e.entity_id?.startsWith("person.")), a = (e) => e != null && e !== "" && Number.isFinite(+e) ? +e : null;
		if (!n && !r && !i.length) {
			this.$info.hidden = !0;
			return;
		}
		this.$info.hidden = !1;
		let o = n ? Math.round(a(n.attributes?.temperature)) : null, s = n ? Fe[n.attributes?.skycon] || Ie[n.state] || n.state : null, c = `<div class="wx-title"><span class="wx-name">${Q(this.plan?.name || "我的家")}</span>` + (o == null ? "" : `<span class="wx-pill">${o}°</span>`) + "</div>", l = [], u = n ? Math.round(a(n.attributes?.apparent_temperature)) : null, d = n ? Math.round(a(n.attributes?.humidity)) : null, f = n ? n.attributes?.aqi : null, p = n ? n.attributes?.aqi_description : null, m = r ? Math.round(a(r.attributes?.current_temperature)) : null, h = i.length ? `${i.filter((e) => e.state === "home").length}/${i.length}` : null;
		if (u != null && l.push(`体感 ${u}°`), d != null && l.push(`湿度 ${d}%`), f != null && l.push(p || `AQI ${f}`), s && l.push(s), m != null && l.push(`室内 ${m}°`), h && l.push(`${h} 在家`), l.length && (c += `<div class="wx-meta">${l.map((e) => `<span class="wx-item">${Q(e)}</span>`).join("")}</div>`), c += "<div class=\"wx-days\"></div>", this.$info.innerHTML = c, n) try {
			let e = await this._fetchForecast(n.entity_id);
			this._renderForecast(e);
		} catch {}
	}
	async _fetchForecast(e) {
		let t = this._hass;
		return t?.callService && (await t.callService("weather", "get_forecasts", { type: "daily" }, { entity_id: e }, !0, !0))?.response?.[e]?.forecast || null;
	}
	_renderForecast(e) {
		let t = this.$info?.querySelector(".wx-days");
		t && (!Array.isArray(e) || !e.length ? t.remove() : t.innerHTML = e.slice(0, 5).map((e, t) => {
			let n = Math.round(e.templow), r = Math.round(e.temperature), i = Le[e.condition] || "🌡️", a = e.precipitation > 0 ? `${e.precipitation.toFixed(1)}mm` : "";
			return `<span class="wx-day"><i>${Q(Re(e.datetime, t))}</i><span class="wx-icon">${i}</span><b>${n}-${r}°</b>` + (a ? `<em>${a}</em>` : "") + "</span>";
		}).join(""));
	}
	_listEntities() {
		let e = this._hass?.states || {}, t = [];
		for (let n of Object.values(e)) {
			let e = n.entity_id.split(".")[0];
			if (!Z.includes(e) || n.attributes?.hidden) continue;
			let r = n.attributes?.friendly_name;
			r && t.push({
				id: n.entity_id,
				dom: e,
				name: r
			});
		}
		return t.sort((e, t) => Z.indexOf(e.dom) - Z.indexOf(t.dom) || e.name.localeCompare(t.name, "zh")), t;
	}
	_inferDevice(e) {
		let t = this._hass?.states?.[e], n = e.split(".")[0], r = t?.attributes?.friendly_name || e, i = r.toLowerCase(), a = "generic";
		return n === "light" ? a = /灯带|灯条|氛围|ambient|strip/.test(i) ? "strip" : /吸顶|ceiling/.test(i) ? "ceiling" : /吊灯|吊顶|pendant|chandelier|水晶灯/.test(i) ? "pendant" : /筒灯|射灯|downlight|spot/.test(i) ? "downlight" : /台灯|挂灯|屏幕|显示器|桌面|desk|monitor|床头/.test(i) ? "desk" : "lamp" : n === "climate" ? a = "ac" : n === "camera" ? a = "cam" : n === "media_player" ? a = /电视|tv|television|客厅.*(屏|视)/.test(i) ? "tv" : "speaker" : n === "fan" ? a = /净化|purifier|空气/.test(i) ? "purifier" : "generic" : n === "switch" && (/洗衣机|washer/.test(i) ? a = "washer" : /冰箱|fridge/.test(i) && (a = "fridge")), {
			name: r,
			art: a,
			dom: n
		};
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
		if (t?.type === "wall-span") n = `<div class="fh-sec"><h4>两点之间的墙段</h4>
        <p class="fh-note">已选 ${t.ids.length} 段共线墙。只修改所选范围，其他墙和门窗保持原位。</p>
        <div class="fh-grid2"><button class="fh-chip" data-span-kind="solid">实体墙</button>
        <button class="fh-chip" data-span-kind="virtual">透明墙</button></div></div>`;
		else if (this.tool === "span") n = "<div class=\"fh-sec\"><h4>任意两点选墙段</h4><p class=\"fh-note\">先点起点，再点同一直墙上的终点；可以跨过原先画墙的分段。选完再设置透明墙。Esc 取消起点。</p></div>";
		else if (this.tool === "furniture") n = `<div class="fh-sec"><h4>家具库</h4>
        <p class="fh-note">点一项放进当前视野中心，再拖动摆位</p>
        <div class="fh-grid2">${R.map((e) => `<button class="fh-chip" data-furn="${e.kind}">${e.name}<i>${e.w}×${e.d}</i></button>`).join("")}
        </div></div>`;
		else if (this.tool === "device") n = `<div class="fh-sec"><h4>设备（来自 HA 实体）</h4>
        <p class="fh-note">点一项放进当前视野中心；已放置的会打勾</p>
        <div class="fh-list">${this._listEntities().map((t) => `<button class="fh-row ${e.devices.some((e) => e.entity === t.id) ? "done" : ""}" data-dev="${t.id}">
            <span class="dot"></span><span class="nm">${Q(t.name)}</span>
            <span class="rm">${qe[t.dom] || t.dom}</span></button>`).join("") || "<p class=\"fh-note\">没有可用的设备实体</p>"}</div></div>`;
		else if (t?.type === "room") {
			let r = e.rooms.find((e) => e.id === t.id);
			if (r) {
				let e = r.floor || {
					type: "matte",
					tile: "stone",
					color: V.matte.color,
					w: .8,
					d: .8,
					grout: .002,
					groutColor: "#d9d3c7",
					orient: "h",
					joint: "straight"
				}, t = e.type === "wood", i = Object.entries(H).filter(([, e]) => e.wood === t);
				n = `<div class="fh-sec"><h4>房间</h4>
          <label class="fh-field"><span>名称</span>
            <input class="fh-input" data-room-name value="${Q(r.name)}" placeholder="客厅 / 主卧 / 厨房…"></label>
          <div class="fh-kv"><span>面积</span><b>${h(r.poly).toFixed(2)} m²</b></div>

          <div class="fh-sec fh-floor"><h4>地面材质</h4>
            <div class="fh-field"><span>板材</span>
              <div class="fh-seg3">${Object.entries(V).map(([t, n]) => `<button data-floor-type="${t}" class="${e.type === t ? "on" : ""}">${n.name}</button>`).join("")}
              </div>
            </div>
            <div class="fh-field"><span>纹理</span>
              <select class="fh-input" data-floor-tile>${i.map(([t, n]) => `<option value="${t}" ${e.tile === t ? "selected" : ""}>${n.name}</option>`).join("")}</select>
            </div>
            <label class="fh-field"><span>颜色</span>
              <input type="color" value="${e.color || H[e.tile]?.base || "#e8e2d6"}" data-floor-color></label>
            <div class="fh-field"><span>规格</span>
              <div class="fh-grid2">${ue.map((t) => {
					let n = Math.abs(e.w - t.w) < .001 && Math.abs(e.d - t.d) < .001;
					return `<button data-floor-size="${t.w}x${t.d}" class="${n ? "on" : ""}">${t.label}</button>`;
				}).join("")}</div>
            </div>
            <label class="fh-field"><span>自定义宽 × 长</span>
              <div class="fh-num"><input type="number" min="0.1" max="3" step="0.05" value="${e.w.toFixed(2)}" data-floor-w><em>m</em>
              <input type="number" min="0.1" max="3" step="0.05" value="${e.d.toFixed(2)}" data-floor-d><em>m</em></div>
            </label>
            <div class="fh-field"><span>铺法</span>
              <div class="fh-seg2">
                <button data-floor-orient="h" class="${e.orient === "v" ? "" : "on"}">横铺</button>
                <button data-floor-orient="v" class="${e.orient === "v" ? "on" : ""}">竖铺</button>
              </div>
              <div class="fh-seg2">
                <button data-floor-joint="straight" class="${e.joint === "stagger" ? "" : "on"}">直缝</button>
                <button data-floor-joint="stagger" class="${e.joint === "stagger" ? "on" : ""}">错缝</button>
              </div>
            </div>
            <div class="fh-row2">
              <label class="fh-field"><span>砖缝色</span>
                <input type="color" value="${e.groutColor || "#d9d3c7"}" data-floor-grout-color></label>
              <label class="fh-field"><span>砖缝宽</span>
                <div class="fh-num"><input type="number" min="0" max="12" step="0.5" value="${((e.grout || .002) * 1e3).toFixed(1)}" data-floor-grout><em>mm</em></div></label>
            </div>
            <p class="fh-note fh-mini">选完自动铺满房间并按墙边裁切；相邻房间各自独立设置。</p>
          </div>

          <p class="fh-note fh-mini">房间是墙围出来的结果，不是画出来的。改名会跟着这块地方走；
            想改形状就拖墙的端点，想合并/拆分就加减墙。</p>
        </div>`;
			}
		} else if (t?.type === "wall") {
			let r = e.walls.find((e) => e.id === t.id);
			if (r) {
				let t = y(r), i = e.openings.filter((e) => e.wallId === r.id);
				n = `<div class="fh-sec"><h4>墙体</h4>
          <div class="fh-kv"><span>长度</span><b>${t.toFixed(2)} m</b></div>
          <label class="fh-field"><span>墙厚</span>
            <div class="fh-num">
              <input type="number" min="0.06" max="0.6" step="0.01" value="${C(r).toFixed(2)}" data-wall-t>
              <em>m</em>
            </div>
          </label>
          <label class="fh-field"><span>墙高</span>
            <div class="fh-num">
              <input type="number" min="0.5" max="3" step="0.05" value="${w(e, r).toFixed(2)}" data-wall-h>
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
              <input type="color" value="${r.color || "#3f444a"}" data-wall-color>
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
				let e = y(i), t = (r.width || .9) / 2, a = Math.min(t, e / 2), o = Math.max(e - t, e / 2), s = r.type === "door", c = r.hasLeaf !== !1;
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
          <label class="fh-field"><span>${s ? "门宽（洞口宽度）" : "窗宽"}</span>
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
            <span class="dot" style="background:${B(t)}"></span>
            <span class="nm">${Q(e.name)}</span>
            <span class="rm">${h(e.poly).toFixed(1)} m²</span>
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
		this.$panel.querySelectorAll("[data-span-kind]").forEach((n) => {
			n.onclick = () => {
				for (let r of e.walls) t?.ids?.includes(r.id) && (r.kind = n.dataset.spanKind);
				$(e), this.editor?.requestRender(), this._hint(n.dataset.spanKind === "virtual" ? "所选墙段已设为透明墙" : "所选墙段已恢复实体墙");
			};
		}), this.$panel.querySelectorAll("[data-pick-room]").forEach((e) => {
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
				let t = e.dataset.dev, n = this._inferDevice(t), r = this._viewCenter();
				this.editor.addDevice(t, n, r[0], r[1]), this.renderPanel();
			};
		});
		let n = this.$panel.querySelector("[data-room-name]");
		n && (n.oninput = () => {
			let r = e.rooms.find((e) => e.id === t.id);
			r && (r.name = n.value, $(e), this.editor?.requestRender());
		});
		let r = () => t?.type === "room" ? e.rooms.find((e) => e.id === t.id) : null, i = (e) => (e.floor || (e.floor = {
			type: "matte",
			tile: "stone",
			color: V.matte.color,
			w: .8,
			d: .8,
			grout: .002,
			groutColor: "#d9d3c7",
			orient: "h",
			joint: "straight"
		}), e.floor), a = (t) => {
			$(e), this.editor?.requestRender();
		};
		this.$panel.querySelectorAll("[data-floor-type]").forEach((e) => {
			e.onclick = () => {
				let t = r();
				if (!t) return;
				let n = i(t);
				n.type = e.dataset.floorType, n.tile = V[n.type].tile, n.color = V[n.type].color, a(t), this.renderPanel();
			};
		});
		let o = this.$panel.querySelector("[data-floor-tile]");
		o && (o.onchange = () => {
			let e = r();
			if (!e) return;
			let t = i(e);
			t.tile = o.value, H[t.tile]?.base && (t.color = H[t.tile].base), a(e);
		});
		let s = this.$panel.querySelector("[data-floor-color]");
		s && (s.oninput = () => {
			let e = r();
			e && (i(e).color = s.value, a(e));
		}), this.$panel.querySelectorAll("[data-floor-size]").forEach((e) => {
			e.onclick = () => {
				let t = r();
				if (!t) return;
				let [n, o] = e.dataset.floorSize.split("x").map(Number), s = i(t);
				s.w = n, s.d = o, a(t), this.renderPanel();
			};
		});
		let c = (e, t) => {
			let n = this.$panel.querySelector(e);
			n && (n.onchange = () => {
				let e = r();
				if (!e) return;
				let o = parseFloat(n.value);
				Number.isFinite(o) && o > 0 && o <= 3 ? i(e)[t] = Math.round(o * 100) / 100 : n.value = Number(i(e)[t]).toFixed(2), a(e);
			});
		};
		c("[data-floor-w]", "w"), c("[data-floor-d]", "d"), this.$panel.querySelectorAll("[data-floor-orient]").forEach((e) => {
			e.onclick = () => {
				let t = r();
				t && (i(t).orient = e.dataset.floorOrient, a(t), this.renderPanel());
			};
		}), this.$panel.querySelectorAll("[data-floor-joint]").forEach((e) => {
			e.onclick = () => {
				let t = r();
				t && (i(t).joint = e.dataset.floorJoint, a(t), this.renderPanel());
			};
		});
		let l = this.$panel.querySelector("[data-floor-grout-color]");
		l && (l.oninput = () => {
			let e = r();
			e && (i(e).groutColor = l.value, a(e));
		});
		let u = this.$panel.querySelector("[data-floor-grout]");
		u && (u.onchange = () => {
			let e = r();
			if (!e) return;
			let t = parseFloat(u.value);
			Number.isFinite(t) && t >= 0 && t <= 12 ? i(e).grout = t / 1e3 : u.value = ((i(e).grout || 0) * 1e3).toFixed(1), a(e);
		});
		let d = () => t?.type === "opening" ? e.openings.find((e) => e.id === t.id) : null, f = (t, n) => {
			let r = d();
			if (!r) return;
			Object.assign(r, t);
			let i = e.walls.find((e) => e.id === r.wallId);
			i && Object.assign(r, D(i, r)), $(e), this.editor?.requestRender(), n || this.renderPanel();
		}, p = (e, t, n, r) => {
			let i = this.$panel.querySelector(e);
			i && (i.onchange = () => {
				let e = parseFloat(i.value);
				if (Number.isFinite(e) && e >= n && e <= r) f({ [t]: Math.round(e * 100) / 100 });
				else {
					let e = d();
					e && (i.value = Number(e[t]).toFixed(2));
				}
			});
		};
		p("[data-op-off]", "offset", 0, 100), p("[data-op-w]", "width", .2, 20), p("[data-op-h]", "height", .2, 4), p("[data-op-b]", "bottom", 0, 3), this.$panel.querySelectorAll("[data-op-type]").forEach((e) => {
			e.onclick = () => {
				let t = d();
				if (!t) return;
				let n = e.dataset.opType;
				n !== t.type && f({
					type: n,
					width: n === "door" ? .9 : 1.2,
					height: n === "door" ? 2.1 : 1.2,
					bottom: n === "door" ? 0 : .9,
					hasLeaf: !1,
					doorStyle: "single"
				});
			};
		});
		let m = this.$panel.querySelector("[data-op-leaf]");
		m && (m.onchange = () => f({ hasLeaf: m.checked }));
		let h = this.$panel.querySelector("[data-op-wstyle]");
		h && (h.onchange = () => f({ windowStyle: h.value }));
		let g = this.$panel.querySelector("[data-op-dstyle]");
		g && (g.onchange = () => f({ doorStyle: g.value })), this.$panel.querySelectorAll("[data-op-swing]").forEach((e) => {
			e.onclick = () => f({ swing: e.dataset.opSwing });
		}), this.$panel.querySelectorAll("[data-op-hinge]").forEach((e) => {
			e.onclick = () => f({ hinge: e.dataset.opHinge });
		});
		let _ = this.$panel.querySelector("[data-op-ent]");
		_ && (_.onchange = () => {
			let e = _.value || "", t = d();
			if (!t) return;
			let n = { entityId: e };
			e && t.type === "door" && t.hasLeaf === !1 && (n.hasLeaf = !0), f(n);
		});
		let v = (n) => {
			let r = e.walls.find((e) => e.id === t.id);
			r && (Object.assign(r, n), $(e), this.editor?.requestRender(), this.renderPanel());
		}, y = this.$panel.querySelector("[data-wall-t]");
		y && (y.onchange = () => {
			let n = parseFloat(y.value);
			if (Number.isFinite(n) && n >= .04 && n <= .8) v({ t: Math.round(n * 1e3) / 1e3 });
			else {
				let n = e.walls.find((e) => e.id === t.id);
				n && (y.value = C(n).toFixed(2));
			}
		});
		let b = this.$panel.querySelector("[data-wall-h]");
		b && (b.onchange = () => {
			let n = parseFloat(b.value);
			if (Number.isFinite(n) && n >= .3 && n <= 4) v({ h: Math.round(n * 100) / 100 });
			else {
				let n = e.walls.find((e) => e.id === t.id);
				n && (b.value = w(e, n).toFixed(2));
			}
		}), this.$panel.querySelectorAll("[data-wall-kind]").forEach((e) => {
			e.onclick = () => v({ kind: e.dataset.wallKind });
		});
		let x = this.$panel.querySelector("[data-wall-color]");
		x && (x.onchange = () => v({ color: x.value }));
		let S = this.$panel.querySelector("[data-base-op]");
		S && (S.oninput = () => {
			e.base.opacity = parseFloat(S.value), $(e), this.editor?.requestRender();
		});
		let T = this.$panel.querySelector("[data-base-flip]");
		T && (T.onchange = () => {
			e.base.flipX = T.checked, $(e), this.editor?.refreshGuides(), this.editor?.requestRender();
		});
		let E = this.$panel.querySelector("[data-guide-show]");
		E && (E.onchange = () => {
			this._showGuides = E.checked, this.editor && (this.editor.showGuides = E.checked, this.editor.requestRender());
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
					let e = d();
					e && f({
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
		return this.editor?.guides ?? F(this.plan.base);
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
				let e = await Ye(t.src, t.ppm || t.w / 12);
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
		let t = await Ze(e, Me), n = new Image();
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
		let e = new Blob([I(this.plan)], { type: "application/json" }), t = document.createElement("a");
		t.href = URL.createObjectURL(e), t.download = (this.plan.name || "floorplan") + ".json", t.click(), setTimeout(() => URL.revokeObjectURL(t.href), 2e3);
	}
	_importJson(e) {
		if (!e) return;
		let t = new FileReader();
		t.onload = () => {
			try {
				this.plan = L(String(t.result)), $(this.plan), this.editor?.setPlan(this.plan), this.editor?.fitView(), this.renderPanel();
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
		let n = this._hass?.states?.[t.entity], r = n?.attributes || {}, i = t.dom || t.entity.split(".")[0], a = n?.state, o = !!n && a !== "unavailable" && a !== "unknown", s = Ge(a), c = "";
		c = o ? i === "light" ? this._lightCtl(t.entity, r) : i === "climate" ? this._climateCtl(t.entity, r, a) : i === "fan" ? this._fanCtl(t.entity, r) : i === "sensor" || i === "binary_sensor" ? this._sensorCtl(n) : `<div class="fh-kv"><span>状态</span><b>${Q(Ke(a, i))}</b></div>` : "<div class=\"fh-note\">设备离线</div>";
		let l = [
			"light",
			"switch",
			"fan",
			"climate",
			"cover",
			"media_player"
		].includes(i) ? `<button class="fh-wide ${s ? "" : "primary"}" data-act="toggle">${s ? "关闭" : "开启"}</button>` : "";
		this.$dev.hidden = !1, this.$dev.innerHTML = `
      <div class="fh-dev-head"><b>${Q(t.name)}</b>
        <button data-act="close" aria-label="关闭">✕</button></div>
      <div class="fh-dev-sub">${o ? Q(Ke(a, i)) : "离线"}</div>
      ${c}
      ${l}
    `, this.$dev.querySelector("[data-act=\"close\"]").onclick = () => this._hideDeviceCard();
		let u = this.$dev.querySelector("[data-act=\"toggle\"]");
		u && (u.onclick = () => this.opts.callService?.(i, s ? "turn_off" : "turn_on", { entity_id: t.entity })), this._bindDeviceControls(t.entity);
	}
	_lightCtl(e, t) {
		let n = t.supported_color_modes || [], r = "";
		if (t.brightness !== void 0 || n.length === 0 || n.some((e) => [
			"brightness",
			"color_temp",
			"hs",
			"rgb",
			"rgbw",
			"rgbww",
			"xy",
			"white"
		].includes(e))) {
			let e = t.brightness == null ? 0 : Math.round(t.brightness / 255 * 100);
			r += `<label class="fh-field"><span>亮度 ${e}%</span>
        <input type="range" min="1" max="100" value="${e}" data-kind="brightness"></label>`;
		}
		if (n.includes("color_temp") || t.color_temp_kelvin != null || t.color_temp != null) {
			let e = t.min_color_temp_kelvin || 2200, n = t.max_color_temp_kelvin || 6500, i = t.color_temp_kelvin || (t.color_temp ? Math.round(1e6 / t.color_temp) : Math.round((e + n) / 2));
			r += `<label class="fh-field"><span>色温 ${i}K</span>
        <input type="range" min="${e}" max="${n}" step="50" value="${i}" data-kind="color_temp"></label>`;
		}
		if (n.some((e) => [
			"hs",
			"rgb",
			"rgbw",
			"rgbww",
			"xy"
		].includes(e))) {
			let e = t.rgb_color || (t.hs_color ? We(t.hs_color[0], t.hs_color[1]) : null);
			r += `<div class="fh-field"><span>颜色</span><div class="fh-swatches">${Ue.map((t) => `<button class="fh-swatch${e && t.every((t, n) => Math.abs(t - e[n]) < 24) ? " on" : ""}" data-rgb="${t.join(",")}"
          style="background:rgb(${t.join(",")})" aria-label="颜色 ${t.join(",")}"></button>`).join("")}</div></div>`;
		}
		return r;
	}
	_climateCtl(e, t, n) {
		let r = t.temperature == null ? 26 : t.temperature, i = `<label class="fh-field"><span>目标温度 ${r}°C</span>
      <input type="range" min="${t.min_temp == null ? 16 : t.min_temp}" max="${t.max_temp == null ? 30 : t.max_temp}" step="${t.target_temp_step || .5}" value="${r}" data-kind="temperature"></label>`;
		return t.hvac_modes?.length && (i += this._segCtl("模式", t.hvac_modes, n, "climate", "set_hvac_mode", "hvac_mode", ze)), t.fan_modes?.length && (i += this._segCtl("风速", t.fan_modes, t.fan_mode, "climate", "set_fan_mode", "fan_mode", Be)), t.swing_modes?.length && (i += this._segCtl("摆风", t.swing_modes, t.swing_mode, "climate", "set_swing_mode", "swing_mode", Ve)), t.preset_modes?.length && (i += this._segCtl("预设", t.preset_modes, t.preset_mode, "climate", "set_preset_mode", "preset_mode", He)), i;
	}
	_fanCtl(e, t) {
		let n = t.percentage == null ? 0 : t.percentage, r = `<label class="fh-field"><span>风速 ${n}%</span>
      <input type="range" min="0" max="100" step="${t.percentage_step || 1}" value="${n}" data-kind="percentage"></label>`;
		return t.preset_modes?.length && (r += this._segCtl("模式", t.preset_modes, t.preset_mode, "fan", "set_preset_mode", "preset_mode", He)), "oscillating" in t && (r += `<label class="fh-field"><span>摇头</span>
      <input type="checkbox" data-osc ${t.oscillating ? "checked" : ""}></label>`), r;
	}
	_segCtl(e, t, n, r, i, a, o) {
		return `<div class="fh-field"><span>${e}</span><div class="fh-seg2">${t.map((e) => `<button class="${e === n ? "on" : ""}" data-seg data-domain="${r}"
        data-service="${i}" data-key="${a}" data-value="${Q(e)}">${Q(o[e] || e)}</button>`).join("")}</div></div>`;
	}
	_sensorCtl(e) {
		let t = e.attributes?.unit_of_measurement || "";
		return `<div class="fh-kv"><span>数值</span><b>${Q(e.state)}${t ? " " + Q(t) : ""}</b></div>`;
	}
	_bindDeviceControls(e) {
		let t = this.$dev, n = (e, t, n) => this.opts.callService?.(e, t, n);
		t.querySelectorAll("input[type=range][data-kind]").forEach((t) => {
			t.oninput = () => {
				let r = parseFloat(t.value), i = t.dataset.kind;
				if (i === "brightness") n("light", "turn_on", {
					entity_id: e,
					brightness_pct: r
				});
				else if (i === "color_temp") {
					let t = this._hass?.states?.[e]?.attributes || {}, i = t.color_temp_kelvin != null || t.color_temp == null ? { color_temp_kelvin: r } : { color_temp: Math.round(1e6 / r) };
					n("light", "turn_on", {
						entity_id: e,
						...i
					});
				} else i === "percentage" ? n("fan", "set_percentage", {
					entity_id: e,
					percentage: r
				}) : i === "temperature" && n("climate", "set_temperature", {
					entity_id: e,
					temperature: r
				});
			};
		}), t.querySelectorAll("button[data-seg]").forEach((t) => {
			t.onclick = () => {
				let r = { entity_id: e };
				r[t.dataset.key] = t.dataset.value, n(t.dataset.domain, t.dataset.service, r);
			};
		}), t.querySelectorAll("button[data-rgb]").forEach((t) => {
			t.onclick = () => n("light", "turn_on", {
				entity_id: e,
				rgb_color: t.dataset.rgb.split(",").map(Number)
			});
		});
		let r = t.querySelector("[data-osc]");
		r && (r.onchange = () => n("fan", "oscillate", {
			entity_id: e,
			oscillating: r.checked
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
function Ye(e, t) {
	return new Promise((n, r) => {
		let i = new Image();
		i.onerror = () => r(/* @__PURE__ */ Error("底图读不出来")), i.onload = () => {
			try {
				let e = i.naturalWidth, r = i.naturalHeight, a = Math.min(1, Ne / Math.max(e, r)), o = Math.max(8, Math.round(e * a)), s = Math.max(8, Math.round(r * a)), c = document.createElement("canvas");
				c.width = o, c.height = s;
				let l = c.getContext("2d", { willReadFrequently: !0 });
				l.drawImage(i, 0, 0, o, s);
				let u = l.getImageData(0, 0, o, s).data, d = Ae(be(u, o, s), o, s, { ppm: (t || e / 12) * (o / e) }), f = e / o;
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
		localStorage.setItem(je, I(e));
	} catch {}
}
function Xe() {
	try {
		let e = localStorage.getItem(je);
		if (e) return L(e);
	} catch {}
	return d();
}
function Ze(e, t) {
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
export { Je as FloorHome, h as a, b as c, C as d, _ as i, w as l, H as n, g as o, V as r, B as s, fe as t, y as u };
