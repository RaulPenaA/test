.controller('AppController', function ($scope, PostService) {

	$scope.apiSearch = function() {
	
	
	var service = VideoService, eventName = 'video';
        if ($rootScope.currentController == 'PostController') {
            service = PostService;
            eventName = 'post';
        }

        service.query({query: $scope.global.search}, function(resp) {
		
		$scope.$broadcast(eventName, resp);
        });


    }

})