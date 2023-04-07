const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 300,
  viewportWidth: 300,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        printObject(o) {
          // parse the object we receive
          // and try printing it to the console
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
          // how would you safely send the report?
          return report
        },
      })
    },
    supportFile: false,
  },
})
