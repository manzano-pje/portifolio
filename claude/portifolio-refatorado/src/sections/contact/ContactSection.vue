<template>
  <Section id="contato">
    <Container>
      <div class="contact-grid">
        <div class="contact-text reveal">
          <BaseBadge>Contato</BaseBadge>
          <BaseTitle tag="h2" size="section" class="contact-title">
            Vamos trabalhar juntos?
          </BaseTitle>
          <p class="contact-description">
            Estou sempre aberto a novas oportunidades e projetos desafiadores.
            Vamos conversar sobre como posso agregar valor ao seu time.
          </p>
        </div>

        <div class="contact-links reveal delay-200">
          <a :href="`mailto:${site.email}`" class="contact-item">
            <div class="contact-item-icon" aria-hidden="true">✉</div>
            <div>
              <p class="contact-item-label">Email</p>
              <p class="contact-item-value">{{ site.email }}</p>
            </div>
          </a>
          <a :href="`https://${site.linkedin}`" class="contact-item" target="_blank" rel="noopener noreferrer">
            <div class="contact-item-icon" aria-hidden="true">in</div>
            <div>
              <p class="contact-item-label">LinkedIn</p>
              <p class="contact-item-value">{{ site.linkedin }}</p>
            </div>
          </a>
          <a :href="`https://${site.github}`" class="contact-item" target="_blank" rel="noopener noreferrer">
            <div class="contact-item-icon" aria-hidden="true">⌥</div>
            <div>
              <p class="contact-item-label">GitHub</p>
              <p class="contact-item-value">{{ site.github }}</p>
            </div>
          </a>
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
import { site } from '@/config/site'
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: center;
}

.contact-title { margin: var(--space-4) 0 var(--space-5); }

.contact-description {
  color: var(--color-text-muted);
  font-size: var(--text-md);
  line-height: 1.7;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: border-color var(--transition-base), transform var(--transition-base);
}
.contact-item:hover {
  border-color: var(--color-border-hover);
  transform: translateX(4px);
}

.contact-item-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: var(--color-primary-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-light);
  font-size: var(--text-sm);
  font-weight: 700;
  flex-shrink: 0;
}

.contact-item-label {
  color: var(--color-text-faint);
  font-size: var(--text-xs);
  font-weight: 500;
  margin-bottom: 2px;
}

.contact-item-value {
  color: var(--color-text);
  font-size: var(--text-sm);
  font-weight: 500;
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
