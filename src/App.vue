<template>
  <RouterView v-slot="{ Component }"><component :is="Component" :currentLocale="currentLocale" @change-locale="changeLocale" /></RouterView>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY } from './config/locale'
import { localeFromPath, localizedPath } from './composables/useLocalizedPath'
import type { Locale } from './locales'

const { locale, t } = useI18n()
const route = useRoute()
const router = useRouter()
const currentLocale = computed(() => locale.value)

const syncLocaleFromRoute = () => {
  const nextLocale = localeFromPath(route.path)
  if (locale.value !== nextLocale) locale.value = nextLocale
  localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
}

const changeLocale = (lang: string) => {
  const target = lang as Locale
  locale.value = target
  localStorage.setItem(LOCALE_STORAGE_KEY, target)
  router.push(localizedPath(route.fullPath, target))
}

const updateHead = () => {
  document.documentElement.lang = locale.value
  document.documentElement.dataset.lang = locale.value
  document.title = t('meta.title')
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'))
  document.querySelector('meta[name="keywords"]')?.setAttribute('content', t('meta.keywords'))
}

watch(() => route.path, syncLocaleFromRoute)
watch(currentLocale, updateHead)
onMounted(() => { syncLocaleFromRoute(); if (!localStorage.getItem(LOCALE_STORAGE_KEY)) locale.value = DEFAULT_LOCALE; updateHead() })
</script>
