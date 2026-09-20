/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Header from './components/Header';
import MarqueeWire from './components/MarqueeWire';
import Hero from './components/Hero';
import AboutTerminal from './components/AboutTerminal';
import TechArsenal from './components/TechArsenal';
import ProjectsSection from './components/ProjectsSection';
import CareerTimeline from './components/CareerTimeline';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import CodeModal from './components/CodeModal';
import ScrollReveal from './components/ScrollReveal';
import ScrollToTop from './components/ScrollToTop';
import AnimatedBackground from './components/AnimatedBackground';
import { ProjectItem } from './types';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ham_portfolio_theme');
      if (saved) return saved === 'dark';
    }
    return true;
  });

  const [activeSection, setActiveSection] = useState('about');
  const [selectedDemoProject, setSelectedDemoProject] = useState<ProjectItem | null>(null);
  const [selectedCodeProject, setSelectedCodeProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Scroll Progress Tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ham_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ham_portfolio_theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'stack', 'projects', 'timeline', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[var(--surface-canvas)] text-[var(--text-primary)] transition-colors duration-200 selection:bg-[#c3f400] selection:text-[#283500] relative">
      {/* Dynamic Animated Ambient Highlights Background */}
      <AnimatedBackground />

      {/* Scroll Progress Bar at the top of the viewport */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#c3f400] origin-left z-50 pointer-events-none"
      />

      {/* Fixed Sticky Header */}
      <Header
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        activeSection={activeSection}
      />

      {/* Main Page Layout */}
      <main className="relative z-10 pt-16 sm:pt-20 lg:pt-22">
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Running Ticker Wire Marquee */}
        <MarqueeWire />

        {/* 01 // Identity: Retro Cyber OS About Terminal */}
        <AboutTerminal />

        {/* 02 // Tech Stack: Interactive Engineering Arsenal */}
        <TechArsenal />

        {/* 03 // Selected Builds: 3D Tilt Project Cards */}
        <ProjectsSection
          onOpenDemo={(project) => setSelectedDemoProject(project)}
          onOpenCode={(project) => setSelectedCodeProject(project)}
        />

        {/* 04 // Evolution: Career Trajectory Milestones */}
        <CareerTimeline />

        {/* 05 // Education: Academic Degrees & Industry Certifications */}
        <EducationSection />

        {/* 06 // Transmission: Encrypted Contact Form & Direct Copy */}
        <ContactSection />
      </main>

      {/* Brutalist Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Interactive Project Sandboxes Modal */}
      <ProjectModal
        project={selectedDemoProject}
        onClose={() => setSelectedDemoProject(null)}
      />

      {/* Resume Spec Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* GitHub Repository Code Architecture Modal */}
      <CodeModal
        project={selectedCodeProject}
        onClose={() => setSelectedCodeProject(null)}
      />

      {/* Floating Scroll To Top Action */}
      <ScrollToTop />
    </div>
  );
}


