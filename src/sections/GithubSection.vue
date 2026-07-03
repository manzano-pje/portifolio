<script setup lang="ts">
import { useGithub } from '@/composables/useGithub'
import { githubService } from '@/services/github.service'
import Container from '@/components/Container.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import GithubStatCard from '@/components/GithubStatCard.vue'

const { stats, loading } = useGithub()

const profileUrl = githubService.getProfileUrl()
const contributionGraphUrl = githubService.getContributionGraphUrl()
</script>

<template>
  <section id="github" class="section-padding bg-surface-900/30">
    <Container as="div">
      <div v-reveal>
        <SectionTitle
          title="GitHub"
          subtitle="Evolução técnica e consistência no desenvolvimento."
          align="center"
        />
      </div>

      <div
        v-reveal
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        <GithubStatCard
          label="GitHub Rank"
          :value="loading ? '—' : stats?.rank || 'B'"
        />

        <GithubStatCard
          label="Current Streak"
          :value="loading ? '—' : `${stats?.currentStreak || 0} dias`"
        />

        <div class="card-base p-5 flex flex-col items-center justify-center">
          <p class="text-xs text-surface-500 mb-3 text-center w-full">
            Contribution Graph
          </p>
          <div v-if="loading" class="w-full h-24 bg-surface-800/50 rounded-lg animate-pulse" />
          <img
            v-else
            :src="contributionGraphUrl"
            :alt="`Gráfico de contribuições do GitHub de ${'manzano-pje'}`"
            loading="lazy"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div v-reveal class="text-center mt-8">
        <a
          :href="profileUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-primary-400 hover:text-primary-300 transition-colors"
        >
          Ver perfil completo no GitHub →
        </a>
      </div>
    </Container>
  </section>
</template>
