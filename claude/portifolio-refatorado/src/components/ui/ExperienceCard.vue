<template>
  <div class="experience-card">
    <div class="experience-dot" :class="{ 'experience-dot--current': experience.isCurrent }"></div>
    <div class="experience-content">
      <div class="experience-header">
        <div>
          <BaseTitle tag="h3" size="card">{{ experience.role }}</BaseTitle>
          <p class="experience-company">{{ experience.company }}</p>
        </div>
        <div class="experience-meta">
          <span v-if="experience.period" class="experience-period">{{ experience.period }}</span>
          <BaseBadge v-if="experience.isCurrent" variant="primary">Atual</BaseBadge>
        </div>
      </div>
      <p class="experience-description">{{ experience.description }}</p>
      <ul v-if="experience.activities?.length" class="experience-activities">
        <li
          v-for="activity in experience.activities"
          :key="activity"
          class="experience-activity"
        >
          {{ activity }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '@/types'
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'

defineProps<{ experience: Experience }>()
</script>

<style scoped>
.experience-card {
  display: flex;
  gap: var(--space-5);
  padding-bottom: var(--space-7);
  position: relative;
}

.experience-card:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 16px;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
}

.experience-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-surface-raised);
  border: 2px solid var(--color-border);
  flex-shrink: 0;
  margin-top: 4px;
  transition: border-color var(--transition-base), background var(--transition-base);
}

.experience-dot--current {
  background: var(--color-primary);
  border-color: var(--color-primary);
  box-shadow: 0 0 12px var(--color-primary-glow);
}

.experience-content { flex: 1; min-width: 0; }

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-bottom: var(--space-3);
}

.experience-company {
  color: var(--color-primary-light);
  font-size: var(--text-sm);
  font-weight: 600;
  margin-top: var(--space-1);
}

.experience-meta {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}

.experience-period {
  color: var(--color-text-faint);
  font-size: var(--text-xs);
  white-space: nowrap;
}

.experience-description {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  line-height: 1.7;
  white-space: pre-line;
}

.experience-activities {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-3);
  list-style: none;
}

.experience-activity {
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-3);
  color: var(--color-text-muted);
  font-size: var(--text-xs);
  font-weight: 500;
}
</style>
