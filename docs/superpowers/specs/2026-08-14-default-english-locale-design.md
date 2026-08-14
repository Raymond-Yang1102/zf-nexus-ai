# ZingStone 官网默认英语设计

## 目标

将 ZingStone 官网的规范默认语言从日语改为英语，同时继续完整支持日语和繁体中文。默认英语不仅指首屏文案，还包括无语言前缀 URL、i18n fallback、静态 HTML 语言声明和异常状态下的组件兜底。

## 语言与规范 URL

| 语言 | 首页 | 页面示例 |
| --- | --- | --- |
| 英文 | `/` | `/products`、`/company`、`/technology` |
| 日文 | `/ja/` | `/ja/products`、`/ja/company`、`/ja/technology` |
| 繁体中文 | `/zh-Hant/` | `/zh-Hant/products`、`/zh-Hant/company`、`/zh-Hant/technology` |

英文是唯一无前缀规范语言。日语和繁体中文必须使用显式前缀。语言切换继续保留当前页面、查询参数和锚点，不引入自动重定向或重复的英文 `/en/` 路由。

## 实现设计

- 将 `DEFAULT_LOCALE` 设为 `en`，保留三种受支持语言。
- Vue Router 从共享的默认语言与受支持语言配置派生本地化前缀，不再单独硬编码默认语言关系。
- `localeFromPath` 将无前缀路径解析为英语，将 `/ja` 与 `/zh-Hant` 解析为对应语言。
- `localizedPath` 在目标为英语时移除语言前缀，在目标为日语或繁中时添加对应前缀，并保留查询参数和锚点。
- Vue I18n 的 `fallbackLocale`、组件对无效 locale 的兜底以及 `index.html` 的静态 `lang` 全部统一为英语。
- 用户已通过显式语言 URL 或语言选择器选定日语/繁中时，页面继续使用该语言；本次不改变语言菜单布局和翻译文案。

## 数据流

应用启动时先解析已保存语言，但最终展示语言以当前 URL 为准。无前缀 URL 进入英语；显式 `/ja` 或 `/zh-Hant` 前缀进入对应语言。用户切换语言时，由共享路径转换函数生成新 URL，路由变化再同步 i18n、`localStorage`、`document.lang` 与 SEO 元数据。

## 错误与兼容处理

- 无效或未知语言前缀继续进入现有 404 路由，不静默猜测语言。
- 无效 i18n locale 统一回退英语，避免不同组件各自回退到日语。
- 不保留 `/en/` 重复路由，避免两个 URL 表示相同英文内容。
- 不修改页面布局、产品内容、语言菜单顺序或其他无关业务逻辑。

## 测试与验证

项目目前没有测试运行器。增加最小 Vitest 配置与 `npm test` 脚本，先写失败测试再实现：

- 默认 locale 为 `en`。
- 无前缀、`/ja`、`/zh-Hant` 路径解析正确。
- 三种语言之间切换时，页面路径、查询参数和锚点保持正确。
- 未保存偏好或浏览器语言无法匹配时回退英语。

实现后运行 `npm test` 与 `npm run build`，再在本地预览中检查 `/`、`/ja/`、`/zh-Hant/` 的页面语言、`document.documentElement.lang`、导航切换和 SEO 元数据。

## 交付

代码和文档使用 Conventional Commit 提交到当前 `zingstone` 分支，验证远端与本地提交一致后完成交付。
