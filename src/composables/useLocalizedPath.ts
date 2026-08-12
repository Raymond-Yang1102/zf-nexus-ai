import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/config/locale'
import type { Locale } from '@/locales'

const localizedPrefixes = SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE)
const localizedPrefixPattern = new RegExp(`^/(?:${localizedPrefixes.join('|')})(?=/|$)`)

export function localeFromPath(path: string): Locale {
  return localizedPrefixes.find((locale) => path === `/${locale}` || path.startsWith(`/${locale}/`)) ?? DEFAULT_LOCALE
}

export function localizedPath(fullPath: string, targetLocale: Locale): string {
  const [pathAndQuery, hash = ''] = fullPath.split('#', 2)
  const canonicalPath = pathAndQuery.replace(localizedPrefixPattern, '') || '/'
  const translatedPath = targetLocale === DEFAULT_LOCALE ? canonicalPath : `/${targetLocale}${canonicalPath === '/' ? '/' : canonicalPath}`
  return hash ? `${translatedPath}#${hash}` : translatedPath
}
