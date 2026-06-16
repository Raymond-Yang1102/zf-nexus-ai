<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { HelpCircle, MessageCircle, FileText, Image, Camera, ChevronDown, ChevronUp } from 'lucide-vue-next'
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

const helpData = computed(() => messages[effectiveLocale.value]?.help)

const faqs = computed(() => messages[effectiveLocale.value]?.help?.faqs)

const productHelp = computed(() => [
  {
    icon: FileText,
    title: 'NoteGPT',
    description: helpData.value?.noteGPT,
    url: 'https://notegpt.io'
  },
  {
    icon: Image,
    title: 'VisualGPT',
    description: helpData.value?.visualGPT,
    url: 'https://visualgpt.io'
  },
  {
    icon: Camera,
    title: 'PhotoGPT',
    description: helpData.value?.photoGPT,
    url: 'https://photogpt.io'
  }
])

const handleLocaleChange = (lang: string) => {
  emit('change-locale', lang)
}

/** FAQ 折叠状态 */
const expandedFaq = ref<number | null>(null)
const toggleFaq = (index: number) => {
  expandedFaq.value = expandedFaq.value === index ? null : index
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />

    <main class="pt-16">
      <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <div class="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center mx-auto mb-6">
              <HelpCircle class="w-8 h-8 text-cyan-600" />
            </div>
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {{ helpData?.title }}
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              {{ helpData?.subtitle }}
            </p>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
            {{ helpData?.productHelp }}
          </h2>

          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="product in productHelp" :key="product.title"
              class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                <component :is="product.icon" class="w-6 h-6 text-gray-600" />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ product.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ product.description }}</p>
              <a :href="product.url" target="_blank" rel="noopener noreferrer"
                class="text-cyan-600 hover:text-cyan-700 text-sm font-medium">
                {{ helpData?.learnMore }} →
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-10">
            <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <HelpCircle class="w-6 h-6 text-amber-600" />
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ helpData?.faqTitle }}</h2>
            <p class="text-gray-500">{{ helpData?.faqDescription }}</p>
          </div>

          <div class="space-y-3">
            <div v-for="(item, idx) in faqs ?? []" :key="idx"
              class="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden transition-all duration-300"
              :class="{ 'shadow-md border-cyan-200 bg-white': expandedFaq === idx }">
              <button
                @click="toggleFaq(idx)"
                class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100/50 transition-colors">
                <span class="font-medium text-gray-900 pr-4">{{ item.question }}</span>
                <component :is="expandedFaq === idx ? ChevronUp : ChevronDown"
                  class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300" />
              </button>
              <div
                class="overflow-hidden transition-all duration-300"
                :class="expandedFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'">
                <p class="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
            <MessageCircle class="w-8 h-8 text-blue-600" />
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            {{ helpData?.contactUs }}
          </h2>
          <p class="text-gray-600">
            {{ helpData?.contactDescription }}
          </p>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>
