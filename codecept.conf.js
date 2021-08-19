require('dotenv').config()
const { setHeadlessWhen } = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS == 1);

exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: process.env.BASE_URL,
      show: true,
      windowSize: '1366 x 650',
      waitForAction: 2000,
      waitForNavigation: "networkidle0",
      getPageTimeout: 180000,
      waitForTimeout : 180000,
      chrome: {
        args: ['--start-maximized'],
        defaultViewport: null
      },
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {
    reporterOptions:{
      outputDir: "output"
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    cucumberJsonReporter: {
      require: 'codeceptjs-cucumber-json-reporter',
      enabled: true,               // if false, pass --plugins cucumberJsonReporter
      attachScreenshots: true,     // true by default
      attachComments: true,        // true by default
      outputFile: 'cucumber_output.json',     // cucumber_output.json by default
      uniqueFileNames: false,      // if true outputFile is ignored in favor of unique file names in the format of `cucumber_output_<UUID>.json`.  Useful for parallel test execution
      includeExampleValues: false,  // if true incorporate actual values from Examples table along with variable placeholder when writing steps to the report
      timeMultiplier: 1000000,     // Used when calculating duration of individual BDD steps.  Defaults to nanoseconds
    },
    screenshotOnFail: {
      enabled: true
    },
    // stepBystepReport: {
    //   enabled: true
    // },
    allure: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
  },
  tests: './*_test.js',
  name: 'learn_bdd'
}