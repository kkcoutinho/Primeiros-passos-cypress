// Page Object: para ajudar organizar o projeto de uma forma simples, criar uma pasta (pages no caso), 
// dentro desta pasta criar arquivos js que representem cada uma das pgs do site 
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



    
    /*/ Desefio: inserir informações nas caixas 
    cy.get('.oxd-select-text-input').eq(0).click(); // Clica no primeiro dropdown
    cy.contains('.oxd-select-dropdown', 'Brazilian').click();

    cy.get('.oxd-select-text-input').eq(1).click();
    cy.contains('.oxd-select-dropdown', 'Married').click() /*/

    
/*/
// A classe nunca é a melhor forma de se usar, evite focar em textos como atributo, se tiver id é melhor

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