app.controller('alumnosCtrl', ['$scope', '$http', function($scope, $http){
    $scope.setActive("mAlumnos");

    $scope.alumnos = {};
    $scope.posicion = 5;

    $http.get('php/servicios/alumnos.listado.php').then( function(res) {
        console.log(res);
        $scope.alumnos = res.data;
    }).catch(function(error) {
       console.log(error); 
    });

    $scope.siguientes = () => {
        if($scope.alumnos.length > $scope.posicion){
            $scope.posicion += 5;
        }
    }

    $scope.anteriores = () => {
        if($scope.posicion > 5){
            $scope.posicion -= 5;
        }
    }
}]);