<template>
  <component :is="tag" class="base-title" :class="`base-title--${size}`">
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  tag?: 'h1' | 'h2' | 'h3' | 'h4'
  size?: 'hero' | 'section' | 'card'
}>(), {
  tag: 'h2',
  size: 'section'
})
</script>

<style scoped>
.base-title {
  font-family: var(--font-family);
  font-weight: 800;
  color: var(--color-text);
  line-height: 1.1;
  letter-spacing: -0.03em;
}
.base-title--hero {
  font-size: var(--text-hero);
  letter-spacing: -0.04em;
}
.base-title--section {
  font-size: var(--text-xl);
}
.base-title--card {
  font-size: var(--text-lg);
  font-weight: 700;
}
</style>
