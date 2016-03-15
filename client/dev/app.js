var angular = require('angular');

var app = angular.module('app', []);
app.controller('Bro', function($scope, $interval) {
	$scope.name = 'Zheka';
	$scope.iq = 110;
	$interval(function() {
		$scope.iq++;
	}, 1000);
});