<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { navigationItems } from '@/constants/navigation'
import { profile } from '@/constants/profile'
import { useActiveSection } from '@/composables/useActiveSection'
import PrimaryButton from '@/components/PrimaryButton.vue'
import Container from '@/components/Container.vue'
import { Menu, X } from '@lucide/vue'

const { activeSection } = useActiveSection()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled
      ? 'bg-surface-950/80 backdrop-blur-md border-b border-surface-800/50'
      : 'bg-transparent'"
  >
    <Container as="div" class="flex items-center justify-between h-16 md:h-20">
      <a
        href="#hero"
        class="text-lg font-bold text-surface-50 tracking-tight hover:text-primary-400 transition-colors"
        @click="closeMenu"
      >
        {{ profile.shortName }}
      </a>

      <nav class="hidden md:flex items-center gap-1" aria-label="Navegação principal">
        <a
          v-for="item in navigationItems"
          :key="item.id"
          :href="item.href"
          class="px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200"
          :class="activeSection === item.id
            ? 'text-primary-400'
            : 'text-surface-400 hover:text-surface-100'"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="hidden md:block">
        <PrimaryButton href="#contact" size="sm">
          Contato
        </PrimaryButton>
      </div>

      <button
        class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-surface-300 hover:text-surface-100 hover:bg-surface-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
        :aria-expanded="isMenuOpen"
        aria-label="Abrir menu"
        @click="toggleMenu"
      >
        <Menu v-if="!isMenuOpen" class="h-5 w-5" aria-hidden="true" />
        <X v-else class="h-5 w-5" aria-hidden="true" />
      </button>
    </Container>

    <Transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-surface-950/95 backdrop-blur-md border-b border-surface-800/50"
      >
        <nav class="container-page py-4 flex flex-col gap-1" aria-label="Navegação mobile">
          <a
            v-for="item in navigationItems"
            :key="item.id"
            :href="item.href"
            class="px-4 py-3 text-sm font-medium rounded-md text-surface-300 hover:text-surface-100 hover:bg-surface-800/50 transition-colors"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
          <div class="pt-2">
            <PrimaryButton href="#contact" size="md" class="w-full">
              Contato
            </PrimaryButton>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
