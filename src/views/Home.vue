<template>
  <div class="min-h-screen bg-white">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />
    <main class="pt-16">
      <section class=" relative min-h-[60vh] flex items-center hero-bg-indigo overflow-hidden">
        <div class="relative z-10 px-8 max-w-7xl mx-auto w-full">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-800  animate-fade-in">{{
            homeData.hero.title }}</h1>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl animate-fade-in delay-200">{{
            homeData.hero.subtitle }}</p>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(card, key) in homeData.fourCards" :key="key" @click="goToPage(key)"
              class="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div
                class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <component :is="fourCardsIcons[key as keyof typeof fourCardsIcons]" class="w-7 h-7 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2 ">{{ card.title }}</h3>
              <p class="text-gray-600 text-sm">{{ card.subtitle }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 合作伙伴 -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">{{ homeData.clients.title }}</h2>
          <p class="text-gray-600 mb-8 text-center">{{ homeData.clients.description }}</p>
          <div class="relative overflow-hidden py-8" @mouseenter="stopLogoScroll" @mouseleave="startLogoScroll">
            <div ref="logoScrollContainer" class="flex animate-scroll">
              <div v-for="logo in baseLogos" :key="logo.id" class="flex-shrink-0 px-6 py-4">
                <img :src="logo.src" :alt="logo.alt"
                  class="h-10 md:h-14 w-auto opacity-70 hover:opacity-100 transition-all duration-300" />
              </div>
              <div v-for="logo in baseLogos" :key="`${logo.id}-dup`" class="flex-shrink-0 px-6 py-4">
                <img :src="logo.src" :alt="logo.alt"
                  class="h-10 md:h-14 w-auto opacity-70 hover:opacity-100 transition-all duration-300" />
              </div>
            </div>
            <div
              class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none">
            </div>
            <div
              class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none">
            </div>
          </div>
        </div>
      </section>

      <!-- 产品 -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8 ">{{ homeData.productsTitle }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(product, key) in homeData.products" :key="key" @click="goToProduct(key)"
              class="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div
                class="w-20 h-20 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                :class="productBgColors[key as keyof typeof productBgColors]">
                <img :src="productLogos[key as keyof typeof productLogos]" :alt="product.name"
                  class="w-10 h-10 object-contain" />
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3 ">{{ product.name }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed ja-body-text">{{ product.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8 ">{{ homeData.news.title }}</h2>
          <div class="space-y-4">
            <div v-for="(item, index) in homeData.news.items" :key="index"
              class="flex items-start space-x-6 p-4 rounded-xl bg-white border border-gray-100 hover:border-blue-200 transition-colors">
              <span class="text-sm font-medium text-blue-600 flex-shrink-0 min-w-[80px]">{{ item.date }}</span>
              <span class="text-gray-700">{{ item.content }}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Building2, Package, Cpu, Users } from 'lucide-vue-next'
import { messages } from '@/locales'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import notegptLogo from '@/assets/logo/notegpt.png'
import decopyLogo from '@/assets/logo/decopy.png'
import visualgptLogo from '@/assets/logo/visualgpt.png'

// 合作伙伴logo
import googleLogo from '@/assets/partner_logo/google_logo.png'
import ungGamesLogo from '@/assets/partner_logo/unggames_logo.png'
import alibabaGroupLogo from '@/assets/partner_logo/alibaba_group_logo.png'
import baiduLogo from '@/assets/partner_logo/baidu_logo.png'
import gismartLogo from '@/assets/partner_logo/gismart_logo.png'
import netEaseGamesLogo from '@/assets/partner_logo/netease_games_logo.png'
import elexLogo from '@/assets/partner_logo/elex_logo.png'
import funPlusLogo from '@/assets/partner_logo/funplus_logo.png'



type Locale = keyof typeof messages

const { locale } = useI18n()
const router = useRouter()

defineProps<{
  currentLocale: string
}>()

const emit = defineEmits<{
  (e: 'change-locale', lang: string): void
}>()

const handleLocaleChange = (lang: string) => {
  emit('change-locale', lang)
}

const effectiveLocale = computed<Locale>(() => {
  const loc = locale.value as string
  if (loc in messages) return loc as Locale
  return 'ja' as Locale
})

const homeData = computed(() => messages[effectiveLocale.value]?.home)

const fourCardsIcons = {
  company: Building2,
  products: Package,
  technology: Cpu,
  team: Users
}

const productLogos: Record<string, string> = {
  noteGPT: notegptLogo,
  decopyAI: decopyLogo,
  visualGPT: visualgptLogo
}

const productBgColors: Record<string, string> = {
  noteGPT: 'from-blue-100 to-blue-200',
  decopyAI: 'from-purple-100 to-purple-200',
  visualGPT: 'from-green-100 to-green-200'
}

const goToPage = (key: string) => {
  const lang = locale.value as string
  const pageMap: Record<string, string> = {
    company: 'company',
    products: 'products',
    technology: 'technology',
    team: 'team'
  }
  const path = lang === 'ja' ? `/${pageMap[key]}` : `/${lang}/${pageMap[key]}`
  router.push(path)
}

const goToProduct = (key: string) => {
  const lang = locale.value as string
  const anchorMap: Record<string, string> = {
    noteGPT: 'notegpt',
    decopyAI: 'decopy',
    visualGPT: 'visualgpt'
  }
  const path = lang === 'ja' ? `/products#${anchorMap[key]}` : `/${lang}/products#${anchorMap[key]}`
  router.push(path)
}

const logoScrollContainer = ref<HTMLElement | null>(null)
let scrollAnimationId: number | null = null
let scrollPosition = 0

const startLogoScroll = () => {
  if (scrollAnimationId) return
  const animate = () => {
    scrollPosition -= 0.03
    if (scrollPosition <= -50) {
      scrollPosition = 0
    }
    if (logoScrollContainer.value) {
      logoScrollContainer.value.style.transform = `translateX(${scrollPosition}%)`
    }
    scrollAnimationId = requestAnimationFrame(animate)
  }
  animate()
}

const stopLogoScroll = () => {
  if (scrollAnimationId) {
    cancelAnimationFrame(scrollAnimationId)
    scrollAnimationId = null
  }
}

onMounted(() => {
  startLogoScroll()
})

onUnmounted(() => {
  stopLogoScroll()
})

const baseLogos = [
  { id: 1, src: googleLogo, alt: 'Google' },
  { id: 2, src: ungGamesLogo, alt: 'UngGames' },
  { id: 3, src: alibabaGroupLogo, alt: 'Alibaba Group' },
  { id: 4, src: baiduLogo, alt: 'Baidu' },
  { id: 5, src: gismartLogo, alt: 'Gismart' },
  { id: 6, src: netEaseGamesLogo, alt: 'NetEase Games' },
  { id: 7, src: elexLogo, alt: 'Elex' },
  { id: 8, src: funPlusLogo, alt: 'FunPlus' },
]
</script>
