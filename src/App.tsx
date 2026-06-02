import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import CvModal from './components/CvModal';
import { getPortfolioData, savePortfolioData, PortfolioData } from './lib/dataStore';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => getPortfolioData());
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [cvAutoPrint, setCvAutoPrint] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('isDarkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  // Set up an intersection observer to track user scroll positions and highlight nav appropriately
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'services', 'experience', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the mid viewport space
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Sync Dark Mode state to document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scroll to accommodate sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: sectionId === 'hero' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleUpdatePortfolio = (newData: PortfolioData) => {
    setPortfolioData(newData);
    savePortfolioData(newData);
  };

  return (
    <div className="bg-[#FAFBFD] dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen selection:bg-emerald-600/10 selection:text-emerald-900 dark:selection:bg-emerald-500/20 dark:selection:text-emerald-200 relative transition-colors duration-300">
      {/* Structural visual blueprint lines in background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f050_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f050_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none" />

      {/* Navigation Header */}
      <Header 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onOpenCv={(autoPrint) => {
          setIsCvOpen(true);
          setCvAutoPrint(!!autoPrint);
        }}
        data={portfolioData}
      />

      {/* Main Sections */}
      <main className="relative">
        <Hero personalInfo={portfolioData.personalInfo} onNavigate={handleNavigate} onOpenCv={() => { setIsCvOpen(true); setCvAutoPrint(false); }} />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-205 dark:via-slate-800 to-transparent" />
        </div>

        <About aboutInfo={portfolioData.aboutInfo} />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-205 dark:via-slate-800 to-transparent" />
        </div>

        <Skills skillsData={portfolioData.skillsData} />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-205 dark:via-slate-800 to-transparent" />
        </div>

        <Projects projects={portfolioData.projects} />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-205 dark:via-slate-800 to-transparent" />
        </div>

        <Services services={portfolioData.services} />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-205 dark:via-slate-800 to-transparent" />
        </div>

        <Experience experiences={portfolioData.experiences} />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-205 dark:via-slate-800 to-transparent" />
        </div>

        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onScrollToTop={() => handleNavigate('hero')} 
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Admin Panel Popup Controls */}
      <AdminPanel
        data={portfolioData}
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onSave={handleUpdatePortfolio}
        isAuthenticated={isAdminAuthenticated}
        onAuthenticate={setIsAdminAuthenticated}
      />

      {/* Interactive CV Resume Overlay */}
      <CvModal 
        isOpen={isCvOpen} 
        onClose={() => setIsCvOpen(false)} 
        data={portfolioData} 
        cvAutoPrint={cvAutoPrint}
        onResetAutoPrint={() => setCvAutoPrint(false)}
      />
    </div>
  );
}

