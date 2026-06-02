export interface PersonalInfo {
  name: string;
  title: string;
  portraitUrl: string;
  bio: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  basis: string;
  educationGrade: string;
  liveBacklinksCount: string;
  webSystemsCount: string;
  successRate: string;
}

export interface AboutInfo {
  missionTitle: string;
  missionText: string;
  extraBio: string;
  bullets: string[];
  technicalEducationDesc: string;
  outreachDesc: string;
  automationDesc: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillsData {
  seoSkills: SkillItem[];
  devSkills: SkillItem[];
  automationSkills: SkillItem[];
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  liveLink: string;
  githubLink: string;
  tech: string[];
  features: string[];
}

export interface ServiceData {
  title: string;
  description: string;
  badge: string;
  iconName: 'Globe' | 'Link' | 'Mail' | 'ShieldCheck' | 'HelpCircle' | 'Code2';
}

export interface ExperienceData {
  period: string;
  role: string;
  institution: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export interface MilestoneData {
  title: string;
  desc: string;
  iconName: 'ShieldCheck' | 'Zap' | 'Milestone';
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  aboutInfo: AboutInfo;
  skillsData: SkillsData;
  projects: ProjectData[];
  services: ServiceData[];
  experiences: ExperienceData[];
  milestones: MilestoneData[];
}

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  personalInfo: {
    name: 'Muhammad Tayyab',
    title: 'Off-Page SEO Specialist | Link Building Expert | AI-Assisted Web Developer',
    portraitUrl: '/src/assets/images/tayyab_portrait_1780392340788.png',
    bio: 'Bridge the gap between organic traffic growth and custom web development. I specialize in securing premium rank-boosting backlinks, building stunning websites via AI-driven vibe coding, and developing fast, friendly digital tools.',
    email: 'seomatayyab@gmail.com',
    whatsapp: '03004504088',
    linkedin: 'https://www.linkedin.com/in/asktayyab/',
    basis: 'Pakistan',
    educationGrade: 'DAE CIT Professional',
    liveBacklinksCount: '50+',
    webSystemsCount: '05+',
    successRate: '100%'
  },
  aboutInfo: {
    missionTitle: 'Driven by Growth, Powered by Vibe Coding',
    missionText: 'I help agencies, brands, and digital publishers supercharge their search engine dominance. With a technical background grounded in a Diploma in Computer Information Technology (DAE CIT), I combine off-page link strategies with cutting-edge front-end developments and custom integrations.',
    extraBio: 'Rather than relying on outdated SEO strategies, I build custom web interfaces and outreach tools using modern AI assistant workflows. Through rapid-feedback Vibe Coding, I can scale personalized guest post campaigns, monitor backlinks in real-time, and lay out stunning components.',
    bullets: [
      'Expertise in Premium Guest Posting and High-DA Link Acquisition',
      'Tailored Competitor Backlink Analysis and Strategic SEO Consultation',
      'Specialized in AI-assisted web development with robust modern setups (React + TS)',
      'Innovative layouts using Gemini and LLMs for rapid digital design & development'
    ],
    technicalEducationDesc: 'A 3-year rigorous diploma focusing on computer systems, web application programming, database design, and software engineering principles.',
    outreachDesc: 'Direct partnerships with hundreds of premium, high-traffic SaaS and editorial sites. No spam networks, only real contextual rankings.',
    automationDesc: 'Automated partner research, custom email templates generated dynamically, and live notifications tracking backlink survival rates.'
  },
  skillsData: {
    seoSkills: [
      { name: 'Guest Posting', level: 98 },
      { name: 'Link Building & PR', level: 95 },
      { name: 'Publisher Outreach', level: 96 },
      { name: 'Competitor Analysis', level: 90 },
      { name: 'Keyword Research', level: 88 }
    ],
    devSkills: [
      { name: 'React', level: 86 },
      { name: 'TypeScript', level: 82 },
      { name: 'JavaScript ES6+', level: 88 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'Firebase Database', level: 80 },
      { name: 'GitHub Actions & Git', level: 85 }
    ],
    automationSkills: [
      { name: 'Vibe Coding & AI Prompting', level: 96 },
      { name: 'Gemini AI Code Generation', level: 92 },
      { name: 'API Integrations (REST)', level: 88 },
      { name: 'Rapid Frontend Prototyping', level: 90 }
    ]
  },
  projects: [
    {
      id: 'edutrack',
      title: 'EduTrack',
      category: 'School Management System',
      description: 'A robust, multi-school management system developed with the assistance of AI. It handles student admissions, dynamic marksheets, automated role management, and administrative tracking seamlessly.',
      imageSrc: '/src/assets/images/edutrack_dashboard_1780392359937.png',
      liveLink: 'https://tayyabprojects.github.io/edutrack/',
      githubLink: 'https://github.com/tayyabprojects/edutrack',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase Firestore', 'Security Rules'],
      features: [
        'Student Enrollment & Admission Pipelines',
        'Staff Roles, Payroll & Access Logs',
        'Real-time Class Attendance Tracking',
        'Result Grading & Automatic Marksheet Printing',
        'Expense Recording & Earnings Analytics Dashboard',
        'Integrated SMS/Email Messaging System'
      ]
    },
    {
      id: 'medicare',
      title: 'Medicare Plus',
      category: 'Patient Appointments & Doctor Prescriptions',
      description: 'An elegant clinic management app built with AI. It streamlines the patient appointment scheduling process and enables doctors to generate, sign, and dispense digital prescriptions quickly.',
      imageSrc: '/src/assets/images/medicare_dashboard_1780392379647.png',
      liveLink: 'https://tayyabprojects.github.io/medicare-project/',
      githubLink: 'https://github.com/tayyabprojects/medicare-project',
      tech: ['React (Vite)', 'JavaScript ES6+', 'Tailwind CSS', 'Local Engine Persistence'],
      features: [
        'Patient Self-Registration & Profiles',
        'Dynamic Appointment Slot Booking',
        'Doctor Dashboard with Active Cue Management',
        'Digital Prescription Creator & Dispenser',
        'Secure Electronic Patient Records (EMR)'
      ]
    }
  ],
  services: [
    {
      title: 'Premium Guest Posting',
      description: 'Durable placements of informative blogs with contextual ranking assets on high domain rating (DR 40+ to 80+) websites. Hand-reached partner blogs with real organic impressions.',
      badge: 'Highly Requested',
      iconName: 'Globe'
    },
    {
      title: 'Strategic Link Building',
      description: 'Bespoke authority architecture that aligns with search signals. We handle anchor text distributions, competitor profile reverse engineering, and safe natural link building.',
      badge: 'Core Specialist',
      iconName: 'Link'
    },
    {
      title: 'Vibe-Coded Web Development',
      description: 'Lightning-fast creation of stunning, fully-responsive web applications and interactive utility dashboards. Custom layouts, precise animations, and clean components designed through rapid AI-driven "Vibe Coding".',
      badge: 'Bestseller',
      iconName: 'Code2'
    },
    {
      title: 'Custom SEO Outreach',
      description: 'Streamlined communication with authors, webmasters, and publishers. Scaled using curated AI assistant workflows while retaining critical personalization to ensure high response rates.',
      badge: 'AI Powered',
      iconName: 'Mail'
    },
    {
      title: 'Backlink Risk Analysis',
      description: 'Comprehensive scans of backlink quality. We audit toxic anchors, spammy footprint references, page indexing velocity, and general compliance with modern search guidelines.',
      badge: 'Risk Mitigation',
      iconName: 'ShieldCheck'
    },
    {
      title: 'Professional SEO Consultation',
      description: 'Personalized technical and off-page consultations. Get actionable advice regarding crawling, schema markups, index distributions, and campaign budgets.',
      badge: '1-on-1 Session',
      iconName: 'HelpCircle'
    }
  ],
  experiences: [
    {
      period: '2024 - Present',
      role: 'Lead Off-Page SEO & Outreach Specialist',
      institution: 'Independent Consultancies & Digital Agencies',
      description: 'Scale authority footprints for client portfolios spanning e-commerce, modern SaaS, and high-tier medical blogs.',
      bullets: [
        'Organized and executed over 50+ contextual guest posting placements with DR indices above 40.',
        'Developed personalized email copy sequences, boosting outreach reply metrics by 23%.',
        'Managed secure partner/webmaster budgets, performing audits to evaluate link retention velocities.'
      ],
      tags: ['SaaS Outreach', 'Competitor Audits', 'Ahrefs', 'Link Retention']
    },
    {
      period: '2023 - Present',
      role: 'AI-Assisted Web Developer',
      institution: 'Freelance & Enterprise Projects',
      description: 'Designing and building highly optimized, responsive web systems using modern frameworks with Gemini and OpenAI LLM development assistants through high-intensity Vibe Coding.',
      bullets: [
        'Built EduTrack School Management System, an AI-assisted administration portal enabling result management and administrative monitoring.',
        'Created Medicare Plus, a healthcare scheduling platform supporting digital patient appointments and doctor prescription processes.',
        'Established rapid prototyping workflows leveraging advanced AI systems to deliver lightning-fast web projects.',
      ],
      tags: ['React JS', 'TypeScript', 'Vibe Coding', 'Firebase Cloud']
    }
  ],
  milestones: [
    {
      iconName: 'ShieldCheck',
      title: 'DAE CIT Professional Degree',
      desc: 'Finished with honors, gaining rich technical expertise across algorithm formulations, relational data schemas, and computer communications.'
    },
    {
      iconName: 'Zap',
      title: 'AI Vibe Coding Mastery',
      desc: 'Successfully accelerated site development from concept to live deployment using Gemini and large LLM prompting methods, achieving perfect user layouts.'
    },
    {
      iconName: 'Milestone',
      title: '100% Backlink Indexing Rate',
      desc: 'Consistently validated backlink health to secure permanent, search-crawled positions with organic relevance.'
    }
  ]
};

const STORAGE_KEY = 'muhammad_tayyab_portfolio_v4';

export function getPortfolioData(): PortfolioData {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      // Merge with INITIAL in case we add keys later
      const parsed = JSON.parse(data);
      return {
        ...INITIAL_PORTFOLIO_DATA,
        ...parsed,
        personalInfo: { ...INITIAL_PORTFOLIO_DATA.personalInfo, ...parsed.personalInfo },
        aboutInfo: { ...INITIAL_PORTFOLIO_DATA.aboutInfo, ...parsed.aboutInfo },
        skillsData: { ...INITIAL_PORTFOLIO_DATA.skillsData, ...parsed.skillsData },
        projects: parsed.projects || INITIAL_PORTFOLIO_DATA.projects,
        services: parsed.services || INITIAL_PORTFOLIO_DATA.services,
        experiences: parsed.experiences || INITIAL_PORTFOLIO_DATA.experiences,
        milestones: parsed.milestones || INITIAL_PORTFOLIO_DATA.milestones
      };
    }
  } catch (e) {
    console.error('Error loading portfolio data:', e);
  }
  return INITIAL_PORTFOLIO_DATA;
}

export function savePortfolioData(data: PortfolioData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving portfolio data:', e);
  }
}
