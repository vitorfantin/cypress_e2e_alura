describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    });


    it('Realizando login com sucesso', () => {
        cy.login('vitor@teste.com', 'Senha2025#');
    });
});