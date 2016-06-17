angular.module('ShowService', []).factory('Show', ['$http', function($http){
	return {
		// call to get all shows
		get: function(){
			return $http.get('/api/shows');
		},

		// these will work when more api calls are set up on the server

		// call to post to create a new show
		create: function(showData){
			return $http.post('/api/shows', showData);			
		},

		// call to delete a show
		delete: function(id){
			return $http.delete('/api/shows/' + id);
		}

	}

}]);