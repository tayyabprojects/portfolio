import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
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
          ? 'bg-[#f8fafc]/85 backdrop-blur-md border-b border-slate-200/40 py-3'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-2xl px-6 py-3 shadow-lg shadow-slate-100/80">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 cursor-pointer group"
          id="nav-logo"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            MT
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">
            Muhammad <span className="text-indigo-600 group-hover:text-indigo-500 transition-colors">Tayyab</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium" id="nav-desktop-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm tracking-tight cursor-pointer transition-all duration-300 relative py-1 px-2 rounded-lg ${
                activeSection === item.id
                  ? 'text-indigo-600 font-bold bg-indigo-50/50'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indigo-600 rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/in/asktayyab/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full border border-indigo-200/50 transition-all font-bold text-xs shadow-sm cursor-pointer"
            id="nav-hire-badge"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
            <span>Available for Hire</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-600 hover:text-slate-900 p-1.5 rounded-lg hover:bg-slate-100 transition-all outline-none"
          id="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 bg-white/95 backdrop-blur-md border border-slate-200/65 rounded-2xl p-4 shadow-2xl overflow-hidden"
            id="nav-mobile-drawer"
          >
            <div className="flex flex-col gap-3 py-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 px-4 rounded-xl text-sm font-semibold transition-all ${
                    activeSection === item.id
                      ? 'bg-indigo-50 text-indigo-650 border border-indigo-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-slate-205/50 my-1" />
              <a
                href="https://www.linkedin.com/in/asktayyab/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/15 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Available for Hire</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
