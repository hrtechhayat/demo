import React, { useRef, useState } from 'react';
import { Cpu, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface BentoSpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const BentoSpotlightCard: React.FC<BentoSpotlightCardProps> = ({
  children,
  className = '',
  id,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-lg bg-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 group hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,245,255,0.06)] ${className}`}
    >
      {/* Subtle Radial Gradient Spotlight that follows cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-lg transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background:
            'radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 245, 255, 0.08), transparent 70%)',
        }}
      />

      {/* Futuristic Border Illumination follows cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-lg transition-opacity duration-300 border border-cyan-400/50"
        style={{
          opacity: isHovered ? 1 : 0,
          WebkitMaskImage:
            'radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 25%, transparent 75%)',
          maskImage:
            'radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 25%, transparent 75%)',
        }}
      />

      {/* Cyber Corner Reticles */}
      <div
        className={`pointer-events-none absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400/70 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-20'
        }`}
      />
      <div
        className={`pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400/70 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-20'
        }`}
      />

      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

export const AboutBento: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-left">
        <span className="font-mono text-cyan-400 text-xs tracking-wider uppercase flex items-center gap-2 mb-2">
          <span className="w-2 h-0.5 bg-cyan-400" />
          01 // PROFILE & SYSTEM IDENTITY
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          System Overview & Diagnostics
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans">
        {/* Main Identity Card (Spans 2 cols) */}
        <BentoSpotlightCard
          id="bento-architect-identity"
          className="lg:col-span-2 p-6 sm:p-8"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Top Label */}
            <div className="flex items-center justify-between font-mono text-xs text-cyan-400 mb-6">
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                ARCHITECT_IDENTITY.SYS
              </span>
              <span className="text-slate-500 font-mono text-[11px]">[ ID: BD-24-HRH ]</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
              Habibur Rohman Hayat
            </h3>

            <p className="text-slate-300 text-base leading-relaxed mb-5">
              {PERSONAL_INFO.bio}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-8 border-l-2 border-cyan-400/40 pl-4 italic">
              "{PERSONAL_INFO.philosophy}"
            </p>
          </div>

          {/* Operational Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 font-mono text-xs">
            <div className="p-3 rounded bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all cursor-default select-none">
              <span className="text-slate-500 text-[10px] block">SPECIALTY</span>
              <span className="text-cyan-300 font-medium">AI & SysAdmin</span>
            </div>
            <div className="p-3 rounded bg-white/[0.02] border border-white/5 hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all cursor-default select-none">
              <span className="text-slate-500 text-[10px] block">DEV STATE</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Continuous
              </span>
            </div>
            <div className="p-3 rounded bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all cursor-default select-none">
              <span className="text-slate-500 text-[10px] block">OS STACK</span>
              <span className="text-slate-200 font-medium">Linux + Win POS</span>
            </div>
            <div className="p-3 rounded bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all cursor-default select-none">
              <span className="text-slate-500 text-[10px] block">DISCIPLINE</span>
              <span className="text-slate-200 font-medium">Self-Taught</span>
            </div>
          </div>
        </BentoSpotlightCard>

        {/* System Metadata Card */}
        <BentoSpotlightCard
          id="bento-metadata-card"
          className="p-6 sm:p-8"
        >
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-cyan-400 mb-6">
              <span className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                METADATA.LOG
              </span>
              <span className="text-emerald-400 text-[11px]">NORMAL_OK</span>
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="flex justify-between py-2 px-2 -mx-2 rounded hover:bg-white/[0.02] border-b border-white/5 transition-colors">
                <span className="text-slate-500">LOCATION:</span>
                <span className="text-slate-200 text-right">Sarishabari, BD</span>
              </div>
              <div className="flex justify-between py-2 px-2 -mx-2 rounded hover:bg-white/[0.02] border-b border-white/5 transition-colors">
                <span className="text-slate-500">COORDINATES:</span>
                <span className="text-cyan-300 text-right">24.74° N, 89.83° E</span>
              </div>
              <div className="flex justify-between py-2 px-2 -mx-2 rounded hover:bg-white/[0.02] border-b border-white/5 transition-colors">
                <span className="text-slate-500">STATUS:</span>
                <span className="text-cyan-400 font-semibold text-right">Single (Dev_Mode)</span>
              </div>
              <div className="flex justify-between py-2 px-2 -mx-2 rounded hover:bg-white/[0.02] border-b border-white/5 transition-colors">
                <span className="text-slate-500">ACADEMIC PHASE:</span>
                <span className="text-slate-200 text-right">HSC 2027 // Active</span>
              </div>
              <div className="flex justify-between py-2 px-2 -mx-2 rounded hover:bg-white/[0.02] border-b border-white/5 transition-colors">
                <span className="text-slate-500">EIIN CODE:</span>
                <span className="text-cyan-400 font-bold text-right">{PERSONAL_INFO.eiin}</span>
              </div>
              <div className="flex justify-between py-2 px-2 -mx-2 rounded hover:bg-white/[0.02] border-b border-white/5 transition-colors">
                <span className="text-slate-500">WORKFLOW FUEL:</span>
                <span className="text-amber-300 text-right">Tech + Research</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>UPTIME: 24/7 SESSION</span>
            <span className="text-cyan-400">SECURE_LEVEL: ROOT</span>
          </div>
        </BentoSpotlightCard>
      </div>
    </section>
  );
};
