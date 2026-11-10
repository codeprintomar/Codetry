/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './data/store.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { ProductModal } from './components/ProductModal.tsx';
import { CaseStudyModal } from './components/CaseStudyModal.tsx';
import { ArticleModal } from './components/ArticleModal.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { BugReportModal } from './components/BugReportModal.tsx';

import { HomePage } from './pages/HomePage.tsx';
import { ProductsPage } from './pages/ProductsPage.tsx';
import { FreeToolsPage } from './pages/FreeToolsPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ProjectsPage } from './pages/ProjectsPage.tsx';
import { InsightsPage } from './pages/InsightsPage.tsx';
import { StorePage } from './pages/StorePage.tsx';
import { AccountPage } from './pages/AccountPage.tsx';
import { AdminPage } from './pages/AdminPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { SupportPage } from './pages/SupportPage.tsx';

const MainContent: React.FC = () => {
  const { currentView } = useApp();

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;
      case 'products':
        return <ProductsPage />;
      case 'tools':
        return <FreeToolsPage />;
      case 'services':
        return <ServicesPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'insights':
        return <InsightsPage />;
      case 'store':
        return <StorePage />;
      case 'account':
        return <AccountPage />;
      case 'admin':
        return <AdminPage />;
      case 'about':
        return <AboutPage />;
      case 'support':
        return <SupportPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#080808] text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      <Navbar />
      <main className="flex-1">
        {renderView()}
      </main>
      <Footer />

      {/* Global Modals & Drawers */}
      <SearchModal />
      <ProductModal />
      <CaseStudyModal />
      <ArticleModal />
      <CartDrawer />
      <QuoteModal />
      <BugReportModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
