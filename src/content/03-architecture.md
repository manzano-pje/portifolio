# 03-architecture.md

# Software Architecture Specification

Projeto: Portfólio Profissional — Paulo Manzano

Versão: 1.0

---

# 1. Objetivo

Este documento define toda a arquitetura técnica da Landing Page.

Embora o projeto seja uma Landing Page, ele deverá ser desenvolvido seguindo padrões utilizados em aplicações corporativas modernas, demonstrando organização, escalabilidade e qualidade de engenharia.

Toda decisão arquitetural deverá priorizar:

- Componentização
- Baixo acoplamento
- Alta coesão
- Reutilização
- Performance
- Escalabilidade
- Manutenibilidade
- Legibilidade
- Separação de responsabilidades

O código deverá transmitir maturidade técnica.

---

# 2. Stack Tecnológica

A aplicação deverá ser desenvolvida exclusivamente utilizando:

- Vue 3
- Vite
- TypeScript
- Tailwind CSS

Utilizar obrigatoriamente:

- Composition API
- `<script setup>`

Não utilizar:

- Options API
- JavaScript puro
- CSS Frameworks adicionais

---

# 3. Arquitetura Geral

A aplicação deverá seguir uma arquitetura baseada em separação de responsabilidades.

O conteúdo nunca deverá estar misturado com a camada de apresentação.

Os componentes deverão apenas renderizar informações.

Toda informação deverá ser proveniente de arquivos específicos ou serviços.

Essa abordagem facilitará futuras integrações com APIs, CMS ou bancos de dados sem necessidade de reescrever a interface.

---

# 4. Estrutura do Projeto

```text
src/

assets/
components/
composables/
constants/
layouts/
router/
sections/
services/
stores/
styles/
types/
utils/
views/

App.vue
main.ts
```

Cada pasta deverá possuir uma responsabilidade clara.

---

# 5. Organização dos Dados

Todo conteúdo da Landing Page deverá permanecer desacoplado da interface.

Criar arquivos específicos em:

```text
constants/

projects.ts
experience.ts
certificates.ts
technologies.ts
socialLinks.ts
navigation.ts
github.ts
profile.ts
```

Os componentes nunca deverão possuir listas, textos ou objetos fixos em seu interior.

Toda informação deverá ser importada desses arquivos.

Essa organização permitirá alterar completamente o conteúdo sem modificar nenhum componente.

---

# 6. Componentização

Cada seção deverá possuir um componente próprio.

Exemplo:

```text
HeroSection.vue
AboutSection.vue
StackSection.vue
ProjectsSection.vue
ExperienceSection.vue
CertificatesSection.vue
GithubSection.vue
ContactSection.vue
FooterSection.vue
```

Cada componente deverá possuir responsabilidade única.

Evitar componentes com centenas de linhas.

Sempre dividir quando houver responsabilidades diferentes.

---

# 7. Componentes Compartilhados

Criar componentes reutilizáveis para todos os elementos repetitivos.

Exemplo:

```text
PrimaryButton
SecondaryButton
SectionTitle
SectionSubtitle
Container
Card
Badge
Tag
Chip
Divider
ProjectCard
ExperienceCard
CertificateCard
GithubStatCard
SocialButton
TechnologyBadge
TimelineItem
```

Nenhum componente deverá ser duplicado.

---

# 8. Layout

Criar um Layout principal responsável apenas pela estrutura da página.

Exemplo:

```text
DefaultLayout.vue
```

Esse layout deverá conter:

- Header
- Conteúdo
- Footer

As seções permanecerão independentes.

---

# 9. Tipagem

Utilizar TypeScript em 100% da aplicação.

Não utilizar:

```ts
any
```

Criar interfaces específicas para todos os modelos.

Exemplo:

```text
Project

Experience

Certificate

Technology

GithubStats

NavigationItem

SocialLink

Profile

Contact
```

Caso algum tipo seja reutilizado em várias áreas, centralizá-lo em:

```text
types/
```

---

# 10. Estado da Aplicação

Nesta versão não será necessário gerenciamento global.

Entretanto, preparar a arquitetura para utilização futura do Pinia.

Caso algum estado global seja necessário posteriormente, ele deverá ficar exclusivamente dentro da pasta:

```text
stores/
```

---

# 11. Serviços

Toda comunicação externa deverá ser isolada.

Criar:

```text
services/

github.service.ts
```

Futuramente poderão existir:

linkedin.service.ts

contact.service.ts

analytics.service.ts

Nunca realizar chamadas HTTP diretamente dentro dos componentes.

---

# 12. Composables

Toda lógica reutilizável deverá permanecer desacoplada da interface.

Criar composables sempre que existir comportamento compartilhado.

Exemplos:

```text
useGithub.ts

useScrollAnimation.ts

useIntersectionObserver.ts

useResponsive.ts

useClipboard.ts

useExternalLinks.ts
```

Os composables não deverão conter regras visuais.

---

# 13. Navegação

A Landing Page utilizará navegação baseada em âncoras.

Características:

- Header fixo
- Scroll suave
- Destaque da seção ativa
- Navegação por teclado
- Compatibilidade com links diretos

---

# 14. Organização Visual

Cada seção deverá possuir um Container próprio.

Nunca utilizar larguras diferentes sem necessidade.

Todo alinhamento deverá seguir um único Grid.

---

# 15. Estilização

Tailwind deverá ser utilizado como principal solução.

Evitar CSS personalizado.

Criar CSS apenas quando Tailwind realmente não atender.

Jamais utilizar estilos inline.

---

# 16. Assets

Organizar todos os recursos.

```text
assets/

images/

icons/

logos/

illustrations/

backgrounds/
```

Evitar imagens desnecessariamente grandes.

Priorizar SVG.

---

# 17. Performance

O projeto deverá buscar excelente pontuação no Lighthouse.

Aplicar:

- Lazy Loading
- Dynamic Imports
- Tree Shaking
- Compressão de imagens
- SVG quando possível
- Componentes leves
- Dependências mínimas

Evitar bibliotecas apenas para pequenas funcionalidades.

---

# 18. SEO

Preparar estrutura para:

- Meta Tags
- Open Graph
- Twitter Cards
- JSON-LD
- Schema.org
- Canonical
- Sitemap
- Robots

Mesmo que parte dessas configurações seja implementada posteriormente.

---

# 19. Acessibilidade

Toda interface deverá utilizar:

- HTML semântico
- Landmark Regions
- ARIA Labels
- Focus visível
- Navegação por teclado
- Alt em imagens
- Contraste adequado
- Hierarquia correta de títulos

A acessibilidade deverá fazer parte da arquitetura e não ser adicionada posteriormente.

---

# 20. Animações

Utilizar animações discretas.

Preferencialmente:

- Motion One
- VueUse Motion

Características:

- Fade
- Opacity
- Translate
- Scale muito pequeno

Jamais utilizar animações chamativas.

---

# 21. Organização do Código

Todos os arquivos deverão seguir os princípios do Clean Code.

Priorizar:

- Métodos pequenos
- Responsabilidade única
- Nomes autoexplicativos
- Baixo acoplamento
- Alta coesão
- Reutilização
- Simplicidade

Evitar comentários desnecessários.

O código deverá ser autoexplicativo.

---

# 22. Convenções

Componentes:

PascalCase

Exemplo:

```text
HeroSection.vue

ProjectCard.vue
```

Arquivos TypeScript:

camelCase

Interfaces:

PascalCase

Constantes:

UPPER_CASE apenas quando realmente necessário.

---

# 23. Estratégia de Evolução

A arquitetura deverá permitir futuras implementações sem necessidade de grandes refatorações.

Exemplos:

- Integração com GitHub API
- Integração com LinkedIn
- Formulário funcional
- Blog
- CMS
- Internacionalização (i18n)
- Tema claro
- Dashboard administrativo

A estrutura inicial deverá suportar essas evoluções naturalmente.

---

# 24. Restrições

Não utilizar:

- React
- Next.js
- Bootstrap
- Vuetify
- jQuery
- CSS inline
- JavaScript sem tipagem
- Código duplicado
- Componentes monolíticos
- Chamadas HTTP nos componentes
- Conteúdo fixo dentro da interface

---

# 25. Critérios de Aceitação

A arquitetura será considerada concluída quando:

- Toda a aplicação estiver componentizada.
- Conteúdo e apresentação estiverem completamente desacoplados.
- O projeto seguir padrões modernos do ecossistema Vue.
- A estrutura permitir crescimento sem refatorações significativas.
- O código demonstrar organização compatível com aplicações corporativas.
- O projeto servir como referência de boas práticas para recrutadores e desenvolvedores que analisarem o repositório.