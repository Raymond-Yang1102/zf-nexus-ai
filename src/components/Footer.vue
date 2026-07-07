<template>
  <footer class="bg-gray-900 text-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="mb-8">
        <div class="flex items-center space-x-2 mb-4">
          <img :src="logoImg" alt="ZIFU" class="w-10 h-10">
          <span class="font-bold text-xl text-white">{{ messages[effectiveLocale]?.footer?.companyName }}</span>
        </div>
        <p class="text-sm text-gray-400 mb-2">
          TEL：{{ messages[effectiveLocale]?.footer?.phone }}
        </p>
        <p class="text-sm text-gray-400">
          {{ messages[effectiveLocale]?.footer?.address }}
        </p>
      </div>

      <!-- <div class="border-t border-gray-700 my-8"></div> -->

      <!-- <div class="flex flex-wrap justify-center gap-6 mb-8">
        <a href="#" @click.prevent="goToHome" class="text-sm text-gray-400 hover:text-white transition-colors">
          {{ messages[effectiveLocale]?.header?.nav['home'] }}
        </a>
        <span class="text-gray-600">｜</span>
        <a href="#" @click.prevent="goToCompany" class="text-sm text-gray-400 hover:text-white transition-colors">
          {{ messages[effectiveLocale]?.header?.nav['company'] }}
        </a>
        <span class="text-gray-600">｜</span>
        <a href="#" @click.prevent="goToProducts" class="text-sm text-gray-400 hover:text-white transition-colors">
          {{ messages[effectiveLocale]?.header?.nav['products'] }}
        </a>
        <span class="text-gray-600">｜</span>
        <a href="#" @click.prevent="goToTechnology" class="text-sm text-gray-400 hover:text-white transition-colors">
          {{ messages[effectiveLocale]?.header?.nav['technology'] }}
        </a>
        <span class="text-gray-600">｜</span>
        <a href="#" @click.prevent="goToTeam" class="text-sm text-gray-400 hover:text-white transition-colors">
          {{ messages[effectiveLocale]?.header?.nav['team'] }}
        </a>
      </div> -->

      <!-- <div class="border-t border-gray-700"></div> -->

      <div class="pt-8">
        <p class="text-sm text-gray-400">
          {{ messages[effectiveLocale]?.footer?.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { messages } from '@/locales'
import logoImg from '@/assets/logo/logo.png'

type Locale = keyof typeof messages

const { locale } = useI18n()

const effectiveLocale = computed<Locale>(() => {
  const loc = locale.value as string
  if (loc in messages) return loc as Locale
  return 'ja' as Locale
})
</script>