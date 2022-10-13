const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '58mafn',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
