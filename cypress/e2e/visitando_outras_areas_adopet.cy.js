// basicamente foi a funcao inteira adicionado .click();  pois dentro cypress já apresenta nome elemento necessário para realizar a funcionalidade, sem a necessidade ficar utilizando contains neste exercicio especifico. 

describe('Visitando outras areas do site', () => {
  it('passes', () => {
    // Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click(); 
    // Visite a página de principal do AdoPet e teste os botões header;
    cy.get('.header__home').click();
    // Visite a página de /login do Adopet;
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    // Visite a página de /home do Adopet;
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    // Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”, eu escolhi o botão para clicar referente a pet gato Lua.
    cy.get(':nth-child(7) > .card__contact').click();


  })
})