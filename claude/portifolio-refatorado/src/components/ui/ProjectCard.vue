<template>
  <BaseCard hoverable class="project-card">
    <div class="project-header">
      <div class="project-icon" aria-hidden="true">
        {{ project.name.charAt(0) }}
      </div>
      <div class="project-meta">
        <BaseTitle tag="h3" size="card">{{ project.name }}</BaseTitle>
        <p v-if="project.subtitle" class="project-subtitle">{{ project.subtitle }}</p>
      </div>
      <BaseBadge v-if="project.inDevelopment" variant="outline">Em desenvolvimento</BaseBadge>
    </div>

    <p class="project-description">{{ project.description }}</p>

    <div class="project-tags">
      <SkillChip
        v-for="tag in project.tags.slice(0, 5)"
        :key="tag"
        :label="tag"
      />
    </div>

    <div class="project-actions">
      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        class="project-link"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Demo do projeto ${project.name}`"
      >
        Demo ↗
      </a>
      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        class="project-link project-link--secondary"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`GitHub do projeto ${project.name}`"
      >
        GitHub ↗
      </a>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import type { Project } from '@/types'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import SkillChip from './SkillChip.vue'

defineProps<{ project: Project }>()
</script>

<style scoped>
.project-card { display: flex; flex-direction: column; gap: var(--space-4); height: 100%; }

.project-header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.project-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--color-primary-muted), var(--color-surface-raised));
  border: 1px solid var(--color-border-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-lg);
  font-weight: 800;
  color: var(--color-primary-light);
  flex-shrink: 0;
}

.project-meta { flex: 1; min-width: 0; }

.project-subtitle {
  color: var(--color-primary-light);
  font-size: var(--text-xs);
  font-weight: 500;
  margin-top: var(--space-1);
}

.project-description {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  line-height: 1.7;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.project-actions {
  display: flex;
  gap: var(--space-4);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
  margin-top: auto;
}

.project-link {
  color: var(--color-primary-light);
  font-size: var(--text-sm);
  font-weight: 600;
  text-decoration: none;
  transition: color var(--transition-base);
}
.project-link:hover { color: var(--color-primary); }
.project-link--secondary { color: var(--color-text-muted); }
.project-link--secondary:hover { color: var(--color-text); }
</style>
