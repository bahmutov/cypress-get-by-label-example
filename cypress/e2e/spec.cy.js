/// <reference types="cypress" />

it('finds the input elements by their labels', () => {
  // path with respect to the root folder
  cy.visit('cypress/index.html')

  const team = {
    person: {
      name: 'Joe',
    },
  }
  // set a circular reference
  team.person.team = team
  // "fix" the object to be sent to prevent cycles
  // from breaking cy.task and send a string
  cy.task('printObject', team)
    // parse the response string and confirm
    // its "entry.passed" property is true
    .its('entry.passed')
    .should('equal', true)
})
