<template>
  <Section id="experiencia">
    <Container>
      <div class="section-header reveal">
        <BaseBadge>Experiência</BaseBadge>
        <BaseTitle tag="h2" size="section">Minha trajetória</BaseTitle>
      </div>

      <TimeLine>
        <ExperienceCard
          v-for="exp in experiences"
          :key="exp.id"
          :experience="exp"
          class="reveal"
        />
      </TimeLine>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/layout/Section.vue'
import Container from '@/components/layout/Container.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import TimeLine from '@/components/ui/TimeLine.vue'
import ExperienceCard from '@/components/ui/ExperienceCard.vue'
import { experiences } from '@/content/experience'
</script>

<style scoped>
.section-header {
  margin-bottom: var(--space-7);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
</style>
