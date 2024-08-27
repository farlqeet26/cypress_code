const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 50000,
    baseUrl: 'https://master.chargeautomation.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
