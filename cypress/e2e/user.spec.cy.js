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
import MyInfoPage from '../pages/myInfoPage'

//acessei: chances.js, cliquei em node, segui os passos para instalar o chance
// npm install --save chance, depois siga os passos
// usa-se o chance para gerar dados aleatórios, veja o link person, para gerar dados de pessoa
const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage() 
const dashboard = new dashboardPage()
const menu = new menuPage()
const myInfoPage = new MyInfoPage()


describe ('Orange HRM Tests', () => {

  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)

    dashboard.checkDashboardPage()

    menu.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last()) // são funções do chance para gerar nomes aleatórios
    myInfoPage.fillEmployeeDetails('EmployId', 'otherId', '123456', '2025-10-10')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })

})