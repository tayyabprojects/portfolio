import { Globe, Link as LinkIcon, Mail, ShieldCheck, HelpCircle, CheckCircle } from 'lucide-react';
import { ServiceData } from '../lib/dataStore';

interface ServicesProps {
  services: ServiceData[];
}

const iconsMap = {
  Globe,
  Link: LinkIcon,
  Mail,
  ShieldCheck,
  HelpCircle
};

const getIcon = (name: 'Globe' | 'Link' | 'Mail' | 'ShieldCheck' | 'HelpCircle') => {
  return iconsMap[name] || HelpCircle;
};

// Map index or category to elegant soft light color pairings
const colorStylesList = [
  {
    bg: 'bg-indigo-50 text-indigo-650 border-indigo-100',
    badge: 'bg-indigo-50 text-indigo-600 border-indigo-200'
  },
  {
    bg: 'bg-purple-50 text-purple-650 border-purple-100',
    badge: 'bg-purple-50 text-purple-600 border-purple-200'
  },
  {
    bg: 'bg-cyan-50 text-cyan-650 border-cyan-100',
    badge: 'bg-cyan-50 text-cyan-700 border-cyan-200'
  },
  {
    bg: 'bg-emerald-50 text-emerald-650 border-emerald-100',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-250/50'
  },
  {
    bg: 'bg-amber-50 text-amber-650 border-amber-100',
    badge: 'bg-amber-50 text-amber-705 border-amber-200'
  }
];

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="py-24 px-4 md:px-8 relative bg-[#f9fafb]">
      {/* Background radial highlight */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16" id="services-title">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#4f46e5] mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]"></span> Services Suite
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Impact Organic Solutions
          </h3>
          <p className="text-slate-500 max-w-2xl mt-4 text-xs md:text-sm font-medium leading-relaxed">
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
                className="group bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-indigo-600/35 transition-all duration-300 shadow-lg shadow-slate-100 relative overflow-hidden"
              >
                {/* Glowing backdrop card effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full pointer-events-none transition-colors group-hover:bg-indigo-50" />
                
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

                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 group-hover:text-indigo-650 transition-colors mb-3 tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                    {srv.description}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-4 border-t border-slate-100 text-xs text-indigo-600 font-extrabold transition-colors">
                  <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0" />
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
