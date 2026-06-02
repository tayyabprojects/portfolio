import { Award, Target, Cpu, CheckCircle2 } from 'lucide-react';
import { AboutInfo } from '../lib/dataStore';

interface AboutProps {
  aboutInfo: AboutInfo;
}

export default function About({ aboutInfo }: AboutProps) {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16" id="about-title">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#4f46e5] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]"></span> About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {aboutInfo.missionTitle}
          </h3>
          <p className="text-slate-500 max-w-2xl mt-4 text-xs md:text-sm font-medium leading-relaxed">
            Educated in Computer Information Technology and specialized in search engine algorithms, I deliver high-value digital strategies that earn measurable results.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          
          {/* Main profile block (7 cols) */}
          <div className="lg:col-span-8 bg-white border border-slate-250/20 rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-slate-200/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="relative">
              <h4 className="text-xl md:text-2xl font-black text-slate-800 mb-4 tracking-tight">My Professional Mission</h4>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed mb-6 font-medium">
                {aboutInfo.missionText}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                {aboutInfo.extraBio}
              </p>
            </div>

            {/* Structured bullet list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {aboutInfo.bullets.map((pt, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                  <span className="text-xs md:text-sm text-slate-600 font-bold">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Highlight blocks (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Box DAE */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 relative overflow-hidden shadow-md shadow-slate-100 hover:border-indigo-500/30 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900 mb-2">Technical Education</h4>
              <p className="text-indigo-600 text-xs font-bold mb-1">DAE CIT (Diploma of Associate Engineer)</p>
              <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                {aboutInfo.technicalEducationDesc}
              </p>
            </div>

            {/* Box Strategic Link Builder */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 relative overflow-hidden shadow-md shadow-slate-100 hover:border-purple-500/30 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900 mb-2">Outreach & Link Authority</h4>
              <p className="text-purple-600 text-xs font-bold mb-1">Guaranteed Live Guest Posting</p>
              <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                {aboutInfo.outreachDesc}
              </p>
            </div>

            {/* Box AI Integrator */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 relative overflow-hidden shadow-md shadow-slate-100 hover:border-blue-500/30 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-slate-900 mb-2">Digital Automation</h4>
              <p className="text-blue-600 text-xs font-bold mb-1">Scale through AI Workflows</p>
              <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                {aboutInfo.automationDesc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
