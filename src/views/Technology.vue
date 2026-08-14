<template>
  <div class="min-h-screen bg-white"><Header :currentLocale="currentLocale" @change-locale="changeLocale"/><main class="pt-16">
    <section class="py-16 bg-white"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-2xl font-bold text-gray-800 mb-8 text-center">{{ technology.overviewTitle }}</h1><div class="prose prose-lg text-gray-600 leading-relaxed text-center"><p v-for="paragraph in technology.overview" :key="paragraph" class="mb-4">{{ paragraph }}</p></div></div></section>
    <section class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-2xl font-bold text-gray-800 mb-12">{{ technology.capabilitiesTitle }}</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><article v-for="(item, index) in technology.capabilities" :key="item.title" class="p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col"><div class="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6" :class="backgrounds[index]"><component :is="icons[index]" class="w-7 h-7" :class="colors[index]"/></div><h3 class="text-xl font-bold text-gray-800 mb-3">{{ item.title }}</h3><p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{{ item.description }}</p><span class="inline-block self-start px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">{{ item.product }}</span></article></div></div></section>
    <section class="py-16 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row gap-12 items-center"><div class="lg:w-1/2"><h2 class="text-2xl font-bold text-gray-800 mb-8">{{ technology.workflowTitle }}</h2><div class="space-y-4 text-gray-600 leading-relaxed"><p v-for="item in technology.workflow" :key="item">{{ item }}</p></div></div><div class="lg:w-1/2"><div class="w-full aspect-video rounded-2xl overflow-hidden"><img src="@/assets/images/研究开发体制.jpg" alt="Research and development" class="w-full h-full object-cover"/></div></div></div></div></section>
    <section class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row gap-12 items-center"><div class="lg:w-1/2"><h2 class="text-2xl font-bold text-gray-800 mb-8">{{ technology.outputTitle }}</h2><div class="space-y-4 text-gray-600 leading-relaxed"><p v-for="item in technology.output" :key="item">{{ item }}</p></div></div><div class="lg:w-1/2"><div class="w-full aspect-video rounded-2xl overflow-hidden"><img src="@/assets/images/基础设施.png" alt="Infrastructure" class="w-full h-full object-cover"/></div></div></div></div></section>
  </main><Footer/></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Files, HardDrive, SlidersHorizontal } from 'lucide-vue-next'
import { messages, type Locale } from '@/locales'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
defineProps<{ currentLocale: string }>()
const emit = defineEmits<{ (event: 'change-locale', lang: string): void }>()
const { locale } = useI18n()
const activeLocale = computed(() => (locale.value in messages ? locale.value : 'ja') as Locale)
const technology = computed(() => messages[activeLocale.value].technology)
const icons = [HardDrive, SlidersHorizontal, Files]
const backgrounds = ['from-blue-100 to-blue-200', 'from-purple-100 to-purple-200', 'from-green-100 to-green-200']
const colors = ['text-blue-600', 'text-purple-600', 'text-green-600']
const changeLocale = (language: string) => emit('change-locale', language)
</script>
