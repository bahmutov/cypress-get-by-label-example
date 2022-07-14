const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: false,
  viewportHeight: 300,
  viewportWidth: 300,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // https://github.com/bahmutov/cypress-high-resolution
      return require('cypress-high-resolution')(on, config)
    },
    supportFile: false,
  },
})
