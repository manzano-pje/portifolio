<script setup lang="ts">
import { projects } from '@/constants/projects'
import Container from '@/components/Container.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <section id="projects" class="section-padding">
    <Container as="div">
      <div v-reveal>
        <SectionTitle title="Projetos em Destaque" align="center" />
      </div>

      <div
        v-reveal
        class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </Container>
  </section>
</template>
