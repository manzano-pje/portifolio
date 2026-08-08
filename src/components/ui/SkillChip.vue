<!--
==============================================================================
Nome: SkillChip.vue
Tipo: COMPONENT
Responsabilidade: Renderiza um chip reutilizável para representar stacks ou conceitos.
Padrão: BEM
==============================================================================
-->

<script setup lang="ts">
defineProps<{
  icon?: string
  name: string
}>()
</script>

<template>
  <article class="skill-chip">
    <img v-if="icon" class="skill-chip__icon" :src="icon" :alt="name" />
    <span class="skill-chip__name">{{ name }}</span>
  </article>
</template>

