/// <reference types="cypress" />

it('adds a property to Cypress.env', () => {
  // print Cypress.env object to the terminal
  cy.task('print', 'initial env')
  cy.task('print', Cypress.env())
    // add another property to the Cypress.env
    // Cypress.env('answer', 42)
    .then(() => {
      Cypress.env('answer', 42)
      // print the changed Cypress.env object to the terminal
      // did you see the "answer: 42"?
      cy.task('print', 'added answer to env')
      cy.task('print', Cypress.env())
    })
})

it('has the added property', () => {
  // print the Cypress.env object to the terminal
  // did you see the "answer: 42" added in the first test?
  cy.task('print', 'second test env')
  cy.task('print', Cypress.env())
})
