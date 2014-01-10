var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
	$http.get('phones/phones.json').success(function(data) {
		$scope.phones = data;
	});

	$scope.orderProp = 'age';
});

var calculatorApp = angular.module('calculatorApp', []);
calculatorApp.controller('CalController', function($scope){
	$scope.add = function(){
		$scope.result = $scope.first_number + $scope.last_number;
	}
	$scope.sub = function(){
		$scope.result = $scope.first_number - $scope.last_number;
	}
	$scope.div = function(){
		$scope.result = $scope.first_number / $scope.last_number;
	}
	$scope.mul = function(){
		$scope.result = $scope.first_number * $scope.last_number;
	}
})