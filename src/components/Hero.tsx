import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Layers, Terminal, ArrowDown, Award, Linkedin, Github, Mail } from 'lucide-react';
import { PROFILE_AVATAR_URL } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  // Motion physics for profile photo card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Buttery-smooth spring physics for natural zero-jitter motion
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.2 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.2 });

  // 3D tilt rotations and positional displacement
  const rotateX = useTransform(springY, [-0.5, 0.5], ['6.5deg', '-6.5deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-6.5deg', '6.5deg']);
  const translateX = useTransform(springX, [-0.5, 0.5], ['-6px', '6px']);
  const translateY = useTransform(springY, [-0.5, 0.5], ['-6px', '6px']);

  // Parallax for floating badge
  const badgeTranslateX = useTransform(springX, [-0.5, 0.5], ['-12px', '12px']);
  const badgeTranslateY = useTransform(springY, [-0.5, 0.5], ['-10px', '10px']);

  // Parallax for floating SYS_STATUS emblem
  const statusTranslateX = useTransform(springX, [-0.5, 0.5], ['-10px', '10px']);
  const statusTranslateY = useTransform(springY, [-0.5, 0.5], ['-8px', '8px']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-4 sm:pt-2 sm:pb-6 lg:pt-3 lg:pb-6 min-h-[calc(100vh-5.5rem)] flex flex-col justify-center overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-3 sm:gap-4 lg:gap-4.5">
          {/* Hero Name Display */}
          <div className="space-y-1 w-full">
            <p className="font-mono-code text-xs sm:text-sm tracking-widest text-[#aee000] dark:text-[#c3f400] uppercase font-bold">
              CREATIVE FULLSTACK DEVELOPER • ARCHITECT
            </p>
            <h1 className="font-display text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-[var(--text-primary)] uppercase leading-[0.95] drop-shadow-sm break-words">
              HAFIDZ ASMAR<br />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#aee000] via-[#00bed6] to-[var(--text-primary)] dark:from-[#c3f400] dark:via-[#00eefc] dark:to-white">
                MEISANDA
              </span>
            </h1>
          </div>

          {/* Brief Punchline */}
          <p className="font-body text-xs sm:text-sm lg:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Synthesizing industrial-grade neobrutalist engineering with luminous acrylic glassmorphism. Engineering ultra-scalable applications, high-throughput backend pipelines, and mind-bending digital web products.
          </p>

          {/* Social & Contact Direct Connect Buttons */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-md pt-0.5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 sm:p-2.5 bg-[var(--bg-card)] border-2 border-[var(--border-color)] brutal-shadow-sm hover:brutal-shadow-accent hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              title="Connect on LinkedIn"
            >
              <div className="w-7 h-7 rounded-sm bg-[#00bed6]/15 dark:bg-[#00eefc]/20 border border-[var(--border-color)] flex items-center justify-center text-[#009cb0] dark:text-[#00eefc] group-hover:bg-[#00eefc] group-hover:text-black transition-colors shrink-0">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left overflow-hidden">
                <span className="font-mono-code text-[8px] sm:text-[9px] uppercase text-[var(--text-muted)] font-bold tracking-wider leading-none">CONNECT</span>
                <span className="font-mono-code text-[11px] sm:text-xs font-bold text-[var(--text-primary)] uppercase truncate">LINKEDIN</span>
              </div>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 sm:p-2.5 bg-[var(--bg-card)] border-2 border-[var(--border-color)] brutal-shadow-sm hover:brutal-shadow-accent hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              title="View GitHub Repositories"
            >
              <div className="w-7 h-7 rounded-sm bg-[#aee000]/15 dark:bg-[#c3f400]/20 border border-[var(--border-color)] flex items-center justify-center text-[#759a00] dark:text-[#c3f400] group-hover:bg-[#c3f400] group-hover:text-black transition-colors shrink-0">
                <Github className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left overflow-hidden">
                <span className="font-mono-code text-[8px] sm:text-[9px] uppercase text-[var(--text-muted)] font-bold tracking-wider leading-none">SOURCE</span>
                <span className="font-mono-code text-[11px] sm:text-xs font-bold text-[var(--text-primary)] uppercase truncate">GITHUB</span>
              </div>
            </a>

            <a
              href="mailto:hafidz.asmar@dev.io"
              className="p-2 sm:p-2.5 bg-[var(--bg-card)] border-2 border-[var(--border-color)] brutal-shadow-sm hover:brutal-shadow-accent hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              title="Send Direct Email"
            >
              <div className="w-7 h-7 rounded-sm bg-[var(--bg-inset)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-card)] transition-colors shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left overflow-hidden">
                <span className="font-mono-code text-[8px] sm:text-[9px] uppercase text-[var(--text-muted)] font-bold tracking-wider leading-none">DIRECT</span>
                <span className="font-mono-code text-[11px] sm:text-xs font-bold text-[var(--text-primary)] uppercase truncate">EMAIL</span>
              </div>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#c3f400] text-[#283500] border-[3px] border-[var(--border-color)] font-mono-code text-xs sm:text-sm font-bold uppercase tracking-wider brutal-shadow-md hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-transform text-center flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4" />
              <span>EXPLORE PROJECTS</span>
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[var(--bg-card)] border-[3px] border-[var(--border-color)] text-[var(--text-primary)] font-mono-code text-xs sm:text-sm font-bold uppercase tracking-wider brutal-shadow-sm hover:bg-[var(--bg-inset)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive 3D Frosted Glass Portrait Frame */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-2 lg:mt-0 w-full">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1200px' }}
            className="w-full max-w-[260px] sm:max-w-[290px] lg:max-w-[320px] xl:max-w-[335px] relative"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                x: translateX,
                y: translateY,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ scale: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              className="relative w-full p-2.5 sm:p-3 bg-[var(--bg-card)] backdrop-blur-xl border-[3px] sm:border-[4px] border-[var(--border-color)] brutal-shadow-md hover:brutal-shadow-accent transition-shadow duration-300 group will-change-transform"
            >
              {/* Corner Accents */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#c3f400] border-2 border-[var(--border-color)]" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#00eefc] border-2 border-[var(--border-color)]" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#00eefc] border-2 border-[var(--border-color)]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#c3f400] border-2 border-[var(--border-color)]" />

              {/* Elevated 3D Layer: SYS_STATUS Emblem */}
              <motion.div
                style={{
                  x: statusTranslateX,
                  y: statusTranslateY,
                  transform: 'translateZ(34px)',
                }}
                className="mb-2 px-2.5 py-1 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] brutal-shadow-sm flex items-center justify-between z-20 will-change-transform select-none"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-[#c3f400] animate-ping inline-block shrink-0" />
                  <span className="font-mono-code text-[9px] sm:text-[10px] uppercase tracking-wider text-[var(--text-primary)] font-bold truncate">
                    SYS_STATUS: ACTIVE // TOKYO • REMOTE
                  </span>
                </div>
                <span className="w-2 h-2 bg-[#00eefc] border border-[var(--border-color)] shrink-0 ml-1.5 hidden xs:inline-block" />
              </motion.div>

              {/* Main Portrait with grayscale-to-color transition */}
              <div className="relative overflow-hidden border-2 border-[var(--border-color)] aspect-square bg-[var(--bg-inset)]">
                <img
                  src={PROFILE_AVATAR_URL}
                  alt="Hafidz Asmar Meisanda"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-terminal-header)]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Frame Sub-footer tag */}
              <div className="mt-1.5 p-1.5 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] flex items-center">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-[#c3f400] animate-pulse shrink-0" />
                  <span className="font-mono-code text-[9px] sm:text-[10px] uppercase tracking-wide text-[var(--text-primary)] font-bold truncate">
                    FULLSTACK DIGITAL CRAFTSMAN
                  </span>
                </div>
              </div>

              {/* Floating 3D Badge with Parallax Offset */}
              <motion.div
                style={{
                  x: badgeTranslateX,
                  y: badgeTranslateY,
                  transform: 'translateZ(36px)',
                }}
                className="absolute -bottom-4 -left-3 sm:-left-5 p-2 sm:p-2.5 bg-[var(--bg-card-solid)] border-[3px] border-[var(--border-color)] brutal-shadow-accent hidden sm:flex items-center gap-2 sm:gap-2.5 z-20 pointer-events-none"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#c3f400] text-[#283500] flex items-center justify-center border-2 border-[var(--border-color)] shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono-code text-[8px] sm:text-[9px] uppercase text-[var(--text-muted)] tracking-wider">AWARDS & RECOGNITION</span>
                  <span className="font-mono-code text-[10px] sm:text-xs uppercase font-bold text-[var(--text-primary)]">AWWWARDS HM • CSSDA SPECIAL</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="w-full flex justify-center pt-3 sm:pt-5 lg:pt-6">
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] font-mono-code text-xs uppercase tracking-widest text-[var(--text-primary)] brutal-shadow-sm hover:bg-[#c3f400] hover:text-[#283500] transition-all animate-bounce"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}

