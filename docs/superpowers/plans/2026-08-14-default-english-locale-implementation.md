# Default English Locale Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make English the canonical default language for the ZingStone website while preserving explicit Japanese and Traditional Chinese routes and language switching.

**Architecture:** Keep one locale contract in `src/config/locale.ts`: English is the default, while Japanese and Traditional Chinese are prefixed locales. Derive router prefixes and component fallbacks from that contract, and cover the pure locale/path behavior with Vitest before changing production code.

**Tech Stack:** Vue 3, Vue Router 4, Vue I18n 10, TypeScript 5, Vite 5, Vitest 3.

## Global Constraints

- English uses `/`, `/products`, `/company`, and the other unprefixed canonical routes.
- Japanese uses `/ja/` and `/ja/<page>`.
- Traditional Chinese continues to use `/zh-Hant/` and `/zh-Hant/<page>`.
- Language switching preserves the current page, query string, and hash.
- Do not keep duplicate `/en/` routes or add automatic redirects.
- Preserve the existing page layout, translated copy, product content, and language-menu order.
- Invalid locale values fall back to English; unknown URL prefixes continue to the existing 404 route.
- Follow Conventional Commits and work on the current `zingstone` branch.

## File Structure

| File | Responsibility |
| --- | --- |
| `package.json` | Adds the repeatable `npm test` command and Vitest development dependency. |
| `package-lock.json` | Locks the Vitest dependency graph. |
| `src/config/locale.ts` | Owns the default locale, supported-locale validation, browser normalization, and component fallback helper. |
| `src/config/locale.test.ts` | Verifies the locale contract, saved preference handling, and English fallback. |
| `src/composables/useLocalizedPath.ts` | Converts between canonical English URLs and prefixed Japanese/Traditional Chinese URLs. |
| `src/composables/useLocalizedPath.test.ts` | Verifies path parsing and query/hash-preserving language changes. |
| `src/router/index.ts` | Generates localized route patterns from the shared locale contract. |
| `src/router/index.test.ts` | Verifies English is unprefixed and `/ja`/`/zh-Hant` are the only localized route families. |
| `src/components/Header.vue`, `src/components/Footer.vue` | Use the shared fallback helper instead of a hard-coded Japanese fallback. |
| `src/views/Home.vue`, `src/views/Products.vue`, `src/views/Company.vue`, `src/views/Technology.vue`, `src/views/Team.vue`, `src/views/InformationPage.vue` | Use the shared fallback helper for locale-indexed content. |
| `index.html` | Declares English as the static pre-mount document language. |
| `CLAUDE.md` | Updates the project-wide internationalization rule to match the approved English default. |

---

### Task 1: Locale Contract and Canonical Path Conversion

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `src/config/locale.ts`
- Create: `src/config/locale.test.ts`
- Test: `src/composables/useLocalizedPath.test.ts`
- Modify: `src/composables/useLocalizedPath.ts` only if the tests reveal a defect beyond changing the shared default

**Interfaces:**
- Produces: `DEFAULT_LOCALE: Locale`, fixed to `'en'`.
- Produces: `isSupportedLocale(locale: string): locale is Locale`.
- Produces: `resolveSupportedLocale(locale: string): Locale`.
- Preserves: `localeFromPath(path: string): Locale` and `localizedPath(fullPath: string, targetLocale: Locale): string`.

- [ ] **Step 1: Install the test runner and add the test command**

Run:

```bash
npm install --save-dev vitest@^3.2.4
```

Add this script to `package.json`:

```json
"test": "vitest run"
```

- [ ] **Step 2: Write failing locale-contract tests**

Create `src/config/locale.test.ts`:

```ts
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  normalizeBrowserLocale,
  resolveInitialLocale,
  resolveSupportedLocale
} from './locale'

afterEach(() => vi.unstubAllGlobals())

describe('locale contract', () => {
  it('uses English as the default and invalid-locale fallback', () => {
    expect(DEFAULT_LOCALE).toBe('en')
    expect(resolveSupportedLocale('unsupported')).toBe('en')
    expect(resolveSupportedLocale('ja')).toBe('ja')
  })

  it('normalizes unmatched browser languages to English', () => {
    expect(normalizeBrowserLocale('fr-FR')).toBe('en')
    expect(normalizeBrowserLocale('zh-TW')).toBe('zh-Hant')
  })

  it('preserves a previously saved supported locale', () => {
    const setItem = vi.fn()
    vi.stubGlobal('localStorage', {
      getItem: vi.fn((key: string) => key === LOCALE_STORAGE_KEY ? 'ja' : null),
      setItem
    })
    vi.stubGlobal('navigator', { language: 'fr-FR' })

    expect(resolveInitialLocale()).toBe('ja')
    expect(setItem).not.toHaveBeenCalled()
  })

  it('stores English when no supported preference exists', () => {
    const setItem = vi.fn()
    vi.stubGlobal('localStorage', { getItem: vi.fn(() => null), setItem })
    vi.stubGlobal('navigator', { language: 'fr-FR' })

    expect(resolveInitialLocale()).toBe('en')
    expect(setItem).toHaveBeenCalledWith(LOCALE_STORAGE_KEY, 'en')
  })
})
```

- [ ] **Step 3: Write failing canonical-path tests**

Create `src/composables/useLocalizedPath.test.ts`:

```ts
import { describe, expect, it } from 'vitest'
import { localeFromPath, localizedPath } from './useLocalizedPath'

describe('localized paths', () => {
  it.each([
    ['/', 'en'],
    ['/products', 'en'],
    ['/ja/products', 'ja'],
    ['/zh-Hant/products', 'zh-Hant']
  ])('resolves %s as %s', (path, locale) => {
    expect(localeFromPath(path)).toBe(locale)
  })

  it.each([
    ['/products?view=grid#videobee', 'ja', '/ja/products?view=grid#videobee'],
    ['/ja/products?view=grid#videobee', 'en', '/products?view=grid#videobee'],
    ['/zh-Hant/products?view=grid#videobee', 'en', '/products?view=grid#videobee'],
    ['/products?view=grid#videobee', 'zh-Hant', '/zh-Hant/products?view=grid#videobee']
  ])('converts %s to %s', (path, locale, expected) => {
    expect(localizedPath(path, locale as 'ja' | 'en' | 'zh-Hant')).toBe(expected)
  })
})
```

- [ ] **Step 4: Run the tests and verify the required behavior is red**

Run:

```bash
npm test -- src/config/locale.test.ts src/composables/useLocalizedPath.test.ts
```

Expected: failures show the current default is `ja`, unmatched browser languages return `ja`, and canonical path conversion still treats Japanese as unprefixed.

- [ ] **Step 5: Implement the minimal shared locale contract**

Update `src/config/locale.ts` to:

```ts
import type { Locale } from '@/locales'

export const LOCALE_STORAGE_KEY = 'locale'
export const DEFAULT_LOCALE: Locale = 'en'
export const SUPPORTED_LOCALES: Locale[] = ['ja', 'en', 'zh-Hant']

export function isSupportedLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale)
}

export function resolveSupportedLocale(locale: string): Locale {
  return isSupportedLocale(locale) ? locale : DEFAULT_LOCALE
}

export function normalizeBrowserLocale(browserLocale: string): Locale {
  const normalized = browserLocale.toLowerCase()
  if (normalized.startsWith('zh-hant') || normalized.startsWith('zh-tw') || normalized.startsWith('zh-hk')) return 'zh-Hant'
  if (normalized.startsWith('en')) return 'en'
  return DEFAULT_LOCALE
}

export function detectSystemLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE
  return normalizeBrowserLocale(navigator.language)
}

export function resolveInitialLocale(): Locale {
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY)
  if (saved !== null && isSupportedLocale(saved)) return saved
  const systemLocale = detectSystemLocale()
  localStorage.setItem(LOCALE_STORAGE_KEY, systemLocale)
  return systemLocale
}
```

`src/composables/useLocalizedPath.ts` already derives its prefixed locales from `DEFAULT_LOCALE`; change it only if a failing assertion identifies an additional bug.

- [ ] **Step 6: Run the focused tests and verify green**

Run:

```bash
npm test -- src/config/locale.test.ts src/composables/useLocalizedPath.test.ts
```

Expected: all locale and canonical-path tests pass.

- [ ] **Step 7: Commit the locale contract**

```bash
git add package.json package-lock.json src/config/locale.ts src/config/locale.test.ts src/composables/useLocalizedPath.ts src/composables/useLocalizedPath.test.ts
git commit -m "feat(i18n): make English the default locale"
```

---

### Task 2: Derived Router Prefixes and Shared Component Fallbacks

**Files:**
- Create: `src/router/index.test.ts`
- Modify: `src/router/index.ts`
- Modify: `src/components/Header.vue`
- Modify: `src/components/Footer.vue`
- Modify: `src/views/Home.vue`
- Modify: `src/views/Products.vue`
- Modify: `src/views/Company.vue`
- Modify: `src/views/Technology.vue`
- Modify: `src/views/Team.vue`
- Modify: `src/views/InformationPage.vue`

**Interfaces:**
- Consumes: `DEFAULT_LOCALE`, `SUPPORTED_LOCALES`, and `resolveSupportedLocale(locale: string): Locale` from `src/config/locale.ts`.
- Produces: localized Vue Router records whose pattern is `/:lang(ja|zh-Hant)`.

- [ ] **Step 1: Write the failing router-contract test**

Create `src/router/index.test.ts`:

```ts
import { describe, expect, it, vi } from 'vitest'

vi.mock('vue-router', () => ({
  createWebHistory: () => ({}),
  createRouter: ({ routes }: { routes: Array<{ path: string }> }) => ({
    getRoutes: () => routes
  })
}))

import router from './index'

describe('localized route contract', () => {
  it('uses only Japanese and Traditional Chinese as prefixed route families', () => {
    const localizedPaths = router.getRoutes()
      .map((route) => route.path)
      .filter((path) => path.startsWith('/:lang'))

    expect(localizedPaths.length).toBeGreaterThan(0)
    expect(localizedPaths.every((path) => path.includes('(ja|zh-Hant)'))).toBe(true)
    expect(localizedPaths.some((path) => path.includes('(en|'))).toBe(false)
  })

  it('keeps the English home and products routes unprefixed', () => {
    const paths = router.getRoutes().map((route) => route.path)
    expect(paths).toContain('/')
    expect(paths).toContain('/products')
    expect(paths).toContain('/:lang(ja|zh-Hant)/')
    expect(paths).toContain('/:lang(ja|zh-Hant)/products')
  })
})
```

- [ ] **Step 2: Run the router test and verify red**

Run:

```bash
npm test -- src/router/index.test.ts
```

Expected: failure reports the current `(en|zh-Hant)` route family.

- [ ] **Step 3: Derive the router pattern from the locale contract**

At the top of `src/router/index.ts`, import the shared constants and replace the hard-coded route pattern:

```ts
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/config/locale'

const localized = `(${SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).join('|')})`
```

Keep the existing route definitions, 404 record, history, and scroll behavior unchanged.

- [ ] **Step 4: Replace component-local Japanese fallbacks**

In each listed component or view, import:

```ts
import { resolveSupportedLocale } from '@/config/locale'
```

Replace computed fallbacks such as:

```ts
const activeLocale = computed(() => (locale.value in messages ? locale.value : 'ja') as Locale)
```

with:

```ts
const activeLocale = computed(() => resolveSupportedLocale(locale.value))
```

Apply the same change to variables named `effectiveLocale` and `currentLocale`. Retain `messages` imports wherever the component still indexes translated content or builds the language menu; remove only `type Locale` imports that become unused.

- [ ] **Step 5: Run focused and full tests**

Run:

```bash
npm test -- src/router/index.test.ts
npm test
```

Expected: all tests pass.

- [ ] **Step 6: Verify hard-coded component fallbacks are gone**

Run:

```bash
rg -n "locale\.value in messages.*'ja'|\? locale\.value : 'ja'" src/components src/views
```

Expected: no matches.

- [ ] **Step 7: Commit routing and fallback changes**

```bash
git add src/router/index.ts src/router/index.test.ts src/components/Header.vue src/components/Footer.vue src/views/Home.vue src/views/Products.vue src/views/Company.vue src/views/Technology.vue src/views/Team.vue src/views/InformationPage.vue
git commit -m "refactor(i18n): derive localized routes and fallbacks"
```

---

### Task 3: Static Language Metadata, Project Rules, and Release Verification

**Files:**
- Modify: `index.html`
- Modify: `CLAUDE.md`

**Interfaces:**
- Consumes: the English-default locale and route contract from Tasks 1 and 2.
- Produces: an English pre-mount HTML language declaration and matching project documentation.

- [ ] **Step 1: Update static language metadata and project rules**

Change the opening tag in `index.html` to:

```html
<html lang="en">
```

Change the internationalization section in `CLAUDE.md` to:

```markdown
默认：

英文

支持：

日文

繁体中文
```

- [ ] **Step 2: Run automated tests and the production build**

Run:

```bash
npm test
npm run build
```

Expected: all Vitest tests pass, `vue-tsc` reports no errors, and Vite completes the production build.

- [ ] **Step 3: Start a local preview for browser verification**

Run:

```bash
npm run dev -- --host 127.0.0.1
```

Use the local browser session to verify:

- `/` renders English and sets `document.documentElement.lang` to `en`.
- `/ja/` renders Japanese and sets `document.documentElement.lang` to `ja`.
- `/zh-Hant/` renders Traditional Chinese and sets `document.documentElement.lang` to `zh-Hant`.
- Switching `/products?view=grid#videobee` to Japanese produces `/ja/products?view=grid#videobee`.
- Switching the Japanese URL back to English produces `/products?view=grid#videobee`.
- `/en/` is not a duplicate English home route and reaches the existing 404 behavior.
- English title, description, and keywords are applied on the unprefixed home page.

- [ ] **Step 4: Verify the diff and working tree**

Run:

```bash
git diff --check
git status --short
git diff --stat origin/zingstone...HEAD
```

Expected: no whitespace errors; only approved locale, route, test, dependency, metadata, rule, spec, and plan files are changed or committed.

- [ ] **Step 5: Commit metadata and rule updates**

```bash
git add index.html CLAUDE.md
git commit -m "docs(i18n): align metadata with English default"
```

- [ ] **Step 6: Re-run release verification after the final commit**

Run:

```bash
npm test
npm run build
git status --short --branch
```

Expected: tests and build pass; the working tree is clean and `zingstone` is ahead of `origin/zingstone` only by the intended commits.

- [ ] **Step 7: Push and verify the remote SHA**

Run:

```bash
git push origin zingstone
git fetch origin zingstone
test "$(git rev-parse HEAD)" = "$(git rev-parse origin/zingstone)"
```

Expected: push succeeds and local `HEAD` exactly matches `origin/zingstone`.
