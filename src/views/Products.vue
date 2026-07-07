<template>
  <div class="min-h-screen bg-white">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />
    <main class="pt-16">

      <section class="relative py-16 hero-bg-indigo overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        </div>
      </section>
      
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">{{ productsData.overview.title }}</h2>
          <p class="text-gray-600 mb-12 leading-relaxed text-center max-w-3xl mx-auto">{{ productsData.overview.description }}</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(icon, index) in productsData.overview.icons" :key="index"
              class="p-10 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div
                class="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-5">
                <img :src="productIcons[index]" alt="Icon" class="w-10 h-10 object-contain" />
              </div>
              <span class="text-lg font-bold text-gray-800 mb-2">{{ icon.name }}</span>
              <span class="text-sm text-gray-500">{{ icon.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="notegpt" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 items-center">
            <div class="lg:w-1/2">
              <div class="w-full aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                <img src="@/assets/images/products-notegpt.png" alt="NoteGPT" class="w-full h-full object-cover opacity-50 rounded-2xl" />
              </div>
            </div>
            <div class="lg:w-1/2">
              <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ productsData.noteGPT.title }}</h2>
              <p class="text-blue-600 font-semibold mb-4">{{ productsData.noteGPT.subtitle }}</p>
              <a :href="productsData.noteGPT.url" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 mb-6">
                <ExternalLink class="w-4 h-4" />
                <span>{{ messages[effectiveLocale]?.products?.visit }}</span>
              </a>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ productsData.noteGPT.description }}</p>
              <div class="mb-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-3">{{ messages[effectiveLocale]?.products?.features }}
                </h3>
                <ul class="space-y-2">
                  <li v-for="(feature, index) in productsData.noteGPT.features" :key="index"
                    class="flex items-center space-x-2 text-gray-600">
                    <Check class="w-4 h-4 text-blue-500" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-3">{{ messages[effectiveLocale]?.products?.targetUsers
                }}</h3>
                <ul class="space-y-2">
                  <li v-for="(user, index) in productsData.noteGPT.targetUsers" :key="index"
                    class="flex items-center space-x-2 text-gray-600">
                    <User class="w-4 h-4 text-blue-500" />
                    <span>{{ user }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="decopy" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 items-center">
            <div class="lg:w-1/2">
              <div class="w-full aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                <img src="@/assets/images/products-decopy.png" alt="Decopy AI" class="w-full h-full object-cover" />
              </div>
            </div>
            <div class="lg:w-1/2">
              <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ productsData.decopyAI.title }}</h2>
              <p class="text-blue-600 font-semibold mb-4">{{ productsData.decopyAI.subtitle }}</p>
              <a :href="productsData.decopyAI.url" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 mb-6">
                <ExternalLink class="w-4 h-4" />
                <span>{{ messages[effectiveLocale]?.products?.visit }}</span>
              </a>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ productsData.decopyAI.description }}</p>
              <div class="mb-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-3">{{ messages[effectiveLocale]?.products?.features }}
                </h3>
                <ul class="space-y-2">
                  <li v-for="(feature, index) in productsData.decopyAI.features" :key="index"
                    class="flex items-center space-x-2 text-gray-600">
                    <Check class="w-4 h-4 text-blue-500" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-3">{{ messages[effectiveLocale]?.products?.targetUsers
                }}</h3>
                <ul class="space-y-2">
                  <li v-for="(user, index) in productsData.decopyAI.targetUsers" :key="index"
                    class="flex items-center space-x-2 text-gray-600">
                    <User class="w-4 h-4 text-blue-500" />
                    <span>{{ user }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="visualgpt" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row gap-12 items-center">
            <div class="lg:w-1/2">
              <div class="w-full aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                <img src="@/assets/images/products-visualgpt.png" alt="VisualGPT" class=" object-contain opacity-50 rounded-2xl" />
              </div>
            </div>
            <div class="lg:w-1/2">
              <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ productsData.visualGPT.title }}</h2>
              <p class="text-blue-600 font-semibold mb-4">{{ productsData.visualGPT.subtitle }}</p>
              <a :href="productsData.visualGPT.url" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 mb-6">
                <ExternalLink class="w-4 h-4" />
                <span>{{ messages[effectiveLocale]?.products?.visit }}</span>
              </a>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ productsData.visualGPT.description }}</p>
              <div class="mb-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-3">{{ messages[effectiveLocale]?.products?.features }}
                </h3>
                <ul class="space-y-2">
                  <li v-for="(feature, index) in productsData.visualGPT.features" :key="index"
                    class="flex items-center space-x-2 text-gray-600">
                    <Check class="w-4 h-4 text-blue-500" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-3">{{ messages[effectiveLocale]?.products?.targetUsers
                }}</h3>
                <ul class="space-y-2">
                  <li v-for="(user, index) in productsData.visualGPT.targetUsers" :key="index"
                    class="flex items-center space-x-2 text-gray-600">
                    <User class="w-4 h-4 text-blue-500" />
                    <span>{{ user }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-12 ">{{ productsData.enterprise.title }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(item, index) in productsData.enterprise.items" :key="index"
              class="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <!-- <div
                class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-6">
                <component :is="enterpriseIcons[index]" class="w-7 h-7 text-blue-600" />
              </div> -->
              <h3 class="text-xl font-bold text-gray-800 mb-3 ">{{ item.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ item.description }}</p>
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
  Check,
  User,
  ExternalLink,
  Building2,
  FlaskConical,
  HeadphonesIcon
} from 'lucide-vue-next'
import { messages } from '@/locales'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import notegptLogo from '@/assets/logo/notegpt.png'
import decopyLogo from '@/assets/logo/decopy.png'
import visualgptLogo from '@/assets/logo/visualgpt.png'

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

const productsData = computed(() => messages[effectiveLocale.value]?.products)

const productIcons = [notegptLogo, decopyLogo, visualgptLogo]
const enterpriseIcons = [Building2, FlaskConical, HeadphonesIcon]
</script>
