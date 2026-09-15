import React, { useState } from 'react';
import {
  Github,
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  Twitter,
  Youtube,
  Mail,
  ExternalLink,
  Copy,
  Check,
  Radio,
  Sparkles,
} from 'lucide-react';
import { GATEWAYS, PERSONAL_INFO } from '../data';
import { GatewayLink } from '../types';

export const GatewaysDock: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="w-6 h-6" />;
      case 'facebook':
        return <Facebook className="w-6 h-6" />;
      case 'instagram':
        return <Instagram className="w-6 h-6" />;
      case 'message-circle':
        return <MessageCircle className="w-6 h-6" />;
      case 'send':
        return <Send className="w-6 h-6" />;
      case 'twitter':
        return <Twitter className="w-6 h-6" />;
      case 'youtube':
        return <Youtube className="w-6 h-6" />;
      case 'mail':
        return <Mail className="w-6 h-6" />;
      default:
        return <ExternalLink className="w-6 h-6" />;
    }
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="gateways" className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="font-mono text-cyan-400 text-xs tracking-wider uppercase flex items-center gap-2 mb-2">
            <span className="w-2 h-0.5 bg-cyan-400" />
            05 // GATEWAYS & NETWORK NODAL CONNECTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Transmit & Establish Connection
          </h2>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded bg-white/[0.02] border border-white/10 text-slate-300">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>INBOX RESPONSE: &lt; 24H GUARANTEED</span>
        </div>
      </div>

      {/* Featured Direct Protocol Card */}
      <div className="mb-10 p-6 sm:p-8 rounded-lg bg-gradient-to-r from-cyan-950/30 via-slate-900/40 to-slate-950 border border-cyan-500/30 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,245,255,0.08)]">
        <div className="flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-cyan-400 font-semibold block">
              PRIMARY DIRECT PROTOCOL
            </span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-lg sm:text-2xl font-bold text-white hover:text-cyan-300 font-mono tracking-tight transition-colors break-all"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto font-mono text-xs">
          <button
            onClick={handleCopyEmail}
            className="flex-1 sm:flex-none px-4 py-3 rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/10 hover:border-white/25 transition-all flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>COPY EMAIL</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex-1 sm:flex-none px-5 py-3 rounded bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold transition-all shadow-[0_0_15px_rgba(0,245,255,0.3)] flex items-center justify-center gap-2"
          >
            <span>SEND EMAIL</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Grid of Nodal Gateways */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {GATEWAYS.map((gateway) => (
          <a
            key={gateway.id}
            href={gateway.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg bg-white/[0.02] border border-white/10 backdrop-blur-sm group hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,245,255,0.15)] flex flex-col justify-between min-h-[120px] text-decoration-none"
          >
            {/* Top row: Icon & Arrow */}
            <div className="flex items-center justify-between text-slate-400 group-hover:text-cyan-300 transition-colors">
              <div className="p-2 rounded bg-white/[0.03] group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all duration-300">
                {getIcon(gateway.icon)}
              </div>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Bottom: Label & Handle */}
            <div className="mt-4 font-mono">
              <span className="text-xs font-bold text-white group-hover:text-cyan-300 block tracking-wider">
                {gateway.label}
              </span>
              <span className="text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors truncate block">
                {gateway.handle}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
