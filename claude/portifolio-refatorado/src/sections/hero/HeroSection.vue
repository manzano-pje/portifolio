<template>
  <Section id="hero" class="hero-section">
    <Container>
      <div class="hero-grid">

        <div class="hero-content reveal">
          <BaseBadge class="hero-badge">
            {{ profile.role }}
          </BaseBadge>

          <BaseTitle tag="h1" size="hero" class="hero-title">
            Olá, eu sou
            <span class="hero-highlight">{{ profile.name }}</span>
          </BaseTitle>

          <p class="hero-summary">{{ profile.summary }}</p>
          <p class="hero-description">{{ profile.description }}</p>

          <div class="hero-actions">
            <BaseButton href="#projetos" variant="primary" aria-label="Ver projetos">
              Ver projetos
            </BaseButton>
            <BaseButton
              v-if="profile.resumeUrl"
              :href="profile.resumeUrl"
              variant="secondary"
              aria-label="Ver currículo"
            >
              Ver currículo
            </BaseButton>
          </div>

          <div class="hero-socials">
            <a
              v-for="link in socialLinks"
              :key="link.id"
              :href="link.href"
              :aria-label="link.label"
              class="hero-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.label }}
            </a>
          </div>
        </div>

        <div class="hero-visual reveal delay-300">
          <img
            :src="profile.photo"
            :alt="`Foto de ${profile.name}`"
            class="hero-image"
            loading="eager"
          />
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
import { profile } from '@/content/profile'
import { socialLinks } from '@/content/socials'
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 72px;
  background: var(--color-background);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%);
  pointer-events: none;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--space-8);
  min-height: 70vh;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.hero-badge { align-self: flex-start; }

.hero-title {
  line-height: 1.05;
}

.hero-highlight {
  display: block;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-summary {
  color: var(--color-text);
  font-size: var(--text-lg);
  font-weight: 500;
  line-height: 1.5;
}

.hero-description {
  color: var(--color-text-muted);
  font-size: var(--text-md);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.hero-socials {
  display: flex;
  gap: var(--space-5);
  padding-top: var(--space-2);
}

.hero-social {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  font-weight: 500;
  text-decoration: none;
  transition: color var(--transition-base);
}
.hero-social:hover { color: var(--color-primary); }

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  width: 100%;
  max-width: 520px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 25px 50px rgba(0,0,0,.5));
}

@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-badge { align-self: center; }
  .hero-actions { justify-content: center; }
  .hero-socials { justify-content: center; }
  .hero-visual { order: -1; }
  .hero-image { max-width: 340px; }
}

@media (max-width: 640px) {
  .hero-actions { flex-direction: column; }
  .hero-image { max-width: 280px; }
}
</style>
