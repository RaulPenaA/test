var app = angular.module('light', []);

app.controller('MainCtrl', function($scope) {

  $scope.menuItems = ['Home', 'Directory', 'Play Game', 'About'];
$scope.activeMenu = $scope.menuItems[0];

	$scope.setActive = function(menuItem) {
	 $scope.activeMenu = menuItem
	}
  });