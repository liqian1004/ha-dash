/**
 * 常驻入口（panel_custom 的 module_url 指向这里）
 *
 * ⚠️ 为什么必须带时间戳：
 * HA 给 /local/ 下的静态文件发的是 `Cache-Control: public, max-age=2678400`（31 天）。
 * 浏览器在有效期内**根本不会发请求**，所以恒定 URL 的模块永远拿不到新代码。
 * 症状有两种：
 *   1. 改了代码、刷新没变化（用的还是缓存里的旧 js）；
 *   2. 旧 js 里引用的 chunk-xxxx.js 已在重新构建时删除 → 动态 import 404
 *      → 「3D 场景加载失败」。
 *
 * ⚠️ 为什么是动态 import 而不是静态：
 * 静态 import 的路径必须是字面量，没法拼时间戳。上一版改成静态 import 是为了绕开
 * 「元素未升级时 HA 设的 hass 只是 own data property，upgrade 后遮蔽 prototype 的 setter
 * → 面板收不到状态 → 全部离线」这个问题。现在该问题已在 HaDashPanel.connectedCallback
 * 里治掉（摘掉 own property 再重新赋值，让 setter 生效），所以可以放心用动态 import。
 *
 * 注意本文件自身也会被缓存 31 天，但它**以后不需要再改**：
 * 只要这份带时间戳的逻辑被执行过一次，之后每次打开都会拿到最新的 ha-panel.js。
 */
const ts = Date.now()
try {
  await import(`./ha-panel.js?t=${ts}`)
} catch (e) {
  // 极少数环境会对带查询参数的静态路径严格匹配，退回不带参数（可能命中旧缓存，但至少能跑）
  await import('./ha-panel.js')
}
