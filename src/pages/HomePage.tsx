import React from 'react';
import { useApp } from '../data/store.tsx';
import {
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  Package,
  Wrench,
  Cpu,
  Globe,
  ShoppingBag,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects.ts';
import { ARTICLES_DATA } from '../data/articles.ts';

export const HomePage: React.FC = () => {
  const {
    t,
    language,
    products,
    setCurrentView,
    setSelectedProduct,
    setSelectedProject,
    setSelectedArticle,
    setIsQuoteModalOpen
  } = useApp();

  const isAr = language === 'ar';

  const featuredProductIds = ['flosy', 'gradeos', 'outfit-closet', 'wave'];
  const featuredProducts = products.filter((p) => featuredProductIds.includes(p.id));

  const easyTrade = PROJECTS_DATA.find((p) => p.id === 'easytrade');
  const recentArticles = ARTICLES_DATA.slice(0, 3);

  const pillars = [
    {
      title: t.pillar1Title,
      desc: t.pillar1Desc,
      icon: Package,
      view: 'products'
    },
    {
      title: t.pillar2Title,
      desc: t.pillar2Desc,
      icon: Wrench,
      view: 'tools'
    },
    {
      title: t.pillar3Title,
      desc: t.pillar3Desc,
      icon: Cpu,
      view: 'services'
    },
    {
      title: t.pillar4Title,
      desc: t.pillar4Desc,
      icon: Globe,
      view: 'services'
    }
  ];

  const processSteps = [
    { num: '01', title: t.step1, desc: t.step1Desc },
    { num: '02', title: t.step2, desc: t.step2Desc },
    { num: '03', title: t.step3, desc: t.step3Desc },
    { num: '04', title: t.step4, desc: t.step4Desc },
    { num: '05', title: t.step5, desc: t.step5Desc },
    { num: '06', title: t.step6, desc: t.step6Desc }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* =========================================================================
          SECTION 1 — HERO
          ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 pb-12 overflow-hidden border-b border-neutral-200 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quiet Brand Kicker (No pills!) */}
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                <span className="w-2 h-2 bg-[#B00018]"></span>
                <span>CodePrint Software Studio</span>
                <span aria-hidden="true">·</span>
                <span>Independent Digital Craft</span>
              </div>

              {/* Marquee Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1] text-balance">
                {isAr ? 'نحوّل الأفكار إلى برامج وحلول رقمية.' : 'Ideas into Software.'}
              </h1>

              {/* Value Proposition */}
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
                {t.heroSubtitle}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setCurrentView('products')}
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>{t.heroPrimaryCta}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>

                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="px-6 py-3 text-sm font-semibold text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
                >
                  {t.heroSecondaryCta}
                </button>
              </div>

              {/* Proof / Verified Trust Anchors */}
              <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-wrap items-center gap-6 text-xs text-neutral-500">
                <div>
                  <span className="font-bold text-neutral-900 dark:text-white tabular-nums">13+</span>
                  <span className="ms-1.5">{isAr ? 'تطبيق وأداة مفتوحة' : 'Shipped Repositories'}</span>
                </div>
                <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">/</span>
                <div>
                  <span className="font-bold text-neutral-900 dark:text-white">Bilingual</span>
                  <span className="ms-1.5">{isAr ? 'عربي وإنجليزي أصيل' : 'Native AR & EN'}</span>
                </div>
                <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">/</span>
                <div>
                  <span className="font-bold text-neutral-900 dark:text-white">Zero Slop</span>
                  <span className="ms-1.5">{isAr ? 'هندسة مخصصة' : 'Custom Architecture'}</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-neutral-900 group">
                <img
                  src="/src/assets/images/hero_codeprint_editorial_1794270896803.jpg"
                  alt="CodePrint Software Studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="text-[11px] font-mono text-[#F00020] uppercase tracking-wider mb-1">
                    Studio Invariants
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {isAr ? 'تصميم رقمي منضبط وهندسة برمجية عملية' : 'Purpose-Driven Software & Editorial Design'}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT WE DO (4 PILLARS)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B00018] mb-1">
              Core Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {t.whatWeDoTitle}
            </h2>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {t.whatWeDoSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setCurrentView(pillar.view)}
                  className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-[#0E0E0E] hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-[#B00018] group-hover:bg-[#B00018] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-900 flex items-center gap-1.5 text-xs font-semibold text-[#B00018] group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1">
                    <span>{isAr ? 'عرض التفاصيل' : 'Explore'}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — FEATURED PRODUCTS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#B00018] mb-1">
                Selected Software
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
                {t.featuredProducts}
              </h2>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {t.featuredProductsSub}
              </p>
            </div>
            <button
              onClick={() => setCurrentView('products')}
              className="text-xs font-semibold text-[#B00018] hover:text-[#F00020] flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>{isAr ? 'عرض كافة المنتجات' : 'View All Products'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-[#0E0E0E] overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/9] bg-neutral-900 overflow-hidden border-b border-neutral-100 dark:border-neutral-800">
                    <img
                      src={prod.image}
                      alt={isAr ? prod.nameAr : prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    
                    {/* Clean Metadata Header (No pills!) */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between text-xs text-white drop-shadow">
                      <span className="font-medium">{prod.category}</span>
                      <span className="font-mono text-[11px]">{isAr ? prod.priceLabelAr : prod.priceLabel}</span>
                    </div>
                  </div>

                  {/* Card Text Content */}
                  <div className="p-6 space-y-2">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                        {isAr ? prod.nameAr : prod.name}
                      </h3>
                      <span className="text-xs text-neutral-400 font-mono">{prod.version}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                      {isAr ? prod.taglineAr : prod.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-xs border-t border-neutral-100 dark:border-neutral-900 mt-4">
                  <span className="text-neutral-400">
                    {isAr ? prod.statusAr : prod.status}
                  </span>
                  <span className="font-semibold text-[#B00018] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform rtl:group-hover:-translate-x-0.5">
                    <span>{t.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — FEATURED CASE STUDY (EasyTrade)
          ========================================================================= */}
      {easyTrade && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0D0D0D] p-8 sm:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B00018]">
                  <span>Featured Case Study</span>
                  <span aria-hidden="true">·</span>
                  <span>Production Implementation</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white">
                  {isAr ? easyTrade.titleAr : easyTrade.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {isAr ? easyTrade.subtitleAr : easyTrade.subtitle}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 pt-2">
                  {(isAr
                    ? easyTrade.caseStudyDetails?.architectureAr.slice(0, 3)
                    : easyTrade.caseStudyDetails?.architecture.slice(0, 3)
                  )?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex items-center gap-4">
                  <button
                    onClick={() => setSelectedProject(easyTrade)}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>{t.viewCaseStudy}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                  <button
                    onClick={() => setCurrentView('projects')}
                    className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white cursor-pointer"
                  >
                    {isAr ? 'تصفح كل المشاريع' : 'All Projects'}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl bg-neutral-900">
                  <img
                    src={easyTrade.image}
                    alt="EasyTrade Platform Case Study"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 5 — ABOUT CODEPRINT
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0B0B0B] space-y-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#B00018]">
            Brand Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white max-w-2xl leading-tight">
            {isAr
              ? 'صُنِع بالفضول الهندسي. صُمّم للمنفعة والإنتاجية.'
              : 'Built with curiosity. Designed for usefulness.'}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-3xl">
            {isAr
              ? 'كود برنت علامة برمجية مستقلة متخصصة في تطوير المنتجات الرقمية، الأدوات العملية، والحلول البرمجية المخصصة. انطلقنا من فكرة واضحة: استخدام التكنولوجيا لحل المشكلات الواقعية، والابتعاد عن التكلف والتعقيد الزائد.'
              : 'CodePrint is an independent software brand focused on creating useful digital experiences. From small productivity tools to complete software applications, every project starts with a practical problem and a clear goal.'}
          </p>
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => setCurrentView('about')}
              className="text-xs font-semibold text-[#B00018] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{isAr ? 'اقرأ قصة كود برنت الكاملة' : 'Read Full Brand Manifesto'}</span>
              <ArrowRight className="w-3 h-3 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — OUR PROCESS (01 - 06)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B00018] mb-1">
              Engineering Lifecycle
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {t.ourProcessTitle}
            </h2>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {t.ourProcessSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] space-y-3"
              >
                <div className="text-xl font-mono font-bold text-[#B00018]">
                  {step.num}.
                </div>
                <h3 className="text-base font-bold text-neutral-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — LATEST INSIGHTS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#B00018] mb-1">
                Technical Education
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
                {t.latestInsights}
              </h2>
            </div>
            <button
              onClick={() => setCurrentView('insights')}
              className="text-xs font-semibold text-[#B00018] hover:text-[#F00020] flex items-center gap-1 cursor-pointer"
            >
              <span>{isAr ? 'عرض كل المقالات' : 'All Articles'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-[11px] text-neutral-400 flex items-center gap-2">
                    <span>{isAr ? art.categoryAr : art.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{isAr ? art.readTimeAr : art.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-neutral-950 dark:text-white group-hover:text-[#B00018] transition-colors leading-snug">
                    {isAr ? art.titleAr : art.title}
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    {isAr ? art.summaryAr : art.summary}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-900 text-xs font-semibold text-[#B00018] flex items-center gap-1">
                  <span>{t.readArticle}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — CTA BANNER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-8 sm:p-14 text-center text-white space-y-6">
          <div className="inline-block w-3 h-3 bg-[#B00018] mb-2" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-balance max-w-2xl mx-auto">
            {t.ctaTitle}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
            {t.ctaSubtitle}
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-8 py-3.5 text-sm font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors inline-flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>{t.ctaButton}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
