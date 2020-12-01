myApp.controller('navController', ['$scope', function($scope, $location){

	$scope.isActive - function(destination){
		return destination === $location.path();
	}
}]);