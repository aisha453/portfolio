import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  ShieldCheck, 
  Download, 
  Terminal, 
  ExternalLink, 
  ChevronRight 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-cyan-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Cyber Grid Subtle Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Status Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-mono font-medium text-emerald-300">
              Open to Opportunities and Internships
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Kolkata • Bhubaneswar (KIIT)</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>Full-Stack Development & Multimodal AI Systems</span>
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                  Aishani Banerjee
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Computer Science undergraduate at <span className="text-white font-medium">KIIT University</span> ('28) engineering production-grade intelligent platforms. Specializing in <span className="text-cyan-300 font-medium">FastAPI & React failover backends</span>, <span className="text-indigo-300 font-medium">real-time multimodal vision-audio pipelines</span> (Gemini 2.0 Flash, Whisper, Qwen3-VL), and high-availability enterprise workflows.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 rounded-xl shadow-xl shadow-indigo-600/25 transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-indigo-400/40 rounded-xl backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>Get in touch</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">FastAPI & Python</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">React.js & Node</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">Gemini 2.0 Flash</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">Qwen3-VL / Ollama</span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">Supabase Realtime</span>
            </div>
          </div>

          {/* Right Column: Interactive Glass Profile Card */}
          <div className="lg:col-span-4">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

              {/* Card Container */}
              <div className="relative p-6 sm:p-7 rounded-2xl bg-[#090e1a]/85 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-6">
                {/* Header with Monogram & Status */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg">
                      <div className="w-full h-full bg-[#070b14] rounded-2xl flex items-center justify-center">
                        <span className="font-mono text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
                          AB
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Aishani Banerjee</h3>
                      <p className="text-xs text-slate-400">KIIT B.Tech CSE (2024–28)</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    Active
                  </span>
                </div>

                {/* Highlights List */}
                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200">Multimodal AI Engineering</span>
                      <p className="text-slate-400 text-[11px] mt-0.5">Vision AI (Gemini 2.0 Flash, Qwen3-VL) + Speech NLP (Whisper).</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200">Resilient High-Load Backend</span>
                      <p className="text-slate-400 text-[11px] mt-0.5">Zero frame drop failover heuristics, Socket.IO live sync, Prisma & PostgreSQL.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <GraduationCap className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200">Leadership & Fellowships</span>
                      <p className="text-slate-400 text-[11px] mt-0.5">McKinsey Forward Global Fellow, CyberPeace Corps, SheFi Season 15.</p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Badge */}
                <div className="pt-2">
                  <a
                    href="https://vocal-gecko-cfe1a9.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-200 text-xs font-medium transition-all group/link"
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                      Latest Live: Aegis Crisis System
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-indigo-500/30 backdrop-blur-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400">{stat.label}</span>
                <span className="w-2 h-2 rounded-full bg-indigo-400/50 group-hover:bg-cyan-400 transition-colors"></span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-xs font-semibold text-indigo-300">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
