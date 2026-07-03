<script setup lang="ts">
import { aboutIndicators } from '@/constants/indicators'
import Container from '@/components/Container.vue'
import SectionTitle from '@/components/SectionTitle.vue'

const aboutTexts = [
  'Minha atuação está concentrada no desenvolvimento Back-end utilizando Java e Spring Boot, com foco na construção de APIs REST e aplicações corporativas.',
  'Antes da transição para a área de desenvolvimento de software, atuei por mais de 16 anos liderando o departamento de Editoração Eletrônica e Marketing da ACRB, experiência que fortaleceu competências como organização, planejamento, liderança, comunicação e visão de negócio.',
  'Atualmente direciono meus estudos e projetos para engenharia de software, arquitetura de aplicações, desenvolvimento de APIs, segurança, bancos de dados e boas práticas de programação, buscando construir soluções que sejam simples de manter, escaláveis e preparadas para crescimento.',
  'Acredito que tecnologia deve resolver problemas reais através de soluções bem estruturadas, código limpo e aprendizado contínuo.',
]
</script>

<template>
  <section id="about" class="section-padding">
    <Container as="div">
      <div v-reveal>
        <SectionTitle title="Sobre" align="left" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <div v-reveal class="lg:col-span-2 space-y-4">
          <p
            v-for="(paragraph, index) in aboutTexts"
            :key="index"
            class="text-sm md:text-base text-surface-400 leading-relaxed"
          >
            {{ paragraph }}
          </p>
        </div>

        <div v-reveal class="grid grid-cols-2 gap-4" style="transition-delay: 0.1s">
          <div
            v-for="indicator in aboutIndicators"
            :key="indicator.label"
            class="card-base p-4 md:p-5 text-center"
          >
            <div class="text-xl md:text-2xl font-bold text-primary-400 mb-1">
              {{ indicator.value }}
            </div>
            <div class="text-xs text-surface-400 leading-tight">
              {{ indicator.label }}
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
