describe('verifica se navbar está visível', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#navBar').should('be.visible');
  })
})

describe('verifica se o botão detalhes está funcionando (revista do spider man) ', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#navBar').should('be.visible');
    cy.get('#3').should('be.visible').click();

  })

})

describe('verifica se o botão para adicionar ao carrinho esta funcionado (revista do spider man) ', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#navBar').should('be.visible');
    cy.get('#1308').should('be.visible').click();
    cy.get('#carrinho').should('be.visible').click();
  })

})

describe('verifica se o botão para adicionar ao carrinho esta funcionado e se a compra é finalizada(revista do spider man) ', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#navBar').should('be.visible');
    cy.get('#1308').should('be.visible').click();
    cy.get('#carrinho').should('be.visible').click();
    cy.get('#finalizarCompra').should('be.visible').click();

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Compra finalizada.')
    })
  })

})

