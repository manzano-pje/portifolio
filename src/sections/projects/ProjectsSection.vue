<!--
==============================================================================
Nome: ProjectsSection.vue
Tipo: COMPONENT
Responsabilidade: Renderiza uma seção visual da aplicação.
Padrão: BEM
==============================================================================
-->

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
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import Container from '@/components/layout/Container.vue'
import Section from '@/components/layout/Section.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
</script>

<template>
  <Section id="projetos" class="projects-section">
    <Container class="projects-shell">
      <div class="projects-header">
        <BaseBadge class="section-tag">Projetos em destaque</BaseBadge>
        <BaseTitle class="projects-title">Aplicações que unem arquitetura, produto e experiência</BaseTitle>
        <p class="projects-description">
          Trabalhos selecionados com foco em soluções escaláveis, APIs robustas e interfaces claras para a experiência do usuário.
        </p>
      </div>

      <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </Container>
  </Section>
</template>
