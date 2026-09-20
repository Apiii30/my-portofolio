import { useState } from 'react';
import { GraduationCap, Award, BookOpen, ShieldCheck, Check, Copy } from 'lucide-react';
import { EDUCATION_RECORDS, CERTIFICATION_RECORDS } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function EducationSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'degrees' | 'certifications'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="education" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className="px-2.5 py-0.5 bg-[#c3f400] text-[#283500] border-2 border-[var(--border-color)] font-mono-code text-xs uppercase font-bold">
          05 // EDUCATION
        </span>
        <div className="h-0.5 flex-1 bg-[var(--border-subtle)]" />
        <span className="font-mono-code text-xs uppercase text-[var(--text-muted)]">
          ACADEMIC_SPECS.SYS // VERIFIED_CREDENTIALS
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-[var(--text-primary)] font-bold tracking-tight">
            ACADEMIC FOUNDATION & CERTIFICATIONS
          </h2>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] mt-1.5 max-w-2xl">
            Formal theoretical grounding in computational complexity, distributed systems engineering, and globally verified cloud architecture standards.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] self-start md:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1 font-mono-code text-xs uppercase transition-all ${
              activeTab === 'all'
                ? 'bg-[#c3f400] text-[#283500] font-bold border border-[var(--border-color)] shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            ALL ARCHIVES
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('degrees')}
            className={`px-3 py-1 font-mono-code text-xs uppercase transition-all ${
              activeTab === 'degrees'
                ? 'bg-[#c3f400] text-[#283500] font-bold border border-[var(--border-color)] shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            DEGREES
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('certifications')}
            className={`px-3 py-1 font-mono-code text-xs uppercase transition-all ${
              activeTab === 'certifications'
                ? 'bg-[#c3f400] text-[#283500] font-bold border border-[var(--border-color)] shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            LICENSES
          </button>
        </div>
      </div>

      <div className="space-y-10">
        {/* 1. Academic Degrees Grid */}
        {(activeTab === 'all' || activeTab === 'degrees') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#aee000] dark:text-[#c3f400]" />
              <h3 className="font-mono-code text-sm uppercase tracking-wider font-bold text-[var(--text-primary)]">
                HIGHER EDUCATION & RESEARCH DEGREES
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {EDUCATION_RECORDS.map((edu, idx) => {
                const isLime = edu.color === 'lime';
                const shadowHover = isLime ? 'hover:brutal-shadow-accent' : 'hover:brutal-shadow-cyan';
                const accentBorder = isLime ? 'border-t-[#c3f400]' : 'border-t-[#00eefc]';
                const badgeStyle = isLime
                  ? 'bg-[#c3f400] text-[#283500]'
                  : 'bg-[#00eefc] text-[#00363a]';

                return (
                  <ScrollReveal
                    key={edu.id}
                    direction={idx % 2 === 0 ? '3d-left' : '3d-right'}
                    delay={0.05 * idx}
                    containerClassName="h-full"
                  >
                    <div
                      className={`h-full flex flex-col justify-between p-4 sm:p-5 bg-[var(--bg-card)] backdrop-blur-xl border-[3px] border-[var(--border-color)] border-t-[4px] ${accentBorder} brutal-shadow-sm ${shadowHover} transition-all duration-200 group`}
                    >
                      <div>
                        {/* Top Meta Bar */}
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <div className="flex items-center gap-2">
                            <span className={`w-5 h-5 border border-[var(--border-color)] ${badgeStyle} font-mono-code font-bold text-[11px] flex items-center justify-center shrink-0`}>
                              {edu.number}
                            </span>
                            <span className="font-mono-code text-xs uppercase text-[var(--text-muted)] font-bold">
                              {edu.period}
                            </span>
                          </div>
                          <span className={`px-2 py-0.5 font-mono-code text-[10px] font-bold uppercase border border-[var(--border-color)] ${badgeStyle} shrink-0`}>
                            {edu.gradeBadge}
                          </span>
                        </div>

                        {/* Title & Institution */}
                        <h4 className="font-display text-base sm:text-lg uppercase text-[var(--text-primary)] font-bold tracking-tight mb-0.5">
                          {edu.degree}
                        </h4>
                        <p className="font-mono-code text-[11px] text-[var(--text-muted)] uppercase mb-2.5">
                          {edu.institution} • {edu.location}
                        </p>

                        <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                          {edu.description}
                        </p>

                        {/* Thesis or Capstone Block */}
                        {edu.thesis && (
                          <div className="p-2 mb-3 bg-[var(--bg-inset)] border-l-2 border-l-[#c3f400] border-y border-r border-[var(--border-subtle)] font-mono-code text-[11px] text-[var(--text-primary)] leading-snug">
                            {edu.thesis}
                          </div>
                        )}

                        {/* Core Coursework & Honors in compact layout */}
                        <div className="space-y-2 mb-2">
                          <div className="flex flex-wrap gap-1">
                            {edu.coreSubjects.map((sub) => (
                              <span
                                key={sub}
                                className="px-1.5 py-0.5 bg-[var(--bg-inset)] border border-[var(--border-subtle)] font-mono-code text-[10px] text-[var(--text-muted)]"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-x-3 gap-y-1 font-body text-[11px] text-[var(--text-muted)] pt-1">
                            {edu.achievements.map((ach) => (
                              <span key={ach} className="inline-flex items-center gap-1">
                                <span className="text-[#aee000] dark:text-[#c3f400] font-bold select-none">✓</span>
                                <span>{ach}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer Credential Verification Tag */}
                      <div className="mt-3.5 pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between">
                        <span className="font-mono-code text-[10px] text-[var(--text-muted)] uppercase truncate">
                          {edu.credentialId}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopy(edu.id, edu.credentialId)}
                          className="flex items-center gap-1 font-mono-code text-[10px] uppercase font-bold text-[var(--text-primary)] hover:text-[#c3f400] transition-colors p-0.5"
                          title="Copy Credential ID"
                        >
                          {copiedId === edu.id ? (
                            <>
                              <Check className="w-3 h-3 text-[#c3f400]" />
                              <span>COPIED</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>COPY ID</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. Industry Certifications Grid */}
        {(activeTab === 'all' || activeTab === 'certifications') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#00bed6] dark:text-[#00eefc]" />
              <h3 className="font-mono-code text-sm uppercase tracking-wider font-bold text-[var(--text-primary)]">
                VERIFIED INDUSTRY CERTIFICATIONS & LICENSES
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {CERTIFICATION_RECORDS.map((cert, idx) => {
                return (
                  <ScrollReveal
                    key={cert.id}
                    direction="3d-flip-up"
                    delay={0.04 * idx}
                    containerClassName="h-full"
                  >
                    <div className="h-full flex flex-col justify-between p-4 sm:p-5 bg-[var(--bg-card)] backdrop-blur-xl border-[3px] border-[var(--border-color)] brutal-shadow-sm hover:brutal-shadow-cyan hover:-translate-y-1 transition-all duration-200 group">
                      <div>
                        {/* Status bar */}
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="flex items-center gap-1.5 font-mono-code text-[10px] uppercase text-[var(--text-muted)] font-bold">
                            <span className="w-2 h-2 rounded-full bg-[#00eefc] animate-pulse" />
                            {cert.verifiedStatus}
                          </span>
                          <span className="font-mono-code text-[10px] text-[var(--text-muted)]">
                            {cert.issuedYear}
                          </span>
                        </div>

                        {/* Title & Issuer */}
                        <h4 className="font-display text-base uppercase text-[var(--text-primary)] font-bold tracking-tight mb-1 group-hover:text-[#00bed6] dark:group-hover:text-[#00eefc] transition-colors">
                          {cert.title}
                        </h4>
                        <div className="flex items-center gap-1 mb-3">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#00bed6] dark:text-[#00eefc]" />
                          <span className="font-mono-code text-[11px] uppercase font-bold text-[var(--text-muted)]">
                            {cert.issuer}
                          </span>
                        </div>

                        {/* Skills / Domains */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {cert.skills.map((s) => (
                            <span
                              key={s}
                              className="px-1.5 py-0.5 bg-[var(--bg-inset)] border border-[var(--border-subtle)] font-mono-code text-[10px] text-[var(--text-muted)]"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Credential Code */}
                      <div className="pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between">
                        <span className="font-mono-code text-[10px] text-[var(--text-muted)] truncate">
                          {cert.credentialCode}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopy(cert.id, cert.credentialCode)}
                          className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-0.5 transition-colors"
                          title="Copy Code"
                        >
                          {copiedId === cert.id ? (
                            <Check className="w-3.5 h-3.5 text-[#00eefc]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
