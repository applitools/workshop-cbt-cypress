/// <reference types="cypress" />


// --------------------------------------------------------------------------------
// Test Cases
// --------------------------------------------------------------------------------

describe('A visual test with Applitools', () => {

    it('should log into the demo app', () => {

        cy.eyesOpen({
            appName: 'Applitools Demo App',
            testName: 'Login',
        })

        loadLoginPage()
        verifyLoginPage()
        performLogin()
        verifyMainPage()
    })

    afterEach(() => {
        cy.eyesClose()
    })
})


// --------------------------------------------------------------------------------
// Test Step Functions
// --------------------------------------------------------------------------------

function loadLoginPage() {
    let site = Cypress.env('DEMO_SITE') ?? 'original'
    let extra = (site == 'original') ? '' : '/index_v2.html'
    cy.visit('https://demo.applitools.com' + extra)
}

function verifyLoginPage() {
    cy.eyesCheckWindow({
        tag: "Login page",
        target: 'window',
        fully: true
    });
}

function performLogin() {
    cy.get('#username').type('andy')
    cy.get('#password').type('i<3pandas')
    cy.get('#log-in').click()
}

function verifyMainPage() {
    cy.eyesCheckWindow({
        tag: "Main page",
        target: 'window',
        fully: true,
        matchLevel: 'Layout'
    });
}
