# HA Dash

用 Vue 3 写的 Home Assistant 仪表盘，注册成侧边栏面板。

- 用 HA 注入的 `hass` 对象直接读写状态，**不需要长期访问令牌，也不自己维护 WebSocket**
- 面板文件由集成自己提供（静态目录关闭强缓存），**升级后不用改任何版本号**
- 侧边栏入口 `我的家`，地址 `/my-home`

## 安装

### 1. 添加自定义存储库

HACS → 右上角三个点 → **自定义存储库** → 填本仓库地址 → 类型选 **集成** → 添加。

### 2. 下载

在 HACS 里搜索 `HA Dash` → 下载 → **重启 Home Assistant**。

### 3. 打开一次

`configuration.yaml` 里加一行（只需一次，以后永远不用改）：

```yaml
ha_dash:
```

重启后侧边栏出现「我的家」。

> 如果你之前手写过 `panel_custom:` 且 `url_path` 也是 `my-home`，
> 把那一段删掉，否则两个面板抢同一个地址。

## 更新

HACS → HA Dash → **更新** → 重启。就这样。

版本号会自动带进 `module_url`（`/ha_dash_static/ha-panel.js?v=<版本>`），
所以浏览器一定会重新下载新文件，不存在「更新了还是旧版」的问题。

## 卸载

HACS 里移除，然后删掉 `configuration.yaml` 里那行 `ha_dash:`。

## 开发

源码在另一个仓库，构建产物 `ha-panel.js` 直接提交到本仓库的
`custom_components/ha_dash/frontend/` 下。

```bash
npm run release                              # 构建 + 拷贝 + 版本号 +1
npm run release -- --repo liqian1004/ha-dash # 顺便把清单里的仓库地址写成自己的
git add -A && git commit -m "chore: release"
git tag v$(node -p "require('./custom_components/ha_dash/manifest.json').version")
git push --follow-tags
```
