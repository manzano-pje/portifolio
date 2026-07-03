<script setup lang="ts">
import HeaderSection from '@/sections/HeaderSection.vue'
import HeroSection from '@/sections/HeroSection.vue'
import AboutSection from '@/sections/AboutSection.vue'
import StackSection from '@/sections/StackSection.vue'
import ProjectsSection from '@/sections/ProjectsSection.vue'
import ExperienceSection from '@/sections/ExperienceSection.vue'
import CertificatesSection from '@/sections/CertificatesSection.vue'
import GithubSection from '@/sections/GithubSection.vue'
import ContactSection from '@/sections/ContactSection.vue'
import FooterSection from '@/sections/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-surface-950">
    <HeaderSection />
    <main>
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <GithubSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>
