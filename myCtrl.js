var app = angular.module("testApp", []);
var serverPath = ""
app.controller("testCtrl", function($scope, $http, $interval) {
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

    // Testing http service
    // $http.get("./test.html").then(function (response) {
    $http.get("https://pokeapi.co/api/v2/pokemon/charmander").then(function (response) {
        $scope.serverRes = response.data.name;
    })

    // Dynamic Time
    $scope.time = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.time = new Date().toLocaleTimeString();
    }, 1000);
});