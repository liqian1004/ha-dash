import { a as e, c as t, d as n, i as r, l as i, n as a, o, r as s, s as c, t as l, u } from "./chunk-jHq_Q-W6.js";
// node_modules/three/build/three.core.js
var d, f, p, m, h, g, _, v, y, b = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2
}, x = {
	ROTATE: 0,
	PAN: 1,
	DOLLY_PAN: 2,
	DOLLY_ROTATE: 3
}, S = 1e3, C = 1001, w = 1002, T = 1003, E = 1004, D = 1005, O = 1006, k = 1007, A = 1008, j = 1009, M = 1010, N = 1011, ee = 1012, te = 1013, ne = 1014, P = 1015, re = 1016, ie = 1017, ae = 1018, oe = 1020, se = 35902, ce = 35899, F = 1021, I = 1022, le = 1023, ue = 1026, de = 1027, fe = 1028, pe = 1029, me = 1030, he = 1031, ge = 1033, _e = 33776, ve = 33777, ye = 33778, be = 33779, xe = 35840, Se = 35841, Ce = 35842, we = 35843, Te = 36196, Ee = 37492, De = 37496, Oe = 37488, ke = 37489, Ae = 37490, je = 37491, L = 37808, Me = 37809, Ne = 37810, Pe = 37811, R = 37812, Fe = 37813, z = 37814, B = 37815, Ie = 37816, Le = 37817, Re = 37818, ze = 37819, Be = 37820, Ve = 37821, He = 36492, Ue = 36494, We = 36495, Ge = 36283, Ke = 36284, qe = 36285, Je = 36286, Ye = 2300, Xe = 2301, Ze = 2302, Qe = 2303, $e = 2400, et = 2401, tt = 2402, nt = 3200, rt = "srgb", it = "srgb-linear", at = "linear", ot = "srgb", st = 7680, ct = 35044, lt = 2e3;
function ut(e) {
	for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
	return !1;
}
function dt(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ft(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function pt() {
	let e = ft("canvas");
	return e.style.display = "block", e;
}
var mt = {};
function ht(...e) {
	let t = "THREE." + e.shift();
	console.log(t, ...e);
}
function gt(e) {
	let t = e[0];
	if (typeof t == "string" && t.startsWith("TSL:")) {
		let t = e[1];
		t && t.isStackTrace ? e[0] += " " + t.getLocation() : e[1] = "Stack trace not available. Enable \"THREE.Node.captureStackTrace\" to capture stack traces.";
	}
	return e;
}
function V(...e) {
	e = gt(e);
	let t = "THREE." + e.shift();
	{
		let n = e[0];
		n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
	}
}
function H(...e) {
	e = gt(e);
	let t = "THREE." + e.shift();
	{
		let n = e[0];
		n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
	}
}
function _t(...e) {
	let t = e.join(" ");
	t in mt || (mt[t] = !0, V(...e));
}
function vt(e, t, n) {
	return new Promise(function(r, i) {
		function a() {
			switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
				case e.WAIT_FAILED:
					i();
					break;
				case e.TIMEOUT_EXPIRED:
					setTimeout(a, n);
					break;
				default: r();
			}
		}
		setTimeout(a, n);
	});
}
var yt = {
	0: 1,
	2: 6,
	4: 7,
	3: 5,
	1: 0,
	6: 2,
	7: 4,
	5: 3
}, bt = class {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		let n = this._listeners;
		return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		let n = this._listeners;
		if (n === void 0) return;
		let r = n[e];
		if (r !== void 0) {
			let e = r.indexOf(t);
			e !== -1 && r.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		let t = this._listeners;
		if (t === void 0) return;
		let n = t[e.type];
		if (n !== void 0) {
			e.target = this;
			let t = n.slice(0);
			for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
			e.target = null;
		}
	}
}, xt = /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), St = 1234567, Ct = Math.PI / 180, wt = 180 / Math.PI;
function Tt() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (xt[e & 255] + xt[e >> 8 & 255] + xt[e >> 16 & 255] + xt[e >> 24 & 255] + "-" + xt[t & 255] + xt[t >> 8 & 255] + "-" + xt[t >> 16 & 15 | 64] + xt[t >> 24 & 255] + "-" + xt[n & 63 | 128] + xt[n >> 8 & 255] + "-" + xt[n >> 16 & 255] + xt[n >> 24 & 255] + xt[r & 255] + xt[r >> 8 & 255] + xt[r >> 16 & 255] + xt[r >> 24 & 255]).toLowerCase();
}
function U(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function Et(e, t) {
	return (e % t + t) % t;
}
function Dt(e, t, n, r, i) {
	return r + (e - t) * (i - r) / (n - t);
}
function Ot(e, t, n) {
	return e === t ? 0 : (n - e) / (t - e);
}
function kt(e, t, n) {
	return (1 - n) * e + n * t;
}
function At(e, t, n, r) {
	return kt(e, t, 1 - Math.exp(-n * r));
}
function jt(e, t = 1) {
	return t - Math.abs(Et(e, t * 2) - t);
}
function Mt(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function Nt(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function Pt(e, t) {
	return e + Math.floor(Math.random() * (t - e + 1));
}
function Ft(e, t) {
	return e + Math.random() * (t - e);
}
function It(e) {
	return e * (.5 - Math.random());
}
function Lt(e) {
	e !== void 0 && (St = e);
	let t = St += 1831565813;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Rt(e) {
	return e * Ct;
}
function zt(e) {
	return e * wt;
}
function Bt(e) {
	return e > 0 && Number.isInteger(e) && 2 ** Math.round(Math.log2(e)) === e;
}
function Vt(e) {
	return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function Ht(e) {
	return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function Ut(e, t, n, r, i) {
	let a = Math.cos, o = Math.sin, s = a(n / 2), c = o(n / 2), l = a((t + r) / 2), u = o((t + r) / 2), d = a((t - r) / 2), f = o((t - r) / 2), p = a((r - t) / 2), m = o((r - t) / 2);
	switch (i) {
		case "XYX":
			e.set(s * u, c * d, c * f, s * l);
			break;
		case "YZY":
			e.set(c * f, s * u, c * d, s * l);
			break;
		case "ZXZ":
			e.set(c * d, c * f, s * u, s * l);
			break;
		case "XZX":
			e.set(s * u, c * m, c * p, s * l);
			break;
		case "YXY":
			e.set(c * p, s * u, c * m, s * l);
			break;
		case "ZYZ":
			e.set(c * m, c * p, s * u, s * l);
			break;
		default: V("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
	}
}
function Wt(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return e / 4294967295;
		case Uint16Array: return e / 65535;
		case Uint8Array:
		case Uint8ClampedArray: return e / 255;
		case Int32Array: return Math.max(e / 2147483647, -1);
		case Int16Array: return Math.max(e / 32767, -1);
		case Int8Array: return Math.max(e / 127, -1);
		default: throw Error("THREE.MathUtils: Invalid component type.");
	}
}
function Gt(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return Math.round(e * 4294967295);
		case Uint16Array: return Math.round(e * 65535);
		case Uint8Array:
		case Uint8ClampedArray: return Math.round(e * 255);
		case Int32Array: return Math.round(e * 2147483647);
		case Int16Array: return Math.round(e * 32767);
		case Int8Array: return Math.round(e * 127);
		default: throw Error("THREE.MathUtils: Invalid component type.");
	}
}
var Kt = {
	DEG2RAD: Ct,
	RAD2DEG: wt,
	generateUUID: Tt,
	clamp: U,
	euclideanModulo: Et,
	mapLinear: Dt,
	inverseLerp: Ot,
	lerp: kt,
	damp: At,
	pingpong: jt,
	smoothstep: Mt,
	smootherstep: Nt,
	randInt: Pt,
	randFloat: Ft,
	randFloatSpread: It,
	seededRandom: Lt,
	degToRad: Rt,
	radToDeg: zt,
	isPowerOfTwo: Bt,
	ceilPowerOfTwo: Vt,
	floorPowerOfTwo: Ht,
	setQuaternionFromProperEuler: Ut,
	normalize: Gt,
	denormalize: Wt
};
_ = Symbol.iterator;
var W = class {
	constructor(e = 0, t = 0) {
		this.x = e, this.y = t;
	}
	get width() {
		return this.x;
	}
	set width(e) {
		this.x = e;
	}
	get height() {
		return this.y;
	}
	set height(e) {
		this.y = e;
	}
	set(e, t) {
		return this.x = e, this.y = t, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default: throw Error("THREE.Vector2: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			default: throw Error("THREE.Vector2: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = e.elements;
		return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
	}
	clamp(e, t) {
		return this.x = U(this.x, e.x, t.x), this.y = U(this.y, e.y, t.y), this;
	}
	clampScalar(e, t) {
		return this.x = U(this.x, e, t), this.y = U(this.y, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(U(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y;
	}
	cross(e) {
		return this.x * e.y - this.y * e.x;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI;
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(U(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y;
		return t * t + n * n;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this;
	}
	rotateAround(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
		return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this;
	}
	*[_]() {
		yield this.x, yield this.y;
	}
};
d = W, d.prototype.isVector2 = !0;
var qt = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
	}
	static slerpFlat(e, t, n, r, i, a, o) {
		let s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a + 0], f = i[a + 1], p = i[a + 2], m = i[a + 3];
		if (u !== m || s !== d || c !== f || l !== p) {
			let e = s * d + c * f + l * p + u * m;
			e < 0 && (d = -d, f = -f, p = -p, m = -m, e = -e);
			let t = 1 - o;
			if (e < .9995) {
				let n = Math.acos(e), r = Math.sin(n);
				t = Math.sin(t * n) / r, o = Math.sin(o * n) / r, s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
			} else {
				s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
				let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
				s *= e, c *= e, l *= e, u *= e;
			}
		}
		e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
	}
	static multiplyQuaternionsFlat(e, t, n, r, i, a) {
		let o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], d = i[a + 1], f = i[a + 2], p = i[a + 3];
		return e[t] = o * p + l * u + s * f - c * d, e[t + 1] = s * p + l * d + c * u - o * f, e[t + 2] = c * p + l * f + o * d - s * u, e[t + 3] = l * p - o * u - s * d - c * f, e;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get w() {
		return this._w;
	}
	set w(e) {
		this._w = e, this._onChangeCallback();
	}
	set(e, t, n, r) {
		return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
	}
	setFromEuler(e, t = !0) {
		let n = e._x, r = e._y, i = e._z, a = e._order, o = Math.cos, s = Math.sin, c = o(n / 2), l = o(r / 2), u = o(i / 2), d = s(n / 2), f = s(r / 2), p = s(i / 2);
		switch (a) {
			case "XYZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "YXZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "ZXY":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "ZYX":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "YZX":
				this._x = d * l * u + c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "XZY":
				this._x = d * l * u - c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u + d * f * p;
				break;
			default: V("Quaternion: .setFromEuler() encountered an unknown order: " + a);
		}
		return t === !0 && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		let n = t / 2, r = Math.sin(n);
		return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], d = n + o + u;
		if (d > 0) {
			let e = .5 / Math.sqrt(d + 1);
			this._w = .25 / e, this._x = (l - s) * e, this._y = (i - c) * e, this._z = (a - r) * e;
		} else if (n > o && n > u) {
			let e = 2 * Math.sqrt(1 + n - o - u);
			this._w = (l - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + c) / e;
		} else if (o > u) {
			let e = 2 * Math.sqrt(1 + o - n - u);
			this._w = (i - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + l) / e;
		} else {
			let e = 2 * Math.sqrt(1 + u - n - o);
			this._w = (a - r) / e, this._x = (i + c) / e, this._y = (s + l) / e, this._z = .25 * e;
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(U(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		let n = this.angleTo(e);
		if (n === 0) return this;
		let r = Math.min(1, t / n);
		return this.slerp(e, r), this;
	}
	identity() {
		return this.set(0, 0, 0, 1);
	}
	invert() {
		return this.conjugate();
	}
	conjugate() {
		return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
	}
	dot(e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}
	normalize() {
		let e = this.length();
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
		return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
	}
	slerp(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = this.dot(e);
		o < 0 && (n = -n, r = -r, i = -i, a = -a, o = -o);
		let s = 1 - t;
		if (o < .9995) {
			let e = Math.acos(o), c = Math.sin(e);
			s = Math.sin(s * e) / c, t = Math.sin(t * e) / c, this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this._onChangeCallback();
		} else this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this.normalize();
		return this;
	}
	slerpQuaternions(e, t, n) {
		return this.copy(e).slerp(t, n);
	}
	random() {
		let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), i = Math.sqrt(n);
		return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
	}
	fromArray(e, t = 0) {
		return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
	}
	fromBufferAttribute(e, t) {
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
	}
	toJSON() {
		return this.toArray();
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
};
v = Symbol.iterator;
var G = class {
	constructor(e = 0, t = 0, n = 0) {
		this.x = e, this.y = t, this.z = n;
	}
	set(e, t, n) {
		return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default: throw Error("THREE.Vector3: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw Error("THREE.Vector3: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this;
	}
	multiplyVectors(e, t) {
		return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
	}
	applyEuler(e) {
		return this.applyQuaternion(Yt.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(Yt.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
	}
	applyQuaternion(e) {
		let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = 2 * (a * r - o * n), l = 2 * (o * t - i * r), u = 2 * (i * n - a * t);
		return this.x = t + s * c + a * u - o * l, this.y = n + s * l + o * c - i * u, this.z = r + s * u + i * l - a * c, this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
	}
	clamp(e, t) {
		return this.x = U(this.x, e.x, t.x), this.y = U(this.y, e.y, t.y), this.z = U(this.z, e.z, t.z), this;
	}
	clampScalar(e, t) {
		return this.x = U(this.x, e, t), this.y = U(this.y, e, t), this.z = U(this.z, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(U(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
	}
	cross(e) {
		return this.crossVectors(this, e);
	}
	crossVectors(e, t) {
		let n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
		return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
	}
	projectOnVector(e) {
		let t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		let n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n);
	}
	projectOnPlane(e) {
		return Jt.copy(this).projectOnVector(e), this.sub(Jt);
	}
	reflect(e) {
		return this.sub(Jt.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(U(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
		return t * t + n * n + r * r;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, n) {
		let r = Math.sin(t) * e;
		return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this;
	}
	setFromMatrixScale(e) {
		let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = r, this;
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e.elements, t * 4);
	}
	setFromMatrix3Column(e, t) {
		return this.fromArray(e.elements, t * 3);
	}
	setFromEuler(e) {
		return this.x = e._x, this.y = e._y, this.z = e._z, this;
	}
	setFromColor(e) {
		return this.x = e.r, this.y = e.g, this.z = e.b, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
	}
	randomDirection() {
		let e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
		return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
	}
	*[v]() {
		yield this.x, yield this.y, yield this.z;
	}
};
f = G, f.prototype.isVector3 = !0;
var Jt = /*@__PURE__*/ new G(), Yt = /*@__PURE__*/ new qt(), K = class {
	constructor(e, t, n, r, i, a, o, s, c) {
		this.elements = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c);
	}
	set(e, t, n, r, i, a, o, s, c) {
		let l = this.elements;
		return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		let t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], d = n[2], f = n[5], p = n[8], m = r[0], h = r[3], g = r[6], _ = r[1], v = r[4], y = r[7], b = r[2], x = r[5], S = r[8];
		return i[0] = a * m + o * _ + s * b, i[3] = a * h + o * v + s * x, i[6] = a * g + o * y + s * S, i[1] = c * m + l * _ + u * b, i[4] = c * h + l * v + u * x, i[7] = c * g + l * y + u * S, i[2] = d * m + f * _ + p * b, i[5] = d * h + f * v + p * x, i[8] = d * g + f * y + p * S, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
		return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = l * a - o * c, d = o * s - l * i, f = c * i - a * s, p = t * u + n * d + r * f;
		if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		let m = 1 / p;
		return e[0] = u * m, e[1] = (r * c - l * n) * m, e[2] = (o * n - r * a) * m, e[3] = d * m, e[4] = (l * t - r * s) * m, e[5] = (r * i - o * t) * m, e[6] = f * m, e[7] = (n * s - c * t) * m, e[8] = (a * t - n * i) * m, this;
	}
	transpose() {
		let e, t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		let t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
	}
	setUvTransform(e, t, n, r, i, a, o) {
		let s = Math.cos(i), c = Math.sin(i);
		return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return _t("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(Xt.makeScale(e, t)), this;
	}
	rotate(e) {
		return _t("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(Xt.makeRotation(-e)), this;
	}
	translate(e, t) {
		return _t("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(Xt.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
};
p = K, p.prototype.isMatrix3 = !0;
var Xt = /*@__PURE__*/ new K(), Zt = /*@__PURE__*/ new K().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Qt = /*@__PURE__*/ new K().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function $t() {
	let e = {
		enabled: !0,
		workingColorSpace: it,
		spaces: {},
		convert: function(e, t, n) {
			return this.enabled === !1 || t === n || !t || !n || (this.spaces[t].transfer === "srgb" && (e.r = en(e.r), e.g = en(e.g), e.b = en(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === "srgb" && (e.r = tn(e.r), e.g = tn(e.g), e.b = tn(e.b))), e;
		},
		workingToColorSpace: function(e, t) {
			return this.convert(e, this.workingColorSpace, t);
		},
		colorSpaceToWorking: function(e, t) {
			return this.convert(e, t, this.workingColorSpace);
		},
		getPrimaries: function(e) {
			return this.spaces[e].primaries;
		},
		getTransfer: function(e) {
			return e === "" ? at : this.spaces[e].transfer;
		},
		getToneMappingMode: function(e) {
			return this.spaces[e].outputColorSpaceConfig.toneMappingMode || "standard";
		},
		getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
			return e.fromArray(this.spaces[t].luminanceCoefficients);
		},
		define: function(e) {
			Object.assign(this.spaces, e);
		},
		_getMatrix: function(e, t, n) {
			return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
		},
		_getDrawingBufferColorSpace: function(e) {
			return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
		},
		_getUnpackColorSpace: function(e = this.workingColorSpace) {
			return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
		},
		fromWorkingColorSpace: function(t, n) {
			return _t("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(t, n);
		},
		toWorkingColorSpace: function(t, n) {
			return _t("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(t, n);
		}
	}, t = [
		.64,
		.33,
		.3,
		.6,
		.15,
		.06
	], n = [
		.2126,
		.7152,
		.0722
	], r = [.3127, .329];
	return e.define({
		[it]: {
			primaries: t,
			whitePoint: r,
			transfer: at,
			toXYZ: Zt,
			fromXYZ: Qt,
			luminanceCoefficients: n,
			workingColorSpaceConfig: { unpackColorSpace: rt },
			outputColorSpaceConfig: { drawingBufferColorSpace: rt }
		},
		[rt]: {
			primaries: t,
			whitePoint: r,
			transfer: ot,
			toXYZ: Zt,
			fromXYZ: Qt,
			luminanceCoefficients: n,
			outputColorSpaceConfig: { drawingBufferColorSpace: rt }
		}
	}), e;
}
var q = /*@__PURE__*/ $t();
function en(e) {
	return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4;
}
function tn(e) {
	return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055;
}
var nn, rn = class {
	static getDataURL(e, t = "image/png") {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let n;
		if (e instanceof HTMLCanvasElement) n = e;
		else {
			nn === void 0 && (nn = ft("canvas")), nn.width = e.width, nn.height = e.height;
			let t = nn.getContext("2d");
			e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height), n = nn;
		}
		return n.toDataURL(t);
	}
	static sRGBToLinear(e) {
		if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let t = ft("canvas");
			t.width = e.width, t.height = e.height;
			let n = t.getContext("2d");
			n.drawImage(e, 0, 0, e.width, e.height);
			let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
			for (let e = 0; e < i.length; e++) i[e] = en(i[e] / 255) * 255;
			return n.putImageData(r, 0, 0), t;
		}
		if (e.data) {
			let t = e.data.slice(0);
			for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(en(t[e] / 255) * 255) : t[e] = en(t[e]);
			return {
				data: t,
				width: e.width,
				height: e.height
			};
		}
		return V("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
	}
}, an = 0, on = class {
	constructor(e = null) {
		this.isTextureSource = !0, Object.defineProperty(this, "id", { value: an++ }), this.uuid = Tt(), this.data = e, this.dataReady = !0, this.version = 0;
	}
	getSize(e) {
		let t = this.data;
		return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width, t.height, t.depth || 0), e;
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		let n = {
			uuid: this.uuid,
			url: ""
		}, r = this.data;
		if (r !== null) {
			let e;
			if (Array.isArray(r)) {
				e = [];
				for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(sn(r[t].image)) : e.push(sn(r[t]));
			} else e = sn(r);
			n.url = e;
		}
		return t || (e.images[this.uuid] = n), n;
	}
};
function sn(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? rn.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (V("Texture: Unable to serialize Texture."), {});
}
var cn = 0, ln = /*@__PURE__*/ new G(), un = class e extends bt {
	constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, r = C, i = C, a = O, o = A, s = le, c = j, l = e.DEFAULT_ANISOTROPY, u = "") {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: cn++ }), this.uuid = Tt(), this.name = "", this.source = new on(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = r, this.wrapT = i, this.magFilter = a, this.minFilter = o, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = c, this.offset = new W(0, 0), this.repeat = new W(1, 1), this.center = new W(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new K(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.normalized = !1;
	}
	get width() {
		return this.source.getSize(ln).x;
	}
	get height() {
		return this.source.getSize(ln).y;
	}
	get depth() {
		return this.source.getSize(ln).z;
	}
	get image() {
		return this.source.data;
	}
	set image(e) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
	}
	setValues(e) {
		for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				V(`Texture.setValues(): parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			r === void 0 ? V(`Texture.setValues(): property '${t}' does not exist.`) : r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		let n = {
			metadata: {
				version: 4.7,
				type: "Texture",
				generator: "Texture.toJSON"
			},
			uuid: this.uuid,
			name: this.name,
			image: this.source.toJSON(e).uuid,
			mapping: this.mapping,
			channel: this.channel,
			repeat: [this.repeat.x, this.repeat.y],
			offset: [this.offset.x, this.offset.y],
			center: [this.center.x, this.center.y],
			rotation: this.rotation,
			wrap: [this.wrapS, this.wrapT],
			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			normalized: this.normalized,
			colorSpace: this.colorSpace,
			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,
			flipY: this.flipY,
			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment
		};
		return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	transformUv(e) {
		if (this.mapping !== 300) return e;
		if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
			case S:
				e.x -= Math.floor(e.x);
				break;
			case C:
				e.x = e.x < 0 ? 0 : 1;
				break;
			case w: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
		}
		if (e.y < 0 || e.y > 1) switch (this.wrapT) {
			case S:
				e.y -= Math.floor(e.y);
				break;
			case C:
				e.y = e.y < 0 ? 0 : 1;
				break;
			case w: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
		}
		return this.flipY && (e.y = 1 - e.y), e;
	}
	set needsUpdate(e) {
		e === !0 && (this.version++, this.source.needsUpdate = !0);
	}
	set needsPMREMUpdate(e) {
		e === !0 && this.pmremVersion++;
	}
};
un.DEFAULT_IMAGE = null, un.DEFAULT_MAPPING = 300, un.DEFAULT_ANISOTROPY = 1, y = Symbol.iterator;
var dn = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.x = e, this.y = t, this.z = n, this.w = r;
	}
	get width() {
		return this.z;
	}
	set width(e) {
		this.z = e;
	}
	get height() {
		return this.w;
	}
	set height(e) {
		this.w = e;
	}
	set(e, t, n, r) {
		return this.x = e, this.y = t, this.z = n, this.w = r, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this.w = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setW(e) {
		return this.w = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			case 3:
				this.w = t;
				break;
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w === void 0 ? 1 : e.w, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this.w += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
		return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		let t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], l = s[4], u = s[8], d = s[1], f = s[5], p = s[9], m = s[2], h = s[6], g = s[10];
		if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
			if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			let e = (c + 1) / 2, s = (f + 1) / 2, _ = (g + 1) / 2, v = (l + d) / 4, y = (u + m) / 4, b = (p + h) / 4;
			return e > s && e > _ ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = v / n, i = y / n) : s > _ ? s < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), n = v / r, i = b / r) : _ < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(_), n = y / i, r = b / i), this.set(n, r, i, t), this;
		}
		let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
		return Math.abs(_) < .001 && (_ = 1), this.x = (h - p) / _, this.y = (u - m) / _, this.z = (d - l) / _, this.w = Math.acos((c + f + g - 1) / 2), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
	}
	clamp(e, t) {
		return this.x = U(this.x, e.x, t.x), this.y = U(this.y, e.y, t.y), this.z = U(this.z, e.z, t.z), this.w = U(this.w, e.w, t.w), this;
	}
	clampScalar(e, t) {
		return this.x = U(this.x, e, t), this.y = U(this.y, e, t), this.z = U(this.z, e, t), this.w = U(this.w, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(U(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
	}
	*[y]() {
		yield this.x, yield this.y, yield this.z, yield this.w;
	}
};
m = dn, m.prototype.isVector4 = !0;
var fn = class extends bt {
	constructor(e = 1, t = 1, n = {}) {
		super(), n = Object.assign({
			generateMipmaps: !1,
			internalFormat: null,
			minFilter: O,
			depthBuffer: !0,
			stencilBuffer: !1,
			resolveColorBuffer: !0,
			resolveDepthBuffer: !0,
			resolveStencilBuffer: !0,
			storeMultisampledColorBuffer: !0,
			storeMultisampledDepthBuffer: !0,
			storeMultisampledStencilBuffer: !0,
			depthTexture: null,
			samples: 0,
			count: 1,
			depth: 1,
			multiview: !1,
			useArrayDepthTexture: !1
		}, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new dn(0, 0, e, t), this.scissorTest = !1, this.viewport = new dn(0, 0, e, t), this.textures = [];
		let r = new un({
			width: e,
			height: t,
			depth: n.depth
		}), i = n.count;
		for (let e = 0; e < i; e++) this.textures[e] = r.clone(), this.textures[e].isRenderTargetTexture = !0, this.textures[e].renderTarget = this;
		this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveColorBuffer = n.resolveColorBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = n.storeMultisampledStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview, this.useArrayDepthTexture = n.useArrayDepthTexture;
	}
	_setTextureOptions(e = {}) {
		let t = {
			minFilter: O,
			generateMipmaps: !1,
			flipY: !1,
			internalFormat: null
		};
		e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
		for (let e = 0; e < this.textures.length; e++) this.textures[e].setValues(t);
	}
	get texture() {
		return this.textures[0];
	}
	set texture(e) {
		this.textures[0] = e;
	}
	set depthTexture(e) {
		this._depthTexture !== null && this._depthTexture.renderTarget === this && (this._depthTexture.renderTarget = null), e !== null && e.renderTarget === null && (e.renderTarget = this), this._depthTexture = e;
	}
	get depthTexture() {
		return this._depthTexture;
	}
	setSize(e, t, n = 1) {
		if (this.width !== e || this.height !== t || this.depth !== n) {
			this.width = e, this.height = t, this.depth = n;
			for (let r = 0, i = this.textures.length; r < i; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
			this.dispose();
		}
		this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
		for (let t = 0, n = e.textures.length; t < n; t++) {
			this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
			let n = Object.assign({}, e.textures[t].image);
			this.textures[t].source = new on(n);
		}
		if (this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveColorBuffer = e.resolveColorBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = e.storeMultisampledStencilBuffer, e.depthTexture !== null) {
			if (e.depthTexture.renderTarget === e) {
				let t = e.depthTexture.clone();
				t.renderTarget = null, this.depthTexture = t;
			} else this.depthTexture = e.depthTexture;
		}
		return this.samples = e.samples, this.multiview = e.multiview, this.useArrayDepthTexture = e.useArrayDepthTexture, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, pn = class extends fn {
	constructor(e = 1, t = 1, n = {}) {
		super(e, t, n), this.isWebGLRenderTarget = !0;
	}
}, mn = class extends un {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isDataArrayTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = T, this.minFilter = T, this.wrapR = C, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
	}
	copy(e) {
		return super.copy(e), this.wrapR = e.wrapR, this;
	}
	addLayerUpdate(e) {
		this.layerUpdates.add(e);
	}
	clearLayerUpdates() {
		this.layerUpdates.clear();
	}
}, hn = class extends un {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isData3DTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = T, this.minFilter = T, this.wrapR = C, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
	copy(e) {
		return super.copy(e), this.wrapR = e.wrapR, this;
	}
}, gn = class e {
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		this.elements = [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h);
	}
	set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		let g = this.elements;
		return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = u, g[14] = d, g[3] = f, g[7] = p, g[11] = m, g[15] = h, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new e().fromArray(this.elements);
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
	}
	copyPosition(e) {
		let t = this.elements, n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
	}
	setFromMatrix3(e) {
		let t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, n) {
		return this.determinantAffine() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		if (e.determinantAffine() === 0) return this.identity();
		let t = this.elements, n = e.elements, r = 1 / _n.setFromMatrixColumn(e, 0).length(), i = 1 / _n.setFromMatrixColumn(e, 1).length(), a = 1 / _n.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromEuler(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
		if (e.order === "XYZ") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = n + r * c, t[5] = e - i * c, t[9] = -o * s, t[2] = i - e * c, t[6] = r + n * c, t[10] = a * s;
		} else if (e.order === "YXZ") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e + i * o, t[4] = r * o - n, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s;
		} else if (e.order === "ZXY") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * l, t[9] = i - e * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
		} else if (e.order === "ZYX") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = r * c - n, t[8] = e * c + i, t[1] = s * u, t[5] = i * c + e, t[9] = n * c - r, t[2] = -c, t[6] = o * s, t[10] = a * s;
		} else if (e.order === "YZX") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = n * u + r, t[10] = e - i * u;
		} else if (e.order === "XZY") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = e * u + i, t[5] = a * l, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * l, t[10] = i * u + e;
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose(yn, e, bn);
	}
	lookAt(e, t, n) {
		let r = this.elements;
		return Cn.subVectors(e, t), Cn.lengthSq() === 0 && (Cn.z = 1), Cn.normalize(), xn.crossVectors(n, Cn), xn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Cn.x += 1e-4 : Cn.z += 1e-4, Cn.normalize(), xn.crossVectors(n, Cn)), xn.normalize(), Sn.crossVectors(Cn, xn), r[0] = xn.x, r[4] = Sn.x, r[8] = Cn.x, r[1] = xn.y, r[5] = Sn.y, r[9] = Cn.y, r[2] = xn.z, r[6] = Sn.z, r[10] = Cn.z, this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], d = n[9], f = n[13], p = n[2], m = n[6], h = n[10], g = n[14], _ = n[3], v = n[7], y = n[11], b = n[15], x = r[0], S = r[4], C = r[8], w = r[12], T = r[1], E = r[5], D = r[9], O = r[13], k = r[2], A = r[6], j = r[10], M = r[14], N = r[3], ee = r[7], te = r[11], ne = r[15];
		return i[0] = a * x + o * T + s * k + c * N, i[4] = a * S + o * E + s * A + c * ee, i[8] = a * C + o * D + s * j + c * te, i[12] = a * w + o * O + s * M + c * ne, i[1] = l * x + u * T + d * k + f * N, i[5] = l * S + u * E + d * A + f * ee, i[9] = l * C + u * D + d * j + f * te, i[13] = l * w + u * O + d * M + f * ne, i[2] = p * x + m * T + h * k + g * N, i[6] = p * S + m * E + h * A + g * ee, i[10] = p * C + m * D + h * j + g * te, i[14] = p * w + m * O + h * M + g * ne, i[3] = _ * x + v * T + y * k + b * N, i[7] = _ * S + v * E + y * A + b * ee, i[11] = _ * C + v * D + y * j + b * te, i[15] = _ * w + v * O + y * M + b * ne, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], d = e[10], f = e[14], p = e[3], m = e[7], h = e[11], g = e[15], _ = s * f - c * d, v = o * f - c * u, y = o * d - s * u, b = a * f - c * l, x = a * d - s * l, S = a * u - o * l;
		return t * (m * _ - h * v + g * y) - n * (p * _ - h * b + g * x) + r * (p * v - m * b + g * S) - i * (p * y - m * x + h * S);
	}
	determinantAffine() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[1], a = e[5], o = e[9], s = e[2], c = e[6], l = e[10];
		return t * (a * l - o * c) - n * (i * l - o * s) + r * (i * c - a * s);
	}
	transpose() {
		let e = this.elements, t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
	}
	setPosition(e, t, n) {
		let r = this.elements;
		return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = t * o - n * a, v = t * s - r * a, y = t * c - i * a, b = n * s - r * o, x = n * c - i * o, S = r * c - i * s, C = l * m - u * p, w = l * h - d * p, T = l * g - f * p, E = u * h - d * m, D = u * g - f * m, O = d * g - f * h, k = _ * O - v * D + y * E + b * T - x * w + S * C;
		if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		let A = 1 / k;
		return e[0] = (o * O - s * D + c * E) * A, e[1] = (r * D - n * O - i * E) * A, e[2] = (m * S - h * x + g * b) * A, e[3] = (d * x - u * S - f * b) * A, e[4] = (s * T - a * O - c * w) * A, e[5] = (t * O - r * T + i * w) * A, e[6] = (h * y - p * S - g * v) * A, e[7] = (l * S - d * y + f * v) * A, e[8] = (a * D - o * T + c * C) * A, e[9] = (n * T - t * D - i * C) * A, e[10] = (p * x - m * y + g * _) * A, e[11] = (u * y - l * x - f * _) * A, e[12] = (o * w - a * E - s * C) * A, e[13] = (t * E - n * w + r * C) * A, e[14] = (m * v - p * b - h * _) * A, e[15] = (l * b - u * v + d * _) * A, this;
	}
	scale(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z;
		return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
	}
	getMaxScaleOnAxis() {
		let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	}
	makeTranslation(e, t, n) {
		return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
		return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, n, r, i, a) {
		return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, n) {
		let r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = n.x, x = n.y, S = n.z;
		return r[0] = (1 - (m + g)) * b, r[1] = (f + y) * b, r[2] = (p - v) * b, r[3] = 0, r[4] = (f - y) * x, r[5] = (1 - (d + g)) * x, r[6] = (h + _) * x, r[7] = 0, r[8] = (p + v) * S, r[9] = (h - _) * S, r[10] = (1 - (d + m)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
	}
	decompose(e, t, n) {
		let r = this.elements;
		e.x = r[12], e.y = r[13], e.z = r[14];
		let i = this.determinantAffine();
		if (i === 0) return n.set(1, 1, 1), t.identity(), this;
		let a = _n.set(r[0], r[1], r[2]).length(), o = _n.set(r[4], r[5], r[6]).length(), s = _n.set(r[8], r[9], r[10]).length();
		i < 0 && (a = -a), vn.copy(this);
		let c = 1 / a, l = 1 / o, u = 1 / s;
		return vn.elements[0] *= c, vn.elements[1] *= c, vn.elements[2] *= c, vn.elements[4] *= l, vn.elements[5] *= l, vn.elements[6] *= l, vn.elements[8] *= u, vn.elements[9] *= u, vn.elements[10] *= u, t.setFromRotationMatrix(vn), n.x = a, n.y = o, n.z = s, this;
	}
	makePerspective(e, t, n, r, i, a, o = lt, s = !1) {
		let c = this.elements, l = 2 * i / (t - e), u = 2 * i / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r), p, m;
		if (s) p = i / (a - i), m = a * i / (a - i);
		else if (o === 2e3) p = -(a + i) / (a - i), m = -2 * a * i / (a - i);
		else if (o === 2001) p = -a / (a - i), m = -a * i / (a - i);
		else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
	}
	makeOrthographic(e, t, n, r, i, a, o = lt, s = !1) {
		let c = this.elements, l = 2 / (t - e), u = 2 / (n - r), d = -(t + e) / (t - e), f = -(n + r) / (n - r), p, m;
		if (s) p = 1 / (a - i), m = a / (a - i);
		else if (o === 2e3) p = -2 / (a - i), m = -(a + i) / (a - i);
		else if (o === 2001) p = -1 / (a - i), m = -i / (a - i);
		else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
	}
};
h = gn, h.prototype.isMatrix4 = !0;
var _n = /*@__PURE__*/ new G(), vn = /*@__PURE__*/ new gn(), yn = /*@__PURE__*/ new G(0, 0, 0), bn = /*@__PURE__*/ new G(1, 1, 1), xn = /*@__PURE__*/ new G(), Sn = /*@__PURE__*/ new G(), Cn = /*@__PURE__*/ new G(), wn = /*@__PURE__*/ new gn(), Tn = /*@__PURE__*/ new qt(), En = class e {
	constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
		this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get order() {
		return this._order;
	}
	set order(e) {
		this._order = e, this._onChangeCallback();
	}
	set(e, t, n, r = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		let r = e.elements, i = r[0], a = r[4], o = r[8], s = r[1], c = r[5], l = r[9], u = r[2], d = r[6], f = r[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(U(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(d, c), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-U(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-u, i), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(U(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, i));
				break;
			case "ZYX":
				this._y = Math.asin(-U(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, c));
				break;
			case "YZX":
				this._z = Math.asin(U(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, i)) : (this._x = 0, this._y = Math.atan2(o, f));
				break;
			case "XZY":
				this._z = Math.asin(-U(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, f), this._y = 0);
				break;
			default: V("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
		}
		return this._order = t, n === !0 && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, n) {
		return wn.makeRotationFromQuaternion(e), this.setFromRotationMatrix(wn, t, n);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return Tn.setFromEuler(this), this.setFromQuaternion(Tn, e);
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
	}
	fromArray(e) {
		return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
};
En.DEFAULT_ORDER = "XYZ";
var Dn = class {
	constructor() {
		this.mask = 1;
	}
	set(e) {
		this.mask = 1 << e >>> 0;
	}
	enable(e) {
		this.mask |= 1 << e;
	}
	enableAll() {
		this.mask = -1;
	}
	toggle(e) {
		this.mask ^= 1 << e;
	}
	disable(e) {
		this.mask &= ~(1 << e);
	}
	disableAll() {
		this.mask = 0;
	}
	test(e) {
		return (this.mask & e.mask) !== 0;
	}
	isEnabled(e) {
		return !!(this.mask & 1 << e);
	}
}, On = 0, kn = /*@__PURE__*/ new G(), An = /*@__PURE__*/ new qt(), jn = /*@__PURE__*/ new gn(), Mn = /*@__PURE__*/ new G(), Nn = /*@__PURE__*/ new G(), Pn = /*@__PURE__*/ new G(), Fn = /*@__PURE__*/ new qt(), In = /*@__PURE__*/ new G(1, 0, 0), Ln = /*@__PURE__*/ new G(0, 1, 0), Rn = /*@__PURE__*/ new G(0, 0, 1), zn = { type: "added" }, Bn = { type: "removed" }, Vn = {
	type: "childadded",
	child: null
}, Hn = {
	type: "childremoved",
	child: null
}, Un = class e extends bt {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: On++ }), this.uuid = Tt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
		let t = new G(), n = new En(), r = new qt(), i = new G(1, 1, 1);
		function a() {
			r.setFromEuler(n, !1);
		}
		function o() {
			n.setFromQuaternion(r, void 0, !1);
		}
		n._onChange(a), r._onChange(o), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: { value: new gn() },
			normalMatrix: { value: new K() }
		}), this.matrix = new gn(), this.matrixWorld = new gn(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Dn(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
	}
	onBeforeShadow() {}
	onAfterShadow() {}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(e) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
	}
	applyQuaternion(e) {
		return this.quaternion.premultiply(e), this;
	}
	setRotationFromAxisAngle(e, t) {
		this.quaternion.setFromAxisAngle(e, t);
	}
	setRotationFromEuler(e) {
		this.quaternion.setFromEuler(e, !0);
	}
	setRotationFromMatrix(e) {
		this.quaternion.setFromRotationMatrix(e);
	}
	setRotationFromQuaternion(e) {
		this.quaternion.copy(e);
	}
	rotateOnAxis(e, t) {
		return An.setFromAxisAngle(e, t), this.quaternion.multiply(An), this;
	}
	rotateOnWorldAxis(e, t) {
		return An.setFromAxisAngle(e, t), this.quaternion.premultiply(An), this;
	}
	rotateX(e) {
		return this.rotateOnAxis(In, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(Ln, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(Rn, e);
	}
	translateOnAxis(e, t) {
		return kn.copy(e).applyQuaternion(this.quaternion), this.position.add(kn.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis(In, e);
	}
	translateY(e) {
		return this.translateOnAxis(Ln, e);
	}
	translateZ(e) {
		return this.translateOnAxis(Rn, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(jn.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, n) {
		e.isVector3 ? Mn.copy(e) : Mn.set(e, t, n);
		let r = this.parent;
		this.updateWorldMatrix(!0, !1), Nn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? jn.lookAt(Nn, Mn, this.up) : jn.lookAt(Mn, Nn, this.up), this.quaternion.setFromRotationMatrix(jn), r && (jn.extractRotation(r.matrixWorld), An.setFromRotationMatrix(jn), this.quaternion.premultiply(An.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
			return this;
		}
		return e === this ? (H("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(zn), Vn.child = e, this.dispatchEvent(Vn), Vn.child = null) : H("Object3D.add: object not an instance of THREE.Object3D.", e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
			return this;
		}
		let t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Bn), Hn.child = e, this.dispatchEvent(Hn), Hn.child = null), this;
	}
	removeFromParent() {
		let e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		return this.remove(...this.children);
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), jn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), jn.multiply(e.parent.matrixWorld)), e.applyMatrix4(jn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(zn), Vn.child = e, this.dispatchEvent(Vn), Vn.child = null, this;
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, r = this.children.length; n < r; n++) {
			let r = this.children[n].getObjectByProperty(e, t);
			if (r !== void 0) return r;
		}
	}
	getObjectsByProperty(e, t, n = []) {
		this[e] === t && n.push(this);
		let r = this.children;
		for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
		return n;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Nn, e, Pn), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Nn, Fn, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	intersectsFrustum() {}
	traverse(e) {
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
	}
	traverseAncestors(e) {
		let t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale);
		let e = this.pivot;
		if (e !== null) {
			let t = e.x, n = e.y, r = e.z, i = this.matrix.elements;
			i[12] += t - i[0] * t - i[4] * n - i[8] * r, i[13] += n - i[1] * t - i[5] * n - i[9] * r, i[14] += r - i[2] * t - i[6] * n - i[10] * r;
		}
		this.matrixWorldNeedsUpdate = !0;
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
	}
	updateWorldMatrix(e, t, n = !1) {
		let r = this.parent;
		if (e === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, n = !0), t === !0) {
			let e = this.children;
			for (let t = 0, r = e.length; t < r; t++) e[t].updateWorldMatrix(!1, !0, n);
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string", n = {};
		t && (e = {
			geometries: {},
			materials: {},
			textures: {},
			images: {},
			shapes: {},
			skeletons: {},
			animations: {},
			nodes: {}
		}, n.metadata = {
			version: 4.7,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		let r = {};
		r.uuid = this.uuid, r.type = this.type, r.name = this.name, r.castShadow = this.castShadow, r.receiveShadow = this.receiveShadow, r.visible = this.visible, r.frustumCulled = this.frustumCulled, r.renderOrder = this.renderOrder, r.static = this.static, r.matrixAutoUpdate = this.matrixAutoUpdate, Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((e) => ({
			...e,
			boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
			boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0
		})), r.instanceInfo = this._instanceInfo.map((e) => ({ ...e })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
		function i(t, n) {
			return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
		}
		if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			let t = this.geometry.parameters;
			if (t !== void 0 && t.shapes !== void 0) {
				let n = t.shapes;
				if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					i(e.shapes, r);
				}
				else i(e.shapes, n);
			}
		}
		if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) {
			if (Array.isArray(this.material)) {
				let t = [];
				for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
				r.material = t;
			} else r.material = i(e.materials, this.material);
		}
		if (this.children.length > 0) {
			r.children = [];
			for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			r.animations = [];
			for (let t = 0; t < this.animations.length; t++) {
				let n = this.animations[t];
				r.animations.push(i(e.animations, n));
			}
		}
		if (t) {
			let t = a(e.geometries), r = a(e.materials), i = a(e.textures), o = a(e.images), s = a(e.shapes), c = a(e.skeletons), l = a(e.animations), u = a(e.nodes);
			t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l), u.length > 0 && (n.nodes = u);
		}
		return n.object = r, n;
		function a(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot === null ? null : e.pivot.clone(), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let t = 0; t < e.children.length; t++) {
			let n = e.children[t];
			this.add(n.clone());
		}
		return this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
};
Un.DEFAULT_UP = /*@__PURE__*/ new G(0, 1, 0), Un.DEFAULT_MATRIX_AUTO_UPDATE = !0, Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var J = class extends Un {
	constructor() {
		super(), this.isGroup = !0, this.type = "Group";
	}
}, Wn = { type: "move" }, Gn = class {
	constructor() {
		this._targetRay = null, this._grip = null, this._hand = null;
	}
	getHandSpace() {
		return this._hand === null && (this._hand = new J(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
	}
	getTargetRaySpace() {
		return this._targetRay === null && (this._targetRay = new J(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new G(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new G()), this._targetRay;
	}
	getGripSpace() {
		return this._grip === null && (this._grip = new J(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new G(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new G(), this._grip.eventsEnabled = !1), this._grip;
	}
	dispatchEvent(e) {
		return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
	}
	connect(e) {
		if (e && e.hand) {
			let t = this._hand;
			if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
		}
		return this.dispatchEvent({
			type: "connected",
			data: e
		}), this;
	}
	disconnect(e) {
		return this.dispatchEvent({
			type: "disconnected",
			data: e
		}), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
	}
	update(e, t, n) {
		let r = null, i = null, a = null, o = this._targetRay, s = this._grip, c = this._hand;
		if (e && t.session.visibilityState !== "visible-blurred") {
			if (c && e.hand) {
				a = !0;
				for (let r of e.hand.values()) {
					let e = t.getJointPose(r, n), i = this._getHandJoint(c, r);
					e !== null && (i.matrix.fromArray(e.transform.matrix), i.matrix.decompose(i.position, i.rotation, i.scale), i.matrixWorldNeedsUpdate = !0, i.jointRadius = e.radius), i.visible = e !== null;
				}
				let r = c.joints["index-finger-tip"], i = c.joints["thumb-tip"], o = r.position.distanceTo(i.position);
				c.inputState.pinching && o > .025 ? (c.inputState.pinching = !1, this.dispatchEvent({
					type: "pinchend",
					handedness: e.handedness,
					target: this
				})) : !c.inputState.pinching && o <= .015 && (c.inputState.pinching = !0, this.dispatchEvent({
					type: "pinchstart",
					handedness: e.handedness,
					target: this
				}));
			} else s !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n), i !== null && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, s.eventsEnabled && s.dispatchEvent({
				type: "gripUpdated",
				data: e,
				target: this
			})));
			o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && i !== null && (r = i), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Wn)));
		}
		return o !== null && (o.visible = r !== null), s !== null && (s.visible = i !== null), c !== null && (c.visible = a !== null), this;
	}
	_getHandJoint(e, t) {
		if (e.joints[t.jointName] === void 0) {
			let n = new J();
			n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
		}
		return e.joints[t.jointName];
	}
}, Kn = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, qn = {
	h: 0,
	s: 0,
	l: 0
}, Jn = {
	h: 0,
	s: 0,
	l: 0
};
function Yn(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var Y = class {
	constructor(e, t, n) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
	}
	set(e, t, n) {
		if (t === void 0 && n === void 0) {
			let t = e;
			t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
		} else this.setRGB(e, t, n);
		return this;
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this;
	}
	setHex(e, t = rt) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, q.colorSpaceToWorking(this, t), this;
	}
	setRGB(e, t, n, r = q.workingColorSpace) {
		return this.r = e, this.g = t, this.b = n, q.colorSpaceToWorking(this, r), this;
	}
	setHSL(e, t, n, r = q.workingColorSpace) {
		if (e = Et(e, 1), t = U(t, 0, 1), n = U(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
			this.r = Yn(i, r, e + 1 / 3), this.g = Yn(i, r, e), this.b = Yn(i, r, e - 1 / 3);
		}
		return q.colorSpaceToWorking(this, r), this;
	}
	setStyle(e, t = rt) {
		function n(t) {
			t !== void 0 && parseFloat(t) < 1 && V("Color: Alpha component of " + e + " will be ignored.");
		}
		let r;
		if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
			let i, a = r[1], o = r[2];
			switch (a) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
					if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
					break;
				default: V("Color: Unknown color model " + e);
			}
		} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			let n = r[1], i = n.length;
			if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
			if (i === 6) return this.setHex(parseInt(n, 16), t);
			V("Color: Invalid hex color " + e);
		} else if (e && e.length > 0) return this.setColorName(e, t);
		return this;
	}
	setColorName(e, t = rt) {
		let n = Kn[e.toLowerCase()];
		return n === void 0 ? V("Color: Unknown color " + e) : this.setHex(n, t), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this;
	}
	copySRGBToLinear(e) {
		return this.r = en(e.r), this.g = en(e.g), this.b = en(e.b), this;
	}
	copyLinearToSRGB(e) {
		return this.r = tn(e.r), this.g = tn(e.g), this.b = tn(e.b), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = rt) {
		return q.workingToColorSpace(Xn.copy(this), e), Math.round(U(Xn.r * 255, 0, 255)) * 65536 + Math.round(U(Xn.g * 255, 0, 255)) * 256 + Math.round(U(Xn.b * 255, 0, 255));
	}
	getHexString(e = rt) {
		return ("000000" + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = q.workingColorSpace) {
		q.workingToColorSpace(Xn.copy(this), t);
		let n = Xn.r, r = Xn.g, i = Xn.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
		if (o === a) s = 0, c = 0;
		else {
			let e = a - o;
			switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o), a) {
				case n:
					s = (r - i) / e + (r < i ? 6 : 0);
					break;
				case r:
					s = (i - n) / e + 2;
					break;
				case i: s = (n - r) / e + 4;
			}
			s /= 6;
		}
		return e.h = s, e.s = c, e.l = l, e;
	}
	getRGB(e, t = q.workingColorSpace) {
		return q.workingToColorSpace(Xn.copy(this), t), e.r = Xn.r, e.g = Xn.g, e.b = Xn.b, e;
	}
	getStyle(e = rt) {
		q.workingToColorSpace(Xn.copy(this), e);
		let t = Xn.r, n = Xn.g, r = Xn.b;
		return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
	}
	offsetHSL(e, t, n) {
		return this.getHSL(qn), this.setHSL(qn.h + e, qn.s + t, qn.l + n);
	}
	add(e) {
		return this.r += e.r, this.g += e.g, this.b += e.b, this;
	}
	addColors(e, t) {
		return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
	}
	addScalar(e) {
		return this.r += e, this.g += e, this.b += e, this;
	}
	sub(e) {
		return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
	}
	multiply(e) {
		return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
	}
	multiplyScalar(e) {
		return this.r *= e, this.g *= e, this.b *= e, this;
	}
	lerp(e, t) {
		return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
	}
	lerpColors(e, t, n) {
		return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
	}
	lerpHSL(e, t) {
		this.getHSL(qn), e.getHSL(Jn);
		let n = kt(qn.h, Jn.h, t), r = kt(qn.s, Jn.s, t), i = kt(qn.l, Jn.l, t);
		return this.setHSL(n, r, i), this;
	}
	setFromVector3(e) {
		return this.r = e.x, this.g = e.y, this.b = e.z, this;
	}
	applyMatrix3(e) {
		let t = this.r, n = this.g, r = this.b, i = e.elements;
		return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
	}
	equals(e) {
		return e.r === this.r && e.g === this.g && e.b === this.b;
	}
	fromArray(e, t = 0) {
		return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
	}
	fromBufferAttribute(e, t) {
		return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
	}
	toJSON() {
		return this.getHex();
	}
	*[Symbol.iterator]() {
		yield this.r, yield this.g, yield this.b;
	}
}, Xn = /*@__PURE__*/ new Y();
Y.NAMES = Kn;
var Zn = class extends Un {
	constructor() {
		super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new En(), this.environmentIntensity = 1, this.environmentRotation = new En(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	copy(e, t) {
		return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), t.object.backgroundBlurriness = this.backgroundBlurriness, t.object.backgroundIntensity = this.backgroundIntensity, t.object.backgroundRotation = this.backgroundRotation.toArray(), t.object.environmentIntensity = this.environmentIntensity, t.object.environmentRotation = this.environmentRotation.toArray(), t;
	}
}, Qn = /*@__PURE__*/ new G(), $n = /*@__PURE__*/ new G(), er = /*@__PURE__*/ new G(), tr = /*@__PURE__*/ new G(), nr = /*@__PURE__*/ new G(), rr = /*@__PURE__*/ new G(), ir = /*@__PURE__*/ new G(), ar = /*@__PURE__*/ new G(), or = /*@__PURE__*/ new G(), sr = /*@__PURE__*/ new G(), cr = /*@__PURE__*/ new dn(), lr = /*@__PURE__*/ new dn(), ur = /*@__PURE__*/ new dn(), dr = class e {
	constructor(e = new G(), t = new G(), n = new G()) {
		this.a = e, this.b = t, this.c = n;
	}
	static getNormal(e, t, n, r) {
		r.subVectors(n, t), Qn.subVectors(e, t), r.cross(Qn);
		let i = r.lengthSq();
		return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
	}
	static getBarycoord(e, t, n, r, i) {
		Qn.subVectors(r, t), $n.subVectors(n, t), er.subVectors(e, t);
		let a = Qn.dot(Qn), o = Qn.dot($n), s = Qn.dot(er), c = $n.dot($n), l = $n.dot(er), u = a * c - o * o;
		if (u === 0) return i.set(0, 0, 0), null;
		let d = 1 / u, f = (c * s - o * l) * d, p = (a * l - o * s) * d;
		return i.set(1 - f - p, p, f);
	}
	static containsPoint(e, t, n, r) {
		return this.getBarycoord(e, t, n, r, tr) !== null && tr.x >= 0 && tr.y >= 0 && tr.x + tr.y <= 1;
	}
	static getInterpolation(e, t, n, r, i, a, o, s) {
		return this.getBarycoord(e, t, n, r, tr) === null ? (s.x = 0, s.y = 0, "z" in s && (s.z = 0), "w" in s && (s.w = 0), null) : (s.setScalar(0), s.addScaledVector(i, tr.x), s.addScaledVector(a, tr.y), s.addScaledVector(o, tr.z), s);
	}
	static getInterpolatedAttribute(e, t, n, r, i, a) {
		return cr.setScalar(0), lr.setScalar(0), ur.setScalar(0), cr.fromBufferAttribute(e, t), lr.fromBufferAttribute(e, n), ur.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(cr, i.x), a.addScaledVector(lr, i.y), a.addScaledVector(ur, i.z), a;
	}
	static isFrontFacing(e, t, n, r) {
		return Qn.subVectors(n, t), $n.subVectors(e, t), Qn.cross($n).dot(r) < 0;
	}
	set(e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
	}
	setFromPointsAndIndices(e, t, n, r) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
	}
	setFromAttributeAndIndices(e, t, n, r) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	}
	getArea() {
		return Qn.subVectors(this.c, this.b), $n.subVectors(this.a, this.b), Qn.cross($n).length() * .5;
	}
	getMidpoint(e) {
		return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}
	getNormal(t) {
		return e.getNormal(this.a, this.b, this.c, t);
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c);
	}
	getBarycoord(t, n) {
		return e.getBarycoord(t, this.a, this.b, this.c, n);
	}
	getInterpolation(t, n, r, i, a) {
		return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
	}
	containsPoint(t) {
		return e.containsPoint(t, this.a, this.b, this.c);
	}
	isFrontFacing(t) {
		return e.isFrontFacing(this.a, this.b, this.c, t);
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this);
	}
	closestPointToPoint(e, t) {
		let n = this.a, r = this.b, i = this.c, a, o;
		nr.subVectors(r, n), rr.subVectors(i, n), ar.subVectors(e, n);
		let s = nr.dot(ar), c = rr.dot(ar);
		if (s <= 0 && c <= 0) return t.copy(n);
		or.subVectors(e, r);
		let l = nr.dot(or), u = rr.dot(or);
		if (l >= 0 && u <= l) return t.copy(r);
		let d = s * u - l * c;
		if (d <= 0 && s >= 0 && l <= 0) return a = s / (s - l), t.copy(n).addScaledVector(nr, a);
		sr.subVectors(e, i);
		let f = nr.dot(sr), p = rr.dot(sr);
		if (p >= 0 && f <= p) return t.copy(i);
		let m = f * c - s * p;
		if (m <= 0 && c >= 0 && p <= 0) return o = c / (c - p), t.copy(n).addScaledVector(rr, o);
		let h = l * p - f * u;
		if (h <= 0 && u - l >= 0 && f - p >= 0) return ir.subVectors(i, r), o = (u - l) / (u - l + (f - p)), t.copy(r).addScaledVector(ir, o);
		let g = 1 / (h + m + d);
		return a = m * g, o = d * g, t.copy(n).addScaledVector(nr, a).addScaledVector(rr, o);
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
}, fr = class {
	constructor(e = new G(Infinity, Infinity, Infinity), t = new G(-Infinity, -Infinity, -Infinity)) {
		this.isBox3 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromArray(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(mr.fromArray(e, t));
		return this;
	}
	setFromBufferAttribute(e) {
		this.makeEmpty();
		for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(mr.fromBufferAttribute(e, t));
		return this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = mr.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	setFromObject(e, t = !1) {
		return this.makeEmpty(), this.expandByObject(e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	expandByObject(e, t = !1) {
		e.updateWorldMatrix(!1, !1);
		let n = e.geometry;
		if (n !== void 0) {
			let r = n.getAttribute("position");
			if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0) for (let t = 0, n = r.count; t < n; t++) e.isMesh === !0 ? e.getVertexPosition(t, mr) : mr.fromBufferAttribute(r, t), mr.applyMatrix4(e.matrixWorld), this.expandByPoint(mr);
			else e.boundingBox === void 0 ? (n.boundingBox === null && n.computeBoundingBox(), hr.copy(n.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(), hr.copy(e.boundingBox)), hr.applyMatrix4(e.matrixWorld), this.union(hr);
		}
		let r = e.children;
		for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
		return this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, mr), mr.distanceToSquared(e.center) <= e.radius * e.radius;
	}
	intersectsPlane(e) {
		let t, n;
		return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(Sr), Cr.subVectors(this.max, Sr), gr.subVectors(e.a, Sr), _r.subVectors(e.b, Sr), vr.subVectors(e.c, Sr), yr.subVectors(_r, gr), br.subVectors(vr, _r), xr.subVectors(gr, vr);
		let t = [
			0,
			-yr.z,
			yr.y,
			0,
			-br.z,
			br.y,
			0,
			-xr.z,
			xr.y,
			yr.z,
			0,
			-yr.x,
			br.z,
			0,
			-br.x,
			xr.z,
			0,
			-xr.x,
			-yr.y,
			yr.x,
			0,
			-br.y,
			br.x,
			0,
			-xr.y,
			xr.x,
			0
		];
		return !Er(t, gr, _r, vr, Cr) || (t = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], !Er(t, gr, _r, vr, Cr)) ? !1 : (wr.crossVectors(yr, br), t = [
			wr.x,
			wr.y,
			wr.z
		], Er(t, gr, _r, vr, Cr));
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, mr).distanceTo(e);
	}
	getBoundingSphere(e) {
		return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(mr).length() * .5), e;
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	applyMatrix4(e) {
		return this.isEmpty() || (pr[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), pr[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), pr[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), pr[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), pr[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), pr[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), pr[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), pr[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(pr)), this;
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
	toJSON() {
		return {
			min: this.min.toArray(),
			max: this.max.toArray()
		};
	}
	fromJSON(e) {
		return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
	}
}, pr = [
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G()
], mr = /*@__PURE__*/ new G(), hr = /*@__PURE__*/ new fr(), gr = /*@__PURE__*/ new G(), _r = /*@__PURE__*/ new G(), vr = /*@__PURE__*/ new G(), yr = /*@__PURE__*/ new G(), br = /*@__PURE__*/ new G(), xr = /*@__PURE__*/ new G(), Sr = /*@__PURE__*/ new G(), Cr = /*@__PURE__*/ new G(), wr = /*@__PURE__*/ new G(), Tr = /*@__PURE__*/ new G();
function Er(e, t, n, r, i) {
	for (let a = 0, o = e.length - 3; a <= o; a += 3) {
		Tr.fromArray(e, a);
		let o = i.x * Math.abs(Tr.x) + i.y * Math.abs(Tr.y) + i.z * Math.abs(Tr.z), s = t.dot(Tr), c = n.dot(Tr), l = r.dot(Tr);
		if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
	}
	return !0;
}
var Dr = /*@__PURE__*/ new G(), Or = /*@__PURE__*/ new W(), kr = 0, Ar = class extends bt {
	constructor(e, t, n = !1) {
		if (super(), Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: kr++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = n, this.usage = ct, this.updateRanges = [], this.gpuType = P, this.version = 0;
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
	}
	copyAt(e, t, n) {
		e *= this.itemSize, n *= t.itemSize;
		for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	copyArray(e) {
		return this.array.set(e), this;
	}
	applyMatrix3(e) {
		if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Or.fromBufferAttribute(this, t), Or.applyMatrix3(e), this.setXY(t, Or.x, Or.y);
		else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) Dr.fromBufferAttribute(this, t), Dr.applyMatrix3(e), this.setXYZ(t, Dr.x, Dr.y, Dr.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.count; t < n; t++) Dr.fromBufferAttribute(this, t), Dr.applyMatrix4(e), this.setXYZ(t, Dr.x, Dr.y, Dr.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) Dr.fromBufferAttribute(this, t), Dr.applyNormalMatrix(e), this.setXYZ(t, Dr.x, Dr.y, Dr.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) Dr.fromBufferAttribute(this, t), Dr.transformDirection(e), this.setXYZ(t, Dr.x, Dr.y, Dr.z);
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.itemSize + t];
		return this.normalized && (n = Wt(n, this.array)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = Gt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
	}
	getX(e) {
		let t = this.array[e * this.itemSize];
		return this.normalized && (t = Wt(t, this.array)), t;
	}
	setX(e, t) {
		return this.normalized && (t = Gt(t, this.array)), this.array[e * this.itemSize] = t, this;
	}
	getY(e) {
		let t = this.array[e * this.itemSize + 1];
		return this.normalized && (t = Wt(t, this.array)), t;
	}
	setY(e, t) {
		return this.normalized && (t = Gt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
	}
	getZ(e) {
		let t = this.array[e * this.itemSize + 2];
		return this.normalized && (t = Wt(t, this.array)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = Gt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
	}
	getW(e) {
		let t = this.array[e * this.itemSize + 3];
		return this.normalized && (t = Wt(t, this.array)), t;
	}
	setW(e, t) {
		return this.normalized && (t = Gt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = Gt(t, this.array), n = Gt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = Gt(t, this.array), n = Gt(n, this.array), r = Gt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = Gt(t, this.array), n = Gt(n, this.array), r = Gt(r, this.array), i = Gt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this);
	}
	toJSON() {
		let e = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from(this.array),
			normalized: this.normalized
		};
		return e.name = this.name, e.usage = this.usage, e.gpuType = this.gpuType, e;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, jr = class extends Ar {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n);
	}
}, Mr = class extends Ar {
	constructor(e, t, n) {
		super(new Uint32Array(e), t, n);
	}
}, Nr = class extends Ar {
	constructor(e, t, n) {
		super(new Float32Array(e), t, n);
	}
}, Pr = /*@__PURE__*/ new fr(), Fr = /*@__PURE__*/ new G(), Ir = /*@__PURE__*/ new G(), Lr = class {
	constructor(e = new G(), t = -1) {
		this.isSphere = !0, this.center = e, this.radius = t;
	}
	set(e, t) {
		return this.center.copy(e), this.radius = t, this;
	}
	setFromPoints(e, t) {
		let n = this.center;
		t === void 0 ? Pr.setFromPoints(e).getCenter(n) : n.copy(t);
		let r = 0;
		for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
		return this.radius = Math.sqrt(r), this;
	}
	copy(e) {
		return this.center.copy(e.center), this.radius = e.radius, this;
	}
	isEmpty() {
		return this.radius < 0;
	}
	makeEmpty() {
		return this.center.set(0, 0, 0), this.radius = -1, this;
	}
	containsPoint(e) {
		return e.distanceToSquared(this.center) <= this.radius * this.radius;
	}
	distanceToPoint(e) {
		return e.distanceTo(this.center) - this.radius;
	}
	intersectsSphere(e) {
		let t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	}
	intersectsBox(e) {
		return e.intersectsSphere(this);
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	}
	clampPoint(e, t) {
		let n = this.center.distanceToSquared(e);
		return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
	}
	translate(e) {
		return this.center.add(e), this;
	}
	expandByPoint(e) {
		if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
		Fr.subVectors(e, this.center);
		let t = Fr.lengthSq();
		if (t > this.radius * this.radius) {
			let e = Math.sqrt(t), n = (e - this.radius) * .5;
			this.center.addScaledVector(Fr, n / e), this.radius += n;
		}
		return this;
	}
	union(e) {
		return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ir.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Fr.copy(e.center).add(Ir)), this.expandByPoint(Fr.copy(e.center).sub(Ir))), this);
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			radius: this.radius,
			center: this.center.toArray()
		};
	}
	fromJSON(e) {
		return this.radius = e.radius, this.center.fromArray(e.center), this;
	}
}, Rr = 0, zr = /*@__PURE__*/ new gn(), Br = /*@__PURE__*/ new Un(), Vr = /*@__PURE__*/ new G(), Hr = /*@__PURE__*/ new fr(), Ur = /*@__PURE__*/ new fr(), Wr = /*@__PURE__*/ new G(), Gr = class e extends bt {
	constructor() {
		super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Rr++ }), this.uuid = Tt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: Infinity
		}, this.userData = {}, this._transformed = !1;
	}
	getIndex() {
		return this.index;
	}
	setIndex(e) {
		return this.index = Array.isArray(e) ? new (ut(e) ? Mr : jr)(e, 1) : e, this;
	}
	setIndirect(e, t = 0) {
		return this.indirect = e, this.indirectOffset = t, this;
	}
	getIndirect() {
		return this.indirect;
	}
	getAttribute(e) {
		return this.attributes[e];
	}
	setAttribute(e, t) {
		return this.attributes[e] = t, this;
	}
	deleteAttribute(e) {
		return delete this.attributes[e], this;
	}
	hasAttribute(e) {
		return this.attributes[e] !== void 0;
	}
	addGroup(e, t, n = 0) {
		this.groups.push({
			start: e,
			count: t,
			materialIndex: n
		});
	}
	clearGroups() {
		this.groups = [];
	}
	setDrawRange(e, t) {
		this.drawRange.start = e, this.drawRange.count = t;
	}
	applyMatrix4(e) {
		let t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
		let n = this.attributes.normal;
		if (n !== void 0) {
			let t = new K().getNormalMatrix(e);
			n.applyNormalMatrix(t), n.needsUpdate = !0;
		}
		let r = this.attributes.tangent;
		return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = !0, this;
	}
	applyQuaternion(e) {
		return zr.makeRotationFromQuaternion(e), this.applyMatrix4(zr), this;
	}
	rotateX(e) {
		return zr.makeRotationX(e), this.applyMatrix4(zr), this;
	}
	rotateY(e) {
		return zr.makeRotationY(e), this.applyMatrix4(zr), this;
	}
	rotateZ(e) {
		return zr.makeRotationZ(e), this.applyMatrix4(zr), this;
	}
	translate(e, t, n) {
		return zr.makeTranslation(e, t, n), this.applyMatrix4(zr), this;
	}
	scale(e, t, n) {
		return zr.makeScale(e, t, n), this.applyMatrix4(zr), this;
	}
	lookAt(e) {
		return Br.lookAt(e), Br.updateMatrix(), this.applyMatrix4(Br.matrix), this;
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(Vr).negate(), this.translate(Vr.x, Vr.y, Vr.z), this;
	}
	setFromPoints(e) {
		let t = this.getAttribute("position");
		if (t === void 0) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n];
				t.push(r.x, r.y, r.z || 0);
			}
			this.setAttribute("position", new Nr(t, 3));
		} else {
			let n = Math.min(e.length, t.count);
			for (let r = 0; r < n; r++) {
				let n = e[r];
				t.setXYZ(r, n.x, n.y, n.z || 0);
			}
			e.length > t.count && V("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
		}
		return this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new fr());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) H("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new G(-Infinity, -Infinity, -Infinity), new G(Infinity, Infinity, Infinity));
		else {
			if (e !== void 0) {
				if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
					let n = t[e];
					Hr.setFromBufferAttribute(n), this.morphTargetsRelative ? (Wr.addVectors(this.boundingBox.min, Hr.min), this.boundingBox.expandByPoint(Wr), Wr.addVectors(this.boundingBox.max, Hr.max), this.boundingBox.expandByPoint(Wr)) : (this.boundingBox.expandByPoint(Hr.min), this.boundingBox.expandByPoint(Hr.max));
				}
			} else this.boundingBox.makeEmpty();
			(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && H("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new Lr());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) H("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new G(), Infinity);
		else if (e) {
			let n = this.boundingSphere.center;
			if (Hr.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				Ur.setFromBufferAttribute(n), this.morphTargetsRelative ? (Wr.addVectors(Hr.min, Ur.min), Hr.expandByPoint(Wr), Wr.addVectors(Hr.max, Ur.max), Hr.expandByPoint(Wr)) : (Hr.expandByPoint(Ur.min), Hr.expandByPoint(Ur.max));
			}
			Hr.getCenter(n);
			let r = 0;
			for (let t = 0, i = e.count; t < i; t++) Wr.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(Wr));
			if (t) for (let i = 0, a = t.length; i < a; i++) {
				let a = t[i], o = this.morphTargetsRelative;
				for (let t = 0, i = a.count; t < i; t++) Wr.fromBufferAttribute(a, t), o && (Vr.fromBufferAttribute(e, t), Wr.add(Vr)), r = Math.max(r, n.distanceToSquared(Wr));
			}
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && H("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeTangents() {
		let e = this.index, t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
			H("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			return;
		}
		let n = t.position, r = t.normal, i = t.uv, a = this.getAttribute("tangent");
		(a === void 0 || a.count !== n.count) && (a = new Ar(new Float32Array(4 * n.count), 4), this.setAttribute("tangent", a));
		let o = [], s = [];
		for (let e = 0; e < n.count; e++) o[e] = new G(), s[e] = new G();
		let c = new G(), l = new G(), u = new G(), d = new W(), f = new W(), p = new W(), m = new G(), h = new G();
		function g(e, t, r) {
			c.fromBufferAttribute(n, e), l.fromBufferAttribute(n, t), u.fromBufferAttribute(n, r), d.fromBufferAttribute(i, e), f.fromBufferAttribute(i, t), p.fromBufferAttribute(i, r), l.sub(c), u.sub(c), f.sub(d), p.sub(d);
			let a = 1 / (f.x * p.y - p.x * f.y);
			isFinite(a) && (m.copy(l).multiplyScalar(p.y).addScaledVector(u, -f.y).multiplyScalar(a), h.copy(u).multiplyScalar(f.x).addScaledVector(l, -p.x).multiplyScalar(a), o[e].add(m), o[t].add(m), o[r].add(m), s[e].add(h), s[t].add(h), s[r].add(h));
		}
		let _ = this.groups;
		_.length === 0 && (_ = [{
			start: 0,
			count: e.count
		}]);
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) g(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
		}
		let v = new G(), y = new G(), b = new G(), x = new G();
		function S(e) {
			b.fromBufferAttribute(r, e), x.copy(b);
			let t = o[e];
			v.copy(t), v.sub(b.multiplyScalar(b.dot(t))).normalize(), y.crossVectors(x, t);
			let n = y.dot(s[e]) < 0 ? -1 : 1;
			a.setXYZW(e, v.x, v.y, v.z, n);
		}
		for (let t = 0, n = _.length; t < n; ++t) {
			let n = _[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) S(e.getX(t + 0)), S(e.getX(t + 1)), S(e.getX(t + 2));
		}
		this._transformed = !0;
	}
	computeVertexNormals() {
		let e = this.index, t = this.getAttribute("position");
		if (t !== void 0) {
			let n = this.getAttribute("normal");
			if (n === void 0 || n.count !== t.count) n = new Ar(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
			else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
			let r = new G(), i = new G(), a = new G(), o = new G(), s = new G(), c = new G(), l = new G(), u = new G();
			if (e) for (let d = 0, f = e.count; d < f; d += 3) {
				let f = e.getX(d + 0), p = e.getX(d + 1), m = e.getX(d + 2);
				r.fromBufferAttribute(t, f), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, m), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), o.fromBufferAttribute(n, f), s.fromBufferAttribute(n, p), c.fromBufferAttribute(n, m), o.add(l), s.add(l), c.add(l), n.setXYZ(f, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(m, c.x, c.y, c.z);
			}
			else for (let e = 0, o = t.count; e < o; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), n.setXYZ(e + 0, l.x, l.y, l.z), n.setXYZ(e + 1, l.x, l.y, l.z), n.setXYZ(e + 2, l.x, l.y, l.z);
			this.normalizeNormals(), n.needsUpdate = !0;
		}
	}
	normalizeNormals() {
		let e = this.attributes.normal;
		for (let t = 0, n = e.count; t < n; t++) Wr.fromBufferAttribute(e, t), Wr.normalize(), e.setXYZ(t, Wr.x, Wr.y, Wr.z);
	}
	toNonIndexed() {
		function t(e, t) {
			let n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), o = 0, s = 0;
			for (let i = 0, c = t.length; i < c; i++) {
				o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
				for (let e = 0; e < r; e++) a[s++] = n[o++];
			}
			return new Ar(a, r, i);
		}
		if (this.index === null) return V("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		let n = new e(), r = this.index.array, i = this.attributes;
		for (let e in i) {
			let a = i[e], o = t(a, r);
			n.setAttribute(e, o);
		}
		let a = this.morphAttributes;
		for (let e in a) {
			let i = [], o = a[e];
			for (let e = 0, n = o.length; e < n; e++) {
				let n = o[e], a = t(n, r);
				i.push(a);
			}
			n.morphAttributes[e] = i;
		}
		n.morphTargetsRelative = this.morphTargetsRelative;
		let o = this.groups;
		for (let e = 0, t = o.length; e < t; e++) {
			let t = o[e];
			n.addGroup(t.start, t.count, t.materialIndex);
		}
		return n;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "BufferGeometry",
			generator: "BufferGeometry.toJSON"
		} };
		if (e.uuid = this.uuid, e.type = this.parameters !== void 0 && this._transformed === !0 ? "BufferGeometry" : this.type, e.name = this.name, Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0 && this._transformed !== !0) {
			let t = this.parameters;
			for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		e.data = { attributes: {} };
		let t = this.index;
		t !== null && (e.data.index = {
			type: t.array.constructor.name,
			array: Array.prototype.slice.call(t.array)
		});
		let n = this.attributes;
		for (let t in n) {
			let r = n[t];
			e.data.attributes[t] = r.toJSON(e.data);
		}
		let r = {}, i = !1;
		for (let t in this.morphAttributes) {
			let n = this.morphAttributes[t], a = [];
			for (let t = 0, r = n.length; t < r; t++) {
				let r = n[t];
				a.push(r.toJSON(e.data));
			}
			a.length > 0 && (r[t] = a, i = !0);
		}
		i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
		let a = this.groups;
		a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
		let o = this.boundingSphere;
		return o !== null && (e.data.boundingSphere = o.toJSON()), e;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		let t = {};
		this.name = e.name;
		let n = e.index;
		n !== null && this.setIndex(n.clone());
		let r = e.attributes;
		for (let e in r) {
			let n = r[e];
			this.setAttribute(e, n.clone(t));
		}
		let i = e.morphAttributes;
		for (let e in i) {
			let n = [], r = i[e];
			for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
			this.morphAttributes[e] = n;
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		let a = e.groups;
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e];
			this.addGroup(t.start, t.count, t.materialIndex);
		}
		let o = e.boundingBox;
		o !== null && (this.boundingBox = o.clone());
		let s = e.boundingSphere;
		return s !== null && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this._transformed = e._transformed, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, Kr = class {
	constructor(e, t) {
		this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e === void 0 ? 0 : e.length / t, this.usage = ct, this.updateRanges = [], this.version = 0, this.uuid = Tt();
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
	}
	copyAt(e, t, n) {
		e *= this.stride, n *= t.stride;
		for (let r = 0, i = this.stride; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	clone(e) {
		e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Tt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
		let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
		return n.setUsage(this.usage), n;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	toJSON(e) {
		e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Tt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer)));
		let t = {
			uuid: this.uuid,
			buffer: this.array.buffer._uuid,
			type: this.array.constructor.name,
			stride: this.stride
		};
		return t.usage = this.usage, t;
	}
}, qr = /*@__PURE__*/ new G(), Jr = class e {
	constructor(e, t, n, r = !1) {
		this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r;
	}
	get count() {
		return this.data.count;
	}
	get array() {
		return this.data.array;
	}
	set needsUpdate(e) {
		this.data.needsUpdate = e;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.data.count; t < n; t++) qr.fromBufferAttribute(this, t), qr.applyMatrix4(e), this.setXYZ(t, qr.x, qr.y, qr.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) qr.fromBufferAttribute(this, t), qr.applyNormalMatrix(e), this.setXYZ(t, qr.x, qr.y, qr.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) qr.fromBufferAttribute(this, t), qr.transformDirection(e), this.setXYZ(t, qr.x, qr.y, qr.z);
		return this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.data.stride + this.offset + t];
		return this.normalized && (n = Wt(n, this.array)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = Gt(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
	}
	setX(e, t) {
		return this.normalized && (t = Gt(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
	}
	setY(e, t) {
		return this.normalized && (t = Gt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
	}
	setZ(e, t) {
		return this.normalized && (t = Gt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
	}
	setW(e, t) {
		return this.normalized && (t = Gt(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
	}
	getX(e) {
		let t = this.data.array[e * this.data.stride + this.offset];
		return this.normalized && (t = Wt(t, this.array)), t;
	}
	getY(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 1];
		return this.normalized && (t = Wt(t, this.array)), t;
	}
	getZ(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 2];
		return this.normalized && (t = Wt(t, this.array)), t;
	}
	getW(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 3];
		return this.normalized && (t = Wt(t, this.array)), t;
	}
	setXY(e, t, n) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = Gt(t, this.array), n = Gt(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = Gt(t, this.array), n = Gt(n, this.array), r = Gt(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = Gt(t, this.array), n = Gt(n, this.array), r = Gt(r, this.array), i = Gt(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = i, this;
	}
	clone(t) {
		if (t === void 0) {
			ht("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
			let e = [];
			for (let t = 0; t < this.count; t++) {
				let n = t * this.data.stride + this.offset;
				for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
			}
			return new Ar(new this.array.constructor(e), this.itemSize, this.normalized);
		}
		return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new e(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
	}
	toJSON(e) {
		if (e === void 0) {
			ht("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
			let e = [];
			for (let t = 0; t < this.count; t++) {
				let n = t * this.data.stride + this.offset;
				for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
			}
			return {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: e,
				normalized: this.normalized
			};
		}
		return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
			isInterleavedBufferAttribute: !0,
			itemSize: this.itemSize,
			data: this.data.uuid,
			offset: this.offset,
			normalized: this.normalized
		};
	}
}, Yr = /*@__PURE__*/ new G(), Xr = /*@__PURE__*/ new G(), Zr = /*@__PURE__*/ new K(), Qr = class {
	constructor(e = new G(1, 0, 0), t = 0) {
		this.isPlane = !0, this.normal = e, this.constant = t;
	}
	set(e, t) {
		return this.normal.copy(e), this.constant = t, this;
	}
	setComponents(e, t, n, r) {
		return this.normal.set(e, t, n), this.constant = r, this;
	}
	setFromNormalAndCoplanarPoint(e, t) {
		return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
	}
	setFromCoplanarPoints(e, t, n) {
		let r = Yr.subVectors(n, t).cross(Xr.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(r, e), this;
	}
	copy(e) {
		return this.normal.copy(e.normal), this.constant = e.constant, this;
	}
	normalize() {
		let e = 1 / this.normal.length();
		return this.normal.multiplyScalar(e), this.constant *= e, this;
	}
	negate() {
		return this.constant *= -1, this.normal.negate(), this;
	}
	distanceToPoint(e) {
		return this.normal.dot(e) + this.constant;
	}
	distanceToSphere(e) {
		return this.distanceToPoint(e.center) - e.radius;
	}
	projectPoint(e, t) {
		return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
	}
	intersectLine(e, t, n = !0) {
		let r = e.delta(Yr), i = this.normal.dot(r);
		if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
		let a = -(e.start.dot(this.normal) + this.constant) / i;
		return n === !0 && (a < 0 || a > 1) ? null : t.copy(e.start).addScaledVector(r, a);
	}
	intersectsLine(e) {
		let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
		return t < 0 && n > 0 || n < 0 && t > 0;
	}
	intersectsBox(e) {
		return e.intersectsPlane(this);
	}
	intersectsSphere(e) {
		return e.intersectsPlane(this);
	}
	coplanarPoint(e) {
		return e.copy(this.normal).multiplyScalar(-this.constant);
	}
	applyMatrix4(e, t) {
		let n = t || Zr.getNormalMatrix(e), r = this.coplanarPoint(Yr).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
		return this.constant = -r.dot(i), this;
	}
	translate(e) {
		return this.constant -= e.dot(this.normal), this;
	}
	equals(e) {
		return e.normal.equals(this.normal) && e.constant === this.constant;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			normal: this.normal.toArray(),
			constant: this.constant
		};
	}
	fromJSON(e) {
		return this.normal.fromArray(e.normal), this.constant = e.constant, this;
	}
}, $r = 0, ei = class extends bt {
	constructor() {
		super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: $r++ }), this.uuid = Tt(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Y(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = st, this.stencilZFail = st, this.stencilZPass = st, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
	}
	get alphaTest() {
		return this._alphaTest;
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
	}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(e) {
		if (e !== void 0) for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				V(`Material: parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			r === void 0 ? V(`Material: '${t}' is not a property of THREE.${this.type}.`) : r && r.isColor ? r.set(n) : r && r.isVector2 && n && n.isVector2 || r && r.isEuler && n && n.isEuler || r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		t && (e = {
			textures: {},
			images: {}
		});
		let n = { metadata: {
			version: 4.7,
			type: "Material",
			generator: "Material.toJSON"
		} };
		n.uuid = this.uuid, n.type = this.type, n.blending = this.blending, n.side = this.side, n.shadowSide = this.shadowSide, n.vertexColors = this.vertexColors, n.opacity = this.opacity, n.transparent = this.transparent, n.blendSrc = this.blendSrc, n.blendDst = this.blendDst, n.blendEquation = this.blendEquation, n.blendSrcAlpha = this.blendSrcAlpha, n.blendDstAlpha = this.blendDstAlpha, n.blendEquationAlpha = this.blendEquationAlpha, n.blendColor = this.blendColor.getHex(), n.blendAlpha = this.blendAlpha, n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.clipIntersection = this.clipIntersection, n.clipShadows = this.clipShadows, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, n.stencilWrite = this.stencilWrite, n.polygonOffset = this.polygonOffset, n.polygonOffsetFactor = this.polygonOffsetFactor, n.polygonOffsetUnits = this.polygonOffsetUnits, n.dithering = this.dithering, n.alphaTest = this.alphaTest, n.alphaHash = this.alphaHash, n.alphaToCoverage = this.alphaToCoverage, n.premultipliedAlpha = this.premultipliedAlpha, n.forceSinglePass = this.forceSinglePass, n.allowOverride = this.allowOverride, n.visible = this.visible, n.toneMapped = this.toneMapped, n.name = this.name, this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.retroreflectivity !== void 0 && (n.retroreflectivity = this.retroreflectivity), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), Array.isArray(this.clippingPlanes) && this.clippingPlanes.length > 0 && (n.clippingPlanes = this.clippingPlanes.map((e) => e.toJSON())), this.rotation !== void 0 && (n.rotation = this.rotation), this.depthPacking !== void 0 && (n.depthPacking = this.depthPacking), this.linewidth !== void 0 && (n.linewidth = this.linewidth), this.linecap !== void 0 && (n.linecap = this.linecap), this.linejoin !== void 0 && (n.linejoin = this.linejoin), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.wireframe !== void 0 && (n.wireframe = this.wireframe), this.wireframeLinewidth !== void 0 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== void 0 && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== void 0 && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading !== void 0 && (n.flatShading = this.flatShading), this.fog !== void 0 && (n.fog = this.fog), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
		function r(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
		if (t) {
			let t = r(e.textures), i = r(e.images);
			t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
		}
		return n;
	}
	fromJSON(e, t) {
		if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new Y().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.retroreflectivity !== void 0 && (this.retroreflectivity = e.retroreflectivity), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.clippingPlanes !== void 0 && (this.clippingPlanes = e.clippingPlanes.map((e) => new Qr().fromJSON(e))), e.clipIntersection !== void 0 && (this.clipIntersection = e.clipIntersection), e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows), e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.linecap !== void 0 && (this.linecap = e.linecap), e.linejoin !== void 0 && (this.linejoin = e.linejoin), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (this.vertexColors = typeof e.vertexColors == "number" ? e.vertexColors > 0 : e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
			let t = e.normalScale;
			Array.isArray(t) === !1 && (t = [t, t]), this.normalScale = new W().fromArray(t);
		}
		return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new W().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
		let t = e.clippingPlanes, n = null;
		if (t !== null) {
			let e = t.length;
			n = Array(e);
			for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
		}
		return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
}, ti = class extends ei {
	constructor(e) {
		super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new Y(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
	}
}, ni, ri = /*@__PURE__*/ new G(), ii = /*@__PURE__*/ new G(), ai = /*@__PURE__*/ new G(), oi = /*@__PURE__*/ new W(), si = /*@__PURE__*/ new W(), ci = /*@__PURE__*/ new gn(), li = /*@__PURE__*/ new G(), ui = /*@__PURE__*/ new G(), di = /*@__PURE__*/ new G(), fi = /*@__PURE__*/ new W(), pi = /*@__PURE__*/ new W(), mi = /*@__PURE__*/ new W(), hi = class extends Un {
	constructor(e = new ti()) {
		if (super(), this.isSprite = !0, this.type = "Sprite", ni === void 0) {
			ni = new Gr();
			let e = new Kr(new Float32Array([
				-.5,
				-.5,
				0,
				0,
				0,
				.5,
				-.5,
				0,
				1,
				0,
				.5,
				.5,
				0,
				1,
				1,
				-.5,
				.5,
				0,
				0,
				1
			]), 5);
			ni.setIndex([
				0,
				1,
				2,
				0,
				2,
				3
			]), ni.setAttribute("position", new Jr(e, 3, 0, !1)), ni.setAttribute("uv", new Jr(e, 2, 3, !1));
		}
		this.geometry = ni, this.material = e, this.center = new W(.5, .5), this.count = 1;
	}
	intersectsFrustum(e) {
		return e.intersectsSprite(this);
	}
	raycast(e, t) {
		e.camera === null && H("Sprite: \"Raycaster.camera\" needs to be set in order to raycast against sprites."), ii.setFromMatrixScale(this.matrixWorld), ci.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), ai.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && ii.multiplyScalar(-ai.z);
		let n = this.material.rotation, r, i;
		n !== 0 && (i = Math.cos(n), r = Math.sin(n));
		let a = this.center;
		gi(li.set(-.5, -.5, 0), ai, a, ii, r, i), gi(ui.set(.5, -.5, 0), ai, a, ii, r, i), gi(di.set(.5, .5, 0), ai, a, ii, r, i), fi.set(0, 0), pi.set(1, 0), mi.set(1, 1);
		let o = e.ray.intersectTriangle(li, ui, di, !1, ri);
		if (o === null && (gi(ui.set(-.5, .5, 0), ai, a, ii, r, i), pi.set(0, 1), o = e.ray.intersectTriangle(li, di, ui, !1, ri), o === null)) return;
		let s = e.ray.origin.distanceTo(ri);
		s < e.near || s > e.far || t.push({
			distance: s,
			point: ri.clone(),
			uv: dr.getInterpolation(ri, li, ui, di, fi, pi, mi, new W()),
			face: null,
			object: this
		});
	}
	copy(e, t) {
		return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
	}
};
function gi(e, t, n, r, i, a) {
	oi.subVectors(e, n).addScalar(.5).multiply(r), i === void 0 ? si.copy(oi) : (si.x = a * oi.x - i * oi.y, si.y = i * oi.x + a * oi.y), e.copy(t), e.x += si.x, e.y += si.y, e.applyMatrix4(ci);
}
var _i = /*@__PURE__*/ new G(), vi = /*@__PURE__*/ new G(), yi = /*@__PURE__*/ new G(), bi = /*@__PURE__*/ new G(), xi = class {
	constructor(e = new G(), t = new G(0, 0, -1)) {
		this.origin = e, this.direction = t;
	}
	set(e, t) {
		return this.origin.copy(e), this.direction.copy(t), this;
	}
	copy(e) {
		return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
	}
	at(e, t) {
		return t.copy(this.origin).addScaledVector(this.direction, e);
	}
	lookAt(e) {
		return this.direction.copy(e).sub(this.origin).normalize(), this;
	}
	recast(e) {
		return this.origin.copy(this.at(e, _i)), this;
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		let n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	}
	distanceSqToPoint(e) {
		let t = _i.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (_i.copy(this.origin).addScaledVector(this.direction, t), _i.distanceToSquared(e));
	}
	distanceSqToSegment(e, t, n, r) {
		vi.copy(e).add(t).multiplyScalar(.5), yi.copy(t).sub(e).normalize(), bi.copy(this.origin).sub(vi);
		let i = e.distanceTo(t) * .5, a = -this.direction.dot(yi), o = bi.dot(this.direction), s = -bi.dot(yi), c = bi.lengthSq(), l = Math.abs(1 - a * a), u, d, f, p;
		if (l > 0) {
			if (u = a * s - o, d = a * o - s, p = i * l, u >= 0) {
				if (d >= -p) {
					if (d <= p) {
						let e = 1 / l;
						u *= e, d *= e, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c;
					} else d = i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
				} else d = -i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
			} else d <= -p ? (u = Math.max(0, -(-a * i + o)), d = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c) : d <= p ? (u = 0, d = Math.min(Math.max(-i, -s), i), f = d * (d + 2 * s) + c) : (u = Math.max(0, -(a * i + o)), d = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c);
		} else d = a > 0 ? -i : i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(vi).addScaledVector(yi, d), f;
	}
	intersectSphere(e, t) {
		if (e.radius < 0) return null;
		_i.subVectors(e.center, this.origin);
		let n = _i.dot(this.direction), r = _i.dot(_i) - n * n, i = e.radius * e.radius;
		if (r > i) return null;
		let a = Math.sqrt(i - r), o = n - a, s = n + a;
		return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
	}
	intersectsSphere(e) {
		return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	}
	distanceToPlane(e) {
		let t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		let n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null;
	}
	intersectPlane(e, t) {
		let n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t);
	}
	intersectsPlane(e) {
		let t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0;
	}
	intersectBox(e, t) {
		let n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
		return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), l >= 0 ? (i = (e.min.y - d.y) * l, a = (e.max.y - d.y) * l) : (i = (e.max.y - d.y) * l, a = (e.min.y - d.y) * l), n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - d.z) * u, s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, s = (e.min.z - d.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t);
	}
	intersectsBox(e) {
		return this.intersectBox(e, _i) !== null;
	}
	intersectTriangle(e, t, n, r, i) {
		let a = this.origin, o = this.direction, s = o.x, c = o.y, l = o.z, u = e.x - a.x, d = e.y - a.y, f = e.z - a.z, p = t.x - a.x, m = t.y - a.y, h = t.z - a.z, g = n.x - a.x, _ = n.y - a.y, v = n.z - a.z, y = Math.abs(s), b = Math.abs(c), x = Math.abs(l), S, C, w, T, E, D, O, k, A, j, M, N;
		if (y >= b && y >= x ? (w = s, D = u, A = p, N = g, s >= 0 ? (S = c, C = l, T = d, E = f, O = m, k = h, j = _, M = v) : (S = l, C = c, T = f, E = d, O = h, k = m, j = v, M = _)) : b >= x ? (w = c, D = d, A = m, N = _, c >= 0 ? (S = l, C = s, T = f, E = u, O = h, k = p, j = v, M = g) : (S = s, C = l, T = u, E = f, O = p, k = h, j = g, M = v)) : (w = l, D = f, A = h, N = v, l >= 0 ? (S = s, C = c, T = u, E = d, O = p, k = m, j = g, M = _) : (S = c, C = s, T = d, E = u, O = m, k = p, j = _, M = g)), w === 0) return null;
		let ee = S / w, te = C / w, ne = 1 / w, P = T - ee * D, re = E - te * D, ie = O - ee * A, ae = k - te * A, oe = j - ee * N, se = M - te * N, ce = oe * ae - se * ie, F = P * se - re * oe, I = ie * re - ae * P;
		if (r) {
			if (ce < 0 || F < 0 || I < 0) return null;
		} else if ((ce < 0 || F < 0 || I < 0) && (ce > 0 || F > 0 || I > 0)) return null;
		let le = ce + F + I;
		if (le === 0) return null;
		let ue = ne * (ce * D + F * A + I * N);
		return (le > 0 ? ue < 0 : ue > 0) ? null : this.at(ue / le, i);
	}
	applyMatrix4(e) {
		return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
	}
	equals(e) {
		return e.origin.equals(this.origin) && e.direction.equals(this.direction);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Si = class extends ei {
	constructor(e) {
		super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Y(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new En(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, Ci = /*@__PURE__*/ new gn(), wi = /*@__PURE__*/ new xi(), Ti = /*@__PURE__*/ new Lr(), Ei = /*@__PURE__*/ new G(), Di = /*@__PURE__*/ new G(), Oi = /*@__PURE__*/ new G(), ki = /*@__PURE__*/ new G(), Ai = /*@__PURE__*/ new G(), ji = /*@__PURE__*/ new G(), Mi = /*@__PURE__*/ new G(), Ni = /*@__PURE__*/ new G(), Pi = class extends Un {
	constructor(e = new Gr(), t = new Si()) {
		super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
	getVertexPosition(e, t) {
		let n = this.geometry, r = n.attributes.position, i = n.morphAttributes.position, a = n.morphTargetsRelative;
		t.fromBufferAttribute(r, e);
		let o = this.morphTargetInfluences;
		if (i && o) {
			ji.set(0, 0, 0);
			for (let n = 0, r = i.length; n < r; n++) {
				let r = o[n], s = i[n];
				r !== 0 && (Ai.fromBufferAttribute(s, e), a ? ji.addScaledVector(Ai, r) : ji.addScaledVector(Ai.sub(t), r));
			}
			t.add(ji);
		}
		return t;
	}
	intersectsFrustum(e) {
		return e.intersectsObject(this);
	}
	raycast(e, t) {
		let n = this.geometry, r = this.material, i = this.matrixWorld;
		r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Ti.copy(n.boundingSphere), Ti.applyMatrix4(i), wi.copy(e.ray).recast(e.near), !(Ti.containsPoint(wi.origin) === !1 && (wi.intersectSphere(Ti, Ei) === null || wi.origin.distanceToSquared(Ei) > (e.far - e.near) ** 2)) && (Ci.copy(i).invert(), wi.copy(e.ray).applyMatrix4(Ci), (n.boundingBox === null || wi.intersectsBox(n.boundingBox) !== !1) && this._computeIntersections(e, t, wi)));
	}
	_computeIntersections(e, t, n) {
		let r, i = this.geometry, a = this.material, o = i.index, s = i.attributes.position, c = i.attributes.uv, l = i.attributes.uv1, u = i.attributes.normal, d = i.groups, f = i.drawRange;
		if (o !== null) {
			if (Array.isArray(a)) for (let i = 0, s = d.length; i < s; i++) {
				let s = d[i], p = a[s.materialIndex], m = Math.max(s.start, f.start), h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count));
				for (let i = m, a = h; i < a; i += 3) {
					let a = o.getX(i), d = o.getX(i + 1), f = o.getX(i + 2);
					r = Ii(this, p, e, n, c, l, u, a, d, f), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, t.push(r));
				}
			}
			else {
				let i = Math.max(0, f.start), s = Math.min(o.count, f.start + f.count);
				for (let d = i, f = s; d < f; d += 3) {
					let i = o.getX(d), s = o.getX(d + 1), f = o.getX(d + 2);
					r = Ii(this, a, e, n, c, l, u, i, s, f), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
				}
			}
		} else if (s !== void 0) {
			if (Array.isArray(a)) for (let i = 0, o = d.length; i < o; i++) {
				let o = d[i], p = a[o.materialIndex], m = Math.max(o.start, f.start), h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count));
				for (let i = m, a = h; i < a; i += 3) {
					let a = i, s = i + 1, d = i + 2;
					r = Ii(this, p, e, n, c, l, u, a, s, d), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = o.materialIndex, t.push(r));
				}
			}
			else {
				let i = Math.max(0, f.start), o = Math.min(s.count, f.start + f.count);
				for (let s = i, d = o; s < d; s += 3) {
					let i = s, o = s + 1, d = s + 2;
					r = Ii(this, a, e, n, c, l, u, i, o, d), r && (r.faceIndex = Math.floor(s / 3), t.push(r));
				}
			}
		}
	}
};
function Fi(e, t, n, r, i, a, o, s) {
	let c;
	if (c = t.side === 1 ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === 0, s), c === null) return null;
	Ni.copy(s), Ni.applyMatrix4(e.matrixWorld);
	let l = n.ray.origin.distanceTo(Ni);
	return l < n.near || l > n.far ? null : {
		distance: l,
		point: Ni.clone(),
		object: e
	};
}
function Ii(e, t, n, r, i, a, o, s, c, l) {
	e.getVertexPosition(s, Di), e.getVertexPosition(c, Oi), e.getVertexPosition(l, ki);
	let u = Fi(e, t, n, r, Di, Oi, ki, Mi);
	if (u) {
		let e = new G();
		dr.getBarycoord(Mi, Di, Oi, ki, e), i && (u.uv = dr.getInterpolatedAttribute(i, s, c, l, e, new W())), a && (u.uv1 = dr.getInterpolatedAttribute(a, s, c, l, e, new W())), o && (u.normal = dr.getInterpolatedAttribute(o, s, c, l, e, new G()), u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
		let t = {
			a: s,
			b: c,
			c: l,
			normal: new G(),
			materialIndex: 0
		};
		dr.getNormal(Di, Oi, ki, t.normal), u.face = t, u.barycoord = e;
	}
	return u;
}
var Li = class extends un {
	constructor(e = null, t = 1, n = 1, r, i, a, o, s, c = T, l = T, u, d) {
		super(null, a, o, s, c, l, r, i, u, d), this.isDataTexture = !0, this.image = {
			data: e,
			width: t,
			height: n
		}, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, Ri = /*@__PURE__*/ new Lr(), zi = /*@__PURE__*/ new W(.5, .5), Bi = /*@__PURE__*/ new G(), Vi = class {
	constructor(e = new Qr(), t = new Qr(), n = new Qr(), r = new Qr(), i = new Qr(), a = new Qr()) {
		this.planes = [
			e,
			t,
			n,
			r,
			i,
			a
		];
	}
	set(e, t, n, r, i, a) {
		let o = this.planes;
		return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this;
	}
	copy(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
		return this;
	}
	setFromProjectionMatrix(e, t = lt, n = !1) {
		let r = this.planes, i = e.elements, a = i[0], o = i[1], s = i[2], c = i[3], l = i[4], u = i[5], d = i[6], f = i[7], p = i[8], m = i[9], h = i[10], g = i[11], _ = i[12], v = i[13], y = i[14], b = i[15];
		if (r[0].setComponents(c - a, f - l, g - p, b - _).normalize(), r[1].setComponents(c + a, f + l, g + p, b + _).normalize(), r[2].setComponents(c + o, f + u, g + m, b + v).normalize(), r[3].setComponents(c - o, f - u, g - m, b - v).normalize(), n) r[4].setComponents(s, d, h, y).normalize(), r[5].setComponents(c - s, f - d, g - h, b - y).normalize();
		else if (r[4].setComponents(c - s, f - d, g - h, b - y).normalize(), t === 2e3) r[5].setComponents(c + s, f + d, g + h, b + y).normalize();
		else if (t === 2001) r[5].setComponents(s, d, h, y).normalize();
		else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
		return this;
	}
	intersectsObject(e) {
		if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
		else {
			let t = e.geometry;
			t.boundingSphere === null && t.computeBoundingSphere(), Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
		}
		return this.intersectsSphere(Ri);
	}
	intersectsSprite(e) {
		return Ri.center.set(0, 0, 0), Ri.radius = .7071067811865476 + zi.distanceTo(e.center), Ri.applyMatrix4(e.matrixWorld), this.intersectsSphere(Ri);
	}
	intersectsSphere(e) {
		let t = this.planes, n = e.center, r = -e.radius;
		for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
		return !0;
	}
	intersectsBox(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) {
			let r = t[n];
			if (Bi.x = r.normal.x > 0 ? e.max.x : e.min.x, Bi.y = r.normal.y > 0 ? e.max.y : e.min.y, Bi.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Bi) < 0) return !1;
		}
		return !0;
	}
	containsPoint(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
		return !0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Hi = class extends un {
	constructor(e = [], t = 301, n, r, i, a, o, s, c, l) {
		super(e, t, n, r, i, a, o, s, c, l), this.isCubeTexture = !0, this.flipY = !1;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, Ui = class extends un {
	constructor(e, t, n, r, i, a, o, s, c) {
		super(e, t, n, r, i, a, o, s, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
	}
}, Wi = class extends un {
	constructor(e, t, n = ne, r, i, a, o = T, s = T, c, l = ue, u = 1) {
		if (l !== 1026 && l !== 1027) throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		super({
			width: e,
			height: t,
			depth: u
		}, r, i, a, o, s, l, n, c), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
	}
	copy(e) {
		return super.copy(e), this.source = new on(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.compareFunction = this.compareFunction, t;
	}
}, Gi = class extends Wi {
	constructor(e, t = ne, n = 301, r, i, a = T, o = T, s, c = ue) {
		let l = {
			width: e,
			height: e,
			depth: 1
		}, u = [
			l,
			l,
			l,
			l,
			l,
			l
		];
		super(e, e, t, n, r, i, a, o, s, c), this.image = u, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, Ki = class extends un {
	constructor(e = null) {
		super(), this.sourceTexture = e, this.isExternalTexture = !0;
	}
	copy(e) {
		return super.copy(e), this.sourceTexture = e.sourceTexture, this;
	}
}, qi = class e extends Gr {
	constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
		super(), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: a
		};
		let o = this;
		r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);
		let s = [], c = [], l = [], u = [], d = 0, f = 0;
		p("z", "y", "x", -1, -1, n, t, e, a, i, 0), p("z", "y", "x", 1, -1, n, t, -e, a, i, 1), p("x", "z", "y", 1, 1, e, n, t, r, a, 2), p("x", "z", "y", 1, -1, e, n, -t, r, a, 3), p("x", "y", "z", 1, -1, e, t, n, r, i, 4), p("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(s), this.setAttribute("position", new Nr(c, 3)), this.setAttribute("normal", new Nr(l, 3)), this.setAttribute("uv", new Nr(u, 2));
		function p(e, t, n, r, i, a, p, m, h, g, _) {
			let v = a / h, y = p / g, b = a / 2, x = p / 2, S = m / 2, C = h + 1, w = g + 1, T = 0, E = 0, D = new G();
			for (let a = 0; a < w; a++) {
				let o = a * y - x;
				for (let s = 0; s < C; s++) D[e] = (s * v - b) * r, D[t] = o * i, D[n] = S, c.push(D.x, D.y, D.z), D[e] = 0, D[t] = 0, D[n] = m > 0 ? 1 : -1, l.push(D.x, D.y, D.z), u.push(s / h), u.push(1 - a / g), T += 1;
			}
			for (let e = 0; e < g; e++) for (let t = 0; t < h; t++) {
				let n = d + t + C * e, r = d + t + C * (e + 1), i = d + (t + 1) + C * (e + 1), a = d + (t + 1) + C * e;
				s.push(n, r, a), s.push(r, i, a), E += 6;
			}
			o.addGroup(f, E, _), f += E, d += T;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
	}
}, Ji = class e extends Gr {
	constructor(e = 1, t = 1, n = 1, r = 32, i = 1, a = !1, o = 0, s = Math.PI * 2) {
		super(), this.type = "CylinderGeometry", this.parameters = {
			radiusTop: e,
			radiusBottom: t,
			height: n,
			radialSegments: r,
			heightSegments: i,
			openEnded: a,
			thetaStart: o,
			thetaLength: s
		};
		let c = this;
		r = Math.floor(r), i = Math.floor(i);
		let l = [], u = [], d = [], f = [], p = 0, m = [], h = n / 2, g = 0;
		_(), a === !1 && (e > 0 && v(!0), t > 0 && v(!1)), this.setIndex(l), this.setAttribute("position", new Nr(u, 3)), this.setAttribute("normal", new Nr(d, 3)), this.setAttribute("uv", new Nr(f, 2));
		function _() {
			let a = new G(), _ = new G(), v = 0, y = (t - e) / n;
			for (let c = 0; c <= i; c++) {
				let l = [], g = c / i, v = g * (t - e) + e;
				for (let e = 0; e <= r; e++) {
					let t = e / r, i = t * s + o, c = Math.sin(i), m = Math.cos(i);
					_.x = v * c, _.y = -g * n + h, _.z = v * m, u.push(_.x, _.y, _.z), a.set(c, y, m).normalize(), d.push(a.x, a.y, a.z), f.push(t, 1 - g), l.push(p++);
				}
				m.push(l);
			}
			for (let n = 0; n < r; n++) for (let r = 0; r < i; r++) {
				let a = m[r][n], o = m[r + 1][n], s = m[r + 1][n + 1], c = m[r][n + 1];
				(e > 0 || r !== 0) && (l.push(a, o, c), v += 3), (t > 0 || r !== i - 1) && (l.push(o, s, c), v += 3);
			}
			c.addGroup(g, v, 0), g += v;
		}
		function v(n) {
			let i = p, a = new W(), m = new G(), _ = 0, v = n === !0 ? e : t, y = n === !0 ? 1 : -1;
			for (let e = 1; e <= r; e++) u.push(0, h * y, 0), d.push(0, y, 0), f.push(.5, .5), p++;
			let b = p;
			for (let e = 0; e <= r; e++) {
				let t = e / r * s + o, n = Math.cos(t), i = Math.sin(t);
				m.x = v * i, m.y = h * y, m.z = v * n, u.push(m.x, m.y, m.z), d.push(0, y, 0), a.x = n * .5 + .5, a.y = i * .5 * y + .5, f.push(a.x, a.y), p++;
			}
			for (let e = 0; e < r; e++) {
				let t = i + e, r = b + e;
				n === !0 ? l.push(r, r + 1, t) : l.push(r + 1, r, t), _ += 3;
			}
			c.addGroup(g, _, n === !0 ? 1 : 2), g += _;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
	}
}, Yi = class e extends Gr {
	constructor(e = [], t = [], n = 1, r = 0) {
		super(), this.type = "PolyhedronGeometry", this.parameters = {
			vertices: e,
			indices: t,
			radius: n,
			detail: r
		};
		let i = [], a = [];
		o(r), c(n), l(), this.setAttribute("position", new Nr(i, 3)), this.setAttribute("normal", new Nr(i.slice(), 3)), this.setAttribute("uv", new Nr(a, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
		function o(e) {
			let n = new G(), r = new G(), i = new G();
			for (let a = 0; a < t.length; a += 3) f(t[a + 0], n), f(t[a + 1], r), f(t[a + 2], i), s(n, r, i, e);
		}
		function s(e, t, n, r) {
			let i = r + 1, a = [];
			for (let r = 0; r <= i; r++) {
				a[r] = [];
				let o = e.clone().lerp(n, r / i), s = t.clone().lerp(n, r / i), c = i - r;
				for (let e = 0; e <= c; e++) e === 0 && r === i ? a[r][e] = o : a[r][e] = o.clone().lerp(s, e / c);
			}
			for (let e = 0; e < i; e++) for (let t = 0; t < 2 * (i - e) - 1; t++) {
				let n = Math.floor(t / 2);
				t % 2 == 0 ? (d(a[e][n + 1]), d(a[e + 1][n]), d(a[e][n])) : (d(a[e][n + 1]), d(a[e + 1][n + 1]), d(a[e + 1][n]));
			}
		}
		function c(e) {
			let t = new G();
			for (let n = 0; n < i.length; n += 3) t.x = i[n + 0], t.y = i[n + 1], t.z = i[n + 2], t.normalize().multiplyScalar(e), i[n + 0] = t.x, i[n + 1] = t.y, i[n + 2] = t.z;
		}
		function l() {
			let e = new G();
			for (let t = 0; t < i.length; t += 3) {
				e.x = i[t + 0], e.y = i[t + 1], e.z = i[t + 2];
				let n = h(e) / 2 / Math.PI + .5, r = g(e) / Math.PI + .5;
				a.push(n, 1 - r);
			}
			p(), u();
		}
		function u() {
			for (let e = 0; e < a.length; e += 6) {
				let t = a[e + 0], n = a[e + 2], r = a[e + 4];
				Math.max(t, n, r) > .9 && Math.min(t, n, r) < .1 && (t < .2 && (a[e + 0] += 1), n < .2 && (a[e + 2] += 1), r < .2 && (a[e + 4] += 1));
			}
		}
		function d(e) {
			i.push(e.x, e.y, e.z);
		}
		function f(t, n) {
			let r = t * 3;
			n.x = e[r + 0], n.y = e[r + 1], n.z = e[r + 2];
		}
		function p() {
			let e = new G(), t = new G(), n = new G(), r = new G(), o = new W(), s = new W(), c = new W();
			for (let l = 0, u = 0; l < i.length; l += 9, u += 6) {
				e.set(i[l + 0], i[l + 1], i[l + 2]), t.set(i[l + 3], i[l + 4], i[l + 5]), n.set(i[l + 6], i[l + 7], i[l + 8]), o.set(a[u + 0], a[u + 1]), s.set(a[u + 2], a[u + 3]), c.set(a[u + 4], a[u + 5]), r.copy(e).add(t).add(n).divideScalar(3);
				let d = h(r);
				m(o, u + 0, e, d), m(s, u + 2, t, d), m(c, u + 4, n, d);
			}
		}
		function m(e, t, n, r) {
			r < 0 && e.x === 1 && (a[t] = e.x - 1), n.x === 0 && n.z === 0 && (a[t] = r / 2 / Math.PI + .5);
		}
		function h(e) {
			return Math.atan2(e.z, -e.x);
		}
		function g(e) {
			return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z));
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.vertices, t.indices, t.radius, t.detail);
	}
}, Xi = class {
	constructor() {
		this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null;
	}
	getPoint() {
		V("Curve: .getPoint() not implemented.");
	}
	getPointAt(e, t) {
		let n = this.getUtoTmapping(e);
		return this.getPoint(n, t);
	}
	getPoints(e = 5) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return t;
	}
	getSpacedPoints(e = 5) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
		return t;
	}
	getLength() {
		let e = this.getLengths();
		return e[e.length - 1];
	}
	getLengths(e = this.arcLengthDivisions) {
		if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
		this.needsUpdate = !1;
		let t = [], n, r = this.getPoint(0), i = 0;
		t.push(0);
		for (let a = 1; a <= e; a++) n = this.getPoint(a / e), i += n.distanceTo(r), t.push(i), r = n;
		return this.cacheArcLengths = t, t;
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.getLengths();
	}
	getUtoTmapping(e, t = null) {
		let n = this.getLengths(), r = 0, i = n.length, a;
		a = t || e * n[i - 1];
		let o = 0, s = i - 1, c;
		for (; o <= s;) if (r = Math.floor(o + (s - o) / 2), c = n[r] - a, c < 0) o = r + 1;
		else if (c > 0) s = r - 1;
		else {
			s = r;
			break;
		}
		if (r = s, n[r] === a) return r / (i - 1);
		let l = n[r], u = n[r + 1] - l, d = (a - l) / u;
		return (r + d) / (i - 1);
	}
	getTangent(e, t) {
		let n = 1e-4, r = e - n, i = e + n;
		r < 0 && (r = 0), i > 1 && (i = 1);
		let a = this.getPoint(r), o = this.getPoint(i), s = t || (a.isVector2 ? new W() : new G());
		return s.copy(o).sub(a).normalize(), s;
	}
	getTangentAt(e, t) {
		let n = this.getUtoTmapping(e);
		return this.getTangent(n, t);
	}
	computeFrenetFrames(e, t = !1) {
		let n = new G(), r = [], i = [], a = [], o = new G(), s = new gn();
		for (let t = 0; t <= e; t++) {
			let n = t / e;
			r[t] = this.getTangentAt(n, new G());
		}
		i[0] = new G(), a[0] = new G();
		let c = Number.MAX_VALUE, l = Math.abs(r[0].x), u = Math.abs(r[0].y), d = Math.abs(r[0].z);
		l <= c && (c = l, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), o.crossVectors(r[0], n).normalize(), i[0].crossVectors(r[0], o), a[0].crossVectors(r[0], i[0]);
		for (let t = 1; t <= e; t++) {
			if (i[t] = i[t - 1].clone(), a[t] = a[t - 1].clone(), o.crossVectors(r[t - 1], r[t]), o.length() > 2 ** -52) {
				o.normalize();
				let e = Math.acos(U(r[t - 1].dot(r[t]), -1, 1));
				i[t].applyMatrix4(s.makeRotationAxis(o, e));
			}
			a[t].crossVectors(r[t], i[t]);
		}
		if (t === !0) {
			let t = Math.acos(U(i[0].dot(i[e]), -1, 1));
			t /= e, r[0].dot(o.crossVectors(i[0], i[e])) > 0 && (t = -t);
			for (let n = 1; n <= e; n++) i[n].applyMatrix4(s.makeRotationAxis(r[n], t * n)), a[n].crossVectors(r[n], i[n]);
		}
		return {
			tangents: r,
			normals: i,
			binormals: a
		};
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "Curve",
			generator: "Curve.toJSON"
		} };
		return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
	}
	fromJSON(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this;
	}
}, Zi = class extends Xi {
	constructor(e = 0, t = 0, n = 1, r = 1, i = 0, a = Math.PI * 2, o = !1, s = 0) {
		super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = r, this.aStartAngle = i, this.aEndAngle = a, this.aClockwise = o, this.aRotation = s;
	}
	getPoint(e, t = new W()) {
		let n = t, r = Math.PI * 2, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < 2 ** -52;
		for (; i < 0;) i += r;
		for (; i > r;) i -= r;
		i < 2 ** -52 && (i = a ? 0 : r), this.aClockwise === !0 && !a && (i === r ? i = -r : i -= r);
		let o = this.aStartAngle + e * i, s = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
		if (this.aRotation !== 0) {
			let e = Math.cos(this.aRotation), t = Math.sin(this.aRotation), n = s - this.aX, r = c - this.aY;
			s = n * e - r * t + this.aX, c = n * t + r * e + this.aY;
		}
		return n.set(s, c);
	}
	copy(e) {
		return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
	}
}, Qi = class extends Zi {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, n, r, i, a), this.isArcCurve = !0, this.type = "ArcCurve";
	}
};
function $i() {
	let e = 0, t = 0, n = 0, r = 0;
	function i(i, a, o, s) {
		e = i, t = o, n = -3 * i + 3 * a - 2 * o - s, r = 2 * i - 2 * a + o + s;
	}
	return {
		initCatmullRom: function(e, t, n, r, a) {
			i(t, n, a * (n - e), a * (r - t));
		},
		initNonuniformCatmullRom: function(e, t, n, r, a, o, s) {
			let c = (t - e) / a - (n - e) / (a + o) + (n - t) / o, l = (n - t) / o - (r - t) / (o + s) + (r - n) / s;
			c *= o, l *= o, i(t, n, c, l);
		},
		calc: function(i) {
			let a = i * i, o = a * i;
			return e + t * i + n * a + r * o;
		}
	};
}
var ea = /*@__PURE__*/ new G(), ta = /*@__PURE__*/ new G(), na = /*@__PURE__*/ new $i(), ra = /*@__PURE__*/ new $i(), ia = /*@__PURE__*/ new $i(), aa = class extends Xi {
	constructor(e = [], t = !1, n = "centripetal", r = .5) {
		super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = r;
	}
	getPoint(e, t = new G()) {
		let n = t, r = this.points, i = r.length, a = (i - +!this.closed) * e, o = Math.floor(a), s = a - o;
		this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / i) + 1) * i : s === 0 && o === i - 1 && (o = i - 2, s = 1);
		let c, l;
		this.closed || o > 0 ? c = r[(o - 1) % i] : (ta.subVectors(r[0], r[1]).add(r[0]), c = ta);
		let u = r[o % i], d = r[(o + 1) % i];
		if (this.closed || o + 2 < i ? l = r[(o + 2) % i] : (ea.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), l = ea), this.curveType === "centripetal" || this.curveType === "chordal") {
			let e = this.curveType === "chordal" ? .5 : .25, t = c.distanceToSquared(u) ** +e, n = u.distanceToSquared(d) ** +e, r = d.distanceToSquared(l) ** +e;
			n < 1e-4 && (n = 1), t < 1e-4 && (t = n), r < 1e-4 && (r = n), na.initNonuniformCatmullRom(c.x, u.x, d.x, l.x, t, n, r), ra.initNonuniformCatmullRom(c.y, u.y, d.y, l.y, t, n, r), ia.initNonuniformCatmullRom(c.z, u.z, d.z, l.z, t, n, r);
		} else this.curveType === "catmullrom" && (na.initCatmullRom(c.x, u.x, d.x, l.x, this.tension), ra.initCatmullRom(c.y, u.y, d.y, l.y, this.tension), ia.initCatmullRom(c.z, u.z, d.z, l.z, this.tension));
		return n.set(na.calc(s), ra.calc(s), ia.calc(s)), n;
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(n.clone());
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
	}
	toJSON() {
		let e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t];
			e.points.push(n.toArray());
		}
		return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(new G().fromArray(n));
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
	}
};
function oa(e, t, n, r, i) {
	let a = (r - t) * .5, o = (i - n) * .5, s = e * e, c = e * s;
	return (2 * n - 2 * r + a + o) * c + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n;
}
function sa(e, t) {
	let n = 1 - e;
	return n * n * t;
}
function ca(e, t) {
	return 2 * (1 - e) * e * t;
}
function la(e, t) {
	return e * e * t;
}
function ua(e, t, n, r) {
	return sa(e, t) + ca(e, n) + la(e, r);
}
function da(e, t) {
	let n = 1 - e;
	return n * n * n * t;
}
function fa(e, t) {
	let n = 1 - e;
	return 3 * n * n * e * t;
}
function pa(e, t) {
	return 3 * (1 - e) * e * e * t;
}
function ma(e, t) {
	return e * e * e * t;
}
function ha(e, t, n, r, i) {
	return da(e, t) + fa(e, n) + pa(e, r) + ma(e, i);
}
var ga = class extends Xi {
	constructor(e = new W(), t = new W(), n = new W(), r = new W()) {
		super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
	}
	getPoint(e, t = new W()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2, o = this.v3;
		return n.set(ha(e, r.x, i.x, a.x, o.x), ha(e, r.y, i.y, a.y, o.y)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}, _a = class extends Xi {
	constructor(e = new G(), t = new G(), n = new G(), r = new G()) {
		super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
	}
	getPoint(e, t = new G()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2, o = this.v3;
		return n.set(ha(e, r.x, i.x, a.x, o.x), ha(e, r.y, i.y, a.y, o.y), ha(e, r.z, i.z, a.z, o.z)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}, va = class extends Xi {
	constructor(e = new W(), t = new W()) {
		super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
	}
	getPoint(e, t = new W()) {
		let n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	getTangent(e, t = new W()) {
		return t.subVectors(this.v2, this.v1).normalize();
	}
	getTangentAt(e, t) {
		return this.getTangent(e, t);
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, ya = class extends Xi {
	constructor(e = new G(), t = new G()) {
		super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
	}
	getPoint(e, t = new G()) {
		let n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	getTangent(e, t = new G()) {
		return t.subVectors(this.v2, this.v1).normalize();
	}
	getTangentAt(e, t) {
		return this.getTangent(e, t);
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, ba = class extends Xi {
	constructor(e = new W(), t = new W(), n = new W()) {
		super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
	}
	getPoint(e, t = new W()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2;
		return n.set(ua(e, r.x, i.x, a.x), ua(e, r.y, i.y, a.y)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, xa = class extends Xi {
	constructor(e = new G(), t = new G(), n = new G()) {
		super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
	}
	getPoint(e, t = new G()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2;
		return n.set(ua(e, r.x, i.x, a.x), ua(e, r.y, i.y, a.y), ua(e, r.z, i.z, a.z)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, Sa = class extends Xi {
	constructor(e = []) {
		super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
	}
	getPoint(e, t = new W()) {
		let n = t, r = this.points, i = (r.length - 1) * e, a = Math.floor(i), o = i - a, s = r[a === 0 ? a : a - 1], c = r[a], l = r[a > r.length - 2 ? r.length - 1 : a + 1], u = r[a > r.length - 3 ? r.length - 1 : a + 2];
		return n.set(oa(o, s.x, c.x, l.x, u.x), oa(o, s.y, c.y, l.y, u.y)), n;
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(n.clone());
		}
		return this;
	}
	toJSON() {
		let e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t];
			e.points.push(n.toArray());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(new W().fromArray(n));
		}
		return this;
	}
}, Ca = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ArcCurve: Qi,
	CatmullRomCurve3: aa,
	CubicBezierCurve: ga,
	CubicBezierCurve3: _a,
	EllipseCurve: Zi,
	LineCurve: va,
	LineCurve3: ya,
	QuadraticBezierCurve: ba,
	QuadraticBezierCurve3: xa,
	SplineCurve: Sa
}), wa = class extends Xi {
	constructor() {
		super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
	}
	add(e) {
		this.curves.push(e);
	}
	closePath() {
		let e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
		if (!e.equals(t)) {
			let n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3";
			this.curves.push(new Ca[n](t, e));
		}
		return this;
	}
	getPoint(e, t) {
		let n = e * this.getLength(), r = this.getCurveLengths(), i = 0;
		for (; i < r.length;) {
			if (r[i] >= n) {
				let e = r[i] - n, a = this.curves[i], o = a.getLength(), s = o === 0 ? 0 : 1 - e / o;
				return a.getPointAt(s, t);
			}
			i++;
		}
		return null;
	}
	getLength() {
		let e = this.getCurveLengths();
		return e[e.length - 1];
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
	}
	getCurveLengths() {
		if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
		let e = [], t = 0;
		for (let n = 0, r = this.curves.length; n < r; n++) t += this.curves[n].getLength(), e.push(t);
		return this.cacheLengths = e, e;
	}
	getSpacedPoints(e = 40) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return this.autoClose && t.push(t[0]), t;
	}
	getPoints(e = 12) {
		let t = [], n;
		for (let r = 0, i = this.curves; r < i.length; r++) {
			let a = i[r], o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o);
			for (let e = 0; e < s.length; e++) {
				let r = s[e];
				n && n.equals(r) || (t.push(r), n = r);
			}
		}
		return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
	}
	copy(e) {
		super.copy(e), this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			let n = e.curves[t];
			this.curves.push(n.clone());
		}
		return this.autoClose = e.autoClose, this;
	}
	toJSON() {
		let e = super.toJSON();
		e.autoClose = this.autoClose, e.curves = [];
		for (let t = 0, n = this.curves.length; t < n; t++) {
			let n = this.curves[t];
			e.curves.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			let n = e.curves[t];
			this.curves.push(new Ca[n.type]().fromJSON(n));
		}
		return this;
	}
}, Ta = class extends wa {
	constructor(e) {
		super(), this.type = "Path", this.currentPoint = new W(), e && this.setFromPoints(e);
	}
	setFromPoints(e) {
		this.moveTo(e[0].x, e[0].y);
		for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
		return this;
	}
	moveTo(e, t) {
		return this.currentPoint.set(e, t), this;
	}
	lineTo(e, t) {
		let n = new va(this.currentPoint.clone(), new W(e, t));
		return this.curves.push(n), this.currentPoint.set(e, t), this;
	}
	quadraticCurveTo(e, t, n, r) {
		let i = new ba(this.currentPoint.clone(), new W(e, t), new W(n, r));
		return this.curves.push(i), this.currentPoint.set(n, r), this;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		let o = new ga(this.currentPoint.clone(), new W(e, t), new W(n, r), new W(i, a));
		return this.curves.push(o), this.currentPoint.set(i, a), this;
	}
	splineThru(e) {
		let t = new Sa([this.currentPoint.clone()].concat(e));
		return this.curves.push(t), this.currentPoint.copy(e[e.length - 1]), this;
	}
	arc(e, t, n, r, i, a) {
		let o = this.currentPoint.x, s = this.currentPoint.y;
		return this.absarc(e + o, t + s, n, r, i, a), this;
	}
	absarc(e, t, n, r, i, a) {
		return this.absellipse(e, t, n, n, r, i, a), this;
	}
	ellipse(e, t, n, r, i, a, o, s) {
		let c = this.currentPoint.x, l = this.currentPoint.y;
		return this.absellipse(e + c, t + l, n, r, i, a, o, s), this;
	}
	absellipse(e, t, n, r, i, a, o, s) {
		let c = new Zi(e, t, n, r, i, a, o, s);
		if (this.curves.length > 0) {
			let e = c.getPoint(0);
			e.equals(this.currentPoint) || this.lineTo(e.x, e.y);
		}
		this.curves.push(c);
		let l = c.getPoint(1);
		return this.currentPoint.copy(l), this;
	}
	copy(e) {
		return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.currentPoint = this.currentPoint.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
	}
}, Ea = class extends Ta {
	constructor(e) {
		super(e), this.uuid = Tt(), this.type = "Shape", this.holes = [];
	}
	getPointsHoles(e) {
		let t = [];
		for (let n = 0, r = this.holes.length; n < r; n++) t[n] = this.holes[n].getPoints(e);
		return t;
	}
	extractPoints(e) {
		return {
			shape: this.getPoints(e),
			holes: this.getPointsHoles(e)
		};
	}
	copy(e) {
		super.copy(e), this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			let n = e.holes[t];
			this.holes.push(n.clone());
		}
		return this;
	}
	toJSON() {
		let e = super.toJSON();
		e.uuid = this.uuid, e.holes = [];
		for (let t = 0, n = this.holes.length; t < n; t++) {
			let n = this.holes[t];
			e.holes.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			let n = e.holes[t];
			this.holes.push(new Ta().fromJSON(n));
		}
		return this;
	}
};
function Da(e, t, n = 2) {
	let r = t && t.length, i = r ? t[0] * n : e.length, a = Oa(e, 0, i, n, !0), o = [];
	if (!a || a.next === a.prev) return o;
	let s, c, l;
	if (r && (a = Fa(e, t, a, n)), e.length > 80 * n) {
		s = e[0], c = e[1];
		let t = s, r = c;
		for (let a = n; a < i; a += n) {
			let n = e[a], i = e[a + 1];
			n < s && (s = n), i < c && (c = i), n > t && (t = n), i > r && (r = i);
		}
		l = Math.max(t - s, r - c), l = l === 0 ? 0 : 32767 / l;
	}
	return Aa(a, o, n, s, c, l, 0), o;
}
function Oa(e, t, n, r, i) {
	let a;
	if (i === ao(e, t, n, r) > 0) for (let i = t; i < n; i += r) a = no(i / r | 0, e[i], e[i + 1], a);
	else for (let i = n - r; i >= t; i -= r) a = no(i / r | 0, e[i], e[i + 1], a);
	return a && Ja(a, a.next) && (ro(a), a = a.next), a;
}
function ka(e, t) {
	if (!e) return e;
	t || (t = e);
	let n = e, r;
	do
		if (r = !1, !n.steiner && (Ja(n, n.next) || qa(n.prev, n, n.next) === 0)) {
			if (ro(n), n = t = n.prev, n === n.next) break;
			r = !0;
		} else n = n.next;
	while (r || n !== t);
	return t;
}
function Aa(e, t, n, r, i, a, o) {
	if (!e) return;
	!o && a && Ba(e, r, i, a);
	let s = e;
	for (; e.prev !== e.next;) {
		let c = e.prev, l = e.next;
		if (a ? Ma(e, r, i, a) : ja(e)) t.push(c.i, e.i, l.i), ro(e), e = l.next, s = l.next;
		else if (e = l, e === s) {
			o ? o === 1 ? (e = Na(ka(e), t), Aa(e, t, n, r, i, a, 2)) : o === 2 && Pa(e, t, n, r, i, a) : Aa(ka(e), t, n, r, i, a, 1);
			break;
		}
	}
}
function ja(e) {
	let t = e.prev, n = e, r = e.next;
	if (qa(t, n, r) >= 0) return !1;
	let i = t.x, a = n.x, o = r.x, s = t.y, c = n.y, l = r.y, u = Math.min(i, a, o), d = Math.min(s, c, l), f = Math.max(i, a, o), p = Math.max(s, c, l), m = r.next;
	for (; m !== t;) {
		if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && Ga(i, s, a, c, o, l, m.x, m.y) && qa(m.prev, m, m.next) >= 0) return !1;
		m = m.next;
	}
	return !0;
}
function Ma(e, t, n, r) {
	let i = e.prev, a = e, o = e.next;
	if (qa(i, a, o) >= 0) return !1;
	let s = i.x, c = a.x, l = o.x, u = i.y, d = a.y, f = o.y, p = Math.min(s, c, l), m = Math.min(u, d, f), h = Math.max(s, c, l), g = Math.max(u, d, f), _ = Ha(p, m, t, n, r), v = Ha(h, g, t, n, r), y = e.prevZ, b = e.nextZ;
	for (; y && y.z >= _ && b && b.z <= v;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && Ga(s, u, c, d, l, f, y.x, y.y) && qa(y.prev, y, y.next) >= 0 || (y = y.prevZ, b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && Ga(s, u, c, d, l, f, b.x, b.y) && qa(b.prev, b, b.next) >= 0)) return !1;
		b = b.nextZ;
	}
	for (; y && y.z >= _;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && Ga(s, u, c, d, l, f, y.x, y.y) && qa(y.prev, y, y.next) >= 0) return !1;
		y = y.prevZ;
	}
	for (; b && b.z <= v;) {
		if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && Ga(s, u, c, d, l, f, b.x, b.y) && qa(b.prev, b, b.next) >= 0) return !1;
		b = b.nextZ;
	}
	return !0;
}
function Na(e, t) {
	let n = e;
	do {
		let r = n.prev, i = n.next.next;
		!Ja(r, i) && Ya(r, n, n.next, i) && $a(r, i) && $a(i, r) && (t.push(r.i, n.i, i.i), ro(n), ro(n.next), n = e = i), n = n.next;
	} while (n !== e);
	return ka(n);
}
function Pa(e, t, n, r, i, a) {
	let o = e;
	do {
		let e = o.next.next;
		for (; e !== o.prev;) {
			if (o.i !== e.i && Ka(o, e)) {
				let s = to(o, e);
				o = ka(o, o.next), s = ka(s, s.next), Aa(o, t, n, r, i, a, 0), Aa(s, t, n, r, i, a, 0);
				return;
			}
			e = e.next;
		}
		o = o.next;
	} while (o !== e);
}
function Fa(e, t, n, r) {
	let i = [];
	for (let n = 0, a = t.length; n < a; n++) {
		let o = Oa(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, !1);
		o === o.next && (o.steiner = !0), i.push(Ua(o));
	}
	i.sort(Ia);
	for (let e = 0; e < i.length; e++) n = La(i[e], n);
	return n;
}
function Ia(e, t) {
	let n = e.x - t.x;
	return n === 0 && (n = e.y - t.y, n === 0 && (n = (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x))), n;
}
function La(e, t) {
	let n = Ra(e, t);
	if (!n) return t;
	let r = to(n, e);
	return ka(r, r.next), ka(n, n.next);
}
function Ra(e, t) {
	let n = t, r = e.x, i = e.y, a = -Infinity, o;
	if (Ja(e, n)) return n;
	do {
		if (Ja(e, n.next)) return n.next;
		if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
			let e = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
			if (e <= r && e > a && (a = e, o = n.x < n.next.x ? n : n.next, e === r)) return o;
		}
		n = n.next;
	} while (n !== t);
	if (!o) return null;
	let s = o, c = o.x, l = o.y, u = Infinity;
	n = o;
	do {
		if (r >= n.x && n.x >= c && r !== n.x && Wa(i < l ? r : a, i, c, l, i < l ? a : r, i, n.x, n.y)) {
			let t = Math.abs(i - n.y) / (r - n.x);
			$a(n, e) && (t < u || t === u && (n.x > o.x || n.x === o.x && za(o, n))) && (o = n, u = t);
		}
		n = n.next;
	} while (n !== s);
	return o;
}
function za(e, t) {
	return qa(e.prev, e, t.prev) < 0 && qa(t.next, e, e.next) < 0;
}
function Ba(e, t, n, r) {
	let i = e;
	do
		i.z === 0 && (i.z = Ha(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
	while (i !== e);
	i.prevZ.nextZ = null, i.prevZ = null, Va(i);
}
function Va(e) {
	let t, n = 1;
	do {
		let r = e, i;
		e = null;
		let a = null;
		for (t = 0; r;) {
			t++;
			let o = r, s = 0;
			for (let e = 0; e < n && (s++, o = o.nextZ, o); e++);
			let c = n;
			for (; s > 0 || c > 0 && o;) s !== 0 && (c === 0 || !o || r.z <= o.z) ? (i = r, r = r.nextZ, s--) : (i = o, o = o.nextZ, c--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
			r = o;
		}
		a.nextZ = null, n *= 2;
	} while (t > 1);
	return e;
}
function Ha(e, t, n, r, i) {
	return e = (e - n) * i | 0, t = (t - r) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function Ua(e) {
	let t = e, n = e;
	do
		(t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
	while (t !== e);
	return n;
}
function Wa(e, t, n, r, i, a, o, s) {
	return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s);
}
function Ga(e, t, n, r, i, a, o, s) {
	return (e !== o || t !== s) && Wa(e, t, n, r, i, a, o, s);
}
function Ka(e, t) {
	return e.next.i !== t.i && e.prev.i !== t.i && !Qa(e, t) && ($a(e, t) && $a(t, e) && eo(e, t) && (qa(e.prev, e, t.prev) || qa(e, t.prev, t)) || Ja(e, t) && qa(e.prev, e, e.next) > 0 && qa(t.prev, t, t.next) > 0);
}
function qa(e, t, n) {
	return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function Ja(e, t) {
	return e.x === t.x && e.y === t.y;
}
function Ya(e, t, n, r) {
	let i = Za(qa(e, t, n)), a = Za(qa(e, t, r)), o = Za(qa(n, r, e)), s = Za(qa(n, r, t));
	return !!(i !== a && o !== s || i === 0 && Xa(e, n, t) || a === 0 && Xa(e, r, t) || o === 0 && Xa(n, e, r) || s === 0 && Xa(n, t, r));
}
function Xa(e, t, n) {
	return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function Za(e) {
	return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Qa(e, t) {
	let n = e;
	do {
		if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && Ya(n, n.next, e, t)) return !0;
		n = n.next;
	} while (n !== e);
	return !1;
}
function $a(e, t) {
	return qa(e.prev, e, e.next) < 0 ? qa(e, t, e.next) >= 0 && qa(e, e.prev, t) >= 0 : qa(e, t, e.prev) < 0 || qa(e, e.next, t) < 0;
}
function eo(e, t) {
	let n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
	do
		n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next;
	while (n !== e);
	return r;
}
function to(e, t) {
	let n = io(e.i, e.x, e.y), r = io(t.i, t.x, t.y), i = e.next, a = t.prev;
	return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function no(e, t, n, r) {
	let i = io(e, t, n);
	return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function ro(e) {
	e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function io(e, t, n) {
	return {
		i: e,
		x: t,
		y: n,
		prev: null,
		next: null,
		z: 0,
		prevZ: null,
		nextZ: null,
		steiner: !1
	};
}
function ao(e, t, n, r) {
	let i = 0;
	for (let a = t, o = n - r; a < n; a += r) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
	return i;
}
var oo = class {
	static triangulate(e, t, n = 2) {
		return Da(e, t, n);
	}
}, so = class e {
	static area(e) {
		let t = e.length, n = 0;
		for (let r = t - 1, i = 0; i < t; r = i++) n += e[r].x * e[i].y - e[i].x * e[r].y;
		return n * .5;
	}
	static isClockWise(t) {
		return e.area(t) < 0;
	}
	static triangulateShape(e, t) {
		let n = [], r = [], i = [];
		co(e), lo(n, e);
		let a = e.length;
		t.forEach(co);
		for (let e = 0; e < t.length; e++) r.push(a), a += t[e].length, lo(n, t[e]);
		let o = oo.triangulate(n, r);
		for (let e = 0; e < o.length; e += 3) i.push(o.slice(e, e + 3));
		return i;
	}
};
function co(e) {
	let t = e.length;
	t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function lo(e, t) {
	for (let n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y);
}
var uo = class e extends Gr {
	constructor(e = new Ea([
		new W(.5, .5),
		new W(-.5, .5),
		new W(-.5, -.5),
		new W(.5, -.5)
	]), t = {}) {
		super(), this.type = "ExtrudeGeometry", this.parameters = {
			shapes: e,
			options: t
		}, e = Array.isArray(e) ? e : [e];
		let n = this, r = [], i = [];
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t];
			a(n);
		}
		this.setAttribute("position", new Nr(r, 3)), this.setAttribute("uv", new Nr(i, 2)), this.computeVertexNormals();
		function a(e) {
			let a = [], o = t.curveSegments === void 0 ? 12 : t.curveSegments, s = t.steps === void 0 ? 1 : t.steps, c = t.depth === void 0 ? 1 : t.depth, l = t.bevelEnabled === void 0 || t.bevelEnabled, u = t.bevelThickness === void 0 ? .2 : t.bevelThickness, d = t.bevelSize === void 0 ? u - .1 : t.bevelSize, f = t.bevelOffset === void 0 ? 0 : t.bevelOffset, p = t.bevelSegments === void 0 ? 3 : t.bevelSegments, m = t.extrudePath, h = t.UVGenerator === void 0 ? fo : t.UVGenerator, g, _ = !1, v, y, b, x;
			if (m) {
				g = m.getSpacedPoints(s), _ = !0, l = !1;
				let e = m.isCatmullRomCurve3 ? m.closed : !1;
				v = m.computeFrenetFrames(s, e), y = new G(), b = new G(), x = new G();
			}
			l || (p = 0, u = 0, d = 0, f = 0);
			let S = e.extractPoints(o), C = S.shape, w = S.holes;
			if (!so.isClockWise(C)) {
				C = C.reverse();
				for (let e = 0, t = w.length; e < t; e++) {
					let t = w[e];
					so.isClockWise(t) && (w[e] = t.reverse());
				}
			}
			function T(e) {
				let t = e[0];
				for (let n = 1; n <= e.length; n++) {
					let r = n % e.length, i = e[r], a = i.x - t.x, o = i.y - t.y, s = a * a + o * o, c = Math.max(Math.abs(i.x), Math.abs(i.y), Math.abs(t.x), Math.abs(t.y));
					s <= 10000000000000001e-36 * c * c ? (e.splice(r, 1), n--) : t = i;
				}
			}
			T(C), w.forEach(T);
			let E = w.length, D = C;
			for (let e = 0; e < E; e++) {
				let t = w[e];
				C = C.concat(t);
			}
			function O(e, t, n) {
				return t || H("ExtrudeGeometry: vec does not exist"), e.clone().addScaledVector(t, n);
			}
			let k = C.length;
			function A(e, t, n) {
				let r, i, a, o = e.x - t.x, s = e.y - t.y, c = n.x - e.x, l = n.y - e.y, u = o * o + s * s, d = o * l - s * c;
				if (Math.abs(d) > 2 ** -52) {
					let d = Math.sqrt(u), f = Math.sqrt(c * c + l * l), p = t.x - s / d, m = t.y + o / d, h = n.x - l / f, g = n.y + c / f, _ = ((h - p) * l - (g - m) * c) / (o * l - s * c);
					r = p + o * _ - e.x, i = m + s * _ - e.y;
					let v = r * r + i * i;
					if (v <= 2) return new W(r, i);
					a = Math.sqrt(v / 2);
				} else {
					let e = !1;
					o > 2 ** -52 ? c > 2 ** -52 && (e = !0) : o < -(2 ** -52) ? c < -(2 ** -52) && (e = !0) : Math.sign(s) === Math.sign(l) && (e = !0), e ? (r = -s, i = o, a = Math.sqrt(u)) : (r = o, i = s, a = Math.sqrt(u / 2));
				}
				return new W(r / a, i / a);
			}
			let j = [];
			for (let e = 0, t = D.length, n = t - 1, r = e + 1; e < t; e++, n++, r++) n === t && (n = 0), r === t && (r = 0), j[e] = A(D[e], D[n], D[r]);
			let M = [], N, ee = j.concat();
			for (let e = 0, t = E; e < t; e++) {
				let t = w[e];
				N = [];
				for (let e = 0, n = t.length, r = n - 1, i = e + 1; e < n; e++, r++, i++) r === n && (r = 0), i === n && (i = 0), N[e] = A(t[e], t[r], t[i]);
				M.push(N), ee = ee.concat(N);
			}
			let te;
			if (p === 0) te = so.triangulateShape(D, w);
			else {
				let e = [], t = [];
				for (let n = 0; n < p; n++) {
					let r = n / p, i = u * Math.cos(r * Math.PI / 2), a = d * Math.sin(r * Math.PI / 2) + f;
					for (let t = 0, n = D.length; t < n; t++) {
						let n = O(D[t], j[t], a);
						oe(n.x, n.y, -i), r === 0 && e.push(n);
					}
					for (let e = 0, n = E; e < n; e++) {
						let n = w[e];
						N = M[e];
						let o = [];
						for (let e = 0, t = n.length; e < t; e++) {
							let t = O(n[e], N[e], a);
							oe(t.x, t.y, -i), r === 0 && o.push(t);
						}
						r === 0 && t.push(o);
					}
				}
				te = so.triangulateShape(e, t);
			}
			let ne = te.length, P = d + f;
			for (let e = 0; e < k; e++) {
				let t = l ? O(C[e], ee[e], P) : C[e];
				_ ? (b.copy(v.normals[0]).multiplyScalar(t.x), y.copy(v.binormals[0]).multiplyScalar(t.y), x.copy(g[0]).add(b).add(y), oe(x.x, x.y, x.z)) : oe(t.x, t.y, 0);
			}
			for (let e = 1; e <= s; e++) for (let t = 0; t < k; t++) {
				let n = l ? O(C[t], ee[t], P) : C[t];
				_ ? (b.copy(v.normals[e]).multiplyScalar(n.x), y.copy(v.binormals[e]).multiplyScalar(n.y), x.copy(g[e]).add(b).add(y), oe(x.x, x.y, x.z)) : oe(n.x, n.y, c / s * e);
			}
			for (let e = p - 1; e >= 0; e--) {
				let t = e / p, n = u * Math.cos(t * Math.PI / 2), r = d * Math.sin(t * Math.PI / 2) + f;
				for (let e = 0, t = D.length; e < t; e++) {
					let t = O(D[e], j[e], r);
					oe(t.x, t.y, c + n);
				}
				for (let e = 0, t = w.length; e < t; e++) {
					let t = w[e];
					N = M[e];
					for (let e = 0, i = t.length; e < i; e++) {
						let i = O(t[e], N[e], r);
						_ ? oe(i.x, i.y + g[s - 1].y, g[s - 1].x + n) : oe(i.x, i.y, c + n);
					}
				}
			}
			re(), ie();
			function re() {
				let e = r.length / 3;
				if (l) {
					let e = 0, t = k * e;
					for (let e = 0; e < ne; e++) {
						let n = te[e];
						se(n[2] + t, n[1] + t, n[0] + t);
					}
					e = s + p * 2, t = k * e;
					for (let e = 0; e < ne; e++) {
						let n = te[e];
						se(n[0] + t, n[1] + t, n[2] + t);
					}
				} else {
					for (let e = 0; e < ne; e++) {
						let t = te[e];
						se(t[2], t[1], t[0]);
					}
					for (let e = 0; e < ne; e++) {
						let t = te[e];
						se(t[0] + k * s, t[1] + k * s, t[2] + k * s);
					}
				}
				n.addGroup(e, r.length / 3 - e, 0);
			}
			function ie() {
				let e = r.length / 3, t = 0;
				ae(D, t), t += D.length;
				for (let e = 0, n = w.length; e < n; e++) {
					let n = w[e];
					ae(n, t), t += n.length;
				}
				n.addGroup(e, r.length / 3 - e, 1);
			}
			function ae(e, t) {
				let n = e.length;
				for (; --n >= 0;) {
					let r = n, i = n - 1;
					i < 0 && (i = e.length - 1);
					for (let e = 0, n = s + p * 2; e < n; e++) {
						let n = k * e, a = k * (e + 1);
						ce(t + r + n, t + i + n, t + i + a, t + r + a);
					}
				}
			}
			function oe(e, t, n) {
				a.push(e), a.push(t), a.push(n);
			}
			function se(e, t, i) {
				F(e), F(t), F(i);
				let a = r.length / 3, o = h.generateTopUV(n, r, a - 3, a - 2, a - 1);
				I(o[0]), I(o[1]), I(o[2]);
			}
			function ce(e, t, i, a) {
				F(e), F(t), F(a), F(t), F(i), F(a);
				let o = r.length / 3, s = h.generateSideWallUV(n, r, o - 6, o - 3, o - 2, o - 1);
				I(s[0]), I(s[1]), I(s[3]), I(s[1]), I(s[2]), I(s[3]);
			}
			function F(e) {
				r.push(a[e * 3 + 0]), r.push(a[e * 3 + 1]), r.push(a[e * 3 + 2]);
			}
			function I(e) {
				i.push(e.x), i.push(e.y);
			}
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	toJSON() {
		let e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
		return po(t, n, e);
	}
	static fromJSON(t, n) {
		let r = [];
		for (let e = 0, i = t.shapes.length; e < i; e++) {
			let i = n[t.shapes[e]];
			r.push(i);
		}
		let i = t.options.extrudePath;
		return i !== void 0 && (t.options.extrudePath = new Ca[i.type]().fromJSON(i)), new e(r, t.options);
	}
}, fo = {
	generateTopUV: function(e, t, n, r, i) {
		let a = t[n * 3], o = t[n * 3 + 1], s = t[r * 3], c = t[r * 3 + 1], l = t[i * 3], u = t[i * 3 + 1];
		return [
			new W(a, o),
			new W(s, c),
			new W(l, u)
		];
	},
	generateSideWallUV: function(e, t, n, r, i, a) {
		let o = t[n * 3], s = t[n * 3 + 1], c = t[n * 3 + 2], l = t[r * 3], u = t[r * 3 + 1], d = t[r * 3 + 2], f = t[i * 3], p = t[i * 3 + 1], m = t[i * 3 + 2], h = t[a * 3], g = t[a * 3 + 1], _ = t[a * 3 + 2];
		return Math.abs(s - u) < Math.abs(o - l) ? [
			new W(o, 1 - c),
			new W(l, 1 - d),
			new W(f, 1 - m),
			new W(h, 1 - _)
		] : [
			new W(s, 1 - c),
			new W(u, 1 - d),
			new W(p, 1 - m),
			new W(g, 1 - _)
		];
	}
};
function po(e, t, n) {
	if (n.shapes = [], Array.isArray(e)) for (let t = 0, r = e.length; t < r; t++) {
		let r = e[t];
		n.shapes.push(r.uuid);
	}
	else n.shapes.push(e.uuid);
	return n.options = Object.assign({}, t), t.extrudePath !== void 0 && (n.options.extrudePath = t.extrudePath.toJSON()), n;
}
var mo = class e extends Yi {
	constructor(e = 1, t = 0) {
		let n = (1 + Math.sqrt(5)) / 2, r = [
			-1,
			n,
			0,
			1,
			n,
			0,
			-1,
			-n,
			0,
			1,
			-n,
			0,
			0,
			-1,
			n,
			0,
			1,
			n,
			0,
			-1,
			-n,
			0,
			1,
			-n,
			n,
			0,
			-1,
			n,
			0,
			1,
			-n,
			0,
			-1,
			-n,
			0,
			1
		];
		super(r, [
			0,
			11,
			5,
			0,
			5,
			1,
			0,
			1,
			7,
			0,
			7,
			10,
			0,
			10,
			11,
			1,
			5,
			9,
			5,
			11,
			4,
			11,
			10,
			2,
			10,
			7,
			6,
			7,
			1,
			8,
			3,
			9,
			4,
			3,
			4,
			2,
			3,
			2,
			6,
			3,
			6,
			8,
			3,
			8,
			9,
			4,
			9,
			5,
			2,
			4,
			11,
			6,
			2,
			10,
			8,
			6,
			7,
			9,
			8,
			1
		], e, t), this.type = "IcosahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.detail);
	}
}, ho = class e extends Gr {
	constructor(e = 1, t = 1, n = 1, r = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		};
		let i = e / 2, a = t / 2, o = Math.floor(n), s = Math.floor(r), c = o + 1, l = s + 1, u = e / o, d = t / s, f = [], p = [], m = [], h = [];
		for (let e = 0; e < l; e++) {
			let t = e * d - a;
			for (let n = 0; n < c; n++) {
				let r = n * u - i;
				p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s);
			}
		}
		for (let e = 0; e < s; e++) for (let t = 0; t < o; t++) {
			let n = t + c * e, r = t + c * (e + 1), i = t + 1 + c * (e + 1), a = t + 1 + c * e;
			f.push(n, r, a), f.push(r, i, a);
		}
		this.setIndex(f), this.setAttribute("position", new Nr(p, 3)), this.setAttribute("normal", new Nr(m, 3)), this.setAttribute("uv", new Nr(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.widthSegments, t.heightSegments);
	}
}, go = class e extends Gr {
	constructor(e = new Ea([
		new W(0, .5),
		new W(-.5, -.5),
		new W(.5, -.5)
	]), t = 12) {
		super(), this.type = "ShapeGeometry", this.parameters = {
			shapes: e,
			curveSegments: t
		};
		let n = [], r = [], i = [], a = [], o = 0, s = 0;
		if (Array.isArray(e) === !1) c(e);
		else for (let t = 0; t < e.length; t++) c(e[t]), this.addGroup(o, s, t), o += s, s = 0;
		this.setIndex(n), this.setAttribute("position", new Nr(r, 3)), this.setAttribute("normal", new Nr(i, 3)), this.setAttribute("uv", new Nr(a, 2));
		function c(e) {
			let o = r.length / 3, c = e.extractPoints(t), l = c.shape, u = c.holes;
			so.isClockWise(l) === !1 && (l = l.reverse());
			for (let e = 0, t = u.length; e < t; e++) {
				let t = u[e];
				so.isClockWise(t) === !0 && (u[e] = t.reverse());
			}
			let d = so.triangulateShape(l, u);
			for (let e = 0, t = u.length; e < t; e++) {
				let t = u[e];
				l = l.concat(t);
			}
			for (let e = 0, t = l.length; e < t; e++) {
				let t = l[e];
				r.push(t.x, t.y, 0), i.push(0, 0, 1), a.push(t.x, t.y);
			}
			for (let e = 0, t = d.length; e < t; e++) {
				let t = d[e], r = t[0] + o, i = t[1] + o, a = t[2] + o;
				n.push(r, i, a), s += 3;
			}
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	toJSON() {
		let e = super.toJSON(), t = this.parameters.shapes;
		return _o(t, e);
	}
	static fromJSON(t, n) {
		let r = [];
		for (let e = 0, i = t.shapes.length; e < i; e++) {
			let i = n[t.shapes[e]];
			r.push(i);
		}
		return new e(r, t.curveSegments);
	}
};
function _o(e, t) {
	if (t.shapes = [], Array.isArray(e)) for (let n = 0, r = e.length; n < r; n++) {
		let r = e[n];
		t.shapes.push(r.uuid);
	}
	else t.shapes.push(e.uuid);
	return t;
}
var vo = class e extends Gr {
	constructor(e = 1, t = 32, n = 16, r = 0, i = Math.PI * 2, a = 0, o = Math.PI) {
		super(), this.type = "SphereGeometry", this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: a,
			thetaLength: o
		}, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
		let s = Math.min(a + o, Math.PI), c = 0, l = [], u = new G(), d = new G(), f = [], p = [], m = [], h = [];
		for (let f = 0; f <= n; f++) {
			let g = [], _ = f / n, v = a + _ * o, y = e * Math.cos(v), b = Math.sqrt(e * e - y * y), x = 0;
			f === 0 && a === 0 ? x = .5 / t : f === n && s === Math.PI && (x = -.5 / t);
			for (let e = 0; e <= t; e++) {
				let n = e / t, a = r + n * i;
				u.x = -b * Math.cos(a), u.y = y, u.z = b * Math.sin(a), p.push(u.x, u.y, u.z), d.copy(u).normalize(), m.push(d.x, d.y, d.z), h.push(n + x, 1 - _), g.push(c++);
			}
			l.push(g);
		}
		for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
			let t = l[e][r + 1], i = l[e][r], o = l[e + 1][r], c = l[e + 1][r + 1];
			(e !== 0 || a > 0) && f.push(t, i, c), (e !== n - 1 || s < Math.PI) && f.push(i, o, c);
		}
		this.setIndex(f), this.setAttribute("position", new Nr(p, 3)), this.setAttribute("normal", new Nr(m, 3)), this.setAttribute("uv", new Nr(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
	}
};
function yo(e) {
	let t = {};
	for (let n in e) {
		t[n] = {};
		for (let r in e[n]) {
			let i = e[n][r];
			if (xo(i)) i.isRenderTargetTexture ? (V("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][r] = null) : t[n][r] = i.clone();
			else if (Array.isArray(i)) {
				if (xo(i[0])) {
					let e = [];
					for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone();
					t[n][r] = e;
				} else t[n][r] = i.slice();
			} else t[n][r] = i;
		}
	}
	return t;
}
function bo(e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = yo(e[n]);
		for (let e in r) t[e] = r[e];
	}
	return t;
}
function xo(e) {
	return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function So(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(e[n].clone());
	return t;
}
function Co(e) {
	let t = e.getRenderTarget();
	return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : q.workingColorSpace;
}
var wo = {
	clone: yo,
	merge: bo
}, To = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", Eo = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", Do = class extends ei {
	constructor(e) {
		super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = To, this.fragmentShader = Eo, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
			clipCullDistance: !1,
			multiDraw: !1
		}, this.defaultAttributeValues = {
			color: [
				1,
				1,
				1
			],
			uv: [0, 0],
			uv1: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = yo(e.uniforms), this.uniformsGroups = So(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		t.glslVersion = this.glslVersion, t.uniforms = {};
		for (let n in this.uniforms) {
			let r = this.uniforms[n].value;
			r && r.isTexture ? t.uniforms[n] = {
				type: "t",
				value: r.toJSON(e).uuid
			} : r && r.isColor ? t.uniforms[n] = {
				type: "c",
				value: r.getHex()
			} : r && r.isVector2 ? t.uniforms[n] = {
				type: "v2",
				value: r.toArray()
			} : r && r.isVector3 ? t.uniforms[n] = {
				type: "v3",
				value: r.toArray()
			} : r && r.isVector4 ? t.uniforms[n] = {
				type: "v4",
				value: r.toArray()
			} : r && r.isMatrix3 ? t.uniforms[n] = {
				type: "m3",
				value: r.toArray()
			} : r && r.isMatrix4 ? t.uniforms[n] = {
				type: "m4",
				value: r.toArray()
			} : t.uniforms[n] = { value: r };
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
		let n = {};
		for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
		return Object.keys(n).length > 0 && (t.extensions = n), t;
	}
	fromJSON(e, t) {
		if (super.fromJSON(e, t), e.uniforms !== void 0) for (let n in e.uniforms) {
			let r = e.uniforms[n];
			switch (this.uniforms[n] = {}, r.type) {
				case "t":
					this.uniforms[n].value = t[r.value] || null;
					break;
				case "c":
					this.uniforms[n].value = new Y().setHex(r.value);
					break;
				case "v2":
					this.uniforms[n].value = new W().fromArray(r.value);
					break;
				case "v3":
					this.uniforms[n].value = new G().fromArray(r.value);
					break;
				case "v4":
					this.uniforms[n].value = new dn().fromArray(r.value);
					break;
				case "m3":
					this.uniforms[n].value = new K().fromArray(r.value);
					break;
				case "m4":
					this.uniforms[n].value = new gn().fromArray(r.value);
					break;
				default: this.uniforms[n].value = r.value;
			}
		}
		if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0) for (let t in e.extensions) this.extensions[t] = e.extensions[t];
		return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
	}
}, Oo = class extends Do {
	constructor(e) {
		super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
	}
}, ko = class extends ei {
	constructor(e) {
		super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Y(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Y(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new W(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new En(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, Ao = class extends ko {
	constructor(e) {
		super(), this.isMeshPhysicalMaterial = !0, this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new W(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
			get: function() {
				return U(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
			},
			set: function(e) {
				this.ior = (1 + .4 * e) / (1 - .4 * e);
			}
		}), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Y(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = Infinity, this.attenuationColor = new Y(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Y(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._retroreflectivity = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
	}
	get anisotropy() {
		return this._anisotropy;
	}
	set anisotropy(e) {
		this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
	}
	get clearcoat() {
		return this._clearcoat;
	}
	set clearcoat(e) {
		this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
	}
	get iridescence() {
		return this._iridescence;
	}
	set iridescence(e) {
		this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
	}
	get dispersion() {
		return this._dispersion;
	}
	set dispersion(e) {
		this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
	}
	get retroreflectivity() {
		return this._retroreflectivity;
	}
	set retroreflectivity(e) {
		this._retroreflectivity > 0 != e > 0 && this.version++, this._retroreflectivity = e;
	}
	get sheen() {
		return this._sheen;
	}
	set sheen(e) {
		this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
	}
	get transmission() {
		return this._transmission;
	}
	set transmission(e) {
		this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
	}
	copy(e) {
		return super.copy(e), this.defines = {
			STANDARD: "",
			PHYSICAL: ""
		}, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.retroreflectivity = e.retroreflectivity, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
	}
}, jo = class extends ei {
	constructor(e) {
		super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = nt, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
	}
}, Mo = class extends ei {
	constructor(e) {
		super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
	}
};
function No(e, t) {
	return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
function Po(e) {
	return e !== void 0 && e.inTangents !== void 0 && e.outTangents !== void 0;
}
var Fo = class {
	constructor(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
	}
	evaluate(e) {
		let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
		validate_interval: {
			seek: {
				let a;
				linear_scan: {
					forward_scan: if (!(e < r)) {
						for (let a = n + 2;;) {
							if (r === void 0) {
								if (e < i) break forward_scan;
								return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
							}
							if (n === a) break;
							if (i = r, r = t[++n], e < r) break seek;
						}
						a = t.length;
						break linear_scan;
					}
					if (!(e >= i)) {
						let o = t[1];
						e < o && (n = 2, i = o);
						for (let a = n - 2;;) {
							if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
							if (n === a) break;
							if (r = i, i = t[--n - 1], e >= i) break seek;
						}
						a = n, n = 0;
						break linear_scan;
					}
					break validate_interval;
				}
				for (; n < a;) {
					let r = n + a >>> 1;
					e < t[r] ? a = r : n = r + 1;
				}
				if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
				if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
			}
			this._cachedIndex = n, this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
		for (let e = 0; e !== r; ++e) t[e] = n[i + e];
		return t;
	}
	interpolate_() {
		throw Error("THREE.Interpolant: Call to abstract method.");
	}
	intervalChanged_() {}
}, Io = class extends Fo {
	constructor(e, t, n, r) {
		super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: $e,
			endingEnd: $e
		};
	}
	intervalChanged_(e, t, n) {
		let r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
		if (o === void 0) switch (this.getSettings_().endingStart) {
			case et:
				i = e, o = 2 * t - n;
				break;
			case tt:
				i = r.length - 2, o = t + r[i] - r[i + 1];
				break;
			default: i = e, o = n;
		}
		if (s === void 0) switch (this.getSettings_().endingEnd) {
			case et:
				a = e, s = 2 * n - t;
				break;
			case tt:
				a = 1, s = n + r[1] - r[0];
				break;
			default: a = e - 1, s = t;
		}
		let c = (n - t) * .5, l = this.valueSize;
		this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, p = (n - t) / (r - t), m = p * p, h = m * p, g = -d * h + 2 * d * m - d * p, _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1, v = (-1 - f) * h + (1.5 + f) * m + .5 * p, y = f * h - f * m;
		for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
		return i;
	}
}, Lo = class extends Fo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l;
		for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
		return i;
	}
}, Ro = class extends Fo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1);
	}
}, zo = class extends Fo {
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this.inTangents, u = this.outTangents;
		if (!l || !u) {
			let e = (n - t) / (r - t), l = 1 - e;
			for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
			return i;
		}
		let d = o * 2, f = e - 1;
		for (let p = 0; p !== o; ++p) {
			let o = a[c + p], m = a[s + p], h = f * d + p * 2, g = u[h], _ = u[h + 1], v = e * d + p * 2, y = l[v], b = l[v + 1], x = Ho(n, t, g, y, r);
			i[p] = Bo(x, o, _, b, m);
		}
		return i;
	}
};
function Bo(e, t, n, r, i) {
	let a = 1 - e;
	return a * a * a * t + 3 * a * a * e * n + 3 * a * e * e * r + e * e * e * i;
}
function Vo(e, t, n, r, i) {
	let a = 1 - e;
	return 3 * a * a * (n - t) + 6 * a * e * (r - n) + 3 * e * e * (i - r);
}
function Ho(e, t, n, r, i) {
	let a = (e - t) / (i - t);
	for (let o = 0; o < 8; o++) {
		let o = Bo(a, t, n, r, i) - e;
		if (Math.abs(o) < 1e-10) break;
		let s = Vo(a, t, n, r, i);
		if (Math.abs(s) < 1e-10) break;
		a = Math.max(0, Math.min(1, a - o / s));
	}
	return a;
}
var Uo = class {
	constructor(e, t, n, r) {
		if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = No(t, this.TimeBufferType), this.values = No(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
	}
	static toJSON(e) {
		let t = e.constructor, n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: No(e.times, Array),
				values: No(e.values, Array)
			};
			let t = e.getInterpolation();
			t !== e.DefaultInterpolation && (n.interpolation = t), Po(e.settings) && (n.settings = {
				inTangents: No(e.settings.inTangents, Array),
				outTangents: No(e.settings.outTangents, Array)
			});
		}
		return n.type = e.ValueTypeName, n;
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new Ro(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Lo(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodSmooth(e) {
		return new Io(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodBezier(e) {
		let t = new zo(this.times, this.values, this.getValueSize(), e);
		return this.settings && (t.inTangents = this.settings.inTangents, t.outTangents = this.settings.outTangents), t;
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case Ye:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case Xe:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case Ze:
				t = this.InterpolantFactoryMethodSmooth;
				break;
			case Qe: t = this.InterpolantFactoryMethodBezier;
		}
		if (t === void 0) {
			let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0) {
				if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
				else throw Error(t);
			}
			return V("KeyframeTrack:", t), this;
		}
		return this.createInterpolant = t, this;
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete: return Ye;
			case this.InterpolantFactoryMethodLinear: return Xe;
			case this.InterpolantFactoryMethodSmooth: return Ze;
			case this.InterpolantFactoryMethodBezier: return Qe;
		}
	}
	getValueSize() {
		return this.values.length / this.times.length;
	}
	shift(e) {
		if (e !== 0) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
		}
		return this;
	}
	scale(e) {
		if (e !== 1) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
			Po(this.settings) && (Wo(this.settings.inTangents, e), Wo(this.settings.outTangents, e));
		}
		return this;
	}
	trim(e, t) {
		let n = this.times, r = n.length, i = 0, a = r - 1;
		for (; i !== r && n[i] < e;) ++i;
		for (; a !== -1 && n[a] > t;) --a;
		if (++a, i !== 0 || a !== r) {
			i >= a && (a = Math.max(a, 1), i = a - 1);
			let e = this.getValueSize();
			this.times = n.slice(i, a), this.values = this.values.slice(i * e, a * e);
		}
		return this;
	}
	validate() {
		let e = !0, t = this.getValueSize();
		t - Math.floor(t) !== 0 && (H("KeyframeTrack: Invalid value size in track.", this), e = !1);
		let n = this.times, r = this.values, i = n.length;
		i === 0 && (H("KeyframeTrack: Track is empty.", this), e = !1);
		let a = null;
		for (let t = 0; t !== i; t++) {
			let r = n[t];
			if (typeof r == "number" && isNaN(r)) {
				H("KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
				break;
			}
			if (a !== null && a > r) {
				H("KeyframeTrack: Out of order keys.", this, t, r, a), e = !1;
				break;
			}
			a = r;
		}
		if (r !== void 0 && dt(r)) for (let t = 0, n = r.length; t !== n; ++t) {
			let n = r[t];
			if (isNaN(n)) {
				H("KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
				break;
			}
		}
		return e;
	}
	optimize() {
		let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === Ze, i = e.length - 1, a = 1;
		for (let o = 1; o < i; ++o) {
			let i = !1, s = e[o];
			if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
				if (r) i = !0;
				else {
					let e = o * n, r = e - n, a = e + n;
					for (let o = 0; o !== n; ++o) {
						let n = t[e + o];
						if (n !== t[r + o] || n !== t[a + o]) {
							i = !0;
							break;
						}
					}
				}
			}
			if (i) {
				if (o !== a) {
					e[a] = e[o];
					let r = o * n, i = a * n;
					for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
				}
				++a;
			}
		}
		if (i > 0) {
			e[a] = e[i];
			for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
			++a;
		}
		return a === e.length ? (this.times = e, this.values = t) : (this.times = e.slice(0, a), this.values = t.slice(0, a * n)), this;
	}
	clone() {
		let e = this.times.slice(), t = this.values.slice(), n = this.constructor, r = new n(this.name, e, t);
		return r.createInterpolant = this.createInterpolant, Po(this.settings) && (r.settings = {
			inTangents: this.settings.inTangents.slice(),
			outTangents: this.settings.outTangents.slice()
		}), r;
	}
};
function Wo(e, t) {
	for (let n = 0, r = e.length; n !== r; n += 2) e[n] *= t;
}
Uo.prototype.ValueTypeName = "", Uo.prototype.TimeBufferType = Float32Array, Uo.prototype.ValueBufferType = Float32Array, Uo.prototype.DefaultInterpolation = Xe;
var Go = class extends Uo {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
Go.prototype.ValueTypeName = "bool", Go.prototype.ValueBufferType = Array, Go.prototype.DefaultInterpolation = Ye, Go.prototype.InterpolantFactoryMethodLinear = void 0, Go.prototype.InterpolantFactoryMethodSmooth = void 0;
var Ko = class extends Uo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Ko.prototype.ValueTypeName = "color";
var qo = class extends Uo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
qo.prototype.ValueTypeName = "number";
var Jo = class extends Fo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), c = e * o;
		for (let e = c + o; c !== e; c += 4) qt.slerpFlat(i, 0, a, c - o, a, c, s);
		return i;
	}
}, Yo = class extends Uo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Jo(this.times, this.values, this.getValueSize(), e);
	}
};
Yo.prototype.ValueTypeName = "quaternion", Yo.prototype.InterpolantFactoryMethodSmooth = void 0;
var Xo = class extends Uo {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
Xo.prototype.ValueTypeName = "string", Xo.prototype.ValueBufferType = Array, Xo.prototype.DefaultInterpolation = Ye, Xo.prototype.InterpolantFactoryMethodLinear = void 0, Xo.prototype.InterpolantFactoryMethodSmooth = void 0;
var Zo = class extends Uo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Zo.prototype.ValueTypeName = "vector";
var Qo = class extends Un {
	constructor(e, t = 1) {
		super(), this.isLight = !0, this.type = "Light", this.color = new Y(e), this.intensity = t;
	}
	copy(e, t) {
		return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
	}
}, $o = class extends Qo {
	constructor(e, t, n) {
		super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Un.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Y(t);
	}
	copy(e, t) {
		return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.groundColor = this.groundColor.getHex(), t;
	}
}, es = /*@__PURE__*/ new gn(), ts = /*@__PURE__*/ new G(), ns = /*@__PURE__*/ new G(), rs = class {
	constructor(e) {
		this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new W(512, 512), this.mapType = j, this.map = null, this.mapPass = null, this.matrix = new gn(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Vi(), this._frameExtents = new W(1, 1), this._viewportCount = 1, this._viewports = [new dn(0, 0, 1, 1)];
	}
	getViewportCount() {
		return this._viewportCount;
	}
	getCamera() {
		return this.camera;
	}
	getFrustum() {
		return this._frustum;
	}
	updateMatrices(e) {
		let t = this.camera;
		ts.setFromMatrixPosition(e.matrixWorld), t.position.copy(ts), ns.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ns), t.updateMatrixWorld(), this._updateMatrix(t, this.matrix, this._frustum);
	}
	_updateMatrix(e, t, n, r) {
		es.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), n.setFromProjectionMatrix(es, e.coordinateSystem, e.reversedDepth);
		let i = this._frameExtents, a = r ? r.z / i.x : 1, o = r ? r.w / i.y : 1, s = r ? r.x / i.x : 0, c = r ? r.y / i.y : 0;
		e.coordinateSystem === 2001 || e.reversedDepth ? t.set(.5 * a, 0, 0, .5 * a + s, 0, .5 * o, 0, .5 * o + c, 0, 0, 1, 0, 0, 0, 0, 1) : t.set(.5 * a, 0, 0, .5 * a + s, 0, .5 * o, 0, .5 * o + c, 0, 0, .5, .5, 0, 0, 0, 1), t.multiply(es);
	}
	getViewport(e) {
		return this._viewports[e];
	}
	getFrameExtents() {
		return this._frameExtents;
	}
	dispose() {
		this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
	}
	copy(e) {
		return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		let e = {};
		return e.intensity = this.intensity, e.bias = this.bias, e.normalBias = this.normalBias, e.radius = this.radius, e.blurSamples = this.blurSamples, e.mapSize = this.mapSize.toArray(), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
	}
}, is = /*@__PURE__*/ new G(), as = /*@__PURE__*/ new qt(), os = /*@__PURE__*/ new G(), ss = class extends Un {
	constructor() {
		super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new gn(), this.projectionMatrix = new gn(), this.projectionMatrixInverse = new gn(), this.coordinateSystem = lt, this._reversedDepth = !1;
	}
	get reversedDepth() {
		return this._reversedDepth;
	}
	copy(e, t) {
		return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
	}
	getWorldDirection(e) {
		return super.getWorldDirection(e).negate();
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.matrixWorld.decompose(is, as, os), os.x === 1 && os.y === 1 && os.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(is, as, os.set(1, 1, 1)).invert();
	}
	updateWorldMatrix(e, t, n = !1) {
		super.updateWorldMatrix(e, t, n), this.matrixWorld.decompose(is, as, os), os.x === 1 && os.y === 1 && os.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(is, as, os.set(1, 1, 1)).invert();
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, cs = /*@__PURE__*/ new G(), ls = /*@__PURE__*/ new W(), us = /*@__PURE__*/ new W(), ds = class extends ss {
	constructor(e = 50, t = 1, n = .1, r = 2e3) {
		super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
	}
	setFocalLength(e) {
		let t = .5 * this.getFilmHeight() / e;
		this.fov = wt * 2 * Math.atan(t), this.updateProjectionMatrix();
	}
	getFocalLength() {
		let e = Math.tan(Ct * .5 * this.fov);
		return .5 * this.getFilmHeight() / e;
	}
	getEffectiveFOV() {
		return wt * 2 * Math.atan(Math.tan(Ct * .5 * this.fov) / this.zoom);
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1);
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1);
	}
	getViewBounds(e, t, n) {
		cs.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(cs.x, cs.y).multiplyScalar(-e / cs.z), cs.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(cs.x, cs.y).multiplyScalar(-e / cs.z);
	}
	getViewSize(e, t) {
		return this.getViewBounds(e, ls, us), t.subVectors(us, ls);
	}
	setViewOffset(e, t, n, r, i, a) {
		this.aspect = e / t, this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = this.near, t = e * Math.tan(Ct * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r, a = this.view;
		if (this.view !== null && this.view.enabled) {
			let e = a.fullWidth, o = a.fullHeight;
			i += a.offsetX * r / e, t -= a.offsetY * n / o, r *= a.width / e, n *= a.height / o;
		}
		let o = this.filmOffset;
		o !== 0 && (i += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
	}
}, fs = class extends ss {
	constructor(e = -1, t = 1, n = 1, r = -1, i = .1, a = 2e3) {
		super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
	}
	setViewOffset(e, t, n, r, i, a) {
		this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, o = r + t, s = r - t;
		if (this.view !== null && this.view.enabled) {
			let e = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			i += e * this.view.offsetX, a = i + e * this.view.width, o -= t * this.view.offsetY, s = o - t * this.view.height;
		}
		this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
	}
}, ps = class extends rs {
	constructor() {
		super(new fs(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
	}
}, ms = class extends Qo {
	constructor(e, t) {
		super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Un.DEFAULT_UP), this.updateMatrix(), this.target = new Un(), this.shadow = new ps();
	}
	dispose() {
		super.dispose(), this.shadow.dispose();
	}
	copy(e) {
		return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
	}
}, hs = class extends Qo {
	constructor(e, t) {
		super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
	}
}, gs = -90, _s = 1, vs = class extends Un {
	constructor(e, t, n) {
		super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
		let r = new ds(gs, _s, e, t);
		r.layers = this.layers, this.add(r);
		let i = new ds(gs, _s, e, t);
		i.layers = this.layers, this.add(i);
		let a = new ds(gs, _s, e, t);
		a.layers = this.layers, this.add(a);
		let o = new ds(gs, _s, e, t);
		o.layers = this.layers, this.add(o);
		let s = new ds(gs, _s, e, t);
		s.layers = this.layers, this.add(s);
		let c = new ds(gs, _s, e, t);
		c.layers = this.layers, this.add(c);
	}
	updateCoordinateSystem() {
		let e = this.coordinateSystem, t = this.children.concat(), [n, r, i, a, o, s] = t;
		for (let e of t) this.remove(e);
		if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), i.up.set(0, 0, -1), i.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), s.up.set(0, 1, 0), s.lookAt(0, 0, -1);
		else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), i.up.set(0, 0, 1), i.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), s.up.set(0, -1, 0), s.lookAt(0, 0, -1);
		else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
		for (let e of t) this.add(e), e.updateMatrixWorld();
	}
	update(e, t) {
		this.parent === null && this.updateMatrixWorld();
		let { renderTarget: n, activeMipmapLevel: r } = this;
		this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
		let [i, a, o, s, c, l] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), p = e.xr.enabled;
		e.xr.enabled = !1;
		let m = n.texture.generateMipmaps;
		n.texture.generateMipmaps = !1;
		let h = !1;
		h = e.isWebGLRenderer === !0 ? e.state.buffers.depth.getReversed() : e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, i), e.setRenderTarget(n, 1, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 4, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, c), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, l), e.setRenderTarget(u, d, f), e.xr.enabled = p, n.texture.needsPMREMUpdate = !0;
	}
}, ys = class extends ds {
	constructor(e = []) {
		super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
	}
}, bs = "\\[\\]\\.:\\/", xs = /* @__PURE__ */ RegExp("[\\[\\]\\.:\\/]", "g"), Ss = "[^\\[\\]\\.:\\/]", Cs = "[^" + bs.replace("\\.", "") + "]", ws = /*@__PURE__*/ "((?:WC+[\\/:])*)".replace("WC", Ss), Ts = /*@__PURE__*/ "(WCOD+)?".replace("WCOD", Cs), Es = /*@__PURE__*/ "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", Ss), Ds = /*@__PURE__*/ "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", Ss), Os = RegExp("^" + ws + Ts + Es + Ds + "$"), ks = [
	"material",
	"materials",
	"bones",
	"map"
], As = class {
	constructor(e, t, n) {
		let r = n || js.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r);
	}
	getValue(e, t) {
		this.bind();
		let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	}
	setValue(e, t) {
		let n = this._bindings;
		for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
	}
	bind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
	}
	unbind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
	}
}, js = class e {
	constructor(t, n, r) {
		this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
	static create(t, n, r) {
		return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(xs, "");
	}
	static parseTrackName(e) {
		let t = Os.exec(e);
		if (t === null) throw Error("THREE.PropertyBinding: Cannot parse trackName: " + e);
		let n = {
			nodeName: t[2],
			objectName: t[3],
			objectIndex: t[4],
			propertyName: t[5],
			propertyIndex: t[6]
		}, r = n.nodeName && n.nodeName.lastIndexOf(".");
		if (r !== void 0 && r !== -1) {
			let e = n.nodeName.substring(r + 1);
			ks.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + e);
		return n;
	}
	static findNode(e, t) {
		if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			let n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			let n = function(e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.name === t || i.uuid === t) return i;
					let a = n(i.children);
					if (a) return a;
				}
				return null;
			}, r = n(e.children);
			if (r) return r;
		}
		return null;
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName];
	}
	_getValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex];
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t);
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t];
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
	}
	_setValue_array_setNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.needsUpdate = !0;
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t];
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_fromArray(e, t) {
		this.resolvedProperty.fromArray(e, t);
	}
	_setValue_fromArray_setNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
	}
	_setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_getValue_unbound(e, t) {
		this.bind(), this.getValue(e, t);
	}
	_setValue_unbound(e, t) {
		this.bind(), this.setValue(e, t);
	}
	bind() {
		let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
		if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
			V("PropertyBinding: No target node found for track: " + this.path + ".");
			return;
		}
		if (r) {
			let e = n.objectIndex;
			switch (r) {
				case "materials":
					if (!t.material) {
						H("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.materials) {
						H("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						return;
					}
					t = t.material.materials;
					break;
				case "bones":
					if (!t.skeleton) {
						H("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						return;
					}
					t = t.skeleton.bones;
					for (let n = 0; n < t.length; n++) if (t[n].name === e) {
						e = n;
						break;
					}
					break;
				case "map":
					if ("map" in t) {
						t = t.map;
						break;
					}
					if (!t.material) {
						H("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.map) {
						H("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
						return;
					}
					t = t.material.map;
					break;
				default:
					if (t[r] === void 0) {
						H("PropertyBinding: Can not bind to objectName of node undefined.", this);
						return;
					}
					t = t[r];
			}
			if (e !== void 0) {
				if (t[e] === void 0) {
					H("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					return;
				}
				t = t[e];
			}
		}
		let o = t[i];
		if (o === void 0) {
			let e = n.nodeName;
			H("PropertyBinding: Trying to update property for track: " + e + "." + i + " but it wasn't found.", t);
			return;
		}
		let s = this.Versioning.None;
		this.targetObject = t, t.isMaterial === !0 ? s = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate);
		let c = this.BindingType.Direct;
		if (a !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!t.geometry) {
					H("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					return;
				}
				if (!t.geometry.morphAttributes) {
					H("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					return;
				}
				t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
			}
			c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = a;
		} else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
};
js.Composite = As, js.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, js.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, js.prototype.GetterByBindingType = [
	js.prototype._getValue_direct,
	js.prototype._getValue_array,
	js.prototype._getValue_arrayElement,
	js.prototype._getValue_toArray
], js.prototype.SetterByBindingTypeAndVersioning = [
	[
		js.prototype._setValue_direct,
		js.prototype._setValue_direct_setNeedsUpdate,
		js.prototype._setValue_direct_setMatrixWorldNeedsUpdate
	],
	[
		js.prototype._setValue_array,
		js.prototype._setValue_array_setNeedsUpdate,
		js.prototype._setValue_array_setMatrixWorldNeedsUpdate
	],
	[
		js.prototype._setValue_arrayElement,
		js.prototype._setValue_arrayElement_setNeedsUpdate,
		js.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
	],
	[
		js.prototype._setValue_fromArray,
		js.prototype._setValue_fromArray_setNeedsUpdate,
		js.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
	]
];
var Ms = /*@__PURE__*/ new gn(), Ns = class {
	constructor(e, t, n = 0, r = Infinity) {
		this.ray = new xi(e, t), this.near = n, this.far = r, this.camera = null, this.layers = new Dn(), this.params = {
			Mesh: {},
			Line: { threshold: 1 },
			LOD: {},
			Points: { threshold: 1 },
			Sprite: {}
		};
	}
	set(e, t) {
		this.ray.set(e, t);
	}
	setFromCamera(e, t) {
		t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, t.projectionMatrix.elements[14]).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : H("Raycaster: Unsupported camera type: " + t.type);
	}
	setFromXRController(e) {
		return Ms.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Ms), this;
	}
	intersectObject(e, t = !0, n = []) {
		return Fs(e, this, n, t), n.sort(Ps), n;
	}
	intersectObjects(e, t = !0, n = []) {
		for (let r = 0, i = e.length; r < i; r++) Fs(e[r], this, n, t);
		return n.sort(Ps), n;
	}
};
function Ps(e, t) {
	return e.distance - t.distance;
}
function Fs(e, t, n, r) {
	let i = !0;
	if (e.layers.test(t.layers) && e.raycast(t, n) === !1 && (i = !1), i === !0 && r === !0) {
		let r = e.children;
		for (let e = 0, i = r.length; e < i; e++) Fs(r[e], t, n, !0);
	}
}
var Is = class {
	constructor(e = 1, t = 0, n = 0) {
		this.radius = e, this.phi = t, this.theta = n;
	}
	set(e, t, n) {
		return this.radius = e, this.phi = t, this.theta = n, this;
	}
	copy(e) {
		return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
	}
	makeSafe() {
		let e = 1e-6;
		return this.phi = U(this.phi, e, Math.PI - e), this;
	}
	setFromVector3(e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	}
	setFromCartesianCoords(e, t, n) {
		return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(U(t / this.radius, -1, 1))), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
};
g = class {
	constructor(e, t, n, r) {
		this.elements = [
			1,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r);
	}
	identity() {
		return this.set(1, 0, 0, 1), this;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
		return this;
	}
	set(e, t, n, r) {
		let i = this.elements;
		return i[0] = e, i[2] = t, i[1] = n, i[3] = r, this;
	}
}, g.prototype.isMatrix2 = !0;
var Ls = class extends bt {
	constructor(e, t = null) {
		super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = {
			LEFT: null,
			MIDDLE: null,
			RIGHT: null
		}, this.touches = {
			ONE: null,
			TWO: null
		};
	}
	connect(e) {
		this.domElement !== null && this.disconnect(), this.domElement = e;
	}
	disconnect() {}
	dispose() {}
	update() {}
};
function Rs(e, t, n, r) {
	let i = zs(r);
	switch (n) {
		case F: return e * t;
		case fe: return e * t / i.components * i.byteLength;
		case pe: return e * t / i.components * i.byteLength;
		case me: return e * t * 2 / i.components * i.byteLength;
		case he: return e * t * 2 / i.components * i.byteLength;
		case I: return e * t * 3 / i.components * i.byteLength;
		case le: return e * t * 4 / i.components * i.byteLength;
		case ge: return e * t * 4 / i.components * i.byteLength;
		case _e:
		case ve: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case ye:
		case be: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case Se:
		case we: return Math.max(e, 16) * Math.max(t, 8) / 4;
		case xe:
		case Ce: return Math.max(e, 8) * Math.max(t, 8) / 2;
		case Te:
		case Ee:
		case Oe:
		case ke: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case De:
		case Ae:
		case je: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case L: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case Me: return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
		case Ne: return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
		case Pe: return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
		case R: return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
		case Fe: return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
		case z: return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
		case B: return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
		case Ie: return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
		case Le: return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
		case Re: return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
		case ze: return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
		case Be: return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
		case Ve: return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
		case He:
		case Ue:
		case We: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
		case Ge:
		case Ke: return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
		case qe:
		case Je: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
	}
	throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function zs(e) {
	switch (e) {
		case j:
		case M: return {
			byteLength: 1,
			components: 1
		};
		case ee:
		case N:
		case re: return {
			byteLength: 2,
			components: 1
		};
		case ie:
		case ae: return {
			byteLength: 2,
			components: 4
		};
		case ne:
		case te:
		case P: return {
			byteLength: 4,
			components: 1
		};
		case se:
		case ce: return {
			byteLength: 4,
			components: 3
		};
	}
	throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "186" } })), typeof window < "u" && (window.__THREE__ ? V("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "186");
// node_modules/three/build/three.module.js
function Bs() {
	let e = null, t = !1, n = null, r = null;
	function i(t, a) {
		r = e.requestAnimationFrame(i), n(t, a);
	}
	return {
		start: function() {
			t !== !0 && n !== null && e !== null && (r = e.requestAnimationFrame(i), t = !0);
		},
		stop: function() {
			e !== null && e.cancelAnimationFrame(r), t = !1;
		},
		setAnimationLoop: function(e) {
			n = e;
		},
		setContext: function(t) {
			e = t;
		}
	};
}
function Vs(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(t, n) {
		let r = t.array, i = t.usage, a = r.byteLength, o = e.createBuffer();
		e.bindBuffer(n, o), e.bufferData(n, r, i), t.onUploadCallback();
		let s;
		if (r instanceof Float32Array) s = e.FLOAT;
		else if (typeof Float16Array < "u" && r instanceof Float16Array) s = e.HALF_FLOAT;
		else if (r instanceof Uint16Array) s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
		else if (r instanceof Int16Array) s = e.SHORT;
		else if (r instanceof Uint32Array) s = e.UNSIGNED_INT;
		else if (r instanceof Int32Array) s = e.INT;
		else if (r instanceof Int8Array) s = e.BYTE;
		else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE;
		else if (r instanceof Uint8ClampedArray) s = e.UNSIGNED_BYTE;
		else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
		return {
			buffer: o,
			type: s,
			bytesPerElement: r.BYTES_PER_ELEMENT,
			version: t.version,
			size: a
		};
	}
	function r(t, n, r) {
		let i = n.array, a = n.updateRanges;
		if (e.bindBuffer(r, t), a.length === 0) e.bufferSubData(r, 0, i);
		else {
			a.sort((e, t) => e.start - t.start);
			let t = 0;
			for (let e = 1; e < a.length; e++) {
				let n = a[t], r = a[e];
				r.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++t, a[t] = r);
			}
			a.length = t + 1;
			for (let t = 0, n = a.length; t < n; t++) {
				let n = a[t];
				e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
			}
			n.clearUpdateRanges();
		}
		n.onUploadCallback();
	}
	function i(e) {
		return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
	}
	function a(n) {
		n.isInterleavedBufferAttribute && (n = n.data);
		let r = t.get(n);
		r && (e.deleteBuffer(r.buffer), t.delete(n));
	}
	function o(e, i) {
		if (e.isInterleavedBufferAttribute && (e = e.data), e.isGLBufferAttribute) {
			let n = t.get(e);
			(!n || n.version < e.version) && t.set(e, {
				buffer: e.buffer,
				type: e.type,
				bytesPerElement: e.elementSize,
				version: e.version
			});
			return;
		}
		let a = t.get(e);
		if (a === void 0) t.set(e, n(e, i));
		else if (a.version < e.version) {
			if (a.size !== e.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
			r(a.buffer, e, i), a.version = e.version;
		}
	}
	return {
		get: i,
		remove: a,
		update: o
	};
}
var X = {
	alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
	alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
	alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
	alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
	alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
	aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
	aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
	batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif",
	batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
	begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
	beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
	bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
	iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
	bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
	clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
	clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
	clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
	clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
	color_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif",
	color_pars_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif",
	color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif",
	color_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif",
	common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\n#define inverseTransformDirection transformDirectionByInverseViewMatrix\nvec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {\n	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );\n}\nvec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
	cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
	defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n#endif",
	displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
	displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
	emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
	emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
	colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
	colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
	envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif",
	envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
	envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_RETROREFLECTION\n		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );\n				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );\n				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );\n				return envMapColor.rgb * envMapIntensity;\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n		#ifdef USE_RETROREFLECTION\n			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n				#ifdef ENVMAP_TYPE_CUBE_UV\n					vec3 bentNormal = cross( bitangent, viewDir );\n					bentNormal = normalize( cross( bentNormal, bitangent ) );\n					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n					return getIBLRetroRadiance( viewDir, bentNormal, roughness );\n				#else\n					return vec3( 0.0 );\n				#endif\n			}\n		#endif\n	#endif\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
	fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
	fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
	fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
	fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
	gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
	lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
	lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
	lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_SUN_LIGHTS > 0\n	struct SunLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];\n	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {\n		light.color = sunLight.color;\n		light.direction = sunLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif\n#include <lightprobes_pars_fragment>",
	lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
	lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
	lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
	lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
	lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_RETROREFLECTION\n	material.retroreflectivity = retroreflectivity;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
	lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	vec2 dfg;\n	vec3 multiScatteringCompensation;\n	#ifdef USE_RETROREFLECTION\n		float retroreflectivity;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0Dielectric;\n		vec3 iridescenceF0Metallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		return 0.5 / max( gv + gl, EPSILON );\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	#ifdef USE_RETROREFLECTION\n		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );\n		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );\n		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );\n	#endif\n	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;\n	vec3 halfDir = normalize( directLight.direction + geometryViewDir );\n	float dotVH = saturate( dot( geometryViewDir, halfDir ) );\n	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );\n	#ifdef USE_RETROREFLECTION\n		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );\n		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );\n		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );\n		F = mix( F, retroF, saturate( material.retroreflectivity ) );\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );\n	#endif\n	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
	lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );\n		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );\n	}\n#endif\n#ifdef STANDARD\n	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );\n	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;\n	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )\n		float EssMs = material.dfg.x + material.dfg.y;\n		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );\n	#endif\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )\n	SunLight sunLight;\n	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0\n	SunLightShadow sunLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {\n		sunLight = sunLights[ i ];\n		getSunLightInfo( sunLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )\n		sunLightShadow = sunLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n	#ifdef USE_LIGHT_PROBES_GRID\n		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;\n		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );\n		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
	lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_RETROREFLECTION\n		#ifdef USE_ANISOTROPY\n			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n		#else\n			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );\n		#endif\n		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );\n	#endif\n	radiance += iblRadiance;\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
	lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
	lightprobes_pars_fragment: "#ifdef USE_LIGHT_PROBES_GRID\nuniform highp sampler3D probesSH;\nuniform vec3 probesMin;\nuniform vec3 probesMax;\nuniform vec3 probesResolution;\nvec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {\n	vec3 res = probesResolution;\n	vec3 gridRange = probesMax - probesMin;\n	vec3 resMinusOne = res - 1.0;\n	vec3 probeSpacing = gridRange / resMinusOne;\n	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;\n	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );\n	uvw = uvw * resMinusOne / res + 0.5 / res;\n	float nz          = res.z;\n	float paddedSlices = nz + 2.0;\n	float atlasDepth  = 7.0 * paddedSlices;\n	float uvZBase     = uvw.z * nz + 1.0;\n	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );\n	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );\n	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );\n	vec3 c0 = s0.xyz;\n	vec3 c1 = vec3( s0.w, s1.xy );\n	vec3 c2 = vec3( s1.zw, s2.x );\n	vec3 c3 = s2.yzw;\n	vec3 c4 = s3.xyz;\n	vec3 c5 = vec3( s3.w, s4.xy );\n	vec3 c6 = vec3( s4.zw, s5.x );\n	vec3 c7 = s5.yzw;\n	vec3 c8 = s6.xyz;\n	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;\n	vec3 result = c0 * 0.886227;\n	result += c1 * 2.0 * 0.511664 * y;\n	result += c2 * 2.0 * 0.511664 * z;\n	result += c3 * 2.0 * 0.511664 * x;\n	result += c4 * 2.0 * 0.429043 * x * y;\n	result += c5 * 2.0 * 0.429043 * y * z;\n	result += c6 * ( 0.743125 * z * z - 0.247708 );\n	result += c7 * 2.0 * 0.429043 * x * z;\n	result += c8 * 0.429043 * ( x * x - y * y );\n	return max( result, vec3( 0.0 ) );\n}\n#endif",
	logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
	logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
	map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
	map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
	map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
	metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
	morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
	morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
	morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
	normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#if defined( USE_PACKED_NORMALMAP )\n		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );\n	#endif\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
	normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n		#ifdef FLIP_SIDED\n			vBitangent = - vBitangent;\n		#endif\n	#endif\n#endif",
	normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
	clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
	clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
	clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
	iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
	opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
	packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}",
	premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
	project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
	dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
	dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
	roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
	roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
	shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		#define SUN_LIGHT_CASCADES 2\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];\n		#endif\n		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];\n		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];\n		varying vec4 vSunShadowWorldPosition;\n		varying vec3 vSunShadowWorldNormal;\n		struct SunLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			shadowCoord.z += shadowBias;\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				float radius = shadowRadius * texelSize.x;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		float getSunShadow(\n			#if defined( SHADOWMAP_TYPE_PCF )\n				sampler2DShadow shadowMap,\n			#else\n				sampler2D shadowMap,\n			#endif\n			SunLightShadow sunLightShadow,\n			int shadowIndex\n		) {\n			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );\n			float viewDepth = vSunShadowWorldPosition.w;\n			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;\n			float shadow = 1.0;\n			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {\n				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];\n				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {\n					float cascadeShadow = getShadow(\n						shadowMap,\n						sunLightShadow.shadowMapSize,\n						sunLightShadow.shadowIntensity,\n						sunLightShadow.shadowBias,\n						sunLightShadow.shadowRadius,\n						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition\n					);\n					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );\n				}\n			}\n			return shadow;\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp -= shadowBias;\n			#else\n				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp += shadowBias;\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			vec2 sample0 = vogelDiskSample( 0, 5, phi );\n			vec2 sample1 = vogelDiskSample( 1, 5, phi );\n			vec2 sample2 = vogelDiskSample( 2, 5, phi );\n			vec2 sample3 = vogelDiskSample( 3, 5, phi );\n			vec2 sample4 = vogelDiskSample( 4, 5, phi );\n			shadow = (\n				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )\n			) * 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif",
	shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		varying vec4 vSunShadowWorldPosition;\n		varying vec3 vSunShadowWorldNormal;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
	shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#ifdef HAS_NORMAL\n		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n	#else\n		vec3 shadowWorldNormal = vec3( 0.0 );\n	#endif\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );\n		vSunShadowWorldNormal = shadowWorldNormal;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
	shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n	SunLightShadow sunLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {\n		sunLight = sunLightShadows[ i ];\n		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
	skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
	skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
	specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
	specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
	tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
	tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
	transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
	transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
	uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
	worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
	background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
	background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
	depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
	distance_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
	distance_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}",
	equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
	equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
	meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
	meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
	meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
	meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
	meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_RETROREFLECTION\n	uniform float retroreflectivity;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
	points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
}, Z = {
	common: {
		diffuse: { value: /*@__PURE__*/ new Y(16777215) },
		opacity: { value: 1 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new K() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new K() },
		alphaTest: { value: 0 }
	},
	specularmap: {
		specularMap: { value: null },
		specularMapTransform: { value: /*@__PURE__*/ new K() }
	},
	envmap: {
		envMap: { value: null },
		envMapRotation: { value: /*@__PURE__*/ new K() },
		reflectivity: { value: 1 },
		ior: { value: 1.5 },
		refractionRatio: { value: .98 },
		dfgLUT: { value: null }
	},
	aomap: {
		aoMap: { value: null },
		aoMapIntensity: { value: 1 },
		aoMapTransform: { value: /*@__PURE__*/ new K() }
	},
	lightmap: {
		lightMap: { value: null },
		lightMapIntensity: { value: 1 },
		lightMapTransform: { value: /*@__PURE__*/ new K() }
	},
	bumpmap: {
		bumpMap: { value: null },
		bumpMapTransform: { value: /*@__PURE__*/ new K() },
		bumpScale: { value: 1 }
	},
	normalmap: {
		normalMap: { value: null },
		normalMapTransform: { value: /*@__PURE__*/ new K() },
		normalScale: { value: /*@__PURE__*/ new W(1, 1) }
	},
	displacementmap: {
		displacementMap: { value: null },
		displacementMapTransform: { value: /*@__PURE__*/ new K() },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }
	},
	emissivemap: {
		emissiveMap: { value: null },
		emissiveMapTransform: { value: /*@__PURE__*/ new K() }
	},
	metalnessmap: {
		metalnessMap: { value: null },
		metalnessMapTransform: { value: /*@__PURE__*/ new K() }
	},
	roughnessmap: {
		roughnessMap: { value: null },
		roughnessMapTransform: { value: /*@__PURE__*/ new K() }
	},
	gradientmap: { gradientMap: { value: null } },
	fog: {
		fogDensity: { value: 25e-5 },
		fogNear: { value: 1 },
		fogFar: { value: 2e3 },
		fogColor: { value: /*@__PURE__*/ new Y(16777215) }
	},
	lights: {
		ambientLightColor: { value: [] },
		lightProbe: { value: [] },
		sunLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		sunLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		sunShadowMatrix: { value: [] },
		sunShadowCascade: { value: [] },
		directionalLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		directionalLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		directionalShadowMatrix: { value: [] },
		spotLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				direction: {},
				distance: {},
				coneCos: {},
				penumbraCos: {},
				decay: {}
			}
		},
		spotLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		spotLightMap: { value: [] },
		spotLightMatrix: { value: [] },
		pointLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				decay: {},
				distance: {}
			}
		},
		pointLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {},
				shadowCameraNear: {},
				shadowCameraFar: {}
			}
		},
		pointShadowMatrix: { value: [] },
		hemisphereLights: {
			value: [],
			properties: {
				direction: {},
				skyColor: {},
				groundColor: {}
			}
		},
		rectAreaLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				width: {},
				height: {}
			}
		},
		ltc_1: { value: null },
		ltc_2: { value: null },
		probesSH: { value: null },
		probesMin: { value: /*@__PURE__*/ new G() },
		probesMax: { value: /*@__PURE__*/ new G() },
		probesResolution: { value: /*@__PURE__*/ new G() }
	},
	points: {
		diffuse: { value: /*@__PURE__*/ new Y(16777215) },
		opacity: { value: 1 },
		size: { value: 1 },
		scale: { value: 1 },
		map: { value: null },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new K() },
		alphaTest: { value: 0 },
		uvTransform: { value: /*@__PURE__*/ new K() }
	},
	sprite: {
		diffuse: { value: /*@__PURE__*/ new Y(16777215) },
		opacity: { value: 1 },
		center: { value: /*@__PURE__*/ new W(.5, .5) },
		rotation: { value: 0 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new K() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new K() },
		alphaTest: { value: 0 }
	}
}, Hs = {
	basic: {
		uniforms: /*@__PURE__*/ bo([
			Z.common,
			Z.specularmap,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.fog
		]),
		vertexShader: X.meshbasic_vert,
		fragmentShader: X.meshbasic_frag
	},
	lambert: {
		uniforms: /*@__PURE__*/ bo([
			Z.common,
			Z.specularmap,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.fog,
			Z.lights,
			{
				emissive: { value: /*@__PURE__*/ new Y(0) },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: X.meshlambert_vert,
		fragmentShader: X.meshlambert_frag
	},
	phong: {
		uniforms: /*@__PURE__*/ bo([
			Z.common,
			Z.specularmap,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.fog,
			Z.lights,
			{
				emissive: { value: /*@__PURE__*/ new Y(0) },
				specular: { value: /*@__PURE__*/ new Y(1118481) },
				shininess: { value: 30 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: X.meshphong_vert,
		fragmentShader: X.meshphong_frag
	},
	standard: {
		uniforms: /*@__PURE__*/ bo([
			Z.common,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.roughnessmap,
			Z.metalnessmap,
			Z.fog,
			Z.lights,
			{
				emissive: { value: /*@__PURE__*/ new Y(0) },
				roughness: { value: 1 },
				metalness: { value: 0 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: X.meshphysical_vert,
		fragmentShader: X.meshphysical_frag
	},
	toon: {
		uniforms: /*@__PURE__*/ bo([
			Z.common,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.gradientmap,
			Z.fog,
			Z.lights,
			{ emissive: { value: /*@__PURE__*/ new Y(0) } }
		]),
		vertexShader: X.meshtoon_vert,
		fragmentShader: X.meshtoon_frag
	},
	matcap: {
		uniforms: /*@__PURE__*/ bo([
			Z.common,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.fog,
			{ matcap: { value: null } }
		]),
		vertexShader: X.meshmatcap_vert,
		fragmentShader: X.meshmatcap_frag
	},
	points: {
		uniforms: /*@__PURE__*/ bo([Z.points, Z.fog]),
		vertexShader: X.points_vert,
		fragmentShader: X.points_frag
	},
	dashed: {
		uniforms: /*@__PURE__*/ bo([
			Z.common,
			Z.fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		]),
		vertexShader: X.linedashed_vert,
		fragmentShader: X.linedashed_frag
	},
	depth: {
		uniforms: /*@__PURE__*/ bo([Z.common, Z.displacementmap]),
		vertexShader: X.depth_vert,
		fragmentShader: X.depth_frag
	},
	normal: {
		uniforms: /*@__PURE__*/ bo([
			Z.common,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			{ opacity: { value: 1 } }
		]),
		vertexShader: X.meshnormal_vert,
		fragmentShader: X.meshnormal_frag
	},
	sprite: {
		uniforms: /*@__PURE__*/ bo([Z.sprite, Z.fog]),
		vertexShader: X.sprite_vert,
		fragmentShader: X.sprite_frag
	},
	background: {
		uniforms: {
			uvTransform: { value: /*@__PURE__*/ new K() },
			t2D: { value: null },
			backgroundIntensity: { value: 1 }
		},
		vertexShader: X.background_vert,
		fragmentShader: X.background_frag
	},
	backgroundCube: {
		uniforms: {
			envMap: { value: null },
			backgroundBlurriness: { value: 0 },
			backgroundIntensity: { value: 1 },
			backgroundRotation: { value: /*@__PURE__*/ new K() }
		},
		vertexShader: X.backgroundCube_vert,
		fragmentShader: X.backgroundCube_frag
	},
	cube: {
		uniforms: {
			tCube: { value: null },
			tFlip: { value: -1 },
			opacity: { value: 1 }
		},
		vertexShader: X.cube_vert,
		fragmentShader: X.cube_frag
	},
	equirect: {
		uniforms: { tEquirect: { value: null } },
		vertexShader: X.equirect_vert,
		fragmentShader: X.equirect_frag
	},
	distance: {
		uniforms: /*@__PURE__*/ bo([
			Z.common,
			Z.displacementmap,
			{
				referencePosition: { value: /*@__PURE__*/ new G() },
				nearDistance: { value: 1 },
				farDistance: { value: 1e3 }
			}
		]),
		vertexShader: X.distance_vert,
		fragmentShader: X.distance_frag
	},
	shadow: {
		uniforms: /*@__PURE__*/ bo([
			Z.lights,
			Z.fog,
			{
				color: { value: /*@__PURE__*/ new Y(0) },
				opacity: { value: 1 }
			}
		]),
		vertexShader: X.shadow_vert,
		fragmentShader: X.shadow_frag
	}
};
Hs.physical = {
	uniforms: /*@__PURE__*/ bo([Hs.standard.uniforms, {
		clearcoat: { value: 0 },
		clearcoatMap: { value: null },
		clearcoatMapTransform: { value: /*@__PURE__*/ new K() },
		clearcoatNormalMap: { value: null },
		clearcoatNormalMapTransform: { value: /*@__PURE__*/ new K() },
		clearcoatNormalScale: { value: /*@__PURE__*/ new W(1, 1) },
		clearcoatRoughness: { value: 0 },
		clearcoatRoughnessMap: { value: null },
		clearcoatRoughnessMapTransform: { value: /*@__PURE__*/ new K() },
		dispersion: { value: 0 },
		retroreflectivity: { value: 0 },
		iridescence: { value: 0 },
		iridescenceMap: { value: null },
		iridescenceMapTransform: { value: /*@__PURE__*/ new K() },
		iridescenceIOR: { value: 1.3 },
		iridescenceThicknessMinimum: { value: 100 },
		iridescenceThicknessMaximum: { value: 400 },
		iridescenceThicknessMap: { value: null },
		iridescenceThicknessMapTransform: { value: /*@__PURE__*/ new K() },
		sheen: { value: 0 },
		sheenColor: { value: /*@__PURE__*/ new Y(0) },
		sheenColorMap: { value: null },
		sheenColorMapTransform: { value: /*@__PURE__*/ new K() },
		sheenRoughness: { value: 1 },
		sheenRoughnessMap: { value: null },
		sheenRoughnessMapTransform: { value: /*@__PURE__*/ new K() },
		transmission: { value: 0 },
		transmissionMap: { value: null },
		transmissionMapTransform: { value: /*@__PURE__*/ new K() },
		transmissionSamplerSize: { value: /*@__PURE__*/ new W() },
		transmissionSamplerMap: { value: null },
		thickness: { value: 0 },
		thicknessMap: { value: null },
		thicknessMapTransform: { value: /*@__PURE__*/ new K() },
		attenuationDistance: { value: 0 },
		attenuationColor: { value: /*@__PURE__*/ new Y(0) },
		specularColor: { value: /*@__PURE__*/ new Y(1, 1, 1) },
		specularColorMap: { value: null },
		specularColorMapTransform: { value: /*@__PURE__*/ new K() },
		specularIntensity: { value: 1 },
		specularIntensityMap: { value: null },
		specularIntensityMapTransform: { value: /*@__PURE__*/ new K() },
		anisotropyVector: { value: /*@__PURE__*/ new W() },
		anisotropyMap: { value: null },
		anisotropyMapTransform: { value: /*@__PURE__*/ new K() }
	}]),
	vertexShader: X.meshphysical_vert,
	fragmentShader: X.meshphysical_frag
};
var Us = {
	r: 0,
	b: 0,
	g: 0
}, Ws = /*@__PURE__*/ new gn(), Gs = /*@__PURE__*/ new K();
Gs.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Ks(e, t, n, r, i, a) {
	let o = new Y(0), s = i === !0 ? 0 : 1, c, l, u = null, d = 0, f = null;
	function p(e) {
		let n = e.isScene === !0 ? e.background : null;
		if (n && n.isTexture) {
			let r = e.backgroundBlurriness > 0;
			n = t.get(n, r);
		}
		return n;
	}
	function m(t) {
		let r = !1, i = p(t);
		i === null ? g(o, s) : i && i.isColor && (g(i, 1), r = !0);
		let c = e.xr.getEnvironmentBlendMode();
		c === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : c === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (e.autoClear || r) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
	}
	function h(t, n) {
		let i = p(n);
		i && (i.isCubeTexture || i.mapping === 306) ? (l === void 0 && (l = new Pi(new qi(1, 1, 1), new Do({
			name: "BackgroundCubeMaterial",
			uniforms: yo(Hs.backgroundCube.uniforms),
			vertexShader: Hs.backgroundCube.vertexShader,
			fragmentShader: Hs.backgroundCube.fragmentShader,
			side: 1,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(e, t, n) {
			this.matrixWorld.copyPosition(n.matrixWorld);
		}, Object.defineProperty(l.material, "envMap", { get: function() {
			return this.uniforms.envMap.value;
		} }), r.update(l)), l.material.uniforms.envMap.value = i, l.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ws.makeRotationFromEuler(n.backgroundRotation)).transpose(), i.isCubeTexture && i.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(Gs), l.material.toneMapped = q.getTransfer(i.colorSpace) !== ot, (u !== i || d !== i.version || f !== e.toneMapping) && (l.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), l.layers.enableAll(), t.unshift(l, l.geometry, l.material, 0, 0, null)) : i && i.isTexture && (c === void 0 && (c = new Pi(new ho(2, 2), new Do({
			name: "BackgroundMaterial",
			uniforms: yo(Hs.background.uniforms),
			vertexShader: Hs.background.vertexShader,
			fragmentShader: Hs.background.fragmentShader,
			side: 0,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
			return this.uniforms.t2D.value;
		} }), r.update(c)), c.material.uniforms.t2D.value = i, c.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, c.material.toneMapped = q.getTransfer(i.colorSpace) !== ot, i.matrixAutoUpdate === !0 && i.updateMatrix(), c.material.uniforms.uvTransform.value.copy(i.matrix), (u !== i || d !== i.version || f !== e.toneMapping) && (c.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), c.layers.enableAll(), t.unshift(c, c.geometry, c.material, 0, 0, null));
	}
	function g(t, r) {
		t.getRGB(Us, Co(e)), n.buffers.color.setClear(Us.r, Us.g, Us.b, r, a);
	}
	function _() {
		l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
	}
	return {
		getClearColor: function() {
			return o;
		},
		setClearColor: function(e, t = 1) {
			o.set(e), s = t, g(o, s);
		},
		getClearAlpha: function() {
			return s;
		},
		setClearAlpha: function(e) {
			s = e, g(o, s);
		},
		render: m,
		addToRenderList: h,
		dispose: _
	};
}
function qs(e, t) {
	let n = e.getParameter(e.MAX_VERTEX_ATTRIBS), r = {}, i = f(null), a = i, o = !1;
	function s(n, r, i, s, c) {
		let u = !1, f = d(n, s, i, r);
		a !== f && (a = f, l(a.object)), u = p(n, s, i, c), u && m(n, s, i, c), c !== null && t.update(c, e.ELEMENT_ARRAY_BUFFER), (u || o) && (o = !1, b(n, r, i, s), c !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(c).buffer));
	}
	function c() {
		return e.createVertexArray();
	}
	function l(t) {
		return e.bindVertexArray(t);
	}
	function u(t) {
		return e.deleteVertexArray(t);
	}
	function d(e, t, n, i) {
		let a = i.wireframe === !0, o = r[t.id];
		o === void 0 && (o = {}, r[t.id] = o);
		let s = e.isInstancedMesh === !0 ? e.id : 0, l = o[s];
		l === void 0 && (l = {}, o[s] = l);
		let u = l[n.id];
		u === void 0 && (u = {}, l[n.id] = u);
		let d = u[a];
		return d === void 0 && (d = f(c()), u[a] = d), d;
	}
	function f(e) {
		let t = [], r = [], i = [];
		for (let e = 0; e < n; e++) t[e] = 0, r[e] = 0, i[e] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: t,
			enabledAttributes: r,
			attributeDivisors: i,
			object: e,
			attributes: {},
			index: null
		};
	}
	function p(e, t, n, r) {
		let i = a.attributes, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = i[t], r = o[t];
			if (r === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (r = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (r = e.instanceColor)), n === void 0 || n.attribute !== r || r && n.data !== r.data) return !0;
			s++;
		}
		return a.attributesNum !== s || a.index !== r;
	}
	function m(e, t, n, r) {
		let i = {}, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = o[t];
			n === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (n = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (n = e.instanceColor));
			let r = {};
			r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, s++;
		}
		a.attributes = i, a.attributesNum = s, a.index = r;
	}
	function h() {
		let e = a.newAttributes;
		for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
	}
	function g(e) {
		_(e, 0);
	}
	function _(t, n) {
		let r = a.newAttributes, i = a.enabledAttributes, o = a.attributeDivisors;
		r[t] = 1, i[t] === 0 && (e.enableVertexAttribArray(t), i[t] = 1), o[t] !== n && (e.vertexAttribDivisor(t, n), o[t] = n);
	}
	function v() {
		let t = a.newAttributes, n = a.enabledAttributes;
		for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0);
	}
	function y(t, n, r, i, a, o, s) {
		s === !0 ? e.vertexAttribIPointer(t, n, r, a, o) : e.vertexAttribPointer(t, n, r, i, a, o);
	}
	function b(n, r, i, a) {
		h();
		let o = a.attributes, s = i.getAttributes(), c = r.defaultAttributeValues;
		for (let r in s) {
			let i = s[r];
			if (i.location >= 0) {
				let s = o[r];
				if (s === void 0 && (r === "instanceMatrix" && n.instanceMatrix && (s = n.instanceMatrix), r === "instanceColor" && n.instanceColor && (s = n.instanceColor)), s !== void 0) {
					let r = s.normalized, o = s.itemSize, c = t.get(s);
					if (c === void 0) continue;
					let l = c.buffer, u = c.type, d = c.bytesPerElement, f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
					if (s.isInterleavedBufferAttribute) {
						let t = s.data, c = t.stride, p = s.offset;
						if (t.isInstancedInterleavedBuffer) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, t.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = t.meshPerAttribute * t.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, c * d, (p + o / i.locationSize * e) * d, f);
					} else {
						if (s.isInstancedBufferAttribute) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, s.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = s.meshPerAttribute * s.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, o * d, o / i.locationSize * e * d, f);
					}
				} else if (c !== void 0) {
					let t = c[r];
					if (t !== void 0) switch (t.length) {
						case 2:
							e.vertexAttrib2fv(i.location, t);
							break;
						case 3:
							e.vertexAttrib3fv(i.location, t);
							break;
						case 4:
							e.vertexAttrib4fv(i.location, t);
							break;
						default: e.vertexAttrib1fv(i.location, t);
					}
				}
			}
		}
		v();
	}
	function x() {
		T();
		for (let e in r) {
			let t = r[e];
			for (let e in t) {
				let n = t[e];
				for (let e in n) {
					let t = n[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete n[e];
				}
			}
			delete r[e];
		}
	}
	function S(e) {
		if (r[e.id] === void 0) return;
		let t = r[e.id];
		for (let e in t) {
			let n = t[e];
			for (let e in n) {
				let t = n[e];
				for (let e in t) u(t[e].object), delete t[e];
				delete n[e];
			}
		}
		delete r[e.id];
	}
	function C(e) {
		for (let t in r) {
			let n = r[t];
			for (let t in n) {
				let r = n[t];
				if (r[e.id] === void 0) continue;
				let i = r[e.id];
				for (let e in i) u(i[e].object), delete i[e];
				delete r[e.id];
			}
		}
	}
	function w(e) {
		for (let t in r) {
			let n = r[t], i = e.isInstancedMesh === !0 ? e.id : 0, a = n[i];
			if (a !== void 0) {
				for (let e in a) {
					let t = a[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete a[e];
				}
				delete n[i], Object.keys(n).length === 0 && delete r[t];
			}
		}
	}
	function T() {
		E(), o = !0, a !== i && (a = i, l(a.object));
	}
	function E() {
		i.geometry = null, i.program = null, i.wireframe = !1;
	}
	return {
		setup: s,
		reset: T,
		resetDefaultState: E,
		dispose: x,
		releaseStatesOfGeometry: S,
		releaseStatesOfObject: w,
		releaseStatesOfProgram: C,
		initAttributes: h,
		enableAttribute: g,
		disableUnusedAttributes: v
	};
}
function Js(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	function a(t, i) {
		e.drawArrays(r, t, i), n.update(i, r, 1);
	}
	function o(t, i, a) {
		a !== 0 && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
	}
	function s(e, i, a) {
		if (a === 0) return;
		t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, e, 0, i, 0, a);
		let o = 0;
		for (let e = 0; e < a; e++) o += i[e];
		n.update(o, r, 1);
	}
	this.setMode = i, this.render = a, this.renderInstances = o, this.renderMultiDraw = s;
}
function Ys(e, t, n, r) {
	let i;
	function a() {
		if (i !== void 0) return i;
		if (t.has("EXT_texture_filter_anisotropic") === !0) {
			let n = t.get("EXT_texture_filter_anisotropic");
			i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else i = 0;
		return i;
	}
	function o(t) {
		return t === 1023 || r.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT);
	}
	function s(n) {
		let i = n === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
		return !(n !== 1009 && n !== 1015 && !i && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE));
	}
	function c(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let l = n.precision === void 0 ? "highp" : n.precision, u = c(l);
	u !== l && (V("WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
	let d = n.logarithmicDepthBuffer === !0, f = n.reversedDepthBuffer === !0 && t.has("EXT_clip_control");
	n.reversedDepthBuffer === !0 && f === !1 && V("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
	let p = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), m = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), h = e.getParameter(e.MAX_TEXTURE_SIZE), g = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), _ = e.getParameter(e.MAX_VERTEX_ATTRIBS), v = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), y = e.getParameter(e.MAX_VARYING_VECTORS), b = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), x = e.getParameter(e.MAX_SAMPLES), S = e.getParameter(e.SAMPLES);
	return {
		isWebGL2: !0,
		getMaxAnisotropy: a,
		getMaxPrecision: c,
		textureFormatReadable: o,
		textureTypeReadable: s,
		precision: l,
		logarithmicDepthBuffer: d,
		reversedDepthBuffer: f,
		maxTextures: p,
		maxVertexTextures: m,
		maxTextureSize: h,
		maxCubemapSize: g,
		maxAttributes: _,
		maxVertexUniforms: v,
		maxVaryings: y,
		maxFragmentUniforms: b,
		maxSamples: x,
		samples: S
	};
}
function Xs(e) {
	let t = this, n = null, r = 0, i = !1, a = !1, o = new Qr(), s = new K(), c = {
		value: null,
		needsUpdate: !1
	};
	this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
		let n = e.length !== 0 || t || r !== 0 || i;
		return i = t, r = e.length, n;
	}, this.beginShadows = function() {
		a = !0, u(null);
	}, this.endShadows = function() {
		a = !1;
	}, this.setGlobalState = function(e, t) {
		n = u(e, t, 0);
	}, this.setState = function(t, o, s) {
		let d = t.clippingPlanes, f = t.clipIntersection, p = t.clipShadows, m = e.get(t);
		if (!i || d === null || d.length === 0 || a && !p) a ? u(null) : l();
		else {
			let e = a ? 0 : r, t = e * 4, i = m.clippingState || null;
			c.value = i, i = u(d, o, t, s);
			for (let e = 0; e !== t; ++e) i[e] = n[e];
			m.clippingState = i, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += e;
		}
	};
	function l() {
		c.value !== n && (c.value = n, c.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0;
	}
	function u(e, n, r, i) {
		let a = e === null ? 0 : e.length, l = null;
		if (a !== 0) {
			if (l = c.value, i !== !0 || l === null) {
				let t = r + a * 4, i = n.matrixWorldInverse;
				s.getNormalMatrix(i), (l === null || l.length < t) && (l = new Float32Array(t));
				for (let t = 0, n = r; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(i, s), o.normal.toArray(l, n), l[n + 3] = o.constant;
			}
			c.value = l, c.needsUpdate = !0;
		}
		return t.numPlanes = a, t.numIntersection = 0, l;
	}
}
var Zs = 4, Qs = 6, $s = 20, ec = 256, tc = /*@__PURE__*/ new fs(), nc = /*@__PURE__*/ new Y(), rc = null, ic = 0, ac = 0, oc = !1, sc = /*@__PURE__*/ new G(), cc = /*@__PURE__*/ new G(), lc = class {
	constructor(e) {
		this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
	}
	fromScene(e, t = 0, n = .1, r = 100, i = {}) {
		let { size: a = 256, position: o = sc } = i;
		rc = this._renderer.getRenderTarget(), ic = this._renderer.getActiveCubeFace(), ac = this._renderer.getActiveMipmapLevel(), oc = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
		let s = this._allocateTargets();
		return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s, o), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
	}
	fromEquirectangular(e, t = null) {
		return this._fromTexture(e, t);
	}
	fromCubemap(e, t = null) {
		return this._fromTexture(e, t);
	}
	compileCubemapShader() {
		this._cubemapMaterial === null && (this._cubemapMaterial = gc(), this._compileMaterial(this._cubemapMaterial));
	}
	compileEquirectangularShader() {
		this._equirectMaterial === null && (this._equirectMaterial = hc(), this._compileMaterial(this._equirectMaterial));
	}
	dispose() {
		this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
	}
	_setSize(e) {
		this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = 2 ** this._lodMax;
	}
	_dispose() {
		this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
		for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
	}
	_cleanup(e) {
		this._renderer.setRenderTarget(rc, ic, ac), this._renderer.xr.enabled = oc, e.scissorTest = !1, fc(e, 0, 0, e.width, e.height);
	}
	_fromTexture(e, t) {
		e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), rc = this._renderer.getRenderTarget(), ic = this._renderer.getActiveCubeFace(), ac = this._renderer.getActiveMipmapLevel(), oc = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
		let n = t || this._allocateTargets();
		return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
	}
	_allocateTargets() {
		let e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
			magFilter: O,
			minFilter: O,
			generateMipmaps: !1,
			type: re,
			format: le,
			colorSpace: it,
			depthBuffer: !1
		}, r = dc(e, t, n);
		if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
			this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = dc(e, t, n);
			let { _lodMax: r } = this;
			({lodMeshes: this._lodMeshes, sizeLods: this._sizeLods} = uc(r)), this._blurMaterial = mc(r, e, t), this._ggxMaterial = pc(r, e, t);
		}
		return r;
	}
	_compileMaterial(e) {
		let t = new Pi(new Gr(), e);
		this._renderer.compile(t, tc);
	}
	_sceneToCubeUV(e, t, n, r, i) {
		let a = new ds(90, 1, t, n), o = [
			1,
			-1,
			1,
			1,
			1,
			1
		], s = [
			1,
			1,
			1,
			-1,
			-1,
			-1
		], c = this._renderer, l = c.autoClear, u = c.toneMapping;
		c.getClearColor(nc), c.toneMapping = 0, c.autoClear = !1, c.state.buffers.depth.getReversed() && (c.setRenderTarget(r), c.clearDepth(), c.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Pi(new qi(), new Si({
			name: "PMREM.Background",
			side: 1,
			depthWrite: !1,
			depthTest: !1
		})));
		let d = this._backgroundBox, f = d.material, p = !1, m = e.background;
		m ? m.isColor && (f.color.copy(m), e.background = null, p = !0) : (f.color.copy(nc), p = !0);
		for (let t = 0; t < 6; t++) {
			let n = t % 3;
			n === 0 ? (a.up.set(0, o[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x + s[t], i.y, i.z)) : n === 1 ? (a.up.set(0, 0, o[t]), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y + s[t], i.z)) : (a.up.set(0, o[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y, i.z + s[t]));
			let l = this._cubeSize;
			fc(r, n * l, t > 2 ? l : 0, l, l), c.setRenderTarget(r), p && c.render(d, a), c.render(e, a);
		}
		c.toneMapping = u, c.autoClear = l, e.background = m;
	}
	_textureToCubeUV(e, t) {
		let n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
		r ? (this._cubemapMaterial === null && (this._cubemapMaterial = gc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = hc());
		let i = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
		a.material = i;
		let o = i.uniforms;
		o.envMap.value = e;
		let s = this._cubeSize;
		fc(t, 0, 0, 3 * s, 2 * s), n.setRenderTarget(t), n.render(a, tc);
	}
	_applyPMREM(e) {
		let t = this._renderer, n = t.autoClear;
		t.autoClear = !1;
		let r = this._lodMeshes.length;
		for (let t = 1; t < r; t++) this._applyGGXFilter(e, t - 1, t);
		t.autoClear = n;
	}
	_applyGGXFilter(e, t, n) {
		let r = this._renderer, i = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[n];
		o.material = a;
		let s = a.uniforms, c = n / (this._lodMeshes.length - 1), l = t / (this._lodMeshes.length - 1), u = Math.sqrt(c * c - l * l) * (c * 1.25), { _lodMax: d } = this, f = this._sizeLods[n], p = 3 * f * (n > d - Zs ? n - d + Zs : 0), m = 4 * (this._cubeSize - f);
		s.envMap.value = e.texture, s.roughness.value = u, s.mipInt.value = d - t, fc(i, p, m, 3 * f, 2 * f), r.setRenderTarget(i), r.render(o, tc), s.envMap.value = i.texture, s.roughness.value = 0, s.mipInt.value = d - n, fc(e, p, m, 3 * f, 2 * f), r.setRenderTarget(e), r.render(o, tc);
	}
	_blur(e, t, n, r) {
		let i = this._pingPongRenderTarget, a = Math.min(r, Math.PI) / Math.SQRT2;
		this._blurPass(e, i, t, n, a), this._blurPass(i, e, n, n, a);
	}
	_blurPass(e, t, n, r, i) {
		let a = this._renderer, o = this._blurMaterial, s = this._lodMeshes[r];
		s.material = o;
		let c = o.uniforms;
		c.envMap.value = e.texture, c.sigma.value = i, c.mipInt.value = this._lodMax - n;
		let l = this._sizeLods[r];
		fc(t, 3 * l * (r > this._lodMax - Zs ? r - this._lodMax + Zs : 0), 4 * (this._cubeSize - l), 3 * l, 2 * l), a.setRenderTarget(t), a.render(s, tc);
	}
};
function uc(e) {
	let t = [], n = [], r = e, i = e - Zs + 1 + Qs;
	for (let e = 0; e < i; e++) {
		let e = 2 ** r;
		t.push(e);
		let i = 1 / (e - 2), a = -i, o = 1 + i, s = [
			a,
			a,
			o,
			a,
			o,
			o,
			a,
			a,
			o,
			o,
			a,
			o
		], c = /* @__PURE__ */ new Float32Array(108), l = /* @__PURE__ */ new Float32Array(108);
		for (let e = 0; e < 6; e++) {
			let t = e % 3 * 2 / 3 - 1, n = e > 2 ? 0 : -1, r = [
				t,
				n,
				0,
				t + 2 / 3,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n + 1,
				0
			];
			c.set(r, 18 * e);
			for (let t = 0; t < 6; t++) {
				let n = s[t * 2] * 2 - 1, r = s[t * 2 + 1] * 2 - 1;
				e === 0 ? cc.set(1, r, n) : e === 1 ? cc.set(-n, 1, -r) : e === 2 ? cc.set(-n, r, 1) : e === 3 ? cc.set(-1, r, -n) : e === 4 ? cc.set(-n, -1, r) : cc.set(n, r, -1), cc.toArray(l, (e * 6 + t) * 3);
			}
		}
		let u = new Gr();
		u.setAttribute("position", new Ar(c, 3)), u.setAttribute("outputDirection", new Ar(l, 3)), n.push(new Pi(u, null)), r > Zs && r--;
	}
	return {
		lodMeshes: n,
		sizeLods: t
	};
}
function dc(e, t, n) {
	let r = new pn(e, t, n);
	return r.texture.mapping = 306, r.texture.name = "PMREM.cubeUv", r.scissorTest = !0, r;
}
function fc(e, t, n, r, i) {
	e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i);
}
function pc(e, t, n) {
	return new Do({
		name: "PMREMGGXConvolution",
		defines: {
			GGX_SAMPLES: ec,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			roughness: { value: 0 },
			mipInt: { value: 0 }
		},
		vertexShader: _c(),
		fragmentShader: "\n\n			precision highp float;\n			precision highp int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform float roughness;\n			uniform float mipInt;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			#define PI 3.14159265359\n\n			// Van der Corput radical inverse\n			float radicalInverse_VdC(uint bits) {\n				bits = (bits << 16u) | (bits >> 16u);\n				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n				return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n			}\n\n			// Hammersley sequence\n			vec2 hammersley(uint i, uint N) {\n				return vec2(float(i) / float(N), radicalInverse_VdC(i));\n			}\n\n			// GGX VNDF importance sampling (Eric Heitz 2018)\n			// \"Sampling the GGX Distribution of Visible Normals\"\n			// https://jcgt.org/published/0007/04/01/\n			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {\n				float alpha = roughness * roughness;\n\n				// Section 4.1: Orthonormal basis\n				vec3 T1 = vec3(1.0, 0.0, 0.0);\n				vec3 T2 = cross(V, T1);\n\n				// Section 4.2: Parameterization of projected area\n				float r = sqrt(Xi.x);\n				float phi = 2.0 * PI * Xi.y;\n				float t1 = r * cos(phi);\n				float t2 = r * sin(phi);\n				float s = 0.5 * (1.0 + V.z);\n				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;\n\n				// Section 4.3: Reprojection onto hemisphere\n				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;\n\n				// Section 3.4: Transform back to ellipsoid configuration\n				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));\n			}\n\n			void main() {\n				vec3 N = normalize(vOutputDirection);\n				vec3 V = N; // Assume view direction equals normal for pre-filtering\n\n				vec3 prefilteredColor = vec3(0.0);\n				float totalWeight = 0.0;\n\n				// For very low roughness, just sample the environment directly\n				if (roughness < 0.001) {\n					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);\n					return;\n				}\n\n				// Tangent space basis for VNDF sampling\n				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\n				vec3 tangent = normalize(cross(up, N));\n				vec3 bitangent = cross(N, tangent);\n\n				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {\n					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));\n\n					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)\n					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);\n\n					// Transform H back to world space\n					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);\n					vec3 L = normalize(2.0 * dot(V, H) * H - V);\n\n					float NdotL = max(dot(N, L), 0.0);\n\n					if(NdotL > 0.0) {\n						// Sample environment at fixed mip level\n						// VNDF importance sampling handles the distribution filtering\n						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);\n\n						// Weight by NdotL for the split-sum approximation\n						// VNDF PDF naturally accounts for the visible microfacet distribution\n						prefilteredColor += sampleColor * NdotL;\n						totalWeight += NdotL;\n					}\n				}\n\n				if (totalWeight > 0.0) {\n					prefilteredColor = prefilteredColor / totalWeight;\n				}\n\n				gl_FragColor = vec4(prefilteredColor, 1.0);\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function mc(e, t, n) {
	return new Do({
		name: "SphericalGaussianBlur",
		defines: {
			SAMPLES: $s,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			sigma: { value: 0 },
			mipInt: { value: 0 }
		},
		vertexShader: _c(),
		fragmentShader: "\n\n			precision highp float;\n			precision highp int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform float sigma;\n			uniform float mipInt;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			#define PI 3.14159265359\n			#define GOLDEN_ANGLE 2.39996322973\n\n			void main() {\n\n				if ( sigma == 0.0 ) {\n\n					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );\n					return;\n\n				}\n\n				vec3 outputDirection = normalize( vOutputDirection );\n\n				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );\n				vec3 tangent = normalize( cross( up, outputDirection ) );\n				vec3 bitangent = cross( outputDirection, tangent );\n\n				// Truncate the kernel at three standard deviations or at the antipode.\n				float thetaMax = min( 3.0 * sigma, PI );\n				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );\n\n				vec3 accumColor = vec3( 0.0 );\n				float accumWeight = 0.0;\n\n				for ( int i = 0; i < SAMPLES; i ++ ) {\n\n					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.\n					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );\n					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );\n					float phi = float( i ) * GOLDEN_ANGLE;\n\n					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;\n					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;\n\n					// Correct the planar sample density to solid angle.\n					float weight = sin( theta ) / theta;\n\n					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );\n					accumWeight += weight;\n\n				}\n\n				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function hc() {
	return new Do({
		name: "EquirectangularToCubeUV",
		uniforms: { envMap: { value: null } },
		vertexShader: _c(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function gc() {
	return new Do({
		name: "CubemapToCubeUV",
		uniforms: {
			envMap: { value: null },
			flipEnvMap: { value: -1 }
		},
		vertexShader: _c(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function _c() {
	return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute vec3 outputDirection;\n\n		varying vec3 vOutputDirection;\n\n		void main() {\n\n			vOutputDirection = outputDirection;\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
}
var vc = class extends pn {
	constructor(e = 1, t = {}) {
		super(e, e, t), this.isWebGLCubeRenderTarget = !0;
		let n = {
			width: e,
			height: e,
			depth: 1
		}, r = [
			n,
			n,
			n,
			n,
			n,
			n
		];
		this.texture = new Hi(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
	}
	fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
		let n = {
			uniforms: { tEquirect: { value: null } },
			vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
			fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
		}, r = new qi(5, 5, 5), i = new Do({
			name: "CubemapFromEquirect",
			uniforms: yo(n.uniforms),
			vertexShader: n.vertexShader,
			fragmentShader: n.fragmentShader,
			side: 1,
			blending: 0
		});
		i.uniforms.tEquirect.value = t;
		let a = new Pi(r, i), o = t.minFilter;
		return t.minFilter === 1008 && (t.minFilter = O), new vs(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
	}
	clear(e, t = !0, n = !0, r = !0) {
		let i = e.getRenderTarget();
		for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
		e.setRenderTarget(i);
	}
};
function yc(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = null;
	function i(e, t = !1) {
		return e == null ? null : t ? o(e) : a(e);
	}
	function a(n) {
		if (n && n.isTexture) {
			let r = n.mapping;
			if (r === 303 || r === 304) {
				if (t.has(n)) {
					let e = t.get(n).texture;
					return s(e, n.mapping);
				}
				{
					let r = n.image;
					if (r && r.height > 0) {
						let i = new vc(r.height);
						return i.fromEquirectangularTexture(e, n), t.set(n, i), n.addEventListener("dispose", l), s(i.texture, n.mapping);
					}
					return null;
				}
			}
		}
		return n;
	}
	function o(t) {
		if (t && t.isTexture) {
			let i = t.mapping, a = i === 303 || i === 304, o = i === 301 || i === 302;
			if (a || o) {
				let i = n.get(t), s = i === void 0 ? 0 : i.texture.pmremVersion;
				if (t.isRenderTargetTexture && t.pmremVersion !== s) return r === null && (r = new lc(e)), i = a ? r.fromEquirectangular(t, i) : r.fromCubemap(t, i), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), i.texture;
				if (i !== void 0) return i.texture;
				{
					let s = t.image;
					return a && s && s.height > 0 || o && s && c(s) ? (r === null && (r = new lc(e)), i = a ? r.fromEquirectangular(t) : r.fromCubemap(t), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), t.addEventListener("dispose", u), i.texture) : null;
				}
			}
		}
		return t;
	}
	function s(e, t) {
		return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302), e;
	}
	function c(e) {
		let t = 0;
		for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
		return t === 6;
	}
	function l(e) {
		let n = e.target;
		n.removeEventListener("dispose", l);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function u(e) {
		let t = e.target;
		t.removeEventListener("dispose", u);
		let r = n.get(t);
		r !== void 0 && (n.delete(t), r.dispose());
	}
	function d() {
		t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r !== null && (r.dispose(), r = null);
	}
	return {
		get: i,
		dispose: d
	};
}
function bc(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r = e.getExtension(n);
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function() {
			n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
		},
		get: function(e) {
			let t = n(e);
			return t === null && _t("WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function xc(e, t, n, r) {
	let i = {}, a = /* @__PURE__ */ new WeakMap();
	function o(e) {
		let s = e.target;
		s.index !== null && t.remove(s.index);
		for (let e in s.attributes) t.remove(s.attributes[e]);
		s.removeEventListener("dispose", o), delete i[s.id];
		let c = a.get(s);
		c && (t.remove(c), a.delete(s)), r.releaseStatesOfGeometry(s), s.isInstancedBufferGeometry === !0 && delete s._maxInstanceCount, n.memory.geometries--;
	}
	function s(e, t) {
		return i[t.id] === !0 || (t.addEventListener("dispose", o), i[t.id] = !0, n.memory.geometries++), t;
	}
	function c(n) {
		let r = n.attributes;
		for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
	}
	function l(e) {
		let n = [], r = e.index, i = e.attributes.position, o = 0;
		if (i === void 0) return;
		if (r !== null) {
			let e = r.array;
			o = r.version;
			for (let t = 0, r = e.length; t < r; t += 3) {
				let r = e[t + 0], i = e[t + 1], a = e[t + 2];
				n.push(r, i, i, a, a, r);
			}
		} else {
			let e = i.array;
			o = i.version;
			for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
				let e = t + 0, r = t + 1, i = t + 2;
				n.push(e, r, r, i, i, e);
			}
		}
		let s = new (i.count >= 65535 ? Mr : jr)(n, 1);
		s.version = o;
		let c = a.get(e);
		c && t.remove(c), a.set(e, s);
	}
	function u(e) {
		let t = a.get(e);
		if (t) {
			let n = e.index;
			n !== null && t.version < n.version && l(e);
		} else l(e);
		return a.get(e);
	}
	return {
		get: s,
		update: c,
		getWireframeAttribute: u
	};
}
function Sc(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	let a, o;
	function s(e) {
		a = e.type, o = e.bytesPerElement;
	}
	function c(t, i) {
		e.drawElements(r, i, a, t * o), n.update(i, r, 1);
	}
	function l(t, i, s) {
		s !== 0 && (e.drawElementsInstanced(r, i, a, t * o, s), n.update(i, r, s));
	}
	function u(e, i, o) {
		if (o === 0) return;
		t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, i, 0, a, e, 0, o);
		let s = 0;
		for (let e = 0; e < o; e++) s += i[e];
		n.update(s, r, 1);
	}
	this.setMode = i, this.setIndex = s, this.render = c, this.renderInstances = l, this.renderMultiDraw = u;
}
function Cc(e) {
	let t = {
		geometries: 0,
		textures: 0
	}, n = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	function r(t, r, i) {
		switch (n.calls++, r) {
			case e.TRIANGLES:
				n.triangles += t / 3 * i;
				break;
			case e.LINES:
				n.lines += t / 2 * i;
				break;
			case e.LINE_STRIP:
				n.lines += i * (t - 1);
				break;
			case e.LINE_LOOP:
				n.lines += i * t;
				break;
			case e.POINTS:
				n.points += i * t;
				break;
			default: H("WebGLInfo: Unknown draw mode:", r);
		}
	}
	function i() {
		n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
	}
	return {
		memory: t,
		render: n,
		programs: null,
		autoReset: !0,
		reset: i,
		update: r
	};
}
function wc(e, t, n) {
	let r = /* @__PURE__ */ new WeakMap(), i = new dn();
	function a(a, o, s) {
		let c = a.morphTargetInfluences, l = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = l === void 0 ? 0 : l.length, d = r.get(o);
		if (d === void 0 || d.count !== u) {
			d !== void 0 && d.texture.dispose();
			let e = o.morphAttributes.position !== void 0, n = o.morphAttributes.normal !== void 0, a = o.morphAttributes.color !== void 0, s = o.morphAttributes.position || [], c = o.morphAttributes.normal || [], l = o.morphAttributes.color || [], f = 0;
			e === !0 && (f = 1), n === !0 && (f = 2), a === !0 && (f = 3);
			let p = o.attributes.position.count * f, m = 1;
			p > t.maxTextureSize && (m = Math.ceil(p / t.maxTextureSize), p = t.maxTextureSize);
			let h = new Float32Array(p * m * 4 * u), g = new mn(h, p, m, u);
			g.type = P, g.needsUpdate = !0;
			let _ = f * 4;
			for (let t = 0; t < u; t++) {
				let r = s[t], o = c[t], u = l[t], d = p * m * 4 * t;
				for (let t = 0; t < r.count; t++) {
					let s = t * _;
					e === !0 && (i.fromBufferAttribute(r, t), h[d + s + 0] = i.x, h[d + s + 1] = i.y, h[d + s + 2] = i.z, h[d + s + 3] = 0), n === !0 && (i.fromBufferAttribute(o, t), h[d + s + 4] = i.x, h[d + s + 5] = i.y, h[d + s + 6] = i.z, h[d + s + 7] = 0), a === !0 && (i.fromBufferAttribute(u, t), h[d + s + 8] = i.x, h[d + s + 9] = i.y, h[d + s + 10] = i.z, h[d + s + 11] = u.itemSize === 4 ? i.w : 1);
				}
			}
			d = {
				count: u,
				texture: g,
				size: new W(p, m)
			}, r.set(o, d);
			function v() {
				g.dispose(), r.delete(o), o.removeEventListener("dispose", v);
			}
			o.addEventListener("dispose", v);
		}
		if (a.isInstancedMesh === !0 && a.morphTexture !== null) s.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
		else {
			let t = 0;
			for (let e = 0; e < c.length; e++) t += c[e];
			let n = o.morphTargetsRelative ? 1 : 1 - t;
			s.getUniforms().setValue(e, "morphTargetBaseInfluence", n), s.getUniforms().setValue(e, "morphTargetInfluences", c);
		}
		s.getUniforms().setValue(e, "morphTargetsTexture", d.texture, n), s.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
	}
	return { update: a };
}
function Tc(e, t, n, r, i) {
	let a = /* @__PURE__ */ new WeakMap();
	function o(r) {
		let o = i.render.frame, s = r.geometry, l = t.get(r, s);
		if (a.get(l) !== o && (t.update(l), a.set(l, o)), r.isInstancedMesh && (r.hasEventListener("dispose", c) === !1 && r.addEventListener("dispose", c), a.get(r) !== o && (n.update(r.instanceMatrix, e.ARRAY_BUFFER), r.instanceColor !== null && n.update(r.instanceColor, e.ARRAY_BUFFER), a.set(r, o))), r.isSkinnedMesh) {
			let e = r.skeleton;
			a.get(e) !== o && (e.update(), a.set(e, o));
		}
		return l;
	}
	function s() {
		a = /* @__PURE__ */ new WeakMap();
	}
	function c(e) {
		let t = e.target;
		t.removeEventListener("dispose", c), r.releaseStatesOfObject(t), n.remove(t.instanceMatrix), t.instanceColor !== null && n.remove(t.instanceColor);
	}
	return {
		update: o,
		dispose: s
	};
}
var Ec = {
	1: "LINEAR_TONE_MAPPING",
	2: "REINHARD_TONE_MAPPING",
	3: "CINEON_TONE_MAPPING",
	4: "ACES_FILMIC_TONE_MAPPING",
	6: "AGX_TONE_MAPPING",
	7: "NEUTRAL_TONE_MAPPING",
	5: "CUSTOM_TONE_MAPPING"
};
function Dc(e, t, n, r, i, a) {
	let o = new pn(t, n, {
		type: e,
		depthBuffer: i,
		stencilBuffer: a,
		samples: r ? 4 : 0,
		storeMultisampledDepthBuffer: !1,
		storeMultisampledStencilBuffer: !1,
		resolveDepthBuffer: !1,
		resolveStencilBuffer: !1
	}), s = null, c = null, l = new Gr();
	l.setAttribute("position", new Nr([
		-1,
		3,
		0,
		-1,
		-1,
		0,
		3,
		-1,
		0
	], 3)), l.setAttribute("uv", new Nr([
		0,
		2,
		0,
		0,
		2,
		0
	], 2));
	let u = new Oo({
		uniforms: { tDiffuse: { value: null } },
		vertexShader: "\n			precision highp float;\n\n			uniform mat4 modelViewMatrix;\n			uniform mat4 projectionMatrix;\n\n			attribute vec3 position;\n			attribute vec2 uv;\n\n			varying vec2 vUv;\n\n			void main() {\n				vUv = uv;\n				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n			}",
		fragmentShader: "\n			precision highp float;\n\n			uniform sampler2D tDiffuse;\n\n			varying vec2 vUv;\n\n			#include <tonemapping_pars_fragment>\n			#include <colorspace_pars_fragment>\n\n			void main() {\n				gl_FragColor = texture2D( tDiffuse, vUv );\n\n				#ifdef LINEAR_TONE_MAPPING\n					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n				#elif defined( REINHARD_TONE_MAPPING )\n					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n				#elif defined( CINEON_TONE_MAPPING )\n					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n				#elif defined( ACES_FILMIC_TONE_MAPPING )\n					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n				#elif defined( AGX_TONE_MAPPING )\n					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n				#elif defined( NEUTRAL_TONE_MAPPING )\n					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n				#elif defined( CUSTOM_TONE_MAPPING )\n					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n				#endif\n\n				#ifdef SRGB_TRANSFER\n					gl_FragColor = sRGBTransferOETF( gl_FragColor );\n				#endif\n			}",
		depthTest: !1,
		depthWrite: !1
	}), d = new Pi(l, u), f = new fs(-1, 1, 1, -1, 0, 1), p = null, m = null, h = !1, g, _ = null, v = [], y = !1;
	this.setSize = function(e, t) {
		o.setSize(e, t), s !== null && s.setSize(e, t), c !== null && c.setSize(e, t);
		for (let n = 0; n < v.length; n++) {
			let r = v[n];
			r.setSize && r.setSize(e, t);
		}
	}, this.setEffects = function(e) {
		v = e, y = v.length > 0 && v[0].isRenderPass === !0;
		let t = o.width, n = o.height;
		v.length > 0 && s === null && (s = new pn(t, n, {
			type: re,
			depthBuffer: !1,
			stencilBuffer: !1
		}), c = new pn(t, n, {
			type: re,
			depthBuffer: !1,
			stencilBuffer: !1
		}));
		for (let e = 0; e < v.length; e++) {
			let r = v[e];
			r.setSize && r.setSize(t, n);
		}
	}, this.begin = function(e, t) {
		if (h || e.toneMapping === 0 && v.length === 0) return !1;
		if (_ = t, t !== null) {
			let e = t.width, n = t.height;
			(o.width !== e || o.height !== n) && this.setSize(e, n);
		}
		return y === !1 && e.setRenderTarget(o), g = e.toneMapping, e.toneMapping = 0, !0;
	}, this.hasRenderPass = function() {
		return y;
	}, this.end = function(e, t) {
		e.toneMapping = g, h = !0;
		let n = o, r = s;
		for (let i = 0; i < v.length; i++) {
			let a = v[i];
			a.enabled !== !1 && (a.render(e, r, n, t), a.needsSwap !== !1 && (n = r, r = r === s ? c : s));
		}
		if (p !== e.outputColorSpace || m !== e.toneMapping) {
			p = e.outputColorSpace, m = e.toneMapping, u.defines = {}, q.getTransfer(p) === "srgb" && (u.defines.SRGB_TRANSFER = "");
			let t = Ec[m];
			t && (u.defines[t] = ""), u.needsUpdate = !0;
		}
		u.uniforms.tDiffuse.value = n.texture, e.setRenderTarget(_), e.render(d, f), _ = null, h = !1;
	}, this.isCompositing = function() {
		return h;
	}, this.dispose = function() {
		o.dispose(), s !== null && s.dispose(), c !== null && c.dispose(), l.dispose(), u.dispose();
	};
}
var Oc = /*@__PURE__*/ new un(), kc = /*@__PURE__*/ new Wi(1, 1), Ac = /*@__PURE__*/ new mn(), jc = /*@__PURE__*/ new hn(), Mc = /*@__PURE__*/ new Hi(), Nc = [], Pc = [], Fc = /* @__PURE__ */ new Float32Array(16), Ic = /* @__PURE__ */ new Float32Array(9), Lc = /* @__PURE__ */ new Float32Array(4);
function Rc(e, t, n) {
	let r = e[0];
	if (r <= 0 || r > 0) return e;
	let i = t * n, a = Nc[i];
	if (a === void 0 && (a = new Float32Array(i), Nc[i] = a), t !== 0) {
		r.toArray(a, 0);
		for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i);
	}
	return a;
}
function zc(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Bc(e, t) {
	for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function Vc(e, t) {
	let n = Pc[t];
	n === void 0 && (n = new Int32Array(t), Pc[t] = n);
	for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function Hc(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function Uc(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (zc(n, t)) return;
		e.uniform2fv(this.addr, t), Bc(n, t);
	}
}
function Wc(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else if (t.r !== void 0) (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
	else {
		if (zc(n, t)) return;
		e.uniform3fv(this.addr, t), Bc(n, t);
	}
}
function Gc(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (zc(n, t)) return;
		e.uniform4fv(this.addr, t), Bc(n, t);
	}
}
function Kc(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (zc(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), Bc(n, t);
	} else {
		if (zc(n, r)) return;
		Lc.set(r), e.uniformMatrix2fv(this.addr, !1, Lc), Bc(n, r);
	}
}
function qc(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (zc(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), Bc(n, t);
	} else {
		if (zc(n, r)) return;
		Ic.set(r), e.uniformMatrix3fv(this.addr, !1, Ic), Bc(n, r);
	}
}
function Jc(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (zc(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), Bc(n, t);
	} else {
		if (zc(n, r)) return;
		Fc.set(r), e.uniformMatrix4fv(this.addr, !1, Fc), Bc(n, r);
	}
}
function Yc(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function Xc(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (zc(n, t)) return;
		e.uniform2iv(this.addr, t), Bc(n, t);
	}
}
function Zc(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (zc(n, t)) return;
		e.uniform3iv(this.addr, t), Bc(n, t);
	}
}
function Qc(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (zc(n, t)) return;
		e.uniform4iv(this.addr, t), Bc(n, t);
	}
}
function $c(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function el(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (zc(n, t)) return;
		e.uniform2uiv(this.addr, t), Bc(n, t);
	}
}
function tl(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (zc(n, t)) return;
		e.uniform3uiv(this.addr, t), Bc(n, t);
	}
}
function nl(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (zc(n, t)) return;
		e.uniform4uiv(this.addr, t), Bc(n, t);
	}
}
function rl(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i);
	let a;
	this.type === e.SAMPLER_2D_SHADOW ? (kc.compareFunction = n.isReversedDepthBuffer() ? 518 : 515, a = kc) : a = Oc, n.setTexture2D(t || a, i);
}
function il(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || jc, i);
}
function al(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTextureCube(t || Mc, i);
}
function ol(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || Ac, i);
}
function sl(e) {
	switch (e) {
		case 5126: return Hc;
		case 35664: return Uc;
		case 35665: return Wc;
		case 35666: return Gc;
		case 35674: return Kc;
		case 35675: return qc;
		case 35676: return Jc;
		case 5124:
		case 35670: return Yc;
		case 35667:
		case 35671: return Xc;
		case 35668:
		case 35672: return Zc;
		case 35669:
		case 35673: return Qc;
		case 5125: return $c;
		case 36294: return el;
		case 36295: return tl;
		case 36296: return nl;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return rl;
		case 35679:
		case 36299:
		case 36307: return il;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return al;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return ol;
	}
}
function cl(e, t) {
	e.uniform1fv(this.addr, t);
}
function ll(e, t) {
	let n = Rc(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function ul(e, t) {
	let n = Rc(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function dl(e, t) {
	let n = Rc(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function fl(e, t) {
	let n = Rc(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function pl(e, t) {
	let n = Rc(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function ml(e, t) {
	let n = Rc(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function hl(e, t) {
	e.uniform1iv(this.addr, t);
}
function gl(e, t) {
	e.uniform2iv(this.addr, t);
}
function _l(e, t) {
	e.uniform3iv(this.addr, t);
}
function vl(e, t) {
	e.uniform4iv(this.addr, t);
}
function yl(e, t) {
	e.uniform1uiv(this.addr, t);
}
function bl(e, t) {
	e.uniform2uiv(this.addr, t);
}
function xl(e, t) {
	e.uniform3uiv(this.addr, t);
}
function Sl(e, t) {
	e.uniform4uiv(this.addr, t);
}
function Cl(e, t, n) {
	let r = this.cache, i = t.length, a = Vc(n, i);
	zc(r, a) || (e.uniform1iv(this.addr, a), Bc(r, a));
	let o;
	o = this.type === e.SAMPLER_2D_SHADOW ? kc : Oc;
	for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || o, a[e]);
}
function wl(e, t, n) {
	let r = this.cache, i = t.length, a = Vc(n, i);
	zc(r, a) || (e.uniform1iv(this.addr, a), Bc(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || jc, a[e]);
}
function Tl(e, t, n) {
	let r = this.cache, i = t.length, a = Vc(n, i);
	zc(r, a) || (e.uniform1iv(this.addr, a), Bc(r, a));
	for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || Mc, a[e]);
}
function El(e, t, n) {
	let r = this.cache, i = t.length, a = Vc(n, i);
	zc(r, a) || (e.uniform1iv(this.addr, a), Bc(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || Ac, a[e]);
}
function Dl(e) {
	switch (e) {
		case 5126: return cl;
		case 35664: return ll;
		case 35665: return ul;
		case 35666: return dl;
		case 35674: return fl;
		case 35675: return pl;
		case 35676: return ml;
		case 5124:
		case 35670: return hl;
		case 35667:
		case 35671: return gl;
		case 35668:
		case 35672: return _l;
		case 35669:
		case 35673: return vl;
		case 5125: return yl;
		case 36294: return bl;
		case 36295: return xl;
		case 36296: return Sl;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return Cl;
		case 35679:
		case 36299:
		case 36307: return wl;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return Tl;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return El;
	}
}
var Ol = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = sl(t.type);
	}
}, kl = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Dl(t.type);
	}
}, Al = class {
	constructor(e) {
		this.id = e, this.seq = [], this.map = {};
	}
	setValue(e, t, n) {
		let r = this.seq;
		for (let i = 0, a = r.length; i !== a; ++i) {
			let a = r[i];
			a.setValue(e, t[a.id], n);
		}
	}
}, jl = /(\w+)(\])?(\[|\.)?/g;
function Ml(e, t) {
	e.seq.push(t), e.map[t.id] = t;
}
function Nl(e, t, n) {
	let r = e.name, i = r.length;
	for (jl.lastIndex = 0;;) {
		let a = jl.exec(r), o = jl.lastIndex, s = a[1], c = a[2] === "]", l = a[3];
		if (c && (s |= 0), l === void 0 || l === "[" && o + 2 === i) {
			Ml(n, l === void 0 ? new Ol(s, e, t) : new kl(s, e, t));
			break;
		}
		{
			let e = n.map[s];
			e === void 0 && (e = new Al(s), Ml(n, e)), n = e;
		}
	}
}
var Pl = class {
	constructor(e, t) {
		this.seq = [], this.map = {};
		let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
		for (let r = 0; r < n; ++r) {
			let n = e.getActiveUniform(t, r);
			Nl(n, e.getUniformLocation(t, n.name), this);
		}
		let r = [], i = [];
		for (let t of this.seq) t.type === e.SAMPLER_2D_SHADOW || t.type === e.SAMPLER_CUBE_SHADOW || t.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(t) : i.push(t);
		r.length > 0 && (this.seq = r.concat(i));
	}
	setValue(e, t, n, r) {
		let i = this.map[t];
		i !== void 0 && i.setValue(e, n, r);
	}
	setOptional(e, t, n) {
		let r = t[n];
		r !== void 0 && this.setValue(e, n, r);
	}
	static upload(e, t, n, r) {
		for (let i = 0, a = t.length; i !== a; ++i) {
			let a = t[i], o = n[a.id];
			o.needsUpdate !== !1 && a.setValue(e, o.value, r);
		}
	}
	static seqWithValue(e, t) {
		let n = [];
		for (let r = 0, i = e.length; r !== i; ++r) {
			let i = e[r];
			i.id in t && n.push(i);
		}
		return n;
	}
};
function Fl(e, t, n) {
	let r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
var Il = 37297, Ll = 0;
function Rl(e, t) {
	let n = e.split("\n"), r = [], i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
	for (let e = i; e < a; e++) {
		let i = e + 1;
		r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
	}
	return r.join("\n");
}
var zl = /*@__PURE__*/ new K();
function Bl(e) {
	q._getMatrix(zl, q.workingColorSpace, e);
	let t = `mat3( ${zl.elements.map((e) => e.toFixed(4))} )`;
	switch (q.getTransfer(e)) {
		case at: return [t, "LinearTransferOETF"];
		case ot: return [t, "sRGBTransferOETF"];
		default: return V("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
	}
}
function Vl(e, t, n) {
	let r = e.getShaderParameter(t, e.COMPILE_STATUS), i = (e.getShaderInfoLog(t) || "").trim();
	if (r && i === "") return "";
	let a = /ERROR: 0:(\d+)/.exec(i);
	if (a) {
		let r = parseInt(a[1]);
		return n.toUpperCase() + "\n\n" + i + "\n\n" + Rl(e.getShaderSource(t), r);
	}
	return i;
}
function Hl(e, t) {
	let n = Bl(t);
	return [
		`vec4 ${e}( vec4 value ) {`,
		`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
		"}"
	].join("\n");
}
var Ul = {
	1: "Linear",
	2: "Reinhard",
	3: "Cineon",
	4: "ACESFilmic",
	6: "AgX",
	7: "Neutral",
	5: "Custom"
};
function Wl(e, t) {
	let n = Ul[t];
	return n === void 0 ? (V("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var Gl = /*@__PURE__*/ new G();
function Kl() {
	return q.getLuminanceCoefficients(Gl), [
		"float luminance( const in vec3 rgb ) {",
		`	const vec3 weights = vec3( ${Gl.x.toFixed(4)}, ${Gl.y.toFixed(4)}, ${Gl.z.toFixed(4)} );`,
		"	return dot( weights, rgb );",
		"}"
	].join("\n");
}
function ql(e) {
	return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Xl).join("\n");
}
function Jl(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r !== !1 && t.push("#define " + n + " " + r);
	}
	return t.join("\n");
}
function Yl(e, t) {
	let n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
	for (let i = 0; i < r; i++) {
		let r = e.getActiveAttrib(t, i), a = r.name, o = 1;
		r.type === e.FLOAT_MAT2 && (o = 2), r.type === e.FLOAT_MAT3 && (o = 3), r.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
			type: r.type,
			location: e.getAttribLocation(t, a),
			locationSize: o
		};
	}
	return n;
}
function Xl(e) {
	return e !== "";
}
function Zl(e, t) {
	let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
	return e.replace(/NUM_SUN_LIGHTS/g, t.numSunLights).replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Ql(e, t) {
	return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var $l = /^[ \t]*#include +<([\w\d./]+)>/gm;
function eu(e) {
	return e.replace($l, nu);
}
var tu = /* @__PURE__ */ new Map();
function nu(e, t) {
	let n = X[t];
	if (n === void 0) {
		let e = tu.get(t);
		if (e !== void 0) n = X[e], V("WebGLRenderer: Shader chunk \"%s\" has been deprecated. Use \"%s\" instead.", t, e);
		else throw Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
	}
	return eu(n);
}
var ru = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function iu(e) {
	return e.replace(ru, au);
}
function au(e, t, n, r) {
	let i = "";
	for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
	return i;
}
function ou(e) {
	let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
	return e.precision === "highp" ? t += "\n#define HIGH_PRECISION" : e.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : e.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
var su = {
	1: "SHADOWMAP_TYPE_PCF",
	3: "SHADOWMAP_TYPE_VSM"
};
function cu(e) {
	return su[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var lu = {
	301: "ENVMAP_TYPE_CUBE",
	302: "ENVMAP_TYPE_CUBE",
	306: "ENVMAP_TYPE_CUBE_UV"
};
function uu(e) {
	return e.envMap === !1 ? "ENVMAP_TYPE_CUBE" : lu[e.envMapMode] || "ENVMAP_TYPE_CUBE";
}
var du = { 302: "ENVMAP_MODE_REFRACTION" };
function fu(e) {
	return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : du[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var pu = {
	0: "ENVMAP_BLENDING_MULTIPLY",
	1: "ENVMAP_BLENDING_MIX",
	2: "ENVMAP_BLENDING_ADD"
};
function mu(e) {
	return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : pu[e.combine] || "ENVMAP_BLENDING_NONE";
}
function hu(e) {
	let t = e.envMapCubeUVHeight;
	if (t === null) return null;
	let n = Math.log2(t) - 2, r = 1 / t;
	return {
		texelWidth: 1 / (3 * Math.max(2 ** n, 112)),
		texelHeight: r,
		maxMip: n
	};
}
function gu(e, t, n, r) {
	let i = e.getContext(), a = n.defines, o = n.vertexShader, s = n.fragmentShader, c = cu(n), l = uu(n), u = fu(n), d = mu(n), f = hu(n), p = ql(n), m = Jl(a), h = i.createProgram(), g, _, v = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
	n.isRawShaderMaterial ? (g = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(Xl).join("\n"), g.length > 0 && (g += "\n"), _ = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m
	].filter(Xl).join("\n"), _.length > 0 && (_ += "\n")) : (g = [
		ou(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
		n.batching ? "#define USE_BATCHING" : "",
		n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
		n.instancing ? "#define USE_INSTANCING" : "",
		n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
		n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + u : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.mapUv ? "#define MAP_UV " + n.mapUv : "",
		n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
		n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
		n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
		n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
		n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
		n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
		n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
		n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
		n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
		n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
		n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
		n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
		n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
		n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
		n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
		n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
		n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
		n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
		n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
		n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
		n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
		n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexNormals ? "#define HAS_NORMAL" : "",
		n.vertexColors ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.skinning ? "#define USE_SKINNING" : "",
		n.morphTargets ? "#define USE_MORPHTARGETS" : "",
		n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
		n.morphColors ? "#define USE_MORPHCOLORS" : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 modelMatrix;",
		"uniform mat4 modelViewMatrix;",
		"uniform mat4 projectionMatrix;",
		"uniform mat4 viewMatrix;",
		"uniform mat3 normalMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		"#ifdef USE_INSTANCING",
		"	attribute mat4 instanceMatrix;",
		"#endif",
		"#ifdef USE_INSTANCING_COLOR",
		"	attribute vec3 instanceColor;",
		"#endif",
		"#ifdef USE_INSTANCING_MORPH",
		"	uniform sampler2D morphTexture;",
		"#endif",
		"attribute vec3 position;",
		"attribute vec3 normal;",
		"attribute vec2 uv;",
		"#ifdef USE_UV1",
		"	attribute vec2 uv1;",
		"#endif",
		"#ifdef USE_UV2",
		"	attribute vec2 uv2;",
		"#endif",
		"#ifdef USE_UV3",
		"	attribute vec2 uv3;",
		"#endif",
		"#ifdef USE_TANGENT",
		"	attribute vec4 tangent;",
		"#endif",
		"#if defined( USE_COLOR_ALPHA )",
		"	attribute vec4 color;",
		"#elif defined( USE_COLOR )",
		"	attribute vec3 color;",
		"#endif",
		"#ifdef USE_SKINNING",
		"	attribute vec4 skinIndex;",
		"	attribute vec4 skinWeight;",
		"#endif",
		"\n"
	].filter(Xl).join("\n"), _ = [
		ou(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		m,
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
		n.map ? "#define USE_MAP" : "",
		n.matcap ? "#define USE_MATCAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + l : "",
		n.envMap ? "#define " + u : "",
		n.envMap ? "#define " + d : "",
		f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
		f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
		f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoat ? "#define USE_CLEARCOAT" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.dispersion ? "#define USE_DISPERSION" : "",
		n.retroreflection ? "#define USE_RETROREFLECTION" : "",
		n.iridescence ? "#define USE_IRIDESCENCE" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaTest ? "#define USE_ALPHATEST" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.sheen ? "#define USE_SHEEN" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
		n.vertexAlphas || n.batchingColor ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.gradientMap ? "#define USE_GRADIENTMAP" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
		n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
		n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 viewMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		n.toneMapping === 0 ? "" : "#define TONE_MAPPING",
		n.toneMapping === 0 ? "" : X.tonemapping_pars_fragment,
		n.toneMapping === 0 ? "" : Wl("toneMapping", n.toneMapping),
		n.dithering ? "#define DITHERING" : "",
		n.opaque ? "#define OPAQUE" : "",
		X.colorspace_pars_fragment,
		Hl("linearToOutputTexel", n.outputColorSpace),
		Kl(),
		n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
		"\n"
	].filter(Xl).join("\n")), o = eu(o), o = Zl(o, n), o = Ql(o, n), s = eu(s), s = Zl(s, n), s = Ql(s, n), o = iu(o), s = iu(s), n.isRawShaderMaterial !== !0 && (v = "#version 300 es\n", g = [
		p,
		"#define attribute in",
		"#define varying out",
		"#define texture2D texture"
	].join("\n") + "\n" + g, _ = [
		"#define varying in",
		n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
		n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
		"#define gl_FragDepthEXT gl_FragDepth",
		"#define texture2D texture",
		"#define textureCube texture",
		"#define texture2DProj textureProj",
		"#define texture2DLodEXT textureLod",
		"#define texture2DProjLodEXT textureProjLod",
		"#define textureCubeLodEXT textureLod",
		"#define texture2DGradEXT textureGrad",
		"#define texture2DProjGradEXT textureProjGrad",
		"#define textureCubeGradEXT textureGrad"
	].join("\n") + "\n" + _);
	let y = v + g + o, b = v + _ + s, x = Fl(i, i.VERTEX_SHADER, y), S = Fl(i, i.FRAGMENT_SHADER, b);
	i.attachShader(h, x), i.attachShader(h, S), n.index0AttributeName === void 0 ? n.hasPositionAttribute === !0 && i.bindAttribLocation(h, 0, "position") : i.bindAttribLocation(h, 0, n.index0AttributeName), i.linkProgram(h);
	function C(t) {
		if (e.debug.checkShaderErrors) {
			let n = i.getProgramInfoLog(h) || "", r = i.getShaderInfoLog(x) || "", a = i.getShaderInfoLog(S) || "", o = n.trim(), s = r.trim(), c = a.trim(), l = !0, u = !0;
			if (i.getProgramParameter(h, i.LINK_STATUS) === !1) {
				if (l = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(i, h, x, S);
				else {
					let e = Vl(i, x, "vertex"), n = Vl(i, S, "fragment");
					H("WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(h, i.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + o + "\n" + e + "\n" + n);
				}
			} else o === "" ? (s === "" || c === "") && (u = !1) : V("WebGLProgram: Program Info Log:", o);
			u && (t.diagnostics = {
				runnable: l,
				programLog: o,
				vertexShader: {
					log: s,
					prefix: g
				},
				fragmentShader: {
					log: c,
					prefix: _
				}
			});
		}
		i.deleteShader(x), i.deleteShader(S), w = new Pl(i, h), T = Yl(i, h);
	}
	let w;
	this.getUniforms = function() {
		return w === void 0 && C(this), w;
	};
	let T;
	this.getAttributes = function() {
		return T === void 0 && C(this), T;
	};
	let E = n.rendererExtensionParallelShaderCompile === !1;
	return this.isReady = function() {
		return E === !1 && (E = i.getProgramParameter(h, Il)), E;
	}, this.destroy = function() {
		r.releaseStatesOfProgram(this), i.deleteProgram(h), this.program = void 0;
	}, this.type = n.shaderType, this.name = n.shaderName, this.id = Ll++, this.cacheKey = t, this.usedTimes = 1, this.program = h, this.vertexShader = x, this.fragmentShader = S, this;
}
var _u = 0, vu = class {
	constructor() {
		this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
	}
	update(e, t, n) {
		let r = this._getShaderCacheForMaterial(e);
		return r.has(t) === !1 && (r.add(t), t.usedTimes++), r.has(n) === !1 && (r.add(n), n.usedTimes++), this;
	}
	remove(e) {
		let t = this.materialCache.get(e);
		for (let e of t) e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code);
		return this.materialCache.delete(e), this;
	}
	getVertexShaderStage(e) {
		return this._getShaderStage(e.vertexShader);
	}
	getFragmentShaderStage(e) {
		return this._getShaderStage(e.fragmentShader);
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear();
	}
	_getShaderCacheForMaterial(e) {
		let t = this.materialCache, n = t.get(e);
		return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
	}
	_getShaderStage(e) {
		let t = this.shaderCache, n = t.get(e);
		return n === void 0 && (n = new yu(e), t.set(e, n)), n;
	}
}, yu = class {
	constructor(e) {
		this.id = _u++, this.code = e, this.usedTimes = 0;
	}
};
function bu(e) {
	return e === 1030 || e === 37490 || e === 36285;
}
function xu(e, t, n, r, i, a) {
	let o = new Dn(), s = new vu(), c = /* @__PURE__ */ new Set(), l = [], u = /* @__PURE__ */ new Map(), d = r.logarithmicDepthBuffer, f = r.precision, p = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distance",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};
	function m(e) {
		return c.add(e), e === 0 ? "uv" : `uv${e}`;
	}
	function h(i, o, l, u, h, g) {
		let _ = u.fog, v = h.geometry, y = i.isMeshStandardMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial ? u.environment : null, b = i.isMeshStandardMaterial || i.isMeshLambertMaterial && !i.envMap || i.isMeshPhongMaterial && !i.envMap, x = t.get(i.envMap || y, b), S = x && x.mapping === 306 ? x.image.height : null, C = p[i.type];
		i.precision !== null && (f = r.getMaxPrecision(i.precision), f !== i.precision && V("WebGLProgram.getParameters:", i.precision, "not supported, using", f, "instead."));
		let w = v.morphAttributes.position || v.morphAttributes.normal || v.morphAttributes.color, T = w === void 0 ? 0 : w.length, E = 0;
		v.morphAttributes.position !== void 0 && (E = 1), v.morphAttributes.normal !== void 0 && (E = 2), v.morphAttributes.color !== void 0 && (E = 3);
		let D, O, k, A;
		if (C) {
			let e = Hs[C];
			D = e.vertexShader, O = e.fragmentShader;
		} else {
			D = i.vertexShader, O = i.fragmentShader;
			let e = s.getVertexShaderStage(i), t = s.getFragmentShaderStage(i);
			s.update(i, e, t), k = e.id, A = t.id;
		}
		let j = e.getRenderTarget(), M = e.state.buffers.depth.getReversed(), N = h.isInstancedMesh === !0, ee = h.isBatchedMesh === !0, te = !!i.map, ne = !!i.matcap, P = !!x, re = !!i.aoMap, ie = !!i.lightMap, ae = !!i.bumpMap && i.wireframe === !1, oe = !!i.normalMap, se = !!i.displacementMap, ce = !!i.emissiveMap, F = !!i.metalnessMap, I = !!i.roughnessMap, le = i.anisotropy > 0, ue = i.clearcoat > 0, de = i.dispersion > 0, fe = i.retroreflectivity > 0, pe = i.iridescence > 0, me = i.sheen > 0, he = i.transmission > 0, ge = le && !!i.anisotropyMap, _e = ue && !!i.clearcoatMap, ve = ue && !!i.clearcoatNormalMap, ye = ue && !!i.clearcoatRoughnessMap, be = pe && !!i.iridescenceMap, xe = pe && !!i.iridescenceThicknessMap, Se = me && !!i.sheenColorMap, Ce = me && !!i.sheenRoughnessMap, we = !!i.specularMap, Te = !!i.specularColorMap, Ee = !!i.specularIntensityMap, De = he && !!i.transmissionMap, Oe = he && !!i.thicknessMap, ke = !!i.gradientMap, Ae = !!i.alphaMap, je = i.alphaTest > 0, L = !!i.alphaHash, Me = !!i.extensions, Ne = 0;
		i.toneMapped && (j === null || j.isXRRenderTarget === !0) && (Ne = e.toneMapping);
		let Pe = {
			shaderID: C,
			shaderType: i.type,
			shaderName: i.name,
			vertexShader: D,
			fragmentShader: O,
			defines: i.defines,
			customVertexShaderID: k,
			customFragmentShaderID: A,
			isRawShaderMaterial: i.isRawShaderMaterial === !0,
			glslVersion: i.glslVersion,
			precision: f,
			batching: ee,
			batchingColor: ee && h._colorsTexture !== null,
			instancing: N,
			instancingColor: N && h.instanceColor !== null,
			instancingMorph: N && h.morphTexture !== null,
			outputColorSpace: j === null ? e.outputColorSpace : j.isXRRenderTarget === !0 ? j.texture.colorSpace : q.workingColorSpace,
			alphaToCoverage: !!i.alphaToCoverage,
			map: te,
			matcap: ne,
			envMap: P,
			envMapMode: P && x.mapping,
			envMapCubeUVHeight: S,
			aoMap: re,
			lightMap: ie,
			bumpMap: ae,
			normalMap: oe,
			displacementMap: se,
			emissiveMap: ce,
			normalMapObjectSpace: oe && i.normalMapType === 1,
			normalMapTangentSpace: oe && i.normalMapType === 0,
			packedNormalMap: oe && i.normalMapType === 0 && bu(i.normalMap.format),
			metalnessMap: F,
			roughnessMap: I,
			anisotropy: le,
			anisotropyMap: ge,
			clearcoat: ue,
			clearcoatMap: _e,
			clearcoatNormalMap: ve,
			clearcoatRoughnessMap: ye,
			dispersion: de,
			retroreflection: fe,
			iridescence: pe,
			iridescenceMap: be,
			iridescenceThicknessMap: xe,
			sheen: me,
			sheenColorMap: Se,
			sheenRoughnessMap: Ce,
			specularMap: we,
			specularColorMap: Te,
			specularIntensityMap: Ee,
			transmission: he,
			transmissionMap: De,
			thicknessMap: Oe,
			gradientMap: ke,
			opaque: i.transparent === !1 && i.blending === 1 && i.alphaToCoverage === !1,
			alphaMap: Ae,
			alphaTest: je,
			alphaHash: L,
			combine: i.combine,
			mapUv: te && m(i.map.channel),
			aoMapUv: re && m(i.aoMap.channel),
			lightMapUv: ie && m(i.lightMap.channel),
			bumpMapUv: ae && m(i.bumpMap.channel),
			normalMapUv: oe && m(i.normalMap.channel),
			displacementMapUv: se && m(i.displacementMap.channel),
			emissiveMapUv: ce && m(i.emissiveMap.channel),
			metalnessMapUv: F && m(i.metalnessMap.channel),
			roughnessMapUv: I && m(i.roughnessMap.channel),
			anisotropyMapUv: ge && m(i.anisotropyMap.channel),
			clearcoatMapUv: _e && m(i.clearcoatMap.channel),
			clearcoatNormalMapUv: ve && m(i.clearcoatNormalMap.channel),
			clearcoatRoughnessMapUv: ye && m(i.clearcoatRoughnessMap.channel),
			iridescenceMapUv: be && m(i.iridescenceMap.channel),
			iridescenceThicknessMapUv: xe && m(i.iridescenceThicknessMap.channel),
			sheenColorMapUv: Se && m(i.sheenColorMap.channel),
			sheenRoughnessMapUv: Ce && m(i.sheenRoughnessMap.channel),
			specularMapUv: we && m(i.specularMap.channel),
			specularColorMapUv: Te && m(i.specularColorMap.channel),
			specularIntensityMapUv: Ee && m(i.specularIntensityMap.channel),
			transmissionMapUv: De && m(i.transmissionMap.channel),
			thicknessMapUv: Oe && m(i.thicknessMap.channel),
			alphaMapUv: Ae && m(i.alphaMap.channel),
			vertexTangents: !!v.attributes.tangent && (oe || le),
			vertexNormals: !!v.attributes.normal,
			vertexColors: i.vertexColors,
			vertexAlphas: i.vertexColors === !0 && !!v.attributes.color && v.attributes.color.itemSize === 4,
			pointsUvs: h.isPoints === !0 && !!v.attributes.uv && (te || Ae),
			fog: !!_,
			useFog: i.fog === !0,
			fogExp2: !!_ && _.isFogExp2,
			flatShading: i.wireframe === !1 && (i.flatShading === !0 || v.attributes.normal === void 0 && oe === !1 && (i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshPhysicalMaterial)),
			sizeAttenuation: i.sizeAttenuation === !0,
			logarithmicDepthBuffer: d,
			reversedDepthBuffer: M,
			skinning: h.isSkinnedMesh === !0,
			hasPositionAttribute: v.attributes.position !== void 0,
			morphTargets: v.morphAttributes.position !== void 0,
			morphNormals: v.morphAttributes.normal !== void 0,
			morphColors: v.morphAttributes.color !== void 0,
			morphTargetsCount: T,
			morphTextureStride: E,
			numSunLights: o.sun.length,
			numDirLights: o.directional.length,
			numPointLights: o.point.length,
			numSpotLights: o.spot.length,
			numSpotLightMaps: o.spotLightMap.length,
			numRectAreaLights: o.rectArea.length,
			numHemiLights: o.hemi.length,
			numSunLightShadows: o.sunShadowMap.length,
			numDirLightShadows: o.directionalShadowMap.length,
			numPointLightShadows: o.pointShadowMap.length,
			numSpotLightShadows: o.spotShadowMap.length,
			numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
			numLightProbes: o.numLightProbes,
			numLightProbeGrids: g.length,
			numClippingPlanes: a.numPlanes,
			numClipIntersection: a.numIntersection,
			dithering: i.dithering,
			shadowMapEnabled: e.shadowMap.enabled && l.length > 0,
			shadowMapType: e.shadowMap.type,
			toneMapping: Ne,
			decodeVideoTexture: te && i.map.isVideoTexture === !0 && q.getTransfer(i.map.colorSpace) === "srgb",
			decodeVideoTextureEmissive: ce && i.emissiveMap.isVideoTexture === !0 && q.getTransfer(i.emissiveMap.colorSpace) === "srgb",
			premultipliedAlpha: i.premultipliedAlpha,
			doubleSided: i.side === 2,
			flipSided: i.side === 1,
			useDepthPacking: i.depthPacking >= 0,
			depthPacking: i.depthPacking || 0,
			index0AttributeName: i.index0AttributeName,
			extensionClipCullDistance: Me && i.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
			extensionMultiDraw: (Me && i.extensions.multiDraw === !0 || ee) && n.has("WEBGL_multi_draw"),
			rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
			customProgramCacheKey: i.customProgramCacheKey()
		};
		return Pe.vertexUv1s = c.has(1), Pe.vertexUv2s = c.has(2), Pe.vertexUv3s = c.has(3), c.clear(), Pe;
	}
	function g(t) {
		let n = [];
		if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), t.defines !== void 0) for (let e in t.defines) n.push(e), n.push(t.defines[e]);
		return t.isRawShaderMaterial === !1 && (_(n, t), v(n, t), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join();
	}
	function _(e, t) {
		e.push(t.precision), e.push(t.outputColorSpace), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.mapUv), e.push(t.alphaMapUv), e.push(t.lightMapUv), e.push(t.aoMapUv), e.push(t.bumpMapUv), e.push(t.normalMapUv), e.push(t.displacementMapUv), e.push(t.emissiveMapUv), e.push(t.metalnessMapUv), e.push(t.roughnessMapUv), e.push(t.anisotropyMapUv), e.push(t.clearcoatMapUv), e.push(t.clearcoatNormalMapUv), e.push(t.clearcoatRoughnessMapUv), e.push(t.iridescenceMapUv), e.push(t.iridescenceThicknessMapUv), e.push(t.sheenColorMapUv), e.push(t.sheenRoughnessMapUv), e.push(t.specularMapUv), e.push(t.specularColorMapUv), e.push(t.specularIntensityMapUv), e.push(t.transmissionMapUv), e.push(t.thicknessMapUv), e.push(t.combine), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numSunLights), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numSunLightShadows), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.numLightProbes), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking);
	}
	function v(e, t) {
		o.disableAll(), t.instancing && o.enable(0), t.instancingColor && o.enable(1), t.instancingMorph && o.enable(2), t.matcap && o.enable(3), t.envMap && o.enable(4), t.normalMapObjectSpace && o.enable(5), t.normalMapTangentSpace && o.enable(6), t.clearcoat && o.enable(7), t.iridescence && o.enable(8), t.alphaTest && o.enable(9), t.vertexColors && o.enable(10), t.vertexAlphas && o.enable(11), t.vertexUv1s && o.enable(12), t.vertexUv2s && o.enable(13), t.vertexUv3s && o.enable(14), t.vertexTangents && o.enable(15), t.anisotropy && o.enable(16), t.alphaHash && o.enable(17), t.batching && o.enable(18), t.dispersion && o.enable(19), t.retroreflection && o.enable(24), t.batchingColor && o.enable(20), t.gradientMap && o.enable(21), t.packedNormalMap && o.enable(22), t.vertexNormals && o.enable(23), e.push(o.mask), o.disableAll(), t.fog && o.enable(0), t.useFog && o.enable(1), t.flatShading && o.enable(2), t.logarithmicDepthBuffer && o.enable(3), t.reversedDepthBuffer && o.enable(4), t.skinning && o.enable(5), t.morphTargets && o.enable(6), t.morphNormals && o.enable(7), t.morphColors && o.enable(8), t.premultipliedAlpha && o.enable(9), t.shadowMapEnabled && o.enable(10), t.doubleSided && o.enable(11), t.flipSided && o.enable(12), t.useDepthPacking && o.enable(13), t.dithering && o.enable(14), t.transmission && o.enable(15), t.sheen && o.enable(16), t.opaque && o.enable(17), t.pointsUvs && o.enable(18), t.decodeVideoTexture && o.enable(19), t.decodeVideoTextureEmissive && o.enable(20), t.alphaToCoverage && o.enable(21), t.numLightProbeGrids > 0 && o.enable(22), t.hasPositionAttribute && o.enable(23), e.push(o.mask);
	}
	function y(e) {
		let t = p[e.type], n;
		if (t) {
			let e = Hs[t];
			n = wo.clone(e.uniforms);
		} else n = e.uniforms;
		return n;
	}
	function b(t, n) {
		let r = u.get(n);
		return r === void 0 ? (r = new gu(e, n, t, i), l.push(r), u.set(n, r)) : ++r.usedTimes, r;
	}
	function x(e) {
		if (--e.usedTimes === 0) {
			let t = l.indexOf(e);
			l[t] = l[l.length - 1], l.pop(), u.delete(e.cacheKey), e.destroy();
		}
	}
	function S(e) {
		s.remove(e);
	}
	function C() {
		s.dispose();
	}
	return {
		getParameters: h,
		getProgramCacheKey: g,
		getUniforms: y,
		acquireProgram: b,
		releaseProgram: x,
		releaseShaderCache: S,
		programs: l,
		dispose: C
	};
}
function Su() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t) {
		return e.has(t);
	}
	function n(t) {
		let n = e.get(t);
		return n === void 0 && (n = {}, e.set(t, n)), n;
	}
	function r(t) {
		e.delete(t);
	}
	function i(t, n, r) {
		e.get(t)[n] = r;
	}
	function a() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		has: t,
		get: n,
		remove: r,
		update: i,
		dispose: a
	};
}
function Cu(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.materialVariant === t.materialVariant ? e.z === t.z ? e.id - t.id : e.z - t.z : e.materialVariant - t.materialVariant : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function wu(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function Tu() {
	let e = [], t = 0, n = [], r = [], i = [];
	function a() {
		t = 0, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		let t = 0;
		return e.isInstancedMesh && (t += 2), e.isSkinnedMesh && (t += 1), t;
	}
	function s(n, r, i, a, s, c) {
		let l = e[t];
		return l === void 0 ? (l = {
			id: n.id,
			object: n,
			geometry: r,
			material: i,
			materialVariant: o(n),
			groupOrder: a,
			renderOrder: n.renderOrder,
			z: s,
			group: c
		}, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = r, l.material = i, l.materialVariant = o(n), l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = c), t++, l;
	}
	function c(e, t, a, o, c, l, u) {
		u.reversedDepth === !0 && (c = -c);
		let d = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.push(d) : a.transparent === !0 ? i.push(d) : n.push(d);
	}
	function l(e, t, a, o, c, l) {
		let u = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.unshift(u) : a.transparent === !0 ? i.unshift(u) : n.unshift(u);
	}
	function u(e, t) {
		n.length > 1 && n.sort(e || Cu), r.length > 1 && r.sort(t || wu), i.length > 1 && i.sort(t || wu);
	}
	function d() {
		for (let n = t, r = e.length; n < r; n++) {
			let t = e[n];
			if (t.id === null) break;
			t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null;
		}
	}
	return {
		opaque: n,
		transmissive: r,
		transparent: i,
		init: a,
		push: c,
		unshift: l,
		finish: d,
		sort: u
	};
}
function Eu() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t, n) {
		let r = e.get(t), i;
		return r === void 0 ? (i = new Tu(), e.set(t, [i])) : n >= r.length ? (i = new Tu(), r.push(i)) : i = r[n], i;
	}
	function n() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: t,
		dispose: n
	};
}
function Du() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "SunLight":
			case "DirectionalLight":
				n = {
					direction: new G(),
					color: new Y()
				};
				break;
			case "SpotLight":
				n = {
					position: new G(),
					direction: new G(),
					color: new Y(),
					distance: 0,
					coneCos: 0,
					penumbraCos: 0,
					decay: 0
				};
				break;
			case "PointLight":
				n = {
					position: new G(),
					color: new Y(),
					distance: 0,
					decay: 0
				};
				break;
			case "HemisphereLight":
				n = {
					direction: new G(),
					skyColor: new Y(),
					groundColor: new Y()
				};
				break;
			case "RectAreaLight": n = {
				color: new Y(),
				position: new G(),
				halfWidth: new G(),
				halfHeight: new G()
			};
		}
		return e[t.id] = n, n;
	} };
}
function Ou() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "SunLight":
			case "DirectionalLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new W()
				};
				break;
			case "SpotLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new W()
				};
				break;
			case "PointLight": n = {
				shadowIntensity: 1,
				shadowBias: 0,
				shadowNormalBias: 0,
				shadowRadius: 1,
				shadowMapSize: new W(),
				shadowCameraNear: 1,
				shadowCameraFar: 1e3
			};
		}
		return e[t.id] = n, n;
	} };
}
var ku = 0;
function Au(e, t) {
	return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function ju(e) {
	let t = new Du(), n = Ou(), r = {
		version: 0,
		hash: {
			sunLength: -1,
			directionalLength: -1,
			pointLength: -1,
			spotLength: -1,
			rectAreaLength: -1,
			hemiLength: -1,
			numSunShadows: -1,
			numDirectionalShadows: -1,
			numPointShadows: -1,
			numSpotShadows: -1,
			numSpotMaps: -1,
			numLightProbes: -1
		},
		ambient: [
			0,
			0,
			0
		],
		probe: [],
		sun: [],
		sunShadow: [],
		sunShadowMap: [],
		sunShadowMatrix: [],
		sunShadowCascade: [],
		directional: [],
		directionalShadow: [],
		directionalShadowMap: [],
		directionalShadowMatrix: [],
		spot: [],
		spotLightMap: [],
		spotShadow: [],
		spotShadowMap: [],
		spotLightMatrix: [],
		rectArea: [],
		rectAreaLTC1: null,
		rectAreaLTC2: null,
		point: [],
		pointShadow: [],
		pointShadowMap: [],
		pointShadowMatrix: [],
		hemi: [],
		numSpotLightShadowsWithMaps: 0,
		numLightProbes: 0
	};
	for (let e = 0; e < 9; e++) r.probe.push(new G());
	let i = new G(), a = new gn(), o = new gn();
	function s(i) {
		let a = 0, o = 0, s = 0;
		for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
		let c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0, x = 0;
		i.sort(Au);
		for (let e = 0, S = i.length; e < S; e++) {
			let S = i[e], C = S.color, w = S.intensity, T = S.distance, E = null;
			if (S.shadow && S.shadow.map && (E = S.shadow.map.texture.format === 1030 ? S.shadow.map.texture : S.shadow.map.depthTexture || S.shadow.map.texture), S.isAmbientLight) a += C.r * w, o += C.g * w, s += C.b * w;
			else if (S.isLightProbe) {
				for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(S.sh.coefficients[e], w);
				x++;
			} else if (S.isSunLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()), r.sunShadow[l] = t, r.sunShadowMap[l] = E;
					let i = e.getViewportCount();
					for (let t = 0; t < i; t++) r.sunShadowMatrix[u + t] = e.getMatrix(t), r.sunShadowCascade[u + t] = e._cascadeData[t];
					u += i, l++;
				}
				r.sun[c] = e, c++;
			} else if (S.isDirectionalLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, r.directionalShadow[d] = t, r.directionalShadowMap[d] = E, r.directionalShadowMatrix[d] = S.shadow.matrix, g++;
				}
				r.directional[d] = e, d++;
			} else if (S.isSpotLight) {
				let e = t.get(S);
				e.position.setFromMatrixPosition(S.matrixWorld), e.color.copy(C).multiplyScalar(w), e.distance = T, e.coneCos = Math.cos(S.angle), e.penumbraCos = Math.cos(S.angle * (1 - S.penumbra)), e.decay = S.decay, r.spot[p] = e;
				let i = S.shadow;
				if (S.map && (r.spotLightMap[y] = S.map, y++, i.updateMatrices(S), S.castShadow && b++), r.spotLightMatrix[p] = i.matrix, S.castShadow) {
					let e = n.get(S);
					e.shadowIntensity = i.intensity, e.shadowBias = i.bias, e.shadowNormalBias = i.normalBias, e.shadowRadius = i.radius, e.shadowMapSize = i.mapSize, r.spotShadow[p] = e, r.spotShadowMap[p] = E, v++;
				}
				p++;
			} else if (S.isRectAreaLight) {
				let e = t.get(S);
				e.color.copy(C).multiplyScalar(w), e.halfWidth.set(S.width * .5, 0, 0), e.halfHeight.set(0, S.height * .5, 0), r.rectArea[m] = e, m++;
			} else if (S.isPointLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), e.distance = S.distance, e.decay = S.decay, S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, t.shadowCameraNear = e.camera.near, t.shadowCameraFar = e.camera.far, r.pointShadow[f] = t, r.pointShadowMap[f] = E, r.pointShadowMatrix[f] = S.shadow.matrix, _++;
				}
				r.point[f] = e, f++;
			} else if (S.isHemisphereLight) {
				let e = t.get(S);
				e.skyColor.copy(S.color).multiplyScalar(w), e.groundColor.copy(S.groundColor).multiplyScalar(w), r.hemi[h] = e, h++;
			}
		}
		m > 0 && (e.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = Z.LTC_FLOAT_1, r.rectAreaLTC2 = Z.LTC_FLOAT_2) : (r.rectAreaLTC1 = Z.LTC_HALF_1, r.rectAreaLTC2 = Z.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = s;
		let S = r.hash;
		(S.sunLength !== c || S.directionalLength !== d || S.pointLength !== f || S.spotLength !== p || S.rectAreaLength !== m || S.hemiLength !== h || S.numSunShadows !== l || S.numDirectionalShadows !== g || S.numPointShadows !== _ || S.numSpotShadows !== v || S.numSpotMaps !== y || S.numLightProbes !== x) && (r.sun.length = c, r.directional.length = d, r.spot.length = p, r.rectArea.length = m, r.point.length = f, r.hemi.length = h, r.sunShadow.length = l, r.sunShadowMap.length = l, r.sunShadowMatrix.length = u, r.sunShadowCascade.length = u, r.directionalShadow.length = g, r.directionalShadowMap.length = g, r.directionalShadowMatrix.length = g, r.pointShadow.length = _, r.pointShadowMap.length = _, r.pointShadowMatrix.length = _, r.spotShadow.length = v, r.spotShadowMap.length = v, r.spotLightMatrix.length = v + y - b, r.spotLightMap.length = y, r.numSpotLightShadowsWithMaps = b, r.numLightProbes = x, S.sunLength = c, S.directionalLength = d, S.pointLength = f, S.spotLength = p, S.rectAreaLength = m, S.hemiLength = h, S.numSunShadows = l, S.numDirectionalShadows = g, S.numPointShadows = _, S.numSpotShadows = v, S.numSpotMaps = y, S.numLightProbes = x, r.version = ku++);
	}
	function c(e, t) {
		let n = 0, s = 0, c = 0, l = 0, u = 0, d = 0, f = t.matrixWorldInverse;
		for (let t = 0, p = e.length; t < p; t++) {
			let p = e[t];
			if (p.isSunLight) {
				let e = r.sun[n];
				e.direction.setFromMatrixPosition(p.matrixWorld), e.direction.transformDirection(f), n++;
			} else if (p.isDirectionalLight) {
				let e = r.directional[s];
				e.direction.setFromMatrixPosition(p.matrixWorld), i.setFromMatrixPosition(p.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(f), s++;
			} else if (p.isSpotLight) {
				let e = r.spot[l];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), e.direction.setFromMatrixPosition(p.matrixWorld), i.setFromMatrixPosition(p.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(f), l++;
			} else if (p.isRectAreaLight) {
				let e = r.rectArea[u];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), o.identity(), a.copy(p.matrixWorld), a.premultiply(f), o.extractRotation(a), e.halfWidth.set(p.width * .5, 0, 0), e.halfHeight.set(0, p.height * .5, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), u++;
			} else if (p.isPointLight) {
				let e = r.point[c];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), c++;
			} else if (p.isHemisphereLight) {
				let e = r.hemi[d];
				e.direction.setFromMatrixPosition(p.matrixWorld), e.direction.transformDirection(f), d++;
			}
		}
	}
	return {
		setup: s,
		setupView: c,
		state: r
	};
}
function Mu(e) {
	let t = new ju(e), n = [], r = [], i = [];
	function a(e) {
		d.camera = e, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		n.push(e);
	}
	function s(e) {
		r.push(e);
	}
	function c(e) {
		i.push(e);
	}
	function l() {
		t.setup(n);
	}
	function u(e) {
		t.setupView(n, e);
	}
	let d = {
		lightsArray: n,
		shadowsArray: r,
		lightProbeGridArray: i,
		camera: null,
		lights: t,
		transmissionRenderTarget: {},
		textureUnits: 0
	};
	return {
		init: a,
		state: d,
		setupLights: l,
		setupLightsView: u,
		pushLight: o,
		pushShadow: s,
		pushLightProbeGrid: c
	};
}
function Nu(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(n, r = 0) {
		let i = t.get(n), a;
		return i === void 0 ? (a = new Mu(e), t.set(n, [a])) : r >= i.length ? (a = new Mu(e), i.push(a)) : a = i[r], a;
	}
	function r() {
		t = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: n,
		dispose: r
	};
}
var Pu = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", Fu = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );\n	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );\n}", Iu = [
	/*@__PURE__*/ new G(1, 0, 0),
	/*@__PURE__*/ new G(-1, 0, 0),
	/*@__PURE__*/ new G(0, 1, 0),
	/*@__PURE__*/ new G(0, -1, 0),
	/*@__PURE__*/ new G(0, 0, 1),
	/*@__PURE__*/ new G(0, 0, -1)
], Lu = [
	/*@__PURE__*/ new G(0, -1, 0),
	/*@__PURE__*/ new G(0, -1, 0),
	/*@__PURE__*/ new G(0, 0, 1),
	/*@__PURE__*/ new G(0, 0, -1),
	/*@__PURE__*/ new G(0, -1, 0),
	/*@__PURE__*/ new G(0, -1, 0)
], Ru = /*@__PURE__*/ new gn(), zu = /*@__PURE__*/ new G(), Bu = /*@__PURE__*/ new G();
function Vu(e, t, n) {
	let r = new Vi(), i = new W(), a = new W(), o = new dn(), s = new jo(), c = new Mo(), l = {}, u = n.maxTextureSize, d = {
		0: 1,
		1: 0,
		2: 2
	}, f = new Do({
		defines: { VSM_SAMPLES: 8 },
		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new W() },
			radius: { value: 4 }
		},
		vertexShader: Pu,
		fragmentShader: Fu
	}), p = f.clone();
	p.defines.HORIZONTAL_PASS = 1;
	let m = new Gr();
	m.setAttribute("position", new Ar(new Float32Array([
		-1,
		-1,
		.5,
		3,
		-1,
		.5,
		-1,
		3,
		.5
	]), 3));
	let h = new Pi(m, f), g = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
	let _ = this.type;
	this.render = function(t, n, s) {
		if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || t.length === 0) return;
		this.type === 2 && (V("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), this.type = 1);
		let c = e.getRenderTarget(), l = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), f = e.state;
		f.setBlending(0), f.buffers.depth.getReversed() === !0 ? f.buffers.color.setClear(0, 0, 0, 0) : f.buffers.color.setClear(1, 1, 1, 1), f.buffers.depth.setTest(!0), f.setScissorTest(!1);
		let p = _ !== this.type;
		p && n.traverse(function(e) {
			e.material && (Array.isArray(e.material) ? e.material.forEach((e) => e.needsUpdate = !0) : e.material.needsUpdate = !0);
		});
		for (let c = 0, l = t.length; c < l; c++) {
			let l = t[c], d = l.shadow;
			if (d === void 0) {
				V("WebGLShadowMap:", l, "has no shadow.");
				continue;
			}
			if (d.autoUpdate === !1 && d.needsUpdate === !1) continue;
			i.copy(d.mapSize);
			let m = d.getFrameExtents();
			i.multiply(m), a.copy(d.mapSize), (i.x > u || i.y > u) && (i.x > u && (a.x = Math.floor(u / m.x), i.x = a.x * m.x, d.mapSize.x = a.x), i.y > u && (a.y = Math.floor(u / m.y), i.y = a.y * m.y, d.mapSize.y = a.y));
			let h = e.state.buffers.depth.getReversed();
			if (d.camera._reversedDepth = h, d.map === null || p === !0) {
				if (d.map !== null && (d.map.depthTexture !== null && (d.map.depthTexture.dispose(), d.map.depthTexture = null), d.map.dispose()), this.type === 3) {
					if (l.isPointLight) {
						V("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
						continue;
					}
					d.map = new pn(i.x, i.y, {
						format: me,
						type: re,
						minFilter: O,
						magFilter: O,
						generateMipmaps: !1
					}), d.map.texture.name = l.name + ".shadowMap", d.map.depthTexture = new Wi(i.x, i.y, P), d.map.depthTexture.name = l.name + ".shadowMapDepth", d.map.depthTexture.format = ue, d.map.depthTexture.compareFunction = null, d.map.depthTexture.minFilter = T, d.map.depthTexture.magFilter = T;
				} else l.isPointLight ? (d.map = new vc(i.x), d.map.depthTexture = new Gi(i.x, ne)) : (d.map = new pn(i.x, i.y), d.map.depthTexture = new Wi(i.x, i.y, ne)), d.map.depthTexture.name = l.name + ".shadowMap", d.map.depthTexture.format = ue, this.type === 1 ? (d.map.depthTexture.compareFunction = h ? 518 : 515, d.map.depthTexture.minFilter = O, d.map.depthTexture.magFilter = O) : (d.map.depthTexture.compareFunction = null, d.map.depthTexture.minFilter = T, d.map.depthTexture.magFilter = T);
				d.camera.updateProjectionMatrix();
			}
			d.map.isWebGLCubeRenderTarget !== !0 && (d.map.width !== i.x || d.map.height !== i.y) && d.map.setSize(i.x, i.y);
			let g = d.map.isWebGLCubeRenderTarget ? 6 : d.getViewportCount();
			l.isPointLight !== !0 && d.updateMatrices(l, s);
			for (let t = 0; t < g; t++) {
				let i = d.getCamera(t);
				if (l.isPointLight) {
					let e = d.camera, n = d.matrix, r = l.distance || e.far;
					r !== e.far && (e.far = r, e.updateProjectionMatrix()), zu.setFromMatrixPosition(l.matrixWorld), e.position.copy(zu), Bu.copy(e.position), Bu.add(Iu[t]), e.up.copy(Lu[t]), e.lookAt(Bu), e.updateMatrixWorld(), n.makeTranslation(-zu.x, -zu.y, -zu.z), Ru.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), d._frustum.setFromProjectionMatrix(Ru, e.coordinateSystem, e.reversedDepth);
				}
				if (d.map.isWebGLCubeRenderTarget) e.setRenderTarget(d.map, t), e.clear();
				else {
					t === 0 && (e.setRenderTarget(d.map), e.clear());
					let n = d.getViewport(t);
					o.set(a.x * n.x, a.y * n.y, a.x * n.z, a.y * n.w), f.viewport(o);
				}
				r = d.getFrustum(t), b(n, s, i, l, this.type);
			}
			d.isPointLightShadow !== !0 && this.type === 3 && v(d, s), d.needsUpdate = !1;
		}
		_ = this.type, g.needsUpdate = !1, e.setRenderTarget(c, l, d);
	};
	function v(n, r) {
		let a = t.update(h);
		f.defines.VSM_SAMPLES !== n.blurSamples && (f.defines.VSM_SAMPLES = n.blurSamples, p.defines.VSM_SAMPLES = n.blurSamples, f.needsUpdate = !0, p.needsUpdate = !0), n.mapPass === null ? n.mapPass = new pn(i.x, i.y, {
			format: me,
			type: re
		}) : (n.mapPass.width !== n.map.width || n.mapPass.height !== n.map.height) && n.mapPass.setSize(n.map.width, n.map.height), f.uniforms.shadow_pass.value = n.map.depthTexture, f.uniforms.resolution.value.set(n.map.width, n.map.height), f.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, a, f, h, null), p.uniforms.shadow_pass.value = n.mapPass.texture, p.uniforms.resolution.value.set(n.map.width, n.map.height), p.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, a, p, h, null);
	}
	function y(t, n, r, i) {
		let a = null, o = r.isPointLight === !0 ? t.customDistanceMaterial : t.customDepthMaterial;
		if (o !== void 0) a = o;
		else if (a = r.isPointLight === !0 ? c : s, e.localClippingEnabled && n.clipShadows === !0 && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0 || n.alphaToCoverage === !0) {
			let e = a.uuid, t = n.uuid, r = l[e];
			r === void 0 && (r = {}, l[e] = r);
			let i = r[t];
			i === void 0 && (i = a.clone(), r[t] = i, n.addEventListener("dispose", x)), a = i;
		}
		if (a.visible = n.visible, a.wireframe = n.wireframe, i === 3 ? a.side = n.shadowSide === null ? n.side : n.shadowSide : a.side = n.shadowSide === null ? d[n.side] : n.shadowSide, a.alphaMap = n.alphaMap, a.alphaTest = n.alphaToCoverage === !0 ? .5 : n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, r.isPointLight === !0 && a.isMeshDistanceMaterial === !0) {
			let t = e.properties.get(a);
			t.light = r;
		}
		return a;
	}
	function b(n, i, a, o, s) {
		if (n.visible === !1) return;
		if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && s === 3) && (!n.frustumCulled || n.intersectsFrustum(r))) {
			n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
			let r = t.update(n), c = n.material;
			if (Array.isArray(c)) {
				let t = r.groups;
				for (let l = 0, u = t.length; l < u; l++) {
					let u = t[l], d = c[u.materialIndex];
					if (d && d.visible) {
						let t = y(n, d, o, s);
						n.onBeforeShadow(e, n, i, a, r, t, u), e.renderBufferDirect(a, null, r, t, n, u), n.onAfterShadow(e, n, i, a, r, t, u);
					}
				}
			} else if (c.visible) {
				let t = y(n, c, o, s);
				n.onBeforeShadow(e, n, i, a, r, t, null), e.renderBufferDirect(a, null, r, t, n, null), n.onAfterShadow(e, n, i, a, r, t, null);
			}
		}
		let c = n.children;
		for (let e = 0, t = c.length; e < t; e++) b(c[e], i, a, o, s);
	}
	function x(e) {
		e.target.removeEventListener("dispose", x);
		for (let t in l) {
			let n = l[t], r = e.target.uuid;
			r in n && (n[r].dispose(), delete n[r]);
		}
	}
}
function Hu(e, t) {
	function n() {
		let t = !1, n = new dn(), r = null, i = new dn(0, 0, 0, 0);
		return {
			setMask: function(n) {
				r !== n && !t && (e.colorMask(n, n, n, n), r = n);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t, r, a, o, s) {
				s === !0 && (t *= o, r *= o, a *= o), n.set(t, r, a, o), i.equals(n) === !1 && (e.clearColor(t, r, a, o), i.copy(n));
			},
			reset: function() {
				t = !1, r = null, i.set(-1, 0, 0, 0);
			}
		};
	}
	function r() {
		let n = !1, r = !1, i = null, a = null, o = null;
		return {
			setReversed: function(e) {
				if (r !== e) {
					let n = t.get("EXT_clip_control");
					e ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT) : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT), r = e;
					let i = o;
					o = null, this.setClear(i);
				}
			},
			getReversed: function() {
				return r;
			},
			setTest: function(t) {
				t ? F(e.DEPTH_TEST) : I(e.DEPTH_TEST);
			},
			setMask: function(t) {
				i !== t && !n && (e.depthMask(t), i = t);
			},
			setFunc: function(t) {
				if (r && (t = yt[t]), a !== t) {
					switch (t) {
						case 0:
							e.depthFunc(e.NEVER);
							break;
						case 1:
							e.depthFunc(e.ALWAYS);
							break;
						case 2:
							e.depthFunc(e.LESS);
							break;
						case 3:
							e.depthFunc(e.LEQUAL);
							break;
						case 4:
							e.depthFunc(e.EQUAL);
							break;
						case 5:
							e.depthFunc(e.GEQUAL);
							break;
						case 6:
							e.depthFunc(e.GREATER);
							break;
						case 7:
							e.depthFunc(e.NOTEQUAL);
							break;
						default: e.depthFunc(e.LEQUAL);
					}
					a = t;
				}
			},
			setLocked: function(e) {
				n = e;
			},
			setClear: function(t) {
				o !== t && (o = t, r && (t = 1 - t), e.clearDepth(t));
			},
			reset: function() {
				n = !1, i = null, a = null, o = null, r = !1;
			}
		};
	}
	function i() {
		let t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
		return {
			setTest: function(n) {
				t || (n ? F(e.STENCIL_TEST) : I(e.STENCIL_TEST));
			},
			setMask: function(r) {
				n !== r && !t && (e.stencilMask(r), n = r);
			},
			setFunc: function(t, n, o) {
				(r !== t || i !== n || a !== o) && (e.stencilFunc(t, n, o), r = t, i = n, a = o);
			},
			setOp: function(t, n, r) {
				(o !== t || s !== n || c !== r) && (e.stencilOp(t, n, r), o = t, s = n, c = r);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				l !== t && (e.clearStencil(t), l = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
			}
		};
	}
	let a = new n(), o = new r(), s = new i(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), u = {}, d = {}, f = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new Y(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, j = null, M = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), N = !1, ee = 0, te = e.getParameter(e.VERSION);
	te.indexOf("WebGL") === -1 ? te.indexOf("OpenGL ES") !== -1 && (ee = parseFloat(/^OpenGL ES (\d)/.exec(te)[1]), N = ee >= 2) : (ee = parseFloat(/^WebGL (\d)/.exec(te)[1]), N = ee >= 1);
	let ne = null, P = {}, re = e.getParameter(e.SCISSOR_BOX), ie = e.getParameter(e.VIEWPORT), ae = new dn().fromArray(re), oe = new dn().fromArray(ie);
	function se(t, n, r, i) {
		let a = /* @__PURE__ */ new Uint8Array(4), o = e.createTexture();
		e.bindTexture(t, o), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
		for (let o = 0; o < r; o++) t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
		return o;
	}
	let ce = {};
	ce[e.TEXTURE_2D] = se(e.TEXTURE_2D, e.TEXTURE_2D, 1), ce[e.TEXTURE_CUBE_MAP] = se(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ce[e.TEXTURE_2D_ARRAY] = se(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), ce[e.TEXTURE_3D] = se(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), a.setClear(0, 0, 0, 1), o.setClear(1), s.setClear(0), F(e.DEPTH_TEST), o.setFunc(3), ge(!1), _e(1), F(e.CULL_FACE), me(0);
	function F(t) {
		u[t] !== !0 && (e.enable(t), u[t] = !0);
	}
	function I(t) {
		u[t] !== !1 && (e.disable(t), u[t] = !1);
	}
	function le(t, n) {
		return f[t] !== n && (e.bindFramebuffer(t, n), f[t] = n, t === e.DRAW_FRAMEBUFFER && (f[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (f[e.DRAW_FRAMEBUFFER] = n), !0);
	}
	function ue(t, n) {
		let r = m, i = !1;
		if (t) {
			r = p.get(n), r === void 0 && (r = [], p.set(n, r));
			let a = t.textures;
			if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
				for (let t = 0, n = a.length; t < n; t++) r[t] = e.COLOR_ATTACHMENT0 + t;
				r.length = a.length, i = !0;
			}
		} else r[0] !== e.BACK && (r[0] = e.BACK, i = !0);
		i && e.drawBuffers(r);
	}
	function de(t) {
		return h !== t && (e.useProgram(t), h = t, !0);
	}
	let fe = {
		100: e.FUNC_ADD,
		101: e.FUNC_SUBTRACT,
		102: e.FUNC_REVERSE_SUBTRACT
	};
	fe[103] = e.MIN, fe[104] = e.MAX;
	let pe = {
		200: e.ZERO,
		201: e.ONE,
		202: e.SRC_COLOR,
		204: e.SRC_ALPHA,
		210: e.SRC_ALPHA_SATURATE,
		208: e.DST_COLOR,
		206: e.DST_ALPHA,
		203: e.ONE_MINUS_SRC_COLOR,
		205: e.ONE_MINUS_SRC_ALPHA,
		209: e.ONE_MINUS_DST_COLOR,
		207: e.ONE_MINUS_DST_ALPHA,
		211: e.CONSTANT_COLOR,
		212: e.ONE_MINUS_CONSTANT_COLOR,
		213: e.CONSTANT_ALPHA,
		214: e.ONE_MINUS_CONSTANT_ALPHA
	};
	function me(t, n, r, i, a, o, s, c, l, u) {
		if (t === 0) g === !0 && (I(e.BLEND), g = !1);
		else if (g === !1 && (F(e.BLEND), g = !0), t !== 5) {
			if (t !== _ || u !== E) {
				if ((v !== 100 || x !== 100) && (e.blendEquation(e.FUNC_ADD), v = 100, x = 100), u) switch (t) {
					case 1:
						e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.ONE, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
						break;
					default: H("WebGLState: Invalid blending: ", t);
				}
				else switch (t) {
					case 1:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
						break;
					case 3:
						H("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
						break;
					case 4:
						H("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
						break;
					default: H("WebGLState: Invalid blending: ", t);
				}
				y = null, b = null, S = null, C = null, w.set(0, 0, 0), T = 0, _ = t, E = u;
			}
		} else a = a || n, o = o || r, s = s || i, (n !== v || a !== x) && (e.blendEquationSeparate(fe[n], fe[a]), v = n, x = a), (r !== y || i !== b || o !== S || s !== C) && (e.blendFuncSeparate(pe[r], pe[i], pe[o], pe[s]), y = r, b = i, S = o, C = s), (c.equals(w) === !1 || l !== T) && (e.blendColor(c.r, c.g, c.b, l), w.copy(c), T = l), _ = t, E = !1;
	}
	function he(t, n) {
		t.side === 2 ? I(e.CULL_FACE) : F(e.CULL_FACE);
		let r = t.side === 1;
		n && (r = !r), ge(r), t.blending === 1 && t.transparent === !1 ? me(0) : me(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha), o.setFunc(t.depthFunc), o.setTest(t.depthTest), o.setMask(t.depthWrite), a.setMask(t.colorWrite);
		let i = t.stencilWrite;
		s.setTest(i), i && (s.setMask(t.stencilWriteMask), s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), ye(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), t.alphaToCoverage === !0 ? F(e.SAMPLE_ALPHA_TO_COVERAGE) : I(e.SAMPLE_ALPHA_TO_COVERAGE);
	}
	function ge(t) {
		D !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), D = t);
	}
	function _e(t) {
		t === 0 ? I(e.CULL_FACE) : (F(e.CULL_FACE), t !== O && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), O = t;
	}
	function ve(t) {
		t !== k && (N && e.lineWidth(t), k = t);
	}
	function ye(t, n, r) {
		t ? (F(e.POLYGON_OFFSET_FILL), (A !== n || j !== r) && (A = n, j = r, o.getReversed() && (n = -n), e.polygonOffset(n, r))) : I(e.POLYGON_OFFSET_FILL);
	}
	function be(t) {
		t ? F(e.SCISSOR_TEST) : I(e.SCISSOR_TEST);
	}
	function xe(t) {
		t === void 0 && (t = e.TEXTURE0 + M - 1), ne !== t && (e.activeTexture(t), ne = t);
	}
	function Se(t, n, r) {
		r === void 0 && (r = ne === null ? e.TEXTURE0 + M - 1 : ne);
		let i = P[r];
		i === void 0 && (i = {
			type: void 0,
			texture: void 0
		}, P[r] = i), (i.type !== t || i.texture !== n) && (ne !== r && (e.activeTexture(r), ne = r), e.bindTexture(t, n || ce[t]), i.type = t, i.texture = n);
	}
	function Ce() {
		let t = P[ne];
		t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
	}
	function we() {
		try {
			e.compressedTexImage2D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function Te() {
		try {
			e.compressedTexImage3D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function Ee() {
		try {
			e.texSubImage2D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function De() {
		try {
			e.texSubImage3D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function Oe() {
		try {
			e.compressedTexSubImage2D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function ke() {
		try {
			e.compressedTexSubImage3D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function Ae() {
		try {
			e.texStorage2D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function je() {
		try {
			e.texStorage3D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function L() {
		try {
			e.texImage2D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function Me() {
		try {
			e.texImage3D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function Ne(t) {
		return d[t] === void 0 ? e.getParameter(t) : d[t];
	}
	function Pe(t, n) {
		d[t] !== n && (e.pixelStorei(t, n), d[t] = n);
	}
	function R(t) {
		ae.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), ae.copy(t));
	}
	function Fe(t) {
		oe.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), oe.copy(t));
	}
	function z(t, n) {
		let r = l.get(n);
		r === void 0 && (r = /* @__PURE__ */ new WeakMap(), l.set(n, r));
		let i = r.get(t);
		i === void 0 && (i = e.getUniformBlockIndex(n, t.name), r.set(t, i));
	}
	function B(t, n) {
		let r = l.get(n).get(t);
		c.get(n) !== r && (e.uniformBlockBinding(n, r, t.__bindingPointIndex), c.set(n, r));
	}
	function Ie() {
		e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), o.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), u = {}, d = {}, ne = null, P = {}, f = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new Y(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, j = null, ae.set(0, 0, e.canvas.width, e.canvas.height), oe.set(0, 0, e.canvas.width, e.canvas.height), a.reset(), o.reset(), s.reset();
	}
	return {
		buffers: {
			color: a,
			depth: o,
			stencil: s
		},
		enable: F,
		disable: I,
		bindFramebuffer: le,
		drawBuffers: ue,
		useProgram: de,
		setBlending: me,
		setMaterial: he,
		setFlipSided: ge,
		setCullFace: _e,
		setLineWidth: ve,
		setPolygonOffset: ye,
		setScissorTest: be,
		activeTexture: xe,
		bindTexture: Se,
		unbindTexture: Ce,
		compressedTexImage2D: we,
		compressedTexImage3D: Te,
		texImage2D: L,
		texImage3D: Me,
		pixelStorei: Pe,
		getParameter: Ne,
		updateUBOMapping: z,
		uniformBlockBinding: B,
		texStorage2D: Ae,
		texStorage3D: je,
		texSubImage2D: Ee,
		texSubImage3D: De,
		compressedTexSubImage2D: Oe,
		compressedTexSubImage3D: ke,
		scissor: R,
		viewport: Fe,
		reset: Ie
	};
}
function Uu(e, t, n, r, i, a, o) {
	let s = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new W(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new Set(), f, p = /* @__PURE__ */ new WeakMap(), m = !1;
	try {
		m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
	} catch {}
	function h(e, t) {
		return m ? new OffscreenCanvas(e, t) : ft("canvas");
	}
	function g(e, t, n) {
		let r = 1, i = Ne(e);
		if ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)), r < 1) {
			if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof VideoFrame < "u" && e instanceof VideoFrame) {
				let n = Math.floor(r * i.width), a = Math.floor(r * i.height);
				f === void 0 && (f = h(n, a));
				let o = t ? h(n, a) : f;
				return o.width = n, o.height = a, o.getContext("2d").drawImage(e, 0, 0, n, a), V("WebGLRenderer: Texture has been resized from (" + i.width + "x" + i.height + ") to (" + n + "x" + a + ")."), o;
			}
			return "data" in e && V("WebGLRenderer: Image in DataTexture is too big (" + i.width + "x" + i.height + ")."), e;
		}
		return e;
	}
	function _(e) {
		return e.generateMipmaps;
	}
	function v(t) {
		e.generateMipmap(t);
	}
	function y(t) {
		return t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : t.isWebGL3DRenderTarget ? e.TEXTURE_3D : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
	}
	function b(n, r, i, a, o, s = !1) {
		if (n !== null) {
			if (e[n] !== void 0) return e[n];
			V("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
		}
		let c;
		a && (c = t.get("EXT_texture_norm16"), c || V("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
		let l = r;
		if (r === e.RED && (i === e.FLOAT && (l = e.R32F), i === e.HALF_FLOAT && (l = e.R16F), i === e.UNSIGNED_BYTE && (l = e.R8), i === e.UNSIGNED_SHORT && c && (l = c.R16_EXT), i === e.SHORT && c && (l = c.R16_SNORM_EXT)), r === e.RED_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.R8UI), i === e.UNSIGNED_SHORT && (l = e.R16UI), i === e.UNSIGNED_INT && (l = e.R32UI), i === e.BYTE && (l = e.R8I), i === e.SHORT && (l = e.R16I), i === e.INT && (l = e.R32I)), r === e.RG && (i === e.FLOAT && (l = e.RG32F), i === e.HALF_FLOAT && (l = e.RG16F), i === e.UNSIGNED_BYTE && (l = e.RG8), i === e.UNSIGNED_SHORT && c && (l = c.RG16_EXT), i === e.SHORT && c && (l = c.RG16_SNORM_EXT)), r === e.RG_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RG8UI), i === e.UNSIGNED_SHORT && (l = e.RG16UI), i === e.UNSIGNED_INT && (l = e.RG32UI), i === e.BYTE && (l = e.RG8I), i === e.SHORT && (l = e.RG16I), i === e.INT && (l = e.RG32I)), r === e.RGB_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RGB8UI), i === e.UNSIGNED_SHORT && (l = e.RGB16UI), i === e.UNSIGNED_INT && (l = e.RGB32UI), i === e.BYTE && (l = e.RGB8I), i === e.SHORT && (l = e.RGB16I), i === e.INT && (l = e.RGB32I)), r === e.RGBA_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RGBA8UI), i === e.UNSIGNED_SHORT && (l = e.RGBA16UI), i === e.UNSIGNED_INT && (l = e.RGBA32UI), i === e.BYTE && (l = e.RGBA8I), i === e.SHORT && (l = e.RGBA16I), i === e.INT && (l = e.RGBA32I)), r === e.RGB && (i === e.UNSIGNED_SHORT && c && (l = c.RGB16_EXT), i === e.SHORT && c && (l = c.RGB16_SNORM_EXT), i === e.UNSIGNED_INT_5_9_9_9_REV && (l = e.RGB9_E5), i === e.UNSIGNED_INT_10F_11F_11F_REV && (l = e.R11F_G11F_B10F)), r === e.RGBA) {
			let t = s ? at : q.getTransfer(o);
			i === e.FLOAT && (l = e.RGBA32F), i === e.HALF_FLOAT && (l = e.RGBA16F), i === e.UNSIGNED_BYTE && (l = t === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), i === e.UNSIGNED_SHORT && c && (l = c.RGBA16_EXT), i === e.SHORT && c && (l = c.RGBA16_SNORM_EXT), i === e.UNSIGNED_SHORT_4_4_4_4 && (l = e.RGBA4), i === e.UNSIGNED_SHORT_5_5_5_1 && (l = e.RGB5_A1);
		}
		return (l === e.R16F || l === e.R32F || l === e.RG16F || l === e.RG32F || l === e.RGBA16F || l === e.RGBA32F) && t.get("EXT_color_buffer_float"), l;
	}
	function x(t, n) {
		let r;
		return t ? n === null || n === 1014 || n === 1020 ? r = e.DEPTH24_STENCIL8 : n === 1015 ? r = e.DEPTH32F_STENCIL8 : n === 1012 && (r = e.DEPTH24_STENCIL8, V("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : n === null || n === 1014 || n === 1020 ? r = e.DEPTH_COMPONENT24 : n === 1015 ? r = e.DEPTH_COMPONENT32F : n === 1012 && (r = e.DEPTH_COMPONENT16), r;
	}
	function j(e, t) {
		return _(e) === !0 || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps !== void 0 && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1;
	}
	function M(e) {
		let t = e.target;
		t.removeEventListener("dispose", M), ee(t), t.isVideoTexture && u.delete(t), t.isHTMLTexture && d.delete(t);
	}
	function N(e) {
		let t = e.target;
		t.removeEventListener("dispose", N), ne(t);
	}
	function ee(e) {
		let t = r.get(e);
		if (t.__webglInit === void 0) return;
		let n = e.source, i = p.get(n);
		if (i) {
			let r = i[t.__cacheKey];
			r.usedTimes--, r.usedTimes === 0 && te(e), Object.keys(i).length === 0 && p.delete(n);
		}
		r.remove(e);
	}
	function te(t) {
		let n = r.get(t);
		e.deleteTexture(n.__webglTexture);
		let i = t.source, a = p.get(i);
		delete a[n.__cacheKey], o.memory.textures--;
	}
	function ne(t) {
		let n = r.get(t);
		if (t.depthTexture && (t.depthTexture.dispose(), r.remove(t.depthTexture)), t.isWebGLCubeRenderTarget) for (let t = 0; t < 6; t++) {
			if (Array.isArray(n.__webglFramebuffer[t])) for (let r = 0; r < n.__webglFramebuffer[t].length; r++) e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
			else e.deleteFramebuffer(n.__webglFramebuffer[t]);
			n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
		}
		else {
			if (Array.isArray(n.__webglFramebuffer)) for (let t = 0; t < n.__webglFramebuffer.length; t++) e.deleteFramebuffer(n.__webglFramebuffer[t]);
			else e.deleteFramebuffer(n.__webglFramebuffer);
			if (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer) for (let t = 0; t < n.__webglColorRenderbuffer.length; t++) n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
			n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
		}
		let i = t.textures;
		for (let t = 0, n = i.length; t < n; t++) {
			let n = r.get(i[t]);
			n.__webglTexture && (e.deleteTexture(n.__webglTexture), o.memory.textures--), r.remove(i[t]);
		}
		r.remove(t);
	}
	let P = 0;
	function re() {
		P = 0;
	}
	function ie() {
		return P;
	}
	function ae(e) {
		P = e;
	}
	function oe() {
		let e = P;
		return e >= i.maxTextures && V("WebGLTextures: Trying to use " + (e + 1) + " texture units while this GPU supports only " + i.maxTextures), P += 1, e;
	}
	function se(e) {
		let t = [];
		return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.colorSpace), t.join();
	}
	function ce(t, i) {
		let a = r.get(t);
		if (t.isVideoTexture && L(t), t.isRenderTargetTexture === !1 && t.isExternalTexture !== !0 && t.version > 0 && a.__version !== t.version) {
			let e = t.image;
			if (e === null) V("WebGLRenderer: Texture marked for update but no image data found.");
			else if (e.complete === !1) V("WebGLRenderer: Texture marked for update but image is incomplete");
			else {
				ve(a, t, i);
				return;
			}
		} else t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
		n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function F(t, i) {
		let a = r.get(t);
		t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version ? ve(a, t, i) : (t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null), n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i));
	}
	function I(t, i) {
		let a = r.get(t);
		t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version ? ve(a, t, i) : n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function le(t, i) {
		let a = r.get(t);
		t.isCubeDepthTexture !== !0 && t.version > 0 && a.__version !== t.version ? ye(a, t, i) : n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture, e.TEXTURE0 + i);
	}
	let ue = {
		[S]: e.REPEAT,
		[C]: e.CLAMP_TO_EDGE,
		[w]: e.MIRRORED_REPEAT
	}, fe = {
		[T]: e.NEAREST,
		[E]: e.NEAREST_MIPMAP_NEAREST,
		[D]: e.NEAREST_MIPMAP_LINEAR,
		[O]: e.LINEAR,
		[k]: e.LINEAR_MIPMAP_NEAREST,
		[A]: e.LINEAR_MIPMAP_LINEAR
	}, pe = {
		512: e.NEVER,
		519: e.ALWAYS,
		513: e.LESS,
		515: e.LEQUAL,
		514: e.EQUAL,
		518: e.GEQUAL,
		516: e.GREATER,
		517: e.NOTEQUAL
	};
	function me(n, a) {
		if (a.type === 1015 && t.has("OES_texture_float_linear") === !1 && (a.magFilter === 1006 || a.magFilter === 1007 || a.magFilter === 1005 || a.magFilter === 1008 || a.minFilter === 1006 || a.minFilter === 1007 || a.minFilter === 1005 || a.minFilter === 1008) && V("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(n, e.TEXTURE_WRAP_S, ue[a.wrapS]), e.texParameteri(n, e.TEXTURE_WRAP_T, ue[a.wrapT]), (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, ue[a.wrapR]), e.texParameteri(n, e.TEXTURE_MAG_FILTER, fe[a.magFilter]), e.texParameteri(n, e.TEXTURE_MIN_FILTER, fe[a.minFilter]), a.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, pe[a.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
			if (a.magFilter === 1003 || a.minFilter !== 1005 && a.minFilter !== 1008 || a.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
			if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
				let o = t.get("EXT_texture_filter_anisotropic");
				e.texParameterf(n, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy())), r.get(a).__currentAnisotropy = a.anisotropy;
			}
		}
	}
	function he(t, n) {
		let r = !1;
		t.__webglInit === void 0 && (t.__webglInit = !0, n.addEventListener("dispose", M));
		let i = n.source, a = p.get(i);
		a === void 0 && (a = {}, p.set(i, a));
		let s = se(n);
		if (s !== t.__cacheKey) {
			a[s] === void 0 && (a[s] = {
				texture: e.createTexture(),
				usedTimes: 0
			}, o.memory.textures++, r = !0), a[s].usedTimes++;
			let i = a[t.__cacheKey];
			i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && te(n)), t.__cacheKey = s, t.__webglTexture = a[s].texture;
		}
		return r;
	}
	function ge(e, t, n) {
		return Math.floor(Math.floor(e / n) / t);
	}
	function _e(t, r, i, a) {
		let o = t.updateRanges;
		if (o.length === 0) n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r.width, r.height, i, a, r.data);
		else {
			o.sort((e, t) => e.start - t.start);
			let s = 0;
			for (let e = 1; e < o.length; e++) {
				let t = o[s], n = o[e], i = t.start + t.count, a = ge(n.start, r.width, 4), c = ge(t.start, r.width, 4);
				n.start <= i + 1 && a === c && ge(n.start + n.count - 1, r.width, 4) === a ? t.count = Math.max(t.count, n.start + n.count - t.start) : (++s, o[s] = n);
			}
			o.length = s + 1;
			let c = n.getParameter(e.UNPACK_ROW_LENGTH), l = n.getParameter(e.UNPACK_SKIP_PIXELS), u = n.getParameter(e.UNPACK_SKIP_ROWS);
			n.pixelStorei(e.UNPACK_ROW_LENGTH, r.width);
			for (let t = 0, s = o.length; t < s; t++) {
				let s = o[t], c = Math.floor(s.start / 4), l = Math.ceil(s.count / 4), u = c % r.width, d = Math.floor(c / r.width), f = l;
				n.pixelStorei(e.UNPACK_SKIP_PIXELS, u), n.pixelStorei(e.UNPACK_SKIP_ROWS, d), n.texSubImage2D(e.TEXTURE_2D, 0, u, d, f, 1, i, a, r.data);
			}
			t.clearUpdateRanges(), n.pixelStorei(e.UNPACK_ROW_LENGTH, c), n.pixelStorei(e.UNPACK_SKIP_PIXELS, l), n.pixelStorei(e.UNPACK_SKIP_ROWS, u);
		}
	}
	function ve(t, o, s) {
		let c = e.TEXTURE_2D;
		(o.isDataArrayTexture || o.isCompressedArrayTexture) && (c = e.TEXTURE_2D_ARRAY), o.isData3DTexture && (c = e.TEXTURE_3D);
		let l = he(t, o), u = o.source;
		n.bindTexture(c, t.__webglTexture, e.TEXTURE0 + s);
		let f = r.get(u);
		if (u.version !== f.__version || l === !0) {
			if (n.activeTexture(e.TEXTURE0 + s), !(typeof ImageBitmap < "u" && o.image instanceof ImageBitmap)) {
				let t = q.getPrimaries(q.workingColorSpace), r = o.colorSpace === "" ? null : q.getPrimaries(o.colorSpace), i = o.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
				n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, i);
			}
			n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment);
			let t = g(o.image, !1, i.maxTextureSize);
			t = Me(o, t);
			let r = a.convert(o.format, o.colorSpace), p = a.convert(o.type), m = b(o.internalFormat, r, p, o.normalized, o.colorSpace, o.isVideoTexture);
			me(c, o);
			let h, y = o.mipmaps, S = o.isVideoTexture !== !0, C = f.__version === void 0 || l === !0, w = u.dataReady, T = j(o, t);
			if (o.isDepthTexture) m = x(o.format === de, o.type), C && (S ? n.texStorage2D(e.TEXTURE_2D, 1, m, t.width, t.height) : n.texImage2D(e.TEXTURE_2D, 0, m, t.width, t.height, 0, r, p, null));
			else if (o.isDataTexture) {
				if (y.length > 0) {
					S && C && n.texStorage2D(e.TEXTURE_2D, T, m, y[0].width, y[0].height);
					for (let t = 0, i = y.length; t < i; t++) h = y[t], S ? w && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, p, h.data) : n.texImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, r, p, h.data);
					o.generateMipmaps = !1;
				} else S ? (C && n.texStorage2D(e.TEXTURE_2D, T, m, t.width, t.height), w && _e(o, t, r, p)) : n.texImage2D(e.TEXTURE_2D, 0, m, t.width, t.height, 0, r, p, t.data);
			} else if (o.isCompressedTexture) {
				if (o.isCompressedArrayTexture) {
					S && C && n.texStorage3D(e.TEXTURE_2D_ARRAY, T, m, y[0].width, y[0].height, t.depth);
					for (let i = 0, a = y.length; i < a; i++) if (h = y[i], o.format !== 1023) {
						if (r !== null) {
							if (S) {
								if (w) {
									if (o.layerUpdates.size > 0) {
										let t = Rs(h.width, h.height, o.format, o.type);
										for (let a of o.layerUpdates) {
											let o = h.data.subarray(a * t / h.data.BYTES_PER_ELEMENT, (a + 1) * t / h.data.BYTES_PER_ELEMENT);
											n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, a, h.width, h.height, 1, r, o);
										}
									} else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, h.width, h.height, t.depth, r, h.data);
								}
							} else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, i, m, h.width, h.height, t.depth, 0, h.data, 0, 0);
						} else V("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
					} else S ? w && n.texSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, h.width, h.height, t.depth, r, p, h.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, i, m, h.width, h.height, t.depth, 0, r, p, h.data);
					o.layerUpdates.size > 0 && o.clearLayerUpdates();
				} else {
					S && C && n.texStorage2D(e.TEXTURE_2D, T, m, y[0].width, y[0].height);
					for (let t = 0, i = y.length; t < i; t++) h = y[t], o.format === 1023 ? S ? w && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, p, h.data) : n.texImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, r, p, h.data) : r === null ? V("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : S ? w && n.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, h.data) : n.compressedTexImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, h.data);
				}
			} else if (o.isDataArrayTexture) {
				if (S) {
					if (C && n.texStorage3D(e.TEXTURE_2D_ARRAY, T, m, t.width, t.height, t.depth), w) {
						if (o.layerUpdates.size > 0) {
							let i = Rs(t.width, t.height, o.format, o.type);
							for (let a of o.layerUpdates) {
								let o = t.data.subarray(a * i / t.data.BYTES_PER_ELEMENT, (a + 1) * i / t.data.BYTES_PER_ELEMENT);
								n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, a, t.width, t.height, 1, r, p, o);
							}
							o.clearLayerUpdates();
						} else n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, t.width, t.height, t.depth, r, p, t.data);
					}
				} else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, m, t.width, t.height, t.depth, 0, r, p, t.data);
			} else if (o.isData3DTexture) S ? (C && n.texStorage3D(e.TEXTURE_3D, T, m, t.width, t.height, t.depth), w && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, t.width, t.height, t.depth, r, p, t.data)) : n.texImage3D(e.TEXTURE_3D, 0, m, t.width, t.height, t.depth, 0, r, p, t.data);
			else if (o.isFramebufferTexture) {
				if (C) {
					if (S) n.texStorage2D(e.TEXTURE_2D, T, m, t.width, t.height);
					else {
						let i = t.width, a = t.height;
						for (let t = 0; t < T; t++) n.texImage2D(e.TEXTURE_2D, t, m, i, a, 0, r, p, null), i >>= 1, a >>= 1;
					}
				}
			} else if (o.isHTMLTexture) {
				if ("texElementImage2D" in e) {
					let n = e.canvas;
					if (n.hasAttribute("layoutsubtree") || n.setAttribute("layoutsubtree", "true"), t.parentNode !== n) {
						n.appendChild(t), d.add(o), n.onpaint = (e) => {
							let t = e.changedElements;
							for (let e of d) t.includes(e.image) && (e.needsUpdate = !0);
						}, n.requestPaint();
						return;
					}
					if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, t);
					else {
						let n = e.RGBA, r = e.RGBA, i = e.UNSIGNED_BYTE;
						e.texElementImage2D(e.TEXTURE_2D, 0, n, r, i, t);
					}
					e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
				}
			} else if (y.length > 0) {
				if (S && C) {
					let t = Ne(y[0]);
					n.texStorage2D(e.TEXTURE_2D, T, m, t.width, t.height);
				}
				for (let t = 0, i = y.length; t < i; t++) h = y[t], S ? w && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, r, p, h) : n.texImage2D(e.TEXTURE_2D, t, m, r, p, h);
				o.generateMipmaps = !1;
			} else if (S) {
				if (C) {
					let r = Ne(t);
					n.texStorage2D(e.TEXTURE_2D, T, m, r.width, r.height);
				}
				w && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r, p, t);
			} else n.texImage2D(e.TEXTURE_2D, 0, m, r, p, t);
			_(o) && v(c), f.__version = u.version, o.onUpdate && o.onUpdate(o);
		}
		t.__version = o.version;
	}
	function ye(t, o, s) {
		if (o.image.length !== 6) return;
		let c = he(t, o), l = o.source;
		n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + s);
		let u = r.get(l);
		if (l.version !== u.__version || c === !0) {
			n.activeTexture(e.TEXTURE0 + s);
			let t = q.getPrimaries(q.workingColorSpace), r = o.colorSpace === "" ? null : q.getPrimaries(o.colorSpace), d = o.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
			n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha), n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
			let f = o.isCompressedTexture || o.image[0].isCompressedTexture, p = o.image[0] && o.image[0].isDataTexture, m = [];
			for (let e = 0; e < 6; e++) !f && !p ? m[e] = g(o.image[e], !0, i.maxCubemapSize) : m[e] = p ? o.image[e].image : o.image[e], m[e] = Me(o, m[e]);
			let h = m[0], y = a.convert(o.format, o.colorSpace), x = a.convert(o.type), S = b(o.internalFormat, y, x, o.normalized, o.colorSpace), C = o.isVideoTexture !== !0, w = u.__version === void 0 || c === !0, T = l.dataReady, E = j(o, h);
			me(e.TEXTURE_CUBE_MAP, o);
			let D;
			if (f) {
				C && w && n.texStorage2D(e.TEXTURE_CUBE_MAP, E, S, h.width, h.height);
				for (let t = 0; t < 6; t++) {
					D = m[t].mipmaps;
					for (let r = 0; r < D.length; r++) {
						let i = D[r];
						o.format === 1023 ? C ? T && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, y, x, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, S, i.width, i.height, 0, y, x, i.data) : y === null ? V("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : C ? T && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, y, i.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, S, i.width, i.height, 0, i.data);
					}
				}
			} else {
				if (D = o.mipmaps, C && w) {
					D.length > 0 && E++;
					let t = Ne(m[0]);
					n.texStorage2D(e.TEXTURE_CUBE_MAP, E, S, t.width, t.height);
				}
				for (let t = 0; t < 6; t++) if (p) {
					C ? T && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, m[t].width, m[t].height, y, x, m[t].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, S, m[t].width, m[t].height, 0, y, x, m[t].data);
					for (let r = 0; r < D.length; r++) {
						let i = D[r].image[t].image;
						C ? T && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, i.width, i.height, y, x, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, S, i.width, i.height, 0, y, x, i.data);
					}
				} else {
					C ? T && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, y, x, m[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, S, y, x, m[t]);
					for (let r = 0; r < D.length; r++) {
						let i = D[r];
						C ? T && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, y, x, i.image[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, S, y, x, i.image[t]);
					}
				}
			}
			_(o) && v(e.TEXTURE_CUBE_MAP), u.__version = l.version, o.onUpdate && o.onUpdate(o);
		}
		t.__version = o.version;
	}
	function be(t, i, o, c, l, u) {
		let d = a.convert(o.format, o.colorSpace), f = a.convert(o.type), p = b(o.internalFormat, d, f, o.normalized, o.colorSpace), m = r.get(i), h = r.get(o);
		if (h.__renderTarget = i, !m.__hasExternalTextures) {
			let t = Math.max(1, i.width >> u), r = Math.max(1, i.height >> u);
			l === e.TEXTURE_3D || l === e.TEXTURE_2D_ARRAY ? n.texImage3D(l, u, p, t, r, i.depth, 0, d, f, null) : n.texImage2D(l, u, p, t, r, 0, d, f, null);
		}
		n.bindFramebuffer(e.FRAMEBUFFER, t), je(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, c, l, h.__webglTexture, 0, Ae(i)) : (l === e.TEXTURE_2D || l >= e.TEXTURE_CUBE_MAP_POSITIVE_X && l <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, c, l, h.__webglTexture, u), n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function xe(t, n, r) {
		if (e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer) {
			let i = n.depthTexture, a = i && i.isDepthTexture ? i.type : null, o = x(n.stencilBuffer, a), c = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
			je(n) ? s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, Ae(n), o, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, Ae(n), o, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, c, e.RENDERBUFFER, t);
		} else {
			let t = n.textures;
			for (let i = 0; i < t.length; i++) {
				let o = t[i], c = a.convert(o.format, o.colorSpace), l = a.convert(o.type), u = b(o.internalFormat, c, l, o.normalized, o.colorSpace);
				je(n) ? s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, Ae(n), u, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, Ae(n), u, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, u, n.width, n.height);
			}
		}
		e.bindRenderbuffer(e.RENDERBUFFER, null);
	}
	function Se(t, i, o) {
		let c = i.isWebGLCubeRenderTarget === !0;
		if (n.bindFramebuffer(e.FRAMEBUFFER, t), !(i.depthTexture && i.depthTexture.isDepthTexture)) throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
		let l = r.get(i.depthTexture);
		if (l.__renderTarget = i, l.__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), c) {
			if (l.__webglInit === void 0 && (l.__webglInit = !0, i.depthTexture.addEventListener("dispose", M)), l.__webglTexture === void 0) {
				l.__webglTexture = e.createTexture(), n.bindTexture(e.TEXTURE_CUBE_MAP, l.__webglTexture), me(e.TEXTURE_CUBE_MAP, i.depthTexture);
				let t = a.convert(i.depthTexture.format), r = a.convert(i.depthTexture.type), o;
				i.depthTexture.format === 1026 ? o = e.DEPTH_COMPONENT24 : i.depthTexture.format === 1027 && (o = e.DEPTH24_STENCIL8);
				for (let n = 0; n < 6; n++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, o, i.width, i.height, 0, t, r, null);
			}
		} else ce(i.depthTexture, 0);
		let u = l.__webglTexture, d = Ae(i), f = c ? e.TEXTURE_CUBE_MAP_POSITIVE_X + o : e.TEXTURE_2D, p = i.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
		if (i.depthTexture.format === 1026) je(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, u, 0, d) : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, u, 0);
		else if (i.depthTexture.format === 1027) je(i) ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, u, 0, d) : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, u, 0);
		else throw Error("THREE.WebGLTextures: Unknown depthTexture format.");
	}
	function Ce(t) {
		let i = r.get(t), a = t.isWebGLCubeRenderTarget === !0;
		if (i.__boundDepthTexture !== t.depthTexture) {
			let e = t.depthTexture;
			if (i.__depthDisposeCallback && i.__depthDisposeCallback(), e) {
				let t = () => {
					delete i.__boundDepthTexture, delete i.__depthDisposeCallback, e.removeEventListener("dispose", t);
				};
				e.addEventListener("dispose", t), i.__depthDisposeCallback = t;
			}
			i.__boundDepthTexture = e;
		}
		if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
			if (a) for (let e = 0; e < 6; e++) Se(i.__webglFramebuffer[e], t, e);
			else {
				let e = t.texture.mipmaps;
				e && e.length > 0 ? Se(i.__webglFramebuffer[0], t, 0) : Se(i.__webglFramebuffer, t, 0);
			}
		} else if (a) {
			i.__webglDepthbuffer = [];
			for (let r = 0; r < 6; r++) if (n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]), i.__webglDepthbuffer[r] === void 0) i.__webglDepthbuffer[r] = e.createRenderbuffer(), xe(i.__webglDepthbuffer[r], t, !1);
			else {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, a = i.__webglDepthbuffer[r];
				e.bindRenderbuffer(e.RENDERBUFFER, a), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a);
			}
		} else {
			let r = t.texture.mipmaps;
			if (r && r.length > 0 ? n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[0]) : n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer === void 0) i.__webglDepthbuffer = e.createRenderbuffer(), xe(i.__webglDepthbuffer, t, !1);
			else {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, r = i.__webglDepthbuffer;
				e.bindRenderbuffer(e.RENDERBUFFER, r), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, r);
			}
		}
		n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function we(t, n, i) {
		let a = r.get(t);
		n !== void 0 && be(a.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), i !== void 0 && Ce(t);
	}
	function Te(t) {
		let i = t.texture, s = r.get(t), c = r.get(i);
		t.addEventListener("dispose", N);
		let l = t.textures, u = t.isWebGLCubeRenderTarget === !0, d = l.length > 1;
		if (d || (c.__webglTexture === void 0 && (c.__webglTexture = e.createTexture()), c.__version = i.version, o.memory.textures++), u) {
			s.__webglFramebuffer = [];
			for (let t = 0; t < 6; t++) if (i.mipmaps && i.mipmaps.length > 0) {
				s.__webglFramebuffer[t] = [];
				for (let n = 0; n < i.mipmaps.length; n++) s.__webglFramebuffer[t][n] = e.createFramebuffer();
			} else s.__webglFramebuffer[t] = e.createFramebuffer();
		} else {
			if (i.mipmaps && i.mipmaps.length > 0) {
				s.__webglFramebuffer = [];
				for (let t = 0; t < i.mipmaps.length; t++) s.__webglFramebuffer[t] = e.createFramebuffer();
			} else s.__webglFramebuffer = e.createFramebuffer();
			if (d) for (let t = 0, n = l.length; t < n; t++) {
				let n = r.get(l[t]);
				n.__webglTexture === void 0 && (n.__webglTexture = e.createTexture(), o.memory.textures++);
			}
			if (t.samples > 0 && je(t) === !1) {
				s.__webglMultisampledFramebuffer = e.createFramebuffer(), s.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer);
				for (let n = 0; n < l.length; n++) {
					let r = l[n];
					s.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, s.__webglColorRenderbuffer[n]);
					let i = a.convert(r.format, r.colorSpace), o = a.convert(r.type), c = b(r.internalFormat, i, o, r.normalized, r.colorSpace, t.isXRRenderTarget === !0), u = Ae(t);
					e.renderbufferStorageMultisample(e.RENDERBUFFER, u, c, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, s.__webglColorRenderbuffer[n]);
				}
				e.bindRenderbuffer(e.RENDERBUFFER, null), t.depthBuffer && (s.__webglDepthRenderbuffer = e.createRenderbuffer(), xe(s.__webglDepthRenderbuffer, t, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null);
			}
		}
		if (u) {
			n.bindTexture(e.TEXTURE_CUBE_MAP, c.__webglTexture), me(e.TEXTURE_CUBE_MAP, i);
			for (let n = 0; n < 6; n++) if (i.mipmaps && i.mipmaps.length > 0) for (let r = 0; r < i.mipmaps.length; r++) be(s.__webglFramebuffer[n][r], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, r);
			else be(s.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
			_(i) && v(e.TEXTURE_CUBE_MAP), n.unbindTexture();
		} else if (d) {
			for (let i = 0, a = l.length; i < a; i++) {
				let a = l[i], o = r.get(a), c = e.TEXTURE_2D;
				(t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (c = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(c, o.__webglTexture), me(c, a), be(s.__webglFramebuffer, t, a, e.COLOR_ATTACHMENT0 + i, c, 0), _(a) && v(c);
			}
			n.unbindTexture();
		} else {
			let r = e.TEXTURE_2D;
			if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(r, c.__webglTexture), me(r, i), i.mipmaps && i.mipmaps.length > 0) for (let n = 0; n < i.mipmaps.length; n++) be(s.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, r, n);
			else be(s.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0, r, 0);
			_(i) && v(r), n.unbindTexture();
		}
		t.depthBuffer && Ce(t);
	}
	function Ee(e) {
		let t = e.textures;
		for (let i = 0, a = t.length; i < a; i++) {
			let a = t[i];
			if (_(a)) {
				let t = y(e), i = r.get(a).__webglTexture;
				n.bindTexture(t, i), v(t), n.unbindTexture();
			}
		}
	}
	let De = [], Oe = [];
	function ke(t) {
		if (t.samples > 0) {
			if (je(t) === !1) {
				let i = t.textures, a = t.width, o = t.height, s = e.COLOR_BUFFER_BIT, l = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, u = r.get(t), d = i.length > 1;
				if (d) for (let t = 0; t < i.length; t++) n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
				n.bindFramebuffer(e.READ_FRAMEBUFFER, u.__webglMultisampledFramebuffer);
				let f = t.texture.mipmaps;
				f && f.length > 0 ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer[0]) : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer);
				for (let n = 0; n < i.length; n++) {
					if (t.resolveDepthBuffer && (t.depthBuffer && (s |= e.DEPTH_BUFFER_BIT), t.stencilBuffer && t.resolveStencilBuffer && (s |= e.STENCIL_BUFFER_BIT)), d) {
						e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, u.__webglColorRenderbuffer[n]);
						let t = r.get(i[n]).__webglTexture;
						e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
					}
					e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, e.NEAREST), c === !0 && (De.length = 0, Oe.length = 0, De.push(e.COLOR_ATTACHMENT0 + n), t.depthBuffer && t.storeMultisampledDepthBuffer === !1 && (De.push(l), Oe.push(l), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, Oe)), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, De));
				}
				if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), d) for (let t = 0; t < i.length; t++) {
					n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, u.__webglColorRenderbuffer[t]);
					let a = r.get(i[t]).__webglTexture;
					n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, a, 0);
				}
				n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglMultisampledFramebuffer);
			} else if (t.depthBuffer && t.storeMultisampledDepthBuffer === !1 && c) {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
				e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
			}
		}
	}
	function Ae(e) {
		return Math.min(i.maxSamples, e.samples);
	}
	function je(e) {
		let n = r.get(e);
		return e.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && n.__useRenderToTexture !== !1;
	}
	function L(e) {
		let t = o.render.frame;
		u.get(e) !== t && (u.set(e, t), e.update());
	}
	function Me(e, t) {
		let n = e.colorSpace, r = e.format, i = e.type;
		return e.isCompressedTexture === !0 || e.isVideoTexture === !0 || n !== "srgb-linear" && n !== "" && (q.getTransfer(n) === "srgb" ? (r !== 1023 || i !== 1009) && V("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : H("WebGLTextures: Unsupported texture color space:", n)), t;
	}
	function Ne(e) {
		return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement ? (l.width = e.naturalWidth || e.width, l.height = e.naturalHeight || e.height) : typeof VideoFrame < "u" && e instanceof VideoFrame ? (l.width = e.displayWidth, l.height = e.displayHeight) : (l.width = e.width, l.height = e.height), l;
	}
	this.allocateTextureUnit = oe, this.resetTextureUnits = re, this.getTextureUnits = ie, this.setTextureUnits = ae, this.setTexture2D = ce, this.setTexture2DArray = F, this.setTexture3D = I, this.setTextureCube = le, this.rebindTextures = we, this.setupRenderTarget = Te, this.updateRenderTargetMipmap = Ee, this.updateMultisampleRenderTarget = ke, this.setupDepthRenderbuffer = Ce, this.setupFrameBufferTexture = be, this.useMultisampledRTT = je, this.isReversedDepthBuffer = function() {
		return n.buffers.depth.getReversed();
	};
}
function Wu(e, t) {
	function n(n, r = "") {
		let i, a = q.getTransfer(r);
		if (n === 1009) return e.UNSIGNED_BYTE;
		if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
		if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
		if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
		if (n === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
		if (n === 1010) return e.BYTE;
		if (n === 1011) return e.SHORT;
		if (n === 1012) return e.UNSIGNED_SHORT;
		if (n === 1013) return e.INT;
		if (n === 1014) return e.UNSIGNED_INT;
		if (n === 1015) return e.FLOAT;
		if (n === 1016) return e.HALF_FLOAT;
		if (n === 1021) return e.ALPHA;
		if (n === 1022) return e.RGB;
		if (n === 1023) return e.RGBA;
		if (n === 1026) return e.DEPTH_COMPONENT;
		if (n === 1027) return e.DEPTH_STENCIL;
		if (n === 1028) return e.RED;
		if (n === 1029) return e.RED_INTEGER;
		if (n === 1030) return e.RG;
		if (n === 1031) return e.RG_INTEGER;
		if (n === 1033) return e.RGBA_INTEGER;
		if (n === 33776 || n === 33777 || n === 33778 || n === 33779) {
			if (a === "srgb") {
				if (i = t.get("WEBGL_compressed_texture_s3tc_srgb"), i !== null) {
					if (n === 33776) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
					if (n === 33777) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
					if (n === 33778) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
					if (n === 33779) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
				} else return null;
			} else if (i = t.get("WEBGL_compressed_texture_s3tc"), i !== null) {
				if (n === 33776) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if (n === 33777) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if (n === 33778) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if (n === 33779) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
			} else return null;
		}
		if (n === 35840 || n === 35841 || n === 35842 || n === 35843) {
			if (i = t.get("WEBGL_compressed_texture_pvrtc"), i !== null) {
				if (n === 35840) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if (n === 35841) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if (n === 35842) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if (n === 35843) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
			} else return null;
		}
		if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491) {
			if (i = t.get("WEBGL_compressed_texture_etc"), i !== null) {
				if (n === 36196 || n === 37492) return a === "srgb" ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
				if (n === 37496) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC;
				if (n === 37488) return i.COMPRESSED_R11_EAC;
				if (n === 37489) return i.COMPRESSED_SIGNED_R11_EAC;
				if (n === 37490) return i.COMPRESSED_RG11_EAC;
				if (n === 37491) return i.COMPRESSED_SIGNED_RG11_EAC;
			} else return null;
		}
		if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) {
			if (i = t.get("WEBGL_compressed_texture_astc"), i !== null) {
				if (n === 37808) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
				if (n === 37809) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
				if (n === 37810) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
				if (n === 37811) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
				if (n === 37812) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
				if (n === 37813) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
				if (n === 37814) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
				if (n === 37815) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
				if (n === 37816) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
				if (n === 37817) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
				if (n === 37818) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
				if (n === 37819) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
				if (n === 37820) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
				if (n === 37821) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
			} else return null;
		}
		if (n === 36492 || n === 36494 || n === 36495) {
			if (i = t.get("EXT_texture_compression_bptc"), i !== null) {
				if (n === 36492) return a === "srgb" ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
				if (n === 36494) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
				if (n === 36495) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
			} else return null;
		}
		if (n === 36283 || n === 36284 || n === 36285 || n === 36286) {
			if (i = t.get("EXT_texture_compression_rgtc"), i !== null) {
				if (n === 36283) return i.COMPRESSED_RED_RGTC1_EXT;
				if (n === 36284) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
				if (n === 36285) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
				if (n === 36286) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
			} else return null;
		}
		return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n];
	}
	return { convert: n };
}
var Gu = "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", Ku = "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", qu = class {
	constructor() {
		this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
	}
	init(e, t) {
		if (this.texture === null) {
			let n = new Ki(e.texture);
			(e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
		}
	}
	getMesh(e) {
		if (this.texture !== null && this.mesh === null) {
			let t = e.cameras[0].viewport, n = new Do({
				vertexShader: Gu,
				fragmentShader: Ku,
				uniforms: {
					depthColor: { value: this.texture },
					depthWidth: { value: t.z },
					depthHeight: { value: t.w }
				}
			});
			this.mesh = new Pi(new ho(20, 20), n);
		}
		return this.mesh;
	}
	reset() {
		this.texture = null, this.mesh = null;
	}
	getDepthTexture() {
		return this.texture;
	}
}, Ju = class extends bt {
	constructor(e, t) {
		super();
		let n = this, r = null, i = 1, a = null, o = "local-floor", s = 1, c = null, l = null, u = null, d = null, f = null, p = null, m = typeof XRWebGLBinding < "u", h = new qu(), g = {}, _ = t.getContextAttributes(), v = null, y = null, b = [], x = [], S = new W(), C = null, w = null, T = new ds();
		T.viewport = new dn();
		let E = new ds();
		E.viewport = new dn();
		let D = [T, E], O = new ys(), k = null, A = null;
		this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
			let t = b[e];
			return t === void 0 && (t = new Gn(), b[e] = t), t.getTargetRaySpace();
		}, this.getControllerGrip = function(e) {
			let t = b[e];
			return t === void 0 && (t = new Gn(), b[e] = t), t.getGripSpace();
		}, this.getHand = function(e) {
			let t = b[e];
			return t === void 0 && (t = new Gn(), b[e] = t), t.getHandSpace();
		};
		function M(e) {
			let t = x.indexOf(e.inputSource);
			if (t === -1) return;
			let n = b[t];
			n !== void 0 && (n.update(e.inputSource, e.frame, c || a), n.dispatchEvent({
				type: e.type,
				data: e.inputSource
			}));
		}
		function N() {
			r.removeEventListener("select", M), r.removeEventListener("selectstart", M), r.removeEventListener("selectend", M), r.removeEventListener("squeeze", M), r.removeEventListener("squeezestart", M), r.removeEventListener("squeezeend", M), r.removeEventListener("end", N), r.removeEventListener("inputsourceschange", ee);
			for (let e = 0; e < b.length; e++) {
				let t = x[e];
				t !== null && (x[e] = null, b[e].disconnect(t));
			}
			k = null, A = null, h.reset();
			for (let e in g) delete g[e];
			if (e.setRenderTarget(v), f = null, d = null, u = null, r = null, y = null, F.stop(), n.isPresenting = !1, e.setPixelRatio(C), e.setSize(S.width, S.height, !1), w !== null) {
				let e = w.camera;
				e.fov = w.fov, e.zoom = w.zoom, e.updateProjectionMatrix(), w = null;
			}
			n.dispatchEvent({ type: "sessionend" });
		}
		this.setFramebufferScaleFactor = function(e) {
			i = e, n.isPresenting === !0 && V("WebXRManager: Cannot change framebuffer scale while presenting.");
		}, this.setReferenceSpaceType = function(e) {
			o = e, n.isPresenting === !0 && V("WebXRManager: Cannot change reference space type while presenting.");
		}, this.getReferenceSpace = function() {
			return c || a;
		}, this.setReferenceSpace = function(e) {
			c = e;
		}, this.getBaseLayer = function() {
			return d === null ? f : d;
		}, this.getBinding = function() {
			return u === null && m && (u = new XRWebGLBinding(r, t)), u;
		}, this.getFrame = function() {
			return p;
		}, this.getSession = function() {
			return r;
		}, this.setSession = async function(l) {
			if (r = l, r !== null) {
				if (v = e.getRenderTarget(), r.addEventListener("select", M), r.addEventListener("selectstart", M), r.addEventListener("selectend", M), r.addEventListener("squeeze", M), r.addEventListener("squeezestart", M), r.addEventListener("squeezeend", M), r.addEventListener("end", N), r.addEventListener("inputsourceschange", ee), _.xrCompatible !== !0 && await t.makeXRCompatible(), C = e.getPixelRatio(), e.getSize(S), m && "createProjectionLayer" in XRWebGLBinding.prototype) {
					let n = null, a = null, o = null;
					_.depth && (o = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, n = _.stencil ? de : ue, a = _.stencil ? oe : ne);
					let s = {
						colorFormat: t.RGBA8,
						depthFormat: o,
						scaleFactor: i
					};
					u = this.getBinding(), d = u.createProjectionLayer(s), r.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), y = new pn(d.textureWidth, d.textureHeight, {
						format: le,
						type: j,
						depthTexture: new Wi(d.textureWidth, d.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
						stencilBuffer: _.stencil,
						colorSpace: e.outputColorSpace,
						samples: _.antialias ? 4 : 0,
						resolveDepthBuffer: d.ignoreDepthValues === !1,
						resolveStencilBuffer: d.ignoreDepthValues === !1,
						storeMultisampledDepthBuffer: d.ignoreDepthValues === !1,
						storeMultisampledStencilBuffer: d.ignoreDepthValues === !1
					});
				} else {
					let n = {
						antialias: _.antialias,
						alpha: !0,
						depth: _.depth,
						stencil: _.stencil,
						framebufferScaleFactor: i
					};
					f = new XRWebGLLayer(r, t, n), r.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, !1), y = new pn(f.framebufferWidth, f.framebufferHeight, {
						format: le,
						type: j,
						colorSpace: e.outputColorSpace,
						stencilBuffer: _.stencil,
						resolveDepthBuffer: f.ignoreDepthValues === !1,
						resolveStencilBuffer: f.ignoreDepthValues === !1,
						storeMultisampledDepthBuffer: f.ignoreDepthValues === !1,
						storeMultisampledStencilBuffer: f.ignoreDepthValues === !1
					});
				}
				y.isXRRenderTarget = !0, this.setFoveation(s), c = null, a = await r.requestReferenceSpace(o), F.setContext(r), F.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
			}
		}, this.getEnvironmentBlendMode = function() {
			if (r !== null) return r.environmentBlendMode;
		}, this.getDepthTexture = function() {
			return h.getDepthTexture();
		};
		function ee(e) {
			for (let t = 0; t < e.removed.length; t++) {
				let n = e.removed[t], r = x.indexOf(n);
				r >= 0 && (x[r] = null, b[r].disconnect(n));
			}
			for (let t = 0; t < e.added.length; t++) {
				let n = e.added[t], r = x.indexOf(n);
				if (r === -1) {
					for (let e = 0; e < b.length; e++) if (e >= x.length) {
						x.push(n), r = e;
						break;
					} else if (x[e] === null) {
						x[e] = n, r = e;
						break;
					}
					if (r === -1) break;
				}
				let i = b[r];
				i && i.connect(n);
			}
		}
		let te = new G(), P = new G();
		function re(e, t, n) {
			te.setFromMatrixPosition(t.matrixWorld), P.setFromMatrixPosition(n.matrixWorld);
			let r = te.distanceTo(P), i = t.projectionMatrix.elements, a = n.projectionMatrix.elements, o = i[14] / (i[10] - 1), s = i[14] / (i[10] + 1), c = (i[9] + 1) / i[5], l = (i[9] - 1) / i[5], u = (i[8] - 1) / i[0], d = (a[8] + 1) / a[0], f = o * u, p = o * d, m = r / (-u + d), h = m * -u;
			if (t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(h), e.translateZ(m), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert(), i[10] === -1) e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
			else {
				let t = o + m, n = s + m, i = f - h, a = p + (r - h), u = c * s / n * t, d = l * s / n * t;
				e.projectionMatrix.makePerspective(i, a, u, d, t, n), e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
			}
		}
		function ie(e, t) {
			t === null ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert();
		}
		this.updateCamera = function(e) {
			if (r === null) return;
			let t = e.near, n = e.far;
			h.texture !== null && (h.depthNear > 0 && (t = h.depthNear), h.depthFar > 0 && (n = h.depthFar)), O.near = E.near = T.near = t, O.far = E.far = T.far = n, (k !== O.near || A !== O.far) && (r.updateRenderState({
				depthNear: O.near,
				depthFar: O.far
			}), k = O.near, A = O.far), O.layers.mask = e.layers.mask | 6, T.layers.mask = O.layers.mask & -5, E.layers.mask = O.layers.mask & -3;
			let i = e.parent, a = O.cameras;
			ie(O, i);
			for (let e = 0; e < a.length; e++) ie(a[e], i);
			a.length === 2 ? re(O, T, E) : O.projectionMatrix.copy(T.projectionMatrix), w === null && e.isPerspectiveCamera && (w = {
				camera: e,
				fov: e.fov,
				zoom: e.zoom
			}), ae(e, O, i);
		};
		function ae(e, t, n) {
			n === null ? e.matrix.copy(t.matrixWorld) : (e.matrix.copy(n.matrixWorld), e.matrix.invert(), e.matrix.multiply(t.matrixWorld)), e.matrix.decompose(e.position, e.quaternion, e.scale), e.updateMatrixWorld(!0), e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse), e.isPerspectiveCamera && (e.fov = wt * 2 * Math.atan(1 / e.projectionMatrix.elements[5]), e.zoom = 1);
		}
		this.getCamera = function() {
			return O;
		}, this.getFoveation = function() {
			if (d !== null || f !== null) return s;
		}, this.setFoveation = function(e) {
			s = e, d !== null && (d.fixedFoveation = e), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = e);
		}, this.hasDepthSensing = function() {
			return h.texture !== null;
		}, this.getDepthSensingMesh = function() {
			return h.getMesh(O);
		}, this.getCameraTexture = function(e) {
			return g[e];
		};
		let se = null;
		function ce(t, i) {
			if (l = i.getViewerPose(c || a), p = i, l !== null) {
				let t = l.views;
				f !== null && (e.setRenderTargetFramebuffer(y, f.framebuffer), e.setRenderTarget(y));
				let i = !1;
				t.length !== O.cameras.length && (O.cameras.length = 0, i = !0);
				for (let n = 0; n < t.length; n++) {
					let r = t[n], a = null;
					if (f !== null) a = f.getViewport(r);
					else {
						let t = u.getViewSubImage(d, r);
						a = t.viewport, n === 0 && (e.setRenderTargetTextures(y, t.colorTexture, t.depthStencilTexture), e.setRenderTarget(y));
					}
					let o = D[n];
					o === void 0 && (o = new ds(), o.layers.enable(n), o.viewport = new dn(), D[n] = o), o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.projectionMatrix.fromArray(r.projectionMatrix), o.projectionMatrixInverse.copy(o.projectionMatrix).invert(), o.viewport.set(a.x, a.y, a.width, a.height), n === 0 && (O.matrix.copy(o.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale)), i === !0 && O.cameras.push(o);
				}
				let a = r.enabledFeatures;
				if (a && a.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && m) {
					u = n.getBinding();
					let e = u.getDepthInformation(t[0]);
					e && e.isValid && e.texture && h.init(e, r.renderState);
				}
				if (a && a.includes("camera-access") && m) {
					e.state.unbindTexture(), u = n.getBinding();
					for (let e = 0; e < t.length; e++) {
						let n = t[e].camera;
						if (n) {
							let e = g[n];
							e || (e = new Ki(), g[n] = e);
							let t = u.getCameraImage(n);
							e.sourceTexture = t;
						}
					}
				}
			}
			for (let e = 0; e < b.length; e++) {
				let t = x[e], n = b[e];
				t !== null && n !== void 0 && n.update(t, i, c || a);
			}
			se && se(t, i), i.detectedPlanes && n.dispatchEvent({
				type: "planesdetected",
				data: i
			}), p = null;
		}
		let F = new Bs();
		F.setAnimationLoop(ce), this.setAnimationLoop = function(e) {
			se = e;
		}, this.dispose = function() {};
	}
}, Yu = /*@__PURE__*/ new gn(), Xu = /*@__PURE__*/ new K();
Xu.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Zu(e, t) {
	function n(e, t) {
		e.matrixAutoUpdate === !0 && e.updateMatrix(), t.value.copy(e.matrix);
	}
	function r(t, n) {
		n.color.getRGB(t.fogColor.value, Co(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density);
	}
	function i(e, t, n, r, i) {
		t.isNodeMaterial ? t.uniformsNeedUpdate = !1 : t.isMeshBasicMaterial ? a(e, t) : t.isMeshLambertMaterial ? (a(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshToonMaterial ? (a(e, t), d(e, t)) : t.isMeshPhongMaterial ? (a(e, t), u(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshStandardMaterial ? (a(e, t), f(e, t), t.isMeshPhysicalMaterial && p(e, t, i)) : t.isMeshMatcapMaterial ? (a(e, t), m(e, t)) : t.isMeshDepthMaterial ? a(e, t) : t.isMeshDistanceMaterial ? (a(e, t), h(e, t)) : t.isMeshNormalMaterial ? a(e, t) : t.isLineBasicMaterial ? (o(e, t), t.isLineDashedMaterial && s(e, t)) : t.isPointsMaterial ? c(e, t, n, r) : t.isSpriteMaterial ? l(e, t) : t.isShadowMaterial ? (e.color.value.copy(t.color), e.opacity.value = t.opacity) : t.isShaderMaterial && (t.uniformsNeedUpdate = !1);
	}
	function a(e, r) {
		e.opacity.value = r.opacity, r.color && e.diffuse.value.copy(r.color), r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.bumpMap && (e.bumpMap.value = r.bumpMap, n(r.bumpMap, e.bumpMapTransform), e.bumpScale.value = r.bumpScale, r.side === 1 && (e.bumpScale.value *= -1)), r.normalMap && (e.normalMap.value = r.normalMap, n(r.normalMap, e.normalMapTransform), e.normalScale.value.copy(r.normalScale), r.side === 1 && e.normalScale.value.negate()), r.displacementMap && (e.displacementMap.value = r.displacementMap, n(r.displacementMap, e.displacementMapTransform), e.displacementScale.value = r.displacementScale, e.displacementBias.value = r.displacementBias), r.emissiveMap && (e.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, e.emissiveMapTransform)), r.specularMap && (e.specularMap.value = r.specularMap, n(r.specularMap, e.specularMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
		let i = t.get(r), a = i.envMap, o = i.envMapRotation;
		a && (e.envMap.value = a, e.envMapRotation.value.setFromMatrix4(Yu.makeRotationFromEuler(o)).transpose(), a.isCubeTexture && a.isRenderTargetTexture === !1 && e.envMapRotation.value.premultiply(Xu), e.reflectivity.value = r.reflectivity, e.ior.value = r.ior, e.refractionRatio.value = r.refractionRatio), r.lightMap && (e.lightMap.value = r.lightMap, e.lightMapIntensity.value = r.lightMapIntensity, n(r.lightMap, e.lightMapTransform)), r.aoMap && (e.aoMap.value = r.aoMap, e.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, e.aoMapTransform));
	}
	function o(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, t.map && (e.map.value = t.map, n(t.map, e.mapTransform));
	}
	function s(e, t) {
		e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
	}
	function c(e, t, r, i) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * r, e.scale.value = i * .5, t.map && (e.map.value = t.map, n(t.map, e.uvTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function l(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map, n(t.map, e.mapTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function u(e, t) {
		e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4);
	}
	function d(e, t) {
		t.gradientMap && (e.gradientMap.value = t.gradientMap);
	}
	function f(e, t) {
		e.metalness.value = t.metalness, t.metalnessMap && (e.metalnessMap.value = t.metalnessMap, n(t.metalnessMap, e.metalnessMapTransform)), e.roughness.value = t.roughness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap, n(t.roughnessMap, e.roughnessMapTransform)), t.envMap && (e.envMapIntensity.value = t.envMapIntensity);
	}
	function p(e, t, r) {
		e.ior.value = t.ior, t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap, n(t.sheenColorMap, e.sheenColorMapTransform)), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap, n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))), t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap, n(t.clearcoatMap, e.clearcoatMapTransform)), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap, n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap, n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), t.side === 1 && e.clearcoatNormalScale.value.negate())), t.dispersion > 0 && (e.dispersion.value = t.dispersion), t.retroreflectivity > 0 && (e.retroreflectivity.value = t.retroreflectivity), t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1], t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap, n(t.iridescenceMap, e.iridescenceMapTransform)), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap, n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = r.texture, e.transmissionSamplerSize.value.set(r.width, r.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap, n(t.transmissionMap, e.transmissionMapTransform)), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap, n(t.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor)), t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)), t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap, n(t.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularColorMap && (e.specularColorMap.value = t.specularColorMap, n(t.specularColorMap, e.specularColorMapTransform)), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap, n(t.specularIntensityMap, e.specularIntensityMapTransform));
	}
	function m(e, t) {
		t.matcap && (e.matcap.value = t.matcap);
	}
	function h(e, n) {
		let r = t.get(n).light;
		e.referencePosition.value.setFromMatrixPosition(r.matrixWorld), e.nearDistance.value = r.shadow.camera.near, e.farDistance.value = r.shadow.camera.far;
	}
	return {
		refreshFogUniforms: r,
		refreshMaterialUniforms: i
	};
}
function Qu(e, t, n, r) {
	let i = {}, a = {}, o = [], s = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
	function c(e, t) {
		let n = t.program;
		r.uniformBlockBinding(e, n);
	}
	function l(e, n) {
		let o = i[e.id];
		o === void 0 && (g(e), o = u(e), i[e.id] = o, e.addEventListener("dispose", v));
		let s = n.program;
		r.updateUBOMapping(e, s);
		let c = t.render.frame;
		a[e.id] !== c && (f(e), a[e.id] = c);
	}
	function u(t) {
		let n = d();
		t.__bindingPointIndex = n;
		let r = e.createBuffer(), i = t.__size, a = t.usage;
		return e.bindBuffer(e.UNIFORM_BUFFER, r), e.bufferData(e.UNIFORM_BUFFER, i, a), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, n, r), r;
	}
	function d() {
		for (let e = 0; e < s; e++) if (o.indexOf(e) === -1) return o.push(e), e;
		return H("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
	}
	function f(t) {
		let n = i[t.id], r = t.uniforms, a = t.__cache;
		e.bindBuffer(e.UNIFORM_BUFFER, n);
		for (let e = 0, t = r.length; e < t; e++) {
			let t = r[e];
			if (Array.isArray(t)) for (let n = 0, r = t.length; n < r; n++) p(t[n], e, n, a);
			else p(t, e, 0, a);
		}
		e.bindBuffer(e.UNIFORM_BUFFER, null);
	}
	function p(t, n, r, i) {
		if (h(t, n, r, i) === !0) {
			let n = t.__offset, r = t.value;
			if (Array.isArray(r)) {
				let e = 0;
				for (let n = 0; n < r.length; n++) {
					let i = r[n], a = _(i);
					m(i, t.__data, e), typeof i != "number" && typeof i != "boolean" && !i.isMatrix3 && !ArrayBuffer.isView(i) && (e += a.storage / Float32Array.BYTES_PER_ELEMENT);
				}
			} else m(r, t.__data, 0);
			e.bufferSubData(e.UNIFORM_BUFFER, n, t.__data);
		}
	}
	function m(e, t, n) {
		typeof e == "number" || typeof e == "boolean" ? t[0] = e : e.isMatrix3 ? (t[0] = e.elements[0], t[1] = e.elements[1], t[2] = e.elements[2], t[3] = 0, t[4] = e.elements[3], t[5] = e.elements[4], t[6] = e.elements[5], t[7] = 0, t[8] = e.elements[6], t[9] = e.elements[7], t[10] = e.elements[8], t[11] = 0) : ArrayBuffer.isView(e) ? t.set(new e.constructor(e.buffer, e.byteOffset, t.length)) : e.toArray(t, n);
	}
	function h(e, t, n, r) {
		let i = e.value, a = t + "_" + n;
		if (r[a] === void 0) return r[a] = typeof i == "number" || typeof i == "boolean" ? i : ArrayBuffer.isView(i) ? i.slice() : i.clone(), !0;
		{
			let e = r[a];
			if (typeof i == "number" || typeof i == "boolean") {
				if (e !== i) return r[a] = i, !0;
			} else if (ArrayBuffer.isView(i)) return !0;
			else if (e.equals(i) === !1) return e.copy(i), !0;
		}
		return !1;
	}
	function g(e) {
		let t = e.uniforms, n = 0;
		for (let e = 0, r = t.length; e < r; e++) {
			let r = Array.isArray(t[e]) ? t[e] : [t[e]];
			for (let e = 0, t = r.length; e < t; e++) {
				let t = r[e], i = Array.isArray(t.value) ? t.value : [t.value];
				for (let e = 0, r = i.length; e < r; e++) {
					let r = i[e], a = _(r), o = n % 16, s = o % a.boundary, c = o + s;
					n += s, c !== 0 && 16 - c < a.storage && (n += 16 - c), t.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), t.__offset = n, n += a.storage;
				}
			}
		}
		let r = n % 16;
		return r > 0 && (n += 16 - r), e.__size = n, e.__cache = {}, this;
	}
	function _(e) {
		let t = {
			boundary: 0,
			storage: 0
		};
		return typeof e == "number" || typeof e == "boolean" ? (t.boundary = 4, t.storage = 4) : e.isVector2 ? (t.boundary = 8, t.storage = 8) : e.isVector3 || e.isColor ? (t.boundary = 16, t.storage = 12) : e.isVector4 ? (t.boundary = 16, t.storage = 16) : e.isMatrix3 ? (t.boundary = 48, t.storage = 48) : e.isMatrix4 ? (t.boundary = 64, t.storage = 64) : e.isTexture ? V("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(e) ? (t.boundary = 16, t.storage = e.byteLength) : V("WebGLRenderer: Unsupported uniform value type.", e), t;
	}
	function v(t) {
		let n = t.target;
		n.removeEventListener("dispose", v);
		let r = o.indexOf(n.__bindingPointIndex);
		o.splice(r, 1), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id];
	}
	function y() {
		for (let t in i) e.deleteBuffer(i[t]);
		o = [], i = {}, a = {};
	}
	return {
		bind: c,
		update: l,
		dispose: y
	};
}
var $u = new Uint16Array([
	12469,
	15057,
	12620,
	14925,
	13266,
	14620,
	13807,
	14376,
	14323,
	13990,
	14545,
	13625,
	14713,
	13328,
	14840,
	12882,
	14931,
	12528,
	14996,
	12233,
	15039,
	11829,
	15066,
	11525,
	15080,
	11295,
	15085,
	10976,
	15082,
	10705,
	15073,
	10495,
	13880,
	14564,
	13898,
	14542,
	13977,
	14430,
	14158,
	14124,
	14393,
	13732,
	14556,
	13410,
	14702,
	12996,
	14814,
	12596,
	14891,
	12291,
	14937,
	11834,
	14957,
	11489,
	14958,
	11194,
	14943,
	10803,
	14921,
	10506,
	14893,
	10278,
	14858,
	9960,
	14484,
	14039,
	14487,
	14025,
	14499,
	13941,
	14524,
	13740,
	14574,
	13468,
	14654,
	13106,
	14743,
	12678,
	14818,
	12344,
	14867,
	11893,
	14889,
	11509,
	14893,
	11180,
	14881,
	10751,
	14852,
	10428,
	14812,
	10128,
	14765,
	9754,
	14712,
	9466,
	14764,
	13480,
	14764,
	13475,
	14766,
	13440,
	14766,
	13347,
	14769,
	13070,
	14786,
	12713,
	14816,
	12387,
	14844,
	11957,
	14860,
	11549,
	14868,
	11215,
	14855,
	10751,
	14825,
	10403,
	14782,
	10044,
	14729,
	9651,
	14666,
	9352,
	14599,
	9029,
	14967,
	12835,
	14966,
	12831,
	14963,
	12804,
	14954,
	12723,
	14936,
	12564,
	14917,
	12347,
	14900,
	11958,
	14886,
	11569,
	14878,
	11247,
	14859,
	10765,
	14828,
	10401,
	14784,
	10011,
	14727,
	9600,
	14660,
	9289,
	14586,
	8893,
	14508,
	8533,
	15111,
	12234,
	15110,
	12234,
	15104,
	12216,
	15092,
	12156,
	15067,
	12010,
	15028,
	11776,
	14981,
	11500,
	14942,
	11205,
	14902,
	10752,
	14861,
	10393,
	14812,
	9991,
	14752,
	9570,
	14682,
	9252,
	14603,
	8808,
	14519,
	8445,
	14431,
	8145,
	15209,
	11449,
	15208,
	11451,
	15202,
	11451,
	15190,
	11438,
	15163,
	11384,
	15117,
	11274,
	15055,
	10979,
	14994,
	10648,
	14932,
	10343,
	14871,
	9936,
	14803,
	9532,
	14729,
	9218,
	14645,
	8742,
	14556,
	8381,
	14461,
	8020,
	14365,
	7603,
	15273,
	10603,
	15272,
	10607,
	15267,
	10619,
	15256,
	10631,
	15231,
	10614,
	15182,
	10535,
	15118,
	10389,
	15042,
	10167,
	14963,
	9787,
	14883,
	9447,
	14800,
	9115,
	14710,
	8665,
	14615,
	8318,
	14514,
	7911,
	14411,
	7507,
	14279,
	7198,
	15314,
	9675,
	15313,
	9683,
	15309,
	9712,
	15298,
	9759,
	15277,
	9797,
	15229,
	9773,
	15166,
	9668,
	15084,
	9487,
	14995,
	9274,
	14898,
	8910,
	14800,
	8539,
	14697,
	8234,
	14590,
	7790,
	14479,
	7409,
	14367,
	7067,
	14178,
	6621,
	15337,
	8619,
	15337,
	8631,
	15333,
	8677,
	15325,
	8769,
	15305,
	8871,
	15264,
	8940,
	15202,
	8909,
	15119,
	8775,
	15022,
	8565,
	14916,
	8328,
	14804,
	8009,
	14688,
	7614,
	14569,
	7287,
	14448,
	6888,
	14321,
	6483,
	14088,
	6171,
	15350,
	7402,
	15350,
	7419,
	15347,
	7480,
	15340,
	7613,
	15322,
	7804,
	15287,
	7973,
	15229,
	8057,
	15148,
	8012,
	15046,
	7846,
	14933,
	7611,
	14810,
	7357,
	14682,
	7069,
	14552,
	6656,
	14421,
	6316,
	14251,
	5948,
	14007,
	5528,
	15356,
	5942,
	15356,
	5977,
	15353,
	6119,
	15348,
	6294,
	15332,
	6551,
	15302,
	6824,
	15249,
	7044,
	15171,
	7122,
	15070,
	7050,
	14949,
	6861,
	14818,
	6611,
	14679,
	6349,
	14538,
	6067,
	14398,
	5651,
	14189,
	5311,
	13935,
	4958,
	15359,
	4123,
	15359,
	4153,
	15356,
	4296,
	15353,
	4646,
	15338,
	5160,
	15311,
	5508,
	15263,
	5829,
	15188,
	6042,
	15088,
	6094,
	14966,
	6001,
	14826,
	5796,
	14678,
	5543,
	14527,
	5287,
	14377,
	4985,
	14133,
	4586,
	13869,
	4257,
	15360,
	1563,
	15360,
	1642,
	15358,
	2076,
	15354,
	2636,
	15341,
	3350,
	15317,
	4019,
	15273,
	4429,
	15203,
	4732,
	15105,
	4911,
	14981,
	4932,
	14836,
	4818,
	14679,
	4621,
	14517,
	4386,
	14359,
	4156,
	14083,
	3795,
	13808,
	3437,
	15360,
	122,
	15360,
	137,
	15358,
	285,
	15355,
	636,
	15344,
	1274,
	15322,
	2177,
	15281,
	2765,
	15215,
	3223,
	15120,
	3451,
	14995,
	3569,
	14846,
	3567,
	14681,
	3466,
	14511,
	3305,
	14344,
	3121,
	14037,
	2800,
	13753,
	2467,
	15360,
	0,
	15360,
	1,
	15359,
	21,
	15355,
	89,
	15346,
	253,
	15325,
	479,
	15287,
	796,
	15225,
	1148,
	15133,
	1492,
	15008,
	1749,
	14856,
	1882,
	14685,
	1886,
	14506,
	1783,
	14324,
	1608,
	13996,
	1398,
	13702,
	1183
]), ed = null;
function td() {
	return ed === null && (ed = new Li($u, 16, 16, me, re), ed.name = "DFG_LUT", ed.minFilter = O, ed.magFilter = O, ed.wrapS = C, ed.wrapT = C, ed.generateMipmaps = !1, ed.needsUpdate = !0), ed;
}
var nd = class {
	constructor(e = {}) {
		let { canvas: t = pt(), context: n = null, depth: r = !0, stencil: i = !1, alpha: a = !1, antialias: o = !1, premultipliedAlpha: s = !0, preserveDrawingBuffer: c = !1, powerPreference: l = "default", failIfMajorPerformanceCaveat: u = !1, reversedDepthBuffer: d = !1, outputBufferType: f = j } = e;
		this.isWebGLRenderer = !0;
		let p;
		if (n !== null) {
			if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
			p = n.getContextAttributes().alpha;
		} else p = a;
		let m = f, h = /* @__PURE__ */ new Set([
			ge,
			he,
			pe
		]), g = /* @__PURE__ */ new Set([
			j,
			ne,
			ee,
			oe,
			ie,
			ae
		]), _ = /* @__PURE__ */ new Uint32Array(4), v = /* @__PURE__ */ new Int32Array(4), y = new G(), b = null, x = null, S = [], C = [], w = null;
		this.domElement = t, this.debug = {
			checkShaderErrors: !0,
			diagnostics: { keywords: !1 },
			onShaderError: null
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
		let T = this, E = !1, D = null, O = null, k = null, M = null;
		this._outputColorSpace = rt;
		let N = 0, te = 0, P = null, se = -1, ce = null, F = new dn(), I = new dn(), le = null, ue = new Y(0), de = 0, fe = t.width, me = t.height, _e = 1, ve = null, ye = null, be = new dn(0, 0, fe, me), xe = new dn(0, 0, fe, me), Se = !1, Ce = new Vi(), we = !1, Te = !1, Ee = new gn(), De = new G(), Oe = new dn(), ke = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		}, Ae = !1;
		function je() {
			return P === null ? _e : 1;
		}
		let L = n;
		function Me(e, n) {
			return t.getContext(e, n);
		}
		let Ne, Pe, R, Fe, z, B, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe;
		try {
			let e = {
				alpha: !0,
				depth: r,
				stencil: i,
				antialias: o,
				premultipliedAlpha: s,
				preserveDrawingBuffer: c,
				powerPreference: l,
				failIfMajorPerformanceCaveat: u
			};
			if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r186"), t.addEventListener("webglcontextlost", tt, !1), t.addEventListener("webglcontextrestored", nt, !1), t.addEventListener("webglcontextcreationerror", it, !1), L === null) {
				let t = "webgl2";
				if (L = Me(t, e), L === null) throw Me(t) ? Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : Error("THREE.WebGLRenderer: Error creating WebGL context.");
			}
			$e();
		} catch (e) {
			throw t.removeEventListener("webglcontextlost", tt, !1), t.removeEventListener("webglcontextrestored", nt, !1), t.removeEventListener("webglcontextcreationerror", it, !1), H("WebGLRenderer: " + e.message), e;
		}
		function $e() {
			Ne = new bc(L), Ne.init(), Xe = new Wu(L, Ne), Pe = new Ys(L, Ne, e, Xe), R = new Hu(L, Ne), Pe.reversedDepthBuffer && d && R.buffers.depth.setReversed(!0), O = L.createFramebuffer(), k = L.createFramebuffer(), M = L.createFramebuffer(), Fe = new Cc(L), z = new Su(), B = new Uu(L, Ne, R, z, Pe, Xe, Fe), Ie = new yc(T), Le = new Vs(L), Ze = new qs(L, Le), Re = new xc(L, Le, Fe, Ze), ze = new Tc(L, Re, Le, Ze, Fe), qe = new wc(L, Pe, B), We = new Xs(z), Be = new xu(T, Ie, Ne, Pe, Ze, We), Ve = new Zu(T, z), He = new Eu(), Ue = new Nu(Ne), Ke = new Ks(T, Ie, R, ze, p, s), Ge = new Vu(T, ze, Pe), Qe = new Qu(L, Fe, Pe, R), Je = new Js(L, Ne, Fe), Ye = new Sc(L, Ne, Fe), Fe.programs = Be.programs, T.capabilities = Pe, T.extensions = Ne, T.properties = z, T.renderLists = He, T.shadowMap = Ge, T.state = R, T.info = Fe;
		}
		m !== 1009 && (w = new Dc(m, t.width, t.height, o, r, i));
		let et = new Ju(T, L);
		this.xr = et, this.getContext = function() {
			return L;
		}, this.getContextAttributes = function() {
			return L.getContextAttributes();
		}, this.forceContextLoss = function() {
			let e = Ne.get("WEBGL_lose_context");
			e && e.loseContext();
		}, this.forceContextRestore = function() {
			let e = Ne.get("WEBGL_lose_context");
			e && e.restoreContext();
		}, this.getPixelRatio = function() {
			return _e;
		}, this.setPixelRatio = function(e) {
			e !== void 0 && (_e = e, this.setSize(fe, me, !1));
		}, this.getSize = function(e) {
			return e.set(fe, me);
		}, this.setSize = function(e, n, r = !0) {
			et.isPresenting ? V("WebGLRenderer: Can't change size while VR device is presenting.") : (fe = e, me = n, t.width = Math.floor(e * _e), t.height = Math.floor(n * _e), r === !0 && (t.style.width = e + "px", t.style.height = n + "px"), w !== null && w.setSize(t.width, t.height), this.setViewport(0, 0, e, n));
		}, this.getDrawingBufferSize = function(e) {
			return e.set(fe * _e, me * _e).floor();
		}, this.setDrawingBufferSize = function(e, n, r) {
			fe = e, me = n, _e = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n);
		}, this.setEffects = function(e) {
			if (m === 1009) H("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
			else {
				if (e) {
					for (let t = 0; t < e.length; t++) if (e[t].isOutputPass === !0) {
						V("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
						break;
					}
				}
				w.setEffects(e || []);
			}
		}, this.getCurrentViewport = function(e) {
			return e.copy(F);
		}, this.getViewport = function(e) {
			return e.copy(be);
		}, this.setViewport = function(e, t, n, r) {
			e.isVector4 ? be.set(e.x, e.y, e.z, e.w) : be.set(e, t, n, r), R.viewport(F.copy(be).multiplyScalar(_e).round());
		}, this.getScissor = function(e) {
			return e.copy(xe);
		}, this.setScissor = function(e, t, n, r) {
			e.isVector4 ? xe.set(e.x, e.y, e.z, e.w) : xe.set(e, t, n, r), R.scissor(I.copy(xe).multiplyScalar(_e).round());
		}, this.getScissorTest = function() {
			return Se;
		}, this.setScissorTest = function(e) {
			R.setScissorTest(Se = e);
		}, this.setOpaqueSort = function(e) {
			ve = e;
		}, this.setTransparentSort = function(e) {
			ye = e;
		}, this.getClearColor = function(e) {
			return e.copy(Ke.getClearColor());
		}, this.setClearColor = function() {
			Ke.setClearColor(...arguments);
		}, this.getClearAlpha = function() {
			return Ke.getClearAlpha();
		}, this.setClearAlpha = function() {
			Ke.setClearAlpha(...arguments);
		}, this.clear = function(e = !0, t = !0, n = !0) {
			let r = 0;
			if (e) {
				let e = !1;
				if (P !== null) {
					let t = P.texture.format;
					e = h.has(t);
				}
				if (e) {
					let e = P.texture.type, t = g.has(e), n = Ke.getClearColor(), r = Ke.getClearAlpha(), i = n.r, a = n.g, o = n.b;
					t ? (_[0] = i, _[1] = a, _[2] = o, _[3] = r, L.clearBufferuiv(L.COLOR, 0, _)) : (v[0] = i, v[1] = a, v[2] = o, v[3] = r, L.clearBufferiv(L.COLOR, 0, v));
				} else r |= L.COLOR_BUFFER_BIT;
			}
			t && (r |= L.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), n && (r |= L.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), r !== 0 && L.clear(r);
		}, this.clearColor = function() {
			this.clear(!0, !1, !1);
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1);
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0);
		}, this.setNodesHandler = function(e) {
			e.setRenderer(this), D = e;
		}, this.dispose = function() {
			t.removeEventListener("webglcontextlost", tt, !1), t.removeEventListener("webglcontextrestored", nt, !1), t.removeEventListener("webglcontextcreationerror", it, !1), Ke.dispose(), He.dispose(), Ue.dispose(), z.dispose(), Ie.dispose(), ze.dispose(), Ze.dispose(), Qe.dispose(), Be.dispose(), et.dispose(), et.removeEventListener("sessionstart", ft), et.removeEventListener("sessionend", mt), gt.stop();
		};
		function tt(e) {
			e.preventDefault(), ht("WebGLRenderer: Context Lost."), E = !0;
		}
		function nt() {
			ht("WebGLRenderer: Context Restored."), E = !1;
			let e = Fe.autoReset, t = Ge.enabled, n = Ge.autoUpdate, r = Ge.needsUpdate, i = Ge.type;
			$e(), Fe.autoReset = e, Ge.enabled = t, Ge.autoUpdate = n, Ge.needsUpdate = r, Ge.type = i;
		}
		function it(e) {
			H("WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
		}
		function at(e) {
			let t = e.target;
			t.removeEventListener("dispose", at), ot(t);
		}
		function ot(e) {
			st(e), z.remove(e);
		}
		function st(e) {
			let t = z.get(e).programs;
			t !== void 0 && (t.forEach(function(e) {
				Be.releaseProgram(e);
			}), e.isShaderMaterial && Be.releaseShaderCache(e));
		}
		this.renderBufferDirect = function(e, t, n, r, i, a) {
			t === null && (t = ke);
			let o = i.isMesh && i.matrixWorld.determinantAffine() < 0, s = Et(e, t, n, r, i);
			R.setMaterial(r, o);
			let c = n.index, l = 1;
			if (r.wireframe === !0) {
				if (c = Re.getWireframeAttribute(n), c === void 0) return;
				l = 2;
			}
			let u = n.drawRange, d = n.attributes.position, f = u.start * l, p = (u.start + u.count) * l;
			a !== null && (f = Math.max(f, a.start * l), p = Math.min(p, (a.start + a.count) * l)), c === null ? d != null && (f = Math.max(f, 0), p = Math.min(p, d.count)) : (f = Math.max(f, 0), p = Math.min(p, c.count));
			let m = p - f;
			if (m < 0 || m === Infinity) return;
			Ze.setup(i, r, s, n, c);
			let h, g = Je;
			if (c !== null && (h = Le.get(c), g = Ye, g.setIndex(h)), i.isMesh) r.wireframe === !0 ? (R.setLineWidth(r.wireframeLinewidth * je()), g.setMode(L.LINES)) : g.setMode(L.TRIANGLES);
			else if (i.isLine) {
				let e = r.linewidth;
				e === void 0 && (e = 1), R.setLineWidth(e * je()), i.isLineSegments ? g.setMode(L.LINES) : i.isLineLoop ? g.setMode(L.LINE_LOOP) : g.setMode(L.LINE_STRIP);
			} else i.isPoints ? g.setMode(L.POINTS) : i.isSprite && g.setMode(L.TRIANGLES);
			if (i.isBatchedMesh) {
				if (Ne.get("WEBGL_multi_draw")) g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
				else {
					let e = i._multiDrawStarts, t = i._multiDrawCounts, n = i._multiDrawCount, a = c ? Le.get(c).bytesPerElement : 1, o = z.get(r).currentProgram.getUniforms();
					for (let r = 0; r < n; r++) o.setValue(L, "_gl_DrawID", r), g.render(e[r] / a, t[r]);
				}
			} else if (i.isInstancedMesh) g.renderInstances(f, m, i.count);
			else if (n.isInstancedBufferGeometry) {
				let e = n._maxInstanceCount === void 0 ? Infinity : n._maxInstanceCount, t = Math.min(n.instanceCount, e);
				g.renderInstances(f, m, t);
			} else g.render(f, m);
		};
		function ct(e, t, n, r) {
			D !== null && e.isNodeMaterial && D.setObject(r, e), we === !0 && We.setState(e, n, !1), e.transparent === !0 && e.side === 2 && e.forceSinglePass === !1 ? (e.side = 1, e.needsUpdate = !0, Ct(e, t, r), e.side = 0, e.needsUpdate = !0, Ct(e, t, r), e.side = 2) : Ct(e, t, r);
		}
		this.compile = function(e, t, n = null) {
			n === null && (n = e), D !== null && D.renderStart(e, t, n), x = Ue.get(n), x.init(t), C.push(x), n.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (x.pushLight(e), e.castShadow && x.pushShadow(e));
			}), e !== n && e.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (x.pushLight(e), e.castShadow && x.pushShadow(e));
			}), x.setupLights(), D !== null && D.updateLights(x.state.lightsArray), Te = this.localClippingEnabled, we = We.init(this.clippingPlanes, Te), we === !0 && We.setGlobalState(this.clippingPlanes, t), D !== null && Ge.render(x.state.shadowsArray, n, t);
			let r = /* @__PURE__ */ new Set();
			return e.traverse(function(e) {
				if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
				let i = e.material;
				if (i) {
					if (Array.isArray(i)) for (let a = 0; a < i.length; a++) {
						let o = i[a];
						ct(o, n, t, e), r.add(o);
					}
					else ct(i, n, t, e), r.add(i);
				}
			}), x = C.pop(), D !== null && D.renderEnd(), r;
		}, this.compileAsync = function(e, t, n = null) {
			let r = this.compile(e, t, n);
			return new Promise((t) => {
				function n() {
					r.forEach(function(e) {
						let t = z.get(e).currentProgram;
						(t === void 0 || t.isReady()) && r.delete(e);
					}), r.size === 0 ? t(e) : setTimeout(n, 10);
				}
				Ne.get("KHR_parallel_shader_compile") === null ? setTimeout(n, 10) : n();
			});
		};
		let ut = null;
		function dt(e) {
			ut && ut(e);
		}
		function ft() {
			gt.stop();
		}
		function mt() {
			gt.start();
		}
		let gt = new Bs();
		gt.setAnimationLoop(dt), typeof self < "u" && gt.setContext(self), this.setAnimationLoop = function(e) {
			ut = e, et.setAnimationLoop(e), e === null ? gt.stop() : gt.start();
		}, et.addEventListener("sessionstart", ft), et.addEventListener("sessionend", mt), this.render = function(e, t) {
			if (t !== void 0 && t.isCamera !== !0) {
				H("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
				return;
			}
			if (E === !0) return;
			D !== null && D.renderStart(e, t);
			let n = et.enabled === !0 && et.isPresenting === !0, r = w !== null && (P === null || n) && w.begin(T, P);
			if (e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(), t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(), et.enabled === !0 && et.isPresenting === !0 && (w === null || w.isCompositing() === !1) && (et.cameraAutoUpdate === !0 && et.updateCamera(t), t = et.getCamera()), e.isScene === !0 && e.onBeforeRender(T, e, t, P), x = Ue.get(e, C.length), x.init(t), x.state.textureUnits = B.getTextureUnits(), C.push(x), Ee.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), Ce.setFromProjectionMatrix(Ee, lt, t.reversedDepth), Te = this.localClippingEnabled, we = We.init(this.clippingPlanes, Te), b = He.get(e, S.length), b.init(), S.push(b), et.enabled === !0 && et.isPresenting === !0) {
				let e = T.xr.getDepthSensingMesh();
				e !== null && _t(e, t, -Infinity, T.sortObjects);
			}
			_t(e, t, 0, T.sortObjects), b.finish(), D !== null && D.updateLights(x.state.lightsArray), T.sortObjects === !0 && b.sort(ve, ye), Ae = et.enabled === !1 || et.isPresenting === !1 || et.hasDepthSensing() === !1, Ae && Ke.addToRenderList(b, e), this.info.render.frame++, this.info.autoReset === !0 && this.info.reset(), we === !0 && We.beginShadows();
			let i = x.state.shadowsArray;
			if (Ge.render(i, e, t), we === !0 && We.endShadows(), (r && w.hasRenderPass()) === !1) {
				let n = b.opaque, r = b.transmissive;
				if (x.setupLights(), t.isArrayCamera) {
					let i = t.cameras;
					if (r.length > 0) for (let t = 0, a = i.length; t < a; t++) {
						let a = i[t];
						bt(n, r, e, a);
					}
					Ae && Ke.render(e);
					for (let t = 0, n = i.length; t < n; t++) {
						let n = i[t];
						yt(b, e, n, n.viewport);
					}
				} else r.length > 0 && bt(n, r, e, t), Ae && Ke.render(e), yt(b, e, t);
			}
			P !== null && te === 0 && (B.updateMultisampleRenderTarget(P), B.updateRenderTargetMipmap(P)), r && w.end(T), e.isScene === !0 && e.onAfterRender(T, e, t), Ze.resetDefaultState(), se = -1, ce = null, C.pop(), C.length > 0 ? (x = C[C.length - 1], B.setTextureUnits(x.state.textureUnits), we === !0 && We.setGlobalState(T.clippingPlanes, x.state.camera)) : x = null, S.pop(), b = S.length > 0 ? S[S.length - 1] : null, D !== null && D.renderEnd();
		};
		function _t(e, t, n, r) {
			if (e.visible === !1) return;
			if (e.layers.test(t.layers)) {
				if (e.isGroup) n = e.renderOrder;
				else if (e.isLOD) e.autoUpdate === !0 && e.update(t);
				else if (e.isLightProbeGrid) x.pushLightProbeGrid(e);
				else if (e.isLight) x.pushLight(e), e.castShadow && x.pushShadow(e);
				else if (e.isSprite) {
					if (!e.frustumCulled || e.intersectsFrustum(Ce)) {
						r && Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);
						let i = ze.update(e), a = e.material;
						a.visible && b.push(e, i, a, n, Oe.z, null, t);
					}
				} else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || e.intersectsFrustum(Ce))) {
					let i = ze.update(e), a = e.material;
					if (r && (e.boundingSphere === void 0 ? (i.boundingSphere === null && i.computeBoundingSphere(), Oe.copy(i.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(), Oe.copy(e.boundingSphere.center)), Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)), Array.isArray(a)) {
						let r = i.groups;
						for (let o = 0, s = r.length; o < s; o++) {
							let s = r[o], c = a[s.materialIndex];
							c && c.visible && b.push(e, i, c, n, Oe.z, s, t);
						}
					} else a.visible && b.push(e, i, a, n, Oe.z, null, t);
				}
			}
			let i = e.children;
			for (let e = 0, a = i.length; e < a; e++) _t(i[e], t, n, r);
		}
		function yt(e, t, n, r) {
			let { opaque: i, transmissive: a, transparent: o } = e;
			x.setupLightsView(n), we === !0 && We.setGlobalState(T.clippingPlanes, n), r && R.viewport(F.copy(r)), i.length > 0 && xt(i, t, n), a.length > 0 && xt(a, t, n), o.length > 0 && xt(o, t, n), R.buffers.depth.setTest(!0), R.buffers.depth.setMask(!0), R.buffers.color.setMask(!0), R.setPolygonOffset(!1);
		}
		function bt(e, t, n, r) {
			if ((n.isScene === !0 ? n.overrideMaterial : null) !== null) return;
			if (x.state.transmissionRenderTarget[r.id] === void 0) {
				let e = Ne.has("EXT_color_buffer_half_float") || Ne.has("EXT_color_buffer_float");
				x.state.transmissionRenderTarget[r.id] = new pn(1, 1, {
					generateMipmaps: !0,
					type: e ? re : j,
					minFilter: A,
					samples: Math.max(4, Pe.samples),
					stencilBuffer: i,
					resolveDepthBuffer: !1,
					resolveStencilBuffer: !1,
					storeMultisampledDepthBuffer: !1,
					storeMultisampledStencilBuffer: !1,
					colorSpace: q.workingColorSpace
				});
			}
			let a = x.state.transmissionRenderTarget[r.id], o = r.viewport || F;
			a.setSize(o.z * T.transmissionResolutionScale, o.w * T.transmissionResolutionScale);
			let s = T.getRenderTarget(), c = T.getActiveCubeFace(), l = T.getActiveMipmapLevel();
			T.setRenderTarget(a), T.getClearColor(ue), de = T.getClearAlpha(), de < 1 && T.setClearColor(16777215, .5), T.clear(), Ae && Ke.render(n);
			let u = T.toneMapping;
			T.toneMapping = 0;
			let d = r.viewport;
			if (r.viewport !== void 0 && (r.viewport = void 0), x.setupLightsView(r), we === !0 && We.setGlobalState(T.clippingPlanes, r), xt(e, n, r), B.updateMultisampleRenderTarget(a), B.updateRenderTargetMipmap(a), Ne.has("WEBGL_multisampled_render_to_texture") === !1) {
				let e = !1;
				for (let i = 0, a = t.length; i < a; i++) {
					let { object: a, geometry: o, material: s, group: c } = t[i];
					if (s.side === 2 && a.layers.test(r.layers)) {
						let t = s.side;
						s.side = 1, s.needsUpdate = !0, St(a, n, r, o, s, c), s.side = t, s.needsUpdate = !0, e = !0;
					}
				}
				e === !0 && (B.updateMultisampleRenderTarget(a), B.updateRenderTargetMipmap(a));
			}
			T.setRenderTarget(s, c, l), T.setClearColor(ue, de), d !== void 0 && (r.viewport = d), T.toneMapping = u;
		}
		function xt(e, t, n) {
			let r = t.isScene === !0 ? t.overrideMaterial : null;
			for (let i = 0, a = e.length; i < a; i++) {
				let a = e[i], { object: o, geometry: s, group: c } = a, l = a.material;
				l.allowOverride === !0 && r !== null && (l = r), o.layers.test(n.layers) && St(o, t, n, s, l, c);
			}
		}
		function St(e, t, n, r, i, a) {
			D !== null && i.isNodeMaterial && D.setObject(e, i), e.onBeforeRender(T, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(T, t, n, r, e, a), i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1 ? (i.side = 1, i.needsUpdate = !0, T.renderBufferDirect(n, t, r, i, e, a), i.side = 0, i.needsUpdate = !0, T.renderBufferDirect(n, t, r, i, e, a), i.side = 2) : T.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(T, t, n, r, i, a);
		}
		function Ct(e, t, n) {
			t.isScene !== !0 && (t = ke);
			let r = z.get(e), i = x.state.lights, a = x.state.shadowsArray, o = i.state.version, s = Be.getParameters(e, i.state, a, t, n, x.state.lightProbeGridArray), c = Be.getProgramCacheKey(s), l = r.programs;
			r.environment = e.isMeshStandardMaterial || e.isMeshLambertMaterial || e.isMeshPhongMaterial ? t.environment : null, r.fog = t.fog;
			let u = e.isMeshStandardMaterial || e.isMeshLambertMaterial && !e.envMap || e.isMeshPhongMaterial && !e.envMap;
			r.envMap = Ie.get(e.envMap || r.environment, u), r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation, l === void 0 && (e.addEventListener("dispose", at), l = /* @__PURE__ */ new Map(), r.programs = l);
			let d = l.get(c);
			if (d !== void 0) {
				if (r.currentProgram === d && r.lightsStateVersion === o) return Tt(e, s), d;
			} else s.uniforms = Be.getUniforms(e), D !== null && e.isNodeMaterial && D.build(e, n, s), e.onBeforeCompile(s, T), d = Be.acquireProgram(s, c), l.set(c, d), r.uniforms = s.uniforms;
			let f = r.uniforms;
			return (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (f.clippingPlanes = We.uniform), Tt(e, s), r.needsLights = Ot(e), r.lightsStateVersion = o, r.needsLights && (f.ambientLightColor.value = i.state.ambient, f.lightProbe.value = i.state.probe, f.sunLights.value = i.state.sun, f.sunLightShadows.value = i.state.sunShadow, f.directionalLights.value = i.state.directional, f.directionalLightShadows.value = i.state.directionalShadow, f.spotLights.value = i.state.spot, f.spotLightShadows.value = i.state.spotShadow, f.rectAreaLights.value = i.state.rectArea, f.ltc_1.value = i.state.rectAreaLTC1, f.ltc_2.value = i.state.rectAreaLTC2, f.pointLights.value = i.state.point, f.pointLightShadows.value = i.state.pointShadow, f.hemisphereLights.value = i.state.hemi, f.sunShadowMatrix.value = i.state.sunShadowMatrix, f.sunShadowCascade.value = i.state.sunShadowCascade, f.directionalShadowMatrix.value = i.state.directionalShadowMatrix, f.spotLightMatrix.value = i.state.spotLightMatrix, f.spotLightMap.value = i.state.spotLightMap, f.pointShadowMatrix.value = i.state.pointShadowMatrix), r.lightProbeGrid = x.state.lightProbeGridArray.length > 0, r.currentProgram = d, r.uniformsList = null, d;
		}
		function wt(e) {
			if (e.uniformsList === null) {
				let t = e.currentProgram.getUniforms();
				e.uniformsList = Pl.seqWithValue(t.seq, e.uniforms);
			}
			return e.uniformsList;
		}
		function Tt(e, t) {
			let n = z.get(e);
			n.outputColorSpace = t.outputColorSpace, n.batching = t.batching, n.batchingColor = t.batchingColor, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.instancingMorph = t.instancingMorph, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping;
		}
		function U(e, t) {
			if (e.length === 0) return null;
			if (e.length === 1) return e[0].texture === null ? null : e[0];
			y.setFromMatrixPosition(t.matrixWorld);
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t];
				if (n.texture !== null && n.boundingBox.containsPoint(y)) return n;
			}
			return null;
		}
		function Et(e, t, n, r, i) {
			t.isScene !== !0 && (t = ke), B.resetTextureUnits();
			let a = t.fog, o = r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial ? t.environment : null, s = P === null ? T.outputColorSpace : P.isXRRenderTarget === !0 ? P.texture.colorSpace : q.workingColorSpace, c = r.isMeshStandardMaterial || r.isMeshLambertMaterial && !r.envMap || r.isMeshPhongMaterial && !r.envMap, l = Ie.get(r.envMap || o, c), u = r.vertexColors === !0 && !!n.attributes.color && n.attributes.color.itemSize === 4, d = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0), f = !!n.morphAttributes.position, p = !!n.morphAttributes.normal, m = !!n.morphAttributes.color, h = 0;
			r.toneMapped && (P === null || P.isXRRenderTarget === !0) && (h = T.toneMapping);
			let g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, _ = g === void 0 ? 0 : g.length, v = z.get(r), y = x.state.lights;
			if (we === !0 && (Te === !0 || e !== ce)) {
				let t = e === ce && r.id === se;
				We.setState(r, e, t);
			}
			let b = !1;
			r.version === v.__version ? v.needsLights && v.lightsStateVersion !== y.state.version ? b = !0 : v.outputColorSpace === s ? i.isBatchedMesh && v.batching === !1 || !i.isBatchedMesh && v.batching === !0 || i.isBatchedMesh && v.batchingColor === !0 && i._colorsTexture === null || i.isBatchedMesh && v.batchingColor === !1 && i._colorsTexture !== null || i.isInstancedMesh && v.instancing === !1 || !i.isInstancedMesh && v.instancing === !0 || i.isSkinnedMesh && v.skinning === !1 || !i.isSkinnedMesh && v.skinning === !0 || i.isInstancedMesh && v.instancingColor === !0 && i.instanceColor === null || i.isInstancedMesh && v.instancingColor === !1 && i.instanceColor !== null || i.isInstancedMesh && v.instancingMorph === !0 && i.morphTexture === null || i.isInstancedMesh && v.instancingMorph === !1 && i.morphTexture !== null ? b = !0 : v.envMap === l ? r.fog === !0 && v.fog !== a || v.numClippingPlanes !== void 0 && (v.numClippingPlanes !== We.numPlanes || v.numIntersection !== We.numIntersection) ? b = !0 : v.vertexAlphas === u && v.vertexTangents === d && v.morphTargets === f && v.morphNormals === p && v.morphColors === m && v.toneMapping === h && v.morphTargetsCount === _ ? !!v.lightProbeGrid != x.state.lightProbeGridArray.length > 0 && (b = !0) : b = !0 : b = !0 : b = !0 : (b = !0, v.__version = r.version);
			let S = v.currentProgram;
			b === !0 && (S = Ct(r, t, i), D && r.isNodeMaterial && D.onUpdateProgram(r, S, v));
			let C = !1, w = !1, E = !1, O = S.getUniforms(), k = v.uniforms;
			if (R.useProgram(S.program) && (C = !0, w = !0, E = !0), r.id !== se && (se = r.id, w = !0), v.needsLights) {
				let e = U(x.state.lightProbeGridArray, i);
				v.lightProbeGrid !== e && (v.lightProbeGrid = e, w = !0);
			}
			if (C || ce !== e) {
				R.buffers.depth.getReversed() && e.reversedDepth !== !0 && (e._reversedDepth = !0, e.updateProjectionMatrix()), O.setValue(L, "projectionMatrix", e.projectionMatrix), O.setValue(L, "viewMatrix", e.matrixWorldInverse);
				let t = O.map.cameraPosition;
				t !== void 0 && t.setValue(L, De.setFromMatrixPosition(e.matrixWorld)), Pe.logarithmicDepthBuffer && O.setValue(L, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && O.setValue(L, "isOrthographic", e.isOrthographicCamera === !0), ce !== e && (ce = e, w = !0, E = !0);
			}
			if (v.needsLights && (y.state.sunShadowMap.length > 0 && O.setValue(L, "sunShadowMap", y.state.sunShadowMap, B), y.state.directionalShadowMap.length > 0 && O.setValue(L, "directionalShadowMap", y.state.directionalShadowMap, B), y.state.spotShadowMap.length > 0 && O.setValue(L, "spotShadowMap", y.state.spotShadowMap, B), y.state.pointShadowMap.length > 0 && O.setValue(L, "pointShadowMap", y.state.pointShadowMap, B)), i.isSkinnedMesh) {
				O.setOptional(L, i, "bindMatrix"), O.setOptional(L, i, "bindMatrixInverse");
				let e = i.skeleton;
				e && (e.boneTexture === null && e.computeBoneTexture(), O.setValue(L, "boneTexture", e.boneTexture, B));
			}
			i.isBatchedMesh && (O.setOptional(L, i, "batchingTexture"), O.setValue(L, "batchingTexture", i._matricesTexture, B), O.setOptional(L, i, "batchingIdTexture"), O.setValue(L, "batchingIdTexture", i._indirectTexture, B), O.setOptional(L, i, "batchingColorTexture"), i._colorsTexture !== null && O.setValue(L, "batchingColorTexture", i._colorsTexture, B));
			let A = n.morphAttributes;
			if ((A.position !== void 0 || A.normal !== void 0 || A.color !== void 0) && qe.update(i, n, S), (w || v.receiveShadow !== i.receiveShadow) && (v.receiveShadow = i.receiveShadow, O.setValue(L, "receiveShadow", i.receiveShadow)), (r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial) && r.envMap === null && t.environment !== null && (k.envMapIntensity.value = t.environmentIntensity), k.dfgLUT !== void 0 && (k.dfgLUT.value = td()), w) {
				if (O.setValue(L, "toneMappingExposure", T.toneMappingExposure), v.needsLights && Dt(k, E), a && r.fog === !0 && Ve.refreshFogUniforms(k, a), Ve.refreshMaterialUniforms(k, r, _e, me, x.state.transmissionRenderTarget[e.id]), v.needsLights && v.lightProbeGrid) {
					let e = v.lightProbeGrid;
					k.probesSH.value = e.texture, k.probesMin.value.copy(e.boundingBox.min), k.probesMax.value.copy(e.boundingBox.max), k.probesResolution.value.copy(e.resolution);
				}
				Pl.upload(L, wt(v), k, B);
			}
			if (r.isShaderMaterial && r.uniformsNeedUpdate === !0 && (Pl.upload(L, wt(v), k, B), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && O.setValue(L, "center", i.center), O.setValue(L, "modelViewMatrix", i.modelViewMatrix), O.setValue(L, "normalMatrix", i.normalMatrix), O.setValue(L, "modelMatrix", i.matrixWorld), r.uniformsGroups !== void 0) {
				let e = r.uniformsGroups;
				for (let t = 0, n = e.length; t < n; t++) {
					let n = e[t];
					Qe.update(n, S), Qe.bind(n, S);
				}
			}
			return S;
		}
		function Dt(e, t) {
			e.ambientLightColor.needsUpdate = t, e.lightProbe.needsUpdate = t, e.sunLights.needsUpdate = t, e.sunLightShadows.needsUpdate = t, e.directionalLights.needsUpdate = t, e.directionalLightShadows.needsUpdate = t, e.pointLights.needsUpdate = t, e.pointLightShadows.needsUpdate = t, e.spotLights.needsUpdate = t, e.spotLightShadows.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t;
		}
		function Ot(e) {
			return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === !0;
		}
		this.getActiveCubeFace = function() {
			return N;
		}, this.getActiveMipmapLevel = function() {
			return te;
		}, this.getRenderTarget = function() {
			return P;
		}, this.setRenderTargetTextures = function(e, t, n) {
			let r = z.get(e);
			r.__autoAllocateDepthBuffer = e.resolveDepthBuffer === !1, r.__autoAllocateDepthBuffer === !1 && (r.__useRenderToTexture = !1), z.get(e.texture).__webglTexture = t, z.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? void 0 : n, r.__hasExternalTextures = !0;
		}, this.setRenderTargetFramebuffer = function(e, t) {
			let n = z.get(e);
			n.__webglFramebuffer = t, n.__useDefaultFramebuffer = t === void 0;
		}, this.setRenderTarget = function(e, t = 0, n = 0) {
			P = e, N = t, te = n;
			let r = null, i = !1, a = !1;
			if (e) {
				let o = z.get(e);
				if (o.__useDefaultFramebuffer !== void 0) {
					R.bindFramebuffer(L.FRAMEBUFFER, o.__webglFramebuffer), F.copy(e.viewport), I.copy(e.scissor), le = e.scissorTest, R.viewport(F), R.scissor(I), R.setScissorTest(le), se = -1;
					return;
				}
				if (o.__webglFramebuffer === void 0) B.setupRenderTarget(e);
				else if (o.__hasExternalTextures) B.rebindTextures(e, z.get(e.texture).__webglTexture, z.get(e.depthTexture).__webglTexture);
				else if (e.depthBuffer) {
					let t = e.depthTexture;
					if (o.__boundDepthTexture !== t) {
						if (t !== null && z.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
						B.setupDepthRenderbuffer(e);
					}
				}
				let s = e.texture;
				(s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) && (a = !0);
				let c = z.get(e).__webglFramebuffer;
				e.isWebGLCubeRenderTarget ? (r = Array.isArray(c[t]) ? c[t][n] : c[t], i = !0) : r = e.samples > 0 && B.useMultisampledRTT(e) === !1 ? z.get(e).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c, F.copy(e.viewport), I.copy(e.scissor), le = e.scissorTest;
			} else F.copy(be).multiplyScalar(_e).floor(), I.copy(xe).multiplyScalar(_e).floor(), le = Se;
			if (n !== 0 && (r = O), R.bindFramebuffer(L.FRAMEBUFFER, r) && R.drawBuffers(e, r), R.viewport(F), R.scissor(I), R.setScissorTest(le), i) {
				let r = z.get(e.texture);
				L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
			} else if (a) {
				let r = t;
				for (let t = 0; t < e.textures.length; t++) {
					let i = z.get(e.textures[t]);
					L.framebufferTextureLayer(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0 + t, i.__webglTexture, n, r);
				}
			} else if (e !== null && n !== 0) {
				let t = z.get(e.texture);
				L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, t.__webglTexture, n);
			}
			se = -1;
		};
		function kt(e) {
			let t = z.get(e);
			return (t.__readFormat !== e.format || t.__readType !== e.type) && (t.__readFormat = e.format, t.__readType = e.type, t.__formatReadable = Pe.textureFormatReadable(e.format), t.__typeReadable = Pe.textureTypeReadable(e.type)), t;
		}
		this.readRenderTargetPixels = function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) {
				H("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
				return;
			}
			let c = z.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) {
				R.bindFramebuffer(L.FRAMEBUFFER, c);
				try {
					let o = e.textures[s], c = o.format, l = o.type;
					e.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + s);
					let u = kt(o);
					if (u.__formatReadable === !1) {
						H("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
						return;
					}
					if (u.__typeReadable === !1) {
						H("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
						return;
					}
					t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && L.readPixels(t, n, r, i, Xe.convert(c), Xe.convert(l), a);
				} finally {
					let e = P === null ? null : z.get(P).__webglFramebuffer;
					R.bindFramebuffer(L.FRAMEBUFFER, e);
				}
			}
		}, this.readRenderTargetPixelsAsync = async function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let c = z.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) {
				if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
					R.bindFramebuffer(L.FRAMEBUFFER, c);
					let o = e.textures[s], l = o.format, u = o.type;
					e.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + s);
					let d = kt(o);
					if (d.__formatReadable === !1) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
					if (d.__typeReadable === !1) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
					let f = L.createBuffer();
					L.bindBuffer(L.PIXEL_PACK_BUFFER, f), L.bufferData(L.PIXEL_PACK_BUFFER, a.byteLength, L.STREAM_READ), L.readPixels(t, n, r, i, Xe.convert(l), Xe.convert(u), 0), L.bindBuffer(L.PIXEL_PACK_BUFFER, null);
					let p = P === null ? null : z.get(P).__webglFramebuffer;
					R.bindFramebuffer(L.FRAMEBUFFER, p);
					let m = L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE, 0);
					return L.flush(), await vt(L, m, 4), L.bindBuffer(L.PIXEL_PACK_BUFFER, f), L.getBufferSubData(L.PIXEL_PACK_BUFFER, 0, a), L.bindBuffer(L.PIXEL_PACK_BUFFER, null), L.deleteBuffer(f), L.deleteSync(m), a;
				}
				throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
			}
		}, this.copyFramebufferToTexture = function(e, t = null, n = 0) {
			let r = 2 ** -n, i = Math.floor(e.image.width * r), a = Math.floor(e.image.height * r), o = t === null ? 0 : t.x, s = t === null ? 0 : t.y;
			B.setTexture2D(e, 0), L.copyTexSubImage2D(L.TEXTURE_2D, n, 0, 0, o, s, i, a), R.unbindTexture();
		}, this.copyTextureToTexture = function(e, t, n = null, r = null, i = 0, a = 0) {
			let o, s, c, l, u, d, f, p, m, h = e.isCompressedTexture ? e.mipmaps[a] : e.image;
			if (n !== null) o = n.max.x - n.min.x, s = n.max.y - n.min.y, c = n.isBox3 ? n.max.z - n.min.z : 1, l = n.min.x, u = n.min.y, d = n.isBox3 ? n.min.z : 0;
			else {
				let t = 2 ** -i;
				o = Math.floor(h.width * t), s = Math.floor(h.height * t), c = e.isDataArrayTexture ? h.depth : e.isData3DTexture ? Math.floor(h.depth * t) : 1, l = 0, u = 0, d = 0;
			}
			r === null ? (f = 0, p = 0, m = 0) : (f = r.x, p = r.y, m = r.z);
			let g = Xe.convert(t.format), _ = Xe.convert(t.type), v;
			t.isData3DTexture ? (B.setTexture3D(t, 0), v = L.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? (B.setTexture2DArray(t, 0), v = L.TEXTURE_2D_ARRAY) : (B.setTexture2D(t, 0), v = L.TEXTURE_2D), R.activeTexture(L.TEXTURE0), R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, t.flipY), R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), R.pixelStorei(L.UNPACK_ALIGNMENT, t.unpackAlignment);
			let y = R.getParameter(L.UNPACK_ROW_LENGTH), b = R.getParameter(L.UNPACK_IMAGE_HEIGHT), x = R.getParameter(L.UNPACK_SKIP_PIXELS), S = R.getParameter(L.UNPACK_SKIP_ROWS), C = R.getParameter(L.UNPACK_SKIP_IMAGES);
			R.pixelStorei(L.UNPACK_ROW_LENGTH, h.width), R.pixelStorei(L.UNPACK_IMAGE_HEIGHT, h.height), R.pixelStorei(L.UNPACK_SKIP_PIXELS, l), R.pixelStorei(L.UNPACK_SKIP_ROWS, u), R.pixelStorei(L.UNPACK_SKIP_IMAGES, d);
			let w = e.isDataArrayTexture || e.isData3DTexture, T = t.isDataArrayTexture || t.isData3DTexture;
			if (e.isDepthTexture) {
				let n = z.get(e), r = z.get(t), h = z.get(n.__renderTarget), g = z.get(r.__renderTarget);
				R.bindFramebuffer(L.READ_FRAMEBUFFER, h.__webglFramebuffer), R.bindFramebuffer(L.DRAW_FRAMEBUFFER, g.__webglFramebuffer);
				for (let n = 0; n < c; n++) w && (L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, z.get(e).__webglTexture, i, d + n), L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, z.get(t).__webglTexture, a, m + n)), L.blitFramebuffer(l, u, o, s, f, p, o, s, L.DEPTH_BUFFER_BIT, L.NEAREST);
				R.bindFramebuffer(L.READ_FRAMEBUFFER, null), R.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
			} else if (i !== 0 || e.isRenderTargetTexture || z.has(e)) {
				let n = z.get(e), r = z.get(t);
				R.bindFramebuffer(L.READ_FRAMEBUFFER, k), R.bindFramebuffer(L.DRAW_FRAMEBUFFER, M);
				for (let e = 0; e < c; e++) w ? L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, n.__webglTexture, i, d + e) : L.framebufferTexture2D(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, n.__webglTexture, i), T ? L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, r.__webglTexture, a, m + e) : L.framebufferTexture2D(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, r.__webglTexture, a), i === 0 ? T ? L.copyTexSubImage3D(v, a, f, p, m + e, l, u, o, s) : L.copyTexSubImage2D(v, a, f, p, l, u, o, s) : L.blitFramebuffer(l, u, o, s, f, p, o, s, L.COLOR_BUFFER_BIT, L.NEAREST);
				R.bindFramebuffer(L.READ_FRAMEBUFFER, null), R.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
			} else T ? e.isDataTexture || e.isData3DTexture ? L.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h.data) : t.isCompressedArrayTexture ? L.compressedTexSubImage3D(v, a, f, p, m, o, s, c, g, h.data) : L.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h) : e.isDataTexture ? L.texSubImage2D(L.TEXTURE_2D, a, f, p, o, s, g, _, h.data) : e.isCompressedTexture ? L.compressedTexSubImage2D(L.TEXTURE_2D, a, f, p, h.width, h.height, g, h.data) : L.texSubImage2D(L.TEXTURE_2D, a, f, p, o, s, g, _, h);
			R.pixelStorei(L.UNPACK_ROW_LENGTH, y), R.pixelStorei(L.UNPACK_IMAGE_HEIGHT, b), R.pixelStorei(L.UNPACK_SKIP_PIXELS, x), R.pixelStorei(L.UNPACK_SKIP_ROWS, S), R.pixelStorei(L.UNPACK_SKIP_IMAGES, C), a === 0 && t.generateMipmaps && L.generateMipmap(v), R.unbindTexture();
		}, this.initRenderTarget = function(e) {
			z.get(e).__webglFramebuffer === void 0 && B.setupRenderTarget(e);
		}, this.initTexture = function(e) {
			e.isCubeTexture ? B.setTextureCube(e, 0) : e.isData3DTexture ? B.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? B.setTexture2DArray(e, 0) : B.setTexture2D(e, 0), R.unbindTexture();
		}, this.resetState = function() {
			N = 0, te = 0, P = null, R.reset(), Ze.reset();
		}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	get coordinateSystem() {
		return lt;
	}
	get outputColorSpace() {
		return this._outputColorSpace;
	}
	set outputColorSpace(e) {
		this._outputColorSpace = e;
		let t = this.getContext();
		t.drawingBufferColorSpace = q._getDrawingBufferColorSpace(e), t.unpackColorSpace = q._getUnpackColorSpace();
	}
}, rd = { type: "change" }, id = { type: "start" }, ad = { type: "end" }, od = new xi(), sd = new Qr(), cd = Math.cos(70 * Kt.DEG2RAD), ld = new G(), ud = 2 * Math.PI, dd = {
	NONE: -1,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2,
	TOUCH_ROTATE: 3,
	TOUCH_PAN: 4,
	TOUCH_DOLLY_PAN: 5,
	TOUCH_DOLLY_ROTATE: 6
}, fd = 1e-6, pd = class extends Ls {
	constructor(e, t = null) {
		super(e, t), this.state = dd.NONE, this.target = new G(), this.cursor = new G(), this.minDistance = 0, this.maxDistance = Infinity, this.minZoom = 0, this.maxZoom = Infinity, this.minTargetRadius = 0, this.maxTargetRadius = Infinity, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -Infinity, this.maxAzimuthAngle = Infinity, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
			LEFT: "ArrowLeft",
			UP: "ArrowUp",
			RIGHT: "ArrowRight",
			BOTTOM: "ArrowDown"
		}, this.mouseButtons = {
			LEFT: b.ROTATE,
			MIDDLE: b.DOLLY,
			RIGHT: b.PAN
		}, this.touches = {
			ONE: x.ROTATE,
			TWO: x.DOLLY_PAN
		}, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new G(), this._lastQuaternion = new qt(), this._lastTargetPosition = new G(), this._quat = new qt().setFromUnitVectors(e.up, new G(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Is(), this._sphericalDelta = new Is(), this._scale = 1, this._panOffset = new G(), this._rotateStart = new W(), this._rotateEnd = new W(), this._rotateDelta = new W(), this._panStart = new W(), this._panEnd = new W(), this._panDelta = new W(), this._dollyStart = new W(), this._dollyEnd = new W(), this._dollyDelta = new W(), this._dollyDirection = new G(), this._mouse = new W(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = hd.bind(this), this._onPointerDown = md.bind(this), this._onPointerUp = gd.bind(this), this._onContextMenu = Cd.bind(this), this._onMouseWheel = yd.bind(this), this._onKeyDown = bd.bind(this), this._onTouchStart = xd.bind(this), this._onTouchMove = Sd.bind(this), this._onMouseDown = _d.bind(this), this._onMouseMove = vd.bind(this), this._interceptControlDown = wd.bind(this), this._interceptControlUp = Td.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
	}
	set cursorStyle(e) {
		this._cursorStyle = e, e === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto";
	}
	get cursorStyle() {
		return this._cursorStyle;
	}
	connect(e) {
		super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
			passive: !0,
			capture: !0
		}), this.domElement.style.touchAction = "none";
	}
	disconnect() {
		this.state = dd.NONE, this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents();
		let e = this.domElement.getRootNode();
		e.removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), e.removeEventListener("keyup", this._interceptControlUp, { capture: !0 }), this._controlActive = !1, this._pointers.length = 0, this._pointerPositions = {}, this.domElement.style.touchAction = "", this.domElement.style.cursor = "auto";
	}
	dispose() {
		this.disconnect();
	}
	getPolarAngle() {
		return this._spherical.phi;
	}
	getAzimuthalAngle() {
		return this._spherical.theta;
	}
	getDistance() {
		return this.object.position.distanceTo(this.target);
	}
	listenToKeyEvents(e) {
		e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
	}
	stopListenToKeyEvents() {
		this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
	}
	saveState() {
		this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
	}
	reset() {
		this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(rd), this.update(), this.state = dd.NONE;
	}
	pan(e, t) {
		this._pan(e, t), this.update();
	}
	dollyIn(e) {
		this._dollyIn(e), this.update();
	}
	dollyOut(e) {
		this._dollyOut(e), this.update();
	}
	rotateLeft(e) {
		this._rotateLeft(e), this.update();
	}
	rotateUp(e) {
		this._rotateUp(e), this.update();
	}
	update(e = null) {
		let t = this.object.position;
		ld.copy(t).sub(this.target), ld.applyQuaternion(this._quat), this._spherical.setFromVector3(ld), this.autoRotate && this.state === dd.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
		let n = this.minAzimuthAngle, r = this.maxAzimuthAngle;
		isFinite(n) && isFinite(r) && (n < -Math.PI ? n += ud : n > Math.PI && (n -= ud), r < -Math.PI ? r += ud : r > Math.PI && (r -= ud), n <= r ? this._spherical.theta = Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
		let i = !1;
		if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
		else {
			let e = this._spherical.radius;
			this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), i = e != this._spherical.radius;
		}
		if (ld.setFromSpherical(this._spherical), ld.applyQuaternion(this._quatInverse), t.copy(this.target).add(ld), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
			let e = null;
			if (this.object.isPerspectiveCamera) {
				let t = ld.length();
				e = this._clampDistance(t * this._scale);
				let n = t - e;
				this.object.position.addScaledVector(this._dollyDirection, n), this.object.updateMatrixWorld(), i = !!n;
			} else if (this.object.isOrthographicCamera) {
				let t = new G(this._mouse.x, this._mouse.y, 0);
				t.unproject(this.object);
				let n = this.object.zoom;
				this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), i = n !== this.object.zoom;
				let r = new G(this._mouse.x, this._mouse.y, 0);
				r.unproject(this.object), this.object.position.sub(r).add(t), this.object.updateMatrixWorld(), e = ld.length();
			} else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
			e !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position) : (od.origin.copy(this.object.position), od.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(od.direction)) < cd ? this.object.lookAt(this.target) : (sd.setFromNormalAndCoplanarPoint(this.object.up, this.target), od.intersectPlane(sd, this.target))));
		} else if (this.object.isOrthographicCamera) {
			let e = this.object.zoom;
			this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), e !== this.object.zoom && (this.object.updateProjectionMatrix(), i = !0);
		}
		return this._scale = 1, this._performCursorZoom = !1, i || this._lastPosition.distanceToSquared(this.object.position) > fd || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > fd || this._lastTargetPosition.distanceToSquared(this.target) > fd ? (this.dispatchEvent(rd), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
	}
	_getAutoRotationAngle(e) {
		return e === null ? ud / 60 / 60 * this.autoRotateSpeed : ud / 60 * this.autoRotateSpeed * e;
	}
	_getZoomScale(e) {
		let t = Math.abs(e * .01);
		return .95 ** (this.zoomSpeed * t);
	}
	_rotateLeft(e) {
		this._sphericalDelta.theta -= e;
	}
	_rotateUp(e) {
		this._sphericalDelta.phi -= e;
	}
	_panLeft(e, t) {
		ld.setFromMatrixColumn(t, 0), ld.multiplyScalar(-e), this._panOffset.add(ld);
	}
	_panUp(e, t) {
		this.screenSpacePanning === !0 ? ld.setFromMatrixColumn(t, 1) : (ld.setFromMatrixColumn(t, 0), ld.crossVectors(this.object.up, ld)), ld.multiplyScalar(e), this._panOffset.add(ld);
	}
	_pan(e, t) {
		let n = this.domElement;
		if (this.object.isPerspectiveCamera) {
			let r = this.object.position;
			ld.copy(r).sub(this.target);
			let i = ld.length();
			i *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * i / n.clientHeight, this.object.matrix), this._panUp(2 * t * i / n.clientHeight, this.object.matrix);
		} else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
	}
	_dollyOut(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_dollyIn(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_updateZoomParameters(e, t) {
		if (!this.zoomToCursor) return;
		this._performCursorZoom = !0;
		let n = this.domElement.getBoundingClientRect(), r = e - n.left, i = t - n.top, a = n.width, o = n.height;
		this._mouse.x = r / a * 2 - 1, this._mouse.y = -(i / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
	}
	_clampDistance(e) {
		return Math.max(this.minDistance, Math.min(this.maxDistance, e));
	}
	_handleMouseDownRotate(e) {
		this._rotateStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownDolly(e) {
		this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownPan(e) {
		this._panStart.set(e.clientX, e.clientY);
	}
	_handleMouseMoveRotate(e) {
		this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft(ud * this._rotateDelta.x / t.clientHeight), this._rotateUp(ud * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
	}
	_handleMouseMoveDolly(e) {
		this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
	}
	_handleMouseMovePan(e) {
		this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
	}
	_handleMouseWheel(e) {
		this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
	}
	_handleKeyDown(e) {
		let t = !1;
		switch (e.code) {
			case this.keys.UP:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(ud * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = !0;
				break;
			case this.keys.BOTTOM:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-ud * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = !0;
				break;
			case this.keys.LEFT:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(ud * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = !0;
				break;
			case this.keys.RIGHT: e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-ud * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = !0;
		}
		t && (e.preventDefault(), this.update());
	}
	_handleTouchStartRotate(e) {
		if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateStart.set(n, r);
		}
	}
	_handleTouchStartPan(e) {
		if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panStart.set(n, r);
		}
	}
	_handleTouchStartDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyStart.set(0, i);
	}
	_handleTouchStartDollyPan(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
	}
	_handleTouchStartDollyRotate(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
	}
	_handleTouchMoveRotate(e) {
		if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateEnd.set(n, r);
		}
		this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft(ud * this._rotateDelta.x / t.clientHeight), this._rotateUp(ud * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
	}
	_handleTouchMovePan(e) {
		if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panEnd.set(n, r);
		}
		this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
	}
	_handleTouchMoveDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyEnd.set(0, i), this._dollyDelta.set(0, (this._dollyEnd.y / this._dollyStart.y) ** +this.zoomSpeed), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
		let a = (e.pageX + t.x) * .5, o = (e.pageY + t.y) * .5;
		this._updateZoomParameters(a, o);
	}
	_handleTouchMoveDollyPan(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
	}
	_handleTouchMoveDollyRotate(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
	}
	_addPointer(e) {
		this._pointers.push(e.pointerId);
	}
	_removePointer(e) {
		delete this._pointerPositions[e.pointerId];
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
			this._pointers.splice(t, 1);
			return;
		}
	}
	_isTrackingPointer(e) {
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return !0;
		return !1;
	}
	_trackPointer(e) {
		let t = this._pointerPositions[e.pointerId];
		t === void 0 && (t = new W(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
	}
	_getSecondPointerPosition(e) {
		let t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
		return this._pointerPositions[t];
	}
	_customWheelEvent(e) {
		let t = e.deltaMode, n = {
			clientX: e.clientX,
			clientY: e.clientY,
			deltaY: e.deltaY
		};
		switch (t) {
			case 1:
				n.deltaY *= 16;
				break;
			case 2: n.deltaY *= 100;
		}
		return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
	}
};
function md(e) {
	this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(e) && (this._addPointer(e), e.pointerType === "touch" ? this._onTouchStart(e) : this._onMouseDown(e), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function hd(e) {
	this.enabled !== !1 && (e.pointerType === "touch" ? this._onTouchMove(e) : this._onMouseMove(e));
}
function gd(e) {
	switch (this._removePointer(e), this._pointers.length) {
		case 0:
			this.domElement.releasePointerCapture(e.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(ad), this.state = dd.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
			break;
		case 1:
			let t = this._pointers[0], n = this._pointerPositions[t];
			this._onTouchStart({
				pointerId: t,
				pageX: n.x,
				pageY: n.y
			});
	}
}
function _d(e) {
	let t;
	switch (e.button) {
		case 0:
			t = this.mouseButtons.LEFT;
			break;
		case 1:
			t = this.mouseButtons.MIDDLE;
			break;
		case 2:
			t = this.mouseButtons.RIGHT;
			break;
		default: t = -1;
	}
	switch (t) {
		case b.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseDownDolly(e), this.state = dd.DOLLY;
			break;
		case b.ROTATE:
			if (e.ctrlKey || e.metaKey || e.shiftKey) {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(e), this.state = dd.PAN;
			} else {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(e), this.state = dd.ROTATE;
			}
			break;
		case b.PAN:
			if (e.ctrlKey || e.metaKey || e.shiftKey) {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(e), this.state = dd.ROTATE;
			} else {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(e), this.state = dd.PAN;
			}
			break;
		default: this.state = dd.NONE;
	}
	this.state !== dd.NONE && this.dispatchEvent(id);
}
function vd(e) {
	switch (this.state) {
		case dd.ROTATE:
			if (this.enableRotate === !1) return;
			this._handleMouseMoveRotate(e);
			break;
		case dd.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseMoveDolly(e);
			break;
		case dd.PAN:
			if (this.enablePan === !1) return;
			this._handleMouseMovePan(e);
	}
}
function yd(e) {
	this.enabled !== !1 && this.enableZoom !== !1 && this.state === dd.NONE && (e.preventDefault(), this.dispatchEvent(id), this._handleMouseWheel(this._customWheelEvent(e)), this.dispatchEvent(ad));
}
function bd(e) {
	this.enabled !== !1 && this._handleKeyDown(e);
}
function xd(e) {
	switch (this._trackPointer(e), this._pointers.length) {
		case 1:
			switch (this.touches.ONE) {
				case x.ROTATE:
					if (this.enableRotate === !1) return;
					this._handleTouchStartRotate(e), this.state = dd.TOUCH_ROTATE;
					break;
				case x.PAN:
					if (this.enablePan === !1) return;
					this._handleTouchStartPan(e), this.state = dd.TOUCH_PAN;
					break;
				default: this.state = dd.NONE;
			}
			break;
		case 2:
			switch (this.touches.TWO) {
				case x.DOLLY_PAN:
					if (this.enableZoom === !1 && this.enablePan === !1) return;
					this._handleTouchStartDollyPan(e), this.state = dd.TOUCH_DOLLY_PAN;
					break;
				case x.DOLLY_ROTATE:
					if (this.enableZoom === !1 && this.enableRotate === !1) return;
					this._handleTouchStartDollyRotate(e), this.state = dd.TOUCH_DOLLY_ROTATE;
					break;
				default: this.state = dd.NONE;
			}
			break;
		default: this.state = dd.NONE;
	}
	this.state !== dd.NONE && this.dispatchEvent(id);
}
function Sd(e) {
	switch (this._trackPointer(e), this.state) {
		case dd.TOUCH_ROTATE:
			if (this.enableRotate === !1) return;
			this._handleTouchMoveRotate(e), this.update();
			break;
		case dd.TOUCH_PAN:
			if (this.enablePan === !1) return;
			this._handleTouchMovePan(e), this.update();
			break;
		case dd.TOUCH_DOLLY_PAN:
			if (this.enableZoom === !1 && this.enablePan === !1) return;
			this._handleTouchMoveDollyPan(e), this.update();
			break;
		case dd.TOUCH_DOLLY_ROTATE:
			if (this.enableZoom === !1 && this.enableRotate === !1) return;
			this._handleTouchMoveDollyRotate(e), this.update();
			break;
		default: this.state = dd.NONE;
	}
}
function Cd(e) {
	this.enabled !== !1 && e.preventDefault();
}
function wd(e) {
	e.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
function Td(e) {
	e.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
// src/floor3d/models3d.js
var Ed = /* @__PURE__ */ new Map();
function Dd(e, t) {
	if (Ed.has(e)) return Ed.get(e);
	let n = t();
	return n.userData.shared = !0, Ed.set(e, n), n;
}
var Q = {
	metal: (e = 10135220, t = .35, n = .85) => Dd(`metal-${e}-${t}-${n}`, () => new ko({
		color: e,
		roughness: t,
		metalness: n
	})),
	plastic: (e = 6254208, t = .75, n = .05) => Dd(`plastic-${e}-${t}-${n}`, () => new ko({
		color: e,
		roughness: t,
		metalness: n
	})),
	glow: (e = 16771504) => Dd(`glow-${e}`, () => new ko({
		color: e,
		roughness: .4,
		metalness: 0,
		emissive: e,
		emissiveIntensity: 1.6
	})),
	glass: (e = 10475775, t = .35) => Dd(`glass-${e}-${t}`, () => new Ao({
		color: e,
		roughness: .08,
		metalness: 0,
		transmission: .5,
		transparent: !0,
		opacity: t,
		side: 2
	})),
	wood: (e = 11900012) => Dd(`wood-${e}`, () => new ko({
		color: e,
		roughness: .62,
		metalness: .02
	})),
	fabric: (e = 3820127) => Dd(`fabric-${e}`, () => new ko({
		color: e,
		roughness: .95,
		metalness: 0
	}))
}, Od = {
	glow: (e = 16771504) => new ko({
		color: e,
		roughness: .4,
		metalness: 0,
		emissive: e,
		emissiveIntensity: 1.6
	}),
	plastic: (e = 6254208, t = .75, n = .05) => new ko({
		color: e,
		roughness: t,
		metalness: n
	})
};
function $(e, t, n, r, i = 0, a = 0, o = 0) {
	let s = new Pi(new qi(e, t, n), r);
	return s.position.set(i, a, o), s;
}
function kd(e, t, n, r, i = 24) {
	return new Pi(new Ji(e, t, n, i), r);
}
function Ad(e, t, n = 24) {
	return new Pi(new vo(e, n, 16), t);
}
function jd(e, t = !0) {
	if (e.traverse((e) => {
		e.isMesh && (e.castShadow = !0, e.receiveShadow = !0);
	}), t) return e;
}
function Md(e, t, n, r, i = 0, a = 0, o = 0, s = .018) {
	let c = Math.min(s, e / 4, t / 4, n / 4), l = new Ea();
	l.moveTo(-e / 2 + c, -n / 2 + c), l.lineTo(e / 2 - c, -n / 2 + c), l.lineTo(e / 2 - c, n / 2 - c), l.lineTo(-e / 2 + c, n / 2 - c), l.closePath();
	let u = new uo(l, {
		depth: t - 2 * c,
		bevelEnabled: !0,
		bevelSegments: 3,
		steps: 1,
		bevelSize: c,
		bevelThickness: c
	});
	u.translate(0, 0, -t / 2 + c), u.rotateX(-Math.PI / 2);
	let d = new Pi(u, r);
	return d.position.set(i, a, o), d;
}
function Nd(e, t) {
	let n = new fr();
	e.updateMatrixWorld(!0), e.traverseVisible((e) => {
		e.isMesh && e.material.visible !== !1 && n.expandByObject(e, !0);
	});
	let r = n.getSize(new G()), i = n.getCenter(new G()), a = Number.isFinite(t.w) && t.w > 0 ? t.w : r.x, o = Number.isFinite(t.d) && t.d > 0 ? t.d : r.z, s = new J();
	for (let t of [...e.children]) t.isMesh && t.material.visible === !1 ? (e.remove(t), t.geometry.dispose(), t.material.dispose()) : s.add(t);
	return s.scale.set(a / r.x, 1, o / r.z), s.position.set(-i.x * s.scale.x, -n.min.y, -i.z * s.scale.z), e.add(s), Pd(e, a, r.y, o), e;
}
function Pd(e, t, n, r, i = n / 2) {
	let a = new Pi(new qi(t, n, r), new Si({ visible: !1 }));
	return a.position.y = i, e.add(a), e;
}
function Fd(e) {
	let t = new J(), n = kd(.1, .13, .03, Q.metal(2765376, .5, .7));
	n.position.y = .015, t.add(n);
	let r = kd(.015, .02, .42, Q.metal(3753050, .4, .8));
	r.position.y = .23, t.add(r);
	let i = new Pi(new Ji(.14, .09, .16, 24, 1, !0), Od.plastic(3359061));
	i.position.y = .47, t.add(i);
	let a = Ad(.045, Od.glow(16771504));
	a.position.y = .44, t.add(a);
	let o = e.on, s = a.material, c = i.material;
	return jd(t), Pd(t, .28, .62, .28, .31), t.userData.mats = {
		bulb: s,
		shade: c,
		setOn(e) {
			s.emissiveIntensity = e ? 2.4 : 0, s.color.setHex(e ? 16774084 : 9080728), c.emissive.setHex(e ? 16767114 : 0), c.emissiveIntensity = e ? .5 : 0;
		}
	}, t.userData.mats.setOn(o), t;
}
function Id(e) {
	let t = new J(), n = Math.max(.6, e.w || 1), r = Od.glow(16771504), i = $(n, .03, .03, r);
	return i.position.y = .02, t.add(i), jd(t), Pd(t, n, .08, .06, .04), t.userData.mats = {
		bar: r,
		setOn(e) {
			r.emissiveIntensity = e ? 2.2 : 0, r.color.setHex(e ? 16771504 : 7041664);
		}
	}, t.userData.mats.setOn(e.on), t;
}
function Ld(e) {
	let t = new J(), n = $(.05, .1, .1, Q.metal(3753050, .4, .8));
	n.position.y = .05, t.add(n);
	let r = $(.02, .06, .26, Q.metal(3753050, .4, .8));
	r.position.set(0, .13, .08), t.add(r);
	let i = Od.glow(16773320), a = $(.28, .025, .04, i);
	return a.position.set(0, .16, .08), t.add(a), jd(t), Pd(t, .3, .22, .2, .11), t.userData.mats = {
		bar: i,
		setOn(e) {
			i.emissiveIntensity = e ? 2.2 : 0, i.color.setHex(e ? 16773320 : 7041664);
		}
	}, t.userData.mats.setOn(e.on), t;
}
function Rd(e) {
	let t = new J(), n = $(.78, .24, .16, Q.plastic(15857145, .55, .02));
	n.position.y = .12, t.add(n);
	let r = $(.66, .05, .02, Q.plastic(9741240, .6, .1));
	r.position.set(0, .06, .085), t.add(r);
	let i = Od.glow(4906624), a = Ad(.018, i);
	return a.position.set(.3, .16, .09), t.add(a), jd(t), Pd(t, .78, .26, .18, .13), t.userData.mats = {
		led: i,
		setOn(e) {
			i.emissiveIntensity = e ? 2.5 : 0, i.color.setHex(e ? 4906624 : 820);
		}
	}, t.userData.mats.setOn(e.on), t;
}
function zd(e) {
	let t = new J(), n = kd(.14, .16, .56, Q.plastic(15659767, .6, .03));
	n.position.y = .28, t.add(n);
	let r = kd(.135, .15, .34, Q.plastic(12109012, .7, .1));
	r.position.y = .31, t.add(r);
	let i = Od.glow(3718648), a = Ad(.022, i);
	return a.position.set(0, .58, .14), t.add(a), jd(t), Pd(t, .34, .52, .34, .26), t.userData.mats = {
		led: i,
		setOn(e) {
			i.emissiveIntensity = e ? 2.5 : 0, i.color.setHex(e ? 3718648 : 820);
		}
	}, t.userData.mats.setOn(e.on), t;
}
function Bd(e) {
	let t = new J(), n = kd(.09, .11, .03, Q.plastic(15265267, .5, .03));
	n.position.y = .015, t.add(n);
	let r = kd(.025, .025, .05, Q.metal(3753050));
	r.position.y = .055, t.add(r);
	let i = Ad(.075, Q.plastic(15857145, .45, .03));
	i.position.y = .13, t.add(i);
	let a = kd(.035, .04, .02, Q.metal(1119516, .2, .9));
	a.rotation.x = Math.PI / 2, a.position.set(0, .13, .065), t.add(a);
	let o = Od.glow(15680580), s = Ad(.015, o);
	return s.position.set(0, .17, .02), t.add(s), jd(t), Pd(t, .2, .24, .2, .12), t.userData.mats = {
		led: o,
		setOn(e) {
			o.emissiveIntensity = e ? 2.8 : 0, o.color.setHex(e ? 15680580 : 820);
		}
	}, t.userData.mats.setOn(e.on), t;
}
function Vd(e) {
	let t = new J(), n = Md(.6, .78, .55, Q.metal(11973289, .48, .35), 0, .45, -.025, .012);
	t.add(n), t.add($(.54, .06, .48, Q.plastic(2697768), 0, .03, -.025)), t.add($(.58, .025, .54, Q.metal(13683907, .4, .3), 0, .8375, -.025)), t.add($(.18, .055, .012, Q.plastic(7829359), -.18, .765, .256));
	let r = kd(.028, .028, .016, Q.metal(12104614, .3, .6));
	r.rotation.x = Math.PI / 2, r.position.set(.08, .78, .28), t.add(r);
	let i = kd(.2, .2, .05, Q.metal(3421747, .3, .7));
	i.rotation.x = Math.PI / 2, i.position.set(0, .42, .31), t.add(i);
	let a = kd(.15, .15, .03, Q.glass(5859174, .65));
	a.rotation.x = Math.PI / 2, a.position.set(0, .42, .34), t.add(a);
	let o = $(.6, .1, .02, Q.plastic(3359061));
	o.position.set(0, .8, .31), t.add(o);
	let s = Od.glow(3718648), c = Ad(.02, s);
	return c.position.set(.2, .8, .322), t.add(c), jd(t), Pd(t, .62, .84, .62, .42), t.userData.mats = {
		led: s,
		setOn(e) {
			s.emissiveIntensity = e ? 2.5 : 0, s.color.setHex(e ? 3718648 : 820);
		}
	}, t.userData.mats.setOn(e.on), t;
}
function Hd(e) {
	let t = new J(), n = Md(.7, 1.66, .63, Q.metal(4803399, .42, .55), 0, .89, -.035, .012);
	t.add(n), t.add($(.64, .06, .58, Q.plastic(2434595), 0, .03, -.035));
	for (let e of [-1, 1]) t.add(Md(.343, 1.64, .045, Q.metal(7829872, .38, .55), e * .176, .89, .3, .008));
	let r = $(.009, 1.64, .008, Q.plastic(2369058));
	r.position.set(0, .89, .326), t.add(r), t.add($(.1, .17, .012, Q.plastic(2107171, .3), .2, 1.02, .33));
	let i = $(.04, .5, .03, Q.metal(7042691));
	i.position.set(-.2, 1.35, .365), t.add(i);
	let a = $(.04, .5, .03, Q.metal(7042691));
	a.position.set(.2, 1.35, .365), t.add(a);
	let o = Od.glow(4906624), s = Ad(.02, o);
	return s.position.set(.2, .9, .36), t.add(s), jd(t), Pd(t, .72, 1.72, .72, .86), t.userData.mats = {
		led: o,
		setOn(e) {
			o.emissiveIntensity = e ? 2.5 : 0, o.color.setHex(e ? 4906624 : 820);
		}
	}, t.userData.mats.setOn(e.on), t;
}
function Ud(e) {
	let t = new J(), n = e.w || 1.4, r = n * .56, i = .26 + r / 2, a = e.on ? Od.glow(10471935) : Od.plastic(1712688, .3, .5), o = $(n, r, .04, a);
	o.position.y = i, t.add(o);
	let s = $(n + .04, r + .04, .05, Q.plastic(856343, .4, .5));
	s.position.y = i, s.position.z = -.005, t.add(s);
	let c = $(.34, .03, .22, Q.metal(1844013));
	c.position.y = .015, t.add(c);
	let l = $(.08, .26, .06, Q.metal(1844013));
	return l.position.y = .14, t.add(l), jd(t), Pd(t, n + .06, .26 + r + .05, .24, (.26 + r) / 2), t.userData.mats = {
		screen: a,
		setOn(e) {
			a.emissive.setHex(e ? 10471935 : 0), a.emissiveIntensity = e ? 1.4 : 0, a.color.setHex(e ? 2771584 : 1712688);
		}
	}, t.userData.mats.setOn(e.on), t;
}
function Wd(e) {
	let t = new J(), n = kd(.09, .1, .03, Q.metal(3753050));
	n.position.y = .015, t.add(n);
	let r = Od.glow(16774084), i = kd(.075, .075, .02, r);
	return i.position.y = .035, t.add(i), jd(t), Pd(t, .22, .08, .22, .04), t.userData.mats = {
		disc: r,
		setOn(e) {
			r.emissiveIntensity = e ? 2.5 : 0, r.color.setHex(e ? 16774084 : 7041664);
		}
	}, t.userData.mats.setOn(e.on), t;
}
function Gd(e) {
	let t = new J(), n = kd(.09, .09, .34, Q.plastic(6254208, .7, .08));
	n.position.y = .17, t.add(n);
	let r = kd(.045, .045, .02, Q.metal(856343, .3, .8));
	r.rotation.x = Math.PI / 2, r.position.set(0, .17, .08), t.add(r);
	let i = Od.glow(3718648), a = Ad(.014, i);
	return a.position.set(0, .3, .085), t.add(a), jd(t), Pd(t, .2, .36, .2, .18), t.userData.mats = {
		led: i,
		setOn(e) {
			i.emissiveIntensity = e ? 2.4 : 0, i.color.setHex(e ? 3718648 : 820);
		}
	}, t.userData.mats.setOn(e.on), t;
}
function Kd(e) {
	let t = new J(), n = kd(.09, .11, .2, Q.plastic(6254208));
	n.position.y = .1, t.add(n);
	let r = Od.glow(16771504), i = kd(.07, .07, .03, r);
	return i.position.y = .21, t.add(i), jd(t), Pd(t, .24, .24, .24, .12), t.userData.mats = {
		top: r,
		setOn(e) {
			r.emissiveIntensity = e ? 2.2 : 0, r.color.setHex(e ? 16771504 : 7041664);
		}
	}, t.userData.mats.setOn(e.on), t;
}
function qd(e) {
	let t = new J(), n = e.w || 1.8, r = e.d || 2;
	t.add($(n * .86, .12, r * .86, Q.wood(4799280), 0, .06, 0)), t.add(Md(n, .16, r, Q.wood(8414024), 0, .2, 0, .012)), t.add(Md(n * .97, .23, r * .91, Q.fabric(13682873), 0, .395, -r * .025, .028)), t.add(Md(n, .82, r * .065, Q.wood(7427903), 0, .53, r * .4675, .015)), t.add(Md(n * .92, .42, r * .028, Q.fabric(8485229), 0, .69, r * .42, .018));
	let i = n >= 1.35 ? 2 : 1;
	for (let e = 0; e < i; e++) t.add(Md(n * .76 / i, .105, r * .19, Q.fabric(14867405), (e - (i - 1) / 2) * n * .45, .5625, r * .28, .035));
	return t.add(Md(n * .97, .065, r * .61, Q.fabric(10722188), 0, .5425, -r * .17, .018)), t.add(Md(n * .975, .025, r * .16, Q.fabric(6842463), 0, .5875, -r * .31, .009)), jd(t), Pd(t, n, .94, r), t;
}
function Jd(e) {
	let t = new J(), n = e.w || 2.1, r = e.d || .9;
	for (let e of [-1, 1]) for (let i of [-1, 1]) t.add($(n * .026, .12, r * .065, Q.metal(3421745, .5, .55), e * n * .41, .06, i * r * .35));
	t.add(Md(n, .2, r, Q.fabric(7828843), 0, .22, 0)), t.add(Md(n, .52, r * .19, Q.fabric(9078651), 0, .6, r * .405, .025));
	for (let e of [-1, 1]) t.add(Md(n * .075, .34, r, Q.fabric(9078651), e * n * .4625, .42, 0, .028));
	let i = Math.max(1, Math.min(3, Math.round(n / .75))), a = n * .83 / i;
	for (let e = 0; e < i; e++) {
		let n = (e - (i - 1) / 2) * a;
		t.add(Md(a * .975, .13, r * .73, Q.fabric(11183511), n, .385, -r * .1, .026)), t.add(Md(a * .96, .36, r * .16, Q.fabric(12104098), n, .64, r * .245, .03));
	}
	return jd(t), Pd(t, n, .86, r), t;
}
function Yd(e) {
	let t = new J(), n = e.w || 1.4, r = e.d || .8;
	t.add(Md(n, .04, r, Q.wood(10057296), 0, .73, 0, .008)), t.add($(n * .87, .055, r * .82, Q.wood(5719348), 0, .6825, 0));
	let i = Math.min(.045, n * .08), a = Math.min(.045, r * .08);
	for (let e of [-1, 1]) for (let o of [-1, 1]) t.add($(i, .71, a, Q.metal(3750709, .48, .55), e * n * .41, .355, o * r * .39));
	return jd(t), Pd(t, n, .75, r, .375), t;
}
function Xd(e) {
	let t = new J(), n = e.w || 1.2, r = e.d || .6;
	t.add(Md(n, .035, r, Q.wood(10057296), 0, .7425, 0, .007));
	for (let e of [-1, 1]) t.add($(n * .03, .725, r * .85, Q.metal(3619380, .5, .5), e * n * .455, .3625, 0));
	return t.add($(n * .3, .14, r * .84, Q.wood(7691074), n * .27, .655, 0)), t.add($(n * .16, .012, r * .018, Q.metal(9995368, .45, .55), n * .27, .655, -r * .43)), jd(t), Pd(t, n, .76, r, .38), t;
}
function Zd(e) {
	let t = new J(), n = e.w || .45, r = e.d || .45;
	t.add(Md(n, .035, r, Q.wood(8874058), 0, .4225, 0, .008)), t.add(Md(n * .94, .04, r * .91, Q.fabric(10787722), 0, .46, -r * .025, .012)), t.add(Md(n, .27, r * .1, Q.wood(8874058), 0, .705, r * .45, .012));
	for (let e of [-1, 1]) {
		t.add($(n * .065, .4, r * .065, Q.metal(3553586, .5, .55), e * n * .4, .61, r * .42));
		for (let i of [-1, 1]) t.add($(n * .065, .405, r * .065, Q.metal(3553586, .5, .55), e * n * .4, .2025, i * r * .38));
	}
	return jd(t), Pd(t, n, .92, r, .46), t;
}
function Qd(e) {
	let t = new J(), n = e.w || 1.8, r = e.d || .6;
	t.add($(n * .92, .08, r * .88, Q.wood(4537392), 0, .04, 0)), t.add(Md(n, 1.82, r, Q.wood(8151624), 0, .99, 0, .008)), t.add($(n * .006, 1.76, r * .008, Q.plastic(3750450), 0, .99, r * .496));
	for (let e of [-1, 1]) t.add($(n * .012, .3, r * .025, Q.metal(10126947, .5, .5), e * n * .055, .95, r * .48));
	return jd(t), Pd(t, n, 1.9, r, .95), t;
}
function $d(e) {
	let t = new J(), n = e.w || 1.6, r = e.d || .4;
	t.add($(n * .9, .07, r * .8, Q.metal(3158830, .5, .5), 0, .035, 0)), t.add(Md(n, .36, r, Q.wood(8085573), 0, .25, 0, .008));
	for (let e of [-1, 1]) t.add($(n * .005, .31, r * .01, Q.plastic(3421743), e * n / 6, .25, r * .495));
	return t.add(Md(n, .035, r, Q.plastic(6842205, .65), 0, .4475, 0, .006)), jd(t), Pd(t, n, .5, r, .25), t;
}
function ef(e) {
	let t = new J(), n = $(.38, .66, .16, Q.plastic(15659767, .4, .05));
	n.position.set(0, .55, -.27), t.add(n);
	let r = new Pi(new Ji(.18, .16, .46, 24), Q.plastic(15659767, .4, .05));
	r.position.set(0, .23, .05), t.add(r);
	let i = kd(.19, .19, .05, Q.plastic(13358561));
	return i.position.set(0, .48, .05), t.add(i), jd(t), Pd(t, .44, .8, .75, .4), t;
}
function tf(e) {
	let t = new J(), n = e.w || .8, r = e.d || .5, i = $(n, .06, r, Q.plastic(15265267, .35, .1));
	i.position.y = .86, t.add(i);
	let a = kd(.16, .18, .12, Q.plastic(14541802, .4, .15));
	a.position.set(0, .78, 0), t.add(a);
	let o = kd(.08, .12, .8, Q.plastic(15265267, .5, .05));
	o.position.y = .4, t.add(o);
	let s = kd(.015, .015, .18, Q.metal(10135220));
	return s.position.set(0, .96, .12), t.add(s), jd(t), Pd(t, n, .94, r, .47), t;
}
function nf(e) {
	let t = new J(), n = e.w || 1.8, r = e.d || .6;
	t.add($(n * .94, .1, r * .86, Q.plastic(3487535), 0, .05, 0)), t.add($(n, .755, r, Q.wood(8349260), 0, .4775, 0)), t.add(Md(n, .045, r, Q.plastic(7565671, .7), 0, .8775, 0, .007)), t.add($(n * .006, .69, r * .01, Q.plastic(3619119), 0, .48, r * .495));
	for (let e of [-1, 1]) t.add($(n * .2, .012, r * .02, Q.metal(9929316, .5, .55), e * n * .25, .78, r * .48));
	return jd(t), Pd(t, n, .84, r, .42), t;
}
function rf(e) {
	let t = new J(), n = kd(.12, .15, .26, Q.plastic(11561546, .6, .05));
	n.position.y = .13, t.add(n);
	let r = kd(.02, .028, .55, Q.wood(10124120));
	r.position.y = .53, t.add(r);
	let i = new Pi(new mo(.28, 1), Q.plastic(4160842, .7, .02));
	i.position.y = .92, t.add(i);
	let a = new Pi(new mo(.2, 1), Q.plastic(5148506, .7, .02));
	return a.position.set(.13, 1.08, .07), t.add(a), jd(t), Pd(t, .6, 1.15, .6, .575), t;
}
var af = {
	lamp: Fd,
	strip: Id,
	desk: Ld,
	ac: Rd,
	purifier: zd,
	cam: Bd,
	washer: Vd,
	fridge: Hd,
	tv: Ud,
	downlight: Wd,
	speaker: Gd
}, of = {
	bed: qd,
	bed1: qd,
	sofa: Jd,
	table: Yd,
	desk: Xd,
	chair: Zd,
	wardrobe: Qd,
	tv: $d,
	toilet: ef,
	sink: tf,
	counter: nf,
	plant: rf,
	fridge: Hd,
	washer: Vd
};
function sf(e, t = {}) {
	let n = (af[e] || Kd)(t);
	if (e === "washer" || e === "fridge") {
		let r = e === "washer" ? .6 : .7;
		return Nd(n, {
			w: r,
			d: r,
			...t
		});
	}
	return n;
}
function cf(e, t = {}) {
	let n = of[e];
	return n ? Nd(n(t), {
		...{
			toilet: {
				w: .38,
				d: .7
			},
			plant: {
				w: .6,
				d: .6
			},
			fridge: {
				w: .7,
				d: .7
			},
			washer: {
				w: .6,
				d: .6
			}
		}[e],
		...t
	}) : null;
}
// src/floor3d/scene.js
var lf = {
	floor: 15659509,
	wall: 14081512,
	wallSide: 11845840,
	base: 856345,
	ground: 15002097
};
function uf(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n++) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
function df(e) {
	return function() {
		e |= 0, e = e + 1831565813 | 0;
		let t = Math.imul(e ^ e >>> 15, 1 | e);
		return t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t, ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function ff(e, t) {
	let n = parseInt(e.slice(1), 16), r = Math.round(Math.min(255, Math.max(0, (n >> 16) + t * 255))), i = Math.round(Math.min(255, Math.max(0, (n >> 8 & 255) + t * 255))), a = Math.round(Math.min(255, Math.max(0, (n & 255) + t * 255)));
	return "rgb(" + r + "," + i + "," + a + ")";
}
var pf = class {
	constructor(e) {
		this.host = e, this.plan = null, this.hass = null, this._raf = 0, this._devices = /* @__PURE__ */ new Map(), this._furniture = /* @__PURE__ */ new Map(), this._roomMeshes = [], this._selRing = null, this._picked = null, this.onSelect = null, this.onChange = null, this._sel = null, this._palette = "blackgold", this._diorama = !1, this._wallMeshes = [], this._baseplate = null, this._fly = null;
		let t = new nd({
			antialias: !0,
			alpha: !0
		});
		t.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)), t.outputColorSpace = rt, t.toneMapping = 4, t.toneMappingExposure = 1.2, t.shadowMap.enabled = !0, t.shadowMap.type = 2, t.domElement.className = "floor3d-canvas", e.appendChild(t.domElement), this.renderer = t;
		let n = new Zn();
		n.background = new Y(l(this._palette).bg), this.scene = n;
		let r = new ds(38, 1, .1, 400);
		r.position.set(9, 11, 12), this.camera = r;
		let i = new pd(r, t.domElement);
		i.enableDamping = !0, i.dampingFactor = .08, i.minDistance = 2, i.maxDistance = 90, i.maxPolarAngle = Math.PI * .47, i.minPolarAngle = .12, i.screenSpacePanning = !1, this.controls = i, this._addLights(), this._addGround(), this._ro = new ResizeObserver(() => this._resize()), this._ro.observe(e), this._resize(), t.domElement.addEventListener("pointerdown", (e) => this._pick(e)), this._loop();
	}
	_addLights() {
		let e = this.scene;
		e.add(new hs(16777215, .85)), e.add(new $o(16777215, 13620960, .6));
		let t = new ms(16775406, .9);
		t.position.set(8, 16, 10), t.castShadow = !0, t.shadow.mapSize.set(2048, 2048), Object.assign(t.shadow.camera, {
			left: -18,
			right: 18,
			top: 18,
			bottom: -18,
			near: 1,
			far: 60
		}), t.shadow.bias = -.0012, this.scene.add(t), this.keyLight = t;
		let n = new ms(14674175, .45);
		n.position.set(-10, 8, -8), this.scene.add(n), this._fillLight = n;
	}
	_addGround() {
		let e = new Pi(new ho(200, 200), new ko({
			color: lf.ground,
			roughness: .95,
			metalness: 0
		}));
		e.rotation.x = -Math.PI / 2, e.position.y = -.43, e.receiveShadow = !0, this.scene.add(e), this.ground = e;
	}
	_resize() {
		let e = this.host.getBoundingClientRect();
		e.width && e.height && (this.renderer.setSize(e.width, e.height, !1), this.renderer.domElement.style.width = "100%", this.renderer.domElement.style.height = "100%", this.camera.aspect = e.width / e.height, this.camera.updateProjectionMatrix());
	}
	_loop() {
		this._raf = requestAnimationFrame(() => this._loop()), this._tickFly(), this.controls.update(), this.renderer.render(this.scene, this.camera);
	}
	_flyTo(e, t, n = 620) {
		this._fly = {
			t0: performance.now(),
			dur: n,
			fromTarget: this.controls.target.clone(),
			toTarget: e.clone(),
			fromCam: this.camera.position.clone(),
			toCam: t.clone()
		}, this.controls.enabled = !1;
	}
	_tickFly() {
		if (!this._fly) return;
		let e = this._fly, t = Math.min(1, (performance.now() - e.t0) / e.dur), n = t < .5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
		this.controls.target.lerpVectors(e.fromTarget, e.toTarget, n), this.camera.position.lerpVectors(e.fromCam, e.toCam, n), t >= 1 && (this._fly = null, this.controls.enabled = !0);
	}
	dispose() {
		cancelAnimationFrame(this._raf), this._ro?.disconnect(), this.controls.dispose(), this.plan = null, this._diorama = !1, this._rebuild(), this.ground.geometry.dispose(), this.ground.material.dispose(), this.renderer.dispose(), this.renderer.domElement.remove(), this._clearOutline();
	}
	setPlan(e, t = !0) {
		this.plan = e, this._rebuild(), t && this.fitView();
	}
	setHass(e) {
		this.hass = e, this._syncStates();
	}
	setPalette(e) {
		let t = l(e);
		this._palette = e, this.host.dataset.palette = e, this.scene.background = new Y(t.bg), this.ground && this.ground.material.color.setHex(t.ground);
		for (let e of this._roomMeshes) {
			if (e.userData.customFloor) continue;
			let n = e.userData.baseColor;
			e.material.color.copy(n.clone().lerp(new Y(t.floor), t.floorMix));
		}
		this._wallMatCache?.forEach((e) => {
			e.color.set(e.userData?.custom || t.wall);
		}), this._baseplate && (this._baseplate.getObjectByName("plinth").material.color.set(t.base ?? t.ground), this._baseplate.getObjectByName("trim").children.forEach((e) => {
			e.material.color.set(t.accent ?? 13215850);
		})), this._syncStates();
	}
	setDiorama(e) {
		this._diorama = e, e && !this._baseplate && this._buildBaseplate(), this._baseplate && (this._baseplate.visible = !!e), this.ground.position.y = e ? -.43 : -.025, this.keyLight && (this.keyLight.intensity = e ? 2.2 : 1.8), this._fillLight && (this._fillLight.intensity = e ? .8 : .6);
	}
	_buildBaseplate() {
		let e = Infinity, t = Infinity, n = -Infinity, r = -Infinity;
		for (let i of this.plan?.walls || []) e = Math.min(e, i.x1, i.x2), t = Math.min(t, i.y1, i.y2), n = Math.max(n, i.x1, i.x2), r = Math.max(r, i.y1, i.y2);
		if (![
			e,
			t,
			n,
			r
		].every(Number.isFinite)) return;
		let i = .5, a = n - e + i * 2, o = r - t + i * 2, s = l(this._palette), c = new J();
		c.name = "diorama", c.position.set((e + n) / 2, 0, (t + r) / 2);
		let u = new Pi(new qi(a, .36, o), new ko({
			color: s.base ?? s.ground,
			roughness: .48,
			metalness: .22
		}));
		u.name = "plinth", u.position.y = -.36 / 2 - .012, u.receiveShadow = u.castShadow = !0, c.add(u);
		let d = new J();
		d.name = "trim";
		let f = new ko({
			color: s.accent ?? 13215850,
			roughness: .32,
			metalness: .65,
			emissive: 3942672,
			emissiveIntensity: .18
		});
		for (let [e, t, n, r] of [
			[
				a + .012,
				.018,
				0,
				-o / 2
			],
			[
				a + .012,
				.018,
				0,
				o / 2
			],
			[
				.018,
				o,
				-a / 2,
				0
			],
			[
				.018,
				o,
				a / 2,
				0
			]
		]) {
			let i = new Pi(new qi(e, .022, t), f);
			i.position.set(n, -.09, r), d.add(i);
		}
		c.add(d), this.scene.add(c), this._baseplate = c;
	}
	fitView() {
		let e = this.plan;
		if (!e || !e.walls.length && !e.rooms.length) return;
		let t = Infinity, n = Infinity, r = -Infinity, i = -Infinity, a = (e, a) => {
			t = Math.min(t, e), n = Math.min(n, a), r = Math.max(r, e), i = Math.max(i, a);
		};
		for (let t of e.walls) a(t.x1, t.y1), a(t.x2, t.y2);
		for (let t of e.rooms) for (let [e, n] of t.poly) a(e, n);
		let o = (t + r) / 2, s = (n + i) / 2, c = Math.max(2, r - t), l = Math.max(2, i - n), u = Math.max(c, l) * .9 + 2;
		this._flyTo(new G(o, 0, s), new G(o + u * .72, u * .92, s + u * .72));
	}
	focusObject(e) {
		if (!e) return;
		let t = new fr().setFromObject(e);
		if (t.isEmpty()) return;
		let n = t.getCenter(new G()), r = t.getSize(new G()), i = Math.max(r.x, r.y, r.z) * 1.9 + 1.1;
		this._flyTo(new G(n.x, n.y * .7, n.z), new G(n.x + i * .78, n.y + i * .72, n.z + i * .78));
	}
	focusSelected() {
		let e = this._selRec();
		e?.grp ? this.focusObject(e.grp) : this.fitView();
	}
	_rebuild() {
		let e = this.scene;
		for (let t of [...e.children]) t === this.ground || t.isLight || (e.remove(t), t.traverse?.((e) => {
			e.geometry?.dispose?.();
			let t = Array.isArray(e.material) ? e.material : [e.material];
			for (let e of t) e?.userData?.shared || (e?.map?.dispose?.(), e?.dispose?.());
		}));
		this._devices.clear(), this._furniture.clear(), this._roomMeshes = [], this._doorMeshes = [], this._selRing = null, this._wallMatCache = /* @__PURE__ */ new Map(), this._baseplate = null, this._diorama && this._buildBaseplate();
		let t = this.plan;
		if (!t) return;
		let n = t.wallHeight || 1.2, r = l(this._palette);
		t.rooms.forEach((t, n) => {
			let i = new Ea();
			t.poly.forEach(([e, t], n) => n ? i.lineTo(e, t) : i.moveTo(e, t)), i.closePath();
			let a = new go(i), o = new Y(c(n)), s = !!t.floor, l;
			if (s) {
				let e = t.floor;
				this._setFloorUV(a, e), l = this._floorMaterial(e);
			} else l = new ko({
				color: o.clone().lerp(new Y(r.floor), r.floorMix),
				roughness: .86,
				metalness: .06,
				side: 2
			});
			a.rotateX(Math.PI / 2), l.emissive = new Y(0), l.emissiveIntensity = 1;
			let u = new Pi(a, l);
			u.receiveShadow = !0, u.userData = {
				kind: "room",
				roomId: t.id,
				baseColor: o,
				customFloor: s
			}, e.add(u), this._roomMeshes.push(u);
		}), this._segs = this._wallIndex();
		for (let e of t.walls) this._buildWall(e, n);
		for (let e of t.furniture) this._addFurniture(e);
		for (let e of t.devices) this._addDevice(e);
		t.rooms.forEach((e, t) => this._addRoomLabel(e, t)), this._syncStates();
	}
	_wallIndex() {
		let e = [];
		for (let t of this.plan?.walls || []) t.kind !== "virtual" && (u(t) < .03 || e.push({
			x1: t.x1,
			y1: t.y1,
			x2: t.x2,
			y2: t.y2,
			t: n(t)
		}));
		return e;
	}
	_miterExt(e, t, n, r, i) {
		let a = 0, o = .04;
		for (let s of this._segs || []) {
			let c, l;
			if (Math.hypot(s.x1 - e, s.y1 - t) <= o) c = s.x2, l = s.y2;
			else if (Math.hypot(s.x2 - e, s.y2 - t) <= o) c = s.x1, l = s.y1;
			else continue;
			let u = c - e, d = l - t, f = Math.hypot(u, d);
			if (f < 1e-6) continue;
			let p = Math.max(-1, Math.min(1, (n * u + r * d) / f)), m = Math.acos(p);
			if (m < .35 || m > 3) continue;
			let h = s.t || i, g = Math.min(h / 2 / Math.tan(m / 2), h * 1.15);
			g > a && (a = g);
		}
		return a;
	}
	_buildWall(e, r) {
		let a = u(e);
		if (a < .03 || e.kind === "virtual") return;
		let o = n(e), s = i(this.plan, e), { x1: c, y1: l, x2: d, y2: f } = e, { ux: p, uy: m } = t(e), h = -Math.atan2(m, p), g = this._wallMat(o, e.color), _ = this._miterExt(c, l, p, m, o), v = this._miterExt(d, f, -p, -m, o), y = [];
		for (let t of this.plan.openings) {
			if (t.wallId !== e.id) continue;
			let n = (t.width || .9) / 2, r = Math.max(0, t.bottom || 0), i = r + (t.height || 2.1), o = r, c = Math.min(s, i);
			i > s && (r > 0 ? (o = Math.min(r, s * .62), c = Math.max(o + .15, s - Math.min(.08, s * .06))) : c = s), y.push({
				a: Math.max(0, Math.min(1, (t.offset - n) / a)),
				b: Math.max(0, Math.min(1, (t.offset + n) / a)),
				bottom: o,
				top: c,
				op: t
			});
		}
		y.sort((e, t) => e.a - t.a);
		let b = /* @__PURE__ */ new Set([0, 1]);
		for (let e of y) b.add(e.a), b.add(e.b);
		let x = [...b].sort((e, t) => e - t), S = [];
		for (let e = 0; e < x.length - 1; e++) {
			let t = x[e], n = x[e + 1];
			if (n - t < 1e-4) continue;
			let r = (t + n) / 2;
			S.push({
				a: t,
				b: n,
				hole: y.find((e) => r > e.a - 1e-9 && r < e.b + 1e-9) || null
			});
		}
		let C = S[0], w = S[S.length - 1];
		_ > 0 && C && !C.hole && C.a <= 1e-4 && (C.a = -_ / a), v > 0 && w && !w.hole && w.b >= .9999 && (w.b = 1 + v / a);
		for (let e of S) {
			let t = (e.b - e.a) * a;
			if (t < .02) continue;
			let n = (e.a + e.b) / 2, r = c + p * n * a, i = l + m * n * a;
			if (!e.hole) {
				this._box(t, s, o, r, s / 2, i, h, g, !0);
				continue;
			}
			let { bottom: u, top: d, op: f } = e.hole;
			if (u > .02 && this._box(t, u, o, r, u / 2, i, h, g, !0), s - d > .02 && this._box(t, s - d, o, r, d + (s - d) / 2, i, h, g, !0), f.type === "window") {
				let e = Math.max(.05, d - u), n = new Pi(new qi(t, e, o * .3), new Ao({
					color: 10475775,
					transparent: !0,
					opacity: .3,
					roughness: .1,
					metalness: 0,
					transmission: .6,
					side: 2
				}));
				n.position.set(r, u + e / 2, i), n.rotation.y = h, this.scene.add(n);
			}
		}
		for (let e of y) {
			if (e.b - e.a < 1e-4) continue;
			let t = e.op.type === "door" ? 0 : e.bottom, n = Math.min(s, e.top);
			if (!(n - t < .05)) for (let r of [e.a, e.b]) {
				let e = c + p * r * a, i = l + m * r * a;
				this._box(.05, n - t, o * 1.06, e, (t + n) / 2, i, h, g, !1);
			}
		}
		for (let t of y) {
			let n = t.op;
			n.type === "door" && n.hasLeaf !== !1 && this._doorLeaf(e, n);
		}
	}
	_doorLeaf(e, a) {
		let o = t(e), s = n(e), c = Math.min(a.width || .9, o.len), l = e.x1 + o.ux * a.offset, u = e.y1 + o.uy * a.offset, d = Math.min(.7, Math.max(.35, c)), f = (this.plan.rooms || []).some((e) => r(l + o.nx * d, u + o.ny * d, e.poly)) ? 1 : -1, p = (a.swing === "outward" ? -1 : 1) * f, m = Math.min(a.height || 2.1, i(this.plan, e) + .02), h = !!a.entityId && this.hass?.states?.[a.entityId]?.state === "on";
		if (a.doorStyle === "sliding") {
			for (let t of [-1, 1]) {
				let n = a.offset + t * c / 4, r = new Pi(new qi(c / 2 - .018, m - .035, .035), new ko({
					color: 8414794,
					roughness: .55,
					metalness: .08
				}));
				r.position.set(e.x1 + o.ux * n + o.nx * t * .025, m / 2, e.y1 + o.uy * n + o.ny * t * .025), r.rotation.y = -Math.atan2(o.uy, o.ux), r.castShadow = r.receiveShadow = !0, this.scene.add(r);
			}
			return;
		}
		let g = a.doorStyle === "double" ? [{
			o: a.offset - c / 2,
			len: c / 2,
			s: 1
		}, {
			o: a.offset + c / 2,
			len: c / 2,
			s: -1
		}] : [{
			o: a.hinge === "end" ? a.offset + c / 2 : a.offset - c / 2,
			len: c,
			s: a.hinge === "end" ? -1 : 1
		}];
		for (let t of g) {
			let n = e.x1 + o.ux * t.o, r = e.y1 + o.uy * t.o, i = Math.atan2(o.uy, o.ux) + (t.s < 0 ? Math.PI : 0) + t.s * p * Math.PI / 4, c = t.len * .94, l = new Pi(new qi(c, m, Math.max(.035, s * .5)), new ko({
				color: h ? 12161884 : 8414794,
				emissive: h ? 4862720 : 0,
				roughness: .62,
				metalness: .05
			}));
			l.position.set(n + Math.cos(i) * c / 2, m / 2, r + Math.sin(i) * c / 2), l.rotation.y = -i, l.castShadow = !0, l.receiveShadow = !0;
			let u = new Pi(new qi(c * .74, m * .73, .012), new ko({
				color: 9598549,
				roughness: .7
			}));
			u.position.z = s * .25 + .008, l.add(u);
			for (let e of [-1, 1]) {
				let t = new Pi(new qi(.11, .018, .025), new ko({
					color: 13215850,
					metalness: .7,
					roughness: .32
				}));
				t.position.set(c * .31, 0, e * (Math.max(.035, s * .5) / 2 + .025)), l.add(t);
			}
			this.scene.add(l), a.entityId && (this._doorMeshes || (this._doorMeshes = [])).push({
				mesh: l,
				entityId: a.entityId
			});
		}
	}
	_floorSpan(e) {
		let t = e.w > 0 ? e.w : .8, n = e.d > 0 ? e.d : .8, r = Math.max(t, n), i = Math.min(t, n);
		return e.orient === "v" ? {
			tw: i,
			td: r
		} : {
			tw: r,
			td: i
		};
	}
	_setFloorUV(e, t) {
		let { tw: n, td: r } = this._floorSpan(t), i = e.attributes.position, a = new Float32Array(i.count * 2);
		for (let e = 0; e < i.count; e++) {
			let o = i.getX(e), s = i.getY(e), c = 0;
			t.joint === "stagger" && Math.floor(s / r) % 2 && (c = n / 2), a[e * 2] = (o + c) / n, a[e * 2 + 1] = s / r;
		}
		e.setAttribute("uv", new Nr(a, 2));
	}
	_floorMaterial(e) {
		let t = {
			map: this._makeTileTexture(e),
			roughness: s[e.type]?.roughness ?? .45,
			metalness: 0,
			side: 2
		};
		return e.type === "gloss" ? new Ao({
			...t,
			clearcoat: 1,
			clearcoatRoughness: .12
		}) : new ko(t);
	}
	_makeTileTexture(e) {
		let t = a[e.tile] || a.stone, { tw: n, td: r } = this._floorSpan(e), i = Math.max(64, Math.round(256 * r / n)), o = document.createElement("canvas");
		o.width = 256, o.height = i;
		let s = o.getContext("2d"), c = e.color || t.base || "#e8e2d6";
		s.fillStyle = c, s.fillRect(0, 0, 256, i);
		let l = df(uf((e.tile || "stone") + "|" + c));
		if (t.wood) {
			let e = n >= r;
			for (let t = 0; t < 22; t++) {
				if (s.strokeStyle = ff(c, (l() - .5) * .22), s.lineWidth = 1 + l() * 2.2, s.beginPath(), e) {
					let e = l() * i;
					s.moveTo(0, e), s.bezierCurveTo(76.8, e + (l() - .5) * 14, 166.4, e + (l() - .5) * 14, 256, e + (l() - .5) * 8);
				} else {
					let e = l() * 256;
					s.moveTo(e, 0), s.bezierCurveTo(e + (l() - .5) * 14, i * .3, e + (l() - .5) * 14, i * .65, e + (l() - .5) * 8, i);
				}
				s.stroke();
			}
			for (let e = 0; e < 3; e++) {
				let e = l() * 256, t = l() * i, n = 2 + l() * 3;
				s.fillStyle = ff(c, -.3), s.beginPath(), s.ellipse(e, t, n, n * .6, l() * Math.PI, 0, Math.PI * 2), s.fill();
			}
		} else if (t === a.marble) for (let e = 0; e < 8; e++) {
			s.strokeStyle = ff(c, (l() - .5) * .14), s.lineWidth = 1 + l();
			let e = l() * 256;
			s.beginPath(), s.moveTo(e, 0), s.bezierCurveTo(e + (l() - .5) * 60, i * .4, e + (l() - .5) * 60, i * .7, e + (l() - .5) * 40, i), s.stroke();
		}
		else {
			for (let e = 0; e < 260; e++) s.fillStyle = ff(c, (l() - .5) * .08), s.globalAlpha = .35, s.fillRect(l() * 256, l() * i, 1.4, 1.4);
			s.globalAlpha = 1;
		}
		let u = Math.max(1, (e.grout || .002) / n * 256), d = Math.max(1, (e.grout || .002) / r * i);
		s.fillStyle = e.groutColor || "#ddd8ce", s.fillRect(256 - u, 0, u, i), s.fillRect(0, i - d, 256, d);
		let f = new Ui(o);
		return f.wrapS = f.wrapT = S, f.colorSpace = rt, f.anisotropy = 8, f;
	}
	_wallMat(e, t) {
		this._wallMatCache || (this._wallMatCache = /* @__PURE__ */ new Map());
		let n = e + "|" + (t || "");
		if (!this._wallMatCache.has(n)) {
			let e = new ko({
				color: t || l(this._palette).wall,
				roughness: .82,
				metalness: .03
			});
			t && (e.userData = { custom: t }), this._wallMatCache.set(n, e);
		}
		return this._wallMatCache.get(n);
	}
	_box(e, t, n, r, i, a, o, s, c = !0) {
		let l = new Pi(new qi(e, t, n), s);
		return l.position.set(r, i, a), l.rotation.y = o, l.castShadow = c, l.receiveShadow = !0, this.scene.add(l), l;
	}
	_addFurniture(e) {
		let t = cf(e.kind, {
			w: e.w,
			d: e.d
		});
		if (!t) return;
		t.position.set(e.x, 0, e.y), t.rotation.y = -(e.rot || 0) * Math.PI / 180;
		let n = this._fitDollhouse(t);
		t.scale.setScalar(n * (e.scale || 1)), t.traverse((t) => {
			t.isMesh && (t.userData = {
				...t.userData,
				kind: "furniture",
				id: e.id
			});
		}), this.scene.add(t), this._furniture.set(e.id, {
			grp: t,
			baseScale: n
		});
	}
	_addDevice(e) {
		let t = this._deviceOn(e), n = sf(e.art, { on: t }), r = this.plan?.wallHeight || 1.2, i = {
			ac: Math.max(.9, r - .34),
			downlight: r - .04,
			strip: r - .14
		};
		n.position.set(e.x, i[e.art] ?? 0, e.y), n.rotation.y = -(e.rot || 0) * Math.PI / 180;
		let a = this._fitDollhouse(n);
		n.scale.setScalar(a * (e.scale || 1)), n.traverse((t) => {
			t.isMesh && (t.userData = {
				...t.userData,
				kind: "device",
				id: e.id,
				entity: e.entity
			});
		}), this.scene.add(n), this._devices.set(e.id, {
			grp: n,
			mats: n.userData.mats,
			entity: e.entity,
			art: e.art,
			baseScale: a
		});
	}
	_fitDollhouse(e) {
		return 1;
	}
	_deviceOn(e) {
		if (!this.hass) return !1;
		let t = this.hass.states?.[e.entity];
		if (!t) return !1;
		let n = t.state;
		return e.dom === "climate" ? n && n !== "off" : n === "on";
	}
	_addRoomLabel(t, n) {
		let [r, i] = o(t.poly), a = e(t.poly), s = document.createElement("canvas");
		s.width = 1024, s.height = 320;
		let c = s.getContext("2d");
		c.scale(2, 2), c.font = "600 40px system-ui,-apple-system,sans-serif", c.textAlign = "center", c.fillStyle = "rgba(232,242,255,.94)", c.fillText(t.name, 256, 62), c.font = "400 30px system-ui,-apple-system,sans-serif", c.fillStyle = "rgba(150,180,220,.72)", c.fillText(a.toFixed(1) + " m²", 256, 106);
		let l = new Ui(s);
		l.colorSpace = rt;
		let u = new hi(new ti({
			map: l,
			transparent: !0,
			depthTest: !1,
			depthWrite: !1
		}));
		u.scale.set(2, .625, 1), u.position.set(r, .06, i), u.renderOrder = 5, this.scene.add(u);
	}
	_syncStates() {
		let e = this.plan;
		if (!e || !this.hass) return;
		let t = this.hass.states || {};
		for (let e of this._doorMeshes || []) {
			let n = t[e.entityId]?.state === "on";
			e.mesh.material.color.setHex(n ? 12161884 : 8414794), e.mesh.material.emissive.setHex(n ? 4862720 : 0);
		}
		for (let n of e.devices) {
			let e = this._devices.get(n.id);
			if (!e?.mats) continue;
			let r = t[n.entity], i = r?.state, a = !!r && (i === "on" || ![
				"off",
				"unavailable",
				"unknown"
			].includes(i) && n.dom === "climate"), o = i !== "unavailable" && i !== "unknown";
			e.mats.setOn(a), o || e.grp.traverse((e) => {
				e.isMesh && e.material?.opacity !== void 0 && (e.material.opacity = .35);
			});
		}
		for (let n of this._roomMeshes) {
			let i = n.userData.roomId, a = n.userData.baseColor, o = 0, s = null, c = null, u = e.rooms.find((e) => e.id === i)?.poly;
			for (let n of e.devices) {
				if (u && !r(n.x, n.y, u)) continue;
				let e = t[n.entity];
				if (!e) continue;
				let i = e.state;
				if (n.dom === "light" && i === "on") {
					let t = e.attributes?.brightness ?? 255;
					o = Math.max(o, .05 + t / 255 * .1);
					let n = e.attributes?.rgb_color;
					s = n ? new Y(n[0] / 255, n[1] / 255, n[2] / 255) : new Y(16764820);
				} else n.dom === "climate" && i && i !== "off" && (c = new Y(i === "heat" || i === "heat_cool" ? 16742972 : 4161488));
			}
			let d = s || c, f = s ? Math.min(.35, o * 1.6) : c ? .15 : 0, p = l(this._palette), m = n.userData.customFloor ? new Y(16777215) : a.clone().lerp(new Y(p.floor), p.floorMix);
			d && m.lerp(d, f), n.material.color.copy(m), n.material.emissive.copy(d ? d.clone().multiplyScalar(.1) : new Y(0)), n.material.emissiveIntensity = o ? Math.min(.4, o) : c ? .1 : 0;
		}
	}
	_pick(e) {
		if (!this.plan) return;
		let t = this.renderer.domElement.getBoundingClientRect(), n = new W((e.clientX - t.left) / t.width * 2 - 1, -((e.clientY - t.top) / t.height) * 2 + 1), r = new Ns();
		r.setFromCamera(n, this.camera);
		let i = [];
		for (let e of this._devices.values()) e.grp.traverse((e) => e.isMesh && i.push(e));
		for (let e of this._furniture.values()) e.grp.traverse((e) => e.isMesh && i.push(e));
		for (let e of this._roomMeshes) i.push(e);
		let a = r.intersectObjects(i, !1), o = a.find((e) => ["device", "furniture"].includes(e.object.userData?.kind)), s = o?.object.userData.kind === "device" ? o : null, c = o?.object.userData.kind === "furniture" ? o : null, l = s ? {
			type: "device",
			id: s.object.userData.id,
			entity: s.object.userData.entity
		} : c ? {
			type: "furniture",
			id: c.object.userData.id
		} : null;
		if (l) {
			this._sel = l, this.onSelect?.(l);
			return;
		}
		let u = a.find((e) => e.object.userData?.kind === "room");
		u ? (this._sel = {
			type: "room",
			id: u.object.userData.roomId
		}, this.onSelect?.(this._sel)) : (this._sel = null, this.onSelect?.(null));
	}
	_selRec() {
		if (!this._sel || this._sel.type !== "device" && this._sel.type !== "furniture") return null;
		let e = (this._sel.type === "device" ? this._devices : this._furniture).get(this._sel.id);
		return e ? {
			kind: this._sel.type,
			id: this._sel.id,
			...e
		} : null;
	}
	_planItem(e) {
		let t = this.plan;
		return t && (e.kind === "device" ? t.devices : t.furniture)?.find((t) => t.id === e.id) || null;
	}
	rotateSelected(e) {
		let t = this._selRec(), n = t && this._planItem(t);
		n && (n.rot = ((n.rot || 0) + e) % 360, t.grp.rotation.y = -n.rot * Math.PI / 180, this._syncOutline(t), this.onChange?.());
	}
	rotateTo(e) {
		let t = this._selRec(), n = t && this._planItem(t);
		n && (n.rot = Math.round(e) % 360, t.grp.rotation.y = -n.rot * Math.PI / 180, this._syncOutline(t), this.onChange?.());
	}
	scaleSelected(e) {
		let t = this._selRec(), n = t && this._planItem(t);
		n && (n.scale = Math.round(Math.max(.4, Math.min(3, e)) * 100) / 100, t.grp.scale.setScalar(t.baseScale * n.scale), this._syncOutline(t), this.onChange?.());
	}
	deleteSelected() {
		let e = this._selRec(), t = this.plan;
		return !e || !t ? !1 : (e.kind === "device" ? t.devices = t.devices.filter((t) => t.id !== e.id) : t.furniture = t.furniture.filter((t) => t.id !== e.id), this.scene.remove(e.grp), (e.kind === "device" ? this._devices : this._furniture).delete(e.id), this._clearOutline(), this._sel = null, this.onChange?.(), !0);
	}
	highlight(e) {
		if (this._sel = e || null, this._clearOutline(), !e) return;
		let t = e.type === "device" ? this._devices.get(e.id) : e.type === "furniture" ? this._furniture.get(e.id) : null;
		t?.grp && (this._selRing = this._buildOutline(t.grp));
	}
	_clearOutline() {
		if (!this._selRing) return;
		let e = /* @__PURE__ */ new Set();
		this._selRing.traverse((t) => {
			t.isMesh && (t.geometry?.dispose?.(), t.material && e.add(t.material));
		});
		for (let t of e) t.dispose?.();
		this.scene.remove(this._selRing), this._selRing = null;
	}
	_syncOutline(e) {
		this._selRing && e?.grp && (this._selRing.position.copy(e.grp.position), this._selRing.rotation.copy(e.grp.rotation), this._selRing.scale.copy(e.grp.scale));
	}
	_buildOutline(e) {
		let t = new J();
		t.name = "selection-outline";
		let n = new Si({
			color: 16765562,
			side: 1,
			transparent: !0,
			opacity: .95,
			depthTest: !0,
			depthWrite: !1
		}), r = .05;
		return e.traverse((e) => {
			if (!e.isMesh || !e.visible || e.material?.visible === !1) return;
			let i = e.geometry;
			if (!i?.attributes?.position || !i?.attributes?.normal) return;
			let a = i.clone(), o = a.attributes.position, s = a.attributes.normal;
			for (let e = 0; e < o.count; e++) o.setXYZ(e, o.getX(e) + s.getX(e) * r, o.getY(e) + s.getY(e) * r, o.getZ(e) + s.getZ(e) * r);
			let c = new Pi(a, n);
			c.position.copy(e.position), c.rotation.copy(e.rotation), c.scale.copy(e.scale), c.renderOrder = 999, t.add(c);
		}), t.position.copy(e.position), t.rotation.copy(e.rotation), t.scale.copy(e.scale), t.renderOrder = 999, this.scene.add(t), t;
	}
};
export { pf as FloorScene };
