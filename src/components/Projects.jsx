import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { ArchIllustration } from './Illustrations';

export default function Projects() {
  const aegis = projects.find(p => p.id === 'aegis-crisis');
  const kstop = projects.find(p => p.id === 'kstop');
  const tinkersight = projects.find(p => p.id === 'tinkersight');
  const purplexity = projects.find(p => p.id === 'purplexity');
  const glamgo = projects.find(p => p.id === 'glamgo');

  return (
    <section id="projects" className="relative pt-8 pb-0 bg-[#8C5A3C] text-white text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 pb-20">
        {/* Section Header: Pure White & Cream Fonts on #8C5A3C Brown */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-8 border-b border-[#A47253] mb-12">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#FFD7B0] font-semibold">
              // Selected Production Work
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
              Engineered Software & AI Systems
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#FFF0E2] max-w-md sm:text-right">
            Five production-grade architectures built with Python, React, FastAPI, and multimodal vision/audio APIs.
          </p>
        </div>

        {/* ORGANIC ASYMMETRICAL LAYOUT */}
        <div className="space-y-12">
          {/* ================= PROJECT 01: Featured Wide Card with Side Architecture ================= */}
          {aegis && (
            <div className="p-8 sm:p-10 rounded-2xl bg-[#7A4B30] border border-[#A47253] shadow-lg hover:border-[#FFD7B0] transition-colors text-left">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* 7 cols: Content */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono px-3 py-1 rounded bg-[#633B23] text-[#FFD7B0] font-bold">
                      01 • Live Deployed
                    </span>
                    <span className="text-xs font-mono text-[#F4D9C5]">{aegis.period}</span>
                    <span className="text-xs font-mono text-[#FFE8D6]">• {aegis.stack.join(' • ')}</span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {aegis.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#FFF2E6] leading-relaxed">
                    {aegis.summary}
                  </p>

                  <ul className="list-disc list-outside ml-5 space-y-2 text-xs sm:text-sm text-[#FFEADE]">
                    {aegis.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="pt-3 flex flex-wrap items-center gap-3.5">
                    {aegis.liveDemo && (
                      <a
                        href={aegis.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#FFFDF9] text-[#7A4B30] font-bold text-xs sm:text-sm hover:bg-[#FAF5ED] transition-colors shadow-xs"
                      >
                        <span>Launch Live System</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {aegis.github && (
                      <a
                        href={aegis.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#633B23] text-white border border-[#915E3E] text-xs sm:text-sm font-medium hover:bg-[#57311A] transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* 5 cols: Asymmetric Architectural Schematic */}
                <div className="lg:col-span-5 p-6 rounded-xl bg-[#683E25] border border-[#8C5738] space-y-3.5">
                  <div className="flex items-center justify-between pb-2 border-b border-[#8C5738]">
                    <span className="text-xs font-mono text-[#FFD7B0] uppercase tracking-wider font-semibold">
                      Failover Architecture
                    </span>
                    <span className="text-xs font-mono text-[#F4D9C5]">0 Frame Drops</span>
                  </div>
                  <ArchIllustration className="w-full h-auto" />
                  <p className="text-xs text-[#FFE8D6] leading-relaxed pt-1">
                    Custom FastAPI heuristic router seamlessly switches processing when external Vision APIs throttle, guaranteeing high availability under heavy loads.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ================= ASYMMETRIC PAIR: PROJECT 02 (7 cols) & PROJECT 03 (5 cols) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Project 02: KSTOP (7 cols) */}
            {kstop && (
              <div className="md:col-span-7 p-8 rounded-2xl bg-[#78492F] border border-[#A47253] hover:border-[#FFD7B0] transition-colors text-left space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#FFD7B0] font-semibold">
                    02 • Platform Architecture
                  </span>
                  <span className="text-xs font-mono text-[#F4D9C5]">{kstop.period}</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                  {kstop.title}
                </h3>
                <div className="text-xs sm:text-sm font-mono text-[#FFD7B0]">
                  {kstop.stack.join(' • ')}
                </div>

                <p className="text-sm sm:text-base text-[#FFF2E6] leading-relaxed">
                  {kstop.summary}
                </p>

                {/* 4-Stage Lifecycle pill badge */}
                <div className="p-3.5 rounded-lg bg-[#633B23] border border-[#8C5738] text-xs space-y-1">
                  <span className="text-xs font-mono text-[#FFD7B0] font-bold block">
                    AUTOMATED 4-STAGE LIFECYCLE:
                  </span>
                  <p className="text-xs font-mono text-[#FFE8D6]">
                    Student Request → Parent OTP → Mentor Verification → QR Gate Pass
                  </p>
                </div>

                <ul className="list-disc list-outside ml-5 space-y-1.5 text-xs sm:text-sm text-[#FFEADE]">
                  {kstop.bullets.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={kstop.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#633B23] text-white border border-[#915E3E] text-xs sm:text-sm font-medium hover:bg-[#57311A] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            )}

            {/* Project 03: TinkerSight (5 cols) - Asymmetric offset */}
            {tinkersight && (
              <div className="md:col-span-5 p-8 rounded-2xl bg-[#75472E] border border-[#A47253] hover:border-[#FFD7B0] transition-colors text-left space-y-4 md:translate-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#FFD7B0] font-semibold">
                    03 • Privacy Multimodal
                  </span>
                  <span className="text-xs font-mono text-[#F4D9C5]">{tinkersight.period}</span>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-white">
                  {tinkersight.title}
                </h3>
                <div className="text-xs sm:text-sm font-mono text-[#FFD7B0]">
                  {tinkersight.stack.join(' • ')}
                </div>

                <p className="text-xs sm:text-sm text-[#FFF2E6] leading-relaxed">
                  {tinkersight.summary}
                </p>

                <div className="p-3.5 rounded-lg bg-[#633B23] border border-[#8C5738] text-xs">
                  <span className="text-xs font-mono text-[#FFD7B0] font-bold block mb-1">
                    LOCAL RUNTIME HIGHLIGHT:
                  </span>
                  <p className="text-xs text-[#FFE8D6] leading-normal">
                    100% private inference with deterministic safety gates that intercept risky high-voltage and gas guidance.
                  </p>
                </div>

                <ul className="list-disc list-outside ml-5 space-y-1 text-xs text-[#FFEADE]">
                  {tinkersight.bullets.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={tinkersight.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#633B23] text-white border border-[#915E3E] text-xs sm:text-sm font-medium hover:bg-[#57311A] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* ================= ASYMMETRIC PAIR 2: PROJECT 04 (5 cols) & PROJECT 05 (7 cols) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Project 04: Purplexity (5 cols) */}
            {purplexity && (
              <div className="md:col-span-5 p-8 rounded-2xl bg-[#78492F] border border-[#A47253] hover:border-[#FFD7B0] transition-colors text-left space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#FFD7B0] font-semibold">
                    04 • Search & Synthesis
                  </span>
                  <span className="text-xs font-mono text-[#F4D9C5]">{purplexity.period}</span>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-white">
                  {purplexity.title}
                </h3>
                <div className="text-xs sm:text-sm font-mono text-[#FFD7B0]">
                  {purplexity.stack.join(' • ')}
                </div>

                <p className="text-xs sm:text-sm text-[#FFF2E6] leading-relaxed">
                  {purplexity.summary}
                </p>

                <ul className="list-disc list-outside ml-5 space-y-1.5 text-xs text-[#FFEADE]">
                  {purplexity.bullets.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={purplexity.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#633B23] text-white border border-[#915E3E] text-xs sm:text-sm font-medium hover:bg-[#57311A] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            )}

            {/* Project 05: GLAMGO (7 cols) */}
            {glamgo && (
              <div className="md:col-span-7 p-8 rounded-2xl bg-[#75472E] border border-[#A47253] hover:border-[#FFD7B0] transition-colors text-left space-y-4 md:-translate-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#FFD7B0] font-semibold">
                    05 • Resilient Storefront
                  </span>
                  <span className="text-xs font-mono text-[#F4D9C5]">{glamgo.period}</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                  {glamgo.title}
                </h3>
                <div className="text-xs sm:text-sm font-mono text-[#FFD7B0]">
                  {glamgo.stack.join(' • ')}
                </div>

                <p className="text-sm sm:text-base text-[#FFF2E6] leading-relaxed">
                  {glamgo.summary}
                </p>

                <div className="p-3.5 rounded-lg bg-[#633B23] border border-[#8C5738] text-xs">
                  <span className="text-xs font-mono text-[#FFD7B0] font-bold block mb-1">
                    FALLBACK CATALOG INTEGRITY:
                  </span>
                  <p className="text-xs text-[#FFE8D6] leading-normal">
                    Continuous catalog availability guaranteed during backend database latency spikes using synchronized local caching and error boundaries.
                  </p>
                </div>

                <ul className="list-disc list-outside ml-5 space-y-1.5 text-xs text-[#FFEADE]">
                  {glamgo.bullets.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={glamgo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#633B23] text-white border border-[#915E3E] text-xs sm:text-sm font-medium hover:bg-[#57311A] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SILKY SMOOTH COFFEE BLEND: Transition from #8C5A3C back to Cappuccino Beige #F6EFE6 */}
      <div className="w-full h-44 sm:h-64 blend-brown-to-beige pointer-events-none" />
    </section>
  );
}
