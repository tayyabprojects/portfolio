import React, { useRef } from 'react';
import { X, Printer, Mail, Phone, MapPin, Linkedin, Award, Briefcase, FileText, CheckCircle2, Globe, Code2, Download } from 'lucide-react';
import { PortfolioData } from '../lib/dataStore';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export default function CvModal({ isOpen, onClose, data }: CvModalProps) {
  const cvRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    // We add a class to body, print, and remove it. 
    // To ensure a high-fidelity print experience across modern browsers,
    // we use a quick iframe or print stylesheet block. 
    // A clean way to print is adding style rules that isolate the printing item
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body { 
          background: white !important; 
          color: black !important;
        }
        #nav-container, main, footer, .admin-trigger, #cv-modal-backdrop, .cv-modal-header {
          display: none !important;
        }
        #printable-cv-view {
          display: block !important;
          position: absolute;
          left: 0;
          top: 0;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          box-shadow: none !important;
          border: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    window.print();
    // Use timeout to let the print dialog close before removing style
    setTimeout(() => {
      document.head.removeChild(style);
    }, 500);
  };

  const handleDownloadTxt = () => {
    let text = `======================================================================
MUHAMMAD TAYYAB - SEO SPECIALIST & AI DEVELOPER
======================================================================

CONTACT INFORMATION:
- Email: ${personalInfo.email}
- WhatsApp: ${personalInfo.whatsapp}
- Location: ${personalInfo.basis}
- LinkedIn: https://linkedin.com/in/asktayyab

----------------------------------------------------------------------
PROFESSIONAL SUMMARY
----------------------------------------------------------------------
${personalInfo.bio} Educated with a solid foundation in computer algorithms and hardware diagnostics, bridging search metrics with digital asset production.

----------------------------------------------------------------------
TECHNICAL EDUCATION
----------------------------------------------------------------------
DAE CIT (Diploma of Associate Engineer in Computer Information Technology)
A comprehensive 3-year professional education detailing computer systems, database design, software development, and web architectures.

----------------------------------------------------------------------
WORK HISTORY & ROLES
----------------------------------------------------------------------
`;

    experiences.forEach((exp) => {
      text += `\n* ${exp.role.toUpperCase()}
  Institution/Company: ${exp.institution}
  Period: ${exp.period}
  Description: ${exp.description}
  Key Achievements:\n`;
      exp.bullets.forEach((b) => {
        text += `  - ${b}\n`;
      });
    });

    text += `\n----------------------------------------------------------------------
KEY BUILT PROJECTS
----------------------------------------------------------------------
`;

    projects.forEach((proj) => {
      text += `\n* ${proj.title.toUpperCase()} [${proj.category}]
  Description: ${proj.description}
  Live URL: ${proj.liveLink}
  Tech Stack: ${proj.tech.join(', ')}
`;
    });

    text += `\n----------------------------------------------------------------------
CORE DIGITAL CAPABILITIES & SKILLS
----------------------------------------------------------------------
- SEO, Outreach & Guest Blogging: ${skillsData.seoSkills.map(s => `${s.name} (${s.level}%)`).join(', ')}
- Web & Full-Stack Stack: ${skillsData.devSkills.map(s => `${s.name} (${s.level}%)`).join(', ')}
- Low-Code, Vibe Coding & AI: ${skillsData.automationSkills.map(s => `${s.name} (${s.level}%)`).join(', ')}

======================================================================
Generated in sync with Muhammad Tayyab's live web portfolio.
Designed for high compatibility with corporate ATS screening.
======================================================================
`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Muhammad_Tayyab_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const { personalInfo, aboutInfo, skillsData, experiences, projects } = data;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs"
      id="cv-modal-backdrop"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 w-full max-w-4xl rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col max-h-[90vh] overflow-hidden border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
        id="cv-modal-body"
      >
        {/* Header Controls */}
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-3 mb-6 cv-modal-header">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-base md:text-lg">Professional Resume</h3>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={handleDownloadTxt}
              title="Download clean plaintext version optimized for corporate Applicant Tracking Systems (ATS)"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3.5 rounded-xl text-xs font-bold transition-all shadow-sm shadow-emerald-600/10 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download ATS (.txt)</span>
            </button>
            <button
              onClick={handlePrint}
              title="Print directly or save as stylish PDF document via browser print options"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl text-xs font-bold transition-all shadow-sm shadow-indigo-600/10 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-450 hover:text-slate-800 dark:hover:text-slate-100 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Panel */}
        <div className="overflow-y-auto pr-2 flex-1" id="printable-cv-wrapper">
          <div 
            ref={cvRef}
            id="printable-cv-view"
            className="bg-white p-6 md:p-10 border border-slate-150 rounded-2xl mx-auto max-w-[800px] text-slate-800 shadow-xs font-sans text-xs md:text-sm leading-relaxed"
          >
            {/* Header Section */}
            <div className="border-b-2 border-slate-800 pb-5 mb-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">{personalInfo.name}</h1>
                <p className="text-xs md:text-sm font-bold text-indigo-600 uppercase tracking-widest mt-1">
                  Off-Page SEO Specialist & AI-Assisted Developer
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 text-[11px] text-slate-600 font-bold max-w-sm md:text-right">
                <div className="flex items-center md:justify-end gap-1.5 justify-center">
                  <Mail className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center md:justify-end gap-1.5 justify-center">
                  <Phone className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>WhatsApp: {personalInfo.whatsapp}</span>
                </div>
                <div className="flex items-center md:justify-end gap-1.5 justify-center">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>{personalInfo.basis}</span>
                </div>
                <div className="flex items-center md:justify-end gap-1.5 justify-center">
                  <Linkedin className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>linkedin.com/in/asktayyab</span>
                </div>
              </div>
            </div>

            {/* Structured Resume Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Left Column (8 cols): Bio, Experience & Projects */}
              <div className="md:col-span-8 space-y-6">
                
                {/* Executive Summary */}
                <div>
                  <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1 mb-2">
                    Professional Summary
                  </h2>
                  <p className="text-slate-650 text-xs leading-relaxed">
                    {personalInfo.bio} Educated with a solid foundation in computer algorithms and hardware diagnostics, bridging search metrics with digital asset production.
                  </p>
                </div>

                {/* Professional History */}
                <div>
                  <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1 mb-3">
                    Corporate & Freelance History
                  </h2>
                  <div className="space-y-4">
                    {experiences.map((exp, idx) => (
                      <div key={idx} className="relative pl-3.5 border-l-2 border-indigo-500/30">
                        <div className="flex justify-between items-start flex-wrap gap-1">
                          <h3 className="font-extrabold text-slate-900 text-xs md:text-sm">
                            {exp.role}
                          </h3>
                          <span className="text-[10px] font-bold text-indigo-650 bg-indigo-50 px-2 py-0.5 rounded">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-[11px] font-bold text-slate-500 mt-0.5">
                          {exp.institution}
                        </p>
                        <p className="text-slate-600 text-xs mt-1.5">
                          {exp.description}
                        </p>
                        <ul className="list-disc pl-4 mt-2 text-slate-650 text-xs space-y-1">
                          {exp.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Projects Built */}
                <div>
                  <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1 mb-3">
                    Key Prototyped Projects (Vibe Coded)
                  </h2>
                  <div className="space-y-3">
                    {projects.map((proj, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-150 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-extrabold text-slate-800 text-xs">{proj.title}</h3>
                          <span className="text-[10px] uppercase font-extrabold text-indigo-600 tracking-wider">
                            {proj.category}
                          </span>
                        </div>
                        <p className="text-slate-600 text-[11px] mb-2">{proj.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {proj.tech.map((t, tIdx) => (
                            <span key={tIdx} className="text-[9px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-500">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column (4 cols): Education & Detailed Skills */}
              <div className="md:col-span-4 space-y-6">
                
                {/* Education */}
                <div>
                  <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1 mb-2">
                    Formal Education
                  </h2>
                  <div className="space-y-1">
                    <p className="font-extrabold text-slate-950 text-xs">DAE CIT Degree</p>
                    <p className="text-[10px] text-indigo-600 font-bold">Diploma of Associate Engineer</p>
                    <p className="text-slate-500 text-[10px] font-bold">Computer Information Technology</p>
                    <p className="text-slate-600 text-[11px] mt-1.5 leading-tight">
                      3-year professional education detailing computer systems, database design, software, and web architectures.
                    </p>
                  </div>
                </div>

                {/* Skills - SEO */}
                <div>
                  <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1 mb-2">
                    SEO & Outreach
                  </h2>
                  <div className="space-y-2">
                    {skillsData.seoSkills.map((sk) => (
                      <div key={sk.name}>
                        <div className="flex justify-between text-[11px] text-slate-700 font-bold mb-0.5">
                          <span>{sk.name}</span>
                          <span className="text-indigo-600">{sk.level}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                          <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${sk.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills - Dev */}
                <div>
                  <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1 mb-2">
                    Development Stack
                  </h2>
                  <div className="space-y-2">
                    {skillsData.devSkills.map((sk) => (
                      <div key={sk.name}>
                        <div className="flex justify-between text-[11px] text-slate-700 font-bold mb-0.5">
                          <span>{sk.name}</span>
                          <span className="text-purple-600">{sk.level}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                          <div className="bg-purple-600 h-full rounded-full" style={{ width: `${sk.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills - Automation */}
                <div>
                  <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1 mb-2">
                    Vibe Coding & AI
                  </h2>
                  <div className="space-y-2">
                    {skillsData.automationSkills.map((sk) => (
                      <div key={sk.name}>
                        <div className="flex justify-between text-[11px] text-slate-700 font-bold mb-0.5">
                          <span>{sk.name}</span>
                          <span className="text-cyan-600">{sk.level}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                          <div className="bg-cyan-600 h-full rounded-full" style={{ width: `${sk.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Strengths Badge list */}
                <div>
                  <h2 className="text-xs font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-1 mb-2">
                    Core Competencies
                  </h2>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[9px] font-bold bg-indigo-50 border border-indigo-100 text-indigo-700 px-2 py-1 rounded">Guest Blogging</span>
                    <span className="text-[9px] font-bold bg-purple-50 border border-purple-100 text-purple-700 px-2 py-1 rounded">Vibe Coding</span>
                    <span className="text-[9px] font-bold bg-cyan-50 border border-cyan-100 text-cyan-700 px-2 py-1 rounded">Prompt Engineering</span>
                    <span className="text-[9px] font-bold bg-emerald-50 border border-emerald-100 text-emerald-700 px-2 py-1 rounded">Link Integrity</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Footer reference */}
            <div className="border-t border-slate-200 mt-8 pt-4 text-center text-[10px] text-slate-400 font-bold font-mono">
              Generated in sync with Muhammad Tayyab's live web portfolio, updated June 2026.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
