angular
  .module("myApp", ["ngRoute"])

  .controller(
    "controllerTodo",
    function ($scope, $http, $route, $routeParams, $location) {
      $scope.$route = $route;
      $scope.$location = $location;
      $scope.$routeParams = $routeParams;
    
    }
  )

  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "../../templates/home.html",
        controller: "controllerTodo",
      })
      .when("/form", {
        templateUrl: "../../templates/form.html",
        controller: "controllerTodo",
      });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
  });
