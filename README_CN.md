# 灵枢智汇日本官网 (zf-nexus-ai)

提供强大的AI生产力工具，帮助用户释放创造力潜能的日本语官方网站。

## 📋 目录

- [项目概述](#项目概述)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [环境搭建](#环境搭建)
- [开发流程](#开发流程)
- [构建与部署](#构建与部署)
- [多语言支持](#多语言支持)
- [路由设计](#路由设计)
- [UI/UX设计](#uiux设计)
- [浏览器兼容性](#浏览器兼容性)
- [许可证](#许可证)

---

## 项目概述

本项目是 **灵枢智汇（Nexus AI）** 的日本语官方网站，旨在向日本用户介绍三款核心产品（NoteGPT、VisualGPT、PhotoGPT），展示AI生产力工具的强大功能和价值。

### 产品阵容

| 产品 | 说明 |
|------|------|
| **NoteGPT** | AI学习助手 - 视频、文档、论文一键智能解析 |
| **VisualGPT** | AI视觉内容工作室 - 文本生成高质量图片和视频 |
| **PhotoGPT** | AI人像平台 - 专业级人像照片生成解决方案 |

---

## 技术栈

| 分类 | 技术 | 版本 |
|------|------|------|
| 框架 | Vue | 3.4.21 |
| 语言 | TypeScript | 5.4.5 |
| 构建工具 | Vite | 5.2.8 |
| 路由 | Vue Router | 4.6.4 |
| 国际化 | Vue I18n | 10.0.0 |
| CSS框架 | Tailwind CSS | 3.4.14 |
| 图标库 | Lucide Vue | 0.365.0 |

---

## 项目结构

```
zf-nexus-ai/
├── assets/                    # 静态资源（构建后）
│   └── logo/                  # Logo图片
├── dist/                      # 构建输出目录
├── src/
│   ├── assets/                # 源代码资源
│   │   └── logo/              # Logo图片
│   ├── components/            # Vue组件
│   │   ├── Header.vue         # 页头导航
│   │   ├── Footer.vue         # 页脚信息
│   │   ├── Hero.vue           # 首屏展示区
│   │   ├── Products.vue       # 产品展示区
│   │   ├── Features.vue       # 功能特点区
│   │   ├── Testimonials.vue   # 用户评价区
│   │   └── EnterpriseLogos.vue # 企业Logo展示
│   ├── config/                # 配置文件
│   │   └── locale.ts          # 语言配置
│   ├── locales/               # 多语言资源
│   │   └── index.ts           # 语言数据（日/中/英）
│   ├── router/                # 路由配置
│   │   └── index.ts           # 路由定义
│   ├── views/                 # 页面视图
│   │   ├── Home.vue           # 首页
│   │   ├── About.vue          # 关于我们
│   │   ├── Help.vue           # 帮助中心
│   │   └── NotFound.vue       # 404页面
│   ├── App.vue                # 根组件
│   ├── main.ts                # 应用入口
│   └── style.css              # 全局样式
├── .gitignore                 # Git忽略文件
├── index.html                 # HTML模板
├── package.json               # 项目配置
├── postcss.config.js          # PostCSS配置
├── tailwind.config.js         # Tailwind配置
├── tsconfig.json              # TypeScript配置
├── tsconfig.node.json         # Node环境TS配置
└── vite.config.ts             # Vite配置
```

### 组件职责说明

| 组件 | 职责 |
|------|------|
| **Header** | 导航栏、语言切换、产品下拉菜单 |
| **Footer** | 公司信息、链接导航、联系方式 |
| **Hero** | 主标题、行动按钮、统计数据展示 |
| **Products** | 三款产品详细介绍 |
| **Features** | 核心功能特点展示 |
| **Testimonials** | 用户评价轮播 |
| **EnterpriseLogos** | 合作企业Logo展示 |

---

## 环境搭建

### 前置条件

- Node.js >= 20.x
- npm >= 10.x

### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/Raymond-Yang1102/zf-aura-ai.git
cd zf-nexus-ai

# 安装依赖包
npm install
```

### 启动开发服务器

```bash
# 启动开发服务器（端口3200）
npm run dev
```

浏览器将自动打开 `http://localhost:3200`。

---

## 开发流程

### 命令列表

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（热重载） |
| `npm run build` | 执行生产构建 |
| `npm run preview` | 预览构建结果 |

### 编码规范

1. **TypeScript**: 确保类型安全，正确定义接口
2. **Vue 3**: 仅使用 Composition API
3. **Tailwind CSS**: 采用实用优先的CSS方案
4. **组件命名**: 使用 PascalCase（如 `Header.vue`）
5. **导入顺序**: 外部依赖 → 内部模块 → 样式文件

---

## 构建与部署

### 生产构建

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

### 部署配置

项目已配置 **Cloudflare Pages** 自动部署：

- 分支: `main`
- 构建命令: `npm run build`
- 输出目录: `dist`

---

## 多语言支持

### 支持语言

| 语言 | 代码 | 备注 |
|------|------|------|
| 日语 | `ja` | 默认语言 |
| 简体中文 | `zh` | 支持 |
| 英语 | `en` | 支持 |

### 语言切换机制

1. **URL路径**: 通过 `/ja/`、`/zh/`、`/en/` 前缀识别语言
2. **LocalStorage**: 持久化用户语言选择
3. **浏览器设置**: 首次访问时检测系统语言

### 添加新语言

在 `src/locales/index.ts` 中添加翻译数据：

```typescript
export const messages = {
  ja: { /* 日语数据 */ },
  zh: { /* 中文数据 */ },
  en: { /* 英语数据 */ }
}
```

---

## 路由设计

### 路由配置

| 路径 | 组件 | 说明 |
|------|------|------|
| `/` | Home | 日语首页（默认） |
| `/ja/` | Home | 日语首页 |
| `/zh/` | Home | 中文首页 |
| `/en/` | Home | 英语首页 |
| `/about` | Home → 重定向 | 重定向到 `/ja/about` |
| `/ja/about` | About | 日语关于页面 |
| `/zh/about` | About | 中文关于页面 |
| `/en/about` | About | 英语关于页面 |
| `/ja/help` | Help | 日语帮助页面 |
| `/zh/help` | Help | 中文帮助页面 |
| `/en/help` | Help | 英语帮助页面 |
| `*` | NotFound | 404错误页面 |

### 锚点链接

支持页面内锚点跳转：

- `#products` - 产品区域
- `#features` - 功能特点区域
- `#contact` - 联系我们（页脚）

---

## UI/UX设计

### 设计主题

**日式极简设计风格**

- **配色**: 以和纸色（`#fdfcfb`）为基础，柔和蓝色（`#0ea5e9`）和珊瑚色（`#f97316`）作为点缀
- **字体**: Noto Sans JP（日语）、Noto Sans SC（中文）、Inter（英文）
- **图案**: 青海波纹理背景、和纸质感效果

### 自定义CSS类

| 类名 | 效果 |
|------|------|
| `gradient-bg-japanese` | 柔和多彩渐变背景 |
| `card-hover-japanese` | 悬停上浮效果 |
| `text-gradient-japanese` | 文字渐变（蓝→紫→橙） |
| `btn-gradient-japanese` | 蓝色渐变按钮 |
| `btn-warm` | 珊瑚色渐变按钮 |
| `animate-float-japanese` | 浮动动画 |
| `animate-slide-up` | 向上滑入动画 |
| `backdrop-blur-japanese` | 毛玻璃背景效果 |

### 响应式适配

- **手机**: 移动端菜单、垂直布局
- **平板**: 部分元素取消堆叠
- **桌面**: 完整布局、下拉菜单

---

## 浏览器兼容性

| 浏览器 | 最低版本 |
|--------|----------|
| Chrome | 100+ |
| Firefox | 100+ |
| Safari | 15+ |
| Edge | 100+ |

---

## 许可证

© 2026 Nexus AI. All rights reserved.

---

## 开发者指南

### 调试工具

推荐使用 Vue DevTools。开发模式下 Vue 3 官方调试器已启用。

### 环境变量

如需配置环境变量，创建 `.env` 文件：

```env
VITE_APP_TITLE=灵枢智汇
VITE_APP_API_URL=https://api.nexus-ai.jp
```

### 自定义要点

1. **配色主题**: 修改 `tailwind.config.js` 中的 `theme.extend.colors`
2. **语言支持**: 在 `src/locales/index.ts` 添加翻译数据
3. **路由配置**: 在 `src/router/index.ts` 调整路由
4. **全局样式**: 在 `src/style.css` 添加自定义样式

---

**最后更新**: 2026年6月