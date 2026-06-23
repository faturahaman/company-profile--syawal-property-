// ─── Shared types ─────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  category: string;
  title: string;
  location: string;
  year: string;
  area: string;
  description: string;
  imgSrc: string;
  featured?: boolean;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  imgSrc: string;
}

export interface StatItem {
  value: string;
  label: string;
}
