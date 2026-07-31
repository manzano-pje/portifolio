<script setup lang="ts">
import { profile } from '@/content/profile'
</script>


<template>
<section class="hero-section">
  <div class="hero-container">

    <div class="hero-content">
      <span class="hero-badge">
        {{ profile.role }}
      </span>

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
        <a class="hero-primary-button" href="#projetos">
          Ver projetos
        </a>

        <a
          class="hero-secondary-button"
          :href="profile.resumeUrl"
        >
          Ver currículo
        </a>
      </div>
    </div>

    <div class="hero-visual">
      <img
        :src="profile.photo"
        :alt="profile.name"
        class="profile-image"
      />
    </div>

  </div>
</section>

</template>