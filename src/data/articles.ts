import { ArticleItem } from './types.ts';

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'how-file-compression-works',
    slug: 'how-file-compression-works',
    title: 'How Does File Compression Work?',
    titleAr: 'كيف يعمل ضغط الملفات؟',
    summary: 'From repetitive byte patterns to Huffman trees: the mechanics behind turning a 100MB file into 30MB without losing information.',
    summaryAr: 'من تكرار البايتات إلى أشجار هوفمان: الآلية الهندسية لتقليص حجم ملف من 100 ميجابايت إلى 30 دون فقدان أي بيانات.',
    category: 'Programming Concepts',
    categoryAr: 'مفاهيم برمجية',
    readTime: '6 min read',
    readTimeAr: 'قراءة 6 دقائق',
    date: 'Nov 2026',
    tags: ['Algorithms', 'Data Structures', 'Performance'],
    content: [
      'At its core, computer storage stores raw bits (0s and 1s). Whenever you write code, take a picture, or record audio, the computer encodes that information into fixed-width units like bytes (8 bits each).',
      'The key reason uncompressed files are large is redundancy. In a typical text document or source code file, characters like the space or the letter "e" appear thousands of times, while characters like "z" or "q" appear rarely. Yet in standard ASCII or UTF-8, each one usually consumes the same 8 bits.',
      'Lossless compression, pioneered by algorithms like Run-Length Encoding (RLE) and Huffman Coding, exploits this imbalance. Instead of giving every character an equal 8-bit identifier, Huffman coding builds a binary frequency tree: the most frequent characters receive very short codes (like 2 or 3 bits), while rare characters receive longer codes.',
      'Modern compression formats (such as ZIP, GZIP, and Brotli) combine LZ77 (sliding-window dictionary substitution) with Huffman entropy encoding. Whenever the algorithm spots a phrase it has seen before within its sliding window, it replaces that phrase with a tiny pointer: (go back 42 bytes, copy 12 characters).',
      'By turning duplicate data into spatial pointers, software achieves dramatic size reductions while guaranteeing exact bit-for-bit reconstruction upon decompression.'
    ],
    contentAr: [
      'في جوهرها، تخزن أجهزة الكمبيوتر البيانات على هيئة بتات خام (أصفار وآحاد). عندما تكتب كوداً أو تحفظ نصاً، يتم ترميز كل حرف في وحدات ثابتة مثل البايت (8 بتات لكل حرف).',
      'السبب الأساسي لكبر حجم الملفات غير المضغوطة هو التكرار. في أي مستند نصي، يتكرر حرف المسافة أو حرف الألف أو الياء مئات المرات، بينما تظهر حروف أخرى نادراً جداً. ومع ذلك، يستهلك كل حرف في التنسيق العادي نفس المساحة الثابتة (8 بت).',
      'هنا يأتي دور الضغط غير المنقوص (Lossless Compression)، وخاصة خوارزميات مثل ترميز هوفمان (Huffman Coding). تعتمد الفكرة على بناء شجرة تكرار: الحروف الأكثر تكراراً تُمنح شفرات قصيرة جداً (بتين أو 3 بت فقط)، بينما الحروف النادرة تُمنح شفرات أطول.',
      'تجمع التنسيقات الحديثة (مثل ZIP وGzip وBrotli) بين تقنية النافذة المنزلقة (LZ77) وترميز هوفمان. عندما يكتشف البرنامج نصاً مكرراً مر عليه مسبقاً، يستبدله بمؤشر رقمي بسيط يقول: (ارجع 40 بايت للوراء وانسخ 15 حرفاً).',
      'بهذه الطريقة الهندسية البسيطة والذكية، تتقلص أحجام الملفات بنسب تصل إلى 70% مع ضمان استرجاع البيانات الأصلية بدقة متناهية ودون فقدان ذرة واحدة.'
    ]
  },
  {
    id: 'how-computer-searches-millions-records',
    slug: 'how-computer-searches-millions-records',
    title: 'How Does a Computer Search Through Millions of Records?',
    titleAr: 'كيف يبحث الكمبيوتر بين ملايين السجلات في أجزاء من الثانية؟',
    summary: 'Why linear scanning fails at scale, and how B-Trees and Inverted Indexes allow databases to locate your item in less than 3 milliseconds.',
    summaryAr: 'لماذا يفشل الفحص الخطي مع كثرة البيانات، وكيف تمكن أشجار B-Tree والفهارس المعكوسة قواعد البيانات من إيجاد طلبك في لمح البصر.',
    category: 'Software Architecture',
    categoryAr: 'معمارية البرمجيات',
    readTime: '7 min read',
    readTimeAr: 'قراءة 7 دقائق',
    date: 'Oct 2026',
    tags: ['Databases', 'Indexing', 'B-Trees', 'Big O'],
    content: [
      'Imagine searching for a single friend’s name in a telephone directory of 10 million people. If the book were completely unsorted, you would have to read every single name one by one from page 1 to the end. In computer science, this is linear search, or O(N). For 10 million items, an unindexed scan can lock CPU cores and stall databases.',
      'The moment that telephone book is sorted alphabetically, your strategy changes completely. You open the book directly in the middle. Is your target name before or after? With just one comparison, you instantly throw away 5 million possibilities. This is binary search, or O(log N). Instead of 10,000,000 steps, you find your target in at most 24 steps.',
      'Databases cannot constantly sort massive tables on disk because inserting new rows would require shifting gigabytes of memory. Instead, database engines build secondary index structures known as B-Trees and B+ Trees.',
      'A B-Tree is a balanced, multi-branch tree kept in sorted order. Each node contains dozens or hundreds of keys and child pointers, designed specifically to match disk block read sizes. In just 3 or 4 disk seeks, the database jumps directly to the block containing your record.',
      'When building applications at CodePrint, understanding how indexing works under the hood is what keeps systems fast even as data grows from thousands to millions of entries.'
    ],
    contentAr: [
      'تخيل أنك تبحث عن اسم شخص في دليل هواتف يضم 10 ملايين اسم. إذا كان الدليل غير مرتب، ستضطر لقراءة كل اسم اسماً اسماً من أول صفحة إلى آخرها. هذا ما يسمى في علم الحاسوب بالبحث الخطي O(N)، وهو مكلف جداً ويهدر موارد المعالج.',
      'بمجرد أن يتم ترتيب الدليل أبجدياً، تتغير طريقة البحث كلياً. تفتح الدليل من المنتصف مباشرة؛ إذا كان الاسم قبل المنتصف، تستبعد 5 ملايين اسم دفعة واحدة! هذا هو البحث الثنائي O(log N). بدلاً من 10 ملايين خطوة، ستصل للنتيجة في 24 خطوة فقط كحد أقصى.',
      'لكن قواعد البيانات لا تستطيع إعادة ترتيب الملفات الضخمة كلما أضفنا سطراً جديداً. لذلك ابتكر مهندسو الأنظمة ما يعرف بالفهارس وهياكل B-Tree وB+ Tree.',
      'شجرة B-Tree هي هيكل بيانات متزن متعدد الفروع ومصمم ليتطابق مع أحجام كتل القراءة في وحدات التخزين. عبر 3 أو 4 قفزات فقط بين عقد الشجرة، تصل قاعدة البيانات إلى السجل المطلوب مباشرة دون الحاجة لقراءة كامل الجدول.',
      'في كود برنت، نبني حلولنا البرمجية بفهم عميق لهذه الهياكل لضمان بقاء التطبيقات سريعة وخفيفة حتى مع تضاعف أعداد المستخدمين والبيانات.'
    ]
  },
  {
    id: 'how-internet-delivers-data',
    slug: 'how-internet-delivers-data',
    title: 'How Does the Internet Deliver Data to Your Device?',
    titleAr: 'كيف ينقل الإنترنت البيانات إلى جهازك؟',
    summary: 'The physical and protocol journey of a web request: DNS resolution, TCP handshakes, TLS encryption, and packet routing across oceans.',
    summaryAr: 'الرحلة الواقعية لطلب الويب: ترجمة أسماء النطاقات DNS، مصافحة TCP، تشفير TLS، وتوجيه حزم البيانات عبر القارات.',
    category: 'Programming Concepts',
    categoryAr: 'مفاهيم برمجية',
    readTime: '5 min read',
    readTimeAr: 'قراءة 5 دقائق',
    date: 'Sep 2026',
    tags: ['Networking', 'TCP/IP', 'DNS', 'Web'],
    content: [
      'When you type a URL like code-print.wasmer.app into your browser, your device doesn’t know where that server lives in physical space. Devices communicate using IP addresses.',
      'First, your browser queries a recursive DNS server (the phonebook of the internet) to resolve the domain into an IP address. This lookup typically completes in under 20 milliseconds thanks to aggressive caching at your ISP and browser levels.',
      'Once the IP is known, your computer initiates a TCP three-way handshake (SYN, SYN-ACK, ACK) to establish a reliable connection. Because privacy is essential, this is immediately followed by a TLS (Transport Layer Security) handshake, exchanging cryptographic keys to ensure no third party on the wire can inspect or alter your traffic.',
      'Your request is then chopped into small packets (typically ~1500 bytes each) and sent across optical fiber cables under roads and ocean floors. Routers along the route inspect each packet’s IP header and forward it toward the destination using BGP (Border Gateway Protocol).',
      'The destination server processes the HTTP request, packages the HTML, CSS, or JSON response into returning packets, and your browser reassembles them in memory to paint the interface.'
    ],
    contentAr: [
      'عندما تكتب رابطاً في متصفحك، لا يعرف جهازك مكان ذلك الخادم في العالم الحقيقي؛ فالأجهزة تتواصل عبر عناوين IP الرقمية.',
      'أول خطوة هي استعلام نظام أسماء النطاقات (DNS)، وهو بمثابة دليل الهاتف للإنترنت، ليترجم الاسم إلى عنوان IP فعلي. يستغرق هذا الأمر عادة أقل من 20 جزءاً من الثانية بفضل التخزين المؤقت.',
      'بمجرد معرفة العنوان، يبدأ جهازك مصافحة بروتوكول TCP الثلاثية لتأسيس اتصال مضمون. ولأن الأمان أولوية، تليها فوراً مصافحة تشفير TLS لتبادل المفاتيح المشفرة، مما يمنع أي طرف وسيط من التجسس على بياناتك أو تغييرها.',
      'يتم بعد ذلك تقطيع طلبك إلى حزم صغيرة (بحجم نحو 1500 بايت للحزمة)، لتسافر عبر كابلات الألياف الضوئية الممتدة تحت الشوارع وقيعان المحيطات بسرعة الضوء. تفحص الموجهات (Routers) ترويسة كل حزمة وتوجهها نحو مسارها الصحيح.',
      'يستقبل الخادم الحزم، يعيد تجميعها، يعالج الطلب، ثم يرسل الرد في حزم عائدة ليعيد متصفحك رسم الواجهة أمامك في أجزاء من الثانية.'
    ]
  },
  {
    id: 'understanding-if-else-statements',
    slug: 'understanding-if-else-statements',
    title: 'Understanding If/Else Statements: Control Flow in Real Systems',
    titleAr: 'فهم جمل الشرط If/Else: التحكم في تدفق الأنظمة البرمجية',
    summary: 'Why branching logic is the fundamental atom of software, and how clean patterns prevent nested conditional chaos in production code.',
    summaryAr: 'لماذا تمثل الشروط حجر الأساس لأي برنامج، وكيف تحمي الشفرة النظيفة المشاريع من فوضى الشروط المتداخلة.',
    category: 'Developer Guides',
    categoryAr: 'أدلة للمطورين',
    readTime: '4 min read',
    readTimeAr: 'قراءة 4 دقائق',
    date: 'Aug 2026',
    tags: ['Clean Code', 'Logic', 'Refactoring'],
    content: [
      'Every software program, regardless of its size, does only three things: executes instructions sequentially, repeats instructions in loops, and makes decisions based on conditions.',
      'An If/Else statement evaluates an expression to a boolean value: True or False. If the user is logged in, show the dashboard; otherwise, show the sign-in screen.',
      'However, as software grows, developers often fall into the trap of deeply nested conditionals (the dreaded "pyramid of doom"). Five levels of nested if/else statements make code nearly impossible to debug, test, or reason about.',
      'Professional engineers prevent this by employing the "Guard Clause" or "Early Return" pattern. Instead of wrapping your entire happy path inside a giant condition, check for error cases and missing inputs upfront, exit immediately, and leave the main logic flat and readable.',
      'Simplicity in control flow is the hallmark of reliable software. At CodePrint, keeping logic clean and predictable is how we build tools that don’t crash.'
    ],
    contentAr: [
      'أي برنامج حاسوبي في العالم، مهما بلغ تعقيده، يقوم بثلاثة أشياء فقط: تنفيذ الأوامر بالترتيب، تكرار الأوامر عبر الحلقات، واتخاذ القرارات بناءً على الشروط.',
      'تقوم جملة الشرط If/Else بتقييم شرط معين لتحديد ما إذا كان صحيحاً (True) أو خاطئاً (False). إن كان المستخدم مسجلاً، اعرض لوحة التحكم؛ وإن لم يكن، اعرض صفحة الدخول.',
      'لكن مع توسع المشاريع، يقع المبرمجون في فخ الشروط المتداخلة المعقدة (ما يُعرف بهرم الفوضى Pyramid of Doom)، حيث تتداخل الشروط داخل بعضها لتصبح قراءة الكود وتتبعه أمراً شديد الصعوبة.',
      'يتغلب المهندسون المحترفون على ذلك باستخدام أسلوب "الحراسة والإنهاء المبكر" (Guard Clauses / Early Return). بدلاً من حشر كل الكود داخل شرط عملاق، افحص حالات الخطأ أو نقص المدخلات في البداية واخرج فوراً، ليبقى الكود الأساسي مستقيماً ومقروءاً.',
      'وضوح المنطق البرمجي هو سر استقرار التطبيقات. في كود برنت، نحرص على كتابة منطق واضح وسهل الصيانة لبناء برمجيات تثق بها.'
    ]
  },
  {
    id: 'useful-ai-tools-for-developers',
    slug: 'useful-ai-tools-for-developers',
    title: 'Useful AI Tools for Modern Developers: Practicality over Hype',
    titleAr: 'أدوات ذكاء اصطناعي مفيدة للمطورين: التركيز على الإنتاجية بعيداً عن المبالغات',
    summary: 'A disciplined look at where modern LLMs genuinely accelerate development versus where human architectural rigor remains non-negotiable.',
    summaryAr: 'نظرة واقعية منضبطة أين يقدم الذكاء الاصطناعي قيمة حقيقية في تسريع التطوير وأين تظل الخبرة الهندسية البشرية أمراً لا غنى عنه.',
    category: 'AI & Tech',
    categoryAr: 'ذكاء اصطناعي وتقنية',
    readTime: '6 min read',
    readTimeAr: 'قراءة 6 دقائق',
    date: 'Jul 2026',
    tags: ['Artificial Intelligence', 'Productivity', 'Tooling'],
    content: [
      'Artificial intelligence in software development is frequently surrounded by excessive marketing claims. But stripping away the hype reveals tools that genuinely eliminate tedious friction in everyday engineering.',
      'Where AI excels today is in boilerplate generation, regex construction, syntax conversions, and writing comprehensive test suites for well-specified interfaces.',
      'Where AI struggles is in holistic system architecture, subtle race conditions, edge-case security reasoning, and understanding the unspoken business constraints of real organizations.',
      'The most effective developers treat AI not as an autonomous replacement for thought, but as an interactive pair-programmer. You write the specification, dictate the constraints, and audit every line of generated logic.',
      'At CodePrint, we embrace tools that increase human leverage while maintaining absolute ownership over every architectural boundary and user interface detail.'
    ],
    contentAr: [
      'تحاط تقنيات الذكاء الاصطناعي في مجال البرمجة بكثير من المبالغات التسويقية. لكن عند تجريد الأمر من الضجيج، نجد أدوات تقدم تسريعاً حقيقياً للمهام الروتينية الشاقة للمطورين.',
      'يتألق الذكاء الاصطناعي اليوم في كتابة الشفرات التأسيسية المتكررة (Boilerplate)، صياغة التعابير النمطية المعقدة (Regex)، كتابة اختبارات الوحدات البرمجية، وشرح الأكواد الغامضة.',
      'بينما تظل نقاط الضعف واضحة في اتخاذ القرارات المعمارية الكبرى، معالجة مشكلات التزامن الدقيقة (Race Conditions)، والأمان، وفهم السياق الواقعي للأعمال.',
      'المطور الذكي لا يعتبر الذكاء الاصطناعي بديلاً عن التفكير، بل شريكاً برمجياً مسرعاً للعمل؛ حيث يضع المطور المعايير والضوابط، ويدقق كل سطر يولد لضمان الجودة والأمان.',
      'في كود برنت، نوظف الأدوات الحديثة لتعزيز كفاءتنا مع التمسك الصارم بالمسؤولية الكاملة عن كل تفصيلة في الكود وتجربة المستخدم.'
    ]
  }
];
