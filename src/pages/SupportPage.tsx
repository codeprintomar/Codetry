import React, { useState } from 'react';
import { useApp } from '../data/store.tsx';
import {
  MessageCircle,
  ExternalLink,
  Bug,
  Lightbulb,
  Mail,
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  Send
} from 'lucide-react';

export const SupportPage: React.FC = () => {
  const { language, setIsBugReportModalOpen, submitFeedback, t } = useApp();
  const isAr = language === 'ar';

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [directName, setDirectName] = useState('');
  const [directEmail, setDirectEmail] = useState('');
  const [directMessage, setDirectMessage] = useState('');
  const [submittedDirect, setSubmittedDirect] = useState(false);

  const faqs = [
    {
      q: isAr ? 'ما هي سياسة أسعار وتراخيص البرامج في كود برنت؟' : 'What is the pricing and licensing policy of CodePrint?',
      a: isAr
        ? 'الأدوات التعليمية والتطبيقات مفتوحة المصدر (مثل Flosy وWave وQFormat) مجانية بالكامل. أما البرمجيات المدفوعة (مثل GradeOS وOutfit Closet) فأسعارها قيد التجهيز أو متاحة للحجز المسبق والتراخيص الخاصة.'
        : 'Open educational utilities (Flosy, Wave, QFormat, Bara El-Salfa, etc.) are 100% free and open-source on GitHub. Paid commercial releases (GradeOS, Outfit Closet, Lawhati) have pricing marked as Coming Soon or via direct license inquiry.'
    },
    {
      q: isAr ? 'كيف يعمل نظام التحقق المالي اليدوي في المتجر؟' : 'How does manual payment verification work in the store?',
      a: isAr
        ? 'عند اختيارك لمنتج وطلب ترخيص، تسجل الطلب برقم مرجعي وتظهر حالته "قيد المراجعة". يقوم فريقنا بمطابقة الإيداع عبر إنستاباي أو الحساب البنكي، وبمجرد التأكيد يُفتح لك رابط التنزيل وترخيص البرنامج فوراً.'
        : 'Upon checkout, your order is recorded as "Under Review" with a reference number. Our team verifies the transaction via InstaPay or bank wire. Once verified, your status transitions to Confirmed and download access is enabled.'
    },
    {
      q: isAr ? 'هل تقدمون خدمات تطوير برمجيات مخصصة للشركات؟' : 'Does CodePrint offer custom software and website development?',
      a: isAr
        ? 'نعم، نبني مواقع متقدمة، متاجر إلكترونية بنظم إشعارات فورية (مثل تيليجرام)، ولوحات تحكم إدارية مخصصة. يمكنك تقديم طلبك عبر صفحة الخدمات وسنرد بدراسة تقنية خلال 24 ساعة.'
        : 'Yes. We build custom websites, e-commerce stores with automated notifications, operational dashboards, and automation workflows. Submit a request through the Services page for a technical proposal.'
    },
    {
      q: isAr ? 'كيف يمكنني الإبلاغ عن خطأ برمجي أو اقتراح ميزة؟' : 'How can I report a bug or suggest a feature for a tool?',
      a: isAr
        ? 'يمكنك الضغط على زر "الإبلاغ عن مشكلة" أو "اقتراح ميزة" في هذه الصفحة لفتح النموذج، أو التواصل معنا عبر قناة الواتساب الرسمية.'
        : 'You can use the dedicated "Report Bug" or "Suggest Feature" buttons on this page to file an issue, or reach out through our official WhatsApp Channel.'
    }
  ];

  const handleDirectContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!directName.trim() || !directEmail.trim() || !directMessage.trim()) return;

    submitFeedback({
      type: 'General Support',
      productName: 'General Platform',
      name: directName.trim(),
      email: directEmail.trim(),
      message: directMessage.trim()
    });

    setSubmittedDirect(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B00018]">
          <span>Assistance &amp; Community</span>
          <span aria-hidden="true">·</span>
          <span>Direct Feedback</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
          {t.supportTitle}
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {isAr
            ? 'تواصل مع فريق كود برنت، شاركنا مقترحاتك وملاحظاتك على الأدوات، أو انضم لقناتنا على الواتساب لمتابعة التحديثات.'
            : 'Get in touch with the CodePrint engineering team, file bug reports, suggest features, or follow updates on WhatsApp.'}
        </p>
      </div>

      {/* Action Cards: WhatsApp & Bug Report */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Official WhatsApp Channel Card */}
        <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
              {t.officialWhatsApp}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {isAr
                ? 'قناتنا الرسمية الموثقة على الواتساب لمتابعة إطلاق الأدوات الجديدة، التحديثات البرمجية، والمناقشات التقنية المباشرة.'
                : 'Follow our official broadcast channel on WhatsApp for verified release announcements, update changelogs, and direct notes.'}
            </p>
          </div>

          <div className="pt-4">
            <a
              href="https://whatsapp.com/channel/0029VbCCNPgufJ0imw5qQ2S"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors shadow-sm"
            >
              <span>{isAr ? 'الانضمام إلى قناة الواتساب' : 'Join WhatsApp Channel'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bug Report & Feature Request Trigger */}
        <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-[#B00018] flex items-center justify-center">
              <Bug className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
              {isAr ? 'الإبلاغ عن خطأ أو اقتراح ميزة' : 'File Bug Report / Suggest Feature'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {isAr
                ? 'واجهت مشكلة في أحد برامجنا أو لديك فكرة لأداة جديدة؟ افتح تذكرة فنية مباشرة وسيتم فحصها في الإصدار القادم.'
                : 'Found an unexpected edge-case in an application, or have an idea for a practical utility? Open a direct ticket.'}
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsBugReportModalOpen(true)}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Bug className="w-3.5 h-3.5" />
              <span>{t.reportBug}</span>
            </button>
            <button
              onClick={() => setIsBugReportModalOpen(true)}
              className="px-4 py-2.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.suggestFeature}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Direct Contact Form & FAQs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* FAQs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B00018]">
              Knowledge Base
            </div>
            <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
              {t.faqTitle}
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-start font-semibold text-xs sm:text-sm text-neutral-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#B00018]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/80">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Direct Email Contact Box */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0E0E0E] space-y-5">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-neutral-950 dark:text-white">
              {isAr ? 'رسالة مباشرة إلى الإدارة' : 'Direct Message'}
            </h4>
            <p className="text-xs text-neutral-500">
              {isAr
                ? 'تواصل مباشرة عبر البريد الإلكتروني codeprintomar@gmail.com'
                : 'Direct support inbox: codeprintomar@gmail.com'}
            </p>
          </div>

          {submittedDirect ? (
            <div className="p-4 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs text-center space-y-2">
              <CheckCircle2 className="w-5 h-5 mx-auto" />
              <p>{isAr ? 'تم إرسال رسالتك بنجاح وسنرد عليك قريباً.' : 'Message received! We will reply promptly.'}</p>
            </div>
          ) : (
            <form onSubmit={handleDirectContact} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                  {t.fullName} *
                </label>
                <input
                  type="text"
                  required
                  value={directName}
                  onChange={(e) => setDirectName(e.target.value)}
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
                  value={directEmail}
                  onChange={(e) => setDirectEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                />
              </div>

              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 font-medium mb-1">
                  {isAr ? 'نص الرسالة أو الاستفسار' : 'Your Message'} *
                </label>
                <textarea
                  required
                  rows={3}
                  value={directMessage}
                  onChange={(e) => setDirectMessage(e.target.value)}
                  placeholder={isAr ? 'اكتب رسالتك هنا...' : 'How can we help?'}
                  className="w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isAr ? 'إرسال الرسالة' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
