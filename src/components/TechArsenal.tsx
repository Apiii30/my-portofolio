import { useState } from 'react';
import { motion } from 'motion/react';
import { TECH_SKILLS } from '../data/portfolioData';
import { TechCategory } from '../types';
import ScrollReveal from './ScrollReveal';

export default function TechArsenal() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('all');

  const filteredSkills = TECH_SKILLS.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="stack" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 bg-[#00eefc] text-[#00363a] border-2 border-[var(--border-color)] font-mono-code text-xs uppercase font-bold">
              02 // TECH STACK
            </span>
            <span className="font-mono-code text-xs text-[var(--text-muted)]">ARSENAL_CONFIG.JSON</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-[var(--text-primary)] font-bold tracking-tight">
            ENGINEERING ARSENAL
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-[var(--bg-inset)] p-1.5 border-2 border-[var(--border-color)] overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: 'ALL [12]' },
            { id: 'frontend', label: 'FRONTEND' },
            { id: 'backend', label: 'BACKEND & DB' },
            { id: 'devops', label: 'DEVOPS & TOOLS' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as TechCategory)}
              className={`px-3 py-1.5 font-mono-code text-xs uppercase font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#c3f400] text-[#283500] border-2 border-[var(--border-color)] brutal-shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Interactive Tech Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredSkills.map((skill, idx) => {
          const shadowClass =
            skill.colorType === 'lime'
              ? 'hover:brutal-shadow-accent'
              : skill.colorType === 'cyan'
              ? 'hover:brutal-shadow-cyan'
              : 'hover:brutal-shadow-md';

          const badgeBg =
            skill.colorType === 'lime'
              ? 'bg-[#c3f400] text-[#283500]'
              : skill.colorType === 'cyan'
              ? 'bg-[#00eefc] text-[#00363a]'
              : 'bg-[var(--bg-inset)] text-[var(--text-primary)]';

          const textAccent =
            skill.colorType === 'lime'
              ? 'text-[#aee000] dark:text-[#c3f400]'
              : skill.colorType === 'cyan'
              ? 'text-[#00bed6] dark:text-[#00eefc]'
              : 'text-[var(--text-primary)]';

          const cascadeDelay = (idx % 4) * 0.08 + Math.floor(idx / 4) * 0.04;

          return (
            <ScrollReveal
              key={skill.id}
              direction="3d-matrix"
              delay={cascadeDelay}
              containerClassName="h-full"
            >
              <div
                className={`group p-4 sm:p-5 bg-[var(--bg-card)] backdrop-blur-xl border-[3px] border-[var(--border-color)] brutal-shadow-sm ${shadowClass} hover:-translate-y-2 hover:scale-[1.015] transition-all duration-300 flex flex-col justify-between h-full`}
              >
                {/* Header inside card */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`w-8 h-8 flex items-center justify-center border-2 border-[var(--border-color)] font-bold font-mono-code text-xs shrink-0 ${badgeBg} group-hover:rotate-6 transition-transform`}
                  >
                    {skill.code}
                  </span>
                  <span className="font-mono-code text-[11px] uppercase text-[var(--text-muted)] font-bold group-hover:text-[var(--text-primary)] transition-colors">
                    {skill.badge}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="my-1">
                  <h3 className="font-display text-lg sm:text-xl uppercase text-[var(--text-primary)] font-bold tracking-tight">
                    {skill.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] mt-1 line-clamp-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Proficiency Meter */}
                <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between font-mono-code text-xs">
                    <span className={`${textAccent} font-bold tracking-wider text-[11px]`}>PROFICIENCY</span>
                    <span className="font-bold font-mono-code text-[var(--text-primary)]">{skill.proficiency}%</span>
                  </div>
                  {/* Visual Bar with fluid fill-up animation */}
                  <div className="w-full h-2 bg-[var(--bg-inset)] overflow-hidden border border-[var(--border-subtle)]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.9,
                        delay: cascadeDelay + 0.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`h-full ${
                        skill.colorType === 'lime'
                          ? 'bg-[#c3f400]'
                          : skill.colorType === 'cyan'
                          ? 'bg-[#00eefc]'
                          : 'bg-[var(--text-primary)]'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

