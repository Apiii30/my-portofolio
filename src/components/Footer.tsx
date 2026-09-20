export default function Footer() {
  return (
    <footer className="w-full mt-14 sm:mt-20 bg-[var(--bg-inset)] border-t-[3px] border-[var(--border-color)] py-8 sm:py-12 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#c3f400] border border-[var(--border-color)] inline-block" />
            <span className="font-display text-lg tracking-tight text-[var(--text-primary)] font-bold uppercase">
              HAFIDZ ASMAR MEISANDA
            </span>
          </div>
          <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] text-center md:text-left">
            Creative Fullstack Architect & Design Technologist. Built with raw Brutal-Glass aesthetics.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono-code text-xs uppercase text-[var(--text-muted)] hover:text-[#aee000] dark:hover:text-[#c3f400] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono-code text-xs uppercase text-[var(--text-muted)] hover:text-[#00bed6] dark:hover:text-[#00eefc] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://read.cv"
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono-code text-xs uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            ReadCV
          </a>
          <a
            href="https://substack.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono-code text-xs uppercase text-[var(--text-muted)] hover:text-[#aee000] dark:hover:text-[#c3f400] transition-colors"
          >
            Substack
          </a>
        </div>

        {/* Copyright badge */}
        <div className="font-mono-code text-[11px] uppercase tracking-widest text-[var(--text-muted)] border border-[var(--border-subtle)] px-3 py-1 bg-[var(--bg-card)]">
          © 2026 HAM • ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}

