<template>
  <div class="navbar">
    <div class="nav-container">
      <div class="nav-left">
        <router-link :to="localizePath('/')" class="logo-link">
          <div class="logo">✨ InspireAI</div>
        </router-link>
        <div class="main-nav-links">
          <router-link :to="localizePath('/')" class="nav-item">{{ t('nav.home') }}</router-link>
          <div class="dropdown" @mouseenter="openProductDropdown" @mouseleave="closeProductDropdown">
            <button class="dropdown-btn">{{ t('nav.products') }} <i class="fas fa-chevron-down"></i></button>
            <div class="dropdown-content" :class="{ open: productDropdownOpen }" @mouseenter="openProductDropdown"
              @mouseleave="closeProductDropdown">
              <div class="dropdown-left">
                <div class="dropdown-section">
                  <h4>{{ t('nav.productSection') }}</h4>
                  <div v-for="product in products" :key="product.id" class="product-item"
                    :class="{ active: activeProduct === product.id }" @mouseenter="setActiveProduct(product.id)"
                    @click="handleProductItemClick(product.id)">
                    <img :src="product.icon" :alt="product.name" class="product-icon">
                    <span class="product-name">{{ product.name }}</span>
                  </div>
                </div>
              </div>
              <div class="dropdown-right">
                <div v-if="activeProduct === 'notegpt'" class="product-detail">
                  <div class="detail-header">
                    <img :src="notegptLogo" alt="NoteGPT" class="detail-icon">
                    <div>
                      <h3>NoteGPT</h3>
                      <p>{{ t('nav.noteGPTDesc') }}</p>
                    </div>
                  </div>
                  <div class="detail-content">
                    <div class="detail-section">
                      <h4><i class="fas fa-cogs"></i> {{ t('nav.coreFeatures') }}</h4>
                      <ul class="detail-features">
                        <li><i class="fas fa-check"></i> {{ t('nav.noteFeature1') }}</li>
                        <li><i class="fas fa-check"></i> {{ t('nav.noteFeature2') }}</li>
                        <li><i class="fas fa-check"></i> {{ t('nav.noteFeature3') }}</li>
                      </ul>
                    </div>
                    <div class="detail-section">
                      <h4><i class="fas fa-users"></i> {{ t('nav.useCases') }}</h4>
                      <div class="use-case-tags">
                        <span class="use-tag">
                          <component :is="getScenarioIcon('videoSummarization')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.videoSummarization') }}</span>
                        </span>
                        <span class="use-tag">
                          <component :is="getScenarioIcon('pdfAnalysis')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.pdfAnalysis') }}</span>
                        </span>
                        <span class="use-tag">
                          <component :is="getScenarioIcon('knowledgeMapping')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.knowledgeMapping') }}</span>
                        </span>
                        <span class="use-tag">
                          <component :is="getScenarioIcon('flashcardCreation')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.flashcardCreation') }}</span>
                        </span>
                        <span class="use-tag">
                          <component :is="getScenarioIcon('documentQA')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.documentQA') }}</span>
                        </span>
                      </div>
                    </div>
                    <div class="detail-section">
                      <h4><i class="fas fa-lightbulb"></i> {{ t('nav.userValue') }}</h4>
                      <p class="value-text">{{ t('nav.noteValue') }}</p>
                    </div>
                  </div>
                  <a href="https://notegpt.io" target="_blank" class="detail-link">{{ t('nav.learnMore') }} →</a>
                </div>
                <div v-else-if="activeProduct === 'visualgpt'" class="product-detail">
                  <div class="detail-header">
                    <img :src="visualgptLogo" alt="VisualGPT" class="detail-icon">
                    <div>
                      <h3>VisualGPT</h3>
                      <p>{{ t('nav.visualGPTDesc') }}</p>
                    </div>
                  </div>
                  <div class="detail-content">
                    <div class="detail-section">
                      <h4><i class="fas fa-cogs"></i> {{ t('nav.coreFeatures') }}</h4>
                      <ul class="detail-features">
                        <li><i class="fas fa-check"></i> {{ t('nav.visualFeature1') }}</li>
                        <li><i class="fas fa-check"></i> {{ t('nav.visualFeature2') }}</li>
                        <li><i class="fas fa-check"></i> {{ t('nav.visualFeature3') }}</li>
                      </ul>
                    </div>
                    <div class="detail-section">
                      <h4><i class="fas fa-users"></i> {{ t('nav.useCases') }}</h4>
                      <div class="use-case-tags">
                        <span class="use-tag">
                          <component :is="getScenarioIcon('imageGeneration')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.imageGeneration') }}</span>
                        </span>
                        <span class="use-tag">
                          <component :is="getScenarioIcon('videoCreation')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.videoCreation') }}</span>
                        </span>
                        <span class="use-tag">
                          <component :is="getScenarioIcon('marketingDesign')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.marketingDesign') }}</span>
                        </span>
                        <span class="use-tag">
                          <component :is="getScenarioIcon('socialMedia')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.socialMedia') }}</span>
                        </span>
                        <span class="use-tag">
                          <component :is="getScenarioIcon('brandAssets')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.brandAssets') }}</span>
                        </span>
                      </div>
                    </div>
                    <div class="detail-section">
                      <h4><i class="fas fa-lightbulb"></i> {{ t('nav.userValue') }}</h4>
                      <p class="value-text">{{ t('nav.visualValue') }}</p>
                    </div>
                  </div>
                  <a href="https://visualgpt.io" target="_blank" class="detail-link">{{ t('nav.learnMore') }} →</a>
                </div>
                <div v-else-if="activeProduct === 'photogpt'" class="product-detail">
                  <div class="detail-header">
                    <img :src="photogptLogo" alt="PhotoGPT" class="detail-icon">
                    <div>
                      <h3>PhotoGPT</h3>
                      <p>{{ t('nav.photoGPTDesc') }}</p>
                    </div>
                  </div>
                  <div class="detail-content">
                    <div class="detail-section">
                      <h4><i class="fas fa-cogs"></i> {{ t('nav.coreFeatures') }}</h4>
                      <ul class="detail-features">
                        <li><i class="fas fa-check"></i> {{ t('nav.photoFeature1') }}</li>
                        <li><i class="fas fa-check"></i> {{ t('nav.photoFeature2') }}</li>
                        <li><i class="fas fa-check"></i> {{ t('nav.photoFeature3') }}</li>
                      </ul>
                    </div>
                    <div class="detail-section">
                      <h4><i class="fas fa-users"></i> {{ t('nav.useCases') }}</h4>
                      <div class="use-case-tags">
                        <span class="use-tag">
                          <component :is="getScenarioIcon('professionalHeadshots')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.professionalHeadshots') }}</span>
                        </span>
                        <span class="use-tag">
                          <component :is="getScenarioIcon('personalBranding')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.personalBranding') }}</span>
                        </span>
                        <span class="use-tag">
                          <component :is="getScenarioIcon('teamPortraits')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.teamPortraits') }}</span>
                        </span>
                        <span class="use-tag">
                          <component :is="getScenarioIcon('profilePictures')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.profilePictures') }}</span>
                        </span>
                        <span class="use-tag">
                          <component :is="getScenarioIcon('corporateImages')" class="scenario-icon-sm" /><span>{{
                            t('scenarios.corporateImages') }}</span>
                        </span>
                      </div>
                    </div>
                    <div class="detail-section">
                      <h4><i class="fas fa-lightbulb"></i> {{ t('nav.userValue') }}</h4>
                      <p class="value-text">{{ t('nav.photoValue') }}</p>
                    </div>
                  </div>
                  <a href="https://photogpt.io" target="_blank" class="detail-link">{{ t('nav.learnMore') }} →</a>
                </div>
                <div v-else class="product-detail default">
                  <div class="default-content">
                    <div class="default-icon">👈</div>
                    <h3>{{ t('nav.selectProduct') }}</h3>
                    <p>{{ t('nav.selectProductDesc') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link :to="localizePath('/about')" class="nav-item">{{ t('nav.about') }}</router-link>
        </div>
      </div>
      <div class="nav-right">
        <button class="btn-nav" @click="handleTrialClick">{{ t('nav.trial') }}</button>
        <div class="lang-dropdown" @mouseenter="openLangDropdown" @mouseleave="closeLangDropdown">
          <button class="lang-dropdown-btn">
            {{ t(`nav.langCodes.${currentLocale}`) }}
            <i class="fas fa-chevron-down"></i>
          </button>
          <div class="lang-dropdown-content" :class="{ open: langDropdownOpen }" @mouseenter="openLangDropdown"
            @mouseleave="closeLangDropdown">
            <button v-for="lang in languages" :key="lang.code" @click="handleLocaleChange(lang.code)">
              {{ lang.label }}
            </button>
          </div>
        </div>
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <div class="mobile-menu-overlay" :class="{ open: mobileMenuOpen }" @click="closeMobileMenu"></div>
    <div class="mobile-product-overlay" :class="{ open: mobileProductDropdownOpen && activeMobileProduct }"
      @click="closeMobileProductDropdown"></div>
    <div class="mobile-menu"
      :class="{ open: mobileMenuOpen, 'has-detail': mobileProductDropdownOpen && activeMobileProduct }">
      <button class="mobile-menu-close" @click="closeMobileMenu">
        <i class="fas fa-times"></i>
      </button>
      <div class="mobile-nav-links">
        <router-link :to="localizePath('/')" class="mobile-nav-item" @click="closeMobileMenu">{{ t('nav.home') }}</router-link>
        <div class="mobile-dropdown">
          <button class="mobile-dropdown-btn" @click="toggleMobileProductDropdown">
            {{ t('nav.products') }} <i class="fas fa-chevron-down" :class="{ rotated: mobileProductDropdownOpen }"></i>
          </button>
          <div class="mobile-dropdown-content" :class="{ open: mobileProductDropdownOpen }">
            <div v-for="product in products" :key="product.id" class="mobile-product-item"
              :class="{ active: activeMobileProduct === product.id }" @click="handleMobileProductClick(product.id)"
              @mouseenter="activeMobileProduct = product.id">
              <img :src="product.icon" :alt="product.name" class="mobile-product-icon">
              <span>{{ product.name }}</span>
            </div>
          </div>
        </div>
        <router-link :to="localizePath('/about')" class="mobile-nav-item" @click="closeMobileMenu">{{ t('nav.about') }}</router-link>
        <button class="mobile-trial-btn" @click="handleTrialClick(); closeMobileMenu();">{{ t('nav.trial') }}</button>
        <div class="mobile-lang-dropdown">
          <button class="mobile-lang-dropdown-btn" @click="toggleMobileLangDropdown">
            {{ t(`nav.languages.${currentLocale}`) }}
            <i class="fas fa-chevron-down" :class="{ rotated: mobileLangDropdownOpen }"></i>
          </button>
          <div class="mobile-lang-dropdown-content" :class="{ open: mobileLangDropdownOpen }">
            <button v-for="lang in languages" :key="lang.code"
              @click="handleLocaleChange(lang.code); closeMobileMenu();" class="mobile-lang-dropdown-item"
              :class="{ active: currentLocale === lang.code }">
              {{ lang.label }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-product-detail-panel" :class="{ open: mobileProductDropdownOpen && activeMobileProduct }">
      <button class="mobile-detail-close" @click="closeMobileProductDropdown">
        <i class="fas fa-times"></i>
      </button>
      <div v-if="activeMobileProduct === 'notegpt'" class="mobile-detail-content">
        <div class="mobile-detail-header">
          <img :src="notegptLogo" alt="NoteGPT" class="mobile-detail-icon">
          <div>
            <h3>NoteGPT</h3>
            <p>{{ t('nav.noteGPTDesc') }}</p>
          </div>
        </div>
        <div class="mobile-detail-features">
          <div class="mobile-feature">
            <i class="fas fa-check"></i>
            <span>{{ t('nav.noteFeature1') }}</span>
          </div>
          <div class="mobile-feature">
            <i class="fas fa-check"></i>
            <span>{{ t('nav.noteFeature2') }}</span>
          </div>
          <div class="mobile-feature">
            <i class="fas fa-check"></i>
            <span>{{ t('nav.noteFeature3') }}</span>
          </div>
        </div>
        <div class="mobile-detail-scenarios">
          <h4><i class="fas fa-users"></i> {{ t('nav.useCases') }}</h4>
          <div class="mobile-scenario-tags">
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('videoSummarization')" class="scenario-icon-sm" /><span>{{
                t('scenarios.videoSummarization') }}</span>
            </span>
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('pdfAnalysis')" class="scenario-icon-sm" /><span>{{
                t('scenarios.pdfAnalysis') }}</span>
            </span>
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('knowledgeMapping')" class="scenario-icon-sm" /><span>{{
                t('scenarios.knowledgeMapping') }}</span>
            </span>
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('flashcardCreation')" class="scenario-icon-sm" /><span>{{
                t('scenarios.flashcardCreation') }}</span>
            </span>
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('documentQA')" class="scenario-icon-sm" /><span>{{
                t('scenarios.documentQA') }}</span>
            </span>
          </div>
        </div>
        <a href="https://notegpt.io" target="_blank" class="mobile-detail-link">{{ t('nav.learnMore') }} →</a>
      </div>
      <div v-else-if="activeMobileProduct === 'visualgpt'" class="mobile-detail-content">
        <div class="mobile-detail-header">
          <img :src="visualgptLogo" alt="VisualGPT" class="mobile-detail-icon">
          <div>
            <h3>VisualGPT</h3>
            <p>{{ t('nav.visualGPTDesc') }}</p>
          </div>
        </div>
        <div class="mobile-detail-features">
          <div class="mobile-feature">
            <i class="fas fa-check"></i>
            <span>{{ t('nav.visualFeature1') }}</span>
          </div>
          <div class="mobile-feature">
            <i class="fas fa-check"></i>
            <span>{{ t('nav.visualFeature2') }}</span>
          </div>
          <div class="mobile-feature">
            <i class="fas fa-check"></i>
            <span>{{ t('nav.visualFeature3') }}</span>
          </div>
        </div>
        <div class="mobile-detail-scenarios">
          <h4><i class="fas fa-users"></i> {{ t('nav.useCases') }}</h4>
          <div class="mobile-scenario-tags">
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('imageGeneration')" class="scenario-icon-sm" /><span>{{
                t('scenarios.imageGeneration') }}</span>
            </span>
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('videoCreation')" class="scenario-icon-sm" /><span>{{
                t('scenarios.videoCreation') }}</span>
            </span>
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('marketingDesign')" class="scenario-icon-sm" /><span>{{
                t('scenarios.marketingDesign') }}</span>
            </span>
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('socialMedia')" class="scenario-icon-sm" /><span>{{
                t('scenarios.socialMedia') }}</span>
            </span>
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('brandAssets')" class="scenario-icon-sm" /><span>{{
                t('scenarios.brandAssets') }}</span>
            </span>
          </div>
        </div>
        <a href="https://visualgpt.io" target="_blank" class="mobile-detail-link">{{ t('nav.learnMore') }} →</a>
      </div>
      <div v-else-if="activeMobileProduct === 'photogpt'" class="mobile-detail-content">
        <div class="mobile-detail-header">
          <img :src="photogptLogo" alt="PhotoGPT" class="mobile-detail-icon">
          <div>
            <h3>PhotoGPT</h3>
            <p>{{ t('nav.photoGPTDesc') }}</p>
          </div>
        </div>
        <div class="mobile-detail-features">
          <div class="mobile-feature">
            <i class="fas fa-check"></i>
            <span>{{ t('nav.photoFeature1') }}</span>
          </div>
          <div class="mobile-feature">
            <i class="fas fa-check"></i>
            <span>{{ t('nav.photoFeature2') }}</span>
          </div>
          <div class="mobile-feature">
            <i class="fas fa-check"></i>
            <span>{{ t('nav.photoFeature3') }}</span>
          </div>
        </div>
        <div class="mobile-detail-scenarios">
          <h4><i class="fas fa-users"></i> {{ t('nav.useCases') }}</h4>
          <div class="mobile-scenario-tags">
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('professionalHeadshots')" class="scenario-icon-sm" /><span>{{
                t('scenarios.professionalHeadshots') }}</span>
            </span>
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('personalBranding')" class="scenario-icon-sm" /><span>{{
                t('scenarios.personalBranding') }}</span>
            </span>
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('teamPortraits')" class="scenario-icon-sm" /><span>{{
                t('scenarios.teamPortraits') }}</span>
            </span>
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('profilePictures')" class="scenario-icon-sm" /><span>{{
                t('scenarios.profilePictures') }}</span>
            </span>
            <span class="mobile-scenario-tag">
              <component :is="getScenarioIcon('corporateImages')" class="scenario-icon-sm" /><span>{{
                t('scenarios.corporateImages') }}</span>
            </span>
          </div>
        </div>
        <a href="https://photogpt.io" target="_blank" class="mobile-detail-link">{{ t('nav.learnMore') }} →</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, markRaw, h } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import notegptLogo from '@/assets/logo/notegpt.png';
import visualgptLogo from '@/assets/logo/visualgpt.png';
import photogptLogo from '@/assets/logo/photogpt.png';

const { t, locale, messages } = useI18n();
const router = useRouter();

const VideoSummarizationIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('rect', { x: '2', y: '4', width: '20', height: '16', rx: '2', stroke: '#FF8C42', strokeWidth: '2' }),
      h('polygon', { points: '8,8 8,16 16,12', fill: '#FF8C42' }),
      h('path', { d: 'M14 5h4', stroke: '#FF8C42', strokeWidth: '2', strokeLinecap: 'round' }),
      h('path', { d: 'M14 19h4', stroke: '#FF8C42', strokeWidth: '2', strokeLinecap: 'round' })
    ])
  }
});

const PdfAnalysisIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('path', { d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z', stroke: '#667EEA', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }),
      h('path', { d: 'M14 2v6h6M16 13H8M16 17H8', stroke: '#667EEA', strokeWidth: '2', strokeLinecap: 'round' }),
      h('circle', { cx: '19', cy: '13', r: '1', fill: '#667EEA' })
    ])
  }
});

const KnowledgeMappingIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('circle', { cx: '12', cy: '12', r: '4', stroke: '#667EEA', strokeWidth: '2', fill: '#EDE7F6' }),
      h('circle', { cx: '6', cy: '7', r: '3', stroke: '#764BA2', strokeWidth: '2' }),
      h('circle', { cx: '18', cy: '7', r: '3', stroke: '#764BA2', strokeWidth: '2' }),
      h('circle', { cx: '6', cy: '17', r: '3', stroke: '#764BA2', strokeWidth: '2' }),
      h('circle', { cx: '18', cy: '17', r: '3', stroke: '#764BA2', strokeWidth: '2' }),
      h('line', { x1: '12', y1: '8', x2: '6', y2: '10', stroke: '#667EEA', strokeWidth: '1.5' }),
      h('line', { x1: '12', y1: '8', x2: '18', y2: '10', stroke: '#667EEA', strokeWidth: '1.5' }),
      h('line', { x1: '12', y1: '16', x2: '6', y2: '14', stroke: '#667EEA', strokeWidth: '1.5' }),
      h('line', { x1: '12', y1: '16', x2: '18', y2: '14', stroke: '#667EEA', strokeWidth: '1.5' })
    ])
  }
});

const FlashcardCreationIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('rect', { x: '3', y: '4', width: '18', height: '16', rx: '2', stroke: '#667EEA', strokeWidth: '2' }),
      h('line', { x1: '3', y1: '11', x2: '21', y2: '11', stroke: '#764BA2', strokeWidth: '1.5' }),
      h('circle', { cx: '18', cy: '7', r: '1.5', fill: '#F5A623' })
    ])
  }
});

const DocumentQAIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('path', { d: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z', stroke: '#667EEA', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }),
      h('path', { d: 'M8 14s1.5-2 4-2 4 2 4 2', stroke: '#764BA2', strokeWidth: '2', strokeLinecap: 'round' })
    ])
  }
});

const ImageGenerationIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('rect', { x: '3', y: '3', width: '18', height: '18', rx: '2', stroke: '#F5A623', strokeWidth: '2' }),
      h('circle', { cx: '8', cy: '8', r: '3', fill: '#F5A623' }),
      h('path', { d: 'M15 12l3 3 3-3', stroke: '#F5A623', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' })
    ])
  }
});

const VideoCreationIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('rect', { x: '2', y: '4', width: '20', height: '16', rx: '2', stroke: '#F093FB', strokeWidth: '2' }),
      h('polygon', { points: '8,8 8,16 16,12', fill: '#F093FB' }),
      h('path', { d: 'M19 5h1M19 19h1', stroke: '#F093FB', strokeWidth: '2', strokeLinecap: 'round' }),
      h('circle', { cx: '7', cy: '7', r: '1', fill: '#F093FB' })
    ])
  }
});

const MarketingDesignIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('path', { d: 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9', stroke: '#F5A623', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }),
      h('circle', { cx: '12', cy: '13', r: '3', stroke: '#FF8C42', strokeWidth: '2' }),
      h('circle', { cx: '12', cy: '13', r: '1', fill: '#FF8C42' })
    ])
  }
});

const SocialMediaIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('rect', { x: '2', y: '2', width: '20', height: '20', rx: '5', stroke: '#F5A623', strokeWidth: '2' }),
      h('path', { d: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z', stroke: '#FF8C42', strokeWidth: '2' }),
      h('line', { x1: '17.5', y1: '6.5', x2: '17.51', y2: '6.5', stroke: '#F5A623', strokeWidth: '2' })
    ])
  }
});

const BrandAssetsIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('rect', { x: '6', y: '4', width: '12', height: '16', rx: '2', stroke: '#F5A623', strokeWidth: '2' }),
      h('path', { d: 'M10 4V20M14 4V20', stroke: '#FF8C42', strokeWidth: '2', strokeLinecap: 'round' }),
      h('path', { d: 'M6 9h12', stroke: '#F5A623', strokeWidth: '2', strokeLinecap: 'round' })
    ])
  }
});

const ProfessionalHeadshotsIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('circle', { cx: '12', cy: '8', r: '5', stroke: '#4FACFE', strokeWidth: '2' }),
      h('path', { d: 'M7 22h10v-6a6 6 0 00-10 0v6z', stroke: '#00F2FE', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }),
      h('circle', { cx: '10', cy: '7', r: '0.5', fill: '#4FACFE' }),
      h('circle', { cx: '14', cy: '7', r: '0.5', fill: '#4FACFE' })
    ])
  }
});

const PersonalBrandingIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('path', { d: 'M22 11.08V12a10 10 0 11-5.93-9.14', stroke: '#F5A623', strokeWidth: '2', strokeLinecap: 'round' }),
      h('polyline', { points: '22,4 12,14.01 9,11.01', stroke: '#F5A623', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' })
    ])
  }
});

const TeamPortraitsIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('circle', { cx: '12', cy: '8', r: '5', stroke: '#4FACFE', strokeWidth: '2' }),
      h('circle', { cx: '5', cy: '8', r: '4', stroke: '#4FACFE', strokeWidth: '2' }),
      h('circle', { cx: '19', cy: '8', r: '4', stroke: '#4FACFE', strokeWidth: '2' }),
      h('path', { d: 'M12 22V13M5 22V12M19 22V12', stroke: '#00F2FE', strokeWidth: '2', strokeLinecap: 'round' }),
      h('path', { d: 'M5 12h14', stroke: '#4FACFE', strokeWidth: '2', strokeLinecap: 'round' })
    ])
  }
});

const ProfilePicturesIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('circle', { cx: '12', cy: '12', r: '10', stroke: '#4FACFE', strokeWidth: '2' }),
      h('circle', { cx: '12', cy: '10', r: '4', stroke: '#00F2FE', strokeWidth: '2' }),
      h('path', { d: 'M8 16v6M16 16v6', stroke: '#4FACFE', strokeWidth: '2', strokeLinecap: 'round' }),
      h('path', { d: 'M8 20h8', stroke: '#00F2FE', strokeWidth: '2', strokeLinecap: 'round' })
    ])
  }
});

const CorporateImagesIcon = markRaw({
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('rect', { x: '3', y: '5', width: '18', height: '16', rx: '2', stroke: '#4FACFE', strokeWidth: '2' }),
      h('path', { d: 'M3 10h18', stroke: '#00F2FE', strokeWidth: '2', strokeLinecap: 'round' }),
      h('path', { d: 'M8 5v5M16 5v5', stroke: '#4FACFE', strokeWidth: '2', strokeLinecap: 'round' }),
      h('path', { d: 'M8 14v7M16 14v7', stroke: '#4FACFE', strokeWidth: '2', strokeLinecap: 'round' }),
      h('path', { d: 'M3 14h18', stroke: '#00F2FE', strokeWidth: '2', strokeLinecap: 'round' })
    ])
  }
});

const getScenarioIcon = (iconName) => {
  const icons = {
    videoSummarization: VideoSummarizationIcon,
    pdfAnalysis: PdfAnalysisIcon,
    knowledgeMapping: KnowledgeMappingIcon,
    flashcardCreation: FlashcardCreationIcon,
    documentQA: DocumentQAIcon,
    imageGeneration: ImageGenerationIcon,
    videoCreation: VideoCreationIcon,
    marketingDesign: MarketingDesignIcon,
    socialMedia: SocialMediaIcon,
    brandAssets: BrandAssetsIcon,
    professionalHeadshots: ProfessionalHeadshotsIcon,
    personalBranding: PersonalBrandingIcon,
    teamPortraits: TeamPortraitsIcon,
    profilePictures: ProfilePicturesIcon,
    corporateImages: CorporateImagesIcon
  };
  return icons[iconName] || VideoSummarizationIcon;
};
const currentLocale = ref(localStorage.getItem('app-locale') || 'ja');

const localizePath = (path) => {
  return `/${currentLocale.value}${path}`
}

const productDropdownOpen = ref(false);
const langDropdownOpen = ref(false);
const activeProduct = ref(null);
const mobileMenuOpen = ref(false);
const mobileProductDropdownOpen = ref(false);
const mobileLangDropdownOpen = ref(false);
const activeMobileProduct = ref(null);
let productDropdownTimer = null;
let langDropdownTimer = null;

const products = ref([
  { id: 'notegpt', name: t('nav.noteGPT'), icon: notegptLogo },
  { id: 'visualgpt', name: t('nav.visualGPT'), icon: visualgptLogo },
  { id: 'photogpt', name: t('nav.photoGPT'), icon: photogptLogo }
]);

const languages = computed(() => {
  return Object.keys(messages.value).map(code => ({
    code,
    label: t(`nav.languages.${code}`)
  }));
});

const openProductDropdown = () => {
  if (productDropdownTimer) clearTimeout(productDropdownTimer);
  productDropdownOpen.value = true;
};

const closeProductDropdown = () => {
  productDropdownTimer = setTimeout(() => {
    productDropdownOpen.value = false;
    activeProduct.value = null;
  }, 300);
};

const setActiveProduct = (productId) => {
  activeProduct.value = productId;
};

const handleProductItemClick = (productId) => {
  const urls = {
    notegpt: 'https://notegpt.io',
    visualgpt: 'https://visualgpt.io',
    photogpt: 'https://photogpt.io'
  };
  const url = urls[productId];
  if (url) {
    window.open(url, '_blank');
  }
};

const openLangDropdown = () => {
  if (langDropdownTimer) clearTimeout(langDropdownTimer);
  langDropdownOpen.value = true;
};

const closeLangDropdown = () => {
  langDropdownTimer = setTimeout(() => {
    langDropdownOpen.value = false;
  }, 200);
};

const handleLocaleChange = (code) => {
  currentLocale.value = code;
  locale.value = code;
  localStorage.setItem('app-locale', code);

  const currentPath = router.currentRoute.value.path;
  const pathWithoutLang = currentPath.replace(/^\/(ja|zh|en)/, '');

  const newPath = `/${code}${pathWithoutLang || ''}`;

  if (currentPath !== newPath) {
    router.push(newPath);
  }
};

const handleTrialClick = () => {
  const productsSection = document.querySelector('.products-section');
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const toggleMobileMenu = () => {
  const isClosing = mobileMenuOpen.value;
  mobileMenuOpen.value = !isClosing;
  if (!isClosing) {
    // 打开侧边栏时重置所有子面板状态
    mobileProductDropdownOpen.value = false;
    mobileLangDropdownOpen.value = false;
    activeMobileProduct.value = null;
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = '';
  mobileProductDropdownOpen.value = false;
  mobileLangDropdownOpen.value = false;
  activeMobileProduct.value = null;
};

const toggleMobileProductDropdown = () => {
  const isOpening = !mobileProductDropdownOpen.value;
  mobileProductDropdownOpen.value = isOpening;
  mobileLangDropdownOpen.value = false; // 关闭语言下拉（互斥）
  if (isOpening && !activeMobileProduct.value) {
    activeMobileProduct.value = 'notegpt';
  }
};

const closeMobileProductDropdown = () => {
  mobileProductDropdownOpen.value = false;
  activeMobileProduct.value = null;
};

const toggleMobileLangDropdown = () => {
  const isOpening = !mobileLangDropdownOpen.value;
  mobileLangDropdownOpen.value = isOpening;
  mobileProductDropdownOpen.value = false; // 关闭产品下拉（互斥）
  activeMobileProduct.value = null;         // 同时关闭产品详情面板
};

const handleMobileProductClick = (productId) => {
  const urls = {
    notegpt: 'https://notegpt.io',
    visualgpt: 'https://visualgpt.io',
    photogpt: 'https://photogpt.io'
  };
  const url = urls[productId] || '#';
  window.open(url, '_blank');
  closeMobileMenu();
};

const handleResize = () => {
  if (window.innerWidth > 950) {
    closeMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 249, 242, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 1000;
  padding: 16px 0;
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.main-nav-links {
  display: flex;
  gap: 28px;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  font-size: 1.7rem;
  font-weight: 700;
  background: linear-gradient(135deg, #f5a623, #f76c6c, #ff8c42);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.nav-links {
  display: flex;
  gap: 28px;
  align-items: center;
  flex-wrap: wrap;
}

.nav-links a {
  text-decoration: none;
  color: #5a4a42;
  font-weight: 500;
  transition: 0.2s;
  cursor: pointer;
}

.nav-links a:hover {
  color: #f5a623;
}

.btn-nav {
  background: #ff8c42;
  border: none;
  padding: 8px 24px;
  border-radius: 40px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.btn-nav:hover {
  background: #f76c6c;
  transform: translateY(-1px);
}

.logo-link {
  text-decoration: none;
}

.nav-item {
  text-decoration: none;
  color: #5a4a42;
  font-weight: 500;
  transition: 0.2s;
}

.nav-item:hover {
  color: #f5a623;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  background: transparent;
  border: none;
  color: #5a4a42;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 12px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: 0.2s;
}

.dropdown-btn:hover {
  color: #f5a623;
}

.dropdown-content {
  display: none;
  position: absolute;
  background: white;
  min-width: 560px;
  width: 560px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 0;
  z-index: 1001;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  margin-top: 8px;
  border: 1px solid #ffe0b5;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s ease, transform 0.25s ease;
  display: flex;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
}

/* 自定义滚动条样式 - 桌面下拉菜单 */
.dropdown-content::-webkit-scrollbar {
  width: 6px;
}

.dropdown-content::-webkit-scrollbar-track {
  background: transparent;
}

.dropdown-content::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #f5a623, #ff8c42);
  border-radius: 10px;
}

.dropdown-content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #ff8c42, #f76c6c);
}

.dropdown-content.open {
  display: flex;
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-left {
  width: 180px;
  border-right: 1px solid #f5f0eb;
  padding: 16px 0;
}

.dropdown-section {
  padding: 0 16px;
}

.dropdown-section h4 {
  font-size: 0.75rem;
  font-weight: 600;
  color: #9a8a82;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 12px 0;
}

.product-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  margin: 2px 8px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
}

.product-item:hover,
.product-item.active {
  background: #fff5ed;
}

.product-item.active {
  background: linear-gradient(135deg, #fff5ed, #ffe0b5);
}

.product-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.product-name {
  font-size: 0.9rem;
  color: #5a4a42;
  font-weight: 500;
}

.product-item.active .product-name {
  color: #f5a623;
}

.dropdown-link {
  display: block;
  padding: 10px 12px;
  margin: 2px 8px;
  border-radius: 10px;
  text-decoration: none;
  color: #7a6a62;
  font-size: 0.9rem;
  transition: 0.2s;
}

.dropdown-link:hover {
  background: #fff5ed;
  color: #f5a623;
}

.dropdown-right {
  flex: 1;
  padding: 20px;
  min-height: 220px;
  display: flex;
  align-items: flex-start;
}

.product-detail {
  animation: fadeIn 0.2s ease;
  width: 100%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(10px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.detail-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;
}

.detail-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.detail-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #2d2a28;
}

.detail-header p {
  margin: 4px 0 0 0;
  font-size: 0.85rem;
  color: #7a6a62;
  line-height: 1.5;
}

.detail-content {
  margin-top: 12px;
}

.detail-section {
  margin-bottom: 16px;
}

.detail-section h4 {
  font-size: 0.8rem;
  font-weight: 600;
  color: #7a6a62;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.detail-section h4 i {
  font-size: 0.75rem;
  color: #f5a623;
}

.detail-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  font-size: 0.8rem;
  color: #5a4a42;
}

.detail-features li i {
  color: #f5a623;
  font-size: 0.75rem;
}

.use-case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.use-tag {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: #fff5ed;
  border-radius: 12px;
  font-size: 0.75rem;
  color: #7a6a62;
}

.scenario-icon-sm {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.value-text {
  font-size: 0.8rem;
  color: #7a6a62;
  line-height: 1.5;
  margin: 0;
}

.detail-link {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #ff8c42, #f5a623);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: 0.2s;
}

.detail-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 140, 66, 0.3);
}

.product-detail.default {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.default-content {
  padding: 20px;
}

.default-icon {
  font-size: 3rem;
  margin-bottom: 12px;
}

.product-detail.default h3 {
  margin: 0 0 8px 0;
  color: #5a4a42;
}

.product-detail.default p {
  margin: 0;
  font-size: 0.85rem;
  color: #9a8a82;
}

.lang-dropdown {
  position: relative;
  display: inline-block;
  margin-left: 8px;
}

.lang-dropdown-btn {
  background: transparent;
  border: 1px solid #e2cfbc;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  color: #5a4a42;
  display: flex;
  align-items: center;
  gap: 4px;
}

.lang-dropdown-btn:hover {
  border-color: #f5a623;
  color: #f5a623;
}

.lang-dropdown-content {
  display: none;
  position: absolute;
  background: white;
  min-width: 140px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 8px 0;
  z-index: 1001;
  top: 100%;
  right: 0;
  margin-top: 8px;
  border: 1px solid #ffe0b5;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
}

.lang-dropdown-content.open {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.lang-dropdown-content button {
  color: #5a4a42;
  padding: 10px 20px;
  text-decoration: none;
  display: block;
  width: 100%;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  transition: 0.2s;
}

.lang-dropdown-content button:hover {
  background: #fff0e2;
  color: #f5a623;
}

.mobile-menu-btn {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  font-size: 1.2rem;
  color: #5a4a42;
  transition: 0.2s;
}

.mobile-menu-btn:hover {
  color: #f5a623;
}

.mobile-menu-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mobile-menu-overlay.open {
  display: block;
  opacity: 1;
}

.mobile-product-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1002;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mobile-product-overlay.open {
  display: block;
  opacity: 1;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 320px;
  height: 100vh;
  background: #fff9f4;
  z-index: 1003;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  flex-direction: column;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  overflow-x: hidden;
}

/* 自定义滚动条样式 - 移动端菜单 */
.mobile-menu::-webkit-scrollbar {
  width: 5px;
}

.mobile-menu::-webkit-scrollbar-track {
  background: rgba(242, 224, 200, 0.3);
  border-radius: 10px;
}

.mobile-menu::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #f5a623, #ff8c42);
  border-radius: 10px;
  transition: background 0.3s ease;
}

.mobile-menu::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #ff8c42, #f76c6c);
}

/* Firefox 滚动条样式 */
.mobile-menu {
  scrollbar-width: thin;
  scrollbar-color: #f5a623 rgba(242, 224, 200, 0.3);
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-menu-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  font-size: 1.3rem;
  color: #5a4a42;
  transition: 0.2s;
}

.mobile-menu-close:hover {
  color: #f5a623;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  padding: 90px 24px 32px;
  gap: 4px;
}

.mobile-nav-item {
  text-decoration: none;
  color: #5a4a42;
  font-size: 1.15rem;
  font-weight: 500;
  padding: 16px;
  border-radius: 14px;
  transition: 0.2s;
}

.mobile-nav-item:hover {
  background: #fff5ed;
  color: #f5a623;
}

.mobile-dropdown {
  margin: 4px 0;
  position: relative;
}

.mobile-dropdown-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  color: #5a4a42;
  font-size: 1.15rem;
  font-weight: 500;
  padding: 16px;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.2s;
  text-align: left;
}

.mobile-dropdown-btn:hover {
  background: #fff5ed;
  color: #f5a623;
}

.mobile-dropdown-btn i {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.mobile-dropdown-btn i.rotated {
  transform: rotate(180deg);
}

.mobile-dropdown-content {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;
  margin-top: 4px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.mobile-dropdown-content.open {
  display: flex;
}

.mobile-product-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s;
}

.mobile-product-item:hover,
.mobile-product-item.active {
  background: #ffe0b5;
}

.mobile-product-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.mobile-product-item span {
  font-size: 0.95rem;
  color: #5a4a42;
  font-weight: 500;
}

.mobile-product-detail-panel {
  display: none;
  position: fixed;
  top: 0;
  left: 320px;
  right: 0;
  max-width: 400px;
  height: 100vh;
  background: white;
  z-index: 1004;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 80px 24px 32px;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.mobile-product-detail-panel.open {
  display: block;
  transform: translateX(0);
}

/* 自定义滚动条样式 - 移动端产品详情面板 */
.mobile-product-detail-panel::-webkit-scrollbar {
  width: 5px;
}

.mobile-product-detail-panel::-webkit-scrollbar-track {
  background: rgba(242, 224, 200, 0.3);
  border-radius: 10px;
}

.mobile-product-detail-panel::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #f5a623, #ff8c42);
  border-radius: 10px;
  transition: background 0.3s ease;
}

.mobile-product-detail-panel::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #ff8c42, #f76c6c);
}

/* Firefox 滚动条样式 */
.mobile-product-detail-panel {
  scrollbar-width: thin;
  scrollbar-color: #f5a623 rgba(242, 224, 200, 0.3);
}

.mobile-detail-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  font-size: 1.2rem;
  color: #5a4a42;
  transition: 0.2s;
}

.mobile-detail-close:hover {
  color: #f5a623;
}

.mobile-detail-content {
  animation: fadeIn 0.2s ease;
}

.mobile-detail-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;
}

.mobile-detail-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.mobile-detail-header h3 {
  margin: 0;
  font-size: 1.4rem;
  color: #2d2a28;
}

.mobile-detail-header p {
  margin: 6px 0 0 0;
  font-size: 0.9rem;
  color: #7a6a62;
  line-height: 1.6;
}

.mobile-detail-features {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}

.mobile-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: #5a4a42;
}

.mobile-feature i {
  color: #f5a623;
  font-size: 0.8rem;
}

.mobile-detail-scenarios {
  margin-bottom: 24px;
}

.mobile-detail-scenarios h4 {
  font-size: 0.85rem;
  font-weight: 600;
  color: #7a6a62;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.mobile-detail-scenarios h4 i {
  font-size: 0.75rem;
  color: #f5a623;
}

.mobile-scenario-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.mobile-scenario-tag {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: #fff5ed;
  border-radius: 16px;
  font-size: 0.8rem;
  color: #7a6a62;
}

.tag-icon {
  font-size: 0.75rem;
}

.mobile-detail-link {
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(135deg, #ff8c42, #f5a623);
  color: white;
  text-decoration: none;
  border-radius: 28px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: 0.2s;
}

.mobile-detail-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 140, 66, 0.3);
}

.mobile-menu.has-detail {
  /* allow scroll - detail panel is fixed position */
}

.mobile-trial-btn {
  margin-top: 20px;
  background: linear-gradient(135deg, #ff8c42, #f5a623);
  border: none;
  padding: 16px 24px;
  border-radius: 35px;
  color: white;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.mobile-trial-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 140, 66, 0.3);
}

.mobile-lang-dropdown {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #ffe0b5;
}

.mobile-lang-dropdown-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: 1px solid #e2cfbc;
  padding: 14px 18px;
  border-radius: 14px;
  font-size: 0.95rem;
  color: #5a4a42;
  cursor: pointer;
  transition: 0.2s;
}

.mobile-lang-dropdown-btn:hover {
  border-color: #f5a623;
  color: #f5a623;
}

.mobile-lang-dropdown-btn i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.mobile-lang-dropdown-btn i.rotated {
  transform: rotate(180deg);
}

.mobile-lang-dropdown-content {
  display: none;
  margin-top: 8px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.mobile-lang-dropdown-content.open {
  display: block;
}

.mobile-lang-dropdown-item {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 14px 18px;
  border: none;
  background: transparent;
  color: #5a4a42;
  font-size: 0.95rem;
  cursor: pointer;
  transition: 0.2s;
  text-align: left;
}

.mobile-lang-dropdown-item:hover {
  background: #fff5ed;
  color: #f5a623;
}

.mobile-lang-dropdown-item.active {
  background: #ffe0b5;
  color: #f5a623;
}

@media (max-width: 950px) {
  .main-nav-links {
    display: none;
  }

  .btn-nav {
    display: none;
  }

  .lang-dropdown {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .nav-container {
    flex-wrap: nowrap;
    gap: 8px;
  }
}

@media (max-width: 680px) {
  .mobile-product-detail-panel {
    left: 0;
    right: 0;
    max-width: 100%;
    z-index: 1004;
  }

  .mobile-menu.open {
    transform: translateX(-100%);
  }

  .mobile-menu.open:not(.has-detail) {
    transform: translateX(0);
  }
}
</style>
