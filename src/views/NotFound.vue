<template>
  <div class="min-h-screen bg-washi-50 flex flex-col">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />
    
    <main class="flex-1 flex flex-col items-center justify-center px-4 py-16">
      <div class="text-center max-w-md">
        <div class="text-8xl font-bold text-sumi-800 mb-6">404</div>
        <h1 class="text-2xl font-semibold text-sumi-700 mb-4">{{ t('notFound.title') }}</h1>
        <p class="text-sumi-500 mb-8">{{ t('notFound.description') }}</p>
        <button
          @click="goHome"
          class="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {{ t('notFound.backToHome') }}
        </button>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

defineProps<{
  currentLocale: string
}>()

const emit = defineEmits<{
  (e: 'change-locale', lang: string): void
}>()

const router = useRouter()
const { t } = useI18n()

const handleLocaleChange = (lang: string) => {
  emit('change-locale', lang)
}

const goHome = () => {
  router.push('/')
}
</script>