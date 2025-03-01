// a classe nunca é o melhor seletor, pois pode ser alterada a qq momento pelo dev, usar classes, atributos de nome
// Deve se evitar repetir os elementos, crie variaveis logo abaixo do describe, pois se algo mudar, não afetará
// o teste, no exemplo abaixo, cria-se uma lista de seletores, se precisar mexer em algum, mexe-se somente na const
// se o seletor mudar, teria que mudar o código todo, dessa forma muda somente a const
//*** Lembre-se em selecionar seletores únicos e que não sejam alterados, usar classes, atributos de nome podem ser
// alterados a qq momento pelo dev***
// A url do projeto está em cypress.config.js

import userData from '../fixtures/userData.json'

describe ('Orange HRM Tests', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }



  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.userName)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') 
    cy.get(selectorsList.dashboardGrid)
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.userName)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})