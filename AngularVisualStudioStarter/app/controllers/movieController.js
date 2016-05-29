app.controller('MovieController', function ($scope,$rootScope, srvShareData, MovieFactory, $location) {
    MovieFactory.get().then(function (data) {
        $rootScope.movies = data.data.movies;
    });
//    $scope.movies =
//[
//{
//    "id": "BVwi1",
//    "title": "Bag It",
//    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tortor ligula, vitae tincidunt libero tincidunt et. Nunc egestas aliquet dolor, finibus laoreet ante ultricies a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id ipsum ac lorem rutrum vehicula id quis augue. Nullam dapibus magna velit, eget tempus diam aliquet non. Donec finibus purus dolor, vel euismod turpis maximus eu. Praesent faucibus libero nec leo placerat commodo. Morbi ut accumsan dui. Maecenas est risus, interdum non odio sed, consectetur auctor neque. Quisque ac pulvinar erat.",
//    "director": "John kenedy",
//    "rating": 3,
//    "releaseYear": 2010,
//    "language": "English",
//    "country": "US",
//    "characters": [
//        { "character": "sumana", "actor": "Nadeeka" }
//    ]
//},
//{
//    "id": "BW1Ss",
//    "title": "Lost Boy: The Next Chapter",
//    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tortor ligula, vitae tincidunt libero tincidunt et. Nunc egestas aliquet dolor, finibus laoreet ante ultricies a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id ipsum ac lorem rutrum vehicula id quis augue. Nullam dapibus magna velit, eget tempus diam aliquet non. Donec finibus purus dolor, vel euismod turpis maximus eu. Praesent faucibus libero nec leo placerat commodo. Morbi ut accumsan dui. Maecenas est risus, interdum non odio sed, consectetur auctor neque. Quisque ac pulvinar erat.",
//    "director": "John papa",
//    "rating": 4.6,
//    "releaseYear": 2012,
//    "language": "Russian",
//    "country": "Russia",
//    "characters": [{ "character": "wijaya", "actor": "wijaya k" },
//                   { "character": "sira", "actor": "sirisena" }]
//}
//];

    $scope.redirectToAddMovie = function () {
      //  window.location = "app/views/AddMovie.html";
        $location.path('/add');
    }

    $scope.redirectToDetails = function (movie) {
        srvShareData.addData(movie);
        $location.path('/details');
    }
    $scope.saveMovie = function () {
        var name = $scope.title;
        $rootScope.movies.push({
            id: $scope.id,
            title: $scope.title,
            description: $scope.description,
            director: $scope.director,
            rating: $scope.rating,
            releaseYear: $scope.releaseYear,
            language: $scope.language,
            country: $scope.country,
        });
        console.log($rootScope.movies);
       // $location.path('/');
    }
});
