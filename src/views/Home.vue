<template>
  <div class="min-h-screen bg-washi-50">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />
    <main class="relative">
      <div class="absolute inset-0 seigaiha-pattern opacity-5 pointer-events-none"></div>

      <!-- Hero 区域（id 由 Hero.vue 内部提供，此处仅做布局包裹） -->
      <section class="relative">
        <Hero />
      </section>

      <!-- Hero(muji渐变末尾 #f2ebe4) → Products(#fdfcfb) 渐变过渡带 -->
      <div class="relative h-24 -mt-24 pointer-events-none z-10">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#f2ebe4]/40 to-washi-50"></div>
      </div>

      <!-- Products 区域（id 由 Products.vue 内部提供） -->
      <section class="relative">
        <Products />
      </section>

      <!-- Products(#fdfcfb) → Features(#ffffff) 渐变过渡带 -->
      <div class="section-fade h-24 -mt-6 pointer-events-none">
        <div class="absolute inset-0 bg-gradient-to-b from-washi-50 to-white"></div>
      </div>

      <!-- Features 区域（id 由 Features.vue 内部提供） -->
      <section class="relative">
        <Features />
      </section>

      <!-- Enterprise Logos 区域 -->
      <section class="relative">
        <EnterpriseLogos />
      </section>

      <!-- Testimonials 区域（id 由 Testimonials.vue 内部提供，同为白色背景无需过渡） -->
      <section class="relative">
        <Testimonials />
      </section>
    </main>

    <!-- 页脚过渡带：浅色(#ffffff) → 深色(#0f172a) -->
    <section class="relative">
      <div
        class="absolute bottom-full left-0 right-0 h-40 bg-gradient-to-t from-sumi-900 via-sumi-900/30 to-transparent pointer-events-none">
      </div>
      <Footer />
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Products from '@/components/Products.vue'
import Features from '@/components/Features.vue'
import EnterpriseLogos from '@/components/EnterpriseLogos.vue'
import Testimonials from '@/components/Testimonials.vue'
import Footer from '@/components/Footer.vue'

defineProps<{
  currentLocale: string
}>()

const emit = defineEmits<{
  (e: 'change-locale', lang: string): void
}>()

const router = useRouter()

const handleLocaleChange = (lang: string) => {
  emit('change-locale', lang)
}

/** 处理 hash 锚点滚动：当路由带有 #features / #about / #footer 等时触发 */
onMounted(async () => {
  await nextTick()
  const hash = router.currentRoute.value.hash
  if (hash) {
    // 多次重试等待异步内容完全渲染
    const tryScroll = (retries = 5) => {
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          const HEADER_OFFSET = 64
          const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
          window.scrollTo({ top: y, behavior: 'smooth' })
        } else if (retries > 0) {
          tryScroll(retries - 1)
        }
      }, 200)
    }
    tryScroll()
  }
})
</script>

