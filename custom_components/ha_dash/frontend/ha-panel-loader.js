/**
 * 永不变的入口（stable entry）
 *
 * HA 的 panel_custom 用 <script type="module"> + onload 来加载本文件。
 * 之前这里写「顶层 await + 动态 import」本想给 ha-panel.js 加时间戳绕过 31 天缓存，
 * 但顶层 await 会让 onload 在 ha-dash 元素注册前就触发，HA 于是创建出
 * 未升级的普通元素，hass 注不进去 → 面板 states 一直为空 → 所有设备显示「离线」。
 *
 * 所以改成静态 import：ha-panel.js 会在本文件执行前就同步加载完，
 * 保证 onload 触发时 ha-dash 已经注册好。代价是 ha-panel.js 不再带时间戳，
 * 会被 /local/ 的 31 天强缓存；更新后若没生效，浏览器强刷（Ctrl+F5）即可。
 */
import './ha-panel.js';
export * from './ha-panel.js';
