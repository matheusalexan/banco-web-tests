describe('login', () => {
  beforeEach(() => {
     cy.visit('/')
     cy.screenshot('apos-visitar-pagina')
  })
  it('Login com dados validos deve permitir entrada no sistema', () => {
    cy.fazerLoginComCredenciasValidas()
    cy.contains('h4','Realizar Transferência').should('be.visible')

  })
    it('Login com dados invalidos deve apresentar mensagem de erro', () => {
    cy.fazerLoginComCredenciasInvalidas()
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  
  })
})