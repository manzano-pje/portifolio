<template>
  <div id="app">
    <Header />

    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <SkillsSection />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import HeroSection from '@/sections/hero/HeroSection.vue'
import AboutSection from '@/sections/about/AboutSection.vue'
import ProjectsSection from '@/sections/projects/ProjectsSection.vue'
import ExperienceSection from '@/sections/experience/ExperienceSection.vue'
import CertificatesSection from '@/sections/certificates/CertificatesSection.vue'
import SkillsSection from '@/sections/skills/SkillsSection.vue'
import ContactSection from '@/sections/contact/ContactSection.vue'

// Intersection Observer para animações .reveal
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>
