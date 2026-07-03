<script setup lang="ts">
import { profile } from '@/constants/profile'
import { navigationItems } from '@/constants/navigation'
import Container from '@/components/Container.vue'
import { ArrowUp } from '@lucide/vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-surface-800/50 bg-surface-950">
    <Container as="div" class="py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div>
          <p class="text-base font-semibold text-surface-100 mb-2">
            {{ profile.name }}
          </p>
          <p class="text-sm text-surface-500">
            {{ profile.role }}
          </p>
        </div>

        <div>
          <p class="text-sm font-medium text-surface-300 mb-3">Links rápidos</p>
          <nav class="flex flex-col gap-2" aria-label="Links rápidos do rodapé">
            <a
              v-for="item in navigationItems"
              :key="item.id"
              :href="item.href"
              class="text-sm text-surface-500 hover:text-surface-200 transition-colors"
            >
              {{ item.label }}
            </a>
          </nav>
        </div>

        <div class="md:text-right">
          <p class="text-sm font-medium text-surface-300 mb-3">Tecnologias</p>
          <p class="text-sm text-surface-500">
            Vue 3, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-surface-800/50">
        <div class="text-center md:text-left">
          <p class="text-sm text-surface-500">
            Desenvolvido por {{ profile.name }}.
          </p>
          <p class="text-xs text-surface-600 mt-1">
            Construído com Vue 3, TypeScript e Tailwind CSS.
          </p>
        </div>

        <div class="flex items-center gap-4">
          <p class="text-xs text-surface-600">
            © {{ currentYear }} — Todos os direitos reservados.
          </p>
          <a
            href="#hero"
            class="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-surface-700 text-surface-400 hover:text-surface-100 hover:border-surface-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
            aria-label="Voltar ao topo"
          >
            <ArrowUp class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </Container>
  </footer>
</template>
