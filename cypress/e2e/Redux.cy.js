// describe('Verifica se um item esta sendo adicionado no carrinho', () => {
//   beforeEach(() => {
//     cy.window().its('store').invoke('getState').then((state) => {

//       state.cards.obj = [];
//     });
//     cy.visit('http://localhost:3000/');
//   });

//   it('deve clicar no botão', () => {
//     cy.get('#adicionar').click();

//   });

//   it('deve verificar se o estado do Redux não está vazio', () => {
//     cy.window().its('store').invoke('getState').then((state) => {
//       expect(Object.keys(state).length).to.be.greaterThan(0);
//     });
//   });

// });

import store from '../../src/Redux/Store'

// describe('Verifica se a propriedade store existe no objeto global window', () => {
//   it('deve verificar se a propriedade store existe', () => {
//     cy.window().then((win) => {
//       expect(win.location).to.exist;
//     });
//   });
// });


describe('Verifica se a propriedade store existe no objeto global window', () => {
  it('deve verificar se a propriedade store existe', () => {
    cy.window().then((win) => {
      expect(win.store).to.exist;
      expect(win.store.getState()).to.exist;
    });
  });
});


