<template>
  <div class="min-h-screen bg-washi-50">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />
    <main class="relative">
      <div class="absolute inset-0 seigaiha-pattern opacity-5 pointer-events-none"></div>

      <section class="relative">
        <Hero />
      </section>

      <section id="numbers" class="py-20 md:py-28 bg-gradient-to-b from-white to-washi-50 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div
              class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-seigaiha-100 text-seigaiha-600 text-sm font-medium mb-4">
              <TrendingUp class="w-4 h-4" />
              <span>{{ homeData.numbers.sectionLabel }}</span>
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-sumi-800 mb-4">
              {{ homeData.numbers.title }}
            </h2>
            <p class="text-lg text-sumi-600 max-w-2xl mx-auto">
              {{ homeData.numbers.description }}
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div v-for="(item, index) in homeData.numbers.items" :key="index" class="text-center group">
              <div class="relative inline-block">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-sky-200 to-wisteria-200 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                </div>
                <div
                  class="relative text-4xl md:text-6xl font-bold text-gradient-japanese mb-3 group-hover:scale-110 transition-transform duration-500">
                  {{ item.value }}
                </div>
              </div>
              <div class="text-xl font-bold text-sumi-800 mb-1">
                {{ item.label }}
              </div>
              <div class="text-sm text-sumi-400">
                {{ item.description }}
              </div>
            </div>
          </div>

          <div class="text-center">
            <div class="text-sm text-sky-500 uppercase tracking-widest mb-4">{{ homeData.trustedBy.labelEn }}</div>
            <h3 class="text-2xl md:text-3xl font-bold text-sumi-800 mb-8">{{ homeData.trustedBy.title }}</h3>
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
                class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-washi-50 to-transparent pointer-events-none">
              </div>
              <div
                class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-washi-50 to-transparent pointer-events-none">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-do" class="py-20 md:py-28 bg-white relative overflow-hidden">
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2">
        </div>
        <div
          class="absolute bottom-0 left-0 w-64 h-64 bg-wisteria-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2">
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div
              class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-medium mb-4">
              <Sparkles class="w-4 h-4" />
              <span>{{ homeData.whatWeDo.sectionLabel }}</span>
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-sumi-800 mb-4">
              {{ homeData.whatWeDo.title }}
            </h2>
            <p class="text-lg text-sumi-600 max-w-2xl mx-auto">
              {{ homeData.whatWeDo.description }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(item, index) in homeData.whatWeDo.items" :key="index"
              class="group relative p-8 rounded-3xl bg-gradient-to-br from-washi-50 to-white border border-washi-200 shadow-soft hover:shadow-xl hover:border-sky-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div
                class="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"
                :class="item.bgColor"></div>
              <div
                class="w-20 h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg"
                :class="item.bgColor">
                <component :is="whatWeDoIcons[index]" class="w-10 h-10" :class="item.iconColor" />
              </div>
              <h3 class="text-2xl font-bold text-sumi-800 mb-4">
                {{ item.title }}
              </h3>
              <p class="text-sumi-600 leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div v-for="(feature, index) in homeData.features.items.slice(0, 3)" :key="index"
              class="group p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-sky-100 hover:shadow-xl hover:border-sky-200 transition-all duration-300 hover:-translate-y-1">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg"
                  :class="productBgColors[index]">
                  <img :src="productLogos[index]" :alt="feature.title" class="w-6 h-6 object-contain" />
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-bold text-sumi-800 mb-1">
                    {{ feature.title }}
                  </h4>
                  <p class="text-sm text-sky-600 font-medium mb-2">
                    {{ feature.desc }}
                  </p>
                  <p class="text-sm text-sumi-500 leading-relaxed mb-4">
                    {{ feature.detail }}
                  </p>
                  <a :href="productUrls[index]" target="_blank" rel="noopener"
                    class="inline-flex items-center space-x-2 text-sky-600 font-medium hover:text-sky-700 group-hover:translate-x-2 transition-all duration-300">
                    <span>{{ homeData.whatWeDo.learnMore }}</span>
                    <ArrowRight class="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" class="py-20 md:py-28 bg-white relative overflow-hidden">
        <div class="absolute inset-0 seigaiha-pattern opacity-10"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div
              class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-coral-100 text-coral-600 text-sm font-medium mb-4">
              <Layers class="w-4 h-4" />
              <span>{{ homeData.solutions.sectionLabel }}</span>
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-sumi-800 mb-4">
              {{ homeData.solutions.title }}
            </h2>
            <p class="text-lg text-sumi-600 max-w-2xl mx-auto">
              {{ homeData.solutions.description }}
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="(solution, index) in homeData.solutions.items" :key="index"
              class="group p-6 rounded-2xl bg-washi-50 border border-washi-200 hover:shadow-xl hover:border-sky-200 transition-all duration-300 text-center hover:-translate-y-1">
              <div
                class="w-14 h-14 rounded-xl bg-gradient-to-br from-washi-100 to-washi-50 group-hover:from-sky-100 group-hover:to-sky-50 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                <component :is="solutionIcons[index]"
                  class="w-7 h-7 text-sumi-500 group-hover:text-sky-500 transition-colors" />
              </div>
              <h4 class="text-lg font-semibold text-sumi-800 mb-2">
                {{ solution.title }}
              </h4>
              <p class="text-sm text-sumi-500">
                {{ solution.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" class="py-20 md:py-28 bg-gradient-to-b from-washi-50 to-white relative overflow-hidden">
        <div class="absolute inset-0 seigaiha-pattern opacity-10"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div
              class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-seigaiha-100 text-seigaiha-600 text-sm font-medium mb-4">
              <Brain class="w-4 h-4" />
              <span>{{ homeData.technology.sectionLabel }}</span>
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-sumi-800 mb-4">
              {{ homeData.technology.title }}
            </h2>
            <p class="text-lg text-sumi-600 max-w-2xl mx-auto">
              {{ homeData.technology.subtitle }}
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(tech, index) in homeData.technology.items" :key="index"
              class="bg-white rounded-2xl p-8 border border-washi-200 shadow-soft hover:shadow-xl hover:border-sky-200 transition-all duration-300">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6"
                :class="tech.bgColor">
                <component :is="getTechIcon(tech.icon)" class="w-7 h-7" :class="tech.iconColor" />
              </div>
              <h3 class="text-xl font-bold text-sumi-800 mb-3">{{ tech.title }}</h3>
              <p class="text-sumi-600 leading-relaxed mb-5">{{ tech.description }}</p>
              <div class="space-y-2">
                <div v-for="(feature, fIdx) in tech.features" :key="fIdx"
                  class="flex items-center space-x-2 text-sm text-sumi-600">
                  <Check class="w-4 h-4 text-seigaiha-500 flex-shrink-0" />
                  <span>{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-zifu"
        class="py-20 md:py-28 bg-gradient-to-br from-sky-500 via-seigaiha-500 to-wisteria-500 relative overflow-hidden">
        <div class="absolute inset-0 seigaiha-pattern opacity-10"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div
              class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
              <Shield class="w-4 h-4" />
              <span>{{ homeData.whyZifu.sectionLabel }}</span>
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {{ homeData.whyZifu.title }}
            </h2>
            <p class="text-lg text-white/80 max-w-2xl mx-auto">
              {{ homeData.whyZifu.description }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div v-for="(item, index) in homeData.whyZifu.items" :key="index"
              class="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <component :is="whyZifuIcons[index]" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="text-lg font-bold text-white mb-1">
                    {{ item.title }}
                  </h4>
                  <p class="text-sm text-white/70 leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <a :href="`/${currentLocale}/products`"
              class="inline-flex items-center space-x-2 px-10 py-5 rounded-2xl bg-white text-sumi-800 font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl">
              <span>{{ homeData.cta.primaryButton }}</span>
              <ArrowRight class="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>

    <section class="relative">
      <div
        class="absolute bottom-full left-0 right-0 h-40 bg-gradient-to-t from-sumi-900 via-sumi-900/30 to-transparent pointer-events-none">
      </div>
      <Footer />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  ArrowRight,
  Zap,
  Palette,
  Building2,
  BookOpen,
  Image,
  Camera,
  Users,
  Briefcase,
  TrendingUp,
  Brain,
  Shield,
  Globe,
  Server,
  Lock,
  RefreshCw,
  Rocket,
  Layers,
  Sparkles,
  Check,
  Cloud
} from 'lucide-vue-next'
import { messages } from '@/locales'
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'
import notegptLogo from '@/assets/logo/notegpt.png'
import visualgptLogo from '@/assets/logo/visualgpt.png'
import photogptLogo from '@/assets/logo/photogpt.png'

type Locale = keyof typeof messages

const { locale } = useI18n()

const effectiveLocale = computed<Locale>(() => {
  const loc = locale.value as string
  if (loc in messages) return loc as Locale
  return 'ja' as Locale
})

defineProps<{
  currentLocale: string
}>()

const emit = defineEmits<{
  (e: 'change-locale', lang: string): void
}>()

const handleLocaleChange = (lang: string) => {
  emit('change-locale', lang)
}

const homeData = computed(() => messages[effectiveLocale.value]?.home)

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

const whatWeDoIcons = [Zap, Palette, Building2]
const solutionIcons = [BookOpen, Image, Camera, Users, Briefcase, TrendingUp, Brain, Globe]
const whyZifuIcons = [Rocket, Shield, Globe, Server, Lock, RefreshCw]

const productLogos = [notegptLogo, visualgptLogo, photogptLogo]
const productBgColors = ['from-sky-100 to-sky-200', 'from-wisteria-100 to-wisteria-200', 'from-coral-100 to-coral-200']

const productUrls = [
  'https://notegpt.io',
  'https://visualgpt.io',
  'https://photogpt.io'
]

const iconMap: Record<string, any> = {
  brain: Brain,
  cloud: Cloud,
  layers: Layers
}

const getTechIcon = (iconName: string) => {
  return iconMap[iconName] || Brain
}

const baseLogos = [
  { id: 1, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo1.png', alt: 'Enterprise Logo 1' },
  { id: 2, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo-youtube.png', alt: 'YouTube' },
  { id: 3, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo2.png', alt: 'Enterprise Logo 2' },
  { id: 4, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo3.png', alt: 'Enterprise Logo 3' },
  { id: 5, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo4.png', alt: 'Enterprise Logo 4' },
  { id: 6, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo5.png', alt: 'Enterprise Logo 5' },
  { id: 7, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo6.png', alt: 'Enterprise Logo 6' },
  { id: 8, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo7.png', alt: 'Enterprise Logo 7' },
  { id: 9, src: 'https://cdn.static-boost.com/photogpt/static/logo-icon/1.png', alt: 'PhotoGPT Enterprise 1' },
  { id: 10, src: 'https://cdn.static-boost.com/photogpt/static/logo-icon/2.png', alt: 'PhotoGPT Enterprise 2' },
  { id: 11, src: 'https://cdn.static-boost.com/visualgpt/static/logo/BUSINESS_INSIDER.png', alt: 'Business Insider' },
  { id: 12, src: 'https://cdn.static-boost.com/visualgpt/static/logo/FOX.png', alt: 'FOX' },
  { id: 13, src: 'https://cdn.static-boost.com/visualgpt/static/logo/NBC.png', alt: 'NBC' },
  { id: 14, src: 'https://cdn.static-boost.com/visualgpt/static/logo/Amazon_logo.webp', alt: 'Amazon' },
]
</script>
