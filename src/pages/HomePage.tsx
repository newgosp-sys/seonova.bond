import React, { useState } from 'react';
import { NavigationProps } from '../types';

export const HomePage: React.FC<NavigationProps> = ({ onNavigate, onOpenModal }) => {
  const [visitors, setVisitors] = useState<number>(25000);
  const [auditUrl, setAuditUrl] = useState<string>('');
  const [auditEmail, setAuditEmail] = useState<string>('');
  const [auditCompetitor, setAuditCompetitor] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
  });

  const estimatedLift = Math.round(visitors * 1.92);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1100);
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* SCHEMA & STRUCTURED DATA BADGE PREVIEW */}
      <section className="w-full max-w-7xl mx-auto px-gutter pt-space-md">
        <div className="flex flex-wrap items-center justify-between gap-space-sm p-space-sm rounded-xl bg-surface-container-low shadow-sm">
          <div className="flex items-center gap-space-sm">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
            </span>
            <span className="font-label-caps text-label-caps uppercase text-tertiary">
              Schema.org JSON-LD Validated
            </span>
            <span className="hidden md:inline font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
              @type: Organization / HighGrowthSEOEngine
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <span className="font-metric-mono-sm text-metric-mono-sm text-on-surface-variant hidden lg:inline">
              Core Indexation Target: 99.8%
            </span>
            <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-caps text-label-caps text-primary uppercase">
              Production Tier 1
            </span>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden py-space-xl">
        {/* Atmospheric glows */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-72 right-10 w-[420px] h-[280px] bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="w-full max-w-7xl mx-auto px-gutter flex flex-col items-center text-center relative z-10">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high/70 backdrop-blur-md shadow-md mb-space-lg">
            <span className="inline-flex h-2 w-2 rounded-full bg-tertiary shadow-[0_0_8px_#4cd7f6]"></span>
            <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
              Trusted by 120+ SaaS &amp; E-Commerce Disruptors
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero max-w-5xl tracking-tight text-on-surface mb-space-md">
            Turn Organic Search Into Your Most{' '}
            <span className="bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent">
              Predictable Revenue Engine
            </span>
            .
          </h1>

          {/* Subheadline */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-space-xl leading-relaxed">
            We don’t chase vanity keywords. SEOnova.bond builds compounding search funnels that dominate Google, lower customer acquisition costs (CAC), and continuously populate high-intent enterprise pipeline.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-space-md mb-space-xl w-full sm:w-auto">
            <a
              href="#audit-calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl h-12 rounded-lg bg-gradient-to-r from-primary-container via-secondary-container to-secondary text-white font-body-md text-body-md font-semibold hover:shadow-[0_0_30px_rgba(77,142,255,0.4)] transition-all"
            >
              <span>Claim Your Free SEO Audit</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('case-studies')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg h-12 rounded-lg bg-surface-container/70 text-on-surface font-body-md text-body-md font-medium hover:bg-surface-container-high transition-colors backdrop-blur-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-tertiary text-[20px]">
                play_circle
              </span>
              <span>Explore Case Studies</span>
            </button>
          </div>

          {/* INTERACTIVE DASHBOARD PREVIEW MOCKUP */}
          <div className="w-full max-w-5xl text-left rounded-2xl bg-surface-container-low/90 backdrop-blur-xl p-space-md sm:p-space-lg shadow-2xl relative overflow-hidden border border-white/[0.08]">
            {/* Dashboard Top Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md bg-surface-container/50 -m-space-md sm:-m-space-lg p-space-md mb-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-3 h-3 rounded-full bg-error inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-tertiary inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
                <div className="ml-space-sm px-space-sm py-1 rounded bg-surface-container-lowest font-metric-mono-sm text-metric-mono-sm text-tertiary">
                  target: app.finflow.io | status: 200 OK | Indexation: 99.8%
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex items-center gap-1 font-label-caps text-label-caps text-on-surface-variant uppercase">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">
                    sync
                  </span>{' '}
                  Live Telemetry
                </span>
              </div>
            </div>

            {/* 4 Stat Pill Modules */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm mb-space-lg mt-space-md">
              <div className="p-space-sm rounded-xl bg-surface-container-high/60 backdrop-blur-sm shadow-sm">
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-1">
                  Growth Index
                </span>
                <span className="font-metric-mono-lg text-metric-mono-lg text-tertiary font-bold">
                  +342.8%
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">
                  Organic Search Vol
                </span>
              </div>
              <div className="p-space-sm rounded-xl bg-surface-container-high/60 backdrop-blur-sm shadow-sm">
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-1">
                  Domain Rating
                </span>
                <span className="font-metric-mono-lg text-metric-mono-lg text-primary font-bold">
                  DR 68 <span className="font-body-sm text-tertiary">(+24)</span>
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">
                  Ahrefs Weighted
                </span>
              </div>
              <div className="p-space-sm rounded-xl bg-surface-container-high/60 backdrop-blur-sm shadow-sm">
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-1">
                  Organic Pipeline
                </span>
                <span className="font-metric-mono-lg text-metric-mono-lg text-on-surface font-bold">
                  $4,520,000
                </span>
                <span className="font-body-sm text-body-sm text-tertiary block mt-0.5">
                  Attributed ARR
                </span>
              </div>
              <div className="p-space-sm rounded-xl bg-surface-container-high/60 backdrop-blur-sm shadow-sm">
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-1">
                  Top 3 Positions
                </span>
                <span className="font-metric-mono-lg text-metric-mono-lg text-secondary font-bold">
                  1,840
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">
                  High-Intent Keywords
                </span>
              </div>
            </div>

            {/* Dynamic Hockey Stick Traffic Chart (Inline SVG) */}
            <div className="p-space-md rounded-xl bg-surface-container/70 shadow-inner mb-space-md">
              <div className="flex items-center justify-between mb-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    query_stats
                  </span>
                  <span className="font-headline-md text-headline-md text-on-surface">
                    Compounding Organic Traffic Velocity
                  </span>
                </div>
                <span className="font-metric-mono-sm text-metric-mono-sm text-tertiary font-semibold">
                  T-365 Days Cumulative
                </span>
              </div>
              <div className="w-full h-52 relative">
                <svg
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 900 220"
                >
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#4d8eff" stopOpacity="0.38" />
                      <stop offset="60%" stopColor="#4cd7f6" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#0a0e17" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="lineStroke" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#3131c0" />
                      <stop offset="50%" stopColor="#4d8eff" />
                      <stop offset="100%" stopColor="#4cd7f6" />
                    </linearGradient>
                  </defs>
                  {/* Grid guidelines */}
                  <line
                    stroke="#424754"
                    strokeDasharray="4"
                    strokeOpacity="0.3"
                    x1="0"
                    x2="900"
                    y1="180"
                    y2="180"
                  />
                  <line
                    stroke="#424754"
                    strokeDasharray="4"
                    strokeOpacity="0.3"
                    x1="0"
                    x2="900"
                    y1="120"
                    y2="120"
                  />
                  <line
                    stroke="#424754"
                    strokeDasharray="4"
                    strokeOpacity="0.3"
                    x1="0"
                    x2="900"
                    y1="60"
                    y2="60"
                  />
                  {/* Compounding Hockey Stick Curve */}
                  <path
                    d="M 0,195 Q 260,190 420,165 T 620,105 T 780,45 L 900,18 L 900,220 L 0,220 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M 0,195 Q 260,190 420,165 T 620,105 T 780,45 L 900,18"
                    fill="none"
                    stroke="url(#lineStroke)"
                    strokeLinecap="round"
                    strokeWidth="3.5"
                  />
                  {/* Milestones */}
                  <circle className="animate-pulse" cx="420" cy="165" fill="#4cd7f6" r="4.5" />
                  <circle cx="620" cy="105" fill="#4d8eff" r="4.5" />
                  <circle cx="900" cy="18" fill="#acedff" r="6" />
                </svg>
                {/* Milestones Annotations */}
                <div className="absolute top-3 left-[42%] -translate-x-1/2 hidden md:flex flex-col items-center">
                  <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-caps text-label-caps">
                    M1: Core Vitals Fix
                  </span>
                </div>
                <div className="absolute top-1 right-[28%] hidden md:flex flex-col items-center">
                  <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary font-label-caps text-label-caps">
                    M2: Programmatic Spoke Release
                  </span>
                </div>
                <div className="absolute -top-3 right-0 flex flex-col items-end">
                  <span className="px-2 py-0.5 rounded bg-primary-container text-white font-label-caps text-label-caps font-bold">
                    142,500/mo ARR Lift
                  </span>
                </div>
              </div>
            </div>

            {/* Crawl Log Ticker */}
            <div className="flex items-center justify-between p-space-xs px-space-sm rounded-lg bg-surface-container-lowest font-metric-mono-sm text-metric-mono-sm">
              <div className="flex items-center gap-space-xs truncate">
                <span className="material-symbols-outlined text-tertiary text-[14px]">
                  terminal
                </span>
                <span className="text-on-surface-variant">Latest Crawl Event:</span>
                <span className="text-primary truncate">
                  200 OK /integrations/stripe-reconciliation [Schema Verified &amp; Indexed]
                </span>
              </div>
              <span className="text-tertiary-fixed-dim whitespace-nowrap ml-space-sm">
                0.12s latency
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF & TRUST METRICS BAR */}
      <section className="w-full py-space-xl bg-surface-container-low shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-gutter">
          {/* Logos row */}
          <div className="flex flex-col items-center mb-space-lg">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider mb-space-md">
              Powering Search Architecture for Fast-Moving Innovators
            </span>
            <div className="flex flex-wrap items-center justify-center gap-space-xl opacity-75">
              <div className="flex items-center gap-1.5 font-headline-md text-headline-md text-on-surface font-bold tracking-tighter">
                <span className="material-symbols-outlined text-tertiary">hub</span>FinFlow
              </div>
              <div className="flex items-center gap-1.5 font-headline-md text-headline-md text-on-surface font-bold tracking-tighter">
                <span className="material-symbols-outlined text-primary">rocket_launch</span>
                HyperScale
              </div>
              <div className="flex items-center gap-1.5 font-headline-md text-headline-md text-on-surface font-bold tracking-tighter">
                <span className="material-symbols-outlined text-secondary">cloud_done</span>
                OmniCloud
              </div>
              <div className="flex items-center gap-1.5 font-headline-md text-headline-md text-on-surface font-bold tracking-tighter">
                <span className="material-symbols-outlined text-tertiary">payments</span>Nexus Pay
              </div>
              <div className="flex items-center gap-1.5 font-headline-md text-headline-md text-on-surface font-bold tracking-tighter">
                <span className="material-symbols-outlined text-primary">cardiology</span>Verve
                Health
              </div>
              <div className="flex items-center gap-1.5 font-headline-md text-headline-md text-on-surface font-bold tracking-tighter">
                <span className="material-symbols-outlined text-secondary">
                  airplanemode_active
                </span>
                AeroSaaS
              </div>
            </div>
          </div>

          {/* 3 Live Trust Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-md">
            <div className="p-space-lg rounded-2xl bg-surface-container shadow-md flex flex-col justify-between">
              <div>
                <span className="font-label-caps text-label-caps uppercase text-tertiary block mb-space-xs">
                  Total Impact
                </span>
                <div className="font-display-hero text-display-hero text-on-surface mb-space-xs tracking-tight">
                  $42M+
                </div>
                <div className="font-body-md text-body-md text-on-surface-variant">
                  Direct Organic Pipeline Revenue Generated
                </div>
              </div>
              <div className="mt-space-md inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high w-fit font-metric-mono-sm text-metric-mono-sm text-tertiary">
                <span className="material-symbols-outlined text-[14px]">trending_up</span> +$12M
                QoQ Attributed
              </div>
            </div>

            <div className="p-space-lg rounded-2xl bg-surface-container shadow-md flex flex-col justify-between">
              <div>
                <span className="font-label-caps text-label-caps uppercase text-primary block mb-space-xs">
                  Capital Efficiency
                </span>
                <div className="font-display-hero text-display-hero text-on-surface mb-space-xs tracking-tight">
                  4.8x
                </div>
                <div className="font-body-md text-body-md text-on-surface-variant">
                  Average Organic ROI Within 6 Calendar Months
                </div>
              </div>
              <div className="mt-space-md inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high w-fit font-metric-mono-sm text-metric-mono-sm text-primary">
                <span className="material-symbols-outlined text-[14px]">verified_user</span>{' '}
                Audited via KPMG Methodology
              </div>
            </div>

            <div className="p-space-lg rounded-2xl bg-surface-container shadow-md flex flex-col justify-between">
              <div>
                <span className="font-label-caps text-label-caps uppercase text-secondary block mb-space-xs">
                  Client Satisfaction
                </span>
                <div className="font-display-hero text-display-hero text-on-surface mb-space-xs tracking-tight">
                  99.2%
                </div>
                <div className="font-body-md text-body-md text-on-surface-variant">
                  Customer Retention Rate Over Retainers
                </div>
              </div>
              <div className="mt-space-md inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high w-fit font-metric-mono-sm text-metric-mono-sm text-secondary">
                <span className="material-symbols-outlined text-[14px]">calendar_month</span> 36+
                Consecutive Months Cohort
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS & THE SOLUTION BENTO GRID */}
      <section className="w-full py-space-xl scroll-mt-20" id="comparison">
        <div className="w-full max-w-7xl mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <span className="font-label-caps text-label-caps uppercase text-tertiary tracking-widest block mb-space-xs">
              Engineered Contrast
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-space-sm">
              Why Traditional SEO Consultancies Fail Modern Tech Stacks
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Legacy agency models rely on vanity keywords and static PDF reports. We engineer software-first search dominance.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
            {/* Trap 1: Outdated Agency */}
            <div className="p-space-lg rounded-2xl bg-surface-container shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-error/10 rounded-full blur-2xl"></div>
              <div>
                <div className="flex items-center gap-space-xs text-error mb-space-md">
                  <span className="material-symbols-outlined text-[24px]">cancel</span>
                  <span className="font-headline-md text-headline-md font-semibold">
                    The Outdated Agency Trap
                  </span>
                </div>
                <ul className="space-y-space-md font-body-md text-body-md text-on-surface-variant">
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">
                      close
                    </span>
                    <span>Vague 40-page monthly PDF reports with zero revenue causality</span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">
                      close
                    </span>
                    <span>
                      Spammy outsourced link networks that trigger algorithmic penalties
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">
                      close
                    </span>
                    <span>Chasing empty informational keywords with zero demo conversion</span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">
                      close
                    </span>
                    <span>
                      Account managers with zero engineering or codebase comprehension
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md">
                <span className="font-metric-mono-sm text-metric-mono-sm text-error uppercase">
                  Outcome: High Burn, Flat Pipeline
                </span>
              </div>
            </div>

            {/* Trap 2: In-House Bottleneck */}
            <div className="p-space-lg rounded-2xl bg-surface-container shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/10 rounded-full blur-2xl"></div>
              <div>
                <div className="flex items-center gap-space-xs text-secondary-fixed-dim mb-space-md">
                  <span className="material-symbols-outlined text-[24px]">pending_actions</span>
                  <span className="font-headline-md text-headline-md font-semibold">
                    The In-House Bottleneck
                  </span>
                </div>
                <ul className="space-y-space-md font-body-md text-body-md text-on-surface-variant">
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                      remove
                    </span>
                    <span>
                      Product engineers continuously deprioritizing core SEO technical backlog
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                      remove
                    </span>
                    <span>
                      High fixed cost of full-time hiring: $350k+ for SEO + PR + Content team
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                      remove
                    </span>
                    <span>
                      Lack of proprietary algorithmic telemetry tooling &amp; scale automations
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                      remove
                    </span>
                    <span>Slow programmatic page releases stalled in design sprints</span>
                  </li>
                </ul>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md">
                <span className="font-metric-mono-sm text-metric-mono-sm text-secondary-fixed-dim uppercase">
                  Outcome: Stagnant Execution Velocity
                </span>
              </div>
            </div>

            {/* Column 3: The SEOnova Machine */}
            <div className="p-space-lg rounded-2xl bg-surface-container-high shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-primary-container/30 rounded-full blur-3xl pointer-events-none"></div>
              <div>
                <div className="flex items-center gap-space-xs text-tertiary mb-space-md">
                  <span className="material-symbols-outlined text-[24px]">auto_mode</span>
                  <span className="font-headline-md text-headline-md font-bold text-on-surface">
                    The SEOnova.bond Machine
                  </span>
                </div>
                <ul className="space-y-space-md font-body-md text-body-md text-on-surface">
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Direct GitHub Pull Request commits for instant code-level technical execution
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Semantic entity graph architecture targeting non-branded buyers with intent
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Live Client Dashboard with CRM Salesforce/HubSpot closed-loop revenue mapping
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Editorial Tier-1 Digital PR linking exclusively from DR 70+ authoritative publications
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-space-lg pt-space-md bg-surface-container-lowest -mx-space-lg -mb-space-lg p-space-md flex items-center justify-between">
                <span className="font-metric-mono-sm text-metric-mono-sm text-tertiary font-bold uppercase">
                  Outcome: 4.8x Predictable ARR Multiplier
                </span>
                <span className="material-symbols-outlined text-tertiary text-[18px]">
                  verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES BENTO GRID */}
      <section className="w-full py-space-xl bg-surface-container-low scroll-mt-20" id="services">
        <div className="w-full max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-tertiary tracking-widest block mb-space-xs">
                Engineering Practice
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                Enterprise Organic Search Capabilities
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Precision SEO protocols tailored to scalable React/Next.js/Shopify web infrastructures.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {/* Service 1 */}
            <div
              onClick={() => onNavigate('services', 'tech-cwv')}
              className="p-space-lg rounded-2xl bg-surface-container shadow-md hover:bg-surface-container-high transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-space-md group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[26px]">speed</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
                  Technical &amp; Core Web Vitals Optimization
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                  We audit deep client-side render dynamics, eliminate render-blocking CSS/JS, orchestrate dynamic XML sitemaps, and guarantee TTFB &lt; 180ms to maximize Googlebot crawl budget efficiency.
                </p>
                <div className="flex flex-wrap gap-2 mb-space-md">
                  <span className="px-2 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                    INP &lt; 200ms
                  </span>
                  <span className="px-2 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                    LCP &lt; 1.4s
                  </span>
                  <span className="px-2 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                    Serverless Hydration
                  </span>
                </div>
              </div>
              <div className="flex items-center text-primary font-body-sm text-body-sm font-semibold gap-1">
                <span>Learn our technical framework</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Service 2 */}
            <div
              onClick={() => onNavigate('services', 'programmatic')}
              className="p-space-lg rounded-2xl bg-surface-container shadow-md hover:bg-surface-container-high transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary mb-space-md group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[26px]">account_tree</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
                  Programmatic &amp; Content-Led SEO
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                  Scale thousands of transactional landing pages using proprietary database architectures. We map topical clusters and write editorial-standard guides engineered around real customer purchasing intent.
                </p>
                <div className="flex flex-wrap gap-2 mb-space-md">
                  <span className="px-2 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                    Database-Driven Pages
                  </span>
                  <span className="px-2 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                    Intent Clustering
                  </span>
                  <span className="px-2 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                    Zero-Fluff Standard
                  </span>
                </div>
              </div>
              <div className="flex items-center text-tertiary font-body-sm text-body-sm font-semibold gap-1">
                <span>Explore programmatic playbook</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Service 3 */}
            <div
              onClick={() => onNavigate('services', 'digital-pr')}
              className="p-space-lg rounded-2xl bg-surface-container shadow-md hover:bg-surface-container-high transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary mb-space-md group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[26px]">campaign</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
                  High-Authority Digital PR &amp; Link Acquisition
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                  Strictly white-hat outreach. We publish data studies and proprietary industry research that tier-1 publications like Bloomberg, TechCrunch, and Forbes reference naturally, securing average DR 74+ backlinks.
                </p>
                <div className="flex flex-wrap gap-2 mb-space-md">
                  <span className="px-2 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                    Forbes &amp; TechCrunch Tier
                  </span>
                  <span className="px-2 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                    0 PBNs Guarantee
                  </span>
                  <span className="px-2 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                    Average DR 74+
                  </span>
                </div>
              </div>
              <div className="flex items-center text-secondary font-body-sm text-body-sm font-semibold gap-1">
                <span>Review editorial syndication</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Service 4 */}
            <div
              onClick={() => onNavigate('services', 'semantic-kg')}
              className="p-space-lg rounded-2xl bg-surface-container shadow-md hover:bg-surface-container-high transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary mb-space-md group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[26px]">schema</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
                  E-Commerce &amp; Semantic Entity Domination
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                  Rich snippet injection, dynamic Product &amp; AggregateRating schema, Google Merchant Center feed synergy, and nested entity graphing to ensure knowledge panel supremacy.
                </p>
                <div className="flex flex-wrap gap-2 mb-space-md">
                  <span className="px-2 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                    Schema.org Microdata
                  </span>
                  <span className="px-2 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                    Merchant Feed Sync
                  </span>
                  <span className="px-2 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                    Entity Disambiguation
                  </span>
                </div>
              </div>
              <div className="flex items-center text-tertiary font-body-sm text-body-sm font-semibold gap-1">
                <span>Examine semantic hierarchy</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVEN CASE STUDIES SHOWCASE */}
      <section className="w-full py-space-xl scroll-mt-20" id="case-studies">
        <div className="w-full max-w-7xl mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-space-xs">
              Validated Proof
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-space-sm">
              Empirical Case Studies
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Concrete results audited through revenue tracking and search console telemetry.
            </p>
          </div>
          <div className="space-y-space-lg">
            {/* Case Study 1 */}
            <div
              onClick={() => onNavigate('case-studies')}
              className="p-space-lg rounded-2xl bg-surface-container shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center hover:bg-surface-container-high/80 transition-colors cursor-pointer"
            >
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-space-xs mb-space-sm">
                    <span className="px-2.5 py-1 rounded bg-surface-container-high font-label-caps text-label-caps text-tertiary uppercase">
                      B2B FinTech
                    </span>
                    <span className="font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                      9-Month Engagement
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-sm">
                    Scaling FinFlow Organic ARR from $1.2M to $4.5M
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                    By refactoring their Next.js dynamic routing, eliminating 38,000 duplicate faceted URLs, and deploying 140 programmatic comparison hubs against legacy competitors, FinFlow became the default category leader.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-space-sm pt-space-md bg-surface-container-low rounded-xl p-space-md">
                  <div>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-tertiary font-bold block">
                      +410%
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Qualified Signups
                    </span>
                  </div>
                  <div>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-primary font-bold block">
                      #1 Spot
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      'Treasury Ops'
                    </span>
                  </div>
                  <div>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-secondary font-bold block">
                      $0
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Paid Ad Burn
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 h-64 rounded-xl overflow-hidden shadow-inner relative bg-surface-container-lowest">
                <img
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  alt="FinFlow Organic Growth Analytics Dashboard"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj2m1jMQbESSJhl6H-gXSxIb7Q0u7tX8f5TOYiWBo3cy4iqg4pi5wxIbHxQlIKTkBo8ZHGF2Z-yHI9P5A5z4pbOMC_Jnph-HnCXmlswzerk2DP7BCqJV3ZJWf6HUY_4aBpW7pn6lpTOVvpTsvho4F1Vfpd1NGQheDIf6rMbnyktKFN-Nal8y0jZT7duLwVh0bBU3yUdiVvuANGOBMJlz5Oh6ZPLG4Mgmi33MTgQSlRbdN7Miemym1wqw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-surface-container-lowest/80 backdrop-blur-md font-metric-mono-sm text-metric-mono-sm text-tertiary">
                  Audited by Segment &amp; GA4
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div
              onClick={() => onNavigate('case-studies')}
              className="p-space-lg rounded-2xl bg-surface-container shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center hover:bg-surface-container-high/80 transition-colors cursor-pointer"
            >
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-space-xs mb-space-sm">
                    <span className="px-2.5 py-1 rounded bg-surface-container-high font-label-caps text-label-caps text-primary uppercase">
                      Shopify Plus DTC
                    </span>
                    <span className="font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                      6-Month Engagement
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-sm">
                    +210% Aura Home E-Commerce Organic Revenue
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                    Deployed automated JSON-LD breadcrumbs, compressed unoptimized Liquid assets to achieve a 1.4s LCP, and clustered 800+ micro-attribute collections that captured unbranded long-tail buyer intent.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-space-sm pt-space-md bg-surface-container-low rounded-xl p-space-md">
                  <div>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-tertiary font-bold block">
                      1.4s
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      LCP Load Time
                    </span>
                  </div>
                  <div>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-primary font-bold block">
                      +145%
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Non-Branded Orders
                    </span>
                  </div>
                  <div>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-secondary font-bold block">
                      +$2.1M
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Net Margin Added
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 h-64 rounded-xl overflow-hidden shadow-inner relative bg-surface-container-lowest">
                <img
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  alt="Shopify Plus Search Telemetry Monitor"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTMaxwnVd2xqIEdgHXHzl6fKp_6pNXCKLMdwqY-xuzvAt9OpaYvYS4VhsfYcLlyc1WVfVXKv1hJxQ0eFf77Y-R_-PzLKgV2PpdfHJsUSUAZPOWaG9hMI1hTIehFFES_Koeb0fSTqd41ZT_HFl7wHKo8mnBatWsTBmQuhCLwzhtQwteg6DsjSC1yEZFaD9WejDWEWeAP4bBJ8Ed9doyTNl0dxdPq2Dw1sQAnra5bJa3cvN3L6U1icJJDw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-surface-container-lowest/80 backdrop-blur-md font-metric-mono-sm text-metric-mono-sm text-primary">
                  Shopify Plus Verified Export
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div
              onClick={() => onNavigate('case-studies')}
              className="p-space-lg rounded-2xl bg-surface-container shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center hover:bg-surface-container-high/80 transition-colors cursor-pointer"
            >
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-space-xs mb-space-sm">
                    <span className="px-2.5 py-1 rounded bg-surface-container-high font-label-caps text-label-caps text-secondary uppercase">
                      DevTools Infrastructure
                    </span>
                    <span className="font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                      12-Month Engagement
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-space-sm">
                    CloudScale: 0 to 85,000 Developer Signups via Documentation SEO
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                    Transformed raw developer Markdown documentation into indexable canonical reference hubs. Integrated automated Schema snippet markup for technical code terms and CLI command queries.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-space-sm pt-space-md bg-surface-container-low rounded-xl p-space-md">
                  <div>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-tertiary font-bold block">
                      85,000
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Active Dev Signups
                    </span>
                  </div>
                  <div>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-primary font-bold block">
                      620+
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Top-3 CLI Keywords
                    </span>
                  </div>
                  <div>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-secondary font-bold block">
                      6.2%
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Visitor-to-Git Clone
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 h-64 rounded-xl overflow-hidden shadow-inner relative bg-surface-container-lowest">
                <img
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  alt="CloudScale Documentation Search Telemetry"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkSkUbZYl_FiMJHQs9S--d_raxXqEOrnleG3QGo9ph2k8XCkEHFY631Vwm_RyYetVwmNVRDesoZAAqxqWAzG7GZ7BpxdmvpGS5NKSBtyihaWLHrWMW-dV-jaCffaxlFQTDc6nphHSdNsQ3KnVgEL2zs79vvmxpcAbEGJnLuNkCkrp-nlAy9-iOtz5VZVQDJUVCkat1Q1P7aZjysL5IQ1yW7Q5WCyfa24gu6pP4hHQAcwrerSS8mEGCBQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-surface-container-lowest/80 backdrop-blur-md font-metric-mono-sm text-metric-mono-sm text-secondary">
                  GitHub Auth Analytics
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP REVENUE ROADMAP */}
      <section className="w-full py-space-xl bg-surface-container-low scroll-mt-20" id="process">
        <div className="w-full max-w-7xl mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <span className="font-label-caps text-label-caps uppercase text-tertiary tracking-widest block mb-space-xs">
              Execution Architecture
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-space-sm">
              The 4-Step Revenue Roadmap
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Deterministic sprints that turn crawl budgets into measurable recurring pipeline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Step 1 */}
            <div className="p-space-lg rounded-2xl bg-surface-container shadow-md flex flex-col justify-between">
              <div>
                <span className="font-metric-mono-lg text-metric-mono-lg text-tertiary font-bold block mb-space-sm">
                  01 / DIAGNOSTIC
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
                  Deep-Dive Technical Audit &amp; Gap Analysis
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  250+ automated and manual crawl checkpoints. We inspect server logs, DOM tree hydration, orphan pages, canonical conflicts, and competitor gaps.
                </p>
              </div>
              <div className="p-space-xs rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                Sprint Duration: 14 Days
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-space-lg rounded-2xl bg-surface-container shadow-md flex flex-col justify-between">
              <div>
                <span className="font-metric-mono-lg text-metric-mono-lg text-primary font-bold block mb-space-sm">
                  02 / ARCHITECTURE
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
                  Semantic Entity &amp; Content Roadmap
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  We build topical authority clusters, map non-branded intent to pipeline value, and structure programmatic spoke wireframes for development.
                </p>
              </div>
              <div className="p-space-xs rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                Sprint Duration: 21 Days
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-space-lg rounded-2xl bg-surface-container shadow-md flex flex-col justify-between">
              <div>
                <span className="font-metric-mono-lg text-metric-mono-lg text-secondary font-bold block mb-space-sm">
                  03 / VELOCITY
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
                  Digital PR &amp; Link Velocity Execution
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Data-led journalism outreach, executive quote syndication, and high-DR backlink acquisition that fuels domain level search engine confidence.
                </p>
              </div>
              <div className="p-space-xs rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                Sprint Duration: Continuous
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-space-lg rounded-2xl bg-surface-container shadow-md flex flex-col justify-between">
              <div>
                <span className="font-metric-mono-lg text-metric-mono-lg text-tertiary-fixed-dim font-bold block mb-space-sm">
                  04 / ATTRIBUTION
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
                  CRO, Title Tag A/B Testing &amp; Scale
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Algorithmic CTR optimization, dynamic meta testing, and direct revenue attribution sync into your CRM to prove exact ROI per organic query.
                </p>
              </div>
              <div className="p-space-xs rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                Sprint Duration: Evergreen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE LEAD-GEN AUDIT WIDGET / ROI CALCULATOR */}
      <section
        className="w-full py-space-xl relative overflow-hidden scroll-mt-20"
        id="audit-calculator"
      >
        <div className="absolute -bottom-20 left-10 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="w-full max-w-4xl mx-auto px-gutter relative z-10">
          <div className="text-center mb-space-lg">
            <span className="font-label-caps text-label-caps uppercase text-tertiary tracking-widest block mb-space-xs">
              Instant Telemetry Engine
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-space-sm">
              Claim Your Free Technical Diagnostic
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Our bot crawls your domain in real-time, mapping 250+ indexing, speed, and topical gap vulnerabilities.
            </p>
          </div>
          <div className="p-space-lg md:p-space-xl rounded-2xl bg-surface-container shadow-2xl backdrop-blur-md">
            <form className="space-y-space-md" onSubmit={handleAuditSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div>
                  <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-space-xs">
                    Your Website URL
                  </label>
                  <div className="flex items-center px-space-md h-12 rounded-lg bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary shadow-inner">
                    <span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-2">
                      language
                    </span>
                    <input
                      className="w-full bg-transparent border-0 outline-none text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/40"
                      placeholder="https://yourcompany.com"
                      required
                      type="url"
                      value={auditUrl}
                      onChange={(e) => setAuditUrl(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-space-xs">
                    Work Business Email
                  </label>
                  <div className="flex items-center px-space-md h-12 rounded-lg bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary shadow-inner">
                    <span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-2">
                      mail
                    </span>
                    <input
                      className="w-full bg-transparent border-0 outline-none text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/40"
                      placeholder="alex@yourcompany.com"
                      required
                      type="email"
                      value={auditEmail}
                      onChange={(e) => setAuditEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-space-xs">
                  Primary Competitor Domain (For Gap Analysis)
                </label>
                <div className="flex items-center px-space-md h-12 rounded-lg bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary shadow-inner">
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-2">
                    analytics
                  </span>
                  <input
                    className="w-full bg-transparent border-0 outline-none text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/40"
                    placeholder="rivalcompany.com"
                    required
                    type="text"
                    value={auditCompetitor}
                    onChange={(e) => setAuditCompetitor(e.target.value)}
                  />
                </div>
              </div>

              {/* Interactive Traffic Slider & Projected Revenue Boost */}
              <div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-body-md text-body-md text-on-surface font-medium">
                    Current Monthly Organic Visitors:
                  </span>
                  <span className="font-metric-mono-lg text-metric-mono-lg text-tertiary font-bold">
                    {visitors.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  className="w-full accent-primary h-2 bg-surface-container-highest rounded-lg cursor-pointer"
                  max={250000}
                  min={5000}
                  step={5000}
                  type="range"
                  value={visitors}
                  onChange={(e) => setVisitors(parseInt(e.target.value, 10))}
                />
                <div className="mt-space-md flex flex-wrap items-center justify-between pt-space-xs">
                  <div>
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block">
                      Projected 6-Mo Pipeline Lift
                    </span>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-primary font-bold">
                      +${estimatedLift.toLocaleString()} / mo
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant block">
                      Estimated CAC Reduction
                    </span>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-secondary font-bold">
                      -38.4%
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              {!submitted && (
                <button
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-lg bg-gradient-to-r from-primary-container via-secondary-container to-secondary text-white font-headline-md text-headline-md font-semibold flex items-center justify-center gap-space-xs hover:shadow-[0_0_35px_rgba(77,142,255,0.45)] transition-all cursor-pointer disabled:opacity-70"
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin material-symbols-outlined text-[18px] mr-2">
                        sync
                      </span>
                      <span>Synthesizing Audit Data...</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">bolt</span>
                      <span>Run Diagnostic &amp; Get Free SEO Audit</span>
                    </>
                  )}
                </button>
              )}
            </form>

            {/* Live Submission Status Panel */}
            {submitted && (
              <div className="mt-space-md p-space-md rounded-xl bg-surface-container-lowest text-center space-y-2">
                <div className="inline-flex items-center gap-space-xs text-tertiary font-metric-mono-sm text-metric-mono-sm">
                  <span className="animate-spin material-symbols-outlined text-[16px]">
                    sync
                  </span>
                  <span>
                    CRAWLER RUNNING: 250+ Automated Core Web Vitals checks scheduled for{' '}
                    {auditUrl || 'your domain'}...
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface">
                  Thank you! Your tailored diagnostic report is compiling and will land in{' '}
                  <span className="text-primary font-medium">{auditEmail}</span> within 24 hours.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('free-audit-widget')}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-surface-container-high text-tertiary font-metric-mono-sm text-metric-mono-sm hover:bg-surface-bright transition-colors cursor-pointer"
                  >
                    <span>Open Full Interactive Inspector Console</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="w-full py-space-xl scroll-mt-20" id="faq">
        <div className="w-full max-w-4xl mx-auto px-gutter">
          <div className="text-center mb-space-xl">
            <span className="font-label-caps text-label-caps uppercase text-tertiary tracking-widest block mb-space-xs">
              Full Transparency
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-space-sm">
              Frequently Addressed Objections
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Direct answers about our engineering methodology, SLAs, and performance commitments.
            </p>
          </div>
          <div className="space-y-space-sm">
            {/* FAQ Item 1 */}
            <div className="rounded-xl bg-surface-container shadow-sm overflow-hidden">
              <button
                type="button"
                className="w-full p-space-md flex items-center justify-between text-left text-on-surface font-headline-md text-headline-md font-semibold cursor-pointer"
                onClick={() => toggleFaq('faq1')}
              >
                <span>
                  How long does it take to see tangible SEO results with SEOnova.bond?
                </span>
                <span
                  className={`material-symbols-outlined text-primary text-[20px] transition-transform duration-200 ${
                    openFaq.faq1 ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openFaq.faq1 && (
                <div className="px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  Technical and Core Web Vitals improvements typically resolve crawl inefficiencies within 30 to 45 days. You will typically see immediate keyword indexing velocity spikes in Google Search Console within 60 days, followed by compounding rank dominance and organic MRR growth during months 3 through 6.
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="rounded-xl bg-surface-container shadow-sm overflow-hidden">
              <button
                type="button"
                className="w-full p-space-md flex items-center justify-between text-left text-on-surface font-headline-md text-headline-md font-semibold cursor-pointer"
                onClick={() => toggleFaq('faq2')}
              >
                <span>
                  What makes SEOnova.bond fundamentally different from standard agencies?
                </span>
                <span
                  className={`material-symbols-outlined text-primary text-[20px] transition-transform duration-200 ${
                    openFaq.faq2 ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openFaq.faq2 && (
                <div className="px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  We are software engineers and technical search operators, not junior account managers. We push direct GitHub Pull Requests to your repository for immediate code-level fixes, integrate closed-loop CRM revenue attribution, and guarantee strict Tier-1 editorial Digital PR without toxic PBN backlink schemes.
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="rounded-xl bg-surface-container shadow-sm overflow-hidden">
              <button
                type="button"
                className="w-full p-space-md flex items-center justify-between text-left text-on-surface font-headline-md text-headline-md font-semibold cursor-pointer"
                onClick={() => toggleFaq('faq3')}
              >
                <span>Do you deploy low-quality AI content or human-engineered copy?</span>
                <span
                  className={`material-symbols-outlined text-primary text-[20px] transition-transform duration-200 ${
                    openFaq.faq3 ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openFaq.faq3 && (
                <div className="px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  Zero auto-generated fluff. We employ specialized technical subject matter journalists who produce thoroughly verified, original editorial copy. We use AI only for algorithmic clustering, competitive entity mapping, and automated Schema syntax generation.
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="rounded-xl bg-surface-container shadow-sm overflow-hidden">
              <button
                type="button"
                className="w-full p-space-md flex items-center justify-between text-left text-on-surface font-headline-md text-headline-md font-semibold cursor-pointer"
                onClick={() => toggleFaq('faq4')}
              >
                <span>What is your pricing model and contract commitment length?</span>
                <span
                  className={`material-symbols-outlined text-primary text-[20px] transition-transform duration-200 ${
                    openFaq.faq4 ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openFaq.faq4 && (
                <div className="px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  We work on transparent, sprint-based monthly retainers tied directly to technical deliverables and qualified pipeline milestones. There are no punitive 12-month lock-in contracts—we earn our seat at your engineering and marketing table every single month through measurable compounding search pipeline.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION BANNER */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="w-full max-w-5xl mx-auto px-gutter text-center">
          <div className="p-space-xl rounded-3xl bg-gradient-to-b from-surface-container-high to-surface-container shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            <span className="font-label-caps text-label-caps uppercase text-tertiary tracking-widest block mb-space-sm">
              Zero Fluff • Pure Organic Scalability
            </span>
            <h2 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface font-bold tracking-tight mb-space-md">
              Ready to Outrank Competitors and Own Your Category?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-space-xl">
              Lock in your free comprehensive technical SEO diagnostic before our quarterly capacity reaches limit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md relative z-10">
              <button
                type="button"
                onClick={() => onOpenModal({ type: 'consultation', planName: 'Technical Diagnostic Session' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl h-12 rounded-lg bg-gradient-to-r from-primary-container via-secondary-container to-secondary text-white font-body-md text-body-md font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(77,142,255,0.4)] transition-all cursor-pointer"
              >
                <span>Schedule Diagnostic Session</span>
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg h-12 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md font-medium hover:bg-surface-container-high transition-colors cursor-pointer"
              >
                <span>View Full Service Catalog</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
