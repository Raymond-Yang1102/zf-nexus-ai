<script setup lang="ts">
import { computed, watch, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { LOCALE_STORAGE_KEY } from './main'

const { locale, t } = useI18n()

const currentLocale = computed(() => locale.value)

const changeLocale = (lang: string) => {
  locale.value = lang
  localStorage.setItem(LOCALE_STORAGE_KEY, lang)
}

// Update document head (title & meta) based on locale
const updateDocumentHead = () => {
  document.documentElement.lang = locale.value
  document.documentElement.dataset.lang = locale.value

  document.title = t('meta.title')
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'))
  document.querySelector('meta[name="keywords"]')?.setAttribute('content', t('meta.keywords'))
}

// Watch for locale changes and update document attributes
watch(currentLocale, () => {
  updateDocumentHead()
})

onMounted(() => {
  updateDocumentHead()
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component" :currentLocale="currentLocale" @change-locale="changeLocale" />
  </RouterView>
</template>
