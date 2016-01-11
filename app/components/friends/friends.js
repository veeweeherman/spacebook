angular.module('friends',['ngRoute'])
	.service('FriendsService', function(){
		// sample data of friends of the home user
		var friendsList = ["Tom Jones", "Dick Tracy", "Harry Metsally"];
		// returns list of all friends
		this.list = function(){
			return friendsList;
		}
	})
  .controller("FriendsController", ['$scope', 'FriendsService',function($scope, FriendsService){

    $scope.friendsList = FriendsService.list();
    
    
  }])

