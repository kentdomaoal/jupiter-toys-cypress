const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({ 
  env: {
    ENV:  'stg'
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
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
