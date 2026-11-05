// src/floor3d/palettes.js
var e = {
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
function t(t) {
	return e[t] || e.plan;
}
function n() {
	return Object.entries(e).map(([e, t]) => ({
		id: e,
		name: t.name
	}));
}
// src/floor3d/furn-schemes.js
var r = (e) => Math.max(0, Math.min(255, Math.round(e)));
function i(e) {
	return [
		e >> 16 & 255,
		e >> 8 & 255,
		e & 255
	];
}
function a(e, t, n) {
	return r(e) << 16 | r(t) << 8 | r(n);
}
function o(e, t, n) {
	let r = i(e), o = i(t);
	return a(r[0] + (o[0] - r[0]) * n, r[1] + (o[1] - r[1]) * n, r[2] + (o[2] - r[2]) * n);
}
function s(e, t, n) {
	e /= 255, t /= 255, n /= 255;
	let r = Math.max(e, t, n), i = Math.min(e, t, n), a = (r + i) / 2, o = 0, s = 0;
	if (r !== i) {
		let c = r - i;
		s = a > .5 ? c / (2 - r - i) : c / (r + i), o = r === e ? ((t - n) / c + (t < n ? 6 : 0)) / 6 : r === t ? ((n - e) / c + 2) / 6 : ((e - t) / c + 4) / 6;
	}
	return [
		o,
		s,
		a
	];
}
function c(e, t, n) {
	if (t === 0) {
		let e = n * 255;
		return [
			e,
			e,
			e
		];
	}
	let r = (e, t, n) => {
		let r = n;
		return r < 0 && (r += 1), r > 1 && --r, r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
	}, i = n < .5 ? n * (1 + t) : n + t - n * t, a = 2 * n - i;
	return [
		r(a, i, e + 1 / 3) * 255,
		r(a, i, e) * 255,
		r(a, i, e - 1 / 3) * 255
	];
}
function l(e, t) {
	let [n, r, o] = i(e), [l, u, d] = s(n, r, o), [f, p, m] = c(l, u, Math.max(.02, Math.min(.98, d + t)));
	return a(f, p, m);
}
function u(e, t) {
	let [n, r, a] = i(e), [, , o] = s(n, r, a);
	return l(e, -Math.min(t, Math.max(.035, o * .55)));
}
var d = {
	classic: {
		name: "经典 · 橄榄奶白",
		swatch: [
			"#8d9a5f",
			"#c59a63",
			"#f2ecde"
		],
		wall: null,
		furn: {
			oak: 12950115,
			oakMid: 11042637,
			oakDark: 9069632,
			cream: 15920350,
			cream2: 15130059,
			cushion: 15920350,
			cushionDeep: 15130059,
			olive: 9280095,
			oliveDeep: 7766606,
			stone: 15525850,
			darkTop: 4010795,
			white: 16052972,
			white2: 14868438
		}
	},
	moss: {
		name: "墨绿 · 亮黄",
		swatch: [
			"#576238",
			"#FFD95E",
			"#F0EADC"
		],
		wall: 15788764,
		wood: o(12950115, 5726776, .32),
		sofa: 5726776,
		cushion: 16767326
	},
	cobalt: {
		name: "橙调 · 宝蓝",
		swatch: [
			"#EF8E01",
			"#0038BD",
			"#EEEEEE"
		],
		wall: 15658734,
		wood: o(12950115, 15699457, .4),
		sofa: 14525,
		cushion: 15699457
	},
	coastal: {
		name: "雾蓝 · 赤陶",
		swatch: [
			"#6D8EC4",
			"#D4622C",
			"#F0C845"
		],
		wall: o(7179972, 16777215, .76),
		wood: o(12950115, 13918764, .38),
		sofa: 13918764,
		cushion: 15779909
	},
	lilac: {
		name: "淡紫 · 黄绿",
		swatch: [
			"#CAD83B",
			"#A88AEE",
			"#FFFEEC"
		],
		wall: 16776940,
		wood: o(12950115, 13293627, .3),
		sofa: 11045614,
		cushion: 13293627
	},
	rose: {
		name: "玫红 · 深蓝",
		swatch: [
			"#F5559B",
			"#FECBEA",
			"#1455B3"
		],
		wall: o(16698346, 16777215, .38),
		wood: o(12950115, 1332659, .1),
		sofa: 16078235,
		cushion: 1332659
	}
};
function f(e) {
	return d[e] || d.classic;
}
var p = [
	{
		key: "sofa",
		label: "沙发外壳",
		hint: "沙发 / 床尾毯"
	},
	{
		key: "cushion",
		label: "沙发坐垫",
		hint: "坐垫 / 靠垫"
	},
	{
		key: "wood",
		label: "柜体木色",
		hint: "衣柜 / 橱柜 / 床架 / 桌面"
	},
	{
		key: "white",
		label: "冰箱家电",
		hint: "冰箱 / 洗衣机"
	},
	{
		key: "wall",
		label: "墙面",
		hint: "所有墙体"
	}
], m = {
	sofa: 9280095,
	cushion: 15920350,
	wood: 12950115,
	white: 16052972,
	wall: null
};
function h(e) {
	let t = {
		...m,
		...e || {}
	}, n = t.wall ?? t.white;
	return {
		oak: t.wood,
		oakMid: l(t.wood, -.085),
		oakDark: u(t.wood, .19),
		cream: o(15920350, n, .5),
		cream2: l(o(15920350, n, .45), -.06),
		cushion: t.cushion,
		cushionDeep: u(t.cushion, .11),
		olive: t.sofa,
		oliveDeep: u(t.sofa, .11),
		stone: o(15525850, n, .5),
		darkTop: o(2761504, t.wood, .22),
		white: t.white,
		white2: l(t.white, -.05)
	};
}
function g() {
	let e = Object.entries(d).map(([e, t]) => ({
		id: e,
		name: t.name,
		swatch: t.swatch
	}));
	return e.push({
		id: "custom",
		name: "自定义…",
		swatch: []
	}), e;
}
function _(e) {
	if (e === "custom") return h(m);
	let t = f(e);
	if (t.furn) return { ...t.furn };
	let { wood: n, sofa: r, cushion: i } = t, a = t.wall ?? 15920350;
	return {
		oak: n,
		oakMid: l(n, -.085),
		oakDark: u(n, .19),
		cream: o(15920350, a, .5),
		cream2: l(o(15920350, a, .45), -.06),
		cushion: i,
		cushionDeep: u(i, .11),
		olive: r,
		oliveDeep: u(r, .11),
		stone: o(15525850, a, .5),
		darkTop: o(2761504, n, .22),
		white: o(16052972, a, .22),
		white2: l(o(16052972, a, .2), -.05)
	};
}
function v(e) {
	return f(e).wall ?? null;
}
export { g as a, n as c, _ as i, m as n, v as o, h as r, t as s, p as t };
