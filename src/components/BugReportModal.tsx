import React, { useState } from 'react';
import { useApp } from '../data/store.tsx';
import { X, CheckCircle, Bug, Lightbulb, MessageSquare } from 'lucide-react';

export const BugReportModal: React.FC = () => {
  const { isBugReportModalOpen, setIsBugReportModalOpen, submitFeedback, products, language, t } = useApp();
  const isAr = language === 'ar';

  const [type, setType] = useState<'Bug Report' | 'Feature Request' | 'Product Feedback' | 'General Support'>('Bug Report');
  const [productName, setProductName] = useState('Flosy');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isDone, setIsDone] = useState(false);

  if (!isBugReportModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    submitFeedback({
      type,
      productName,
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    });

    setIsDone(true);
  };

  const handleClose = () => {
    setIsBugReportModalOpen(false);
    setIsDone(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div
        className="w-full max-w-lg my-8 bg-white dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50/50 dark:bg-neutral-900/30">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#B00018]"></span>
            <h3 className="text-sm font-bold text-neutral-950 dark:text-white">
              {type === 'Bug Report' ? t.reportBug : t.suggestFeature}
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
        <div className="p-6">
          {isDone ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-white">
                {isAr ? 'شكراً لك! تم استلام رسالتك' : 'Thank You! Feedback Received'}
              </h4>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                {isAr
                  ? 'يتم فحص بلاغات الأخطاء والمقترحات مباشرة من مهندسي كود برنت لتحسين الأدوات والتطبيقات.'
                  : 'Your submission has been filed into our review queue. We prioritize community feedback in every release.'}
              </p>
              <button
                onClick={handleClose}
                className="mt-3 px-4 py-2 text-xs font-semibold text-white bg-[#B00018] rounded-md hover:bg-[#F00020] cursor-pointer"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Type Switcher */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'Bug Report', label: t.reportBug, icon: Bug },
                  { id: 'Feature Request', label: t.suggestFeature, icon: Lightbulb }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setType(item.id as any)}
                      className={`p-2.5 rounded-lg border text-start transition-colors flex items-center gap-2 cursor-pointer ${
                        type === item.id
                          ? 'border-[#B00018] bg-[#B00018]/5 text-neutral-900 dark:text-white font-semibold'
                          : 'border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-[#B00018]" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Product Target */}
              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                  {isAr ? 'المنتج أو الأداة المعنية' : 'Target Application / Tool'}
                </label>
                <select
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {isAr ? p.nameAr : p.name}
                    </option>
                  ))}
                  <option value="General Platform">General Website / Platform</option>
                </select>
              </div>

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
                    placeholder={isAr ? 'اسمك' : 'Your name'}
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
                    placeholder="name@email.com"
                    className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                  {isAr ? 'التفاصيل / خطوات إعادة إنتاج الخطأ' : 'Details / Reproduction Steps'} *
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    isAr
                      ? 'اشرح ما حدث أو اقترح الميزة الجديدة بالتفصيل...'
                      : 'Describe what happened, expected behavior, or your proposed enhancement...'
                  }
                  className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors cursor-pointer"
              >
                {isAr ? 'إرسال التقرير' : 'Submit Feedback'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
