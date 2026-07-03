# 09-assets.md

# Assets Specification

Projeto: Portfólio Profissional — Paulo Manzano

Versão: 1.0

---

# 1. Objetivo

Este documento define todos os recursos visuais utilizados na Landing Page.

Os assets deverão seguir uma identidade visual única, mantendo consistência em toda a aplicação.

Nenhum recurso deverá ser criado aleatoriamente pela IA.

Quando um recurso definitivo não estiver disponível, utilizar placeholders bem definidos e facilmente substituíveis.

---

# 2. Estrutura de Diretórios

Organizar todos os recursos visuais da seguinte forma:

```text
src/

assets/

├── images/
│
├── profile/
│
├── projects/
│
├── icons/
│
├── logos/
│
├── backgrounds/
│
├── illustrations/
│
├── certificates/
│
└── social/
```

Todos os nomes de arquivos deverão utilizar letras minúsculas, sem espaços e separados por hífen.

Exemplo:

```text
proofchain-cover.webp
restaurant-system.webp
stock-control.webp
profile-photo.webp
linkedin.svg
github.svg
```

---

# 3. Foto Profissional

A Landing Page utilizará uma única fotografia profissional.

Características desejadas:

- Alta resolução
- Fundo neutro
- Iluminação uniforme
- Roupa social ou esporte fino
- Enquadramento do busto
- Expressão natural

Caso a fotografia definitiva ainda não exista:

Utilizar um placeholder discreto.

A estrutura da interface deverá permanecer preparada para substituição futura sem alterações de layout.

---

# 4. Logo

O projeto poderá utilizar um logotipo simples composto apenas pelo nome:

**Paulo Manzano**

ou

**PM**

O logo deverá ser vetorial (SVG).

Não utilizar efeitos 3D.

Não utilizar gradientes.

Não utilizar sombras exageradas.

---

# 5. Ícones

Utilizar apenas uma biblioteca.

Biblioteca recomendada:

Lucide Icons

Todos os ícones deverão seguir exatamente o mesmo estilo.

Não misturar bibliotecas.

---

# 6. Projetos

Cada projeto deverá possuir uma imagem de apresentação.

Projetos:

- ProofChain
- Sistema de Gerenciamento de Restaurante
- Sistema de Controle de Estoque
- Zenora

Enquanto as imagens oficiais não existirem:

Utilizar placeholders padronizados.

Todos os placeholders deverão possuir:

- mesmo tamanho
- mesma proporção
- mesmo estilo visual

---

# 7. Certificações

Caso sejam utilizadas imagens dos certificados:

Organizar em:

```text
assets/certificates/
```

As miniaturas deverão possuir:

- proporção consistente
- boa resolução
- carregamento otimizado

Caso não existam miniaturas:

Exibir apenas um ícone representando a certificação.

---

# 8. Backgrounds

Utilizar apenas fundos discretos.

Permitido:

- Gradientes suaves
- Texturas minimalistas
- Shapes geométricos discretos

Evitar:

- Fotografias
- Efeitos neon
- Partículas
- Fundos poluídos

O fundo nunca deverá competir com o conteúdo.

---

# 9. Ilustrações

Caso sejam utilizadas ilustrações:

Preferir SVG.

Características:

- Flat Design
- Minimalistas
- Poucos detalhes
- Mesma identidade visual

Evitar misturar estilos diferentes.

---

# 10. Ícones Sociais

Os ícones deverão possuir links para:

- GitHub
- LinkedIn
- E-mail

Utilizar sempre SVG.

Todos deverão possuir:

- Hover
- Focus
- ARIA Label
- Tooltip opcional

---

# 11. Favicons

Preparar estrutura para:

```text
favicon.ico

favicon-16.png

favicon-32.png

apple-touch-icon.png

android-chrome-192.png

android-chrome-512.png
```

Mesmo que inicialmente sejam placeholders.

---

# 12. Open Graph

Preparar uma imagem específica para compartilhamento.

Arquivo sugerido:

```text
og-image.png
```

Conteúdo sugerido:

- Nome
- Cargo
- Fundo seguindo o Design System
- Logo

Dimensão recomendada:

1200 x 630 px

---

# 13. Formatos

Priorizar:

SVG

WebP

PNG (quando necessário)

Evitar JPEG para elementos da interface.

---

# 14. Otimização

Todos os recursos deverão ser otimizados.

Objetivos:

- Baixo peso
- Alta qualidade
- Carregamento rápido

Nenhuma imagem deverá ser carregada em resolução superior à necessária.

---

# 15. Acessibilidade

Toda imagem deverá possuir:

- atributo alt descritivo
- carregamento lazy (quando aplicável)
- dimensões definidas
- contraste adequado

Ícones meramente decorativos deverão utilizar:

```html
aria-hidden="true"
```

---

# 16. Evolução Futura

A estrutura deverá permitir facilmente a inclusão de:

- novas imagens de projetos
- logotipos de empresas
- badges de certificações
- screenshots de aplicações
- imagens para artigos futuros

Sem necessidade de reorganizar a pasta de assets.

---

# 17. Critérios de Aceitação

A organização dos assets será considerada concluída quando:

- todos os recursos estiverem organizados em diretórios específicos;
- não existirem arquivos duplicados;
- todos os nomes seguirem um padrão consistente;
- todos os recursos estiverem preparados para otimização;
- placeholders puderem ser substituídos sem alterar a estrutura da aplicação;
- a identidade visual permanecer consistente em toda a Landing Page.