import { Briefcase, Milestone, ShieldCheck, Zap } from 'lucide-react';
import { ExperienceData } from '../lib/dataStore';

interface ExperienceProps {
  experiences: ExperienceData[];
}

const milestoneIcons = [ShieldCheck, Zap, Milestone];

const milestonesList = [
  {
    iconIdx: 0,
    title: 'DAE CIT Professional Degree',
    desc: 'Finished with honors, gaining rich technical expertise across algorithm formulations, relational data schemas, and computer communications.'
  },
  {
    iconIdx: 1,
    title: 'Workflow Automation Integration',
    desc: 'Seamlessly merged low-code engines (n8n) with Gemini APIs to scrape and filter vendor parameters instantly with zero manual delay.'
  },
  {
    iconIdx: 2,
    title: '100% Backlink Indexing Rate',
    desc: 'Consistently validated backlink health to secure permanent, search-crawled positions with organic relevance.'
  }
];

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 relative bg-slate-50 dark:bg-[#070913]/40 transition-colors duration-300">
      <div className="absolute right-12 top-10 w-96 h-96 bg-purple-600/5 dark:bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16" id="experience-title">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#4f46e5] dark:text-indigo-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] dark:bg-indigo-400"></span> History & Accomplishments
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Experience & Milestones
          </h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mt-4 text-xs md:text-sm font-medium leading-relaxed">
            Forging high-performance pathways in technical development and digital search strategy across several years of dedicated commercial application.
          </p>
        </div>

        {/* Combined Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          {/* Left Column: Timeline (8 cols) */}
          <div className="lg:col-span-8 space-y-8" id="experience-timeline">
            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2 font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400 anonymity-dot animate-pulse"></span> Commercial Journey
            </h4>
            
            {experiences.map((exp, expIdx) => (
              <div 
                key={expIdx}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 hover:border-indigo-500/20 dark:hover:border-indigo-500/10 transition-all duration-305 shadow-lg shadow-slate-100 dark:shadow-none relative overflow-hidden"
              >
                {/* Floating Period Badge */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div>
                    <span className="text-[10px] md:text-xs font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-3.5 py-1.5 rounded-full border border-indigo-105 dark:border-indigo-900/50 uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <h5 className="text-lg md:text-xl font-black text-slate-900 dark:text-slate-100 mt-3 tracking-tight">
                      {exp.role}
                    </h5>
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xs md:text-sm mt-1">
                      {exp.institution}
                    </p>
                  </div>
                </div>

                <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed mb-4 italic border-l-2 border-indigo-550/30 pl-3 font-medium">
                  {exp.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex gap-2.5 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0 mt-2" />
                      <span className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {exp.tags.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-450 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-slate-250/20 dark:border-slate-800/80 shadow-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Achievements & Cards (4 cols) */}
          <div className="lg:col-span-4 space-y-6" id="achievements-highlights">
            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2 font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse"></span> core milestones
            </h4>

            {milestonesList.map((mil, idx) => {
              const Icon = milestoneIcons[mil.iconIdx];
              return (
                <div 
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/85 rounded-3xl p-6 hover:border-purple-500/20 dark:hover:border-purple-500/10 transition-all duration-300 shadow-md shadow-slate-100 dark:shadow-none relative group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-extrabold text-slate-900 dark:text-slate-105 group-hover:text-purple-605 dark:group-hover:text-purple-400 transition-colors text-sm md:text-base leading-tight tracking-tight">
                        {mil.title}
                      </h5>
                      <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed mt-2 font-medium">
                        {mil.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Micro stats banner */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/15 dark:to-purple-950/15 border border-indigo-100 dark:border-indigo-900/60 rounded-3xl p-6 relative overflow-hidden">
              <p className="text-[10px] text-indigo-650 dark:text-indigo-400 font-black uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Status Report
              </p>
              <h5 className="text-lg font-black text-slate-900 dark:text-slate-100 tracking-tight">READY TO COLLABORATE</h5>
              <p className="text-xs text-slate-505 dark:text-slate-400 mt-2 leading-relaxed font-semibold">
                Available immediately for bespoke link building audits, SaaS integration setup, and off-page campaign consulting.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
