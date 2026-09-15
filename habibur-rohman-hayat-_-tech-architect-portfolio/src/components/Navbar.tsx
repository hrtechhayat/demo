import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Activity, Radio } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, activeSection }) => {
  const [currentTime, setCurrentTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in UTC+6 (Bangladesh Time)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { label: '01. PROFILE', href: '#about' },
    { label: '02. ARCHITECTURE', href: '#projects' },
    { label: '03. EVOLUTION', href: '#education' },
    { label: '04. GATEWAYS', href: '#gateways' },
  ];

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full h-20 px-4 sm:px-8 md:px-12 flex justify-between items-center bg-[#05070a]/85 backdrop-blur-xl border-b border-white/10 z-50 transition-all duration-300"
    >
      {/* Brand Logo */}
      <a
        href="#"
        className="flex items-center gap-2 group text-decoration-none"
        aria-label="Hayat Infra Home"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f5ff] group-hover:scale-125 transition-transform duration-300 animate-pulse" />
        <span className="font-mono text-cyan-400 font-bold tracking-wider text-base sm:text-lg group-hover:text-cyan-300 transition-colors">
          HAYAT.INFRA <span className="text-white/40">//</span>
        </span>
      </a>

      {/* Center Nav Links (Desktop) */}
      <div className="hidden lg:flex items-center gap-1 font-mono text-xs text-slate-400">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`px-3 py-1.5 rounded transition-all duration-200 hover:text-cyan-400 hover:bg-cyan-500/10 ${
              activeSection === item.href.slice(1)
                ? 'text-cyan-400 bg-cyan-500/10 border-b border-cyan-400 font-semibold'
                : ''
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Right Controls & Telemetry */}
      <div className="flex items-center gap-3 sm:gap-4 font-mono">
        {/* Time Widget */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded bg-white/[0.03] border border-white/10 text-xs text-slate-300">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="text-slate-500 text-[10px]">DHAKA</span>
          <span className="text-cyan-300 font-medium tabular-nums">{currentTime || '00:00:00'}</span>
        </div>

        {/* CLI Terminal Launcher */}
        <button
          onClick={onOpenTerminal}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/25 hover:border-cyan-400 transition-all duration-200 shadow-sm"
          title="Open Developer Terminal HUD"
        >
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-bold">CLI</span>
        </button>

        {/* Status Indicator */}
        <div className="hidden xl:flex items-center gap-2 text-xs text-slate-400 pl-2 border-l border-white/10">
          <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="text-[11px] text-emerald-400 font-medium">DEV_MODE: ACTIVE</span>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#070a10]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 font-mono shadow-2xl transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
            <span>STATUS: ACTIVE_SESSION</span>
            <span className="text-cyan-400 tabular-nums">{currentTime}</span>
          </div>

          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded bg-white/[0.02] border border-white/5 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                onOpenTerminal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-xs rounded border border-cyan-400 bg-cyan-500/20 text-cyan-300 flex items-center justify-center gap-2 font-bold hover:bg-cyan-500/30 transition-all"
            >
              <Terminal className="w-4 h-4" />
              Launch CLI HUD
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
