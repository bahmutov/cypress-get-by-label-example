/// <reference types="cypress" />

Cypress.Commands.overwrite('log', (log, message, ...args) => {
  // print the to Cypress Command Log
  // to preserve the existing functionality
  log(message, ...args)
  // send the formatted message down to the Node
  // callback in the cypress.config.js to be printed to the terminal
  cy.task('print', [message, ...args].join(', '), { log: false })
})

it('finds the input elements by their labels', () => {
  // path with respect to the root folder
  cy.visit('cypress/index.html')

  cy.log('Hello')
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
