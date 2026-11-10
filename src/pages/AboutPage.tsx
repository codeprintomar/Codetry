import React from 'react';
import { useApp } from '../data/store.tsx';
import { Github, ExternalLink, MessageCircle, Link as LinkIcon, ArrowRight, ShieldCheck, Cpu, Code2, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { language, setCurrentView, t } = useApp();
  const isAr = language === 'ar';

  const values = [
    {
      title: isAr ? 'المنفعة والجدوى الواقعية' : 'Practical Utility First',
      desc: isAr
        ? 'كل أداة أو برمجية نبنيها تنطلق من حاجة يومية حقيقية، وتهدف لحلها بأبسط طريقة ممكنة دون تعقيد غير مبرر.'
        : 'Every piece of software begins with a tangible, everyday bottleneck and aims to solve it with maximum clarity.'
    },
    {
      title: isAr ? 'الهندسة المستقلة بدون قوالب جاهزة' : 'Independent Craft, Zero Templates',
      desc: isAr
        ? 'نرفض القوالب الممتلئة بالشفرات الزائدة. نبني واجهاتنا وأنظمتنا البرمجية من الصفر بكود نظيف وتصميم مدروس.'
        : 'We reject bloated commercial templates. Interfaces and state architectures are engineered deliberately from ground zero.'
    },
    {
      title: isAr ? 'الشفافية والصدق مع المستخدم' : 'Honest Engineering, No Hype',
      desc: isAr
        ? 'لا ندعي ميزات غير موجودة ولا نبالغ في الوعود. البرمجيات المتاحة نعلنها، وما هو قيد التطوير نوضحه بأمانة.'
        : 'No inflated marketing buzzwords. What is shipped is documented; what is in development is honestly stated.'
    },
    {
      title: isAr ? 'احترام خصوصية المستخدم وبياناته' : 'Privacy & Local-First Resilience',
      desc: isAr
        ? 'أدواتنا وتطبيقاتنا تعتمد منهجية العمل المحلي دون تتبع قسري أو فرض اشتراكات غير ضرورية.'
        : 'Our tools prioritize offline-first capability and local storage so users maintain full sovereignty over their files.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero Statement */}
      <div className="max-w-3xl space-y-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B00018]">
          <span>Brand Manifesto</span>
          <span aria-hidden="true">·</span>
          <span>About CodePrint</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.15] text-balance">
          {isAr
            ? 'صُنِع بالفضول الهندسي. صُمّم للمنفعة والإنتاجية.'
            : 'Built with curiosity. Designed for usefulness.'}
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {isAr
            ? 'انطلقت كود برنت من فكرة بسيطة وواضحة: توظيف التكنولوجيا لحل المشكلات الواقعية. اليوم، كود برنت علامة برمجية مستقلة متخصصة في تطوير المنتجات الرقمية، أدوات الإنتاجية، والحلول البرمجية المخصصة.'
            : 'CodePrint started with a simple idea: use technology to solve real problems. Today, it is an independent software brand developing digital products, productivity tools, and customized software solutions.'}
        </p>
      </div>

      {/* Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] space-y-6 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p>
            {isAr
              ? 'التركيز الأساسي لدى كود برنت ليس في بناء منتجات ضخمة معقدة ترهق المستخدم، بل في ابتكار برمجيات سهلة الفهم، ممتعة في الاستخدام، ومبنية على أحدث المعايير التقنية.'
              : 'The focus is straightforward: create software that is useful, understandable, and thoughtfully designed. Rather than chasing ephemeral hype or over-engineering basic tasks, every application is crafted to respect user focus.'}
          </p>

          <p>
            {isAr
              ? 'نجمع بين تطوير المنتجات المفتوحة المجانية (مثل Flosy وWave وQFormat وBara El-Salfa) وتقديم حلول برمجية مخصصة ومتاجر إلكترونية للأنشطة التجارية التي تبحث عن الجودة والاستقرار.'
              : 'CodePrint unites open-source digital utilities (like Flosy, Wave, QFormat, and Bara El-Salfa) with tailored software engineering and high-speed web platforms for businesses that prioritize speed, security, and distinctive visual presence.'}
          </p>

          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-900 dark:text-white">
            <span>Engineering Hub: Alexandria / Cairo</span>
            <span aria-hidden="true">·</span>
            <span>Founder &amp; Lead: Omar</span>
            <span aria-hidden="true">·</span>
            <span>Independent &amp; Self-Sustaining</span>
          </div>
        </div>

        {/* Official Channels Card */}
        <div className="lg:col-span-4 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0B0B0B] space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {isAr ? 'الروابط والقنوات الرسمية المعتمدة' : 'Official Verified Channels'}
          </h3>

          <div className="space-y-2.5 text-xs">
            <a
              href="https://github.com/codeprintomar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-between hover:border-[#B00018] transition-colors"
            >
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                <span className="font-semibold text-neutral-900 dark:text-white">GitHub Profile</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            <a
              href="https://whatsapp.com/channel/0029VbCCNPgufJ0imw5qQ2S"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-between hover:border-emerald-500 transition-colors text-emerald-600 dark:text-emerald-400 font-semibold"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Channel</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://linktr.ee/codeprintomar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-between hover:border-[#B00018] transition-colors"
            >
              <div className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                <span className="font-semibold text-neutral-900 dark:text-white">Linktree Directory</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            <a
              href="https://code-print.wasmer.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-between hover:border-[#B00018] transition-colors"
            >
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#B00018]" />
                <span className="font-semibold text-neutral-900 dark:text-white">code-print.wasmer.app</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="space-y-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#B00018] mb-1">
            Core Principles
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
            {isAr ? 'المبادئ والقيم الحاكمة لكود برنت' : 'Guiding Architectural Values'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] space-y-2.5"
            >
              <div className="text-xs font-mono font-bold text-[#B00018]">0{idx + 1}.</div>
              <h3 className="text-base font-bold text-neutral-950 dark:text-white">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Collaborate */}
      <div className="p-8 sm:p-12 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-neutral-900 to-black text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold">
            {isAr ? 'مهتم بالتعاون أو بناء برمجية مخصصة؟' : 'Interested in building together?'}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-neutral-400">
            {isAr ? 'نساعدك على نقل فكرتك إلى برنامج يعمل بكفاءة وأمان.' : 'Let’s talk through your architecture and turn ideas into software.'}
          </p>
        </div>

        <button
          onClick={() => setCurrentView('services')}
          className="px-6 py-3 text-xs font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors whitespace-nowrap cursor-pointer self-start sm:self-auto shadow-sm"
        >
          {t.heroSecondaryCta}
        </button>
      </div>

    </div>
  );
};
