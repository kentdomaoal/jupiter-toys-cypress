const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  env: {
    ENV:  'qa'
  },
  e2e: {
    baseUrl: 'http://jupiter.cloud.planittesting.com',
  },
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
