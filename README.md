# Controle de Gastos

Aplicação web para registrar receitas e despesas, acompanhar o saldo e consultar o histórico de movimentações. Projeto feito para praticar JavaScript na prática, depois de montar o HTML e estilizar com CSS.

## 📋 Funcionalidades
- Cadastro de movimentações com descrição, valor, tipo (receita ou despesa) e data
- Validação dos campos, com mensagem de erro quando o preenchimento está incorreto
- Resumo automático com saldo atual, total de receitas e total de despesas
- Histórico de movimentações, com receitas e despesas diferenciadas
- Exclusão de movimentações, com o resumo atualizado na hora
- Dados salvos no navegador (`localStorage`), então continuam ao recarregar a página
- Valores formatados em reais (R$) e datas no formato dd/mm/aaaa

## 🛠️ Tecnologias usadas
- HTML5: estrutura da página
- CSS3: estilização e layout
- JavaScript: lógica, manipulação do DOM e armazenamento local

## ▶️ Como rodar o projeto
1. Clone o repositório:
```bash
   git clone https://github.com/Dev-Gabriel-Oliveira/controle-de-gastos
```
2. Entre na pasta:
```bash
   cd controle-de-gastos
```
3. Abra o arquivo `index.html` no navegador.

## 📚 O que aprendi
- Selecionar e criar elementos com o DOM (`querySelector`, `createElement`, `appendChild`)
- Trabalhar com eventos de clique
- Organizar o código em funções
- Usar arrays e `forEach` para calcular totais
- Salvar e recuperar dados com `localStorage` e `JSON`
- Formatar moeda com `Intl.NumberFormat`

## 👤 Autor
**Gabriel Oliveira
