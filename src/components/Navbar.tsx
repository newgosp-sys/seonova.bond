import React, { useState } from 'react';
import { BrandMark } from './BrandMark';
import { NavigationProps } from '../types';

export const Navbar: React.FC<NavigationProps> = ({
  currentPage,
  onNavigate,
  onOpenModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent,
    page: 'home' | 'services' | 'case-studies' | 'free-audit-widget',
    anchor?: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(page, anchor);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.3)] border-b border-white/[0.06]">
      <div className="h-20 w-full px-gutter max-w-7xl mx-auto flex items-center justify-between gap-space-md">
        {/* Left: Brand Lockup */}
        <div className="flex items-center gap-space-lg">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center group focus:outline-none"
          >
            <BrandMark size="md" showStatus={true} />
          </a>
        </div>

        {/* Center: Primary Navigation Links */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className={`font-body-md text-body-md transition-colors whitespace-nowrap ${
              currentPage === 'services'
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Services
          </a>
          <a
            href="#comparison"
            onClick={(e) => handleNavClick(e, 'home', 'comparison')}
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap"
          >
            Comparison
          </a>
          <a
            href="#case-studies"
            onClick={(e) => handleNavClick(e, 'case-studies')}
            className={`font-body-md text-body-md transition-colors whitespace-nowrap ${
              currentPage === 'case-studies'
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Case Studies
          </a>
          <a
            href="#process"
            onClick={(e) => handleNavClick(e, 'home', 'process')}
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap"
          >
            Process
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, 'services', 'plans')}
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap"
          >
            Pricing
          </a>
          <a
            href="#free-audit-widget"
            onClick={(e) => handleNavClick(e, 'free-audit-widget')}
            className={`font-body-md text-body-md transition-colors whitespace-nowrap ${
              currentPage === 'free-audit-widget'
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Free Audit Widget
          </a>
          <a
            href="#faq"
            onClick={(e) =>
              handleNavClick(
                e,
                currentPage === 'free-audit-widget' ? 'free-audit-widget' : 'home',
                'faq'
              )
            }
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap"
          >
            FAQ
          </a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-space-md">
          <button
            type="button"
            onClick={() => onOpenModal({ type: 'client-portal' })}
            className="hidden sm:inline-flex items-center justify-center h-10 px-space-md rounded-lg bg-surface-container/60 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm font-semibold transition-all backdrop-blur-md shadow-[0_1px_4px_rgba(0,0,0,0.2)] whitespace-nowrap cursor-pointer"
          >
            Client Portal
          </button>
          <a
            href="#free-audit-widget"
            onClick={(e) => handleNavClick(e, 'free-audit-widget')}
            className="inline-flex items-center justify-center h-10 px-space-md rounded-lg bg-gradient-to-r from-primary-container via-secondary-container to-secondary text-white font-body-sm text-body-sm font-semibold hover:shadow-[0_0_24px_rgba(77,142,255,0.45)] transition-all whitespace-nowrap"
          >
            Claim Free Audit
          </a>
          <button
            type="button"
            onClick={() => onOpenModal({ type: 'client-portal' })}
            title="Executive Client Portal"
            className="w-8 h-8 rounded-full bg-primary hover:bg-primary-fixed transition-colors flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface cursor-pointer"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-low border-t border-white/[0.08] px-gutter py-space-md space-y-2 shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className={`px-3 py-2 rounded-lg font-body-md text-body-md ${
                currentPage === 'home'
                  ? 'bg-surface-container-high text-primary font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              Home Overview
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className={`px-3 py-2 rounded-lg font-body-md text-body-md ${
                currentPage === 'services'
                  ? 'bg-surface-container-high text-primary font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              Services
            </a>
            <a
              href="#case-studies"
              onClick={(e) => handleNavClick(e, 'case-studies')}
              className={`px-3 py-2 rounded-lg font-body-md text-body-md ${
                currentPage === 'case-studies'
                  ? 'bg-surface-container-high text-primary font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              Case Studies
            </a>
            <a
              href="#free-audit-widget"
              onClick={(e) => handleNavClick(e, 'free-audit-widget')}
              className={`px-3 py-2 rounded-lg font-body-md text-body-md ${
                currentPage === 'free-audit-widget'
                  ? 'bg-surface-container-high text-primary font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              Free Audit Widget
            </a>
            <a
              href="#comparison"
              onClick={(e) => handleNavClick(e, 'home', 'comparison')}
              className="px-3 py-2 rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container"
            >
              Comparison
            </a>
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, 'home', 'process')}
              className="px-3 py-2 rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container"
            >
              4-Step Process
            </a>
            <a
              href="#plans"
              onClick={(e) => handleNavClick(e, 'services', 'plans')}
              className="px-3 py-2 rounded-lg font-body-md text-body-md text-on-surface-variant hover:bg-surface-container"
            >
              Pricing & Plans
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal({ type: 'client-portal' });
              }}
              className="text-left px-3 py-2 rounded-lg font-body-md text-body-md text-tertiary hover:bg-surface-container"
            >
              Client Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
