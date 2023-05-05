var app = angular.module("testApp", []);
app.controller("testCtrl", function($scope) {
    $scope.color = "red";
    $scope.x = 5;
    $scope.y = 15;
    $scope.stem = 1;
    $scope.petals = 5;
    $scope.curAnime = [
        {name: "Natsume Yuujinchou Shi"},
        {name: "Slime Second Season"},
        {name: "Oshi no Ko"}
    ];
});