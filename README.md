# Teste de Automação com Cypress - API dos Correios
Este projeto foi desenvolvido com o intuito de realizar testes automatizados na API dos Correios utilizando o framework Cypress.

## Pré-requisitos
- Node.js v18.16.0 ou superior
- npm 9.5.1 ou superior

## Instalação
1. Clone este repositório
2. Navegue até a pasta raiz do projeto
3. Execute o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```

## Execução dos testes
Para executar os testes, utilize o seguinte comando:

```bash
npx cypress open
```

Este comando irá abrir a interface do Cypress e exibirá todos os testes disponíveis. Basta clicar no teste desejado para que ele seja executado.

## Cenários de teste
Este projeto contém dois cenários de teste, um válido e outro inválido. Os testes realizam uma requisição HTTP GET para a API dos Correios informando um CEP válido ou inválido e verificam se a resposta está de acordo com o esperado.

## Cenário válido
O cenário válido consiste em enviar uma requisição para a API dos Correios informando um CEP válido e verificar se a resposta está de acordo com o esperado. O teste verifica se o status da resposta é 200 OK e se o corpo da resposta contém as informações do endereço.

## Cenário inválido
O cenário inválido consiste em enviar uma requisição para a API dos Correios informando um CEP inválido e verificar se a resposta está de acordo com o esperado. O teste verifica se o status da resposta é 400 Bad Request e se o corpo da resposta contém uma mensagem de erro informando que o CEP é inválido.

## Conclusão
Este projeto tem como objetivo demonstrar como é possível realizar testes automatizados na API dos Correios utilizando o framework Cypress. Os cenários de teste implementados são apenas exemplos e podem ser adaptados de acordo com as necessidades do projeto.
