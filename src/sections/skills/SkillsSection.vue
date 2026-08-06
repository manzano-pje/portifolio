<template>
  <section id="skills" class="skills-section">
    <div class="skills-shell">
      <div class="skills-header">
        <span class="section-tag">Minhas Stacks</span>
        <h2 class="skills-title">Tecnologias e ferramentas</h2>
      </div>

      <div class="skills-grid">
        <article
          v-for="tech in techSkills"
          :key="tech.slug"
          class="skill-card"
        >
          <div class="skill-icon" :style="{ backgroundColor: `#${tech.iconColor || '6c63ff'}` }"></div>
          <span class="skill-name">{{ tech.name }}</span>
        </article>
      </div>


<div class="skills-panel">
        

        <div class="skills-grid">
          <article
            v-for="tech in techSkills"
            :key="tech.slug"
            class="skill-card"
          >
            <img
              class="skill-logo"
              :src="`https://cdn.simpleicons.org/${tech.slug}/${tech.iconColor || '6c63ff'}`"
              :alt="tech.name"
            />
            <span class="skill-name">{{ tech.name }}</span>
          </article>
        </div>
      </div>










      <!-- <div class="skill-categories">
        <div class="category-block">
          <h3>Boas Práticas</h3>
          <div class="category-pills">
            <span>SOLID</span>
            <span>Clean Code</span>
            <span>DDD</span>
          </div>
        </div>

        <div class="category-block">
          <h3>Protocolos</h3>
          <div class="category-pills">
            <span>REST</span>
            <span>JSON</span>
            <span>RabbitMQ</span>
          </div>
        </div>

        <div class="category-block">
          <h3>Metodologias</h3>
          <div class="category-pills">
            <span>Scrum</span>
            <span>Kanban</span>
            <span>Code Review</span>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { techSkills } from '@/content/skills'
</script>
