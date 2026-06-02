import { Globe, Link as LinkIcon, Mail, ShieldCheck, HelpCircle, CheckCircle, Code2 } from 'lucide-react';
import { ServiceData } from '../lib/dataStore';

interface ServicesProps {
  services: ServiceData[];
}

const iconsMap = {
  Globe,
  Link: LinkIcon,
  Mail,
  ShieldCheck,
  HelpCircle,
  Code2
};

const getIcon = (name: 'Globe' | 'Link' | 'Mail' | 'ShieldCheck' | 'HelpCircle' | 'Code2') => {
  return iconsMap[name] || HelpCircle;
};

// Map index or category to elegant soft light color pairings (responsive to light/dark modes)
const colorStylesList = [
  {
    bg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-650 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50',
    badge: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/60'
  },
  {
    bg: 'bg-teal-50 dark:bg-teal-950/40 text-teal-650 dark:text-teal-400 border-teal-100 dark:border-teal-900/50',
    badge: 'bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-900/60'
  },
  {
    bg: 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-650 dark:text-cyan-400 border-cyan-100 dark:border-cyan-900/50',
    badge: 'bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-900/60'
  },
  {
    bg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-650 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50',
    badge: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-250/50 dark:border-emerald-900/60'
  },
  {
    bg: 'bg-teal-50 dark:bg-teal-955/40 text-teal-650 dark:text-teal-400 border-teal-100 dark:border-teal-900/50',
    badge: 'bg-teal-50 dark:bg-teal-955/30 text-teal-700 dark:text-teal-400 border-teal-203 dark:border-teal-900/60'
  }
];

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-24 px-4 md:px-8 relative bg-[#f9fafb] dark:bg-[#090b11] transition-colors duration-300">
      {/* Background radial highlight */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-emerald-600/5 dark:bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16" id="services-title">
          <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-650 dark:text-emerald-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span> Services Suite
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            High-Impact Organic Solutions
          </h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mt-4 text-xs md:text-sm font-medium leading-relaxed">
            Unlock authoritative channels that elevate your digital authority. Every campaign is executed manually, tracked with live automation, and backed by strong technical compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
          {services.map((srv, idx) => {
            const IconComponent = getIcon(srv.iconName);
            const style = colorStylesList[idx % colorStylesList.length];

            return (
              <div
                key={idx}
                className="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-emerald-600/35 dark:hover:border-emerald-555/35 transition-all duration-305 shadow-lg shadow-slate-100 dark:shadow-none relative overflow-hidden"
              >
                {/* Glowing backdrop card effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 dark:bg-slate-950/45 rounded-bl-full pointer-events-none transition-colors group-hover:bg-emerald-50/60 dark:group-hover:bg-emerald-950/10" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    {/* Icon container */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-350 group-hover:scale-110 ${style.bg}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {/* Badge */}
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${style.badge}`}>
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-emerald-650 dark:group-hover:text-emerald-400 transition-colors mb-3 tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                    {srv.description}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-4 border-t border-slate-100 dark:border-slate-805 text-xs text-emerald-600 dark:text-emerald-400 font-extrabold transition-colors">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Fully Managed Delivery</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
