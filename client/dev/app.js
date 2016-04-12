var angular = require('angular');

var app = angular.module('app', []);
app.controller('Bro', function($scope, $interval) {
	$scope.name = 'Zheka';
	$scope.iq = 110;
	$scope.age = 37;
	$scope.broAge = $scope.age - 9;
	$interval(function() {
		$scope.iq++;
	}, 1000);

	$scope.onAgeChange = function () {   
      $scope.broAge = -9 + $scope.age ;
    };
    $scope.onBroAgeChange = function () {   
      $scope.age = 9 + $scope.broAge;
    };


});