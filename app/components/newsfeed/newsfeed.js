angular.module('newsfeed',['ngRoute'])
  .controller("NewsfeedCtrl", ['$routeParams', '$scope', function($routeParams, $scope){
  	
    $scope.newsfeed = ["abc", "xyz", "123"];
    this.name = "NewsfeedCtrl";
  	this.params = $routeParams;
  }])
