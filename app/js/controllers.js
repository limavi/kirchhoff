  angular.module('ModuleApp', [])
    .controller('kirchhoffCtrl', ['$scope', function($scope) {

    // CIRCUITO #1
	 $scope.CalcularCircuito1 = function(circuito1) {
        //AQUI SE ARMA LA DESCRIPCION DE COMO FUE RECORRIDO EL CIRCUITO
	 	$scope.circuito1.lvk1= circuito1.V1 + "  +  " + circuito1.R1 +"I1  -  " +  circuito1.V2 + "    -  " + circuito1.R2 + "I2 = 0"
	 	$scope.circuito1.lvk2= circuito1.V1 + "  +  " + circuito1.R1 +"I1  +  " +  circuito1.R3 + "I3  -  " + circuito1.V3  + "= 0"
        
        //AQUI SE ARMAN LAS FUNCIONES SEGUN LOS VALORES QUE SE HAYAN INGRESADO POR PANTALLA
        var F1={I1:1, I2:1, I3:-1, Result:0}
     	var F2={
     		I1:circuito1.R1,
     		I2:-circuito1.R2,
     		I3:0,
     		Result: -(circuito1.V1 - circuito1.V2)
     	}
     	var F3={
     		I1:circuito1.R1,
     		I2: 0,
     		I3:circuito1.R3,
     		Result:-(circuito1.V1 - circuito1.V3)
     	}
        //FORMULA PARA RESOLVER 3 ECUACIONES CON 3 INCOGNITAS
     	var defer=(F1.I1*F2.I2*F3.I3) + (F2.I1*F3.I2*F1.I3) + (F3.I1*F1.I2*F2.I3) - (F1.I3*F2.I2*F3.I1) - (F2.I3*F3.I2*F1.I1) - (F3.I3*F1.I2*F2.I1);
 		$scope.circuito1.i1=(F1.Result*F2.I2*F3.I3  +  F2.Result*F3.I2*F1.I3  +  F3.Result*F1.I2*F2.I3  -  F1.I3*F2.I2*F3.Result  - F2.I3*F3.I2*F1.Result  -F3.I3*F1.I2*F2.Result)/defer;
 		$scope.circuito1.i2=(F1.I1*F2.Result*F3.I3  + F2.I1*F3.Result*F1.I3  +  F3.I1*F1.Result*F2.I3  - F1.I3*F2.Result*F3.I1  - F2.I3*F3.Result*F1.I1  -F3.I3*F1.Result*F2.I1)/defer;
 		$scope.circuito1.i3=(F1.I1*F2.I2*F3.Result  +  F2.I1+F3.I2*F1.Result  + F3.I1*F1.I2*F2.Result  - F1.Result*F2.I2*F3.I1  -F2.Result*F3.I2*F1.I1  - F3.Result*F1.I2*F2.I1)/defer;
      };

      $scope.limpiarFormCircuito1 = function() {
        $scope.circuito1={};
      };


    // CIRCUITO #2
    $scope.CalcularCircuito2 = function(circuito2) {
        //AQUI SE ARMA LA DESCRIPCION DE COMO FUE RECORRIDO EL CIRCUITO
        $scope.circuito2.lvk1= "-" + circuito2.V1 + "  +  " + circuito2.R1 +"I1  -  " +  circuito2.R3 + "(I1 - I2)   = 0 " 
        $scope.circuito2.lvk2= circuito2.R3 + "(I2 - I1) +  " + circuito2.R2 +"I2  -  " + circuito2.V2  + " = 0 "
        
        //AQUI SE ARMAN LAS FUNCIONES SEGUN LOS VALORES QUE SE HAYAN INGRESADO POR PANTALLA
        var F1={I1:-1, I2:1, I3:1, Result:0}
        var F2={
            I1:circuito2.R1 + circuito2.R3 ,
            I2:-circuito2.R3,
            I3:0,
            Result: circuito2.V1
        }
        var F3={
            I1:-circuito2.R3,
            I2: circuito2.R2 + circuito2.R3,
            I3:0,
            Result: circuito2.V2
        }
        //FORMULA PARA RESOLVER 3 ECUACIONES CON 3 INCOGNITAS
        var defer=(F1.I1*F2.I2*F3.I3) + (F2.I1*F3.I2*F1.I3) + (F3.I1*F1.I2*F2.I3) - (F1.I3*F2.I2*F3.I1) - (F2.I3*F3.I2*F1.I1) - (F3.I3*F1.I2*F2.I1);
        $scope.circuito2.i1=(F1.Result*F2.I2*F3.I3  +  F2.Result*F3.I2*F1.I3  +  F3.Result*F1.I2*F2.I3  -  F1.I3*F2.I2*F3.Result  - F2.I3*F3.I2*F1.Result  -F3.I3*F1.I2*F2.Result)/defer;
        $scope.circuito2.i2=(F1.I1*F2.Result*F3.I3  + F2.I1*F3.Result*F1.I3  +  F3.I1*F1.Result*F2.I3  - F1.I3*F2.Result*F3.I1  - F2.I3*F3.Result*F1.I1  -F3.I3*F1.Result*F2.I1)/defer;
        $scope.circuito2.i3=(F1.I1*F2.I2*F3.Result  +  F2.I1+F3.I2*F1.Result  + F3.I1*F1.I2*F2.Result  - F1.Result*F2.I2*F3.I1  -F2.Result*F3.I2*F1.I1  - F3.Result*F1.I2*F2.I1)/defer;
      };

     $scope.limpiarFormCircuito2 = function() {
        $scope.circuito2={};
      };

   }]);
  
