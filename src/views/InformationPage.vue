<template>
  <div class="min-h-screen bg-white"><Header :currentLocale="currentLocale" @change-locale="changeLocale"/><main class="pt-16"><section class="py-16" :class="page === 'contact' ? 'bg-white' : 'bg-gray-50'"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">{{ page === 'contact' ? contact.title : legalPage.title }}</h1><template v-if="page === 'contact'"><div class="rounded-2xl border border-gray-100 bg-white p-8"><p class="text-gray-600 leading-relaxed mb-8">{{ contact.introduction }}</p><div class="space-y-6"><div><h2 class="text-lg font-semibold text-gray-800 mb-2">{{ contact.addressLabel }}</h2><p class="text-gray-600 leading-relaxed break-words">{{ contact.address }}</p></div><div><h2 class="text-lg font-semibold text-gray-800 mb-2">{{ contact.emailLabel }}</h2><p class="text-gray-600">{{ contact.emailStatus }}</p></div></div></div></template><template v-else><article v-for="section in legalPage.sections" :key="section.title" class="rounded-2xl border border-gray-100 bg-white p-8 mb-6"><h2 class="text-xl font-bold text-gray-800 mb-4">{{ section.title }}</h2><p v-for="paragraph in section.paragraphs" :key="paragraph" class="text-gray-600 leading-relaxed mb-3 last:mb-0">{{ paragraph }}</p></article></template></div></section></main><Footer/></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { messages, type Locale } from '@/locales'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
type InformationPageId = 'contact' | 'privacy' | 'terms'
const props = defineProps<{ currentLocale: string; page: InformationPageId }>()
const emit = defineEmits<{ (event: 'change-locale', lang: string): void }>()
const { locale } = useI18n()
const activeLocale = computed(() => (locale.value in messages ? locale.value : 'ja') as Locale)
const contact = computed(() => messages[activeLocale.value].information.contact)
const legalPage = computed(() => props.page === 'privacy' ? messages[activeLocale.value].information.privacy : messages[activeLocale.value].information.terms)
const changeLocale = (language: string) => emit('change-locale', language)
</script>
