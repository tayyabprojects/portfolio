import { useState, useEffect } from 'react';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectData } from '../lib/dataStore';

// Exact image asset imports for high-resolution production display
import edutrackDashboard from '../assets/images/edutrack_dashboard_1780392359937.png';
import medicareDashboard from '../assets/images/medicare_dashboard_1780392379647.png';

const projectImages: Record<string, string> = {
  edutrack: edutrackDashboard,
  medicare: medicareDashboard
};

interface ProjectsProps {
  projects: ProjectData[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [activeProject, setActiveProject] = useState<string>('');

  // Fallback to first project on load/change
  useEffect(() => {
    if (projects && projects.length > 0) {
      if (!activeProject || !projects.some(p => p.id === activeProject)) {
        setActiveProject(projects[0].id);
      }
    }
  }, [projects, activeProject]);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-slate-50 dark:bg-slate-900/40 relative transition-colors duration-300">
      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[500px] h-96 bg-purple-600/5 dark:bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16" id="projects-title">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-605 dark:text-emerald-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span> Featured Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] dark:text-slate-100 tracking-tight">
            Enterprise Grade Applications
          </h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mt-4 text-xs md:text-sm font-medium leading-relaxed">
            Meticulously planned and fully realized web platforms, optimized for speedy page-loads, high responsive density, and crisp custom design aesthetics.
          </p>
        </div>

        {/* Project Tabs Selector */}
        <div className="flex justify-center mb-12" id="projects-tabs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-1.5 rounded-2xl flex flex-wrap gap-2 shadow-md shadow-slate-100 dark:shadow-none">
            {projects.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj.id)}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  activeProject === proj.id
                    ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-xl shadow-emerald-600/10'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {proj.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Project Highlight Panel */}
        <div className="bg-white dark:bg-slate-900 border border-slate-205/30 dark:border-slate-800 rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden" id="project-detail-container">
          <AnimatePresence mode="wait">
            {projects.filter(p => p.id === activeProject).map((proj) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12"
              >
                {/* Left side: Premium Image Mockup Frame */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-lg">
                    {/* Visual header mimic */}
                    <div className="bg-slate-100 dark:bg-slate-950 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono ml-4 truncate font-semibold">
                        {proj.liveLink}
                      </div>
                    </div>
                    
                    {/* Dashboard Visual Placeholder/Image */}
                    <img 
                      src={projectImages[proj.id] || proj.imageSrc} 
                      alt={`${proj.title} Dashboard`}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // fallback image if dashboard preview erroring out
                        e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=700&auto=format&fit=crop";
                      }}
                      className="w-full h-auto aspect-[16/10] object-cover hover:scale-[1.01] transition-transform duration-500" 
                    />

                    {/* Subtle gradient shield overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent flex items-end p-4 pointer-events-none">
                      <span className="text-[10px] md:text-xs text-white/90 font-mono bg-emerald-900/60 dark:bg-emerald-950/80 backdrop-blur-xs px-2.5 py-1 rounded-md">Responsive Mockup Screen</span>
                    </div>
                  </div>
                </div>

                {/* Right side: Project Details */}
                <div className="lg:col-span-5 flex flex-col justify-between" id="project-info">
                  <div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
                      {proj.category}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1 mb-3">
                      {proj.title}
                    </h4>
                    <p className="text-slate-650 dark:text-slate-350 text-sm md:text-base leading-relaxed mb-6 font-medium">
                      {proj.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-8">
                      <p className="text-xs uppercase font-extrabold text-slate-400 dark:text-slate-500 tracking-wider mb-1">Core Operations Included:</p>
                      {proj.features.map((feat, index) => (
                        <div key={index} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-700 dark:text-slate-300 font-bold">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies list */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {proj.tech.map((t, index) => (
                        <span 
                          key={index} 
                          className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-[10px] md:text-calc font-extrabold px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-800 shadow-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Call To Actions */}
                  <div className="flex gap-3 mt-4 border-t border-slate-100 dark:border-slate-800 pt-6 w-full">
                    <a
                      href={proj.liveLink}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-505 text-white py-3.5 px-5 rounded-xl font-bold text-xs md:text-sm shadow-lg shadow-emerald-600/10 transition-all hover:scale-[1.01]"
                    >
                      <span>See Preview</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
