angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

	$routeProvider

	// home page
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'MainController'
	})

	// shows page that will use the ShowController
	.when('/shows', {
		templateUrl: 'views/show.html',
		controller: 'ShowController'
	});

	$locationProvider.html5Mode(true);

}]);