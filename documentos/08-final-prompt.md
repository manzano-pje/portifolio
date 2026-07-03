# 08-final-prompt.md

# Master Prompt — Desenvolvimento da Landing Page

Projeto: Portfólio Profissional — Paulo Manzano

Versão: 1.0

---

# Objetivo

Desenvolver uma Landing Page profissional para apresentação do portfólio de Paulo Manzano.

O projeto deverá demonstrar qualidade de engenharia de software, organização, arquitetura moderna e excelente experiência do usuário.

Esta Landing Page será utilizada tanto em processos seletivos quanto para apresentação comercial.

O resultado deverá transmitir profissionalismo sem exageros visuais e sem criar expectativas incompatíveis com a experiência profissional apresentada.

---

# Referências

Antes de iniciar qualquer implementação, leia integralmente os seguintes documentos.

01-product.md

02-design-system.md

03-architecture.md

04-sections.md

05-content.md

06-github.md

07-quality.md

Todos os documentos possuem o mesmo nível de prioridade.

Caso exista conflito entre eles, priorizar a seguinte ordem:

1. Layout de referência fornecido pelo usuário.
2. 02-design-system.md
3. 04-sections.md
4. 05-content.md
5. Demais documentos.

Não criar funcionalidades não especificadas.

---

# Referência Visual

Uma imagem de referência acompanha este projeto.

Essa imagem define:

- distribuição das seções;
- hierarquia visual;
- proporções;
- organização geral;
- identidade da interface.

Ela deve ser utilizada como base para o layout.

Não copiar a interface literalmente.

Adaptar apenas o necessário para:

- Vue 3;
- Responsividade;
- Acessibilidade;
- Boas práticas de UX.

---

# Tecnologias Obrigatórias

Implementar utilizando exclusivamente:

- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- Composition API
- Script Setup

Não utilizar React.

Não utilizar Next.js.

Não utilizar Bootstrap.

Não utilizar Vuetify.

Não utilizar JavaScript sem tipagem.

---

# Arquitetura

Toda a arquitetura deverá seguir exatamente o documento:

03-architecture.md

Obrigatório:

- Componentização
- Separação entre conteúdo e apresentação
- Dados centralizados
- Serviços isolados
- Composables
- Estrutura escalável
- Código reutilizável

---

# Estrutura da Página

Implementar exatamente nesta ordem:

Header

Hero

Sobre

Stack

Projetos

Experiência

Certificações

GitHub

Contato

Footer

Não criar novas seções.

Não remover nenhuma seção.

---

# Conteúdo

Todo o conteúdo textual deverá ser obtido exclusivamente do documento:

05-content.md

Não reescrever textos.

Não resumir.

Não alterar títulos.

Não criar novos textos.

---

# GitHub

Implementar conforme especificado em:

06-github.md

A integração deverá permanecer desacoplada.

Toda comunicação deverá ocorrer através de:

services/github.service.ts

Nunca consumir APIs diretamente dentro dos componentes.

Caso a API falhe:

- manter a interface funcional;
- utilizar placeholders elegantes;
- nunca exibir erros técnicos.

---

# Design

Seguir rigorosamente o documento:

02-design-system.md

A interface deverá transmitir:

- elegância;
- simplicidade;
- profissionalismo;
- organização.

Evitar efeitos exagerados.

O conteúdo deve ser o protagonista.

---

# Responsividade

Implementar suporte completo para:

Desktop

Notebook

Tablet

Smartphone

Nenhuma informação poderá desaparecer.

Apenas reorganizar os elementos.

---

# Performance

Aplicar:

- Lazy Loading
- Dynamic Imports
- Tree Shaking
- Compressão de imagens
- SVG sempre que possível

Evitar bibliotecas desnecessárias.

---

# SEO

Preparar estrutura para:

- Meta Tags
- Open Graph
- Twitter Cards
- JSON-LD
- Canonical
- Robots
- Sitemap

---

# Acessibilidade

Implementar:

- HTML semântico
- ARIA Labels
- Navegação por teclado
- Alt em imagens
- Contraste adequado
- Focus visível

---

# Código

Todo o código deverá seguir:

- Clean Code
- SOLID quando aplicável
- Componentização
- Alta coesão
- Baixo acoplamento

Evitar duplicação.

Evitar comentários desnecessários.

Utilizar nomes autoexplicativos.

---

# Resultado Esperado

Ao concluir o projeto, o código deverá apresentar características compatíveis com aplicações profissionais desenvolvidas em Vue 3.

O resultado final deverá transmitir organização, qualidade técnica, preocupação com arquitetura e facilidade de manutenção.

A Landing Page deverá representar fielmente o perfil profissional de Paulo Manzano, servindo simultaneamente como portfólio técnico e apresentação comercial.

A implementação deverá priorizar clareza, simplicidade, desempenho e escalabilidade, utilizando exclusivamente as tecnologias definidas neste projeto.