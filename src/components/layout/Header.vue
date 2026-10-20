<!--
==============================================================================
Nome: Header.vue
Tipo: LAYOUT
Responsabilidade: Define a estrutura de layout reutilizável da aplicação.
Padrão: BEM
==============================================================================
-->

<template>
  <header class="portfolio-header">
    <div class="header-container">
      <a class="portfolio-brand">Paulo Manzano</a>
      <nav class="portfolio-navigation">
        <a class="navigation-link">Início</a>
        <a class="navigation-link">Sobre</a>
        <a class="navigation-link">Experiência</a>
        <a class="navigation-link">Projetos</a>
        <a class="navigation-link">Certificados</a>
      </nav>
      <div class="header-actions">
        <a class="header-button"
          href="https://wa.me/5511983050657?text=Olá%2C%20Paulo!%20Acessei%20seu%20portfólio%20e%20gostaria%20de%20conversar."
          target="_blank">
          Vamos conversar
        </a>
      </div>
    </div>
  </header>
</template>