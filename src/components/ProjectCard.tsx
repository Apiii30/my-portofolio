import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ProjectItem } from '../types';
import { Eye, Code, ShoppingCart, Car, ExternalLink, RotateCw } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDemo: (project: ProjectItem) => void;
  onOpenCode: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onOpenDemo, onOpenCode }: ProjectCardProps) {
  // Motion values normalized between -0.5 and 0.5 for stable math
  const mouseXNormalized = useMotionValue(0);
  const mouseYNormalized = useMotionValue(0);

  // Soft physics spring for ultra-smooth buttery motion with zero vibration or jitter
  const smoothX = useSpring(mouseXNormalized, { stiffness: 140, damping: 24, mass: 0.2 });
  const smoothY = useSpring(mouseYNormalized, { stiffness: 140, damping: 24, mass: 0.2 });

  // Subtle elegant 3D tilt angles
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['2.2deg', '-2.2deg']);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-2.2deg', '2.2deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseXNormalized.set(x);
    mouseYNormalized.set(y);
  };

  const handleMouseLeave = () => {
    mouseXNormalized.set(0);
    mouseYNormalized.set(0);
  };

  const getButtonIcon = () => {
    switch (project.demoButtonIcon) {
      case 'visibility':
        return <Eye className="w-4 h-4" />;
      case 'point_of_sale':
        return <ShoppingCart className="w-4 h-4" />;
      case 'directions_car':
        return <Car className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
      className="w-full relative"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          scale: 1.006,
        }}
        transition={{
          scale: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
        }}
        className="w-full bg-[var(--bg-card)] backdrop-blur-2xl border-[4px] border-[var(--border-color)] brutal-shadow-md hover:brutal-shadow-accent transition-shadow duration-300 will-change-transform overflow-hidden"
      >
      {/* Card Header Bar */}
      <div className="h-10 bg-[var(--bg-terminal-header)] border-b-[3px] border-[var(--border-color)] px-3 sm:px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 border border-[var(--border-color)] ${
              project.id === 'cafe' ? 'bg-[#00eefc]' : 'bg-[#c3f400]'
            }`}
          />
          <span className="font-mono-code text-xs uppercase text-white font-bold tracking-wider truncate max-w-[220px] sm:max-w-none">
            PROJECT_{project.projectNumber} // {project.sysCode}
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono-code text-[11px] text-white/80">
          <span className="hidden sm:inline">{project.statusBadge}</span>
          <span className="hidden sm:inline">•</span>
          <span className={`font-bold ${project.id === 'cafe' ? 'text-[#00eefc]' : 'text-[#c3f400]'}`}>
            {project.versionBadge}
          </span>
        </div>
      </div>

      {/* Card Content Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Mockup / Visual Area */}
        <div className="lg:col-span-7 p-4 sm:p-6 bg-[var(--bg-card-subtle)] border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-[var(--border-color)] flex flex-col justify-between gap-4">
          {/* Visual Mockup Canvas */}
          <div
            className="relative w-full aspect-video border-[3px] border-[var(--border-color)] overflow-hidden bg-[var(--bg-inset)] group cursor-pointer"
            onClick={() => onOpenDemo(project)}
          >
            <img
              src={project.imageSrc}
              alt={project.imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-terminal-header)]/80 via-transparent to-transparent opacity-70 pointer-events-none" />

            {/* Live Telemetry Tag Overlay */}
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 px-2.5 py-1 bg-[var(--bg-terminal-header)]/90 border-2 border-[var(--border-color)] font-mono-code text-[10px] sm:text-[11px] text-[#00eefc] uppercase flex items-center gap-2">
              {project.overlayTag.type === 'pulse' && (
                <span className="w-2 h-2 rounded-full bg-[#00eefc] animate-pulse" />
              )}
              {project.overlayTag.type === 'ping' && (
                <span className="w-2 h-2 bg-[#c3f400] animate-ping" />
              )}
              {project.overlayTag.type === 'icon' && (
                <RotateCw className="w-3 h-3 text-[#00eefc] animate-spin" style={{ animationDuration: '4s' }} />
              )}
              <span>{project.overlayTag.text}</span>
            </div>
          </div>

          {/* Metric Badges Row */}
          <div className="grid grid-cols-3 gap-2">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-2 sm:p-2.5 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] text-center">
                <p className="font-mono-code text-[9px] sm:text-[10px] text-[var(--text-muted)] uppercase truncate font-bold">
                  {metric.label}
                </p>
                <p
                  className={`font-display text-base sm:text-2xl font-bold truncate ${
                    metric.color === 'lime'
                      ? 'text-[#aee000] dark:text-[#c3f400]'
                      : metric.color === 'cyan'
                      ? 'text-[#00bed6] dark:text-[#00eefc]'
                      : 'text-[var(--text-primary)]'
                  }`}
                >
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details, Stack, CTAs */}
        <div className="lg:col-span-5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between gap-5 bg-[var(--bg-card)]">
          <div className="space-y-3">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => {
                const color =
                  i === 0
                    ? 'text-[#aee000] dark:text-[#c3f400]'
                    : i === 1
                    ? 'text-[#00bed6] dark:text-[#00eefc]'
                    : 'text-[var(--text-muted)]';
                return (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 bg-[var(--bg-inset)] border border-[var(--border-color)] font-mono-code text-[10px] sm:text-[11px] font-bold ${color}`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>

            {/* Title */}
            <h3 className="font-display text-2xl sm:text-3xl uppercase text-[var(--text-primary)] font-bold tracking-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              {project.description}
            </p>

            {/* Bullet features */}
            <div className="p-3 bg-[var(--bg-inset)] border-2 border-[var(--border-color)] space-y-1 text-xs font-mono-code">
              {project.features.map((feature, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'text-[#aee000] dark:text-[#c3f400] font-bold'
                      : i === 1
                      ? 'text-[var(--text-primary)]'
                      : 'text-[#00bed6] dark:text-[#00eefc]'
                  }
                >
                  {feature}
                </p>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenDemo(project)}
              className={`flex-1 px-4 py-3 sm:py-2.5 border-[3px] border-[var(--border-color)] font-mono-code text-xs sm:text-sm uppercase font-bold brutal-shadow-sm hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-transform text-center flex items-center justify-center gap-2 cursor-pointer ${
                project.id === 'cafe'
                  ? 'bg-[#00eefc] text-[#00363a]'
                  : 'bg-[#c3f400] text-[#283500]'
              }`}
            >
              {getButtonIcon()}
              <span>{project.demoButtonText}</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenCode(project)}
              className="px-4 py-3 sm:py-2.5 bg-[var(--bg-card)] border-[3px] border-[var(--border-color)] text-[var(--text-primary)] font-mono-code text-xs sm:text-sm uppercase font-bold brutal-shadow-sm hover:bg-[var(--bg-inset)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-transform flex items-center justify-center gap-2 cursor-pointer"
            >
              <Code className="w-4 h-4" />
              <span>GITHUB</span>
            </button>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
}

