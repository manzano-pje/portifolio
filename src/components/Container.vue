<script setup lang="ts">
defineProps<{
  as?: string
}>()
</script>

<template>
  <component :is="as || 'div'" class="container-page">
    <slot />
  </component>
</template>
