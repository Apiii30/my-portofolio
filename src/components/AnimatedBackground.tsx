import { useMemo } from 'react';
import { motion } from 'motion/react';

export default function AnimatedBackground() {
  // Pre-calculate deterministic random positions for 32 ambient floating light dots
  const particles = useMemo(() => {
    return Array.from({ length: 32 }).map((_, i) => ({
      id: i,
      left: `${(i * 13 + 3) % 96}%`,
      top: `${(i * 19 + 4) % 94}%`,
      size: (i % 3) * 1.2 + 2, // 2px, 3.2px, 4.4px
      duration: 6 + (i % 5) * 2.5, // 6s to 16s
      delay: (i % 7) * 0.8,
      color: i % 3 === 0 ? '#c3f400' : i % 3 === 1 ? '#00eefc' : '#ffffff',
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Background bintik-bintik (Tech Dot Matrix Grid) */}
      <div className="absolute inset-0 bg-tech-grid opacity-50 dark:opacity-35" />

      {/* 2. Cahaya titik-titik neon yang melayang & berkedip halus */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            y: 0,
            x: 0,
            opacity: 0.15,
            scale: 0.8,
          }}
          animate={{
            y: [-15, -45, -15],
            x: [-8, 12, -8],
            opacity: [0.15, 0.85, 0.15],
            scale: [0.8, 1.35, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 8px 1.5px ${p.color}`,
          }}
          className="absolute rounded-full pointer-events-none will-change-transform"
        />
      ))}
    </div>
  );
}
