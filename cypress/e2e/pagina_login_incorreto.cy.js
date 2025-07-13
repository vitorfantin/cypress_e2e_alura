describe('Página de Login Incorreto', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', { statusCode: 400, }).as('stubPost');
    });
    it('Falha no login do sistema', () => {
        cy.login('vitor123', 'senha123');
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    });

    it('Falha no login mesmo preenchendo informações corretas sem o cadastro e mensagem de retorno do BACK-END', () => {
        cy.login('vitor@teste.com', 'Senha2000#');
        cy.wait('@stubPost');
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    });
});