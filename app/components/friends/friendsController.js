angular.module('friends',[])
  .controller("FriendsCtrl", function($scope){
  	console.log('$scope',$scope);
    $scope.friendsList = ["Tom", "Dick", "Harry"];
  })
