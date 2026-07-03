import type { TechnologyGroup } from '@/types'

export const technologies: TechnologyGroup[] = [
  {
    category: 'Backend',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'JWT',
      'REST API',
      'RabbitMQ',
    ],
  },
  {
    category: 'Banco de Dados',
    technologies: ['PostgreSQL', 'MySQL', 'H2 Database'],
  },
  {
    category: 'Frontend',
    technologies: ['Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Arquitetura',
    technologies: [
      'SOLID',
      'Clean Code',
      'DDD (em estudo)',
      'Clean Architecture (em estudo)',
      'Arquitetura em Camadas',
      'Microsserviços (em estudo)',
    ],
  },
  {
    category: 'Ferramentas',
    technologies: [
      'Git',
      'GitHub',
      'Docker',
      'Swagger / OpenAPI',
      'Postman',
      'Maven',
      'IntelliJ IDEA',
      'VS Code',
    ],
  },
  {
    category: 'Cloud',
    technologies: ['AWS (Conhecimento teórico)'],
  },
]
