// a classe nunca é o melhor seletor, pois pode ser alterada a qq momento pelo dev, usar classes, atributos de nome
// Deve se evitar repetir os elementos, crie variaveis logo abaixo do describe, pois se algo mudar, não afetará
// o teste, no exemplo abaixo, cria-se uma lista de seletores, se precisar mexer em algum, mexe-se somente na const
// se o seletor mudar, teria que mudar o código todo, dessa forma muda somente a const
//*** Lembre-se em selecionar seletores únicos e que não sejam alterados, usar classes, atributos de nome podem ser
// alterados a qq momento pelo dev***
// A url do projeto está em cypress.config.js

describe ('Orange HRM Tests', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']"
  }



  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') 
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})