const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 300,
  viewportWidth: 300,
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
  },
})
