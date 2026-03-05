export interface Experience {
  period: string;
  company: string;
  link?: string;
  role: string;
  description: string;
  details: string[];
}

export interface Project {
  title: string;
  role: string;
  link?: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface NewsletterItem {
  title: string;
  description?: string;
  link: string;
  date: string; // ISO date string e.g. "2026-03-01"
}
