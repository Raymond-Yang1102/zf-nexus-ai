# ZIFU 官网项目开发规范

## 一、项目定位

本项目为 ZIFU 公司官方网站。

官网定位为：

"企业品牌官网 + 产品展示平台"

而不是某一个产品的官方网站。

当前产品包括：

- NoteGPT
- VisualGPT
- PhotoGPT

未来允许继续扩展更多 AI 产品。

所有开发必须围绕 ZIFU 品牌展开。

---

## 二、开发目标

官网主要目标：

1. 建立品牌形象
2. 展示公司实力
3. 展示产品矩阵
4. 提升用户信任
5. 引导用户进入各产品
6. 支持后续产品持续扩展

---

## 三、首页原则

首页解决的问题：

"ZIFU 能为用户创造什么价值？"

首页不是：

- 公司介绍
- 产品说明书
- 新闻列表

首页重点：

- 品牌定位
- 产品矩阵
- 应用场景
- 平台优势
- 信任建立
- 行动引导

---

## 四、关于我们页面原则

关于我们页面回答：

"为什么值得信任 ZIFU？"

展示：

- 品牌故事
- 企业使命
- 企业愿景
- 企业价值观
- 技术理念
- 产品生态
- 发展规划

不要：

- 大量产品介绍
- 操作教程

---

## 五、联系我们页面原则

联系我们页面回答：

"如何联系 ZIFU？"

包括：

- 联系表单
- 商务合作
- 技术支持
- 公司邮箱
- 办公地址
- 社交媒体

---

## 六、产品定位

产品属于公司生态。

不是官网主体。

首页仅展示产品入口。

产品详情放独立页面。

---

## 七、开发原则

始终保持：

组件化

模块化

可维护

可扩展

响应式

不要为了实现效果而牺牲可维护性。

---

## 八、编码规范

优先：

Composition API

TypeScript

组合式组件

避免：

重复代码

超大组件

魔法数字

深层嵌套

---

## 九、UI原则

整体风格：

现代

极简

科技

可信

高级

参考：

OpenAI

Notion

Vercel

Stripe

Apple

避免：

复杂背景

过多渐变

炫酷动画

廉价科技风

---

## 十、响应式

必须支持：

PC

Laptop

Tablet

Mobile

移动端优先。

---

## 十一、国际化

默认：

日文

支持：

英文

中文

所有文案不得直接写死。

统一使用国际化资源。

---

## 十二、SEO

每个页面必须：

title

description

Open Graph

结构化数据

---

## 十三、部署

平台：

github

默认分支：

main

开发分支：

main

功能分支：

develop/*

---

## 十四、Git 提交规范

### 提交规范

项目采用 **Conventional Commits** 规范。

提交格式：

```
<type>(<scope>): <subject>
```

例如：

```
feat(home): 新增首页 Hero 模块
feat(products): 新增 PhotoGPT 产品页面
fix(header): 修复移动端导航栏显示异常
refactor(layout): 重构公共布局组件
style(button): 优化按钮交互样式
docs(claude): 更新项目开发规范
perf(image): 优化首页图片加载性能
build(vite): 调整构建配置
ci(github): 更新 GitHub Actions 工作流
chore(deps): 更新项目依赖
```

---

### Commit 类型

| 类型     | 说明                       |
| -------- | -------------------------- |
| feat     | 新增功能                   |
| fix      | 修复问题                   |
| refactor | 重构代码（不改变功能）     |
| docs     | 文档更新                   |
| style    | 样式调整（不涉及业务逻辑） |
| perf     | 性能优化                   |
| test     | 测试相关                   |
| build    | 构建配置修改               |
| ci       | CI/CD 配置修改             |
| chore    | 项目维护（依赖、配置等）   |
| revert   | 回滚提交                   |

---

### Scope 建议

页面：

- home
- products
- about
- contact
- privacy
- terms

组件：

- header
- footer
- hero
- navbar
- button
- card
- form
- modal

产品：

- notegpt
- visualgpt
- photogpt

其他：

- layout
- router
- i18n
- seo
- github
- cloudflare
- vite

---

### 提交原则

- 一个 Commit 仅完成一项独立修改。
- 提交信息准确描述修改内容。
- 避免使用 `update`、`修改`、`test` 等无意义描述。
- 保持提交粒度清晰，便于版本追踪与回滚。

## 十五、版本管理与部署

### Git 分支

当前项目仅使用 **main** 分支进行开发与发布。

所有代码统一提交至：

```
main
```

暂不维护：

- develop
- release
- feature/*
- hotfix/*

如后续团队规模扩大，再根据需要引入分支管理策略。

---

### 部署流程

当前部署流程如下：

```
本地开发
      │
      ▼
Git Commit
      │
      ▼
Git Push（main）
      │
      ▼
GitHub Repository
      │
      ▼
Cloudflare Pages 自动构建
      │
      ▼
Production
```

Cloudflare Pages 已与 GitHub 仓库绑定。

每次推送至 `main` 分支后，将自动完成：

- 安装依赖
- 项目构建
- 部署至生产环境

无需执行任何手动部署命令。

---

### 发布原则

所有线上版本必须来源于 GitHub。

禁止：

- 手动上传 `dist`
- 本地直接部署生产环境
- 绕过 GitHub 修改线上代码

所有版本均应能够追溯至对应的 Git Commit。

---

### AI 协作要求

Claude 在生成代码时，应默认遵循当前项目的发布流程：

**修改代码 → Git Commit → Push 至 main → Cloudflare Pages 自动部署**

不得建议使用 `wrangler pages deploy` 或其他手动部署方式，除非开发者明确提出相关需求。

## 十六、开发原则

本项目采用 **持续迭代（Continuous Delivery）** 的开发模式。

所有功能开发均直接基于 `main` 分支进行。

每次提交前应确保：

- 功能完整
- 本地构建通过
- 无 TypeScript 错误
- 无 ESLint 错误（如已启用）
- 页面在桌面端与移动端均能正常显示

由于每次 Push 都会自动触发 Cloudflare Pages 生产环境部署，因此应避免提交未经验证的代码。

## 十七、AI生成代码要求

生成代码时：

优先复用已有组件

遵循项目结构

保持代码简洁

避免引入无必要依赖

保证响应式

优先考虑长期维护