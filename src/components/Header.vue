<template>
  <header :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    headerBgClass
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <button @click="goToHome" class="flex items-center space-x-2 cursor-pointer">
          <!-- logo -->
           <img :src="logoImg" alt="logo" class="w-12 h-12">
          <span :class="['font-bold text-xl', textColorClass]">
            {{ messages[effectiveLocale]?.header?.companyName }}
          </span>
        </button>

        <nav class="hidden md:flex items-center space-x-8">
          <a href="#" @click.prevent="goToHome" :class="['text-sm font-medium transition-colors', navTextColorClass]">
            {{ messages[effectiveLocale]?.header?.nav['home'] }}
          </a>
          <div class="relative" @mouseenter="openProductMenu" @mouseleave="closeProductMenu">
            <button
              :class="['text-sm font-medium transition-colors cursor-pointer flex items-center space-x-1', navTextColorClass]">
              <span>{{ messages[effectiveLocale]?.header?.nav['products'] }}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-if="isProductMenuOpen" @mouseenter="cancelProductMenuClose"
              class="absolute left-0 mt-2 w-[520px] rounded-xl shadow-xl py-2 border border-washi-200 bg-white z-50">
              <div class="flex">
                <div class="w-[160px] border-r border-washi-100">
                  <button v-for="(key, index) in productKeys" :key="key" @mouseenter="selectedProduct = index" @click="handleProductClick(key)"
                    class="w-full flex items-center space-x-2 px-3 py-2.5 text-left transition-all duration-200 cursor-pointer"
                    :class="selectedProduct === index ? 'bg-coral-50' : 'hover:bg-washi-50'">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                      :class="selectedProduct === index ? 'bg-coral-100 scale-105' : 'bg-washi-100'">
                      <img :src="productLogos[key]" :alt="productsData[key]?.name" class="w-5 h-5 object-contain" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="font-medium text-sm transition-colors truncate"
                        :class="selectedProduct === index ? 'text-coral-600' : 'text-sumi-800'">{{
                          productsData[key]?.name }}</div>
                      <div class="text-xs text-sumi-500 truncate">{{ productsData[key]?.tagline }}</div>
                    </div>
                    <Check v-if="selectedProduct === index" class="w-3.5 h-3.5 text-coral-500 ml-1 flex-shrink-0" />
                  </button>
                </div>
                <div class="w-[360px] p-3">
                  <div class="flex items-start space-x-2 mb-2.5">
                    <div
                      class="w-10 h-10 rounded-lg bg-gradient-to-br from-coral-100 to-coral-200 flex items-center justify-center flex-shrink-0">
                      <img :src="productLogos[productKeys[selectedProduct]]"
                        :alt="productsData[productKeys[selectedProduct]]?.name" class="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <div class="font-bold text-sumi-800 text-base">{{ productsData[productKeys[selectedProduct]]?.name
                      }}</div>
                      <div class="text-xs text-sumi-600">{{ productsData[productKeys[selectedProduct]]?.userValue }}
                      </div>
                    </div>
                  </div>
                  <div class="text-xs font-semibold text-sumi-500 uppercase tracking-wide mb-2">{{
                    productsData.labels?.coreFeatures || '核心能力' }}</div>
                  <div class="grid grid-cols-2 gap-1.5 mb-3">
                    <div v-for="feature in (productsData[productKeys[selectedProduct]]?.coreFeatures || [])"
                      :key="feature" class="flex items-center space-x-1.5">
                      <svg class="w-3 h-3 text-coral-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                      <span class="text-xs text-sumi-700">{{ feature }}</span>
                    </div>
                  </div>
                  <div class="text-xs font-semibold text-sumi-500 uppercase tracking-wide mb-2">{{
                    productsData.labels?.useCases || '应用场景' }}</div>
                  <div class="flex flex-wrap gap-1.5 mb-3">
                    <span v-for="useCase in (productsData[productKeys[selectedProduct]]?.useCases || [])" :key="useCase"
                      class="px-2 py-0.5 rounded-full bg-coral-50 text-xs text-coral-700 font-medium">{{ useCase
                      }}</span>
                  </div>
                  <div class="text-xs font-semibold text-sumi-500 uppercase tracking-wide mb-2">{{
                    productsData.labels?.advantages || '产品价值' }}</div>
                  <div class="flex flex-wrap gap-1.5 mb-3">
                    <span v-for="advantage in (productsData[productKeys[selectedProduct]]?.advantages || [])"
                      :key="advantage.title" class="px-2 py-0.5 rounded-full bg-washi-100 text-xs text-sumi-700">{{
                        advantage.title + ': ' + advantage.desc }}</span>
                  </div>
                  <button @click="handleProductCta"
                    class="w-full py-1.5 rounded-lg bg-gradient-to-r from-coral-400 to-coral-500 text-white text-xs font-medium hover:from-coral-500 hover:to-coral-600 transition-all flex items-center justify-center space-x-1.5">
                    <span>{{ productsData[productKeys[selectedProduct]]?.cta || '了解更多' }}</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a v-for="item in navItems" :key="item.key" href="#" @click.prevent="handleNavClick(item)"
            :class="['text-sm font-medium transition-colors', navTextColorClass]">
            {{ messages[effectiveLocale]?.header?.nav[item.key] }}
          </a>
        </nav>

        <div class="hidden md:flex items-center space-x-4">
          <div class="relative" @mouseenter="openLangMenu" @mouseleave="closeLangMenu">
            <button
              :class="['flex items-center space-x-1 px-3 py-1.5 rounded-full transition-all cursor-pointer', langBtnClass]">
              <Globe class="w-4 h-4" />
              <span class="text-sm font-medium">{{languages.find(l => l.code === currentLocale)?.label}}</span>
            </button>
            <div v-if="isLangMenuOpen" @mouseenter="cancelLangMenuClose" :class="[
              'absolute right-0 mt-2 w-24 rounded-lg shadow-xl py-1 border z-50 backdrop-blur-md overflow-hidden',
              shouldUseDarkText ? 'bg-white/95 border-washi-200' : 'bg-sumi-900/95 border-sumi-600'
            ]">
              <button v-for="lang in languages" :key="lang.code" @click="selectLanguage(lang.code)" :class="[
                'w-full text-left px-4 py-2 text-sm hover:transition-colors',
                shouldUseDarkText
                  ? 'hover:bg-washi-50'
                  : 'hover:bg-sumi-700',
                currentLocale === lang.code
                  ? (shouldUseDarkText ? 'text-sky-600 font-medium' : 'text-sky-400 font-medium')
                  : (shouldUseDarkText ? 'text-sumi-700' : 'text-washi-200')
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
      shouldUseDarkText ? 'bg-white/95 border-washi-200' : 'bg-sumi-900/95 border-sumi-600'
    ]">
      <div class="px-4 py-4 space-y-3">
        <a v-for="item in navItems" :key="item.key" href="#" @click.prevent="handleNavClick(item); isMobileMenuOpen = false" :class="[
          'block px-4 py-2 rounded-lg transition-colors',
          shouldUseDarkText
            ? 'text-sumi-700 hover:bg-washi-50'
            : 'text-washi-200 hover:bg-sumi-700'
        ]">
          {{ messages[effectiveLocale]?.header?.nav[item.key] }}
        </a>
        <div class="pt-3 border-t" :class="shouldUseDarkText ? 'border-washi-200' : 'border-sumi-600'">
          <div class="flex items-center justify-between mb-3">
            <button @click="goToHome(); isMobileMenuOpen = false"
              :class="['text-sm cursor-pointer bg-transparent border-none', shouldUseDarkText ? 'text-sumi-700 hover:text-sky-500' : 'text-washi-200 hover:text-white']">
              {{ messages[effectiveLocale]?.header?.nav?.home }}
            </button>
            <div class="relative" @mouseenter="openLangMenu" @mouseleave="closeLangMenu">
              <button :class="['flex items-center space-x-1 px-3 py-1.5 rounded-full cursor-pointer', langBtnClass]">
                <Globe class="w-4 h-4" />
                <span class="text-sm font-medium">{{languages.find(l => l.code === currentLocale)?.label}}</span>
              </button>
              <div v-if="isLangMenuOpen" @mouseenter="cancelLangMenuClose" :class="[
                'absolute right-0 mt-2 w-24 rounded-lg shadow-xl py-1 border z-50 backdrop-blur-md overflow-hidden',
                shouldUseDarkText ? 'bg-white/95 border-washi-200' : 'bg-sumi-900/95 border-sumi-600'
              ]">
                <button v-for="lang in languages" :key="lang.code" @click="selectLanguage(lang.code); isMobileMenuOpen = false" :class="[
                  'w-full text-left px-4 py-2 text-sm hover:transition-colors',
                  shouldUseDarkText
                    ? 'hover:bg-washi-50'
                    : 'hover:bg-sumi-700',
                  currentLocale === lang.code
                    ? (shouldUseDarkText ? 'text-sky-600 font-medium' : 'text-sky-400 font-medium')
                    : (shouldUseDarkText ? 'text-sumi-700' : 'text-washi-200')
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
import { Menu, X, Globe, Check } from 'lucide-vue-next'
import { messages } from '../locales'
import logoImg from '../assets/logo/logo.png'
import notegptLogo from '../assets/logo/notegpt.png'
import visualgptLogo from '../assets/logo/visualgpt.png'
import photogptLogo from '../assets/logo/photogpt.png'

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
const isDarkMode = ref(false)
let langMenuCloseTimer: ReturnType<typeof setTimeout> | null = null

const effectiveLocale = computed(() => {
  const loc = locale.value as string
  if (loc in messages) return loc as Locale
  return 'ja' as Locale
})

interface NavItem {
  key: 'features' | 'pricing' | 'about' | 'help'
  /** route: 路由跳转（如 /pricing）；section: 首页锚点滚动 */
  type: 'route' | 'section'
  target: string
}

const navItems: NavItem[] = [
  { key: 'features', type: 'section', target: 'features' },
  { key: 'pricing', type: 'route', target: '/pricing' },
  { key: 'about', type: 'route', target: '/about' },
  { key: 'help', type: 'route', target: '/help' }
]

/**
 * 统一导航处理：
 * - route 类型：直接走 Vue Router 跳转
 * - section 类型：首页直接滚动（补偿固定页眉高度），非首页先跳回首页再滚动
 */
const HEADER_OFFSET = 64

const scrollToElement = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top: y, behavior: 'smooth' })
}

const handleNavClick = (item: NavItem) => {
  if (item.type === 'route') {
    router.push(item.target)
    return
  }
  if (isHomePage.value) {
    scrollToElement(item.target)
  } else {
    router.push({ path: '/', hash: `#${item.target}` })
  }
}

const isProductMenuOpen = ref(false)
let productMenuCloseTimer: ReturnType<typeof setTimeout> | null = null

const selectedProduct = ref(0)

const productKeys: ('noteGPT' | 'visualGPT' | 'photoGPT')[] = ['noteGPT', 'visualGPT', 'photoGPT']

const productLogos = {
  noteGPT: notegptLogo,
  visualGPT: visualgptLogo,
  photoGPT: photogptLogo
}

const productsData = computed(() => messages[effectiveLocale.value]?.products ?? {})

/** 产品对应的外部官网链接 */
const productUrls: Record<string, string> = {
  noteGPT: 'https://notegpt.io',
  visualGPT: 'https://visualgpt.io',
  photoGPT: 'https://photogpt.io'
}

/** 处理产品下拉「免费开始」按钮点击 */
const handleProductCta = () => {
  const productKey = productKeys[selectedProduct.value]
  const url = productUrls[productKey]
  if (url) {
    window.open(url, '_blank', 'noopener noreferrer')
  }
}

/** 处理左侧产品列表项点击（logo/名称区域） */
const handleProductClick = (key: string) => {
  const url = productUrls[key]
  if (url) {
    window.open(url, '_blank', 'noopener noreferrer')
  }
}

const openProductMenu = () => {
  if (productMenuCloseTimer) {
    clearTimeout(productMenuCloseTimer)
    productMenuCloseTimer = null
  }
  isProductMenuOpen.value = true
}

const closeProductMenu = () => {
  productMenuCloseTimer = setTimeout(() => {
    isProductMenuOpen.value = false
    productMenuCloseTimer = null
  }, 150)
}

const cancelProductMenuClose = () => {
  if (productMenuCloseTimer) {
    clearTimeout(productMenuCloseTimer)
    productMenuCloseTimer = null
  }
}

// 动态获取语言列表
const languages = Object.entries(messages[effectiveLocale.value]?.header?.language ?? {}).map(([code, label]) => ({
  code,
  label
}));

const isHomePage = computed(() => {
  return router.currentRoute.value.path === '/'
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

const textColorClass = computed(() => {
  return shouldUseDarkText.value ? 'text-sumi-800' : 'text-white'
})

const navTextColorClass = computed(() => {
  return shouldUseDarkText.value ? 'text-sumi-700 hover:text-sky-500' : 'text-white/90 hover:text-white'
})

const langBtnClass = computed(() => {
  if (shouldUseDarkText.value) {
    return 'bg-washi-100 text-sumi-700 hover:bg-washi-200'
  }
  return 'bg-white/10 text-white/90 hover:bg-white/20'
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20

  if (isHomePage.value) {
    const sections = ['#home', '#products', '#features', '#about', '#contact']
    for (const sectionId of sections) {
      const element = document.querySelector(sectionId)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          const computedStyle = window.getComputedStyle(element)
          const bgColor = computedStyle.backgroundColor
          if (bgColor) {
            const brightness = getColorBrightness(bgColor)
            isDarkMode.value = brightness < 128
            break
          }
        }
      }
    }
  }
}

const getColorBrightness = (color: string): number => {
  const hex = color.replace(/^#/, '')
  if (hex.length === 6) {
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return (r * 299 + g * 587 + b * 114) / 1000
  }

  const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (rgbaMatch) {
    const r = parseInt(rgbaMatch[1])
    const g = parseInt(rgbaMatch[2])
    const b = parseInt(rgbaMatch[3])
    return (r * 299 + g * 587 + b * 114) / 1000
  }

  return 255
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
  if (isHomePage.value) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


