angular.module('status',['ngRoute'])
  .controller("StatusCtrl", ['$routeParams', '$scope', 'addStatus', function($routeParams, $scope, addStatus){
  	
    $scope.statuses = ["111", "222", "333"];
    this.name = "StatusCtrl";
  	this.params = $routeParams;
  	$scope.callAddStatus = function(){
  		addStatus();
  	}
  	

  	// $scope.deletedStatuses = [];
   //  $scope.addedStatuses = [];

  	// $scope.addStatus = function(){
   //      $scope.statuses.unshift($scope.enteredStatus);
   //      $scope.addedStatuses.unshift($scope.enteredStatus);   
   //  }
    
    // $scope.removeStatus = function(status) {
    //     $scope.deletedStatuses.unshift(status);
        
    //     var i = $scope.statuses.indexOf(status);
    //     $scope.statuses.splice(i, 1);        
    // }
  }])
  .factory("addStatus", function(){
  	var statuses = ["111", "222", "333"];
  		return function(enteredStatus){
        statuses.unshift(enteredStatus);
        console.log('??',enteredStatus)
        // addedStatuses.unshift(enteredStatus);   
    }
  	
  })

