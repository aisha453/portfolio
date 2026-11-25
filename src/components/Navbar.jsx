import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Resume Sheet", href: "#resume" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-sm border-b border-[#E7DDD0] transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-4 flex items-center justify-between">
        <a href="#about" className="group text-left">
          <div className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#20140E] group-hover:text-[#AD5424] transition-colors">
            {personalInfo.name}
          </div>
          <div className="text-xs text-[#7A6A5E] font-mono tracking-wide">
            {personalInfo.role} • KIIT '28
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden sm:flex items-center gap-7 text-sm font-medium text-[#4D3A2F]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-editorial hover:text-[#20140E] py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden p-2 text-[#4D3A2F] hover:text-[#20140E] hover:bg-[#F5EEE4] rounded border border-[#E7DDD0]"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-[#E7DDD0] bg-[#FFFDF9] px-6 py-4 space-y-2.5 text-left">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-[#4D3A2F] hover:text-[#20140E] py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
