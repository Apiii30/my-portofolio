import { X, Printer, Download, ExternalLink, Award, Briefcase, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--bg-card)] border-[4px] border-[var(--border-color)] brutal-shadow-lg flex flex-col font-mono-code text-xs text-[var(--text-muted)]">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 h-12 bg-[var(--bg-terminal-header)] border-b-[3px] border-[var(--border-color)] px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#c3f400] border border-[var(--border-color)]" />
            <span className="text-white font-bold uppercase truncate">
              RESUME_SPEC // HAFIDZ_ASMAR_MEISANDA.PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-2.5 py-1 bg-[#282a2d] border border-[var(--border-color)] text-white hover:bg-[#c3f400] hover:text-[#283500] flex items-center gap-1 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PRINT</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center bg-[#282a2d] border border-[var(--border-color)] text-white hover:bg-[#ffb4ab] hover:text-black cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 bg-[var(--bg-card)] text-[var(--text-primary)]">
          {/* Header section */}
          <div className="border-b-2 border-[var(--border-subtle)] pb-6 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--text-primary)]">
                HAFIDZ ASMAR MEISANDA
              </h1>
              <p className="text-[#aee000] dark:text-[#c3f400] font-bold mt-1 text-xs">
                STAFF FULLSTACK ARCHITECT & DESIGN TECHNOLOGIST
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Tokyo, Japan / Jakarta, Indonesia • hafidz.asmar@dev.io
              </p>
            </div>
            <div className="p-3 bg-[var(--bg-inset)] border border-[var(--border-color)] text-[11px] space-y-1 self-start">
              <p className="text-[#00bed6] dark:text-[#00eefc] font-bold">AVAILABILITY: Q2 2026</p>
              <p>EXPERIENCE: 6+ YEARS</p>
              <p>UPTIME: 99.9% PROD</p>
            </div>
          </div>

          {/* Core competencies */}
          <div className="space-y-2">
            <h3 className="text-[#aee000] dark:text-[#c3f400] font-bold text-sm uppercase flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> CORE ARCHITECTURAL EXPERTISE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[var(--bg-inset)] border border-[var(--border-subtle)]">
                <p className="text-[#00bed6] dark:text-[#00eefc] font-bold">FRONTEND ENGINEERING</p>
                <p className="text-[var(--text-muted)] mt-1">
                  React 19, TypeScript, Next.js, WebGL / Three.js, Tailwind CSS v4, Motion Physics, State Hydration.
                </p>
              </div>
              <div className="p-3 bg-[var(--bg-inset)] border border-[var(--border-subtle)]">
                <p className="text-[#aee000] dark:text-[#c3f400] font-bold">BACKEND & DISTRIBUTED SYSTEMS</p>
                <p className="text-[var(--text-muted)] mt-1">
                  Node.js, Express.js, PostgreSQL, Redis Pub/Sub, WebSockets, Docker, Kubernetes, CI/CD Pipeline Automation.
                </p>
              </div>
            </div>
          </div>

          {/* Work experience */}
          <div className="space-y-4">
            <h3 className="text-[#aee000] dark:text-[#c3f400] font-bold text-sm uppercase">CHRONOLOGICAL RECORD</h3>
            <div className="space-y-3">
              <div className="p-3 bg-[var(--bg-inset)] border border-[var(--border-subtle)]">
                <div className="flex justify-between font-bold text-[var(--text-primary)] text-xs">
                  <span>METAVERSE LABS — STAFF FULLSTACK LEAD & ARCHITECT</span>
                  <span className="text-[#aee000] dark:text-[#c3f400]">2024 — PRESENT</span>
                </div>
                <p className="text-[var(--text-muted)] text-[11px] mt-1">
                  Directed an 8-engineer squad building enterprise WebGL analytics dashboards. Reduced bundle size by 45% and reduced TTI to 0.4s across all global regions.
                </p>
              </div>

              <div className="p-3 bg-[var(--bg-inset)] border border-[var(--border-subtle)]">
                <div className="flex justify-between font-bold text-[var(--text-primary)] text-xs">
                  <span>PULSE DIGITAL — CREATIVE WEB ENGINEER & SENIOR DEV</span>
                  <span className="text-[#00bed6] dark:text-[#00eefc]">2022 — 2024</span>
                </div>
                <p className="text-[var(--text-muted)] text-[11px] mt-1">
                  Engineered high-velocity promotional web apps and e-commerce platforms using React, Next.js, and headless Node.js APIs with 3D interactive graphics.
                </p>
              </div>

              <div className="p-3 bg-[var(--bg-inset)] border border-[var(--border-subtle)]">
                <div className="flex justify-between font-bold text-[var(--text-primary)] text-xs">
                  <span>INDEPENDENT CONTRACTOR — FULLSTACK DEVELOPER</span>
                  <span className="text-[var(--text-muted)]">2020 — 2022</span>
                </div>
                <p className="text-[var(--text-muted)] text-[11px] mt-1">
                  Delivered 25+ production client applications ranging from POS order pipelines, live booking engines, to automated data processors.
                </p>
              </div>
            </div>
          </div>

          {/* Formal Education & Credentials */}
          <div className="space-y-3">
            <h3 className="text-[#aee000] dark:text-[#c3f400] font-bold text-sm uppercase flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> FORMAL EDUCATION & CERTIFICATIONS
            </h3>
            <div className="space-y-2">
              <div className="p-3 bg-[var(--bg-inset)] border border-[var(--border-subtle)]">
                <div className="flex justify-between font-bold text-[var(--text-primary)] text-xs">
                  <span>FACULTY OF INFORMATION TECHNOLOGY — BACHELOR OF COMPUTER SCIENCE (S.KOM)</span>
                  <span className="text-[#aee000] dark:text-[#c3f400]">2018 — 2022</span>
                </div>
                <p className="text-[#aee000] dark:text-[#c3f400] text-[10px] font-bold mt-0.5">
                  CUM LAUDE // GPA: 3.86 / 4.00
                </p>
                <p className="text-[var(--text-muted)] text-[11px] mt-1">
                  Focus: Algorithmic Complexity, Distributed Systems, Database Optimization, Microservices Architecture. Thesis on low-latency event-driven microservices caching.
                </p>
              </div>

              <div className="p-3 bg-[var(--bg-inset)] border border-[var(--border-subtle)]">
                <div className="flex justify-between font-bold text-[var(--text-primary)] text-xs">
                  <span>GLOBAL ARCHITECTURE FELLOWSHIP — ADVANCED CLOUD NATIVE & FULLSTACK</span>
                  <span className="text-[#00bed6] dark:text-[#00eefc]">2022 — 2023</span>
                </div>
                <p className="text-[var(--text-muted)] text-[11px] mt-1">
                  Specialization with Distinction in Docker & Kubernetes Orchestration, High-Concurrency Node.js, and WebGL 3D Graphics.
                </p>
              </div>

              <div className="p-2.5 bg-[var(--bg-inset)] border border-[var(--border-subtle)] flex flex-wrap gap-2 text-[10px]">
                <span className="text-[var(--text-primary)] font-bold">VERIFIED LICENSES:</span>
                <span className="text-[#aee000] dark:text-[#c3f400]">AWS Solutions Architect</span> •
                <span className="text-[#00bed6] dark:text-[#00eefc]">Meta Professional Front-End</span> •
                <span className="text-[#aee000] dark:text-[#c3f400]">GCP Associate Cloud Engineer</span> •
                <span className="text-[#00bed6] dark:text-[#00eefc]">CNCF Kubernetes Associate</span>
              </div>
            </div>
          </div>

          {/* Honors & Recognitions */}
          <div className="space-y-2">
            <h3 className="text-[#aee000] dark:text-[#c3f400] font-bold text-sm uppercase flex items-center gap-2">
              <Award className="w-4 h-4" /> HONORS & RECOGNITION
            </h3>
            <p className="p-3 bg-[var(--bg-inset)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
              • Awwwards Honorable Mention (2024, 2025) • CSS Design Awards Special Kudos • Tokyo Tech Hackathon 1st Place (Fintech track)
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[var(--bg-terminal-header)] border-t-[3px] border-[var(--border-color)] px-4 py-3 flex items-center justify-between">
          <span className="text-[11px] text-white/80">CONFIDENTIAL CV // VERIFIED CREDENTIALS</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#c3f400] text-[#283500] font-bold uppercase border-2 border-[var(--border-color)] cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

