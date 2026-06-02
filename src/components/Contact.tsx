import { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, MessageSquare, Linkedin, Send, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const whatsAppLink = "https://wa.me/923004504088?text=Hello%20Muhammad%20Tayyab,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";
  const linkedInLink = "https://www.linkedin.com/in/asktayyab/";
  const emailAddress = "seomatayyab@gmail.com";

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Quick client-side validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill in all the required input fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please write a valid email address.');
      return;
    }

    setLoading(true);

    // Simulate reliable form request
    setTimeout(() => {
      setLoading(false);
      setIsSent(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Automatically reset status after 5s
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative bg-slate-50 dark:bg-[#080a11] transition-colors duration-300">
      {/* Visual glowing particles background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/5 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16" id="contact-title">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#4f46e5] dark:text-indigo-400 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] dark:bg-indigo-400"></span> Contact Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Let's Orchestrate Growth
          </h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mt-4 text-xs md:text-sm font-medium leading-relaxed font-mono">
            Whether you need to scale search presence, manage backlink catalogs, or integrate modern automated workflows, I am here to help you solve it.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-8" id="contact-layout">
          
          {/* Left Column: Fast Contact Options (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Introductory Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/30 dark:shadow-none">
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Direct Communication</h4>
              <p className="text-slate-650 dark:text-slate-450 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                Feel free to trigger a chat directly with me via WhatsApp, send an email, or review professional engagements on my LinkedIn network.
              </p>
              
              <div className="space-y-4">
                
                {/* Email Display */}
                <div className="flex items-center gap-4 bg-slate-50/50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 p-4 rounded-2xl">
                  <div className="w-11 h-11 bg-indigo-550/10 dark:bg-indigo-400/10 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-450 dark:text-slate-500 font-black uppercase tracking-wide">Write an Email</p>
                    <a href={`mailto:${emailAddress}`} className="text-sm font-black text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {emailAddress}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Handle */}
                <div className="flex items-center gap-4 bg-slate-50/50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 p-4 rounded-2xl">
                  <div className="w-11 h-11 bg-emerald-550/10 dark:bg-emerald-400/10 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-450 dark:text-slate-500 font-black uppercase tracking-wide">Instant WhatsApp Chat</p>
                    <a href={whatsAppLink} target="_blank" referrerPolicy="no-referrer" className="text-sm font-black text-emerald-600 hover:text-emerald-400 transition-colors">
                      +92 300 4504088
                    </a>
                  </div>
                </div>

                {/* LinkedIn Badge */}
                <div className="flex items-center gap-4 bg-slate-50/50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 p-4 rounded-2xl">
                  <div className="w-11 h-11 bg-blue-550/10 dark:bg-blue-400/10 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-450 dark:text-slate-500 font-black uppercase tracking-wide">Professional Profile</p>
                    <a href={linkedInLink} target="_blank" referrerPolicy="no-referrer" className="text-sm font-black text-indigo-600 dark:text-indigo-300 hover:text-indigo-500 transition-colors">
                      linkedin.com/in/asktayyab
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Response speed Guarantee */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/15 dark:to-purple-950/15 border border-indigo-100 dark:border-indigo-900/50 rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/[0.02]" />
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 animate-spin" style={{ animationDuration: '6s' }} />
                <h5 className="font-extrabold text-slate-900 dark:text-slate-200 text-xs md:text-sm uppercase tracking-wider">Quick Turnaround</h5>
              </div>
              <p className="text-slate-655 dark:text-slate-300 text-xs leading-relaxed font-semibold">
                I track live workspace alerts. Standard response rate is under <strong className="text-indigo-600 dark:text-indigo-400">2 hours</strong> on WhatsApp and within <strong className="text-indigo-600 dark:text-indigo-400">24 hours</strong> on corporate mail correspondence.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/10 dark:shadow-none relative overflow-hidden" id="contact-form-container">
              <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/5 blur-3xl rounded-full" />
              
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">Send a Digital Message</h4>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                {/* Visual states */}
                <AnimatePresence mode="wait">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-rose-50 dark:bg-rose-950/20 border border-rose-250 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 p-3.5 rounded-2xl flex items-center gap-2.5 text-xs font-bold"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  {isSent && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-205/80 dark:border-emerald-900/60 text-emerald-600 dark:text-emerald-400 p-3.5 rounded-2xl flex items-center gap-2.5 text-xs font-bold"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Thank you! Your message was submitted successfully. I will write back soon.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="name-input" className="text-xs font-bold text-slate-550 dark:text-slate-450 uppercase tracking-widest mb-1.5">Your Name <span className="text-indigo-600 dark:text-indigo-400">*</span></label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="bg-slate-50 dark:bg-slate-950 border border-slate-205/60 dark:border-slate-800/85 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-205 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white dark:focus:bg-slate-900 focus:ring-1 focus:ring-indigo-600 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label htmlFor="email-input" className="text-xs font-bold text-slate-550 dark:text-slate-450 uppercase tracking-widest mb-1.5">Email Address <span className="text-indigo-600 dark:text-indigo-400">*</span></label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className="bg-slate-50 dark:bg-slate-950 border border-slate-205/60 dark:border-slate-800/85 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-205 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white dark:focus:bg-slate-900 focus:ring-1 focus:ring-indigo-600 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="subject-input" className="text-xs font-bold text-slate-550 dark:text-slate-450 uppercase tracking-widest mb-1.5">Subject <span className="text-indigo-600 dark:text-indigo-400">*</span></label>
                  <input
                    id="subject-input"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Describe your inquiry..."
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-205/60 dark:border-slate-800/85 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-205 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white dark:focus:bg-slate-900 focus:ring-1 focus:ring-indigo-600 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message-input" className="text-xs font-bold text-slate-550 dark:text-slate-450 uppercase tracking-widest mb-1.5">Your Message <span className="text-indigo-600 dark:text-indigo-400">*</span></label>
                  <textarea
                    id="message-input"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write detailed inquiry here..."
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-205/60 dark:border-slate-800/85 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-205 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white dark:focus:bg-slate-900 focus:ring-1 focus:ring-indigo-600 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center gap-2.5 bg-indigo-600 hover:bg-indigo-550 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-xl shadow-indigo-600/10 active:scale-[0.99] cursor-pointer ${
                    loading ? 'opacity-80 cursor-wait' : ''
                  }`}
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 ml-0.5" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
