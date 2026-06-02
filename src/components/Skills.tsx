import { Search, Code2, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SkillsData } from '../lib/dataStore';

interface SkillsProps {
  skillsData: SkillsData;
}

export default function Skills({ skillsData }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 relative bg-[#fdfdfd] dark:bg-slate-950 transition-colors duration-300">
      {/* Visual background accents */}
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16" id="skills-title">
          <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span> My Stack & Skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Comprehensive Digital Capabilities
          </h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mt-4 text-xs md:text-sm font-medium leading-relaxed">
            Harnessing a powerful cross-disciplinary combination of search engine optimization, full-stack Javascript development, and robust automation pipelines.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: SEO */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl shadow-slate-100 dark:shadow-none relative group hover:border-emerald-500/25 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-55/10 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-605 dark:text-emerald-400">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900 dark:text-slate-150">SEO & Marketing</h4>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold tracking-wider">Off-page Auth & Outreach</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {skillsData.seoSkills.map((sk) => (
                  <div key={sk.name}>
                    <div className="flex justify-between items-center text-xs text-slate-800 dark:text-slate-200 mb-1.5 font-bold">
                      <span>{sk.name}</span>
                      <span className="text-emerald-650 dark:text-emerald-400 font-black">{sk.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sk.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="bg-emerald-600 dark:bg-emerald-550 h-full rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-250/20 dark:border-slate-800/50 text-xs text-slate-500 dark:text-slate-400 italic font-medium">
              Proven track record managing vendor relationships and high-DR backlink campaigns.
            </div>
          </div>

          {/* Column 2: Web Dev */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl shadow-slate-100 dark:shadow-none relative group hover:border-teal-500/25 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-55/10 dark:bg-teal-950/40 flex items-center justify-center text-teal-605 dark:text-teal-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900 dark:text-slate-150">Development Tech</h4>
                  <p className="text-[10px] text-teal-600 dark:text-teal-400 uppercase font-bold tracking-wider">Fast Full-Stack SaaS Apps</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {skillsData.devSkills.map((sk) => (
                  <div key={sk.name}>
                    <div className="flex justify-between items-center text-xs text-slate-800 dark:text-slate-200 mb-1.5 font-bold">
                      <span>{sk.name}</span>
                      <span className="text-teal-600 dark:text-teal-400 font-extrabold">{sk.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sk.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="bg-teal-600 dark:bg-teal-550 h-full rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-250/20 dark:border-slate-800/50 text-xs text-slate-500 dark:text-slate-400 italic font-medium">
              Strong logic implementation, pristine components, and semantic code structures.
            </div>
          </div>

          {/* Column 3: Automation */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl shadow-slate-100 dark:shadow-none relative group hover:border-[#06b6d4]/25 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900 dark:text-slate-150">AI & Automation</h4>
                  <p className="text-[10px] text-cyan-600 dark:text-cyan-400 uppercase font-bold tracking-wider">Low-Code & Gemini LLMs</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {skillsData.automationSkills.map((sk) => (
                  <div key={sk.name}>
                    <div className="flex justify-between items-center text-xs text-slate-800 dark:text-slate-200 mb-1.5 font-bold">
                      <span>{sk.name}</span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-extrabold">{sk.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sk.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="bg-cyan-600 dark:bg-cyan-550 h-full rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main highlight bar in bottom as requested */}
            <div className="mt-8 pt-6 border-t border-slate-250/20 dark:border-slate-800/50 space-y-3">
              <div className="p-3.5 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-950/10 dark:to-cyan-950/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/50">
                 <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] font-black text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                      Scale & Productivity Progress
                    </span>
                    <span className="text-xs font-black text-emerald-650 dark:text-emerald-400">92%</span>
                 </div>
                 <div className="w-full bg-slate-200/50 dark:bg-slate-800/50 h-1 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 dark:bg-emerald-600 h-full rounded-full" style={{ width: '92%' }}></div>
                 </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
