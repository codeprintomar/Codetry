import { ProjectItem } from './types.ts';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'easytrade',
    title: 'EasyTrade',
    titleAr: 'إيزي تريد',
    subtitle: 'Integrated company portal, digital store, and automated order coordination system.',
    subtitleAr: 'موقع تعريفي ومتجر إلكتروني متكامل مع نظام إدارة طلبات وإشعارات مؤتمتة.',
    category: 'E-commerce & Systems',
    categoryAr: 'التجارة الإلكترونية والأنظمة',
    description: 'A complete company platform combining a public-facing product showcase, customer ordering flow, and an administrative order management dashboard backed by real-time notification hooks.',
    descriptionAr: 'منظومة رقمية شاملة تجمع بين واجهة عرض المنتجات للعملاء، تدفق طلب مرن، ولوحة إدارة تشغيلية مزودة بإشعارات تيليجرام وبريد إلكتروني تلقائي.',
    techStack: [
      'React & Tailwind CSS',
      'Firebase Authentication',
      'Cloud Firestore',
      'Telegram Bot API',
      'Google Apps Script'
    ],
    status: 'Completed',
    isCaseStudy: true,
    image: '/src/assets/images/flosy_finance_interface_1794270897594.jpg',
    caseStudyDetails: {
      clientSummary: 'A growing trading and commercial brand requiring a centralized digital presence that eliminates lost sales and manual order tracking.',
      clientSummaryAr: 'نشاط تجاري متنامٍ كان بحاجة لمنظومة موحدة لعرض منتجاته وتلقي الطلبات دون فوضى التتبع اليدوي.',
      challenge: 'The business was previously handling customer orders manually across scattered chat apps, leading to untracked payments, missed fulfillment deadlines, and lack of customer verification.',
      challengeAr: 'كانت الطلبات تسجل يدوياً عبر تطبيقات المحادثات، مما أدى إلى صعوبة تتبع الحوالات وتأخر تجهيز الطلبات وغياب التوثيق المركزي.',
      solution: 'CodePrint architected a unified responsive web store with authenticated customer portals, a dedicated admin order dashboard, and dual automated alert webhooks.',
      solutionAr: 'صممت كود برنت منصة ويب متجاوبة تتضمن كتالوج منتجات وسلة تسوق، مع لوحة إدارة مركزية ونظام تنبيهات فوري عبر تيليجرام والبريد الإلكتروني.',
      architecture: [
        'Secure customer account creation and session state via Firebase Auth',
        'Firestore document collections for products, orders, and customer logs',
        'Instant Telegram Bot dispatch whenever a customer submits an order',
        'Google Apps Script webhook triggering formatted confirmation emails'
      ],
      architectureAr: [
        'إدارة آمنة لحسابات العملاء والجلسات عبر Firebase Auth',
        'قواعد بيانات Firestore سحابية لتخزين المنتجات وحالات الطلبات',
        'إرسال فوري لبيانات الطلب الجديد إلى تيليجرام الإدارة لحظياً',
        'ربط آلي عبر Google Apps Script لإرسال بريد التأكيد للعميل'
      ],
      outcomes: [
        'Centralized operational order ledger with real-time status transitions',
        'Zero manual transcriptions required to alert fulfillment staff',
        'Structured manual payment verification workflow with uploaded receipt receipts'
      ],
      outcomesAr: [
        'سجل مركزي موحد لمتابعة وتحديث حالات الطلبات لحظة بلحظة',
        'إلغاء الحاجة للتدوين اليدوي لنقل تفاصيل الطلب لمسؤولي التجهيز',
        'آلية منظمة لمراجعة وتأكيد إيصالات الدفع والتحويل'
      ]
    }
  },
  {
    id: 'flosy-project',
    title: 'Flosy',
    titleAr: 'فلوسي',
    subtitle: 'Independent personal finance and daily cash flow management application.',
    subtitleAr: 'تطبيق عملي مستقل لتتبع المصاريف وإدارة التدفقات المالية الشخصية.',
    category: 'Finance Application',
    categoryAr: 'تطبيقات مالية',
    description: 'An offline-resilient expense tracking application built for quick entries, zero ads, and clean category breakdowns.',
    descriptionAr: 'تطبيق لتتبع المصاريف يعتمد على السرعة، الخصوصية، وحفظ البيانات محلياً بدون إعلانات.',
    techStack: ['TypeScript', 'React', 'Local Storage Engine', 'Tailwind CSS'],
    status: 'Active',
    githubUrl: 'https://github.com/codeprintomar/Flosy',
    image: '/src/assets/images/flosy_finance_interface_1794270897594.jpg'
  },
  {
    id: 'gradeos-project',
    title: 'GradeOS',
    titleAr: 'غريد أو إس',
    subtitle: 'Comprehensive student performance, attendance, and timetable system.',
    subtitleAr: 'نظام إدارة أداء دراسي، متابعة حضور، وجداول أكاديمية للطلاب.',
    category: 'Education Software',
    categoryAr: 'برمجيات تعليمية',
    description: 'Engineered to help students organize their academic life with precise GPA calculators and attendance safety margins.',
    descriptionAr: 'نظام مصمم لمساعدة الطلاب على إدارة مسيرتهم الأكاديمية وحساب المعدلات وتتبع نسب الغياب بدقة.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'State Engine'],
    status: 'Active',
    githubUrl: 'https://github.com/codeprintomar/Gradeos',
    image: '/src/assets/images/gradeos_workspace_1794270897919.jpg'
  },
  {
    id: 'outfit-closet-project',
    title: 'Outfit Closet',
    titleAr: 'خزانتي الرقمية',
    subtitle: 'Visual digital wardrobe inventory and curated outfit builder.',
    subtitleAr: 'فهرسة بصرية لمحتويات خزانة الملابس وبناء أطقم مخصصة للمناسبات.',
    category: 'Organization Tool',
    categoryAr: 'أدوات تنظيمية',
    description: 'Bridges aesthetic wardrobe curation with practical tagging, watch/shoe pairings, and JSON collection backup.',
    descriptionAr: 'يجمع بين التنسيق البصري للخزانة وتصنيف القطع وتنسيق الإكسسوارات مع تصدير النسخ الاحتياطية.',
    techStack: ['React', 'Tailwind CSS', 'Local JSON Storage', 'Image Indexer'],
    status: 'Active',
    githubUrl: 'https://github.com/codeprintomar/My-Outfit-Closet',
    image: '/src/assets/images/outfit_closet_app_1794270897319.jpg'
  },
  {
    id: 'wave-project',
    title: 'Wave',
    titleAr: 'ويف',
    subtitle: 'Local audio playback environment with clean queue and audio file inspection.',
    subtitleAr: 'بيئة استماع وتشغيل صوتية محلية سريعة وخفيفة مع إدارة قوائم الانتظار.',
    category: 'Audio Utility',
    categoryAr: 'صوتيات وإنتاجية',
    description: 'Built for audiophiles and local listeners who value focused software without invasive telemetry or network barriers.',
    descriptionAr: 'مبني للمستمعين الذين يفضلون تشغيل ملفاتهم الصوتية مباشرة دون إعلانات أو اتصال إجباري بالسحابة.',
    techStack: ['Web Audio API', 'React', 'TypeScript', 'Tailwind CSS'],
    status: 'Active',
    githubUrl: 'https://github.com/codeprintomar/Wave',
    image: '/src/assets/images/wave_audio_player_1794270898309.jpg'
  },
  {
    id: 'bara-el-salfa-project',
    title: 'Bara El-Salfa (برا السالفة)',
    titleAr: 'برا السالفة',
    subtitle: 'Social group deduction game with role randomization and interactive rounds.',
    subtitleAr: 'لعبة اجتماعية تفاعلية للجمعات قائمة على الخداع والتخمين الذكي.',
    category: 'Games',
    categoryAr: 'ألعاب',
    description: 'A mobile-friendly social game that runs directly in the browser for instant play anywhere.',
    descriptionAr: 'لعبة تفاعلية للهواتف الذكية تعمل مباشرة عبر المتصفح لتوفير تجربة لعب جماعية سريعة وممتعة.',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Mobile Viewport Engine'],
    status: 'Active',
    githubUrl: 'https://github.com/codeprintomar/bara-el-salfa',
    image: '/src/assets/images/hero_codeprint_editorial_1794270896803.jpg'
  }
];
