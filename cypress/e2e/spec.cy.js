/// <reference types="cypress" />

it('finds the input elements by their labels', () => {
  // path with respect to the root folder
  cy.visit('cypress/index.html')

  // find the element with the label "First name:"
  // and type "Joe"
  // Hint: use https://github.com/bahmutov/cypress-get-by-label
  //
  // find the element with the label "Last name:"
  // and type "Smith"
  //
  // check the form inputs using jQuery method
  // https://api.jquery.com/serializeArray/
  // which returns an array of "name/value" objects
  // https://on.cypress.io/get
  // https://on.cypress.io/invoke
  // https://glebbahmutov.com/cypress-examples/commands/assertions.html
})
