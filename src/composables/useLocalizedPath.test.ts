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
    ['/products?view=grid#videobee', 'zh-Hant', '/zh-Hant/products?view=grid#videobee'],
    ['/ja?view=grid#videobee', 'en', '/?view=grid#videobee'],
    ['/ja?view=grid#videobee', 'zh-Hant', '/zh-Hant/?view=grid#videobee'],
    ['/zh-Hant?view=grid#videobee', 'en', '/?view=grid#videobee'],
    ['/zh-Hant?view=grid#videobee', 'ja', '/ja/?view=grid#videobee']
  ])('converts %s to %s', (path, locale, expected) => {
    expect(localizedPath(path, locale as 'ja' | 'en' | 'zh-Hant')).toBe(expected)
  })
})
