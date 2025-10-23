export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email';
  url: string;
  label: string;
  icon: 'github' | 'linkedin' | 'mail';
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar: {
    webp: string;
    png: string;
    alt: string;
  };
  resumeUrl: string;
  location: string;
  social: SocialLink[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  dateRange: string;
  description: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  dateRange: string;
  coursework: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
}