const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: false,
  viewportHeight: 300,
  viewportWidth: 300,
  e2e: {
    env: {
      username: 'Joe',
      address: {
        city: 'Boston',
        street: 'Main st',
      },
      valid: true,
    },
    setupNodeEvents(on, config) {
      // print the initial Cypress.env object
      // Tip: it is part of the config
      console.log('initial env object')
      console.log(config.env)

      on('task', {
        print(o) {
          console.log(o)
          // cy.task callbacks cannot return undefined
          // so we return null at the end
          return null
        },
      })
    },
    supportFile: false,
  },
})
