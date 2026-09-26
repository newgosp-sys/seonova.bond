import React, { useState } from 'react';
import { ModalType } from '../types';

interface InteractiveModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const InteractiveModals: React.FC<InteractiveModalsProps> = ({ activeModal, onClose }) => {
  const [portalEmail, setPortalEmail] = useState('cto@apexfintech.io');
  const [portalKey, setPortalKey] = useState('snv_live_98f2a10c4b');
  const [portalLoggedIn, setPortalLoggedIn] = useState(false);

  const [consultName, setConsultName] = useState('');
  const [consultEmail, setConsultEmail] = useState('');
  const [consultDomain, setConsultDomain] = useState('');
  const [consultDate, setConsultDate] = useState('Thu, Oct 29 · 14:00 UTC');
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const [schemaType, setSchemaType] = useState<'SoftwareApplication' | 'Organization' | 'FAQPage'>('SoftwareApplication');
  const [appName, setAppName] = useState('ApexCloud Enterprise');
  const [appCategory, setAppCategory] = useState('BusinessApplication');
  const [appPrice, setAppPrice] = useState('499.00');
  const [copiedSchema, setCopiedSchema] = useState(false);

  if (!activeModal) return null;

  const getGeneratedSchema = () => {
    if (schemaType === 'SoftwareApplication') {
      return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: appName,
          applicationCategory: appCategory,
          operatingSystem: 'Web, Cloud',
          offers: {
            '@type': 'Offer',
            price: appPrice,
            priceCurrency: 'USD',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '312',
          },
        },
        null,
        2
      );
    }
    if (schemaType === 'Organization') {
      return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: appName,
          url: 'https://enterprise-domain.io',
          sameAs: [
            'https://github.com/enterprise',
            'https://www.linkedin.com/company/enterprise',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'technical support',
            availableLanguage: ['English'],
          },
        },
        null,
        2
      );
    }
    return JSON.stringify(
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `How does ${appName} optimize edge rendering?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Through automated Cloudflare Worker dynamic rendering and sub-35ms TTFB cache headers.',
            },
          },
        ],
      },
      null,
      2
    );
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(getGeneratedSchema());
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-surface-container-lowest/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-surface-container border border-outline-variant/40 rounded-xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Terminal Bar */}
        <div className="bg-surface-container-lowest px-6 py-3.5 border-b border-outline-variant/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-error/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-secondary/80"></span>
            <span className="ml-2 font-mono text-xs text-on-surface-variant uppercase tracking-widest">
              {activeModal.type === 'client-portal' && 'SEONOVA_CLIENT_TELEMETRY_PORTAL // v4.2'}
              {activeModal.type === 'consultation' && 'PRINCIPAL_ARCHITECT_BRIEFING // SCHEDULER'}
              {activeModal.type === 'schema-generator' && 'JSON_LD_ENTITY_GENERATOR // SCHEMA.ORG'}
              {activeModal.type === 'cwv-benchmark' && 'CRUX_CORE_WEB_VITALS_BENCHMARK // 2024'}
              {activeModal.type === 'algo-monitor' && 'SERP_VOLATILITY_RADAR // LIVE TELEMETRY'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface p-1 rounded-lg hover:bg-surface-container-high transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 max-h-[82vh] overflow-y-auto">
          {activeModal.type === 'client-portal' && (
            <div>
              {!portalLoggedIn ? (
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary/10 border border-primary/20 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                      <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                        SSO &amp; API TOKEN AUTHENTICATION
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-on-surface font-headline">
                      Client Telemetry Console
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-1">
                      Access your real-time BigQuery log-file stream, Looker Studio revenue attribution, and active sprint PRs.
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setPortalLoggedIn(true);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-on-surface-variant mb-1.5">
                        Authorized Engineering Email
                      </label>
                      <input
                        type="email"
                        required
                        value={portalEmail}
                        onChange={(e) => setPortalEmail(e.target.value)}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-4 py-3 text-sm text-on-surface font-mono focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-on-surface-variant mb-1.5">
                        Workspace API Key / Token
                      </label>
                      <input
                        type="password"
                        required
                        value={portalKey}
                        onChange={(e) => setPortalKey(e.target.value)}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-4 py-3 text-sm text-on-surface font-mono focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="pt-2 flex items-center justify-between gap-4">
                      <span className="font-mono text-xs text-secondary flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">verified_user</span>
                        Pre-filled with Sandbox Demo Credentials
                      </span>
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-lg bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-sm shadow-lg hover:opacity-95 transition-all cursor-pointer"
                      >
                        Launch Sandbox Session
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
                    <div>
                      <span className="font-mono text-[10px] text-secondary uppercase tracking-widest block">
                        CONNECTED WORKSPACE // {portalEmail}
                      </span>
                      <h3 className="text-xl font-bold text-on-surface mt-0.5">
                        ApexFintech Production Telemetry
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-secondary/10 border border-secondary/30 font-mono text-xs text-secondary font-bold">
                      SPRINT 08 ACTIVE
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20">
                      <div className="font-mono text-[10px] text-on-surface-variant uppercase">Googlebot Hits (24h)</div>
                      <div className="font-mono text-2xl font-bold text-on-surface mt-1">148,920</div>
                      <div className="font-mono text-[11px] text-secondary mt-1">+24.8% vs 7d avg</div>
                    </div>
                    <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20">
                      <div className="font-mono text-[10px] text-on-surface-variant uppercase">Index Efficiency</div>
                      <div className="font-mono text-2xl font-bold text-primary mt-1">98.4%</div>
                      <div className="font-mono text-[11px] text-on-surface-variant mt-1">0 Orphaned Clusters</div>
                    </div>
                    <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20">
                      <div className="font-mono text-[10px] text-on-surface-variant uppercase">Pipeline Attributed</div>
                      <div className="font-mono text-2xl font-bold text-secondary mt-1">$1.42M</div>
                      <div className="font-mono text-[11px] text-secondary mt-1">Q3 Closed-Won ARR</div>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20 font-mono text-xs space-y-2">
                    <div className="text-on-surface-variant uppercase text-[10px] mb-2">Recent Edge PR Deployments</div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span>PR #418: Dynamic SSR canonical injection for /solutions/*</span>
                      <span className="text-secondary">MERGED 2h ago</span>
                    </div>
                    <div className="flex items-center justify-between text-on-surface">
                      <span>PR #415: JSON-LD Dataset graph on 12,400 programmatic nodes</span>
                      <span className="text-secondary">MERGED 2d ago</span>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setPortalLoggedIn(false)}
                      className="px-4 py-2 rounded-lg border border-outline-variant/40 text-xs font-mono text-on-surface-variant hover:text-on-surface"
                    >
                      Switch Account
                    </button>
                    <button
                      onClick={onClose}
                      className="px-5 py-2 rounded-lg bg-primary text-on-primary font-bold text-xs"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeModal.type === 'consultation' && (
            <div>
              {!consultSubmitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setConsultSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <span className="font-mono text-[10px] text-primary uppercase tracking-widest block mb-1">
                      {activeModal.planName ? `SELECTED TIER: ${activeModal.planName.toUpperCase()}` : 'DIRECT ARCHITECT ACCESS'}
                    </span>
                    <h3 className="text-2xl font-bold text-on-surface">
                      Book a 1-on-1 Search Architecture Briefing
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-1">
                      Speak directly with a Principal SEO Engineer. Zero junior account reps or scripted sales pitches.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] uppercase text-on-surface-variant mb-1.5">
                        Your Name &amp; Role
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Rivera, VP Growth"
                        value={consultName}
                        onChange={(e) => setConsultName(e.target.value)}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase text-on-surface-variant mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={consultEmail}
                        onChange={(e) => setConsultEmail(e.target.value)}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] uppercase text-on-surface-variant mb-1.5">
                        Target Production Domain
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="https://company.com"
                        value={consultDomain}
                        onChange={(e) => setConsultDomain(e.target.value)}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-3.5 py-2.5 text-sm text-on-surface font-mono focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] uppercase text-on-surface-variant mb-1.5">
                        Preferred Slot (UTC)
                      </label>
                      <select
                        value={consultDate}
                        onChange={(e) => setConsultDate(e.target.value)}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-3.5 py-2.5 text-sm text-on-surface font-mono focus:outline-none focus:border-primary"
                      >
                        <option>Thu, Oct 29 · 14:00 UTC</option>
                        <option>Thu, Oct 29 · 17:30 UTC</option>
                        <option>Fri, Oct 30 · 15:00 UTC</option>
                        <option>Mon, Nov 02 · 16:00 UTC</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2.5 rounded-lg border border-outline-variant/30 text-sm text-on-surface-variant hover:text-on-surface"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-sm shadow-lg hover:opacity-95 cursor-pointer"
                    >
                      Confirm Engineering Briefing
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center mx-auto text-secondary">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface">
                    Architecture Briefing Confirmed
                  </h3>
                  <p className="text-sm text-on-surface-variant max-w-md mx-auto">
                    We have dispatched a calendar invitation to <span className="text-on-surface font-mono">{consultEmail}</span> for <span className="text-secondary font-mono">{consultDate}</span>. Our crawler is pre-indexing <span className="text-primary font-mono">{consultDomain}</span> prior to the call.
                  </p>
                  <button
                    onClick={() => {
                      setConsultSubmitted(false);
                      onClose();
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-surface-container-high border border-outline-variant/40 text-sm font-bold text-on-surface hover:border-primary"
                  >
                    Return to Application
                  </button>
                </div>
              )}
            </div>
          )}

          {activeModal.type === 'schema-generator' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-bold text-on-surface">
                  JSON-LD Structured Data Entity Generator
                </h3>
                <p className="text-xs text-on-surface-variant mt-1">
                  Generate Google Rich Result &amp; AI Overview compliant JSON-LD payloads with zero syntax errors.
                </p>
              </div>

              <div className="flex gap-2">
                {(['SoftwareApplication', 'Organization', 'FAQPage'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSchemaType(type)}
                    className={`px-3.5 py-1.5 rounded-lg font-mono text-xs border transition-all cursor-pointer ${
                      schemaType === type
                        ? 'bg-primary/15 border-primary text-primary font-bold'
                        : 'bg-surface-container-lowest border-outline-variant/30 text-on-surface-variant'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-mono text-[10px] uppercase text-on-surface-variant mb-1">
                    Entity Name
                  </label>
                  <input
                    type="text"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-3 py-2 text-xs text-on-surface font-mono"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase text-on-surface-variant mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    value={appCategory}
                    onChange={(e) => setAppCategory(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-3 py-2 text-xs text-on-surface font-mono"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase text-on-surface-variant mb-1">
                    Offer Price (USD)
                  </label>
                  <input
                    type="text"
                    value={appPrice}
                    onChange={(e) => setAppPrice(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded px-3 py-2 text-xs text-on-surface font-mono"
                  />
                </div>
              </div>

              <div className="relative bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/30">
                <button
                  onClick={handleCopySchema}
                  className="absolute top-3 right-3 px-2.5 py-1 rounded bg-surface-container-high border border-outline-variant/40 font-mono text-[10px] text-primary hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
                >
                  {copiedSchema ? 'COPIED TO CLIPBOARD' : 'COPY JSON-LD'}
                </button>
                <pre className="font-mono text-xs text-secondary overflow-x-auto leading-relaxed">
                  {getGeneratedSchema()}
                </pre>
              </div>
            </div>
          )}

          {activeModal.type === 'cwv-benchmark' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-bold text-on-surface">
                  Core Web Vitals CrUX P75 Benchmarks (2024)
                </h3>
                <p className="text-xs text-on-surface-variant mt-1">
                  Comparison of SEOnova Edge-Optimized architectures against standard B2B SaaS &amp; E-Commerce medians.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
                  <div className="font-mono text-xs text-on-surface-variant">LCP (Largest Contentful Paint)</div>
                  <div className="font-mono text-2xl font-bold text-secondary mt-2">0.9s</div>
                  <div className="font-mono text-[10px] text-on-surface-variant mt-1">SEOnova Target vs 3.4s Industry Avg</div>
                </div>
                <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
                  <div className="font-mono text-xs text-on-surface-variant">INP (Interaction to Next Paint)</div>
                  <div className="font-mono text-2xl font-bold text-secondary mt-2">42ms</div>
                  <div className="font-mono text-[10px] text-on-surface-variant mt-1">SEOnova Target vs 240ms Industry Avg</div>
                </div>
                <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
                  <div className="font-mono text-xs text-on-surface-variant">CLS (Cumulative Layout Shift)</div>
                  <div className="font-mono text-2xl font-bold text-secondary mt-2">0.01</div>
                  <div className="font-mono text-[10px] text-on-surface-variant mt-1">SEOnova Target vs 0.18 Industry Avg</div>
                </div>
              </div>
            </div>
          )}

          {activeModal.type === 'algo-monitor' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-on-surface">
                    Google Core Update Volatility Monitor
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Real-time SERP flux index across 180,000+ tracked commercial keywords.
                  </p>
                </div>
                <span className="px-3 py-1 rounded bg-secondary/15 text-secondary border border-secondary/30 font-mono text-xs font-bold">
                  INDEX FLUX: LOW (2.1/10)
                </span>
              </div>
              <div className="space-y-3 bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20 font-mono text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-outline-variant/15">
                  <span className="text-on-surface font-bold">August 2024 Core Update</span>
                  <span className="text-secondary">Client Net Gain: +34.2% Visibility</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-outline-variant/15">
                  <span className="text-on-surface font-bold">March 2024 Helpful Content &amp; Spam</span>
                  <span className="text-secondary">Client Net Gain: +48.9% Visibility</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface font-bold">AI Overviews (SGE) Citation Share</span>
                  <span className="text-primary">78.4% Top-3 Entity Inclusion</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
