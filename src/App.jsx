import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsConveyor from './components/SkillsConveyor';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#20140E] antialiased">
      {/* Formal Top Navigation */}
      <Navbar />

      {/* Main Editorial Content */}
      <main>
        <Hero />
        <SkillsConveyor />
        <Projects />
        <Experience />
        <ResumeViewer />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
