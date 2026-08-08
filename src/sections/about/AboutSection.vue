<!--
==============================================================================
Nome: AboutSection.vue
Tipo: COMPONENT
Responsabilidade: Renderiza uma seção visual da aplicação.
Padrão: BEM
==============================================================================
-->

<template>
    <Section id="sobre" class="about-section">
        <Container class="about-shell">
            <div class="about-content">
                <BaseTitle class="about-title">Quem sou eu</BaseTitle>
                <div class="about-copy">
                    <p v-for="(paragraph, index) in about.paragraphs" :key="`${paragraph}-${index}`">
                        {{ paragraph }}
                    </p>
                </div>
            </div>
        </Container>
    </Section>
</template>

<script setup lang="ts">
import { about } from '@/content/about'
import BaseTitle from '@/components/base/BaseTitle.vue'
import Container from '@/components/layout/Container.vue'
import Section from '@/components/layout/Section.vue'
</script>
