import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/config/locale'
import type { Locale } from '@/locales'

const localizedPrefixes = SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE)
const localizedPrefixPattern = new RegExp(`^/(?:${localizedPrefixes.join('|')})(?=/|$)`)

export function localeFromPath(path: string): Locale {
  return localizedPrefixes.find((locale) => path === `/${locale}` || path.startsWith(`/${locale}/`)) ?? DEFAULT_LOCALE
}

export function localizedPath(fullPath: string, targetLocale: Locale): string {
  const hashIndex = fullPath.indexOf('#')
  const pathAndQuery = hashIndex === -1 ? fullPath : fullPath.slice(0, hashIndex)
  const hash = hashIndex === -1 ? '' : fullPath.slice(hashIndex)
  const queryIndex = pathAndQuery.indexOf('?')
  const pathname = queryIndex === -1 ? pathAndQuery : pathAndQuery.slice(0, queryIndex)
  const query = queryIndex === -1 ? '' : pathAndQuery.slice(queryIndex)
  const canonicalPath = pathname.replace(localizedPrefixPattern, '') || '/'
  const translatedPath = targetLocale === DEFAULT_LOCALE ? canonicalPath : `/${targetLocale}${canonicalPath === '/' ? '/' : canonicalPath}`
  return `${translatedPath}${query}${hash}`
}
