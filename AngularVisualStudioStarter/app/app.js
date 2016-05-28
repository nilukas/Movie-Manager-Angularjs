(function () {
    'use strict';

    angular.module('app', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'app/views/Movies.html',
            controller: 'MovieController',
            controllerAs: 'movies'
        })
        .when('/Add', {
            templateUrl: 'app/views/AddMovie.html',
            controller: 'MovieController',
            controllerAs: 'create'
        });

      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
      });
  }]);

})();