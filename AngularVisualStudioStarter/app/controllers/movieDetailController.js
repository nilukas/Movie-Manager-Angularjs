app.controller('MovieDetailController', function ($scope, srvShareData) {
    $scope.characters = [];
    $scope.sharedData = srvShareData.getData()[0];

    angular.forEach($scope.sharedData.characters, function (character, index) {
        $scope.characters.push(character);
    });

    //console.log($scope.sharedData);
    // console.log($scope.sharedData.name);
    //console.log($scope.sharedData.characters[0]);
});