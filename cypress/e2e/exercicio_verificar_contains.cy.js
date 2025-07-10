describe('Verificar Contains', () => {
beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
       
    });
    it('Teste titulo', () => {
       cy.title().should('eq', 'AdoPet')
    
    });
    it('Verifica mensagem de texto', () => {
        cy.contains('.initial > p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    });
    it('Verifica mensagem de texto', () => {
        cy.contains('.footer','Quem ama adota!').should('be.visible');
        
    });
});