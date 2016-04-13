var angular = require('angular');
var ngResource = require('angular-resource');

var app = angular.module('app', [ngResource]);

app.controller('Bro', function($scope, $resource) {
	
	var api = $resource('/api/clients/:id');

	$scope.clients = api.query();

	$scope.add = function() {
		var client = {
			firstName: $scope.firstName,
			lastName: $scope.lastName
		};
		api.save(client, function(savedClient) {
			$scope.clients.push(savedClient);
		});		
	};

	$scope.remove = function(id) {
		api.delete({id: id}, function() {
			$scope.clients = api.query();
		});
	};	

});