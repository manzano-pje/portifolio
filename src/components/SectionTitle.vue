<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div
    class="mb-12 md:mb-16"
    :class="align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left'"
  >
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-surface-50 tracking-tight">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 text-surface-400 text-base md:text-lg leading-relaxed">
      {{ subtitle }}
    </p>
  </div>
</template>
