import React from 'react';
import { Cpu, Server, Activity, ArrowUpRight, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data';

export const ProjectShowcase: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="mb-8 sm:mb-12 text-left">
        <span className="font-mono text-cyan-400 text-xs tracking-wider uppercase flex items-center gap-2 mb-2">
          <span className="w-2 h-0.5 bg-cyan-400" />
          02 // FEATURED DEPLOYMENTS & ARCHITECTURES
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          Systems & Automated Pipelines
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
          Architectural blueprints and active operational workloads engineered for high concurrency, self-hosted sovereignty, and automation.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {FEATURED_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="p-5 sm:p-7 md:p-8 rounded-lg bg-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/50 hover:bg-white/[0.03] active:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs mb-3 sm:mb-4">
                <span className="text-cyan-400 font-semibold flex items-center gap-1.5 py-1">
                  <Terminal className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="tracking-wide">{project.codename}</span>
                </span>

                <span
                  className={`px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono border whitespace-nowrap ${
                    project.status === 'Active'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : project.status === 'Deployed'
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                      : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                  }`}
                >
                  STATUS: {project.status.toUpperCase()}
                </span>
              </div>

              {/* Title & Category */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-slate-400 mb-3">{project.category}</p>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                {project.description}
              </p>
            </div>

            {/* Bottom Section: Metric + Tech Stack */}
            <div>
              {project.metrics && (
                <div className="mb-4 p-3 rounded bg-white/[0.02] border border-white/5 flex items-center justify-between font-mono text-xs min-h-[44px]">
                  <span className="text-slate-400">{project.metrics.label}:</span>
                  <span className="text-cyan-300 font-bold">{project.metrics.value}</span>
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center min-h-[32px] sm:min-h-[28px] px-3 py-1 text-xs font-mono rounded bg-cyan-500/5 text-cyan-300/90 border border-cyan-500/20 active:bg-cyan-500/15 transition-colors cursor-default select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};
