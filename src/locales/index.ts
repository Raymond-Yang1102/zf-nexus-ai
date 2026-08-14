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
    nav: { home: string; company: string; products: string; technology: string }
    language: Record<Locale, string>
  }
  footer: {
    legalName: string
    address: string
    contactLabel: string
    copyright: string
    legalLinks: { privacy: string; terms: string }
  }
  home: {
    hero: { title: string; subtitle: string; contactLabel: string }
    featureCards: Array<{ id: 'company' | 'products' | 'technology' | 'team'; title: string; subtitle: string }>
    productsTitle: string
    clients: { title: string; description: string }
    products: Record<ProductId, ProductCopy>
    news: { title: string; items: Array<{ date: string; content: string }> }
  }
  products: {
    overview: { title: string; description: string }
    officialWebsiteLabel: string
    featureLabel: string
    useCaseLabel: string
    items: Record<ProductId, ProductDetail>
    enterprise: { title: string; items: Array<{ title: string; description: string }> }
  }
  company: {
    ceoMessage: { title: string; content: string[]; signature: string }
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
  team: {
    overview: { title: string; content: string[] }
    members: { title: string; items: Array<{ name: string; title: string; bio: string[] }> }
    philosophy: { title: string; content: string[] }
  }
  information: {
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
      nav: { home: 'ホーム', company: '会社情報', products: 'プロダクト', technology: 'テクノロジー' },
      language: { ja: '日本語', en: 'English', 'zh-Hant': '繁體中文' }
    },
    footer: {
      legalName,
      address,
      contactLabel: 'お問い合わせ',
      copyright: '© 2026 ZingStone HongKong Limited. All Rights Reserved.',
      legalLinks: { privacy: 'プライバシー', terms: '利用規約' }
    },
    home: {
      hero: { title: 'ZingStone', subtitle: 'クリエイションと納品のためのデスクトップメディアツール。', contactLabel: 'お問い合わせ' },
      featureCards: [
        { id: 'company', title: '会社情報', subtitle: 'ZingStoneの会社概要と事業領域' },
        { id: 'products', title: 'プロダクト', subtitle: '3つのデスクトップメディアツール' },
        { id: 'technology', title: 'テクノロジー', subtitle: 'ローカルFFmpegによるメディア処理' },
        { id: 'team', title: 'チーム', subtitle: '製品づくりを支えるチームと考え方' }
      ],
      productsTitle: 'プロダクト',
      products: {
        videocompress: { name: 'VideoCompress', description: '動画圧縮、形式変換、トリミング、音声抽出をまとめて行うデスクトップツール。共有・送信前のファイル整理と出力準備を支えます。' },
        videobee: { name: 'VideoBee', description: '大容量動画と複数ファイルの処理に対応するデスクトップ動画ツール。バッチ処理、圧縮最適化、出力パラメータ調整を行えます。' },
        audiocut: { name: 'AudioCut', description: '音声のトリミング、動画からの抽出、形式変換、圧縮、結合を行うデスクトップツール。用途に合わせた音声の整理に役立ちます。' }
      },
      clients: { title: 'パートナー', description: '幅広い業界との協力を通じ、実用的なデスクトップメディアツールの提供に取り組んでいます。' },
      news: { title: 'お知らせ', items: [{ date: '2026年', content: 'ZingStone HongKong Limited 設立' }, { date: '2026年', content: 'VideoCompress・VideoBee・AudioCut を中核プロダクトとして展開' }, { date: '2026年', content: '日本語・英語・繁体字中国語の公式サイトを公開' }] }
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
      },
      enterprise: { title: '法人向けサービス', items: [{ title: '導入検討の支援', description: '用途に合う動画・音声処理のワークフローを整理するための情報を提供します。' }, { title: '製品活用の案内', description: '各製品の機能、対応する処理、公式サイトの案内を用意しています。' }, { title: '継続的な改善', description: '実務の制作・共有・納品フローに合わせ、製品体験の改善を進めます。' }] }
    },
    company: {
      ceoMessage: { title: 'ごあいさつ', content: ['ZingStone HongKong Limitedは、動画と音声の処理を日常の制作・共有・納品に取り入れやすくするため、デスクトップメディアツールを提供しています。', '私たちは、複雑になりがちなメディア処理を、より分かりやすく、用途に合わせて進められる体験へと整えることを目指しています。', 'VideoCompress、VideoBee、AudioCutを通じて、個人の制作から繰り返し発生する業務まで、実用的な作業を支えてまいります。'], signature: 'ZingStone HongKong Limited' },
      introductionTitle: 'ZingStoneについて',
      introduction: ['ZingStone HongKong Limitedは、クリエイションと納品のためのデスクトップメディアツールを提供する香港の会社です。', '動画と音声の処理を、日常の制作・共有・納品の流れに取り入れやすくすることを目指しています。'],
      valuesTitle: '私たちが大切にすること',
      values: [
        { title: 'ローカル処理', description: 'メディアファイルはユーザーのデバイス上で処理し、日常作業に適した明快なフローを目指します。' },
        { title: '実用的な操作', description: '制作、整理、共有、納品に必要な作業を分かりやすく行えることを重視します。' },
        { title: '柔軟な出力', description: '異なる用途や公開先に合わせて、形式、容量、出力条件を調整できるようにします。' },
        { title: '継続的な改善', description: '日々の制作や納品で使いやすい製品体験を継続的に改善します。' }
      ],
      businessTitle: '事業内容',
      business: [
        { title: '動画処理', description: '動画圧縮、変換、編集、出力準備のためのデスクトップツールを提供します。' },
        { title: '音声処理', description: '音声の編集、抽出、変換、圧縮、結合を行うデスクトップツールを提供します。' },
        { title: '制作ワークフロー', description: '大容量ファイル、繰り返し作業、バッチ処理、納品準備を支える製品を開発します。' },
        { title: 'プロダクト運営', description: '公式サイトを通じて、各製品の情報と利用先を分かりやすく案内します。' }
      ],
      profileTitle: '会社概要',
      profile: [
        { label: '会社名', value: legalName }, { label: '所在地', value: address }, { label: '設立日', value: '2026年3月6日' }, { label: '事業領域', value: 'デスクトップ動画・音声メディアソフトウェア' }
      ]
    },
    technology: {
      overviewTitle: 'デスクトップメディア処理',
      overview: ['ZingStoneの各製品は、ユーザーのデバイス上でFFmpegを利用し、動画と音声をローカルで処理します。', 'VideoCompress、VideoBee、AudioCutは、それぞれの用途に合わせて、圧縮、変換、編集、複数ファイル処理、出力準備を支えます。'],
      capabilitiesTitle: '製品を支える処理機能',
      capabilities: [
        { title: 'ローカル処理ワークフロー', description: '素材をユーザーのデバイス上で扱い、動画・音声の処理をデスクトップで完結できるようにします。', product: 'VideoCompress · VideoBee · AudioCut' },
        { title: '圧縮・変換の調整', description: '共有先や用途に合わせ、形式、容量、動画・音声の出力条件を選択できます。', product: 'VideoCompress · VideoBee' },
        { title: '編集・バッチ処理', description: 'トリミング、音声抽出、結合に加え、大容量または複数のメディアファイルの作業を支えます。', product: 'VideoCompress · VideoBee · AudioCut' }
      ],
      workflowTitle: '素材から目的に合うファイルへ',
      workflow: ['まず素材の種類、形式、容量を確認し、必要な処理を選びます。', 'VideoCompressでは圧縮・変換・トリミング、VideoBeeでは大容量動画や複数ファイルの処理、AudioCutでは音声の編集・抽出・結合を行えます。', '単一の素材を整える作業から、繰り返し発生する複数ファイルの作業まで、目的に応じて進められます。'],
      outputTitle: '共有・公開・納品に向けた出力',
      output: ['完成したメディアは、利用するサービスや提出先に合わせて、形式、ファイル容量、動画・音声の出力条件を調整できます。', '日常の共有から公開、納品準備まで、扱いやすいファイルとして整えることを目指しています。']
    },
    team: {
      overview: { title: 'チーム', content: ['ZingStoneは、デスクトップメディアツールの企画、開発、運用に取り組むチームです。', '動画と音声の実務をより扱いやすくするため、プロダクト、エンジニアリング、運用の視点を結び、日々の制作と納品に役立つ体験を整えています。'] },
      members: { title: 'チームの役割', items: [
        { name: 'プロダクトとエンジニアリング', title: 'Product & Engineering', bio: ['ユーザーの作業フローを整理し、デスクトップ製品の設計と開発を進めます。'] },
        { name: 'メディア技術', title: 'Media Technology', bio: ['動画・音声の変換、圧縮、編集、出力の品質と使いやすさを支えます。'] },
        { name: 'プロダクト運用', title: 'Product Operations', bio: ['製品情報と利用体験を分かりやすく届け、継続的な改善につなげます。'] }
      ] },
      philosophy: { title: 'チームの考え方', content: ['私たちは、複雑になりやすいメディア処理を、目的に合わせて分かりやすく完了できる体験へと整えることを大切にしています。', '技術の確かさと実用的な操作を両立させながら、制作、共有、納品に役立つ製品を継続的に改善していきます。'] }
    },
    information: {
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
    header: { nav: { home: 'Home', company: 'Company', products: 'Products', technology: 'Technology' }, language: { ja: '日本語', en: 'English', 'zh-Hant': '繁體中文' } },
    footer: { legalName, address, contactLabel: 'Contact us', copyright: '© 2026 ZingStone HongKong Limited. All Rights Reserved.', legalLinks: { privacy: 'Privacy', terms: 'Terms' } },
    home: {
      hero: { title: 'ZingStone', subtitle: 'Desktop media tools for creation and delivery.', contactLabel: 'CONTACT US' },
      featureCards: [
        { id: 'company', title: 'Company', subtitle: 'Our profile and media software focus' },
        { id: 'products', title: 'Products', subtitle: 'Three desktop media tools' },
        { id: 'technology', title: 'Technology', subtitle: 'Local FFmpeg media processing' },
        { id: 'team', title: 'Team', subtitle: 'The people and principles behind our products' }
      ],
      productsTitle: 'Products',
      products: {
        videocompress: { name: 'VideoCompress', description: 'A desktop tool for video compression, format conversion, trimming, and audio extraction. It supports file organization and output preparation before sharing or delivery.' },
        videobee: { name: 'VideoBee', description: 'A desktop video tool for large files and multi-file work. It supports batch processing, compression optimization, and output parameter control.' },
        audiocut: { name: 'AudioCut', description: 'A desktop tool for audio trimming, extraction from video, conversion, compression, and merging. It helps prepare audio for its intended use.' }
      },
      clients: { title: 'Partners', description: 'We work across industries to provide practical desktop media tools.' },
      news: { title: 'News', items: [{ date: '2026', content: 'ZingStone HongKong Limited established' }, { date: '2026', content: 'VideoCompress, VideoBee, and AudioCut introduced as core products' }, { date: '2026', content: 'Official website released in Japanese, English, and Traditional Chinese' }] }
    },
    products: {
      overview: { title: 'Desktop Media Tools', description: 'Each ZingStone product uses FFmpeg on the user’s device to process media locally. The tools support workflows from creation through delivery preparation without describing upload processing.' },
      officialWebsiteLabel: 'Visit official website', featureLabel: 'Key capabilities', useCaseLabel: 'Use cases',
      items: {
        videocompress: { title: 'VideoCompress', subtitle: 'Video Compression, Conversion and Editing', description: 'A desktop tool for adjusting video size, converting formats, and completing practical editing and media-preparation tasks.', features: ['Video compression and output-size adjustment', 'Video format conversion', 'Video trimming and simple editing', 'Audio extraction and text-transcription assistance', 'Image and PDF compression'], useCases: ['Preparing files for sharing and sending', 'Converting files for different playback environments', 'Removing unneeded video sections'] },
        videobee: { title: 'VideoBee', subtitle: 'Video Conversion, Compression and Batch Processing', description: 'A desktop tool for large video files, repeated jobs, parameter control, and output preparation for publishing or delivery.', features: ['Video format conversion', 'Large-file compression optimization', 'Batch processing for multiple files', 'Video and audio parameter control', 'Output preparation for publishing and delivery'], useCases: ['Converting multiple videos together', 'Preparing output for a target platform', 'Preparing large source files for delivery'] },
        audiocut: { title: 'AudioCut', subtitle: 'Audio Editing and Conversion', description: 'A desktop tool for trimming, extracting, converting, compressing, changing speed, and merging audio.', features: ['Audio trimming and unwanted-section removal', 'Audio extraction from video', 'Audio format conversion', 'Audio compression and speed adjustment', 'Audio merging and batch processing'], useCases: ['Creating clips and ringtones', 'Separating audio from video assets', 'Organizing multiple audio files'] }
      },
      enterprise: { title: 'Business Services', items: [{ title: 'Workflow Guidance', description: 'We provide information that helps organize video and audio processing workflows for the intended use.' }, { title: 'Product Information', description: 'Official product pages provide guidance on functions and supported processing tasks.' }, { title: 'Continuous Improvement', description: 'We continue improving product experiences for practical creation, sharing, and delivery workflows.' }] }
    },
    company: {
      ceoMessage: { title: 'Message', content: [`${legalName} provides desktop media tools that make video and audio processing easier to include in daily creation, sharing, and delivery.`, 'We aim to make complex media tasks clearer and easier to complete according to each intended use.', 'Through VideoCompress, VideoBee, and AudioCut, we support practical work from individual creation to recurring professional tasks.'], signature: legalName },
      introductionTitle: 'About ZingStone', introduction: [`${legalName} is a Hong Kong company providing desktop media tools for creation and delivery.`, 'We focus on making video and audio processing easier to include in everyday creation, sharing, and delivery workflows.'],
      valuesTitle: 'What We Value', values: [
        { title: 'Local Processing', description: 'Media files are processed on the user’s device through clear desktop workflows.' },
        { title: 'Practical Operation', description: 'We focus on straightforward work for creation, organization, sharing, and delivery.' },
        { title: 'Flexible Output', description: 'Formats, file sizes, and output settings can be adjusted for different destinations.' },
        { title: 'Continuous Improvement', description: 'We continue improving product experiences for practical creation and delivery work.' }
      ],
      businessTitle: 'Business Focus', business: [
        { title: 'Video Processing', description: 'Desktop tools for video compression, conversion, editing, and output preparation.' },
        { title: 'Audio Processing', description: 'Desktop tools for audio editing, extraction, conversion, compression, and merging.' },
        { title: 'Creation Workflows', description: 'Products that support large files, repeat work, batch processing, and delivery preparation.' },
        { title: 'Product Operations', description: 'We provide clear product information and official destinations through the website.' }
      ],
      profileTitle: 'Company Profile', profile: [
        { label: 'Legal name', value: legalName }, { label: 'Address', value: address }, { label: 'Incorporated', value: '6 March 2026' }, { label: 'Business focus', value: 'Desktop video and audio media software' }
      ]
    },
    technology: {
      overviewTitle: 'Desktop Media Processing', overview: ['Each ZingStone product uses FFmpeg on the user’s device to process video and audio locally.', 'VideoCompress, VideoBee, and AudioCut support compression, conversion, editing, multi-file work, and output preparation for their respective use cases.'],
      capabilitiesTitle: 'Processing Capabilities Behind the Products', capabilities: [
        { title: 'Local Processing Workflow', description: 'Work with media on the user’s device and complete video or audio tasks in a desktop workflow.', product: 'VideoCompress · VideoBee · AudioCut' },
        { title: 'Compression and Conversion Control', description: 'Choose formats, file sizes, and video or audio output settings for the intended destination.', product: 'VideoCompress · VideoBee' },
        { title: 'Editing and Batch Work', description: 'Support trimming, audio extraction, merging, and work with large or multiple media files.', product: 'VideoCompress · VideoBee · AudioCut' }
      ],
      workflowTitle: 'From Source Media to the Right File', workflow: ['Review the media type, format, and file size, then choose the task you need.', 'Use VideoCompress for compression, conversion, and trimming; VideoBee for large-video or multi-file work; and AudioCut for editing, extracting, and merging audio.', 'The workflow supports both preparing one asset and handling repeated work across multiple files.'],
      outputTitle: 'Prepared for Sharing, Publishing, and Delivery', output: ['Adjust format, file size, and video or audio output settings for the service, platform, or delivery requirement.', 'The goal is to prepare media in a form that is easier to share, publish, or submit.']
    },
    team: {
      overview: { title: 'Team', content: ['ZingStone is a team focused on planning, building, and operating desktop media tools.', 'We connect product, engineering, and operations perspectives to make everyday video and audio work easier to complete for creation and delivery.'] },
      members: { title: 'How We Work', items: [
        { name: 'Product & Engineering', title: 'Product & Engineering', bio: ['We organize user workflows and develop desktop products around practical media tasks.'] },
        { name: 'Media Technology', title: 'Media Technology', bio: ['We support the quality and usability of video and audio conversion, compression, editing, and output.'] },
        { name: 'Product Operations', title: 'Product Operations', bio: ['We make product information and product experiences easier to understand, then use feedback to improve them continuously.'] }
      ] },
      philosophy: { title: 'Our Approach', content: ['We value turning complex media processing into clear experiences that can be completed according to the intended purpose.', 'By combining reliable technology with practical operation, we continuously improve products that support creation, sharing, and delivery.'] }
    },
    information: {
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
    header: { nav: { home: '首頁', company: '公司資訊', products: '產品', technology: '技術' }, language: { ja: '日本語', en: 'English', 'zh-Hant': '繁體中文' } },
    footer: { legalName, address, contactLabel: '聯絡我們', copyright: '© 2026 ZingStone HongKong Limited. All Rights Reserved.', legalLinks: { privacy: '隱私權', terms: '使用條款' } },
    home: {
      hero: { title: 'ZingStone', subtitle: '為創作與交付打造的桌面媒體工具。', contactLabel: '聯絡我們' },
      featureCards: [
        { id: 'company', title: '公司資訊', subtitle: 'ZingStone 的公司資料與業務方向' }, { id: 'products', title: '產品', subtitle: '三款桌面媒體工具' }, { id: 'technology', title: '技術', subtitle: '本機 FFmpeg 媒體處理' }, { id: 'team', title: '團隊', subtitle: '支援產品打造的團隊與理念' }
      ],
      productsTitle: '產品', products: {
        videocompress: { name: 'VideoCompress', description: '整合影片壓縮、格式轉換、裁剪與音訊擷取的桌面工具，協助完成分享或交付前的檔案整理與輸出準備。' }, videobee: { name: 'VideoBee', description: '支援大型影片與多檔案工作的桌面影片工具，可進行批次處理、壓縮最佳化與輸出參數調整。' }, audiocut: { name: 'AudioCut', description: '可完成音訊裁剪、從影片擷取、轉換、壓縮與合併的桌面工具，協助依使用情境整理音訊。' }
      },
      clients: { title: '合作夥伴', description: '我們透過跨產業合作，持續提供實用的桌面媒體工具。' },
      news: { title: '最新消息', items: [{ date: '2026 年', content: 'ZingStone HongKong Limited 成立' }, { date: '2026 年', content: '以 VideoCompress、VideoBee、AudioCut 作為核心產品展開服務' }, { date: '2026 年', content: '日文、英文與繁體中文官方網站上線' }] }
    },
    products: {
      overview: { title: '桌面媒體工具', description: 'ZingStone 的各項產品會在使用者裝置上以 FFmpeg 本機處理媒體檔案，協助完成從創作到交付準備的工作流程。' }, officialWebsiteLabel: '前往官方網站', featureLabel: '主要功能', useCaseLabel: '使用情境',
      items: {
        videocompress: { title: 'VideoCompress', subtitle: '影片壓縮、轉換與編輯工具', description: '在桌面上調整影片檔案大小、轉換格式並完成必要編輯與媒體整理的工具。', features: ['影片壓縮與輸出大小調整', '影片格式轉換', '影片裁剪與簡易編輯', '音訊擷取與文字轉換輔助', '圖片與 PDF 壓縮'], useCases: ['分享或傳送前調整檔案大小', '轉換為不同播放環境所需格式', '整理不需要的影片片段'] },
        videobee: { title: 'VideoBee', subtitle: '影片轉換、壓縮與批次處理工具', description: '協助處理大型影片、重複工作、參數調整及發布或交付輸出的桌面工具。', features: ['影片格式轉換', '大型影片壓縮最佳化', '多檔案批次處理', '影片與音訊參數調整', '發布與交付前的輸出準備'], useCases: ['一次轉換多支影片', '依目標平台準備輸出', '準備大型來源檔案以供交付'] },
        audiocut: { title: 'AudioCut', subtitle: '音訊編輯與轉換工具', description: '在桌面上完成音訊裁剪、擷取、轉換、壓縮、變速與合併的工具。', features: ['音訊裁剪與刪除不需要片段', '從影片擷取音訊', '音訊格式轉換', '音訊壓縮與速度調整', '音訊合併與批次處理'], useCases: ['製作音訊片段與鈴聲', '從影片素材分離音訊', '整理多個音訊檔案'] }
      },
      enterprise: { title: '企業服務', items: [{ title: '工作流程說明', description: '提供有助於依用途整理影片與音訊處理流程的資訊。' }, { title: '產品資訊', description: '各產品的官方頁面提供功能與支援處理工作的說明。' }, { title: '持續改善', description: '我們持續改善產品體驗，以支援實際的創作、分享與交付流程。' }] }
    },
    company: {
      ceoMessage: { title: '致詞', content: [`${legalName} 提供桌面媒體工具，讓影片與音訊處理更容易融入日常的創作、分享與交付。`, '我們希望將複雜的媒體處理，整理成可依不同用途清楚完成的工作體驗。', '透過 VideoCompress、VideoBee 與 AudioCut，我們支援從個人創作到重複性專業工作的實用需求。'], signature: legalName },
      introductionTitle: '關於 ZingStone', introduction: [`${legalName} 是一家位於香港、提供創作與交付所需桌面媒體工具的公司。`, '我們致力於讓影片與音訊處理更容易融入日常的創作、分享與交付流程。'],
      valuesTitle: '我們重視的事', values: [{ title: '本機處理', description: '媒體檔案在使用者裝置上處理，提供清晰的桌面工作流程。' }, { title: '實用操作', description: '專注於創作、整理、分享與交付所需要的直接操作。' }, { title: '彈性輸出', description: '可依不同目的調整格式、檔案大小與輸出設定。' }, { title: '持續改善', description: '持續改善適合實際創作與交付工作的產品體驗。' }],
      businessTitle: '業務內容', business: [{ title: '影片處理', description: '提供影片壓縮、轉換、編輯與輸出準備的桌面工具。' }, { title: '音訊處理', description: '提供音訊編輯、擷取、轉換、壓縮與合併的桌面工具。' }, { title: '創作工作流程', description: '開發支援大型檔案、重複工作、批次處理與交付準備的產品。' }, { title: '產品營運', description: '透過網站清楚提供產品資訊與官方使用入口。' }],
      profileTitle: '公司資料', profile: [{ label: '法定名稱', value: legalName }, { label: '地址', value: address }, { label: '成立日期', value: '2026 年 3 月 6 日' }, { label: '業務方向', value: '桌面影片與音訊媒體軟體' }]
    },
    technology: {
      overviewTitle: '桌面媒體處理', overview: ['ZingStone 的各項產品會在使用者裝置上以 FFmpeg 本機處理影片與音訊。', 'VideoCompress、VideoBee 與 AudioCut 會依各自的使用情境，支援壓縮、轉換、編輯、多檔案工作與輸出準備。'],
      capabilitiesTitle: '支援產品的處理能力', capabilities: [{ title: '本機處理工作流程', description: '在使用者裝置上處理媒體，於桌面工作流程中完成影片與音訊工作。', product: 'VideoCompress · VideoBee · AudioCut' }, { title: '壓縮與轉換控制', description: '依使用目的選擇格式、檔案大小，以及影片或音訊的輸出設定。', product: 'VideoCompress · VideoBee' }, { title: '編輯與批次工作', description: '支援裁剪、音訊擷取、合併，以及大型或多個媒體檔案的處理。', product: 'VideoCompress · VideoBee · AudioCut' }],
      workflowTitle: '從來源素材到合適檔案', workflow: ['先確認媒體種類、格式與檔案大小，再選擇所需的處理工作。', 'VideoCompress 可用於壓縮、轉換與裁剪；VideoBee 適合大型影片或多檔案工作；AudioCut 可進行音訊編輯、擷取與合併。', '無論是整理單一素材，或是處理重複出現的多檔案工作，都可依目的安排流程。'], outputTitle: '為分享、發布與交付準備', output: ['可依服務、平台或交付條件調整格式、檔案大小，以及影片或音訊的輸出設定。', '讓媒體成為更容易分享、發布或提交的檔案。']
    },
    team: {
      overview: { title: '團隊', content: ['ZingStone 是專注於規劃、開發與營運桌面媒體工具的團隊。', '我們結合產品、工程與營運的觀點，讓日常影片與音訊工作更容易完成，支援創作與交付。'] },
      members: { title: '團隊分工', items: [
        { name: '產品與工程', title: 'Product & Engineering', bio: ['整理使用者工作流程，並圍繞實際媒體處理需求開發桌面產品。'] },
        { name: '媒體技術', title: 'Media Technology', bio: ['支援影片與音訊轉換、壓縮、編輯及輸出的品質與易用性。'] },
        { name: '產品營運', title: 'Product Operations', bio: ['讓產品資訊與使用體驗更容易理解，並持續將回饋納入改善。'] }
      ] },
      philosophy: { title: '團隊理念', content: ['我們重視將容易變得複雜的媒體處理，整理成能依目的清楚完成的使用體驗。', '透過可靠的技術與實用操作並行，我們持續改善支援創作、分享與交付的產品。'] }
    },
    information: {
      privacy: { title: '隱私權', sections: [{ title: '營運主體與範圍', paragraphs: [`本網站由 ${legalName} 營運，適用於本網站與 ZingStone 桌面產品。`] }, { title: '已確認的媒體處理', paragraphs: ['VideoCompress、VideoBee 與 AudioCut 會在使用者裝置上以 FFmpeg 處理媒體檔案。'] }, { title: '公開前需確認的事項', paragraphs: ['Cookie、分析、診斷記錄、帳號、第三方服務、保存期間與使用者權利，將在實際營運與法律審查確認後，才作為正式政策公開。'] }] },
      terms: { title: '使用條款', sections: [{ title: '準備公告', paragraphs: ['本頁說明 ZingStone 網站與桌面產品正式使用條款的準備狀態。'] }, { title: '公開前需確認的事項', paragraphs: ['使用授權、費用、使用者責任、智慧財產、免責與責任限制，將在實際提供內容與法律審查確認後，才作為正式條款公開。'] }] }
    }
  }
}
