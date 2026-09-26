import React, { useState } from 'react';
import { NavigationProps } from '../types';

type FilterCategory = 'all' | 'saas-fintech' | 'ecommerce' | 'devtools' | 'health';

export const CaseStudiesPage: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const isVisible = (cat: FilterCategory) => activeFilter === 'all' || activeFilter === cat;

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* Atmospheric Glow Mesh Background Layers */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-primary-container/15 via-tertiary-container/10 to-transparent blur-[140px] rounded-full"></div>
        <div className="pointer-events-none absolute top-96 -left-32 w-[600px] h-[600px] bg-secondary-container/10 blur-[160px] rounded-full"></div>
        <div className="pointer-events-none absolute top-[1600px] -right-32 w-[700px] h-[700px] bg-tertiary/10 blur-[180px] rounded-full"></div>

        {/* Section 1: Header & Aggregate Impact Hero */}
        <section className="relative w-full max-w-7xl mx-auto px-gutter pt-space-xl pb-space-lg">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-space-xl">
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-space-xs px-3.5 py-1 rounded-full bg-surface-container/80 shadow-sm backdrop-blur-md mb-space-md">
              <span className="flex h-2 w-2 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-label-caps text-label-caps uppercase text-tertiary tracking-wider font-semibold">
                VALIDATED PERFORMANCE DATA • ED-2025
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero tracking-tight text-on-surface mb-space-md">
              Empirical Case Studies &amp;{' '}
              <span className="bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent">
                Revenue Attribution
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Explore how top SaaS, FinTech, DevTools, and enterprise brands achieved compounding ARR, zero-ad-spend customer acquisition, and 10x organic pipeline scale.
            </p>
            {/* Proof Assurance Ribbon */}
            <div className="flex flex-wrap items-center justify-center gap-space-md mt-space-md text-on-surface-variant">
              <div className="flex items-center gap-space-xs font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  verified
                </span>
                <span>Audited GA4 &amp; HubSpot Sync</span>
              </div>
              <span className="text-outline-variant">•</span>
              <div className="flex items-center gap-space-xs font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  security
                </span>
                <span>Deterministic Organic Attribution</span>
              </div>
              <span className="text-outline-variant">•</span>
              <div className="flex items-center gap-space-xs font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  commit
                </span>
                <span>Direct PR Deployment</span>
              </div>
            </div>
          </div>

          {/* Aggregate Impact Banner (4 Stat Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Card 1 */}
            <div className="group relative p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Net Attributed Value
                </span>
                <span className="p-1.5 rounded-lg bg-surface-container-highest text-tertiary material-symbols-outlined text-[20px]">
                  payments
                </span>
              </div>
              <div>
                <div className="font-display-hero text-headline-lg font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
                  $42.8M
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Directly attributed organic ARR across active partner cohorts
                </div>
              </div>
              <div className="mt-space-md pt-space-xs flex items-center justify-between text-tertiary font-metric-mono-sm text-metric-mono-sm">
                <span>AUDITED ARR</span>
                <span>+38.4% YoY</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Search Volume Lift
                </span>
                <span className="p-1.5 rounded-lg bg-surface-container-highest text-primary material-symbols-outlined text-[20px]">
                  trending_up
                </span>
              </div>
              <div>
                <div className="font-display-hero text-headline-lg font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
                  +410%
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Average verified organic traffic increase within 6-12 months
                </div>
              </div>
              <div className="mt-space-md pt-space-xs flex items-center justify-between text-primary font-metric-mono-sm text-metric-mono-sm">
                <span>QUALIFIED INTENT</span>
                <span>NON-BRAND</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Dominant SERP Footprint
                </span>
                <span className="p-1.5 rounded-lg bg-surface-container-highest text-secondary material-symbols-outlined text-[20px]">
                  military_tech
                </span>
              </div>
              <div>
                <div className="font-display-hero text-headline-lg font-bold text-on-surface tracking-tight group-hover:text-secondary transition-colors">
                  180,000+
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  High-difficulty commercial intent keywords locked in Pos 1-3
                </div>
              </div>
              <div className="mt-space-md pt-space-xs flex items-center justify-between text-secondary font-metric-mono-sm text-metric-mono-sm">
                <span>POS 1-3 CLUSTERS</span>
                <span>ZERO SNIPPET LOSS</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  Client Loyalty
                </span>
                <span className="p-1.5 rounded-lg bg-surface-container-highest text-tertiary-fixed-dim material-symbols-outlined text-[20px]">
                  handshake
                </span>
              </div>
              <div>
                <div className="font-display-hero text-headline-lg font-bold text-on-surface tracking-tight group-hover:text-tertiary transition-colors">
                  100%
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Quarterly retainer renewal for engineering-driven partnerships
                </div>
              </div>
              <div className="mt-space-md pt-space-xs flex items-center justify-between text-tertiary font-metric-mono-sm text-metric-mono-sm">
                <span>CHURN RATE 0.0%</span>
                <span>LTV &gt; 28 MOS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Filter & Category Selector Tabs */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-md">
          <div className="p-space-xs bg-surface-container-low/90 backdrop-blur-lg rounded-xl shadow-inner flex flex-wrap items-center justify-between gap-space-sm">
            <div className="flex flex-wrap items-center gap-space-xs">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg font-label-caps text-label-caps uppercase transition-all flex items-center gap-2 cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-primary-container text-white shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">grid_view</span>
                All Engagements (14)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('saas-fintech')}
                className={`px-4 py-2 rounded-lg font-label-caps text-label-caps uppercase transition-all flex items-center gap-2 cursor-pointer ${
                  activeFilter === 'saas-fintech'
                    ? 'bg-primary-container text-white shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">finance</span>
                B2B SaaS &amp; FinTech
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('ecommerce')}
                className={`px-4 py-2 rounded-lg font-label-caps text-label-caps uppercase transition-all flex items-center gap-2 cursor-pointer ${
                  activeFilter === 'ecommerce'
                    ? 'bg-primary-container text-white shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                Enterprise E-Commerce
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('devtools')}
                className={`px-4 py-2 rounded-lg font-label-caps text-label-caps uppercase transition-all flex items-center gap-2 cursor-pointer ${
                  activeFilter === 'devtools'
                    ? 'bg-primary-container text-white shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                Developer Tools &amp; Infra
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('health')}
                className={`px-4 py-2 rounded-lg font-label-caps text-label-caps uppercase transition-all flex items-center gap-2 cursor-pointer ${
                  activeFilter === 'health'
                    ? 'bg-primary-container text-white shadow-sm font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">clinical_notes</span>
                Healthcare &amp; Marketplaces
              </button>
            </div>
            <div className="hidden lg:flex items-center gap-space-sm px-space-md text-on-surface-variant font-metric-mono-sm text-metric-mono-sm">
              <span className="flex h-2 w-2 rounded-full bg-tertiary"></span>
              <span>LIVE TELEMETRY SYNCED: GA4 / AHREFS / SEARCH CONSOLE</span>
            </div>
          </div>
        </section>

        {/* Section 3: Deep-Dive Case Study 1 (Flagship: FinFlow B2B FinTech) */}
        {isVisible('saas-fintech') && (
          <section className="w-full max-w-7xl mx-auto px-gutter py-space-lg">
            <div className="relative rounded-2xl bg-surface-container/70 backdrop-blur-xl p-space-lg lg:p-space-xl shadow-xl overflow-hidden">
              {/* Accent Glow Accent Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-container via-tertiary to-secondary-container"></div>
              {/* Header row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
                <div className="flex flex-wrap items-center gap-space-sm">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps uppercase font-semibold">
                    Flagship Engagement
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
                    YC W21 Cohort
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
                    FinTech B2B
                  </span>
                </div>
                <div className="flex items-center gap-space-sm font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    speed
                  </span>
                  <span>9 Months Duration • LCP 0.82s Achieved</span>
                </div>
              </div>
              {/* Main Title & Intro Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="font-headline-md text-headline-md text-tertiary mb-space-xs font-semibold">
                      FinFlow (Series B Embedded Banking)
                    </div>
                    <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mb-space-md">
                      Scaling B2B FinTech Organic ARR from $1.2M to $4.5M in 9 Months
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                      FinFlow provides treasury and core ledger APIs for neobanks. Despite product superiority, their digital footprint was bottlenecked by unrenderable single-page app architecture, zero programmatic surface coverage, and debilitating keyword cannibalization.
                    </p>
                  </div>
                  {/* Architecture Breakdown Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="p-space-md rounded-lg bg-surface-container-low shadow-sm">
                      <div className="flex items-center gap-space-xs text-error mb-1">
                        <span className="material-symbols-outlined text-[18px]">warning</span>
                        <span className="font-label-caps text-label-caps uppercase font-bold">
                          The Technical Obstacles
                        </span>
                      </div>
                      <ul className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
                        <li>• 38,000 parameter URL duplicate index bloat</li>
                        <li>• LCP at 4.4s due to heavy hydration overhead</li>
                        <li>• Complete absence of automated JSON-LD graphs</li>
                      </ul>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low shadow-sm">
                      <div className="flex items-center gap-space-xs text-tertiary mb-1">
                        <span className="material-symbols-outlined text-[18px]">terminal</span>
                        <span className="font-label-caps text-label-caps uppercase font-bold">
                          Engineered Solution
                        </span>
                      </div>
                      <ul className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
                        <li>• Next.js ISR edge directories on Cloudflare Workers</li>
                        <li>• 140 programmatic compliance comparison hubs</li>
                        <li>• Dynamic FinancialService semantic entity schemas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Interactive Results & Visual Metric Telemetry */}
                <div className="lg:col-span-5 flex flex-col justify-between p-space-lg rounded-xl bg-surface-container-lowest/80 backdrop-blur-md shadow-lg">
                  <div>
                    <div className="flex items-center justify-between mb-space-md pb-space-sm">
                      <div>
                        <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block">
                          Audited Revenue Vector
                        </span>
                        <span className="font-headline-md text-headline-md font-bold text-tertiary">
                          +$3.3M ARR LIFT
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-metric-mono-sm text-metric-mono-sm text-primary">
                          +275% Delta
                        </span>
                        <span className="block font-label-caps text-label-caps text-on-surface-variant">
                          Attributed CRM Closed
                        </span>
                      </div>
                    </div>

                    {/* Inline SVG Growth Curve Sparkline Chart */}
                    <div className="relative w-full h-44 mb-space-md">
                      <svg
                        className="w-full h-full overflow-visible"
                        preserveAspectRatio="none"
                        viewBox="0 0 400 160"
                      >
                        <defs>
                          <linearGradient id="finflow-grad" x1="0%" x2="0%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#4cd7f6" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#4cd7f6" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="finflow-line" x1="0%" x2="100%" y1="0%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#4cd7f6" />
                            <stop offset="100%" stopColor="#adc6ff" />
                          </linearGradient>
                        </defs>
                        {/* Grid Guides */}
                        <line
                          stroke="#424754"
                          strokeDasharray="3 3"
                          strokeOpacity="0.25"
                          x1="0"
                          x2="400"
                          y1="40"
                          y2="40"
                        />
                        <line
                          stroke="#424754"
                          strokeDasharray="3 3"
                          strokeOpacity="0.25"
                          x1="0"
                          x2="400"
                          y1="80"
                          y2="80"
                        />
                        <line
                          stroke="#424754"
                          strokeDasharray="3 3"
                          strokeOpacity="0.25"
                          x1="0"
                          x2="400"
                          y1="120"
                          y2="120"
                        />
                        {/* Area */}
                        <path
                          d="M 0 145 C 50 142, 90 135, 130 115 C 180 90, 240 70, 290 35 C 340 10, 380 5, 400 2 L 400 160 L 0 160 Z"
                          fill="url(#finflow-grad)"
                        />
                        {/* Stroke Line */}
                        <path
                          d="M 0 145 C 50 142, 90 135, 130 115 C 180 90, 240 70, 290 35 C 340 10, 380 5, 400 2"
                          fill="none"
                          stroke="url(#finflow-line)"
                          strokeLinecap="round"
                          strokeWidth="3.5"
                        />
                        {/* Pulse Dots */}
                        <circle
                          className="animate-ping"
                          cx="130"
                          cy="115"
                          fill="#3b82f6"
                          opacity="0.7"
                          r="4"
                        />
                        <circle cx="130" cy="115" fill="#3b82f6" r="4" />
                        <circle cx="290" cy="35" fill="#4cd7f6" r="4" />
                        <circle cx="400" cy="2" fill="#acedff" r="5" />
                      </svg>
                      <div className="flex justify-between items-center text-on-surface-variant font-label-caps text-label-caps pt-2">
                        <span>M1: $1.2M Run-Rate</span>
                        <span>M5: Direct Pruning</span>
                        <span>M9: $4.5M Attributed</span>
                      </div>
                    </div>

                    {/* Metric Pills */}
                    <div className="grid grid-cols-2 gap-space-sm mb-space-md">
                      <div className="p-space-sm rounded-lg bg-surface-container flex flex-col">
                        <span className="font-label-caps text-label-caps text-on-surface-variant">
                          Primary SERP Pos 1
                        </span>
                        <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-on-surface">
                          &quot;treasury api&quot;
                        </span>
                        <span className="text-tertiary font-body-sm text-body-sm font-medium">
                          Overthrew Stripe &amp; Modern Tre.
                        </span>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container flex flex-col">
                        <span className="font-label-caps text-label-caps text-on-surface-variant">
                          Pipeline Inbound
                        </span>
                        <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-on-surface">
                          +418%
                        </span>
                        <span className="text-tertiary font-body-sm text-body-sm font-medium">
                          Enterprise demo requests
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Executive Quote Block */}
                  <div className="p-space-md rounded-xl bg-surface-container/70 shadow-sm">
                    <div className="flex items-center gap-space-sm mb-space-xs">
                      <img
                        className="w-10 h-10 rounded-full object-cover shadow-sm"
                        referrerPolicy="no-referrer"
                        alt="Marcus Vance VP Growth"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP4ffTWX9IigoPdqiBCGnmGvGDXeSsqK79s2lLpUkHb4XDkwis-SUb5RFjr-DF--fmbwoVZX6wsMG1Ltx9IB2B0MyXHh4R2wUmyQqro480KPCRAYoU1S9A-l2OLcSUSXSERGOYPdPOMi-DtHvBgxpnMXXW_PtnVeEiidJpcCtpeRK6286O9s_NRGSxeB6ewO3OLYizfe_5OFdBMKrNcOE2wXoHs6MsEavZ7M_r3BjEzco78rRBWDs35Q"
                      />
                      <div>
                        <div className="font-headline-md text-body-md font-bold text-on-surface">
                          Marcus Vance
                        </div>
                        <div className="font-label-caps text-label-caps text-on-surface-variant">
                          VP Growth, FinFlow • ex-Brex
                        </div>
                      </div>
                      <span className="ml-auto p-1 rounded bg-secondary-container/40 text-secondary font-label-caps text-label-caps px-2 py-0.5">
                        LinkedIn Audited
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-normal">
                      &quot;SEOnova didn&apos;t hand us 80-page fluff audits. They opened pull requests on our Next.js codebase, resolved our hydration lags, and made organic our #1 customer acquisition channel in two quarters.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 4: Deep-Dive Case Study 2 (Aura Home - Shopify Plus E-Commerce) */}
        {isVisible('ecommerce') && (
          <section className="w-full max-w-7xl mx-auto px-gutter py-space-lg">
            <div className="relative rounded-2xl bg-surface-container/70 backdrop-blur-xl p-space-lg lg:p-space-xl shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
                <div className="flex flex-wrap items-center gap-space-sm">
                  <span className="px-3 py-1 rounded-full bg-secondary-container/40 text-secondary font-label-caps text-label-caps uppercase font-semibold">
                    Retail &amp; D2C Scale
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
                    Shopify Plus Headless
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
                    Algorithmic Recovery
                  </span>
                </div>
                <div className="flex items-center gap-space-sm font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    verified_user
                  </span>
                  <span>+$2.1M Net Margin • 1.4s Render Index</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                    <img
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      alt="Aura Home Luxury Interior Showroom"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBCabNbEljQDzbc7JqZQrizy5Lox86qLS_XCnqeXvZaAAs9NZtGuaX1DDKt3TGG4EL6Rqk9jOt05YeTrBOqfaJe3DhDBU9u9IGGrO9FnwRZjKnFaMkSdEb0eUCtoGANguzie_MeSoxueHbx6vMJS2r6GdjZJuPFawh2uDa80al-wQE6_XzIBTEFRojQpLGd8UF4CQOSNLCP4RW8Fj9PmCbETH-MDQbSFz9R9Lb5w3VNB-r-LW52xaIsg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent p-space-md flex flex-col justify-end">
                      <div className="font-label-caps text-label-caps uppercase text-tertiary font-bold tracking-widest mb-1">
                        AGGREGATE COMMERCE REVENUE
                      </div>
                      <div className="font-headline-lg text-headline-lg font-bold text-white tracking-tight">
                        +210% Non-Branded Sales
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        Meta ad spend dependency reduced from 78% down to 33%
                      </div>
                    </div>
                  </div>
                  {/* E-comm Proof Badges */}
                  <div className="grid grid-cols-3 gap-space-xs mt-space-sm text-center">
                    <div className="p-space-sm rounded-lg bg-surface-container-low">
                      <div className="font-metric-mono-lg text-metric-mono-lg font-bold text-primary">
                        -$142k
                      </div>
                      <div className="font-label-caps text-label-caps text-on-surface-variant">
                        Monthly Ad Spend
                      </div>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low">
                      <div className="font-metric-mono-lg text-metric-mono-lg font-bold text-tertiary">
                        98.4%
                      </div>
                      <div className="font-label-caps text-label-caps text-on-surface-variant">
                        Rich Snippet Rate
                      </div>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low">
                      <div className="font-metric-mono-lg text-metric-mono-lg font-bold text-secondary">
                        1.4s
                      </div>
                      <div className="font-label-caps text-label-caps text-on-surface-variant">
                        FCP On Collection
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
                  <div className="font-headline-md text-headline-md text-secondary mb-space-xs font-semibold">
                    Aura Home (Global Luxury Furnishings)
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mb-space-md">
                    +210% Non-Branded Organic Revenue via Semantic Taxonomy &amp; Dynamic JSON-LD
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                    After an unannounced Google Helpful Content Update penalized Aura Home&apos;s legacy collection URLs, non-brand revenue dropped by 44%. SEOnova restructured their global taxonomy using semantic graph relationships, migrated product collections to edge-cached Hydrogen workers, and implemented automated schema with real-time stock and merchant return policies.
                  </p>
                  <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm mb-space-md">
                    <div className="font-label-caps text-label-caps uppercase text-tertiary font-bold mb-space-xs">
                      Engineered Changes:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                          check_circle
                        </span>
                        <span>
                          <strong>Merchant Center Schema:</strong> Dynamic shipping details &amp; inventory state embedded directly in Head.
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                          check_circle
                        </span>
                        <span>
                          <strong>Faceted Indexation Fix:</strong> Canonicalized 120,000 auto-generated color and dimension filters.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-md pt-space-xs">
                    <img
                      className="w-10 h-10 rounded-full object-cover shadow-sm"
                      referrerPolicy="no-referrer"
                      alt="Elena Rostova CMO"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOSalZNQKwdGm7IoXARFxK0lnU6dtMx5xAp5BWNgsFefqcrWR7bmbKVXim-DJHTXlXRb4V4w9_oitIg3O7df6ll7B5Fr1dtxX4RTc46gBk8VhWQEq8D478YjnhFSaEfCpc9czivwbDG9huzDHdnJkWvQOx5kOlJvQ3Q-0ZjSESL7bJVnQ4q1uRKvJCzEh1CPfltgr-VKmIe6xIp3ZxAlklsQJdkZ-B41eq36QchIk6hkVry8rs88lINQ"
                    />
                    <div>
                      <div className="font-body-md text-body-md font-bold text-on-surface">
                        Elena Rostova
                      </div>
                      <div className="font-label-caps text-label-caps text-on-surface-variant">
                        CMO, Aura Home International
                      </div>
                    </div>
                    <span className="ml-auto font-label-caps text-label-caps text-tertiary">
                      CONFIRMED VIA SHOPIFY PLUS BI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 5: Deep-Dive Case Study 3 (CloudScale Infrastructure - DevTools) */}
        {isVisible('devtools') && (
          <section className="w-full max-w-7xl mx-auto px-gutter py-space-lg">
            <div className="relative rounded-2xl bg-surface-container/70 backdrop-blur-xl p-space-lg lg:p-space-xl shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
                <div className="flex flex-wrap items-center gap-space-sm">
                  <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary font-label-caps text-label-caps uppercase font-semibold">
                    DevTools &amp; Open Source
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
                    Kubernetes Orchestration
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
                    Documentation SEO
                  </span>
                </div>
                <div className="flex items-center gap-space-sm font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    terminal
                  </span>
                  <span>85k Signups • 6.2% Visitor to Git Clone</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="font-headline-md text-headline-md text-primary mb-space-xs font-semibold">
                      CloudScale Infrastructure (Series A DevTools)
                    </div>
                    <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mb-space-md">
                      0 to 85,000 Developer Signups via High-Intent Documentation SEO
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                      Engineers don&apos;t respond to corporate marketing blogs. CloudScale needed qualified DevOps and Platform Engineers searching for obscure error messages, CLI parameters, and migration commands. SEOnova turned their public Markdown docs repository into an automated, lightning-fast ranking fortress.
                    </p>
                  </div>
                  {/* Terminal Code / Method Block */}
                  <div className="p-space-md rounded-xl bg-surface-container-lowest font-metric-mono-sm text-metric-mono-sm shadow-inner mb-space-md">
                    <div className="flex items-center justify-between text-on-surface-variant pb-2 mb-2">
                      <span className="text-tertiary">deploy-docs-seo.workflow.ts</span>
                      <span className="text-label-caps font-label-caps text-primary">
                        STATUS: MERGED
                      </span>
                    </div>
                    <div className="text-outline-variant">
                      // Automated entity graph injection on every Git push
                    </div>
                    <div className="text-on-surface">
                      <span className="text-secondary">const</span> schema ={' '}
                      <span className="text-primary">generateTechDocEntity</span>({'{'}
                    </div>
                    <div className="pl-4 text-tertiary">
                      programmingLanguage: <span className="text-on-surface">[&apos;Rust&apos;, &apos;Go&apos;, &apos;YAML&apos;]</span>,
                    </div>
                    <div className="pl-4 text-tertiary">
                      targetErrorCodes: <span className="text-on-surface">[&apos;ERR_K8S_POD_EVICTION_04&apos;]</span>,
                    </div>
                    <div className="pl-4 text-tertiary">
                      indexingMode: <span className="text-on-surface">&apos;CANONICAL_EDGE_RENDER&apos;</span>
                    </div>
                    <div className="text-on-surface">{'});'}</div>
                  </div>
                  {/* Metric Ticker row */}
                  <div className="flex flex-wrap items-center gap-space-lg text-on-surface">
                    <div>
                      <span className="font-headline-md text-headline-md font-bold text-tertiary block">
                        85,200
                      </span>
                      <span className="font-label-caps text-label-caps text-on-surface-variant">
                        Verified Free Signups
                      </span>
                    </div>
                    <div>
                      <span className="font-headline-md text-headline-md font-bold text-primary block">
                        620+
                      </span>
                      <span className="font-label-caps text-label-caps text-on-surface-variant">
                        Top-3 Positions
                      </span>
                    </div>
                    <div>
                      <span className="font-headline-md text-headline-md font-bold text-secondary block">
                        6.2%
                      </span>
                      <span className="font-label-caps text-label-caps text-on-surface-variant">
                        Git-Clone Conversion
                      </span>
                    </div>
                  </div>
                </div>

                {/* Documentation Architecture Preview Graphic */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="p-space-lg rounded-xl bg-surface-container-lowest/80 backdrop-blur-md shadow-md flex flex-col gap-space-md">
                    <div className="flex items-center justify-between pb-space-sm">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                        SERP Rank Stability (Algorithmic Shifts)
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-label-caps bg-tertiary/10 text-tertiary">
                        99.8% Nominal
                      </span>
                    </div>
                    {/* Bar Telemetry Chart */}
                    <div className="space-y-space-sm font-metric-mono-sm text-metric-mono-sm">
                      <div>
                        <div className="flex justify-between text-on-surface mb-1">
                          <span>&quot;helm chart secrets sync&quot;</span>
                          <span className="text-tertiary">Pos #1 (Featured Snippet)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-tertiary w-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-on-surface mb-1">
                          <span>&quot;ephemeral dev environments architecture&quot;</span>
                          <span className="text-tertiary">Pos #1</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-tertiary w-[94%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-on-surface mb-1">
                          <span>&quot;rust grpc client pool leak&quot;</span>
                          <span className="text-tertiary">Pos #2</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-secondary w-[88%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-on-surface mb-1">
                          <span>&quot;k8s cluster cost telemetry open source&quot;</span>
                          <span className="text-tertiary">Pos #1</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-tertiary w-[96%]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container flex items-center gap-space-sm mt-space-xs">
                      <span className="material-symbols-outlined text-tertiary text-[20px]">
                        insights
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Self-serve developer pipelines reduced outbound SDR costs by $480,000 annually.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 6: Deep-Dive Case Study 4 (NexusHealth - Telehealth & YMYL) */}
        {isVisible('health') && (
          <section className="w-full max-w-7xl mx-auto px-gutter py-space-lg">
            <div className="relative rounded-2xl bg-surface-container/70 backdrop-blur-xl p-space-lg lg:p-space-xl shadow-xl overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
                <div className="flex flex-wrap items-center gap-space-sm">
                  <span className="px-3 py-1 rounded-full bg-primary-container/30 text-primary font-label-caps text-label-caps uppercase font-semibold">
                    Healthcare &amp; YMYL
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
                    HIPAA Compliant
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
                    E-E-A-T Architecture
                  </span>
                </div>
                <div className="flex items-center gap-space-sm font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    health_and_safety
                  </span>
                  <span>+530% Consultations • 0 Volatility</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-7 flex flex-col">
                  <div className="font-headline-md text-headline-md text-tertiary mb-space-xs font-semibold">
                    NexusHealth (Nationwide Telehealth Platform)
                  </div>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mb-space-md">
                    Dominating Medical &amp; HIPAA-Compliant YMYL Search with E-E-A-T Infrastructure
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                    Medical queries live under Google&apos;s strictest Your Money or Your Life (YMYL) algorithmic scrutiny. NexusHealth struggled with volatile ranking swings that coincided with quarterly core updates. SEOnova created a cryptographic entity verification network linking physician NPI numbers, board certifications, and clinical studies directly to content schemas.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm mb-space-md">
                    <div className="p-space-sm rounded-lg bg-surface-container-low shadow-sm">
                      <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">
                        Booking Velocity
                      </span>
                      <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-tertiary">
                        +530%
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">
                        Quarterly appointments
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low shadow-sm">
                      <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">
                        Core Update Impact
                      </span>
                      <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-primary">
                        0.00%
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">
                        Negative rank drift
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low shadow-sm">
                      <span className="font-label-caps text-label-caps text-on-surface-variant block uppercase">
                        Physician Entity Map
                      </span>
                      <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-secondary">
                        420+
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">
                        Wikidata nodes indexed
                      </span>
                    </div>
                  </div>
                  {/* E-E-A-T Checkmarks */}
                  <div className="space-y-2 text-on-surface-variant font-body-sm text-body-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-[18px]">
                        verified
                      </span>
                      <span>
                        NPI-verified Medical Reviewer JSON-LD schema with live credential verification
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-[18px]">
                        verified
                      </span>
                      <span>
                        Zero client data telemetry leakage — fully HIPAA &amp; SOC2 Type II compliant index paths
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img
                      className="w-full h-80 object-cover"
                      referrerPolicy="no-referrer"
                      alt="NexusHealth Medical Clinician Telemetry"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvnp4vRXWVMYTH8Sb9mFQviUgH5UNiQFxNZlefzsB2l95T0QTaaZTL3yg0-mlPLO5-jsxmHDumRBPsAP8E0iy1bTEpNIQ6HaZBZ5qRTfz_cg7Mun4bSiwPh_Fym4fEvAtS2H8b2qQVek6DXvE29Oa-i9NRXp-vRlRnRXQkRguFXk5O96HeDVDzpxk1fZeTbiXXscHV8a08ZvtJqOSc8KPmjPlsEF03f84hzOkl1juQr5RL3QcM_bpnxg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent p-space-md flex flex-col justify-end">
                      <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase text-tertiary mb-1">
                        <span className="material-symbols-outlined text-[16px]">lock</span>
                        <span>HIPAA SEAL ENFORCED</span>
                      </div>
                      <div className="font-headline-md text-headline-md font-bold text-white">
                        4.8M Monthly Patients Served
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        100% compliant medical entity architecture
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 7: Client Verification & Testimonial Wall */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <div className="font-label-caps text-label-caps uppercase text-tertiary tracking-wider font-semibold mb-space-xs">
              EXECUTIVE ENDORSEMENTS
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mb-space-sm">
              Engineering-First Transparency &amp; Real Pipeline Revenue
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              No vague slide decks. We work directly in GitHub, communicate in Slack channels, and measure performance exclusively against qualified CRM attribution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Testimonial 1 */}
            <div className="p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md flex flex-col justify-between hover:bg-surface-container transition-all">
              <div>
                <div className="flex items-center gap-1 text-tertiary mb-space-md">
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-md italic">
                  &quot;SEOnova speaks our engineering team&apos;s dialect. When they presented their Edge SSR blueprint, our CTO approved it in 15 minutes. In 6 months, organic overtook paid search as our highest converting channel.&quot;
                </p>
              </div>
              <div className="flex items-center gap-space-sm pt-space-md">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                  alt="Arjun Patel CEO"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4KE2EtjDpIBrOQtbvJclGFgxbn7LbQMkITMLItkMLP_-qrJkQo26YYLxcNoAhWmYzxeLf3YJ4mTaTOHs9h7I6LxWGbzpIRFVBrfD_XnJlFXfyugMHUa-vapu528UqBeZjxlnN9url-G7JG3ssAbFmz6ey6IDqNHUeIYEMOxzSJiSvKARq_r53dAGd7ALozoVXrVXnIJsFdzuaBBGQTnZiPsOr26u-YRmCg-cR4_hUz-N7eIoZgVonrw"
                />
                <div>
                  <div className="font-body-md text-body-md font-bold text-on-surface">
                    Arjun Patel
                  </div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">
                    CEO &amp; Co-Founder, VectorDB Infra
                  </div>
                </div>
                <span className="ml-auto text-on-surface-variant font-label-caps text-label-caps">
                  SERIES A
                </span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md flex flex-col justify-between hover:bg-surface-container transition-all">
              <div>
                <div className="flex items-center gap-1 text-primary mb-space-md">
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-md italic">
                  &quot;We were skeptical after burning $250k with traditional SEO agencies. SEOnova took one look at our React architecture, pointed out why bot crawl budgets were failing, and delivered an 8x return on our engagement.&quot;
                </p>
              </div>
              <div className="flex items-center gap-space-sm pt-space-md">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                  alt="Sarah Lindqvist Head of Growth"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0osod1-D3_WQElv0rcsJSPD0Bw0mmoQsGUZeDJmhoshldyDlwqbf3ChLhVzsMJnlHqY_PN8ytTqJTDcDhozSX29Be1kceU_p1v7P5A6-FjavT7xKdn9wBQmu8NdEGUgiQrAkqc9TJ1agUR6fjMKo3iL8G-nHr5BBnxDZyPOqHIfPNqHbB0lrKh4XRRWvAsPFS5dV8aC-IvH_N71UP5bbQ1imP66ECH5J9RnsHgY1BwiaAI4Rcg-NIJg"
                />
                <div>
                  <div className="font-body-md text-body-md font-bold text-on-surface">
                    Sarah Lindqvist
                  </div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">
                    Head of Growth, NordicPay Global
                  </div>
                </div>
                <span className="ml-auto text-on-surface-variant font-label-caps text-label-caps">
                  FINTECH
                </span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md flex flex-col justify-between hover:bg-surface-container transition-all">
              <div>
                <div className="flex items-center gap-1 text-secondary mb-space-md">
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-md italic">
                  &quot;The automated JSON-LD schema pipeline and programmatic taxonomy they deployed doubled our organic revenue without requiring a redesign. They are in a league of their own.&quot;
                </p>
              </div>
              <div className="flex items-center gap-space-sm pt-space-md">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                  alt="David Chen VP Engineering"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD_yh8JZuCC_UfzMe2lLXUD0ihsq1cdbMvjwO7urYwgdVa8r8tea-Njqc9IH7acfNv8SBnru2JdZt3HxxneKqy9mSFHWXSmN5rSUAuXaSc88ffM9az1xk_UDJa3q8yRsSnNoGRXLqeQpfU8lGYmjCBzKXCrlP8GDEWT6KE_I5WZ01ib7Y7K2OfFWcT4mFiUrJi-RI3uf1crsa_j9H_l2HYil5vVtKw5MHZ15A6uQ0eg0WP1p8pEEhELA"
                />
                <div>
                  <div className="font-body-md text-body-md font-bold text-on-surface">
                    David Chen
                  </div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">
                    VP Engineering, OmniCommerce
                  </div>
                </div>
                <span className="ml-auto text-on-surface-variant font-label-caps text-label-caps">
                  PUBLIC CO
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Conversion Banner & Audit Prompt */}
        <section className="w-full max-w-7xl mx-auto px-gutter pb-space-xl">
          <div className="relative rounded-2xl bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container p-space-lg lg:p-space-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-space-xl">
            <div className="pointer-events-none absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/20 blur-[100px] rounded-full"></div>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-lowest/80 text-tertiary font-label-caps text-label-caps uppercase mb-space-sm">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                <span>DOMINANT SEARCH VELOCITY</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mb-space-xs">
                Want to see similar organic velocity on your domain?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Our principal search engineers analyze your architecture, identify hydration leaks, assess indexing bottlenecks, and map out your multi-million ARR organic expansion blueprint.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full lg:w-auto shrink-0 relative z-10">
              <button
                type="button"
                onClick={() => onNavigate('home', 'process')}
                className="inline-flex items-center justify-center px-space-md py-3 rounded-lg bg-surface-container-lowest/80 hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm font-semibold transition-all backdrop-blur-md shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined mr-2 text-[18px]">menu_book</span>
                Review Our Engineering Playbook
              </button>
              <button
                type="button"
                onClick={() => onNavigate('free-audit-widget')}
                className="inline-flex items-center justify-center px-space-lg py-3 rounded-lg bg-gradient-to-r from-primary-container via-secondary-container to-secondary text-white font-body-sm text-body-sm font-bold shadow-lg hover:shadow-[0_0_30px_rgba(77,142,255,0.45)] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined mr-2 text-[18px]">troubleshoot</span>
                Request Domain Feasibility Audit
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
