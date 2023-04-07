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
  cy.task('printObject', team)
})
