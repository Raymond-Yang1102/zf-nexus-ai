<template>
  <section id="products" class="py-24 bg-washi-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-sumi-800 mb-4">
          {{ productsData.title }}
        </h2>
        <p class="text-lg text-sumi-600 max-w-2xl mx-auto">
          {{ productsData.description }}
        </p>
      </div>

      <div class="space-y-8">
        <div v-for="product in products" :key="product.key"
          class="bg-white rounded-3xl border transition-all duration-500 hover:shadow-card"
          :class="product.borderColor">
          <div class="p-8 lg:p-10">
            <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div class="lg:w-1/3 flex flex-col">
                <div
                  @click="openProduct(product.url)"
                  class="group cursor-pointer select-none">
                  <div class="w-20 h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <img :src="product.logo" :alt="getProductData(product.key).name" class="w-14 h-14 object-contain" />
                  </div>

                  <h3 class="text-2xl font-bold text-sumi-800 mb-2 group-hover:text-sky-500 transition-colors">
                    {{ getProductData(product.key).name }}
                  </h3>

                  <p class="text-sm font-semibold text-sky-500 mb-4">
                    {{ getProductData(product.key).tagline }}
                  </p>
                </div>

                <p class="text-sumi-600 mb-6 leading-relaxed">
                  {{ getProductData(product.key).description }}
                </p>

                <div class="mb-6 p-4 rounded-xl bg-gradient-to-r from-sky-50 to-washi-50">
                  <h4 class="text-sm font-semibold text-sumi-700 mb-2">{{ labels.advantages }}</h4>
                  <div class="grid grid-cols-1 gap-2">
                    <div v-for="(advantage, index) in getProductData(product.key).advantages" :key="index"
                      class="flex items-center justify-between text-sm">
                      <span class="text-sumi-700 font-medium">{{ advantage.title }}</span>
                      <span class="text-xs px-2 py-1 rounded-full bg-sky-100 text-sky-600 font-medium">{{ advantage.desc }}</span>
                    </div>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="(useCase, index) in getProductData(product.key).useCases" :key="index"
                    class="px-4 py-2 rounded-full bg-washi-100 text-sumi-600 text-sm font-medium">
                    {{ useCase }}
                  </span>
                </div>

                <a :href="product.url" target="_blank" rel="noopener noreferrer"
                  v-if="getProductData(product.key).cta"
                  class="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-gradient-to-r"
                  :class="product.bgGradient">
                  <span>{{ getProductData(product.key).cta }}</span>
                  <ArrowRight class="w-4 h-4" />
                </a>

                <p class="mt-4 text-sm text-center text-sumi-500">
                  {{ getProductData(product.key).userValue }}
                </p>
              </div>

              <div class="lg:w-2/3">
                <button 
                  @click="toggleFeature(product.key)"
                  class="w-full flex items-center justify-between mb-6 p-4 rounded-xl bg-washi-50 hover:bg-washi-100 transition-colors"
                >
                  <span class="text-lg font-semibold text-sumi-800">{{ labels.coreFeatures }}</span>
                  <ChevronDown v-if="expandedFeature !== product.key" class="w-5 h-5 text-sumi-500" />
                  <ChevronUp v-else class="w-5 h-5 text-sumi-500" />
                </button>

                <div v-if="expandedFeature === product.key" class="space-y-4">
                  <div v-for="(feature, index) in getProductData(product.key).detailedFeatures" :key="index"
                    class="p-6 rounded-xl border border-washi-200 bg-white hover:border-sky-200 transition-colors">
                    <h4 class="text-lg font-semibold text-sumi-800 mb-3">{{ feature.title }}</h4>
                    <p class="text-sumi-600 mb-4">{{ feature.description }}</p>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="(item, itemIndex) in feature.items" :key="itemIndex"
                        class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-washi-50 text-sumi-600 text-sm">
                        <Check class="w-3 h-3 text-seigaiha-500" />
                        <span>{{ item }}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div v-for="(feature, index) in getProductData(product.key).detailedFeatures" :key="index"
                    class="p-5 rounded-xl border border-washi-200 hover:border-sky-200 hover:shadow-sm transition-all cursor-pointer"
                    @click="toggleFeature(product.key)">
                    <h4 class="text-sm font-semibold text-sumi-800 mb-2">{{ feature.title }}</h4>
                    <p class="text-sumi-500 text-sm line-clamp-2">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-vue-next'
import { messages } from '../locales'
import notegptLogo from '../assets/logo/notegpt.png'
import visualgptLogo from '../assets/logo/visualgpt.png'
import photogptLogo from '../assets/logo/photogpt.png'

type Locale = keyof typeof messages

const { locale } = useI18n()

const effectiveLocale = computed<Locale>(() => {
  const loc = locale.value as string
  if (loc in messages) return loc as Locale
  return 'ja' as Locale
})

const expandedFeature = ref<string | null>(null)

const products = [
  {
    key: 'noteGPT' as const,
    logo: notegptLogo,
    borderColor: 'border-sky-200',
    bgGradient: 'from-sky-500 to-sky-600',
    url: 'https://notegpt.io'
  },
  {
    key: 'visualGPT' as const,
    logo: visualgptLogo,
    borderColor: 'border-wisteria-200',
    bgGradient: 'from-wisteria-500 to-wisteria-600',
    url: 'https://visualgpt.io'
  },
  {
    key: 'photoGPT' as const,
    logo: photogptLogo,
    borderColor: 'border-seigaiha-200',
    bgGradient: 'from-seigaiha-500 to-seigaiha-600',
    url: 'https://photogpt.io'
  }
]

const productsData = computed(() => messages[effectiveLocale.value]?.products)

const labels = computed(() => messages[effectiveLocale.value]?.products?.labels)

const getProductData = (key: 'noteGPT' | 'visualGPT' | 'photoGPT') => {
  return productsData.value[key]
}

const toggleFeature = (productKey: string) => {
  expandedFeature.value = expandedFeature.value === productKey ? null : productKey
}

const openProduct = (url: string) => {
  window.open(url, '_blank', 'noopener noreferrer')
}
</script>
