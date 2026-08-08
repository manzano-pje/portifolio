<!--
==============================================================================
Nome: ProjectsSection.vue
Tipo: VIEW
Responsabilidade: Exibe a seção de projetos em destaque na landing page.
Dependências: ProjectCard.vue, projects
Padrão: BEM
==============================================================================
-->

<script setup lang="ts">
import { projects } from '@/content/projects'
import ProjectCard from '@/components/ui/ProjectCard.vue'
</script>

<template>
  <section id="projetos" class="projects-section">
    <div class="projects-shell">
      <div class="projects-header">
        <span class="section-tag">Projetos em destaque</span>
        <h2 class="projects-title">Aplicações que unem arquitetura, produto e experiência</h2>
        <p class="projects-description">
          Trabalhos selecionados com foco em soluções escaláveis, APIs robustas e interfaces claras para a experiência do usuário.
        </p>
      </div>

      <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>
