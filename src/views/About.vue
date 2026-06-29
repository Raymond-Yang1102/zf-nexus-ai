<template>
  <div class="min-h-screen bg-washi-50">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />

    <main class="pt-16">
      <div class="sticky top-16 z-40 bg-washi-50/95 backdrop-blur-md border-b border-washi-200">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-wrap justify-center gap-1">
            <button v-for="item in aboutData?.navItems" :key="item.id" @click="scrollToSection(item.id)" :class="[
              'px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200',
              activeSection === item.id
                ? 'bg-sky-100 text-sky-600'
                : 'text-sumi-600 hover:bg-washi-100'
            ]">
              {{ item.label }}
            </button>
          </div>
        </nav>
      </div>

      <section id="overview"
        class="py-20 md:py-28 bg-gradient-to-br from-sky-50 via-washi-50 to-wisteria-50 relative overflow-hidden">
        <div class="absolute inset-0 seigaiha-pattern opacity-20"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <div
              class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 text-sky-600 text-sm font-medium mb-6">
              <Sparkles class="w-4 h-4" />
              <span>{{ aboutData?.hero?.badge }}</span>
            </div>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-sumi-800 mb-6">
              {{ aboutData?.hero?.title }}
            </h1>
            <p class="text-lg text-sumi-600 max-w-3xl mx-auto">
              {{ aboutData?.hero?.description }}
            </p>
          </div>
        </div>
      </section>

      <section id="story" class="py-20 md:py-24 bg-gradient-to-b from-white to-washi-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-sm font-medium mb-4">
              {{ aboutData?.story?.sectionLabel }}
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-sumi-800 mb-4">
              {{ aboutData?.story?.title }}
            </h2>
            <p class="text-sumi-500 text-lg max-w-2xl mx-auto">
              {{ aboutData?.story?.subtitle }}
            </p>
          </div>

          <div class="relative">
            <div
              class="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 via-wisteria-400 to-coral-400 -translate-x-1/2 rounded-full">
            </div>
            <div class="space-y-16">
              <div v-for="(milestone, index) in aboutData?.story?.milestones" :key="index"
                class="relative flex items-center" :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'">
                <div :class="['flex-1', index % 2 === 0 ? 'lg:text-right' : 'lg:text-left']">
                  <div
                    :class="['inline-block p-6 md:p-8 rounded-2xl bg-white border border-washi-200 shadow-soft max-w-lg hover:shadow-card hover:border-sky-200 transition-all duration-300', index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto']">
                    <div class="flex items-center mb-3"
                      :class="index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'">
                      <span class="text-4xl font-bold text-gradient-japanese">{{ milestone.year }}</span>
                      <span
                        :class="['ml-3 text-sm font-medium px-3 py-1 rounded-full bg-washi-100 text-sumi-600', index % 2 === 0 ? 'lg:mr-3 lg:ml-0' : '']">
                        {{ milestone.tag }}
                      </span>
                    </div>
                    <h3 class="text-xl font-semibold text-sumi-800 mb-3">{{ milestone.title }}</h3>
                    <p class="text-sumi-600 leading-relaxed">{{ milestone.description }}</p>
                  </div>
                </div>
                <div
                  :class="['absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center', milestone.colorClass]">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div class="flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" class="py-20 md:py-24 bg-gradient-to-b from-washi-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span
              class="inline-block px-4 py-1.5 rounded-full bg-wisteria-50 text-wisteria-600 text-sm font-medium mb-4">
              {{ aboutData?.philosophy?.sectionLabel }}
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-sumi-800 mb-4">
              {{ aboutData?.philosophy?.title }}
            </h2>
            <p class="text-sumi-500 text-lg max-w-2xl mx-auto">
              {{ aboutData?.philosophy?.subtitle }}
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div
              class="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border border-sky-100 hover:shadow-card transition-all duration-300">
              <div class="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center mb-5">
                <Target class="w-7 h-7 text-sky-500" />
              </div>
              <h3 class="text-xl font-bold text-sumi-800 mb-3">{{ aboutData?.philosophy?.mission?.title }}</h3>
              <p class="text-sumi-600 leading-relaxed">{{ aboutData?.philosophy?.mission?.desc }}</p>
            </div>
            <div
              class="bg-gradient-to-br from-wisteria-50 to-white rounded-2xl p-8 border border-wisteria-100 hover:shadow-card transition-all duration-300">
              <div class="w-14 h-14 rounded-xl bg-wisteria-100 flex items-center justify-center mb-5">
                <Lightbulb class="w-7 h-7 text-wisteria-500" />
              </div>
              <h3 class="text-xl font-bold text-sumi-800 mb-3">{{ aboutData?.philosophy?.vision?.title }}</h3>
              <p class="text-sumi-600 leading-relaxed">{{ aboutData?.philosophy?.vision?.desc }}</p>
            </div>
            <div
              class="bg-gradient-to-br from-coral-50 to-white rounded-2xl p-8 border border-coral-100 hover:shadow-card transition-all duration-300">
              <div class="w-14 h-14 rounded-xl bg-coral-100 flex items-center justify-center mb-5">
                <Heart class="w-7 h-7 text-coral-500" />
              </div>
              <h3 class="text-xl font-bold text-sumi-800 mb-3">{{ aboutData?.corporateValues?.title }}</h3>
              <p class="text-sumi-600 leading-relaxed">
                {{ aboutData?.corporateValues?.description }}</p>
            </div>
          </div>

          <div
            class="bg-gradient-to-br from-washi-50 to-white rounded-3xl p-8 md:p-12 border border-washi-200 shadow-soft">
            <div class="flex flex-col lg:flex-row gap-10 items-start">
              <div class="flex-shrink-0 mx-auto lg:mx-0">
                <div
                  class="w-28 h-28 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center shadow-inner mx-auto">
                  <User class="w-14 h-14 text-sky-500" />
                </div>
                <div class="text-center mt-4">
                  <p class="font-bold text-sumi-800 text-lg">{{ aboutData?.philosophy?.ceoMessage?.name }}</p>
                  <p class="text-sm text-sumi-500">{{ aboutData?.philosophy?.ceoMessage?.title }}</p>
                </div>
              </div>
              <div class="flex-1">
                <div class="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-600 text-xs font-semibold mb-4">
                  {{ aboutData?.philosophy?.ceoMessage?.label }}
                </div>
                <div class="space-y-5">
                  <p v-for="(paragraph, idx) in aboutData?.philosophy?.ceoMessage?.content" :key="idx"
                    class="text-sumi-600 leading-relaxed">
                    {{ paragraph }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="values" class="py-20 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-1.5 rounded-full bg-coral-50 text-coral-600 text-sm font-medium mb-4">
              {{ aboutData?.values?.sectionLabel }}
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-sumi-800 mb-4">
              {{ aboutData?.values?.title }}
            </h2>
            <p class="text-sumi-500 text-lg max-w-2xl mx-auto">
              {{ aboutData?.values?.subtitle }}
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(value, idx) in aboutData?.values?.items" :key="idx"
              class="group bg-washi-50 rounded-2xl p-6 border border-washi-200 hover:border-sky-200 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div
                class="w-12 h-12 rounded-xl bg-washi-100 group-hover:bg-sky-100 flex items-center justify-center mb-4 transition-colors duration-300">
                <component :is="getValueIcon(value.icon)"
                  class="w-6 h-6 text-sumi-500 group-hover:text-sky-500 transition-colors duration-300" />
              </div>
              <h4 class="font-bold text-sumi-800 mb-2">{{ value.title }}</h4>
              <p class="text-sm text-sumi-500 leading-relaxed">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" class="py-20 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span
              class="inline-block px-4 py-1.5 rounded-full bg-wisteria-50 text-wisteria-600 text-sm font-medium mb-4">
              {{ aboutData?.roadmap?.sectionLabel }}
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-sumi-800 mb-4">
              {{ aboutData?.roadmap?.title }}
            </h2>
            <p class="text-sumi-500 text-lg max-w-2xl mx-auto">
              {{ aboutData?.roadmap?.subtitle }}
            </p>
          </div>

          <div class="relative">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 via-wisteria-400 to-coral-400">
            </div>
            <div class="space-y-12">
              <div v-for="(phase, index) in aboutData?.roadmap?.phases" :key="index" class="relative pl-12">
                <div class="absolute left-0 top-0 w-4 h-4 bg-white border-4 rounded-full -translate-x-1/2"
                  :class="phase.status === 'completed' ? 'border-sky-400' : phase.status === 'current' ? 'border-wisteria-400' : 'border-coral-400'">
                </div>
                <div class="bg-washi-50 rounded-2xl p-8 border border-washi-200">
                  <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 class="text-xl font-bold text-sumi-800">{{ phase.title }}</h3>
                    <span class="text-sm font-medium px-3 py-1 rounded-full"
                      :class="phase.status === 'completed' ? 'bg-sky-100 text-sky-600' : phase.status === 'current' ? 'bg-wisteria-100 text-wisteria-600' : 'bg-coral-100 text-coral-600'">
                      {{ getPhaseStatusLabel(phase.status) }}
                    </span>
                  </div>
                  <p class="text-sumi-600 mb-4">{{ phase.description }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="(tag, tIdx) in phase.tags" :key="tIdx"
                      class="text-xs px-3 py-1 rounded-full bg-white border border-washi-200 text-sumi-600">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="company-info" class="py-20 md:py-24 bg-gradient-to-b from-washi-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-sm font-medium mb-4">
              {{ aboutData?.companyInfo?.sectionLabel }}
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-sumi-800 mb-4">
              {{ aboutData?.companyInfo?.title }}
            </h2>
            <p class="text-sumi-500 text-lg max-w-2xl mx-auto">
              {{ aboutData?.companyInfo?.subtitle }}
            </p>
          </div>

          <div class="bg-washi-50 rounded-3xl border border-washi-200 overflow-hidden">
            <table class="w-full">
              <tbody>
                <tr v-for="(item, index) in aboutData?.companyInfo?.items" :key="index"
                  :class="index !== 0 ? 'border-t border-washi-200' : ''">
                  <th
                    class="px-6 py-4 text-center text-sm font-medium text-sumi-600 bg-washi-100/50 w-1/3 whitespace-nowrap">
                    {{ item.label }}
                  </th>
                  <td class="px-6 py-4 text-sm text-sumi-800 text-center">
                    {{ item.value }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="social" class="py-20 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <span class="inline-block px-4 py-1.5 rounded-full bg-coral-50 text-coral-600 text-sm font-medium mb-4">
              {{ aboutData?.social?.sectionLabel }}
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-sumi-800 mb-4">
              {{ aboutData?.social?.title }}
            </h2>
            <p class="text-sumi-500 text-lg max-w-2xl mx-auto">
              {{ aboutData?.social?.subtitle }}
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            <a v-for="(account, index) in aboutData?.social?.accounts" :key="index" :href="account.url"
              class="group flex flex-col items-center p-6 rounded-2xl bg-washi-50 border border-washi-200 hover:shadow-card hover:border-sky-200 transition-all duration-300 hover:-translate-y-1">
              <div
                class="w-12 h-12 rounded-xl bg-washi-100 group-hover:bg-sky-100 flex items-center justify-center mb-3 transition-colors duration-300">
                <component :is="socialIcons[account.icon as keyof typeof socialIcons] || Twitter"
                  class="w-6 h-6 text-sumi-500 group-hover:text-sky-500 transition-colors duration-300" />
              </div>
              <h4 class="font-semibold text-sumi-800 text-sm text-center">{{ account.name }}</h4>
              <p class="text-xs text-sumi-500 mt-1">{{ account.handle }}</p>
            </a>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  Sparkles,
  Target,
  Lightbulb,
  Heart,
  User,
  Check,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Github
} from 'lucide-vue-next'
import { messages } from '@/locales'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

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

const aboutData = computed(() => messages[effectiveLocale.value]?.about)

const handleLocaleChange = (lang: string) => {
  emit('change-locale', lang)
}

const activeSection = ref('overview')

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    const HEADER_OFFSET = 128
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const updateActiveSection = () => {
  const HEADER_OFFSET = 150
  const scrollPosition = window.scrollY + HEADER_OFFSET

  for (const item of aboutData.value?.navItems || []) {
    const el = document.getElementById(item.id)
    if (el) {
      const rect = el.getBoundingClientRect()
      const elTop = rect.top + window.scrollY
      const elBottom = elTop + rect.height

      if (scrollPosition >= elTop && scrollPosition < elBottom) {
        activeSection.value = item.id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  github: Github
}

const getValueIcon = (iconName: string) => {
  const icons: Record<string, any> = {
    sparkles: Sparkles,
    heart: Heart,
    award: Check,
    users: User,
    target: Target,
    lightbulb: Lightbulb
  }
  return icons[iconName] || Sparkles
}



const getPhaseStatusLabel = (status: string) => {
  const labels: Record<string, Record<string, string>> = {
    ja: { completed: '完了', current: '進行中', upcoming: '計画中' },
    zh: { completed: '已完成', current: '进行中', upcoming: '计划中' },
    en: { completed: 'Completed', current: 'In Progress', upcoming: 'Upcoming' }
  }
  return labels[effectiveLocale.value]?.[status] || status
}
</script>
