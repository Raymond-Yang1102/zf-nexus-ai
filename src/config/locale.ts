import type { Locale } from '@/locales'

export const LOCALE_STORAGE_KEY = 'locale'
export const DEFAULT_LOCALE: Locale = 'ja'
export const SUPPORTED_LOCALES: Locale[] = ['ja', 'en', 'zh-Hant']

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
  if (saved !== null && SUPPORTED_LOCALES.includes(saved as Locale)) return saved as Locale
  const systemLocale = detectSystemLocale()
  localStorage.setItem(LOCALE_STORAGE_KEY, systemLocale)
  return systemLocale
}
