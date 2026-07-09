<template>
  <div class="min-h-screen bg-white">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />
    <main class="pt-16">
      <!-- <section class="relative py-16 hero-bg-indigo overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800  animate-fade-in">{{
            teamData.hero.title }}</h1>
        </div>
      </section> -->

      <!-- 团队 -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">{{ teamData.overview.title }}</h2>
          <div class="prose prose-lg text-gray-600 leading-relaxed text-center">
            <p v-for="(paragraph, index) in teamData.overview.content" :key="index" class="mb-4">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </section>

      <!-- 主要成员 -->
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-12">{{ teamData.members.title }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(member, index) in teamData.members.items" :key="index"
              class="p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ member.name }}</h3>
              <span class="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4"
                :class="member.title.includes('Co-Founder') || member.title.includes('共同創業者') || member.title.includes('联合创始人') ? 'bg-gray-100 text-gray-600' : 'bg-blue-100 text-blue-600'">{{
                member.title }}</span>
              <div class="prose prose-sm text-gray-600 leading-relaxed ja-body-text">
                <p v-for="(paragraph, pIndex) in member.bio" :key="pIndex" class="mb-2">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 人才理念 -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">{{ teamData.philosophy.title }}</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="prose prose-lg text-gray-600 leading-relaxed ja-body-text whitespace-pre-line">
              <p v-for="(paragraph, index) in teamData.philosophy.content" :key="index" class="">
                {{ paragraph }}
              </p>
            </div>
            <div class="relative">
              <img src="@/assets/images/人才理念.jpg" alt="人才理念" class="w-full h-full object-cover" />
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


</script>
