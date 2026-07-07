export type Locale = 'ja' | 'zh' | 'en'

export const messages = {
  ja: {
    meta: {
      title: 'ZIFU技研株式会社 - AIの力で、学びと創造を、もっと自由に。',
      description: 'ZIFU技研は、シンガポール発AIテクノロジー企業ZINGDECKの日本法人です。NoteGPT、Decopy AI、VisualGPTの3製品を提供し、学習・ビジネス・コンテンツ制作のあらゆるシーンでAIの力をシンプルに、実用的に。',
      keywords: 'AI, ZIFU, NoteGPT, Decopy AI, VisualGPT, AI要約, 文章生成, 画像生成'
    },
    header: {
      nav: {
        home: 'ホーム',
        company: '私たちについて',
        products: 'プロダクト',
        technology: 'テクノロジー',
        team: 'チーム'
      },
      language: {
        ja: '日本語',
        zh: '简体中文',
        en: 'English'
      }
    },
    footer: {
      companyName: 'ZIFU技研株式会社',
      phone: '+81-6-7220-4600',
      address: '〒530-0001 大阪府大阪市北区梅田一丁目1番3号　大阪駅前第3ビル11階2号室',
      copyright: '© 2026 ZIFU技研株式会社 All Rights Reserved.'
    },
    home: {
      hero: {
        title: 'ZIFU 技研',
        subtitle: 'AIの力で、学びと創造を、もっと自由に。'
      },
      fourCards: {
        company: {
          title: '私たちについて',
          subtitle: 'ZIFU技研の理念、ビジョン、会社概要'
        },
        products: {
          title: 'プロダクト',
          subtitle: 'NoteGPT · Decopy AI · VisualGPT の3製品'
        },
        technology: {
          title: 'テクノロジー',
          subtitle: 'AI技術基盤と研究開発体制'
        },
        team: {
          title: 'チーム',
          subtitle: '経営陣と組織体制'
        }
      },
      productsTitle: 'プロダクト',
      clients: {
        title: 'パートナー',
        description: '親会社であるZINGDECKは、広告プラットフォーム、ゲーム、ECをはじめ、幅広い業界にサービスを提供しています。'
      },
      products: {
        noteGPT: {
          name: 'NoteGPT',
          description: '動画・音声・PDF・Web記事から要点を抽出。学習・会議・研究の効率を飛躍的に向上させるAI要約・ノート生成ツール。'
        },
        decopyAI: {
          name: 'Decopy AI',
          description: '文章生成・書き換え・可読性最適化・AI検出まで。日本語特有の文体・敬語・ビジネス文書に対応するオールインワン文章作成支援ツール。'
        },
        visualGPT: {
          name: 'VisualGPT',
          description: '画像生成・編集・動画生成・背景除去・高画質化・商品画像制作まで。EC・デザイン・コンテンツ制作を強力にサポートするAIビジュアルツール。'
        }
      },
      news: {
        title: 'お知らせ',
        items: [
          { date: '2025年度', content: 'ZINGDECK AIプロダクト、日本市場でユーザー数前年比376.67%増を達成' },
          { date: '2026年3月', content: 'ZIFU技研株式会社 設立' },
          { date: '2026年5月', content: 'NoteGPT・Decopy AI・VisualGPT 日本語版UI リリース' }
        ]
      }
    },
    company: {
      hero: {
        title: '私たちについて'
      },
      ceoMessage: {
        title: '代表挨拶',
        content: [
          'ZIFU技研株式会社は、シンガポールに本社を置くAIテクノロジー企業',
          'ZINGDECK INTL PTE. LTD.の日本法人として、2026年3月に大阪・梅田で設立されました。',
          '',
          '私たちは、日本市場におけるAIプロダクトの普及と価値向上を使命とし、',
          '企業・教育機関・個人のお客様に、より身近で使いやすいAI体験をお届けすることを目指しています。',
          '',
          '生成AIは、学習、ビジネス、コンテンツ制作など、さまざまな分野で急速に活用が広がり、',
          '社会に新たな可能性をもたらしています。',
          '一方で、その価値を十分に活かすためには、日本市場に適した形で製品を届け、',
          '安心して利用できる環境を整えていくことが重要であると考えています。',
          '',
          '当社は、AIプロダクトの販売・マーケティング・カスタマーサポートを通じて、',
          'より多くのお客様へ価値あるAI体験を提供するとともに、',
          'パートナー企業の皆さまと連携しながら、日本市場におけるAI活用のさらなる発展に貢献してまいります。',
          '',
          'これからも、お客様一人ひとりに寄り添い、信頼される企業として、',
          'AIと人がより自然につながる未来の実現を目指してまいります。',
          '',
          '今後とも、皆さまのご支援とご愛顧を賜りますよう、心よりお願い申し上げます。'
        ],
        signature: '代表取締役 王 曾'
      },
      philosophy: {
        title: '経営理念・ビジョン',
        items: [
          { title: 'AIをもっと身近に', description: '誰もが安心してAIを活用できる環境づくりを通じ、AIをより身近な存在にしてまいります。' },
          { title: '日本市場への価値提供', description: '日本市場のニーズに寄り添い、より良いAI体験を継続的に提供します。' },
          { title: '信頼されるパートナー', description: 'お客様・パートナー企業との信頼関係を大切にし、長期的な価値を共に創出します。' },
          { title: '未来を支えるテクノロジー', description: 'AIの可能性を社会へ広げ、学び・仕事・創造を支える企業を目指します。' }
        ]
      },
      overview: {
        title: '事業概要',
        content: [
          'ZIFU技研株式会社は、シンガポール発のAIテクノロジー企業ZINGDECK INTL PTE. LTD.の日本法人として、',
          '日本市場におけるAIプロダクトの販売・マーケティング・事業展開を担っています。',
          '',
          'グローバルで培われたAI技術と日本市場への理解を活かし、企業・教育機関・個人のお客様へ、',
          'より価値あるAI体験を提供するとともに、AIのさらなる普及と活用促進に取り組んでいます。'
        ]
      },
      business: {
        title: '事業内容',
        items: [
          { title: 'AIプロダクト販売', description: 'NoteGPT・Decopy AI・VisualGPTをはじめとする、AIプロダクトの販売およびサブスクリプション提供。' },
          { title: 'マーケティング・プロモーション', description: '日本市場でのブランド認知向上、ユーザー獲得、パートナー企業との販路拡大を推進します。' },
          { title: '導入支援', description: '企業・教育機関のお客様に対し、AIプロダクトの導入検討から利用開始までをサポートします。' },
          { title: 'カスタマーサポート', description: '日本語によるサポート体制を整え、安心して製品をご利用いただける環境を提供します。' }
        ]
      },
      companyInfo: {
        title: '会社概要',
        table: [
          { label: '名称', value: 'ZIFU技研株式会社' },
          { label: '所在地', value: '〒530-0001 大阪府大阪市北区梅田1丁目1番3号　大阪駅前第3ビル11階2号室' },
          { label: '電話番号', value: '+81-6-7220-4600' },
          { label: '代表社員', value: '王 曾、福田 高幹' }
        ]
      }
    },
    products: {
      features: '主な機能',
      targetUsers: '対象ユーザー',
      visit: 'サイトを訪問',
      hero: {
        title: 'プロダクト'
      },
      overview: {
        title: '製品概要',
        description: 'ZIFU技研は、ZINGDECKがグローバルに展開するAIプロダクト群の中から、日本市場との親和性が高い3製品を中核に提供しています。学習・ビジネス・コンテンツ制作のあらゆるシーンで、AIの力をシンプルに、実用的に。',
        icons: [
          { name: 'NoteGPT', label: 'AI要約・ノート生成' },
          { name: 'Decopy AI', label: '文章生成・AI検出' },
          { name: 'VisualGPT', label: '画像・動画生成' }
        ]
      },
      noteGPT: {
        title: 'NoteGPT',
        subtitle: 'AI要約・ノート生成ツール',
        url: 'https://notegpt.io/ja',
        description: 'NoteGPTは、動画、音声、PDF、Web記事など、あらゆるコンテンツからAIが瞬時に要点を抽出し、整理されたノートを自動生成するツールです。学習、会議の議事録作成、研究資料の整理など、情報過多の時代に「本当に必要な情報」だけを素早く把握することができます。',
        features: [
          'YouTube・音声ファイルの要約',
          'PDF・Web記事の要点抽出',
          'AIノート自動生成と編集',
          '日本語要約精度の継続的改善',
          '学習・資格試験・ビジネス文書テンプレート対応'
        ],
        targetUsers: [
          'オンライン学習の効率を上げたい学生・社会人',
          '会議やインタビューの文字起こし・要約を自動化したい方',
          '大量の資料から素早く要点を把握したい研究者・ビジネスパーソン'
        ]
      },
      decopyAI: {
        title: 'Decopy AI',
        subtitle: '文章生成・書き換え・AI検出ツール',
        url: 'https://decopy.ai/jp/',
        description: 'Decopyは、文章の自動生成、書き換え、可読性の最適化、そしてAI生成コンテンツの検出まで、文章に関するあらゆる作業をオールインワンでサポートするツールです。ビジネス文書、レポート、ブログ記事、SNS投稿など、あらゆる文章作成シーンで活用いただけます。',
        features: [
          'AIによる文章自動生成',
          '文章のリライト・トーン調整',
          '可読性の最適化',
          'AI生成コンテンツの検出',
          '日本語特有の文体・敬語・ビジネス文書形式に対応'
        ],
        targetUsers: [
          'ビジネス文書作成の品質と効率を上げたい方',
          'ブログ・SNSコンテンツを継続的に発信したい方',
          '日本語の文体や敬語に不安のあるグローバルビジネスパーソン'
        ]
      },
      visualGPT: {
        title: 'VisualGPT',
        subtitle: 'AI画像・動画生成・編集ツール',
        url: 'https://visualgpt.io/ja',
        description: 'VisualGPTは、テキストから画像や動画を生成するだけでなく、画像編集、背景除去、高画質化、商品画像制作、AIアバター生成、インテリア・建築パース制作など、多彩なビジュアルコンテンツ制作を1つのツールで実現するAIプラットフォームです。EC事業者、デザイナー、コンテンツクリエイター、企業のマーケティング担当者まで、あらゆるビジュアル制作ニーズに対応します。',
        features: [
          'テキストからの画像生成',
          '画像編集・レタッチ',
          '動画生成',
          '背景除去・画像高画質化',
          '商品画像・EC向けビジュアル制作',
          'AIアバター生成',
          'インテリア・建築パース制作'
        ],
        targetUsers: [
          '商品画像や販促ビジュアルを効率的に制作したいEC事業者',
          'SNS・広告用のビジュアルコンテンツを継続的に制作したい方',
          'デザインリソースが限られている中小企業・スタートアップ'
        ]
      },
      enterprise: {
        title: '企業向けサービス',
        items: [
          { title: '導入サポート', description: '企業・教育機関のお客様に対し、製品選定から利用開始までをサポートします。' },
          { title: 'トライアル支援', description: '無料トライアルや初期設定をサポートし、安心して製品をご利用いただける環境をご提供します。' },
          { title: 'ご利用サポート', description: '契約手続きや製品利用に関するお問い合わせに、日本語で迅速に対応します。' }
        ]
      }
    },
    technology: {
      globalTeam: 'グローバル開発チーム',
      globalTeamDesc: '多国籍のエンジニアによる開発体制',
      infrastructureItems: ['クラウド基盤', '継続運用', 'データ管理', '日本語サポート'],
      hero: {
        title: 'テクノロジー'
      },
      overview: {
        title: '技術概要',
        content: [
          'ZIFU技研のテクノロジーは、シンガポールに本社を置くZINGDECK INTL PTE. LTD. がグローバルに展開する AI開発基盤を基礎としています。',
          'ZINGDECKでは、大規模言語モデル（LLM）、自然言語処理（NLP）、コンピュータビジョン、生成AIなどの先端技術を活用し、多国籍のエンジニアチームによるAIプロダクト開発を継続的に推進しています。',
          '日本法人であるZIFU技研は、このグローバルな技術基盤を活かし、日本市場における製品展開、ユーザーサポート、市場フィードバックを通じて、より良いAI体験の提供に取り組んでいます。'
        ]
      },
      coreTech: {
        title: 'コア技術',
        items: [
          { title: 'AI要約・自然言語処理', description: '動画・音声の文字起こしからマルチモーダルなコンテンツ理解、高精度な自動要約まで。大規模言語モデルを活用した高度な自然言語処理技術により、日本語コンテンツの要約精度を継続的に改善しています。', product: 'NoteGPT' },
          { title: '文章生成・AI検出', description: '文脈を理解した自然な文章生成、文体やトーンのカスタマイズ、AI生成コンテンツの高精度検出まで。日本語特有の敬語表現やビジネス文書形式にも対応する多層的な文章処理技術です。', product: 'Decopy AI' },
          { title: '画像・動画生成AI', description: 'テキストからの高品質画像生成、動画生成、画像編集・レタッチ、背景除去、超解像処理まで。最新の画像生成モデルとコンピュータビジョン技術を統合し、プロフェッショナル用途にも耐えるビジュアルAIを実現しています。', product: 'VisualGPT' }
        ]
      },
      rnd: {
        title: '研究開発体制',
        content: [
          'ZINGDECKグループでは、AI・機械学習・自然言語処理・コンピュータビジョンなど、複数分野の専門エンジニアによるグローバルな開発体制を構築しています。',
          '日本法人であるZIFU技研は、日本市場におけるユーザーの声や市場ニーズを開発チームへ共有し、製品改善やサービス向上に向けた取り組みを支えています。'
        ]
      },
      infrastructure: {
        title: '基盤・インフラ',
        content: [
          'ZIFU技研が提供するAIサービスは、ZINGDECKグループのグローバルなクラウド基盤を活用して提供されています。',
          'サービスの安定性と利便性を重視し、継続的なシステム運用および品質改善に取り組んでいます。',
          'クラウド基盤による安定したサービス提供',
          '継続的なシステム運用・改善',
          '安全性に配慮したデータ管理',
          '日本語によるカスタマーサポート',
          '日本法人では、お客様からのフィードバックをもとに、より快適なサービス提供に向けた改善を継続しています。'
        ]
      }
    },
    team: {
      values: ['テクノロジーで課題を解決', '学び続け成長し続け', 'グローバルと地域をつなぐ'],
      hero: {
        title: 'チーム'
      },
      overview: {
        title: 'チーム',
        content: [
          'ZIFU技研は、IT・AI業界で豊富な経験を持つメンバーが集まり、',
          'グローバルな技術力と日本市場への理解を活かしながら、',
          'AIプロダクトの普及と事業成長に取り組んでいます。'
        ]
      },
      members: {
        title: '主要メンバー',
        items: [
          {
            name: '王 曾',
            title: '代表取締役',
            bio: [
              '百度（Baidu）、人人網（RenRen）、ポップマート（POP MART）など、',
              '中国を代表するIT企業において20年以上にわたり人事・経営管理・',
              '事業運営責任者を歴任。',
              '急成長IT企業における組織構築、人材戦略、事業運営の豊富な経験を活かし、',
              '日本法人の立ち上げを主導。現在は、日本市場における事業戦略の策定、',
              '販売展開、パートナー企業との連携を統括しています。'
            ]
          },
          {
            name: '福田 高幹',
            title: '代表取締役',
            bio: [
              '中国語・英語に精通し、グローバルビジネスに豊富な経験を持つ。',
              '日本企業と海外企業をつなぐ事業推進・対外コミュニケーションに携わってきました。',
              '現在は、日本市場における事業運営、パートナー企業との連携、',
              '対外コミュニケーションを担当し、日本法人の円滑な事業展開を支えています。'
            ]
          },
          {
            name: '曹 鴻源',
            title: 'AIプロダクト開発責任者',
            bio: [
              '生成AIプロダクトの企画・開発に豊富な経験を持ち、',
              'AI技術を活用したプロダクト設計およびサービス開発を主導。',
              'NoteGPTの立ち上げを主導し、',
              'ユーザー価値を重視したプロダクト開発と継続的な機能改善を推進してきました。',
              '現在は、AIプロダクトの戦略立案、開発を統括するとともに、',
              '日本市場を含むグローバル展開を推進しています。'
            ]
          }
        ]
      },
      philosophy: {
        title: '人材理念',
        content: [
          'ZIFU技研は、「グローバルなテクノロジー × 地域に根ざした現場力」を',
          '企業としての価値観に掲げています。',
          '',
          '私たちが大切にする価値観：',
          '',
          '・テクノロジーで現実の課題を解決したいという姿勢',
          '',
          '・変化の速いAI市場の中で学び続け、成長し続ける姿勢',
          '',
          '・日本市場とグローバルチームをつなぐコミュニケーション',
          '',
          '私たちは、お客様、パートナー企業、',
          'そしてグローバルチームとの信頼関係を大切にし、',
          'AIをより身近な存在にするため、',
          '挑戦を続けてまいります。'
        ]
      }
    }
  },
  zh: {
    meta: {
      title: 'ZIFU技研株式会社 - 用AI的力量，让学习和创造更加自由。',
      description: 'ZIFU技研是新加坡AI科技企业ZINGDECK的日本法人。提供NoteGPT、Decopy AI、VisualGPT三款产品，在学习、商务、内容创作的所有场景中，简单、实用地发挥AI的力量。',
      keywords: 'AI, ZIFU, NoteGPT, Decopy AI, VisualGPT, AI摘要, 文章生成, 图像生成'
    },
    header: {
      nav: {
        home: '首页',
        company: '关于我们',
        products: '产品',
        technology: '技术',
        team: '团队'
      },
      language: {
        ja: '日本語',
        zh: '简体中文',
        en: 'English'
      }
    },
    footer: {
      companyName: 'ZIFU技研株式会社',
      phone: '+81-6-7220-4600',
      address: '〒530-0001 大阪府大阪市北区梅田一丁目1番3号 大阪站前第3大厦11楼2号室',
      copyright: '© 2026 ZIFU技研株式会社 All Rights Reserved.'
    },
    home: {
      hero: {
        title: 'ZIFU 技研',
        subtitle: '用AI的力量，让学习和创造更加自由。'
      },
      fourCards: {
        company: {
          title: '关于我们',
          subtitle: 'ZIFU技研的理念、愿景、公司概要'
        },
        products: {
          title: '产品',
          subtitle: 'NoteGPT · Decopy AI · VisualGPT 三款产品'
        },
        technology: {
          title: '技术',
          subtitle: 'AI技术基础与研发体制'
        },
        team: {
          title: '团队',
          subtitle: '管理层与组织体制'
        }
      },
      productsTitle: '产品',
      clients: {
        title: '合作伙伴',
        description: '母公司ZINGDECK提供广告平台、游戏、电商等广泛行业的服务。'
      },
      products: {
        noteGPT: {
          name: 'NoteGPT',
          description: '从视频、音频、PDF、Web文章中提取要点。飞跃性提升学习、会议、研究效率的AI摘要·笔记生成工具。'
        },
        decopyAI: {
          name: 'Decopy AI',
          description: '涵盖文章生成、改写、可读性优化、AI检测。支持日语特有的文体、敬语、商务文书的全能文章创作辅助工具。'
        },
        visualGPT: {
          name: 'VisualGPT',
          description: '涵盖图像生成、编辑、视频生成、背景去除、高清化、商品图像制作。强力支持电商、设计、内容创作的AI视觉工具。'
        }
      },
      news: {
        title: '新闻',
        items: [
          { date: '2025年度', content: 'ZINGDECK AI产品在日本市场实现用户数同比增长376.67%' },
          { date: '2026年3月', content: 'ZIFU技研株式会社成立' },
          { date: '2026年5月', content: 'NoteGPT・Decopy AI・VisualGPT 日语版UI发布' }
        ]
      }
    },
    company: {
      hero: {
        title: '关于我们'
      },
      ceoMessage: {
        title: '代表致辞',
        content: [
          'ZIFU技研株式会社作为总部位于新加坡的AI科技企业 ZINGDECK INTL PTE. LTD.的日本法人，于2026年3月在大阪梅田成立。',
          '',
          '我们以在日本市场普及和提升AI产品价值为使命，致力于为企业、教育机构和个人用户提供更贴近、更易用的AI体验。',
          '',
          '生成AI在学习、商务、内容创作等多个领域迅速普及，为社会带来了新的可能性。另一方面，为了充分发挥其价值，我们认为重要的是将产品以适合日本市场的形式提供，并建立一个可以安心使用的环境。',
          '',
          '公司将通过AI产品的销售、营销和客户支持，为更多用户提供有价值的AI体验，同时与合作伙伴企业携手，为日本市场AI应用的进一步发展做出贡献。',
          '',
          '今后，我们将贴近每一位用户，作为值得信赖的企业，致力于实现AI与人更加自然连接的未来。',
          '',
          '衷心感谢各位的支持和厚爱。'
        ],
        signature: '代表董事 王曾'
      },
      philosophy: {
        title: '经营理念·愿景',
        items: [
          { title: '让AI更加贴近生活', description: '通过营造人人都能安心使用AI的环境，使AI成为更贴近生活的存在。' },
          { title: '为日本市场提供价值', description: '贴近日本市场的需求，持续提供更好的AI体验。' },
          { title: '值得信赖的合作伙伴', description: '珍惜与客户、合作伙伴企业的信赖关系，共同创造长期价值。' },
          { title: '支撑未来的技术', description: '将AI的可能性扩展到社会，致力于成为支持学习、工作和创造的企业。' }
        ]
      },
      overview: {
        title: '事业概要',
        content: [
          'ZIFU技研株式会社作为新加坡出身的AI科技企业ZINGDECK INTL PTE. LTD.的日本法人，负责日本市场的AI产品销售、营销和业务拓展。',
          '利用在全球培养的AI技术和对日本市场的理解，为企业、教育机构和个人用户提供更有价值的AI体验，同时致力于进一步普及和推广AI应用。'
        ]
      },
      business: {
        title: '事业内容',
        items: [
          { title: 'AI产品销售', description: '销售和提供包括NoteGPT、Decopy AI、VisualGPT在内的AI产品订阅服务。' },
          { title: '营销推广', description: '提升日本市场的品牌认知度，促进用户获取，扩大与合作伙伴企业的销售渠道。' },
          { title: '导入支持', description: '为企业和教育机构用户提供从产品选择到使用开始的支持。' },
          { title: '客户支持', description: '建立日语支持体制，提供可以安心使用产品的环境。' }
        ]
      },
      companyInfo: {
        title: '公司概要',
        table: [
          { label: '名称', value: 'ZIFU技研株式会社' },
          { label: '所在地', value: '〒530-0001 大阪府大阪市北区梅田1丁目1番3号 大阪站前第3大厦11楼2号室' },
          { label: '电话号码', value: '+81-6-7220-4600' },
          { label: '代表社员', value: '王曾、福田高干' }
        ]
      }
    },
    products: {
      features: '主要功能',
      targetUsers: '推荐给这样的人士',
      visit: '访问网站',
      hero: {
        title: '产品'
      },
      overview: {
        title: '产品概要',
        description: 'ZIFU技研从ZINGDECK在全球开展的AI产品群中，以与日本市场亲和度高的三款产品为核心进行提供。在学习、商务、内容创作的所有场景中，简单、实用地发挥AI的力量。',
        icons: [
          { name: 'NoteGPT', label: 'AI摘要·笔记生成' },
          { name: 'Decopy AI', label: '文章生成·AI检测' },
          { name: 'VisualGPT', label: '图像·视频生成' }
        ]
      },
      noteGPT: {
        title: 'NoteGPT',
        subtitle: 'AI摘要·笔记生成工具',
        url: 'https://notegpt.io/ja',
        description: 'NoteGPT是一款AI能从视频、音频、PDF、Web文章等所有内容中瞬间提取要点，自动生成整理好的笔记的工具。在信息爆炸的时代，可以快速掌握"真正需要的信息"，适用于学习、会议纪要制作、研究资料整理等场景。',
        features: [
          'YouTube·音频文件的摘要',
          'PDF·Web文章的要点提取',
          'AI笔记自动生成与编辑',
          '日语摘要精度的持续改善',
          '支持学习·资格考试·商务文书模板'
        ],
        targetUsers: [
          '希望提高在线学习效率的学生和上班族',
          '希望自动化会议和采访的文字转录·摘要的人士',
          '希望从大量资料中快速把握要点的研究人员和商务人士'
        ]
      },
      decopyAI: {
        title: 'Decopy AI',
        subtitle: '文章生成·改写·AI检测工具',
        url: 'https://decopy.ai/jp/',
        description: 'Decopy是一款一站式支持文章自动生成、改写、可读性优化以及AI生成内容检测等所有与文章相关工作的工具。适用于商务文书、报告、博客文章、SNS投稿等所有文章创作场景。',
        features: [
          'AI文章自动生成',
          '文章改写·语调调整',
          '可读性优化',
          'AI生成内容检测',
          '支持日语特有的文体·敬语·商务文书格式'
        ],
        targetUsers: [
          '希望提高商务文书制作质量和效率的人士',
          '希望持续发布博客·SNS内容的人士',
          '对日语文体和敬语感到不安的全球商务人士'
        ]
      },
      visualGPT: {
        title: 'VisualGPT',
        subtitle: 'AI图像·视频生成·编辑工具',
        url: 'https://visualgpt.io/ja',
        description: 'VisualGPT不仅能从文本生成图像和视频，还能在一个工具中实现图像编辑、背景去除、高清化、商品图像制作、AI头像生成、室内·建筑透视制作等多样的视觉内容制作。从电商从业者、设计师、内容创作者到企业营销人员，满足所有视觉制作需求。',
        features: [
          '文本到图像生成',
          '图像编辑·润色',
          '视频生成',
          '背景去除·图像高清化',
          '商品图像·电商视觉制作',
          'AI头像生成',
          '室内·建筑透视制作'
        ],
        targetUsers: [
          '希望高效制作商品图像和促销视觉的电商从业者',
          '希望持续制作SNS·广告用视觉内容的人士',
          '设计资源有限的中小企业和初创企业'
        ]
      },
      enterprise: {
        title: '企业服务',
        items: [
          { title: '导入支持', description: '为企业和教育机构用户提供从产品选择到使用开始的支持。' },
          { title: '试用支持', description: '支持免费试用和初始设置，提供可以安心使用产品的环境。' },
          { title: '使用支持', description: '对合同手续和产品使用相关的咨询，用日语迅速对应。' }
        ]
      }
    },
    technology: {
      globalTeam: '全球开发团队',
      globalTeamDesc: '多国籍工程师组成的开发体制',
      infrastructureItems: ['云基础设施', '持续运营', '数据管理', '日语支持'],
      hero: {
        title: '技术'
      },
      overview: {
        title: '技术概要',
        content: [
          'ZIFU技研的技术基于总部位于新加坡的ZINGDECK INTL PTE. LTD.在全球开展的AI开发基础。',
          'ZINGDECK运用大规模语言模型（LLM）、自然语言处理（NLP）、计算机视觉、生成AI等尖端技术，通过多国籍工程师团队持续推进AI产品开发。',
          '作为日本法人的ZIFU技研，利用这一全球技术基础，通过日本市场的产品推广、用户支持和市场反馈，致力于提供更好的AI体验。'
        ]
      },
      coreTech: {
        title: '核心技术',
        items: [
          { title: 'AI摘要·自然语言处理', description: '从视频·音频的文字转录到多模态内容理解，再到高精度自动摘要。通过利用大规模语言模型的高级自然语言处理技术，持续改善日语内容的摘要精度。', product: 'NoteGPT' },
          { title: '文章生成·AI检测', description: '理解上下文的自然文章生成、文体和语调的自定义、AI生成内容的高精度检测。是支持日语特有的敬语表达和商务文书格式的多层次文章处理技术。', product: 'Decopy AI' },
          { title: '图像·视频生成AI', description: '从文本到高质量图像生成、视频生成、图像编辑·润色、背景去除、超分辨率处理。整合最新图像生成模型和计算机视觉技术，实现专业用途也能承受的视觉AI。', product: 'VisualGPT' }
        ]
      },
      rnd: {
        title: '研究开发体制',
        content: [
          'ZINGDECK集团构建了由AI、机器学习、自然语言处理、计算机视觉等多个领域的专业工程师组成的全球开发体制。',
          '作为日本法人的ZIFU技研，将日本市场的用户声音和市场需求共享给开发团队，支持产品改进和服务提升的努力。'
        ]
      },
      infrastructure: {
        title: '基础设施',
        content: [
          'ZIFU技研提供的AI服务，利用ZINGDECK集团的全球云基础设施提供。',
          '重视服务的稳定性和便利性，致力于持续的系统运营和质量改进。',
          '基于云基础设施的稳定服务提供',
          '持续的系统运营与改进',
          '考虑安全性的数据管理',
          '日语客户支持',
          '日本法人将根据客户反馈，持续改进以提供更舒适的服务。'
        ]
      }
    },
    team: {
      values: ['用技术解决问题', '持续学习持续成长', '连接全球与地域'],
      hero: {
        title: '团队'
      },
      overview: {
        title: '团队',
        content: [
          'ZIFU技研汇聚了在IT·AI行业拥有丰富经验的成员，',
          '利用全球技术能力和对日本市场的理解，',
          '致力于AI产品的普及和业务增长。'
        ]
      },
      members: {
        title: '主要成员',
        items: [
          {
            name: '王曾',
            title: '代表董事',
            bio: [
              '在百度（Baidu）、人人网（RenRen）、泡泡玛特（POP MART）等',
              '中国代表性IT企业中，担任人事、经营管理、',
              '业务运营负责人超过20年。',
              '利用在快速成长IT企业中积累的组织构建、人才战略、业务运营的丰富经验，',
              '主导日本法人的成立。目前负责制定日本市场的业务战略、',
              '销售拓展以及与合作伙伴企业的合作。'
            ]
          },
          {
            name: '福田高干',
            title: '代表董事',
            bio: [
              '精通中文和英文，拥有丰富的全球商务经验。',
              '曾参与连接日本企业和海外企业的业务推进和对外沟通。',
              '目前负责日本市场的业务运营、与合作伙伴企业的合作、',
              '对外沟通，支持日本法人的顺利业务开展。'
            ]
          },
          {
            name: '曹鸿源',
            title: 'AI产品开发负责人',
            bio: [
              '在生成AI产品的规划和开发方面拥有丰富经验，',
              '主导利用AI技术的产品设计和服务开发。',
              '主导了NoteGPT的启动，',
              '推动了重视用户价值的产品开发和持续的功能改进。',
              '目前负责AI产品的战略规划和开发，',
              '同时推动包括日本市场在内的全球拓展。'
            ]
          }
        ]
      },
      philosophy: {
        title: '人才理念',
        content: [
          'ZIFU技研将"全球技术 × 扎根地域的现场力量"',
          '作为企业价值观。',
          '',
          '我们重视的价值观：',
          '',
          '·以技术解决现实问题的态度',
          '',
          '·在快速变化的AI市场中持续学习、持续成长的态度',
          '',
          '·连接日本市场和全球团队的沟通',
          '',
          '我们珍视与客户、合作伙伴企业',
          '以及全球团队的信赖关系，',
          '为了让AI成为更贴近生活的存在，',
          '将继续挑战。'
        ]
      }
    }
  },
  en: {
    meta: {
      title: 'ZIFU Giken Co., Ltd. - Empower learning and creation with AI.',
      description: 'ZIFU Giken is the Japanese subsidiary of Singapore-based AI technology company ZINGDECK. We offer three products: NoteGPT, Decopy AI, and VisualGPT, bringing the power of AI simply and practically to all scenes of learning, business, and content creation.',
      keywords: 'AI, ZIFU, NoteGPT, Decopy AI, VisualGPT, AI summarization, content generation, image generation'
    },
    header: {
      nav: {
        home: 'Home',
        company: 'About Us',
        products: 'Products',
        technology: 'Technology',
        team: 'Team'
      },
      language: {
        ja: '日本語',
        zh: '简体中文',
        en: 'English'
      }
    },
    footer: {
      companyName: 'ZIFU Giken Co., Ltd.',
      phone: '+81-6-7220-4600',
      address: 'Room 2, 11th Floor, Osaka Ekimae Dai-3 Building, 1-1-3 Umeda, Kita-ku, Osaka 530-0001, Japan',
      copyright: '© 2026 ZIFU Giken Co., Ltd. All Rights Reserved.'
    },
    home: {
      hero: {
        title: 'ZIFU Giken',
        subtitle: 'Empower learning and creation with AI.'
      },
      fourCards: {
        company: {
          title: 'About Us',
          subtitle: 'Our philosophy, vision, and company overview'
        },
        products: {
          title: 'Products',
          subtitle: 'Three products: NoteGPT · Decopy AI · VisualGPT'
        },
        technology: {
          title: 'Technology',
          subtitle: 'AI technology foundation and R&D system'
        },
        team: {
          title: 'Team',
          subtitle: 'Management and organization'
        }
      },
      productsTitle: 'Products',
      clients: {
        title: 'Partners',
        description: 'Our parent company ZINGDECK provides services across various industries including advertising platforms, gaming, and e-commerce.'
      },
      products: {
        noteGPT: {
          name: 'NoteGPT',
          description: 'Extract key points from videos, audio, PDFs, and web articles. An AI summarization and note-generation tool that dramatically improves efficiency in learning, meetings, and research.'
        },
        decopyAI: {
          name: 'Decopy AI',
          description: 'From content generation and rewriting to readability optimization and AI detection. An all-in-one writing assistant tool supporting Japanese-specific writing styles, honorifics, and business documents.'
        },
        visualGPT: {
          name: 'VisualGPT',
          description: 'From image generation and editing to video generation, background removal, upscaling, and product image creation. An AI visual tool that strongly supports e-commerce, design, and content creation.'
        }
      },
      news: {
        title: 'News',
        items: [
          { date: 'FY 2025', content: 'ZINGDECK AI products achieved 376.67% year-on-year user growth in the Japanese market' },
          { date: 'March 2026', content: 'ZIFU Giken Co., Ltd. established' },
          { date: 'May 2026', content: 'NoteGPT · Decopy AI · VisualGPT Japanese UI released' }
        ]
      }
    },
    company: {
      hero: {
        title: 'About Us'
      },
      ceoMessage: {
        title: 'CEO Message',
        content: [
          'ZIFU Giken Co., Ltd. was established in March 2026 in Umeda, Osaka as the Japanese subsidiary of',
          'ZINGDECK INTL PTE. LTD., an AI technology company headquartered in Singapore.',
          '',
          'Our mission is to popularize and enhance the value of AI products in the Japanese market,',
          'aiming to deliver more accessible and user-friendly AI experiences to businesses, educational institutions, and individual users.',
          '',
          'Generative AI is rapidly being adopted across various fields including learning, business, and content creation,',
          'bringing new possibilities to society.',
          'On the other hand, to fully leverage its value, we believe it is important to deliver products in a form suitable for the Japanese market,',
          'and to create an environment where users can feel secure in using them.',
          '',
          'Through the sales, marketing, and customer support of AI products, our company will',
          'provide valuable AI experiences to more users,',
          'and contribute to the further development of AI utilization in the Japanese market in collaboration with partner companies.',
          '',
          'In the future, we will continue to work closely with each user, and as a trusted company,',
          'aim to realize a future where AI and humans connect more naturally.',
          '',
          'We sincerely appreciate your continued support and patronage.'
        ],
        signature: 'Wang Zeng, Representative Director'
      },
      philosophy: {
        title: 'Corporate Philosophy & Vision',
        items: [
          { title: 'Make AI More Accessible', description: 'Through creating an environment where everyone can use AI with peace of mind, we aim to make AI a more familiar presence.' },
          { title: 'Deliver Value to the Japanese Market', description: 'We continuously provide better AI experiences tailored to the needs of the Japanese market.' },
          { title: 'Become a Trusted Partner', description: 'We value trust relationships with customers and partner companies, and together create long-term value.' },
          { title: 'Technology that Supports the Future', description: 'We aim to expand the possibilities of AI to society and become a company that supports learning, work, and creation.' }
        ]
      },
      overview: {
        title: 'Business Overview',
        content: [
          'ZIFU Giken Co., Ltd. serves as the Japanese subsidiary of ZINGDECK INTL PTE. LTD., a Singapore-based AI technology company, responsible for the sales, marketing, and business expansion of AI products in the Japanese market.',
          'Leveraging AI technologies developed globally and our understanding of the Japanese market, we provide more valuable AI experiences to businesses, educational institutions, and individual users, while working to further popularize and promote AI utilization.'
        ]
      },
      business: {
        title: 'Business Content',
        items: [
          { title: 'AI Product Sales', description: 'Sales and subscription services for AI products including NoteGPT, Decopy AI, and VisualGPT.' },
          { title: 'Marketing & Promotion', description: 'Promoting brand awareness, user acquisition, and sales channel expansion with partner companies in the Japanese market.' },
          { title: 'Implementation Support', description: 'Providing support from product selection to implementation for business and educational institution users.' },
          { title: 'Customer Support', description: 'Establishing Japanese-language support systems to provide an environment where users can feel secure in using our products.' }
        ]
      },
      companyInfo: {
        title: 'Company Profile',
        table: [
          { label: 'Name', value: 'ZIFU Giken Co., Ltd.' },
          { label: 'Location', value: 'Room 2, 11th Floor, Osaka Ekimae Dai-3 Building, 1-1-3 Umeda, Kita-ku, Osaka 530-0001, Japan' },
          { label: 'Phone', value: '+81-6-7220-4600' },
          { label: 'Representatives', value: 'Wang Zeng, Takamoto Fukuda' }
        ]
      }
    },
    products: {
      features: 'Features',
      targetUsers: 'Recommended for',
      visit: 'Visit Site',
      hero: {
        title: 'Products'
      },
      overview: {
        title: 'Product Overview',
        description: 'ZIFU Giken offers three core products selected from ZINGDECK\'s global AI product portfolio for their strong affinity with the Japanese market. Empowering learning, business, and content creation with the power of AI, simply and practically.',
        icons: [
          { name: 'NoteGPT', label: 'AI Summarization & Note Generation' },
          { name: 'Decopy AI', label: 'Content Generation & AI Detection' },
          { name: 'VisualGPT', label: 'Image & Video Generation' }
        ]
      },
      noteGPT: {
        title: 'NoteGPT',
        subtitle: 'AI Summarization & Note Generation Tool',
        url: 'https://notegpt.io/ja',
        description: 'NoteGPT is a tool that allows AI to instantly extract key points from any content including videos, audio, PDFs, and web articles, automatically generating organized notes. In the age of information overload, you can quickly grasp only the "truly necessary information" for learning, meeting minutes creation, research material organization, and more.',
        features: [
          'YouTube and audio file summarization',
          'PDF and web article key point extraction',
          'AI note automatic generation and editing',
          'Continuous improvement of Japanese summarization accuracy',
          'Learning, certification exam, and business document template support'
        ],
        targetUsers: [
          'Students and professionals who want to improve online learning efficiency',
          'Those who want to automate transcription and summarization of meetings and interviews',
          'Researchers and business professionals who want to quickly grasp key points from large amounts of materials'
        ]
      },
      decopyAI: {
        title: 'Decopy AI',
        subtitle: 'Content Generation, Rewriting & AI Detection Tool',
        url: 'https://decopy.ai/jp/',
        description: 'Decopy is an all-in-one tool that supports all writing-related tasks from automatic content generation and rewriting to readability optimization and AI-generated content detection. It can be used in all writing scenarios including business documents, reports, blog articles, and SNS posts.',
        features: [
          'AI-powered automatic content generation',
          'Content rewriting and tone adjustment',
          'Readability optimization',
          'AI-generated content detection',
          'Support for Japanese-specific writing styles, honorifics, and business document formats'
        ],
        targetUsers: [
          'Those who want to improve the quality and efficiency of business document creation',
          'Those who want to continuously publish blog and SNS content',
          'Global business professionals who feel uncertain about Japanese writing styles and honorifics'
        ]
      },
      visualGPT: {
        title: 'VisualGPT',
        subtitle: 'AI Image & Video Generation & Editing Tool',
        url: 'https://visualgpt.io/ja',
        description: 'VisualGPT is an AI platform that achieves diverse visual content creation in one tool, from generating images and videos from text to image editing, background removal, upscaling, product image creation, AI avatar generation, and interior/architectural perspective production. It meets all visual production needs from e-commerce operators, designers, content creators to corporate marketing personnel.',
        features: [
          'Text-to-image generation',
          'Image editing and retouching',
          'Video generation',
          'Background removal and image upscaling',
          'Product image and e-commerce visual production',
          'AI avatar generation',
          'Interior and architectural perspective production'
        ],
        targetUsers: [
          'E-commerce operators who want to efficiently create product images and promotional visuals',
          'Those who want to continuously create visual content for SNS and advertising',
          'Small and medium-sized enterprises and startups with limited design resources'
        ]
      },
      enterprise: {
        title: 'Enterprise Services',
        items: [
          { title: 'Implementation Support', description: 'Providing support from product selection to implementation for business and educational institution users.' },
          { title: 'Trial Support', description: 'Supporting free trials and initial setup to provide an environment where users can feel secure in using our products.' },
          { title: 'Usage Support', description: 'Responding promptly in Japanese to inquiries regarding contract procedures and product usage.' }
        ]
      }
    },
    technology: {
      globalTeam: 'Global Development Team',
      globalTeamDesc: 'Development system by multinational engineers',
      infrastructureItems: ['Cloud Infrastructure', 'Continuous Operations', 'Data Management', 'Japanese Support'],
      hero: {
        title: 'Technology'
      },
      overview: {
        title: 'Technology Overview',
        content: [
          'ZIFU Giken\'s technology is based on the AI development foundation globally deployed by ZINGDECK INTL PTE. LTD., which is headquartered in Singapore.',
          'At ZINGDECK, we leverage cutting-edge technologies such as Large Language Models (LLM), Natural Language Processing (NLP), Computer Vision, and Generative AI, continuously advancing AI product development with our multinational engineering team.',
          'As the Japanese subsidiary, ZIFU Giken leverages this global technology foundation to provide better AI experiences through product deployment, user support, and market feedback in the Japanese market.'
        ]
      },
      coreTech: {
        title: 'Core Technologies',
        items: [
          { title: 'AI Summarization & NLP', description: 'From speech-to-text transcription to multimodal content understanding and high-precision automatic summarization. Our advanced NLP technology utilizing large language models continuously improves Japanese content summarization accuracy.', product: 'NoteGPT' },
          { title: 'Content Generation & AI Detection', description: 'Context-aware natural content generation, style and tone customization, and high-precision AI-generated content detection. A multi-layered content processing technology that also supports Japanese-specific honorific expressions and business document formats.', product: 'Decopy AI' },
          { title: 'Image & Video Generation AI', description: 'High-quality image generation from text, video generation, image editing and retouching, background removal, and super-resolution processing. We integrate the latest image generation models and computer vision technologies to realize visual AI that meets professional standards.', product: 'VisualGPT' }
        ]
      },
      rnd: {
        title: 'R&D System',
        content: [
          'ZINGDECK Group has established a global development system with specialized engineers in multiple fields including AI, machine learning, natural language processing, and computer vision.',
          'As the Japanese subsidiary, ZIFU Giken shares user feedback and market needs from the Japanese market with the development team, supporting efforts toward product improvement and service enhancement.'
        ]
      },
      infrastructure: {
        title: 'Infrastructure',
        content: [
          'The AI services provided by ZIFU Giken are delivered using ZINGDECK Group\'s global cloud infrastructure.',
          'We prioritize service stability and usability, and are committed to continuous system operation and quality improvement.',
          'Stable service delivery through cloud infrastructure',
          'Continuous system operation and improvement',
          'Security-conscious data management',
          'Japanese-language customer support',
          'The Japanese subsidiary continues to improve service delivery based on customer feedback to provide a better experience.'
        ]
      }
    },
    team: {
      values: ['Solving problems with technology', 'Continuous learning and growth', 'Connecting global and local'],
      hero: {
        title: 'Team'
      },
      overview: {
        title: 'Team',
        content: [
          'ZIFU Giken brings together members with extensive experience in the IT and AI industries,',
          'leveraging global technological capabilities and understanding of the Japanese market',
          'to drive the popularization and business growth of AI products.'
        ]
      },
      members: {
        title: 'Key Members',
        items: [
          {
            name: 'Wang Zeng',
            title: 'Representative Director',
            bio: [
              'Over 20 years of experience as HR, management, and',
              'business operations director at leading Chinese IT companies',
              'including Baidu, RenRen, and POP MART.',
              'Leveraging extensive experience in organizational development, talent strategy, and business operations',
              'at rapidly growing IT companies, he led the establishment of the Japanese subsidiary.',
              'Currently overseeing business strategy formulation, sales expansion,',
              'and collaboration with partner companies in the Japanese market.'
            ]
          },
          {
            name: 'Takamoto Fukuda',
            title: 'Representative Director',
            bio: [
              'Proficient in Chinese and English with extensive experience in global business.',
              'Has been involved in business promotion and external communication connecting Japanese and overseas companies.',
              'Currently responsible for business operations, collaboration with partner companies,',
              'and external communication in the Japanese market, supporting the smooth business development of the Japanese subsidiary.'
            ]
          },
          {
            name: 'Cao Hongyuan',
            title: 'AI Product Development Director',
            bio: [
              'Extensive experience in planning and developing generative AI products,',
              'leading product design and service development leveraging AI technology.',
              'Led the launch of NoteGPT,',
              'promoting user-value-focused product development and continuous feature improvements.',
              'Currently overseeing AI product strategy planning and development,',
              'while driving global expansion including the Japanese market.'
            ]
          }
        ]
      },
      philosophy: {
        title: 'Talent Philosophy',
        content: [
          'ZIFU Giken embraces "Global Technology × Locally Rooted Field Strength"',
          'as its corporate value.',
          '',
          'Our core values:',
          '',
          '・A mindset to solve real-world problems with technology',
          '',
          '・A mindset to continuously learn and grow in the rapidly changing AI market',
          '',
          '・Communication connecting the Japanese market with the global team',
          '',
          'We value trust relationships with customers, partner companies,',
          'and our global team,',
          'and continue to challenge ourselves',
          'to make AI a more familiar presence.'
        ]
      }
    }
  }
}
