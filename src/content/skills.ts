import type { SkillTech, SkillConceptGroup } from '@/types'

/**
 * Grid visual de tecnologias — 12 itens (4×3)
 * Ícones via Simple Icons: https://cdn.simpleicons.org/{slug}/{hexColor}
 */
export const techSkills: SkillTech[] = [
  { name: 'Java', slug: 'openjdk', iconColor: 'f89820' },
  { name: 'Spring Boot', slug: 'springboot', iconColor: '6DB33F' },
  { name: 'Spring Security', slug: 'springsecurity', iconColor: '6DB33F' },
  { name: 'Hibernate', slug: 'hibernate', iconColor: '59666C' },
  { name: 'PostgreSQL', slug: 'postgresql', iconColor: '4169E1' },
  { name: 'MySQL', slug: 'mysql', iconColor: '4479A1' },
  { name: 'RabbitMQ', slug: 'rabbitmq', iconColor: 'FF6600' },
  { name: 'Docker', slug: 'docker', iconColor: '2496ED' },
  { name: 'GitHub', slug: 'github', iconColor: 'ffffff' },
  { name: 'Maven', slug: 'apachemaven', iconColor: 'C71A36' },
  { name: 'Swagger', slug: 'swagger', iconColor: '85EA2D' },
  { name: 'Vue.js', slug: 'vuedotjs', iconColor: '4FC08D' },
]

/**
 * Grupos de conceitos e boas práticas — exibidos como text badges
 */
export const conceptSkills: SkillConceptGroup[] = [
  {
    category: 'Boas Práticas',
    items: ['SOLID', 'Clean Code', 'DDD', 'Arquitetura MVC', 'Refatoração', 'Code Review'],
  },
  {
    category: 'APIs & Protocolos',
    items: ['REST', 'RESTful', 'JSON', 'Integração de Sistemas'],
  },
  {
    category: 'Metodologias',
    items: ['Scrum', 'Kanban'],
  },
]