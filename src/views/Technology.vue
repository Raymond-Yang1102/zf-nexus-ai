<template>
  <div class="min-h-screen bg-white">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />
    <main class="pt-16">

      <!-- <section class="relative py-16 hero-bg-indigo overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800  animate-fade-in">{{
            technologyData.hero.title }}</h1>
        </div>
      </section> -->

      <!-- 技术概要 -->
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">{{ technologyData.overview.title }}</h2>
          <div class="prose prose-lg text-gray-600 leading-relaxed text-center whitespace-pre-line">
            <p v-for="(paragraph, index) in technologyData.overview.content" :key="index" class="mb-4">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </section>

      <!-- 核心技术 -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-12 ">{{ technologyData.coreTech.title }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(item, index) in technologyData.coreTech.items" :key="index"
              class="p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6"
                :class="coreTechBgColors[index]">
                <component :is="coreTechIcons[index]" class="w-7 h-7" :class="coreTechIconColors[index]" />
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3 ">{{ item.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-4 ja-body-text flex-1">{{ item.description }}</p>
              <span class="inline-block self-start px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                {{ item.product }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- 研究开发体制 -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 items-center">
            <div class="lg:w-1/2">
              <h2 class="text-2xl font-bold text-gray-800 mb-8">{{ technologyData.rnd.title }}</h2>
              <div class="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line">
                <p v-for="(paragraph, index) in technologyData.rnd.content" :key="index" class="mb-4">
                  {{ paragraph }}
                </p>
              </div>
            </div>
            <div class="lg:w-1/2">
              <div class="w-full aspect-video rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
                <!-- <Globe class="w-24 h-24 text-white/30" /> -->
                 <img src="@/assets/images/研究开发体制.jpg" alt="研究开发" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 基础设施 -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 items-center">
            <div class="lg:w-1/2">
              <h2 class="text-2xl font-bold text-gray-800 mb-8">{{ technologyData.infrastructure.title }}</h2>
              <div class="prose prose-lg text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                <p v-for="(paragraph, index) in technologyData.infrastructure.content.slice(0, 2)" :key="`intro-${index}`" class="mb-4">
                  {{ paragraph }}
                </p>
              </div>
              <ul class="space-y-2 mb-6">
                <li v-for="(item, index) in technologyData.infrastructure.content.slice(2, 6)" :key="`item-${index}`" class="flex items-start space-x-2 text-gray-600">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span>{{ item }}</span>
                </li>
              </ul>
              <p class="text-gray-600 leading-relaxed">{{ technologyData.infrastructure.content[6] }}</p>
            </div>
            <div class="lg:w-1/2">
              <div class="w-full aspect-video rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center overflow-hidden">
                <!-- <Cloud class="w-24 h-24 text-white/30" /> -->
                 <img src="@/assets/images/基础设施.png" alt="基础设施" class="w-full h-full object-cover" />
              </div>
            </div>
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
import {
  Brain,
  PenTool,
  Image,
} from 'lucide-vue-next'
import { messages } from '@/locales'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

type Locale = keyof typeof messages

const { locale } = useI18n()

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

const technologyData = computed(() => messages[effectiveLocale.value]?.technology)

const coreTechIcons = [Brain, PenTool, Image]
const coreTechBgColors = ['from-blue-100 to-blue-200', 'from-purple-100 to-purple-200', 'from-green-100 to-green-200']
const coreTechIconColors = ['text-blue-600', 'text-purple-600', 'text-green-600']


</script>
