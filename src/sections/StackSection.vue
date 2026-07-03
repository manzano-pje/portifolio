<script setup lang="ts">
import { technologies } from '@/constants/technologies'
import Container from '@/components/Container.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import Badge from '@/components/Badge.vue'
</script>

<template>
  <section id="stack" class="section-padding bg-surface-900/30">
    <Container as="div">
      <div v-reveal>
        <SectionTitle title="Tecnologias" align="center" />
      </div>

      <div v-reveal class="card-base p-6 md:p-8 lg:p-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="group in technologies"
            :key="group.category"
            class="space-y-3"
          >
            <h3 class="text-sm font-semibold text-surface-200 uppercase tracking-wide">
              {{ group.category }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="tech in group.technologies"
                :key="tech"
                :label="tech"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
