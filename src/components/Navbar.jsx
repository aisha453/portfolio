import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero', id: 'hero' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070a13]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/20 border border-indigo-500/30 group-hover:border-cyan-400/60 shadow-lg shadow-indigo-500/10 transition-all duration-300">
              <span className="font-mono text-sm font-bold bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                AB
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#070a13] animate-pulse"></span>
            </div>
            <div>
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Aishani Banerjee
              </span>
              <span className="hidden sm:block text-[11px] font-mono text-slate-400">
                AI & Systems Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-white bg-indigo-500/25 border border-indigo-500/40 shadow-sm shadow-indigo-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/40 rounded-xl backdrop-blur-md transition-all duration-200 shadow-sm hover:shadow-indigo-500/10 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-200 active:scale-95"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-slate-300 bg-white/5 border border-white/10 rounded-lg text-xs flex items-center gap-1"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-4 rounded-2xl bg-[#0a0e1c]/95 backdrop-blur-2xl border border-white/15 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-white bg-indigo-600/30 border border-indigo-500/40'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-4 text-center text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 rounded-xl"
              >
                View Full Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-xl"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
