/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, ModalType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { FreeAuditWidgetPage } from './pages/FreeAuditWidgetPage';
import { InteractiveModals } from './components/InteractiveModals';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleNavigate = (page: PageId, anchor?: string) => {
    setCurrentPage(page);
    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'SEOnova.bond — Elite Technical SEO & Organic Growth Engineering',
      services: 'SEOnova.bond — Full-Stack SEO Services & Capabilities',
      'case-studies': 'SEOnova.bond — Proven Organic Growth & Revenue Attribution',
      'free-audit-widget': 'SEOnova.bond — Technical SEO Diagnostic & Revenue Leakage Calculator',
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 selection:text-primary overflow-x-hidden flex flex-col">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenModal={setActiveModal}
      />

      <div className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onOpenModal={setActiveModal}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onOpenModal={setActiveModal}
          />
        )}
        {currentPage === 'case-studies' && (
          <CaseStudiesPage
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onOpenModal={setActiveModal}
          />
        )}
        {currentPage === 'free-audit-widget' && (
          <FreeAuditWidgetPage
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onOpenModal={setActiveModal}
          />
        )}
      </div>

      <Footer
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenModal={setActiveModal}
      />

      <InteractiveModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      />

      {/* Floating Screen Switcher Dock for instant preview across all 4 screens */}
      <div className="fixed bottom-4 right-4 z-40 hidden sm:flex items-center gap-1 p-1.5 rounded-xl bg-surface-container-lowest/90 backdrop-blur-xl border border-outline-variant/40 shadow-[0_12px_36px_rgba(0,0,0,0.75)]">
        <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider px-2.5">
          Screens:
        </span>
        {(
          [
            { id: 'home', label: '1. Home' },
            { id: 'services', label: '2. Services' },
            { id: 'case-studies', label: '3. Case Studies' },
            { id: 'free-audit-widget', label: '4. Audit Widget' },
          ] as const
        ).map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigate(item.id)}
            className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all cursor-pointer ${
              currentPage === item.id
                ? 'bg-primary text-on-primary font-bold shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
