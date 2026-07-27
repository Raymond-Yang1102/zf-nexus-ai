<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component" :currentLocale="currentLocale" @change-locale="changeLocale" />
  </RouterView>
</template>

<script setup lang="ts">
import { computed, watch, onMounted } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { LOCALE_STORAGE_KEY, DEFAULT_LOCALE, SUPPORTED_LOCALES } from './config/locale'

const { locale, t } = useI18n()
const route = useRoute()
const router = useRouter()

const currentLocale = computed(() => locale.value)

const changeLocale = (lang: string) => {
  locale.value = lang
  localStorage.setItem(LOCALE_STORAGE_KEY, lang)

  const currentPath = route.path
  const currentLang = route.params.lang as string

  let newPath = currentPath

  if (currentLang) {
    newPath = currentPath.replace(`/${currentLang}`, `/${lang}`)
  } else {
    const langPattern = new RegExp(`^/(?:${SUPPORTED_LOCALES.join('|')})`)
    if (langPattern.test(currentPath)) {
      newPath = currentPath.replace(langPattern, `/${lang}`)
    } else {
      if (route.name === 'NotFound') {
        newPath = `/${lang}${currentPath}`
      } else {
        const pathWithoutSlash = currentPath === '/' ? '' : currentPath
        newPath = `/${lang}${pathWithoutSlash}`
      }
    }
  }

  router.push(newPath)
}

const updateDocumentHead = () => {
  document.documentElement.lang = locale.value
  document.documentElement.dataset.lang = locale.value

  document.title = t('meta.title')
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'))
  document.querySelector('meta[name="keywords"]')?.setAttribute('content', t('meta.keywords'))
}

const extractLocaleFromPath = (path: string): string | null => {
  const match = path.match(/^\/(ja|en)(?:\/|$)/)
  return match ? match[1] : null
}

const syncLocaleFromRoute = () => {
  const langParam = route.params.lang as string | undefined

  if (langParam && SUPPORTED_LOCALES.includes(langParam as any)) {
    if (locale.value !== langParam) {
      locale.value = langParam
      localStorage.setItem(LOCALE_STORAGE_KEY, langParam)
    }
    return
  }

  const pathLocale = extractLocaleFromPath(route.path)
  if (pathLocale && locale.value !== pathLocale) {
    locale.value = pathLocale
    localStorage.setItem(LOCALE_STORAGE_KEY, pathLocale)
  }
}

watch(currentLocale, () => {
  updateDocumentHead()
})

watch(() => route.path, () => {
  syncLocaleFromRoute()
})

onMounted(() => {
  syncLocaleFromRoute()

  if (!localStorage.getItem(LOCALE_STORAGE_KEY)) {
    locale.value = DEFAULT_LOCALE
    localStorage.setItem(LOCALE_STORAGE_KEY, DEFAULT_LOCALE)
  }

  updateDocumentHead()
})
</script>
