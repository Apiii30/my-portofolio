import { ReactNode } from 'react';
import { motion } from 'motion/react';

export type ScrollDirection = 'left' | 'right' | 'up' | '3d-left' | '3d-right' | '3d-tilt' | '3d-flip-up' | '3d-matrix';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: ScrollDirection;
  className?: string;
  containerClassName?: string;
  id?: string;
  overflow?: 'clip' | 'visible' | 'hidden';
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = '3d-left',
  className = '',
  containerClassName = '',
  id,
  overflow = 'clip',
}: ScrollRevealProps) {
  // Define initial 3D transform variations based on direction
  const getInitialState = () => {
    switch (direction) {
      case 'left':
      case '3d-left':
        return {
          opacity: 0,
          x: -70,
          y: 15,
          rotateY: 10,
          rotateZ: -1.2,
          scale: 0.94,
        };
      case 'right':
      case '3d-right':
        return {
          opacity: 0,
          x: 70,
          y: 15,
          rotateY: -10,
          rotateZ: 1.2,
          scale: 0.94,
        };
      case '3d-tilt':
        return {
          opacity: 0,
          y: 60,
          rotateX: 12,
          scale: 0.94,
        };
      case '3d-flip-up':
      case '3d-matrix':
        return {
          opacity: 0,
          y: 55,
          rotateX: 28,
          scale: 0.88,
          filter: 'blur(3px)',
        };
      case 'up':
      default:
        return {
          opacity: 0,
          y: 40,
          scale: 0.96,
        };
    }
  };

  const overflowClass =
    overflow === 'visible'
      ? 'overflow-visible'
      : overflow === 'hidden'
      ? 'overflow-hidden'
      : 'overflow-x-clip';

  return (
    <div
      style={{ perspective: '1400px', perspectiveOrigin: 'center center' }}
      className={`w-full ${overflowClass} ${containerClassName}`}
    >
      <motion.div
        id={id}
        initial={getInitialState()}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          filter: 'blur(0px)',
        }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 0.75,
          delay,
          ease: [0.16, 1, 0.3, 1], // fluid responsive cubic ease
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`w-full h-full ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
