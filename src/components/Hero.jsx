import React from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { CoffeeIllustration } from './Illustrations';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section id="about" className="pt-16 pb-20 blend-foam-latte border-b border-[#E7DDD0] text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Main Left Column (8 cols): Expanded text room */}
          <div className="lg:col-span-8 space-y-7 text-left">
            {/* Asymmetric Tilted Pill */}
            <div className="inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded bg-[#FAF5ED] border border-[#D5C6B5] text-xs font-mono text-[#3D2B21] shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#AD5424]"></span>
                <span className="font-semibold">Actively seeking Tech Roles</span>
                <span className="text-[#8B796D] hidden sm:inline">• Target: Internship Opportunities</span>
              </div>
            </div>

            {/* Display Headline with Serif + Italic variation */}
            <div className="space-y-3">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#20140E] leading-[1.1]">
                Engineering <span className="italic font-normal text-[#AD5424]">resilient backends</span>, multimodal AI, and production software.
              </h1>
            </div>

            {/* Natural Left-aligned Prose - Expanded max-w */}
            <p className="text-base sm:text-lg lg:text-xl text-[#4D3A2F] leading-relaxed max-w-3xl text-left">
              I am a Computer Science student at <strong className="text-[#20140E] font-semibold">KIIT University ('28)</strong> based in Kolkata and Bhubaneswar. I design backend architectures with FastAPI heuristics that avoid frame drops during peak AI throttling, alongside multimodal vision-speech pipelines with Gemini 2.0 and local Ollama models.
            </p>

            {/* Action buttons with warm tone contrast */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-medium">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#20140E] text-[#FFFDF9] hover:bg-[#38241A] transition-colors shadow-xs text-sm"
              >
                <span>View Engineered Projects</span>
                <ArrowDown className="w-4 h-4 text-[#D98242]" />
              </a>

              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#FFFDF9] hover:bg-[#FAF5ED] border border-[#D5C6B5] text-[#20140E] transition-colors shadow-xs text-sm"
              >
                <span>Read Full Resume Sheet</span>
              </a>
            </div>

            {/* Left-aligned Contact / Profile Links */}
            <div className="pt-6 border-t border-[#E7DDD0] flex flex-wrap items-center gap-7 text-xs sm:text-sm font-mono text-[#7A6A5E]">
              <span className="text-[#3D2B21] font-semibold">Kolkata & Bhubaneswar</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#AD5424] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/{personalInfo.githubUser}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#AD5424] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column (4 cols): Asymmetric Note + Coffee Cup Illustration */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6 pt-2">
            {/* Coffee illustration box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border border-[#E7DDD0] shadow-sm transform lg:rotate-1 hover:rotate-0 transition-transform w-full sm:w-auto">
              <CoffeeIllustration className="w-32 h-32 sm:w-36 sm:h-36 mx-auto lg:mx-0" />
              <div className="mt-3 text-center text-xs font-mono text-[#8B796D]">
                Freshly brewed code • Est. 2024
              </div>
            </div>

            {/* Asymmetric Coffee Aside Note */}
            <div className="p-5 rounded-xl bg-[#FAF5ED] border border-[#D5C6B5] w-full sm:max-w-xs text-left transform lg:-rotate-1">
              <div className="text-xs font-mono uppercase tracking-wider text-[#AD5424] font-semibold mb-1.5">
                Engineering Philosophy
              </div>
              <p className="text-xs sm:text-sm text-[#4D3A2F] italic leading-relaxed">
                "Zero frame drops under peak load, deterministic safety gates for AI diagnostics, and authentic four-stage system lifecycles."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
