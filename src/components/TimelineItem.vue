<script setup lang="ts">
import type { Experience } from '@/types'

defineProps<{
  experience: Experience
  isLast: boolean
}>()
</script>

<template>
  <div class="relative pl-8 md:pl-10 pb-8 md:pb-12">
    <div
      class="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-primary-500 bg-surface-900"
      aria-hidden="true"
    />
    <div
      v-if="!isLast"
      class="absolute left-1.5 top-5 bottom-0 w-px bg-surface-700"
      aria-hidden="true"
    />

    <div class="space-y-2">
      <h3 class="text-lg font-semibold text-surface-50">
        {{ experience.role }}
      </h3>
      <p class="text-sm font-medium text-primary-400">
        {{ experience.company }}
      </p>
      <p v-if="experience.period" class="text-xs text-surface-500">
        {{ experience.period }}
      </p>
      <div
        v-for="(paragraph, index) in experience.description.split('\n\n')"
        :key="index"
        class="text-sm text-surface-400 leading-relaxed pt-2"
      >
        {{ paragraph }}
      </div>

      <ul
        v-if="experience.activities"
        class="flex flex-wrap gap-2 pt-3"
      >
        <li
          v-for="activity in experience.activities"
          :key="activity"
          class="inline-flex items-center rounded-md border border-surface-700/60 bg-surface-800/40 px-2.5 py-1 text-xs text-surface-400"
        >
          {{ activity }}
        </li>
      </ul>
    </div>
  </div>
</template>
