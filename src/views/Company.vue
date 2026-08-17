<template>
  <div class="min-h-screen bg-white"><Header :currentLocale="currentLocale" @change-locale="changeLocale"/><main class="pt-16">
    <section class="py-16 bg-white"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-2xl font-bold text-gray-800 mb-8 text-center">{{ company.ceoMessage.title }}</h1><div class="prose prose-lg text-gray-600 leading-relaxed text-center"><p v-for="paragraph in company.ceoMessage.content" :key="paragraph" class="mb-4">{{ paragraph }}</p></div><p class="text-center text-gray-600 mt-8 font-medium">{{ company.ceoMessage.signature }}</p></div></section>
    <section class="py-16 bg-white"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-2xl font-bold text-gray-800 mb-8 text-center">{{ company.introductionTitle }}</h1><div class="prose prose-lg text-gray-600 leading-relaxed text-center"><p v-for="paragraph in company.introduction" :key="paragraph" class="mb-4">{{ paragraph }}</p></div></div></section>
    <section class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-2xl font-bold text-gray-800 mb-12">{{ company.valuesTitle }}</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><article v-for="item in company.values" :key="item.title" class="p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"><h3 class="text-xl font-bold text-gray-800 mb-3">{{ item.title }}</h3><p class="text-gray-600 text-sm leading-relaxed">{{ item.description }}</p></article></div></div></section>
    <section class="py-16 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-2xl font-bold text-gray-800 mb-12">{{ company.businessTitle }}</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><article v-for="item in company.business" :key="item.title" class="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"><h3 class="text-xl font-bold text-gray-800 mb-3">{{ item.title }}</h3><p class="text-gray-600 text-sm leading-relaxed">{{ item.description }}</p></article></div></div></section>
    <section class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-2xl font-bold text-gray-800 mb-8">{{ company.profileTitle }}</h2><div class="overflow-x-auto bg-white rounded-2xl border border-gray-100"><table class="w-full border-collapse"><tbody><tr v-for="row in company.profile" :key="row.label" class="border-b border-gray-200 last:border-0"><th class="text-left py-4 px-6 font-semibold text-gray-800 w-1/3">{{ row.label }}</th><td class="text-left py-4 px-6 text-gray-600 break-words">{{ row.value }}</td></tr></tbody></table></div></div></section>
  </main><Footer/></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { messages } from '@/locales'
import { resolveSupportedLocale } from '@/config/locale'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
defineProps<{ currentLocale: string }>()
const emit = defineEmits<{ (event: 'change-locale', lang: string): void }>()
const { locale } = useI18n()
const activeLocale = computed(() => resolveSupportedLocale(locale.value))
const company = computed(() => messages[activeLocale.value].company)
const changeLocale = (language: string) => emit('change-locale', language)
</script>
