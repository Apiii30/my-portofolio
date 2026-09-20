export type TechCategory = 'all' | 'frontend' | 'backend' | 'devops';

export interface TechSkill {
  id: string;
  code: string;
  name: string;
  badge: string;
  description: string;
  proficiency: number;
  category: 'frontend' | 'backend' | 'devops';
  colorType: 'lime' | 'cyan' | 'neutral';
}

export interface ProjectItem {
  id: string;
  projectNumber: string;
  sysCode: string;
  title: string;
  statusBadge: string;
  versionBadge: string;
  description: string;
  tags: string[];
  features: string[];
  metrics: {
    label: string;
    value: string;
    color: 'lime' | 'cyan' | 'white';
  }[];
  imageSrc: string;
  imageAlt: string;
  overlayTag: {
    text: string;
    type: 'pulse' | 'ping' | 'icon';
    iconName?: string;
  };
  demoType: 'ocean' | 'cafe' | 'vehicle';
  demoButtonText: string;
  demoButtonIcon: string;
}

export interface CareerMilestone {
  id: string;
  number: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
  color: 'lime' | 'cyan' | 'neutral';
}

export interface EducationItem {
  id: string;
  number: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  gradeBadge: string;
  description: string;
  thesis?: string;
  coreSubjects: string[];
  achievements: string[];
  credentialId: string;
  color: 'lime' | 'cyan';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuedYear: string;
  credentialCode: string;
  skills: string[];
  verifiedStatus: string;
  badgeColor: 'lime' | 'cyan' | 'purple';
}
