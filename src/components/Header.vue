<template>
  <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-8">
          <button @click="go('/')" class="flex items-center space-x-2 cursor-pointer"><img :src="logoImg" alt="ZingStone" class="w-10 h-10"><span class="font-bold text-xl text-gray-800">ZingStone</span></button>
          <nav class="hidden md:flex items-center space-x-8">
            <button v-for="item in navItems" :key="item.path" @click="go(item.path)" class="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors">{{ item.label }}</button>
          </nav>
        </div>
        <div class="hidden md:flex items-center"><div class="relative" @mouseenter="isLanguageOpen = true" @mouseleave="isLanguageOpen = false">
          <button class="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"><Globe class="w-4 h-4"/><span class="text-sm font-medium">{{ languages.find((item) => item.code === effectiveLocale)?.label }}</span></button>
          <div v-if="isLanguageOpen" class="absolute right-0 mt-2 w-28 rounded-lg shadow-xl py-1 border border-gray-200 bg-white/95 backdrop-blur-md overflow-hidden">
            <button v-for="language in languages" :key="language.code" @click="selectLanguage(language.code)" class="w-full text-left px-4 py-2 text-sm hover:bg-gray-50" :class="language.code === effectiveLocale ? 'text-blue-600 font-medium' : 'text-gray-700'">{{ language.label }}</button>
          </div>
        </div></div>
        <button @click="isMobileOpen = !isMobileOpen" class="md:hidden p-2 text-gray-700"><Menu v-if="!isMobileOpen" class="w-6 h-6"/><X v-else class="w-6 h-6"/></button>
      </div>
    </div>
    <div v-if="isMobileOpen" class="md:hidden border-t bg-white/95 border-gray-200 backdrop-blur-md"><div class="px-4 py-4 space-y-2">
      <button v-for="item in navItems" :key="item.path" @click="go(item.path); isMobileOpen = false" class="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50">{{ item.label }}</button>
      <div class="pt-3 mt-3 border-t border-gray-200 flex gap-2"><button v-for="language in languages" :key="language.code" @click="selectLanguage(language.code); isMobileOpen = false" class="px-3 py-1.5 rounded-full text-sm" :class="language.code === effectiveLocale ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'">{{ language.label }}</button></div>
    </div></div>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Globe, Menu, X } from 'lucide-vue-next'
import { messages, type Locale } from '@/locales'
import { localizedPath } from '@/composables/useLocalizedPath'
import logoImg from '@/assets/logo/logo.png'

defineProps<{ currentLocale: string }>()
const emit = defineEmits<{ (event: 'change-locale', lang: string): void }>()
const { locale } = useI18n()
const router = useRouter()
const isScrolled = ref(false)
const isMobileOpen = ref(false)
const isLanguageOpen = ref(false)
const effectiveLocale = computed(() => (locale.value in messages ? locale.value : 'ja') as Locale)
const languages = computed(() => Object.entries(messages[effectiveLocale.value].header.language).map(([code, label]) => ({ code: code as Locale, label })))
const navItems = computed(() => [
  { path: '/', label: messages[effectiveLocale.value].header.nav.home }, { path: '/company', label: messages[effectiveLocale.value].header.nav.company }, { path: '/products', label: messages[effectiveLocale.value].header.nav.products }, { path: '/technology', label: messages[effectiveLocale.value].header.nav.technology }, { path: '/contact', label: messages[effectiveLocale.value].header.nav.contact }
])
const go = (path: string) => router.push(localizedPath(path, effectiveLocale.value))
const selectLanguage = (language: Locale) => { emit('change-locale', language); isLanguageOpen.value = false }
const onScroll = () => { isScrolled.value = window.scrollY > 20 }
onMounted(() => { window.addEventListener('scroll', onScroll); onScroll() })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
