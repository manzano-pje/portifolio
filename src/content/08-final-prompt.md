# 08-final-prompt.md

# MASTER PROMPT — DESENVOLVIMENTO DA LANDING PAGE

**Projeto:** Portfólio Profissional — Paulo Manzano

**Versão:** 2.0

---

# OBJETIVO

Desenvolver uma Landing Page profissional para apresentação do portfólio de Paulo Manzano.

O projeto deverá demonstrar organização, qualidade de engenharia de software, arquitetura moderna, excelente experiência do usuário, desempenho, acessibilidade e facilidade de manutenção.

A Landing Page será utilizada tanto em processos seletivos quanto para apresentação comercial.

Todo o desenvolvimento deverá seguir rigorosamente a documentação deste projeto.

---

# FLUXO DE EXECUÇÃO

Este documento é o ponto de entrada obrigatório do projeto.

Antes de qualquer implementação, o agente deverá identificar se trata-se da primeira execução ou da continuação de uma implementação existente.

Nenhum código poderá ser escrito antes da conclusão das etapas obrigatórias descritas neste documento.

---

# FASE 1 — VERIFICAÇÃO DE IMPLEMENTAÇÃO EXISTENTE

Verificar se existe o arquivo:

```text
src/content/project/IMPLEMENTATION_STATUS.md
```

## Caso o arquivo exista

Considerar que existe uma implementação em andamento.

Executar obrigatoriamente:

1. Ler integralmente:

```text
src/content/project/IMPLEMENTATION_STATUS.md
```

2. Ler integralmente:

```text
src/content/project/NEXT_TASK.md
```

3. Ler integralmente:

```text
src/content/project/DECISIONS.md
```

4. Continuar exatamente do ponto registrado.

Não reiniciar funcionalidades já implementadas.

Não recriar componentes existentes.

Não alterar arquitetura previamente definida sem justificativa técnica.

Após concluir a leitura dos três documentos, iniciar diretamente a implementação da próxima tarefa.

Não reler toda a documentação técnica, salvo se solicitado pelo usuário.

---

## Caso o arquivo NÃO exista

Considerar que esta é a primeira execução do projeto.

Na primeira execução do projeto é esperado que os arquivos de controle ainda não existam. Isso não caracteriza erro. Nesse caso, prossiga automaticamente para a validação da documentação e crie os arquivos de controle ao concluir o primeiro Checkpoint da implementação.

Prosseguir para a Fase 2.

# FASE 2 — VALIDAÇÃO DA DOCUMENTAÇÃO

Abrir o arquivo:

```text
src/content/00-index.md
```

Esse arquivo contém a relação oficial da documentação.

Verificar se todos os documentos listados existem exatamente nos caminhos informados.

Caso qualquer documento esteja ausente, ilegível ou inacessível:

* interromper imediatamente o processo;
* informar exatamente quais arquivos não foram encontrados;
* aguardar a correção da documentação;
* não iniciar nenhuma implementação.

Somente prosseguir quando todos os documentos estiverem disponíveis.

---

# FASE 3 — LEITURA DA DOCUMENTAÇÃO

Após validar a existência dos arquivos:

Ler integralmente todos os documentos na ordem definida em:

```text
src/content/00-index.md
```

Não alterar a ordem.

Não ignorar documentos.

Não iniciar implementação durante esta etapa.

Ao finalizar a leitura:

Confirmar:

* documentos encontrados;
* documentos lidos;
* confirmação de entendimento da documentação.

Somente após essa confirmação iniciar a implementação.

---

# FASE 4 — FONTE ÚNICA DE VERDADE

Toda a documentação deverá ser considerada como única fonte oficial do projeto.

Nenhuma decisão poderá contrariar qualquer documento.

Em caso de conflito utilizar obrigatoriamente a seguinte prioridade:

1. Layout de referência
2. 02-design-system.md
3. 04-sections.md
4. 05-content.md
5. Demais documentos

Não criar funcionalidades não especificadas.

Não criar componentes desnecessários.

Não alterar textos definidos em:

```text
src/content/05-content.md
```

---

# REFERÊNCIA VISUAL

Utilizar como referência:

```text
public/layout-portifolio.png
```

A imagem define:

* distribuição das seções;
* organização visual;
* hierarquia;
* proporções;
* identidade da interface.

Ela não deverá ser copiada literalmente.

Adaptar apenas o necessário para:

* Vue 3
* Responsividade
* Acessibilidade
* Performance
* UX

---

# TECNOLOGIAS OBRIGATÓRIAS

Implementar exclusivamente utilizando:

* Vue 3
* Vite
* TypeScript
* Tailwind CSS
* Composition API
* Script Setup

Não utilizar:

* React
* Next.js
* Bootstrap
* Vuetify
* JavaScript sem tipagem

---

# ARQUITETURA

Toda a arquitetura deverá seguir rigorosamente:

```text
src/content/03-architecture.md
```

Obrigatório:

* Componentização
* Separação entre conteúdo e apresentação
* Dados centralizados
* Serviços isolados
* Composables
* Estrutura escalável
* Reutilização
* Alta coesão
* Baixo acoplamento

---

# GITHUB

Toda integração deverá seguir:

```text
src/content/06-github.md
```

Nunca consumir APIs diretamente nos componentes.

Toda comunicação deverá ocorrer através de:

```text
services/github.service.ts
```

Caso a API falhe:

* manter a interface funcional;
* utilizar placeholders elegantes;
* nunca exibir mensagens técnicas ao usuário.

---

# RESPONSIVIDADE

Garantir funcionamento completo em:

* Desktop
* Notebook
* Tablet
* Smartphone

Nenhuma informação poderá desaparecer.

Apenas reorganizar os elementos.

---

# PERFORMANCE

Aplicar:

* Lazy Loading
* Dynamic Imports
* Tree Shaking
* Compressão de imagens
* SVG sempre que possível

Evitar bibliotecas desnecessárias.

---

# SEO

Preparar estrutura para:

* Meta Tags
* Open Graph
* Twitter Cards
* JSON-LD
* Canonical
* Robots
* Sitemap

---

# ACESSIBILIDADE

Implementar:

* HTML semântico
* ARIA Labels
* Navegação por teclado
* Alt em imagens
* Contraste adequado
* Focus visível

---

# PADRÃO DE CÓDIGO

Todo o código deverá seguir:

* Clean Code
* SOLID quando aplicável
* Componentização
* Reutilização
* Alta coesão
* Baixo acoplamento

Evitar duplicação.

Evitar comentários desnecessários.

Utilizar nomes autoexplicativos.

---

# CHECKPOINTS OBRIGATÓRIOS

A implementação deverá ser dividida em unidades lógicas completas.

São considerados Checkpoints:

* conclusão de uma seção da Landing Page;
* conclusão de um componente principal;
* conclusão de uma funcionalidade completa;
* conclusão de uma refatoração arquitetural.

Nunca iniciar um novo Checkpoint sem registrar o estado do anterior.

---

# CONTROLE DE PROGRESSO

Ao concluir cada Checkpoint atualizar obrigatoriamente:

```text
src/content/project/IMPLEMENTATION_STATUS.md
```

Esse documento deverá conter:

* etapa atual;
* componentes concluídos;
* funcionalidades concluídas;
* pendências;
* arquivos criados;
* arquivos modificados;
* próximo ponto de retomada.

---

Atualizar obrigatoriamente:

```text
src/content/project/NEXT_TASK.md
```

Esse documento deverá conter exclusivamente:

* próxima tarefa;
* objetivo;
* ponto exato de retomada;
* critério para considerar a tarefa concluída.

Esse arquivo deverá permitir que uma nova sessão continue imediatamente do ponto correto.

---

Atualizar somente quando necessário:

```text
src/content/project/DECISIONS.md
```

Registrar apenas decisões arquitetônicas relevantes, como:

* padrões de componentes;
* organização das pastas;
* estratégias de carregamento;
* decisões de arquitetura;
* padrões de reutilização.

Não registrar progresso de implementação.

---

# RESULTADO ESPERADO

Ao final da implementação o projeto deverá apresentar características compatíveis com aplicações profissionais desenvolvidas em Vue 3.

O código deverá transmitir organização, clareza, facilidade de manutenção, excelente experiência do usuário, desempenho e arquitetura moderna.

Toda implementação deverá permanecer consistente entre diferentes sessões de desenvolvimento, permitindo retomada do trabalho sem perda de contexto e sem reimplementações desnecessárias.

Em nenhuma hipótese reinterprete, resuma ou substitua a documentação por conhecimento próprio. Sempre que houver divergência entre conhecimento prévio e a documentação do projeto, prevalecerá a documentação fornecida pelo usuário.