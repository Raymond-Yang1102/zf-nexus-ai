<template>
  <footer class="bg-gray-900 text-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex items-center space-x-2 mb-4"><img :src="logoImg" alt="ZingStone" class="w-10 h-10"><span class="font-bold text-xl text-white">{{ footer.legalName }}</span></div>
    <p class="text-sm text-gray-400 max-w-xl leading-relaxed mb-6">{{ footer.address }}</p>
    <div class="flex flex-wrap gap-x-5 gap-y-2 mb-6"><button v-for="link in legalLinks" :key="link.path" @click="go(link.path)" class="text-sm text-gray-400 hover:text-white transition-colors">{{ link.label }}</button></div>
    <p class="text-sm text-gray-400">{{ footer.copyright }}</p>
  </div></footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { messages, type Locale } from '@/locales'
import { localizedPath } from '@/composables/useLocalizedPath'
import logoImg from '@/assets/logo/logo.png'

const { locale } = useI18n()
const router = useRouter()
const currentLocale = computed(() => (locale.value in messages ? locale.value : 'ja') as Locale)
const footer = computed(() => messages[currentLocale.value].footer)
const legalLinks = computed(() => [
  { path: '/contact', label: footer.value.legalLinks.contact }, { path: '/privacy', label: footer.value.legalLinks.privacy }, { path: '/terms', label: footer.value.legalLinks.terms }
])
const go = (path: string) => router.push(localizedPath(path, currentLocale.value))
</script>
