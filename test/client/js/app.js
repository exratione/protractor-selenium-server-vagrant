/*global
  angular: false
*/
/**
 * @fileOverview
 * A simple Angular application setup.
 */

(function () {
  'use strict';

  /*---------------------------------------------------------------------------
  Set up the AngularJS application.
  ---------------------------------------------------------------------------*/

  // Create the example application AngularJS module.
  var test = angular.module('test', ['ngRoute']);

  // Use the config function to set up routes, or route singular in this case.
  test.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/first', {
        controller: 'firstController',
        templateUrl: '/partial/first.html'
      })
      .when('/second', {
        controller: 'secondController',
        templateUrl: '/partial/second.html'
      })
      .otherwise({
        redirectTo: '/first'
      });
  }]);


  /*---------------------------------------------------------------------------
  Set up the Controllers.
  ---------------------------------------------------------------------------*/

  function FirstController ($scope) {
    $scope.title = 'First route';
    // Puts the title in the document head also.
    $scope.$root.title = $scope.title;
  }

  test.controller('firstController', [
    '$scope',
    FirstController
  ]);

  function SecondController ($scope) {
    $scope.title = 'Second route';
    // Puts the title in the document head also.
    $scope.$root.title = $scope.title;
  }

  test.controller('secondController', [
    '$scope',
    SecondController
  ]);

})();
