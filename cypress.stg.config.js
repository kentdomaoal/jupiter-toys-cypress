const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  env: {
    ENV:  'stg'
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://jupiter.cloud.planittesting.com',
  },
  watchForFileChanges : false,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/results/assets',
  video: false,
  fixturesFolder: 'cypress/fixtures/stg/',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  }
});
