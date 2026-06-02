import { ArrowRight, Link as LinkIcon, Database, Terminal, Sparkles, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { PersonalInfo } from '../lib/dataStore';
import portraitImg from '../assets/images/tayyab_portrait_1780392340788.png';

interface HeroProps {
  personalInfo: PersonalInfo;
  onNavigate: (sectionId: string) => void;
  onOpenCv: () => void;
}

export default function Hero({ personalInfo, onNavigate, onOpenCv }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 px-4 md:px-8 flex items-center overflow-hidden bg-[#fafafa] dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-emerald-600/5 dark:bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-80 h-80 md:w-[450px] md:h-[450px] bg-teal-600/5 dark:bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Copy and CTAs */}
        <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-start text-left shrink-0" id="hero-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 text-emerald-600 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-450 animate-pulse" />
            <span>SEO Specialist & AI Developer Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 leading-tight mb-4 tracking-tight"
          >
            Muhammad <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-505 to-emerald-800 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-505">Tayyab</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg font-bold text-slate-600 dark:text-slate-350 mb-6 flex flex-wrap items-center gap-x-2 gap-y-1.5"
          >
            <span className="text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-100 dark:border-emerald-900/50 pb-0.5 animate-pulse">Off-Page SEO Specialist</span>
            <span className="text-slate-300 dark:text-slate-700 text-lg">•</span>
            <span className="text-teal-600 dark:text-teal-400 border-b-2 border-teal-100 dark:border-teal-900/50 pb-0.5">Link Building Expert</span>
            <span className="text-slate-300 dark:text-slate-700 text-lg">•</span>
            <span className="text-emerald-850 dark:text-emerald-450 border-b-2 border-emerald-100/60 dark:border-emerald-900/50 pb-0.5">AI-Assisted Developer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-slate-600 dark:text-slate-350 leading-relaxed max-w-xl mb-8 font-medium"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate('projects')}
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-550 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-xl shadow-emerald-600/10 active:scale-95 group cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={onOpenCv}
              className="flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-205 dark:border-slate-800 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm shadow-slate-100/50"
            >
              <FileText className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              <span>Resume / CV</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center justify-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-emerald-650 dark:text-emerald-400 font-bold text-sm px-6 py-3.5 rounded-xl border border-emerald-100 dark:border-emerald-900/40 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm shadow-emerald-50/20"
            >
              <span>Contact Me</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 md:gap-10 mt-12 pt-8 border-t border-slate-200/60 dark:border-slate-805/50 w-full max-w-lg text-slate-500"
          >
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-105">{personalInfo.liveBacklinksCount}</span>
              <span className="text-[10px] md:text-calc text-emerald-650 dark:text-emerald-400 font-extrabold uppercase tracking-widest mt-1">Live Backlinks</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-105">{personalInfo.webSystemsCount}</span>
              <span className="text-[10px] md:text-calc text-teal-605 dark:text-teal-400 font-extrabold uppercase tracking-widest mt-1">Web Systems</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-105">{personalInfo.successRate}</span>
              <span className="text-[10px] md:text-calc text-cyan-650 dark:text-cyan-400 font-extrabold uppercase tracking-widest mt-1 font-sans">Success Rate</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Portrait Card with Interactive Details */}
        <div className="lg:col-span-12 xl:col-span-5 flex justify-center lg:justify-end xl:shrink-0" id="hero-right">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full max-w-[340px] md:max-w-[380px] aspect-[4/5] rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/85 dark:border-slate-800 p-4 shadow-xl shadow-slate-200/50 dark:shadow-none group"
          >
            {/* Glowing border outline */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-emerald-500/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Floating Badges */}
            <div className="absolute bottom-6 -left-6 z-20 bg-white dark:bg-slate-900 border border-emerald-100/90 dark:border-emerald-900 rounded-2xl p-3.5 shadow-xl shadow-slate-200/60 dark:shadow-none flex items-center gap-3 backdrop-blur-md animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <LinkIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">SEO Specialist</p>
                <p className="text-xs font-black text-slate-800 dark:text-slate-200">Vendor Outreach</p>
              </div>
            </div>

            <div className="absolute top-12 -right-6 z-20 bg-white dark:bg-slate-900 border border-teal-100/90 dark:border-teal-900 rounded-2xl p-3.5 shadow-xl shadow-slate-200/60 dark:shadow-none flex items-center gap-3 backdrop-blur-md animate-bounce" style={{ animationDuration: '4.8s' }}>
              <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Web Apps</p>
                <p className="text-xs font-black text-slate-800 dark:text-slate-200">Full-Stack Tech</p>
              </div>
            </div>

            {/* Inner frame containing his real portrait */}
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-[950] group">
             <img
  src={personalInfo.portraitUrl || portraitImg}
  alt={personalInfo.name}
  referrerPolicy="no-referrer"
  onError={(e) => {
    e.currentTarget.src = portraitImg;
  }}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
/>
              {/* Bottom tag over portrait */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-800 rounded-xl px-4 py-2.5 text-center shadow-lg">
                <p className="text-xs font-extrabold text-slate-900 dark:text-slate-100">Based in {personalInfo.basis}</p>
                <p className="text-[10px] text-emerald-650 dark:text-emerald-400 font-bold">{personalInfo.educationGrade}</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
