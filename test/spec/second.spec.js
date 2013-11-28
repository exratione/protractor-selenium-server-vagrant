/*global
  beforeEach: false,
  browser: false,
  by: false,
  describe: false,
  expect: false,
  it: false,
  protractor: false
 */

describe('Second:', function () {
  'use strict';

  beforeEach(function () {
    browser.get('#/second');
    browser.waitForAngular();
  });

  it('view title', function () {
    var element = browser.findElement(by.css('.page-header h4'));
    expect(element.isDisplayed()).toBe(true);
    expect(element.getText()).toBe('Second route');
  });

});
