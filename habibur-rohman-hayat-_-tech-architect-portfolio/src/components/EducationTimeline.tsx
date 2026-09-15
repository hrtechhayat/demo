import React from 'react';
import { Calendar, MapPin, Award, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { TIMELINE, PERSONAL_INFO } from '../data';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="mb-10 sm:mb-14 text-left">
        <span className="font-mono text-cyan-400 text-xs tracking-wider uppercase flex items-center gap-2 mb-2">
          <span className="w-2 h-0.5 bg-cyan-400" />
          03 // EVOLUTION & ACADEMIC PATH
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          Educational Trajectory
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
          Structured academic disciplines paired with rigorous self-directed research and engineering laboratories.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 space-y-8 sm:space-y-12 max-w-4xl ml-2 sm:ml-4">
        {TIMELINE.map((item) => (
          <div key={item.id} className="relative group">
            {/* Glowing Timeline Marker with Touch Target safe bounds */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-2 sm:top-1.5 w-4 h-4 rounded-full bg-[#05070a] border-2 border-cyan-400 shadow-[0_0_15px_#00f5ff] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            {/* Content Box */}
            <div className="p-5 sm:p-7 md:p-8 rounded-lg bg-white/[0.02] border border-white/10 backdrop-blur-md group-hover:border-cyan-500/40 group-hover:bg-white/[0.03] active:bg-white/[0.04] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-3">
                <span
                  className={`self-start px-3 py-1 rounded text-xs font-mono font-semibold border ${
                    item.status === 'ongoing'
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-400/40 shadow-[0_0_10px_rgba(0,245,255,0.15)]'
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  }`}
                >
                  {item.period}
                </span>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span className="break-words">{item.location}</span>
                </div>
              </div>

              {/* Institution Title */}
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {item.institution}
              </h3>

              {/* Degree / Certificate */}
              <p className="font-mono text-cyan-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                {item.degree}
              </p>

              {item.eiin && (
                <div className="inline-flex items-center min-h-[36px] sm:min-h-[32px] gap-2 px-3 py-1.5 rounded bg-white/[0.02] border border-white/10 text-xs font-mono text-slate-400 mb-4 select-all">
                  <span className="text-slate-500">INSTITUTE EIIN:</span>
                  <span className="text-cyan-300 font-bold">{item.eiin}</span>
                </div>
              )}

              {/* Highlights */}
              <ul className="space-y-2.5 sm:space-y-2 text-slate-300 text-xs sm:text-sm">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
