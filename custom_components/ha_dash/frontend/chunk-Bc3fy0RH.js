import { n as e, r as t, t as n } from "./chunk--1MuwD6M.js";
// src/floor3d/floor3d.css?inline
var r = ".fh{z-index:20;--bg:#f4f5f2;--text:#202225;--text-2:#4a5054;--text-3:#94999d;--line:#e3e5e1;--line-2:#d0d3ce;--warm:#4d94ff;--warm-deep:#2f78e3;--ok:#268663;background:var(--bg);color:var(--text);animation:fhIn .28s var(--ease);flex-direction:column;display:flex;position:absolute;top:0;bottom:0;left:0;right:0}.fh[hidden]{display:none}@keyframes fhIn{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}.fh-top{font-variant-numeric:tabular-nums;background:linear-gradient(#10161f,#0a0f17);border-bottom:1px solid #94b2d621;flex:none;align-items:center;gap:10px;height:52px;padding:0 14px;display:flex}.fh-seg{border:1px solid var(--line);background:#0e0e10;border-radius:11px;gap:2px;padding:3px;display:flex}.fh-seg button{color:var(--text-2);cursor:pointer;transition:.18s var(--ease);background:0 0;border:0;border-radius:8px;padding:7px 13px;font:500 12.5px/1 inherit}.fh-seg button:hover:not(.on){color:var(--text)}.fh-tools{align-items:center;gap:3px;display:flex}.fh-tools[hidden]{display:none}.fh-tools[data-for=edit] button{white-space:nowrap;color:var(--text-3);cursor:pointer;transition:.16s var(--ease);background:0 0;border:1px solid #0000;border-radius:10px;flex-direction:column;flex:none;align-items:center;gap:3px;padding:5px 9px;font:400 10px/1 inherit;display:flex}.fh-tools[data-for=edit] button svg{fill:none;stroke:currentColor;stroke-width:1.7px;stroke-linecap:round;stroke-linejoin:round;width:17px;height:17px}.fh-tools[data-for=edit] button:hover{color:var(--text-2);background:#ffffff0a}.fh-tools[data-for=edit] button.on{color:var(--warm);background:#ffd9a01a;border-color:#ffd9a038}.fh-tools[data-for=view] button{border:1px solid var(--line);color:var(--text-2);cursor:pointer;background:#141417;border-radius:9px;padding:8px 12px;font:500 12px/1 inherit}.fh-spacer{flex:1}.fh-btn{border:1px solid var(--line);color:var(--text-2);cursor:pointer;background:#141417;border-radius:10px;width:34px;height:34px;font-size:16px}.fh-btn:hover{color:var(--text);border-color:var(--line-2)}.fh-body{flex:1;min-height:0;display:flex;position:relative}.fh-stage{background:#06070b;flex:1;min-width:0;position:relative;overflow:hidden}.fh-stage canvas{display:block;position:absolute;top:0;bottom:0;left:0;right:0}.fe-canvas{outline:none}.fh-loading{color:var(--text-3);place-items:center;font-size:13px;display:grid;position:absolute;top:0;bottom:0;left:0;right:0}.fh-panel{overscroll-behavior:contain;border-left:1px solid var(--line);background:#0d0d0f;flex:0 0 320px;width:320px;padding:14px 16px 60px;overflow-y:auto}.fh-panel[hidden]{display:none}.fh-sec{margin-bottom:20px}.fh-sec h4{color:var(--text-2);letter-spacing:.04em;margin-bottom:10px;font:600 12px/1 inherit}.fh-note{color:var(--text-3);margin-bottom:10px;font-size:11.5px;line-height:1.7}.fh-note b{color:var(--text-2);font-weight:600}.fh-mini{margin:-2px 0 8px;font-size:10.5px;line-height:1.55}.fh-keys{flex-wrap:wrap;gap:6px;display:flex}.fh-keys span{border:1px solid var(--line);color:var(--text-3);background:#131316;border-radius:8px;align-items:center;gap:5px;padding:5px 8px;font:400 10.5px/1 inherit;display:inline-flex}.fh-keys i{color:var(--warm);background:#ffd9a01a;border-radius:5px;padding:3px 5px;font:600 10px/1 ui-monospace,Menlo,monospace}.fh-wide[disabled]{opacity:.45;cursor:default}.fh-kv{border-bottom:1px solid #ffffff0a;justify-content:space-between;align-items:baseline;gap:10px;padding:7px 0;font-size:12px;display:flex}.fh-kv span{color:var(--text-3)}.fh-kv b{color:var(--text);font-weight:500}.fh-kv b.mono{text-overflow:ellipsis;white-space:nowrap;max-width:150px;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;overflow:hidden}.fh-rotpv{background:#f7f8f5;border:1px solid #e6e8e3;border-radius:12px;align-items:center;gap:10px;margin:10px 0 12px;padding:8px 10px;display:flex}.fh-rotpv svg{flex:none;display:block;overflow:visible}.fh-rotpv-txt{flex-direction:column;gap:3px;min-width:0;display:flex}.fh-rotpv-txt b{color:var(--text);font:600 12.5px/1.2 inherit}.fh-rotpv-txt em{color:var(--text-3);font-size:10.5px;font-style:normal;line-height:1.3}.fh-field{color:var(--text-3);flex-direction:column;gap:7px;margin:12px 0;font-size:12px;display:flex}.fh-field input[type=range]{width:100%;accent-color:var(--warm-deep)}.fh-field input[type=checkbox]{width:16px;height:16px;accent-color:var(--warm-deep)}.fh-input{border:1px solid var(--line-2);width:100%;color:var(--text);background:#131316;border-radius:9px;outline:none;padding:8px 10px;font:500 13px/1.3 inherit}.fh-input:focus{border-color:#ffd9a066}.fh-wide{cursor:pointer;border:1px solid var(--line-2);width:100%;color:var(--text-2);transition:.16s var(--ease);background:#17171a;border-radius:10px;margin-top:6px;padding:10px;font:500 12.5px/1 inherit}.fh-wide:hover{color:var(--text);background:#1d1d21}.fh-wide.primary{color:#20170a;background:linear-gradient(#f0c78b,#d9a762);border-color:#0000;font-weight:600}.fh-danger{cursor:pointer;color:#ff9a9a;background:#ff5a5a14;border:1px solid #ff787838;border-radius:10px;width:100%;margin-top:10px;padding:9px;font:500 12px/1 inherit}.fh-danger[disabled]{cursor:not-allowed;opacity:.45;color:#b98a8a;background:#ff5a5a0a;border-color:#ff787824}.fh-danger[disabled]:hover{background:#ff5a5a0a}.fh-row2{gap:8px;margin:10px 0;display:flex}.fh-row2 button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);background:#17171a;border-radius:9px;flex:1;padding:8px;font:500 12px/1 inherit}.fh-row2 button:hover{color:var(--text);background:#1d1d21}.fh-grid2{grid-template-columns:1fr 1fr;gap:6px;display:grid}.fh-chip{cursor:pointer;text-align:left;border:1px solid var(--line);color:var(--text-2);transition:.14s var(--ease);background:#131316;border-radius:10px;flex-direction:column;align-items:flex-start;gap:3px;padding:9px 10px;font:500 12px/1.2 inherit;display:flex}.fh-chip i{color:var(--text-3);font-size:10px;font-style:normal}.fh-chip:hover{border-color:var(--line-2);color:var(--text);background:#1a1a1e}.fh-list{flex-direction:column;gap:4px;display:flex}.fh-row{cursor:pointer;text-align:left;width:100%;color:var(--text-2);background:#121215;border:1px solid #0000;border-radius:9px;align-items:center;gap:8px;padding:9px 10px;font:500 12px/1 inherit;display:flex}.fh-row:hover{color:var(--text);background:#19191d}.fh-row .dot{background:#4a5568;border-radius:50%;flex:none;width:6px;height:6px}.fh-row.done .dot{background:var(--ok)}.fh-row .nm{text-overflow:ellipsis;white-space:nowrap;flex:1;overflow:hidden}.fh-row .rm{color:var(--text-3);font-size:10.5px}.fh-dev-search{margin-bottom:8px}.fh-filters{grid-template-columns:1fr 1fr;gap:6px;margin-bottom:10px;display:grid}.fh-fchip{cursor:pointer;border:1px solid var(--line);min-width:0;color:var(--text-2);transition:.14s var(--ease);background:#131316;border-radius:9px;align-items:center;gap:6px;padding:7px 9px;font:500 11.5px/1 inherit;display:flex}.fh-fchip:hover{border-color:var(--line-2);color:var(--text);background:#1a1a1e}.fh-fchip .ic{flex:none;font-size:13px;line-height:1}.fh-fchip>span:not(.ic):not(.cnt){text-overflow:ellipsis;white-space:nowrap;flex:1;overflow:hidden}.fh-fchip .cnt{color:var(--text-3);background:#7f8c9624;border-radius:999px;flex:none;padding:2px 6px;font:600 10px/1 inherit}.fh-aux{cursor:pointer;text-align:left;border:1px dashed var(--line-2);width:100%;color:var(--text-3);transition:.14s var(--ease);background:0 0;border-radius:9px;justify-content:space-between;align-items:center;gap:8px;margin-bottom:10px;padding:7px 10px;font:500 11.5px/1 inherit;display:flex}.fh-aux i{color:var(--warm);white-space:nowrap;font-style:normal}.fh-stats{border-top:1px solid var(--line);grid-template-columns:repeat(3,1fr);gap:8px;padding-top:12px;display:grid}.fh-stats div{text-align:center}.fh-stats b{color:var(--text);font:600 17px/1 inherit;display:block}.fh-stats span{color:var(--text-3);font-size:10.5px}.fh-hint{border:1px solid var(--line-2);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);max-width:min(560px,100% - 300px);color:var(--text-2);opacity:0;pointer-events:none;transition:.24s var(--ease);background:#141418eb;border-radius:99px;padding:9px 16px;font:450 12px/1.4 inherit;position:absolute;bottom:18px;left:50%;transform:translate(-50%,10px)}.fh-hint.on{opacity:1;transform:translate(-50%)}.fh-menu{z-index:40;border:1px solid var(--line-2);background:#151518;border-radius:12px;flex-direction:column;min-width:168px;padding:5px;display:flex;position:absolute;top:58px;right:14px;box-shadow:0 16px 40px #0009}.fh-menu[hidden]{display:none}.fh-menu button{text-align:left;cursor:pointer;color:var(--text-2);background:0 0;border:0;border-radius:8px;padding:9px 11px;font:500 12.5px/1 inherit}.fh-menu button:hover{color:var(--text);background:#1e1e22}.fh-calib{z-index:50;border:1px solid var(--line-2);color:var(--text-2);background:#16161a;border-radius:12px;align-items:center;gap:8px;padding:10px 12px;font:450 12.5px/1 inherit;display:flex;position:absolute;bottom:70px;left:50%;transform:translate(-50%);box-shadow:0 16px 40px #0009}.fh-calib input{border:1px solid var(--line-2);width:90px;color:var(--text);background:#0f0f12;border-radius:8px;outline:none;padding:7px 9px;font:500 13px/1 inherit}.fh-calib button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);background:#1d1d21;border-radius:8px;padding:7px 13px;font:500 12px/1 inherit}.fh-calib button.primary{color:#20170a;background:linear-gradient(#f0c78b,#d9a762);border-color:#0000;font-weight:600}.fh-basecard{z-index:40;border:1px solid var(--line-2);width:288px;color:var(--text);background:#fff;border-radius:14px;position:absolute;top:58px;right:14px;box-shadow:0 16px 40px #2226232e}.fh-basecard[hidden]{display:none}.fh-bc-h{color:var(--text);border-bottom:1px solid #eef0ec;justify-content:space-between;align-items:center;padding:12px 14px;font:600 13px/1 inherit;display:flex}.fh-bc-x{cursor:pointer;color:var(--text-3);background:0 0;border:0;border-radius:6px;padding:2px 5px;font-size:14px;line-height:1}.fh-bc-x:hover{color:var(--text);background:#f0f1ee}.fh-bc-b{padding:12px 14px 14px}.fh-bc-prev{background:#f4f5f2;border:1px solid #e6e8e3;border-radius:10px;justify-content:center;align-items:center;max-height:140px;margin-bottom:10px;display:flex;overflow:hidden}.fh-bc-prev img{object-fit:contain;max-width:100%;max-height:140px;display:block}.fh-bc-val{color:#2f78e3;font-weight:600}.fh-bc-b .fh-row2 button.on{color:#2f78e3;background:#edf5ff;border-color:#4d94ff66}.fh-dev{z-index:30;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);overscroll-behavior:contain;color:#eef4ffeb;background:#151e2ef5;border:1px solid #e2ecff14;border-radius:14px;width:272px;padding:18px 20px;position:absolute;top:130px;bottom:14px;right:14px;overflow-y:auto;box-shadow:0 18px 44px #0006}@keyframes devIn{0%{opacity:0;transform:translate(26px,-26px)}to{opacity:1;transform:none}}@keyframes devOut{0%{opacity:1;transform:none}to{opacity:0;transform:translate(26px,26px)}}.fh-dev.entering{animation:devIn .22s var(--ease)}.fh-dev.leaving{animation:devOut .2s var(--ease) forwards}.fh-dev[hidden]{display:none!important}.fh-dev.cam{width:308px}.fh-cam{aspect-ratio:16/9;background:#0a0d12;border:1px solid #e2ecff1a;border-radius:12px;width:100%;margin:2px 0 8px;position:relative;overflow:hidden}.fh-cam .cam-live{position:absolute;top:0;bottom:0;left:0;right:0}.fh-cam-bar{gap:6px;margin-bottom:12px;display:flex}.fh-mini{cursor:pointer;font:inherit;color:#eef4ffc7;transition:.14s var(--ease);background:#ffffff0d;border:1px solid #e2ecff1a;border-radius:9px;flex:1;padding:6px 0;font-size:11.5px}.fh-mini:hover{color:#fff;background:#ffffff1a}.fh-dev-head{justify-content:space-between;align-items:center;margin-bottom:4px;display:flex}.fh-dev-head b{color:#fff;font:600 15px/1 inherit}.fh-dev-head button{color:#e7eeff99;cursor:pointer;background:0 0;border:0;padding:2px 4px;font-size:13px}.fh-dev-head button:hover{color:#fff}.fh-dev-sub{color:#e7eeff8c;margin-bottom:12px;font-size:11.5px}.fh-dev .fh-field{color:#e7eeffad;background:#ffffff0a;border:1px solid #e2ecff12;border-radius:12px;margin:8px 0;padding:12px}.fh-dev .fh-field span{color:#e7eeffad}.fh-dev .fh-kv{color:#eef4ffe6;border-bottom:1px solid #e2ecff14}.fh-dev .fh-kv b{color:#fff}.fh-dev .fh-wide,.fh-dev .fh-seg2 button,.fh-dev .fh-seg3 button{color:#eef4ffe6;background:#ffffff0f;border-color:#e2ecff1a}.fh-dev .fh-wide:hover,.fh-dev .fh-seg2 button:hover,.fh-dev .fh-seg3 button:hover{background:#ffffff1c}.fh-dev .fh-seg2 button.on,.fh-dev .fh-seg3 button.on{color:#9cc4ff;background:#4d94ff38;border-color:#4d94ff80}.fh-dev .fh-num input{color:#fff;background:#ffffff0f;border-color:#e2ecff1a}.fh-dev input[type=range]{accent-color:#4d94ff;min-height:24px}.fh-dev .fh-wide.primary{color:#fff;background:linear-gradient(#5aa0ff,#4d94ff)}.fh-dev.ac,.fh-dev.seg{--ui-num:ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, monospace;--ui-line:#94b2d621;--ui-line-2:#94b2d638;--ui-text:#e9eef6;--ui-muted:#8494aa;--ui-dim:#5d6b80;--ui-surface:#ffffff0b;--acc:#f2cf94;--acc-2:#ffd9a0;--acc-soft:#f2cf9424;--acc-line:#f2cf9466;width:358px;max-width:calc(100% - 28px);max-height:calc(100% - 144px);color:var(--ui-text);border:1px solid var(--ui-line);-webkit-backdrop-filter:blur(18px)saturate(115%);backdrop-filter:blur(18px)saturate(115%);font-variant-numeric:tabular-nums;background:radial-gradient(120% 70% at 88% -14%,#4d94ff1a,#0000 62%),linear-gradient(#101621fb 0%,#090d15fc 100%);border-radius:14px;grid-template-columns:minmax(0,1fr);align-content:start;padding:0 18px 6px;display:grid;position:absolute;top:130px;bottom:auto;box-shadow:0 24px 60px #0000008c,0 2px 8px #00000059,inset 0 1px #ffffff0e}.fh-dev.ac:before,.fh-dev.seg:before{content:\"\";pointer-events:none;background-image:linear-gradient(#94b2d60e 1px,#0000 1px),linear-gradient(90deg,#94b2d60e 1px,#0000 1px);background-size:26px 26px;border-radius:14px 14px 0 0;height:190px;position:absolute;top:0;left:0;right:0;-webkit-mask-image:linear-gradient(#000000d9,#0000);mask-image:linear-gradient(#000000d9,#0000)}.ac-wrap{min-width:0;display:block}.ac-wrap[data-tone=cool],.ac-wrap[data-tone=live]{--acc:#7fb6ff;--acc-2:#4d94ff;--acc-soft:#4d94ff26;--acc-line:#4d94ff73}.ac-wrap[data-tone=heat],.ac-wrap[data-tone=warm]{--acc:#ffdca5;--acc-2:#f0c78b;--acc-soft:#ffd9a024;--acc-line:#ffd9a06b}.ac-wrap[data-tone=auto]{--acc:#fbbf24;--acc-2:#d9a762;--acc-soft:#fbbf2421;--acc-line:#fbbf2466}.ac-wrap[data-tone=dry]{--acc:#c9a86a;--acc-2:#a98a52;--acc-soft:#c9a86a24;--acc-line:#c9a86a66}.ac-wrap[data-tone=alert]{--acc:#ff9a9a;--acc-2:#c9822e;--acc-soft:#ff9a9a24;--acc-line:#ff9a9a6b}.ac-wrap[data-tone=neutral]{--acc:#c8d3e2;--acc-2:#8b98ab;--acc-soft:#c8d3e21a;--acc-line:#c8d3e242}.ac-head{border-bottom:1px solid var(--ui-line);grid-column:1/-1;align-items:center;gap:14px;min-width:0;margin:0 -18px;padding:13px 16px 12px;display:flex}.fh-dev.seg .ac-back{box-sizing:border-box;aspect-ratio:1;flex:none;width:32px;min-width:32px;max-width:32px;height:32px;padding:0}.ac-back{box-sizing:border-box;cursor:pointer;width:32px;height:32px;color:var(--ui-muted);border:1px solid var(--ui-line);transition:color .16s var(--ease),border-color .16s var(--ease),background .16s var(--ease);background:0 0;border-radius:9px;flex:none;justify-content:center;align-items:center;margin:0;padding:0;line-height:0;display:flex}.ac-back:hover{color:var(--ui-text);border-color:var(--ui-line-2);background:#ffffff0a}.ac-back:active{transform:scale(.96)}.ac-back svg{fill:none;stroke:currentColor;stroke-width:1.8px;stroke-linecap:round;stroke-linejoin:round;width:15px;height:15px}.ac-meta{flex-direction:column;flex:1;gap:6px;min-width:0;display:flex;overflow:hidden}.ac-meta b{color:var(--ui-text);letter-spacing:.01em;text-overflow:ellipsis;white-space:nowrap;font:600 15.5px/1.15 inherit;overflow:hidden}.ac-pill{letter-spacing:.04em;color:var(--ui-muted);flex:none;align-self:flex-start;align-items:center;gap:6px;font:500 10.5px/1 inherit;display:inline-flex}.ac-pill:before{content:\"\";background:var(--ui-dim);width:6px;height:6px;box-shadow:none;border-radius:50%;transition:background .2s,box-shadow .2s}.ac-pill.live{color:var(--acc)}.ac-pill.live:before{background:var(--acc);box-shadow:0 0 7px var(--acc),0 0 2px var(--acc)}.ac-wrap[data-tone=alert] .ac-pill{color:var(--acc)}.ac-wrap[data-tone=alert] .ac-pill:before{background:var(--acc);box-shadow:0 0 7px var(--acc)}.ac-hero{border-bottom:1px solid var(--ui-line);background:linear-gradient(#ffffff07,#0000);grid-column:1/-1;justify-content:space-between;align-items:center;gap:10px;min-width:0;margin:0 -18px;padding:16px 18px 14px;display:flex;position:relative}.ac-hero:after{content:\"\";background-image:repeating-linear-gradient(90deg,var(--ui-line-2) 0 1px,transparent 1px 52px), repeating-linear-gradient(90deg,var(--ui-line) 0 1px,transparent 1px 13px);opacity:1;background-position:0 100%,0 100%;background-repeat:repeat-x,repeat-x;background-size:100% 9px,100% 5px;height:9px;position:absolute;bottom:0;left:18px;right:18px}.ac-step{cursor:pointer;width:40px;height:40px;font:400 17px/1 var(--ui-num);color:var(--ui-muted);border:1px solid var(--ui-line);transition:.16s var(--ease);background:#ffffff08;border-radius:10px;flex:none;place-items:center;display:grid}.ac-step:hover{color:var(--acc);background:var(--acc-soft);border-color:var(--acc-line)}.ac-step:active{transform:scale(.95)}.ac-now{flex-wrap:wrap;justify-content:center;align-items:baseline;gap:0 4px;min-width:0;display:flex}.ac-now b{letter-spacing:-.02em;color:var(--ui-text);font-variant-numeric:tabular-nums;font-feature-settings:\"tnum\" 1;font:600 38px/1 inherit}.ac-now em{font:500 12px/1 var(--ui-num);color:var(--acc);letter-spacing:.04em;font-style:normal}.ac-now.txt b{letter-spacing:.02em;font-size:29px;font-weight:600}.ac-now span{text-align:center;letter-spacing:.08em;color:var(--ui-dim);flex-basis:100%;margin-top:7px;font-size:9.5px}.ac-read{border-bottom:1px solid var(--ui-line);grid-column:1/-1;grid-template-columns:1fr 1fr;column-gap:22px;min-width:0;margin:0 -18px;padding:9px 18px 11px;display:grid}.ac-read div{border-bottom:1px solid #94b2d612;flex-direction:column;gap:5px;min-width:0;padding:7px 0;display:flex}.ac-read div:nth-last-child(-n+2){border-bottom:0}.ac-read div:nth-child(odd){border-right:1px solid #94b2d612;padding-right:22px}.ac-read span{letter-spacing:.1em;color:var(--ui-dim);white-space:nowrap;text-overflow:ellipsis;font-size:9.5px;overflow:hidden}.ac-read b{font:500 14px/1.15 var(--ui-num);color:var(--ui-text);letter-spacing:-.01em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ac-sec{border-bottom:1px solid var(--ui-line);grid-column:1/-1;min-width:0;margin:0 -18px;padding:13px 18px 15px}.ac-sec:last-of-type{border-bottom:0}.ac-sec h4{color:var(--ui-muted);letter-spacing:.06em;align-items:center;gap:8px;margin:0 0 11px;font:600 11px/1 inherit;display:flex}.ac-no{font:500 9.5px/1 var(--ui-num);color:var(--acc);opacity:.85;letter-spacing:.02em;min-width:16px;font-style:normal}.ac-sec h4 em{font-style:normal;font-weight:400;font:400 10px/1 var(--ui-num);color:var(--ui-dim);letter-spacing:.02em;margin-left:auto}.ac-pw,.ac-grid{grid-template-columns:repeat(var(--n,3),1fr);gap:6px;display:grid}.ac-pw button,.ac-grid button{cursor:pointer;min-width:0;font:inherit;letter-spacing:.01em;color:var(--ui-muted);border:1px solid var(--ui-line);white-space:nowrap;text-overflow:ellipsis;transition:color .15s var(--ease),background .15s var(--ease),border-color .15s var(--ease);background:#ffffff07;border-radius:8px;justify-content:center;align-items:center;gap:5px;padding:9px 4px;font-size:12px;display:flex;overflow:hidden}.ac-pw button svg{fill:none;stroke:currentColor;stroke-width:1.7px;stroke-linecap:round;stroke-linejoin:round;flex:none;width:13px;height:13px}.ac-grid button svg,.ac-step svg{fill:none;stroke:currentColor;stroke-width:1.7px;stroke-linecap:round;stroke-linejoin:round;flex:none;width:14px;height:14px}.ac-pw button:hover,.ac-grid button:hover{color:var(--ui-text);border-color:var(--ui-line-2);background:#ffffff0f}.ac-pw button.on,.ac-grid button.on{color:var(--acc);background:var(--acc-soft);border-color:var(--acc-line);box-shadow:inset 2px 0 0 var(--acc);font-weight:600}.ac-pw button[data-pw=off].on,.ac-grid button[data-value=off].on,.ac-grid button[data-value=none].on{color:var(--ui-text);border-color:var(--ui-line-2);box-shadow:inset 2px 0 0 var(--ui-dim);background:#ffffff17}.ac-set{letter-spacing:.03em;color:var(--ui-dim);align-items:center;gap:7px;margin-top:11px;font-size:11px;display:flex}.ac-set i{color:var(--acc);display:flex}.ac-set i svg{fill:none;stroke:currentColor;stroke-width:1.7px;stroke-linecap:round;width:13px;height:13px}.ac-set b{font:600 13px/1 var(--ui-num);color:var(--acc);font-variant-numeric:tabular-nums;margin-left:auto}.ac-range{-webkit-appearance:none;appearance:none;cursor:pointer;touch-action:none;background:0 0;width:100%;height:20px;display:block}.ac-range::-webkit-slider-runnable-track{background:linear-gradient(90deg,var(--acc) 0%,var(--acc-2) var(--pct,50%), #94b2d629 var(--pct,50%),#94b2d629 100%);border-radius:2px;height:3px}.ac-range::-webkit-slider-thumb{-webkit-appearance:none;background:var(--ui-text);width:15px;height:15px;box-shadow:0 0 0 1px var(--acc-line),0 2px 6px #00000080;transition:transform .12s var(--ease),background .15s;border:0;border-radius:3px;margin-top:-6px}.ac-range:hover::-webkit-slider-thumb{background:var(--acc)}.ac-range:active::-webkit-slider-thumb{transform:scale(1.1)}.ac-range::-moz-range-track{background:#94b2d629;border-radius:2px;height:3px}.ac-range::-moz-range-progress{background:var(--acc);border-radius:2px;height:3px}.ac-range::-moz-range-thumb{background:var(--ui-text);width:14px;height:14px;box-shadow:0 0 0 1px var(--acc-line);border:0;border-radius:3px}.fh-dev.ac::-webkit-scrollbar{width:5px}.fh-dev.seg::-webkit-scrollbar{width:5px}.fh-dev.ac::-webkit-scrollbar-track{background:0 0}.fh-dev.seg::-webkit-scrollbar-track{background:0 0}.fh-dev.ac::-webkit-scrollbar-thumb{background:#94b2d62e;border-radius:3px}.fh-dev.seg::-webkit-scrollbar-thumb{background:#94b2d62e;border-radius:3px}.fh-dev.ac::-webkit-scrollbar-thumb:hover{background:#94b2d64d}.fh-dev.seg::-webkit-scrollbar-thumb:hover{background:#94b2d64d}.ac-foot{border-top:1px solid var(--ui-line);text-align:center;font:400 10px/1 var(--ui-num);letter-spacing:.08em;color:var(--ui-dim);margin:0 -18px;padding:10px 18px 12px}.ac-reads{grid-template-columns:1fr 1fr;column-gap:20px;display:grid}.ac-reads div:nth-child(odd){border-right:1px solid #94b2d612;padding-right:20px}.ac-reads div{border-bottom:1px solid #94b2d612;justify-content:space-between;align-items:baseline;gap:8px;min-width:0;padding:6px 0;display:flex}.ac-reads span{letter-spacing:.04em;color:var(--ui-dim);white-space:nowrap;text-overflow:ellipsis;font-size:10.5px;overflow:hidden}.ac-reads b{font:500 12px/1.2 var(--ui-num);color:var(--ui-text);text-align:right;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ac-kv{letter-spacing:.04em;color:var(--ui-dim);border-bottom:1px solid #94b2d612;justify-content:space-between;align-items:baseline;gap:12px;padding:6px 0;font-size:10.5px;display:flex}.ac-kv:last-child{border-bottom:0;padding-bottom:1px}.ac-kv b{font:500 12px/1 var(--ui-num);color:var(--ui-text);text-align:right;text-overflow:ellipsis;white-space:nowrap;max-width:64%;overflow:hidden}.ac-select{cursor:pointer;width:100%;color:var(--ui-text);font:500 12px/1 var(--ui-num);border:1px solid var(--ui-line);-webkit-appearance:none;appearance:none;background-color:#ffffff07;background-image:linear-gradient(45deg,transparent 50%,var(--ui-muted) 50%), linear-gradient(135deg,var(--ui-muted) 50%,transparent 50%);background-position:calc(100% - 16px) calc(50% - 1px),calc(100% - 11px) calc(50% - 1px);background-repeat:no-repeat;background-size:5px 5px,5px 5px;border-radius:8px;padding:9px 28px 9px 11px}.ac-select:hover{border-color:var(--ui-line-2);background-color:#ffffff0f}.ac-select:focus-visible{outline:2px solid var(--acc);outline-offset:1px}.ac-select option{color:var(--ui-text);background:#101725}.fh-swatches.ac-swatches{grid-template-columns:repeat(6,1fr);gap:7px}.fh-swatches.ac-swatches .ac-swatch{aspect-ratio:1;border:1px solid #ffffff24;border-radius:7px}.fh-swatches.ac-swatches .ac-swatch.on{border-color:var(--ui-text);box-shadow:0 0 0 2px #090d15e6,0 0 0 3px var(--acc)}.ac-color{letter-spacing:.06em;color:var(--ui-dim);align-items:center;gap:8px;margin-top:11px;font-size:10px;display:flex}.ac-color input{cursor:pointer;border:1px solid var(--ui-line);background:0 0;border-radius:5px;width:32px;height:22px;padding:0}.ac-range.ct::-webkit-slider-runnable-track{background:linear-gradient(90deg,#ffab5c 0%,#ffe3c4 28%,#fff 52%,#d8e8ff 74%,#a3c8ff 100%);border-radius:2px;height:5px}.ac-range.ct::-moz-range-track{background:linear-gradient(90deg,#ffab5c 0%,#ffe3c4 28%,#fff 52%,#d8e8ff 74%,#a3c8ff 100%);height:5px}.ac-pw button:focus-visible{outline:2px solid var(--acc);outline-offset:1px}.ac-grid button:focus-visible{outline:2px solid var(--acc);outline-offset:1px}.ac-step:focus-visible{outline:2px solid var(--acc);outline-offset:1px}.ac-back:focus-visible{outline:2px solid var(--acc);outline-offset:1px}@media (prefers-reduced-motion:no-preference){.fh-dev.ac.fresh .ac-head,.fh-dev.seg.fresh .ac-head{animation:cardIn .32s var(--ease) both}.fh-dev.ac.fresh .ac-hero,.fh-dev.seg.fresh .ac-hero{animation:cardIn .34s var(--ease) 50ms both}.fh-dev.ac.fresh .ac-read,.fh-dev.seg.fresh .ac-read{animation:cardIn .34s var(--ease) .1s both}.fh-dev.ac.fresh .ac-sec,.fh-dev.seg.fresh .ac-sec{animation:cardIn .36s var(--ease) .14s both}}@keyframes cardIn{0%{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}@media (prefers-reduced-motion:reduce){.fh-dev.ac *,.fh-dev.seg *{transition:none!important;animation:none!important}}.fh-swatches{grid-template-columns:repeat(4,1fr);gap:8px;display:grid}.fh-swatch{aspect-ratio:1;cursor:pointer;transition:.14s var(--ease);border:2px solid #0000;border-radius:50%;box-shadow:0 1px 3px #00000059}.fh-swatch.on{border-color:#4d94ff;box-shadow:0 0 0 3px #4d94ff40}.fh-dev .fh-field input[type=checkbox]{accent-color:#4d94ff;width:18px;height:18px}.floor3d-canvas{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0}.fh-seg2{gap:6px;display:flex}.fh-seg2 button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);transition:.14s var(--ease);background:#17171a;border-radius:9px;flex:1;padding:8px 6px;font:500 12px/1 inherit}.fh-seg2 button:hover{color:var(--text);background:#1d1d21}.fh-seg2 button.on{color:var(--warm);background:#ffd9a021;border-color:#ffd9a075}.fh-seg3{gap:6px;display:flex}.fh-seg3 button{cursor:pointer;border:1px solid var(--line-2);color:var(--text-2);transition:.14s var(--ease);background:#17171a;border-radius:9px;flex:1;padding:8px 4px;font:500 12px/1 inherit}.fh-seg3 button:hover{color:var(--text);background:#1d1d21}.fh-seg3 button.on{color:var(--warm);background:#ffd9a021;border-color:#ffd9a075}.fh-floor{border-top:1px solid var(--line-2);margin-top:8px;padding-top:4px}.fh-field input[type=color]{border:1px solid var(--line-2);cursor:pointer;background:#101014;border-radius:8px;width:100%;height:34px;padding:2px}.fh-row2 .fh-field{flex:1;min-width:0}.fh-row2 .fh-field input[type=color]{width:100%;height:34px}.fh-grid2 button{white-space:nowrap}.fh-num{align-items:center;gap:8px;display:flex}.fh-num input[type=number]{border:1px solid var(--line-2);min-width:0;color:var(--text);background:#101014;border-radius:8px;flex:1;padding:7px 9px;font:500 12px/1 ui-monospace,Menlo,monospace}.fh-num input[type=number]:focus{border-color:#ffd9a066;outline:none}.fh-num em{color:var(--text-3);flex:none;font-size:11px;font-style:normal}.fh-num input[type=color]{border:1px solid var(--line-2);cursor:pointer;background:#101014;border-radius:8px;flex:none;width:40px;height:30px;padding:0}.fh-pick{color:var(--warm);border-color:#ffd9a066}.fh-stage{position:relative}.fh3d-info{z-index:6;pointer-events:none;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#e2eeffe6;background:#0d0f16b8;border:1px solid #8caadc29;border-radius:12px;flex-wrap:wrap;align-items:center;gap:10px;max-width:calc(100% - 28px);padding:9px 14px;font:500 12.5px/1.4 inherit;display:flex;position:absolute;top:14px;left:14px;box-shadow:0 4px 18px #00000059}.fh3d-info b{color:#fff;letter-spacing:.02em;font-size:13px}.fh3d-info i{color:#bed0ebd9;border-left:1px solid #8caadc33;align-items:center;padding-left:10px;font-style:normal;display:inline-flex}.fh3d-info i:first-of-type{border-left:none;padding-left:0}.fh3d-tools{z-index:6;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:#0d0f16c7;border:1px solid #8caadc2e;border-radius:12px;align-items:center;gap:8px;padding:8px 12px;display:flex;position:absolute;bottom:16px;left:50%;transform:translate(-50%);box-shadow:0 4px 18px #0006}.fh3d-tools button{color:#e2eeffe6;cursor:pointer;background:#ffffff0d;border:1px solid #8caadc33;border-radius:9px;width:34px;height:32px;font:600 14px/1 inherit;transition:all .12s}.fh3d-tools button:hover{background:#ffd9a026;border-color:#ffd9a073}.fh3d-tools button.del:hover{background:#f871712e;border-color:#f8717180}.fh3d-tools label{color:#bed0ebd9;align-items:center;gap:6px;font-size:12px;display:flex}.fh3d-tools input[type=range]{-webkit-appearance:none;appearance:none;cursor:pointer;touch-action:none;background:0 0;width:110px;height:44px}.fh3d-tools input[type=range]::-webkit-slider-runnable-track{background:linear-gradient(90deg,#fbbf24 var(--pct,50%),#fbbf2429 var(--pct,50%));border-radius:2px;height:4px}.fh3d-tools input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:15px;height:15px;transition:transform .12s var(--ease);background:#fbbf24;border:2px solid #10131a;border-radius:50%;margin-top:-5.5px;box-shadow:0 1px 5px #00000080}.fh3d-tools input[type=range]:active::-webkit-slider-thumb{transform:scale(1.15)}.fh3d-tools input[type=range]::-moz-range-track{background:#fbbf2429;border-radius:2px;height:4px}.fh3d-tools input[type=range]::-moz-range-progress{background:#fbbf24;border-radius:2px;height:4px}.fh3d-tools input[type=range]::-moz-range-thumb{background:#fbbf24;border:2px solid #10131a;border-radius:50%;width:15px;height:15px}.fh3d-numwrap{align-items:center;gap:2px;display:inline-flex}.fh3d-num{text-align:center;color:#fbbf24;-webkit-appearance:textfield;appearance:textfield;background:#ffffff0f;border:1px solid #fbbf244d;border-radius:6px;outline:none;width:48px;height:26px;padding:0 4px;font:600 12px/1 ui-monospace,Menlo,monospace}.fh3d-num::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.fh3d-num::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.fh3d-numwrap i{color:#fbbf24;opacity:.7;font:600 11px/1 ui-monospace,Menlo,monospace}.fh3d-tools[hidden],.fh3d-info[hidden]{display:none}.fh3d-style{z-index:6;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:#0d0f16b8;border:1px solid #8caadc2e;border-radius:12px;align-items:center;gap:8px;padding:7px 10px;display:flex;position:absolute;top:14px;right:14px;box-shadow:0 4px 18px #00000059}.fh3d-style select{color:#e2eeffeb;cursor:pointer;background:#101014;border:1px solid #8caadc40;border-radius:8px;outline:none;padding:6px 8px;font:500 12px/1 inherit}.fh3d-style label{color:#bed0ebd9;cursor:pointer;white-space:nowrap;align-items:center;gap:5px;font-size:12px;display:flex}.fh3d-style input[type=checkbox]{accent-color:#c9a86a;cursor:pointer}.fh-stage{--scene-panel:#1b1a18eb;--scene-text:#f2eadc;--scene-muted:#c2b8a5;--scene-gold:#d2b47c}.fh3d-info,.fh3d-style,.fh3d-tools{background:var(--scene-panel);color:var(--scene-text);border-color:#d2b47c4d;border-radius:8px}.fh3d-info{gap:10px 16px;max-width:calc(100% - 320px);padding:14px 18px}.fh3d-info b{color:var(--scene-gold);flex-basis:100%;font-family:Noto Serif SC,Source Han Serif SC,serif;font-size:18px;font-weight:500}.fh3d-info i,.fh3d-style label,.fh3d-tools label{color:var(--scene-muted)}.fh3d-style select{max-width:190px;min-height:44px;color:var(--scene-text);border-color:#d2b47c59}.fh3d-style label{min-height:44px;padding:0 6px}.fh3d-tools button{min-width:44px;min-height:44px}.fh3d-tools input[type=range]{min-height:44px}.fh3d-tools input[type=range]::-webkit-slider-runnable-track{background:linear-gradient(90deg,var(--scene-gold) var(--pct,50%),#d2b47c2e var(--pct,50%))}.fh3d-tools input[type=range]::-webkit-slider-thumb{background:var(--scene-gold);border-color:#1b1a18}.fh3d-tools input[type=range]::-moz-range-progress{background:var(--scene-gold)}.fh3d-tools input[type=range]::-moz-range-thumb{background:var(--scene-gold);border-color:#1b1a18}.fh3d-num{color:var(--scene-gold);border-color:#d2b47c4d}.fh3d-num:focus{border-color:var(--scene-gold);box-shadow:0 0 0 2px #d2b47c33}.fh3d-numwrap i{color:var(--scene-gold)}.fh3d-style select:focus-visible{outline:2px solid var(--scene-gold);outline-offset:3px}.fh3d-style input:focus-visible{outline:2px solid var(--scene-gold);outline-offset:3px}.fh3d-tools :focus-visible{outline:2px solid var(--scene-gold);outline-offset:3px}@media (max-width:768px){.fh3d-info{gap:6px 12px;max-width:calc(100% - 20px);padding:10px 12px;top:10px;left:10px}.fh3d-style{max-width:calc(100% - 20px);top:auto;bottom:12px;right:10px}.fh3d-tools{flex-wrap:wrap;justify-content:center;max-width:calc(100% - 32px);bottom:84px}.fh3d-tools input[type=range]{width:85px}}@media (prefers-reduced-motion:reduce){.fh3d-tools button{transition:none}}.fh-top{border-bottom:1px solid var(--line);background:linear-gradient(#fff,#ffffffdb)}.fh-seg{border-color:var(--line);background:#eceeea}.fh-seg button.on{color:var(--text);background:#fff;box-shadow:0 1px 2px #2226231a,inset 0 0 0 1px #ffffffb3}.fh-tools[data-for=edit] button:hover{background:#3c464b0f}.fh-tools[data-for=edit] button.on{background:#edf5ff;border-color:#4d94ff42}.fh-tools[data-for=view] button,.fh-btn{background:#fff}.fh-stage{background:#f4f5f2}.fh-panel{border-left:1px solid var(--line);background:#fff}.fh-keys span{background:#f2f3f0}.fh-keys i{background:#4d94ff1a}.fh-kv{border-bottom:1px solid #eef0ec}.fh-input,.fh-num input[type=number],.fh-num input[type=color],.fh-field input[type=color]{background:#fff}.fh-input:focus,.fh-num input[type=number]:focus{border-color:#4d94ff73}.fh-wide,.fh-row2 button,.fh-seg2 button,.fh-seg3 button{background:#fff}.fh-wide:hover,.fh-row2 button:hover,.fh-seg2 button:hover,.fh-seg3 button:hover{background:#f0f1ee}.fh-wide.primary,.fh-calib button.primary{color:#fff;background:linear-gradient(#5aa0ff,#4d94ff)}.fh-danger{color:#c64a43;background:#fff2f0;border-color:#c64a4338}.fh-danger:hover{background:#fbeae7}.fh-danger[disabled]{color:#c9a3a1;background:#fdf4f2;border-color:#c64a4324}.fh-chip{background:#fff}.fh-chip:hover{background:#f0f1ee}.fh-row{background:#f7f8f5}.fh-row:hover{background:#f0f1ee}.fh-row.demo{background:#fafaf7;border-style:dashed;border-color:#e3e5e1}.fh-row.demo .rm{color:#9aa0a6}.fh-row .dot{background:#b7bfc7}.fh-fchip{border-color:var(--line-2);color:var(--text-2);background:#fff}.fh-fchip:hover{background:#f0f1ee}.fh-fchip.on{color:#2f78e3;background:#edf5ff;border-color:#4d94ff66}.fh-fchip .cnt{color:#4d94ff;background:#4d94ff1f}.fh-aux{color:#8a9096;border-color:#e3e5e1}.fh-aux:hover{color:#5a6066;background:#f2f3f0}.fh-aux i{color:#2f78e3}.fh-hint{color:#4a5054;border-color:var(--line-2);background:#ffffffeb;box-shadow:0 12px 34px #22262324}.fh-menu{border-color:var(--line-2);background:#fff;box-shadow:0 16px 40px #22262329}.fh-menu button:hover{background:#f0f1ee}.fh-menu button.danger{color:#c64a43}.fh-menu button.danger:hover{background:#fbeae7}.fh-calib{border-color:var(--line-2);background:#fff;box-shadow:0 16px 40px #22262329}.fh-calib input{background:#fff}.fh-calib button{background:#f2f3f0}.fh-seg2 button.on,.fh-seg3 button.on{color:#2f78e3;background:#edf5ff;border-color:#4d94ff66}.fh-pick{border-color:#4d94ff66}.fh3d-info{flex-direction:column;align-items:stretch;gap:8px}.wx-title{color:#fff;align-items:baseline;gap:10px;font-size:31px;font-weight:400;line-height:1;display:flex}.wx-pill{align-items:center;gap:5px;display:flex}.wx-meta{color:#e7eeffad;flex-wrap:wrap;gap:4px 16px;font-size:14px;display:flex}.wx-item{align-items:center;gap:6px;display:flex}.wx-days{color:#ecf4ffe6;gap:8px;margin-top:4px;display:flex}.wx-day{grid-template-rows:auto auto;grid-template-columns:auto auto;place-items:center start;gap:0 3px;padding:1px 2px;display:grid}.wx-day i{color:#e7eeff99;border-left:none;grid-column:1/-1;padding-left:0;font-size:9px;font-style:normal}.wx-icon{font-size:12px;line-height:1}.wx-day b{color:#ecf4ffe6;letter-spacing:0;flex-basis:auto;font-family:inherit;font-size:12px}.wx-day em{color:#96b4dcb3;font-size:8.5px;font-style:normal}.fh3d-help{z-index:6;color:#f2eadceb;white-space:nowrap;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);pointer-events:none;transition:opacity .5s var(--ease);background:#1b1a18e6;border:1px solid #d2b47c4d;border-radius:999px;padding:8px 16px;font-size:12.5px;position:absolute;bottom:16px;left:50%;transform:translate(-50%);box-shadow:0 8px 24px #0000004d}.fh3d-help.out{opacity:0}@media (max-width:768px){.fh3d-help{white-space:normal;text-align:center;max-width:calc(100% - 32px);font-size:11px;bottom:80px}}", i = 400;
function a(e, t) {
	return `${Math.round(e * i)},${Math.round(t * i)}`;
}
function o(e, t) {
	let n = e.x2 - e.x1, r = e.y2 - e.y1, i = t.x2 - t.x1, a = t.y2 - t.y1, o = n * a - r * i;
	if (Math.abs(o) < 1e-9) return null;
	let s = t.x1 - e.x1, c = t.y1 - e.y1, l = (s * a - c * i) / o, u = (s * r - c * n) / o;
	return l < -1e-7 || l > 1.0000001 || u < -1e-7 || u > 1.0000001 ? null : [Math.max(0, Math.min(1, l)), Math.max(0, Math.min(1, u))];
}
function s(e) {
	let t = e.map(() => []);
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (!(!r || r.x1 === r.x2 && r.y1 === r.y2)) for (let i = n + 1; i < e.length; i++) {
			let a = o(r, e[i]);
			a && (t[n].push(a[0]), t[i].push(a[1]));
		}
	}
	let n = [], r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = (e, t) => {
		let i = a(e, t), o = r.get(i);
		return o === void 0 && (o = n.length, n.push({
			x: e,
			y: t
		}), r.set(i, o)), o;
	}, c = (e, t) => {
		if (e === t) return;
		let n = e < t ? `${e}>${t}` : `${t}>${e}`;
		i.has(n) || i.set(n, {
			a: e,
			b: t
		});
	};
	e.forEach((e, n) => {
		let r = Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
		if (r < 1e-6) return;
		let i = [
			0,
			1,
			...t[n]
		].sort((e, t) => e - t);
		for (let t = 0; t < i.length - 1; t++) {
			let n = i[t], a = i[t + 1];
			if ((a - n) * r < .005) continue;
			let o = s(e.x1 + (e.x2 - e.x1) * n, e.y1 + (e.y2 - e.y1) * n), l = s(e.x1 + (e.x2 - e.x1) * a, e.y1 + (e.y2 - e.y1) * a);
			c(o, l);
		}
	});
	let l = n.map(() => []);
	for (let { a: e, b: t } of i.values()) l[e].push(t), l[t].push(e);
	return l.forEach((e, t) => {
		e.sort((e, r) => Math.atan2(n[e].y - n[t].y, n[e].x - n[t].x) - Math.atan2(n[r].y - n[t].y, n[r].x - n[t].x));
	}), {
		verts: n,
		adj: l
	};
}
function c(e) {
	let t = 0;
	for (let n = 0, r = e.length; n < r; n++) {
		let [i, a] = e[n], [o, s] = e[(n + 1) % r];
		t += i * s - o * a;
	}
	return t / 2;
}
function l(e) {
	let { verts: t, adj: n } = e, r = /* @__PURE__ */ new Set(), i = [];
	for (let e = 0; e < n.length; e++) for (let a of n[e]) {
		if (r.has(`${e}>${a}`)) continue;
		let o = [], s = e, l = a, u = 0;
		for (; u++ < 4e3 && !r.has(`${s}>${l}`);) {
			r.add(`${s}>${l}`), o.push([t[s].x, t[s].y]);
			let e = Math.atan2(t[s].y - t[l].y, t[s].x - t[l].x), i = -1, a = Infinity;
			for (let r of n[l]) {
				let n = e - Math.atan2(t[r].y - t[l].y, t[r].x - t[l].x);
				for (; n <= 1e-9;) n += Math.PI * 2;
				n < a && (a = n, i = r);
			}
			if (i < 0) break;
			s = l, l = i;
		}
		o.length >= 3 && i.push({
			poly: o,
			area: c(o)
		});
	}
	return i;
}
function u(e) {
	return l(s(e));
}
var d = 1.2, f = 2.8, p = .15, m = .1, h = .6, g = .06, _ = {
	solid: "实体墙",
	virtual: "透明边界"
}, v = 0;
function y(e = "e") {
	return e + Date.now().toString(36) + (v++).toString(36);
}
function b(e = "我的家") {
	return {
		v: 2,
		name: e,
		wallHeight: d,
		ceiling: f,
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
function x(e, t, n) {
	let r = S(t.x, t.y, n.x, n.y);
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
	let l = [], u = /* @__PURE__ */ new Map(), d = [];
	for (let { w: i } of s) {
		let a = D(i), s = te(i), c = (e) => (e.x - i.x1) * s.ux + (e.y - i.y1) * s.uy, f = [
			0,
			a,
			c(t),
			c(n)
		].filter((e) => e >= 0 && e <= a).sort((e, t) => e - t).filter((e, t, n) => !t || e - n[t - 1] > .001);
		for (let t of e.openings.filter((e) => e.wallId === i.id)) if (f.some((e) => e > .001 && e < a - .001 && e > t.offset - t.width / 2 + .001 && e < t.offset + t.width / 2 - .001)) return {
			ok: !1,
			reason: "切分点穿过门窗，请将点移到门窗两侧"
		};
		let p = [];
		for (let e = 1; e < f.length; e++) {
			let t = f[e - 1], n = f[e], a = ne(i, t), s = ne(i, n), c = {
				...i,
				id: y("w"),
				x1: a.x,
				y1: a.y,
				x2: s.x,
				y2: s.y
			};
			l.push(c), p.push({
				piece: c,
				start: t,
				end: n
			});
			let u = o((c.x1 + c.x2) / 2, (c.y1 + c.y2) / 2);
			u >= 0 && u <= r && d.push(c.id);
		}
		u.set(i.id, p);
	}
	e.walls = e.walls.filter((e) => !u.has(e.id)).concat(l);
	for (let t of e.openings) {
		let e = u.get(t.wallId)?.find((e) => t.offset >= e.start - .001 && t.offset <= e.end + .001);
		e && (t.wallId = e.piece.id, t.offset -= e.start);
	}
	return A(e), {
		ok: !0,
		ids: d
	};
}
var S = (e, t, n, r) => Math.hypot(n - e, r - t);
function C(e, t, n, r, i, a) {
	let o = i - n, s = a - r, c = o * o + s * s;
	if (c < 1e-12) return {
		t: 0,
		x: n,
		y: r,
		d: S(e, t, n, r)
	};
	let l = ((e - n) * o + (t - r) * s) / c;
	l = Math.max(0, Math.min(1, l));
	let u = n + o * l, d = r + s * l;
	return {
		t: l,
		x: u,
		y: d,
		d: S(e, t, u, d)
	};
}
function w(e) {
	let t = 0;
	for (let n = 0, r = e.length; n < r; n++) {
		let [i, a] = e[n], [o, s] = e[(n + 1) % r];
		t += i * s - o * a;
	}
	return Math.abs(t / 2);
}
function T(e) {
	let t = 0, n = 0, r = 0;
	for (let i = 0, a = e.length; i < a; i++) {
		let [o, s] = e[i], [c, l] = e[(i + 1) % a], u = o * l - c * s;
		t += u, n += (o + c) * u, r += (s + l) * u;
	}
	return Math.abs(t) < 1e-12 ? [e.reduce((e, t) => e + t[0], 0) / e.length, e.reduce((e, t) => e + t[1], 0) / e.length] : [n / (3 * t), r / (3 * t)];
}
function E(e, t, n) {
	let r = !1;
	for (let i = 0, a = n.length - 1; i < n.length; a = i++) {
		let [o, s] = n[i], [c, l] = n[a];
		s > t != l > t && e < (c - o) * (t - s) / (l - s) + o && (r = !r);
	}
	return r;
}
function ee(e, t, n) {
	for (let r = e.rooms.length - 1; r >= 0; r--) if (E(t, n, e.rooms[r].poly)) return e.rooms[r];
	return null;
}
function D(e) {
	return S(e.x1, e.y1, e.x2, e.y2);
}
function te(e) {
	let t = D(e) || 1e-9, n = (e.x2 - e.x1) / t, r = (e.y2 - e.y1) / t;
	return {
		ux: n,
		uy: r,
		nx: -r,
		ny: n,
		len: t,
		ang: Math.atan2(r, n)
	};
}
function ne(e, t) {
	let n = te(e), r = n.len > 1e-9 ? Math.max(0, Math.min(1, t / n.len)) : 0;
	return {
		x: e.x1 + (e.x2 - e.x1) * r,
		y: e.y1 + (e.y2 - e.y1) * r,
		ux: n.ux,
		uy: n.uy,
		len: n.len,
		ang: n.ang
	};
}
function re(e, t, n, r, i = {}) {
	return {
		id: i.id || y("w"),
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
var O = (e) => e && e.t > 0 ? e.t : p, ie = (e, t) => t && t.h > 0 ? t.h : e?.wallHeight ?? 1.2;
function ae(e) {
	let t = [];
	for (let n of e) t.push([n.x1, n.y1], [n.x2, n.y2]);
	return t;
}
function oe(e, t = g) {
	let n = ae(e).map(([e, t]) => ({
		x: e,
		y: t
	})), r = n.map(() => -1), i = [];
	for (let e = 0; e < n.length; e++) {
		for (let a = 0; a < i.length; a++) if (S(n[e].x, n[e].y, i[a].x, i[a].y) <= t) {
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
		S(n.x, n.y, i.x, i.y) < 1e-4 || s.push({
			...e,
			x1: n.x,
			y1: n.y,
			x2: i.x,
			y2: i.y
		});
	}), s;
}
function se(e, t) {
	let n = (e.walls || []).filter((e) => e.id !== t), r = new Set(n.map((e) => e.id));
	return {
		walls: n,
		openings: (e.openings || []).filter((e) => e.wallId !== t && r.has(e.wallId))
	};
}
function ce(e, t) {
	let n = D(e), r = (t.width || .9) / 2, i = Math.min(r, n / 2), a = Math.max(n - r, n / 2);
	return {
		...t,
		offset: Math.max(i, Math.min(a, t.offset))
	};
}
function le(e, t) {
	let n = (e?.walls || []).find((e) => e.id === t.wallId);
	if (!n) return null;
	let r = te(n);
	if (r.len < .02) return null;
	let i = (t.width ?? .9) / 2, a = ne(n, t.offset);
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
function ue(e, t, n, r = .35) {
	let i = null;
	for (let a of e) {
		let e = C(t, n, a.x1, a.y1, a.x2, a.y2);
		e.d <= r && (!i || e.d < i.d) && (i = {
			wall: a,
			...e
		});
	}
	return i;
}
var k = (e, t, n, r, i = g) => S(e, t, n, r) <= i;
function de(e) {
	let t = e.map(([e, t]) => `${Math.round(e * 100)},${Math.round(t * 100)}`), n = null;
	for (let e = 0; e < t.length; e++) {
		let r = t.slice(e).concat(t.slice(0, e)).join("|");
		(n === null || r < n) && (n = r);
	}
	let r = 5381;
	for (let e = 0; e < n.length; e++) r = (r * 33 ^ n.charCodeAt(e)) >>> 0;
	return "r" + r.toString(36);
}
function fe(e, t = e?.walls, n = e?.rooms) {
	let r = (t || []).filter((e) => D(e) > .02).map((e) => ({
		x1: e.x1,
		y1: e.y1,
		x2: e.x2,
		y2: e.y2
	})), i = [];
	r.length >= 3 && (i = u(r).filter((e) => e.area > 0));
	let a = i.filter((e) => e.area >= h), o = i.length - a.length, s = /* @__PURE__ */ new Set(), c = (n || []).filter((e) => Array.isArray(e.poly) && e.poly.length >= 3), l = [], d = a.map((e) => T(e.poly));
	a.forEach((e, t) => {
		for (let n of c) {
			let r = T(n.poly), i = E(r[0], r[1], e.poly) ? 2 : 0, a = +!!E(d[t][0], d[t][1], n.poly);
			(i || a) && l.push({
				fi: t,
				room: n,
				score: i + a,
				area: Math.abs(w(n.poly)),
				d: S(d[t][0], d[t][1], r[0], r[1])
			});
		}
	}), l.sort((e, t) => t.score - e.score || t.area - e.area || e.d - t.d);
	let f = /* @__PURE__ */ new Map();
	for (let e of l) f.has(e.fi) || s.has(e.room.id) || (f.set(e.fi, e.room), s.add(e.room.id));
	let p = 0;
	for (let e of c) {
		let t = /^房间\s*(\d+)$/.exec(e.name || "");
		t && (p = Math.max(p, +t[1]));
	}
	let m = a.map((e, t) => {
		let n = f.get(t);
		return n || (p += 1), {
			id: n?.id || de(e.poly),
			name: n?.name || `房间 ${p}`,
			poly: Ce(e.poly, .015),
			floor: n?.floor
		};
	});
	return m.sort((e, t) => Math.abs(w(t.poly)) - Math.abs(w(e.poly))), {
		rooms: m,
		tiny: o
	};
}
function A(e) {
	let { rooms: t, tiny: n } = fe(e, e.walls, e.rooms);
	return e.rooms = t, {
		rooms: t,
		tiny: n
	};
}
function pe(e, t = {}) {
	return oe((e || []).map((e) => re(e.x1, e.y1, e.x2, e.y2, t)).filter((e) => D(e) > .12), t.weld ?? .06);
}
function me(e) {
	let t = Array.isArray(e.rooms) ? e.rooms : [], n = [];
	for (let e of t) {
		let t = Array.isArray(e.poly) ? e.poly : [], r = t.length;
		for (let i = 0; i < r; i++) {
			let [a, o] = t[i], [s, c] = t[(i + 1) % r];
			S(a, o, s, c) < .02 || n.push({
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
	for (let e of n) r.some((t) => k(t.x1, t.y1, e.x1, e.y1) && k(t.x2, t.y2, e.x2, e.y2) || k(t.x1, t.y1, e.x2, e.y2) && k(t.x2, t.y2, e.x1, e.y1)) || r.push(re(e.x1, e.y1, e.x2, e.y2, {
		t: e.t,
		h: e.h,
		kind: e.kind,
		color: e.color
	}));
	let i = oe(r), a = [];
	for (let n of e.openings || []) {
		let e = t.find((e) => e.id === n.roomId)?.poly;
		if (!e || e.length < 2) continue;
		let r = e.length, o = ((n.edge | 0) % r + r) % r, [s, c] = e[o], [l, u] = e[(o + 1) % r], d = S(s, c, l, u);
		if (d < .05) continue;
		let f = i.find((e) => k(e.x1, e.y1, s, c) && k(e.x2, e.y2, l, u) || k(e.x1, e.y1, l, u) && k(e.x2, e.y2, s, c));
		if (!f) continue;
		let p = k(f.x1, f.y1, s, c), m = Number.isFinite(n.t) ? n.t : .5, h = p ? m * d : (1 - m) * d, { swing: g, hinge: _ } = he(e, s, c, l, u, h, p, n.width || n.w || .9);
		a.push({
			id: n.id || y("o"),
			type: n.type === "window" ? "window" : "door",
			wallId: f.id,
			offset: Math.max(0, Math.min(d, h)),
			width: n.w ?? n.width ?? .9,
			height: n.h ?? n.height ?? (n.type === "door" ? 2.1 : 1.2),
			bottom: n.type === "door" ? 0 : .9,
			windowStyle: "standard",
			hasLeaf: n.type === "door",
			doorStyle: "single",
			swing: g,
			hinge: _
		});
	}
	let o = {
		...e,
		v: 2,
		walls: i,
		openings: a,
		rooms: t
	}, { rooms: s } = fe(o, o.walls, t);
	return o.rooms = s, o;
}
function he(e, t, n, r, i, a, o, s) {
	let c = S(t, n, r, i), l = (r - t) / (c || 1), u = (i - n) / (c || 1), d = t + l * a, f = n + u * a, p = -u, m = l, h = Math.min(.6, Math.max(.3, s)), g = E(d + p * h, f + m * h, e), _ = E(d - p * h, f - m * h, e), v = g && !_, y = T(e), b = S(t, n, y[0], y[1]), x = S(r, i, y[0], y[1]);
	return {
		swing: v ? "inward" : "outward",
		hinge: (o ? b > x : x > b) ? "start" : "end"
	};
}
function ge(e, t, n = "door", r = {}) {
	let i = D(e), a = r.width ?? (n === "door" ? .9 : 1.2), o = a / 2, s = Math.min(o, i / 2), c = Math.max(i - o, i / 2);
	return {
		id: r.id || y("o"),
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
function _e(e, t, n, r = m, i = .05, a = {}) {
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
		let e = S(t, n, r, i);
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
			let a = S(t, n, r, i);
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
		hot: ye(y, b, _, v)
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
	let x = h !== null || g !== null ? ve(h === null ? b : y) : "free";
	if (o) {
		let e = .035, r = d * 2.5;
		for (let i of f) {
			let a = Math.min(i.y1, i.y2), s = Math.max(i.y1, i.y2), c = Math.min(i.x1, i.x2), l = Math.max(i.x1, i.x2);
			if (Math.abs(i.x2 - i.x1) < 1e-6) {
				if (Math.abs(o[0] - i.x1) > e || o[1] < a - e || o[1] > s + e || Math.abs(t - i.x1) > r) continue;
				h = i.x1, x = ve(i);
				break;
			}
			if (Math.abs(i.y2 - i.y1) < 1e-6) {
				if (Math.abs(o[1] - i.y1) > e || o[0] < c - e || o[0] > l + e || Math.abs(n - i.y1) > r) continue;
				g = i.y1, x = ve(i);
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
var ve = (e) => e ? e.src === "wall" ? "edge" : "guide" : "free", ye = (e, t, n, r) => n <= r ? e : t;
function be(e) {
	let t = e?.ppm || (e?.w ? e.w / 12 : 0);
	return {
		ppm: t,
		ww: t ? e.w / t : 0,
		wh: t ? e.h / t : 0
	};
}
function xe(e, t, n) {
	let { ppm: r, ww: i } = be(e);
	if (!r) return [0, 0];
	let a = t / r;
	return [e.flipX ? i - a : a, n / r];
}
function Se(e) {
	let t = e?.walls;
	if (!Array.isArray(t) || !t.length) return [];
	let n = [];
	for (let r of t) {
		if (!Array.isArray(r) || r.length < 4) continue;
		let [t, i] = xe(e, r[0], r[1]), [a, o] = xe(e, r[2], r[3]);
		n.push({
			x1: Math.min(t, a),
			y1: Math.min(i, o),
			x2: Math.max(t, a),
			y2: Math.max(i, o)
		});
	}
	return n;
}
function Ce(e, t = .02) {
	let n = [];
	for (let r of e) {
		let e = n[n.length - 1];
		(!e || S(e[0], e[1], r[0], r[1]) > t) && n.push([r[0], r[1]]);
	}
	for (; n.length > 3 && S(n[0][0], n[0][1], n[n.length - 1][0], n[n.length - 1][1]) <= t;) n.pop();
	if (n.length < 4) return n;
	let r = [];
	for (let e = 0; e < n.length; e++) {
		let i = n[(e - 1 + n.length) % n.length], a = n[e], o = n[(e + 1) % n.length], s = (a[0] - i[0]) * (o[1] - i[1]) - (a[1] - i[1]) * (o[0] - i[0]), c = S(i[0], i[1], o[0], o[1]) || 1;
		Math.abs(s) / c > t && r.push(a);
	}
	let i = [];
	for (let e of r) {
		let n = i[i.length - 1];
		(!n || S(n[0], n[1], e[0], e[1]) > t) && i.push(e);
	}
	for (; i.length > 3 && S(i[0][0], i[0][1], i[i.length - 1][0], i[i.length - 1][1]) <= t;) i.pop();
	return i.length >= 3 ? i : n;
}
function we(e) {
	return JSON.stringify(e);
}
function Te(e) {
	let t = JSON.parse(e), n = b(), r = {
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
	((t.v | 0) < 2 || !r.walls.length && r.rooms.length) && (i = me(r));
	let { rooms: a } = fe(i, i.walls, i.rooms);
	return i.rooms = a, i.v = 2, i.walls = i.walls.map((e) => ({
		id: e.id || y("w"),
		x1: +e.x1,
		y1: +e.y1,
		x2: +e.x2,
		y2: +e.y2,
		t: e.t > 0 ? +e.t : p,
		h: e.h > 0 ? +e.h : 0,
		kind: e.kind === "virtual" ? "virtual" : "solid",
		color: e.color || ""
	})), i.openings = i.openings.map((e) => ({
		id: e.id || y("o"),
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
var Ee = [
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
], De = [
	"#7dd3fc",
	"#a5b4fc",
	"#fca5a5",
	"#fcd34d",
	"#86efac",
	"#f9a8d4",
	"#fdba74",
	"#c4b5fd"
];
function Oe(e) {
	return De[e % De.length];
}
var j = {
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
}, M = {
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
}, ke = [
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
function Ae(e, t) {
	let n = e?.floor;
	return n ? n.color ? n.color : (M[n.tile] || {}).base || Oe(t) : Oe(t);
}
// src/floor3d/palettes.js
var je = {
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
function Me(e) {
	return je[e] || je.plan;
}
function Ne() {
	return Object.entries(je).map(([e, t]) => ({
		id: e,
		name: t.name
	}));
}
// src/floor3d/footprint.js
var Pe = {
	ac: {
		w: .78,
		d: .2,
		shape: "rect",
		front: !0
	},
	tv: {
		w: 1.46,
		d: .4,
		shape: "rect",
		front: !0
	},
	fridge: {
		w: .7,
		d: .7,
		shape: "rect",
		front: !0
	},
	washer: {
		w: .6,
		d: .6,
		shape: "rect",
		front: !0
	},
	dishwasher: {
		w: .57,
		d: .6,
		shape: "rect",
		front: !0
	},
	desk: {
		w: .32,
		d: .14,
		shape: "rect",
		front: !0
	},
	strip: {
		w: 1,
		d: .06,
		shape: "rect",
		front: !0
	},
	cam: {
		w: .22,
		d: .22,
		shape: "circle",
		front: !0
	},
	speaker: {
		w: .2,
		d: .2,
		shape: "circle",
		front: !0
	},
	vacuum: {
		w: .36,
		d: .36,
		shape: "circle",
		front: !0
	},
	lamp: {
		w: .28,
		d: .28,
		shape: "circle"
	},
	purifier: {
		w: .34,
		d: .34,
		shape: "circle"
	},
	downlight: {
		w: .24,
		d: .24,
		shape: "circle"
	},
	ceiling: {
		w: .3,
		d: .3,
		shape: "circle"
	},
	pendant: {
		w: .2,
		d: .2,
		shape: "circle"
	},
	fanlight: {
		w: .98,
		d: .98,
		shape: "circle"
	},
	generic: {
		w: .24,
		d: .24,
		shape: "circle"
	}
}, Fe = {
	w: .3,
	d: .3,
	shape: "circle"
};
function Ie(e) {
	return Pe[e] || Fe;
}
// src/floor3d/editor.js
var N = {
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
}, Le = {
	vertex: "墙角",
	corner: "墙角",
	guide: "底图墙线",
	edge: "已有墙",
	axis: "已锁直",
	grid: "网格",
	free: ""
}, Re = 11, ze = 10, Be = 8, Ve = class {
	constructor(e) {
		this.host = e, this.plan = null, this.hass = null, this.tool = "select", this.draft = {
			from: null,
			ids: []
		}, this.cursor = null, this.place = null, this.sel = null, this.guides = [], this.showGuides = !0, this.hot = null, this.wallT = p, this.view = {
			k: 60,
			tx: 0,
			ty: 0
		}, this.listeners = {
			change: [],
			sel: [],
			draft: [],
			tool: [],
			rooms: []
		}, this._drag = null, this._pan = null, this._press = null, this._marquee = null, this._mqPress = null, this._mqTimer = 0, this._raf = 0, this._imgs = /* @__PURE__ */ new Map();
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
		return this.guides = Se(this.plan?.base), this.requestRender(), this.guides;
	}
	setTool(e) {
		this.tool !== e && (this.tool = e, this.draft = {
			from: null,
			ids: []
		}, e !== "calibrate" && (this.calibPts = []), this.cancelPlace(), this.emit("tool", e), this.requestRender());
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
			let { ww: e, wh: n } = be(t.base);
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
		e && (e.setTransform(n, 0, 0, n, 0, 0), e.clearRect(0, 0, this.w, this.h), e.fillStyle = N.bg, e.fillRect(0, 0, this.w, this.h), this._drawGrid(), this._drawBase(), this.plan && (this._drawGuides(), this._drawRooms(), this._drawWalls(), this._drawHot(), this._drawOpenings(), this._drawFurniture(), this._drawDevices(), this._drawLabels(), this._drawPlaceGhost(), this._drawDraft(), this._drawCalib(), this._drawMarquee(), this._drawScaleHint()));
	}
	_drawCalib() {
		if (this.tool !== "calibrate" || !this.calibPts?.length) return;
		let { ctx: e } = this, [t, n] = this.calibPts[0], [r, i] = this.toScreen(t, n), [a, o] = this.cursor ? this.toScreen(this.cursor.x, this.cursor.y) : [r, i];
		e.save(), e.strokeStyle = N.draft, e.lineWidth = 2, e.setLineDash([7, 5]), e.beginPath(), e.moveTo(r, i), e.lineTo(a, o), e.stroke(), e.setLineDash([]);
		for (let [t, n] of [[r, i], [a, o]]) e.beginPath(), e.arc(t, n, 5, 0, Math.PI * 2), e.fillStyle = N.draft, e.fill();
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
			e.strokeStyle = Math.abs(i % 1) < 1e-6 ? N.gridBold : N.grid, e.beginPath(), e.moveTo(n, 0), e.lineTo(n, this.h), e.stroke();
		}
		for (let r = i; r <= o; r += n) {
			let n = Math.round(r * t.k + t.ty) + .5;
			e.strokeStyle = Math.abs(r % 1) < 1e-6 ? N.gridBold : N.grid, e.beginPath(), e.moveTo(0, n), e.lineTo(this.w, n), e.stroke();
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
		let { ww: n, wh: r } = be(e), [i, a] = this.toScreen(0, 0), [o, s] = this.toScreen(n, r);
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
		e.save(), e.strokeStyle = N.guide, e.lineWidth = 1.6, e.lineCap = "round", e.shadowColor = "rgba(77,148,255,.45)", e.shadowBlur = 5, e.beginPath();
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
			let r = this.sel?.type === "room" && this.sel.id === t.id, i = Ae(t, n);
			this._pathPoly(t.poly), e.fillStyle = r ? "rgba(77,148,255,.18)" : this._tint(i, .11), e.fill(), r && (e.strokeStyle = "rgba(77,148,255,.5)", e.lineWidth = 1.2, e.setLineDash([4, 4]), e.stroke(), e.setLineDash([]));
		});
	}
	_drawWalls() {
		let { ctx: e } = this, t = this.view.k;
		e.lineCap = "square", e.lineJoin = "miter";
		for (let n of this.plan.walls) {
			let r = this.sel?.type === "wall" && this.sel.id === n.id || this.sel?.ids?.includes(n.id), i = n.kind === "virtual", [a, o] = this.toScreen(n.x1, n.y1), [s, c] = this.toScreen(n.x2, n.y2);
			e.lineWidth = i ? 1.6 : Math.max(2, O(n) * t), e.setLineDash(i ? [6, 5] : []), e.strokeStyle = r ? N.wallSel : i ? "rgba(120,140,160,.5)" : n.color || N.wall, e.beginPath(), e.moveTo(a, o), e.lineTo(s, c), e.stroke();
		}
		if (e.setLineDash([]), this.tool === "select" && t >= 24 && this.plan.walls.length <= 80) for (let t of this.plan.walls) for (let [n, r] of [[t.x1, t.y1], [t.x2, t.y2]]) {
			let [t, i] = this.toScreen(n, r);
			e.beginPath(), e.arc(t, i, 3.2, 0, Math.PI * 2), e.fillStyle = "#ffffff", e.fill(), e.strokeStyle = "rgba(63,68,74,.78)", e.lineWidth = 1.6, e.stroke();
		}
		if (this.sel?.type === "wall") {
			let t = this.plan.walls.find((e) => e.id === this.sel.id);
			if (t) for (let [n, r] of [[t.x1, t.y1], [t.x2, t.y2]]) {
				let [t, i] = this.toScreen(n, r);
				e.beginPath(), e.rect(t - 4.5, i - 4.5, 9, 9), e.fillStyle = "#ffffff", e.fill(), e.strokeStyle = N.wallSel, e.lineWidth = 2, e.stroke();
			}
		}
	}
	_drawHot() {
		let { ctx: e } = this, t = [];
		if (this.hot && this.tool === "wall" && t.push({
			seg: this.hot,
			w: 3.2,
			col: this.hot.src === "wall" ? N.draft : N.guideHot
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
				col: N.wallSel
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
			let r = le(this.plan, n);
			if (!r) continue;
			let i = this.sel?.type === "opening" && this.sel.id === n.id, [a, o] = this.toScreen(r.ax, r.ay), [s, c] = this.toScreen(r.bx, r.by), l = Math.max(2, O(r.wall) * t), u = n.entityId ? this.hass?.states?.[n.entityId]?.state : null, d = i ? N.sel : u === "on" ? "#4d94ff" : n.type === "window" ? N.window : N.door;
			e.save(), e.lineCap = "butt", e.strokeStyle = N.bg, e.lineWidth = l, e.beginPath(), e.moveTo(a, o), e.lineTo(s, c), e.stroke();
			let f = -(c - o), p = s - a, m = Math.hypot(f, p) || 1, h = f / m, g = p / m;
			if (n.type === "window") {
				let t = l * .34;
				e.strokeStyle = d, e.lineWidth = 1.6, e.beginPath(), e.moveTo(a - h * t, o - g * t), e.lineTo(s - h * t, c - g * t), e.moveTo(a + h * t, o + g * t), e.lineTo(s + h * t, c + g * t), e.stroke(), e.strokeStyle = this._tint(i ? N.sel : N.window, .55), e.lineWidth = 1, e.beginPath(), e.moveTo(a, o), e.lineTo(s, c), e.stroke(), n.windowStyle === "sliding" && (e.beginPath(), e.moveTo((a + s) / 2 - h * t, (o + c) / 2 - g * t), e.lineTo((a + s) / 2 + h * t, (o + c) / 2 + g * t), e.stroke());
			} else if (e.strokeStyle = this._tint(d, .85), e.lineWidth = 2, e.beginPath(), e.moveTo(a, o), e.lineTo(s, c), e.stroke(), n.hasLeaf !== !1 && n.doorStyle === "sliding") {
				let t = l * .2, n = (a + s) / 2, r = (o + c) / 2;
				e.strokeStyle = d, e.lineWidth = 2.4, e.beginPath(), e.moveTo(a - h * t, o - g * t), e.lineTo(n - h * t, r - g * t), e.moveTo(n + h * t, r + g * t), e.lineTo(s + h * t, c + g * t), e.stroke(), e.lineWidth = 1.2, e.beginPath(), e.moveTo(n - h * t, r - g * t), e.lineTo(n - h * t - f / m * 3, r - g * t - p / m * 3), e.moveTo(n + h * t, r + g * t), e.lineTo(n + h * t + f / m * 3, r + g * t + p / m * 3), e.stroke();
			} else if (n.hasLeaf !== !1) {
				let a = Math.min(.7, Math.max(.35, n.width)), o = r.cx + r.nx * a, s = r.cy + r.ny * a, c = ee(this.plan, o, s) ? 1 : -1, l = (n.swing === "outward" ? -1 : 1) * c, u = n.doorStyle === "double" ? [{
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
					e.strokeStyle = this._tint(i ? N.sel : N.door, .5), e.lineWidth = 1.2, e.setLineDash([3, 3]), e.beginPath(), e.arc(s, c, n.len * t, h, h + v, v < 0), e.stroke(), e.setLineDash([]);
				}
			} else {
				e.strokeStyle = this._tint(d, .5), e.lineWidth = 1.2, e.setLineDash([4, 3]);
				let t = l * .3;
				e.beginPath(), e.moveTo(a - h * t, o - g * t), e.lineTo(s - h * t, c - g * t), e.moveTo(a + h * t, o + g * t), e.lineTo(s + h * t, c + g * t), e.stroke(), e.setLineDash([]);
			}
			if (i) for (let [t, n] of [[a, o], [s, c]]) e.beginPath(), e.arc(t, n, 3.5, 0, Math.PI * 2), e.fillStyle = N.sel, e.fill();
			e.restore();
		}
	}
	_drawFurniture() {
		let { ctx: e } = this;
		for (let t of this.plan.furniture) {
			let [n, r] = this.toScreen(t.x, t.y), i = t.scale || 1, a = t.w * i * this.view.k, o = t.d * i * this.view.k;
			e.save(), e.translate(n, r), e.rotate((t.rot || 0) * Math.PI / 180);
			let s = this._isSelItem("furniture", t.id);
			e.fillStyle = s ? "rgba(77,148,255,.22)" : "rgba(120,140,160,.16)", e.strokeStyle = s ? N.sel : "rgba(120,140,160,.55)", e.lineWidth = 1.4, this._roundRect(-a / 2, -o / 2, a, o, Math.min(6, Math.min(a, o) * .18)), e.fill(), e.stroke(), this.view.k > 26 && (e.fillStyle = N.textDim, e.textAlign = "center", e.font = "10px system-ui,sans-serif", e.fillText(t.name || "", 0, 3)), e.restore();
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
			].includes(a), s = this._isSelItem("device", n.id), c = n.art || n.dom || "generic", l = Ie(c), u = this.view.k * (n.scale || 1), d = Math.max(l.w, l.d) * u / 2;
			if (o) {
				let t = Math.max(14, d * 1.9), n = e.createRadialGradient(r, i, 0, r, i, t);
				n.addColorStop(0, "rgba(77,148,255,.28)"), n.addColorStop(1, "rgba(77,148,255,0)"), e.fillStyle = n, e.beginPath(), e.arc(r, i, t, 0, Math.PI * 2), e.fill();
			}
			let f = this._drawDeviceShape(c, r, i, n.rot || 0, {
				on: o,
				sel: s,
				scale: n.scale || 1
			});
			n.name && this.view.k > 22 && (e.fillStyle = N.textDim, e.textAlign = "center", e.font = "10px system-ui,sans-serif", e.fillText(n.name, r, i + f.h / 2 + 12));
		}
	}
	_drawDeviceShape(e, t, n, r, i = {}) {
		let { ctx: a } = this, o = Ie(e), s = this.view.k * (i.scale || 1), c = !!i.on, l = !!i.sel, u = !!i.ghost, d = Math.max(o.w * s, 10), f = Math.max(o.d * s, 10), p = u || l, m = p ? N.sel : c ? "rgba(77,148,255,.9)" : "rgba(116,136,160,.8)", h = u ? "rgba(77,148,255,.18)" : c ? "rgba(77,148,255,.20)" : "rgba(116,136,160,.14)";
		if (a.save(), a.translate(t, n), a.rotate((r || 0) * Math.PI / 180), a.fillStyle = h, a.strokeStyle = m, a.lineWidth = p ? 1.8 : 1.3, o.shape === "rect") {
			u && a.setLineDash([5, 4]);
			let t = Math.min(4, Math.min(d, f) * .16);
			this._roundRect(-d / 2, -f / 2, d, f, t), a.fill(), a.stroke(), a.setLineDash([]), this._deviceGlyph(e, d, f, p ? N.sel : c ? "#4d94ff" : "rgba(96,116,140,.9)"), o.front && (a.strokeStyle = p ? N.sel : c ? "rgba(77,148,255,1)" : "rgba(88,110,138,.95)", a.lineWidth = Math.min(3.2, Math.max(2, f * .22)), a.beginPath(), a.moveTo(-d / 2 + 1.5, f / 2), a.lineTo(d / 2 - 1.5, f / 2), a.stroke(), this._frontArrow(f / 2 + 3, 4.2, a.strokeStyle));
		} else {
			let t = Math.max(d, f) / 2;
			a.beginPath(), a.arc(0, 0, t, 0, Math.PI * 2), a.fill(), a.stroke(), this._deviceGlyph(e, t * 2, t * 2, p ? N.sel : c ? "#4d94ff" : "rgba(96,116,140,.9)"), o.front && this._frontArrow(t + 3, 4.2, p ? N.sel : c ? "rgba(77,148,255,1)" : "rgba(88,110,138,.95)");
		}
		a.restore();
		let g = (r || 0) * Math.PI / 180, _ = (Math.abs(d * Math.sin(g)) + Math.abs(f * Math.cos(g))) / 2;
		return {
			w: Math.max(d, f),
			h: _ * 2
		};
	}
	_frontArrow(e, t, n) {
		let r = this.ctx;
		r.save(), r.fillStyle = n, r.beginPath(), r.moveTo(0, e + t * 1.15), r.lineTo(-t * .72, e), r.lineTo(t * .72, e), r.closePath(), r.fill(), r.restore();
	}
	_deviceGlyph(e, t, n, r) {
		let i = this.ctx, a = Math.min(t, n) / 2 * .6;
		if (a < 5) return;
		let o = a / 10;
		i.save(), i.scale(o, o), i.strokeStyle = r, i.fillStyle = r, i.lineWidth = Math.max(.8, 1.5 / o), i.lineCap = "round", i.lineJoin = "round";
		let s = (e, t, n, r) => {
			i.beginPath(), i.moveTo(e, t), i.lineTo(n, r), i.stroke();
		}, c = (e, t, n, r) => {
			i.beginPath(), i.rect(e, t, n, r), i.stroke();
		}, l = (e, t, n) => {
			i.beginPath(), i.arc(e, t, n, 0, Math.PI * 2), i.fill();
		}, u = (e) => {
			i.beginPath(), i.arc(0, 0, e, 0, Math.PI * 2), i.stroke();
		};
		switch (e) {
			case "ac":
				s(-6, -3.5, 6, -3.5), s(-6, 0, 6, 0), s(-6, 3.5, 6, 3.5), l(5.5, -6.5, 1.1);
				break;
			case "tv":
				c(-8.5, -4.5, 17, 9), s(-3, 6.5, 3, 6.5);
				break;
			case "fridge":
				c(-8, -8, 16, 16), s(0, -8, 0, 8), s(-2.2, -5, -2.2, -1), s(2.2, -5, 2.2, -1);
				break;
			case "washer":
				u(7.4), i.beginPath(), i.arc(0, 0, 4.4, 0, Math.PI * 2), i.stroke(), l(5.6, -6.6, 1.1);
				break;
			case "dishwasher":
				c(-8.4, -6.4, 16.8, 12.8), s(-6, -3.6, 6, -3.6), s(-4.4, 3.4, 4.4, 3.4);
				break;
			case "desk":
				i.beginPath(), i.rect(-8, -2, 16, 4), i.fill(), s(0, 2, 0, 7);
				break;
			case "strip":
				i.beginPath(), i.rect(-8.5, -2.6, 17, 5.2), i.fill();
				break;
			case "cam":
				u(6.6), l(0, 0, 2.4);
				break;
			case "speaker":
				u(7), i.beginPath(), i.arc(0, 0, 3, 0, Math.PI * 2), i.stroke();
				break;
			case "vacuum":
				i.beginPath(), i.arc(0, 0, 6.6, Math.PI * .15, Math.PI * .85), i.stroke(), l(0, 0, 2.2);
				break;
			case "purifier":
				u(7);
				for (let e = -2; e <= 2; e++) s(-4.6, e * 2.2, 4.6, e * 2.2);
				break;
			case "downlight":
				u(6.6), l(0, 0, 2.6);
				break;
			case "ceiling":
				u(7.2), u(4.2);
				break;
			case "pendant":
				s(0, -7.5, 0, -1), i.beginPath(), i.moveTo(-5.2, 6.4), i.lineTo(5.2, 6.4), i.lineTo(0, -1), i.closePath(), i.fill();
				break;
			case "fanlight":
				for (let e = 0; e < 3; e++) {
					let t = e * Math.PI * 2 / 3 - Math.PI / 2;
					s(Math.cos(t) * 3, Math.sin(t) * 3, Math.cos(t) * 8, Math.sin(t) * 8), s(Math.cos(t + .5) * 8.2, Math.sin(t + .5) * 8.2, Math.cos(t + 1.1) * 8.2, Math.sin(t + 1.1) * 8.2);
				}
				l(0, 0, 2.4);
				break;
			case "lamp":
				l(0, 0, 2.6);
				for (let e = 0; e < 8; e++) {
					let t = e / 8 * Math.PI * 2;
					s(Math.cos(t) * 4.6, Math.sin(t) * 4.6, Math.cos(t) * 7.6, Math.sin(t) * 7.6);
				}
				break;
			default: c(-6.5, -6.5, 13, 13), l(0, 0, 1.8);
		}
		i.restore();
	}
	_drawLabels() {
		let { ctx: e } = this, t = this.view;
		if (!(t.k * .6 <= 9)) for (let n of this.plan.rooms) {
			let [r, i] = T(n.poly), [a, o] = this.toScreen(r, i), s = w(n.poly), c = this.sel?.type === "room" && this.sel.id === n.id;
			e.textAlign = "center", e.lineWidth = 3, e.strokeStyle = "rgba(255,255,255,.9)", e.font = `500 ${Math.min(15, Math.max(10, t.k * .22))}px system-ui,-apple-system,sans-serif`, e.strokeText(n.name, a, o - 2), e.fillStyle = c ? N.sel : N.text, e.fillText(n.name, a, o - 2), e.font = `400 ${Math.min(12, Math.max(9, t.k * .16))}px system-ui,-apple-system,sans-serif`, e.strokeText(s.toFixed(1) + " m²", a, o + 13), e.fillStyle = N.textDim, e.fillText(s.toFixed(1) + " m²", a, o + 13);
		}
	}
	_drawDraft() {
		let e = this.draft.from;
		if (!e) return;
		let { ctx: t } = this, n = this.view.k, r = Math.max(3, (this.wallT || .15) * n), [i, a] = this.toScreen(e[0], e[1]);
		if (t.globalAlpha = this.tool === "wall" ? 1 : .4, t.beginPath(), t.arc(i, a, 5, 0, Math.PI * 2), t.fillStyle = "#ffffff", t.fill(), t.strokeStyle = N.draft, t.lineWidth = 2.2, t.stroke(), this.cursor) {
			let [n, o] = this.toScreen(this.cursor.x, this.cursor.y);
			t.save(), t.lineCap = "butt", t.strokeStyle = "rgba(77,148,255,.20)", t.lineWidth = r, t.beginPath(), t.moveTo(i, a), t.lineTo(n, o), t.stroke(), t.strokeStyle = N.draft, t.lineWidth = 1.8, t.setLineDash([7, 5]), t.beginPath(), t.moveTo(i, a), t.lineTo(n, o), t.stroke(), t.setLineDash([]);
			let s = S(e[0], e[1], this.cursor.x, this.cursor.y).toFixed(2) + " m", c = Le[this.cursor.kind] || "";
			t.font = "600 11px ui-monospace,Menlo,monospace";
			let l = t.measureText(s).width, u = l + (c ? t.measureText(c).width + 20 : 14), d = n + 14, f = o - 26;
			t.fillStyle = "rgba(255,255,255,.94)", this._roundRect(d, f, u, 21, 6), t.fill(), t.strokeStyle = "rgba(77,148,255,.35)", t.lineWidth = 1, t.stroke(), t.fillStyle = N.draft, t.textAlign = "left", t.fillText(s, d + 7, f + 14), c && (t.fillStyle = "rgba(77,148,255,.9)", t.font = "500 10px system-ui,sans-serif", t.fillText(c, d + 11 + l, f + 14)), t.restore();
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
		e.strokeStyle = "rgba(120,140,160,.55)", e.lineWidth = 1.5, e.beginPath(), e.moveTo(18, i), e.lineTo(18 + r, i), e.moveTo(18, i - 4), e.lineTo(18, i + 4), e.moveTo(18 + r, i - 4), e.lineTo(18 + r, i + 4), e.stroke(), e.fillStyle = N.textDim, e.font = "11px system-ui,sans-serif", e.textAlign = "center", e.fillText(n + " m", 18 + r / 2, i - 8);
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
		let r = this.view.k > 0 ? 1 / this.view.k : .02, i = Re * r, a = ze * r, o = Be * r, s = null;
		for (let r of n.walls) for (let n of [0, 1]) {
			let a = S(e, t, n ? r.x2 : r.x1, n ? r.y2 : r.y1);
			a <= i && (!s || a < s.d) && (s = {
				type: "wall-end",
				id: r.id,
				which: n,
				d: a
			});
		}
		if (s) return s;
		for (let i of n.openings) {
			let o = le(n, i);
			if (o && C(e, t, o.ax, o.ay, o.bx, o.by).d <= Math.max(a, O(o.wall) / 2 + 2 * r)) return {
				type: "opening",
				id: i.id,
				wallId: i.wallId
			};
		}
		for (let r of n.devices) if (S(e, t, r.x, r.y) <= .34) return {
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
		let c = ue(n.walls, e, t, .6);
		if (c) {
			let e = Math.max(o, O(c.wall) / 2 + 2 * r);
			if (c.d <= e) return {
				type: "wall",
				id: c.wall.id
			};
		}
		let l = ee(n, e, t);
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
	_isSelItem(e, t) {
		let n = this.sel;
		return n ? n.type === e && n.id === t || n.type === "group" && n.items.some((n) => n.type === e && n.id === t) : !1;
	}
	_makeGroupDrag(e, t) {
		return {
			kind: "group",
			items: this.sel.items.map((e) => {
				let t = (e.type === "device" ? this.plan.devices : this.plan.furniture).find((t) => t.id === e.id);
				return t ? {
					o: t,
					x: t.x,
					y: t.y
				} : null;
			}).filter(Boolean),
			ox: e,
			oy: t
		};
	}
	_applyMarquee(e) {
		let t = Math.min(e.x0, e.x1), n = Math.max(e.x0, e.x1), r = Math.min(e.y0, e.y1), i = Math.max(e.y0, e.y1), a = (e, a) => e >= t && e <= n && a >= r && a <= i, o = [];
		for (let e of this.plan.devices) {
			let [t, n] = this.toScreen(e.x, e.y);
			a(t, n) && o.push({
				type: "device",
				id: e.id
			});
		}
		for (let e of this.plan.furniture) {
			let [t, n] = this.toScreen(e.x, e.y);
			a(t, n) && o.push({
				type: "furniture",
				id: e.id
			});
		}
		this.select(o.length ? {
			type: "group",
			items: o
		} : null);
	}
	_drawMarquee() {
		if (!this._marquee) return;
		let { ctx: e } = this, t = Math.min(this._marquee.x0, this._marquee.x1), n = Math.min(this._marquee.y0, this._marquee.y1), r = Math.abs(this._marquee.x1 - this._marquee.x0), i = Math.abs(this._marquee.y1 - this._marquee.y0);
		r < 1 || i < 1 || (e.save(), e.setLineDash([5, 4]), e.lineWidth = 1.2, e.strokeStyle = N.sel, e.fillStyle = "rgba(77,148,255,.08)", e.fillRect(t, n, r, i), e.strokeRect(t, n, r, i), e.restore());
	}
	_drawXformHandles() {
		let e = this._xformItem();
		if (!e) {
			this._handles = null;
			return;
		}
		let { ctx: t } = this, n = (e.it.rot || 0) * Math.PI / 180, [r, i] = this.toScreen(e.it.x, e.it.y), a = e.w / 2 * this.view.k, o = e.d / 2 * this.view.k, s = Math.cos(n), c = Math.sin(n);
		t.save(), t.translate(r, i), t.rotate(n), t.strokeStyle = N.sel, t.lineWidth = 1.2, t.setLineDash([5, 4]), t.strokeRect(-a, -o, a * 2, o * 2), t.setLineDash([]), t.restore();
		let l = r + s * (a + 22), u = i + c * (a + 22);
		t.strokeStyle = N.sel, t.lineWidth = 1.2, t.beginPath(), t.moveTo(r + s * a, i + c * a), t.lineTo(l, u), t.stroke(), t.beginPath(), t.arc(l, u, 6.5, 0, Math.PI * 2), t.fillStyle = N.bg, t.fill(), t.lineWidth = 2, t.stroke();
		let d = r + s * -a - c * -o, f = i + c * -a + s * -o;
		t.beginPath(), t.rect(d - 5.5, f - 5.5, 11, 11), t.fillStyle = N.bg, t.fill(), t.lineWidth = 2, t.stroke(), this._handles = {
			rot: [l, u],
			scale: [d, f]
		};
	}
	_snapAt(e, t) {
		let n = this.view.k > 0 ? 1 / this.view.k : 0, r = _e(this.plan, e, t, .1, .02, {
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
			if (this.place) {
				this.cancelPlace();
				return;
			}
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
		if (this.place) {
			this._placeAt(r, i);
			return;
		}
		if (this.tool === "span") {
			let e = ue(this.plan.walls, r, i, Math.max(.15, 12 / this.view.k));
			if (!e) {
				this.emit("notice", "请点在已有墙线上，可选端点、交点或任意位置");
				return;
			}
			let t = ne(e.wall, e.t * D(e.wall));
			if (!this.draft.from) this.draft.from = [t.x, t.y], this.emit("notice", "起点已选，请在同一直墙上点终点；Esc 取消");
			else {
				let e = x(this.plan, {
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
				this.emit("calibrated", S(e, t, r, i));
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
			let e = ue(this.plan.walls, r, i, .5);
			if (!e) {
				this.emit("notice", "没点中墙：把门/窗放在墙上才能开洞");
				return;
			}
			let t = e.wall, n = ge(t, e.t * D(t), this.tool, { width: this.tool === "door" ? .9 : 1.2 }), a = this.tool === "door";
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
				d0: Math.max(.15, S(r, i, e.it.x, e.it.y))
			});
		} else if (a) {
			if ((a.type === "furniture" || a.type === "device") && this.sel?.type === "group" && this.sel.items.some((e) => e.type === a.type && e.id === a.id)) {
				this._drag = this._makeGroupDrag(r, i);
				return;
			}
			if (this.select(a.type === "wall-end" ? {
				type: "wall",
				id: a.id
			} : a), a.type === "wall-end") {
				let e = this.plan.walls.find((e) => e.id === a.id), t = a.which === 0 ? e.x1 : e.x2, n = a.which === 0 ? e.y1 : e.y2, r = this.plan.walls.filter((e) => S(e.x1, e.y1, t, n) <= .06 || S(e.x2, e.y2, t, n) <= .06).map((e) => e.id);
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
		} else this.select(null), this._mqPress = {
			sx: t,
			sy: n,
			tx: this.view.tx,
			ty: this.view.ty
		}, clearTimeout(this._mqTimer), this._mqTimer = setTimeout(() => {
			this._mqPress = null, this._marquee = {
				x0: t,
				y0: n,
				x1: t,
				y1: n
			}, this.cv.style.cursor = "crosshair", this.requestRender();
		}, 280);
	}
	_move(e) {
		let [t, n] = this._local(e), [r, i] = this.toWorld(t, n);
		if (this._pan) this.view.tx = this._pan.tx + (t - this._pan.sx), this.view.ty = this._pan.ty + (n - this._pan.sy), this.requestRender();
		else if (this._mqPress) {
			let e = t - this._mqPress.sx, r = n - this._mqPress.sy;
			Math.hypot(e, r) > 5 && (clearTimeout(this._mqTimer), this._mqTimer = 0, this._pan = {
				sx: this._mqPress.sx,
				sy: this._mqPress.sy,
				tx: this._mqPress.tx,
				ty: this._mqPress.ty
			}, this._mqPress = null, this.cv.style.cursor = "grabbing");
		} else if (this._marquee) this._marquee.x1 = t, this._marquee.y1 = n, this.cv.style.cursor = "crosshair", this.requestRender();
		else if (this.place) this.place.x = r, this.place.y = i, this.cv.style.cursor = "copy", this.requestRender();
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
				t && (e.kind === "handle-rot" ? t.rot = Math.round(Math.atan2(i - t.y, r - t.x) * 180 / Math.PI) : t.scale = Math.round(Math.max(.3, Math.min(4, e.s0 * S(r, i, t.x, t.y) / e.d0)) * 100) / 100, this.requestRender());
				return;
			}
			if (e.kind === "wall-end") {
				let t = _e(this.plan, r, i, .1, .02, {
					guides: this.guides,
					px: 1 / this.view.k,
					skip: new Set(e.mates || [e.id])
				});
				for (let n of this.plan.walls) (e.mates || [e.id]).includes(n.id) && (S(n.x1, n.y1, e.x0, e.y0) <= .06 && (n.x1 = t.x, n.y1 = t.y), S(n.x2, n.y2, e.x0, e.y0) <= .06 && (n.x2 = t.x, n.y2 = t.y));
				A(this.plan);
			} else if (e.kind === "furniture" || e.kind === "device") {
				let t = (e.kind === "furniture" ? this.plan.furniture : this.plan.devices).find((t) => t.id === e.id);
				t && (t.x = e.x0 + (r - e.ox), t.y = e.y0 + (i - e.oy));
			} else if (e.kind === "group") for (let t of e.items) t.o.x = t.x + (r - e.ox), t.o.y = t.y + (i - e.oy);
			else if (e.kind === "opening") {
				let t = this.plan.openings.find((t) => t.id === e.id), n = t && this.plan.walls.find((e) => e.id === t.wallId);
				if (t && n) {
					let e = C(r, i, n.x1, n.y1, n.x2, n.y2);
					t.offset = ce(n, {
						...t,
						offset: e.t * D(n)
					}).offset;
				}
			}
			this.requestRender();
		} else if (this.tool === "select") {
			let e = this._hitTest(r, i);
			this.cv.style.cursor = e ? e.type === "wall-end" ? "move" : e.type === "opening" ? "ew-resize" : "pointer" : "default";
		} else (this.tool === "door" || this.tool === "window") && (this.cv.style.cursor = ue(this.plan.walls, r, i, .5) ? "copy" : "default");
	}
	_up(e) {
		if (this._mqPress) clearTimeout(this._mqTimer), this._mqTimer = 0, this._mqPress = null;
		else if (this._marquee) {
			let e = this._marquee;
			this._marquee = null, this.cv.style.cursor = "", this._applyMarquee(e), this.requestRender();
		} else if (this._pan) this._pan = null, this.cv.style.cursor = "", this.requestRender();
		else if (this._drag) {
			let e = this._drag.kind;
			if (this._drag = null, this._changed(), e === "wall-end") {
				let { rooms: e, tiny: t } = A(this.plan);
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
		if (t !== "input" && t !== "textarea" && t !== "select") {
			if (e.key === "Shift") this._shift = !0;
			else if (e.key === " ") this._space = !0, e.preventDefault();
			else if (e.key === "Escape") {
				if (this.place) {
					this.cancelPlace();
					return;
				}
				if (this._marquee) {
					this._marquee = null, this.cv.style.cursor = "", this.requestRender();
					return;
				}
				if (this._mqPress) {
					clearTimeout(this._mqTimer), this._mqPress = null;
					return;
				}
				this.endDraft() || this.select(null);
			} else if (this.place && (e.key === "r" || e.key === "R")) {
				let t = e.shiftKey ? 90 : 15;
				this.place.rot = (((this.place.rot || 0) + t) % 360 + 360) % 360, this.emit("notice", `朝向 ${this.place.rot}°（R 再转 15°，Shift+R 转 90°）`), this.requestRender();
			} else e.key === "Enter" ? this.endDraft() : (e.key === "Delete" || e.key === "Backspace") && this.sel && (e.preventDefault(), this.deleteSelected());
		}
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
		if (S(i.from[0], i.from[1], n.x, n.y) < a) return;
		r.walls.push(re(i.from[0], i.from[1], n.x, n.y, { t: this.wallT || .15 })), i.ids.push(r.walls[r.walls.length - 1].id), i.from = [n.x, n.y];
		let o = r.rooms.length, s = new Set(r.rooms.map((e) => e.id)), { rooms: c, tiny: l } = A(r), u = c.filter((e) => !s.has(e.id));
		u.length && (u.sort((e, t) => Math.abs(w(t.poly)) - Math.abs(w(e.poly))), this.select({
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
			e.from = [r.x1, r.y1], this.plan.walls.splice(n, 1), this.plan.openings = this.plan.openings.filter((e) => e.wallId !== t), A(this.plan);
		}
		return this.emit("draft", e), this._changed(), !0;
	}
	adoptGuides() {
		let e = this.guides;
		if (!e?.length) return {
			ok: !1,
			reason: "no-guides"
		};
		let t = pe(e, { t: this.wallT || .15 });
		if (!t.length) return {
			ok: !1,
			reason: "empty"
		};
		this.plan.walls = t, this.plan.openings = [], this.draft = {
			from: null,
			ids: []
		}, this.sel = null;
		let { rooms: n, tiny: r } = A(this.plan);
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
		let t = this.plan.rooms.length, { walls: n, openings: r } = se(this.plan, e), i = this.plan.openings.length - r.length;
		this.plan.walls = n, this.plan.openings = r;
		let { rooms: a, tiny: o } = A(this.plan);
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
		} else {
			if (e.type === "opening") t.openings = t.openings.filter((t) => t.id !== e.id);
			else if (e.type === "furniture") t.furniture = t.furniture.filter((t) => t.id !== e.id);
			else if (e.type === "device") t.devices = t.devices.filter((t) => t.id !== e.id);
			else if (e.type === "group") {
				let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
				for (let t of e.items) t.type === "device" ? n.add(t.id) : t.type === "furniture" && r.add(t.id);
				t.devices = t.devices.filter((e) => !n.has(e.id)), t.furniture = t.furniture.filter((e) => !r.has(e.id));
			} else e.type === "room" && this.emit("notice", "房间是墙围出来的结果，不能直接删 —— 想合并就删中间那堵墙");
			this.select(null), this._changed();
		}
	}
	addFurniture(e, t, n, r) {
		let i = Ee.find((t) => t.kind === e);
		if (!i) return;
		let a = {
			id: y("f"),
			kind: e,
			name: i.name,
			x: t ?? 0,
			y: n ?? 0,
			rot: r || 0,
			w: i.w,
			d: i.d
		};
		return this.plan.furniture.push(a), this.select({
			type: "furniture",
			id: a.id
		}), this._changed(), a;
	}
	addDevice(e, t, n, r, i) {
		let a = {
			id: y("d"),
			entity: e,
			name: t?.name || e,
			art: t?.art || "lamp",
			dom: t?.dom || "switch",
			cam: t?.cam || "",
			stream: t?.stream || "",
			x: n ?? 0,
			y: r ?? 0,
			rot: i || 0
		};
		return this.plan.devices.push(a), this.select({
			type: "device",
			id: a.id
		}), this._changed(), a;
	}
	beginPlace(e) {
		if (!e) return;
		let t = e.kind === "furniture" ? "furniture" : "device";
		this.place = {
			kind: t,
			kindName: e.kindName || e.dev?.kind || "",
			entity: e.entity || "",
			dev: e.dev || null,
			name: e.name || e.dev?.name || "",
			rot: e.rot || 0,
			x: this.place?.x ?? null,
			y: this.place?.y ?? null
		}, this.select(null), this.cv.style.cursor = "copy", this.emit("notice", "在户型上点一下放下；R 旋转15°（Shift+R 转90°），右键或 Esc 取消"), this.requestRender();
	}
	cancelPlace() {
		this.place && (this.place = null, this.cv && (this.cv.style.cursor = ""), this.emit("notice", ""), this.requestRender());
	}
	_placeAt(e, t) {
		let n = this.place;
		if (!n) return null;
		this.place = null;
		let r = n.kind === "furniture" ? this.addFurniture(n.kindName, e, t, n.rot || 0) : this.addDevice(n.entity, n.dev, e, t, n.rot || 0);
		return this.cv && (this.cv.style.cursor = ""), r && this.emit("placed", {
			type: n.kind,
			id: r.id
		}), this.emit("notice", ""), this.requestRender(), r;
	}
	_drawPlaceGhost() {
		let e = this.place;
		if (!e || e.x == null || e.y == null) return;
		let { ctx: t } = this, [n, r] = this.toScreen(e.x, e.y), i = e.rot || 0, a;
		if (e.kind === "furniture") {
			let o = Ee.find((t) => t.kind === e.kindName), s = Math.max((o?.w || .6) * this.view.k, 10), c = Math.max((o?.d || .6) * this.view.k, 10);
			t.save(), t.translate(n, r), t.rotate(i * Math.PI / 180), t.setLineDash([6, 4]), t.fillStyle = "rgba(77,148,255,.16)", t.strokeStyle = N.sel, t.lineWidth = 1.6, this._roundRect(-s / 2, -c / 2, s, c, Math.min(6, Math.min(s, c) * .18)), t.fill(), t.stroke(), t.setLineDash([]), this.view.k > 26 && (t.fillStyle = N.textDim, t.textAlign = "center", t.font = "10px system-ui,sans-serif", t.fillText(e.name || "", 0, 3)), t.restore(), a = {
				w: Math.max(s, c),
				h: Math.max(s, c)
			};
		} else a = this._drawDeviceShape(e.dev?.art || "generic", n, r, i, { ghost: !0 }), e.name && this.view.k > 22 && (t.fillStyle = N.textDim, t.textAlign = "center", t.font = "10px system-ui,sans-serif", t.fillText(e.name, n, r + a.h / 2 + 12));
		t.save(), t.strokeStyle = "rgba(77,148,255,.5)", t.lineWidth = 1, t.beginPath(), t.moveTo(n - 15, r), t.lineTo(n - 6, r), t.moveTo(n + 6, r), t.lineTo(n + 15, r), t.moveTo(n, r - 15), t.lineTo(n, r - 6), t.moveTo(n, r + 6), t.lineTo(n, r + 15), t.stroke(), t.restore();
	}
	applyCalibration(e, t) {
		if (!(t > 0) || !(e > 0)) return;
		let n = e / t;
		Math.abs(n - 1) < 1e-4 || (He(this.plan, 1 / n), this.plan.base.ppm && (this.plan.base.ppm *= n), A(this.plan), this.refreshGuides(), this._changed(), this.requestRender());
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
function He(e, t) {
	for (let n of e.walls || []) n.x1 *= t, n.y1 *= t, n.x2 *= t, n.y2 *= t, n.t = (n.t || .15) * t;
	for (let n of e.openings || []) n.offset *= t, n.width *= t, n.height *= t, n.bottom *= t;
	for (let n of e.furniture) n.x *= t, n.y *= t, n.w *= t, n.d *= t;
	for (let n of e.devices) n.x *= t, n.y *= t;
	for (let n of e.rooms) n.poly = n.poly.map(([e, n]) => [e * t, n * t]);
	return e;
}
// src/floor3d/ac-card.js
var Ue = {
	off: "关闭",
	cool: "制冷",
	heat: "制热",
	heat_cool: "自动",
	auto: "自动",
	dry: "除湿",
	fan_only: "送风"
}, We = {
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
}, Ge = {
	on: "开",
	off: "关",
	vertical: "上下",
	horizontal: "左右",
	both: "上下+左右"
}, Ke = {
	auto: "自动",
	sleep: "睡眠",
	favorite: "最爱",
	normal: "标准",
	none: "无"
}, P = {
	back: "<svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\"><path d=\"M15 5 8 12l7 7\"/></svg>",
	temp: "<svg viewBox=\"0 0 24 24\"><path d=\"M10 13.6V5.5a2 2 0 1 1 4 0v8.1a4 4 0 1 1-4 0Z\"/></svg>",
	power: "<svg viewBox=\"0 0 24 24\"><path d=\"M12 4v8\"/><path d=\"M7.8 6.8a7 7 0 1 0 8.4 0\"/></svg>",
	powerOff: "<svg viewBox=\"0 0 24 24\"><path d=\"M12 4v8\"/><path d=\"M7.8 6.8a7 7 0 1 0 8.4 0\"/><path d=\"m4.5 19.5 15-15\"/></svg>",
	swap: "<svg viewBox=\"0 0 24 24\"><path d=\"M4 9h13l-3.2-3.2M20 15H7l3.2 3.2\"/></svg>"
}, qe = {
	heating: "正在制热",
	cooling: "正在制冷",
	drying: "正在除湿",
	fan: "正在送风",
	idle: "待机",
	off: "停止"
}, Je = [
	"cool",
	"dry",
	"fan_only",
	"heat",
	"heat_cool",
	"auto",
	"off"
], F = (e) => String(e ?? "").replace(/[&<>"']/g, (e) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
})[e]), I = (e) => {
	let t = Number(e);
	return Number.isFinite(t) ? String(Math.round(t * 10) / 10) : "—";
};
function Ye({ name: e, state: t, a: n = {} }) {
	Ze = 0;
	let r = !t || t === "off" || t === "unavailable" || t === "unknown", i = n.current_temperature, a = n.temperature == null ? 26 : n.temperature, o = n.min_temp == null ? 16 : Math.round(n.min_temp), s = n.max_temp == null ? 31 : Math.round(n.max_temp), c = n.target_temp_step || .5, l = Math.max(0, Math.min(100, (a - o) / (s - o || 1) * 100)), u = r ? "已关闭" : Ue[t] || t, d = (e) => e == null || e === "" ? "—" : `${I(e)}°C`, f = r ? "neutral" : {
		cool: "cool",
		heat: "heat",
		heat_cool: "auto",
		auto: "auto",
		dry: "dry",
		fan_only: "neutral"
	}[t] || "live", p = `<div class="ac-hero">
      <button class="ac-step" data-step="-1" aria-label="降低温度">−</button>
      <div class="ac-now"><b data-ac-tval>${I(a)}</b><em>°C</em><span>目标温度</span></div>
      <button class="ac-step" data-step="1" aria-label="升高温度">+</button>
    </div>`, m = `<div class="ac-read">
      <div><span>当前温度</span><b>${d(i)}</b></div>
      <div><span>可调范围</span><b>${o} - ${s}°C</b></div>
    </div>`, h = Qe("开关", `<div class="ac-pw">
      <button data-pw="on" class="${r ? "" : "on"}">${P.power}启动</button>
      <button data-pw="off" class="${r ? "on" : ""}">${P.powerOff}关闭</button>
      <button data-pw="toggle">${P.swap}切换</button>
    </div>`), g = Qe("温度调节", `
      <input class="ac-range" type="range" min="${o}" max="${s}" step="${c}"
        value="${a}" aria-label="目标温度" style="--pct:${l.toFixed(1)}%">
      <div class="ac-set"><i>${P.temp}</i><span>设定温度</span><b data-ac-tgt>${d(a)}</b></div>
    `, `步进 ${I(c)}°C`), _ = (e) => Je.includes(e) ? Je.indexOf(e) : 99, v = (n.hvac_modes?.length ? [...n.hvac_modes] : [
		"off",
		"cool",
		"heat",
		"dry",
		"fan_only"
	]).sort((e, t) => _(e) - _(t)), y = `<div class="ac-wrap" data-tone="${F(f)}">
      <div class="ac-head">
        <button class="ac-back" data-act="close" aria-label="返回">${P.back}</button>
        <div class="ac-meta">
          <b>${F(e)}</b>
          <span class="ac-pill${r ? "" : " live"}">${F(u)}</span>
        </div>
      </div>
      ${p}
      ${m}
      ${h}
      ${g}
      ${$e("运行模式", v, t, "set_hvac_mode", "hvac_mode", Ue)}
      ${$e("风速", n.fan_modes, n.fan_mode, "set_fan_mode", "fan_mode", We)}
      ${$e("摆风", n.swing_modes, n.swing_mode, "set_swing_mode", "swing_mode", Ge)}
      ${$e("预设", n.preset_modes, n.preset_mode, "set_preset_mode", "preset_mode", Ke)}
    </div>`;
	return n.hvac_action && (y += `<div class="ac-foot">${F(qe[n.hvac_action] || n.hvac_action)}</div>`), y;
}
function Xe(e, t, n, r, i) {
	return e.map((e) => `<button data-seg data-domain="climate" data-service="${n}"
    data-key="${r}" data-value="${F(e)}" class="${e === t ? "on" : ""}">${F(i[e] || e)}</button>`).join("");
}
var Ze = 0, Qe = (e, t, n = "") => (Ze += 1, `<div class="ac-sec"><h4><i class="ac-no">${String(Ze).padStart(2, "0")}</i><span>${F(e)}</span>${n ? `<em>${F(n)}</em>` : ""}</h4>${t}</div>`);
function $e(e, t, n, r, i, a) {
	return t?.length ? Qe(e, `<div class="ac-grid" style="--n:${t.length <= 4 ? Math.max(t.length, 1) : 3}">${Xe(t, n, r, i, a)}</div>`) : "";
}
function et(e, t) {
	if (!e) return;
	e.querySelectorAll("button[data-pw]").forEach((n) => {
		n.onclick = () => {
			let r = n.dataset.pw;
			t(r === "on" ? "turn_on" : r === "off" ? "turn_off" : "toggle", {}), e.querySelectorAll("button[data-pw]").forEach((e) => e.classList.remove("on")), r !== "toggle" && n.classList.add("on");
		};
	});
	let n = e.querySelector(".ac-range");
	if (!n) return;
	let r = (t) => {
		let r = +n.min, i = +n.max, a = Math.max(0, Math.min(100, (t - r) / (i - r || 1) * 100));
		n.style.setProperty("--pct", a.toFixed(1) + "%"), n.value = String(t);
		let o = e.querySelector("[data-ac-tval]"), s = e.querySelector("[data-ac-tgt]");
		o && (o.textContent = I(t)), s && (s.textContent = `${I(t)}°C`);
	};
	n.oninput = () => {
		let e = parseFloat(n.value);
		r(e), t("set_temperature", { temperature: e });
	}, e.querySelectorAll("button[data-step]").forEach((e) => {
		e.onclick = () => {
			let i = +n.step || 1, a = +n.min, o = +n.max, s = Math.min(o, Math.max(a, (parseFloat(n.value) || a) + i * +e.dataset.step));
			s !== parseFloat(n.value) && (r(s), t("set_temperature", { temperature: s }));
		};
	}), n.addEventListener("pointerdown", (e) => e.stopPropagation());
}
// src/floor3d/device-card.js
var L = (e) => String(e ?? "").replace(/[&<>"']/g, (e) => ({
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
})[e]), tt = (e, t = 0) => {
	let n = Number(e);
	return Number.isFinite(n) ? String(t > 0 ? Math.round(n * 10 ** t) / 10 ** t : Math.round(n)) : "—";
}, R = {
	back: "<svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\"><path d=\"M15 5 8 12l7 7\"/></svg>",
	power: "<svg viewBox=\"0 0 24 24\"><path d=\"M12 4v8\"/><path d=\"M7.8 6.8a7 7 0 1 0 8.4 0\"/></svg>",
	sun: "<svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4\"/></svg>",
	drop: "<svg viewBox=\"0 0 24 24\"><path d=\"M12 3.5 6.8 9.6a6.6 6.6 0 1 0 10.4 0Z\"/></svg>",
	fan: "<svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M12 10c0-3 1-6 4-6s3 4 0 5.2M14 12c3 0 6 1 6 4s-4 3-5.2 0M12 14c0 3-1 6-4 6s-3-4 0-5.2M10 12c-3 0-6-1-6-4s4-3 5.2 0\"/></svg>",
	clock: "<svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"8.4\"/><path d=\"M12 7.6V12l3 1.8\"/></svg>",
	play: "<svg viewBox=\"0 0 24 24\"><path d=\"M8 5.5 18 12 8 18.5Z\"/></svg>",
	pause: "<svg viewBox=\"0 0 24 24\"><path d=\"M9 5.5v13M15 5.5v13\"/></svg>",
	stop: "<svg viewBox=\"0 0 24 24\"><rect x=\"6.5\" y=\"6.5\" width=\"11\" height=\"11\" rx=\"2\"/></svg>",
	lock: "<svg viewBox=\"0 0 24 24\"><rect x=\"5\" y=\"10.5\" width=\"14\" height=\"9.5\" rx=\"2.5\"/><path d=\"M8.2 10.5V8a3.8 3.8 0 0 1 7.6 0v2.5\"/></svg>",
	home: "<svg viewBox=\"0 0 24 24\"><path d=\"M4 11.5 12 5l8 6.5\"/><path d=\"M6.5 10.5V19h11v-8.5\"/></svg>",
	gear: "<svg viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 3.5v2.6M12 17.9v2.6M3.5 12h2.6M17.9 12h2.6M6 6l1.9 1.9M16.1 16.1 18 18M18 6l-1.9 1.9M7.9 16.1 6 18\"/></svg>",
	bolt: "<svg viewBox=\"0 0 24 24\"><path d=\"M13 3 5.5 13.5H11l-1 7.5 8-11H12Z\"/></svg>"
}, nt = [
	[
		255,
		214,
		170
	],
	[
		255,
		240,
		214
	],
	[
		255,
		255,
		255
	],
	[
		200,
		226,
		255
	],
	[
		150,
		190,
		255
	],
	[
		170,
		160,
		255
	],
	[
		214,
		150,
		255
	],
	[
		255,
		150,
		200
	],
	[
		255,
		110,
		110
	],
	[
		255,
		168,
		80
	],
	[
		140,
		240,
		200
	],
	[
		110,
		210,
		255
	]
], rt = /* @__PURE__ */ new Set([
	"on",
	"open",
	"unlocked",
	"playing",
	"cleaning",
	"returning",
	"paused",
	"heat",
	"cool",
	"heat_cool",
	"auto",
	"dry",
	"fan_only",
	"heating",
	"cooling",
	"drying",
	"idle"
]), it = (e) => rt.has(String(e || "").toLowerCase()), z = (e, t, n) => `<div class="ac-head">
  <button class="ac-back" data-act="close" aria-label="返回">${R.back}</button>
  <div class="ac-meta">
    <b>${L(e)}</b>
    <span class="ac-pill${n ? " live" : ""}">${L(t)}</span>
  </div>
</div>`, B = (e, t, n, { step: r = 0, domain: i = "", service: a = "", field: o = "", min: s = 0, max: c = 100, entity: l = "", text: u = !1 } = {}) => {
	let d = `data-domain="${L(i)}" data-service="${L(a)}" data-field="${L(o)}"
    data-entity="${L(l)}" data-min="${s}" data-max="${c}"`, f = r ? `<button class="ac-step" data-step="${-r}" ${d}>−</button>` : "", p = r ? `<button class="ac-step" data-step="${r}" ${d}>+</button>` : "";
	return `<div class="ac-hero">
    ${f}
    <div class="ac-now${u ? " txt" : ""}"><b data-big>${L(e)}</b><em>${L(t)}</em>${n ? `<span>${L(n)}</span>` : ""}</div>
    ${p}
  </div>`;
}, V = (e) => `<div class="ac-read">${e.filter(Boolean).map(([e, t]) => `
  <div><span>${L(e)}</span><b>${L(t)}</b></div>`).join("")}</div>`, at = 0, H = (e, t, n = "") => (at += 1, `<div class="ac-sec"><h4><i class="ac-no">${String(at).padStart(2, "0")}</i><span>${L(e)}</span>${n ? `<em>${L(n)}</em>` : ""}</h4>${t}</div>`), U = (e, { domain: t, service: n, field: r = "", value: i = "", on: a = !1, icon: o = "", entity: s = "" }) => `<button data-domain="${L(t)}" data-service="${L(n)}"
    ${r ? `data-field="${L(r)}" data-value="${L(i)}"` : ""}
    ${s ? `data-entity="${L(s)}"` : ""}
    class="${a ? "on" : ""}">${o}${L(e)}</button>`, ot = (e) => {
	if (e <= 4) return Math.max(e, 1);
	let t = (t) => e % t === 0 ? 0 : t - e % t;
	return t(4) <= t(3) ? 4 : 3;
}, W = (e, t) => e.length ? `<div class="ac-grid" style="--n:${t || ot(e.length)}">${e.join("")}</div>` : "", G = ({ kind: e, domain: t, service: n, field: r, entity: i = "", min: a = 0, max: o = 100, step: s = 1, value: c = 0, readout: l = "", extra: u = "" }) => {
	let d = Math.max(0, Math.min(100, (c - a) / (o - a || 1) * 100));
	return `<input class="ac-range${u}" type="range" min="${a}" max="${o}" step="${s}" value="${c}"
    data-kind="${L(e)}" data-domain="${L(t)}" data-service="${L(n)}"
    data-field="${L(r)}" data-entity="${L(i)}" data-readout="${L(l)}"
    aria-label="${L(e)}" style="--pct:${d.toFixed(1)}%">`;
}, st = /* @__PURE__ */ new Set(/* @__PURE__ */ "friendly_name.icon.device_class.supported_features.supported_color_modes.hs_color.rgb_color.xy_color.rgbw_color.rgbww_color.color_mode.min_color_temp_kelvin.max_color_temp_kelvin.min_mireds.max_mireds.effect_list.hvac_modes.fan_modes.swing_modes.preset_modes.source_list.entity_id.editable.hidden.restored.attribution.assumed_state".split(".")), ct = {
	brightness: "亮度",
	color_temp_kelvin: "色温",
	percentage: "风速",
	percentage_step: "档位步进",
	current_position: "当前位置",
	current_tilt_position: "倾斜",
	battery_level: "电量",
	battery_icon: "电池",
	current_temperature: "当前温度",
	temperature: "设定温度",
	current_humidity: "当前湿度",
	humidity: "目标湿度",
	target_humidity: "目标湿度",
	power: "功率",
	current_power_w: "当前功率",
	voltage: "电压",
	current: "电流",
	energy: "用电量",
	total_energy: "累计用电",
	fan_speed: "风速档",
	status: "状态",
	program: "程序",
	mode: "模式",
	remaining_time: "剩余时间",
	finish_time: "预计完成",
	child_lock: "童锁",
	door_state: "舱门",
	water_level: "水位",
	spin_speed: "转速",
	volume_level: "音量",
	is_volume_muted: "静音",
	source: "音源",
	media_title: "正在播放",
	media_artist: "艺术家",
	media_duration: "时长",
	app_name: "应用",
	cycle: "周期",
	error_code: "故障码",
	run_state: "运行状态",
	left_time: "剩余"
}, lt = {
	battery_level: "%",
	current_power_w: "W",
	power: "W",
	voltage: "V",
	current: "A",
	energy: "kWh",
	total_energy: "kWh",
	today_energy: "kWh",
	current_temperature: "°C",
	temperature: "°C",
	current_humidity: "%",
	humidity: "%",
	target_humidity: "%",
	remaining_time: "分",
	left_time: "分"
}, ut = (e, t = []) => Object.entries(e || {}).filter(([e, n]) => !st.has(e) && !t.includes(e) && n != null && n !== "" && typeof n != "object").slice(0, 14).map(([e, t]) => {
	let n = lt[e];
	return `<div class="ac-kv"><span>${L(ct[e] || e)}</span><b>${L(t)}${n ? " " + n : ""}</b></div>`;
}).join(""), K = (e, t) => {
	let n = ut(e, t);
	return n ? H("属性", n) : "";
};
function dt(e, t, n, r, i = []) {
	let a = n === "on", o = r.supported_color_modes || [], s = a ? Math.round((r.brightness ?? 255) / 255 * 100) : 0, c = r.min_color_temp_kelvin || 2200, l = r.max_color_temp_kelvin || 6500, u = r.color_temp_kelvin || (r.color_temp ? Math.round(1e6 / r.color_temp) : Math.round((c + l) / 2)), d = r.rgb_color || null, f = d ? "#" + d.map((e) => e.toString(16).padStart(2, "0")).join("").toUpperCase() : "", p = r.brightness != null || o.length === 0 || o.some((e) => e !== "onoff"), m = o.includes("color_temp") || r.color_temp_kelvin != null || r.color_temp != null, h = o.some((e) => [
		"hs",
		"rgb",
		"rgbw",
		"rgbww",
		"xy"
	].includes(e)), g = z(e, a ? p ? `已开 · ${s}%` : "已开" : "已关闭", a);
	return g += B(a ? s : 0, "%", "亮度", {
		step: 10,
		domain: "light",
		service: "turn_on",
		field: "brightness_pct",
		min: 1,
		max: 100,
		entity: t
	}), g += V([["色温", m ? `${u}K` : "不支持"], ["颜色", h ? f || "彩光" : "固定"]]), g += H("开关", W([U("开启", {
		domain: "light",
		service: "turn_on",
		on: a
	}), U("关闭", {
		domain: "light",
		service: "turn_off",
		on: !a
	})], 2)), (p || o.length === 0) && (g += H("亮度", G({
		kind: "亮度",
		domain: "light",
		service: "turn_on",
		field: "brightness_pct",
		entity: t,
		min: 1,
		max: 100,
		value: s || 1
	}), "1 - 100%")), m && (g += H("色温", G({
		kind: "色温",
		domain: "light",
		service: "turn_on",
		field: "color_temp_kelvin",
		entity: t,
		min: c,
		max: l,
		step: 50,
		value: u,
		extra: " ct"
	}), `${c}K - ${l}K`)), h && (g += H("颜色", `<div class="fh-swatches ac-swatches">${nt.map((e) => `<button class="fh-swatch ac-swatch${d && e.every((e, t) => Math.abs(e - d[t]) < 26) ? " on" : ""}" data-rgb="${e.join(",")}"
        style="background:rgb(${e.join(",")})" aria-label="颜色 ${e.join(",")}"></button>`).join("")}</div>
    <label class="ac-color"><span>自定义</span>
      <input type="color" data-rgbpick value="${d ? "#" + d.map((e) => e.toString(16).padStart(2, "0")).join("") : "#ffffff"}">
    </label>`)), r.effect_list?.length && (g += H("灯效", W(r.effect_list.map((e) => U(e, {
		domain: "light",
		service: "turn_on",
		field: "effect",
		value: e,
		on: e === r.effect
	}))))), g += K(r, [
		"brightness",
		"color_temp_kelvin",
		"color_temp",
		"effect"
	]), g += X(i, "light", t), g;
}
function ft(e, t, n, r, i = []) {
	let a = n === "on", o = r.percentage ?? 0, s = z(e, a ? `运行中${o ? " · " + o + "%" : ""}` : "已关闭", a);
	return s += B(a ? o : 0, "%", "风速", {
		step: 10,
		domain: "fan",
		service: "set_percentage",
		field: "percentage",
		min: 0,
		max: 100,
		entity: t
	}), s += V([["预设", r.preset_mode || "无"], ["摇头", r.oscillating ? "开" : "关"]]), s += H("开关", W([U("开启", {
		domain: "fan",
		service: "turn_on",
		on: a
	}), U("关闭", {
		domain: "fan",
		service: "turn_off",
		on: !a
	})], 2)), s += H("风速", G({
		kind: "风速",
		domain: "fan",
		service: "set_percentage",
		field: "percentage",
		entity: t,
		min: 0,
		max: 100,
		step: r.percentage_step || 1,
		value: o
	}), `步进 ${tt(r.percentage_step || 1)}%`), r.preset_modes?.length && (s += H("模式", W(r.preset_modes.map((e) => U(e, {
		domain: "fan",
		service: "set_preset_mode",
		field: "preset_mode",
		value: e,
		on: e === r.preset_mode
	}))))), r.direction && (s += H("方向", W([U("正转", {
		domain: "fan",
		service: "set_direction",
		field: "direction",
		value: "forward",
		on: r.direction === "forward"
	}), U("反转", {
		domain: "fan",
		service: "set_direction",
		field: "direction",
		value: "reverse",
		on: r.direction === "reverse"
	})], 2))), "oscillating" in r && (s += H("摇头", W([U("开启", {
		domain: "fan",
		service: "oscillate",
		field: "oscillating",
		value: "true",
		on: !!r.oscillating
	}), U("关闭", {
		domain: "fan",
		service: "oscillate",
		field: "oscillating",
		value: "false",
		on: !r.oscillating
	})], 2))), s += X(i, "fan", t), s;
}
function pt(e, t, n, r, i = []) {
	let a = r.current_position ?? (n === "open" ? 100 : 0), o = z(e, n === "open" ? "已打开" : n === "closed" ? "已关闭" : "部分开启", n !== "closed");
	return o += B(a, "%", "开合度", {
		step: 10,
		domain: "cover",
		service: "set_cover_position",
		field: "position",
		min: 0,
		max: 100,
		entity: t
	}), o += H("控制", W([
		U("打开", {
			domain: "cover",
			service: "open_cover"
		}),
		U("停止", {
			domain: "cover",
			service: "stop_cover"
		}),
		U("关闭", {
			domain: "cover",
			service: "close_cover"
		})
	])), o += H("位置", G({
		kind: "位置",
		domain: "cover",
		service: "set_cover_position",
		field: "position",
		entity: t,
		min: 0,
		max: 100,
		value: a
	})), "current_tilt_position" in r && (o += H("倾斜", G({
		kind: "倾斜",
		domain: "cover",
		service: "set_cover_tilt_position",
		field: "tilt_position",
		entity: t,
		min: 0,
		max: 100,
		value: r.current_tilt_position ?? 0
	}))), o += K(r, ["current_position", "current_tilt_position"]), o += X(i, "cover", t), o;
}
function mt(e, t, n, r, i = []) {
	let a = n === "locked", o = z(e, a ? "已上锁" : "未上锁", a);
	return o += B(a ? "锁" : "开", "", a ? "已上锁" : "未上锁", { text: !0 }), o += H("门锁", W([U("上锁", {
		domain: "lock",
		service: "lock",
		on: a
	}), U("解锁", {
		domain: "lock",
		service: "unlock",
		on: !a
	})], 2)), o += K(r), o += X(i, "lock", t), o;
}
function ht(e, t, n, r, i = []) {
	let a = r.battery_level ?? null, o = z(e, n === "cleaning" ? "清扫中" : n === "docked" ? "在充电座" : n, n === "cleaning");
	return o += B(a ?? "—", "%", "电量"), o += V([["状态", r.status || n], ["风速", r.fan_speed || "标准"]]), o += H("控制", W([
		U("启动", {
			domain: "vacuum",
			service: "start",
			icon: R.play
		}),
		U("暂停", {
			domain: "vacuum",
			service: "pause",
			icon: R.pause
		}),
		U("回充", {
			domain: "vacuum",
			service: "return_to_base",
			icon: R.home
		})
	])), r.fan_speed_list?.length && (o += H("吸力", W(r.fan_speed_list.map((e) => U(e, {
		domain: "vacuum",
		service: "set_fan_speed",
		field: "fan_speed",
		value: e,
		on: e === r.fan_speed
	}))))), o += K(r, [
		"battery_level",
		"status",
		"fan_speed"
	]), o += X(i, "vacuum", t), o;
}
function gt(e, t, n, r, i = []) {
	let a = n === "on", o = r.humidity ?? r.target_humidity ?? 50, s = z(e, a ? `加湿中 · ${o}%` : "已关闭", a);
	return s += B(o, "%", "目标湿度", {
		step: 5,
		domain: "humidifier",
		service: "set_humidity",
		field: "humidity",
		min: r.min_humidity ?? 30,
		max: r.max_humidity ?? 80,
		entity: t
	}), s += V([["当前湿度", r.current_humidity == null ? "—" : `${r.current_humidity}%`], ["模式", r.mode || "无"]]), s += H("开关", W([U("开启", {
		domain: "humidifier",
		service: "turn_on",
		on: a
	}), U("关闭", {
		domain: "humidifier",
		service: "turn_off",
		on: !a
	})], 2)), s += H("湿度", G({
		kind: "湿度",
		domain: "humidifier",
		service: "set_humidity",
		field: "humidity",
		entity: t,
		min: r.min_humidity ?? 30,
		max: r.max_humidity ?? 80,
		step: 5,
		value: o
	}), `${r.min_humidity ?? 30}% - ${r.max_humidity ?? 80}%`), r.available_modes?.length && (s += H("模式", W(r.available_modes.map((e) => U(e, {
		domain: "humidifier",
		service: "set_mode",
		field: "mode",
		value: e,
		on: e === r.mode
	}))))), s += X(i, "humidifier", t), s;
}
function _t(e, t, n, r, i = []) {
	let a = n === "playing", o = Math.round((r.volume_level ?? 0) * 100), s = z(e, a ? "播放中" : n === "paused" ? "已暂停" : "空闲", a);
	return s += B(o, "%", "音量", {
		step: 5,
		domain: "media_player",
		service: "volume_set",
		field: "volume",
		min: 0,
		max: 100,
		entity: t
	}), s += V([["音源", r.source || "—"], ["静音", r.is_volume_muted ? "是" : "否"]]), s += H("播放", W([
		U("播放", {
			domain: "media_player",
			service: "media_play",
			icon: R.play
		}),
		U("暂停", {
			domain: "media_player",
			service: "media_pause",
			icon: R.pause
		}),
		U("停止", {
			domain: "media_player",
			service: "media_stop",
			icon: R.stop
		})
	])), s += H("音量", G({
		kind: "音量",
		domain: "media_player",
		service: "volume_set",
		field: "volume",
		entity: t,
		min: 0,
		max: 100,
		value: o
	}) + W([U("静音", {
		domain: "media_player",
		service: "volume_mute",
		field: "is_volume_muted",
		value: "true",
		on: !!r.is_volume_muted
	}), U("取消静音", {
		domain: "media_player",
		service: "volume_mute",
		field: "is_volume_muted",
		value: "false",
		on: !r.is_volume_muted
	})], 2)), r.source_list?.length && (s += H("音源", W(r.source_list.map((e) => U(e, {
		domain: "media_player",
		service: "select_source",
		field: "source",
		value: e,
		on: e === r.source
	}))))), s += X(i, "media_player", t), s;
}
function vt(e, t, n, r, i = []) {
	let a = r.unit_of_measurement || "", o = z(e, r.device_class ? String(r.device_class) : "传感器", !1);
	return o += B(n, a, r.friendly_name || "当前数值"), o += K({
		...r,
		unit_of_measurement: void 0
	}), o += X(i, null, t), o;
}
var q = {
	remaining: /剩余|remain|left_time|time_left|sheng_yu/,
	progress: /进度|progress|jin_du/,
	status: /设备状态|运行状态|^status$|run_state|stage|phase|状态/,
	program: /程序|program|cycle|programme|cheng_xu/,
	door: /门|door|men_zhuang/,
	error: /错误|故障|error|cuo_wu/
};
function yt(e, t) {
	return e.filter((e) => t.test(e.a?.friendly_name || "") || t.test(e.entity_id));
}
var J = (e, t) => yt(e, t)[0] || null, bt = (e) => !e || /^(unknown|unavailable|none|null|nan)/i.test(String(e).trim());
function xt(e, t) {
	let n = String(e ?? "");
	return t ? `${n}${/^[%°℃]/.test(t) || !/^[a-zA-Zµ]/.test(t) ? "" : " "}${t}` : n;
}
var St = (e) => e ? xt(e.state, e.a?.unit_of_measurement) : "", Ct = {
	off: "关闭",
	on: "开启",
	auto: "自动",
	none: "无",
	normal: "标准",
	idle: "待机",
	running: "运行中",
	pause: "暂停",
	paused: "已暂停",
	end: "已结束",
	stopped: "已停止",
	standby: "待机",
	finished: "已完成",
	washing: "洗涤中",
	mixed_wash: "混合洗",
	quick_wash: "快速洗",
	cotton: "棉麻",
	wool: "羊毛",
	quick: "快速",
	standard: "标准",
	mix: "混合洗",
	rinse_spin: "漂+脱",
	cold_water: "冷水",
	no_spin: "不脱水",
	tap_water: "自来水",
	factory_test: "工厂测试",
	service_normal_continus: "正常连续",
	service_normal_continuous: "正常连续",
	normal_continus: "正常连续",
	normal_continuous: "正常连续",
	baby_clothes: "婴儿服",
	big: "大件",
	clean_stains: "强污渍",
	deep_ssp: "深度除菌",
	down_jacket: "羽绒服",
	enzyme: "酶洗",
	fast_wash: "快速洗",
	fast_wash_30: "快洗 30 分",
	fiber: "化纤",
	intelligent: "智能洗",
	jean: "牛仔",
	new_clothes_wash: "新衣洗",
	outdoor: "户外服",
	remove_mite_wash: "除螨洗",
	rinsing_spin: "漂+脱",
	shirt: "衬衫",
	silk: "真丝",
	single_dehydrate: "单脱水",
	single_dry: "单烘干",
	sport_clothes: "运动服",
	sterilize: "消毒洗",
	baby_care: "婴儿护理",
	drum_clean: "筒自洁",
	air_wash: "空气洗",
	underwear: "内衣",
	underwear_wash: "内衣洗",
	quick_15: "快洗 15 分",
	quick_30: "快洗 30 分",
	mixed: "混合洗"
};
function wt(e) {
	let t = String(e ?? "");
	if (Ct[t]) return Ct[t];
	if (bt(t)) return "—";
	let n;
	return (n = /^(\d+)c$/i.exec(t)) ? `${n[1]}℃` : (n = /^(\d+)_times?$/i.exec(t)) ? `${n[1]} 次` : (n = /^(\d+)rpm$/i.exec(t)) ? `${n[1]} 转` : (n = /^l(\d+)$/i.exec(t)) ? `水位 ${n[1]}` : t;
}
var Y = (e) => e.a?.friendly_name || e.entity_id.split(".")[1].replace(/_/g, " "), Tt = (e) => e ? e.domain === "binary_sensor" ? e.state === "on" ? "运行中" : "待机" : xt(wt(e.state), e.a?.unit_of_measurement) : null;
function Et(e) {
	let t = e.a?.options || [];
	if (!t.length) return "";
	let n = t.filter((t) => t === e.state || !/^(factory|service|test|debug|self_?check)/i.test(String(t)));
	if (n.length < 2) return "";
	let r = Y(e);
	return n.length > 8 ? H(r, `<select class="ac-select" data-domain="${e.domain}" data-service="select_option"
      data-field="option" data-entity="${e.entity_id}" aria-label="${L(r)}">
      ${n.map((t) => `<option value="${L(t)}"${t === e.state ? " selected" : ""}>${L(wt(t))}</option>`).join("")}
    </select>`, `${n.length} 项`) : H(r, W(n.map((t) => U(wt(t), {
		domain: e.domain,
		service: "select_option",
		field: "option",
		value: t,
		on: t === e.state,
		entity: e.entity_id
	})), ot(n.length)));
}
function Dt(e) {
	let t = Number(e.state), n = e.a?.min ?? 0, r = e.a?.max ?? 100;
	return H(Y(e), G({
		kind: Y(e),
		domain: e.domain,
		service: "set_value",
		field: "value",
		entity: e.entity_id,
		min: n,
		max: r,
		step: e.a?.step || 1,
		value: Number.isFinite(t) ? t : n
	}), `${n} - ${r}`);
}
var Ot = (e) => {
	let t = Number(e);
	return Number.isFinite(t) ? String(Math.round(t * 10) / 10) : "—";
};
function kt(e) {
	let t = e.a || {}, n = t.temperature;
	if (n == null || n === "") return "";
	let r = t.current_temperature, i = t.min_temp ?? -30, a = t.max_temp ?? 10, o = t.target_temp_step || .5, s = Math.max(0, Math.min(100, (n - i) / (a - i || 1) * 100));
	return H(Y(e), `
    <input class="ac-range" type="range" min="${i}" max="${a}" step="${o}" value="${n}"
      data-domain="climate" data-service="set_temperature" data-field="temperature"
      data-entity="${e.entity_id}" aria-label="${L(Y(e))}"
      style="--pct:${s.toFixed(1)}%">
    <div class="ac-set"><span>当前 ${Ot(r)}°C</span><b data-cl-tgt>目标 ${Ot(n)}°C</b></div>`, `${Ot(i)} ~ ${Ot(a)}°C`);
}
function At(e) {
	return e.length ? H("操作", W(e.slice(0, 6).map((e) => U(Y(e), {
		domain: e.domain,
		service: "press",
		entity: e.entity_id
	})))) : "";
}
function jt(e) {
	return e.length ? H("附加开关", W(e.slice(0, 12).map((e) => U(Y(e), {
		domain: e.domain,
		service: e.state === "on" ? "turn_off" : "turn_on",
		entity: e.entity_id,
		on: e.state === "on"
	})), 2)) : "";
}
var Mt = (e) => e && e.domain === "switch" && /启停|启动|暂停|开始|qi_ting|qi_dong|zan_ting|start_pause|start|pause|run/i.test(e.a?.friendly_name || e.entity_id.split(".")[1]) && !/电源|童锁|风干|烘干|door|锁/i.test(e.a?.friendly_name || "");
function X(e, t, n, r = []) {
	let i = (e || []).filter((e) => e.entity_id !== n && !r.includes(e.entity_id) && (!t || e.domain !== t));
	if (!i.length) return "";
	let a = "", o = i.filter((e) => (e.domain === "sensor" || e.domain === "binary_sensor") && !bt(e.state)).filter((e) => {
		let t = Number(e.state), n = e.a?.unit_of_measurement === "%";
		return !(Number.isFinite(t) && t === 0 && !n);
	}).slice(0, 6);
	o.length && (a += H("读数", `<div class="ac-reads">${o.map((e) => `<div>
      <span>${L(Y(e))}</span>
      <b title="${L(e.state)}">${L(e.domain === "binary_sensor" ? e.state === "on" ? "开" : "关" : St(e))}</b>
    </div>`).join("")}</div>`));
	for (let e of i.filter((e) => e.domain === "climate")) a += kt(e);
	let s = (e) => {
		let t = Y(e), n = [
			/程序/,
			/模式/,
			/水温/,
			/水位/,
			/漂洗/,
			/转速|脱水/,
			/污渍|特殊/
		].findIndex((e) => e.test(t));
		return n < 0 ? 99 : n;
	}, c = i.filter((e) => [
		"select",
		"input_select",
		"number",
		"input_number"
	].includes(e.domain)).sort((e, t) => s(e) - s(t));
	for (let e of c) a += e.domain === "select" || e.domain === "input_select" ? Et(e) : Dt(e);
	return a += At(i.filter((e) => e.domain === "button" || e.domain === "input_button")), a += jt(i.filter((e) => e.domain === "switch" || e.domain === "input_boolean")), a;
}
function Nt(e, t, n, r, i) {
	let a = i.find((e) => e.domain === "switch" && /电源|power|dian_yuan|^switch$/i.test(e.a?.friendly_name || e.entity_id.split(".")[1])), o = it(n) || (a ? a.state === "on" : !1), s = J(i, q.remaining), c = J(i, q.progress), l = J(i, q.status), u = J(i, q.program), d = J(i, q.door), f = J(i, q.error), p = (e) => e && !bt(e.state) && Number(e.state) > 0, m = p(s) ? s : p(c) ? c : null, h = m ? m.state : o ? "运行中" : "待机", g = m?.a?.unit_of_measurement || "", _ = z(e, o ? "运行中" : "已停止", o);
	_ += B(h, g, m ? m === s ? "剩余时间" : "进度" : "", { text: !m });
	let v = [
		m ? ["状态", l ? Tt(l) : o ? "运行中" : "待机"] : null,
		u ? ["程序", wt(u.state)] : null,
		c && c !== m && Number(c.state) > 0 ? ["进度", St(c)] : null,
		d ? ["舱门", d.state === "on" || d.state === "open" ? "打开" : "关闭"] : null,
		f && f.state && ![
			"unknown",
			"0",
			"无",
			""
		].includes(f.state) ? ["故障", f.state] : null
	].filter(Boolean).slice(0, 4);
	_ += V(v);
	let y = t.split(".")[0] === "switch" ? t : i.find((e) => e.domain === "switch")?.entity_id || "";
	y && (_ += H("电源", W([U("开启", {
		domain: "switch",
		service: "turn_on",
		on: o
	}), U("关闭", {
		domain: "switch",
		service: "turn_off",
		on: !o,
		entity: y
	})], 2)));
	let b = i.find(Mt);
	if (b) {
		let e = b.state === "on";
		_ += H("启停", W([U("启动", {
			domain: "switch",
			service: "turn_on",
			on: e,
			entity: b.entity_id
		}), U("暂停", {
			domain: "switch",
			service: "turn_off",
			on: !e,
			entity: b.entity_id
		})], 2));
	}
	let x = [
		s,
		c,
		l,
		d,
		f
	].filter(Boolean).map((e) => e.entity_id);
	return b && x.push(b.entity_id), _ += X(i, null, t, x), _ += K(r), _;
}
function Pt(e, t, n) {
	return e === "lock" && t !== "locked" ? "alert" : !it(t) && t !== "locked" ? "neutral" : e === "light" ? "warm" : e === "fan" ? "cool" : "live";
}
function Ft({ siblings: e = [], ownDomain: t = null, entity: n = "", name: r = "" } = {}) {
	return X(It(r, e), t, n);
}
function It(e, t) {
	let n = String(e || "").trim();
	return !n || !t?.length ? t || [] : t.map((e) => {
		let t = e.a?.friendly_name;
		if (!t || !t.startsWith(n)) return e;
		let r = t.slice(n.length).replace(/^[\s·\-—_]+/, "").trim();
		return !r || r === t ? e : {
			...e,
			a: {
				...e.a,
				friendly_name: r
			}
		};
	});
}
function Lt({ name: e, entity: t, state: n, a: r = {}, siblings: i = [] }) {
	let a = t.split(".")[0], o = String(n || "").toLowerCase(), s = Pt(a, o, r);
	at = 0, i = It(e, i);
	let c;
	switch (a) {
		case "light":
			c = dt(e, t, o, r, i);
			break;
		case "fan":
			c = ft(e, t, o, r, i);
			break;
		case "cover":
			c = pt(e, t, o, r, i);
			break;
		case "lock":
			c = mt(e, t, o, r, i);
			break;
		case "vacuum":
			c = ht(e, t, o, r, i);
			break;
		case "humidifier":
			c = gt(e, t, o, r, i);
			break;
		case "media_player":
			c = _t(e, t, o, r, i);
			break;
		case "sensor":
		case "binary_sensor":
			c = i.length ? Nt(e, t, o, r, i) : vt(e, t, o, r, i);
			break;
		default: c = i.length ? Nt(e, t, o, r, i) : Rt(e, t, o, r, a);
	}
	return `<div class="ac-wrap" data-tone="${s}">${c}</div>`;
}
function Rt(e, t, n, r, i) {
	let a = it(n), o = r.current_power_w ?? r.power ?? r.load_power ?? null, s = z(e, a ? "已开启" : "已关闭", a);
	return s += B(a ? "开" : "关", "", o == null ? a ? "正在运行" : "已停止" : `当前 ${tt(o, 1)}W`, { text: !0 }), o != null && (s += V([["功率", `${tt(o, 1)} W`], ["状态", a ? "开启" : "关闭"]])), s += H("开关", W([
		U("开启", {
			domain: i,
			service: "turn_on",
			on: a
		}),
		U("关闭", {
			domain: i,
			service: "turn_off",
			on: !a
		}),
		U("切换", {
			domain: i,
			service: "toggle"
		})
	])), s += K(r), s;
}
var zt = {
	brightness_pct: { key: "brightness_pct" },
	color_temp_kelvin: { key: "color_temp_kelvin" },
	percentage: { key: "percentage" },
	position: { key: "position" },
	tilt_position: { key: "tilt_position" },
	humidity: { key: "humidity" },
	volume: {
		key: "volume_level",
		scale: (e) => e / 100
	}
}, Bt = /* @__PURE__ */ new Set([
	"brightness_pct",
	"color_temp_kelvin",
	"percentage",
	"position",
	"tilt_position",
	"humidity",
	"temperature",
	"value",
	"volume",
	"option"
]);
function Vt(e, t, n = "") {
	if (!e) return;
	let r = (e, r) => {
		let i = e.dataset.domain, a = e.dataset.service;
		if (!i || !a) return;
		let o = { entity_id: e.dataset.entity || n }, s = e.dataset.field;
		if (s && r !== void 0) {
			let e = zt[s] || {};
			o[e.key || s] = e.scale ? e.scale(r) : r;
		}
		t(i, a, o);
	};
	e.querySelectorAll("button[data-domain]").forEach((e) => {
		e.onclick = () => {
			let t = e.dataset.value, n = t;
			t === "true" ? n = !0 : t === "false" ? n = !1 : t != null && e.dataset.field && Bt.has(e.dataset.field) && !Number.isNaN(Number(t)) && (n = Number(t)), r(e, n), e.dataset.value == null && /turn_on|turn_off/.test(e.dataset.service) && (e.parentElement?.querySelectorAll("button").forEach((e) => e.classList.remove("on")), e.classList.add("on"));
		};
	}), e.querySelectorAll("select[data-domain]").forEach((e) => {
		e.onchange = () => r(e, e.value), e.addEventListener("pointerdown", (e) => e.stopPropagation());
	}), e.querySelectorAll("input[type=range][data-field]").forEach((e) => {
		let t = (t) => {
			let n = +e.min, r = +e.max, i = Math.max(0, Math.min(100, (t - n) / (r - n || 1) * 100));
			e.style.setProperty("--pct", i.toFixed(1) + "%");
			let a = e.closest(".ac-wrap")?.querySelector("[data-big]");
			a && (a.textContent = String(Math.round(t)));
			let o = e.closest(".ac-sec")?.querySelector("[data-cl-tgt]");
			o && (o.textContent = `目标 ${String(Math.round(t * 10) / 10)}°C`);
		};
		e.oninput = () => {
			let n = parseFloat(e.value);
			t(n), r(e, n);
		}, e.addEventListener("pointerdown", (e) => e.stopPropagation());
	}), e.querySelectorAll("button[data-step]").forEach((t) => {
		t.onclick = () => {
			let n = Number(t.dataset.step) || 0, i = t.dataset.field, a = i ? e.querySelector(`input[type=range][data-field="${i}"]`) : null, o = Number(t.dataset.min || a?.min || 0), s = Number(t.dataset.max || a?.max || 100), c = a ? parseFloat(a.value) : parseFloat(e.querySelector("[data-big]")?.textContent) || o, l = Math.min(s, Math.max(o, c + n));
			l !== c && (a ? (a.value = String(l), a.dispatchEvent(new Event("input"))) : r(t, l));
		};
	}), e.querySelectorAll("button[data-rgb]").forEach((e) => {
		e.onclick = () => {
			t("light", "turn_on", {
				entity_id: n,
				rgb_color: e.dataset.rgb.split(",").map(Number)
			}), e.parentElement?.querySelectorAll("[data-rgb]").forEach((e) => e.classList.remove("on")), e.classList.add("on");
		};
	});
	let i = e.querySelector("[data-rgbpick]");
	i && (i.onchange = () => {
		let e = i.value.replace("#", "");
		t("light", "turn_on", {
			entity_id: n,
			rgb_color: [
				0,
				2,
				4
			].map((t) => parseInt(e.slice(t, t + 2), 16))
		});
	}, i.addEventListener("pointerdown", (e) => e.stopPropagation()));
}
// src/floor3d/extract.js
function Ht(e, t, n) {
	let r = new Uint8Array(t * n);
	for (let t = 0, n = 0; n < r.length; t += 4, n++) r[n] = e[t] * 77 + e[t + 1] * 150 + e[t + 2] * 29 >> 8;
	return r;
}
function Ut(e, t, n) {
	let r = t + 1, i = new Float64Array(r * (n + 1));
	for (let a = 0; a < n; a++) {
		let n = 0, o = a * t, s = (a + 1) * r, c = a * r;
		for (let r = 0; r < t; r++) n += e[o + r], i[s + r + 1] = i[c + r + 1] + n;
	}
	return i;
}
function Wt(e, t, n, r, i, a) {
	let o = t + 1, s = Math.max(0, r - a), c = Math.min(t, r + a + 1), l = Math.max(0, i - a), u = Math.min(n, i + a + 1);
	return (e[u * o + c] - e[l * o + c] - e[u * o + s] + e[l * o + s]) / ((c - s) * (u - l));
}
function Gt(e, t, n, r, i) {
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
var Kt = (e, t, n, r) => Gt(Gt(e, t, n, r, !0), t, n, r, !1);
function qt(e, t, n, r, i, a) {
	let o = new Float64Array(t * n);
	for (let i = 0; i < t * n; i++) o[i] = +(e[i] < r);
	let s = Ut(o, t, n), c = new Uint8Array(t * n);
	for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) c[e * t + r] = +(Wt(s, t, n, r, e, i) > a);
	return c;
}
function Jt(e, t, n, r = {}) {
	let i = Math.max(.5, t / 1e3), a = Math.max(4, Math.min(16, r.radius ?? Math.round(7 * i)));
	return Kt(qt(e, t, n, r.dark ?? 238, a, r.density ?? .42), t, n, 2);
}
function Yt(e, t, n, r = {}) {
	let i = r.ppm || t / 12, a = Math.max(.5, t / 1e3), o = Math.max(4, Math.min(16, r.radiusLines ?? Math.round(5 * a)));
	return Kt(qt(e, t, n, r.darkLines ?? 170, o, r.densityLines ?? .16), t, n, Math.max(2, Math.round(r.close ?? .22 * i)));
}
function Xt(e, t, n, r = {}) {
	let i = Jt(e, t, n, r), a = Yt(e, t, n, r), o = new Uint8Array(t * n);
	for (let e = 0; e < t * n; e++) o[e] = i[e] | a[e] ? 1 : 0;
	return o;
}
function Zt(e, t, n, r = {}) {
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
function Qt(e, t = {}) {
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
	return $t(a, t);
}
function $t(e, t = {}) {
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
function en(e, t) {
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
function tn(e, t = {}) {
	let n = t.ppm || 100, r = (t.reach ?? .25) * n, i = (t.minClusterLen ?? 2) * n, a = e.length, o = (e) => Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
	if (a < 2) return e.filter((e) => o(e) >= i);
	let s = new Int32Array(a);
	for (let e = 0; e < a; e++) s[e] = e;
	let c = (e) => {
		for (; s[e] !== e;) s[e] = s[s[e]], e = s[e];
		return e;
	};
	for (let t = 0; t < a; t++) for (let n = t + 1; n < a; n++) {
		if (en(e[t], e[n]) > r) continue;
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
function nn(e, t, n, r) {
	let i = [...Zt(e, t, n, {
		...r,
		axis: "h"
	}), ...Zt(e, t, n, {
		...r,
		axis: "v"
	})];
	return i = Qt(i, r), tn(i, r);
}
var rn = (e) => Math.hypot(e.x2 - e.x1, e.y2 - e.y1);
function an(e, t, n, r = {}) {
	let i = r.ppm && r.ppm > 0 ? r.ppm : t / 12, a = {
		...r,
		ppm: i
	}, o = r.path || "auto", s;
	o === "lines" ? s = nn(Yt(e, t, n, a), t, n, a) : o === "fill" ? s = nn(Jt(e, t, n, a), t, n, a) : (s = nn(Jt(e, t, n, a), t, n, a), s.reduce((e, t) => e + rn(t), 0) < 4 * i && (s = nn(Xt(e, t, n, a), t, n, a))), s.sort((e, t) => rn(t) - rn(e));
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
var on = "ha-dash.floorplan.v1", sn = 1600, cn = 1400, ln = [
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
], un = {
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
}, dn = {
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
}, fn = {
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
function pn(e, t) {
	if (t === 0) return "今天";
	if (t === 1) return "明天";
	if (t === 2) return "后天";
	let n = new Date(e);
	return Number.isNaN(n.getTime()) ? "" : "周" + "日一二三四五六"[n.getDay()];
}
var mn = (e) => [
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
function hn(e, t) {
	return e === "unavailable" ? "离线" : e === "unknown" ? "未知" : t === "climate" ? e === "off" ? "已关闭" : (Ue[e] || e) + "中" : t === "lock" ? e === "locked" ? "已上锁" : "已解锁" : t === "camera" ? {
		idle: "待机",
		recording: "正在录像",
		streaming: "正在串流",
		on: "监控中",
		off: "已关闭"
	}[e] || e : e === "on" ? "已开启" : e === "off" ? "已关闭" : e;
}
function Z(e) {
	let t = parseFloat(e.min), n = parseFloat(e.max), r = (parseFloat(e.value) - t) / (n - t || 1) * 100;
	e.style.setProperty("--pct", r.toFixed(1) + "%");
}
var gn = [
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
], _n = {
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
};
function vn(e, t) {
	let n = (t || "").toLowerCase();
	if (e === "light") return /风扇灯|fanlight|吊扇灯/.test(n) ? "fanlight" : /灯带|灯条|氛围|ambient|strip/.test(n) ? "strip" : /吸顶|ceiling/.test(n) ? "ceiling" : /吊灯|吊顶|pendant|chandelier|水晶灯/.test(n) ? "pendant" : /筒灯|射灯|downlight|spot/.test(n) ? "downlight" : /台灯|挂灯|屏幕|显示器|桌面|desk|monitor|床头/.test(n) ? "desk" : "lamp";
	if (e === "climate") return "ac";
	if (e === "camera") return "cam";
	if (e === "media_player") return /电视|tv|television|客厅.*(屏|视)/.test(n) ? "tv" : "speaker";
	if (e === "fan") return /风扇灯|fanlight|吊扇/.test(n) ? "fanlight" : /净化|purifier|空气/.test(n) ? "purifier" : "generic";
	if (e === "vacuum") return "vacuum";
	if (e === "switch") {
		if (/洗碗机|dishwasher/.test(n)) return "dishwasher";
		if (/洗衣机|washer/.test(n)) return "washer";
		if (/冰箱|fridge/.test(n)) return "fridge";
	}
	return "generic";
}
var yn = [
	{
		key: "light",
		label: "灯光",
		icon: "💡",
		match: (e) => e.dom === "light" || e.art === "fanlight"
	},
	{
		key: "climate",
		label: "空调",
		icon: "❄️",
		match: (e) => e.dom === "climate"
	},
	{
		key: "kitchen",
		label: "厨房电器",
		icon: "🍳",
		match: (e) => e.art === "fridge" || e.art === "dishwasher"
	},
	{
		key: "washer",
		label: "洗衣机",
		icon: "🧺",
		match: (e) => e.art === "washer"
	},
	{
		key: "air",
		label: "净化/加湿",
		icon: "🍃",
		match: (e) => e.dom === "humidifier" || e.art === "purifier"
	},
	{
		key: "fan",
		label: "风扇",
		icon: "🌀",
		match: (e) => e.dom === "fan"
	},
	{
		key: "camera",
		label: "摄像头",
		icon: "📷",
		match: (e) => e.dom === "camera"
	},
	{
		key: "media",
		label: "影音",
		icon: "📺",
		match: (e) => e.dom === "media_player"
	},
	{
		key: "lock",
		label: "门锁",
		icon: "🔒",
		match: (e) => e.dom === "lock"
	},
	{
		key: "cover",
		label: "窗帘",
		icon: "🪟",
		match: (e) => e.dom === "cover"
	},
	{
		key: "vacuum",
		label: "扫地机",
		icon: "🤖",
		match: (e) => e.dom === "vacuum"
	},
	{
		key: "switch",
		label: "开关/插座",
		icon: "🔌",
		match: () => !0
	}
], bn = class {
	constructor(e, t = {}) {
		this.host = e, this.opts = t, this.mode = "view", this.tool = "select", this.plan = Sn(), this.editor = null, this.scene = null, this.sel = null, this._hass = null, this._camCtl = null, this._camKey = "", this._devClosedId = "", this._devEnterTimer = 0, this._devLeaveTimer = 0, this._catFilter = "all", this._devSearch = "", this._hideAux = !0, this._calibDist = 0, this._wallHint = "", this._showGuides = !0, this._busy = !1, this.el = document.createElement("div"), this.el.className = "fh", this.el.innerHTML = `
      <style>${r}</style>
      <header class="fh-top">
        <div class="fh-seg">
          <button data-mode="view" class="on">3D 展示</button>
          <button data-mode="edit">编辑户型</button>
        </div>
        <div class="fh-tools" data-for="edit" hidden></div>
        <div class="fh-spacer"></div>
        <div class="fh-tools" data-for="view">
          <button data-act="fit" title="居中">⤢ 居中</button>
        </div>
        <button class="fh-btn" data-act="basecard" data-for="edit" title="参考底图">🖼</button>
        <button class="fh-btn" data-act="menu" title="更多">⋯</button>
      </header>
      <div class="fh-body">
        <div class="fh-stage"></div>
        <aside class="fh-panel"></aside>
      </div>
      <div class="fh-hint"></div>
      <div class="fh-menu" hidden>
        <button data-act="base">导入参考底图</button>
        <button data-act="export">导出 JSON</button>
        <button data-act="import">导入 JSON</button>
        <button data-act="clear" class="danger">清空户型</button>
      </div>
      <div class="fh-basecard" hidden></div>
      <input type="file" accept="image/*" class="fh-file img" hidden>
      <input type="file" accept="application/json,.json" class="fh-file json" hidden>
      <div class="fh-dev" hidden></div>
    `, e.appendChild(this.el), this.el.__fh = this, this.$stage = this.el.querySelector(".fh-stage"), this.$panel = this.el.querySelector(".fh-panel"), this.$hint = this.el.querySelector(".fh-hint"), this.$menu = this.el.querySelector(".fh-menu"), this.$dev = this.el.querySelector(".fh-dev"), this.$basecard = this.el.querySelector(".fh-basecard"), this.$basecard.addEventListener("click", (e) => e.stopPropagation()), this.$basecard.addEventListener("pointerdown", (e) => e.stopPropagation()), this.$dev.addEventListener("pointerdown", () => {
			this._devBusy = !0;
		}, !0), this._devUp = () => {
			this._devBusy && (this._devBusy = !1, this._devPending && (this._devPending = !1, this._paintDeviceCard()));
		}, window.addEventListener("pointerup", this._devUp), window.addEventListener("pointercancel", this._devUp), this._bindChrome(), this._renderTools(), this.enterView(), this.renderPanel();
	}
	setHass(e) {
		this._hass = e, this.editor?.setHass(e), this.scene?.setHass(e), this.sel?.type === "device" && this._paintDeviceCard(), this.mode === "view" && this._renderInfo();
	}
	destroy() {
		this.editor?.destroy(), this.scene?.dispose(), this._devUp && (window.removeEventListener("pointerup", this._devUp), window.removeEventListener("pointercancel", this._devUp)), this.el.remove();
	}
	_bindChrome() {
		this.el.querySelectorAll("[data-mode]").forEach((e) => {
			e.onclick = () => this.setMode(e.dataset.mode);
		}), this.el.querySelector("[data-act=\"menu\"]").onclick = (e) => {
			e.stopPropagation(), this.$menu.hidden = !this.$menu.hidden, this.$basecard.hidden = !0;
		}, this.el.querySelector("[data-act=\"basecard\"]").onclick = (e) => {
			e.stopPropagation(), this.$basecard.hidden ? (this._renderBaseCard(), this.$basecard.hidden = !1) : this.$basecard.hidden = !0;
		}, document.addEventListener("click", this._docClick = (e) => {
			!this.$menu.hidden && !this.$menu.contains(e.target) && (this.$menu.hidden = !0), !this.$basecard.hidden && !this.$basecard.contains(e.target) && (this.$basecard.hidden = !0);
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
		e.innerHTML = ln.map((e) => `
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
		if (e === this.mode && (e === "edit" ? this.editor : this.scene)) return;
		this.mode = e, this.el.querySelectorAll("[data-mode]").forEach((t) => t.classList.toggle("on", t.dataset.mode === e)), this.el.querySelector(".fh-tools[data-for=\"edit\"]").hidden = e !== "edit", this.el.querySelector(".fh-tools[data-for=\"view\"]").hidden = e !== "view";
		let t = this.el.querySelector("[data-act=\"basecard\"]");
		t && (t.hidden = e !== "edit"), this.$basecard.hidden = !0, e === "edit" ? (this.sel = null, this._devClosedId = "", this._hideDeviceCard(), this.enterEdit()) : this.enterView(), this.renderPanel();
	}
	enterEdit() {
		this.exitView(), this.$stage.innerHTML = "", this.editor = new Ve(this.$stage), this.editor.setPlan(this.plan), this.editor.setHass(this._hass), this.editor.showGuides = this._showGuides, this.editor.setTool(this.tool), this.editor.on("change", (e) => {
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
			let { FloorScene: e } = await import("./chunk-DYIUvkAW.js");
			this.$stage.innerHTML = "", this.scene = new e(this.$stage);
			let t = this.plan.look || {
				palette: "blackgold",
				diorama: !0
			};
			this.scene.setPalette(t.palette || "blackgold"), this.scene.setPlan(this.plan), this.scene.setDiorama(t.diorama !== !1), this.scene.setHass(this._hass), this.scene.onChange = () => $(this.plan), this.$stage.dataset.palette = this.scene._palette, this.scene.onSelect = (e) => {
				this.sel = e, e?.type === "device" ? (this._devClosedId = "", this._paintDeviceCard(), this.scene.highlight(e), this.scene.focusSelected()) : e?.type === "furniture" ? (this._hideDeviceCard(), this.scene.highlight(e), this.scene.focusSelected()) : (this._hideDeviceCard(), this.scene.highlight(null)), this._syncTools();
			}, this.$info = document.createElement("div"), this.$info.className = "fh3d-info", this.$stage.appendChild(this.$info), this._renderInfo(), this.$style = document.createElement("div"), this.$style.className = "fh3d-style", this.$style.innerHTML = `
        <select data-s="palette">${Ne().map((e) => `<option value="${e.id}">${e.name}</option>`).join("")}</select>
        <label title="沙盘风格（微缩模型感）">
          <input type="checkbox" data-s="diorama">沙盘</label>
        <label title="太阳/月亮与阳光随现实时间变化">
          <input type="checkbox" data-s="sun">日照</label>`, this.$stage.appendChild(this.$style);
			let n = this.$style.querySelector("[data-s=\"palette\"]"), r = this.$style.querySelector("[data-s=\"diorama\"]"), i = this.$style.querySelector("[data-s=\"sun\"]");
			n.setAttribute("aria-label", "场景色板"), n.value = this.scene._palette, r.checked = this.scene._diorama, i.checked = t.sun === !0, this.scene.setSunlight(i.checked);
			let a = () => {
				this.plan.look = {
					palette: n.value,
					diorama: r.checked,
					sun: i.checked
				}, $(this.plan);
			};
			n.onchange = () => {
				this.scene.setPalette(n.value), a();
			}, r.onchange = () => {
				this.scene.setDiorama(r.checked), a();
			}, i.onchange = () => {
				this.scene.setSunlight(i.checked), a();
			}, this.$tools = document.createElement("div"), this.$tools.className = "fh3d-tools", this.$tools.hidden = !0, this.$tools.innerHTML = "\n        <label title=\"旋转（任意角度）\">⟳<input type=\"range\" min=\"0\" max=\"360\" step=\"1\" data-t=\"rot\">\n          <span class=\"fh3d-numwrap\"><input class=\"fh3d-num\" type=\"number\" min=\"0\" max=\"360\" step=\"1\" data-t=\"rv\"><i>°</i></span></label>\n        <label title=\"放大 / 缩小\">🔍<input type=\"range\" min=\"0.4\" max=\"3\" step=\"0.05\" data-t=\"scale\">\n          <span class=\"fh3d-numwrap\"><input class=\"fh3d-num\" type=\"number\" min=\"0.4\" max=\"3\" step=\"0.05\" data-t=\"sv\"><i>×</i></span></label>\n        <button class=\"del\" data-t=\"del\" title=\"删除\">🗑</button>", this.$stage.appendChild(this.$tools);
			let o = document.createElement("div");
			o.className = "fh3d-help", o.textContent = "拖拽旋转 · 滚轮缩放 · 右键平移 · 点设备看详情", this.$stage.appendChild(o), setTimeout(() => o.classList.add("out"), 5e3), setTimeout(() => o.remove(), 7e3);
			let s = this.$tools.querySelector("[data-t=\"rot\"]"), c = this.$tools.querySelector("[data-t=\"rv\"]"), l = this.$tools.querySelector("[data-t=\"scale\"]"), u = this.$tools.querySelector("[data-t=\"sv\"]");
			s.oninput = () => {
				let e = parseFloat(s.value);
				c.value = Math.round(e), Z(s), this.scene.rotateTo(e);
			}, l.oninput = () => {
				let e = parseFloat(l.value);
				u.value = +e.toFixed(2), Z(l), this.scene.scaleSelected(e);
			};
			let d = (e, t, n, r) => {
				let i = () => {
					let i = parseFloat(t.value);
					Number.isFinite(i) ? (i = Math.max(parseFloat(t.min), Math.min(parseFloat(t.max), i)), t.value = r(i), e.value = i, Z(e), n(i)) : t.value = r(parseFloat(e.value));
				};
				t.onchange = i, t.onkeydown = (e) => {
					e.key === "Enter" && (e.preventDefault(), i());
				};
			};
			d(s, c, (e) => this.scene.rotateTo(e), (e) => String(Math.round(e))), d(l, u, (e) => this.scene.scaleSelected(e), (e) => +e.toFixed(2)), this.$tools.querySelector("[data-t=\"del\"]").onclick = () => {
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
			let e = n.scale || 1, t = this.$tools.querySelector("[data-t=\"scale\"]");
			t.value = e, this.$tools.querySelector("[data-t=\"sv\"]").value = +e.toFixed(2), Z(t);
			let r = ((n.rot || 0) % 360 + 360) % 360, i = this.$tools.querySelector("[data-t=\"rot\"]");
			i.value = r, this.$tools.querySelector("[data-t=\"rv\"]").value = Math.round(r), Z(i);
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
		let o = n ? Math.round(a(n.attributes?.temperature)) : null, s = n ? un[n.attributes?.skycon] || dn[n.state] || n.state : null, c = `<div class="wx-title"><span class="wx-name">${Q(this.plan?.name || "我的家")}</span>` + (o == null ? "" : `<span class="wx-pill">${o}°</span>`) + "</div>", l = [], u = n ? Math.round(a(n.attributes?.apparent_temperature)) : null, d = n ? Math.round(a(n.attributes?.humidity)) : null, f = n ? n.attributes?.aqi : null, p = n ? n.attributes?.aqi_description : null, m = r ? Math.round(a(r.attributes?.current_temperature)) : null, h = i.length ? `${i.filter((e) => e.state === "home").length}/${i.length}` : null;
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
			let n = Math.round(e.templow), r = Math.round(e.temperature), i = fn[e.condition] || "🌡️", a = e.precipitation > 0 ? `${e.precipitation.toFixed(1)}mm` : "";
			return `<span class="wx-day"><i>${Q(pn(e.datetime, t))}</i><span class="wx-icon">${i}</span><b>${n}-${r}°</b>` + (a ? `<em>${a}</em>` : "") + "</span>";
		}).join(""));
	}
	_listEntities(e = this._hideAux) {
		let t = this._hass?.states || {}, n = [];
		for (let r of Object.values(t)) {
			let t = r.entity_id.split(".")[0];
			if (!gn.includes(t) || r.attributes?.hidden) continue;
			if (e) {
				let e = this._regMeta?.get(r.entity_id);
				if (e && (e.category || e.hidden)) continue;
			}
			let i = r.attributes?.friendly_name;
			if (!i) continue;
			let a = (this.opts.devices || []).find((e) => e.id === r.entity_id);
			n.push({
				id: r.entity_id,
				dom: t,
				name: i,
				art: a?.art || vn(t, i)
			});
		}
		return n.sort((e, t) => gn.indexOf(e.dom) - gn.indexOf(t.dom) || e.name.localeCompare(t.name, "zh")), n;
	}
	_inferDevice(e) {
		let t = this._hass?.states?.[e], n = e.split(".")[0], r = t?.attributes?.friendly_name || e, i = (this.opts.devices || []).find((t) => t.id === e);
		return i?.art ? {
			name: i.name || r,
			art: i.art,
			dom: i.dom || n
		} : {
			name: r,
			art: vn(n, r),
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
        <div class="fh-grid2">${Ee.map((e) => `<button class="fh-chip" data-furn="${e.kind}">${e.name}<i>${e.w}×${e.d}</i></button>`).join("")}
        </div></div>`;
		else if (this.tool === "device") {
			this._regMeta || this._loadRegistry();
			let t = this._listEntities(), r = this._regMeta ? this._listEntities(!1).length - t.length : 0, i = [...(this.opts.devices || []).filter((e) => e.demo).map((e) => ({
				id: e.id,
				name: e.name,
				art: e.art,
				dom: e.dom
			})), {
				id: "demo.fanlight",
				name: "风扇灯",
				art: "fanlight",
				dom: "switch"
			}];
			this._demos = i;
			let a = (this._devSearch || "").trim().toLowerCase(), o = this._catFilter || "all", s = o === "all" ? null : yn.find((e) => e.key === o), c = yn.map((e) => ({
				cat: e,
				count: t.filter((t) => e.match(t)).length
			})).filter((e) => e.count > 0), l = t.filter((e) => s && !s.match(e) ? !1 : !a || e.name.toLowerCase().includes(a) || e.id.toLowerCase().includes(a)), u = (e, t, n, r) => `<button class="fh-fchip${o === e ? " on" : ""}" data-cat-filter="${e}">
          ${n ? `<span class="ic">${n}</span>` : ""}<span>${t}</span>
          ${r == null ? "" : `<span class="cnt">${r}</span>`}</button>`, d = `<div class="fh-filters">
        ${u("all", "全部", "", t.length)}
        ${c.map((e) => u(e.cat.key, e.cat.label, e.cat.icon, e.count)).join("")}
      </div>`, f = (t) => `<button class="fh-row ${e.devices.some((e) => e.entity === t.id) ? "done" : ""}" data-dev="${t.id}">
          <span class="dot"></span><span class="nm">${Q(t.name)}</span>
          <span class="rm">${_n[t.dom] || t.dom}</span></button>`, p = r > 0 ? `<button class="fh-aux" data-aux-toggle>
            ${this._hideAux ? `已隐藏 ${r} 个系统/辅助实体` : `已显示 ${r} 个系统/辅助实体`}
            <i>${this._hideAux ? "显示" : "隐藏"}</i></button>` : "";
			n = `<div class="fh-sec"><h4>设备</h4>
        <input class="fh-input fh-dev-search" data-dev-search placeholder="搜索设备…" value="${Q(this._devSearch || "")}">
        ${d}
        ${p}
        <p class="fh-note">点一项放进当前视野中心；已放置的会打勾</p>
        <div class="fh-list">${l.map(f).join("") || `<p class="fh-note">${a || o !== "all" ? "没有匹配的设备" : "没有可用的设备实体"}</p>`}</div>
      </div>` + (i.length ? `<div class="fh-sec"><h4>模型预览</h4>
        <p class="fh-note">演示模型，只摆样子，不连实体</p>
        <div class="fh-list">${i.map((e) => `<button class="fh-row demo" data-demo="${e.id}">
            <span class="dot"></span><span class="nm">${Q(e.name)}</span>
            <span class="rm">演示</span></button>`).join("")}</div></div>` : "");
		} else if (t?.type === "group") n = `<div class="fh-sec"><h4>已框选 ${t.items.length} 个物品</h4>
        <p class="fh-note">拖拽即可整体移动；点空白处或按 Esc 取消选择。</p>
        <button class="fh-wide" data-act="group-del">删除所选（${t.items.length}）</button>
        <button class="fh-danger" data-act="group-clear">取消选择</button>
      </div>`;
		else if (t?.type === "room") {
			let r = e.rooms.find((e) => e.id === t.id);
			if (r) {
				let e = r.floor || {
					type: "matte",
					tile: "stone",
					color: j.matte.color,
					w: .8,
					d: .8,
					grout: .002,
					groutColor: "#d9d3c7",
					orient: "h",
					joint: "straight"
				}, t = e.type === "wood", i = Object.entries(M).filter(([, e]) => e.wood === t);
				n = `<div class="fh-sec"><h4>房间</h4>
          <label class="fh-field"><span>名称</span>
            <input class="fh-input" data-room-name value="${Q(r.name)}" placeholder="客厅 / 主卧 / 厨房…"></label>
          <div class="fh-kv"><span>面积</span><b>${w(r.poly).toFixed(2)} m²</b></div>

          <div class="fh-sec fh-floor"><h4>地面材质</h4>
            <div class="fh-field"><span>板材</span>
              <div class="fh-seg3">${Object.entries(j).map(([t, n]) => `<button data-floor-type="${t}" class="${e.type === t ? "on" : ""}">${n.name}</button>`).join("")}
              </div>
            </div>
            <div class="fh-field"><span>纹理</span>
              <select class="fh-input" data-floor-tile>${i.map(([t, n]) => `<option value="${t}" ${e.tile === t ? "selected" : ""}>${n.name}</option>`).join("")}</select>
            </div>
            <label class="fh-field"><span>颜色</span>
              <input type="color" value="${e.color || M[e.tile]?.base || "#e8e2d6"}" data-floor-color></label>
            <div class="fh-field"><span>规格</span>
              <div class="fh-grid2">${ke.map((t) => {
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
				let t = D(r), i = e.openings.filter((e) => e.wallId === r.id);
				n = `<div class="fh-sec"><h4>墙体</h4>
          <div class="fh-kv"><span>长度</span><b>${t.toFixed(2)} m</b></div>
          <label class="fh-field"><span>墙厚</span>
            <div class="fh-num">
              <input type="number" min="0.06" max="0.6" step="0.01" value="${O(r).toFixed(2)}" data-wall-t>
              <em>m</em>
            </div>
          </label>
          <label class="fh-field"><span>墙高</span>
            <div class="fh-num">
              <input type="number" min="0.5" max="3" step="0.05" value="${ie(e, r).toFixed(2)}" data-wall-h>
              <em>m</em>
            </div>
          </label>
          <div class="fh-field"><span>类型</span>
            <div class="fh-seg2">
              ${Object.entries(_).map(([e, t]) => `<button data-wall-kind="${e}" class="${(r.kind || "solid") === e ? "on" : ""}">${t}</button>`).join("")}
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
          ${this._rotPreviewHTML(r, !1)}
          <div class="fh-row2">
            <button data-act="rot-l">↺ 左转 15°</button>
            <button data-act="rot-r">↻ 右转 15°</button>
          </div>
          <button class="fh-danger" data-act="del">删除</button>
        </div>`);
		} else if (t?.type === "device") {
			let r = e.devices.find((e) => e.id === t.id);
			if (r) {
				let e = Ie(r.art || r.dom || "generic");
				n = `<div class="fh-sec"><h4>设备</h4>
          <div class="fh-kv"><span>名称</span><b>${Q(r.name)}</b></div>
          <div class="fh-kv"><span>类别</span><b>${Q(_n[r.dom] || r.dom || "—")}</b></div>
          <div class="fh-kv"><span>实体</span><b class="mono">${Q(r.entity)}</b></div>
          <div class="fh-kv"><span>占地</span><b>${Math.round(e.w * 100)} × ${Math.round(e.d * 100)} cm</b></div>
          ${this._rotPreviewHTML(r, !0)}
          <div class="fh-row2">
            <button data-act="rot-l">↺</button>
            <button data-act="rot-r">↻</button>
          </div>
          <button class="fh-danger" data-act="del">从户型中移除</button>
        </div>`;
			}
		} else if (t?.type === "opening") {
			let r = e.openings.find((e) => e.id === t.id), i = r && e.walls.find((e) => e.id === r.wallId);
			if (r && i) {
				let e = D(i), t = (r.width || .9) / 2, a = Math.min(t, e / 2), o = Math.max(e - t, e / 2), s = r.type === "door", c = r.hasLeaf !== !1;
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
            <span class="dot" style="background:${Oe(t)}"></span>
            <span class="nm">${Q(e.name)}</span>
            <span class="rm">${w(e.poly).toFixed(1)} m²</span>
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
        <p class="fh-mini">新墙默认 ${p.toFixed(2)} m；老墙要一起改就点上面</p>
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
				let t = Ee.find((t) => t.kind === e.dataset.furn);
				this.editor.beginPlace({
					kind: "furniture",
					kindName: e.dataset.furn,
					name: t?.name || ""
				}), this._hint("移动鼠标选位置，点一下放下 · Esc 取消");
			};
		}), this.$panel.querySelectorAll("[data-dev]").forEach((e) => {
			e.onclick = () => {
				let t = e.dataset.dev, n = this._inferDevice(t);
				this.editor.beginPlace({
					kind: "device",
					entity: t,
					dev: n,
					name: n.name
				}), this._hint("移动鼠标选位置，点一下放下 · Esc 取消");
			};
		}), this.$panel.querySelectorAll("[data-demo]").forEach((e) => {
			e.onclick = () => {
				let t = (this._demos || []).find((t) => t.id === e.dataset.demo);
				t && (this.editor.beginPlace({
					kind: "device",
					entity: t.id,
					dev: {
						name: t.name,
						art: t.art,
						dom: t.dom
					},
					name: t.name
				}), this._hint("移动鼠标选位置，点一下放下 · Esc 取消"));
			};
		}), this.$panel.querySelectorAll("[data-cat-filter]").forEach((e) => {
			e.onclick = () => {
				this._catFilter = e.dataset.catFilter, this.renderPanel();
			};
		});
		let n = this.$panel.querySelector("[data-aux-toggle]");
		n && (n.onclick = () => {
			this._hideAux = !this._hideAux, this.renderPanel();
		});
		let r = this.$panel.querySelector("[data-dev-search]");
		r && (r.oninput = () => {
			this._devSearch = r.value;
			let e = r.selectionStart;
			this.renderPanel();
			let t = this.$panel.querySelector("[data-dev-search]");
			if (t) {
				t.focus();
				try {
					t.setSelectionRange(e, e);
				} catch {}
			}
		}), this.$panel.querySelectorAll("[data-act=\"group-del\"]").forEach((e) => {
			e.onclick = () => this.editor?.deleteSelected();
		}), this.$panel.querySelectorAll("[data-act=\"group-clear\"]").forEach((e) => {
			e.onclick = () => this.editor?.select(null);
		});
		let i = this.$panel.querySelector("[data-room-name]");
		i && (i.oninput = () => {
			let n = e.rooms.find((e) => e.id === t.id);
			n && (n.name = i.value, $(e), this.editor?.requestRender());
		});
		let a = () => t?.type === "room" ? e.rooms.find((e) => e.id === t.id) : null, o = (e) => (e.floor || (e.floor = {
			type: "matte",
			tile: "stone",
			color: j.matte.color,
			w: .8,
			d: .8,
			grout: .002,
			groutColor: "#d9d3c7",
			orient: "h",
			joint: "straight"
		}), e.floor), s = (t) => {
			$(e), this.editor?.requestRender();
		};
		this.$panel.querySelectorAll("[data-floor-type]").forEach((e) => {
			e.onclick = () => {
				let t = a();
				if (!t) return;
				let n = o(t);
				n.type = e.dataset.floorType, n.tile = j[n.type].tile, n.color = j[n.type].color, s(t), this.renderPanel();
			};
		});
		let c = this.$panel.querySelector("[data-floor-tile]");
		c && (c.onchange = () => {
			let e = a();
			if (!e) return;
			let t = o(e);
			t.tile = c.value, M[t.tile]?.base && (t.color = M[t.tile].base), s(e);
		});
		let l = this.$panel.querySelector("[data-floor-color]");
		l && (l.oninput = () => {
			let e = a();
			e && (o(e).color = l.value, s(e));
		}), this.$panel.querySelectorAll("[data-floor-size]").forEach((e) => {
			e.onclick = () => {
				let t = a();
				if (!t) return;
				let [n, r] = e.dataset.floorSize.split("x").map(Number), i = o(t);
				i.w = n, i.d = r, s(t), this.renderPanel();
			};
		});
		let u = (e, t) => {
			let n = this.$panel.querySelector(e);
			n && (n.onchange = () => {
				let e = a();
				if (!e) return;
				let r = parseFloat(n.value);
				Number.isFinite(r) && r > 0 && r <= 3 ? o(e)[t] = Math.round(r * 100) / 100 : n.value = Number(o(e)[t]).toFixed(2), s(e);
			});
		};
		u("[data-floor-w]", "w"), u("[data-floor-d]", "d"), this.$panel.querySelectorAll("[data-floor-orient]").forEach((e) => {
			e.onclick = () => {
				let t = a();
				t && (o(t).orient = e.dataset.floorOrient, s(t), this.renderPanel());
			};
		}), this.$panel.querySelectorAll("[data-floor-joint]").forEach((e) => {
			e.onclick = () => {
				let t = a();
				t && (o(t).joint = e.dataset.floorJoint, s(t), this.renderPanel());
			};
		});
		let d = this.$panel.querySelector("[data-floor-grout-color]");
		d && (d.oninput = () => {
			let e = a();
			e && (o(e).groutColor = d.value, s(e));
		});
		let f = this.$panel.querySelector("[data-floor-grout]");
		f && (f.onchange = () => {
			let e = a();
			if (!e) return;
			let t = parseFloat(f.value);
			Number.isFinite(t) && t >= 0 && t <= 12 ? o(e).grout = t / 1e3 : f.value = ((o(e).grout || 0) * 1e3).toFixed(1), s(e);
		});
		let p = () => t?.type === "opening" ? e.openings.find((e) => e.id === t.id) : null, m = (t, n) => {
			let r = p();
			if (!r) return;
			Object.assign(r, t);
			let i = e.walls.find((e) => e.id === r.wallId);
			i && Object.assign(r, ce(i, r)), $(e), this.editor?.requestRender(), n || this.renderPanel();
		}, h = (e, t, n, r) => {
			let i = this.$panel.querySelector(e);
			i && (i.onchange = () => {
				let e = parseFloat(i.value);
				if (Number.isFinite(e) && e >= n && e <= r) m({ [t]: Math.round(e * 100) / 100 });
				else {
					let e = p();
					e && (i.value = Number(e[t]).toFixed(2));
				}
			});
		};
		h("[data-op-off]", "offset", 0, 100), h("[data-op-w]", "width", .2, 20), h("[data-op-h]", "height", .2, 4), h("[data-op-b]", "bottom", 0, 3), this.$panel.querySelectorAll("[data-op-type]").forEach((e) => {
			e.onclick = () => {
				let t = p();
				if (!t) return;
				let n = e.dataset.opType;
				n !== t.type && m({
					type: n,
					width: n === "door" ? .9 : 1.2,
					height: n === "door" ? 2.1 : 1.2,
					bottom: n === "door" ? 0 : .9,
					hasLeaf: !1,
					doorStyle: "single"
				});
			};
		});
		let g = this.$panel.querySelector("[data-op-leaf]");
		g && (g.onchange = () => m({ hasLeaf: g.checked }));
		let _ = this.$panel.querySelector("[data-op-wstyle]");
		_ && (_.onchange = () => m({ windowStyle: _.value }));
		let v = this.$panel.querySelector("[data-op-dstyle]");
		v && (v.onchange = () => m({ doorStyle: v.value })), this.$panel.querySelectorAll("[data-op-swing]").forEach((e) => {
			e.onclick = () => m({ swing: e.dataset.opSwing });
		}), this.$panel.querySelectorAll("[data-op-hinge]").forEach((e) => {
			e.onclick = () => m({ hinge: e.dataset.opHinge });
		});
		let y = this.$panel.querySelector("[data-op-ent]");
		y && (y.onchange = () => {
			let e = y.value || "", t = p();
			if (!t) return;
			let n = { entityId: e };
			e && t.type === "door" && t.hasLeaf === !1 && (n.hasLeaf = !0), m(n);
		});
		let b = (n) => {
			let r = e.walls.find((e) => e.id === t.id);
			r && (Object.assign(r, n), $(e), this.editor?.requestRender(), this.renderPanel());
		}, x = this.$panel.querySelector("[data-wall-t]");
		x && (x.onchange = () => {
			let n = parseFloat(x.value);
			if (Number.isFinite(n) && n >= .04 && n <= .8) b({ t: Math.round(n * 1e3) / 1e3 });
			else {
				let n = e.walls.find((e) => e.id === t.id);
				n && (x.value = O(n).toFixed(2));
			}
		});
		let S = this.$panel.querySelector("[data-wall-h]");
		S && (S.onchange = () => {
			let n = parseFloat(S.value);
			if (Number.isFinite(n) && n >= .3 && n <= 4) b({ h: Math.round(n * 100) / 100 });
			else {
				let n = e.walls.find((e) => e.id === t.id);
				n && (S.value = ie(e, n).toFixed(2));
			}
		}), this.$panel.querySelectorAll("[data-wall-kind]").forEach((e) => {
			e.onclick = () => b({ kind: e.dataset.wallKind });
		});
		let C = this.$panel.querySelector("[data-wall-color]");
		C && (C.onchange = () => b({ color: C.value }));
		let w = this.$panel.querySelector("[data-base-op]");
		w && (w.oninput = () => {
			e.base.opacity = parseFloat(w.value), $(e), this.editor?.requestRender();
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
					let e = p();
					e && m({
						hinge: e.hinge === "end" ? "start" : "end",
						swing: e.swing === "outward" ? "inward" : "outward"
					});
				} else t === "adopt" && this._adoptGuides();
				this.renderPanel();
			};
		});
	}
	_rotPreviewHTML(e, t) {
		let n = t ? Ie(e.art || e.dom || "generic") : {
			w: e.w || .6,
			d: e.d || .6,
			shape: "rect",
			front: !1
		}, r = ((e.rot || 0) % 360 + 360) % 360, i = 38 / Math.max(n.w, n.d, .1), a = n.w * i, o = n.d * i, s = n.shape === "circle", c = s ? Math.max(a, o) / 2 : o / 2;
		return `<div class="fh-rotpv">
        <svg viewBox="0 0 58 66" width="58" height="66" aria-hidden="true">
          <g transform="rotate(${r} 29 29)">${s ? `<circle cx="29" cy="29" r="${c}" fill="rgba(77,148,255,.16)" stroke="#4d94ff" stroke-width="1.4"/>` : `<rect x="${(29 - a / 2).toFixed(1)}" y="${(29 - o / 2).toFixed(1)}"
          width="${a.toFixed(1)}" height="${o.toFixed(1)}"
          rx="${Math.min(3, Math.min(a, o) * .2).toFixed(1)}"
          fill="rgba(77,148,255,.16)" stroke="#4d94ff" stroke-width="1.4"/>`}${n.front ? `
        <line x1="${(29 - a / 2 + 1.5).toFixed(1)}" y1="${(29 + o / 2).toFixed(1)}"
              x2="${(29 + a / 2 - 1.5).toFixed(1)}" y2="${(29 + o / 2).toFixed(1)}"
              stroke="#4d94ff" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M29,${(29 + c + 8).toFixed(1)} l-3.4,-4.2 h6.8 z" fill="#4d94ff"/>` : ""}</g>
        </svg>
        <div class="fh-rotpv-txt"><b>朝向 ${r}°</b>
          <em>${n.front ? "粗边 + 箭头 = 正面" : "矩形长边随旋转变化"}</em></div>
      </div>`;
	}
	_applyWallT() {
		let e = this.$panel.querySelector("[data-all-t]"), t = Math.max(.06, Math.min(.6, Number(e?.value) || .15));
		this._tDraft = t;
		let n = this.editor?.applyWallT(t) ?? 0;
		$(this.plan), this._hint(n ? `${n} 堵墙的墙厚已统一为 ${t} m` : "还没有墙");
	}
	_guides() {
		return this.editor?.guides ?? Se(this.plan.base);
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
				let e = await xn(t.src, t.ppm || t.w / 12);
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
			this.plan = b(), $(this.plan), this.editor?.setPlan(this.plan), this.renderPanel();
		}
	}
	_renderBaseCard() {
		let e = this.plan.base, t = e.ppm || (e.w ? e.w / 12 : 0), n = e.ppm && e.w ? e.w / e.ppm : 12, r = Math.round((e.opacity ?? .16) * 100);
		this.$basecard.innerHTML = `
      <div class="fh-bc-h"><b>参考底图</b>
        <button class="fh-bc-x" data-act="bc-close" aria-label="关闭">✕</button></div>
      <div class="fh-bc-b">
        ${e.src ? `<div class="fh-bc-prev"><img src="${e.src}"></div>
             <button class="fh-wide" data-act="base">更换底图</button>` : "<p class=\"fh-note\">还没有参考底图。导入一张户型图，描墙时它会垫在下面当参考。</p>\n             <button class=\"fh-wide primary\" data-act=\"base\">上传图片</button>"}
        <label class="fh-field"><span>透明度 <b class="fh-bc-val" data-bc-opval>${r}%</b></span>
          <input type="range" min="0.05" max="0.9" step="0.01" value="${e.opacity ?? .16}" data-bc-op></label>
        <label class="fh-field"><span>比例大小 <b class="fh-bc-val" data-bc-wmval>${n.toFixed(1)} 米</b></span>
          <input type="range" min="0.5" max="60" step="0.5" value="${n}" data-bc-wm></label>
        <p class="fh-note fh-mini">比例尺：${t ? t.toFixed(1) + " px/米" : "未标定，暂按 12 米宽"}</p>
        <div class="fh-row2">
          <button data-act="bc-calib">两点标定比例尺</button>
          <button data-act="bc-flip" class="${e.flipX ? "on" : ""}">${e.flipX ? "已翻转" : "左右翻转"}</button>
        </div>
      </div>`, this._bindBaseCard();
	}
	_bindBaseCard() {
		let e = this.plan.base;
		this.$basecard.querySelector("[data-act=\"bc-close\"]").onclick = () => {
			this.$basecard.hidden = !0;
		}, this.$basecard.querySelector("[data-act=\"base\"]").onclick = () => {
			this.$basecard.hidden = !0, this._menuAction("base");
		};
		let t = this.$basecard.querySelector("[data-bc-op]");
		t && (t.oninput = () => {
			e.opacity = parseFloat(t.value), this.$basecard.querySelector("[data-bc-opval]").textContent = Math.round(e.opacity * 100) + "%", $(this.plan), this.editor?.requestRender();
		});
		let n = this.$basecard.querySelector("[data-bc-wm]");
		if (n) {
			let t = this.$basecard.querySelector("[data-bc-wmval]");
			n.oninput = () => {
				let r = parseFloat(n.value);
				r > 0 && e.w && (e.ppm = e.w / r, t && (t.textContent = r.toFixed(1) + " 米"), $(this.plan), this.editor?.requestRender());
			}, n.onchange = () => {
				parseFloat(n.value) > 0 && e.w && this._extractBase(!0);
			};
		}
		this.$basecard.querySelector("[data-act=\"bc-calib\"]").onclick = () => {
			this.$basecard.hidden = !0, this.setTool("calibrate"), this._hint("在底图上点两个点，量一段已知长度的墙，再输入实际米数");
		}, this.$basecard.querySelector("[data-act=\"bc-flip\"]").onclick = () => {
			e.flipX = !e.flipX, $(this.plan), this.editor?.requestRender(), this._renderBaseCard();
		};
	}
	async _importImage(e) {
		if (!e) return;
		let t = await wn(e, sn), n = new Image();
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
		let e = new Blob([we(this.plan)], { type: "application/json" }), t = document.createElement("a");
		t.href = URL.createObjectURL(e), t.download = (this.plan.name || "floorplan") + ".json", t.click(), setTimeout(() => URL.revokeObjectURL(t.href), 2e3);
	}
	_importJson(e) {
		if (!e) return;
		let t = new FileReader();
		t.onload = () => {
			try {
				this.plan = Te(String(t.result)), $(this.plan), this.editor?.setPlan(this.plan), this.editor?.fitView(), this.renderPanel();
			} catch (e) {
				alert("这个文件解析不了：" + e.message);
			}
		}, t.readAsText(e);
	}
	_paintDeviceCard() {
		let r = this.sel;
		if (r?.type !== "device") return;
		if (this._devBusy) {
			this._devPending = !0;
			return;
		}
		this._loadRegistry();
		let i = this.plan.devices.find((e) => e.id === r.id);
		if (!i || this._devClosedId && this._devClosedId === i.id) return;
		let a = this.$dev.hidden;
		this.$dev.classList.remove("fresh", "leaving"), clearTimeout(this._devLeaveTimer), a && (this.$dev.classList.add("fresh", "entering"), clearTimeout(this._devEnterTimer), this._devEnterTimer = setTimeout(() => this.$dev.classList.remove("entering"), 240));
		let o = this._hass?.states?.[i.entity], s = o?.attributes || {}, c = i.dom || i.entity.split(".")[0], l = o?.state, u = !!o && l !== "unavailable" && l !== "unknown", d = mn(l), f = String(i.entity || "").startsWith("demo."), p = (this.opts.devices || []).find((e) => e.id === i.entity || e.id === i.id) || null, m = n(i) || n(p), h = i.stream || i.streamUrl || p?.stream || "", g = m ? "e:" + m : h ? "u:" + h : "", _ = g && this._camKey === g ? this.$dev.querySelector("[data-cam] .cam-live") : null, v = "";
		if (v = f ? "<div class=\"fh-note\">演示模型，只摆样子；接上真实实体后就能控制</div>" : u ? `<div class="fh-kv"><span>状态</span><b>${Q(hn(l, c))}</b></div>` : "<div class=\"fh-note\">设备离线</div>", c === "climate" && !f && u) {
			this._camCtl && (this._camCtl.destroy(), this._camCtl = null, this._camKey = ""), this.$dev.hidden = !1, this.$dev.classList.remove("cam", "seg"), this.$dev.classList.add("ac");
			let e = this._siblings(i.entity, i, p);
			this.$dev.innerHTML = Ye({
				name: i.name,
				state: l,
				a: s
			}) + (e.length ? Ft({
				siblings: e,
				ownDomain: null,
				entity: i.entity
			}) : ""), this.$dev.querySelector("[data-act=\"close\"]").onclick = () => this._closeDeviceCard(i), et(this.$dev, (e, t) => this.opts.callService?.("climate", e, {
				entity_id: i.entity,
				...t
			})), e.length && Vt(this.$dev, (e, t, n) => this.opts.callService?.(e, t, n), i.entity);
			return;
		}
		if (!f && u && c !== "camera" && !g) {
			this._camCtl && (this._camCtl.destroy(), this._camCtl = null, this._camKey = ""), this.$dev.hidden = !1, this.$dev.classList.remove("cam", "ac"), this.$dev.classList.add("seg"), this.$dev.innerHTML = Lt({
				name: i.name,
				entity: i.entity,
				state: l,
				a: s,
				siblings: this._siblings(i.entity, i, p)
			}), this.$dev.querySelector("[data-act=\"close\"]").onclick = () => this._closeDeviceCard(i), Vt(this.$dev, (e, t, n) => this.opts.callService?.(e, t, n), i.entity);
			return;
		}
		this.$dev.classList.remove("ac", "cam"), this.$dev.classList.add("seg");
		let y = !f && [
			"light",
			"switch",
			"fan",
			"climate",
			"cover",
			"media_player"
		].includes(c), b = f ? "演示模型" : u ? hn(l, c) : "离线", x = !f && u && d, S = 0, C = (e, t = "") => `<h4><i class="ac-no">${String(++S).padStart(2, "0")}</i><span>${Q(e)}</span>${t ? `<em>${Q(t)}</em>` : ""}</h4>`, w = "";
		g && (w = `<div class="ac-sec">${C("实时画面")}
        <div class="fh-cam" data-cam><div class="cam-live"></div></div>
        <div class="fh-cam-bar">
          <button class="fh-mini" data-act="cam-full">全屏</button>
          <button class="fh-mini" data-act="cam-reload">重连</button>
        </div></div>`);
		let T = y ? `<div class="ac-sec">${C("开关")}<div class="ac-grid" style="--n:1">
          <button class="${d ? "" : "on"}" data-act="toggle">${d ? "关闭" : "开启"}</button></div></div>` : "";
		this.$dev.hidden = !1, this.$dev.innerHTML = `<div class="ac-wrap" data-tone="${x ? "live" : "neutral"}">
      <div class="ac-head">
        <button class="ac-back" data-act="close" aria-label="返回"><svg width="15" height="15" viewBox="0 0 24 24"><path d="M15 5 8 12l7 7"/></svg></button>
        <div class="ac-meta"><b>${Q(i.name)}</b><span class="ac-pill${x ? " live" : ""}">${Q(b)}</span></div>
      </div>${w}
      <div class="ac-sec">${C("状态")}${v}</div>${T}
    </div>`, this.$dev.querySelector("[data-act=\"close\"]").onclick = () => this._closeDeviceCard(i);
		let E = this.$dev.querySelector("[data-act=\"toggle\"]");
		if (E && (E.onclick = () => this.opts.callService?.(c, d ? "turn_off" : "turn_on", { entity_id: i.entity })), g) {
			let n = this.$dev.querySelector("[data-cam]");
			_ ? n.querySelector(".cam-live").replaceWith(_) : (this._camCtl?.destroy(), this._camCtl = e(n.querySelector(".cam-live"), {
				hass: this._hass,
				entity: m || void 0,
				streamUrl: h || void 0
			}), this._camKey = g);
			let r = this.$dev.querySelector("[data-act=\"cam-full\"]");
			r && (r.onclick = () => t({
				hass: this._hass,
				entity: m || void 0,
				streamUrl: h || void 0,
				title: i.name
			}));
			let a = this.$dev.querySelector("[data-act=\"cam-reload\"]");
			a && (a.onclick = () => this._camCtl?.refresh());
		} else this._camCtl && (this._camCtl.destroy(), this._camCtl = null, this._camKey = "");
	}
	_loadRegistry() {
		if (this._regMap) return Promise.resolve(this._regMap);
		if (this._regLoading) return this._regLoading;
		let e = this._hass;
		return e?.callWS ? (this._regLoading = e.callWS({ type: "config/entity_registry/list" }).then((e) => {
			let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
			for (let i of e || []) i?.entity_id && (r.set(i.entity_id, {
				category: i.entity_category || null,
				hidden: !!i.hidden_by
			}), i.device_id && (t.set(i.entity_id, i.device_id), n.has(i.device_id) || n.set(i.device_id, []), n.get(i.device_id).push(i.entity_id)));
			return this._regMap = t, this._devIndex = n, this._regMeta = r, this.sel?.type === "device" && !this._devBusy && this._paintDeviceCard(), this.tool === "device" && this.renderPanel(), t;
		}).catch(() => (this._regMap = /* @__PURE__ */ new Map(), this._regMeta = /* @__PURE__ */ new Map(), this._regMap)).finally(() => {
			this._regLoading = null;
		}), this._regLoading) : (this._regMap = /* @__PURE__ */ new Map(), Promise.resolve(this._regMap));
	}
	_siblings(e, t, n) {
		let r = this._hass?.states || {}, i = Array.isArray(n?.sub) ? n.sub : Array.isArray(t?.entities) ? t.entities : Array.isArray(t?.extra) ? t.extra : [], [a, o] = String(e || "").split("."), s = [
			"light",
			"climate",
			"media_player",
			"cover",
			"lock",
			"vacuum",
			"camera",
			"humidifier"
		], c = [
			"sensor",
			"binary_sensor",
			"select",
			"button",
			"number",
			"switch",
			"climate",
			"input_select",
			"input_boolean",
			"input_button",
			"input_number"
		], l = [], u = this._regMap?.get(e);
		if (u && (l = this._devIndex?.get(u) || []), !l.length && !s.includes(a)) {
			let t = (o || "").split("_"), n = [];
			for (let e = 0; e <= 2 && t.length - e >= 2; e += 1) n.push(t.slice(0, t.length - e).join("_"));
			let i = Object.keys(r).filter((t) => {
				if (t === e) return !1;
				let n = t.split(".")[0];
				return c.includes(n);
			});
			for (let e of n) {
				if (e.length < 4) continue;
				let t = i.filter((t) => t.split(".")[1].startsWith(e + "_"));
				if (t.length) {
					l = t;
					break;
				}
			}
		}
		let d = [], f = /* @__PURE__ */ new Set();
		for (let t of [...i, ...l]) {
			if (!t || t === e || f.has(t)) continue;
			let n = r[t];
			if (!n || n.attributes?.hidden) continue;
			let a = t.split(".")[0];
			if ((c.includes(a) || i.includes(t)) && (f.add(t), d.push({
				entity_id: t,
				domain: a,
				state: n.state,
				a: n.attributes || {}
			}), d.length >= 24)) break;
		}
		return d.sort((e, t) => (e.domain === "sensor" ? 0 : 1) - (t.domain === "sensor" ? 0 : 1)), d;
	}
	_closeDeviceCard(e) {
		this._devClosedId = e.id, this._hideDeviceCard(), this.scene?.fitView();
	}
	_hideDeviceCard() {
		this.$dev && !this.$dev.hidden && (this._camCtl && (this._camCtl.destroy(), this._camCtl = null, this._camKey = ""), !this.$dev.classList.contains("leaving") && (this.$dev.classList.remove("entering"), this.$dev.classList.add("leaving"), clearTimeout(this._devLeaveTimer), this._devLeaveTimer = setTimeout(() => {
			this.$dev.classList.remove("leaving"), this.$dev.hidden = !0;
		}, 200)));
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
function xn(e, t) {
	return new Promise((n, r) => {
		let i = new Image();
		i.onerror = () => r(/* @__PURE__ */ Error("底图读不出来")), i.onload = () => {
			try {
				let e = i.naturalWidth, r = i.naturalHeight, a = Math.min(1, cn / Math.max(e, r)), o = Math.max(8, Math.round(e * a)), s = Math.max(8, Math.round(r * a)), c = document.createElement("canvas");
				c.width = o, c.height = s;
				let l = c.getContext("2d", { willReadFrequently: !0 });
				l.drawImage(i, 0, 0, o, s);
				let u = l.getImageData(0, 0, o, s).data, d = an(Ht(u, o, s), o, s, { ppm: (t || e / 12) * (o / e) }), f = e / o;
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
		localStorage.setItem(on, we(e));
	} catch {}
}
function Sn() {
	let e;
	try {
		let t = localStorage.getItem(on);
		e = t ? Te(t) : b();
	} catch {
		e = b();
	}
	return Cn(e);
}
function Cn(e) {
	let t = !1;
	for (let n of e.devices || []) n.entity === "switch.demo_fridge" && (n.entity = "climate.shi_zi_si_men_bing_xiang_leng_cang_qu", n.dom = "climate", n.art = "fridge", n.name && n.name !== "冰箱" || (n.name = "冰箱"), t = !0);
	return t && $(e), e;
}
function wn(e, t) {
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
export { bn as FloorHome, w as a, te as c, O as d, E as i, ie as l, M as n, T as o, j as r, Oe as s, Me as t, D as u };
