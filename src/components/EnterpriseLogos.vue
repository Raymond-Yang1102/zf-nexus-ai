<template>
  <section class="py-12 bg-gradient-to-b from-white to-washi-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <p class="text-sm font-semibold text-sumi-500 uppercase tracking-wide mb-2">{{ subtitle }}</p>
        <h2 class="text-2xl sm:text-3xl font-bold text-sumi-800">{{ title }}</h2>
      </div>
    </div>

    <div ref="trackRef" class="relative"
      @mouseenter="pause" @mouseleave="resume">
      <div ref="innerRef" class="flex gap-8 whitespace-nowrap will-change-transform"
        :style="{ transform: `translateX(${offset}px)`, transition: isPaused ? 'transform 0.5s ease-out' : 'none' }">
        <div v-for="(logo, i) in displayLogos" :key="logo.id + '-' + i"
          class="h-14 w-auto flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300 inline-flex items-center justify-center">
          <img :src="logo.src" :alt="logo.alt" class="h-full object-contain" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Locale } from '@/locales'

const i18n = useI18n()
const locale = i18n.locale as unknown as { value: Locale }

const baseLogos = [
  { id: 1, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo1.png', alt: 'Enterprise Logo 1' },
  { id: 2, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo-youtube.png', alt: 'YouTube' },
  { id: 3, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo2.png', alt: 'Enterprise Logo 2' },
  { id: 4, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo3.png', alt: 'Enterprise Logo 3' },
  { id: 5, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo4.png', alt: 'Enterprise Logo 4' },
  { id: 6, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo5.png', alt: 'Enterprise Logo 5' },
  { id: 7, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo6.png', alt: 'Enterprise Logo 6' },
  { id: 8, src: 'https://cdn.notegpt.io/notegpt/static/home/logos/logo7.png', alt: 'Enterprise Logo 7' },
  { id: 9, src: 'https://cdn.static-boost.com/photogpt/static/logo-icon/1.png', alt: 'PhotoGPT Enterprise 1' },
  { id: 10, src: 'https://cdn.static-boost.com/photogpt/static/logo-icon/2.png', alt: 'PhotoGPT Enterprise 2' },
  { id: 11, src: 'https://cdn.static-boost.com/visualgpt/static/logo/BUSINESS_INSIDER.png', alt: 'Business Insider' },
  { id: 12, src: 'https://cdn.static-boost.com/visualgpt/static/logo/FOX.png', alt: 'FOX' },
  { id: 13, src: 'https://cdn.static-boost.com/visualgpt/static/logo/NBC.png', alt: 'NBC' },
  { id: 14, src: 'https://cdn.static-boost.com/visualgpt/static/logo/Amazon_logo.webp', alt: 'Amazon' },
]

// 展示三份拷贝，实现无缝循环：[原始] [副本1] [副本2]
const displayLogos = computed(() => [...baseLogos, ...baseLogos, ...baseLogos])

const innerRef = ref<HTMLElement | null>(null)
const offset = ref(0)
const isPaused = ref(false)
let rafId: number | null = null
let lastTime = 0
const SPEED = 0.6 // px/frame at ~60fps

const title = computed(() => {
  const titles: Record<Locale, string> = {
    ja: '世界有数の企業が信頼',
    zh: '全球领先企业的共同选择',
    en: 'Trusted by Leading Companies Worldwide'
  }
  return titles[locale.value]
})

const subtitle = computed(() => {
  const subtitles: Record<Locale, string> = {
    ja: 'トップカンパニーに選ばれています',
    zh: 'Trusted by Leading Companies',
    en: 'Trusted by Leading Companies'
  }
  return subtitles[locale.value]
})

/** 单组 logo 的总宽度（用于计算循环回绕点） */
let singleSetWidth = 0

const measureWidth = () => {
  if (!innerRef.value || baseLogos.length === 0) return
  // 取第一个子元素估算单个 logo 宽度（含 gap）
  const firstChild = innerRef.value.children[0] as HTMLElement | undefined
  if (firstChild) {
    const style = getComputedStyle(innerRef.value)
    const gap = parseFloat(style.gap) || 32
    singleSetWidth = (firstChild.offsetWidth + gap) * baseLogos.length
  }
}

const animate = (timestamp: number) => {
  if (!lastTime) lastTime = timestamp
  const delta = timestamp - lastTime
  if (delta >= 16) { // ~60fps throttle
    lastTime = timestamp
    if (!isPaused.value && singleSetWidth > 0) {
      offset.value -= SPEED
      // 当偏移超过一组宽度时，回绕到起始位置（因为有三份拷贝，视觉无感）
      if (Math.abs(offset.value) >= singleSetWidth) {
        offset.value = offset.value + singleSetWidth
      }
    }
  }
  rafId = requestAnimationFrame(animate)
}

const pause = () => { isPaused.value = true }
const resume = () => { isPaused.value = false }

onMounted(() => {
  // 等待图片加载后测量宽度
  setTimeout(() => {
    measureWidth()
    rafId = requestAnimationFrame(animate)
  }, 500)
})

onUnmounted(() => {
  if (rafId != null) cancelAnimationFrame(rafId)
})
</script>
