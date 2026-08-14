import videoCompressIcon from '@/assets/logo/videocompress.svg'
import videoBeeIcon from '@/assets/logo/videobee.svg'
import audioCutIcon from '@/assets/logo/audiocut.svg'

export const PRODUCT_IDS = ['videocompress', 'videobee', 'audiocut'] as const

export type ProductId = (typeof PRODUCT_IDS)[number]

export const PRODUCT_PRESENTATION: Record<ProductId, {
  anchor: string
  icon: string
  backgroundClass: string
  websiteUrl: string
}> = {
  videocompress: {
    anchor: 'videocompress',
    icon: videoCompressIcon,
    backgroundClass: 'from-slate-50 to-slate-100',
    websiteUrl: 'https://videocompress.ai/'
  },
  videobee: {
    anchor: 'videobee',
    icon: videoBeeIcon,
    backgroundClass: 'from-slate-50 to-slate-100',
    websiteUrl: 'https://videobee.ai/'
  },
  audiocut: {
    anchor: 'audiocut',
    icon: audioCutIcon,
    backgroundClass: 'from-slate-50 to-slate-100',
    websiteUrl: 'https://audiocut.io/'
  }
}
