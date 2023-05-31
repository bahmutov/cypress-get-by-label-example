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
    setupNodeEvents(on, config) {},
    supportFile: false,
  },
})
