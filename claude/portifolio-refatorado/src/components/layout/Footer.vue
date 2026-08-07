<template>
  <footer class="portfolio-footer">
    <Container>
      <div class="footer-inner">
        <p class="footer-copy">
          &copy; {{ year }} {{ profile.name }}. Todos os direitos reservados.
        </p>
        <div class="footer-socials">
          <a
            v-for="link in socialLinks"
            :key="link.id"
            :href="link.href"
            :aria-label="link.label"
            class="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">
import Container from './Container.vue'
import { profile } from '@/content/profile'
import { socialLinks } from '@/content/socials'

const year = new Date().getFullYear()
</script>

<style scoped>
.portfolio-footer {
  border-top: 1px solid var(--color-border);
  padding: var(--space-6) 0;
  background: var(--color-background-soft);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.footer-copy {
  color: var(--color-text-faint);
  font-size: var(--text-sm);
}

.footer-socials {
  display: flex;
  gap: var(--space-5);
}

.footer-social-link {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  text-decoration: none;
  transition: color var(--transition-base);
}
.footer-social-link:hover { color: var(--color-primary); }

@media (max-width: 640px) {
  .footer-inner { flex-direction: column; text-align: center; }
}
</style>
