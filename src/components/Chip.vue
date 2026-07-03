<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border border-surface-700 bg-surface-800/50 px-3 py-1 text-xs font-medium text-surface-400"
  >
    {{ label }}
  </span>
</template>
