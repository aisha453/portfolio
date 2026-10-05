import React, { useEffect } from 'react';
import { X, Printer } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, educationData, experienceData, projectsData, skillCategories } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
      {/* Blurred Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity print:hidden" 
        onClick={onClose} 
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl my-6 rounded-3xl bg-[#080d1a] border border-white/20 shadow-2xl shadow-cyan-950/40 z-10 overflow-hidden flex flex-col max-h-[90vh] print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black">
        {/* Modal Actions Top Bar (hidden when printing) */}
        <div className="relative p-4 sm:p-6 pb-3 border-b border-white/10 flex items-center justify-between gap-4 bg-[#0a1022] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span className="text-sm font-bold text-white font-mono">
              Aishani_Banerjee_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content View */}
        <div className="p-6 sm:p-10 space-y-8 overflow-y-auto font-sans print:overflow-visible print:p-0">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight print:text-black">
              AISHANI BANERJEE
            </h1>
            <p className="text-sm font-mono text-cyan-300 mt-1 print:text-indigo-700">
              Kolkata, West Bengal • {personalInfo.phone} • {personalInfo.email}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 mt-2 print:text-slate-600">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5" /> github.com/{personalInfo.githubUsername}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5" /> linkedin.com/in/{personalInfo.linkedinUsername}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2 print:text-indigo-800">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-slate-800">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 print:text-indigo-800">
              EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-sm font-bold text-white print:text-black">
                  {educationData.degree} — {educationData.institution}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                {educationData.period} • {educationData.location}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 print:text-slate-700">
              <strong className="text-slate-300 print:text-black">Core Coursework:</strong> {educationData.coursework.join(', ')}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 print:text-indigo-800">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="text-slate-300 print:text-slate-800">
                  <span className="font-semibold text-white print:text-black">{cat.category}: </span>
                  <span className="text-slate-400 print:text-slate-700">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 print:text-indigo-800">
              PROJECTS
            </h2>
            <div className="space-y-5">
              {projectsData.map((project, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-bold text-white print:text-black">
                      {project.title} <span className="font-mono text-xs font-normal text-cyan-400 print:text-indigo-600">({project.techStack.join(' • ')})</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-600">{project.date}</span>
                  </div>

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-700">
                    {project.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="text-[11px] font-mono text-slate-400 flex flex-wrap gap-3 pt-0.5 print:text-slate-600">
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                        Live Demo: {project.liveDemo.replace('https://', '')}
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-indigo-300 hover:underline">
                        GitHub: {project.github.replace('https://', '')}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Leadership */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 print:text-indigo-800">
              EXPERIENCE & LEADERSHIP
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-bold text-white print:text-black">
                      {exp.role} — {exp.organization}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-600">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-700">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2 print:text-indigo-800">
              CERTIFICATIONS & ACHIEVEMENTS
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="text-sm font-bold text-white print:text-black">
                {educationData.certification.title} — {educationData.certification.issuer}
              </h3>
              <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                {educationData.certification.date}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5 print:text-slate-700">
              Skills: {educationData.certification.skills.join(', ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
