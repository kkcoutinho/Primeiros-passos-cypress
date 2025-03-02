// a classe nunca é o melhor seletor, pois pode ser alterada a qq momento pelo dev, usar classes, atributos de nome
// Deve se evitar repetir os elementos, crie variaveis logo abaixo do describe, pois se algo mudar, não afetará
// o teste, no exemplo abaixo, cria-se uma lista de seletores, se precisar mexer em algum, mexe-se somente na const
// se o seletor mudar, teria que mudar o código todo, dessa forma muda somente a const
//*** Lembre-se em selecionar seletores únicos e que não sejam alterados, usar classes, atributos de nome podem ser
// alterados a qq momento pelo dev***
// A url do projeto está em cypress.config.js

import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import dashboardPage from '../pages/dashboardPage'
import menuPage from '../pages/menuPage'

const loginPage = new LoginPage() 
const dashboard = new dashboardPage()
const menu = new menuPage()


describe ('Orange HRM Tests', () => {
  const selectorsList = {
    
    
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    genericComboBox: ".oxd-select-text--arrow",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButtoN: ".--close",
    submitButton: "[type='submit']"
    
  }

  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)

    dashboard.checkDashboardPage()

    menu.accessMyInfo()

   
    
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('IdTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('LicenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-10-10')
    cy.get(selectorsList.submitButton).eq(0).click({force: true})

    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

    cy.get(selectorsList.genericComboBox).eq(0).click({force: true})
    cy.get('.oxd-select-dropdown > :nth-child(8) > span').click()
    cy.get(selectorsList.submitButton).eq(1).click({force: true})
    cy.get(':nth-child(2) > span').click()

  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.userName)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})