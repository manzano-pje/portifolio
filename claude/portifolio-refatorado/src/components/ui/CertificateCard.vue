<template>
  <div class="certificate-card">
    <div class="certificate-icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    </div>
    <div class="certificate-info">
      <p class="certificate-name">{{ certificate.name }}</p>
      <p class="certificate-institution">{{ certificate.institution }}</p>
    </div>
    <div class="certificate-meta">
      <span v-if="certificate.year" class="certificate-year">{{ certificate.year }}</span>
      <span v-if="certificate.workload" class="certificate-workload">{{ certificate.workload }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Certificate } from '@/types'
defineProps<{ certificate: Certificate }>()
</script>

<style scoped>
.certificate-card {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-base);
}
.certificate-card:hover { border-color: var(--color-border-hover); }

.certificate-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--color-primary-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-light);
  flex-shrink: 0;
}

.certificate-info { flex: 1; min-width: 0; }

.certificate-name {
  color: var(--color-text);
  font-size: var(--text-sm);
  font-weight: 600;
  line-height: 1.4;
}

.certificate-institution {
  color: var(--color-text-muted);
  font-size: var(--text-xs);
  margin-top: 2px;
}

.certificate-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex-shrink: 0;
}

.certificate-year {
  color: var(--color-text-faint);
  font-size: var(--text-xs);
}

.certificate-workload {
  color: var(--color-primary-light);
  font-size: var(--text-xs);
  font-weight: 500;
}
</style>
