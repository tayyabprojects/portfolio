import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Sun, Moon, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOpenCv: () => void;
}

export default function Header({ 
  activeSection, 
  onNavigate, 
  isDarkMode, 
  toggleDarkMode, 
  onOpenCv 
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="nav-container"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
        scrolled
          ? 'bg-[#f8fafc]/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/40 dark:border-slate-800/40 py-3'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/60 dark:border-slate-800 rounded-2xl px-4 md:px-6 py-3 shadow-lg shadow-slate-100/80 dark:shadow-none">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 cursor-pointer group"
          id="nav-logo"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
            MT
          </div>
          <span className="font-bold text-base md:text-lg tracking-tight text-slate-900 dark:text-slate-100">
            Muhammad <span className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors">Tayyab</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 text-sm font-medium" id="nav-desktop-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm tracking-tight cursor-pointer transition-all duration-300 relative py-1 px-2 rounded-lg ${
                activeSection === item.id
                  ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/50 dark:bg-emerald-950/30'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-emerald-600 dark:bg-emerald-400 rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
          
          <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 mx-1" />

          {/* New Resume trigger */}
          <button
            onClick={onOpenCv}
            className="flex items-center gap-1.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-750 dark:text-slate-200 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 transition-all font-bold text-xs shadow-xs cursor-pointer"
            id="nav-cv-button"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            <span>Resume / CV</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleDarkMode}
            className="p-1.5 rounded-full border border-slate-200 dark:border-slate-850 text-slate-550 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all cursor-pointer"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" /> : <Moon className="w-4 h-4 text-emerald-600" />}
          </button>

          <a
            href="https://www.linkedin.com/in/asktayyab/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 px-4 py-1.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/50 transition-all font-bold text-xs shadow-sm cursor-pointer"
            id="nav-hire-badge"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 animate-pulse" />
            <span>Available for Hire</span>
          </a>
        </div>

        {/* Medium and small screens triggers */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Quick theme toggler */}
          <button
            onClick={toggleDarkMode}
            className="p-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-550 dark:text-slate-400 z-10 cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-emerald-600" />}
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all outline-none"
            id="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/65 dark:border-slate-800 rounded-2xl p-4 shadow-2xl overflow-hidden"
            id="nav-mobile-drawer"
          >
            <div className="flex flex-col gap-3 py-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 px-4 rounded-xl text-sm font-semibold transition-all ${
                    activeSection === item.id
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-650 dark:text-emerald-400 border border-emerald-100/55 dark:border-emerald-900/40'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="h-px bg-slate-205/50 dark:bg-slate-800 my-1" />
              
              {/* Quick actions row */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onOpenCv();
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center gap-1.5 bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold py-2.5 rounded-xl text-xs border border-slate-200 dark:border-slate-750 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span>Resume / CV</span>
                </button>

                <a
                  href="https://www.linkedin.com/in/asktayyab/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/15 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
