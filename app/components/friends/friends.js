angular.module('friends',['ngRoute'])
  .controller("FriendsCtrl", ['$routeParams', '$scope', function($routeParams, $scope){
  	
    $scope.friendsList = ["Tom", "Dick", "Harry"];
    this.name = "FriendsCtrl";
  	this.params = $routeParams;
  }])

