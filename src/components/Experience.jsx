import React from 'react';
import { Calendar, MapPin, CheckCircle2, Compass } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden border-t border-white/5 bg-[#050813]/60">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5" />
            <span>LEADERSHIP & FELLOWSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Strategic Programs & <span className="bg-gradient-to-r from-purple-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Global problem-solving programs, cyber governance initiatives, and decentralized application fellowships.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Connector Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-indigo-500 via-cyan-500 to-purple-500/20 hidden sm:block opacity-40" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Dot for desktop */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#0a0f1e] border-2 border-cyan-400 shadow-lg shadow-cyan-400/30 z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-pulse"></span>
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate */}
                  <div className="w-full sm:w-1/2 hidden sm:block" />

                  {/* Experience Card */}
                  <div className="w-full sm:w-1/2">
                    <div className="group p-6 sm:p-7 rounded-3xl bg-[#0a0f21]/80 hover:bg-[#0d142b]/90 border border-white/10 hover:border-purple-400/40 backdrop-blur-2xl shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                          {item.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-medium text-cyan-300 mt-0.5">
                        {item.organization}
                      </h4>

                      <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mt-1 mb-4">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{item.location}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 pt-3 border-t border-white/5">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
