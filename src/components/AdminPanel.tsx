import React, { useState } from 'react';
import { 
  X, Lock, ShieldCheck, Save, RefreshCw, Plus, Trash2, 
  Settings, User, Code2, Award, ListPlus, Send, HelpCircle 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioData } from '../lib/dataStore';

interface AdminPanelProps {
  data: PortfolioData;
  onSave: (newData: PortfolioData) => void;
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
  onAuthenticate: (success: boolean) => void;
}

export default function AdminPanel({
  data,
  onSave,
  isOpen,
  onClose,
  isAuthenticated,
  onAuthenticate
}: AdminPanelProps) {
  // Login Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Active Tab in Editor
  const [activeTab, setActiveTab] = useState<'profile' | 'about' | 'skills' | 'projects' | 'services'>('profile');

  // Modified Data Buffer
  const [tempData, setTempData] = useState<PortfolioData>(() => JSON.parse(JSON.stringify(data)));

  // Always sync temp data with actual data when modal is reopened
  useState(() => {
    setTempData(JSON.parse(JSON.stringify(data)));
  });

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    if (email === 'tayyabportfolio@gmail.com' && password === 'tayyabportfolio') {
      onAuthenticate(true);
      setTempData(JSON.parse(JSON.stringify(data)));
    } else {
      setLoginError('Invalid email or password. Please use correct credentials.');
    }
  };

  const handleSaveAll = () => {
    onSave(tempData);
    alert('Changes saved successfully! Your portfolio has been instantly updated.');
    onClose();
  };

  const handleResetToDefault = () => {
    if (confirm('Are you sure you want to discard your edits and revert to the default template data?')) {
      // Refresh local copy with default template data
      onSave(null as any); // App component will handle resetting to initial and saving
      onClose();
      window.location.reload();
    }
  };

  const updatePersonalInfo = (field: string, value: string) => {
    setTempData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const updateAboutInfo = (field: string, value: any) => {
    setTempData((prev) => ({
      ...prev,
      aboutInfo: {
        ...prev.aboutInfo,
        [field]: value
      }
    }));
  };

  // Skill editing helper
  const handleSkillChange = (category: 'seoSkills' | 'devSkills' | 'automationSkills', index: number, field: 'name' | 'level', value: any) => {
    setTempData((prev) => {
      const skillsCopy = { ...prev.skillsData };
      const list = [...skillsCopy[category]];
      list[index] = {
        ...list[index],
        [field]: field === 'level' ? Number(value) : value
      };
      skillsCopy[category] = list;
      return { ...prev, skillsData: skillsCopy };
    });
  };

  const handleAddSkill = (category: 'seoSkills' | 'devSkills' | 'automationSkills') => {
    setTempData((prev) => {
      const skillsCopy = { ...prev.skillsData };
      skillsCopy[category] = [...skillsCopy[category], { name: 'New Skill', level: 80 }];
      return { ...prev, skillsData: skillsCopy };
    });
  };

  const handleRemoveSkill = (category: 'seoSkills' | 'devSkills' | 'automationSkills', index: number) => {
    setTempData((prev) => {
      const skillsCopy = { ...prev.skillsData };
      skillsCopy[category] = skillsCopy[category].filter((_, i) => i !== index);
      return { ...prev, skillsData: skillsCopy };
    });
  };

  // Project editing helper
  const handleProjectChange = (projIndex: number, field: string, value: any) => {
    setTempData((prev) => {
      const projectsCopy = [...prev.projects];
      projectsCopy[projIndex] = {
        ...projectsCopy[projIndex],
        [field]: value
      };
      return { ...prev, projects: projectsCopy };
    });
  };

  const handleProjectFeaturesChange = (projIndex: number, featureIndex: number, value: string) => {
    setTempData((prev) => {
      const projectsCopy = [...prev.projects];
      const featuresCopy = [...projectsCopy[projIndex].features];
      featuresCopy[featureIndex] = value;
      projectsCopy[projIndex] = { ...projectsCopy[projIndex], features: featuresCopy };
      return { ...prev, projects: projectsCopy };
    });
  };

  const handleProjectTechChange = (projIndex: number, value: string) => {
    // Comma-separated tags
    const techArray = value.split(',').map(t => t.trim());
    setTempData((prev) => {
      const projectsCopy = [...prev.projects];
      projectsCopy[projIndex] = { ...projectsCopy[projIndex], tech: techArray };
      return { ...prev, projects: projectsCopy };
    });
  };

  const handleAddProjectFeature = (projIndex: number) => {
    setTempData((prev) => {
      const projectsCopy = [...prev.projects];
      projectsCopy[projIndex] = {
        ...projectsCopy[projIndex],
        features: [...projectsCopy[projIndex].features, 'New key operations capability']
      };
      return { ...prev, projects: projectsCopy };
    });
  };

  const handleRemoveProjectFeature = (projIndex: number, featIndex: number) => {
    setTempData((prev) => {
      const projectsCopy = [...prev.projects];
      projectsCopy[projIndex] = {
        ...projectsCopy[projIndex],
        features: projectsCopy[projIndex].features.filter((_, i) => i !== featIndex)
      };
      return { ...prev, projects: projectsCopy };
    });
  };

  const handleAddProject = () => {
    const newProj = {
      id: `custom-proj-${Date.now()}`,
      title: 'New High-impact Project',
      category: 'SaaS Platform',
      description: 'Describe the newly added enterprise or optimization system here.',
      imageSrc: '/src/assets/images/edutrack_dashboard_1780392359937.png',
      liveLink: 'https://tayyabprojects.github.io/',
      githubLink: 'https://github.com/tayyabprojects',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      features: ['Innovative real-time tracking dashboards', 'Full responsive and optimized engine metrics']
    };
    setTempData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProj]
    }));
  };

  const handleRemoveProject = (index: number) => {
    if (confirm('Are you sure you want to remove this project?')) {
      setTempData((prev) => ({
        ...prev,
        projects: prev.projects.filter((_, i) => i !== index)
      }));
    }
  };

  // Service helper
  const handleServiceChange = (index: number, field: string, value: string) => {
    setTempData((prev) => {
      const servicesCopy = [...prev.services];
      servicesCopy[index] = {
        ...servicesCopy[index],
        [field]: value
      };
      return { ...prev, services: servicesCopy };
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-4xl bg-white border border-slate-200 rounded-[2rem] shadow-2xl overflow-hidden text-slate-800 flex flex-col max-h-[85vh]"
      >
        {/* Modal Top Header */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 tracking-tight text-base md:text-lg">
                Muhammad Tayyab <span className="text-indigo-600 font-semibold">Workspace</span>
              </h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                {isAuthenticated ? 'Live Content Editor Mode' : 'Admin Area Authentication'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Mode / Editor Mode toggle */}
        {!isAuthenticated ? (
          /* Login Screen Container */
          <div className="p-8 flex flex-col items-center justify-center py-16">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
              <Lock className="w-6 h-6 animate-pulse" />
            </div>
            
            <h4 className="text-xl font-extrabold text-slate-900 mb-2">Sign In to Dashboard</h4>
            <p className="text-xs text-slate-400 text-center max-w-sm mb-8 leading-relaxed">
              Authenticate using your authorized developer email and credentials to unleash live edits on image resources, skills metadata and texts.
            </p>

            <form onSubmit={handleLoginSubmit} className="w-full max-w-md space-y-4">
              {loginError && (
                <div className="bg-rose-50 text-rose-500 border border-rose-100 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tayyabportfolio@gmail.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-800"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl text-xs transition-all tracking-wider uppercase mt-2 shadow-lg"
              >
                Sign In & Unlock
              </button>
            </form>
          </div>
        ) : (
          /* Editor Sidebar + Content Container */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Left Tab selector bar */}
            <div className="w-full md:w-52 bg-slate-50 border-r border-slate-200/80 p-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all whitespace-nowrap ${
                  activeTab === 'profile'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-800'
                }`}
              >
                <User className="w-4 h-4 shrink-0" />
                <span>Profile Info</span>
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all whitespace-nowrap ${
                  activeTab === 'about'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-800'
                }`}
              >
                <Award className="w-4 h-4 shrink-0" />
                <span>About Details</span>
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all whitespace-nowrap ${
                  activeTab === 'skills'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-800'
                }`}
              >
                <Code2 className="w-4 h-4 shrink-0" />
                <span>Skills Engine</span>
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all whitespace-nowrap ${
                  activeTab === 'projects'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-800'
                }`}
              >
                <ListPlus className="w-4 h-4 shrink-0" />
                <span>Projects Live</span>
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all whitespace-nowrap ${
                  activeTab === 'services'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-800'
                }`}
              >
                <Send className="w-4 h-4 shrink-0" />
                <span>Services List</span>
              </button>
            </div>

            {/* Right Tab Content Block */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Edit Hero & Credentials</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Full Name</label>
                      <input
                        type="text"
                        value={tempData.personalInfo.name}
                        onChange={(e) => updatePersonalInfo('name', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Portrait Image URL</label>
                      <input
                        type="text"
                        value={tempData.personalInfo.portraitUrl}
                        onChange={(e) => updatePersonalInfo('portraitUrl', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Title Roles String</label>
                    <input
                      type="text"
                      value={tempData.personalInfo.title}
                      onChange={(e) => updatePersonalInfo('title', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Introductory Bio</label>
                    <textarea
                      rows={3}
                      value={tempData.personalInfo.bio}
                      onChange={(e) => updatePersonalInfo('bio', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Email</label>
                      <input
                        type="text"
                        value={tempData.personalInfo.email}
                        onChange={(e) => updatePersonalInfo('email', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">WhatsApp</label>
                      <input
                        type="text"
                        value={tempData.personalInfo.whatsapp}
                        onChange={(e) => updatePersonalInfo('whatsapp', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">LinkedIn Link</label>
                      <input
                        type="text"
                        value={tempData.personalInfo.linkedin}
                        onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Live Backlinks Counter</label>
                      <input
                        type="text"
                        value={tempData.personalInfo.liveBacklinksCount}
                        onChange={(e) => updatePersonalInfo('liveBacklinksCount', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Web Systems Counter</label>
                      <input
                        type="text"
                        value={tempData.personalInfo.webSystemsCount}
                        onChange={(e) => updatePersonalInfo('webSystemsCount', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Success Rate Metric</label>
                      <input
                        type="text"
                        value={tempData.personalInfo.successRate}
                        onChange={(e) => updatePersonalInfo('successRate', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'about' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Edit About Sections</h4>
                  
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Section Header Title</label>
                    <input
                      type="text"
                      value={tempData.aboutInfo.missionTitle}
                      onChange={(e) => updateAboutInfo('missionTitle', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Main Mission Paragraph</label>
                    <textarea
                      rows={3}
                      value={tempData.aboutInfo.missionText}
                      onChange={(e) => updateAboutInfo('missionText', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Secondary Automation Paragraph</label>
                    <textarea
                      rows={3}
                      value={tempData.aboutInfo.extraBio}
                      onChange={(e) => updateAboutInfo('extraBio', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Bullet Highlights (4 items)</label>
                    <div className="space-y-2">
                      {tempData.aboutInfo.bullets.map((bullet, idx) => (
                        <input
                          key={idx}
                          type="text"
                          value={bullet}
                          onChange={(e) => {
                            const bulletsCopy = [...tempData.aboutInfo.bullets];
                            bulletsCopy[idx] = e.target.value;
                            updateAboutInfo('bullets', bulletsCopy);
                          }}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-[#6366f1] uppercase mb-1">DAE CIT Highlight Desc</label>
                      <textarea
                        rows={3}
                        value={tempData.aboutInfo.technicalEducationDesc}
                        onChange={(e) => updateAboutInfo('technicalEducationDesc', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-[10px] focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#a855f7] uppercase mb-1">Outreach Link Authority Highlight</label>
                      <textarea
                        rows={3}
                        value={tempData.aboutInfo.outreachDesc}
                        onChange={(e) => updateAboutInfo('outreachDesc', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-[10px] focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#06b6d4] uppercase mb-1">AI Automation Highlight</label>
                      <textarea
                        rows={3}
                        value={tempData.aboutInfo.automationDesc}
                        onChange={(e) => updateAboutInfo('automationDesc', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-[10px] focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>

                </div>
              )}

              {activeTab === 'skills' && (
                <div className="space-y-6">
                  <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest">Configure Skills Metrics</h4>

                  {/* SEO & outreach */}
                  <div className="space-y-3 bg-indigo-50/20 p-4 rounded-xl border border-indigo-100">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-[#6366f1] uppercase tracking-wider">SEO & Link Outreach</span>
                      <button
                        onClick={() => handleAddSkill('seoSkills')}
                        className="text-[10px] bg-white border border-indigo-200 text-indigo-600 px-2 py-1 rounded hover:bg-indigo-50 font-bold flex items-center gap-1"
                      >
                        <Plus className="w-3 nav-icon shrink-0" />
                        <span>Add SEO Skill</span>
                      </button>
                    </div>
                    {tempData.skillsData.seoSkills.map((sk, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <input
                          type="text"
                          value={sk.name}
                          placeholder="Skill Name"
                          onChange={(e) => handleSkillChange('seoSkills', index, 'name', e.target.value)}
                          className="flex-grow bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs"
                        />
                        <input
                          type="number"
                          value={sk.level}
                          max="100"
                          min="0"
                          onChange={(e) => handleSkillChange('seoSkills', index, 'level', e.target.value)}
                          className="w-16 bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold text-indigo-600"
                        />
                        <button
                          onClick={() => handleRemoveSkill('seoSkills', index)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Developer Tools */}
                  <div className="space-y-3 bg-purple-50/20 p-4 rounded-xl border border-purple-100">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-[#a855f7] uppercase tracking-wider">Development & Tech Stack</span>
                      <button
                        onClick={() => handleAddSkill('devSkills')}
                        className="text-[10px] bg-white border border-purple-200 text-purple-600 px-2 py-1 rounded hover:bg-purple-50 font-bold flex items-center gap-1"
                      >
                        <Plus className="w-3 nav-icon shrink-0" />
                        <span>Add Dev Skill</span>
                      </button>
                    </div>
                    {tempData.skillsData.devSkills.map((sk, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <input
                          type="text"
                          value={sk.name}
                          placeholder="Skill Name"
                          onChange={(e) => handleSkillChange('devSkills', index, 'name', e.target.value)}
                          className="flex-grow bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs"
                        />
                        <input
                          type="number"
                          value={sk.level}
                          max="100"
                          min="0"
                          onChange={(e) => handleSkillChange('devSkills', index, 'level', e.target.value)}
                          className="w-16 bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold text-purple-600"
                        />
                        <button
                          onClick={() => handleRemoveSkill('devSkills', index)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* AI & Automations */}
                  <div className="space-y-3 bg-cyan-50/20 p-4 rounded-xl border border-cyan-100">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">AI & Workflow Automation</span>
                      <button
                        onClick={() => handleAddSkill('automationSkills')}
                        className="text-[10px] bg-white border border-cyan-200 text-cyan-600 px-2 py-1 rounded hover:bg-cyan-50 font-bold flex items-center gap-1"
                      >
                        <Plus className="w-3 nav-icon shrink-0" />
                        <span>Add Automation Skill</span>
                      </button>
                    </div>
                    {tempData.skillsData.automationSkills.map((sk, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <input
                          type="text"
                          value={sk.name}
                          placeholder="Skill Name"
                          onChange={(e) => handleSkillChange('automationSkills', index, 'name', e.target.value)}
                          className="flex-grow bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs"
                        />
                        <input
                          type="number"
                          value={sk.level}
                          max="100"
                          min="0"
                          onChange={(e) => handleSkillChange('automationSkills', index, 'level', e.target.value)}
                          className="w-16 bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs font-bold text-cyan-600"
                        />
                        <button
                          onClick={() => handleRemoveSkill('automationSkills', index)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest">Update Projects Catalog</h4>
                    <button
                      onClick={handleAddProject}
                      className="text-xs bg-indigo-600 text-white font-bold px-3 py-1.5 rounded-xl hover:bg-indigo-500 transition-all flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Create New Project</span>
                    </button>
                  </div>

                  {tempData.projects.map((proj, idx) => (
                    <div key={proj.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-6 space-y-4 relative">
                      <button
                        onClick={() => handleRemoveProject(idx)}
                        className="absolute right-4 top-4 text-slate-400 hover:text-rose-500 p-1 bg-white hover:bg-rose-50 rounded-lg border border-slate-100"
                        title="Delete this project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Project Name</label>
                          <input
                            type="text"
                            value={proj.title}
                            onChange={(e) => handleProjectChange(idx, 'title', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Category / Tagline</label>
                          <input
                            type="text"
                            value={proj.category}
                            onChange={(e) => handleProjectChange(idx, 'category', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Short Description</label>
                        <textarea
                          rows={2}
                          value={proj.description}
                          onChange={(e) => handleProjectChange(idx, 'description', e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none resize-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Launcher URL (Live)</label>
                          <input
                            type="text"
                            value={proj.liveLink}
                            onChange={(e) => handleProjectChange(idx, 'liveLink', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Code Repository (GitHub)</label>
                          <input
                            type="text"
                            value={proj.githubLink}
                            onChange={(e) => handleProjectChange(idx, 'githubLink', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Dashboard Preview Image URL</label>
                          <input
                            type="text"
                            value={proj.imageSrc}
                            onChange={(e) => handleProjectChange(idx, 'imageSrc', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Technologies Used (Commas separated values)</label>
                        <input
                          type="text"
                          value={proj.tech.join(', ')}
                          onChange={(e) => handleProjectTechChange(idx, e.target.value)}
                          placeholder="React, TypeScript, Tailwind"
                          className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none"
                        />
                      </div>

                      {/* Features lists with item creators */}
                      <div className="bg-white p-3 rounded-xl border border-slate-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-bold text-slate-500 uppercase">Interactive Features (Bullets)</span>
                          <button
                            type="button"
                            onClick={() => handleAddProjectFeature(idx)}
                            className="text-[9px] bg-slate-50 hover:bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-indigo-600 font-bold flex items-center gap-1"
                          >
                            <Plus className="w-3 h-3" />
                            Add Bullet
                          </button>
                        </div>
                        <div className="space-y-1.5">
                          {proj.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex gap-2">
                              <input
                                type="text"
                                value={feat}
                                onChange={(e) => handleProjectFeaturesChange(idx, fIdx, e.target.value)}
                                className="flex-grow bg-slate-50 border border-slate-200 rounded px-2 py-1 text-[11px]"
                              />
                              <button
                                type="button"
                                onClick={() => handleRemoveProjectFeature(idx, fIdx)}
                                className="text-slate-400 hover:text-rose-500 p-1"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'services' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Edit Premium Services</h4>
                  
                  {tempData.services.map((srv, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Service Title</label>
                          <input
                            type="text"
                            value={srv.title}
                            onChange={(e) => handleServiceChange(idx, 'title', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-xs font-bold"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Ribbon Badge Tag</label>
                          <input
                            type="text"
                            value={srv.badge}
                            onChange={(e) => handleServiceChange(idx, 'badge', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-indigo-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Brief Description</label>
                        <textarea
                          rows={2}
                          value={srv.description}
                          onChange={(e) => handleServiceChange(idx, 'description', e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-xs resize-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        )}

        {/* Modal Bottom control panel */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex gap-2">
            {isAuthenticated && (
              <button
                onClick={handleResetToDefault}
                className="px-4 py-2 bg-rose-50 hover:bg-rose-150 text-rose-600 border border-rose-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                title="Discard all and revert back to pre-filled portfolio"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset to Defaults</span>
              </button>
            )}
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white hover:bg-slate-200 text-slate-600 border border-slate-200 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Cancel
            </button>
            
            {isAuthenticated && (
              <button
                onClick={handleSaveAll}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-black transition-all shadow-md shadow-indigo-600/10 flex items-center gap-1.5 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save Portfolio Edits</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
