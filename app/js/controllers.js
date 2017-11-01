  angular.module('ModuleApp', [])
    .controller('TodosLosLibrosCtrl', ['$scope', function($scope) {

	 $scope.CalcularCircuito1 = function(circuito1) {
	 	$scope.lvk1= circuito1.V1 + "  +  " + circuito1.R1 +"I1  -  " +  circuito1.V2  + "  -  " + circuito1.R2 + "I2"
	 	$scope.lvk2= circuito1.V1 + "  +  " + circuito1.R1 +"I1  +  " +  circuito1.R3 + "I3  - " + circuito1.V3 
     

        var F1={
     		I1:1,
     		I2:1,
     		I3:-1,
     		Result:0
     	}

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

     	alert(F1,F2,F3)

     	var defer=(F1.I1*F2.I2*F3.I3) + (F2.I1*F3.I2*F1.I3) + (F3.I1*F1.I2*F2.I3) - (F1.I3*F2.I2*F3.I1) - (F2.I3*F3.I2*F1.I1) - (F3.I3*F1.I2*F2.I1) 

 		var i1=(F1.Result*F2.I2*F3.I3  +  F2.Result*F3.I2*F1.I3  +  F3.Result*F1.I2*F2.I3  -  F1.I3*F2.I2*F3.Result  - F2.I3*F3.I2*F1.Result  -F3.I3*F1.I2*F2.Result)/defer;

 		$scope.result = "I1 = " + i1

      };

	 $scope.limpiarFormCircuito1 = function() {
	 	$scope.circuito1={};
	 	$scope.lvk1= ""
	 	$scope.lvk2= ""
      };

   }]);
  
