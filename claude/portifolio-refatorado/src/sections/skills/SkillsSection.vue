<template>
  <Section id="skills">
    <Container>
      <div class="section-header reveal">
        <BaseBadge>Skills</BaseBadge>
        <BaseTitle tag="h2" size="section">Tecnologias e práticas</BaseTitle>
      </div>

      <div class="skills-grid">
        <div
          v-for="tech in techSkills"
          :key="tech.slug"
          class="skill-item reveal"
        >
          <BaseIcon :slug="tech.slug" :name="tech.name" :color="tech.iconColor ?? 'ffffff'" :size="32" />
          <span class="skill-name">{{ tech.name }}</span>
        </div>
      </div>

      <div class="concepts reveal">
        <div
          v-for="group in conceptSkills"
          :key="group.category"
          class="concept-group"
        >
          <p class="concept-label">{{ group.category }}</p>
          <div class="concept-chips">
            <SkillChip v-for="item in group.items" :key="item" :label="item" />
          </div>
        </div>
      </div>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/layout/Section.vue'
import Container from '@/components/layout/Container.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import SkillChip from '@/components/ui/SkillChip.vue'
import { techSkills, conceptSkills } from '@/content/skills'
</script>

<style scoped>
.section-header {
  margin-bottom: var(--space-7);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-7);
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition-base), transform var(--transition-base);
}
.skill-item:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-3px);
}

.skill-name {
  color: var(--color-text-muted);
  font-size: var(--text-xs);
  font-weight: 500;
  text-align: center;
}

.concepts {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.concept-group { display: flex; flex-direction: column; gap: var(--space-3); }

.concept-label {
  color: var(--color-text-faint);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.concept-chips { display: flex; flex-wrap: wrap; gap: var(--space-2); }

@media (max-width: 1024px) {
  .skills-grid { grid-template-columns: repeat(4, 1fr); }
}
@media (max-width: 640px) {
  .skills-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
