<template>
  <Section id="certificacoes">
    <Container>
      <div class="section-header reveal">
        <BaseBadge>Certificações</BaseBadge>
        <BaseTitle tag="h2" size="section">Formação e certificados</BaseTitle>
      </div>

      <div
        v-for="group in filledGroups"
        :key="group.category"
        class="cert-group reveal"
      >
        <h3 class="cert-category">{{ group.category }}</h3>
        <div class="cert-grid">
          <CertificateCard
            v-for="cert in group.certificates"
            :key="cert.id"
            :certificate="cert"
          />
        </div>
      </div>

      <div v-if="filledGroups.length === 0" class="cert-empty reveal">
        <p>Certificados serão adicionados em breve.</p>
      </div>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Section from '@/components/layout/Section.vue'
import Container from '@/components/layout/Container.vue'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import CertificateCard from '@/components/ui/CertificateCard.vue'
import { certificateGroups } from '@/content/certificates'

const filledGroups = computed(() =>
  certificateGroups.filter(g => g.certificates.length > 0)
)
</script>

<style scoped>
.section-header {
  margin-bottom: var(--space-7);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.cert-group { margin-bottom: var(--space-7); }

.cert-category {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border);
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.cert-empty {
  color: var(--color-text-faint);
  font-size: var(--text-sm);
  text-align: center;
  padding: var(--space-8) 0;
}

@media (max-width: 640px) {
  .cert-grid { grid-template-columns: 1fr; }
}
</style>
