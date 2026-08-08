<template>
    <section id="sobre" class="about-section">
        <div class="about-shell">
            <div div class="about-content">
                <h2 class="about-title">Quem sou eu</h2>
                <div class="about-copy">
                    <p v-for="(paragraph, index) in about.paragraphs" :key="`${paragraph}-${index}`">
                        {{ paragraph }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { about } from '@/content/about'
</script>
