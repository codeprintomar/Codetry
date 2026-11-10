import React from 'react';
import { useApp } from '../data/store.tsx';
import { X, Clock, Calendar, Tag, BookOpen } from 'lucide-react';

export const ArticleModal: React.FC = () => {
  const { selectedArticle, setSelectedArticle, language, t } = useApp();

  if (!selectedArticle) return null;

  const art = selectedArticle;
  const isAr = language === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div
        className="w-full max-w-3xl my-8 bg-white dark:bg-[#111111] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#B00018]"></span>
            <span className="text-xs text-neutral-400">
              {isAr ? art.categoryAr : art.category}
            </span>
          </div>
          <button
            onClick={() => setSelectedArticle(null)}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Metadata info */}
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{art.date}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{isAr ? art.readTimeAr : art.readTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white leading-tight">
            {isAr ? art.titleAr : art.title}
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-medium leading-relaxed border-s-2 border-[#B00018] ps-4">
            {isAr ? art.summaryAr : art.summary}
          </p>

          <hr className="border-neutral-200 dark:border-neutral-800" />

          {/* Article Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {(isAr ? art.contentAr : art.content).map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center gap-2">
            <span className="text-xs text-neutral-400 flex items-center gap-1">
              <Tag className="w-3 h-3" />
              <span>{isAr ? 'الوسوم:' : 'Tags:'}</span>
            </span>
            {art.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs text-neutral-600 dark:text-neutral-400 px-2.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
