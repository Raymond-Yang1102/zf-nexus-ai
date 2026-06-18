# 霊枢智汇日本官网 (zf-nexus-ai)

AIで生産性を最大限に引き出すための強力なツールを提供する日本語ウェブサイトです。

## 📋 目次

- [プロジェクト概要](#プロジェクト概要)
- [技術スタック](#技術スタック)
- [プロジェクト構造](#プロジェクト構造)
- [環境構築](#環境構築)
- [開発フロー](#開発フロー)
- [ビルドとデプロイ](#ビルドとデプロイ)
- [多言語対応](#多言語対応)
- [ルーティング設計](#ルーティング設計)
- [UI/UX設計](#uiux設計)
- [ブラウザサポート](#ブラウザサポート)
- [ライセンス](#ライセンス)

---

## プロジェクト概要

このプロジェクトは、**霊枢智汇（Nexus AI）** の日本語公式ウェブサイトです。3つの主力製品（NoteGPT、VisualGPT、PhotoGPT）を紹介し、ユーザーにAI生産性ツールの魅力を伝えることを目的としています。

### 製品ラインナップ

| 製品 | 説明 |
|------|------|
| **NoteGPT** | AI学習アシスタント - 動画・ドキュメントをAIが瞬時に解析 |
| **VisualGPT** | AIビジュアルコンテンツスタジオ - テキストから画像・動画を生成 |
| **PhotoGPT** | AIポートレートプラットフォーム - プロフェッショナルな写真を生成 |

---

## 技術スタック

| カテゴリ | 技術 | バージョン |
|----------|------|------------|
| フレームワーク | Vue | 3.4.21 |
| 言語 | TypeScript | 5.4.5 |
| ビルドツール | Vite | 5.2.8 |
| ルーティング | Vue Router | 4.6.4 |
| 国際化 | Vue I18n | 10.0.0 |
| CSSフレームワーク | Tailwind CSS | 3.4.14 |
| アイコン | Lucide Vue | 0.365.0 |

---

## プロジェクト構造

```
zf-nexus-ai/
├── assets/                    # 静的アセット（ビルド後）
│   └── logo/                  # ロゴ画像
├── dist/                      # ビルド出力ディレクトリ
├── src/
│   ├── assets/                # ソースアセット
│   │   └── logo/              # ロゴ画像
│   ├── components/            # コンポーネント
│   │   ├── Header.vue         # ヘッダー（ナビゲーション）
│   │   ├── Footer.vue         # フッター
│   │   ├── Hero.vue           # ヒーローセクション
│   │   ├── Products.vue       # 製品紹介セクション
│   │   ├── Features.vue       # 特徴セクション
│   │   ├── Testimonials.vue   # 顧客レビュー
│   │   └── EnterpriseLogos.vue # 企業ロゴ表示
│   ├── config/                # 設定ファイル
│   │   └── locale.ts          # ロケール設定
│   ├── locales/               # 多言語リソース
│   │   └── index.ts           # 言語データ（ja/zh/en）
│   ├── router/                # ルーティング
│   │   └── index.ts           # ルーター設定
│   ├── views/                 # ビューコンポーネント
│   │   ├── Home.vue           # ホームページ
│   │   ├── About.vue          # 会社概要ページ
│   │   ├── Help.vue           # ヘルプページ
│   │   └── NotFound.vue       # 404ページ
│   ├── App.vue                # ルートコンポーネント
│   ├── main.ts                # アプリケーションエントリー
│   └── style.css              # グローバルスタイル
├── .gitignore                 # Git無視設定
├── index.html                 # HTMLテンプレート
├── package.json               # プロジェクト設定
├── postcss.config.js          # PostCSS設定
├── tailwind.config.js         # Tailwind設定
├── tsconfig.json              # TypeScript設定
├── tsconfig.node.json         # Node用TS設定
└── vite.config.ts             # Vite設定
```

### コンポーネント責務

| コンポーネント | 責務 |
|---------------|------|
| **Header** | ナビゲーションバー、言語切り替え、製品ドロップダウンメニュー |
| **Footer** | 会社情報、リンク、お問い合わせ先 |
| **Hero** | メインタイトル、CTAボタン、統計データ表示 |
| **Products** | 3製品の詳細紹介、機能一覧 |
| **Features** | サービスの主要特徴展示 |
| **Testimonials** | 顧客の声スライダー |
| **EnterpriseLogos** | 取引先/パートナー企業ロゴ表示 |

---

## 環境構築

### 前提条件

- Node.js >= 20.x
- npm >= 10.x

### インストール手順

```bash
# リポジトリをクローン
git clone <repository-url>
cd zf-nexus-ai

# 依存パッケージをインストール
npm install
```

### 開発サーバー起動

```bash
# 開発モードでサーバーを起動（ポート3200）
npm run dev
```

ブラウザが自動的に `http://localhost:3200` を開きます。

---

## 開発フロー

### コマンド一覧

| コマンド | 説明 |
|----------|------|
| `npm run dev` | 開発サーバーを起動（ホットリロード） |
| `npm run build` | 本番ビルドを実行 |
| `npm run preview` | ビルド結果をプレビュー |

### コーディング規約

1. **TypeScript**: 型安全を確保し、インターフェースを適切に定義
2. **Vue 3**: Composition API のみを使用
3. **Tailwind CSS**: ユーティリティファーストアプローチ
4. **コンポーネント命名**: PascalCase（例: `Header.vue`）
5. **インポート順**: 外部依存 → 内部モジュール → スタイル

---

## ビルドとデプロイ

### 本番ビルド

```bash
npm run build
```

ビルド成果物は `dist/` ディレクトリに出力されます。

### デプロイ

**Cloudflare Pages** を使用した自動デプロイが設定されています。

- ブランチ: `main`
- ビルドコマンド: `npm run build`
- 出力ディレクトリ: `dist`

---

## 多言語対応

### サポート言語

| 言語 | コード | フォールバック |
|------|--------|----------------|
| 日本語 | `ja` | デフォルト |
| 简体中文 | `zh` | あり |
| English | `en` | あり |

### 言語切り替えロジック

1. **URLパス**: `/ja/`, `/zh/`, `/en/` のプレフィックスで言語を判定
2. **LocalStorage**: ユーザーの選択を永続化
3. **ブラウザ設定**: 初期アクセス時にシステム言語を検出

### 翻訳ファイルの追加

`src/locales/index.ts` に新しい言語を追加します：

```typescript
export const messages = {
  ja: { /* 日本語データ */ },
  zh: { /* 中国語データ */ },
  en: { /* 英語データ */ }
}
```

---

## ルーティング設計

### ルート構成

| パス | コンポーネント | 説明 |
|------|---------------|------|
| `/` | Home | 日本語ホームページ（デフォルト） |
| `/ja/` | Home | 日本語ホームページ |
| `/zh/` | Home | 中国語ホームページ |
| `/en/` | Home | 英語ホームページ |
| `/about` | Home → リダイレクト | `/ja/about` にリダイレクト |
| `/ja/about` | About | 日本語会社概要 |
| `/zh/about` | About | 中国語会社概要 |
| `/en/about` | About | 英語会社概要 |
| `/ja/help` | Help | 日本語ヘルプ |
| `/zh/help` | Help | 中国語ヘルプ |
| `/en/help` | Help | 英語ヘルプ |
| `*` | NotFound | 404エラーページ |

### アンカーリンク

ホームページ内のセクションジャンプをサポート：

- `#products` - 製品セクション
- `#features` - 特徴セクション
- `#contact` - お問い合わせ（フッター）

---

## UI/UX設計

### デザインテーマ

**日本風ミニマルデザイン**

- **配色**: 和紙色（`#fdfcfb`）をベースに、柔らかい青（`#0ea5e9`）と珊瑚色（`#f97316`）をアクセント
- **フォント**: Noto Sans JP（日本語）、Noto Sans SC（中国語）、Inter（英語）
- **パターン**: 青海波模様のサブテキスト、和紙質感の背景

### カスタムCSSクラス

| クラス名 | 効果 |
|----------|------|
| `gradient-bg-japanese` | 柔らかい多色グラデーション背景 |
| `card-hover-japanese` | ホバー時の浮き上がり効果 |
| `text-gradient-japanese` | テキストグラデーション（青→紫→オレンジ） |
| `btn-gradient-japanese` | 青グラデーションボタン |
| `btn-warm` | 珊瑚色グラデーションボタン |
| `animate-float-japanese` | 浮遊アニメーション |
| `animate-slide-up` | 上からスライドイン |
| `backdrop-blur-japanese` | ぼかし効果の背景 |

### レスポンシブ対応

- **スマートフォン**: モバイルメニュー、縦一列レイアウト
- **タブレット**: 一部要素のスタック解除
- **デスクトップ**: フルレイアウト、ドロップダウンメニュー

---

## ブラウザサポート

| ブラウザ | バージョン |
|----------|------------|
| Chrome | >= 100 |
| Firefox | >= 100 |
| Safari | >= 15 |
| Edge | >= 100 |

---

## ライセンス

© 2026 Nexus AI. All rights reserved.

---

## 開発者向け情報

### デバッグツール

Vue DevTools を推奨します。開発モードでは Vue 3 の公式デバッガーが有効になっています。

### 環境変数

必要に応じて `.env` ファイルを作成してください：

```env
VITE_APP_TITLE=霊枢智汇
VITE_APP_API_URL=https://api.nexus-ai.jp
```

### カスタマイズポイント

1. **カラーテーマ**: `tailwind.config.js` の `theme.extend.colors` を変更
2. **言語**: `src/locales/index.ts` に翻訳データを追加
3. **ルート**: `src/router/index.ts` でルーティングを調整
4. **スタイル**: `src/style.css` にグローバルスタイルを追加

---

**最終更新**: 2026年6月