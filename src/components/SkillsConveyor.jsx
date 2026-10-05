import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Database, 
  Code, 
  Layers, 
  Server, 
  Workflow, 
  Binary, 
  TerminalSquare, 
  Zap, 
  Cloud, 
  GitBranch, 
  Globe, 
  Palette, 
  HardDrive, 
  Wifi, 
  Radio, 
  CheckCircle2
} from 'lucide-react';
import { skillsTrack1, skillsTrack2, skillCategories } from '../data/portfolioData';

// Map icon names safely to Lucide icons
const renderSkillIcon = (iconName, className = "w-4 h-4") => {
  switch (iconName) {
    case 'Sparkles': return <Sparkles className={`${className} text-cyan-400`} />;
    case 'Cpu': return <Cpu className={`${className} text-indigo-400`} />;
    case 'Database': return <Database className={`${className} text-emerald-400`} />;
    case 'Zap': return <Zap className={`${className} text-amber-400`} />;
    case 'Server': return <Server className={`${className} text-blue-400`} />;
    case 'Layers': return <Layers className={`${className} text-purple-400`} />;
    case 'Cloud': return <Cloud className={`${className} text-sky-400`} />;
    case 'GitBranch': return <GitBranch className={`${className} text-orange-400`} />;
    case 'Globe': return <Globe className={`${className} text-teal-400`} />;
    case 'Palette': return <Palette className={`${className} text-pink-400`} />;
    case 'HardDrive': return <HardDrive className={`${className} text-rose-400`} />;
    case 'Wifi': return <Wifi className={`${className} text-indigo-300`} />;
    case 'Radio': return <Radio className={`${className} text-red-400`} />;
    case 'Binary': return <Binary className={`${className} text-violet-400`} />;
    case 'TerminalSquare': return <TerminalSquare className={`${className} text-emerald-300`} />;
    default: return <Code className={`${className} text-cyan-300`} />;
  }
};

export default function SkillsConveyor() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Duplicate arrays for seamless infinite loop
  const infiniteTrack1 = [...skillsTrack1, ...skillsTrack1];
  const infiniteTrack2 = [...skillsTrack2, ...skillsTrack2];

  return (
    <section id="skills" className="relative py-24 overflow-hidden border-y border-white/5 bg-[#060912]/80">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>TECHNICAL ARSENAL</span>
          {hoveredSkill && (
            <span className="text-cyan-300 font-bold ml-1 pl-2 border-l border-white/10 animate-fade-in">
              • {hoveredSkill}
            </span>
          )}
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineered with <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">Modern Toolchains</span>
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Interactive conveyor belt showcasing proficiency in full-stack architecture, multimodal vision/audio systems, cloud infrastructure, and algorithmic foundations. Hover over any skill to pause.
        </p>
      </div>

      {/* Horizontal Moving Conveyor Belt Container */}
      <div className="relative w-full space-y-6 pause-hover">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#060912] via-[#060912]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#060912] via-[#060912]/80 to-transparent z-20 pointer-events-none" />

        {/* Track 1: Moving Left (Languages & GenAI) */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee-left flex gap-4 py-2">
            {infiniteTrack1.map((skill, index) => (
              <div
                key={`t1-${index}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 shadow-lg shadow-black/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-cyan-500/10 cursor-pointer min-w-[240px]"
              >
                <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10">
                  {renderSkillIcon(skill.icon)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                      {skill.category}
                    </span>
                    <span className="text-slate-600 text-[10px]">•</span>
                    <span className="text-[11px] text-slate-400">
                      {skill.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Moving Right (Frameworks, Databases & CS Core) */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee-right flex gap-4 py-2">
            {infiniteTrack2.map((skill, index) => (
              <div
                key={`t2-${index}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-indigo-400/50 shadow-lg shadow-black/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-indigo-500/10 cursor-pointer min-w-[240px]"
              >
                <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10">
                  {renderSkillIcon(skill.icon)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400">
                      {skill.category}
                    </span>
                    <span className="text-slate-600 text-[10px]">•</span>
                    <span className="text-[11px] text-slate-400">
                      {skill.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categorized Detailed Breakdown Hub */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0f1d]/70 backdrop-blur-2xl border border-white/10 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Workflow className="w-5 h-5 text-cyan-400" />
                <span>Domain Competencies by Category</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Full-stack engineering & AI pipeline integration map
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-black/40 border border-white/10">
              {skillCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    activeCategory === idx
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Skills Badges */}
          <div className="pt-6">
            <div className="flex flex-wrap gap-2.5">
              {skillCategories[activeCategory].skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 transition-all duration-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs font-medium text-slate-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
