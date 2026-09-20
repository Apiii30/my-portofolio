import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';

interface ProjectsSectionProps {
  onOpenDemo: (project: ProjectItem) => void;
  onOpenCode: (project: ProjectItem) => void;
}

export default function ProjectsSection({ onOpenDemo, onOpenCode }: ProjectsSectionProps) {
  return (
    <section id="projects" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 bg-[#c3f400] text-[#283500] border-2 border-[var(--border-color)] font-mono-code text-xs uppercase font-bold">
              03 // SELECTED BUILDS
            </span>
            <span className="font-mono-code text-xs text-[var(--text-muted)]">PROD_INDEX.MAP</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-[var(--text-primary)] font-bold tracking-tight">
            HIGH-CALIBER SHIPMENTS
          </h2>
        </div>
        <p className="font-mono-code text-xs sm:text-sm text-[var(--text-muted)] max-w-md">
          // Every project built with uncompromising speed, zero-compromise architectural standards, and tactile brutalist depth.
        </p>
      </div>

      {/* Projects Stack - Animated Per Card */}
      <div className="space-y-8 sm:space-y-12">
        {PROJECTS.map((project, idx) => (
          <ScrollReveal
            key={project.id}
            direction={idx % 2 === 0 ? '3d-left' : '3d-right'}
            delay={0.06}
          >
            <ProjectCard
              project={project}
              onOpenDemo={onOpenDemo}
              onOpenCode={onOpenCode}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

