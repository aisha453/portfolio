import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, Layers, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Blurred Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl my-8 rounded-3xl bg-[#0a0f1d] border border-white/15 shadow-2xl shadow-indigo-950/50 z-10 overflow-hidden transform transition-all">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-indigo-500/20 via-cyan-500/10 to-transparent pointer-events-none" />

        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 pb-4 border-b border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {project.category.toUpperCase()}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {project.date}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {project.status}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-cyan-300/90 mt-1 font-medium">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics?.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-xs text-slate-400 font-mono block">{m.label}</span>
                <span className="text-lg sm:text-xl font-bold font-mono text-cyan-300 mt-0.5 block">
                  {m.val}
                </span>
              </div>
            ))}
          </div>

          {/* Technical Architecture Breakdown */}
          {project.architecture && (
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>System Architecture & Pipeline</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
                  <span className="text-slate-400 text-[10px] block font-mono">CLIENT / DASHBOARD</span>
                  <span className="font-semibold text-slate-200 mt-1 block">{project.architecture.client}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
                  <span className="text-slate-400 text-[10px] block font-mono">INFERENCE / FAILOVER</span>
                  <span className="font-semibold text-slate-200 mt-1 block">{project.architecture.pipeline}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs">
                  <span className="text-slate-400 text-[10px] block font-mono">PERSISTENCE / SYNC</span>
                  <span className="font-semibold text-slate-200 mt-1 block">{project.architecture.storage}</span>
                </div>
              </div>
            </div>
          )}

          {/* Engineering Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Key Engineering Contributions</span>
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 sm:p-8 pt-4 border-t border-white/10 bg-black/40 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold transition-all active:scale-95"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>View Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
