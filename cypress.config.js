const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    ENV:  ''
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://jupiter.cloud.planittesting.com',
  },
  // config to auto-test Cypress if there are any changes made to the specs file
  watchForFileChanges : false,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/results/assets',
  video: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  }
});
