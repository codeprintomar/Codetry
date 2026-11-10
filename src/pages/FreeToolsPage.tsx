import React, { useState } from 'react';
import { useApp } from '../data/store.tsx';
import { Search, Github, ExternalLink, Terminal, Copy, Check, ArrowRight, Sparkles, Wrench } from 'lucide-react';

export const FreeToolsPage: React.FC = () => {
  const { products, language, setSelectedProduct, t } = useApp();
  const isAr = language === 'ar';

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Interactive Live Tool State: Code & Text Formatter
  const [inputRaw, setInputRaw] = useState('{"name":"CodePrint","status":"active","tools":12}');
  const [formattedOutput, setFormattedOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const freeTools = products.filter((p) => p.isFreeTool);

  const categories = ['All', 'Productivity', 'Education', 'Finance', 'Developer Tools', 'Music & Productivity', 'Games'];

  const filteredTools = freeTools.filter((tool) => {
    const q = query.toLowerCase().trim();
    const matchesQ =
      !q ||
      tool.name.toLowerCase().includes(q) ||
      tool.nameAr.includes(q) ||
      tool.tagline.toLowerCase().includes(q) ||
      tool.taglineAr.includes(q) ||
      tool.description.toLowerCase().includes(q);

    const matchesCat = activeCategory === 'All' || tool.category === activeCategory;
    return matchesQ && matchesCat;
  });

  const handleFormatJson = () => {
    try {
      const parsed = JSON.parse(inputRaw);
      setFormattedOutput(JSON.stringify(parsed, null, 2));
    } catch (err: any) {
      setFormattedOutput(`Error parsing JSON: ${err.message}`);
    }
  };

  const handleTransformCase = (mode: 'camel' | 'snake' | 'kebab' | 'upper' | 'lower') => {
    let text = inputRaw.trim();
    if (mode === 'upper') setFormattedOutput(text.toUpperCase());
    else if (mode === 'lower') setFormattedOutput(text.toLowerCase());
    else if (mode === 'snake') setFormattedOutput(text.replace(/\s+/g, '_').toLowerCase());
    else if (mode === 'kebab') setFormattedOutput(text.replace(/\s+/g, '-').toLowerCase());
    else if (mode === 'camel') {
      const words = text.split(/[\s_-]+/);
      const res = words
        .map((w, idx) => (idx === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()))
        .join('');
      setFormattedOutput(res);
    }
  };

  const handleCleanLines = () => {
    const lines = inputRaw
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
    setFormattedOutput(Array.from(new Set(lines)).join('\n'));
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(formattedOutput || inputRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B00018]">
          <span>Free Digital Utilities</span>
          <span aria-hidden="true">·</span>
          <span>Zero Subscriptions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
          {t.navFreeTools}
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {isAr
            ? 'مجموعة من الأدوات البرمجية المجانية المصممة للطلاب، المعلمين، والمطورين. أدوات خفيفة تعمل مباشرة بدون إعلانات.'
            : 'A collection of practical, free utilities and open-source applications built for students, educators, and engineers.'}
        </p>
      </div>

      {/* Interactive Live Playground: Code & Text Formatter Engine */}
      <div className="p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0E0E0E] space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#B00018]" />
            <h2 className="text-base font-bold text-neutral-950 dark:text-white">
              {isAr ? 'تجربة حية: منسق الأكواد والنصوص (Code & Text Formatter)' : 'Live Interactive Engine: Code & Text Formatter'}
            </h2>
          </div>
          <span className="text-xs text-neutral-500 font-mono">
            {isAr ? 'يعمل محلياً بالمتصفح' : 'Client-side processing'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
              {isAr ? 'النص أو الكود المدخل' : 'Input Raw Text / JSON'}
            </label>
            <textarea
              rows={5}
              value={inputRaw}
              onChange={(e) => setInputRaw(e.target.value)}
              className="w-full p-3 text-xs font-mono rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                {isAr ? 'النتيجة المنسقة' : 'Formatted Output'}
              </label>
              <button
                onClick={copyOutput}
                className="flex items-center gap-1 text-[11px] text-[#B00018] hover:underline cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? (isAr ? 'تم النسخ' : 'Copied') : (isAr ? 'نسخ' : 'Copy')}</span>
              </button>
            </div>
            <textarea
              rows={5}
              readOnly
              value={formattedOutput || inputRaw}
              placeholder="Output will appear here..."
              className="w-full p-3 text-xs font-mono rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <button
            onClick={handleFormatJson}
            className="px-3 py-1.5 font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors cursor-pointer"
          >
            {isAr ? 'تنسيق JSON' : 'Beautify JSON'}
          </button>
          <button
            onClick={() => handleTransformCase('camel')}
            className="px-3 py-1.5 font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            camelCase
          </button>
          <button
            onClick={() => handleTransformCase('snake')}
            className="px-3 py-1.5 font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            snake_case
          </button>
          <button
            onClick={() => handleTransformCase('kebab')}
            className="px-3 py-1.5 font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            kebab-case
          </button>
          <button
            onClick={handleCleanLines}
            className="px-3 py-1.5 font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {isAr ? 'تنظيف الأسطر المكررة' : 'Deduplicate Lines'}
          </button>
        </div>
      </div>

      {/* Directory Search & Filters */}
      <div className="space-y-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E]">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute top-3 start-3 text-neutral-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={isAr ? 'ابحث في أسماء ووظائف الأدوات المجانية...' : 'Search free tools...'}
              className="w-full ps-9 pe-4 py-2 text-xs rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B00018]"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto text-xs pt-1">
          <span className="text-neutral-400 shrink-0 text-[11px] font-semibold uppercase">{t.category}:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer text-xs ${
                activeCategory === cat
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {cat === 'All' ? t.all : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E0E0E] p-6 flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span className="font-semibold">{tool.category}</span>
                <span className="font-mono text-[11px]">{tool.version}</span>
              </div>

              <div>
                <h3
                  onClick={() => setSelectedProduct(tool)}
                  className="text-lg font-bold text-neutral-950 dark:text-white hover:text-[#B00018] cursor-pointer transition-colors"
                >
                  {isAr ? tool.nameAr : tool.name}
                </h3>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {isAr ? tool.taglineAr : tool.tagline}
                </p>
              </div>

              <div className="pt-2 text-[11px] text-neutral-500 border-t border-neutral-100 dark:border-neutral-800">
                <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                  {isAr ? 'البيئة: ' : 'Platform: '}
                </span>
                <span>{tool.platform}</span>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between text-xs">
              <button
                onClick={() => setSelectedProduct(tool)}
                className="font-semibold text-[#B00018] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{t.viewDetails}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>

              {tool.githubUrl && (
                <a
                  href={tool.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{t.githubRepo}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
