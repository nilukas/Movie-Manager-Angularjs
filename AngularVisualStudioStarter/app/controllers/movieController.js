app.controller('MovieController', function ($scope, $rootScope, srvShareData, MovieFactory, $location) {
    MovieFactory.get().then(function (data) {
        if ($rootScope.movies == null) {
            $rootScope.movies = data.data.movies;
        }
    });
    $scope.moviesAdded = [];
    $scope.charactersAdded = [];
    
    $scope.redirectToAddMovie = function () {
        $location.path('/add');
    }

    $scope.redirectToDetails = function (movie) {
        srvShareData.addData(movie);
        $location.path('/details');
    }
    $scope.saveMovie = function () {
        if ($scope.moviesAdded.length == 0) {
            $scope.moviesAdded.push({
                id: $scope.id,
                title: $scope.title,
                description: $scope.description,
                director: $scope.director,
                rating: $scope.rating,
                releaseYear: $scope.releaseYear,
                language: $scope.language,
                country: $scope.country,
            });
        }
        console.log($rootScope.movies);
        if ($scope.charactersAdded != null && $scope.charactersAdded.length > 0) {
            $scope.moviesAdded[0].characters = [];
            var i = 0;

            $scope.charactersAdded.forEach(function (obj) {
                $scope.moviesAdded[0].characters[i] = obj;
                i = i + 1;
            });
            $scope.moviesAdded.forEach(function (movie) {
                $rootScope.movies.push(movie);
            });
            $location.path('/');
        }
         
    }

    $scope.addCharacters = function () {
        $scope.charactersAdded.push({ character: $scope.character, actor: $scope.actor });
    };
});
