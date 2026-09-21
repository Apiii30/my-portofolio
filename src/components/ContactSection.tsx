import React, { useState } from 'react';
import { Copy, Check, Clock, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'fullstack',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const email = 'asmarhafidz81@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', scope: 'fullstack', message: '' });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-18">
      {/* Mega Headline */}
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 bg-[#c3f400] text-[#283500] border-2 border-[var(--border-color)] font-mono-code text-xs uppercase font-bold">
            06 // TRANSMISSION
          </span>
          <span className="font-mono-code text-xs text-[var(--text-muted)]">PORT: 443 // ENCRYPTED</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-[var(--text-primary)] font-bold tracking-tighter leading-none break-words">
          LET'S BUILD SOMETHING SICK.
        </h2>
      </div>

      {/* Contact Grid Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Direct Info & Instant Copy Channels */}
        <ScrollReveal
          direction="3d-left"
          delay={0.04}
          containerClassName="lg:col-span-5 h-full"
        >
          <div className="flex flex-col justify-between gap-6 h-full">
            <div className="space-y-5">
              <p className="font-body text-sm sm:text-base lg:text-lg text-[var(--text-muted)] leading-relaxed">
                Have a bold product vision, an enterprise platform needing architectural rigor, or a contract project requiring elite fullstack velocity? Reach out directly.
              </p>

              {/* Direct Email Brutalist Card */}
              <div className="p-4 sm:p-5 bg-[var(--bg-card)] backdrop-blur-xl border-[3px] border-[var(--border-color)] brutal-shadow-accent">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-xs uppercase text-[var(--text-muted)] font-bold">PRIMARY INBOX</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c3f400] animate-ping" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <span className="font-mono-code text-base sm:text-lg lg:text-xl text-[var(--text-primary)] font-bold truncate">
                    {email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 bg-[#c3f400] text-[#283500] border-2 border-[var(--border-color)] font-mono-code text-xs uppercase font-bold brutal-shadow-sm hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-transform flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'COPIED!' : 'COPY'}</span>
                  </button>
                </div>
              </div>

              {/* Fast Response Badge */}
              <div className="p-3 sm:p-4 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#00bed6] dark:text-[#00eefc] shrink-0" />
                <div>
                  <p className="font-mono-code text-xs uppercase font-bold text-[var(--text-primary)]">
                    GUARANTEED RESPONSE TIME
                  </p>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)]">
                    &lt; 12 Hours worldwide • UTC+9 Timezone (Tokyo)
                  </p>
                </div>
              </div>

              {/* Social Links Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'GITHUB', href: 'https://github.com', hoverColor: 'hover:bg-[#c3f400] hover:text-[#283500]' },
                  { label: 'LINKEDIN', href: 'https://linkedin.com', hoverColor: 'hover:bg-[#00eefc] hover:text-[#00363a]' },
                  { label: 'TWITTER/X', href: 'https://x.com', hoverColor: 'hover:bg-[var(--text-primary)] hover:text-[var(--bg-canvas)]' },
                  { label: 'READCV', href: 'https://read.cv', hoverColor: 'hover:bg-[#c3f400] hover:text-[#283500]' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`p-2.5 bg-[var(--bg-card)] border-2 border-[var(--border-color)] text-center font-mono-code text-xs uppercase font-bold text-[var(--text-primary)] brutal-shadow-sm transition-all ${social.hoverColor}`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Availability Tag */}
            <div className="p-3 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] font-mono-code text-xs text-[var(--text-muted)] flex items-center justify-between">
              <span className="truncate">LOC: TOKYO / JAKARTA / REMOTE</span>
              <span className="text-[#aee000] dark:text-[#c3f400] font-bold shrink-0 ml-2">AVAILABILITY: OPEN</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Neobrutalist Glass Form */}
        <ScrollReveal
          direction="3d-right"
          delay={0.08}
          containerClassName="lg:col-span-7 h-full"
        >
          <div className="bg-[var(--bg-card)] backdrop-blur-2xl border-[4px] border-[var(--border-color)] p-4 sm:p-7 brutal-shadow-md h-full">
          <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-[var(--border-subtle)]">
            <span className="font-mono-code text-xs uppercase font-bold text-[var(--text-primary)]">
              DISPATCH_FORM // V2
            </span>
            <span className="font-mono-code text-xs uppercase text-[#aee000] dark:text-[#c3f400] font-bold">TLS_V1.3</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="font-mono-code text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold block">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Kenji Tanaka"
                  className="w-full px-3 py-2.5 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] text-[var(--text-primary)] font-mono-code text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#c3f400] transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="font-mono-code text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold block">
                  YOUR EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. kenji@company.jp"
                  className="w-full px-3 py-2.5 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] text-[var(--text-primary)] font-mono-code text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#c3f400] transition-colors"
                />
              </div>
            </div>

            {/* Scope Selection */}
            <div className="space-y-1.5">
              <label className="font-mono-code text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold block">
                PROJECT ENGAGEMENT SCOPE
              </label>
              <select
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                className="w-full px-3 py-2.5 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] text-[var(--text-primary)] font-mono-code text-sm focus:outline-none focus:border-[#c3f400] transition-colors"
              >
                <option value="fullstack">Fullstack Web App Development (Greenfield)</option>
                <option value="architecture">Enterprise Architecture & Performance Audit</option>
                <option value="frontend">Creative 3D / WebGL Interactive Experience</option>
                <option value="advisory">Fractional Staff Lead / Technical Advisory</option>
              </select>
            </div>

            {/* Message Area */}
            <div className="space-y-1.5">
              <label className="font-mono-code text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold block">
                MESSAGE BRIEF *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your objectives, timelines, and budget constraints..."
                className="w-full px-3 py-2.5 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] text-[var(--text-primary)] font-mono-code text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#c3f400] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-[#c3f400] text-[#283500] border-[3px] border-[var(--border-color)] font-mono-code text-sm uppercase font-bold brutal-shadow-md hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-transform flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>
                {isSubmitting ? 'ENCRYPTING & TRANSMITTING...' : 'TRANSMIT MESSAGE ⚡'}
              </span>
            </button>

            {/* Success Notification */}
            {submitSuccess && (
              <div className="p-3 bg-[#c3f400] text-[#283500] border-2 border-[var(--border-color)] font-mono-code text-xs uppercase font-bold text-center animate-fade-in">
                ✓ TRANSMISSION RECEIVED. HAFIDZ WILL RESPOND WITHIN 12 HOURS.
              </div>
            )}
          </form>
        </div>
      </ScrollReveal>
      </div>
    </section>
  );
}

