<script setup lang="ts">
import type { SocialLink } from '@/types'
import { Mail } from '@lucide/vue'
import BrandIcon from '@/components/BrandIcon.vue'

defineProps<{
  social: SocialLink
}>()
</script>

<template>
  <a
    :href="social.href"
    :target="social.href.startsWith('http') ? '_blank' : undefined"
    :rel="social.href.startsWith('http') ? 'noopener noreferrer' : undefined"
    :aria-label="social.label"
    class="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-surface-700 bg-surface-800/50 text-surface-400 transition-all duration-200 hover:border-surface-600 hover:text-surface-100 hover:bg-surface-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950"
  >
    <BrandIcon v-if="social.icon === 'github'" name="github" />
    <BrandIcon v-else-if="social.icon === 'linkedin'" name="linkedin" />
    <Mail v-else class="h-5 w-5" aria-hidden="true" />
  </a>
</template>
