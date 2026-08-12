import type { ProductId } from '@/config/products'

export type Locale = 'ja' | 'en' | 'zh-Hant'

type ProductCopy = {
  name: string
  description: string
}

type ProductDetail = {
  title: string
  subtitle: string
  description: string
  features: string[]
  useCases: string[]
}

type InformationSection = {
  title: string
  paragraphs: string[]
}

type SiteMessages = {
  meta: { title: string; description: string; keywords: string }
  header: {
    nav: { home: string; company: string; products: string; technology: string; contact: string }
    language: Record<Locale, string>
  }
  footer: {
    legalName: string
    address: string
    copyright: string
    legalLinks: { contact: string; privacy: string; terms: string }
  }
  home: {
    hero: { title: string; subtitle: string }
    featureCards: Array<{ id: 'company' | 'products' | 'technology' | 'contact'; title: string; subtitle: string }>
    productsTitle: string
    products: Record<ProductId, ProductCopy>
  }
  products: {
    overview: { title: string; description: string }
    officialWebsiteLabel: string
    featureLabel: string
    useCaseLabel: string
    items: Record<ProductId, ProductDetail>
  }
  company: {
    introductionTitle: string
    introduction: string[]
    valuesTitle: string
    values: Array<{ title: string; description: string }>
    businessTitle: string
    business: Array<{ title: string; description: string }>
    profileTitle: string
    profile: Array<{ label: string; value: string }>
  }
  technology: {
    overviewTitle: string
    overview: string[]
    capabilitiesTitle: string
    capabilities: Array<{ title: string; description: string; product: string }>
    workflowTitle: string
    workflow: string[]
    outputTitle: string
    output: string[]
  }
  information: {
    contact: { title: string; introduction: string; addressLabel: string; address: string; emailLabel: string; emailStatus: string }
    privacy: { title: string; sections: InformationSection[] }
    terms: { title: string; sections: InformationSection[] }
  }
}

const legalName = 'ZingStone HongKong Limited'
const address = 'UNIT 1002, 10/F PERFECT COMM BLDG, 20 AUSTIN AVENUE, TSIM SHA TSUI, HONG KONG'

export const messages: Record<Locale, SiteMessages> = {
  ja: {
    meta: {
      title: 'ZingStone - クリエイションと納品のためのデスクトップメディアツール',
      description: 'ZingStoneは、動画圧縮、動画変換、音声編集、納品準備を支えるデスクトップメディアツールを提供します。',
      keywords: 'ZingStone, デスクトップメディアツール, 動画圧縮, 動画変換, 音声編集, FFmpeg'
    },
    header: {
      nav: { home: 'ホーム', company: '会社情報', products: 'プロダクト', technology: 'テクノロジー', contact: 'お問い合わせ' },
      language: { ja: '日本語', en: 'English', 'zh-Hant': '繁體中文' }
    },
    footer: {
      legalName,
      address,
      copyright: '© 2026 ZingStone HongKong Limited. All Rights Reserved.',
      legalLinks: { contact: 'お問い合わせ', privacy: 'プライバシー', terms: '利用規約' }
    },
    home: {
      hero: { title: 'ZingStone', subtitle: 'クリエイションと納品のためのデスクトップメディアツール。' },
      featureCards: [
        { id: 'company', title: '会社情報', subtitle: 'ZingStoneの会社概要と事業領域' },
        { id: 'products', title: 'プロダクト', subtitle: '3つのデスクトップメディアツール' },
        { id: 'technology', title: 'テクノロジー', subtitle: 'ローカルFFmpegによるメディア処理' },
        { id: 'contact', title: 'お問い合わせ', subtitle: '所在地と連絡先のご案内' }
      ],
      productsTitle: 'プロダクト',
      products: {
        videocompress: { name: 'VideoCompress', description: '動画圧縮、変換、編集とメディア整理を支えるデスクトップツール。' },
        videobee: { name: 'VideoBee', description: '大容量動画、バッチ処理、出力調整に対応するデスクトップ動画ツール。' },
        audiocut: { name: 'AudioCut', description: 'トリミング、抽出、変換、結合を行うデスクトップ音声編集ツール。' }
      }
    },
    products: {
      overview: { title: 'デスクトップメディアツール', description: 'ZingStoneの各製品は、ユーザーのデバイス上でFFmpegを利用してメディアを処理します。ファイルをアップロードせず、制作から納品準備までのワークフローを支えます。' },
      officialWebsiteLabel: '公式サイトを見る',
      featureLabel: '主な機能',
      useCaseLabel: '活用シーン',
      items: {
        videocompress: {
          title: 'VideoCompress', subtitle: '動画圧縮・変換・編集ツール',
          description: '動画ファイルの容量を調整しながら、変換や必要な編集作業をデスクトップ上で行うためのツールです。',
          features: ['動画圧縮と出力サイズの調整', '動画形式の変換', '動画のトリミングと簡易編集', '音声抽出とテキスト化の補助', '画像・PDFの圧縮'],
          useCases: ['共有・送信前のファイルサイズ調整', '異なる再生環境向けの形式変換', '不要な動画部分の整理']
        },
        videobee: {
          title: 'VideoBee', subtitle: '動画変換・圧縮・バッチ処理ツール',
          description: '大容量動画や複数ファイルの処理、出力パラメータの調整、公開・納品向けの書き出しを支えるデスクトップツールです。',
          features: ['動画形式の変換', '大容量動画の圧縮最適化', '複数ファイルのバッチ処理', '動画・音声パラメータの調整', '公開・納品向けの出力準備'],
          useCases: ['複数動画をまとめて変換', 'プラットフォームに合わせた書き出し', '大容量素材の納品準備']
        },
        audiocut: {
          title: 'AudioCut', subtitle: '音声編集・変換ツール',
          description: '音声のトリミング、抽出、変換、圧縮、速度調整、結合をデスクトップ上で行うためのツールです。',
          features: ['音声トリミングと不要部分の削除', '動画からの音声抽出', '音声形式の変換', '音声圧縮と速度調整', '複数音声の結合とバッチ処理'],
          useCases: ['音声クリップや着信音の作成', '動画素材からの音声分離', '複数音声ファイルの整理']
        }
      }
    },
    company: {
      introductionTitle: 'ZingStoneについて',
      introduction: ['ZingStone HongKong Limitedは、クリエイションと納品のためのデスクトップメディアツールを提供する香港の会社です。', '動画と音声の処理を、日常の制作・共有・納品の流れに取り入れやすくすることを目指しています。'],
      valuesTitle: '私たちが大切にすること',
      values: [
        { title: 'ローカル処理', description: 'メディアファイルはユーザーのデバイス上で処理し、日常作業に適した明快なフローを目指します。' },
        { title: '実用的な操作', description: '制作、整理、共有、納品に必要な作業を分かりやすく行えることを重視します。' },
        { title: '柔軟な出力', description: '異なる用途や公開先に合わせて、形式、容量、出力条件を調整できるようにします。' }
      ],
      businessTitle: '事業内容',
      business: [
        { title: '動画処理', description: '動画圧縮、変換、編集、出力準備のためのデスクトップツールを提供します。' },
        { title: '音声処理', description: '音声の編集、抽出、変換、圧縮、結合を行うデスクトップツールを提供します。' },
        { title: '制作ワークフロー', description: '大容量ファイル、繰り返し作業、バッチ処理、納品準備を支える製品を開発します。' }
      ],
      profileTitle: '会社概要',
      profile: [
        { label: '会社名', value: legalName }, { label: '所在地', value: address }, { label: '設立日', value: '2026年3月6日' }, { label: '事業領域', value: 'デスクトップ動画・音声メディアソフトウェア' }
      ]
    },
    technology: {
      overviewTitle: 'ローカルメディア処理',
      overview: ['ZingStoneの製品は、ユーザーのデバイス上でFFmpegを利用して動画と音声を処理します。', '変換、圧縮、編集、バッチ処理、出力準備を、制作から納品までの実務フローに合わせて行えます。'],
      capabilitiesTitle: '主な処理能力',
      capabilities: [
        { title: 'ローカルFFmpeg処理', description: 'メディアファイルをユーザーのデバイス上で処理するデスクトップワークフローです。', product: 'VideoCompress · VideoBee · AudioCut' },
        { title: '変換と圧縮最適化', description: '用途に合わせて形式とファイル容量のバランスを整えます。', product: 'VideoCompress · VideoBee' },
        { title: '編集と出力制御', description: 'トリミング、音声処理、パラメータ調整、公開・納品向けの出力準備を支えます。', product: 'VideoCompress · VideoBee · AudioCut' }
      ],
      workflowTitle: '制作から整理まで',
      workflow: ['素材の形式や容量を確認し、目的に合う処理を選択します。', '必要に応じてトリミング、音声抽出、圧縮、変換、結合などを実行します。', '単一ファイルだけでなく、繰り返し作業や複数ファイルの処理にも対応します。'],
      outputTitle: '出力準備',
      output: ['公開先や納品条件に合わせて、形式、容量、動画・音声パラメータを調整します。', '制作物を共有・提出しやすい状態に整えることを重視します。']
    },
    information: {
      contact: { title: 'お問い合わせ', introduction: 'ZingStone HongKong Limitedへのお問い合わせ窓口は準備中です。', addressLabel: '所在地', address, emailLabel: 'メール', emailStatus: 'メールアドレスは準備中です。' },
      privacy: { title: 'プライバシー', sections: [
        { title: '運営主体と対象', paragraphs: [`本ページの運営主体は${legalName}です。対象は本ウェブサイトおよびZingStoneのデスクトップ製品です。`] },
        { title: '確認済みのメディア処理', paragraphs: ['VideoCompress、VideoBee、AudioCutは、ユーザーのデバイス上でFFmpegを利用してメディアファイルを処理します。'] },
        { title: '公開前の確認事項', paragraphs: ['Cookie、アクセス解析、診断ログ、アカウント、第三者サービス、保存期間、利用者の権利に関する内容は、実際の運用と法的確認を完了したうえで正式な方針として公開します。'] }
      ] },
      terms: { title: '利用規約', sections: [
        { title: '準備中のお知らせ', paragraphs: ['本ページは、ZingStoneのウェブサイトおよびデスクトップ製品に関する正式な利用規約の公開準備状況をお知らせするものです。'] },
        { title: '公開前の確認事項', paragraphs: ['利用許諾、料金、利用者の責任、知的財産、免責および責任制限については、実際の提供内容と法的確認を完了したうえで正式な規約として公開します。'] }
      ] }
    }
  },
  en: {
    meta: {
      title: 'ZingStone - Desktop Media Tools for Creation and Delivery',
      description: 'ZingStone provides desktop media tools for video compression, conversion, audio editing, and delivery preparation.',
      keywords: 'ZingStone, desktop media tools, video compression, video conversion, audio editing, FFmpeg'
    },
    header: { nav: { home: 'Home', company: 'Company', products: 'Products', technology: 'Technology', contact: 'Contact' }, language: { ja: '日本語', en: 'English', 'zh-Hant': '繁體中文' } },
    footer: { legalName, address, copyright: '© 2026 ZingStone HongKong Limited. All Rights Reserved.', legalLinks: { contact: 'Contact', privacy: 'Privacy', terms: 'Terms' } },
    home: {
      hero: { title: 'ZingStone', subtitle: 'Desktop media tools for creation and delivery.' },
      featureCards: [
        { id: 'company', title: 'Company', subtitle: 'Our profile and media software focus' },
        { id: 'products', title: 'Products', subtitle: 'Three desktop media tools' },
        { id: 'technology', title: 'Technology', subtitle: 'Local FFmpeg media processing' },
        { id: 'contact', title: 'Contact', subtitle: 'Location and contact information' }
      ],
      productsTitle: 'Products',
      products: {
        videocompress: { name: 'VideoCompress', description: 'A desktop tool for video compression, conversion, editing, and media preparation.' },
        videobee: { name: 'VideoBee', description: 'A desktop video tool for large files, batch tasks, output control, and delivery.' },
        audiocut: { name: 'AudioCut', description: 'A desktop audio tool for trimming, extraction, conversion, compression, and merging.' }
      }
    },
    products: {
      overview: { title: 'Desktop Media Tools', description: 'Each ZingStone product uses FFmpeg on the user’s device to process media locally. The tools support workflows from creation through delivery preparation without describing upload processing.' },
      officialWebsiteLabel: 'Visit official website', featureLabel: 'Key capabilities', useCaseLabel: 'Use cases',
      items: {
        videocompress: { title: 'VideoCompress', subtitle: 'Video Compression, Conversion and Editing', description: 'A desktop tool for adjusting video size, converting formats, and completing practical editing and media-preparation tasks.', features: ['Video compression and output-size adjustment', 'Video format conversion', 'Video trimming and simple editing', 'Audio extraction and text-transcription assistance', 'Image and PDF compression'], useCases: ['Preparing files for sharing and sending', 'Converting files for different playback environments', 'Removing unneeded video sections'] },
        videobee: { title: 'VideoBee', subtitle: 'Video Conversion, Compression and Batch Processing', description: 'A desktop tool for large video files, repeated jobs, parameter control, and output preparation for publishing or delivery.', features: ['Video format conversion', 'Large-file compression optimization', 'Batch processing for multiple files', 'Video and audio parameter control', 'Output preparation for publishing and delivery'], useCases: ['Converting multiple videos together', 'Preparing output for a target platform', 'Preparing large source files for delivery'] },
        audiocut: { title: 'AudioCut', subtitle: 'Audio Editing and Conversion', description: 'A desktop tool for trimming, extracting, converting, compressing, changing speed, and merging audio.', features: ['Audio trimming and unwanted-section removal', 'Audio extraction from video', 'Audio format conversion', 'Audio compression and speed adjustment', 'Audio merging and batch processing'], useCases: ['Creating clips and ringtones', 'Separating audio from video assets', 'Organizing multiple audio files'] }
      }
    },
    company: {
      introductionTitle: 'About ZingStone', introduction: [`${legalName} is a Hong Kong company providing desktop media tools for creation and delivery.`, 'We focus on making video and audio processing easier to include in everyday creation, sharing, and delivery workflows.'],
      valuesTitle: 'What We Value', values: [
        { title: 'Local Processing', description: 'Media files are processed on the user’s device through clear desktop workflows.' },
        { title: 'Practical Operation', description: 'We focus on straightforward work for creation, organization, sharing, and delivery.' },
        { title: 'Flexible Output', description: 'Formats, file sizes, and output settings can be adjusted for different destinations.' }
      ],
      businessTitle: 'Business Focus', business: [
        { title: 'Video Processing', description: 'Desktop tools for video compression, conversion, editing, and output preparation.' },
        { title: 'Audio Processing', description: 'Desktop tools for audio editing, extraction, conversion, compression, and merging.' },
        { title: 'Creation Workflows', description: 'Products that support large files, repeat work, batch processing, and delivery preparation.' }
      ],
      profileTitle: 'Company Profile', profile: [
        { label: 'Legal name', value: legalName }, { label: 'Address', value: address }, { label: 'Incorporated', value: '6 March 2026' }, { label: 'Business focus', value: 'Desktop video and audio media software' }
      ]
    },
    technology: {
      overviewTitle: 'Local Media Processing', overview: ['ZingStone products use FFmpeg on the user’s device to process video and audio.', 'Conversion, compression, editing, batch tasks, and output preparation fit practical workflows from creation through delivery.'],
      capabilitiesTitle: 'Core Capabilities', capabilities: [
        { title: 'Local FFmpeg Processing', description: 'A desktop workflow that processes media files on the user’s device.', product: 'VideoCompress · VideoBee · AudioCut' },
        { title: 'Conversion and Compression', description: 'Balance format and file size for the intended use.', product: 'VideoCompress · VideoBee' },
        { title: 'Editing and Output Control', description: 'Support trimming, audio work, parameter adjustment, and output preparation.', product: 'VideoCompress · VideoBee · AudioCut' }
      ],
      workflowTitle: 'From Creation to Organization', workflow: ['Review source format and file size, then select the relevant task.', 'Trim, extract audio, compress, convert, or merge files when needed.', 'Support both single files and repeated or multi-file processing.'],
      outputTitle: 'Output Preparation', output: ['Adjust format, file size, and video or audio parameters for a delivery requirement or destination.', 'Prepare media in a state that is easier to share or submit.']
    },
    information: {
      contact: { title: 'Contact', introduction: `Contact channels for ${legalName} are being prepared.`, addressLabel: 'Address', address, emailLabel: 'Email', emailStatus: 'Email information is being updated.' },
      privacy: { title: 'Privacy', sections: [
        { title: 'Operator and Scope', paragraphs: [`This website is operated by ${legalName}. It covers this website and ZingStone desktop products.`] },
        { title: 'Confirmed Media Processing', paragraphs: ['VideoCompress, VideoBee, and AudioCut process media files with FFmpeg on the user’s device.'] },
        { title: 'Items to Confirm Before Public Release', paragraphs: ['Cookie use, analytics, diagnostic logs, accounts, third-party services, retention periods, and user rights will be published as a formal policy only after operational and legal review confirms the actual practice.'] }
      ] },
      terms: { title: 'Terms', sections: [
        { title: 'Preparation Notice', paragraphs: ['This page communicates the preparation status of formal terms for the ZingStone website and desktop products.'] },
        { title: 'Items to Confirm Before Public Release', paragraphs: ['Licensing, pricing, user responsibilities, intellectual property, disclaimers, and limitations of liability will be published as formal terms only after the actual offering and legal review are confirmed.'] }
      ] }
    }
  },
  'zh-Hant': {
    meta: { title: 'ZingStone - 為創作與交付打造的桌面媒體工具', description: 'ZingStone 提供影片壓縮、格式轉換、音訊編輯與交付準備所需的桌面媒體工具。', keywords: 'ZingStone, 桌面媒體工具, 影片壓縮, 影片轉換, 音訊編輯, FFmpeg' },
    header: { nav: { home: '首頁', company: '公司資訊', products: '產品', technology: '技術', contact: '聯絡我們' }, language: { ja: '日本語', en: 'English', 'zh-Hant': '繁體中文' } },
    footer: { legalName, address, copyright: '© 2026 ZingStone HongKong Limited. All Rights Reserved.', legalLinks: { contact: '聯絡我們', privacy: '隱私權', terms: '使用條款' } },
    home: {
      hero: { title: 'ZingStone', subtitle: '為創作與交付打造的桌面媒體工具。' },
      featureCards: [
        { id: 'company', title: '公司資訊', subtitle: 'ZingStone 的公司資料與業務方向' }, { id: 'products', title: '產品', subtitle: '三款桌面媒體工具' }, { id: 'technology', title: '技術', subtitle: '本機 FFmpeg 媒體處理' }, { id: 'contact', title: '聯絡我們', subtitle: '所在地與聯絡資訊' }
      ],
      productsTitle: '產品', products: {
        videocompress: { name: 'VideoCompress', description: '用於影片壓縮、轉換、編輯與媒體整理的桌面工具。' }, videobee: { name: 'VideoBee', description: '支援大型檔案、批次工作、輸出控制與交付的桌面影片工具。' }, audiocut: { name: 'AudioCut', description: '用於裁剪、擷取、轉換、壓縮與合併音訊的桌面工具。' }
      }
    },
    products: {
      overview: { title: '桌面媒體工具', description: 'ZingStone 的各項產品會在使用者裝置上以 FFmpeg 本機處理媒體檔案，協助完成從創作到交付準備的工作流程。' }, officialWebsiteLabel: '前往官方網站', featureLabel: '主要功能', useCaseLabel: '使用情境',
      items: {
        videocompress: { title: 'VideoCompress', subtitle: '影片壓縮、轉換與編輯工具', description: '在桌面上調整影片檔案大小、轉換格式並完成必要編輯與媒體整理的工具。', features: ['影片壓縮與輸出大小調整', '影片格式轉換', '影片裁剪與簡易編輯', '音訊擷取與文字轉換輔助', '圖片與 PDF 壓縮'], useCases: ['分享或傳送前調整檔案大小', '轉換為不同播放環境所需格式', '整理不需要的影片片段'] },
        videobee: { title: 'VideoBee', subtitle: '影片轉換、壓縮與批次處理工具', description: '協助處理大型影片、重複工作、參數調整及發布或交付輸出的桌面工具。', features: ['影片格式轉換', '大型影片壓縮最佳化', '多檔案批次處理', '影片與音訊參數調整', '發布與交付前的輸出準備'], useCases: ['一次轉換多支影片', '依目標平台準備輸出', '準備大型來源檔案以供交付'] },
        audiocut: { title: 'AudioCut', subtitle: '音訊編輯與轉換工具', description: '在桌面上完成音訊裁剪、擷取、轉換、壓縮、變速與合併的工具。', features: ['音訊裁剪與刪除不需要片段', '從影片擷取音訊', '音訊格式轉換', '音訊壓縮與速度調整', '音訊合併與批次處理'], useCases: ['製作音訊片段與鈴聲', '從影片素材分離音訊', '整理多個音訊檔案'] }
      }
    },
    company: {
      introductionTitle: '關於 ZingStone', introduction: [`${legalName} 是一家位於香港、提供創作與交付所需桌面媒體工具的公司。`, '我們致力於讓影片與音訊處理更容易融入日常的創作、分享與交付流程。'],
      valuesTitle: '我們重視的事', values: [{ title: '本機處理', description: '媒體檔案在使用者裝置上處理，提供清晰的桌面工作流程。' }, { title: '實用操作', description: '專注於創作、整理、分享與交付所需要的直接操作。' }, { title: '彈性輸出', description: '可依不同目的調整格式、檔案大小與輸出設定。' }],
      businessTitle: '業務內容', business: [{ title: '影片處理', description: '提供影片壓縮、轉換、編輯與輸出準備的桌面工具。' }, { title: '音訊處理', description: '提供音訊編輯、擷取、轉換、壓縮與合併的桌面工具。' }, { title: '創作工作流程', description: '開發支援大型檔案、重複工作、批次處理與交付準備的產品。' }],
      profileTitle: '公司資料', profile: [{ label: '法定名稱', value: legalName }, { label: '地址', value: address }, { label: '成立日期', value: '2026 年 3 月 6 日' }, { label: '業務方向', value: '桌面影片與音訊媒體軟體' }]
    },
    technology: {
      overviewTitle: '本機媒體處理', overview: ['ZingStone 的產品會在使用者裝置上以 FFmpeg 處理影片與音訊。', '格式轉換、壓縮、編輯、批次工作與輸出準備，皆可配合從創作到交付的實際流程。'],
      capabilitiesTitle: '主要處理能力', capabilities: [{ title: '本機 FFmpeg 處理', description: '在使用者裝置上處理媒體檔案的桌面工作流程。', product: 'VideoCompress · VideoBee · AudioCut' }, { title: '轉換與壓縮最佳化', description: '依用途平衡格式與檔案大小。', product: 'VideoCompress · VideoBee' }, { title: '編輯與輸出控制', description: '支援裁剪、音訊處理、參數調整與輸出準備。', product: 'VideoCompress · VideoBee · AudioCut' }],
      workflowTitle: '從創作到整理', workflow: ['確認來源格式與檔案大小，再選擇適合的處理工作。', '依需要進行裁剪、音訊擷取、壓縮、轉換或合併。', '支援單一檔案，以及重複或多檔案處理工作。'], outputTitle: '輸出準備', output: ['依交付條件或目的地調整格式、檔案大小與影片或音訊參數。', '讓媒體更容易分享或提交。']
    },
    information: {
      contact: { title: '聯絡我們', introduction: `${legalName} 的聯絡管道正在準備中。`, addressLabel: '地址', address, emailLabel: '電子郵件', emailStatus: '電子郵件資訊正在更新。' },
      privacy: { title: '隱私權', sections: [{ title: '營運主體與範圍', paragraphs: [`本網站由 ${legalName} 營運，適用於本網站與 ZingStone 桌面產品。`] }, { title: '已確認的媒體處理', paragraphs: ['VideoCompress、VideoBee 與 AudioCut 會在使用者裝置上以 FFmpeg 處理媒體檔案。'] }, { title: '公開前需確認的事項', paragraphs: ['Cookie、分析、診斷記錄、帳號、第三方服務、保存期間與使用者權利，將在實際營運與法律審查確認後，才作為正式政策公開。'] }] },
      terms: { title: '使用條款', sections: [{ title: '準備公告', paragraphs: ['本頁說明 ZingStone 網站與桌面產品正式使用條款的準備狀態。'] }, { title: '公開前需確認的事項', paragraphs: ['使用授權、費用、使用者責任、智慧財產、免責與責任限制，將在實際提供內容與法律審查確認後，才作為正式條款公開。'] }] }
    }
  }
}
