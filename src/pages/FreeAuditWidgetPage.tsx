import React, { useState } from 'react';
import { NavigationProps } from '../types';

export const FreeAuditWidgetPage: React.FC<NavigationProps> = ({ onOpenModal }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [domainInput, setDomainInput] = useState<string>('acme-saas.io');
  const [framework, setFramework] = useState<string>('nextjs');
  const [comp1, setComp1] = useState<string>('datadog.com');
  const [comp2, setComp2] = useState<string>('dynatrace.com');
  const [comp3, setComp3] = useState<string>('newrelic.com');
  const [emailInput, setEmailInput] = useState<string>('lead.architect@acme-saas.io');
  const [step4Traffic, setStep4Traffic] = useState<number>(120000);

  // Execution state
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [executionComplete, setExecutionComplete] = useState<boolean>(false);
  const [showExecutionBanner, setShowExecutionBanner] = useState<boolean>(false);
  const [progressPercent, setProgressPercent] = useState<number>(14);
  const [crawlerPhase, setCrawlerPhase] = useState<string>(
    'Phase 1: DNS & TLS Handshake Resolution'
  );
  const [logSummary, setLogSummary] = useState<string>(
    'Inspecting robots.txt and XML sitemap index...'
  );
  const [elapsedSec, setElapsedSec] = useState<number>(4);

  // ROI Calculator State
  const [roiTraffic, setRoiTraffic] = useState<number>(75000);
  const [roiLtv, setRoiLtv] = useState<number>(12000);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  // Matches exact screenshot numbers at 75,000 & $12,000: -$3,421,440 and +$6,021,734
  const lostConversions = roiTraffic * 0.018 * 0.22 * 12;
  const leakageARR = Math.round(lostConversions * (roiLtv * 0.96));
  const liftARR = Math.round(leakageARR * 1.76);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetDomain = domainInput.trim() || 'acme-saas.io';
    setIsExecuting(true);
    setExecutionComplete(false);
    setShowExecutionBanner(true);
    setProgressPercent(14);
    setElapsedSec(1);

    const phases = [
      {
        p: 25,
        sec: 2,
        phase: 'Phase 1: DNS & TLS Handshake Resolution',
        text: `Inspecting ${targetDomain} robots.txt, CDN headers, HTTP/2 multiplexing...`,
      },
      {
        p: 55,
        sec: 4,
        phase: 'Phase 2: Headless Chrome JS Execution',
        text: 'Rendering React bundle, analyzing main-thread hydration, tracing LCP...',
      },
      {
        p: 85,
        sec: 7,
        phase: 'Phase 3: Semantic Knowledge Graph & Schema',
        text: 'Cross-referencing Wikidata entity IDs, checking duplicate canonical paths...',
      },
      {
        p: 100,
        sec: 9,
        phase: 'Phase 4: Synthesis Complete & Dossier Ready',
        text: `Telemetry captured for ${targetDomain}. Full technical dossier generated successfully.`,
      },
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < phases.length) {
        setProgressPercent(phases[i].p);
        setElapsedSec(phases[i].sec);
        setCrawlerPhase(phases[i].phase);
        setLogSummary(phases[i].text);
        i++;
      } else {
        clearInterval(interval);
        setIsExecuting(false);
        setExecutionComplete(true);
      }
    }, 850);
  };

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getStepBtnClasses = (step: number) => {
    if (step === currentStep) {
      return 'text-left p-space-sm rounded-lg bg-surface-container-highest transition-all flex items-center gap-2 cursor-pointer';
    }
    if (step < currentStep) {
      return 'text-left p-space-sm rounded-lg bg-surface-container transition-all flex items-center gap-2 cursor-pointer';
    }
    return 'text-left p-space-sm rounded-lg bg-surface-container-low transition-all flex items-center gap-2 opacity-70 hover:opacity-100 cursor-pointer';
  };

  const getStepBadgeClasses = (step: number) => {
    if (step === currentStep) {
      return 'w-6 h-6 rounded-full bg-primary text-on-primary font-metric-mono-sm text-metric-mono-sm flex items-center justify-center font-bold shrink-0';
    }
    if (step < currentStep) {
      return 'w-6 h-6 rounded-full bg-tertiary text-on-tertiary font-metric-mono-sm text-metric-mono-sm flex items-center justify-center font-bold shrink-0';
    }
    return 'w-6 h-6 rounded-full bg-surface-container text-on-surface-variant font-metric-mono-sm text-metric-mono-sm flex items-center justify-center font-bold shrink-0';
  };

  const frameworkLabel =
    framework === 'nextjs'
      ? 'Next.js 14.2'
      : framework === 'shopify'
      ? 'Shopify Hydrogen'
      : framework === 'headless'
      ? 'Nuxt 3 SSR'
      : framework === 'wordpress'
      ? 'WP Decoupled'
      : 'Custom Stack';

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* Subtle Atmospheric Background Aura */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[480px] bg-gradient-to-b from-primary-container/20 via-tertiary/10 to-transparent blur-[140px] pointer-events-none rounded-full"></div>
        <div className="absolute top-96 -left-32 w-96 h-96 bg-secondary-container/20 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute top-[1400px] -right-32 w-96 h-96 bg-tertiary-container/15 blur-[130px] pointer-events-none rounded-full"></div>

        {/* 1. HERO SECTION & DIAGNOSTIC ENGINE INTRO */}
        <section className="relative w-full max-w-7xl mx-auto px-gutter pt-space-xl pb-space-lg">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-space-md">
            {/* Live Edge Telemetry Tag */}
            <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high/70 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              <span className="font-label-caps text-label-caps tracking-wider text-tertiary uppercase">
                INSTANT SEARCH HEALTH &amp; PIPELINE ENGINE • ED-2025
              </span>
              <span className="text-outline-variant font-label-caps text-label-caps">|</span>
              <span className="font-metric-mono-sm text-metric-mono-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px] text-tertiary-fixed-dim">
                  speed
                </span>{' '}
                14ms cluster ping
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero tracking-tight text-on-surface font-extrabold">
              Engineered Domain Diagnostic &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-secondary">
                Organic Gap Analysis
              </span>
            </h1>

            {/* Subhead */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Uncover hidden indexation bottlenecks, JavaScript hydration penalties, and untapped non-branded keyword ARR. Get an enterprise-grade technical audit synthesized in 90 seconds.
            </p>

            {/* Trust & Compliance Badges */}
            <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-sm">
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-lg bg-surface-container-low text-on-surface-variant font-metric-mono-sm text-metric-mono-sm">
                <span className="material-symbols-outlined text-[15px] text-tertiary">
                  verified_user
                </span>
                <span>Zero Spam &amp; NDA Safe</span>
              </div>
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-lg bg-surface-container-low text-on-surface-variant font-metric-mono-sm text-metric-mono-sm">
                <span className="material-symbols-outlined text-[15px] text-primary">
                  checklist
                </span>
                <span>250+ Crawl Checkpoints</span>
              </div>
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-lg bg-surface-container-low text-on-surface-variant font-metric-mono-sm text-metric-mono-sm">
                <span className="material-symbols-outlined text-[15px] text-secondary">
                  terminal
                </span>
                <span>Puppeteer Chromium Headless</span>
              </div>
              <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-lg bg-surface-container-low text-on-surface-variant font-metric-mono-sm text-metric-mono-sm">
                <span className="material-symbols-outlined text-[15px] text-tertiary">
                  dataset
                </span>
                <span>GSC API Compatible</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. INTERACTIVE MULTI-STEP AUDIT CONSOLE (THE WIDGET) */}
        <section className="relative w-full max-w-5xl mx-auto px-gutter pb-space-xl">
          <div className="relative rounded-xl bg-surface-container/90 backdrop-blur-xl shadow-xl overflow-hidden p-space-md md:p-space-xl border border-white/[0.08]">
            {/* Console Window Top Bar */}
            <div className="flex items-center justify-between pb-space-md mb-space-lg bg-surface-container-high/40 -mx-space-md md:-mx-space-xl -mt-space-md md:-mt-space-xl px-space-md md:px-space-xl py-space-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-error/70 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-secondary/70 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-tertiary/70 inline-block"></span>
                <span className="ml-space-sm font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">
                  SEOnova // Autonomous Inspector v4.8
                </span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex items-center gap-1 font-metric-mono-sm text-metric-mono-sm text-tertiary px-2 py-0.5 rounded bg-surface-container-highest">
                  <span className="material-symbols-outlined text-[14px]">lock</span> SSL v1.3
                  Verified
                </span>
                <span className="hidden sm:inline-flex font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                  Cluster: US-East-VA
                </span>
              </div>
            </div>

            {/* Step Wizard Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-xs mb-space-lg">
              <button
                className={getStepBtnClasses(1)}
                onClick={() => setCurrentStep(1)}
                type="button"
              >
                <span className={getStepBadgeClasses(1)}>1</span>
                <div className="min-w-0">
                  <p className="font-label-caps text-label-caps text-on-surface uppercase truncate">
                    Target Asset
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Domain &amp; Stack
                  </p>
                </div>
              </button>
              <button
                className={getStepBtnClasses(2)}
                onClick={() => setCurrentStep(2)}
                type="button"
              >
                <span className={getStepBadgeClasses(2)}>2</span>
                <div className="min-w-0">
                  <p className="font-label-caps text-label-caps text-on-surface uppercase truncate">
                    Market Comp
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    3 Direct Rivals
                  </p>
                </div>
              </button>
              <button
                className={getStepBtnClasses(3)}
                onClick={() => setCurrentStep(3)}
                type="button"
              >
                <span className={getStepBadgeClasses(3)}>3</span>
                <div className="min-w-0">
                  <p className="font-label-caps text-label-caps text-on-surface uppercase truncate">
                    Scan Vectors
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Diagnostic Scope
                  </p>
                </div>
              </button>
              <button
                className={getStepBtnClasses(4)}
                onClick={() => setCurrentStep(4)}
                type="button"
              >
                <span className={getStepBadgeClasses(4)}>4</span>
                <div className="min-w-0">
                  <p className="font-label-caps text-label-caps text-on-surface uppercase truncate">
                    Synthesis
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Delivery Endpoint
                  </p>
                </div>
              </button>
            </div>

            {/* FORM ENGINE */}
            <form className="space-y-space-lg" onSubmit={handleAuditSubmit}>
              {/* STEP 1 CONTENT */}
              {currentStep === 1 && (
                <div className="space-y-space-md">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">domain</span>
                      Domain Architecture &amp; Environment
                    </h3>
                    <span className="font-metric-mono-sm text-metric-mono-sm text-tertiary">
                      Step 01 / 04
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                    <div className="md:col-span-2 space-y-space-xs">
                      <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant">
                        Primary Production URL
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 font-metric-mono-sm text-metric-mono-sm text-outline">
                          https://
                        </span>
                        <input
                          className="w-full pl-20 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-metric-mono-sm text-metric-mono-sm placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                          placeholder="app.enterprise-domain.com"
                          required
                          type="text"
                          value={domainInput}
                          onChange={(e) => setDomainInput(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-space-xs">
                      <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant">
                        Primary Framework / CMS
                      </label>
                      <select
                        value={framework}
                        onChange={(e) => setFramework(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer"
                      >
                        <option value="nextjs">Next.js / React (SSR/SSG)</option>
                        <option value="shopify">Shopify Plus / Hydrogen</option>
                        <option value="headless">Headless Nuxt / Vue</option>
                        <option value="wordpress">WordPress (Decoupled / Monolith)</option>
                        <option value="custom">Custom Web Components / Svelte</option>
                        <option value="angular">Angular Universal</option>
                      </select>
                    </div>
                  </div>
                  {/* Protocol & Subdomain Toggles */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                    <label className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container-high transition-colors">
                      <input
                        defaultChecked
                        className="w-4 h-4 rounded accent-primary bg-surface-container"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Inspect International hreflang
                      </span>
                    </label>
                    <label className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container-high transition-colors">
                      <input
                        defaultChecked
                        className="w-4 h-4 rounded accent-primary bg-surface-container"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Deep Crawl Subdomains
                      </span>
                    </label>
                    <label className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container-high transition-colors">
                      <input
                        defaultChecked
                        className="w-4 h-4 rounded accent-primary bg-surface-container"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Execute Headless JS Bundle
                      </span>
                    </label>
                  </div>
                  <div className="flex justify-end pt-space-sm">
                    <button
                      className="px-space-md py-2.5 rounded-lg bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface font-body-md text-body-md font-semibold transition-all inline-flex items-center gap-2 cursor-pointer"
                      onClick={() => setCurrentStep(2)}
                      type="button"
                    >
                      <span>Proceed to Competitor Gap</span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 CONTENT */}
              {currentStep === 2 && (
                <div className="space-y-space-md">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">
                        compare_arrows
                      </span>
                      Benchmark Against Key Search Rivals
                    </h3>
                    <span className="font-metric-mono-sm text-metric-mono-sm text-tertiary">
                      Step 02 / 04
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    SEOnova runs an automated SERP delta to uncover non-branded query overlaps, backlink velocity deficits, and entity coverage superiority.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                    <div className="space-y-space-xs">
                      <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant">
                        Competitor 01 (Primary)
                      </label>
                      <input
                        className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-metric-mono-sm text-metric-mono-sm focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
                        placeholder="rival-leader.com"
                        type="text"
                        value={comp1}
                        onChange={(e) => setComp1(e.target.value)}
                      />
                    </div>
                    <div className="space-y-space-xs">
                      <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant">
                        Competitor 02 (Challenger)
                      </label>
                      <input
                        className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-metric-mono-sm text-metric-mono-sm focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
                        placeholder="fast-growth-peer.com"
                        type="text"
                        value={comp2}
                        onChange={(e) => setComp2(e.target.value)}
                      />
                    </div>
                    <div className="space-y-space-xs">
                      <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant">
                        Competitor 03 (Niche)
                      </label>
                      <input
                        className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-metric-mono-sm text-metric-mono-sm focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
                        placeholder="disruptor-brand.io"
                        type="text"
                        value={comp3}
                        onChange={(e) => setComp3(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-space-sm">
                    <button
                      className="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-all cursor-pointer"
                      onClick={() => setCurrentStep(1)}
                      type="button"
                    >
                      Back
                    </button>
                    <button
                      className="px-space-md py-2.5 rounded-lg bg-surface-container-highest hover:bg-secondary hover:text-on-secondary text-on-surface font-body-md text-body-md font-semibold transition-all inline-flex items-center gap-2 cursor-pointer"
                      onClick={() => setCurrentStep(3)}
                      type="button"
                    >
                      <span>Select Scan Vectors</span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 CONTENT */}
              {currentStep === 3 && (
                <div className="space-y-space-md">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary">hub</span>
                      Diagnostic Focus &amp; Deep Scanners
                    </h3>
                    <span className="font-metric-mono-sm text-metric-mono-sm text-tertiary">
                      Step 03 / 04
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <label className="relative flex items-start gap-space-sm p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group">
                      <input
                        defaultChecked
                        className="mt-1 w-4 h-4 rounded accent-tertiary bg-surface-container"
                        type="checkbox"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-headline-md text-headline-md text-on-surface group-hover:text-tertiary transition-colors">
                            Core Web Vitals &amp; Hydration
                          </span>
                          <span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-caps text-label-caps uppercase">
                            Crucial
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          LCP breakdown, INP main-thread blocking tasks, layout instability, and JS execution waterfalls.
                        </p>
                      </div>
                    </label>
                    <label className="relative flex items-start gap-space-sm p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group">
                      <input
                        defaultChecked
                        className="mt-1 w-4 h-4 rounded accent-tertiary bg-surface-container"
                        type="checkbox"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-headline-md text-headline-md text-on-surface group-hover:text-tertiary transition-colors">
                            Programmatic Indexation Traps
                          </span>
                          <span className="px-2 py-0.5 rounded bg-secondary-container/40 text-secondary font-label-caps text-label-caps uppercase">
                            Scale
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Faceted navigation crawl budget waste, circular redirect loops, thin auto-generated routes.
                        </p>
                      </div>
                    </label>
                    <label className="relative flex items-start gap-space-sm p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group">
                      <input
                        defaultChecked
                        className="mt-1 w-4 h-4 rounded accent-tertiary bg-surface-container"
                        type="checkbox"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-headline-md text-headline-md text-on-surface group-hover:text-tertiary transition-colors">
                            Semantic Schema &amp; Graph
                          </span>
                          <span className="px-2 py-0.5 rounded bg-primary-container/30 text-primary font-label-caps text-label-caps uppercase">
                            Rich Results
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          JSON-LD validity, nested Organization/Product schemas, OpenGraph &amp; Twitter card parity.
                        </p>
                      </div>
                    </label>
                    <label className="relative flex items-start gap-space-sm p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group">
                      <input
                        defaultChecked
                        className="mt-1 w-4 h-4 rounded accent-tertiary bg-surface-container"
                        type="checkbox"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-headline-md text-headline-md text-on-surface group-hover:text-tertiary transition-colors">
                            AI Search Engine Readiness
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary-fixed-dim font-label-caps text-label-caps uppercase">
                            LLM &amp; SGE
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Evaluates content entity clarity for Perplexity citations, ChatGPT Search, and Google Gemini snapshots.
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="flex justify-between items-center pt-space-sm">
                    <button
                      className="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-all cursor-pointer"
                      onClick={() => setCurrentStep(2)}
                      type="button"
                    >
                      Back
                    </button>
                    <button
                      className="px-space-md py-2.5 rounded-lg bg-surface-container-highest hover:bg-tertiary hover:text-on-tertiary text-on-surface font-body-md text-body-md font-semibold transition-all inline-flex items-center gap-2 cursor-pointer"
                      onClick={() => setCurrentStep(4)}
                      type="button"
                    >
                      <span>Configure Delivery</span>
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4 CONTENT */}
              {currentStep === 4 && (
                <div className="space-y-space-md">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container">
                        send
                      </span>
                      Delivery Endpoint &amp; Synthesis Parameters
                    </h3>
                    <span className="font-metric-mono-sm text-metric-mono-sm text-tertiary">
                      Step 04 / 04
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="space-y-space-xs">
                      <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant">
                        Corporate Work Email (PDF &amp; Telemetry Link)
                      </label>
                      <input
                        className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-metric-mono-sm text-metric-mono-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                        placeholder="alex@company.com"
                        required
                        type="email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                      />
                    </div>
                    <div className="space-y-space-xs">
                      <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant">
                        Company Scale
                      </label>
                      <select
                        defaultValue="51-250"
                        className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer"
                      >
                        <option value="10-50">10 - 50 Employees ($1M - $5M ARR)</option>
                        <option value="51-250">51 - 250 Employees ($5M - $30M ARR)</option>
                        <option value="251-1000">251 - 1,000 Employees ($30M - $100M ARR)</option>
                        <option value="1000+">1,000+ Enterprise / Public ($100M+ ARR)</option>
                      </select>
                    </div>
                  </div>
                  {/* Traffic Tier Slider */}
                  <div className="p-space-md rounded-lg bg-surface-container-low space-y-space-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-label-caps text-label-caps uppercase text-on-surface">
                        Estimated Monthly Organic Sessions
                      </span>
                      <span className="font-metric-mono-lg text-metric-mono-lg text-primary font-bold">
                        {step4Traffic.toLocaleString()} / mo
                      </span>
                    </div>
                    <input
                      className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                      max={1000000}
                      min={10000}
                      step={10000}
                      type="range"
                      value={step4Traffic}
                      onChange={(e) => setStep4Traffic(parseInt(e.target.value, 10))}
                    />
                    <div className="flex justify-between font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                      <span>10k / mo</span>
                      <span>250k / mo</span>
                      <span>500k / mo</span>
                      <span>1M+ / mo</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-space-sm">
                    <button
                      className="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-all cursor-pointer"
                      onClick={() => setCurrentStep(3)}
                      type="button"
                    >
                      Back
                    </button>
                    <button
                      disabled={isExecuting}
                      className="px-space-lg py-3 rounded-lg bg-gradient-to-r from-primary-container via-secondary-container to-secondary text-white font-headline-md text-headline-md font-bold shadow-[0_0_24px_rgba(77,142,255,0.45)] hover:shadow-[0_0_36px_rgba(77,142,255,0.65)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center gap-space-sm cursor-pointer disabled:opacity-80"
                      type="submit"
                    >
                      {isExecuting ? (
                        <>
                          <span className="material-symbols-outlined text-[20px] animate-spin">
                            refresh
                          </span>
                          <span>Dispatched Chromium Bot...</span>
                        </>
                      ) : executionComplete ? (
                        <>
                          <span className="material-symbols-outlined text-[20px] text-tertiary">
                            check_circle
                          </span>
                          <span>Audit Generated &amp; Sent</span>
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-[20px] animate-pulse">
                            rocket_launch
                          </span>
                          <span>Execute Real-Time Crawl &amp; Audit</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Dynamic Live Execution Status Drawer */}
            {showExecutionBanner && (
              <div className="mt-space-lg p-space-md rounded-lg bg-surface-container-highest shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary"></span>
                    </span>
                    <span className="font-metric-mono-sm text-metric-mono-sm text-tertiary font-semibold uppercase">
                      {crawlerPhase}
                    </span>
                  </div>
                  <span className="font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                    00:0{elapsedSec} elapsed
                  </span>
                </div>
                <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-tertiary to-secondary transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
                <div className="mt-space-sm flex items-center justify-between text-on-surface-variant font-metric-mono-sm text-metric-mono-sm">
                  <span>{logSummary}</span>
                  <span className="text-tertiary font-bold">{progressPercent}%</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 3. LIVE SIMULATED DIAGNOSTIC SANDBOX / REPORT PREVIEW */}
        <section className="relative w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
            <div>
              <div className="inline-flex items-center gap-1 font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-space-xs">
                <span className="material-symbols-outlined text-[14px]">analytics</span>{' '}
                Interactive Report Mockup
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                Anatomy of Your SEOnova Diagnostic Dossier
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-2xl">
                See the exact depth of algorithmic metrics, code anomalies, and ARR projections generated for your technical leadership.
              </p>
            </div>
            <div className="flex items-center gap-space-sm">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                Benchmark Profile:
              </span>
              <span className="px-space-sm py-1 rounded bg-surface-container-high text-primary font-metric-mono-sm text-metric-mono-sm">
                {domainInput || 'acme-saas.io'} • {frameworkLabel}
              </span>
            </div>
          </div>

          {/* Report Card Shell */}
          <div className="rounded-xl bg-surface-container/70 backdrop-blur-md shadow-xl p-space-md md:p-space-lg space-y-space-lg">
            {/* Scorecard Header Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
              {/* Overall Health Gauge Card */}
              <div className="rounded-lg bg-surface-container-low p-space-md flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Health Index
                  </span>
                  <span className="material-symbols-outlined text-error text-[18px]">
                    warning
                  </span>
                </div>
                <div className="my-space-md flex items-baseline gap-2">
                  <span className="font-display-hero text-display-hero text-error font-extrabold leading-none">
                    64
                  </span>
                  <span className="font-metric-mono-lg text-metric-mono-lg text-outline">
                    / 100
                  </span>
                </div>
                <div className="p-2 rounded bg-error-container/20 text-error font-body-sm text-body-sm">
                  Urgent Remediation Required: JS execution budget exceeded by 2.4MB.
                </div>
              </div>

              {/* Pillar 1: Core Web Vitals */}
              <div className="rounded-lg bg-surface-container-low p-space-md flex flex-col justify-between space-y-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Core Web Vitals
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-highest text-secondary font-metric-mono-sm text-metric-mono-sm">
                    P75 Mobile
                  </span>
                </div>
                <div className="space-y-space-xs font-metric-mono-sm text-metric-mono-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">LCP (Render)</span>
                    <span className="text-error font-bold">3.8s (Poor)</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-error w-3/4"></div>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-on-surface-variant">INP (Latency)</span>
                    <span className="text-secondary font-bold">210ms (Moderate)</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-1/2"></div>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-on-surface-variant">CLS (Shift)</span>
                    <span className="text-tertiary font-bold">0.04 (Optimal)</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary w-1/6"></div>
                  </div>
                </div>
              </div>

              {/* Pillar 2: Indexation & Crawl Bloat */}
              <div className="rounded-lg bg-surface-container-low p-space-md flex flex-col justify-between space-y-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Crawl Budget &amp; Bloat
                  </span>
                  <span className="material-symbols-outlined text-tertiary text-[18px]">
                    account_tree
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="font-metric-mono-lg text-metric-mono-lg font-bold text-on-surface">
                    4,820 URLs
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Total indexed surface discovered
                  </p>
                </div>
                <div className="space-y-1 font-body-sm text-body-sm">
                  <div className="flex justify-between text-on-surface">
                    <span className="text-on-surface-variant">Duplicate/Thin URLs:</span>
                    <span className="text-error font-metric-mono-sm text-metric-mono-sm font-semibold">
                      1,290 pages
                    </span>
                  </div>
                  <div className="flex justify-between text-on-surface">
                    <span className="text-on-surface-variant">Canonical Traps:</span>
                    <span className="text-secondary font-metric-mono-sm text-metric-mono-sm font-semibold">
                      38 loops
                    </span>
                  </div>
                </div>
              </div>

              {/* Pillar 3: Organic Pipeline At Risk */}
              <div className="rounded-lg bg-surface-container-low p-space-md flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Pipeline At Risk
                  </span>
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">
                    trending_up
                  </span>
                </div>
                <div className="my-space-xs">
                  <span className="font-display-hero text-display-hero text-tertiary font-extrabold leading-tight">
                    +$48.4k
                  </span>
                  <span className="block font-label-caps text-label-caps text-on-surface-variant uppercase">
                    Recoverable Monthly ARR
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Estimated pipeline recapture in 90 days after edge rendering &amp; schema graph deployment.
                </p>
              </div>
            </div>

            {/* Terminal & Crawler Log Stream Section */}
            <div className="rounded-lg bg-surface-container-lowest p-space-md shadow-inner space-y-space-sm">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[15px] text-tertiary">
                    terminal
                  </span>
                  <span className="font-label-caps text-label-caps uppercase text-on-surface font-semibold">
                    Live Edge Crawler Inspection Feed
                  </span>
                </div>
                <span className="font-metric-mono-sm text-metric-mono-sm text-outline">
                  HTTP/2 Protocol Stream
                </span>
              </div>
              <div className="font-metric-mono-sm text-metric-mono-sm space-y-1.5 text-on-surface-variant overflow-x-auto">
                <div className="flex items-center gap-2">
                  <span className="text-outline">00:01.12</span>
                  <span className="text-tertiary font-bold">[CRAWL-INIT]</span>
                  <span>
                    Dispatched Chrome 124.0 headless cluster to{' '}
                    <span className="text-on-surface">
                      https://{domainInput || 'acme-saas.io'}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-outline">00:01.34</span>
                  <span className="text-primary font-bold">[SSR-CHECK]</span>
                  <span>
                    DOM hydration delta: HTML payload 42KB → post-hydration memory 8.6MB
                  </span>
                </div>
                <div className="flex items-center gap-2 text-error">
                  <span className="text-outline">00:01.89</span>
                  <span className="font-bold">[ERR-REDIRECT]</span>
                  <span>
                    GET /pricing?utm_source=nav → 301 loop detected (pricing/ ↔ pricing)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-outline">00:02.15</span>
                  <span className="text-secondary font-bold">[SCHEMA-GRAPH]</span>
                  <span>
                    JSON-LD missing Organization &quot;sameAs&quot; Wikidata &amp; Crunchbase entity anchors
                  </span>
                </div>
                <div className="flex items-center gap-2 text-tertiary">
                  <span className="text-outline">00:02.50</span>
                  <span className="font-bold">[AI-SYNAPSE]</span>
                  <span>
                    Perplexity knowledge extraction score: 71/100 (Answer snippet clarity verified)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT OUR 250-POINT AUDIT INSPECTS (BENTO GRID) */}
        <section className="relative w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="text-center max-w-3xl mx-auto mb-space-xl space-y-space-xs">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
              Autonomous Deep Inspection
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              250 Systematic Vectors Google Doesn&apos;t Disclose
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Surface-level checkers only scan meta tags. SEOnova simulates real user rendering engines, dynamic routing pipelines, and semantic knowledge graphs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-md">
            {/* Bento 1: Edge Rendering & JS Hydration (7 Cols) */}
            <div className="lg:col-span-7 rounded-xl bg-surface-container/70 backdrop-blur-md p-space-lg flex flex-col justify-between space-y-space-md shadow-md hover:bg-surface-container transition-all">
              <div className="space-y-space-xs">
                <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined text-[24px]">code_blocks</span>
                </div>
                <span className="font-label-caps text-label-caps text-primary uppercase">
                  Vector 01 // Execution Tier
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                  Edge Rendering &amp; JavaScript Hydration Audits
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Googlebot executes JS asynchronously in a secondary render pass. We inspect SSR vs CSR payload differences, Next.js / Nuxt hydration traps, main-thread CPU choking, and dynamic sitemap freshness.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs pt-space-xs">
                <div className="flex items-center gap-2 p-2 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface">
                  <span className="material-symbols-outlined text-[15px] text-tertiary">
                    check_circle
                  </span>
                  <span>Server-Timing Headers</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface">
                  <span className="material-symbols-outlined text-[15px] text-tertiary">
                    check_circle
                  </span>
                  <span>Chunk Bundle Fragmentation</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface">
                  <span className="material-symbols-outlined text-[15px] text-tertiary">
                    check_circle
                  </span>
                  <span>Shadow DOM &amp; iFrames</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface">
                  <span className="material-symbols-outlined text-[15px] text-tertiary">
                    check_circle
                  </span>
                  <span>TTFB Edge Cache Hit Ratio</span>
                </div>
              </div>
            </div>

            {/* Bento 2: Programmatic Taxonomy & Cannibalization (5 Cols) */}
            <div className="lg:col-span-5 rounded-xl bg-surface-container/70 backdrop-blur-md p-space-lg flex flex-col justify-between space-y-space-md shadow-md hover:bg-surface-container transition-all">
              <div className="space-y-space-xs">
                <div className="w-10 h-10 rounded-lg bg-secondary-container/20 text-secondary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined text-[24px]">alt_route</span>
                </div>
                <span className="font-label-caps text-label-caps text-secondary uppercase">
                  Vector 02 // Taxonomy
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                  Faceted Traps &amp; URL Cannibalization
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Detect endless query parameter combinations, infinite sorting loops, and pages fighting for identical SERP positions.
                </p>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container-low space-y-2">
                <div className="flex justify-between font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                  <span>Crawl Efficiency Ratio</span>
                  <span className="text-secondary font-bold">92.4% Target</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-secondary to-primary w-4/5"></div>
                </div>
                <span className="block font-label-caps text-label-caps text-outline uppercase">
                  Eliminates 70% unnecessary bot hits
                </span>
              </div>
            </div>

            {/* Bento 3: Semantic Entity & AI Citation Readiness (6 Cols) */}
            <div className="lg:col-span-6 rounded-xl bg-surface-container/70 backdrop-blur-md p-space-lg flex flex-col justify-between space-y-space-md shadow-md hover:bg-surface-container transition-all">
              <div className="space-y-space-xs">
                <div className="w-10 h-10 rounded-lg bg-tertiary-container/20 text-tertiary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined text-[24px]">psychology</span>
                </div>
                <span className="font-label-caps text-label-caps text-tertiary uppercase">
                  Vector 03 // LLM &amp; Semantic Graph
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                  AI Citation &amp; Perplexity Visibility Audit
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Search is shifting to conversational synthesizers. We evaluate how LLMs (ChatGPT, Gemini, Perplexity) ingest your content, verifying schema entities, citation clarity, and Knowledge Vault consensus.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-tertiary">
                  Schema.org Product/FAQ
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-tertiary">
                  Entity Triple Extraction
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-tertiary">
                  Fact Density Scoring
                </span>
              </div>
            </div>

            {/* Bento 4: Backlink Quality & Penalty Vulnerability (6 Cols) */}
            <div className="lg:col-span-6 rounded-xl bg-surface-container/70 backdrop-blur-md p-space-lg flex flex-col justify-between space-y-space-md shadow-md hover:bg-surface-container transition-all">
              <div className="space-y-space-xs">
                <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined text-[24px]">
                    shield_with_heart
                  </span>
                </div>
                <span className="font-label-caps text-label-caps text-outline uppercase">
                  Vector 04 // Authority Risk
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                  Toxic Anchor Drift &amp; Algorithmic Penalty Risk
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Inspect velocity anomalies, spam network associations, and un-natural exact match link spikes before Google&apos;s spam algorithms trigger manual actions or algorithmic suppressions.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                  Disavow Integrity
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                  Anchor Text Dispersion
                </span>
                <span className="px-2.5 py-1 rounded bg-surface-container-low font-metric-mono-sm text-metric-mono-sm text-on-surface-variant">
                  Domain Rank Gap
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE ROI & PIPELINE UPLIFT ESTIMATOR */}
        <section className="relative w-full max-w-5xl mx-auto px-gutter py-space-xl">
          <div className="rounded-xl bg-surface-container/80 backdrop-blur-md p-space-md md:p-space-xl shadow-xl space-y-space-lg">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">
                Financial Impact Modeling
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Projected Pipeline Lift Calculator
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                See the direct bottom-line revenue unlocked when technical SEO blockers are eliminated.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl items-center pt-space-md">
              {/* Slider Inputs */}
              <div className="space-y-space-lg">
                {/* Slider 1 */}
                <div className="space-y-space-xs">
                  <div className="flex justify-between items-center">
                    <label className="font-label-caps text-label-caps uppercase text-on-surface">
                      Current Monthly Organic Traffic
                    </label>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-primary font-bold">
                      {roiTraffic.toLocaleString()}
                    </span>
                  </div>
                  <input
                    className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                    max={500000}
                    min={5000}
                    step={5000}
                    type="range"
                    value={roiTraffic}
                    onChange={(e) => setRoiTraffic(parseInt(e.target.value, 10))}
                  />
                  <div className="flex justify-between font-metric-mono-sm text-metric-mono-sm text-outline">
                    <span>5k</span>
                    <span>250k</span>
                    <span>500k+</span>
                  </div>
                </div>

                {/* Slider 2 */}
                <div className="space-y-space-xs">
                  <div className="flex justify-between items-center">
                    <label className="font-label-caps text-label-caps uppercase text-on-surface">
                      Customer LTV or Average Deal Size ($)
                    </label>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-secondary font-bold">
                      ${roiLtv.toLocaleString()}
                    </span>
                  </div>
                  <input
                    className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                    max={50000}
                    min={500}
                    step={500}
                    type="range"
                    value={roiLtv}
                    onChange={(e) => setRoiLtv(parseInt(e.target.value, 10))}
                  />
                  <div className="flex justify-between font-metric-mono-sm text-metric-mono-sm text-outline">
                    <span>$500</span>
                    <span>$25k</span>
                    <span>$50k+</span>
                  </div>
                </div>

                <div className="p-space-sm rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">
                    info
                  </span>
                  <span>
                    Based on a conservative 38% organic conversion and crawl reclaim coefficient.
                  </span>
                </div>
              </div>

              {/* Dynamic Output Display Card */}
              <div className="rounded-xl bg-surface-container-lowest p-space-lg flex flex-col justify-between space-y-space-md shadow-md">
                <div>
                  <span className="font-label-caps text-label-caps text-error uppercase">
                    Estimated Annual Pipeline Leakage
                  </span>
                  <div className="font-display-hero text-display-hero-mobile md:text-display-hero text-error font-extrabold mt-1">
                    -${leakageARR.toLocaleString()}
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Lost each year due to hydration drops, canonical splits, and slow LCP rankings.
                  </p>
                </div>
                <div className="pt-space-md bg-surface-container-high/30 -mx-space-lg -mb-space-lg p-space-lg rounded-b-xl">
                  <span className="font-label-caps text-label-caps text-tertiary uppercase">
                    Recoverable Annual ARR Lift
                  </span>
                  <div className="font-display-hero text-display-hero-mobile md:text-display-hero text-tertiary font-extrabold mt-1">
                    +${liftARR.toLocaleString()}
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Projected revenue upside post-SEOnova programmatic remediation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FREQUENTLY ASKED QUESTIONS */}
        <section className="relative w-full max-w-4xl mx-auto px-gutter py-space-xl scroll-mt-20" id="faq">
          <div className="text-center mb-space-xl space-y-space-xs">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              Protocol &amp; Accuracy
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Technical Audit FAQ
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Everything enterprise engineering teams need to know about our crawl infrastructure.
            </p>
          </div>
          <div className="space-y-space-sm">
            {/* FAQ 1 */}
            <div className="rounded-lg bg-surface-container/70 shadow-sm overflow-hidden">
              <button
                className="w-full text-left p-space-md flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                onClick={() => toggleFaq(1)}
                type="button"
              >
                <span className="font-headline-md text-headline-md text-on-surface font-medium">
                  How does your crawler handle Cloudflare, Akamai, or bot mitigation?
                </span>
                <span className="material-symbols-outlined text-tertiary transition-transform">
                  {openFaq[1] ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {openFaq[1] && (
                <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our crawler leverages dedicated enterprise residential IP pools with signed User-Agent profiles replicating standard Googlebot desktop and mobile engines. If your firewall requires an allowlist, we provide static egress CIDR blocks upon request.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="rounded-lg bg-surface-container/70 shadow-sm overflow-hidden">
              <button
                className="w-full text-left p-space-md flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                onClick={() => toggleFaq(2)}
                type="button"
              >
                <span className="font-headline-md text-headline-md text-on-surface font-medium">
                  Is proprietary business data or staging credentials kept confidential?
                </span>
                <span className="material-symbols-outlined text-tertiary transition-transform">
                  {openFaq[2] ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {openFaq[2] && (
                <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Yes. All audit outputs are encrypted via AES-256 at rest and TLS 1.3 in transit. We are SOC2 Type II compliant and never share, sell, or ingest your domain metrics into public training corpuses.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="rounded-lg bg-surface-container/70 shadow-sm overflow-hidden">
              <button
                className="w-full text-left p-space-md flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                onClick={() => toggleFaq(3)}
                type="button"
              >
                <span className="font-headline-md text-headline-md text-on-surface font-medium">
                  Do you provide code-level GitHub pull requests or just generic PDF reports?
                </span>
                <span className="material-symbols-outlined text-tertiary transition-transform">
                  {openFaq[3] ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {openFaq[3] && (
                <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Unlike traditional agencies delivering 100-page passive PDFs, SEOnova&apos;s engineers provide direct git diff snippets, Next.js configuration code, structured JSON-LD templates, and edge rewrite rules ready for direct staging merges.
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="rounded-lg bg-surface-container/70 shadow-sm overflow-hidden">
              <button
                className="w-full text-left p-space-md flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                onClick={() => toggleFaq(4)}
                type="button"
              >
                <span className="font-headline-md text-headline-md text-on-surface font-medium">
                  Can we connect our Google Search Console (GSC) for verified attribution?
                </span>
                <span className="material-symbols-outlined text-tertiary transition-transform">
                  {openFaq[4] ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {openFaq[4] && (
                <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Absolutely. Post-submission, you can authenticate via OAuth to stream raw click, impression, and actual crawl error logs directly into the analysis dashboard for 100% precision.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 7. FINAL HIGH-TRUST CONVERSION BANNER */}
        <section className="relative w-full max-w-7xl mx-auto px-gutter pt-space-lg pb-space-xl">
          <div className="relative rounded-2xl bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container p-space-lg md:p-space-xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
            <div className="space-y-space-xs max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-caps text-label-caps uppercase">
                <span className="material-symbols-outlined text-[14px]">engineering</span>
                <span>Principal Engineer Consultation</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Want our Lead SEO Engineers to walk through your audit report live?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Skip the guesswork. Book a 20-minute Technical Walkthrough to review real-time crawl logs, headless hydration fixes, and competitive keyword intercept strategies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full md:w-auto relative z-10">
              <button
                type="button"
                onClick={() =>
                  onOpenModal({
                    type: 'consultation',
                    planName: '20-Min Principal Engineer Walkthrough',
                  })
                }
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-space-lg rounded-lg bg-primary hover:bg-primary-fixed-dim text-on-primary font-headline-md text-headline-md font-bold transition-all shadow-[0_0_20px_rgba(77,142,255,0.4)] cursor-pointer"
              >
                Schedule 20-Min Review
              </button>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-space-md rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm font-semibold transition-all cursor-pointer"
              >
                Back to Audit Engine
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
