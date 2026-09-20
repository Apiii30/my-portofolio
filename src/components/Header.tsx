import { useState } from 'react';
import { Sun, Moon, Zap, Menu, X } from 'lucide-react';
import hamLogo from '../assets/images/ham_logo_icon_1789931257810.jpg';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

export default function Header({ isDark, onToggleTheme, activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on nav click
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'stack', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 lg:px-8 pt-2 sm:pt-3">
      <div className="h-16 sm:h-20 max-w-[1440px] mx-auto px-3 sm:px-6 glass-panel border-[3px] border-[var(--border-color)] brutal-shadow-md flex items-center justify-between transition-all">
        {/* Logo */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-[#c3f400] border-2 border-[var(--border-color)] brutal-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-transform overflow-hidden select-none shrink-0"
            aria-label="HAM Home"
          >
            <img
              src={hamLogo}
              alt="HAM Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1 bg-[var(--bg-inset)] border-2 border-[var(--border-color)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 lg:px-4 py-1.5 font-mono-code text-xs uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-[#c3f400] text-[#283500] border-2 border-[var(--border-color)] font-bold brutal-shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Avatar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark / Light Mode Toggle */}
          <button
            type="button"
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            onClick={onToggleTheme}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[var(--bg-inset)] border-2 border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[#c3f400] hover:text-[#283500] brutal-shadow-sm active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-[#c3f400] hover:text-[#283500]" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-primary)] hover:text-[#283500]" />
            )}
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-[#00eefc] text-[#00363a] border-2 border-[var(--border-color)] font-mono-code text-xs font-bold uppercase tracking-wider brutal-shadow-sm hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-transform shrink-0"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>HIRE ME</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center bg-[var(--bg-inset)] border-2 border-[var(--border-color)] text-[var(--text-primary)] brutal-shadow-sm cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-3.5 glass-panel border-[3px] border-[var(--border-color)] brutal-shadow-md flex flex-col gap-2 animate-fade-in">
          <div className="flex items-center justify-between pb-2 mb-1 border-b border-[var(--border-subtle)] text-[11px] font-mono-code text-[var(--text-muted)]">
            <span>SYS_NAVIGATION</span>
            <span className="text-[#c3f400] font-bold">ONLINE</span>
          </div>

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick}
                className={`px-3 py-2.5 font-mono-code text-xs uppercase tracking-wider transition-colors border-2 ${
                  isActive
                    ? 'bg-[#c3f400] text-[#283500] border-[var(--border-color)] font-bold'
                    : 'text-[var(--text-primary)] hover:bg-[var(--bg-inset)] border-[var(--border-subtle)]'
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-2 flex items-center justify-center gap-1.5 py-3 bg-[#00eefc] text-[#00363a] border-2 border-[var(--border-color)] font-mono-code text-xs font-bold uppercase tracking-wider brutal-shadow-sm"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>HIRE ME NOW</span>
          </a>
        </div>
      )}
    </header>
  );
}

