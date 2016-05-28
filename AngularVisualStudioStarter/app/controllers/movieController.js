(function () {
    'use strict';

    angular
        .module('app')
        .controller('MovieController', movieController)
        .directive('starRating',starRating);

    function movieController() {
        var vm = this;
        var movies =
[
   {
       "id": "BVwi1",
       "name": "Bag It",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tortor ligula, vitae tincidunt libero tincidunt et. Nunc egestas aliquet dolor, finibus laoreet ante ultricies a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id ipsum ac lorem rutrum vehicula id quis augue. Nullam dapibus magna velit, eget tempus diam aliquet non. Donec finibus purus dolor, vel euismod turpis maximus eu. Praesent faucibus libero nec leo placerat commodo. Morbi ut accumsan dui. Maecenas est risus, interdum non odio sed, consectetur auctor neque. Quisque ac pulvinar erat.",
       "averageRating": 3,
       "releaseYear": 2010,
       "url": "http://www.netflix.com/Movie/Bag_It/70153545",
       "rating": "NR"
   },
   {
       "id": "BW1Ss",
       "name": "Lost Boy: The Next Chapter",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet tortor ligula, vitae tincidunt libero tincidunt et. Nunc egestas aliquet dolor, finibus laoreet ante ultricies a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus id ipsum ac lorem rutrum vehicula id quis augue. Nullam dapibus magna velit, eget tempus diam aliquet non. Donec finibus purus dolor, vel euismod turpis maximus eu. Praesent faucibus libero nec leo placerat commodo. Morbi ut accumsan dui. Maecenas est risus, interdum non odio sed, consectetur auctor neque. Quisque ac pulvinar erat.",
       "averageRating": 4.6,
       "releaseYear": 2012,
       "url": "http://www.netflix.com/Movie/Lost_Boy_The_Next_Chapter/70171826",
       "rating": "NR"
   }
];

        vm.movies = movies;

        vm.redirectToAddMovie = function () {
            window.location = "app/views/AddMovie.html";
        }
        vm.redirectToDetails = function (movie) {
            var object_id = $filter('filter')(vm.movies, {id: movie.id})[0];
            console.log(movie.name);
            window.location = "app/views/Movie-Details.html"
        }
    }

    function starRating() {
        return {
            restrict: 'A',
            template: '<ul class="rating">' +
                '<li ng-repeat="star in stars" ng-class="star">' +
                '\u2605' +
                '</li>' +
                '</ul>',
            scope: {
                ratingValue: '=',
                max: '='
            },
            link: function (scope, elem, attrs) {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            }
        }
    };
})();