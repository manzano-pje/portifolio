<script setup lang="ts">
import { contact } from '@/constants/contact'
import { socialLinks } from '@/constants/socialLinks'
import Container from '@/components/Container.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'
import SocialButton from '@/components/SocialButton.vue'
import { Mail, FileDown } from '@lucide/vue'
import BrandIcon from '@/components/BrandIcon.vue'

const descriptionParagraphs = contact.description
  .split('\n\n')
  .map((p) => p.replace(/\*\*/g, ''))
</script>

<template>
  <section id="contact" class="section-padding">
    <Container as="div">
      <div v-reveal class="max-w-2xl mx-auto text-center">
        <SectionTitle :title="contact.title" align="center" />

        <div class="space-y-4 mb-8">
          <p
            v-for="(paragraph, index) in descriptionParagraphs"
            :key="index"
            class="text-sm md:text-base text-surface-400 leading-relaxed"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <PrimaryButton :href="`mailto:${contact.email}`" size="lg">
            <Mail class="h-4 w-4" aria-hidden="true" />
            Enviar E-mail
          </PrimaryButton>
          <SecondaryButton :href="contact.linkedinUrl" target="_blank" size="lg">
            <BrandIcon name="linkedin" />
            LinkedIn
          </SecondaryButton>
          <SecondaryButton :href="contact.githubUrl" target="_blank" size="lg">
            <BrandIcon name="github" />
            GitHub
          </SecondaryButton>
          <SecondaryButton :href="contact.resumeUrl" size="lg">
            <FileDown class="h-4 w-4" aria-hidden="true" />
            Baixar Currículo
          </SecondaryButton>
        </div>

        <div class="flex justify-center gap-3">
          <SocialButton
            v-for="social in socialLinks"
            :key="social.id"
            :social="social"
          />
        </div>
      </div>
    </Container>
  </section>
</template>
