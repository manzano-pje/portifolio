/*
==============================================================================
Nome: vite-env.d.ts
Tipo: CONFIG
Responsabilidade: Define declarações de ambiente e tipos do Vite para o projeto.
==============================================================================
*/

/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>

  export default component
}