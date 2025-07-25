# Banco Web Tests

Este projeto contém testes automatizados para a aplicação Banco Web utilizando Cypress e JavaScript. O objetivo é garantir a qualidade e o correto funcionamento das principais funcionalidades do sistema bancário, como login e transferência, por meio de testes end-to-end.

## Objetivo
Automatizar cenários críticos do fluxo bancário, validando funcionalidades essenciais da aplicação web e da API, promovendo agilidade e confiabilidade no processo de validação de software.

## Componentes do Projeto
- **Cypress**: Framework de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de lógicas comuns nos testes.
- **Relatórios Mochawesome**: Geração de relatórios em HTML para visualização dos resultados dos testes.
- **Estrutura de Pastas**:
  - `cypress/e2e/`: Scripts de testes automatizados.
  - `cypress/fixtures/`: Dados de apoio para os testes.
  - `cypress/support/commands/`: Implementação dos custom commands.
  - `cypress/reports/html/`: Relatórios gerados após a execução dos testes.

## Pré-requisitos
- Node.js instalado
- Clonar e executar a [API](https://github.com/juliodelimas/banco-api/) e a [aplicação web](https://github.com/juliodelimas/banco-web)

## Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/matheusalexan/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes
1. Certifique-se de que a API e a aplicação web estejam em execução.
2. Execute os testes com o comando:
   ```bash
   npx cypress run
   ```
3. Para gerar e visualizar o relatório HTML:
   ```bash
   npx cypress run --reporter mochawesome
   open cypress/reports/html/index.html
   ```

## Estrutura dos Testes
- Os testes estão organizados em arquivos dentro de `cypress/e2e/`:
  - `login.cy.js`: Testes relacionados ao login.
  - `transferencia.cy.js`: Testes de transferência bancária.
- Dados sensíveis e de teste estão em `cypress/fixtures/`.

## Custom Commands
Os comandos personalizados estão localizados em `cypress/support/commands/` e facilitam a reutilização de lógicas comuns, como:
- `login`: Realiza o login na aplicação.
- `realizarTransferencia`: Executa o fluxo de transferência bancária.
- Outros comandos utilitários para navegação e validação.

## Relatórios
Após a execução dos testes, um relatório em HTML é gerado em `cypress/reports/html/index.html`, permitindo a visualização detalhada dos resultados, screenshots e vídeos dos testes.

---

Contribuições são bem-vindas! Para dúvidas ou sugestões, abra uma issue.
