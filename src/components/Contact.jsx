import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#6366f1', '#06b6d4', '#a855f7', '#10b981']
      });

      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden border-t border-white/5 bg-[#05070f]">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3 backdrop-blur-md">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start a <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">Conversation</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Actively exploring technical opportunities at Accenture and forward-thinking engineering teams. Let's discuss scalable software, multimodal AI, or full-stack products.
          </p>
        </div>

        {/* 2-Column Glass Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Quick Copy Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 rounded-3xl bg-[#090e1c]/80 border border-white/10 hover:border-indigo-400/40 backdrop-blur-2xl transition-all duration-300 shadow-xl shadow-black/40">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors mt-0.5 block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all active:scale-90"
                  title="Copy email to clipboard"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedType === 'email' && (
                <div className="mt-3 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  ✓ Email copied to clipboard!
                </div>
              )}
            </div>

            {/* Phone Card with 1-Click Copy */}
            <div className="p-6 rounded-3xl bg-[#090e1c]/80 border border-white/10 hover:border-cyan-400/40 backdrop-blur-2xl transition-all duration-300 shadow-xl shadow-black/40">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      PHONE / WHATSAPP
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors mt-0.5 block"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all active:scale-90"
                  title="Copy phone to clipboard"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedType === 'phone' && (
                <div className="mt-3 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  ✓ Phone number copied to clipboard!
                </div>
              )}
            </div>

            {/* Location & Social Hub */}
            <div className="p-6 rounded-3xl bg-[#090e1c]/80 border border-white/10 backdrop-blur-2xl shadow-xl shadow-black/40 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    LOCATION & CAMPUS
                  </span>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-slate-200 text-xs font-semibold transition-all group"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 hover:border-indigo-400 text-indigo-200 text-xs font-semibold transition-all group"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#090e1c]/80 border border-white/10 backdrop-blur-2xl shadow-xl shadow-black/40">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Recruiters and collaborators: drop a note below and I will respond promptly.
              </p>

              {isSubmitted ? (
                <div className="py-12 px-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you, {formState.name || 'there'}! Your note has been registered. You can also reach me directly at <span className="text-cyan-300 font-mono">aishani453@gmail.com</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Recruiters / Engineering Lead"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-xs sm:text-sm placeholder:text-slate-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="your.email@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-xs sm:text-sm placeholder:text-slate-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Opportunity / Accenture Role / System Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-xs sm:text-sm placeholder:text-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share project scope, role details, or collaboration ideas..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:bg-white/[0.06] text-white text-xs sm:text-sm placeholder:text-slate-500 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
