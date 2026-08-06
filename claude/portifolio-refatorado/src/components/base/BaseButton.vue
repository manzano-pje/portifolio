<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="base-button"
    :class="`base-button--${variant}`"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string
}>(), {
  variant: 'primary'
})
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-family: var(--font-family);
  font-size: var(--text-sm);
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base),
    background var(--transition-base),
    border-color var(--transition-base);
}
.base-button--primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: var(--color-background);
  box-shadow: 0 0 25px var(--color-primary-glow);
}
.base-button--primary:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}
.base-button--secondary {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
}
.base-button--secondary:hover {
  border-color: var(--color-primary);
  background: var(--color-primary-muted);
}
.base-button--ghost {
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border);
  color: var(--color-text);
}
.base-button--ghost:hover {
  border-color: var(--color-border-hover);
  background: var(--color-surface-overlay);
}
</style>
