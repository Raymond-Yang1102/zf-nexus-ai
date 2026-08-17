<template>
  <div class="min-h-screen bg-white"><Header :currentLocale="currentLocale" @change-locale="changeLocale"/><main class="pt-16"><section class="py-16 bg-gray-50"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">{{ legalPage.title }}</h1><article v-for="section in legalPage.sections" :key="section.title" class="rounded-2xl border border-gray-100 bg-white p-8 mb-6"><h2 class="text-xl font-bold text-gray-800 mb-4">{{ section.title }}</h2><p v-for="paragraph in section.paragraphs" :key="paragraph" class="text-gray-600 leading-relaxed mb-3 last:mb-0">{{ paragraph }}</p></article></div></section></main><Footer/></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { messages } from '@/locales'
import { resolveSupportedLocale } from '@/config/locale'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
type InformationPageId = 'privacy' | 'terms'
const props = defineProps<{ currentLocale: string; page: InformationPageId }>()
const emit = defineEmits<{ (event: 'change-locale', lang: string): void }>()
const { locale } = useI18n()
const activeLocale = computed(() => resolveSupportedLocale(locale.value))
const legalPage = computed(() => props.page === 'privacy' ? messages[activeLocale.value].information.privacy : messages[activeLocale.value].information.terms)
const changeLocale = (language: string) => emit('change-locale', language)
</script>
