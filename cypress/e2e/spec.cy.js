import 'cypress-get-by-label/commands'

it('find the elements', () => {
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
})
