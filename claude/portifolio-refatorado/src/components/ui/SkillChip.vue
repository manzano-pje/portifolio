<template>
  <span class="skill-chip">{{ label }}</span>
</template>

<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<style scoped>
.skill-chip {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-family: var(--font-family);
  font-size: var(--text-xs);
  font-weight: 500;
  transition: border-color var(--transition-base), color var(--transition-base);
}
.skill-chip:hover {
  border-color: var(--color-border-hover);
  color: var(--color-primary-light);
}
</style>
