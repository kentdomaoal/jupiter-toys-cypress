const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    ENV:  'stg'
  },
  e2e: {
    baseUrl: 'http://jupiter.cloud.planittesting.com',
  },
  watchForFileChanges : false,
});
