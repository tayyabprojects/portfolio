export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
  imageSrc: string;
  liveLink: string;
  demoLink?: string;
  category: string;
}

export interface SkillGroup {
  category: string;
  color: 'indigo' | 'purple' | 'blue' | 'emerald' | 'amber';
  skills: {
    name: string;
    level: number; // percentage
  }[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  badge: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  subtitle?: string;
  description: string;
  bullets: string[];
  tags: string[];
}
