// testscript1.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe ('My automation test', function() {

    
    beforeEach(()=>{
        cy.visit ("./index.html")
    })

    it('Opening the Page should display Are you sure you want to continue? and select Yes', function() {
       
        cy.get('#button-1').click()
        cy.contains("Are you sure you want to continue?").should("be.visible")
        cy.get('.confirm').click()
        cy.contains('You just clicked "Yes".').should('be.visible')

    })
    it('Opening the Page should display Are you sure you want to continue? and select Cancel', function() {
       
        cy.get('#button-1').click()
        cy.contains("Are you sure you want to continue?").should("be.visible")
        cy.get('.cancel').click()
        cy.contains('You just clicked "Cancel".').should('be.visible')



    })
    it('Opening the Page should display Are you sure you want to continue -this is the message for the second button? and select Yes', function() {
       
        cy.get('#button-2').click()
        cy.contains("Are you sure you want to continue - this is the message for the second button?").should("be.visible")
        cy.get('.confirm').click()
        cy.contains('You just clicked "Yes".').should('be.visible')
    })

    it('Opening the Page should display Are you sure you want to continue -this is the message for the second button? and select Cancel', function() {
       
        cy.get('#button-2').click()
        cy.contains("Are you sure you want to continue - this is the message for the second button?").should("be.visible")
        cy.get('.cancel').click()
        cy.contains('You just clicked "Cancel".').should('be.visible')
    })
})