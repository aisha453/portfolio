import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle, TrendingUp } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3 backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMICS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Rigorous Computer Science foundations and cross-domain analytical certifications.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Education Card */}
          <div className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#090e1c]/80 hover:bg-[#0c1428]/90 border border-white/10 hover:border-emerald-500/30 backdrop-blur-2xl shadow-xl shadow-black/40 transition-all duration-300">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold block">
                      UNDERGRADUATE DEGREE
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {educationData.period}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{educationData.location}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                {educationData.degree}
              </h3>
              <h4 className="text-base font-semibold text-emerald-300 mt-1">
                {educationData.institution}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                Pursuing an intensive Computer Science engineering curriculum with a strong focus on algorithmic problem solving, scalable distributed systems, database management, and intelligent software engineering.
              </p>

              {/* Coursework Pills */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Core Academic Coursework</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-slate-200 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Full-time In-Person Degree • 2024 – 2028 Cohort</span>
            </div>
          </div>

          {/* Certification Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#090e1c]/80 hover:bg-[#0c1428]/90 border border-white/10 hover:border-cyan-500/30 backdrop-blur-2xl shadow-xl shadow-black/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{educationData.certification.date}</span>
                </div>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
                GLOBAL INDUSTRY SIMULATION
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {educationData.certification.title}
              </h3>
              <h4 className="text-sm font-semibold text-cyan-300 mt-0.5">
                {educationData.certification.issuer}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                Completed an intensive controllers simulation developing corporate financial analysis, capital budgeting, risk management, and quantitative modeling capabilities.
              </p>

              {/* Skills Tags */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span>Validated Competencies</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {educationData.certification.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-cyan-500/10 border border-cyan-500/25 text-cyan-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 font-mono">
              Issued via Goldman Sachs Forage • Verified Analytical Credential
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

