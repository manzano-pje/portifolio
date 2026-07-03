<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-lg border border-surface-700/60 bg-surface-800/40 px-3 py-1.5 text-sm font-medium text-surface-300 transition-all duration-200 hover:border-primary-500/40 hover:bg-surface-800/70 hover:text-surface-100"
  >
    {{ label }}
  </span>
</template>
