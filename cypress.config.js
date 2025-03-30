const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'shopdesk_report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: "https://shopdesk.im/",
  viewportHeight: 960,
  viewportWidth: 1538,
  defaultCommandTimeout: 10000,
  env: require('./cypress.env.json'), 
  setupNodeEvents(on, config) {
    // implement node event listeners here
    require('cypress-mochawesome-reporter/plugin')(on);
  },
  },
});
