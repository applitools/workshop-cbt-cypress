/// <reference types="cypress" />

describe('A traditional test', () => {

    beforeEach(() => {
        cy.viewport(1600, 1200)
    })

    it('should log into the demo app', () => {
        loadLoginPage()
        verifyLoginPage()
        performLogin()
        verifyMainPage()
    })
})

function loadLoginPage() {
    cy.visit('https://demo.applitools.com')
}

function verifyLoginPage() {
    cy.get('div.logo-w').should('be.visible')
    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('#log-in').should('be.visible')
    cy.get('input.form-check-input').should('be.visible')
}

function performLogin() {
    cy.get('#username').type('andy')
    cy.get('#password').type('i<3pandas')
    cy.get('#log-in').click()
}

function verifyMainPage() {

    // Check various page elements
    cy.get('div.logo-w').should('be.visible')
    cy.get('div.element-search.autosuggest-search-activator > input').should('be.visible')
    cy.get('div.avatar-w img').should('be.visible')
    cy.get('ul.main-menu').should('be.visible')
    cy.contains('Add Account').should('be.visible')
    cy.contains('Make Payment').should('be.visible')
    cy.contains('View Statement').should('be.visible')
    cy.contains('Request Increase').should('be.visible')
    cy.contains('Pay Now').should('be.visible')

    // Check time message
    cy.get('#time').invoke('text').should('match', /Your nearest branch closes in:( \d+[hms])+/)

    // Check menu element names
    cy.get('ul.main-menu li span').should(items => {
        expect(items[0]).to.contain.text('Card types')
        expect(items[1]).to.contain.text('Credit cards')
        expect(items[2]).to.contain.text('Debit cards')
        expect(items[3]).to.contain.text('Lending')
        expect(items[4]).to.contain.text('Loans')
        expect(items[5]).to.contain.text('Mortgages')
    })

    // Check transaction statuses
    const statuses = ['Complete', 'Pending', 'Declined']
    cy.get('span.status-pill + span').each(($span, index) => {
        expect(statuses).to.include($span.text())
    })
}