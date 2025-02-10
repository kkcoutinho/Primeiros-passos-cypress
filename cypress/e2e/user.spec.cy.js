// Deve se evitar repetir os elementos, crie variaveis logo abaixo do describe, pois se algo mudar, não afetará
// o teste, no exemplo abaixo, cria-se uma lista de seletores, se precisar mexer em algum, mexe-se somente na const
// se o seletor mudar, teria que mudar o código todo, dessa forma muda somente a const
//*** Lembre-se em selecionar seletores únicos e que não sejam alterados, usar classes, atributos de nome podem ser
// alterados a qq momento pelo dev***
// A url do projeto está em cypress.config.js

// 2. Atributo: É uma propriedade de um elemento HTML que define seu comportamento ou aparência. 
// Alguns exemplos comuns são id, class, name, href, type, entre outros.Uma estrutura HTML (<button>, <input>, <a>, etc.)
// Atributo: Uma propriedade do elemento (id, class, name, href, etc.).
// Seletor: A forma como selecionamos elementos (.classe, #id, [atributo="valor"]).

import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {
// Em códigos grandes é importante fazer assim criando const com os elementos 
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active", //observe que diversos campos não tem um elemento único, é o mesmo 
    // atributo p vários campos, vários campos com o mesmo seletor
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",

  }

// utilizar o only p rodar só esse teste
  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.userName) 
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click() 
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // para ter certeza que entrará nessa página ao logar
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest') // clear p limpar o campo e então preencher
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    // A partir dos campos abaixo farei a consulta da posição do campo pelo selector help, pois todos eles tem 
    // o mesmo atributo, nomeado de genericField na const** observe é um array, ou seja o 5 é na vdd 4, começa com zero
    cy.get(selectorsList.genericField).eq(3).clear().type('EmplIdTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTes')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenceTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('TestFieldTest')
    cy.get(selectorsList.submitButton).eq(0).click() //tem 2 botões de save, esse é o primeiro, por isso o eq 0 (lembre-se array, começa do zero)
    cy.get('body').should('contain', 'Successfully Update')
  })



  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.userName) 
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})


/*/
// A classe nunca é a melhor forma de se usar, evite focar em textos como atributo, se tiver id é melhor

describe('Orange HRM Tests', () => {
  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin') 
    //só copiar direto do cypress add .type para inserir o username e abaixo a senha

    //observe abaixo que as vezes o cypress retorna diversos atributos, podemos inspecionar com o CSS Selector
    // e encontrar um elemento único, como feito acima com name=username

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click() 
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // para ter certeza que entrará nessa página ao logar
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard') // .contains p ter ctz que o title é Dashboard
  })


  // Login Fail, só trocar dados de login e remover as duas últimas linhas de confirmação de pg de acesso
  // como está dentro do mesmo arquivo vai rodar os dois testes juntos, se quiser rodar separado crie outro, copiando e renomeando
  // é possível tbm após o it colocar skip p pular o teste. exemplo: it.skip(...)
  // o código da forma como está foi selecionado pelo cypress

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test') 
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('test')
    cy.get('.oxd-button').click() 
    cy.get('.oxd-alert')
    
  })
})
/*/