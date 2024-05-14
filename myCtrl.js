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
    $scope.animeData = [
        {
            "name": "Yamada-kun to Lv999 no Koi wo Suru",
            "review": "Plan to Watch"
        },
        {
            "name": "Natsume Yuujinchou San",
            "review": "My favorite season of Natsume series. Favorite episodes are EP 3 and 4."
        }
    ]

    // Testing http service
    // $http.get("./test.html").then(function (response) {
    $http.get("https://pokeapi.co/api/v2/pokemon/charmander")
    .then(function (response) {
        $scope.serverRes = response.data.name;
    }, function (response) {
        $scope.err = "Error fetching Pokemon data"
        $scope.status = response.statusText;
    })

    // Dynamic Time
    $scope.time = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.time = new Date().toLocaleTimeString();
    }, 1000);
});