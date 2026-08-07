<template>
  <section :id="id" class="section">
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id?: string
}>()
</script>

<style scoped>
.section {
  padding: var(--space-8) 0;
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-7) 0;
  }
}
</style>
