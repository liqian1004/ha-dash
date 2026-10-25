// src/camera.js
var e = 3600;
async function t(t, n) {
	let r = [];
	typeof t?.callWS == "function" && r.push(() => t.callWS({
		type: "auth/sign_path",
		path: n,
		expires: e
	}));
	let i = t?.connection;
	typeof i?.sendMessagePromise == "function" && r.push(() => i.sendMessagePromise({
		type: "auth/sign_path",
		path: n,
		expires: e
	}));
	for (let e of r) try {
		let t = await e();
		if (t && t.path) return t.path;
	} catch {}
	return null;
}
function n(e) {
	if (!e) return null;
	for (let t of [
		e.cam,
		e.entity,
		e.id
	]) if (typeof t == "string" && t.startsWith("camera.")) return t;
	return null;
}
function r(e, n = {}) {
	let { hass: r, entity: i, streamUrl: a, refreshMs: o = 1500, fit: s = "cover" } = n, c = !1, l = null, u = null, d = 0, f = a ? "iframe" : "-", p = (t) => {
		e.innerHTML = "";
		let n = document.createElement("div");
		n.style.cssText = "position:absolute;inset:0;display:grid;place-items:center;text-align:center;padding:10px;font:400 11.5px/1.6 system-ui,\"PingFang SC\",\"Microsoft YaHei\",sans-serif;color:rgba(226,232,240,.72);background:#0a0d12", n.innerHTML = t, e.appendChild(n);
	}, m = () => {
		clearTimeout(u), u = null;
	}, h = (t) => (e.innerHTML = "", l = document.createElement("img"), l.alt = "摄像头画面", l.decoding = "async", l.style.cssText = `position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:${s};background:#0a0d12`, l.onerror = () => {
		c || y();
	}, l.src = t, e.appendChild(l), l);
	function g() {
		f = "iframe", e.innerHTML = "";
		let t = document.createElement("iframe");
		t.src = a, t.allow = "autoplay; fullscreen; picture-in-picture", t.setAttribute("allowfullscreen", ""), t.style.cssText = "position:absolute;inset:0;width:100%;height:100%;border:0;background:#0a0d12", e.appendChild(t);
	}
	async function _() {
		f = "mjpeg";
		let e = await t(r, `/api/camera_proxy_stream/${i}`);
		if (!c) {
			if (!e) return v("画面需要签名，已切换为低帧模式");
			d = 0, h(e);
		}
	}
	async function v(e) {
		if (c) return;
		f = "proxy";
		let n = await t(r, `/api/camera_proxy/${i}`) || r?.states?.[i]?.attributes?.entity_picture || null;
		if (c) return;
		if (!n) {
			p(e ? `${e}<br>这个实体取不到画面` : "取不到画面<br>确认它是 camera.* 实体，且集成支持出流");
			return;
		}
		let a = (e) => e + (e.includes("?") ? "&" : "?") + "t=" + Date.now();
		h(a(n));
		let s = () => {
			if (c) return;
			let e = new Image();
			e.onload = () => {
				c || l && l.isConnected && (l.src = e.src);
			}, e.onerror = () => {
				c || (m(), u = setTimeout(s, 4e3));
			}, e.src = a(n), m(), u = setTimeout(s, o);
		};
		u = setTimeout(s, o);
	}
	function y() {
		f === "mjpeg" && d < 2 ? (d += 1, m(), u = setTimeout(_, 1200)) : f === "mjpeg" ? v("实时流不可用，已切快照") : (m(), u = setTimeout(() => v(), 4e3));
	}
	function b() {
		if (a) return g();
		let e = r?.states?.[i];
		e ? e.state === "unavailable" ? p("摄像头离线") : _() : p("还没有这个实体<br>" + (i || "未绑定摄像头"));
	}
	return b(), {
		destroy() {
			c = !0, m(), l && (l.onerror = null, l.src = "", l = null), e.innerHTML = "";
		},
		refresh() {
			c || (d = 0, b());
		},
		mode() {
			return f;
		}
	};
}
function i(e = {}) {
	let { hass: t, entity: n, streamUrl: i, title: a } = e, o = document.createElement("div");
	o.style.cssText = "position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(4,6,9,.92);backdrop-filter:blur(8px)";
	let s = document.createElement("div");
	s.style.cssText = "position:relative;width:min(1180px,100%);max-height:calc(100vh - 48px);aspect-ratio:16/9;border-radius:14px;overflow:hidden;background:#0a0d12;border:1px solid rgba(255,255,255,.10);box-shadow:0 30px 90px rgba(0,0,0,.65)";
	let c = document.createElement("div");
	c.style.cssText = "position:absolute;inset:0", s.appendChild(c);
	let l = document.createElement("button");
	if (l.type = "button", l.textContent = "✕", l.setAttribute("aria-label", "关闭"), l.style.cssText = "position:absolute;top:10px;right:10px;z-index:2;width:30px;height:30px;border-radius:50%;border:1px solid rgba(255,255,255,.16);background:rgba(12,16,22,.72);color:#e6ebf2;cursor:pointer;font:400 13px/1 system-ui;backdrop-filter:blur(6px)", s.appendChild(l), a) {
		let e = document.createElement("div");
		e.textContent = a, e.style.cssText = "position:absolute;left:12px;top:12px;z-index:2;padding:4px 9px;border-radius:999px;background:rgba(12,16,22,.66);color:#e6ebf2;font:500 12px/1.4 system-ui,\"PingFang SC\",sans-serif;border:1px solid rgba(255,255,255,.12)", s.appendChild(e);
	}
	o.appendChild(s), document.body.appendChild(o);
	let u = r(c, {
		hass: t,
		entity: n,
		streamUrl: i,
		fit: "contain"
	}), d = () => {
		u.destroy(), o.remove(), document.removeEventListener("keydown", f);
	}, f = (e) => {
		e.key === "Escape" && d();
	};
	return l.onclick = d, o.onclick = (e) => {
		e.target === o && d();
	}, document.addEventListener("keydown", f), { close: d };
}
export { r as n, i as r, n as t };
