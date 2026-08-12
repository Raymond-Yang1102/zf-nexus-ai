# ZingStone Brand Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the existing ZIFU website into a trilingual ZingStone brand site for VideoCompress, VideoBee, and AudioCut while preserving the current visual language and responsive behavior.

**Architecture:** Keep the Vue 3 single-page application and its existing visual primitives. Move product identity into a typed shared product catalog, keep translated copy in `src/locales/index.ts`, and generate Japanese, English, and Traditional Chinese routes from one route definition. Use one parameterized information-page component for Contact, Privacy, and Terms so their page chrome and locale lookup remain consistent.

**Tech Stack:** Vue 3.4, TypeScript 5.4, Vue Router 4.6, Vue I18n 10, Vite 5, Tailwind CSS 3, Lucide Vue.

## Global Constraints

- Preserve the current site's visual style, Vue/Vite stack, responsive layout behavior, and existing company Logo graphic asset.
- Use `ZingStone` as the public brand name and `ZingStone HongKong Limited` wherever a legal company name is required.
- Support Japanese at unprefixed routes, English at `/en/`, and Traditional Chinese at `/zh-Hant/`.
- Product order is always VideoCompress, VideoBee, AudioCut.
- Copy only the provided SVG files unchanged: `logo.svg` for VideoCompress, `logo 2.svg` for VideoBee, and `logo 3.svg` for AudioCut.
- All three applications are desktop products whose media files are processed locally with FFmpeg; do not describe upload processing, web processing, cloud processing, or secure transfer.
- Do not add download URLs, contact forms, telephone numbers, analytics, external product links, invented testimonials, customer logos, performance claims, or product screenshots.
- Contact shows the verified full Hong Kong address and a non-interactive email-update status.
- Privacy and Terms must distinguish confirmed facts from material that requires legal and operational review before public launch.
- The repository has no automated test runner. Each task uses `npm run build`, route checks, and local browser checks as its executable acceptance test.

---

## File Structure

| File | Responsibility |
| --- | --- |
| `src/assets/logo/videocompress.svg` | Unchanged VideoCompress product icon copied from the supplied `logo.svg`. |
| `src/assets/logo/videobee.svg` | Unchanged VideoBee product icon copied from the supplied `logo 2.svg`. |
| `src/assets/logo/audiocut.svg` | Unchanged AudioCut product icon copied from the supplied `logo 3.svg`. |
| `src/config/products.ts` | Typed, ordered product IDs, imported product icon URLs, anchor IDs, and card color classes used by Home and Products. |
| `src/config/locale.ts` | Canonical locale list and browser-language normalization, including Traditional Chinese. |
| `src/composables/useLocalizedPath.ts` | Pure helpers that convert between the canonical Japanese route and its localized equivalents while preserving search and hash. |
| `src/locales/index.ts` | The Japanese, English, and Traditional Chinese ZingStone copy, SEO metadata, company facts, product content, technology content, and information-page content. |
| `src/router/index.ts` | Unprefixed Japanese routes plus English and Traditional Chinese localized routes, including the information-page prop. |
| `src/App.vue` | Syncs locale to localized routes, updates document metadata, and delegates path conversion to `useLocalizedPath`. |
| `src/components/Header.vue` | Existing company Logo graphic, ZingStone wordmark, locale picker, desktop/mobile navigation including Contact. |
| `src/components/Footer.vue` | Legal company identity, full address, Contact/Privacy/Terms navigation, and no old telephone field. |
| `src/views/Home.vue` | ZingStone hero, company/product/technology/contact cards, and product cards without old partner or news sections. |
| `src/views/Products.vue` | Data-driven, anchor-addressable three-product overview with local-only desktop product copy and no external CTA. |
| `src/views/Company.vue` | ZingStone company profile, product-focused business information, full verified address, and incorporation date. |
| `src/views/Technology.vue` | Product-relevant local FFmpeg, conversion, compression, editing, batch, and export information with existing visual patterns. |
| `src/views/InformationPage.vue` | Shared Contact, Privacy, and Terms page shell selected by typed route prop. |
| `index.html` | Safe neutral fallback metadata and favicon reference that match ZingStone before Vue updates the document head. |

## Task 1: Establish the product catalog and localized ZingStone content

**Files:**
- Create: `src/assets/logo/videocompress.svg`
- Create: `src/assets/logo/videobee.svg`
- Create: `src/assets/logo/audiocut.svg`
- Create: `src/config/products.ts`
- Modify: `src/locales/index.ts`
- Modify: `src/config/locale.ts`
- Modify: `index.html`

**Interfaces:**
- Produces `ProductId`, `PRODUCT_IDS`, and `PRODUCT_PRESENTATION` from `src/config/products.ts`.
- Produces `Locale = 'ja' | 'en' | 'zh-Hant'` and `SUPPORTED_LOCALES` from `src/locales/index.ts` and `src/config/locale.ts`.
- Produces locale message shapes consumed by Home, Products, Company, Technology, Header, Footer, and InformationPage.

- [ ] **Step 1: Copy the supplied product SVGs without editing their contents**

Run:

```bash
cp /Users/dingwenbo/Desktop/logo.svg src/assets/logo/videocompress.svg
cp '/Users/dingwenbo/Desktop/logo 2.svg' src/assets/logo/videobee.svg
cp '/Users/dingwenbo/Desktop/logo 3.svg' src/assets/logo/audiocut.svg
shasum /Users/dingwenbo/Desktop/logo.svg src/assets/logo/videocompress.svg
shasum '/Users/dingwenbo/Desktop/logo 2.svg' src/assets/logo/videobee.svg
shasum '/Users/dingwenbo/Desktop/logo 3.svg' src/assets/logo/audiocut.svg
```

Expected: each source/destination checksum pair is identical.

- [ ] **Step 2: Create the shared catalog used by both product surfaces**

Create `src/config/products.ts`:

```ts
import videoCompressIcon from '@/assets/logo/videocompress.svg'
import videoBeeIcon from '@/assets/logo/videobee.svg'
import audioCutIcon from '@/assets/logo/audiocut.svg'

export const PRODUCT_IDS = ['videocompress', 'videobee', 'audiocut'] as const
export type ProductId = (typeof PRODUCT_IDS)[number]

export const PRODUCT_PRESENTATION: Record<ProductId, {
  anchor: string
  icon: string
  backgroundClass: string
}> = {
  videocompress: {
    anchor: 'videocompress',
    icon: videoCompressIcon,
    backgroundClass: 'from-blue-100 to-blue-200'
  },
  videobee: {
    anchor: 'videobee',
    icon: videoBeeIcon,
    backgroundClass: 'from-amber-100 to-amber-200'
  },
  audiocut: {
    anchor: 'audiocut',
    icon: audioCutIcon,
    backgroundClass: 'from-violet-100 to-violet-200'
  }
}
```

- [ ] **Step 3: Replace old company and AI-product message data with the confirmed ZingStone content**

Rewrite `src/locales/index.ts` rather than editing individual ZIFU strings. Define the three locales with the same property structure and use exact confirmed facts:

```ts
export type Locale = 'ja' | 'en' | 'zh-Hant'

export const messages = {
  ja: { /* Japanese copy with the full structure below */ },
  en: { /* English copy with the same structure */ },
  'zh-Hant': { /* Traditional Chinese copy with the same structure */ }
} as const
```

Every locale must include:

```ts
{
  meta: { title: string, description: string, keywords: string },
  header: {
    nav: { home: string, company: string, products: string, technology: string, contact: string },
    language: { ja: string, en: string, 'zh-Hant': string }
  },
  footer: {
    legalName: 'ZingStone HongKong Limited',
    address: 'UNIT 1002, 10/F PERFECT COMM BLDG, 20 AUSTIN AVENUE, TSIM SHA TSUI, HONG KONG',
    copyright: string,
    legalLinks: { contact: string, privacy: string, terms: string }
  },
  home: {
    hero: { title: 'ZingStone', subtitle: string },
    featureCards: Array<{ id: 'company' | 'products' | 'technology' | 'contact', title: string, subtitle: string }>,
    productsTitle: string,
    products: Record<ProductId, { name: string, description: string }>
  },
  products: {
    overview: { title: string, description: string },
    desktopStatus: string,
    featureLabel: string,
    useCaseLabel: string,
    items: Record<ProductId, {
      title: string,
      subtitle: string,
      description: string,
      features: string[],
      useCases: string[]
    }>
  },
  company: { introduction: string[], values: Array<{ title: string, description: string }>, business: Array<{ title: string, description: string }>, profile: Array<{ label: string, value: string }> },
  technology: { overview: string[], capabilities: Array<{ title: string, description: string, product: string }>, workflow: string[], output: string[] },
  information: {
    contact: { title: string, introduction: string, addressLabel: string, address: string, emailLabel: string, emailStatus: string },
    privacy: { title: string, sections: Array<{ title: string, paragraphs: string[] }> },
    terms: { title: string, sections: Array<{ title: string, paragraphs: string[] }> }
  }
}
```

Use the confirmed content in all three translations: desktop applications; local FFmpeg processing; VideoCompress compression/conversion/editing; VideoBee conversion/compression/batch/parameters/export; AudioCut trimming/extraction/conversion/compression/speed/merge/batch; legal company name; full Hong Kong address; incorporation date of 6 March 2026; and an email status that communicates an update is forthcoming without exposing a `mailto:` target. Keep unverified privacy and terms details explicitly described as requiring confirmation before public release.

- [ ] **Step 4: Add Traditional Chinese to locale detection without changing Japanese default behavior**

Set these exports in `src/config/locale.ts`:

```ts
export const DEFAULT_LOCALE: Locale = 'ja'
export const SUPPORTED_LOCALES: Locale[] = ['ja', 'en', 'zh-Hant']

export function normalizeBrowserLocale(browserLocale: string): Locale {
  const normalized = browserLocale.toLowerCase()
  if (normalized.startsWith('zh-hant') || normalized.startsWith('zh-tw') || normalized.startsWith('zh-hk')) {
    return 'zh-Hant'
  }
  if (normalized.startsWith('en')) return 'en'
  return DEFAULT_LOCALE
}
```

Make `detectSystemLocale()` call `normalizeBrowserLocale(navigator.language)`.

- [ ] **Step 5: Make the non-JavaScript fallback head neutral and accurate**

Update `index.html` to use the existing company favicon path, title `ZingStone - Desktop Media Tools for Creation and Delivery`, and a concise English fallback description referring only to desktop media tools. Remove all Nexus/AI/NoteGPT/VisualGPT/DeCopy metadata.

- [ ] **Step 6: Run the content and type acceptance check**

Run:

```bash
rg -n -i 'ZIFU|ZINGDECK|Nexus AI|NoteGPT|Decopy AI|VisualGPT|PhotoGPT|Osaka|大阪' src/locales/index.ts index.html src/config/locale.ts
npm run build
```

Expected: the search returns no matches in the modified files and `npm run build` succeeds.

- [ ] **Step 7: Commit the independently buildable catalog and content baseline**

```bash
git add src/assets/logo/videocompress.svg src/assets/logo/videobee.svg src/assets/logo/audiocut.svg src/config/products.ts src/config/locale.ts src/locales/index.ts index.html
git commit -m "feat: add ZingStone product catalog and translations"
```

### Task 2: Implement canonical trilingual routing and language-preserving navigation helpers

**Files:**
- Create: `src/composables/useLocalizedPath.ts`
- Modify: `src/router/index.ts`
- Modify: `src/App.vue`

**Interfaces:**
- Consumes `Locale`, `DEFAULT_LOCALE`, and `SUPPORTED_LOCALES` from Task 1.
- Produces `localizedPath(fullPath: string, targetLocale: Locale): string` and `localeFromPath(path: string): Locale`.
- Produces routes with Japanese at canonical unprefixed paths and English/Traditional Chinese at prefixed paths.

- [ ] **Step 1: Add pure path helpers that preserve query strings and anchors**

Create `src/composables/useLocalizedPath.ts`:

```ts
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/config/locale'
import type { Locale } from '@/locales'

const localizedPrefixes = SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE)
const localizedPrefixPattern = new RegExp(`^/(?:${localizedPrefixes.join('|')})(?=/|$)`)

export function localeFromPath(path: string): Locale {
  const matched = localizedPrefixes.find((locale) => path === `/${locale}` || path.startsWith(`/${locale}/`))
  return matched ?? DEFAULT_LOCALE
}

export function localizedPath(fullPath: string, targetLocale: Locale): string {
  const [pathAndQuery, hash = ''] = fullPath.split('#', 2)
  const canonicalPath = pathAndQuery.replace(localizedPrefixPattern, '') || '/'
  const translatedPath = targetLocale === DEFAULT_LOCALE
    ? canonicalPath
    : `/${targetLocale}${canonicalPath === '/' ? '/' : canonicalPath}`

  return hash ? `${translatedPath}#${hash}` : translatedPath
}
```

- [ ] **Step 2: Replace the old mixed `/ja` and localized route construction**

In `src/router/index.ts`, define a base record for Home, Company, Products, Technology, Contact, Privacy, and Terms. For each record, register the canonical Japanese route and localized `/en` and `/zh-Hant` equivalents. Pass a typed `page` prop to `InformationPage` for Contact, Privacy, and Terms. Retain the NotFound route as the final record.

Use this route shape for every non-home page:

```ts
{
  path: '/contact',
  name: 'Contact',
  component: () => import('@/views/InformationPage.vue'),
  props: { page: 'contact' }
},
{
  path: '/:lang(en|zh-Hant)/contact',
  name: 'ContactLocalized',
  component: () => import('@/views/InformationPage.vue'),
  props: (route) => ({ page: 'contact', lang: route.params.lang })
}
```

Register `/` for Japanese Home and `/:lang(en|zh-Hant)/` for localized Home. Remove the old `/ja/*` redirects and the `/team` redirect.

- [ ] **Step 3: Make App locale changes use the shared canonical path conversion**

Replace the `changeLocale()` string replacement logic and the hard-coded `/(ja|en)` extractor in `src/App.vue` with:

```ts
import { localeFromPath, localizedPath } from './composables/useLocalizedPath'

const changeLocale = (lang: string) => {
  const targetLocale = lang as Locale
  locale.value = targetLocale
  localStorage.setItem(LOCALE_STORAGE_KEY, targetLocale)
  router.push(localizedPath(route.fullPath, targetLocale))
}

const syncLocaleFromRoute = () => {
  const nextLocale = localeFromPath(route.path)
  if (locale.value !== nextLocale) locale.value = nextLocale
  localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
}
```

Import `Locale` from `@/locales`. Keep metadata update watchers unchanged so the new locale’s `meta` content updates after every route or language change.

- [ ] **Step 4: Run route and build acceptance checks**

Run:

```bash
npm run build
npm run dev -- --host 127.0.0.1
```

In a browser, directly open these six representative URLs and verify that none renders NotFound: `/`, `/en/products#videobee`, `/zh-Hant/products#audiocut`, `/company`, `/en/contact`, `/zh-Hant/terms`.

- [ ] **Step 5: Commit routing as a separate reviewable change**

```bash
git add src/composables/useLocalizedPath.ts src/router/index.ts src/App.vue
git commit -m "feat: add ZingStone localized routes"
```

### Task 3: Update shared navigation and footer identity

**Files:**
- Modify: `src/components/Header.vue`
- Modify: `src/components/Footer.vue`

**Interfaces:**
- Consumes `localizedPath()` from Task 2 and header/footer message keys from Task 1.
- Produces language-aware navigation to Home, Company, Products, Technology, Contact, Privacy, and Terms.

- [ ] **Step 1: Replace Header’s hard-coded brand and legacy navigation**

In `src/components/Header.vue`:

- Keep the import and rendered `<img>` for `@/assets/logo/logo.png`; do not alter that asset.
- Change the image `alt` to `ZingStone` and its adjacent visual text from `ZIFU` to `ZingStone`.
- Render exactly five primary links: Home, Company, Products, Technology, Contact.
- Remove the Team navigation function and its remaining mobile-menu link.
- Replace individual locale-dependent path construction functions with `router.push(localizedPath('/company', currentLocale))` equivalents.
- Keep the existing desktop/mobile layout, scroll behavior, language picker, and color classes.

- [ ] **Step 2: Replace Footer’s old Japanese company data and add legal navigation**

In `src/components/Footer.vue`:

- Retain the company Logo graphic but set `alt="ZingStone"`.
- Render `footer.legalName`, the full `footer.address`, and `footer.copyright`.
- Remove the telephone paragraph entirely.
- Render visible links to Contact, Privacy, and Terms using `localizedPath('/contact', locale)`, `localizedPath('/privacy', locale)`, and `localizedPath('/terms', locale)`.
- Do not render an email link because the only approved state is an update-status label on Contact.

- [ ] **Step 3: Build and exercise shared navigation**

Run:

```bash
npm run build
```

In the local browser preview, for each locale (`/`, `/en/`, `/zh-Hant/`), use the desktop navigation to visit Contact and use the footer to visit Privacy and Terms. Confirm the wordmark is ZingStone, the original company logo graphic is visually unchanged, no telephone number appears, and all links remain in the selected locale.

- [ ] **Step 4: Commit shared navigation and footer changes**

```bash
git add src/components/Header.vue src/components/Footer.vue
git commit -m "feat: update ZingStone navigation and footer"
```

### Task 4: Rebuild Home and Products around the shared desktop product catalog

**Files:**
- Modify: `src/views/Home.vue`
- Modify: `src/views/Products.vue`

**Interfaces:**
- Consumes `PRODUCT_IDS` and `PRODUCT_PRESENTATION` from Task 1.
- Consumes `localizedPath()` from Task 2.
- Consumes `home.products` and `products.items` message records from Task 1.
- Produces Home card links to `/products#videocompress`, `/products#videobee`, and `/products#audiocut` in the active locale.

- [ ] **Step 1: Remove legacy partner/news behavior and bind the Home product cards to catalog data**

In `src/views/Home.vue`:

- Remove partner-logo imports, `baseLogos`, animation state, `onMounted`/`onUnmounted` hooks, and the partner/news sections.
- Replace the hard-coded four-card object with `homeData.featureCards`; map its IDs to Company, Products, Technology, and Contact canonical routes using `localizedPath()`.
- Import `PRODUCT_IDS` and `PRODUCT_PRESENTATION`; render products by `v-for="productId in PRODUCT_IDS"`.
- Use `homeData.products[productId]` for name and description and `PRODUCT_PRESENTATION[productId]` for icon/background.
- Implement product navigation as `router.push(localizedPath(`/products#${PRODUCT_PRESENTATION[productId].anchor}`, activeLocale))`.
- Keep existing hero/card spacing, hover affordances, and responsive grid behavior.

- [ ] **Step 2: Replace the three copy-pasted AI product sections with one product loop**

In `src/views/Products.vue`:

- Remove the NoteGPT, Decopy AI, VisualGPT image imports and the external-link icon/button.
- Render the top overview cards using `PRODUCT_IDS`, `PRODUCT_PRESENTATION`, and `productsData.items`.
- Render each full section with `v-for="(productId, index) in PRODUCT_IDS"`, set `:id="PRODUCT_PRESENTATION[productId].anchor"`, and alternate white/gray backgrounds based on `index`.
- Use the supplied SVG in a prominent icon panel as the media area. Do not reuse old screenshots or generate a substitute interface image.
- Render title, subtitle, description, features, and use cases from the localized `productsData.items[productId]` record.
- Replace the download/external-link control with a non-clickable desktop-status element from `productsData.desktopStatus`; this communicates that download information will be announced without creating an invalid URL.
- Keep existing check/user icon list affordances and responsive `lg:flex-row` layout.

- [ ] **Step 3: Build and test anchors in every language**

Run:

```bash
npm run build
```

In the browser, open `/products#videocompress`, `/en/products#videobee`, and `/zh-Hant/products#audiocut`. Confirm the corresponding section is reached, the three products appear in the fixed order, each provided product Logo appears with its assigned product, and the page contains no external download URL.

- [ ] **Step 4: Commit product-surface changes**

```bash
git add src/views/Home.vue src/views/Products.vue
git commit -m "feat: present ZingStone desktop products"
```

### Task 5: Replace legacy company and technology content and add information pages

**Files:**
- Modify: `src/views/Company.vue`
- Modify: `src/views/Technology.vue`
- Create: `src/views/InformationPage.vue`

**Interfaces:**
- Consumes company, technology, and information-page message data from Task 1.
- `InformationPage.vue` accepts `page: 'contact' | 'privacy' | 'terms'` and `currentLocale: string` props from Task 2 router records and `App.vue`.

- [ ] **Step 1: Simplify Company to verified company facts and product-focused business copy**

In `src/views/Company.vue`:

- Replace CEO-message and signature markup with a localized introduction section using `companyData.introduction`.
- Keep the existing card-grid treatment for `companyData.values` and `companyData.business`.
- Keep the profile table but source it from `companyData.profile`; include legal name, full Hong Kong address, incorporation date, and desktop media software business focus.
- Remove all old CEO, director, Japanese subsidiary, parent-company, Japan-market, and AI content references.

- [ ] **Step 2: Reuse Technology’s current layout for local desktop media-processing content**

In `src/views/Technology.vue`:

- Retain the centered overview, three capability cards, and two-column sections.
- Replace AI-specific icon imports with `HardDrive`, `SlidersHorizontal`, and `Files` from Lucide to represent local processing, output control, and batch workflows.
- Bind the cards to `technologyData.capabilities`.
- Remove old research/infrastructure image assets and render the existing gradient panels with the relevant Lucide icon instead; this preserves visual weight without reusing AI-specific photographs.
- Bind the two-column prose/list sections to `technologyData.workflow` and `technologyData.output`.
- Ensure the translated content only claims local FFmpeg processing, format conversion, compression optimization, editing, batch tasks, parameter controls, and export preparation.

- [ ] **Step 3: Create the reusable information-page component**

Create `src/views/InformationPage.vue` with this prop and selection logic:

```ts
type InformationPageId = 'contact' | 'privacy' | 'terms'

const props = defineProps<{
  currentLocale: string
  page: InformationPageId
}>()

const informationData = computed(() => messages[effectiveLocale.value].information[props.page])
```

Render Header and Footer around a `main` with `pt-16`. For `contact`, render the heading, introduction, address label/value, email label, and plain email-status text; do not use an anchor tag or form element. For `privacy` and `terms`, render the heading and each localized section title plus paragraphs. Use the existing white/gray sections, rounded cards, text scale, and responsive containers.

- [ ] **Step 4: Build and validate content-boundary behavior**

Run:

```bash
npm run build
rg -n -i 'ZIFU|ZINGDECK|Nexus AI|NoteGPT|Decopy AI|VisualGPT|PhotoGPT|Osaka|大阪|mailto:|https?://' src/views/Company.vue src/views/Technology.vue src/views/InformationPage.vue
```

Expected: the search produces no matches. In local preview, check `/company`, `/technology`, `/contact`, `/privacy`, `/terms` in each locale. Confirm Contact shows the full Hong Kong address and only a non-interactive email update status; Privacy mentions local processing as confirmed context and Terms does not assert unreviewed licensing, payment, or liability terms.

- [ ] **Step 5: Commit company, technology, and information pages**

```bash
git add src/views/Company.vue src/views/Technology.vue src/views/InformationPage.vue
git commit -m "feat: add ZingStone company and information pages"
```

### Task 6: Run production and responsive acceptance verification

**Files:**
- Modify only if verification exposes a defect in the files listed in Tasks 1-5.

**Interfaces:**
- Consumes the complete trilingual ZingStone application from Tasks 1-5.
- Produces evidence that code builds and required navigation, route, language, asset, and responsive flows work locally.

- [ ] **Step 1: Check repository hygiene and production build**

Run:

```bash
git diff --check
npm run build
git status --short
```

Expected: no whitespace errors; Vite/TypeScript production build succeeds; only intended implementation files are modified or committed. Do not stage `.superpowers/` visual-companion artifacts.

- [ ] **Step 2: Perform route, SEO, and link acceptance checks in the local preview**

Start the preview:

```bash
npm run dev -- --host 127.0.0.1
```

Check these paths in the browser: `/`, `/products#videocompress`, `/company`, `/technology`, `/contact`, `/privacy`, `/terms`, `/en/`, `/en/products#videobee`, `/en/contact`, `/zh-Hant/`, `/zh-Hant/products#audiocut`, `/zh-Hant/privacy`.

For one page in each language, confirm `document.documentElement.lang`, document title, meta description, and meta keywords match the active locale. Change language on `/en/products#videobee` and verify the browser reaches `/zh-Hant/products#videobee`, then change to Japanese and verify `/products#videobee`.

- [ ] **Step 3: Perform desktop and narrow-screen visual checks**

At desktop width, verify the existing header spacing, company Logo graphic, ZingStone wordmark, product-card order, icon rendering, footer legal links, and full address readability. At a 390 px viewport, verify the mobile menu opens, includes Contact, excludes Team, language options include Traditional Chinese, product cards stack without horizontal overflow, and the full address wraps inside its card.

- [ ] **Step 4: Fix only defects discovered in the specified acceptance checks and rerun affected checks**

For each discovered defect, change the smallest relevant file from Tasks 1-5, rerun `npm run build`, and repeat the exact affected browser check. Do not alter visual styles, routes, claims, or integration scope beyond the confirmed specification.

- [ ] **Step 5: Commit verified fixes if Task 6 changed tracked implementation files**

```bash
git add src
git add index.html
git commit -m "fix: verify ZingStone site routes and layout"
```

Run this commit only when `git status --short` lists tracked implementation changes from Step 4. If Step 4 finds no defect, do not create an empty commit.
