const { setHeadlessWhen, setSharedCookies } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);
setSharedCookies();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    MyApiHelper: {
      require: './my_api_helper.js',
    },
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    },
    REST: {
      endpoint: `http://predator.service.dev.mynd.ws`,
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept-clean',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
