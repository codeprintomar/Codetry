import React, { useState } from 'react';
import { useApp } from '../data/store.tsx';
import { Search, ExternalLink, Github, ShoppingBag, ArrowRight } from 'lucide-react';
import { ProductItem } from '../data/types.ts';

export const ProductsPage: React.FC = () => {
  const { products, language, setSelectedProduct, addToCart, t } = useApp();
  const isAr = language === 'ar';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const categories = ['All', 'Finance', 'Education', 'Personal Organization', 'Productivity', 'Music & Productivity', 'Developer Tools'];

  const filtered = products.filter((p) => {
    const q = searchQuery.toLowerCase().trim();
    const matchQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.nameAr.includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.taglineAr.includes(q);

    const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;

    let matchStatus = true;
    if (selectedStatus === 'Free') matchStatus = p.pricing === 'free';
    if (selectedStatus === 'Paid') matchStatus = p.isPaidProduct;
    if (selectedStatus === 'Available') matchStatus = p.status === 'Available';
    if (selectedStatus === 'In Development') matchStatus = p.status === 'In Development';

    return matchQuery && matchCategory && matchStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Page Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B00018]">
          <span>Software Catalog</span>
          <span aria-hidden="true">·</span>
          <span>Independent Releases</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
          {t.navProducts}
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {isAr
            ? 'تطبيقات برمجية عملية مصممة لحل مشكلات واقعية. استكشف برامج الإنتاجية، التعليم، والأنظمة المالية.'
            : 'Software applications crafted to turn complex daily routines into simple, focused experiences.'}
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="space-y-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E]">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute top-3 start-3 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث في أسماء ومزايا المنتجات...' : 'Search product title, problem, or feature...'}
              className="w-full ps-9 pe-4 py-2 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
            />
          </div>

          {/* Status selector tabs */}
          <div className="flex items-center gap-1 overflow-x-auto p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg text-xs shrink-0">
            {['All', 'Free', 'Paid', 'Available', 'In Development'].map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedStatus === st
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {st === 'All'
                  ? t.all
                  : st === 'Free'
                  ? t.free
                  : st === 'Paid'
                  ? t.paid
                  : st === 'Available'
                  ? t.statusAvailable
                  : t.statusInDev}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pt-1 text-xs">
          <span className="text-neutral-400 shrink-0 text-[11px] font-semibold uppercase">{t.category}:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer text-xs ${
                selectedCategory === cat
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {cat === 'All' ? t.all : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((prod) => (
          <div
            key={prod.id}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] overflow-hidden flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
          >
            <div>
              {/* Product Preview Image */}
              <div
                onClick={() => setSelectedProduct(prod)}
                className="relative aspect-video bg-neutral-900 cursor-pointer overflow-hidden border-b border-neutral-100 dark:border-neutral-800 group"
              >
                <img
                  src={prod.image}
                  alt={isAr ? prod.nameAr : prod.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                
                {/* Quiet metadata line */}
                <div className="absolute top-2.5 inset-x-3 flex items-center justify-between text-xs text-white">
                  <span className="font-medium text-[11px]">{prod.category}</span>
                  <span className="font-mono text-[11px] drop-shadow">{isAr ? prod.priceLabelAr : prod.priceLabel}</span>
                </div>
              </div>

              {/* Information */}
              <div className="p-5 space-y-2.5">
                <div className="flex items-baseline justify-between">
                  <h3
                    onClick={() => setSelectedProduct(prod)}
                    className="text-lg font-bold text-neutral-950 dark:text-white cursor-pointer hover:text-[#B00018] transition-colors"
                  >
                    {isAr ? prod.nameAr : prod.name}
                  </h3>
                  <span className="text-[11px] font-mono text-neutral-400">{prod.version}</span>
                </div>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                  {isAr ? prod.taglineAr : prod.tagline}
                </p>

                {/* Problem it solves brief */}
                <div className="pt-2 text-[11px] text-neutral-500 border-t border-neutral-100 dark:border-neutral-800/80">
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                    {t.problemSolved}:{' '}
                  </span>
                  <span className="line-clamp-2">
                    {isAr ? prod.problemSolvedAr : prod.problemSolved}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-5 pt-0 border-t border-neutral-100 dark:border-neutral-900 mt-2 flex items-center justify-between text-xs">
              <button
                onClick={() => setSelectedProduct(prod)}
                className="font-semibold text-[#B00018] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{t.viewDetails}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>

              <div className="flex items-center gap-2">
                {prod.githubUrl && (
                  <a
                    href={prod.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
                    title={t.githubRepo}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {prod.isPaidProduct && (
                  <button
                    onClick={() => addToCart(prod)}
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>{isAr ? 'شراء / حجز' : 'Store'}</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-xs text-neutral-400">
          No products matched your active filters.
        </div>
      )}

    </div>
  );
};
