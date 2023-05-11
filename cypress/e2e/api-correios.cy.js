/// <reference types="cypress" />

describe('Busca um CEP e valida o status code e os dados do response', () => {
  it('Valida informações do CEP válido de Curitiba PR', () => {
    cy.request({
      method: 'GET',
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/82840330'
    }).then((resultado) => {
      console.log(resultado)
      expect(resultado.status).to.equal(200)
      expect(resultado.statusText).to.equal('OK')
      expect(resultado.body.address).to.equal('Rua Rio Jaguaribe')
      expect(resultado.body.city).to.equal('Curitiba')
      expect(resultado.body.state).to.equal('PR')
      expect(resultado.body.number).to.equal('82840330')

    })

  })

  it('Valida informações de CEP inválido', () => {
    cy.request({
      method: 'GET',
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/123456789',
      failOnStatusCode: false
    }).then((resultado) => {
      console.log(resultado)
      expect(resultado.status).to.equal(404)
      expect(resultado.body.errorCode).to.equal('404')
      expect(resultado.body.message).to.equal('Recurso não encontrado')
      expect(resultado.body.info).to.equal('http://api.b2winc.com/doc/error/404')

    })

  })

})