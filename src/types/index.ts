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

export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  image: string
  githubUrl?: string
  demoUrl?: string
  inDevelopment?: boolean
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  activities?: string[]
}

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

export interface GithubStats {
  rank: string
  currentStreak: number
  contributionGraph: string
}

export interface Indicator {
  label: string
  value: string
}

export interface Contact {
  title: string
  description: string
  email: string
  linkedinUrl: string
  githubUrl: string
  resumeUrl: string
}
