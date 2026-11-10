import React from 'react';
import { useApp } from '../data/store.tsx';
import { Github, ExternalLink, MessageCircle, Link as LinkIcon, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, setCurrentView } = useApp();

  const handleLink = (viewId: string) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-[#060606] text-neutral-600 dark:text-neutral-400 text-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#B00018] inline-block"></span>
              <span className="text-lg font-bold tracking-tight text-neutral-950 dark:text-white">CodePrint</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-neutral-500 dark:text-neutral-400">
              {t.footerBio}
            </p>
            <div className="pt-2 text-xs text-neutral-400 dark:text-neutral-500">
              <span>{t.tagline}</span>
              <span className="mx-2">·</span>
              <span>Cairo / Alexandria</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
              {t.footerQuickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLink('products')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                  {t.navProducts}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('tools')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                  {t.navFreeTools}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                  {t.navServices}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('projects')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                  {t.navProjects}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('insights')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                  {t.navInsights}
                </button>
              </li>
            </ul>
          </div>

          {/* Platform & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
              {t.navSupport}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLink('store')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                  {t.navStore}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('about')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('support')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                  {t.supportTitle}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('account')} className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer">
                  {t.navAccount}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('admin')} className="text-neutral-400 hover:text-amber-500 transition-colors cursor-pointer flex items-center gap-1">
                  <span>{t.adminDashboard}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Official Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
              {t.footerOfficialLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://github.com/codeprintomar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{t.officialGitHub}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/codeprintomar/code-print"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{t.officialRepo}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com/channel/0029VbCCNPgufJ0imw5qQ2S"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{t.officialWhatsApp}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/codeprintomar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <LinkIcon className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{t.officialLinktree}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://code-print.wasmer.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#B00018]" />
                  <span>code-print.wasmer.app</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-500">
          <p>© {new Date().getFullYear()} CodePrint. {t.footerLegal}</p>
          <div className="flex items-center gap-3">
            <span>Independent Software Studio</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-[#B00018]" /> for digital utility
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
