import React from 'react';
import { experience, education, certifications } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="pt-10 pb-0 bg-[#F6EFE6] text-left relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16 pb-20">
        {/* Section Header */}
        <div className="pb-6 border-b border-[#D5C6B5] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#AD5424] font-semibold">
              // Trajectory & Fellowships
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#20140E] mt-1">
              Experience & Leadership
            </h2>
          </div>
          <span className="text-xs sm:text-sm font-mono text-[#7A6A5E]">
            Structured Problem-Solving • Outreach
          </span>
        </div>

        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Left Column (7 cols): Leadership & Programs */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#20140E] pb-2 border-b border-[#E7DDD0]">
              Strategic Roles & Programs
            </h3>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="p-7 rounded-2xl bg-[#FFFDF9] border border-[#E7DDD0] shadow-xs text-left space-y-2.5 transform hover:-translate-y-0.5 transition-transform"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#20140E]">
                      {item.role}
                    </h4>
                    <span className="text-xs font-mono text-[#7A6A5E]">
                      {item.period}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-semibold text-[#AD5424] font-mono">
                    {item.organization} • {item.location}
                  </div>

                  <p className="text-sm text-[#4D3A2F] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Education & Goldman Sachs Certification */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#20140E] pb-2 border-b border-[#E7DDD0]">
              Academics & Credentials
            </h3>

            {/* KIIT Degree Card */}
            <div className="p-7 rounded-2xl bg-[#FAF5ED] border border-[#D5C6B5] shadow-xs text-left space-y-3.5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#AD5424] font-bold block">
                DEGREE PROGRAM
              </span>
              <h4 className="font-editorial text-xl font-bold text-[#20140E]">
                {education.degree}
              </h4>
              <p className="text-sm font-medium text-[#AD5424]">
                {education.institution}
              </p>
              <div className="text-xs sm:text-sm font-mono text-[#7A6A5E]">
                {education.period} • {education.location}
              </div>

              <div className="pt-3 border-t border-[#D5C6B5]">
                <span className="text-xs font-mono text-[#8B796D] block mb-1.5 font-semibold">
                  Coursework:
                </span>
                <p className="text-xs sm:text-sm text-[#4D3A2F] leading-relaxed">
                  {education.coursework.join(', ')}
                </p>
              </div>
            </div>

            {/* Goldman Sachs Certification Card */}
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="p-6 sm:p-7 rounded-2xl bg-[#FFFDF9] border border-[#E7DDD0] shadow-xs text-left space-y-2 transform lg:translate-x-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#AD5424] font-bold">
                    VERIFIED SIMULATION
                  </span>
                  <span className="text-xs font-mono text-[#7A6A5E]">{cert.period}</span>
                </div>
                <h4 className="font-editorial text-lg font-bold text-[#20140E]">
                  {cert.title}
                </h4>
                <p className="text-xs sm:text-sm font-medium text-[#AD5424]">
                  {cert.issuer}
                </p>
                <p className="text-xs sm:text-sm text-[#4D3A2F] leading-relaxed">
                  {cert.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LUXURIOUS TRANSITION: Warm Cappuccino Beige Pouring into #8C5A3C Resume Desk */}
      <div className="w-full h-40 sm:h-60 blend-beige-to-resume pointer-events-none" />
    </section>
  );
}
