import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../data/store.tsx';
import { Search, X, ArrowRight, Package, Wrench, Briefcase, FileText, Globe } from 'lucide-react';
import { SERVICES_DATA } from '../data/services.ts';
import { PROJECTS_DATA } from '../data/projects.ts';
import { ARTICLES_DATA } from '../data/articles.ts';

export const SearchModal: React.FC = () => {
  const {
    isSearchModalOpen,
    setIsSearchModalOpen,
    products,
    language,
    setCurrentView,
    setSelectedProduct,
    setSelectedProject,
    setSelectedArticle,
    t
  } = useApp();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
      if (e.key === 'Escape' && isSearchModalOpen) {
        setIsSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchModalOpen, setIsSearchModalOpen]);

  useEffect(() => {
    if (isSearchModalOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchModalOpen]);

  if (!isSearchModalOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.nameAr.includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.taglineAr.includes(q) ||
      p.category.toLowerCase().includes(q)
  );

  const matchedServices = SERVICES_DATA.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.titleAr.includes(q) ||
      s.shortDesc.toLowerCase().includes(q) ||
      s.shortDescAr.includes(q)
  );

  const matchedProjects = PROJECTS_DATA.filter(
    (pj) =>
      pj.title.toLowerCase().includes(q) ||
      pj.titleAr.includes(q) ||
      pj.subtitle.toLowerCase().includes(q) ||
      pj.category.toLowerCase().includes(q)
  );

  const matchedArticles = ARTICLES_DATA.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.titleAr.includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
  );

  const totalResults =
    (q ? matchedProducts.length : 0) +
    (q ? matchedServices.length : 0) +
    (q ? matchedProjects.length : 0) +
    (q ? matchedArticles.length : 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xs">
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-200 dark:border-neutral-800 gap-3">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-transparent text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchModalOpen(false)}
            className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 rounded hover:text-neutral-900 dark:hover:text-white cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-6">
          {!query && (
            <div className="py-8 text-center text-xs text-neutral-400 space-y-2">
              <p>Type keywords to search CodePrint products, free tools, services, and articles.</p>
              <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-neutral-500">
                <span className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded">Flosy</span>
                <span className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded">GradeOS</span>
                <span className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded">EasyTrade</span>
                <span className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded">Bara El-Salfa</span>
              </div>
            </div>
          )}

          {query && totalResults === 0 && (
            <div className="py-8 text-center text-xs text-neutral-400">
              No matching results found for &ldquo;{query}&rdquo;.
            </div>
          )}

          {/* Matched Products */}
          {matchedProducts.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 px-2 pb-1.5 flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5" />
                <span>{t.navProducts} &amp; {t.navFreeTools}</span>
              </div>
              <div className="space-y-1">
                {matchedProducts.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => {
                      setSelectedProduct(prod);
                      setIsSearchModalOpen(false);
                    }}
                    className="w-full text-start p-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors flex items-center justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
                        <span>{language === 'ar' ? prod.nameAr : prod.name}</span>
                        <span className="text-[11px] font-normal text-neutral-400">· {prod.category}</span>
                      </div>
                      <p className="text-xs text-neutral-500 line-clamp-1">
                        {language === 'ar' ? prod.taglineAr : prod.tagline}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#B00018] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Projects */}
          {matchedProjects.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 px-2 pb-1.5 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{t.navProjects}</span>
              </div>
              <div className="space-y-1">
                {matchedProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      setSelectedProject(proj);
                      setIsSearchModalOpen(false);
                    }}
                    className="w-full text-start p-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors flex items-center justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                        {language === 'ar' ? proj.titleAr : proj.title}
                      </div>
                      <p className="text-xs text-neutral-500 line-clamp-1">
                        {language === 'ar' ? proj.subtitleAr : proj.subtitle}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#B00018] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Articles */}
          {matchedArticles.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 px-2 pb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>{t.navInsights}</span>
              </div>
              <div className="space-y-1">
                {matchedArticles.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      setSelectedArticle(art);
                      setIsSearchModalOpen(false);
                    }}
                    className="w-full text-start p-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors flex items-center justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                        {language === 'ar' ? art.titleAr : art.title}
                      </div>
                      <p className="text-xs text-neutral-500 line-clamp-1">
                        {language === 'ar' ? art.summaryAr : art.summary}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#B00018] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Services */}
          {matchedServices.length > 0 && (
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 px-2 pb-1.5 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>{t.navServices}</span>
              </div>
              <div className="space-y-1">
                {matchedServices.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => {
                      setCurrentView('services');
                      setIsSearchModalOpen(false);
                    }}
                    className="w-full text-start p-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-colors flex items-center justify-between cursor-pointer group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                        {language === 'ar' ? srv.titleAr : srv.title}
                      </div>
                      <p className="text-xs text-neutral-500 line-clamp-1">
                        {language === 'ar' ? srv.shortDescAr : srv.shortDesc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#B00018] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
