/*global
  describe: false,
  protractor: false
*/
/*jshint
  node: true,
  strict: false
*/
/**
 * @fileOverview
 * Protractor configuration, used to test the Protractor and Selenium setup in
 * the Vagrant VM, and make sure it is functional.
 */

exports.config = {

  // -----------------------------------------------------------------
  // Selenium Setup #1: Launch for each Protractor test run.
  // -----------------------------------------------------------------

  /*
  // TODO: how to force use of the Xvfb process on DISPLAY=:0?

  // Location of the Selenium standalone server jar file.
  seleniumServerJar: '/usr/local/share/selenium/selenium-server-standalone-2.37.0.jar',
  // The selenium standalone server will listen on this port. If null it will
  // choose an unused port.
  seleniumPort: null,
  // The chromeDriver property may or may not be needed depending on the PATH
  // when Protractor runs, but better safe than sorry.
  //
  // It is passed to the Selenium standalone server as the system property
  // webdriver.chrome.driver when it launches.
  chromeDriver: '/usr/local/bin/chromedriver',
  // Additional command line options to pass to Selenium.
  seleniumArgs: [
    // See: http://stackoverflow.com/questions/14058111/selenium-server-doesnt-bind-to-socket-after-being-killed-with-sigterm
    '-Djava.security.egd=file:/dev/./urandom',
    // TODO: This is not passed through correctly.
    '-log /vagrant-share/selenium.log'
  ],
  */

  // -----------------------------------------------------------------
  // Selenium Setup #2: An existing Selenium standalone server.
  // -----------------------------------------------------------------

  // The address of an existing selenium server that Protractor will use.
  //
  // Note that this server must have chromedriver in its path for Chromium
  // tests to work.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // -----------------------------------------------------------------
  // Specify the test code that will run.
  // -----------------------------------------------------------------

  // Spec patterns are relative to the location of this config.
  specs: [
    'spec/*.spec.js'
  ],

  // -----------------------------------------------------------------
  // Browser and Capabilities
  // -----------------------------------------------------------------

  // For a full list of available capabilities, see
  //
  // https://code.google.com/p/selenium/wiki/DesiredCapabilities
  //
  // and
  //
  // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js

  // -----------------------------------------------------------------
  // Browser and Capabilities: PhantomJS
  // -----------------------------------------------------------------

  /*
  capabilities: {
    browserName: 'phantomjs',
    version: '',
    platform: 'ANY'
  },
  */

  // -----------------------------------------------------------------
  // Browser and Capabilities: Chrome
  // -----------------------------------------------------------------

  /*
  capabilities: {
    browserName: 'chrome',
    version: '',
    platform: 'ANY'
  },
  */

  // -----------------------------------------------------------------
  // Browser and Capabilities: Firefox
  // -----------------------------------------------------------------

  /*
  capabilities: {
    browserName: 'firefox',
    version: '',
    platform: 'ANY'
  },
  */

  // -----------------------------------------------------------------
  // Application configuration.
  // -----------------------------------------------------------------

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:10080/index.html',

  // Selector for the element housing the angular app - this defaults to
  // body, but is necessary if ng-app is on a descendant of <body>
  rootElement: 'body',

  // -----------------------------------------------------------------
  // Other configuration.
  // -----------------------------------------------------------------

  // The timeout for each script run on the browser. This should be longer
  // than the maximum time your application needs to stabilize between tasks.
  allScriptsTimeout: 11000,

  /**
   * A callback function called once protractor is ready and available,
   * and before the specs are executed.
   *
   * You can specify a file containing code to run by setting onPrepare to
   * the filename string.
   */
  onPrepare: function() {
    // At this point, global 'protractor' object will be set up, and
    // jasmine will be available.
    //
    // Launch the Express server we will run tests against.
    exports.server = require('./server/expressApp');
  },

  // ----- Options to be passed to minijasminenode -----
  jasmineNodeOpts: {
    /**
     * onComplete will be called just before the driver quits.
     */
    onComplete: function () {
      // Shut down the test Express server.
      exports.server.close();
    },
    // If true, display spec names.
    isVerbose: true,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
  }
};
