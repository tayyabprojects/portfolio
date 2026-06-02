import { Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onOpenAdmin: () => void;
}

export default function Footer({ onScrollToTop, onOpenAdmin }: FooterProps) {
  return (
    <footer className="bg-slate-100 dark:bg-[#06080d] border-t border-slate-205/60 dark:border-slate-900 py-10 px-4 md:px-8 text-xs text-slate-500 dark:text-slate-450 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6" id="footer-container">
        
        {/* Left side: Credentials (clickable copyright) */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
          <button
            onClick={onOpenAdmin}
            className="font-black text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer text-left transition-colors font-sans hover:underline decoration-emerald-500 decoration-2 underline-offset-4"
            title="Click to authenticate as Admin"
          >
            © 2026 • Muhammad Tayyab. All Rights Reserved.
          </button>
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 text-[10px] text-slate-505 dark:text-slate-500 font-bold tracking-wide">
            <span>DAE CIT Professional</span>
            <span className="text-emerald-500/50">•</span>
            <span>SEO Specialist</span>
            <span className="text-emerald-500/50">•</span>
            <span>AI Automated Architect</span>
          </div>
        </div>

        {/* Right side: Social handles & Scroll to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/asktayyab/"
            target="_blank"
            referrerPolicy="no-referrer"
            title="LinkedIn profile"
            className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-655 dark:hover:text-emerald-400 transition-all text-slate-505 dark:text-slate-400 shadow-xs"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:seomatayyab@gmail.com"
            title="Email Muhammad"
            className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-655 dark:hover:text-emerald-400 transition-all text-slate-505 dark:text-slate-400 shadow-xs"
          >
            <Mail className="w-4 h-4" />
          </a>
          
          <button
            onClick={onScrollToTop}
            title="Scroll to Top"
            className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 border-slate-200 flex items-center justify-center hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-white transition-all text-slate-605 dark:text-slate-300 cursor-pointer shadow-md outline-none"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
