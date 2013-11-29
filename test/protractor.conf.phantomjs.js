/*jshint
  node: true,
  strict: false
*/
/**
 * @fileOverview
 * Protractor configuration to test with PhantomJS.
 */

var config = exports.config = require('./protractor.conf.base.js').config;

// Blocking issues prevent most uses of PhantomJS and Protractor as of
// Q4 2013. See, for example:
//
// https://github.com/angular/protractor/issues/85
//
// It is also hard to pass through needed command line parameters.
config.capabilities = {
  browserName: 'phantomjs',
  version: '',
  platform: 'ANY'
};
