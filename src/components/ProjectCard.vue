<script setup lang="ts">
import type { Project } from '@/types'
import Tag from '@/components/Tag.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'
import { ExternalLink, Code2 } from '@lucide/vue'
import BrandIcon from '@/components/BrandIcon.vue'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article
    class="card-base group flex flex-col overflow-hidden"
    :class="{ 'opacity-60': project.inDevelopment }"
  >
    <div
      class="relative aspect-video w-full overflow-hidden bg-surface-800"
    >
      <div
        v-if="!project.image"
        class="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-800 to-surface-850"
      >
        <Code2 class="h-12 w-12 text-surface-600" aria-hidden="true" />
      </div>
      <img
        v-else
        :src="project.image"
        :alt="`Imagem do projeto ${project.name}`"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        v-if="project.inDevelopment"
        class="absolute top-3 right-3 rounded-md bg-accent-500/20 px-2.5 py-1 text-xs font-medium text-accent-300 border border-accent-500/30"
      >
        Em desenvolvimento
      </div>
    </div>

    <div class="flex flex-1 flex-col p-5 md:p-6">
      <h3 class="text-lg font-semibold text-surface-50 mb-2">
        {{ project.name }}
      </h3>
      <p class="text-sm text-surface-400 leading-relaxed mb-4 flex-1">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-1.5 mb-5">
        <Tag v-for="tag in project.tags" :key="tag" :label="tag" />
      </div>

      <div v-if="!project.inDevelopment" class="flex flex-wrap gap-2">
        <PrimaryButton
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          size="sm"
        >
          <BrandIcon name="github" />
          GitHub
        </PrimaryButton>
        <SecondaryButton
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          size="sm"
        >
          <ExternalLink class="h-4 w-4" aria-hidden="true" />
          Demo
        </SecondaryButton>
      </div>
    </div>
  </article>
</template>
