'use strict';

/* App Module */
var contactManager = angular.module('contactManager', ['ngRoute']);
contactManager.controller('AppCtrl',
		  function AppCtrl ($scope) {
		    $scope.contacts = [{
		      name: 'Brian Ford',
		      phone: '555-555-5555',
		      address: [
		        '1600 Amphitheatre Parkway',
		        'Mountain View, CA 94043'
		      ]
		    }];
		  });

contactManager.config(function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'partials/index.html'
  })
  .when('/info/:id', {
    templateUrl: 'partials/info.html',
    controller: 'InfoCtrl'
  })
  .when('/add', {
    templateUrl: 'partials/add.html',
    controller: 'AddCtrl'
  })
  .when('/edit/:id', {
    templateUrl: 'partials/edit.html',
    controller: 'EditCtrl'
  })
  .when('/remove/:id', {
    templateUrl: 'partials/remove.html',
    controller: 'RemoveCtrl'
  })
  .otherwise({
    redirectTo: '/index'
  });
});