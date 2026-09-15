export interface GatewayLink {
  id: string;
  name: string;
  label: string;
  url: string;
  icon: string;
  color?: string;
  handle: string;
  type: 'social' | 'code' | 'comm' | 'contact';
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'dev' | 'sysadmin' | 'interface';
  level: number; // 0-100
  tags: string[];
  description: string;
}

export interface TimelineItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: 'ongoing' | 'completed';
  location: string;
  eiin?: string;
  highlights: string[];
}

export interface ArchitectureProject {
  id: string;
  title: string;
  codename: string;
  category: string;
  description: string;
  techStack: string[];
  status: 'Active' | 'Deployed' | 'Lab Testing' | 'Prototype';
  metrics?: { label: string; value: string };
  links?: { demo?: string; github?: string };
}
