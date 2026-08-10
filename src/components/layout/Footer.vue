<!--
==============================================================================
Nome: Footer.vue
Tipo: LAYOUT
Responsabilidade: Define a estrutura de layout reutilizável da aplicação.
Padrão: BEM
==============================================================================
-->

<template>
  <footer class="portfolio-footer">
    <Container class="footer-shell">
      <div class="footer-content">

        <!-- COLUNA 1 -->
        <div class="footer-copy">
          <span class="footer-eyebrow">Contato</span>

          <h3 class="footer-title">
            Vamos trabalhar juntos?
          </h3>

          <p class="footer-description">
            Estou sempre aberto a novas oportunidades e projetos desafiadores.
            Bamos conversar sobre como posso agregar valor ao seu time?
          </p>
        </div>

        <!-- COLUNA 2 -->
        <div class="footer-contacts">

          <div class="footer-contact-column">

            <a class="footer-contact" href="mailto:manzano.pje@gmail.com">
              <span class="footer-contact-icon" aria-hidden="true">
                ✉
              </span>

              <span class="footer-contact-content">
                <span class="footer-contact-label">E-mail</span>
                <span class="footer-contact-value">
                  manzano.pje@gmail.com
                </span>
              </span>
            </a>

            <div class="footer-contact">
              <span class="footer-contact-icon" aria-hidden="true">
                ♧
              </span>

              <span class="footer-contact-content">
                <span class="footer-contact-label">Localização</span>
                <span class="footer-contact-value">
                  Mogi das Cruzes - SP
                </span>
              </span>
            </div>

          </div>

          <div class="footer-contact-column">

            <a class="footer-contact" href="https://www.linkedin.com/in/paulo-manzano" target="_blank" rel="noreferrer">
              <span class="footer-contact-icon footer-contact-icon--linkedin">
                in
              </span>

              <span class="footer-contact-content">
                <span class="footer-contact-label">LinkedIn</span>
                <span class="footer-contact-value">
                  /in/paulo-manzano
                </span>
              </span>
            </a>

            <a class="footer-contact" href="https://github.com/manzano-pje" target="_blank" rel="noreferrer">
              <span class="footer-contact-icon footer-contact-icon--github">
                ●
              </span>

              <span class="footer-contact-content">
                <span class="footer-contact-label">GitHub</span>
                <span class="footer-contact-value">
                  github.com/manzano-pje
                </span>
              </span>
            </a>

          </div>

        </div>

        <!-- COLUNA 3 -->
        <div class="footer-visual" aria-hidden="true">
          <img src="@/assets/images/backgrounds/globo.png" alt="" />
        </div>

      </div>

    </Container>
    <div class="footer-bottom">
      <p>© 2026 Paulo Manzano — Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
</script>
