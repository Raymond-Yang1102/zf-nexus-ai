<template>
  <div class="min-h-screen bg-gray-50">
    <Header :currentLocale="currentLocale" @change-locale="handleLocaleChange" />

    <main class="pt-16">
      <!-- Hero -->
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
              class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Building2 class="w-8 h-8 text-white" />
            </div>
            <h1 class="text-3xl sm:text-4xl font-bold text-white mb-4">
              {{ aboutData?.title }}
            </h1>
            <p class="text-lg text-white/80 max-w-3xl mx-auto">
              {{ aboutData?.subtitle }}
            </p>
          </div>
        </div>
      </section>

      <!-- Highlights -->
      <section class="py-16">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="item in highlights" :key="item.key"
              class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div class="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center mx-auto mb-5">
                <component :is="item.icon" class="w-7 h-7 text-sky-600" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-3">{{ aboutData?.highlights?.[item.key]?.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ aboutData?.highlights?.[item.key]?.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Story -->
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center space-x-4 mb-8">
            <div class="w-12 h-12 rounded-xl bg-wisteria-100 flex items-center justify-center">
              <Globe class="w-6 h-6 text-wisteria-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">{{ aboutData?.story?.title }}</h2>
          </div>
          <div class="space-y-4">
            <p v-for="(paragraph, idx) in aboutData?.story?.content" :key="idx" class="text-gray-600 leading-relaxed">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </section>

      <!-- Team Values -->
      <section class="py-16">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center space-x-4 mb-10">
            <div class="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <Users class="w-6 h-6 text-green-600" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">{{ aboutData?.team?.title }}</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <div v-for="(value, idx) in aboutData?.team?.values" :key="idx"
              class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start space-x-4">
              <div class="w-10 h-10 rounded-lg bg-coral-100 flex items-center justify-center flex-shrink-0">
                <Award class="w-5 h-5 text-coral-600" />
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">{{ value.title }}</h4>
                <p class="text-sm text-gray-600">{{ value.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Building2, Target, Users, Award, Globe, Lightbulb } from 'lucide-vue-next'
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

const highlights = [
  { icon: Target, key: 'mission' },
  { icon: Lightbulb, key: 'vision' },
  { icon: Award, key: 'values' }
] as const
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