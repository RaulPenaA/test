 /// <reference path="angular.js" /"
 
 var mainApp = angular.module("mainApp", ['ngRoute']);
 mainApp.config(['$routeProvider', function ($routeProvider) {
	 $routeProvider.
	 when('/', {
		 templateUrl: 'Templates/main.html'>
		 controller: 'mainController'
	 }).
	 when('/media', {
		 templateUrl: 'Templates/media.html',
		 controller: 'mediaController'
	 }).
	 when('/characters', {
		 templateUrl: 'Templates/characters.html',
		 controller: 'charactersController'
	 }).
	 when('/locations', {
		 templateUrl: 'Templates/locations.html',
		 controller: 'locationsController'
	 }).
	 when('/community', {
		 templateUrl: 'Templates/community.html',
		 controller: 'communityController'
	 }).
	 otherwise({
		redirectTo: '/'
	 });
 }]);
 mainApp.controller("mainController", function ($scope) {
	 $scope.message = "Welcome to the Fictional Story Wiki!";
 });
 mainApp.controller("mediaController", function ($scope) {
	 $scope.message = "This page tells you about the different media of Fictional Story! +Games <br> +Manga <br> +Anime";
 });
 mainApp.controller("charactersController", function ($scope) {
	 $scope.message = "This page tells you about the characters in fictional story!";
 });
 mainApp.controller("locationsController", function ($scope) {
	 $scope.message = "Learn about the world of Fictional Story and all it's major settings!";
 });
 mainApp.controller("communityController", function ($scope) {
	 $scope.message = "Interact with other fans of Fictional Story!";
 });