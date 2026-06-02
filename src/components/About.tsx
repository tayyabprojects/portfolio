import { Award, Target, Cpu, CheckCircle2 } from 'lucide-react';
import { AboutInfo } from '../lib/dataStore';

interface AboutProps {
  aboutInfo: AboutInfo;
}

export default function About({ aboutInfo }: AboutProps) {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-slate-50 dark:bg-slate-900/40 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16" id="about-title">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-650 dark:text-emerald-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span> About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {aboutInfo.missionTitle}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mt-4 text-xs md:text-sm font-medium leading-relaxed">
            Educated in Computer Information Technology and specialized in search engine algorithms, I deliver high-value digital strategies that earn measurable results.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          
          {/* Main profile block (7 cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-slate-100 dark:shadow-none transition-colors duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 dark:bg-emerald-400/5 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="relative">
              <h4 className="text-xl md:text-2xl font-black text-slate-800 dark:text-slate-150 mb-4 tracking-tight">My Professional Mission</h4>
              <p className="text-slate-650 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
                {aboutInfo.missionText}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                {aboutInfo.extraBio}
              </p>
            </div>

            {/* Structured bullet list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {aboutInfo.bullets.map((pt, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                  <span className="text-xs md:text-sm text-slate-600 dark:text-slate-350 font-bold">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Highlight blocks (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Box DAE */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 relative overflow-hidden shadow-md shadow-slate-100/50 dark:shadow-none hover:border-emerald-500/30 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900 dark:text-slate-150 mb-2">Technical Education</h4>
              <p className="text-emerald-650 dark:text-emerald-400 text-xs font-bold mb-1">DAE CIT (Diploma of Associate Engineer)</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-semibold">
                {aboutInfo.technicalEducationDesc}
              </p>
            </div>

            {/* Box Strategic Link Builder */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 relative overflow-hidden shadow-md shadow-slate-100/50 dark:shadow-none hover:border-teal-500/30 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900 dark:text-slate-150 mb-2">Outreach & Link Authority</h4>
              <p className="text-teal-655 dark:text-teal-400 text-xs font-bold mb-1">Guaranteed Live Guest Posting</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-semibold">
                {aboutInfo.outreachDesc}
              </p>
            </div>

            {/* Box AI Integrator */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 relative overflow-hidden shadow-md shadow-slate-100/50 dark:shadow-none hover:border-cyan-500/30 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900 dark:text-slate-150 mb-2">Digital Automation</h4>
              <p className="text-cyan-655 dark:text-cyan-400 text-xs font-bold mb-1">Scale through AI Workflows</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-semibold">
                {aboutInfo.automationDesc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
