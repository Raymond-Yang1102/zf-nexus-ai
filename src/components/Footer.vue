<template>
  <footer id="contact" class="bg-sumi-900 text-washi-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center space-x-2 mb-4">
            <!-- logo -->
            <img :src="logoImg" alt="logo" class="w-12 h-12">
            <span class="font-bold text-xl text-white">{{ footerData?.company }}</span>
          </div>
          <p class="text-washi-200 text-sm mb-6 leading-relaxed">
            {{ footerData?.description }}
          </p>
          <div class="flex items-center space-x-4">
            <a v-for="social in socialLinks" :key="social.href" :href="social.href"
              class="w-10 h-10 rounded-lg bg-sumi-800/80 flex items-center justify-center text-washi-200 hover:text-white hover:bg-sky-600 transition-colors">
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div v-for="section in footerLinks" :key="section.title">
          <h4 class="font-semibold mb-4 text-white">{{ section.title }}</h4>
          <ul class="space-y-3">
            <li v-for="(item, idx) in section.items" :key="idx">
              <template v-if="item.isLink">
                <button @click="navigateTo((item as any).href, (item as any).isExternal)"
                  class="text-washi-300 hover:text-white text-sm transition-colors bg-transparent border-none cursor-pointer">
                  {{ item.label }}
                </button>
              </template>
              <template v-else>
                <div class="text-sm">
                  <span v-if="item.label" class="text-washi-300 text-xs block mb-0.5">{{ item.label }}</span>
                  <span class="text-washi-100">{{ (item as any).value }}</span>
                </div>
              </template>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-sumi-600/50 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
        <p class="text-washi-200 text-sm">
          {{ footerData?.copyright }}
        </p>
        <div class="flex items-center space-x-6 mt-4 md:mt-0">
          <button @click="router.push('/privacy')"
            class="text-washi-200 hover:text-white text-sm transition-colors bg-transparent border-none cursor-pointer">
            {{ footerData?.links?.privacy }}
          </button>
          <button @click="router.push('/terms')"
            class="text-washi-200 hover:text-white text-sm transition-colors bg-transparent border-none cursor-pointer">
            {{ footerData?.links?.terms }}
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Github, Twitter, Linkedin, Mail } from 'lucide-vue-next'
import { messages } from '../locales'
import logoImg from '../assets/logo/logo.png'

type Locale = keyof typeof messages

const { locale } = useI18n()

const effectiveLocale = computed<Locale>(() => {
  const loc = locale.value as string
  if (loc in messages) return loc as Locale
  return 'ja' as Locale
})
const router = useRouter()

const socialLinks = [
  { icon: Github, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Mail, href: '#' }
]

const footerData = computed(() => messages[effectiveLocale.value]?.footer ?? { company: '', copyright: '', description: '', links: {}, sections: {}, contactInfo: {} })

const contactInfoData = computed(() => footerData.value?.contactInfo ?? { title: '', email: '', address: '', phone: '', hours: '' })

const footerLinks = computed(() => {
  const ft = footerData.value
  const msg = messages[effectiveLocale.value]
  return [
    {
      title: ft?.sections?.products ?? '',
      items: [
        { label: 'NoteGPT', isLink: true, href: 'https://notegpt.io', isExternal: true },
        { label: 'VisualGPT', isLink: true, href: 'https://visualgpt.io', isExternal: true },
        { label: 'PhotoGPT', isLink: true, href: 'https://photogpt.io', isExternal: true }
      ]
    },
    {
      title: ft?.sections?.company ?? '',
      items: [
        { label: ft?.sections?.about ?? '', isLink: true, href: '/about', isExternal: false },
        { label: msg?.header?.nav?.help ?? '', isLink: true, href: '/help', isExternal: false }
      ]
    },
    {
      title: contactInfoData.value.title,
      items: [
        { label: ft?.contactLabels?.email ?? 'Email', value: contactInfoData.value.email, isLink: false },
        { label: ft?.contactLabels?.address ?? 'Address', value: contactInfoData.value.address, isLink: false },
        { label: ft?.contactLabels?.phone ?? 'Phone', value: contactInfoData.value.phone, isLink: false },
        { label: ft?.contactLabels?.hours ?? 'Hours', value: contactInfoData.value.hours, isLink: false }
      ]
    }
  ]
})

const navigateTo = (href: string, isExternal: boolean) => {
  if (isExternal) {
    window.open(href, '_blank', 'noopener noreferrer')
  } else {
    router.push(href)
  }
}
</script>
