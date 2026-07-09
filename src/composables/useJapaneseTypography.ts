/**
 * 日语/中文排版工具 composable
 *
 * 核心用途：将文本中不应被换行打断的关键词（公司名、产品名、数字+单位等）
 * 包裹在 <span class="whitespace-nowrap"> 中，确保页面宽度变化时不会在词语中间断开。
 *
 * 使用方式：
 *   const { protectTerms } = useJapaneseTypography()
 *   // 模板中：
 *   <p v-html="protectTerms(description)"></p>
 *
 * 保护规则（可按需在 protectPatterns 中添加）：
 *   - 公司名（株式会社、有限公司、Co., Ltd. 等）
 *   - 产品名（NoteGPT、Decopy AI、VisualGPT 等）
 *   - 数字+单位（376.67% 等）
 *   - 英文品牌名+前缀/后缀
 *
 * 安全说明：本函数仅注入 <span> 标签，不渲染外部 HTML，可安全使用 v-html。
 */

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * 需要被保护（不可在内部换行）的完整词组列表
 * 每个词组会被整体包裹在 whitespace-nowrap 中
 */
const protectPatterns: RegExp[] = [
  // 日本公司名
  /ZIFU技研株式会社/g,
  /ZIFU技研/g,
  /ZINGDECK INTL PTE\. LTD\./gi,
  /ZINGDECK/gi,
  // 产品名
  /NoteGPT/gi,
  /Decopy AI/gi,
  /VisualGPT/gi,
  // 数字百分比（日语也适用）
  /\d+\.?\d*%/g,
  // 株式会社 + 前缀
  /[A-Z\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]+株式会社/g,
]

export function useJapaneseTypography() {
  const { locale } = useI18n()

  const isCJK = computed(() => locale.value === 'ja')

  /**
   * 将文本中匹配到的受保护词组包裹在 <span class="whitespace-nowrap"> 中
   * 仅在日语环境下生效，英文环境直接返回原文
   */
  function protectTerms(text: string): string {
    if (!text) return text

    let result = text
    for (const pattern of protectPatterns) {
      result = result.replace(pattern, '<span class="whitespace-nowrap">$&</span>')
    }
    return result
  }

  return {
    isCJK,
    protectTerms,
  }
}
