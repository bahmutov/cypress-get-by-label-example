// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
const { registerCommand } = require('cypress-get-by-label')
registerCommand()
// or we could register under a different name
registerCommand('getFormField')

describe('cypress-get-by-label', () => {
  it('find the elements', () => {
    // path with respect to the root folder
    cy.visit('cypress/index.html')
    cy.getByLabel('First name:').should('have.value', '').type('Joe')
    cy.getByLabel('First name:').should('have.value', 'Joe')
    // try alternative command name
    cy.getFormField('Last name:').type('Smith')
    // check the form inputs
    cy.get('form')
      .invoke('serializeArray')
      .should('deep.equal', [
        { name: 'fname', value: 'Joe' },
        { name: 'lname', value: 'Smith' },
      ])
  })
})
