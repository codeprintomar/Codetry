import React, { useState } from 'react';
import { useApp } from '../data/store.tsx';
import { ARTICLES_DATA } from '../data/articles.ts';
import { Search, Clock, Calendar, ArrowRight, Tag, BookOpen } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const { language, setSelectedArticle, t } = useApp();
  const isAr = language === 'ar';

  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Programming Concepts', 'Software Architecture', 'AI & Tech', 'Developer Guides'];

  const filtered = ARTICLES_DATA.filter((art) => {
    const q = search.toLowerCase().trim();
    const matchQ =
      !q ||
      art.title.toLowerCase().includes(q) ||
      art.titleAr.includes(q) ||
      art.summary.toLowerCase().includes(q) ||
      art.summaryAr.includes(q) ||
      art.tags.some((t) => t.toLowerCase().includes(q));

    const matchCat = selectedCat === 'All' || art.category === selectedCat;

    return matchQ && matchCat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B00018]">
          <span>Engineering Journal</span>
          <span aria-hidden="true">·</span>
          <span>Computer Science &amp; Systems</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
          {t.navInsights}
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {isAr
            ? 'مقالات تقنية وشروحات مبسطة لهندسة البرمجيات، هياكل البيانات، شبكات الإنترنت، وأدوات المطورين.'
            : 'Clear, disciplined writing on software architecture, algorithms, internet infrastructure, and practical developer tools.'}
        </p>
      </div>

      {/* Filter and Search */}
      <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute top-3 start-3 text-neutral-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isAr ? 'ابحث في مواضيع ومصطلحات المقالات...' : 'Search articles by concept, topic, or tag...'}
            className="w-full ps-9 pe-4 py-2 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pt-1 text-xs">
          <span className="text-neutral-400 shrink-0 text-[11px] font-semibold uppercase">{t.category}:</span>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCat(c)}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer text-xs ${
                selectedCat === c
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {c === 'All' ? t.all : c}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((article) => (
          <article
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="p-6 sm:p-7 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors cursor-pointer group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                  {isAr ? article.categoryAr : article.category}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Clock className="w-3 h-3" />
                  <span>{isAr ? article.readTimeAr : article.readTime}</span>
                </span>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white group-hover:text-[#B00018] transition-colors leading-snug">
                  {isAr ? article.titleAr : article.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
                  {isAr ? article.summaryAr : article.summary}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] text-neutral-500 font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between text-xs">
              <span className="text-neutral-400 flex items-center gap-1 font-mono text-[11px]">
                <Calendar className="w-3 h-3" />
                <span>{article.date}</span>
              </span>
              <span className="font-semibold text-[#B00018] flex items-center gap-1 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1">
                <span>{t.readArticle}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </span>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
