<template>
  <img
    class="base-icon"
    :src="`https://cdn.simpleicons.org/${slug}/${color}`"
    :alt="name"
    :width="size"
    :height="size"
    loading="lazy"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  slug: string
  name: string
  color?: string
  size?: number
}>(), {
  color: 'ffffff',
  size: 28
})
</script>

<style scoped>
.base-icon {
  display: block;
  object-fit: contain;
}
</style>
