import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'proofchain',
    name: 'ProofChain',
    subtitle: 'Plataforma de Certificados Digitais',
    description:
      'Plataforma SaaS para emissão, gestão e validação de certificados digitais com integração blockchain para garantir autenticidade. Desenvolvido para combater fraudes em certificados acadêmicos e profissionais através de registros imutáveis e verificáveis.',
    tags: [
      'Java',
      'Spring Boot',
      'Blockchain',
      'DDD',
      'Multitenancy',
      'JWT',
      'REST API',
      'PostgreSQL',
      'Docker',
      'Swagger/OpenAPI',
    ],
    image: '',
    githubUrl: 'https://github.com/manzano-pje',
  },
  {
    id: 'restaurant-system',
    name: 'Sistema de Gerenciamento de Restaurante',
    subtitle: 'Sistema Corporativo',
    description:
      'Sistema corporativo para gerenciamento completo de restaurantes, contemplando autenticação, gestão de usuários, produtos, categorias, fornecedores, pedidos e comunicação assíncrona entre serviços.',
    tags: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'RabbitMQ',
      'JWT',
      'PostgreSQL',
      'Docker',
      'Swagger',
      'REST API',
    ],
    image: '',
    githubUrl: 'https://github.com/manzano-pje',
  },
  {
    id: 'stock-control',
    name: 'Sistema de Controle de Estoque',
    subtitle: 'Gestão Empresarial',
    description:
      'Sistema para gestão de estoque empresarial, permitindo controle de produtos, categorias, fornecedores e movimentações, utilizando arquitetura organizada e preparada para evolução futura.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Swagger', 'REST API'],
    image: '',
    githubUrl: 'https://github.com/manzano-pje',
    demoUrl: 'https://github.com/manzano-pje',
  },
]
