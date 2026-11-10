import React, { useState } from 'react';
import { useApp } from '../data/store.tsx';
import { ShoppingBag, Search, ShieldCheck, ArrowRight, Lock, CheckCircle2, Download, ExternalLink } from 'lucide-react';

export const StorePage: React.FC = () => {
  const { products, language, addToCart, setSelectedProduct, setCurrentView, t } = useApp();
  const isAr = language === 'ar';

  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'All' | 'Paid' | 'Free'>('All');

  const storeProducts = products.filter((p) => p.inStore);

  const filtered = storeProducts.filter((p) => {
    const q = query.toLowerCase().trim();
    const matchesQ =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.nameAr.includes(q) ||
      p.tagline.toLowerCase().includes(q);

    let matchesType = true;
    if (filterType === 'Paid') matchesType = p.isPaidProduct;
    if (filterType === 'Free') matchesType = p.pricing === 'free';

    return matchesQ && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B00018]">
          <span>Digital Distribution</span>
          <span aria-hidden="true">·</span>
          <span>Licenses &amp; Packages</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
          {t.navStore}
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {isAr
            ? 'متجر البرمجيات والتراخيص الرسمية من كود برنت. احجز تراخيص التطبيقات المدفوعة أو حمّل الإصدارات المفتوحة مع التحقق اليدوي الموثق.'
            : 'Official digital store for CodePrint software licenses, commercial distribution packages, and student workspaces.'}
        </p>
      </div>

      {/* Trust & Manual Verification Strip */}
      <div className="p-4 sm:p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0D0D0D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-semibold text-neutral-950 dark:text-white">
              {isAr ? 'نظام التحقق المالي اليدوي الموثق' : 'Transparent Manual Payment Verification'}
            </div>
            <div className="text-[11px] text-neutral-500">
              {isAr
                ? 'يتم إصدار التراخيص وتفعيل روابط التنزيل فور تأكيد الحوالات عبر إنستاباي أو الحسابات البنكية.'
                : 'Orders enter Under Review immediately. License keys unlock after manual transaction confirmation.'}
            </div>
          </div>
        </div>

        <button
          onClick={() => setCurrentView('account')}
          className="text-xs font-semibold text-[#B00018] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
        >
          <span>{isAr ? 'تتبع طلباتك وتنزيلاتك' : 'Track Orders & Downloads'}</span>
          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E]">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute top-3 start-3 text-neutral-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isAr ? 'ابحث في المتجر...' : 'Search store products...'}
            className="w-full ps-9 pe-4 py-2 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
          />
        </div>

        <div className="flex items-center gap-1 self-start sm:self-auto bg-neutral-100 dark:bg-neutral-900 p-1 rounded-lg text-xs">
          {(['All', 'Paid', 'Free'] as const).map((typ) => (
            <button
              key={typ}
              onClick={() => setFilterType(typ)}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                filterType === typ
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-xs font-semibold'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {typ === 'All' ? t.all : typ === 'Paid' ? t.paid : t.free}
            </button>
          ))}
        </div>
      </div>

      {/* Store Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((prod) => (
          <div
            key={prod.id}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] overflow-hidden flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
          >
            <div>
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
                <div className="absolute top-2.5 inset-x-3 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold text-[11px]">{prod.category}</span>
                  <span className="font-mono text-[11px] drop-shadow">
                    {isAr ? prod.priceLabelAr : prod.priceLabel}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-baseline justify-between">
                  <h3
                    onClick={() => setSelectedProduct(prod)}
                    className="text-lg font-bold text-neutral-950 dark:text-white hover:text-[#B00018] cursor-pointer transition-colors"
                  >
                    {isAr ? prod.nameAr : prod.name}
                  </h3>
                  <span className="text-[11px] font-mono text-neutral-400">{prod.version}</span>
                </div>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                  {isAr ? prod.taglineAr : prod.tagline}
                </p>

                {/* Features list */}
                <div className="space-y-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                  {(isAr ? prod.featuresAr.slice(0, 3) : prod.features.slice(0, 3)).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-600 dark:text-neutral-300">
                      <CheckCircle2 className="w-3 h-3 text-[#B00018] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-5 pt-0 border-t border-neutral-100 dark:border-neutral-900 mt-3 flex items-center justify-between text-xs">
              <button
                onClick={() => setSelectedProduct(prod)}
                className="font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white cursor-pointer"
              >
                {t.viewDetails}
              </button>

              {prod.isPaidProduct ? (
                <button
                  onClick={() => addToCart(prod)}
                  className="px-3.5 py-1.5 font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{t.addToCart}</span>
                </button>
              ) : (
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="px-3 py-1.5 font-semibold text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  <span>{isAr ? 'وصول مجاني' : 'Access Free'}</span>
                </button>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
