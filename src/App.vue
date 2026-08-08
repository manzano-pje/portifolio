<!--
==============================================================================
Nome: App.vue
Tipo: VIEW
Responsabilidade: Compõe a estrutura principal da landing page e integra as seções do portfólio.
Padrão: BEM
==============================================================================
-->

<template>
  <div id="app">

    <Header />

    <main>
      <HeroSection />
      <div class="section-separator">
        <AboutSection />
        <SkillsSection />
      </div>

      <ProjectsSection />
    </main>

    <Footer />

  </div>
</template>
<style scoped>
  .section-separator {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    width: 100wh;
  }
</style>
<script setup>
  import Header from './components/layout/Header.vue'
  import Footer from './components/layout/Footer.vue'
  import HeroSection from './sections/hero/HeroSection.vue'
  import AboutSection from './sections/about/AboutSection.vue'
  import SkillsSection from './sections/skills/SkillsSection.vue'
  import ProjectsSection from './sections/projects/ProjectsSection.vue'
</script>
 
    