<template>
  <div class="min-h-screen bg-white">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />
    <main class="pt-16">
      <section class="relative py-16 hero-bg-indigo overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 brand-gradient-text filter-text-shadow animate-fade-in">{{ teamData.hero.title }}</h1>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">{{ teamData.overview.title }}</h2>
          <div class="prose prose-lg text-gray-600 leading-relaxed">
            <p v-for="(paragraph, index) in teamData.overview.content" :key="index" class="mb-4">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 text-center mb-12">{{ teamData.members.title }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(member, index) in teamData.members.items" :key="index"
              class="p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div class="flex items-start space-x-6">
                <div class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                  <User class="w-12 h-12 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-800 mb-1">{{ member.name }}</h3>
                  <p class="text-blue-600 font-medium mb-4">{{ member.title }}</p>
                  <div class="prose prose-sm text-gray-600 leading-relaxed">
                    <p v-for="(paragraph, pIndex) in member.bio" :key="pIndex" class="mb-2">
                      {{ paragraph }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">{{ teamData.philosophy.title }}</h2>
          <div class="prose prose-lg text-gray-600 leading-relaxed">
            <p v-for="(paragraph, index) in teamData.philosophy.content" :key="index" class="mb-4">
              {{ paragraph }}
            </p>
          </div>
          <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="(value, index) in teamValues" :key="index"
              class="p-6 rounded-xl bg-gray-50 border border-gray-100 text-center">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mx-auto mb-4">
                <component :is="valueIcons[index]" class="w-6 h-6 text-blue-600" />
              </div>
              <span class="text-sm font-medium text-gray-700">{{ value }}</span>
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
  User, 
  Lightbulb, 
  GraduationCap,
  Globe
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

const teamData = computed(() => messages[effectiveLocale.value]?.team)

const teamValues = computed(() => messages[effectiveLocale.value]?.team?.values || [])

const valueIcons = [Lightbulb, GraduationCap, Globe]
</script>
