<!--
==============================================================================
Nome: HeroSection.vue
Tipo: COMPONENT
Responsabilidade: Renderiza uma seção visual da aplicação.
Padrão: BEM
==============================================================================
-->

<script setup lang="ts">
import { profile } from '@/content/profile'
import BaseBadge from '@/components/base/BaseBadge.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import Container from '@/components/layout/Container.vue'
import Section from '@/components/layout/Section.vue'
</script>

<template>
  <Section class="hero-section">
    <Container class="hero-container">
      <div class="hero-content">
        <BaseBadge class="hero-badge">
          {{ profile.role }}
        </BaseBadge>

        <h1 class="hero-title">
          Olá, eu sou
          <span class="hero-highlight">
            {{ profile.name }}
          </span>
        </h1>

        <p class="hero-summary">
          {{ profile.summary }}
        </p>

        <p class="hero-description">
          {{ profile.description }}
        </p>

        <div class="hero-actions">
          <BaseButton href="#projetos">
            Ver projetos
          </BaseButton>

          <BaseButton variant="secondary" :href="profile.resumeUrl">
            Ver currículo
          </BaseButton>
        </div>
      </div>

      <div class="hero-visual">
        <img
          :src="profile.photo"
          :alt="profile.name"
          class="profile-image"
        />
      </div>
    </Container>
  </Section>
</template>