import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsConveyor from './components/SkillsConveyor';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100 relative selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      {/* Dynamic Background Noise / Subtle Cyber Radial Glows */}
      <div className="fixed inset-0 pointer-events-none -z-20">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[160px]" />
      </div>

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <SkillsConveyor />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
