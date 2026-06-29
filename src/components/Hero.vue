<template>
  <section id="home"
    class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-sky-50 via-washi-50 to-wisteria-50"></div>

    <div class="absolute inset-0 seigaiha-pattern opacity-20"></div>

    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-16 left-1/4 w-64 h-64 bg-sky-300/20 rounded-full blur-3xl animate-float-japanese"></div>
      <div
        class="absolute bottom-16 right-1/4 w-80 h-80 bg-wisteria-300/20 rounded-full blur-3xl animate-float-japanese"
        style="animation-delay: -2s;"></div>
      <div
        class="absolute top-1/3 right-1/3 w-56 h-56 bg-coral-200/20 rounded-full blur-3xl animate-float-japanese"
        style="animation-delay: -4s;"></div>
    </div>

    <div class="absolute inset-0 washi-texture opacity-30"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-30">
      <div class="text-center">
        <div
          class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-200 shadow-md mb-7 animate-fade-in">
          <div class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
          <span class="text-sumi-700 text-sm font-medium">{{ heroData.companyBadge }}</span>
        </div>

        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-sumi-800 mb-5 animate-slide-up leading-tight">
          <span class="text-gradient-japanese">{{ heroData.companyTitle }}</span>
        </h1>

        <p class="text-lg sm:text-xl md:text-2xl text-sumi-600 max-w-3xl mx-auto mb-7 animate-slide-up delay-200 leading-relaxed">
          {{ heroData.companySubtitle }}
        </p>

        <div class="flex flex-wrap justify-center gap-2.5 mb-10 animate-slide-up delay-300">
          <span v-for="(highlight, index) in heroData.companyHighlights" :key="index"
            class="px-4 py-2 rounded-full bg-white/80 text-sumi-700 text-sm font-medium border border-washi-200 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300">
            {{ highlight }}
          </span>
        </div>

        <!-- <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-400">
          <a :href="`/${effectiveLocale}/products`"
            class="group px-7 py-3.5 rounded-2xl btn-gradient-japanese text-white font-medium text-base flex items-center space-x-2 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg">
            <span>{{ heroData.ctaProducts }}</span>
            <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div> -->

        <div class="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto animate-fade-in delay-500">
          <div v-for="(stat, index) in heroData.stats" :key="index"
            class="p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-washi-200 shadow-md hover:shadow-lg hover:border-sky-200 transition-all duration-300 hover:-translate-y-1 group">
            <div class="text-2xl md:text-3xl font-bold text-gradient-japanese mb-1 group-hover:scale-110 transition-transform duration-300">{{ stat.value }}</div>
            <div class="text-xs text-sumi-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-gentle">
      <div class="w-6 h-10 rounded-full border-2 border-sumi-300 flex items-start justify-center p-2">
        <div class="w-1.5 h-3 bg-sky-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
// import { ArrowRight } from 'lucide-vue-next'
import { messages } from '@/locales'

type Locale = keyof typeof messages

const { locale } = useI18n()

const effectiveLocale = computed<Locale>(() => {
  const loc = locale.value as string
  if (loc in messages) return loc as Locale
  return 'ja' as Locale
})

const heroData = computed(() => messages[effectiveLocale.value]?.hero)
</script>
