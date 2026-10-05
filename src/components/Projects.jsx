import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Maximize2, 
  Zap,
  ShieldAlert,
  Bot,
  Building2,
  ShoppingCart
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'ai', label: 'Multimodal & AI', count: projectsData.filter(p => p.category === 'ai').length },
    { id: 'fullstack', label: 'Full-Stack Systems', count: projectsData.filter(p => p.category === 'fullstack').length },
    { id: 'web', label: 'Web Applications', count: projectsData.filter(p => p.category === 'web').length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'aegis-crisis': return <ShieldAlert className="w-5 h-5 text-red-400" />;
      case 'kstop-hostel': return <Building2 className="w-5 h-5 text-cyan-400" />;
      case 'tinkersight': return <Bot className="w-5 h-5 text-purple-400" />;
      case 'purplexity': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'glamgo': return <ShoppingCart className="w-5 h-5 text-emerald-400" />;
      default: return <FolderGit2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3 backdrop-blur-md">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PRODUCTION PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">Engineering Work</span>
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Production-grade applications spanning multimodal emergency response, distributed residential platforms, and privacy-first local AI agents.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-[1.02]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                  selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-[#090e1c]/80 hover:bg-[#0c1326]/90 border border-white/10 hover:border-cyan-400/40 backdrop-blur-2xl p-6 sm:p-7 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cyan-500/10"
            >
              {/* Top Accent Bar */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {project.date}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {project.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3">
                    {project.tagline}
                  </p>
                </div>

                {/* Key Metrics Chips */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/5">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-white/[0.02] text-center">
                        <span className="text-[10px] font-mono text-slate-400 block truncate">{m.label}</span>
                        <span className="text-xs font-bold font-mono text-cyan-300 mt-0.5 block truncate">{m.val}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.03] border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 rounded-lg text-[10px] font-mono bg-white/[0.02] text-slate-400 border border-white/5">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold transition-all group/link"
                      title="Launch live demo"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Architecture Deep Dive Trigger */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-all"
                >
                  <span>Details</span>
                  <Maximize2 className="w-3 h-3 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Project Modal if active */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
