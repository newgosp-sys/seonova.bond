import React, { useState } from 'react';
import { NavigationProps } from '../types';

export const ServicesPage: React.FC<NavigationProps> = ({ onNavigate, onOpenModal }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const middlewareCode = `import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Priority Bot Detection & Edge HTML Cache Routing
const BOT_UA = /Googlebot|bingbot|DuckDuckBot/i;

export function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent') || '';
  const url = req.nextUrl.clone();

  if (BOT_UA.test(ua)) {
    // Route to Edge Cached SSR Layer with Inlined Schema
    url.pathname = \`/api/edge-ssr\${url.pathname}\`;
    const res = NextResponse.rewrite(url);
    res.headers.set('X-SEOnova-Bot-Optimization', 'Edge-Synthesized');
    res.headers.set('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=3600');
    return res;
  }
  return NextResponse.next();
}`;

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(middlewareCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden pb-space-xl">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#31353f_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary-container/15 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="w-full max-w-7xl mx-auto px-gutter relative z-10 pt-space-lg">
          <nav className="flex items-center gap-space-xs text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider mb-space-md">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-primary transition-colors uppercase cursor-pointer"
            >
              Home
            </button>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-tertiary">Services Infrastructure</span>
          </nav>
          <div className="flex flex-col max-w-4xl">
            <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high/80 text-primary font-label-caps text-label-caps uppercase tracking-wider max-w-max shadow-sm mb-space-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              ENGINEERING-LED SEARCH INFRASTRUCTURE
            </div>
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero tracking-tight text-on-surface mb-space-md">
              Full-Stack SEO Systems Built for Modern Tech Stacks
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mb-space-lg">
              From Next.js dynamic edge rendering and programmatic indexation architecture to high-tier editorial digital PR. We turn complex web infrastructure into category-defining organic moats.
            </p>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <a
                className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-metric-mono-sm text-metric-mono-sm transition-all shadow-sm"
                href="#tech-cwv"
              >
                <span className="text-tertiary">01.</span> Technical &amp; Core Web Vitals
              </a>
              <a
                className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-metric-mono-sm text-metric-mono-sm transition-all shadow-sm"
                href="#programmatic"
              >
                <span className="text-tertiary">02.</span> Programmatic Architecture
              </a>
              <a
                className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-metric-mono-sm text-metric-mono-sm transition-all shadow-sm"
                href="#digital-pr"
              >
                <span className="text-tertiary">03.</span> High-Authority Digital PR
              </a>
              <a
                className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-metric-mono-sm text-metric-mono-sm transition-all shadow-sm"
                href="#semantic-kg"
              >
                <span className="text-tertiary">04.</span> Semantic Entity &amp; KG
              </a>
              <a
                className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-metric-mono-sm text-metric-mono-sm transition-all shadow-sm"
                href="#plans"
              >
                <span className="text-tertiary">05.</span> Engagement Models
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Stat Bar */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="w-full max-w-7xl mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-space-md">
          <div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
            <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-tertiary">
              99.8%
            </span>
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant mt-1">
              Crawl Budget Efficiency
            </span>
          </div>
          <div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
            <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-primary">
              &lt;84ms
            </span>
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant mt-1">
              Edge Cache TTFB Guaranteed
            </span>
          </div>
          <div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
            <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-secondary">
              3.4M+
            </span>
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant mt-1">
              Programmatic Pages Indexed
            </span>
          </div>
          <div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
            <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-tertiary-fixed">
              DR 78+
            </span>
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant mt-1">
              Median Placement Authority
            </span>
          </div>
        </div>
      </section>

      {/* PILLAR 01 */}
      <section className="w-full py-space-xl scroll-mt-24" id="tech-cwv">
        <div className="w-full max-w-7xl mx-auto px-gutter">
          <div className="flex items-center justify-between mb-space-md">
            <div className="flex items-center gap-space-xs">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[24px]">terminal</span>
              </div>
              <div>
                <span className="font-label-caps text-label-caps uppercase text-tertiary tracking-widest block">
                  PILLAR 01
                </span>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                  Technical &amp; Core Web Vitals Architecture
                </h2>
              </div>
            </div>
            <span className="hidden md:inline-flex px-3 py-1 rounded-full bg-error-container/30 text-error font-label-caps text-label-caps uppercase tracking-wider font-semibold">
              CRITICAL INFRASTRUCTURE
            </span>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-space-lg">
            Eliminate JavaScript hydration overhead, decouple edge rendering pipelines, and ensure Googlebot encounters pure, pre-rendered semantic HTML with sub-100ms TTFB.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm">
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-space-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">speed</span>
                  Sub-150ms INP &amp; Hydration Elimination
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  We audit raw trace files, profile main-thread blocking long tasks, and migrate unneeded client scripts to background web workers using Partytown or Next.js worker threads.
                </p>
                <div className="grid grid-cols-2 gap-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface-container">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      LCP Threshold
                    </span>
                    <p className="font-metric-mono-lg text-metric-mono-lg text-on-surface font-semibold">
                      &lt; 1.2s
                    </p>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container">
                    <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      CLS Ceiling
                    </span>
                    <p className="font-metric-mono-lg text-metric-mono-lg text-on-surface font-semibold">
                      0.002
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm">
                <h4 className="font-label-caps text-label-caps uppercase text-tertiary tracking-wider mb-space-sm">
                  Core Engineering Deliverables
                </h4>
                <ul className="space-y-space-sm font-body-md text-body-md text-on-surface">
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Direct GitHub Pull Requests with automated Cypress &amp; Lighthouse CI scoring
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Full server log file ingestion pipelines via Datadog, Cloudflare, or AWS Athena
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Edge redirect engine with zero performance degradation across 500k+ routing rules
                    </span>
                  </li>
                  <li className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5">
                      check_circle
                    </span>
                    <span>
                      Faceted navigation canonicalization using dynamic hash-masking patterns
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-md">
                <div className="flex items-center justify-between mb-space-sm bg-surface-container px-space-sm py-1.5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-error"></span>
                    <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                    <span className="w-3 h-3 rounded-full bg-tertiary"></span>
                    <span className="font-metric-mono-sm text-metric-mono-sm text-on-surface-variant ml-2">
                      middleware.edge.ts
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-caps text-label-caps uppercase text-tertiary">
                      Next.js 14 Runtime
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface font-metric-mono-sm text-[11px] cursor-pointer"
                    >
                      {copiedCode ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
                <pre className="font-metric-mono-sm text-metric-mono-sm text-on-surface-variant overflow-x-auto p-space-xs leading-relaxed">
                  <code>
                    <span className="text-tertiary">import</span> {'{ NextResponse }'}{' '}
                    <span className="text-tertiary">from</span>{' '}
                    <span className="text-primary-fixed-dim">'next/server'</span>;{'\n'}
                    <span className="text-tertiary">import type</span> {'{ NextRequest }'}{' '}
                    <span className="text-tertiary">from</span>{' '}
                    <span className="text-primary-fixed-dim">'next/server'</span>;{'\n\n'}
                    <span className="text-on-surface-variant/60">
                      // Priority Bot Detection &amp; Edge HTML Cache Routing
                    </span>
                    {'\n'}
                    <span className="text-tertiary">const</span> BOT_UA ={' '}
                    <span className="text-primary-fixed">/Googlebot|bingbot|DuckDuckBot/i</span>;
                    {'\n\n'}
                    <span className="text-tertiary">export function</span>{' '}
                    <span className="text-primary font-bold">middleware</span>(req: NextRequest) {'{'}
                    {'\n'}
                    {'  '}
                    <span className="text-tertiary">const</span> ua = req.headers.get(
                    <span className="text-primary-fixed-dim">'user-agent'</span>) ||{' '}
                    <span className="text-primary-fixed-dim">''</span>;{'\n'}
                    {'  '}
                    <span className="text-tertiary">const</span> url = req.nextUrl.clone();{'\n\n'}
                    {'  '}
                    <span className="text-tertiary">if</span> (BOT_UA.test(ua)) {'{\n'}
                    {'    '}
                    <span className="text-on-surface-variant/60">
                      // Route to Edge Cached SSR Layer with Inlined Schema
                    </span>
                    {'\n'}
                    {'    '}url.pathname ={' '}
                    <span className="text-primary-fixed-dim">
                      {`\`/api/edge-ssr\${url.pathname}\``}
                    </span>
                    ;{'\n'}
                    {'    '}
                    <span className="text-tertiary">const</span> res = NextResponse.rewrite(url);
                    {'\n'}
                    {'    '}res.headers.set(
                    <span className="text-primary-fixed-dim">'X-SEOnova-Bot-Optimization'</span>,{' '}
                    <span className="text-primary-fixed-dim">'Edge-Synthesized'</span>);{'\n'}
                    {'    '}res.headers.set(
                    <span className="text-primary-fixed-dim">'Cache-Control'</span>,{' '}
                    <span className="text-primary-fixed-dim">
                      'public, s-maxage=86400, stale-while-revalidate=3600'
                    </span>
                    );{'\n'}
                    {'    '}
                    <span className="text-tertiary">return</span> res;{'\n'}
                    {'  }\n'}
                    {'  '}
                    <span className="text-tertiary">return</span> NextResponse.next();{'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>

              <div className="h-48 rounded-xl bg-surface-container overflow-hidden relative shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  alt="Edge Telemetry Suite Server Dashboard"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1Or75AGqdmCdmFF9kGf4J7HZolY5xlx3U33WFjVyHF0wB3_bTHmDHV86xPNBi0-OEWnRrjwaMW-KFT_kLMXgem-SnTGORu617qZZYsd7_0sj7x5Qhr4bnll33lp5aHFRVtZj1GLA5W4km6qUAsZfG7jcvHIOy88EAwE9DVzmUNs4F2EYIoo11vXa7MBG3eXj0-4vzZSmJ0hiGxshYwcezzFZ1ul32jXT_ekAnLe0OGYZIGsfT4Js8sw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent p-space-md flex items-end">
                  <div>
                    <p className="font-label-caps text-label-caps text-tertiary uppercase">
                      Edge Telemetry Suite
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface">
                      Live bot inspection &amp; canonical routing at 0.4ms latency overhead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 02 */}
      <section
        className="w-full py-space-xl bg-surface-container-lowest scroll-mt-24"
        id="programmatic"
      >
        <div className="w-full max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col mb-space-lg">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-1">
              PILLAR 02 • EXPONENTIAL SCALE
            </span>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
              Topical Authority at Thousand-Page Scale
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-space-xs">
              Stop writing manual one-off blog posts. We build programmatic engines using your proprietary data assets, database entities, and semantic taxonomies to capture thousands of high-intent long-tail keywords.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm mb-space-lg">
            <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div>
                <span className="font-label-caps text-label-caps text-tertiary uppercase">
                  Step 01
                </span>
                <h4 className="font-headline-md text-headline-md font-bold text-on-surface mt-space-xs">
                  Data Models
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                  Ingest Postgres, BigQuery, or API feeds into normalized semantic entities.
                </p>
              </div>
              <span className="material-symbols-outlined text-tertiary text-[28px] mt-space-md">
                database
              </span>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div>
                <span className="font-label-caps text-label-caps text-tertiary uppercase">
                  Step 02
                </span>
                <h4 className="font-headline-md text-headline-md font-bold text-on-surface mt-space-xs">
                  Template Matrix
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                  Design modular blocks preventing boilerplate footprint penalties.
                </p>
              </div>
              <span className="material-symbols-outlined text-primary text-[28px] mt-space-md">
                view_quilt
              </span>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div>
                <span className="font-label-caps text-label-caps text-tertiary uppercase">
                  Step 03
                </span>
                <h4 className="font-headline-md text-headline-md font-bold text-on-surface mt-space-xs">
                  Edge Rendering
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                  Instant compilation via Next.js ISR, Cloudflare Workers, or Astro builds.
                </p>
              </div>
              <span className="material-symbols-outlined text-secondary text-[28px] mt-space-md">
                bolt
              </span>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div>
                <span className="font-label-caps text-label-caps text-tertiary uppercase">
                  Step 04
                </span>
                <h4 className="font-headline-md text-headline-md font-bold text-on-surface mt-space-xs">
                  Crawl Queue
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                  Dynamic 50k-chunked XML sitemaps mapped to index ping endpoints.
                </p>
              </div>
              <span className="material-symbols-outlined text-tertiary-fixed text-[28px] mt-space-md">
                hub
              </span>
            </div>
            <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div>
                <span className="font-label-caps text-label-caps text-tertiary uppercase">
                  Step 05
                </span>
                <h4 className="font-headline-md text-headline-md font-bold text-on-surface mt-space-xs">
                  Internal Mesh
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                  Automated PageRank mesh routing authority directly to money pages.
                </p>
              </div>
              <span className="material-symbols-outlined text-tertiary text-[28px] mt-space-md">
                alt_route
              </span>
            </div>
          </div>

          <div className="p-space-lg rounded-xl bg-surface-container-high grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div>
              <h4 className="font-headline-md text-headline-md font-semibold text-on-surface mb-space-xs">
                Zero-Fluff Synthesis
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                We prevent low-quality AI content penalties by anchoring every generated page to real tabular data, statistics, and verifiable proprietary numbers.
              </p>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-semibold text-on-surface mb-space-xs">
                Intent De-duplication
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Strict SERP clustering scripts group overlapping keywords, ensuring you never launch pages that cannibalize one another.
              </p>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md font-semibold text-on-surface mb-space-xs">
                Adaptive Breadcrumbs
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Semantic, dynamic schema-backed breadcrumb paths establishing deep topical authority vectors visible to Google's semantic parsers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 03 */}
      <section className="w-full py-space-xl scroll-mt-24" id="digital-pr">
        <div className="w-full max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col lg:flex-row gap-space-xl items-center">
            <div className="w-full lg:w-1/2 flex flex-col">
              <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest mb-1">
                PILLAR 03 • WHITE-HAT EDITORIAL VELOCITY
              </span>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-space-md">
                Earn Links from Bloomberg, TechCrunch, Forbes &amp; Category Leaders
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-md">
                No link farms. No PBNs. No paid sponsored placements that get demoted during core spam updates. We engineer proprietary industry benchmark reports that journalists love citing as primary sources.
              </p>
              <div className="space-y-space-sm mb-space-lg">
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                  <span className="font-body-md text-body-md text-on-surface font-medium">
                    Proprietary Data-Led Studies
                  </span>
                  <span className="font-metric-mono-sm text-metric-mono-sm text-tertiary">
                    Custom Research Desk
                  </span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                  <span className="font-body-md text-body-md text-on-surface font-medium">
                    Minimum Placement Metric
                  </span>
                  <span className="font-metric-mono-sm text-metric-mono-sm text-primary">
                    DR 74+ &amp; Real Traffic &gt; 100k
                  </span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                  <span className="font-body-md text-body-md text-on-surface font-medium">
                    Journalist Relationship Desk
                  </span>
                  <span className="font-metric-mono-sm text-metric-mono-sm text-secondary">
                    Tech, B2B, Finance &amp; E-commerce
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-md">
                <button
                  type="button"
                  onClick={() => onNavigate('case-studies')}
                  className="inline-flex items-center justify-center h-10 px-space-md rounded-lg bg-gradient-to-r from-primary-container to-secondary-container text-white font-body-sm text-body-sm font-semibold hover:shadow-lg transition-all cursor-pointer"
                >
                  Request PR Case Studies
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-space-md">
              <div className="h-64 rounded-xl bg-surface-container overflow-hidden shadow-md relative">
                <img
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  alt="Digital PR Newsroom and Finance Terminal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGR7ta_mUI1n2eJC7du-PaZJPththKRP4Jc_3XCq4OQzwSlW7E7Egi0HtuHQyg8DWMFwoaiLNHSWdNYAZKsZX8dVFU5lGE6Y2e0dCvXcwUfKmyGCVncLI49Ta1p1QBhTAlnhbhZp7Lnb65Tfik43FVhZzkzFwD851pEqKvxqIvQTGOL9Sel8vYNr9FxBy6Q0IO-qDfb2lC07h35-zcmx7XtbWg3A4rpi2PirkKenn74Q4rCGnXOAexGA"
                />
                <div className="absolute inset-0 bg-surface-container-lowest/30 backdrop-blur-[2px]"></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
                <div className="p-space-md rounded-lg bg-surface-container text-center flex flex-col justify-center">
                  <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-on-surface">
                    DR 91
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
                    Tier-1 Tech
                  </span>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container text-center flex flex-col justify-center">
                  <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-on-surface">
                    DR 89
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
                    Financial Press
                  </span>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container text-center flex flex-col justify-center">
                  <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-on-surface">
                    DR 84
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
                    VC Portals
                  </span>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container text-center flex flex-col justify-center">
                  <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-tertiary">
                    100%
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">
                    Do-Follow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 04 */}
      <section
        className="w-full py-space-xl bg-surface-container-lowest scroll-mt-24"
        id="semantic-kg"
      >
        <div className="w-full max-w-7xl mx-auto px-gutter">
          <div className="max-w-3xl mb-space-lg">
            <span className="font-label-caps text-label-caps uppercase text-tertiary tracking-widest mb-1">
              PILLAR 04 • SEMANTIC REASONING
            </span>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
              Semantic Knowledge Graph Domination
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Help LLM search engines (Perplexity, ChatGPT Search, Gemini) and Google Knowledge Vault recognize your founders, brands, and products as authoritative distinct entities with zero ambiguity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-tertiary mb-space-md">
                  <span className="material-symbols-outlined text-[20px]">account_tree</span>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-space-xs">
                  Nested JSON-LD Engineering
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Deeply connected schema markup integrating Organization, Person, ItemList, ProductGroup, and TechArticle entities with explicit{' '}
                  <code className="font-metric-mono-sm text-tertiary">sameAs</code> references to Wikidata and Crunchbase.
                </p>
              </div>
              <div className="mt-space-md pt-space-md">
                <span className="font-label-caps text-label-caps text-primary uppercase">
                  Zero Validation Errors
                </span>
              </div>
            </div>

            <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                  <span className="material-symbols-outlined text-[20px]">share_location</span>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-space-xs">
                  Wikidata Disambiguation
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We architect and monitor semantic nodes on independent knowledge bases to establish undisputed entity claims, unlocking branded search knowledge panels in SERP.
                </p>
              </div>
              <div className="mt-space-md pt-space-md">
                <span className="font-label-caps text-label-caps text-primary uppercase">
                  Knowledge Graph Claiming
                </span>
              </div>
            </div>

            <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                </div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-space-xs">
                  AI Search Engine Readiness
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Optimizing content formatting, clear declarative fact triples, and contextual citations specifically parsed by AI overview models and Retrieval-Augmented Generation (RAG) indexes.
                </p>
              </div>
              <div className="mt-space-md pt-space-md">
                <span className="font-label-caps text-label-caps text-primary uppercase">
                  RAG Optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS / PLANS */}
      <section className="w-full py-space-xl scroll-mt-24" id="plans">
        <div className="w-full max-w-7xl mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <span className="font-label-caps text-label-caps uppercase text-tertiary tracking-widest">
              TRANSPARENT ARCHITECTURE
            </span>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mt-space-xs">
              Engagement Models Built for Velocity
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Select the operating cadence that aligns with your engineering sprint cycle and growth trajectory.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
            {/* Plan 1 */}
            <div className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col justify-between shadow-sm">
              <div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                  Series A / B SaaS
                </span>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
                  Growth Retainer
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-space-md">
                  Continuous technical optimization, programmatic releases, and 2 Tier-1 editorial placements per month.
                </p>
                <div className="py-space-md">
                  <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-on-surface">
                    $7,500
                  </span>{' '}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">/month</span>
                </div>
                <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface mb-space-lg">
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      check
                    </span>{' '}
                    Next.js / React Edge optimization
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      check
                    </span>{' '}
                    Bi-weekly GitHub code reviews &amp; PRs
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      check
                    </span>{' '}
                    Up to 50k programmatic URLs
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      check
                    </span>{' '}
                    2x DR 70+ editorial backlinks
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() =>
                  onOpenModal({ type: 'consultation', planName: 'Growth Retainer ($7,500/mo)' })
                }
                className="w-full inline-flex items-center justify-center h-11 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm font-semibold transition-all cursor-pointer"
              >
                Initiate Growth Model
              </button>
            </div>

            {/* Plan 2: Most Popular */}
            <div className="p-space-lg rounded-2xl bg-surface-container flex flex-col justify-between shadow-xl relative">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-primary-container text-white font-label-caps text-label-caps uppercase font-bold tracking-wider">
                MOST POPULAR
              </div>
              <div>
                <span className="font-label-caps text-label-caps uppercase text-tertiary">
                  Scaleups &amp; Enterprise
                </span>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
                  Enterprise Dedicated Squad
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-space-md">
                  Full embedded SEO engineering unit: technical architect, data engineer, copy lead, and digital PR director.
                </p>
                <div className="py-space-md">
                  <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-tertiary">
                    $16,000
                  </span>{' '}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">/month</span>
                </div>
                <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface mb-space-lg">
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      check
                    </span>{' '}
                    Dedicated GitHub committer &amp; weekly PRs
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      check
                    </span>{' '}
                    Million-page programmatic cluster builds
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      check
                    </span>{' '}
                    5x DR 75+ top-tier editorial PR links
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      check
                    </span>{' '}
                    Dedicated Slack channel &amp; 4hr SLA
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      check
                    </span>{' '}
                    Real-time server crawl log alerts
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() =>
                  onOpenModal({
                    type: 'consultation',
                    planName: 'Enterprise Dedicated Squad ($16,000/mo)',
                  })
                }
                className="w-full inline-flex items-center justify-center h-11 rounded-lg bg-gradient-to-r from-primary-container via-secondary-container to-secondary text-white font-body-sm text-body-sm font-semibold hover:shadow-lg transition-all cursor-pointer"
              >
                Deploy Dedicated Squad
              </button>
            </div>

            {/* Plan 3 */}
            <div className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col justify-between shadow-sm">
              <div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                  Migration / Overhaul
                </span>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mt-1">
                  Technical Sprint &amp; Audit
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 mb-space-md">
                  Intensive 6-week architecture remediation sprint for major platform migrations, penalties, or headless rebuilds.
                </p>
                <div className="py-space-md">
                  <span className="font-metric-mono-lg text-metric-mono-lg font-bold text-on-surface">
                    $12,500
                  </span>{' '}
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    one-time flat
                  </span>
                </div>
                <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface mb-space-lg">
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      check
                    </span>{' '}
                    100% complete log &amp; indexation audit
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      check
                    </span>{' '}
                    Next.js / Astro migration architecture
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      check
                    </span>{' '}
                    Complete redirect mapping &amp; QA scripts
                  </li>
                  <li className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      check
                    </span>{' '}
                    30-day post-launch zero-traffic-drop guarantee
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() =>
                  onOpenModal({
                    type: 'consultation',
                    planName: 'Technical Sprint & Audit ($12,500 flat)',
                  })
                }
                className="w-full inline-flex items-center justify-center h-11 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm font-semibold transition-all cursor-pointer"
              >
                Book 6-Week Sprint
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="w-full py-space-xl">
        <div className="w-full max-w-7xl mx-auto px-gutter">
          <div className="relative rounded-2xl bg-surface-container-high overflow-hidden p-space-xl md:p-16 flex flex-col items-center text-center shadow-xl">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-tertiary/10 blur-[100px] rounded-full pointer-events-none"></div>
            <span className="font-label-caps text-label-caps uppercase text-tertiary tracking-widest mb-space-xs">
              EXECUTION OVER OPINION
            </span>
            <h2 className="font-headline-lg text-headline-lg md:text-display-hero md:font-display-hero font-bold text-on-surface max-w-2xl mb-space-md">
              Ready to deploy engineering-grade search architecture?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-lg">
              Talk directly with a technical SEO engineer. No account executives, no fluff presentations, just precise architectural scoping.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto relative z-10">
              <button
                type="button"
                onClick={() =>
                  onOpenModal({ type: 'consultation', planName: 'Technical Discovery Call' })
                }
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-space-xl rounded-lg bg-gradient-to-r from-primary-container via-secondary-container to-secondary text-white font-body-md text-body-md font-semibold hover:shadow-[0_0_24px_rgba(77,142,255,0.45)] transition-all cursor-pointer"
              >
                Book Technical Discovery Call
              </button>
              <button
                type="button"
                onClick={() => onNavigate('free-audit-widget')}
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-space-lg rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface font-body-md text-body-md font-semibold transition-all shadow-sm cursor-pointer"
              >
                Run Free SEO Audit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
