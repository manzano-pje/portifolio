<script setup lang="ts">
import { profile } from '@/constants/profile'
import { socialLinks } from '@/constants/socialLinks'
import PrimaryButton from '@/components/PrimaryButton.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'
import Container from '@/components/Container.vue'
import { FileDown, ArrowRight } from '@lucide/vue'
import BrandIcon from '@/components/BrandIcon.vue'
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-surface-900/50 via-surface-950 to-surface-950"
      aria-hidden="true"
    />
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent"
      aria-hidden="true"
    />

    <Container as="div" class="relative z-10">
      <div class="max-w-3xl">
        <div v-reveal>
          <p class="text-sm font-medium text-primary-400 mb-4 tracking-wide">
            {{ profile.role }}
          </p>
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-surface-50 leading-tight tracking-tight mb-6">
            {{ profile.summary }}
          </h1>
          <p class="text-base md:text-lg text-surface-400 leading-relaxed mb-8 max-w-2xl">
            {{ profile.description }}
          </p>
        </div>

        <div v-reveal class="flex flex-wrap gap-3 mb-10" style="transition-delay: 0.1s">
          <PrimaryButton href="#projects" size="lg">
            Ver Projetos
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </PrimaryButton>
          <SecondaryButton
            v-for="social in socialLinks"
            :key="social.id"
            :href="social.href"
            :target="social.href.startsWith('http') ? '_blank' : undefined"
            size="lg"
          >
            <BrandIcon v-if="social.icon === 'github'" name="github" />
            <BrandIcon v-else-if="social.icon === 'linkedin'" name="linkedin" />
            <FileDown v-else class="h-4 w-4" aria-hidden="true" />
            {{ social.label }}
          </SecondaryButton>
        </div>

        <div v-reveal class="flex items-center gap-6" style="transition-delay: 0.2s">
          <a
            v-for="social in socialLinks.filter(s => s.id !== 'email')"
            :key="social.id"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            class="text-surface-500 hover:text-surface-200 transition-colors duration-200"
          >
            <BrandIcon v-if="social.icon === 'github'" name="github" />
            <BrandIcon v-else-if="social.icon === 'linkedin'" name="linkedin" />
          </a>
        </div>
      </div>
    </Container>
  </section>
</template>
