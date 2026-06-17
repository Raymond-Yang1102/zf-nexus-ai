import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './style.css'
import router from './router'
import { messages, type Locale } from './locales'
import { DEFAULT_LOCALE, resolveInitialLocale } from './config/locale'

export { messages, type Locale }

const initialLocale = resolveInitialLocale()

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: DEFAULT_LOCALE,
  messages
})

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')
