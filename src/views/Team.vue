<template>
  <div class="min-h-screen bg-white">
    <Header :currentLocale="currentLocale" @change-locale="changeLocale" />
    <main class="pt-16">
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-2xl font-bold text-gray-800 mb-8 text-center">{{ team.overview.title }}</h1>
          <div class="prose prose-lg text-gray-600 leading-relaxed text-center">
            <p v-for="paragraph in team.overview.content" :key="paragraph" class="mb-4">{{ paragraph }}</p>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-12">{{ team.members.title }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article v-for="member in team.members.items" :key="member.name" class="p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ member.name }}</h3>
              <span class="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 bg-blue-100 text-blue-600">{{ member.title }}</span>
              <div class="prose prose-sm text-gray-600 leading-relaxed">
                <p v-for="paragraph in member.bio" :key="paragraph" class="mb-2">{{ paragraph }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-8">{{ team.philosophy.title }}</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="prose prose-lg text-gray-600 leading-relaxed">
              <p v-for="paragraph in team.philosophy.content" :key="paragraph" class="mb-4">{{ paragraph }}</p>
            </div>
            <div class="relative"><img src="@/assets/images/人才理念.jpg" :alt="team.philosophy.title" class="w-full h-full object-cover" /></div>
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
import { messages, type Locale } from '@/locales'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

defineProps<{ currentLocale: string }>()
const emit = defineEmits<{ (event: 'change-locale', lang: string): void }>()
const { locale } = useI18n()
const activeLocale = computed(() => (locale.value in messages ? locale.value : 'ja') as Locale)
const team = computed(() => messages[activeLocale.value].team)
const changeLocale = (language: string) => emit('change-locale', language)
</script>
