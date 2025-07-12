describe('Página cadastro Adopet', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.cadastro('Vitor Fantin 2', 'vitor2@teste.com', 'Senha2025#', 'Senha2025#');

  })
})