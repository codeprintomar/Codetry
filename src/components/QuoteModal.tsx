import React, { useState } from 'react';
import { useApp } from '../data/store.tsx';
import { X, CheckCircle, ArrowRight, Send } from 'lucide-react';

export const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, setIsQuoteModalOpen, submitQuote, language, t } = useApp();
  const isAr = language === 'ar';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Website Development');
  const [budgetRange, setBudgetRange] = useState('$1,000 - $3,000');
  const [description, setDescription] = useState('');
  const [requiredFeatures, setRequiredFeatures] = useState('');
  const [contactPreference, setContactPreference] = useState<'Email' | 'WhatsApp' | 'Phone'>('Email');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isQuoteModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !description.trim()) {
      setError(isAr ? 'يرجى تعبئة الحقول الأساسية: الاسم، البريد، وتفاصيل المشروع.' : 'Please fill in your name, email, and project overview.');
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
      requiredFeatures: requiredFeatures.trim() || 'Not specified',
      contactPreference
    });

    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsQuoteModalOpen(false);
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setDescription('');
    setRequiredFeatures('');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div
        className="w-full max-w-xl my-8 bg-white dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50/50 dark:bg-neutral-900/30">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#B00018]"></span>
            <h3 className="text-sm font-bold text-neutral-950 dark:text-white">
              {t.quoteFormTitle}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                {isAr ? 'تم استلام طلب المشروع بنجاح' : 'Project Request Received'}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
                {t.submissionSuccess}
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-5 py-2 text-xs font-semibold text-white bg-[#B00018] rounded-md hover:bg-[#F00020] transition-colors cursor-pointer"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
                {t.quoteFormSub}
              </p>

              {error && (
                <div className="p-2.5 text-xs text-red-500 bg-red-500/10 border border-red-500/20 rounded-md">
                  {error}
                </div>
              )}

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                    {t.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isAr ? 'الاسم الكريم' : 'Your name'}
                    className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                    {t.emailAddress} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                  />
                </div>
              </div>

              {/* Category & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                    {t.projectCategory}
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="E-commerce Development">E-commerce Development</option>
                    <option value="Custom Software">Custom Software Application</option>
                    <option value="Dashboard Development">Dashboard &amp; Portal</option>
                    <option value="Automation">Automation &amp; API Integrations</option>
                    <option value="UI Engineering">UI Engineering &amp; Systems</option>
                  </select>
                </div>
                <div>
                  <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                    {t.budgetRange}
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                  >
                    <option value="$500 - $1,000">$500 – $1,000</option>
                    <option value="$1,000 - $3,000">$1,000 – $3,000</option>
                    <option value="$3,000 - $7,000">$3,000 – $7,000</option>
                    <option value="$7,000+">$7,000+</option>
                    <option value="Flexible / Need Consultation">Flexible / Need Consultation</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                  {t.projectScope} *
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={
                    isAr
                      ? 'صف الفكرة باختصار: ما هو التحدي الذي ترغب بحله؟ وما هي النتائج المتوقعة؟'
                      : 'Describe your idea: what core problem are you solving and what is the expected outcome?'
                  }
                  className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                />
              </div>

              {/* Required Features */}
              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                  {t.requiredFeatures}
                </label>
                <input
                  type="text"
                  value={requiredFeatures}
                  onChange={(e) => setRequiredFeatures(e.target.value)}
                  placeholder={
                    isAr
                      ? 'مثال: بوابات دفع، إشعارات تيليجرام، وضع ليلي، لوحة تحكم إدارية'
                      : 'e.g. Payment gateways, Telegram alerts, Admin dashboard, Multilingual'
                  }
                  className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                />
              </div>

              {/* Contact Preference */}
              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                  {t.contactPref}
                </label>
                <div className="flex items-center gap-4">
                  {(['Email', 'WhatsApp', 'Phone'] as const).map((pref) => (
                    <label key={pref} className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="contactPref"
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
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.submitProject}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
