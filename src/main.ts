import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './style.css'
import router from './router'
import { messages, type Locale } from './locales'

export { messages, type Locale }

// ===== 多语言初始化配置 =====
/** 项目专属的本地存储键名，用于区分"回访用户"与"首次访问" */
export const LOCALE_STORAGE_KEY = 'locale'
/** 可配置的默认语种：当系统语言无法匹配到支持语种时使用 */
export const DEFAULT_LOCALE: Locale = 'ja'
/** 项目支持的所有语种 */
const SUPPORTED_LOCALES: Locale[] = ['ja', 'zh', 'en']

/**
 * 检测浏览器/系统语言，并匹配到项目支持的语种。
 * 匹配规则：提取浏览器语言的短代码（如 zh-CN → zh），
 * 在支持列表中查找匹配项，找不到则返回可配置的默认语种。
 */
function detectSystemLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE

  const browserLang = navigator.language
  const shortLang = browserLang.split('-')[0].toLowerCase()

  return SUPPORTED_LOCALES.includes(shortLang as Locale)
    ? (shortLang as Locale)
    : DEFAULT_LOCALE
}

/**
 * 解析初始语种，区分两种场景：
 * 1. 本地存储中存在语言标识 → 回访用户，恢复上次选择
 * 2. 本地存储中无语言标识   → 首次访问，检测系统语言并自动保存
 */
function resolveInitialLocale(): Locale {
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY)

  if (saved !== null) {
    // 场景1：回访用户 → 恢复已保存的语种（含有效性校验）
    if (SUPPORTED_LOCALES.includes(saved as Locale)) {
      return saved as Locale
    }
  }

  // 场景2：首次访问 → 检测系统语言并持久化
  const systemLocale = detectSystemLocale()
  localStorage.setItem(LOCALE_STORAGE_KEY, systemLocale)
  return systemLocale
}

const initialLocale = resolveInitialLocale()

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'ja',
  messages
})

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')
