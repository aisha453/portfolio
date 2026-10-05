import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST / Local time
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#04060b] py-12 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Left: Branding & Status */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-slate-200">Aishani Banerjee</span>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-400 text-[11px]">
              KIIT University CS '28 • Kolkata, WB
            </span>
          </div>

          {/* Center: Live Time Tracker */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>IST: {currentTime || 'Loading...'} (UTC+05:30)</span>
          </div>

          {/* Right: Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 text-xs font-semibold transition-all active:scale-95"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {currentYear} Aishani Banerjee. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React.js, Tailwind CSS & Glassmorphic System
          </p>
        </div>
      </div>
    </footer>
  );
}
