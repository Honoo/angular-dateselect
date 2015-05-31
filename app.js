var date_app = angular.module('date_app', [
      //Application dependencies 
      'ngDateSelect'
])
// Examples of how to use DateSelect in multiple controllers
.controller("FirstController",function($scope){
	// Register a function to get the date from the directive
    $scope.setDateFn = function(dateFn) {
        $scope.getDate = dateFn;
    };

    // Call the registered function to get dates
    $scope.setDate = function(){
    	$scope.firstDate = $scope.getDate();
    }

   	$scope.setSecondDateFn = function(dateFn) {
        $scope.getSecondDate = dateFn;
    };

    $scope.setSecondDate = function(){
    	$scope.secondDate = $scope.getSecondDate();
    }
})
.controller("SecondController",function($scope){
   	$scope.setThirdDateFn = function(dateFn) {
        $scope.getThirdDate = dateFn;
    };

    $scope.setThirdDate = function(){
    	$scope.thirdDate = $scope.getThirdDate();
    }
});