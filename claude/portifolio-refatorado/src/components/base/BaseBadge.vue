<template>
  <span class="base-badge" :class="`base-badge--${variant}`">
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
}>(), {
  variant: 'primary'
})
</script>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-4);
  border-radius: var(--radius-full);
  font-family: var(--font-family);
  font-size: var(--text-xs);
  font-weight: 600;
}
.base-badge--primary {
  background: var(--color-primary-muted);
  border: 1px solid var(--color-border-hover);
  color: var(--color-primary-light);
}
.base-badge--secondary {
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
}
.base-badge--outline {
  background: transparent;
  border: 1px solid var(--color-border-hover);
  color: var(--color-primary-light);
}
</style>
