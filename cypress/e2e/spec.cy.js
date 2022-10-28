// intellisense for Cypress commands
/// <reference types="cypress" />
// intellisense for cy.getByLabel command
/// <reference types="cypress-get-by-label" />

// import the cypress-get-by-label commands
import 'cypress-get-by-label/commands'
// import the "x2js" NPM module
import X2JS from 'x2js'

it('finds the input elements by their labels using XML list', () => {
  cy.visit('cypress/index.html')
  // load the list of labels from the "cypress/fixtures/labels.xml"
  // and parse it using "x2js" module
  cy.fixture('labels.xml')
    .then((xml) => {
      const x2js = new X2JS()
      const json = x2js.xml2js(xml)
      return json.labels.label
    })
    // you should get an array of objects
    .should('be.an', 'array')
    // Tip: print the list into the DevTools console
    // using console.table method
    .then(console.table)
    // iterate over each label and confirm
    // the page has a label with that text
    // and the corresponding input field
    // has the expected id as listed in "labels.xml"
    .then((labels) => {
      labels.forEach((label) => {
        cy.getByLabel(label.text).should('have.prop', 'id', label.id)
      })
    })
})
