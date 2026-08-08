<!--
==============================================================================
Nome: SkillsSection.vue
Tipo: COMPONENT
Responsabilidade: Renderiza uma seção visual da aplicação.
Padrão: BEM
==============================================================================
-->

<template>
  <Section id="skills" class="skills-section">
    <Container class="skills-shell">
      <div class="skills-header">
        <BaseBadge class="section">Minhas Stacks</BaseBadge>
      </div>

      <div class="skills-grid">
        <SkillChip
          v-for="tech in techSkills"
          :key="tech.slug"
          :name="tech.name"
          :icon="`https://cdn.simpleicons.org/${tech.slug}/${tech.iconColor || '6c63ff'}`"
        />
      </div>

      <div class="skills-header-concepts">
        <BaseBadge class="section">Práticas de Engenharia</BaseBadge>
      </div>

      <div class="skills-grid">
        <SkillChip v-for="concept in conceptSkills" :key="concept.item" :name="concept.item" />
      </div>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import { conceptSkills, techSkills } from '@/content/skills'
import BaseBadge from '@/components/base/BaseBadge.vue'
import Container from '@/components/layout/Container.vue'
import Section from '@/components/layout/Section.vue'
import SkillChip from '@/components/ui/SkillChip.vue'
</script>
