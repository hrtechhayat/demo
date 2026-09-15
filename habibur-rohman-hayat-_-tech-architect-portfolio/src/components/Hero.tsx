import React, { useState } from 'react';
import { Terminal, Copy, Check, ArrowDown, Shield, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-center overflow-hidden cyber-grid"
    >
      {/* Ambient background glow orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left / Main Content */}
        <div className="flex-1 max-w-2xl text-left">
          {/* Identity Decrypted Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs mb-6 shadow-[0_0_15px_rgba(0,245,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>[ IDENTITY_DECRYPTED // SYSTEM_VERIFIED ]</span>
          </div>

          {/* Name Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-[1.08]">
            Habibur <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Rohman Hayat
            </span>
          </h1>

          {/* Role & Quote */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 font-mono text-sm text-cyan-300/90 tracking-wide">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>{PERSONAL_INFO.role}</span>
              <span className="text-slate-600">//</span>
              <span className="text-slate-400 text-xs">SARISHABARI, BD</span>
            </div>

            <p className="font-mono text-cyan-400/80 italic text-base border-l-2 border-cyan-500 pl-4 py-0.5">
              {PERSONAL_INFO.tagline}
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {PERSONAL_INFO.subheading}{' '}
              <span className="text-slate-400">
                Mastering modern cloud infrastructure, self-hosted Unix stacks, and responsive client architectures.
              </span>
            </p>
          </div>

          {/* Actions & Interactive triggers */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm">
            <a
              href="#gateways"
              id="hero-connect-btn"
              className="px-6 py-3.5 rounded bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,245,255,0.35)] flex items-center gap-2"
            >
              <span>INITIALIZE CONNECT</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenTerminal}
              id="hero-terminal-btn"
              className="px-5 py-3.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>DIAGNOSTICS HUD [CLI]</span>
            </button>

            <button
              onClick={handleCopyEmail}
              id="hero-copy-email-btn"
              className="px-4 py-3.5 rounded bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
              title="Copy Email Protocol"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>COPY PROTOCOL</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Telemetry Chips */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-3 font-mono text-xs text-slate-400 max-w-lg">
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/5">
              <span className="block text-[10px] text-slate-500">HOMETOWN</span>
              <span className="text-slate-200 font-medium truncate block">Sarishabari, BD</span>
            </div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/5">
              <span className="block text-[10px] text-slate-500">ACADEMIC</span>
              <span className="text-cyan-400 font-medium">HSC 2027</span>
            </div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/5">
              <span className="block text-[10px] text-slate-500">COLLEGE EIIN</span>
              <span className="text-slate-200 font-medium">110216</span>
            </div>
          </div>
        </div>

        {/* Right / Professional Cyber Image Card */}
        <div className="flex-shrink-0 flex justify-center w-full lg:w-auto">
          <div className="relative group p-3 bg-white/[0.02] border border-white/10 rounded-md backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,245,255,0.15)] max-w-sm w-full">
            {/* Cyber Corner Accents */}
            <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-cyan-400 transition-all duration-300 group-hover:w-8 group-hover:h-8" />
            <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-cyan-400 transition-all duration-300 group-hover:w-8 group-hover:h-8" />
            <div className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-cyan-400" />
            <div className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-cyan-400" />

            {/* Top Bar on Image Card */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 font-mono text-[10px] text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                HRH // ARCHITECT
              </span>
              <span>NODE: SARISHABARI</span>
            </div>

            {/* Photo Container */}
            <div className="relative w-full aspect-[4/5] rounded overflow-hidden bg-slate-900 border border-white/10">
              {!imgError ? (
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt="Habibur Rohman Hayat"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              ) : (
                /* Engineered High-Tech Fallback Hologram Avatar */
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-[#070b12] p-6 text-center">
                  <div className="w-24 h-24 rounded-full border-2 border-cyan-400 flex items-center justify-center mb-4 bg-cyan-500/10 shadow-[0_0_25px_rgba(0,245,255,0.3)]">
                    <Sparkles className="w-10 h-10 text-cyan-400" />
                  </div>
                  <p className="font-mono text-cyan-300 text-sm font-bold">HABIBUR ROHMAN HAYAT</p>
                  <p className="font-mono text-slate-400 text-xs mt-1">Tech Architect // Sarishabari</p>
                </div>
              )}

              {/* Holographic scanline overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-scanline" />

              {/* Status pill in corner */}
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ONLINE // SECURE</span>
              </div>
            </div>

            {/* Bottom Meta on Image Card */}
            <div className="pt-2.5 mt-2 flex items-center justify-between font-mono text-[10px] text-slate-400 border-t border-white/5">
              <span>LAT: 24.7438° N</span>
              <span>LON: 89.8315° E</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
