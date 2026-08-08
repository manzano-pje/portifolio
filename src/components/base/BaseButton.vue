<!--
==============================================================================
Nome: BaseButton.vue
Tipo: COMPONENT
Responsabilidade: Fornece um componente base reutilizável para ações de interface.
Padrão: BEM
==============================================================================
-->

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    href?: string
    to?: string
  }>(),
  {
    variant: 'primary',
  }
)
</script>

<template>
  <a
    v-if="href"
    class="base-button"
    :class="`base-button--${variant}`"
    :href="href"
    target="_blank"
    rel="noreferrer"
  >
    <slot />
  </a>

  <router-link
    v-else-if="to"
    class="base-button"
    :class="`base-button--${variant}`"
    :to="to"
  >
    <slot />
  </router-link>

  <button v-else class="base-button" :class="`base-button--${variant}`">
    <slot />
  </button>
</template>

