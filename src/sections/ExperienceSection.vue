<script setup lang="ts">
import { experiences } from '@/constants/experience'
import Container from '@/components/Container.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import TimelineItem from '@/components/TimelineItem.vue'
</script>

<template>
  <section id="experience" class="section-padding bg-surface-900/30">
    <Container as="div">
      <div v-reveal>
        <SectionTitle title="Experiência Profissional" align="left" />
      </div>

      <div v-reveal class="max-w-3xl">
        <TimelineItem
          v-for="(experience, index) in experiences"
          :key="experience.id"
          :experience="experience"
          :is-last="index === experiences.length - 1"
        />
      </div>
    </Container>
  </section>
</template>
