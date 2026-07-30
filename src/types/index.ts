export interface Profile {
  name: string
  shortName: string
  role: string
  summary: string
  description: string
  photo: string
  resumeUrl: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
}

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: string
}

export interface Technology {
  name: string
  category: TechnologyCategory
}

export type TechnologyCategory =
  | 'Backend'
  | 'Frontend'
  | 'Banco de Dados'
  | 'Mensageria'
  | 'Ferramentas'
  | 'Arquitetura'
  | 'Cloud'

export interface TechnologyGroup {
  category: TechnologyCategory
  technologies: string[]
}

// ─── Skills ──────────────────────────────────────────────────────────────────

/** Tecnologia com ícone visual — usada no grid da seção Stacks */
export interface SkillTech {
  name: string
  /** Slug do Simple Icons (https://simpleicons.org) para montar a URL do ícone */
  slug: string
  /** Cor hex do ícone (sem #). Se omitido, usa a cor padrão do Simple Icons */
  iconColor?: string
}

export type SkillConceptCategory =
  | 'Boas Práticas'
  | 'Metodologias'
  | 'APIs & Protocolos'

/** Grupo de conceitos/metodologias — exibidos como text badges */
export interface SkillConceptGroup {
  category: SkillConceptCategory
  items: string[]
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  name: string
  subtitle?: string
  description: string
  tags: string[]
  image: string
  githubUrl?: string
  demoUrl?: string
  inDevelopment?: boolean
}

// ─── Experience ───────────────────────────────────────────────────────────────

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  activities?: string[]
  isCurrent?: boolean
}

// ─── Certificates ─────────────────────────────────────────────────────────────

export interface Certificate {
  id: string
  name: string
  institution: string
  year: string
  workload?: string
  category: CertificateCategory
}

export type CertificateCategory =
  | 'Desenvolvimento Java'
  | 'Spring Framework'
  | 'Banco de Dados'
  | 'Docker'
  | 'Git e GitHub'
  | 'Arquitetura de Software'
  | 'Cloud Computing'
  | 'Redes de Computadores'
  | 'Segurança'

export interface CertificateGroup {
  category: CertificateCategory
  certificates: Certificate[]
}

// ─── GitHub ───────────────────────────────────────────────────────────────────

export interface GithubUserStats {
  login: string
  name: string
  bio: string
  publicRepos: number
  followers: number
  following: number
  avatarUrl: string
  profileUrl: string
}

export interface GithubRepoStats {
  totalStars: number
  topLanguages: { language: string; percentage: number }[]
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export interface Contact {
  title: string
  description: string
  email: string
  location: string
  linkedinUrl: string
  githubUrl: string
  resumeUrl: string
}

// ─── Shared ───────────────────────────────────────────────────────────────────

export interface Indicator {
  label: string
  value: string
}
