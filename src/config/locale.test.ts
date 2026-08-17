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
