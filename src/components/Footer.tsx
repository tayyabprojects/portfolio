import { Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onOpenAdmin: () => void;
}

export default function Footer({ onScrollToTop, onOpenAdmin }: FooterProps) {
  return (
    <footer className="bg-slate-100 border-t border-slate-205/60 py-10 px-4 md:px-8 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6" id="footer-container">
        
        {/* Left side: Credentials (clickable copyright) */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
          <button
            onClick={onOpenAdmin}
            className="font-black text-slate-700 hover:text-indigo-600 cursor-pointer text-left transition-colors font-sans hover:underline decoration-indigo-500 decoration-2 underline-offset-4"
            title="Click to authenticate as Admin"
          >
            © 2026 • Muhammad Tayyab. All Rights Reserved.
          </button>
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 text-[10px] text-slate-500 font-bold tracking-wide">
            <span>DAE CIT Professional</span>
            <span className="text-indigo-500/50">•</span>
            <span>SEO Specialist</span>
            <span className="text-indigo-500/50">•</span>
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
            className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-650 transition-all text-slate-500 shadow-xs"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:seomatayyab@gmail.com"
            title="Email Muhammad"
            className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 hover:text-indigo-650 transition-all text-slate-500 shadow-xs"
          >
            <Mail className="w-4 h-4" />
          </a>
          
          <button
            onClick={onScrollToTop}
            title="Scroll to Top"
            className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all text-slate-600 cursor-pointer shadow-md outline-none"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
