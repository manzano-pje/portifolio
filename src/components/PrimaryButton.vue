<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  target?: string
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
})
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950"
    :class="[
      variant === 'primary'
        ? 'bg-primary-600 text-white hover:bg-primary-500 active:bg-primary-700'
        : 'border border-surface-600 text-surface-200 hover:border-surface-500 hover:text-surface-100 active:border-surface-700',
      size === 'sm' ? 'px-3 py-1.5 text-sm' : size === 'lg' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm',
    ]"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    class="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 disabled:opacity-50 disabled:cursor-not-allowed"
    :class="[
      variant === 'primary'
        ? 'bg-primary-600 text-white hover:bg-primary-500 active:bg-primary-700'
        : 'border border-surface-600 text-surface-200 hover:border-surface-500 hover:text-surface-100 active:border-surface-700',
      size === 'sm' ? 'px-3 py-1.5 text-sm' : size === 'lg' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm',
    ]"
  >
    <slot />
  </button>
</template>
