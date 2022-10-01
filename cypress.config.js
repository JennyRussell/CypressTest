const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    // baseUrl: 'https://kyber.arche.services/api/v1/learner/curricula/67c8273c-1b6e-4d6d-9110-845f073f196f/activities/a8c60a05-23f5-4a0f-b8c2-90d2e413f097/authorize?identity-provider=kyber-staging',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
