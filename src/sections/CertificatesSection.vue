<script setup lang="ts">
import { certificateGroups } from '@/constants/certificates'
import Container from '@/components/Container.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import CertificateCard from '@/components/CertificateCard.vue'
</script>

<template>
  <section id="certificates" class="section-padding">
    <Container as="div">
      <div v-reveal>
        <SectionTitle title="Certificações" align="center" />
      </div>

      <div class="space-y-8 md:space-y-10">
        <div
          v-for="group in certificateGroups"
          :key="group.category"
          v-reveal
        >
          <h3 class="text-sm font-semibold text-surface-300 uppercase tracking-wide mb-4">
            {{ group.category }}
          </h3>

          <div
            v-if="group.certificates.length > 0"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <CertificateCard
              v-for="certificate in group.certificates"
              :key="certificate.id"
              :certificate="certificate"
            />
          </div>

          <div
            v-else
            class="card-base p-6 text-center"
          >
            <p class="text-sm text-surface-500">
              Certificações em andamento nesta categoria.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
