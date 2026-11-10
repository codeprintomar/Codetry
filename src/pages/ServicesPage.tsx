import React, { useState } from 'react';
import { useApp } from '../data/store.tsx';
import { SERVICES_DATA } from '../data/services.ts';
import {
  Globe,
  ShoppingBag,
  Cpu,
  LayoutDashboard,
  Zap,
  Layers,
  CheckCircle2,
  Clock,
  ArrowRight,
  Send,
  CheckCircle
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  ShoppingBag,
  Cpu,
  LayoutDashboard,
  Zap,
  Layers
};

export const ServicesPage: React.FC = () => {
  const { language, submitQuote, t } = useApp();
  const isAr = language === 'ar';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Website Development');
  const [budgetRange, setBudgetRange] = useState('$1,000 - $3,000');
  const [description, setDescription] = useState('');
  const [requiredFeatures, setRequiredFeatures] = useState('');
  const [contactPreference, setContactPreference] = useState<'Email' | 'WhatsApp' | 'Phone'>('Email');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !description.trim()) {
      setError(isAr ? 'يرجى ملء الحقول المطلوبة (الاسم، البريد، وتفاصيل المشروع).' : 'Please complete the required fields (Name, Email, Description).');
      return;
    }

    if (!email.includes('@')) {
      setError(isAr ? 'يرجى إدخال بريد إلكتروني صحيح.' : 'Please enter a valid email address.');
      return;
    }

    submitQuote({
      name: name.trim(),
      email: email.trim(),
      category,
      budgetRange,
      description: description.trim(),
      requiredFeatures: requiredFeatures.trim() || 'Standard requirements',
      contactPreference
    });

    setSubmitted(true);
    setError('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B00018]">
          <span>Tailored Engineering</span>
          <span aria-hidden="true">·</span>
          <span>Bespoke Solutions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
          {t.navServices}
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {isAr
            ? 'نقدم خدمات تطوير برمجية متخصصة للأفراد والشركات. من المواقع والمتاجر السريعة إلى الأنظمة المؤتمتة ولوحات الإدارة المركزية.'
            : 'Custom software, web platforms, online stores, and automated operational pipelines engineered with human craft and strict technical standards.'}
        </p>
      </div>

      {/* Services Grid (6 Services) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((srv) => {
          const Icon = iconMap[srv.iconName] || Globe;
          return (
            <div
              key={srv.id}
              className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 flex items-center justify-center text-[#B00018]">
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                    {isAr ? srv.titleAr : srv.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {isAr ? srv.fullDescAr : srv.fullDesc}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-2 space-y-2 border-t border-neutral-100 dark:border-neutral-900">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                    {isAr ? 'مخرجات الخدمة:' : 'Deliverables:'}
                  </span>
                  {(isAr ? srv.deliverablesAr : srv.deliverables).map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B00018] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline estimate */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between text-xs text-neutral-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{isAr ? srv.typicalTimelineAr : srv.typicalTimeline}</span>
                </span>
                <a
                  href="#project-form"
                  onClick={() => setCategory(srv.title)}
                  className="font-semibold text-[#B00018] hover:underline"
                >
                  {isAr ? 'طلب هذا المشروع' : 'Inquire'}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Request Form (Section 10) */}
      <div id="project-form" className="scroll-mt-24 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0C0C0C] p-6 sm:p-12 space-y-8">
        <div className="max-w-xl space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#B00018]">
            {isAr ? 'نموذج تقديم الطلب' : 'Direct Inquiry'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            {t.quoteFormTitle}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {t.quoteFormSub}
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-neutral-950 dark:text-white">
              {isAr ? 'تم استلام وتوثيق طلبك بنجاح' : 'Inquiry Successfully Logged'}
            </h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              {t.submissionSuccess}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setName('');
                setEmail('');
                setDescription('');
                setRequiredFeatures('');
              }}
              className="mt-2 px-4 py-2 text-xs font-semibold text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
            >
              {isAr ? 'تقديم طلب آخر' : 'Submit Another Request'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 max-w-3xl">
            {error && (
              <div className="p-3 text-xs text-red-500 bg-red-500/10 border border-red-500/20 rounded-md">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  {t.fullName} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isAr ? 'الاسم الكريم' : 'Your name'}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  {t.emailAddress} *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@business.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  {t.projectCategory}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                >
                  <option value="Website Development">Website Development</option>
                  <option value="E-commerce Development">E-commerce Development</option>
                  <option value="Custom Software">Custom Software Application</option>
                  <option value="Dashboard Development">Dashboard &amp; Portal</option>
                  <option value="Automation">Automation Workflows</option>
                  <option value="UI Development">UI Engineering</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  {t.budgetRange}
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                >
                  <option value="$500 - $1,000">$500 – $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 – $3,000</option>
                  <option value="$3,000 - $7,000">$3,000 – $7,000</option>
                  <option value="$7,000+">$7,000+</option>
                  <option value="Flexible / Need Consultation">Flexible / Need Consultation</option>
                </select>
              </div>
            </div>

            <div className="text-xs">
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t.projectScope} *
              </label>
              <textarea
                required
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={
                  isAr
                    ? 'ما هو التحدي الذي تواجهه؟ وما هي المتطلبات الأساسية لنجاح هذا الحل الرقمي؟'
                    : 'Describe your requirements, core problems, and desired outcomes...'
                }
                className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
              />
            </div>

            <div className="text-xs">
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t.requiredFeatures}
              </label>
              <input
                type="text"
                value={requiredFeatures}
                onChange={(e) => setRequiredFeatures(e.target.value)}
                placeholder={
                  isAr
                    ? 'مثال: نظام دفع يدوي، إشعارات واتساب، صلاحيات أدمن، تقارير Excel'
                    : 'e.g. Multi-role admin, WhatsApp alerts, CSV export, Arabic & English'
                }
                className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
              />
            </div>

            <div className="text-xs space-y-1.5">
              <label className="block font-medium text-neutral-700 dark:text-neutral-300">
                {t.contactPref}
              </label>
              <div className="flex items-center gap-6">
                {(['Email', 'WhatsApp', 'Phone'] as const).map((pref) => (
                  <label key={pref} className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="svcContactPref"
                      checked={contactPreference === pref}
                      onChange={() => setContactPreference(pref)}
                      className="accent-[#B00018]"
                    />
                    <span className="text-neutral-700 dark:text-neutral-300">{pref}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-3 text-xs font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.submitProject}</span>
              </button>
            </div>
          </form>
        )}
      </div>

    </div>
  );
};
