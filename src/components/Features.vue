<template>
  <section id="features" class="py-12 bg-gradient-to-b from-white to-washi-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-sumi-800 mb-4">
          {{ title }}
        </h2>
        <p class="text-lg text-sumi-600 max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        <div v-for="(highlight, index) in highlights" :key="index"
          class="flex flex-col items-center p-6 rounded-2xl bg-white border border-washi-200 shadow-soft hover:shadow-card transition-all duration-300">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-50 to-wisteria-100 flex items-center justify-center mb-4">
            <span class="text-xl font-bold text-sky-500">{{ highlight.value.charAt(0) }}</span>
          </div>
          <div class="text-3xl font-bold text-sumi-800 mb-1">{{ highlight.value }}</div>
          <div class="text-sm text-sumi-500">{{ highlight.label }}</div>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="index"
          class="group p-8 rounded-2xl border border-washi-200 bg-white hover:border-sky-200 hover:bg-sky-50/30 hover:shadow-card transition-all duration-300">
          <div
            class="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <component :is="featureIcons[index]" class="w-7 h-7 text-sky-500" />
          </div>

          <h3 class="text-xl font-semibold text-sumi-800 mb-3">
            {{ feature.title }}
          </h3>

          <p class="text-sumi-600 mb-4">
            {{ feature.desc }}
          </p>

          <p class="text-sm text-sumi-500 leading-relaxed">
            {{ feature.detail }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {  Zap, Shield,Brain, Globe, Cloud, Clock } from 'lucide-vue-next'
import { messages } from '../locales'

type Locale = keyof typeof messages

const { locale } = useI18n()

const effectiveLocale = computed(() => {
  const loc = locale.value as string
  if (loc in messages) return loc as Locale
  return 'ja' as Locale
})

const featureIcons = [Brain, Globe, Cloud, Zap, Shield, Clock]

const features = computed(() => {
  return messages[effectiveLocale.value]?.features?.items
})

const title = computed(() => {
  return messages[effectiveLocale.value]?.features?.title
})

const description = computed(() => {
  return messages[effectiveLocale.value]?.features?.description
})

const highlights = computed(() => {
  return messages[effectiveLocale.value]?.features?.highlights
})
</script>
