<!--
==============================================================================
Nome: ProjectCard.vue
Tipo: COMPONENT
Responsabilidade: Renderiza o card de um projeto com informações e ações de navegação.
Dependências: Project
Padrão: BEM
==============================================================================
-->

<script setup lang="ts">
import type { Project } from '@/types'
import BaseCard from '@/components/base/BaseCard.vue'

defineProps<{
    project: Project
}>()
</script>

<template>
    <BaseCard class="project-card card">
        <div class="project-card__header">
            <div>
                <h3 class="project-card__title">{{ project.name }}</h3>
                <p class="project-card__subtitle">{{ project.subtitle }}</p>
            </div>
        </div>

        <p class="project-card__description">{{ project.description }}</p>

        <div class="project-card__tags">
            <span v-for="tag in project.tags.slice(0, 6)" :key="tag" class="project-card__tag badge">
                {{ tag }}
            </span>
        </div>

        <div class="project-card__actions">
            <a class="project-card__button project-card__button--primary" :href="project.demoUrl || project.githubUrl"
                target="_blank" rel="noreferrer">
                Demo
            </a>
            <a class="project-card__button project-card__button--ghost" :href="project.githubUrl" target="_blank"
                rel="noreferrer">
                GitHub
            </a>
        </div>
    </BaseCard>
</template>
