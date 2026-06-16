<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Sparkles, ArrowRight } from 'lucide-vue-next'
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

const heroData = computed(() => messages[effectiveLocale.value]?.hero)

const productLogos = [notegptLogo, visualgptLogo, photogptLogo]

const productsData = computed(() => messages[effectiveLocale.value]?.products)

/** 滚动到产品区域（补偿固定页眉高度） */
const scrollToProducts = () => {
  const el = document.getElementById('products')
  if (!el) return
  const HEADER_OFFSET = 64
  const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top: y, behavior: 'smooth' })
}
</script>

<template>
  <section id="home"
    class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-washi-50 via-white to-washi-100">
    <div class="absolute inset-0 muji-gradient"></div>

    <div class="absolute inset-0 seigaiha-pattern opacity-30"></div>

    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-1/4 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl animate-float-japanese"></div>
      <div
        class="absolute bottom-20 right-1/4 w-96 h-96 bg-wisteria-200/30 rounded-full blur-3xl animate-float-japanese"
        style="animation-delay: -2s;"></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-coral-100/20 rounded-full blur-3xl">
      </div>
    </div>

    <div class="absolute inset-0 washi-texture opacity-50"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div class="text-center">
        <div
          class="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-washi-300 shadow-soft mb-8 animate-fade-in">
          <Sparkles class="w-4 h-4 text-sky-500" />
          <span class="text-sumi-700 text-sm font-medium">{{ heroData.highlights[0] }}</span>
        </div>

        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-sumi-800 mb-6 animate-slide-up leading-tight">
          <span class="text-gradient-japanese">{{ heroData.title }}</span>
        </h1>

        <p class="text-lg sm:text-xl text-sumi-600 max-w-3xl mx-auto mb-8 animate-slide-up delay-200 leading-relaxed">
          {{ heroData.subtitle }}
        </p>

        <div class="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up delay-300">
          <span v-for="(highlight, index) in heroData.highlights" :key="index"
            class="px-4 py-2 rounded-full bg-washi-100 text-sumi-700 text-sm font-medium border border-washi-200">
            {{ highlight }}
          </span>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-400">
          <a href="#products" @click.prevent="scrollToProducts()"
            class="group px-8 py-4 rounded-2xl btn-gradient-japanese text-white font-medium text-lg flex items-center space-x-2 hover:scale-105 hover:shadow-xl transition-all duration-300">
            <span>{{ heroData.cta }}</span>
            <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in delay-500">
          <div v-for="(key, index) in (['noteGPT', 'visualGPT', 'photoGPT'] as const)" :key="key"
            class="group p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-washi-200 shadow-soft hover:shadow-card hover:border-sky-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <div class="flex items-center space-x-3 mb-3">
              <div
                class="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img :src="productLogos[index]" :alt="productsData[key]?.name" class="w-6 h-6 object-contain" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-sumi-800">{{ productsData[key]?.name }}</h3>
              </div>
            </div>
            <p class="text-sm text-sumi-500 mb-3">{{ productsData[key]?.tagline }}</p>
            <span class="text-xs px-3 py-1 rounded-full bg-sky-100 text-sky-600 font-medium">{{
              productsData[key]?.userValue }}</span>
          </div>
        </div>

        <!-- <div class="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in delay-700">
          <div class="text-center">
            <div class="text-3xl sm:text-4xl font-bold text-sky-600">80M+</div>
            <div class="text-sm text-sumi-500 mt-1">{{ heroData.stats.users }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl sm:text-4xl font-bold text-wisteria-600">99%</div>
            <div class="text-sm text-sumi-500 mt-1">{{ heroData.stats.uptime }}</div>
          </div>
          <div class="text-center">
            <div class="text-3xl sm:text-4xl font-bold text-seigaiha-600">24/7</div>
            <div class="text-sm text-sumi-500 mt-1">{{ heroData.stats.support }}</div>
          </div>
        </div> -->
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
      <div class="w-6 h-10 rounded-full border-2 border-sumi-300 flex items-start justify-center p-2">
        <div class="w-1.5 h-3 bg-sumi-400 rounded-full"></div>
      </div>
    </div>
  </section>
</template>
