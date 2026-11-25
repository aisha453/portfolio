import React, { useState } from 'react';
import { Check, Copy, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-[#8C5A3C] text-white text-left relative border-t border-[#A47253]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="pb-8 border-b border-[#A47253] mb-12 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#FFD7B0] font-semibold">
              // Direct Inquiries
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
              Start a Conversation
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#FFF0E2] max-w-md sm:text-right">
            Actively seeking technical roles and internships. Please reach out directly.
          </p>
        </div>

        {/* Clean, Full-width Direct Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Email Card */}
          <div className="p-8 rounded-2xl bg-[#7A4B30] border border-[#A47253] space-y-4 text-left shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FFD7B0]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#FFD7B0] font-semibold">
                    Email Address
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-1.5 text-xs text-[#FFE8D6] hover:text-white border border-[#915E3E] rounded bg-[#633B23] hover:bg-[#57311A] transition-colors"
                  title="Copy email address"
                >
                  {copied === 'email' ? <Check className="w-3.5 h-3.5 text-[#FFD7B0]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-lg sm:text-xl font-bold text-white hover:text-[#FFD7B0] transition-colors block break-all"
              >
                {personalInfo.email}
              </a>

              <p className="text-xs sm:text-sm text-[#FFE8D6] leading-relaxed">
                Preferred for formal role invitations, interview scheduling, and technical inquiries.
              </p>
            </div>

            {copied === 'email' && (
              <div className="text-xs font-mono text-[#FFD7B0] pt-2">
                ✓ Copied to clipboard
              </div>
            )}
          </div>

          {/* Phone Card */}
          <div className="p-8 rounded-2xl bg-[#7A4B30] border border-[#A47253] space-y-4 text-left shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FFD7B0]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#FFD7B0] font-semibold">
                    Phone / WhatsApp
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-1.5 text-xs text-[#FFE8D6] hover:text-white border border-[#915E3E] rounded bg-[#633B23] hover:bg-[#57311A] transition-colors"
                  title="Copy telephone"
                >
                  {copied === 'phone' ? <Check className="w-3.5 h-3.5 text-[#FFD7B0]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <a
                href={`tel:${personalInfo.phone}`}
                className="text-lg sm:text-xl font-bold text-white hover:text-[#FFD7B0] transition-colors block"
              >
                {personalInfo.phone}
              </a>

              <p className="text-xs sm:text-sm text-[#FFE8D6] leading-relaxed">
                Direct phone and messaging contact for immediate communications and discussions.
              </p>
            </div>

            {copied === 'phone' && (
              <div className="text-xs font-mono text-[#FFD7B0] pt-2">
                ✓ Copied to clipboard
              </div>
            )}
          </div>

          {/* Profiles & Location Card */}
          <div className="p-8 rounded-2xl bg-[#73452C] border border-[#9C694A] space-y-4 text-left shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFD7B0]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#FFD7B0] font-semibold">
                  Location & Campus
                </span>
              </div>

              <div className="text-base sm:text-lg font-bold text-white">
                Kolkata & Bhubaneswar
              </div>

              <p className="text-xs sm:text-sm text-[#FFE8D6]">
                KIIT University, B.Tech CSE Class of 2028.
              </p>
            </div>

            <div className="pt-4 border-t border-[#8C5738] flex flex-col sm:flex-row gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#633B23] border border-[#8C5738] hover:border-[#FFD7B0] text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#FFD7B0]" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#633B23] border border-[#8C5738] hover:border-[#FFD7B0] text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#FFD7B0]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
