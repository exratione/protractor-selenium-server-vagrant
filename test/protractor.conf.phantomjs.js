/*jshint
  node: true,
  strict: false
*/
/**
 * @fileOverview
 * Protractor configuration to test with PhantomJS.
 */

var config = exports.config = require('./protractor.conf.base.js').config;

config.capabilities = {
  browserName: 'phantomjs',
  version: '',
  platform: 'ANY'
};
