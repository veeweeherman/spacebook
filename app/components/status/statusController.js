angular.module('status',['ngRoute'])
  .controller("StatusCtrl", ['$routeParams', '$scope', function($routeParams, $scope){
  	
    $scope.statuses = ["111", "222", "333"];
    this.name = "StatusCtrl";
  	this.params = $routeParams;
  	    $scope.deletedStatuses = [];
    $scope.addedStatuses = [];

  	$scope.addStatus = function(){
        $scope.statuses.unshift($scope.enteredStatus);
        $scope.addedStatuses.unshift($scope.enteredStatus);   
    }
    
    $scope.removeStatus = function(status) {
        $scope.deletedStatuses.unshift(status);
        
        var i = $scope.statuses.indexOf(status);
        $scope.statuses.splice(i, 1);        
    }
  }])

