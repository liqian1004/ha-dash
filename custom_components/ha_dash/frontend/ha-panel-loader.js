/**
 * 永不变的入口（stable entry）
 *
 * HA 给 /local/ 下的文件发的是 `Cache-Control: public, max-age=2678400`（31 天），
 * 所以同一个 URL 改了内容，浏览器也不会重新下载 —— 这就是每次都得改 ?v= 的原因。
 *
 * 这个文件只是三行胶水：它自己地址固定（内容也永远不用再改），
 * 真正加载的 ha-panel.js 每次都带一个时间戳，等于强制走网络拿最新版。
 *
 * module_url 写 /local/ha-panel-loader.js 即可，以后发布新版本什么都不用改，
 * 用户刷新页面就是新版（不需要重启 HA）。
 */
const base = new URL('.', import.meta.url);

// 用顶层 await：加载失败时会 reject，调用方（宿主页 / HA）能拿到错误，而不是静默白屏
await import(`${base}ha-panel.js?t=${Date.now()}`);
