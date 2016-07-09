var postControllers = angular.module('postControllers', []);

postControllers.controller('ListController', ["$scope", "$http", function($scope, $http) {
	$http.get('js/data.json').success(function(data){
		$scope.posts = data;
		$scope.postOrder = "postName";
	});
	 
}]);

postControllers.controller('DetailsController', ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams) {
	$http.get('js/data.json').success(function(data){
		$scope.posts = data;
		$scope.whichItem = $routeParams.itemId;
	});
	 
}]);