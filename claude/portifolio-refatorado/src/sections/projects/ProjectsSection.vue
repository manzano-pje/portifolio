<template>
  <Section id="projetos">
    <Container>
      <div class="section-header reveal">
        <BaseBadge>Projetos</BaseBadge>
        <BaseTitle tag="h2" size="section">Projetos em destaque</BaseTitle>
        <p class="section-subtitle">Soluções que desenvolvi com foco em arquitetura e qualidade.</p>
      </div>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="reveal"
        />
      </div>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/layout/Section.vue'
import Container from '@/components/layout/Container.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects } from '@/content/projects'
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: var(--space-7);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.section-subtitle {
  color: var(--color-text-muted);
  font-size: var(--text-md);
  max-width: 560px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}

@media (max-width: 1024px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .projects-grid { grid-template-columns: 1fr; }
}
</style>
