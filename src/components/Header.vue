<template>
  <header :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    headerBgClass
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-8">
          <button @click="goToHome" class="flex items-center space-x-2 cursor-pointer">
            <img :src="logoImg" alt="ZIFU" class="w-10 h-10">
            <span :class="['font-bold text-xl', brandNameClass]">
              ZIFU
            </span>
          </button>

          <nav class="hidden md:flex items-center space-x-8">
            <a href="#" @click.prevent="goToHome" :class="['text-sm font-medium transition-colors', navTextColorClass]">
              {{ messages[effectiveLocale]?.header?.nav['home'] }}
            </a>
            <a href="#" @click.prevent="goToCompany"
              :class="['text-sm font-medium transition-colors', navTextColorClass]">
              {{ messages[effectiveLocale]?.header?.nav['company'] }}
            </a>
            <a href="#" @click.prevent="goToProducts"
              :class="['text-sm font-medium transition-colors', navTextColorClass]">
              {{ messages[effectiveLocale]?.header?.nav['products'] }}
            </a>
            <a href="#" @click.prevent="goToTechnology"
              :class="['text-sm font-medium transition-colors', navTextColorClass]">
              {{ messages[effectiveLocale]?.header?.nav['technology'] }}
            </a>
            <a href="#" @click.prevent="goToTeam" :class="['text-sm font-medium transition-colors', navTextColorClass]">
              {{ messages[effectiveLocale]?.header?.nav['team'] }}
            </a>
          </nav>
        </div>

        <div class="hidden md:flex items-center space-x-4">
          <div class="relative" @mouseenter="openLangMenu" @mouseleave="closeLangMenu">
            <button
              :class="['flex items-center space-x-1 px-3 py-1.5 rounded-full transition-all cursor-pointer', langBtnClass]">
              <Globe class="w-4 h-4" />
              <span class="text-sm font-medium">{{languages.find(l => l.code === currentLocale)?.label}}</span>
            </button>
            <div v-if="isLangMenuOpen" @mouseenter="cancelLangMenuClose" :class="[
              'absolute right-0 mt-2 w-24 rounded-lg shadow-xl py-1 border z-50 backdrop-blur-md overflow-hidden',
              shouldUseDarkText ? 'bg-white/95 border-gray-200' : 'bg-gray-900/95 border-gray-600'
            ]">
              <button v-for="lang in languages" :key="lang.code" @click="selectLanguage(lang.code)" :class="[
                'w-full text-left px-4 py-2 text-sm hover:transition-colors',
                shouldUseDarkText
                  ? 'hover:bg-gray-50'
                  : 'hover:bg-gray-700',
                currentLocale === lang.code
                  ? (shouldUseDarkText ? 'text-blue-600 font-medium' : 'text-blue-400 font-medium')
                  : (shouldUseDarkText ? 'text-gray-700' : 'text-gray-200')
              ]">
                {{ lang.label }}
              </button>
            </div>
          </div>
        </div>

        <button @click="toggleMobileMenu" :class="['md:hidden p-2', navTextColorClass]">
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" :class="[
      'md:hidden border-t transition-colors backdrop-blur-md',
      shouldUseDarkText ? 'bg-white/95 border-gray-200' : 'bg-gray-900/95 border-gray-600'
    ]">
      <div class="px-4 py-4 space-y-3">
        <a href="#" @click.prevent="goToHome(); isMobileMenuOpen = false" :class="[
          'block px-4 py-2 rounded-lg transition-colors',
          shouldUseDarkText
            ? 'text-gray-700 hover:bg-gray-50'
            : 'text-gray-200 hover:bg-gray-700'
        ]">
          {{ messages[effectiveLocale]?.header?.nav?.home }}
        </a>
        <a href="#" @click.prevent="goToCompany(); isMobileMenuOpen = false" :class="[
          'block px-4 py-2 rounded-lg transition-colors',
          shouldUseDarkText
            ? 'text-gray-700 hover:bg-gray-50'
            : 'text-gray-200 hover:bg-gray-700'
        ]">
          {{ messages[effectiveLocale]?.header?.nav?.company }}
        </a>
        <a href="#" @click.prevent="goToProducts(); isMobileMenuOpen = false" :class="[
          'block px-4 py-2 rounded-lg transition-colors',
          shouldUseDarkText
            ? 'text-gray-700 hover:bg-gray-50'
            : 'text-gray-200 hover:bg-gray-700'
        ]">
          {{ messages[effectiveLocale]?.header?.nav?.products }}
        </a>
        <a href="#" @click.prevent="goToTechnology(); isMobileMenuOpen = false" :class="[
          'block px-4 py-2 rounded-lg transition-colors',
          shouldUseDarkText
            ? 'text-gray-700 hover:bg-gray-50'
            : 'text-gray-200 hover:bg-gray-700'
        ]">
          {{ messages[effectiveLocale]?.header?.nav?.technology }}
        </a>
        <a href="#" @click.prevent="goToTeam(); isMobileMenuOpen = false" :class="[
          'block px-4 py-2 rounded-lg transition-colors',
          shouldUseDarkText
            ? 'text-gray-700 hover:bg-gray-50'
            : 'text-gray-200 hover:bg-gray-700'
        ]">
          {{ messages[effectiveLocale]?.header?.nav?.team }}
        </a>
        <div class="pt-3 border-t" :class="shouldUseDarkText ? 'border-gray-200' : 'border-gray-600'">
          <div class="flex items-center justify-between mb-3">
            <div class="relative" @mouseenter="openLangMenu" @mouseleave="closeLangMenu">
              <button :class="['flex items-center space-x-1 px-3 py-1.5 rounded-full cursor-pointer', langBtnClass]">
                <Globe class="w-4 h-4" />
                <span class="text-sm font-medium">{{languages.find(l => l.code === currentLocale)?.label}}</span>
              </button>
              <div v-if="isLangMenuOpen" @mouseenter="cancelLangMenuClose" :class="[
                'absolute right-0 mt-2 w-24 rounded-lg shadow-xl py-1 border z-50 backdrop-blur-md overflow-hidden',
                shouldUseDarkText ? 'bg-white/95 border-gray-200' : 'bg-gray-900/95 border-gray-600'
              ]">
                <button v-for="lang in languages" :key="lang.code"
                  @click="selectLanguage(lang.code); isMobileMenuOpen = false" :class="[
                    'w-full text-left px-4 py-2 text-sm hover:transition-colors',
                    shouldUseDarkText
                      ? 'hover:bg-gray-50'
                      : 'hover:bg-gray-700',
                    currentLocale === lang.code
                      ? (shouldUseDarkText ? 'text-blue-600 font-medium' : 'text-blue-400 font-medium')
                      : (shouldUseDarkText ? 'text-gray-700' : 'text-gray-200')
                  ]">
                  {{ lang.label }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Menu, X, Globe } from 'lucide-vue-next'
import { messages } from '@/locales'
import logoImg from '@/assets/logo/logo.png'

type Locale = keyof typeof messages

defineProps<{
  currentLocale: string
}>()

const emit = defineEmits<{
  (e: 'change-locale', lang: string): void
}>()

const { locale } = useI18n()
const router = useRouter()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isLangMenuOpen = ref(false)
let langMenuCloseTimer: ReturnType<typeof setTimeout> | null = null

const effectiveLocale = computed(() => {
  const loc = locale.value as string
  if (loc in messages) return loc as Locale
  return 'ja' as Locale
})

const languages = Object.entries(messages[effectiveLocale.value]?.header?.language ?? {}).map(([code, label]) => ({
  code,
  label
}));

const isHomePage = computed(() => {
  const path = router.currentRoute.value.path
  return path === '/' || path === '/ja/' || path === '/en/'
})

const shouldUseDarkText = computed(() => {
  if (!isHomePage.value || isScrolled.value) {
    return true
  }
  return true
})

const headerBgClass = computed(() => {
  if (!isHomePage.value || isScrolled.value) {
    return 'bg-white/95 backdrop-blur-md shadow-sm'
  }
  return 'bg-transparent'
})

const brandNameClass = computed(() => {
  return 'text-gray-800'
})

const navTextColorClass = computed(() => {
  return shouldUseDarkText.value ? 'text-gray-700 hover:text-blue-500' : 'text-white/90 hover:text-white'
})

const langBtnClass = computed(() => {
  if (shouldUseDarkText.value) {
    return 'bg-gray-100 text-gray-700 hover:bg-gray-200'
  }
  return 'bg-white/10 text-white/90 hover:bg-white/20'
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const selectLanguage = (lang: string) => {
  emit('change-locale', lang)
  isLangMenuOpen.value = false
  if (langMenuCloseTimer) {
    clearTimeout(langMenuCloseTimer)
    langMenuCloseTimer = null
  }
}

const openLangMenu = () => {
  if (langMenuCloseTimer) {
    clearTimeout(langMenuCloseTimer)
    langMenuCloseTimer = null
  }
  isLangMenuOpen.value = true
}

const closeLangMenu = () => {
  langMenuCloseTimer = setTimeout(() => {
    isLangMenuOpen.value = false
    langMenuCloseTimer = null
  }, 150)
}

const cancelLangMenuClose = () => {
  if (langMenuCloseTimer) {
    clearTimeout(langMenuCloseTimer)
    langMenuCloseTimer = null
  }
}

const goToHome = () => {
  const lang = locale.value as string
  const homePath = lang === 'ja' ? '/' : `/${lang}/`

  if (isHomePage.value) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push(homePath)
  }
}

const goToCompany = () => {
  const lang = locale.value as string
  const companyPath = lang === 'ja' ? '/company' : `/${lang}/company`
  router.push(companyPath)
}

const goToProducts = () => {
  const lang = locale.value as string
  const productsPath = lang === 'ja' ? '/products' : `/${lang}/products`
  router.push(productsPath)
}

const goToTechnology = () => {
  const lang = locale.value as string
  const technologyPath = lang === 'ja' ? '/technology' : `/${lang}/technology`
  router.push(technologyPath)
}

const goToTeam = () => {
  const lang = locale.value as string
  const teamPath = lang === 'ja' ? '/team' : `/${lang}/team`
  router.push(teamPath)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>