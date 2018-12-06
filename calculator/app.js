angular.module('calculator',[]);

angular.module('calculator')
	.controller('indexController',test)
	.controller('other',test);
	
function test($scope){
	
	var temp;
	var operation;
	
	$scope.one = function one(){
		
		$scope.calc = 1;
		
	}
	$scope.two = function two(){
		
		$scope.calc = 2;
		
	}
	$scope.three = function three(){
		
		$scope.calc = 3;
		
	}
	$scope.four = function four(){
		
		$scope.calc = 4;
		
	}
	$scope.five = function five(){
		
		$scope.calc = 5;
		
	}
	$scope.six = function six(){
		
		$scope.calc = 6;
		
	}
	$scope.seven = function seven(){
		
		$scope.calc = 7;
		
	}
	$scope.eight = function eight(){
		
		$scope.calc = 8;
		
	}
	$scope.nine = function nine(){
		
		$scope.calc = 9;
		
	}
	$scope.zero = function zero(){
		
		$scope.calc = 0;
		
	}
	$scope.addThem = function plus(){
		
		operation = "add";
		temp = $scope.calc;
		$scope.calc = 0;
		
	}
	$scope.subThem = function minus(){
		
		operation = "subtract";
		temp = $scope.calc;
		$scope.calc = 0;
		
	}
	$scope.multThem = function times(){
		
		operation = "multiply";
		temp = $scope.calc;
		$scope.calc = 0;
		
	}
	$scope.divideThem = function divide(){
		
		operation = "divide";
		temp = $scope.calc;
		$scope.calc = 0;
		
	}
	$scope.equals = function end(){
		
		if (operation == "add"){
			
			$scope.calc = temp + $scope.calc;
			
		}else if (operation == "subtract"){
			
			$scope.calc = temp - $scope.calc;
			
		}else if (operation == "multiply"){
			
			$scope.calc = temp * $scope.calc;
			
		}else if (operation == "divide"){
			
			$scope.calc = temp / $scope.calc;
			
		}
		
	}
}