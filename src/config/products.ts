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
    backgroundClass: 'from-blue-100 to-blue-200',
    websiteUrl: 'https://videocompress.ai/'
  },
  videobee: {
    anchor: 'videobee',
    icon: videoBeeIcon,
    backgroundClass: 'from-amber-100 to-amber-200',
    websiteUrl: 'https://videobee.ai/'
  },
  audiocut: {
    anchor: 'audiocut',
    icon: audioCutIcon,
    backgroundClass: 'from-violet-100 to-violet-200',
    websiteUrl: 'https://audiocut.io/'
  }
}
