<template>
  <section id="about" class="py-12 bg-gradient-to-b from-washi-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-sumi-800 mb-4">
          {{ title }}
        </h2>
        <p class="text-lg text-sumi-600 max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>

      <!-- marquee container with gradient mask -->
      <div class="marquee-wrapper">
        <div class="marquee-track">
          <div
            v-for="(item, index) in marqueeItems"
            :key="index"
            class="marquee-card"
          >
            <div class="bg-white rounded-2xl p-6 border border-washi-200 shadow-soft hover:shadow-card transition-all duration-300 h-full">
              <div class="flex items-center justify-center space-x-1 mb-4">
                <Star v-for="i in item.rating" :key="i"
                  class="w-4 h-4 text-coral-400 fill-coral-400" />
              </div>

              <Quote class="w-8 h-8 text-sky-200 mb-4 mx-auto" />

              <p class="text-sm text-sumi-700 mb-6 leading-relaxed text-center">
                {{ item.content }}
              </p>

              <div class="flex flex-col items-center">
                <div
                  class="w-12 h-12 rounded-full bg-gradient-to-br from-sky-100 to-wisteria-100 flex items-center justify-center mb-3">
                  <span class="text-lg font-bold text-sky-500">{{ item.name.charAt(0) }}</span>
                </div>
                <div class="text-center">
                  <div class="font-bold text-sumi-800 text-sm">{{ item.name }}</div>
                  <div class="text-sumi-500 text-xs">{{ item.role }}</div>
                  <div class="text-xs text-sumi-400">{{ item.company }}</div>
                  <div class="flex items-center justify-center gap-1 mt-2 text-xs text-sumi-400">
                    <Calendar class="w-3 h-3" />
                    <span>{{ item.date }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Star, Quote, Calendar } from 'lucide-vue-next'
import { messages, type Locale } from '../locales'

const i18n = useI18n()
const locale = i18n.locale as unknown as { value: Locale }

const title = computed(() => messages[locale.value]?.testimonials?.title)
const description = computed(() => messages[locale.value]?.testimonials?.description)

// duplicated for seamless marquee loop
const marqueeItems = computed(() => {
  const items = messages[locale.value]?.testimonials?.items ?? []
  return [...items, ...items]
})
</script>

<style scoped>
.marquee-wrapper {
  overflow: hidden;
  /* gradient masks: transparent at edges, opaque in center */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
}

.marquee-track {
  display: flex;
  gap: 1.5rem;
  width: max-content;
  animation: marquee-scroll 40s linear infinite;
  padding: 1rem 0;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.marquee-card {
  flex-shrink: 0;
  width: 400px;
  max-width: calc(100vw - 2rem);
}

@media (min-width: 1024px) {
  .marquee-card {
    width: 450px;
  }
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
