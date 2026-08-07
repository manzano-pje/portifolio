<template>
  <Section id="sobre">
    <Container>
      <div class="about-grid">

        <div class="about-text reveal">
          <BaseBadge class="section-badge">Sobre mim</BaseBadge>
          <BaseTitle tag="h2" size="section" class="about-title">
            Quem sou eu
          </BaseTitle>
          <div class="about-paragraphs">
            <p
              v-for="(paragraph, i) in about.paragraphs"
              :key="i"
              class="about-paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
          <BaseButton :href="about.ctaHref" variant="secondary" class="about-cta">
            {{ about.ctaLabel }} →
          </BaseButton>
        </div>

        <div class="about-stack reveal delay-200">
          <BaseBadge class="section-badge">Minha Stack</BaseBadge>
          <BaseTitle tag="h3" size="card" class="stack-subtitle">Tecnologias</BaseTitle>
          <div class="tech-grid">
            <div
              v-for="tech in techSkills"
              :key="tech.slug"
              class="tech-item"
            >
              <BaseIcon
                :slug="tech.slug"
                :name="tech.name"
                :color="tech.iconColor ?? 'ffffff'"
                :size="28"
              />
              <span class="tech-name">{{ tech.name }}</span>
            </div>
          </div>

          <div class="concept-groups">
            <div
              v-for="group in conceptSkills"
              :key="group.category"
              class="concept-group"
            >
              <p class="concept-category">{{ group.category }}</p>
              <div class="concept-items">
                <SkillChip
                  v-for="item in group.items"
                  :key="item"
                  :label="item"
                />
              </div>
            </div>
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
import BaseButton from '@/components/base/BaseButton.vue'
import BaseIcon from '@/components/base/BaseIcon.vue'
import SkillChip from '@/components/ui/SkillChip.vue'
import { about } from '@/content/about'
import { techSkills, conceptSkills } from '@/content/skills'
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: start;
}

.section-badge { margin-bottom: var(--space-4); }

.about-title { margin-bottom: var(--space-5); }

.about-paragraphs {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.about-paragraph {
  color: var(--color-text-muted);
  font-size: var(--text-md);
  line-height: 1.7;
}

.stack-subtitle { margin: var(--space-4) 0 var(--space-5); }

.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-base), transform var(--transition-base);
}
.tech-item:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-2px);
}

.tech-name {
  color: var(--color-text-muted);
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
}

.concept-groups {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.concept-category {
  color: var(--color-text-faint);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-2);
}

.concept-items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

@media (max-width: 1024px) {
  .about-grid { grid-template-columns: 1fr; }
  .tech-grid { grid-template-columns: repeat(6, 1fr); }
}

@media (max-width: 640px) {
  .tech-grid { grid-template-columns: repeat(4, 1fr); }
}
</style>
