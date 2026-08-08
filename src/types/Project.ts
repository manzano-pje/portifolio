/*
==============================================================================
Nome: Project.ts
Tipo: TYPE
Responsabilidade: Define a estrutura de dados utilizada pelos projetos exibidos na seção destacada.
==============================================================================
*/

export interface Project {
  id: string
  name: string
  subtitle: string
  description: string
  tags: string[]
  image: string
  githubUrl: string
  demoUrl?: string
}
