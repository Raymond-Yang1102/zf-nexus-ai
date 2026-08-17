<template>
  <footer class="bg-gray-900 text-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex items-center space-x-2 mb-4"><img :src="logoImg" alt="ZingStone" class="w-10 h-10 rounded-full object-cover"><span class="font-bold text-xl text-white">{{ footer.legalName }}</span></div>
    <p class="text-sm text-gray-400 max-w-xl leading-relaxed mb-3">{{ footer.address }}</p>
    <p class="text-sm text-gray-400 mb-6">{{ footer.contactLabel }}：service@zingstone.com</p>
    <p class="text-sm text-gray-400">{{ footer.copyright }}</p>
  </div></footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { messages } from '@/locales'
import { resolveSupportedLocale } from '@/config/locale'
import logoImg from '@/assets/logo/zingstone-logo-transparent.png'

const { locale } = useI18n()
const currentLocale = computed(() => resolveSupportedLocale(locale.value))
const footer = computed(() => messages[currentLocale.value].footer)
</script>
