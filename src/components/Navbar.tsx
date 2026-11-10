import React, { useState } from 'react';
import { useApp } from '../data/store.tsx';
import {
  Search,
  ShoppingBag,
  Moon,
  Sun,
  Globe,
  User,
  ShieldAlert,
  Menu,
  X
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    t,
    language,
    setLanguage,
    theme,
    toggleTheme,
    currentView,
    setCurrentView,
    cart,
    setIsCartOpen,
    setIsSearchModalOpen,
    setIsQuoteModalOpen,
    currentUser
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { id: 'products', label: t.navProducts },
    { id: 'tools', label: t.navFreeTools },
    { id: 'services', label: t.navServices },
    { id: 'projects', label: t.navProjects },
    { id: 'insights', label: t.navInsights },
    { id: 'store', label: t.navStore }
  ];

  const handleNavClick = (viewId: string) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-neutral-800/80 bg-white/95 dark:bg-[#080808]/95 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        
        {/* Zone 1: Single text element Brand wordmark */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavClick('home')}
            className="group text-xl font-bold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
            aria-label="CodePrint Home"
          >
            <span className="w-2.5 h-2.5 bg-[#B00018] group-hover:scale-110 transition-transform duration-150 inline-block"></span>
            <span>CodePrint</span>
          </button>
        </div>

        {/* Zone 2: Concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded ${
                  isActive
                    ? 'text-neutral-950 dark:text-white font-semibold'
                    : 'hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B00018]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Essential Controls & Single Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchModalOpen(true)}
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            title={t.searchShortcut}
            aria-label={t.searchShortcut}
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="px-2.5 py-1 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-neutral-300 dark:border-neutral-700/80 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            title="Switch Language / تغيير اللغة"
          >
            <Globe className="w-3.5 h-3.5 text-neutral-500" />
            <span>{t.languageSwitch}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            title={theme === 'dark' ? t.themeLight : t.themeDark}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 relative text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            title={t.cart}
            aria-label={t.cart}
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 text-[10px] font-bold text-white bg-[#B00018] rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Account / Admin Portal */}
          <button
            onClick={() => handleNavClick(currentUser?.role === 'admin' ? 'admin' : 'account')}
            className={`p-2 transition-colors cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
              currentView === 'account' || currentView === 'admin'
                ? 'text-[#B00018] bg-neutral-100 dark:bg-neutral-800'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
            }`}
            title={currentUser?.role === 'admin' ? t.adminDashboard : t.navAccount}
            aria-label="Account"
          >
            {currentUser?.role === 'admin' ? (
              <ShieldAlert className="w-4 h-4 text-amber-500" />
            ) : (
              <User className="w-4 h-4" />
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="hidden sm:inline-flex px-3.5 py-1.5 text-xs font-semibold text-white bg-[#B00018] hover:bg-[#F00020] rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          >
            {t.heroSecondaryCta}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0B0B0B] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-start py-2 px-3 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                currentView === link.id
                  ? 'bg-neutral-100 dark:bg-neutral-800/80 text-neutral-900 dark:text-white font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('about')}
              className="text-start py-1.5 px-3 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
            >
              {t.navAbout}
            </button>
            <button
              onClick={() => handleNavClick('support')}
              className="text-start py-1.5 px-3 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
            >
              {t.navSupport}
            </button>
            <button
              onClick={() => {
                setIsQuoteModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 py-2 px-4 text-xs font-semibold text-center text-white bg-[#B00018] rounded-md"
            >
              {t.heroSecondaryCta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
