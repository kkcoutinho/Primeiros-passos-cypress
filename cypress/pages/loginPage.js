// Page Object: para ajudar organizar o projeto de uma forma simples, criar uma pasta (pages no caso), 
// dentro desta pasta criar arquivos js que representem cada uma das pgs do site 
// criar como uma classe comum >> Monte aqui todos os steps para rodar o teste do login page

class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']"  
        }

        return selectors // precisa retornar para que seja acessível
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username) 
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()

    }
}

export default LoginPage