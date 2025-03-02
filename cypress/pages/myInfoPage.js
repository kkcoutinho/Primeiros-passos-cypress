class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            genericComboBox: ".oxd-select-text--arrow",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButtoN: ".--close",
            submitButton: "[type='submit']"
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName) // clear essa função é para limpar o campo e preencher com o novo valor
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)  
}
    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId) // usa o this para chamar a função dentro da mesma classe
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
    }
    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true})
        cy.get('.oxd-select-dropdown > :nth-child(8) > span').click()
        cy.get(this.selectorsList().submitButton).eq(1).click({force: true})
        cy.get(':nth-child(2) > span').click()
    }

    }

export default MyInfoPage
      