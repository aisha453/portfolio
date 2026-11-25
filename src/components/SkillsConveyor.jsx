import React from 'react';
import { allSkillsList, technicalSkills } from '../data/portfolioData';

export default function SkillsConveyor() {
  const tickerItems = [...allSkillsList, ...allSkillsList];

  return (
    <section id="skills" className="pt-16 pb-0 bg-[#F5EEE4] text-left relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#AD5424] font-semibold">
              // The Blend & The Stack
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#20140E] mt-1">
              Technical Arsenal & Core Stack
            </h2>
          </div>
          <span className="text-xs font-mono text-[#7A6A5E]">
            Hover to pause conveyor belt
          </span>
        </div>
      </div>

      {/* Lightweight Ticker Belt: Blended warm latte foam */}
      <div className="relative w-full overflow-hidden ticker-container py-3.5 border-y border-[#D5C6B5] bg-[#EBE0D2]/70">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5EEE4] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F5EEE4] to-transparent z-10 pointer-events-none" />

        <div className="ticker-track flex items-center gap-3.5">
          {tickerItems.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded bg-[#FFFDF9] border border-[#D5C6B5] text-xs sm:text-sm font-mono font-medium text-[#20140E] whitespace-nowrap shadow-xs hover:border-[#AD5424] hover:bg-[#FAF5ED] transition-colors"
            >
              <span className="text-[#AD5424] mr-1.5 font-bold">#</span>
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Asymmetric Organic Cards Layout (Expanded to max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Wide (7 cols) - Languages & Core */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-2xl bg-[#FFFDF9] border border-[#E7DDD0] shadow-xs text-left transform hover:-translate-y-0.5 transition-transform">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7DDD0]">
              <h3 className="font-editorial text-xl font-bold text-[#20140E]">
                Languages & Foundational Logic
              </h3>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#F5EEE4] text-[#8B796D]">
                6 core languages
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#4D3A2F] mt-3.5 leading-relaxed">
              Proficient in system-level memory semantics with <strong className="text-[#20140E]">C</strong>, object-oriented systems with <strong className="text-[#20140E]">Java</strong>, and high-velocity scripting and data pipelines with <strong className="text-[#20140E]">Python</strong> and modern JavaScript (ES6+).
            </p>
            <div className="flex flex-wrap gap-2.5 mt-5">
              {technicalSkills.languages.map((lang, lIdx) => (
                <span
                  key={lIdx}
                  className="px-3 py-1.5 rounded bg-[#F5EEE4] border border-[#D5C6B5] text-xs font-mono text-[#3D2B21]"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Narrow (5 cols) - AI & GenAI */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#FAF5ED] border border-[#D5C6B5] shadow-xs text-left transform md:translate-y-2 hover:translate-y-1 transition-transform">
            <div className="flex items-center justify-between pb-3 border-b border-[#D5C6B5]">
              <h3 className="font-editorial text-xl font-bold text-[#20140E]">
                Multimodal AI & GenAI
              </h3>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#FFFDF9] text-[#AD5424] font-semibold">
                Vision + Speech
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#4D3A2F] mt-3.5 leading-relaxed">
              Google Gemini 2.0 Flash for low-latency visual threat classification, OpenAI Whisper for audio NLP, and local private Qwen3-VL inference via Ollama.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {technicalSkills.aiGenAi.map((ai, aIdx) => (
                <span
                  key={aIdx}
                  className="px-2.5 py-1 rounded bg-[#FFFDF9] border border-[#D5C6B5] text-xs font-mono text-[#20140E]"
                >
                  {ai}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Narrow (5 cols) - Frameworks */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#FFFDF9] border border-[#E7DDD0] shadow-xs text-left transform hover:-translate-y-0.5 transition-transform">
            <div className="flex items-center justify-between pb-3 border-b border-[#E7DDD0]">
              <h3 className="font-editorial text-xl font-bold text-[#20140E]">
                Frameworks & Sockets
              </h3>
              <span className="text-xs font-mono text-[#7A6A5E]">
                FastAPI • React
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#4D3A2F] mt-3.5 leading-relaxed">
              Async REST APIs with FastAPI, component state with React.js, event-driven bidirectional chats via Socket.IO, and Prisma ORM for relational persistence.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {technicalSkills.frameworks.map((fw, fIdx) => (
                <span
                  key={fIdx}
                  className="px-2.5 py-1 rounded bg-[#F5EEE4] border border-[#D5C6B5] text-xs font-mono text-[#3D2B21]"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Wide (7 cols) - Databases & Systems */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-2xl bg-[#FAF5ED] border border-[#D5C6B5] shadow-xs text-left transform md:-translate-y-1 hover:-translate-y-2 transition-transform">
            <div className="flex items-center justify-between pb-3 border-b border-[#D5C6B5]">
              <h3 className="font-editorial text-xl font-bold text-[#20140E]">
                Databases, Cloud & Design Toolchains
              </h3>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#FFFDF9] text-[#7A6A5E]">
                Supabase • PostgreSQL
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#4D3A2F] mt-3.5 leading-relaxed">
              Supabase realtime synchronization with local fallback caching, relational schema design in PostgreSQL, multi-role auth, Netlify/Railway deployment pipelines, and Figma UI/UX architecture.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-5">
              {technicalSkills.databasesTools.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded bg-[#FFFDF9] border border-[#D5C6B5] text-xs font-mono text-[#20140E]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SILKY SMOOTH COFFEE BLEND: Transition from Beige to #8C5A3C */}
      <div className="w-full h-44 sm:h-64 blend-beige-to-brown pointer-events-none" />
    </section>
  );
}
