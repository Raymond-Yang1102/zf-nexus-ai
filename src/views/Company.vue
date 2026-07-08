<template>
  <div class="min-h-screen bg-white">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />
    <main class="pt-16">
      
      <!-- <section class="relative py-16 hero-bg-indigo overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        </div>
      </section> -->

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">{{ companyData.ceoMessage.title }}</h2>
          <div class="prose prose-lg text-gray-600 leading-relaxed text-center">
            <p v-for="(paragraph, index) in companyData.ceoMessage.content" :key="index"
               :class="paragraph.endsWith('。') || paragraph.endsWith('.') ? 'mb-8' : 'mb-4'">
              {{ paragraph }}
            </p>
          </div>
          <p class="text-center text-gray-600 mt-8 font-medium">{{ companyData.ceoMessage.signature }}</p>
        </div>
      </section>

      <!-- 经营理念 -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-12 ">{{ companyData.philosophy.title }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(item, index) in companyData.philosophy.items" :key="index"
              class="p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <!-- <div
                class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-6">
                <component :is="philosophyIcons[index]" class="w-7 h-7 text-blue-600" />
              </div> -->
              <h3 class="text-xl font-bold text-gray-800 mb-3 min-h-16 whitespace-nowrap">{{ item.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed ja-body-text zh-body-text">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 事业概要 -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">{{ companyData.overview.title }}</h2>
          <div class="prose prose-lg text-gray-600 leading-relaxed text-center">
            <p v-for="(paragraph, index) in companyData.overview.content" :key="index" class="mb-4">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </section>

      <!-- 事业内容 -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-12 ">{{ companyData.business.title }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(item, index) in companyData.business.items" :key="index"
              class="p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <!-- <div
                class="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mb-6">
                <component :is="businessIcons[index]" class="w-7 h-7 text-green-600" />
              </div> -->
              <h3 class="text-xl font-bold text-gray-800 mb-3 min-h-16">{{ item.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed ja-body-text zh-body-text">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8 ">{{ companyData.companyInfo.title }}</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <tbody>
                <tr v-for="(row, index) in companyData.companyInfo.table" :key="index" class="border-b border-gray-200">
                  <th class="text-left py-4 px-6 font-semibold text-gray-800 w-1/3">{{ row.label }}</th>
                  <td class="text-left py-4 px-6 text-gray-600">{{ row.value }}</td>
                </tr>
              </tbody>
            </table>
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

const companyData = computed(() => messages[effectiveLocale.value]?.company)
</script>
