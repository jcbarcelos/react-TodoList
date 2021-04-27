var app = angular.module("myApp", []);
app.controller("controllerTodo", function ($scope, $http) {
  var todoList = this;
  $scope.showMe = false;
  $http({
    method: "GET",
    url: "http://localhost:3000/",
  }).then(
    function successCallback(response) {
      $scope.myData = response.data;
      console.log($scope.myData);
      $scope.showLista = true;
    },
    function errorCallback(response) {
      console.log(response);
    }
  );
  $scope.formulario = function () {
    $scope.showMe = !$scope.showMe;
    console.log($scope.showMe);
  };
  $scope.concluida = function () {
    $http({
      method: "GET",
      url: "http://localhost:3000/concluida",
    }).then(
      function successCallback(response) {
        $scope.myDataConcluido = response.data;
        console.log($scope.myData);
        $scope.showLista = true;
      },
      function errorCallback(response) {
        console.log(response);
      }
    );
  };
  todoList.insert = function () {
    $scope.required = true;
    $scope.form = {
      nome: $scope.nome,
      email: $scope.email,
      descricao: $scope.descricao,
      status: 0,
      countStatus: 0,
    };
    var req = {
      method: "POST",
      url: "http://localhost:3000",
      headers: {
        "Content-Type": "application/json",
      },
      data: $scope.form,
    };

    $http({
      method: "GET",
      url:
        "https://apilayer.net/api/check?access_key=f20f7ae318c34b92ee6a685fac758feb&email=" +
        $scope.email,
    }).then(
      function successCallback(response) {
         if (response.data.did_you_mean !== "") {
          $scope.myEmail = response.data;
          return $scope.myEmail;
        } else {
          $http(req).then(
            function successCallback(response) {
              $scope.reset = function () {
                ($scope.nome = ""),
                  ($scope.email = ""),
                  ($scope.descricao = "");
              };
              $scope.reset();
              $scope.showMe = !$scope.showMe;
              location.reload();
            },
            function errorCallback(response) {
              console.log(response);
            }
          );
        }
      },
      function errorCallback(response) {
        console.log(response);
      }
    );
  };

  $scope.updateStatus = function (index, x) {
    var txt;
    var senhaSupervisor = 'TrabalheNaSaipos';
    var senha = prompt("Senha:", "");
    if (senha == senhaSupervisor) {
      txt = "senha: " + senha;
      $scope.form = {
        status: 0,
        countStatus: x.countStatus == null ? 0 + 1 : x.countStatus + 1,
      };
      console.log($scope.form);
      var req = {
        method: "PUT",
        url: "http://localhost:3000/status/" + x.id,
        headers: {
          "Content-Type": "application/json",
        },
        data: $scope.form,
      };

      $http(req).then(
        function successCallback(response) {
          location.reload();
        },
        function errorCallback(response) {
          console.log(response);
        }
      );
    } else {
      alert("A senha invalida: " + senha + "senha correta: " + senhaSupervisor);
      console.log(txt);
    }
  };

  $scope.updateStatusConcluido = function (x) {
    $scope.required = true;
    $scope.form = {
      status: 1,
      countStatus:
        $scope.myData[x].countStatus == null
          ? 0 + 1
          : $scope.myData[x].countStatus + 1,
    };
    var req = {
      method: "PUT",
      url: "http://localhost:3000/status/" + $scope.myData[x].id,
      headers: {
        "Content-Type": "application/json",
      },
      data: $scope.form,
    };

    $http(req).then(
      function successCallback(response) {
        location.reload();
      },
      function errorCallback(response) {
        console.log(response);
      }
    );
  };

  $scope.dog = function () {
    $http({
      method: "GET",
      url:
        "https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=3",
    }).then(
      function successCallback(response) {
        $scope.myDog = response.data;
        console.log("$scope.myDog: " + $scope.myDog);
        $scope.showDog = !$scope.showDog;
      },
      function errorCallback(response) {
        console.log(response);
      }
    );
  };

  //fim
});
