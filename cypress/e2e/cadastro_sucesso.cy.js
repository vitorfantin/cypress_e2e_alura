describe('Página cadastro Adopet', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Vitor Fantin');
    cy.get('[data-test="input-email"]').type('vitor@teste.com');
    cy.get('[data-test="input-password"]').type('Senha2025#');
    cy.get('[data-test="input-confirm-password"]').type('Senha2025#');
    cy.get('[data-test="submit-button"]').click();
  })
})