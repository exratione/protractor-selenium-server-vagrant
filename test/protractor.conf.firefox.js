/*jshint
  node: true,
  strict: false
*/
/**
 * @fileOverview
 * Protractor configuration to test with Firefox.
 */

var config = exports.config = require('./protractor.conf.base.js').config;

config.capabilities = {
  browserName: 'firefox',
  version: '',
  platform: 'ANY'
};
