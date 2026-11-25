import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#73472C] border-t border-[#8C5A3C] text-xs sm:text-sm font-mono text-[#F4D9C5] text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-white font-semibold">{personalInfo.name}</span>
          <span className="mx-2 text-[#C4A28B]">•</span>
          <span>B.Tech CSE, KIIT University (2024–2028)</span>
        </div>

        <div className="flex items-center gap-4">
          <span>Kolkata & Bhubaneswar</span>
          <span className="text-[#C4A28B]">•</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#FFD7B0] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
