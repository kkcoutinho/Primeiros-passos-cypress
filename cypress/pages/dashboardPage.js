class dashboardPage {
    selectorList () {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
        }
        return selectors // precisa retornar o objeto (selector), senão abaixo não funciona
    }

// primeira coisa acessar a página
    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index') // para ter certeza que entrará nessa página ao logar
        cy.get(this.selectorList().dashboardGrid).should('be.visible')
    }
}
// lembre-se fazer o import do dashboardPage
// lemre-se de fazer o export do dashboardPage
export default dashboardPage

