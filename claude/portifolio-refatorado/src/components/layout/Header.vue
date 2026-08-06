<template>
  <header class="portfolio-header" :class="{ 'portfolio-header--scrolled': isScrolled }">
    <Container>
      <div class="header-inner">
        <a href="#hero" class="portfolio-brand" aria-label="Ir para o início">
          <span class="brand-initials">{{ profile.shortName }}</span>
          <span class="brand-name">{{ profile.name }}</span>
        </a>

        <nav class="portfolio-navigation" role="navigation" aria-label="Navegação principal">
          <a
            v-for="item in navigation"
            :key="item.id"
            :href="item.href"
            class="navigation-link"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="header-actions">
          <BaseButton href="#contato" variant="primary" aria-label="Entre em contato">
            Vamos conversar
          </BaseButton>
        </div>

        <button
          class="mobile-menu-toggle"
          :aria-expanded="menuOpen"
          aria-label="Abrir menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="hamburger" :class="{ open: menuOpen }"></span>
        </button>
      </div>
    </Container>

    <div class="mobile-menu" :class="{ 'mobile-menu--open': menuOpen }">
      <nav role="navigation" aria-label="Menu mobile">
        <a
          v-for="item in navigation"
          :key="item.id"
          :href="item.href"
          class="mobile-menu-link"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </a>
        <BaseButton href="#contato" variant="primary" class="mobile-cta">
          Vamos conversar
        </BaseButton>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Container from './Container.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { navigation } from '@/config/navigation'
import { profile } from '@/content/profile'

const isScrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.portfolio-header {
  width: 100%;
  height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: transparent;
  transition:
    background var(--transition-base),
    border-color var(--transition-base),
    box-shadow var(--transition-base);
}

.portfolio-header--scrolled {
  background: var(--color-surface-overlay);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.header-inner {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}

/* Brand */
.portfolio-brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  transition: opacity var(--transition-base);
  flex-shrink: 0;
}
.portfolio-brand:hover { opacity: 0.85; }

.brand-initials {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: var(--color-background);
  font-size: var(--text-sm);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.brand-name {
  color: var(--color-text);
  font-family: var(--font-family);
  font-size: var(--text-md);
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Navigation */
.portfolio-navigation {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.navigation-link {
  color: var(--color-text-muted);
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: 500;
  text-decoration: none;
  transition: color var(--transition-base);
  position: relative;
  white-space: nowrap;
}

.navigation-link:hover { color: var(--color-text); }

.navigation-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  border-radius: var(--radius-full);
  transition: width var(--transition-base);
}
.navigation-link:hover::after { width: 100%; }

/* Hamburger */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  gap: 5px;
  padding: 0;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: transform var(--transition-base), opacity var(--transition-base);
}
.hamburger { position: relative; }
.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  left: 0;
}
.hamburger::before { top: -6px; }
.hamburger::after  { top:  6px; }

.hamburger.open { background: transparent; }
.hamburger.open::before { transform: rotate(45deg) translate(4px, 4px); }
.hamburger.open::after  { transform: rotate(-45deg) translate(4px, -4px); }

/* Mobile menu */
.mobile-menu {
  display: none;
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  background: var(--color-surface-overlay);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-5) var(--space-4);
  flex-direction: column;
  gap: var(--space-2);
  z-index: 99;
}

.mobile-menu-link {
  display: block;
  padding: var(--space-3) var(--space-4);
  color: var(--color-text-muted);
  font-size: var(--text-md);
  font-weight: 500;
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: background var(--transition-base), color var(--transition-base);
}
.mobile-menu-link:hover {
  background: var(--color-primary-muted);
  color: var(--color-text);
}

.mobile-cta { width: 100%; margin-top: var(--space-3); }

@media (max-width: 768px) {
  .portfolio-navigation,
  .header-actions { display: none; }
  .mobile-menu-toggle { display: flex; }
  .mobile-menu--open { display: flex; }
}
</style>
