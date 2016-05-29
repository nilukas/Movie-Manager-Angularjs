var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.factory('MovieFactory', function ($http) {
    return {
        get: function () {
            console.log("read json file");
            return $http.get('Movies.json');
        }
    };
});

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
		.when("/", {
		    templateUrl: 'app/views/Movies.html',
		    controller: 'MovieController'
		})
		.when("/details", {
		    templateUrl: 'app/views/Movie-Details.html',
		    controller: 'MovieDetailController'
		})
    	.when("/add", {
    	    templateUrl: 'app/views/AddMovie.html',
    	    controller: 'MovieController'
    	})
    // .otherwise({ redirectTo: '/'})
    ;
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
}]);
