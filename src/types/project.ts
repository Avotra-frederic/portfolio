interface ProjectLinks {
  live?: string;
  github?: string;
}

interface ProjectCvDetails {
  role?: string;
  period: string;
  summary: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface CodeSample {
  language: string;
  code: string;
  caption?: string;
}

interface BeforeAfter {
  before: string;
  after: string;
}

interface TeamMember {
  name: string;
  role: string;
}

interface ProjectChallenge {
  title: string;
  description: string;
}

type ProjectStatus = "en production" | "en développement" | "terminé";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  type: string;
  sector: string;
  dateLabel: string;
  role: string;
  team: TeamMember[];
  status: ProjectStatus;
  stack: string[];
  summary: string;
  context: string;
  solution: string;
  features: string[];
  challenges?: ProjectChallenge[];
  results?: string[];
  links: ProjectLinks;
  cover: string;
  gallery?: GalleryImage[];
  codeSample?: CodeSample;
  beforeAfter?: BeforeAfter;
  cv?: ProjectCvDetails;
}
