import { n as e, r as t, t as n } from "./chunk--1MuwD6M.js";
// src/panel.css?inline
var r = ":host{--bg:#08080a;--panel:#141416;--panel-2:#17171a;--card-top:#222226;--card-bottom:#171719;--line:#ffffff0f;--line-2:#ffffff17;--text:#f5f5f7;--text-2:#a5a5ad;--text-3:#6f6f76;--warm:#ffd9a0;--warm-deep:#e8b877;--ok:#4ade80;--r-sm:12px;--r-md:16px;--r-lg:20px;--ease:cubic-bezier(.16,1,.3,1);width:100%;height:100%;display:block;overflow:hidden}*{box-sizing:border-box;margin:0;padding:0}:host{background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased;font-family:PingFang SC,HarmonyOS Sans SC,Microsoft YaHei,-apple-system,Segoe UI,sans-serif;position:relative;overflow:hidden}.arch{z-index:0;pointer-events:none;background:radial-gradient(at 20% 0,#80765c26,#0000 39%),radial-gradient(at 70% 43%,#27313d4d,#0000 65%),#08080a;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}.arch>i{display:block;position:absolute}.arch-slats{background:repeating-linear-gradient(90deg,#03070a66 0 3px,#60615b33 4px,#151b22 7px,#090f15 9px);width:20%;height:31%;top:0;left:0;-webkit-mask-image:linear-gradient(#000 60%,#0000);mask-image:linear-gradient(#000 60%,#0000)}.arch-glow{opacity:.12;filter:blur(43px);background:#b69056;border-radius:50%;width:24%;height:15%;top:22%;left:8%}.arch-sweep{border-radius:50%}.arch-sweep-up{background:linear-gradient(120deg,#65584926,#151c24a6 50%);border-bottom:1px solid #ad987a26;width:95%;height:52%;top:-34%;left:57%;transform:rotate(16deg);box-shadow:0 2px 18px #d6b57e10}.arch-sweep-floor{background:linear-gradient(160deg,#3f434520,#111821a6 44%,#08080d99);border-radius:50% 40% 0 0;width:145%;height:80%;top:24%;left:-20%;transform:rotate(7deg);box-shadow:0 -2px 10px #d6b57e1c}.app:before{content:\"\";pointer-events:none;z-index:0;filter:blur(30px);background:radial-gradient(60% 100% at 28% 0,#ffc4780f,#0000 70%),radial-gradient(50% 90% at 72% 0,#7896ff0b,#0000 72%);height:52vh;position:absolute;top:-20%;bottom:auto;left:-10%;right:-10%}.app{z-index:1;grid-template-columns:72px 1fr;height:100%;display:grid;position:relative}.rail{border-right:1px solid var(--line);flex-direction:column;align-items:center;gap:4px;padding:16px 0;display:flex}.rail-logo{border:1px solid var(--line-2);background:linear-gradient(160deg,#2e2e34,#1b1b1f);border-radius:11px;place-items:center;width:34px;height:34px;margin-bottom:14px;display:grid}.rail-logo svg{width:17px;height:17px;stroke:var(--warm);fill:none;stroke-width:1.7px}.rail-item{width:56px;color:var(--text-3);letter-spacing:.02em;cursor:pointer;transition:.22s var(--ease);background:0 0;border:0;border-radius:12px;flex-direction:column;align-items:center;gap:4px;padding:9px 0 7px;font-size:10px;display:flex}.rail-item svg{stroke:currentColor;fill:none;stroke-width:1.6px;width:19px;height:19px}.rail-item:hover{color:var(--text-2);background:#ffffff0a}.rail-item.active{color:var(--text);background:#ffffff12;box-shadow:inset 0 1px #ffffff0f}.rail-item.active svg{stroke:var(--warm)}.rail-spacer{flex:1}.rail-item.ghost{color:var(--text-3)}.rail-sep{background:var(--line-2);width:26px;height:1px;margin:4px 0 6px}.main{grid-template-columns:minmax(0,1fr) 336px;gap:18px;min-height:0;padding:22px 22px 22px 26px;display:grid;position:relative}.col-left{flex-direction:column;min-height:0;display:flex}.head{flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:24px;display:flex}.head-left{min-width:0}.eyebrow{color:var(--text-3);letter-spacing:.05em;margin-bottom:10px;font-size:11.5px}.h1{letter-spacing:-.025em;font-size:30px;font-weight:700;line-height:1.05}.h2{color:var(--text-2);margin-top:9px;font-size:12.5px}.head-right{align-items:center;gap:10px;display:flex}.search{background:var(--panel);border:1px solid var(--line);min-width:210px;transition:.2s var(--ease);border-radius:12px;align-items:center;gap:8px;padding:9px 13px;display:flex}.search:focus-within{background:#191a1d;border-color:#ffffff2e}.search svg{width:15px;height:15px;stroke:var(--text-3);fill:none;stroke-width:1.8px;flex-shrink:0}.search input{color:var(--text);background:0 0;border:0;outline:0;width:100%;font-family:inherit;font-size:12.5px}.search input::placeholder{color:#5c5c63}.stats{gap:8px;display:flex}.stat{border:1px solid var(--line);background:linear-gradient(165deg,#1b1b1f,#141416);border-radius:13px;min-width:78px;padding:9px 14px}.stat b{font-variant-numeric:tabular-nums;font-size:19px;font-weight:700;line-height:1;display:block}.stat span{color:var(--text-3);margin-top:6px;font-size:10px;display:block}.stat.muted b{color:var(--text-2)}.icon-btn{background:var(--panel);border:1px solid var(--line);cursor:pointer;width:38px;height:38px;color:var(--text-2);transition:.2s var(--ease);border-radius:12px;place-items:center;display:grid}.icon-btn:hover{color:var(--text);border-color:var(--line-2);background:#191a1d}.icon-btn svg{stroke:currentColor;fill:none;stroke-width:1.7px;width:16px;height:16px}.tabs{flex-wrap:wrap;gap:5px;margin:20px 0 16px;display:flex}.tab{color:var(--text-3);cursor:pointer;transition:.2s var(--ease);background:0 0;border:1px solid #0000;border-radius:11px;align-items:center;gap:7px;padding:8px 14px;font-family:inherit;font-size:12.5px;display:flex}.tab svg{stroke:currentColor;fill:none;stroke-width:1.6px;width:15px;height:15px}.tab:hover{color:var(--text-2);background:#ffffff09}.tab.active{color:var(--text);border-color:var(--line-2);background:#ffffff13}.tab.active svg{stroke:var(--warm)}.grid-wrap{flex:1;min-height:0;padding-right:4px;overflow:hidden auto}.grid-wrap::-webkit-scrollbar{width:6px}.grid-wrap::-webkit-scrollbar-thumb{background:#ffffff14;border-radius:99px}.grid{grid-template-columns:repeat(auto-fill,minmax(255px,1fr));gap:14px;display:grid}.card{cursor:pointer;border:1px solid var(--line);background:linear-gradient(160deg,var(--card-top) 0%,#1b1b1f 55%,var(--card-bottom) 100%);min-height:152px;transition:border-color .25s var(--ease),transform .25s var(--ease),box-shadow .25s var(--ease);border-radius:16px;flex-direction:column;padding:15px 16px;display:flex;position:relative;overflow:hidden}.card:after{content:\"\";pointer-events:none;background:linear-gradient(90deg,#0000,#ffffff24 22% 78%,#0000);height:1px;position:absolute;top:0;bottom:auto;left:0;right:0}.card:hover{border-color:#ffffff24;transform:translateY(-2px);box-shadow:0 14px 34px #00000073}.card.selected{border-color:#ffd9a057;box-shadow:0 0 0 1px #ffd9a024,0 16px 38px #00000080}.card.on{background:radial-gradient(70% 90% at 78% 96%, #ffce8c29, transparent 62%), linear-gradient(160deg,var(--card-top) 0%,#1b1b1f 55%,var(--card-bottom) 100%)}.card-name{letter-spacing:.01em;font-size:14.5px;font-weight:600;line-height:1.3}.card-sub{color:var(--text-3);align-items:center;gap:6px;min-width:0;margin-top:6px;font-size:11px;display:flex}.card-sub .sub-txt{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.card-sub .dot{background:#4a4a50;border-radius:50%;flex-shrink:0;width:5px;height:5px}.card.on .card-sub .dot{background:var(--ok);box-shadow:0 0 0 3px #4ade8024}.card.offline .card-sub .dot{background:#b4553f}.tag{color:var(--text-3);letter-spacing:.03em;background:#ffffff0b;border:1px solid #ffffff12;border-radius:7px;padding:3px 8px;font-size:10px;position:absolute;top:14px;right:14px}.card.on .tag{color:#c8a06a;background:#ffcd8c12;border-color:#ffcd8c33}.plus{width:28px;height:28px;color:var(--text-2);cursor:pointer;transition:.2s var(--ease);z-index:3;background:#ffffff0d;border:1px solid #ffffff1f;border-radius:50%;place-items:center;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Cantarell,Helvetica Neue;font-size:15px;line-height:1;display:grid;position:absolute;bottom:13px;right:13px}.plus:hover{color:#fff;background:#ffffff21;transform:scale(1.08)}.plus:active{transform:scale(.94)}.devart{position:relative}.devart img{object-fit:contain;z-index:1;mix-blend-mode:screen;opacity:.44;filter:grayscale(.6)brightness(.72);width:100%;height:100%;transition:opacity 1.15s var(--ease),filter 1.15s var(--ease),transform 1.15s var(--ease);will-change:opacity,filter;display:block;position:absolute;top:0;bottom:0;left:0;right:0;transform:scale(.96)translateZ(0)}.on .devart img,.devart.lit img{opacity:1;filter:none;transform:scale(1)}.devart:before{content:\"\";background:radial-gradient(ellipse at 50% 62%,var(--art-glow,#ffd6964d),transparent 68%);opacity:0;transition:opacity 1.15s var(--ease);pointer-events:none;border-radius:50%;position:absolute;top:-14%;bottom:-14%;left:-8%;right:-8%}.on .devart:before,.devart.lit:before{opacity:1}.devart[data-art=ac]{--art-glow:#96cdff42}.devart[data-art=purifier]{--art-glow:#8cffc83d}.devart[data-art=cam]{--art-glow:#ffffff29}.devart[data-art=washer]{--art-glow:#b4cdff38}.devart[data-art=downlight],.devart[data-art=strip]{--art-glow:#ffd6a04d}:is(.on .devart,.devart.lit)[data-art=lamp]:before{animation:3.8s ease-in-out infinite breathe}:is(.on .devart,.devart.lit)[data-art=downlight]:before{animation:3.8s ease-in-out infinite breathe}:is(.on .devart,.devart.lit)[data-art=desk]:before{animation:3.8s ease-in-out infinite breathe}:is(.on .devart,.devart.lit)[data-art=strip]:before{animation:3.8s ease-in-out infinite breathe}@keyframes breathe{0%,to{opacity:.68}50%{opacity:1}}.art{pointer-events:none;width:124px;height:82px;position:absolute;bottom:36px;right:11px}.devart .flow{pointer-events:none;z-index:2;width:104px;height:48px;display:none;position:absolute;top:60%;left:50%;translate:-50%}.on .devart[data-art=ac] .flow,.devart.lit[data-art=ac] .flow{display:block}.flow i{background:radial-gradient(circle,var(--flow-c,#78befff2) 0%,transparent 72%);filter:blur(2.5px);opacity:0;width:12px;height:12px;animation:drift var(--dur,2.8s) var(--ease) infinite;animation-delay:var(--d,0s);border-radius:50%;margin-left:-6px;position:absolute;top:0;left:50%}.flow i:first-child{--x:-32px;--dx:-15px;--d:0s;--dur:2.7s}.flow i:nth-child(2){--x:-11px;--dx:-5px;--d:.45s;--dur:3.1s}.flow i:nth-child(3){--x:7px;--dx:5px;--d:.9s;--dur:2.5s}.flow i:nth-child(4){--x:29px;--dx:17px;--d:1.3s;--dur:2.9s}.flow i:nth-child(5){--x:0px;--dx:0px;--d:1.75s;--dur:3.3s}.devart[data-hvac=cool]{--flow-c:#76bcfff5}.devart[data-hvac=heat]{--flow-c:#ff8258f5}.devart[data-hvac=dry]{--flow-c:#76e8d6e6}.devart[data-hvac=fan_only]{--flow-c:#cddeffdb}.devart[data-hvac=auto],.devart[data-hvac=heat_cool]{--flow-c:#96d6ffeb}.devart[data-hvac=cool] .flow i,.devart[data-hvac=dry] .flow i,.devart[data-hvac=fan_only] .flow i,.devart[data-hvac=auto] .flow i,.devart[data-hvac=heat_cool] .flow i{--dy:46px}.devart[data-hvac=heat] .flow{top:16%}.devart[data-hvac=heat] .flow i{--dy:-42px}@keyframes drift{0%{opacity:0;transform:translate(var(--x,0),0) scale(.5)}16%{opacity:.92}62%{opacity:.5}to{opacity:0;transform:translate(calc(var(--x,0) + var(--dx,0)),var(--dy,44px)) scale(1.9)}}.devart .led{width:9px;height:9px;transition:background 1s var(--ease),box-shadow 1s var(--ease);z-index:2;background:#39414d;border-radius:50%;position:absolute;bottom:1px;right:3px;box-shadow:inset 0 0 3px #0009}.on .devart[data-art=washer] .led,.devart.lit[data-art=washer] .led{background:#5be3a5;animation:2.6s ease-in-out infinite pulse}@keyframes pulse{0%,to{box-shadow:0 0 9px 2px #5be3a573}50%{box-shadow:0 0 16px 4px #5be3a5b8}}.detail{border:1px solid var(--line);background:linear-gradient(172deg,#1b1b1f,#121214);border-radius:20px;flex-direction:column;min-height:0;padding:20px;display:flex;position:relative;overflow:hidden}.detail:before{content:\"\";pointer-events:none;background:radial-gradient(70% 100% at 50% 100%,#ffcd8c0f,#0000 70%);height:42%;position:absolute;top:auto;bottom:0;left:0;right:0}.d-head{justify-content:space-between;align-items:flex-start;gap:10px;display:flex;position:relative}.d-title{letter-spacing:-.01em;font-size:17px;font-weight:650}.d-sub{color:var(--text-3);margin-top:6px;font-size:11.5px}.d-stage{flex:1 0 auto;place-items:center;min-height:176px;display:grid;position:relative}.stage-art{place-items:center;width:224px;height:162px;display:grid;position:relative}.d-stage.cam{min-height:0;display:block}.d-stage.cam .stage-art{display:none}.d-stage .cam-live{aspect-ratio:16/9;border:1px solid var(--line-2);width:100%;transition:border-color .18s var(--ease);background:#0a0d12;border-radius:12px;position:relative;overflow:hidden}.d-stage .cam-live:hover{border-color:#4d94ff73}.stage-art .flow{width:150px;height:58px;top:62%}.stage-art .flow i{filter:blur(3px);width:15px;height:15px;margin-left:-7.5px}.stage-art[data-hvac=cool] .flow i,.stage-art[data-hvac=dry] .flow i,.stage-art[data-hvac=fan_only] .flow i,.stage-art[data-hvac=auto] .flow i,.stage-art[data-hvac=heat_cool] .flow i{--dy:62px}.stage-art[data-hvac=heat] .flow{top:14%}.stage-art[data-hvac=heat] .flow i{--dy:-56px}.stage-art .led{width:12px;height:12px;bottom:4px;right:6px}.d-state{text-align:center;color:#e9e9ee;font-size:14px;font-weight:600;position:relative}.d-hint{text-align:center;color:var(--text-3);margin-top:9px;font-size:11.5px;line-height:1.75;position:relative}.d-actions{gap:8px;margin-top:16px;display:flex;position:relative}.btn{cursor:pointer;border:1px solid var(--line-2);color:var(--text);transition:.2s var(--ease);background:#ffffff0f;border-radius:12px;flex:1;padding:11px 0;font-family:inherit;font-size:12.5px;font-weight:600}.btn:hover{background:#ffffff1c}.btn.primary{color:#ffe4bb;background:#ffd9a024;border-color:#ffd9a047}.btn.primary:hover{background:#ffd9a038}.slider-row{margin-top:14px;position:relative}.slider-row label{color:var(--text-3);justify-content:space-between;font-size:10.5px;display:flex}input[type=range]{-webkit-appearance:none;background:var(--track,#ffffff1a);cursor:pointer;border-radius:99px;outline:0;width:100%;height:6px;margin-top:9px}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;background:var(--thumb,var(--warm));cursor:grab;border:1px solid #00000040;border-radius:50%;width:15px;height:15px;box-shadow:0 0 12px #ffd9a073,0 1px 3px #00000080}input[type=range]::-webkit-slider-thumb:active{cursor:grabbing;transform:scale(1.08)}input[type=range]::-moz-range-thumb{background:var(--thumb,var(--warm));border:0;border-radius:50%;width:14px;height:14px;box-shadow:0 0 12px #ffd9a073}.d-body{flex-direction:column;flex:1;min-height:0;padding-right:3px;display:flex;position:relative;overflow:hidden auto}.d-body::-webkit-scrollbar{width:5px}.d-body::-webkit-scrollbar-thumb{background:#ffffff17;border-radius:99px}.ctl{margin-top:15px;position:relative}.ctl-top{justify-content:space-between;align-items:baseline;gap:8px;margin-bottom:2px;display:flex}.ctl-label{color:var(--text-3);letter-spacing:.06em;font-size:10.5px}.ctl-val{color:var(--text);font-variant-numeric:tabular-nums;font-size:11.5px;font-weight:600}.ctl-scale{color:#565660;letter-spacing:.04em;justify-content:space-between;margin-top:5px;font-size:9.5px;display:flex}.seg{flex-wrap:wrap;gap:6px;margin-top:9px;display:flex}.seg button{cursor:pointer;border:1px solid var(--line);min-width:50px;color:var(--text-2);transition:.18s var(--ease);white-space:nowrap;background:#ffffff0b;border-radius:10px;flex:auto;padding:8px 10px;font-family:inherit;font-size:11.5px;font-weight:500}.seg button:hover{color:var(--text);background:#ffffff17}.seg button.on{color:#ffe4bb;background:#ffd9a021;border-color:#ffd9a052}.seg.grid2{grid-template-columns:1fr 1fr;display:grid}.seg.grid2 button{text-overflow:ellipsis;flex:none;min-width:0;overflow:hidden}.stepper{align-items:center;gap:10px;margin-top:6px;display:flex}.stepper button{cursor:pointer;border:1px solid var(--line);width:34px;height:34px;color:var(--text);transition:.18s var(--ease);background:#ffffff0d;border-radius:11px;flex-shrink:0;font-family:inherit;font-size:17px;line-height:1}.stepper button:hover{border-color:var(--line-2);background:#ffffff1c}.stepper button:active{transform:scale(.94)}.stepper .tv{text-align:center;letter-spacing:-.03em;font-variant-numeric:tabular-nums;flex:1;font-size:25px;font-weight:700;line-height:1}.stepper .tv small{color:var(--text-3);margin-left:2px;font-size:11.5px;font-weight:500}.info{border-top:1px solid #ffffff0e;margin-top:15px;padding-top:3px}.info-row{justify-content:space-between;align-items:center;gap:12px;padding:6.5px 0;font-size:11.5px;display:flex}.info-row .k{color:var(--text-3)}.info-row .v{color:var(--text);font-variant-numeric:tabular-nums;text-align:right;font-weight:600}.sw-row{cursor:pointer;-webkit-user-select:none;user-select:none;border-top:1px solid #ffffff0d;justify-content:space-between;align-items:center;gap:12px;padding:10px 0;display:flex}.sw-row:first-child{border-top:0}.sw-row .n{color:var(--text-2);font-size:11.5px}.sw{width:38px;height:21px;transition:.22s var(--ease);background:#ffffff1a;border-radius:99px;flex-shrink:0;position:relative}.sw:after{content:\"\";width:16px;height:16px;transition:.22s var(--ease);background:#8a8a90;border-radius:50%;position:absolute;top:2.5px;left:2.5px}.sw.on{background:#ffd9a052}.sw.on:after{background:#ffe4bb;left:19.5px;box-shadow:0 0 8px #ffd9a099}.swatches{grid-template-columns:repeat(8,1fr);gap:7px;margin-top:11px;display:grid}.sw-btn{aspect-ratio:1;cursor:pointer;transition:.18s var(--ease);border:1px solid #ffffff29;border-radius:50%;padding:0}.sw-btn:hover{border-color:#ffffff73;transform:scale(1.14)}.sw-btn.on{box-shadow:0 0 0 2px #fff9,0 0 12px #ffffff40}.ctl-empty{color:var(--text-3);margin-top:16px;font-size:11.5px;line-height:1.7}.conn{color:var(--text-3);border:1px solid var(--line);z-index:9;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);background:#0000008c;border-radius:99px;align-items:center;gap:7px;padding:6px 14px;font-size:11px;display:flex;position:fixed;bottom:16px;left:50%;transform:translate(-50%)}.conn .dot{background:#b4553f;border-radius:50%;width:6px;height:6px}.conn.live .dot{background:var(--ok);box-shadow:0 0 0 3px #4ade8026}.conn button{color:#8ab4ff;cursor:pointer;font:inherit;background:0 0;border:0;padding:0;text-decoration:underline}@media (max-width:1180px){.main{grid-template-columns:1fr;overflow-y:auto}.detail{min-height:420px}.grid-wrap{overflow:visible}}@media (max-width:720px){.app{grid-template-columns:1fr}.rail{border-right:0;border-bottom:1px solid var(--line);flex-direction:row;padding:8px;overflow-x:auto}.rail-logo,.rail-spacer{display:none}.main{padding:16px}.h1{font-size:24px}}@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}", i = "<div class=\"arch\" aria-hidden=\"true\">\n  <i class=\"arch-slats\"></i>\n  <i class=\"arch-sweep arch-sweep-up\"></i>\n  <i class=\"arch-sweep arch-sweep-floor\"></i>\n  <i class=\"arch-glow\"></i>\n</div>\n<div class=\"app\">\n  <!-- ═══ 左侧导航 ═══ -->\n  <aside class=\"rail\" aria-label=\"主导航\">\n    <div class=\"rail-logo\" title=\"Home Assistant\">\n      <svg viewBox=\"0 0 24 24\"><path d=\"M3 10.5 12 3l9 7.5\"/><path d=\"M5 9.5V21h14V9.5\"/></svg>\n    </div>\n    <!-- 左栏：设备分类（按设备类型） -->\n    <div id=\"rail-nav\"></div>\n    <div class=\"rail-spacer\"></div>\n  </aside>\n\n  <!-- ═══ 主区 ═══ -->\n  <div class=\"main\">\n    <div class=\"col-left\">\n      <header class=\"head\">\n        <div class=\"head-left\">\n          <div class=\"eyebrow\" id=\"eyebrow\">—</div>\n          <div class=\"h1\" id=\"h1\">全部设备</div>\n          <div class=\"h2\" id=\"h2\">连接家里的每一个智能设备</div>\n        </div>\n        <div class=\"head-right\">\n          <div class=\"search\">\n            <svg viewBox=\"0 0 24 24\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m20 20-3.2-3.2\"/></svg>\n            <input id=\"q\" type=\"search\" placeholder=\"搜索设备、房间\" aria-label=\"搜索设备\">\n          </div>\n          <div class=\"stats\">\n            <div class=\"stat\"><b id=\"s-total\">0</b><span>全部设备</span></div>\n            <div class=\"stat\"><b id=\"s-online\">0</b><span>在线设备</span></div>\n            <div class=\"stat muted\"><b id=\"s-off\">0</b><span>离线设备</span></div>\n          </div>\n          <button class=\"icon-btn\" title=\"通知\">\n            <svg viewBox=\"0 0 24 24\"><path d=\"M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8\"/><path d=\"M13.7 21a2 2 0 0 1-3.4 0\"/></svg>\n          </button>\n        </div>\n      </header>\n\n      <nav class=\"tabs\" id=\"tabs\" aria-label=\"设备分类\"></nav>\n\n      <div class=\"grid-wrap\">\n        <div class=\"grid\" id=\"grid\"></div>\n      </div>\n    </div>\n\n    <!-- ═══ 右侧详情 ═══ -->\n    <aside class=\"detail\" aria-label=\"设备详情\">\n      <div class=\"d-head\">\n        <div>\n          <div class=\"d-title\" id=\"d-title\">客厅灯</div>\n          <div class=\"d-sub\" id=\"d-sub\">客厅 · 已开启</div>\n        </div>\n      </div>\n      <div class=\"d-body\">\n        <div class=\"d-stage\" id=\"d-stage\">\n          <div class=\"stage-art devart\" id=\"d-art\" data-art=\"lamp\"></div>\n        </div>\n        <div class=\"d-state\" id=\"d-state\">正在照明</div>\n        <div class=\"d-hint\" id=\"d-hint\">亮度 78%</div>\n        <div class=\"d-actions\">\n          <button class=\"btn\" id=\"d-off\">关闭</button>\n          <button class=\"btn primary\" id=\"d-on\">开启</button>\n        </div>\n        <div id=\"d-controls\"></div>\n      </div>\n    </aside>\n  </div>\n</div>", a = [
	{
		id: "light.shhf_cn_1117056521_slcwb8_s_2_light",
		name: "客厅灯",
		room: "客厅",
		art: "lamp",
		cat: "lights",
		dom: "light"
	},
	{
		id: "light.shhf_cn_1117056521_slcwb8_s_3_ambient_light",
		name: "氛围灯",
		room: "客厅",
		art: "strip",
		cat: "lights",
		dom: "light"
	},
	{
		id: "light.yeelink_cn_553140739_lamp22_s_2",
		name: "显示器挂灯",
		room: "书房",
		art: "desk",
		cat: "lights",
		dom: "light"
	},
	{
		id: "climate.xiaomi_cn_858349871_h09h00",
		name: "小米空调",
		room: "客厅",
		art: "ac",
		cat: "climate",
		dom: "climate",
		sub: [
			"switch.xiaomi_cn_858349871_h09h00_eco_p_2_7",
			"sensor.xiaomi_cn_858349871_h09h00_indoor_pipe_temp_p_12_1",
			"sensor.xiaomi_cn_858349871_h09h00_outdoor_temp_p_12_7",
			"sensor.xiaomi_cn_858349871_h09h00_fault_p_2_3"
		]
	},
	{
		id: "fan.zhimi_cn_462205312_sa2_s_2_air_purifier",
		name: "空气净化器",
		room: "客厅",
		art: "purifier",
		cat: "purifier",
		dom: "fan",
		sub: [
			"sensor.zhimi_cn_462205312_sa2_pm2_5_density_p_3_2",
			"sensor.zhimi_cn_462205312_sa2_temperature_p_3_3",
			"sensor.zhimi_cn_462205312_sa2_relative_humidity_p_3_1",
			"sensor.zhimi_cn_462205312_sa2_filter_life_level_p_4_1",
			"sensor.zhimi_cn_462205312_sa2_filter_life_level_p_5_1"
		]
	},
	{
		id: "switch.chuangmi_cn_1073839718_039c01_on_p_2_1",
		name: "小米摄像头",
		room: "客厅",
		art: "cam",
		cat: "camera",
		dom: "switch",
		sub: [
			"switch.chuangmi_cn_1073839718_039c01_motion_detection_p_5_1",
			"switch.chuangmi_cn_1073839718_039c01_motion_tracking_p_2_8",
			"select.chuangmi_cn_1073839718_039c01_night_shot_p_2_3",
			"select.chuangmi_cn_1073839718_039c01_recording_mode_p_2_7",
			"sensor.chuangmi_cn_1073839718_039c01_status_p_4_1"
		]
	},
	{
		id: "switch.gun_tong_xi_yi_ji_dian_yuan",
		name: "滚筒洗衣机",
		room: "阳台",
		art: "washer",
		cat: "washer",
		dom: "switch",
		sub: [
			"switch.gun_tong_xi_yi_ji_qi_ting",
			"lock.gun_tong_xi_yi_ji_tong_suo",
			"switch.gun_tong_xi_yi_ji_feng_gan",
			"switch.gun_tong_xi_yi_ji_ye_jian_mo_shi",
			"select.gun_tong_xi_yi_ji_cheng_xu",
			"select.gun_tong_xi_yi_ji_wen_du",
			"select.gun_tong_xi_yi_ji_shui_wei",
			"select.gun_tong_xi_yi_ji_piao_xi_ci_shu",
			"select.gun_tong_xi_yi_ji_zhuan_su",
			"select.gun_tong_xi_yi_ji_te_zi",
			"sensor.gun_tong_xi_yi_ji_yun_xing_zhuang_tai",
			"sensor.gun_tong_xi_yi_ji_sheng_yu_shi_jian",
			"sensor.gun_tong_xi_yi_ji_jin_du"
		]
	},
	{
		id: "switch.gun_tong_xi_yi_ji_qi_ting",
		name: "洗衣机启停",
		room: "阳台",
		art: "washer",
		cat: "washer",
		dom: "switch"
	},
	{
		id: "light.demo_kitchen",
		name: "厨房灯",
		room: "厨房",
		art: "lamp",
		cat: "lights",
		dom: "light",
		demo: !0
	},
	{
		id: "climate.shi_zi_si_men_bing_xiang_leng_cang_qu",
		name: "冰箱",
		room: "厨房",
		art: "fridge",
		cat: "appliance",
		dom: "climate",
		sub: [
			"climate.shi_zi_si_men_bing_xiang_leng_dong_qu",
			"climate.shi_zi_si_men_bing_xiang_zuo_bian_wen_qu",
			"climate.shi_zi_si_men_bing_xiang_you_bian_wen_qu",
			"switch.shi_zi_si_men_bing_xiang_zhi_neng_mo_shi",
			"switch.shi_zi_si_men_bing_xiang_jie_neng_mo_shi",
			"switch.shi_zi_si_men_bing_xiang_jia_ri_mo_shi",
			"switch.shi_zi_si_men_bing_xiang_ji_su_leng_dong_mo_shi",
			"switch.shi_zi_si_men_bing_xiang_wei_jing_bao_xian",
			"switch.shi_zi_si_men_bing_xiang_bao_shi_mo_shi",
			"switch.shi_zi_si_men_bing_xiang_bao_xian_mo_shi",
			"switch.shi_zi_si_men_bing_xiang_dian_zi_chu_wei",
			"switch.shi_zi_si_men_bing_xiang_cuo_feng_yong_dian",
			"binary_sensor.shi_zi_si_men_bing_xiang_leng_cang_men_zhuang_tai",
			"binary_sensor.shi_zi_si_men_bing_xiang_leng_dong_men_zhuang_tai",
			"binary_sensor.shi_zi_si_men_bing_xiang_bian_wen_qu_men_zhuang_tai",
			"binary_sensor.shi_zi_si_men_bing_xiang_shi_fou_cuo_wu"
		]
	},
	{
		id: "light.demo_ceiling",
		name: "筒灯",
		room: "客厅",
		art: "downlight",
		cat: "lights",
		dom: "light",
		demo: !0
	},
	{
		id: "media_player.demo_tv",
		name: "电视",
		room: "客厅",
		art: "tv",
		cat: "media",
		dom: "switch",
		demo: !0
	},
	{
		id: "media_player.demo_speaker",
		name: "音箱",
		room: "客厅",
		art: "speaker",
		cat: "media",
		dom: "switch",
		demo: !0
	}
], o = {
	"switch.xiaomi_cn_858349871_h09h00_eco_p_2_7": "ECO 节能",
	"sensor.xiaomi_cn_858349871_h09h00_indoor_pipe_temp_p_12_1": "室内管温",
	"sensor.xiaomi_cn_858349871_h09h00_outdoor_temp_p_12_7": "室外温度",
	"sensor.xiaomi_cn_858349871_h09h00_fault_p_2_3": "故障状态",
	"sensor.zhimi_cn_462205312_sa2_pm2_5_density_p_3_2": "PM2.5",
	"sensor.zhimi_cn_462205312_sa2_temperature_p_3_3": "室温",
	"sensor.zhimi_cn_462205312_sa2_relative_humidity_p_3_1": "湿度",
	"sensor.zhimi_cn_462205312_sa2_filter_life_level_p_4_1": "滤芯寿命 1",
	"sensor.zhimi_cn_462205312_sa2_filter_life_level_p_5_1": "滤芯寿命 2",
	"switch.chuangmi_cn_1073839718_039c01_motion_detection_p_5_1": "移动侦测",
	"switch.chuangmi_cn_1073839718_039c01_motion_tracking_p_2_8": "移动追踪",
	"select.chuangmi_cn_1073839718_039c01_night_shot_p_2_3": "夜视模式",
	"select.chuangmi_cn_1073839718_039c01_recording_mode_p_2_7": "录制模式",
	"sensor.chuangmi_cn_1073839718_039c01_status_p_4_1": "设备状态",
	"switch.gun_tong_xi_yi_ji_qi_ting": "启动 / 暂停",
	"lock.gun_tong_xi_yi_ji_tong_suo": "童锁",
	"switch.gun_tong_xi_yi_ji_feng_gan": "风干",
	"switch.gun_tong_xi_yi_ji_ye_jian_mo_shi": "夜间模式",
	"select.gun_tong_xi_yi_ji_cheng_xu": "洗衣程序",
	"select.gun_tong_xi_yi_ji_wen_du": "水温",
	"select.gun_tong_xi_yi_ji_shui_wei": "水位",
	"select.gun_tong_xi_yi_ji_piao_xi_ci_shu": "漂洗次数",
	"select.gun_tong_xi_yi_ji_zhuan_su": "脱水转速",
	"select.gun_tong_xi_yi_ji_te_zi": "特渍洗",
	"sensor.gun_tong_xi_yi_ji_yun_xing_zhuang_tai": "运行状态",
	"sensor.gun_tong_xi_yi_ji_sheng_yu_shi_jian": "剩余时间",
	"sensor.gun_tong_xi_yi_ji_jin_du": "进度"
}, s = {
	standard: "标准洗",
	normal: "标准洗",
	daily: "日常洗",
	cotton: "棉织物",
	"cotton 60": "棉织物 60℃",
	mix: "混合洗",
	mixed: "混合洗",
	synthetic: "化纤",
	synthetics: "化纤",
	wool: "羊毛",
	woolens: "羊毛",
	silk: "真丝",
	delicate: "轻柔",
	gentle: "轻柔",
	"hand wash": "手洗",
	quick: "快洗",
	"quick wash": "快洗",
	express: "快洗",
	rapid: "快洗",
	"super quick": "超快洗",
	bedding: "大件",
	bulky: "大件",
	large: "大件",
	duvet: "被褥",
	blanket: "毛毯",
	down: "羽绒服",
	"down jacket": "羽绒服",
	"drum clean": "筒自洁",
	"tub clean": "筒自洁",
	"self clean": "筒自洁",
	"baby care": "婴儿洗",
	baby: "婴儿洗",
	shirt: "衬衫",
	shirts: "衬衫",
	jeans: "牛仔",
	sport: "运动服",
	sports: "运动服",
	sportswear: "运动服",
	underwear: "内衣",
	dark: "深色洗",
	"dark garment": "深色洗",
	intensive: "强力洗",
	heavy: "强力洗",
	eco: "节能洗",
	"eco 40-60": "节能 40-60",
	steam: "蒸汽洗",
	hygiene: "除菌洗",
	allergy: "除螨洗",
	"rinse+spin": "漂洗+脱水",
	"rinse & spin": "漂洗+脱水",
	"rinse and spin": "漂洗+脱水",
	spin: "单脱水",
	"spin only": "单脱水",
	"air wash": "空气洗",
	"air refresh": "空气洗",
	refresh: "焕新",
	"cold wash": "冷洗",
	cold: "常温",
	"tap cold": "常温",
	warm: "温水",
	hot: "热水",
	"very hot": "高温",
	"no heat": "不加热",
	low: "低",
	mid: "中",
	medium: "中",
	high: "高",
	"very low": "超低",
	"extra high": "超高",
	"no spin": "不脱水",
	max: "最高",
	min: "最低",
	none: "无",
	blood: "血渍",
	oil: "油渍",
	grease: "油渍",
	mud: "泥渍",
	grass: "草渍",
	wine: "酒渍",
	coffee: "咖啡渍",
	tea: "茶渍",
	ink: "墨渍",
	sweat: "汗渍",
	sauce: "酱渍",
	milk: "奶渍",
	chocolate: "巧克力渍",
	makeup: "化妆渍",
	rust: "铁锈渍",
	fruit: "果渍",
	stain: "特渍",
	auto: "自动",
	automatic: "自动",
	manual: "手动",
	on: "开",
	off: "关",
	yes: "是",
	no: "否",
	silent: "静音",
	sleep: "睡眠",
	night: "夜间",
	turbo: "强力",
	strong: "强力",
	favorite: "最爱",
	idle: "待机",
	standby: "待机",
	running: "运行中",
	washing: "洗涤中",
	rinsing: "漂洗中",
	spinning: "脱水中",
	drying: "烘干中",
	finished: "已完成",
	paused: "已暂停",
	stopped: "已停止"
};
function c(e) {
	let t = String(e).toLowerCase();
	return /(wen_du|water_temp|temperature|_temp$)/.test(t) ? "temp" : /(zhuan_su|spin|rpm)/.test(t) ? "rpm" : /(ci_shu|rinse)/.test(t) ? "times" : "";
}
function l(e, t) {
	let n = String(e ?? ""), r = n.trim().toLowerCase(), i = n.match(/-?\d+(?:\.\d+)?/);
	return i && t === "temp" ? `${i[0]} ℃` : i && t === "rpm" ? `${i[0]} 转` : i && t === "times" ? `${i[0]} 次` : s[r] || n;
}
function u(e) {
	if (o[e]) return o[e];
	let t = a.find((t) => t.id === e);
	return t ? t.name : (String(e).split(".")[1] || e).replace(/_p_\d+_\d+$/, "").split("_").slice(-2).join(" ");
}
var d = [
	{
		key: "all",
		label: "全部设备",
		icon: "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"2\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"2\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"2\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"2\"/>"
	},
	{
		key: "lights",
		label: "灯光",
		icon: "<path d=\"M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3Z\"/><path d=\"M9 19h6\"/>"
	},
	{
		key: "climate",
		label: "空调",
		icon: "<rect x=\"3\" y=\"6\" width=\"18\" height=\"7\" rx=\"2\"/><path d=\"M7 17c0 1.5 1 2 2 2M13 17c0 1.5 1 2 2 2\"/>"
	},
	{
		key: "purifier",
		label: "净化器",
		icon: "<rect x=\"7\" y=\"4\" width=\"10\" height=\"16\" rx=\"3\"/><circle cx=\"12\" cy=\"10\" r=\"2.4\"/>"
	},
	{
		key: "camera",
		label: "摄像头",
		icon: "<rect x=\"3\" y=\"7\" width=\"13\" height=\"10\" rx=\"3\"/><circle cx=\"9.5\" cy=\"12\" r=\"2.4\"/><path d=\"m16 11 5-2v6l-5-2\"/>"
	},
	{
		key: "washer",
		label: "洗衣机",
		icon: "<rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"3\"/><circle cx=\"12\" cy=\"14\" r=\"4\"/>"
	}
], f = null, p = (e) => f ? f.getElementById(e) : null, m = null, h = {}, g = "all", _ = "all", v = a[0].id, y = "";
function ee() {
	return ["all", ...new Set(a.map((e) => e.room))];
}
async function b(e, t, n) {
	if (!m) return;
	let { entity_id: r, ...i } = n;
	try {
		await m.callService(e, t, i, { entity_id: r });
	} catch (n) {
		console.warn("[ha-dash] 调用失败", e, t, i, n);
	}
}
function te() {
	return [.../* @__PURE__ */ new Set([...a.map((e) => e.id), ...a.flatMap((e) => e.sub || [])])];
}
function ne() {
	let e = "";
	for (let t of te()) {
		let n = h[t];
		e += n ? n.state + "|" + (n.last_updated || "") + ";" : "-;";
	}
	return e;
}
function re(e) {
	m = e, h = e.states || {}, ie();
}
function ie() {
	let e = Object.values(h).filter((e) => e?.entity_id?.startsWith("camera."));
	for (let t of e) {
		let e = t.entity_id;
		if (a.some((t) => t.id === e)) continue;
		let n = (e.match(/\d{6,}/) || [])[0], r = n ? a.find((e) => String(e.id).includes(n)) : null;
		r ? r.cam || (r.cam = e) : a.push({
			id: e,
			name: t.attributes?.friendly_name || "摄像头",
			room: "未分配",
			art: "cam",
			cat: "camera",
			dom: "camera"
		});
	}
}
var x = null, S = "";
function ae(t) {
	let r = p("d-stage");
	if (!r) return;
	let i = n(t), a = t.stream || "", o = i ? "e:" + i : a ? "u:" + a : "";
	if (!o) {
		x && (x.destroy(), x = null, S = ""), r.classList.remove("cam");
		let e = r.querySelector(".cam-live");
		e && e.remove();
		return;
	}
	if (r.classList.add("cam"), o === S) return;
	x && (x.destroy(), x = null), S = o;
	let s = r.querySelector(".cam-live");
	s || (s = document.createElement("div"), s.className = "cam-live", r.appendChild(s)), s.innerHTML = "", x = e(s, {
		hass: m,
		entity: i || void 0,
		streamUrl: a || void 0
	});
}
function C(e) {
	return h[e] || {
		state: "unknown",
		attributes: {}
	};
}
var w = (e) => [
	"on",
	"cool",
	"heat",
	"heat_cool",
	"auto",
	"fan_only",
	"dry",
	"open",
	"unlocked"
].includes(C(e).state), T = (e) => ["unavailable", "unknown"].includes(C(e).state), E = (e) => String(e).split(".")[0], D = (e) => String(e ?? "").replace(/[&<>"']/g, (e) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
})[e]);
function O(e, t, n) {
	let r = C(e).attributes || {};
	return r[t] === void 0 || r[t] === null ? n : r[t];
}
function oe(e) {
	let t = Math.max(1e3, Math.min(4e4, e)) / 100, n, r, i;
	t <= 66 ? (n = 255, r = 99.4708025861 * Math.log(t) - 161.1195681661) : (n = 329.698727446 * (t - 60) ** -.1332047592, r = 288.1221695283 * (t - 60) ** -.0755148492), i = t >= 66 ? 255 : t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.0447927307;
	let a = (e) => Math.max(0, Math.min(255, Math.round(e)));
	return [
		a(n),
		a(r),
		a(i)
	];
}
function se([e, t]) {
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
var k = {
	off: "关闭",
	cool: "制冷",
	heat: "制热",
	heat_cool: "自动",
	auto: "自动",
	dry: "除湿",
	fan_only: "送风"
}, A = {
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
}, ce = {
	on: "开",
	off: "关",
	vertical: "上下",
	horizontal: "左右",
	both: "上下+左右"
}, le = {
	auto: "自动",
	sleep: "睡眠",
	favorite: "最爱",
	normal: "标准",
	none: "无"
}, ue = [
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
function j(e, t) {
	let n = C(e).state;
	return n === "unavailable" ? "离线" : n === "unknown" ? "未知" : t === "climate" ? {
		cool: "制冷中",
		heat: "制热中",
		fan_only: "送风中",
		dry: "除湿中",
		auto: "自动运行",
		heat_cool: "自动运行",
		off: "已关闭"
	}[n] || n : t === "lock" ? n === "locked" ? "已上锁" : "已解锁" : t === "camera" ? {
		idle: "待机",
		recording: "录像中",
		streaming: "串流中",
		on: "监控中",
		off: "已关闭"
	}[n] || n : n === "on" ? "已开启" : n === "off" ? "已关闭" : n;
}
function de() {
	let e = p("tabs");
	e.innerHTML = ee().map((e) => `
    <button class="tab ${e === _ ? "active" : ""}" data-room="${e}">
      ${e === "all" ? "<svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"2\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"2\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"2\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"2\"/></svg>" : "<svg viewBox=\"0 0 24 24\"><path d=\"M3 10.5 12 3l9 7.5\"/><path d=\"M5 9.5V21h14V9.5\"/></svg>"}
      <span>${e === "all" ? "全部房间" : e}</span>
    </button>`).join(""), e.querySelectorAll(".tab").forEach((e) => e.onclick = () => {
		_ = e.dataset.room, y = "", p("q").value = "", L(), Q();
	});
}
var fe = "<path d=\"M12 3 3 7.5v9L12 21l9-4.5v-9z\"/><path d=\"m3 7.5 9 4.5 9-4.5\"/><path d=\"M12 12v9\"/>";
function M() {
	let e = p("rail-nav");
	e.style.cssText = "display:flex;flex-direction:column;gap:4px;align-items:center", e.innerHTML = `
    <button class="rail-item ${g === "__floor" ? "active" : ""}" data-cat="__floor" title="3D 户型">
      <svg viewBox="0 0 24 24">${fe}</svg>3DHome
    </button>
    <div class="rail-sep"></div>` + d.map((e) => `
    <button class="rail-item ${e.key === g ? "active" : ""}" data-cat="${e.key}">
      <svg viewBox="0 0 24 24">${e.icon}</svg>${e.label}
    </button>`).join(""), e.querySelectorAll("[data-cat]").forEach((e) => e.onclick = () => {
		e.dataset.cat === "__floor" ? pe() : (F(), g = e.dataset.cat, L(), Q());
	});
}
var N = null, P = !1;
async function pe() {
	if (P) F();
	else {
		if (!N) {
			let { FloorHome: e } = await import("./chunk-D5reS7Mu.js");
			N = new e(f.querySelector(".main"), {
				devices: a,
				callService: b
			});
		}
		N.el.hidden = !1, P = !0, g = "__floor", N.setHass(m), M();
	}
}
function F() {
	P && (P = !1, N && (N.el.hidden = !0), g === "__floor" && (g = "all"), M());
}
function I() {
	return a.filter((e) => (g === "all" || e.cat === g) && (_ === "all" || e.room === _) && (!y || (e.name + e.room).toLowerCase().includes(y)));
}
function L() {
	let e = I()[0];
	e && (v = e.id);
}
var me = import.meta.url.replace(/[^/]*$/, ""), he = (e) => `${me}img/${e}.webp`, ge = {
	ac: "<div class=\"flow\"><i></i><i></i><i></i><i></i><i></i></div>",
	washer: "<div class=\"led\"></div>"
};
function R(e) {
	if (E(e) !== "climate") return "off";
	let t = C(e).state;
	return t === "off" || t === "unavailable" ? "off" : t;
}
function z(e) {
	return `<img src="${he(e)}" alt="" draggable="false" decoding="async">` + (ge[e] || "");
}
function B() {
	let e = I(), t = p("grid"), n = e.map((e) => e.id).join("|");
	t.dataset.key !== n && (t.innerHTML = e.map((e) => `
      <article class="card" data-id="${e.id}" tabindex="0" role="button">
        <span class="tag"></span>
        <div class="card-name">${e.name}</div>
        <div class="card-sub"><span class="dot"></span><span class="sub-txt"></span></div>
        <div class="art devart" data-art="${e.art}">${z(e.art)}</div>
        <button class="plus" data-plus="${e.id}" aria-label="更多操作">+</button>
      </article>`).join("") || "<div style=\"color:var(--text-3);font-size:12.5px;padding:20px 2px\">没有匹配的设备</div>", t.dataset.key = n, _e(t));
	let r = t.children;
	e.forEach((e, t) => {
		let n = r[t];
		if (!n || n.dataset.id !== e.id) return;
		let i = T(e.id), a = w(e.id) && !i;
		n.classList.toggle("on", a), n.classList.toggle("offline", i), n.classList.toggle("selected", e.id === v), n.querySelector(".tag").textContent = i ? "离线" : "已接入", n.querySelector(".sub-txt").textContent = `${e.room} · ${J(e)}`;
		let o = n.querySelector(".art");
		o && (o.dataset.hvac = R(e.id)), n.setAttribute("aria-label", `${e.name}，${j(e.id, e.dom)}`);
	});
}
function _e(e) {
	e.querySelectorAll(".card").forEach((e) => {
		e.onclick = (t) => {
			t.target.closest("[data-plus]") || (v = e.dataset.id, H = 0, Q(), Y(!0));
		}, e.onkeydown = (t) => {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), v = e.dataset.id, H = 0, Q(), Y(!0));
		};
	}), e.querySelectorAll("[data-plus]").forEach((e) => {
		e.onclick = (t) => {
			t.stopPropagation(), v = e.dataset.plus, H = 0, Q(), Y(!0);
		};
	});
}
function V() {
	let e = a.filter((e) => !e.demo).length, t = a.filter((e) => !e.demo && T(e.id)).length;
	p("s-total").textContent = e, p("s-online").textContent = e - t, p("s-off").textContent = t;
	let n = /* @__PURE__ */ new Date(), r = "日一二三四五六"[n.getDay()];
	p("eyebrow").textContent = `${n.getMonth() + 1}月${n.getDate()}日 周${r} · ${String(n.getHours()).padStart(2, "0")}:${String(n.getMinutes()).padStart(2, "0")}`;
}
var H = 0, U = null, W = (e = 1200) => {
	H = Date.now() + e;
};
function G(e, t) {
	let n = (e.sub || []).find((e) => String(e).includes(t));
	return n ? C(n).state : null;
}
function K(e, t, n, r) {
	let { domain: i, service: a, labels: o = {} } = r || {}, s = c(e);
	return `<div class="${t.some((e) => String(e).length > 5) ? "seg grid2" : "seg"}">${t.map((t) => `<button class="${(String(t) === String(n) ? " on" : "").trim()}" data-act="opt" data-entity="${e}" data-domain="${i}"
              data-service="${a}" data-option="${D(t)}">${D(o[t] || l(t, s))}</button>`).join("")}</div>`;
}
function ve(e) {
	let t = C(e).state, n = t === "on" || t === "locked" || t === "open", r = t === "unavailable" ? "离线" : t === "locked" ? "已上锁" : n ? "开" : "关";
	return `<div class="sw-row" data-act="toggle" data-entity="${e}" role="button" tabindex="0">
    <span class="n">${D(u(e))}</span>
    <span style="display:flex;align-items:center;gap:8px">
      <span style="font-size:10.5px;color:var(--text-3)">${r}</span>
      <span class="sw${n ? " on" : ""}"></span>
    </span></div>`;
}
function q(e) {
	let t = C(e), n = t.attributes?.unit_of_measurement || "", r = t.state === "unavailable" || t.state === "unknown" ? "—" : t.state, i = r === "—" ? r : l(r);
	return `<div class="info-row"><span class="k">${D(u(e))}</span><span class="v">${D(i)}${n && i !== "—" ? " " + D(n) : ""}</span></div>`;
}
function ye(e) {
	let t = C(e).attributes || {}, n = t.supported_color_modes || [], r = "";
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
		let n = t.brightness == null ? 0 : Math.round(t.brightness / 255 * 100);
		r += `<div class="ctl">
      <div class="ctl-top"><span class="ctl-label">亮度</span><span class="ctl-val" id="v-br">${n}%</span></div>
      <input type="range" min="1" max="100" step="1" value="${n}"
             data-act="range" data-kind="brightness" data-entity="${e}"
             style="--track:linear-gradient(90deg,#26262b,#6b5a3a,#ffd9a0);--thumb:#ffe4bb">
    </div>`;
	}
	if (n.includes("color_temp") || t.color_temp_kelvin != null || t.color_temp != null) {
		let n = t.min_color_temp_kelvin || (t.min_mireds ? Math.round(1e6 / t.min_mireds) : 2200), i = t.max_color_temp_kelvin || (t.max_mireds ? Math.round(1e6 / t.max_mireds) : 6500), a = t.color_temp_kelvin || (t.color_temp ? Math.round(1e6 / t.color_temp) : Math.round((n + i) / 2)), o = (e) => `rgb(${oe(e).join(",")}) ${Math.round((e - n) / Math.max(1, i - n) * 100)}%`;
		r += `<div class="ctl">
      <div class="ctl-top"><span class="ctl-label">色温</span><span class="ctl-val" id="v-ct">${a}K</span></div>
      <input type="range" min="${n}" max="${i}" step="50" value="${a}"
             data-act="range" data-kind="color_temp" data-entity="${e}"
             style="--track:linear-gradient(90deg,${o(n)},${o(Math.round((n + i) / 2))},${o(i)});--thumb:#fff6e6">
      <div class="ctl-scale"><span>暖 ${n}K</span><span>冷 ${i}K</span></div>
    </div>`;
	}
	if (n.some((e) => [
		"hs",
		"rgb",
		"rgbw",
		"rgbww",
		"xy"
	].includes(e))) {
		let n = t.rgb_color || (t.hs_color ? se(t.hs_color) : null);
		r += `<div class="ctl">
      <div class="ctl-top"><span class="ctl-label">颜色</span><span class="ctl-val">${n ? "彩色模式" : "—"}</span></div>
      <div class="swatches">${ue.map((t) => `<button class="sw-btn${n && t.every((e, t) => Math.abs(e - n[t]) < 24) ? " on" : ""}" data-act="rgb" data-entity="${e}"
                  data-rgb="${t.join(",")}" style="background:rgb(${t.join(",")})"
                  aria-label="颜色 ${t.join(",")}"></button>`).join("")}</div>
    </div>`;
	}
	return r;
}
function be(e) {
	let t = C(e).attributes || {}, n = C(e).state, r = t.temperature == null ? 26 : t.temperature, i = t.min_temp == null ? 16 : t.min_temp, a = t.max_temp == null ? 30 : t.max_temp, o = t.target_temp_step || .5, s = `<div class="ctl">
    <div class="ctl-top"><span class="ctl-label">目标温度</span><span class="ctl-val">室温 ${t.current_temperature == null ? "—" : `${t.current_temperature}°C`}</span></div>
    <div class="stepper">
      <button data-act="temp" data-entity="${e}" data-delta="-${o}" aria-label="降低温度">−</button>
      <div class="tv" id="v-temp">${r}<small>°C</small></div>
      <button data-act="temp" data-entity="${e}" data-delta="${o}" aria-label="升高温度">+</button>
    </div>
    <input type="range" min="${i}" max="${a}" step="${o}" value="${r}"
           data-act="range" data-kind="temperature" data-entity="${e}"
           style="--track:linear-gradient(90deg,#4a7bd0,#8fb0d8,#f2c07a);--thumb:#ffd9a0">
  </div>`;
	return t.hvac_modes?.length && (s += `<div class="ctl"><div class="ctl-top"><span class="ctl-label">模式</span></div>
      ${K(e, t.hvac_modes, n, {
		domain: "climate",
		service: "set_hvac_mode",
		labels: k
	})}</div>`), t.fan_modes?.length && (s += `<div class="ctl"><div class="ctl-top"><span class="ctl-label">风速</span></div>
      ${K(e, t.fan_modes, t.fan_mode, {
		domain: "climate",
		service: "set_fan_mode",
		labels: A
	})}</div>`), t.swing_modes?.length && (s += `<div class="ctl"><div class="ctl-top"><span class="ctl-label">摆风</span></div>
      ${K(e, t.swing_modes, t.swing_mode, {
		domain: "climate",
		service: "set_swing_mode",
		labels: ce
	})}</div>`), t.preset_modes?.length && (s += `<div class="ctl"><div class="ctl-top"><span class="ctl-label">预设</span></div>
      ${K(e, t.preset_modes, t.preset_mode, {
		domain: "climate",
		service: "set_preset_mode",
		labels: le
	})}</div>`), s;
}
function xe(e) {
	let t = C(e).attributes || {}, n = t.percentage == null ? 0 : t.percentage, r = `<div class="ctl">
    <div class="ctl-top"><span class="ctl-label">风速</span><span class="ctl-val" id="v-fan">${n}%</span></div>
    <input type="range" min="0" max="100" step="${t.percentage_step || 1}" value="${n}"
           data-act="range" data-kind="percentage" data-entity="${e}"
           style="--track:linear-gradient(90deg,#26262b,#3f7a63,#8cf0c4);--thumb:#b6ffe0">
  </div>`;
	return t.preset_modes?.length && (r += `<div class="ctl"><div class="ctl-top"><span class="ctl-label">模式</span></div>
      ${K(e, t.preset_modes, t.preset_mode, {
		domain: "fan",
		service: "set_preset_mode",
		labels: le
	})}</div>`), t.oscillating !== void 0 && (r += `<div class="info"><div class="sw-row" data-act="osc" data-entity="${e}" role="button" tabindex="0">
      <span class="n">摆风 / 摇头</span><span class="sw${t.oscillating ? " on" : ""}"></span></div></div>`), r;
}
function Se(e) {
	let t = C(e).attributes || {}, n = t.options || [], r = t.current_option || C(e).state;
	if (!n.length) return `<div class="info">${q(e)}</div>`;
	let i = c(e);
	return `<div class="ctl">
    <div class="ctl-top"><span class="ctl-label">${D(u(e))}</span><span class="ctl-val">${D(l(r, i))}</span></div>
    ${K(e, n, r, {
		domain: "select",
		service: "select_option"
	})}
  </div>`;
}
function Ce(e) {
	let t = e.id, n = E(t), r = "";
	n === "light" ? r += ye(t) : n === "climate" ? r += be(t) : n === "fan" && (r += xe(t));
	let i = e.sub || [], a = (e) => i.filter((t) => e.includes(E(t))), o = a([
		"switch",
		"input_boolean",
		"lock"
	]);
	o.length && (r += `<div class="info">${o.map(ve).join("")}</div>`), a(["select"]).forEach((e) => {
		r += Se(e);
	});
	let s = a(["sensor", "binary_sensor"]);
	return s.length && (r += `<div class="info">${s.map(q).join("")}</div>`), r || "<div class=\"ctl-empty\">这个设备没有可调参数，只有开 / 关。</div>";
}
function J(e) {
	let t = e.id, n = C(t).attributes || {}, r = C(t).state;
	if (r === "unavailable" || r === "unknown") return "设备离线";
	let i = E(t);
	if (i === "light") {
		if (r !== "on") return "当前未开启";
		let e = [];
		return n.brightness != null && e.push(`亮度 ${Math.round(n.brightness / 255 * 100)}%`), n.color_temp_kelvin ? e.push(`色温 ${n.color_temp_kelvin}K`) : n.color_temp && e.push(`色温 ${Math.round(1e6 / n.color_temp)}K`), n.hs_color && !n.color_temp_kelvin && e.push("彩色"), e.join(" · ") || "已开启";
	}
	if (i === "climate") {
		if (r === "off") return "当前未开启";
		let e = k[r] || r, t = n.fan_mode ? ` · 风速 ${A[n.fan_mode] || n.fan_mode}` : "";
		return `${n.temperature == null ? "—" : n.temperature + "°C"} · ${e}${t}`;
	}
	if (i === "fan") {
		if (r !== "on") return "当前未开启";
		let t = [];
		n.percentage != null && t.push(`风速 ${n.percentage}%`);
		let i = G(e, "pm2_5");
		return i && i !== "unavailable" && t.push(`PM2.5 ${i}`), t.join(" · ") || "已开启";
	}
	if (e.cat === "washer") {
		if (r !== "on") return "电源未接通";
		let t = [], n = G(e, "yun_xing_zhuang_tai"), i = G(e, "sheng_yu_shi_jian");
		if (n && n !== "unavailable" && n !== "unknown" && t.push(l(n)), i && i !== "unavailable" && i !== "unknown" && i !== "—") {
			let e = String(i).match(/\d+(?:\.\d+)?/);
			e && t.push(`剩余 ${e[0]} 分钟`);
		}
		return t.join(" · ") || "已通电";
	}
	if (e.cat === "camera") {
		if (E(e.id) === "camera") return "点画面看全屏";
		if (r !== "on") return "当前未开启";
		let t = G(e, "recording_mode");
		return t && t !== "unavailable" ? `录像 ${l(t)}` : "监控中";
	}
	return r === "on" ? "已开启" : "已关闭";
}
function we(e) {
	let t = C(e.id).state;
	if (t === "unavailable") return "设备离线";
	if (E(e.id) === "climate") return t === "off" ? "空调已关闭" : {
		cool: "正在制冷",
		heat: "正在制热",
		dry: "正在除湿",
		fan_only: "正在送风",
		auto: "自动运行",
		heat_cool: "自动运行"
	}[t] || t;
	if (e.cat === "washer") {
		if (t !== "on") return "电源已关闭";
		let n = G(e, "yun_xing_zhuang_tai");
		return n && n !== "unavailable" && n !== "unknown" ? n : "待机中";
	}
	return e.cat === "purifier" ? t === "on" ? "正在净化" : "当前关闭" : e.cat === "camera" ? E(e.id) === "camera" ? {
		idle: "待机",
		recording: "正在录像",
		streaming: "正在串流"
	}[t] || (t === "on" ? "监控中" : t) : t === "on" ? "监控中" : "当前关闭" : t === "on" ? "正在照明" : "当前关闭";
}
function Y(e) {
	if (!e && Date.now() < H) {
		clearTimeout(U), U = setTimeout(() => Y(), H - Date.now() + 40);
		return;
	}
	let r = a.find((e) => e.id === v) || a[0], i = w(r.id) && !T(r.id);
	p("d-title").textContent = r.name, p("d-sub").textContent = `${r.room} · ${j(r.id, r.dom)}`;
	let o = p("d-art");
	o.dataset.art = r.art, o.dataset.hvac = R(r.id), o.classList.toggle("lit", i), o.dataset.built !== r.art && (o.innerHTML = z(r.art), o.dataset.built = r.art), p("d-state").textContent = we(r), p("d-hint").textContent = J(r), ae(r);
	let s = p("d-stage")?.querySelector(".cam-live");
	if (s) {
		let e = n(r);
		s.style.cursor = "zoom-in", s.onclick = () => t({
			hass: m,
			entity: e || void 0,
			streamUrl: r.stream || void 0,
			title: r.name
		});
	}
	let c = E(r.id), l = r.cat === "washer" && String(r.id).includes("dian_yuan"), u = c === "climate" ? "开机" : l ? "通电" : "开启", d = c === "climate" ? "关机" : l ? "断电" : "关闭", f = p("d-on"), h = p("d-off");
	f.textContent = u, h.textContent = d, f.classList.toggle("primary", !i), h.classList.toggle("primary", i);
	let g = c === "camera";
	f.hidden = g, h.hidden = g, p("d-controls").innerHTML = Ce(r);
}
var X = null;
function Te(e) {
	let t = E(e), n = C(e).state;
	return t === "lock" ? b("lock", n === "locked" ? "unlock" : "lock", { entity_id: e }) : t === "cover" ? b("cover", n === "open" ? "close_cover" : "open_cover", { entity_id: e }) : b(t, [
		"on",
		"cool",
		"heat",
		"heat_cool",
		"auto",
		"fan_only",
		"dry"
	].includes(n) ? "turn_off" : "turn_on", { entity_id: e });
}
function Z(e, t, n) {
	if (e === "brightness") return b("light", "turn_on", {
		entity_id: t,
		brightness_pct: n
	});
	if (e === "percentage") return b("fan", "set_percentage", {
		entity_id: t,
		percentage: n
	});
	if (e === "temperature") return b("climate", "set_temperature", {
		entity_id: t,
		temperature: n
	});
	if (e === "color_temp") {
		let e = C(t).attributes || {};
		return b("light", "turn_on", {
			entity_id: t,
			...e.color_temp_kelvin != null || e.color_temp == null ? { color_temp_kelvin: n } : { color_temp: Math.round(1e6 / n) }
		});
	}
}
function Ee(e) {
	let t = e.target.closest("[data-act]");
	if (!t) return;
	let n = t.dataset.act, r = t.dataset.entity;
	if (n === "opt") {
		let e = t.dataset.service, n = t.dataset.domain, i = t.dataset.option, a = { entity_id: r };
		e === "select_option" ? a.option = i : e === "set_hvac_mode" ? a.hvac_mode = i : e === "set_fan_mode" ? a.fan_mode = i : e === "set_swing_mode" ? a.swing_mode = i : e === "set_preset_mode" && (a.preset_mode = i), W(1200), b(n, e, a);
	} else if (n === "toggle") W(1200), Te(r);
	else if (n === "osc") W(1200), b("fan", "oscillate", {
		entity_id: r,
		oscillating: !O(r, "oscillating", !1)
	});
	else if (n === "temp") {
		let e = Number(t.dataset.delta), n = Number(O(r, "temperature", 26)), i = Number(O(r, "min_temp", 16)), a = Number(O(r, "max_temp", 30)), o = Math.round(Math.min(a, Math.max(i, n + e)) * 10) / 10;
		W(1400);
		let s = p("v-temp");
		s && (s.innerHTML = `${o}<small>°C</small>`);
		let c = f.querySelector("#d-controls input[data-kind=\"temperature\"]");
		c && (c.value = o), b("climate", "set_temperature", {
			entity_id: r,
			temperature: o
		});
	} else n === "rgb" && (W(1200), b("light", "turn_on", {
		entity_id: r,
		rgb_color: t.dataset.rgb.split(",").map(Number)
	}));
}
function De(e) {
	let t = e.target;
	if (t.dataset.act !== "range") return;
	let n = t.dataset.kind, r = Number(t.value), i = t.dataset.entity, a = {
		brightness: ["v-br", "%"],
		color_temp: ["v-ct", "K"],
		percentage: ["v-fan", "%"]
	}[n];
	if (a) {
		let e = p(a[0]);
		e && (e.textContent = r + a[1]);
	}
	if (n === "temperature") {
		let e = p("v-temp");
		e && (e.innerHTML = `${r}<small>°C</small>`);
	}
	W(1600), clearTimeout(X), X = setTimeout(() => Z(n, i, r), 150);
}
function Oe(e) {
	let t = e.target;
	t.dataset.act === "range" && (clearTimeout(X), W(1600), Z(t.dataset.kind, t.dataset.entity, Number(t.value)));
}
function Q() {
	M(), de(), B(), V(), Y();
	let e = d.find((e) => e.key === g);
	p("h1").textContent = _ === "all" ? "全部设备" : _;
	let t = I().length;
	p("h2").textContent = t + " 个设备" + (g === "all" || !e ? "" : " · " + e.label);
}
function ke() {
	let e = p("q");
	e && e.addEventListener("input", (e) => {
		y = e.target.value.trim().toLowerCase(), B();
	});
	let t = p("d-on"), n = p("d-off");
	t && (t.onclick = () => {
		let e = a.find((e) => e.id === v);
		if (!e) return;
		W(1200);
		let t = E(e.id);
		if (t === "lock") return b("lock", "unlock", { entity_id: e.id });
		b(t, "turn_on", { entity_id: e.id });
	}), n && (n.onclick = () => {
		let e = a.find((e) => e.id === v);
		if (!e) return;
		W(1200);
		let t = E(e.id);
		if (t === "lock") return b("lock", "lock", { entity_id: e.id });
		b(t, "turn_off", { entity_id: e.id });
	});
	let r = p("d-controls");
	r && (r.addEventListener("click", Ee), r.addEventListener("input", De), r.addEventListener("change", Oe), r.addEventListener("keydown", (e) => {
		let t = e.target.closest(".sw-row,[data-act=\"osc\"]");
		t && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t.click());
	}));
}
var $ = 0;
function Ae(e) {
	$ && cancelAnimationFrame($), $ = requestAnimationFrame(() => {
		$ = 0;
		let t = (e.parentElement || e).getBoundingClientRect(), n = window.innerHeight - Math.max(0, Math.round(t.top));
		n > 160 && (e.style.minHeight = "0", e.style.height = `${n}px`);
	});
}
var je = class extends HTMLElement {
	connectedCallback() {
		this._mounted || this._mount(), this._onResize = this._onResize || (() => Ae(this)), window.addEventListener("resize", this._onResize), this._onResize(), this._fitTimer = setTimeout(this._onResize, 150);
	}
	disconnectedCallback() {
		window.removeEventListener("resize", this._onResize), clearTimeout(this._fitTimer), clearInterval(this._clock);
	}
	_mount() {
		f = this.attachShadow({ mode: "open" });
		let e = document.createElement("style");
		e.textContent = r, f.appendChild(e);
		let t = document.createElement("div");
		for (t.innerHTML = i.trim(); t.firstChild;) f.appendChild(t.firstChild);
		this._mounted = !0, ke(), Q(), this._clock = setInterval(() => {
			this.isConnected && V();
		}, 3e4);
	}
	set hass(e) {
		if (!e || !e.states) return;
		re(e), N && P && N.setHass(e);
		let t = ne();
		t !== this._sig && (this._sig = t, !this._raf && (this._raf = requestAnimationFrame(() => {
			this._raf = 0, this._mounted && Q();
		})));
	}
	get hass() {
		return m;
	}
	set narrow(e) {}
	set panel(e) {}
	set route(e) {}
};
function Me(e, t) {
	try {
		if (customElements.get(e)) return;
		customElements.define(e, t);
	} catch (t) {
		console.warn("[ha-dash] 跳过注册 " + e + "：" + (t && t.message));
	}
}
Me("ha-dash", je), Me("ha-dash-panel", class extends je {});
