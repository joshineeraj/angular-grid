var contactManager = angular.module('contactManager')

contactManager.controller('InfoCtrl',
		  function InfoCtrl($scope, $routeParams) {
		    $scope.contact = $scope.contacts[$routeParams.id];
		  });

contactManager.controller('AddCtrl',
		  function AddCtrl($scope, $location) {
		    $scope.contact = {};
		    $scope.add = function () {
		      $scope.contacts.push($scope.contact);
		      $location.url('/');
		    };
		  });
contactManager.controller('EditCtrl',
		  function EditCtrl($scope, $routeParams, $location) {
		    $scope.contact = $scope.contacts[$routeParams.id];
		    $scope.edit = function () {
		      $scope.contacts[$routeParams.id] = $scope.contact;
		      $location.url('/');
		    };
		  });
contactManager.controller('RemoveCtrl',
		function RemoveCtrl($scope, $routeParams, $location) {
	    	$scope.contact = $scope.contacts[$routeParams.id];
	    	$scope.remove = function () {
	    	$scope.contacts.splice($routeParams.id, 1);
	    	$location.url('/');
	    	};
	    	$scope.back = function () {
	    		$location.url('/');
	    	};
	  	});