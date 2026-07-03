# 06-github.md

# GitHub Integration Specification

Projeto: Portfólio Profissional — Paulo Manzano

Versão: 1.0

---

# 1. Objetivo

Esta seção tem como objetivo complementar o portfólio profissional através de informações públicas do GitHub.

Ela não deverá substituir a seção de Projetos nem funcionar como uma vitrine do GitHub.

Os projetos apresentados na Landing Page possuem prioridade.

O GitHub servirá apenas como um indicador adicional de atividade e evolução técnica.

---

# 2. Estratégia

O visitante deverá compreender que:

- existe consistência na evolução profissional;
- o profissional mantém atividade no GitHub;
- existe preocupação com organização e qualidade.

A seção não deve incentivar o visitante a analisar métricas irrelevantes.

---

# 3. Fonte de Dados

Todas as informações deverão ser obtidas através da API pública do GitHub.

Usuário:

manzano-pje

As requisições deverão ficar isoladas em:

```text
services/github.service.ts
```

Nenhum componente deverá acessar a API diretamente.

---

# 4. Estrutura da Seção

A seção deverá ser compacta.

Ela será composta por três blocos.

---

## GitHub Rank

Exibir:

GitHub Rank

Exemplo:

A+

ou

A

ou

B

Essa informação deverá possuir maior destaque.

---

## Current Streak

Mostrar:

Dias consecutivos de contribuição.

Utilizar o card oficial.

---

## Contribution Graph

Mostrar o gráfico anual de contribuições.

Essa informação demonstra constância sem depender de quantidade de commits.

---

# 5. Informações que NÃO deverão ser exibidas

Não mostrar:

Followers

Following

Número de Repositórios

Quantidade de Stars

Forks

Quantidade total de Commits

Issues

Pull Requests

Activity Feed

Essas métricas pouco agregam valor para recrutadores.

---

# 6. Linguagens

Não utilizar gráficos de linguagens.

Não utilizar percentual de linguagens.

Motivo:

Os repositórios de estudo podem distorcer a principal especialidade do profissional.

A Landing Page já comunica claramente que o foco principal é Java.

---

# 7. Repositórios

Não listar automaticamente todos os repositórios.

A apresentação dos projetos será realizada exclusivamente na seção "Projetos".

Caso algum repositório seja exibido futuramente, ele deverá ser selecionado manualmente.

---

# 8. Layout

A seção deverá ocupar pouco espaço vertical.

Sugestão:

Título

Breve descrição

Grid com três cards

GitHub Rank

Current Streak

Contribution Graph

A aparência deverá seguir o mesmo Design System utilizado no restante da Landing Page.

---

# 9. Performance

As informações deverão ser carregadas de forma assíncrona.

Caso a API demore para responder:

Exibir Skeleton Loading.

Jamais bloquear o carregamento da página.

---

# 10. Tratamento de Erros

Caso ocorra qualquer falha:

Exibir placeholders elegantes.

Não mostrar mensagens técnicas.

Não exibir stack traces.

A Landing Page deverá permanecer completamente funcional.

---

# 11. Cache

As informações do GitHub não mudam constantemente.

Utilizar cache em memória durante a sessão da aplicação.

Evitar múltiplas requisições desnecessárias.

---

# 12. Atualização

As informações deverão ser atualizadas apenas ao recarregar a página.

Não utilizar atualização automática.

---

# 13. Responsividade

Desktop

Exibir os três cards lado a lado.

Tablet

Dois cards por linha.

Mobile

Um card por linha.

---

# 14. Acessibilidade

Todos os gráficos deverão possuir:

- descrição textual;
- título acessível;
- contraste adequado;
- navegação por teclado.

---

# 15. Critérios de Aceitação

A implementação será considerada concluída quando:

- todas as informações forem carregadas automaticamente;
- a interface permanecer funcional mesmo sem resposta da API;
- o GitHub complementar os projetos sem competir visualmente com eles;
- a identidade visual permanecer consistente com o restante da Landing Page;
- toda a lógica permanecer isolada na camada de serviços.

---

# 16. Evolução Futura

A arquitetura deverá permitir a inclusão futura de novas integrações, como:

- estatísticas de contribuições;
- organizações do GitHub;
- projetos destacados;
- releases;
- contribuições open source.

Essas funcionalidades deverão ser implementadas sem necessidade de alterar os componentes existentes, preservando a separação entre apresentação, serviços e dados.