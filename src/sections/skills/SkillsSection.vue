<template>
  <section id="skills" class="skills-section">
    <div class="skills-shell">
      <div class="skills-header">
        <span class="section-tag">Minhas Stacks</span>
      </div>

      <div class="skills-grid">
        <article v-for="tech in techSkills" :key="tech.slug" class="skill-card">
          <img
            class="skill-logo"
            :src="`https://cdn.simpleicons.org/${tech.slug}/${tech.iconColor || '6c63ff'}`"
            :alt="tech.name"
          />
          <span class="skill-name">{{ tech.name }}</span>
        </article>
      </div>

      <div class="skills-header-concepts">
        <span class="section-tag">Práticas de Engenharia</span>
      </div>

      <div class="skills-grid">
        <div v-for="concept in conceptSkills" :key="concept.item" class="skill-card">
          
            <span class="skill-name">{{ concept.item }}</span>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { conceptSkills, techSkills } from '@/content/skills'
</script>
