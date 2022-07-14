import 'cypress-get-by-label/commands'

chai.config.truncateThreshold = 200

it('find the elements', { viewportWidth: 1000, viewportHeight: 1000 }, () => {
  // path with respect to the root folder
  cy.visit('cypress/index.html')

  cy.getByLabel('First name:').type('Joe')
  cy.getByLabel('Last name:').type('Smith')

  // check the form inputs
  cy.get('form')
    .invoke('serializeArray')
    .should('deep.equal', [
      { name: 'fname', value: 'Joe' },
      { name: 'lname', value: 'Smith' },
    ])
  // take a screenshot of the entire test runner
  // so it includes the command log and the app
  // the screenshot should be saved as "cypress/screenshots/form.png"
  cy.screenshot('form', { capture: 'runner', overwrite: true })
})
