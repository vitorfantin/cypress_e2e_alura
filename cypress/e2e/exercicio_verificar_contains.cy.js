describe('Verificar Contains', () => {
    before(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    });
    it('Teste titulo', () => {
        cy.title().should('eq', 'Adopet');
    
    });
    it('Verifica mensagem de texto', () => {
        cy.contais('p', 'Quem ama adota!').should('be.visible');
    });
    it('Verifica mensagem de texto', () => {
        cy.contais('p', 'Adotar pode mudar umaAdotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should(be.visible);
        
    });
});