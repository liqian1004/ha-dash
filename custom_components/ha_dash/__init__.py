"""HA Dash — 把 Vue 写的仪表盘注册成 Home Assistant 的侧边栏面板。

为什么这么做，而不是在 configuration.yaml 里写 panel_custom：

1. 不用改 configuration.yaml，装完集成侧边栏就有入口；
2. 面板 JS 由集成自己提供（静态目录 + cache_headers=False），
   不走 /local/，不会被 HA 那个「一个月强缓存」咬到；
3. module_url 里的 ?v= 直接取 manifest 的 version，
   HACS 升级 → 版本变 → URL 变 → 浏览器必然重新下载。
   所以发布新版本不需要任何手工改版本号的动作。
"""

from __future__ import annotations

import json
import logging
from pathlib import Path

import voluptuous as vol
from homeassistant.components import panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant
from homeassistant.helpers.typing import ConfigType

_LOGGER = logging.getLogger(__name__)

DOMAIN = "ha_dash"

# 允许 configuration.yaml 里只写一行 `ha_dash:`（值为 None）。
# 显式声明 schema，避免 HA 因为「集成没有 CONFIG_SCHEMA」而把这一节忽略掉。
CONFIG_SCHEMA = vol.Schema({DOMAIN: vol.Any(None, dict)}, extra=vol.ALLOW_EXTRA)

# 侧边栏地址：http://<你的HA>/my-home
URL_PATH = "my-home"
# 面板 JS 的静态目录（不需要登录即可访问，和 /local 一样）
STATIC_URL = "/ha_dash_static"
# 自定义元素标签名，必须和前端 main.js 里 customElements.define 的一致
WEBCOMPONENT = "ha-dash"

_PKG = Path(__file__).parent


def _version() -> str:
    """读 manifest 的版本号，失败不影响面板加载。"""
    try:
        return json.loads((_PKG / "manifest.json").read_text("utf-8"))["version"]
    except (OSError, KeyError, ValueError):
        return "0"


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """注册静态目录 + 侧边栏面板（配置里只需要一行 ha_dash:）。"""
    frontend_dir = _PKG / "frontend"
    if not (frontend_dir / "ha-panel.js").is_file():
        _LOGGER.error(
            "找不到面板文件 %s，集成无法工作。请重新通过 HACS 下载或检查安装是否完整",
            frontend_dir / "ha-panel.js",
        )
        return False

    # cache_headers=False：默认 True 时 HA 会给 public, max-age=2678400（31 天），
    # 那正是以前每次都要手动加 ?v= 的原因。
    await hass.http.async_register_static_paths(
        [StaticPathConfig(STATIC_URL, str(frontend_dir), False)]
    )

    module_url = f"{STATIC_URL}/ha-panel.js?v={_version()}"

    await panel_custom.async_register_panel(
        hass,
        frontend_url_path=URL_PATH,
        webcomponent_name=WEBCOMPONENT,
        sidebar_title="我的家",
        sidebar_icon="mdi:home-analytics",
        module_url=module_url,
        require_admin=False,
    )

    _LOGGER.info("HA Dash 面板已注册：/%s（%s）", URL_PATH, module_url)
    return True


async def async_setup_entry(hass: HomeAssistant, entry) -> bool:
    """没有 config flow，这个函数不会被调用；保留是为了兼容未来的 UI 配置。"""
    return True


async def async_unload_entry(hass: HomeAssistant, entry) -> bool:
    """同上。"""
    return True
