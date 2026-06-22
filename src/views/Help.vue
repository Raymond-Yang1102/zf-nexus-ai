<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />

    <main class="pt-16">
      <section class="py-16 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 animate-gradient"></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 animate-gradient-delay">
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 animate-gradient-delay-2">
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center">
            <div
              class="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 shadow-lg">
              <HelpCircle class="w-10 h-10 text-white" />
            </div>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {{ helpData?.title }}
            </h1>
            <p class="text-lg text-white/80 max-w-2xl mx-auto">
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

          <div class="grid md:grid-cols-3 gap-6">
            <div v-for="product in productHelp" :key="product.title"
              class="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1">
              <div
                class="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center mb-5 group-hover:from-cyan-100 group-hover:to-blue-100 transition-colors">
                <!-- <component :is="product.icon" class="w-7 h-7 text-cyan-600" /> -->
                <img :src="product.icon" alt="product icon" class="w-7 h-7 text-cyan-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ product.title }}</h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
              <a :href="product.url" target="_blank" rel="noopener noreferrer"
                class="inline-flex items-center text-cyan-600 hover:text-cyan-700 text-sm font-medium group-hover:gap-2 transition-all">
                {{ helpData?.learnMore }}
                <svg class="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-1 transition-all" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <div
              class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 mb-4">
              <HelpCircle class="w-7 h-7 text-amber-600" />
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{{ helpData?.faqTitle }}</h2>
            <p class="text-gray-500 max-w-xl mx-auto">{{ helpData?.faqDescription }}</p>
          </div>

          <div class="space-y-3">
            <div v-for="category in faqCategories ?? []" :key="category.key"
              class="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button @click="toggleCategory(category.key)"
                class="w-full px-6 py-5 flex items-center justify-between text-left group">
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center group-hover:from-cyan-50 group-hover:to-blue-50 transition-colors">
                    <component :is="categoryIcons[category.key] || HelpCircle"
                      class="w-5 h-5 text-gray-600 group-hover:text-cyan-600 transition-colors" />
                  </div>
                  <span class="font-semibold text-gray-900">{{ category.title }}</span>
                  <span class="px-2 py-0.5 text-xs font-medium text-gray-400 bg-gray-100 rounded-full">
                    {{ category.faqs.length }}
                  </span>
                </div>
                <component :is="expandedCategory === category.key ? ChevronUp : ChevronDown"
                  class="w-5 h-5 text-gray-400 flex-shrink-0 transition-all duration-300 group-hover:text-gray-600"
                  :class="{ 'rotate-180': expandedCategory === category.key }" />
              </button>
              <div class="overflow-hidden transition-all duration-300 ease-out"
                :class="expandedCategory === category.key ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'">
                <div class="px-6 pb-4 space-y-2">
                  <div v-for="(item, idx) in category.faqs" :key="idx" class="bg-gray-50/50 rounded-xl overflow-hidden">
                    <button @click.stop="toggleFaq(idx)"
                      class="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50/80 transition-colors">
                      <span class="font-medium text-gray-800 text-sm pr-4 flex-1 text-left">{{ item.question }}</span>
                      <component :is="expandedFaq === idx ? ChevronUp : ChevronDown"
                        class="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200" />
                    </button>
                    <div class="overflow-hidden transition-all duration-300 ease-out"
                      :class="expandedFaq === idx ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'">
                      <div class="px-5 pb-4">
                        <p class="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{{ item.answer }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg mb-6">
            <MessageCircle class="w-10 h-10 text-blue-600" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {{ helpData?.contactUs }}
          </h2>
          <p class="text-gray-600 max-w-xl mx-auto mb-8">
            {{ helpData?.contactDescription }}
          </p>
          <!-- <a href="mailto:support@nexus-ai.jp"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
            <MessageCircle class="w-5 h-5 mr-2" />
            {{ helpData?.contactButton }}
          </a> -->
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { HelpCircle, MessageCircle, FileText, ChevronDown, ChevronUp, BookOpen, Shield, Building, Headphones } from 'lucide-vue-next'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import notegptLogo from '@/assets/logo/notegpt.png'
import visualgptLogo from '@/assets/logo/visualgpt.png'
import photogptLogo from '@/assets/logo/photogpt.png'

defineProps<{
  currentLocale: string
}>()

const emit = defineEmits<{
  (e: 'change-locale', lang: string): void
}>()

// 使用 vue-i18n 内置 tm() 获取翻译消息，避免手动 locale 校验
const { tm } = useI18n({ useScope: 'global' })

// 明确定义消息类型（与 locales 中的 help 数据结构一致）
interface FaqItem {
  question: string
  answer: string
}
interface FaqCategory {
  key: string
  title: string
  faqs: FaqItem[]
}
interface HelpData {
  title: string
  subtitle: string
  productHelp: string
  noteGPT: string
  visualGPT: string
  photoGPT: string
  learnMore: string
  faqTitle: string
  faqDescription: string
  faqCategories: FaqCategory[]
  contactUs: string
  contactDescription: string
  contactButton: string
}

const helpData = computed(() => tm('help') as HelpData | undefined)
const faqCategories = computed(() => helpData.value?.faqCategories)

const productHelp = computed(() => [
  {
    icon: notegptLogo,
    title: 'NoteGPT',
    description: helpData.value?.noteGPT,
    url: 'https://notegpt.io'
  },
  {
    icon: visualgptLogo,
    title: 'VisualGPT',
    description: helpData.value?.visualGPT,
    url: 'https://visualgpt.io'
  },
  {
    icon: photogptLogo,
    title: 'PhotoGPT',
    description: helpData.value?.photoGPT,
    url: 'https://photogpt.io'
  }
])

const categoryIcons: Record<string, any> = {
  general: BookOpen,
  products: FileText,
  privacy: Shield,
  enterprise: Building,
  support: Headphones
}

const handleLocaleChange = (lang: string) => {
  emit('change-locale', lang)
}

const expandedCategory = ref<string | null>(null)
const expandedFaq = ref<number | null>(null)

const toggleCategory = (categoryKey: string) => {
  if (expandedCategory.value === categoryKey) {
    expandedCategory.value = null
    expandedFaq.value = null
  } else {
    expandedCategory.value = categoryKey
    expandedFaq.value = null
  }
}

const toggleFaq = (index: number) => {
  expandedFaq.value = expandedFaq.value === index ? null : index
}
</script>

<style scoped>
@keyframes gradient {
  0% {
    opacity: 1;
  }

  33% {
    opacity: 0;
  }

  66% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes gradient-delay {
  0% {
    opacity: 0;
  }

  33% {
    opacity: 1;
  }

  66% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes gradient-delay-2 {
  0% {
    opacity: 0;
  }

  33% {
    opacity: 0;
  }

  66% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.animate-gradient {
  animation: gradient 12s ease-in-out infinite;
}

.animate-gradient-delay {
  animation: gradient-delay 12s ease-in-out infinite;
}

.animate-gradient-delay-2 {
  animation: gradient-delay-2 12s ease-in-out infinite;
}
</style>