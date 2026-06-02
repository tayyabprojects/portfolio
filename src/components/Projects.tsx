import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  TrendingUp, 
  Compass, 
  LayoutGrid, 
  Monitor, 
  Calculator, 
  Send, 
  Copy, 
  Check, 
  ArrowRight
} from 'lucide-react';
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
  // Navigation Tabs at the top
  const [currentTab, setCurrentTab] = useState<'showroom' | 'planner'>('showroom');

  // Interactive SEO Calculator tool states
  const [currentDA, setCurrentDA] = useState<number>(15);
  const [targetDA, setTargetDA] = useState<number>(45);
  const [niche, setNiche] = useState<string>('SaaS / Tech');
  const [difficulty, setDifficulty] = useState<string>('Moderate');
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [calculatedStrategy, setCalculatedStrategy] = useState<any>(null);
  const [copiedTemplate, setCopiedTemplate] = useState<boolean>(false);

  // Calculate high-impact SEO roadmap
  const handleCalculateSEO = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    
    setTimeout(() => {
      const daDifference = Math.max(5, targetDA - currentDA);
      const guestPostsRequired = Math.ceil(daDifference * 0.82 + (difficulty === 'High-Tier Brand Dominant' ? 5 : 0));
      const estimateMonths = Math.max(2, Math.ceil(daDifference / 6) + (difficulty === 'High-Tier Brand Dominant' ? 2 : 1));
      
      let anchorDistribution = '';
      let pitchTemplate = '';

      if (niche === 'SaaS / Tech') {
        anchorDistribution = '45% Exact Brand matching, 35% Rich Key-Product combinations, 20% Naked domain URLs';
        pitchTemplate = `Subject: Collaborative editorial content proposal for [Webmaster_Site]

Hi [Name_or_Editor],

I recently reviewed [Webmaster_Site]'s focus on development systems and was impressed by your detailed analysis of modern SaaS stacks.

Our team at [YourBrand] has just developed a comprehensive web-benchmarking analysis mapping the code optimizations that speed up single-page React apps by 40%. Given your audience's technical background, I believe a high-value piece titled "5 Production Bottlenecks Modern React Teams Fail to Detect" would be an incredible fit for your blog.

We would be glad to draft a pristine, search-optimized 1,500-word draft in accordance with your guidelines, featuring original illustrations.

Would you be open to examining the first draft?

Warm regards,
Muhammad Tayyab
Off-Page Outreach Representative`;
      } else if (niche === 'E-Commerce') {
        anchorDistribution = '30% Commercial transactional terms, 50% Brand Name anchors, 20% Navigational clicks';
        pitchTemplate = `Subject: Value-adding content suggestion for [Webmaster_Site]

Hi [Editor],

I am writing to you because I loved your recent roundup analyzing modern digital shopping habits.

We have aggregated anonymized consumer metrics across 200+ active stores and generated a visual report titled "The Psychology of Frictionless Checkout: Why Modern Buyers Abandon Carts in 2026".

This contextual piece complements your existing guide perfectly, and we are happy to draft it for [Webmaster_Site] completely free of charge. We maintain rigorous editorial standards and only cite authorized scientific reports.

Please let me know if we can share a brief bulleted outline for your consideration!

Best regards,
Muhammad Tayyab
Lead SEO Strategist`;
      } else {
        anchorDistribution = '40% Curated Brand Terms, 40% Informational Contextual phrases, 20% Webmaster references';
        pitchTemplate = `Subject: Exclusive content contribution for [Webmaster_Site]

Hi [Editor],

I am reaching out regarding a possible content contribution. I've been tracking your editorial focus on education, digital tools, and service optimization.

I have outlined an expert guide titled "Building Sustainable Digital Frameworks: Balancing System Performance with Organic Outreach". The scope is fully aligned with modern web guidelines and avoids generic fluff.

Would you be open to reviewing a free, fully polished guest post for an upcoming slot? I can accommodate any custom parameters or styles your team recommends.

Sincerely,
Muhammad Tayyab
SEO Outreach Lead`;
      }

      setCalculatedStrategy({
        guestPosts: guestPostsRequired,
        duration: estimateMonths,
        distribution: anchorDistribution,
        template: pitchTemplate,
        uplift: daDifference,
        outreachQuality: targetDA > 60 ? 'Premium Tier-1 Whitelist Sites (DR60+)' : 'Highly Relevant Mid-Tier Journals (DR40-DR60)'
      });
      setIsCalculating(false);
    }, 600);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-slate-50 dark:bg-slate-900/40 relative transition-colors duration-300">
      {/* Background visual graphics */}
      <div className="absolute left-1/4 top-12 w-[500px] h-96 bg-emerald-600/5 dark:bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute right-1/4 bottom-12 w-[400px] h-[400px] bg-purple-600/5 dark:bg-purple-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-10" id="projects-title">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-650 dark:text-emerald-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span> Portfolio Workbox
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] dark:text-slate-100 tracking-tight">
            Proof of Practical Engineering
          </h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mt-4 text-xs md:text-sm font-medium leading-relaxed">
            Explore my live interactive showroom showcase and execute simulated organic search formula calibrations with dynamic SEO router tools.
          </p>
        </div>

        {/* Portfolio Control Tabs */}
        <div className="flex justify-center mb-12" id="portfolio-tabs-nav">
          <div className="flex bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 p-1.5 rounded-2xl gap-2 shadow-xs">
            <button
              onClick={() => setCurrentTab('showroom')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                currentTab === 'showroom'
                  ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-md'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Showroom Showcase</span>
            </button>
            <button
              onClick={() => setCurrentTab('planner')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                currentTab === 'planner'
                  ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-md'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              <Calculator className="w-4 h-4 font-bold text-emerald-500 group-hover:text-white" />
              <span className="flex items-center gap-1.5">
                SEO Router Tools 
                <span className="hidden md:inline bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 text-[10px] px-1.5 py-0.5 rounded-md font-black uppercase">NEW</span>
              </span>
            </button>
          </div>
        </div>

        {/* Tab content panel */}
        <div className="min-h-[500px]" id="portfolio-tab-view-root">
          
          {/* TAB 1: SHOWROOM Spotlight Showcase (Both projects shown side-by-side or stacked) */}
          {currentTab === 'showroom' && (
            <div className="space-y-12" id="showroom-tab-content">
              
              {projects.map((proj, projIdx) => (
                <div 
                  key={proj.id} 
                  className="bg-white dark:bg-slate-900 border border-slate-205/30 dark:border-slate-800 rounded-[2.5rem] p-6 lg:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                    {/* Mockup Window - Alternating order on large screens for dynamic visual rhythm */}
                    <div className={`lg:col-span-7 flex flex-col justify-center ${projIdx % 2 === 1 ? 'lg:order-last' : ''}`}>
                      <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-850 bg-slate-50 dark:bg-slate-950 shadow-lg">
                        <div className="bg-slate-100 dark:bg-slate-950 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200 dark:border-slate-850">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono ml-4 truncate font-semibold">
                            {proj.liveLink}
                          </div>
                        </div>
                        
                        <img 
                          src={projectImages[proj.id] || proj.imageSrc} 
                          alt={`${proj.title} Screen`}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=700&auto=format&fit=crop";
                          }}
                          className="w-full h-auto aspect-[16/10] object-cover hover:scale-[1.01] transition-transform duration-500" 
                        />

                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/25 to-transparent flex items-end p-4 pointer-events-none">
                          <span className="text-[10px] md:text-xs text-white/95 font-mono bg-emerald-950/90 dark:bg-emerald-950/80 backdrop-blur-xs px-2.5 py-1 rounded-md">Vibe-Coded Frontend Solution</span>
                        </div>
                      </div>
                    </div>

                    {/* Details section */}
                    <div className="lg:col-span-5 flex flex-col justify-between" id={`project-showroom-info-${proj.id}`}>
                      <div>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                          {proj.category}
                        </span>
                        <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight mt-1 mb-3">
                          {proj.title}
                        </h4>
                        <p className="text-slate-650 dark:text-slate-350 text-xs md:text-sm leading-relaxed mb-6 font-medium font-sans">
                          {proj.description}
                        </p>

                        <div className="space-y-4 mb-8" id={`showroom-features-checklist-${proj.id}`}>
                          <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Features Checklist:</p>
                          {proj.features.map((feat, index) => (
                            <div key={index} className="flex gap-2.5 items-start">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span className="text-xs text-slate-705 dark:text-slate-300 font-bold">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies list */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {proj.tech.map((t, index) => (
                            <span 
                              key={index} 
                              className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-[10px] font-extrabold px-2.5 py-1 rounded-lg border border-slate-200/50 dark:border-slate-800 shadow-xs"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-slate-100 dark:border-slate-805 pt-6">
                        <a
                          href={proj.liveLink}
                          target="_blank"
                          referrerPolicy="no-referrer"
                          className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-505 text-white py-3 px-5 rounded-xl font-bold text-xs md:text-sm shadow-md hover:scale-[1.01] transition-all"
                        >
                          <span>See Live Application</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}



          {/* TAB 3: INTERACTIVE SEO OUTREACH HIGH-DA STRATEGY PLANNER */}
          {currentTab === 'planner' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-205/30 dark:border-slate-800 rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none relative" id="seo-planner-tool-root">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                
                {/* Form Input Container */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="text-[10px] text-purple-650 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60 font-black tracking-widest px-3 py-1.5 rounded-full uppercase mb-3 inline-block">
                      Simulate Organic Campaigns
                    </span>
                    <h4 className="text-xl md:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                      Backlink & DA Roadmap Generator
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 leading-relaxed">
                      Enter your current target parameters to discover ideal outreach timelines and preview customized, spam-free Guest Posting pitches.
                    </p>
                  </div>

                  <form onSubmit={handleCalculateSEO} className="space-y-4">
                    {/* DA sliders */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">
                          Current DA: <span className="text-emerald-500 font-extrabold">{currentDA}</span>
                        </label>
                        <input 
                          type="range" 
                          min="1" 
                          max="80" 
                          value={currentDA} 
                          onChange={(e) => {
                            const val = parseInt(e.target.value);
                            setCurrentDA(val);
                            if (targetDA <= val) setTargetDA(val + 5);
                          }}
                          className="w-full accent-emerald-500 h-1.5 bg-slate-100 dark:bg-slate-950 rounded-lg cursor-pointer"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">
                          Target DA: <span className="text-emerald-500 font-extrabold">{targetDA}</span>
                        </label>
                        <input 
                          type="range" 
                          min={(currentDA + 2).toString()} 
                          max="95" 
                          value={targetDA} 
                          onChange={(e) => setTargetDA(parseInt(e.target.value))}
                          className="w-full accent-emerald-500 h-1.5 bg-slate-100 dark:bg-slate-950 rounded-lg cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Target Domain Niche niche */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">
                        Vertical Website Niche
                      </label>
                      <select
                        value={niche}
                        onChange={(e) => setNiche(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500/30 cursor-pointer"
                      >
                        <option value="SaaS / Tech">SaaS / Web Tech</option>
                        <option value="E-Commerce">E-Commerce & Retail</option>
                        <option value="Digital Education & Business">Digital Education & Corporate Blogs</option>
                      </select>
                    </div>

                    {/* Competition rate */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">
                        Competition Difficulty
                      </label>
                      <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500/30 cursor-pointer"
                      >
                        <option value="Low Competition">Low Competition / Niche Vertical</option>
                        <option value="Moderate">Moderate Authority / Competitor Backlink Overlap</option>
                        <option value="High-Tier Brand Dominant">High-Tier Brand Dominant / Enterprise Competitors</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isCalculating}
                      className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-505 disabled:bg-slate-400 text-white py-3.5 px-5 rounded-xl font-bold text-xs cursor-pointer shadow-lg shadow-emerald-500/10 transition-all hover:scale-[1.01]"
                    >
                      {isCalculating ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Simulating Campaign Formulas...</span>
                        </>
                      ) : (
                        <>
                          <TrendingUp className="w-4 h-4" />
                          <span>Generate Growth Roadmap</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Simulated Output Dashboard */}
                <div className="lg:col-span-7 bg-[#FAFBFD] dark:bg-slate-950 border border-slate-200/80 dark:border-slate-850 p-6 md:p-8 rounded-3xl flex flex-col justify-center min-h-[380px]">
                  {calculatedStrategy ? (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                      id="seo-roadmap-success-display"
                    >
                      {/* Metric highlights */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 p-3.5 rounded-2xl text-center">
                          <p className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Plan Target</p>
                          <p className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-1">+{calculatedStrategy.uplift} DA</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 p-3.5 rounded-2xl text-center">
                          <p className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Required Posts</p>
                          <p className="text-xl font-black text-slate-900 dark:text-slate-100 mt-1">{calculatedStrategy.guestPosts}</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 p-3.5 rounded-2xl text-center">
                          <p className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Timeline</p>
                          <p className="text-xl font-black text-purple-600 dark:text-purple-400 mt-1">{calculatedStrategy.duration} Mos</p>
                        </div>
                      </div>

                      {/* Distribution breakdown */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 p-4 rounded-xl space-y-1.5">
                        <p className="text-[9px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Anchor Text Distribution Ratio:</p>
                        <p className="text-xs text-slate-700 dark:text-slate-200 font-bold">{calculatedStrategy.distribution}</p>
                        <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-extrabold flex items-center gap-1.5 pt-1.5 border-t border-slate-100 dark:border-slate-805">
                          <Sparkles className="w-3.5 h-3.5 shrink-0" /> Target Quality: {calculatedStrategy.outreachQuality}
                        </p>
                      </div>


                    </motion.div>
                  ) : (
                    <div className="text-center py-6" id="seo-planner-initial-state">
                      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 flex items-center justify-center mx-auto mb-4 shadow-sm text-emerald-500">
                        <Calculator className="w-6 h-6 animate-pulse" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">Crawl Simulator Offline</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 max-w-sm mx-auto">
                        Adjust parameters on the left and tap the button to execute a simulated guest-posting outreach calculations model.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
