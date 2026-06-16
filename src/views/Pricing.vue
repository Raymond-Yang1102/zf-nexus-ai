<template>
  <div class="min-h-screen bg-washi-50">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />

    <main class="pt-16">
      <section class="py-16 bg-gradient-to-br from-white via-washi-50 to-washi-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <div
              class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-washi-200 shadow-soft mb-6">
              <Sparkles class="w-4 h-4 text-coral-500" />
              <span class="text-sumi-600 text-sm font-medium">{{ messages[effectiveLocale]?.pricing?.subtitle }}</span>
            </div>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-sumi-800 mb-4">
              {{ messages[effectiveLocale]?.pricing?.title }}
            </h1>
            <p class="text-lg text-sumi-600 max-w-2xl mx-auto">
              {{ messages[effectiveLocale]?.pricing?.subtitle }}
            </p>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="product in products" :key="product.key"
              class="group bg-white rounded-3xl p-8 border card-hover-japanese cursor-pointer overflow-hidden relative"
              :class="product.borderColor" @click="selectProduct(product.url)">
              <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                :class="product.gradient"></div>

              <div class="relative">
                <div
                  :class="['w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110', product.bgColor]">
                  <component :is="product.icon" :class="['w-10 h-10', product.iconColor]" />
                </div>

                <h3 class="text-2xl font-bold text-sumi-800 mb-2">
                  {{ pricingData[product.plan].name }}
                </h3>

                <p class="text-sumi-600 mb-6">
                  {{ pricingData[product.plan].description }}
                </p>

                <div class="mb-6">
                  <h4 class="text-sm font-semibold text-sumi-700 mb-3">
                    {{ messages[effectiveLocale]?.features?.title }}
                  </h4>
                  <div class="space-y-3">
                    <div v-for="feature in pricingData[product.plan].features" :key="feature"
                      class="flex items-center space-x-2">
                      <Check class="w-5 h-5 text-seigaiha-500" />
                      <span class="text-sumi-600 text-sm">{{ feature }}</span>
                    </div>
                  </div>
                </div>

                <div class="mb-6 p-4 rounded-2xl bg-washi-50">
                  <h4 class="text-sm font-semibold text-sumi-700 mb-3">
                    {{ messages[effectiveLocale]?.hero?.highlights?.[2] }}
                  </h4>
                  <div class="grid grid-cols-1 gap-2">
                    <div v-for="(plan, index) in pricingData[product.plan].plans" :key="index"
                      :class="['px-4 py-2 rounded-xl text-sm font-medium', index === 1 ? 'bg-white border border-washi-200 text-sumi-700' : 'text-sumi-500']">
                      {{ plan.name }} - {{ plan.description }}
                    </div>
                  </div>
                </div>

                <button
                  class="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r transition-all duration-300 hover:shadow-lg hover:shadow-sky-200 hover:-translate-y-0.5"
                  :class="product.gradient">
                  <span>{{ pricingData[product.plan].plans[1].cta }}</span>
                  <ExternalLink class="w-4 h-4" />
                </button>

                <p class="mt-4 text-xs text-center text-sumi-400 flex items-center justify-center space-x-1">
                  <!-- <span>{{ messages[effectiveLocale]?.footer?.sections?.support }}</span> -->
                  <ArrowRight class="w-3 h-3" />
                  <span>{{ product.url }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-2xl font-bold text-sumi-800 mb-4">
            {{ messages[effectiveLocale]?.cta?.title }}
          </h2>
          <p class="text-sumi-600 mb-8">
            {{ messages[effectiveLocale]?.cta?.subtitle }}
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              class="px-8 py-4 rounded-xl btn-gradient-japanese text-white font-medium text-lg flex items-center space-x-2 hover:scale-105 transition-all duration-300"
              @click="selectProduct('https://notegpt.io/pricing')">
              <span>{{ messages[effectiveLocale]?.cta?.cta }}</span>
              <ArrowRight class="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { FileText, Image, Camera, ArrowRight, Check, Sparkles, ExternalLink } from 'lucide-vue-next'
import { messages } from '../locales'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

type Locale = keyof typeof messages

defineProps<{
  currentLocale: string
}>()

const emit = defineEmits<{
  (e: 'change-locale', lang: string): void
}>()

const { locale } = useI18n()

// 安全校验 locale 值，确保匹配 messages 的 key
const effectiveLocale = computed<Locale>(() => {
  const loc = locale.value as string
  if (loc in messages) return loc as Locale
  return 'ja' as Locale
})

const pricingData = computed(() => messages[effectiveLocale.value]?.pricing ?? {})

const products: {
  key: 'noteGPT' | 'visualGPT' | 'photoGPT'
  icon: typeof FileText | typeof Image | typeof Camera
  gradient: string
  bgColor: string
  iconColor: string
  borderColor: string
  accentColor: string
  plan: 'noteGPT' | 'visualGPT' | 'photoGPT'
  url: string
}[] = [
    {
      key: 'noteGPT',
      icon: FileText,
      gradient: 'from-sky-400 to-sky-600',
      bgColor: 'bg-sky-50',
      iconColor: 'text-sky-500',
      borderColor: 'border-sky-200',
      accentColor: 'text-sky-600',
      plan: 'noteGPT',
      url: 'https://notegpt.io/pricing'
    },
    {
      key: 'visualGPT',
      icon: Image,
      gradient: 'from-wisteria-400 to-wisteria-600',
      bgColor: 'bg-wisteria-50',
      iconColor: 'text-wisteria-500',
      borderColor: 'border-wisteria-200',
      accentColor: 'text-wisteria-600',
      plan: 'visualGPT',
      url: 'https://visualgpt.io/pricing'
    },
    {
      key: 'photoGPT',
      icon: Camera,
      gradient: 'from-seigaiha-400 to-seigaiha-600',
      bgColor: 'bg-seigaiha-50',
      iconColor: 'text-seigaiha-500',
      borderColor: 'border-seigaiha-200',
      accentColor: 'text-seigaiha-600',
      plan: 'photoGPT',
      url: 'https://photogpt.io/pricing'
    }
  ]

const selectProduct = (url: string) => {
  window.open(url, '_blank', 'noopener noreferrer')
}

const handleLocaleChange = (lang: string) => {
  emit('change-locale', lang)
}
</script>
