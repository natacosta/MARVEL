describe('verifica se navbar está visível', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#navBar').should('be.visible');
  })

  it('fail' , ()=>{

    cy.log('navBar não foi carregada')
  })
})