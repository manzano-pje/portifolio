<template>
  <div class="base-card" :class="{ 'base-card--hover': hoverable }">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  hoverable?: boolean
}>(), {
  hoverable: false
})
</script>

<style scoped>
.base-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition:
    border-color var(--transition-base),
    transform var(--transition-base),
    box-shadow var(--transition-base);
}
.base-card--hover:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
</style>
