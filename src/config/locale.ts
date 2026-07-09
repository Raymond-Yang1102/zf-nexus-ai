import type { Locale } from '@/locales'

export const LOCALE_STORAGE_KEY = 'locale'

export const DEFAULT_LOCALE: Locale = 'ja'

export const SUPPORTED_LOCALES: Locale[] = ['ja', 'en']

export function detectSystemLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE

  const browserLang = navigator.language
  const shortLang = browserLang.split('-')[0].toLowerCase()

  return SUPPORTED_LOCALES.includes(shortLang as Locale)
    ? (shortLang as Locale)
    : DEFAULT_LOCALE
}

export function resolveInitialLocale(): Locale {
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY)

  if (saved !== null) {
    if (SUPPORTED_LOCALES.includes(saved as Locale)) {
      return saved as Locale
    }
  }

  const systemLocale = detectSystemLocale()
  localStorage.setItem(LOCALE_STORAGE_KEY, systemLocale)
  return systemLocale
}
