import { ServiceItem } from './types.ts';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    titleAr: 'تطوير المواقع والمنصات',
    shortDesc: 'Modern, high-performance websites built for speed, SEO, and clear conversion.',
    shortDescAr: 'مواقع حديثة وسريعة متوافقة مع محركات البحث ومصممة لتحقيق نتائج ملموسة.',
    fullDesc: 'We design and engineer bespoke web platforms tailored to your business goals. From high-converting landing pages to corporate websites and interactive web applications, every project is built from zero with clean code and zero bloated templates.',
    fullDescAr: 'نصمم ونبني مواقع ويب مخصصة لأهداف عملك بدقة عالية. من صفحات الهبوط السريعة إلى مواقع الشركات والمنصات التفاعلية، كل مشروع يُبنى بكود نظيف وبنية حديثة.',
    deliverables: [
      'Responsive, high-speed frontend architecture',
      'Advanced SEO & OpenGraph social configuration',
      'Bilingual Arabic & English typography support',
      'Interactive contact and lead capture workflows',
      'Clean content management integration'
    ],
    deliverablesAr: [
      'واجهة سريعة ومتجاوبة مع كافة الشاشات',
      'تهيئة متقدمة لمحركات البحث وشبكات التواصل',
      'دعم كامل للغتين العربية والإنجليزية',
      'نماذج تواصل والتقاط طلبات تفاعلية',
      'ربط سلس لإدارة المحتوى'
    ],
    typicalTimeline: '2 to 4 Weeks',
    typicalTimelineAr: 'من أسبوعين إلى 4 أسابيع',
    iconName: 'Globe'
  },
  {
    id: 'ecommerce-development',
    title: 'E-commerce Development',
    titleAr: 'تطوير المتاجر الإلكترونية',
    shortDesc: 'Custom online stores with streamlined catalogs, checkout workflows, and admin dashboards.',
    shortDescAr: 'متاجر رقمية متكاملة تشمل الكتالوج، سلة الشراء، لوحة التحكم، وإدارة الطلبات.',
    fullDesc: 'Build resilient e-commerce systems tailored to your specific market. Whether you need integrated local payments, manual verification workflows (like InstaPay or bank deposits), or automated customer notifications, we build a seamless buying experience.',
    fullDescAr: 'نبني متاجر إلكترونية مصممة خصيصاً لطبيعة عملك. سواء كنت تحتاج بوابات دفع إلكترونية أو آليات تأكيد دفع مرنة (مثل إنستاباي أو التحويلات البنكية) مع إشعارات فورية للطلبات، نبتكر لك تجربة شراء متكاملة.',
    deliverables: [
      'Product catalog with dynamic filtering & search',
      'Cart and resilient checkout sequence',
      'Order tracking with unique customer tokens',
      'Centralized admin dashboard for order processing',
      'Telegram or email instant notification hooks'
    ],
    deliverablesAr: [
      'كتالوج منتجات تفاعلي مع بحث وتصنيفات دقيقة',
      'سلة تسوق وتدفق دفع منظم',
      'نظام تتبع حالة الطلبات للعميل',
      'لوحة إدارة مركزية لمعالجة وتأكيد الطلبات',
      'ربط إشعارات تيليجرام أو بريد إلكتروني فورية'
    ],
    typicalTimeline: '3 to 6 Weeks',
    typicalTimelineAr: 'من 3 إلى 6 أسابيع',
    iconName: 'ShoppingBag'
  },
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    titleAr: 'تطوير البرمجيات المخصصة',
    shortDesc: 'Tailored applications designed to solve specific operational and technological bottlenecks.',
    shortDescAr: 'تطبيقات مخصصة بالكامل لحل مشكلات وتحديات تشغيلية محددة في نشاطك.',
    fullDesc: 'When off-the-shelf software doesn’t fit your workflow, CodePrint engineers tailored software systems. We turn proprietary business processes into robust, maintainable, and secure digital tools.',
    fullDescAr: 'عندما تفشل البرامج الجاهزة في تلبية احتياجاتك، يقوم فريق كود برنت بهندسة وتطوير برمجيات تلائم تماماً إجراءات عملك وتقدم حلولاً آمنة وسهلة الاستخدام.',
    deliverables: [
      'Domain analysis & workflow blueprinting',
      'Modular client and server architecture',
      'Relational or document database design',
      'Role-based access control and secure permissions',
      'Full documentation & deployment packaging'
    ],
    deliverablesAr: [
      'تحليل دقيق لبيئة العمل وتحديد المتطلبات',
      'هندسة معمارية برمجية معيارية وقابلة للتوسع',
      'تصميم قواعد بيانات محكمة ومنظمة',
      'إدارة صلاحيات المستخدمين والفرق بأمان',
      'توثيق تقني شامل وتعليمات التشغيل'
    ],
    typicalTimeline: '4 to 8 Weeks',
    typicalTimelineAr: 'من 4 إلى 8 أسابيع',
    iconName: 'Cpu'
  },
  {
    id: 'dashboard-development',
    title: 'Dashboard & Portal Development',
    titleAr: 'تطوير لوحات التحكم والبوابات',
    shortDesc: 'Operational control panels with clear data tables, status filters, and management tools.',
    shortDescAr: 'واجهات إدارة وتحكم واضحة لتنظيم العمليات والبيانات والإحصائيات.',
    fullDesc: 'Empower your team with intuitive dashboards. We transform complex operational databases into clear, legible, and responsive management consoles where actions can be taken in seconds.',
    fullDescAr: 'وفّر لفريقك لوحات تحكم متقدمة وسهلة الفهم. نحوّل قواعد البيانات المعقدة إلى شاشات تشغيلية واضحة تتيح اتخاذ القرارات وإدارة العمليات بسرعة وأمان.',
    deliverables: [
      'Data visualization & activity summaries',
      'Searchable, sortable tabular data views',
      'Batch item status management & editing',
      'CSV / JSON reporting and export capabilities',
      'Audit trails for critical administrative operations'
    ],
    deliverablesAr: [
      'مخططات إحصائية وتلخيص دقيق للأنشطة',
      'جداول بيانات قابلة للبحث والفرز والفلترة',
      'تحديث جماعي للحالات والبيانات بسهولة',
      'تصدير واستيراد التقارير (CSV / JSON)',
      'سجل تدقيق للعمليات الحساسة'
    ],
    typicalTimeline: '2 to 5 Weeks',
    typicalTimelineAr: 'من أسبوعين إلى 5 أسابيع',
    iconName: 'LayoutDashboard'
  },
  {
    id: 'automation-workflows',
    title: 'Practical Automation',
    titleAr: 'الأتمتة وربط الأنظمة',
    shortDesc: 'Automate repetitive data transfers, alerts, and operational routines.',
    shortDescAr: 'أتمتة العمليات الروتينية المتكررة وربط الخدمات والتنبيهات الذكية.',
    fullDesc: 'Eliminate tedious manual re-entry and delayed communications. We build automated notification pipelines (Telegram bots, WhatsApp webhooks, Google Sheets & Apps Script workflows) that connect your business tools into a synchronized engine.',
    fullDescAr: 'تخلص من الإدخال اليدوي المتكرر وتأخر التواصل. نبني خطوط أتمتة عملية (مثل روبوتات تيليجرام، إشعارات واتساب، ونصوص Google Apps Script) لربط أدوات عملك في منظومة واحدة متناغمة.',
    deliverables: [
      'Automated webhook handlers and event triggers',
      'Telegram & messaging alert bots',
      'Google Sheets & Google Workspace automated scripts',
      'Data transformation and scheduled synchronizations',
      'Error monitoring and failure alert fallbacks'
    ],
    deliverablesAr: [
      'معالجات Webhook وإشعارات الأحداث التلقائية',
      'بوتات تنبيهات تيليجرام وتطبيقات المراسلة',
      'سكربتات أتمتة لـ Google Sheets وGoogle Workspace',
      'مزامنة وتنظيف البيانات المجدولة',
      'مراقبة الأخطاء ونظام تنبيه فوري عند الأعطال'
    ],
    typicalTimeline: '1 to 3 Weeks',
    typicalTimelineAr: 'من أسبوع إلى 3 أسابيع',
    iconName: 'Zap'
  },
  {
    id: 'ui-engineering',
    title: 'UI Engineering & Design Systems',
    titleAr: 'هندسة الواجهات وتصميم النظم',
    shortDesc: 'Pixel-disciplined, accessible interfaces with distinctive typography and zero slop.',
    shortDescAr: 'واجهات مستخدم عالية الدقة والانضباط البصري متوافقة مع معايير الوصول.',
    fullDesc: 'A great product needs an interface that feels sharp, deliberate, and effortless to navigate. We craft responsive frontend design systems and bespoke component libraries with strict typographic hierarchy, keyboard accessibility, and dual light/dark themes.',
    fullDescAr: 'التطبيق المتميز يحتاج واجهة تجمع بين الأناقة وسهولة الاستخدام. نصمم ونبرمج نظم واجهات مستخدم متكاملة ومكتبات عناصر معيارية تدعم الوضعين الداكن والفاتح ومعايير سهولة الوصول.',
    deliverables: [
      'Component library with strict design token governance',
      'Full Dark Mode and Light Mode optical pairing',
      'True RTL Arabic & LTR English layout discipline',
      'Micro-interactions and measured motion choreography',
      'WCAG AA accessible focus and contrast states'
    ],
    deliverablesAr: [
      'مكتبة عناصر معيارية متناسقة القياسات',
      'توافق بصري تام بين الوضع الداكن والفاتح',
      'دعم كامل ومتقن لاتجاهي اليمين (العربية) واليسار',
      'تفاعلات حركية ناعمة وسريعة الاستجابة',
      'مراعاة معايير التباين وسهولة الاستخدام للجميع'
    ],
    typicalTimeline: '2 to 4 Weeks',
    typicalTimelineAr: 'من أسبوعين إلى 4 أسابيع',
    iconName: 'Layers'
  }
];
