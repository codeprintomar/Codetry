import React from 'react';
import { useApp } from '../data/store.tsx';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, ShoppingBag, Terminal } from 'lucide-react';

export const ProductModal: React.FC = () => {
  const { selectedProduct, setSelectedProduct, language, addToCart, t } = useApp();

  if (!selectedProduct) return null;

  const prod = selectedProduct;
  const isAr = language === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div
        className="w-full max-w-3xl my-8 bg-white dark:bg-[#111111] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#B00018]"></span>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              <span>{prod.category}</span>
              <span className="mx-1.5">·</span>
              <span className="font-mono">{prod.version}</span>
            </div>
          </div>
          <button
            onClick={() => setSelectedProduct(null)}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              {isAr ? prod.nameAr : prod.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
              {isAr ? prod.taglineAr : prod.tagline}
            </p>
          </div>

          {/* Screenshot / Showcase Image */}
          {prod.image && (
            <div className="relative aspect-video rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-900">
              <img
                src={prod.image}
                alt={isAr ? prod.nameAr : prod.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Pricing & Availability Card */}
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                {t.category} &amp; {t.orderStatus}
              </div>
              <div className="text-base font-semibold text-neutral-950 dark:text-white mt-0.5">
                {isAr ? prod.priceLabelAr : prod.priceLabel}
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                {isAr ? prod.statusAr : prod.status}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {prod.githubUrl && (
                <a
                  href={prod.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-semibold text-neutral-700 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{t.githubRepo}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              )}

              {prod.isPaidProduct && (
                <button
                  onClick={() => addToCart(prod)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{t.addToCart}</span>
                </button>
              )}
            </div>
          </div>

          {/* Problem Solved */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              {t.problemSolved}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 bg-amber-500/5 border-s-2 border-amber-500/50 p-3 rounded-e">
              {isAr ? prod.problemSolvedAr : prod.problemSolved}
            </p>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              {isAr ? 'عن التطبيق والهدف منه' : 'Application Overview'}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {isAr ? prod.descriptionAr : prod.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              {t.keyFeatures}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(isAr ? prod.featuresAr : prod.features).map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 p-2.5 rounded border border-neutral-200/60 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#B00018] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-neutral-400 block mb-1">{t.platformSpecs}</span>
              <span className="font-mono text-neutral-800 dark:text-neutral-200">{prod.platform}</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1">{isAr ? 'متطلبات التشغيل' : 'System Requirements'}</span>
              <span className="text-neutral-800 dark:text-neutral-200">{prod.requirements}</span>
            </div>
          </div>

          {/* Verified Repository & Download Notes */}
          <div className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-neutral-900/20 text-xs text-neutral-500 space-y-1">
            <div className="flex items-center gap-1.5 font-medium text-neutral-700 dark:text-neutral-300">
              <Terminal className="w-3.5 h-3.5 text-[#B00018]" />
              <span>{isAr ? 'ملاحظة التوزيع والترخيص' : 'Distribution & Verification Notice'}</span>
            </div>
            <p>
              {isAr ? prod.downloadNoteAr : prod.downloadNote || 'Built with independent CodePrint engineering standards.'}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
