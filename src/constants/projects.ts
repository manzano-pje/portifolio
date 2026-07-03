import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'proofchain',
    name: 'ProofChain',
    description:
      'Sistema para validação de certificados digitais utilizando Blockchain, desenvolvido para combater fraudes em certificados acadêmicos e profissionais através de registros imutáveis e verificáveis.',
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
    description:
      'Sistema corporativo desenvolvido para gerenciamento completo de restaurantes, contemplando autenticação, gestão de usuários, produtos, categorias, fornecedores, pedidos e comunicação assíncrona entre serviços.',
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
    description:
      'Sistema desenvolvido para gestão de estoque empresarial, permitindo controle de produtos, categorias, fornecedores e movimentações, utilizando arquitetura organizada e preparada para evolução futura.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Swagger', 'REST API'],
    image: '',
    githubUrl: 'https://github.com/manzano-pje',
  },
  {
    id: 'zenora',
    name: 'Zenora',
    description: 'Plataforma de integração para o agronegócio.',
    tags: ['Em desenvolvimento'],
    image: '',
    inDevelopment: true,
  },
]
