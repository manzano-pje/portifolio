<script setup lang="ts">
defineProps<{
  label: string
  value: string
  icon?: string
}>()
</script>

<template>
  <div class="card-base p-5 text-center">
    <div class="text-2xl md:text-3xl font-bold text-primary-400 mb-1">
      {{ value }}
    </div>
    <div class="text-xs md:text-sm text-surface-400">
      {{ label }}
    </div>
  </div>
</template>
