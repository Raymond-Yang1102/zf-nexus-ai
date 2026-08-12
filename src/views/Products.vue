<template>
  <div class="min-h-screen bg-white"><Header :currentLocale="currentLocale" @change-locale="changeLocale"/>
    <main class="pt-16">
      <section class="py-16 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-2xl font-bold text-gray-800 mb-4 text-center">{{ products.overview.title }}</h1><p class="text-gray-600 mb-12 leading-relaxed text-center max-w-5xl mx-auto">{{ products.overview.description }}</p><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><a v-for="productId in PRODUCT_IDS" :key="productId" :href="`#${PRODUCT_PRESENTATION[productId].anchor}`" class="p-10 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"><div class="w-20 h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-5" :class="PRODUCT_PRESENTATION[productId].backgroundClass"><img :src="PRODUCT_PRESENTATION[productId].icon" :alt="products.items[productId].title" class="w-10 h-10 object-contain"/></div><span class="text-lg font-bold text-gray-800 mb-2">{{ products.items[productId].title }}</span><span class="text-sm text-gray-500">{{ products.items[productId].subtitle }}</span></a></div></div></section>
      <section v-for="(productId, index) in PRODUCT_IDS" :id="PRODUCT_PRESENTATION[productId].anchor" :key="productId" class="py-16 scroll-mt-16" :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-white'"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col lg:flex-row gap-12 items-center"><div class="lg:w-1/2"><div class="w-full aspect-video bg-gray-100 rounded-2xl flex flex-col gap-5 items-center justify-center"><img :src="PRODUCT_PRESENTATION[productId].icon" :alt="products.items[productId].title" class="w-28 h-28 object-contain"/><span class="text-gray-500 font-medium">{{ products.items[productId].title }}</span></div></div><div class="lg:w-1/2"><h2 class="text-3xl font-bold text-gray-800 mb-2">{{ products.items[productId].title }}</h2><p class="text-blue-600 font-semibold mb-4">{{ products.items[productId].subtitle }}</p><a :href="PRODUCT_PRESENTATION[productId].websiteUrl" target="_blank" rel="noopener noreferrer" class="inline-flex px-4 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all duration-300 mb-6">{{ products.officialWebsiteLabel }}</a><p class="text-gray-600 mb-6 leading-relaxed">{{ products.items[productId].description }}</p><div class="mb-6"><h3 class="text-lg font-semibold text-gray-800 mb-3">{{ products.featureLabel }}</h3><ul class="space-y-2"><li v-for="feature in products.items[productId].features" :key="feature" class="flex items-center space-x-2 text-gray-600"><Check class="w-4 h-4 text-blue-500"/><span>{{ feature }}</span></li></ul></div><div><h3 class="text-lg font-semibold text-gray-800 mb-3">{{ products.useCaseLabel }}</h3><ul class="space-y-2"><li v-for="useCase in products.items[productId].useCases" :key="useCase" class="flex items-center space-x-2 text-gray-600"><User class="w-4 h-4 text-blue-500"/><span>{{ useCase }}</span></li></ul></div></div></div></div></section>
    </main><Footer/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Check, User } from 'lucide-vue-next'
import { messages, type Locale } from '@/locales'
import { PRODUCT_IDS, PRODUCT_PRESENTATION } from '@/config/products'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

defineProps<{ currentLocale: string }>()
const emit = defineEmits<{ (event: 'change-locale', lang: string): void }>()
const { locale } = useI18n()
const activeLocale = computed(() => (locale.value in messages ? locale.value : 'ja') as Locale)
const products = computed(() => messages[activeLocale.value].products)
const changeLocale = (language: string) => emit('change-locale', language)
</script>
