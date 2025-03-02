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

const loginPage = new LoginPage() 
const dashboard = new dashboardPage()

describe ('Login Orange HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.userName, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  it('Login - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)
    dashboard.checkDashboardPage()
  })

})