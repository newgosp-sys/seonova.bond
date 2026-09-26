import React from 'react';

interface BrandMarkProps {
  size?: 'sm' | 'md' | 'lg';
  showStatus?: boolean;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ size = 'md', showStatus = false }) => {
  const iconDimensions = size === 'sm' ? 'w-6 h-6' : size === 'lg' ? 'w-9 h-9' : 'w-8 h-8';

  return (
    <div className="flex items-center gap-space-sm group">
      {/* Custom SVG matching Image 1 & Image 2 */}
      <div className={`relative ${iconDimensions} shrink-0 rounded-lg p-[1.5px] bg-gradient-to-tr from-[#6366f1] via-[#3b82f6] to-[#38bdf8] shadow-[0_0_12px_rgba(77,142,255,0.35)]`}>
        <div className="w-full h-full bg-[#0a0f1d] rounded-[6.5px] flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="seonovaLineGrad" x1="6" y1="23" x2="24" y2="9" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
              <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Connecting upward telemetry graph path */}
            <path
              d="M7.5 22.5L14 15.5L18.5 18.5L23.5 10"
              stroke="url(#seonovaLineGrad)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Nodes */}
            <circle cx="7.5" cy="22.5" r="2.2" fill="#6366f1" />
            <circle cx="14" cy="15.5" r="2.2" fill="#3b82f6" />
            <circle cx="18.5" cy="18.5" r="2.2" fill="#38bdf8" />
            <circle cx="23.5" cy="10" r="3.2" fill="#38bdf8" filter="url(#cyanGlow)" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-headline-md text-headline-md tracking-tight text-on-surface font-bold leading-none">
            SEOnova<span className="text-[#3b82f6]">.bond</span>
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_6px_#4cd7f6]" />
        </div>
        {showStatus && (
          <div className="hidden sm:flex items-center gap-space-xs mt-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-fixed-dim"></span>
            </span>
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              Core Vitals 99.4% • Nominal
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
