<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center rounded-md border border-surface-700 bg-surface-800/60 px-2.5 py-1 text-xs font-medium text-surface-300 transition-colors duration-200 hover:border-surface-600 hover:text-surface-200"
  >
    {{ label }}
  </span>
</template>
