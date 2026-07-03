<script setup lang="ts">
import type { Certificate } from '@/types'
import { Award } from '@lucide/vue'

defineProps<{
  certificate: Certificate
}>()
</script>

<template>
  <article class="card-base p-5 flex items-start gap-4">
    <div
      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 border border-primary-500/20"
    >
      <Award class="h-5 w-5 text-primary-400" aria-hidden="true" />
    </div>
    <div class="flex-1 min-w-0">
      <h3 class="text-sm font-semibold text-surface-100 mb-1">
        {{ certificate.name }}
      </h3>
      <p class="text-xs text-surface-400">{{ certificate.institution }}</p>
      <div class="flex items-center gap-3 mt-2 text-xs text-surface-500">
        <span>{{ certificate.year }}</span>
        <span v-if="certificate.workload" class="text-surface-600">·</span>
        <span v-if="certificate.workload">{{ certificate.workload }}</span>
      </div>
    </div>
  </article>
</template>
