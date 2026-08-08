/*
==============================================================================
Nome: main.ts
Tipo: CONFIG
Responsabilidade: Inicializa a aplicação Vue e conecta o ponto de entrada principal.
==============================================================================
*/

import { createApp } from 'vue';
import App from './App.vue';

// Importa o arquivo que centraliza todas as suas importações de CSS
import "./styles/globals/Globals.css"; 

createApp(App).mount('#app');