import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, FEATURED_PROJECTS, TIMELINE } from '../data';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      if (history.length === 0) {
        setHistory([
          {
            id: 'welcome',
            command: 'system --init',
            output: (
              <div className="space-y-1 text-slate-300">
                <p className="text-cyan-400 font-bold">HAYAT.INFRA // SYSTEM TELEMETRY TERMINAL v2.4.0</p>
                <p className="text-slate-400">Authenticated: Guest Operator (Root Privileges Granted)</p>
                <p className="text-slate-500">
                  Type <span className="text-cyan-300 font-semibold">'help'</span> to inspect all available system commands, or click the quick pills below.
                </p>
              </div>
            ),
          },
        ]);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-300 font-bold mb-1">AVAILABLE PROTOCOLS:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div><span className="text-cyan-400 font-bold">whoami</span> — Identity credentials</div>
              <div><span className="text-cyan-400 font-bold">projects</span> — Featured systems</div>
              <div><span className="text-cyan-400 font-bold">education</span> — Academic path</div>
              <div><span className="text-cyan-400 font-bold">contact</span> — Transmit coordinates</div>
              <div><span className="text-cyan-400 font-bold">location</span> — Geographical node</div>
              <div><span className="text-cyan-400 font-bold">date</span> — Current Dhaka clock</div>
              <div><span className="text-cyan-400 font-bold">clear</span> — Wipe screen history</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
      case 'bio':
        output = (
          <div className="space-y-2 text-slate-300 text-xs">
            <p><span className="text-cyan-400 font-bold">NAME:</span> {PERSONAL_INFO.name}</p>
            <p><span className="text-cyan-400 font-bold">TITLE:</span> {PERSONAL_INFO.role}</p>
            <p><span className="text-cyan-400 font-bold">TAGLINE:</span> {PERSONAL_INFO.tagline}</p>
            <p className="text-slate-400">{PERSONAL_INFO.bio}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">DEPLOYED SYSTEM ARCHITECTURES:</p>
            {FEATURED_PROJECTS.map(p => (
              <div key={p.id} className="p-2 rounded bg-white/[0.03] border border-white/5">
                <div className="flex justify-between">
                  <span className="font-bold text-cyan-300">[{p.codename}] {p.title}</span>
                  <span className="text-emerald-400">{p.status}</span>
                </div>
                <p className="text-slate-400 text-[11px] mt-0.5">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">ACADEMIC TRAJECTORY:</p>
            {TIMELINE.map(t => (
              <div key={t.id} className="p-2 rounded bg-white/[0.03] border border-white/5">
                <p className="font-bold text-white">{t.institution} — {t.period}</p>
                <p className="text-cyan-300">{t.degree}</p>
                {t.eiin && <p className="text-[10px] text-slate-500">EIIN: {t.eiin}</p>}
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
      case 'email':
        output = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">DIRECT TRANSMISSION COORDINATES:</p>
            <p>Email: <span className="text-cyan-300 font-bold">{PERSONAL_INFO.email}</span></p>
            <p>Location: {PERSONAL_INFO.location}</p>
            <p>Dev Status: Active Session (Open for high-impact engineering collaboration)</p>
          </div>
        );
        break;

      case 'location':
        output = (
          <p className="text-xs text-slate-300">
            SARISHABARI, JAMALPUR, BANGLADESH (COORDINATES: {PERSONAL_INFO.coordinates})
          </p>
        );
        break;

      case 'date':
        output = (
          <p className="text-xs text-slate-300">
            SYSTEM TIMESTAMP: {new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} (BANGLADESH STANDARD TIME)
          </p>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <p className="text-xs text-rose-400">
            Command not recognized: <span className="text-slate-200">"{cmd}"</span>. Type <span className="text-cyan-300 font-bold">'help'</span> for instructions.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmd,
        output,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputVal.trim()) {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-3xl h-[550px] bg-[#070a10] border border-cyan-500/40 rounded-lg shadow-[0_0_50px_rgba(0,245,255,0.2)] flex flex-col overflow-hidden font-mono text-sm relative">
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs text-slate-400 ml-2 font-semibold flex items-center gap-1">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              hayat@infra:~ (session_active)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2 bg-white/[0.01] border-b border-white/5 flex items-center gap-2 overflow-x-auto text-[11px] text-slate-400">
          <span className="text-slate-500">SUGGEST:</span>
          {['help', 'whoami', 'projects', 'education', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-white/[0.03] hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Output Screen */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <span className="text-emerald-400">hayat@infra:~$</span>
                <span>{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Row */}
        <div className="p-3 bg-white/[0.02] border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-400 font-semibold text-xs sm:text-sm">hayat@infra:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'skills', 'projects'..."
            className="flex-1 bg-transparent border-none outline-none text-cyan-200 text-xs sm:text-sm font-mono placeholder:text-slate-600"
          />
          <button
            onClick={() => {
              if (inputVal.trim()) handleCommand(inputVal);
            }}
            className="px-3 py-1 rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/40 text-xs font-bold transition-colors flex items-center gap-1"
          >
            <span>EXEC</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
