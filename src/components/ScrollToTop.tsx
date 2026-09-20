import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 320px
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="scroll-to-top-btn"
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 p-2.5 sm:p-3 bg-[var(--bg-card-solid)] text-[var(--text-primary)] border-[3px] border-[var(--border-color)] brutal-shadow-sm hover:brutal-shadow-accent hover:bg-[#c3f400] hover:text-[#283500] active:translate-x-0.5 active:translate-y-0.5 transition-all duration-200 flex items-center gap-1.5 cursor-pointer group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
          <span className="font-mono-code text-[11px] font-bold uppercase tracking-wider hidden sm:inline-block">
            TOP
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
