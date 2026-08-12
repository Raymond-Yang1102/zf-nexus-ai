<template>
  <div class="min-h-screen bg-white"><Header :currentLocale="currentLocale" @change-locale="changeLocale"/>
    <main class="pt-16">
      <section class="relative min-h-[60vh] flex items-center hero-bg-indigo overflow-hidden"><div class="relative z-10 px-8 max-w-7xl mx-auto w-full"><h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-800 animate-fade-in">{{ home.hero.title }}</h1><p class="text-lg md:text-xl text-gray-600 max-w-2xl animate-fade-in delay-200">{{ home.hero.subtitle }}</p></div></section>
      <section class="py-16 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><button v-for="card in home.featureCards" :key="card.id" @click="go(card.id)" class="text-left group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"><div class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><component :is="cardIcons[card.id]" class="w-7 h-7 text-white"/></div><h2 class="text-xl font-bold text-gray-800 mb-2">{{ card.title }}</h2><p class="text-gray-600 text-sm">{{ card.subtitle }}</p></button></div></div></section>
      <section class="py-16 bg-gray-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-2xl font-bold text-gray-800 mb-8">{{ home.productsTitle }}</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><button v-for="productId in PRODUCT_IDS" :key="productId" @click="goProduct(productId)" class="text-left group p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"><div class="w-20 h-20 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" :class="PRODUCT_PRESENTATION[productId].backgroundClass"><img :src="PRODUCT_PRESENTATION[productId].icon" :alt="home.products[productId].name" class="w-10 h-10 object-contain"/></div><h3 class="text-xl font-bold text-gray-800 mb-3">{{ home.products[productId].name }}</h3><p class="text-gray-600 text-sm leading-relaxed">{{ home.products[productId].description }}</p></button></div></div></section>
    </main><Footer/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Building2, Cpu, Mail, Package } from 'lucide-vue-next'
import { messages, type Locale } from '@/locales'
import { PRODUCT_IDS, PRODUCT_PRESENTATION, type ProductId } from '@/config/products'
import { localizedPath } from '@/composables/useLocalizedPath'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

defineProps<{ currentLocale: string }>()
const emit = defineEmits<{ (event: 'change-locale', lang: string): void }>()
const { locale } = useI18n()
const router = useRouter()
const activeLocale = computed(() => (locale.value in messages ? locale.value : 'ja') as Locale)
const home = computed(() => messages[activeLocale.value].home)
const cardIcons = { company: Building2, products: Package, technology: Cpu, contact: Mail }
const paths = { company: '/company', products: '/products', technology: '/technology', contact: '/contact' }
const go = (id: keyof typeof paths) => router.push(localizedPath(paths[id], activeLocale.value))
const goProduct = (productId: ProductId) => router.push(localizedPath(`/products#${PRODUCT_PRESENTATION[productId].anchor}`, activeLocale.value))
const changeLocale = (language: string) => emit('change-locale', language)
</script>
