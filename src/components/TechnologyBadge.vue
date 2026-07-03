<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center rounded-md border border-surface-700/60 bg-surface-800/40 px-2.5 py-1 text-xs font-medium text-surface-400"
  >
    {{ label }}
  </span>
</template>
