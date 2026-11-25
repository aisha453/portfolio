import React, { useState } from 'react';
import { personalInfo, education, technicalSkills } from '../data/portfolioData';
import { DocumentIllustration } from './Illustrations';

export default function ResumeViewer() {
  const [activePage, setActivePage] = useState('all');

  return (
    <section id="resume" className="pt-6 pb-0 bg-[#8C5A3C] text-white text-left relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 pb-20">
        {/* Section Header: Crisp White Fonts on #8C5A3C Surface */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#A47253] mb-12">
          <div className="flex items-start gap-3.5">
            <DocumentIllustration className="w-9 h-9 text-[#FFD2A6] shrink-0 mt-1" />
            <div>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#FFD2A6] font-semibold">
                // Official Document
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-0.5">
                Curriculum Vitae Sheet
              </h2>
              <p className="text-xs sm:text-sm text-[#FFE8D6] mt-1">
                Viewable document formatted directly from the verified two-page resume.
              </p>
            </div>
          </div>

          {/* View Mode Buttons */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono self-start sm:self-auto">
            <span className="text-[#F4D9C5]">Sheet:</span>
            <button
              onClick={() => setActivePage('all')}
              className={`px-3.5 py-1.5 rounded transition-colors ${
                activePage === 'all'
                  ? 'bg-[#FFFDF9] text-[#70442B] font-bold shadow-xs'
                  : 'bg-[#6A3F26] text-white border border-[#9E6E50] hover:bg-[#5C341C]'
              }`}
            >
              Continuous
            </button>
            <button
              onClick={() => setActivePage('p1')}
              className={`px-3.5 py-1.5 rounded transition-colors ${
                activePage === 'p1'
                  ? 'bg-[#FFFDF9] text-[#70442B] font-bold shadow-xs'
                  : 'bg-[#6A3F26] text-white border border-[#9E6E50] hover:bg-[#5C341C]'
              }`}
            >
              Page 1
            </button>
            <button
              onClick={() => setActivePage('p2')}
              className={`px-3.5 py-1.5 rounded transition-colors ${
                activePage === 'p2'
                  ? 'bg-[#FFFDF9] text-[#70442B] font-bold shadow-xs'
                  : 'bg-[#6A3F26] text-white border border-[#9E6E50] hover:bg-[#5C341C]'
              }`}
            >
              Page 2
            </button>
          </div>
        </div>

        {/* Ivory Paper Document (Natural Left Aligned - NO text-justify, NO center alignment) */}
        <div className="rounded-2xl bg-[#FFFDF9] text-[#20140E] border border-[#E7DDD0] shadow-2xl p-8 sm:p-16 text-xs sm:text-sm leading-relaxed max-w-5xl mx-auto space-y-9 text-left">
          {/* ============ PAGE 1 CONTENT ============ */}
          {(activePage === 'all' || activePage === 'p1') && (
            <div className="space-y-7 text-left">
              {/* Document Header */}
              <div className="border-b border-[#E7DDD0] pb-6 space-y-2 text-left">
                <h1 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-[#1F1713]">
                  AISHANI BANERJEE
                </h1>
                <div className="text-xs sm:text-sm text-[#574B41] font-mono">
                  {personalInfo.location}
                </div>
                <div className="text-xs sm:text-sm text-[#574B41] font-mono flex flex-wrap gap-x-4 gap-y-1.5 pt-1">
                  <span>{personalInfo.phone}</span>
                  <span>|</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-[#AD5424] hover:underline">
                    {personalInfo.email}
                  </a>
                  <span>|</span>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-[#AD5424] hover:underline">
                    github.com/{personalInfo.githubUser}
                  </a>
                  <span>|</span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-[#AD5424] hover:underline">
                    linkedin.com/in/{personalInfo.linkedinUser}
                  </a>
                </div>
              </div>

              {/* Professional Summary (Left aligned, natural flow) */}
              <div className="space-y-1.5 text-left">
                <p className="text-xs sm:text-sm text-[#4A3D34] leading-relaxed">
                  {personalInfo.summary}
                </p>
              </div>

              {/* Education */}
              <div className="space-y-2 pt-2 border-t border-[#E7DDD0] text-left">
                <h2 className="font-editorial text-base sm:text-lg font-bold text-[#1F1713] tracking-wide uppercase">
                  EDUCATION
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                  <div>
                    <strong className="text-[#1F1713] font-semibold">{education.degree}</strong>
                    <span className="text-[#574B41]"> — {education.institution}</span>
                  </div>
                  <span className="text-[#7A6A5E] font-mono text-xs">{education.period} • {education.location}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#574B41]">
                  <strong>Core Coursework:</strong> {education.coursework.join(', ')}
                </p>
              </div>

              {/* Technical Skills */}
              <div className="space-y-2 pt-2 border-t border-[#E7DDD0] text-left">
                <h2 className="font-editorial text-base sm:text-lg font-bold text-[#1F1713] tracking-wide uppercase">
                  TECHNICAL SKILLS
                </h2>
                <div className="space-y-1.5 text-xs sm:text-sm text-[#4A3D34]">
                  <div>
                    <strong className="text-[#1F1713]">Languages:</strong> {technicalSkills.languages.join(', ')}
                  </div>
                  <div>
                    <strong className="text-[#1F1713]">Frameworks & Libraries:</strong> {technicalSkills.frameworks.join(', ')}
                  </div>
                  <div>
                    <strong className="text-[#1F1713]">AI & GenAI Tools:</strong> {technicalSkills.aiGenAi.join(', ')}
                  </div>
                  <div>
                    <strong className="text-[#1F1713]">Databases & Tools:</strong> {technicalSkills.databasesTools.join(', ')}
                  </div>
                </div>
              </div>

              {/* Projects (Page 1 segment) */}
              <div className="space-y-5 pt-2 border-t border-[#E7DDD0] text-left">
                <h2 className="font-editorial text-base sm:text-lg font-bold text-[#1F1713] tracking-wide uppercase">
                  PROJECTS
                </h2>

                {/* Aegis Crisis System */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <strong className="text-[#1F1713]">Aegis Crisis System</strong>
                      <span className="text-[#574B41]"> | React.js, FastAPI, Google Gemini 2.0, Whisper, Supabase</span>
                    </div>
                    <span className="text-[#7A6A5E] font-mono text-xs">(Apr 2026)</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-xs sm:text-sm text-[#4A3D34]">
                    <li>
                      Built a multimodal AI-powered emergency response platform processing live CCTV feeds, voice reports, and text inputs in real time, integrating Gemini 2.0 Flash and OpenAI Whisper to classify threats with location tagging.
                    </li>
                    <li>
                      Implemented custom backend failover heuristics using FastAPI for high availability during API throttling. Live Demo:{' '}
                      <a href="https://vocal-gecko-cfe1a9.netlify.app" target="_blank" rel="noreferrer" className="text-[#AD5424] underline">
                        vocal-gecko-cfe1a9.netlify.app
                      </a>{' '}
                      | GitHub:{' '}
                      <a href="https://github.com/AyanBis/aegis-crisis-system" target="_blank" rel="noreferrer" className="text-[#AD5424] underline">
                        github.com/AyanBis/aegis-crisis-system
                      </a>
                    </li>
                  </ul>
                </div>

                {/* KSTOP */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <strong className="text-[#1F1713]">KSTOP — Hostel Management Platform</strong>
                      <span className="text-[#574B41]"> | React, Node.js, Prisma, PostgreSQL, Socket.IO</span>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-xs sm:text-sm text-[#4A3D34]">
                    <li>
                      Engineered a multi-role hostel-management platform spanning 4 user roles with automated leave, grievance, notification, and parent–mentor communication workflows.
                    </li>
                    <li>
                      Automated a 4-stage leave lifecycle with QR gate verification and OTP-based authentication, replacing manual coordination with a digital gate-pass workflow.
                    </li>
                    <li>
                      Developed NLP-style grievance prioritization and real-time parent-mentor chat over Socket.IO.
                    </li>
                  </ul>
                  <div className="text-xs sm:text-sm text-[#574B41] ml-5">
                    GitHub:{' '}
                    <a href="https://github.com/SoumyaGhosh2006/KSTOP" target="_blank" rel="noreferrer" className="text-[#AD5424] underline">
                      github.com/SoumyaGhosh2006/KSTOP
                    </a>
                  </div>
                </div>

                {/* TinkerSight */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <strong className="text-[#1F1713]">TinkerSight — Multimodal Device Assistant</strong>
                      <span className="text-[#574B41]"> | Qwen3-VL, Ollama, Local Inference</span>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-xs sm:text-sm text-[#4A3D34]">
                    <li>
                      Built a privacy-oriented multimodal assistant using local Qwen3-VL/Ollama inference to identify household devices from images with manufacturer-grounded safety gates.
                    </li>
                  </ul>
                  <div className="text-xs sm:text-sm text-[#574B41] ml-5">
                    GitHub:{' '}
                    <a href="https://github.com/aisha453/TinkerSight" target="_blank" rel="noreferrer" className="text-[#AD5424] underline">
                      github.com/aisha453/TinkerSight
                    </a>
                  </div>
                </div>

                {/* Purplexity */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <strong className="text-[#1F1713]">Purplexity — AI Research Platform</strong>
                      <span className="text-[#574B41]"> | React, Express, LLM API, Web Retrieval</span>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-xs sm:text-sm text-[#4A3D34]">
                    <li>
                      Built an AI-powered web research platform combining web retrieval, LLM-based answer synthesis, source attribution, and contextual follow-up queries into a 4-stage search-to-answer pipeline.
                    </li>
                  </ul>
                  <div className="text-xs sm:text-sm text-[#574B41] ml-5">
                    GitHub:{' '}
                    <a href="https://github.com/aisha453/purplexity" target="_blank" rel="noreferrer" className="text-[#AD5424] underline">
                      github.com/aisha453/purplexity
                    </a>
                  </div>
                </div>

                {/* GLAMGO title */}
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <strong className="text-[#1F1713]">GLAMGO — E-commerce Storefront</strong>
                      <span className="text-[#574B41]"> | React, Supabase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Page break divider when viewing continuous */}
          {activePage === 'all' && (
            <div className="relative py-4 border-t-2 border-dashed border-[#E7DDD0] text-left">
              <span className="bg-[#FFFDF9] pr-3 text-xs font-mono text-[#7A6A5E]">
                — Page 2 of Resume Sheet —
              </span>
            </div>
          )}

          {/* ============ PAGE 2 CONTENT ============ */}
          {(activePage === 'all' || activePage === 'p2') && (
            <div className="space-y-7 text-left">
              {/* GLAMGO Bullets continued */}
              <div className="space-y-1">
                <ul className="list-disc list-outside ml-5 space-y-1 text-xs sm:text-sm text-[#4A3D34]">
                  <li>
                    Built a production-ready e-commerce storefront with real-time Supabase product synchronization, local fallback data, route-level lazy loading, and application-level error boundaries.
                  </li>
                </ul>
                <div className="text-xs sm:text-sm text-[#574B41] ml-5">
                  GitHub:{' '}
                  <a href="https://github.com/SoumyaGhosh2006/GLAMGO" target="_blank" rel="noreferrer" className="text-[#AD5424] underline">
                    github.com/SoumyaGhosh2006/GLAMGO
                  </a>
                </div>
              </div>

              {/* Experience & Leadership */}
              <div className="space-y-5 pt-2 border-t border-[#E7DDD0] text-left">
                <h2 className="font-editorial text-base sm:text-lg font-bold text-[#1F1713] tracking-wide uppercase">
                  EXPERIENCE & LEADERSHIP
                </h2>

                {/* McKinsey Forward */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <strong className="text-[#1F1713]">McKinsey Forward Program</strong>
                      <span className="text-[#574B41]"> — McKinsey & Company</span>
                    </div>
                    <span className="text-[#7A6A5E] font-mono text-xs">(Apr 2026 – Present)</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-xs sm:text-sm text-[#4A3D34]">
                    <li>
                      Selected globally for a structured program developing core capabilities in structured thinking, problem-solving, and adaptability in cross-functional environments.
                    </li>
                  </ul>
                </div>

                {/* CyberPeace Corps */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <strong className="text-[#1F1713]">Marketing Team Member</strong>
                      <span className="text-[#574B41]"> — CyberPeace Corps, KIIT Chapter</span>
                    </div>
                    <span className="text-[#7A6A5E] font-mono text-xs">(Feb 2026 – Present)</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-xs sm:text-sm text-[#4A3D34]">
                    <li>
                      Plan and execute digital marketing campaigns, outreach strategies, and event communications to promote cybersecurity awareness across campus.
                    </li>
                  </ul>
                </div>

                {/* SheFi Scholar */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <strong className="text-[#1F1713]">SheFi Scholar (Season 15)</strong>
                      <span className="text-[#574B41]"> — SheFi</span>
                    </div>
                    <span className="text-[#7A6A5E] font-mono text-xs">(Oct 2025 – Dec 2025)</span>
                  </div>
                </div>
              </div>

              {/* Certifications & Achievements */}
              <div className="space-y-2 pt-2 border-t border-[#E7DDD0] text-left">
                <h2 className="font-editorial text-base sm:text-lg font-bold text-[#1F1713] tracking-wide uppercase">
                  CERTIFICATIONS & ACHIEVEMENTS
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                  <div>
                    <strong className="text-[#1F1713]">Controllers Job Simulation</strong>
                    <span className="text-[#574B41]"> — Goldman Sachs (Forage)</span>
                  </div>
                  <span className="text-[#7A6A5E] font-mono text-xs">(Apr 2026)</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Seamless blend to footer */}
      <div className="w-full h-24 sm:h-36 blend-brown-to-footer pointer-events-none" />
    </section>
  );
}
