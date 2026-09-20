import { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function MarqueeWire() {
  const marqueeItems = [
    'FRONTEND ARCHITECTURE',
    'DISTRIBUTED SYSTEMS',
    '3D WEBGL GRAPHICS',
    'POSTGRESQL & REDIS',
    'HIGH-THROUGHPUT WEBSOCKETS',
    'DEVOPS & K8S',
    'RAW CYBER BRUTALISM',
    'UI/UX CRAFTSMANSHIP',
    'FULL-STACK LEAD',
    'SYSTEM DESIGN RIGOR',
  ];

  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);
  const currentSpeed = useRef(1.2); // Current speed in px per frame
  const contentRef = useRef<HTMLDivElement>(null);

  // Target speed: normal ~1.2px/frame, when hovered drops to ultra-smooth slow-mo (~0.18px/frame)
  const targetSpeed = isHovered ? 0.18 : 1.2;

  useAnimationFrame((_time, delta) => {
    // Frame delta normalized to 60fps (~16.6ms) to prevent speed spikes across 60Hz/120Hz/144Hz
    const factor = Math.min(Math.max(delta / 16.667, 0.5), 2.5);

    // Smooth lerp deceleration/acceleration: gentle deceleration curve
    const lerpSpeed = isHovered ? 0.045 : 0.055;
    currentSpeed.current += (targetSpeed - currentSpeed.current) * lerpSpeed * factor;

    let nextX = baseX.get() - currentSpeed.current * factor;

    // Seamless infinite looping: when shifted by half the total content width, wrap around smoothly
    if (contentRef.current) {
      const halfWidth = contentRef.current.scrollWidth / 2;
      if (halfWidth > 0 && Math.abs(nextX) >= halfWidth) {
        nextX = nextX + halfWidth;
      }
    }

    baseX.set(nextX);
  });

  return (
    <div
      className="w-full bg-[var(--bg-inset)] border-y-2 border-[var(--border-color)] overflow-hidden py-2.5 select-none relative transition-colors cursor-grab active:cursor-grabbing group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      title="Hover or touch for cinematic slow-motion inspect"
    >
      {/* Content wrapper animated via Framer Motion with real-time lerp */}
      <motion.div
        ref={contentRef}
        style={{ x: baseX }}
        className="flex gap-8 text-[var(--text-secondary)] font-mono-code text-xs sm:text-sm uppercase tracking-widest whitespace-nowrap font-semibold items-center will-change-transform"
      >
        {/* Render 2 identical sets so seamless wrapping works at any screen width */}
        {[0, 1].map((setIndex) => (
          <div key={setIndex} className="flex gap-8 items-center shrink-0">
            {marqueeItems.map((item, idx) => (
              <span key={`${setIndex}-${idx}`} className="flex items-center gap-8">
                <span className="hover:text-[var(--text-primary)] transition-colors">
                  {item}
                </span>
                <span className="inline-block w-1.5 h-1.5 bg-[#c3f400] border border-[var(--border-color)] rotate-45 shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Floating Slow-Mo Indicator HUD (subtle, non-intrusive brutalist pill) */}
      <div
        className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-[var(--bg-card-solid)] border border-[var(--border-color)] font-mono-code text-[10px] uppercase font-bold brutal-shadow-sm ${
          isHovered
            ? 'opacity-100 translate-x-0 text-[#aee000] dark:text-[#c3f400]'
            : 'opacity-0 translate-x-2 text-[var(--text-muted)]'
        }`}
      >
        <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '3s' }} />
        <span>SLOW-MO ACTIVE [0.15X]</span>
      </div>
    </div>
  );
}
