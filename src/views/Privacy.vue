<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Shield, FileText } from 'lucide-vue-next'
import { messages } from '../locales'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

defineProps<{
  currentLocale: string
}>()

const emit = defineEmits<{
  (e: 'change-locale', lang: string): void
}>()

type Locale = keyof typeof messages

const { locale } = useI18n()

const effectiveLocale = computed<Locale>(() => {
  const loc = locale.value as string
  if (loc in messages) return loc as Locale
  return 'ja' as Locale
})

const privacyData = computed(() => messages[effectiveLocale.value]?.privacy)

const handleLocaleChange = (lang: string) => {
  emit('change-locale', lang)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />
    
    <main class="pt-16">
      <section class="py-12 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center space-x-4 mb-8">
            <div class="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
              <Shield class="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 class="text-3xl font-bold text-gray-900">{{ privacyData.title }}</h1>
              <p class="text-gray-600">{{ privacyData.lastUpdated }}</p>
            </div>
          </div>
          
          <div class="prose prose-lg max-w-none">
            <div v-for="(section, index) in privacyData.sections" :key="index">
              <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <FileText class="w-5 h-5 text-gray-400" />
                <span>{{ section.title }}</span>
              </h2>
              <p class="text-gray-600 mb-4">{{ section.content }}</p>
              <ul v-if="section.items" class="space-y-2 mb-4">
                <li v-for="(item, itemIndex) in section.items" :key="itemIndex" class="flex items-start space-x-2 text-gray-600">
                  <span class="text-cyan-600 mt-1">•</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>
