describe('Transferencias', () => {
  beforeEach (() => {
    cy.visit('/')
    cy.fazerLoginComCredenciasValidas()
  }) 

  it('Deve transferir quando informo dados e valor validos', () => {
    cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '11')
    cy.verificarMensagemNoToast('Transferência realizada!')
  })

  it('Deve apresentar erro quando tentar trasnferir mais que 5000 sem o token', () => {
    cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '6000')
    cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
  })
})
