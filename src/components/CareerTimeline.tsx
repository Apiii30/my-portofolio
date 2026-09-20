import { CAREER_MILESTONES } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function CareerTimeline() {
  return (
    <section id="timeline" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-0.5 bg-[#c3f400] text-[#283500] border-2 border-[var(--border-color)] font-mono-code text-xs uppercase font-bold">
          04 // EVOLUTION
        </span>
        <div className="h-0.5 flex-1 bg-[var(--border-subtle)]" />
        <span className="font-mono-code text-xs uppercase text-[var(--text-muted)]">CHRONO_TRACKER.LOG</span>
      </div>

      <div className="mb-8">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-[var(--text-primary)] font-bold tracking-tight">
          CAREER TRAJECTORY & MILESTONES
        </h2>
      </div>

      {/* Timeline Vertical Container */}
      <div className="relative pl-6 sm:pl-10 space-y-6 sm:space-y-8 border-l-4 border-[var(--border-color)] ml-3 sm:ml-4">
        {CAREER_MILESTONES.map((milestone, idx) => {
          const badgeBg =
            milestone.color === 'lime'
              ? 'bg-[#c3f400] text-[#283500]'
              : milestone.color === 'cyan'
              ? 'bg-[#00eefc] text-[#00363a]'
              : 'bg-[var(--bg-inset)] text-[var(--text-primary)]';

          const periodColor =
            milestone.color === 'lime'
              ? 'text-[#aee000] dark:text-[#c3f400]'
              : milestone.color === 'cyan'
              ? 'text-[#00bed6] dark:text-[#00eefc]'
              : 'text-[var(--text-muted)]';

          const shadowHover =
            milestone.color === 'lime'
              ? 'hover:brutal-shadow-accent'
              : milestone.color === 'cyan'
              ? 'hover:brutal-shadow-cyan'
              : 'hover:brutal-shadow-sm';

          return (
            <div key={milestone.id} className="relative group">
              {/* Timeline Node Bullet with Number - Elevated z-index & perfectly anchored to the timeline track */}
              <div
                className={`absolute -left-[42px] sm:-left-[58px] top-3 w-8 h-8 ${badgeBg} border-[3px] border-[var(--border-color)] brutal-shadow-sm flex items-center justify-center font-mono-code font-bold text-xs group-hover:scale-125 transition-transform z-20`}
              >
                {milestone.number}
              </div>

              {/* Milestone Card with 3D Reveal */}
              <ScrollReveal
                direction={idx % 2 === 0 ? '3d-right' : '3d-left'}
                delay={0.06}
                overflow="visible"
              >
                <div
                  className={`p-4 sm:p-6 bg-[var(--bg-card)] backdrop-blur-xl border-[3px] border-[var(--border-color)] brutal-shadow-sm ${shadowHover} hover:-translate-y-1 transition-all`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[var(--border-subtle)] pb-2.5 mb-3">
                    <div>
                      <span className={`font-mono-code text-xs uppercase font-bold ${periodColor}`}>
                        {milestone.period}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl uppercase text-[var(--text-primary)] font-bold tracking-tight">
                        {milestone.role}
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-[var(--bg-inset)] border border-[var(--border-color)] font-mono-code text-xs uppercase text-[var(--text-primary)] font-bold self-start sm:self-auto">
                      {milestone.company} • {milestone.location}
                    </span>
                  </div>

                  <p className="font-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-3">
                    {milestone.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-[var(--bg-inset)] border border-[var(--border-color)] font-mono-code text-[11px] text-[var(--text-muted)] font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}

