var app = angular.module("testApp", []);
app.controller("testCtrl", function($scope) {
    $scope.color = "red";
    $scope.x = 5;
    $scope.y = 15;
    $scope.stem = 1;
    $scope.petals = 5;
});