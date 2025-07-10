describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    });


    it('Realizando login com sucesso', () => {
        cy.get('[data-test="input-loginEmail"]').type('vitor@teste.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha2025#')
        cy.get('[data-test="submit-button"]').click();
    });
});