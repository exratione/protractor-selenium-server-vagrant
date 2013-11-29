/*jshint
  node: true,
  strict: false
*/
/**
 * @fileOverview
 * Protractor configuration to test with Chromium.
 */

var config = exports.config = require('./protractor.conf.base.js').config;

config.capabilities = {
  browserName: 'chrome',
  version: '',
  platform: 'ANY'
};
