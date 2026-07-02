<template>
  <div class="min-h-screen bg-white">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />
    <main class="pt-16">
      <section class="relative py-16 hero-bg-indigo overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 brand-gradient-text filter-text-shadow animate-fade-in">{{ technologyData.hero.title }}</h1>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">{{ technologyData.overview.title }}</h2>
          <div class="prose prose-lg text-gray-600 leading-relaxed">
            <p v-for="(paragraph, index) in technologyData.overview.content" :key="index" class="mb-4">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 text-center mb-12">{{ technologyData.coreTech.title }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(item, index) in technologyData.coreTech.items" :key="index"
              class="p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6"
                :class="coreTechBgColors[index]">
                <component :is="coreTechIcons[index]" class="w-7 h-7" :class="coreTechIconColors[index]" />
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">{{ item.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ item.description }}</p>
              <span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                {{ item.product }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">{{ technologyData.rnd.title }}</h2>
          <div class="prose prose-lg text-gray-600 leading-relaxed">
            <p v-for="(paragraph, index) in technologyData.rnd.content" :key="index" class="mb-4">
              {{ paragraph }}
            </p>
          </div>
          <div class="mt-8 bg-gray-50 rounded-2xl p-6">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Users class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">{{ messages[effectiveLocale]?.technology?.globalTeam }}</h3>
                <p class="text-sm text-gray-600">{{ messages[effectiveLocale]?.technology?.globalTeamDesc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">{{ technologyData.infrastructure.title }}</h2>
          <div class="prose prose-lg text-gray-600 leading-relaxed">
            <p v-for="(paragraph, index) in technologyData.infrastructure.content" :key="index" class="mb-4">
              {{ paragraph }}
            </p>
          </div>
          <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="(item, index) in infrastructureItems" :key="index"
              class="p-4 rounded-xl bg-white border border-gray-100 text-center">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mx-auto mb-3">
                <component :is="infrastructureIcons[index]" class="w-5 h-5 text-blue-600" />
              </div>
              <span class="text-sm font-medium text-gray-700">{{ item }}</span>
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
  Users,
  Cloud,
  Server,
  Shield,
  HeadphonesIcon
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

const infrastructureItems = computed(() => messages[effectiveLocale.value]?.technology?.infrastructureItems || [])

const infrastructureIcons = [Cloud, Server, Shield, HeadphonesIcon]
</script>
