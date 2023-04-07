const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 300,
  viewportWidth: 300,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        printObject(o) {
          console.log('received object', o)

          // send an object with a circular reference
          // back to the spec browser process
          const report = {
            entry: {
              passed: true,
            },
          }
          // set a circular reference
          report.entry.report = report

          return report
        },
      })
    },
    supportFile: false,
  },
})
