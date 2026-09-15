import React from 'react';
import { ArrowUp, Terminal, Shield, Activity, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-white/10 bg-[#040609] relative overflow-hidden font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Rights */}
        <div className="text-center md:text-left space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 font-bold text-sm tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>HAYAT.INFRA // KERNEL v3.4.1</span>
          </div>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()}. ALL_RIGHTS_RESERVED // ROOT_ACCESS_GRANTED.
          </p>
        </div>

        {/* Telemetry badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
          <div className="px-3 py-1 rounded bg-white/[0.02] border border-white/5 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>STACK: REACT 19 + VITE + TAILWIND</span>
          </div>
          <div className="px-3 py-1 rounded bg-white/[0.02] border border-white/5 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>NODE: SARISHABARI, BD</span>
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          className="px-4 py-2 rounded bg-white/[0.04] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 text-xs transition-all duration-200 flex items-center gap-2 group"
          title="Scroll back to summit"
        >
          <span>ASCEND TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
