import React from 'react';
import { BrandMark } from './BrandMark';
import { NavigationProps } from '../types';

export const Footer: React.FC<NavigationProps> = ({ onNavigate, onOpenModal }) => {
  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_12px_rgba(0,0,0,0.4)] border-t border-white/[0.06]">
      <div className="w-full max-w-7xl mx-auto px-gutter pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl mb-space-xl">
          {/* Column 1: Brand & Status */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="mb-space-sm">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="text-left focus:outline-none cursor-pointer"
              >
                <BrandMark size="sm" showStatus={false} />
              </button>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
              Deterministic organic growth architecture, programmatic SEO deployment, and algorithmic edge optimization for industry-leading enterprises.
            </p>
            <div className="flex items-center gap-space-xs p-space-xs rounded-lg bg-surface-container-low max-w-max">
              <span className="relative flex h-2 w-2 ml-1">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase px-space-xs">
                Network Live • Edge 01
              </span>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="flex flex-col">
            <h4 className="font-label-caps text-label-caps uppercase text-tertiary tracking-wider mb-space-md">
              Solutions
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services', 'tech-cwv')}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Technical SEO
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services', 'programmatic')}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Programmatic Content
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services', 'digital-pr')}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  High-Authority Digital PR
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services', 'semantic-kg')}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  E-Commerce &amp; Entity SEO
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col">
            <h4 className="font-label-caps text-label-caps uppercase text-tertiary tracking-wider mb-space-md">
              Company
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home', 'comparison')}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  About SEOnova
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('case-studies')}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home', 'faq')}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Security &amp; Compliance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal({ type: 'consultation', planName: 'Engineering Careers & Partner Desk' })}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="flex flex-col">
            <h4 className="font-label-caps text-label-caps uppercase text-tertiary tracking-wider mb-space-md">
              Resources
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal({ type: 'schema-generator' })}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Schema Generator
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal({ type: 'cwv-benchmark' })}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Core Web Vitals Benchmark
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services', 'programmatic')}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  SaaS Organic Playbook
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal({ type: 'algo-monitor' })}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Algorithmic Update Monitor
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div className="flex flex-col">
            <h4 className="font-label-caps text-label-caps uppercase text-tertiary tracking-wider mb-space-md">
              Legal
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('free-audit-widget', 'faq')}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services', 'plans')}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('free-audit-widget', 'faq')}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  SOC2 Type II
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services', 'plans')}
                  className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  Service Level Agreement
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Utility Bar */}
        <div className="pt-space-lg border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
            <span>© 2025 SEOnova.bond Inc. All rights reserved. Data-driven search engineering.</span>
            <div className="inline-flex items-center gap-space-xs px-2 py-0.5 rounded-full bg-surface-container text-tertiary font-label-caps text-label-caps uppercase">
              <span className="material-symbols-outlined text-[14px]">verified</span> Schema.org Verified
            </div>
          </div>
          <div className="flex items-center gap-space-md text-on-surface-variant">
            <button
              type="button"
              onClick={() => onOpenModal({ type: 'schema-generator' })}
              title="JSON-LD Schema Utility"
              className="p-space-xs hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">tag</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('free-audit-widget')}
              title="Diagnostic Terminal"
              className="p-space-xs hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">terminal</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenModal({ type: 'client-portal' })}
              title="Entity Graph Node"
              className="p-space-xs hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">hub</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenModal({ type: 'algo-monitor' })}
              title="Algorithmic Telemetry Feed"
              className="p-space-xs hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">rss_feed</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
