# ZingStone 品牌官网改造设计

## 目标

在当前网站的 Vue、Tailwind、响应式版式和交互基础上，将现有 ZIFU 日本 AI 官网改造成 ZingStone 品牌官网。网站对外使用品牌名 `ZingStone`，并在页脚、公司介绍、隐私政策和使用条款中使用法定主体 `ZingStone HongKong Limited`。

首屏品牌主张为：“为创作与交付打造的桌面媒体工具”。

本次不重做视觉风格，不接入下载、联系表单、分析服务，也不发布网站。

## 语言与路由

保留日文与英文，新增繁体中文。默认语言已由
[`2026-08-14-default-english-locale-design.md`](./2026-08-14-default-english-locale-design.md)
调整为英文；下表以最新规范为准。

| 语言 | 首页 | 其他页面示例 |
| --- | --- | --- |
| 英文 | `/` | `/products`、`/company`、`/technology`、`/contact`、`/privacy`、`/terms` |
| 日文 | `/ja/` | `/ja/products`、`/ja/company`、`/ja/technology`、`/ja/contact`、`/ja/privacy`、`/ja/terms` |
| 繁体中文 | `/zh-Hant/` | `/zh-Hant/products`、`/zh-Hant/company`、`/zh-Hant/technology`、`/zh-Hant/contact`、`/zh-Hant/privacy`、`/zh-Hant/terms` |

语言切换应保持当前页面路径；没有对应页面时回到该语言首页。页面标题、description 与 keywords 随当前语言更新。

## 页面与内容

### 全站

- 保留现有公司 Logo 图形，不修改其文件；导航与页脚紧邻的品牌文字从 `ZIFU` 改为 `ZingStone`。
- 移除旧 ZIFU、ZINGDECK、Nexus AI、旧 AI 产品、日本大阪公司主体、电话、代表人、新闻、增长数据和合作伙伴信息。
- 产品顺序固定为 VideoCompress、VideoBee、AudioCut。
- 产品数据按统一产品项维护，并被首页卡片、产品页与锚点复用，避免顺序和名称漂移。

### 首页

- 保留当前首屏、卡片和产品区块的视觉基础。
- 首屏展示品牌名及确认的主张。
- 删除合作伙伴轮播与新闻区块。
- 产品区块展示三个真实产品入口，跳至当前语言的产品页锚点。
- 显示真实的公司主体或联系入口，不使用虚构客户、评价、用户量或性能指标。

### 产品总览

保留单一产品页和锚点式结构，不创建独立产品 URL。

| 产品 | 锚点 | 图标资源 | 已确认内容 |
| --- | --- | --- | --- |
| VideoCompress | `videocompress` | `logo.svg` | 桌面端本地 FFmpeg 视频压缩、格式转换、裁剪/剪辑、转 MP3、转文字、图片/PDF 压缩。 |
| VideoBee | `videobee` | `logo 2.svg` | 桌面端本地 FFmpeg 视频转换、压缩、大文件与批量任务、参数控制、面向发布的导出。 |
| AudioCut | `audiocut` | `logo 3.svg` | 桌面端本地 FFmpeg 音频裁剪、提取、转换、压缩、变速、合并和批量处理。 |

三个产品均为桌面端产品，媒体文件由用户设备上的本地 FFmpeg 处理。页面不得将其描述为网页上传、服务器处理或安全传输服务。

正式下载链接尚未提供。CTA 仅使用“了解产品”或站内定位，不能生成空下载按钮、失效外链或未确认的网页端入口。

### 公司页

- 展示法定公司名称 `ZingStone HongKong Limited`。
- 展示完整公开地址：`UNIT 1002, 10/F PERFECT COMM BLDG, 20 AUSTIN AVENUE, TSIM SHA TSUI, HONG KONG`。
- 展示成立日期：2026 年 3 月 6 日。
- 使用真实的桌面音视频工具业务介绍和产品范围。
- 不保留旧 CEO、团队、母公司、旧市场和日本公司信息。

### Technology 页面

保留现有路由和视觉结构，但将旧 AI 技术叙述替换为与产品一致的内容：本地 FFmpeg 媒体处理、格式转换、压缩优化、音视频编辑、批量任务、输出参数控制和面向发布的导出。不得补充未经确认的模型、云服务或基础设施能力。

### 联系、隐私与条款

- 新增 Contact、Privacy、Terms 三个页面及三种语言的对应路由、导航和页脚入口。
- Contact 公开完整香港地址；邮箱显示“即将更新”且不渲染 `mailto:`，不提供电话或表单。
- Privacy 只写已确认事实：主体为 ZingStone HongKong Limited，三个桌面产品在本地使用 FFmpeg 处理媒体文件。对 Cookie、分析、诊断日志、账号、第三方服务、数据保留、用户权利与法律责任等未核验内容，采用发布前待确认提示，不伪造承诺。
- Terms 标注为发布前需完成的正式法律文本，不自行作出收费、许可、责任限制或知识产权的未确认承诺。

## 技术边界

- 使用当前 Vue 3、Vue Router、Vue I18n、TypeScript 与 Tailwind 配置。
- 增加 `zh-Hant` 到语言配置、消息资源和路由正则。
- 新增产品 SVG 资源时仅复制用户提供的原文件：`logo.svg`、`logo 2.svg`、`logo 3.svg`。
- 不改公司 Logo 图形资产；仅调整其使用处的品牌文本和 alt 文案。
- 不进行无关重构；仅在产品数据收敛对首页、产品页和锚点一致性有直接作用时调整代码结构。

## 失败与缺失资料处理

- 没有下载链接：显示站内“了解产品”，不显示下载外链。
- 没有工作邮箱：显示非交互“即将更新”，不伪造邮箱或电话。
- 没有产品截图：沿用现有视觉结构和产品 Logo，不生成伪造界面图。
- 未确认隐私与条款事实：明确标为上线前确认事项，不在法律页面写成既定事实。

## 验证

- 运行 `npm run build`，通过 TypeScript 与生产构建。
- 检查日文、英文、繁体中文的首页及 Products、Company、Technology、Contact、Privacy、Terms 路由。
- 检查语言切换、首页产品锚点、导航与页脚链接、浏览器标题/SEO、产品 SVG 资源与无效外链。
- 在本地预览中检查桌面和窄屏导航、页面布局与文字可读性。
- 不将构建通过表述为已完成法律、产品事实或线上部署验证。
