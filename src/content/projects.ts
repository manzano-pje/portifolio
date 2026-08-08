/*
==============================================================================
Nome: projects.ts
Tipo: CONFIG
Responsabilidade: Centraliza os dados dos projetos exibidos na seção de destaque.
==============================================================================
*/

import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'proofchain',
    name: 'ProofChain',
    subtitle: 'Plataforma de Certificados Digitais',
    description:
      'Plataforma SaaS para emissão, gestão e validação de certificados digitais com integração blockchain para garantir autenticidade.',
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
    id: 'restaurante',
    name: 'Sistema de Restaurante',
    subtitle: 'Gestão de Pedidos e Operações',
    description:
      'API para gerenciamento de restaurantes e lanchonetes, com controle de mesas, pedidos, produtos e setores de atendimento, utilizando mensageria para direcionamento dos pedidos.',
    tags: [
      'Java',
      'Spring Boot',
      'RabbitMQ',
      'MySQL',
      'Docker',
      'REST API',
    ],
      image: '',
      githubUrl: 'https://github.com/manzano-pje',
  },
  {
  id: 'controle-estoque',
  name: 'Sistema de Controle de Estoque',
  subtitle: 'Gestão de Produtos e Estoque',
  description:
    'API para gerenciamento de produtos e controle de estoque, desenvolvida com Spring Boot e persistência de dados utilizando JPA e Hibernate.',
  tags: [
    'Java 17',
    'Spring Boot 3.1.3',
    'Spring Data JPA',
    'Hibernate',
    'MySQL',
    'Docker',
    'Swagger/OpenAPI',
  ],
    image: '',
    githubUrl: 'https://github.com/manzano-pje',
    demoUrl: 'https://github.com/manzano-pje',
  },
]
