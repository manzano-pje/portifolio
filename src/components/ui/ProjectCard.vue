<script setup lang="ts">
import type { Project } from '@/types'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card">
    <div class="project-card__header">
      <div>
        <p class="project-card__eyebrow">Projeto em destaque</p>
        <h3 class="project-card__title">{{ project.name }}</h3>
        <p class="project-card__subtitle">{{ project.subtitle }}</p>
      </div>
      <span class="project-card__pill">Em destaque</span>
    </div>

    <p class="project-card__description">{{ project.description }}</p>

    <div class="project-card__tags">
      <span v-for="tag in project.tags.slice(0, 6)" :key="tag" class="project-card__tag">
        {{ tag }}
      </span>
    </div>

    <div class="project-card__actions">
      <a
        class="project-card__button project-card__button--primary"
        :href="project.demoUrl || project.githubUrl"
        target="_blank"
        rel="noreferrer"
      >
        Demo
      </a>
      <a
        class="project-card__button project-card__button--ghost"
        :href="project.githubUrl"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
  </article>
</template>
