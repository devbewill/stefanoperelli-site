
export interface Experience {
  period: string;
  company: string;
  link?: string; // Add optional link which was missing in view_file types.ts but used in code
  role: string;
  description: string;
  details: string[];
}

export interface Project {
  title: string;
  role: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
